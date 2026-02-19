# Pipeline Analysis Corpus

**What this is:** 41 files, 22,837 lines, 1.7MB of analysis produced by 50+ Opus 4.6 agents examining how a 963-line master execution prompt failed and how a 1,025-line remediation spec partially succeeded at producing a designed HTML page within the KortAI design system.

**When it was produced:** February 18, 2026, in a single session.

**Why it exists:** A flagship experiment produced an HTML page that scored PA-05 1.5/4 (DO NOT SHIP). A remediation spec was written and executed, raising the score to 2.5/4 (improved but below the 3/4 shipping threshold). This corpus analyzes the transformation between those two prompts to extract generalizable principles about how to write prompts that produce perceptibly rich output from LLM building agents.

**Auto-loaded instructions:** See `CLAUDE.md` in this directory for machine-readable navigation rules that Claude instances load automatically.

---

## WHY THIS CORPUS EXISTS — THE ENDGAME

This corpus is not an end in itself. It is **Pipeline v2 source material.**

The goal: create a comprehensive, reliable, reproducible pipeline for building design system pages that works the FIRST time — without the iterative failure-remediation cycle that produced these 41 files. Every question, every file, every finding exists to answer: **how do we build Pipeline v2 so it doesn't repeat these mistakes?**

**The path:**
1. **Discussion first.** Go through the 41 files in structured conversation (see `_discussion-guides/conversation-walkthrough.md` for the 10-session plan). Build shared understanding of what failed and why.
2. **Decide together.** Based on the discussion, agree on what changes to make to the design system's skills, CLAUDE.md files, building protocols, and gate structures.
3. **Codify permanently.** Distill agreed changes into permanent updates to the tension-composition skill, perceptual-auditing skill, building protocol, and root navigation.
4. **Use as pre-build reference.** Before any future page build, the building instance reads the codified pipeline (not this corpus directly) with the lessons baked in.

File 42 (OPERATIONAL-RECIPE) is already a first draft of Pipeline v2 — a 9-phase sequential recipe. The discussion determines what from that recipe (and what else from the corpus) becomes permanent.

### Tips for the Human

1. **Go topic by topic, not file by file.** Ask "why did the master prompt fail?" not "run me through file 01." The instance routes to the right files.
2. **Push for specifics when answers feel shallow.** "Show me the exact before/after CSS values."
3. **Ask "what challenges this?"** Every finding has adversarial dissent somewhere.
4. **Bridge to Pipeline v2.** After each topic: "what do we change in the pipeline to prevent this?"
5. **Use the 10-session walkthrough.** Each session focuses on a theme. You'll hit all 41 files across 10 sessions.
6. **Trust the discussion guides.** They contain per-file surprises, challenges, and probing questions.
7. **Name what you want to DO, not just understand.** "Design the perception gate for Pipeline v2" is better than "explain the perception model."

---

## ANTI-SUMMARY NOTICE

This README is an INDEX, not a summary. It tells you WHAT each file IS and WHERE to find it. It does not tell you what any file CONCLUDES.

**Why:** The corpus contains 52 unique insights, 10 contradictions, 7 meta-findings, and 8 unresolved questions. Summarizing would collapse these into a false consensus. The analysis contains its own adversarial challenges (files 13, 20, 25, 26) that qualify or contradict the core findings. A summary would flatten this structure.

**Where to find the actual analysis:**
- For findings: read the files themselves, starting with the ingestion sequence in file 33
- For a fresh-instance entry point: read file 40 (NAVIGATION-LAYER.md)
- For the operational output: read file 42 (OPERATIONAL-RECIPE.md)

---

## THE QUESTIONS THAT DERIVED THIS CORPUS

These questions — and the mindset behind them — are the reason all 41 files exist. They should be the starting point for any discussion of this corpus.

### The Situation

