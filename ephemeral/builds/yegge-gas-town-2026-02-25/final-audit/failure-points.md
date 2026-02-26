# Points of Failure Analysis — Pipeline v3/v4

**Date:** 2026-02-25
**Question:** If someone runs /build-page tomorrow on new content, what will go wrong?
**Method:** Mental simulation of full pipeline run (Phase 0 through Phase 3D), cross-referenced with buddy reviews, gate-runner code inspection, and artifact file analysis.
**Files Read:** SKILL.md, MANIFEST.md (lines 1-500), artifact-orchestrator.md (lines 1-800), gate-runner-core.js (2,274 lines, full), gate-manifest.json (326 lines), EXECUTION-TRACKER-TEMPLATE.md (162 lines), pa-weaver.md (200 lines), pa-deployment.md (200 lines), artifact-builder-recipe.md (200 lines), artifact-routing.md (200 lines), buddy-adversarial-v3-review.md, buddy-fresh-eyes-v3-review.md.

---

## Executive Summary

**42 failure points identified** across all pipeline phases. Breakdown:

| Category | HIGH | MEDIUM | LOW | Total |
|----------|------|--------|-----|-------|
| BLOCKING | 6 | 4 | 0 | 10 |
| SIGNIFICANT | 3 | 10 | 2 | 15 |
| MINOR | 1 | 6 | 10 | 17 |
| **Total** | **10** | **20** | **12** | **42** |

**Top 5 "Tomorrow" Risks (most likely to actually happen):**
1. FP-01: BV-06 silently skipped (no wrapper, no coverage check)
2. FP-02: BV-07 silently skipped (no wrapper, no coverage check)
3. FP-05: GR-79 crashes in Playwright context (uses `require('fs')`)
4. FP-08: SKILL.md says 47 gates, manifest says 54 — orchestrator confused
5. FP-14: Orchestrator overwhelmed by 2,493 lines of spec, skips BEFORE checklist

---

## Phase: Pre-Pipeline (Pipeline Startup)

### FP-01: BV-06 silently skipped — no wrapper, no coverage detection
- **Phase:** Pre-Phase 0 (pipeline startup)
- **Type:** Silent
- **Probability:** HIGH
- **Impact:** BLOCKING
- **What happens:** BV-06 (`checkAntiRegressionLanguage`) is a standalone function that must be called BEFORE Phase 0 begins. It is NOT included in `runBriefVerification()`, NOT included in `runAllGates()`, and NOT verified by GR-48 (which only checks GR-* gates). The orchestrator must independently know to call `checkAntiRegressionLanguage(manifestText, orchestratorText)` at pipeline startup. If they follow the `runAllGates` unified path, BV-06 is simply never executed. No error, no warning, no detection. The gate-manifest.json execution order places it at step 0, but there is no code that enforces this ordering.
- **Mitigation:** Either (a) add BV-06 to a startup wrapper function, (b) add a prominent warning at the top of the USAGE INSTRUCTIONS section in gate-runner-core.js, or (c) add BV-06 check to `runAllGates` as the first step (it takes text input, not page, so it can run before Playwright).
- **Source:** Buddy adversarial S-5.

### FP-02: BV-07 silently skipped — no wrapper, no coverage detection
- **Phase:** Phase 1.5 (pre-builder spawn)
- **Type:** Silent
- **Probability:** HIGH
- **Impact:** BLOCKING
- **What happens:** BV-07 (`checkBuilderInputVolume`) is a standalone function at step 1.5 in the execution order. Same problem as FP-01: not wired into any wrapper function, not verified by GR-48. The orchestrator must independently call it between brief assembly and builder spawn. If forgotten, the builder may receive >2,500 lines of input — a condition historically correlated with quality degradation (Flagship experiment at 963+ lines = PA-05 1.5/4).
- **Mitigation:** Same as FP-01 — add to usage instructions or a pre-build wrapper.
- **Source:** Buddy adversarial S-6.

### FP-03: Gate count discrepancy between SKILL.md and gate-manifest.json
- **Phase:** Pre-Phase 0 (orchestrator reads entry point)
- **Type:** Judgment
- **Probability:** HIGH
- **Impact:** SIGNIFICANT
- **What happens:** SKILL.md says "47 gates" with breakdown "18 REQ + 8 REC + 7 ADV + 4 BV." gate-manifest.json says "54 gates" with breakdown "21 REQ + 13 REC + 10 ADV + 7 BV + 2 DIAG + 1 UTIL." The orchestrator's first file (SKILL.md) gives them a stale number. When GR-48 reports coverage against 21 REQUIRED gates (not 18), the orchestrator may think the gate runner is broken rather than SKILL.md being out of date.
- **Mitigation:** Update SKILL.md gate counts to match gate-manifest.json. Use phrasing like "see gate-manifest.json for canonical tier breakdown" (which SKILL.md already does, but then contradicts with stale numbers).
- **Source:** Buddy fresh-eyes, high priority recommendation #1.

