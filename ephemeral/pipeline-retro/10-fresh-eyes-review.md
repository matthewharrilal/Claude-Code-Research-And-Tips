# Fresh-Eyes Usability Review: Pipeline v3 VA Extraction Artifacts

**Reviewer:** Fresh Claude instance (zero prior context)
**Date:** 2026-02-23
**Files Reviewed:** MANIFEST.md + 6 artifacts (4,977 combined lines)
**Method:** Read all 7 files cold, then attempted to mentally execute the pipeline step by step.

---

## 1. Can I Understand the Pipeline?

**Overall: YES, with significant effort.** The manifest's Quickstart (lines 9-34) is genuinely excellent -- I can trace the happy path in 11 steps. Where I get confused:

### Step-by-step walkthrough of confusion points:

**Step 1 (Prerequisites):** I can verify tokens.css, components.css, mechanism-catalog.md exist. But TWO prerequisites do NOT exist yet:
- **TC Brief Template (73 lines):** The manifest says "must be authored before first run" and artifact-routing.md "Brief Template Structure" defines its tier structure. But artifact-routing.md gives me the STRUCTURE (Tier 1: 15 lines, Tier 2: 8 lines, etc.) -- NOT the actual template text. I would need to WRITE a 73-line template from scratch before I could run anything. This is a blocking prerequisite that is not self-contained in the artifacts.
- **Value tables (~550 lines):** Listed as "TBD -- must be assembled." I have no idea what these contain or how to create them. The manifest says they are "CSS vocabulary for the 6-channel framework" but that is not actionable.

**Verdict on Step 1:** I am BLOCKED before I even start. Two critical inputs do not exist.

**Step 2 (Content Analyst):** Clear. I know what to give the agent and what to expect back. artifact-routing.md's Phase 0 section is well-specified with 6 operations.

**Step 3 (Mode Selection):** Clear criteria. APPLIED = low heterogeneity + low metaphor. COMPOSED = both high. Two edge cases (high/low, low/high) are specified in the content-form fit gate.

**Step 4 (Brief Assembly):** I know the Brief Assembler receives the content map + template + soul constraints + thresholds + recipe phases + disposition. But I am confused about:
- What EXACTLY does "soul constraints as world-description" look like in the brief? I can find the World-description field in each SC-XX table in artifact-identity-perception.md, but assembling them into 15 lines of flowing prose is a creative act, not a mechanical one.
- The "Brief Assembler Extraction Guide" in the manifest (lines 227-231) is helpful but I would be guessing at the exact output format.

**Step 5 (Builder):** Clear inputs. Builder gets the brief + reference files. Recipe format is well-specified in artifact-builder-recipe.md.

**Step 6 (Screenshots):** Clear protocol in artifact-pa-protocol.md Part 5.

**Step 7 (Gate Runner):** This is where I get significantly confused. The manifest says the gate runner is "Playwright JavaScript code executed by the orchestrator." artifact-gate-runner.md gives me 42 gate SPECIFICATIONS (what to check, thresholds, pass/fail criteria) -- but does NOT give me the actual JavaScript code. I would need to WRITE the Playwright code for all 42 gates from the specifications. Some gates have clear "check method" fields (e.g., GR-01: `document.querySelectorAll('*')` + `getComputedStyle(el).borderRadius`). Others are vague (GR-08 "No Decorative Elements": "Check for `<hr>` with decorative classes" -- which classes?). GR-21 "Cognitive Overload" is self-described as "difficult to automate precisely."

**Verdict on Step 7:** I could write ~60% of the gate runner code from the specifications. The other ~40% requires judgment calls about implementation.

**Steps 8-11 (PA Audit + Verdict):** Well-specified. Auditor assignments are clear. Weaver protocol is clear. Verdict logic has explicit priority ordering.

### Summary of Pipeline Comprehension

