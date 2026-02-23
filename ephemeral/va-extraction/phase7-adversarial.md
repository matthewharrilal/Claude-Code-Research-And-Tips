# Phase 7: Adversarial Review of Pipeline v3 Execution Manifest

**Reviewer:** Fresh adversary with zero loyalty to prior work
**Date:** 2026-02-23
**Files reviewed:** MANIFEST.md (731 lines), 6 artifact files (4,977 lines total)
**Verdict:** NEEDS FIXES (5 BLOCKING, 8 SIGNIFICANT, 6 MINOR)

---

## BLOCKING FINDINGS (Must fix before use)

### B-01: Gate Runner Is Not An Agent — But The Manifest Routes To It As One

**What's wrong:** The manifest references "Gate Runner" as an entity receiving files (Section 3, artifact-to-agent routing table) and assigns it work (Section 4, Phase 3B), yet the Gate Runner does NOT appear in the Agent Roster (Section 2). The roster lists exactly 15 agents: Orchestrator + Content Analyst + Brief Assembler + Builder + 9 PA Auditors + Integrative Auditor + Weaver. No "Gate Runner" agent exists.

The gate-runner artifact (artifact-gate-runner.md) says gates run "AFTER the builder completes its work (Phase 3)" and describes a "Gate Runner Execution Protocol" with output format and verdict logic. But WHO runs this? Is it the orchestrator itself executing JavaScript? A separate agent? A programmatic script?

**Why it matters:** An orchestrator reading this manifest will reach Phase 3B Step 1 ("Orchestrator runs Gate Runner programmatically against built HTML") and not know if this means: (a) the orchestrator runs JavaScript directly via Playwright, (b) the orchestrator spawns a separate agent that is not in the roster, or (c) something else entirely. The manifest says 15 agents total, but if the gate runner IS an agent, the count is wrong. If it ISN'T an agent, the manifest shouldn't route files to it like one.

**Suggested fix:** Either (a) add the gate runner to the agent roster as agent #16 (or clarify it is the orchestrator itself executing Playwright JavaScript), or (b) rewrite all references to "Gate Runner" as "Orchestrator (running gate checks)" and explicitly state the orchestrator executes the gate-runner code directly rather than spawning a separate agent.

**Severity:** BLOCKING — an orchestrator literally cannot resolve this ambiguity at runtime.

---

### B-02: The 73-Line TC Brief Template Does Not Exist In Any Artifact

**What's wrong:** The manifest repeatedly references the "TC Brief Template (73 lines)" as the single most important routing document (Section 3, line 144: "The TC Brief Template (section 3) is the single most important routing document"). The routing artifact (artifact-routing.md) references it at "section 3" multiple times. But artifact-routing.md has NO section literally labeled "section 3" — it uses a numbered Table of Contents with entries like "Phase 0: Content Analysis Protocol," "Content Type Classification," "Reader Model -- 5-Axis Input Space," etc. The closest section is "Phase 1: TC Brief Assembly Process" and "Brief Template Structure."

More critically, the actual 73-line template TEXT does not appear anywhere. The routing artifact describes the STRUCTURE of the template (Tier 1: 15 lines, Tier 2: 8 lines, Tier 3: 50 lines) but never provides the actual template content. The Brief Assembler is told to "follow it EXACTLY -- no additions, no omissions, no reordering" but there is nothing to follow.

**Why it matters:** The Brief Assembler agent cannot execute Phase 1 without the actual template. It would have to INVENT the template from the structural description, which defeats the purpose of a pre-compressed artifact. This is a show-stopping gap.

**Suggested fix:** Either (a) include the literal 73-line template text in artifact-routing.md, or (b) reference the actual file path where the template lives (e.g., `design-system/pipeline/conventions-brief.md`) and add it to the manifest's file routing table. The manifest must route the ACTUAL TEMPLATE FILE to the Brief Assembler.

**Severity:** BLOCKING — Phase 1 cannot execute without the template.

---

