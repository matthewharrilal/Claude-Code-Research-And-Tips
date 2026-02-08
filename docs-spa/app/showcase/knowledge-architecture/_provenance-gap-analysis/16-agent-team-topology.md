# 16 -- Agent Team Topology for Chain Integrity Remediation
## Optimal Multi-Agent Architecture for 33-Gap, ~140-File Provenance Closure

**Generated:** 2026-02-08
**Analyst:** Research & Design Agent (Claude Opus 4.6)
**Inputs:** MEMORY.md (3 prior teams), 10-dark-matter-census.md (139 files, 51 dark matter), 07-perfect-state-gap-audit.md (33 gaps)
**Purpose:** Design the agent team structure that closes all 33 provenance gaps with maximum parallelism, zero file contention, and provably correct output

---

## TABLE OF CONTENTS

1. [Section 1: Team Roles](#section-1-team-roles)
2. [Section 2: Wave Execution Plan](#section-2-wave-execution-plan)
3. [Section 3: File Ownership Matrix](#section-3-file-ownership-matrix)
4. [Section 4: Communication Protocol](#section-4-communication-protocol)
5. [Section 5: Crash Recovery Protocol](#section-5-crash-recovery-protocol)
6. [Section 6: Agent Count Summary](#section-6-agent-count-summary)
7. [Section 7: Prompt Templates](#section-7-prompt-templates)

---

## DESIGN PRINCIPLES (Derived from 3 Prior Teams)

These are the PROVEN constraints from MEMORY.md that shape every decision in this topology:

| Principle | Source | Implication |
|-----------|--------|-------------|
| Binary rules achieve 100% compliance; judgment rules achieve ~0% | Metacognition analysis | Every agent instruction is YES/NO, never "use good judgment" |
| Per-file ownership eliminates all contention | Fix execution team (4 fixers, 0 conflicts) | No two agents write to the same file, EVER |
| 5-10 files per agent is the sweet spot; >12 risks context exhaustion | Phase 2B threading | Largest agent assignment is 10 files |
| Agents MUST write to file BEFORE returning | Builder team lesson | Every agent creates its output file as first action, populates progressively |
| SendMessage is the ONLY way teammates hear you | Builder team lesson | All completion signals go through SendMessage, not TaskUpdate alone |
| One committer, one branch -- lead commits, never agents | All three teams | Agents write files; only Lead runs `git add` and `git commit` |
| Sequential verification prevents Playwright contention | Audit team lesson | Not applicable here (no Playwright), but sequential verification pattern applies |
| Weaver role proven for tracking shared state | All three teams | Weaver is a permanent role |
| Lead THIN rule: zero building, zero Playwright, orchestrate only | Audit team lesson | Lead does NOT create provenance documents |
| Fresh-eyes constraint produces genuinely different perspective | Audit team lesson | Verification agents do NOT read the source material that builders read |
| Agents that commit independently cause merge headaches | Phase 2D lesson | Reinforces: only Lead commits |
| Research agents MUST write to file before returning | Builder team lesson | Reinforces: file-first output pattern |

---

# SECTION 1: TEAM ROLES

## 1.1 Lead (THIN Orchestrator)

**Name:** `lead`

**Responsibilities (binary):**
- START agents in correct wave order (Wave N+1 starts ONLY after Wave N is COMPLETE)
- VERIFY each agent's output file exists before marking that agent complete
- COMMIT all files after each wave completes (single commit per wave)
- TRACK progress in `_provenance-gap-analysis/REMEDIATION-STATE.md`
- SEND wave-start messages to agents with their file assignments
- SHUT DOWN agents after their wave completes

**Files owned (writes):**
- `_provenance-gap-analysis/REMEDIATION-STATE.md` (progress tracker)

**Files read (input):**
- This topology document (16-agent-team-topology.md)
- All output files (to verify existence, NOT to verify content quality)

**What Lead must NOT do:**
- DO NOT create any provenance document (no OD-outbound-findings, no HANDOFF, no SYNTHESIS)
- DO NOT edit any file that an agent owns
- DO NOT run Playwright
- DO NOT verify content quality (that is Verifier's job)
- DO NOT send messages to agents about content -- only about wave transitions

**Maximum files:** 1 (the state tracker)

---

## 1.2 Weaver (Shared State Tracker)

**Name:** `weaver`

**Responsibilities (binary):**
- MAINTAIN `_provenance-gap-analysis/REMEDIATION-STATE.md` cross-reference table
- LOG every agent completion message with timestamp and output file path
- DETECT cross-agent dependencies: if Agent A's output references content that Agent B produces, FLAG it
- UPDATE the state file within 2 minutes of any agent completion message
- ANSWER any agent's question about "what file contains X" with the correct path

**Files owned (writes):**
- `_provenance-gap-analysis/REMEDIATION-STATE.md` (shared with Lead -- Weaver writes the STATUS TABLE section; Lead writes the WAVE PROGRESS section)

**Separation of ownership within shared file:**
- Weaver owns lines under `## AGENT STATUS TABLE` heading
- Lead owns lines under `## WAVE PROGRESS` heading
- Both sections are clearly delimited with `<!-- WEAVER SECTION -->` and `<!-- LEAD SECTION -->` markers

**Files read (input):**
- All agent output files (read-only, for cross-reference tracking)
- All agent SendMessage completions

**What Weaver must NOT do:**
- DO NOT create any provenance document
- DO NOT modify any agent's output file
- DO NOT make content quality judgments
- DO NOT communicate with agents about content -- only about status

**Maximum files:** 1 (shared state tracker)

**Lifecycle:** Active for ALL waves. Does not shut down until final verification completes.

---

## 1.3 Census-Extractor A (Checkpoints + Execution Journal)

**Name:** `census-a`

**Responsibilities (binary):**
- READ every file in `checkpoints/` (20 files) and `_execution-journal/` (5 files)
- EXTRACT all finding IDs (OD-F-###, EXT-*, DEC-*, COMP-F-*) with exact line numbers
- EXTRACT all score data (per-OD scores, dimension breakdowns, audit scores)
- EXTRACT all decision records (what was decided, alternatives considered)
- WRITE extracted data to a structured output file

**Files owned (writes):**
- `_provenance-gap-analysis/extract-checkpoints.md`

**Files read (input):**
- `checkpoints/COMPONENT-AUDIT-COMP-001-011.md`
- `checkpoints/COMPONENT-AUDIT-FOUNDATION.md`
- `checkpoints/COMPONENTS-REGISTRY.md`
- `checkpoints/DISCOVERIES-LOG.md`
- `checkpoints/OD-CHECKPOINT.md`
- `checkpoints/PERCEPTUAL-AUDIT-LOG.md`
- `checkpoints/PERCEPTUAL-DEEPENING-SUMMARY.md`
- `checkpoints/RESEARCH-ACTIVE.md`
- `checkpoints/RETROACTIVE-AUDIT-DD-001-006.md`
- `checkpoints/SOUL-DISCOVERIES.md`
- `checkpoints/VISUAL-AUDIT-COMP-001-011.md`
- `checkpoints/VISUAL-AUDIT-DD-001-006.md`
- `_execution-journal/builder-log.md`
- `_execution-journal/decisions.md`
- `_execution-journal/lead-log.md`
- `_execution-journal/weaver-log.md`

**Output format:**
```
## FINDING IDS EXTRACTED
| Finding ID | Source File | Line Number | Full Text |

## SCORE DATA EXTRACTED
| Exploration | Score | Dimension Breakdown | Source File | Line |

## DECISION RECORDS EXTRACTED
| Decision ID | What | Why | Alternatives | Source File | Line |

## DARK MATTER UNIQUE DATA
| Data Type | Content Summary | Source File | Lines | NOT in formal chain? |
```

**What Census-A must NOT do:**
- DO NOT read files outside checkpoints/ and _execution-journal/
- DO NOT interpret or synthesize data -- extract only
- DO NOT create provenance documents

**Maximum files read:** 16 (within sweet spot)

---

## 1.4 Census-Extractor B (Audit Scratchpad)

**Name:** `census-b`

**Responsibilities (binary):**
- READ every file in `_od-audit-scratchpad/` (29 files)
- EXTRACT all finding IDs (OD-F-###, F-E-###, CA-###) with exact line numbers
- EXTRACT all audit evidence (per-OD results, per-element measurements)
- EXTRACT all fix execution data (fixes applied, false positives, deferrals)
- EXTRACT the 3-quality-dialect classification data
- WRITE extracted data to a structured output file

**Files owned (writes):**
- `_provenance-gap-analysis/extract-audit-scratchpad.md`

**Files read (input):**
- All 29 files in `_od-audit-scratchpad/`:
  - `AUDIT-STATE.md`, `comparative-reference.md`, `content-authenticity.md`
  - `contrast-accessibility.md`, `cross-od-consistency.md`
  - `fix-report-fixer-a.md` through `fix-report-fixer-d.md`
  - `FIX-STATE.md`, `fix-verification-programmatic.md`, `fix-verification-visual.md`
  - `fresh-eyes.md`, `identity-brief.md`, `research-refinement.md`
  - `structural-integrity.md`
  - `systematic-audit-001.md` through `systematic-audit-006.md`
  - `visual-audit-001.md` through `visual-audit-006.md`
  - `weaver-tracker.md`

**Output format:** Same structured table format as Census-A.

**What Census-B must NOT do:**
- DO NOT read files outside _od-audit-scratchpad/
- DO NOT interpret or synthesize data -- extract only
- DO NOT create provenance documents

**Maximum files read:** 29 (exceeds ideal 10, but these are extraction-only reads with uniform format -- acceptable for a census agent because it is READING not WRITING multiple files; it writes only 1 output file)

---

## 1.5 Census-Extractor C (Knowledge Architecture + Research)

**Name:** `census-c`

**Responsibilities (binary):**
- READ the 11 Category B files in `knowledge-architecture/` top level
- READ the `OD-006-CREATIVE-RESEARCH-FEED.md` in `explorations/organizational/`
- READ `FINDINGS-INDEX.md`
- EXTRACT all finding IDs (OD-F-###, EXT-CREATIVE-###, EXT-SPAT-###, EXT-CONF-###, EXT-TASK-###) with exact line numbers
- EXTRACT the complete ACCUMULATED-IDENTITY-v1 constraint list
- EXTRACT all process finding data (audit methodology, fix methodology)
- WRITE extracted data to a structured output file

**Files owned (writes):**
- `_provenance-gap-analysis/extract-knowledge-arch.md`

**Files read (input):**
- `knowledge-architecture/ACCUMULATED-IDENTITY-v1.md`
- `knowledge-architecture/KA-DECISIONS.md`
- `knowledge-architecture/KA-VERIFICATION.md`
- `knowledge-architecture/OD-004-EXTERNAL-RESEARCH.md`
- `knowledge-architecture/OD-005-EXTERNAL-RESEARCH.md`
- `knowledge-architecture/OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md`
- `knowledge-architecture/OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md`
- `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md`
- `knowledge-architecture/OD-RETROSPECTIVE-AND-PROTOCOL-v2.md`
- `knowledge-architecture/PHASE-1B-MEGA-DEBRIEF.md`
- `knowledge-architecture/WORKFLOW-METACOGNITION-ANALYSIS.md`
- `explorations/organizational/OD-006-CREATIVE-RESEARCH-FEED.md`
- `FINDINGS-INDEX.md`

**Output format:** Same structured table format as Census-A.

**What Census-C must NOT do:**
- DO NOT read files outside its assigned set
- DO NOT interpret or synthesize data -- extract only
- DO NOT create provenance documents

**Maximum files read:** 13 (slightly above ideal, acceptable for extraction-only)

---

## 1.6 Census-Extractor D (Inline Headers from OD HTML Files)

**Name:** `census-d`

**Responsibilities (binary):**
- READ the inline threading headers from all 6 OD exploration HTML files
- EXTRACT: Applied Research sections, Soul Alignment sections, Built On sections, Must Honor sections, Anti-patterns avoided, OD-F findings declared in headers, EXT-* findings referenced, DD constraints consumed
- For each HTML file, read ONLY the first 100 lines (the inline header), NOT the full HTML
- WRITE extracted data to a structured output file

**Files owned (writes):**
- `_provenance-gap-analysis/extract-od-inline-headers.md`

**Files read (input):**
- `explorations/organizational/OD-001-conversational.html` (first 100 lines only)
- `explorations/organizational/OD-002-narrative.html` (first 100 lines only)
- `explorations/organizational/OD-003-task-based.html` (first 100 lines only)
- `explorations/organizational/OD-004-confidence.html` (first 100 lines only)
- `explorations/organizational/OD-005-spatial.html` (first 100 lines only)
- `explorations/organizational/OD-006-creative.html` (first 100 lines only)

**Output format:**
```
## OD-001 INLINE HEADER EXTRACTION
### Applied Research
| Finding ID | Description | Evidence Location |
### Soul Alignment
| Soul Piece | Status |
### DD Constraints Consumed
| DD-F ID | How Consumed |
### Anti-Patterns Avoided
| Anti-Pattern | How Avoided |
### EXT-* Findings Referenced
| EXT ID | Source | Application |
### OD-F Findings Declared
| OD-F ID | Finding Text |

[Repeat for OD-002 through OD-006]
```

**What Census-D must NOT do:**
- DO NOT read beyond line 100 of any HTML file (inline headers end well before line 100)
- DO NOT read the full HTML content
- DO NOT interpret or synthesize data -- extract only
- DO NOT create provenance documents

**Maximum files read:** 6 (well within sweet spot)

---

## 1.7 Census-Extractor E (Existing Provenance Chain)

**Name:** `census-e`

**Responsibilities (binary):**
- READ every file currently in the formal provenance chain (`DESIGN-SYSTEM/provenance/`)
- EXTRACT: current status of every section, every "TBD"/"PENDING" marker, every successor/predecessor pointer, every finding lifecycle status, soul compliance matrix state
- Also READ: `DESIGN-SYSTEM/BACKBONE.md`, `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md`, `DESIGN-SYSTEM/anti-patterns/registry.md`, `DESIGN-SYSTEM/QUICK-START.md`
- WRITE a complete "current state of formal chain" inventory

**Files owned (writes):**
- `_provenance-gap-analysis/extract-formal-chain-state.md`

**Files read (input):**
- `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md`
- `DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md`
- `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md`
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md`
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md`
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md`
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md`
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md`
- `DESIGN-SYSTEM/BACKBONE.md`
- `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md`
- `DESIGN-SYSTEM/anti-patterns/registry.md`

**Output format:**
```
## FORMAL CHAIN CURRENT STATE
### Per-File Inventory
| File | Lines | Status | TBD/PENDING Markers | Stale Sections | Needs Update? |

### Successor/Predecessor Pointers
| Source File | Pointer | Target File | Target Exists? | Status |

### Finding Lifecycle Summary
| Finding Range | Current Status in Chain | Actually True Status |

### Soul Compliance Matrix State
| Current Entries | Missing Entries | Stale Entries |

### Pattern Index State
| Pattern Category | Status | Stale? |
```

**What Census-E must NOT do:**
- DO NOT read files outside the formal provenance chain and the 4 infrastructure files listed
- DO NOT interpret or synthesize data -- extract only
- DO NOT modify any formal chain file

**Maximum files read:** 11 (within sweet spot)

---

## 1.8 Graph Builder (Adjacency Matrix + Triage)

**Name:** `graph-builder`

**Responsibilities (binary):**
- READ all 5 census extraction files (extract-checkpoints, extract-audit-scratchpad, extract-knowledge-arch, extract-od-inline-headers, extract-formal-chain-state)
- BUILD a complete finding ID adjacency matrix: for every finding ID, record where it is DEFINED, where it is REFERENCED, where it is MISSING
- BUILD a dark-matter-to-gap mapping: for each of the 33 gaps, identify which census extraction files contain the raw material to close that gap
- CLASSIFY each gap into one of 4 remediation types:
  - TYPE-A: CREATE new file (gaps 001-005)
  - TYPE-B: UPDATE existing file (gaps 006-011, 013-015, 026-028)
  - TYPE-C: EXTRACT + FORMALIZE (gaps 016-025)
  - TYPE-D: LINK only (gaps 029-033)
- WRITE the complete graph and triage to output file

**Files owned (writes):**
- `_provenance-gap-analysis/13-finding-adjacency-matrix.md`

**Files read (input):**
- `_provenance-gap-analysis/extract-checkpoints.md`
- `_provenance-gap-analysis/extract-audit-scratchpad.md`
- `_provenance-gap-analysis/extract-knowledge-arch.md`
- `_provenance-gap-analysis/extract-od-inline-headers.md`
- `_provenance-gap-analysis/extract-formal-chain-state.md`
- `_provenance-gap-analysis/07-perfect-state-gap-audit.md` (for the 33 gap definitions)

**Output format:**
```
## FINDING ID ADJACENCY MATRIX
| Finding ID | Defined In | Referenced In | Missing From | Gap(s) Affected |

## GAP-TO-SOURCE MAPPING
| Gap ID | Type | Raw Material Files | Specific Sections/Lines | Remediation Agent |

## TRIAGE SUMMARY
| Type | Gaps | Agent Assignment | Estimated Complexity |
```

**What Graph Builder must NOT do:**
- DO NOT create any provenance document
- DO NOT modify any existing file
- DO NOT assign work to agents (that is Lead's job)

**Maximum files read:** 7 (within sweet spot)

---

## 1.9 Chain Builder A (Critical New Files: OD-outbound-findings + HANDOFF)

**Name:** `chain-a`

**Responsibilities (binary):**
- CREATE `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md`
  - Contains OD-F-001 through OD-F-008+ with: ID, Finding text, Source exploration, Score basis, Target stage(s), Chain Impact narrative
  - Contains meta-pattern section for OD-F-005 "Organization IS Density"
  - Contains forward-looking findings for AD/CD organized by target stage
  - Contains consumption matrix (which AD/CD stage consumes which OD-F finding)
  - Contains anti-pattern findings (2px border epidemic, quality dialect divergence)
  - Contains Stage 2 DD-F consumption verification table
- CREATE `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md`
  - Structure matches HANDOFF-DD-TO-OD.md (338+ lines)
  - Contains: mandatory consumption table, soul piece transfer (5 visual + OD-F-005 soul candidacy evaluation), quality bar, primary research for AD (R-4, 192 findings), OD iteration lessons, AD responsibilities checklist, OD-to-axis pairing table, acknowledgment protocol

**Files owned (writes):**
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md`
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md`

**Files read (input):**
- `_provenance-gap-analysis/13-finding-adjacency-matrix.md` (graph builder output)
- `_provenance-gap-analysis/extract-checkpoints.md` (OD-F definitions from OD-CHECKPOINT)
- `_provenance-gap-analysis/extract-od-inline-headers.md` (per-OD research records)
- `_provenance-gap-analysis/extract-knowledge-arch.md` (ACCUMULATED-IDENTITY data)
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` (template for format)
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` (template for format)
- `checkpoints/OD-CHECKPOINT.md` (authoritative OD-F data)

**What Chain-A must NOT do:**
- DO NOT modify any existing file (only CREATE new files)
- DO NOT read the full HTML exploration files (use census extractions only)
- DO NOT invent findings -- every finding must trace to a census extraction with a source line number
- DO NOT skip the consumption matrix or meta-pattern section

**Maximum files created:** 2 (well within sweet spot)
**Maximum files read:** 7

---

## 1.10 Chain Builder B (Critical New Files: OD-SYNTHESIS + organizational-patterns)

**Name:** `chain-b`

**Responsibilities (binary):**
- CREATE `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md`
  - Cross-OD pattern comparison (shared elements, divergent approaches)
  - 3-quality-dialect analysis (Polished/Functional/Editorial with evidence)
  - Cumulative identity evolution from OD-001 through OD-006
  - OD-F-005 meta-insight analysis with reasoning chain
  - Organization-density equivalence argument
  - Per-OD-pair relationship summary
- CREATE `DESIGN-SYSTEM/patterns/organizational-patterns.md`
  - 6 organizational patterns with: name, provenance (research + finding IDs), validation evidence (exploration + score), usage guide, density pairing, constraints, CSS implementation notes
  - Same structural rigor as `density-patterns.md`

**Files owned (writes):**
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md`
- `DESIGN-SYSTEM/patterns/organizational-patterns.md`

**Files read (input):**
- `_provenance-gap-analysis/13-finding-adjacency-matrix.md` (graph builder output)
- `_provenance-gap-analysis/extract-checkpoints.md` (per-OD data from OD-CHECKPOINT, DISCOVERIES-LOG)
- `_provenance-gap-analysis/extract-audit-scratchpad.md` (3-dialect data, cross-od-consistency)
- `_provenance-gap-analysis/extract-od-inline-headers.md` (per-OD research and constraint records)
- `DESIGN-SYSTEM/patterns/density-patterns.md` (template for organizational-patterns.md format)
- `checkpoints/OD-CHECKPOINT.md` (authoritative per-OD state data)

**What Chain-B must NOT do:**
- DO NOT modify any existing file (only CREATE new files)
- DO NOT duplicate data from Chain-A's files (reference them instead)
- DO NOT invent quality-dialect classifications -- use only what the audit found
- DO NOT assign scores that do not come from census extractions

**Maximum files created:** 2
**Maximum files read:** 6

---

## 1.11 Chain Builder C (Audit Synthesis for Provenance)

**Name:** `chain-c`

**Responsibilities (binary):**
- CREATE `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md`
  - Distills the 89 findings, 16 fixes, 2 false positives, 3 quality dialects, 0 soul violations
  - Equivalent in structure to `DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md`
  - Contains: audit methodology summary, per-OD findings summary, fix execution summary, false positive evidence (Fix #1 and #7), score adjustments post-audit, remaining items, scratchpad references as evidence
  - All 89 findings have documented dispositions: fixed (16), false positive (2), deferred (1), accepted-as-note (~70)
  - Process findings: 17-agent audit methodology, 4-fixer parallel execution, weaver pattern

**Files owned (writes):**
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md`

**Files read (input):**
- `_provenance-gap-analysis/extract-audit-scratchpad.md` (all audit data extracted)
- `_provenance-gap-analysis/extract-knowledge-arch.md` (OD-GRANULAR-AUDIT-RESULTS data)
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` (template)
- `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` (authoritative audit results)

**What Chain-C must NOT do:**
- DO NOT modify any existing file
- DO NOT read the raw scratchpad files directly (use census extraction)
- DO NOT omit the disposition of any finding -- every finding gets a formal status

**Maximum files created:** 1
**Maximum files read:** 4

---

## 1.12 Updater A (STAGE-HEADER + CLAUDE.md in stage-3)

**Name:** `updater-a`

**Responsibilities (binary):**
- UPDATE `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md`
  - Change title from "IN PROGRESS" to "COMPLETE"
  - Rewrite "The Story" section in past tense
  - Fill consumed/produced tables with actual values
  - Add Quality Achieved table (matching DD's 7-metric format)
  - Add Key Decisions section (5-10 decisions with What/Why/Impact)
  - Update files-in-folder table to reflect actual file states
  - Update inline threading header from "OD work has not begun" to "OD COMPLETE"
- UPDATE `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md`
  - Rewrite from placeholder to complete 5-section navigation
  - Update all file statuses to reflect actual state
  - Ensure reading order matches actual complete state

**Files owned (writes):**
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md`
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md`

**Files read (input):**
- `_provenance-gap-analysis/extract-checkpoints.md` (OD score data, key insights)
- `_provenance-gap-analysis/extract-formal-chain-state.md` (current state of these files)
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/STAGE-HEADER.md` (template for complete stage header)
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/CLAUDE.md` (template for complete navigation)
- Actual directory listing of `provenance/stage-3-organization-od/` (to enumerate files that exist after Chain Builders finish)

**What Updater-A must NOT do:**
- DO NOT create new files (only UPDATE existing files)
- DO NOT modify files outside its two assigned files
- DO NOT change file content that Wave 3 agents just created -- only update the two navigation files

**Maximum files updated:** 2
**Maximum files read:** 5

---

## 1.13 Updater B (PIPELINE-MANIFEST + BACKBONE)

**Name:** `updater-b`

**Responsibilities (binary):**
- UPDATE `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md`
  - Section B: Replace "TBD -- OD explorations not yet complete" with OD-F-001 through OD-F-008 entries
  - Section C: Resolve soul piece determination (OD-F-005 candidacy evaluated)
  - Section D: Add Organizational Patterns provenance table
  - Section E: Add OD example traces to cross-reference index
  - Section F: Update finding lifecycle state counts to include OD-F findings
  - DD-F consumption matrix: Update DD-F-001 through DD-F-018 from "PENDING" to "APPLIED/CONSUMED"
- UPDATE `DESIGN-SYSTEM/BACKBONE.md`
  - Section 4: Rewrite from "IN PROGRESS" to "COMPLETE" with full narrative
  - Section 8: Replace "OD-F-### | TBD" with actual generated research flow
  - Section 9: Add OD-001 through OD-006 rows to soul compliance matrix
  - Section 10: Update causal chain from "in progress" to "COMPLETE"

**Files owned (writes):**
- `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md`
- `DESIGN-SYSTEM/BACKBONE.md`

**Files read (input):**
- `_provenance-gap-analysis/13-finding-adjacency-matrix.md` (complete finding map)
- `_provenance-gap-analysis/extract-checkpoints.md` (score data, soul compliance)
- `_provenance-gap-analysis/extract-formal-chain-state.md` (current stale sections identified)
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` (Chain-A output -- needs findings for manifest)
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` (Chain-C output -- needs audit data)
- `checkpoints/OD-CHECKPOINT.md` (authoritative per-OD data for soul matrix)

**What Updater-B must NOT do:**
- DO NOT modify sections of PIPELINE-MANIFEST or BACKBONE that are NOT stale
- DO NOT create new files
- DO NOT modify DD sections (only OD sections)
- DO NOT add speculative AD/CD data -- only add what OD actually produced

**Maximum files updated:** 2
**Maximum files read:** 6

---

## 1.14 Updater C (PATTERN-INDEX + Anti-Pattern Registry + SOUL-DISCOVERIES + OD-RESEARCH-GATE)

**Name:** `updater-c`

**Responsibilities (binary):**
- UPDATE `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md`
  - Change all 6 OD pattern entries from "Pending" to "Validated"
  - Add scores, density pairings, provenance links
  - Update usage flowchart to include OD pattern selection step
- UPDATE `DESIGN-SYSTEM/anti-patterns/registry.md`
  - Add "2px Border Epidemic" anti-pattern (108 CSS declarations, empirically validated)
  - Add OD verification results for DD anti-patterns (DD-F-015 through DD-F-018)
  - Evaluate "Uneven Enrichment Depth" as potential anti-pattern
- UPDATE `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md`
  - Add formal OD determination: either new soul piece(s) or "No new soul pieces discovered" with justification
  - Resolve DD-F-011 prediction: "Cognitive soul pieces may emerge from OD"
  - Evaluate OD-F-005 as Soul Piece #6 candidate -- make formal determination
- UPDATE `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md`
  - Add post-build verification section: APPLIED/NOT-APPLIED per R-1 finding with evidence
  - Update status from "gate pass" to "post-build verified"

**Files owned (writes):**
- `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md`
- `DESIGN-SYSTEM/anti-patterns/registry.md`
- `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md`
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md`

**Files read (input):**
- `_provenance-gap-analysis/13-finding-adjacency-matrix.md` (finding data)
- `_provenance-gap-analysis/extract-checkpoints.md` (per-OD data, soul data)
- `_provenance-gap-analysis/extract-audit-scratchpad.md` (anti-pattern evidence)
- `_provenance-gap-analysis/extract-od-inline-headers.md` (R-1 application evidence)
- `_provenance-gap-analysis/extract-formal-chain-state.md` (current state of files being updated)
- `DESIGN-SYSTEM/patterns/organizational-patterns.md` (Chain-B output -- for PATTERN-INDEX cross-refs)

**What Updater-C must NOT do:**
- DO NOT create new files (only UPDATE existing files)
- DO NOT modify PIPELINE-MANIFEST or BACKBONE (that is Updater-B's job)
- DO NOT modify STAGE-HEADER or CLAUDE.md (that is Updater-A's job)
- DO NOT remove existing content from files -- only ADD and UPDATE

**Maximum files updated:** 4
**Maximum files read:** 6

---

## 1.15 Updater D (Cross-Reference Repair + Succession Pointers)

**Name:** `updater-d`

**Responsibilities (binary):**
- UPDATE `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md`
  - Fix successor pointer (GAP-013): verify it now points to existing OD-outbound-findings.md
  - Update DD-F consumption status from "PENDING" to "APPLIED" for all findings consumed by OD (GAP-015)
- UPDATE `explorations/organizational/CLAUDE.md` (if stale -- verify first, may be current per GAP-012)
- UPDATE `explorations/CLAUDE.md` (if stale -- verify first)
- ADD a "Dark Matter Registry" section to PIPELINE-MANIFEST.md
  - Wait: Updater-B already owns PIPELINE-MANIFEST. This is a CONTENTION RISK.
  - RESOLUTION: Updater-D writes the Dark Matter Registry content to a SEPARATE file: `_provenance-gap-analysis/dark-matter-registry-section.md`. Updater-B incorporates it OR Lead appends it after Updater-B completes.

**Files owned (writes):**
- `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` (successor pointer + consumption status update only)
- `_provenance-gap-analysis/dark-matter-registry-section.md` (content for PIPELINE-MANIFEST dark matter section)

**Files read (input):**
- `_provenance-gap-analysis/13-finding-adjacency-matrix.md` (finding locations and cross-references)
- `_provenance-gap-analysis/extract-formal-chain-state.md` (current pointer states)
- `_provenance-gap-analysis/extract-od-inline-headers.md` (DD-F consumption evidence)
- `_provenance-gap-analysis/10-dark-matter-census.md` (dark matter catalog)
- `explorations/organizational/CLAUDE.md` (check if current)
- `explorations/CLAUDE.md` (check if current)

**What Updater-D must NOT do:**
- DO NOT modify PIPELINE-MANIFEST.md directly (Updater-B owns that file)
- DO NOT modify BACKBONE.md (Updater-B owns that file)
- DO NOT create provenance chain documents (Chain Builders own those)
- DO NOT modify sections of DD-outbound-findings beyond the successor pointer and consumption matrix

**Maximum files updated:** 2 (DD-outbound-findings + dark-matter section)
**Maximum files read:** 6

---

## 1.16 Traversal Tester (Chain Validation)

**Name:** `traversal-tester`

**Responsibilities (binary):**
- EXECUTE 10 traversal tests against the updated provenance chain:
  1. **Forward test:** Start at R1-001, trace through OD-RESEARCH-GATE to an OD exploration to OD-outbound-findings to HANDOFF-OD-TO-AD. Every link must resolve.
  2. **Backward test:** Start at OD-F-005, trace backward through OD-006 to its research inputs to R-files. Every link must resolve.
  3. **Cross test:** Start at OD-003 pattern, find its relationship to OD-005 in OD-SYNTHESIS. Must exist.
  4. **Accumulation test:** Count total constraints in HANDOFF-OD-TO-AD. Must be strictly larger than HANDOFF-DD-TO-OD.
  5. **Finding lifecycle test:** For OD-F-001, verify discovery date, source, validation, status, consumers all documented.
  6. **Soul test:** Open SOUL-DISCOVERIES. OD determination must exist (either new piece or formal "none").
  7. **Anti-pattern test:** Open anti-pattern registry. OD entries must exist.
  8. **Manifest test:** Open PIPELINE-MANIFEST Section B. OD-F entries must exist, not "TBD".
  9. **BACKBONE test:** Open BACKBONE Section 4. Must say "COMPLETE", not "IN PROGRESS".
  10. **Reproducibility test:** Read ONLY provenance/stage-3-organization-od/ files. List what you learn. Must include: OD produced 6 explorations, generated 8+ findings, was audited (89 findings), was fixed (16 fixes), achieved specific scores.
- WRITE all test results (PASS/FAIL with evidence) to output file

**Files owned (writes):**
- `_provenance-gap-analysis/14-traversal-test-results.md`

**Files read (input):**
- ALL files in `DESIGN-SYSTEM/provenance/` (the complete formal chain post-update)
- `DESIGN-SYSTEM/BACKBONE.md`
- `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md`
- `DESIGN-SYSTEM/patterns/organizational-patterns.md`
- `DESIGN-SYSTEM/anti-patterns/registry.md`
- `DESIGN-SYSTEM/provenance/stage-3-organization-od/` (all files)

**What Traversal Tester must NOT do:**
- DO NOT read census extraction files or raw operational files
- DO NOT read checkpoints/ or _od-audit-scratchpad/ -- the POINT is to test whether the formal chain alone is sufficient
- DO NOT modify any file
- DO NOT suggest fixes -- only report PASS/FAIL

**Maximum files read:** ~15 (formal chain only)

**CRITICAL CONSTRAINT (Fresh Eyes):** This agent does NOT read ANY raw material file. It reads ONLY the formal provenance chain. This is the reproducibility test: can a fresh agent reconstruct OD from provenance alone?

---

## 1.17 Verifier (Final Verification)

**Name:** `verifier`

**Responsibilities (binary):**
- READ the traversal test results (14-traversal-test-results.md)
- For each FAIL: identify which gap was not closed, which agent's output was incomplete
- READ all Chain Builder and Updater output files
- VERIFY that every gap in the master gap table (GAP-001 through GAP-033) is addressed:
  - For each gap: Does the output file exist? Does it contain the required content? Is the gap status now CLOSED?
- PRODUCE a final verification report with per-gap status

**Files owned (writes):**
- `_provenance-gap-analysis/15-final-verification-report.md`

**Files read (input):**
- `_provenance-gap-analysis/14-traversal-test-results.md` (traversal results)
- `_provenance-gap-analysis/07-perfect-state-gap-audit.md` (the 33 gap definitions)
- All Chain Builder output files (OD-outbound-findings, HANDOFF, SYNTHESIS, AUDIT-SYNTHESIS, organizational-patterns)
- All Updater output files (STAGE-HEADER, CLAUDE.md, PIPELINE-MANIFEST, BACKBONE, PATTERN-INDEX, anti-patterns, SOUL-DISCOVERIES, OD-RESEARCH-GATE, DD-outbound-findings)

**Output format:**
```
## GAP CLOSURE VERIFICATION
| Gap ID | Severity | Closing Agent | Output File | Content Verified? | Status |
| GAP-001 | CRITICAL | chain-a | OD-outbound-findings.md | YES: 8 findings with lifecycle | CLOSED |
...

## TRAVERSAL TEST SUMMARY
| Test # | Result | If FAIL: Root Cause |

## REMAINING OPEN ITEMS
[Any gaps NOT closed, with specific missing content]

## OVERALL STATUS
- Gaps Closed: X/33
- Traversal Tests Passed: Y/10
- Ready for AD? YES/NO
```

**What Verifier must NOT do:**
- DO NOT modify any file
- DO NOT attempt to fix issues -- only report them
- DO NOT read raw operational files -- only read output files and the gap definition

**Maximum files read:** ~15

---

# SECTION 2: WAVE EXECUTION PLAN

## Wave 0: Infrastructure Setup

**Agents:** Lead, Weaver
**Duration:** ~2 minutes
**Purpose:** Create the state tracking file, verify all input files exist

**Actions:**
1. Lead creates `_provenance-gap-analysis/REMEDIATION-STATE.md` with:
   - Wave progress section (empty)
   - Agent status table (all agents listed as PENDING)
2. Weaver confirms state file format is correct
3. Lead verifies all 3 input files are readable (MEMORY.md, 10-dark-matter-census.md, 07-perfect-state-gap-audit.md)

**Completion signal:** REMEDIATION-STATE.md exists with all agent rows
**Blocks if fails:** Everything

---

## Wave 1: Census + Extraction (Maximum Parallelism)

**Agents:** census-a, census-b, census-c, census-d, census-e (5 agents in parallel)
**Duration:** ~8-12 minutes (file reading is the bottleneck)
**Purpose:** Extract all raw data from all dark matter and formal chain files into structured census files

**Start trigger:** Lead sends each agent a message containing:
- Their assigned file list (copy from Section 1)
- Their output file path
- The extraction format template

**Agent operations (parallel, no dependencies between agents):**

| Agent | Reads | Writes | Est. Time |
|-------|-------|--------|-----------|
| census-a | 16 files in checkpoints/ + _execution-journal/ | extract-checkpoints.md | ~10 min |
| census-b | 29 files in _od-audit-scratchpad/ | extract-audit-scratchpad.md | ~12 min |
| census-c | 13 files in knowledge-architecture/ + explorations/ | extract-knowledge-arch.md | ~10 min |
| census-d | 6 OD HTML file headers (first 100 lines each) | extract-od-inline-headers.md | ~5 min |
| census-e | 11 files in DESIGN-SYSTEM/provenance/ | extract-formal-chain-state.md | ~8 min |

**Completion signal per agent:** SendMessage to lead AND weaver with text "CENSUS COMPLETE: [output file path]"
**Wave completion:** ALL 5 extraction files exist (verified by Lead checking file existence)
**Blocks if fails:** Any missing extraction file blocks Wave 2 entirely

**Lead actions during Wave 1:**
- Monitor SendMessage completions
- Verify each output file exists (do NOT read content)
- Update REMEDIATION-STATE.md wave progress
- When all 5 complete: `git add` the 5 extraction files, commit with message "feat(provenance): Wave 1 census extraction -- 5 files"

---

## Wave 2: Graph Building + Triage

**Agents:** graph-builder (1 agent)
**Duration:** ~10-15 minutes
**Purpose:** Build the finding adjacency matrix and gap-to-source mapping from all 5 census files

**Start trigger:** Lead sends graph-builder a message confirming all 5 census files exist, with their paths.

**Agent operations:**

| Agent | Reads | Writes | Est. Time |
|-------|-------|--------|-----------|
| graph-builder | 5 census files + gap audit | 13-finding-adjacency-matrix.md | ~12 min |

**Why only 1 agent:** The graph builder must see ALL census data simultaneously to build cross-references. Splitting this work would require a merge step that adds complexity without saving time.

**Completion signal:** SendMessage to lead AND weaver with text "GRAPH COMPLETE: 13-finding-adjacency-matrix.md"
**Wave completion:** 13-finding-adjacency-matrix.md exists
**Blocks if fails:** All subsequent waves depend on the adjacency matrix

**Lead actions during Wave 2:**
- Wait for graph-builder completion
- Verify output file exists
- Commit: "feat(provenance): Wave 2 finding adjacency matrix"

---

## Wave 3: Chain Construction (3 Builders in Parallel)

**Agents:** chain-a, chain-b, chain-c (3 agents in parallel)
**Duration:** ~15-20 minutes (longest wave -- these are the most complex documents)
**Purpose:** Create the 5 new provenance chain documents that close the CRITICAL gaps

**Start trigger:** Lead sends each agent a message confirming the adjacency matrix exists, with their specific file assignments and template references.

**Agent operations (parallel, no dependencies between agents):**

| Agent | Creates | Gaps Closed | Est. Time |
|-------|---------|-------------|-----------|
| chain-a | OD-outbound-findings.md + HANDOFF-OD-TO-AD.md | GAP-001, GAP-002 | ~18 min |
| chain-b | OD-SYNTHESIS.md + organizational-patterns.md | GAP-003, GAP-004 | ~15 min |
| chain-c | OD-AUDIT-SYNTHESIS.md | GAP-005 | ~12 min |

**ZERO CONTENTION PROOF:**
- chain-a creates files in `provenance/stage-3-organization-od/`
- chain-b creates files in `provenance/stage-3-organization-od/` AND `DESIGN-SYSTEM/patterns/`
- chain-c creates files in `provenance/stage-3-organization-od/`
- NO agent creates the SAME file. All files are NEW (do not exist yet). Zero overlap.

**Completion signal per agent:** SendMessage to lead AND weaver with text "CHAIN COMPLETE: [list of created files]"
**Wave completion:** ALL 5 new files exist
**Blocks if fails:** Any missing chain document blocks Wave 4 updaters that reference it

**Lead actions during Wave 3:**
- Monitor completions
- Verify each output file exists
- Commit: "feat(provenance): Wave 3 chain construction -- 5 new provenance documents"

---

## Wave 4: Infrastructure Updates (4 Updaters in Parallel)

**Agents:** updater-a, updater-b, updater-c, updater-d (4 agents in parallel)
**Duration:** ~12-15 minutes
**Purpose:** Update all existing stale files to reflect Wave 3's new content

**Start trigger:** Lead sends each agent a message confirming all 5 chain documents exist, with their specific file assignments.

**Agent operations (parallel, no dependencies between agents):**

| Agent | Updates | Gaps Closed | Est. Time |
|-------|---------|-------------|-----------|
| updater-a | STAGE-HEADER.md + CLAUDE.md (stage-3) | GAP-006, GAP-007, GAP-014 | ~10 min |
| updater-b | PIPELINE-MANIFEST.md + BACKBONE.md | GAP-009, GAP-010, GAP-015 (partially), GAP-028 | ~15 min |
| updater-c | PATTERN-INDEX.md + anti-patterns/registry.md + SOUL-DISCOVERIES.md + OD-RESEARCH-GATE.md | GAP-011, GAP-026, GAP-027, GAP-008 | ~12 min |
| updater-d | DD-outbound-findings.md + dark-matter section | GAP-013, GAP-015 (partially), GAP-032 | ~8 min |

**ZERO CONTENTION PROOF:**

| File | Owner | Other agents that READ it |
|------|-------|--------------------------|
| provenance/stage-3/STAGE-HEADER.md | updater-a | none |
| provenance/stage-3/CLAUDE.md | updater-a | none |
| provenance/PIPELINE-MANIFEST.md | updater-b | none |
| BACKBONE.md | updater-b | none |
| patterns/PATTERN-INDEX.md | updater-c | none |
| anti-patterns/registry.md | updater-c | none |
| provenance/SOUL-DISCOVERIES.md | updater-c | none |
| provenance/stage-3/OD-RESEARCH-GATE.md | updater-c | none |
| provenance/stage-2-dd/DD-outbound-findings.md | updater-d | none |
| dark-matter-registry-section.md | updater-d | none |

**Every file has exactly ONE writer.** Zero contention.

**Completion signal per agent:** SendMessage to lead AND weaver with text "UPDATE COMPLETE: [list of updated files]"
**Wave completion:** ALL updated files verified to exist
**Blocks if fails:** Verification cannot run until all updates are complete

**Lead actions during Wave 4:**
- Monitor completions
- After updater-d finishes: append dark-matter-registry-section.md content to PIPELINE-MANIFEST.md (the ONLY file Lead modifies, and only after updater-b has finished with PIPELINE-MANIFEST.md)
- Commit: "feat(provenance): Wave 4 infrastructure updates -- stale files remediated"

---

## Wave 5: Verification (Sequential: Traversal First, Then Verifier)

**Agents:** traversal-tester (first), then verifier (second)
**Duration:** ~15-18 minutes total (~8 min traversal + ~10 min verification)
**Purpose:** Prove that all 33 gaps are closed and the chain is traversable

**Start trigger:** Lead sends traversal-tester a message confirming Wave 4 is complete.

**Phase 5A: Traversal Testing**

| Agent | Reads | Writes | Est. Time |
|-------|-------|--------|-----------|
| traversal-tester | ~15 formal chain files ONLY | 14-traversal-test-results.md | ~8 min |

**CRITICAL:** Traversal tester reads ONLY the formal provenance chain. It does NOT read census files, checkpoints, or operational files. This is the fresh-eyes reproducibility test.

**Completion signal:** SendMessage to lead AND weaver with text "TRAVERSAL COMPLETE: 14-traversal-test-results.md"

**Phase 5B: Final Verification**

Starts ONLY after traversal-tester completes.

| Agent | Reads | Writes | Est. Time |
|-------|-------|--------|-----------|
| verifier | traversal results + gap audit + all output files | 15-final-verification-report.md | ~10 min |

**Completion signal:** SendMessage to lead AND weaver with text "VERIFICATION COMPLETE: 15-final-verification-report.md"

**Lead actions during Wave 5:**
- Wait for traversal-tester to complete
- Read traversal results summary (PASS/FAIL counts only)
- Start verifier ONLY after traversal completes
- Wait for verifier to complete
- Commit: "feat(provenance): Wave 5 verification -- traversal tests + gap closure report"

**IF traversal tests show FAIL:**
- Lead reads the specific FAIL items
- If FAIL is due to missing content in a Chain Builder or Updater output: Lead spawns a targeted FIX agent (not in this topology -- handle as escalation)
- If FAIL is due to a cross-reference that was created but points wrong: Lead can make the 1-line fix directly (exception to THIN rule for trivial pointer fixes)
- Re-run traversal tester after fix

---

# SECTION 3: FILE OWNERSHIP MATRIX

## 3.1 Files CREATED by Agents (Wave 3)

| Agent | File Created | Path | Gap(s) Closed |
|-------|-------------|------|---------------|
| chain-a | OD-outbound-findings.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | GAP-001 |
| chain-a | HANDOFF-OD-TO-AD.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` | GAP-002 |
| chain-b | OD-SYNTHESIS.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md` | GAP-003 |
| chain-b | organizational-patterns.md | `DESIGN-SYSTEM/patterns/organizational-patterns.md` | GAP-004 |
| chain-c | OD-AUDIT-SYNTHESIS.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` | GAP-005 |

## 3.2 Files UPDATED by Agents (Wave 4)

| Agent | File Updated | Path | Gap(s) Closed |
|-------|-------------|------|---------------|
| updater-a | STAGE-HEADER.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md` | GAP-006, GAP-014 |
| updater-a | CLAUDE.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | GAP-007 |
| updater-b | PIPELINE-MANIFEST.md | `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` | GAP-009, GAP-015 (partial) |
| updater-b | BACKBONE.md | `DESIGN-SYSTEM/BACKBONE.md` | GAP-010, GAP-028 |
| updater-c | PATTERN-INDEX.md | `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md` | GAP-011 |
| updater-c | registry.md | `DESIGN-SYSTEM/anti-patterns/registry.md` | GAP-027 |
| updater-c | SOUL-DISCOVERIES.md | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | GAP-026 |
| updater-c | OD-RESEARCH-GATE.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | GAP-008 |
| updater-d | DD-outbound-findings.md | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | GAP-013, GAP-015 (partial) |

## 3.3 Files CREATED by Census Agents (Wave 1)

| Agent | File Created | Path |
|-------|-------------|------|
| census-a | extract-checkpoints.md | `_provenance-gap-analysis/extract-checkpoints.md` |
| census-b | extract-audit-scratchpad.md | `_provenance-gap-analysis/extract-audit-scratchpad.md` |
| census-c | extract-knowledge-arch.md | `_provenance-gap-analysis/extract-knowledge-arch.md` |
| census-d | extract-od-inline-headers.md | `_provenance-gap-analysis/extract-od-inline-headers.md` |
| census-e | extract-formal-chain-state.md | `_provenance-gap-analysis/extract-formal-chain-state.md` |

## 3.4 Files CREATED by Graph/Verification Agents

| Agent | File Created | Path |
|-------|-------------|------|
| graph-builder | 13-finding-adjacency-matrix.md | `_provenance-gap-analysis/13-finding-adjacency-matrix.md` |
| traversal-tester | 14-traversal-test-results.md | `_provenance-gap-analysis/14-traversal-test-results.md` |
| verifier | 15-final-verification-report.md | `_provenance-gap-analysis/15-final-verification-report.md` |
| updater-d | dark-matter-registry-section.md | `_provenance-gap-analysis/dark-matter-registry-section.md` |

## 3.5 Gap Coverage Map

Every gap must be addressed. Here is the complete mapping:

| Gap ID | Severity | Addressed By | How | Wave |
|--------|----------|--------------|-----|------|
| GAP-001 | CRITICAL | chain-a | CREATE OD-outbound-findings.md | 3 |
| GAP-002 | CRITICAL | chain-a | CREATE HANDOFF-OD-TO-AD.md | 3 |
| GAP-003 | CRITICAL | chain-b | CREATE OD-SYNTHESIS.md | 3 |
| GAP-004 | CRITICAL | chain-b | CREATE organizational-patterns.md | 3 |
| GAP-005 | HIGH | chain-c | CREATE OD-AUDIT-SYNTHESIS.md | 3 |
| GAP-006 | HIGH | updater-a | UPDATE STAGE-HEADER.md | 4 |
| GAP-007 | HIGH | updater-a | UPDATE CLAUDE.md | 4 |
| GAP-008 | HIGH | updater-c | UPDATE OD-RESEARCH-GATE.md | 4 |
| GAP-009 | HIGH | updater-b | UPDATE PIPELINE-MANIFEST.md | 4 |
| GAP-010 | HIGH | updater-b | UPDATE BACKBONE.md | 4 |
| GAP-011 | HIGH | updater-c | UPDATE PATTERN-INDEX.md | 4 |
| GAP-012 | N/A | -- | Already current (no action needed) | -- |
| GAP-013 | MEDIUM | updater-d | UPDATE DD-outbound-findings.md successor pointer | 4 |
| GAP-014 | MEDIUM | updater-a | UPDATE STAGE-HEADER.md inline threading header | 4 |
| GAP-015 | MEDIUM | updater-b + updater-d | UPDATE PIPELINE-MANIFEST DD-F consumption + DD-outbound-findings consumption | 4 |
| GAP-016 | HIGH | chain-a | OD-F lifecycle records in OD-outbound-findings.md | 3 |
| GAP-017 | MEDIUM | chain-a + chain-b | chain-a evaluates OD-002/003/004/005 key insights for OD-F elevation; chain-b documents in OD-SYNTHESIS | 3 |
| GAP-018 | MEDIUM | updater-c | Post-build verification in OD-RESEARCH-GATE.md | 4 |
| GAP-019 | MEDIUM | chain-a | EXT-* finding registration in OD-outbound-findings.md external research appendix | 3 |
| GAP-020 | MEDIUM | chain-b | Scoring rubric documented in OD-SYNTHESIS.md | 3 |
| GAP-021 | MEDIUM | chain-b | Dimension breakdowns reconstructed in OD-SYNTHESIS.md from census data | 3 |
| GAP-022 | HIGH | updater-a | Key Decisions section in STAGE-HEADER.md | 4 |
| GAP-023 | MEDIUM | chain-b | Negative space / paths not taken section in OD-SYNTHESIS.md | 3 |
| GAP-024 | MEDIUM | chain-c | All 89 finding dispositions in OD-AUDIT-SYNTHESIS.md | 3 |
| GAP-025 | MEDIUM | chain-b | Emergence reasoning chains in OD-SYNTHESIS.md | 3 |
| GAP-026 | HIGH | updater-c | OD soul determination in SOUL-DISCOVERIES.md | 4 |
| GAP-027 | MEDIUM | updater-c | Anti-pattern registry OD updates | 4 |
| GAP-028 | MEDIUM | updater-b | Soul compliance matrix OD rows in BACKBONE.md | 4 |
| GAP-029 | LOW | chain-c | Audit methodology as process finding in OD-AUDIT-SYNTHESIS.md | 3 |
| GAP-030 | LOW | chain-c | Fix execution as process finding in OD-AUDIT-SYNTHESIS.md | 3 |
| GAP-031 | CRITICAL | chain-a + chain-b + chain-c + updater-a | Collective effect: provenance directory sufficiency (closed when all provenance files exist) | 3+4 |
| GAP-032 | MEDIUM | updater-d | Creative research feed linkage in dark-matter-registry-section.md | 4 |
| GAP-033 | LOW | chain-c | Process innovations in OD-AUDIT-SYNTHESIS.md | 3 |

**Verification:** 33 gaps total. 1 already closed (GAP-012). 32 actively addressed. Each gap maps to exactly one primary agent (though some have secondary agents).

---

# SECTION 4: COMMUNICATION PROTOCOL

## 4.1 Agent-to-Lead Communication

**Completion signal (MANDATORY for every agent):**
```
SendMessage to lead:
  "COMPLETE: [agent-name]
   Output: [output file path(s)]
   Duration: [minutes]
   Issues: [NONE | description]"
```

**Blocker signal (MANDATORY if agent cannot proceed):**
```
SendMessage to lead:
  "BLOCKED: [agent-name]
   Missing: [what file or data is missing]
   Waiting for: [which agent or wave]"
```

**Question signal (for Weaver cross-reference queries):**
```
SendMessage to weaver:
  "QUERY: [agent-name]
   Need: [what data, which finding ID, which file]"
```

## 4.2 Lead-to-Agent Communication

**Wave start signal:**
```
SendMessage to [agent-name]:
  "START WAVE [N]: [agent-name]
   Your files: [list of files to read]
   Your output: [output file path]
   Template reference: [if applicable]
   Binary rules: [list of DO NOTs]"
```

**Shutdown signal:**
```
shutdown_request to [agent-name]:
  "Wave [N] complete. Your output verified. Shutting down."
```

## 4.3 Weaver Communication

Weaver sends NO unsolicited messages. Weaver responds ONLY to:
- Agent completion messages (updates state table)
- Agent queries (responds with file paths/data locations)
- Lead queries (responds with status summary)

## 4.4 Escalation Path

| Situation | Escalation |
|-----------|-----------|
| Agent cannot find data in census files | Agent sends QUERY to weaver. Weaver responds with file location. |
| Agent's census extraction is missing data | Agent sends BLOCKED to lead. Lead checks if census agent needs re-run. |
| Two agents discover they need to reference each other's output | Agent sends BLOCKED to lead. Lead sequences their work (one finishes first, other reads output). |
| Agent crashes mid-execution | Lead detects via timeout (no completion message in 20 min). See Crash Recovery Protocol. |
| Traversal test FAIL | Lead reads FAIL items. Spawns targeted fix agent if needed. |
| Verifier finds unclosed gaps | Lead reviews severity. CRITICAL: re-run chain builder. HIGH: targeted fix. MEDIUM/LOW: document as known remaining item. |

## 4.5 Lead Intervention Criteria

Lead intervenes ONLY when:
1. An agent sends a BLOCKED message (resolve the block)
2. An agent fails to send any message within 20 minutes (check if crashed)
3. A wave has 1 remaining agent that is taking >25 minutes (check status with weaver)
4. Traversal tests show CRITICAL FAILs (assess if fix agent needed)

Lead does NOT intervene for:
- Content quality concerns (that is verifier's job)
- Agent questions about format (agents follow their templates)
- Cross-reference details (that is weaver's job)

---

# SECTION 5: CRASH RECOVERY PROTOCOL

## 5.1 General Crash Recovery Pattern

Every agent follows the "file-first" pattern: create the output file with a skeleton immediately, then populate sections progressively. This means a crash at any point leaves partial output.

**Detection:** Lead monitors for completion messages. If no message received within 20 minutes of wave start, Lead assumes crash.

**Recovery steps:**
1. Lead checks if output file exists (partial output?)
2. If file exists with content: spawn replacement agent that reads partial output and continues
3. If file exists but empty: spawn replacement agent from scratch
4. If file does not exist: spawn replacement agent from scratch

## 5.2 Per-Agent-Type Recovery

### Census Agents (census-a through census-e)

**Crash impact:** Low. Census agents read files and extract data. No side effects.

**Partial output survival:** The extraction file may have some tables populated and others empty. The section headers indicate what is complete.

**Replacement:** Spawn new census agent with same instructions. If partial output exists, tell replacement: "Read [output file]. Complete any sections marked TODO or INCOMPLETE. Do NOT re-do sections that have data."

**Minimum state file:** The agent's output file itself (it IS the state).

### Graph Builder

**Crash impact:** Medium. The adjacency matrix is the central artifact for Wave 3.

**Partial output survival:** Matrix may have some finding IDs mapped and others not. The per-census-file sections indicate which inputs were processed.

**Replacement:** Spawn new graph builder with same instructions. If partial output exists, tell replacement: "Read [output file]. Continue building the matrix from where the previous agent stopped. The last census file fully processed is [X]."

**Minimum state file:** The adjacency matrix file itself.

### Chain Builders (chain-a, chain-b, chain-c)

**Crash impact:** High. These create the most complex documents.

**Partial output survival:** Each provenance document has sections. A crash may leave some sections complete and others empty.

**Replacement:** Spawn replacement with same instructions. If partial output exists: "Read [output file]. Complete any sections marked TODO or INCOMPLETE. Maintain consistency with completed sections."

**CRITICAL:** If chain-a crashes after creating OD-outbound-findings but before creating HANDOFF, the outbound-findings file is usable. Spawn replacement for HANDOFF only.

**Minimum state file:** Each output file. chain-a has TWO files -- check both.

### Updaters (updater-a through updater-d)

**Crash impact:** Medium. Updaters modify existing files. A crash mid-edit could leave a file in inconsistent state.

**Partial output survival:** If the agent wrote its changes to the file, the file is in the new state. If it crashed before writing, the file is in the old state.

**Replacement:** Read the file. If it still has the old markers ("IN PROGRESS", "TBD", "PENDING"), the update was not applied -- run replacement from scratch. If some markers are updated and others not, run replacement with instruction: "Complete the update. Some sections are already updated."

**Minimum state file:** The files being updated themselves. Check for stale markers.

### Traversal Tester

**Crash impact:** Low. Read-only agent with no side effects.

**Replacement:** Spawn new traversal tester with identical instructions. No partial state needed.

### Verifier

**Crash impact:** Low. Read-only agent with no side effects.

**Replacement:** Spawn new verifier with identical instructions. No partial state needed.

## 5.3 Wave-Level Recovery

| Wave | If Entire Wave Fails | Recovery |
|------|---------------------|----------|
| Wave 1 | Re-spawn all 5 census agents | No prior state needed |
| Wave 2 | Re-spawn graph builder | Needs Wave 1 output (verified by Lead before starting) |
| Wave 3 | Re-spawn failed chain builders only | Working chain builders' output is usable |
| Wave 4 | Re-spawn failed updaters only | Working updaters' output is usable |
| Wave 5 | Re-spawn failed agent only | No dependencies between traversal and verification except sequence |

---

# SECTION 6: AGENT COUNT SUMMARY

| Wave | Agents | Names | Parallelism | Estimated Duration |
|------|--------|-------|-------------|-------------------|
| 0 | 2 | lead, weaver | Serial (setup) | 2 min |
| 1 | 5 | census-a, census-b, census-c, census-d, census-e | 5-way parallel | 12 min |
| 2 | 1 | graph-builder | Serial (single agent) | 12 min |
| 3 | 3 | chain-a, chain-b, chain-c | 3-way parallel | 18 min |
| 4 | 4 | updater-a, updater-b, updater-c, updater-d | 4-way parallel | 15 min |
| 5 | 2 | traversal-tester, verifier | Sequential (tester then verifier) | 18 min |

**Total unique agents:** 17

**Concurrency peak:** Wave 1 (5 census agents + lead + weaver = 7 simultaneous)

**Total estimated wall time:** ~77 minutes (Waves 0-5 sequential)

**Breakdown:**
- Wave 0: 2 min (infrastructure)
- Wave 1: 12 min (census, parallelized)
- Inter-wave: 2 min (Lead commits, starts Wave 2)
- Wave 2: 12 min (graph building)
- Inter-wave: 2 min (Lead commits, starts Wave 3)
- Wave 3: 18 min (chain construction, parallelized)
- Inter-wave: 2 min (Lead commits, starts Wave 4)
- Wave 4: 15 min (infrastructure updates, parallelized)
- Inter-wave: 2 min (Lead commits, appends dark-matter section, starts Wave 5)
- Wave 5: 18 min (traversal + verification, sequential)
- Final commit: 2 min

**Comparison to prior teams:**
- OD Audit: 17 agents, ~45 min -- similar agent count, slightly more complex
- OD Fix: 7 agents, ~25 min -- simpler scope, faster
- This topology: 17 agents, ~77 min -- larger scope (33 gaps, ~15 files created/updated)

---

# SECTION 7: PROMPT TEMPLATES

## 7.1 Census Agent Template (applies to census-a through census-e)

```
## Context
You are a CENSUS EXTRACTION agent. Your job is to READ files and EXTRACT structured data.
You do NOT interpret, synthesize, judge, or create. You EXTRACT.

## Your File Assignment
[LIST OF FILES TO READ]

## Your Output File
[OUTPUT FILE PATH]

## Output Format
Create your output file IMMEDIATELY with section headers and empty tables.
Then populate each table as you read each source file.

### FINDING IDS EXTRACTED
For every finding ID you encounter (pattern: R1-###, R2-###, R3-###, R4-###,
R5-###, DD-F-###, OD-F-###, EXT-*-###, COMP-F-###, CA-###, F-E-###, DEC-###):
| Finding ID | Source File | Line Number | Full Text (first 100 chars) |

### SCORE DATA EXTRACTED
For every exploration score:
| Subject | Score | Breakdown (if any) | Source File | Line |

### DECISION RECORDS EXTRACTED
For every decision (DEC-### or key choice documented):
| Decision ID/Topic | What Was Decided | Why | Alternatives | Source File | Line |

### KEY INSIGHTS EXTRACTED
For insights NOT formalized as finding IDs:
| Insight | Source File | Line | Related Finding IDs |

## Binary Rules
- DO: Create output file as first action
- DO: Include line numbers for every extraction
- DO: Read every assigned file completely
- DO NOT: Read files outside your assignment
- DO NOT: Interpret or judge the data
- DO NOT: Create any file besides your output file
- DO NOT: Modify any source file
- DO NOT: Omit data because it seems redundant

## Completion
When done, send: "COMPLETE: [your-name]. Output: [path]. Duration: [min]."
Send to BOTH lead and weaver.
```

## 7.2 Chain Builder Template (applies to chain-a, chain-b, chain-c)

```
## Context
You are a CHAIN BUILDER agent. Your job is to CREATE formal provenance
documents from extracted census data. These documents become part of the
permanent provenance chain.

## Your Output Files
[LIST OF FILES TO CREATE]

## Template References
[LIST OF EXISTING FILES TO USE AS FORMAT TEMPLATES]

## Census Data Sources
[LIST OF EXTRACTION FILES TO READ]

## For Each Document You Create

### Structure Requirements (binary)
- MUST have YAML frontmatter with: title, created, predecessor, successor
- MUST have table of contents
- MUST have every finding with: ID, full text, source exploration, evidence, lifecycle status
- MUST have consumption matrix (which downstream stages consume which findings)
- MUST match the structural format of the template reference file

### Content Requirements (binary)
- Every finding ID MUST trace to a line number in a census extraction file
- Every claim MUST cite a source (census file + line number)
- NO invented findings -- if census data does not support a finding, do NOT include it
- NO speculative content -- mark unknowns as "UNDETERMINED" rather than guessing
- Every section from the template MUST be present (even if marked "N/A" or "UNDETERMINED")

## Binary Rules
- DO: Create output files as first action (skeleton with headers)
- DO: Populate progressively (section by section)
- DO: Cite census extraction file and line for every claim
- DO NOT: Read raw source files (use ONLY census extractions + adjacency matrix)
- DO NOT: Modify any existing file
- DO NOT: Invent data not in census extractions
- DO NOT: Skip sections from the template
- DO NOT: Use judgment-based language ("probably", "might", "seems") -- use factual language only

## Completion
When done, send: "COMPLETE: [your-name]. Output: [list of files]. Duration: [min]."
Send to BOTH lead and weaver.
```

## 7.3 Updater Agent Template (applies to updater-a through updater-d)

```
## Context
You are an UPDATER agent. Your job is to UPDATE existing files to reflect
the current state of the provenance chain. You MODIFY stale content; you
do not create new documents.

## Your File Assignment
[LIST OF FILES TO UPDATE, with specific sections to change]

## What To Change (Binary Checklist)
For each file, a specific list:
- [ ] Change "[old text]" to "[new text]" in [section]
- [ ] Add [content] to [section]
- [ ] Update table row [X] from "PENDING" to "COMPLETE"
[etc.]

## Census/Chain Data Sources
[LIST OF FILES TO READ for update content]

## Binary Rules
- DO: Read the file's current content before making changes
- DO: Preserve ALL existing content that is NOT stale
- DO: Change tense from future ("will") to past ("produced", "achieved")
- DO: Add new sections where the gap audit specifies them
- DO NOT: Delete existing sections (only UPDATE them)
- DO NOT: Modify files outside your assignment
- DO NOT: Create new files (except updater-d's dark-matter section)
- DO NOT: Change DD content (only OD and cross-reference content)
- DO NOT: Make stylistic changes -- only factual updates

## Staleness Markers to Replace
These exact strings indicate stale content to replace:
- "TBD" → replace with actual data from census
- "PENDING" → replace with actual status
- "IN PROGRESS" → replace with "COMPLETE"
- "not yet complete" → replace with completion data
- "will produce" → replace with "produced"
- "will consume" → replace with "consumed"
- future tense verbs → past tense verbs (for completed work)

## Completion
When done, send: "COMPLETE: [your-name]. Output: [list of files]. Duration: [min]."
Send to BOTH lead and weaver.
```

## 7.4 Traversal Tester Template

```
## Context
You are a TRAVERSAL TESTER. You test whether the provenance chain is
self-sufficient by reading ONLY formal provenance files. You are a
FRESH-EYES agent: you have NO knowledge of the dark matter, checkpoints,
or operational files. You know ONLY what the provenance chain tells you.

## Your Assignment
Execute 10 traversal tests. For each test, record PASS or FAIL with evidence.

## Files You May Read
ONLY files in these directories:
- DESIGN-SYSTEM/provenance/ (all subdirectories)
- DESIGN-SYSTEM/BACKBONE.md
- DESIGN-SYSTEM/patterns/
- DESIGN-SYSTEM/anti-patterns/

You may NOT read:
- checkpoints/
- _od-audit-scratchpad/
- _execution-journal/
- knowledge-architecture/ (top level files)
- _provenance-gap-analysis/
- _workflow-metacognition/

## The 10 Tests

### Test 1: Forward Traversal (R1-001 to AD)
Start: Find R1-001 in provenance/original-research/R1-DOCUMENTATION-PATTERNS.md
Trace: Through OD-RESEARCH-GATE → OD exploration reference → OD-outbound-findings → HANDOFF-OD-TO-AD
Pass if: Every link resolves to an existing file with the referenced content

### Test 2: Backward Traversal (OD-F-005 to research)
Start: Find OD-F-005 in OD-outbound-findings.md
Trace: Backward to source exploration → to research inputs → to R-files
Pass if: Every link resolves backward

### Test 3: Cross Traversal (OD-003 to OD-005 relationship)
Start: Look up OD-003 in OD-SYNTHESIS.md
Find: Its relationship to OD-005
Pass if: Relationship is documented in a single document

### Test 4: Accumulation (constraint count comparison)
Count: Total constraints in HANDOFF-OD-TO-AD.md
Compare: Total constraints in HANDOFF-DD-TO-OD.md
Pass if: OD-to-AD count > DD-to-OD count

### Test 5: Finding Lifecycle (OD-F-001)
Find: OD-F-001 in OD-outbound-findings.md
Check: Has discovery date? Source? Validation? Status? Consumers?
Pass if: All 5 lifecycle fields present

### Test 6: Soul Determination
Open: SOUL-DISCOVERIES.md
Find: OD entries or formal "no new soul pieces" determination
Pass if: OD determination exists

### Test 7: Anti-Pattern Registry
Open: anti-patterns/registry.md
Find: OD entries
Pass if: At least one OD-related entry exists

### Test 8: Pipeline Manifest (OD-F entries)
Open: PIPELINE-MANIFEST.md Section B
Find: OD-F entries
Pass if: Entries exist and are NOT "TBD"

### Test 9: Backbone Status
Open: BACKBONE.md Section 4
Find: OD status
Pass if: Says "COMPLETE", not "IN PROGRESS"

### Test 10: Reproducibility
Read ONLY: provenance/stage-3-organization-od/ (all files)
Write: What you learned about OD from these files alone
Pass if: You can state: number of explorations, number of findings, audit
happened, fixes applied, scores achieved

## Binary Rules
- DO: Record exact file paths and line numbers for every check
- DO: Record the exact text you found (or "NOT FOUND")
- DO NOT: Read any file outside the allowed list
- DO NOT: Infer information from file names alone -- read the content
- DO NOT: Modify any file
- DO NOT: Suggest fixes -- only report PASS/FAIL

## Output File
[OUTPUT PATH]

## Completion
When done, send: "COMPLETE: traversal-tester. Output: [path]. Duration: [min].
PASS: [count]/10. FAIL: [count]/10."
Send to BOTH lead and weaver.
```

---

# APPENDIX A: RISK ANALYSIS

## A.1 Highest-Risk Agent

**chain-a** (OD-outbound-findings + HANDOFF) is the highest-risk assignment:
- Creates the 2 most structurally important documents
- Closes the most CRITICAL gaps (GAP-001, GAP-002)
- Has the most complex output format (consumption matrices, meta-pattern analysis)
- Is depended on by updater-b (needs OD-F findings for PIPELINE-MANIFEST) and updater-d (needs successor pointer target)

**Mitigation:** chain-a gets the longest time allocation (18 min). Its output skeleton includes ALL section headers so partial progress is visible. Lead checks for partial output at 10 min mark.

## A.2 Highest-Risk Dependency

**Wave 2 (graph-builder) is a single point of failure:**
- Only 1 agent, no parallelism
- All Wave 3 agents depend on its output
- If it fails, the entire pipeline stalls

**Mitigation:** Graph builder has the simplest instructions (read 5 files, build tables). Its output format is well-defined. If it crashes, a replacement agent can be spawned with minimal context (just the 5 census files + gap definitions). Estimated re-run: 12 min.

## A.3 Known Gaps Not Fully Closable

Some gaps require JUDGMENT decisions that agents cannot make:

| Gap | Judgment Required | Resolution |
|-----|-------------------|------------|
| GAP-017 | Should OD-002/003/004/005 key insights be elevated to formal OD-F findings? | chain-a evaluates based on structural consistency with existing OD-F pattern. If insight matches the pattern "X naturally creates Y density," it becomes OD-F. Otherwise, remains informal. Binary rule: matches pattern = elevate. |
| GAP-020 | What is the scoring rubric? | chain-b documents what CAN be reconstructed from census data. If OD-001 has a 4-dimension breakdown, that becomes the rubric. Rubric = the dimensions present in the data. Binary rule: use what exists, mark missing dimensions as "UNDETERMINED." |
| GAP-026 | Should OD-F-005 be Soul Piece #6? | updater-c evaluates against binary criteria: Does it transcend a single exploration? Does it describe a perceptual truth? Is it falsifiable? If all 3 = YES, register as soul piece. If any = NO, register as "evaluated, not elevated" with reasoning. |

---

# APPENDIX B: FILE COUNT SUMMARY

| Category | Files | Created By |
|----------|-------|-----------|
| Census extraction files | 5 | census-a through census-e |
| Graph/triage files | 1 | graph-builder |
| New provenance chain documents | 5 | chain-a, chain-b, chain-c |
| Updated existing files | 9 | updater-a through updater-d |
| Verification/test files | 2 | traversal-tester, verifier |
| Infrastructure staging file | 1 | updater-d (dark-matter section) |
| State tracking file | 1 | lead + weaver |
| **Total files touched** | **24** | |

---

# APPENDIX C: COMMIT PLAN

| Commit # | Wave | Message | Files |
|----------|------|---------|-------|
| 1 | 0 | `chore(provenance): Initialize remediation state tracker` | 1 |
| 2 | 1 | `feat(provenance): Wave 1 census extraction -- 5 extraction files` | 5 |
| 3 | 2 | `feat(provenance): Wave 2 finding adjacency matrix` | 1 |
| 4 | 3 | `feat(provenance): Wave 3 chain construction -- 5 new provenance documents` | 5 |
| 5 | 4 | `feat(provenance): Wave 4 infrastructure updates -- 10 files updated` | 10 |
| 6 | 5 | `feat(provenance): Wave 5 verification -- traversal tests + gap closure report` | 2 |

**Total commits:** 6 (one per wave)
**All commits made by Lead only.**

---

*End of Agent Team Topology*
