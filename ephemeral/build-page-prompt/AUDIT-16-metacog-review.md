# AUDIT-16: Metacognitive Review -- Is the Master Prompt Itself Well-Designed?

**Agent:** metacog-reviewer (Opus 4.6)
**Task:** #16
**Date:** 2026-02-19
**Scope:** Evaluate whether the assembled master prompt drafts function as a coherent delivery vehicle for a fresh Claude instance

**Method:** Read all 8 DRAFT files + 4 design guidance documents (~7,500 lines). Evaluate on 7 dimensions. Rate each 1-5 with specific improvement recommendations.

---

## EXECUTIVE SUMMARY

The master prompt drafts represent a mature, well-researched architecture that addresses most known failure modes. However, the drafts exist as 8 separate documents totaling ~4,500+ lines -- far exceeding the 400-600 line target identified by the metacog analysis. The assembler's task is not concatenation but ruthless compression. The individual sections are high quality; the aggregate is undeliverable without radical surgery.

**Overall verdict: 3.5/5 -- STRONG FOUNDATION, NEEDS ASSEMBLY DISCIPLINE**

The biggest risk is not content quality but volume. The drafts collectively contain 10x the recommended line count. If the assembler does not enforce the 400-600 line budget, FM-01 (skimming collapse) will destroy the prompt's effectiveness.

---

## DIMENSION 1: FORMAT COHERENCE

**Rating: 4/5**

**Question:** Is the prompt itself a recipe (imperative steps) or a checklist (constraints)? Does the format match the task?

**Analysis:**

The format analysis (11-format-analysis.md) correctly identifies that the master prompt MUST be a recipe (75% recipe, 10% conventions, 15% checklist) because the task is CODIFICATION (writing/editing specific files), not COMPOSITION (building a page). The conventions brief content it instructs the agent to create should be in conventions format, but the prompt wrapping it is procedural.

**What works well:**

1. DRAFT-orchestrator.md is a clean recipe: 7 numbered steps (0-7), each with explicit deliverables, timing, and verification. Imperative verbs dominate: "Spawn," "Run," "Capture," "Write." This is the strongest draft.

2. DRAFT-11 (PA + SKILL.md) correctly separates the orchestrator's recipe format from the conventions-brief content that will be delivered to the builder. The builder spawn prompt uses creative framing ("You are building a page") while the orchestrator instructions use procedural framing ("Spawn ONE Opus agent").

3. DRAFT-09 (conventions brief) achieves the 55% conventions / 25% recipe / 20% checklist target through careful rewrites of drifted sections (Sections 2, 6, 7, 9, PROCESS). The format analysis's recommendations were applied.

**What needs fixing:**

1. DRAFT-12 (skill edits) is 1,220 lines of Edit-tool pairs. This is CORRECTLY a recipe (mechanical operations), but the assembler must decide: embed all 35 edits in the master prompt, or instruct the fresh instance to read DRAFT-12 as a reference file? Embedding 1,220 lines violates the line budget. Reference-reading introduces FM-05 (wrong file assumptions).

   **Recommendation:** Embed only the 5 highest-impact edits inline. Reference DRAFT-12 for the remaining 30 with instruction: "Read ephemeral/build-page-prompt/DRAFT-12-skill-edits.md. Apply all edits in the order specified."

2. The two DRAFT-13 files (from nav-researcher and claude-md-architect) overlap significantly -- both provide CLAUDE.md edits, validation protocol, and prompt architecture. The assembler MUST reconcile these rather than include both.

   **Recommendation:** Use the claude-md-architect version (DRAFT-13-claude-md-architecture-section.md) as canonical -- it is more structured (Sections A-D) and includes the recommended 8-section master prompt architecture.

---

## DIMENSION 2: ANTI-SKIMMING

**Rating: 3/5**

**Question:** Does the prompt use techniques to prevent a fresh instance from skimming?

**Analysis:**

The metacog analysis (07-metacog-analysis.md) identifies 6 anti-skimming techniques. The drafts' adoption:

| Technique | Present in Drafts? | Evidence |
|-----------|-------------------|----------|
| 1. Front-load each section with deliverable | PARTIAL | DRAFT-orchestrator starts with architecture statement, not deliverable. DRAFT-09 starts with file path. Mixed. |
| 2. Bold first lines of every section | NO | Markdown bold is used but not systematically as visual anchors. Most sections start with descriptive text, not bold action items. |
| 3. `>>> CRITICAL:` prefix for non-negotiables | NO | Not used in any draft. Container width, warm palette, and perceptible CSS are stated but not visually distinguished from surrounding text. |
| 4. Critical info on its own line, never mid-paragraph | PARTIAL | Threshold values appear in tables (good) but also buried in prose (bad). DRAFT-09 Section 2 embeds ">=15 RGB" in a paragraph. |
| 5. Numbered steps within each file task | YES | DRAFT-orchestrator uses numbered steps throughout. DRAFT-11 uses numbered phases. |
| 6. Checkpoints between sections | PARTIAL | Self-checks exist in DRAFT-13's architecture but are not yet embedded in the actual draft content. |

**What works well:**

- The orchestrator draft (DRAFT-orchestrator.md) is the most skimming-resistant: clear numbered steps, timing estimates, structured tables, and explicit verification at each step.
- DRAFT-10 (gate runner) uses tables extensively, which are inherently skimming-resistant because they force structured attention.

**What needs fixing:**

1. The `>>> CRITICAL:` prefix is not used anywhere despite being recommended by the metacog analysis. The three non-negotiables (container 940-960px, warm palette R>=G>=B, every CSS value perceptible) should each get this prefix in the master prompt.

2. Self-check questions exist in the architecture but are not yet embedded in the draft content. The architecture recommends exactly 4 self-checks:
   - After conventions brief: count constraint words
   - After operational recipe: verify CSS values + self-checks + WHY annotations
   - After file edits: verify cross-references
   - After validation builds: verify build succeeded

   **Recommendation:** The assembler must embed these 4 self-checks at their designated positions. They are the most effective FM-01 countermeasure.

3. The recency-zone restatement (repeating non-negotiables at the end) is described in the architecture but does not exist in any draft. The assembler must add it.

---

## DIMENSION 3: INFORMATION ARCHITECTURE

**Rating: 4/5**

**Question:** Is the prompt structured so a fresh instance knows what to do first, what files to create vs edit, what order, what success looks like, and when to verify?

**Analysis:**

The 8-section architecture from DRAFT-13 provides a clear information structure:

```
Section 0: MISSION + NON-NEGOTIABLES (15-20 lines)
Section 1: FILE INVENTORY + DEPENDENCY GRAPH (20-25 lines)
Section 2: PRE-FLIGHT CHECKS (15-20 lines)
Section 3: CONVENTIONS BRIEF CREATION (100-120 lines)
Section 4: OPERATIONAL RECIPE CREATION (80-100 lines)
Section 5: SUPPLEMENTARY FILES + SKILL EDITS (60-80 lines)
Section 6: DESIGN-SYSTEM FILE EDITS (60-80 lines)
Section 7: VALIDATION BUILDS (40-50 lines)
Section 8: RECENCY RESTATEMENT (15-20 lines)
```

**What works well:**

1. The ordering follows the "hardest tasks first" principle from BA-05. The conventions brief (hardest, most creative) is Section 3. Mechanical edits are Section 6. Validation (most attention-depleted) is Section 7 but gated by binary criteria.

2. The dependency graph in DRAFT-13 Section D.2 is explicit: which files reference which, what order to write them, what the fresh instance needs to have read before each section.

3. Success criteria are binary: PA-05 >= 3.5 AND Tier 5 >= 6/8. The fresh instance cannot misinterpret "success."

4. The file inventory concept (Section 1) is excellent -- a complete list of all files to create/edit before any work begins. This prevents the "discovery of work" problem where the agent realizes mid-execution that there are more files than expected.

**What needs fixing:**

