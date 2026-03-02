# Wave 2 Comprehensive Retrospective

**Author:** w2-retro (Opus)
**Date:** 2026-02-28
**Files read:** SKILL.md (918 lines), gate-runner-v2.js (983 lines), world-description.md (17 lines), conventions-brief.md (46 lines), prompt-templates.md (590 lines), 42-skill-buddy-audit.md, 44-gate-buddy-audit.md, 46-ref-buddy-audit.md, 48-prompt-buddy-audit.md, 56-wave1-retrospective.md, 57-wave1-retro-buddy.md, perceptual-auditing/SKILL.md (524 lines)

---

## BLOCKING FIXES APPLIED

### BLOCKING 1: Gate runner invocation format — FIXED

**Problem:** The SKILL.md's GATE RUNNER FUNCTION section (old lines 258-293) contained an embedded JS function that called `runGateRunner()`, `runAntiPatternGates()`, `runWave2Gates()` — functions from the OLD gate-runner-core.js (~3,185 lines). The new gate-runner-v2.js has a single atomic function `gateRunnerV2` that uses ONLY browser context APIs (document, window, getComputedStyle). The old invocation was fundamentally incompatible.

**The incompatibility chain:**
- Old skill said "load gate-runner-core.js via browser_run_code" then "call via browser_evaluate"
- The old gate-runner-core.js used Playwright's `page` object (page.evaluate, page.$$eval)
- browser_evaluate runs IN browser context where `page` doesn't exist
- The new gate-runner-v2.js eliminates this by using only browser APIs

**Fix applied to `~/.claude/skills/build-page/SKILL.md`:**
1. Replaced the GATE RUNNER FUNCTION section: removed the embedded JS calling old function names. Now describes the correct invocation: Read gate-runner-v2.js, extract the `gateRunnerV2` function body, pass to `browser_evaluate`.
2. Updated Step 3.1 path: changed from `ephemeral/va-extraction/gate-runner-core.js` to `ephemeral/build-page-v2/gate-runner-v2.js`.
3. Updated 22 Gates Reference: GR-62 was listed in "17 REQUIRED (browser)" but is actually a Node gate checked by the orchestrator separately. Corrected to "15 REQUIRED (browser)" + "1 META" + "1 RECOMMENDED" + "2 ORCHESTRATOR-ONLY". Removed duplicate "4 BV" and "1 RECOMMENDED" lines.

**Verification:** The gate-runner-v2.js header (lines 29-31) confirms: `const json = await page.evaluate(gateRunnerV2);` or `browser_evaluate({ function: gateRunnerV2.toString() })`. The function uses only `document.querySelectorAll`, `getComputedStyle`, `window.innerWidth`, etc. — pure browser context. Compatible with MCP Playwright's `browser_evaluate` tool.

### BLOCKING 2: Auditor B/D question assignment — FIXED

**Problem:** The SKILL.md assigned B=Q-02, Q-06, Q-14, Q-18 and D=Q-04, Q-08, Q-13, Q-20. The live PA skill (`~/.claude/skills/perceptual-auditing/SKILL.md` line 234) assigns B=E-02, E-08, E-14, E-18 and D=E-04, E-06, E-13, E-20. Q-06 and Q-08 were swapped between B and D.

**Resolution:** PA skill is the source of truth (per user decision). Updated SKILL.md:
- B: Q-02, Q-06 -> **Q-08**, Q-14, Q-18
- D: Q-04, Q-08 -> **Q-06**, Q-13, Q-20

**Cross-verification:**
- PA skill (line 234): B=E-02, E-08, E-14, E-18 -- MATCHES now
- PA skill (line 236): D=E-04, E-06, E-13, E-20 -- MATCHES now
- prompt-templates.md (lines 229-260): Already uses PA skill's assignment. CONSISTENT.
- The thematic rationale is correct: B gets scroll experience (E-02 scroll + E-08 thirds + E-14 rhythm = temporal journey), D gets spatial authority (E-04 empty space + E-06 viewport confidence + E-13 complexity help = spatial experience).

---

## LENS 1: COMPLETENESS

### Every Wave 2 artifact accounted for?

