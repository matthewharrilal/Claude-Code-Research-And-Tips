# PIPELINE ANALYSIS CORPUS: Ingestion Prompt for New Claude Instances

**Purpose:** Paste this prompt into a new Claude Code instance to bootstrap it into full understanding of the pipeline-analysis corpus. This prompt IS the bootstrap -- no other files need to be read first.

**What this prompt does:**
1. Orients you to what the corpus is and why it exists
2. Tells you HOW to read the corpus (not WHAT it says -- the files say that themselves)
3. Gives you the vocabulary to understand the corpus without stumbling on undefined jargon
4. Sets operational rules for how you should discuss, cite, and reason about corpus content
5. Provides self-check questions to verify your understanding after ingestion

**What this prompt does NOT do:**
- Summarize the corpus findings (summaries destroy nuance; the corpus is the authority)
- Replace reading the files (this prompt is a MAP, not a TERRITORY)
- Tell you what to conclude (the corpus contains contradictions and unresolved questions -- that is a feature, not a bug)

---

## SECTION 1: ORIENTATION

### 1.1 What the Corpus Is

The pipeline-analysis corpus is a collection of ~37 analysis files (~1.3MB, ~14,000 lines) located in `ephemeral/pipeline-analysis/`. It was produced by 50+ Opus 4.6 agents across 6 analysis waves over 2 days (2026-02-17 to 2026-02-18). The corpus analyzes a specific failure: a 963-line master execution prompt designed to produce flagship HTML pages for a design system scored PA-05 1.5/4 (DO NOT SHIP). A 1,025-line remediation spec partially fixed the same page to PA-05 2.5/4 (improved but below shipping threshold).

The corpus is NOT a summary of what happened. It is a multi-agent forensic investigation of WHY the prompt failed, HOW the remediation partially succeeded, and WHAT principles generalize beyond this specific case. Different agents reached different conclusions. Some findings are unanimous (10/10 concordance); others are contested. The corpus preserves disagreement intentionally.

### 1.2 How the Corpus Was Produced

The analysis was conducted in waves:
- **Wave 1 (files 00-13):** Core analysis -- 13 agents each examined a specific dimension (failures, foundations, reversals, CSS philosophy, HTML restructuring, process topology, perception model, content agnosticism, coherence, bidirectional mapping, metacognitive pathway, fresh-eyes validation)
- **Wave 2 (files 17-24):** Dimensional analysis -- 8 agents examined cross-cutting concerns (decision architecture, prompt linguistics, conversation metacognition, adversarial review, verbiage analysis, structural architecture, propagation analysis, fundamental differences)
- **Wave 3 (files 25-28):** Validation -- 4 agents challenged findings (bias challengers for core and dimensional reports, reproducibility test, consistency analysis)
- **Wave 4 (files 29-30):** Ground truth -- 2 agents performed exhaustive line-by-line cross-references against source documents
- **Wave 5 (files 31-38):** Meta-audits -- inventory, cross-reference map, ingestion design, knowledge compression, metacognitive transfer, adversarial ingestion test
- **Wave 6 (files 40-42):** Synthesis -- navigation layer, pipeline understanding, operational recipe

Files 14-16 are partially or fully absent (14 has two versions; 15-16 were never created). This gap is unexplained in the corpus.

### 1.3 What the Corpus Analyzes

Two source documents are the subjects of analysis:

1. **The Master Execution Prompt** (`ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`, 963 lines) -- A conviction-execution-coordination sandwich with 97 rules in 10 namespaces (S, U, C, MC, SC, MG, P, CT, RP, CP). It was designed by multiple agent teams over several phases to produce flagship HTML pages for a design system.

2. **The Remediation Spec** (`ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md`, 1,025 lines) -- A 9-phase sequential recipe created AFTER the master prompt failed. It replaced scattered constraint rules with sequenced action steps containing exact CSS values.

