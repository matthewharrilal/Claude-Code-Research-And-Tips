# Dimension 09: Pipeline Completeness & Orchestrator Behavior

**Auditor:** pipeline-completeness agent
**Sources:** 2 pipeline logs, 2 build directories, SKILL.md (828 lines)
**Runs examined:**
- **Molly:** `ephemeral/builds/molly-panopticon-extraction-2026-03-02/`
- **Yegge:** `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/`

---

## A. Phase Completion

### Molly Run

| Phase | Status | Key Evidence |
|-------|--------|-------------|
| Phase 0 (SETUP) | COMPLETE | Output dirs created, 4 common files loaded (identity.md 87L, vocabulary.md 55L, tokens.css 124L, components.css 779L), browser pre-flight PASS |
| Phase 1 (DERIVE) | COMPLETE | TC brief: 144 lines, 6/6 sections present, definitive metaphor "Cartographic Survey Station", 5 waypoints (floor: 3), conviction-driven PASS |
| Phase 2 (RESEARCH) | COMPLETE | 5 specialists + 1 synthesizer spawned. All specialists above floor. 3 packages produced (295/224/220 lines, all >100). Recipe:checklist ratio 96:7. |
| Phase 3 (BUILD) | COMPLETE | 3 passes. Pass 1: 2260L/96KB. Pass 2: 2575L/108KB. Final: 2643L/112KB. Monotonic size increase confirmed. Soul check PASS. |
| Phase 4 (EVALUATE) | COMPLETE | 6 screenshots (all >100KB, no blanks). 5 auditors + 1 weaver. Synthesis 258 lines. Verdict: REFINE. 4 TYPE A, 3 TYPE B, 0 TYPE C. |
| Phase 5 (REFINE) | COMPLETE | 1 fix cycle. 7 agents (1 refine builder + 5 PA + 1 weaver). Re-evaluation verdict: SHIP. All TYPE A + TYPE B resolved. 1 TYPE C accepted (diminishing returns). |

**Molly verdict: ALL 6 PHASES COMPLETE.** Pipeline ran through full lifecycle including 1 fix cycle.

### Yegge Run

| Phase | Status | Key Evidence |
|-------|--------|-------------|
| Phase 0 (SETUP) | COMPLETE | Output dirs created, 4 common files loaded, browser PASS |
| Phase 1 (DERIVE) | COMPLETE | TC brief: 154 lines, 6/6 sections present, definitive metaphor "Industrial Control Tower", 5 waypoints, conviction-driven PASS |
| Phase 2 (RESEARCH) | COMPLETE | 5 specialists + 1 synthesizer. All above floor. 3 packages (311/210/267 lines, all >100). Recipe:checklist ratios 26:1, 47:1, 17:9. |
| Phase 3 (BUILD) | COMPLETE | 3 passes. Pass 1: 2755L/101KB. Pass 2: 2995L/106KB. Final: 3022L/108KB. Monotonic increase. Soul PASS. |
| Phase 4 (EVALUATE) | COMPLETE | 6 screenshots (all >50KB, no blanks). 5 auditors + 1 weaver. Synthesis 234 lines. Verdict: REFINE. 3 TYPE A, 2 TYPE B. |
| Phase 5 (REFINE) | COMPLETE | 1 fix cycle. 7 agents (1 refine builder + 5 PA + 1 weaver). Re-evaluation verdict: SHIP. 4/5 issues fully resolved, 1 partial (code block frequency -- diminishing returns). |

**Yegge verdict: ALL 6 PHASES COMPLETE.** Same lifecycle pattern as Molly.

### Phase Completion Summary

Both runs achieved 100% phase completion with identical orchestration structure: SETUP -> DERIVE -> RESEARCH -> BUILD -> EVALUATE -> REFINE -> SHIP. Both needed exactly 1 fix cycle (of maximum 2). Neither required a REBUILD.

---

## B. Pipeline Log Quality

### Layer B Checkpoint Template Compliance

The SKILL specifies this checkpoint format:
```
- Timestamp
- Agents spawned (count + roles)
- Artifacts produced (filename + line count)
- Quality floor check (PASS/FAIL per artifact)
- Concerns
- Cumulative cost estimate ($low-$high + phase estimate)
- Decision (PROCEED / RE-RUN / ABORT + justification)
```

**Molly log compliance (183 lines):**

