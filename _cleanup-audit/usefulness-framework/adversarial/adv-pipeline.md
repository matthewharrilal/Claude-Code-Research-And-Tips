# ADVERSARIAL CHALLENGE: Pipeline Relevance Dimension

**Challenger:** adv-pipeline
**Date:** 2026-02-13
**Target:** dim-pipeline.md (all claims)
**Task:** Challenge EVERY claim, expose hidden assumptions, test edge cases

---

## EXECUTIVE CHALLENGE

### CLAIM: "Pipeline relevance is about FORWARD CONSUMPTION, not bibliographic citation."

**CHALLENGE:** This assumes we KNOW what the future pipeline will consume. How can we predict what Phase E, F, or G will need when they haven't been designed yet?

**Counter-argument:**
- POST-CD-PIPELINE is a PLAN, not reality. Plans change.
- The document explicitly says "5 intermediate phases (B-G)" but only some are specified.
- What if Phase E pivots and suddenly needs workflow metacognition insights?
- What if component extraction (Phase C) requires audit process knowledge from `_comprehensive-audit/`?

**The fundamental flaw:** You're using a SNAPSHOT of current planning to make PERMANENT deletion decisions. The pipeline document could be updated tomorrow to add new dependencies.

**Risk:** Delete a "Level 1" file today, discover it's needed for Phase F tomorrow, and it's gone forever (except git history, which requires knowing it existed).

---

## CHALLENGE: POST-CD-PIPELINE AS THE ONLY ORACLE

### CLAIM: Only files listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON section are critical dependencies.

**CHALLENGE #1: Implicit Dependencies**

What about files the pipeline SHOULD reference but doesn't? Examples:

**Perceptual-auditing skill:**
- Depends on 48 PA questions (referenced)
- But those questions were DERIVED from audit research
- What if someone needs to ADD question 49?
- Where's the research that explains WHY these 48 questions matter?
- If that research is in a "Level 1" scratchpad, you've lost the reasoning chain.

**Tension-composition skill:**
- 839 lines, referenced in POST-CD-PIPELINE
- But the skill was built from `_tension-skill-research/` (6 files, 207KB)
- If the skill needs refinement, where's the foundational research?
- POST-CD-PIPELINE doesn't list `_tension-skill-research/` in BUILT ON
- By the pipeline-relevance test, that research is "Level 2" (bibliographic)
- **But what if Track 2 compositional strategy needs to evolve the skill?**

**CHALLENGE #2: Research vs. Execution Separation**

The pipeline assumes EXECUTION (using skills) doesn't need RESEARCH (building skills).

**Counter-example from MEMORY.md:**
> "Enricher agents (read research + edit skill files) worked perfectly"

When skill enrichment happened (13th agent team), agents read `_skill-enrichment-research/` to modify the skills.

**Question:** Is `_skill-enrichment-research/` pipeline-relevant?
- POST-CD-PIPELINE doesn't mention it
- But future skill evolution WOULD need it
- Compression ratio test doesn't apply (no synthesis document exists)

**The trap:** Deleting research directories assumes skills will NEVER need evolution. But MEMORY.md shows skills DO evolve (perceptual-auditing 28→48 questions).

---

## CHALLENGE: THE FORWARD-CONSUMPTION TEST

### CLAIM: "Does the pipeline read and apply this file, or just mention it?"

**CHALLENGE #3: Consumption Is Not Binary**

Files fall on a spectrum:

1. **Direct application:** Import a utility function (clearly consumed)
2. **Pattern reference:** "Follow the DD-006-fractal pattern" (consumed as exemplar)
3. **Context understanding:** "See audit results for rationale" (consumed for WHY, not WHAT)
4. **Provenance chain:** "Based on X" (cited but not read)

**The pipeline dimension treats #3 as "bibliographic" and #2 as "critical."**

**Counter-example:**
- CD-005 has a bento grid responsive overflow bug (CRITICAL finding from Phase 2 audit)
- Phase 3 fixes applied the fix
- The fix was documented in `_cd-phase-3-fixes/`
- POST-CD-PIPELINE doesn't reference that directory
- **But what if Phase E migration encounters the SAME bug pattern in a different context?**
- The fix documentation has the REASONING (why the bug happened, how to detect it, how to fix it)
- Is that "bibliographic" or "consumed for pattern recognition"?