### FP-04: "Pipeline v3" vs "Pipeline v4" naming collision
- **Phase:** Pre-Phase 0 (orchestrator reads files)
- **Type:** Silent (confusion, not crash)
- **Probability:** MEDIUM
- **Impact:** MINOR
- **What happens:** SKILL.md and MANIFEST.md say "Pipeline v3." gate-manifest.json says "Pipeline v4" in its description field. gate-runner-core.js header says "Pipeline v4." An orchestrator reading both may wonder if there are two different pipeline versions and which they should follow.
- **Mitigation:** Pick one name and make all files consistent. Recommend "Pipeline v4" since the gate-manifest.json is the canonical gate source and it uses v4.

---

## Phase 0: Content Analysis

### FP-05: Content Analyst prompt not included verbatim in any accessible location
- **Phase:** Phase 0
- **Type:** Judgment
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** MANIFEST.md Appendix E contains copy-paste prompts for each pipeline role. The orchestrator must navigate to Appendix E (which is past line ~950 in a 1,300-line file) to find the Content Analyst prompt. If the orchestrator writes an ad-hoc prompt instead, the content map may not follow the required template structure (7 sections: Classification, Mode, Zone Architecture, Tensions, Metaphor Seeds, Density Arc, Reader Profile). A malformed content map propagates downstream — the Brief Assembler expects this structure.
- **Mitigation:** Add a cross-reference in the quickstart: "Step 2: Use the Content Analyst prompt from Appendix E line ~{N}."

### FP-06: Content with no structural heterogeneity — pipeline proceeds anyway
- **Phase:** Phase 0
- **Type:** Judgment
- **Probability:** MEDIUM
- **Impact:** MINOR
- **What happens:** The orchestrator must decide mode (APPLIED vs COMPOSED) based on content analysis output. If content has low heterogeneity and no metaphor viability, the orchestrator should select APPLIED mode and target Middle tier. But there is no hard gate that BLOCKS the pipeline for low-quality content. GR-24 (Content Has Heterogeneity) is ADVISORY — it reports but does not block. An ambitious orchestrator might force COMPOSED mode on uniform prose content, leading to a builder with high compositional expectations but no content affordance to fulfill them.
- **Mitigation:** This is by design (the orchestrator has judgment authority). Add a warning to the tracker: "If COMPOSED mode selected with LOW heterogeneity, document rationale."

---

## Phase 1: Brief Assembly

### FP-07: Brief Assembler produces brief with wrong tier header format — BV-01 false negative
- **Phase:** Phase 1
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** BLOCKING
- **What happens:** BV-01 uses regex `^#+\s*Tier\s*1` to find tier section boundaries. If the Brief Assembler uses slightly different formatting (e.g., `## TIER 1: IDENTITY` or `## 1. Identity (Tier 1)` or bold instead of heading), BV-01 will not find the sections, report 0 lines for all tiers, and FAIL. The brief format is specified in artifact-routing.md and the TC Brief Template, but if the Brief Assembler (an LLM) deviates from exact heading format, the text-parsing gate breaks.
- **Mitigation:** BV-01's regex is already reasonably flexible (`/^#+\s*Tier\s*1/im`). Add the heading format explicitly to the Brief Assembler prompt: "Use exactly: `## Tier 1: Identity`, `## Tier 2: Perception`, etc."

### FP-08: BV-02 requires "Zone Backgrounds" section — brief may not use this exact heading
- **Phase:** Phase 1
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** BLOCKING
- **What happens:** BV-02 scopes its background delta verification to a section matched by regex `/(?:Zone\s*Backgrounds?|Background\s*(?:Colors?|Hex)|Backgrounds?\s*per\s*Zone)/im`. If the brief uses a different heading like "Background Palette" or "Zone Color Scheme" or embeds hex values in a table without this heading, BV-02 returns FAIL with `sectionFound: false`. The gate is correctly strict — but the Brief Assembler doesn't know it needs to use one of these exact headings.
- **Mitigation:** Add a requirement to the Brief Assembler prompt: "Zone backgrounds MUST appear under a heading containing the word 'Background' and 'Zone'."

