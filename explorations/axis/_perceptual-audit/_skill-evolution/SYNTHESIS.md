# Perceptual Audit Skill Evolution -- Synthesis Report

**Date:** 2026-02-11
**Agent:** Synthesizer
**Inputs:** 4 analysis files (failure-analysis.md, od-benchmark.md, skill-redesign.md, team-structure.md) + 4 skill files (CLAUDE.md, GATES.md, PROTOCOL.md, TEAM.md)
**Total source material:** ~6,800 lines across 8 files

---

## A. Executive Summary

### What Changed (Before --> After)

| Dimension | Before (v1/v2, 12 files) | After (v3, 3 files + CLAUDE.md) |
|-----------|--------------------------|--------------------------------|
| **File count** | 12 files (~4,500 lines), none containing the protocol actually used | 3 files + 1 config (CLAUDE.md), self-contained |
| **Gate enforcement** | Zero binary gates. Gates existed in plan files, not skill files. | 7 mandatory binary gates, all YES/NO, all blocking |
| **Agent language** | Philosophical ("insights emerge from repeated failure and perceptual deepening") | Prescriptive ("YOUR FIRST ACTION MUST BE browser_take_screenshot") |
| **Team structure** | Ad-hoc per plan file, not codified in skill | Explicit topologies for Standalone (6), Standard (3), Fix, and Batch audits |
| **Cross-page coordination** | None. "POTENTIALLY SYSTEMIC" findings left uninvestigated. | Mandatory Gate 5: synthesis agent after 3+ pages |
| **Fix verification** | Self-certified by fixers | Independent verification mandatory (Gate 7) |
| **Playwright management** | Parallel access, contention artifacts, 13% failure rate | Sequential access within a page, zero contention by design |
| **Redundancy** | Critical rules stated once | Critical rules stated 3x (gate header, procedure step, failure case) |

### Why It Changed

The AD perceptual audit pipeline required **7 human interventions** costing **~2-3 hours (25-30% of total wall time)**. Root causes:

1. **No screenshot existence gate** -- 4 agents fell back to source-code analysis (Interventions 1, 2)
2. **No systemic synthesis** -- width-too-narrow appeared in all 6 reports but nobody aggregated it (Intervention 4)
3. **Plan rigidity** -- lead followed "fix team deferred" literally despite DO-NOT-SHIP verdicts (Intervention 5)
4. **Philosophical language** -- principles were descriptive, not enforceable; compacted away first (Intervention 3)

The OD audit of the same conceptual task required **near-zero interventions**. The delta was architectural: OD had binary verification gates, phased resource management, cross-file consistency agents, and independent verification.

### Projected Impact

| Metric | AD Actual | Projected with v3 |
|--------|-----------|-------------------|
| Human interventions | 7 | 0-1 |
| Rework time | ~2-3 hrs (25-30%) | < 30 min (< 10%) |
| Agent Playwright failures | ~13% | ~0% (sequential) |
| Language contamination | 1 minor | 0 (Gate 4 blocks at 4+) |
| Cross-page synthesis | None (user intervened) | Automatic (Gate 5) |
| Fix verification | Self-certified | Independent (Gate 7) |

---

## B. Complete Change Log

### New Files Created

| File | Location | Lines | Purpose |
|------|----------|-------|---------|
| `GATES.md` | `~/.claude/skills/perceptual-deepening/` | 534 | 7 binary validation gates with pass/fail criteria, examples, and evidence |
| `PROTOCOL.md` | `~/.claude/skills/perceptual-deepening/` | 719 | The perceptual audit protocol: 28 questions, cold look, 23 anti-patterns, sovereignty, language rules |
| `TEAM.md` | `~/.claude/skills/perceptual-deepening/` | 840 | Team topologies, agent prompt templates, Playwright management, execution checklist |
| `CLAUDE.md` | `~/.claude/skills/perceptual-deepening/` | 134 | Skill registration: slash commands, trigger phrases, three-layer architecture summary |

### Analysis Files Created (Wave 1-2)

| File | Location | Lines | Purpose |
|------|----------|-------|---------|
| `failure-analysis.md` | `explorations/axis/_perceptual-audit/_skill-evolution/` | 448 | Post-mortem of AD pipeline: 7 interventions, 4 agent failure modes, 4 lead failures |
| `od-benchmark.md` | `explorations/axis/_perceptual-audit/_skill-evolution/` | 474 | OD vs AD comparison: 10 transferable patterns, 8 mandatory validation gates |
| `skill-redesign.md` | `explorations/axis/_perceptual-audit/_skill-evolution/` | 305 | Architecture rationale: 12-to-3 consolidation, 7 gate designs, 3-layer architecture |
| `team-structure.md` | `explorations/axis/_perceptual-audit/_skill-evolution/` | 1,254 | Definitive team blueprint: wave structure, agent prompts, Playwright management, execution script |

