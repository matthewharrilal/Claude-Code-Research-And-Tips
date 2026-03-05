# Fresh-Eyes Verification Report

**Task:** #49 -- WAVE 3 Fresh-Eyes
**Author:** fresh-eyes (zero context)
**Date:** 2026-02-28
**Files read:** SKILL.md, gate-runner-v2.js, world-description.md, conventions-brief.md, prompt-templates.md, tension-composition/SKILL.md, perceptual-auditing/SKILL.md

---

## 1. Can I Understand What This System Does?

**YES, mostly.** After reading all seven files, I can reconstruct the system's purpose and flow:

This is a pipeline that transforms a markdown content file into a "designed" self-contained HTML page. It works through three creative windows:

1. **DERIVE + BUILD** (Window 1): An Opus agent reads the content, derives a creative metaphor through the tension-composition process, writes a conviction brief, then builds an HTML page informed by that metaphor.
2. **EVALUATE** (Window 2): The orchestrator runs programmatic gates (22 gates via browser_evaluate) AND spawns 5 Opus perceptual auditors who see ONLY screenshots and experiential questions. A Weaver synthesizes the 5 auditor reports into creative direction with a SHIP/REFINE/RETHINK verdict.
3. **REFINE** (Window 3): If the verdict is REFINE, a DIFFERENT Opus builder receives the artifact, the Weaver's synthesis, and the previous builder's reflection, and creates a refined version.

The system's core insight is the separation of concerns: the orchestrator handles plumbing (file I/O, spawning, screenshots, gates, routing), while creative agents handle all quality judgments. Gates handle mechanical compliance (binary pass/fail), while perceptual auditors handle experiential quality (prose descriptions, no CSS vocabulary).

The design system enforces a specific aesthetic: warm palette (R>=G>=B), sharp corners (no border-radius), three-font trinity (Instrument Serif, Inter, JetBrains Mono), container width 940-960px, editorial magazine feel.

**What took the longest to understand:** The relationship between the SKILL.md orchestrator and the prompt-templates.md file. The SKILL.md contains complete prompt templates inline (Window 1, PA Auditor, Weaver, Refine), and the prompt-templates.md file contains... the same templates with slightly different variable names. It was not immediately clear which is canonical. I eventually concluded that SKILL.md is the executable document (what runs), and prompt-templates.md is a reference document with implementation notes.

---

## 2. Could I Execute /build-page in a Fresh Claude Code Session?

**YES, with caveats.** The SKILL.md is written as an executable procedure with numbered steps, explicit tool calls, and verification checkpoints. I could follow it step by step. However:

### What Would Confuse Me

**A. Gate runner invocation is ambiguous.** Step 3.1-3.2 says:

> Read(ephemeral/build-page-v2/gate-runner-v2.js) -> GATE_JS
> Extract the function body... browser_evaluate({ function: GATE_JS_FUNCTION_BODY })

But the gate runner JS file (983 lines) contains BOTH the browser-executable `gateRunnerV2` function AND two Node.js utility functions (`checkBriefVerification`, `checkScreenshotQuality`) that cannot run in browser context. I need to extract ONLY lines 33-878 (the `gateRunnerV2` async function). The SKILL says "extract the function body: everything from `const gateRunnerV2 = async () => {` through the closing `};`" -- which is clear enough, but in practice I would need to figure out how to do this string extraction in Claude Code, which is a nontrivial parsing task.

**B. The BV gate and GR-62 implementations are in the JS file but not clearly linked to SKILL.md steps.** The SKILL says the orchestrator runs BV-01 through BV-04 as "text scan" (Step 3.0) and GR-62 as "file inspection" (mentioned in the 22 Gates Reference). The gate-runner-v2.js helpfully includes `checkBriefVerification()` and `checkScreenshotQuality()` functions -- but the SKILL never tells me to use these functions. Step 3.0 describes BV checks as string operations on the brief text. Are these JS utility functions meant to be called by the orchestrator? Or are they documentation? The SKILL.md doesn't reference them.