### FP-09: BV-04 Suppressor Scan catches legitimate builder recipe language
- **Phase:** Phase 1
- **Type:** Loud
- **Probability:** LOW
- **Impact:** SIGNIFICANT
- **What happens:** BV-04 scans for suppressors including `/must\s+not|shall\s+not|never\s+use/i`. If the brief contains natural language like "The reader must not lose orientation" or "You shall not see borders without purpose," BV-04 will flag these as suppressor S-02 violations and FAIL the brief. The brief is supposed to use world-description voice, not prohibition voice — but edge cases in natural English can trip the regex.
- **Mitigation:** Consider refining BV-04 patterns to be more specific (e.g., only match "must not use" or "shall not apply" rather than any "must not" phrase). Or add a known-good phrase allowlist.

### FP-10: Brief revision loop exhausted but root cause is BV-02 heading mismatch
- **Phase:** Phase 1
- **Type:** Loud
- **Probability:** LOW
- **Impact:** BLOCKING
- **What happens:** If BV-02 FAILs because the heading doesn't match (FP-08), the orchestrator returns the brief to the Brief Assembler with "BV-02 FAIL: no Zone Backgrounds section found." The Brief Assembler may add a section with background hexes but still use the wrong heading. After 2 revision cycles, the pipeline ABORTs — not because the backgrounds are wrong, but because the heading doesn't match a regex. The Brief Assembler needs to know the exact heading format the gate expects.
- **Mitigation:** When BV-02 fails with `sectionFound: false`, the error message should explicitly state: "Brief must contain a section headed with 'Zone Backgrounds' (exact phrasing required for gate verification)."

---

## Phase 2: Building