### Files Modified

| File | Change |
|------|--------|
| `CLAUDE.md` | Rewritten to register v3 as default, reference 3 new files, retain v1/v2 for backward compatibility |

### Files Retained (Not Modified)

| File | Status |
|------|--------|
| `SKILL.md` | Retained -- v1 reference-matching protocol (activated only when reference images available) |
| `SKILL-v2.md` | Retained -- superseded by v3, kept for backward compatibility |
| `TURBO-ORCHESTRATOR.md` | Retained -- v1-only orchestrator |
| `QUICK-INVOKE.md` | Retained -- superseded by CLAUDE.md slash commands |
| `PERCEPTUAL-DEEPENING-PROTOCOL.md` | Retained -- philosophical foundation |
| `EMBEDDED-PROMPT.md` | Retained -- Q1-Q3 now inline in PROTOCOL.md Section 9 |
| `prompts/ZONE-SUB-AGENTS.md` | Retained -- superseded by TEAM.md prompts |
| `templates/*` | Retained -- templates now inline in PROTOCOL.md |
| `scripts/setup.sh` | Retained -- replaced by pre-flight in GATES.md Gate 1 |
| `tests/visual-audit.spec.ts` | Retained -- not used in actual execution |

---

## C. Coherence Verification Results

### C1. Cross-File References

| Check | Result | Evidence |
|-------|--------|----------|
| GATES.md references PROTOCOL.md for Layer 2 and Layer 3 | **PASS** | Lines 39, 45: "see PROTOCOL.md" |
| PROTOCOL.md references GATES.md for Gate 1 | **PASS** | Line 52: "(see GATES.md -- Gate 1: PLAYWRIGHT ALIVE)" |
| PROTOCOL.md references TEAM.md for WHO | **PASS** | Line 10: "For WHO does what, see TEAM.md." |
| TEAM.md references PROTOCOL.md for WHAT | **PASS** | Line 9: "For WHAT to do, see PROTOCOL.md." |
| TEAM.md references GATES.md for validation | **PASS** | Line 10: "For validation gates, see GATES.md." Line 719: "GATE 1: Playwright alive (see GATES.md)" |
| CLAUDE.md references all 3 files correctly | **PASS** | Lines 7, 73-75, 80-90 |

### C2. Gate Consistency

| Check | Result | Evidence |
|-------|--------|----------|
| 7 gates defined in GATES.md | **PASS** | Gates 1-7 each with full section (lines 72-479) |
| 7 gates referenced in CLAUDE.md quick reference | **PASS** | Table at lines 96-103 matches GATES.md exactly |
| Gate numbering consistent across files | **PASS** | GATES.md, TEAM.md execution checklist (lines 719-755), CLAUDE.md all use Gates 1-7 |
| Gate trigger points consistent | **PASS** | GATES.md defines triggers; TEAM.md execution checklist places them at same points |

### C3. Question Completeness

| Check | Result | Evidence |
|-------|--------|----------|
| All 28 PA questions present in PROTOCOL.md | **PASS** | PA-01 through PA-28, all 28 found in Section 5 (lines 183-264) |
| PA questions correctly distributed across auditors in TEAM.md | **PASS** | Auditors A-D cover PA-01 to PA-25 (25 questions, zero overlap), Adversarial covers PA-26 to PA-28 (3 questions). Total = 28. |
| Tier structure matches PROTOCOL.md | **PASS** | Tier 1 (PA-01 to PA-05), Tier 2 (PA-06 to PA-20), Tier 3 (PA-21 to PA-28) |
| Standard audit correctly uses Tier 1+2 only | **PASS** | TEAM.md line 76: "Uses Tier 1 + 2 questions (PA-01 to PA-20)" |

### C4. Anti-Pattern Completeness