**C. DPR handling.** GR-61 checks that `window.devicePixelRatio === 1` and fails if not. On a Mac with Retina display (DPR = 2), this gate will ALWAYS fail. The SKILL mentions DPR at GR-61 in the gate reference and the conventions include `GR-61 (DPR)` in required gates. But there is no instruction for setting DPR to 1 before taking screenshots or running gates. Previous pipeline versions apparently had a "DPR workaround" (based on the memory file mentioning `960x600->1440x900 CSS`), but no such workaround appears in the current files. A fresh executor would hit this gate failure on every Mac and not know what to do about it.

**D. Font loading.** The page uses Google Fonts (Instrument Serif, Inter, JetBrains Mono) loaded via `<link>` tags in the HTML. When the gate runner calls `document.fonts.ready`, it waits for fonts. But if the builder produces a self-contained HTML page WITHOUT external font loading links (the conventions say "no external dependencies"), the fonts may not be available and GR-06 (Font Trinity) would fail. Yet the conventions also require those three specific fonts. This creates a tension: self-contained means no external dependencies, but these are web fonts that need external loading. I assume the builder is expected to use `@import` or `<link>` to Google Fonts, but the conventions' "no external dependencies" language is confusing.

**E. Port handling.** Step 2.1 starts `npx http-server` on port 8888, with fallback to 8889/8890. But Step 8.1 says to navigate again to `localhost:{server_port}/output.html` for post-REFINE screenshots. The server is still running from Step 2.1 (it is only killed at Step 8.5). If the HTML file is overwritten by the REFINE builder at Step 7.3, the server should serve the new version automatically since it is serving the directory -- this should work, but it is not explicitly stated.

**F. Parallel execution of Steps 3 and 4.** The SKILL says "Steps 3 and 4 run IN PARALLEL. Spawn PA auditors (Step 4) first (background via Task), then run gates (Step 3) in foreground." In Claude Code, `Task()` calls are blocking by default. The instruction says to spawn auditors "background via Task" but there is no `background=true` parameter on Task calls. The actual mechanism would be to spawn all 5 auditors as parallel Task calls, then run gates, then wait for results. This is feasible in Claude Code but the "background" language is slightly misleading -- it sounds like it means "run in background and don't wait" rather than "launch in parallel."

---

## 3. What's Missing?

**A. No reference to design-system files.** The SKILL references these paths:
- `design-system/compositional-core/identity/prohibitions.md`
- `design-system/compositional-core/vocabulary/tokens.css`
- `design-system/compositional-core/grammar/mechanism-catalog.md`
- `design-system/compositional-core/components/components.css`

I was not given these files to read. In a fresh session, I would need them to exist at those exact paths. If they are missing, Step 1.1 says "IF any Read fails: STOP." The system assumes these files exist but never validates they are present before starting. A pre-flight check at Step 0 would help.

**B. No npx/http-server dependency check.** Step 2.1 runs `npx http-server`. If this package is not installed, the command will attempt to download it. In a fresh environment without network access or npm, this fails silently. No fallback is described.

**C. The world-description.md and conventions-brief.md are NOT used anywhere in the SKILL.md.** This is the most significant gap I found. The SKILL.md constructs the Window 1 prompt by concatenating reference files and a hardcoded conventions block. The world-description.md and conventions-brief.md files exist as standalone documents, but the SKILL never reads them or passes them to any agent. The conventions block in the SKILL is hardcoded inline (lines 125-137). The world-description.md reads like a prose version of the identity that a builder would benefit from seeing -- but it is never provided.

I verified this by searching the SKILL.md: it references `prohibitions.md`, `tokens.css`, `mechanism-catalog.md`, and `components.css` -- but NOT `world-description.md` or `conventions-brief.md`. These appear to be supplementary documents that describe the design system's character, but they are orphaned from the executable pipeline.

**D. The TC skill is enormous (55KB, 1500+ lines).** The SKILL.md says to Read the entire TC skill and embed it in the Window 1 prompt. Combined with the content, prohibitions, tokens, mechanism catalog, and components CSS, this could easily exceed context limits. No token budget or size warning is mentioned. The content size check at Step 0.2b (warn >5000, stop >8000 lines) only checks the content file, not the total prompt size.

**E. No example output.** I have never seen what a successful build looks like. The world-description and conventions brief give me the aesthetic feel, but there is no example HTML page, no example conviction brief, no example auditor report. A "reference build" would dramatically accelerate my understanding.