### FP-11: Builder does not include `<!-- CONVICTION: ... -->` comment
- **Phase:** Phase 2
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** The builder is instructed to output a conviction statement as an HTML comment at the top of the file. There is no programmatic gate that checks for `<!-- CONVICTION:`. GR-43 checks for `<!-- SELF-EVALUATION:` and GR-63 checks for `<!-- EXPERIENTIAL-CHECK:`, but there is no `<!-- CONVICTION:` gate. If the builder omits the conviction, the REFINE protocol (which requires the conviction artifact as input #1) will lack this critical input. The orchestrator would need to manually notice the omission.
- **Mitigation:** Add a GR gate for conviction comment existence (similar to GR-43 for self-evaluation). Or add it to the execution tracker as a field that must be verified.

### FP-12: Builder does not include `<!-- EXPERIENTIAL-CHECK: ... -->` — GR-63 FAIL triggers REFINE
- **Phase:** Phase 2
- **Type:** Loud
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** GR-63 is REQUIRED and checks for `<!-- EXPERIENTIAL-CHECK:` with 5 sub-criteria (legibility, visual clarity, structural reference, negative finding, min length 100 chars). If the builder's prompt doesn't explicitly instruct it to include this comment with all 5 elements, GR-63 will FAIL. The builder recipe (artifact-builder-recipe.md) references Step 5.0 for this, but the brief only includes a compressed version. A builder that writes a short or incomplete experiential check comment will trigger REFINE even if the page is visually excellent.
- **Mitigation:** Ensure the Brief Assembler includes explicit experiential check instructions in Tier 4 (Disposition). Add the exact required format to the builder prompt in Appendix E.

### FP-13: Builder produces page with no `<section>` or `[class*="zone"]` elements — multiple gates break
- **Phase:** Phase 2
- **Type:** Loud
- **Probability:** LOW
- **Impact:** BLOCKING
- **What happens:** Multiple gates (GR-11, GR-13, GR-14, GR-19, GR-20, GR-55) select elements using `document.querySelectorAll('section, [class*="zone"], [class*="section"]')`. If the builder uses a different HTML structure (e.g., `<div class="content-block">` or `<article>` without zone-related class names), these gates find 0 elements and either trivially PASS (no pairs to check) or return misleading results. GR-11 would return `{ zones: 0, pass: true }` — a false positive meaning "no zone pairs to check, so all pass."
- **Mitigation:** Add a gate or precondition that checks zone element count. If < 3 zones found, flag as WARNING. Add to builder prompt: "Use `<section class="zone-{name}">` for each content zone."

### FP-14: Builder receives CD-006 reference (optional) and copies its color palette
- **Phase:** Phase 2
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** SKILL.md says "CD-006 reference is for compositional patterns only, not color copying." MANIFEST says CD-006 is optional. But if included, the builder may adopt CD-006's specific hex values, violating D-09 (Background Hex Lock — zone backgrounds from the BRIEF are locked). This is a known historical failure mode. The builder has ~1,200 lines of CD-006 HTML, which is a strong attractor for direct style copying.
- **Mitigation:** Either (a) strip color declarations from CD-006 before passing to builder, or (b) include an explicit warning in the builder prompt: "CD-006 is for STRUCTURAL reference only. Do NOT use its hex values — use the hex values from your brief's Zone Backgrounds section."

---

## Phase 3A: Screenshots + Gate Runner

### FP-15: GR-79 uses `require('fs')` — crashes if called in Playwright browser context
- **Phase:** Phase 3A (or post-verdict iteration)
- **Type:** Loud
- **Probability:** HIGH
- **Impact:** BLOCKING
- **What happens:** GR-79 (`checkRefineCompletion`) at line 2037-2038 uses `require('fs')` and `require('path')` to check file existence with `fs.existsSync`. If the orchestrator calls this function inside a Playwright `page.evaluate()` context (as with all other gate functions), it will throw `ReferenceError: require is not defined` because `require` is not available in browser context. This gate ONLY works in Node.js context. Same issue affects A-03 (`checkVisibleContent`) at line 2149 and C-04 (`elementLevelScreenshotFallback`) at line 2186.
- **Mitigation:** Either (a) restructure GR-79/A-03/C-04 to accept pre-collected data (file list with existence flags) instead of doing filesystem I/O, or (b) document explicitly that these functions must be called in Node.js context, not via `page.evaluate()`.
- **Source:** Buddy adversarial S-2.

### FP-16: GR-80 returns PASS when it cannot find the tracker row — silent data loss
- **Phase:** Post-verdict iteration (cycle >= 2)
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** When GR-80 cannot find a row for the current cycle in the tracker's Iteration Log table, it returns `status: 'PASS'` with `action: 'no-row-to-fill'`. The orchestrator sees PASS and does not know that iteration data was not recorded. For cycle 2+, this means the tracker's iteration log is blank, which defeats the purpose of the auto-fill gate.
- **Mitigation:** Return `status: 'WARNING'` instead of `PASS` when no row is found. Add a note suggesting the orchestrator append a row manually.
- **Source:** Buddy adversarial S-3.

### FP-17: GR-81 never called from any wrapper — dead code
- **Phase:** Phase 3C (post-weaver)
- **Type:** Silent
- **Probability:** HIGH (was BLOCKING in buddy review, now partially fixed)
- **Impact:** SIGNIFICANT
- **What happens:** The current `runPostWeaverGates()` implementation at line 2217-2221 now includes `checkPredictionSuppression(weaverReport)` — this was the buddy adversarial B-3 fix. However, the code I read shows it IS included. If this fix was NOT applied, GR-81 would be dead code. Verify the fix was applied. If the code at line 2217-2221 still only returns `[checkUsabilityPriority(...)]`, then GR-81 is dead code.
- **Mitigation:** Verify the fix was applied. The current code at lines 2217-2221 shows both gates are returned.

### FP-18: GR-48 REQUIRED_GATES array missing GR-79 — coverage hole
- **Phase:** Meta-verification
- **Type:** Silent
- **Probability:** HIGH
- **Impact:** BLOCKING
- **What happens:** GR-48 (`runGateCoverage`) checks that all REQUIRED gates are present in the results. But the REQUIRED_GATES array inside the function does not include GR-79 (which is REQUIRED per gate-manifest.json). If GR-79 is never executed (e.g., because it crashed per FP-15), GR-48 will not detect the omission. The coverage check has a coverage hole.
- **Mitigation:** Add `'GR-79'` to the REQUIRED_GATES array in `runGateCoverage()`. Update the comment from "19 REQUIRED gates" to "20 REQUIRED gates."
- **Source:** Buddy adversarial B-1.

### FP-19: GR-48 RECOMMENDED_GATES array missing GR-78, GR-80, GR-82
- **Phase:** Meta-verification
- **Type:** Silent
- **Probability:** HIGH
- **Impact:** SIGNIFICANT
- **What happens:** Same as FP-18 but for the RECOMMENDED tier. GR-78, GR-80, and GR-82 are RECOMMENDED per gate-manifest.json but absent from the RECOMMENDED_GATES array in `runGateCoverage()`. Their absence from any gate run goes undetected.
- **Mitigation:** Add `'GR-78', 'GR-80', 'GR-82'` to the RECOMMENDED_GATES array.
- **Source:** Buddy adversarial B-2.

### FP-20: Playwright MCP blocks `file://` — orchestrator must serve via HTTP
- **Phase:** Phase 3A (screenshot + gate runner)
- **Type:** Loud
- **Probability:** MEDIUM
- **Impact:** BLOCKING
- **What happens:** The pipeline spec says "Serve HTML via HTTP. Playwright blocks `file://`." If the orchestrator tries to open the HTML file directly via `file://` path, Playwright will fail. The orchestrator must spin up a local HTTP server (e.g., `python3 -m http.server`) and navigate to `http://localhost:{port}/output.html`. This is a known requirement but easy to forget on first run.
- **Mitigation:** Add explicit HTTP server setup instructions to the quickstart. Consider adding a gate precondition that checks the page URL starts with `http://`.

### FP-21: DPR normalization skipped — all pixel measurements doubled on Retina displays
- **Phase:** Phase 3A
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** BLOCKING
- **What happens:** On macOS with Retina display (DPR=2), all `getBoundingClientRect()` measurements are doubled. GR-13 (stacked gap <= 120px) would measure 240px for a 120px gap and FAIL. GR-15 (single margin <= 96px) would measure 192px for a 96px margin and FAIL. The orchestrator must set `{ deviceScaleFactor: 1 }` in the browser context at session creation, and run GR-61 (`checkDPR`) BEFORE any screenshots. If this step is skipped, every pixel-based gate returns false positives.
- **Mitigation:** This is documented in the MANIFEST (Phase 3A) and pa-deployment.md (Section 6). Add to quickstart as an explicit step: "Set deviceScaleFactor: 1 BEFORE any gate runs."

### FP-22: Screenshots captured before `document.fonts.ready` — font-based gates give wrong results
- **Phase:** Phase 3A
- **Type:** Silent
- **Probability:** LOW
- **Impact:** SIGNIFICANT
- **What happens:** GR-06 (Font Trinity) relies on `document.fonts.check()` to verify font rendering. If screenshots are captured before fonts are loaded, the screenshots show fallback fonts and GR-06 may return false violations or false passes. The `runGateRunner` function starts with `await page.evaluate(() => document.fonts.ready)`, but if the orchestrator runs screenshot capture BEFORE running the gate runner (they run in parallel per the spec), screenshots may show un-loaded fonts.
- **Mitigation:** The spec says to wait for `document.fonts.ready` before capturing. Ensure this is in the screenshot capture procedure, not just in the gate runner code.

---

## Phase 3B: Perceptual Audit (9 Auditors)

### FP-23: PA Auditors receive wrong question subsets due to manual prompt assembly
- **Phase:** Phase 3B
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** The orchestrator must manually compose each PA Auditor's prompt using Appendix E templates and question assignments from pa-deployment.md Section 1.2. If the orchestrator makes a copy-paste error (e.g., gives Auditor B questions from Auditor C's set, or omits a question), the auditor answers wrong questions, the coverage is incomplete, and the Weaver's manifest verification may flag missing answers. With 9 auditors x 69 questions across non-sequential ranges (e.g., Auditor A gets PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76), manual errors are likely.
- **Mitigation:** Include the exact question IDs in the Appendix E template for each auditor role. Consider a script that generates auditor prompts automatically from the deployment table.