| Field | Phase 0 | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 |
|-------|---------|---------|---------|---------|---------|---------|
| Timestamp | YES | YES | YES | YES | YES | YES |
| Agents spawned | YES (0) | YES (1) | YES (6) | YES (3) | YES (6) | YES (7) |
| Artifacts produced | YES | YES | YES | YES | YES | YES |
| Quality floor check | YES | YES | YES | YES | YES | YES |
| Concerns | YES | YES | YES | YES | YES | YES |
| Cumulative cost | YES | YES | YES | YES | YES | YES |
| Decision | YES | YES | YES | YES | YES | YES |

**Yegge log compliance (160 lines):**

Same 7/7 fields present across all 6 phases. Identical structure.

**VERDICT: Both logs follow the Layer B template faithfully across all phases.** Every required field is present. Phase boundaries are clearly marked with `---` separators and `## Phase N: NAME -- Checkpoint` headers.

### Cost Tracking Quality

Both logs track cumulative cost estimates as range pairs ($low-$high) at every phase boundary, with the per-phase estimate in parentheses. This matches the SKILL template exactly.

**Molly cost progression:** $0 -> $3-5 -> $15-20 -> $30-38 -> $42-50 -> $58-68
**Yegge cost progression:** $0 -> $3-5 -> $15-20 -> $30-38 -> $40-48 -> $56-64

Both show monotonic accumulation with reasonable phase increments.

### Agent Counts Per Phase

| Phase | SKILL Spec | Molly Actual | Yegge Actual |
|-------|-----------|-------------|-------------|
| Phase 0 | 0 | 0 | 0 |
| Phase 1 | 1 TC (Opus) | 1 TC (Opus) | 1 TC (Opus) |
| Phase 2 | 5 specialists + 1 synth | 6 (5+1, all Opus) | 6 (5+1, all Opus) |
| Phase 3 | 3 builders | 3 (1 per pass, all Opus) | 3 (1 per pass, all Opus) |
| Phase 4 | 5 PA + 1 weaver | 6 (5+1, all Opus) | 6 (5+1, all Opus) |
| Phase 5 | 1 refine + 5 PA + 1 weaver | 7 (1+5+1, all Opus) | 7 (1+5+1, all Opus) |
| **Total** | **16-17 base + 7 refine** | **~24** | **~24** |

Both runs match the SKILL specification exactly. The "~24" total logged in both runs is correct: 1 + 6 + 3 + 6 + 7 = 23 agents (the log says ~24 which is a minor rounding).

---

## C. Context Management

### Evidence of Context Recovery

**Molly:** No explicit evidence of the orchestrator needing to re-read `_pipeline-log.md` mid-run. The log reads as a continuous session without context compression events. Timestamps progress steadily from start to ~150 min.

**Yegge:** Same pattern. No evidence of context recovery protocol being triggered. Timestamps progress from T+0:00 to T+3:30.

**Assessment:** Neither run appears to have hit context compression during orchestration. This is plausible for a ~2.5-3 hour orchestrator session where the orchestrator follows the SKILL's instruction to NOT read agent prompt files into its own context and to prefer Bash-based validation checks over reading full file contents.

### Context Management Protocol Adherence

The SKILL specifies:
1. Do NOT read agent prompt files into your own context -- **Cannot verify from log alone**, but both logs show correct file routing (agents received correct file sets per phase).
2. For validation, prefer Bash-based checks -- **Log shows wc -l style validations** (line counts reported for every artifact). Consistent with Bash-based checking.
3. Only read files YOU need to make routing decisions -- **Consistent with logs.** Orchestrator appears to have read TC briefs (needed for routing) but not raw specialist outputs.

**VERDICT: Context management appears disciplined.** No evidence of context exhaustion or recovery protocol activation.

---

## D. Error Handling

### Agent Spawn Failures

**Molly:** No spawn failures logged. All 24 agents completed successfully. All quality floors met on first attempt. Zero re-runs needed.

**Yegge:** Same. Zero spawn failures. Zero re-runs. All quality floors met on first attempt.

### Blank Screenshots

**Molly:** All 6 screenshots > 100KB (range: 101KB to 3.4MB). No blank captures. The log explicitly notes "all > 100KB, no blanks."

**Yegge:** All 6 screenshots > 50KB (range: 82KB to 2.9MB). The log explicitly notes "all 6 files > 50KB, no blank captures."

**Assessment:** The persistent blank screenshot issue documented in project memory (DPR 0.667) did NOT manifest in either run. This is a notable improvement.

### Quality Floor Failures

**Molly specialists:**
| Specialist | Floor | Actual | Status |
|-----------|-------|--------|--------|
| S1 | >= 100 | 225 | PASS (2.25x floor) |
| S2 | >= 80 | 150 | PASS (1.88x floor) |
| S3 | >= 100 | 416 | PASS (4.16x floor) |
| S4 | >= 60 | 378 | PASS (6.30x floor) |
| S5 | >= 80 | 151 | PASS (1.89x floor) |

