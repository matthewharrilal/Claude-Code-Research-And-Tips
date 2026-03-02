# Adversarial Review: Implementation Plan (30-IMPLEMENTATION-PLAN.md)

**Reviewer:** plan-adversarial (Opus)
**Date:** 2026-02-27
**Verdict:** NEEDS FIXES (17 BLOCKING, 12 SIGNIFICANT, 9 MINOR)
**Method:** Read the 1,273-line implementation plan in full. Cross-referenced against all 5 audit reports (20-contamination-audit, 21-ceremony-vs-necessity, 22-potential-issues, 23-metacognitive-analysis, 24-holistic-review). Tested every step for executability by a fresh Claude Code instance with zero project context.

---

## RATING: NEEDS FIXES

The plan is genuinely good -- better than any prior pipeline specification in this project's history. The plumbing specification is detailed, the window specs have concrete prompt templates, the reconciliation log resolves most disagreements, and the artifact chain is well-designed.

But it has 17 BLOCKING issues that would cause a fresh Claude Code instance to fail, produce incorrect output, or silently violate the plan's own stated principles. These must be fixed before implementation.

---

## SECTION 1: COMPLETENESS

### B-01: Step 4.2 contradicts Reconciliation #5 (BLOCKING)

**Location:** Section 1, Step 4.2 (line ~152) + Section 6, Disagreement 5 (line ~1033-1043) + Appendix A line 4.2 (line ~1174)

**The problem:** Step 4.2 says: "IF `has_brief`: `Read({output_dir}/_tc-brief.md)`. Extract Sections 1 (WORLD-DESCRIPTION) + 4 (ARC) only." This extracts the conviction brief for auditor prompts. But Reconciliation #5 explicitly resolves: "No brief excerpt for auditors." The Appendix A tool call manifest even has a note: "NOTE: per Reconciliation #5, this is NOT sent to auditors."

Yet Step 4.4 constructs auditor prompts with "[D] Brief excerpt (sections 1+4 only)." The auditor prompt template (Window 2 spec, line ~418-482) does NOT include any brief excerpt. But the plumbing spec says to include it.

A fresh instance will see Step 4.2, extract the brief, see Step 4.4[D], include it in the auditor prompt, and violate Reconciliation #5 -- because the step-by-step instructions say to do it.

**Fix:** Delete Step 4.2 entirely. Remove "[D] Brief excerpt (sections 1+4 only)" from Step 4.4. Remove the "What Auditors Do NOT Receive" line about "full TC brief (only sections 1+4)" and replace with "conviction brief (any part)". Remove the 4.2 row from Appendix A. The auditor prompt template already correctly excludes the brief -- just align the plumbing steps with it.

---

### B-02: Step 4.8 contamination check contradicts the plan's own philosophy (BLOCKING)

**Location:** Section 1, Step 4.8 (line ~165)

**The problem:** Step 4.8 says: "For each report: string-search for 'px', 'rem', 'font-size', 'margin', 'padding', 'border-radius'. No CSS vocabulary contamination. WARN only (not blocking)."

The contamination audit (20, C-13/C-22) identifies this as contamination: "the orchestrator is scanning creative output for forbidden vocabulary. This is compliance enforcement on the auditors' sovereign perceptual reports." The ceremony audit (21, 4B) says: "Information without consequence is ceremony."

The plan itself states "Zero Interpretable Instructions for programmatic steps." But Step 4.8 is an interpretable instruction on creative output -- it evaluates the CONTENT of auditor reports.

**Fix:** Remove Step 4.8. The language constraint in the auditor prompt is the mechanism. Post-hoc scanning of creative output is old-pipeline compliance checking. If contamination is a concern, fix the auditor prompt, not the validation.

---

### B-03: Step 2.5 experiential scan is an interpretive step in a "zero interpretation" system (BLOCKING)

**Location:** Section 1, Step 2.5 (line ~108)

**The problem:** Step 2.5 says: "Orchestrator scrolls page in Playwright, checks for illegibility. SET blocking_usability = true/false." This requires the orchestrator to LOOK AT the page and make a judgment call about readability. The ceremony audit (21, 4A) says: "The orchestrator experiential scan duplicates what auditors do AND what GR-60 does. Strip it." The risk analysis (22, P-04) says: "'is this text readable?' requires visual judgment."

The plan's own enforcement pattern #4 is "ZERO INTERPRETABLE INSTRUCTIONS for programmatic steps." Step 2.5 is an interpretive instruction. The orchestrator is an LLM -- it will interpret screenshots differently each run.

**Fix:** Remove Step 2.5. Remove `blocking_usability` flag from the routing matrix (Step 6.3). Remove the BLOCKING-USABILITY pre-seeding from auditor prompts (Step 4.4[G]). GR-60 catches WCAG contrast violations programmatically. PA auditors catch readability problems perceptually. The orchestrator should not duplicate both.

---

### B-04: GR-63 and GR-64 are in the gate list but audits recommend stripping them (BLOCKING)

**Location:** Section 3, Categories E and F (lines ~723, 730)

**The problem:** The gate list includes:
- GR-63 (Builder Experiential Marker) -- the ceremony audit (21, 2G) says: "The comment is a compliance artifact that cannot cause the behavior it claims to verify. The builder cannot see the rendered page."
- GR-64 (Usability Priority Verification) -- the ceremony audit (21, 2H) says: "GR-64 checks the Weaver's creative output for keywords. Ceremony." The contamination audit (20, C-05) says: "This is the orchestrator evaluating creative output quality."

Yet both appear as REQUIRED gates in the plan.

**Fix:** Strip GR-63 and GR-64 from the REQUIRED gate list. GR-63 is ceremony (the builder is an LLM that writes "I checked" without having checked). GR-64 violates the plumbing/freedom boundary (checking creative output content). Update the GR-48 coverage array to remove both. Gate count drops from 28 to 26 (or 22 if the Category H narration gates are also stripped per ceremony audit).

---

### B-05: Category H builder narration gates are listed but ceremony audit recommends stripping all 4 (BLOCKING)

**Location:** Section 3, Category H (lines ~741-748)

**The problem:** The plan lists BV-08, GR-43, GR-83, GR-84 as RECOMMENDED gates. The ceremony audit (21, 2F) provides detailed analysis: "The builder narration gates were designed for a multi-cycle IMPROVE process where HTML comments communicated between iterations. The new single-REFINE architecture communicates through files (reflection, auditor reports, conviction brief). HTML comment mandates add cognitive load on the builder for zero downstream benefit."

Yet the Window 1 prompt template (line ~365-368) still instructs the builder to include EXPERIENTIAL-CHECK and SELF-EVALUATION comments. The prompt MANDATES these comments while the ceremony audit says they are ceremony.

**Fix:** Remove Category H gates (BV-08, GR-43, GR-83, GR-84) from the gate list entirely. Remove the EXPERIENTIAL-CHECK and SELF-EVALUATION comment instructions from the Window 1 prompt template (lines 365-368) and the Window 3 prompt template (line 635-636). This is the plan importing old-pipeline builder narration requirements into a process that has no downstream consumer for them.

