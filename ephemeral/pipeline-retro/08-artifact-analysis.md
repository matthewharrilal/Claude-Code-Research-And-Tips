# Artifact Analysis: Pipeline v3 Completeness and Quality

**Analyst:** Artifact Analyst (Task #8 / #20)
**Date:** 2026-02-23
**Scope:** All 6 pipeline artifacts + MANIFEST.md, evaluated against pipeline output files (`_content-map.md`, `_execution-brief.md`)

---

## Method

Read all 7 files cover-to-cover (~4,977 lines total across artifacts, ~231 lines across pipeline outputs). Evaluated each artifact against 6 criteria: purpose clarity, missing items, redundancies, format fitness for consuming agent, internal contradictions, and specific additions needed. Then performed cross-artifact gap analysis.

---

## Per-Artifact Assessment

### 1. MANIFEST.md (883 lines)

**Purpose:** Master routing document governing all Pipeline v3 execution. Maps 885 items across 6 artifacts to 15 agents in a 4-phase pipeline.

**Assessment: STRONG — best single document in the set.** The Quickstart (lines 9-34) gives a fresh orchestrator the full procedure in 25 lines. The Agent Roster (Section 2) is the clearest table in the system — every agent's model, inputs, and outputs are explicit. The Artifact-to-Agent Routing Table (Section 3) solves the "who reads what" problem definitively.

**What it does well:**
- Quickstart is genuinely useful — a fresh Opus instance could execute from it
- Agent Roster is exhaustive and precise (all 15 agents, model recommendations, I/O)
- Critical Sections Index (Section 7) provides agent-specific reading priorities
- Failure/Recovery paths (Section 6) cover 15 failure modes with detection + recovery
- Appendix B (File Routing Quick Reference) includes both WHAT agents receive AND what they MUST NOT receive — the negative routing is excellent
- Glossary (Appendix C) defines 22 terms consistently
- Evidence taxonomy (Appendix A) applied throughout

**Missing items:**
1. **TC Brief Template does not exist.** Appendix D (line 864) lists it as "TBD — must be authored." This is a BLOCKING gap. The pipeline cannot run Phase 1 without it. The Manifest correctly identifies this but does not provide the template itself or a fallback.
2. **Value tables do not exist.** Appendix D (line 865) lists them as "TBD — must be assembled" (~550 lines). The builder is supposed to receive these as reference material. Another BLOCKING prerequisite.
3. **No worked examples.** Known limitation #1 (line 880). A sample Content Map, Execution Brief, and Weaver verdict would eliminate ambiguity for fresh instances. The Gas Town pipeline outputs (`_content-map.md`, `_execution-brief.md`) could serve as examples if referenced.
4. **No agent prompt templates.** Known limitation #2 (line 881). The orchestrator must compose prompts from artifact content. This is the single highest-risk handoff — a fresh orchestrator must know WHICH sections of WHICH artifacts to paste into WHICH agent's prompt. The Artifact-to-Agent Routing Table (Section 3) partially addresses this but stops short of providing copyable prompts.
5. **council-verdict.md dependency.** Referenced as an authoritative override (line 617) but the Manifest notes artifacts should be self-sufficient. If a fresh instance lacks council-verdict.md, can it still execute? The Manifest says yes (line 617: "the 6 artifacts are self-sufficient for execution") but this is untested.

**Redundancies:**
- Soul Constraints Summary table (Section 1, lines 66-77) duplicates content from artifact-identity-perception.md. Justified as quick reference but adds 12 lines that could drift from the source.

**Format issues:**
- None significant. Well-structured with clear headers, consistent tables, and scannable sections.

**Contradictions:**
- Line 25 says Brief Assembler receives "soul world-description + perception thresholds + recipe phases + disposition D-01-D-08" but Section 3 routing table (line 200) says Brief Assembler receives specific file sections. These are consistent but expressed differently — potential confusion for a fresh instance.
- Line count discrepancy: artifact-builder-recipe.md header says 146 items, but routing table (line 212) says "75+78=153 — discrepancy is an artifact-internal issue." This is flagged but unresolved.

**Specific additions needed:**
1. **BLOCKING:** Author the TC Brief Template (73 lines) and add it as a concrete file, not a TBD reference.
2. **BLOCKING:** Assemble value tables (~550 lines) or document how to generate them.
3. **HIGH:** Add the Gas Town pipeline outputs as worked examples (reference `_content-map.md` and `_execution-brief.md` as exemplars).
4. **MEDIUM:** Add agent prompt templates — even skeletal ones — for Content Analyst, Brief Assembler, and Builder. These 3 agents are the highest-risk handoffs.

---

### 2. artifact-routing.md (843 lines)

**Purpose:** Define Phase 0 content analysis protocol and Phase 1 brief assembly process, including the TC Brief Template structure.

**Assessment: STRONG on analysis protocol, INCOMPLETE on brief template.** The content analysis protocol (6 operations, lines 31-190) is thorough and well-sequenced. The brief template structure (Section 10) defines tiers and line budgets but does not contain the actual template text. This is the single most important gap in the entire artifact set.

**What it does well:**
- Content type classification (PROSE/MIXED/VISUAL) with clear criteria (lines 47-72)
- Structural heterogeneity mapping with per-section register classification (NARRATIVE/REFERENCE/CODE)
- 5-axis reader model is comprehensive (expertise, patience, goal, context, device)
- Metaphor viability assessment with 3-seed recommendation format (observed in _content-map.md output)
- Content-volume-to-zone-count mapping provides concrete guidance
- Compression physics (survival function S(x)) explains WHY the brief is compressed

**Missing items:**
1. **BLOCKING: The actual TC Brief Template text.** Section 10 "Brief Template Structure" defines the STRUCTURE (Tier 1: 15 lines, Tier 2: 8 lines, Tier 3: 50 lines, Tier 4: 40 lines, Content Map: 30-50 lines) but NOT the actual template content. A fresh Brief Assembler has the skeleton but no muscle. Compare: the Gas Town `_execution-brief.md` output is 165 lines — well above the 93-113 line budget stated in the Manifest. Either the budget is wrong or the first execution exceeded it.
2. **Content-form fit gate criteria are vague.** Section 12 defines the gate exists but the pass/fail criteria are not binary. A fresh instance cannot programmatically verify content-form fit.
3. **No example content map.** The Content Analyst has a protocol but no reference output. The Gas Town `_content-map.md` (66 lines) shows what a good content map looks like — this should be referenced.

**Redundancies:**
- Temporal composition (Section 5) overlaps with the density arc material in artifact-builder-recipe.md Phase 6. Both describe scroll rhythm with similar concepts (OPENING/DEEPENING/RESOLVING). The routing artifact should define the ANALYSIS framework; the builder recipe should define the BUILD framework. Currently both do both.

**Format issues:**
- Item citations are thorough but dense. Lines like `> ITEM 5 (D01-D03, L24): PHASE 0: CONTENT ANALYSIS` interrupt the reading flow. These are valuable for audit but make the document harder to scan. Consider moving item citations to a footnote section or appendix.

**Contradictions:**
- Brief line budget: Manifest says 93-113 lines. artifact-routing.md Section 10 sums to 143-163 lines (15 + 8 + 50 + 40 + 30-50). The actual Gas Town brief was 165 lines. The 93-113 figure appears to be the CONSTRAINT layer only (without content map appendix), but this is never clarified.

**Specific additions needed:**
1. **BLOCKING:** Write the actual 73-line TC Brief Template as inline content or a referenced file.
2. **HIGH:** Reference `_content-map.md` as an exemplar output from Phase 0.
3. **MEDIUM:** Clarify brief line budget discrepancy (93-113 vs 143-163 vs 165 actual).
4. **LOW:** Move item citations to appendix to improve scannability.

---

### 3. artifact-identity-perception.md (556 lines)

**Purpose:** Define the 10 soul constraints (Layer 1) and 6 perception thresholds (Layer 2) in dual-route format — world-description for builder, binary checks for gate runner.

**Assessment: EXCELLENT — the tightest artifact in the set.** Clear dual-column format for each soul constraint (world-description | CSS rule | gate check | evidence). Perception calibration table (15=subtle, 25=confident, 50=dramatic) is the single most actionable table in the pipeline. The Part 3 cross-layer integration explains WHY items appear twice.

**What it does well:**
- Dual-route pattern is crystal clear. Each SC-XX has both a poetic world-description AND a binary gate check. No ambiguity about which goes where.
- Perception calibration table gives the builder a RANGE, not just a minimum. "15 RGB = subtle, 50 RGB = dramatic" prevents threshold gaming naturally.
- Part 3 cross-layer integration prevents the "why is this duplicated?" question before it arises.
- Evidence status on every claim (PROVEN/OBSERVED/THEORETICAL).

**Missing items:**
1. **SC-03 exception path is unclear.** Container width is 940-960px, with 1100px for "data-heavy" pages. What constitutes "data-heavy"? The gate runner (GR-03) would need to know when to check 960px vs 1100px. The _execution-brief.md output says 940-960px (line 13) with no exception mentioned.
2. **No visual examples of calibration.** The calibration table says "15 RGB = subtle" but a fresh builder may not know what 15 RGB looks like. A hex-pair example (e.g., `#FEF9F5` vs `#F0EBE3` = 34 RGB delta) would be immediately actionable.

**Redundancies:**
- Minimal. The dual-route pattern is intentional redundancy per council mandate. No wasteful duplication.

**Format issues:**
- Evidence taxonomy uses 5 levels (omitting PROVEN) while the Manifest Appendix A uses 6. The Manifest notes this (line 778) but the artifact itself does not explain why PROVEN is absent.

**Contradictions:**
- None found. This is the most internally consistent artifact.

**Specific additions needed:**
1. **MEDIUM:** Define "data-heavy" criteria for the SC-03 1100px exception.
2. **LOW:** Add 2-3 hex-pair examples to the calibration table showing what 15/25/50 RGB delta looks like in practice.
3. **LOW:** Align evidence taxonomy to the 6-level standard or explain the 5-level choice.

---

### 4. artifact-builder-recipe.md (840 lines)

**Purpose:** Provide the builder with a sequenced recipe (not checklist) for scaffolding (Layer 3) and disposition (Layer 4).

**Assessment: STRONG on format, MODERATE on completeness.** The recipe format is the artifact's greatest strength — Read/Select/Deploy/Assess verbs create a clear sequence. Phase 1 (Read Vocabulary) is immediately actionable. Phase 2 (Select Creative Decisions) asks the right questions. D-01 through D-08 are well-written creative prompts.

**What it does well:**
- Recipe format with sequenced verbs (Read, Select, Deploy, Assess) is proven to produce DESIGNED output vs FLAT output from checklists.
- Phase 1 file-reading instructions are concrete: "Read tokens.css cover to cover" (line 25).
- Per-category mechanism minimums (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+) replace the catastrophic "sample 2-4" language.
- D-01 through D-08 each have a PURPOSE statement followed by technique suggestions. The PURPOSE framing prevents cargo-culting.
- 80% creative authority explicitly granted (line 13).

**Missing items:**
1. **Phase 3 (Deploy Scaffolding) is thin.** The "how to structure HTML" guidance is abstract compared to the concrete Phase 1 (file reading) and Phase 4 (disposition). A builder needs to know: How many zone `<section>` elements? Should zones use CSS Grid or flexbox? What component classes from components.css map to what zone types? The _execution-brief.md mentions "8+ component library classes" (line 94) but the recipe does not enumerate them.
2. **Phase 5 (Self-Evaluate) criteria are missing.** The recipe tells the builder to self-evaluate but does not provide binary criteria. What specifically should the builder check? The gate runner has 42 checks — a subset of 5-10 "pre-flight" checks the builder can run mentally would catch the most common failures before Phase 3.
3. **Phase 6 (Temporal Composition) is incomplete.** The scroll rhythm concepts (OPENING/DEEPENING/RESOLVING) are defined but the CSS implementation guidance is absent. How does a builder CREATE temporal composition in CSS? Through `min-height` on zones? Through varying `padding-top`/`padding-bottom`? Through different `background-color` transition patterns?
4. **No connection to components.css.** The recipe says "Read components.css" but never says "Use `.callout-box` in Z3 for role definitions" or "Use `.data-table` for the comparison matrix in Z6." The mapping between component classes and content types is left entirely to the builder.

**Redundancies:**
- Temporal composition (Phase 6) overlaps with artifact-routing.md Section 5 (Temporal Composition — Scroll Rhythm). The routing artifact analyzes scroll rhythm as a content property; the builder recipe should teach how to BUILD it.

**Format issues:**
- Item citations are heavier than in other artifacts (multiple ITEM references per paragraph). The recipe should flow like instructions; citations break the instructional voice.
- The 840-line length is long for a "recipe." The Brief Assembler must compress this to ~90 lines of Tiers 3-4. The extraction guide (Manifest lines 227-231) helps but the Brief Assembler has no example of a successful extraction.

**Contradictions:**
- Item count: Header says 146 items (70 + 76). Manifest routing table says 75 + 78 = 153. The header also says 70 SCAFFOLDING but the Manifest base count is 68. These small discrepancies suggest the appendix item lists and header counts were updated at different times.

**Specific additions needed:**
1. **HIGH:** Expand Phase 3 with concrete HTML scaffolding guidance: zone element structure, grid/flexbox recommendations, component-to-zone mapping.
2. **HIGH:** Add 5-10 builder self-check criteria to Phase 5 (e.g., "Check: do adjacent zone backgrounds differ by >=25 RGB points? Check: does the page have >=3 distinct border weights?").
3. **MEDIUM:** Add CSS implementation guidance to Phase 6 (temporal composition).
4. **MEDIUM:** Add a component-to-content-type mapping table (e.g., "NARRATIVE zones → `.pullquote`, `.callout-breathing`; REFERENCE zones → `.data-table`, `.spec-card`; CODE zones → `.code-block`, `.terminal`").
5. **LOW:** Reconcile item count discrepancies between header and appendix.

---

### 5. artifact-gate-runner.md (763 lines)

**Purpose:** Define 42 programmatic gates (39 binary + 3 advisory) for automated verification, executed as Playwright JavaScript by the orchestrator.

**Assessment: STRONG on specification, WEAK on implementation.** The gate definitions are precise and binary — each has a clear PASS/FAIL condition. The verdict logic (priority order) is unambiguous. But the artifact specifies WHAT to check without providing executable code. A fresh orchestrator must translate gate specifications into Playwright JavaScript, which is a non-trivial implementation task.

**What it does well:**
- Every gate has a unique ID (GR-01 through GR-42), a name, a binary condition, and evidence status.
- Verdict logic priority order is explicit: Identity FAIL > 3+ Anti-Pattern > Perception FAIL > PA-05 score.
- Anti-pattern gates (GR-17 through GR-22) are the pipeline's unique contribution — they detect known failure modes that previous pipelines missed (threshold gaming, ghost mechanisms, whitespace voids, CSS budget misallocation, uniform typography).
- Values rerouting (34 items moved AWAY from gate runner per council) prevents the gate runner from making judgment calls it is not equipped to make.
- Advisory gates (GR-33 through GR-35) are explicitly marked as non-binary, preventing false FAIL signals on mode detection.

**Missing items:**
1. **No executable code.** The artifact says "Gate Runner Execution Protocol" but provides specifications, not code. A gate specification like "GR-19: Stacked gap — total gap between adjacent content sections must be <= 120px" requires the orchestrator to write `document.querySelectorAll('section + section')` with `getComputedStyle()` logic to measure actual stacked gaps. This is 10-30 lines of JavaScript PER gate. For 42 gates, that is 420-1,260 lines of JavaScript that must be authored.
2. **No structured output schema.** The Manifest says "Structured JSON results (42 gates: PASS/FAIL)" (line 134) but no JSON schema is defined. What does the output look like? `{ "GR-01": { "status": "PASS", "value": 0 } }`? Or `{ "gates": [{ "id": "GR-01", ... }] }`?
3. **GR-22 (CSS budget misallocation) is hard to verify programmatically.** "Budget misallocation" requires parsing and classifying CSS rules by purpose — this is closer to an LLM judgment than a Playwright DOM query. The gate needs a more specific programmatic definition (e.g., "no more than 15% of CSS lines should have `letter-spacing` values below 0.1em").
4. **Responsive gate re-run scope is undefined.** The Manifest says "Responsive gates re-run at 768px" (line 429) but which of the 42 gates are responsive gates? All 42? Only a subset? The artifact does not tag gates as "responsive" or "desktop-only."

**Redundancies:**
- Experiment gates (GR-36 through GR-39) and Policy gates (GR-40 through GR-42) are orchestrator-only concerns that could live in artifact-orchestrator.md instead. They are not builder-output verification gates — they are pipeline state management.

**Format issues:**
- The gate specification format varies. Some gates have detailed measurement methodology; others have one-line conditions. Standardizing to a consistent format (ID | Name | Condition | Measurement Method | PASS Example | FAIL Example) would help implementers.

**Contradictions:**
- S-09 stacked gap: Manifest says "<=120px total stacked gap" (line 596). Section 12 of artifact-orchestrator.md says "adjusted to <=150px total stacked gap (not <=96px per-property)" (line 725). Which is authoritative? The Manifest says 120px. The orchestrator says 150px. The _execution-brief.md uses 120px (line 37). Three different numbers in three documents.

**Specific additions needed:**
1. **HIGH:** Provide executable Playwright JavaScript for at least the 10 identity gates (GR-01 through GR-10) and 6 perception gates (GR-11 through GR-16). These 16 gates are the highest-priority automated checks.
2. **HIGH:** Define the JSON output schema for gate results.
3. **HIGH:** Resolve the stacked gap threshold contradiction (120px vs 150px).
4. **MEDIUM:** Tag each gate as RESPONSIVE (re-run at 768px) or DESKTOP-ONLY.
5. **MEDIUM:** Provide a more specific programmatic definition for GR-22 (CSS budget misallocation).
6. **LOW:** Move experiment/policy gates (GR-36 through GR-42) to artifact-orchestrator.md.

---

### 6. artifact-pa-protocol.md (1,004 lines)

**Purpose:** Define the 65 PA questions, 9-auditor deployment architecture, screenshot protocol, PA-05 scoring, and verdict calibration.

**Assessment: EXCELLENT — the most operationally complete artifact.** The 9-auditor deployment with thematic assignments is immediately executable. The fresh-eyes principle is stated clearly and repeatedly. PA-05 scoring criteria (Designed, Coherent, Proportionate, Polished) are unambiguous. The screenshot pre-capture pattern eliminates the known Playwright contention issue.

**What it does well:**
- 65 questions across 9 thematic auditors (A through I) with clear per-auditor assignments.
- Fresh-eyes principle is stated 3+ times with different emphases — impossible to miss.
- PA-05 sub-criteria are each defined with a PASS/FAIL condition, not a judgment scale.
- Screenshot pre-capture pattern (3 viewports, cold look + scroll-through) is concrete and proven (Mode 4 PA used this pattern successfully with 102 screenshots and 9 parallel auditors).
- Emotional arc assessment (Part 6) adds a qualitative dimension that pure question-answering misses.
- Tier 5 Flagship detection questions (PA-60 through PA-68) extend the protocol for higher-quality detection.
- Integrative Auditor role is well-defined: "free-form gestalt impression," no assigned questions, synthesizes 9 reports.
- Weaver receives both diagnostic output AND artistic impression — prevents threshold language from reaching a potential REFINE builder.

**Missing items:**
1. **No scoring rubric for individual questions.** Each PA auditor answers 5-14 questions but the protocol does not specify whether answers should be YES/NO, 1-5 scale, or free-text narrative. A fresh auditor might answer with a paragraph when a binary YES/NO was intended, or vice versa. The Integrative Auditor must synthesize 9 reports of unknown format.
2. **Integrative Auditor aggregation method is underspecified.** "Free-form gestalt impression" is correct but "synthesize into single PA-05 score" needs more guidance. If 4 auditors say the page looks DESIGNED and 5 say ASSEMBLED, what does the Integrative Auditor report? Majority vote? Weighted by auditor theme? Lowest-score-wins?
3. **Weaver calibration references are named but not inlined.** The Manifest (line 461) says the Weaver receives "multi-coherence scale, severity scale, metaphor expression spectrum" but these scales are defined in the PA protocol without concrete examples. What does "multi-coherence 3/5" look like vs "multi-coherence 5/5"?

**Redundancies:**
- Perception threshold reference in Appendix A duplicates artifact-identity-perception.md. Justified as a self-contained reference for PA auditors (who should not receive other artifacts), but creates a drift risk.

**Format issues:**
- At 1,004 lines, this is the longest artifact. Parts 7-12 (rerouted VALUES items, anti-patterns, cross-page coherence, mode determinants, item registry) add ~300 lines that serve audit/traceability but not execution. Consider moving Parts 7-12 to an appendix.

**Contradictions:**
- None found between this artifact and the Manifest. PA-05 scoring is consistent across all documents.

**Specific additions needed:**
1. **HIGH:** Define the expected answer format for PA questions (binary, scale, or narrative — per question or per auditor theme).
2. **MEDIUM:** Add aggregation guidance for the Integrative Auditor (how to resolve disagreement between auditors).
3. **MEDIUM:** Inline or reference concrete examples for Weaver calibration scales.
4. **LOW:** Move Parts 7-12 to an appendix for cleaner execution flow.

---

### 7. artifact-orchestrator.md (971 lines)

**Purpose:** Master control document for the orchestrator agent — defines the complete pipeline sequence.

**Assessment: COMPREHENSIVE but BLOATED.** Sections 0-8 (~500 lines) are an effective execution guide. Sections 9+ (~470 lines) are historical/theoretical context that a fresh orchestrator does not need for execution. The Manifest already flags this (Known Limitation #3, line 882). The execution sections are well-sequenced but overlap significantly with the Manifest's Phase-by-Phase Execution (Section 4).

**What it does well:**
- Master equation (Quality = Agent Capability x Content Affordance x Spec Fidelity) with zero-factor analysis is a powerful framing.
- Precondition table (Section 0) with evidence status is honest and actionable.
- Mode selection logic (APPLIED vs COMPOSED) with clear criteria.
- Building sequence (Section 5) — 8-step zone-by-zone with self-evaluation.
- Ship/Refine/Rebuild protocols are detailed and differentiated (REFINE = different builder with artistic impressions; REBUILD = fresh builder in composing mode, no failed HTML).
- Honest cost estimates (Section 8) per council mandate.

**Missing items:**
1. **Orchestrator prompt composition guidance.** The orchestrator must compose prompts for 14 agents from artifact content. The artifact says WHAT each agent receives but not HOW the orchestrator should compose the prompt. Should it paste entire artifact sections? Summarize? Use a template? This is the highest-risk execution gap.
2. **Phase 3A implementation.** The screenshot protocol says "serve HTML via HTTP" and "disable scroll animations" but does not provide the actual server setup commands or Playwright configuration. A fresh orchestrator needs: (a) how to serve (e.g., `python -m http.server`), (b) the viewport resize command, (c) the font-loading wait, (d) the scroll-step calculation.
3. **Phase 0.5 Mode Selection criteria are qualitative.** "High structural heterogeneity AND metaphor viability" — what is HIGH? The _content-map.md output says "Structural heterogeneity: HIGH — 7+ element types across 13 sections." Is 5 element types across 8 sections HIGH? What's the threshold?

**Redundancies:**
- Sections 0-8 substantially overlap with MANIFEST.md Section 4 (Phase-by-Phase Execution). Both describe the same pipeline with similar detail. The Manifest is more concise; the orchestrator artifact has more inline item references and historical context. A fresh orchestrator reading both would encounter ~400 lines of repeated information.
- Ship/Refine/Rebuild protocols appear in BOTH this artifact (Section 7) and the Manifest (Section 6). They are consistent but duplicated.

**Format issues:**
- Item citations are the heaviest of any artifact. Lines 28-48 (Section 0) contain 12 item references in 20 lines. This is useful for traceability but makes the document read like a citation index rather than instructions.
- Sections 9-14 (~470 lines) are historical context, experiments, suppressor management, and recommendations. These should be in a separate "orchestrator-reference.md" file, not the execution document.

**Contradictions:**
- Stacked gap threshold: Section 12 (line 725) says "adjusted to <=150px total stacked gap." The Manifest and _execution-brief.md both say 120px. The orchestrator artifact's own Section 0 cites perception thresholds that include <=120px. Internal contradiction within the artifact.

**Specific additions needed:**
1. **HIGH:** Add orchestrator prompt composition templates (even skeletal) for Content Analyst, Brief Assembler, and Builder.
2. **HIGH:** Add Phase 3A implementation details (HTTP server command, Playwright config, viewport commands, font-loading wait).
3. **HIGH:** Split into execution document (Sections 0-8, ~500 lines) and reference document (Sections 9+, ~470 lines).
4. **MEDIUM:** Quantify Mode Selection criteria ("HIGH" heterogeneity = N+ element types across M+ sections).
5. **MEDIUM:** Resolve stacked gap threshold contradiction (150px in Section 12 vs 120px everywhere else).

---

## Cross-Artifact Gap Analysis

### Q1: Is any critical information in the WRONG artifact?

**YES — 3 cases identified:**

1. **Experiment and Policy gates (GR-36 through GR-42) are in artifact-gate-runner.md but belong in artifact-orchestrator.md.** These 7 gates are not builder-output verification — they are pipeline state management. The gate runner executes Playwright JavaScript against the built HTML. Experiment state tracking and policy enforcement are orchestrator concerns, not DOM verification tasks.

2. **Temporal composition appears in BOTH artifact-routing.md (Section 5) and artifact-builder-recipe.md (Phase 6).** The analysis framework (how to classify scroll rhythm) belongs in routing. The build framework (how to create scroll rhythm in CSS) belongs in the recipe. Currently both contain both perspectives.

3. **Ship/Refine/Rebuild protocols appear in BOTH artifact-orchestrator.md (Section 7) and MANIFEST.md (Section 6).** The orchestrator artifact should be the SINGLE source. The Manifest should reference it, not repeat it.

### Q2: Are there gaps where NO artifact covers a critical topic?

**YES — 5 gaps identified:**

| Gap | Severity | Description |
|-----|----------|-------------|
| TC Brief Template | **BLOCKING** | The 73-line template does not exist anywhere. artifact-routing.md defines the structure; no file contains the actual template. The Brief Assembler cannot operate without it. |
| Value Tables | **BLOCKING** | ~550 lines of CSS vocabulary for the 6-channel framework. Referenced in Manifest Appendix D (line 865) as "TBD — must be assembled." Builder cannot access channel-specific CSS values without this. |
| Gate Runner executable code | **HIGH** | artifact-gate-runner.md specifies 42 gates but provides zero Playwright JavaScript. The orchestrator must author ~500-1000 lines of JavaScript to implement the gates. |
| Orchestrator prompt templates | **HIGH** | No artifact provides the actual prompts the orchestrator sends to agents. The orchestrator must compose prompts from scattered artifact sections. |
| Mode selection quantification | **MEDIUM** | "HIGH structural heterogeneity" and "metaphor viability" are qualitative. No binary threshold exists for the APPLIED vs COMPOSED decision. The Content Analyst flags these qualitatively (as seen in _content-map.md: "Structural heterogeneity: HIGH"), but the orchestrator has no programmatic way to verify. |

### Q3: Is the routing from artifact to consuming agent clear enough for a fresh orchestrator?

**MOSTLY YES, with one critical exception.** The Manifest's Artifact-to-Agent Routing Table (Section 3) is excellent — it maps every artifact section to a receiving agent with a purpose description. Appendix B provides a quick-reference summary. The "MUST NOT receive" table (lines 796-805) is particularly valuable.

**The exception:** The Brief Assembler extraction process is underspecified. The Manifest (lines 227-231) provides a 5-bullet extraction guide (INCLUDE VERBATIM / SUMMARIZE / REFERENCE / PRESERVE FORMAT), but a fresh Brief Assembler compressing 840 lines of recipe into ~90 lines of brief has no example to follow. The Gas Town `_execution-brief.md` is the closest thing to a worked example, but it is not referenced in any artifact.

### Q4: Are there implicit dependencies not documented?

**YES — 4 identified:**

1. **HTTP server for Playwright.** Phase 3A requires serving HTML via HTTP (Playwright blocks `file://`). No artifact specifies which server to use, what port, or how to configure it. The orchestrator must know this implicitly.

2. **Font availability.** The builder recipe specifies "Instrument Serif / Inter / JetBrains Mono" (SC-05). Phase 3A waits for `document.fonts.ready`. But if these fonts are not available in the build environment (no Google Fonts link, no local font files), the font check will never resolve or will fall back to system fonts. No artifact addresses font provisioning.

3. **Playwright installation.** The gate runner and screenshot capture require Playwright. No artifact lists Playwright as a prerequisite or specifies which browser to use (Chromium, Firefox, WebKit).

4. **File path resolution.** Appendix D provides relative paths (`design-system/compositional-core/vocabulary/tokens.css`). If the orchestrator's working directory is not the repository root, all paths break. No artifact specifies the expected working directory.

---

## Ranked Enrichment Recommendations

Priority ranking: BLOCKING > HIGH > MEDIUM > LOW.

| # | Priority | Artifact | Enrichment |
|---|----------|----------|------------|
| 1 | **BLOCKING** | artifact-routing.md | Author the TC Brief Template (73 lines) as inline content or standalone file. Without this, Phase 1 cannot execute. |
| 2 | **BLOCKING** | MANIFEST.md / new file | Assemble value tables (~550 lines) for the 6-channel CSS framework. Without this, builder lacks channel-specific vocabulary. |
| 3 | **HIGH** | artifact-gate-runner.md | Provide Playwright JavaScript for the 16 highest-priority gates (10 identity + 6 perception). |
| 4 | **HIGH** | artifact-orchestrator.md | Add orchestrator prompt composition templates for Content Analyst, Brief Assembler, and Builder. |
| 5 | **HIGH** | artifact-orchestrator.md | Split into execution (Sections 0-8) and reference (Sections 9+) documents. |
| 6 | **HIGH** | artifact-orchestrator.md | Add Phase 3A implementation details (HTTP server, Playwright config, viewport setup, font wait). |
| 7 | **HIGH** | artifact-builder-recipe.md | Expand Phase 3 with HTML scaffolding guidance and component-to-zone mapping. |
| 8 | **HIGH** | artifact-gate-runner.md | Define JSON output schema for gate results. |
| 9 | **HIGH** | artifact-gate-runner.md | Resolve stacked gap threshold contradiction (120px in Manifest/brief vs 150px in orchestrator). |
| 10 | **HIGH** | artifact-pa-protocol.md | Define expected answer format for PA questions (binary, scale, or narrative). |
| 11 | **MEDIUM** | MANIFEST.md | Reference Gas Town outputs (`_content-map.md`, `_execution-brief.md`) as worked examples. |
| 12 | **MEDIUM** | artifact-routing.md | Clarify brief line budget (93-113 vs 143-163 vs 165 actual). |
| 13 | **MEDIUM** | artifact-builder-recipe.md | Add 5-10 builder self-check criteria to Phase 5. |
| 14 | **MEDIUM** | artifact-orchestrator.md | Quantify Mode Selection criteria with binary thresholds. |
| 15 | **MEDIUM** | artifact-pa-protocol.md | Add Integrative Auditor aggregation guidance. |
| 16 | **MEDIUM** | artifact-gate-runner.md | Tag gates as RESPONSIVE or DESKTOP-ONLY. |
| 17 | **MEDIUM** | MANIFEST.md | Document implicit dependencies (HTTP server, font availability, Playwright, working directory). |
| 18 | **LOW** | artifact-identity-perception.md | Add hex-pair examples to calibration table. |
| 19 | **LOW** | artifact-identity-perception.md | Define "data-heavy" criteria for SC-03 1100px exception. |
| 20 | **LOW** | artifact-routing.md | Move item citations to appendix. |

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total artifact lines | 4,977 |
| Artifacts rated EXCELLENT | 2 (identity-perception, pa-protocol) |
| Artifacts rated STRONG | 3 (MANIFEST, routing, builder-recipe) |
| Artifacts rated COMPREHENSIVE/BLOATED | 1 (orchestrator) |
| BLOCKING gaps | 2 (TC Brief Template, Value Tables) |
| HIGH enrichments | 8 |
| MEDIUM enrichments | 7 |
| LOW enrichments | 3 |
| Cross-artifact contradictions | 1 (stacked gap: 120px vs 150px) |
| Cross-artifact misplacements | 3 |
| Undocumented implicit dependencies | 4 |

**Bottom line:** The artifact set is 85-90% complete for a fresh orchestrator instance. The 2 BLOCKING gaps (TC Brief Template and Value Tables) must be resolved before the pipeline can run without accumulated context. The 8 HIGH enrichments would significantly reduce orchestrator error rate but are not strictly blocking. The artifacts' greatest strengths are the dual-route pattern, the recipe format, and the fresh-eyes principle. Their greatest weakness is the gap between specification and implementation — particularly for the gate runner and orchestrator prompt composition.