| Phase | Can I execute it? | Blockers |
|-------|-------------------|----------|
| Phase 0 (Content Analysis) | YES | None |
| Phase 0.5 (Mode Selection) | YES | None |
| Phase 1 (Brief Assembly) | PARTIALLY | TC Brief Template does not exist; assembly is partly creative |
| Phase 2 (Building) | YES (given brief) | Depends on Phase 1 |
| Phase 3A (Screenshots) | YES | None |
| Phase 3A (Gate Runner) | PARTIALLY | Must write Playwright JS from specs; some specs are vague |
| Phase 3B (PA Audit) | YES | None |
| Phase 3C (Verdict) | YES | None |

---

## 2. Can I Write Agent Prompts?

For each phase, I attempted to compose the prompt I would send to each agent.

### Content Analyst Prompt
**Confidence: HIGH.** artifact-routing.md "Phase 0: Content Analysis Protocol" gives me the 6 operations, the reader model 5-axis framework, and the expected output format. I could write this prompt with minimal guessing.

**Where I'm guessing:** The exact format of the Content Map output. I know it should be ~30-50 lines describing "what the content IS, not what the design SHOULD BE" but I have no example of what a good Content Map looks like.

### Brief Assembler Prompt
**Confidence: MEDIUM.** I know the tier structure (Tier 1: 15 lines identity, Tier 2: 8 lines perception, Tier 3: 50 lines compositional, Tier 4: ~40 lines disposition, Content Map: ~30-50 lines). I know to extract World-description fields from SC tables and to use the survival function. But:
- I do not have the 73-line template to pass as input.
- I am guessing at the precise extraction from artifact-builder-recipe.md into the brief's Tier 3-4.
- The "Compression Physics" / survival function S(x) seems relevant but I cannot tell if I need to run it manually or if it is already baked into the template.

### Builder Prompt
**Confidence: HIGH.** artifact-builder-recipe.md is the strongest artifact. It is a genuine recipe with sequenced steps, vocabulary, and calibration values. I would pass: the execution brief + tokens.css + components.css + mechanism-catalog.md + content source material. The builder instructions are IN the brief (produced by Phase 1), so my prompt would be thin -- just "follow the brief."

### Gate Runner
**Confidence: LOW for implementation, HIGH for specification.** I understand exactly WHAT to check (42 gates, clear thresholds). But I would need to write ~400-600 lines of Playwright JavaScript, and some gates require judgment calls.

### PA Auditor Prompts (x9)
**Confidence: HIGH.** artifact-pa-protocol.md Part 4 gives explicit assignments per auditor. Each auditor gets screenshots + their question subset. Fresh-eyes principle is clear. I would compose 9 prompts with minimal guessing.

### Integrative Auditor Prompt
**Confidence: HIGH.** "Read all 9 reports + screenshots. Write gestalt impression. No assigned questions."

### Weaver Prompt
**Confidence: HIGH.** artifact-pa-protocol.md "4.5 Weaver" gives calibration references, verdict thresholds, and the two-output requirement (diagnostic + artistic impression).

---

## 3. What's Missing?

### BLOCKING Missing Items (Cannot Run Pipeline Without These)

1. **TC Brief Template (73 lines).** The manifest references it 8 times. artifact-routing.md describes its structure. But the actual template does not exist. Without it, Phase 1 cannot execute. This is the single largest gap.

2. **Value Tables (~550 lines).** Described as "CSS vocabulary for the 6-channel framework." No content provided. No creation instructions. The builder is supposed to receive these as reference material. Where do they come from?

3. **Gate Runner JavaScript Code.** The specifications are clear but the code does not exist. Someone needs to write a Playwright test suite implementing all 42 gates. This is likely 500-1000 lines of JavaScript.

4. **Worked Examples.** The manifest explicitly acknowledges this (line 880): "No worked examples." I have zero examples of:
   - A Content Map
   - An Execution Brief
   - A PA auditor report
   - A Weaver verdict
   Without seeing what "good" looks like for any intermediate artifact, I would be guessing at the format and level of detail.