---

### B-06: Gate count is inconsistent throughout the document (BLOCKING)

**Location:** Multiple locations

**The problem:** The document says "~28 gates" in at least 8 places:
- Step 3 heading: "Run Gate Runner (~28 essential gates)"
- User decision #4: "Gates reduced from 57 to ~28"
- Section 3 heading: "28 Surviving Gates"
- Phase 2 description: "reduce from 3,185" lines

But the actual gate list in Section 3 counts:
- Category A: 2
- Category B: 6
- Category C: 6
- Category D: 1
- Category E: 3
- Category F: 2
- Category G: 4
- Category H: 4
- Total: 28

However, GR-48 is a META-gate (checks that all other gates ran). It does not check the HTML. The "essential" gate count is 19 per the GR-48 coverage array (line 773-774). The summary says `essential_pass` and `essential_fail` are computed against this 19-gate list. So the plan simultaneously says "28 gates" and "19 essential gates" without ever reconciling this.

After applying B-04 and B-05 fixes (stripping GR-63, GR-64, BV-08, GR-43, GR-83, GR-84), the count would be 22. The ceremony audit arrives at 22. The plan says 28. This discrepancy will confuse the implementer.

**Fix:** Commit to a single gate count. After applying audit recommendations: 22 total (15 REQUIRED + 7 ADVISORY). Update every reference to "~28" throughout the document. Update the GR-48 coverage array. Update Phase 2 scope estimates.

---

### B-07: gate-manifest.json is referenced but ceremony audit says strip it (BLOCKING)

**Location:** Section 4, File #9 (line ~843) + Phase 2, Step 2.6 (line ~923)

**The problem:** The plan lists `gate-manifest.json` as a file to MODIFY (reduce from 361 to ~150 lines). Phase 2 Step 2.6 says "Update gate-manifest.json: remove entries for stripped gates."

The ceremony audit (21, 2B) says: "The gate manifest is a registry of information already encoded in the JS code. The gate runner runs everything in one call -- what does the manifest control? Nothing. CEREMONY. Strip entirely."

The plumbing spec's Step 3 confirms this: one `browser_evaluate` call runs ALL gates. The manifest is never read by the gate runner. It is never loaded by the orchestrator. It exists as documentation, not as a structural dependency.

**Fix:** Remove gate-manifest.json from the file inventory (Section 4). Remove Phase 2 Step 2.6. If the implementer wants human-readable gate documentation, the gate list in Section 3 of this plan serves that purpose.

---

### B-08: RETHINK comparison uses "larger HTML" as tiebreaker (BLOCKING)

**Location:** Section 1, Step 6.5 (line ~207)

**The problem:** Step 6.5 says: "If second RETHINK -> ship the better artifact (larger HTML)." Using file size as a quality proxy is nonsensical. A 2,000-line HTML page with inline SVGs and verbose CSS is not better than a 1,200-line page with clean, efficient code. The ceremony audit (21, 5C) notes: "The RETHINK comparison needs a tiebreaker: number of essential gate failures, or the orchestrator asking the user."

**Fix:** Replace "ship the better artifact (larger HTML)" with: "Ship the artifact with fewer essential gate failures. If tied, present both to the user for selection."

---

### B-09: No content length check before spawning Window 1 (BLOCKING)

**Location:** Section 1, Step 0 (lines ~44-53)

**The problem:** Step 0 checks that the content file exists and is non-empty (Step 0.2: `Read({content_path}, limit=10)`). It does NOT check content length. The risk analysis (22, W1-04) says: "For content exceeding 8,000 lines, the agent runs out of context for building a complete page. This is an edge case that will occur eventually, and the failure is silent."

The Window 1 prompt loads ~3,180 lines of reference material BEFORE the content. For an 8,000-line content file, total input is ~11,180 lines. This exceeds safe context budget.

**Fix:** Add Step 0.2b: "Read({content_path}). Count lines. IF > 5,000: PRINT WARNING to user. IF > 8,000: PRINT 'Content too long for single-window build. Consider splitting.' STOP."

---

### B-10: Screenshot viewport inconsistency between Steps 0.4, 2.3, and the auditor prompt (BLOCKING)

**Location:** Step 0.4 (line ~51), Step 2.3 (line ~106), auditor prompt (lines ~455-458)

**The problem:** Step 0.4 creates directories for 3 viewports: `_screenshots/1440`, `_screenshots/1024`, `_screenshots/768`. Step 2.3 captures screenshots at 3 viewports (1440, 1024, 768). The ceremony audit (21, 4D) says: "1024px screenshots: no one looks at them. Strip."

The auditor prompt template lists only 1440px and 768px screenshots (lines 455-458). The 1024px screenshots are captured but never referenced. This is wasted Playwright time.

