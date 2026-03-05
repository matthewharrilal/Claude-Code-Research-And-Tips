# Dimension 11b: Compositional Question Propagation Trace

**Auditor:** Question Propagation Tracer
**Scope:** Trace whether compositional questions ("what if..." style) propagate from the knowledge base through specialist prompts and outputs into the synthesized build packages
**Runs examined:** Molly Panopticon (2026-03-02), Yegge Gas Town (2026-03-02)

---

## Executive Summary

**CRITICAL GAP CONFIRMED.** The pipeline's knowledge base contains rich compositional questions that drove the original validated explorations to visual maturity. These questions are almost entirely lost during propagation. The TC briefs partially generate their own questions (labeled "experimental questions" and "invitations"), but the specialist prompts contain ZERO instructions to extract or propagate compositional questions. As a result, the specialists produce CSS-action-oriented output that answers "what to do" without ever asking "what if...?" The synthesized packages inherit this action-only orientation, delivering mechanisms without the generative questions that made those mechanisms meaningful in the first place.

---

## A. Do the TC Briefs Contain Compositional Questions?

### Molly Panopticon TC Brief

**YES -- 6 compositional questions identified:**

1. **Experimental question 1:** "What happens if the terra incognita zone (unanswered questions, Part XVI) uses the BEDROCK dark background instead of sparse cream? A night survey -- the questions asked after the fieldwork is done, around the camp lantern." (Section 5)

2. **Experimental question 2:** "Can these checkpoints be the page's structural anchors, with a consistent visual signature that recurs at each checkpoint, creating a rhythm the reader learns to anticipate?" (Section 5)

3. **Invitation 1** (implicit question): "Try treating the 8-domain code blocks as SURVEY COORDINATES -- monospace text within a contained region that feels like grid references on a map." (What if code blocks felt like map coordinates?)

4. **Invitation 2** (implicit question): "Consider giving each quote a structural left-border in a different accent color -- not as decoration, but as the legend's symbol system." (What if quotes were legend entries with semantic color coding?)

5. **Invitation 3** (implicit question): "This table should feel like overlapping survey transparencies -- two maps of the same territory measured differently." (What if comparison tables felt like cartographic overlays?)

6. **Invitation 4** (implicit question): "Consider giving the philosophical warnings ASYMMETRIC treatment -- wider left margin, standard right margin." (What if warnings were spatial marginal annotations?)

The **unresolved opposition** about the Flutterwhat critique placement is also a compositional question: "Does it interrupt the survey like a rival cartographer's annotation? Does it sit alongside the main map as a competing survey?"

### Yegge Gas Town TC Brief

**YES -- 4 compositional questions identified:**

1. **Experimental question 1:** "What happens if the Communication Flow diagram becomes a full-width event -- breaking the content column to occupy the breathing zone width?" (Section 5)

2. **Experimental question 2:** "The content has a strong 'Mad Max' reference layer... could it appear as a textural undertone? Perhaps the section dividers or the quote treatment carry a trace of the post-apocalyptic vocabulary." (Section 5)

3. **Invitation 2** (implicit question): "Consider a 2-column bento grid for Town-Level roles... The visual hierarchy of the role presentation MIRRORS the operational hierarchy of the roles themselves." (What if the card layout expressed the command hierarchy?)

4. **Invitation 3** (implicit question): "Within it, the 3-layer memory model (Hot/Warm/Cold) creates an opportunity for nested depth..." (What if the memory model was visually stratified within the dark zone?)

The **unresolved opposition** (Solo Human vs. Machine Collective) is also a compositional question: "does the page feel like one voice commanding many? Or many voices serving one?"

**VERDICT:** The TC briefs DO contain compositional questions. They are the pipeline's primary source of generative "what if" thinking. The TC agent is doing this work independently of the knowledge base.

---

## B. Do the Specialist Prompts INSTRUCT Agents to Extract/Propagate Compositional Questions?

### Specialist 1 (Findings Mapper) Prompt

**NO.** The prompt instructs the agent to:
- Rate findings against content + metaphor (HIGH/MEDIUM/LOW/SKIP)
- Write "CSS Actions" with specific properties and values
- Write "Expected Evidence" for PA auditors
- Use "recipe verbs: Apply, Deploy, Encode, Set, Map, Configure"

The prompt never mentions questions, "what if" exploration, compositional hypotheses, or generative inquiry. The output format is **Finding ID -> Rationale -> CSS Action -> Expected Evidence**. This is an ANSWER format, not a QUESTION format. There is no field for "compositional question this finding raises" or "generative hypothesis for the builder."