### NON-BLOCKING Missing Items (Pipeline Could Run But Quality At Risk)

5. **Agent Prompt Templates.** The manifest acknowledges this (line 881): "Agent prompt templates not included." I know WHAT files each agent receives but not HOW to frame the prompt around those files. The Critical Sections Index (Section 7) helps but is not a prompt.

6. **council-verdict.md.** Referenced throughout as the override authority but NOT listed as one of the 6 artifacts I should read. The manifest says "the 6 artifacts are self-sufficient for execution" -- but then references council rulings ~40 times. If the artifacts truly internalized all council rulings, the references are unnecessary. If they did not, I need the council document.

7. **CD-006 Reference HTML.** Listed as optional for the builder. The file path is given (`design-system/validated-explorations/combination/CD-006-pilot-migration.html`). But I have no guidance on WHEN to include it vs exclude it. The manifest says it is the "design system's highest-scoring existing artifact" but does not tell me when its inclusion helps vs hurts.

8. **mechanism-catalog.md contents.** Listed as a builder input. The file path is given. But I have no idea how large it is ("varies") or what it contains structurally.

---

## 4. What's Confusing?

### Terminology Issues

1. **"Activation Brief" vs "Execution Brief"**: The manifest uses "Execution Brief" consistently and the glossary (Appendix C) explains the rename. But artifact-routing.md uses "Activation Brief" throughout (e.g., line 442: "ACTIVATION BRIEF (~93-113 lines)"). This inconsistency would confuse a fresh instance. Which name is canonical?

2. **"TC Brief Template"**: What does "TC" stand for? Never defined. I can infer it relates to "Tension-Composition" from context clues, but the acronym is never expanded in any of the 7 files.

3. **"Channel" ambiguity**: The word "channel" means at least 3 different things:
   - Information flow channels (Channel 1: Universal, Channel 2: Content) in artifact-routing.md
   - Visual CSS channels (6 independently variable dimensions: background, typography, spacing, border, opacity, layout) in the builder recipe
   - Communication channels (between agents)
   The glossary defines only the CSS usage. A fresh instance would need to context-switch between these meanings.

4. **"Register" overload**: Used for both emotional registers (Surprise, Delight, Authority, Closure) and compositional coupling registers (Register 0-3: No coupling through Atmospheric coupling). Different concepts, same word.

5. **"World-description" as a format**: I understand the principle (constraints framed as "this world IS" rather than "do NOT"), but the exact output format is not specified. Is it prose? Bullet points? How literal is "Every surface is sharp. Corners are cut, not curved." -- is that the EXACT text to embed, or an example of the style?

### Circular References

1. **Manifest -> Artifacts -> Manifest**: The manifest tells me to read artifact-routing.md for Phase 0 protocol. artifact-routing.md references items by "ITEM 5 (D01-D03, L24)" which points to extraction source documents I do not have. The items are self-contained enough that I do not NEED the source, but the references create a false impression that I should look elsewhere.

2. **Brief Template -> Brief Assembly -> Brief Template**: artifact-routing.md says the Brief Assembler needs the TC Brief Template. The TC Brief Template must be "authored before first run" per the structure defined in artifact-routing.md "Brief Template Structure." But the template structure is defined as tiers and line counts -- not as actual content. So to author the template, I need to understand the tiers, which requires reading artifact-routing.md, which tells me to read the template... which does not exist.

### Unstated Assumptions

1. **HTTP server for Playwright**: The manifest says "Playwright blocks `file://`" and the orchestrator must serve HTML via HTTP. But no server setup instructions are provided. I would need to know to use `npx serve` or Python's `http.server` or similar.

2. **Screenshot file size/resolution**: No guidance on PNG resolution, file size limits, or whether the Read tool can handle large screenshot files.

3. **Agent model availability**: The manifest assumes I can spawn "Opus" agents. No fallback for when Opus is unavailable or for cost constraints.