### B-03: Section References Use Inconsistent Notation (section X vs No Section Headers)

**What's wrong:** The manifest's artifact-to-agent routing table (Section 3) uses notation like "section 2.1," "section 2.2," "section 3," "section 4," "section 5," "section 6," "section 7" for artifact-routing.md. But artifact-routing.md does NOT use numbered section headers. It uses descriptive headers like "Phase 0: Content Analysis Protocol," "Content Type Classification," "Structural Heterogeneity Mapping," "Reader Model -- 5-Axis Input Space," etc.

Similarly, the manifest references "section 2.1," "section 2.2," "section 2.3," "section 3" for artifact-identity-perception.md. The actual artifact uses headers like "PART 1: LAYER 1 -- IDENTITY," "1.2 Soul Constraints," "PART 2: LAYER 2 -- PERCEPTION," "2.2 Core Thresholds," etc.

I spot-checked 10 section references from the manifest against actual artifact headers:

| Manifest Reference | Artifact | Actual Header |
|---|---|---|
| artifact-identity-perception.md section 2.1 | artifact-identity-perception.md | "1.2 Soul Constraints" (PART 1) |
| artifact-identity-perception.md section 2.2 | artifact-identity-perception.md | "2.2 Core Thresholds" (PART 2) |
| artifact-identity-perception.md section 2.3 | artifact-identity-perception.md | "2.3 Perception Calibration Table" |
| artifact-identity-perception.md section 3 | artifact-identity-perception.md | "PART 3: CROSS-LAYER INTEGRATION" |
| artifact-routing.md section 2 | artifact-routing.md | "Phase 0: Content Analysis Protocol" (first heading) |
| artifact-routing.md section 2.2 | artifact-routing.md | "Reader Model -- 5-Axis Input Space" (fourth heading) |
| artifact-routing.md section 3 | artifact-routing.md | "Phase 1: TC Brief Assembly Process" (ninth heading) |
| artifact-builder-recipe.md section 2.1 | artifact-builder-recipe.md | "PHASE 1: READ YOUR VOCABULARY" |
| artifact-gate-runner.md section 2.1 | artifact-gate-runner.md | "SECTION 1: IDENTITY GATES" |
| artifact-pa-protocol.md section 4 | artifact-pa-protocol.md | "PART 5: SCREENSHOT PRE-CAPTURE PATTERN" |

Results: 0/10 exact matches. Some are semantically close (artifact-identity-perception.md "2.3" matches), but most are wrong. The manifest says "section 2.1" for artifact-gate-runner.md but the actual header is "SECTION 1."

**Why it matters:** An orchestrator agent performing lookup by section number will fail to find the referenced content. An agent told to extract content from "section 2.1" of artifact-gate-runner.md will look for something labeled "2.1" and find "SECTION 1: IDENTITY GATES" instead. This creates confusion and potential mis-routing.

**Suggested fix:** Replace ALL section references in the manifest with either (a) the EXACT section header text from each artifact, or (b) line number ranges. Line ranges are more robust than headers since they survive formatting changes.

**Severity:** BLOCKING — section references are the primary navigation mechanism and they are systematically wrong.

---

### B-04: Manifest Claims 885 Items But Artifact Item Counts Don't Add Up

**What's wrong:** The manifest claims 885 items across 9 layers + META (Section 1, line 46). The layer table shows:
- L1 IDENTITY: 33
- L2 PERCEPTION: 52
- L3 SCAFFOLDING: 68
- L4 DISPOSITION: 62
- L5 VALUES: 94
- L6 GATES: 72
- L7 PA: 56
- L8 ROUTING: 63
- L9 ORCHESTRATION: 188
- META: 197
- **Total: 885**