1. The two DRAFT-13 variants propose slightly different section structures. The nav-researcher version has 8 sections targeting 405-515 lines. The claude-md-architect version has a similar structure but targets 375-470 lines. These must be reconciled into ONE structure.

   **Recommendation:** Use the 8-section structure from the nav-researcher (DRAFT-13-claude-md-architecture.md, Section D.2) as canonical. It is more detailed and maps more cleanly to the anti-skimming requirements.

2. The "what order to do things" dimension is handled for file creation (Section 1 inventory) but not for the skill edits (DRAFT-12). The skill edits have an explicit execution order (Section C) -- PA skill first (bottom-up), then TC skill (bottom-up). This ordering is critical for avoiding line-number drift. The assembler must preserve this ordering instruction.

3. There is no explicit "STOP AND VERIFY" instruction between the conventions brief (Section 3) and the operational recipe (Section 4). The brief is the single most failure-prone file. Adding a verification gate here (self-check #1) prevents compounding errors.

---

## DIMENSION 4: LENGTH OPTIMIZATION

**Rating: 2/5 -- THE CRITICAL WEAKNESS**

**Question:** Is the prompt the right length?

**Analysis:**

The metacog analysis recommends **400-600 lines** for the master prompt. Current draft lengths:

| Draft | Lines | Content |
|-------|-------|---------|
| DRAFT-orchestrator.md | 505 | Orchestrator sequence (Steps 0-7 + practical details) |
| DRAFT-09-conventions-brief-section.md | 520 | Conventions brief content (~232 lines of brief + 288 lines of notes) |
| DRAFT-10-gate-runner-section.md | 1,048 | Gate runner file content + notes |
| DRAFT-11-pa-orchestrator-section.md | 643 | PA questions + build-page SKILL.md |
| DRAFT-12-skill-edits.md | 1,221 | 35 Edit-tool operations for TC + PA skills |
| DRAFT-13-claude-md-architecture.md | 885 | 8 CLAUDE.md edits + validation + architecture |
| DRAFT-13-claude-md-architecture-section.md | 885 | Alternate version (11 edits + validation + architecture) |
| DRAFT-pa-questions.md | 156 | Tier 5 PA questions standalone |
| **TOTAL** | **~5,863** | |

The drafts contain approximately **10x the recommended line count.** Even accounting for drafter's notes (which should be stripped), the actual content is ~3,500 lines -- still 6-7x the budget.

**What this means:**

If the assembler concatenates these drafts, the master prompt will be ~3,500 lines. At this length:
- FM-01 (Skimming collapse): CERTAIN. Lines 200-3,000 will receive degraded attention.
- FM-09 (Teaching instead of directing): The drafts contain extensive rationale and evidence that must be stripped.
- FM-03 (Compression cascade): The fresh instance will internally compress 3,500 lines into ~300 lines of working understanding.

**What must happen:**

The assembler must perform RADICAL COMPRESSION:

1. **Strip all drafter's notes.** DRAFT-09 has 288 lines of notes after the actual brief content. DRAFT-10 has ~30 lines of notes. DRAFT-13 has extensive architecture discussion that belongs in the architecture, not the prompt.

2. **Reference, don't embed.** The gate-runner content (1,048 lines) should NOT be in the master prompt. Instead: "WRITE FILE: gate-runner.md with the following content" followed by a file path reference. The fresh instance reads the content from DRAFT-10 directly.

3. **The conventions brief content (~232 lines) IS the critical payload.** It should be embedded verbatim. The operational recipe and supplementary content should be referenced.

4. **Skill edits (1,221 lines) must be referenced, not embedded.** "Read ephemeral/build-page-prompt/DRAFT-12-skill-edits.md. Apply all edits in sequence."

5. **CLAUDE.md edits (~14-20 edits) should be embedded** because they are short (4-6 lines each) and critical to test correctness.

**Target after compression:**

| Section | Budget | Content |
|---------|--------|---------|
| Mission + non-negotiables | 20 lines | Inline |
| File inventory + ordering | 25 lines | Inline |
| Pre-flight | 20 lines | Inline |
| Conventions brief | 120 lines | Inline (embed the ~232-line brief content, with instruction to write it) |
| Operational recipe | 30 lines | Reference to DRAFT-orchestrator.md for full content |
| Gate runner + PA questions | 20 lines | References to DRAFT-10 and DRAFT-pa-questions.md |
| Skill edits | 15 lines | Reference to DRAFT-12 |
| CLAUDE.md edits | 80 lines | Inline (short, critical) |
| Validation builds | 50 lines | Inline |
| Recency restatement | 20 lines | Inline |
| **TOTAL** | **~400 lines** | |

This is achievable IF the assembler treats the drafts as SOURCE MATERIAL to compress from, not as content to include.

---

## DIMENSION 5: SELF-REFERENTIAL CONSISTENCY

**Rating: 3.5/5**

**Question:** Does the prompt follow its own rules?

**Analysis:**

| Rule | Prompt Follows It? | Evidence |
|------|--------------------|----------|
| Recipe format (since recipe > checklist) | YES | DRAFT-orchestrator and DRAFT-11 are recipe format. Numbered steps, imperative verbs. |
| Avoids 7.9:1 guardrail-to-playbook ratio | MOSTLY | DRAFT-09 (conventions brief) is 80% world-description, 20% constraint -- a good ratio. But DRAFT-10 (gate runner) is 95% constraint (thresholds) with no CSS playbook. |
| Gives creative authority while maintaining constraints | YES | DRAFT-09 Section 9 (Creative Authority) explicitly says "You are the composer. Everything outside the six soul constraints is yours to decide." |
| Perception thresholds as physics, not rules | YES | DRAFT-09 Section 2 frames thresholds as "physics of visibility in this world" not "rules to comply with." |
| Boundary-by-boundary, not channel-by-channel | YES | DRAFT-09 PROCESS section: "working BOUNDARY BY BOUNDARY rather than channel by channel." |
| No judgment language | MOSTLY | Rare occurrences of "should" and "appropriate" but no systematic judgment language. The conventions brief correctly avoids "sufficient," "harmonious," etc. |

**What needs fixing:**

1. The gate-runner draft (DRAFT-10) is pure constraint with zero playbook. Every gate says "FAIL if X" but does not say "here is the CSS that achieves X." The format analysis says every guardrail needs a paired playbook. DRAFT-10 partially addresses this with "Fix recipe format" for each gate (including specific CSS), which is good. But the fix recipes are in the gate FAILURE output, not in the builder's input. The builder never sees them unless a gate fails.

   **Recommendation:** The conventions brief (Section 2: Perception) already embeds the key thresholds as world-description. The gate runner does not need playbooks because it is a VERIFICATION tool, not a builder input. The self-referential consistency is acceptable if the brief and gates are understood as serving different audiences (brief -> builder, gates -> orchestrator).

2. The meta-prompt architecture says "no new concepts after line 300." But several drafts introduce critical concepts deep in their structure (e.g., DRAFT-10 introduces SC-13B and SC-16 as ADVISORY gates that are never mentioned elsewhere). The assembler must ensure all concepts appear before the line-300 threshold.

---

## DIMENSION 6: TEAM ARCHITECTURE CLARITY

**Rating: 4.5/5**

**Question:** Will the fresh instance understand HOW to use TeamCreate and manage the build team?

**Analysis:**

The team architecture is the strongest dimension across all drafts. Three sources converge on the same design:

1. **16-team-architecture.md** provides the full team structure: 11 agents, 4 waves, explicit TaskCreate commands, model specs, wave dependencies, communication protocol, fix cycle management.

2. **DRAFT-orchestrator.md** provides the runtime orchestration: Step-by-step agent spawning, Playwright scheduling, screenshot capture, PA deployment.

3. **CROSSREF-47-team-design-verification.md** validates the design against 25 proven patterns (21/25 match, 1 blocking finding fixed).

**What works well:**

1. **Agent prompts are complete.** The builder spawn prompt (DRAFT-orchestrator.md, Step 1) is ~30 lines with exact file manifest, read order, creative authority clause, and output file specification. This is the right level of detail.

2. **Agent models are specified.** All Opus. Non-negotiable for builder and PA auditors.

3. **Task dependencies are explicit.** The Wave structure prevents contention. Wave 1.5 resolves the PA skill edit contention. Wave 2 depends on ALL Wave 1+1.5 completion.

4. **Playwright scheduling is pristine.** Zero concurrent Playwright usage. All Playwright by orchestrator. PA auditors read saved screenshots. This is the most validated operational pattern.

5. **Fix cycle protocol is clear.** Same builder, max 3 cycles, structured feedback (gate failures get CSS recipes, PA issues get directional guidance), then ESCALATE.

**What needs fixing:**

1. The CROSSREF-47 identified one BLOCKING finding: the lock sheet generation step (Step 3.5) appears in DRAFT-orchestrator.md but the DRAFT-11 (PA + SKILL.md) explicitly chose NOT to include it, with rationale: "the weaver reads auditor reports (fresh-eyes) and gate results (programmatic) -- that IS the lock sheet."

   There is a genuine tension here. DRAFT-orchestrator.md includes the lock sheet. DRAFT-11 excludes it. The assembler must choose one. Given that both Mode 4 PA and Remediation PA included lock sheets and both succeeded, I recommend INCLUDING the lock sheet per DRAFT-orchestrator.md.

2. The team architecture describes the BUILD-PAGE-PROMPT team (this session) and the /build-page RUNTIME team (future invocations). The master prompt must describe ONLY the runtime team. The build-page-prompt team design is irrelevant to the fresh instance that will execute the master prompt. The assembler must strip all build-page-prompt team references.

---

## DIMENSION 7: ESCAPE HATCHES

**Rating: 3/5**

**Question:** What does the fresh instance do if something goes wrong?

**Analysis:**

| Failure Scenario | Escape Hatch Provided? | Where |
|------------------|----------------------|-------|
| Gate failure mid-build | YES | DRAFT-orchestrator Step 6: "If ANY Tier A or Tier B gate FAILS, proceed to fix cycle. Do NOT skip to PA." |
| PA failure after all 3 fix rounds | YES | DRAFT-orchestrator Step 7: "On ESCALATE: Report all gate results + PA synthesis to user with recommendation." DRAFT-11 Section 6.4: "After Cycle 3: ESCALATE to user. Do NOT loop beyond 3 cycles." |
| Builder fails to produce output files | PARTIAL | DRAFT-11 Section 2: "Verify 3 output files exist... If any file missing after builder completes: send fix instruction." But no instruction for what to do if builder CRASHES or exceeds time limit. |
| Skill edit breaks the file | NO | DRAFT-12 has 35 edits but no rollback instruction. If an edit corrupts SKILL.md, the fresh instance has no recovery path. |
| File path doesn't exist | PARTIAL | DRAFT-13 Section A: "Read the file first. Verify each old_string exists EXACTLY. If any old_string does not match, STOP and report the discrepancy -- do NOT guess." Good for edits. No equivalent for reference file reads. |
| Content file is empty or missing | YES | DRAFT-11 Section 1: "If no path provided: ask user for content source." But no check for empty file. |
| HTTP server fails to start | NO | DRAFT-orchestrator Step 2 assumes `python3 -m http.server 8765` succeeds. No fallback if port is in use or Python is unavailable. |
| Conventions brief is checklist instead of recipe | PARTIAL | The self-check protocol (count constraint words) catches this. But there is no REPAIR instruction -- only "revise." The agent may not know HOW to revise from checklist to conventions format. |
| PA auditors produce no output | NO | No instruction for what to do if an auditor agent completes without writing a file. |

**What needs fixing:**

1. **Skill edit rollback.** Before applying skill edits, the master prompt should instruct: "Read the file. Copy its current content to a backup variable or log. Apply edits. Read the file back. If the file is corrupted or an edit failed, STOP and report." This is not paranoia -- line-number drift across 35 sequential edits is a real risk.

2. **HTTP server failure.** Add: "If port 8765 is in use, try 8766. If Python is not available, try `npx serve`. If neither works, ESCALATE."

3. **Missing auditor output.** Add: "After spawning 9 PA auditors, verify all 9 report files exist. If any are missing, re-spawn that auditor. If still missing after 1 retry, proceed with available reports."

4. **Builder timeout.** Add: "If builder has not produced output.html within 180 minutes, check if the builder is still running. If running, wait. If terminated without output, spawn a new builder." The estimated builder time is 90-150 minutes; 180 is a reasonable timeout.

---

## CROSS-CUTTING FINDINGS

### Finding 1: THE CONVENTIONS BRIEF IS THE LINCHPIN

Across all 7 dimensions, the conventions brief emerges as the single most critical component. It is:
- The hardest file to get right (format coherence)
- The most vulnerable to skimming (anti-skimming)
- The first creative file in the execution order (information architecture)
- The largest embedded content block (length optimization)
- The document that must follow its own rules most strictly (self-referential consistency)
- The document that determines builder quality (team architecture)
- The component with the weakest escape hatch (escape hatches)

DRAFT-09 is the best draft in the collection -- it successfully achieves the 55/25/20 conventions/recipe/checklist target, embeds CD-006 vocabulary patterns as world-description rather than targets, and frames failure anti-patterns as "physics of perception" rather than gates. The assembler should treat DRAFT-09 as the highest-priority content to embed verbatim.

### Finding 2: TWO DRAFT-13s MUST BE RECONCILED

Both DRAFT-13 files (nav-researcher and claude-md-architect) provide overlapping content:
- CLAUDE.md edits (8 vs 11 edits -- the 11-edit version includes 3 additional edits for evolution state)
- Validation protocol (both propose 2 builds with nearly identical criteria)
- Master prompt architecture (both propose 8-section structures)

The claude-md-architect version (DRAFT-13-claude-md-architecture-section.md) is more comprehensive (9 edits to compositional-core/CLAUDE.md vs 6) and should be canonical.

### Finding 3: DRAFT-10 (GATE RUNNER) IS OVERSIZED

At 1,048 lines, the gate runner draft is the second-largest component. It contains complete JavaScript pseudocode for all 21 gates. This level of detail is valuable for the RUNTIME pipeline but should NOT appear in the master prompt. The master prompt should reference DRAFT-10 as a file to be written, with a summary table of gate names and thresholds inline (~30 lines).

### Finding 4: THE MASTER PROMPT IS A RECIPE ABOUT A PIPELINE

The most important metacognitive insight is that the master prompt has a DUAL NATURE:
1. It is a RECIPE for the fresh instance (procedural, step-by-step file writing)
2. It CONTAINS a conventions brief that is NOT a recipe (dispositional, world-building)

The assembler must maintain this duality. The wrapping prompt should be relentlessly procedural. The conventions brief content it instructs the agent to write should be dispositional. Mixing these modes (procedural wrapping with dispositional asides, or dispositional wrapping with procedural content) is the surest path to FM-02 (checklist drift) or FM-06 (conventions becomes checklist).

---

## DIMENSION SCORES SUMMARY

| Dimension | Rating | Key Strength | Key Weakness |
|-----------|--------|-------------|-------------|
| 1. Format Coherence | 4/5 | Recipe format correctly chosen for codification task | Two DRAFT-13 variants need reconciliation |
| 2. Anti-Skimming | 3/5 | Tables and numbered steps present | `>>> CRITICAL:` prefix unused; self-checks not embedded; no recency restatement |
| 3. Information Architecture | 4/5 | 8-section structure with hardest-first ordering | Two architecture variants to reconcile; missing STOP gate between Sections 3-4 |
| 4. Length Optimization | 2/5 | Individual drafts are well-structured | Aggregate is ~5,863 lines (10x budget). RADICAL compression needed. |
| 5. Self-Referential Consistency | 3.5/5 | Conventions brief follows conventions format; recipe prompt follows recipe format | Gate runner has no playbook component; new concepts may appear after line 300 |
| 6. Team Architecture Clarity | 4.5/5 | Agent prompts complete; models specified; Playwright scheduling pristine | Lock sheet inclusion inconsistent between drafts |
| 7. Escape Hatches | 3/5 | Gate failures, PA failures, and escalation covered | No rollback for skill edits; no HTTP server fallback; no builder timeout; no missing-auditor recovery |

**Weighted average: 3.4/5 (STRONG FOUNDATION, ASSEMBLY-CRITICAL)**

---

## TOP 5 RECOMMENDATIONS FOR THE ASSEMBLER

1. **ENFORCE THE 400-600 LINE BUDGET.** This is non-negotiable. The metacog analysis, format analysis, and architecture all converge on this range. Strip all drafter's notes, reference (don't embed) the gate runner and skill edits, and embed only the conventions brief content and CLAUDE.md edits inline.