4. **Parallel agent limits**: The manifest says 9 PA auditors run "in parallel" but does not discuss whether the orchestrator's environment supports spawning 9 simultaneous agents.

5. **Token budget**: No mention of context window limits. The builder receives ~3,600 lines of input. The Weaver receives 9+ audit reports. Are there token limits to consider?

---

## 5. What Would I Do Differently?

If I were executing this pipeline cold, here is my approach:

### Phase -1: Create Missing Prerequisites (2-4 hours)

Before doing anything else:

1. **Author the TC Brief Template.** Read artifact-routing.md "Brief Template Structure" and artifact-identity-perception.md's soul constraints. Write a 73-line template with:
   - Tier 1: 15 lines of soul constraints as world-description (extract "World-description" fields from each SC-XX table)
   - Tier 2: 8 lines of perception thresholds as natural laws (extract from PT-01 through PT-06)
   - Tier 3: 50 lines of compositional frameworks (extract key concepts from artifact-builder-recipe.md Phases 2-6)
   - Tier 4: Placeholder for disposition (D-01 through D-08 headers + one-line summaries)

2. **Assemble Value Tables.** Extract CSS value ranges from artifact-identity-perception.md (perception calibration table) and artifact-builder-recipe.md (reader model axes, zone heights, density patterns, transition weights). Organize into a ~550-line reference document.

3. **Write Gate Runner JavaScript.** Implement GR-01 through GR-22 as a Playwright test suite. Skip GR-23 through GR-42 (precondition/verdict/mode/experiment/policy gates are not Playwright-testable). Target: ~16 identity+perception gates + 6 anti-pattern gates = 22 automatable gates.

### Phase 0: Simplify the First Run

For the FIRST pipeline execution, I would:
- Skip the Content Analyst agent entirely and write the Content Map myself (it is only 30-50 lines)
- Skip mode selection and default to APPLIED
- Use a simplified 2-auditor PA instead of Mode 4 (9 auditors)
- Skip Tier 5 questions entirely

This reduces the agent count from 15 to 5 (orchestrator + brief assembler + builder + 2 PA auditors + weaver) and lets me validate the pipeline architecture before scaling up.

### Structural Suggestions

1. **Add a "Minimum Viable Pipeline" section** to the manifest that describes a 5-agent simplified run for first-time execution.

2. **Include one worked example** of each intermediate artifact (Content Map, Execution Brief, PA report, Weaver verdict). Even synthetic/abbreviated examples would dramatically reduce guessing.

3. **Separate "must read" from "reference"** in each artifact. artifact-orchestrator.md is 971 lines, but the manifest says "focus on Sections 0-8" (~500 lines). The later sections (experiments, suppressors, diagnostics) are valuable context but not execution-critical. Mark them explicitly as "REFERENCE ONLY -- skip on first read."

4. **Create the TC Brief Template as a 7th artifact.** It is the most critical missing piece. Without it, the entire Brief Assembly phase is unspecified.

5. **Bundle gate runner code as an artifact.** Even partial implementation would be more useful than specifications alone.

---

## 6. Manifest Usability Rating: 3.5/5

**Points earned:**
- +1 for the Quickstart (lines 9-34) -- clear, sequential, minimal.
- +1 for the Agent Roster (Section 2) -- exact inputs/outputs per agent, model recommendations.
- +0.5 for the Dependency Graph (Section 5) -- ASCII art is clear, parallel opportunities identified.
- +0.5 for the Critical Sections Index (Section 7) -- tells each agent exactly what to read and why.
- +0.5 for the Glossary (Appendix C) -- comprehensive term definitions.

**Points deducted:**
- -0.5 for missing prerequisites. Two critical inputs (TC Brief Template, Value Tables) are acknowledged as missing but no creation guidance is provided. The manifest describes a pipeline that cannot run.
- -0.5 for no worked examples. The manifest says this explicitly but does not mitigate it. Even one example Content Map would help enormously.
- -0.5 for inconsistent terminology ("Activation Brief" vs "Execution Brief" across artifacts).

