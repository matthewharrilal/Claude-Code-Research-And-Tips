# Fresh-Eyes Pipeline Review: Pipeline v3 Visual Architecture

**Reviewer:** Fresh-eyes Opus agent (zero prior context)
**Date:** 2026-02-24
**Files reviewed:** 11 operational pipeline files as specified
**Approach:** First-read evaluation with no knowledge of Waves 1-3, info-loss investigation, or prior builds

---

## Overall Rating: 3.5 / 5 (FUNCTIONAL — would work with competent orchestrator, but fragile)

---

## 1. USABILITY: Could I run this pipeline?

**Verdict: YES, but it would take 2-3 hours of reading before I felt confident starting.**

### What works
- The SKILL.md entry point is clean. It tells me exactly what to do: read MANIFEST.md, follow the 11-step quickstart. That is a good on-ramp.
- The MANIFEST.md quickstart (lines 10-41) is genuinely useful. 11 numbered steps, each referencing the detailed section below. I could follow this mechanically.
- The EXECUTION-TRACKER-TEMPLATE.md is excellent. It turns the abstract pipeline into a concrete fill-in-the-blanks form. The routing verification checklists per phase are a strong accountability mechanism. This is the single best operational document in the set.
- The gate-manifest.json is a well-structured machine-readable TOC. Execution order is explicit. Tier breakdown is clear.

### Where I would get confused

1. **The 73-line vs 165-line vs 3,600-line confusion.** The MANIFEST says the builder receives an "Execution Brief (~100-165 lines)" but also says "honest complexity: ~3,600 lines total builder input." The recipe says "73-line template." These three numbers describe different things but they are used interchangeably in different sections. A first-time reader does not know which number describes what without reading 500+ lines of context. **This is the #1 usability problem.**

2. **Artifact-3 and Artifact-4 are redirects.** SKILL.md lists 9 artifacts numbered 1-9, but artifacts 3 and 4 just say "Redirect -- see split files." So I actually need to navigate to 5 gate-runner files and 5 PA files. The table in SKILL.md lists them, but the numbered artifact scheme breaks down. I am now tracking 19 files, not 9.

3. **Where is `council-verdict.md`?** The MANIFEST references it repeatedly as "authoritative override" but it is NOT one of the 9 numbered artifacts. It appears in the prerequisite list (line 18) and in the file path registry (line 946). Its role is ambiguous: "All council rulings are already incorporated into the 9 artifacts" (line 680) but also "the orchestrator should read council-verdict.md to resolve ambiguities" (line 680). So do I need it or not? And if I do, when do I read it? Before or after the 9 artifacts?

4. **The BV gates run on text, not Playwright.** This is stated clearly in several places but the fact that `runBriefVerification(briefText)` is in `gate-runner-core.js` alongside the Playwright functions creates a conceptual mismatch. The brief verification happens in Phase 1, but the code file is called "gate-runner-core" which implies Phase 3A. A first-time orchestrator might not realize they need to call BV gates BEFORE spawning the builder.

5. **What is the content for my first test run?** The pipeline requires "raw content markdown" but provides no guidance on what makes good test content. The worked examples reference "Gas Town" but I do not have that content file path listed in the prerequisites. If I wanted to do a dry run, I would not know what to feed it.

---

## 2. NAVIGATION: Is the MANIFEST a good entry point?

**Verdict: The MANIFEST is an excellent reference document but a mediocre execution guide.**

### Strengths
- Section numbering is logical (1-9 + appendices A-F)
- The Agent Roster (Section 2) gives me a complete cast list with inputs/outputs
- The Artifact-to-Agent Routing Table (Section 3) is the heart of the pipeline and it is thorough
- Appendix B (File Routing Quick Reference) is the most useful single page for a working orchestrator
- Appendix D (File Path Registry) eliminates path-guessing entirely
- Appendix E (Agent Prompt Templates) gives me copy-paste prompts with variables. This is outstanding.