Additional source artifacts referenced but not inside the corpus:
- The flagship HTML page (`ephemeral/flagship-experiment/07-intentionality.html`, ~2,145 lines)
- The builder changelog (`ephemeral/flagship-remediation/builder-changelog.md`, 236 lines)
- The retrospective synthesis (`ephemeral/flagship-retrospective/09-SYNTHESIS.md`, ~400 lines)

### 1.4 The Three Synthesis Files

Three files synthesize the entire corpus. They are your primary references AFTER completing the ingestion protocol:

| File | Lines | Role |
|------|-------|------|
| **40-NAVIGATION-LAYER.md** | ~813 | THE entry point. File index, extraction protocols for the 15 most important files, multi-pass ingestion protocol, 30 verification questions, topic lookup with 60+ entries, contradiction tracking. Read this file FIRST after this prompt. |
| **41-PIPELINE-UNDERSTANDING.md** | ~1,197 | The structured understanding. 20 key questions with consensus answers and dissenting views, paradigm shifts, operational principles (PA/CSS/HTML/TT/VF/PM/CH), 17 failure modes, convergence map (4 tiers), irreducible core. Use this to VERIFY your understanding. |
| **42-OPERATIONAL-RECIPE.md** | ~1,747 | The actionable output. Content-agnostic 9-phase recipe, team architecture, conviction layer, perception thresholds, deallocation protocol. This is what the corpus ultimately PRODUCES. |

---

## SECTION 2: ANTI-SUMMARY OPERATING PRINCIPLES

### 2.1 Why Summaries Fail

The corpus's central finding is that the master prompt failed because it compressed 337 research findings into "sample 2-4 mechanisms" -- a 50:1 information loss. The same compression problem applies to THIS CORPUS. Summarizing the corpus destroys exactly the nuance that makes it valuable:

- **Thesis survives compression; self-corrections do not.** "Recipe format beats checklist format" survives compression. "Recipe format is overstated -- concrete-vs-abstract is the real variable" does not. Compression preserves the headline and destroys the caveats.
- **Numbers survive; evidence chains do not.** "Binary rules achieve 100% compliance" compresses perfectly. The fact that 11 independent agents across 4 analysis waves confirmed this -- the thing that gives the number its authority -- does not compress.
- **Findings survive; contradictions do not.** "Single builder is better" and "Multi-agent communication is essential for quality" are BOTH true (for different task types). A summary picks one. The corpus preserves both.

### 2.2 The Five Anti-Summary Constraints

When discussing corpus content, follow these constraints:

**CONSTRAINT 1: INDEX, DON'T SUMMARIZE.**
Point the user to the specific file and section. "File 08, Section B2 documents the perception threshold table" is better than reciting the table from memory.

**CONSTRAINT 2: CITE, DON'T PARAPHRASE.**
When referencing a finding, name the file and the evidence strength. "File 02 identifies 42 failures (14 BLOCKING), with RC-4 accounting for 26% -- rated 5/5 quality by file 31" is better than "the master prompt had many failures."

**CONSTRAINT 3: PRESERVE DISSENT.**
Every major finding has challengers. When stating a consensus finding, also state the dissent. "Recipe format is strongly supported (files 02, 03, 07, 42) but file 20 argues concrete-vs-abstract is the real variable and file 26 identifies a 3-variable confound."

**CONSTRAINT 4: OFFER DEPTH, DON'T COMPRESS.**
When the user asks about a topic, offer to read the relevant file rather than compressing its content. "I can read file 21 (499 lines) which contains the full propagation reliability ranking -- would you like me to pull the specific data?"

**CONSTRAINT 5: FLAG CONFIDENCE LEVELS.**
The corpus classifies findings into 4 tiers: UNANIMOUS (implement without debate), MAJORITY (implement with edge case awareness), CONTESTED (requires experiment to resolve), UNRESOLVED (insufficient evidence). Always state which tier a finding falls in.