But the Dry Run Checklist (Section 7, check #6, line ~1106) says: "Screenshots captured at 3 viewports. `_screenshots/1440/`, `1024/`, `768/` have PNG files." This verification will FAIL if 1024px is stripped, because the check expects 3 viewports.

**Fix:** Decide: either keep 1024px (and add it to auditor prompts) or strip it (and update Step 0.4, 2.3, and the Dry Run Checklist). Given the ceremony audit's recommendation and the fact that no downstream consumer reads 1024px screenshots, strip it. Update Step 0.4 mkdir to only create 1440 and 768 dirs. Update Step 2.3 to capture at 2 viewports. Update Dry Run check #6. Update Step 2.6/2.7 to only verify 1440 and 768.

---

### B-11: The skill file size estimate (~250 lines) is dramatically too low (BLOCKING)

**Location:** Section 4, File #1 (line ~835) + Phase 3 (lines ~926-934)

**The problem:** The plan says the new skill file will be ~250 lines. But the plan itself contains:
- Window 1 prompt template: ~105 lines (lines 281-386)
- Window 2 auditor prompt template: ~63 lines (lines 420-482)
- Weaver prompt template: ~42 lines (lines 497-538)
- Window 3 prompt template: ~97 lines (lines 562-658)
- Conventions brief: ~17 lines (embedded)
- 3 receiving principles: ~15 lines
- Routing matrix: ~8 lines
- Mechanical patching logic: ~10 lines
- Error handling: ~30 lines (minimum)
- Step 0-8 orchestration: ~100 lines (the plumbing steps)
- Question assignment matrix: ~10 lines
- Keyword lists for routing: ~15 lines

That is ~512 lines of CONTENT, before any formatting, comments, or structural markup. A skill file that contains all 3 prompt templates, the conventions brief, all verification steps, and the routing logic cannot be 250 lines unless it omits critical content.

**Fix:** Update the estimate to ~500-600 lines. Update Phase 3 scope estimates. This affects the "Total Estimated Scope" table (line ~970-981).

---

### B-12: No specification for how the orchestrator extracts PA questions from the skill file (BLOCKING)

**Location:** Section 1, Step 4.1 (line ~151)

**The problem:** Step 4.1 says: "`Read(~/.claude/skills/perceptual-auditing/SKILL.md)` — PA question text extracted." But HOW does the orchestrator extract specific questions? The PA skill is 517 lines. The orchestrator needs to extract 20 specific questions and assign them to 5 auditors (4 questions each, per the assignment matrix at line ~139-148).

The plan says "PA question text extracted" as if it is a single operation. But extraction requires:
1. Reading the 517-line skill file
2. Finding the questions by their E-XX identifiers
3. Extracting the question TEXT (not the "What this surfaces" annotations -- the auditor prompt spec says auditors do NOT receive these)
4. Grouping questions per auditor per the assignment matrix

This is not a single `Read` call. This is a multi-step extraction that requires the orchestrator to parse a structured document. If the extraction is wrong (wrong questions to wrong auditors, or annotations included), the PA is contaminated.

**Fix:** Specify the extraction method. Option A: the skill file embeds the 20 question texts as literal strings, pre-grouped by auditor assignment, so extraction is a direct Read + paste. Option B: the orchestrator constructs each auditor's question set from literal text embedded in the /build-page skill itself (not extracted from the PA skill at runtime). Option B is more reliable -- it eliminates a runtime parsing dependency.

---

### B-13: Weaver prompt says "Read all 5: auditor-A.md through auditor-E.md" but doesn't specify how (BLOCKING)

**Location:** Section 2, Weaver Prompt Template (line ~512)

**The problem:** The Weaver prompt template includes "{Read all 5: auditor-A.md through auditor-E.md}." But this is a prompt for a spawned Task agent. The agent does not have the auditor reports in its context unless the orchestrator puts them there. The orchestrator must Read all 5 files and embed their content in the Weaver prompt BEFORE spawning the Weaver.

Step 5.1 says: "`Read` all 5 auditor reports" but lists this as part of "Construct Weaver prompt." This is correct but ambiguous -- does the orchestrator Read the files itself and paste the content into the prompt? Or does it tell the Weaver to Read the files? If the latter, the Weaver agent would need file paths and Read access, which is different from receiving embedded content.

**Fix:** Make explicit: "The orchestrator Reads all 5 auditor report files and embeds their full content in the Weaver's prompt. The Weaver does NOT read files -- it receives all content inline." Same for the conviction brief and reflection.

---

### B-14: Step 7 REFINE prompt references files by description, not exact path (BLOCKING)

**Location:** Section 1, Step 7 prompt construction table (lines ~222-231)

**The problem:** The prompt construction table lists:
- [G] Mechanism catalog: `Read(mechanism-catalog.md)` -- no full path
- [H] Components CSS: `Read(components.css)` -- no full path
- [I] Prohibitions: `Read(prohibitions.md)` -- no full path
- [J] Tokens: `Read(tokens.css)` -- no full path

But Step 1.1 for Window 1 uses full paths in the prompt construction table (lines 62-71). A fresh instance following Step 7 would not know the full paths to these files.

**Fix:** Use full paths consistently. Replace with:
- `Read(design-system/compositional-core/grammar/mechanism-catalog.md)`
- `Read(design-system/compositional-core/components/components.css)`
- `Read(design-system/compositional-core/identity/prohibitions.md)`
- `Read(design-system/compositional-core/vocabulary/tokens.css)`

---

### B-15: Verdict Logic in Section 3 contradicts the routing matrix in Step 6 (BLOCKING)

**Location:** Section 3, Verdict Logic (lines ~820-825) vs Section 1, Step 6.3 (lines ~194-202)

**The problem:** The Section 3 Verdict Logic says:
```
RETHINK: ANY identity gate FAIL (GR-03/05/06/08/09/10) OR 3+ RECOMMENDED FAIL
REFINE: ANY perception gate FAIL OR GR-63 FAIL OR GR-64 FAIL + auditors say SHIP
SHIP: All essential PASS + <3 recommended FAIL
```

But Step 6.3's routing matrix says:
```
IF creative_verdict == "RETHINK": route = "RETHINK"
IF creative_verdict == "SHIP" AND GATES_FAILED == false: route = "SHIP"
IF creative_verdict == "SHIP" AND GATES_FAILED == true: route = "PATCH_THEN_SHIP"
IF creative_verdict == "REFINE" AND GATES_FAILED == false: route = "REFINE"
IF creative_verdict == "REFINE" AND GATES_FAILED == true: route = "PATCH_THEN_REFINE"
```

These are TWO DIFFERENT routing systems. The Verdict Logic combines gate results AND auditor verdicts into a single decision. The routing matrix treats them as INDEPENDENT axes (creative_verdict from auditors/Weaver, GATES_FAILED from gate runner). Which system does the implementation use?

The Step 6.3 matrix is the plumbing-correct version (it separates gate failures from creative verdicts). The Section 3 Verdict Logic conflates them. But the Section 3 logic also contains the RETHINK-on-identity-failure rule, which does NOT appear in Step 6.3. If GR-03 (container width) fails, Step 6.3 treats it as PATCH_THEN_REFINE (mechanical fix). The Verdict Logic says RETHINK (start over).

**Fix:** Delete the Verdict Logic from Section 3 (or relabel it "LEGACY — see Step 6.3 for authoritative routing"). Add the identity-failure-RETHINK rule to Step 6.3 if appropriate: "IF ANY identity gate (GR-03/05/06/08/09/10) fails as STRUCTURAL (not MECHANICAL): route = RETHINK regardless of creative_verdict." Otherwise, the mechanical patching in Step 6.4 handles identity gate failures without RETHINK.

---

### B-16: No specification for what the orchestrator does when the Weaver times out (BLOCKING)

**Location:** Section 1, Step 5.2 (line ~172)

**The problem:** Step 5.2 says: "Timeout -> fall back to keyword scan." But what is the timeout duration? The plan never specifies timeouts for ANY agent (Window 1, auditors, Weaver, REFINE builder). Step 1.3 says "Wait for completion. Timeout -> stop." Step 7.3 says "Timeout -> restore backup."

A fresh instance will not know:
- How long to wait before declaring timeout
- Whether "timeout" means a Claude Code Task timeout or a wall-clock check
- What specific keyword scan procedure to use when the Weaver times out (Step 6.2 references "exact lists in 10-orchestrator-plumbing.md" -- but this is a SEPARATE DOCUMENT, not the implementation plan itself)

**Fix:** Specify timeout values. Recommended: Task agents run until completion -- Claude Code's Task tool handles its own timeouts. The "timeout" failure mode is actually "Task returns error" or "Task produces no output." Reframe as: "IF Weaver Task fails or produces no file: SET weaver_available = false, proceed to Step 6.2 fallback." Also, embed the keyword lists for the fallback scan directly in the plan (not by reference to another document).

---

### B-17: Step 6.4 mechanical patching is underspecified (BLOCKING)

**Location:** Section 1, Step 6.4 (line ~206)

**The problem:** Step 6.4 says: "For each failed gate in `_gate-results.json`, read `detail` field. Use `Edit` tool on `output.html` to fix specific CSS values. Known fixes: GR-03->max-width:960px, GR-05->adjust B channel, GR-11->increase RGB delta, GR-13/15->reduce margin/padding, GR-60->increase contrast, GR-67->increase footer font-size."

This is a list of gate-to-fix mappings with no specificity. "Adjust B channel" -- to what value? "Increase RGB delta" -- by how much? "Reduce margin/padding" -- to what? "Increase contrast" -- how?

The risk analysis (22, P-04) identifies this exactly: "GR-11 fails with 'zones 3-4 background delta: 8 RGB.' The orchestrator attempts to fix it by changing zone 4's background, but picks a color that breaks GR-05 (warm palette) or creates a new GR-11 failure with zones 4-5."

This is the orchestrator making creative/interpretive decisions about CSS values -- violating pattern #4 (zero interpretable instructions).

**Fix:** Two options:
- Option A: Expand the fix mapping to include EXACT operations. Example: "GR-11 FAIL detail 'zones X-Y bg delta Z (threshold 15)': Read zone Y background hex. Increase R channel by (15-Z+5). Verify new hex still satisfies GR-05 (R>=G>=B). If not: decrease zone X background R channel instead."
- Option B: Make mechanical patching a SEPARATE Task agent (not orchestrator inline work). Spawn a "patch agent" with gate results + HTML + the fix mapping. This isolates the interpretive work from the plumbing orchestrator.

---

## SECTION 2: GRANULARITY

### S-01: Auditor question assignment references old PA numbering (SIGNIFICANT)

**Location:** Section 1, Step 4 question assignment table (lines ~139-148)

**The problem:** The assignment uses E-01 through E-20 numbering. The contamination audit (20, C-10/C-31) recommends renumbering to Q-01 through Q-20 and dropping tier classifications. The plan keeps the old E-XX numbering without justification.

More importantly, the plan never lists WHICH questions correspond to E-01 through E-20. A fresh instance following this plan would need to read the PA skill file and map E-XX numbers to question text. If the PA skill's numbering changes, the assignment matrix breaks silently.

**Fix:** Either embed the 20 question texts directly in the plan (with Q-01 through Q-20 numbering) or add an explicit reference: "E-01 through E-20 correspond to questions in Sections [specific section references] of the PA skill file at `~/.claude/skills/perceptual-auditing/SKILL.md`."

---

### S-02: REFINE builder's "may NOT replace the metaphor" is unenforceable (SIGNIFICANT)

**Location:** Section 2, Window 3 prompt template (line ~567-568)

**The problem:** The prompt says: "You may NOT replace the metaphor itself or violate the world-description." The risk analysis (22, W3-02) identifies: "If the builder's ONE THING is a new visual direction that effectively IS a new metaphor, the metaphor has been replaced in practice."

No gate checks metaphor consistency. No structural validation catches metaphor replacement. The instruction is a soft constraint that an LLM may or may not follow. The plan acknowledges this risk in the risk analysis but provides no mitigation in the implementation.

**Fix:** Add a note acknowledging this is unenforceable and that the PA auditors are the backstop. Or: add a post-REFINE check comparing the conviction brief's WORLD-DESCRIPTION section to the refined HTML's class names (if all class names changed from geological to architectural, flag it).

---

### S-03: The plan does not specify the model for auditors (SIGNIFICANT)

**Location:** Section 1, Step 4.5 (line ~155)

**The problem:** Step 4.5 says: "5x `Task(subagent_type='code', model=Opus, prompt=auditor_prompt)`." But the metacognitive analysis (23, 1B) asks: "Is the Opus mandate based on evidence? Sonnet at 1/5 the cost produces 90% of the quality for auditors (who are doing perception, not creation)."

The plan mandates Opus for all 8 agents (1 builder + 5 auditors + 1 Weaver + 1 REFINE builder). This was never questioned or justified in the reconciliation. For auditors doing experiential perception (not creative composition), the model choice should be explicit and justified.

**Fix:** Add a note: "All agents use Opus. Future optimization: test Sonnet for auditors (perception task, not creation). If quality difference is < 10%, switch to Sonnet for auditors (saves ~60% of auditor token cost)."

---

### S-04: No error handling for Playwright MCP failure (SIGNIFICANT)

**Location:** Section 1, Step 2 (lines ~100-117)

**The problem:** Step 2.2 says: "Navigation fails -> `browser_install`, retry once." But the risk analysis (22, W2-01) identifies: "If Playwright is truly unavailable, the pipeline stops. There is no fallback evaluation mode."

More critically, the plan does not handle the case where another HTTP server is already running on port 8888 serving DIFFERENT content (22, P-02): "Playwright navigates successfully and takes screenshots of the WRONG page." The port cycling (8888 -> 8889 -> 8890) handles port-in-use but not port-serving-wrong-content.

**Fix:** Add a post-navigation verification: After Step 2.2, add: "browser_evaluate(() => document.querySelector('html').innerHTML.length). IF < 100: page did not load. IF page title or content does not match expected: wrong server." Also, consider killing any existing process on 8888 before starting the server.

---

### S-05: BV gates check section NAMES but the brief format allows variation (SIGNIFICANT)

**Location:** Section 1, Step 3.0 (line ~124) + Section 3, Category G (lines ~736-740)

**The problem:** BV-01 through BV-04 string-search for "WORLD", "CALIBRATION", "OPPOSITION", "ARC" in the conviction brief. The holistic review (24, 2A) notes: "A builder who writes a brilliant conviction brief that uses different section names will fail BV gates."

The Window 1 prompt template says "5 sections: WORLD-DESCRIPTION (~10 lines), CALIBRATION (~5 lines), OPPOSITION (~5 lines), ARC (~10 lines), CONTENT MAP (~15 lines)." So the section names ARE specified. But the receiving principle says "this is your creative commitment, not a document for someone else." If the builder treats it as creative, they may use different headings.

**Fix:** Either: (a) make the section names mandatory by changing the instruction to "Use these EXACT section headings" (plumbing enforcement), or (b) change BV gates to check for section COUNT (>= 5 sections with >= 3 lines each) rather than section NAMES (structural validation, not content validation). Option (b) aligns better with the plumbing/freedom philosophy.

---

### S-06: The "routing matrix" keyword scan references an external document (SIGNIFICANT)

**Location:** Section 1, Step 6.2 (line ~191)

**The problem:** Step 6.2 says: "Keyword scan ALL auditor reports for RETHINK_WORDS / REFINE_WORDS / SHIP_WORDS (exact lists in 10-orchestrator-plumbing.md Step 6.2)."

The implementation plan is supposed to be the SINGLE AUTHORITATIVE document. Referencing "exact lists in 10-orchestrator-plumbing.md" means a fresh instance needs to read a second document to implement the routing. This breaks the plan's self-containment.

**Fix:** Embed the keyword lists directly in the plan. The lists are probably ~15-20 words each. That is 3-5 lines of plan text to eliminate a cross-document dependency.

---

### S-07: No specification for how the orchestrator handles a RETHINK on second attempt (SIGNIFICANT)

**Location:** Section 1, Step 6.5 (line ~207)

**The problem:** Step 6.5 says: "If first RETHINK -> re-run from Step 1 with additional exclusion line. If second RETHINK -> ship the better artifact." But:
1. What "additional exclusion line"? The plan does not specify the format. Does the Window 1 prompt get an extra line saying "Do NOT use metaphor: [previous metaphor]"? How does the orchestrator extract the previous metaphor from the brief?
2. "Ship the better artifact" -- B-08 addresses the tiebreaker issue, but also: where does the orchestrator STORE the first attempt's output? The second attempt overwrites `output.html`. There is no Step that backs up the first attempt before re-running.

**Fix:** Add explicit RETHINK protocol:
1. Before re-running from Step 1: `Bash("cp {output_dir}/output.html {output_dir}/output-rethink-1.html")` + copy brief and reflection.
2. The additional exclusion line: `Read({output_dir}/_tc-brief.md)`, extract the WORLD-DESCRIPTION section's first sentence (the metaphor statement). Add to Window 1 prompt: "Do NOT derive a metaphor related to: [extracted metaphor]. The previous attempt using this metaphor was rejected."
3. Comparison: run gates on both artifacts. Ship the one with fewer essential failures. If tied, present both to user.

---

### S-08: Conventions brief includes creative guidance mixed with mechanical constraints (SIGNIFICANT)

**Location:** Appendix B (lines ~1209-1227)

**The problem:** The conventions brief contains:
- Mechanical constraints: "Container: 940-960px", "Stacked gap: <= 120px", etc. (13 items)
- Creative guidance: "At each zone boundary, multiple channels should reinforce the same direction", "Vary transition types: some smooth continuations, some bridges, some full resets", "Name CSS classes from your metaphor" (3 items)

The ceremony audit (21, 5A) says: "The conventions brief should be PURELY mechanical: values, thresholds, binary constraints. Zero creative guidance." The contamination audit (20, C-14) recommends splitting into PHYSICS and PROCESS.

**Fix:** Move the 3 creative guidance lines out of the conventions brief and into the TC skill or receiving principle. The conventions brief should contain ONLY measurable, gate-verifiable constraints.

---

### S-09: No post-REFINE usability check (SIGNIFICANT)

**Location:** Section 1, Step 8 (lines ~252-264)

**The problem:** Step 8 runs gates after REFINE but does no experiential check. The holistic review (24, Gap 2) notes: "If the REFINE builder introduced new gate failures or degraded composition, the only signal is gate results." The risk analysis (22, W3-01) says: "A REFINE builder can degrade a page that was already decent. The post-REFINE evaluation is gates-only."

A REFINE builder could pass all gates while making the page compositionally worse (e.g., restructuring the arc into a monotone layout that technically satisfies all thresholds).

**Fix:** Add a lightweight post-REFINE check: after Step 8.2, if more essential gates fail post-REFINE than pre-REFINE, restore the backup and ship the original. This is a binary comparison (numerical, not interpretive), consistent with the zero-interpretation principle.

---

### S-10: Window 1 prompt template includes "STOP" checkpoint but LLMs read the full prompt (SIGNIFICANT)

**Location:** Section 2, Window 1 Prompt Template (lines ~311-320)

**The problem:** The prompt template includes a "STOP" checkpoint between the content and the vocabulary files. The risk analysis (22, W1-01) says: "The agent reads the ENTIRE prompt at once. Every LLM sees the full prompt before generating any output. The vocabulary files are all visible below the checkpoint."

The plan acknowledges this risk nowhere. The Window 1 design (11-window1-design.md) argues that the soft gate is sufficient, but the implementation plan does not even mention the risk.

**Fix:** Add a risk acknowledgment note after the checkpoint: "NOTE: This is a soft gate. The agent sees the full prompt including vocabulary files below. The sequential processing instruction + TC skill phases are the enforcement mechanism. If the agent produces a brief that references mechanism catalog vocabulary, it skipped the checkpoint. BV gates do not catch this."

---

### S-11: Plan does not address the user-direction mechanism (SIGNIFICANT)

**Location:** Not present anywhere

**The problem:** The holistic review (24, 6A) recommends: "Add an optional `{OUTPUT_DIR}/_user-direction.md` file. If the user provides feedback, the orchestrator writes it to this file and includes it in the REFINE builder's prompt."

This is the only mechanism for user feedback to enter the creative loop. Without it, the user's only option is "run another full cycle." The plan's Step 9 (Second REFINE) re-runs the entire PA, which is expensive when the user has a specific piece of feedback.

**Fix:** Add a lightweight mechanism: "If the user provides textual feedback after seeing the ship report, Write it to `{output_dir}/_user-direction.md`. If a second REFINE is requested, include this file in the REFINE builder's prompt after the Weaver synthesis."

---

### S-12: Plan does not address content length impact on composition complexity (SIGNIFICANT)

**Location:** Not present anywhere

**The problem:** The metacognitive analysis (23, 1A/1C/3B) raises: content shorter than ~500 words has insufficient mass for metaphor derivation. Content longer than ~8,000 words exceeds context budget. Content that is reference material (API docs, changelogs) resists the inhabitation frame.

The plan treats all content identically. B-09 addresses the length ceiling but not the length floor or content-type suitability.

**Fix:** Add a note in Step 0: "This process is optimized for content with narrative structure, register variation, and argumentative tension (essays, analyses, research syntheses). For reference content (API docs, tables, changelogs), consider a simpler direct build. Content shorter than 500 words or longer than 8,000 words may produce suboptimal results." This sets expectations without adding process complexity.

---

## SECTION 3: CONSISTENCY

### M-01: "Always 5 auditors" but standard mode routing logic assumes 2 (MINOR)

**Location:** Section 6, Disagreement 1 (line ~988-998) + multiple routing references

**The problem:** The plan resolves "always 5 auditors" and removes the standard/high-stakes distinction. But Step 6.2's keyword scan fallback ("IF NOT weaver_available") was designed for 2-auditor standard mode where there is no Weaver. With always-5-auditors + always-Weaver, the keyword scan fallback should almost never trigger. The plan does not clarify this.

**Fix:** Add a note: "The keyword scan (Step 6.2 fallback) triggers only if the Weaver agent fails or produces no output. With always-5 + always-Weaver, this is an error recovery path, not a standard path."

---

### M-02: "Pipeline" terminology appears 4 times describing the new process (MINOR)

**Location:** Lines ~33, 37, ~135 (timing note), and Verdict Logic heading

**The problem:** The contamination audit (20, Pattern C) identified 8 LOW findings of "pipeline" terminology. The user's decision #6 says "Call it a 'process' not 'pipeline.'" The plan uses "process" mostly but slips into "pipeline" in a few places.

**Fix:** Find-and-replace "pipeline" with "process" where it refers to the new system. Keep "pipeline" in historical references (e.g., "old pipeline" comparisons).

---

### M-03: TC skill line count inconsistency (MINOR)

**Location:** Section 1, Step 1 table (line ~64) vs Section 4 (line ~836)

**The problem:** Step 1 table says "841" lines for the TC skill. But user decision #2 says "TC skill stays at 841 lines. The rewrite at `ephemeral/tc-skill-update/SKILL-REWRITE.md` is the canonical TC." The current LIVE TC skill may have different line count from the rewrite. Phase 1 copies the rewrite over the live skill, which would align them. But until Phase 1 executes, the line count reference is to the rewrite, not the live skill.

**Fix:** Add note: "Line count refers to SKILL-REWRITE.md (the canonical version to be deployed in Phase 1). Live TC skill line count may differ until Phase 1 is complete."

---

### M-04: Phase 2 time estimate (2-4 hours) seems high for gate reduction (MINOR)

**Location:** Section 5, Phase 2 (line ~911)

**The problem:** Phase 2 is "Gate Runner Reduction." It involves reading the JS file, removing ~29 gate functions, updating the coverage array, and testing. This is primarily a code deletion task. The existing gate functions are self-contained. Deletion is low-risk. 2-4 hours seems high for what is mostly `Edit` tool calls to remove functions.

**Fix:** Reduce estimate to 1-2 hours, or justify why it needs more: "2-4 hours accounts for careful dependency checking (some helper functions may be shared between surviving and stripped gates) and functional testing against a test page."

---

### M-05: The dry run checklist expects 3 viewports but the audit recommends 2 (MINOR)

Addressed in B-10. Included here for cross-reference.

---

### M-06: Appendix A lists Step 4.7 as "Read (x5) each auditor report — Verify + audit trail" (MINOR)

**Location:** Appendix A (line ~1178)

**The problem:** Step 4.7's purpose is listed as "Verify + audit trail" but the actual verification check is "Contains 'cold look' or 'gut' or 'first impression' (Section 0 check)." This is a string search on natural language output -- the plumbing spec's own principle says "ZERO INTERPRETABLE INSTRUCTIONS" and "string matching on natural language output is fragile" (from ceremony audit 21, 4C).

An auditor who writes "My initial impression was..." instead of "cold look" or "gut" or "first impression" would fail this check despite producing a valid Section 0 response.

**Fix:** Either: (a) remove the content check and just verify file exists + length > 100 bytes (structural), or (b) add more keywords: "initial", "impression", "reaction", "seeing", "struck". Option (a) is cleaner and consistent with the plumbing/freedom philosophy.

---

### M-07: The plan says "~15-20 sentences" for reflection but the prompt says specific per-dimension counts (MINOR)

**Location:** Section 1, Step 1 output instructions (line ~81) vs Window 1 prompt (lines ~383-386)

**The problem:** Step 1 says the reflection is "~15-20 sentences." The prompt template says: "CONVICTION: 5-7 sentences. ALTERNATIVES: 4-6 sentences. UNRESOLVED: 4-6 sentences." That is 13-19 sentences. Minor inconsistency but a fresh instance might be confused.

**Fix:** Align: "~15-20 sentences" or "13-19 sentences (5-7 + 4-6 + 4-6)."

---

### M-08: Step 8.5 server kill is fragile (MINOR)

**Location:** Section 1, Step 8.5 (line ~260)

**The problem:** Step 8.5 says: `Bash("kill server PID" or "lsof -ti:8888 | xargs kill")`. But:
1. "server PID" is not captured anywhere. Step 2.1 starts the server with `&` but does not capture PID.
2. If port was changed to 8889 or 8890 (port conflict fallback), the `lsof -ti:8888` will not find it.

**Fix:** Capture PID at Step 2.1: `Bash("npx http-server ... & echo $!")` and store the PID. At Step 8.5, kill by PID. Alternatively, if port was changed, use the actual port variable.

---

### M-09: The plan does not mention /compact or context management for the orchestrator (MINOR)

**Location:** Not present

**The problem:** The orchestrator makes ~50 tool calls (per Appendix A). Each Read call adds content to the orchestrator's context. After reading 6 reference files (Step 1.1), 5 auditor reports (Step 4.7/5.1), the gate results, the Weaver synthesis, and then constructing the REFINE prompt (Step 7.1: 8+ more Reads), the orchestrator's context may be approaching limits.

The plan does not address context management. If the orchestrator hits context limits mid-process, it will fail silently (compressed/truncated responses) or explicitly (/compact triggered automatically).

**Fix:** Add a note: "The orchestrator's context budget is approximately 200K tokens. Steps 1-8 consume approximately [estimate] tokens of context. If the orchestrator approaches context limits (typically after Step 5), critical information may be compressed. The skill file should front-load critical routing logic and back-load verbose prompt construction to ensure routing decisions are always in active context."

---

## SECTION 4: AUDIT INCORPORATION

### Contamination Audit (20) Incorporation

| Finding | Status | Notes |
|---------|--------|-------|
| C-01/07/08/15/19/25/30/32: Pipeline terminology | PARTIAL | Plan uses "process" mostly but slips (M-02) |
| C-02/17: "ALWAYS FLAGSHIP" tier import | FIXED | Plan correctly eliminates routing/tier language |
| C-03: BV-03 forbidden spec language | NOT ADDRESSED | BV-03 is not in the plan's BV gate list (implicit fix via gate renumbering). But the plan's BV-01 through BV-04 are DIFFERENT checks than the old BV-01 through BV-04 without acknowledging this. |
| C-04: BV-08 brief-output diff | NOT FIXED | BV-08 appears in Category H as RECOMMENDED (B-05) |
| C-05/28: GR-64 checks creative output | NOT FIXED | GR-64 appears as REQUIRED (B-04) |
| C-10/31: Old PA tier numbering | NOT FIXED | E-XX numbering retained (S-01) |
| C-11/21/27: Brief excerpt to auditors | CONTRADICTED | Step 4.2 includes it, Reconciliation #5 excludes it (B-01) |
| C-12: Orchestrator experiential scan | NOT FIXED | Step 2.5 retains it (B-03) |
| C-13/22: Contamination check on reports | NOT FIXED | Step 4.8 retains it (B-02) |
| C-14: Non-negotiables format | PARTIALLY FIXED | No "Non-Negotiables" section, but conventions brief mixes types (S-08) |
| C-24: "MAXIMUM COMPLIANCE" | FIXED | Plan uses enforcement pattern language, not compliance language |
| C-26: "Phase gate" framing | FIXED | Plan uses "checkpoint" language |
| C-33: REFINE conventions placement | ADDRESSED | Conventions arrive after creative commitment |

**Score: 8/34 fixed, 6/34 partially fixed, 10/34 not fixed, 10/34 not applicable (LOW findings).**

### Ceremony Audit (21) Incorporation

| Finding | Status | Notes |
|---------|--------|-------|
| 2A: Execution tracker | FIXED | No execution tracker in the plan |
| 2B: gate-manifest.json | NOT FIXED | Still in file inventory (B-07) |
| 2C: pa-questions.md | FIXED | Not referenced as separate file |
| 2D: pa-weaver.md | FIXED | Weaver protocol embedded in skill |
| 2E: pa-manifest.md | FIXED | Not referenced |
| 2F: Builder narration gates (4) | NOT FIXED | Category H retained (B-05) |
| 2G: GR-63 experiential marker | NOT FIXED | Still REQUIRED (B-04) |
| 2H: GR-64 usability priority | NOT FIXED | Still REQUIRED (B-04) |
| 3A: World-description gap | NOT ADDRESSED | Reconciliation #6 resolves against it (loads full prohibitions.md) |
| 3B: TC simplification | NOT APPLICABLE | User overrides: keep 841-line version |
| 3C: No brief to auditors | CONTRADICTED | B-01 |
| 4A: Orchestrator experiential scan | NOT FIXED | B-03 |
| 4B: Contamination check | NOT FIXED | B-02 |
| 4C: Structural validation tables | PARTIALLY FIXED | Some content checks remain (M-06) |
| 4D: 1024px viewport | NOT FIXED | B-10 |
| 5A: Conventions brief boundary | NOT FIXED | S-08 |

**Score: 5/16 fixed, 1/16 partially, 7/16 not fixed, 3/16 N/A.**

### Potential Issues (22) Incorporation

| Finding | Status | Notes |
|---------|--------|-------|
| W1-01: Agent skips TC derivation | NOT ADDRESSED | S-10 |
| W1-02: No conviction brief | ADDRESSED | Graceful degradation in plumbing spec |
| W1-03: Malformed HTML | NOT ADDRESSED | No DOM validation step between Window 1 and screenshots |
| W1-04: Context exhaustion for long content | NOT ADDRESSED | B-09 |
| W1-05: Decorative metaphor | PARTIALLY ADDRESSED | PA auditors as backstop (acknowledged but no mitigation) |
| W1-06: Wrong token values | NOT ADDRESSED | No token compliance gate |
| W2-01: Playwright failure | PARTIALLY ADDRESSED | browser_install retry, but no degraded-mode fallback |
| W2-02: Dark screenshots | NOT ADDRESSED | No threshold adjustment for intentionally dark pages |
| W2-03: Auditor cross-contamination | NOT ADDRESSED | No cross-auditor phrase comparison |
| W2-04: Gate runner bugs | NOT ADDRESSED | No gate runner test protocol |
| W2-05: Routing misclassification | NOT ADDRESSED | No conditional-language detection in keyword scan |
| W2-06: 2-auditor mode misses issues | FIXED | Always 5 auditors |
| W2-07: Weaver ignores auditors | NOT ADDRESSED | No convergence-acknowledgment requirement |
| W2-08: Shallow BV gates | NOT ADDRESSED | No minimum-content check per section |
| W3-01: REFINE makes page worse | NOT ADDRESSED | S-09 |
| W3-02: REFINE replaces metaphor | NOT ADDRESSED | S-02 |
| W3-03: REFINE identical output | ADDRESSED | Accepted as feature |
| W3-04: REFINE context budget | NOT ADDRESSED | No context budget check in Step 7 |
| P-01: File Read fails silently | NOT ADDRESSED | No Read verification for prompt inputs |
| P-02: Wrong server content | NOT ADDRESSED | S-04 |
| P-03: Orchestrator skips steps | ADDRESSED | Artifact chain design |
| P-04: Orchestrator interprets | NOT ADDRESSED | B-17 |

**Score: 3/22 fixed, 3/22 partially, 15/22 not addressed, 1/22 accepted.**

### Metacognitive Analysis (23) Incorporation

The metacognitive analysis raises systemic questions (content suitability, model cost, temporal blindness, measurement circularity, metaphor tyranny) that are DESIGN DECISIONS, not implementation fixes. The plan correctly does not try to solve all of them. But it should acknowledge them.

**Score:** S-03 addresses model choice. S-12 addresses content suitability. The rest are noted but not actionable for the implementation plan.

### Holistic Review (24) Incorporation

| Finding | Status | Notes |
|---------|--------|-------|
| Gap 1: BLOCKING-USABILITY to REFINE builder | NOT ADDRESSED | If B-03 strips the usability scan, this is moot |
| Gap 2: Post-REFINE feedback loop | NOT ADDRESSED | S-09 |
| 2A: BV gates pressure formulaic briefs | NOT ADDRESSED | S-05 |
| 2B: GR-45 RECOMMENDED vs ESSENTIAL | NOT FIXED | GR-45 is RECOMMENDED in the gate table (correct per gate audit) |
| 2C: Routing keyword scanning | NOT ADDRESSED | S-06 partially |
| 6A: User direction mechanism | NOT ADDRESSED | S-11 |
| 6D: Failure protocol | NOT ADDRESSED | No failure protocol section in the plan |

**Score: 0/7 fixed, 2/7 partially, 5/7 not addressed.**

---

## SECTION 5: PLUMBING INTEGRITY

### Steps that are truly deterministic (PASS)

- Step 0 (parse input, create dirs, copy content): Pure plumbing. Every operation is a tool call with a verifiable output.
- Steps 1.4-1.7 (artifact verification): Glob + Read with binary checks. Deterministic.
- Steps 2.1-2.4 (serve, navigate, screenshot, quality): Playwright calls. Deterministic (modulo screenshot variability).
- Step 3 (gate runner): Single browser_evaluate returning JSON. Deterministic.
- Steps 4.3-4.6 (screenshot paths, spawning, verification): Glob + Task. Deterministic.
- Step 6.1 (read gate results): Read + extract. Deterministic.
- Step 6.3 (routing matrix): IF/ELSE on variables. Deterministic.
- Step 7.0 (backup): Bash cp. Deterministic.
- Steps 7.4-7.5 (REFINE verification): Read + Glob. Deterministic.

### Steps that involve interpretation (ISSUES)

- **Step 2.5 (experiential scan):** Interpretive. B-03 recommends removal.
- **Step 4.7 (Section 0 keyword check):** String matching on natural language. M-06 recommends simplification.
- **Step 4.8 (contamination check):** Interpretive. B-02 recommends removal.
- **Step 6.2 (keyword scan fallback):** Interpretive but appropriately scoped as error recovery. S-06 recommends embedding word lists.
- **Step 6.4 (mechanical patching):** Interpretive. B-17 recommends expansion or delegation.
- **Step 6.5 (RETHINK metaphor exclusion):** Requires extracting a metaphor from prose. Interpretive. S-07 specifies extraction method.

**Score: 6 interpretive steps in a system designed for zero. B-02 and B-03 fix two. B-17 and S-07 improve two. Two remain (4.7 keyword check, 6.2 keyword scan).**

---

## SECTION 6: FREEDOM INTEGRITY

### Does the plan accidentally constrain creative freedom?

**The conventions brief mixes mechanical and creative guidance (S-08).** Three lines of creative guidance ("multiple channels should reinforce," "vary transition types," "name CSS classes from metaphor") arrive as CONVENTIONS (mechanical constraints). This positions creative suggestions as requirements with the same authority as "container: 940-960px."

**BV gates enforce brief section NAMES, not just structure (S-05).** A builder who uses different terminology for the same concepts fails structural validation.

**GR-63 mandates a specific HTML comment format as evidence of self-review (B-04).** This is creative output being checked for structural compliance.

**Builder narration gates mandate HTML comment counts (B-05).** >= 15 INTENT comments is a creative output format requirement with no downstream consumer.

**Otherwise, freedom integrity is STRONG.** The prompt templates genuinely activate creative posture. The receiving principles are well-designed. The reading order is sound. The ONE THING commitment in Window 3 is well-framed. The Weaver's AMPLIFY/RELEASE/DEEPEN creative direction frame is excellent.

---

## SECTION 7: ACTIONABILITY

### Could a fresh Claude Code instance execute this plan?

**MOSTLY YES, with critical gaps.**

**What works:**
- The plumbing specification (Section 1) is detailed enough to execute. Every step has a tool call, an artifact, and a failure mode.
- The prompt templates (Section 2) are complete and copy-pasteable.
- The gate list (Section 3) is clear.
- The file inventory (Section 4) is comprehensive.
- The implementation order (Section 5) is logical.
- The reconciliation log (Section 6) resolves most disagreements.
- The verification protocol (Section 7) is thorough.

**What would confuse a fresh instance:**
1. The Step 4.2 / Reconciliation #5 contradiction (B-01) -- which instruction to follow?
2. The Section 3 Verdict Logic / Step 6.3 routing matrix disagreement (B-15) -- two routing systems.
3. "Read PA skill and extract questions" (B-12) -- how?
4. "Fix GR-11: increase RGB delta" (B-17) -- to what value?
5. "Ship the better artifact (larger HTML)" (B-08) -- really?
6. The gate count confusion: 28 in headings, 19 in coverage array, 22 after ceremony audit recommendations (B-06).
7. File paths abbreviated in Step 7 but full in Step 1 (B-14).
8. The ~250 line skill estimate when the content requires ~500+ lines (B-11).
9. The keyword lists for fallback routing are in a different document (S-06).
10. No timeout values specified anywhere (B-16).

**A fresh instance would produce a working skill file but would likely:**
- Include brief excerpts in auditor prompts (following Step 4.2 over Reconciliation #5)
- Include GR-63, GR-64, and Category H gates (following Section 3 over audit recommendations)
- Produce a skill file that is either too short (targets ~250 lines) or panics at the mismatch
- Fail at mechanical patching (underspecified fix mapping)
- Skip the RETHINK backup (not specified)

---

## FIX PRIORITY

### BLOCKING (must fix before implementation)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| B-01 | Remove Step 4.2 + auditor brief excerpt | 5 min | Resolves live contradiction |
| B-02 | Remove Step 4.8 contamination check | 2 min | Removes ceremony |
| B-03 | Remove Step 2.5 experiential scan | 5 min | Removes interpretive step |
| B-04 | Strip GR-63 and GR-64 | 5 min | Removes ceremony gates |
| B-05 | Strip Category H builder narration gates + comment mandates | 10 min | Removes 4 ceremony gates + prompt changes |
| B-06 | Fix gate count consistency | 15 min | Eliminates confusion throughout |
| B-07 | Remove gate-manifest.json from file inventory | 2 min | Removes ceremony file |
| B-08 | Fix RETHINK tiebreaker | 5 min | Replaces nonsensical "larger HTML" |
| B-09 | Add content length check | 5 min | Prevents context exhaustion |
| B-10 | Resolve 1024px viewport question | 5 min | Eliminates waste or inconsistency |
| B-11 | Fix skill file size estimate | 2 min | Sets correct expectations |
| B-12 | Specify PA question extraction method | 10 min | Eliminates runtime parsing ambiguity |
| B-13 | Clarify Weaver prompt construction | 5 min | Eliminates agent prompt ambiguity |
| B-14 | Fix abbreviated file paths in Step 7 | 2 min | Makes paths consistent |
| B-15 | Resolve dual routing logic | 10 min | Eliminates contradictory routing systems |
| B-16 | Address timeout specification | 5 min | Eliminates undefined behavior |
| B-17 | Expand mechanical patching specification | 20 min | Makes patching deterministic |

**Total BLOCKING fix effort: ~113 min (~2 hours).**

### SIGNIFICANT (should fix before implementation)

| # | Fix | Effort |
|---|-----|--------|
| S-01 | Renumber questions or add reference | 10 min |
| S-02 | Acknowledge unenforceable metaphor constraint | 5 min |
| S-03 | Add model choice justification | 5 min |
| S-04 | Add post-navigation verification | 5 min |
| S-05 | Fix BV gate check method | 5 min |
| S-06 | Embed keyword lists | 10 min |
| S-07 | Specify RETHINK backup + exclusion protocol | 15 min |
| S-08 | Separate creative guidance from conventions | 5 min |
| S-09 | Add post-REFINE regression check | 5 min |
| S-10 | Add soft gate risk acknowledgment | 5 min |
| S-11 | Add user direction mechanism | 10 min |
| S-12 | Add content suitability note | 5 min |

**Total SIGNIFICANT fix effort: ~85 min (~1.5 hours).**

---

## WHAT THE PLAN DOES WELL

Despite the fixes needed, this plan is genuinely excellent in several dimensions:

1. **The artifact chain is well-designed.** Every step produces a file. Every subsequent step reads that file. Skip = visible break. This is the strongest structural enforcement mechanism in the project's history.

2. **The prompt templates are complete.** All three window prompts (builder, auditor, REFINE) are copy-pasteable and contain the right information in the right order.

3. **The reconciliation log is thorough.** 8 disagreements between 10 source documents are explicitly resolved with clear reasoning.

4. **The plumbing/freedom boundary is well-drawn** in principle, even if violated in a few specific places (2.5, 4.8, 6.4).

5. **The implementation order is logical.** Phases 1-5 have clear dependencies and parallelism opportunities.

6. **The verification protocol is comprehensive.** 12 structural checks + 16 dry run checks cover the critical paths.

7. **Appendix A (tool call manifest) is uniquely valuable.** No prior pipeline specification listed every tool call in execution order. This makes the process auditable.

The plan needs 17 BLOCKING fixes totaling ~2 hours of work. After those fixes, it is the most complete and actionable implementation specification this project has produced.

---

**END OF ADVERSARIAL REVIEW**
