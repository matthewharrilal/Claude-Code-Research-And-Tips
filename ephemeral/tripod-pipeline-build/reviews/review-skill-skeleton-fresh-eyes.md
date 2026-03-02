# Review: SKILL-skeleton.md — Fresh-Eyes Adversarial Review

**Reviewer:** Fresh-eyes reviewer (reviewer-5, zero context from architect)
**File reviewed:** `ephemeral/tripod-pipeline-build/assembly/SKILL-skeleton.md` (808 lines)
**Spec sections consulted:** 3 (Architecture), 8 (Phase 5), 9 (Instrumentation), 11 (Obstacles), 12 (Proven Patterns), 14 (File Routing), 17 (Key Principles)
**Pattern reference:** `~/.claude/skills/compose/SKILL.md` (existing /compose skill)
**Note:** A prior review exists at `review-skill-skeleton.md`. This review is independent; overlapping findings are noted.

---

## Overall Assessment: STRONG -- 3 BLOCKING, 5 IMPORTANT, 4 MINOR

The skeleton is remarkably faithful to both the spec and the /compose pattern. Structure, file routing, agent isolation, context recovery, and validation gates are all thorough. The 3 blocking issues are straightforward fixes. The important issues warrant discussion but don't prevent assembly.

---

## Checklist Results

### Structure & Pattern Compliance

- [x] "You are the ORCHESTRATOR" framing (line 10)
- [x] Agent isolation enforced: each phase lists explicit DOES and DOES NOT receive
- [x] File-based handoffs: all inter-phase communication via disk files
- [x] Quick Reference at top (lines 16-29): phase table with agents, outputs, validation gates

### All 13 Placeholder Markers Present

| # | Marker | Line |
|---|--------|------|
| 1 | `{{TC_AGENT_PROMPT}}` | 110 |
| 2 | `{{SPECIALIST_1_PROMPT}}` | 169 |
| 3 | `{{SPECIALIST_2_PROMPT}}` | 192 |
| 4 | `{{SPECIALIST_3_PROMPT}}` | 219 |
| 5 | `{{SPECIALIST_4_PROMPT}}` | 243 |
| 6 | `{{SPECIALIST_5_PROMPT}}` | 264 |
| 7 | `{{SYNTHESIZER_PROMPT}}` | 315 |
| 8 | `{{BUILDER_PASS_1_PROMPT}}` | 391 |
| 9 | `{{BUILDER_PASS_2_PROMPT}}` | 426 |
| 10 | `{{BUILDER_PASS_3_PROMPT}}` | 458 |
| 11 | `{{PA_AUDITOR_PROMPT}}` | 569 |
| 12 | `{{WEAVER_PROMPT}}` | 592 |
| 13 | `{{REFINE_BUILDER_PROMPT}}` | 686 |

All 13 confirmed.

### Validation Gates Between EVERY Phase

| Transition | Gate | Line |
|-----------|------|------|
| Phase 0 -> 1 | "DO NOT proceed to Phase 1 until Phase 0 validation passes." | 86 |
| Phase 1 -> 2 | "DO NOT proceed to Phase 2 until Phase 1 validation passes." + 6-item checklist | 136 |
| Phase 2 -> 3 | "DO NOT proceed to Phase 3 until Phase 2 validation passes." + specialist floors + package validation | 359 |
| Phase 3 -> 4 | "DO NOT proceed to Phase 4 until Phase 3 validation passes." + per-pass HTML checks | 485 |
| Phase 4 -> 5 | Verdict logic: SHIP/REBUILD/REFINE | 641-643 |
| Phase 5 max | "If fix cycle >= 2, STOP." | 706 |

All gates present with explicit stop instructions.

### Context Recovery at Every Phase Boundary

8 recovery points confirmed (lines 92, 142, 296, 365, 410, 442, 491, 649). All reference `_pipeline-log.md` plus relevant artifacts. Thorough coverage including intra-phase checkpoints (Pass 1->2->3 within Phase 3).

### File Routing vs Spec Section 14

Every agent's file routing matches the spec. Detailed comparison:

- TC Agent: content.md, TC SKILL.md, identity.md, vocabulary.md -- MATCH
- Specialists (common): content.md, _tc-brief.md -- MATCH
- Specialist 1-5 domain files: each matches spec Section 5.2-5.6
- Synthesizer: all 5 specialist outputs + _tc-brief.md + content.md + exemplar packages -- MATCH
- Builder Pass 1: _package-pass-1.md (PRIMACY) + content.md + _tc-brief.md + tokens.css + components.css -- MATCH
- Builder Pass 2: _package-pass-2.md (PRIMACY) + _pass-1-decisions.md + _build-pass-1.html -- MATCH
- Builder Pass 3: _package-pass-3.md (PRIMACY) + both decisions.md + _build-pass-2.html -- MATCH
- PA Auditors: sanitized screenshots + stripped PA skill (assigned questions only) -- MATCH
- Weaver: screenshots + 5 auditor reports + Weaver protocol + 3 package files (NEW) -- MATCH
- Refine Builder: _build-final.html + synthesis.md + relevant package(s) + _builder-reflection.md -- MATCH

**Note:** Skeleton adds `_builder-reflection.md` to Refine Builder (line 677) which spec Section 14 omits but /compose includes. This is a correct and valuable addition -- keep it.

### Phase 2 Specialist Execution

- [x] 5 specialists spawn in PARALLEL (Step 2A header + line 146)
- [x] Synthesizer waits for ALL specialists (Step 2C: "SEQUENTIAL -- after all specialists," line 294)

### Phase 3 Rotation

- [x] Pass 1 receives `_package-pass-1.md` in PRIMACY position (line 381)
- [x] Pass 2 receives `_package-pass-2.md` in PRIMACY position (line 415)
- [x] Pass 3 receives `_package-pass-3.md` in PRIMACY position (line 447)

### Phase 4 Screenshot Protocol

Matches /compose exactly: HTTP server, 3 viewports (1440/1024/768), font waiting, animation disable, full-page + fold captures, sanitized copies, server shutdown.

### Phase 4 PA Isolation

- [x] PA auditors: fresh-eyes (no brief, no packages, no pipeline context)
- [x] Weaver: receives packages for compliance checking but NOT conviction brief
- [x] Auditor question assignments match spec (lines 552-556)

### Fix Cycles

- [x] Max 2 cycles (line 653) -- matches spec Section 8
- [x] Targeted package sections based on issue type (lines 673-676)
- [x] Full re-evaluation after each fix (line 702)

### Re-run Logic

- [x] Specialist re-run: max 1 per specialist, with feedback template (lines 284-289)
- [x] Synthesizer re-run: with feedback template (line 345)
- [x] TC re-spawn: with feedback template (line 123)
- [x] Builder re-spawn: with feedback template (line 404)

### Output Manifest

Matches spec Section 16 exactly (lines 748-779 vs spec lines 843-873).

### Key Principles

All 10 principles from spec Section 17 present (lines 785-803). Two good additions: principle 11 (validation gates) and principle 12 (re-read at phase boundaries).

---

## BLOCKING Issues

### B1: Missing $50 cost pause threshold

**Spec reference:** Section 11 (line 665): "If estimated cost exceeds $50 at any checkpoint, the orchestrator pauses and reports to user"

**Problem:** The skeleton includes cumulative cost estimates in every phase checkpoint template (lines 83, 133, 356, 481, 637, 717) but never implements the actual STOP behavior. The orchestrator writes the cost to the log but has no instruction to compare it against a threshold and halt if exceeded. A runaway pipeline could incur significant cost without user consent.

**Fix:** After EVERY phase checkpoint, add:

```markdown
**Cost check:** If the cumulative cost estimate above exceeds $50, STOP HERE.
Report the current cost, completed phases, and all artifacts to the user.
Ask whether to continue. Do NOT proceed to the next phase without user approval.
```

Add this after lines 134, 357, 483, 638, and 716.

**Severity:** BLOCKING. The spec explicitly requires this safeguard.

### B2: Agent count in Quick Reference is wrong

**Location:** Line 29: "Total agents per run: 14-15 (1 TC + 5 specialists + 1 synthesizer + 1 builder x 3 + 5 PA + 1 weaver + 0-1 refine)"

**Problem:** "1 builder x 3" is ambiguous, and the total is mathematically wrong. Phase 3 spawns a NEW agent with fresh context for each pass (lines 373, 412, 441: "Spawn: One Opus builder (new agent -- fresh context)"). That means 3 separate agent spawns:

1 TC + 5 specialists + 1 synthesizer + **3 builders** + 5 PA + 1 weaver + 0-1 refine = **16-17**

Not 14-15.

**Why this matters:** The Quick Reference table is the FIRST thing a context-recovered orchestrator reads. If the orchestrator has spawned 12 agents and sees "14-15 total," it may incorrectly believe it's nearly done when it's only at Phase 3 of 5.

**Note:** This error originates in the spec itself (line 135). But the skeleton IS the executable document -- it must be correct HERE regardless of spec errors.

**Fix:** Change to: "Total agents per run: 16-17 (1 TC + 5 specialists + 1 synthesizer + 3 builders + 5 PA + 1 weaver + 0-1 refine)"

**Severity:** BLOCKING. Incorrect metadata in the Quick Reference undermines the skeleton's most critical resilience feature (context recovery).

### B3: No HTTP server cleanup guarantee on failure

**Location:** Lines 497-539 (Phase 4 screenshot protocol)

**Problem:** The protocol starts an HTTP server with `python3 -m http.server 8080 ... &` (line 499) and says "Stop the HTTP server when done" (line 539) but provides no kill mechanism (no PID capture, no cleanup command). If a screenshot step fails (Playwright timeout, blank screenshot validation), the orchestrator may proceed to PA spawning or error recovery with the server still running. During fix cycles (Phase 5D, line 702), the orchestrator MUST re-capture screenshots, which requires restarting the server. Port 8080 will be occupied, causing a hard failure.

The /compose skill has the same weakness, but /research-compose is MORE vulnerable because fix cycle re-screenshots are guaranteed for any REFINE verdict.

**Fix:** Add explicit cleanup. Before every server start:

```bash
# Kill any existing server on port 8080
lsof -ti:8080 | xargs kill -9 2>/dev/null || true
# Start fresh server
python3 -m http.server 8080 --directory {OUTPUT_DIR} &
HTTP_PID=$!
```

And after screenshots:
```bash
kill $HTTP_PID 2>/dev/null || true
```

**Severity:** BLOCKING. Any REFINE verdict triggers re-screenshots. Port collision bricks the pipeline at its most critical moment.

---

## IMPORTANT Issues

### I1: Spec self-contradiction on max fix cycles (max 2 vs max 3)

The skeleton says max 2 (line 653), which matches spec Section 8 (line 442). But spec Section 12 (Proven Patterns from /compose) says "Maximum 3 fix cycles" (line 725), and /compose itself uses max 3 (line 256).

The skeleton correctly follows the primary spec section. But the spec itself is internally inconsistent. This should be flagged to the spec author so the final spec is unambiguous.

### I2: Comparison report (Step 4D) violates the "orchestrator does plumbing, not creativity" principle

**Location:** Lines 602-625

The comparison report requires the orchestrator to read `_build-final.html`, all 3 package files, and produce a section-by-section analysis: "Package instructed" -> "Build evidence" -> "Gap" -> "PA confirmation." This is a compositional judgment -- the orchestrator must assess whether CSS/HTML satisfies abstract instructions from the package.

This contradicts Key Principle 1 (line 785): "Never compositional decisions."

The Weaver already produces "Package Compliance" output (line 598, output 4) covering the same ground. The orchestrator's report is likely lower-quality duplication.

**Options:**
- Make the orchestrator report purely mechanical (file size comparisons, keyword presence checks, no judgment)
- Spawn a comparison agent (Opus) for the report
- Remove the orchestrator report and rely on the Weaver's Package Compliance

### I3: Builder Pass 2 and 3 have minimal creative context

**Location:** Pass 2 (lines 419-422) and Pass 3 (lines 451-455)

Pass 2 and 3 builders do NOT receive content.md or the TC brief. They receive the prior HTML + a 20-30 line decisions.md + the new package file. The decisions.md is a lossy compression of the builder's full creative intent.

This is a design choice (attention management), not a bug. But the quality floor for decisions files is only "> 10 lines" (lines 402, 436). A 10-line summary of Pass 1 decisions is extremely thin.

**Suggestion:** Raise the decisions.md quality floor to >= 25 lines and require it to reference specific zones, mechanisms, and metaphor elements.