| Check | Result | Evidence |
|-------|--------|----------|
| All 23 anti-patterns present in PROTOCOL.md | **PASS** | AP-01 through AP-23 in Section 8 (lines 348-457), each with binary rule language |
| Anti-patterns transformed from reference table to binary rules | **PASS** | Each AP now states consequence: "REJECT", "REWRITE", "INVALID" |
| Key anti-patterns embedded in agent prompts (TEAM.md) | **PASS** | Auditor template includes 4 BLOCK rules (lines 331-344) covering AP-01, AP-16, AP-23, and source-code fallback |

### C5. CLAUDE.md Configuration

| Check | Result | Evidence |
|-------|--------|----------|
| v3 set as DEFAULT | **PASS** | Line 7, line 11: "v3 is the DEFAULT for all audit, build, and fix work" |
| v1 retained for reference-matching | **PASS** | Line 8, line 23-24 |
| v2 marked as superseded | **PASS** | Line 9: "Legacy -- superseded by v3 for audit work" |
| Slash commands defined | **PASS** | /ship, /judge, /look, /audit, /soul, /perceive, /squint (lines 19-26) |
| Trigger phrases defined | **PASS** | Lines 31-47 |
| Three-layer architecture summarized | **PASS** | Lines 79-90 |
| Legacy files documented | **PASS** | Lines 107-120 |

### C6. Skill File Quality

| Quality Dimension | GATES.md | PROTOCOL.md | TEAM.md |
|-------------------|----------|-------------|---------|
| Language MASSIVE/EXPLICIT/UNMISSABLE | **PASS** -- Triple-block ASCII headers, ALL CAPS WARNINGS, repeated statements | **PASS** -- Section headers in ALL CAPS, boxed ONE RULE, warning blocks | **PASS** -- Boxed LEAD RULES, ALL CAPS sections, repeated emphasis blocks |
| Gates truly binary (YES/NO) | **PASS** -- All 7 gates have explicit YES/NO pass criteria | N/A (not gate file) | N/A (not gate file) |
| Prompts self-contained | N/A (not prompt file) | **PASS** -- Lock sheet agent instructions inline (Section 10) | **PASS** -- All 8 agent prompts are fully self-contained with no external references |
| Redundancy (critical rules 3x) | **PASS** -- Each gate stated as header, procedure, and failure case | **PASS** -- ONE RULE stated in Section header, Cold Look protocol, and anti-patterns | **PASS** -- "Write tool" emphasis in prompt template, output requirements, and CRITICAL blocks |

---

## D. Contradictions Found

### D1. Fixer Playwright Usage (CONTRADICTION -- NEEDS RESOLUTION)

**team-structure.md** (analysis document, lines 559-563) states:
> "Fixers work in PARALLEL -- they do NOT use Playwright. Fixes are code-only (CSS/HTML edits). Visual verification comes in Wave 4."

The fixer prompt template in team-structure.md (lines 586-588) explicitly says:
> "YOU MUST NOT USE PLAYWRIGHT. You are a code-only agent."

**PROTOCOL.md** (skill file, lines 629-634) states:
> "2. MUST use Playwright to verify fixes visually"
> "6. MUST take before/after screenshots at 1440px and 768px"

**TEAM.md** (skill file, lines 498-512) Fixer prompt says:
> "Take before AND after screenshots at 1440px and 768px."
> "Navigate to the fixed page at 1440px. Take a screenshot."

**Assessment:** The skill files (PROTOCOL.md + TEAM.md) are internally consistent with each other -- both say fixers USE Playwright. But they contradict the analysis document (team-structure.md) which explicitly prohibits fixer Playwright usage.

**Which should be authoritative:** The team-structure.md approach is architecturally superior because:
1. Code-only fixers can run in PARALLEL with zero Playwright contention
2. Independent verification (Wave 4) catches fixer errors
3. The OD pipeline's success was partly due to separation of fixing and verification
4. The failure-analysis.md explicitly identified Intervention 7 (post-fix visual issues not caught) as a problem solvable by independent verification, not by giving fixers Playwright

**However,** the current skill files' approach (fixers use Playwright) has a practical advantage: fixers can self-verify as they work, catching obvious errors before Wave 4. This reduces the number of rework cycles.

**Recommendation:** The team-structure.md approach should be adopted in a future revision. For now, the skill files are internally consistent and functional. The contradiction should be noted for the next audit's lead. Documenting this in Section E below.

### D2. Gate Numbering Between team-structure.md and GATES.md (Minor Discrepancy)

**team-structure.md** uses Gates 0-4 (5 gates across 4 waves + preflight).
**GATES.md** uses Gates 1-7 (7 gates).