**Yegge specialists:**
| Specialist | Floor | Actual | Status |
|-----------|-------|--------|--------|
| S1 | >= 100 | 243 | PASS (2.43x floor) |
| S2 | >= 80 | 175 | PASS (2.19x floor) |
| S3 | >= 100 | 409 | PASS (4.09x floor) |
| S4 | >= 60 | 370 | PASS (6.17x floor) |
| S5 | >= 80 | 158 | PASS (1.98x floor) |

**No quality floor failures in either run.** All specialists produced 1.9x-6.3x their floor minimum. S3 (case studies) and S4 (constraints) consistently produce the richest output (4-6x floor). S5 (protocol) consistently produces closest-to-floor output (~2x).

**VERDICT: Zero error handling paths were exercised.** Both runs completed cleanly with no failures, no retries, no blank screenshots. This is either excellent reliability or insufficient stress testing. Given these are the first 2 runs of the new pipeline on real content, the clean execution is a positive signal.

---

## E. Timing & Cost

### Total Agent Count

| Metric | Molly | Yegge |
|--------|-------|-------|
| Phase 1 agents | 1 | 1 |
| Phase 2 agents | 6 | 6 |
| Phase 3 agents | 3 | 3 |
| Phase 4 agents | 6 | 6 |
| Phase 5 agents | 7 | 7 |
| **Total agents** | **23** | **23** |
| Fix cycles | 1 of 2 max | 1 of 2 max |

### Estimated Cost

| Metric | Molly | Yegge | SKILL Estimate |
|--------|-------|-------|---------------|
| Phase 1 | $3-5 | $3-5 | $3-5 |
| Phase 2 | $12-15 | $12-15 | $8-15 |
| Phase 3 | $15-18 | $15-18 | $12-18 |
| Phase 4 | $12-14 | $10-12 | $5-10 |
| Phase 5 | $16-18 | $16-20 | $0-8 per cycle |
| **Total** | **$58-68** | **$56-64** | **$28-56 base** |

**SKILL cost guidance says:** Phase costs total $28-56 base. With REFINE cycles at $8-16 each, one cycle brings it to $36-72. The SKILL also says: "If cumulative upper bound exceeds $50, PAUSE and report to user before proceeding."

**Neither log mentions a cost pause at $50.** Molly crossed $50 at Phase 4/5 boundary (cumulative $42-50 becoming $58-68). Yegge crossed $50 at the same point ($40-48 becoming $56-64). The SKILL's $50 pause instruction appears to have been SKIPPED in both runs.

**Actual vs SKILL estimates:**
- Phase 2 consistently costs $12-15, exceeding the SKILL's low estimate of $8. The SKILL's range of $8-15 is accurate at the high end but optimistic at the low end.
- Phase 4 consistently costs $10-14, exceeding the SKILL's estimate of $5-10. With 6 Opus agents all producing substantive reports, $5 is unrealistic.
- Phase 5 consistently costs $16-20, exceeding the SKILL's per-cycle estimate of $0-8. The $0-8 range assumes only the refine builder; the actual cost includes 5 PA re-evaluation auditors + 1 weaver.

**FINDING: The SKILL's cost estimates are systematically low for Phases 4 and 5.** The SKILL says Phase 4 costs $5-10 and Phase 5 costs $0-8 per cycle. Actual runs show $10-14 for Phase 4 and $16-20 for Phase 5. The SKILL's "Total agents per run: 16-17" only counts the base pipeline without refine re-evaluation agents; the actual total with 1 fix cycle is 23.

### Timing

**Molly:** ~150 min (~2.5 hours) from start to SHIP
**Yegge:** ~3.5 hours (T+0:00 to T+3:30 based on timestamps)

No timing estimates are provided in the SKILL, so no comparison possible.

---

## F. Artifact Completeness

### Expected Output Manifest (from SKILL lines 744-774)

```
{OUTPUT_DIR}/
+-- _build-final.html
+-- _tc-brief.md
+-- _specialist-1-findings.md
+-- _specialist-2-validated.md
+-- _specialist-3-casestudies.md
+-- _specialist-4-constraints.md
+-- _specialist-5-protocol.md
+-- _package-pass-1.md
+-- _package-pass-2.md
+-- _package-pass-3.md
+-- _build-pass-1.html
+-- _build-pass-2.html
+-- _pass-1-decisions.md
+-- _pass-2-decisions.md
+-- _builder-reflection.md
+-- _pipeline-log.md
+-- _comparison-report.md
+-- _screenshots/
|   +-- 1440-full.png, 1440-fold.png
|   +-- 1024-full.png, 1024-fold.png
|   +-- 768-full.png, 768-fold.png
+-- _pa/
|   +-- _images/
|   |   +-- view-a-01.png, view-a-02.png
|   |   +-- view-b-01.png, view-b-02.png
|   |   +-- view-c-01.png, view-c-02.png
|   +-- auditor-1.md through auditor-5.md
|   +-- synthesis.md
+-- _fixes/
    +-- fix-1-feedback.md, fix-1-page.html
```

