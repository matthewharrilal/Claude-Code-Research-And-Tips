# Potential Issues, Failure Modes, Edge Cases, and Risks

**Author:** risk-analyst (Opus)
**Date:** 2026-02-27
**Source material:** 01-current-state-map, 02-gate-audit, 03-skill-architecture, 04-reference-file-map, 07-first-principles-design, 10-orchestrator-plumbing, 11-window1-design, 12-window2-design, 13-window3-design, 11-adversarial-review, 15-process-adversarial
**Stance:** Genuinely adversarial. Every item here is a plausible failure scenario, not a theoretical concern.

---

## SECTION 1: WINDOW 1 FAILURE MODES (DERIVE + BUILD)

### W1-01: The Agent Skips TC Derivation and Jumps to Building

**The risk:** The Window 1 prompt has a "STOP" checkpoint between the content and the vocabulary files. This is a SOFT gate -- it relies on the agent processing sequentially and respecting an instruction to derive before continuing. But the agent reads the ENTIRE prompt at once. Every LLM sees the full prompt before generating any output. The vocabulary files, mechanism catalog, and components.css are all visible below the checkpoint when the agent starts generating.

**How it manifests:** The agent produces output.html, _tc-brief.md, and _reflection.md -- all three files exist, all pass structural validation. But the conviction brief was written AFTER building (or written to rationalize build decisions already made). The brief reads correctly but does not genuinely drive the composition. The orchestrator has NO WAY to distinguish a brief-first build from a build-first brief.

**Severity: HIGH.** The entire Window 1 design rests on derivation-before-building as the causal mechanism for creative quality. If this fails silently, every downstream claim about conviction-driven building is unfounded.

**Mitigation options:**
- Timestamp checking (conviction brief modified time < output.html modified time) is unreliable because the agent may write both in a single session with sub-second granularity.
- BV gates check brief STRUCTURE (does it have 5 sections?) but not brief CAUSALITY (did it precede building?).
- The only structural mitigation is the reading order itself -- but LLMs are not guaranteed to process sequentially.

**Current coverage:** NONE. The process assumes compliance with the soft gate.

---

### W1-02: The Agent Produces No Conviction Brief

**The risk:** The Window 1 agent writes output.html and _reflection.md but does not write _tc-brief.md. The orchestrator's structural validation (Step 1.4) checks for brief existence. If missing, the plumbing spec says `has_brief = false` and proceeds with warnings.

**How it manifests:** The pipeline continues without a brief. BV gates are skipped (Step 3.0: "IF has_brief == true"). The PA auditors receive no brief excerpt (Step 4.2: brief_excerpt = "(No conviction brief available.)"). The REFINE builder, if triggered, has no conviction to build from. The page was built without explicit creative commitment.

**Severity: MEDIUM.** The process survives but degraded. The REFINE builder is severely handicapped without a conviction brief. The PA auditors lose the anchor of brief sections 1+4 (though per the Window 2 design, auditors may not receive the brief anyway -- there is disagreement between 03-skill-architecture and 12-window2-design on this).

**Mitigation:** The plumbing spec already handles this gracefully. Consider whether brief absence should BLOCK the pipeline rather than warn. Given that the brief is the central creative artifact of the new process, its absence arguably signals a fundamentally broken build that should not proceed to evaluation.

---

### W1-03: The Agent Produces Invalid or Malformed HTML

**The risk:** The builder writes an HTML file that exists, has > 500 bytes, contains `<html`, and has 5+ sectioning elements -- passing all structural validation -- but the HTML is semantically broken: unclosed tags, CSS syntax errors, JavaScript errors in embedded scripts, or corrupted character encoding.

