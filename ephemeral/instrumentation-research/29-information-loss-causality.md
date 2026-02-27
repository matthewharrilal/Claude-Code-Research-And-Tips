# Information Loss Causality: Skills vs Pipeline vs System

**Date:** 2026-02-27
**Question:** Was the information loss that motivated migrating from skill invocation to artifact embedding caused by bad system content, not by the invocation pattern itself?

---

## A. WHAT WAS ACTUALLY LOST

The migration from skill invocation to artifact embedding happened across two transitions. Tracing each:

### Transition 1: TC Skill -> Pipeline Reimplementation

The TC skill's 1,649-line pipeline was replaced by three pipeline components: Content Analyst (freeform tension identification), Brief Assembler (template fill-in), and Builder (recipe-following). What was lost:

| TC Content | Pipeline Replacement | What Died |
|-----------|---------------------|-----------|
| Phase 1: 14-axis questioning (FEEL/UNDERSTAND/DO/BECOME + 9 more) | Content Analyst's freeform "content tensions" | Structured methodology. The analyst identifies tensions ad hoc instead of through systematic axis-by-axis questioning. |
| Phase 2: Addition/BECAUSE/SUBSTITUTION tests | MANIFEST mode selection (APPLIED vs COMPOSED) | Diagnostic rigor. Pipeline tests for "heterogeneity + metaphor viability" — a property of the CONTENT. TC tested whether tension was GENUINE — a property of the content-system RELATIONSHIP. |
| Phase 3: 500-line metaphor derivation with candidate scoring | 10 lines in TC brief template ("Structural Metaphor" field) | The entire derivation trail. Pipeline metaphors appear as claims ("the metaphor is geological") with no proof of systematic evaluation. Flagship audit (file 07) confirmed: "metaphor may have been derived OR pattern-matched — without derivation deliverables, there is no way to distinguish." |
| Phase 3.5: Perceptual risk assessment | Not in pipeline | The insight that structural richness does not predict visual quality — PROVEN by own data — has no operational presence in the pipeline's build path. |
| Discovery bias warning (lines 6-24) | Not in pipeline | The metacognitive guard "you are CONSTRUCTING, not DISCOVERING" is absent from every builder-facing document. |

### Transition 2: PA Skill -> 6 Artifact Files

The PA skill's 774 lines were superseded by 6 artifact files totaling ~1,600 lines. This was a SUPERSET migration — the artifacts contain everything the skill had plus deployment architecture, weaver protocol, Mini-PA mode, and 41 additional questions. Nothing was "lost" in the traditional sense.

But something was GAINED that shouldn't have been: the 41 new questions include all 9 Tier 5 questions (fully system-specific), expanded spatial judgment questions calibrated to this aesthetic, and metaphor ideology questions that only make sense within the compositional intelligence framework. The migration didn't just preserve the skill — it amplified its biases.

### The Real Information Loss

The loss was NOT skill content failing to reach downstream agents. It was **TC's structured methodology being replaced by freeform alternatives**, and **PA's biases being amplified rather than filtered during expansion**.

Specifically:
1. Multi-axis questioning (structured) replaced by freeform tension identification (unstructured)
2. Tension derivation with diagnostic tests replaced by mode selection based on content properties
3. Metaphor candidate scoring (7-dimension composite) replaced by claim-without-derivation
4. Perceptual risk assessment dropped entirely from the build path

---

## B. ROOT CAUSE ANALYSIS

Five hypotheses. Evidence for each.

### Hypothesis 1: Skill Invocation Pattern (Inherent Limitation)
**Verdict: MINOR CONTRIBUTOR.** The skills were never invoked. Zero Skill tool calls across 5 builds (file 27). The Flagship prompt told agents "read SKILL.md" but provided no time, structure, or deliverable requirements to execute the 27-step TC pipeline. This is a USAGE failure, not an invocation-pattern failure. The pattern was never tested.

### Hypothesis 2: Bad System Design (Contradicted Constraints Creating Noise)
**Verdict: MAJOR CONTRIBUTOR.** ~60% of skill content rests on unvalidated foundations (file 28). A 1,649-line skill where 990 lines encode unvalidated soul constraints is not a tool an agent can execute efficiently. The agent reads 1,649 lines but only ~660 contain universal methodology. The rest is noise the agent must parse, comply with, and potentially conflict-resolve against. The skill's LENGTH is itself a product of system contamination — strip the soul constraints and it's ~400 lines. At 400 lines, it fits in context alongside content. At 1,649, it competes with content for attention.