2. **EMBED EXACTLY 4 SELF-CHECKS** at the designated positions. These are the primary defense against FM-01 (skimming) and FM-07 (perfunctory validation).

3. **USE `>>> CRITICAL:` PREFIX** for the 3 non-negotiables and all perception thresholds. This is the single cheapest anti-skimming intervention (5 minutes of formatting, disproportionate attention benefit).

4. **RECONCILE THE TWO DRAFT-13s** into one canonical set of CLAUDE.md edits + validation protocol + architecture. Use the claude-md-architect version as the base; supplement with any unique content from the nav-researcher version.

5. **ADD THE 4 MISSING ESCAPE HATCHES:** skill edit rollback instruction, HTTP server fallback, missing auditor recovery, and builder timeout.

---

## HONEST ASSESSMENT

The drafts are the product of 23+ research reports and represent the most thoroughly analyzed pipeline architecture in this project's history. The conventions brief (DRAFT-09) is genuinely good -- it achieves the conventions-format target while embedding all critical thresholds and vocabulary. The orchestrator design (DRAFT-orchestrator.md) is clean and well-validated against 4 proven architectures.

But the assembler faces the fundamental tension identified in BA-06: ~55% of accumulated intelligence will be lost in compression. The drafts contain ~370KB of research-informed content. The master prompt has budget for ~30KB. That is a 12:1 compression ratio. Only procedural content survives this compression; relational, proportional, and emergent knowledge dies.