A 963-line master execution prompt produced `07-intentionality.html` — a page that passed every programmatic gate but scored PA-05 1.5/4 (FLAT). Zero visible borders, uniform typography (all 16px/400), backgrounds differing by 1-8 RGB points (imperceptible), 6 whitespace voids (210-276px each). Then a 1,025-line remediation spec, applied to the SAME content and SAME design system, moved the score to PA-05 2.5/4 (SHIP WITH FIXES). Same inputs, different instructions, different outcome.

### The Core Question

**Why did one fail and the other succeed — at every level of analysis? And can the understanding be extracted into a reusable, content-agnostic pipeline?**

### The Specific Questions (organized by what they tried to solve)

**Understanding what we had (preservation):**
- What did the master prompt get RIGHT? → 39 foundations traced (file 01)
- What did the remediation KEEP from the master? → 89% of soul constraints preserved (files 01, 11)

**Understanding what failed (diagnosis):**
- What did the master prompt get WRONG? → 42 failures, 14 BLOCKING (file 02)
- WHY did correct rules produce invisible results? → Sub-perceptual CSS: 23.7% of CSS was imperceptible (file 08)
- Why did programmatic gates PASS but perceptual audit FAIL? → Rules checked PRESENCE without MAGNITUDE (file 02)
- Why did the builder produce monotone typography? → 75-line visibility cap; builder only saw 13.4% of the prompt (file 06)

**Understanding what changed (the paradigm shift):**
- What did the remediation REVERSE from the master? → 27 reversals across 4 categories (file 03)
- What did it BUILD ON TOP? → 12 extensions, principle-to-recipe translation (file 04)
- How did the CSS philosophy change? → Specification-as-quality → perception-as-quality (file 05)
- How did the HTML approach change? → Builder visibility cap CAUSED the component library gap (file 06)
- How did the process change? → 2,400:1 information compression → 1:1 (file 07)
- Where did the perception model come from? → ZERO perception content in master prompt; remediation invented the entire model (file 08)
- How did coherence verification change? → Cascade value tables: exact CSS at every boundary (file 10)

**Understanding the deeper architecture:**
- Can EVERY shift be traced bidirectionally? → 11 philosophies ↔ 34 spec steps, 0 orphans (file 11)
- HOW were the discoveries made? → Non-linear: recipe-vs-checklist emerged from comparing two experiments (file 12)
- What does a fresh pair of eyes see? → "Master built the skeleton, remediation gave it skin" (file 13)
- What decisions were made and why? → 7 forks, all traceable to 3 evidence sources (file 17)
- How does the LANGUAGE differ? → 5.3x judgment/action verb inversion (file 21)
- How does the STRUCTURE differ? → Neither architecture alone works (file 22)
- How do instructions PROPAGATE to actual output? → Remediation 100% compliance vs master 73% (file 23)
- What makes them FUNDAMENTALLY different? → Telescope (master) vs microscope (remediation) — different cognitive instruments (file 24)

**Understanding generalizability:**
- Is the remediation content-agnostic? → 46% agnostic, 15% semi, 40% content-specific (file 09)
- Could we reproduce this? → 60% fully traceable, 12% relied on builder judgment (file 27)
- What's the consistency rate? → 87.6%, zero cross-agent disagreements on major findings (file 28)

**Preventing bias and self-deception:**
- Are the core analysts biased? → Average 2.3/5 bias scale (file 25)
- Are the dimensional analysts making ungrounded leaps? → 3 independent variables conflated into one (file 26)
- What did EVERYONE miss? → 14 coverage gaps, 15 unasked questions (file 14)
- Can you reconstruct from analyses alone? → 94% accuracy but key operational details lost (file 15)
- What biases exist in the journey itself? → The cheapest, most informative experiment has NOT been run (file 20)

**Solving the meta-problem (how to use this understanding):**
- How does knowledge transfer between instances? → 80% conclusions transfer, 0% experience (file 37)
- Can a new instance actually ingest this? → 15 jargon terms never defined, 18 assumed-context items (file 38)
- How do you compress without losing nuance? → 5 layers, 50 critical nuances (file 35)
- What's the reusable pipeline recipe? → 9 content-agnostic phases (file 42)