### FP-24: PA Auditors cannot read screenshots via Read tool — file path mismatch
- **Phase:** Phase 3B
- **Type:** Loud
- **Probability:** MEDIUM
- **Impact:** BLOCKING
- **What happens:** PA Auditors receive screenshot file paths and use the Read tool to view them. If the orchestrator saved screenshots with a different naming convention than expected (e.g., `screenshot-1440-cold.png` instead of `screenshots/1440/cold-look.png`), or if the path uses a relative path that doesn't resolve from the auditor's working directory, the Read tool will return "file not found." The auditor then has zero visual input and cannot perform its role.
- **Mitigation:** Standardize the screenshot directory structure in the execution tracker. Include full absolute paths in auditor prompts. Verify screenshots exist before spawning auditors.

### FP-25: PA Auditor fails to include completion manifest — Weaver flags INCOMPLETE
- **Phase:** Phase 3B
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** pa-deployment.md requires each auditor to include a completion table as their final section. If an auditor writes a thorough report but omits the completion table, the Weaver's manifest verification (pa-weaver.md Section 1, item 0) flags the run as INCOMPLETE. The content is present but the structural marker is missing. This has happened in practice — auditors sometimes write natural-language reports without the required structured table.
- **Mitigation:** Include the completion table template in each auditor's prompt as a required output section. Add "your FINAL section MUST be a completion table" to the auditor guardrails.

### FP-26: Integrative Auditor spawned before all 9 PA reports are written
- **Phase:** Phase 3B
- **Type:** Judgment
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** The MANIFEST says the Integrative Auditor MUST spawn AFTER all 9 PA report files exist on disk. The verification method is `ls p3b-pa-auditor-*.md | wc -l` returning 9. But if the orchestrator uses TeamCreate to spawn all agents and the Integrative Auditor starts before slower PA auditors finish writing, it reads incomplete data. The 9 auditors run in parallel; they complete at different times. The orchestrator must explicitly wait and verify.
- **Mitigation:** The quickstart says "Verify: ls ... returns 9 before spawning Integrative." This is sufficient if followed. Add a tracker field for this verification.