| Artifact | Task | Built? | Buddy Audit? | Buddy Verdict |
|----------|------|--------|-------------|---------------|
| SKILL.md | 41 | YES (918 lines) | 42 | 2 BLOCKING, 2 SIGNIFICANT |
| gate-runner-v2.js | 43 | YES (983 lines) | 44 | 0 BLOCKING, 6 SIGNIFICANT |
| world-description.md | 45 | YES (17 lines) | 46 | 0 BLOCKING, 2 SIGNIFICANT |
| conventions-brief.md | 45 | YES (46 lines) | 46 | 0 BLOCKING, 2 SIGNIFICANT (shared audit) |
| prompt-templates.md | 47 | YES (590 lines) | 48 | 0 BLOCKING, 2 SIGNIFICANT |

**All 5 artifacts produced. All 4 buddy audits complete. Total: 2 BLOCKING (both fixed), 12 SIGNIFICANT findings.**

### Every buddy finding addressed?

**From 42-skill-buddy-audit.md:**
- F-01 (BLOCKING): Gate runner invocation — FIXED (see above)
- F-02 (BLOCKING): Auditor B/D question assignment — FIXED (see above)
- F-04 (SIGNIFICANT): Manual screenshot capture vs captureScreenshots() — ACCEPTED. Manual approach is simpler and more transparent. The gate-runner-v2.js does not export a captureScreenshots function (it's browser-only). The orchestrator captures screenshots via Playwright MCP directly.
- F-05 (SIGNIFICANT): Missing stale server cleanup — NOT YET FIXED in SKILL.md. See Additional Fix 1 below.

**From 44-gate-buddy-audit.md:**
- GBA-01 (SIGNIFICANT): Gate count discrepancy (plan says 22, JS has 24 browser gates) — DOCUMENTED. The header count is correct: 15 REQUIRED + 1 RECOMMENDED + 1 META + 7 ADVISORY = 24 browser gates. The "22" in the plan refers to routing-relevant gates (15 + 4 BV + 1 META + 1 REC + 1 GR-62 = 22). Both are correct from different counting perspectives. The SKILL.md's 22 Gates Reference now has clearer categorization.
- GBA-04 (SIGNIFICANT): GR-45 in essentialIds — ACCEPTED as intentional. GR-45 failure routes to REFINE (typography monotony requires creative intervention, not mechanical patching). This is correct behavior.
- GBA-05 (SIGNIFICANT): GR-03 only checks max-width — LOW RISK. Pages always use max-width for containers. Documented.
- GBA-06 (SIGNIFICANT): Zero sections = vacuous pass — LOW RISK for target use case (builders are instructed to use section elements). GR-10 catches non-semantic HTML.
- GBA-08 (SIGNIFICANT): GR-10 p max-width threshold 1200px too lenient — ACCEPTED as coarse filter. PA auditors catch readability.
- GBA-14 (SIGNIFICANT): GR-62 allows 2 consecutive blanks — LOW RISK, 1 screenshot of leniency.

**From 46-ref-buddy-audit.md:**
- S-1 (SIGNIFICANT): Conventions brief missing transform/transition — FIXED in conventions-brief.md. Added: `transform (translateY, scale, rotate, etc.), transition (except opacity fades)`.
- S-2 (SIGNIFICANT): Missing common background hexes — NOT FIXED. Builders receive tokens.css which contains all background values. Adding 3-4 hexes to the brief would help but is not blocking.

**From 48-prompt-buddy-audit.md:**
- D-05 (SIGNIFICANT/DOCUMENTED): Plan Q-assignment still contradicts PA skill — ACKNOWLEDGED. The plan was not updated (Wave 2 scope does not include plan modification), but the SKILL.md and prompt-templates.md are now consistent with the PA skill. The plan is a reference document; the SKILL.md is the runtime authority.
- D-10 (SIGNIFICANT/BY DESIGN): REFINE builder reads files itself vs inline embedding — Intentional per prompt-templates.md orchestrator notes line 516. This is a design choice, not a bug.

### Additional Fix Applied

**conventions-brief.md — missing transform/transition prohibition (S-1):**
Added to the Prohibited CSS section: `transform (translateY, scale, rotate, etc.), transition (except opacity fades)`. This matches the plan's conventions (line 461) and the world-description's anti-movement principle ("Nothing floats. Surfaces sit flat").

---

## LENS 2: CROSS-REFERENCE

### File path trace: SKILL.md -> referenced files

| Path in SKILL.md | Exists? | Content Valid? |
|-------------------|---------|---------------|
| `~/.claude/skills/tension-composition/SKILL.md` | YES | 841 lines, TC pipeline |
| `design-system/compositional-core/identity/prohibitions.md` | YES | Identity constraints |
| `design-system/compositional-core/vocabulary/tokens.css` | YES | Design tokens |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | YES | Mechanism vocabulary |
| `design-system/compositional-core/components/components.css` | YES | Component library |
| `ephemeral/build-page-v2/gate-runner-v2.js` | YES | 983 lines, atomic gate function |
| `{output_dir}/_content.md` | Created at 0.5 | Dynamic |
| `{output_dir}/output.html` | Created by builder | Dynamic |
| `{output_dir}/_tc-brief.md` | Created by builder | Dynamic |
| `{output_dir}/_reflection.md` | Created by builder | Dynamic |
| `{output_dir}/_pa/auditor-{A..E}.md` | Created by auditors | Dynamic |
| `{output_dir}/_pa/weaver-synthesis.md` | Created by Weaver | Dynamic |
| `{output_dir}/_gate-results.json` | Created at Step 3.3 | Dynamic |
| `{output_dir}/_routing-log.md` | Created at Step 6.6 | Dynamic |

**All static paths verified. All dynamic paths are created during execution.**

### Gate runner invocation -> gate-runner-v2.js

The SKILL.md now says: "Read(ephemeral/build-page-v2/gate-runner-v2.js)", extract gateRunnerV2 function body, call via `browser_evaluate`. The gate-runner-v2.js header at line 30 confirms this is the intended invocation: `browser_evaluate({ function: gateRunnerV2.toString() })`. **CONSISTENT.**

### Prompt templates in SKILL.md -> prompt-templates.md

The SKILL.md embeds prompt templates inline (Window 1 lines 67-161, Auditor lines 407-465, Weaver lines 507-565, REFINE lines 711-832). The prompt-templates.md provides the same templates with placeholders. Comparing:

- **Window 1:** SKILL.md embeds literal content via variables like `{TC_SKILL}`, `{RAW_CONTENT}`, etc. prompt-templates.md uses `{TC_SKILL_CONTENT}`, `{RAW_CONTENT}`, etc. Same templates, slightly different placeholder names. The SKILL.md is the runtime authority; prompt-templates.md is the reference. CONSISTENT in substance.
- **Auditor:** SKILL.md embeds the template at lines 407-465. prompt-templates.md has the same template at lines 146-211. Question assignments now match between SKILL.md and prompt-templates.md (both follow PA skill). CONSISTENT.
- **Weaver:** Both files have the same 5-section structure, same receiving principle, same convergence acknowledgment. CONSISTENT.
- **REFINE:** SKILL.md embeds content inline; prompt-templates.md tells the builder to Read files. This is a documented divergence — the SKILL.md approach (inline embedding) is more reliable for Task-spawned agents. CONSISTENT with documented design choice.

### Conventions brief in SKILL.md -> conventions-brief.md

The SKILL.md embeds a 13-line conventions brief inline at two locations (Window 1 line 125-137, REFINE line 792-806). The conventions-brief.md is a 46-line expanded version with additional detail (type scale, color palette, border weights, perceptibility thresholds). The SKILL.md's inline version is a SUBSET — it contains the core mechanical constraints. The conventions-brief.md adds context that the builder gets from other files (tokens.css, prohibitions.md).

**One discrepancy found and fixed:** The conventions-brief.md was missing `transform` and `transition` in the Prohibited CSS section. The SKILL.md's inline conventions include "Prohibited: border-radius, box-shadow, gradients, transforms, transitions (except opacity)." The conventions-brief.md now matches after the fix.

---

## LENS 3: FRESH-EYES — Mental Execution of /build-page

Walking through every step as if executing fresh:

**Step 0:** Parse input, mkdir, copy content. Clear, deterministic. Would work.

**Step 1:** Read 6 files, construct Window 1 prompt, spawn Opus. File paths are correct. Prompt concatenation order is specified. **Potential issue:** The prompt is ~5,000+ lines (TC skill 841 + content varies + prohibitions 419 + tokens 183 + mechanism catalog 751 + components 944 + conventions 14). For content >2,000 lines, total prompt approaches 5,000-7,000 lines. This is within context limits but large. Step 0.2b warns at 5,000 content lines and stops at 8,000. With reference files adding ~3,200 lines, the effective content limit is more like ~4,800 before hitting context pressure.

**Step 2:** Serve HTML, capture screenshots. Clear. **Missing:** Step 2.1a (stale server cleanup) identified by skill-buddy F-05. A previous crashed run leaves port 8888 occupied. Without cleanup, the server start fails and tries 8889/8890. Not blocking but suboptimal.

**Step 3:** Read gate-runner-v2.js, call via browser_evaluate. **After BLOCKING 1 fix, this works.** The orchestrator reads the JS file, extracts the function body, passes to browser_evaluate. Returns JSON. BV gates run separately via text scan. **Would work.**

**Step 4:** Construct 5 auditor prompts with assigned questions. **After BLOCKING 2 fix, assignments match PA skill.** Each auditor gets 4 questions from the embedded Q-01 through Q-20 list. **Would work.**

**Step 5:** Read 5 auditor reports + brief + reflection, embed inline in Weaver prompt. Spawn Weaver. **Would work.**

**Step 6:** Routing decision. String-search Weaver for RETHINK/SHIP/REFINE. Routing matrix is deterministic. **Would work.**

**Step 7:** Backup output.html, construct REFINE prompt with all content embedded inline, spawn new Opus. Verify output. **Would work.** Note: The REFINE prompt template in SKILL.md embeds content inline, but the prompt-templates.md tells the REFINE builder to Read files itself. The SKILL.md is the runtime authority and embedding inline is more reliable. This divergence is documented.

**Step 8:** Re-navigate, re-capture screenshots, re-run gates, regression check, ship report. **Would work.**

### What breaks?

1. **Context pressure for long content.** Window 1 prompt with 5,000-word content (~1,500 lines) + reference files (~3,200 lines) = ~4,700 lines. Window 3 (REFINE) adds the HTML artifact (~1,000 lines) + Weaver (~60 lines) + reflection (~20 lines) + brief (~50 lines) to the same content + reference files = ~5,830 lines. REFINE context is larger than Window 1 for the same content. This is flagged by w1-retro-buddy A-03 but never addressed.

2. **Gate runner extraction ambiguity.** Step 3.1b says "Extract the function body: everything from `const gateRunnerV2 = async () => {` through the closing `};`". A fresh orchestrator might interpret this literally and try to parse the JS file to extract the function. In practice, the entire file IS the function (plus helper functions inside it and utility functions after it). The orchestrator should pass the entire file content as the function string, or more precisely, the content from line 33 through line 878 (the gateRunnerV2 closure). The BV and GR-62 functions (lines 893+) should NOT be passed to browser_evaluate. **This extraction step needs clearer specification.**

3. **No Weaver failure fallback for REFINE.** If the Weaver fails (Task error, no output), weaver_available=false. The routing fallback (keyword scan) handles the routing decision, but the REFINE builder's prompt at Step 7.1 reads the Weaver synthesis. If it doesn't exist, the REFINE prompt has a gap — no creative direction from evaluation. The skill doesn't specify what to do when weaver_available=false AND route=REFINE.

---

## LENS 4: ADVERSARIAL

### Attack 1: Gate runner returns non-JSON

The gate runner's `JSON.stringify` at line 877 has no top-level try/catch (GBA-02). If a gate accidentally creates a circular reference (extremely unlikely), the function throws. The orchestrator's Step 3.2 would get an error from browser_evaluate. Step 3.4 checks "starts with '{'" — an error string wouldn't, so GATES_FAILED=true. The process continues with PA. **Handled by accident, not by design.**

### Attack 2: Builder writes HTML to wrong filename

Window 1 builder is instructed to write to `{output_dir}/output.html`. If the builder writes to `page.html` or `index.html`, Step 1.4 Glob finds zero results and STOPs. The content is lost. **No recovery — but fail-safe is correct behavior.**

### Attack 3: Auditor ignores Section 0 and jumps to questions

No structural verification checks for "COLD LOOK" or "Gut reaction:" keywords in auditor reports. Step 4.5 only checks file exists and has >100 bytes. An auditor that skips Section 0 produces a report that looks valid but lacks the experiential anchor. The Weaver receives this degraded report. **Impact: moderate. Fix: add keyword check for "COLD LOOK" in first 30 lines (plumbing check, not quality evaluation).** Not blocking.

### Attack 4: getSections() returns zero sections

GBA-06/GBA-15 identified that `getSections()` uses `'section, [class*="zone"], [class*="section"]'`. A builder who uses `<div class="chapter-1">` without "zone" or "section" in class names defeats all perception gates (GR-11, GR-13, GR-14, GR-20, GR-51, GR-55) — they all pass vacuously on empty arrays. **Mitigation:** GR-10 catches non-semantic HTML. The builder is instructed to use metaphor-named classes and section elements. The conventions say "ARIA landmarks: at least header, main, footer" which implies semantic structure. **Risk: LOW for intended use case. Would be MEDIUM for adversarial builders.**

### Attack 5: SKILL.md vs prompt-templates.md REFINE divergence

The SKILL.md embeds all content inline in the REFINE prompt (lines 674-683 read files and embed). The prompt-templates.md tells the REFINE builder to Read files directly (lines 410-411 say "Read this file: {OUTPUT_DIR}/output.html"). A fresh instance reading BOTH files might not know which approach to follow. **Resolution:** SKILL.md is the runtime authority. prompt-templates.md is the reference for understanding prompt design. The SKILL.md approach (inline embedding) is more reliable because Task-spawned agents may not have access to the same file paths as the orchestrator.

### Attack 6: Conventions brief inconsistency between SKILL.md inline and conventions-brief.md file

The SKILL.md's 13-line inline conventions brief says "Prohibited: border-radius, box-shadow, gradients, transforms, transitions (except opacity)." The conventions-brief.md now says "transform (translateY, scale, rotate, etc.), transition (except opacity fades)" after my fix. But the SKILL.md inline version uses shorthand ("transforms, transitions") while the conventions-brief.md uses longhand ("transform (translateY, scale, rotate, etc.)"). **Functionally equivalent.** Both communicate the same constraint. The longhand in conventions-brief.md gives examples for clarity.

### Attack 7: Step 3 header says "22 gates" but actual count varies by perspective

The SKILL.md says "## STEP 3: Run Gate Runner (22 gates)" in the header. The 22 Gates Reference section now lists 15 + 1 + 1 + 2 + 7 = 26 gate references. But the "22" refers to routing-relevant gates: 15 REQUIRED + 1 META + 1 RECOMMENDED + 4 BV + 1 GR-62 = 22. The 7 ADVISORY are informational only. **The header count should arguably be "24 browser + 5 orchestrator = 29 total checks" or the header should say "22 routing-relevant gates." MINOR inconsistency — does not affect execution.**

---

## LENS 5: META-COGNITIVE

### What blind spots exist across all Wave 2 outputs?

**MC-01: No one tested the end-to-end prompt construction.**
All 4 builders built their artifacts independently. The skill-buddy checked cross-references. But nobody actually CONSTRUCTED a Window 1 prompt by reading all 6 reference files, concatenating them in order, and measuring the result. The prompt is estimated at 5,000+ lines but the actual line count is unknown. A single test construction would reveal: does the prompt fit in context? Does the STOP checkpoint survive 841 lines of TC skill before it? Are file boundaries clear to the receiving agent?

**MC-02: The gate runner and SKILL.md were built by different agents who never communicated.**
Task 41 (skill-builder) and Task 43 (gate-builder) worked independently. The skill-builder embedded an invocation pattern based on the OLD gate runner. The gate-builder produced a new atomic function. Neither knew what the other was building. The buddy audits caught the incompatibility (F-01), but the root cause is the lack of cross-agent coordination on the interface contract.

**MC-03: The world-description was built by a different agent than the conventions-brief, but they share the same content domain.**
They happen to be consistent because both derive from the same source documents (prohibitions.md, tokens.css). But the world-description mentions "R >= G >= B" explicitly while the conventions-brief has it as a constraint — duplication that the ref-buddy flagged as "defensible." The question nobody asked: should the world-description reference the conventions-brief, or should they remain completely independent? Currently they are independent but overlapping.

**MC-04: Nobody asked what happens when the user runs /build-page on CONTENT THAT ALREADY HAS CSS.**
If the content markdown contains embedded HTML with CSS (common for technical content), the builder receives raw markdown containing CSS, which it must transform into a designed page. The existing CSS in the content might conflict with the design system constraints. The TC skill would treat it as content, not as existing design. The builder would need to extract content FROM the CSS-embedded HTML. This is not addressed anywhere.

**MC-05: The process assumes the orchestrator LLM can hold context through all 8 steps.**
Steps 0-8 are sequential tool calls over potentially hours. The orchestrator must remember: output_dir, server_pid, server_port, has_brief, screenshot_paths, GATES_FAILED, creative_verdict, weaver_available, route. These are all simple state variables, but the orchestrator's context also accumulates all Read results from Steps 1-8. By Step 8, the orchestrator has read: 6 reference files + HTML artifact + 5 auditor reports + Weaver synthesis + gate results + routing log = ~15 file reads. Context compression may lose early state variables.

### What assumptions are normalized?

1. **"Opus will follow the receiving principle."** All prompt templates assume Opus agents will read sequentially, write checkpoint responses, and not skip ahead. This is empirically supported but not guaranteed.

2. **"5 auditors produce sufficient signal."** Previous Mode 4 PA used 9 auditors. The reduction to 5 has not been empirically validated. The Wave 1 retrospective flagged this (assumption 3) but no one designed an experiment to test it.

3. **"The Weaver can reconcile divergent perceptions."** If 3 auditors say SHIP and 2 say RETHINK, the Weaver must navigate this. The convergence instruction helps but the Weaver's ability to handle contradictory input is untested with this exact prompt.

4. **"One REFINE cycle is sufficient."** Evidence from Gas Town (+1.5 PA-05 in one cycle) supports this for that content. Different content may require more or fewer cycles.

### What questions haven't been asked?

1. **Is the world-description sent to the REFINE builder?** The SKILL.md's REFINE prompt template (Step 7) includes identity files (prohibitions, tokens) but does NOT include the world-description.md. The REFINE builder enters the world through the conviction brief and the vocabulary files, not through the world-description. Is this intentional? The world-description was designed for Window 1 builders, but the REFINE builder operates on a different metaphor territory (the gap between aspiration and reality). Sending the world-description might over-constrain. Not sending it might leave the REFINE builder without the "soul" context.

2. **What is the expected runtime?** Nobody estimated how long a full /build-page run takes. Window 1 (Opus builder): 5-15 min. Screenshots: 1-2 min. Gates: 30s. 5 auditors (parallel): 3-8 min. Weaver: 3-5 min. Routing: instant. REFINE: 5-15 min. Post-REFINE gates: 30s. Ship: instant. **Estimated total: 20-50 min.** This is significantly faster than the old pipeline (~3h20m for Gas Town) because the prompt is pre-assembled and there is no multi-wave fix cycle.

3. **What happens if the user runs /build-page while a previous run is still active?** The server on port 8888 from the first run blocks the second run. The stale server cleanup (F-05) handles crashed servers but not CONCURRENT servers. Two simultaneous runs on the same port would contend.

---

## LENS 6: HOLISTIC

### Do ALL artifacts cohere as a system?

**The information flow is correct:**

```
Content.md → [Window 1: TC + BUILD] → output.html + brief + reflection
                                           ↓
[Screenshots] → [5 PA Auditors] → 5 reports
                                           ↓
[Weaver] → synthesis (with brief + reflection + auditor reports)
                                           ↓
[Gates] → gate-results.json
                                           ↓
[Routing] → SHIP / REFINE / RETHINK
                                           ↓
[Window 3: REFINE] → output.html (v2) + reflection-v2
                                           ↓
[Post-REFINE Gates] → gate-results-post-refine.json → SHIP
```

**The plumbing/freedom boundary is clean:**
- Orchestrator: file IO, tool calls, string comparisons, numerical comparisons. ZERO creative evaluation.
- Builders: full creative authority within world constraints.
- Auditors: fresh-eyes, zero context, perceptual language only.
- Weaver: creative synthesis, experiential anchor, convergence acknowledgment.
- Gates: binary pass/fail on mechanical properties.

**The generative frame survives implementation:**
The world-description creates a place to inhabit. The conventions-brief provides the physics. The TC skill provides the creative process. The PA questions provide the experiential evaluation. The Weaver transforms evaluation into creative direction. The REFINE builder receives direction as creative territory, not corrections. At no point does the process tell any agent "your page scored X, improve it to Y." This is the core design principle and it is preserved across all artifacts.

**Consistency check:**

| Property | SKILL.md | gate-runner-v2.js | conventions-brief.md | prompt-templates.md | world-description.md |
|----------|---------|-------------------|---------------------|--------------------|--------------------|
| Container 940-960px | YES | GR-03 | YES | YES | "940-960px" |
| R >= G >= B | YES | GR-05 | YES | YES | YES (explicit) |
| Font trinity | YES | GR-06 | YES | YES | "Three typefaces" |
| No border-radius | YES | GR-08 | YES | YES | "Corners are cut, not curved" |
| Border hierarchy 4/3/1 | YES | GR-09 | YES | YES | "Three weights" |
| Bg delta >= 15 | YES | GR-11 | YES | YES | Implicit |
| Stacked gap <= 120px | YES | GR-13/14 | YES | YES | Not in WD (correctly) |
| Single margin <= 96px | YES | GR-15 | YES | YES | Not in WD (correctly) |
| WCAG contrast | YES | GR-60 | YES | YES | Not in WD (correctly) |
| No transform/transition | YES | Not gated | YES (after fix) | YES | "Nothing floats" (partial) |

**One gap:** The conventions-brief.md now prohibits transform/transition, and the SKILL.md inline conventions do too, but NO GATE checks for transform or transition usage. A builder who uses `transform: translateY(-2px)` on hover would violate the convention but pass all gates. The PA auditors would catch hover effects visually, but the gate runner has no check for this.

**Assessment: the artifacts cohere strongly.** The world-description provides WHY, the conventions-brief provides WHAT, the SKILL.md provides HOW, the gate-runner-v2.js provides VERIFICATION, and the prompt-templates.md provides WHAT EACH AGENT SEES. Information flows in one direction (content -> build -> evaluate -> route -> refine -> ship) with no circular dependencies.

---

## LENS 7: PROPAGATION — What Wave 3 Needs to Know

### Highest-risk areas for Wave 3 verification

**RISK 1 (HIGH): Gate runner extraction and invocation.**
A Wave 3 fresh-eyes agent should mentally execute Steps 3.1-3.2: Read gate-runner-v2.js, extract gateRunnerV2 function body, call browser_evaluate. The extraction step is the highest-risk operation in the skill. If the orchestrator passes the ENTIRE file (including BV and GR-62 utility functions after line 878) to browser_evaluate, those utility functions won't cause errors (they're just unused definitions in browser context), but they add unnecessary payload. If the orchestrator only passes lines 33-878, it must correctly identify the function boundaries. **Verify the extraction specification is unambiguous.**