### The Operating Mindset

We were operating from 5 beliefs:

1. **The difference between failure and success isn't volume — it's paradigm.** The master prompt had MORE rules (97 binary rules) than the remediation. More rules didn't help. The remediation succeeded with a different APPROACH: recipes instead of checklists, exact values instead of thresholds, perception checks instead of structural checks.
2. **Understanding the shift requires examining EVERY dimension.** You can't just say "recipes are better" — you need to understand WHY at the CSS level, the HTML level, the process level, the language level, the perception level. Hence 41 files, not 1.
3. **Analysis has biases.** Every agent that analyzed the failure had its own frame. The bias challengers exist because we don't trust unanimous agreement from agents that share the same model and training data.
4. **N=2 is a fundamental limitation.** Everything we found is a hypothesis. The most important finding might be the one we haven't tested: add perception thresholds to the master prompt and re-run.
5. **The compression problem is recursive.** The master prompt failed because it compressed research findings 50:1. Now OUR analysis faces the same challenge — 1.7MB must eventually become actionable. The anti-summary protocol exists because we refuse to repeat the exact failure we diagnosed.

---

## PRODUCTION HISTORY

### Team Architecture

The corpus was produced in 5+ waves by 50+ Opus 4.6 agents:

| Wave | Agent Count | Role | Output |
|------|------------|------|--------|
| **Wave 1: Core Analysis** | 11 agents | Each read 2-3 source files and wrote one analysis report | Files 00-13 (context + 11 core reports) |
| **Wave 2: Dimensional Analysis** | 8 agents | Each examined one analytical dimension across all core reports | Files 14-24 (adversarial + dimensional reports) |
| **Wave 3: Meta-Analysis** | 8 agents | Bias challengers, reproducibility testers, cross-referencers | Files 25-30 (validation reports) |
| **Wave 4: Meta-Audits** | 6 agents | File inventory, cross-reference mapping, ingestion design, transfer analysis | Files 31-38 (meta-audit layer) |
| **Wave 5: Synthesis** | 3 agents | Navigation layer, pipeline understanding, operational recipe | Files 40-42 (synthesis deliverables) |

### Production Statistics

- **Total files:** 41 (39 unique analysis files + 2 duplicate versions)
- **Total lines:** 22,837
- **Total size:** 1.7MB
- **Model:** All Opus 4.6
- **Timeline:** Single session, February 18, 2026
- **Missing file numbers:** 16, 34, 36, 39 (content covered by adjacent files or never assigned)
- **Duplicate files:** File 14 has 2 versions; file 26 has 2 versions (see Known Issues)

---

## THE THREE KEY FILES

These three files were produced last and are designed to work together as the corpus's usable output layer.

### 40-NAVIGATION-LAYER.md (812 lines)

**What it IS:** The entry point for any fresh Claude instance. A recipe-structured document with 5 parts: file index, extraction protocols for the 15 most important files, a 4-pass ingestion protocol, 30 verification questions (10 per difficulty level), and a 60+ entry topic-to-file lookup table.

**How to use it:** A fresh instance reads this file FIRST, then follows its instructions to read specific analysis files in a designed order. It replaces the need to read all 41 files.

### 41-PIPELINE-UNDERSTANDING.md (1,196 lines)

**What it IS:** A comprehensive pipeline understanding document that synthesizes the analytical framework into transferable knowledge. Covers the complete analytical chain from source artifacts through multi-wave analysis to operational output.

**How to use it:** Read AFTER the navigation layer for deep conceptual transfer. Provides the "why" behind the navigation layer's "what."

### 42-OPERATIONAL-RECIPE.md (1,746 lines)

