# Fresh-Eyes Coherence Audit: VA Extraction Pipeline Files

**Auditor:** Fresh-eyes agent (zero prior context)
**Date:** 2026-02-25
**Files Reviewed:** MANIFEST.md, pa-deployment.md, pa-weaver.md, pa-guardrails.md, artifact-builder-recipe.md, artifact-orchestrator.md
**Methodology:** Read all six files sequentially as a first-time reader. No knowledge of "Wave 4," "experiential enforcement," or any prior editing session.

---

## 1. TONE CONSISTENCY

### Overall Assessment: GOOD — with one recurring friction pattern

The six files share a consistent voice: technical, precise, imperative, heavily cross-referenced. The writing is unusually self-aware about its own failure modes (a quality I found striking, not jarring). The system clearly evolved through painful iteration, and that history reads as earned wisdom rather than defensiveness.

### The Experiential Pass: Naturally Woven or Bolted On?

The "experiential pass" material (Section 0 in pa-deployment.md and pa-weaver.md) is the most obvious candidate for a "bolted on" judgment. My assessment:

**pa-deployment.md Section 0:** This reads as naturally woven. The placement at position 0 is self-justifying (Section 0.2 explains why primacy matters), and the content itself is concrete and actionable. The "CANNOT READ" example with the bar chart label is vivid and specific. It does not feel like an afterthought.

**pa-weaver.md Section 0:** Also reads naturally. The "experiential anchor" concept is distinct from the auditor experiential pass (the weaver does its own independent viewing), which avoids feeling like copy-paste. The aggregation table (Section 0.3) with the 5-level agreement scale is clean and actionable.

**pa-guardrails.md Section 2:** The completion manifest now includes an "Experiential Pass: YES/NO" row. This feels slightly bolted on -- the table mixes two formats (a presence check row + per-question answer rows) in a way that is not immediately obvious. An agent reading this for the first time might not realize the Experiential Pass row is structurally different from the PA-XX rows below it.

**artifact-builder-recipe.md Step 5.0:** The builder's self-evaluation experiential check reads naturally. It fits the recipe's Read/Select/Deploy/Assess flow. The "CRITICAL: VISUAL VERIFICATION" block is emphatic but justified by the bar-chart-label incident described in the source note. No tone break.

**artifact-orchestrator.md Phase 3A+:** The orchestrator's experiential scan reads naturally. The "30-SECOND READ TEST" and "USABILITY CIRCUIT BREAKER" integrate cleanly with the surrounding phase structure. The source note ("Gas Town incident 2026-02-25") grounds the addition in a specific failure, which prevents it from feeling arbitrary.

**MANIFEST.md:** References to the experiential pass in the PA information isolation block and Appendix E prompt templates are consistent with the split files. No tone breaks.

### One Friction Pattern: Relocated/Cross-Reference Notices

Multiple files contain notices like "RELOCATED: The experiential pass directive has been moved to Section 0" (pa-deployment.md Section 2.5) and "See Section 0.3 for the full table" (pa-weaver.md Section 4.5). These read as editorial scaffolding left behind from a restructuring. They are not confusing, but they are unnecessary for a fresh reader who is reading linearly -- a fresh reader encounters Section 0 first and does not need to be told "this used to be somewhere else." These notices are artifacts of the edit process, not the reading process.

**Recommendation:** These relocation notices are harmless but add noise. In a future cleanup pass, they could be reduced to simple cross-references without the editorial history.

---

## 2. LOGICAL FLOW

### Overall Assessment: STRONG — the pipeline is followable from start to finish

The MANIFEST.md Quickstart (steps 0-11) provides an excellent entry point. I was able to mentally trace the entire pipeline:

1. Content markdown enters via Phase 0 (Content Analyst)
2. Content Map feeds Phase 1 (Brief Assembler)
3. Execution Brief feeds Phase 2 (Builder)
4. Built HTML feeds Phase 3A (screenshots + gate runner, in parallel)
5. Screenshots feed Phase 3B (9 PA auditors in parallel)
6. 9 reports feed Integrative Auditor
7. Integrative report + gate results feed Weaver
8. Weaver produces verdict

