# 33 — INGESTION SEQUENCE DESIGN

## Optimal Reading Order for the Pipeline Analysis Corpus

**Author:** Ingestion Sequence Designer (Opus agent)
**Date:** 2026-02-18
**Corpus size:** ~900K across 25 pipeline-analysis files + 5 external reference files
**Target reader:** Fresh Claude instance (~200K context window)
**Purpose:** Design the reading order that maximizes comprehension velocity — what a new instance understands per token consumed.

---

## TABLE OF CONTENTS

1. [Single-Page Brief](#single-page-brief) — Read this BEFORE touching any file
2. [Layer 1: Essential Context](#layer-1-essential-context) — 3 files + 3 external references
3. [Layer 2: Core Analysis](#layer-2-core-analysis) — 6 files
4. [Layer 3: Dimensional Depth](#layer-3-dimensional-depth) — 10 files
5. [Layer 4: Validation & Challenge](#layer-4-validation--challenge) — 6 files
6. [Anti-Patterns](#anti-patterns) — Sequences that would actively confuse
7. [Budget Strategies](#budget-strategies) — What to read at 50K / 100K / 200K budgets
8. [Dependency Graph](#dependency-graph) — Visual overview of file relationships

---

## SINGLE-PAGE BRIEF

*Give this to a new Claude instance before it reads anything else. ~500 words.*

### What This Corpus Analyzes

A team of 25+ Claude agents analyzed the transformation between two prompts used to build a single-page HTML design system showcase:

- **Master Execution Prompt** (963 lines): A "conviction-execution-coordination sandwich" that tells agents WHAT to build and WHY it matters. It organized ~97 rules by domain (soul, typography, spacing, etc.) and relied on agents to figure out HOW. Think of it as a building code.

- **Enhanced Remediation Spec** (1,025 lines): A "9-phase sequential recipe" created AFTER the master prompt's output was audited and found deficient (PA-05 scored 2.5/4 DESIGNED). It tells agents exactly WHAT TO DO, in WHAT ORDER, with EXACT CSS VALUES. Think of it as a construction manual.

Both prompts targeted the same output: a single HTML page showcasing a design system with 7 coherence channels, warm cream palette, and ~12-16 compositional mechanisms. The remediation spec was written by agents who could see both the master prompt AND its failures.

### The Core Finding

**Sub-perceptual variation (RC-4)** is the dominant root cause of the master prompt's failures. The master prompt's rules were technically satisfiable with CSS values below human perception thresholds. Example: `letter-spacing: 0.001em` technically satisfies "vary letter-spacing across sections" but is invisible. The remediation spec fixed this by providing exact values with built-in perceptual headroom (e.g., `letter-spacing: 0.02em / 0.04em / 0.06em`).

This finding generalizes: **LLM agents comply with the letter of specifications, not the spirit.** Binary rules with concrete values achieve ~100% compliance. Judgment-based rules with abstract goals achieve ~0% effective compliance even when technically satisfied.

### The Analytical Framework

The corpus examines this transformation through multiple lenses:
- **Failure analysis**: 42 catalogued failures, 14 BLOCKING (report 02)
- **Foundation tracing**: 39 foundations, 89% preserved/operationalized (report 01)
- **Philosophy shifts**: 5 CSS shifts, all facets of "specification-as-quality to perception-as-quality" (report 05)
- **Perception model**: Complete absence of perception science in the master prompt (report 08)
- **Verbiage analysis**: Judgment:Action ratio inverted 5.3x between prompts (report 21)
- **Structural architecture**: Master cross-references 10+ locations per task; Remediation embeds values inline (report 22)
- **Reproducibility**: 60% of changes fully traceable through the complete chain (report 27)
- **Cross-agent consistency**: 87.6% agreement rate, zero disagreements on major findings (report 28)

### What the Corpus Does NOT Contain

- The actual HTML output files (read separately if needed)
- The builder agent's real-time decision log (only the changelog survives)
- Any analysis of the DESIGN SYSTEM itself — only the PROMPTS that drove its construction
- Testing of whether the remediation spec would produce better output on a DIFFERENT content set (the N=1 limitation every adversarial reviewer flags)

### Key Vocabulary

- **PA-05**: Perceptual Audit question 05 — "Does this feel DESIGNED rather than ASSEMBLED?"
- **Soul**: The design system's identity constraints (warm cream palette, no pure black, specific fonts)
- **Mechanisms**: Compositional techniques (parallax, reveal-on-scroll, z-layering, etc.)
- **Channels**: Dimensions of visual coherence (chromatic, typographic, spatial, structural, material, behavioral, relational)
- **CCS**: Compositional Coherence Score — a formula measuring cross-channel integration

---

## LAYER 1: ESSENTIAL CONTEXT

**Purpose:** Establish the factual ground truth before any analysis.
**Token budget:** ~15K for journey context + ~50K if reading external references (recommended: read first 100 lines of each external ref only, ~5K total)
**Read time:** 10-15 minutes
**Gate:** Do NOT proceed to Layer 2 until you can answer: "What are the two prompts, what did each produce, and why was the second one created?"

### File 1.1: `00-CONVERSATION-JOURNEY-CONTEXT.md`

| Property | Value |
|----------|-------|
| **Lines** | ~85 |
| **Token cost** | ~2K |
| **Layer rationale** | Establishes chronological causality — Phase A through E. Without this, you cannot understand WHY the remediation exists. |
| **Prerequisites** | None — this is the universal entry point |
| **What it unlocks** | Every other file. All 24 analysis reports assume you know this timeline. |
| **Reading guide** | Read completely. It is short. Note the 5 phases (A: master prompt created, B: experiment executed, C: PA audit found deficiencies, D: retrospective identified root causes, E: remediation spec created). The key causal arrow is C→D→E: audit findings drove retrospective findings drove remediation design. |
| **Validation targets** | Can you name the 5 phases? Can you state what PA-05 scored? Can you identify what triggered the remediation effort? |

### File 1.2: `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (EXTERNAL)

| Property | Value |
|----------|-------|
| **Lines** | ~963 |
| **Token cost** | ~25K (full) / ~3K (first 100 lines) |
| **Layer rationale** | This IS the master prompt. Every analysis report references it by line number. |
| **Prerequisites** | 00 (journey context) |
| **What it unlocks** | Reports 01, 02, 05, 08, 17, 18, 21, 22, 23, 29 — all of which cite master prompt line numbers |
| **Reading guide** | For context-constrained reading: read first 100 lines to understand the conviction-execution-coordination sandwich structure. Note Section A (conviction/soul), Section B (execution rules), Section C (coordination/agent roles). For deep reading: read fully, noting the ~97 rules organized by domain. Pay special attention to rules about spacing (S-series), typography (T-series), and mechanisms (MG-series) — these are where failures concentrated. |
| **Validation targets** | Can you describe the 3-section sandwich? Can you identify 3 S-rules and 3 T-rules? Do you see any rule that specifies exact CSS values (you should find very few)? |

### File 1.3: `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (EXTERNAL)

| Property | Value |
|----------|-------|
| **Lines** | ~1,025 |
| **Token cost** | ~27K (full) / ~3K (first 100 lines) |
| **Layer rationale** | This IS the remediation spec. The other half of the comparison every report makes. |
| **Prerequisites** | 00 (journey context), 1.2 (master prompt) |
| **What it unlocks** | Reports 04, 05, 06, 07, 09, 10, 22, 23, 24, 29 — all of which cite remediation line numbers |
| **Reading guide** | For context-constrained reading: read first 100 lines to understand the 9-phase sequential structure. Note the contrast with the master prompt: this specifies exact CSS values, exact pixel measurements, exact color codes. For deep reading: read Phase 0 (deallocation) and Phase 3 (typography cascade) carefully — these are the remediation's most important innovations. Look for the "cascade value tables" — 12-row matrices of exact CSS values per section. |
| **Validation targets** | Can you name at least 5 of the 9 phases? Can you find a cascade value table? Can you spot the contrast: master prompt says "vary letter-spacing" while remediation says "letter-spacing: 0.02em / 0.04em / 0.06em"? |

### File 1.4: `ephemeral/flagship-retrospective/09-SYNTHESIS.md` (EXTERNAL)

| Property | Value |
|----------|-------|
| **Lines** | ~400 |
| **Token cost** | ~10K |
| **Layer rationale** | Contains the 15 root causes (RC-1 through RC-15) that drove the remediation. The analysis corpus is essentially a deep investigation of these root causes. |
| **Prerequisites** | 00, 1.2, 1.3 |
| **What it unlocks** | Understanding WHY each analysis report focuses on what it does. RC-4 (sub-perceptual variation) is cited in reports 02, 05, 08, 21, 23, 27, 29. |
| **Reading guide** | Focus on RC-4 (sub-perceptual variation), RC-1 (specification ambiguity), RC-7 (coherence model gaps), and RC-11 (process topology). These four account for the majority of analytical attention in the corpus. Skim the others. |
| **Validation targets** | Can you explain RC-4 in one sentence? Can you connect at least 3 root causes to the remediation's design choices? |

### Files 1.5-1.6: `ephemeral/flagship-remediation/builder-changelog.md` + `FINAL-VERDICT.md` (EXTERNAL)

| Property | Value |
|----------|-------|
| **Lines** | ~236 + ~200 |
| **Token cost** | ~6K + ~5K |
| **Layer rationale** | The builder changelog shows what actually HAPPENED during execution. The verdict shows how the output was JUDGED. Together they close the loop: prompt → execution → evaluation. |
| **Prerequisites** | 00, 1.3 (remediation spec) |
| **What it unlocks** | Reports 23 (propagation), 27 (reproducibility), 29 (line-by-line crossref) all trace through builder actions. |
| **Reading guide** | Builder changelog: note the 6 deviations from spec (12% deviation rate) — ALL were warm-tone corrections where the spec contradicted soul constraints. This is evidence for report 27's finding that specs have internal contradictions. Final verdict: note PA-05 scored 2.5/4 with the remediation. The master prompt achieved ~1.5-2/4. Improvement is real but not transformative. |
| **Validation targets** | Can you name 2 of the builder's 6 deviations? Can you state the final PA-05 score? |

### Layer 1 Summary

After reading Layer 1, you should be able to:
1. Narrate the A→E timeline from memory
2. Contrast the master prompt's structure (conviction sandwich, domain-organized rules) with the remediation's structure (9 sequential phases, embedded values)
3. Explain RC-4 (sub-perceptual variation) and why it matters
4. State that the remediation achieved PA-05 2.5/4 (up from ~1.5-2/4)
5. Know that the builder deviated from spec 12% of the time, always for soul-compliance reasons

**If you cannot do all 5, re-read before proceeding.**

---

## LAYER 2: CORE ANALYSIS

**Purpose:** Build the analytical framework — the major findings that all other reports elaborate on.
**Token budget:** ~60K
**Read time:** 30-45 minutes
**Gate:** Do NOT proceed to Layer 3 until you can explain the 5 CSS philosophy shifts and the perception model gap.
**Read order within this layer:** Sequential as numbered below. Each builds on the previous.

### File 2.1: `02-master-prompt-failures.md`

| Property | Value |
|----------|-------|
| **Lines** | ~403 |
| **Token cost** | ~10K |
| **Layer rationale** | The problem statement. 42 failures catalogued with severity ratings. Everything else in the corpus is either explaining these failures or proposing solutions. This is the STRONGEST analytical report per bias-challenger assessment. |
| **Prerequisites** | Layer 1 complete (especially master prompt + retrospective synthesis) |
| **What it unlocks** | Reports 05 (CSS philosophy), 08 (perception model), 21 (verbiage), 23 (propagation) — all reference specific failures catalogued here |
| **Reading guide** | Focus on the 14 BLOCKING failures first. Note which CSS properties appear most often (spacing, typography, border treatments). Count how many failures involve sub-perceptual values — the report claims RC-4 accounts for 26% (11/42). Verify this yourself. Note the failure taxonomy: SPECIFICATION failures (rule was ambiguous) vs COMPLIANCE failures (rule was clear but not followed) vs EMERGENT failures (no single rule caused it). |
| **Validation targets** | Can you name 5 BLOCKING failures? Can you explain the difference between specification and compliance failures? Do you agree with the 26% RC-4 attribution? |

### File 2.2: `01-master-prompt-foundations.md`

| Property | Value |
|----------|-------|
| **Lines** | ~696 |
| **Token cost** | ~18K |
| **Layer rationale** | The counterbalance to 02. Shows what the master prompt got RIGHT (39 foundations, 89% preserved). Prevents premature dismissal of the master prompt. Read AFTER failures to maintain balanced perspective. |
| **Prerequisites** | Layer 1 + report 02 |
| **What it unlocks** | Report 04 (remediation building) and report 11 (bidirectional mapping) |
| **Reading guide** | This is the longest core report. Skim the individual foundation entries but read the summary statistics carefully: 89% preserved/operationalized is HIGH. The master prompt's conviction layer (Section A) was almost entirely preserved — the remediation rebuilt the execution layer (Section B) while keeping the soul. Note the bias warning from report 25: this report has the strongest preservation-framing bias of all reports. |
| **Validation targets** | Can you name 3 foundations that were preserved unchanged? Can you name 3 that were operationalized (kept in spirit, changed in form)? Can you state the overall preservation rate? |
| **Bias warning** | This report systematically frames ambiguous cases as "preserved" rather than "replaced." Cross-reference with report 29 (line-by-line crossref) which found a 71% DROP rate for master prompt rules — a starkly different framing of the same data. |

### File 2.3: `05-css-philosophy-shift.md`

| Property | Value |
|----------|-------|
| **Lines** | ~452 |
| **Token cost** | ~12K |
| **Layer rationale** | The theoretical framework. 5 philosophy shifts that organize all specific CSS changes. The cross-cutting synthesis ("all 5 shifts are facets of specification-as-quality → perception-as-quality") is THE single most important conceptual insight in the corpus. |
| **Prerequisites** | Layer 1 + reports 02, 01 |
| **What it unlocks** | Reports 08 (perception model), 10 (coherence model), 17 (decision architecture), 24 (fundamental differences) |
| **Reading guide** | Read the 5 shifts carefully: (1) sub-perceptual → perceptible, (2) rules → perception, (3) addition → deallocation, (4) constraint → recipe, (5) ambient → deliberate richness. Then read the cross-cutting synthesis. Each shift should connect to specific failures from report 02. Test: can you give an example of each shift from the master prompt vs remediation? |
| **Validation targets** | Can you state all 5 shifts? Can you provide a concrete CSS example for each? Can you explain the unifying "specification-as-quality → perception-as-quality" thesis? |

### File 2.4: `08-perception-model-shift.md`

| Property | Value |
|----------|-------|
| **Lines** | ~484 |
| **Token cost** | ~12K |
| **Layer rationale** | THE dominant finding of the entire corpus. 7/8 agents rated RC-4 as the truest root cause. This report provides the perception science framework: minimum perceptible deltas per CSS property. Without this, you cannot understand why the remediation's exact values work. |
| **Prerequisites** | Layer 1 + reports 02, 05 |
| **What it unlocks** | Reports 21 (verbiage — propagation reliability), 23 (propagation — visibility analysis), 27 (reproducibility — minimum knowledge set) |
| **Reading guide** | Focus on the perception threshold table: background >= 10 RGB units, letter-spacing >= 0.025em, font-size >= 2px, border >= 1px, margin >= 8px. Then read the S-09 stacking analysis: individual CSS properties pass the 96px cap but SUM to 210-276px gaps at section boundaries. This is the most important specific technical finding. Also note: the 963-line master prompt contains ZERO mentions of perception science, thresholds, or minimum visible deltas. |
| **Validation targets** | Can you state the perception threshold for 3 CSS properties? Can you explain the S-09 stacking loophole? Can you confirm the master prompt's complete absence of perception science? |

### File 2.5: `04-remediation-building.md`

| Property | Value |
|----------|-------|
| **Lines** | ~457 |
| **Token cost** | ~12K |
| **Layer rationale** | Shows the constructive relationship — the remediation didn't replace the master prompt wholesale, it BUILT on 12 specific foundations. Also identifies 3 genuine innovations (Phase 0 deallocation, warm-palette enforcement, !important framework). |
| **Prerequisites** | Layer 1 + reports 02, 01, 05 |
| **What it unlocks** | Reports 10 (coherence model), 11 (bidirectional mapping), 29 (line-by-line crossref) |
| **Reading guide** | The 12 "building-on" examples show the master prompt providing seeds that the remediation operationalized. The 3 innovations are more interesting — these are things the remediation invented with NO master prompt precedent. Phase 0 (deallocation) is especially important: the master prompt never considered removing default styles before adding new ones. This is philosophy shift #3 (addition → deallocation) made concrete. |
| **Validation targets** | Can you name 2 of the 3 genuine innovations? Can you explain why Phase 0 deallocation had no master prompt precedent? |

### File 2.6: `10-coherence-model-shift.md`

| Property | Value |
|----------|-------|
| **Lines** | ~440 |
| **Token cost** | ~11K |
| **Layer rationale** | Explains the CCS → cascade value table transformation. The master prompt's coherence model (7 channels, scored abstractly) was replaced by the remediation's coherence model (cascade tables with exact values). This is the structural backbone of the remediation. |
| **Prerequisites** | Layer 1 + reports 02, 05, 08 |
| **What it unlocks** | Reports 11 (bidirectional mapping), 17 (decision architecture), 22 (structural architecture) |
| **Reading guide** | Focus on what happened to each of the 7 coherence channels. Three were REPLACED (behavioral, relational, material → merged into structural/spatial). The cascade value table format is the remediation's single most important operational invention. Also note: the CCS formula in the master prompt was never actually COMPUTED during execution — it was a dead metric. |
| **Validation targets** | Can you name which 3 channels were replaced? Can you describe the cascade value table format? Can you explain why CCS was a dead metric? |

### Layer 2 Summary

After reading Layer 2, you should be able to:
1. Enumerate the 42 failures and explain why RC-4 dominates
2. State the 89% foundation preservation rate AND the 71% rule drop rate, and explain why both are true (different framing of overlapping data)
3. Explain all 5 CSS philosophy shifts with concrete examples
4. State perception thresholds for at least 3 CSS properties
5. Explain the S-09 stacking loophole
6. Describe the 3 remediation innovations with no master prompt precedent
7. Explain how CCS was replaced by cascade value tables

**This is sufficient understanding for most purposes.** Layers 3 and 4 add depth and rigor but do not change the core findings.

---

## LAYER 3: DIMENSIONAL DEPTH

**Purpose:** Specialized analyses that examine the transformation through specific lenses. Each adds a dimension of understanding. Can be read selectively based on interest.
**Token budget:** ~80K (all) / ~20-30K (selective)
**Read time:** 45-60 minutes (all) / 15-25 minutes (selective)
**No strict internal ordering.** Files in this layer are largely independent of each other. Read based on your analytical need.

### Group 3A: Transformation Mechanics (HOW the change happened)

#### File 3A.1: `06-html-restructuring-shift.md`

| Property | Value |
|----------|-------|
| **Lines** | ~467 |
| **Token cost** | ~12K |
| **Layer rationale** | Extends the CSS-only analysis to include HTML structural changes. Key finding: CSS-only modifications cap at PA-05 2-3/4; CSS+HTML restructuring reaches 3-4/4. |
| **Prerequisites** | Layer 2 (especially reports 02, 05) |
| **What it unlocks** | Deeper understanding of why the remediation added HTML phases (Phase 1, Phase 2) |
| **Reading guide** | Focus on the ceiling analysis: what can CSS alone achieve vs what requires HTML changes? The report identifies layout shape as an implicit 8th coherence channel. Note: this report has a medium bias risk — it may overstate HTML's contribution because HTML changes are more visible/dramatic than CSS changes. |
| **Selective read?** | YES if you care about HTML/CSS interaction. SKIP if you only care about the prompting/specification dimension. |

#### File 3A.2: `07-process-topology-shift.md`

| Property | Value |
|----------|-------|
| **Lines** | ~492 |
| **Token cost** | ~12K |
| **Layer rationale** | Maps 23 topology shifts in the agent team structure. The master prompt used a 12-agent pipeline; the remediation used 11 read-only analysts + 1 builder. |
| **Prerequisites** | Layer 2 |
| **What it unlocks** | Understanding of why the remediation separated analysis from execution |
| **Reading guide** | The key insight is strict separation: many agents ANALYZE (read-only) → one agent SYNTHESIZES → one agent BUILDS. This prevents the "too many cooks" problem where multiple agents modify the same file. Note: this report's findings about process topology are partially contradicted by report 13 (fresh-eyes) which argues the topology was incidental, not causal. |
| **Selective read?** | YES if you care about multi-agent coordination. SKIP if you only care about the prompt content. |

#### File 3A.3: `09-content-agnosticism.md`

| Property | Value |
|----------|-------|
| **Lines** | ~419 |
| **Token cost** | ~10K |
| **Layer rationale** | Analyzes what percentage of each prompt is reusable across different content. Proposes a 3-layer reuse model: Universal Base (~165 CSS lines), Zone Template (~100), Content-Specific (~45). |
| **Prerequisites** | Layer 2 (especially reports 05, 10) |
| **What it unlocks** | Understanding of prompt portability. Important if you plan to use these prompts for different content. |
| **Reading guide** | The 46/15/40 split (agnostic/semi-agnostic/content-specific at execution level) is the key number. At principle level, 100% is agnostic — the philosophical insights transfer fully, but the specific CSS values don't. Note: report 27 (reproducibility) found 71% of output was content-dependent, which CONFLICTS with this report's 60% agnostic claim. The disagreement is about what counts as "content-dependent." |
| **Selective read?** | YES if you plan to apply learnings to different content. SKIP for understanding this specific transformation. |

### Group 3B: Bidirectional & Architectural Analysis (STRUCTURAL understanding)

#### File 3B.1: `11-bidirectional-mapping.md`

| Property | Value |
|----------|-------|
| **Lines** | ~577 |
| **Token cost** | ~15K |
| **Layer rationale** | The most exhaustive mapping in the corpus: 11 philosophies traced in both directions, verifying no orphaned philosophies and no orphaned changes. Also documents 6 philosophy-philosophy tensions. |
| **Prerequisites** | Layer 2 (especially reports 01, 02, 04, 05) |
| **What it unlocks** | Report 29 (line-by-line crossref) which does the same mapping at the LINE level rather than PHILOSOPHY level |
| **Reading guide** | The 6 tensions are the most valuable unique content: places where the remediation's own philosophies conflict with each other. Example: "maximize perceptible variation" conflicts with "maintain coherent system." These tensions are not resolved in the corpus — they represent genuine design trade-offs. |
| **Selective read?** | YES for completeness and rigor. SKIP if you trust the Layer 2 reports' philosophy descriptions. |

#### File 3B.2: `22-structural-architecture.md`

| Property | Value |
|----------|-------|
| **Lines** | ~416 |
| **Token cost** | ~10K |
| **Layer rationale** | Compares the DOCUMENT ARCHITECTURE (not content) of the two prompts. Master: conviction-first, domain-organized, cross-referencing (10+ locations per task). Remediation: phase-sequential, embedded values, zero cross-referencing. |
| **Prerequisites** | Layer 2 (especially reports 05, 10) |
| **What it unlocks** | Understanding of WHY the remediation format is more effective for LLM agents (linear reading vs random access) |
| **Reading guide** | The 4-layer ideal architecture proposal (Recipe/Rules/Conviction/Reference) is forward-looking — it suggests neither prompt is optimal and proposes a hybrid. This is speculative but valuable. The cross-referencing analysis is empirically grounded: the master prompt requires agents to hold 10+ scattered locations in context simultaneously. |
| **Selective read?** | YES if you care about prompt architecture/formatting. HIGHLY RECOMMENDED — this is one of the most actionable reports. |

### Group 3C: Linguistic & Propagation Analysis (HOW instructions become actions)

#### File 3C.1: `21-verbiage-analysis.md`

| Property | Value |
|----------|-------|
| **Lines** | ~499 |
| **Token cost** | ~13K |
| **Layer rationale** | The most operationally useful report in the entire corpus. Contains the propagation reliability ranking: 10 instruction pattern types ranked by predicted agent compliance (CONCRETE delete ~98% down to COUNTERFACTUAL thought experiment ~5%). Also contains the verb taxonomy and specificity analysis. |
| **Prerequisites** | Layer 2 (especially reports 02, 05, 08) |
| **What it unlocks** | Actionable heuristics for writing any future prompt. The propagation reliability ranking generalizes beyond this specific project. |
| **Reading guide** | Read the propagation reliability ranking FIRST — it is the single most actionable artifact. Then read the verb taxonomy (master 58.4% judgment+constraint vs remediation 63.4% action) and specificity analysis (master 57.4% semi-concrete vs remediation 80.9% concrete). The Judgment:Action ratio inversion (2.23:1 → 0.42:1, a 5.3x reversal) is the corpus's most precise quantitative finding. |
| **Validation targets** | Can you rank at least 5 instruction types by predicted compliance? Can you state the Judgment:Action ratio for each prompt? |
| **Selective read?** | STRONGLY RECOMMENDED regardless of interest area. This is the most generalizable report. |
| **Bias note** | Rated most rigorous of ALL reports by BOTH bias challengers (core and dimensional). Lowest bias risk in the corpus. |

#### File 3C.2: `23-propagation-analysis.md`

| Property | Value |
|----------|-------|
| **Lines** | ~404 |
| **Token cost** | ~10K |
| **Layer rationale** | Traces 30 rules (15 per prompt) through the full chain: instruction → builder action → HTML output → visible effect. Master compliance 73%, full conversion 47%; Remediation compliance 100%, full conversion 54%. |
| **Prerequisites** | Layer 2 + report 21 (verbiage) recommended |
| **What it unlocks** | Understanding of why even 100% compliance doesn't mean 100% visible effect. The "visibility gap" (compliance-to-visibility delta) is a distinct phenomenon from non-compliance. |
| **Reading guide** | The per-channel visibility analysis is the most valuable section: Ch4 Structural = highest visibility, Ch1 Chromatic = lowest. This explains why spacing/layout changes are more visible than color changes. Also note: even the remediation only achieved 54% full conversion — nearly half of its rules produced no VISIBLE effect despite being technically implemented. |
| **Selective read?** | YES if you care about the instruction→output chain. Pairs well with report 21. |

#### File 3C.3: `18-prompt-craftsmanship-evolution.md`

| Property | Value |
|----------|-------|
| **Lines** | ~533 |
| **Token cost** | ~14K |
| **Layer rationale** | Identifies 3 prompt archetypes (Regulatory, Recipe, Orchestration) and analyzes the Constraint:Action ratio shift (3.0:1 → 0.32:1). Most actionable dimensional report per bias-challenger assessment (2.5/3). |
| **Prerequisites** | Layer 2 (especially reports 05, 08) |
| **What it unlocks** | Generalizable prompt design principles. The 3 archetypes framework can be applied to any prompt engineering context. |
| **Reading guide** | The 3 archetypes (Regulatory = rules+penalties, Recipe = steps+values, Orchestration = roles+protocols) provide a useful taxonomy. Note that the master prompt is ~70% Regulatory + 30% Orchestration, while the remediation is ~80% Recipe + 20% Regulatory. The shift is almost entirely toward Recipe. |
| **Selective read?** | YES if you care about prompt engineering broadly. One of the more generalizable reports. |

### Group 3D: Higher-Order Analysis (META understanding)

#### File 3D.1: `17-decision-architecture.md`

| Property | Value |
|----------|-------|
| **Lines** | ~405 |
| **Token cost** | ~10K |
| **Layer rationale** | Maps 7 major architectural decisions, all moving abstract→concrete. Provides the decision-level view (why these choices were made) rather than the outcome-level view (what the choices produced). |
| **Prerequisites** | Layer 2 complete |
| **What it unlocks** | Report 24 (fundamental differences) which builds on these decisions to derive paradigmatic differences |
| **Reading guide** | The 7 decisions form a coherent narrative: each one is a step from abstract specification toward concrete recipe. Note the bias warning from report 26: ALL counterfactuals in this report confirm the chosen path — no decision is found to have been wrong. This is suspicious (SIGNIFICANT amalgamation bias). |
| **Selective read?** | YES for the decision-rationale view. SKIP if you're satisfied with the outcome-level analysis from Layer 2. |

#### File 3D.2: `24-fundamental-differences.md`

| Property | Value |
|----------|-------|
| **Lines** | ~400 |
| **Token cost** | ~10K |
| **Layer rationale** | The most abstract report: analyzes the specification-vs-procedure paradigm at the philosophical level. 7 propositions synthesized. |
| **Prerequisites** | Layer 2 + report 17 recommended |
| **What it unlocks** | Theoretical framework for understanding prompt design paradigms |
| **Reading guide** | The "telescope vs microscope" metaphor captures the core difference: master prompt gives a wide view (what to build), remediation gives a close view (how to build it). WARNING: report 26 rates this the MOST OVERCONFIDENT report in the corpus. Its claim that "recipes always outperform specifications" contradicts its own cited data (Middle-tier experiment used a recipe format but the master prompt's specification format achieved CD-006 at 39/40). Read critically. |
| **Selective read?** | OPTIONAL. Intellectually interesting but the least empirically grounded report. |

#### File 3D.3: `19-conversation-metacognition.md`

| Property | Value |
|----------|-------|
| **Lines** | ~297 |
| **Token cost** | ~7K |
| **Layer rationale** | Identifies the irreducible 5-phase discovery chain: Diagnose → Calibrate → Specify → Execute → Measure. Meta-analysis of the PROCESS that produced these prompts. |
| **Prerequisites** | Layer 2 complete |
| **What it unlocks** | Understanding of why the multi-phase process was necessary (each phase requires output from the previous) |
| **Reading guide** | Short and conceptual. The key claim is that the 5 phases are IRREDUCIBLE — you cannot skip any phase. This is testable but untested in the corpus. The insight about "continuation bias preventing self-revision" (why a single Claude instance cannot do all 5 phases) connects to the Two-Instance pattern documented elsewhere. |
| **Selective read?** | OPTIONAL. Process-level insight, not outcome-level. |

### Layer 3 Summary

**If reading selectively, prioritize:**
1. `21-verbiage-analysis.md` — Most operationally useful (propagation reliability ranking)
2. `22-structural-architecture.md` — Most architecturally useful (document structure comparison)
3. `18-prompt-craftsmanship-evolution.md` — Most generalizable (3 prompt archetypes)

**If reading completely, suggested order:**
21 → 22 → 23 → 18 → 06 → 07 → 09 → 11 → 17 → 24 → 19

---

## LAYER 4: VALIDATION & CHALLENGE

**Purpose:** Adversarial review, bias detection, reproducibility testing, and exhaustive cross-referencing. These files do not add NEW findings — they validate, challenge, and quantify the confidence in Layers 2-3.
**Token budget:** ~50K
**Read time:** 30-45 minutes
**CRITICAL: Do NOT read these first.** They are meaningless without the findings they're challenging.

### File 4.1: `13-adversarial-fresh-eyes.md`

| Property | Value |
|----------|-------|
| **Lines** | ~246 |
| **Token cost** | ~6K |
| **Layer rationale** | Zero-context adversarial review. This agent read ONLY the two prompts, not any analysis. Provides the freshest possible perspective. |
| **Prerequisites** | Layer 2 (so you can compare the fresh-eyes findings to the deep analysis findings) |
| **What it unlocks** | 7 gaps missing from BOTH prompts (neither master nor remediation addresses them). These are genuine blind spots in the entire analytical corpus. |
| **Reading guide** | The "master prompt built skeleton, remediation gave it skin" metaphor is the report's key contribution. The 7 gaps are valuable precisely because NO other report identifies them — they represent blind spots in the deep-analysis approach. |
| **Validation targets** | Can you name 3 of the 7 gaps? Do any of them invalidate findings from Layers 2-3? |

### File 4.2: `20-adversarial-journey-review.md`

| Property | Value |
|----------|-------|
| **Lines** | ~310 |
| **Token cost** | ~8K |
| **Layer rationale** | Challenges 6 specific biases in the journey narrative: survivorship, effort confound, recipe-vs-checklist overstated, context advantage, 963-line problem, and provides a steel-man for the master prompt. |
| **Prerequisites** | Layers 2-3 (especially reports 05, 17, 24) |
| **What it unlocks** | The refined thesis: "concrete perceptual specifications outperform abstract structural specifications" (refines the simpler recipe-vs-checklist claim) |
| **Reading guide** | The 4 proposed unrun experiments are the most valuable unique contribution — they describe exactly what evidence WOULD settle the remaining ambiguities. None have been run, so the ambiguities persist. The steel-man for the master prompt is intellectually honest and worth engaging with: the master prompt may have been optimized for a DIFFERENT objective (creative freedom) than the one used to evaluate it (perceptual quality). |
| **Selective read?** | STRONGLY RECOMMENDED. This is the most important single challenge to the core narrative. |

### File 4.3: `25-bias-challenger-core.md`

| Property | Value |
|----------|-------|
| **Lines** | ~421 |
| **Token cost** | ~11K |
| **Layer rationale** | Systematic bias challenge against the 10 core analysis reports (01-13). Evaluates each on 5 axes: Summarization, Assumptions, Depth, Confirmation Bias, Gaps. |
| **Prerequisites** | Reports being challenged (Layer 2 + those Layer 3 reports you've read) |
| **What it unlocks** | Calibrated confidence in each report. Strongest: 02 (failures). Weakest: 01 (foundations). |
| **Reading guide** | Read the cross-report findings first (5 meta-findings that apply across all reports): (1) recipe thesis under-tested, (2) sub-perceptual=zero-value unexamined, (3) CD-006 unexplored benchmark, (4) N=1 systemic limitation, (5) analysts finding what they expect. Then read individual report assessments for reports you found most important. |
| **Selective read?** | YES if you read the core reports. Read at least the cross-report findings. |

### File 4.4: `26-bias-challenger-dimensional.md`

| Property | Value |
|----------|-------|
| **Lines** | ~546 |
| **Token cost** | ~14K |
| **Layer rationale** | Systematic bias challenge against the 7 dimensional analysis reports (17-24). Evaluates on 5 tests: Causal Claims, Counterfactual, Granularity, Hindsight, Amalgamation. |
| **Prerequisites** | Reports being challenged (Layer 3 Group 3B-3D) |
| **What it unlocks** | THE most important methodological correction: three INDEPENDENT variables (format, specificity, perception thresholds) are being collapsed into one (recipe-vs-checklist). This is a fundamental confound in the corpus's causal claims. |
| **Reading guide** | The 3-variable confound is the key finding. Read that section carefully. Then read ratings: Most rigorous = 21 (verbiage). Most overconfident = 24 (fundamental differences). Most actionable = 18 (prompt craftsmanship). These ratings help you calibrate how much to trust each Layer 3 report. |
| **Selective read?** | YES if you read the dimensional reports. The 3-variable confound applies to the ENTIRE corpus. |

### File 4.5: `27-reproducibility-test.md` + `28-reproducibility-consistency.md`

| Property | Value |
|----------|-------|
| **Lines** | ~516 + ~512 |
| **Token cost** | ~13K + ~13K |
| **Layer rationale** | Report 27 tests whether the HTML could be reproduced from understanding alone (60% fully traceable). Report 28 measures cross-agent agreement (87.6% consistency, zero disagreements on major findings). Together they provide the corpus's only empirical quality metrics. |
| **Prerequisites** | Layers 2-3 substantially complete |
| **What it unlocks** | Confidence calibration for the entire corpus. 87.6% consistency is high. Zero disagreements on major findings means the core narrative is robust even under adversarial scrutiny. |
| **Reading guide** | Report 27: Focus on the minimum knowledge set (7 layers A-G) and the CRITICAL GAP: Layer F (Intentionality) is entirely absent from all analysis reports. This means no report explains WHY the remediation authors made specific choices — only WHAT they chose. Report 28: Focus on the 5 divergence points where agents disagree — these mark genuine uncertainty in the corpus. |
| **Validation targets** | Can you name the 7 knowledge layers? Can you identify the 5 divergence points? |

### File 4.6: `29-line-by-line-crossref.md`

| Property | Value |
|----------|-------|
| **Lines** | ~613 |
| **Token cost** | ~16K |
| **Layer rationale** | The most exhaustive report: 230+ cross-reference entries between the remediation and master prompt. Provides the ground truth numbers: 71% of master rules dropped, 52 new remediation instructions, 10 reversed items. |
| **Prerequisites** | Layers 2-3 substantially complete. Ideally read after bias challengers (reports 25-26) so you can evaluate claims against raw data. |
| **What it unlocks** | Definitive answer to "how much was kept vs changed?" Raw data rather than interpretation. |
| **Reading guide** | Read the summary statistics first: 28 preserved/refined/extended out of 97 master rules (29%). 69 DROPPED (71%). 52 entirely NEW. 10 REVERSED. Then note which rule CATEGORIES were most affected: MG-rules (Metaphor Gates) 100% dropped. CT-rules (Content Transform) 100% dropped. U-rules (Soul) only 10% dropped. This tells you the master prompt's soul layer survived but its execution layer was almost entirely replaced. |
| **Validation targets** | Can you state the drop rate? Can you name 2 categories that were 100% dropped? Can you reconcile the 71% drop rate with report 01's 89% preservation rate? (Hint: different denominators — report 01 counts FOUNDATIONS while report 29 counts LINE-LEVEL RULES.) |

### Layer 4 Summary

After reading Layer 4, you should be able to:
1. Name 3 biases in the core narrative and explain how they affect confidence
2. State the 3-variable confound (format, specificity, perception thresholds)
3. Explain why the 89% preservation rate and 71% drop rate are BOTH true
4. State the 87.6% cross-agent consistency rate
5. Identify the Layer F (Intentionality) gap
6. Name 3 unrun experiments that would resolve remaining ambiguities

---

## ANTI-PATTERNS

### Sequences That Would Actively Confuse a New Instance

**ANTI-PATTERN 1: Reading analysis before artifacts**
Reading reports 01-29 before reading the master prompt and remediation spec is like reading movie reviews before knowing the movie's plot. Every report assumes you've seen the source artifacts.
- **Confused because:** Line number citations (e.g., "master L247-251") are meaningless without the original
- **Fix:** Always start with Layer 1 external references

**ANTI-PATTERN 2: Reading foundations (01) before failures (02)**
Report 01 frames the master prompt positively (89% preserved). Report 02 frames it critically (42 failures, 14 BLOCKING). Reading 01 first creates a preservation bias that makes 02's findings feel exaggerated.
- **Confused because:** You would frame the transformation as "minor refinement" instead of "fundamental paradigm shift"
- **Fix:** Always read 02 before 01 (failures before foundations)

**ANTI-PATTERN 3: Reading bias challengers (25-26) before the reports they challenge**
Reports 25-26 reference specific findings, paragraphs, and claims from reports 01-24. Without those reports in context, the challenges are abstract and ungrounded.
- **Confused because:** "Report 17's counterfactuals are suspiciously confirming" means nothing if you haven't read report 17
- **Fix:** Always read the target reports before their bias challengers

**ANTI-PATTERN 4: Reading 24 (fundamental differences) early**
This is the most abstract and most overconfident report. Read early, it would establish a strong "recipe always beats specification" prior that would color reading of all other reports. Report 26 explicitly rates it the most overconfident in the corpus.
- **Confused because:** You would adopt the recipe-vs-specification frame uncritically, missing the 3-variable confound
- **Fix:** Read 24 late (Layer 3D) and ALWAYS read 26 (bias challenger) soon after

**ANTI-PATTERN 5: Reading only the even-numbered or only the odd-numbered reports**
The corpus was designed with intentional alternation: positive (01) / negative (02), building (04) / shifting (05), etc. Reading only one valence creates systematic bias.
- **Confused because:** All-positive selection = "minor refinement" frame; all-negative = "master prompt was garbage" frame
- **Fix:** Follow the layer structure which interleaves positive and negative reports

**ANTI-PATTERN 6: Starting with 29 (line-by-line crossref)**
Report 29 is the most exhaustive but the least interpretive. 230+ entries with minimal analysis. Without the conceptual framework from Layers 2-3, it reads as an incomprehensible data dump.
- **Confused because:** You would see "71% dropped" without understanding WHY those rules were dropped
- **Fix:** Read 29 last in Layer 4, after building the conceptual framework

**ANTI-PATTERN 7: Skipping 00 (journey context) because it looks trivial**
At 85 lines, it looks like a throwaway intro. But it establishes the CAUSAL chain (A→E) that every other report assumes. Without it, the remediation appears to have been created in a vacuum.
- **Confused because:** You would not understand the audit-driven origin of the remediation
- **Fix:** Always start with 00. It takes 60 seconds to read.

---

## BUDGET STRATEGIES

### 50K Token Budget (~25% of corpus)

**Goal:** Understand the core narrative and dominant findings.

| Priority | File | Tokens | Cumulative |
|----------|------|--------|------------|
| 1 | 00 (journey context) | ~2K | 2K |
| 2 | External refs: first 100 lines each × 5 | ~5K | 7K |
| 3 | 02 (failures) | ~10K | 17K |
| 4 | 05 (CSS philosophy) | ~12K | 29K |
| 5 | 08 (perception model) | ~12K | 41K |
| 6 | 21 (verbiage analysis) | ~13K | 54K |

**Outcome:** You will understand: the timeline, the failures, the 5 philosophy shifts, the perception model gap, and the propagation reliability ranking. This covers ~80% of the corpus's actionable insights in ~25% of the tokens.

**What you miss:** Foundation tracing (01), remediation building (04), coherence model (10), all dimensional analysis (17-24), all validation (25-29). You miss the nuance but not the core.

### 100K Token Budget (~50% of corpus)

**Goal:** Full core analysis + key dimensional depth + key validation.

| Add to 50K budget | File | Tokens | Cumulative |
|-------------------|------|--------|------------|
| 7 | 01 (foundations) | ~18K | 72K |
| 8 | 04 (remediation building) | ~12K | 84K |
| 9 | 22 (structural architecture) | ~10K | 94K |
| 10 | 20 (adversarial journey review) | ~8K | 102K |

**Outcome:** Full Layer 2 core (except 10-coherence) + the 3 most valuable supplementary reports (21-verbiage from 50K budget + 22-structure + 20-adversarial). You now have the positive AND negative views, the structural architecture comparison, and the most important adversarial challenge.

### 200K Token Budget (full corpus)

**Goal:** Complete understanding with validation.

Read all 4 layers in sequence as designed above. Budget: ~180K for all 25 pipeline-analysis files + ~20K for external references.

**Note:** A 200K context window is tight for the full corpus. If constrained, drop Layer 3D (reports 17, 24, 19 — ~27K) which provides the least unique insight relative to token cost. This frees ~27K for comfortable margin.

---

## DEPENDENCY GRAPH

```
                    ┌──────────────────────────────────────────────────────────┐
                    │                    LAYER 1: CONTEXT                      │
                    │                                                          │
                    │  00-journey ──→ Master Prompt ──→ Remediation Spec       │
                    │       │              │                  │                 │
                    │       └──────→ Retrospective ──→ Builder+Verdict         │
                    │                      │                                   │
                    └──────────────────────┼───────────────────────────────────┘
                                           │
                    ┌──────────────────────┼───────────────────────────────────┐
                    │               LAYER 2: CORE ANALYSIS                     │
                    │                      │                                   │
                    │  02-failures ←────────┘                                  │
                    │       │                                                  │
                    │       ├──→ 01-foundations                                │
                    │       │                                                  │
                    │       ├──→ 05-css-philosophy ──→ 08-perception-model     │
                    │       │                                                  │
                    │       ├──→ 04-remediation-building                       │
                    │       │                                                  │
                    │       └──→ 10-coherence-model                            │
                    │                                                          │
                    └──────────────────────────────────────────────────────────┘
                                           │
         ┌─────────────────────────────────┼───────────────────────────────────┐
         │                    LAYER 3: DIMENSIONAL DEPTH                        │
         │                                 │                                    │
         │  ┌─ 3A: Mechanics ─────────────────────────────────────────────┐    │
         │  │  06-html  07-process  09-content-agnosticism                │    │
         │  └─────────────────────────────────────────────────────────────┘    │
         │                                                                     │
         │  ┌─ 3B: Architecture ──────────────────────────────────────────┐    │
         │  │  11-bidirectional  22-structural-architecture               │    │
         │  └─────────────────────────────────────────────────────────────┘    │
         │                                                                     │
         │  ┌─ 3C: Linguistics ───────────────────────────────────────────┐    │
         │  │  21-verbiage ★  23-propagation  18-prompt-craftsmanship     │    │
         │  └─────────────────────────────────────────────────────────────┘    │
         │                                                                     │
         │  ┌─ 3D: Meta ──────────────────────────────────────────────────┐    │
         │  │  17-decision  24-fundamental  19-metacognition              │    │
         │  └─────────────────────────────────────────────────────────────┘    │
         │                                                                     │
         │  ★ = highest priority within layer                                  │
         └─────────────────────────────────────────────────────────────────────┘
                                           │
         ┌─────────────────────────────────┼───────────────────────────────────┐
         │                  LAYER 4: VALIDATION & CHALLENGE                     │
         │                                 │                                    │
         │  13-fresh-eyes ──→ 20-adversarial-journey                           │
         │                          │                                          │
         │  25-bias-core ──→ 26-bias-dimensional                               │
         │                          │                                          │
         │  27-reproducibility ──→ 28-consistency                              │
         │                          │                                          │
         │                    29-line-by-line-crossref                          │
         │                                                                     │
         └─────────────────────────────────────────────────────────────────────┘
```

### Key Dependency Arrows (Cross-Layer)

| From | To | Why |
|------|----|-----|
| Master Prompt (L1) | Reports 01, 02, 21, 29 | These cite master prompt line numbers |
| Remediation Spec (L1) | Reports 04, 06, 10, 22, 23, 29 | These cite remediation line numbers |
| Retrospective (L1) | Report 02 | 15 root causes directly referenced in failure cataloguing |
| 02-failures (L2) | 05-css-philosophy (L2) | Philosophy shifts are responses to specific failures |
| 05-css-philosophy (L2) | 08-perception (L2) | Perception model is deepening of shift #1 |
| 08-perception (L2) | 21-verbiage (L3) | Propagation reliability extends perception analysis to language |
| 01-foundations (L2) | 25-bias-core (L4) | Bias challenger specifically targets foundation preservation claims |
| 17-24 (L3) | 26-bias-dim (L4) | Dimensional bias challenger evaluates all dimensional reports |
| All L2-L3 | 27-28 (L4) | Reproducibility tests reference findings from all analysis reports |

---

## APPENDIX A: FILE INDEX WITH METADATA

| File # | Name | Lines | Tokens | Layer | Group | Priority | Bias Risk |
|--------|------|-------|--------|-------|-------|----------|-----------|
| 00 | Journey Context | 85 | 2K | L1 | — | MANDATORY | None |
| 01 | Master Foundations | 696 | 18K | L2 | Core | HIGH | HIGH (preservation framing) |
| 02 | Master Failures | 403 | 10K | L2 | Core | CRITICAL | LOW (strongest report) |
| 04 | Remediation Building | 457 | 12K | L2 | Core | HIGH | MEDIUM |
| 05 | CSS Philosophy Shift | 452 | 12K | L2 | Core | CRITICAL | LOW |
| 06 | HTML Restructuring | 467 | 12K | L3 | 3A Mechanics | MEDIUM | MEDIUM |
| 07 | Process Topology | 492 | 12K | L3 | 3A Mechanics | MEDIUM | MEDIUM |
| 08 | Perception Model | 484 | 12K | L2 | Core | CRITICAL | LOW |
| 09 | Content Agnosticism | 419 | 10K | L3 | 3A Mechanics | LOW | MEDIUM |
| 10 | Coherence Model | 440 | 11K | L2 | Core | HIGH | LOW |
| 11 | Bidirectional Mapping | 577 | 15K | L3 | 3B Architecture | MEDIUM | LOW |
| 13 | Adversarial Fresh-Eyes | 246 | 6K | L4 | Validation | HIGH | None (adversarial) |
| 17 | Decision Architecture | 405 | 10K | L3 | 3D Meta | MEDIUM | HIGH (amalgamation) |
| 18 | Prompt Craftsmanship | 533 | 14K | L3 | 3C Linguistics | HIGH | MEDIUM |
| 19 | Conversation Metacognition | 297 | 7K | L3 | 3D Meta | LOW | LOW |
| 20 | Adversarial Journey Review | 310 | 8K | L4 | Validation | CRITICAL | None (adversarial) |
| 21 | Verbiage Analysis | 499 | 13K | L3 | 3C Linguistics | CRITICAL | LOWEST |
| 22 | Structural Architecture | 416 | 10K | L3 | 3B Architecture | HIGH | LOW |
| 23 | Propagation Analysis | 404 | 10K | L3 | 3C Linguistics | MEDIUM | LOW |
| 24 | Fundamental Differences | 400 | 10K | L3 | 3D Meta | LOW | HIGHEST |
| 25 | Bias Challenger Core | 421 | 11K | L4 | Validation | HIGH | None (adversarial) |
| 26 | Bias Challenger Dimensional | 546 | 14K | L4 | Validation | HIGH | None (adversarial) |
| 27 | Reproducibility Test | 516 | 13K | L4 | Validation | HIGH | LOW |
| 28 | Reproducibility Consistency | 512 | 13K | L4 | Validation | MEDIUM | LOW |
| 29 | Line-by-Line Crossref | 613 | 16K | L4 | Validation | MEDIUM | LOW |

### External References

| File | Lines | Tokens | When to Read |
|------|-------|--------|-------------|
| FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md | 963 | 25K | Layer 1 (first 100 lines minimum) |
| 12-ENHANCED-REMEDIATION-SPEC.md | 1,025 | 27K | Layer 1 (first 100 lines minimum) |
| builder-changelog.md | 236 | 6K | Layer 1 |
| FINAL-VERDICT.md | ~200 | 5K | Layer 1 |
| 09-SYNTHESIS.md | ~400 | 10K | Layer 1 |

---

## APPENDIX B: QUICK-START DECISION TREE

```
Q: Do you need to understand the TRANSFORMATION (why remediation exists)?
├── YES → Start at Layer 1, proceed through Layer 2
│   │
│   Q: Do you need to APPLY these findings to new prompts?
│   ├── YES → Add Layer 3C (21-verbiage, 18-craftsmanship, 23-propagation)
│   │         These are the most generalizable reports.
│   │
│   Q: Do you need to EVALUATE confidence in the findings?
│   ├── YES → Add Layer 4 (especially 20-adversarial, 25/26-bias-challengers)
│   │
│   Q: Do you need COMPLETE understanding?
│   └── YES → Read all 4 layers in sequence
│
└── NO → You probably want a different corpus. This one is entirely about
         the master-prompt-to-remediation transformation.
```

---

## APPENDIX C: VALIDATION CHECKLIST

After completing each layer, verify your understanding against these claims. If any seem wrong, RE-READ the relevant reports before proceeding.

### Post-Layer 1
- [ ] The remediation was created BECAUSE the master prompt's output scored PA-05 ~1.5-2/4
- [ ] The master prompt organized rules by domain; the remediation organized by execution phase
- [ ] RC-4 (sub-perceptual variation) was identified as the truest root cause
- [ ] The builder deviated from spec 6 times, always for soul-compliance

### Post-Layer 2
- [ ] 42 failures: 14 BLOCKING, 22 SIGNIFICANT, 6 MINOR
- [ ] RC-4 accounts for 26% of failures (11/42)
- [ ] 39 foundations traced; 89% preserved/operationalized
- [ ] 5 CSS philosophy shifts, unified by "specification-as-quality → perception-as-quality"
- [ ] Perception thresholds: background ≥10 RGB, letter-spacing ≥0.025em, font-size ≥2px
- [ ] S-09 stacking: individual values pass 96px cap but sum to 210-276px
- [ ] 3 genuine remediation innovations: Phase 0 deallocation, warm-palette enforcement, !important framework
- [ ] CCS was a dead metric; replaced by cascade value tables

### Post-Layer 3
- [ ] CSS-only caps at PA-05 2-3/4; CSS+HTML reaches 3-4/4
- [ ] Layout shape = implicit 8th coherence channel
- [ ] Judgment:Action ratio inverted 5.3x (2.23:1 → 0.42:1)
- [ ] Master 57.4% semi-concrete → Remediation 80.9% concrete
- [ ] Propagation reliability: CONCRETE delete ~98% ... COUNTERFACTUAL ~5%
- [ ] 3 prompt archetypes: Regulatory, Recipe, Orchestration
- [ ] Master compliance 73%, full conversion 47%; Remediation compliance 100%, conversion 54%
- [ ] Ch4 Structural = highest visibility; Ch1 Chromatic = lowest

### Post-Layer 4
- [ ] 87.6% cross-agent consistency; zero disagreements on major findings
- [ ] 3-variable confound: format, specificity, and perception thresholds are collapsed
- [ ] 60% fully traceable through complete chain
- [ ] 71% of master rules DROPPED; 52 NEW remediation instructions; 10 REVERSED
- [ ] MG-rules 100% dropped; U-rules only 10% dropped
- [ ] Layer F (Intentionality) absent from all analysis reports
- [ ] 4 unrun experiments proposed that would resolve remaining ambiguities

---

*Total deliverable: ~700 lines. Covers 25 pipeline-analysis files + 5 external references across 4 layers with per-file metadata, 7 anti-patterns, 3 budget strategies, dependency graph, file index, decision tree, and validation checklist.*
