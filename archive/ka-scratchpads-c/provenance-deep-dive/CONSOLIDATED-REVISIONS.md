# CONSOLIDATED REVISIONS — Provenance Chain Remediation Plan

**Compiled:** 2026-02-08
**Compiler:** Revision Compiler Agent (Opus 4.6)
**Sources:** 3 revision agents auditing 15 gap analysis files against CLAUDE-PLAN-FOR-REVISION.md
**Raw revision counts:** Diagnostic (files 01-05): 26 revisions | Foundation (files 06-12): 30 revisions | Architecture (files 13-17): 38 revisions = **94 total revisions**
**After de-duplication:** ~62 unique issues (convergent findings counted once)

---

## SECTION 1: TOP 15 MOST CRITICAL REVISIONS

Ranked by impact. These are the changes that, if not made, would cause the remediation to produce a structurally unsound provenance chain.

---

### #1 — Verification Framework is 5% Coverage
- **Priority:** CRITICAL
- **Plan Section:** Verification Protocol (lines 199-212)
- **What's Wrong:** The plan's verification is 14 lines covering ~5 items. Report 17 defines a 104-item, 18-dimension verification framework. The plan tests file existence + grep counts + 3 traversal traces. It misses entirely: Document Universe Completeness (7 items), Finding ID Integrity (10 items), Stage Completeness (21 items), Cross-Traversability (6 items), Accumulation Integrity (7 items), Infrastructure Consistency (16 items), Information Ratio (4 items), Reproducibility (5 items), Process Integrity (8 items).
- **Fix:** Add a verification phase covering at minimum 50 items: all 21 Category C (stage completeness), all 10 Category D (forward traversability), all 7 Category G (accumulation integrity), key items from Categories B, H, J. Deploy a fresh-eyes agent for reproducibility test J-03. Move verification to BEFORE commit. Add binary "done" definition: all CRITICAL gaps closed + J-03 PASS + zero finding ID collisions.

### #2 — Plan Skips Diagnostic and Triage Phases Entirely
- **Priority:** CRITICAL
- **Plan Section:** Team Architecture 4-wave structure (lines 29-47)
- **What's Wrong:** Report 15 has 6 phases; the plan has 4 waves. The plan completely skips Phase 1 (Complete Diagnostic: finding registry scanner, reference graph builder, traversal chain baseline tester -- 3 agents) and Phase 2 (Dark Matter Triage: systematic classification of 51+ dark matter files -- 3 agents). Without the finding registry, agents cannot verify they captured all ~89 finding IDs. Without the reference graph, agents cannot identify broken edges. Without the traversal baseline, there is no before/after comparison to prove the remediation worked.
- **Fix:** Add Phase 1 (Diagnostic: 3 parallel agents) and Phase 2 (Triage: 3 parallel agents) before chain building. These are on the CRITICAL PATH per Report 15 (line 231). They add ~35 minutes but produce structured, de-conflicted input for chain builders, reducing errors and context pressure.

### #3 — 7 Agents vs 17: Losing Granularity, Graph Builder, Tester, Weaver
- **Priority:** CRITICAL
- **Plan Section:** Team Architecture (lines 29-47)
- **What's Wrong:** The plan uses 7 agents (Lead + 6 workers). Report 16 specifies 17 agents across 6 waves. The plan collapses: 5 census agents into 2 (losing scratchpad extraction), 3 chain builders into 2 (overloading chain-a with 3 output files), 4 updaters into 1 (infra must update 10 files -- double the proven sweet spot). Missing entirely: Weaver (proven essential in 3 prior teams per MEMORY.md), Graph Builder (adjacency matrix for chain builders), Traversal Tester (fresh-eyes quality gate).
- **Fix:** Increase to 12-17 agents. Minimum: Lead, Weaver, 3-5 Census, 1 Graph Builder, 3 Chain Builders, 3-4 Updaters, 1 Traversal Tester. The Weaver maintains cross-agent state (prevents lead violating THIN rule). The Traversal Tester provides independent quality gate.

### #4 — No Fresh-Eyes Reproducibility Test (J-03)
- **Priority:** CRITICAL
- **Plan Section:** Verification Protocol, Post-Commit Traversal Test (lines 207-211)
- **What's Wrong:** Report 17 Category J item J-03 is the single most important test: "Read ONLY provenance/stage-3-organization-od/ -- can you answer: how many explorations? what scores? what findings? what was audited? what does AD need? All 5 questions answerable." This MUST be performed by a fresh agent that has NOT read any source material, checkpoints, or scratchpad files. The plan's traversals are performed by the lead (who has seen everything), violating both the fresh-eyes constraint and the THIN rule.
- **Fix:** Deploy a fresh-context agent that reads ONLY the Stage 3 provenance directory. Must answer all 5 questions. If any answer is unavailable from provenance alone, the chain is incomplete. This is a MANDATORY verification gate.

### #5 — R3-023/R3-036 Split Identity: No Agent Assigned
- **Priority:** CRITICAL
- **Plan Section:** Entire plan -- no resolution task exists
- **What's Wrong:** The fractal self-similarity concept is called R3-023 in PIPELINE-MANIFEST and BACKBONE.md, but R3-036 in RESEARCH-ACTIVE.md and all 6 OD HTML headers. PIPELINE-MANIFEST says R3-023 = fractal, R3-036 = CRESCENDO. RESEARCH-ACTIVE says R3-036 = fractal. Both IDs refer to the same concept in different files. If unresolved, any agent tracing backward from an OD citation of "R3-036" would find "CRESCENDO definition" in PIPELINE-MANIFEST -- the wrong finding entirely.
- **Fix:** Add specific task to infra/updater agent: "RESOLVE the R3-023/R3-036 split identity. Canonical ID is R3-023 (from R3 research file body text, Insight 23). Update RESEARCH-ACTIVE.md to use R3-023 for fractal. Add disambiguation note in PIPELINE-MANIFEST clarifying R3-036 = CRESCENDO (not fractal). Add cross-reference in OD-outbound-findings.md stating that OD headers cite R3-036 for fractal but canonical ID is R3-023. Do NOT change OD HTML headers (audited artifacts)."

