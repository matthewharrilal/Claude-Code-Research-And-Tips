# Revisions: Architecture Files (Reports 13-17)
## What the Plan MISSES, UNDERSPECIFIES, or GETS WRONG

**Revision Agent:** C (Architecture)
**Files Analyzed:** 13-target-topology.md, 14-triage-protocol.md, 15-phase-architecture.md, 16-agent-team-topology.md, 17-verification-framework.md
**Date:** 2026-02-08

---

## File: 13-target-topology.md

### What the Plan Gets Right
The plan's file manifest (6 new, 10 updated) aligns with Report 13's target directory tree. The plan correctly identifies the 4 missing CRITICAL files and the dependency order for OD-outbound-findings -> SYNTHESIS -> AUDIT-SYNTHESIS -> HANDOFF.

### REVISIONS NEEDED

**REVISION 1 -- CRITICAL**
- **Plan Section Affected:** File Ownership Matrix, New Files table (line 55-65)
- **What's Missing/Wrong:** The plan lists 6 new files. Report 13 specifies 7 files in the OD stage-3 directory (Section 1.2, lines 89-92): OD-outbound-findings, OD-SYNTHESIS, OD-AUDIT-SYNTHESIS, HANDOFF-OD-TO-AD, plus the updates to CLAUDE.md, STAGE-HEADER, OD-RESEARCH-GATE. But critically, Report 13 places `EXT-RESEARCH-REGISTRY.md` at `provenance/EXT-RESEARCH-REGISTRY.md` (line 60) -- a CROSS-STAGE file, not inside stage-3. The plan places it there correctly (line 60), but the plan's census-b agent is told to write it (lines 109-117) WITHOUT reading the complete source material. Report 13, Section 1.2, lines 114-119 specifies that EXT-RESEARCH-REGISTRY flows IN from **six** sources: OD-004-EXTERNAL-RESEARCH, OD-005-EXTERNAL-RESEARCH, OD-006-CREATIVE-RESEARCH-FEED, OD-001 inline header, identity-brief.md, AND research-refinement.md. The plan's census-b only reads 4 of these 6 sources (lines 110-113), missing identity-brief.md and research-refinement.md entirely.
- **Evidence from Report:** Section 1.2, lines 117: "Flows IN from: ... identity-brief.md, research-refinement.md"
- **Proposed Fix:** Add to census-b's read list: `_od-audit-scratchpad/identity-brief.md` (for EXT-CONV and EXT-DENSITY findings) and `_od-audit-scratchpad/research-refinement.md` (for per-citation soul test results). Without these, the EXT-RESEARCH-REGISTRY will be missing ~8 EXT-CONV findings, ~3 EXT-DENSITY findings, and ALL soul test results for the ~56 EXT-* findings.

**REVISION 2 -- CRITICAL**
- **Plan Section Affected:** File Ownership Matrix, New Files table (line 57-58)
- **What's Missing/Wrong:** The plan gives OD-outbound-findings.md a size target of 180-250 lines. Report 13's Section 2.4 (lines 242-276) specifies SIX major sections for this file: (A) OD-F Finding Declarations, (B) Meta-Pattern section for OD-F-005, (C) Forward-Looking Findings for AD/CD, (D) Anti-Pattern Findings, (E) Stage 2 Consumption Verification, (F) Consumption Matrix. The plan's chain-a agent specification (lines 98-107) mentions only a subset: OD-F findings, consumption matrix, and DD-F verification. Missing from the plan: Section B (meta-pattern with full reasoning chain), Section C (per-finding AD application instructions), and Section D (2px border epidemic + 3-dialect anti-pattern evidence).
- **Evidence from Report:** Section 2.4, lines 244-274 -- complete 6-section breakdown with sub-section detail
- **Proposed Fix:** Expand chain-a's output specification to include ALL 6 sections from Report 13. Increase size target to 350-500 lines (matching Report 13's estimate on line 126). Add explicit binary rules: "MUST include meta-pattern reasoning chain for OD-F-005", "MUST include per-finding AD application instructions", "MUST include anti-pattern findings from audit".

**REVISION 3 -- HIGH**
- **Plan Section Affected:** File Ownership Matrix, Updated Files (lines 66-81)
- **What's Missing/Wrong:** Report 13 Section 3 (Infrastructure File Updates) specifies granular per-section update instructions for PIPELINE-MANIFEST.md that the plan summarizes as "Add OD-F Section B, update counts" (line 75). Report 13 identifies SIX distinct sections needing updates in PIPELINE-MANIFEST: Section B (OD-F entries + DD-F consumption status updates), Section C (soul piece determination), Section D (organizational patterns), Section E (cross-reference index with OD example), Section F (finding lifecycle state counts). The plan's infra agent gets "Updates 10 existing files" with no section-level specificity.
- **Evidence from Report:** Section 3.1 (lines 411-505): 6 subsections with exact target content including full table layouts, before/after text, and recommendation annotations
- **Proposed Fix:** Break the infra agent's PIPELINE-MANIFEST work into an explicit checklist matching Report 13's 6 subsections. Each subsection should be a binary rule: "Section B MUST contain OD-F-001 through OD-F-012 entries (not TBD)", "Section C MUST resolve soul determination", etc.

**REVISION 4 -- HIGH**
- **Plan Section Affected:** File Ownership Matrix, Updated Files (line 76)
- **What's Missing/Wrong:** The plan says BACKBONE.md needs "Rewrite Section 4 to past tense". Report 13 Section 3.2 (lines 506-548) specifies FOUR separate sections of BACKBONE needing updates: Section 4 (full rewrite with consumed/produced tables + 5 key decisions), Section 8 (generated research flow OD-F entries), Section 9 (soul compliance matrix with OD-001 through OD-006 rows, all PASS), Section 10 (causal chain from "in progress" to "COMPLETE"). The plan collapses all four into one line item.
- **Evidence from Report:** Section 3.2, lines 506-548: 4 distinct subsection updates with specific content
- **Proposed Fix:** Expand BACKBONE update specification to explicitly list all 4 section updates. Add binary rules: "Section 4 MUST include consumed/produced tables", "Section 9 MUST have OD-001 through OD-006 rows showing PASS", "Section 10 MUST show OD as complete". The infra agent needs to know which sections to touch.