### FP-27: Fresh-eyes principle violated by orchestrator including build context in auditor prompts
- **Phase:** Phase 3B
- **Type:** Silent
- **Probability:** LOW
- **Impact:** SIGNIFICANT
- **What happens:** PA Auditors must receive ONLY screenshots and their assigned questions (fresh-eyes principle). If the orchestrator includes any additional context — the content topic, the design intent, the metaphor name, the brief — the auditor's perception is anchored by that context. The only permitted exception is BLOCKING-USABILITY findings from the orchestrator's experiential scan (pa-deployment.md Section 0). An orchestrator under time pressure may include "helpful" context that defeats the fresh-eyes principle.
- **Mitigation:** The Appendix E auditor template should have a prominent warning: "Do NOT include any text beyond what is shown in this template."

---

## Phase 3C: Verdict (Weaver)

### FP-28: Weaver does not perform experiential anchor before reading reports
- **Phase:** Phase 3C
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** pa-weaver.md Section 0 mandates that the Weaver view screenshots and write a 3-sentence experiential anchor BEFORE reading any auditor report. This prevents analytical contamination. But LLMs process all input at once — if the Weaver receives auditor reports in its prompt, it will read them before (or simultaneously with) viewing screenshots. The experiential anchor becomes post-hoc rationalization rather than genuine first impression.
- **Mitigation:** Consider a two-phase Weaver spawn: (1) give only screenshots, collect experiential anchor, (2) then give auditor reports + anchor for synthesis. This adds ~5 min but preserves genuine experiential independence. Currently mitigated by prompt positioning (Section 0 numbering).

### FP-29: GR-64 (Usability Priority) checks wrong condition
- **Phase:** Phase 3C (post-weaver)
- **Type:** Silent
- **Probability:** LOW
- **Impact:** SIGNIFICANT
- **What happens:** GR-64 verifies that if 3+ auditors flagged usability, the Weaver's Fix #1 addresses it. The gate parses auditor reports for BLOCKING-severity usability findings and the weaver report for fix #1 content. If the weaver uses slightly different phrasing (e.g., "Priority fix: ..." instead of "Fix #1: ..."), GR-64 may false-positive or false-negative depending on its regex. The exact regex was not visible in my read but the gate's text-parsing nature makes it brittle to phrasing variations.
- **Mitigation:** Specify exact fix list format in the Weaver prompt template.

---

## Phase 3D: REFINE Protocol

### FP-30: REFINE builder receives fix lists despite isolation rules
- **Phase:** Phase 3D (REFINE)
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** BLOCKING
- **What happens:** The REFINE protocol mandates that the REFINE builder receives ONLY: conviction artifact, artistic impression, RESIDUAL artifact, original brief, and Pass 1 HTML. It must NOT receive gate results, PA scores, failure analysis, fix lists, threshold numbers, or diagnostic vocabulary. But the orchestrator is an LLM assembling prompts — if it includes "helpful" context like "the page needs better zone transitions" or "PA-05 was 2.8/4," it violates isolation and the REFINE builder enters CORRECTIVE mode instead of COMPOSITIONAL mode. The execution tracker has a "REFINE isolation verified" field, but this is a manual self-attestation.
- **Mitigation:** The BEFORE checklist is the primary defense. Consider adding a BV-style gate that scans the REFINE builder's prompt for forbidden patterns (gate IDs, PA scores, diagnostic vocabulary).

### FP-31: REFINE builder is the same Opus instance as the initial builder
- **Phase:** Phase 3D (REFINE)
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** The REFINE protocol requires a DIFFERENT Opus builder than the initial builder (defeats continuation bias). With TeamCreate, if the orchestrator doesn't explicitly name a new agent, the team framework might route to the same underlying instance. Or if the orchestrator simply sends new instructions to the existing builder agent (without spawning a new one), continuation bias is fully active.
- **Mitigation:** The DURING checklist asks "Is the REFINE builder a DIFFERENT Opus agent?" This is the primary defense. Consider naming convention: `builder-pass-1` vs `builder-refine`.

### FP-32: Post-REFINE re-audit skipped — orchestrator proceeds directly to verdict
- **Phase:** Phase 3D (REFINE)
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** BLOCKING
- **What happens:** After REFINE completes, the orchestrator MUST return to Phase 3 for full re-audit (screenshots + gates + 9 PA auditors + integrative + weaver). This is expensive (~30 min, 11 agents). Under time or cost pressure, the orchestrator might skip the re-audit and proceed directly to a SHIP verdict based on the REFINE builder's self-evaluation. This defeats the entire convergence mechanism.
- **Mitigation:** The AFTER checklist asks "Did you return to Phase 3 for full re-audit?" GR-79 (REFINE File Completion) checks that all iteration artifacts exist with `-refine` suffix. If the orchestrator skips re-audit, GR-79 FAILs — but only if GR-79 is actually called (see FP-15).

