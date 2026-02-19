# ADVERSARIAL INGESTION TEST: Pipeline Analysis Corpus

**Agent:** adversarial-ingestion-tester (Opus 4.6)
**Date:** 2026-02-18
**Method:** Read ALL 29 files in `ephemeral/pipeline-analysis/` (~900K) plus both source prompts. Pretended to be a FRESH Claude instance encountering this corpus for the first time. Identified every point of confusion, ambiguity, assumed knowledge, and missing context.

**Source prompts read:**
- `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines)
- `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,025 lines)

**Corpus files read (29 files):**
- 00-CONVERSATION-JOURNEY-CONTEXT.md
- 01-master-prompt-foundations.md
- 02-master-prompt-failures.md
- 03-remediation-rewinding.md
- 04-remediation-building.md
- 05-css-philosophy-shift.md
- 06-html-restructuring-shift.md
- 07-process-topology-shift.md
- 08-perception-model-shift.md
- 09-content-agnosticism.md
- 10-coherence-model-shift.md
- 11-bidirectional-mapping.md
- 12-metacognitive-pathway.md
- 13-adversarial-fresh-eyes.md
- 17-decision-architecture.md
- 18-prompt-craftsmanship-evolution.md
- 19-conversation-metacognition.md
- 20-adversarial-journey-review.md
- 21-verbiage-analysis.md
- 22-structural-architecture.md
- 23-propagation-analysis.md
- 24-fundamental-differences.md
- 25-bias-challenger-core.md
- 26-bias-challenger-dimensional.md
- 27-reproducibility-test.md
- 28-reproducibility-consistency.md
- 29-line-by-line-crossref.md
- 30-changelog-crossref.md
- (duplicate: 26-bias-challenge-dimensional.md -- same content as 26-bias-challenger-dimensional.md)

**Missing file numbers:** 14, 15, 16 -- no files with these numbers exist. Gap unexplained in any file.

---

## TEST 1: JARGON AUDIT

Every non-self-explanatory term used across the corpus, whether it is defined, and what a fresh instance would assume if encountering it without context.

### 1.1 Terms DEFINED within the corpus (adequate for a fresh reader)

| Term | Definition Location | Quality of Definition |
|------|--------------------|-----------------------|
| PA-05 | Report 02 line ~34, Report 12 Part 1 | ADEQUATE -- "Perceptual Audit question 05" with 4 sub-criteria (Designed/Coherent/Proportionate/Polished), scale 1-4. Defined in multiple files. |
| Sub-perceptual CSS | Report 05, Report 06, Report 08, Report 12 | EXCELLENT -- repeatedly defined with quantitative thresholds (letter-spacing <0.025em, background <10 RGB, etc.). Most thoroughly explained term in the corpus. |
| S-09 stacking loophole | Report 09, Report 12 Part 6 | GOOD -- the concept (individual values pass, stacked values fail) is explained with numerical examples. |
| CCS (Compositional Coupling Score) | Report 10, Report 29 | ADEQUATE -- formula given (unique mechanism-to-mechanism transitions / total deployments). However, never actually COMPUTED in any file. |
| Deallocation (Phase 0) | Report 03, Report 04, Report 08, Report 12 | EXCELLENT -- the concept of removing sub-perceptual CSS before adding new CSS is thoroughly explained with rationale, line counts, and budget math. |
| Recipe vs Checklist | Report 03, Report 04, Report 12, Report 18, Report 24 | EXCELLENT -- the distinction is the most discussed concept in the corpus. Multiple definitions from multiple angles. |
| Soul compliance | Report 29, Report 30, multiple others | ADEQUATE -- refers to U-01 through U-10 rules (no border-radius, no box-shadow, no gradients, warm neutrals, font trinity, etc.). Specific rules enumerated in Report 29. |
| Mode 4 PA | Report 03, Report 12 | ADEQUATE -- "9 independent auditors, each assigned 5-6 of the 48 PA questions." Context makes clear this is the most intensive quality audit format. |

### 1.2 Terms USED but NEVER DEFINED (a fresh reader would be confused)

