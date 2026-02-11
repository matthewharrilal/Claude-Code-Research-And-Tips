# PA Process Failure Analysis — Post-Mortem

**Date:** 2026-02-11
**Analyst:** Failure Analyst (subagent)
**Scope:** AD perceptual audit pipeline — 6 pages (AD-001 through AD-006)
**Source Data:** 1,314-line execution plan, 6 audit reports, 6 fix reports, 1 verification report, conversation interventions, 12 skill files

---

## Executive Summary

The AD perceptual audit pipeline produced genuinely high-quality audit reports — the output was excellent. The process of getting there was not. At least 7 distinct human interventions were required to keep the pipeline running. The root causes cluster into three categories: (1) agents falling back to source-code analysis instead of using Playwright (the foundational anti-pattern the entire skill exists to prevent), (2) the lead/orchestrator not proactively synthesizing systemic patterns across pages, and (3) the plan's language being too descriptive and not prescriptive enough to produce correct behavior without human steering.

Estimated total wall time: ~8-10 hours. Estimated time on rework: ~2.5-3 hours (25-30%). Estimated time saveable with proper gates: ~2 hours.

---

## A. Intervention Timeline

### Intervention 1: AD-004 Auditors Fall Back to Source-Code Analysis

**What happened:** Both Auditor Alpha and Auditor Beta for AD-004 (Spiral) produced findings based entirely on reading the HTML/CSS source files. No Playwright navigation occurred. No screenshots were taken. The pages they "audited" were blank — they never actually rendered. The user discovered this and said: "NO REDO ALL OF AUDITOR ALPHA AND BETAS AUDIT Needs to use Playwright and can't be blank pages."

**What should have happened automatically:** The plan explicitly states (Error Handling table): "Playwright contention → Wait 30s, retry 3x. DO NOT fall back to source reading." The plan also includes Gate 2: "All 5 findings files exist. Contamination spot-check: Grep for CSS property names..." But Gate 2 checks for contamination (CSS language), not for the more fundamental failure of never having used Playwright at all. An agent can produce CSS-free language by summarizing source code in perceptual terms — passing Gate 2 while violating the entire protocol.

**Time cost:** ~30-45 minutes (respawn both auditors, wait for redo, re-synthesis).

**Root cause:** VALIDATION GAP. The plan has no binary gate for "did the agent take at least 1 screenshot?" A simple file-existence check (`screenshots/*.png` count > 0) would catch this instantly. The plan trusts agents to follow the Playwright instruction; the instruction is descriptive ("you MUST use Playwright") rather than enforced via a checkable gate.

---

### Intervention 2: AD-003 Redo Requested Alongside AD-004

**What happened:** The user requested AD-003 be redone at the same time as AD-004. The exact cause is less documented, but it appears AD-003 also had insufficient Playwright usage or quality issues that prompted a redo.

**What should have happened automatically:** Same as Intervention 1 — a screenshot-existence gate after Wave 1 completion would have caught this before synthesis.

**Time cost:** ~30-45 minutes (parallel with AD-004 redo, but still wasted synthesis time on bad inputs).

**Root cause:** VALIDATION GAP — identical to Intervention 1.

---

### Intervention 3: User Had to Paste Perceptual Auditing Principles TWICE

**What happened:** The user had to manually paste the perceptual auditing principles into the conversation twice during the process. This suggests the lead/orchestrator either (a) lost context due to compaction and couldn't reconstruct the principles from the plan, or (b) didn't propagate the principles strongly enough into agent prompts.

**What should have happened automatically:** The 1,314-line plan was designed to be self-contained — Section "SKILL MINDSET: LOOKING, Not CHECKING" (lines 15-100) contains the full principles. The plan states "This plan includes all prompt templates, question text, protocols, and anti-pattern warnings inline. The executing instance does NOT need to re-read the 1,704-line master prompt during execution." If the lead compacted, the principles should have been reconstructable from the plan on disk.

**Time cost:** ~10-15 minutes per paste (20-30 minutes total). Not just the paste time — the cognitive cost of the user realizing the system wasn't operating with the right mindset.

**Root cause:** PROMPT GAP. The principles were in the plan, but the plan's principles section was 85 lines of philosophy. When context compacted, the lead likely retained the procedural steps (spawn agent X, check gate Y) and lost the philosophical foundation. The principles need to be encoded as SHORT BINARY RULES in agent prompts, not as long philosophical passages that get compacted away.