### #6 — OD-F-005 ID Collision: Two Conflicting Definitions
- **Priority:** CRITICAL
- **Plan Section:** Entire plan -- no resolution task exists
- **What's Wrong:** builder-log.md line 144 says OD-F-005 = "Narrative arc NATURALLY creates CRESCENDO" while the canonical definition (OD-006, OD-CHECKPOINT) says OD-F-005 = "Organization IS Density." Two completely different findings share the same ID in different files.
- **Fix:** Add task to census-a: "Check builder-log.md for OD-F finding definitions. If builder-log.md line 144 defines OD-F-005 differently from OD-CHECKPOINT, add disambiguation note in OD-outbound-findings.md: 'builder-log.md contains an earlier draft definition for OD-F-005 that was superseded. The canonical definition is below.' Do NOT modify builder-log.md (historical record)."

### #7 — Transitive Relationship Chain Missing from Handoff
- **Priority:** CRITICAL
- **Plan Section:** Wave 3, gate (HANDOFF-OD-TO-AD.md)
- **What's Wrong:** The key insight for AD is a three-step transitive chain: OD-F-005 (organization IS density) + DD-F-012 (density implies axis) = organizational pattern implies axis preference. The plan's gate agent has a section list but is not told to synthesize this implication. Without it, AD agents see only the DD-F-012 direct link and miss that organizational patterns transitively imply axis preferences. Report 04 identifies 7 specific mistakes AD could make without the handoff -- the plan addresses none.
- **Fix:** Gate agent prompt must include: "MUST explicitly state: OD-F-005 + DD-F-012 = organizational pattern implies axis preference. State as mandatory AD constraint." Add "Mistakes to Avoid" section (7 from Report 04). Add "Research Consumption Gaps" (R-2 at 0%). Add "Mode C Provenance" guidance.

### #8 — 22 ABSORB Dark Matter Files Completely Ignored
- **Priority:** CRITICAL
- **Plan Section:** Entire plan scope / dark matter handling
- **What's Wrong:** Report 14 identifies 22 ABSORB files requiring data extraction into the formal chain. Critical files no agent reads: COMPONENTS-REGISTRY (629 lines, 11 component names), RETROACTIVE-AUDIT-DD-001-006 (928 lines, finding-to-DD matrix), PHASE-1B-MEGA-DEBRIEF (2,632 lines, 463-file dependency trace), DD-SOURCE-OF-TRUTH-EXTRACTION (674 lines, 4 CRITICAL token divergences), structural-integrity (403 lines, semantic HTML/ARIA data), and more. The plan only processes 3 external research files.
- **Fix:** Either: (A) Add a dedicated Triage phase with 3 parallel agents using Report 14's 5-step decision tree (preferred), or (B) expand existing census agents' read lists to include ALL ABSORB files with explicit extraction instructions.

### #9 — OD-F Finding Categories: 0 Process, 0 Forward-Looking, 0 Anti-Pattern
- **Priority:** CRITICAL
- **Plan Section:** Wave 1, census-a; OD-F Finding Registry (lines 215-231)
- **What's Wrong:** The plan lists 12 OD-F findings (8 existing + 4 new). ALL are pattern findings. DD had 18 findings across 5 categories: 5 pattern + 1 meta-pattern + 3 process + 4 forward-looking + 4 anti-pattern. The plan has zero process findings, zero forward-looking findings for AD/CD, and zero anti-pattern findings. DD's structural depth is not matched.
- **Fix:** Census-a must extract across all categories: (1) OD process findings ("iteration improved scores," "3-dialect quality gap = #1 systemic issue"), (2) OD forward-looking findings for AD ("organizational patterns imply axis preferences"), (3) OD anti-pattern findings (2px border epidemic, traffic-light color persistence, mode-transition without breathing). Target 15-18 findings across categories, matching DD's structural depth.

### #10 — census-a Told OD-F-001-004 Are from OD-001 But They Only Exist in OD-006
- **Priority:** CRITICAL
- **Plan Section:** Wave 1, census-a; OD-F Finding Registry
- **What's Wrong:** The plan lists OD-F-001-004 as "Source: OD-001" but Report 02 reveals OD-001's header contains ZERO OD-F references (line 39: "OD-F finding IDs cited: None"). The formal declaration point is OD-006's header (lines 34-37) and OD-CHECKPOINT.md (lines 140-157). Census-a would search OD-001 for findings that aren't there and fail.
- **Fix:** Census-a prompt must state: "OD-F-001-004 are described as OD-001 findings but their formal definitions live in OD-006-creative.html lines 34-37 and in OD-CHECKPOINT.md lines 140-157. Do NOT expect to find them in OD-001-conversational.html's header."

### #11 — Only 1 of 5 Root Causes Addressed; No Systemic Prevention
- **Priority:** CRITICAL
- **Plan Section:** Resolved Decisions table, row 4 (Enforcement gate)
- **What's Wrong:** The plan's enforcement gate ("DO NOT begin AD work until HANDOFF-OD-TO-AD.md exists") addresses Root Cause #1 only. Root Causes #2-5 are unaddressed: #2 (audit/fix consumed context budget), #3 (MEMORY.md doesn't track provenance -- invisible gap), #4 (inline headers create illusion of completeness), #5 (DD provenance was an unrepeatable pattern). No mechanism prevents recurrence at CD or any future stage.
- **Fix:** (1) Add MEMORY.md to infra's update list: record "OD Provenance: COMPLETE" and add "Provenance Synthesis -- PENDING" for future stages. (2) Update showcase/CLAUDE.md with a PROVENANCE CHECKLIST binary gate for ALL stages: "Before marking ANY stage COMPLETE, verify: outbound-findings EXISTS, HANDOFF EXISTS, STAGE-HEADER says COMPLETE." (3) Gate agent writes PROVENANCE-CHECKLIST-TEMPLATE.md (10-20 lines) embedded in AD's CLAUDE.md.

### #12 — census-a Missing ACCUMULATED-IDENTITY-v1.md (539 Lines Critical Context)
- **Priority:** CRITICAL
- **Plan Section:** Wave 1, census-a read list (lines 98-102)
- **What's Wrong:** Dark matter census identifies 5 CRITICAL dark matter files. Census-a does NOT read ACCUMULATED-IDENTITY-v1.md (539 lines, most complete OD-F list with 11 findings). No agent reads PHASE-1B-MEGA-DEBRIEF (2,632 lines). No agent reads identity-brief.md (522 lines, 55 EXT citations with soul test results). No agent reads fresh-eyes.md (324 lines, discovered 3 quality dialects and 108-border epidemic). The ~89 finding IDs that exist ONLY in dark matter will be missed.
- **Fix:** Add ACCUMULATED-IDENTITY-v1.md to census-a's read list. Add identity-brief.md to census-b's read list. Add fresh-eyes.md to chain-a/chain-c's read list (contains F-E-001 through F-E-005 for OD-AUDIT-SYNTHESIS).