**The test "read and apply" is too narrow. Knowledge workers also CONSULT, REFERENCE, and LEARN FROM files.**

---

## CHALLENGE: SYNTHESIS ABSORPTION THEORY

### CLAIM: "If synthesis captured insights at 8-11:1 compression, the scratchpad is 80-90% process noise."

**CHALLENGE #4: Compression Destroys Context**

**From MEMORY.md strategic discoveries:**
> "50:1 compression from agent output to behavioral constraint — 99.8% information loss"

If compression ALWAYS loses information, then 8:1 compression loses ~87.5% of information.

**Questions:**
1. How do you know the LOST 87.5% is "noise" and not "context"?
2. What if the synthesis author made an ERROR and omitted something critical?
3. What if future work needs the PROCESS EVIDENCE, not just the CONCLUSION?

**Example from MEMORY.md:**
> "Playwright contention severe: only 2/13 visual workers got actual Playwright access; rest fell back to source-code analysis"

This is PROCESS EVIDENCE from hierarchical audit. Is it in the synthesis document? Probably not in detail.

**But what if Phase F parallel execution planning needs to know:**
- How many Playwright instances can run concurrently?
- What's the fallback behavior when contention occurs?
- How reliable is source-code fallback vs. live browser inspection?

**This knowledge is buried in scratchpads, not synthesis documents.**

**Counter-argument:** The synthesis captured FINDINGS, not METHODS. Future phases might need methods.

---

## CHALLENGE: THE VALIDATED DELIVERABLE EXCEPTION

### CLAIM: "DD/OD/AD/CD explorations are pipeline-relevant because they're validated deliverables."

**CHALLENGE #5: What About FAILED Explorations?**

**From CD Phase 2 audit:**
- CD-005: 33/40 score (1 CRITICAL bug)
- CD-002: 37/40 (multiple HIGH findings)

These are "validated" in the sense of "passed audit" but they have KNOWN ISSUES.

**Question:** Are the AUDIT REPORTS pipeline-relevant?

**Test:**
- Phase E migration might encounter similar bugs
- The audit reports explain WHY the bug happened, not just THAT it happened
- CD-005 bento grid overflow at 768px — the audit report has the ROOT CAUSE analysis
- Is that report "bibliographic" or "consumed for pattern understanding"?

**The pipeline dimension says:**
- CD-005.html = Level 5 (CRITICAL, validated deliverable)
- CD-005 audit report = Level 2 (BIBLIOGRAPHIC, findings absorbed into summary)

**But the HTML shows the BUG, the audit report shows the DIAGNOSIS.**

**Which is more useful for future bug prevention?**

---

## CHALLENGE: FUTURE PHASES NOT YET PLANNED

### CLAIM: "Files needed for future phases are pipeline-relevant even if not in POST-CD-PIPELINE/CLAUDE.md."

**CHALLENGE #6: This Contradicts the Core Test**

**The document says:**
- Line 12: "Pipeline relevance is about FORWARD CONSUMPTION, not bibliographic citation."
- Line 139: "These are pipeline-relevant even if not explicitly listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON"

**Which is it?**

**If POST-CD-PIPELINE is the oracle (Test 1), then unlisted files fail.**

**If future phases can add dependencies (Exception), then the oracle is incomplete.**

**The rubric breaks down:**
- Level 5: "Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON OR validated deliverable"
- Level 4: "Referenced in multiple pipeline docs"

**What about files needed for Phase F that ISN'T referenced yet because Phase F isn't designed yet?**

**By the rubric, they're Level 1 (NOT RELEVANT) until Phase F is designed, then they jump to Level 5.**

**Problem:** If you delete them at Level 1, they're gone when Phase F needs them.

---

## CHALLENGE: THE STRATEGIC PRINCIPLE

### CLAIM (from MASTER-VERDICT.md): "Delete everything that isn't forward-consumed by the post-CD pipeline."

**CHALLENGE #7: Git History Is Not a Safety Net**

**From MEMORY.md:**
> "The orchestrator trap: user is single point of failure with zero bus factor"

**Scenario:**
1. User deletes `_workflow-metacognition/` (Level 2, bibliographic)
2. 6 months pass
3. New teammate joins, needs to understand WHY binary rules achieve 100% compliance
4. Synthesis document says "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"
5. Teammate asks: "What research proved this? What were the examples?"
6. Lead says: "It's in git history at commit abc123"
7. Teammate: "Which file? What was it called?"
8. Lead: (has to remember, or search commit messages, or grep git history)

