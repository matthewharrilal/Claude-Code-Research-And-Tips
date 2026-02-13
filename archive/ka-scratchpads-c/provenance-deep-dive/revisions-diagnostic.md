# Plan Revisions from Diagnostic Files 01-05

**Generated:** 2026-02-08
**Agent:** Revision Agent (diagnostic files)
**Scope:** Files 01-05 from `_provenance-gap-analysis/` audited against `CLAUDE-PLAN-FOR-REVISION.md`

---

## File: 01-dd-vs-od-comparison.md

### What the Plan Gets Right
The plan correctly identifies the 4 missing files (OD-outbound-findings, HANDOFF-OD-TO-AD, OD-SYNTHESIS, organizational-patterns) and assigns them to agents. The wave architecture (census -> chain -> gate -> infra) mirrors the DD provenance lifecycle described in Report 01 Section 3A.

### REVISIONS NEEDED (from this file)

**REVISION 1 — CRITICAL**
- **Plan Section Affected:** Wave 2, chain-a (OD-AUDIT-SYNTHESIS.md)
- **What's Missing/Wrong:** The plan creates "OD-AUDIT-SYNTHESIS.md" as a new file in the provenance directory. But Report 01 Section 4D (lines 220-226) reveals DD had TWO audit files in provenance: `DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` (646 lines) AND `DD-REAUDIT-CHECKPOINT.md` (220 lines). The plan creates only one OD audit synthesis file. DD's checkpoint file tracked per-DD audit progress (20+ checkboxes per DD). The plan has no equivalent for OD, and does not address whether OD-CHECKPOINT.md should be synced/referenced from provenance.
- **Evidence from Report:** Lines 86-95 (DD has both synthesis AND checkpoint in provenance), lines 220-226 (OD equivalents exist outside provenance but are not addressed by the plan as a pair).
- **Proposed Fix:** chain-a's OD-AUDIT-SYNTHESIS.md should explicitly state that it COMBINES the functions of both DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md and DD-REAUDIT-CHECKPOINT.md. OR: create a second file. Either way, the plan must acknowledge the two-file DD precedent and state its deliberate choice. Add a note to infra agent to add a cross-reference from provenance to OD-CHECKPOINT.md if not duplicating it.