### #13 — R-2 Non-Consumption (27 Findings, 0% Consumed) Not Documented
- **Priority:** CRITICAL
- **Plan Section:** census-b + gate specifications
- **What's Wrong:** R-2 Creative Layouts (27 findings) was available to OD but 0% consumed. This is NOT external research (EXT-*) -- it is EXISTING formal research that was simply never used. The plan has NO mechanism to document this non-consumption. Without it, AD will repeat the same oversight.
- **Fix:** (1) Gate agent's HANDOFF must include "Research Consumption Gaps" section: "R-2 Creative Layouts (27 findings) available but 0% consumed by OD. AD should evaluate R-2 applicability before building." (2) Chain-a's OD-SYNTHESIS must include research application rates table: R-1 71%, R-2 0%, EXT-* 85%.

### #14 — Chain-a Overloaded: 3 Output Files, 10+ Input Files
- **Priority:** CRITICAL
- **Plan Section:** Wave 2 Chain Builders (lines 119-141)
- **What's Wrong:** The plan assigns OD-outbound-findings.md (350-500 lines per Report 13), OD-SYNTHESIS.md (500-700 lines), AND OD-AUDIT-SYNTHESIS.md (400-600 lines) to chain-a. That is 3 output files totaling 1,250-1,800 lines, plus 10+ input files. Report 15 separates these into distinct agents. Report 16 confirms chain-c is dedicated to OD-AUDIT-SYNTHESIS only. Well above the proven 5-10 file sweet spot.
- **Fix:** Split into 3 agents: (1) Agent for OD-outbound-findings (reads census outputs + diagnostic), (2) Agent for OD-SYNTHESIS + organizational-patterns, (3) Agent for OD-AUDIT-SYNTHESIS (reads extract-audit-scratchpad + OD-GRANULAR-AUDIT-RESULTS). Each has focused scope within the sweet spot.

### #15 — Compounding Tracking Drift in RESEARCH-ACTIVE.md
- **Priority:** CRITICAL
- **Plan Section:** Wave 4, infra, RESEARCH-ACTIVE.md update
- **What's Wrong:** RESEARCH-ACTIVE.md shows 327 UNAPPLIED when real number is ~265. PIPELINE-MANIFEST claims ~48 R-3 findings applied by DD; RESEARCH-ACTIVE.md shows only 10 total applied. The plan says "Finalize R-1 application status" for RESEARCH-ACTIVE but leaves the R-3 discrepancy unresolved, perpetuating compounding drift across stages.
- **Fix:** Expand infra agent's scope: "Finalize R-1 status for OD AND resolve R-3 application discrepancy from DD. PIPELINE-MANIFEST claims ~48 R-3 applied; RESEARCH-ACTIVE shows 10. Either: (a) backfill from RETROACTIVE-AUDIT-DD-001-006.md data, or (b) add note acknowledging discrepancy and stating which source is authoritative." Also: diff provenance/ vs checkpoints/ version before updating.

---

## SECTION 2: ALL REVISIONS GROUPED BY PLAN SECTION

### 2.1 Team Architecture

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 1 | Arch R21 | CRIT | 7 agents vs 17 -- losing census granularity, graph builder, tester, weaver |
| 2 | Arch R22 | CRIT | census-b mislabeled -- it's a document creator not a census agent; Report 16 defines census-b as extraction-only for 29 scratchpad files |
| 3 | Arch R16 | CRIT | chain-a overloaded (3 output files, 10+ input files) -- split into 3 agents |
| 4 | Arch R24 | HIGH | Single infra agent updating 10 files (double the sweet spot) -- split into 3-4 updaters |
| 5 | Arch R23 | HIGH | Graph Builder role missing -- no adjacency matrix for chain builders to consume |
| 6 | Arch R25 | HIGH | Traversal Tester with fresh-eyes constraint missing -- most important quality gate |
| 7 | Arch R26 | HIGH | Weaver role missing (proven essential in ALL 3 prior teams per MEMORY.md) |
| 8 | Arch R38 | HIGH | OD-AUDIT-SYNTHESIS ownership ambiguous -- Report 16 assigns dedicated chain-c agent |
| 9 | Arch R17 | HIGH | Time estimate unrealistic: 35-45 min vs 90-120 min per Report 15 |
| 10 | Arch R27 | MED | No communication protocol (agent signals, blocker signals, escalation paths) |
| 11 | Arch R28 | MED | No crash recovery protocol (file-first output pattern, 20-min timeout) |

### 2.2 File Ownership Matrix

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 12 | Arch R1 | CRIT | census-b missing 2 source files: identity-brief.md + research-refinement.md |
| 13 | Arch R2 | CRIT | OD-outbound-findings missing 3 of 6 required sections (meta-pattern, forward-looking, anti-pattern) |
| 14 | Found R14 | CRIT | census-a missing ACCUMULATED-IDENTITY-v1.md (539 lines) + 2 CRITICAL scratchpad files |
| 15 | Found R15 | HIGH | census-b will miss 8 EXT findings (EXT-CONV 5 + EXT-DENSITY 3) only in OD-001 + identity-brief |
| 16 | Found R16 | HIGH | OD-F count discrepancy: plan says 12, dark matter census says 11. OD-F-012 may not exist in source data |
| 17 | Found R19 | MED | FINDINGS-INDEX.md (516 lines) not assigned to any agent for OD-F updates |