### Weaknesses
- At 1,197 lines, the MANIFEST is too long to hold in working memory. By the time I reach Section 7 (verdict logic), I have forgotten details from Section 3 (routing). The quickstart helps but it does not eliminate this problem.
- The MANIFEST conflates REFERENCE and PROCEDURE. Sections 1-3 are reference material (what exists, how it maps). Sections 4-6 are procedure (do this, then that). These should be visually distinct. They are not.
- "Known Limitations" is buried on line 969 as a single bullet point about the orchestrator artifact being dense. This should be at the top, not the bottom. Known limitations are the first thing a new reader needs.
- The dependency graph (Section 5) is ASCII art that works well, but there is no timing diagram. The quickstart says "~80-105 minutes" but does not break this down. The Phase-by-Phase section (Section 4) has time estimates per phase, which helps, but they are scattered across 200 lines.

### Navigation verdict
MANIFEST.md works as the central hub IF you also have the quickstart memorized. Without the quickstart, you would drown in the reference material. The quickstart is the real entry point; the MANIFEST is the backup manual.

---

## 3. CONSISTENCY: Do files agree with each other?

**Verdict: Mostly consistent, with a few concerning discrepancies.**

### Consistent
- Gate IDs are consistent across gate-manifest.json, gate-runner-spec.md, and gate-runner-core.js
- PA question assignments match between pa-deployment.md and MANIFEST.md Section 2
- The verdict logic (SHIP/SHIP WITH FIXES/REFINE/REBUILD) is stated identically in MANIFEST.md, gate-manifest.json, gate-runner-spec.md, and pa-weaver.md
- File paths in Appendix D match actual file references throughout
- The "fresh-eyes" principle is consistently enforced across pa-deployment.md, MANIFEST.md, and the PA auditor prompt templates

### Discrepancies found

1. **Gate count inconsistency.** gate-runner-spec.md line 23 says "Total Playwright-executable gates: 35" but then the tier breakdown adds up to 35 (18+8+5+4). Meanwhile, gate-manifest.json `totalGateCount.grandTotal` says 41, and `inGateRunner` says 31. The MANIFEST says "37 gates" repeatedly. gate-runner-core.js header says "Total Playwright-executable gates: 31" with separate counts that add to 31+4 BV+2 diagnostic = 37. The discrepancy: is it 31, 35, 37, or 41? The answer appears to be 31 in gate-runner code + 4 BV + 2 diagnostic (report-only) = 37 total, with 6 moved to orchestrator = 43 historical. But gate-runner-spec.md saying "35" does not match any of these sums. **This will confuse an orchestrator trying to verify completeness.**

2. **Brief line count.** MANIFEST says "~100-165 lines" for the Execution Brief. The recipe says "73-line template." The TC Brief Template is "~165 lines." The Brief Assembler prompt template (Appendix E, line 1020) says "Total: ~100-165 lines." But the recipe (artifact-builder-recipe.md line 69) says "73-line template — shared identity." These are different documents (TC Brief Template vs Execution Brief vs constraint layer) but a reader who skims will conflate them.

3. **Integrative Auditor PA-05 scoring responsibility.** The MANIFEST is internally consistent on this (FIX-083: Weaver scores PA-05, not Integrative Auditor). But the Integrative Auditor prompt template (Appendix E, lines 1129-1134) tells the Integrative Auditor to "Rate each sub-criterion PASS/FAIL" under "PA-05 SYNTHESIS." This contradicts the explicit statement on line 165 that "PA-05 scoring is the WEAVER's responsibility per FIX-083." The prompt template appears to be stale and not updated to match the FIX-083 ruling. **This is a BLOCKING inconsistency** — the Integrative Auditor will produce a PA-05 score that conflicts with the Weaver's score, creating confusion.

4. **D-09 evidence status.** artifact-builder-recipe.md line 6 says "Evidence status for D-01 through D-09: EXPERIMENTAL." MANIFEST line 242 says "D-01 through D-08 are ALL EXPERIMENTAL per council verdict CF-02/G. D-09 (The Quiet Zone) was added in Wave 3." The D-09 line does not explicitly call it EXPERIMENTAL, though it is grouped with D-01-D-08. Minor but worth noting.

