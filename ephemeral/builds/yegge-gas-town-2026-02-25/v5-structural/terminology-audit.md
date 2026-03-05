# Terminology and Ideology Consistency Audit

**Date:** 2026-02-26
**Agent:** terminology-auditor (Opus)
**Task:** #5 — Verify terminology and ideology consistency across all operational files
**Scope:** All .md files in `ephemeral/va-extraction/` (excluding `_backup-pre-implementation/` and `_historical/`)

---

## Executive Summary

The v5 ideology implementation (convergence model, verdict rename, two-pass default, IMPROVEMENTS comment) was **PARTIALLY APPLIED**. The new terminology was successfully adopted in the files directly touched by implementation (pa-weaver.md, artifact-builder-recipe-compose.md, artifact-builder-recipe-polish.md, artifact-orchestrator.md section 0, pa-deployment.md), but **many files still use old terminology**, creating a dual-terminology state that will confuse agents. The convergence equation is consistent where it appears (2 files). The IMPROVEMENTS format has 3 incompatible variants. Mini-PA specs are consistent.

**Severity: 14 BLOCKING inconsistencies, 8 SIGNIFICANT, 11 MINOR.**

---

## 1. VERDICT TERMS

### 1.1 Old Terms vs New Terms Map

Design document specified: SHIP -> RELEASE, SHIP WITH FIXES -> POLISH, REFINE -> IMPROVE, REBUILD -> RETHINK.

| File | Modified by v5? | SHIP | SHIP WITH FIXES | REFINE | REBUILD | RELEASE | POLISH | IMPROVE | RETHINK | Status |
|------|-----------------|------|-----------------|--------|---------|---------|--------|---------|---------|--------|
| artifact-orchestrator.md | YES | 13 | 5 | 45 | 19 | 2 | 0 | 6 | 0 | **MIXED** |
| MANIFEST.md | YES | 22 | 12 | 35 | 36 | 1 | 0 | 5 | 0 | **MIXED** |
| pa-weaver.md | YES | 6 | 2 | 3 | 3 | 3 | 3 | 8 | 4 | **MIXED** |
| pa-deployment.md | YES | 0 | 0 | 3 | 1 | 0 | 0 | 8 | 2 | **MIXED** |
| artifact-builder-recipe-compose.md | YES (new file) | 0 | 0 | 2 | 0 | 2 | 0 | 2 | 0 | MIXED (minor) |
| artifact-builder-recipe-polish.md | YES (new file) | 1 | 0 | 2 | 0 | 0 | 3 | 0 | 0 | **MIXED** |
| artifact-builder-recipe.md | YES (redirect) | 0 | 0 | 1 | 0 | 2 | 1 | 2 | 0 | MIXED (minor) |
| EXECUTION-TRACKER-TEMPLATE.md | YES | 1 | 1 | 16 | 2 | 0 | 0 | 0 | 0 | **OLD ONLY** |
| gate-runner-spec.md | YES | 3 | 3 | 12 | 3 | 0 | 0 | 0 | 0 | **OLD ONLY** |
| d10-observer-protocol.md | YES | 1 | 1 | 21 | 0 | 0 | 0 | 0 | 0 | **OLD ONLY** |
| pa-questions.md | YES | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | OLD ONLY |
| pa-manifest.md | NO | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | OLD ONLY |
| artifact-routing.md | NO | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | (RELEASE = CRESCENDO+RELEASE pattern name, not verdict) |

### 1.2 Analysis

The v5 implementation adopted a **hybrid approach**: new terms were introduced in pa-weaver.md (the verdict-issuing file) and in the newly created recipe files, but old terms were NOT replaced in most files. This creates a situation where:

1. **pa-weaver.md** uses the new verdict table (RELEASE/POLISH/IMPROVE/RETHINK) -- this is the file the Weaver agent reads
2. **MANIFEST.md** uses BOTH old and new terms, e.g., line 43 says "SHIP / SHIP WITH FIXES / REFINE / REBUILD" while line 44 says "REFINE/IMPROVE (the standard path)"
3. **artifact-orchestrator.md** uses BOTH: new convergence language in Section 0, but old SHIP/REFINE/REBUILD throughout Sections 5-7
4. **EXECUTION-TRACKER-TEMPLATE.md** uses ONLY old terms (line 104: "SHIP / SHIP WITH FIXES / REFINE / REBUILD")
5. **gate-runner-spec.md** uses ONLY old terms (12 REFINE references, 0 IMPROVE)
6. **d10-observer-protocol.md** uses ONLY old terms (21 REFINE references, 0 IMPROVE)