### I4: No "Pipeline Complete" checkpoint in the pipeline log

The "Pipeline Complete" section (lines 724-741) reports to the user but doesn't write a final checkpoint to `_pipeline-log.md`. A context-recovered orchestrator wouldn't see a clear "DONE" marker.

**Fix:** Add a final log write:
```markdown
## Pipeline Complete
- Status: DONE
- Final verdict: {verdict}
- Total fix cycles: {N}
- Total agents spawned: {count}
- Cumulative cost: ${total}
```

### I5: `design-system/archive/` path prefix issue

**Note:** The prior review (review-skill-skeleton.md) identifies this as its highest-severity finding -- 10 file paths prepend `design-system/` to `archive/` paths. I have NOT independently verified whether `design-system/archive/` exists on disk (since I was told to review the skeleton against the spec, not the filesystem). However, I note the spec Section 10 lists these files WITHOUT the `design-system/` prefix. If the prior review's filesystem check is correct, this affects Specialist 2 (1 file), Specialist 4 (1 file), Specialist 5 (7 files), and Synthesizer (2 files).

I'm flagging this as IMPORTANT rather than BLOCKING because: (a) the prior review already covers it thoroughly, and (b) I cannot independently verify the filesystem claim. If confirmed, this IS blocking.

---

## MINOR Issues

### M1: `_pipeline-log.md` doesn't capture specialist domain file lists

Phase 2 checkpoint (lines 348-357) records line counts but not WHICH files each specialist read. During re-runs, the orchestrator must re-derive file lists from the skeleton text.

### M2: Port 8080 is hardcoded with no fallback

Lines 499, 509: If port 8080 is in use for non-pipeline reasons, the entire screenshot protocol fails silently. Consider a port variable or probe.

### M3: Agent spawning instructions don't specify timeout behavior

The skeleton says to use `subagent_type: "general-purpose"` and `model: "opus"` (line 49) but doesn't specify what the orchestrator should do if an agent times out or hangs. The 5 parallel specialists (Phase 2) are especially vulnerable -- if one hangs, the synthesizer can't start.

**Suggestion:** Add "If any agent has not produced output within 15 minutes, check for partial output and decide whether to proceed or re-spawn."

### M4: Self-containment risk after placeholder population

The skeleton is 808 lines. When 13 placeholders are populated with full agent prompts, the file could exceed 2000 lines. At that size, the orchestrator's own context might compress the skill file during long runs.

**Recommendation:** After final assembly, if the file exceeds ~1500 lines, consider splitting: master orchestration file + separate prompt files read on-demand at each phase start.

---

## Comparison with Prior Review

The prior review (`review-skill-skeleton.md`) found 2 revise items: the `archive/` path prefix (HIGH) and the missing Refine Builder prompt file (MEDIUM). My review agrees with both but adds 3 issues the prior review missed:

1. **$50 cost pause threshold** -- spec explicitly requires it, skeleton omits it entirely
2. **Agent count math error** -- 14-15 is wrong, should be 16-17
3. **HTTP server cleanup on failure** -- port collision risk during fix cycle re-screenshots

The prior review's REVISE 2 (missing Refine Builder prompt file) is accurate but is a build-team gap, not a skeleton defect -- the skeleton correctly places the `{{REFINE_BUILDER_PROMPT}}` placeholder. Someone needs to write the prompt, but the skeleton is doing its job.

---

## Summary Table

| Category | Count | Items |
|----------|-------|-------|
| BLOCKING | 3 | B1: $50 cost pause missing, B2: agent count wrong (16-17 not 14-15), B3: HTTP server cleanup |
| IMPORTANT | 5 | I1: max fix cycle spec contradiction, I2: comparison report violates plumbing principle, I3: builder pass 2/3 thin context, I4: no pipeline-complete log marker, I5: archive/ path prefix |
| MINOR | 4 | M1: specialist domain tracking, M2: hardcoded port, M3: agent timeout behavior, M4: post-assembly file size |

**Bottom line:** The skeleton is well-crafted and demonstrates strong understanding of both the spec and the /compose patterns. The 3 blocking issues are all straightforward fixes (add cost-check text, correct a number, add cleanup commands). After those fixes, the skeleton is ready for prompt placeholder population and final assembly.