Each file serves a specific audience within this flow:
- MANIFEST.md: Orchestrator (the master map)
- pa-deployment.md: Orchestrator (setting up the PA audit)
- pa-weaver.md: Weaver agent (INFORMATION ISOLATED from auditors)
- pa-guardrails.md: PA Auditors (constraints they must follow)
- artifact-builder-recipe.md: Brief Assembler + Builder (via the brief)
- artifact-orchestrator.md: Orchestrator (full execution protocol)

### One Confusing Flow Point: MANIFEST.md vs artifact-orchestrator.md Overlap

The MANIFEST.md Section 4 ("Phase-by-Phase Execution") and artifact-orchestrator.md both describe the full pipeline sequence. The MANIFEST covers it at a higher level (what happens, who receives what), while the orchestrator file covers it at a granular level (every ITEM reference, every decision gate). For a first-time orchestrator agent, it is not immediately clear whether the MANIFEST or the orchestrator file is the "primary" execution guide.

The MANIFEST says "This file governs all Pipeline v3 execution" (line 4). The orchestrator file says "This is the master control document for the orchestrator agent" (line 10). Both claim primacy.

**In practice:** The MANIFEST is a routing document (what goes where), and the orchestrator is an execution document (step-by-step protocol). They serve different purposes, but the overlap in their phase-by-phase descriptions could confuse an agent that reads both.

**Recommendation:** The MANIFEST's Section 4 should explicitly say "This section provides the orchestrator's procedural reference. For detailed execution with all ITEM citations and decision gates, see artifact-orchestrator.md." Alternatively, remove the procedural detail from the MANIFEST and keep only the routing tables.

### Number Discrepancy: Brief Line Count

The MANIFEST refers to the brief as "~100-165 lines" in the Quickstart and "~93-113 lines" in the orchestrator routing table. The orchestrator file says "~93-113 lines" in Section 3, "~113 lines" in multiple places, and "sub-200 line brief (threshold for mode collapse)" as an upper bound. The builder recipe's council amendment (Appendix A) says "~3,600 total builder input." The MANIFEST Appendix C glossary says "~100-165 line document."

These are not contradictions per se -- the brief has a variable target depending on content complexity -- but the three different ranges (~93-113, ~100-165, sub-200) could confuse an agent trying to determine the actual target. The "~165 lines" appears to be the TC Brief Template size, not the output brief size.

**Recommendation:** Standardize to one range with a clear note: "The TC Brief Template is ~165 lines. The produced Execution Brief is ~100-165 lines depending on content complexity. The constraint layer within that brief is ~73 lines."

---

## 3. REDUNDANCY vs REINFORCEMENT

### Helpful Reinforcement (Serving Different Audiences)

The following repetitions are REINFORCEMENT -- they appear in files read by different agents:

1. **Fresh-Eyes Principle:** Appears in pa-deployment.md (Section 3), pa-guardrails.md (Section 11), MANIFEST.md (Section 3), and MANIFEST.md Appendix B. Each instance serves a different reader: the orchestrator (who must enforce it), the auditors (who must follow it), and the manifest reader (who needs the overview). This is good architecture.

2. **PA-05 Sub-Criteria:** Appear in MANIFEST.md, pa-weaver.md, and pa-guardrails.md. The MANIFEST defines them for routing; the weaver file defines them for scoring; the guardrails file defines them for cross-validation. Each framing serves its audience.

3. **Information Isolation Rules:** What the builder does NOT receive appears in MANIFEST.md, artifact-orchestrator.md, and pa-deployment.md. Each instance is read by the orchestrator at a different pipeline phase (setup, building, audit deployment). Reinforcement is warranted.

4. **Experiential Pass:** Appears in pa-deployment.md (auditor directive), pa-weaver.md (weaver anchor), pa-guardrails.md (completion manifest row), artifact-builder-recipe.md (builder self-check), artifact-orchestrator.md (orchestrator scan), and MANIFEST.md Appendix E (prompt templates). Each is tailored to its audience's role and framed accordingly. This is GOOD redundancy -- the same principle expressed through 5 different lenses for 5 different roles.

### Wasteful Redundancy