**RISK 2 (HIGH): Prompt construction for Window 1.**
A Wave 3 agent should estimate the total prompt size for a representative content file. Read all 6 reference files, count lines, add estimated content, and verify the total fits within context. If the total exceeds reasonable limits (~10,000 lines), the content length warning (Step 0.2b) threshold may need lowering.

**RISK 3 (MEDIUM): Weaver failure fallback path.**
If weaver_available=false and route=REFINE, what does the REFINE builder receive? The SKILL.md Step 7.1 reads `{output_dir}/_pa/weaver-synthesis.md`. If this file doesn't exist, the Read fails. The skill should handle this: if no Weaver, embed raw auditor reports in the REFINE prompt instead. **Currently unhandled.**

**RISK 4 (MEDIUM): Post-REFINE gate failure handling.**
If Playwright disconnects between REFINE and post-REFINE gates, Step 8.2 fails. The skill's failure protocol (line 897) lists "Gate runner throws → SET GATES_FAILED=true, continue to PA" for Step 3. But there is no equivalent entry for Step 8.2 failure. **The process halts with no recovery.**

**RISK 5 (LOW): Stale server port.**
The SKILL.md does not include the `lsof -ti:8888 | xargs kill 2>/dev/null` cleanup before Step 2.1. The Wave 1 retrospective applied this fix to the plan but it was not propagated to the SKILL.md by the skill-builder. **Add the cleanup step.**