---

### Intervention 4: "WHY IS THE WIDTH SO NARROW ON ALL OF THESE"

**What happened:** After audits completed and fixes were underway (or being reviewed), the user noticed that ALL 6 AD pages had the same width constraint problem (860px max-width on 1440px viewport = 40% wasted space). The user had to explicitly call this out.

**What should have happened automatically:** The audit reports DID identify this. AD-003's report flagged it as LW-3 ("Content Area Too Narrow for 1440px Viewport") with 2-auditor concordance. AD-006's report flagged it as MF-005. AD-002's report flagged it as F-004. AD-004's report noted it wasn't challenged. The lead should have synthesized these individual page-level findings into a SYSTEMIC finding across all 6 pages and proposed the width change proactively.

**Time cost:** ~15-20 minutes (user frustration, explanation, redirect).

**Root cause:** LEAD FAILURE — Synthesis Gap. The lead had 6 audit reports each mentioning the width issue and failed to synthesize them into a systemic "all pages need wider containers" action. This is exactly the pattern the PA-STAGE-SYNTHESIS step was designed to catch, but it either wasn't run or wasn't run with enough rigor.

---

### Intervention 5: "Please fix everything here especially the width constraints"

**What happened:** The user had to explicitly request fixes. The plan was audit-only (Phase 1A-1E), with fix teams deferred. But the user expected fixes to be proposed proactively after the audits revealed clear problems.

**What should have happened automatically:** After audit completion, the lead should have (a) presented a prioritized fix list synthesized from all 6 reports, and (b) asked whether to proceed with fixes or defer. Instead, the lead apparently stopped at audit completion and waited for user direction.

**Time cost:** ~10-15 minutes.

**Root cause:** PLAN RIGIDITY overriding judgment. The plan explicitly says "Fix team deferred (audit-only pass)" (line 9). The lead followed the plan literally rather than using judgment. When 4 of 6 pages have WOULD-NOT-SHIP or DO-NOT-SHIP verdicts, the appropriate response is to propose fixing, not to wait for instructions. The plan should have included a "fix-proposal gate" that triggers when verdicts are severe.

---

### Intervention 6: Stale Team Cleanup

**What happened:** The user had to intervene to clean up stale agent teams that were lingering after their work was complete. This suggests shutdown/cleanup procedures were not being followed.

**What should have happened automatically:** The plan specifies "Completion: Shutdown all agents -> TeamDelete -> Record verdict." The lead should have been systematically shutting down teams after each audit.

**Time cost:** ~5-10 minutes.

**Root cause:** PROCESS GAP. The shutdown sequence was in the plan but either not enforced or skipped when the lead was managing multiple concerns simultaneously.

---

### Intervention 7: "Expand widths on things that look too constrained"

**What happened:** Even after the width fix was applied, the user had to provide additional guidance about expanding widths on elements that still looked constrained. This suggests the fixers applied the 860px->1100px change mechanically without visually verifying that all constrained elements were addressed.

**What should have happened automatically:** The SKILL-v2 EMBEDDED MODE (Q1-Q3 visual judgment before declaring done) should have caught this. If fixers had screenshotted at 1440px after their width change and answered "Is any text uncomfortable to read?" they would have seen remaining constraint issues.

**Time cost:** ~10-15 minutes.

**Root cause:** SKILL GAP. The EMBEDDED MODE visual judgment check was not included in the fixer agent prompts, or was included but not enforced. The fix reports show soul compliance verification but no visual judgment Q1-Q3 answers.

---

## B. Agent Failure Modes

### B1. Agents That Failed to Use Playwright

| Page | Agent | What Happened |
|------|-------|---------------|
| AD-004 | Auditor Alpha (first attempt) | Fell back to source-code analysis. Produced findings from HTML reading, no screenshots. |
| AD-004 | Auditor Beta (first attempt) | Same — source-code-only findings, no Playwright. |
| AD-003 | Unknown (first attempt) | Likely similar issue — required redo. |
| AD-005 | Auditor B (Readability+Responsiveness) | Failed to produce findings after 2 attempts. Only a partial cold look at 1440px exists. Coverage gap documented in AD-005 report Section 11. |

**Pattern:** 4 of approximately 30+ auditor instances failed at the Playwright level. Failure rate: ~13%. This is consistent with prior team lessons (OD audit: "only 2/13 visual workers got actual Playwright access; rest fell back to source-code analysis").