### 2.3 Wave Execution: Wave 1 (Census)

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 18 | Diag R7 | CRIT | OD-F-001-004 listed as "Source: OD-001" but only exist in OD-006 header + OD-CHECKPOINT |
| 19 | Diag R12 | CRIT | 0 process, 0 forward-looking, 0 anti-pattern OD-F findings (DD had all 5 categories) |
| 20 | Found R6 | CRIT | OD-F findings lack lifecycle records (discovery context, validation evidence, status, consuming stages) |
| 21 | Found R7 | CRIT | Source data location for new findings OD-F-009-012 not specified |
| 22 | Diag R23 | CRIT | OD-F-005 ID collision in builder-log.md unassigned to any agent |
| 23 | Diag R2 | HIGH | OD-outbound missing per-finding metadata columns (Source, Score, Target Stage, Chain Impact) + backward DD-F consumption verification table |
| 24 | Diag R8 | HIGH | Dual-block header architecture in OD files not explained to census agents (Block 1 = research/EXT findings, Block 2 = threading/dependency data) |
| 25 | Diag R9 | HIGH | OD-004 EXT-CONF naming inconsistency not warned about (descriptive labels without numeric suffixes) |
| 26 | Diag R25 | HIGH | Finding ID convention is implicit and undocumented -- needs "Finding ID Convention" section |
| 27 | Diag R11 | MED | OD-006 should be read to 200 lines (richest header at 187 lines); plan says uniform 150 lines |
| 28 | Arch R8 | MED | Finding registry missing F-E (5), CA (5), DEC (12) families -- ~22 additional finding IDs |

### 2.4 Wave Execution: Wave 2 (Chain Builders)

#### chain-a / OD-SYNTHESIS.md

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 29 | Diag R10 | HIGH | Missing 4+ elements: temporal history, phase-level decision rationale, finding lifecycle, pattern evolution narrative |
| 30 | Arch R5 | HIGH | Missing 5 of 11 required sections: meta-insight analysis (OD-F-005), negative space record, emergence reasoning chains, scoring analysis with rubric, OD-006 cross-reference verification |
| 31 | Found R21 | HIGH | Bespoke-vs-existing research consumption insight not captured (EXT-* 85% vs R-1 71% vs R-2 0%) |
| 32 | Found R22 | HIGH | OD-002 no-external-research correlation with lower score (33/40) not captured |
| 33 | Found R4 | MED | Does not distinguish inline header data from new synthesis; needs "What This Document Adds Beyond Inline Headers" section |
| 34 | Found R24 | MED | File Consumption Matrix not included (which files consumed, which not consumed, which generated during build) |
| 35 | Found R30 | MED | OD vs DD process asymmetry not documented (OD introduced execution journals, scratchpads, research gates that DD lacked) |

#### chain-a / OD-AUDIT-SYNTHESIS.md (or dedicated chain-c agent)

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 36 | Diag R1 | CRIT | DD had TWO audit files (synthesis + checkpoint); plan creates only one with no acknowledgment of the two-file DD precedent |
| 37 | Found R9 | HIGH | Missing: 3-dialect formal documentation, 89-findings-to-17-fix-items mapping, post-fix score assessment, scratchpad as evidence references |
| 38 | Arch R8 | MED | Should register F-E-001 through F-E-005 (fresh-eyes) and CA-001 through CA-005 (accessibility) finding families |

#### chain-b / organizational-patterns + anti-patterns

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 39 | Diag R20 | HIGH | Anti-pattern extraction unspecified -- must name specific candidates: (1) quality dialect inconsistency, (2) mode-transition without breathing zones, (3) 2px border epidemic. Format each as: ID, Name, Description, Source, Severity, How to Avoid |

### 2.5 Wave Execution: Wave 3 (Gate)

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 40 | Diag R17 | CRIT | Transitive chain (OD-F-005 + DD-F-012 = org implies axis) not specified as mandatory AD constraint |
| 41 | Diag R18 | CRIT | Gate reading list missing: AD STAGE-HEADER.md (planned AD explorations), OD-CHECKPOINT.md (per-OD scores), organizational-patterns.md (chain-b output) |
| 42 | Found R20 | CRIT | R-2 non-consumption (27 findings, 0%) not flagged for AD -- they will repeat the oversight |
| 43 | Diag R19 | HIGH | "Lessons" section needs 5 structured sub-items: (1) highest-scoring OD + why, (2) lowest-scoring OD + why, (3) re-audit improvement data, (4) 3-dialect quality gap problem for AD to avoid, (5) iteration guidance |
| 44 | Found R26 | HIGH | Two Provenance Modes documented but Mode C (incremental during build) not established for AD in handoff |
| 45 | Found R3 | HIGH | No mechanism to prevent recurrence at AD/CD beyond single binary gate -- add PROVENANCE-CHECKLIST-TEMPLATE |
| 46 | Diag R5 | MED | "Pairings" = 6-row table mapping each planned AD exploration to primary + secondary organizational pattern with rationale; requires knowing AD explorations from AD STAGE-HEADER |
| 47 | Found R5 | MED | OD-CHECKPOINT.md not in gate read list; gate cannot verify checkpoint's next actions are completed |
| 48 | Found R23 | MED | 5 quality assessment recommendations not included in Lessons: (1) gate ALL research streams, (2) require RESEARCH-SYNTHESIS citation, (3) generate accumulated identity at phase END, (4) ensure all explorations get external research, (5) complete provenance before next stage |
| 49 | Diag R21 | MED | AD enforcement gate should require BOTH HANDOFF + outbound-findings, not just HANDOFF existence |

### 2.6 Wave Execution: Wave 4 (Infrastructure)

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 50 | Diag R22 | CRIT | R3-023/R3-036 split identity: no agent assigned to resolve |
| 51 | Found R25 | CRIT | RESEARCH-ACTIVE compounding drift: 327 shown unapplied vs ~265 actual; R-3 discrepancy (48 claimed vs 10 shown) |
| 52 | Diag R3 | HIGH | STAGE-HEADER "Rewrite: future tense -> past tense COMPLETE" gives zero structural guidance -- needs ALL 8 sections: (1) The Story, (2) What Consumed, (3) What Produced, (4) Quality Achieved (7 metrics), (5) Key Decisions (What/Why/Impact), (6) Causal Relationships, (7) Accumulated Research Weight, (8) Files In Folder |
| 53 | Found R28 | HIGH | STAGE-HEADER COMPLETE label needs specific completion evidence (narrative, tables, decisions); DD template should be structural model |
| 54 | Diag R4 | HIGH | OD-RESEARCH-GATE "post-build addendum" content unspecified -- needs per-finding APPLIED/NOT-APPLIED column with evidence, delta between planned and actual, final application rate |
| 55 | Found R11 | HIGH | OD-RESEARCH-GATE addendum must specify: Section 3: Post-Build Verification, X/24 applied, Y additional unplanned, rate = Z% |
| 56 | Diag R13 | HIGH | BACKBONE.md: plan says "Rewrite Section 4" but ALSO needs: Section 8 (add OD-F to Generated Research Flow), Section 9 (add OD-001-006 soul compliance rows, all PASS), Section 10 (causal chain diagram OD -> COMPLETE) |
| 57 | Found R10 | HIGH | BACKBONE same issue confirmed: 4 sections (not 1) need updates |
| 58 | Diag R14 | HIGH | PIPELINE-MANIFEST needs 3 sections (B, D, E) not just B; AND DD-F consumption PENDING -> APPLIED |
| 59 | Found R12 | MED | PIPELINE-MANIFEST also needs Section C (soul determination) + Section F (finding lifecycle counts) |
| 60 | Diag R15 | HIGH | PATTERN-INDEX: may need to ADD 6 new rows (not just update status) if entries don't already exist |
| 61 | Arch R6 | HIGH | PATTERN-INDEX also needs full table format (Status, Score, Density Pairing, Provenance columns) + Usage Flowchart update |
| 62 | Found R2 | HIGH | MEMORY.md not in infra update list despite being Root Cause #3 (provenance gap invisible in persistent memory) |
| 63 | Found R27 | HIGH | DD-era audit files (RETROACTIVE-AUDIT, VISUAL-AUDIT) not synced to DD provenance directory -- low effort, high chain completeness value |
| 64 | Found R29 | MED | OD-CHECKPOINT.md not updated post-remediation ("Currently Working On" still says synthesis) |
| 65 | Found R18 | MED | Mirrored file divergence risk: diff provenance/ vs checkpoints/ RESEARCH-ACTIVE before updating |
| 66 | Diag R26 | MED | PIPELINE-MANIFEST cross-reference example section not extended through OD (R3-023 chain stops at DD) |