**F. Question numbering discrepancy.** The SKILL.md uses Q-01 through Q-20. The PA skill uses E-01 through E-20. The prompt-templates.md uses E-01 through E-20. Three files, two naming conventions. The actual question text is identical, but the prefixes differ. In the SKILL.md's embedded "THE 20 QUESTIONS" section, questions use Q- prefixes. In the Auditor Prompt Template and question assignments, the SKILL says "pre-grouped" and uses Q- numbers. But the prompt-templates.md uses E- numbers and explicitly notes it follows "the PA skill's assignment as the canonical source." This means the SKILL.md's own embedded questions and the prompt-templates.md disagree on naming. Not blocking, but confusing.

---

## 4. What's Contradictory?

**A. Gate count: 22 vs 24 vs 17+7.** Multiple documents cite different gate counts:
- SKILL.md title says "22 gates" (Step 3 heading)
- SKILL.md reference says "15 REQUIRED, 1 META, 1 RECOMMENDED, 7 ADVISORY" = 24
- Gate runner header says "22 gates" in inventory but then says "TOTAL: 24 checks"
- Gate runner summary computes "essential" (17 gates: 15 REQUIRED + 1 META + 1 RECOMMENDED) vs "advisory" (7)
- SKILL.md says "22 Gates Reference" then lists 15 + 1 + 1 + 2 orchestrator + 7 advisory = 26 items

The actual behavior: the gate runner JS runs 24 browser checks (15 REQUIRED + 1 RECOMMENDED + 1 META + 7 ADVISORY). The orchestrator separately checks BV-01..04 and GR-62. So the total is 24 browser + 5 orchestrator = 29 checks. But the document says "22 gates." This needs a single canonical count.

**B. GR-05 definition mismatch.** The SKILL says GR-05 checks "R>=G>=B" (warm palette). The gate runner's actual implementation (lines 196-226) checks for "cold colors" where B > R+10 AND B > G+10 -- which is a DIFFERENT test. A color like `rgb(100, 120, 115)` has G > R (violates R>=G>=B) but passes the gate runner's test (B is not > R+10). The gate runner is more permissive than what the conventions describe. The conventions-brief.md says "Background constraint: R >= G >= B on every background hex" which matches the SKILL, not the gate runner.

This is a significant contradiction: the aesthetic rule (R>=G>=B) and the programmatic check (visible cold = B > R+10 AND B > G+10) measure different things. Builders will be told to maintain R>=G>=B but only be checked for "not visibly cold." Semantic accents like `#4A90D9` (info blue, where B >> R) would fail R>=G>=B but the gate runner exempts only code/pre elements. Actually wait -- the gate runner checks ALL elements' colors (including accents). Let me re-read... Yes, it checks every rendered element's color, backgroundColor, and border colors. So semantic accent colors like `#4A90D9` (R=74, G=144, B=217 -- clearly cold) WOULD trigger GR-05 as "cold colors." But the conventions-brief.md explicitly lists `#4A90D9 (info)` as a semantic accent. This means the conventions brief's own recommended colors would fail the gate runner's GR-05 check. This is a direct contradiction between conventions-brief.md and gate-runner-v2.js.

Wait -- let me check the visibility filter. The gate runner applies `vis > 20` threshold, where `vis = rgb.a * Math.max(Math.abs(rgb.b - rgb.r), Math.abs(rgb.b - rgb.g))`. For `#4A90D9`: `vis = 1 * Math.max(|217-74|, |217-144|) = 1 * 143 = 143`. That is far above 20. So yes, info-blue accent colors would fail GR-05. But the gate runner also skips code/pre elements. The semantic accents are for callouts, links, etc. -- NOT code/pre. So they would be flagged.

This means a builder who follows the conventions-brief (use `#4A90D9` for info callouts) will fail the gate runner (GR-05 flags cold colors). The builder prompt says "backgrounds R>=G>=B" -- but semantic accents are typically used as border-left colors or text colors, not backgrounds. If the accent is a text color or border color, the gate runner STILL checks those properties. So the builder must somehow use info-blue for its semantic purpose without it being flagged as a cold color. This seems like a real conflict.

