# Adversarial Plan Review: Middle-Tier Experiment Execution Plan

**Date:** 2026-02-16
**Author:** adversarial-plan-reviewer (plan-review team, Task #3)
**Input:** `~/.claude/plans/wiggly-sprouting-ember.md` (745 lines)
**Cross-references:**
- `ephemeral/session-insights/24-integration-changelog.md` (274 lines, 26 changes applied)
- `ephemeral/session-insights/23-adversarial-review.md` (561 lines, 8 critical gaps)
- `ephemeral/middle-tier-plan/04-team-design.md` (947 lines, 8-agent team design)
- `ephemeral/middle-tier-plan/05-risk-register.md` (36 risks)
- `ephemeral/session-insights/24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md` (~1,935 lines)
- `ephemeral/session-insights/21-quick-check.md` (15-item gate)

---

## REVIEW METHODOLOGY

This review is ADVERSARIAL about OPERATIONAL FEASIBILITY. I assume:
- Every ambiguity in team size, sequencing, or file paths will cause a real team-lead to make the wrong launch decision
- Timing estimates are optimistic until proven otherwise
- Unspecified gate failure protocols mean "nobody knows what to do when it fails"
- Contradictions between the plan and its source documents will cause agents to follow the WRONG version

I focus on FIVE domains:
1. Team architecture contradictions (7 vs 8 agents)
2. Sequencing enforcement (how are handoffs gated?)
3. Playwright scheduling (concurrent browser access)
4. Timing realism (agent minutes vs wall-clock)
5. Gate failure protocols and missing agent prompts

---

## EXECUTIVE SUMMARY

The plan is **structurally comprehensive** -- it covers all 11 phases, provides concrete thresholds, and cross-references the master prompt thoroughly. However, it contains **5 CRITICAL operational contradictions**, **4 SEQUENCING gaps**, **3 PLAYWRIGHT scheduling risks**, **2 TIMING problems**, and **3 MISSING operational details** that would cause real execution failures.

**Overall operational readiness: 6.5/10. Needs fixes before a team-lead can execute.**

**The three most dangerous operational issues:**

1. **The plan presents TWO DIFFERENT team designs (7 agents vs 8 agents) and never resolves which one the team-lead should use.** Phase 1 (Section 1.1) shows 7 agents. The "FINALIZED TEAM DESIGN" at line 726 shows 8 agents. The evaluator role in Phase 1 is DIFFERENT from the verdict-synthesizer + comparative-auditor + novelty-evaluator trio in the finalized design. A team-lead cannot launch a team without knowing the headcount.

2. **Output file paths contradict between the plan and the team design.** The plan's team design (04-team-design.md) writes audit outputs to `ephemeral/middle-tier-plan/` but the plan itself says the HTML goes to `ephemeral/middle-tier-experiment/`. The verdict-synthesizer reads from `ephemeral/middle-tier-plan/03-*.md` but the plan's Phase 5 describes the output path differently. Agents will write files that downstream agents cannot find.

3. **No gate failure protocol exists.** The plan says "Critical-10: instant fail on ANY" but never specifies: Does the team-lead stop all agents? Re-launch the builder? Ask the user? Retry with a different content selection? The team-lead will be stuck with a FAIL verdict and no next step.

---

## 1. CRITICAL OPERATIONAL CONTRADICTIONS (5 items)

### CONTRADICTION-1: 7 Agents vs 8 Agents -- Irreconcilable

**Where:** Plan Section 1.1 (line 22-31) vs Plan "FINALIZED TEAM DESIGN" (line 726-744)

**Phase 1 table (7 agents):**
| Agent | Phase |
|-------|-------|
| team-lead | All |
| content-selector | 1 |
| planner | 2 |
| builder | 3 |
| programmatic-auditor | 4 |
| perceptual-auditor | 4 |
| evaluator | 5 |

**Finalized design (8 agents):**
| Agent | Phase |
|-------|-------|
| content-selector | 0 |
| planner | 1 |
| builder | 2 |
| programmatic-auditor | 3a |
| perceptual-auditor | 3b |
| comparative-auditor | 4a |
| novelty-evaluator | 4b |
| verdict-synthesizer | 5 |

**The contradiction:** The 7-agent design has a single "evaluator" doing everything in Phase 5. The 8-agent design splits evaluation into THREE agents (comparative-auditor, novelty-evaluator, verdict-synthesizer). These are fundamentally different team architectures with different phase numbering, different agent counts, and different responsibilities.

**Which is authoritative?** The plan labels the 8-agent version as "FINALIZED" (line 726), and it comes from the cross-reference report `04-team-design.md`. The 7-agent version in Phase 1 appears to be the ORIGINAL design that was superseded.

**Impact:** A team-lead reading the plan top-to-bottom will implement the 7-agent design (it appears FIRST). The finalized 8-agent design appears 700 lines later. They may never reach it.

**FIX:** Remove or clearly deprecate the 7-agent table in Phase 1. Replace it with the 8-agent design or add a prominent forward-reference: "NOTE: The team design below was refined. See FINALIZED TEAM DESIGN at line 726 for the authoritative 8-agent roster."

### CONTRADICTION-2: Phase Numbering is Inconsistent

**Where:** Plan Phase 1 vs Plan "FINALIZED TEAM DESIGN" vs Team Design Document

The plan body uses Phases 1-6 (content=Phase 2, planning=Phase 3, build=Phase 4, validation=Phase 5, evaluation=Phase 6).

The finalized team design uses Phases 0-5 (content=Phase 0, planning=Phase 1, build=Phase 2, validation=Phase 3, evaluation=Phase 4-5).

The execution sequence (Phase 9) uses Stages A-F.

**Three different numbering systems for the same workflow.** A team-lead saying "launch Phase 2" could mean content selection (finalized numbering), pipeline routing (plan body numbering), or build execution (Stage B equivalence).

**FIX:** Adopt ONE numbering scheme throughout. The finalized design's Phase 0-5 is cleanest. Retroactively update all plan body references.

### CONTRADICTION-3: Output Directory Split

**Where:** Plan line 286 vs Team Design line 157, 220, 343, 413, 473, 547, 616

**The plan says:**
- HTML output: `ephemeral/middle-tier-experiment/middle-tier-page.html`
- Cross-reference reports: `ephemeral/middle-tier-plan/`

**The team design says:**
- Content selection: `ephemeral/middle-tier-plan/01-content-selection.md` (line 157)
- Build plan: `ephemeral/middle-tier-plan/02-build-plan.md` (line 220)
- Programmatic audit: `ephemeral/middle-tier-plan/03-programmatic-audit.md` (line 343)
- Perceptual audit: `ephemeral/middle-tier-plan/04-perceptual-audit.md` (line 413)
- Comparison report: `ephemeral/middle-tier-plan/05-comparison-report.md` (line 473)
- Novelty assessment: `ephemeral/middle-tier-plan/06-novelty-assessment.md` (line 547)
- Verdict: `ephemeral/middle-tier-plan/07-VERDICT.md` (line 616)
- HTML: `ephemeral/middle-tier-experiment/middle-tier-page.html` (line 282)

**So:** Planning artifacts go to `middle-tier-plan/` and the HTML goes to `middle-tier-experiment/`. This is ACTUALLY coherent, but the plan's Phase 4 (line 286) says the output directory is `ephemeral/middle-tier-experiment/` without mentioning that ALL planning/audit artifacts go to `middle-tier-plan/`.

**Risk:** The planner's HTTP server instruction (line 316 of team design) says `--directory ephemeral/middle-tier-experiment` but the HTML is the only file there. The programmatic-auditor prompt references a different directory for its output. This is workable but confusing.

**FIX:** Add a directory map to the plan:
```
ephemeral/middle-tier-plan/     -- planning + audit artifacts (01-07)
ephemeral/middle-tier-experiment/ -- HTML output only
```

### CONTRADICTION-4: Quick Check Item 14 Still Says "2 Categories"

**Where:** Plan Section 5.2 (line 309-313), Quick Check file line 76

**The plan correctly states** the Quick Check exists and should be run. But the ACTUAL Quick Check file (`ephemeral/session-insights/21-quick-check.md`) at line 76 STILL says: "Variant B = 2 categories confirmed."

**The integration changelog** (Change 1) says this was fixed to reframe from category-count to mechanism-density-and-diversity. But line 76 of the Quick Check file shows the UNFIXED text.

**Impact:** If the programmatic-auditor or verdict-synthesizer reads the Quick Check file directly (as instructed by the plan), they will use the WRONG baseline for Variant B comparison.

**FIX:** Either (a) update the Quick Check file itself, or (b) add an explicit note to the plan: "NOTE: Quick Check item 14 references an OUTDATED Variant B category count. The correct baseline is 5 categories / 7 mechanisms. Use the master prompt Section 6.5 as authoritative."

### CONTRADICTION-5: Planner Reads Master Prompt, but Content-Selector Does Not

**Where:** Plan Section 2.1 (line 71), Team Design Agent 1 prompt (line 129-185)

**The plan says:** Content MUST be committed BEFORE the planner reads Section 3 (Mechanism Vocabulary).

**The team design says:** The content-selector "MUST NOT read Section 3 of the master prompt."

**The issue:** The content-selector agent prompt in the team design (line 129) says the agent should not read "Section 3 (Mechanism Vocabulary) of the master prompt." But the content-selector should not be reading the master prompt AT ALL. The plan's Phase 1 table says the content-selector's model is Sonnet and its phase is "1" (content selection). The content-selector prompt template says "DO NOT READ: Section 3, mechanism-catalog.md, case-studies/" -- implying it DOES read other master prompt sections.

**If the content-selector reads Sections 1-2 of the master prompt** (identity constraints, vocabulary tokens), that knowledge might subconsciously bias content toward structures that "feel" like they'd work with the design system's warm palette and editorial style.

**The team design's contamination prevention** says "reads NOTHING from design system" (line 32) but the prompt template only prohibits 3 specific items. These are contradictory.

**FIX:** Make the content-selector prompt perfectly clear: "You receive ONLY the content selection criteria (A2.1-A2.10) and suggested domains. You do NOT receive the master prompt. You do NOT read ANY design system files." Then the team-lead must NOT include any master prompt sections in the content-selector's launch prompt.

---

## 2. SEQUENCING GAPS (4 items)

### SEQ-1: No Enforcement Mechanism for Handoff Gates

**Where:** Plan Phase 9 (lines 531-574), Team Design Section 4 (lines 659-696)

**The plan describes 6 stages (A-F) with clear handoff points.** The team design describes "verification before handoff" checklists. But NEITHER document specifies:

- **WHO** performs the handoff verification? The team-lead? The sending agent? An automated check?
- **HOW** is the gate enforced? Does the team-lead manually check the output file before launching the next agent?
- **WHEN** does the team-lead know to launch the next phase? Does the agent send a message? Does the team-lead poll for file existence?

**In practice:** The team-lead must:
1. Receive a SendMessage from the content-selector: "01-content-selection.md ready"
2. Read the file and verify A2.1-A2.10
3. Decide whether to proceed or send back for revision
4. Launch the planner with appropriate context

**None of this is specified.** The team-lead will be flying blind on handoff timing.

**FIX:** Add explicit team-lead protocol:
```
For each handoff:
1. Wait for agent's "deliverable ready" message
2. Read output file, verify checklist
3. If PASS: launch next agent with appropriate prompt
4. If FAIL: send revision instructions to same agent (max 2 retries)
5. If 2 retries fail: escalate to user
```

### SEQ-2: Content-Before-Mechanisms is NOT Technically Enforced

**Where:** Plan Section 2.1 (line 71), Team Design Phase 0-1 boundary

**The plan says:** "Content MUST be committed BEFORE the planner reads Section 3."

**How this is actually enforced:** The content-selector runs as Phase 0 and produces content. The planner runs as Phase 1 and reads the content PLUS the mechanism catalog.

**The gap:** Nothing prevents the team-lead from including Section 3 of the master prompt in the content-selector's prompt. Nothing prevents the planner from choosing content that fits mechanisms it has already read (the planner reads content AND mechanisms in the same session).

**The team design's solution is architectural:** The content-selector is a SEPARATE agent with no mechanism access. This is correct. But the plan doesn't explain WHY the architecture enforces the sequencing -- it just states the rule.

**The REAL enforcement** is that the content-selector agent physically cannot read mechanism-catalog.md because it's not in the agent's prompt and the agent has no instruction to seek it out. This is enforcement by OMISSION, which is fragile.

**FIX:** Add to the content-selector prompt: "VERIFICATION: At the end of your content selection, add this statement: 'I confirm I did not read mechanism-catalog.md, case-studies, or any mechanism vocabulary before selecting this content.'" This creates an auditable trace.

### SEQ-3: Phase 4 Sequential vs Parallel is Ambiguous in the Plan

**Where:** Plan "FINALIZED TEAM DESIGN" (line 741) vs Plan Phase 9 (line 563)

**The finalized team design says:** "Phase 4 (comparative + novelty) can run in parallel."

**The team design document says (line 721):** "Do NOT parallelize Phase 4. Sequential execution safer."

**The plan itself says (Phase 9, line 568-569):** Stage F describes the evaluator as a single agent doing everything sequentially.

**Three different answers to "does Phase 4 run in parallel?"** The plan body says single-agent sequential. The finalized table says parallel. The team design document says DO NOT parallelize.

**FIX:** Adopt the team design document's recommendation (sequential Phase 4) and update the finalized table to match. The reasoning is sound: Playwright contention with 2+ concurrent agents causes severe issues.

### SEQ-4: Builder Receives Plan BUT ALSO Reads Tier 1 Files -- Double-Reading Problem

**Where:** Team Design Agent 3 prompt (lines 247-305)

**The builder prompt says:**
1. Read prohibitions.md (353 lines)
2. Read tokens.css (174 lines)
3. Read mechanism-catalog.md (1,011 lines)
4. Read build plan (02-build-plan.md)

**The build plan (02-build-plan.md) already contains:**
- Appendix B Block 1 (soul checklist derived from prohibitions.md)
- Token values (from tokens.css)
- Mechanism selections (from mechanism-catalog.md)

**The builder reads 1,538 lines of source files PLUS the plan that already summarizes them.** This is redundant. More importantly, if the planner's plan specifies values that DIFFER from the source files (e.g., the type scale conflict from Finding 1), the builder must decide which to follow.

**The Two-Instance pattern** says the builder should execute the PLAN, not re-derive from source files. But the always-load protocol (B8.2) says the builder MUST read prohibitions.md and tokens.css.

**This creates an irresolvable tension:** Following the plan means trusting the planner's values. Reading source files means second-guessing the planner.

**FIX:** Add explicit priority: "If any value in the build plan CONFLICTS with a source file, the SOURCE FILE value takes precedence for IDENTITY tokens (prohibitions, colors, fonts) and the PLAN value takes precedence for DESIGN decisions (padding, layout, mechanism deployment)."

---

## 3. PLAYWRIGHT SCHEDULING RISKS (3 items)

### PW-1: Both Programmatic and Perceptual Auditors Need HTTP Server

**Where:** Team Design Phase 3 (lines 77-92)

**Phase 3 runs two agents in parallel:**
- programmatic-auditor: Uses Playwright to measure computed styles
- perceptual-auditor: "FRESH-EYES" but needs to VIEW the page

**The perceptual auditor prompt says (line 396):** "Serve HTML via HTTP" and "View at 1440px viewport."

**This means the perceptual auditor ALSO uses Playwright.** Both agents need Playwright simultaneously. Memory says "2 concurrent usually safe." This is within bounds but AT the limit.

**More importantly:** Who starts the HTTP server? The programmatic-auditor prompt says "Start HTTP server" (line 316). The perceptual-auditor prompt says "Serve HTML via HTTP" (line 395). If BOTH agents try to start an HTTP server on port 8000, one will fail with "Address already in use."

**FIX:** Specify that the team-lead starts the HTTP server BEFORE launching Phase 3 agents. Both agents connect to the same server. Add to plan: "Team-lead starts HTTP server: `python3 -m http.server 8000 --directory ephemeral/middle-tier-experiment` BEFORE launching Phase 3 agents."

### PW-2: Phase 4 Agents Also Need Playwright

**Where:** Team Design Phase 4 (lines 94-117)

**comparative-auditor** needs Playwright for "side-by-side screenshots at 1440px" (line 470).
**novelty-evaluator** needs Playwright for "20px Gaussian blur" screenshot comparison (line 518-523).

**If Phase 3's perceptual-auditor is still running (30-40 min) and Phase 4 starts...** the comparative-auditor's Playwright session would be the 3rd concurrent Playwright operation. Memory says "4+ causes severe contention."

**The team design says Phase 4 runs AFTER Phase 3 completes.** But the plan's time estimates overlap. If the perceptual audit takes 40 minutes and the programmatic audit takes 10 minutes, Phase 4 can start after 40 minutes. If the team-lead mistakenly launches Phase 4 when only the programmatic audit is done (after 10 minutes), three Playwright agents run concurrently.

**FIX:** Add explicit gate: "Phase 4 MUST NOT start until BOTH Phase 3 agents have completed and sent deliverable-ready messages. The team-lead must confirm BOTH 03-programmatic-audit.md AND 04-perceptual-audit.md exist before launching Phase 4."

### PW-3: HTTP Server Port Conflict with Existing Processes

**Where:** Team Design line 316

**The plan specifies port 8000.** No check is specified for whether port 8000 is already in use (e.g., from a previous session's server that wasn't terminated).

**FIX:** Add to Stage A: "Before starting HTTP server, verify port 8000 is free: `lsof -i :8000`. If occupied, kill the process or use port 8001. Update all agent prompts with the correct port."

---

## 4. TIMING PROBLEMS (2 items)

### TIME-1: The 3.5-4.5 Hour Estimate is Wall-Clock, Not Agent-Minutes

**Where:** Plan line 643-649, Team Design line 119-121

**The plan says:** "TOTAL: ~3.5-4.5 hours"

**This is WALL-CLOCK time** (sequential phases with parallelization in Phase 3). But it does NOT include:
- Team-lead handoff verification time (5-10 min per handoff x 5 handoffs = 25-50 min)
- HTTP server setup time (~5 min)
- Agent prompt preparation time (customizing prompts per agent = 10-20 min total)
- User review checkpoints (the team design recommends 4 user review points)
- File existence verification between phases

**Adjusted estimate:** 4.5-6 hours with all overhead included.

**The time estimates also assume ZERO failures.** If the builder fails to write the HTML file (~20-30% probability per the risk register), the recovery adds 30-60 minutes.

**FIX:** Update the time estimate to include operational overhead: "Agent execution time: 3.5-4.5 hours. Including handoff verification, setup, and user review: 4.5-6 hours. With one recovery event: 5-7 hours."

### TIME-2: Planner Time Estimate May Be Unrealistic

**Where:** Team Design line 33

**The planner is estimated at 60-90 minutes.** The planner must:
1. Read 01-content-selection.md (from Phase 0)
2. Read prohibitions.md (353 lines)
3. Read tokens.css (174 lines)
4. Read mechanism-catalog.md (1,011 lines)
5. Read semantic-rules.md (286 lines)
6. Read usage-criteria.md (298 lines)
7. Read SKILL.md (~1,533 lines)
8. Optionally read merged-components.css (1,195 lines)
9. Process the master prompt (1,761 lines)
10. Produce a 7-section concrete plan with specific CSS values

**Total input: ~5,600-6,800 lines.** The planner must read all this, synthesize it, and produce a concrete build specification. This is the equivalent of reading and synthesizing a medium-sized technical document.

**For an Opus model agent, 60-90 minutes is plausible** but optimistic. The plan's content PLUS 8 file reads PLUS synthesis could push to 90-120 minutes, especially if the agent needs multiple read passes.

**FIX:** Adjust to "60-120 min" and add note: "If planner approaches context limits during file reading, use chunk-based reading strategy (read prohibitions + tokens first, then catalog, then guidelines). Do NOT skip any Tier 1 file."

---

## 5. MISSING OPERATIONAL DETAILS (3 items)

### MISSING-1: No Gate Failure Protocol

**Where:** Absent from plan

**The plan specifies gates (Critical-10, Quick Check, handoff verification) but NEVER specifies what happens when a gate FAILS.**

**Scenarios with no protocol:**
- Content-selector produces content with only 2 structural element types (fails A3.1). Does the team-lead re-launch content-selector? Adjust the criteria? Abort?
- Builder produces HTML with container width = 880px (fails B2.1). Does the team-lead re-launch builder with explicit correction? Create a "fix-builder" recovery agent?
- Programmatic audit reports border-radius > 0 (fails B7.1). Is this a builder fix or a re-build?
- Quick Check item 14 fails (not better than Variant B). Does the experiment stop? Retry with different content? Retry with more mechanisms?

**FIX:** Add a "Gate Failure Decision Tree" to the plan:
```
GATE FAILURE PROTOCOL:

Content selection fails A2.x/A3.x:
  -> Re-launch content-selector with specific feedback (max 2 retries)
  -> If 3rd attempt fails: team-lead creates content manually

Build fails soul constraints (B7.x):
  -> Launch recovery-builder with soul violations list
  -> Recovery builder patches CSS only (does not re-build)

Build fails container width (B2.1):
  -> Launch recovery-builder with single instruction: "Set max-width: 960px"

Quick Check Critical-10 fails:
  -> Identify specific failure, launch targeted fix agent
  -> Re-run Quick Check after fix

Quick Check Threshold fails:
  -> Document as PARTIAL result
  -> Proceed to full evaluation if informative
  -> Abort if clearly unfixable (PA-05 = NO)

Full evaluation = FAILURE:
  -> Document findings
  -> Escalate to user for decision: retry / modify / abandon
```

### MISSING-2: No Actual Agent Prompts in the Plan

**Where:** Plan Phases 2-6

**The plan describes WHAT each agent does but does not contain the actual prompts.** The agent prompts exist in `04-team-design.md` (Section 3, lines 125-655) but the plan itself only references roles and responsibilities.

**A team-lead following ONLY the plan** (without reading 04-team-design.md) would not have prompts to launch agents. The plan says "See team design for prompts" but this reference is at line 659 of the plan -- AFTER the execution sequence.

**Impact:** The team-lead must read BOTH the plan (745 lines) AND the team design (947 lines) before launching. That's 1,692 lines of operational documentation.

**FIX:** Either (a) inline the agent prompt outlines into the plan's execution sequence, or (b) add a prominent note at the TOP of the plan: "PREREQUISITE: Read `ephemeral/middle-tier-plan/04-team-design.md` for agent prompts. This plan provides sequencing and thresholds. The team design provides launch prompts."

### MISSING-3: Type Scale Resolution Not in Plan

**Where:** Plan "CRITICAL FINDINGS" Section, Finding 1 (line 666-672)

**The plan correctly identifies the type scale conflict** between tokens.css and the master prompt. The resolution says "use the master prompt values (2.5rem/2rem/1.5rem)."

**But the plan never specifies HOW the builder receives this resolution.** The planner's :root block from the master prompt has the correct values (2.5rem/2rem/1.5rem). But if the builder reads tokens.css (as required by B8.2), they will find different values (3rem/1.625rem/1.375rem for `--type-page`/`--type-section`/`--type-subsection`).

**The builder has no instruction about which values to use when they conflict.**

**FIX:** Add to the builder prompt: "TYPE SCALE NOTE: The master prompt uses `--text-*` values mapped to `--type-*` names. Use: `--type-page: 2.5rem`, `--type-section: 2rem`, `--type-subsection: 1.5rem`. These differ from the raw tokens.css values, which use an older naming convention. The planner's values take precedence."

---

## 6. ADDITIONAL OPERATIONAL RISKS

### RISK-1: Content-Selector May Produce Content That Doesn't Map to Any Pattern

**Where:** Plan Section 2.1 (line 62), A2.10

**A2.10 requires:** "Maps to exactly ONE of CRESCENDO / F-PATTERN / BENTO / PULSE."

**The content-selector doesn't know these patterns' definitions.** The prompt template (team design line 146) lists the 4 names but the team design says the content-selector should not read the master prompt. Without knowing what CRESCENDO vs F-PATTERN means structurally, the content-selector must guess.

**The master prompt defines them (Section 4.2 Step 2):**
| Content Type | Pattern |
|---|---|
| Tutorial, step-by-step | CRESCENDO |
| Reference, lookup, API | F-PATTERN |
| Overview, dashboard | BENTO |
| Narrative, story arc | PULSE |

**Without these definitions, the content-selector might write "Pattern match: CRESCENDO" for any tutorial-like content without understanding whether its structure actually fits CRESCENDO's specific density progression.**

**FIX:** Include the 4-line pattern definition table in the content-selector prompt. This is content-structure knowledge, NOT mechanism knowledge -- it doesn't contaminate mechanism selection.

### RISK-2: Perceptual Auditor Fresh-Eyes Enforcement is Honor-System

**Where:** Team Design Agent 5 prompt (lines 374-437)

**The prompt says:** "DO NOT READ: Master prompt, Design system files, Build plan, Prohibitions or tokens."

**Enforcement mechanism:** None. The perceptual-auditor is a Sonnet agent with full file system access. Nothing prevents it from reading design system files. The "DO NOT READ" instruction relies on agent compliance with natural language instructions.

**Memory says:** "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%." This is a judgment rule ("don't read these files") not a binary rule. Compliance is NOT guaranteed.

**FIX:** The only true enforcement would be running the perceptual-auditor as a sub-agent (Task tool) with limited file access, but that may not be architecturally possible in the team setup. At minimum, add: "VERIFICATION: At the end of your PA report, add: 'Files read during this audit: [list all files read].' The team-lead will verify only the HTML file was read."

### RISK-3: Variant B File Location Uncertainty

**Where:** Plan line 520, Team Design line 449

**The plan references:** `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html`

**This file must exist for the comparative-auditor to function.** But the plan doesn't verify its existence in Stage A (Setup). If the file was moved, renamed, or the path is wrong, the comparative-auditor fails immediately.

**FIX:** Add to Stage A Setup (step 2): "Verify Variant B file exists at `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html`. If not found, search for it with: `find ephemeral/phase-d-execution -name '*variant*b*'`."

### RISK-4: Planner Context Window -- 5,761 Lines May Hit Limits

**Where:** Team Design line 796-805

**The planner receives:**
- Master prompt: 1,935 lines (FINAL version, not 1,761 as the team design estimates)
- prohibitions.md: 353 lines
- tokens.css: 174 lines
- mechanism-catalog.md: 1,011 lines
- semantic-rules.md: 286 lines
- usage-criteria.md: 298 lines
- SKILL.md: ~1,533 lines
- Content selection: ~100 lines

**Total: ~5,690 lines PLUS the agent's own prompt (~800 lines) = ~6,490 lines input.**

The team design estimates 25,000 tokens. At ~4 tokens per line, 6,490 lines = ~26,000 tokens input. With Opus's ~200k context window, this leaves ~174k tokens for output. This is within limits.

**BUT:** The team design's line count for the master prompt is WRONG. It says 1,761 lines (pre-integration). The FINAL version is ~1,935 lines (post-integration, per the changelog line 262). The planner's actual input is 174 lines more than estimated.

**This is LOW risk** (174 lines is ~700 tokens) but is a factual error in the team design.

**FIX:** Update team design's master prompt line count from 1,761 to ~1,935.

---

## 7. CONTRADICTIONS FOUND (Summary)

| # | Contradiction | Location | Severity |
|---|---|---|---|
| C1 | 7-agent vs 8-agent team design | Plan 1.1 vs Plan FINALIZED | CRITICAL |
| C2 | Phase numbering (1-6 vs 0-5 vs A-F) | Throughout plan | HIGH |
| C3 | Output directory split not documented | Plan vs team design | MEDIUM |
| C4 | Quick Check item 14 "2 categories" unfixed | Quick check file line 76 | HIGH |
| C5 | Content-selector contamination prevention scope | Team design agent 1 prompt | MEDIUM |
| C6 | Phase 4 parallel vs sequential | Plan FINALIZED vs team design | MEDIUM |
| C7 | Master prompt line count (1,761 vs 1,935) | Team design vs integration changelog | LOW |
| C8 | Variant B mechanisms "5" (plan) vs "2 categories" (quick check) | Plan vs quick check file | HIGH |

---

## 8. RECOMMENDED FIXES (Priority-Ordered)

### TIER 1: CRITICAL (must fix before team-lead can launch)

| # | Issue | Fix | Effort |
|---|---|---|---|
| 1 | C1: 7 vs 8 agents | Replace Phase 1 table with 8-agent design OR add deprecation notice | 10 min |
| 2 | MISSING-1: No gate failure protocol | Add gate failure decision tree | 20 min |
| 3 | C2: Phase numbering inconsistency | Adopt Phase 0-5 throughout, add cross-reference table | 15 min |
| 4 | C4/C8: Quick Check "2 categories" unfixed | Update quick check file OR add override note | 5 min |
| 5 | SEQ-1: No handoff enforcement mechanism | Add team-lead handoff protocol | 15 min |

### TIER 2: HIGH (should fix to prevent common execution failures)

| # | Issue | Fix | Effort |
|---|---|---|---|
| 6 | PW-1: HTTP server ownership unclear | Specify team-lead starts server before Phase 3 | 5 min |
| 7 | MISSING-2: No agent prompts in plan | Add prereq note at plan TOP | 5 min |
| 8 | PW-2: Phase 3/4 Playwright overlap risk | Add explicit "both Phase 3 agents done" gate | 5 min |
| 9 | TIME-1: Time estimate missing overhead | Update to 4.5-6 hours including overhead | 5 min |
| 10 | SEQ-4: Builder double-reading priority | Add priority rule for plan vs source file conflicts | 5 min |

### TIER 3: MEDIUM (operational hardening)

| # | Issue | Fix | Effort |
|---|---|---|---|
| 11 | RISK-1: Content-selector lacks pattern definitions | Include 4-line pattern table in prompt | 5 min |
| 12 | RISK-2: Fresh-eyes enforcement is honor-system | Add file-read disclosure verification | 5 min |
| 13 | MISSING-3: Type scale resolution not in builder prompt | Add type scale note to builder instructions | 5 min |
| 14 | C3: Output directory split undocumented | Add directory map to plan | 5 min |
| 15 | PW-3: HTTP server port conflict | Add port check to Stage A | 5 min |
| 16 | RISK-3: Variant B file existence not verified | Add to Stage A setup checklist | 2 min |
| 17 | SEQ-2: Content-before-mechanisms verification trace | Add confirmation statement to content-selector | 5 min |
| 18 | TIME-2: Planner time estimate optimistic | Adjust to 60-120 min | 2 min |
| 19 | RISK-4: Master prompt line count wrong | Update 1,761 to ~1,935 | 2 min |

---

## 9. OVERALL ASSESSMENT

### Strengths
- The plan is COMPREHENSIVE -- it covers all 11 phases of the master prompt with concrete thresholds
- Cross-reference status is thorough (5 reports covering all sections)
- The risk register (36 risks) is excellent and covers historical failure modes
- The team design's prompt templates are actionable with concrete file paths and checklists
- Per-file builder ownership eliminates contention (confirmed pattern from memory)
- The critical findings section identifies real issues (type scale, zone color, container width)
- Sequential Playwright scheduling is correctly identified as necessary

### Weaknesses
- **The plan contains TWO DIFFERENT team designs** and a team-lead reading top-to-bottom will use the wrong one
- **Phase numbering is inconsistent** (three different systems) making cross-reference error-prone
- **No gate failure protocol** means the team-lead has no guidance when (not if) something fails
- **The Quick Check file still contains the "2 categories" error** despite the integration changelog claiming it was fixed
- **Handoff enforcement is implicit** -- relies on team-lead vigilance rather than structured protocol
- **Timing estimates exclude operational overhead** (25-50 min of handoff verification not counted)
- **Agent prompts are in a separate document** that the plan doesn't prominently reference

### Operational Readiness

| Area | Readiness | Notes |
|---|---|---|
| Team architecture clarity | 5/10 | TWO architectures in one document, unresolved |
| Sequencing enforcement | 6/10 | Correct ordering but no enforcement mechanism |
| Playwright scheduling | 7/10 | Correct analysis but HTTP server ownership unclear |
| Timing realism | 6/10 | Optimistic by 1-2 hours, no failure recovery time |
| Gate failure protocols | 3/10 | Gates exist, no failure response exists |
| Agent prompt readiness | 7/10 | Good templates in team design, missing from plan |
| File path consistency | 6/10 | Workable but confusing two-directory split |
| Source document consistency | 5/10 | Quick Check unfixed, line counts wrong, phase numbers mixed |

**Overall: 6.5/10. After TIER 1 fixes: 8/10. After TIER 1 + TIER 2 fixes: 9/10.**

---

## 10. RELATIONSHIP TO PRIOR ADVERSARIAL REVIEW (23-adversarial-review.md)

The prior adversarial review targeted the MASTER PROMPT (the specification document). This review targets the EXECUTION PLAN (the operational document). They are complementary:

| Domain | Prior Review (Prompt) | This Review (Plan) |
|---|---|---|
| Content accuracy | Variant B "2 categories" fixed in prompt | NOT fixed in Quick Check file |
| Token conflicts | #FFFFFF -> #FEFEFE fixed | Type scale resolution missing from builder prompt |
| Agent architecture | N/A (single-instance focus) | 7 vs 8 agent contradiction |
| Sequencing | Content-before-mechanisms specified | No enforcement mechanism for any handoff |
| Timing | N/A | Estimates missing 1-2 hours overhead |
| Failure protocols | Gaming vulnerabilities identified | Gate failure protocols entirely absent |

**Key insight:** The integration changelog (24-integration-changelog.md) claims 26 fixes were applied to the prompt. But the PLAN was not updated to reflect several of these fixes. The plan still references the pre-integration prompt (1,761 lines) rather than the post-integration version (1,935 lines). The Quick Check file was NOT updated despite the changelog claiming the Variant B category count was resolved.

---

**END ADVERSARIAL PLAN REVIEW**

*This review was conducted under the assumption that a team-lead reading ONLY this plan would need to launch an 8-agent team, manage 5 sequential handoffs, coordinate 2 Playwright sessions, and handle at least one gate failure -- all without any prior knowledge of the design system. The plan is strong on WHAT to do but weak on HOW to do it operationally. The 5 TIER 1 fixes address the most dangerous execution risks and total ~65 minutes of editing effort.*
