# Plan Revisions: Foundation Files (06-12)

**Revision Agent:** Claude Opus 4.6
**Files Audited:** 06-root-cause-analysis.md, 07-perfect-state-gap-audit.md, 10-dark-matter-census.md, 11-od-quality-assessment.md, 12-prior-stage-chain-audit.md
**Plan Audited:** CLAUDE-PLAN-FOR-REVISION.md (231 lines)

---

## File: 06-root-cause-analysis.md

### What the Plan Gets Right
The plan correctly identifies the enforcement gate as the primary mechanism to prevent recurrence at AD, and the REFERENCE decision for dark matter is consistent with the root cause analysis's finding that information is "unformalized, not lost."

### REVISIONS NEEDED (from this file)

**REVISION 1 -- CRITICAL**
- **Plan Section Affected:** "Resolved Decisions" table, row 4 (Enforcement gate)
- **What's Missing/Wrong:** The plan specifies a binary gate in `stage-4-axis-ad/CLAUDE.md`: "DO NOT begin AD work until HANDOFF-OD-TO-AD.md exists." This addresses Root Cause #1 (no enforcement gate for post-build documentation), but ONLY for the AD transition. The root cause analysis identifies FIVE root causes. Root Causes #2 (audit/fix consumed context budget), #3 (MEMORY.md doesn't track provenance), #4 (inline headers create illusion of completeness), and #5 (DD provenance was written by an unrepeatable pattern) are NOT addressed by the plan.
- **Evidence from Report:** Section 5.1, all 5 factors listed on lines 220-261. Section 7 "SUMMARY OF ROOT CAUSES" lines 315-336 explicitly enumerates all 5.
- **Proposed Fix:** Add to the infra agent's scope:
  1. Add a `## OD Provenance Status: COMPLETE` entry to MEMORY.md (fixes Root Cause #3 -- MEMORY.md blind spot)
  2. Add "Provenance Synthesis -- PENDING" tracking to MEMORY.md for every future stage (systemic fix)
  3. Update the showcase/CLAUDE.md or equivalent to include a PROVENANCE CHECKLIST as a binary gate: "Before marking ANY stage COMPLETE, verify: outbound-findings.md EXISTS, HANDOFF-X-TO-Y.md EXISTS, STAGE-HEADER.md says COMPLETE" (fixes Root Cause #1 systemically, not just for AD)

**REVISION 2 -- HIGH**
- **Plan Section Affected:** Wave 4: Infrastructure, infra agent scope
- **What's Missing/Wrong:** Root Cause #3 states: "MEMORY.md records 'OD Fix Execution -- COMPLETE' but does not have an entry for 'OD Provenance Synthesis -- PENDING.' The provenance gap is invisible in the persistent memory layer." The plan's infra agent updates 10 files, but MEMORY.md is not among them. The plan nowhere specifies updating MEMORY.md to reflect the provenance remediation.
- **Evidence from Report:** Lines 234-236 (Root Cause #3), Lines 322-324 (Contributing Cause 2)
- **Proposed Fix:** Add MEMORY.md to infra agent's update list (file #11): Update the "Current Phase" section to record that OD Provenance Remediation is COMPLETE, and add provenance completion as an explicit tracked deliverable.

**REVISION 3 -- HIGH**
- **Plan Section Affected:** Entire plan structure
- **What's Missing/Wrong:** Root Cause #5 identifies that DD's provenance was written as a "dedicated documentation session" -- a one-off organic event that was "never explicitly identified as a required process step." The plan fixes the OD provenance gap but does not create any mechanism to ensure the same dedicated documentation session happens for AD and CD. The plan should create a PROVENANCE-FORMALIZATION-PROTOCOL or add provenance synthesis as a MANDATORY phase in the stage lifecycle.
- **Evidence from Report:** Lines 330-336 (Contributing Cause 5), Lines 239-261 (Section 5.2 "Could This Recur at AD and CD?")
- **Proposed Fix:** Add an output to Wave 3 (gate agent): In addition to HANDOFF-OD-TO-AD.md, the gate agent should write a brief PROVENANCE-CHECKLIST-TEMPLATE.md (10-20 lines) that enumerates the binary gates for ANY future stage's provenance completion. This template gets embedded in stage-4-axis-ad/CLAUDE.md as a mandatory checklist.

**REVISION 4 -- MEDIUM**
- **Plan Section Affected:** Wave 2: Chain Builders, chain-a agent
- **What's Missing/Wrong:** Root Cause #4 states that "inline headers created an illusion of completeness." The plan's chain-a agent writes OD-SYNTHESIS.md and OD-AUDIT-SYNTHESIS.md, but the plan does not specify that these documents should explicitly distinguish between what is IN inline headers vs what is NEW synthesis. A fresh reader may still be confused about whether the provenance directory duplicates the inline headers or adds something beyond them.
- **Evidence from Report:** Lines 126-163 (Section 3 "The Identity/Pipeline Divergence"), especially line 159: "Inline headers are written DURING creation... Provenance documents are written AFTER creation."
- **Proposed Fix:** Add to chain-a's prompt specification: OD-SYNTHESIS.md must include a section titled "What This Document Adds Beyond Inline Headers" that explicitly states the unique value of cross-OD analysis not available in any single inline header.

**REVISION 5 -- MEDIUM**
- **Plan Section Affected:** Wave 3: Gate, gate agent reads
- **What's Missing/Wrong:** The root cause analysis notes that the OD-CHECKPOINT.md (line 8-10) records "Currently Working On: Synthesis documents" and "Next Action: OD synthesis documents -> HANDOFF-OD-TO-AD." The plan's gate agent does not read OD-CHECKPOINT.md, which means it cannot verify the checkpoint's claimed next actions are now completed.
- **Evidence from Report:** Lines 169-179 (Section 4.1 "The Checkpoint Tells the Story")
- **Proposed Fix:** Add `checkpoints/OD-CHECKPOINT.md` to the gate agent's read list. The gate agent should also update OD-CHECKPOINT.md's "Currently Working On" and "Next Action" fields to reflect completion, or alternatively, add this to the infra agent's update list.

---

## File: 07-perfect-state-gap-audit.md

### What the Plan Gets Right
The plan correctly identifies the 5 CRITICAL gaps (GAP-001 through GAP-004 and GAP-031) and assigns them to specific agents. The 6 new files and 10 updated files cover the most important structural gaps.

### REVISIONS NEEDED (from this file)

**REVISION 6 -- CRITICAL**
- **Plan Section Affected:** Gap Coverage Matrix, specifically the "9 HIGH Gaps" section
- **What's Missing/Wrong:** The plan lists 10 HIGH gaps (GAP-005 through GAP-011, GAP-016, GAP-022, GAP-026) but the gap audit identifies 10 HIGH gaps (the plan's count says "9" in the section header but lists 10). More importantly, GAP-016 (OD-F findings have no formal lifecycle record) is assigned to census-a, but the plan's census-a specification (lines 98-107) says census-a writes OD-outbound-findings.md with "OD-F-001 through OD-F-012, consumption matrix, DD-F verification." The plan does NOT specify that census-a must add formal lifecycle records (discovery date, validation evidence, current status, consuming stages) to each OD-F finding. Without lifecycle records, OD-F findings will be structurally weaker than DD-F findings.
- **Evidence from Report:** GAP-016 definition (lines 533-546): "Each OD-F finding has: discovery date, source exploration, validation evidence, current status, consuming stages." Compare to DD-outbound-findings.md which has "ID, Finding text, Source exploration, Score basis, Target stage(s), Chain Impact narrative."
- **Proposed Fix:** Add to census-a prompt: "Each OD-F entry must include: (a) Source exploration, (b) Discovery context, (c) Validation evidence (audit reference if verified), (d) Current status (EXEMPLARY/ACTIVE/PENDING), (e) Target consuming stages, (f) Chain Impact narrative. Use DD-outbound-findings.md as the structural template -- match its column structure exactly."

**REVISION 7 -- CRITICAL**
- **Plan Section Affected:** OD-F Finding Registry (lines 215-231)
- **What's Missing/Wrong:** The plan lists OD-F-001 through OD-F-012, with OD-F-009 through OD-F-012 marked as "NEW." But the gap audit's GAP-017 (lines 549-564) identifies that OD-002 through OD-005 each have key insights documented in OD-CHECKPOINT that were NEVER elevated to formal findings. The plan's new findings (OD-F-009 through OD-F-012) exactly match these key insights, which is correct. However, the plan does not specify WHERE the data for these new findings comes from. Census-a needs explicit instructions to extract from OD-CHECKPOINT.md per-OD key insight entries, not just from inline headers.
- **Evidence from Report:** GAP-017 (lines 549-564): "OD-002: 'Narrative arc NATURALLY creates CRESCENDO density', OD-003: 'Task-based structure NATURALLY creates ISLANDS density'..." These are listed at specific locations in OD-CHECKPOINT.md.
- **Proposed Fix:** Add to census-a's read list: "Extract OD-F-009 through OD-F-012 from the per-OD key insight entries in OD-CHECKPOINT.md. Each must be formalized with the same rigor as OD-F-001 through OD-F-008."

**REVISION 8 -- HIGH**
- **Plan Section Affected:** Gap Coverage Matrix, "14 MEDIUM Gaps" (line 186 says "All assigned -- see full plan" but no full plan content is provided)
- **What's Missing/Wrong:** The plan references a "full plan" for MEDIUM gap assignments but does not include them. 14 MEDIUM gaps (GAP-013 through GAP-015, GAP-017 through GAP-021, GAP-023 through GAP-025, GAP-027, GAP-028, GAP-032) are unspecified. This is the single biggest hole in the plan. Specifically:
  - **GAP-013** (DD-outbound successor pointer broken): Who fixes line 6 of DD-outbound-findings.md?
  - **GAP-014** (OD STAGE-HEADER inline threading header says "OD work has not begun"): Who updates line 33?
  - **GAP-015** (PIPELINE-MANIFEST DD-F consumption matrix still shows PENDING for OD): Who updates the consumption column?
  - **GAP-017** (OD-002/003/004/005 formal findings): Addressed by OD-F-009-012 but not explicitly assigned.
  - **GAP-018** (R-1 application status not finalized): Who adds the post-build verification column to OD-RESEARCH-GATE?
  - **GAP-019** (EXT-* findings not in pipeline): census-b handles this, but the gap table doesn't say so.
  - **GAP-020** (Scoring rubric not documented): Not assigned to ANY agent.
  - **GAP-021** (Score dimension breakdowns missing for OD-002-006): Not assigned.
  - **GAP-023** (No paths-not-taken record): Not assigned.
  - **GAP-024** (72 audit findings have no formal disposition): Not assigned.
  - **GAP-025** (Emergence reasoning chains incomplete): Not assigned.
  - **GAP-027** (Anti-pattern registry no OD updates): chain-b appends to registry, but the specific "2px border epidemic" anti-pattern is not mentioned.
  - **GAP-028** (Soul compliance matrix missing OD rows): Not assigned. BACKBONE.md update (infra) says "Rewrite Section 4" but doesn't specify adding OD rows to Section 9.
  - **GAP-032** (OD-006 CREATIVE-RESEARCH-FEED orphaned): Not assigned.
- **Evidence from Report:** The full Master Gap Table (lines 870-906) lists all 33 gaps with severity, raw material locations, and traversals broken. 14 MEDIUM + 3 LOW = 17 gaps that are referenced as "assigned" but whose assignments are not visible in the plan.
- **Proposed Fix:** Create an explicit assignment table for ALL 33 gaps. For gaps that cannot be fully resolved in this remediation:
  - GAP-020 (scoring rubric): Add to OD-SYNTHESIS.md a section "Scoring Approach" explaining the rubric used, even if it's perceptual.
  - GAP-021 (score breakdowns): chain-a should extract or estimate breakdowns from audit data where possible.
  - GAP-023 (paths not taken): Add a section to OD-SYNTHESIS.md "Negative Space: Paths Not Taken."
  - GAP-024 (72 audit finding dispositions): Add to OD-AUDIT-SYNTHESIS.md a section "Finding Disposition Summary" categorizing all 89 findings.
  - GAP-025 (emergence reasoning): Add to OD-SYNTHESIS.md "Emergence: Evidence Chains."
  - GAP-028 (soul matrix OD rows): Add to infra agent's BACKBONE.md update: extend Section 9 with OD-001 through OD-006 rows.
  - GAP-032 (research feed linkage): Add to census-b's EXT-RESEARCH-REGISTRY.md a reference to OD-006-CREATIVE-RESEARCH-FEED.md.

**REVISION 9 -- HIGH**
- **Plan Section Affected:** Wave 2: chain-a, OD-AUDIT-SYNTHESIS.md specification
- **What's Missing/Wrong:** The gap audit defines GAP-005 as needing an audit synthesis "equivalent to DD's DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md" (lines 319-335). The plan says chain-a writes OD-AUDIT-SYNTHESIS.md containing "89 findings, 16/16 fixes, 2 false positives, soul matrix, methodology." But the plan does NOT specify that chain-a must also address:
  1. The 3-quality-dialect formal documentation (GAP-003 overlap, lines 85-92 of the gap audit)
  2. The audit-to-fix mapping (GAP-024: which of the 89 findings became which of the 17 fix items)
  3. Score adjustments post-audit (did scores change after the audit+fix cycle?)
  4. The scratchpad as evidence references (the 29 files should be referenced, not included)
- **Evidence from Report:** Perfect state definition 1.12 Audit Integration (lines 209-219), especially point 6: "Scratchpad as evidence, not provenance."
- **Proposed Fix:** Expand chain-a's OD-AUDIT-SYNTHESIS.md specification:
  - Must include a "Finding Severity Distribution" table (8C, 6H, 16M, 8L, ~51N)
  - Must include an "89 Findings -> 17 Fix Items" mapping summary
  - Must include "3 Quality Dialects" formal description with per-OD classification
  - Must include "Post-Fix Score Assessment" section
  - Must reference (not include) scratchpad files as evidence sources

**REVISION 10 -- HIGH**
- **Plan Section Affected:** Wave 4: infra agent, BACKBONE.md update
- **What's Missing/Wrong:** The plan says infra updates BACKBONE.md by "Rewrite Section 4 to past tense." But the gap audit identifies THREE specific BACKBONE.md sections that need updating:
  1. Section 4 (Stage 3 narrative) -- plan addresses this
  2. Section 8 "Generated Research Flow" (line 297 shows "OD-F-### | TBD") -- plan does NOT address this
  3. Section 9 "Soul Pieces Matrix" (no OD rows) -- plan does NOT address this (GAP-028)
  4. Section 10 causal chain diagram (line 331 shows "OD organizational explorations (in progress)") -- plan does NOT address this
- **Evidence from Report:** GAP-010 (lines 430-449), GAP-028 (lines 756-769)
- **Proposed Fix:** Expand infra agent's BACKBONE.md scope to: "Rewrite Section 4 (narrative). Update Section 8 (add OD-F-001 through OD-F-012 to Generated Research Flow). Add OD rows to Section 9 (Soul Pieces Matrix). Update Section 10 causal chain (OD -> COMPLETE)."

**REVISION 11 -- HIGH**
- **Plan Section Affected:** Wave 4: infra agent, OD-RESEARCH-GATE.md update
- **What's Missing/Wrong:** The plan says infra updates OD-RESEARCH-GATE.md by "Add post-build verification addendum." But GAP-008 (lines 386-404) specifies that this addendum needs: (a) an APPLIED/NOT-APPLIED column for each R-1 finding, (b) the delta between planned and actual application with explanations, and (c) the actual application rate (not just the planned 86% mapping rate). The plan does not specify the content of this addendum at all.
- **Evidence from Report:** GAP-008 perfect state definition: "a 'What Was Actually Applied' addendum showing APPLIED/NOT-APPLIED status for each finding with evidence, the delta between planned and actual application with explanations."
- **Proposed Fix:** Specify infra agent's OD-RESEARCH-GATE addendum content: "Add Section 3: Post-Build Verification. For each of the 24 mapped R-1 findings, add an APPLIED/NOT-APPLIED column with evidence source (OD inline header reference). Add a summary: X/24 planned findings applied, Y additional findings applied that were not planned, final R-1 application rate = Z%."

**REVISION 12 -- MEDIUM**
- **Plan Section Affected:** Wave 4: infra agent, PIPELINE-MANIFEST.md update
- **What's Missing/Wrong:** The plan says "Add OD-F Section B, update counts." But the gap audit identifies FOUR sections that need updating:
  1. Section B: OD-F-001 through OD-F-012 entries (plan addresses)
  2. Section C: Soul piece determination from OD (plan does NOT address -- GAP-026 is assigned to SOUL-DISCOVERIES but the PIPELINE-MANIFEST soul piece row also needs updating)
  3. Section D: Organizational patterns provenance table (plan does NOT address)
  4. Section F: Finding lifecycle state counts (plan does NOT address)
  Additionally, the DD-F consumption matrix in Section B needs updating from PENDING to APPLIED (GAP-015).
- **Evidence from Report:** GAP-009 (lines 410-427), GAP-015 (lines 514-528)
- **Proposed Fix:** Expand infra agent's PIPELINE-MANIFEST scope: "Section B: Add OD-F-001 through OD-F-012 entries AND update DD-F consumption matrix (PENDING -> APPLIED per OD). Section C: Update soul piece TBD row with OD determination. Section D: Add organizational patterns table. Section F: Update lifecycle counts to include OD-F findings."

**REVISION 13 -- MEDIUM**
- **Plan Section Affected:** Verification Protocol, "Post-Commit Traversal Test" (lines 208-211)
- **What's Missing/Wrong:** The plan proposes 3 traversal tests. But the gap audit defines 13 traversal dimensions (Forward, Backward, Cross, Accumulation, Finding Lifecycle, Score Justification, Decision Documentation, Negative Space, Emergence Tracking, Soul Evolution, Anti-Pattern Evolution, Audit Integration, Reproducibility). The 3 proposed tests cover Forward and Backward, but not Cross-Traversability, Accumulation Integrity, or Reproducibility.
- **Evidence from Report:** Traversal Impact Summary (lines 921-937) shows 13 dimensions with specific gaps affecting each.
- **Proposed Fix:** Add 2 additional traversal tests:
  4. Cross-traversability: "Open OD-SYNTHESIS.md. Can you answer 'What is the relationship between OD-003 and OD-005?' without reading the HTML files?"
  5. Reproducibility: "Read ONLY provenance/stage-3-organization-od/ directory. Can you reconstruct what OD produced, what it consumed, what findings it generated, and what quality it achieved?"

---

## File: 10-dark-matter-census.md

### What the Plan Gets Right
The REFERENCE decision (distill findings from dark matter into formal chain, leave dark matter in place) is exactly right per the census's recommendations. Census-b correctly targets EXT-* findings from the 3 external research files.

### REVISIONS NEEDED (from this file)

**REVISION 14 -- CRITICAL**
- **Plan Section Affected:** Wave 1: census-a read list (lines 98-102)
- **What's Missing/Wrong:** The census identifies 5 CRITICAL dark matter files (lines 323-376):
  1. ACCUMULATED-IDENTITY-v1.md (539 lines) -- census-a does NOT read this
  2. OD-004-EXTERNAL-RESEARCH.md (680 lines) -- census-b reads this (correct)
  3. OD-005-EXTERNAL-RESEARCH.md (1,725 lines) -- census-b reads this (correct)
  4. OD-GRANULAR-AUDIT-RESULTS.md (620 lines) -- chain-a reads this (correct)
  5. PHASE-1B-MEGA-DEBRIEF.md (2,632 lines) -- NO AGENT reads this

  Additionally, 2 CRITICAL scratchpad dark matter files are not read by any agent:
  6. identity-brief.md (522 lines) -- independent identity brief with 55 EXT-* findings
  7. fresh-eyes.md (324 lines) -- the adversarial audit that discovered 3 quality dialects and the 108 thin-border epidemic

  The census also identifies **~89 finding IDs that exist ONLY in dark matter** (line 475). The plan's census agents would miss finding IDs that aren't in the files they're assigned to read. Specifically, the F-E-001 through F-E-005 fresh-eyes findings and CA-001 through CA-005 contrast-accessibility findings are not captured by any agent's read list.
- **Evidence from Report:** Section 4A "Finding IDs in Dark Matter" (lines 460-475): "TOTAL UNIQUE: ~89, 0 in formal chain." Section 2C (lines 321-351): 5 CRITICAL dark matter files with unique data descriptions.
- **Proposed Fix:**
  1. Add ACCUMULATED-IDENTITY-v1.md to census-a's read list -- it contains the most complete list of OD-F findings (11, not just 8) and all EXT-* finding counts.
  2. Add identity-brief.md to census-b's read list -- it contains 55 EXT-* citations with soul test results that census-b needs for the EXT-RESEARCH-REGISTRY.
  3. Add fresh-eyes.md to chain-a's read list -- it contains F-E-001 through F-E-005 findings that should be referenced in OD-AUDIT-SYNTHESIS.md.
  4. The F-E-* and CA-* finding IDs do NOT need formal provenance registration (they are audit-internal findings), but OD-AUDIT-SYNTHESIS.md should reference them.

**REVISION 15 -- HIGH**
- **Plan Section Affected:** Wave 1: census-b, EXT-RESEARCH-REGISTRY.md specification
- **What's Missing/Wrong:** The plan says census-b writes EXT-RESEARCH-REGISTRY.md with "~56 EXT findings across 6 categories." But the dark matter census (Section 4A, lines 460-475) identifies a more precise count:
  - EXT-CONV: 5 findings
  - EXT-CREATIVE: 12 findings
  - EXT-CONF: 12 findings
  - EXT-TASK: 12 findings
  - EXT-SPAT: 12 findings
  - EXT-DENSITY: 3 findings
  - **Total: 56 EXT-* findings**

  The plan's count is approximately right, but census-b only reads 3 files (OD-004-EXTERNAL-RESEARCH, OD-005-EXTERNAL-RESEARCH, OD-006-CREATIVE-RESEARCH-FEED). The EXT-CONV-001 through 005 and EXT-DENSITY-001 through 003 findings exist ONLY in OD-001's inline header and in identity-brief.md. Census-b's read list does not include OD-001's inline header or identity-brief.md, so it will MISS 8 findings.
- **Evidence from Report:** Line 464: "EXT-CONV-001 through 005 | OD-001 inline header + identity-brief.md | 5 | NO." Line 469: "EXT-DENSITY-001 through 003 | OD-001 inline header | 3 | NO."
- **Proposed Fix:** Add to census-b's read list: (a) OD-001-conversational.html first 150 lines (for EXT-CONV and EXT-DENSITY findings), and (b) _od-audit-scratchpad/identity-brief.md (for the complete EXT-* catalogue with soul test results). Census-b already reads "All 6 OD HTML files (first 150 lines)" -- verify that OD-001 is included and that census-b is instructed to extract EXT-CONV and EXT-DENSITY finding IDs from it.

**REVISION 16 -- HIGH**
- **Plan Section Affected:** Wave 1: census-a, OD-F count
- **What's Missing/Wrong:** The plan's OD-F Finding Registry (lines 215-231) lists OD-F-001 through OD-F-012 (12 findings). But the dark matter census (line 470) states: "OD-F-001 through OD-F-011 | OD-GRANULAR-AUDIT-RESULTS.md + identity-brief.md + ACCUMULATED-IDENTITY-v1.md | 11 | NO." There is a discrepancy: the plan claims 12 OD-F findings, the census claims 11. The plan's OD-F-012 ("Hub-Spoke as Natural WAVE" from OD-005) may not exist in any source file -- it may be a plan-created finding rather than an extraction from existing data. Census-a needs to VERIFY whether each planned finding ID already exists in source material or is being newly created.
- **Evidence from Report:** Line 470: "OD-F-001 through OD-F-011" -- note this is 11, not 12. The plan (line 230) lists OD-F-012 as "NEW."
- **Proposed Fix:** Census-a must be instructed: "Verify each OD-F finding against source material. For findings OD-F-009 through OD-F-012: if the finding's key insight text exists in OD-CHECKPOINT.md or inline headers, it is an EXTRACTION. If it does not exist anywhere, it is a NEW CREATION and must be flagged as such with explicit justification."

**REVISION 17 -- HIGH**
- **Plan Section Affected:** Dark matter referencing strategy
- **What's Missing/Wrong:** The plan's REFERENCE decision (line 20) says "Only finding IDs/scores/insights extracted into formal chain. Dark matter stays in place." But the plan does NOT specify HOW the formal chain documents will reference dark matter. The census (Section 6B, lines 549-564) provides a priority-ordered reference list of 10 files that should be referenced from the formal chain. The plan has no mechanism for adding these references.
- **Evidence from Report:** Section 6B "Preserve Unique Dark Matter" (lines 549-564): P0 files (ACCUMULATED-IDENTITY, OD-GRANULAR-AUDIT-RESULTS, external research) and P1 files (RETROACTIVE-AUDIT, PHASE-1B-MEGA-DEBRIEF, etc.) with specific "Reference from X" instructions.
- **Proposed Fix:** Add to chain-a (OD-SYNTHESIS.md and OD-AUDIT-SYNTHESIS.md) and gate (HANDOFF-OD-TO-AD.md): Each document must include a "Source Evidence" or "Dark Matter References" section that lists the operational files containing raw evidence, with relative file paths. At minimum: ACCUMULATED-IDENTITY-v1.md, OD-GRANULAR-AUDIT-RESULTS.md, OD-004/005/006-EXTERNAL-RESEARCH.md, fresh-eyes.md.

**REVISION 18 -- MEDIUM**
- **Plan Section Affected:** Wave 1: census-b, mirrored file divergence
- **What's Missing/Wrong:** The census identifies 6 mirrored file pairs (Section 5B, lines 510-519) with divergence risk. RESEARCH-ACTIVE.md is flagged as MEDIUM divergence risk ("checkpoints version may be newer"). The plan's infra agent updates `provenance/RESEARCH-ACTIVE.md` (line 79) but does not verify whether the `checkpoints/RESEARCH-ACTIVE.md` copy is newer or divergent. If the checkpoints version has OD-era updates that the provenance version doesn't, the infra agent could be working from stale data.
- **Evidence from Report:** Line 515: "Research Application Status | checkpoints/RESEARCH-ACTIVE | provenance/RESEARCH-ACTIVE | MEDIUM (checkpoints version may be newer)."
- **Proposed Fix:** Add to infra agent instructions: "Before updating provenance/RESEARCH-ACTIVE.md, diff against checkpoints/RESEARCH-ACTIVE.md. If the checkpoints version is newer, use it as the base for updates."

**REVISION 19 -- MEDIUM**
- **Plan Section Affected:** Team Architecture, no agent assigned to FINDINGS-INDEX.md
- **What's Missing/Wrong:** The census identifies FINDINGS-INDEX.md (516 lines) as a dark matter file containing the master cross-cutting index of all findings (census item #86, line 154). This file would need to be updated with OD-F-001 through OD-F-012 entries. No agent is assigned to update it.
- **Evidence from Report:** Line 154: "Master finding index (all R1-R5, components, tokens)" with "Should Be: YES"
- **Proposed Fix:** Either: (a) Add FINDINGS-INDEX.md to infra agent's update list, or (b) Explicitly note it as out-of-scope for this remediation with a deferred task.

---

## File: 11-od-quality-assessment.md

### What the Plan Gets Right
The plan correctly creates OD-AUDIT-SYNTHESIS.md to capture the audit data, and the census agents correctly target the external research files for formalization.

### REVISIONS NEEDED (from this file)

**REVISION 20 -- CRITICAL**
- **Plan Section Affected:** Wave 1: census-b, EXT-RESEARCH-REGISTRY.md
- **What's Missing/Wrong:** The quality assessment's most significant finding is the R-2 non-consumption: "R-2 Creative Layouts (27 findings, 0% consumed)" (Section 3C, lines 109-127). The plan's EXT-RESEARCH-REGISTRY captures external research created DURING OD (EXT-* findings). But R-2 is not external research -- it is EXISTING formal research (R2-001 through R2-027) that was NEVER CONSUMED. The plan has NO mechanism to document this non-consumption. The HANDOFF-OD-TO-AD.md must explicitly flag R-2 as "27 findings available, 0% consumed by OD, potentially applicable to AD" so that AD doesn't repeat the same oversight.
- **Evidence from Report:** Lines 109-127 (Section 3C), Lines 262-266 (Question 3 verdict), Appendix B (lines 350-358) showing R-2: 0% applied.
- **Proposed Fix:**
  1. Gate agent's HANDOFF-OD-TO-AD.md must include a "Research Consumption Gaps" section explicitly stating: "R-2 Creative Layouts (27 findings) was available but 0% consumed by OD. AD should evaluate R-2 applicability before building."
  2. Chain-a's OD-SYNTHESIS.md must include the research application rates table (Appendix B data: R-1 71%, R-2 0%, EXT-* 85%) as this is a key cross-OD quality metric.

**REVISION 21 -- HIGH**
- **Plan Section Affected:** Wave 2: chain-a, OD-SYNTHESIS.md specification
- **What's Missing/Wrong:** The quality assessment reveals a crucial insight about research consumption: "bespoke, targeted research is more easily consumed than pre-existing broad research" (line 361). The EXT-* application rate (85%) significantly exceeds the R-1 application rate (71%). This is a methodological finding about HOW research is best consumed. The plan's OD-SYNTHESIS.md does not capture this insight.
- **Evidence from Report:** Appendix B (lines 350-358): "R-1: 71%, EXT-* (new): ~85%." Line 361: "bespoke, targeted research is more easily consumed."
- **Proposed Fix:** Add to chain-a's OD-SYNTHESIS.md specification: Include a "Research Consumption Analysis" section documenting: (a) R-1 application rate of 71% (target was 80%), (b) R-2 at 0%, (c) EXT-* at 85%, (d) the insight that bespoke research achieves higher consumption, (e) recommendation for AD to use the bespoke research model AND existing research in tandem.

**REVISION 22 -- HIGH**
- **Plan Section Affected:** Wave 2: chain-a, and Wave 3: gate agent
- **What's Missing/Wrong:** The quality assessment documents that OD-002 is the only OD that received NO external research enrichment and scored lowest at 33/40 (Section recommendations, line 314: "OD-002 received only R-1 findings (no EXT-* findings) and scored lowest (33/40)"). This correlation between external research enrichment and quality score is a finding about the OD process that should be captured in the formal chain. The plan does not capture this.
- **Evidence from Report:** Lines 300-302: "2%: OD-002 received no external research enrichment (unlike OD-001 v2, OD-003, OD-004, OD-005, OD-006 which all received EXT-* findings)." Line 314: "The correlation is suggestive."
- **Proposed Fix:** Chain-a's OD-SYNTHESIS.md should include this in the quality analysis: "OD-002 (no external research) scored 33/40. All externally-enriched ODs scored higher. Future stages should ensure ALL explorations receive external research."

**REVISION 23 -- MEDIUM**
- **Plan Section Affected:** Wave 3: gate agent, HANDOFF-OD-TO-AD.md specification
- **What's Missing/Wrong:** The quality assessment provides 5 specific recommendations for future phases (lines 306-316). The plan's gate agent writes HANDOFF-OD-TO-AD.md with generic sections (PURPOSE, Patterns, Findings, Soul, Quality Bar, Research, Lessons, Responsibilities, Pairings, Acknowledgment). But the plan does NOT specify that the "Lessons" section must include the 5 quality assessment recommendations:
  1. Gate ALL research streams, not just primary
  2. Require RESEARCH-SYNTHESIS.md citation
  3. Generate accumulated identity at phase END
  4. Ensure all explorations receive external research
  5. Complete provenance chain before moving to next stage
- **Evidence from Report:** Lines 306-316 (Recommendations section)
- **Proposed Fix:** Add to gate agent's prompt: "The Lessons section of HANDOFF-OD-TO-AD.md MUST include these 5 process lessons from OD: [enumerate all 5 from the quality assessment]."

**REVISION 24 -- MEDIUM**
- **Plan Section Affected:** Wave 2: chain-a, OD-SYNTHESIS.md
- **What's Missing/Wrong:** The quality assessment provides a complete File Consumption Matrix (Appendix A, lines 320-346) showing every file that was available to OD and whether it was consumed. This matrix is the definitive record of OD's research inputs. The plan does not specify that OD-SYNTHESIS.md should include this data.
- **Evidence from Report:** Appendix A (lines 320-346): 23 files listed with "Available Before OD Build? / Consumed by OD? / Evidence" columns.
- **Proposed Fix:** Chain-a should include a condensed version of the File Consumption Matrix in OD-SYNTHESIS.md, showing at minimum: (a) files consumed (with evidence), (b) files available but NOT consumed (R-2, RESEARCH-SYNTHESIS.md), (c) files generated during build (3 EXT-* research files).

---

## File: 12-prior-stage-chain-audit.md

### What the Plan Gets Right
The plan correctly focuses on the Stage 3 provenance gap and does not attempt to retroactively fix Stages 1 and 2, which aligns with the report's finding that prior stages' gaps are independent rather than cascading.

### REVISIONS NEEDED (from this file)

**REVISION 25 -- CRITICAL**
- **Plan Section Affected:** Wave 4: infra agent, RESEARCH-ACTIVE.md update
- **What's Missing/Wrong:** The prior-stage chain audit reveals a COMPOUNDING tracking drift in RESEARCH-ACTIVE.md: "RESEARCH-ACTIVE.md shows 327 UNAPPLIED when real number is ~265" (line 321). The plan says infra agent "Finalize R-1 application status" for RESEARCH-ACTIVE.md. But the report identifies that the problem is BROADER than R-1: PIPELINE-MANIFEST claims ~48 R-3 findings applied by DD, while RESEARCH-ACTIVE.md shows only 10 total applied (lines 137-139, 316-323). The infra agent's scope is too narrow -- it would finalize R-1 status but leave the R-3 discrepancy unresolved, perpetuating the compounding drift.
- **Evidence from Report:** Section 5B-5C (lines 300-323): "Stage 2: ~48 R-3 findings applied, RESEARCH-ACTIVE.md NOT updated (10 shown). Stage 3: ~24 R-1 findings applied, RESEARCH-ACTIVE.md NOT updated (still shows 10)."
- **Proposed Fix:** Expand infra agent's RESEARCH-ACTIVE.md scope: "Finalize R-1 application status for OD AND resolve the R-3 application discrepancy from DD. PIPELINE-MANIFEST claims ~48 R-3 applied; RESEARCH-ACTIVE shows 10. Either: (a) backfill RESEARCH-ACTIVE with the DD application data from RETROACTIVE-AUDIT-DD-001-006.md, or (b) add a note acknowledging the discrepancy and stating which source is authoritative." Option (a) is preferred but may exceed the agent's context budget.

**REVISION 26 -- HIGH**
- **Plan Section Affected:** Entire plan, scope definition
- **What's Missing/Wrong:** The prior-stage chain audit identifies "Two Provenance Modes" (Section 6, lines 339-358):
  - Mode A: "Build First, Document Later" (Stages 1 and 2)
  - Mode B: "Document Everything, Formalize Never" (Stage 3 / OD)
  - Mode C (recommended): "Document During, Formalize Continuously"

  The plan is executing a Mode A retroactive formalization for OD's Mode B data. This is a valid immediate fix. But the plan does NOT establish Mode C for AD, which is the report's primary recommendation (line 358). The HANDOFF-OD-TO-AD.md should define Mode C as the process for AD.
- **Evidence from Report:** Lines 339-358 (two provenance modes), line 358: "The pipeline needs a hybrid where provenance documents are created incrementally during work, not in a separate retroactive phase."
- **Proposed Fix:** Add to gate agent's HANDOFF-OD-TO-AD.md specification: Include a "Provenance Mode" section that defines Mode C for AD: "AD provenance documents should be created INCREMENTALLY during the build phase, not retroactively. After each AD exploration, update the Stage 4 outbound-findings.md immediately. After the last AD exploration, SYNTHESIS and HANDOFF are the only remaining tasks." This is a process change that prevents the exact gap pattern that occurred in OD.

**REVISION 27 -- HIGH**
- **Plan Section Affected:** Wave 4: infra agent, scope
- **What's Missing/Wrong:** The prior-stage chain audit identifies 2 DD-era audit files that should be synced to DD's provenance directory (Section 3A, lines 190-194): RETROACTIVE-AUDIT-DD-001-006.md and VISUAL-AUDIT-DD-001-006.md. The plan's infra agent updates OD and pipeline-level files but does NOT address DD-era gaps. The report recommends this backfill (line 418: "Sync RETROACTIVE-AUDIT-DD-001-006.md and VISUAL-AUDIT-DD-001-006.md to DD's provenance directory").
- **Evidence from Report:** Lines 190-194 (DD checkpoint files not synced to provenance), Lines 417-418 (Recommendation #2).
- **Proposed Fix:** This is a scope decision. Either: (a) Add 2 file syncs to infra agent (copy/reference RETROACTIVE-AUDIT and VISUAL-AUDIT to DD's provenance directory -- LOW effort, HIGH value for chain completeness), or (b) Defer as out-of-scope for OD remediation. RECOMMEND option (a) if context budget allows; these are simple copy operations.

**REVISION 28 -- HIGH**
- **Plan Section Affected:** Wave 4: infra agent, STAGE-HEADER update
- **What's Missing/Wrong:** The prior-stage chain audit reveals that Stages 1 and 2 have "hidden gaps masked by 'COMPLETE' labels" (Section 7, lines 362-411). The plan rewrites OD's STAGE-HEADER to COMPLETE status, but the plan does NOT specify that the COMPLETE label must be accompanied by specific completion evidence. Stages 1 and 2's COMPLETE labels are credible because they include detailed narratives. The plan should specify what evidence makes OD's STAGE-HEADER credibly COMPLETE.
- **Evidence from Report:** Lines 398-406 (Stage 1 and 2 hidden gaps masked by COMPLETE labels). Conclusion line 401: "The 'complete' label means 'the formalization documents exist' -- not 'the full operational record is preserved.'"
- **Proposed Fix:** Infra agent's STAGE-HEADER.md rewrite must include: (a) Past-tense narrative of what OD produced, (b) Consumed/Produced tables with actual values (not placeholders), (c) Quality Achieved table (all 6 OD scores), (d) Key Decisions section (5-10 decisions with What/Why/Impact), (e) Files-in-folder table showing all files as COMPLETE. The DD STAGE-HEADER.md should be explicitly cited as the structural template.

**REVISION 29 -- MEDIUM**
- **Plan Section Affected:** Wave 4: infra agent, OD-CHECKPOINT.md (not in plan)
- **What's Missing/Wrong:** The prior-stage chain audit notes that OD-CHECKPOINT.md says "Currently Working On: Synthesis documents" and "Next Action: OD synthesis documents -> HANDOFF-OD-TO-AD" (referenced from root cause analysis). After remediation, these fields will be stale. The plan does not include updating OD-CHECKPOINT.md.
- **Evidence from Report:** Line 270: "OD-CHECKPOINT.md says: 'Next Action: OD synthesis documents -> HANDOFF-OD-TO-AD -> ACCUMULATED-IDENTITY-v2 final -> HUMAN PAUSE'"
- **Proposed Fix:** Add OD-CHECKPOINT.md to infra agent's update list: "Update 'Currently Working On' to 'COMPLETE', 'Last Action' to 'Provenance remediation complete', 'Next Action' to 'AD phase (read HANDOFF-OD-TO-AD.md first)'."

**REVISION 30 -- MEDIUM**
- **Plan Section Affected:** Wave 4: infra agent, scope
- **What's Missing/Wrong:** The prior-stage chain audit identifies that "DD left zero operational infrastructure in knowledge-architecture" (line 198-201) and "DD has zero equivalent execution journal files" (lines 203-213). The plan should acknowledge this asymmetry in the OD STAGE-HEADER or OD-SYNTHESIS to provide context for why OD has vastly more operational data (~600K) than DD (~30K). Without this acknowledgment, future readers may wonder why OD has scratchpad directories and execution journals that DD lacks.
- **Evidence from Report:** Section 3 (lines 186-217): zero DD execution journal, zero DD audit scratchpad.
- **Proposed Fix:** Chain-a's OD-SYNTHESIS.md should include a brief section "Process Innovation: OD vs DD" noting that OD introduced execution journals, audit scratchpads, research gates, and accumulated identity documents that DD did not have, and that this infrastructure is a process evolution to be maintained for AD/CD.

---

## REVISION SUMMARY

| # | Severity | Source File | Plan Section Affected | Key Issue |
|---|----------|-------------|----------------------|-----------|
| 1 | CRITICAL | 06 | Resolved Decisions + infra scope | Only 1 of 5 root causes addressed by enforcement gate; MEMORY.md and systemic provenance checklist missing |
| 2 | HIGH | 06 | infra agent file list | MEMORY.md not in infra's update list despite being Root Cause #3 |
| 3 | HIGH | 06 | Plan structure | No mechanism to prevent recurrence at AD/CD beyond the single binary gate |
| 4 | MEDIUM | 06 | chain-a OD-SYNTHESIS | Does not distinguish inline header data from new synthesis |
| 5 | MEDIUM | 06 | gate agent reads | OD-CHECKPOINT.md not in gate agent's read list |
| 6 | CRITICAL | 07 | census-a OD-F specification | OD-F findings lack lifecycle records (discovery, validation, status, consumers) |
| 7 | CRITICAL | 07 | census-a OD-F-009-012 | Source data location for new findings not specified |
| 8 | HIGH | 07 | 14 MEDIUM gaps | Assignments not visible; 7+ gaps unassigned entirely (scoring, negative space, emergence, etc.) |
| 9 | HIGH | 07 | chain-a OD-AUDIT-SYNTHESIS | Missing 3-dialect docs, 89-to-17 mapping, post-fix scores, scratchpad references |
| 10 | HIGH | 07 | infra BACKBONE.md | Only Section 4 specified; Sections 8, 9, 10 also need updates |
| 11 | HIGH | 07 | infra OD-RESEARCH-GATE | Post-build addendum content unspecified |
| 12 | MEDIUM | 07 | infra PIPELINE-MANIFEST | Only Section B specified; Sections C, D, F and DD-F consumption matrix also need updates |
| 13 | MEDIUM | 07 | Verification Protocol | Only Forward/Backward tested; Cross, Accumulation, Reproducibility untested |
| 14 | CRITICAL | 10 | census-a read list | ACCUMULATED-IDENTITY-v1.md (539 lines of critical context) not read; 2 CRITICAL scratchpad files not read |
| 15 | HIGH | 10 | census-b read list | EXT-CONV (5) and EXT-DENSITY (3) findings will be missed -- only in OD-001 inline + identity-brief |
| 16 | HIGH | 10 | census-a OD-F count | Discrepancy: plan says 12, census says 11. OD-F-012 may not exist in source data. |
| 17 | HIGH | 10 | Dark matter referencing | Plan says REFERENCE but specifies no mechanism for formal chain to reference dark matter files |
| 18 | MEDIUM | 10 | infra RESEARCH-ACTIVE | Mirrored file divergence risk between provenance/ and checkpoints/ copies |
| 19 | MEDIUM | 10 | No agent for FINDINGS-INDEX.md | 516-line master index not updated with OD-F entries |
| 20 | CRITICAL | 11 | census-b + gate | R-2 non-consumption (27 findings, 0%) not documented; AD will repeat the oversight |
| 21 | HIGH | 11 | chain-a OD-SYNTHESIS | Bespoke-vs-existing research consumption insight not captured |
| 22 | HIGH | 11 | chain-a OD-SYNTHESIS | OD-002 external research correlation with lower score not captured |
| 23 | MEDIUM | 11 | gate HANDOFF-OD-TO-AD | 5 quality assessment recommendations not included in Lessons section |
| 24 | MEDIUM | 11 | chain-a OD-SYNTHESIS | File Consumption Matrix not included |
| 25 | CRITICAL | 12 | infra RESEARCH-ACTIVE | Compounding tracking drift (327 shown unapplied vs ~265 actual); R-3 discrepancy unresolved |
| 26 | HIGH | 12 | gate HANDOFF-OD-TO-AD | Two Provenance Modes documented but Mode C not established for AD |
| 27 | HIGH | 12 | infra scope | DD-era audit files not synced to DD provenance (RETROACTIVE-AUDIT, VISUAL-AUDIT) |
| 28 | HIGH | 12 | infra STAGE-HEADER | No specification for what makes COMPLETE label credible (narrative, tables, decisions) |
| 29 | MEDIUM | 12 | infra scope | OD-CHECKPOINT.md not updated post-remediation |
| 30 | MEDIUM | 12 | chain-a OD-SYNTHESIS | OD vs DD process asymmetry not documented |

### Severity Distribution
| Severity | Count |
|----------|-------|
| CRITICAL | 7 |
| HIGH | 14 |
| MEDIUM | 9 |
| **TOTAL** | **30** |

### Most-Impacted Plan Sections
| Plan Section | Revision Count | Critical? |
|-------------|----------------|-----------|
| census-a read list / OD-F specification | 5 (R6,7,14,16,17) | YES (3 CRITICAL) |
| chain-a OD-SYNTHESIS.md specification | 6 (R4,21,22,24,30,8-partial) | YES (via dependencies) |
| infra agent scope + file list | 7 (R2,10,11,12,25,27,28,29) | YES (R25 CRITICAL) |
| gate agent HANDOFF-OD-TO-AD.md | 4 (R20,23,26,5-partial) | YES (R20 CRITICAL) |
| census-b read list / EXT specification | 3 (R15,18,20-partial) | NO |
| Verification Protocol | 1 (R13) | NO |
| Resolved Decisions / systemic prevention | 2 (R1,3) | YES (R1 CRITICAL) |
