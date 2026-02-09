<!--
BUILT ON: knowledge-architecture/ top-level .md files (26 files)
CONSUMED BY: Wave 4 synthesizer, Wave 6 verifiers
-->

# Dark Matter Index D: Top-Level knowledge-architecture/ Files

**Agent:** dm-d
**Date:** 2026-02-08
**Scope:** All top-level .md files in `knowledge-architecture/` (NOT in `_` prefixed subdirectories)
**Method:** Glob for `knowledge-architecture/*.md`, read first 80 lines of each, wc -l for line counts, grep for INLINE THREADING HEADER / LIGHT SECTION

---

## Summary

| Metric | Count |
|--------|-------|
| Total top-level .md files | 26 |
| Files WITH inline threading header | 10 |
| Files WITHOUT any header (FLAGGED) | 16 |
| Total lines across all files | 30,270 |
| Files with formal-chain-relevant content not yet referenced | 8 (flagged below) |

---

## Complete File Catalog

### Files WITH Inline Threading Header (10)

| # | Filename | Lines | Tier | Header Type | Summary |
|---|----------|-------|------|-------------|---------|
| 1 | PIPELINE-BACKBONE.md | 287 | A | INLINE THREADING (Phase 2B) | Master narrative defining the 12-file minimal reading set and 5-phase reading order (SOUL->TOKENS->COMPONENTS->PATTERNS->VALIDATION). Canonical dependency diagram for upstream cascade. |
| 2 | SOURCE-OF-TRUTH-REGISTRY.md | 258 | A | INLINE THREADING (Phase 2B) | Authority declaration document establishing 4-tier hierarchy (T1-T4) for conflict resolution. Maintains the canonical SUPERSEDED list. |
| 3 | KA-DECISIONS.md | 382 | B | INLINE THREADING (Phase 2B) | Classification framework defining tier assignments, confidence levels (0-4), SUPERSEDED status definitions, and structural decisions with rationale. |
| 4 | KA-POSITION.md | 166 | B | INLINE THREADING (Phase 2B) | Position paper and progress tracker. Records current phase (6 PACKAGE), step completion status, metrics, and critical context for session persistence. |
| 5 | KA-VERIFICATION.md | 309 | B | INLINE THREADING (Phase 2B) | Verification framework with checklists for every KA phase. Contains spot-check methodology for token values, patterns, and supersession tracking. |
| 6 | PHASE-1B-MEGA-DEBRIEF.md | 2,632 | A | INLINE THREADING (Phase 2B) | Historical record of the Phase 1B recursive dependency trace. Documents 463 file connections, 76% T1 reachability, zero broken references, zero circular dependencies. LOCKED -- do not modify. |
| 7 | PHASE-2B-BATCH-MANIFEST.md | 592 | -- | LIGHT SECTION (Phase 2D) | Complete 253-file manifest for Phase 2B threading execution. Contains tier assignments (27A/117B/109C), 13-batch distribution, and per-file tracking. |
| 8 | PHASE-2B-MASTER-EXECUTION.md | 337 | -- | LIGHT SECTION (Phase 2D) | Single procedural reference for Phase 2B inline threading header insertion. Documents tiered templates, file strategy, and quality gates. |
| 9 | CLAUDE.md | 142 | C | INLINE THREADING (Phase 2B) | Navigation file for knowledge-architecture/ directory. Auto-read by Claude Code on directory entry. Lists key files, constraints, subdirectories, and pipeline position. |
| 10 | OD-REENRICHMENT-SPECIFICATION.md | 1,684 | A | INLINE THREADING (Phase 2B, extended) | Comprehensive specification for re-enriching all 6 OD explorations using gate-based team topology. 205-item success criteria checklist. NOT YET EXECUTED. |

### Files WITHOUT Any Header (16) -- FLAGGED