**REVISION 5 -- HIGH**
- **Plan Section Affected:** New File specifications for OD-SYNTHESIS.md (lines 129-135)
- **What's Missing/Wrong:** The plan gives chain-a ownership of OD-SYNTHESIS (line 39) but Report 13 Section 2.4 File 5 (lines 278-319) specifies ELEVEN required sections for OD-SYNTHESIS, not the 5-6 the plan implies. Missing from plan: Section 6 (OD-F-005 Meta-Insight Analysis with full reasoning chain), Section 8 (Negative Space Record: 4 unmapped R-1 findings, rejected pairings, 72 unfixed audit findings), Section 9 (Emergence Reasoning Chains for OD-F-005/006/007/008), Section 10 (Scoring Analysis with rubric definition and per-OD dimension breakdowns), Section 11 (OD-006 Cross-Reference Verification).
- **Evidence from Report:** Section 2.4, lines 278-319: 11 sections enumerated with specific content requirements
- **Proposed Fix:** Chain-a's (or the plan's chain-a) OD-SYNTHESIS specification MUST enumerate all 11 sections from Report 13. This is a 500-700 line document, not a quick summary. The emergence reasoning chains and scoring analysis are required for verification dimensions 6, 9, and 13 from Report 17.

**REVISION 6 -- HIGH**
- **Plan Section Affected:** File Ownership Matrix, Updated Files (line 78)
- **What's Missing/Wrong:** The plan lists "patterns/PATTERN-INDEX.md: 6 patterns PENDING -> VALIDATED" as a one-line item. Report 13 Section 3.5 (lines 608-626) specifies the full target content: per-pattern rows with Status, Score, Density Pairing, AND Provenance columns. It also specifies adding a link to organizational-patterns.md AND updating the Usage Flowchart to include an OD pattern selection step.
- **Evidence from Report:** Section 3.5, lines 608-626
- **Proposed Fix:** Expand PATTERN-INDEX specification to include full table format and flowchart update.

**REVISION 7 -- MEDIUM**
- **Plan Section Affected:** Dark Matter Disposition (line 25-26, "Resolved Decisions")
- **What's Missing/Wrong:** The plan's Resolved Decision row states "No archiving needed. No files warrant deletion or archiving per Report 13." However, Report 13 Section 4.10 (lines 781-793) shows 13 ABSORB files and 1 CONSOLIDATE file, with 35 files KEEP-IN-PLACE. The plan conflates "no archiving" with "no dark matter processing." While Report 13 does NOT recommend archiving (0 ARCHIVE count in its disposition summary), it DOES specify 13 files that must be ABSORBED into the formal chain. The plan's EXT-RESEARCH-REGISTRY creation partially addresses this, but the plan never explicitly addresses the ABSORB disposition for the other 12 files (e.g., OD-CHECKPOINT, DISCOVERIES-LOG, COMPONENTS-REGISTRY, PHASE-1B-MEGA-DEBRIEF, DD-SOURCE-OF-TRUTH-EXTRACTION, contrast-accessibility, fresh-eyes, research-refinement, fix-report-fixer-c, cross-od-consistency, comparative-reference, decisions.md).
- **Evidence from Report:** Section 4.10, lines 785-787: "ABSORB: 13 files, ~8,200 lines"
- **Proposed Fix:** The plan should acknowledge that 13 files require data ABSORPTION (extraction of specific data into the new formal chain documents). The chain builder agents' read lists should be cross-checked against Report 13's absorption targets. The census-b agent already handles some of this, but the plan should explicitly track which ABSORB file feeds which new chain document.

**REVISION 8 -- MEDIUM**
- **Plan Section Affected:** OD-F Finding Registry (lines 215-231)
- **What's Missing/Wrong:** The plan lists OD-F-001 through OD-F-012. Report 13 Section 5.1 (lines 799-922) provides a COMPLETE finding registry of ~89 dark matter finding IDs across 8 categories: EXT-CONV (5), EXT-DENSITY (3), EXT-TASK (12), EXT-CONF (12), EXT-SPAT (12), EXT-CREATIVE (12), OD-F (12), F-E (5), CA (5), DEC (12), plus COMP-F detailed data. The plan mentions only OD-F and EXT findings. It completely omits F-E-001 through F-E-005 (fresh-eyes), CA-001 through CA-005 (accessibility), and DEC-001 through DEC-012 (decisions) from its finding registry.
- **Evidence from Report:** Section 5.1, lines 799-922: complete registry with resolution targets and status
- **Proposed Fix:** Expand the plan's finding registry to include ALL finding families. The plan's OD-AUDIT-SYNTHESIS agent (chain-a in plan) must be instructed to register F-E and CA findings. The OD-SYNTHESIS agent must register DEC findings. The plan currently assigns OD-AUDIT-SYNTHESIS to chain-a but Report 13's dependency order places it THIRD (after outbound-findings and synthesis), not combined with outbound-findings.

**REVISION 9 -- MEDIUM**
- **Plan Section Affected:** Entire plan's file manifest
- **What's Missing/Wrong:** Report 13 Section 6.2 (lines 1032-1083) provides a complete DARK MATTER MIGRATION MAP showing exactly which source file feeds which target file. The plan has no equivalent mapping. This means agents may miss sources. For example, OD-AUDIT-SYNTHESIS.md (per Report 13 lines 1047-1066) needs data from: OD-GRANULAR-AUDIT-RESULTS, fresh-eyes, contrast-accessibility, cross-od-consistency, structural-integrity, fix-report-fixer-c, comparative-reference, research-refinement. The plan's chain-a agent for OD-AUDIT-SYNTHESIS reads only OD-GRANULAR-AUDIT-RESULTS and a few scratchpad files.
- **Evidence from Report:** Section 6.2, lines 1032-1083: complete source-to-target mapping diagram
- **Proposed Fix:** Create an explicit source-to-target mapping table in the plan, derived from Report 13 Section 6.2. Each agent's read list should be verified against this mapping to ensure no source files are missed.

---

## File: 14-triage-protocol.md

### What the Plan Gets Right
The plan correctly uses REFERENCE (distillation, not migration) as the primary dark matter strategy, which aligns with Report 14's KEEP-IN-PLACE category.

### REVISIONS NEEDED