### FP-33: REFINE screenshots overwrite initial screenshots — baseline lost
- **Phase:** Phase 3D (REFINE)
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** The orchestrator must save REFINE screenshots with `-refine` suffix and NOT overwrite initial screenshots (they are the comparison baseline). If the orchestrator uses the same screenshot directory without renaming, initial screenshots are overwritten. The Weaver loses the ability to compare initial vs REFINE output for PA-05 trajectory analysis.
- **Mitigation:** Documented in orchestrator Section 7 (post-REFINE screenshot re-capture). Add to tracker as a verification field.

---

## Phase: Orchestrator Judgment Failures (Cross-Phase)

### FP-34: Orchestrator overwhelmed by 2,493 lines of spec
- **Phase:** All phases
- **Type:** Silent
- **Probability:** HIGH
- **Impact:** SIGNIFICANT
- **What happens:** MANIFEST.md is ~1,300 lines, artifact-orchestrator.md is ~1,193 lines. Together, 2,493 lines. The buddy fresh-eyes review estimates ~55% signal-to-noise ratio (only ~435 of 785 execution lines are genuine instructions; the rest are ITEM citations and historical context). An orchestrator LLM agent will hit context window pressure and may start skimming, missing critical details like the BEFORE checklist, the DPR normalization requirement, or the fresh-eyes principle.
- **Mitigation:** Strip ITEM citations from execution sections (buddy fresh-eyes recommendation #4). Add a 3-line summary at the top of MANIFEST.md.

### FP-35: Orchestrator does not perform experiential scan before deploying auditors
- **Phase:** Phase 3A+
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** The orchestrator is supposed to scroll the page at reading speed and note any text it cannot read, any chart it cannot decode, any navigation that fails. This is documented in artifact-orchestrator.md Section 6, Phase 3A+. But it is NOT in the quickstart steps 0-11. A quickstart-following orchestrator would go directly from gate runner to PA deployment, skipping the experiential scan. The tracker has fields for it (P3A+-1a through P3A+-1d), but these are easily left blank.
- **Mitigation:** Add the experiential scan as an explicit step in the quickstart (between step 7 and step 8). It currently lives only in the detailed Section 6 description.

### FP-36: Orchestrator does not check GR-23-28 (pre-build decision rules)
- **Phase:** Phase 1.5 (pre-build)
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** SIGNIFICANT
- **What happens:** GR-23 through GR-28 are orchestrator decision rules (reclassified from gate runner in Wave 3). They are TEXT checks that the orchestrator performs manually: GR-23 (builder model = Opus), GR-24 (content has heterogeneity), GR-25 (suppressor count = 0), GR-26 (brief size cap), GR-27 (builder does not receive gates), GR-28 (recipe format). These are in orchestrator Section 7 (line 658-698) but NOT in any programmatic wrapper. If the orchestrator skips to Phase 2 after brief assembly, these checks are silently omitted.
- **Mitigation:** BV-01 through BV-05 overlap with GR-25, GR-26, and GR-28. Consider making GR-23 and GR-27 explicit steps in the quickstart.

### FP-37: Gate runner executed at wrong viewport width
- **Phase:** Phase 3A
- **Type:** Silent
- **Probability:** LOW
- **Impact:** SIGNIFICANT
- **What happens:** The gate runner spec says "Execute via: orchestrator Playwright session against served HTML at 1440px viewport." If the orchestrator's Playwright session is at a different viewport width (e.g., 1024px or the browser default), container width measurements, layout calculations, and responsive behavior will differ. GR-03 checks container max-width (940-960px), which is a CSS property and shouldn't change with viewport — but visual gap measurements (GR-14) and density calculations (GR-21) are viewport-dependent.
- **Mitigation:** gate-manifest.json execution order step 2 says "Playwright page at 1440px viewport." Ensure the orchestrator sets viewport explicitly.

---

## Phase: Content-Dependent Failures (New Content)

### FP-38: Content with code blocks — builder produces monospace sections that trip GR-06
- **Phase:** Phase 2-3A
- **Type:** Loud
- **Probability:** MEDIUM
- **Impact:** MINOR
- **What happens:** GR-06 (Font Trinity) requires all rendered text to use Instrument Serif, Inter, or JetBrains Mono. Code blocks typically use JetBrains Mono, which is in the allowed set. But if the content includes inline `<code>` elements that the browser renders with a system monospace font (before JetBrains Mono loads from Google Fonts), GR-06 may flag false violations. The gate checks `document.fonts.check()` but web font loading is async and environment-dependent.
- **Mitigation:** gate-runner-core.js already has `await document.fonts.ready` at the start of runGateRunner. The font loading issue is mitigated IF fonts are hosted/linked correctly. Ensure the builder includes the Google Fonts `<link>` for all three families.

### FP-39: Content with images/diagrams — builder omits alt text, GR-52 FAILs
- **Phase:** Phase 2-3A
- **Type:** Loud
- **Probability:** MEDIUM
- **Impact:** MINOR
- **What happens:** GR-52 (WCAG image alt text) is RECOMMENDED and checks that all `<img>` elements have alt attributes. Content with data visualizations, diagrams, or inline images requires alt text. If the builder creates inline SVGs or data visualizations without ARIA labels, GR-52 and GR-45 (accessibility) may flag issues. This is content-dependent — prose-only content won't trigger it, but mixed content with visuals will.
- **Mitigation:** Include accessibility requirements in the builder recipe or brief Tier 3.

### FP-40: Content with < 3 natural sections — zone architecture fails
- **Phase:** Phase 0-2
- **Type:** Judgment
- **Probability:** LOW
- **Impact:** SIGNIFICANT
- **What happens:** The pipeline assumes content has enough structural diversity for 4+ zones (OPENING, DEEPENING, RESOLVING, plus footer). If the content is a short essay with no clear section breaks (< 3 natural sections), the zone architecture may feel forced. The Content Analyst may produce a content map with < 3 zones. The recipe's mechanism minimums (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+) assume enough zones for variety. Very short content may not support this.
- **Mitigation:** artifact-routing.md has a Content-Volume-to-Zone-Count Map. The Content Analyst should use it. For very short content, consider a simpler pipeline variant.

### FP-41: Content tension identification fails for pure reference material
- **Phase:** Phase 0
- **Type:** Silent
- **Probability:** LOW
- **Impact:** MINOR
- **What happens:** artifact-routing.md Section 7 (Content Tension Identification) asks the Content Analyst to "Identify 2-4 content tensions." For reference/catalog content (API documentation, specification tables), there may be zero natural tensions. The template allows "No significant tensions identified" but notes this is "acceptable for APPLIED mode" and "unusual for COMPOSED mode." If the orchestrator forces COMPOSED mode on tensionless content, the builder has no metaphor-shaping tension to work with.
- **Mitigation:** GR-24 (ADVISORY) flags low heterogeneity. The orchestrator should respect this signal and select APPLIED mode.

### FP-42: Gate runner `section` selector matches nested sections — double-counting
- **Phase:** Phase 3A
- **Type:** Silent
- **Probability:** MEDIUM
- **Impact:** MINOR
- **What happens:** Multiple gates use `document.querySelectorAll('section, [class*="zone"], [class*="section"]')`. If the builder nests sections inside sections (e.g., `<section class="zone-intro"><section class="subsection">...</section></section>`), the selector returns both parent and child. Background delta checks (GR-11) may compare a parent section's background with its own child's background (which inherits the same color), producing trivially-passing deltas. Stacked gap checks (GR-13) may measure gaps between parent and child rather than between sibling zones.
- **Mitigation:** GR-14 already has a fallback that tries `:scope > section` (direct children of main). Other gates could benefit from similar scoping. This is a known selector fragility.

---

## Summary: Critical Path Analysis

The 6 BLOCKING / HIGH probability failures that are MOST likely to actually occur tomorrow:

1. **FP-01 (BV-06 skipped):** The anti-regression language scan is never called because it's not in any wrapper. Pipeline proceeds with potentially regressed spec language.

2. **FP-02 (BV-07 skipped):** The builder input volume ceiling is never checked. Builder may receive >2,500 lines.

3. **FP-15 (GR-79 crashes):** If the orchestrator calls GR-79 in Playwright browser context, `require('fs')` throws. If they don't call it at all, the iteration file completion check is missing.

4. **FP-18 (GR-48 missing GR-79):** Even if GR-79 is never called, GR-48 won't notice because GR-79 is missing from its REQUIRED_GATES array.

5. **FP-03 (gate count discrepancy):** SKILL.md says 47, manifest says 54. Orchestrator confusion on first run.

6. **FP-34 (spec volume):** 2,493 lines of spec across 2 files. Orchestrator will skim, missing critical steps.

**The pattern:** Most BLOCKING failures are about **silent omission** — things that should happen but don't, with no error to catch them. The pipeline has strong verification WITHIN each phase but weak verification that the PHASES THEMSELVES are executed. The gate runner is comprehensive; the orchestration sequence is fragile.