---

## 4. COMPLEXITY: Is this too complex for an LLM to reliably execute?

**Verdict: It is at the upper boundary of what a single orchestrator agent can manage. The key risk is not individual step complexity but CUMULATIVE cognitive load.**

### Complexity analysis

**Good complexity (earned its place):**
- The 4-phase structure (Content Analysis -> Brief Assembly -> Building -> PA Audit) is clean and necessary.
- The brief verification loop (BV-01 through BV-04) before building is smart. 5 minutes of checking prevents 45 minutes of wasted work.
- The fresh-eyes isolation is well-designed. It adds complexity but prevents a known failure mode.
- The gate tiering (REQUIRED/RECOMMENDED/ADVISORY) is practical — it allows partial failure without total pipeline collapse.

**Bad complexity (over-engineered):**
- **The dual-route pattern** is explained at length but operationally simple: builder sees world-description, gates see binary checks. This principle is stated at least 8 times across the files I read. Once in the MANIFEST quickstart and once in the routing table would suffice.
- **Evidence taxonomy** (FACT/PROVEN/OBSERVED/CONFOUNDED/THEORETICAL/SPECULATIVE) is attached to every gate and many items. An orchestrator executing the pipeline does not need to know that GR-08 has "OBSERVED" evidence level. This is research metadata, not operational data. It clutters the execution documents.
- **The item tracking system** (ITEM 7, extract-d12-d14.md, VA L980) appears throughout artifact-builder-recipe.md and artifact-orchestrator.md. These provenance citations are valuable for auditing but create enormous visual noise for an executing agent. The builder recipe has more provenance citations than recipe instructions in some sections.
- **885 items tracked across 9 layers** is impressive as a coverage guarantee but irrelevant to execution. The MANIFEST's Section 9 (Coverage Verification) is audit infrastructure, not operational content.

### The real risk

The orchestrator must hold in working memory:
1. The 11-step quickstart
2. Which files to give which agents (Appendix B)
3. What NOT to give the builder (7 exclusion items)
4. BV gate logic (4 gates, text-based)
5. Verdict logic (8-rule priority order)
6. Screenshot protocol (3 viewports, naming convention)
7. Circuit breaker rules (1 REBUILD + 1 REFINE max)

That is approximately 40-50 discrete rules. An Opus agent can handle this, but a Sonnet agent likely cannot without instruction degradation. The pipeline's own model mandate (Opus for everything) is load-bearing.

---

## 5. FIRST IMPRESSIONS: What's well-designed? What's over-engineered?

### Well-designed

1. **The information isolation architecture.** Builder does not see gates. Auditors do not see the brief. Weaver does not see raw screenshots (only reports). This is a disciplined separation of concerns that prevents specific, documented failure modes. It is the single most sophisticated aspect of the pipeline.

2. **The recipe vs checklist distinction.** The insight that "Read/Select/Deploy/Assess" produces better output than "Verify/Fail if/Must be" is validated by evidence and consistently applied. BV-03 even gate-checks it. This is a genuine contribution to LLM prompt engineering.

3. **The execution tracker template.** Converting abstract pipeline phases into a concrete fill-in form with checkboxes is operationally brilliant. It turns "did I do everything?" from a memory task into a verification task.

4. **The prompt templates in Appendix E.** Copy-paste-ready prompts with `{VARIABLE}` placeholders eliminate a major source of orchestrator error. Every pipeline should have these.

5. **The gate-runner as Playwright JavaScript, not a separate agent.** This is a smart architectural decision. Programmatic verification is faster, cheaper, and more reliable than asking an LLM to interpret CSS.

### Over-engineered

1. **The provenance tracking system.** Every rule cites its source item ID, extraction document, and VA line number. This is forensic-grade traceability that serves pipeline auditors, not pipeline operators. In the builder recipe, it nearly doubles the line count. An operational version of the recipe should strip all `[ITEM xxx]` citations.