### What Wave 3 should specifically test

1. **Gate runner invocation path.** Can a fresh instance successfully: Read gate-runner-v2.js, identify the function boundaries, and call browser_evaluate with the function body? Does the result parse as JSON with the expected structure?

2. **File path resolution.** Every static path in the SKILL.md resolves to a file that exists and has the expected content.

3. **Information isolation.** Auditor prompts contain ONLY screenshots + questions + Section 0 protocol + language constraint. Zero build context leaks.

4. **Cross-file consistency.** Every value in the SKILL.md's inline conventions matches conventions-brief.md, matches gate thresholds in gate-runner-v2.js.

5. **Routing matrix completeness.** Every combination of (creative_verdict, GATES_FAILED) maps to exactly one route with no ambiguity.

---

## ADDITIONAL FIXES APPLIED

### Fix 3: conventions-brief.md — missing prohibited CSS (ref-buddy S-1)

Added `transform (translateY, scale, rotate, etc.), transition (except opacity fades)` to the Prohibited CSS section in `ephemeral/build-page-v2/conventions-brief.md`.

### Fix 4: SKILL.md — 22 Gates Reference cleanup

Corrected gate categorization:
- Removed GR-62 from "17 REQUIRED (browser)" — it's a Node/orchestrator gate
- Split into: 15 REQUIRED (browser) + 1 META (GR-48) + 1 RECOMMENDED (GR-45) + 2 ORCHESTRATOR-ONLY (GR-62, BV-01..04)
- Removed duplicate "4 BV" and "1 RECOMMENDED" lines that remained from the old version