| # | Filename | Lines | Summary | Chain-Relevant? |
|---|----------|-------|---------|-----------------|
| 1 | OD-EXECUTION-PROTOCOL.md | 6,022 | **LARGEST FILE.** Comprehensive OD Execution Protocol v2.0. Defines post-compaction recovery, modification guard paradigm, threading web growth, exploration specifications for OD-001 through OD-006, builder/weaver/auditor protocols, and research integration. NOTE: Starts with visible artifact text ("Updated OD Execution Protocol... I'll create the fully audited...") -- copy-paste artifact from creation. | YES -- contains per-OD exploration specs, research gate details, and builder constraints that feed provenance understanding. |
| 2 | OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md | 4,411 | Agent team architecture v4.0. Defines the 3-teammate + 3-subagent + 3-embedded-function model (Lead/Builder/Weaver + Traverser/Research/Auditor + Guardian/Checkpoint/Journal). Core paradigm: bidirectional threading, compounding pipeline, absorption protocol. | YES -- team architecture is the operational backbone; contains Traverser absorption protocol (6 steps) and Guardian validation checks referenced by multiple downstream docs. |
| 3 | PLAN-REVISION-TRACKER.md | 2,289 | Line-by-line cross-reference of the Claude-generated execution plan against ARCH and PROTO source files. 56 revisions total across 5 batches (100% coverage). Catches wrong agent count (5 vs 3), missing Weaver, wrong Traverser lifecycle, and many other mismatches. | PARTIAL -- primarily process artifact. Contains detailed revision logic but is consumed by protocol docs, not formal chain. |
| 4 | OD-GRANULAR-AUDIT-PROMPT.md | 2,153 | 2,000+ line prompt for the 17-agent adversarial audit. 5 parts: Mindset & Foundation, The Audit (17 sub-checks 4A-4Q), Verification & Principles, Bias-Defeating Protocols, Orchestration & Meta. Defines adversarial review paradigm, identity traversal protocol, research refinement gate, fresh-eyes protocol, and unknown-unknowns discovery. | YES -- defines the audit methodology that produced the 89 findings. The soul squint test, fresh-eyes protocol, and red-line matrix are audit innovations referenced by the provenance chain. |
| 5 | OD-005-EXTERNAL-RESEARCH.md | 1,725 | External research report for spatial/map-based documentation organization. 12 resources surveyed (Kevin Lynch wayfinding, CSS Grid named areas, ARIA landmarks, hub-spoke navigation). Maps to WAVE + ISLANDS density patterns. | YES -- contains EXT-* findings (external research) that feed OD-005 build. These findings are tracked in EXT-RESEARCH-REGISTRY.md in the formal chain. |
| 6 | PHASE-2B-HANDOFF.md | 1,114 | Handoff document for resuming Phase 2B threading from Batch 7. Contains quick-start protocol, current state (89/253 done), essential file references, tier templates, per-batch instructions, consistency rules. Written 2026-02-06. | NO -- process artifact for Phase 2B continuation. Phase 2B is COMPLETE; this file is historical. |
| 7 | OD-FIX-EXECUTION-PROMPT.md | 1,000 | Agent team fix plan for 89 audit findings across 6 OD explorations. Defines team architecture (lead + 4 fixers + 2 verifiers + weaver), 17 fix items with complete specs, 6-phase execution sequence, per-agent prompt templates, adversarial verification protocol. | YES -- contains the fix specifications that were executed (16/16 applied). Fix results feed back into understanding of what changed in the OD explorations. |
| 8 | WORKFLOW-METACOGNITION-ANALYSIS.md | 878 | Deep workflow analysis from 9-agent team (4,200+ lines of research, 3 rounds of synthesis). Covers: Create-Revise-Execute loop, 5-layer memory hierarchy, 7 paradoxes, 5 entropy sources, 7 design alternatives. Key finding: binary rules achieve 100% compliance; judgment rules achieve ~0%. | PARTIAL -- strategic insight document. The binary rule principle is referenced by OD-REENRICHMENT-SPECIFICATION.md and informs all future phase design, but is not itself part of the provenance chain for explorations. |
| 9 | OD-004-EXTERNAL-RESEARCH.md | 680 | External research for confidence-based/progressive disclosure documentation. 12 resources surveyed (NN/G progressive disclosure, AI confidence visualization, epistemic status markers). Maps to GEOLOGICAL + CRESCENDO density patterns. | YES -- contains EXT-* findings feeding OD-004 build. Tracked in EXT-RESEARCH-REGISTRY.md. |
| 10 | OD-GRANULAR-AUDIT-RESULTS.md | 620 | Final results from 17-agent adversarial audit. Per-OD audit results for OD-001 through OD-006. 89 findings (8 Critical, 6 High, 16 Medium, 8 Low, ~51 Notes). Zero soul violations. 3-dialect quality gap identified (Polished/Functional/Editorial). 17 recommended fixes across 4 priority tiers. | YES -- primary audit output. Referenced by OD-AUDIT-SYNTHESIS.md in formal chain. Contains the per-OD finding details that informed fix execution and quality assessment. |
| 11 | OD-RETROSPECTIVE-AND-PROTOCOL-v2.md | 589 | Retrospective from first agent team (OD builders). Documents what worked (parallel builders, Weaver role, soul compliance, accumulated identity, bidirectional threading) and what failed (fat lead, dropped refinement loop, research lost to context, one-shot builders). Contains Protocol v2 team design for next phase. | YES -- team lessons are referenced by v3 retrospective and OD-REENRICHMENT-SPECIFICATION.md. Contains the "lead THIN rule" that became a hard constraint for all subsequent teams. |
| 12 | ACCUMULATED-IDENTITY-v1.md | 539 | The complete inherited mind of the KortAI design system. Generated from traversal of 13 source files. Contains: master soul statement, 5 soul pieces with CSS locks, 6 universal rules, 6 density dimension framework, pattern glossary (10 named patterns), all DD findings (DD-F-001 through DD-F-010). Any agent reading ONLY this file can make soul-consistent decisions. | YES -- this IS the accumulated identity. Referenced by OD-REENRICHMENT-SPECIFICATION.md as "539-line identity used as research driver." Contains the complete density framework and soul definition consumed by all OD builders. |
| 13 | OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md | 536 | Retrospective from second agent team (17-agent audit). Documents wave model success, fresh-eyes as highest-value agent, Weaver proven across 2 teams, soul extraction strategy (10-line block embedded in every prompt achieves 100% compliance). Contains Protocol v3: refined team structure, timing, and task granularity for next phase. | YES -- protocol evolution document. Each retrospective feeds the next team's design. Referenced by OD-REENRICHMENT-SPECIFICATION.md for team topology lessons. |
| 14 | PROVENANCE-REMEDIATION-PLAN-PROMPT.md | 392 | Prompt for creating the provenance chain remediation execution plan. Defines 4-stage approach (ground truth research with sub-agents, architecture design, execution planning, verification design). Contains 4 sub-agent specs (Finding Registry Builder, Reference Graph Builder, Dark Matter Processor, Directory Structure Auditor). | NO -- process artifact. The remediation it designed has been EXECUTED (commit b0e5185). This prompt's output was consumed; it is now historical. |
| 15 | PROVENANCE-CHAIN-REMEDIATION-HANDOFF.md | 298 | Handoff document summarizing multi-session investigation. Defines the OD provenance gap problem (5% formalization vs 32,800 lines scattered), 5 structural root causes, 4-layer remediation architecture (gap analysis, deep dive, execution plan, execution). | NO -- process artifact. Remediation is COMPLETE. Historical reference only. |
| 16 | PROVENANCE-COMPREHENSION-PROMPT.md | 235 | Comprehension prompt for absorbing the provenance chain problem in 5 layers (deep-dive analysis, handoff, raw reports, chain files, demonstration). Designed to bring a fresh instance to full understanding before plan creation. | NO -- process artifact. Remediation is COMPLETE. Historical reference only. |

