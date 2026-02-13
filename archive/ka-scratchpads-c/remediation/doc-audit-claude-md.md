# CLAUDE.md Audit Report — All 16 Showcase & DESIGN-SYSTEM Files

**Auditor:** doc-update team, auditor-claude-md agent
**Date:** 2026-02-08
**Scope:** All 16 CLAUDE.md files across showcase/ and DESIGN-SYSTEM/ directories
**Assessment Criteria:** 3-layer architecture awareness, pipeline status accuracy, stale claims, update needs

---

## Executive Summary

Of 16 CLAUDE.md files audited:
- **0 files** mention the 3-layer provenance architecture explicitly
- **5 files** have stale pipeline status information
- **3 files** contain false or misleading claims
- **7 files** reference R-2 finding count as 78 (actual is 27)
- **2 files** describe OD as "PENDING" when OD is COMPLETE
- **1 file** (knowledge-architecture) has stale Phase 2A status

**Overall Grade: NEEDS UPDATE** — The files are structurally sound but reflect a snapshot from Phase 2B (2026-02-06) and have not been updated after OD completion, provenance chain remediation, or the workflow metacognition analysis.

---

## Assessment Criteria

### Criterion 1: Does the file mention the 3-layer architecture?

The design system has a 3-layer provenance architecture:
- **Layer 1: Inline Threading Headers (Phase 2B)** — 490 source files with per-file metadata
- **Layer 2: Light Provenance Sections (Phase 2D)** — 244 additional files with lighter metadata
- **Layer 3: Formal Provenance Chain (DESIGN-SYSTEM/provenance/)** — Curated narrative documents

**No CLAUDE.md file describes all three layers.** Some files implicitly reference Layer 1 (they have inline threading headers themselves) and Layer 3 (they reference provenance/), but none explain the 3-layer system as a whole. The closest is the DESIGN-SYSTEM/CLAUDE.md which mentions "provenance chain" but does not distinguish layers.

### Criterion 2: Is the pipeline status current?

The pipeline is: Research -> T1 -> DD (COMPLETE) -> OD (COMPLETE, 94/104 verification) -> AD (PENDING) -> CD (FUTURE)

### Criterion 3: Are there false claims or stale information?

See per-file assessments below.

### Criterion 4: What specific updates are needed?

See per-file UPDATE NEEDED sections below.

---

## Per-File Assessments

---

### File 1: `docs-spa/app/showcase/CLAUDE.md`

**Lines:** 460
**Role:** Master process enforcement for all showcase/ work

**3-Layer Architecture:** NO. Does not mention Layers 1, 2, or 3. Focuses entirely on research grounding and refinement loops.

**Pipeline Status:** Not explicitly stated. References OD, AD, CD exploration types without status.

**False/Stale Claims:**
- Line 91: "Start OD work" in the HOW TO READ table of DESIGN-SYSTEM/CLAUDE.md is referenced — this is stale since OD is COMPLETE.
- Line 354-366: Research finding counts table lists R-2 as "27 findings" — this is CORRECT (matches actual). However, R-2 is listed as 78 in many other files, creating inconsistency.

**Specific Updates Needed:**
1. ADD a section explaining the 3-layer provenance architecture
2. ADD pipeline status summary (OD COMPLETE, AD PENDING)
3. UPDATE the key file locations section (line 434+) to include provenance chain files created during OD remediation: OD-outbound-findings.md, OD-SYNTHESIS.md, HANDOFF-OD-TO-AD.md, EXT-RESEARCH-REGISTRY.md
4. CONSIDER whether the 460-line process enforcement is still proportionate — the workflow metacognition analysis found binary rules achieve 100% compliance while judgment rules achieve ~0%

**Severity:** MEDIUM

---

### File 2: `docs-spa/app/showcase/DESIGN-SYSTEM/CLAUDE.md`

**Lines:** 165
**Role:** Navigation for DESIGN-SYSTEM directory

**3-Layer Architecture:** PARTIAL. Mentions "provenance chain" (Layer 3) and tokens/patterns. Does not mention Layers 1 or 2 explicitly.