| Term | Files Using It | What a Fresh Reader Would Assume | Actual Meaning |
|------|---------------|----------------------------------|----------------|
| **CD-006** | 01, 02, 05, 06, 11, 12, 25, 28, 30 | Some kind of reference design file. A reader could guess "CD" means something but would not know what. | CD-006 is a specific validated HTML exploration ("combination density" exploration #6) that scored 39/40 and serves as the project's crown jewel benchmark. The "CD" prefix is never expanded in this corpus. |
| **DD-006** | None in this corpus (but referenced in MEMORY.md) | Unknown. | "Density density" exploration #6 -- a different HTML file. Never appears in the pipeline-analysis corpus but exists in the broader project. |
| **Flagship** | Nearly every file | A reader could infer "a specific HTML page that was built and failed." But WHICH page, built WHEN, by WHOM? The flagship HTML file path is never given in the corpus. | The flagship page is `ephemeral/flagship-experiment/07-intentionality.html`, built by the Ceiling Experiment team (12 agents) using the master execution prompt. This path appears in NONE of the 29 pipeline-analysis files. |
| **Middle-tier experiment** | 03, 12, 20, 25, 26 | Some previous experiment that succeeded. But what was it? What was its prompt? Where is its output? | An 8-agent experiment that produced PA-05 4/4 with a 100-line recipe prompt. The middle-tier HTML and prompt are in `ephemeral/middle-tier-experiment/` but this path is never given. |
| **Conviction sandwich** | 03, 22, Report 18 | Appears to be a prompt architecture pattern. "Sandwich" suggests wrapping execution content between motivational content. But the name is never formally defined. | A specific prompt structure: Conviction (A) -> Execution (B) -> Coordination (C) -> Conviction (D). Named in MEMORY.md but treated as known terminology in the corpus. |
| **Mechanism** (in the design system sense) | 01, 02, 04, 05, 07, 11, 23, 29 | CSS technique? Design pattern? A reader would be deeply confused. "14 mechanisms were deployed" -- deployed HOW? The word is used constantly but never defined. | A mechanism is a specific compositional CSS technique from the mechanism-catalog.md (e.g., "density gradient," "chromatic zone," "structural border"). The mechanism catalog is at `design-system/compositional-core/grammar/mechanism-catalog.md` but this is NEVER referenced in the corpus. |
| **Channels (Ch1-Ch7)** | 05, 08, 10, 11, 23, 29 | Some kind of perceptual or CSS dimension. The numbering suggests a taxonomy. | Ch1=Chromatic, Ch2=Typographic, Ch3=Spatial, Ch4=Structural, Ch5=Density/Temporal, Ch6=Rhythmic/Behavioral, Ch7=Intentional/Material. HOWEVER, this taxonomy is COMPETING -- the master prompt and remediation spec use DIFFERENT channel orderings and names. Report 28 identifies this as a divergence point. |
| **Scales (1-5)** | 05, 10, 29 | Some kind of size hierarchy. | Scale 1=Page (~1440px), Scale 2=Section (~400-800px), Scale 3=Component (~100-300px), Scale 4=Element (~20-80px), Scale 5=Detail (~4-16px). Defined in the master prompt at SC-01 but the definition is paraphrased inconsistently across corpus files. |
| **Zones (S1-S12)** | 10, 11, 29, 30 | Sections of the page? "S" probably means "section." But why 12? What is in each one? | The flagship page has 12 content sections organized into 3 zones: warm (S1-S3), cool (S4-S8), resolved (S9-S12). The zone structure is content-dependent (this specific research synthesis has 12 topics). A fresh reader would not know this is page-specific, not universal. |
| **Tokens / tokens.css** | 29, 30 | CSS custom properties file. But where is it? What does it contain? | Located at `design-system/compositional-core/vocabulary/tokens.css`. Contains canonical color values, spacing scales, etc. Never referenced with its full path in the corpus. |
| **Instrument Serif / Inter / JetBrains Mono** | 29, 30 | Font names. A reader would recognize these as font families. | The design system's "font trinity" -- the only three fonts permitted. Instrument Serif for display headings, Inter for body text, JetBrains Mono for code. The "trinity" framing is assumed knowledge. |
| **Gate sequence / Gate 0-5** | 03, 29 | Some kind of quality checkpoint system. | Specific checkpoints in the master prompt's build process where work is halted until criteria pass. Gate 0 = content exists, Gate 1 = soul compliance, etc. The full gate structure is in the master prompt but abbreviated differently in each corpus file that references it. |
| **Two-Instance Pattern** | 03, 12 | Something about using two Claude instances? | A pattern where one Claude instance generates a prompt and a DIFFERENT instance executes it, exploiting the fact that continuation bias prevents self-revision. Defined in MEMORY.md but treated as known in the corpus. |
| **Fractal coherence** | 01, 29 | Some design principle about self-similarity across scales? | A specific rule (C-20) requiring that compositional patterns repeat at different scales. Never defined in the corpus -- just referenced as something that was "DROPPED" by the remediation spec. |
| **Crown jewel** | 01, 25 | Best example? Top-scoring output? | Refers specifically to CD-006 (39/40) and DD-006 -- the highest-scoring validated explorations. "Crown jewel" is project jargon, not standard terminology. |
| **Approach A/B/C** | 03, 12 | Three options for something. | A = CSS-only remediation, B = CSS + targeted HTML restructuring, C = full rebuild from scratch. Defined in Report 01 but used as shorthand thereafter without re-definition. |
| **Builder** (capitalized, as role) | 29, 30 | The agent that writes CSS/HTML. | A specific role in the master prompt's team roster (C1-02). One Sonnet agent assigned to produce the HTML/CSS output. In remediation context, refers to the single Opus agent doing the execution. |
| **Planner** (capitalized, as role) | 29 | The agent that plans the page. | A specific role in the master prompt's team roster (C1-01). One Sonnet agent assigned to create the compositional plan. Report 29 notes this is a "phantom Planner agent" -- referenced in the master prompt's roster but never actually deployed by the flagship experiment. |

### 1.3 Terms with COMPETING DEFINITIONS (a fresh reader would get contradictory information)

| Term | Definition A | Definition B | Which Files Conflict |
|------|-------------|-------------|---------------------|
| **Channel count** | 7 channels (Ch1-Ch7) per master prompt | 7 channels but with different names/orderings across documents | Reports 05, 08, 10, 28 (divergence point #1 in Report 28) |
| **Max spacing threshold** | 96px (master prompt S-09) | 120px (remediation spec Phase 8B) | Reports 29, 30 (both note the discrepancy but don't resolve which is "correct") |
| **Container width** | 940-1100px (master prompt S-01) | 960px fixed (remediation spec) | Report 29 calls this "REFINED" but a reader wouldn't know which to use for future builds |
| **Purpose-built components** | C-10 says "invent >= 2 purpose-built components" | Remediation says "adopt standard library classes" | Report 29 calls this "REVERSED" -- directly contradictory philosophies |
| **Content transformation** | CT-01 says "rewrite every sentence" | Remediation says "Do NOT change text content" | Report 29 calls this "REVERSED" -- the most extreme contradiction in the corpus |

### 1.4 JARGON DENSITY SCORE

Measuring the number of undefined terms per 100 lines of corpus text:

| File | Lines | Undefined Terms Used | Density (per 100 lines) |
|------|-------|---------------------|------------------------|
| 00-CONVERSATION-JOURNEY-CONTEXT | ~85 | 8 | 9.4 |
| 01-master-prompt-foundations | ~696 | 22 | 3.2 |
| 11-bidirectional-mapping | ~577 | 18 | 3.1 |
| 29-line-by-line-crossref | ~613 | 15 | 2.4 |
| 30-changelog-crossref | ~611 | 14 | 2.3 |
| 12-metacognitive-pathway | ~677 | 12 | 1.8 |
| 13-adversarial-fresh-eyes | ~247 | 3 | 1.2 |

**File 00 has the HIGHEST jargon density** -- the file most likely to be read first (chronological context) is the hardest for a fresh reader to understand. It uses "flagship," "CD-006," "middle-tier," "conviction sandwich," "PA-05," "Mode 4 PA," "scales," "channels," and "mechanisms" all without definition.

---

## TEST 2: ASSUMED CONTEXT AUDIT

What the corpus assumes the reader already knows, organized by criticality.

### 2.1 CRITICAL assumed context (reader cannot understand the corpus without this)

| Assumed Knowledge | How Many Files Depend on It | Where It Actually Lives |
|------------------|-----------------------------|------------------------|
| **The flagship page exists and scored PA-05 1.5/4** | ALL 29 files | The flagship HTML is at `ephemeral/flagship-experiment/07-intentionality.html` (never stated in corpus) |
| **The master prompt has 97 rules in 10 namespaces** | 20+ files | The master prompt itself (`ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`). Cited in source references but the rule structure is assumed known. |
| **What "DESIGNED" means as a PA-05 score** | 15+ files | The perceptual-auditing SKILL.md defines the 4-level scale. Not defined in this corpus. Readers see "PA-05 DESIGNED (4/4)" and must guess what qualifies. |
| **The design system has a "soul" with specific identity constraints** | 15+ files | `design-system/compositional-core/identity/prohibitions.md` and U-01 through U-10 in the master prompt. The concept of "soul" as design identity is assumed. |
| **CD-006 exists and scored 39/40** | 12+ files | The actual file is at `design-system/validated-explorations/combination/CD-006-pilot-migration.html`. The corpus treats this as a known benchmark without explaining what it IS or why 39/40 matters. |
| **The pipeline is a multi-agent Claude Code workflow** | ALL 29 files | CLAUDE.md files, MEMORY.md, project architecture. The corpus assumes the reader knows this is a Claude-agent-driven design pipeline. |
| **What the 48 PA questions are** | 5+ files | `~/.claude/skills/perceptual-auditing/SKILL.md`. The number "48" is cited but no question is ever listed. |
| **The middle-tier experiment succeeded with a recipe format** | 10+ files | `ephemeral/middle-tier-experiment/` -- the recipe-vs-checklist insight is FOUNDATIONAL to the corpus but the middle-tier prompt is never quoted. |

### 2.2 MODERATE assumed context (reader can follow arguments but may miss nuance)

| Assumed Knowledge | Impact of Not Knowing |
|------------------|-----------------------|
| **The mechanism catalog has 18 mechanisms in 5 categories** | Reader can't evaluate claims about "per-category minimums" or "14 mechanisms deployed" |
| **The component library has 26 families** | "3/26 families used = CATASTROPHIC" loses its force without knowing what the other 23 are |
| **Tokens.css defines canonical color values** | Reader can't understand why "token alignment" (W-06, W-07 in Report 30) was a meaningful builder action |
| **The tension-composition SKILL.md exists and is 1,878 lines** | Claims about "skill invocation" being "DROPPED" are meaningless without knowing the skill |
| **The project uses a 6-layer ontology** | References to "Layer 1 identity" or "Layer 3 grammar" assume familiarity with the ontology structure |
| **"Sonnet" and "Opus" refer to Claude model tiers** | The corpus assumes the reader knows Sonnet is less capable/creative than Opus. Critical for understanding why model choice matters. |

### 2.3 LOW assumed context (nice to know but not blocking)

| Assumed Knowledge | Impact |
|------------------|--------|
| The project has been running across multiple sessions | Reader misses the iteration history but can follow current analysis |
| MEMORY.md tracks project state | Meta-context about how knowledge persists across sessions |
| The user has specific preferences (ephemeral folder rule, etc.) | Process context, not analytical content |

### 2.4 THE BOOTSTRAP PROBLEM

A fresh instance reading this corpus faces a **bootstrap problem**: the corpus is ABOUT the gap between specification and execution, but the corpus itself has a specification gap. The corpus tells you WHAT failed and WHY, but it assumes you already know WHAT WAS ATTEMPTED. To understand "the flagship scored 1.5/4," you need to know what was built, what the target was, who built it, and what scoring system was used -- all of which are assumed context.

The suggested READING ORDER for a fresh instance would be:
1. Both source prompts (provides the specification context)
2. File 00 (chronological context)
3. File 12 (metacognitive pathway -- the best single-file overview)
4. File 03 (reversals -- explains what changed and why)
5. File 29 (line-by-line crossref -- provides the most granular mapping)
6. Remaining files in any order

The corpus provides NO reading order guidance. A fresh instance would likely start with file 00 (the lowest number and labeled "CONVERSATION JOURNEY CONTEXT") -- which is the WORST starting point because it has the highest jargon density and the most assumed context.

---

## TEST 3: MISSING PREREQUISITE AUDIT

Files outside the pipeline-analysis directory that are referenced but not included.

### 3.1 Files DIRECTLY REFERENCED by filename/path

| Referenced File | Referencing Corpus File(s) | How Critical Is It? |
|----------------|---------------------------|---------------------|
| `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` | 00, 01, 02, 03, 29, 30 | **CRITICAL** -- one of the two source documents. Without it, half the cross-references are broken. |
| `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` | 00, 03, 04, 29, 30 | **CRITICAL** -- the other source document. |
| `ephemeral/flagship-retrospective/09-SYNTHESIS.md` | 03, 12 | **HIGH** -- the retrospective synthesis is heavily quoted in Report 03 and 12. Its root causes (RC-1 through RC-15) are the foundation of the entire remediation effort. |
| `ephemeral/remediation-audit/01-remediate-vs-rebuild.md` through `11-adversarial-challenge.md` | 03, 12, 30 | **MODERATE** -- these 11 audit reports are the source material for the enhanced remediation spec. The corpus ANALYZES them but a reader could follow the analysis without reading the originals. |
| `ephemeral/flagship-remediation/builder-changelog.md` | 30 | **HIGH** -- Report 30 is a line-by-line cross-reference of this file. Without it, Report 30's analysis is ungrounded. |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 01 (implied), 29 (implied) | **MODERATE** -- understanding "mechanisms" requires this catalog. Referenced indirectly. |
| `design-system/compositional-core/vocabulary/tokens.css` | 30 | **LOW** -- only needed to verify the W-06/W-07 token alignment actions. |
| `~/.claude/skills/tension-composition/SKILL.md` | 03, 29 | **LOW** -- referenced as something "DROPPED" by the remediation spec. Not needed to understand the analysis. |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 03, 29 | **MODERATE** -- contains the 48 PA questions that are frequently referenced but never listed. |

### 3.2 Files IMPLICITLY ASSUMED but never referenced by path

| Missing File | Why It's Needed | How a Reader Would Find It |
|-------------|-----------------|---------------------------|
| The flagship HTML file itself | To verify ANY claim about "the page has X" or "section S7 contains Y" | A reader would have to search the project for `.html` files and guess which one is "the flagship" |
| The middle-tier experiment prompt | To verify the recipe-vs-checklist hypothesis (was the middle-tier prompt really a "recipe"?) | Referenced as "~100 lines" but never quoted or located |
| The CD-006 HTML file | To verify claims about "CD-006 has 11 component types" or "10 grid layouts" | A reader could search for "CD-006" but might find multiple versions |
| The Mode 4 PA reports | To verify the "9/9 auditors flagged whitespace void" claim | Referenced as existing in `ephemeral/ceiling-experiment/_perceptual-audit/` but never in corpus |

### 3.3 MISSING PREREQUISITE SEVERITY

If a fresh instance had ONLY the 29 pipeline-analysis files (no source prompts, no other project files):

- **Could understand the HIGH-LEVEL narrative?** YES -- the corpus tells a coherent story about prompt failure and remediation.
- **Could reproduce the SPECIFIC findings?** NO -- without the source prompts, claims like "97 rules" or "23.7% sub-perceptual" cannot be verified.
- **Could ACT on the findings?** NO -- without the flagship HTML, the remediation spec, and the design system files, no actionable work is possible.
- **Could EXTEND the analysis?** PARTIALLY -- the analytical frameworks (recipe-vs-checklist, perception thresholds, propagation reliability) are well-documented enough to apply elsewhere.

**Verdict:** The corpus is a COMMENTARY layer that requires the underlying artifacts to be actionable. It is self-sufficient as analysis but not as a working reference.

---

## TEST 4: CONTRADICTION CONFUSION TEST

Places where different files in the corpus reach contradictory conclusions, and which conclusion a naive reader would reach.

### 4.1 EXPLICIT CONTRADICTIONS (files directly disagree)

| Contradiction | File A Says | File B Says | Which Would a Naive Reader Believe? |
|--------------|-------------|-------------|-------------------------------------|
| **Recipe thesis strength** | Report 03, 04, 12, 18, 24: Recipe format is THE key insight. "Everything flows from this." | Report 20: "Recipe-vs-checklist is OVERSTATED. The real distinction is concrete-vs-abstract." Report 26: "Three distinct insights are being collapsed into one." | **A naive reader would believe the recipe thesis** because it is stated more often (5+ files) and more emphatically. Report 20 and 26 are explicitly adversarial and frame themselves as challengers, which a naive reader might dismiss as "devil's advocate" rather than genuine correction. This is a PROBLEM because Report 20/26 are RIGHT that the thesis is overfit. |
| **Conviction language effectiveness** | Report 03: "Conviction language is cargo cult -- it makes the HUMAN feel better without changing AGENT output." | Report 13: "6 things the master prompt does BETTER than the remediation spec" (including conviction framing). Report 22: The conviction layer provides "why this matters" context that improves output quality. | **A naive reader would believe conviction is useless** because the claim is more dramatic and appears in a larger, more detailed file (Report 03 = 690 lines). Report 13 is only 247 lines and hedges its defense. This may be INCORRECT -- no A/B test exists. |
| **Master prompt quality** | Report 02: "42 failures (14 BLOCKING)." Report 23: "47% full conversion rate." | Report 01: "89% preservation rate -- the remediation preserved most of what the master prompt specified." Report 11: "P1-P11 philosophies all correctly instantiated, zero orphans." | **A naive reader would be confused.** Is the master prompt 89% good or 47% effective? Both are true (89% of foundations are PRESENT; only 47% FULLY CONVERT to visible CSS). But the framing creates an impression of contradiction. Report 01 emphasizes foundations preserved; Report 02 emphasizes failures. A reader encountering them in order (01 then 02) would experience whiplash. |
| **Remediation spec quality** | Report 30: "87% builder compliance rate." Report 04: "The remediation IS the recipe -- the metacognitive lesson was learned." | Report 30 (same file): "3 internal contradictions" (cool grays violating soul). Report 27: "50-line reproduction spec captures WHAT but not HOW or WHERE (20:1 gap)." | **A naive reader would believe the remediation spec is good** because 87% compliance sounds high. But the 3 internal contradictions and the 20:1 reproduction gap suggest significant problems. The positive framing comes FIRST in most files; the problems are buried deeper. |
| **N=1 vs N=2 concern** | Report 25: "N=1 problem is systemic -- every finding is based on a single flagship experiment." Report 28: "Cross-agent agreement is 100% on all 10 major findings." | These two claims are not actually contradictory (agreement among analysts looking at the same single experiment is expected) but a naive reader would see "100% agreement" and assume the findings are robust. | **A naive reader would be falsely reassured by 100% agreement.** Report 25 correctly identifies that agreement among analysts examining the same artifact does not validate the findings against OTHER artifacts. 100% agreement on N=1 is NOT the same as reproducibility across N=many. |

### 4.2 IMPLICIT CONTRADICTIONS (tensions never acknowledged)

| Tension | Files Involved | Why It's Confusing |
|---------|---------------|-------------------|
| **The corpus says "binary rules achieve 100% compliance" AND "the flagship failed despite 97 binary rules."** | Reports 02, 18, 21, 24 | If binary rules achieve 100% compliance, and the prompt had 97 binary rules, why did it fail? The answer (sub-perceptual compliance ≠ quality) is eventually explained but the two claims coexist without cross-reference for hundreds of lines. |
| **The corpus praises "recipe format" but the remediation recipe produced 2.5/4, not 4/4.** | Reports 03, 04, 12, 26 | The recipe format is presented as THE solution, but it only improved PA-05 by 1.0 point (1.5 -> 2.5). The middle-tier recipe produced 4/4. Why did the remediation recipe produce only 2.5/4? Report 26 notes this gap ("remediation predictions exceeded actual results") but the thesis-level files (03, 04, 12) don't address it. |
| **The corpus says "mandatory recipes eliminate absence" AND "absence as restraint is a legitimate design principle."** | Report 03 (A7), Report 13, Report 24 | Report 03 explicitly reverses the master prompt's "absence as restraint" philosophy. But Report 13 and 24 argue that SOME restraint is valuable. The tension between "deploy everything" and "know when to stop" is never resolved. |
| **Single agent vs multi-agent recommendation** | Report 03 (A2), Report 20, Report 25 | Report 03 endorses single-agent execution. Report 20 notes that CD-006 succeeded WITH multi-agent communication. Report 25 flags that the single-agent recommendation is based on N=1 failure of multi-agent. The corpus never resolves whether single-agent is genuinely better or just a failure-response. |

### 4.3 WHICH CONTRADICTIONS WOULD CAUSE WRONG DECISIONS?

If a fresh instance used this corpus to design the NEXT experiment:

1. **Recipe thesis overfit** -- The instance would use recipe format exclusively, missing the nuance that concrete-vs-abstract matters more than recipe-vs-checklist. **Impact: MEDIUM** (recipe format still works; the nuance refines but doesn't invalidate).

2. **Single agent assumption** -- The instance would use a single agent, missing the evidence that multi-agent + working communication (CD-006 model) outperforms both. **Impact: HIGH** (choosing single-agent when multi-agent-with-communication is available sacrifices quality).

3. **Conviction language dismissal** -- The instance would omit all conviction/motivation framing, based on Report 03's "cargo cult" claim. **Impact: UNKNOWN** (no A/B test exists; the claim may be wrong).

4. **100% agreement as validation** -- The instance would treat the corpus findings as highly validated due to "100% cross-agent agreement," missing the N=1 caveat. **Impact: HIGH** (overconfidence in findings that may not generalize).

---

## TEST 5: "BUILD THE PIPELINE" TEST

Predicting specific failure modes if a fresh Claude instance tried to build from these files alone.

### 5.1 Scenario: "Build a flagship page using the pipeline analysis as your guide"

A fresh instance reading the 29 files would attempt to:

**Step 1: Understand what to build.**
FAILURE POINT: The corpus never states what the flagship page IS. A reader knows it's "a web page built by AI agents" but not what content it contains, who the audience is, or what the design system looks like. The reader would have to GUESS or ask for clarification.

**Step 2: Choose between master prompt and remediation spec.**
FAILURE POINT: The corpus strongly biases toward the remediation spec (it "fixed" the master prompt's failures). A fresh instance would likely choose remediation-style recipe format. But the remediation spec is CONTENT-SPECIFIC to the `07-intentionality.html` page. Using its CSS values for different content would produce nonsensical results (e.g., 12 zone backgrounds for a page with 6 sections).

**Step 3: Apply the recipe-vs-checklist insight.**
PARTIAL SUCCESS: A fresh instance could construct a recipe-format prompt. But the corpus provides no template or example of a GENERALIZED recipe. The only concrete recipe is the remediation spec, which is a one-use fix. The corpus identifies the need for a "recipe GENERATOR" (Report 12, 09-SYNTHESIS.md) but provides no implementation.

**Step 4: Apply perception thresholds.**
SUCCESS: The perception threshold table is well-defined (background >= 10 RGB, font-size >= 2px, etc.). A fresh instance could incorporate these into any new prompt.

**Step 5: Apply multi-coherence verification.**
PARTIAL SUCCESS: The concept of verifying channel shifts at section transitions is well-explained. But the specific threshold (>= 3 channels per transition, >= 5 at zone boundaries) is tied to the flagship's content structure. A different page might need different thresholds.

**Step 6: Deploy agents.**
FAILURE POINT: The corpus provides contradictory guidance. Report 03 endorses single-agent. Reports 20 and 25 note that multi-agent + communication is better. The corpus never provides a decision framework for when to use single vs multi-agent.

**Step 7: Verify output.**
PARTIAL SUCCESS: The Phase 8 verification checklist (10 items) is transferable. But the Mode 4 PA deployment (9 auditors, 48 questions) is described as "DROPPED" by the remediation, so a fresh instance might skip it -- losing the most thorough quality assurance method.

### 5.2 Predicted Failure Modes

| Failure Mode | Probability | Why |
|-------------|-------------|-----|
| **Content-specific CSS applied to wrong content** | HIGH (70%) | The corpus's most detailed CSS guidance (Report 29, 30) is specific to `07-intentionality.html`. A fresh instance would likely copy these patterns. |
| **Single agent used when multi-agent needed** | MODERATE (50%) | The corpus biases toward single-agent but the evidence supports multi-agent for creative composition tasks. |
| **Mode 4 PA skipped** | HIGH (60%) | The corpus describes Mode 4 PA as "DROPPED" by the remediation. A fresh instance would likely follow this precedent. |
| **Conviction language omitted** | HIGH (70%) | Report 03 explicitly dismisses conviction as "cargo cult." No counter-evidence is presented with equal force. |
| **Recipe format used without generalization** | HIGH (80%) | The corpus identifies the need for generalized recipes but provides no template. A fresh instance would either copy the remediation's specific recipe or attempt to generalize without guidance. |
| **Sub-perceptual CSS still generated** | LOW (20%) | This is the corpus's best-documented failure mode with the clearest prevention mechanism (perception thresholds). |
| **S-09 stacking loophole repeated** | LOW (15%) | The stacking loophole is thoroughly documented with the fix (total gap verification). |
| **Accessibility features omitted** | MODERATE (40%) | Accessibility is documented but positioned as Phase 7 (last before verification). A fresh instance under time pressure might prioritize earlier phases and skip Phase 7. |

### 5.3 The "Telephone Game" Within the Build

If a fresh instance reads the corpus and writes a prompt from it, the information passes through 4 layers:

```
Original Design System → Master Prompt → Remediation Spec → Pipeline Analysis → New Prompt
```

At each layer, information is compressed and some is lost:

| Layer Transition | Compression Ratio | What Gets Lost |
|-----------------|-------------------|----------------|
| Design system → Master prompt | 50:1 (MEMORY.md figure) | Vocabulary richness, case study detail, research nuance |
| Master prompt → Remediation spec | ~3:1 (963 lines → ~300 lines of novel content) | 69 of 97 rules dropped (71%), all metaphor gates, all communication protocols |
| Remediation spec → Pipeline analysis | 1:8 EXPANSION (1,025 lines → ~8,000 lines of analysis) | Nothing lost; information is ADDED. But the expansion is analytical, not operational. |
| Pipeline analysis → New prompt (hypothetical) | 8,000:??? compression | All analytical nuance would be lost. A new prompt would be ~100-300 lines. |

**Total telephone game loss:** A new prompt derived from the corpus would inherit at most 30% of the original design system's richness. The corpus ANALYZES the loss but cannot prevent it -- the analysis itself is not an executable prompt.

---

## TEST 6: "TELEPHONE GAME" TEST

Measuring information loss between the source prompts and the analysis layer.

### 6.1 Master Prompt → Corpus Representation

| Master Prompt Feature | Corpus Coverage | Fidelity |
|----------------------|----------------|----------|
| 97 rule IDs (S, U, C, MC, SC, MG, P, CT, RP, CP) | Report 29 maps ALL 97 rules | HIGH -- every rule is traced to its remediation counterpart or noted as DROPPED. Best coverage in the corpus. |
| Conviction sandwich (Sections A, D) | Report 03 (Category D), Report 22, Report 18 | MODERATE -- the STRUCTURE is described but the actual conviction LANGUAGE is barely quoted. A reader knows it exists but can't reconstruct it. |
| Authoritative parameter table (30 params) | Report 29 (Part 2, final section) | HIGH -- all 30 parameters listed with remediation presence. |
| Build sequence (5 passes) | Report 03 (B4), Report 22 | LOW -- the 5-pass structure is mentioned but the specific passes are not consistently listed. Some files say "skeleton → mechanism → metaphor → intentionality → PA" while others use different names. |
| Agent roster (C1, 8 roles) | Report 03 (A2) | MODERATE -- the roles are listed but the specific reading lists and capability assignments are not. |
| Gate sequence (C3, Gates 0-5) | Report 03 (A3, B2), Report 29 | MODERATE -- gates are listed but the specific kill criteria are abbreviated. |
| PA deployment (C4, C7) | Report 03 (B1), Report 29 | LOW -- described as "Mode 4 PA with 9 auditors" but the actual question assignments, tier structure, and deployment protocol are lost. |
| Reference library (Section E) | Report 29 (final section) | MODERATE -- per-agent file routing is listed but the actual file contents are not described. |

### 6.2 Remediation Spec → Corpus Representation

| Remediation Spec Feature | Corpus Coverage | Fidelity |
|--------------------------|----------------|----------|
| Phase 0 deallocation (lines to delete) | Reports 04, 06, 08, 12, 30 | HIGH -- the specific CSS blocks to delete are described with line counts. Report 30 traces each deletion to its audit source. |
| Phase 1 HTML restructuring (47 changes) | Report 06, 30 | MODERATE -- the categories of change (skip link, ARIA, callouts, grids) are listed but not all 47 individual changes. |
| Phases 2-6 CSS recipes (exact values) | Report 29, 30 | HIGH for zone backgrounds (all 12 values listed in Report 30). MODERATE for other phases (values summarized but not all listed). |
| Phase 7 accessibility (7 features) | Reports 04, 10, 29 | MODERATE -- features listed by name but CSS not reproduced. |
| Phase 8 verification (checklist) | Report 29 | LOW -- described as "10-item self-check" but the actual 10 items are not listed. |
| Perception thresholds (8 properties) | Reports 05, 08, 12 | HIGH -- the threshold table is reproduced multiple times across files. Best-preserved remediation content. |
| Root cause resolution matrix (15 RCs) | Reports 03, 04, 29 | HIGH -- all 15 root causes listed with resolution status. |

### 6.3 Information GAINED by the Analysis Layer

The corpus adds significant value beyond what the source prompts contain:

| New Information | Source | Value |
|----------------|--------|-------|
| **23.7% sub-perceptual quantification** | Report 06 (CSS budget analyst) | CRITICAL -- this number does not exist in either source prompt. It was computed by analyzing the flagship's actual CSS output. |
| **ALL 11 transitions exceed 120px** | Report 09 (coherence designer) | HIGH -- the specific gap measurements at each section boundary are new data. |
| **3/26 component library utilization** | Report 02 (component auditor) | MODERATE -- the component library usage rate is a new metric. |
| **Builder deviation inventory (17 deviations)** | Report 30 (changelog crossref) | HIGH -- the specific ways the builder departed from the remediation spec are documented nowhere else. |
| **87.6% cross-agent consistency rate** | Report 28 | MODERATE -- methodological validation of the analysis itself. |
| **The 4-layer ideal prompt architecture** | Reports 18, 22 | MODERATE -- a synthesis not present in either source prompt. |
| **Propagation reliability ranking (10 levels)** | Report 21 | HIGH -- a novel framework for predicting which types of instructions will be followed. |

### 6.4 Information LOST Between Sources and Analysis

| Lost Information | Where It Existed | Why It Was Lost |
|-----------------|-----------------|-----------------|
| **Actual CSS code blocks** | Remediation spec Phases 2-7 | The analysis describes WHAT the CSS does but rarely reproduces the actual code. Report 30 reproduces some values in comparison tables but not the full code blocks. |
| **The specific 48 PA questions** | Perceptual-auditing SKILL.md | Never listed in the corpus. Frequently referenced by number but the questions themselves are absent. |
| **The mechanism catalog content** | design-system/compositional-core/grammar/mechanism-catalog.md | "14 mechanisms deployed" is stated repeatedly but the actual mechanism names, descriptions, and CSS patterns are not in the corpus. |
| **The conviction language itself** | Master prompt Sections A and D | Report 03 quotes 3-4 lines. The remaining ~196 lines of conviction content are summarized but not reproduced. A reader cannot evaluate whether conviction language is "cargo cult" without reading it. |
| **The component library CSS** | design-system/compositional-core/components/merged-components.css | "26 families" is cited but the actual CSS is absent. A reader cannot evaluate "3/26 utilization" without knowing what the other 23 families offer. |
| **The builder's actual HTML/CSS output** | ephemeral/flagship-remediation/ (multiple files) | Report 30 traces builder actions but the actual output files are not in the corpus. |

---

## TEST 7: SELF-REFERENTIAL PARADOX

Does the corpus contain enough self-awareness about compression-causing-failure to prevent repeating that failure?

### 7.1 The Paradox Stated

The corpus's CENTRAL FINDING is that the master prompt failed because it compressed 337 research findings into "sample 2-4 mechanisms" -- a 50:1 compression that destroyed the information needed for quality output. Report 12 calls this "IRREDUCIBLY ITERATIVE" and warns that "compression destroys information."

The corpus itself is now the analytical layer that will be compressed into the NEXT prompt. The pipeline-analysis directory contains ~8,500 lines of analysis. If this corpus is compressed at the same rate as the master prompt compressed its inputs (50:1), the result would be ~170 lines of instruction -- losing 98% of the analytical content.

### 7.2 Does the Corpus Acknowledge This Paradox?

**YES, partially.** Several files explicitly discuss the compression problem:

- Report 12, Part 9.3: "Compression ratio 7.5:1 -- MUCH better than the original pipeline's 50:1. The less you compress, the more information survives."
- Report 19: "You cannot specify what you have not calibrated." The 5-phase irreducible pipeline (DIAGNOSE→CALIBRATE→SPECIFY→EXECUTE→MEASURE) explicitly warns against skipping the calibration step.
- Report 24: "The 75-line builder cap is the most honest line in the master prompt" -- acknowledging that agents have limited context absorption capacity.
- Report 27: "50-line reproduction spec captures WHAT but not HOW or WHERE (20:1 gap)." -- quantifying the compression loss for the remediation specifically.
- Report 20: "Survivorship bias 30-40% iteration / 60-70% spec" -- acknowledging that the spec's contribution is real but iteration is also necessary.

**BUT the corpus does NOT provide a PREVENTION MECHANISM.** It warns about compression but offers no template, protocol, or tool for compressing the analysis into a prompt without information loss. The closest attempt is Report 18 and 22's "4-layer ideal prompt architecture":

```
Layer 0: Orchestration (team topology, communication protocol)
Layer 1: Execution (recipe-format action steps)
Layer 2: Verification (binary rules, perception thresholds)
Layer 3: Context (conviction, rationale -- as comments, not instructions)
```

This architecture is proposed by 2 files (18, 22) but NEVER IMPLEMENTED. No file in the corpus actually constructs a prompt using this 4-layer architecture. The architecture remains theoretical.

### 7.3 Specific Self-Referential Failures

| Failure | Description | Which Files Exhibit It |
|---------|-------------|----------------------|
| **The corpus recommends "recipe format" but IS a checklist** | The 29 files are organized as a catalog of analyses, not as a sequenced recipe for building the next prompt. There is no "Phase 1: Read X. Phase 2: Do Y." A fresh instance must read all 29 files and synthesize them independently -- exactly the task the corpus says LLMs fail at. | All files |
| **The corpus warns about jargon but uses undefined jargon** | See Test 1. The corpus identifies "50:1 compression" as a failure mode but its own files use 15+ undefined terms. | 00, 01, 11, 29, 30 (highest jargon density) |
| **The corpus identifies "N=1 concern" but is itself N=1** | Report 25 flags that all findings are based on a single flagship experiment. The corpus itself is based on a single remediation attempt. None of the findings have been validated against a second attempt. | 25, 26, 28 |
| **The corpus says "quantify, don't qualify" but many findings are qualitative** | "Recipe format works better" is qualitative. "87% compliance" is quantitative. The corpus mixes both, favoring qualitative narrative over quantitative evidence for its most important claims. | 03, 04, 12, 18 (narrative-heavy) vs 21, 23, 28, 29 (quantitative) |
| **The corpus warns about "echo chamber" but forms one** | Report 26 explicitly identifies that "reports 17-24 form an echo chamber." But reports 25-28 (the bias challengers and reproducibility tests) also converge on the same conclusions. The adversarial agents CHALLENGED the thesis but did not REFUTE it, which a naive reader might interpret as validation rather than as evidence of thesis robustness. | 25, 26, 27, 28 |

### 7.4 The Meta-Compression Test

**Question:** If this 29-file corpus were compressed into a 100-line "Key Takeaways" document, which findings would survive and which would be lost?

**Would survive (high consensus, dramatic, memorable):**
1. Recipe format > checklist format
2. Sub-perceptual CSS wastes 23.7% of budget
3. Perception thresholds: background >=10 RGB, font-size >=2px, etc.
4. S-09 stacking loophole (individual values pass, totals fail)
5. Deallocation before allocation (Phase 0)
6. Binary rules achieve 100% compliance; judgment rules achieve ~0%
7. Container width 940-960px is non-negotiable

**Would be lost (nuanced, conditional, challenging):**
1. Recipe-vs-checklist is OVERSTATED; concrete-vs-abstract is the deeper distinction (Report 20, 26)
2. Conviction language's effect is UNTESTED, not disproven (Report 03 claims "cargo cult" without evidence)
3. Multi-agent + communication may still be optimal (CD-006 achieved 39/40 with messaging)
4. 100% cross-agent agreement is NOT reproducibility validation (N=1 caveat)
5. The remediation recipe produced 2.5/4, not 4/4 -- the recipe thesis has limits
6. Layer F (Intentionality) is ENTIRELY absent from the analysis (Report 27)
7. The builder exercised 12% judgment, all on soul-compliance corrections (Report 27, 30)
8. The 4-layer ideal prompt architecture (Reports 18, 22) -- proposed but never tested
9. Channel taxonomy is inconsistent across documents (Report 28, divergence point #1)
10. CCS was never actually computed during any experiment (Report 10, 29)

**Compression prediction:** The "would survive" list matches the narrative the corpus WANTS to tell. The "would be lost" list contains the corpus's own self-corrections, caveats, and unresolved questions. **Compression would destroy the self-awareness layer while preserving the thesis layer** -- exactly the pattern that caused the master prompt's failure.

### 7.5 Prevention Score

On a scale of 1-10, how well does the corpus prevent the compression-failure it diagnoses?

**Score: 4/10**

- **Diagnosis: 9/10** -- The corpus brilliantly diagnoses the compression problem. Multiple files explain HOW and WHY information loss causes quality degradation.
- **Prevention: 2/10** -- The corpus provides almost no tools for preventing the problem. No compression protocol. No reading order. No "must-preserve" list. No template for converting analysis into executable prompts.
- **Self-application: 3/10** -- The corpus itself exhibits several of the failure modes it diagnoses (jargon without definition, qualitative over quantitative, echo chamber dynamics, N=1 confidence).

**The paradox is real and unresolved.** The corpus knows that compression destroys information. It knows that its own contents will be compressed. It does not provide the mechanism for lossless (or loss-minimizing) compression. The next team to read this corpus will face the same translation gap the master prompt's builders faced: understanding WHAT the rules are without knowing HOW to apply them.

---

## SYNTHESIS: THE SEVEN TESTS COMBINED

### What a Fresh Instance Would Get RIGHT

1. **The perception threshold table** is the corpus's most transferable artifact. Clear numbers, consistently stated, directly applicable.
2. **The deallocation-before-allocation principle** is well-explained and generalizable.
3. **The S-09 stacking loophole** is thoroughly documented with a clear fix.
4. **The 71% rule-drop rate** (69/97 master rules dropped by remediation) is a stark quantitative finding.
5. **The builder deviation patterns** (soul compliance overriding spec values) are well-documented.

### What a Fresh Instance Would Get WRONG

1. **Recipe format as universal solution** -- would over-apply the recipe insight without the concrete-vs-abstract nuance.
2. **Single agent as default** -- would skip multi-agent architecture based on the flagship's communication failure.
3. **Conviction language as waste** -- would omit motivational framing based on an untested claim.
4. **PA-05 4/4 as achievable via recipe alone** -- would expect the recipe format to reach DESIGNED without understanding that the middle-tier's 4/4 and the remediation's 2.5/4 suggest recipe format has diminishing returns.
5. **The corpus's findings as generalizable** -- would apply flagship-specific insights (12 sections, 3 zones, specific CSS values) to different content.

### The Corpus's Fundamental Weakness

The corpus is an excellent POST-MORTEM but a poor INSTRUCTION MANUAL. It explains what went wrong and why, but it does not tell the reader what to DO with this knowledge. The closest thing to actionable guidance is:

- Report 03's 27 reversals (tells you what changed but not how to apply the changes)
- Report 18/22's 4-layer architecture (tells you what the ideal prompt looks like but doesn't build one)
- Report 12's 5-phase pipeline DIAGNOSE→CALIBRATE→SPECIFY→EXECUTE→MEASURE (tells you the process but not the content)
- Report 21's propagation reliability ranking (tells you which instruction types work but not which instructions to write)

A fresh instance would need to SYNTHESIZE these four frameworks into an actionable protocol. The corpus does not perform this synthesis. That gap is the corpus's single biggest weakness -- and the single biggest opportunity for the next phase of work.

### Recommended Actions

1. **Create a GLOSSARY file** (file 31?) that defines all 15+ undefined terms with file paths to their source definitions.
2. **Create a READING ORDER file** (file 32?) that sequences the 29 files for optimal fresh-instance comprehension.
3. **Create a GENERALIZED RECIPE TEMPLATE** (file 33?) that extracts the transferable elements from the remediation's recipe format into a content-agnostic template.
4. **Create a COMPRESSION PROTOCOL** (file 34?) that specifies which findings MUST survive compression and which are safely lossy.
5. **Resolve the Recipe Thesis** -- design an experiment that tests concrete-vs-abstract independently from recipe-vs-checklist format.
6. **Resolve the Conviction Question** -- design an A/B test with and without conviction framing on the same task.
7. **Explain the file numbering gaps** -- files 14, 15, 16 are missing with no explanation.

---

## APPENDIX A: FILE-BY-FILE INGESTION DIFFICULTY RATING

How hard each file is for a fresh instance to understand without prior context.

| File | Lines | Difficulty (1-5) | Reason |
|------|-------|------------------|--------|
| 00 | ~85 | **5 (HARDEST)** | Highest jargon density. Uses ALL undefined terms. First file a reader would encounter. |
| 01 | ~696 | 4 | Dense cross-referencing to master prompt rules. Requires master prompt as reference. |
| 02 | ~404 | 3 | Failure taxonomy is self-contained but root cause numbering assumes prior knowledge. |
| 03 | ~690 | 3 | Long but well-structured. The 27 reversals are self-explanatory. Best standalone file in the corpus. |
| 04 | ~458 | 3 | Requires knowledge of the 10 takeaways from the retrospective (not in this corpus). |
| 05 | ~453 | 3 | CSS philosophy discussion is accessible to anyone with CSS knowledge. |
| 06 | ~468 | 3 | HTML restructuring is concrete and self-explanatory. |
| 07 | ~493 | 3 | Process topology requires understanding of multi-agent architecture. |
| 08 | ~485 | 2 | Perception model shift is well-explained with minimal jargon. |
| 09 | ~420 | 3 | Content agnosticism requires understanding of what "content" means in this context. |
| 10 | ~440 | 4 | Coherence model requires understanding of channels, scales, and mechanisms. |
| 11 | ~577 | 4 | Bidirectional mapping requires deep knowledge of both source prompts. |
| 12 | ~677 | 2 | **BEST STARTING FILE.** Narrative structure, explains discovery chain, low jargon. |
| 13 | ~247 | **1 (EASIEST)** | Zero-context fresh-eyes review. Intentionally written for a reader with no prior knowledge. |
| 17 | ~406 | 3 | Decision architecture is self-contained with clear before/after framing. |
| 18 | ~534 | 3 | Verb taxonomy is concrete and quantitative. Accessible. |
| 19 | ~298 | 2 | Metacognitive analysis is abstract but well-structured. |
| 20 | ~310 | 2 | Adversarial review is designed to challenge, so it re-explains what it challenges. |
| 21 | ~499 | 3 | Quantitative verb analysis. Accessible if you know what the two prompts are. |
| 22 | ~416 | 3 | Structural comparison. Well-formatted tables reduce difficulty. |
| 23 | ~404 | 4 | Propagation analysis requires understanding of rule namespaces and channels. |
| 24 | ~400 | 3 | Fundamental differences. Abstract but well-argued. |
| 25 | ~421 | 3 | Bias challenger. Re-explains what it challenges. |
| 26 | ~546 | 3 | Dimensional bias challenger. More specialized but self-contained. |
| 27 | ~516 | 3 | Reproducibility test. Concrete methodology makes it accessible. |
| 28 | ~512 | 2 | Consistency analysis. Quantitative and well-structured. |
| 29 | ~613 | 4 | Line-by-line crossref requires BOTH source prompts as reference. |
| 30 | ~611 | 4 | Changelog crossref requires the builder changelog AND both source prompts. |

**Recommended reading order for a fresh instance:**
1. **13** (easiest, zero-context overview)
2. **12** (metacognitive pathway, narrative structure)
3. **00** (chronological context -- now that terms are familiar)
4. **03** (the 27 reversals -- what changed and why)
5. **08** (perception model -- the most important single shift)
6. **05** → **06** → **07** → **10** (the four shift analyses)
7. **02** → **01** (failures, then foundations -- reverse order of numbering)
8. **29** → **30** (the two cross-references -- LAST, as they require everything else)
9. **17-28** (the deep analyses and bias challenges -- in any order)
10. **04** → **09** → **11** (remaining specialized analyses)

---

## APPENDIX B: THE MISSING FILES (14, 15, 16)

The corpus has no files numbered 14, 15, or 16. No file in the corpus explains this gap. Possible explanations:

1. **Files were created but deleted** -- early analyses that were superseded.
2. **Files were created in a different directory** -- the numbering may span multiple directories.
3. **Files were planned but never written** -- the team ran out of context or time.
4. **The numbering is not sequential** -- files were written by different agents who chose their own numbers.

A fresh instance would notice this gap and wonder if critical analysis is missing. The gap creates an impression of incompleteness even if no files were actually lost.

---

## APPENDIX C: CROSS-REFERENCE DENSITY MAP

How many times each file references other files in the corpus.

| File | Outbound References | Inbound References | Net Flow |
|------|--------------------|--------------------|----------|
| 12 (metacognitive) | 11 | 3 | +8 (MOST referencing) |
| 03 (reversals) | 9 | 5 | +4 |
| 29 (line-by-line) | 2 | 6 | -4 (MOST referenced) |
| 30 (changelog) | 3 | 4 | -1 |
| 25 (bias core) | 10 | 2 | +8 |
| 26 (bias dimensional) | 7 | 2 | +5 |
| 28 (consistency) | 8 | 3 | +5 |
| 00 (context) | 0 | 7 | -7 (MOST referenced, never references others) |
| 13 (fresh-eyes) | 0 | 4 | -4 (zero-context by design) |

**Hub files** (most referenced, serve as cross-reference anchors): 00, 29, 30
**Spoke files** (reference many others, are reference anchors for synthesis): 12, 25, 26, 28
**Leaf files** (self-contained, minimal cross-referencing): 13, 08, 19

---

## APPENDIX D: QUANTITATIVE FINDINGS INVENTORY

Every quantitative claim in the corpus, with its source and verification status.

| Claim | Value | Source File | Independently Verified? |
|-------|-------|-------------|------------------------|
| Master prompt rule count | 97 | Reports 01, 02, 03, 29 | YES (can be counted in source prompt) |
| Remediation spec line count | 1,025 | Reports 03, 04, 29 | YES (can be counted in source prompt) |
| Sub-perceptual CSS percentage | 23.7% (233 lines) | Report 06, 12, 27 | NO (requires line-by-line CSS categorization; only one agent performed this) |
| All 11 transitions exceed 120px | 11/11 | Report 09, 12 | NO (only one agent computed transition gaps) |
| Component library utilization | 3/26 families | Report 02 | NO (only one agent audited components) |
| Cross-agent agreement | 100% (0 disagreements) | Report 28 | YES (Report 28 verified across all reports) |
| Terminological consistency | 91% | Report 28 | YES (computed programmatically in Report 28) |
| Builder compliance rate | 87% | Report 30 | YES (traced line-by-line in Report 30) |
| Rule drop rate | 71% (69/97) | Report 29 | YES (every rule mapped in Report 29) |
| Content-dependent percentage | 71% | Report 27 | NO (single agent's estimate) |
| Master prompt foundations preserved | 89% | Report 01 | DEBATABLE (Report 25 challenges this as a counting exercise) |
| Propagation full conversion | 47% master, 54% remediation | Report 23 | NO (single agent's trace of 30 rules) |
| Constraint:action ratio | 3.0:1 master, 0.32:1 remediation | Report 18 | NO (single agent's verb categorization) |
| Negation density ratio | 5.4x higher in master | Report 21 | NO (single agent's count) |
| PA-05 before/after | 1.5/4 → 2.5/4 | Reports 03, 12, 30 | YES (PA conducted by separate team) |
| CSS budget before/after | 984 → ~980 lines | Report 12, 30 | YES (can be counted in output files) |
| Total reversals | 27 | Report 03 | NO (single agent's categorization) |
| Compression ratio (analysis:spec) | 7.5:1 | Report 12 | YES (line counts are verifiable) |
| Builder deviations | 17 total (9 justified, 3 significant, 5 creative) | Report 30 | NO (single agent's classification) |
| Spec internal contradictions | 3 | Report 30 | YES (the cool-gray soul violations are verifiable) |

**Verification rate:** 11 of 20 quantitative claims (55%) can be independently verified from source materials. The remaining 45% rely on single-agent analysis without independent replication.

---

**END OF ADVERSARIAL INGESTION TEST**

**Statistics:**
- Total corpus files read: 29 + 2 source prompts
- Total approximate corpus size: ~14,000 lines (~900K characters)
- Tests conducted: 7
- Jargon terms audited: 30+ (15 undefined, 5 with competing definitions)
- Assumed context items identified: 18 (8 critical, 6 moderate, 4 low)
- Missing prerequisite files: 9 directly referenced, 4 implicitly assumed
- Contradictions documented: 4 explicit, 4 implicit
- Predicted failure modes: 8 (3 HIGH, 3 MODERATE, 2 LOW probability)
- Self-referential paradox score: 4/10 (excellent diagnosis, poor prevention)
- Quantitative claims inventoried: 20 (55% independently verifiable)
- Recommended actions: 7