### 2.3 What to Do Instead of Summarizing

- **Navigate:** Use file 40's topic lookup (60+ entries) to direct users to the right file for their question.
- **Cross-reference:** When a user asks about a contested topic, present the files that agree AND the files that disagree.
- **Escalate precision:** Start with the file number and finding name, then offer to read the full section if the user wants depth.
- **Track contradictions:** File 40 documents 10 tracked contradictions with resolutions. Reference these when conflicting claims arise.

---

## SECTION 3: INGESTION PROTOCOL

### 3.1 Step 0: Read This Prompt (you are doing this now)

After finishing this prompt, you will have:
- Vocabulary to understand corpus jargon (Section 5)
- Knowledge of what the corpus IS and how it was produced (Section 1)
- Operating rules for how to discuss findings (Section 2, Section 4)
- Self-check questions to verify understanding (Section 7)

You will NOT yet have the findings themselves.

### 3.2 Step 1: Read the Navigation Layer

Read `ephemeral/pipeline-analysis/40-NAVIGATION-LAYER.md` (813 lines). This file IS the entry point. It contains:
- Complete file index (all 37 analysis files + 5 external references)
- Extraction protocols for the 15 most important files (telling you WHAT to look for in each)
- Multi-pass ingestion protocol (which files to read in what order)
- 30 verification questions at 3 levels (basic, analytical, nuanced)
- Topic lookup with 60+ entries (alphabetical: topic -> file + section)

After reading file 40, you will know WHERE everything is. You will not yet know WHAT the files say.

### 3.3 Step 2: Follow the Multi-Pass Protocol

File 40, Part 3 defines a multi-pass ingestion protocol. Follow it:

**Pass 1 (Essential Context, ~150K tokens):** Read 8 files in this order:
1. `00-CONVERSATION-JOURNEY-CONTEXT.md` -- the A-E timeline
2. Master prompt (first 100 lines) -- see the conviction sandwich
3. Remediation spec (first 100 lines) -- see the phase-sequential contrast
4. `02-master-prompt-failures.md` -- the 42 failures (14 BLOCKING)
5. `08-perception-model-shift.md` -- THE dominant finding (perception gap)
6. `05-css-philosophy-shift.md` -- the 5 CSS philosophy shifts
7. `21-verbiage-analysis.md` -- the most actionable artifact (propagation ranking)
8. `13-adversarial-fresh-eyes.md` -- independent validation + 7 blind spots

**Pass 2 (Core Analysis, ~200K additional tokens):** Read 10 more files:
9-18: Files 01, 04, 03, 10, 22, 29, 20, 25, 26, 27 (see file 40 Part 3 for rationale)

**Pass 3 (Depth on Demand):** Use file 40's topic lookup to read remaining files as needed.

**Pass 4 (Adversarial Self-Check):** Answer the challenge questions in file 40, Part 3 to verify that you hold findings with appropriate confidence, not just as facts.

### 3.4 Step 3: Verify Against the Understanding Synthesis

After completing Pass 1 and Pass 2, read `ephemeral/pipeline-analysis/41-PIPELINE-UNDERSTANDING.md` (1,197 lines). Use it to verify your understanding:
- Can you answer the 20 key questions with consensus answers AND dissenting views?
- Can you name the paradigm shifts in each category (A: Architectural, B: Operational, C: Structural, D: Tonal)?
- Can you state the operational principles in each domain (PA, CSS, HTML, TT, VF, PM, CH)?
- Can you identify which failure modes are prevented by which principles?

### 3.5 Step 4: Read the Operational Recipe (when needed)

Read `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` (1,747 lines) only when the user needs to BUILD something. This file converts analysis into a 9-phase executable recipe. It is the PRODUCT of the corpus, not the corpus itself.

### 3.6 Budget-Aware Ingestion