**Pipeline Status:** STALE.
- Line 91: "Start OD work | `provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md`" — OD is COMPLETE. This should say "Start AD work | `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md`"
- Line 106: `patterns/` listed as "Validated rhythms (density complete, org pending)" — org patterns ARE complete (organizational-patterns.md was created in OD provenance chain remediation)

**False/Stale Claims:**
- "Start OD work" entry in HOW TO READ table — OD is done
- patterns/ status: "org pending" — org is complete

**Specific Updates Needed:**
1. UPDATE line 91: Change "Start OD work" to "Start AD work" with path to HANDOFF-OD-TO-AD.md
2. UPDATE line 106: Change "density complete, org pending" to "density complete, org complete"
3. ADD reference to the 3-layer architecture
4. ADD mention of OD provenance chain files (OD-SYNTHESIS.md, etc.)

**Severity:** HIGH — this is a major navigation file and sends agents to wrong entry points

---

### File 3: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/CLAUDE.md`

**Lines:** 141
**Role:** Navigation for provenance directory

**3-Layer Architecture:** IMPLICIT. This IS Layer 3 content, but doesn't explain its relationship to Layers 1 and 2.

**Pipeline Status:** CORRECT. Stage 3 shows COMPLETE, Stage 4/5 show PENDING.

**False/Stale Claims:**
- Line 96-130: The R3-023 chain trace example (Section 5) says "Status: PENDING (OD not started)" for Stage 3. **This is FALSE.** OD is COMPLETE. The walkthrough says "OD-001 through OD-006 must apply fractal self-similarity" as if OD hasn't happened yet — but all 6 ODs are built, audited, and synthesized.

**Specific Updates Needed:**
1. UPDATE Section 5 (R3-023 walkthrough) to reflect OD completion — change Stage 3 status from "PENDING (OD not started)" to "COMPLETE — applied in all 6 OD explorations"
2. ADD mention of the 3-layer architecture and how this directory (Layer 3) relates to inline headers (Layer 1) and light sections (Layer 2)

**Severity:** HIGH — the walkthrough example is the teaching tool and teaches incorrect state

---

### File 4: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-1-components/CLAUDE.md`

**Lines:** 125
**Role:** Navigation for Stage 1 provenance

**3-Layer Architecture:** NO.

**Pipeline Status:** Accurate — Stage 1 is described as complete.

**False/Stale Claims:** None found. All claims about Stage 1 being the foundation are still accurate.

**Specific Updates Needed:**
1. MINOR: Line 90-93 says "Stage 3 (OD): Will inherit same soul pieces + DD findings" — should be updated to reflect OD is COMPLETE and DID inherit those findings (confirmed: no 6th soul piece discovered)
2. ADD brief mention of 3-layer architecture

**Severity:** LOW

---

### File 5: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-2-density-dd/CLAUDE.md`

**Lines:** 129
**Role:** Navigation for Stage 2 (DD) provenance

**3-Layer Architecture:** NO.

**Pipeline Status:** Mostly accurate. DD is shown as complete.

**False/Stale Claims:**
- Line 94: "Stage 3 (OD): Must consume DD-F-006 (fractal) for ALL explorations" — uses imperative "must consume" as if OD hasn't happened. OD is COMPLETE and DID consume DD-F-006 for all explorations.
- Line 97: "Migration: Must pair org patterns with density patterns" — org patterns now exist (organizational-patterns.md created)

**Specific Updates Needed:**
1. UPDATE FEEDS INTO section (lines 93-98) to reflect OD completion — change "Must consume" to "CONSUMED in all 6 OD explorations (verified)"
2. ADD brief mention of 3-layer architecture

**Severity:** LOW-MEDIUM — the "must consume" language implies future work that's already done

---

### File 6: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md`

**Lines:** 145
**Role:** Navigation for Stage 3 (OD) provenance

**3-Layer Architecture:** NO. This is the most complete Stage CLAUDE.md (created during OD provenance chain remediation) but does not describe the 3-layer system.

**Pipeline Status:** CORRECT. Shows OD as COMPLETE with accurate statistics (17 OD-F findings, 89 audit findings, 16 fixes, 0 soul violations).