**What it IS:** A content-agnostic, 9-phase sequential recipe for building design system pages. The operational output of the entire analysis. Contains exact CSS values, HTML templates, perception threshold tables, team architecture recommendations, known risks, and quick-reference cards.

**How to use it:** Give this file to a building agent as its complete specification. The recipe embeds compliance in its values -- following the steps in order produces a page that passes soul, perception, accessibility, and coherence checks automatically.

**Relationship:** 40 tells you HOW TO READ the corpus. 41 tells you WHAT THE CORPUS MEANS. 42 tells you WHAT TO DO with that understanding.

---

## COMPLETE FILE INVENTORY

### Layer 0: Context (1 file)

| File | Lines | What It IS | Quality |
|------|-------|-----------|---------|
| `00-CONVERSATION-JOURNEY-CONTEXT.md` | 84 | Chronological timeline of the 5-phase causal chain (A-E) from master prompt creation through PA audit to remediation | 3/5 |

### Layer 1: Core Analysis (13 files)

| File | Lines | What It IS | Quality |
|------|-------|-----------|---------|
| `01-master-prompt-foundations.md` | 695 | Concordance ledger tracking 39 master prompt foundations through the remediation | 3/5 |
| `02-master-prompt-failures.md` | 403 | Failure taxonomy: 42 failures in 5 types with severity ratings and root cause attribution | 5/5 |
| `03-remediation-rewinding.md` | 691 | Reversal inventory: 27 specific reversals from master prompt to remediation, categorized A-D | -- |
| `04-remediation-building.md` | 457 | Extension inventory: 12 things the remediation built on master prompt seeds + 3 genuine innovations | 4/5 |
| `05-css-philosophy-shift.md` | 452 | Theoretical framework: 5 CSS philosophy shifts unified by a single transformation | 4/5 |
| `06-html-restructuring-shift.md` | 467 | CSS-only ceiling analysis + HTML structural change inventory with 8th channel proposal | 4/5 |
| `07-process-topology-shift.md` | 492 | Agent architecture comparison: 23 topology shifts mapped bidirectionally | 4/5 |
| `08-perception-model-shift.md` | 484 | Perception science analysis: the dominant finding (zero perception terms in master prompt) | 5/5 |
| `09-content-agnosticism.md` | 419 | Reusability classifier: 46/15/40 agnosticism split with 3-layer reuse model | 4/5 |
| `10-coherence-model-shift.md` | 439 | Channel taxonomy reconciliation + CCS computability analysis | 4/5 |
| `11-bidirectional-mapping.md` | 577 | Philosophy trace: 11 remediation philosophies mapped bidirectionally with zero orphans | 4/5 |
| `12-metacognitive-pathway.md` | 676 | Narrative overview of the discovery pathway -- HOW conclusions were reached | -- |
| `13-adversarial-fresh-eyes.md` | 246 | Zero-context independent validation with 7 gaps missing from BOTH prompts | 4/5 |

### Layer 2: Dimensional Analysis (10 files)

| File | Lines | What It IS | Quality |
|------|-------|-----------|---------|
| `14-adversarial-gaps.md` | 228 | Early adversarial gap review (version 1) | -- |
| `14-adversarial-gap-review.md` | 442 | Expanded adversarial gap review (version 2, supersedes version 1) | -- |
| `15-adversarial-reverse-engineer.md` | 542 | Adversarial reverse-engineering analysis | -- |
| `17-decision-architecture.md` | 405 | Decision trace: 7 major architectural decisions with alternatives and counterfactuals | 3/5 |
| `18-prompt-craftsmanship-evolution.md` | 533 | Quantified prompt linguistics: verb taxonomy, ratio analysis, 3 prompt archetypes | 4/5 |
| `19-conversation-metacognition.md` | 297 | Process meta-analysis: the irreducible 5-phase discovery chain, 6-8 agent minimum | 3/5 |
| `20-adversarial-journey-review.md` | 309 | The most important adversarial challenge: 6 biases + 4 unrun experiments | 5/5 |
| `21-verbiage-analysis.md` | 498 | THE most operationally useful report: 10-tier propagation reliability ranking + verb taxonomy | 5/5 |
| `22-structural-architecture.md` | 415 | Document architecture comparison with quantified attention metrics | 4/5 |
| `23-propagation-analysis.md` | 403 | Causal chain tracer: 30 rules traced from instruction through action to visible output | 5/5 |
| `24-fundamental-differences.md` | 399 | Paradigmatic analysis: specification vs procedure as cognitive instruments | 3/5 |

