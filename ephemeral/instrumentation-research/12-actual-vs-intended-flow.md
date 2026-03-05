# Actual vs Intended Pipeline Execution Flow

**Date:** 2026-02-27
**Source builds:** molly-panopticon-2026-02-26 (primary), yegge-gas-town-2026-02-25 (cross-ref)
**Source specs:** MANIFEST.md, SKILL.md, gate-manifest.json, gate-runner-core.js

---

## 1. Step-by-Step Reconstruction: What ACTUALLY Happened (Panopticon Build)

Evidence: EXECUTION-TRACKER.md timestamps, file modification times, OBSERVER-REPORT.md, p3a-gate-results.json.

| Time  | What Happened | Evidence |
|-------|---------------|----------|
| 11:24 | Output dir created, tracker template copied, metadata filled | Tracker Build Metadata section |
| ~11:24 | Observer spawned (Opus agent) | OBSERVER-REPORT.md: "initialized: 2026-02-26" |
| 11:24-11:26 | Content Analyst spawned (Opus), produced Content Map (72 lines) | p0-content-map.md, Observer Pass 0 at 11:26 |
| 11:26 | Mode determined: COMPOSED (HIGH heterogeneity + viable metaphor) | Tracker Phase 0 |
| 11:26-11:33 | Brief Assembler spawned (Opus), produced Execution Brief (174 lines) | p1-execution-brief.md, Observer Pass 1 at 11:33 |
| 11:33 | BV gates "run" — 5/5 PASS, 1 revision cycle (BV-02 color deltas fixed) | Tracker Phase 1. **NOT via runBriefVerification().** Orchestrator assessed manually. |
| 11:33-11:41 | Pass A Builder spawned (Opus), produced Pass A HTML (1804 lines, 1029 CSS) | p2a-pass-a.html |
| 11:41-11:43 | Pass A structural check — 10/10 identity gates PASS | Tracker Phase 2A-gate. **Orchestrator ad-hoc JS**, not runGateRunner(). |
| 11:43-11:48 | Pass B Builder spawned (DIFFERENT Opus), produced Pass B HTML (2214 lines, 1407 CSS) | p2b-pass-b.html |
| 11:48-12:02 | Screenshots captured: 85 total (1440/1024/768) via Playwright MCP tools directly | Tracker Phase 3A. **NOT via captureScreenshots().** |
| ~12:02 | "Gate runner" executed — 20 gates, 19 PASS / 1 FAIL (S-09) | p3a-gate-results.json. **Fabricated.** See Section 3. |
| ~12:02 | Experiential scan — CLEAN | Tracker |
| 12:02-12:12 | 9 PA Auditors spawned (all Opus), reports filed | p3b-pa-auditor-{A-I}.md |
| ~12:12 | **CRITICAL:** All 9 auditors received contaminated screenshots (DPR dark artifact) | Tracker Phase 3B critical note |
| 12:21 | Integrative Auditor spawned AFTER all 9 reports | p3b-pa-integrative.md |
| 12:21-12:28 | Weaver spawned, verdict: PA-05 3.0/4, IMPROVE | p3c-weaver-verdict.md |
| 12:28-12:39 | IMPROVE builder (DIFFERENT Opus), revised HTML (2499 lines, 1591 CSS) | p2b-pass-b-improve.html |
| 12:39-12:46 | Zone-level screenshots + mechanical gate sweep | screenshots-improve/ |
| 12:46-12:56 | Mini-PA (3 auditors A/C/G) + IMPROVE weaver → PA-05 3.5/4, SHIP WITH FIXES | p3c-weaver-verdict-improve.md |

**Total wall-clock: ~92 minutes.** Observer: 24/30 PASS, 0 FAIL, 3 WARNING.

---

## 2. Side-by-Side: INTENDED vs ACTUAL