**False/Stale Claims:** None found. This file was created during the provenance chain remediation and accurately reflects the OD stage.

**Specific Updates Needed:**
1. ADD brief mention of 3-layer architecture
2. NONE ELSE — this is the most up-to-date Stage CLAUDE.md and serves as a model for the others

**Severity:** LOW — only missing 3-layer context

---

### File 7: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/CLAUDE.md`

**Lines:** 97
**Role:** Placeholder navigation for Stage 4 (AD)

**3-Layer Architecture:** NO.

**Pipeline Status:** PARTIALLY STALE.
- Line 18: "HANDOFF-OD-TO-AD.md (not yet created)" — **FALSE.** HANDOFF-OD-TO-AD.md WAS created during the provenance chain remediation (458 lines). It exists at `../stage-3-organization-od/HANDOFF-OD-TO-AD.md`.
- Line 41: References "HANDOFF-OD-TO-AD.md EXISTS and has been read completely" as a gate condition — the file DOES exist now.

**False/Stale Claims:**
- Inline threading header line 18: claims HANDOFF-OD-TO-AD.md "not yet created" — it was created
- The file is still a "placeholder" but should acknowledge that its prerequisites (OD completion + HANDOFF) are now met

**Specific Updates Needed:**
1. UPDATE inline threading header: Remove "(not yet created)" from HANDOFF-OD-TO-AD.md reference
2. UPDATE Section 0 enforcement gate: Note that conditions 1-2 (HANDOFF exists, 17 OD-F findings exist) are now SATISFIED
3. UPDATE Section 3: Acknowledge that `STAGE-HEADER.md` still needs to be created for AD, but that upstream inputs are ready
4. ADD brief mention of 3-layer architecture

**Severity:** HIGH — agents checking this gate will see "not yet created" and may incorrectly conclude AD prerequisites aren't met

---

### File 8: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-5-combination-cd/CLAUDE.md`

**Lines:** 86
**Role:** Placeholder navigation for Stage 5 (CD)

**3-Layer Architecture:** NO.

**Pipeline Status:** Accurate — CD is correctly shown as PENDING, dependent on AD.

**False/Stale Claims:**
- Line 20: "HANDOFF-AD-TO-CD.md (not yet created)" — Correct, AD hasn't happened yet.

**Specific Updates Needed:**
1. ADD brief mention of 3-layer architecture
2. No status updates needed — correctly reflects CD as future work

**Severity:** LOW

---

### File 9: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/original-research/CLAUDE.md`

**Lines:** 108
**Role:** Navigation for original research directory

**3-Layer Architecture:** NO.

**Pipeline Status:** STALE on one critical data point.
- Line 51: R-2 Creative Layouts count listed as "78" — **DISPUTED.** The showcase/CLAUDE.md (file 1) lists R-2 as 27 findings. The R-2 count discrepancy (78 vs 27) is a known issue documented in the research/CLAUDE.md threading header but not resolved here.

**False/Stale Claims:**
- R-2 finding count: 78 (may be 27). The total "337 findings" depends on which R-2 count is correct. If R-2 = 27, total = 337 - 51 = 286. If R-2 = 78, total = 337 + 51 = 388. Note: The showcase/CLAUDE.md explicitly says "337 findings" with R-2 = 27, which means 28+27+51+192+39 = 337. But this file says 28+78+51+192+39 = 388 (not 337). **The math doesn't add up** — this file lists R-2 as 78 but claims 337 total, which is inconsistent (337 only works if R-2 = 27).
- Line 20: The threading header's BUILT ON section lists "Finding counts (28+78+51+192+39=337)" — this arithmetic is wrong: 28+78+51+192+39 = 388, not 337.

**Specific Updates Needed:**
1. RESOLVE R-2 finding count: Is it 78 or 27? The showcase/CLAUDE.md says 27. This file says 78. One must be wrong.
2. FIX arithmetic in threading header: Either change R-2 to 27 (making 337 correct) or change total to 388
3. ADD brief mention of 3-layer architecture

**Severity:** MEDIUM — the R-2 count discrepancy propagates to multiple files

---

### File 10: `docs-spa/app/showcase/knowledge-architecture/CLAUDE.md`

