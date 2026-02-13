# 14 -- Dark Matter Triage Protocol
## Systematic Processing of 51 Research-Bearing Files (~32,800 Lines)

**Date:** 2026-02-08
**Author:** Research and Design Agent (Claude Opus 4.6)
**Input:** Dark Matter Census (doc 10), DD vs OD Comparison (doc 01), Root Cause Analysis (doc 06)
**Scope:** Every Category B file identified in the census, plus select Category C files with partial research content

---

## HOW TO USE THIS DOCUMENT

This protocol is designed for execution by an agent team. Each section is self-contained:

- **Section 1** defines the 5 triage categories. Read this first. Memorize the decision tree.
- **Section 2** provides per-file triage decisions. This is the execution manifest -- agents should be assigned file ranges.
- **Section 3** defines the ABSORB extraction protocol. Used by agents processing ABSORB files.
- **Section 4** defines the ARCHIVE protocol. Used by agents processing ARCHIVE files.
- **Section 5** defines the post-triage verification protocol. Used by the lead or a dedicated verifier.

**Estimated execution time:** 3-4 agent-hours across 5-7 parallel agents.
**Estimated output:** 5-8 new formal chain documents, 1 archive directory with index, ~25 files moved or annotated.

---

## TABLE OF CONTENTS

1. [Triage Categories](#section-1-triage-categories)
2. [Per-File Triage Decisions](#section-2-per-file-triage-decisions)
3. [The Extraction Protocol (ABSORB)](#section-3-the-extraction-protocol)
4. [The Archive Protocol (ARCHIVE)](#section-4-the-archive-protocol)
5. [Post-Triage Verification](#section-5-post-triage-verification)

---

## SECTION 1: TRIAGE CATEGORIES

### Decision Tree (Apply in Order)

```
For each dark matter file, ask these questions in sequence:

Q1: Does this file contain FINDING DEFINITIONS (new finding IDs like OD-F-*,
    EXT-*, F-E-*, CA-*) that do NOT exist in the formal provenance chain?
    YES → ABSORB (extract finding definitions into formal chain)

Q2: Does this file contain UNIQUE RESEARCH DATA (scores, measurements,
    external citations, computed values) that would be lost if this file
    were deleted?
    YES, and it maps 1:1 to a formal chain document → CONSOLIDATE
    YES, and it has no formal chain counterpart → ABSORB

Q3: Is this file an OPERATIONAL ARTIFACT (execution log, state tracker,
    fix report, batch manifest) from a completed phase?
    YES → ARCHIVE

Q4: Is this file an EXECUTION PROTOCOL, AUDIT PROMPT, or METHODOLOGY
    DOCUMENT that may be reused in future phases?
    YES → KEEP-IN-PLACE (add provenance link)

Q5: Does this file contain content that exists in IDENTICAL or BETTER
    form elsewhere in the system?
    YES, and the better version is in the formal chain → DELETE
    YES, but only partially → CONSOLIDATE the unique parts, then DELETE
```

---

### Category 1: ABSORB

**Definition:** Content that contains finding definitions, research citations, identity data, or unique analytical results that MUST exist in the formal provenance chain for the system to be complete. The agent extracts specific data and writes it into formal chain documents.

**What qualifies:**
- Files containing finding ID definitions (e.g., OD-F-001 through OD-F-011, EXT-CONV-*, EXT-SPAT-*, CA-*) that do not appear in any `DESIGN-SYSTEM/provenance/` document
- Files containing external research citations (URLs, author names, publication dates, key insights) consumed during exploration builds
- Files containing computed audit data (contrast ratios, DOM measurements, token verification results) that constitute the evidentiary basis for pass/fail decisions
- Files containing identity-level declarations (soul pieces, universal rules, accumulated identity versions) that represent the system's self-knowledge
- Files containing cross-referencing analyses (finding-to-exploration matrices, consumption verification tables) that document which research was actually applied where

**What the extraction looks like:**
- The agent reads the source file in full
- The agent identifies every discrete data unit: finding definitions, scores, citations, measurements, matrices
- The agent writes each data unit into the appropriate formal chain document, using the format established by that document (e.g., DD-outbound-findings.md format for OD-outbound-findings.md)
- The agent preserves the source attribution: `[Extracted from {filename}, Section {X}]`
- The agent does NOT paraphrase. Finding definitions, scores, and measurements are copied verbatim. Only surrounding prose may be condensed.

**How to avoid losing context during extraction:**
- Before extracting, the agent writes a brief EXTRACTION MANIFEST at the top of the source file listing every data unit being extracted and its destination
- If a data unit's meaning depends on surrounding context (e.g., a finding whose severity depends on the methodology description), the agent extracts both the data unit AND a condensed version of the context
- If a data unit appears in multiple dark matter files with slight variations, the agent compares all versions and extracts the most complete one, noting discrepancies
- After extraction, the source file is NOT deleted. It receives an `EXTRACTED` annotation (see Section 3) and is then eligible for ARCHIVE or DELETE in a second pass

---

### Category 2: CONSOLIDATE

**Definition:** Files that overlap substantially with a formal chain document but contain unique additions not present in the formal version. The agent merges the unique parts into the formal doc.

**What qualifies:**
- Files that are known "synced duplicates" of provenance files (e.g., `checkpoints/RESEARCH-ACTIVE.md` vs `provenance/RESEARCH-ACTIVE.md`) where the checkpoint version has been updated more recently
- Files that cover the same topic as a formal chain document but include additional data points (e.g., a checkpoint file with OD scores that the provenance STAGE-HEADER lacks)
- Files that provide a different organizational view of the same data (e.g., findings organized by audit dimension vs. by application status)

**How to identify unique vs. duplicate content:**
- The agent opens BOTH the dark matter file and its formal chain counterpart side by side
- The agent performs a section-by-section comparison, flagging:
  - IDENTICAL sections (mark for skip)
  - UPDATED sections (dark matter has newer data -- mark for merge)
  - UNIQUE sections (exist only in dark matter -- mark for extraction)
  - CONFLICTING sections (different values for the same data point -- mark for resolution)
- For CONFLICTING sections, the resolution rule is: the version with provenance metadata (timestamps, agent names, methodology citations) wins. If neither has provenance, the more recent file wins. If dates are unknown, flag for human review.

**What happens to the original file after consolidation:**
- The unique data is merged into the formal chain document
- The original dark matter file receives a `CONSOLIDATED` header:
  ```
  <!-- TRIAGE: CONSOLIDATED into {formal-chain-file} on {date}
       Unique content merged: {list of sections}
       This file is now REDUNDANT and may be archived or deleted. -->
  ```
- The file is then moved to the archive (see Section 4) or deleted depending on whether it has historical value beyond its data content

---

### Category 3: ARCHIVE

**Definition:** Operational artifacts that have historical value (documenting how work was done, what decisions were made, what agents observed) but do not contain data that belongs in the active provenance chain. These are moved to a dedicated archive directory with a provenance link.

**What qualifies:**
- Execution journals (builder logs, lead logs, weaver logs) from completed phases
- State tracking files (MASTER-STATE.md, CURRENT-STATE.md, FIX-STATE.md, AUDIT-STATE.md) that are frozen snapshots
- Fix execution reports (fixer-a through fixer-d reports) documenting what was changed and why
- Visual and programmatic verification reports documenting pass/fail evidence
- Batch manifests and handoff procedures from completed threading phases
- Agent completion trackers (weaver-tracker.md)
- Plan revision trackers documenting how plans evolved

**What does NOT qualify for archive (common mistakes):**
- Files containing finding definitions (these are ABSORB, not ARCHIVE)
- Files containing external research citations with URLs and key insights (these are ABSORB)
- Files containing computed measurements that are the ONLY source of that data (these are ABSORB)
- Methodology documents that may be reused (these are KEEP-IN-PLACE)

---

### Category 4: KEEP-IN-PLACE

**Definition:** Files that serve an ongoing or future purpose -- execution protocols, audit prompts, methodology documents, navigation files -- and should remain where they are. They need a provenance link added but no content migration.

**What qualifies:**
- Execution protocols (OD-EXECUTION-PROTOCOL.md) that document how to run a build phase and may serve as templates for AD
- Audit prompts (OD-GRANULAR-AUDIT-PROMPT.md) that document audit methodology and may be adapted for AD audits
- Fix execution prompts (OD-FIX-EXECUTION-PROMPT.md) that document fix workflows
- Retrospective documents (protocol v2, v3) that contain process improvements to be applied in future phases
- Agent team architecture documents that define team structures for reuse
- Navigation CLAUDE.md files that are actively read by agents on directory entry
- Workflow metacognition analyses that document process research applicable to future orchestration

**What provenance link format:**
```markdown
<!-- PROVENANCE LINK — Added during Dark Matter Triage ({date})
     Category: KEEP-IN-PLACE
     Purpose: {one-line description of why this file exists}
     Related formal chain: {path to nearest provenance document, or "N/A — process document"}
     Referenced by: {list of files that cite this document}
     Phase: {which phase produced this file}
-->
```

This link is added as a comment block at the top of the file (after any existing inline threading header). It does NOT replace existing headers. It supplements them with a provenance connection.

---

### Category 5: DELETE

**Definition:** Content that exists in identical or better form elsewhere in the system and provides no unique historical, evidential, or reference value.

**What qualifies:**
- Files whose ENTIRE content has been extracted into formal chain documents (post-ABSORB/CONSOLIDATE) AND whose historical process value is nil (e.g., a temporary index that was replaced by a permanent one)
- State tracker files that are pure checkbox lists with no prose or reasoning (e.g., AUDIT-STATE.md at 25 lines)
- Files explicitly marked as "PLACEHOLDER" that were never populated with real content
- Duplicate copies of files that exist identically in two locations where one is clearly authoritative (e.g., `research/R1-*.md` duplicating `provenance/original-research/R1-*.md`)

**How to verify it is truly redundant before deleting:**
1. Search the entire codebase for any reference to the file path (imports, links, citations)
2. Diff the file against its alleged duplicate to confirm they are truly identical (or that the duplicate is strictly better)
3. Check git log for the file to understand its history -- a file that was actively updated may contain intermediate states of value
4. Check if any other dark matter file references this file as a source

**Safety protocol for deletion:**
- The agent does NOT delete files directly
- Instead, the agent creates a `DELETE-MANIFEST.md` in the archive directory listing every file proposed for deletion, the rationale, and the verification evidence
- A second agent (or the lead) reviews the manifest before actual deletion occurs
- Deletion is performed via `git rm` so it remains recoverable from git history
- The DELETE-MANIFEST.md is itself archived (it documents what was deleted and why)

---

## SECTION 2: PER-FILE TRIAGE DECISIONS

### 2A. checkpoints/ Files

| # | File | Lines | Triage | Reasoning |
|---|------|-------|--------|-----------|
| 1 | **OD-CHECKPOINT.md** | 162 | **ABSORB** | Contains OD-F-001 through OD-F-008 finding definitions (lines 140-157), per-OD scores, identity version progression, pattern names, DD source file linkages. These are the raw materials for `OD-outbound-findings.md` which does not exist. Extract finding IDs + scores + per-OD state into the new formal chain document. After extraction, ARCHIVE the remainder (state tracking data). |
| 2 | **RESEARCH-ACTIVE.md** | 737 | **CONSOLIDATE** | Known synced duplicate of `provenance/RESEARCH-ACTIVE.md`. The checkpoint version tracks 337 findings with applied/unapplied status and may be more current. Diff against provenance copy, merge any updates into provenance, then ARCHIVE this copy with a note that provenance is now authoritative. |
| 3 | **DISCOVERIES-LOG.md** | 844 | **ABSORB** | Contains DD-001-006 original scores AND re-audited scores, curation decision framework (INCLUDE/DOCUMENT/DISCARD thresholds), and version control history. The formal chain has DD-REAUDIT-PERCEPTUAL-SYNTHESIS (final scores) but NOT the original scoring history or curation framework. Extract: (a) OD scoring data into OD synthesis docs, (b) curation framework definition into PIPELINE-MANIFEST or a methodology doc. After extraction, ARCHIVE. |
| 4 | **MASTER-STATE.md** | 397 | **ARCHIVE** | Operational state tracker. Contains phase position data and recovery pointers but no research findings. Now stale (says "Phase 2.2 OD-001 next" when OD is COMPLETE). Archive as historical record. |
| 5 | **COMPONENTS-REGISTRY.md** | 629 | **ABSORB** | Contains the ONLY source of 11 component character names ("Precise Transcriptionist" for Code Snippet, etc.), structural profiles (CSS tokens, border configurations), verification checklists, and showcase build status. Component identity data must be absorbed into `DESIGN-SYSTEM/components/OVERVIEW.md` or a new `DESIGN-SYSTEM/provenance/component-identities.md`. This is irreplaceable data. |
| 6 | **COMPONENT-AUDIT-COMP-001-011.md** | 755 | **ABSORB** | Contains the pre-remediation baseline (54% actual vs 86% claimed) with per-component, per-dimension soul scores. The formal chain has post-fix synthesis but NOT the failure analysis. Extract the per-component failure analysis and baseline scores into a historical appendix of `provenance/stage-1-components/`. |
| 7 | **COMPONENT-AUDIT-FOUNDATION.md** | 669 | **CONSOLIDATE** | Indexes all 337 findings organized by audit dimension. The findings themselves exist in R1-R5, and RESEARCH-ACTIVE tracks application status. This file's unique contribution is the "organized by audit dimension" view. Consolidate the dimensional organization into a new section of RESEARCH-ACTIVE or PIPELINE-MANIFEST. Then ARCHIVE. |
| 8 | **DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md** | 658 | **CONSOLIDATE** | Known synced duplicate of `provenance/stage-2-density-dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` (646 lines in provenance). Diff to confirm sync status. If identical (or provenance is newer), DELETE. If checkpoint has updates, consolidate into provenance copy first. |
| 9 | **FOUNDATION-REMEDIATION-SYNTHESIS.md** | 238 | **CONSOLIDATE** | Known synced duplicate of `provenance/stage-1-components/FOUNDATION-REMEDIATION-SYNTHESIS.md`. Same protocol as #8. |
| 10 | **SOUL-DISCOVERIES.md** | 266 | **CONSOLIDATE** | Known synced duplicate of `provenance/SOUL-DISCOVERIES.md`. Same protocol as #8. |
| 11 | **RETROACTIVE-AUDIT-DD-001-006.md** | 928 | **ABSORB** | Contains the complete finding-to-DD applicability matrix -- which R1-R5 findings apply to which DD. This input mapping exists NOWHERE in the formal chain (which only has DD outbound findings). Extract the applicability matrix and add it as a reference from `provenance/stage-2-density-dd/DD-outbound-findings.md` or create a dedicated `DD-input-mapping.md` in the DD provenance directory. |
| 12 | **PERCEPTUAL-AUDIT-LOG.md** | 476 | **ARCHIVE** | Contains per-iteration sub-agent observations during foundation remediation. This is process evidence (how audits were conducted) rather than research output. The summary scores are in formal chain. Archive with provenance link to `provenance/stage-1-components/`. |
| 13 | **PERCEPTUAL-DEEPENING-SUMMARY.md** | 249 | **ABSORB** | Contains 7-agent scores on /70 scale that differ from /40 scale used elsewhere. This alternate scoring methodology and its results are unique. Extract the scoring data and methodology description into a section within DD provenance or as an appendix to DD-REAUDIT-PERCEPTUAL-SYNTHESIS. |
| 14 | **VISUAL-AUDIT-COMP-001-011.md** | 320 | **ABSORB** | Contains per-component soul token verification at the code level with line numbers. This code-level evidence is unique. Extract into `provenance/stage-1-components/` as verification evidence. |
| 15 | **VISUAL-AUDIT-DD-001-006.md** | 430 | **ABSORB** | Contains granular per-agent, per-dimension scores for all 6 DDs. The formal chain only has summaries. Extract the per-agent detail as an appendix to DD-REAUDIT-PERCEPTUAL-SYNTHESIS or as a standalone evidence file in DD provenance. |
| 16 | **DD-REAUDIT-CHECKPOINT.md** | 232 | **CONSOLIDATE** | Known synced duplicate of provenance copy. Same protocol as #8. |
| 17 | **SECTIONS-PROGRESS.md** | 460 | **ARCHIVE** | Section build tracking (all NOT STARTED). Pure operational state. No research content. Archive. |
| 18 | **RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md** | 394 | **KEEP-IN-PLACE** | Template document for future use. No research content but methodological value. Add provenance link. |

---

### 2B. knowledge-architecture/ Top-Level Files

| # | File | Lines | Triage | Reasoning |
|---|------|-------|--------|-----------|
| 1 | **ACCUMULATED-IDENTITY-v1.md** | 539 | **ABSORB** | CRITICAL. The ONLY compressed identity document. Contains 5 soul pieces, 6 universal rules, all CSS tokens, 11 OD-F findings, 55 EXT-* findings, anti-patterns, DD density findings. This is the agent onboarding document. Extract: (a) OD-F finding definitions into `OD-outbound-findings.md`, (b) EXT-* finding definitions into a new `OD-external-research-synthesis.md` in OD provenance, (c) add reference from OD STAGE-HEADER. After extraction, KEEP-IN-PLACE as the agent onboarding document (it serves an ongoing role distinct from the provenance chain). |
| 2 | **OD-EXECUTION-PROTOCOL.md** | 6,022 | **KEEP-IN-PLACE** | Execution procedures for the OD phase. Contains Phase 0-3 definitions, recovery protocols, agent instructions. Reusable as template for AD. Its Phase 3 definition (lines 5625+) documents the MISSING provenance wrap-up phase. Add provenance link referencing OD STAGE-HEADER. |
| 3 | **OD-GRANULAR-AUDIT-PROMPT.md** | 2,153 | **KEEP-IN-PLACE** | Audit methodology document. Defines the 17-agent adversarial audit protocol. Reusable for AD audits. Add provenance link. |
| 4 | **OD-FIX-EXECUTION-PROMPT.md** | 1,000 | **KEEP-IN-PLACE** | Fix workflow document. Defines the 7-agent fix execution protocol. Reusable for AD. Add provenance link. |
| 5 | **OD-GRANULAR-AUDIT-RESULTS.md** | 620 | **ABSORB** | CRITICAL. The definitive OD audit report: 89 findings, 4 severity tiers, per-OD soul verification, 3 quality dialects, 17 recommended fixes. This is the OD equivalent of DD-REAUDIT-PERCEPTUAL-SYNTHESIS. Extract into `provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` (new file, mirroring DD pattern). Reference from OD STAGE-HEADER. |
| 6 | **OD-004-EXTERNAL-RESEARCH.md** | 680 | **ABSORB** | CRITICAL. Contains 24 external findings (EXT-CONF-001-012, EXT-TASK-001-012) from 12 external resources. None of this data is in the formal chain. Extract finding definitions into `OD-outbound-findings.md` (as research consumed) and/or a new `OD-external-research-synthesis.md`. |
| 7 | **OD-005-EXTERNAL-RESEARCH.md** | 1,725 | **ABSORB** | CRITICAL. Largest dark matter file. Contains 12 EXT-SPAT-* findings with soul piece integration matrices. Includes Kevin Lynch wayfinding model. Same extraction target as #6. |
| 8 | **OD-006-CREATIVE-RESEARCH-FEED.md** (in explorations/) | 975 | **ABSORB** | Contains EXT-CREATIVE-001-012 from 12 external resources. Same extraction protocol as #6 and #7. All three external research files should be consolidated into a single `OD-external-research-synthesis.md`. |
| 9 | **OD-RETROSPECTIVE-AND-PROTOCOL-v2.md** | 589 | **KEEP-IN-PLACE** | Process research: first team retrospective. Contains what worked/failed, agent team coordination patterns. Reusable for future phases. Add provenance link. |
| 10 | **OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md** | 536 | **KEEP-IN-PLACE** | Process research: second team retrospective. Contains v1-v2-v3 protocol evolution, cost-benefit analysis of audit agent types. Reusable for future phases. Add provenance link. |
| 11 | **OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md** | 4,411 | **KEEP-IN-PLACE** | Complete agent team architecture document. Contains the compounding pipeline paradigm, bidirectional threading requirements. Primarily process documentation but contains research about agent coordination. Add provenance link. |
| 12 | **PHASE-1B-MEGA-DEBRIEF.md** | 2,632 | **ABSORB** | CRITICAL. The 463-file dependency trace, 76% T1 reachability proof, zero broken refs, zero circular deps. This is the structural integrity baseline cited by multiple files. Extract key conclusions (reachability stats, integrity proof) into a reference from PIPELINE-BACKBONE.md. After extraction, KEEP-IN-PLACE (the full analysis has ongoing reference value beyond what a summary captures). |
| 13 | **WORKFLOW-METACOGNITION-ANALYSIS.md** | 878 | **KEEP-IN-PLACE** | Meta-analysis of the workflow. Contains 2.6:1 meta-to-output ratio, 50:1 compression, 7 paradoxes. This is process research about orchestration, not design research. It belongs outside the design provenance chain but has high value for future orchestration work. Add provenance link noting it is process research, not design research. |
| 14 | **KA-DECISIONS.md** | 382 | **ABSORB** | Contains the tier classification framework (T1-T4) and 176-file inventory with confidence levels and SUPERSEDED definitions. The classification methodology is unique and feeds into how provenance is structured. Extract tier definitions into PIPELINE-MANIFEST or SOURCE-OF-TRUTH-REGISTRY. |
| 15 | **KA-VERIFICATION.md** | 309 | **ARCHIVE** | Verification checklists and spot-check results from the KA phase. Process evidence, not ongoing data. Archive with provenance link. |
| 16 | **PLAN-REVISION-TRACKER.md** | 2,289 | **ARCHIVE** | 56 plan revisions cross-referenced. Pure operational process tracking. No research content. Archive. |
| 17 | **PHASE-2B-BATCH-MANIFEST.md** | 592 | **ARCHIVE** | Batch assignment data for Phase 2B threading. Operational. Archive. |
| 18 | **PHASE-2B-HANDOFF.md** | 1,114 | **ARCHIVE** | Handoff procedures for Phase 2B. Operational. Archive. |
| 19 | **PHASE-2B-MASTER-EXECUTION.md** | 337 | **ARCHIVE** | Execution procedures for Phase 2B. Operational. Archive. |
| 20 | **PIPELINE-BACKBONE.md** | 287 | **CONSOLIDATE** | Mirrored in DESIGN-SYSTEM/BACKBONE.md. Diff to confirm which is authoritative. Consolidate any unique content into the DESIGN-SYSTEM version. Then add a redirect note to this file pointing to DESIGN-SYSTEM/BACKBONE.md. |
| 21 | **SOURCE-OF-TRUTH-REGISTRY.md** | 258 | **CONSOLIDATE** | Partially mirrored in provenance infrastructure. Diff against provenance equivalents. Consolidate unique content into formal chain. |
| 22 | **KA-POSITION.md** | 166 | **ARCHIVE** | Position tracker only. No research content. Stale. Archive. |

---

### 2C. _od-audit-scratchpad/ Files (29 files)

**Principle:** The scratchpad contains TWO types of content: (a) raw audit evidence with unique per-element measurements, and (b) operational tracking with no unique data. The audit evidence files need selective ABSORB; the tracking files get ARCHIVED.

#### High-Value Audit Evidence (ABSORB selectively, then ARCHIVE remainder)

| # | File | Lines | Triage | What to Extract |
|---|------|-------|--------|-----------------|
| 1 | **identity-brief.md** | 522 | **ABSORB then ARCHIVE** | Complete identity: 5 soul pieces, 6 rules, 55 EXT-*, 8 OD-F findings. Overlaps with ACCUMULATED-IDENTITY-v1 but was generated independently by the Traverser agent. Extract any finding definitions not already captured from ACCUMULATED-IDENTITY. The independent generation is itself evidence of identity stability. |
| 2 | **fresh-eyes.md** | 324 | **ABSORB** | CRITICAL. F-E-001 through F-E-005 finding definitions. The 108 thin-border epidemic discovery, 960px width error, 3 quality dialects classification. Two findings led to fix execution. This unbiased perspective is unique and must be referenced from OD-AUDIT-SYNTHESIS. Extract finding IDs and key observations. |
| 3 | **research-refinement.md** | 395 | **ABSORB then ARCHIVE** | 55 EXT-* citations soul-tested (5-question test). 7 spirit violations and 7 raw directives identified. Per-citation soul test results exist ONLY here. Extract: (a) spirit violation list, (b) raw directive list into OD synthesis or identity documents. |
| 4 | **contrast-accessibility.md** | 361 | **ABSORB** | CA-001 through CA-005 with specific WCAG contrast ratios and deficit calculations. Unique accessibility data. Extract finding definitions and computed ratios into OD-AUDIT-SYNTHESIS. |
| 5 | **cross-od-consistency.md** | 607 | **ABSORB then ARCHIVE** | Token diff (12/12 PASS), squint test results, contradiction resolution. The consistency proof is unique. Extract the token diff results table and overall verdict into OD-AUDIT-SYNTHESIS. |
| 6 | **structural-integrity.md** | 403 | **ABSORB then ARCHIVE** | Semantic HTML, ARIA, focus, heading hierarchy findings per OD. Accessibility structural data exists ONLY here. Extract key findings into OD-AUDIT-SYNTHESIS. |
| 7 | **comparative-reference.md** | 313 | **ABSORB then ARCHIVE** | DD-to-OD inheritance verification, pattern evolution, drift detection. Unique comparative analysis. Extract pattern evolution findings into OD synthesis. |
| 8 | **content-authenticity.md** | 306 | **ABSORB then ARCHIVE** | Placeholder detection, domain verification. Extract any findings about placeholder content into OD-AUDIT-SYNTHESIS. |
| 9 | **fix-report-fixer-c.md** | 257 | **ABSORB** | Contains the critical FALSE POSITIVE evidence: `document.fonts.ready` timing proves Fix #1 (Essence font) and Fix #7 (dead zone) were not real failures. This evidence must be referenced from OD-AUDIT-SYNTHESIS to correct the audit record. Extract the false-positive proof and methodology insight. |

#### Per-OD Systematic Audit Reports (ARCHIVE with summary extraction)

| # | File | Lines | Triage | Notes |
|---|------|-------|--------|-------|
| 10 | **systematic-audit-001.md** | 348 | **ARCHIVE** | Per-element DOM data for OD-001. Raw evidence. Summary already captured in OD-GRANULAR-AUDIT-RESULTS. Archive as evidence trail. |
| 11 | **systematic-audit-002.md** | 409 | **ARCHIVE** | Same for OD-002. |
| 12 | **systematic-audit-003.md** | 453 | **ARCHIVE** | Same for OD-003. Note: 661 thin borders documented here. |
| 13 | **systematic-audit-004.md** | 481 | **ARCHIVE** | Same for OD-004. Includes Essence font investigation. |
| 14 | **systematic-audit-005.md** | 452 | **ARCHIVE** | Same for OD-005. |
| 15 | **systematic-audit-006.md** | 464 | **ARCHIVE** | Same for OD-006. |

#### Per-OD Visual Audit Reports (ARCHIVE)

| # | File | Lines | Triage | Notes |
|---|------|-------|--------|-------|
| 16 | **visual-audit-001.md** | 283 | **ARCHIVE** | Visual observations for OD-001. Summary in AUDIT-RESULTS. |
| 17 | **visual-audit-002.md** | 331 | **ARCHIVE** | Same for OD-002. |
| 18 | **visual-audit-003.md** | 294 | **ARCHIVE** | Same for OD-003. |
| 19 | **visual-audit-004.md** | 380 | **ARCHIVE** | Same for OD-004. Includes Essence FAIL + dead zone (both disproved). |
| 20 | **visual-audit-005.md** | 243 | **ARCHIVE** | Same for OD-005. |
| 21 | **visual-audit-006.md** | 294 | **ARCHIVE** | Same for OD-006. |

#### Fix Reports and Verification (ARCHIVE)

| # | File | Lines | Triage | Notes |
|---|------|-------|--------|-------|
| 22 | **fix-report-fixer-a.md** | 219 | **ARCHIVE** | Fix execution details. No unique findings. |
| 23 | **fix-report-fixer-b.md** | 145 | **ARCHIVE** | Fix execution details. No unique findings. |
| 24 | **fix-report-fixer-d.md** | 177 | **ARCHIVE** | Fix execution details. No unique findings. |
| 25 | **fix-verification-programmatic.md** | 306 | **ARCHIVE** | 187/187 test pass results. Evidence trail. |
| 26 | **fix-verification-visual.md** | 216 | **ARCHIVE** | 12 visual verification screenshots. Evidence trail. |

#### Operational Trackers (ARCHIVE or DELETE)

| # | File | Lines | Triage | Notes |
|---|------|-------|--------|-------|
| 27 | **FIX-STATE.md** | 88 | **ARCHIVE** | State tracker with key findings summary. Low unique value but documents fix completion. |
| 28 | **AUDIT-STATE.md** | 25 | **DELETE** | 25-line state tracker. Pure checkboxes. Zero unique data. All information exists in OD-GRANULAR-AUDIT-RESULTS. |
| 29 | **weaver-tracker.md** | 179 | **ARCHIVE** | Agent completion tracking, 18 cross-references. Process evidence. |

---

### 2D. _execution-journal/ Files

| # | File | Lines | Triage | Reasoning |
|---|------|-------|--------|-----------|
| 1 | **builder-log.md** | 148 | **ABSORB then ARCHIVE** | Contains OD-001 iteration scores (34/40 -> 35.5/40) and per-finding research application evidence table. Extract the research application evidence (which findings were applied to which OD, with evidence) into OD provenance documents. Then archive the remainder. |
| 2 | **decisions.md** | 36 | **ABSORB then ARCHIVE** | DEC-001 and DEC-002 with full rationale and alternatives. Small but unique decision reasoning. Extract decision records into a "Key Decisions" section of the OD STAGE-HEADER (mirroring DD's STAGE-HEADER format). |
| 3 | **lead-log.md** | 129 | **ARCHIVE** | Session recovery data and context absorption records. Process evidence. No finding definitions. Archive. |
| 4 | **weaver-log.md** | 259 | **ABSORB then ARCHIVE** | Threading verification evidence: bidirectional link verification tables, research status updates. Extract the verification results (which links were verified, pass/fail) into provenance. Then archive. |
| 5 | **CURRENT-STATE.md** | 125 | **ARCHIVE** | State snapshot. No research content. Archive. |

---

### 2E. _workflow-metacognition/ Files

| # | File | Lines | Triage | Reasoning |
|---|------|-------|--------|-----------|
| 1 | **INDEX.md** | 17 | **KEEP-IN-PLACE** | Navigation file. Add provenance link. |
| 2 | **workflow-analysis-chronological.md** | 830 | **KEEP-IN-PLACE** | Process research: document evolution across 14 hours. This is meta-research about orchestration, not design research. It does not belong in the design provenance chain but has high value for understanding how this system was built. Add provenance link noting "process research, not design provenance." |
| 3 | **workflow-analysis-context.md** | 472 | **KEEP-IN-PLACE** | Compaction problem, 5-layer memory, THIN lead. Same reasoning as #2. |
| 4 | **workflow-analysis-git.md** | 242 | **KEEP-IN-PLACE** | Commit patterns, session structure. Same reasoning. |
| 5 | **workflow-analysis-plans.md** | 399 | **KEEP-IN-PLACE** | Plans directory evolution. Same reasoning. |
| 6 | **workflow-analysis-threading.md** | 247 | **KEEP-IN-PLACE** | 490-file threading analysis. Same reasoning. |
| 7 | **workflow-analysis-two-instance.md** | 441 | **KEEP-IN-PLACE** | Create-revise-execute loop. Same reasoning. |
| 8 | **workflow-deep-architecture.md** | 636 | **KEEP-IN-PLACE** | Information theory, compression cascade. Same reasoning. |
| 9 | **workflow-deep-blindspots.md** | 402 | **KEEP-IN-PLACE** | Meta-work tax, complexity ratchet. Same reasoning. |
| 10 | **workflow-deep-paradoxes.md** | 571 | **KEEP-IN-PLACE** | 7 paradoxes, 7 alternatives, highest-leverage change. Same reasoning. |

**Rationale for KEEP-IN-PLACE on all metacognition files:** These 9 files (4,240 lines) constitute a unique body of process research that has no counterpart anywhere in the system. They analyze the orchestration workflow itself -- loops, paradoxes, information theory, blindspots. This is not design research (it does not belong in DESIGN-SYSTEM/provenance/) but it IS research (it should not be archived or deleted). The correct disposition is to leave them in place with provenance links, and to reference the top-level WORKFLOW-METACOGNITION-ANALYSIS.md from PIPELINE-BACKBONE.md as "process research."

---

### 2F. _provenance-gap-analysis/ Files

| # | File | Lines | Triage | Reasoning |
|---|------|-------|--------|-----------|
| 1-7 | **01 through 07** | 3,875 total | **KEEP-IN-PLACE** | These 7 files ARE the analysis that identified the dark matter problem. They are the analytical foundation for this triage protocol. They should remain in place as the audit trail documenting what was found and how. Add provenance links. After triage is complete, add files 08+ (including this protocol and any execution logs) to the same directory. |

---

### 2G. dependency-trace/ Files

| # | File | Lines | Triage | Reasoning |
|---|------|-------|--------|-----------|
| 1 | **DD-SOURCE-OF-TRUTH-EXTRACTION.md** | 674 | **ABSORB** | CRITICAL. 4 CRITICAL token divergences between DD files and tokens.css. This is an integrity risk. Extract divergence data into a new section of `DESIGN-SYSTEM/tokens/` documentation or as a warning in PIPELINE-MANIFEST. |
| 2 | **DD-TYPOGRAPHY-VISUAL-AUDIT.md** | 244 | **ABSORB then ARCHIVE** | Playwright-computed ground-truth typography values. Extract key computed values into DD provenance as verification evidence. |
| 3 | **PHASE-2A-CLASSIFICATION.md** | 708 | **KEEP-IN-PLACE** | Master classification of 910 files. Ongoing reference value for understanding system structure. Add provenance link. |
| 4 | **02-threading-data/*.md** (3 files) | 1,695 | **KEEP-IN-PLACE** | Per-file dependency data. Raw graph data powering Phase 2B threading. Reference value. Add provenance links. |
| 5 | **01-reachability-report.md** | 264 | **ABSORB then ARCHIVE** | 76% T1 reachability. Key conclusion should be referenced from PIPELINE-BACKBONE. |
| 6 | **03-relationship-map.md** | 331 | **KEEP-IN-PLACE** | File relationship graph. Ongoing reference. |
| 7 | **04-cross-directory-analysis.md** | 247 | **KEEP-IN-PLACE** | Cross-directory dependencies. Ongoing reference. |
| 8 | **06-threading-summary.md** | 192 | **ARCHIVE** | Summary statistics. Captured in PHASE-1B-MEGA-DEBRIEF. |
| 9 | **08-OBSERVATIONS-LOG.md** | 342 | **ABSORB then ARCHIVE** | Structural observations. Extract novel observations not captured elsewhere. |
| 10 | **09-INTEGRITY-REPORT.md** | 206 | **ABSORB** | Integrity verification results. Extract verification conclusions into provenance reference. |
| 11 | **TRACE-SUMMARY.md** | 238 | **ARCHIVE** | Summary captured in PHASE-1B-MEGA-DEBRIEF. |
| 12 | **05-cleanup-recommendations.md** | 173 | **ARCHIVE** | Operational recommendations. Some may be completed. |
| 13 | **07-QUESTIONS-FOR-HUMAN.md** | 213 | **KEEP-IN-PLACE** | Decision prompts still relevant. |
| 14 | **10-MOVE-RECOMMENDATIONS.md** | 222 | **ARCHIVE** | Operational. |
| 15 | **11-DEPRECATION-ASSESSMENT.md** | 166 | **ARCHIVE** | Operational. |

---

### 2H. Other Dark Matter

| # | File | Lines | Triage | Reasoning |
|---|------|-------|--------|-----------|
| 1 | **FINDINGS-INDEX.md** | 516 | **ABSORB** | Master finding index. The formal chain has PIPELINE-MANIFEST but it has "TBD" for OD. This file's cross-cutting index format (all R1-R5 + components + tokens + density) should be consolidated into an updated PIPELINE-MANIFEST. |

---

### TRIAGE SUMMARY TABLE

| Category | File Count | Total Lines | Action |
|----------|-----------|-------------|--------|
| ABSORB | 22 | ~12,400 | Extract data into formal chain |
| CONSOLIDATE | 7 | ~3,100 | Merge unique parts into formal chain |
| ARCHIVE | 28 | ~8,800 | Move to archive with provenance links |
| KEEP-IN-PLACE | 22 | ~18,200 | Add provenance links, leave in place |
| DELETE | 1 | ~25 | Verify and remove (AUDIT-STATE.md only) |
| **TOTAL** | **80** | **~42,525** | |

**Note:** Total exceeds census 51 because some files have dual triage (ABSORB then ARCHIVE) and because Category C files with partial research were included.

---

## SECTION 3: THE EXTRACTION PROTOCOL

### 3.1 Data Types to Extract

When an agent ABSORBs data from a dark matter file, it extracts these specific data types:

| Data Type | Format | Destination |
|-----------|--------|-------------|
| **Finding ID definitions** | `{ID}: {name} -- {one-line description}` | OD-outbound-findings.md (new) |
| **Finding metadata** | Source, Score, Chain Impact, Consumed By | OD-outbound-findings.md tables |
| **External research citations** | URL, Author, Publication, Key Insight, Soul Test Result | OD-external-research-synthesis.md (new) |
| **Scores** | Per-OD scores on /40 or /70 scale | OD-AUDIT-SYNTHESIS.md (new) |
| **Token verification results** | Pass/Fail per token per OD | OD-AUDIT-SYNTHESIS.md |
| **Contrast ratios** | Element, Foreground, Background, Ratio, WCAG Level | OD-AUDIT-SYNTHESIS.md |
| **Identity declarations** | Soul pieces, rules, locked CSS | Referenced from ACCUMULATED-IDENTITY |
| **Decision records** | What, Why, Alternatives, Impact | OD STAGE-HEADER Key Decisions section |
| **Applicability matrices** | Finding x Exploration grid | OD-outbound-findings.md or appendix |
| **Verification evidence** | Test count, pass/fail, methodology | OD-AUDIT-SYNTHESIS.md evidence section |
| **False positive records** | Finding ID, Evidence, Root Cause, Corrected Verdict | OD-AUDIT-SYNTHESIS.md corrections section |

### 3.2 Formatting for Insertion

The extracted data must match the format of its destination document. The DD stage provides the template:

**For OD-outbound-findings.md (modeled on DD-outbound-findings.md):**
```markdown
## OD Findings

| ID | Name | Source | Score | For AD | Chain Impact |
|----|------|--------|-------|--------|--------------|
| OD-F-001 | {name} | OD-001 | {score} | {how AD uses} | {what breaks without} |
```

**For OD-external-research-synthesis.md (new format):**
```markdown
## External Research Consumed During OD

### EXT-CONF (Confidence Domain)
| ID | Source | Key Insight | Soul Test | Applied In |
|----|--------|-------------|-----------|------------|
| EXT-CONF-001 | {URL} | {insight} | PASS/FAIL | OD-004 |

### EXT-SPAT (Spatial Domain)
[same table format]

### EXT-CREATIVE (Creative Domain)
[same table format]
```

**For OD-AUDIT-SYNTHESIS.md (modeled on DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md):**
```markdown
## Per-OD Audit Results

### OD-001: Conversational Structure
**Score:** {score}/40
**Soul Violations:** {count}
**Key Findings:** {list}
**Corrections:** {false positives identified post-audit}
```

### 3.3 Source File Annotation

After extraction, the source file receives this annotation at the top (BEFORE any existing headers):

```markdown
<!-- ═══════════════════════════════════════════════════════════════════════
TRIAGE: EXTRACTED — {date}
Protocol: Dark Matter Triage Protocol (14-triage-protocol.md)

Data extracted:
  - {data type 1} → {destination file}
  - {data type 2} → {destination file}

Extraction agent: {agent name}
Remaining disposition: {ARCHIVE | KEEP-IN-PLACE | DELETE}
═══════════════════════════════════════════════════════════════════════ -->
```

### 3.4 Handling Data That Appears in Multiple Dark Matter Files

Several data units appear in more than one dark matter file. Resolution rules:

| Data Unit | Appears In | Resolution |
|-----------|-----------|------------|
| OD-F finding definitions | OD-CHECKPOINT.md, ACCUMULATED-IDENTITY-v1.md, identity-brief.md | Use ACCUMULATED-IDENTITY-v1 as primary (most context). Cross-check IDs against OD-CHECKPOINT (most recent state). Flag any discrepancy. |
| 55 EXT-* findings | ACCUMULATED-IDENTITY-v1.md, identity-brief.md, research-refinement.md | Use the original research files (OD-004/005/006-EXTERNAL-RESEARCH) as primary source. Use ACCUMULATED-IDENTITY for compressed descriptions. Use research-refinement.md for soul test results. |
| 5 Soul Pieces | ACCUMULATED-IDENTITY, identity-brief, SOUL-DISCOVERIES (x2) | provenance/SOUL-DISCOVERIES.md is authoritative. Others should match. Flag any divergence. |
| Per-OD scores | OD-CHECKPOINT, DISCOVERIES-LOG, OD-GRANULAR-AUDIT-RESULTS | OD-GRANULAR-AUDIT-RESULTS is post-audit authoritative for quality assessment. OD-CHECKPOINT is authoritative for curation decisions (INCLUDE/DOCUMENT/DISCARD). |

### 3.5 Quality Check: Verifying Extraction Completeness

After extracting from a file, the agent performs this check:

1. **Count check:** Count the number of finding IDs in the source file. Count the number of finding IDs in the destination file. The destination must have >= the source count (it may have more from other sources).

2. **Diff check:** Search the source file for any remaining data that looks like it should have been extracted (finding IDs, scores, URLs, measurements). If found, extract it or document why it was intentionally left.

3. **Cross-reference check:** For every finding ID extracted, search the entire codebase for other mentions of that ID. Verify that the definition in the destination file is consistent with how the ID is used elsewhere.

4. **Context check:** Read the destination file as if you were an agent seeing it for the first time. Does each extracted data unit make sense in its new context? Is there enough surrounding explanation?

---

## SECTION 4: THE ARCHIVE PROTOCOL

### 4.1 Archive Directory Structure

```
knowledge-architecture/_archive/
  INDEX.md                          # Master archive index
  od-audit-evidence/                # All OD audit scratchpad files
    systematic-audit-001.md
    systematic-audit-002.md
    ...
    visual-audit-001.md
    ...
    fix-report-fixer-a.md
    ...
    fix-verification-programmatic.md
    fix-verification-visual.md
    FIX-STATE.md
    weaver-tracker.md
    AUDIT-STATE.md                  # (or DELETE if approved)
  od-execution-journal/             # Execution journal files
    builder-log.md
    lead-log.md
    CURRENT-STATE.md
  phase-tracking/                   # Phase-level operational files
    MASTER-STATE.md
    SECTIONS-PROGRESS.md
    KA-POSITION.md
    PLAN-REVISION-TRACKER.md
    PHASE-2B-BATCH-MANIFEST.md
    PHASE-2B-HANDOFF.md
    PHASE-2B-MASTER-EXECUTION.md
  dependency-trace-ops/             # Operational dependency trace files
    06-threading-summary.md
    TRACE-SUMMARY.md
    05-cleanup-recommendations.md
    10-MOVE-RECOMMENDATIONS.md
    11-DEPRECATION-ASSESSMENT.md
  checkpoint-synced/                # Checkpoint files that were synced to provenance
    DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md  # (if confirmed identical to provenance)
    DD-REAUDIT-CHECKPOINT.md
    FOUNDATION-REMEDIATION-SYNTHESIS.md
    SOUL-DISCOVERIES.md
    RESEARCH-ACTIVE.md              # (after consolidation)
```

### 4.2 Metadata for Each Archived File

Each archived file receives this header (prepended, not replacing existing content):

```markdown
<!-- ═══════════════════════════════════════════════════════════════════════
ARCHIVED — {date}
Protocol: Dark Matter Triage Protocol (14-triage-protocol.md)

Original location: {original file path relative to showcase/}
Archived because: {one-line reason: "Operational state tracker — phase complete",
                   "Synced duplicate — provenance copy is authoritative",
                   "Raw audit evidence — summary captured in OD-AUDIT-SYNTHESIS"}
Data extracted before archiving: {YES/NO}
  If YES: {list of extractions → destinations}
Related formal chain document: {path or "N/A"}
Phase that produced this: {Phase 1B | Phase 2B | OD Build | OD Audit | OD Fix}
═══════════════════════════════════════════════════════════════════════ -->
```

### 4.3 The Archive Index (INDEX.md)

The archive index file provides discoverability:

```markdown
# Archive Index
## Dark Matter Triage Archive — {date}

### Purpose
This archive contains operational files from completed phases that were
moved during the Dark Matter Triage (14-triage-protocol.md). These files
have historical value but do not contain data required by the active
provenance chain.

### How to Find What You Need

| If You Want... | Look In |
|----------------|---------|
| Raw OD audit evidence per element | od-audit-evidence/systematic-audit-*.md |
| Visual audit observations per OD | od-audit-evidence/visual-audit-*.md |
| Fix execution details | od-audit-evidence/fix-report-fixer-*.md |
| Fix verification evidence | od-audit-evidence/fix-verification-*.md |
| OD build session logs | od-execution-journal/ |
| Phase state snapshots | phase-tracking/ |
| Dependency trace operations | dependency-trace-ops/ |
| Synced checkpoint duplicates | checkpoint-synced/ |

### File Manifest
[Full table of every archived file with original path, archive path,
 reason, extraction status, and related formal chain document]

### Retrieval
Any file can be retrieved from this archive if needed. The archive is
version-controlled (git). Files can be moved back to their original
locations if a future phase requires them.
```

### 4.4 Un-Archiving

If a future phase needs an archived file:
1. Check the INDEX.md for the file's archive location
2. Copy (not move) the file to the working directory
3. Remove the ARCHIVED header
4. Add a note to INDEX.md: `{date}: {file} retrieved for {reason}`
5. After use, either re-archive or update disposition

---

## SECTION 5: POST-TRIAGE VERIFICATION

### 5.1 Verify Nothing Was Lost

**Finding ID completeness test:**

1. Generate a complete list of every finding ID that existed in any dark matter file before triage. The census (doc 10, Section 4) provides the master list:
   - EXT-CONV-001 through 005 (5)
   - EXT-CREATIVE-001 through 012 (12)
   - EXT-CONF-001 through 012 (12)
   - EXT-TASK-001 through 012 (12)
   - EXT-SPAT-001 through 012 (12)
   - EXT-DENSITY-001 through 003 (3)
   - OD-F-001 through OD-F-011 (11)
   - F-E-001 through F-E-005 (5)
   - CA-001 through CA-005 (5)
   - DEC-001 through DEC-012 (12)
   - COMP-F-* detailed (11+)
   - **TOTAL: ~100 unique finding IDs**

2. For each finding ID, search the formal provenance chain (`DESIGN-SYSTEM/provenance/`). Every ID should now appear in at least one formal chain document.

3. If any ID is missing, identify its source file and verify it was processed. If it was in an ARCHIVE file, verify the data was extracted before archiving.

**Score completeness test:**

4. For each OD (OD-001 through OD-006), verify the formal chain contains:
   - A curation decision (INCLUDE/DOCUMENT/DISCARD)
   - A score (on /40 or equivalent scale)
   - A pattern name
   - A DD source file linkage

5. Compare against OD-CHECKPOINT.md data. Any discrepancy means extraction was incomplete.

**Citation completeness test:**

6. Count the total unique external URLs cited in the three external research files (OD-004, OD-005, OD-006-CREATIVE). Verify each URL appears in the formal chain's external research synthesis.

### 5.2 Verify the Formal Chain Contains Everything

**OD provenance directory completeness:**

After triage + extraction, `DESIGN-SYSTEM/provenance/stage-3-organization-od/` should contain:

| File | Status Pre-Triage | Status Post-Triage |
|------|-------------------|-------------------|
| STAGE-HEADER.md | IN PROGRESS (planning doc) | COMPLETE (past tense, with quality achieved, key decisions) |
| CLAUDE.md | PLACEHOLDER | COMPLETE (real navigation, all files listed) |
| OD-RESEARCH-GATE.md | PASSED (pre-build mapping) | PASSED (with APPLIED status added) |
| OD-outbound-findings.md | MISSING | CREATED (OD-F-001 through OD-F-011 + consumption matrix) |
| HANDOFF-OD-TO-AD.md | MISSING | CREATED (mirroring HANDOFF-DD-TO-OD structure) |
| OD-AUDIT-SYNTHESIS.md | MISSING | CREATED (89 findings, per-OD results, corrections) |
| OD-external-research-synthesis.md | MISSING | CREATED (56 EXT-* findings consolidated) |

**PIPELINE-MANIFEST updates:**

| Section | Pre-Triage | Post-Triage |
|---------|-----------|-------------|
| Section B: Stage 3 (OD-F-###) | "TBD" | 11 findings listed |
| Section D: Organizational Patterns | "TBD" | 6 patterns listed |
| Section E: Cross-references | No OD entries | OD cross-references added |

**Upstream references:**

| Document | Pre-Triage | Post-Triage |
|----------|-----------|-------------|
| PIPELINE-BACKBONE.md | No PHASE-1B-MEGA-DEBRIEF reference | References debrief conclusions |
| PIPELINE-BACKBONE.md | No workflow metacognition reference | References process research |
| DESIGN-SYSTEM/components/OVERVIEW.md | No component identity link | References COMPONENTS-REGISTRY or absorbed data |
| DESIGN-SYSTEM/tokens/ docs | No divergence warnings | References DD-SOURCE-OF-TRUTH-EXTRACTION findings |

### 5.3 Verify the Dark Matter Ratio Has Flipped

**Pre-triage state (from census):**
- Formal chain (Cat A): 33 files, ~10,600 lines (24% of files, 19% of content)
- Dark matter (Cat B): 51 files, ~32,800 lines (37% of files, 60% of content)
- Ratio: 3.1x more dark matter content than formal chain

**Post-triage target:**
- Formal chain should grow by ~5,000-8,000 lines (new OD provenance documents)
- Dark matter should shrink by ~12,000-15,000 lines (ABSORB extractions + ARCHIVE moves)
- Remaining dark matter (KEEP-IN-PLACE files) should be explicitly linked to the chain

**Verification formula:**
```
formal_chain_lines = count lines in DESIGN-SYSTEM/provenance/**/*.md
linked_dark_matter = count lines in files with PROVENANCE LINK headers
unlinked_dark_matter = count lines in Cat B files without PROVENANCE LINK or EXTRACTED or ARCHIVED headers

SUCCESS if:
  formal_chain_lines > unlinked_dark_matter
  AND unlinked_dark_matter == 0 (every dark matter file has been processed)
```

**The goal is NOT to eliminate dark matter.** The goal is to ensure that:
1. Every research finding ID exists in the formal chain
2. Every dark matter file is either absorbed, consolidated, archived, kept-in-place with provenance link, or deleted
3. No file exists in a "research-bearing but unprocessed" state
4. The formal chain is self-sufficient: an agent reading ONLY the formal chain can make correct decisions without needing to discover dark matter files

---

## APPENDIX A: NEW FORMAL CHAIN DOCUMENTS TO CREATE

The ABSORB process requires creating these new documents in `DESIGN-SYSTEM/provenance/stage-3-organization-od/`:

### A1. OD-outbound-findings.md
**Template:** `stage-2-density-dd/DD-outbound-findings.md`
**Content:** OD-F-001 through OD-F-011, with Source, Score, For AD, Chain Impact columns. Consumption matrix for AD/CD stages. Documentation of which DD-F findings were consumed by OD.
**Data sources:** OD-CHECKPOINT.md, ACCUMULATED-IDENTITY-v1.md, OD-GRANULAR-AUDIT-RESULTS.md

### A2. HANDOFF-OD-TO-AD.md
**Template:** `stage-2-density-dd/HANDOFF-DD-TO-OD.md`
**Content:** Organizational pattern table with scores, OD outbound findings mandatory consumption list, soul pieces transfer, quality bar, primary research for AD, OD iteration lessons, files AD must CREATE/UPDATE, verification requirements, acknowledgment checklist.
**Data sources:** OD-CHECKPOINT.md, DISCOVERIES-LOG.md, OD-GRANULAR-AUDIT-RESULTS.md, ACCUMULATED-IDENTITY-v1.md

### A3. OD-AUDIT-SYNTHESIS.md
**Template:** `stage-2-density-dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md`
**Content:** Per-OD audit results (scores, findings, soul verification), cross-OD systemic issues, adversarial debate outcomes, fix execution summary, false positive corrections (Fix #1 and #7), final verification evidence.
**Data sources:** OD-GRANULAR-AUDIT-RESULTS.md, fresh-eyes.md, contrast-accessibility.md, cross-od-consistency.md, structural-integrity.md, fix-report-fixer-c.md, fix-verification-programmatic.md

### A4. OD-external-research-synthesis.md
**Template:** None (new document type for OD). Format defined in Section 3.2.
**Content:** All 56 EXT-* finding definitions organized by domain (Conversational, Confidence, Task, Spatial, Creative), with source URLs, key insights, soul test results, and which OD consumed each finding.
**Data sources:** OD-004-EXTERNAL-RESEARCH.md, OD-005-EXTERNAL-RESEARCH.md, OD-006-CREATIVE-RESEARCH-FEED.md, research-refinement.md (for soul test results), identity-brief.md (for EXT-CONV and EXT-DENSITY)

### A5. Updated STAGE-HEADER.md
**Template:** `stage-2-density-dd/STAGE-HEADER.md` (completion format, not planning format)
**Changes:** Convert from future tense to past tense. Add: What This Stage Consumed (actual), What This Stage Produced (actual), Quality Achieved table, Key Decisions, Causal Relationships, Accumulated Research Weight, Files In This Folder with COMPLETE status.
**Data sources:** OD-CHECKPOINT.md, decisions.md, DISCOVERIES-LOG.md, OD-GRANULAR-AUDIT-RESULTS.md

### A6. Updated CLAUDE.md
**Template:** `stage-2-density-dd/CLAUDE.md`
**Changes:** Convert from PLACEHOLDER to complete 5-section standard with real file inventory, connection maps, reading order, and mindset.

### A7. Updated OD-RESEARCH-GATE.md
**Changes:** Add APPLIED/NOT APPLIED status column to the R-1 finding mapping table. Verify against builder-log.md and OD inline threading headers for application evidence.

### A8. Updated PIPELINE-MANIFEST.md
**Changes:** Populate Section B Stage 3 with OD-F findings. Populate Section D with organizational patterns. Add cross-references.

---

## APPENDIX B: AGENT TEAM STRUCTURE FOR EXECUTION

**Recommended team:** 5-7 agents + 1 lead

| Agent | Assignment | Files | Estimated Time |
|-------|-----------|-------|---------------|
| **Absorber-A** | Create OD-outbound-findings.md + HANDOFF-OD-TO-AD.md | Reads: OD-CHECKPOINT, ACCUMULATED-IDENTITY, DISCOVERIES-LOG, decisions.md | ~20 min |
| **Absorber-B** | Create OD-AUDIT-SYNTHESIS.md | Reads: OD-GRANULAR-AUDIT-RESULTS, fresh-eyes, contrast-accessibility, cross-od-consistency, structural-integrity, fix-report-fixer-c | ~25 min |
| **Absorber-C** | Create OD-external-research-synthesis.md | Reads: OD-004/005/006 EXTERNAL-RESEARCH, research-refinement.md, identity-brief.md | ~20 min |
| **Updater** | Update STAGE-HEADER, CLAUDE.md, OD-RESEARCH-GATE, PIPELINE-MANIFEST | Reads: DD equivalents as templates, OD data sources | ~25 min |
| **Archiver** | Move 28 files to archive, create INDEX.md, add ARCHIVED headers | All ARCHIVE-triaged files | ~15 min |
| **Linker** | Add PROVENANCE LINK headers to all KEEP-IN-PLACE files | 22 KEEP-IN-PLACE files | ~15 min |
| **Verifier** | Execute Section 5 verification protocol | Reads all outputs | ~15 min |

**File ownership (prevents contention):**
- Absorber-A owns: `provenance/stage-3/OD-outbound-findings.md`, `HANDOFF-OD-TO-AD.md`
- Absorber-B owns: `provenance/stage-3/OD-AUDIT-SYNTHESIS.md`
- Absorber-C owns: `provenance/stage-3/OD-external-research-synthesis.md`
- Updater owns: `provenance/stage-3/STAGE-HEADER.md`, `CLAUDE.md`, `OD-RESEARCH-GATE.md`, `PIPELINE-MANIFEST.md`
- Archiver owns: `_archive/` directory
- Linker owns: only PROVENANCE LINK headers (non-destructive additions)
- Verifier owns: nothing (read-only)

**Execution order:**
1. Absorbers A, B, C + Updater run in parallel (they read different source files and write to different destination files)
2. Archiver + Linker run after absorbers complete (they need to annotate source files with EXTRACTED headers)
3. Verifier runs last

---

*End of Dark Matter Triage Protocol. This document is the execution specification for converting 51 dark matter files from unprocessed state to either formal chain, archive, or explicitly linked.*