2. **The suppressor history.** "20 historical suppressors, currently 0 active" is documented in detail across multiple files. If they are all inactive, mentioning them at all creates cognitive load for no operational benefit. A single sentence ("historical suppressors have been retired") would suffice.

3. **The evidence taxonomy on gates.** Whether GR-05 is tagged "FACT" or "OBSERVED" does not change how the orchestrator runs it. The tags serve research purposes but add visual noise to execution documents.

4. **The CCS (Compositional Coherence Score) warnings.** CCS is mentioned in pa-questions.md, pa-weaver.md, and MANIFEST.md with repeated warnings that it is a "RESEARCH CONSTRUCT, do not operationalize." If it cannot be operationalized, remove it from operational documents entirely. Each mention creates a question ("should I care about this?") that the reader must actively dismiss.

5. **The council-verdict.md reference pattern.** The MANIFEST says all council rulings are incorporated into the 9 artifacts. Then it says to read council-verdict.md to resolve ambiguities. Then it says artifacts are self-sufficient. This hedge costs more than it saves. Either council-verdict.md is required reading or it is not. Pick one.

---

## 6. MISSING: What would I need that isn't here?

1. **A one-page cheat sheet.** The MANIFEST quickstart is 32 lines. The full MANIFEST is 1,197 lines. I need something in between: a 2-page operational reference card (one side: flow + timing, other side: agent inputs/outputs + key rules). This does not exist.

2. **A sample content file for test runs.** The worked examples artifact references Gas Town but I do not have a path to a test content markdown. I cannot do a dry run without sample input.

3. **Error handling for agent failures.** Phase 2 failure table (line 635) says "Re-spawn Builder" if it produces no output. But what if the builder produces an HTML file that fails to serve over HTTP? What if Playwright crashes mid-gate-run? What if a PA auditor responds with garbage? The failure tables cover logical failures (wrong verdict, bad brief) but not infrastructure failures (timeouts, crashes, malformed output).

4. **A timing breakdown.** The MANIFEST says "80-105 minutes" total. Per-phase estimates exist but are scattered. I need a consolidated timing table:

   | Phase | Duration | Agents | Parallel? |
   |-------|----------|--------|-----------|
   | Phase 0 | ~15 min | 1 | No |
   | Phase 1 | ~15 min | 1 + BV loop | No |
   | Phase 2 | ~45 min | 1 | No |
   | Phase 3A | ~5 min | Orchestrator | Screenshots + gates parallel |
   | Phase 3B | ~15 min | 9 + 1 | 9 parallel, then 1 sequential |
   | Phase 3C | ~5 min | 1 | No |

   This table does not exist anywhere in consolidated form.

5. **Rollback protocol.** If I am on my second run (after a REBUILD) and the second build also fails, the circuit breaker triggers and I must present "diagnostic output for human review." What does this diagnostic output look like? What files do I hand over? The circuit breaker is defined but its output format is not.

---

## 7. RED FLAGS: Anything that makes me think "this will fail in production"?

### RED FLAG 1: The Integrative Auditor prompt contradicts FIX-083 (BLOCKING)

The Integrative Auditor prompt template (Appendix E, line 1129) tells the agent to score PA-05 sub-criteria. The MANIFEST explicitly says this is the Weaver's responsibility (FIX-083). In production, this means TWO agents will score PA-05 independently, and the Weaver will receive a pre-scored PA-05 from the Integrative Auditor that may anchor or conflict with the Weaver's own assessment. This undermines the information isolation principle.

**Fix:** Remove "PA-05 SYNTHESIS" from the Integrative Auditor prompt. Replace with "GESTALT SYNTHESIS: describe cross-cutting patterns without scoring PA-05."

### RED FLAG 2: BV-02 false positives from non-background hex values