### Molly Artifact Check

| Expected File | Present | Size |
|--------------|---------|------|
| _build-final.html | YES | 104KB |
| _tc-brief.md | YES | 20KB |
| _specialist-1-findings.md | YES | 43KB |
| _specialist-2-validated.md | YES | 22KB |
| _specialist-3-casestudies.md | YES | 32KB |
| _specialist-4-constraints.md | YES | 34KB |
| _specialist-5-protocol.md | YES | 21KB |
| _package-pass-1.md | YES | 21KB |
| _package-pass-2.md | YES | 21KB |
| _package-pass-3.md | YES | 17KB |
| _build-pass-1.html | YES | 95KB |
| _build-pass-2.html | YES | 109KB |
| _pass-1-decisions.md | YES | 5.4KB |
| _pass-2-decisions.md | YES | 8.2KB |
| _builder-reflection.md | YES | 6.0KB |
| _pipeline-log.md | YES | 9.9KB |
| _comparison-report.md | YES | 6.0KB |
| _screenshots/1440-full.png | YES | 3.4MB |
| _screenshots/1440-fold.png | YES | 107KB |
| _screenshots/1024-full.png | YES | 3.3MB |
| _screenshots/1024-fold.png | YES | 104KB |
| _screenshots/768-full.png | YES | 3.2MB |
| _screenshots/768-fold.png | YES | 101KB |
| _pa/_images/view-a-01.png | YES | 3.4MB |
| _pa/_images/view-a-02.png | YES | 107KB |
| _pa/_images/view-b-01.png | YES | 3.3MB |
| _pa/_images/view-b-02.png | YES | 104KB |
| _pa/_images/view-c-01.png | YES | 3.2MB |
| _pa/_images/view-c-02.png | YES | 101KB |
| _pa/auditor-1.md | YES | 8.9KB |
| _pa/auditor-2.md | YES | 10KB |
| _pa/auditor-3.md | YES | 8.3KB |
| _pa/auditor-4.md | YES | 7.0KB |
| _pa/auditor-5.md | YES | 11KB |
| _pa/synthesis.md | YES | 17KB |
| _fixes/fix-1-feedback.md | YES | 10KB |
| _fixes/fix-1-page.html | YES | 104KB |

**Molly: 35/35 expected files present. Zero missing. Zero unexpected.**

### Yegge Artifact Check

| Expected File | Present | Size |
|--------------|---------|------|
| _build-final.html | YES | 111KB |
| _tc-brief.md | YES | 21KB |
| _specialist-1-findings.md | YES | 44KB |
| _specialist-2-validated.md | YES | 24KB |
| _specialist-3-casestudies.md | YES | 28KB |
| _specialist-4-constraints.md | YES | 31KB |
| _specialist-5-protocol.md | YES | 20KB |
| _package-pass-1.md | YES | 22KB |
| _package-pass-2.md | YES | 20KB |
| _package-pass-3.md | YES | 16KB |
| _build-pass-1.html | YES | 101KB |
| _build-pass-2.html | YES | 106KB |
| _pass-1-decisions.md | YES | 6.0KB |
| _pass-2-decisions.md | YES | 8.4KB |
| _builder-reflection.md | YES | 5.5KB |
| _pipeline-log.md | YES | 7.5KB |
| _comparison-report.md | YES | 1.0KB |
| _screenshots/1440-full.png | YES | 2.9MB |
| _screenshots/1440-fold.png | YES | 87KB |
| _screenshots/1024-full.png | YES | 2.8MB |
| _screenshots/1024-fold.png | YES | 84KB |
| _screenshots/768-full.png | YES | 2.7MB |
| _screenshots/768-fold.png | YES | 82KB |
| _pa/_images/view-a-01.png | YES | 2.9MB |
| _pa/_images/view-a-02.png | YES | 87KB |
| _pa/_images/view-b-01.png | YES | 2.8MB |
| _pa/_images/view-b-02.png | YES | 84KB |
| _pa/_images/view-c-01.png | YES | 2.7MB |
| _pa/_images/view-c-02.png | YES | 82KB |
| _pa/auditor-1.md | YES | 13KB |
| _pa/auditor-2.md | YES | 14KB |
| _pa/auditor-3.md | YES | 12KB |
| _pa/auditor-4.md | YES | 12KB |
| _pa/auditor-5.md | YES | 13KB |
| _pa/synthesis.md | YES | 29KB |
| _fixes/fix-1-feedback.md | YES | 6.1KB |
| _fixes/fix-1-page.html | YES | 111KB |