**Git history is ONLY useful if you:**
1. Know the file existed
2. Know what it was called
3. Know approximately when it was deleted
4. Have git archaeology skills

**Counter-proposal:** ARCHIVE (move to `_archive/`) preserves discoverability without polluting working tree.

**The binary DELETE/KEEP is false. There's a middle ground: ARCHIVE.**

---

## CHALLENGE: REFERENCE COUNT ≠ PIPELINE RELEVANCE

### CLAIM: "A file with 100 bibliographic citations is LESS pipeline-relevant than a file with 1 code import."

**CHALLENGE #8: Import Types Are Not Equal**

**Code imports:**
1. **Critical dependency:** `import { validate } from './validator'` — breaks if deleted
2. **Convenience import:** `import { log } from './logger'` — can be replaced
3. **Type import:** `import type { Config } from './types'` — TypeScript only, not runtime

**The claim treats ALL code imports as equally critical.**

**Counter-example:**
- A file has 1 type import (TypeScript type checking)
- Another file has 50 bibliographic citations in strategic planning docs

**Which is more pipeline-relevant for EXECUTION work?**

**The type import could be replaced with `any` (bad practice, but possible).**
**The 50 citations might indicate FOUNDATIONAL RESEARCH that informs strategy.**

**The test "import > citation" is oversimplified.**

---

## CHALLENGE: COMPRESSION RATIO THRESHOLD

### CLAIM: "If compression ratio >5:1 AND references are bibliographic → Level 2 (BIBLIOGRAPHIC ONLY)"

**CHALLENGE #9: The 5:1 Threshold Is Arbitrary**

**Questions:**
1. Why 5:1 and not 3:1 or 10:1?
2. Is the threshold the same for ALL document types?
3. What if a scratchpad is 90% redundant BUT contains 1 critical insight NOT in the synthesis?

**Example:**
- Scratchpad: 5,000 lines
- Synthesis: 500 lines (10:1 compression)
- 4,950 lines are process noise
- 50 lines are UNIQUE INSIGHTS not in synthesis (edge cases, failure modes, method details)

**By the compression test, DELETE the scratchpad.**

**Result: 50 lines of unique insights are lost.**

**The test assumes synthesis authors are PERFECT and captured EVERYTHING worth preserving.**

**Counter-evidence from MEMORY.md:**
> "Fresh-eyes zero-context agent found 8 cross-page issues research-loaded auditors missed entirely"

If RESEARCH-LOADED auditors missed issues, synthesis authors can too.

---

## CHALLENGE: THE CITED VS CONSUMED DISTINCTION

### CLAIM: "PhD thesis cites 200 papers. Do you need all 200 papers to understand the thesis? No."

**CHALLENGE #10: Research ≠ Software Development**

**In academia:**
- Citations establish intellectual lineage
- Readers trust the author synthesized correctly
- Original papers are PUBLISHED and PERMANENT (not deleted after thesis)

**In this project:**
- "Citations" are file references
- No peer review of synthesis quality
- Original files CAN BE DELETED based on synthesis

**The analogy breaks because:**
1. Academic papers remain accessible after thesis publication
2. Readers can verify synthesis quality by reading cited papers
3. Future researchers can build on original papers directly

**In this project, deleting scratchpads is like:**
- Publishing a thesis
- Then BURNING all 200 cited papers
- Trusting the thesis captured everything worth preserving

**What if the thesis author made a synthesis error?** In academia, you re-read the original papers. Here, they're deleted.

---

## CHALLENGE: IMPLICIT PIPELINE DEPENDENCIES

### CLAIM: Only explicit BUILT ON entries are critical dependencies.

**CHALLENGE #11: Structural Dependencies Aren't Listed**

**Example: Token System**

POST-CD-PIPELINE depends on:
- Tension-composition skill
- Which depends on design tokens (spacing, typography, colors)
- Which depend on `DESIGN-SYSTEM/`
- Which has a provenance chain
- Which references `archive/tokens/` (DANGEROUS wrong values)

**The pipeline doesn't list `DESIGN-SYSTEM/` in BUILT ON.**