---

## Flagged Items: Files with Formal-Chain-Relevant Content Not Yet Referenced

These 8 files contain research, findings, or architectural content that is relevant to the formal provenance chain but may not be fully referenced:

| # | File | Why Flagged | Specific Content |
|---|------|-------------|-----------------|
| 1 | OD-EXECUTION-PROTOCOL.md | Contains per-OD exploration specifications (what each OD is FOR, which DD patterns it pairs, which research findings apply) that are the operational complement to provenance chain entries | Per-OD specs for OD-001 through OD-006 with DD pairings and research gates |
| 2 | OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md | Defines the Traverser absorption protocol and Guardian validation checks -- operational architecture consumed by all team executions | 6-step absorption protocol, 4-check Guardian, 3-tier agent model |
| 3 | OD-GRANULAR-AUDIT-PROMPT.md | Defines audit methodology innovations (fresh-eyes protocol, adversarial review paradigm, soul squint test) that produced the 89 findings referenced by the chain | Audit methodology is the instrument behind the evidence |
| 4 | OD-005-EXTERNAL-RESEARCH.md | Contains EXT-* external research findings for OD-005 (spatial/map documentation) that should be tracked in EXT-RESEARCH-REGISTRY.md | 12 surveyed resources, Kevin Lynch wayfinding model, CSS Grid named areas |
| 5 | OD-004-EXTERNAL-RESEARCH.md | Contains EXT-* external research findings for OD-004 (confidence/progressive disclosure) that should be tracked in EXT-RESEARCH-REGISTRY.md | 12 surveyed resources, NN/G progressive disclosure, AI confidence visualization |
| 6 | OD-GRANULAR-AUDIT-RESULTS.md | Primary audit output with per-OD finding details. Referenced by OD-AUDIT-SYNTHESIS.md but the raw details here are more granular | Full per-OD breakdowns, 89 findings with evidence |
| 7 | ACCUMULATED-IDENTITY-v1.md | The complete soul + density framework used as input by all OD builders. Referenced by REENRICHMENT-SPECIFICATION but not by the formal provenance chain proper | 5 soul pieces, 6 universal rules, 10 density patterns, DD-F-001 through DD-F-010 |
| 8 | OD-RETROSPECTIVE-AND-PROTOCOL-v2.md | Contains the "lead THIN rule" and team execution lessons that became hard constraints for all subsequent teams | Parallel builders, Weaver role, fat lead failure, dropped refinement loop |

---

## Header Coverage Analysis