### Specialist 2 (Validation Mapper) Prompt

**NO.** The prompt instructs the agent to:
- Follow provenance chains (ELEVATED, BOUNDED, REINFORCED)
- Write "Build Application" with specific CSS direction
- Identify chain confidence levels

The prompt never mentions compositional questions. It traces what was PROVEN, not what was ASKED. The original explorations (OD-004, CD-001, DD-006) were driven by questions -- but the provenance chain format strips the questions and preserves only the validated answers.

### Specialist 3 (Case Study Analyst) Prompt

**PARTIAL.** The prompt instructs agents to extract:
- "What TENSION did it face?"
- "What CANDIDATES did it consider and reject?"
- "What made the SELECTED approach work?"

This is the CLOSEST any specialist prompt comes to question propagation. The tension-derivation process IS a question-answering process. However, the prompt instructs extraction of the PROCESS (how the case study thought) rather than the QUESTIONS that launched that process. The "Phase 1 -- Multi-Axis Questioning" sections of the case studies contain explicit compositional questions:

- OD-004: "Does content have natural confidence gradients?" / "Can content be stratified by evidence strength?" / "Does content have vertical architecture?"
- CD-001: "Does content require both code examples AND conceptual explanations?"
- DD-006: "Does content describe a pattern that should be VISIBLE in the content itself?"

These questions are available in the case study files, but the Specialist 3 prompt does not instruct the agent to extract them. The "Process Extraction" section asks for tensions, candidates, and selection rationale -- not for the generative questions that preceded the tensions.

### Synthesizer Prompt

**NO.** The synthesizer assembles specialist outputs into 3 packages with 10 sections. None of the 10 sections have a "compositional questions" field. Section 8 (Structural Propositions) is the closest analog -- it contains "testable hypotheses" -- but these are verification checks ("does the build embody X?"), not generative questions ("what if the build tried X?").

**VERDICT:** The specialist prompts contain ZERO explicit instructions to extract or propagate compositional questions. Specialist 3's tension-extraction process is a weak proxy. The synthesizer has no section for questions. The pipeline's entire research phase is oriented toward producing ANSWERS (CSS actions, build applications, proven patterns), not QUESTIONS (compositional hypotheses, generative "what if" explorations).

---

## C. Do the Specialist Outputs Contain Compositional Questions or Their Visual Answers?

### Molly Run -- Specialist 1 (Findings Mapper)

**NO compositional questions.** The output contains 24 HIGH findings, each in the format:
- Rating: HIGH
- Rationale: [why this applies to THIS content]
- CSS Action: [specific CSS properties]
- Expected Evidence: [what auditor should see]

Zero entries contain "what if" formulations. The output transforms research findings into deterministic CSS instructions. Example: R3-Insight-23 (Fractal Self-Similarity) becomes "Deploy consistent density rhythm at 4 scales" -- not "What if the page demonstrated the same rhythm at multiple zoom levels?"

The output DOES contain visual answers to questions that were implicitly asked in the research -- but the questions themselves are absent. The builder receives the answer without knowing the question.

### Molly Run -- Specialist 2 (Validation Mapper)

**NO compositional questions.** The output contains provenance chains with "Build Application" sections. These are directives: "Do not layer explicit density manipulation on top of the organizational structure. Trust the equivalence." This is an answer to the question "Should I add density markers on top of content structure?" -- but the question is never stated.

### Molly Run -- Specialist 3 (Case Study Analyst)

**PARTIAL.** The output contains process extractions that implicitly reference questions:

- DD-003 Islands: "The collapse moment came when the builder realized that sparse ocean between dense clusters resolves four problems simultaneously." This implies the question "What happens when you put extreme whitespace between independent clusters?" but doesn't state it.

- OD-004 Confidence: "OD-004 asked: 'How does visual weight map to epistemic weight?'" -- **This is the ONE instance of an explicit question being propagated** in the entire specialist output corpus.

- DD-004 Layers: "The DECISION SEQUENCE was: audience-depth analysis first, then density-gradient analysis, then reading-path analysis." This implies a question sequence but doesn't surface it as questions.

### Yegge Run -- All Three Specialists

**Same pattern.** No compositional questions in S1 or S2 outputs. S3 contains implicit question references through process extraction but only OD-004's "How does visual weight map to epistemic weight?" survives as an explicit question.

**VERDICT:** The specialist outputs are almost entirely question-free. They contain CSS actions, provenance chains, and adapted mechanisms. The generative questions that drove the original explorations are compressed into their answers. One exception: OD-004's question about visual-weight-to-epistemic-weight mapping appears in Specialist 3's output.