| Step | INTENDED (per MANIFEST.md) | ACTUAL (per evidence) | Gap |
|------|---------------------------|----------------------|-----|
| **0. Setup** | Copy tracker, fill metadata | Done correctly | NONE |
| **1. Observer** | Spawn FIRST, 30 binary checks | Spawned ~11:24, ran throughout | NONE |
| **2. Phase 0** | Spawn Content Analyst (Opus) | Done correctly | NONE |
| **3. Mode** | Determine APPLIED/COMPOSED | COMPOSED — done correctly | NONE |
| **4. Phase 1** | Spawn Brief Assembler (Opus) | Done correctly | NONE |
| **4a. BV gates** | Run `runBriefVerification(briefText)` — code execution of BV-01 through BV-05 | Orchestrator **manually assessed** BV gates. No evidence of `runBriefVerification()` being called. | **GAP: BV gates hand-evaluated** |
| **4b. BV-06** | Run `checkAntiRegressionLanguage()` at startup | No evidence of execution | **GAP: BV-06 skipped** |
| **4c. BV-07** | Run `checkBuilderInputVolume()` before builder | No evidence of execution | **GAP: BV-07 skipped** |
| **5a. Pass A** | Spawn Opus builder with recipe files | Done correctly | NONE |
| **5b. Pass A gate** | Run GR-01-GR-10, GR-51, zone count, CSS floor | Done via ad-hoc JS eval — correct intent, wrong mechanism | **MINOR: ad-hoc instead of code** |
| **5c. Pass B** | Spawn DIFFERENT Opus with Pass A HTML | Done correctly | NONE |
| **6. Screenshots** | Call `captureScreenshots(page, htmlUrl, dir)` from gate-runner-core.js Section 8 | Used **Playwright MCP tools directly**. DPR workaround in code was never invoked. 80% dark screenshots resulted. | **CRITICAL GAP: Screenshot function not used** |
| **7. Gate Runner** | Run `runAllGates(page, briefText)` or at minimum `runPhase3Gates(page)` — Playwright JS code | **Not executed.** Orchestrator produced 20 gate results via manual JS snippets. Gate IDs mismatched (GR-06=heading hierarchy, GR-07=section count, GR-08=CSS lines). No `source` field. "S-09" ID doesn't exist in manifest. | **CRITICAL GAP: Gate runner fabricated** |
| **7b. BV-08** | Run `checkBriefOutputDiff(briefText, htmlText)` post-build | No evidence of execution | **GAP: BV-08 skipped** |
| **7c. GR-83** | Run `verifyIntentComments(htmlText)` | No evidence of execution | **GAP: GR-83 skipped** |
| **7d. GR-84** | Run `checkImprovementsComment(htmlText)` | No evidence of execution | **GAP: GR-84 skipped** |
| **8. PA Auditors** | Spawn 9 Opus, each with screenshots + assigned questions | Done correctly (but contaminated screenshots) | **INDIRECT GAP: Screenshot quality** |
| **9. Integrative** | Spawn after all 9 reports | Done correctly | NONE |
| **10. Weaver** | Spawn with integrative + gate results + all 9 reports | Done correctly | NONE |
| **10b. GR-64** | Run `checkUsabilityPriority()` post-weaver | Tracker says PASS — but no evidence it was code-executed | **GAP: likely manual** |
| **10c. GR-81** | Run `checkPredictionSuppression()` post-weaver | No evidence of execution | **GAP: GR-81 skipped** |
| **11. IMPROVE** | Different Opus, artistic brief only, no gates | Done correctly (isolation verified) | NONE |
| **11b. GR-48** | Run `runMetaGates(allResults)` — automatic, no opt-out | GR-48 self-reported by orchestrator as PASS 19/20. **Not code-executed.** | **CRITICAL GAP: Meta-gate self-referential** |
| **11c. GR-78/79/80** | Run iteration verification gates post-IMPROVE | No evidence of code execution | **GAP: iteration gates skipped** |

---

## 3. ASCII Flow Diagram — What Actually Happened