The conventions brief is the ONE piece of dispositional content that must survive intact. Everything else in the master prompt should be procedural, mechanical, and compressed to the minimum needed for accurate execution.

P(master prompt achieves its goals):
- All files created at correct paths: 85-90%
- Conventions brief is dispositional (not checklist): 55-65% (the brief draft quality is high; the transfer risk is in the assembler's handling)
- Skill edits apply cleanly: 70-80%
- Validation Build A (Gas Town) >= 3.0: 55-65%
- Validation Build A >= 3.5 (Flagship): 30-45%
- Full PIPELINE PASS: 20-35%

These odds are the best achievable with a single-prompt approach. The constraints are structural (BA-06: 55% intelligence loss) and cannot be overcome by better prompt design. They can only be overcome by better content selection, better builder models, or iterative refinement across multiple experiments.

---

**END OF AUDIT-16**

**Statistics:**
- Draft files read: 8 (DRAFT-orchestrator, DRAFT-09, DRAFT-10, DRAFT-11, DRAFT-12, DRAFT-13 x2, DRAFT-pa-questions)
- Design guidance files read: 4 (07-metacog-analysis, 11-format-analysis, 16-team-architecture, CROSSREF-47)
- Total lines read: ~7,500
- Dimensions evaluated: 7
- Dimension scores: 4, 3, 4, 2, 3.5, 4.5, 3 (average 3.4/5)
- Recommendations: 5 primary + 4 escape hatch additions
- Cross-cutting findings: 4