1. **PA-Assessed Anti-Patterns Table:** The exact same 8-row table appears in pa-weaver.md (Section 6.1) and pa-guardrails.md (Section 7). Both files serve different agents (weaver vs auditors), so the table has valid routing reasons, but the content is identical down to the column headers. Since auditors do not need to know these are "PA-Assessed Anti-Patterns" (the auditors just answer their questions), the guardrails copy could be trimmed to just the question IDs that detect them, without the full anti-pattern description.

2. **Revision Degradation Warnings:** The same 5-row table appears in pa-weaver.md (Section 6.2) and pa-guardrails.md (Section 8). The weaver needs this for fix-type classification; the auditors do not need it at all (they report what they see, not what fix cycles might cause). The guardrails copy serves no clear purpose for auditors and may actually contaminate fresh-eyes assessment by priming them to look for degradation patterns.

3. **Cross-Viewport Comparison Method:** Appears in pa-deployment.md (Section 1.2.1) and pa-guardrails.md (Section 10). The deployment version is slightly more detailed (includes per-question table). The guardrails version is a stripped-down procedure. Since auditors receive BOTH files (pa-questions.md subset + pa-guardrails.md), having the method in guardrails is correct. But pa-deployment.md is an orchestrator file -- the orchestrator does not need the comparison method. The deployment copy could be moved entirely to guardrails.

4. **Evidence Format Requirement + Completion Manifest:** Appear in both pa-deployment.md (Section 1.4) and pa-guardrails.md (Sections 1-2). The auditors see only pa-guardrails.md, so the pa-deployment.md copy is for the orchestrator's awareness. This is borderline -- the orchestrator benefits from knowing what auditors are required to produce, but it is still a verbatim duplicate.

---

## 4. MISSING CONNECTIONS

### Issues Found

1. **artifact-builder-recipe.md references "artifact-value-tables.md" (Step 2.1) but the MANIFEST does not route this file to the builder directly.** The MANIFEST Appendix B says the builder receives "tokens.css + components.css + mechanism-catalog.md + value tables (~550 lines)." The value tables file path appears in Appendix D. However, the artifact-builder-recipe.md references it by name in a way that implies the builder reads it directly, while the MANIFEST describes it as part of the builder's input package. This is consistent but the recipe file never says "you will receive this file as artifact-value-tables.md" -- it just references it. A builder agent might be confused about WHERE to find "artifact-value-tables.md."

2. **pa-weaver.md references "pa-questions.md Part 6" (Section 1.5, emotional arc register framework) for the 4-register framework.** I did not read pa-questions.md, so I cannot verify this cross-reference. But the weaver file defines the 4 registers in full in Section 4.2. If pa-questions.md Part 6 duplicates this, it is another redundancy instance. If it does not, the weaver file is self-sufficient and the cross-reference is unnecessary.

3. **MANIFEST.md references "council-verdict.md" (575 lines) as a prerequisite file, but only the MANIFEST and the orchestrator file have council compliance sections.** The pa-deployment.md, pa-weaver.md, and artifact-builder-recipe.md all have inline "COUNCIL VERDICT COMPLIANCE" headers listing which rulings they incorporate. This is good -- it means agents do not need the council file. But the MANIFEST lists council-verdict.md in the prerequisite check (Quickstart step 0), which could cause a false failure if the file is missing. The MANIFEST's own Section 7 note says "the 9 artifacts are self-sufficient for execution" without the council file. This is a mild contradiction.

4. **The builder recipe references Step 1.3 as "Read the 73-line template" but also says the template "embeds soul constraints."** Meanwhile, the MANIFEST says the builder receives the "Execution Brief" (not the template), and the Brief Assembler produces the brief FROM the template. So the builder never sees the raw 73-line template -- they see the assembled brief. The recipe's Step 1.3 is confusing because it implies the builder reads the template directly, but the routing architecture has the Brief Assembler consuming the template and outputting the brief.

