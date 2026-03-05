# User Question Coverage Audit

**Agent:** question-auditor (Opus 4.6)
**Date:** 2026-02-24
**Scope:** Verify every user question from the original conversation is addressed by research reports and/or implementation checklist
**Sources:** 6 analysis reports (files 13, 14, 14b, 15, 16, 17), prior info-loss analysis files (01-12), MEMORY.md context
**Method:** Each of 20 enumerated questions audited for: direct answer, research coverage, checklist inclusion, adequacy

---

## Per-Question Audit

### Q1: Is the MANIFEST checklist approach currently what we're doing with the other existing artifacts referenced in the build-page skill?
- **Direct answer provided?** YES -- File 17 (manifest-dual-behavior) Section 1 provides a complete inventory of the MANIFEST's current structure: 48 routing instructions, 6 spawn events, ~51 file-read events, 3 categories of verification (Section 9 coverage, phase decision gates, precondition checks).
- **Research report covers it?** YES -- File 17 Section 1.4 explicitly identifies: "There is NO mechanism that verifies 'the orchestrator actually read Section X and passed it to Agent Y.' The 48 routing instructions are specifications of WHAT SHOULD HAPPEN, with zero confirmation of what DID happen."
- **In master checklist?** PENDING (checklist not yet written; should include EXECUTION-TRACKER-TEMPLATE.md creation)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. File 17 provides an exhaustive current-state inventory and recommended architecture.
- **Recommended action:** No action needed beyond ensuring the master checklist includes the execution tracker deliverable.

---

### Q2: Is the current gate artifact (1,379 lines, 19/42 executed) being referenced in the build-page skill currently?
- **Direct answer provided?** YES -- File 13 (gate-quality-exploration) Section 1I provides: "Total gates defined: 42. Gates with executable Playwright JS: 19 (45%). Gates that ran in Gas Town: 19 (45%)." File 13 Section 3A identifies the root cause: "The gate runner artifact is 1,379 lines. The orchestrator cannot absorb this in one pass (D-05 in the loss taxonomy)."
- **Research report covers it?** YES -- File 13 provides the complete audit of all 42 gates with per-gate effectiveness scores, implementation defects, and a splitting architecture.
- **In master checklist?** PENDING (should include gate runner splitting + code fixes)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. File 13 provides both the diagnosis and the remedy.
- **Recommended action:** No action needed.

---

### Q3: If we split gates into 3-4 files with a checklist against MANIFEST, can we ensure all use Opus (no Sonnet)?
- **Direct answer provided?** YES -- File 13 Section 3B proposes a 4-file + 1-manifest split architecture. The Opus mandate is addressed in File 14b Section 4.3: "The protocol (Part 4.3) and MANIFEST (Appendix F) both mandate Opus for all PA auditors." File 15 Item 3 (Gate Runner) addresses the gate execution context: "Phase 3A: Gate Runner (NOT a spawn -- orchestrator self-executes JS)." Since the gate runner is Playwright JS executed by the orchestrator (not a spawned agent), the Opus/Sonnet distinction does not apply to gates -- it applies to the orchestrator itself.
- **Research report covers it?** YES -- File 13 Section 3B (split architecture), File 17 Section 4.1 (execution tracker includes model specification per agent spawn).
- **In master checklist?** PENDING (should include gate splitting + model mandate verification in execution tracker)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** The user's concern about "no Sonnet" is addressed indirectly. The execution tracker template (File 17 Section 4.1) includes "(Opus)" annotations on every spawn checkbox, making model mandate visible per-agent. However, no explicit verification mechanism catches an orchestrator using Sonnet for spawned agents. The GR-23 gate (Builder = Opus) exists but is ADVISORY with no code.
- **Recommended action:** The master checklist should include promoting GR-23 enforcement or adding model verification to the execution tracker.

---