### Layer 3: Meta-Analysis (6 files)

| File | Lines | What It IS | Quality |
|------|-------|-----------|---------|
| `25-bias-challenger-core.md` | 420 | Systematic bias audit of the 10 core analysis reports | 5/5 |
| `26-bias-challenger-dimensional.md` | 545 | Systematic bias audit of the 7 dimensional reports (primary version) | 5/5 |
| `26-bias-challenge-dimensional.md` | 409 | Duplicate of file 26 (shorter version) | -- |
| `27-reproducibility-test.md` | 515 | Actionable reproduction test: 5 distinct tests, Layer F intentionality gap identified | 5/5 |
| `28-reproducibility-consistency.md` | 511 | Cross-agent agreement analysis: 87.6% consistency, 0 disagreements on major findings | 5/5 |
| `29-line-by-line-crossref.md` | 612 | Exhaustive structural mapping: every remediation instruction vs every master prompt rule | 5/5 |

### Layer 4: Builder Action Trace (1 file)

| File | Lines | What It IS | Quality |
|------|-------|-----------|---------|
| `30-changelog-crossref.md` | 610 | Builder action trace: line-by-line cross-reference of builder changelog against both prompts | -- |

### Layer 5: Meta-Audits (6 files)

| File | Lines | What It IS | Quality |
|------|-------|-----------|---------|
| `31-file-inventory-audit.md` | 876 | Complete per-file inventory of analysis files with quality ratings, unique insights, dependencies | -- |
| `32-cross-reference-map.md` | 624 | Exhaustive agreement/contradiction/coverage map across all files | -- |
| `33-ingestion-sequence.md` | 770 | Reading order design: 4-layer ingestion protocol with budget strategies and anti-patterns | -- |
| `35-knowledge-compression.md` | 791 | Knowledge compression analysis | -- |
| `37-metacognitive-transfer.md` | 734 | Transfer problem analysis: what survives and what dies when knowledge moves between instances | -- |
| `38-adversarial-ingestion-test.md` | 613 | Adversarial stress test: what a fresh instance would get WRONG reading this corpus | -- |

### Layer 6: Synthesis (3 files)

| File | Lines | What It IS | Quality |
|------|-------|-----------|---------|
| `40-NAVIGATION-LAYER.md` | 812 | Entry point: file index, extraction protocols, ingestion sequence, verification questions, topic lookup | -- |
| `41-PIPELINE-UNDERSTANDING.md` | 1,196 | Comprehensive pipeline understanding synthesis | -- |
| `42-OPERATIONAL-RECIPE.md` | 1,746 | Content-agnostic 9-phase sequential recipe for building design system pages | -- |

Quality ratings from file 31 (inventory audit). Dash (--) indicates files produced after the audit or not rated.

---

## HOW TO READ THIS CORPUS

The corpus has a designed reading order. Reading files out of order or reading all 41 linearly will produce worse comprehension than following the protocol.

### Quick Version

1. Read `40-NAVIGATION-LAYER.md` -- it tells you what exists and how to read it
2. Follow its 4-pass ingestion protocol
3. Use its topic lookup table for on-demand queries

### Budget Versions (from file 33)