### B2. Agents That Produced Source-Code-Only Findings

The AD-003 report notes Beta had "MINOR CONTAMINATION" — "Beta references 'DOM analysis,' 'accessibility tree,' 'element position analysis,' and mentions '~249px column widths' and '~812px wide' grid container measurements. These are programmatic observations, not pure perceptual ones."

However, the report correctly notes that Alpha's clean perceptual observations independently confirm the same findings, so no findings were invalidated.

**Pattern:** Even when agents DO use Playwright, some supplement with programmatic DOM inspection (browser_evaluate, accessibility snapshots) rather than purely perceptual screenshot analysis. The plan's language restriction ("may NOT contain: px, rem, em, %...") is the right defense but is a SOFT gate (noted in contamination report, not rejected).

### B3. Agents That Used Technical CSS Language

All 6 audit reports contain contamination check sections. Results:

| Page | Alpha | Beta | Adversarial |
|------|-------|------|-------------|
| AD-001 | CLEAN | CLEAN | N/A (Standard) |
| AD-002 | CLEAN | CLEAN | N/A (Standard) |
| AD-003 | CLEAN | MINOR CONTAMINATION | N/A (Standard) |
| AD-004 | CLEAN | CLEAN | N/A (Standard) |
| AD-005 | CLEAN (all 4) | CLEAN | ACCEPTABLE |
| AD-006 | CLEAN (all 4) | CLEAN | ACCEPTABLE |

**Pattern:** Contamination was low. The plan's anti-pattern warnings and language restrictions were largely effective. The Standalone mode (AD-005, AD-006) had the best contamination profiles, likely because the prompts were longer and more explicit.

### B4. Agents That Failed to Write Files

AD-005 Auditor B is the clearest case — "Failed to produce findings after 2 attempts." This is the known failure mode from prior teams: "Workers spawned by captains via Task tool frequently complete without writing files — THE critical failure mode."

All other agents wrote their files successfully. The "CRITICAL: You MUST write your output file using the Write tool" instruction in the plan appears to have been largely effective.

### B5. Playwright Contention Artifacts

AD-001's report documents a suspected artifact: "WNS-01 Scroll-Triggered Navigation Hijack" was flagged by Alpha as CRITICAL but not observed by Beta. The synthesizer correctly identified this as a possible "contention artifact" — one agent's Playwright navigation being misattributed to page JavaScript.

**Recommendation:** This validates the plan's sub-wave stagger strategy (offset agent launches by 10-30 seconds) but shows it's not sufficient. Single-agent sequential Playwright access (one auditor finishes before the next starts) would eliminate this class of false positive entirely, at the cost of longer wall time.

---

## C. Lead Failure Modes

### C1. Failed to Synthesize Systemic Patterns Proactively

The most significant lead failure. Six audit reports each independently flagged:
- Width too narrow (860px): AD-001 LW-02/LW-04, AD-002 F-004, AD-003 LW-3, AD-004 (not challenged), AD-005 (not explicitly), AD-006 MF-005
- No visual ending: AD-001 LW-01/CBB-02, AD-002 F-001 (empty void), AD-003 LW-4, AD-004 LW-4, AD-005 LW-3, AD-006 MF-004
- Dead space: All 6 pages
- Responsive collapse issues at 768px: AD-001 LW-04, AD-002 F-005, AD-003 WNS-2, AD-004 WNS-1, AD-005 LW-2, AD-006 MF-002

The lead should have, after the third audit, recognized these as SYSTEMIC patterns and escalated proactively rather than waiting for all 6 to complete and then requiring user intervention.

### C2. Followed Plan Literally When Judgment Was Needed

The plan said "Fix team deferred (audit-only pass)." When audits returned DO-NOT-SHIP verdicts (AD-002, AD-006), the lead should have proposed immediate fixes rather than mechanically following the plan's deferral instruction. The user's intervention ("Please fix everything here especially the width constraints") was the direct consequence.

### C3. Did Not Run PA-STAGE-SYNTHESIS Proactively Enough

The plan includes a PA-STAGE-SYNTHESIS step after all 6 AD audits. This step should have produced the systemic pattern identification. Either it wasn't run, or it was run but the lead didn't present the results clearly enough for the systemic width/footer/deadspace pattern to drive proactive action.

### C4. Stale Team Management

Teams were not being cleaned up promptly, requiring user intervention. The plan's "Completion: Shutdown all agents -> TeamDelete -> Record verdict" sequence was not being followed consistently.