### 1.3 Specific Conflict Points

**BLOCKING-01:** MANIFEST.md line 43 says verdict is "SHIP / SHIP WITH FIXES / REFINE / REBUILD" but pa-weaver.md line 273-276 issues RELEASE / POLISH / IMPROVE / RETHINK. The weaver will issue a verdict that the orchestrator does not recognize.

**BLOCKING-02:** MANIFEST.md line 44 uses "REFINE/IMPROVE" as though they are synonyms. But the design doc explicitly renames REFINE to IMPROVE. Using both creates ambiguity: is IMPROVE the new name for REFINE, or a distinct concept?

**BLOCKING-03:** EXECUTION-TRACKER-TEMPLATE.md line 104 expects "SHIP / SHIP WITH FIXES / REFINE / REBUILD" but the weaver will produce "RELEASE / POLISH / IMPROVE / RETHINK". The tracker form will not match the actual verdict.

**BLOCKING-04:** gate-runner-spec.md line 167 (GR-64) says "If weaver verdict is SHIP or SHIP WITH FIXES, downgrade to REFINE." The weaver will never issue "SHIP" — it issues "RELEASE". The gate logic will not match.

**BLOCKING-05:** d10-observer-protocol.md line 73-79 references "REFINE builder spawn", "REFINE builder is different agent", etc. The orchestrator following v5 ideology would call these "IMPROVE builder" actions. The observer will look for "REFINE" artifacts that are now named "IMPROVE".

**BLOCKING-06:** artifact-orchestrator.md Section 7 uses SHIP/REFINE/REBUILD (lines 461, 479, 487, 489) while Section 0 introduces IMPROVE terminology. The same file contradicts itself.

**BLOCKING-07:** artifact-builder-recipe-polish.md line 296 says "orchestrator MUST override SHIP to REFINE" — uses old terms when this file was newly created for v5.

### 1.4 Fixes Required

| # | File | Line | Old Text | New Text |
|---|------|------|----------|----------|
| F1 | MANIFEST.md | 43 | "SHIP / SHIP WITH FIXES / REFINE / REBUILD" | "RELEASE / POLISH / IMPROVE / RETHINK" |
| F2 | MANIFEST.md | 44 | "REFINE/IMPROVE (the standard path)" | "IMPROVE (the standard path)" |
| F3 | MANIFEST.md | 44 | "SHIP or SHIP WITH FIXES" (end of line) | "RELEASE or POLISH" |
| F4 | MANIFEST.md | All ~70 remaining instances | SHIP/REFINE/REBUILD throughout | RELEASE/IMPROVE/RETHINK |
| F5 | EXECUTION-TRACKER-TEMPLATE.md | 104 | "SHIP / SHIP WITH FIXES / REFINE / REBUILD" | "RELEASE / POLISH / IMPROVE / RETHINK" |
| F6 | EXECUTION-TRACKER-TEMPLATE.md | 110-137 | All "REFINE" references | "IMPROVE" |
| F7 | gate-runner-spec.md | 69, 167, 179 | SHIP/REFINE references | RELEASE/IMPROVE |
| F8 | d10-observer-protocol.md | 69-581 | All 21 "REFINE" references | "IMPROVE" |
| F9 | d10-observer-protocol.md | 405 | "SHIP, SHIP WITH FIXES, or HALT" | "RELEASE, POLISH, or HALT" |
| F10 | artifact-orchestrator.md | 461+ | SHIP/REFINE/REBUILD in Sections 5-7 | RELEASE/IMPROVE/RETHINK |
| F11 | artifact-builder-recipe-polish.md | 296 | "override SHIP to REFINE" | "override RELEASE to IMPROVE" |
| F12 | pa-manifest.md | 71 | "SHIP / SHIP WITH FIXES / REFINE / REBUILD" | "RELEASE / POLISH / IMPROVE / RETHINK" |
| F13 | pa-questions.md | (2 instances) | "SHIP" | "RELEASE" |
| F14 | artifact-builder-recipe-compose.md | (2 instances) | "REFINE" | "IMPROVE" |