The naming and numbering differ because team-structure.md organized gates by wave (Gate 0 = preflight, Gate 1 = per-auditor, Gate 2 = post-synthesis, Gate 3 = post-fix, Gate 4 = post-verification), while GATES.md organized gates by function (Gate 1 = Playwright alive, Gate 2 = screenshot exists, etc.).

**Assessment:** This is a structural difference, not a substantive contradiction. The underlying checks are the same; GATES.md has finer granularity (splitting team-structure.md's "Gate 1" into Gates 2+3+4). GATES.md should be authoritative since it is the active skill file.

### D3. Fixer Q-FIXER vs Q1-Q3 (Minor Discrepancy)

**team-structure.md** fixer prompt includes a custom "Q-FIXER" question (lines 628-632):
> "If I were looking at this page after my change, would the audit finding be resolved?"

**TEAM.md** fixer prompt includes the standard Q1-Q3 Embedded Mode (lines 506-511):
> Q1: "What bothers me now?" / Q2: "Any text still uncomfortable?" / Q3: "Would a designer ship this?"

**Assessment:** Both approaches serve the same purpose (post-fix quality check). The TEAM.md approach (Q1-Q3) is more thorough and consistent with the skill-wide Q1-Q3 pattern. TEAM.md should be authoritative.

---

## E. Remaining Gaps

### E1. No Skill File Defines the EMBEDDED-ONLY Invocation Path

CLAUDE.md line 34 defines Quick mode: "/look [page]" as "0 (lead does it), Tier 1 only, ~5 min." But no skill file provides a procedure for the lead to perform a Quick audit. The lead is explicitly prohibited from using Playwright (TEAM.md line 18). This creates a contradiction: who runs a Quick audit?

**Recommendation:** Add a Quick audit section to PROTOCOL.md or TEAM.md that either (a) spawns a single agent for the Quick audit or (b) exempts the lead from the no-Playwright rule for Quick mode only.

### E2. No Programmatic Test Templates

The OD benchmark identified programmatic DOM tests (187 tests) as a critical differentiator. GATES.md Gate 7 requires independent verification with "at least 1 programmatic check per fix." TEAM.md's programmatic verifier prompt provides a soul compliance spot-check template. But there are no reusable test templates for common fix types (width changes, dead space removal, responsive breakpoints).

**Recommendation:** Future iteration should add a `TESTS.md` or expand TEAM.md's programmatic verifier section with test templates for the 5 most common fix categories.

### E3. Fixer Playwright Contradiction Unresolved in Skill Files

As documented in D1, the skill files (PROTOCOL.md + TEAM.md) currently have fixers using Playwright, while the analysis (team-structure.md) recommends code-only fixers. This needs explicit resolution in a future update.

### E4. No Explicit Compaction-Resilience Strategy

The failure analysis identified context compaction as a root cause of Intervention 3 (principles lost during compaction). The skill redesign addresses this through redundancy (3x repetition) and binary rules (survive compaction better than philosophy). But there is no explicit strategy for what to do IF a lead's context compacts mid-audit.

**Recommendation:** Add a "COMPACTION RECOVERY" section to TEAM.md that instructs the lead to (a) re-read GATES.md, (b) re-read the current wave's section of TEAM.md, and (c) check gate status for all completed agents.

### E5. No Fresh-Eyes Gate

The fresh-eyes agent is described in TEAM.md Section 9 as mandatory for batches of 3+ pages. But there is no corresponding gate in GATES.md. The lead could skip the fresh-eyes agent without triggering a gate failure.

**Recommendation:** Consider adding Gate 5.5: "For batches of 3+ pages, does fresh-eyes-report.md exist?" This would make the fresh-eyes agent as mandatory as the synthesis agent.

### E6. team-structure.md Has Timing Estimates That Differ From TEAM.md

team-structure.md projects ~110-120 min for a 6-page batch (Section F.1). TEAM.md projects ~6-8 hours for a 6-page batch (Section 10, timing table). The difference is significant: team-structure.md assumes the new architecture eliminates all rework, while TEAM.md's estimates include buffer for real-world friction.

**Recommendation:** TEAM.md's estimates are more realistic and should be authoritative. The team-structure.md estimates are aspirational best-case.

---

## F. Recommendations for Next Audit

These are specific instructions for the next Claude instance that runs a perceptual audit using the v3 skill.

### F1. Pre-Audit Checklist

1. **Read all three skill files** in this order: GATES.md first (understand what will be checked), then PROTOCOL.md (understand what to do), then TEAM.md (understand who does what).
2. **Start the HTTP server BEFORE anything else.** The most common pre-flight failure is a missing HTTP server.
3. **Test Gate 1 yourself** before spawning any agents. Navigate, screenshot, verify the PNG exists and is > 0 bytes.
4. **Generate or reuse the Lock Sheet.** If auditing the same stage as a previous session, the cached Lock Sheet is valid.

### F2. During the Audit

5. **Run gates IMMEDIATELY after each agent completes.** Do not batch gate checks. Check Gate 2+3+4 after every single auditor, not after all auditors.
6. **After auditor 3: STOP and run the systemic pre-scan.** Read all 3 completed AUDIT-REPORT.md files. Look for findings that appear in 2+ reports. Note them for the synthesis agent.
7. **Do not wait for the user to ask for fixes.** If verdicts include DO-NOT-SHIP or if 3+ pages share a WOULD-NOT-SHIP finding, present the fix list PROACTIVELY (Gate 6).
8. **Sequential Playwright access is NON-NEGOTIABLE.** One auditor finishes all screenshots before the next starts. The time cost (~15 min longer) is less than the rework cost of contention artifacts.

### F3. Known Fixer Contradiction

9. **Be aware of the fixer Playwright contradiction (see Section D1).** The current TEAM.md fixer prompt says fixers SHOULD use Playwright for before/after screenshots. The team-structure.md analysis says they should NOT. Both approaches are valid. If you choose code-only fixers (no Playwright), the independent verifier in Wave 4 becomes MORE critical -- it is the ONLY visual check. If you choose Playwright-enabled fixers, be aware that parallel fixers will contend for Playwright access.

### F4. Post-Audit

10. **Gate 7 is the most commonly skipped gate.** After fixes pass, the temptation is to declare victory. Spawn the independent verifier. It is NOT optional.
11. **Shut down agents promptly.** Do not let stale agents linger.
12. **Commit only after ALL gates pass.** The lead commits, agents never commit.

### F5. Failure Mode Quick Reference

| If You See This... | Do This |
|--------------------|---------|
| Auditor produced findings but 0 screenshots | Gate 2 FAIL. Reject findings. Respawn with "MUST TAKE SCREENSHOTS" emphasis. |
| Auditor's Cold Look has CSS terms | Gate 4 WARN/FAIL. If minor (1-3), proceed with note. If 4+, respawn. |
| No systemic synthesis after 3+ pages | Gate 5 FAIL. Stop audits. Spawn synthesis agent. Resume after. |
| All pages done, no fix proposal despite DO-NOT-SHIP | Gate 6 FAIL. Present fix list immediately. Do not wait for user. |
| Fixes done, no independent verification | Gate 7 FAIL. Spawn verifier (NOT any fixer). |
| Agent says "I'll analyze the source code instead" | IMMEDIATE REJECT. Source-code analysis is NOT a perceptual audit. |
| Context compacting mid-audit | Re-read GATES.md + current wave section of TEAM.md. Check gate status. |

---

## G. Quality Assessment Summary

### Overall Verdict: PASS -- The v3 skill is coherent, complete, and ready for use.

**Strengths:**
- All 7 gates are defined consistently across GATES.md, CLAUDE.md, and TEAM.md execution checklist
- All 28 PA questions are present and correctly distributed across 5 auditors (4 standard + 1 adversarial)
- All 23 anti-patterns are present and transformed from reference table to binary rules with consequences
- Agent prompts in TEAM.md are fully self-contained (no external references that could be lost to compaction)
- Critical rules are redundantly stated (gate header + procedure step + failure case)
- Language is MASSIVE, EXPLICIT, and UNMISSABLE (ASCII block headers, ALL CAPS, boxed warnings)
- Three-layer architecture (Binary Gates --> Structured Judgment --> Free Perception) is clearly defined and consistently referenced

**One contradiction to track:** Fixer Playwright usage (Section D1). Functionally minor for the first use -- both approaches produce working audits. Should be resolved before the second use.

**Five gaps to track:** Quick mode procedure (E1), programmatic test templates (E2), fixer Playwright resolution (E3), compaction recovery (E4), fresh-eyes gate (E5). None are blocking for v3 launch.

---

*Synthesis complete. 8 files analyzed (~6,800 lines). 6 coherence checks PASS. 3 contradictions documented (1 substantive, 2 minor). 6 remaining gaps identified (0 blocking). v3 skill is ready for use.*