### Q4: Is the MANIFEST essentially a checklist to ensure everything is executed? Is it the structural way we ensure every artifact gets evaluated?
- **Direct answer provided?** YES -- File 17 provides a definitive answer: "The MANIFEST is an orchestration specification, NOT an execution checklist. It has 48 routing instructions but zero execution accountability mechanisms." The recommended solution is the EXECUTION-TRACKER-TEMPLATE.md (Option B+F hybrid).
- **Research report covers it?** YES -- File 17 is entirely dedicated to this question. 7 architecture options analyzed (A-G), with B+F hybrid recommended.
- **In master checklist?** PENDING (should include execution tracker creation)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. This question received the most thorough treatment of all 20.
- **Recommended action:** No action needed.

---

### Q5: Given feedback from all runs, are there improvements/additions/removals to existing gates? Launch comprehensive team to explore better gates.
- **Direct answer provided?** YES -- File 13 provides the comprehensive gate exploration requested: all 42 gates audited on 5 dimensions, 8 new gates proposed with full Playwright JS code, 12 gates recommended for removal/relocation, 6 gates with code defects identified, complete reclassification table.
- **Research report covers it?** YES -- File 13 is the direct deliverable for this question. 948 lines of analysis.
- **In master checklist?** PENDING (should include: add GR-43 through GR-50, remove 12 gates, fix 6 gate code defects, implement gate splitting)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. The "comprehensive team" was effectively a single deep-diving Opus agent, but the coverage is exhaustive.
- **Recommended action:** No action needed.

---

### Q6: For binary gates that can't catch compositional quality -- are PA questions running into the same execution coverage problem as gates (not all being evaluated)?
- **Direct answer provided?** YES -- File 14 Part 4 identifies 3 structural execution verification gaps: (1) no verification that each question was actually answered, (2) no verification that answers are evidence-based, (3) PA-05 sub-criteria not independently verified. File 14 Part 1 also rates each question on EFFECTIVENESS, showing 7.7% score below 4.0/5.0 (5 questions).
- **Research report covers it?** YES -- File 14 directly addresses PA execution coverage. The finding: PA had 94/100 compliance in Gas Town (65/65 questions answered), but this was verified by a SEPARATE audit, not built into the protocol. The proposed PA Completion Manifest fixes this gap.
- **In master checklist?** PENDING (should include PA Completion Manifest, PA-05 distributed evaluation, auditor load rebalancing)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None.
- **Recommended action:** No action needed.

---

### Q7: Would chunking/splitting PA questions into multiple files with a PA manifest be impactful? Launch comprehensive team to assess PA question quality.
- **Direct answer provided?** YES -- File 14 Part 5 proposes a 4-file + 1-manifest split architecture for the PA protocol: pa-questions.md (~350 lines), pa-deployment.md (~250 lines), pa-weaver.md (~200 lines), pa-guardrails.md (~200 lines), pa-manifest.md (~50 lines). File 14 Part 1 provides the comprehensive quality assessment: all 65 questions scored on 5 dimensions (325 individual ratings).
- **Research report covers it?** YES -- File 14 is the direct deliverable. 1,008 lines of analysis. File 14b provides supplementary source-artifact review (477 lines).
- **In master checklist?** PENDING (should include PA splitting, question rewrites/removals/additions, load rebalancing)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. Both the "chunking" architecture and "quality assessment" components are covered.
- **Recommended action:** No action needed.

---

### Q8: Do we need a top-level manifest at the skill root? Is manifest work recursive?
- **Direct answer provided?** YES -- File 17 Section 5 directly addresses recursion: "ONE Level Only. The MANIFEST's Execution Tracker is the single level of execution accountability. No artifact needs its own sub-manifest." Detailed analysis of all 6 artifact files shows none warrants a sub-manifest. The rationale: "Artifact-level accountability is handled by OUTPUT verification" (gates verify gate runner, PA reports verify PA protocol, HTML file verified by gates+PA).
- **Research report covers it?** YES -- File 17 Section 5, including a table of all 6 artifacts with "Sub-Manifest Warranted?" column (all NO).
- **In master checklist?** PENDING (should be noted as a DECISION: no recursive manifests needed)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** The "top-level manifest at the skill root" part is partially addressed. File 17 focuses on the VA-extraction artifacts, not the skill's SKILL.md. However, File 17 Section 6 notes: "Add reference to execution tracker in SKILL.md 'Execution rules' section -- Minimal, one additional bullet point." This implicitly answers that the skill root does NOT need a separate manifest; it just needs a pointer to the execution tracker.
- **Recommended action:** No action needed. The decision to NOT add recursive manifests is well-supported.