But the artifacts themselves claim different counts:
- artifact-identity-perception.md: "33 Layer 1 items and 52 Layer 2 items" = 85. Matches.
- artifact-builder-recipe.md: "70 SCAFFOLDING (Layer 3) + 76 DISPOSITION (Layer 4) = 146 items total." But manifest says L3=68, L4=62 = 130. Discrepancy of **16 items**.
- artifact-gate-runner.md: "42 binary gates + 34 VALUES items rerouted = 72 (layer) + rerouted." Claimed total in appendix D: 67 items traced. Matches manifest's 72 for Layer 6 but artifact header says "Layer: 6 (GATES)" while body tracks more.
- artifact-pa-protocol.md: "56 items + rerouted = 88 total tracked." Manifest says L7=56. The 88 total is acknowledged differently.
- artifact-routing.md: "63 from layer classifier + all ROUTING-tagged items from unified registry (125 total)." Manifest says L8=63. The 125 vs 63 is a huge gap.
- artifact-orchestrator.md: "188 items + 15 council-rerouted + 19 VALUES context = 222 items." Manifest says L9=188.

The builder recipe is the clearest problem: it claims 146 items (75 SCAFFOLDING + 78 DISPOSITION per its appendices — note the appendix says 75 and 78, not 70 and 76 as the header says). The manifest claims 130 for L3+L4. That's 16 items unaccounted for or over-counted.

**Why it matters:** Item count discrepancies mean either (a) the manifest's layer table is stale, (b) the artifacts include items not in the registry, or (c) council reclassifications changed layer counts after the manifest was written. Regardless, the manifest's claim of accounting for "all 885 items" is not verifiable from the artifacts alone.

**Suggested fix:** Reconcile the counts. The builder recipe artifact says 75+78=153 (not 146 as its own header claims, and not 130 as the manifest claims). Pick ONE source of truth and ensure all documents agree.

**Severity:** BLOCKING — an integrity guarantee that can't be verified undermines the entire manifest's claim to completeness.

---

### B-05: No Concrete File Paths For Builder Reference Files

**What's wrong:** The manifest tells the orchestrator to give the builder `tokens.css`, `components.css`, and `mechanism-catalog.md` (Section 4, Phase 2, line 305). But it never specifies the ACTUAL FILE PATHS. The orchestrator needs to know WHERE these files are:
- Is it `design-system/compositional-core/vocabulary/tokens.css`?
- Is it `design-system/compositional-core/components/components.css`?
- Is it `design-system/compositional-core/grammar/mechanism-catalog.md`?

The manifest also references a "council-verdict.md" file (Section 7, line 506; Section 8, line 570) that the orchestrator must read, but provides no file path.

Similarly, "CD-006 reference (optional)" is mentioned as builder input #5 (artifact-orchestrator.md Section 5) but no path is given.

**Why it matters:** An orchestrator agent reading this manifest for the first time has NO idea where any of these files live in the repository. It would have to search the filesystem, which is error-prone and wastes time.

**Suggested fix:** Add a "File Path Registry" appendix to the manifest mapping every referenced file name to its absolute path in the repository.

**Severity:** BLOCKING — the orchestrator cannot assemble builder inputs without knowing where the files are.

---

## SIGNIFICANT FINDINGS (Should fix before use)

### S-01: The Manifest Is A Table Of Contents, Not An Execution Spec

**What's wrong:** The manifest tells agents WHAT TO READ but not WHAT TO DO. For example, Phase 0 (lines 250-269) says:
1. "Orchestrator verifies preconditions"
2. "Orchestrator spawns Content Analyst with: Raw content markdown, Content analysis protocol from artifact-routing.md section 2"

But it doesn't specify HOW to spawn the agent (what model, what system prompt, what task description). It doesn't specify what the Content Analyst's prompt should look like. It references the routing artifact but doesn't extract the actionable instructions from it.

**Why it matters:** There's a massive gap between "read this section" and "do this thing." An orchestrator will need to read the full artifact to understand what to extract, then compose the agent prompt itself. The manifest doesn't save them any work — it just tells them which documents to hunt through.

**Suggested fix:** For each phase, add a "prompt template" or "agent instructions" section that the orchestrator can use directly. At minimum, provide the specific instructions to PASS to each agent, not just the file references.