**Estimated fix effort:** ~200 search-and-replace operations across 10 files. High risk of introducing errors if done manually — recommend a scripted approach with human review.

---

## 2. CONVERGENCE MODEL

### 2.1 Equation Locations

| File | Line | Equation Text | Matches Canonical? |
|------|------|--------------|-------------------|
| artifact-orchestrator.md | 25-26 | `Quality_0 = Agent Capability x Content Affordance x Spec Fidelity` / `Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)` | YES (canonical) |
| MANIFEST.md | 62-63 | `Quality_0 = Agent Capability x Content Affordance x Spec Fidelity` / `Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)` | YES (matches) |

**Note:** MANIFEST uses `x` (multiplication sign) while orchestrator uses `x` (letter x). Both files use `+` for the convergence term. Both use identical function names.

### 2.2 Stale References to Old Equation

| File | Line | Text | Status |
|------|------|------|--------|
| artifact-routing.md | 189 | "Quality = Agent Capability x Content Affordance x Spec Fidelity" | **STALE** — old equation without convergence term |
| classify-by-layer.md | 679 | Same old equation | STALE (but this is a classification artifact, not operational) |
| classify-by-agent.md | 284 | Same old equation | STALE (classification artifact) |
| unified-registry.md | 15 | Same old equation | STALE (classification artifact) |
| extract-d01-d03.md | 22, 1086 | Same old equation | OK — this is source extraction, not operational |

**SIGNIFICANT-01:** artifact-routing.md line 189 carries the old equation and is an operational file. If the routing table is read by agents, they'll see the old single-factor equation.

### 2.3 Supporting Text Consistency

The MANIFEST.md (line 66) has supporting text: "Pass 0 depends on inputs. Every subsequent pass adds the builder's creative ideas and the PA's perceptual findings... The convergence term is where quality grows." This matches the orchestrator's equivalent paragraph. **CONSISTENT.**

### 2.4 Verdict

Convergence equation is **CONSISTENT** between the two canonical locations. The supporting narrative text is consistent. Stale references exist in classification/extraction artifacts (acceptable) and one operational file (artifact-routing.md — fix needed).

---

## 3. IMPROVEMENTS COMMENT FORMAT

### 3.1 Format Variants Found

**Variant A — compose recipe (artifact-builder-recipe-compose.md, line 559-563):**
```
<!-- IMPROVEMENTS:
[D-XX] Zone/Element — specific change description | CONFIDENCE
[CATEGORY] Zone/Element — specific change description | CONFIDENCE
(minimum 5 items, at least 1 HIGH, at least 2 different tags)
-->
```
Format: `[TAG] Zone — description | CONFIDENCE`

**Variant B — polish recipe (artifact-builder-recipe-polish.md, line 287-291):**
```
<!-- IMPROVEMENTS:
1. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
2. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
... (5-10 items)
-->
```
Format: `N. Category | Zone | Change | Confidence`

**Variant C — MANIFEST Appendix E (MANIFEST.md, line 1220-1222):**
```
<!-- IMPROVEMENTS:
1. Category | Zone | Change | Confidence (LOW/MED/HIGH)
...
-->
```
Format: `N. Category | Zone | Change | Confidence` (matches Variant B)

### 3.2 Inconsistencies

**BLOCKING-08:** Variant A (compose recipe) uses `[TAG] Zone — description | CONFIDENCE` format while Variant B/C use `N. Category | Zone | Change | Confidence` format. These are structurally different:
- Variant A uses square bracket tags `[D-XX]` and em-dashes
- Variant B/C use numbered lists with pipe-delimited fields

The orchestrator (line 528) parses `<!-- IMPROVEMENTS: ... -->` looking for "HIGH and MEDIUM confidence" items. If builders produce Variant A format, the orchestrator needs to parse `| HIGH` at end of line. If they produce Variant B format, the orchestrator needs to parse `Confidence (HIGH)` as the 4th pipe-delimited field.