---

## D. Skill Gap Analysis

### D1. Missing Binary Gates

The plan has 3 gates (Lock Sheet file exists, findings files exist + contamination check, AUDIT-REPORT exists). None of these gates check the MOST FUNDAMENTAL requirement: **did the agent actually use Playwright to look at the page?**

**Missing Gate: Screenshot Existence Check**
```
GATE 1.5 (after Wave 1):
FOR EACH auditor:
  COUNT files in {output-path}/screenshots/*.png
  IF count == 0: REJECT. Respawn agent. Do not proceed.
  IF count < 3: WARNING. Agent may have done partial work.
```

This single binary gate would have prevented Interventions 1 and 2 entirely.

**Missing Gate: Minimum Screenshot Count Per Viewport**
```
GATE 1.6 (after Wave 1):
FOR EACH auditor:
  COUNT screenshots matching "1440-*": must be >= 3
  COUNT screenshots matching "768-*": must be >= 3
  IF either count < 3: REJECT.
```

**Missing Gate: Fix Proposal Trigger**
```
GATE 4 (after all audits):
  COUNT pages with WOULD-NOT-SHIP findings: N
  COUNT pages with DO-NOT-SHIP verdict: M
  IF N > 0 OR M > 0:
    TRIGGER: Lead MUST present prioritized fix list to user.
    Do not wait for user to ask.
```

### D2. Missing Validation Steps That Should Be Automatic

| What's Missing | What It Would Catch | Priority |
|----------------|---------------------|----------|
| Screenshot count check after each auditor | Source-code-only auditors (Interventions 1, 2) | CRITICAL |
| Systemic pattern detection after audit 3+ | Width/footer/deadspace patterns (Intervention 4) | HIGH |
| Visual judgment Q1-Q3 in fixer prompts | Post-fix visual issues (Intervention 7) | HIGH |
| Automated team cleanup timer | Stale teams (Intervention 6) | MEDIUM |
| Cold look verdict tallying across pages | Systemic SHIP/NO-SHIP patterns | MEDIUM |

### D3. Language That Wasn't Strong Enough

The plan's Anti-Pattern section lists 23 failure modes in a reference table format. This is comprehensive but NOT executable. Agents read the table, nod, and then proceed to violate AP-01 (Analytical Escape) because the table is informational, not enforcement.

**What would be stronger:**

Instead of:
```
AP-01 | Analytical Escape | First action after screenshot is reading source code
```

Use:
```
HARD BLOCK: After taking a screenshot, your NEXT action MUST be writing
a Cold Look reaction. If your next action is Read, Grep, or any file
operation, you have VIOLATED the protocol. The audit is INVALID.
```

The difference: the first is a description of failure. The second is a binary instruction with a consequence.

Similarly, instead of:
```
LANGUAGE RESTRICTIONS (HARD BLOCK):
Your answers may NOT contain: px, rem, em, %, hex (#), rgb...
```

This IS already strong language, and contamination was low. But it should be paired with:
```
SELF-CHECK: Before writing your findings file, search your own text
for: px, rem, %, #[0-9a-f], rgb, rgba, border-radius, padding, margin.
If ANY match: rewrite the offending sentence in perceptual language.
```

### D4. Skill File Confusion

The project has **12 skill files** across the perceptual-deepening directory:
- SKILL.md (v1 — reference-matching, 770 lines)
- SKILL-v2.md (ship-readiness, 625 lines)
- TURBO-ORCHESTRATOR.md (v1 orchestration, 594 lines)
- QUICK-INVOKE.md (invocation shortcuts, 274 lines)
- PERCEPTUAL-DEEPENING-PROTOCOL.md (philosophy, 100+ lines)
- EMBEDDED-PROMPT.md (copy-paste block, 113 lines)
- CLAUDE.md (skill registration)
- prompts/ZONE-SUB-AGENTS.md
- tests/visual-audit.spec.ts
- templates/SOUL-DISCOVERIES-TEMPLATE.md
- templates/PERCEPTUAL-AUDIT-LOG-TEMPLATE.md
- scripts/setup.sh

**The problem:** None of these skill files contain the AD perceptual audit protocol that was actually executed. The 1,314-line plan (`fizzy-sparking-popcorn.md`) is a Claude Code plan file, not part of the skill directory. The skill files describe v1 (reference-matching) and v2 (ship-readiness) protocols that are different from the 28-question, 4-auditor, Lock Sheet, sovereignty-classification protocol that was actually used.