| Budget | Files to Read | Coverage |
|--------|--------------|---------|
| **50K tokens** | 00, 02, 05, 08, 21 + first 100 lines of both source prompts | ~80% of actionable insights |
| **100K tokens** | Add 01, 04, 22, 20 | Full core + key dimensional + key adversarial |
| **200K tokens** | All 41 files in the 4-layer sequence | Complete understanding with validation |

### Anti-Patterns (from file 33)

- Do NOT read analysis reports before reading the source prompts
- Do NOT read file 01 (foundations) before file 02 (failures) -- creates preservation bias
- Do NOT read bias challengers (25-26) before the reports they challenge
- Do NOT read file 24 (fundamental differences) early -- rated most overconfident
- Do NOT read file 29 (line-by-line crossref) before building the conceptual framework
- Do NOT skip file 00 (journey context) despite its small size

The full ingestion protocol with per-file reading guides, validation gates, dependency graphs, and a decision tree is in `33-ingestion-sequence.md`.

---

## SOURCE FILES (external to this directory)

The analysis reports reference these files outside the pipeline-analysis directory. They are the raw inputs the analysis was conducted against.

| File | Location | What It IS |
|------|----------|-----------|
| Master Execution Prompt | `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines) | The prompt that produced the failed flagship page. Conviction-execution-coordination sandwich, ~97 rules organized by domain. |
| Enhanced Remediation Spec | `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,025 lines) | The prompt that produced the improved page. 9-phase sequential recipe with exact CSS values. |
| Builder Changelog | `ephemeral/flagship-remediation/builder-changelog.md` (236 lines) | What the builder agent actually DID during remediation execution. Ground truth for deviation analysis. |
| Final Verdict | `ephemeral/flagship-remediation/FINAL-VERDICT.md` | PA audit verdict on the remediated page. PA-05 scored 2.5/4. |
| Retrospective Synthesis | `ephemeral/flagship-retrospective/09-SYNTHESIS.md` (~400 lines) | 15 root causes (RC-1 through RC-15) that drove the remediation. RC-4 (sub-perceptual variation) cited in 12+ reports. |
| Flagship HTML | `ephemeral/flagship-experiment/07-intentionality.html` (~2,145 lines) | The actual HTML artifact that was audited and remediated. |

---

## KNOWN ISSUES

### Duplicate Files

- **File 14:** Two versions exist. `14-adversarial-gaps.md` (228 lines) is the earlier, shorter version. `14-adversarial-gap-review.md` (442 lines) is the expanded version that supersedes it.
- **File 26:** Two versions exist. `26-bias-challenger-dimensional.md` (545 lines) is the primary version. `26-bias-challenge-dimensional.md` (409 lines) is a shorter duplicate.

### Missing File Numbers

- **File 16:** Never created. No gap in coverage.
- **File 34:** Never delivered. Content covered by adjacent meta-audit files.
- **File 36:** Never delivered. Content covered by adjacent meta-audit files.
- **File 39:** Not present. Gap between files 38 and 40.

### File Number Shifts

Some reports reference file numbers that shifted during production. The file inventory (31) and cross-reference map (32) use the final numbering as it appears on disk. If a report references a file number that does not match the filename, check adjacent numbers.

### N=2 Sample Size

All findings in this corpus derive from analyzing 2 prompts applied to 1 content set (RESEARCH-SYNTHESIS.md) within 1 design system (KortAI) using 1 model family (Claude). Generalization to other content types, design systems, or models is untested. Files 20, 25, and 26 flag this repeatedly as the corpus's most fundamental limitation.

### Navigation Layer (file 40) Inaccuracies

File 40 was written when the corpus had 37 files. It does not index files 03 (remediation rewinding), 12 (metacognitive pathway), 15 (adversarial reverse-engineer), 30 (changelog crossref), or 35 (knowledge compression), which were delivered after or concurrently with the navigation layer's production.

---

## DIRECTORY STRUCTURE