**Severity:** SIGNIFICANT — the manifest is useful for navigation but insufficient for execution.

---

### S-02: Manifest Says 2 Viewports For Screenshots, PA Protocol Says 3

**What's wrong:** The manifest (Section 4, Phase 3A, lines 328-331) specifies screenshots at 1440px and 768px (2 viewports). But artifact-pa-protocol.md (Part 5, Section 5.2, line 450) specifies THREE viewports: 1440px, 1024px, 768px. The orchestrator artifact (Section 6, line 417) also says "Screenshots at 3 viewports: 1440px, 1024px, 768px."

**Why it matters:** If the orchestrator follows the manifest, it will miss 1024px screenshots. PA auditors expecting 3 viewport widths will get only 2.

**Suggested fix:** Update the manifest Phase 3A to include all 3 viewports (1440px, 1024px, 768px) consistent with the PA protocol and orchestrator artifacts.

**Severity:** SIGNIFICANT — missing viewport coverage means incomplete audit.

---

### S-03: PA Auditor Question Counts In Manifest Don't Match PA Protocol

**What's wrong:** The manifest's agent roster (Section 2, Phase 3B) assigns PA questions as follows:
- Auditor A: PA-01-PA-08 (8 questions implied by range)
- Auditor B: PA-09-PA-16 (8 questions)
- Auditor C: PA-17-PA-24 (8 questions)
- Auditor D: PA-25-PA-30 (6 questions)
- Auditor E: PA-31-PA-38 (8 questions)
- Auditor F: PA-39-PA-44 (6 questions)
- Auditor G: PA-45-PA-48 (4 questions)
- Auditor H: PA-49-PA-56 (8 questions)
- Auditor I: PA-60-PA-68 (9 questions)

But the actual PA protocol (Part 4, Section 4.2) assigns:
- Auditor A: PA-01, PA-03, PA-04, PA-05, PA-45 + PA-65, PA-67 = 7 questions
- Auditor B: PA-02, PA-06, PA-07, PA-08, PA-29, PA-56 = 6 questions
- Auditor C: PA-09, PA-10, PA-11, PA-30-33, PA-50-53, PA-55 + PA-64, PA-66 = 14 questions
- Auditor D: PA-12, PA-13, PA-34-36, PA-69, PA-70 + PA-62 = 8 questions
- Auditor E: PA-14, PA-15, PA-37-39 + PA-63 = 6 questions
- Auditor F: PA-16, PA-17, PA-40, PA-41 + PA-60, PA-61 = 6 questions
- Auditor G: PA-18-20, PA-42-44 + PA-68 = 7 questions
- Auditor H: PA-21-23, PA-46, PA-47 = 5 questions
- Auditor I: PA-24-28, PA-48 = 6 questions

These are COMPLETELY DIFFERENT assignments. The manifest uses simple sequential ranges; the PA protocol uses carefully curated thematic groupings. An orchestrator following the manifest would give Auditor A questions PA-01 through PA-08 (readability questions), but the PA protocol assigns Auditor A impression + emotion questions (PA-01, PA-03, PA-04, PA-05, PA-45).

**Why it matters:** This is a functional error that would produce wrong auditor assignments and undermine the thematic grouping that makes Mode 4 effective.

**Suggested fix:** Replace the manifest's PA question ranges with the EXACT assignments from artifact-pa-protocol.md Part 4, Section 4.2. The PA protocol's assignment table should be reproduced verbatim in the manifest.

**Severity:** SIGNIFICANT — wrong question assignments would produce poor audit quality.

---

### S-04: "Council-Verdict.md" Referenced But Not In The Artifact Set

**What's wrong:** The manifest's Critical Sections Index (Section 7, line 506) lists "council-verdict.md section 2 — Contradictions A-H" as critical reading for the orchestrator. But council-verdict.md is NOT one of the 6 artifacts. The orchestrator is told this file "overrides all other documents" but has no way to access it through the manifest's routing table.