| Category | Count | Percentage |
|----------|-------|------------|
| Has INLINE THREADING HEADER (Phase 2B) | 8 | 31% |
| Has LIGHT SECTION (Phase 2D) | 2 | 8% |
| Has extended INLINE THREADING HEADER | 1 | 4% |
| NO HEADER | 15 | 58% |
| **Total** | **26** | **100%** |

The 15 unheadered files are all post-Phase-2B creations (OD execution, audit, retrospective, metacognition, provenance remediation documents created 2026-02-07 and 2026-02-08). They were not part of the original 253-file Phase 2B threading scope.

Note: OD-EXECUTION-PROTOCOL.md begins with visible artifact text ("Updated OD Execution Protocol... I'll create the fully audited, comprehensive OD Execution Protocol v2.0 with all gap analyses resolved...") -- a copy-paste artifact from its creation process that was never cleaned up. This is lines 1-4 before the actual content begins.

---

## File Categorization by Function

### Infrastructure / Pipeline Documents (6 files, 4,200 lines)
- PIPELINE-BACKBONE.md (287)
- SOURCE-OF-TRUTH-REGISTRY.md (258)
- KA-DECISIONS.md (382)
- KA-POSITION.md (166)
- KA-VERIFICATION.md (309)
- PHASE-1B-MEGA-DEBRIEF.md (2,632)
- CLAUDE.md (142)

### OD Execution Architecture (4 files, 14,722 lines)
- OD-EXECUTION-PROTOCOL.md (6,022)
- OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md (4,411)
- PLAN-REVISION-TRACKER.md (2,289)
- OD-FIX-EXECUTION-PROMPT.md (1,000)

### OD Audit Architecture (3 files, 3,309 lines)
- OD-GRANULAR-AUDIT-PROMPT.md (2,153)
- OD-GRANULAR-AUDIT-RESULTS.md (620)
- OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md (536)

### Retrospective / Metacognition (3 files, 2,006 lines)
- OD-RETROSPECTIVE-AND-PROTOCOL-v2.md (589)
- WORKFLOW-METACOGNITION-ANALYSIS.md (878)
- ACCUMULATED-IDENTITY-v1.md (539)

### External Research (2 files, 2,405 lines)
- OD-004-EXTERNAL-RESEARCH.md (680)
- OD-005-EXTERNAL-RESEARCH.md (1,725)

### Phase 2B Process Documents (3 files, 2,043 lines)
- PHASE-2B-HANDOFF.md (1,114)
- PHASE-2B-BATCH-MANIFEST.md (592)
- PHASE-2B-MASTER-EXECUTION.md (337)

### Provenance Remediation (3 files, 925 lines)
- PROVENANCE-CHAIN-REMEDIATION-HANDOFF.md (298)
- PROVENANCE-REMEDIATION-PLAN-PROMPT.md (392)
- PROVENANCE-COMPREHENSION-PROMPT.md (235)

### Re-Enrichment Specification (1 file, 1,684 lines)
- OD-REENRICHMENT-SPECIFICATION.md (1,684)

---

## Cross-Reference: Files Referenced by Formal Chain

The following top-level KA files are explicitly referenced by formal provenance chain documents (in DESIGN-SYSTEM/provenance/):

| KA File | Referenced By | Reference Type |
|---------|--------------|----------------|
| OD-GRANULAR-AUDIT-RESULTS.md | OD-AUDIT-SYNTHESIS.md | Source data for synthesis |
| OD-004-EXTERNAL-RESEARCH.md | EXT-RESEARCH-REGISTRY.md | External research source |
| OD-005-EXTERNAL-RESEARCH.md | EXT-RESEARCH-REGISTRY.md | External research source |
| ACCUMULATED-IDENTITY-v1.md | OD-REENRICHMENT-SPECIFICATION.md | Identity driver reference |
| OD-RETROSPECTIVE-AND-PROTOCOL-v2.md | OD-REENRICHMENT-SPECIFICATION.md | Team lessons source |
| OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md | OD-REENRICHMENT-SPECIFICATION.md | Protocol evolution source |
| WORKFLOW-METACOGNITION-ANALYSIS.md | OD-REENRICHMENT-SPECIFICATION.md | Binary rule principle source |

Files NOT referenced by any formal chain document:
- OD-EXECUTION-PROTOCOL.md (6,022 lines -- largest file, zero formal chain references)
- OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md (4,411 lines -- second largest, zero formal chain references)
- PLAN-REVISION-TRACKER.md (2,289 lines)
- OD-GRANULAR-AUDIT-PROMPT.md (2,153 lines)
- OD-FIX-EXECUTION-PROMPT.md (1,000 lines)
- PHASE-2B-HANDOFF.md (1,114 lines)

Total unreferenced content: 17,989 lines (59% of all KA top-level content).