**BLOCKING-09:** The compose recipe (Variant A) says "minimum 5 items, at least 1 HIGH, at least 2 different tags" while the polish recipe (Variant B) says "5-10 items" with no minimum HIGH requirement. MANIFEST says "5-10 things" with the 3+ HIGH override rule.

**SIGNIFICANT-02:** artifact-orchestrator.md line 303 says builders produce "5-10 improvement ideas with confidence ratings" but does not specify which format variant.

### 3.3 IMPROVEMENT-IDEAS vs IMPROVEMENTS

**SIGNIFICANT-03:** MANIFEST.md line 45 references BOTH `<!-- IMPROVEMENT-IDEAS -->` and `<!-- IMPROVEMENTS: ... -->` as separate HTML comments. The recipes only define `<!-- IMPROVEMENTS: ... -->`. The `IMPROVEMENT-IDEAS` tag appears to be a legacy reference. Orchestrator line 535 also mentions "IMPROVEMENT-IDEAS and BUILDER-REFLECTION comments" — but the recipes do not define an `IMPROVEMENT-IDEAS` comment block.

### 3.4 Fixes Required

| # | File | Line | Old Text | New Text |
|---|------|------|----------|----------|
| F15 | artifact-builder-recipe-compose.md | 559-563 | Variant A format | Variant B format (numbered, pipe-delimited) to match polish recipe and MANIFEST |
| F16 | MANIFEST.md | 45 | "`<!-- IMPROVEMENT-IDEAS -->`" | Remove or clarify — this tag is undefined in recipes |
| F17 | artifact-orchestrator.md | 535 | "IMPROVEMENT-IDEAS and BUILDER-REFLECTION" | Align with actual recipe output tags |

---

## 4. MINI-PA SPECIFICATION

### 4.1 Cross-Reference Check

| Attribute | MANIFEST.md L203 | artifact-orchestrator.md L634 | pa-deployment.md S6 | Consistent? |
|-----------|------------------|-------------------------------|---------------------|-------------|
| Auditors | A, C, G | A, C, G | A, C, G | YES |
| Agent count | 3 auditors + 1 weaver = 4 | 3 auditors | 3 of 9 | YES (MANIFEST adds weaver) |
| Question count | 15 | 15 | 15 (5 per auditor) | YES |
| Viewport | 1 viewport | 1440px only | 1440px (1 viewport) | YES |
| Question assignment | Not specified | Not specified | Fully specified (lines 396-398) | CONSISTENT (detail level varies appropriately) |
| Escalation triggers | "See pa-deployment.md Section 6" | 4 triggers (lines 643-646) | 4 triggers (lines 435-438) | YES |

### 4.2 Minor Differences

**MINOR-01:** pa-deployment.md L382 says "Mode 2.5 is for REFINE/IMPROVE validation" (dual term) while pa-deployment.md L388 says "IMPROVE cycle validation" (new term only). Internal inconsistency within pa-deployment.md.

**MINOR-02:** pa-deployment.md L384 says "REBUILD/RETHINK assessment (always Mode 4)" — uses both old and new terms.

### 4.3 Verdict

Mini-PA specification is **CONSISTENT** across all three files. Auditors (A, C, G), question count (15), and viewport (1440px) match exactly. Minor terminology dual-use in pa-deployment.md (REFINE/IMPROVE, REBUILD/RETHINK) — see Section 1 for the broader terminology issue.

---

## 5. STOP vs CONTINUE SIGNAL RATIO

### 5.1 Per-File Counts

Prohibitive terms searched: MUST NOT, FAIL IF, NEVER, BLOCKING, PROHIBITED
Invitational terms searched: explore, discover, try, consider, might, experiment