**Why it matters:** If the council verdict truly overrides everything, the orchestrator needs it. Its absence from the artifact set means the orchestrator must trust that the 6 artifacts correctly incorporated all council rulings — but the manifest explicitly says to read it as a primary source.

**Suggested fix:** Either (a) add council-verdict.md as a 7th artifact with routing instructions, or (b) remove the reference from the Critical Sections Index and add a note that all council rulings are already incorporated into the 6 artifacts.

**Severity:** SIGNIFICANT — creates a contradiction between "this overrides everything" and "it's not in the artifact set."

---

### S-05: Recovery Path For 3+ Gate Failures Is Underspecified

**What's wrong:** The manifest's verdict logic (Section 4, lines 183-186) says:
- ANY Identity gate FAIL -> REBUILD
- ANY Perception gate FAIL -> REFINE
- 3+ Anti-Pattern gates FAIL -> REBUILD
- <3 Anti-Pattern gates FAIL -> REFINE

But what about COMBINATIONS? For example:
- 1 Identity gate FAIL + 2 Anti-Pattern gate FAIL: Is it REBUILD (identity) or could the anti-patterns change the calculus?
- 1 Perception gate FAIL + 3 Anti-Pattern gates FAIL: REFINE (perception) or REBUILD (3+ anti-patterns)?
- All perception gates PASS + PA-05 = 3.2: REFINE or SHIP?

The manifest implies Identity > Anti-Pattern > Perception priority but never states this explicitly. The single-pass mode has "NO feedback loops" (line 429) — but then the verdict section (Section 4, Phase 3C) says REFINE triggers "specific action items." Who acts on them? In single-pass mode, the pipeline "terminates with action items" (line 429). So REFINE and REBUILD are just labels on the output? This is confusing.

**Why it matters:** The Weaver agent needs an unambiguous decision tree. Priority conflicts between gate categories are foreseeable at runtime.

**Suggested fix:** Add an explicit priority ordering (Identity > Anti-Pattern > Perception > PA-05) and clarify that in single-pass mode, REFINE/REBUILD are output labels for a future manual re-run, not automatic re-execution.

**Severity:** SIGNIFICANT — ambiguous verdict logic causes wrong recovery decisions.

---

### S-06: Builder's 840-Line Recipe Has No Reading Guide

**What's wrong:** The manifest notes the builder recipe is 840 lines (Section 3, line 146) and emphasizes "FORMAT IS CRITICAL" (line 161). But the manifest's Critical Sections Index (Section 7) tells the builder to read ONLY "The Activation Brief (produced by Phase 1)" + tokens.css + components.css + mechanism-catalog.md. The builder does NOT read artifact-builder-recipe.md directly.

However, the Brief Assembler DOES need to read artifact-builder-recipe.md to extract recipe phases and disposition instructions. The manifest tells the Brief Assembler to read "artifact-builder-recipe.md section 2.1-2.6" and "section 2.4" but provides no guidance on HOW to compress an 840-line recipe into the ~90 lines of compositional + disposition tiers in the brief.

**Why it matters:** The Brief Assembler faces an impossible task: compress 840 lines of carefully sequenced recipe into ~90 lines while preserving the format that makes it a recipe (not a checklist). The manifest says "follow [the template] EXACTLY" but the template doesn't exist (B-02) and the recipe is too long to include in full.

**Suggested fix:** Add explicit instructions for what the Brief Assembler should EXTRACT vs SUMMARIZE vs INCLUDE VERBATIM from the builder recipe. Identify which lines of the recipe are the "critical path" that must survive compression.

**Severity:** SIGNIFICANT — the Brief Assembler has no extraction protocol for the largest artifact.

---

### S-07: Dual-Route Pattern Is Explained But Not Operationalized

