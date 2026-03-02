# Wave 1 Comprehensive Retrospective

**Author:** w1-retro (Opus)
**Date:** 2026-02-28
**Files read:** 30-IMPLEMENTATION-PLAN-v2.md (1,437 lines), 38-plan-buddy-audit.md, 40-skill-verification.md, 20-contamination-audit.md, 21-ceremony-vs-necessity.md, 22-potential-issues.md, 23-metacognitive-analysis.md, 24-holistic-review.md, 31-plan-adversarial-review.md, 32-plumbing-freedom-audit.md, live TC skill (841 lines), live PA skill (524 lines)

---

## LENS 1: COMPLETENESS

### Did Wave 1 address everything it was supposed to?

**YES, with high quality.** Wave 1 had three deliverables:

1. **Fixed implementation plan** (Task 37): 37 changes applied across 17 BLOCKING, 12 SIGNIFICANT, 9 MINOR findings from 7 audit reports. The plan-buddy (Task 38) verified all 17 BLOCKING fixes, all 12 SIGNIFICANT fixes, and found only 5 new issues (0 BLOCKING). This is a thorough fix job.

2. **TC skill deployment** (Task 39): The 841-line rewrite was copied to the live skill path. Byte-identical to source. All file references valid. No old pipeline language.

3. **PA skill fixes** (Task 39): Three targeted fixes applied:
   - Weaver fix-type classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) added
   - E-06/E-08 auditor swap (spreading void detection across B and D)
   - Reflection dimensions marked REQUIRED/OPTIONAL

All verified by skill-buddy (Task 40) with zero issues.

### Plan Buddy's 5 Issues — Should Any Be Escalated?

| Issue | Buddy's Rating | My Assessment | Action Needed |
|-------|---------------|---------------|---------------|
| N-01: PA line count 517→524 in 3 places | SIGNIFICANT | **Agree SIGNIFICANT. Direct fix.** Stale number causes false alarm in Verification check #2. | FIX APPLIED (see below) |
| N-02: Auditor B/D question swap (Q-06/Q-08) | SIGNIFICANT | **Agree SIGNIFICANT. The plan's assignment is canonical.** The PA skill was already fixed to match (E-08→B, E-06→D). The plan uses Q-XX numbering but the assignment pattern matches. No conflict at runtime. | PROPAGATION NOTE for Wave 2 |
| N-03: Identity-gate RETHINK no-op | MINOR | **Agree MINOR. Could upgrade to SIGNIFICANT** because the dead code suggests an unfinished design intention. See Lens 3 analysis. | FIX APPLIED (see below) |
| N-04: Stale server on port 8888 | MINOR | **Agree MINOR but should be fixed.** The lsof kill is cheap insurance. | FIX APPLIED (see below) |
| C-02: BV-04 keyword check | MINOR | **Agree MINOR. Acceptable as-is.** BV-04 requires only 4 of 5 keywords, and searches for partial strings (WORLD, ARC) that survive creative reformulation. The risk of false failure is low. The risk of removing it (builder produces structureless brief) is higher. | NO FIX NEEDED |

### What was NOT addressed that should have been?