**But if you delete `DESIGN-SYSTEM/`, how do future builders know:**
- Which tokens are canonical?
- Which are superseded?
- Why border-radius: 0 is soul-critical?

**The pipeline IMPLICITLY depends on design system documentation, even if not explicitly listed.**

**Another example: Soul compliance**

**From MEMORY.md:**
> "Soul violations introduced: 0 (border-radius: 0, box-shadow: none, no drop-shadow)"

Every CD/migration phase must maintain soul compliance.

**Question:** Where is the SOUL SPECIFICATION documented?

**If it's in a "Level 2" synthesis document that absorbed scratchpads, and the synthesis says "no border-radius" but doesn't explain WHY, future builders lose the rationale.**

**The WHY is as important as the WHAT for long-term maintenance.**

---

## CHALLENGE: EDGE CASE — THREADING DATA

### CLAIM (from MASTER-VERDICT.md): "Does 02-threading-data/ contain useful lookup data OR just batch manifests?"

**CHALLENGE #12: Lookup vs. Archive Is a False Binary**

**Scenario:**
- Phase C component extraction starts
- Extractors need to know: "Which files have full provenance headers vs. light sections?"
- Threading data has this information in structured form
- Extractors COULD grep every file, but threading data is PRE-COMPUTED

**Is this "lookup utility" (Level 4) or "batch manifests" (Level 1)?**

**The pipeline dimension doesn't account for EFFICIENCY value.**

**A file might not be REQUIRED (work is possible without it) but HIGHLY EFFICIENT (saves hours of recomputation).**

**Where does efficiency value fit in the 5-level scale?**

---

## CHALLENGE: SCREENSHOT DELETION

### CLAIM: "Audit screenshots from completed audits → Level 1 (NOT RELEVANT) — delete. Playwright can regenerate on demand."

**CHALLENGE #13: Regeneration Assumes Stability**

**Counter-argument:**
1. Screenshots from Phase 2 audit captured state BEFORE Phase 3 fixes
2. If you regenerate screenshots NOW, you get state AFTER fixes
3. Before/after comparison requires BOTH sets of screenshots
4. Deleting "before" screenshots loses the comparison capability

**Example:**
- CD-005 had bento grid overflow at 768px (Phase 2 audit screenshot shows the bug)
- Phase 3 applied fix
- New screenshot shows it fixed
- **Deleting Phase 2 screenshot loses visual proof of WHAT WAS FIXED**

**Use case:** Documentation of bug fixes for future reference, onboarding, or pattern recognition.

**Counter-argument to "Playwright can regenerate":**
- Only if the bug still exists
- After fix is applied, regeneration shows FIXED state, not BROKEN state
- Historical screenshots preserve BEFORE state

---

## CHALLENGE: THE BINARY CUT (KEEP/DELETE)

### CLAIM: "Binary cut for cleanup decisions: Levels 4-5 = KEEP, Levels 1-2 = DELETE/ARCHIVE"

**CHALLENGE #14: Level 3 Is Undefined**

**The rubric says:**
- Level 3: "Synthesis points to it but could stand alone"
- Decision: "Level 3 requires judgment"

**This violates the MEMORY.md principle:**
> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"

**If Level 3 requires judgment, agents will make INCONSISTENT decisions.**

**Scenario:**
- Agent A evaluates `_pipeline-evolution-research/` as Level 3
- Agent A's judgment: "Synthesis could stand alone" → DELETE
- Agent B evaluates same directory as Level 3
- Agent B's judgment: "Helpful context, might be needed" → KEEP

**Result: Inconsistent cleanup across different agent teams.**

**The binary cut FAILS for Level 3. You need a TIEBREAKER rule:**
- Level 3 with >100 references → KEEP
- Level 3 with <10 references → DELETE
- Level 3 with 10-100 references → ARCHIVE

**Or eliminate Level 3 entirely by adding more binary tests.**

---

## CHALLENGE: THE ACTIONABLE VS. ARCHIVAL DISTINCTION

### CLAIM: "Pipeline relevance is about ACTIONABLE value, not archival value."

**CHALLENGE #15: Archival Value Has Future Actionable Value**

**Example from MEMORY.md:**
> "Playwright contention severe with 4+ visual agents"

**This is archival (describes past execution) AND actionable (informs future agent topology design).**