5. **artifact-orchestrator.md Section 5 (Phase 2, Step 4: "Deploy Disposition") says D-09 "background hex lock is ENFORCED."** But artifact-builder-recipe.md D-09 is "The Quiet Zone" (a creative instruction about making one zone plainer), and the MANIFEST glossary says "Background Hex Lock" is "a separate constraint enforced by BV-02, not a disposition." The orchestrator file conflates D-09 (the quiet zone disposition) with the background hex lock (a BV-02 enforcement). This is a factual error in the orchestrator file.

---

## 5. CONFUSING PASSAGES

### For a First-Time Agent

1. **MANIFEST.md Line 221: "146 items per header; appendix lists 75+78=153 -- discrepancy is an artifact-internal issue."** This is an alarming note. A first-time orchestrator agent reads this and thinks: "There is a known discrepancy that nobody fixed?" The parenthetical "artifact-internal issue" does not explain WHERE the discrepancy comes from or WHETHER it matters. Either fix the count or explain it.

2. **MANIFEST.md Section 3 routing table for artifact-gate-runner.md:** The table lists "Wave 2 gates (GR-45, GR-46, GR-50-GR-53)" and "Meta gates (GR-48, GR-49)" and "Experiment gates (GR-36-GR-39)" as separate rows with different destinations. But the GR numbering jumps around non-sequentially. An agent trying to understand which gates exist would need to cross-reference with gate-manifest.json. The MANIFEST could benefit from a single sorted list of all gate IDs and their locations.

3. **pa-deployment.md Section 0 Positional Enforcement note:** "This directive is embedded in the PA Auditor prompt template (MANIFEST.md Appendix E). It does NOT rely on the orchestrator reading this file to inject it -- it is already positionally first in the template." This is a meta-note about deployment mechanics. It is useful for understanding the system's robustness, but it adds cognitive load for an agent simply trying to understand what the experiential pass IS. The note belongs in a provenance/design-rationale section, not inline with the operational directive.

4. **artifact-builder-recipe.md ITEM citations throughout:** Every statement has bracketed ITEM references (e.g., "[ITEM 7, extract-d12-d14.md, VA L980]"). These are traceability citations. They are valuable for auditing but severely impede readability. A builder agent reading this recipe needs the CSS guidance, not the extraction provenance. The provenance should be in an appendix (as it partly is in Appendix B), not inline.

5. **artifact-orchestrator.md SECTION numbering vs Phase numbering:** The orchestrator uses both "SECTION" numbers and "Phase" numbers. Section 0 = preconditions, Section 1 = topology, Section 2 = Phase 0, Section 3 = Phase 1, Section 4 = mode selection (not a phase), Section 5 = Phase 2, Section 6 = Phase 3, Section 7 = verdict. The offset between Section and Phase numbers is confusing. Why does Phase 0 live in Section 2?

6. **pa-weaver.md Section 5.0 "Priority Override Rule" is numbered 5.0 but appears BETWEEN sections 4.5 and 5.** The section that follows (Section 5, "Ship Decision and Feedback Loop") starts at what would normally be 5.1. This numbering collision -- a Section 5.0 preceding Section 5 -- creates ambiguity about whether they are the same section or different sections.

---

## 6. OVERALL IMPRESSION

### If I Were an Orchestrator Agent

**Can I run this pipeline from these files?** Yes. The MANIFEST Quickstart provides a clear 11-step procedure. Each step references the appropriate artifact. The prompt templates in Appendix E are copy-paste ready.

**Are the instructions unambiguous?** Mostly yes. The main ambiguities are:
1. Whether the MANIFEST or artifact-orchestrator.md is the "primary" reference for execution sequencing (both claim authority)
2. Brief line count targets (three different ranges across files)
3. The D-09 / Background Hex Lock conflation in the orchestrator file

**What gives me confidence?** The system's self-awareness about its own failure modes. The anti-pattern tables, the suppressor history, the specific incident references ("Gas Town incident 2026-02-25") -- these tell me the pipeline has been tested against real failures and has documented defenses. The fresh-eyes principle, the information isolation, the dual-route pattern for thresholds -- these are not theoretical. They read as hard-won operational wisdom.