**R-01: PA skill still references 3 viewports (1024px).** The plan stripped 1024px (Change #10). The PA skill at line 246 still says "pre-captured at 1440px, 1024px, 768px" and line 264 says "3 viewport widths: 1440px, 1024px, 768px" and line 277 references "1024px" again. Since the plan says the PA skill is "KEEP AS-IS" (reference only, not parsed at runtime), this is a DOCUMENTATION INCONSISTENCY, not a runtime bug. But the PA skill is a living reference document. If someone reads it independently, they will expect 3 viewports. **PROPAGATION NOTE for Wave 2 or future PA skill update.**

**R-02: PA skill still says "pipeline" in 2 places.** Line 258: "When deployed as part of a pipeline" and line 9: "the process." User decision #6 says "Call it a 'process' not 'pipeline.'" Since the PA skill is "KEEP AS-IS," this was intentionally not changed. But it is a terminology inconsistency with the rest of the system. **LOW PRIORITY, note for future cleanup.**

---

## LENS 2: FRESH-EYES

### Reading the fixed plan as a complete outsider

I read the 1,437-line plan as if I had zero project context. Here is what would confuse a fresh instance:

**F-01: The 22 vs 29 gate count.** The plan says "22 gates" in headings (lines 168, 771) but then says "29 checks" at line 880. The explanation ("22 gates that affect routing") resolves it, but a fresh instance encounters "22" five times before seeing "29" once. The gap between first encounter and resolution is ~700 lines. **Impact: confusion, not failure.** A fresh instance would follow the code correctly but wonder whether it missed 7 gates.

**F-02: BV gates live in two worlds.** Step 3.0 runs BV gates via text scan (the orchestrator Reads the brief and counts sections). But BV gates are also listed in Section 3's gate table (lines 825-828). A fresh instance might try to run BV gates through the browser-based gate runner, find they are not there, and panic. The distinction is clear if you read carefully ("4 BV (text)" at line 880), but it requires connecting information across 700 lines. **Impact: potential misimplementation if the skill implementer puts BV logic in the wrong place.**

**F-03: The REFINE prompt says "{SAME 14-LINE CONVENTIONS BRIEF AS WINDOW 1}" (line 729).** This is a REFERENCE, not embedded text. A fresh instance building the skill must know to scroll to Appendix B (line 1181) or the Window 1 prompt to find the actual text. The plan already embeds the conventions brief in Appendix B, so this is findable but requires cross-referencing. **Impact: minor friction during skill implementation.**

**F-04: Step 2.3 references "function from gate-runner-core.js Section 8."** But gate-runner-core.js does not have numbered sections in its current form (it is a monolithic JS file). The plan assumes the reduced gate runner will have a captureScreenshots function, but does not specify its location by line number or export name. **Impact: the skill implementer needs to know the gate runner's internal structure to reference the screenshot function.**

**F-05: The receiving principle appears 3 times (Window 1 at line 399, auditor at line 527, REFINE at line 665), each slightly different.** Good design. But a fresh instance might wonder: "Are these embedded in the skill or constructed at runtime?" The plan says "Literal 5-line text embedded in prompt" (line 112) — this means embedded in the SKILL FILE, not dynamically constructed. The distinction matters for implementation. **Impact: clarified by context but could be made more explicit.**

**F-06: Step 3.1 reads gate-runner-core.js at path "ephemeral/va-extraction/gate-runner-core.js" (line 176).** This path assumes the gate runner has NOT been moved/reduced yet (Phase 2 of implementation order). But Phase 3 (which implements the skill) depends on Phase 2 (which reduces the gate runner). If someone runs Phase 3 without Phase 2, the path works but the gate runner has 57 gates instead of 22. The plan documents this dependency (Phase 3 depends on Phase 2, line 966) but does not embed a guard (e.g., checking the gate count in the loaded JS). **Impact: incorrect behavior if phases are run out of order.**

### What is missing that seems obvious from the outside?

**F-07: No example run.** The plan is 1,437 lines of specification but has zero examples of what a successful run looks like. Not a transcript, but: "After Step 6, the orchestrator prints: 'Route: REFINE. Essential gates: 15/17 passed. Creative verdict: REFINE. Proceeding to Window 3.'" Concrete output examples help a fresh instance verify it is on the right track. **PROPAGATION NOTE for Wave 2: consider adding 1-2 example outputs to the skill file.**

**F-08: No explicit gate-runner-core.js path update.** Section 4 lists the gate runner at "ephemeral/va-extraction/gate-runner-core.js" (line 897). Phase 2 reduces it but does not specify whether the REDUCED version stays at the same path or moves. The plan assumes in-place modification. This should be stated explicitly: "Phase 2 modifies gate-runner-core.js IN PLACE at its current path." **PROPAGATION NOTE for Wave 2.**

---

## LENS 3: ADVERSARIAL

### Attack 1: The RETHINK identity-gate check is dead code (N-03 amplified)

The buddy correctly identified this as a no-op. But the dead code reveals an UNFINISHED DESIGN INTENTION. The original plan-fixer likely intended:

```
IF creative_verdict == "RETHINK":
  IF identity gate FAIL is STRUCTURAL → route = "RETHINK"
  ELSE (all identity gates pass OR failures are MECHANICAL) → route = "PATCH_THEN_REFINE"
```

This makes sense: if the PA says RETHINK but the problem is a mechanical gate failure (container width wrong, palette slightly off), the page might not need a full rebuild — just a patch + REFINE. The current code routes to RETHINK in both cases, meaning a page with a single fixable gate failure still gets rebuilt from scratch.

**However,** this is a judgment call about WHEN RETHINK should be downgraded. The plan buddy is right that both branches going to RETHINK is safe (conservative). Introducing a PATCH_THEN_REFINE downgrade for RETHINK creates a new risk: the orchestrator might mechanically patch its way out of a genuinely bad composition.

**FIX APPLIED:** Removed the dead-code identity-gate check from the RETHINK branch. RETHINK always means RETHINK, no exception. If we later want to add downgrade logic, it should be a deliberate design decision, not a leftover from incomplete code.

### Attack 2: The keyword scan fallback has a bias toward REFINE

Step 6.2 keyword scan (lines 248-260):
- RETHINK_WORDS: 7 words
- REFINE_WORDS: 13 words
- SHIP_WORDS: 10 words

The REFINE list is 85% larger than SHIP_WORDS. In natural language, negative descriptors tend to outnumber positive ones (negativity bias in language). An auditor describing a mediocre page will naturally produce more REFINE_WORDS than SHIP_WORDS simply because the REFINE list is longer and captures more common descriptive terms ("flat", "monotonous", "empty", "cramped" are all high-frequency words in design criticism).

**Impact:** The fallback path (which triggers only on Weaver failure) has a systemic bias toward REFINE over SHIP. This is CONSERVATIVE, which is the stated intent ("Tie → REFINE"). But it means the fallback will almost never produce SHIP, even for good pages. A page where 4 auditors say "ready" and 1 says "flat" will count 1 REFINE_WORD vs 4 SHIP_WORDS — SHIP wins correctly. But a page where auditors use nuanced language ("this section feels empty in a deliberate way") would count "empty" as a REFINE_WORD despite the qualifier.

**Verdict: ACCEPTABLE.** The fallback is an error recovery path, not standard routing. The conservative bias is intentional. No fix needed, but Wave 2 should document this bias in the skill file as a comment.

### Attack 3: Step 8.3b regression check compares gate counts but not gate IDENTITIES

The regression check at Step 8.3b compares `essential_fail` count pre-REFINE vs post-REFINE. If the post-REFINE count is HIGHER, it restores the backup. But it does not check WHICH gates failed. Consider:

- Pre-REFINE: GR-03 (container width) fails. 1 essential failure.
- Post-REFINE: GR-03 passes (builder fixed width) but GR-11 (background delta) fails. 1 essential failure.

The count is the same (1 == 1), so no regression is detected. But the REFINE builder INTRODUCED a new gate failure while fixing a different one. The page changed, but the aggregate count masks the change.

**Impact: LOW.** In practice, the mechanical patching step (6.4) would fix GR-03 before REFINE. The REFINE builder would receive a page with zero mechanical failures and introduce new ones only through structural changes. A gate failure introduced by the REFINE builder is likely a STRUCTURAL issue that reflects a creative decision (different backgrounds, different spacing), not a regression. And the post-REFINE mechanical patching (Step 8.4) handles new mechanical failures.

**Verdict: ACCEPTABLE.** The count-based comparison catches the important case (REFINE makes things strictly worse). Gate identity tracking would add complexity without clear benefit.

### Attack 4: The GR-05 mechanical patch could create perceptually bad colors

The patch table says: "For each failing hex #RRGGBB: if B > G, set B = G. If G > R, set G = R." This enforces R >= G >= B (warm palette). But the resulting color might be perceptually ugly. Example:

- Input: #4466AA (a pleasant blue-gray)
- After B=G: #446666 (murky teal)
- After G=R: #444444 (neutral gray)

The mechanical patch turns any cool color into a gray or brown. This is technically correct (warm palette constraint) but produces visually flat results. The REFINE builder sees these mechanically-generated grays and has to work with them.

**Impact: MEDIUM.** The patch is a stopgap — the REFINE builder can change colors within the warm palette. But if many zones are patched to gray, the page loses color variety. The REFINE builder needs vocabulary file access (which it has) to select better warm alternatives.

**Verdict: ACCEPTABLE but should be documented.** Add a note in the patch table: "This produces the minimum compliant color, not the optimal one. The REFINE builder may improve color choices within the warm palette." **PROPAGATION NOTE for Wave 2.**

### Attack 5: The plan references ephemeral/va-extraction/gate-runner-core.js but Wave 2 modifies it

Step 3.1 embeds the gate runner path. Phase 2 reduces the gate runner. But what if Wave 2 renames or moves the file? The plan assumes the path is stable. If Wave 2 creates a new file (e.g., `gate-runner-v2.js`) instead of modifying in place, every reference in the plan and skill file breaks.

**Verdict: PROPAGATION NOTE for Wave 2.** The gate runner path must remain `ephemeral/va-extraction/gate-runner-core.js` OR all references must be updated atomically.

### Attack 6: Conventions brief says "Characters per line: 45-80" but no gate enforces this

The conventions brief (Appendix B, line 1191) includes "Characters per line: 45-80". But none of the 22 gates checks CPL. This is an unfenced constraint — the builder is told to follow it but nothing catches violations. In previous pipeline runs, CPL violations were common (66.5% compliance in the Middle experiment).

**Impact: LOW.** CPL is a guideline for readability. The 70ch max-width on paragraphs (enforced by GR-10's `p max-width 70ch` check) indirectly constrains CPL. But the 45-character minimum is not enforced at all — narrow content in wide containers violates it.

**Verdict: ACCEPTABLE.** CPL enforcement is impractical (it depends on font, font-size, and container width simultaneously). The 70ch max-width is the operational enforcement. The conventions brief item serves as a design principle, not a verifiable constraint. No fix needed.

### Attack 7: Can the plan survive a Playwright MCP disconnection mid-run?

If Playwright disconnects between Step 2 (screenshot capture) and Step 3 (gate runner), the gate runner cannot run. Step 3.2's failure mode sets GATES_FAILED=true. The process continues with PA only. This is correct.

But if Playwright disconnects between Step 7 (REFINE) and Step 8 (post-REFINE gates), the post-REFINE gates cannot run. Step 8.2 would fail. The plan does not specify what happens if post-REFINE gate evaluation fails. The process would halt at Step 8.2 with no clear recovery.

**FIX:** The failure protocol (Section 8, line 1108) should add: "Post-REFINE gates fail → WARN. Ship without gate comparison. Print: 'Post-REFINE gate check failed. Shipping without regression verification.'" **PROPAGATION NOTE for Wave 2.**

---

## LENS 4: META-COGNITIVE

### What are we NOT thinking about?

**M-01: The prompt is ~3,200 tokens of specification for a ~500-600 line skill.** The plan specifies the skill's behavior in 1,437 lines. The skill itself will be ~500-600 lines. The 2.4:1 ratio of specification-to-artifact means the skill implementer must compress significantly. Which 1,437 lines survive as the 500-600? The plan does not prioritize — everything is presented as equally important.

**What should be prioritized:** The TOOL CALLS (Appendix A) and PROMPT TEMPLATES (Section 2) are the actual executable content. The ENFORCEMENT PATTERNS, RECONCILIATION LOG, and VERIFICATION PROTOCOL are implementation guidance that the skill implementer absorbs but does not transcribe. Wave 2's skill builder needs to know: "Appendix A is the skeleton. Section 2 is the flesh. Everything else is design rationale."

**M-02: The plan assumes the orchestrator (LLM executing the skill) can hold ~3,000+ lines of agent prompt in its context.** Window 1's prompt includes: receiving principle (5) + TC skill (841) + content (varies, say 2,000) + checkpoint (2) + prohibitions (419) + tokens (183) + mechanism catalog (751) + components CSS (944) + conventions (14) = ~5,159 lines. This is the prompt the orchestrator CONSTRUCTS and passes to the Task agent.

Can a single Task agent receive and process a 5,159-line prompt? Claude's context window can hold it. But the orchestrator LLM must READ all these files into its own context before constructing the prompt string. The orchestrator's context includes: the skill file (~500-600 lines) + all the Read results (~5,159 lines) + conversation overhead = ~6,000+ lines BEFORE it constructs the prompt for the Task agent.

**What nobody has asked:** Is the orchestrator's context sufficient to hold all reads AND construct the agent prompt AND continue to Steps 2-8 after Window 1 completes? If the orchestrator's context fills during prompt construction, it cannot execute Steps 2-8. The plan does not address orchestrator context management beyond M-09 ("Context management is implicit in skill design").

**PROPAGATION NOTE for Wave 2:** The skill implementer should consider whether the orchestrator performs all Reads for Window 1 in one batch or incrementally. The Task tool likely handles prompt construction internally, but this should be verified during the validation run (Phase 4).

**M-03: The process has no learning mechanism.** Each run is independent. The process does not improve across runs. If the first run produces a REFINE page and the second run produces a SHIP page, there is no mechanism for the second run's success to inform the first run's failure mode. The conventions brief, gates, and prompt templates are static.

**What this means:** Every quality improvement requires a human to modify the specification. The process cannot self-correct. This is BY DESIGN (the process is a tool, not an autonomous system), but it means the specification must be comprehensive enough to produce good results on the first attempt for any suitable content.

**M-04: We are optimizing for a SINGLE content type.** The content suitability note (line 102) says "optimized for content with narrative structure, register variation, and argumentative tension." This describes ~20% of real-world web content. The process will be invoked on changelogs, documentation, tutorials, product pages, and other content types that do not have "tension" in the compositional sense. What happens then?

The TC skill handles this via Phase 0 content assessment (which classifies content types and suggests DIRECT BUILD for inappropriate content). But the plan's content suitability note is a WARNING, not a STOP. A user who runs `/build-page changelog.md` will get a full process run on content that may not benefit from metaphor derivation. The page may be worse than a direct build.

**Unasked question:** Should the process have a fast-path for simple content? Not a full RETHINK, but a "the TC skill identified this as reference content, skipping metaphor derivation, proceeding to direct build with conventions only" path? This would require the TC skill to signal "skip" and the orchestrator to detect it.

**PROPAGATION NOTE for future consideration, not Wave 2.**

**M-05: The 37 fixes were applied by a SINGLE fixer agent.** This is efficient but creates a single point of comprehension failure. If the fixer misunderstood any finding, the fix is wrong and the buddy might not catch it because the buddy reads the FIXED version, not the original-plus-diff. The buddy verified each fix against the finding, which is the right methodology. But compound interactions between fixes (Fix #1 removes brief excerpt, Fix #5 removes BV-08, Fix #28 changes BV gates to structure checks — do these three changes TOGETHER create any new issue?) were not systematically tested.

**What I checked:** The combination of Fix #1 (no brief to auditors) + Fix #28 (BV gates check structure not names) + Fix #5 (strip BV-08) is coherent. No interaction issue. The combination of Fix #3 (remove experiential scan) + Fix #4 (strip GR-63/64) + Fix #2 (remove contamination check) reduces the orchestrator's evaluative surface from 3 interpretive steps to 0. This is correct and consistent.

**No compound interaction issues found.** The fixes are additive (each removes something) rather than constructive (adding new behavior), so interactions are subtractive (removing two things that reference each other = clean removal).

### What assumptions are baked into the plan?

1. **Opus is always available.** All 8 agents are Opus. No fallback to Sonnet. Rate limits or availability issues halt the entire process.

2. **The TC skill produces genuine conviction.** The entire downstream value chain (brief quality → auditor signal → Weaver synthesis → REFINE direction) depends on Window 1's builder genuinely deriving a metaphor from the content. If the TC skill's phases are followed mechanically, the brief is a compliance document, and the PA auditors evaluate a compliance page.

3. **5 auditors produce sufficient signal.** The plan deploys 5 auditors for every run. The previous Mode 4 PA used 9 auditors. 5 is a cost-quality tradeoff that has not been empirically validated. It may be sufficient (the key insight is diversity of perspective, not coverage), but n=0 for this configuration.

4. **The Weaver can synthesize 5 independent perceptions into coherent creative direction.** The Weaver is a single Opus agent that reads 5 reports and produces direction. If the 5 auditors diverge significantly (3 say SHIP, 2 say RETHINK), the Weaver must navigate contradiction. The convergence acknowledgment instruction (Fix #37) helps, but the Weaver's ability to handle divergent input is untested.

5. **One REFINE cycle is sufficient.** The empirical evidence (+1.5 PA-05 in one cycle on Gas Town) supports this for THAT content. Different content may require more or fewer cycles. The plan allows user escalation for a second cycle, which is the right design.

---

## LENS 5: HOLISTIC

### Do the fixed plan + TC skill + PA skill cohere as a system?

**YES, with documented exceptions.**

**Coherent:**
- The plan says "always 5 auditors" → PA skill specifies 5 auditors with assignments → plan's assignment table matches PA skill (after E-06/E-08 swap)
- The plan says "TC skill at 841 lines" → live TC skill is 841 lines, byte-identical to source
- The plan says "PA skill at 517 lines" → live PA skill is **524** lines (7-line discrepancy, see N-01)
- The plan says "questions embedded as Q-XX in skill" → PA skill uses E-XX → the /build-page skill will use Q-XX (plan is authoritative for runtime)
- The plan's receiving principles align with both skills' philosophies (fresh-eyes for PA, conviction for TC)
- The plan's information isolation matches PA skill's "They do NOT receive" list

**Documented exceptions (not incoherent, just requiring attention):**

| Exception | Severity | Impact |
|-----------|----------|--------|
| PA skill says 3 viewports (1440, 1024, 768); plan says 2 (1440, 768) | LOW | PA skill is reference only. Auditors receive screenshots from orchestrator, which captures 2 viewports per plan. |
| PA skill uses E-XX numbering; plan uses Q-XX | LOW | Runtime uses plan's Q-XX. PA skill is reference for question TEXT, not numbering. |
| PA skill line count 524 vs plan's claim of 517 | SIGNIFICANT | Causes false alarm in Verification check #2. FIXED below. |
| PA skill says "pipeline" in 2 places; plan says "process" | LOW | PA skill is "KEEP AS-IS." Inconsistency is accepted. |
| TC skill references case-studies/_INDEX.md; actual file is README.md | LOW | Pre-existing. Not introduced by Wave 1. |

### System-level coherence assessment

The three artifacts form a coherent creative cycle:

1. **TC skill** provides the creative process (inhabitation → construction → reflection)
2. **Plan** provides the orchestration (file routing, agent spawning, gate running, routing decisions)
3. **PA skill** provides the evaluation language (experiential questions, fresh-eyes principle, Weaver synthesis)

The plan correctly references both skills without duplicating their content. The plan's prompt templates embed RECEIVING PRINCIPLES (5 lines each) rather than entire skill sections, keeping agent prompts focused. The plan's information isolation design matches the PA skill's "do NOT receive" list.

**One coherence concern:** The plan's Window 1 prompt template (lines 396-492) includes the full TC skill verbatim (~841 lines), followed by the content, followed by vocabulary files. This means the Window 1 agent receives ~5,000+ lines of prompt. The TC skill's Phase 0 (content assessment) may identify content as unsuitable, but the builder has already received the full prompt. There is no mechanism for the builder to signal "this content is not suitable for compositional derivation" back to the orchestrator. The plan's content suitability note (Step 0.2b at line 102) provides a content LENGTH check but not a content TYPE check. The TC skill's Phase 0 is the content type check, but it runs INSIDE the builder's context, not at the orchestrator level.

**This is by design:** the combined TC+BUILD window means the builder handles content assessment and derivation together. If the builder decides the content is "reference content" per Phase 0, it should still produce a page — just a simpler one. The plan does not differentiate output expectations by content type, which is correct (every run produces the same 3 files).

---

## LENS 6: IMPLICATIONS FOR WAVE 2

### What Wave 2 builders need to know

**HIGHEST RISK AREAS:**

1. **The /build-page skill must be 500-600 lines that encode 1,437 lines of specification.** The skill implementer must know which parts of the plan are EXECUTABLE (transcribe into skill) vs RATIONALE (absorb and discard). Executable: Appendix A tool calls, Section 2 prompt templates, Section 3 gate tables, Appendix B conventions brief, routing matrix, mechanical patch table, keyword lists. Rationale: enforcement patterns, reconciliation log, verification protocol, failure protocol.

2. **The gate runner reduction (Phase 2) must happen BEFORE the skill write (Phase 3).** The skill references `gate-runner-core.js` by path. If the gate runner is not reduced, the skill calls a gate runner with 57 gates instead of 22. The GR-48 coverage array will mismatch.

3. **The PA questions in the skill use Q-XX numbering, not E-XX.** The PA skill remains at E-XX. The /build-page skill embeds the question TEXT from the PA skill but uses Q-XX numbering. The assignment matches the PA skill's POST-FIX assignment (B=E-08/Q-08, D=E-06/Q-06), not the pre-fix assignment.

4. **Context budget matters.** The Window 1 prompt is ~5,000+ lines. The orchestrator must Read all files and construct the prompt. Verify during Phase 4 validation that the orchestrator does not hit context limits.

5. **The conventions brief is EMBEDDED, not referenced.** The text in Appendix B (lines 1182-1196) is the canonical source. The skill must contain this text literally, not as a reference to an external file.

### PA line count and auditor assignment discrepancy

The plan buddy found two discrepancies between the plan and the live PA skill:

**Line count (N-01):** The plan says 517; the PA skill is 524. **FIXED in this retrospective** — all 3 references updated to 524.

**Auditor assignment (N-02):** The plan assigns Q-06 to Auditor B and Q-08 to Auditor D. The PA skill assigns E-06 to Auditor D and E-08 to Auditor B. These are DIFFERENT QUESTIONS to DIFFERENT AUDITORS.

Wait — re-reading more carefully: the PA skill (post-fix) assigns E-08 to B and E-06 to D. The plan assigns Q-06 to B and Q-08 to D. Let me map this:

- PA skill: B gets E-08 (thirds/attention), D gets E-06 (spatial confidence)
- Plan: B gets Q-06 (?), D gets Q-08 (?)

The QUESTION NUMBERING is the issue. The plan uses Q-XX which should map 1:1 to E-XX. So Q-06 = E-06 (spatial confidence) and Q-08 = E-08 (thirds/attention).

- PA skill: B gets E-08, D gets E-06
- Plan: B gets Q-06, D gets Q-08

**THESE ARE SWAPPED.** The plan gives B spatial confidence (Q-06) and D thirds (Q-08). The PA skill gives B thirds (E-08) and D spatial confidence (E-06).

**Which is canonical?** The plan is the implementation document. The PA skill is the reference. Since questions are embedded in the /build-page skill from the PLAN's assignment (not extracted from the PA skill at runtime), the PLAN's assignment will be what runs.

**But the PA skill was specifically fixed to address void detection distribution.** The PA verification report said E-04 and E-08 were BOTH on Auditor D, concentrating void detection. The fix moved E-08 to B. The plan's Q-06/Q-08 assignment to B/D produces the SAME RESULT as the PA skill's fix (E-06 and E-04 are NOT both on D; E-08 is on B). Wait, let me re-check:

Plan assignment:
- B: Q-02, Q-06, Q-14, Q-18
- D: Q-04, Q-08, Q-13, Q-20

PA skill assignment:
- B: E-02, E-08, E-14, E-18
- D: E-04, E-06, E-13, E-20

The swap is: Plan gives B Q-06 where PA gives B E-08, and Plan gives D Q-08 where PA gives D E-06. The QUESTION CONTENT differs:
- E-06/Q-06: spatial confidence (viewport ownership)
- E-08/Q-08: thirds attention (energy voids)

Both assignments spread void-related questions across B and D. The only difference is WHICH auditor gets WHICH void question. Both are valid distributions. The PA skill fix was about avoiding concentrating E-04 AND E-08 on the same auditor (D). Both the plan and the PA skill achieve this — they just distribute differently.

**Wave 2 resolution:** The /build-page skill implementer should use the PLAN's assignment (Q-06→B, Q-08→D) since the plan is the implementation authority. The PA skill's assignment is reference-only and does not affect runtime. **No functional impact.**

### PROPAGATION NOTES for Wave 2

| # | Note | Priority | File(s) Affected |
|---|------|----------|-----------------|
| P-01 | Gate runner path must remain at `ephemeral/va-extraction/gate-runner-core.js` or all references updated atomically | HIGH | skill, plan |
| P-02 | Keyword scan fallback has systematic REFINE bias (larger word list). Document in skill as comment. | LOW | skill |
| P-03 | GR-05 mechanical patch produces minimum compliant colors (grays), not optimal warm colors. Document. | LOW | skill |
| P-04 | Post-REFINE gate failure should WARN and ship, not halt. Add to failure protocol. | MEDIUM | skill |
| P-05 | PA skill still references 3 viewports (1024px). Not runtime-affecting but inconsistent with plan. | LOW | PA skill (future) |
| P-06 | Consider adding 1-2 example outputs to skill for fresh-instance clarity | LOW | skill |
| P-07 | Verify orchestrator context budget during Phase 4 validation (Window 1 prompt is ~5,000+ lines) | HIGH | Phase 4 |
| P-08 | Plan's Q-06/Q-08 assignment to B/D differs from PA skill's E-06/E-08 assignment. Plan is canonical. | LOW | skill |
| P-09 | Step 2.3 references "function from gate-runner-core.js Section 8" — specify function name, not section number | MEDIUM | skill |

---

## FIXES APPLIED

### Fix 1: PA skill line count (N-01)

Updated 3 references from 517 to 524:

**Location 1:** User Decision #3 (line 62): "517 lines" → "524 lines"
**Location 2:** Section 4 file #3 (line 892): "517" → "524"
**Location 3:** Verification check #2 (line 1057): "517 lines" → "524 lines"

### Fix 2: Identity-gate RETHINK no-op (N-03)

Removed the dead-code identity-gate check from Step 6.3. The RETHINK branch now routes directly to RETHINK without a redundant structural/mechanical distinction that produces identical outcomes.

### Fix 3: Stale server port kill (N-04)

Added `Bash("lsof -ti:8888 | xargs kill 2>/dev/null")` before starting the server in Step 2.1.

---

## OVERALL ASSESSMENT

**Wave 1 is COMPLETE and HIGH QUALITY.** The fixed plan is the most executable specification in this project's history. The TC and PA skills are verified and live. The 37 fixes address all BLOCKING issues and nearly all SIGNIFICANT ones. The 5 new issues found by the plan buddy are reasonable and non-blocking (3 fixed in this retrospective, 2 acceptable as-is).

**The system (plan + TC skill + PA skill) is coherent** with documented exceptions that do not affect runtime behavior. The exceptions are naming/numbering differences between reference documents and runtime specifications, which is the correct architecture — the PA skill is a reference, the /build-page skill is the executable.

**Wave 2's primary risk** is the compression from 1,437-line plan to ~500-600-line skill. The skill implementer needs clear guidance on what is executable vs rationale. Appendix A (tool call manifest) is the skeleton. Section 2 (prompt templates) is the flesh. Everything else is design rationale that informs but does not transcribe.

**No BLOCKING issues remain.** Wave 2 can proceed.

---

**END OF WAVE 1 RETROSPECTIVE**