### Hypothesis 3: Context Window Limitations
**Verdict: MAJOR CONTRIBUTOR, but downstream of Hypothesis 2.** The skills were too large FOR THE WRONG REASONS. TC at 1,649 lines + PA at 774 lines + content + reference files = an agent reading 5,000+ lines before writing CSS. But 60% of that volume is soul-constraint implementation, not methodology. The context pressure was real — but it was caused by skill bloat from system contamination, not by the methodology itself.

### Hypothesis 4: Compression Artifacts (Good Information Compressed Alongside Bad)
**Verdict: THIS IS WHAT HAPPENED.** The compression chain (file 14) shows 41,025 lines compressed to 3,774 lines reaching the builder (10.9:1). But the compression was indiscriminate. Vocabulary (tokens, mechanisms, components) survived at 1:1 because it was delivered as direct file reads. Fluency (WHY these tools, HOW to combine them) was eliminated because it was mixed with soul-constraint justifications, personality percentages, and banned metaphor families. The pipeline couldn't separate the 8 genuine ideas from the 2,200 lines of system-specific implementation, so it either preserved everything (for PA) or replaced everything (for TC).

### Hypothesis 5: Too Many Handoff Points
**Verdict: MODERATE CONTRIBUTOR.** File 14 maps 3 compression modes: DIRECT (1:1, works), COMPRESSED (15:1, loses conditional rules and evidence), ELIMINATED (infinite, kills provenance). The handoffs aren't the problem — the problem is that each handoff forces a compression decision, and when the signal-to-noise ratio is 40:60, compressors either preserve noise or discard signal. Fewer handoffs wouldn't help if the source material is 60% noise.

### Synthesis

The root cause is a CHAIN: Bad system content (60% unvalidated) inflated skills to unsustainable size, which created context pressure, which motivated migration to artifacts, which either amplified biases (PA) or discarded methodology alongside noise (TC). The migration was a rational response to a real problem — but the problem was content quality, not delivery mechanism.

---

## C. THE CONTAMINATION HYPOTHESIS

**Central question: Did the pipeline CORRECTLY drop low-value content, and then we force-preserved it?**

The evidence is mixed:

**What the pipeline correctly dropped (TC):**
- Personality profile percentages (invented, zero methodology)
- Incompatible metaphor families (downstream of contradicted soul constraints)
- Domain search menu (angular-bias lookup table)
- CSS translation grammar (system-specific lookup tables)

These are genuinely low-value. The pipeline's freeform replacement is not WORSE for dropping them.

**What the pipeline incorrectly dropped (TC):**
- Multi-axis questioning (legitimate content analysis methodology)
- Addition/BECAUSE/SUBSTITUTION tests (binary diagnostics with real value)
- Perceptual risk assessment (PROVEN by own data)
- Discovery bias warning (metacognitively sound)

These are the 8 genuine ideas (file 28, Section 5). They were dropped not because the pipeline evaluated and rejected them, but because they were inseparable from the contaminated content surrounding them. The pipeline didn't do triage — it did replacement.

**What the pipeline incorrectly preserved (PA):**
- All 42 aesthetic-shaped questions (61% of 69 total)
- Tier 5 questions (fully system-specific, evaluating compositional intelligence framework adherence)
- PA-05 sub-criteria with embedded aesthetic assumptions
- The entire warm-editorial bias encoded in question language

The PA artifact split didn't filter — it expanded. The 6 artifact files contain MORE system-specific content than the original skill, not less.

**Verdict: Half right.** The pipeline correctly shed TC's system-specific ballast. It incorrectly shed TC's universal methodology alongside it. It incorrectly preserved and amplified PA's biases. The response to "information is being lost" was not "preserve the right information" but "change the delivery mechanism" — which changed the loss pattern without addressing the signal-to-noise problem.

---

## D. THE CLEAN SKILL THOUGHT EXPERIMENT

If both skills were rebuilt to ~200 lines of validated methodology:

**TC at ~150 lines would contain:**
- Construction-not-discovery epistemological frame (15 lines)
- 14-axis questioning protocol with axis definitions (40 lines)
- Addition/BECAUSE/SUBSTITUTION diagnostic tests (20 lines)
- Perceptual risk assessment principle + application (25 lines)
- 6-criterion metaphor quality rubric (30 lines)
- Anti-optimization warning (10 lines)
- Invocation format + deliverable requirements (10 lines)