**What concerns me?** The sheer volume. The MANIFEST alone is ~1,000 lines. The orchestrator file is ~1,100 lines. A first-time orchestrator agent needs to absorb ~2,100 lines of dense specification before running a pipeline that takes 80-105 minutes. The MANIFEST's Quickstart helps, but the detail sections are overwhelming. The builder recipe at 1,000 lines is even more concerning -- the Brief Assembler must compress this into ~50-90 lines of Tiers 3-4. That compression is the pipeline's critical creative act, and it is under-documented relative to its importance.

**What would trip me up?** The inline ITEM citations in the builder recipe and orchestrator file. They are provenance markers, not operational instructions, but they look like operational content. An LLM agent reading "[ITEM 7, extract-d12-d14.md, VA L980]" might try to resolve that reference, wasting tokens and attention. These should be visually distinct from operational text (e.g., in HTML comments or a collapsed section) or moved entirely to appendices.

---

## 7. SPECIFIC FINDINGS SUMMARY

### BLOCKING (Would cause pipeline failure)

| # | Finding | Location | Impact |
|---|---------|----------|--------|
| B-1 | D-09 conflated with Background Hex Lock | artifact-orchestrator.md Section 5, Phase 2 | Builder might think D-09 IS the hex lock, rather than the Quiet Zone instruction. Could cause wrong deployment. |

### SIGNIFICANT (Would cause confusion but not failure)

| # | Finding | Location | Impact |
|---|---------|----------|--------|
| S-1 | MANIFEST + orchestrator both claim "master" authority | MANIFEST.md line 4, artifact-orchestrator.md line 10 | Orchestrator agent may read the wrong file first, miss critical routing detail |
| S-2 | Brief line count inconsistency (~93-113 vs ~100-165 vs sub-200) | Multiple files | Brief Assembler may target wrong length |
| S-3 | Builder recipe Step 1.3 implies builder reads raw template | artifact-builder-recipe.md line 69-73 | Builder agent might request the template file instead of reading the brief |
| S-4 | 146 vs 153 item count discrepancy dismissed as "artifact-internal" | MANIFEST.md line 221 | Erodes trust in the counting/verification system |
| S-5 | Section numbering offset in orchestrator (Section 2 = Phase 0) | artifact-orchestrator.md throughout | Navigation confusion when cross-referencing |

### MINOR (Noise reduction opportunities)

| # | Finding | Location | Impact |
|---|---------|----------|--------|
| M-1 | Relocation notices ("RELOCATED: moved to Section 0") | pa-deployment.md 2.5, pa-weaver.md 4.5 | Editorial scaffolding, adds noise for fresh readers |
| M-2 | Anti-pattern table duplicated identically in weaver + guardrails | pa-weaver.md 6.1, pa-guardrails.md 7 | Wasteful redundancy; guardrails copy may contaminate fresh-eyes |
| M-3 | Revision degradation warnings in guardrails | pa-guardrails.md Section 8 | Auditors do not need this; may prime them to look for specific patterns |
| M-4 | Inline ITEM citations impede readability of recipe | artifact-builder-recipe.md throughout | Provenance markers look like operational content |
| M-5 | Section 5.0 / Section 5 numbering collision | pa-weaver.md lines 257-270 | Minor navigation ambiguity |
| M-6 | Council-verdict.md listed as prerequisite but described as optional | MANIFEST.md Quickstart + Section 7 note | Mild contradiction in prerequisite requirements |
| M-7 | Cross-viewport comparison method duplicated in deployment + guardrails | pa-deployment.md 1.2.1, pa-guardrails.md 10 | Deployment copy serves no clear purpose for orchestrator |

---

## 8. VERDICT

**These six files form a coherent, non-contradictory system with one factual error (B-1) and five areas of confusion (S-1 through S-5).** The experiential pass material is well-integrated and does not feel bolted on. The information isolation architecture is sound. The pipeline flow is traceable from start to finish.

The system's primary weakness is not incoherence but DENSITY. Every file is doing two jobs: providing operational instructions AND providing provenance/justification for those instructions. A future pass that separates "what to do" from "why we do it this way" would significantly improve first-read comprehension without losing any information.

**Fix priority:** B-1 (D-09 conflation) first, then S-1 (authority clarification), then S-2 (line count standardization). The rest are improvements, not fixes.