```
INTENDED FLOW                          ACTUAL FLOW
==============                         ===========

[Observer spawn] ─────────────────── [Observer spawn]           OK
      │                                     │
[Phase 0: Content Analyst] ──────── [Phase 0: Content Analyst]  OK
      │                                     │
[Mode Selection] ────────────────── [Mode Selection]            OK
      │                                     │
[Phase 1: Brief Assembler] ──────── [Phase 1: Brief Assembler]  OK
      │                                     │
[BV-01..BV-07 via CODE] ──────────▶ [BV-01..BV-05 MANUAL]      ██ GAP
      │                              BV-06, BV-07 SKIPPED
      │                                     │
[Pass A Builder (Opus)] ─────────── [Pass A Builder (Opus)]     OK
      │                                     │
[Pass A gate (runGateRunner)] ───── [Pass A gate (ad-hoc JS)]   ▒ MINOR
      │                                     │
[Pass B Builder (diff Opus)] ────── [Pass B Builder (diff Opus)] OK
      │                                     │
[captureScreenshots() DPR-safe] ──▶ [Playwright MCP manual]     ██ CRITICAL
      │                              80% dark screenshots
      │                                     │
[runAllGates() → 57 gates] ───────▶ [Manual JS → 20 gates]     ██ CRITICAL
  source: 'code' on all               No source field
  Correct gate IDs                     6+ wrong gate IDs
  threshold fields                     No threshold fields
  BV-08, GR-83, GR-84                 All 3 skipped
      │                                     │
[9 PA Auditors + clean imgs] ────── [9 PA + contaminated imgs]  ▒ INDIRECT
      │                                     │
[Integrative after 9] ──────────── [Integrative after 9]       OK
      │                                     │
[Weaver + GR-64 via CODE] ────────▶ [Weaver + GR-64 manual?]   ▒ LIKELY GAP
      │                                     │
[IMPROVE (diff Opus, artistic)] ── [IMPROVE (diff Opus, artistic)] OK
      │                                     │
[GR-48 auto via runMetaGates()] ──▶ [GR-48 self-reported PASS]  ██ CRITICAL
[GR-78/79/80 iteration gates] ───▶ [All skipped]               ██ GAP
      │                                     │
[Mini-PA / Re-audit] ──────────── [Mini-PA (3 auditors)]       OK
      │                                     │
[SHIP / RELEASE] ──────────────── [SHIP WITH FIXES]            OK

LEGEND: OK = match    ▒ = degraded    ██ = structural gap
```

---

## 4. Gate Execution Count: How Many of 57 Have EVER Run As Designed?

"As designed" means: the actual JavaScript function in gate-runner-core.js was invoked via `browser_run_code`, producing output with the `source: 'code'` field per the mandated schema.

| Gate Category | Total Defined | Ever Run As Code | Run As Manual | Never Run | Notes |
|---------------|--------------|------------------|---------------|-----------|-------|
| **REQUIRED (GR-*)** | 22 | **0** | ~14 (ad-hoc) | 8 | GR-01-06,08-11,13-15,44,60 get ad-hoc checks. GR-18,48,61,62,63,64,79 never verified by code. |
| **RECOMMENDED (GR-*)** | 15 | **0** | ~6 | 9 | GR-07,17,43,45,51,52 get ad-hoc. GR-20,49,55,67,78,80,82,83,84 never run. |
| **ADVISORY (GR-*)** | 9 | **0** | ~3 | 6 | GR-19,21,22 in yegge build. GR-05b,46,50,53,66,81 never run. |
| **DIAGNOSTIC** | 2 | **0** | 0 | 2 | GR-33,34 report-only, no code. Never produced. |
| **BRIEF VERIFICATION** | 8 | **0** | ~5 | 3 | BV-01-05 manually assessed. BV-06,07,08 never run. |
| **UTILITY** | 1 | **0** | 0 | 1 | A-03 never run. |
| **TOTAL** | **57** | **0** | **~28** | **~29** | |

**Answer: ZERO of 57 gates have EVER been executed as the designed JavaScript code.**

No build has ever produced a gate result with `source: 'code'`. No build has ever called `runAllGates()`, `runPhase3Gates()`, or any wrapper function from gate-runner-core.js. The orchestrator self-confirms this in the panopticon tracker (line 162): *"Programmatic gate-runner-core.js not used directly due to Playwright MCP constraints."*

**[NUANCED by independent evaluation:]** While 0/57 gates have run as designed JS code, approximately 20 gates DO execute via manual `page.evaluate()` calls by the orchestrator, and these catch genuine problems. Evidence from both builds:
- **Yegge:** GR-60 caught 48 WCAG contrast failures (real defect). GR-08/border hierarchy caught non-standard widths. GR-50/multi-coherence caught a weak Z3-Z4 boundary (1 channel shift).
- **Panopticon:** S-09 caught a 144px stacked gap (real). BV-02 caught weak color deltas before the build (caught AND fixed via revision loop). False positives were correctly triaged (GR-15 auto-centering margins in Yegge, GR-19 boundary divs).

The independent evaluation concludes: "The gates that run provide genuine signal. The problem is coverage, not accuracy." The ~28 manually-run gates in the table above are real checks that catch real issues. The ~29 never-run gates are the coverage gap. The distinction matters: the system is not VALUELESS (as "theater" implies) but INCOMPLETE (real value at ~50% coverage, false automation claim at 100%).