| File | Prohibitive | Invitational | Ratio (P:I) | Assessment |
|------|-------------|-------------|-------------|------------|
| artifact-orchestrator.md | 21 | 10 | 2.1:1 | Moderate |
| artifact-builder-recipe-compose.md | 5 | 3 | 1.7:1 | **Good** |
| artifact-builder-recipe-polish.md | 1 | 2 | 0.5:1 | **Excellent** |
| MANIFEST.md | 21 | 7 | 3.0:1 | Moderate-high |
| pa-weaver.md | 6 | 3 | 2.0:1 | Moderate |
| pa-deployment.md | 9 | 2 | 4.5:1 | High |
| pa-questions.md | 4 | 2 | 2.0:1 | Moderate |
| EXECUTION-TRACKER-TEMPLATE.md | 1 | 0 | inf | N/A (template) |
| gate-runner-spec.md | 4 | 0 | inf | Expected (gate spec) |
| artifact-routing.md | 8 | 1 | 8.0:1 | High |
| artifact-tc-brief-template.md | 4 | 0 | inf | Expected (template) |
| d10-observer-protocol.md | 58 | 5 | 11.6:1 | **Very high** |
| artifact-builder-recipe.md | 6 | 3 | 2.0:1 | Moderate |

### 5.2 Analysis

The v5 ideology goal was to shift from prohibitive (stop-signal) to invitational (continue-signal) language. Results:

**SUCCESS:** The newly created builder recipes (compose: 1.7:1, polish: 0.5:1) have excellent signal ratios. The polish recipe has MORE invitational than prohibitive language — a strong v5 win.

**PARTIAL:** pa-weaver.md (2.0:1) is moderate, reflecting its dual role as both a creative synthesis tool and a verdict mechanism.

**UNCHANGED:** d10-observer-protocol.md (11.6:1) is heavily prohibitive. This is somewhat expected for an observer/compliance document, but 58 prohibitive terms vs 5 invitational is extreme.

**UNCHANGED:** artifact-routing.md (8.0:1) and pa-deployment.md (4.5:1) retain high prohibitive ratios.

### 5.3 Verdict

The v5 signal rebalancing was applied to builder-facing files (recipes) but NOT to infrastructure files (observer, routing, deployment). This is a defensible design choice IF the files are agent-segmented (builders only see recipes, not infrastructure). However, the orchestrator (2.1:1) and MANIFEST (3.0:1) are read by the orchestrator agent, who makes creative decisions about iteration — these could benefit from lower ratios.

---

## 6. TWO-PASS TERMINOLOGY

### 6.1 Term Usage Map

| Concept | Term in orchestrator | Term in recipes | Term in MANIFEST | Consistent? |
|---------|---------------------|-----------------|-----------------|-------------|
| First build pass | "Pass A" / "Pass 0" | "Pass A" | "Pass 0" / "initial build" | **INCONSISTENT** |
| Second build pass | "Pass B" | "Pass B (POLISH)" | "Pass 1" / "IMPROVE pass" | **INCONSISTENT** |
| Improvement iteration | "REFINE" / "IMPROVE" | "IMPROVE" | "REFINE" / "IMPROVE" | **INCONSISTENT** |

### 6.2 The Pass A/B vs Pass 0/1 Confusion

**BLOCKING-10:** The v5 implementation introduced a TWO-PASS architecture where Pass A (COMPOSE) and Pass B (POLISH) are the standard build. But the MANIFEST and orchestrator also use "Pass 0" and "Pass 1" terminology for the convergence model (initial build vs improvement iteration). These are DIFFERENT concepts:

- **Pass A / Pass B** = Two builder passes within a SINGLE build cycle (structure + refinement)
- **Pass 0 / Pass 1** = Convergence iterations (initial build cycle vs improvement cycle)

This means a full "standard" build has: Pass A (compose) + Pass B (polish) = Pass 0 complete. Then IMPROVE verdict triggers Pass 1, which is a THIRD builder pass.

**Evidence:**
- artifact-orchestrator.md line 284: "Pass A creates the structural foundation... Pass B deepens the refinement layer"
- artifact-orchestrator.md line 74: "DEFAULT: Two-pass convergence (BUILD + IMPROVE + RE-AUDIT)"
- pa-weaver.md line 275: "Pass 0 complete (standard two-pass default) OR PA-05 2.5-3.5 = IMPROVE"

**BLOCKING-11:** pa-weaver.md line 273 says "pass >= 1 OR builder_ideas == 0" for RELEASE. But "pass" here means convergence iteration (Pass 0/1), not builder pass (A/B). An orchestrator might confuse Pass B completion with "pass >= 1".