If context is limited, file 33 defines 3 budget strategies:
- **50K tokens:** This prompt + file 40 + files 02, 08, 13 (the essential trio)
- **100K tokens:** Above + Pass 1 complete (files 00, 05, 21 + source prompt excerpts)
- **200K tokens:** Above + Pass 2 complete (all core analysis + adversarial challenges)

---

## SECTION 4: DISCUSSION ENGAGEMENT RULES

### 4.1 Proactive Patterns

When the user asks about a corpus topic:

1. **Lead with the file reference.** "File 08 (perception-model-shift) addresses this directly. It found that the master prompt contained zero references to human perception across all 963 lines."

2. **State evidence strength immediately.** "This finding has 10/25 file concordance with zero counter-evidence -- UNANIMOUS tier."

3. **Surface the dissent without being asked.** "However, file 25 (bias-challenger) challenges whether the specific threshold values (>= 10 RGB, >= 2px font-size) are generalizable beyond this single experiment."

4. **Offer depth escalation.** "File 08 has a complete 8-property perception threshold table and 11 stacking measurements. Would you like me to pull the specific data?"

### 4.2 Citation Format

Use this format when citing corpus findings:

```
[Finding statement] (File [number], [section/part if specific]; concordance [X/Y]; tier: [UNANIMOUS|MAJORITY|CONTESTED|UNRESOLVED])
```

Example: "Binary rules achieve ~100% agent compliance while judgment rules achieve ~0% (File 02, cross-cutting pattern; concordance 12/25+; tier: UNANIMOUS)"

### 4.3 Depth Escalation Protocol

When discussing any finding, offer three levels of depth:

- **Level 1 (headline):** The finding in one sentence with file reference and confidence tier.
- **Level 2 (evidence):** The evidence chain -- which files found it, how many agents confirmed it, what the counter-evidence is.
- **Level 3 (full read):** Offer to read the specific file section and present the complete analysis.

Always start at Level 1. Escalate to Level 2 if the user asks follow-up questions. Offer Level 3 explicitly before reading large sections.

### 4.4 Adversarial Self-Challenges

When presenting any finding as settled, actively challenge it:

- **N=1/N=2 check:** "This finding is based on [1-2] experiments. Generalization is untested."
- **Confound check:** "Three variables changed simultaneously (format, specificity, perception). The finding may be attributed to the wrong variable."
- **Echo chamber check:** "All agents examined the same artifact. 100% agreement on N=1 is expected, not remarkable."
- **Compression check:** "I am compressing [X lines] into [Y sentences]. The nuance lost includes [specific nuance]."

### 4.5 Surfacing Gaps

The corpus has known gaps. When relevant, surface them proactively:

- **Layer F (Intentionality):** Entirely absent from all 25+ analysis files. This is the gap between PA-05 3/4 and 4/4. File 27 identifies this as the biggest analytical blind spot.
- **CD-006 production conditions:** The crown jewel (39/40) was never analyzed for WHY it succeeded. File 25 flags this as an unexamined benchmark.
- **The cheapest experiment:** Adding perception thresholds to the master prompt (no other changes) has never been run. File 20 and file 32 identify this as the most informative unrun test.
- **Model effects:** All builders used Claude models. No comparison across model families exists. The Sonnet-vs-Opus effect on builder quality is flagged but unexamined.

---

## SECTION 5: JARGON GLOSSARY

These terms appear throughout the corpus without consistent definition. A fresh instance encountering them would be confused. Definitions are sourced from file 38's adversarial jargon audit and supplemented from project context.

### 5.1 Core Concepts

**PA-05** -- Perceptual Audit question 05: "Does this feel DESIGNED rather than ASSEMBLED?" Scored on a 4-point scale: 1/4 DEFICIENT, 2/4 FUNCTIONAL/STYLED, 3/4 COMPOSED, 4/4 DESIGNED. The primary quality metric. The full PA has 48 questions; PA-05 is the summary question. Defined in `~/.claude/skills/perceptual-auditing/SKILL.md`.