**Yegge: 35/35 expected files present. Zero missing. Zero unexpected.**

### Cross-Run Artifact Size Comparison

| Artifact | Molly | Yegge | Delta |
|----------|-------|-------|-------|
| _build-final.html | 104KB | 111KB | +7% |
| _tc-brief.md | 20KB | 21KB | +5% |
| Total specialist output | 152KB | 147KB | -3% |
| Total package output | 59KB | 58KB | -2% |
| _pa/synthesis.md | 17KB | 29KB | +71% |
| _comparison-report.md | 6.0KB | 1.0KB | **-83%** |

**Notable anomaly: Yegge's comparison report is 1.0KB vs Molly's 6.0KB.** The SKILL says this should be an extraction of Weaver Output 4 from synthesis.md. Yegge's synthesis.md is actually larger (29KB vs 17KB), so the extraction appears to have been truncated or minimal. This is a minor orchestrator error -- the comparison report content should scale with synthesis complexity, not inversely.

**Notable positive: Yegge's PA auditor reports are substantially larger (12-14KB vs 7-11KB) and more uniform in size.** This suggests the PA auditors had more to say about the Yegge build, consistent with its higher code-block complexity.

---

## Summary of Findings

### What Worked

1. **100% phase completion** across both runs. All 6 phases ran to completion. Both achieved SHIP after 1 fix cycle.

2. **Layer B checkpoint template faithfully followed.** All 7 required fields present in all phase checkpoints. Phase boundaries clearly marked. Log is readable and diagnostic.

3. **All 35/35 expected artifacts produced** in both runs. Zero missing files. File sizes are non-trivial (no stub outputs).

4. **Quality floors consistently exceeded.** No specialist needed a re-run. Average specialist output was 2.8x floor minimum.

5. **Zero blank screenshots.** The historically persistent DPR 0.667 issue did not manifest.

6. **Progressive enrichment validated.** Build HTML grew monotonically across all 3 passes in both runs (Molly: 96KB -> 108KB -> 112KB, Yegge: 101KB -> 106KB -> 108KB).

7. **Agent counts match SKILL specification exactly.** 23 agents per run (with 1 fix cycle), all Opus.

### What Needs Attention

1. **SKILL cost estimates are systematically low.** Phase 4 actual ($10-14) exceeds estimate ($5-10). Phase 5 actual ($16-20) vastly exceeds estimate ($0-8). The SKILL's Phase 5 estimate appears to only account for the refine builder, not the full re-evaluation PA cycle. Total actual ($56-68) exceeds the SKILL's base estimate ($28-56) even before fix cycles.

2. **$50 pause instruction was not followed.** The SKILL says "If cumulative upper bound exceeds $50, PAUSE and report to user before proceeding." Neither run paused. Both crossed $50 at the Phase 4/5 boundary without explicit user confirmation.

3. **Yegge comparison report anomalously small (1.0KB vs expected ~6KB).** The extraction from synthesis.md Output 4 appears to have been incomplete. The orchestrator may have extracted only a header or summary instead of the full section.

4. **No error paths were exercised.** Zero failures means the retry, re-run, and ABORT paths are untested. This is fine for 2 clean runs but leaves uncertainty about error handling robustness.

5. **Molly log says "5 phases" but lists 6 headings (Phase 0-5).** Line 179: "Total phases completed: 5 (SETUP, DERIVE, RESEARCH, BUILD, EVALUATE, REFINE)" -- this lists 6 names but says 5. Cosmetic counting error. The actual phases labeled 0-5 = 6 phases.

### Recommendations

1. **Update SKILL cost estimates.** Phase 4 should be $10-15. Phase 5 per-cycle should be $14-20 (includes 7 agents: 1 refine + 5 PA + 1 weaver). Total estimate with 1 fix cycle: $44-73.

2. **Enforce the $50 pause gate** or raise/remove it. Currently dead code.

3. **Audit comparison report extraction logic.** Yegge's 1.0KB report suggests the orchestrator's Output 4 extraction is fragile.

4. **Log phase count accurately.** Phase 0-5 = 6 phases, not 5.