### 6.3 COMPOSE vs POLISH vs STRUCTURE vs REFINEMENT

| Term pair | Where used | Meaning |
|-----------|-----------|---------|
| COMPOSE / POLISH | Recipe file names, recipe headers | Builder pass A / pass B |
| Structure / Refinement | Orchestrator section headers (Phase 2A/2B) | Same as COMPOSE / POLISH |
| Pass A / Pass B | Orchestrator throughout | Same as COMPOSE / POLISH |
| BUILD / IMPROVE | Orchestrator line 74, MANIFEST line 71 | Convergence passes (not A/B) |

**SIGNIFICANT-04:** The terms COMPOSE/POLISH for builder passes overlap conceptually with the verdict term POLISH. "POLISH" means both "Pass B of the standard build" AND "a verdict meaning small mechanical fixes needed." An agent could be confused: "The verdict is POLISH — do I run Pass B again?"

### 6.4 Fixes Required

| # | File | Location | Issue | Fix |
|---|------|----------|-------|-----|
| F18 | MANIFEST.md | Throughout | Mixed Pass 0/1 and Pass A/B terminology | Standardize: "Build Cycle" = Pass A + Pass B. "Iteration" = convergence pass. Never use "Pass 0/1" for A/B or vice versa |
| F19 | artifact-orchestrator.md | Line 74 | "Two-pass convergence (BUILD + IMPROVE)" conflates with A/B two-pass | Change to "Convergence default (BUILD-CYCLE + PA + IMPROVE-CYCLE + PA)" |
| F20 | pa-weaver.md | Line 273 | "pass >= 1" is ambiguous | Change to "iteration >= 1" or "convergence_pass >= 1" |
| F21 | Verdict POLISH | All files | Overlaps with "Pass B (POLISH)" name | Consider renaming verdict to "TUNE" or renaming Pass B to "REFINE-PASS" |

---

## 7. ADDITIONAL INCONSISTENCIES

### 7.1 MANIFEST Quickstart vs Detailed Sections

**SIGNIFICANT-05:** MANIFEST.md line 43 (quickstart) says "SHIP / SHIP WITH FIXES / REFINE / REBUILD" but detailed sections use a mixture. The quickstart is the highest-visibility text — agents read it first.

### 7.2 Gate Runner JS vs Gate Runner Spec

**SIGNIFICANT-06:** gate-runner-core.js was modified on Feb 26 but gate-runner-spec.md still uses only old verdict terms. If the JS code checks for "RELEASE" but the spec documents "SHIP", there's a documentation gap.

### 7.3 MANIFEST Line Count Claims

**MINOR-03:** MANIFEST.md line 1036 says pa-deployment.md is "~442 lines" — actual line count is ~443. Minor but shows the line counts may be stale.

### 7.4 "SHIP WITH FIXES" Has No New-Term Equivalent in Some Files

**SIGNIFICANT-07:** The design document mapped SHIP WITH FIXES -> POLISH. But artifact-orchestrator.md line 487 still says "SHIP WITH FIXES" in the verdict override logic. The orchestrator has no concept of "POLISH" as a verdict.

### 7.5 Experiment Protocol Uses Old Terms

**MINOR-04:** experiment-protocol.md line 11 says "Verdict is SHIP, REFINE, or REBUILD (not ABORT/ERROR)" — uses old terms.

### 7.6 pa-weaver Uses "Refine agent" After Introducing IMPROVE

**SIGNIFICANT-08:** pa-weaver.md line 294 says "Refine agent NEVER sees gate scores" under the "5.2 IMPROVE Protocol" section. The section header uses IMPROVE but the body uses "Refine agent."

---

## 8. CROSS-REFERENCE TO CRACK DIMENSIONS

**D8 (Spec Ambiguity):** The dual-terminology state is exactly the kind of ambiguity D8 warns about. Agents receiving both old and new terms will have to guess which is authoritative. Verdict: D8 is **EXPOSED** by the incomplete terminology migration.

**D16 (Terminology Divergence):** This crack dimension was specifically about terms diverging across files. The current state is a textbook D16 violation — pa-weaver.md issues RELEASE/POLISH/IMPROVE/RETHINK but MANIFEST.md documents SHIP/SHIP WITH FIXES/REFINE/REBUILD.