**C. REFINE prompt: inline content vs file-reading.** The SKILL.md (lines 660-673) says the orchestrator should Read all reference files and has the REFINE prompt referencing `{ARTIFACT_HTML}`, `{WEAVER}`, `{REFLECTION}`, `{BRIEF}`, `{RAW_CONTENT}`, etc. -- implying content is embedded inline. But the prompt-templates.md (Template 4, lines 410-460) gives file paths for the REFINE builder to read itself: "Read this file: {OUTPUT_DIR}/output.html" etc. The prompt-templates.md notes section explicitly says: "The REFINE builder reads files itself (unlike the Weaver, who receives content inline). The orchestrator provides file paths, not content."

So: SKILL.md embeds content inline for REFINE. Prompt-templates.md gives file paths for REFINE to read. These are contradictory approaches. Which one does the orchestrator follow?

**D. PA auditor viewports: 2 vs 3.** The SKILL.md captures screenshots at 2 viewports (1440px and 768px) per Step 2.3. The PA skill describes screenshot capture at 3 viewports (1440px, 1024px, 768px). The prompt-templates.md references only 1440px and 768px screenshots. If the SKILL.md is canonical (2 viewports), then the PA skill's 1024px viewport description is misleading.

**E. GR-10 sub-check: headerDNA.** The gate runner requires the header to have: dark background (sum < 200), red border-bottom, and 3px border width. But neither the world-description nor conventions-brief mandates this specific header pattern. The conventions-brief mentions border weights (4px primary, 3px section, 1px subtle) but never says "header must have dark background with red 3px bottom border." A builder following only the world-description and conventions would not know to create this specific header pattern. The gate would fail them without warning.

**F. Trailing void threshold.** GR-44 in the gate runner allows up to 300px trailing void. The SKILL.md's patch table for GR-44 says "Reduce margin-bottom on last content element to 24px. Reduce padding-bottom on body/main to 24px." But 300px is very generous -- that is roughly a third of a viewport at 900px height. The world-description talks about "restraint" and the system penalizes large gaps (GR-13 maxes at 120px between sections), but 300px at the page bottom is permitted.

---

## 5. What's Ambiguous?

**A. "Absorb these, do not checklist them."** The conventions block in both Window 1 and Window 3 prompts says mechanical constraints should be "absorbed, not checklisted." But the gate runner literally checklists them (22 binary gates). This creates a philosophical ambiguity: the builder is told NOT to treat these as a checklist, but they WILL be evaluated against a checklist they cannot see. The intended effect is probably "internalize these rules so they emerge naturally" -- but in practice, a builder who "absorbs" rather than "checklists" may produce output that fails binary gates because they made creative tradeoffs the gates cannot understand.

**B. What happens after PATCH_THEN_REFINE?** Step 6.3 says PATCH_THEN_REFINE goes to Step 6.4 then Step 7. Step 6.4 patches CSS. But Step 7's REFINE builder receives the CURRENT output.html. Does the REFINE builder receive the patched version or the pre-patch version? The SKILL says patches are applied to output.html directly (Edit calls), so the REFINE builder would receive the patched version. But the REFINE builder may undo the patches if it rewrites CSS. There is no mechanism to preserve patches through a REFINE cycle.

**C. How does the orchestrator "extract the function body" from the gate runner JS?** Step 3.1b says "Extract the function body: everything from `const gateRunnerV2 = async () => {` through the closing `};`." But the orchestrator is a Claude Code session. It reads the file as a string. How does it extract lines 33-878? Does it need to do string manipulation? Use a regex? The instruction assumes the orchestrator can do this, but the HOW is unspecified. In practice, an orchestrator agent would probably just pass the entire file content and hope browser_evaluate handles it, or manually substring it. This is a significant ambiguity for execution.

**D. "5 sections" vs "5 sections."** BV-04 checks that the brief contains at least 4 of: WORLD, CALIBRATION, OPPOSITION, ARC, MAP. BV-01 checks for >= 5 section headers. The TC skill's Phase 4 defines the conviction brief with 5 sections: WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP. So BV-04 searches for "WORLD" (substring of "WORLD-DESCRIPTION") and "MAP" (substring of "CONTENT MAP"). This should work via substring matching, but it is fragile -- a brief that discusses "mapping" in any section would match "MAP" even without a CONTENT MAP section.