**This means:** The next time someone invokes `/ship` or `/judge`, they will get the v2 skill protocol (Cold Look + 6 zones + 3 iterations), NOT the AD protocol (Cold Look + 28 questions + 4 specialized auditors + Lock Sheet + Weaver + contamination check + sovereignty classification). The actual most-validated protocol exists only in a one-time plan file.

---

## E. Time Cost Analysis

### Total Wall Time Estimate

| Phase | Estimated Wall Time |
|-------|-------------------|
| Pre-flight (HTTP server, directories, file verification) | ~15 min |
| Lock Sheet generation | ~15 min |
| AD-006 Standalone audit (6 agents) | ~65 min |
| AD-003 Standalone audit (6 agents) — first attempt | ~65 min |
| AD-005 Standalone audit (6 agents) | ~65 min |
| AD-001 Standard audit (3 agents) | ~35 min |
| AD-002 Standard audit (3 agents) | ~35 min |
| AD-004 Standard audit (3 agents) — first attempt | ~35 min |
| **Redo: AD-003 + AD-004** | **~60 min** |
| **User interventions (7 total)** | **~90-120 min** |
| Fix execution (6 fixers) | ~45 min |
| Fix verification | ~20 min |
| Miscellaneous (team management, context, user discussion) | ~60 min |
| **TOTAL** | **~8.5-10 hours** |

### Rework vs Original Work

| Category | Time | % of Total |
|----------|------|-----------|
| First-pass audit work (6 pages, all agents) | ~315 min (~5.25 hrs) | ~55% |
| Rework (redone audits, respawned agents) | ~60 min (~1 hr) | ~10% |
| User interventions and redirects | ~90-120 min (~1.5-2 hrs) | ~15-20% |
| Fix execution | ~65 min (~1 hr) | ~10% |
| Overhead (team management, context) | ~60 min (~1 hr) | ~10% |

### Time Saveable With Proper Gates

| Gate | Interventions Prevented | Time Saved |
|------|-------------------------|-----------|
| Screenshot existence check (Gate 1.5) | Interventions 1, 2 | ~60-90 min |
| Systemic pattern synthesis after audit 3 | Intervention 4 | ~15-20 min |
| Fix-proposal trigger (Gate 4) | Intervention 5 | ~10-15 min |
| Automatic team cleanup | Intervention 6 | ~5-10 min |
| Embedded visual judgment in fixer prompts | Intervention 7 | ~10-15 min |
| Principle encoding as binary rules | Intervention 3 | ~20-30 min |
| **TOTAL SAVEABLE** | **6 of 7 interventions** | **~120-180 min (~2-3 hrs)** |

This represents a 25-30% wall time reduction and near-elimination of user intervention.

---

## F. What Worked Well (Do Not Change)

Despite the process failures, significant elements worked correctly:

### F1. Audit Report Quality Was Excellent

All 6 final AUDIT-REPORT.md files are genuinely high-quality documents. They include:
- Structured contamination checks
- Soul compliance verification (0 violations across all 6)
- Lock Sheet cross-referencing
- Deduplicated findings with concordance tracking
- Cold Look concordance analysis
- Sovereignty classification
- Multi-viewport comparison
- Positive findings preservation

This protocol structure should be retained in any skill redesign.

### F2. Lock Sheet Caching Worked

Generating one Lock Sheet and reusing it across all 6 AD audits saved ~5 redundant agent spawns and ~30 minutes of file reading. This optimization was correctly designed and correctly executed.

### F3. Cold Look Protocol Produced Genuine First Impressions

Across all 6 audits, Cold Look reactions aligned well with full analysis results. The protocol's temporal ordering (perception before analysis) was maintained. No evidence of AP-22 (Post-Lock Revision) was found.

### F4. Weaver/Synthesizer Role Was Effective

The Weaver-Synthesizer agents produced disciplined synthesis: they deduced, ranked, and cross-referenced without adding their own perceptual opinions. This role should be retained.

### F5. Dual-Auditor Concordance Tracking Was Valuable

Having 2 (Standard) or 4 (Standalone) auditors per page and tracking agreement levels produced genuinely useful confidence signals. Findings with 2-auditor concordance were consistently the most important and actionable.

### F6. Fix Execution Was Clean