**What would move this to 4.5/5:**
1. Create the TC Brief Template as a standalone artifact
2. Add one worked example per intermediate artifact
3. Fix the naming inconsistency across all artifacts

---

## 7. Artifact Self-Containedness Ratings

### artifact-routing.md: 3/5
**Strengths:** Phase 0 protocol is clear and complete. Content-form routing logic is well-specified. Reader model 5-axis framework is actionable.
**Weaknesses:** The Brief Template Structure section defines STRUCTURE but not CONTENT -- this is the single most critical gap in the entire pipeline. The "Compression Physics" section is theoretical background, not execution guidance. The item registry (lines 633-843) is exhaustive traceability but adds 210 lines of reference material a fresh instance does not need for execution. Contains extensive "what survives vs what dies" analysis that belongs in a theory document, not an execution artifact.

### artifact-identity-perception.md: 4/5
**Strengths:** Soul constraints are precisely defined with clear World-description / CSS rule / Gate check fields. Perception thresholds have specific numeric values with calibration ranges. The dual-route pattern (builder sees calibration, gate-runner sees binary) is explicitly marked at every threshold.
**Weaknesses:** The "Flagship Dimension Gap Scores" (Section 2.7) and "Perception Risk Probabilities" (Section 2.8) are diagnostic/historical data that a fresh instance does not need. "Suppressor Inflection Points" (Section 2.9) are theoretical predictions, not execution guidance. The appendix item registry (lines 457-556) is again traceability, not execution.

### artifact-builder-recipe.md: 4.5/5
**Strengths:** This is the BEST artifact. Genuine recipe format with sequenced phases, specific vocabulary, calibration values, and concrete reference patterns from existing pages. D-01 through D-08 are well-specified with PURPOSE, VOCABULARY, and DESIGN INTENTION for each. The distinction between APPLIED and COMPOSED modes is made concrete with CSS naming examples.
**Weaknesses:** At 840 lines, it is dense. Some item references (e.g., "[ITEM 082, extract-d15-d17.md, VA L1313]") interrupt the flow. The Builder would not read this artifact directly -- it reaches them through the brief. So this artifact's primary consumer is the Brief Assembler, who must extract from it. But the extraction guidance is in the MANIFEST, not in this artifact.

### artifact-gate-runner.md: 3.5/5
**Strengths:** All 42 gates are precisely specified with check method, pass/fail criteria, and evidence level. The verdict logic priority ordering is clear. The Gate Summary Table (lines 462-517) is an excellent quick reference.
**Weaknesses:** No executable code. The "check method" fields give algorithmic hints but are not runnable. Some gates are self-described as hard to automate (GR-21, GR-08). The 3 appendices (A: rerouted items, B: reclassified items, C: gate-adjacent items, D: traceability) add 240 lines of reference material that is not needed for execution. The traceability is admirable for audit purposes but makes the document feel like a registry, not a runnable specification.

### artifact-pa-protocol.md: 4/5
**Strengths:** All 65 questions are listed with auditor assignments. The 9-auditor deployment architecture is clear. PA-05 sub-criteria are precisely defined. Fresh-eyes principle is emphatically stated. Screenshot pre-capture protocol is concrete and proven. Emotional arc assessment framework is well-structured.
**Weaknesses:** At 1,004 lines, this is the longest artifact. Parts 7-12 (rerouted items, anti-patterns, cross-page coherence, ship decision, mode determinants, item registry) are reference material that PA auditors would never see (they only get screenshots + questions). These sections serve the orchestrator and weaver, not the auditors. The "Quantitative Guardrails" appendix (lines 967-1001) gives minimum/optimal/maximum ranges but it is unclear who uses them -- auditors judge visually, gates check programmatically.