**Lines:** 126
**Role:** Navigation for knowledge-architecture directory

**3-Layer Architecture:** PARTIAL. References "provenance chain" and "threading" but does not name or explain the 3-layer system.

**Pipeline Status:** STALE.
- Line 123: "Phase 2A status: Part 1 COMPLETE, Part 2 COMPLETE, Part 3 IN PROGRESS" — Phase 2D (light sections) is COMPLETE (commit e489549). Phase 2A Part 3 was also completed (dependency-trace/CLAUDE.md created).
- Line 37: "6 documents about the design system's provenance chain" — the directory now contains MORE than 6 documents (workflow metacognition analysis, provenance gap analysis, OD audit results, OD fix execution prompt, etc.)
- The file does not mention: OD GRANULAR AUDIT RESULTS (688 lines), WORKFLOW-METACOGNITION-ANALYSIS, _od-audit-scratchpad/, _provenance-gap-analysis/, _workflow-metacognition/, _remediation/

**False/Stale Claims:**
- "6 documents" — now significantly more
- Phase 2A Part 3 is listed as IN PROGRESS — it's COMPLETE
- No mention of OD audit, fix execution, workflow metacognition, or provenance remediation work

**Specific Updates Needed:**
1. UPDATE "6 documents" to actual count
2. UPDATE Phase 2A Part 3 status to COMPLETE
3. ADD Phase 2B, 2D status (both COMPLETE)
4. ADD references to new subdirectories: _od-audit-scratchpad/, _provenance-gap-analysis/, _workflow-metacognition/, _remediation/
5. ADD references to OD-GRANULAR-AUDIT-RESULTS.md, WORKFLOW-METACOGNITION-ANALYSIS.md
6. EXPLAIN the 3-layer architecture — this is the IDEAL file to house that explanation
7. UPDATE pipeline status to reflect OD COMPLETE

**Severity:** HIGH — this is the meta-documentation directory and is most out of date

---

### File 11: `docs-spa/app/showcase/checkpoints/CLAUDE.md`

**Lines:** 110
**Role:** Navigation for checkpoints directory

**3-Layer Architecture:** NO. Mentions sync to provenance/ but doesn't explain Layer 1/2/3.

**Pipeline Status:** No explicit pipeline status. Describes operational vs archival distinction.

**False/Stale Claims:**
- The WHAT'S HERE table (lines 68-80) only lists DD-era checkpoint files. Does not mention any OD checkpoint files that may exist (e.g., OD-CHECKPOINT.md mentioned in commit 1891d34).

**Specific Updates Needed:**
1. ADD OD checkpoint files to the inventory (OD-CHECKPOINT.md at minimum)
2. ADD mention of the 3-layer architecture and how checkpoints relate to Layer 3 (provenance)
3. UPDATE sync protocol to include OD-stage files synced to provenance/stage-3-organization-od/

**Severity:** MEDIUM

---

### File 12: `docs-spa/app/showcase/dependency-trace/CLAUDE.md`

**Lines:** 56
**Role:** Navigation for dependency-trace directory

**3-Layer Architecture:** NO. This file IS the infrastructure for Layers 1 and 2 but doesn't name them.

**Pipeline Status:** Not stated explicitly.

**False/Stale Claims:** None found. Correctly describes itself as historical analysis data.

**Specific Updates Needed:**
1. ADD explanation of how this directory's classification data powered Layer 1 (Phase 2B) and Layer 2 (Phase 2D)
2. ADD reference to final Phase 2B/2D completion status

**Severity:** LOW

---

### File 13: `docs-spa/app/showcase/explorations/CLAUDE.md`

**Lines:** 93
**Role:** Navigation for explorations directory

**3-Layer Architecture:** NO. References provenance/ (Layer 3) for chain data but doesn't explain the 3-layer system.

**Pipeline Status:** CORRECT. Shows DD and OD as COMPLETE, AD and CD as PENDING.

**False/Stale Claims:** None found.

**Specific Updates Needed:**
1. ADD brief mention of 3-layer architecture
2. MINOR: Section 5 mentions only DD exploration characteristics but not OD characteristics (e.g., realistic documentation content, organizational patterns)