### 2.7 Verification Protocol

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 67 | Arch R29 | CRIT | 5% coverage (5 of 104 items) -- need minimum 50 items across Categories B, C, D, G, H, J |
| 68 | Arch R30 | CRIT | No fresh-eyes reproducibility test (J-03) -- most important single test in entire framework |
| 69 | Arch R36 | CRIT | EXT-* findings have 3 conflicting target locations across Reports 13, 14, 16 -- must resolve ONE canonical location |
| 70 | Diag R24 | HIGH | Traversal tests don't check actual break points; Test #1 uses R3-023 but OD files cite R3-036 |
| 71 | Arch R31 | HIGH | Per-wave checks are "grep counts" not semantic verification -- need specific string/content checks per file |
| 72 | Arch R33 | HIGH | No definition of "done" (Report 17 says "ALL items must pass. 95% pass means structural gaps.") |
| 73 | Arch R34 | HIGH | No failure protocol or priority ordering (Category C first, then B, then H, then D, then A, then rest) |
| 74 | Diag R16 | MED | No "AD Readiness Checklist" verifying all 10 things AD expects from OD (Report 03 Section 5.2) |
| 75 | Found R13 | MED | Only Forward/Backward traversal tested; Cross, Accumulation, Reproducibility dimensions untested |
| 76 | Diag R6 | MED | No sync verification: OD-F findings in OD-outbound-findings.md must match OD-CHECKPOINT.md |
| 77 | Arch R35 | MED | Verification after commit instead of before (Report 15/17 both specify pre-commit verification gate) |

### 2.8 Gap Coverage Matrix

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 78 | Found R8 | HIGH | 14 MEDIUM gaps (GAP-013 through GAP-028, GAP-032) referenced as "assigned" but assignments not visible in plan; 7+ are truly unassigned: GAP-020 (scoring rubric), GAP-021 (score breakdowns), GAP-023 (paths not taken), GAP-024 (72 audit finding dispositions), GAP-025 (emergence reasoning), GAP-028 (soul matrix OD rows), GAP-032 (research feed linkage) |
| 79 | Diag R6 | MED | Section header says "9 HIGH Gaps" but lists 10 -- minor count error |

### 2.9 Dark Matter Handling

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 80 | Arch R10 | CRIT | 22 ABSORB files completely ignored (Report 14 identifies specific data extraction targets per file) |
| 81 | Arch R11 | CRIT | No triage phase -- Report 14's 5-step decision tree and Section 5 verification tests all missing |
| 82 | Found R17 | HIGH | Plan says REFERENCE but specifies NO mechanism for formal chain documents to actually reference dark matter files (no "Source Evidence" sections) |
| 83 | Arch R13 | HIGH | Report 13 vs Report 14 archiving contradiction unresolved: 0 ARCHIVE vs 28 ARCHIVE |
| 84 | Arch R37 | HIGH | Same conflict -- plan sides with Report 13 without acknowledging the contradiction |
| 85 | Arch R7 | MED | 13 ABSORB files from Report 13 not tracked in plan's file disposition |
| 86 | Arch R14 | MED | No source priority / conflict resolution protocol for data appearing in multiple files |

### 2.10 Resolved Decisions / Systemic Issues

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 87 | Found R1 | CRIT | Only 1 of 5 root causes addressed by enforcement gate; Root Causes #2-5 unaddressed |
| 88 | Found R3 | HIGH | No mechanism prevents recurrence at AD/CD beyond single binary gate -- need PROVENANCE-CHECKLIST-TEMPLATE |
| 89 | Found R26 | HIGH | Two Provenance Modes (A: build-first, B: document-never-formalize) identified but Mode C (document-during) not established for AD |
| 90 | Arch R19 | HIGH | Prior-stage fixes (Stage 1, Stage 2) completely missing from plan scope -- Report 15 Phase 4 identifies specific corrections |

### 2.11 Missing Plan Sections

| # | Source | Sev | Revision |
|---|--------|-----|----------|
| 91 | Arch R15 | CRIT | Entire Diagnostic Phase (finding registry + reference graph + traversal baseline) |
| 92 | Arch R11 | CRIT | Entire Triage Phase (5-step decision tree for 51+ dark matter files) |
| 93 | Arch R27 | MED | Communication Protocol (agent-to-lead signals, blocker format, escalation paths) |
| 94 | Arch R28 | MED | Crash Recovery Protocol (file-first output, 20-min timeout, per-agent-type recovery) |

---

## SECTION 3: MISSING PLAN SECTIONS

These are entire sections or concepts the plan lacks entirely.