**How it manifests:** The Playwright page loads but renders incorrectly. Screenshots show a broken page. The gate runner may throw errors (some gates query DOM elements that don't exist in malformed HTML). PA auditors see a broken page and describe it as broken -- this is technically accurate but wastes an entire PA cycle.

**Severity: MEDIUM.** The pipeline does not crash, but produces useless results. The routing will likely say RETHINK (auditors describe a broken page), triggering a second Window 1 pass -- which is the correct recovery, but at significant cost.

**Mitigation:** Add a HTML validation step between Window 1 and screenshot capture. Even a simple check like "does `document.querySelector('body').children.length > 3`" in Playwright would catch severely broken DOM. The plumbing spec has no such check -- it goes from structural file validation directly to serving and screenshotting.

---

### W1-04: Context Budget Exhaustion for Long Content

**The risk:** The Window 1 design allocates ~35-46% of context to input materials, leaving 54-65% for creative work. But the analysis assumes 500-5,000 lines of content. For content exceeding 5,000 lines, headroom drops below 54%. For content exceeding 8,000 lines, the agent runs out of context for building a complete page.

**How it manifests:** The agent truncates its output -- the HTML page is incomplete, missing sections near the end of the content. The agent may write the conviction brief and reflection (smaller files, written first) but produce a partial HTML file. Structural validation may pass (> 500 bytes, contains `<html>`, has 5+ sections) even though the page is incomplete.

**Severity: HIGH for long content, LOW for typical content.** Most content is 1,000-4,000 lines. But this is an edge case that will occur eventually, and the failure is silent (no error, just incomplete output).

**Mitigation:** The orchestrator should measure content file length BEFORE spawning the Window 1 agent. If content exceeds 5,000 lines, warn the user. If content exceeds 8,000 lines, suggest splitting the content or using a summary approach. The plumbing spec checks content existence (Step 0.3) but not content length.

---

### W1-05: The Metaphor Is Decorative, Not Structural

**The risk:** The builder derives a metaphor that sounds compelling in the conviction brief but has no structural manifestation in the CSS. "This page descends like geological strata" produces a brief with depth language but the page uses flat, identical sections with only background-color changes.

**How it manifests:** The conviction brief reads well. The HTML exists. Gates may pass (container width correct, warm palette, etc.). But the PA auditors describe a flat, monotonous page where nothing changes between sections. The metaphor is announced (labels reference geology) but not structural (the CSS doesn't encode depth through compression, weight, or density changes).

**Severity: HIGH.** This is the Flagship experiment's exact failure mode, now in a different architectural frame. The process adversarial (Attack 9) identifies this: "Conviction and Direction Is Compliance Wearing a Turtleneck." The brief IS a specification, just with poetic language. The LLM compiles with the brief's language without achieving the brief's perceptual intent.

**Mitigation:** The only backstop is the PA auditors. If the metaphor is decorative, auditors will describe monotony ("each third got the same treatment," "nothing changes between sections"). This routes to REFINE, which is correct. But the REFINE builder receives the same brief and may produce the same decorative metaphor in a different arrangement. There is no gate that checks "is the metaphor structural?" -- and there probably cannot be, because that is a creative judgment.

**Current coverage:** PARTIAL. PA auditors should catch this. But the 2-auditor standard mode has only 2 chances to notice, and the question set may not surface it directly. E-07 ("pick any two adjacent sections, what changes between them?") is the best question for this, assigned to Auditor A in standard mode.

---

### W1-06: Builder Uses Wrong Token Values or Invents Colors

**The risk:** Despite reading tokens.css, the builder uses colors not in the palette, invents spacing values not on the 4px scale, or uses typefaces not in the trinity. LLMs frequently approximate values from memory rather than copying exactly.

**How it manifests:** GR-05 (warm palette) catches cold colors but not warm-palette colors that are simply not in tokens.css. GR-06 catches wrong fonts. GR-03 catches wrong container width. But there is no gate for "are the spacing values from the 4px scale?" or "are the background colors from the token palette?"

**Severity: LOW-MEDIUM.** Off-palette colors that are warm still satisfy the identity. Off-scale spacing that stays within gap limits still passes gates. The practical impact is reduced consistency across pages, not broken pages. But over time, token drift erodes the design system.

**Mitigation:** A "token compliance" gate could check whether background and text colors in the CSS match values defined in tokens.css. This was not included in the surviving 28 gates -- it would be a new gate. Consider adding as ADVISORY.

---

## SECTION 2: WINDOW 2 FAILURE MODES (EVALUATE)

### W2-01: Playwright Crashes or Fails to Install

**The risk:** The Playwright MCP tool is an external dependency. If the browser is not installed, `browser_navigate` fails. If the MCP connection drops, all Playwright operations fail. The plumbing spec handles this with error paths, but the error path is "report to user, stop."

**How it manifests:** The pipeline stops after Window 1 with no evaluation. The user has a page but no gate results and no PA audit. The entire evaluation infrastructure is unavailable.

**Severity: HIGH (when it happens), LOW (probability).** Playwright MCP is generally reliable but has documented failure modes (port conflicts, browser not installed, CDP connection timeouts). The impact of total Playwright failure is complete loss of the evaluation window.

**Mitigation:** The plumbing spec includes `browser_install` retry (Step 2 error handling). Port cycling (8888 -> 8889 -> 8890) handles port conflicts. But there is no fallback evaluation mode -- if Playwright is truly unavailable, the pipeline stops. Consider: could the orchestrator do a minimal text-based evaluation (Read the HTML, check for obvious issues) as a degraded-mode fallback?

---

### W2-02: Screenshots Are Dark or Unreadable

**The risk:** The DPR handling (3 fallback strategies) has been battle-tested and generally works. But edge cases exist: pages with dark-on-dark backgrounds produce screenshots that look "blank" to the quality check (GR-62) even though the page is intentionally dark. The Yegge Gas Town run had this exact issue: DPR workaround (960x600 -> 1440x900 CSS) worked but caused 8 dark screenshots.

**How it manifests:** GR-62 (screenshot quality) may fail because the page IS dark -- intentionally dark backgrounds with light text produce screenshots that have low brightness values. The gate checks for "blank" screenshots (< 5KB, consecutive blanks, blank ratio > 20%). A page with a dark aesthetic may have multiple dark screenshots that trigger the blank detection.

**Severity: MEDIUM.** The plumbing spec says: if GR-62 fails twice, "proceed with warning. PA auditors will describe blank images, which is itself diagnostic." This is correct but wastes auditor cycles. Auditors looking at genuinely dark (but intentionally dark) screenshots may describe "I can't see much" when the page is actually fine at full brightness.

**Mitigation:** GR-62's threshold may need adjustment. Currently checks for screenshots < 5KB -- a dark screenshot with content is typically > 5KB. The real risk is screenshots that are dark because of DPR issues (wrong scale = wrong viewport = dark areas captured). The DPR fallback chain should prevent this, but testing against dark-themed pages specifically would validate.

---

### W2-03: Auditors Anchor on Each Other's Responses

**The risk:** The process spec says auditors run in PARALLEL and never see each other's work. This is enforced by prompt construction -- each auditor receives only their own questions and screenshots. But if the orchestrator accidentally includes one auditor's report in another's prompt (a prompt construction bug), anchoring occurs.

**How it manifests:** Two auditors describe the page identically because one read the other's report. The routing decision sees "convergence" and treats it as strong signal, when it is actually contamination.

**Severity: LOW (probability) x HIGH (impact).** The plumbing spec is explicit about information isolation. But the orchestrator is an LLM constructing prompts -- it could accidentally paste the wrong content. The contamination check (Step 4.9) looks for CSS vocabulary in auditor reports but does NOT check whether one report contains text from another.

**Mitigation:** Add a cross-auditor contamination check: after all reports are collected, check whether Auditor B's report contains any 10+ word phrase from Auditor A's report. Exact match of long phrases would indicate contamination.

---

### W2-04: The Gate Runner JS Has a Bug That Silently Passes Failing Gates

**The risk:** The gate runner is a JavaScript file with ~28 gate functions. Each function queries the DOM and checks a condition. If a function has a bug (wrong CSS selector, incorrect threshold comparison, missing null check), it reports PASS for a gate that should FAIL.

**How it manifests:** The gate results show all 28 gates passing. The routing decision trusts gate results. A page with a genuine identity violation (e.g., container at 1100px) ships because the gate function had a selector that didn't find the container element and defaulted to PASS.

**Severity: HIGH.** A silently passing gate is worse than a missing gate -- missing gates are caught by GR-48 (coverage meta-gate). But a gate that RUNS and reports PASS incorrectly is invisible. The coverage gate only checks "did all gates produce results," not "did all gates produce CORRECT results."

**Mitigation:** The gate runner should be tested against known-failing pages before deployment. Create 2-3 test HTML pages that deliberately violate specific gates (one with 1100px container, one with cold colors, one with 200px stacked gaps) and verify the gate runner catches them. This is a one-time validation, not a per-run check.

**Current coverage:** NONE. The gate runner is trusted implicitly. GR-48 covers execution completeness, not execution correctness.

---

### W2-05: The Routing Logic Misclassifies Auditor Sentiment

**The risk:** In standard mode (2 auditors, no Weaver), the orchestrator does keyword scanning to determine creative_verdict. The keyword lists are:
- RETHINK_WORDS: "start over", "fundamentally wrong", "does not belong", etc.
- REFINE_WORDS: "flat", "monotonous", "tired", "repetitive", etc.
- SHIP_WORDS: "would ship", "ready", "complete", "polished", etc.

This is a bag-of-words classifier applied to experiential prose. It is fragile.

**How it manifests:** An auditor writes "The page has a polished header that gives way to flat, tired sections in the middle. The bottom third is monotonous." This contains: 1 SHIP_WORD ("polished"), 3 REFINE_WORDS ("flat", "tired", "monotonous"). The keyword scan says REFINE (3 > 1). Correct in this case. But consider: "The page would ship if the mid-section weren't so repetitive." Contains: 1 SHIP_WORD ("would ship"), 1 REFINE_WORD ("repetitive"). Score: tied. Default: SHIP. But the auditor clearly said REFINE conditionally.

**Severity: MEDIUM.** The keyword scan is a reasonable heuristic but will produce incorrect classifications in edge cases. Conditional language ("would ship if...", "almost complete but...") is common in auditor prose and defeats bag-of-words classification.

**Mitigation options:**
1. Add a CONDITIONAL_SHIP detection: if a SHIP_WORD appears in the same sentence as "if", "but", "except", or "unless", downgrade it to REFINE.
2. Add an explicit instruction to auditors: "End your Section 0 with exactly one word: SHIP, REFINE, or NO." This gives the orchestrator a clean signal without keyword scanning.
3. The high-stakes mode avoids this entirely (Weaver provides explicit verdict). Consider making explicit verdict mandatory even in standard mode.

**Current coverage:** The routing logic handles the basic cases but has no conditional-language detection.

---

### W2-06: 2-Auditor Standard Mode Misses Major Issues

**The risk:** The adversarial review (Attack 3) identifies this directly: the Mode 4 PA (9 auditors) caught the whitespace void that a 2-auditor PA missed entirely. With 2 auditors and non-overlapping question assignments, each issue is covered by exactly 1 auditor. If that auditor has a blind spot, the issue goes undetected.

**How it manifests:** A page with a significant whitespace void in the middle third passes the 2-auditor PA because Auditor A's questions (E-01 through E-10) don't directly ask about voids, and Auditor B is focused on E-11 through E-20. The cold-look Section 0 is the overlap, but both auditors might notice the void and describe it differently, or one might focus on the header instead.

**Severity: HIGH.** This is the project's most historically important failure mode, and the 2-auditor default mode has reduced redundancy by 78% (from 9 auditors to 2). The adversarial review's recommendation to add a SPATIAL VOID question is not implemented in the current question set.

**Mitigation:**
- Follow the adversarial recommendation: add a void-detection question like "Scroll through quickly -- is there a moment where the page seems to disappear?" Assign it to both auditors (breaking the non-overlap principle for this one critical question).
- Lower the threshold for high-stakes mode: consider making 5 auditors the default and 2 auditors the "quick" mode.
- Rely on GR-13 + GR-14 (stacked gap gates) as the programmatic backstop. But as noted, these catch CSS-level stacking, not all forms of visual void.

---

### W2-07: The Weaver Ignores or Contradicts Auditor Findings

**The risk:** The Weaver is a creative synthesizer with its own perception. It reads screenshots first (experiential anchor) and then reads auditor reports. If the Weaver's experiential anchor strongly disagrees with the auditors, the Weaver may dismiss auditor findings as "divergence" rather than treating them as convergent truth.

**How it manifests:** 4/5 auditors describe flatness in the mid-section. The Weaver's experiential anchor says "the mid-section has subtle warmth." The Weaver writes WHAT IS WORKING: "the mid-section's restraint" and verdict: SHIP. The routing decision follows the Weaver's verdict. The page ships with a compositional problem that 4/5 auditors identified.

**Severity: MEDIUM.** The Weaver has creative authority by design -- "the Weaver's creative judgment is authoritative for the creative axis" (plumbing spec, STEP 5). But this authority is only appropriate when the Weaver exercises it AFTER genuinely engaging with auditor convergence.

**Mitigation:** The Weaver prompt says "Notice where 3+ agree (convergence) and where 1 disagrees (divergence). Convergence confirms truth." This is strong language. But the Weaver is an LLM that can rationalize disagreement. Consider adding: "If 3+ auditors converge on the same observation, your synthesis MUST acknowledge it, even if your own impression differs."

---

### W2-08: Brief Verification Gates (BV-01 through BV-04) Are Too Shallow

**The risk:** The BV gates check for the EXISTENCE of section headers (does the brief contain "WORLD" or "World"?). They do not check for CONTENT. A brief that contains "## WORLD-DESCRIPTION\n\n(see above)" passes BV-01.

**How it manifests:** The builder writes a brief with all required section headers but with minimal or placeholder content under each. BV-01 through BV-04 all pass. The pipeline proceeds as if a full conviction brief exists. But the REFINE builder reads a brief with no actual creative direction.

**Severity: MEDIUM.** The old pipeline had BV-01 checking minimum lines per tier section. The new BV gates check only for keyword presence. This is a regression in brief verification depth.

**Mitigation:** Re-add the minimum-content check: each section must have >= 3 lines of content below its header. This is still a structural check (counting lines), not a quality judgment.

---

## SECTION 3: WINDOW 3 FAILURE MODES (REFINE)

### W3-01: The REFINE Builder Makes the Page Worse

**The risk:** The REFINE builder has "full creative authority: restructure, rewrite, extend." They can rewrite CSS substantially, change layout approaches, and introduce new mechanisms. A REFINE builder who misunderstands the conviction brief or makes poor creative choices can degrade a page that was already decent.

**How it manifests:** The Window 1 builder produced a page scoring PA-05 2.5/4 (approaching COMPOSED). The REFINE builder, pursuing their ONE THING, restructures the layout and introduces a grid system that breaks the compositional arc. The refined page scores PA-05 1.5/4 (FLOOR).

**Severity: HIGH.** The plumbing spec includes a safety mechanism: `output-pre-refine.html` backup (Step 7.0). But the pipeline does NOT run a second PA after REFINE by default. The post-REFINE evaluation is gates-only (Step 8). If the REFINE builder's changes pass gates but degrade composition, the degraded page ships.

**Mitigation:** The backup exists. But the decision to USE the backup is not specified. After post-REFINE gates pass, the pipeline ships the refined version unconditionally. Consider: run a quick 2-auditor PA after REFINE in ALL cases (not just user-escalated). If auditor cold-look is worse than the pre-REFINE cold-look, offer the user a choice between versions. This adds ~12 minutes but prevents shipping a degraded page.

---

### W3-02: The REFINE Builder Replaces the Metaphor Despite Being Told Not To

**The risk:** The REFINE prompt says "You may NOT replace the metaphor." But the REFINE builder has creative authority to "restructure HTML sections, rewrite CSS substantially, change layout approaches." If the builder's ONE THING is a new visual direction that effectively IS a new metaphor (without explicitly declaring it), the metaphor has been replaced in practice.

**How it manifests:** The conviction brief says "geological descent." The REFINE builder's ONE THING is "make the sections feel like rooms in a building." They rewrite the CSS with architectural language (`.hallway`, `.chamber`, `.threshold`). The metaphor has shifted from geological to architectural. The brief is not updated (by design -- "the REFINE builder does not update the conviction brief").

**Severity: MEDIUM.** If the new metaphor produces a better page, this is arguably a good outcome. If the new metaphor conflicts with the content, the disconnection between the brief and the page creates confusion for any future reference. The post-REFINE gates won't catch this (no gate checks metaphor consistency). A PA would catch it (auditors would describe the page's actual feel, which wouldn't match the brief).

**Mitigation:** Accept this as a feature, not a bug. The REFINE builder's creative authority is intentionally broad. If they produce a better page, the metaphor shift is a creative contribution. The unupdated brief is a documentation gap, not a quality gap. If this becomes a recurring problem, add an instruction: "If your creative direction diverges significantly from the conviction brief, note the divergence in your reflection."

---

### W3-03: The REFINE Builder Produces Identical Output

**The risk:** The REFINE builder reads the artifact, forms an impression, reads auditor reports, reads the reflection, and... decides everything is fine. Their ONE THING is "polish the typography." They make trivial CSS changes (adjust a font-size by 1px, tweak a margin by 4px) and ship essentially the same page.

**How it manifests:** `output.html` is technically "modified" (timestamp differs) but substantively unchanged. The post-REFINE gates pass (they passed before too). The pipeline reports SHIP with a note that REFINE was completed. But no compositional improvement occurred. The REFINE cycle consumed time and Opus tokens for zero value.

**Severity: LOW.** This is wasteful but not harmful. The page is no worse. The cost is ~10-15 minutes of Opus compute and user time. The plumbing spec says "Agent produces identical HTML: not a problem -- the builder decided nothing needed changing."

**Mitigation:** Accept this. The plumbing spec already handles it correctly. If the REFINE builder believes the page is fine, shipping it unchanged is the honest response.

---

### W3-04: REFINE Builder's Context Budget Is Too Tight

**The risk:** The Window 3 design acknowledges this: "creative headroom may drop to ~15%" for large content + large artifacts. The REFINE builder loads: artifact HTML (800-2000 lines), auditor reports (80-120 lines), reflection (20 lines), conviction brief (50 lines), raw content (varies), mechanism catalog (750 lines), components CSS (944 lines), identity files (600 lines). That is 3,244-4,484 lines BEFORE creative headroom.

**How it manifests:** For a complex page (2,000 lines HTML) with long content (5,000 lines), the REFINE builder's total input is ~10,000 lines. At ~200K token context, this leaves ~40-50% for thinking and output. Acceptable for CSS modifications, but tight for the "restructure HTML substantially" permission the REFINE builder has.

**Severity: MEDIUM for complex pages, LOW for typical pages.** The Window 3 design suggests dropping mechanism catalog and components CSS for tight contexts, but this is not encoded in the plumbing spec -- it's left to the orchestrator's judgment (which is prohibited -- "zero interpretable instructions for programmatic steps").

**Mitigation:** Add a context budget check to Step 7. Calculate total input lines. If > 8,000, drop mechanism catalog from the REFINE prompt (the builder has the artifact's CSS as vocabulary reference). If > 10,000, warn the user. Encode this as a binary rule, not a judgment call.

---

## SECTION 4: PLUMBING FAILURE MODES

### P-01: File Read Fails Silently

**The risk:** The orchestrator reads files to construct agent prompts (Step 1, 4, 5, 7). If a Read call fails (file doesn't exist, permission denied, file is empty), the prompt is constructed without that file's content. The orchestrator may not notice the missing content and proceed with an incomplete prompt.

**How it manifests:** The Window 1 builder's prompt is missing components.css because the file path is wrong. The builder produces a page without using any design system components. Gates catch some issues (GR-10 cross-page DNA checks for component classes) but many custom implementations pass.

**Severity: MEDIUM.** The plumbing spec's artifact chain (every step verifies the previous step's output) catches MISSING OUTPUT FILES but not MISSING INPUT FILES. There is no verification that the orchestrator successfully read all reference files before constructing agent prompts.

**Mitigation:** Add a READ VERIFICATION step before spawning each agent: after constructing the prompt, count the number of file-content sections included. If fewer than expected, log a warning. The plumbing spec could specify: "For Window 1, prompt MUST contain 7 content sections. If fewer, report to user."

---

### P-02: HTTP Server Port Conflict

**The risk:** The orchestrator serves HTML via `npx http-server` on port 8888. If another process uses port 8888 (previous pipeline run, dev server, another tool), the server fails to start.

**How it manifests:** Screenshots capture fails because Playwright navigates to `http://localhost:8888/output.html` and gets a connection refused or a different page from a different server.

**Severity: LOW.** The plumbing spec handles this: "Port 8888 in use: try 8889, then 8890." But the WORST case is more subtle: another HTTP server IS running on 8888 serving DIFFERENT content. Playwright navigates successfully and takes screenshots of the WRONG page. The gate runner runs on the wrong page. The PA auditors see the wrong page. The routing decision is based on the wrong page.

**Mitigation:** After starting the server, verify the served content. Navigate to the URL and check `document.title` or a known element from the built page. If the page content doesn't match expected (e.g., check for the `<!-- EXPERIENTIAL-CHECK: -->` comment from GR-63), the server is serving wrong content.

---

### P-03: Orchestrator Skips Steps Despite Artifact Chain

**The risk:** The plumbing spec's artifact chain requires each step to Read or Glob the previous step's output. But the orchestrator is an LLM following instructions. It CAN skip the Glob call and proceed to the next step. The artifact chain makes skipping VISIBLE in the conversation log but does not PREVENT it.

**How it manifests:** The orchestrator skips Step 2.7 (screenshot verification) and proceeds to Step 4 (spawn auditors) without confirming screenshots exist. The auditors receive empty screenshot paths and produce reports describing "I couldn't see the page." The routing keyword scan finds "couldn't" but no REFINE or SHIP words, defaulting to REFINE. A REFINE cycle is wasted.

**Severity: MEDIUM.** The plumbing spec is designed for maximum compliance, but LLM compliance with multi-step protocols is never 100%. The "path of least resistance" principle (following instructions must be EASIER than skipping) helps, but complex protocols with 40+ tool calls have inherent skip risk.

**Mitigation:** The plumbing spec already addresses this well. The key additional mitigation: make CRITICAL verification steps (1.4, 2.7, 3.4, 4.8) produce artifacts that are consumed by the next step. If the verification step produces a file (e.g., `_screenshot-manifest.txt` listing all screenshot paths), and the next step reads that file to get its inputs, the chain becomes harder to skip because the next step's INPUT depends on the verification step's OUTPUT.

---

### P-04: The Orchestrator Interprets When It Should Route

**The risk:** The plumbing spec specifies "ZERO INTERPRETABLE INSTRUCTIONS for programmatic steps." But several steps involve the orchestrator making judgment calls that the spec frames as binary:

1. Step 2.6 (experiential scan): "is this text readable?" -- This requires visual judgment.
2. Step 6.4 (mechanical patching): "find the CSS property mentioned in detail, change its value" -- This requires understanding gate failure details and knowing which CSS property to edit and what value satisfies the gate.
3. Step 6.3 (BLOCKING-USABILITY routing): The spec says "patch usability CSS issues using Edit tool" -- but which CSS properties fix a usability issue requires judgment.

**How it manifests:** The orchestrator's mechanical patching produces incorrect CSS. For example, GR-11 fails with "zones 3-4 background delta: 8 RGB." The orchestrator attempts to fix it by changing zone 4's background, but picks a color that breaks GR-05 (warm palette) or creates a new GR-11 failure with zones 4-5. The cascading fix attempts create more problems.

**Severity: MEDIUM.** Mechanical patching is presented as "no judgment needed" but actually requires CSS understanding. An orchestrator that changes `background: #F0EBE3` to `background: #E0D5C5` to increase the delta might produce a valid fix. An orchestrator that changes it to `background: #C0B0A0` might create an ugly page that passes gates but looks wrong.

**Mitigation:** Define a SAFE PATCH LIBRARY for common gate failures:
- GR-03 (container width): `max-width: 960px` -- always safe
- GR-15 (single margin): reduce value to 96px -- always safe
- GR-67 (footer text): increase to 12px -- always safe
- GR-11 (bg delta): UNSAFE to patch mechanically -- the orchestrator cannot know which direction to move the color without understanding the compositional context

For GR-11 and other perception gates, consider routing mechanical failures to the REFINE builder instead of patching in-window.

---

### P-05: The Gate Runner and PA Auditors Reach Contradictory Conclusions

**The risk:** This is identified in the adversarial review (Attack 5) but not fully resolved by the process design. Gates and PA evaluate "orthogonal dimensions" -- but they evaluate the SAME page. When they reach contradictory conclusions, the routing decision must resolve the conflict.

**How it manifests:**
- **Scenario A:** Gates PASS, PA says REFINE. The page is mechanically compliant but compositionally flat. Resolution: REFINE (correct -- the PA addresses what gates can't measure).
- **Scenario B:** Gates FAIL (GR-11 bg delta), PA says SHIP. The page has imperceptible backgrounds (gates catch it) but auditors think it "feels warm and cohesive" (they don't perceive the distinction). Resolution: PATCH_THEN_SHIP (questionable -- the patch changes colors the auditors approved of).
- **Scenario C:** Gates PASS, PA says NO/RETHINK, but gates found the page mechanically excellent. Resolution: RETHINK (the gates are irrelevant to the creative judgment). Correct, but the gate pass might tempt the orchestrator to SHIP.

**Severity: MEDIUM.** Scenario B is the most dangerous: mechanical patching changes a page the auditors approved. The patched version was never seen by any auditor. The auditors said SHIP about a page that no longer exists (the patched version is different).

**Mitigation:** For Scenario B, after mechanical patching, run a quick auditor verification: show 2 auditors the patched screenshots and ask "does this still feel the same as the version you saw?" This adds 10 minutes but prevents shipping an unseen version.

---

## SECTION 5: EDGE CASES

### E-01: Very Short Content (< 500 Words, < 3 Paragraphs)

**The risk:** The TC derivation assumes content rich enough to have tension, register shifts, and compositional arc. Content like "About Us: We are a design agency founded in 2020. Our team of 5 designers creates bold, accessible digital experiences." has no meaningful tension.

**How it manifests:** The builder runs the TC skill's Phase 1 (4 core axes) and finds nothing. Phase 2 (tension derivation) produces zero genuine tensions -- the content is too short to fight the design system. Phase 3 (metaphor collapse) produces a weak metaphor or the zero-tension path ("apply design system defaults").

**Severity: MEDIUM.** The adversarial review (Attack 4) identifies this. The TC skill's zero-tension path is 2 lines: "Skip Phases 3-4. Apply design system defaults directly." But "defaults" are unspecified. What IS a design system default page? The pipeline produces output.html, but it may be a minimal page with no compositional depth -- which is arguably correct for short content, but the pipeline's infrastructure (TC + PA + gates) is massive overkill.

**Mitigation:** Add an early escape: if content is < 500 words, ask the user "This is very short content. Run full creative process or use simple layout mode?" Simple layout mode: skip TC derivation entirely, build a clean 1-2 zone page with standard components, skip PA, run gates only. This saves ~90% of pipeline time for content that doesn't need it.

---

### E-02: Very Long Content (> 10,000 Words)

**The risk:** The Window 1 context budget analysis assumes 500-5,000 lines. Content at 10,000+ words (~15,000-20,000 lines with markdown) consumes 40-60% of the agent's context window BEFORE any vocabulary files load.

**How it manifests:** The builder runs out of context before finishing the HTML page. The page truncates mid-content. Sections near the end of the content are missing or abbreviated. The builder may write the conviction brief and reflection but produce an incomplete page.

**Severity: HIGH.** This is a hard constraint of the combined-window model. The old pipeline's separate TC and BUILD windows each had full context budgets. The combined window has one budget for both derivation AND building.

**Mitigation:**
1. Content length check at Step 0: warn user if > 5,000 words, suggest splitting if > 8,000 words.
2. For long content, provide a content SUMMARY to the TC derivation phase and the full content to the build phase (in sections). This requires splitting Window 1 into two sub-phases, which partially re-introduces the multi-window model.
3. Accept that the combined TC+BUILD model has a content length ceiling. For very long content, the old multi-window pipeline may have been more appropriate.

---

### E-03: Technical Content (Code Blocks, API Documentation)

**The risk:** The adversarial review (Attack 6) identifies this: the framework is optimized for long-form prose with emotional content. Technical content (function signatures, parameter tables, code examples) has different requirements. Users SCAN reference material; they don't READ it like an essay. The scroll experience is irrelevant because users jump to their method via search.

**How it manifests:** The builder runs TC derivation on API documentation and produces a metaphor like "the API as a toolkit." The metaphor is weak. The builder applies compositional arc (building tension, climax, resolution) to reference material that needs flat, scannable structure. The resulting page looks artistic but is harder to use than a plain reference page.

**Severity: MEDIUM.** The TC skill's Phase 0 content type detection should route technical content differently. But the current TC skill's content-type routing is binary: prose/mixed/visual. API documentation might be classified as "mixed" and receive the full TC treatment when it needs a reference-page pattern.

**Mitigation:** Add explicit content-type routing for reference material: if the content contains > 50% code blocks, or has > 20 H3+ headings (method signatures), or contains "Parameters:", "Returns:", "Example:" patterns, route to a REFERENCE MODE that skips metaphor derivation and applies standard reference-page patterns (two-column layout, sticky sidebar navigation, syntax highlighting, collapsible sections).

---

### E-04: Content with No Clear Section Structure

**The risk:** The conviction brief's CONTENT MAP section assumes the content has identifiable sections with distinct registers. Content that is a single long narrative with no headings, no register shifts, and no structural features produces an empty content map.

**How it manifests:** The builder writes a conviction brief with 5 sections but the CONTENT MAP is vague: "Single continuous narrative, ~4,000 words, no section breaks." The builder then needs to INVENT section boundaries during building. The zone architecture has no content-driven anchor points.

**Severity: LOW.** The builder has creative authority to create sections. A skilled builder turns a long narrative into zones based on content shifts they discover during deep reading. The risk is that a less skilled builder creates arbitrary section breaks.

**Mitigation:** The TC skill's Phase 0 (content assessment) should guide the builder to identify natural section boundaries even in unstructured content: "Look for register shifts, topic changes, transitions from personal to analytical, or any moment where the writing's energy changes."

---

### E-05: Content That Is Already Well-Structured HTML

**The risk:** The user provides content that is already a complete, well-designed HTML page and asks `/build-page` to remake it. The builder reads the content as HTML, not markdown. The TC derivation encounters CSS classes, HTML tags, and existing design decisions instead of raw prose.

**How it manifests:** The builder's conviction brief describes the EXISTING page's design rather than deriving a new metaphor from the content. The builder effectively ports the existing page into the KortAI design system rather than composing from scratch.

**Severity: LOW.** This is a user error (providing HTML instead of markdown). The orchestrator's Step 0 could check content file extension and warn if it's `.html`.

**Mitigation:** Step 0 content validation: if content file extension is `.html` or `.htm`, warn the user: "This appears to be an HTML file. /build-page expects markdown content. Continue anyway?"

---

## SECTION 6: SILENT FAILURES

### S-01: The Phase Gate Between Derivation and Building Is Unverifiable

**The risk:** Identified in W1-01 but worth emphasizing as a silent failure. The most important architectural decision in Window 1 (derive metaphor BEFORE reading vocabulary) has ZERO verification. The orchestrator cannot confirm that the agent respected the checkpoint. The conviction brief's existence proves it was written; it does not prove it was written before vocabulary files were consumed.

**How it manifests:** The page looks fine. The brief exists. The reflection exists. Everything passes gates. PA auditors may or may not notice a difference. The process ran but the causal mechanism (conviction-first) may not have operated. Nobody knows.

**Current coverage:** ZERO. This is the process's biggest silent failure risk.

---

### S-02: An LLM Auditor Does Not Actually Look at Screenshots

**The risk:** PA auditors receive screenshot file paths and are instructed to read them. But an LLM can produce plausible-sounding perceptual descriptions without actually processing the image data. If the Read tool call for a screenshot fails (file doesn't exist, wrong path), the auditor may generate a response that sounds like it's describing the page based on context clues from the conviction brief excerpt and question wording.

**How it manifests:** Auditor A's report describes "warm tones fading to a deep brown" -- but the page actually uses blues and grays. The report SOUNDS correct based on the conviction brief's world-description (which mentions warm descent). The contamination check (Step 4.9) doesn't catch this because the report uses experiential language, not CSS terms.

**Severity: HIGH.** This is a fundamental LLM risk. The mitigation is the screenshot quality check (GR-62) and the fact that auditors DO actually process images when provided. But if the image paths are wrong, the auditor has no image data and confabulates.

**Mitigation:**
1. The orchestrator should verify screenshot paths resolve to actual files (Step 4.4 does this via Glob).
2. Add a GROUNDING question: "What color is the very top of the page?" This has a verifiable answer. If the auditor says "deep charcoal" and the page header is cream-colored, the auditor is confabulating.
3. The Weaver (high-stakes) is a partial mitigation: if 5 auditors produce consistent descriptions that match the screenshots, confabulation is unlikely.

---

### S-03: Gate Runner Returns Partial Results Without Error

**The risk:** The atomic gate runner (Step 3.2) wraps each gate section in try/catch. If `runAntiPatternGates()` throws, the error is caught and logged in the `errors` array, but the remaining gates from that section are missing. The GR-48 coverage gate checks for expected gates but only checks a HARDCODED list. If the expected list is incomplete or out of date, missing gates go unnoticed.

**How it manifests:** The expected gates array in Step 3.2 lists 19 gates. But the actual gate runner has 28 gates. The 9 unlisted gates could all fail silently (exceptions caught, no coverage check). GR-48 passes because all 19 "expected" gates produced results.

**Severity: MEDIUM.** This is a maintenance risk: the expected gates array in the plumbing spec must stay synchronized with the actual gate runner code. If new gates are added to the runner but not to the expected array, they are never coverage-checked.

**Mitigation:** The expected gates array should be derived FROM the gate runner code, not hardcoded in the plumbing spec. The gate runner itself should export its gate registry, and GR-48 should check against that registry. This eliminates the synchronization risk.

---

### S-04: Mechanical Patching Changes Page Without Re-evaluation

**The risk:** When the routing is PATCH_THEN_SHIP, the orchestrator patches CSS values and re-runs failed gates. But the patched page is never seen by any auditor. The auditors evaluated the UNPATCHED page. The PATCHED page may look different (changed background colors, adjusted spacing, different contrast).

**How it manifests:** Auditors said SHIP about a page with backgrounds at delta 8 RGB (imperceptible but warm-toned). The orchestrator patches the backgrounds to delta 18 RGB. The page now has visible color shifts that change the compositional feel. But no auditor has seen this version.

**Severity: MEDIUM.** For trivial patches (footer font-size 10px -> 12px), the risk is negligible. For perception-gate patches (background color changes, spacing adjustments), the risk is real. The changed page may not feel the same as the page the auditors approved.

**Current coverage:** NONE. The patched page ships without any perceptual verification.

---

### S-05: The Orchestrator's Experiential Scan (Step 2.6) Is Unreliable

**The risk:** The orchestrator scrolls through the page "at reading speed" and checks for illegibility. But the orchestrator is an LLM reading Playwright snapshots. Its ability to detect illegible text depends on the snapshot's rendering quality, zoom level, and the LLM's vision capabilities. A small text element (11px footer text) on a low-contrast background may be technically illegible but the LLM reports no issues because the snapshot resolution doesn't show it clearly enough.

**How it manifests:** The orchestrator's experiential scan reports no usability issues. GR-60 (WCAG contrast) passes because contrast ratio is 4.6:1 (barely above threshold). GR-67 (footer text) passes because footer is 12px. But a specific callout element has 9px text on a warm-tone background with 3.8:1 contrast -- technically an accessibility violation but not caught by the gate runner's specific checks (GR-60 checks `body` text and headings, not all elements) and not caught by the orchestrator's visual scan.

**Severity: LOW.** The gates catch the most common WCAG violations. Element-level WCAG scanning (checking EVERY text element against its computed background) is computationally expensive in Playwright. The PA auditors are the second backstop: they will report "I can't read this small text" if they encounter it.

**Mitigation:** Consider a comprehensive WCAG scan gate that checks ALL text elements, not just `body` and headings. This is expensive but catches edge cases. Alternatively, rely on the auditors and accept the scan as a coarse filter.

---

## SECTION 7: FREEDOM RISKS

### F-01: The Builder Produces a Page the User Doesn't Want

**The risk:** Maximum creative freedom means the builder can produce any page that satisfies the gates and works within the world. But the USER may have specific expectations (dark theme, dense layout, minimal whitespace) that the builder doesn't know about.

**How it manifests:** The user provides a research synthesis and expects a dense, reference-style page. The builder derives a "geological descent" metaphor and produces a dramatic, wide-spaced page with large typography and atmospheric transitions. The page is beautiful but not what the user wanted.

**Severity: MEDIUM.** The process has no mechanism for user intent beyond the content itself. The user invokes `/build-page` and gets whatever the builder's creative vision produces.

**Mitigation:** Step 0 could ask the user for optional preferences: "Any specific requirements? (e.g., 'dense layout', 'dark theme', 'reference-style', or leave blank for full creative freedom)." User preferences would be included as additional constraints in the Window 1 prompt -- AFTER the receiving principle and TC skill, so they inform but don't dominate the creative process.

---

### F-02: Creative Freedom Produces Identity Violations That Gates Don't Cover

**The risk:** The 28 surviving gates check specific, known violation patterns. But creative freedom can produce NEW violation patterns that no gate anticipates. A builder who takes "sharp edges" to an extreme might produce a page with 10px borders everywhere (not prohibited by GR-09, which only checks the 4px/3px/1px hierarchy exists, not that borders aren't excessive).

**How it manifests:** The page has thick borders on every element. The page has 15 different background zones in rapid succession (each meeting the 15 RGB delta threshold but creating visual noise). The page uses the font trinity but at extreme sizes (72px headings, 10px body text). None of these violate specific gates, but they produce a page that doesn't feel like the design system.

**Severity: LOW.** The PA auditors catch these issues experientially: "the borders feel overwhelming," "the colors change so rapidly I can't focus," "the text sizes are jarring." The routing decision sends these to REFINE. The gates are not the only backstop -- the PA catches what gates can't.

**Mitigation:** Accept this as the designed behavior. The plumbing/freedom architecture means gates catch the floor (minimum identity compliance) and PA catches the ceiling (creative quality). The gap between floor and ceiling is where creative freedom lives. Some outputs will be surprising -- that is the feature.

---

### F-03: No Backstop for a Genuinely Bad Page

**The risk:** What if the page is not just "non-ideal" or "needs refinement" but genuinely BAD? Broken layout, missing content, incoherent design. The pipeline has no ABORT mechanism -- it proceeds through evaluation and refinement even for severely broken builds.

**How it manifests:** The builder produces a page with 2 sections (out of 10 content sections), no footer, garbled CSS, and half the content missing. Structural validation passes (> 500 bytes, contains `<html>`, has 5+ elements). The pipeline proceeds to screenshots, gates, PA. Gates fail massively. PA auditors describe a broken page. Routing says RETHINK. A new builder is spawned. But if the second builder also fails, the pipeline ships "the better of the two artifacts" -- both of which are terrible.

**Severity: MEDIUM.** The RETHINK protocol (Step 6.5) handles this: maximum 2 RETHINK attempts, then ship the better artifact. But "better of two terrible artifacts" is still a terrible artifact.

**Mitigation:** Add a MINIMUM QUALITY FLOOR gate check between Window 1 and Window 2. Beyond structural validation, check: "does the HTML contain at least 80% of the content's word count?" (content coverage check). "Does the CSS contain at least 500 characters?" (not a skeleton page). "Does the page have at least 3 distinct background colors?" (not a single-zone white page). If ANY minimum quality floor fails, do NOT proceed to full evaluation -- report to user immediately.

---

## SECTION 8: HISTORICAL FAILURES -- ADDRESSED VS. UNADDRESSED

### Addressed by the New Process

| Historical Failure | How Addressed | Confidence |
|-------------------|---------------|------------|
| Container width violation (4/5 Phase D pages) | GR-03 REQUIRED gate, conventions brief states 940-960px | HIGH |
| Imperceptible backgrounds (Flagship) | GR-11 bg delta >= 15 RGB, GR-18 ghost mechanisms | HIGH |
| Stacked whitespace voids (S-09 loophole) | GR-13 CSS <= 120px, GR-14 visual <= 150px | HIGH |
| Sub-perceptual CSS (Flagship: 22% invisible CSS) | GR-18 ghost mechanisms gate | HIGH |
| Typography monotony (Flagship: all 16px/400) | GR-45 typography variation gate | MEDIUM |
| Builder never self-checked (Gas Town) | GR-63 experiential marker gate | MEDIUM |
| Recipe vs. checklist (recipe = success) | Builder derives own conviction brief (personal recipe) | MEDIUM |
| Inverted quality routing (builder got checklist, not recipe) | Combined TC+BUILD window -- builder derives AND builds | HIGH |
| 660:1 meta-to-output ratio | Pipeline reduced from 24,311 lines to ~5,000-7,000 lines | HIGH |
| Continuation bias in refinement | REFINE uses DIFFERENT Opus instance | HIGH |
| Illegible text ranked below imperceptible CSS | BLOCKING-USABILITY scan, GR-60 WCAG, usability priority | MEDIUM |

### NOT Addressed by the New Process

| Historical Failure | Why Not Addressed | Risk Level |
|-------------------|-------------------|------------|
| Decorative metaphor (announced not structural) | No gate can check "is the metaphor structural?" -- requires creative judgment | HIGH |
| Sonnet-for-builders (unexamined variable) | Process mandates Opus, but model capability vs. process is uncontrolled | UNKNOWN |
| Low-tension content types (API docs, tables, changelogs) | TC skill's zero-tension path is 2 lines, no specific patterns | MEDIUM |
| Confabulated reflections (Attack 1) | Unfalsifiable -- LLM reflections always mix genuine and confabulated content | MEDIUM |
| PA coverage gap with 2 auditors (Attack 3) | 2-auditor default mode has 78% less redundancy than Mode 4 | HIGH |
| CSS budget misallocation (22% on imperceptible micro-typography) | No gate checks CSS budget allocation -- builder has full authority | MEDIUM |
| Multi-coherence channel verification | GR-55 demoted to ADVISORY -- no binding check for channel richness | MEDIUM |
| Dark zone fatigue (6/10 auditors flagged in Gas Town) | No specific gate for excessive dark sections -- PA is the only backstop | LOW |
| 50:1 compression from research to constraints | Process reduces compression but conviction brief is still a compression | MEDIUM |

---

## SECTION 9: META-RISKS

### M-01: The Process Is Beautiful Theory, Untested in Practice

The most dangerous risk is the one the adversarial review (Attack 9) identifies: the entire generative frame (conviction-driven building, experiential auditing, creative refinement) is a theory about how LLMs should compose HTML pages. It has philosophical appeal and internal consistency. It has ZERO controlled evidence that it produces better pages than the compliance model it replaces.

The Middle-tier experiment produced PA-05 4/4 under the OLD model. The Flagship experiment produced PA-05 1.5/4 under a modified model. The Gas Town REFINE cycle achieved +1.5 under a pattern that resembles the new model. These are data points, not controlled experiments. The new process changes 10+ variables simultaneously (combined TC+BUILD, conviction-first ordering, 5-line receiving principles, 2 auditors, 28 gates, no explorations, etc.). If it produces better output, we cannot know WHICH change mattered. If it produces worse output, we cannot know WHICH change caused the regression.

**Recommendation:** The first 3 runs of the new process should be treated as experiments, not production. Run the same content through both old and new pipelines. Compare PA-05 scores. Only then retire the old pipeline.

### M-02: The Plumbing Spec Is 1,263 Lines for a "Simpler" Process

The old pipeline had a 1,450-line MANIFEST. The new plumbing spec is 1,263 lines. The process is simpler (3 windows vs. 7) but the specification is not substantially shorter. The complexity has shifted from ROUTING (which agent gets which file) to ENFORCEMENT (how to prevent an LLM from skipping steps).

This is not necessarily bad -- enforcement specifications prevent the failure modes they describe. But the team should recognize that "simpler process" does not mean "shorter specification." The spec's length is driven by error handling, artifact verification, and step-by-step tool call sequences, not by unnecessary complexity.

### M-03: Single Points of Failure

The new process has fewer agents but more single points of failure:
- **Window 1:** ONE agent does all creative work. If this agent produces a weak page, the entire pipeline's output depends on the REFINE builder to rescue it.
- **Routing decision:** ONE keyword-scan algorithm determines SHIP vs. REFINE vs. RETHINK. If the keywords are wrong, the routing is wrong.
- **Gate runner:** ONE JavaScript file runs ALL gates. If the file has a bug, all gates are affected.
- **Orchestrator:** ONE LLM follows a 1,263-line specification. If the orchestrator skips a critical step, the pipeline degrades silently.

The old pipeline's redundancy (17 agents, multiple passes, 57 gates) was expensive but resilient. The new pipeline's efficiency (3 windows, 5-7 agents, 28 gates) is cheaper but brittle.

---

## SUMMARY: TOP 10 RISKS BY SEVERITY

| Rank | Risk ID | Description | Severity | Current Mitigation |
|------|---------|-------------|----------|-------------------|
| 1 | S-01 | Phase gate between derivation and building is unverifiable | HIGH | NONE |
| 2 | W2-06 | 2-auditor standard mode misses major issues (whitespace void precedent) | HIGH | GR-13/GR-14 partial |
| 3 | W1-05 | Decorative metaphor passes all checks (Flagship repeat risk) | HIGH | PA only (partial) |
| 4 | W3-01 | REFINE builder makes page worse with no post-REFINE PA | HIGH | Backup exists but no quality comparison |
| 5 | W2-04 | Gate runner JS bug silently passes failing gates | HIGH | NONE (no test suite) |
| 6 | M-01 | Entire process is untested theory with zero controlled evidence | HIGH | First runs should be experiments |
| 7 | W1-01 | Agent skips TC derivation -- conviction brief is post-hoc | HIGH | Soft gate only |
| 8 | W2-05 | Keyword-based routing misclassifies conditional auditor language | MEDIUM | Partial (no conditional detection) |
| 9 | S-04 | Mechanical patching changes page without re-evaluation | MEDIUM | NONE |
| 10 | E-02 | Very long content exhausts Window 1 context budget | HIGH (when triggered) | NONE (no content length check) |

---

## RECOMMENDATIONS: 5 HIGHEST-LEVERAGE FIXES

### Fix 1: Add an Explicit Auditor Verdict Line (addresses W2-05, W2-06)

Require each auditor to end their Section 0 with exactly one word: `VERDICT: SHIP`, `VERDICT: REFINE`, or `VERDICT: NO`. This replaces keyword scanning with explicit signal. Cost: 1 line added to auditor prompt. Benefit: eliminates the entire keyword-scan fragility.

### Fix 2: Run Quick PA After REFINE (addresses W3-01, S-04)

Run 2 auditors (5 questions each) after REFINE, always. Compare cold-look verdicts with pre-REFINE cold-look verdicts. If post-REFINE is worse, offer user a choice between versions. Cost: ~10 minutes. Benefit: prevents shipping a degraded page.

### Fix 3: Content Length Check at Step 0 (addresses E-01, E-02)

Add to Step 0: count content words. If < 500 words, offer "simple layout mode" (skip TC, minimal page). If > 5,000 words, warn user. If > 8,000 words, suggest splitting. Cost: 5 lines in plumbing spec. Benefit: prevents two entire failure classes.

### Fix 4: Gate Runner Test Suite (addresses W2-04)

Create 3-5 test HTML pages with known gate violations. Run the gate runner against them and verify correct failures. Do this ONCE before deploying the reduced gate runner. Cost: 2-3 hours of one-time work. Benefit: confidence that 28 gates actually work correctly.

### Fix 5: Add Void Detection Question to Both Auditors (addresses W2-06)

Add question E-21: "Scroll through the page quickly. Is there a moment where the page seems to disappear -- where you're scrolling through emptiness?" Assign to BOTH auditors (breaking the non-overlap principle for this critical question). Cost: 1 extra question per auditor. Benefit: catches the project's most historically important failure mode with 2x redundancy.

---

**END OF POTENTIAL ISSUES ANALYSIS**