---

## D. Do the Synthesized Packages Contain Questions a Builder Can Use to DERIVE Layout Decisions?

### Molly Run -- Package Pass 1

**ONE QUESTION (embedded, indirect).** The package contains:
- Section 0: Soul Checklist (binary checks -- no questions)
- Section 1: Build Context (metaphor + zone map -- directives, not questions)
- Section 2: Mechanism Selections (CSS implementations with rationale -- answers, not questions)
- Section 9: Consumption Protocol (reading order -- procedure, not questions)

The TC brief's experimental questions about the dark terra incognita zone and the checkpoint rhythm markers do NOT appear in the package. The TC brief's creative invitations (survey coordinates, legend entries, cartographic overlays, asymmetric annotations) are partially encoded as mechanisms (2.6 Pull Quotes as Legend Entries, 2.7 Asymmetric Margins) but transformed from QUESTIONS into INSTRUCTIONS.

### Molly Run -- Package Pass 2

**ZERO QUESTIONS.** Section 3 (Findings -> Build Actions) is a table of directives. Section 4 (Zone Architecture) is an ASCII diagram with spacing values. Section 5 (Case Study Processes) contains process narratives but no generative questions.

### Molly Run -- Package Pass 3

**PARTIAL -- Section 8 (Structural Propositions).** This section contains 3-5 "testable hypotheses" that function as verification questions:
- "Zone boundaries should be felt, not seen"
- "Density should be perceptible at 3+ scales"

These are closest to compositional questions, but they are VERIFICATION checks (test after building), not GENERATIVE questions (explore before building). The difference: "What if zone boundaries were felt rather than seen?" (generative) vs "Are zone boundaries felt rather than seen?" (verification).

### Yegge Run -- All Three Packages

**Same pattern.** Package Pass 1 contains mechanisms as instructions. Package Pass 2 contains findings as directives. Package Pass 3 contains structural propositions as verification checks. Zero generative "what if" questions.

**VERDICT:** The synthesized packages contain ZERO generative compositional questions. The TC brief's experimental questions and creative invitations are either lost or transformed into deterministic CSS instructions. Section 8 (Structural Propositions) contains verification checks that are the closest proxy.

---

## E. Where Are Questions Lost? Gap Analysis

### Gap 1: Knowledge Base -> Specialist Prompts (STRUCTURAL GAP)

**The knowledge base is RICH with compositional questions.**

The case studies contain explicit "Phase 1 -- Multi-Axis Questioning" sections with questions like:
- OD-004: "Does content have natural confidence gradients?" / "Can content be stratified by evidence strength?"
- CD-001: "Does content require both code examples AND conceptual explanations?"
- DD-006: "Does content describe a pattern that should be VISIBLE in the content itself?"
- DD-004: "Does content have vertical architecture (foundational vs experimental)?"

These questions drove the original explorations to their metaphors and mechanisms. They are the GENERATIVE engine of the design system.

**But the specialist prompts do not instruct agents to extract them.** The prompts ask for:
- S1: Finding ratings + CSS actions
- S2: Provenance chains + build applications
- S3: Tensions + candidates + adapted CSS

The question families listed in the task (certainty-based spatial organization, code reasoning as spatial structure, density as information encoding, component fractal self-similarity, velocity interleaving for reading rhythm) ARE present in the knowledge base as proven answers. But their original question form is not extracted.

### Gap 2: TC Brief -> Specialist Outputs (TRANSMISSION GAP)

The TC briefs contain experimental questions and creative invitations. Specialists 1 and 2 read the TC brief but treat it as a LENS for rating findings -- they do not propagate the TC brief's questions. Specialist 3 uses the TC brief as a metaphor lens for case study affinity, not as a source of questions to carry forward.

The TC brief's "Experimental question 1: What happens if..." and "Invitation 4: Consider giving..." formulations die at the specialist boundary. The specialists convert the brief's generative spirit into deterministic CSS.

### Gap 3: Specialist Outputs -> Synthesizer Packages (FORMAT GAP)

The synthesizer's 10-section output format has no slot for compositional questions. Even if a specialist output contained a question (rare), the synthesizer would have no section to place it in. The closest candidate is Section 8 (Structural Propositions), but propositions are assertions to test, not questions to explore.

### Gap 4: Packages -> Builder (CONSUMPTION GAP)