**RC-4** -- Root Cause #4 from the retrospective synthesis: sub-perceptual variation satisfying every rule while producing nothing visible. Accounts for 26% of the 42 documented failures. The dominant root cause.

**Sub-perceptual CSS** -- CSS property values that technically change between elements but are invisible to humans. Example: background-color varying by 2 RGB channels (e.g., #FAF8F5 vs #FAF8F3). The perception threshold for background color is >= 10 RGB per channel. Anything below is sub-perceptual.

**Perception thresholds** -- Minimum CSS property deltas for a change to be visible to humans. 8 properties with specific values (background >= 10 RGB, font-size >= 2px, letter-spacing >= 0.025em, etc.). Documented in file 08 and file 42 Appendix A.

**S-09 stacking loophole** -- The master prompt capped individual CSS spacing properties at 96px (rule S-09). But at section boundaries, multiple properties accumulate: margin-bottom + padding-bottom + divider-margin-top + divider-height + divider-margin-bottom + padding-top + margin-top. Each under 96px, the total reaches 210-276px. Fix: cap TOTAL boundary gap at 120px.

**Binary rules vs judgment rules** -- Binary: objectively testable ("container width 940-960px" -- measure it). Judgment: subjectively interpreted ("ensure visual variety" -- compared to what?). Binary rules achieve ~100% agent compliance; judgment rules achieve ~0% genuine compliance.

### 5.2 Project-Specific Terms

**CD-006** -- Combination-Density exploration #6. An HTML page that scored 39/40 (near-perfect quality). Located at `design-system/validated-explorations/combination/CD-006-pilot-migration.html`. Serves as the project's crown jewel benchmark. "CD" prefix = combination density.

**Flagship** -- The specific HTML page built by the master prompt: `ephemeral/flagship-experiment/07-intentionality.html` (~2,145 lines, 12 sections in 3 zones). Scored PA-05 1.5/4 before remediation, 2.5/4 after. This path appears in NONE of the 29 core pipeline-analysis files.

**Middle-tier experiment** -- An 8-agent experiment that used a 100-line recipe-format prompt and produced a page scoring PA-05 4/4 (DESIGNED). Located in `ephemeral/middle-tier-experiment/`. Cited as evidence for the recipe thesis but also as a simpler-scope task (potential confound).

**Mode 4 PA** -- The most intensive perceptual audit format: 9 independent auditors, each assigned 5-6 of the 48 PA questions, working from pre-captured screenshots. Catches failures that 2-auditor PAs miss (the whitespace void was flagged by 9/9 Mode 4 auditors but missed by a previous 2-PA audit).

**Soul / soul compliance** -- The design system's identity constraints: no border-radius > 0, no box-shadow, no gradients, warm neutrals only, font trinity (Instrument Serif / Inter / JetBrains Mono), container 940-960px. Defined in U-01 through U-10 rules and `design-system/compositional-core/identity/prohibitions.md`.

### 5.3 Architectural Terms

**Mechanism** -- A specific compositional CSS technique from the mechanism catalog (`design-system/compositional-core/grammar/mechanism-catalog.md`). Examples: density gradient, chromatic zone, structural border. The catalog has 18+ mechanisms in 5 categories (Spatial, Temporal, Material, Behavioral, Relational).

**Channels (Ch1-Ch7)** -- Perceptual or CSS dimensions for measuring compositional variation. Ch1=Chromatic, Ch2=Typographic, Ch3=Spatial, Ch4=Structural, Ch5=Density/Temporal, Ch6=Rhythmic/Behavioral, Ch7=Intentional/Material. WARNING: channel names and orderings are INCONSISTENT across corpus files. File 28 identifies this as divergence point #1.

**Scales (1-5)** -- Size hierarchy. Scale 1=Page (~1440px), Scale 2=Section (~400-800px), Scale 3=Component (~100-300px), Scale 4=Element (~20-80px), Scale 5=Detail (~4-16px).

**Zones (S1-S12)** -- Sections of the flagship page organized into 3 color-temperature zones: warm (S1-S3), cool (S4-S8), resolved (S9-S12). The zone structure is content-specific (this page has 12 topics). NOT universal.

**Conviction sandwich** -- The master prompt's structure: Section A (conviction/soul) -> Section B (execution rules) -> Section C (coordination/agents) -> Section D (conviction). The remediation replaced this with a linear structure: conviction -> recipe -> verification.

**Two-Instance Pattern** -- Using one Claude instance to generate a prompt and a DIFFERENT instance to execute it. Exploits the fact that continuation bias prevents self-revision. The instance that wrote the prompt cannot objectively evaluate it; a fresh instance has no such bias.

### 5.4 Quality and Process Terms

**Deallocation (Phase 0)** -- Removing sub-perceptual CSS before adding new CSS. Establishes a clean baseline from which all perceptible variations are measured. A genuine innovation with no master prompt seed.

**Propagation reliability ranking** -- A 10-tier hierarchy from file 21 ranking instruction types by predicted agent compliance. Ranges from "concrete delete" (~98% reliability) to "counterfactual thought experiment" (~5%). THE most actionable artifact in the entire corpus.

**CCS (Compositional Coupling Score)** -- A metric mandated by the master prompt but NEVER actually computed in any experiment. Required judgment to evaluate "coupling" -- too abstract for binary measurement. Replaced by perception-delta verification.

**Recipe vs checklist** -- The corpus's most-discussed distinction: sequential recipe format (numbered phases with specific CSS values) vs scattered checklist format (rules organized by category). The refined understanding (file 20, 26): the real variable is CONCRETE vs ABSTRACT, not recipe vs checklist. A concrete checklist would likely work; a vague recipe would fail.

---

## SECTION 6: KNOWN LIMITATIONS

### 6.1 The N=1/N=2 Problem

ALL corpus findings are derived from 1-2 experiments with the same design system, the same content type (research synthesis), and the same AI model family (Claude). No finding has been validated against different design systems, different content types, or different models.

Cross-agent agreement (87.6% consistency, 100% agreement on 10 major findings per file 28) is NOT reproducibility validation. All agents examined the same single artifact. Agreement on N=1 is expected, not remarkable. (File 25 makes this point explicitly.)

**Implication:** Treat all findings as strong hypotheses, not established laws. They are validated within this context but untested elsewhere.

### 6.2 The Three-Variable Confound

The master prompt was checklist + abstract + no perception thresholds. The remediation was recipe + concrete + perception thresholds. Because all three variables changed simultaneously, improvement CANNOT be attributed to any single variable. (File 26 identifies this as THE most important methodological correction in the corpus.)

The cheapest most informative experiment -- adding ONLY perception thresholds to the unchanged master prompt -- has never been run. This is the single most cited gap across adversarial reviewers (files 20, 25, 26, 32).

### 6.3 The Remediation Is Not a Success

PA-05 improved from 1.5/4 to 2.5/4. This is meaningful progress (+1.0 points) but BELOW the 3/4 shipping threshold. The corpus sometimes frames the remediation as a success; adversarial reviewers (file 20) correctly frame it as an improvement that did not achieve its goal.

Analysts predicted 3/4; the actual result was 2.5/4. This 0.5-point gap suggests an unmodeled variable -- possibly content register monotony (RC-13) or the intentionality gap (Layer F, entirely unanalyzed).

### 6.4 The Self-Referential Paradox

The corpus diagnoses that compression destroys information (the master prompt's 50:1 compression was the root failure). The corpus itself will be compressed for transfer. File 38 rates the corpus's self-referential paradox at 4/10: excellent diagnosis (9/10), poor prevention (2/10), moderate self-application (3/10).

Specifically: compression preserves the THESIS LAYER (headline findings) and destroys the SELF-AWARENESS LAYER (caveats, contradictions, unresolved questions). This is exactly the pattern that caused the master prompt's failure.

### 6.5 The Commentary Layer Problem

The corpus is a COMMENTARY layer, not a working reference. It requires the underlying artifacts (master prompt, remediation spec, flagship HTML, builder changelog, design system files) to be actionable. A reader who has ONLY the pipeline-analysis files can understand the narrative and analytical frameworks but cannot build anything or verify specific claims.

---

## SECTION 7: SELF-CHECK QUESTIONS

After completing the ingestion protocol, answer these questions. If you cannot answer a question, it indicates a gap in your ingestion -- the question names the file that fills the gap.

### 7.1 Basic Comprehension (answer after Pass 1)

1. What is PA-05, what scale does it use, and what did the flagship score before and after remediation? (Files 00, 02, 08)
2. What is RC-4 and what percentage of failures does it account for? (File 02)
3. What is the S-09 stacking loophole? Explain with specific numbers. (Files 02, 08)
4. State the perception threshold for background color, font-size, and letter-spacing. (File 08)
5. What is the highest-reliability instruction type and what is the lowest? (File 21)
6. Name 3 gaps found by the fresh-eyes agent that were missing from BOTH source prompts. (File 13)
7. What are the 5 CSS philosophy shifts? Name each by its FROM -> TO pattern. (File 05)

### 7.2 Analytical Depth (answer after Pass 2)

8. How can 89% foundation preservation (file 01) and 71% rule drop rate (file 29) BOTH be true? (Files 01, 29)
9. What are the 3 genuine remediation innovations with no master prompt seed? (File 04)
10. What is the 3-variable confound and why does it matter? (File 26)
11. What is the Layer F (Intentionality) gap? (File 27)
12. Name 3 biases identified by the adversarial reviewers. (Files 20, 25, 26)
13. Why is CCS a dead metric? (File 10)

### 7.3 Nuanced Judgment (answer after Pass 3+)

14. Does the recipe thesis hold universally? Present evidence FOR and AGAINST. (Files 03, 20, 25, 26)
15. Is single-agent or multi-agent better? Under what conditions does each win? (Files 07, 20)
16. What is the "most dangerous unexamined assumption" in the corpus? (File 25)
17. What would the cheapest most informative experiment test, and why hasn't it been run? (Files 20, 32)
18. Can the remediation spec be reused for different content? What percentage is content-dependent? (Files 09, 27)
19. Why did the remediation predict 3/4 but achieve only 2.5/4? (Files 26, 27)
20. What is the compression-failure paradox, and does the corpus prevent the failure it diagnoses? (File 38)

---

## SECTION 8: KEY FILE PATHS

### 8.1 Primary Corpus Files (read these)

| Priority | File | Lines | Description |
|----------|------|-------|-------------|
| 1 | `ephemeral/pipeline-analysis/40-NAVIGATION-LAYER.md` | 813 | THE entry point. File index, extraction protocols, ingestion protocol, topic lookup. Read FIRST. |
| 2 | `ephemeral/pipeline-analysis/41-PIPELINE-UNDERSTANDING.md` | 1,197 | Structured understanding. 20 key questions, paradigm shifts, operational principles, failure modes, convergence map. Use to VERIFY understanding. |
| 3 | `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` | 1,747 | Actionable output. 9-phase recipe, team architecture, conviction layer. The PRODUCT of the corpus. |
| 4 | `ephemeral/pipeline-analysis/02-master-prompt-failures.md` | 403 | Failure taxonomy. 42 failures (14 BLOCKING), 5 failure types, RC-4 at 26%. Rated 5/5 quality. |
| 5 | `ephemeral/pipeline-analysis/08-perception-model-shift.md` | 484 | THE dominant finding. Perception threshold table, stacking measurements, zero-hit perception search. Most cited file. |
| 6 | `ephemeral/pipeline-analysis/21-verbiage-analysis.md` | 499 | Most actionable. Propagation reliability ranking (10 tiers), verb taxonomy, WAS/NOW format. Rated 5/5, lowest bias risk. |
| 7 | `ephemeral/pipeline-analysis/20-adversarial-journey-review.md` | 310 | Most important challenge. 6 biases, 4 unrun experiments, "concrete vs abstract" refinement. |
| 8 | `ephemeral/pipeline-analysis/26-bias-challenger-dimensional.md` | 546 | Most important methodological correction. 3-variable confound, 4 genuinely novel contributions. |
| 9 | `ephemeral/pipeline-analysis/27-reproducibility-test.md` | 516 | Biggest blind spot. Layer F (Intentionality) gap, 7-layer knowledge set, spec contradictions. |
| 10 | `ephemeral/pipeline-analysis/38-adversarial-ingestion-test.md` | 614 | Stress test. Jargon audit (15+ undefined terms), 8 predicted failure modes, self-referential paradox (4/10). |

### 8.2 Source Documents (referenced by corpus)

| File | Lines | Role |
|------|-------|------|
| `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` | 963 | The master prompt. One of the two source documents. |
| `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` | 1,025 | The remediation spec. The other source document. |
| `ephemeral/flagship-experiment/07-intentionality.html` | ~2,145 | The flagship HTML. The artifact under analysis. |
| `ephemeral/flagship-remediation/builder-changelog.md` | 236 | What the builder actually did. Ground truth for deviation analysis. |
| `ephemeral/flagship-retrospective/09-SYNTHESIS.md` | ~400 | Retrospective with 15 root causes (RC-1 through RC-15). |

### 8.3 Design System Files (context, not analysis)

| File | Role |
|------|------|
| `design-system/compositional-core/identity/prohibitions.md` | Soul constraints (22 prohibitions) |
| `design-system/compositional-core/vocabulary/tokens.css` | Design tokens (65 canonical values) |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 18+ mechanisms in 5 categories |
| `design-system/compositional-core/components/merged-components.css` | Component library (26 families) |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 48 PA questions including PA-05 |
| `~/.claude/skills/tension-composition/SKILL.md` | Tension-composition pipeline (Track 2) |

---

## USAGE NOTES

### When the User Asks You to Read the Corpus

Follow the ingestion protocol (Section 3). Start with file 40. Do NOT start with file 00 -- it has the highest jargon density (9.4 undefined terms per 100 lines) and assumes the most context.

### When the User Asks About a Specific Topic

Use file 40's topic lookup (Part 5, 60+ entries) to find the right file. Read that file. Present findings at Level 1 (headline + file reference + confidence tier). Offer Level 2 (evidence chain) and Level 3 (full read) as depth escalation.

### When the User Asks You to Build Something

Read file 42 (OPERATIONAL-RECIPE.md). It contains the 9-phase content-agnostic recipe. The recipe IS the operational output of the entire corpus.

### When the User Asks What the Corpus Concludes

There is no single conclusion. The corpus contains unanimous findings (implement without debate), majority findings (implement with awareness), contested findings (requires experiment), and unresolved questions (insufficient evidence). File 41, Section 5 (Convergence Map) classifies all findings into these 4 tiers. Present the tier, not just the finding.

### When You Encounter Contradictions

File 40, Appendix B tracks 10 high-impact contradictions with resolutions. File 32 documents 8 additional contradictions with resolution recommendations. File 41, Appendix B provides a contradiction registry. Contradictions are FEATURES of the corpus, not bugs -- they reflect genuine analytical disagreement that experiments have not yet resolved.

---

**END OF INGESTION PROMPT**

**Statistics:**
- Sections: 8
- Glossary terms: 20
- Self-check questions: 20
- Key file paths: 21
- Anti-summary constraints: 5
- Known limitations: 5
- Ingestion steps: 4 (+ budget-aware fallback)