**PA at ~150 lines would contain:**
- Experiential pass protocol (20 lines)
- Visual verification principle (10 lines)
- Anti-optimization warning (10 lines)
- 27 universal questions with aesthetic-neutral framing (50 lines)
- Multi-auditor deployment architecture (20 lines)
- PA-05 with aesthetic-neutral sub-criteria (20 lines)
- Evidence standards (Three Laws) (10 lines)
- Priority override (readability > everything) (10 lines)

**Would the information loss problem exist?** No, for three reasons:

1. **Size.** 300 combined lines fits in any agent's context alongside 3,000+ lines of content and reference files. The context pressure that motivated the migration would not exist.

2. **Signal-to-noise.** 100% validated methodology means every line the agent reads is operational. No noise to parse, no contradictions to resolve, no soul constraints competing with content analysis.

3. **Invocability.** A 150-line skill with clear deliverable requirements (write 01-axis-questioning.md, write 02-tension-derivation.md) can be executed by an agent in a single pass. The Flagship audit (file 07) identified the failure: agents were told to "read SKILL.md" but given no deliverable structure. A 150-line skill with 5 mandatory deliverables is self-enforcing.

The thought experiment confirms the chain: skill bloat (from bad system content) created the conditions where invocation failed, which motivated embedding, which either amplified or discarded content indiscriminately.

---

## E. PATHS FORWARD

### Path 1: Rebuild Skills as Lean Invokable Tools (RECOMMENDED)

Compress each skill to ~150 lines of validated methodology per Section D. Add explicit deliverable requirements. Wire TC into Phase 0 (Content Analyst invokes /tension-composition, receives structured deliverables). Wire PA core principles into pa-deployment.md preamble.

**Advantage:** Skills become executable again. Pipeline gains structured methodology it currently lacks. Context pressure eliminated. Skill maintenance is sustainable (150 lines vs 1,649).
**Risk:** Requires pipeline architecture changes (MANIFEST, artifact-routing.md, orchestrator protocol). Untested — lean skills have never been run in production.
**Cost:** ~4 hours to write skills + ~4 hours to integrate.

### Path 2: Re-integrate with Embedding but Clean Content

Keep the artifact embedding pattern. Rewrite artifact content to contain only validated methodology. Strip 42 aesthetic-shaped PA questions. Embed TC's structured methodology into the Content Analyst's protocol and Brief Assembler's template.

**Advantage:** No architectural change. Preserves the information-isolation benefits of the 6-file PA split. Evolutionary, not revolutionary.
**Risk:** The same content-quality problem will recur unless there is a mechanism to prevent re-contamination. Skills as separate files create a natural separation between "methodology" and "application" that embedded content lacks.
**Cost:** ~6 hours to rewrite artifact content + ongoing maintenance risk.

### Path 3: Hybrid — Lean Skills + Selective Embedding

Rebuild skills as lean invokable tools (Path 1). ALSO embed the 27 universal PA questions directly in pa-questions.md (keeping the information-isolation benefit of the artifact split). The skill becomes the methodology source; the artifacts become the deployment mechanism.

**Advantage:** Skills own METHODOLOGY (how to question, how to derive, how to evaluate). Artifacts own DEPLOYMENT (which questions go to which auditor, weaver protocol, screenshot capture). Clean separation of concerns. Changes to methodology update the skill; changes to deployment update the artifacts.
**Risk:** Two sources of truth for PA questions (skill + artifact). Must establish skill as upstream, artifacts as downstream.
**Cost:** ~6 hours total. Highest initial cost, lowest maintenance cost.

### Path 4: Do Nothing with Skills, Fix the Content

Leave skills as historical documents. Focus exclusively on removing the 42 aesthetic-shaped PA questions and rewriting the TC brief template to include structured methodology. Accept that skills are dead code.

**Advantage:** Zero architectural change. Directly addresses the content-quality problem.
**Risk:** Loses the intellectual framing that makes the methodology understandable. The 8 genuine ideas become implementation details in artifact files rather than named, referenced concepts.
**Cost:** ~3 hours.

---

## BOTTOM LINE

The information loss was caused by a three-link chain: **bad system content inflated skills beyond usable size, which created context pressure, which motivated a migration that couldn't separate signal from noise.** The invocation pattern was never the problem — it was never tested. The skills were too large to invoke, and they were too large because 60% of their content was unvalidated system-specific implementation.