BV-02 extracts ALL hex values from the brief text and checks adjacent pairs for delta >= 15. But not all hex values in the brief are background colors. The brief may contain the primary red (#E83025), text color (#1A1A1A), accent colors, border colors, etc. These are not zone backgrounds. If the brief mentions `#E83025` (red) next to `#FEF9F5` (cream), BV-02 will check their delta (which passes), but this pair is not an adjacent zone background pair.

More critically: if the brief mentions `#F5F0E8` as a zone background and `#F0EBE3` as a different context (a code block background, a table cell), BV-02 will flag a delta of 5 as a failure even though these are not adjacent zones. The gate needs semantic awareness of which hex values are zone backgrounds, not just sequential proximity in text.

**Fix:** BV-02 should parse hex values only from a clearly marked section of the brief (e.g., "Zone Backgrounds:" header) rather than grepping all hex values sequentially.

### RED FLAG 3: 69 PA questions across 9 auditors may exceed context and quality limits

Auditor C has 11 questions. Auditor D has 11 questions. Each question requires reading screenshots, formulating evidence, and writing a structured response with screenshot references. At 11 questions, each auditor is producing a substantial report. If any auditor runs out of output capacity (context limits, token budgets), questions at the end of their list will receive lower-quality answers.

The pipeline does not have a mechanism to detect degraded auditor output quality. A partially completed report will still contain answers, but the depth and evidence quality of question 11 may be significantly lower than question 1.

**Fix:** Add a quality floor to the completion manifest. Not just "Answered: YES" but "Evidence depth: FULL / ABBREVIATED / MISSING."

### RED FLAG 4: The gate-runner-core.js is untested in the files provided

I see 1,436 lines of JavaScript with 6 functions. I see a spec file describing what the gates check. I see a manifest describing the execution order. But I see no test file, no test HTML fixture, and no evidence that these functions have been run against known-good and known-bad HTML. If a gate has a bug (e.g., a CSS selector that misses elements, a threshold comparison using wrong units), it will silently produce false PASS or false FAIL results.

The pipeline's entire quality guarantee depends on these gates working correctly. Without test coverage, this is a single point of failure.

**Fix:** Create a test-fixtures directory with at least 2 HTML files (one that should pass all gates, one that should fail specific gates) and a test runner script.

### RED FLAG 5: No versioning or immutability enforcement

The MANIFEST says "This file is an ORCHESTRATION SPEC. It is NOT modified during execution." But there is no enforcement mechanism. If the orchestrator accidentally edits the MANIFEST during a run (e.g., adding notes, updating status), the spec changes mid-execution. The EXECUTION-TRACKER-TEMPLATE.md is designed to prevent this (it is the mutable document), but nothing prevents an agent from modifying the MANIFEST itself.

This is a minor risk in practice but a major risk in principle. Pipeline specs should be read-only during execution.

---

## Summary Table

| Dimension | Score | Key Factor |
|-----------|-------|------------|
| Usability | 3/5 | Quickstart is good; 73/165/3600 confusion is bad |
| Navigation | 4/5 | MANIFEST is thorough; needs a cheat sheet |
| Consistency | 3.5/5 | Mostly consistent; Integrative Auditor PA-05 contradiction is blocking |
| Complexity | 3/5 | At Opus ceiling; over-documented in places |
| Design quality | 4/5 | Information isolation + recipe format + tracker are excellent |
| Completeness | 3/5 | Missing cheat sheet, test content, gate tests, rollback format |

**Bottom line:** This pipeline would produce good results with an experienced orchestrator who has read all the files and internalized the key rules. It would produce mediocre results with a first-time orchestrator who is reading as they go. The gap between those two outcomes is the pipeline's biggest risk.

The architecture is sound. The information isolation is well-designed. The execution documents are thorough. But the sheer volume of documentation means that the most important rules (builder does not see gates, fresh-eyes for auditors, recipe not checklist, BV before building) can be lost in the noise. Everything that matters is here; the problem is that everything that does not matter is also here.

---

*Report written by fresh-eyes Opus agent, 2026-02-24. No prior context. No follow-up edits.*