**When Phase F parallel execution planning happens, this finding is ACTIONABLE:**
- Don't spawn 4+ Playwright agents in parallel
- Use sequential waves or file-only agents
- Design topology to minimize contention

**The archival/actionable binary is FALSE. Archival documentation becomes actionable when future work encounters similar problems.**

**Counter-example:**
- Session logs from OD build = archival, not actionable (agent spawn times, message counts)
- Team topology lessons from OD build = archival AND actionable (informs future teams)

**The distinction isn't archival vs. actionable, it's:**
- **Historical evidence** (timestamps, raw output, process noise) = archival only
- **Extracted lessons** (patterns, failures, insights) = archival + actionable

**The pipeline dimension conflates these.**

---

## CHALLENGE: PIPELINE EVOLUTION

### CLAIM: POST-CD-PIPELINE is the definitive source for what's needed.

**CHALLENGE #16: Pipelines Evolve, Files Don't Resurrect**

**From MEMORY.md:**
> "Complexity ratchet: rules only accumulate, never retire — needs sunset protocol"

**Applied to pipeline:**
- POST-CD-PIPELINE v1 (current): Lists `_cd-research/`, `_migration-research/`
- POST-CD-PIPELINE v2 (3 months later): Adds `_component-taxonomy-research/` for Phase C
- POST-CD-PIPELINE v3 (6 months later): Adds `_workflow-metacognition/` for Phase G agent topology

**If you DELETE based on v1, you can't resurrect for v2/v3 without:**
1. Knowing the file existed
2. Finding it in git history
3. Extracting it
4. Re-validating it still applies

**Git archaeology is EXPENSIVE in time and expertise.**

**Alternative approach:**
- ARCHIVE (not delete) anything not in current pipeline
- Preserve discoverability and easy resurrection
- Cleanup working tree without permanent loss

**The KEEP/DELETE binary ignores the "might be needed later" category.**

---

## CHALLENGE: THE CORE PRINCIPLE ANALOGY

### CLAIM: "The synthesis shapes execution; the scratchpad prevents you from forgetting the process. But for pipeline execution, only the synthesis is needed."

**CHALLENGE #17: This Assumes Perfect Synthesis**

**From the core principle:**
> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

**Applied to files:**
> "The synthesis shapes execution; the scratchpad prevents it from breaking execution."

**Counter-analogy:**
- Metaphor without guardrails → broken UX (compression ratio failures, viewport issues)
- Synthesis without scratchpads → broken execution (missing context, lost methods, forgotten edge cases)

**Example from skill enrichment:**
> "Root cause: Metaphor-driven visual compromise — metaphors encode spatial biases as CSS values"

**This insight required reading BOTH:**
1. The HTML layouts (metaphor output)
2. The research (guardrail derivation)

**If research was deleted as "Level 2 bibliographic", the root cause analysis would have been HARDER or IMPOSSIBLE.**

**The scratchpads are the GUARDRAILS for the synthesis.**

**Deleting them is like deleting viewport constraints because "the metaphor captures the design intent."**

---

## STRUCTURAL CRITIQUE: THE 5-LEVEL SCALE

**CHALLENGE #18: Ordinal Scale Implies Ranking, But Decisions Are Binary**

**The scale:**
- Level 5: CRITICAL
- Level 4: ACTIVE
- Level 3: INDIRECT
- Level 2: BIBLIOGRAPHIC
- Level 1: NOT RELEVANT

**Binary cut:** 4-5 KEEP, 1-2 DELETE, 3 = judgment

**This is really a 3-category system:**
1. KEEP (5, 4)
2. MAYBE (3)
3. DELETE (2, 1)

**Why have 5 levels if only 3 buckets matter?**

**Simpler rubric:**
- **LOAD-BEARING** (breaks pipeline if deleted) → KEEP
- **ARCHIVAL** (useful for context, not required) → ARCHIVE
- **NOISE** (process artifacts, no future value) → DELETE

**3 categories, 3 actions, 100% coverage, no judgment needed.**

---

## SYSTEMIC CHALLENGE: WHAT IF THE PIPELINE IS WRONG?

**CHALLENGE #19: Optimizing for a Potentially Flawed Plan**

**From MEMORY.md strategic discoveries:**
> "Only 2.5% of planning content (430/17,084 lines) is on critical execution path"