If the foundations had been sound and the skills had been 300 lines of validated methodology, they could have been invoked directly. The embedding migration solved a real symptom (skills too large for context) but misdiagnosed the cause (blaming the delivery mechanism instead of the content quality).

The cleanest path forward (Path 3) separates methodology ownership (skills) from deployment mechanics (artifacts), ensuring that content quality problems in one layer don't contaminate the other. But any path that reduces skill content to validated methodology and removes aesthetic-shaped PA questions from the pipeline addresses the actual root cause.

---

---

## [INDEPENDENT CHECK] CROSS-VALIDATION WITH FRESH-EYES EVALUATION

An independent Opus agent rated the pipeline SOLID and the system architecture as sound. This file's causality chain ("bad system content inflated skills -> context pressure -> migration that couldn't separate signal from noise") needs nuancing against independent findings.

**[VERIFIED] The information loss is real.** Independent confirms: TC's "500-line metaphor derivation was compressed into ~10 lines in a template" and "the deliberate multi-phase process was compressed into two agent prompts." The structured methodology (multi-axis questioning, diagnostic tests, metaphor scoring) was replaced by freeform alternatives. This is genuine information loss.

**[VERIFIED] The skill invocation pattern was never tested.** Independent confirms: "Zero Skill tool invocations across all builds." Hypothesis 1 (invocation pattern was the problem) was correctly rated MINOR -- you cannot blame a mechanism that was never used.

**[NUANCED] "Bad system content" vs "system-specific scoping."** This file's central thesis is that information loss was caused by "bad system content" (Hypothesis 2, MAJOR CONTRIBUTOR). Independent rates the system SOLID and soul constraints as "reasonable and generative." The divergence: this file treats system-specific content as inherently "bad" (noise), while independent treats it as design decisions that serve their intended purpose. Reframing: the content wasn't BAD -- it was MIXED (40% universal methodology + 60% system-specific application), and the migration mechanism couldn't distinguish between them. The problem was the INDISCRIMINATE nature of the compression, not the quality of the source material. A migration that preserved the universal 40% and correctly labeled the system-specific 60% would have produced a better outcome without requiring the source to change.

**[NUANCED] Context pressure was real but the diagnosis chain may overweight "badness."** The three-link chain (bad content -> bloat -> bad migration) makes "bad content" the root cause. But an alternative chain exists: (1) skills grew organically to serve multiple purposes (methodology explanation + operational execution + system-specific application), (2) this natural growth made them too large for single-agent context, (3) the migration optimized for operational execution and discarded the other purposes. This is a COMPLEXITY problem, not a QUALITY problem. The content grew because it was trying to do three things in one file. The fix (separate methodology from application from deployment) would have worked regardless of whether the system-specific content was "bad."

**[NUANCED] The "clean skill thought experiment" is compelling but untested.** Section D shows that 150-line lean skills WOULD fit in context and be invokable. Independent agrees this is the right direction. But the thought experiment assumes lean skills would produce equivalent output quality to the current artifact-based system. The current system, with all its flaws, produces PA-05 3.0-3.5. Whether 150-line skills would match, exceed, or fall below this baseline is unknown. The experiment should be run before the current system is dismantled.

**[OVERLOOKED] The pipeline's architecture is a genuine achievement.** This file focuses on what went wrong (information loss, indiscriminate compression, noise inheritance) without crediting what went right. Independent notes: "Two-pass build with DIFFERENT agents defeats continuation bias -- a real insight. IMPROVE builder receives artistic language, not gate scores -- prevents metric-chasing. Brief Verification gates catch spec problems before they become build problems." The artifact-based pipeline, DESPITE its information loss problems, is architecturally sound and produces real results. The causality analysis should acknowledge that the migration solved real problems (Playwright contention, information isolation, role-based access) even as it created new ones (methodology loss, bias amplification).

**[OVERLOOKED] REFINE is evidence that the system works, not just that artifacts fail.** This file uses REFINE's success (53 lines of curated artistic prose -> highest PA-05) as evidence that less information works better. But REFINE only works BECAUSE the full pipeline already ran: the page exists, the PA auditors identified specific defects, the weaver synthesized findings into artistic prose. REFINE is the CAPSTONE of the artifact system, not evidence against it.

---

*29-information-loss-causality.md -- ~310 lines with independent check*