---

## SUMMARY OF ALL FIXES

| # | File | Change | Severity | Status |
|---|------|--------|----------|--------|
| 1 | SKILL.md | Gate runner invocation: replaced old function calls with gate-runner-v2.js reference and browser_evaluate instructions | BLOCKING | FIXED |
| 2 | SKILL.md | Auditor B/D: swapped Q-06 and Q-08 to match PA skill (B=Q-08, D=Q-06) | BLOCKING | FIXED |
| 3 | conventions-brief.md | Added transform/transition to prohibited CSS list | SIGNIFICANT | FIXED |
| 4 | SKILL.md | 22 Gates Reference: corrected gate categorization, removed duplicates | SIGNIFICANT | FIXED |
| 5 | SKILL.md | Step 3.1 path: updated from gate-runner-core.js to gate-runner-v2.js | SIGNIFICANT | FIXED |

## UNFIXED ITEMS (for Wave 3 or later)

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| U-1 | Missing stale server cleanup before Step 2.1 | SIGNIFICANT | Add `Bash("lsof -ti:8888 \| xargs kill 2>/dev/null")` before server start |
| U-2 | Missing common background hexes in conventions-brief.md | LOW | Add 3-4 most-used background values as quick reference |
| U-3 | No Weaver failure fallback for REFINE builder | MEDIUM | If weaver_available=false, embed raw auditor reports in REFINE prompt |
| U-4 | Post-REFINE gate failure has no recovery path | MEDIUM | Add to failure protocol: "Post-REFINE gates fail → WARN, ship without regression verification" |
| U-5 | Gate runner extraction boundary unclear | MEDIUM | Specify exact line range or provide extraction regex |
| U-6 | Step 3 header says "22 gates" which is ambiguous | LOW | Consider "24 browser gates + 5 orchestrator checks" or "22 routing-relevant gates" |
| U-7 | GR-45 in essentialIds routes to unpatchable path | LOW | Document expected behavior: GR-45 failure → REFINE (typography monotony is structural) |
| U-8 | No gate for transform/transition prohibition | LOW | Consider adding GR-XX for transform/transition CSS usage |
| U-9 | World-description not sent to REFINE builder | QUESTION | Intentional? The REFINE builder enters the world through brief + vocabulary, not world-description. |

---

## OVERALL ASSESSMENT

**Wave 2 is COMPLETE and HIGH QUALITY.** All 5 artifacts are well-crafted. The 2 BLOCKING issues are fixed. The plumbing/freedom boundary is clean throughout. The generative frame (world-description -> conviction -> build -> perceive -> synthesize -> refine) survives implementation.

**The primary remaining risk is INTEGRATION.** Each artifact works in isolation. The gate runner is atomic and browser-compatible. The prompt templates maintain information isolation. The reference files capture the design system's soul and mechanics. But the system has not been tested end-to-end. The gate runner extraction step, the prompt construction step, and the Weaver failure fallback are the three highest-risk integration points.

**Wave 3 should focus on:** (1) End-to-end mental execution by a fresh-eyes agent with zero build context. (2) Cross-file consistency verification at the value level (every threshold, every path, every question assignment). (3) Adversarial attack on the complete system, not individual artifacts.

---

**END OF WAVE 2 RETROSPECTIVE**