### artifact-orchestrator.md: 3/5
**Strengths:** Sections 0-8 provide a complete phase-by-phase execution sequence with inputs, outputs, agents, and timing. The honest complexity accounting (Section 1) is valuable. The verdict and decision tree (Section 7) is clear.
**Weaknesses:** At 971 lines, this is the second longest artifact. The manifest warns "focus on Sections 0-8 (~500 lines)" and the remaining ~470 lines (Sections 9-16) are historical context, experimental protocols, suppressor management, and diagnostic analysis. A fresh orchestrator would need to read 500 lines of execution spec, which is substantial. Much of the content in Sections 0-8 duplicates what is already in the manifest. If I have the manifest, do I also need the orchestrator artifact? The unique value of the orchestrator artifact over the manifest is unclear. The orchestrator artifact provides deeper item-level traceability and some details not in the manifest (e.g., the 8-step builder build sequence in Section 5, the 3-pass experimental protocol in Section 10), but a fresh instance might wonder which document to trust when they conflict.

---

## Cross-Cutting Findings

### 1. The Pipeline Is Well-Designed But Under-Instantiated

The ARCHITECTURE is clear: flat topology, sequential phases, parallel PA auditors, single-pass default. The SPECIFICATION is thorough: every gate has a threshold, every agent has inputs/outputs, every decision has criteria. What is missing is INSTANTIATION -- the concrete artifacts that fill the architecture (TC Brief Template, Value Tables, Gate Runner code, worked examples).

This is a specification that describes a pipeline. It is not yet a pipeline.

### 2. Traceability vs Usability Tension

Every artifact contains extensive item registries ("ITEM 47, extract-d21-d25.md, VA L1697") that trace back to source extraction documents. This is excellent for audit and provenance. It is terrible for first-time readability. The item references interrupt the flow of executable content and suggest that I should be consulting source documents that are not provided to me.

**Recommendation:** Move ALL item registries to appendices (most artifacts already do this). In the body text, remove inline item references entirely or reduce to footnote-style markers.

### 3. Theory-Execution Ratio

Across all 7 documents: approximately 40% of content is execution-relevant (what to do, in what order, with what inputs). The other 60% is theoretical background, historical analysis, traceability, and diagnostic context. For a fresh instance executing the pipeline, this means reading ~3,000 lines of material to extract ~2,000 lines of actionable guidance.

### 4. The "Activation" to "Execution" Rename Is Incomplete

The manifest uses "Execution Brief" consistently. artifact-routing.md uses "Activation Brief" on lines 441, 452, 454, 611, etc. artifact-orchestrator.md uses "BRIEF" throughout (the manifest's glossary explains the rename). artifact-builder-recipe.md references "73-line template" and "activation brief" interchangeably. A search-and-replace pass would fix this.

### 5. The Manifest Is the Best Starting Point

If I had to pick ONE document to read, it would be the manifest. It contains the Quickstart, the full phase-by-phase execution, the agent roster with exact inputs/outputs, the dependency graph, the failure/recovery matrix, and the glossary. The artifacts provide DEPTH that the manifest references. This is a good architecture -- but it means the manifest is the load-bearing document. If it has errors or omissions, the pipeline breaks.

---

## Final Verdict

**Can a fresh Claude instance run this pipeline from these 7 files alone?**

**NO** -- because the TC Brief Template and Value Tables do not exist, and the Gate Runner has no executable code.

**Can a fresh Claude instance UNDERSTAND the pipeline?**

**YES** -- the manifest does an excellent job of explaining what the pipeline does, who does what, and how decisions flow.

**What is the minimum work needed to make this executable?**

1. Author the 73-line TC Brief Template (~2 hours)
2. Assemble the Value Tables (~2 hours)
3. Write Gate Runner Playwright code (~4 hours)
4. Create one worked example set (~2 hours)

Total: ~10 hours of prerequisite work before the first pipeline run.

---

*Review complete. Written by a fresh-eyes Claude instance with zero prior context about this pipeline, design system, or its history.*
