# Fresh-Eyes Usability Review — Wave 3
**Agent:** buddy-fresh-eyes (Opus)
**Date:** 2026-02-24
**Approach:** Pretending to be a Claude instance encountering this pipeline for the FIRST TIME. No prior knowledge assumed.

---

## Executive Summary

**Overall Usability: 4.0/5** — The pipeline is remarkably navigable for its complexity. MANIFEST.md is an excellent entry point that genuinely works as a one-stop orchestration document. The Wave 3 splits (gate-runner into 5 files, PA protocol into 5 files) are a net usability win — each file has a clear, single purpose. The main friction points are: (1) a few cross-reference inconsistencies between MANIFEST and the split files, (2) the execution tracker has one field that references a D-09 instruction the reader may not have encountered yet, and (3) the MANIFEST Appendix E prompts slightly contradict the Integrative Auditor role described in the body.

**Blocking Issues:** 0
**Significant Issues:** 5
**Minor Issues:** 11

---

## Journey 1: "I want to run a build"

### Test: Follow MANIFEST Quickstart from Step 0 to completion

**Rating: 4.5/5**

The Quickstart (MANIFEST lines 10-43) is excellent. Every step is numbered, references the detailed section below, and tells you what agent to spawn with what inputs and what you receive back.

**What works:**
- Step 0 (copy tracker, fill in metadata) is clear and actionable
- Each step names the agent, its model recommendation, inputs, and outputs
- Step 4a (Brief Verification) is inline and critical — glad it is here, not buried
- Step 6 reminds you to serve via HTTP (not file://), which is a known Playwright gotcha
- Step 7 clarifies the Gate Runner is NOT an LLM agent — orchestrator-executed code
- The maximum iteration limit is clearly stated at the end

**Issues found:**

1. **MINOR — Step 2 references "artifact-routing.md"** but does not give the specific section header in the Quickstart itself. The detailed section (Phase 0, Section 4) does specify the headers ("Phase 0: Content Analysis Protocol" and "Reader Model — 5-Axis Input Space"), but a first-time reader following ONLY the quickstart might not know which parts of the 843-line artifact-routing.md to give to the Content Analyst. Suggest adding section header references inline in the quickstart.

2. **MINOR — Step 5 says "Spawn Builder (Opus, STRONG recommendation)"** but does not mention that the builder also needs value tables (~226 lines from artifact-value-tables.md). The detailed Phase 2 section (lines 417-437) does list value tables. The quickstart is slightly incomplete here.

3. **MINOR — Step 10 says "Spawn Weaver with integrative report + gate results"** but the detailed Phase 3C section (lines 485-488) also lists "individual auditor reports" and "calibration references from artifact-pa-protocol.md." A first-time orchestrator following only the quickstart would under-supply the Weaver.

---

## Journey 2: "I want to understand what gates exist"

### Test: Navigate from MANIFEST to gate-manifest.json to gate-runner-spec.md to gate-runner-core.js

**Rating: 4.5/5**

This navigation path is clean. MANIFEST Section 3 (artifact-gate-runner.md entry, lines 244-284) clearly states the 5-file split and lists all 5 files with their line counts and purposes. `gate-manifest.json` is a well-structured JSON TOC that maps tiers, execution order, and verdict logic. `gate-runner-spec.md` is a clean human-readable spec with a summary table at the bottom. `gate-runner-core.js` has a clear execution order comment at the top and usage instructions at the bottom.

**What works:**
- gate-manifest.json is an excellent machine-readable index — you can understand the full gate inventory without reading any other file
- gate-runner-spec.md Section "GATE SUMMARY TABLE" (lines 138-178) is a single-page reference for all 39 gates
- gate-runner-core.js has clear section headers, function-per-gate-group structure, and usage instructions at the bottom (lines 1418-1437)
- The cross-references between files are consistent — spec says "For code, see gate-runner-core.js", code says execution order matching the manifest

**Issues found:**

4. **SIGNIFICANT — gate-runner-spec.md line 23 says "Total Playwright-executable gates: 35 (18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 4 BRIEF)"** but 18+8+5+4 = 35. Meanwhile gate-runner-spec.md line 180 says "Tier totals: 18 REQUIRED, 8 RECOMMENDED, 9 ADVISORY, 4 BRIEF = 39 total." The advisory count changed from 5 to 9 between line 23 and line 180 of the same file. Line 180 counts GR-33 and GR-34 (mode detection, diagnostic only) plus GR-46, GR-50, GR-53 = 5 listed in Section 3/4/5/6, but the summary table at the bottom adds GR-33/GR-34 to ADVISORY bringing it to 7, then... This count discrepancy is confusing. A first-time reader would not know which count to trust.

    Looking more carefully: gate-manifest.json lists advisory as count 5 (GR-21, GR-22, GR-46, GR-50, GR-53) and has a SEPARATE "diagnosticOnly" tier with count 2 (GR-33, GR-34). So the manifest distinguishes "advisory" from "diagnosticOnly." But the spec summary table (line 180) lumps them together. And the spec header (line 23) uses 5.

    **Recommendation:** Standardize. Either keep diagnosticOnly as a separate category everywhere (manifest's approach, cleaner), or fold them into advisory everywhere (spec summary's approach). Currently inconsistent.

5. **MINOR — gate-runner-core.js line 18 says "ADVISORY (4): GR-21, GR-22, GR-46, GR-50, GR-53"** but that is 5 items listed for a count of 4. The parenthetical count does not match the listed gates. Likely a header typo — should be ADVISORY (5).

6. **MINOR — gate-manifest.json "totalGateCount"** (lines 140-147) says: inGateRunner=31, inOrchestrator=6, removed=13, total=37, briefVerification=4, grandTotal=41. But the gate-runner-spec.md summary table lists 39 gates total (including brief verification). 39 != 41. The discrepancy: 37+4=41 in the manifest, but spec counts 39 which is 35+4. The manifest includes the 2 diagnosticOnly gates in the 37 total but spec counts them differently. This is another manifestation of issue #4.

---

## Journey 3: "I want to deploy a PA audit"

### Test: Navigate from MANIFEST to pa-deployment.md, find question assignments, find questions in pa-questions.md

**Rating: 4.5/5**

This is the cleanest navigation path in the entire pipeline. MANIFEST Section 2 "Agent Roster" (lines 145-175) gives the per-auditor question assignments with exact PA-XX numbers and counts. pa-deployment.md Section 1.2 gives the SAME assignments in a cleaner table with role/core/tier5/extended breakdown. pa-questions.md has every question with its full text organized by tier.

**What works:**
- MANIFEST, pa-deployment.md, and pa-questions.md all agree on auditor assignments — I checked 5 random auditors and all matched
- pa-deployment.md Section 1.3 (PA-05 cross-validation protocol) is clear about who cross-validates what
- pa-deployment.md Section 2 (screenshot protocol) is step-by-step actionable
- pa-questions.md organizes questions by tier, not by auditor — good because auditors should not see the deployment file
- pa-guardrails.md is appropriately auditor-facing: evidence format, completion manifest, language constraints, fresh-eyes principle

**Issues found:**

7. **SIGNIFICANT — MANIFEST line 159 says "Total: 69 questions across 9 auditors"** and pa-deployment.md line 54 confirms "69 questions." But pa-questions.md line 306 says "Total: 69 questions (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)." Let me verify: 49+2+3+6+9 = 69. OK, math checks out.

    HOWEVER, when I count the questions actually listed in pa-questions.md, the gap numbering is confusing. The questions go PA-01 through PA-77 but with many gaps (PA-07, PA-10, PA-21, PA-49, PA-54, PA-57, PA-58, PA-59 are all missing/skipped). A first-time instance would wonder: are those questions that were removed? Are they documented elsewhere? This is not explained anywhere. pa-questions.md should note that the numbering has gaps due to historical removals.

8. **MINOR — pa-deployment.md line 135** says "CLARIFICATION (FIX-083): PA-05 scoring is the WEAVER's responsibility, NOT the Integrative Auditor's." But MANIFEST line 165 says: "Integrative Auditor... Synthesize 9 auditor reports + gestalt impression, score PA-05." This DIRECTLY contradicts pa-deployment.md. The MANIFEST says the Integrative Auditor scores PA-05; pa-deployment.md says the Weaver does. A first-time orchestrator would be confused about who actually scores PA-05.

    Looking at the Weaver section: pa-weaver.md Section 1 explicitly states the Weaver produces "PA-05 Score (1-4 scale with sub-criteria breakdown)." And the MANIFEST Appendix E Integrative Auditor prompt (lines 1104-1118) says "PA-05 SYNTHESIS: Rate each sub-criterion PASS/FAIL" — this also gives the Integrative Auditor PA-05 scoring duties.

    **Recommendation:** This is a real contradiction. The MANIFEST body (line 165) and MANIFEST Appendix E (Integrative Auditor prompt) say the Integrative Auditor scores PA-05. But pa-deployment.md FIX-083 and pa-weaver.md say the Weaver does. Clarify: does the Integrative Auditor produce PA-05 and the Weaver consume it? Or does the Weaver produce PA-05 from raw auditor reports?

---

## Journey 4: "I want to write the weaver verdict"

### Test: Navigate to pa-weaver.md. Does it tell you everything you need without leaking auditor deployment details?

**Rating: 4/5**

pa-weaver.md is well-structured. Section 1 lists the 7 required outputs. Section 2 provides calibration references. Section 3 defines the diagnostic vocabulary (MECHANICAL/STRUCTURAL/COMPOSITIONAL). Section 4 covers the emotional arc framework. Section 5 defines ship thresholds including the new SHIP WITH FIXES category.

**What works:**
- The file is clearly marked "INFORMATION ISOLATION: this content should NOT be visible to auditors" (line 5 and line 376)
- Section 2.1 (Multi-Coherence Scale) and 2.2 (Severity Scale) are clean lookup tables
- Section 3 (Diagnostic Vocabulary) with the decision tree is excellent — a first-time weaver could use it immediately
- Section 5.1.1 (SHIP WITH FIXES) is clearly defined with criteria
- The FIX-085 sequencing note (describe observations FIRST, classify SECOND) is a useful anti-anchoring instruction

**Issues found:**

9. **SIGNIFICANT — pa-weaver.md Section 1 lists 7 required outputs** including "Fix-Type Classification Summary (REQUIRED)" and "Emotional Arc Synthesis (REQUIRED)." These are valuable additions. But the MANIFEST Appendix E Weaver prompt (lines 1123-1145) does NOT mention fix-type classification summaries or emotional arc synthesis. A first-time instance using the MANIFEST prompt template would miss these two required sections. The prompt template needs updating to match the weaver's 7-output requirement.

10. **MINOR — pa-weaver.md Section 5.1 ship threshold** says "PA-05 >= 3.5/4 AND zero soul violations" for SHIP. But the MANIFEST Quickstart line 39 says "If REFINE or REBUILD: pipeline terminates with action items." There is no mention of SHIP WITH FIXES in the MANIFEST quickstart or verdict logic (lines 275-281). A first-time orchestrator using only the MANIFEST would not know SHIP WITH FIXES exists as an option.

---

## Journey 5: "I want to implement D-09"

### Test: Read the D-09 section in artifact-builder-recipe.md. Is it clear enough to implement correctly? Would you create whitespace voids?

**Rating: 4.5/5**

D-09 (artifact-builder-recipe.md lines 551-570) is one of the best-written disposition instructions in the file. The anti-pattern section is particularly valuable.

**What works:**
- "Designate at least ONE zone in the middle third" is specific about PLACEMENT
- "2-3 mechanisms (vs 4-5 in adjacent zones)" is a concrete numeric comparison
- "FAMILY MEMBERSHIP" section explicitly lists what must be preserved: zone background, typography, border-weight hierarchy
- The anti-pattern ("empty zone with uniform cream") directly names the whitespace void failure mode
- "The quiet zone must still have CONTENT and STRUCTURE" is a clear guardrail
- The distinction "fewer mechanisms deployed WITH INTENTION vs no mechanisms deployed AT ALL" is the key insight and it is clearly stated

**Issues found:**

11. **MINOR — D-09 in artifact-builder-recipe.md is tagged "[EXPERIMENTAL] [NEW]"** but MANIFEST line 242 says "D-09 (Background Hex Lock) was added in Wave 3 and is ENFORCED." The recipe file calls D-09 "The Quiet Zone" while MANIFEST calls D-09 "Background Hex Lock." These are different names for what appears to be the SAME disposition instruction, or possibly they are DIFFERENT instructions that got the same number.

    Looking more carefully: MANIFEST Appendix C (Glossary, line 890) says "D-09 (Background Hex Lock): Zone background hex values specified in the brief are LOCKED." But the recipe says D-09 is "The Quiet Zone." The TC brief template (artifact-tc-brief-template.md line 196) also calls D-09 "The Quiet Zone."

    **This is a NAMING COLLISION.** D-09 in the recipe = "The Quiet Zone" (designate a plainer zone). D-09 in the MANIFEST glossary = "Background Hex Lock" (builder must not modify zone background hex values). These are two different concepts sharing the same identifier. A first-time builder would be confused. Which is D-09?

    **Recommendation:** One of these should be D-10, or they should be merged with a clear combined name. This is the most confusing single issue I found.

---

## Journey 6: "I want to fill out the execution tracker"

### Test: Read EXECUTION-TRACKER-TEMPLATE.md. Is every field self-explanatory? Can you fill it out without prior knowledge?

**Rating: 4.5/5**

The execution tracker is well-designed. Fields are grouped by phase. Checkboxes correspond to routing verification for each agent. The post-run verification section (FIX-111) is a nice touch.

**What works:**
- Build Metadata table is self-explanatory (date, path, slug, mode, model, times)
- Pre-Flight Checklist includes line counts for each file — you know what to expect
- Per-phase routing verification checkboxes tell you EXACTLY what each agent should receive
- The negative checkboxes ("Builder did NOT receive gate thresholds") are especially valuable
- Post-Run Verification section with completeness, consistency, and output correspondence checks is thorough
- Automation hints at the bottom are practical

**Issues found:**

12. **SIGNIFICANT — Phase 1 routing verification (line 89) says "Brief Assembler received disposition D-01 through D-08"** but should say "D-01 through D-09" per Wave 3 additions. D-09 was added in Wave 3 but the tracker still says D-08. (The MANIFEST Quickstart step 4 correctly says "D-01-D-09" at line 28.)

13. **MINOR — Gate Runner Results Summary table (lines 156-163) totals 29 gates** but the gate runner executes 31+ gates (17 REQUIRED in core + 6 anti-pattern + 6 wave2 + responsive re-runs). The tracker's summary table does not include Wave 2 gates (GR-45, GR-46, GR-50, GR-51, GR-52, GR-53) or mode detection gates (GR-33, GR-34). A complete run would produce more results than the tracker can hold in this table.

14. **MINOR — The tracker references "artifact-gate-runner.md accessible (~1,780 lines)" in pre-flight (line 31)** but the monolithic gate runner has been split into 5 files. The pre-flight should reference either the redirect pointer (22 lines) or the 5 split files individually. A first-time user might try to find a 1,780-line file that no longer exists.

---

## Journey 7: "I want to understand mode-conditional routing"

### Test: Navigate from MANIFEST to find COMPOSED vs APPLIED conditionals. Are they unambiguous?

**Rating: 3.5/5**

Mode-conditional routing is scattered across multiple documents. The MANIFEST addresses it in several places (Phase 0.5 at line 369, Phase 1 at line 330, Builder prompt at lines 1025-1027, Glossary at lines 870-871) but the conditional logic is not consolidated.

**What works:**
- Phase 0.5 (lines 369-374) clearly defines the two modes: APPLIED = default, COMPOSED = requires high heterogeneity + metaphor viability
- Builder prompt in Appendix E (lines 1025-1027) has explicit IF/THEN for file routing:
  - IF COMPOSED: full value-tables + CD-006 MANDATORY
  - IF APPLIED: abbreviated value-tables + CD-006 OMITTED
- Glossary (lines 870-871) gives CSS naming convention: position-based = APPLIED, concept-based = COMPOSED

**Issues found:**

15. **SIGNIFICANT — No consolidated list of ALL mode-conditional behaviors.** A first-time orchestrator would need to search through MANIFEST, artifact-orchestrator.md, artifact-routing.md, and the builder prompt to piece together every place where mode affects routing. The TC brief template (artifact-tc-brief-template.md line 107) mentions "concept-based naming is the strongest single indicator of composed mode" but does not explain what changes for APPLIED mode.

    Specific ambiguities:
    - How does APPLIED mode affect Tier 3 in the brief template? The template only shows COMPOSED mode guidance (concept-based naming, boundary-specific transitions). Does an APPLIED brief just... skip the metaphor section? Use position-based naming?
    - The Content-Type Conditional in the TC brief template (lines 130-149) is separate from the mode conditional. APPLIED/COMPOSED is about design stance; PROSE/MIXED/VISUAL is about content type. But a first-time assembler might confuse them.

    **Recommendation:** Add a "Mode Routing Quick Reference" section to MANIFEST that lists every mode-conditional behavior in one place: what files differ, what brief template sections differ, what gate behavior differs.

---

## Per-File Usability Ratings

| File | Lines | Rating | Notes |
|------|-------|--------|-------|
| MANIFEST.md | 1,168 | 4.5/5 | Excellent orchestration doc. Quickstart is genuinely usable. Minor completeness gaps in quickstart steps. |
| EXECUTION-TRACKER-TEMPLATE.md | 319 | 4.5/5 | Well-structured tracking doc. D-08/D-09 error, gate count incomplete, monolithic file reference stale. |
| gate-manifest.json | 159 | 4.5/5 | Clean JSON TOC. Gate count discrepancies with spec file. |
| gate-runner-spec.md | 188 | 4/5 | Readable spec. Advisory count inconsistency between header and summary table. |
| gate-runner-core.js | 1,436 | 4.5/5 | Well-structured code. Clear section headers, usage instructions. Advisory count typo in header. |
| gate-runner-preconditions.md | 83 | 5/5 | Clean, self-contained, no issues found. |
| gate-runner-provenance.md | 151 | 4.5/5 | Thorough history. Useful for understanding why gates moved. |
| pa-questions.md | 412 | 4.5/5 | Comprehensive question inventory. Gap numbering unexplained. |
| pa-deployment.md | 237 | 4/5 | Good deployment reference. PA-05 ownership contradiction with MANIFEST. |
| pa-weaver.md | 376 | 4/5 | Well-structured weaver reference. MANIFEST prompt template does not match 7-output requirement. |
| pa-guardrails.md | 151 | 5/5 | Clean, auditor-appropriate, no issues found. |
| artifact-tc-brief-template.md | 224 | 4/5 | Good template structure. APPLIED mode guidance thin. D-09 naming mismatch with MANIFEST. |
| artifact-builder-recipe.md (D-09) | ~20 | 4.5/5 | Excellent anti-pattern guidance. Naming collision with MANIFEST D-09. |
| experiment-protocol.md | 44 | 5/5 | Clean, self-contained, no issues found. |

---

## Focus Area Ratings (from Task Description)

### 1. SPLIT FILE NAVIGATION
**Rating: 4.5/5** — The 5-file gate split and 5-file PA split both work well. Each file has a clear, single purpose. Cross-references are mostly consistent. MANIFEST correctly points to split files. The main issue is gate count discrepancies across files.

### 2. EXECUTION TRACKER
**Rating: 4/5** — Fields are self-explanatory. The D-08/D-09 omission and stale monolithic file reference are the main issues. Post-run verification section is a strong addition.

### 3. D-09 CLARITY
**Rating: 4/5** — The recipe's D-09 (Quiet Zone) is excellently written and WOULD prevent whitespace voids. But the naming collision with MANIFEST's D-09 (Background Hex Lock) would confuse a first-time builder about what D-09 actually is.

### 4. NEW VERDICT CATEGORY (SHIP WITH FIXES)
**Rating: 4/5** — pa-weaver.md defines SHIP WITH FIXES clearly (PA-05 >= 3/4, all identity gates pass, <= 3 MECHANICAL fixes). But MANIFEST quickstart and verdict logic sections do not mention this category.

### 5. MODE CONDITIONALS
**Rating: 3.5/5** — COMPOSED vs APPLIED is defined in several places but not consolidated. A first-time orchestrator would struggle to identify ALL mode-conditional routing differences. The brief template provides rich COMPOSED guidance but thin APPLIED guidance.

### 6. ORCHESTRATOR DECISION RULES (GR-23-28)
**Rating: 4.5/5** — Cleanly reclassified. gate-runner-preconditions.md documents them clearly. The FIX-094 notes in provenance explain why they moved. MANIFEST Section 3 correctly references the reclassification.

### 7. GATE-MANIFEST.JSON
**Rating: 4.5/5** — Excellent JSON index. You can understand the full gate landscape from this one file. The execution order array is immediately useful. Minor count discrepancies with spec.

### 8. CROSS-REFERENCES
**Rating: 4/5** — Most cross-references work. The PA-05 ownership contradiction (MANIFEST vs pa-deployment.md) and D-09 naming collision are the main failures. All split files correctly reference each other.

---

## Consolidated Issue List (Ordered by Severity)

### SIGNIFICANT (should fix before production use)

| # | Issue | Files Affected | Impact |
|---|-------|---------------|--------|
| S1 | PA-05 scoring ownership contradiction: MANIFEST says Integrative Auditor scores PA-05; pa-deployment.md FIX-083 says Weaver does | MANIFEST.md lines 165, 1107-1113; pa-deployment.md line 135 | First-time orchestrator produces wrong agent prompt |
| S2 | D-09 naming collision: recipe calls it "Quiet Zone," MANIFEST glossary calls it "Background Hex Lock" — these are different concepts | MANIFEST.md line 890; artifact-builder-recipe.md line 551; artifact-tc-brief-template.md line 196 | Builder confused about what D-09 means |
| S3 | Execution tracker D-01 through D-08 should be D-01 through D-09 | EXECUTION-TRACKER-TEMPLATE.md line 89 | Tracker misses D-09 verification |
| S4 | Weaver prompt template in MANIFEST Appendix E missing 2 required outputs (fix-type classification, emotional arc synthesis) | MANIFEST.md lines 1123-1145; pa-weaver.md Section 1 | Weaver output incomplete |
| S5 | No consolidated mode-conditional routing reference; APPLIED mode guidance thin | MANIFEST.md, artifact-tc-brief-template.md | APPLIED builds under-specified |

### MINOR (should fix but not blocking)

| # | Issue | Files Affected |
|---|-------|---------------|
| M1 | Quickstart step 2 missing section header refs for Content Analyst | MANIFEST.md line 26 |
| M2 | Quickstart step 5 missing value-tables.md in Builder file list | MANIFEST.md line 34 |
| M3 | Quickstart step 10 incomplete Weaver inputs | MANIFEST.md line 40 |
| M4 | Gate count discrepancy: spec header says 35, spec summary says 39, manifest says 37+4=41 | gate-runner-spec.md, gate-manifest.json |
| M5 | gate-runner-core.js ADVISORY count typo (says 4, lists 5) | gate-runner-core.js line 18 |
| M6 | PA question gap numbering unexplained | pa-questions.md |
| M7 | SHIP WITH FIXES not mentioned in MANIFEST quickstart or verdict logic | MANIFEST.md lines 39-42, 275-281 |
| M8 | Tracker pre-flight references monolithic gate runner at 1,780 lines (stale) | EXECUTION-TRACKER-TEMPLATE.md line 31 |
| M9 | Tracker gate results summary table missing Wave 2 and mode detection gates | EXECUTION-TRACKER-TEMPLATE.md lines 156-163 |
| M10 | TC brief template APPLIED mode guidance very thin | artifact-tc-brief-template.md |
| M11 | MANIFEST quickstart not fully self-contained (needs detailed sections for complete file routing) | MANIFEST.md lines 10-43 |

---

## What a First-Time Instance Would Misunderstand

1. **Who scores PA-05.** The MANIFEST body and Appendix E both say the Integrative Auditor does it. pa-deployment.md says the Weaver does it. A new instance would follow whichever file it reads first, leading to inconsistent execution.

2. **What D-09 means.** If you read the recipe, D-09 = "designate a quiet zone." If you read the MANIFEST glossary, D-09 = "lock zone background hex values." These are completely different instructions.

3. **How to build in APPLIED mode.** The brief template and MANIFEST provide rich guidance for COMPOSED mode (concept-based naming, metaphor mapping, boundary-specific transitions). APPLIED mode guidance is essentially "don't do the COMPOSED stuff." A new instance would not know what to PUT IN the brief for an APPLIED build.

4. **How many gates exist.** Depending on which file you read, it is 35, 37, 39, or 41. The answer is probably 37 post-build gates + 4 BV gates = 41 total, with 35 being the Playwright-executable subset. But this is not clearly stated anywhere in a single sentence.

---

## Recommendations (Priority Order)

1. **Resolve PA-05 ownership:** Standardize across MANIFEST (body + Appendix E) and pa-deployment.md. My reading suggests the Weaver is the intended PA-05 scorer (pa-weaver.md is authoritative), but the Integrative Auditor synthesizes the 9 reports into a gestalt that INFORMS the Weaver's scoring. Update MANIFEST line 165 and the Integrative Auditor prompt in Appendix E.

2. **Resolve D-09 naming:** Either (a) make D-09 = "Quiet Zone" and add D-10 = "Background Hex Lock," or (b) merge them with a combined name like "Background Lock + Quiet Zone." Update MANIFEST glossary, recipe, and TC brief template to match.

3. **Update execution tracker:** Change D-08 to D-09, replace monolithic gate runner reference with split files, expand gate results table.

4. **Update Weaver prompt template:** Add fix-type classification and emotional arc synthesis to the Appendix E prompt.

5. **Add mode-conditional routing quick reference:** A single table in MANIFEST showing every behavior that differs between APPLIED and COMPOSED.

6. **Standardize gate counts:** Pick one canonical count and use it everywhere. Suggested: "41 total gates (37 post-build + 4 BV). Of the 37 post-build: 31 Playwright-executable + 6 orchestrator decision rules."

---

*End of fresh-eyes usability review. Total files examined: 14. Total issues: 16 (5 significant, 11 minor). Overall pipeline usability: 4.0/5.*