All 6 fix reports show disciplined, soul-compliant changes. Zero soul violations introduced across all fixes. The per-file ownership model worked perfectly (each fixer owned their HTML file exclusively). Fixers correctly distinguished structural fixes from deferred design concerns.

### F7. Verification Was Thorough

The Fix Verification Report tested all 6 pages at 1440px and 768px, verified content width, dead space removal, visual ending, responsive behavior, and soul compliance. All passed.

---

## G. Recommended Changes for Skill Redesign

### G1. Add Screenshot Existence Gate (CRITICAL)

This is the highest-leverage single change. After every auditor completes:
```
BINARY CHECK: Does {output-path}/screenshots/ contain >= 6 PNG files?
  YES → proceed to synthesis
  NO → REJECT. Respawn agent with explicit "YOU MUST TAKE SCREENSHOTS" emphasis.
```

### G2. Encode Principles as Binary Rules, Not Philosophy

Replace the 85-line "SKILL MINDSET" section with 5 binary rules:
1. Your FIRST action after navigating to the URL MUST be `browser_take_screenshot`. No exceptions.
2. Your FIRST written output after a screenshot MUST be a Cold Look reaction. Not a file read. Not a grep.
3. Your findings file may NOT contain CSS property names. Self-check before writing.
4. You may NOT read any source file (.html, .css, .js) before completing ALL screenshots and Cold Looks.
5. If Playwright is unavailable after 3 retries, STOP and report failure. Do NOT fall back to source reading.

### G3. Add Systemic Pattern Detection

After the 3rd audit completes, the lead MUST:
1. Read all completed AUDIT-REPORT.md files
2. Identify any finding that appears in 2+ reports
3. Flag as SYSTEMIC and present to user
4. Propose systemic fix (not per-page fix)

### G4. Add Fix-Proposal Trigger

When audit verdicts include DO-NOT-SHIP or WOULD-NOT-SHIP:
```
TRIGGER: Lead MUST immediately present:
  1. Prioritized fix list (systemic first, then per-page)
  2. Estimated fix time
  3. "Proceed with fixes?" prompt to user
Do NOT wait for user to ask.
```

### G5. Include Visual Judgment Q1-Q3 in All Fixer Prompts

Every fixer prompt should end with:
```
BEFORE DECLARING DONE:
1. Navigate to the fixed page at 1440px
2. Take a screenshot
3. Answer: Q1 "What bothers me?" Q2 "Any text uncomfortable?" Q3 "Would a designer ship this?"
4. If any answer reveals a problem, fix it before writing your report.
```

### G6. Consolidate Skill Files

The 12 skill files should be consolidated into 3:
1. **SKILL-v3.md** — The unified perceptual audit protocol (combining the best of the 1,314-line plan with v2's ship-readiness framing)
2. **AGENT-PROMPTS.md** — All agent prompt templates (auditor A-D, adversarial, weaver, fixer, verifier) with binary gates embedded
3. **QUICK-REFERENCE.md** — Invocation commands, anti-pattern list, gate checklist

### G7. Sequential Playwright Access for Auditors

Within a single page's audit, auditors should use Playwright sequentially, not in parallel sub-waves. The 10-30 second stagger is insufficient to prevent contention artifacts (AD-001 WNS-01 false positive). The time cost of sequential access (~15 minutes longer per Standalone audit) is less than the cost of investigating and resolving contention artifacts.

---

## H. The Meta-Lesson

The perceptual audit process suffered from the same failure mode it was designed to detect: **the system passed every structural check while the experience was broken.**

The plan was structurally complete: 28 questions, 23 anti-patterns, 7 enrichment layers, 11 verification checklist items. But the experience of executing it required 7 human interventions because the plan was optimized for COMPREHENSIVENESS (covering every possible case) rather than ROBUSTNESS (preventing the 3-4 failure modes that actually occur).

The parallel to the design audit is exact. The AD pages had correct CSS tokens, correct fonts, correct soul compliance, correct border categories — and 40% of the viewport was wasted cream margins. The audit plan had correct question taxonomy, correct anti-pattern catalog, correct sovereignty classification — and agents still fell back to source-code analysis because no binary gate checked for screenshots.

**The fix is the same in both cases: validate what matters most, not what's most comprehensive.**

---

*Analysis complete. 7 interventions mapped. 4 agent failure modes cataloged. 4 lead failure modes identified. 7 recommended changes proposed. Output written to `explorations/axis/_perceptual-audit/_skill-evolution/failure-analysis.md`.*