---

## 9. SUMMARY OF ALL FIXES

### BLOCKING (14)

| ID | File | Issue | Fix |
|----|------|-------|-----|
| F1-F4 | MANIFEST.md | Old verdict terms throughout (~70 instances) | Replace SHIP->RELEASE, SHIP WITH FIXES->POLISH, REFINE->IMPROVE, REBUILD->RETHINK |
| F5-F6 | EXECUTION-TRACKER-TEMPLATE.md | Old verdict terms (17 instances) | Same replacements |
| F7 | gate-runner-spec.md | Old verdict terms in GR-64 and elsewhere (18 instances) | Same replacements |
| F8-F9 | d10-observer-protocol.md | Old verdict terms (22 instances) | Same replacements |
| F10 | artifact-orchestrator.md | Old verdict terms in Sections 5-7 (~50 instances) | Same replacements |
| F11 | artifact-builder-recipe-polish.md | Line 296: "SHIP to REFINE" | "RELEASE to IMPROVE" |
| F12 | pa-manifest.md | Old verdict terms (3 instances) | Same replacements |
| F15 | artifact-builder-recipe-compose.md | IMPROVEMENTS format differs from polish/MANIFEST | Standardize to `N. Category \| Zone \| Change \| Confidence` |
| F20 | pa-weaver.md | "pass >= 1" ambiguous with Pass A/B | Change to "iteration >= 1" |

### SIGNIFICANT (8)

| ID | File | Issue | Fix |
|----|------|-------|-----|
| F13 | pa-questions.md | Old "SHIP" (2 instances) | Replace with "RELEASE" |
| F14 | artifact-builder-recipe-compose.md | Old "REFINE" (2 instances) | Replace with "IMPROVE" |
| F16 | MANIFEST.md | References undefined `IMPROVEMENT-IDEAS` tag | Remove or define in recipes |
| F17 | artifact-orchestrator.md | References "IMPROVEMENT-IDEAS and BUILDER-REFLECTION" | Align with recipe output |
| F18 | MANIFEST.md | Mixed Pass 0/1 vs Pass A/B | Standardize terminology |
| F19 | artifact-orchestrator.md | "Two-pass convergence" conflates A/B with iterations | Disambiguate |
| S-01 | artifact-routing.md | Old equation on line 189 | Update or annotate as extraction source |
| S-08 | pa-weaver.md | "Refine agent" in IMPROVE section | Change to "IMPROVE agent" |

### MINOR (11)

| ID | File | Issue | Fix |
|----|------|-------|-----|
| M-01 | pa-deployment.md | "REFINE/IMPROVE" dual term on L382 | Pick one |
| M-02 | pa-deployment.md | "REBUILD/RETHINK" dual term on L384 | Pick one |
| M-03 | MANIFEST.md | Stale line count for pa-deployment.md | Update |
| M-04 | experiment-protocol.md | Old verdict terms | Update |
| M-05-M-11 | Various extraction/classification files | Old equation | Acceptable — source artifacts |

---

## 10. RISK ASSESSMENT

**If unfixed:** The Weaver (reading pa-weaver.md) will produce verdicts using RELEASE/POLISH/IMPROVE/RETHINK. The Orchestrator (reading artifact-orchestrator.md Sections 5-7 and MANIFEST.md) will look for SHIP/REFINE/REBUILD. The Observer (reading d10-observer-protocol.md) will look for "REFINE builder" artifacts. The Execution Tracker will have fields labeled "REFINE Phase" when the actual phase is "IMPROVE."

**Most likely failure mode:** Orchestrator receives "IMPROVE" verdict from Weaver but its decision tree checks for "REFINE." It falls through to an undefined branch. Depending on implementation, it may: (a) treat IMPROVE as an unknown verdict and HALT, (b) parse it as a text match against "REFINE" and fail, or (c) rely on PA-05 score thresholds regardless of verdict text (safe fallback).

**Recommended approach:** Complete the terminology migration as a single atomic change before the next pipeline run. Use a script to replace all instances with human review of each context.

---

*End of terminology audit. 14 BLOCKING + 8 SIGNIFICANT + 11 MINOR = 33 total findings.*