### 3.1 Full 104-Item Verification Framework
**Source:** Report 17 (entire document)
The plan has 14 lines of verification. Report 17 defines 104 items across 11 categories (A-K) and 18 dimensions. Categories entirely absent from the plan: A (Document Universe Completeness, 7 items), B (Finding ID Integrity, 10 items), C (Stage Provenance Completeness, 21 items), F (Cross-Traversability, 6 items), G (Accumulation Integrity, 7 items), H (Infrastructure Consistency, 16 items), I (Information Ratio, 4 items), J (Reproducibility, 5 items), K (Process Integrity, 8 items). Report 17 specifies 5-phase execution with 9 agents taking 3.5-4.5 hours for full coverage.

### 3.2 Diagnostic Phase
**Source:** Report 15 Phase 1, Report 16 Sections 1.3-1.8
Three parallel agents build: (a) Complete Finding Registry Scanner (every finding ID in the system with definition locations), (b) Reference Graph Builder (every document-to-document edge, broken edges, orphans, sinks, clusters), (c) Traversal Chain Baseline Tester (pre-remediation baseline). These structured outputs become input for chain builders, replacing ad hoc reading of raw files.

### 3.3 Dark Matter Triage Phase
**Source:** Report 14, Report 15 Phase 2
Three parallel triage agents classify all 51+ dark matter files using a 5-step decision tree: (1) Unique data? (2) Referenced by formal chain? (3) Contains finding IDs? (4) Current or stale? (5) Disposition: ABSORB / ARCHIVE / KEEP / CONSOLIDATE / DELETE. Produces an extraction manifest consumed by chain builders.

### 3.4 Prior Stage Corrections
**Source:** Report 12, Report 15 Phase 4
Fixes needed in Stages 1 and 2: Stage 1 STAGE-HEADER (add "KortAI Reference = Mental model" acknowledgment), Stage 2 STAGE-HEADER (add references to RETROACTIVE-AUDIT and VISUAL-AUDIT), RESEARCH-ACTIVE.md (backfill DD application data from 10 APPLIED to ~48 APPLIED), sync checkpoints/RESEARCH-ACTIVE.md with provenance version.

### 3.5 R3-023/R3-036 Split Identity Resolution
**Source:** Report 05 Chain 1 (lines 37-52)
Fractal self-similarity = R3-023 in PIPELINE-MANIFEST = R3-036 in all OD headers and RESEARCH-ACTIVE. Needs: canonical ID determination, RESEARCH-ACTIVE update, PIPELINE-MANIFEST disambiguation, OD-outbound-findings cross-reference note.

### 3.6 OD-F-005 Collision Resolution
**Source:** Report 05 Chain 2, Hop 7 (lines 295-301)
builder-log.md line 144 defines OD-F-005 as "Narrative arc NATURALLY creates CRESCENDO" vs canonical "Organization IS Density." Needs: disambiguation note in OD-outbound-findings, no modification of builder-log.md (historical record).

### 3.7 Source-to-Target Mapping / Dark Matter Migration Map
**Source:** Report 13 Section 6.2 (lines 1032-1083)
Complete mapping showing which source file feeds which target file. Missing from plan means agents may miss data sources. Example: OD-AUDIT-SYNTHESIS needs data from 8 files (OD-GRANULAR-AUDIT-RESULTS, fresh-eyes, contrast-accessibility, cross-od-consistency, structural-integrity, fix-report-fixer-c, comparative-reference, research-refinement) but plan's chain-a reads only 2-3 of these.

### 3.8 Folder / Navigation Architecture
**Source:** Report 13 Section 1.2
Target directory tree with flow relationships (flows IN from / flows OUT to) for each file. The plan lists files but doesn't specify the topology.

### 3.9 Communication Protocol
**Source:** Report 16 Section 4 (lines 1051-1127)
Agent-to-lead: completion signals, blocker signals, query signals. Lead-to-agent: wave start, shutdown signals. Weaver: cross-reference rules. Escalation paths for 6 failure scenarios. Lead intervention criteria. The plan has none of this.

### 3.10 Crash Recovery Protocol
**Source:** Report 16 Section 5 (lines 1130-1209)
Per-agent-type crash recovery (census vs chain builder vs updater vs traversal tester). File-first output pattern (create skeleton as FIRST action, populate progressively). 20-minute timeout detection. Wave-level recovery. The plan has no crash handling.

### 3.11 Failure Protocol with Priority Ordering
**Source:** Report 17 Section 3.3 (lines 587-609)
If verification reveals failures: 1-2 failures = fix and retest; 3-5 in a category = systemic gap requiring root cause analysis; 6+ = rebuild incomplete. Priority ordering: Category C first, then B, then H, then D, then A, then remaining.

### 3.12 Source Priority / Conflict Resolution
**Source:** Report 14 Section 3.4 (lines 477-497)
For data appearing in multiple files: OD-CHECKPOINT is authoritative for OD-F definitions, original research files for EXT-* definitions, SOUL-DISCOVERIES for soul pieces, OD-GRANULAR-AUDIT-RESULTS for post-audit quality assessment.

### 3.13 PROVENANCE-CHECKLIST-TEMPLATE for Future Stages
**Source:** Report 06 Root Cause #5 (lines 330-336)
Reusable binary checklist ensuring provenance synthesis happens for every stage. "Before marking ANY stage COMPLETE: outbound-findings EXISTS, HANDOFF EXISTS, STAGE-HEADER says COMPLETE, SYNTHESIS EXISTS." Embedded in each stage's CLAUDE.md.

### 3.14 "Done" Definition
**Source:** Report 17 Section 3.4 (lines 612-618)
"ALL items must pass. There is no minimum pass rate. The chain is either structurally sound or it is not. 95% pass means there are structural gaps." The plan defines no completion criteria beyond "files exist."

---

## SECTION 4: CONVERGENT REVISIONS

Where multiple revision agents independently identified the same gap from different angles. These are the highest-confidence findings.

### 4.1 census-b Missing Source Files (TRIPLE CONVERGENCE)
- **Diagnostic R9:** OD-004 EXT-CONF naming inconsistency means extraction will fail silently
- **Foundation R15:** EXT-CONV (5) and EXT-DENSITY (3) findings exist ONLY in OD-001 inline + identity-brief.md
- **Architecture R1:** identity-brief.md and research-refinement.md entirely absent from read list
- **Architecture R12:** research-refinement.md needed for per-citation soul test results (55 citations tested)

**Convergent Fix:** census-b read list must include: identity-brief.md, research-refinement.md, and explicit OD-001 header extraction instructions with EXT-CONF naming warning.