**REVISION 10 -- CRITICAL**
- **Plan Section Affected:** Entire plan scope
- **What's Missing/Wrong:** Report 14 provides per-file triage decisions for 80+ files across 8 categories (Sections 2A through 2H), not just the 51 Category B files. The plan's dark matter handling is limited to: census-b reads 3 external research files and writes EXT-RESEARCH-REGISTRY. Report 14 identifies **22 ABSORB files** requiring data extraction into the formal chain, including critical files the plan's agents never read:
  - `checkpoints/COMPONENTS-REGISTRY.md` (629 lines) -- 11 component character names, ONLY source (Section 2A, file #5)
  - `checkpoints/COMPONENT-AUDIT-COMP-001-011.md` (755 lines) -- pre-remediation baseline (Section 2A, file #6)
  - `checkpoints/RETROACTIVE-AUDIT-DD-001-006.md` (928 lines) -- finding-to-DD applicability matrix (Section 2A, file #11)
  - `checkpoints/PERCEPTUAL-DEEPENING-SUMMARY.md` (249 lines) -- alternate /70 scoring methodology (Section 2A, file #13)
  - `checkpoints/VISUAL-AUDIT-COMP-001-011.md` (320 lines) -- per-component soul token verification (Section 2A, file #14)
  - `dependency-trace/DD-SOURCE-OF-TRUTH-EXTRACTION.md` (674 lines) -- 4 CRITICAL token divergences (Section 2G, file #1)
  - `knowledge-architecture/KA-DECISIONS.md` (382 lines) -- tier classification framework (Section 2B, file #14)
  - `knowledge-architecture/PHASE-1B-MEGA-DEBRIEF.md` (2,632 lines) -- 463-file dependency trace (Section 2B, file #12)
  - `_od-audit-scratchpad/structural-integrity.md` (403 lines) -- semantic HTML/ARIA data (Section 2C, file #6)

  The plan ignores ALL of these. It only processes the 3 external research files and OD-CHECKPOINT.
- **Evidence from Report:** Section 2, all subsections -- 80+ per-file decisions with specific data extraction targets
- **Proposed Fix:** Either: (A) Add a dedicated Phase 2 (Dark Matter Triage) to the plan with 3 parallel triage agents as Report 14 specifies, or (B) expand the existing census agents' read lists to include ALL ABSORB files with explicit extraction instructions. Option A is strongly preferred because Report 14's triage protocol defines a 5-step decision tree (lines 40-65) that agents should follow systematically, not ad hoc.

**REVISION 11 -- CRITICAL**
- **Plan Section Affected:** Team Architecture (lines 29-47)
- **What's Missing/Wrong:** The plan's 4-wave structure has NO triage phase. Report 14 Section 5 (Post-Triage Verification, lines 616-714) defines a complete verification protocol for triage outcomes: finding ID completeness test (~100 unique IDs), score completeness test, citation completeness test, OD provenance directory completeness check, PIPELINE-MANIFEST update verification, upstream reference verification, and a dark matter ratio flip test. The plan has NONE of this. It jumps straight from census to chain building without verifying that the census captured everything.
- **Evidence from Report:** Section 5, lines 616-714: 7 verification tests for triage completeness
- **Proposed Fix:** Add a triage phase between the plan's Wave 1 (Census) and Wave 2 (Chain Builders). This phase should: (1) execute the 5-step decision tree on all 51+ dark matter files, (2) extract data from ABSORB files, (3) verify extraction completeness using Report 14's Section 5 tests, and (4) produce an extraction manifest that the chain builders use as input.

**REVISION 12 -- HIGH**
- **Plan Section Affected:** census-b specification (lines 109-117)
- **What's Missing/Wrong:** The plan's census-b is told to produce EXT-RESEARCH-REGISTRY.md containing "~56 EXT findings across 6 categories with application status." Report 14 identifies that the EXT findings span **7** subdomain categories, not 6: EXT-CONV (5), EXT-DENSITY (3), EXT-TASK (12), EXT-CONF (12), EXT-SPAT (12), EXT-CREATIVE (12), plus uncategorized EXT findings. That totals approximately 56+ findings. But Report 14 also requires per-citation soul test results (from research-refinement.md, lines 265-266), 7 spirit violation identifications, and 7 raw directive identifications. The plan's census-b never reads research-refinement.md.
- **Evidence from Report:** Section 2C, file #3 (research-refinement.md, 395 lines): "55 EXT-* citations soul-tested (5-question test). 7 spirit violations and 7 raw directives identified."
- **Proposed Fix:** Add research-refinement.md to census-b's read list. Add binary rule: "EXT-RESEARCH-REGISTRY MUST include soul test results (PASS/FAIL per citation)" and "MUST include spirit violation list."

**REVISION 13 -- HIGH**
- **Plan Section Affected:** Resolved Decisions, Archive structure (line 25-26)
- **What's Missing/Wrong:** Report 14 Section 4 (Archive Protocol, lines 502-613) specifies a complete archive directory structure with: INDEX.md master archive index, 5 subdirectories (od-audit-evidence/, od-execution-journal/, phase-tracking/, dependency-trace-ops/, checkpoint-synced/), per-file ARCHIVED metadata headers, and an un-archiving protocol. The plan says "No archiving needed" but Report 14 identifies 28 files totaling ~8,800 lines that should be ARCHIVED (Section 2C per-OD systematic-audit-001-006, visual-audit-001-006, fix reports, operational trackers). While Report 13's disposition summary shows 0 ARCHIVE files, Report 14's more detailed analysis shows 28.
- **Evidence from Report:** Sections 2C (lines 276-311) and Section 4 (lines 502-613): 28 ARCHIVE files + complete archive structure
- **Proposed Fix:** There is a CONFLICT between Report 13 and Report 14 on archiving. Report 13 says 0 ARCHIVE, Report 14 says 28 ARCHIVE. The plan should acknowledge this conflict and choose one approach. If choosing Report 13's "no archiving" approach, the plan should still address how the 28 operational files are dispositioned (KEEP-IN-PLACE? with provenance links?). If choosing Report 14's archiving approach, add an archive phase.

**REVISION 14 -- MEDIUM**
- **Plan Section Affected:** Verification Protocol (lines 199-212)
- **What's Missing/Wrong:** Report 14 Section 3.4 (lines 477-497) defines rules for handling data that appears in MULTIPLE dark matter files (OD-F finding definitions in 3 files, 55 EXT-* findings in 3 files, 5 Soul Pieces in 4 files, per-OD scores in 3 files). Each has a designated PRIMARY source. The plan has no conflict resolution protocol for data appearing in multiple sources.
- **Evidence from Report:** Section 3.4, lines 477-497: 4 multi-source data conflicts with resolution rules
- **Proposed Fix:** Add a "Source Priority" section to the plan specifying: OD-CHECKPOINT is authoritative for OD-F definitions, original research files (OD-004/005/006-EXTERNAL-RESEARCH) are authoritative for EXT-* definitions, provenance/SOUL-DISCOVERIES.md is authoritative for soul pieces, OD-GRANULAR-AUDIT-RESULTS is authoritative for post-audit quality assessment.

---

## File: 15-phase-architecture.md

### What the Plan Gets Right
The plan captures the key design decisions: per-file ownership, Lead THIN rule, and no Playwright needed.

### REVISIONS NEEDED

**REVISION 15 -- CRITICAL**
- **Plan Section Affected:** Team Architecture 4-wave structure (lines 29-47)
- **What's Missing/Wrong:** The plan has 4 waves. Report 15 has 6 phases (Phase 0 through Phase 6). The plan completely SKIPS two phases from Report 15:

  **Missing Phase 1 (Complete Diagnostic):** Report 15 Phase 1 (lines 225-404) deploys 3 parallel agents to build: (a) a complete Finding Registry Scanner (every finding ID in the system with definition locations), (b) a Reference Graph Builder (every document-to-document edge, broken edges, orphans, sinks, clusters), (c) a Traversal Chain Tester (pre-remediation baseline of forward/backward/cross/lifecycle/accumulation/dark-matter tests). The plan SKIPS ALL THREE. Without the Finding Registry, agents building OD-outbound-findings cannot verify they have captured all finding IDs. Without the Reference Graph, agents cannot identify broken edges to fix. Without the Traversal Baseline, there is no before/after comparison to prove the remediation worked.

  **Missing Phase 2 (Dark Matter Triage):** Report 15 Phase 2 (lines 408-643) deploys 3 parallel triage agents to classify all 51 dark matter files and produce an extraction manifest. The plan SKIPS this entirely (see Revision 10 above).

  The plan jumps from setup directly to chain building (Wave 1: Census, Wave 2: Chain Builders). This means chain builders are working from raw source files rather than extracted, verified, de-conflicted census data.
- **Evidence from Report:** Phases 1-2, lines 225-643: 6 agents, ~35 minutes of diagnostic and triage work that produces machine-processable inputs for chain construction
- **Proposed Fix:** Add Phase 1 (Diagnostic) and Phase 2 (Triage) to the plan. These two phases are on the CRITICAL PATH -- Report 15 explicitly states (line 231): "Critical Path: Yes -- all downstream phases depend on Phase 1 outputs." The diagnostic outputs serve as structured input to chain builders, which means chain builders don't need to read dozens of raw files; they read 5-7 structured extraction files instead. This also reduces context pressure on chain builder agents.

**REVISION 16 -- CRITICAL**
- **Plan Section Affected:** Wave Execution Schedule (lines 86-157)
- **What's Missing/Wrong:** Report 15's Phase 3 (Formal Chain Construction, lines 647-836) creates 5 new provenance documents via 2 agents (3A and 3B). The plan's Wave 2 creates 4 new files via 2 agents (chain-a and chain-b). The plan OMITS OD-AUDIT-SYNTHESIS.md from its chain building wave -- it assigns audit synthesis creation to chain-a along with OD-outbound-findings and OD-SYNTHESIS (line 39). Report 15 separates these into two distinct agents: Agent-3A (OD-outbound-findings + HANDOFF) and Agent-3B (OD-SYNTHESIS + organizational-patterns + STAGE-HEADER + CLAUDE.md). Report 15's Agent-3A does NOT create OD-AUDIT-SYNTHESIS -- that document is implicitly created as part of the broader triage/extraction process.

  The plan's chain-a agent is overloaded: it must create OD-outbound-findings.md (350-500 lines per Report 13), AND read OD-GRANULAR-AUDIT-RESULTS (620 lines), AND read all 6 OD HTML files, AND read cross-od-consistency (607 lines), AND read fresh-eyes.md (324 lines), AND produce OD-SYNTHESIS.md (500-700 lines) AND OD-AUDIT-SYNTHESIS.md (400-600 lines). That is 3 output files and 10+ input files for a single agent -- well above the 5-10 file sweet spot.
- **Evidence from Report:** Phase 3, lines 647-836: detailed agent assignment with internal dependency graph
- **Proposed Fix:** Split the plan's chain-a into 3 separate agents matching Report 15: (1) Agent for OD-outbound-findings + HANDOFF, (2) Agent for OD-SYNTHESIS + organizational-patterns, (3) Agent for OD-AUDIT-SYNTHESIS. This matches the proven 5-10 files per agent constraint from MEMORY.md and gives each agent a focused scope.

**REVISION 17 -- HIGH**
- **Plan Section Affected:** Estimated wall time (line 49)
- **What's Missing/Wrong:** The plan estimates 35-45 minutes. Report 15 estimates 90-120 minutes for the full 6-phase architecture (line 30). Even just the plan's 4 waves, without the diagnostic and triage phases, should take 50-60 minutes based on Report 15's per-phase estimates: Wave 1 (census ~10 min) + Wave 2 (chain building ~25 min) + Wave 3 (gate ~10 min) + Wave 4 (infra ~15 min) = 60 min minimum. The plan's 35-45 estimate is unrealistically optimistic.
- **Evidence from Report:** Lines 30, and Section 12 (cost estimate): "approximately 10-15 agents, and an estimated 90-120 minutes wall time"
- **Proposed Fix:** Revise time estimate to 75-100 minutes for a plan without diagnostics, or 90-120 minutes with diagnostics. Per-wave estimates: Wave 1 census (10-12 min), Wave 2 graph+triage (20-25 min if added), Wave 3 chain construction (18-25 min), Wave 4 infrastructure updates (12-15 min), Wave 5 verification (15-18 min).

**REVISION 18 -- HIGH**
- **Plan Section Affected:** Wave 3 Gate (lines 143-153) and Wave 4 Infrastructure (lines 154-157)
- **What's Missing/Wrong:** The plan runs Wave 3 (gate agent creates HANDOFF) and Wave 4 (infra agent updates 10 files) SEQUENTIALLY. Report 15 Phase 3 and Phase 4 run IN PARALLEL (lines 72-88 in the dependency diagram): "Phase 3 ||| Phase 4 (PARALLEL -- no shared files)". This is because OD chain construction and prior-stage corrections are independent file sets. The plan loses ~15 minutes of parallelism by sequencing them.
- **Evidence from Report:** Phase dependency diagram, lines 72-88 and explicit statement on line 119: "Phase 3 ||| Phase 4 (PARALLEL -- no shared files)"
- **Proposed Fix:** Run the plan's chain builders and infrastructure updaters in parallel (after census completes), with the gate agent as the ONLY sequential dependency (it needs outbound-findings and synthesis before it can write HANDOFF). This is exactly the structure Report 15 proposes.

**REVISION 19 -- HIGH**
- **Plan Section Affected:** Missing entirely
- **What's Missing/Wrong:** Report 15 Phase 4 (Prior Stage Corrections, lines 840-946) identifies fixes needed in STAGES 1 AND 2, not just Stage 3. The plan focuses exclusively on Stage 3 OD chain creation and infrastructure updates. Report 15's Agent-4A is assigned to fix: Stage 1 STAGE-HEADER (add "KortAI Reference = Mental model" acknowledgment), Stage 2 STAGE-HEADER (add reference links to RETROACTIVE-AUDIT and VISUAL-AUDIT), RESEARCH-ACTIVE.md (backfill DD application data from 10 APPLIED to ~48 APPLIED), and sync checkpoints/RESEARCH-ACTIVE.md. NONE of these fixes appear in the plan.
- **Evidence from Report:** Phase 4, lines 852-882: Agent-4A assignment with 4 specific file fixes + binary success criteria
- **Proposed Fix:** Add Stage 1 and Stage 2 corrections to the plan's infra agent, or create a dedicated prior-stage-fix agent. These are necessary for verification items C-05, C-12, C-13, K-05, and H-13 from Report 17.

**REVISION 20 -- MEDIUM**
- **Plan Section Affected:** Phase A Setup (lines 87-93)
- **What's Missing/Wrong:** Report 15 Phase 0 (lines 126-221) specifies a complete state file initialization with: phase status table, per-phase output checklists, a `remediation/` subdirectory for intermediate outputs, and a lead pre-read checklist. The plan's Phase A creates only REMEDIATION-STATE.md and tasks. Report 15 also specifies creating a `remediation/` directory to contain Phase 1-2 outputs (finding-registry, reference-graph, traversal-results, triage files). The plan has no intermediate output directory.
- **Evidence from Report:** Phase 0, lines 126-200: state file format, directory structure, pre-read checklist
- **Proposed Fix:** Add `remediation/` output directory to the plan's setup phase. This prevents intermediate files from cluttering the existing directories and provides a clean structure for diagnostic outputs.

---

## File: 16-agent-team-topology.md

### What the Plan Gets Right
The plan applies the Lead THIN rule and per-file ownership correctly. The weaver role is not explicitly in the plan but the lead tracks state.

### REVISIONS NEEDED

**REVISION 21 -- CRITICAL**
- **Plan Section Affected:** Team Architecture: 7 Agents (lines 29-47)
- **What's Missing/Wrong:** The plan uses 7 agents (Lead + 6 workers). Report 16 specifies 17 agents across 6 waves (Section 6, lines 1212-1246): Lead, Weaver, 5 Census extractors, 1 Graph Builder, 3 Chain Builders, 4 Updaters, 1 Traversal Tester, 1 Verifier. The plan collapses:
  - 5 census agents into 2 (census-a, census-b) -- losing granularity on the 29-file audit scratchpad (census-b in Report 16 reads ALL 29 files)
  - 3 chain builders into 2 (chain-a, chain-b) -- overloading chain-a
  - 4 updaters into 1 (infra) -- that single agent must update 10 files, well above the 5-10 sweet spot
  - Weaver role is MISSING entirely
  - Graph Builder role is MISSING entirely
  - Traversal Tester is MISSING entirely (fresh-eyes verification)
  - Verifier is reduced to "grep some patterns"

  The census-b problem is particularly acute: Report 16 Section 1.4 (lines 167-201) notes that census-b reads 29 files, which "exceeds ideal 10, but these are extraction-only reads with uniform format -- acceptable for a census agent because it is READING not WRITING multiple files." The plan's census-b only reads 4 files and writes EXT-RESEARCH-REGISTRY -- it is not a census agent at all; it is a document builder improperly labeled.
- **Evidence from Report:** Sections 1.1-1.17 (17 agent definitions), Section 6 (agent count summary)
- **Proposed Fix:** Increase agent count to at minimum 12-14: Lead, Weaver, 3-5 Census agents, 1 Graph Builder (if diagnostic phase added), 3 Chain Builders, 3-4 Updaters, 1 Traversal Tester, 1 Verifier. The Weaver role is essential for cross-agent state tracking. The Traversal Tester MUST operate under the fresh-eyes constraint (reads ONLY formal chain, not source material).

**REVISION 22 -- CRITICAL**
- **Plan Section Affected:** census-b (lines 109-117)
- **What's Missing/Wrong:** As noted above, the plan's census-b is not a census agent -- it is a document creator. Report 16 Section 1.4 (lines 167-201) defines census-b as an EXTRACTION agent that reads all 29 _od-audit-scratchpad files and outputs `extract-audit-scratchpad.md` -- a structured extraction of finding IDs, audit evidence, fix data, and 3-dialect classification. It does NOT create EXT-RESEARCH-REGISTRY. The EXT-RESEARCH-REGISTRY is properly a chain builder output (Report 16 does not include it as a separate agent output -- it is absorbed into the chain-a OD-outbound-findings document's EXT-* section or created as a separate file by the lead after triage).
- **Evidence from Report:** Section 1.4, lines 167-201: census-b definition as extraction-only agent for 29 scratchpad files
- **Proposed Fix:** Redesign census-b as a true extraction agent for the audit scratchpad. Move EXT-RESEARCH-REGISTRY creation to a chain builder agent. This aligns with Report 16's proven pattern of separating extraction (census wave) from creation (chain building wave).

**REVISION 23 -- HIGH**
- **Plan Section Affected:** Missing agent: Graph Builder
- **What's Missing/Wrong:** Report 16 Section 1.8 (lines 351-395) defines a Graph Builder agent that reads all 5 census extraction files and builds: (a) a complete finding ID adjacency matrix (where defined, where referenced, where missing), (b) a dark-matter-to-gap mapping (which census files close which gaps), (c) a gap classification (TYPE-A through TYPE-D). This adjacency matrix is then read by ALL chain builders and updaters as their primary reference document. The plan has NO equivalent -- chain builders read raw source files directly, which means they risk missing findings that the adjacency matrix would have revealed.
- **Evidence from Report:** Section 1.8, lines 351-395: graph-builder agent definition with adjacency matrix output
- **Proposed Fix:** Add a graph builder agent to the plan between census and chain building. It reads the census outputs and produces a consolidated finding map. Chain builders then read this map instead of raw source files. This reduces chain builder context pressure and ensures no finding is missed.

**REVISION 24 -- HIGH**
- **Plan Section Affected:** infra agent (lines 154-157)
- **What's Missing/Wrong:** The plan assigns ALL 10 infrastructure file updates to a single "infra" agent. Report 16 splits this across 4 separate updater agents (Sections 1.12-1.15): updater-a (STAGE-HEADER + CLAUDE.md), updater-b (PIPELINE-MANIFEST + BACKBONE), updater-c (PATTERN-INDEX + anti-patterns + SOUL-DISCOVERIES + OD-RESEARCH-GATE), updater-d (DD-outbound-findings + dark-matter registry). Each updater reads 5-6 files and updates 2-4 files. The single infra agent reads 10+ files and updates 10 files -- double the proven sweet spot.
- **Evidence from Report:** Sections 1.12-1.15, lines 508-668: 4 updater agents with per-file ownership, zero contention proof, binary success criteria
- **Proposed Fix:** Split the infra agent into 3-4 updater agents. At minimum: one for PIPELINE-MANIFEST + BACKBONE, one for PATTERN-INDEX + anti-patterns + SOUL-DISCOVERIES, one for STAGE-HEADER + CLAUDE.md + OD-RESEARCH-GATE.

**REVISION 25 -- HIGH**
- **Plan Section Affected:** Missing role: Traversal Tester with fresh-eyes constraint
- **What's Missing/Wrong:** Report 16 Section 1.16 (lines 671-708) defines a Traversal Tester agent with a CRITICAL constraint: "This agent does NOT read ANY raw material file. It reads ONLY the formal provenance chain." This is the fresh-eyes reproducibility test -- can a fresh agent reconstruct OD from provenance alone? The plan has no equivalent. Its "Post-Commit Traversal Test" (lines 207-211) is performed by the lead tracing 3 findings, which violates the THIN rule (lead should not verify content) and lacks the fresh-eyes constraint (lead has seen everything).
- **Evidence from Report:** Section 1.16, lines 671-708, especially line 708: "CRITICAL CONSTRAINT (Fresh Eyes): This agent does NOT read ANY raw material file."
- **Proposed Fix:** Add a Traversal Tester agent to the plan's final wave. It must operate under the fresh-eyes constraint: it reads ONLY `DESIGN-SYSTEM/provenance/` files and the infrastructure files (BACKBONE, PATTERN-INDEX, anti-patterns). It must NOT read census files, checkpoints, or scratchpad files. This agent runs 10 traversal tests matching Report 16's specification.

**REVISION 26 -- HIGH**
- **Plan Section Affected:** Missing role: Weaver
- **What's Missing/Wrong:** Report 16 Section 1.2 (lines 76-108) defines a Weaver agent that: maintains cross-reference tables, logs agent completions, detects cross-agent dependencies, answers agent queries about file locations, and stays active for ALL waves. The plan has no Weaver. MEMORY.md explicitly states "Weaver role proven -- keep for any phase with shared state" (all three prior teams used a Weaver). Without a Weaver, the lead must track all cross-agent state, which conflicts with the THIN rule.
- **Evidence from Report:** Section 1.2, lines 76-108; MEMORY.md: "Weaver role proven"
- **Proposed Fix:** Add a Weaver agent to the plan that starts in Wave 0 and persists through verification. The Weaver owns the cross-reference section of REMEDIATION-STATE.md. The Lead owns the wave progress section. This matches Report 16's Section 1.2 specification including the file-ownership separation within the shared state file.

**REVISION 27 -- MEDIUM**
- **Plan Section Affected:** Communication Protocol (not present in plan)
- **What's Missing/Wrong:** Report 16 Section 4 (lines 1051-1127) defines a complete communication protocol: agent-to-lead completion signals, blocker signals, query signals; lead-to-agent wave start and shutdown signals; weaver communication rules; escalation paths for 6 failure scenarios; and lead intervention criteria. The plan has no communication protocol.
- **Evidence from Report:** Section 4, lines 1051-1127: 5 communication patterns + 6 escalation scenarios
- **Proposed Fix:** Add at minimum: (1) agent completion signal format (agent name, output path, duration, issues), (2) blocker signal format, (3) 20-minute timeout for crash detection.

**REVISION 28 -- MEDIUM**
- **Plan Section Affected:** Missing: Crash Recovery Protocol
- **What's Missing/Wrong:** Report 16 Section 5 (lines 1130-1209) defines crash recovery for each agent type: detection (20-minute timeout), per-agent-type recovery (census agents vs chain builders vs updaters vs traversal tester), and wave-level recovery. The plan has no crash recovery protocol. Given that the plan estimates 35-45 minutes wall time, a crash at minute 30 with no recovery protocol means starting over.
- **Evidence from Report:** Section 5, lines 1130-1209: per-agent crash recovery, file-first output pattern
- **Proposed Fix:** Add the file-first output pattern as a binary rule for all agents: "Create output file with skeleton headers as FIRST action. Populate progressively." This ensures partial output survives crashes. Add 20-minute timeout detection to the lead's monitoring responsibilities.

---

## File: 17-verification-framework.md

### What the Plan Gets Right
The plan includes a per-wave verification concept and a post-commit traversal test (lines 199-211).

### REVISIONS NEEDED

**REVISION 29 -- CRITICAL**
- **Plan Section Affected:** Verification Protocol (lines 199-212)
- **What's Missing/Wrong:** The plan's verification is 14 lines. Report 17 defines a 104-item, 18-dimension verification framework requiring 9 agents and 3.5-4.5 HOURS of execution time. The plan's verification consists of: per-wave file existence checks + grep counts, and 3 end-to-end traversal traces. Report 17's verification includes:
  - **Category A (7 items):** Document Universe Completeness -- every markdown file inventoried, every dark matter file triaged, every triage decision executed
  - **Category B (10 items):** Finding ID Integrity -- every ID cataloged, zero collisions, R3-023/R3-036 resolved, OD-F-005 builder-log collision resolved, zero ghosts, zero orphans
  - **Category C (21 items):** Stage Provenance Completeness -- per-stage file checks for Stages 1, 2, AND 3
  - **Category D (10 items):** Forward Traversability -- 5 specific chain traces
  - **Category E (10 items):** Backward Traversability -- inline header ID resolution
  - **Category F (6 items):** Cross-Traversability -- sibling comparison tests
  - **Category G (7 items):** Accumulation Integrity -- constraint count monotonicity
  - **Category H (16 items):** Infrastructure Consistency -- all registries, indexes, status claims
  - **Category I (4 items):** Information Ratio -- formal chain > dark matter
  - **Category J (5 items):** Reproducibility -- fresh agent test
  - **Category K (8 items):** Process Integrity -- formalization protocol exists

  The plan tests approximately 5 of the 104 items (file existence + 3 traversals = ~5 checks). That is 5% coverage.
- **Evidence from Report:** Sections 1-4, full document: 104 items enumerated with binary PASS/FAIL criteria
- **Proposed Fix:** This is the MOST important revision. The plan MUST include a verification phase that covers at minimum the CRITICAL items from Report 17. A realistic minimum verification set would be:
  - All 21 Category C items (Stage Completeness -- do the files exist with correct content?)
  - All 10 Category D items (Forward Traversability -- can findings be traced?)
  - All 7 Category G items (Accumulation Integrity -- does constraint count grow?)
  - Key items from Categories B, H, J (finding collisions, infrastructure staleness, reproducibility)
  That is ~50 items, achievable in 60-90 minutes with 2-3 agents. The full 104-item framework can be a follow-up pass.

**REVISION 30 -- CRITICAL**
- **Plan Section Affected:** Verification Protocol, Post-Commit Traversal Test (lines 207-211)
- **What's Missing/Wrong:** The plan's 3 traversal tests are a tiny subset of Report 17's Category D (10 items) + Category E (10 items) + Category F (6 items) = 26 traversal tests. More critically, the plan's traversals are performed by the LEAD, not a fresh-eyes agent. Report 17 Category J item J-03 (line 495) is the MOST IMPORTANT single test: "Stage 3 provenance alone tells the complete story -- Read only provenance/stage-3-organization-od/ -- can you answer: how many explorations? what scores? what findings? what was audited? what does AD need? All 5 questions answerable." This test MUST be performed by an agent that has NOT read any source material, checkpoints, or scratchpad files. The plan has no such test.
- **Evidence from Report:** Category J, item J-03 (line 495): 5 questions that must be answerable from Stage 3 provenance alone
- **Proposed Fix:** Add J-03 as a MANDATORY verification test. Deploy a fresh-context agent (no prior reads of checkpoint or scratchpad files) that reads ONLY the Stage 3 provenance directory and must answer 5 questions. If it cannot answer all 5, the chain is incomplete.

**REVISION 31 -- HIGH**
- **Plan Section Affected:** Verification Protocol, Per-Wave Checks (lines 201-206)
- **What's Missing/Wrong:** The plan's per-wave checks are "File existence + grep counts." Report 17 Category H (Infrastructure Consistency) specifies 16 items (lines 449-471), each testing a SPECIFIC claim in a SPECIFIC section of a SPECIFIC file. Examples: H-01 "PIPELINE-MANIFEST Section B -- all completed stage findings present, no TBD", H-06 "BACKBONE Section 4 -- past tense, consumed/produced filled, key decisions, COMPLETE status", H-15 "OD STAGE-HEADER inline threading header does NOT say 'OD work has not begun'". Grep counts do not catch these semantic checks -- you need to actually READ the content and verify the claims are correct.
- **Evidence from Report:** Category H, lines 449-471: 16 specific infrastructure checks
- **Proposed Fix:** Replace "grep counts" with explicit binary checks per file. The infra agent (or updater agents) should have a completion checklist with specific strings to verify: "PIPELINE-MANIFEST Section B contains 'OD-F-001'", "BACKBONE Section 4 contains 'COMPLETE'", "STAGE-HEADER does NOT contain 'IN PROGRESS'", etc.

**REVISION 32 -- HIGH**
- **Plan Section Affected:** Missing: Finding ID collision resolution
- **What's Missing/Wrong:** Report 17 Category B items B-03 through B-05 (lines 327-329) specify that two known finding ID collisions MUST be resolved: (1) R3-023 vs R3-036 fractal split (OD-005 inline header references incorrect R3 IDs), and (2) OD-F-005 collision in builder-log.md line 144 where it incorrectly says "OD-F-005: Narrative arc NATURALLY creates CRESCENDO" (OD-F-005 is actually "Organization IS Density"). The plan mentions neither collision.
- **Evidence from Report:** Category B, items B-03/B-04/B-05 (lines 327-329); also Report 13 Section 5.2 (finding ID collisions)
- **Proposed Fix:** Add collision resolution as an explicit task for the chain builder or updater agents. B-05 requires that builder-log.md line 144 be corrected or annotated. B-03/B-04 require R3-023/R3-036 disambiguation to be documented.

**REVISION 33 -- HIGH**
- **Plan Section Affected:** Missing: 100% pass requirement
- **What's Missing/Wrong:** Report 17 Section 3.4 (lines 612-618) states explicitly: "ALL items must pass. There is no minimum pass rate. The chain is either structurally sound or it is not." The plan has no equivalent quality gate. It does not define what "done" means in terms of verification pass rate. Without a clear definition, the remediation could be declared "complete" with CRITICAL gaps still open.
- **Evidence from Report:** Section 3.4, lines 612-618: "95% pass means there are structural gaps"
- **Proposed Fix:** Add a binary definition of completion: "All CRITICAL gaps CLOSED. All traversal tests PASS. Stage 3 reproducibility test (J-03) PASS." This is a more achievable subset than 100% of 104 items, but it establishes a clear minimum bar.

**REVISION 34 -- HIGH**
- **Plan Section Affected:** Missing: Failure Protocol
- **What's Missing/Wrong:** Report 17 Section 3.3 (lines 587-609) defines a complete failure protocol: individual item failures are fixed and re-tested, 3-5 failures in a category indicate systemic gaps requiring root cause analysis, 6+ failures mean the rebuild for that area is incomplete. It also defines a priority ordering for fix sequencing (Category C first, then B, then H, then D, then A, then remaining). The plan has no failure protocol.
- **Evidence from Report:** Section 3.3, lines 587-609: failure classification + priority ordering
- **Proposed Fix:** Add at minimum the priority ordering: if verification reveals failures, fix in order: (1) missing files, (2) finding ID collisions, (3) stale registries, (4) broken forward chains, (5) unassessed dark matter, (6) remaining.

**REVISION 35 -- MEDIUM**
- **Plan Section Affected:** Missing: Verification execution timing
- **What's Missing/Wrong:** Report 17 Section 3.2 (lines 543-581) specifies that the full 104-item verification takes 3.5-4.5 hours across 5 phases with 9 agents. Even a reduced verification (50 items) would take ~90 minutes. The plan's verification is "Post-Commit Traversal Test" -- implying verification happens AFTER commit, not before. Report 17's Phase 5 and Report 15's Phase 5 both specify verification BEFORE commit.
- **Evidence from Report:** Section 3.2, lines 543-581: 5-phase verification schedule; Report 15, Phase 5, line 952: "Phase 5 -> Phase 6 (cannot commit unverified state)"
- **Proposed Fix:** Move verification to BEFORE commit. Add a "Verification Gate" between the plan's final wave and the commit step. The commit should only proceed after at minimum the CRITICAL verification items pass.

---

## CROSS-FILE REVISIONS (Spanning Multiple Reports)

**REVISION 36 -- CRITICAL: EXT-RESEARCH-REGISTRY vs OD-outbound-findings EXT section**
- **Plan Section Affected:** New Files table, census-b, chain-a specifications
- **What's Missing/Wrong:** Report 13 lists EXT-RESEARCH-REGISTRY.md as a standalone file at `provenance/EXT-RESEARCH-REGISTRY.md`. Report 14 Appendix A.4 (lines 738-741) specifies a different file: `OD-external-research-synthesis.md` inside stage-3. Report 16's chain-a specification (lines 398-435) includes EXT-* findings within OD-outbound-findings.md's Section 9. Three different reports, three different locations for the same data. The plan follows Report 13 (standalone EXT-RESEARCH-REGISTRY) but the chain builders may produce overlapping content.
- **Evidence from Reports:** Report 13 line 60, Report 14 line 738, Report 16 lines 405-408
- **Proposed Fix:** Make a clear decision: ONE canonical location for EXT-* finding registrations. Report 13's standalone `provenance/EXT-RESEARCH-REGISTRY.md` is the cleanest option because it is cross-stage (future stages may add their own EXT findings). OD-outbound-findings should REFERENCE the registry, not duplicate it.

**REVISION 37 -- HIGH: Archiving inconsistency between Report 13 and Report 14**
- **Plan Section Affected:** Resolved Decisions row 5 (line 25-26)
- **What's Missing/Wrong:** Report 13 Section 4.10 shows 0 ARCHIVE files and 35 KEEP-IN-PLACE. Report 14 Section 2 (triage summary, lines 384-395) shows 28 ARCHIVE files and 22 KEEP-IN-PLACE. This is a DIRECT CONTRADICTION. The plan sides with Report 13 ("No archiving needed") without acknowledging the conflict.
- **Evidence:** Report 13, Section 4.10 line 788: "ARCHIVE: 0". Report 14, Triage Summary line 390: "ARCHIVE: 28 files, ~8,800 lines"
- **Proposed Fix:** Acknowledge the conflict. The resolution is likely that Report 13 was written AFTER Report 14 and made a deliberate decision to reclassify ARCHIVE files as KEEP-IN-PLACE (since they serve ongoing reference purposes). The plan should state this explicitly: "Report 13 supersedes Report 14's ARCHIVE recommendations -- operational files remain in place."

**REVISION 38 -- HIGH: OD-AUDIT-SYNTHESIS ownership ambiguity**
- **Plan Section Affected:** Wave 2 Chain Builders (lines 119-141)
- **What's Missing/Wrong:** The plan assigns OD-SYNTHESIS and OD-AUDIT-SYNTHESIS to chain-a (line 39). Report 15 does not explicitly create OD-AUDIT-SYNTHESIS as a Phase 3 output (it creates OD-outbound-findings, HANDOFF, OD-SYNTHESIS, organizational-patterns). Report 16 explicitly creates OD-AUDIT-SYNTHESIS as chain-c's output (Section 1.11, lines 477-505). The plan merges chain-a and chain-c into one overloaded agent.
- **Evidence:** Report 16, Section 1.11, lines 477-505: chain-c dedicated to OD-AUDIT-SYNTHESIS only
- **Proposed Fix:** Create a dedicated agent for OD-AUDIT-SYNTHESIS (matching Report 16's chain-c). This agent reads: extract-audit-scratchpad.md (census output), OD-GRANULAR-AUDIT-RESULTS.md, DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md (template). It creates one file. Clean scope, within the 5-10 file sweet spot.

---

## REVISION SUMMARY

| # | Severity | Summary | Plan Section |
|---|----------|---------|--------------|
| 1 | CRITICAL | census-b missing 2 source files for EXT-REGISTRY | census-b read list |
| 2 | CRITICAL | OD-outbound-findings missing 3 of 6 required sections | chain-a output spec |
| 3 | HIGH | PIPELINE-MANIFEST update missing section-level specificity | infra agent spec |
| 4 | HIGH | BACKBONE update missing 3 of 4 section updates | infra agent spec |
| 5 | HIGH | OD-SYNTHESIS missing 5 of 11 required sections | chain-a output spec |
| 6 | HIGH | PATTERN-INDEX update underspecified | infra agent spec |
| 7 | MEDIUM | 13 ABSORB files not tracked in plan | dark matter handling |
| 8 | MEDIUM | Finding registry missing F-E, CA, DEC families | finding registry |
| 9 | MEDIUM | No source-to-target mapping table | plan structure |
| 10 | CRITICAL | 22 ABSORB files completely ignored by plan | dark matter scope |
| 11 | CRITICAL | No triage phase in plan (Report 14 Section 5 verification missing) | plan structure |
| 12 | HIGH | census-b missing research-refinement.md for soul test data | census-b read list |
| 13 | HIGH | Archiving conflict between Report 13 and Report 14 unresolved | resolved decisions |
| 14 | MEDIUM | No source priority / conflict resolution protocol | plan structure |
| 15 | CRITICAL | Plan skips Phase 1 (Diagnostic) and Phase 2 (Triage) entirely | plan structure |
| 16 | CRITICAL | chain-a overloaded (3 output files, 10+ input files) | agent assignments |
| 17 | HIGH | Time estimate unrealistic (35-45 min vs 90-120 min) | wall time |
| 18 | HIGH | Waves 3-4 unnecessarily sequential (should be parallel) | wave execution |
| 19 | HIGH | Prior-stage fixes (Stage 1, Stage 2) completely missing | plan scope |
| 20 | MEDIUM | No intermediate output directory for diagnostic files | setup phase |
| 21 | CRITICAL | 7 agents vs 17 agents -- losing census granularity, graph builder, tester, weaver | team architecture |
| 22 | CRITICAL | census-b is mislabeled -- it's a document creator, not a census agent | agent design |
| 23 | HIGH | Graph Builder role missing -- no adjacency matrix for chain builders | missing agent |
| 24 | HIGH | Single infra agent updating 10 files (double the sweet spot) | agent assignments |
| 25 | HIGH | Traversal Tester with fresh-eyes constraint missing | missing agent |
| 26 | HIGH | Weaver role missing (proven essential in 3 prior teams) | missing agent |
| 27 | MEDIUM | No communication protocol | missing section |
| 28 | MEDIUM | No crash recovery protocol | missing section |
| 29 | CRITICAL | Verification is 5% coverage (5 of 104 items) | verification protocol |
| 30 | CRITICAL | No fresh-eyes reproducibility test (J-03) | verification protocol |
| 31 | HIGH | Per-wave checks are grep counts, not semantic verification | verification protocol |
| 32 | HIGH | Two known finding ID collisions not addressed | missing items |
| 33 | HIGH | No definition of "done" (pass rate requirement) | missing section |
| 34 | HIGH | No failure protocol or priority ordering | missing section |
| 35 | MEDIUM | Verification after commit instead of before | verification timing |
| 36 | CRITICAL | EXT-* findings have 3 conflicting target locations | cross-file conflict |
| 37 | HIGH | Report 13 vs Report 14 archiving contradiction unresolved | cross-file conflict |
| 38 | HIGH | OD-AUDIT-SYNTHESIS ownership ambiguous, agent overloaded | agent assignments |

**CRITICAL revisions:** 10 (Revisions 1, 2, 10, 11, 15, 16, 21, 22, 29, 30, 36)
**HIGH revisions:** 19 (Revisions 3, 4, 5, 6, 12, 13, 17, 18, 19, 23, 24, 25, 26, 31, 32, 33, 34, 37, 38)
**MEDIUM revisions:** 9 (Revisions 7, 8, 9, 14, 20, 27, 28, 35)

---

## TOP 5 HIGHEST-LEVERAGE CHANGES

1. **Add Diagnostic + Triage phases** (Revisions 10, 11, 15): The plan jumps from setup to chain building without building the complete finding registry, reference graph, or extraction manifest. This means chain builders work from raw source files with no de-conflicted, structured input. Adding these phases increases wall time by ~35 minutes but dramatically reduces chain builder errors.

2. **Split overloaded agents** (Revisions 16, 21, 22, 24, 38): chain-a has 3 output files and 10+ input files; infra has 10 update files. Split into: 3 chain builders + 3-4 updaters. This matches the proven 5-10 file sweet spot.

3. **Add verification framework** (Revisions 29, 30, 33): The plan's verification is 5% of what Report 17 specifies. At minimum add: J-03 (fresh-eyes reproducibility), all Category C (stage completeness), Category G (accumulation), and key Category H items (infrastructure staleness). Deploy a fresh-eyes agent.

4. **Add Weaver + Traversal Tester** (Revisions 25, 26): Both proven essential in all prior teams. Weaver prevents lead from violating THIN rule. Traversal Tester provides the definitive quality gate.

5. **Resolve EXT-* target location** (Revision 36): Three reports specify three different locations. Make ONE decision and document it.