---

### Q9: Should we document the 25 anti-loss mechanisms (especially 13 highly effective) in a separate file within the skill? Can skills get CLAUDE.md files?
- **Direct answer provided?** PARTIAL -- File 08 (anti-loss catalog) documents all 25 mechanisms with effectiveness ratings. Files 15 and 16 both include "Impact on 13 Highly Effective Mechanisms" tables for every proposed fix, demonstrating that the 13 highly effective mechanisms are being treated as preservation constraints. However, no report explicitly addresses whether these should be documented in a separate skill file or whether skills can get CLAUDE.md files.
- **Research report covers it?** PARTIAL -- The anti-loss mechanisms are thoroughly documented in File 08 (the catalog) and referenced throughout Files 15, 16, and 17. But the specific questions "should this go in a separate skill file?" and "can skills get CLAUDE.md files?" are NOT directly answered by any research report.
- **In master checklist?** PENDING (should include a decision about mechanism documentation location)
- **Adequacy:** PARTIALLY ADDRESSED
- **Gap (if any):** Two sub-questions are unanswered:
  1. Whether the anti-loss catalog should be a SEPARATE file within the skill directory (currently it's in ephemeral/pages/gas-town-va-pipeline/analysis/info-loss/08-anti-loss-catalog.md, not in any skill directory)
  2. Whether skills can technically have CLAUDE.md files (this is a Claude Code platform question, not a pipeline design question)
- **Recommended action:** Add to master checklist: "DECISION: Determine final location for anti-loss mechanism documentation. Options: (a) keep in analysis archive, (b) add as a reference file in the build-page skill, (c) embed key mechanisms in the execution tracker or MANIFEST. The platform question about skill CLAUDE.md files requires user clarification."

---

### Q10: For all partially effective mechanisms, how many are worth fixing to become highly effective?
- **Direct answer provided?** PARTIAL -- File 08 rates all 25 mechanisms (13 HIGHLY EFFECTIVE, 7 PARTIALLY EFFECTIVE, 3 INEFFECTIVE, 2 NOT MEASURABLE). Files 15 and 16 propose fixes for specific pipeline gaps that would upgrade some partially effective mechanisms. However, no report explicitly enumerates WHICH partially effective mechanisms are "worth fixing" vs which are inherently limited.
- **Research report covers it?** PARTIAL -- The partially effective mechanisms (M-06 Suppressor Management, M-10 Content Map Regeneration, M-14 Mode Detection, M-15 Value Tables, M-16 Conviction Statement, M-21 Quality Floor, M-25 Experiment Gates) are each discussed in various reports, but no single report does a targeted "fix cost vs benefit" analysis for each.
- **In master checklist?** PENDING (should include specific fixes for targetable partially-effective mechanisms)
- **Adequacy:** PARTIALLY ADDRESSED
- **Gap (if any):** No dedicated "partially effective mechanism upgrade analysis" exists. The information is scattered across Files 13, 15, and 16 but never consolidated into a "here are the 7 partially effective mechanisms, here is the fix cost for each, here is which ones to fix."
- **Recommended action:** Add to master checklist: "ANALYSIS GAP: Consolidate partially effective mechanism upgrade assessment. Cross-reference M-06, M-10, M-14, M-15, M-16, M-21, M-25 against proposed fixes in Files 13, 15, 16 to determine which are addressed and which remain unaddressed."

---

### Q11: For the 5 unfixed items (Brief-to-HTML junction, L5 VALUES, gate runner, static routing, brief assembler verification) -- can these be fixed while preserving highly effective mechanisms? Launch team members.
- **Direct answer provided?** YES -- File 15 (unfixed-items-remediation) provides the comprehensive analysis: all 5 items receive root cause analysis, concrete fix proposals with exact file/line edits, and an "Impact on 13 Highly Effective Mechanisms" table for each fix. 12 total fixes proposed. Every fix assessed against all 13 mechanisms with PRESERVE/STRENGTHEN/RISK ratings.
- **Research report covers it?** YES -- File 15 is the direct deliverable. 933 lines of analysis with implementation code.
- **In master checklist?** PENDING (should include all 12 fixes from File 15, prioritized by combination groups A/B/C)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. The "preserving highly effective mechanisms" concern is explicitly addressed via the per-fix mechanism impact tables. Only 2 RISK ratings across all 60+ assessments (Fix 1.3 vs M-07 World-description framing, Fix 4.1 vs M-01 MANIFEST structure), both with documented mitigations.
- **Recommended action:** No action needed.

---

### Q12: Are we constantly evaluating good vs bad rigidity? The tension between structural control and creative freedom.
- **Direct answer provided?** YES -- This is a cross-cutting theme addressed throughout the research. File 15 Section 1A explicitly identifies: "The brief says both 'you have 80% creative authority' AND 'backgrounds must differ by 15 RGB' without specifying which wins when they conflict." The proposed fix (Fix 1.1: Specification Conflict Resolution Protocol) directly resolves this: "Tier 2 WINS for perception physics; Tier 3 WINS for metaphor, component, layout, color accent choices." File 16 Section OM-11 discusses the paradox of prescribing restraint. File 06 (enrichment safety analysis) analyzed which enrichments risk becoming quality suppressors.
- **Research report covers it?** YES -- Across multiple files:
  - File 06: Enrichment safety analysis with suppressor classification
  - File 08: M-06 Suppressor Management (survival function)
  - File 15: Fix 1.1 specification conflict resolution
  - File 16: OM-11 risk assessment (D-09 as potential suppressor)
  - File 13: Gate classification (structured vs judgment-required)
- **In master checklist?** PENDING (should include Fix 1.1 specification conflict resolution as a Wave 1 item)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. The good/bad rigidity tension is one of the best-covered themes.
- **Recommended action:** No action needed.

---

### Q13: Launch comprehensive team members to fix the 5 PARTIALLY FIXABLE omission instances (OM-09, OM-10, OM-11, OM-15, OM-16).
- **Direct answer provided?** YES -- File 16 (omission-remediation) provides the comprehensive analysis for all 5 omission instances. Each receives: precise root cause, concrete fix with exact text to add, fix classification (COMPOSITIONAL/STRUCTURAL/MECHANICAL), risk assessment against anti-loss mechanisms, verification strategy.
- **Research report covers it?** YES -- File 16 is the direct deliverable. 548 lines. Fixes total +72 net lines across 4 files.
- **In master checklist?** PENDING (should include all omission fixes from File 16: Step 3.4b for OM-09/10, D-09 for OM-11, Phase 5 self-eval expansion for OM-15, Phase 6 merge for OM-16)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None.
- **Recommended action:** No action needed.

---

### Q14: Can the MANIFEST do BOTH orchestration spec AND execution checklist? What's the best approach?
- **Direct answer provided?** YES -- File 17 provides a definitive answer: "YES, the MANIFEST can serve BOTH purposes -- but NOT in a single file." The MANIFEST remains the immutable orchestration specification. A separate EXECUTION-TRACKER-TEMPLATE.md (~150 lines) serves as the execution accountability checklist. 7 architecture options analyzed (A-G), with B+F hybrid recommended.
- **Research report covers it?** YES -- File 17 is entirely dedicated to this question. 708 lines.
- **In master checklist?** PENDING (should include execution tracker template creation)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None. This question received the most thorough single-question treatment.
- **Recommended action:** No action needed.

---

### Q15: Move outdated pre-v3 PA enrichment files to archive.
- **Direct answer provided?** NO -- No research report addresses the archiving of outdated PA enrichment files. File 14b Section 5 documents the enrichment history (2 rounds, 15 enrichments total) but does not recommend archiving the pre-v3 source files.
- **Research report covers it?** NO -- None of the 6 analysis reports address file archiving/cleanup.
- **In master checklist?** PENDING (should include as a cleanup task)
- **Adequacy:** NOT ADDRESSED
- **Gap (if any):** This is a cleanup/housekeeping task that was not within scope of any analysis report. It requires identifying which files in the PA enrichment directories are pre-v3 and moving them.
- **Recommended action:** Add to master checklist as a cleanup task: "Archive pre-v3 PA enrichment files. Identify files in ephemeral/skill-surgery/, ephemeral/pipeline-surgery/, and any other PA enrichment directories that pre-date the VA extraction. Move to an archive/ subdirectory."

---

### Q16: PA question research should reference ephemeral/va-extraction/* source files, especially buddy-artifact-pa.md.
- **Direct answer provided?** YES -- File 14b (PA Source Artifact Review) is explicitly titled "Analysis from VA Extraction Files" and lists its sources as "11 files from ephemeral/va-extraction/ + 2 enrichment history files." Section 1 specifically analyzes buddy-artifact-pa.md findings. The agent directly references this file.
- **Research report covers it?** YES -- File 14b is the direct deliverable for this request. It analyzes the buddy review, cross-artifact PA gaps, council verdict PA impacts, and enrichment history all from the VA extraction source files.
- **In master checklist?** N/A (this was a research methodology instruction, not a fix to implement)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** None.
- **Recommended action:** No action needed.

---

### Q17: Implementation should be in prioritized waves with per-wave verification and cleanup.
- **Direct answer provided?** YES -- This is addressed implicitly by the research structure. File 15 Section 7 (Implementation Roadmap) provides prioritized ordering: Combination A (Brief Quality Package) first, then Brief Verification Gates, then Gate Runner Cleanup, then Routing Enhancement. File 16 provides a 3-phase implementation sequence. File 13 Section 6A provides priority rankings for new gates.
- **Research report covers it?** PARTIAL -- The research reports provide prioritized FIX ordering but do not explicitly define implementation "waves" with verification gates between them. The wave structure is an implementation concern that belongs in the master checklist, not in analysis reports.
- **In master checklist?** PENDING (the master checklist IS the deliverable for this question -- it should organize fixes into waves with per-wave verification steps)
- **Adequacy:** PARTIALLY ADDRESSED -- the prioritization exists in the reports but the wave structure with verification checkpoints needs to be in the master checklist.
- **Gap (if any):** The master checklist must implement wave-based organization, not just a flat list of fixes. Each wave should end with a verification step before proceeding.
- **Recommended action:** Ensure master checklist organizes fixes into waves (Wave 1: highest-impact/lowest-risk, Wave 2: medium, Wave 3: aspirational) with verification checkpoints between waves.

---

### Q18: Pipeline needs built-in logging (execution tracker + per-agent output logs) for retrospective analysis.
- **Direct answer provided?** YES -- File 17 addresses the execution tracker comprehensively (B+F hybrid: checklist with integrated log sections). The per-agent output logging is partially addressed by File 17's execution tracker design, which includes "Phase X Log" sections after each phase.
- **Research report covers it?** YES -- File 17 Section 4 provides the concrete EXECUTION-TRACKER-TEMPLATE.md design with per-phase log sections. The template tracks: timestamp, phase, action taken, inputs provided, outputs received, status.
- **In master checklist?** PENDING (should include execution tracker template creation as a deliverable)
- **Adequacy:** FULLY ADDRESSED
- **Gap (if any):** Per-AGENT output logs (individual agent outputs saved to named files) are not explicitly designed in the tracker. The tracker logs PHASES, not individual agent outputs. However, the tracker's per-spawn checkboxes include "RECEIVE [output description]" which implicitly requires saving agent outputs.
- **Recommended action:** Add to master checklist: "Ensure execution tracker includes per-agent output file naming convention (e.g., phase0-content-map.md, phase1-execution-brief.md, phase2-build.html, phase3a-gate-results.json, phase3b-pa-auditor-{A-I}.md, phase3c-verdict.md)."

---

### Q19: After implementation, cleanup should include skill files, CLAUDE.md, MEMORY.md updates, and archiving.
- **Direct answer provided?** NO -- No research report addresses post-implementation cleanup of skill files, CLAUDE.md, MEMORY.md, or archiving.
- **Research report covers it?** NO -- This is an implementation process instruction, not an analysis topic.
- **In master checklist?** PENDING (should include as a final cleanup wave)
- **Adequacy:** NOT ADDRESSED
- **Gap (if any):** This is a process instruction about what to do AFTER all fixes are implemented. It requires: updating the build-page SKILL.md to reflect v3 changes, updating design-system/CLAUDE.md status, updating MEMORY.md with implementation results, archiving analysis files.
- **Recommended action:** Add to master checklist as a final wave: "Post-implementation cleanup: (1) Update SKILL.md to reflect all changes, (2) Update design-system/CLAUDE.md status, (3) Update MEMORY.md with implementation results, (4) Archive analysis files from ephemeral/pages/gas-town-va-pipeline/analysis/ to a completed/ subdirectory."

---

### Q20: Make sure ALL original questions are addressed in some form.
- **Direct answer provided?** YES -- This audit IS the deliverable for Q20.
- **Research report covers it?** YES -- This file.
- **In master checklist?** PENDING (any gaps identified in this audit should be added to the master checklist)
- **Adequacy:** FULLY ADDRESSED (by this document)
- **Gap (if any):** See Summary Table below for the complete gap list.
- **Recommended action:** Incorporate all gaps identified below into the master checklist.

---

## Summary Table

| Question | Summary | Adequacy | Gap? |
|----------|---------|----------|------|
| Q1 | MANIFEST current state inventory | FULLY ADDRESSED | None |
| Q2 | Gate artifact reference/execution | FULLY ADDRESSED | None |
| Q3 | Gate splitting + Opus enforcement | FULLY ADDRESSED | Minor: GR-23 promotion |
| Q4 | MANIFEST as execution checklist | FULLY ADDRESSED | None |
| Q5 | Gate improvements/additions/removals | FULLY ADDRESSED | None |
| Q6 | PA execution coverage problem | FULLY ADDRESSED | None |
| Q7 | PA chunking + quality assessment | FULLY ADDRESSED | None |
| Q8 | Recursive manifests at skill root | FULLY ADDRESSED | None |
| Q9 | Anti-loss mechanism documentation | PARTIALLY ADDRESSED | Location decision + skill CLAUDE.md question |
| Q10 | Partially effective mechanism upgrades | PARTIALLY ADDRESSED | No consolidated upgrade analysis |
| Q11 | 5 unfixed items remediation | FULLY ADDRESSED | None |
| Q12 | Good vs bad rigidity evaluation | FULLY ADDRESSED | None |
| Q13 | 5 omission instance fixes | FULLY ADDRESSED | None |
| Q14 | MANIFEST dual behavior | FULLY ADDRESSED | None |
| Q15 | Archive pre-v3 PA enrichment files | NOT ADDRESSED | Cleanup task not in any report |
| Q16 | PA research from VA extraction sources | FULLY ADDRESSED | None |
| Q17 | Prioritized waves with verification | PARTIALLY ADDRESSED | Wave structure needs checklist |
| Q18 | Built-in logging for retrospective | FULLY ADDRESSED | Minor: per-agent file naming |
| Q19 | Post-implementation cleanup | NOT ADDRESSED | Process instruction not in reports |
| Q20 | All questions addressed | FULLY ADDRESSED | This audit |

### Score Summary

| Rating | Count | Percentage |
|--------|-------|-----------|
| FULLY ADDRESSED | 15 | 75% |
| PARTIALLY ADDRESSED | 3 | 15% |
| NOT ADDRESSED | 2 | 10% |

---

## Complete Gap List

### Gaps Requiring Master Checklist Additions

**GAP-A (from Q9):** Anti-loss mechanism documentation location decision. The 25 mechanisms (especially 13 highly effective) need a permanent home. Options: (a) reference file in build-page skill, (b) embedded in MANIFEST, (c) kept in analysis archive with pointer. The sub-question "can skills get CLAUDE.md files?" is a platform question requiring user clarification.

**GAP-B (from Q10):** No consolidated "partially effective mechanism upgrade" analysis exists. The 7 partially effective mechanisms (M-06, M-10, M-14, M-15, M-16, M-21, M-25) need a targeted cost/benefit assessment for upgrading. Information exists across Files 13, 15, 16 but is not consolidated.

**GAP-C (from Q15):** Pre-v3 PA enrichment files have not been identified or archived. Cleanup task: identify files in ephemeral/skill-surgery/, ephemeral/pipeline-surgery/, and related directories that pre-date VA extraction; move to archive.

**GAP-D (from Q17):** The master checklist must implement wave-based organization with per-wave verification checkpoints, not just a flat list of fixes. The research reports provide fix prioritization but not the wave+verify+proceed structure.

**GAP-E (from Q18):** Per-agent output file naming convention not specified. The execution tracker logs phases but individual agent outputs need a naming convention (e.g., phase0-content-map.md, phase2-build.html, etc.).

**GAP-F (from Q19):** Post-implementation cleanup plan not documented. Needs: (1) SKILL.md update, (2) design-system/CLAUDE.md status update, (3) MEMORY.md update with results, (4) analysis file archiving.

### Recommended Master Checklist Additions

To close all 6 gaps, the master checklist should include:

1. **FIX-GAP-A:** Add a "Documentation Location" decision item: determine where the anti-loss mechanism catalog lives permanently. Recommend: add a slim reference (top 13 mechanisms, ~30 lines) to the MANIFEST or execution tracker, with full catalog remaining in the analysis archive.

2. **FIX-GAP-B:** Add a "Partially Effective Mechanism Consolidation" task to Wave 2 or 3: cross-reference 7 mechanisms against all proposed fixes to produce a simple table of "mechanism | addressed by fix X | projected upgrade to HIGHLY EFFECTIVE? YES/NO."

3. **FIX-GAP-C:** Add to final cleanup wave: "Archive pre-v3 PA enrichment source files from ephemeral/skill-surgery/ and ephemeral/pipeline-surgery/."

4. **FIX-GAP-D:** Ensure master checklist structure uses Wave 1 / Wave 2 / Wave 3 organization with explicit verification checkpoints between waves (e.g., "Wave 1 complete: verify all gate code changes pass lint, all modified files have correct line counts, no mechanism damage").

5. **FIX-GAP-E:** Add to execution tracker template: per-agent output file naming convention.

6. **FIX-GAP-F:** Add final cleanup wave with 4 items: SKILL.md update, CLAUDE.md update, MEMORY.md update, analysis archiving.

---

## Adversarial Self-Check

### What this audit might miss

1. **The user's questions evolved during conversation.** The 20 questions listed here were enumerated by the team lead from the conversation transcript. If the team lead missed a question, this audit would not catch it. However, the 20 questions appear comprehensive and cover the full scope of the user's stated concerns.

2. **Some "questions" are actually instructions.** Q15 (archive files), Q17 (use waves), Q18 (add logging), Q19 (cleanup) are not questions seeking answers -- they are process requirements. The appropriate test for these is not "was it answered?" but "was it incorporated into the implementation plan?" This audit uses that test for those items.

3. **"FULLY ADDRESSED" may overstate certainty.** A question can be fully addressed in research but still fail in implementation. For example, Q5 (gate improvements) is fully addressed by File 13's exhaustive analysis, but if the master checklist does not include File 13's recommendations, the question is addressed in research but not in action. This audit checks research coverage; implementation coverage depends on the master checklist (Task #1, still in progress).

4. **Q9's platform question ("can skills get CLAUDE.md files?") may be trivially answerable.** Skills in ~/.claude/skills/ CAN have CLAUDE.md files -- each skill directory can contain a CLAUDE.md that is auto-loaded when the skill is invoked. This is a Claude Code feature. However, whether this is the RIGHT location for anti-loss documentation is a design decision, not a platform constraint. The audit correctly flags this as requiring user clarification on the design decision, not the platform capability.

---

*End of question coverage audit. 20 questions audited. 15 FULLY ADDRESSED (75%), 3 PARTIALLY ADDRESSED (15%), 2 NOT ADDRESSED (10%). 6 gaps identified with recommended master checklist additions.*