**What's wrong:** The manifest explains the dual-route pattern well conceptually (lines 125-127): builder sees world-description, gate-runner sees binary checks. But it never provides the ACTUAL REFRAMED TEXT for either route. For example, the manifest says SC-01 (Sharp Surfaces) goes to the builder as "Every surface is sharp. Corners are cut, not curved" and to the gate runner as "FAIL if any element has border-radius > 0."

The world-description text IS in artifact-identity-perception.md. The binary check text IS in artifact-gate-runner.md. But the manifest doesn't tell the Brief Assembler which specific TEXT to extract for the builder's world-description. It says "Soul constraints as world-description (from artifact-identity-perception.md section 2.1)" — but section 2.1 doesn't exist in the artifact (it's "1.2 Soul Constraints" per B-03). And even if found, the artifact contains BOTH the world-description AND the gate-check in the same table. The Brief Assembler would need to know to extract ONLY the "World-description" field from each SC table and EXCLUDE the "Gate check" field.

**Why it matters:** The dual-route's entire value depends on the builder NEVER seeing "FAIL if" language. If the Brief Assembler copies the full SC tables (which include both framings), the prohibition-rigidity suppressor (S-02) activates.

**Suggested fix:** Add explicit extraction instructions: "From each SC-XX table in artifact-identity-perception.md, extract ONLY the 'World-description' field. DO NOT include the 'Gate check' or 'CSS rule' fields in builder-facing content."

**Severity:** SIGNIFICANT — failure to operationalize dual-route risks the S-02 suppressor.

---

### S-08: mechanism-catalog.md Is Listed As Builder Input But Not Routed In Any Artifact

**What's wrong:** The manifest lists mechanism-catalog.md as a builder reference file (Section 4, Phase 2, line 305; Appendix B, line 694). But no artifact contains routing instructions for this file. It doesn't appear in artifact-routing.md's information flow architecture. It's not mentioned in artifact-builder-recipe.md's "Step 1.1" or "Step 1.2" (which only mention tokens.css and components.css).

The builder recipe's Phase 1 has "Step 1.1: Read tokens.css" and "Step 1.2: Read components.css" but NO "Step 1.3: Read mechanism-catalog.md." The manifest says the builder reads it, but the recipe — the builder's actual execution document — doesn't include it.

**Why it matters:** Either the builder should read mechanism-catalog.md (in which case the recipe needs updating) or it shouldn't (in which case the manifest is wrong). Inconsistency between the manifest and the recipe means one of them will be ignored.

**Suggested fix:** Either add "Step 1.3: Read mechanism-catalog.md" to the builder recipe, or remove mechanism-catalog.md from the manifest's builder input list. The manifest and recipe must agree.

**Severity:** SIGNIFICANT — inconsistent builder inputs between manifest and recipe.

---

## MINOR FINDINGS (Nice to have)

### M-01: Manifest Claims 42 Gates, Gate Summary Table Has 42, But Section Counts Don't Match

The gate summary table lists 42 gates (GR-01 through GR-42). The section breakdown claims: Identity 10 + Perception 6 + Anti-pattern 6 + Precondition 6 + Verdict 4 + Mode 3 + Experiment 4 + Policy 3 = 42. This adds up correctly. No issue.

However, the manifest's routing table (Section 3) references "42 gates" for the gate runner but the gate-runner artifact's own breakdown at the bottom (line 509-517) lists the same 42. Minor concern: the "42 binary gates" label in the manifest routing table is misleading because 3 of them (GR-33, GR-34, GR-35) are explicitly ADVISORY (not binary pass/fail). Calling all 42 "binary" is inaccurate.

**Severity:** MINOR.

---

### M-02: Evidence Taxonomy In Manifest vs Artifacts Has A Mismatch

The manifest's evidence taxonomy (Appendix A, lines 675-683) lists 6 levels: FACT, PROVEN, OBSERVED, CONFOUNDED, THEORETICAL, SPECULATIVE.

But artifact-identity-perception.md (line 11-16) lists only 5 levels: FACT, OBSERVED, CONFOUNDED, THEORETICAL, SPECULATIVE — no PROVEN level. The gate-runner artifact uses PROVEN (line 165: "PROVEN (12 reports, SOLID)").