The builder receives the package in "primacy position" (first in context). If questions were present, the builder would encounter them early and could use them to DERIVE layout decisions rather than EXECUTE prescribed ones. But since no questions arrive, the builder operates in execution mode from the start.

---

## Specific Question Family Trace

### 1. Certainty-Based Spatial Organization (from OD-004)

**Knowledge base:** OD-004 asks "Does content have natural confidence gradients?" and discovers that border-weight can encode epistemic certainty.

**S1 output:** Absent. S1 does not read case studies.

**S2 output:** Present as ANSWER only. The validated finding (OD-F-005 -> AD-F-004) states "Organization IS Density" but does not carry the question "How does spatial organization encode certainty?"

**S3 output:** PARTIAL. Both runs identify OD-004 affinity and extract the process. The Molly run includes "OD-004 asked: 'How does visual weight map to epistemic weight?'" -- the only explicit question propagation in the entire pipeline.

**Package:** Transformed into Mechanism 2.4 (Molly: "Border-Weight Gradient / Certainty Encoding") with specific CSS values. The question is gone; the answer is an instruction.

### 2. Code Reasoning as Spatial Structure (from CD-001)

**Knowledge base:** CD-001 asks "Does content require both code examples AND conceptual explanations?" and discovers velocity interleaving.

**S1 output:** R5-T2 (Velocity Mismatch Rule) rated HIGH with CSS action. No question form.

**S2 output:** Absent (not a provenance chain finding).

**S3 output (Yegge):** CD-001 selected for affinity. Process extraction includes "CD-001 FACED content with 3 heavy component types" and the velocity interleaving discovery. But the QUESTION ("What happens when you stack heavy components?") is stated as a discovered fact, not as a question for the builder.

**Package:** Mechanism 4 (Yegge: "Velocity Interleaving for Heavy Components") with specific CSS. Builder told WHAT to do, not asked to EXPLORE what happens.

### 3. Density as Information Encoding (from DD-004/DD-006)

**Knowledge base:** DD-004 asks "Does content have vertical architecture (foundational vs experimental)?" DD-006 asks "Does content describe a pattern that should be VISIBLE in the content itself?"

**S1 output:** R3-Insight-5 (Geological Model) and R3-Insight-23 (Fractal Self-Similarity) rated HIGH. CSS actions provided. No questions.

**S2 output:** DD-F-006 fractal chain traced with ELEVATED confidence. Build application is directive: "Deploy fractal density at all 5 scales."

**S3 output:** DD-004 case study selected for affinity in both runs. Process extraction includes the decision sequence but not the generative questions.

**Package:** Mechanisms for background zones and fractal self-similarity. All answers, no questions.

### 4. Component Fractal Self-Similarity (from DD-006)

**Knowledge base:** DD-006's core question: "If the content is about self-similarity, can the page itself be self-similar at every scale?"

**S1 output:** R3-Insight-23 becomes "Deploy consistent density rhythm at 4 scales" (instruction).

**S2 output:** DD-F-006 -> AD-F-027 chain: "Fractal at 5 scales, bounded at 5" (fact).

**S3 output:** DD-006 selected for affinity in Yegge run (MEDIUM). Fractal TECHNIQUE extracted, not fractal QUESTION.

**Package:** Mechanism (Fractal Self-Similarity at 4/5 Scales) with CSS. The builder is told to deploy it, not asked "What if this page demonstrated the same rhythm at every zoom level?"

### 5. Velocity Interleaving for Reading Rhythm (from CD-001/CD-006)

**Knowledge base:** The implicit question: "What happens to reading rhythm when heavy components stack without relief?"

**S1 output:** R5-T2 rated HIGH. CSS anti-pattern avoidance rule.

**S3 output:** CD-001 velocity interleaving extracted as process (FACED/CONSIDERED/SELECTED).

**Package:** Mechanism with CSS for voice eruptions between heavy blocks. Pure instruction.

---

## Root Cause Analysis

The question propagation failure has THREE root causes:

### Root Cause 1: The specialist prompts were designed for KNOWLEDGE TRANSFER, not QUESTION TRANSFER

The prompts optimize for reducing 26,000 lines of knowledge to actionable CSS. This is a COMPRESSION task. Questions are "overhead" in a compression frame -- they take space without providing specific CSS values. The prompt design implicitly treats questions as waste to be removed during curation.

### Root Cause 2: The output format has no question slot

Finding -> Rationale -> CSS Action -> Expected Evidence. Chain -> Elevation -> Build Application. Affinity -> Process -> Adapted CSS. None of these formats have a field for "What question should the builder ask themselves before implementing this?"