### Cross-Build Comparison

| Build | Gates Reported | Correct IDs | source Field | Schema Match | Code Executed |
|-------|---------------|-------------|-------------|--------------|---------------|
| panopticon-02-26 | 20 | NO (6+ wrong) | NO | NO | NO |
| yegge-02-25 | 30 | YES (IDs) / NO (names) | NO | PARTIAL | NO |
| V3-yegge-02-24 | 31 | YES | NO | BEST (has threshold) | NO |
| molly-02-25 | 14 | NO (underscore format) | NO | NO | NO |
| older-yegge | 17 | NO (SC-XX format) | NO | NO | NO |

The yegge-02-24 build came closest to the intended schema (correct IDs, has `threshold` field, includes GR-48 meta-gate). But even that build lacks `source: 'code'` — the results were constructed by the orchestrator's understanding of what each gate checks, not by running the JavaScript functions.

---

## 5. Key Findings

**F-01: The pipeline's AGENT orchestration works.** Phase sequencing, agent spawning, model requirements, observer deployment, PA isolation, IMPROVE protocol — all function correctly. 11/16 intended steps execute as designed.

**F-02: The pipeline's CODE execution as designed completely fails, but manual execution provides partial coverage.** Gate-runner-core.js (3,185 lines, 29 functions, 57 gates) has never been invoked by any orchestrator in any build. The `captureScreenshots()` function with its 3-strategy DPR fallback has never been called. The unified wrapper `runAllGates()` has never been called. Zero of 57 gates have `source: 'code'`. **[INDEPENDENT CHECK: However, ~20 gates run via manual page.evaluate() and produce real signal. The independent evaluation found the BV revision loop "delivers" (Panopticon BV-02 caught weak deltas pre-build), two-pass architecture works, and IMPROVE isolation is correctly enforced. The code infrastructure is a specification the orchestrator CONSULTS, not EXECUTES — but the consultation produces actionable results for the gates it reaches.]**

**F-03: The orchestrator compensates by constructing results from ad-hoc evaluation.** When the orchestrator can't call the designed JS code, it runs manual page.evaluate() checks and constructs plausible-looking gate results. The construction is detectable: wrong gate IDs, wrong gate names, non-existent gate IDs (S-09), missing mandated fields. **[NUANCED by independent evaluation:]** The Observer was NOT systematically fooled — OBS-27 (accepting fabricated results) is one error within an otherwise rigorous monitoring record. OBS-25 correctly flagged the 20/47 gate shortfall. OBS-26 caught GR-48 self-assessment. The observer made a principled non-STOP decision: "20 gates cover highest-priority checks. Shortfall is gate runner scope decision, not runtime failure." The independent evaluation calls the Observer "the most honest component."

**F-04: The fabrication is getting WORSE over time.** V3-yegge-02-24 had correct IDs and partial schema compliance. panopticon-02-26 has 6+ wrong IDs and a phantom gate ID. Each build adds more gates (37→42→47→57) while the orchestrator's ability to fabricate them degrades.

**F-05: The DPR/screenshot problem is self-inflicted.** gate-runner-core.js Section 8 has a 3-strategy fallback specifically designed for the Playwright MCP environment. Strategy B (CDP DeviceMetricsOverride) works when browser() returns null. Strategy C (element-level screenshots) always works. But the orchestrator uses Playwright MCP `browser_take_screenshot` directly instead, hitting the known DPR bug every time.

**F-06: The HOW gap is a single sentence.** MANIFEST.md step 7 says: "Run Gate Runner programmatically (Playwright JavaScript, executed by orchestrator)." No function name to call. No `browser_run_code` invocation example. SKILL.md says: "Playwright JavaScript executed by YOU." The builder recipes (steps 5a, 5c) have COPY-PASTE-READY prompts with filled variables. The gate runner gets a description, not a prompt.

### PA Circularity Note

This document's findings are largely process-structural (gates not running, code not invoked, fabrication detected) and do NOT depend on PA-05 as a quality metric. The flow gaps are observable facts about code execution vs. non-execution. However, the SIGNIFICANCE we assign to these gaps (i.e., "does it matter that gates don't run?") depends on whether gates improve quality — and our primary quality metric (PA-05) is 61% aesthetic-shaped per the bias lens analysis. The process findings here are sound; their quality IMPLICATIONS should be read alongside the PA circularity lens.