The manifest's taxonomy includes PROVEN but the identity-perception artifact's taxonomy does not. These should be consistent.

**Severity:** MINOR.

---

### M-03: Appendix B Quick Reference Shows Content Analyst Receiving "Content Analysis Protocol Excerpt" — What Excerpt?

The manifest's Appendix B (line 692) says the Content Analyst receives "Raw content markdown, content analysis protocol excerpt." What "excerpt"? The manifest doesn't specify which lines of artifact-routing.md constitute the "excerpt." Is it the entire Phase 0 section? Just the 6-operation list? The reader model? All of these?

**Severity:** MINOR — the orchestrator can figure this out, but it introduces ambiguity.

---

### M-04: "Mode: APPLIED or COMPOSED" Appears In Builder Input But Contradicts Council Ruling

The manifest (Section 4, Phase 2, line 306) says the builder receives "Mode designation (APPLIED or COMPOSED)." But the council ruling (reflected in artifact-orchestrator.md Section 4) says: "The builder never sees both modes as a choice." If the builder receives a "mode designation," does it see the word "APPLIED" or "COMPOSED"? Or is the mode encoded implicitly in the recipe format?

The manifest should clarify: the builder receives ONE mode's recipe, not a label. It should not receive a field called "Mode: APPLIED" or "Mode: COMPOSED" — it should receive the appropriate recipe format and the mode is implicit.

**Severity:** MINOR.

---

### M-05: The Word "Activation" Appears Despite Council Retirement

The council retired the "Activation" framing (Contradiction A). Yet the manifest uses "Activation Brief" throughout (24+ occurrences). The orchestrator artifact also uses it. The council said replace with "PURPOSE + VOCABULARY" — but this seems to apply to the framing language, not the document name. Still, an adversary could argue the manifest contradicts the council ruling.

The builder recipe artifact header (line 7) says: "Framing: PURPOSE + VOCABULARY (council verdict: 'activation' RETIRED)" — suggesting the word should not appear. But the document name "Activation Brief" persists.

**Severity:** MINOR — naming vs framing distinction, but worth noting.

---

### M-06: PA-05 Scoring Discrepancy Between Manifest And PA Protocol

The manifest (Section 4, Phase 3C, lines 371-373) says:
- PA-05 >= 3.5 AND all identity/perception gates PASS -> SHIP
- PA-05 2.5-3.5 -> REFINE
- PA-05 < 2.5 -> REBUILD

But PA-05 is scored on a 1-4 scale (4 sub-criteria each PASS/FAIL), not a continuous decimal. The PA protocol (Part 1, Section 1.3) maps: 4/4 PASS = 4/4, 3/4 PASS = 3/4, 2/4 or fewer = <3/4.

So the SHIP threshold "PA-05 >= 3.5" means "between 3/4 and 4/4" — which is impossible on a discrete scale. Does 3/4 count? The manifest implies 3.5 is the bar, which would exclude 3/4 (= 3.0). But the PA protocol's own verdict table doesn't use decimals.

**Severity:** MINOR — needs clarification on whether PA-05 is discrete (1-4 integer) or continuous (1.0-4.0 decimal).

---

## STRESS TEST SCENARIOS

### Scenario 1: The Eager Orchestrator

An orchestrator agent reads the manifest and immediately starts Phase 0. It spawns a Content Analyst but realizes it doesn't know WHERE the raw content lives (the manifest says "Raw content markdown" but provides no file path or input mechanism). It also doesn't know where tokens.css or components.css are (B-05). It checks the "Critical Sections" index and is told to read "council-verdict.md section 2" but that file isn't in the artifact set (S-04). The orchestrator wastes 15-20 minutes hunting for files before it can even begin.

**Failure:** Pipeline stalls at Phase 0 due to missing file paths.

### Scenario 2: The Literal Brief Assembler