**E. "Color as exception" vs warm palette accents.** The world-description says "Five accent colors serve semantic roles -- blue for information, green for guidance, coral for caution, amber for synthesis, purple for challenge." The conventions-brief lists specific hex values for these. But the gate runner's GR-05 appears to flag blue and purple accents as "cold colors" (see Contradiction B above). It is ambiguous whether semantic accents are exempt from the warm palette rule or must conform to it.

---

## 6. What Would I Do Differently?

**A. Single source of truth for conventions.** The conventions block appears in 4 places: SKILL.md Window 1 prompt, SKILL.md Window 3 prompt, conventions-brief.md, and prompt-templates.md (twice). If any value changes, all 4 must update. I would have SKILL.md `Read(conventions-brief.md)` and embed it, rather than hardcoding the conventions inline.

**B. Remove prompt-templates.md or merge into SKILL.md.** Having both creates confusion about which is canonical. The prompt-templates.md adds implementation notes (like "Model: Opus (mandatory)") that are useful, but the templates themselves are redundant with what SKILL.md already contains. Either make SKILL.md reference prompt-templates.md as the single template source, or absorb the notes into SKILL.md and delete prompt-templates.md.

**C. Explicitly exempt semantic accents from GR-05.** The gate runner should skip elements whose color matches known semantic accent values, or check ONLY background colors for the warm palette rule (since accents are typically text/border colors, not backgrounds).

**D. Add a pre-flight step.** Before Step 1, verify: (a) all design system files exist, (b) npx http-server is available, (c) Playwright is installed, (d) DPR is 1 (or set it). This would prevent many failure modes.

**E. Resolve the REFINE prompt approach.** Pick one: either the orchestrator embeds content inline (current SKILL.md approach) or provides file paths for the REFINE builder to read (prompt-templates.md approach). Both have tradeoffs, but they should agree.

**F. Include world-description.md in the builder prompts.** This file is beautifully written and captures the design system's character in prose that would help builders internalize the aesthetic. Currently, builders receive prohibitions.md and tokens.css (structural/mechanical) but not this evocative prose description. The world-description says "Think of a well-edited magazine spread, not a software interface" -- that is exactly the kind of creative direction that would help a builder. Sending it alongside or instead of the hardcoded conventions block would be more effective.

**G. Standardize question numbering.** Pick Q- or E- and use it everywhere. The PA skill uses E-. The SKILL.md uses Q-. This should be unified.

---

## Summary: Ship-Readiness Assessment

| Dimension | Rating | Notes |
|-----------|--------|-------|
| Comprehensibility | 4/5 | The system is understandable to a fresh reader. The three-window metaphor is clear. |
| Executability | 3/5 | A fresh orchestrator could follow the steps but would hit the DPR issue, gate runner extraction ambiguity, and REFINE prompt conflict. |
| Internal consistency | 2/5 | Multiple contradictions: GR-05 vs semantic accents, gate counts, REFINE inline vs file-read, 2 vs 3 viewports, conventions in 4 places. |
| Completeness | 3/5 | Missing: world-description integration, example output, DPR workaround, pre-flight checks, dependency verification. |
| Robustness | 3/5 | Good failure protocol table, backup/restore on REFINE regression, fallback keyword scan if Weaver fails. Weak on pre-flight and environmental assumptions. |

**Overall verdict:** The system is well-designed at the architectural level. The three-window pattern, information isolation between agents, and separation of mechanical gates from perceptual auditing are sophisticated and well-reasoned. The issues are all at the implementation detail level -- contradictions between files, missing integrations, and ambiguities that would trip up a first-time executor. A consistency pass resolving the items in sections 4 and 5 would bring this to ship-ready.

**The single most impactful fix:** Resolve the GR-05 contradiction with semantic accent colors. A builder who uses the design system's own recommended colors will fail the gate runner. This is the kind of bug that erodes trust in the entire system.

**The single most impactful improvement:** Read world-description.md and conventions-brief.md in the orchestrator and pass them to builders. These files exist, are well-written, but are currently orphaned from the executable pipeline.