### 4.2 OD-outbound-findings.md Severely Underspecified (TRIPLE CONVERGENCE)
- **Diagnostic R2:** Missing per-finding metadata columns + backward DD-F consumption verification table
- **Diagnostic R12:** Missing process, forward-looking, and anti-pattern finding categories entirely
- **Architecture R2:** Missing 3 of 6 required sections from Report 13 (meta-pattern, forward-looking, anti-pattern)
- **Foundation R6:** Missing formal lifecycle records per finding (discovery, validation, status, consumers)

**Convergent Fix:** OD-outbound-findings must have ALL 6 sections per Report 13: (A) OD-F Finding Declarations with lifecycle records, (B) Meta-Pattern section for OD-F-005, (C) Forward-Looking Findings for AD/CD, (D) Anti-Pattern Findings, (E) Stage 2 Consumption Verification, (F) Consumption Matrix. Size target: 350-500 lines. Findings across all 5 categories.

### 4.3 PIPELINE-MANIFEST Update Grossly Underspecified (TRIPLE CONVERGENCE)
- **Diagnostic R14:** Need Sections B, D, E (plan says only "Add OD-F Section B, update counts")
- **Foundation R12:** Need Sections B, C, D, F + DD-F consumption status update
- **Architecture R3:** Need 6 subsections with full table layouts, before/after text

**Convergent Fix:** PIPELINE-MANIFEST needs 6 section updates as binary checklist items: B (OD-F entries + DD-F PENDING->APPLIED), C (soul determination), D (organizational patterns), E (cross-references extended through OD), F (lifecycle counts). Each section: "MUST contain X" criterion.

### 4.4 BACKBONE.md Update Grossly Underspecified (TRIPLE CONVERGENCE)
- **Diagnostic R13:** Causal chain DIAGRAM needs updating, not just narrative text
- **Foundation R10:** Sections 8, 9, 10 also need updates (not just Section 4)
- **Architecture R4:** 4 sections total: Section 4 (narrative + consumed/produced + key decisions), 8 (OD-F entries in Generated Research Flow), 9 (OD-001-006 soul compliance rows, all PASS), 10 (causal chain diagram OD -> COMPLETE)

**Convergent Fix:** Infra agent must update ALL 4 sections with binary rules: "Section 4 MUST include consumed/produced tables", "Section 9 MUST have OD-001-006 rows showing PASS", "Section 10 MUST show OD as COMPLETE."

### 4.5 STAGE-HEADER Rewrite Severely Underspecified (DOUBLE CONVERGENCE)
- **Diagnostic R3:** Needs all 8 sections populated matching DD template: The Story, Consumed, Produced, Quality (7 metrics), Decisions (What/Why/Impact), Causal, Research Weight, Files
- **Foundation R28:** COMPLETE label needs specific completion evidence (narrative, tables, decisions)

**Convergent Fix:** Infra prompt must enumerate all 8 sections as mandatory. DD STAGE-HEADER.md is explicit structural template.

### 4.6 OD-RESEARCH-GATE Update Vague (DOUBLE CONVERGENCE)
- **Diagnostic R4:** Per-finding APPLIED/NOT-APPLIED status with evidence needed (not summary paragraph)
- **Foundation R11:** Addendum needs APPLIED/NOT-APPLIED column, delta between planned and actual, final rate

**Convergent Fix:** "Add Section 3: Post-Build Verification. For each of 24 mapped R-1 findings, add APPLIED/NOT-APPLIED with evidence source. Summary: X/24 applied, Y additional unplanned, rate = Z%."

### 4.7 OD-SYNTHESIS Missing Multiple Required Sections (DOUBLE CONVERGENCE)
- **Diagnostic R10:** Missing temporal history, phase-level decision rationale, finding lifecycle, pattern evolution narrative
- **Architecture R5:** Missing 5 of 11 required sections from Report 13 (meta-insight analysis, negative space, emergence reasoning chains, scoring analysis, OD-006 cross-reference verification)

**Convergent Fix:** OD-SYNTHESIS must enumerate all 11 sections from Report 13. This is a 500-700 line document, not a quick summary.

### 4.8 Verification Radically Insufficient (QUADRUPLE CONVERGENCE)
- **Architecture R29:** 5% coverage (5 of 104 items)
- **Architecture R30:** No fresh-eyes reproducibility test (J-03)
- **Foundation R13:** Only Forward/Backward tested; Cross, Accumulation, Reproducibility untested
- **Diagnostic R24:** Traversal tests don't check specific break points; use wrong IDs (R3-023 when OD cites R3-036)

**Convergent Fix:** Add verification phase with 50+ items minimum. Fresh-eyes agent mandatory. Pre-commit gate. Binary done definition.

### 4.9 Finding ID Collisions Unresolved (DOUBLE CONVERGENCE)
- **Diagnostic R22:** R3-023/R3-036 split identity -- no agent assigned
- **Diagnostic R23:** OD-F-005 builder-log collision -- no agent assigned
- **Architecture R32:** Both collisions flagged again from verification perspective

**Convergent Fix:** Explicit resolution tasks for both collisions. R3-023 canonical. builder-log.md annotated as superseded draft. Neither original file modified.

### 4.10 Chain-a Agent Overloaded (DOUBLE CONVERGENCE)
- **Architecture R16:** 3 output files (1,250-1,800 lines total), 10+ input files
- **Architecture R38:** OD-AUDIT-SYNTHESIS ownership ambiguous -- Report 16 assigns dedicated chain-c

**Convergent Fix:** Split into 3 agents per Report 15/16 structure. Each within 5-10 file sweet spot.

### 4.11 Missing Triage/Diagnostic Phases (TRIPLE CONVERGENCE)
- **Architecture R10:** 22 ABSORB files completely ignored
- **Architecture R11:** No triage phase -- Report 14 verification tests missing
- **Architecture R15:** Plan skips both Phase 1 (Diagnostic) and Phase 2 (Triage) from Report 15

**Convergent Fix:** Add Diagnostic + Triage phases before chain building. 6 agents, ~35 minutes. Produces structured input.

### 4.12 Gate Agent Missing Critical Reads (DOUBLE CONVERGENCE)
- **Diagnostic R18:** Missing AD STAGE-HEADER, OD-CHECKPOINT, organizational-patterns from read list
- **Diagnostic R5:** Pairings table requires knowing AD explorations (from AD STAGE-HEADER)

**Convergent Fix:** Gate agent read list must include: provenance/stage-4-axis-ad/STAGE-HEADER.md, checkpoints/OD-CHECKPOINT.md, patterns/organizational-patterns.md (chain-b output).