A Brief Assembler agent is told to "follow the TC Brief Template EXACTLY — no additions, no omissions, no reordering" (manifest line 144). It looks for the template in "artifact-routing.md section 3" but section 3 doesn't exist by that name (B-03). It finds the "Brief Template Structure" section but discovers only a structural description (tiers and line counts), not the actual template text (B-02). It attempts to INVENT the template from the description. It reads the builder recipe to extract disposition instructions but has no guidance on how to compress 840 lines into 40 (S-06). It includes soul constraints from artifact-identity-perception.md but accidentally copies the full SC tables including "Gate check: FAIL if..." lines, activating suppressor S-02 (S-07).

**Failure:** Brief is malformed, contains gate language, and doesn't match the intended template.

### Scenario 3: The Recovering Gate Runner

After a build, 2 anti-pattern gates and 1 perception gate fail. The orchestrator consults the verdict logic: perception FAIL = REFINE, anti-pattern < 3 = REFINE. Both say REFINE, so REFINE it is. But the manifest says the pipeline is single-pass with "NO feedback loops" (line 429) and REFINE terminates with "action items" for a "new pipeline run." The orchestrator produces action items... but for whom? There's no instruction on how to start a new pipeline run. Does it restart from Phase 0? Phase 1? Phase 2? The REFINE protocol (Section 4, lines 460-470 of the orchestrator artifact) says spawn a DIFFERENT Opus agent, but the manifest itself doesn't include the REFINE protocol — it just says "specific action items from auditor reports."

**Failure:** Pipeline terminates with REFINE verdict but no executable recovery path.

---

## THE SINGLE MOST LIKELY FAILURE MODE

**B-02 + S-01 combined: The manifest routes agents to artifacts they cannot actionably use.**

The manifest is a well-organized TABLE OF CONTENTS that tells agents WHICH files to read and WHICH sections matter. But it does NOT provide:
1. The actual 73-line template (B-02)
2. Actual file paths (B-05)
3. Correct section references (B-03)
4. Extraction instructions for dual-route content (S-07)
5. Agent prompt templates (S-01)

An orchestrator following this manifest would spend most of its time INTERPRETING the artifacts rather than EXECUTING the pipeline. The manifest describes the pipeline's architecture beautifully but doesn't make it executable.

The #1 fix: transform the manifest from a REFERENCE DOCUMENT into an EXECUTION DOCUMENT by adding concrete instructions at each phase instead of just file references.

---

## MISSING INFORMATION

1. **Input format spec:** What format does the raw content need to be in? Markdown only? HTML accepted? Maximum length?
2. **Timeout/resource limits:** No guidance on agent timeouts. What if the builder takes 90 minutes instead of 45?
3. **Agent communication protocol:** The manifest says FLAT topology with "direct I/O" but doesn't specify whether agents communicate via files, messages, or task descriptions.
4. **Error handling for agent failures:** What if a PA auditor crashes mid-audit? Re-spawn? Skip? The manifest covers gate failures but not agent failures.
5. **Output location:** Where does the final HTML go? What's the naming convention?
6. **HTTP server for Playwright:** The manifest mentions "Orchestrator serves HTML file via HTTP" but doesn't specify how (what port, what tool).

---

## FINAL VERDICT

**NEEDS FIXES** — The manifest is a strong architectural reference document. Its layer coverage, dual-route explanations, council mandate tracking, and failure mode documentation are thorough. But it is NOT executable in its current form due to 5 BLOCKING issues:

1. Gate Runner agent ambiguity (B-01)
2. Missing TC Brief Template (B-02)
3. Systematically wrong section references (B-03)
4. Item count discrepancies (B-04)
5. Missing file paths (B-05)

Fix these 5 and address the 8 SIGNIFICANT issues, and the manifest becomes a usable execution guide. Without these fixes, an orchestrator will fail to run Pipeline v3 within the first 10 minutes.

---

*Adversarial review complete. Zero loyalty, maximum scrutiny.*