**If 97.5% of planning is NOT critical, how confident are we that POST-CD-PIPELINE correctly identifies the 2.5% that IS critical?**

**Scenario:**
1. POST-CD-PIPELINE was created by agent synthesis team
2. Team focused on EXPLICIT dependencies (code imports, BUILT ON entries)
3. Team missed IMPLICIT dependencies (research foundations, method documentation)
4. Cleanup deletes based on POST-CD-PIPELINE guidance
5. Phase E starts, discovers deleted file was needed
6. Recovery requires git archaeology or re-research

**The pipeline dimension treats POST-CD-PIPELINE as AUTHORITATIVE.**

**But POST-CD-PIPELINE is itself a SYNTHESIS (from multiple research packages).**

**By its own logic, it's subject to synthesis errors and compression loss.**

**What's the error rate? 1%? 5%? Unknown.**

**Delete 100 files based on pipeline guidance with 5% error rate = 5 files incorrectly deleted.**

---

## FINAL ADVERSARIAL POSITION

**The pipeline relevance dimension has value BUT:**

1. **Treats planning documents as oracles** when they're snapshots subject to revision
2. **Assumes synthesis is perfect** when compression inherently loses information
3. **Ignores implicit dependencies** (research foundations, method docs, process learnings)
4. **Conflates archival and actionable** when many archival documents have future actionable value
5. **Uses binary KEEP/DELETE** when ARCHIVE is a viable middle ground
6. **Optimizes for current pipeline** at the expense of future phase flexibility
7. **Treats all imports equally** when import criticality varies widely
8. **Has arbitrary thresholds** (5:1 compression, reference count) without justification
9. **Creates judgment category (Level 3)** violating binary rule principle
10. **Relies on git history safety net** that requires expertise and prior knowledge

---

## RECOMMENDATIONS

### 1. Add ARCHIVE Category
- KEEP: Pipeline-critical (Levels 4-5)
- ARCHIVE: Historical/context value (Levels 2-3)
- DELETE: Pure noise (Level 1 only)

### 2. Require Dual Confirmation for DELETE
- File must be Level 1 (NOT RELEVANT) by pipeline test
- AND have archival value score <2/10 by historical-value test
- Both tests pass → DELETE; either fails → ARCHIVE

### 3. Version the Pipeline Guidance
- POST-CD-PIPELINE v1 → cleanup decisions tagged "PCD-v1"
- When pipeline updates to v2, review "PCD-v1" ARCHIVE for resurrection
- Preserves flexibility without polluting working tree

### 4. Separate Research from Artifacts
- Skills/specs = KEEP (used for execution)
- Research that built them = ARCHIVE (might be needed for evolution)
- Process logs = DELETE (no future value)

### 5. Explicitly List Implicit Dependencies
- Add "IMPLICIT DEPENDENCIES" section to POST-CD-PIPELINE/CLAUDE.md
- Include: research foundations, token system, soul specification, method docs
- Makes hidden dependencies visible for evaluation

### 6. Use Conservative Compression Threshold
- 5:1 compression → 80% info loss → HIGH RISK
- 10:1 compression → 90% info loss → MODERATE RISK
- 20:1 compression → 95% info loss → LOW RISK (likely noise)
- Only DELETE scratchpads with >20:1 compression AND bibliographic-only references

### 7. Preserve Before/After State
- Audit screenshots from BEFORE fixes → ARCHIVE (not DELETE)
- Enables visual documentation of what was fixed
- Regeneration only works for current state, not historical

---

## TASK COMPLETION

Task #18 (Challenge pipeline dimension) — **COMPLETE**

**Key challenges:**
1. POST-CD-PIPELINE is a snapshot, not an oracle — pipeline can evolve
2. Synthesis compression loses 80-95% of information — assumes perfect capture
3. Implicit dependencies (research, methods, context) aren't tested
4. Binary KEEP/DELETE ignores ARCHIVE middle ground
5. Level 3 "judgment" category violates binary rule principle
6. Git history safety net requires expertise and prior knowledge
7. Archival value often has future actionable value
8. Compression threshold (5:1) and reference count tests are arbitrary
9. Pipeline could be wrong — optimizing for potentially flawed plan
10. Academic citation analogy breaks (papers aren't deleted after thesis)

**Output:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/_cleanup-audit/usefulness-framework/adversarial/adv-pipeline.md`