```
ephemeral/pipeline-analysis/
|
|-- README.md                              (this file)
|-- CLAUDE.md                              (auto-loaded navigation for Claude instances)
|
|-- LAYER 0: Context
|   |-- 00-CONVERSATION-JOURNEY-CONTEXT.md
|
|-- LAYER 1: Core Analysis (files 01-13)
|   |-- 01 through 13                      (11 core analysis reports)
|
|-- LAYER 2: Dimensional Analysis (files 14-24)
|   |-- 14 through 24                      (adversarial + dimensional reports)
|
|-- LAYER 3: Meta-Analysis (files 25-29)
|   |-- 25 through 29                      (bias challengers + reproducibility + crossref)
|
|-- LAYER 4: Builder Trace (file 30)
|   |-- 30-changelog-crossref.md
|
|-- LAYER 5: Meta-Audits (files 31-38)
|   |-- 31 through 38                      (inventory, crossref map, ingestion, transfer)
|
|-- LAYER 6: Synthesis (files 40-42)
|   |-- 40-NAVIGATION-LAYER.md             (entry point)
|   |-- 41-PIPELINE-UNDERSTANDING.md       (conceptual transfer)
|   |-- 42-OPERATIONAL-RECIPE.md           (actionable recipe)
|
|-- SUPPORT FILES
|   |-- _discussion-guides/                (per-file discussion navigation)
|   |   |-- core-01-to-13.md               (discussion guide for core analysis files)
|   |   |-- dimensional-17-to-24.md        (discussion guide for dimensional files)
|   |   |-- validation-meta-25-to-42.md    (discussion guide for validation + meta files)
|   |   |-- contradictions-and-tensions.md (productive tensions + unresolved questions)
|   |   |-- narrative-arc.md               (intellectual narrative across all 41 files)
|   |   |-- conversation-walkthrough.md    (10-session structured discussion plan)
|   |   |-- anti-summary-compliance-audit.md
|   |
|   |-- _meta-cognitive/                   (meta-analysis of the analysis itself)
|   |   |-- hidden-questions.md            (implicitly answered + unasked questions)
|   |   |-- pipeline-implications.md       (what findings mean for future builds)
|   |   |-- missing-dimensions.md          (analytical lenses not applied)
|   |   |-- discussion-enrichment.md       (strategies for maximally productive conversation)
|   |   |-- recursive-self-application.md  (does THIS corpus repeat the failures it diagnosed?)
|   |
|   |-- _adversarial/                      (adversarial tests of the documentation itself)
|   |   |-- fresh-instance-test.md         (cold-start navigation test)
|   |   |-- ingestion-stress-test.md       (protocol timing + friction test)
|   |   |-- discussion-readiness-test.md   (20 simulated user questions rated)
|   |   |-- structural-integrity-audit.md  (factual verification of all claims)
|   |
|   |-- _drafts/                           (auxiliary materials)
|       |-- discussion-protocol.md         (20 discussion rules + engagement patterns)
|       |-- ingestion-prompt.md            (auxiliary prompt for bootstrapping instances)
```

File numbering is not contiguous. Missing numbers (16, 34, 36, 39) represent files that were never assigned or never delivered.

---

## AGGREGATE STATISTICS

| Metric | Value |
|--------|-------|
| Total files | 41 |
| Total lines | 22,837 |
| Total size | 1.7MB |
| Unique insights (cataloged by file 31) | 52 |
| Cross-report redundant findings (3+ reports) | 13 families |
| Contradictions identified (by file 32) | 10 |
| Coverage gaps (major) | 6 (including 1 critical: Layer F intentionality) |
| Consensus findings (11+ concordance) | 5 |
| Unresolved questions | 7 |
| Quality distribution (rated files) | 10 at 5/5, 10 at 4/5, 5 at 3/5 |
| Average quality (rated files) | 4.2/5 |

---

*41 files. 22,837 lines. 1.7MB. 50+ agents. One session. This README indexes the corpus without summarizing it. For the analysis itself, start with file 40.*