**Severity:** LOW

---

### File 14: `docs-spa/app/showcase/explorations/density/CLAUDE.md`

**Lines:** 99
**Role:** Navigation for density explorations directory

**3-Layer Architecture:** NO.

**Pipeline Status:** Accurate — all 6 DD explorations shown as COMPLETE INCLUDE.

**False/Stale Claims:** None found.

**Specific Updates Needed:**
1. ADD brief mention of 3-layer architecture
2. No other updates needed — accurate content

**Severity:** LOW

---

### File 15: `docs-spa/app/showcase/explorations/organizational/CLAUDE.md`

**Lines:** 91
**Role:** Navigation for organizational explorations directory

**3-Layer Architecture:** NO.

**Pipeline Status:** CORRECT. Shows all 6 OD explorations as COMPLETE.

**False/Stale Claims:**
- Section 5 (Mindset, lines 82-89): "OD may discover COGNITIVE soul pieces" — uses future tense. OD is COMPLETE and the finding was: NO new cognitive soul piece was discovered. The 5 visual soul pieces govern both density and organization. This should be updated to past tense with the actual finding.

**Specific Updates Needed:**
1. UPDATE Section 5: Change from speculative future tense ("OD may discover") to past tense with actual finding ("OD discovered that no new cognitive soul piece emerged — the 5 visual soul pieces govern both density and organization")
2. ADD brief mention of 3-layer architecture
3. ADD reference to the OD synthesis and audit results

**Severity:** MEDIUM — the mindset section teaches incorrect expectations

---

### File 16: `docs-spa/app/showcase/research/CLAUDE.md`

**Lines:** 104
**Role:** Navigation for research directory

**3-Layer Architecture:** NO.

**Pipeline Status:** Contains the acknowledged R-2 count discrepancy.

**False/Stale Claims:**
- Line 60: R-2 listed as "78" findings — the threading header (line 18-21) explicitly acknowledges this as a "known discrepancy" with actual R-2 findings numbering 27. However, the table still shows 78.
- The total "337 findings" appears throughout the system but is arithmetically inconsistent with R-2=78 (would be 388).

**Specific Updates Needed:**
1. RESOLVE the R-2 count: Either confirm 27 (update table) or confirm 78 (update total). The showcase/CLAUDE.md (file 1) uses 27 with total 337.
2. ADD brief mention of 3-layer architecture

**Severity:** MEDIUM — the discrepancy is acknowledged but not fixed

---

## Cross-Cutting Issues

### Issue A: Zero Files Explain the 3-Layer Architecture

**Impact:** HIGH
**Description:** The 3-layer provenance architecture (inline threading headers, light provenance sections, formal provenance chain) is the core structural innovation of this system, yet no CLAUDE.md file explains it. Agents arriving at any directory get orientation on WHAT's there but not HOW the provenance layers work together.

**Recommendation:** Add a 3-layer architecture section to:
1. `knowledge-architecture/CLAUDE.md` (primary — full explanation)
2. `DESIGN-SYSTEM/CLAUDE.md` (secondary — summary with pointer to knowledge-architecture)
3. `showcase/CLAUDE.md` (brief mention in key concepts)

### Issue B: R-2 Finding Count Discrepancy (78 vs 27)

**Impact:** MEDIUM
**Affected files:** Files 1, 9, 16 (and propagated into provenance original-research CLAUDE.md)
**Description:** The showcase/CLAUDE.md says R-2 = 27 findings (making total 337). But research/CLAUDE.md and provenance/original-research/CLAUDE.md say R-2 = 78 findings. The total 337 is inconsistent with R-2=78 (28+78+51+192+39=388).
**Recommendation:** Audit R2-CREATIVE-LAYOUTS.md to get the actual count. Update all files to match.

### Issue C: OD Completion Not Reflected in 5 Files

**Impact:** HIGH
**Affected files:** Files 3, 5, 7, 10, 15
**Description:** These files describe OD work in future tense ("must consume," "OD not started," "OD may discover") when OD is COMPLETE with known outcomes (17 OD-F findings, 89 audit findings, 0 soul violations, no new cognitive soul piece).
**Recommendation:** Update all future-tense OD references to past-tense with actual outcomes.