### Root Cause 3: The TC brief's questions die at the specialist boundary

The TC brief is the pipeline's best source of compositional questions. But specialists read the TC brief as a LENS (metaphor + spatial direction) for rating their domain-specific findings. They do not propagate the TC brief's experimental questions -- those questions fall outside their domain-specific output format.

---

## Impact Assessment

### What the builder receives today:
- 8 mechanisms with CSS implementations
- 25+ findings translated to CSS actions
- 5 case study process extractions with adapted CSS
- 5 anti-patterns with mitigations
- 3-5 structural propositions (verification checks)

### What the builder does NOT receive:
- "What if the code blocks felt like map coordinates?" (Molly TC brief)
- "What happens if the terra incognita zone uses dark background?" (Molly TC brief)
- "Does content have natural confidence gradients?" (OD-004)
- "What if the Communication Flow diagram broke the content column?" (Yegge TC brief)
- "Can the page itself demonstrate the pattern it describes?" (DD-006)
- "What happens when you put extreme whitespace between independent clusters?" (DD-003)
- "How does visual weight map to epistemic weight?" (OD-004)

### Consequence:
The builder operates in EXECUTION mode (apply these mechanisms) rather than DERIVATION mode (explore these questions and derive your own mechanisms). This produces competent but uninspired pages -- pages that correctly implement the prescribed mechanisms but lack the generative energy that comes from a builder wrestling with a compositional question.

The original explorations (DD-006 scored 36/40, OD-004 scored 34/40, CD-001 scored 38/40) were driven by QUESTIONS. The builder who created DD-006 was asking "What if this page was self-similar at every scale?" The question drove the exploration. Today's pipeline gives the builder the ANSWER (deploy fractal at 5 scales) without the QUESTION. The answer without the question is an instruction. The question WITH the answer is a creative invitation.

---

## Recommendations

### 1. Add a "Compositional Questions" field to all specialist output formats

For Specialist 1: After each HIGH finding's CSS Action, add:
```
**Compositional Question:** [The generative "what if" question this finding raises for THIS content]
```

For Specialist 3: Extract "Phase 1 -- Multi-Axis Questioning" questions from case studies and adapt them to THIS content:
```
**Questions This Case Study Asked (adapted for this build):**
- [Original question] -> [This build's version of that question]
```

### 2. Add Section 10 to the synthesizer output: "Questions for the Builder"

In Package Pass 1 (read first by the builder), add a new section:

```
## 10. COMPOSITIONAL QUESTIONS

These questions are INVITATIONS, not requirements. They are drawn from
the TC brief's experimental questions and from the knowledge base's
proven question families. EXPLORE 2-3 of these during your build.

1. [TC brief experimental question 1, preserved verbatim]
2. [TC brief experimental question 2, preserved verbatim]
3. [Adapted from OD-004]: For THIS content, what happens if [certainty-encoding question]?
4. [Adapted from DD-006]: For THIS content, what happens if [self-similarity question]?
5. [Adapted from CD-001]: For THIS content, what happens if [velocity question]?
```

### 3. Propagate TC brief experimental questions through all three packages

Currently, the TC brief's experimental questions die at the specialist boundary. The synthesizer should carry them forward verbatim (or adapted) into the builder packages. The TC agent already does the generative work -- the pipeline just needs to stop discarding it.

### 4. Reframe Section 8 (Structural Propositions) from verification to exploration

Change from: "Zone boundaries should be felt, not seen" (test this after building)
Change to: "What if zone boundaries were felt rather than seen? Explore: remove visual dividers and test whether background + typography shifts alone create the transition." (explore this while building)

---

## Agent Log
- Files read: 4 specialist prompts (~900 lines), 1 synthesizer prompt (~650 lines), 2 TC briefs (~360 lines), 6 specialist outputs (~2,500 lines), 4 package files (~600 lines), 3 case study opening sections (~180 lines)
- Total files examined: 20
- Compositional questions found in TC briefs: 10 (6 Molly + 4 Yegge)
- Compositional questions found in specialist prompts: 0
- Compositional questions found in specialist outputs: 1 (OD-004 question in S3)
- Compositional questions found in packages: 0 generative (3-5 verification propositions in Section 8)
- Question propagation rate: ~10% (1 of 10 TC brief questions reaches specialist output; 0 reach packages)
- Quality self-assessment: HIGH CONFIDENCE -- findings are supported by exhaustive line-by-line reading of all prompt, output, and package files across both runs. The gap is structural (no question slot in any format) and consistent across both runs.