**REVISION 2 — HIGH**
- **Plan Section Affected:** Wave 1, census-a (OD-outbound-findings.md)
- **What's Missing/Wrong:** The plan says OD-outbound-findings will contain "OD-F-001 through OD-F-012, consumption matrix, DD-F verification." Report 01 Section 4A (lines 183-188) details what DD's outbound findings ACTUALLY contained that the plan does not specify: per-finding metadata columns (Source, Score, For-Which-AD, Chain Impact), a finding consumption matrix (grid showing which stages consume which findings), AND a Stage 1 consumption verification table (how COMP-F-### were consumed by DD). The plan says "consumption matrix" but does not mention the backward-looking "how DD-F findings were consumed by OD" verification table.
- **Evidence from Report:** Lines 183-188 (DD exports Source/Score/Chain Impact per finding), line 188 ("Stage 1 consumption verification" — how prior stage findings were consumed). Line 189 confirms "Does not exist for OD."
- **Proposed Fix:** census-a prompt must specify that OD-outbound-findings.md must include: (1) per-finding metadata with columns: Source OD, Score, Target Stage (AD/CD/Migration), Chain Impact; (2) a consumption matrix grid; (3) a DD-F consumption verification table showing how each DD-F-001 through DD-F-018 was consumed by OD (which OD applied it, evidence). This backward-looking verification is critical for chain integrity and the plan completely omits it.

**REVISION 3 — HIGH**
- **Plan Section Affected:** Wave 2, chain-a (OD-SYNTHESIS.md)
- **What's Missing/Wrong:** The plan's description of OD-SYNTHESIS.md says "Cross-OD analysis, 3-quality-dialect, 6-pattern table with scores, key decisions, negative space, scoring summary." Report 01 Section 4C (lines 205-216) shows DD's STAGE-HEADER.md contained 8 specific sections that transition from future to past tense: The Story (narrative), What This Stage Consumed, What This Stage Produced, Quality Achieved (7 metrics with values), Key Decisions (5 decisions: What/Why/Impact), Causal Relationships, Accumulated Research Weight, Files In This Folder. The plan puts "key decisions" in OD-SYNTHESIS but does NOT address updating STAGE-HEADER.md from future-tense planning document to past-tense completion document with all 8 sections.
- **Evidence from Report:** Lines 72-84 (DD STAGE-HEADER contains 8 completion sections), lines 106-114 (OD STAGE-HEADER is still future-tense planning document), line 114 ("This file was never updated from planning document to completion document").
- **Proposed Fix:** The infra agent's update of STAGE-HEADER.md (listed in the plan as "Rewrite: future tense -> past tense COMPLETE") is severely underspecified. The infra agent prompt must enumerate ALL 8 sections that need to be populated: (1) "The Story" past-tense narrative, (2) What This Stage Consumed (actual, not "will consume"), (3) What This Stage Produced, (4) Quality Achieved table (7 metrics), (5) Key Decisions with What/Why/Impact, (6) Causal Relationships, (7) Accumulated Research Weight, (8) Files In This Folder with COMPLETE status. Currently the plan just says "Rewrite: future tense -> past tense COMPLETE" which gives the infra agent zero structural guidance.

**REVISION 4 — HIGH**
- **Plan Section Affected:** Wave 1, census-b (EXT-RESEARCH-REGISTRY.md)
- **What's Missing/Wrong:** Report 01 Section 4G (lines 242-247) reveals a major gap the plan partially addresses: OD-RESEARCH-GATE.md maps R-1 findings pre-build but was NEVER updated with APPLIED/NOT APPLIED status. The plan assigns RESEARCH-ACTIVE.md to infra (Wave 4) with "Finalize R-1 application status" but does NOT address updating OD-RESEARCH-GATE.md itself with post-build application results. DD's equivalent tracked actual application rate (~76%). The plan's infra agent lists OD-RESEARCH-GATE.md in its update list but describes the change as "Add post-build verification addendum" — this is too vague. The actual gap is per-finding APPLIED/NOT status.
- **Evidence from Report:** Lines 116-124 (OD-RESEARCH-GATE has 86% mapped but 0% with APPLIED status), line 247 ("R-1 findings were mapped pre-build but actual application was never verified in the gate file").
- **Proposed Fix:** OD-RESEARCH-GATE.md update must be specified as: for each of the 24 mapped R-1 findings, add an APPLIED/NOT APPLIED column with evidence (which OD file, which line). The infra agent prompt must state this is a per-finding verification, not a summary paragraph. This is a Wave 4 task but depends on census-a's findings extraction — add explicit dependency note.

**REVISION 5 — MEDIUM**
- **Plan Section Affected:** Wave 3, gate (HANDOFF-OD-TO-AD.md)
- **What's Missing/Wrong:** Report 01 Section 4F (lines 236-241) shows DD's handoff paired EACH downstream OD exploration with specific density patterns (6-row table with primary/secondary/rationale). The plan's gate agent writes HANDOFF-OD-TO-AD.md with "PURPOSE, Patterns, Findings, Soul, Quality Bar, Research, Lessons, Responsibilities, Pairings, Acknowledgment" but does not specify that "Pairings" means a 6-row table mapping each of the 6 planned AD explorations to specific organizational patterns with rationale. The plan also does not specify that this requires knowing the 6 planned AD explorations — which means the gate agent needs to read AD's STAGE-HEADER.md placeholder to know what to pair.
- **Evidence from Report:** Lines 236-241 (DD paired each OD exploration with a recommended density pattern in a 6-row table; OD equivalent does not exist).
- **Proposed Fix:** gate agent's read list must include `provenance/stage-4-axis-ad/STAGE-HEADER.md` (to know the 6 AD explorations). The Pairings section specification must say: "Create a 6-row table mapping each planned AD exploration to its primary and secondary organizational pattern, with rationale column. Use DD's OD-to-Density pairing table as structural template."

**REVISION 6 — MEDIUM**
- **Plan Section Affected:** Gap Coverage Matrix
- **What's Missing/Wrong:** Report 01 Section 5B (lines 277-290) identifies gaps WITHIN DD's provenance that the plan could learn from but ignores: (1) DD's REAUDIT-CHECKPOINT per-DD tracking was inconsistent (DD-001 had 20+ checkboxes, DD-002-006 had 5 each), (2) DD had a score discrepancy (34.2 vs 34.5), (3) "Synced duplicates are fragile" — the manual sync between provenance copies and operational originals has no verification. The plan creates OD provenance documents but includes no mechanism to verify they stay in sync with operational files. No verification step checks that OD-F findings in the new OD-outbound-findings.md match those in OD-CHECKPOINT.md.
- **Evidence from Report:** Lines 282-290 (5 DD gaps including sync fragility).
- **Proposed Fix:** Add a post-commit verification step: "After all waves complete, verify that every OD-F finding ID in OD-outbound-findings.md matches the definitions in OD-CHECKPOINT.md (lines 140-157). Any discrepancy is a FAIL." This is cheap (one grep comparison) and catches sync drift.

---

## File: 02-inline-identity-audit.md

### What the Plan Gets Right
The plan correctly treats inline headers as insufficient substitutes for formal provenance (consistent with Report 02's conclusion in Section 8, lines 554-572). The plan's census-a agent reads all 6 OD HTML file headers (first 150 lines) to extract findings — this aligns with the data locations Report 02 identifies.

### REVISIONS NEEDED (from this file)

**REVISION 7 — CRITICAL**
- **Plan Section Affected:** Wave 1, census-a; OD-F Finding Registry (plan lines 215-231)
- **What's Missing/Wrong:** The plan's OD-F Finding Registry lists OD-F-001 through OD-F-008 as "Existing" (from OD-001 and OD-006) and OD-F-009 through OD-F-012 as "NEW." But Report 02 Section 3 (lines 353-377) reveals that OD-F-001 through OD-F-004 were RETROACTIVELY identified and cataloged only in OD-006 — they do NOT appear in OD-001's header. OD-001's header contains ZERO OD-F references (line 39: "OD-F finding IDs cited: None"). The plan lists OD-F-001 as "Source: OD-001" but in reality, the only formal declaration point is OD-006's header. census-a must be told to source OD-F-001-004 from OD-006's header AND from OD-CHECKPOINT.md — NOT from OD-001's header (where they don't exist).
- **Evidence from Report:** Lines 39 ("OD-F finding IDs cited: None" for OD-001), lines 353-370 (OD-F-001-005 appear ONLY in OD-006's header), line 370 ("OD-F-001 through OD-F-004 were retroactively identified and cataloged only in OD-006, not propagated back to OD-001's header").
- **Proposed Fix:** census-a prompt must state: "OD-F-001 through OD-F-004 are described as OD-001 findings but their formal definitions live in OD-006-creative.html lines 34-37 and in OD-CHECKPOINT.md lines 140-157. Do NOT expect to find them in OD-001-conversational.html's header." This prevents the agent from searching OD-001 for findings that aren't there.

**REVISION 8 — HIGH**
- **Plan Section Affected:** Wave 1, census-a; Finding extraction methodology
- **What's Missing/Wrong:** Report 02 reveals a DUAL-BLOCK architecture in every OD file (Section 1 across all 6 entries, e.g., lines 13-17 for OD-001): Block 1 is the "original" header with research citations and EXT findings; Block 2 is the Phase 2B threading header with structured dependency tables. The plan instructs census-a to read "first 150 lines" of each OD file but does not tell the agent about the dual-block structure. census-a needs to know that EXT findings are in Block 1 (original header) while dependency/soul data is in Block 2 (threading header). Without this, the agent may miss EXT findings or misattribute data.
- **Evidence from Report:** Lines 13-17 (dual-block structure explained for OD-001), lines 300-304 (structural consistency — all 6 files have this dual-block pattern), lines 520-524 (Observation 1: dual-block creates information duplication with non-exact overlap).
- **Proposed Fix:** Both census-a and census-b prompts must include: "Each OD HTML file has TWO comment blocks: Block 1 (original header, contains research citations and EXT finding IDs) and Block 2 (inline threading header, contains BUILT ON/MUST HONOR/CONSUMED BY tables). Extract EXT findings from Block 1. Extract dependency and soul data from Block 2."

**REVISION 9 — HIGH**
- **Plan Section Affected:** Wave 1, census-b (EXT-RESEARCH-REGISTRY.md); plan line 117 ("~56 EXT findings across 6 categories")
- **What's Missing/Wrong:** The plan says "~56 EXT findings across 6 categories" but Report 02 Section 6 (lines 496-517) provides EXACT counts per OD: OD-001 has 13 EXT findings, OD-002 has 0, OD-003 has 8, OD-004 has 12, OD-005 has 10, OD-006 has 12+. That's approximately 55, close to the plan's estimate. BUT Report 02 Section 2, OD-004 entry (lines 174-177) reveals a naming inconsistency: OD-004's original block uses "EXT-CONF" WITHOUT numeric suffixes, while numeric IDs (EXT-CONF-003, EXT-CONF-007, EXT-CONF-010) appear only in downstream CSS comments and diagnostic questions. The plan does not warn census-b about this inconsistency, which means the agent may fail to extract OD-004's EXT findings or produce duplicate/conflicting entries.
- **Evidence from Report:** Lines 174-177 (OD-004 EXT-CONF naming inconsistency), line 532 (Observation 3: "automated extraction of EXT finding IDs from headers would produce unreliable results for OD-004").
- **Proposed Fix:** census-b prompt must include: "WARNING: OD-004-confidence.html uses non-standard EXT-CONF naming in its original block (descriptive labels without numeric suffixes). Cross-reference with diagnostic questions (Q1-Q8) in the threading header to find the numeric IDs: EXT-CONF-003, EXT-CONF-007, EXT-CONF-010. Map descriptive labels to numeric IDs where possible."

**REVISION 10 — HIGH**
- **Plan Section Affected:** Wave 2, chain-a (OD-SYNTHESIS.md content specification)
- **What's Missing/Wrong:** Report 02 Section 4 (lines 400-572) identifies 10 things inline headers do NOT capture that formal provenance MUST. The plan's OD-SYNTHESIS.md specification mentions "Cross-OD analysis, 3-quality-dialect, 6-pattern table with scores" but misses several of these 10 items: (1) No temporal history/evolution narrative (Section 4, line 428); (2) No decision rationale at the phase level — why these 6 patterns? (line 430); (3) No cross-OD comparison with scoring (line 432); (4) No aggregate statistics (line 434); (5) No score justification methodology (line 436); (6) No finding lifecycle documentation (line 442 — when OD-F-001 was first identified, validated). The plan's specification is missing at least 4 of these.
- **Evidence from Report:** Lines 428-446 (10 things headers don't capture), lines 562-572 (synthesis requires aggregation, temporal ordering, finding lifecycle, strategic decisions, audit integration).
- **Proposed Fix:** chain-a's OD-SYNTHESIS.md specification must include these additional sections: (1) "Phase-level decisions" — why 6 organizational patterns, why these pairings, what alternatives were rejected; (2) "Cross-OD comparative scoring" — which OD scored highest and why, which scored lowest and why; (3) "Finding lifecycle" — when OD-F-001-008 were identified, where they were validated, what evidence supports each; (4) "Pattern evolution narrative" — how understanding of organizational patterns changed from OD-001 to OD-006.

**REVISION 11 — MEDIUM**
- **Plan Section Affected:** Wave 2, chain-a reading list
- **What's Missing/Wrong:** Report 02 reveals that OD-002 is the THINNEST header (132 lines, 0 EXT findings, only 5 diagnostic questions — line 347) and OD-006 is the RICHEST (187 lines, 5 OD-F findings, 12+ EXT findings, all-predecessor lessons — line 342). The plan has chain-a read "All 6 OD HTML files (first 150 lines)" uniformly. This may cause the agent to under-read OD-006 (which extends to line 187) and over-read OD-002 (which has less data). More importantly, the plan does not instruct chain-a about the richness asymmetry or that OD-006 is the synthesis exploration containing findings from ALL other ODs.
- **Evidence from Report:** Lines 340-348 (richness ranking), lines 287-293 (OD-006 unique features: only OD with OD-F findings in header, only OD cataloging all predecessors).
- **Proposed Fix:** chain-a's reading instructions should say: "Read OD-006-creative.html first 200 lines (it is the richest and contains all OD-F findings). Read OD-001 through OD-005 first 150 lines each. OD-006 is the synthesis exploration — it catalogs lessons from all 5 predecessors and contains the OD-F-005 meta-finding."

---

## File: 03-pipeline-infrastructure-map.md

### What the Plan Gets Right
The plan correctly identifies the 4 CRITICAL and 4 HIGH divergences (Section 6.4, lines 480-491). The wave architecture respects the pipeline's expected artifact template (Section 1.4, lines 74-84). The plan's infra agent updates match the staleness list in Section 6.2.

### REVISIONS NEEDED (from this file)

**REVISION 12 — CRITICAL**
- **Plan Section Affected:** Wave 1, census-a; OD-F Finding Registry (plan lines 215-231)
- **What's Missing/Wrong:** The plan lists 12 OD-F findings (8 existing + 4 new). Report 03 Section 3.3 (lines 252-270) reveals that OD-002, OD-003, OD-004, and OD-005 generated ZERO formally recorded findings despite each having documented key insights in OD-CHECKPOINT.md. The plan addresses this by creating OD-F-009 through OD-F-012 (one per exploration OD-002 through OD-005). But Report 03 (line 268) says "Total: 8 findings vs the 18 that DD generated (Stage 2 produced more than double)." The plan's 4 new findings bring the total to 12, still 33% fewer than DD's 18. The plan does not discuss whether this is intentional or whether more findings should be extracted. DD had process findings (DD-F-007 through DD-F-009), forward-looking findings for multiple stages (DD-F-010 through DD-F-014), and anti-pattern findings (DD-F-015 through DD-F-018). The plan's new OD-F-009-012 are all pattern findings — no OD process findings, no OD forward-looking findings for AD/CD, no OD anti-pattern findings.
- **Evidence from Report:** Lines 252-270 (8 OD-F findings from only 2 of 6 explorations, 0 process/forward/anti-pattern findings). Also Report 01, lines 46-53 (DD had 5 pattern + 1 meta-pattern + 3 process + 4 forward-looking + 4 anti-pattern = 18 total in 5 categories).
- **Proposed Fix:** census-a must be instructed to extract not just pattern findings but also: (1) OD process findings (e.g., "iteration improved scores," "3-dialect quality gap was the #1 systemic issue"); (2) OD forward-looking findings for AD (e.g., "organizational patterns imply axis preferences" parallel to DD-F-012); (3) OD anti-pattern findings (e.g., the 2px border epidemic, traffic-light color persistence). The registry should target 15-18 findings across these categories, matching DD's structural depth. Add OD-F-013 through OD-F-018 (or similar) for process, forward, and anti-pattern categories.

**REVISION 13 — HIGH**
- **Plan Section Affected:** Wave 4, infra agent (BACKBONE.md update)
- **What's Missing/Wrong:** The plan says infra will "Rewrite Section 4 to past tense." Report 03 Section 6.2, Divergence 4 (lines 442-445) specifies the exact content that needs changing: "BACKBONE.md Section 4 still reads 'IN PROGRESS' for Stage 3. The causal chain diagram still shows 'OD organizational explorations (in progress)'. " But the plan does not specify that the causal chain DIAGRAM needs updating. BACKBONE.md contains a visual pipeline diagram (Report 03 Section 1.1, lines 15-41) showing the stage flow. The infra agent must update BOTH the narrative text AND the diagram representation.
- **Evidence from Report:** Lines 442-445 (causal chain diagram still shows in-progress), lines 15-41 (five-stage model diagram).
- **Proposed Fix:** infra agent prompt must specify: "Update BACKBONE.md Section 4: (1) Change Stage 3 status from IN PROGRESS to COMPLETE in narrative text, (2) Update the causal chain diagram to show Stage 3 with COMPLETE marker and actual OD-F finding count, (3) Update the Accumulated Research Weight section for Stage 3 with actual values."

**REVISION 14 — HIGH**
- **Plan Section Affected:** Wave 4, infra agent (PIPELINE-MANIFEST.md update)
- **What's Missing/Wrong:** The plan says infra will "Add OD-F Section B, update counts." Report 03 Section 6.2, Divergence 5 (lines 446-449) identifies TWO stale sections in PIPELINE-MANIFEST: Section B Stage 3 AND Section D Organizational Patterns. The plan mentions Section B but does NOT mention Section D. Report 03's Section 2 completeness matrix (lines 150-151) confirms: "PIPELINE-MANIFEST.md update: NOT DONE (still says 'TBD')." The plan also does not specify updating Section E (Cross-references) with OD findings.
- **Evidence from Report:** Lines 446-449 (Section B Stage 3 says "TBD," Section D Organizational Patterns says "TBD"), Report 01 lines 249-256 (DD contributed to PIPELINE-MANIFEST Sections B, D, and E; OD has contributed to none).
- **Proposed Fix:** infra agent prompt must specify THREE updates to PIPELINE-MANIFEST: (1) Section B: Add OD-F-001 through OD-F-012+ with Type, Consumed By, Status columns; (2) Section D: Add 6 organizational patterns with Research, Generated Finding, Validated By, Score columns (parallel to the 6 density patterns DD added); (3) Section E: Add OD cross-references for OD-F findings. This is significantly more work than "Add OD-F Section B, update counts."

**REVISION 15 — HIGH**
- **Plan Section Affected:** Wave 4, infra agent; plan line 77 (PATTERN-INDEX.md update)
- **What's Missing/Wrong:** The plan says infra will update PATTERN-INDEX.md "6 patterns PENDING -> VALIDATED." But Report 03 Section 2 (lines 143-144) shows `organizational-patterns.md` is listed as a CRITICAL missing file. The plan assigns organizational-patterns.md creation to chain-b (Wave 2), and PATTERN-INDEX.md update to infra (Wave 4). But the plan does NOT specify that PATTERN-INDEX.md must add ENTRIES for the 6 organizational patterns (not just change their status). If organizational-patterns.md didn't exist before, the PATTERN-INDEX.md may not have placeholders for 6 organizational patterns at all — the infra agent may need to ADD rows, not just update status.
- **Evidence from Report:** Lines 143-144 (organizational-patterns.md DOES NOT EXIST as CRITICAL gap), Report 01 lines 253-255 (PIPELINE-MANIFEST Section D Organizational Patterns currently says "TBD").
- **Proposed Fix:** infra agent prompt must specify: "Check if PATTERN-INDEX.md already has 6 organizational pattern entries with PENDING status. If yes, update to VALIDATED with scores and evidence. If no entries exist, ADD 6 new rows from chain-b's organizational-patterns.md output. Cross-reference density-patterns.md format for column structure."

**REVISION 16 — MEDIUM**
- **Plan Section Affected:** Verification Protocol, Post-Commit Traversal Test (plan lines 208-212)
- **What's Missing/Wrong:** Report 03 Section 5.2 (lines 369-399) lists 10 specific things AD expects to receive from OD. The plan's verification checks (Wave 1-4 per-wave checks) verify file existence and basic content, but do NOT verify that the 10 AD expectations are met. The plan's traversal test traces 3 specific findings, which is useful, but does not verify the complete AD input set.
- **Evidence from Report:** Lines 369-399 (10 things AD expects). The plan's traversal test covers OD-F findings and EXT findings but not: organizational patterns (expectation #3), quality metrics (expectation #4), research application rate (expectation #5), density-to-organization pairing validation (expectation #6), cognitive soul pieces (expectation #7).
- **Proposed Fix:** Add a "AD Readiness Checklist" to the post-commit verification: verify that all 10 AD expectations listed in Report 03 Section 5.2 are satisfied. Specifically add checks for: organizational-patterns.md contains 6 patterns with scores, HANDOFF-OD-TO-AD.md contains quality bar section, RESEARCH-ACTIVE.md shows R-1 application rate >= 80%, SOUL-DISCOVERIES.md has Stage 3 determination.

---

## File: 04-ad-readiness-assessment.md

### What the Plan Gets Right
The plan's gate agent (Wave 3) creates HANDOFF-OD-TO-AD.md with the correct high-level section list matching the DD-to-OD gold standard. The plan correctly identifies that AD STAGE-HEADER.md exists as a placeholder and the HANDOFF is the critical gate file.

### REVISIONS NEEDED (from this file)

**REVISION 17 — CRITICAL**
- **Plan Section Affected:** Wave 3, gate (HANDOFF-OD-TO-AD.md); reading list
- **What's Missing/Wrong:** Report 04 Section 5.5 (lines 229-243) identifies 7 SPECIFIC MISTAKES an AD agent could make without the handoff. The plan's gate agent has a section list (PURPOSE, Patterns, Findings, Soul, Quality Bar, Research, Lessons, Responsibilities, Pairings, Acknowledgment) but does NOT specifically address preventing these 7 mistakes. Most critically: Mistake #3 (line 235) — "Miss the transitive relationship chain: organizational pattern -> density pattern -> axis preference." DD-F-012 says density implies axis. OD-F-005 says organization IS density. Therefore: organization implies axis. This TRANSITIVE CHAIN is the key insight the handoff must communicate. The plan's gate agent reads OD-SYNTHESIS and OD-outbound-findings but is not told to synthesize the OD-F-005 + DD-F-012 transitive implication.
- **Evidence from Report:** Lines 229-243 (7 mistakes), especially line 235: "organizational pattern -> density pattern -> axis preference. An AD agent without the handoff would only see the DD-F-012 direct link, missing the transitive relationship."
- **Proposed Fix:** gate agent prompt must include: "The handoff MUST explicitly state the transitive relationship: OD-F-005 (organization IS density) + DD-F-012 (density implies axis) = organizational pattern implies axis preference. This three-step chain must be stated as a mandatory AD constraint, not left for AD to infer." Additionally, the handoff should include a "Mistakes to Avoid" section derived from Report 04's 7 mistakes (quality-dialect inconsistency, mode-transition breathing, compound creative techniques, fractal at organizational level, etc.).

**REVISION 18 — CRITICAL**
- **Plan Section Affected:** Wave 3, gate (HANDOFF-OD-TO-AD.md); gate agent reading list (plan lines 146-149)
- **What's Missing/Wrong:** The gate agent reads: HANDOFF-DD-TO-OD.md (template), OD-outbound-findings.md (Wave 1), OD-SYNTHESIS.md (Wave 2), OD-AUDIT-SYNTHESIS.md (Wave 2). Report 04 Section 6.3 (lines 276-284) identifies 7 things lost in a workaround vs proper handoff. The gate agent's reading list does NOT include: (1) the AD STAGE-HEADER.md placeholder (needed to know the 6 planned AD explorations for the pairing table — per Revision 5), (2) OD-CHECKPOINT.md (contains per-OD scores and insights not captured in synthesis), (3) the organizational-patterns.md (created by chain-b — needed to include pattern inventory with scores in the handoff). The gate agent only reads Wave 1 and Wave 2 outputs but misses chain-b's output entirely.
- **Evidence from Report:** Lines 276-284 (7 things lost), lines 179-189 (AD cannot know which OD patterns to pair with), line 189 ("The missing mapping is: 'Which organizational patterns pair with which axis layouts?'").
- **Proposed Fix:** gate agent reading list must add: (1) `provenance/stage-4-axis-ad/STAGE-HEADER.md` — to know the 6 planned AD explorations; (2) `checkpoints/OD-CHECKPOINT.md` — for per-OD scores and insights; (3) `patterns/organizational-patterns.md` — chain-b's output with validated patterns. The gate agent must be blocked on BOTH chain-a AND chain-b (currently the plan's dependency only shows gate blocked on chain-a + chain-b, which is correct, but the reading list omits chain-b's output file).

**REVISION 19 — HIGH**
- **Plan Section Affected:** Wave 3, gate; HANDOFF section specification
- **What's Missing/Wrong:** Report 04 Section 1.1 (lines 14-27) documents the DD-to-OD handoff's 10 structural sections with approximate line counts. The plan's gate specification says "PURPOSE, Patterns, Findings, Soul, Quality Bar, Research, Lessons, Responsibilities, Pairings, Acknowledgment" (plan line 152) — 10 sections. But the mapping is imprecise. Report 04 Section 6.3 reveals that DD's handoff included "Lessons from failure" (line 41: "What scored low and why, so the next stage can avoid the same mistakes") — the plan lists "Lessons" but does not specify it must include per-OD score analysis (which scored highest/lowest and why). Also missing: the "Iteration guidance" insight from Report 04 line 41 ("Plan for at least one iteration. First attempt rarely final.").
- **Evidence from Report:** Lines 14-27 (10 handoff sections with line counts), lines 24-25 ("Why DD-006 scored highest, why DD-001/DD-003 scored lowest, and re-audit improvement data +1.8"), lines 41-42 ("Iteration guidance").
- **Proposed Fix:** gate agent's "Lessons" section must be specified as: "OD Iteration Lessons: (1) Which OD scored highest and why; (2) Which OD scored lowest and why; (3) Re-audit improvement data if applicable; (4) The 3-dialect quality gap problem and how AD should avoid it; (5) Iteration guidance for AD." This turns a vague "Lessons" into a structured section with 5 sub-items.

**REVISION 20 — HIGH**
- **Plan Section Affected:** Wave 2, chain-b (organizational-patterns.md); Entire plan scope
- **What's Missing/Wrong:** Report 04 Section 5.4 (lines 218-228) reveals that OD may have discovered NEW anti-patterns that the plan does not address comprehensively. The plan assigns chain-b to "Append to anti-patterns/registry.md" but does not specify WHICH new anti-patterns. Report 04 identifies at least 3 candidates: (1) The "3-dialect quality gap" — is this an anti-pattern or acceptable range? (2) The 2px border epidemic (108 CSS declarations); (3) Mode-transition without breathing zones. The plan's chain-b agent reads OD-CHECKPOINT but may not extract these as formal anti-patterns unless told to look for them.
- **Evidence from Report:** Lines 218-228 (3 candidate anti-patterns from OD), line 227 ("Mode-transition breathing OD-F-007 implies switching organizational modes without breathing zones is an anti-pattern").
- **Proposed Fix:** chain-b's anti-pattern extraction instructions must say: "Extract the following OD-discovered anti-patterns for the registry: (1) Quality dialect inconsistency — building different OD explorations at different quality levels; (2) Mode-transition without breathing — switching organizational modes abruptly without breathing zones (inverse of OD-F-007); (3) [Any additional anti-patterns from the audit results]. Format each as: ID, Name, Description, Source, Severity, How to Avoid."

**REVISION 21 — MEDIUM**
- **Plan Section Affected:** Wave 4, infra; AD enforcement gate (plan line 24)
- **What's Missing/Wrong:** The plan says "Binary gate in stage-4-axis-ad/CLAUDE.md: 'DO NOT begin AD work until HANDOFF-OD-TO-AD.md exists.'" Report 04 Section 6.3 (lines 276-301) makes clear that the AD agent needs to read TWO files minimum (HANDOFF-OD-TO-AD.md AND OD-outbound-findings.md), not just check for the handoff's existence. The binary gate should require BOTH files, and the AD CLAUDE.md should specify a reading order.
- **Evidence from Report:** Lines 293-294 ("'Works properly' means an AD agent reads exactly 2 files before starting: HANDOFF-OD-TO-AD.md and OD-outbound-findings.md").
- **Proposed Fix:** The AD enforcement gate should be: "DO NOT begin AD work until BOTH HANDOFF-OD-TO-AD.md AND OD-outbound-findings.md exist in provenance/stage-3-organization-od/. Read HANDOFF-OD-TO-AD.md FIRST, then OD-outbound-findings.md. Confirm the acknowledgment checklist before building."

---

## File: 05-traversal-chain-tests.md

### What the Plan Gets Right
The plan's post-commit traversal test (lines 208-212) traces 3 findings, which aligns with Report 05's 3-chain methodology. The plan correctly identifies OD-F-005 and the OD-outbound -> HANDOFF -> PIPELINE-MANIFEST path.

### REVISIONS NEEDED (from this file)

**REVISION 22 — CRITICAL**
- **Plan Section Affected:** Entire plan; NO agent is assigned to fix the R3-023/R3-036 split identity
- **What's Missing/Wrong:** Report 05 Chain 1 (lines 37-52, 179) reveals a SEVERE finding ID discrepancy: the fractal self-similarity concept is called R3-023 in PIPELINE-MANIFEST and BACKBONE.md, but called R3-036 in RESEARCH-ACTIVE.md and all 6 OD HTML headers. PIPELINE-MANIFEST says R3-023 = fractal, R3-036 = CRESCENDO. RESEARCH-ACTIVE says R3-036 = fractal. Both IDs refer to the same concept in different files. The plan has NO agent assigned to resolve this split identity. If left unresolved, any agent tracing backward from an OD citation of "R3-036" would find "CRESCENDO definition" in the PIPELINE-MANIFEST — the wrong finding entirely.
- **Evidence from Report:** Lines 37-52 (R3-023 vs R3-036 table showing the split), lines 179 (summary: "R3-023 and R3-036 both refer to the fractal finding in different parts of the system"), lines 519-521 (cross-chain findings: "Agents tracing backward from OD headers would find 'R3-036' and look it up in PIPELINE-MANIFEST where R3-036 = 'CRESCENDO definition', not fractal").
- **Proposed Fix:** Add a specific task to infra agent: "RESOLVE the R3-023/R3-036 split identity. The fractal self-similarity concept is R3-023 in PIPELINE-MANIFEST (line 113) and BACKBONE.md, but R3-036 in RESEARCH-ACTIVE.md and all 6 OD headers. Determine the canonical ID by checking the R3 research file body text (Insight 23 = R3-023). Update RESEARCH-ACTIVE.md to use R3-023 for fractal. Add a disambiguation note in PIPELINE-MANIFEST clarifying that R3-036 = CRESCENDO (not fractal) and R3-023 = fractal. NOTE: Do NOT change the OD HTML headers (they are audited artifacts) — instead, add a cross-reference note in OD-outbound-findings.md stating that OD headers cite R3-036 for fractal but the canonical ID is R3-023."

**REVISION 23 — CRITICAL**
- **Plan Section Affected:** Entire plan; NO agent is assigned to fix the OD-F-005 ID collision
- **What's Missing/Wrong:** Report 05 Chain 2, Hop 7 (lines 295-301) reveals an ID COLLISION: builder-log.md line 144 says OD-F-005 = "Narrative arc NATURALLY creates CRESCENDO" while the canonical definition (OD-006, OD-CHECKPOINT) says OD-F-005 = "Organization IS Density." Two completely different findings share the same ID in different files. The plan has NO agent assigned to resolve this collision. If an AD agent encounters both definitions, they would not know which is correct.
- **Evidence from Report:** Lines 295-301 (builder-log.md line 144 gives OD-F-005 a completely different meaning), line 521 (cross-chain finding: "Two different findings share the same ID in different files").
- **Proposed Fix:** Add a specific task to census-a agent: "Check builder-log.md for OD-F finding definitions. If builder-log.md line 144 defines OD-F-005 as 'Narrative arc NATURALLY creates CRESCENDO,' this is an ID collision. The CANONICAL definition is in OD-006-creative.html and OD-CHECKPOINT.md: OD-F-005 = 'Organization IS Density.' Add a disambiguation note in OD-outbound-findings.md: 'NOTE: builder-log.md contains an earlier draft definition for OD-F-005 that was superseded. The canonical definition is below.' Do NOT modify builder-log.md (it is a historical record)."

**REVISION 24 — HIGH**
- **Plan Section Affected:** Post-Commit Traversal Test (plan lines 208-212)
- **What's Missing/Wrong:** The plan's traversal test traces 3 findings but does not test the SPECIFIC break points Report 05 identified. The plan says: "(1) R3-023 -> DD-F-006 -> OD application -> OD-outbound -> HANDOFF-OD-TO-AD" — but this uses R3-023, while the OD files cite R3-036 for the same finding (per Revision 22). The traversal test as written would PASS at Hop 1 (R3-023 exists) but not catch that the OD application cites R3-036 instead. Also, the plan's test #2 traces "OD-F-005 -> OD-outbound -> HANDOFF-OD-TO-AD -> PIPELINE-MANIFEST" but does not test the backward direction or check for the builder-log ID collision.
- **Evidence from Report:** Lines 157-170 (Chain 1 summary showing PARTIAL at Hop 6-7), lines 314-337 (Chain 2 summary showing NOT FOUND at formal provenance), lines 496-553 (cross-chain findings with specific break points).
- **Proposed Fix:** Revise the traversal test to explicitly check the break points: Test 1 should verify "R3-023 OR R3-036 (the split IDs) -> DD-F-006 -> HANDOFF-DD-TO-OD -> OD application (all 6 files cite DD-F-006) -> NEW OD-outbound-findings.md has DD-F-006 consumption record -> NEW HANDOFF-OD-TO-AD.md carries DD-F-006 forward -> PIPELINE-MANIFEST.md updated with OD application." Test 2 should verify "OD-F-005 in OD-006 header -> OD-F-005 in NEW OD-outbound-findings.md (canonical definition matches OD-CHECKPOINT) -> OD-F-005 in NEW HANDOFF-OD-TO-AD.md -> OD-F-005 in PIPELINE-MANIFEST.md (newly added) AND NO contradictory definitions in builder-log.md are cited."

**REVISION 25 — HIGH**
- **Plan Section Affected:** Post-Commit Traversal Test; implicit finding ID convention
- **What's Missing/Wrong:** Report 05 Cross-Chain Findings (lines 522-525) identifies a systemic fragility: original research files use body-text numbering ("Finding 1.1", "Insight 23") while all downstream consumers use R-prefix notation (R1-001, R3-023). "The mapping between these two systems is positional (Finding 1.1 = first finding of first section = R1-001) and is never explicitly stated in any file." The plan creates new OD-F findings (OD-F-009 through OD-F-012) using the same implicit convention but does not address whether the convention is documented anywhere. If an agent needs to verify "Is OD-F-009 really from OD-002?" they need to trust the positional convention without a lookup table.
- **Evidence from Report:** Lines 522-525 (implicit ID convention fragility), line 361 (R1-001 = "Finding 1.1" mapping is inferred, not stated).
- **Proposed Fix:** census-a's OD-outbound-findings.md must include a "Finding ID Convention" section: "OD-F-NNN IDs are assigned sequentially. The canonical definition of each finding is in this file. OD-F-001-004 originated from OD-001 but were formally identified during OD-006 synthesis. OD-F-005-008 originated from OD-006. OD-F-009-012 were identified during provenance remediation from OD-002-005 respectively." This makes the convention explicit, solving the fragility for OD.

**REVISION 26 — MEDIUM**
- **Plan Section Affected:** Wave 4, infra (PIPELINE-MANIFEST.md update)
- **What's Missing/Wrong:** Report 05 Chain 1, Hop 7 (lines 133-143) shows that PIPELINE-MANIFEST has a "cross-reference example" section (lines 231-237) tracing R3-023 through DD-006, DD-F-006, HANDOFF-DD-TO-OD, BACKBONE.md. After OD remediation, this cross-reference should be EXTENDED to show the OD continuation of the chain. The plan does not mention updating this cross-reference section.
- **Evidence from Report:** Lines 139 ("Lines 231-237: Cross-reference example tracing R3-023 through DD-006, DD-F-006, HANDOFF-DD-TO-OD, BACKBONE.md"), line 141 ("DD-F-006's OD application is NOT registered in the PIPELINE-MANIFEST").
- **Proposed Fix:** infra agent must update PIPELINE-MANIFEST.md's cross-reference example section to extend the DD-F-006 chain: "R3-023 -> DD-006 -> DD-F-006 -> HANDOFF-DD-TO-OD -> OD (all 6 files) -> OD-outbound-findings.md -> HANDOFF-OD-TO-AD." This demonstrates the chain is now complete through Stage 3.

---

## Summary of All Revisions

### By Severity

| Severity | Count | Revisions |
|----------|-------|-----------|
| CRITICAL | 5 | #1, #7, #12, #22, #23 |
| HIGH | 14 | #2, #3, #4, #8, #9, #10, #13, #14, #15, #17, #18, #19, #20, #24, #25 |
| MEDIUM | 7 | #5, #6, #11, #16, #21, #26 |
| **TOTAL** | **26** | |

### By Plan Section Most Affected

| Plan Section | Revision Count | Most Critical |
|-------------|---------------|---------------|
| census-a (Wave 1) | 5 | #7 (OD-F source location), #12 (finding category gaps), #23 (ID collision) |
| census-b (Wave 1) | 2 | #9 (EXT naming inconsistency) |
| chain-a (Wave 2) | 4 | #1 (audit file pair), #10 (10 missing synthesis elements) |
| chain-b (Wave 2) | 2 | #20 (anti-pattern extraction) |
| gate (Wave 3) | 4 | #17 (transitive chain), #18 (reading list gaps) |
| infra (Wave 4) | 7 | #22 (R3-023/036 split), #13 (BACKBONE diagram), #14 (PIPELINE 3 sections) |
| Verification Protocol | 3 | #24 (traversal test break points) |
| Missing entirely from plan | 2 | #22 (R3 split identity), #23 (OD-F-005 collision) |

### Top 5 Revisions by Impact

1. **#22 (CRITICAL)** — R3-023/R3-036 split identity: no agent assigned, would corrupt backward tracing
2. **#23 (CRITICAL)** — OD-F-005 ID collision: two conflicting definitions in different files
3. **#17 (CRITICAL)** — Transitive relationship chain (org -> density -> axis) not in handoff
4. **#12 (CRITICAL)** — Finding categories: 0 process, 0 forward-looking, 0 anti-pattern OD-F findings
5. **#7 (CRITICAL)** — census-a told OD-F-001-004 are from OD-001 but they only exist in OD-006's header