### Issue D: Provenance Chain Remediation Artifacts Not Referenced

**Impact:** MEDIUM
**Affected files:** Files 2, 10, 11
**Description:** The provenance chain remediation created 6 major new files (OD-outbound-findings, OD-SYNTHESIS, OD-AUDIT-SYNTHESIS, HANDOFF-OD-TO-AD, EXT-RESEARCH-REGISTRY, organizational-patterns) but these are only referenced in the stage-3 CLAUDE.md (file 6). Other navigation files don't know about them.
**Recommendation:** Update navigation tables in DESIGN-SYSTEM/CLAUDE.md and knowledge-architecture/CLAUDE.md to reference these new files.

### Issue E: Phase 2B Timestamp Frozen

**Impact:** LOW
**Affected files:** ALL 16 files (their inline threading headers)
**Description:** All inline threading headers say "Generated: 2026-02-06" — this is the Phase 2B generation date. The headers themselves are not meant to be updated (they're historical records), but this means the file CONTENT may have been updated since the header was generated without the header reflecting it. This is by design.
**Recommendation:** No action needed on headers. But any file whose CONTENT is updated should get a "Last Updated" line in the body.

---

## Priority Matrix

| Priority | File | Issue | Severity |
|----------|------|-------|----------|
| 1 | knowledge-architecture/CLAUDE.md (#10) | Most stale: wrong doc count, wrong phase status, missing 3-layer | HIGH |
| 2 | DESIGN-SYSTEM/CLAUDE.md (#2) | Sends agents to wrong entry point (OD instead of AD) | HIGH |
| 3 | provenance/CLAUDE.md (#3) | Teaching walkthrough has wrong OD status | HIGH |
| 4 | stage-4-axis-ad/CLAUDE.md (#7) | Claims HANDOFF-OD-TO-AD.md "not yet created" when it exists | HIGH |
| 5 | explorations/organizational/CLAUDE.md (#15) | Future-tense speculation when outcomes are known | MEDIUM |
| 6 | original-research/CLAUDE.md (#9) | R-2 count discrepancy + arithmetic error | MEDIUM |
| 7 | research/CLAUDE.md (#16) | R-2 count discrepancy (acknowledged but unfixed) | MEDIUM |
| 8 | checkpoints/CLAUDE.md (#11) | Missing OD checkpoint files in inventory | MEDIUM |
| 9 | showcase/CLAUDE.md (#1) | Missing 3-layer architecture, no pipeline status | MEDIUM |
| 10 | stage-2-density-dd/CLAUDE.md (#5) | Future tense for completed OD work | LOW-MEDIUM |
| 11 | stage-1-components/CLAUDE.md (#4) | Future tense for completed OD work | LOW |
| 12 | dependency-trace/CLAUDE.md (#12) | Missing Layer 1/2 explanation | LOW |
| 13 | explorations/CLAUDE.md (#13) | Minor: no OD characteristics in mindset | LOW |
| 14 | explorations/density/CLAUDE.md (#14) | No issues beyond missing 3-layer | LOW |
| 15 | stage-5-combination-cd/CLAUDE.md (#8) | No issues beyond missing 3-layer | LOW |
| 16 | stage-3-organization-od/CLAUDE.md (#6) | Most current — model for others | LOW |

---

## Recommendations Summary

### Immediate (Block AD work)
1. Fix stage-4-axis-ad/CLAUDE.md to acknowledge HANDOFF-OD-TO-AD.md exists
2. Fix DESIGN-SYSTEM/CLAUDE.md to point to AD start instead of OD start

### Before Next Phase
3. Update knowledge-architecture/CLAUDE.md with current state
4. Fix provenance/CLAUDE.md walkthrough example
5. Resolve R-2 finding count discrepancy across all files

### Structural
6. Write 3-layer architecture explanation in knowledge-architecture/CLAUDE.md
7. Add abbreviated 3-layer references to all other CLAUDE.md files

### Model to Follow
8. Use stage-3-organization-od/CLAUDE.md as the template for updating other stage CLAUDE.md files — it was created most recently and has the most accurate, complete content