---

## SECTION 5: THE REVISED FIRST LINE

### Current Opening (line 1):
```
# Claude's Remediation Plan (FROM OTHER INSTANCE -- NEEDS REVISION)
```

### Revised Opening:

```markdown
# Provenance Chain Remediation: Stage 3 (Organization-OD) — Agent Team Execution Specification

> **MANDATE:** Deploy an agent team of 12-17 workers (Lead + Weaver + Census/Triage +
> Chain Builders + Updaters + Traversal Tester) to create the formal provenance chain
> for Stage 3 (OD). The remediation must achieve both ARCHITECTURAL SOUNDNESS (correct
> file topology, complete finding registries, zero ID collisions, zero broken reference
> edges) AND STRUCTURAL INTEGRITY (forward/backward/cross traversability, accumulation
> monotonicity, and fresh-eyes reproducibility — a fresh agent reading ONLY the Stage 3
> provenance directory must be able to answer: how many explorations? what scores? what
> findings? what was audited? what does AD need?).
>
> **SCOPE:** 6 new provenance documents + 10-15 infrastructure file updates + 2 finding
> ID collision resolutions (R3-023/R3-036 split, OD-F-005 builder-log collision) + dark
> matter triage for 51+ operational files (22 ABSORB) + prior-stage corrections for
> Stages 1-2 + 50-item minimum verification gate (including J-03 fresh-eyes test) that
> must PASS before commit.
>
> **CONSTRAINTS:**
> - Lead builds NOTHING. Lead reads NO target files. Lead orchestrates ONLY.
> - Weaver maintains cross-agent state. Active from Wave 0 through verification.
> - All agents operate within the 5-10 file sweet spot (per MEMORY.md).
> - Traversal Tester operates under FRESH-EYES constraint: reads ONLY formal chain.
> - Binary done: all CRITICAL gaps closed + J-03 PASS + zero ID collisions + all new
>   files exist with required structure.
```

This opening:
1. **Mandates an agent team** with specific role categories (not optional)
2. **Specifies architectural soundness** (topology, registries, collisions, edges)
3. **Specifies structural integrity** (5 traversal dimensions + reproducibility)
4. **Sets the fresh-eyes test as ultimate success criterion** (5 questions answerable from provenance alone)
5. **Quantifies full scope** (6 new, 10-15 updates, 2 collisions, 51+ triage, 50+ verification items)
6. **Enforces constraints** as binary rules (Lead THIN, Weaver presence, file sweet spot, fresh-eyes)
7. **Defines done** as a binary condition (not "files exist" but "verification gate passes")

---

## APPENDIX A: SEVERITY DISTRIBUTION BY SOURCE

| Source Agent | CRITICAL | HIGH | MEDIUM | TOTAL |
|-------------|----------|------|--------|-------|
| Diagnostic (files 01-05) | 5 | 14 | 7 | 26 |
| Foundation (files 06-12) | 7 | 14 | 9 | 30 |
| Architecture (files 13-17) | 11 | 19 | 8 | 38 |
| **RAW TOTAL** | **23** | **47** | **24** | **94** |

### De-duplicated by Category

| Category | Unique Issues |
|----------|---------------|
| Agent architecture (team size, roles, overloading) | 9 |
| Agent read lists (missing source files) | 8 |
| Output specifications (underspecified content) | 12 |
| Missing plan phases (diagnostic, triage) | 3 |
| Missing plan sections (protocols, templates, definitions) | 8 |
| Finding ID issues (collisions, categories, sources) | 6 |
| Infrastructure file updates (underspecified scope) | 7 |
| Verification framework (insufficient coverage) | 5 |
| Dark matter handling (absorb, reference, archive, conflict) | 4 |
| **TOTAL UNIQUE** | **~62** |

## APPENDIX B: CROSS-AGENT AGREEMENT MATRIX

| Issue | Diagnostic | Foundation | Architecture |
|-------|-----------|-----------|--------------|
| Infra BACKBONE underspecified | R13 | R10 | R4 |
| Infra PIPELINE-MANIFEST underspecified | R14 | R12 | R3 |
| census-b missing source files | R9 | R15 | R1, R12 |
| OD-F findings incomplete/wrong sources | R7, R12 | R6, R7, R16 | R2, R8 |
| Verification inadequate | R16, R24 | R13 | R29, R30 |
| Finding ID collisions unresolved | R22, R23 | -- | R32 |
| Gate agent read list incomplete | R5, R18 | R5, R20 | -- |
| STAGE-HEADER update underspecified | R3 | R28 | -- |
| OD-RESEARCH-GATE update vague | R4 | R11 | -- |
| OD-SYNTHESIS missing sections | R10 | R21, R22 | R5 |
| Root causes unaddressed | -- | R1, R3 | -- |
| Agent overloading | -- | -- | R16, R21, R24 |
| Missing diagnostic/triage phases | -- | R14 | R10, R11, R15 |
| R-2 non-consumption not flagged | -- | R20 | -- |
| Dark matter ABSORB files ignored | -- | -- | R7, R10 |

### Where Agents Disagree

1. **Archiving:** Architecture flags Report 13 vs Report 14 contradiction (0 vs 28 ARCHIVE files). Foundation does not mention it. **Resolution:** Report 13 likely supersedes (written later, more informed decision). Plan should acknowledge and state: "Report 13 supersedes Report 14's ARCHIVE recommendations -- operational files remain in place."

2. **Agent count:** Architecture wants 12-17 per Report 16. Diagnostic and Foundation work within the plan's 7-agent frame with expanded scopes. **Resolution:** 12-14 is the pragmatic minimum (splitting overloaded agents + adding Weaver + Traversal Tester).

3. **Diagnostic phases:** Architecture (R15) insists on Phase 1 + Phase 2. Foundation (R14) flags missing reads but doesn't require new phases. **Resolution:** At minimum, expand census read lists to cover all ABSORB files. Ideally, add diagnostic phase for structured input.

4. **EXT-RESEARCH-REGISTRY location:** Report 13 says standalone `provenance/EXT-RESEARCH-REGISTRY.md`. Report 14 says `OD-external-research-synthesis.md` inside stage-3. Report 16 includes EXT-* within OD-outbound-findings. **Resolution:** Standalone cross-stage file per Report 13 is cleanest (future stages add own EXT findings). OD-outbound should REFERENCE, not duplicate.
