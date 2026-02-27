# Perceptual-Auditing Skill: Deep Audit

**Date:** 2026-02-27
**Scope:** `~/.claude/skills/perceptual-auditing/SKILL.md` (774 lines)
**Inputs:** Files 18, 20, 22, 23, 24 + MANIFEST.md + pa-*.md artifact files

---

## A. GROUND TRUTHS: What the Skill Treats as Unquestionable

| # | Ground Truth | Evidence Status | Source in Skill |
|---|-------------|-----------------|-----------------|
| GT-1 | PA-05 (FLAT/ASSEMBLED/COMPOSED/DESIGNED) is a valid quality measure | **ASSUMED** (F-03). Never validated against human judgment. Scale was invented by the same team. | Section 2.1, entire scoring framework |
| GT-2 | 65-80% viewport width = "confident" spatial balance | **ASSUMED** (S-06). Observed from one reference site (CD-006), never tested as perceptual threshold. | PA-05c sub-criterion, Section 4 guardrails |
| GT-3 | Warm gray palette coherence = quality indicator | **AESTHETIC PREFERENCE**. Warm palette traces to single Sanrok observation. Cool palettes work equally well editorially. | PA-18, embedded in "same family" framing |
| GT-4 | Multi-channel shifts at boundaries = "designed" | **SYSTEM-SPECIFIC**. "Channel shifts" is pipeline vocabulary. Other traditions use different coherence models. | PA-34, PA-69, Tier 5 questions |
| GT-5 | Metaphor must be structural (sensed from layout alone) | **SYSTEM-SPECIFIC**. The compositional intelligence framework invented this hierarchy. Announced metaphor is valid elsewhere. | PA-44, PA-42-43 |
| GT-6 | "One designer voice" = quality | **PHILOSOPHICAL POSITION**. Maximalist, collage, and brutalist traditions value multiple voices. | PA-03, PA-05b |
| GT-7 | 9/9 auditor agreement = ground truth | **OVERSTATED**. All 9 use identical PA questions embedding identical aesthetic. Agreement proves question reliability, not finding universality. | Section 3 deployment |
| GT-8 | border-radius: 0, box-shadow: none are identity truths | **CONTRADICTED** (S-01, S-02). Sanrok source actually uses 4-6px corners + subtle shadows. Soul-lock imposed, not extracted. | Section 5 soul checks |
| GT-9 | Experiential Pass catches what analysis misses | **PROVEN**. Ceiling whitespace void (9/9 flagged) was missed by analytical-only audit. The one genuinely validated innovation. | Section 0 |
| GT-10 | Tier model (Floor/Middle/Ceiling/Flagship) reflects real quality bands | **INVENTED** (file 22 #1). Created by 11 agents, never validated externally. CD-006 has 41 mechanisms but is classified "Ceiling" in a model capping Flagship at 16-18. | Scoring calibration throughout |

**Summary:** 1 PROVEN, 1 CONTRADICTED, 3 ASSUMED, 5 SYSTEM-SPECIFIC. The skill's one genuinely validated contribution (Experiential Pass) is buried in a framework where 9/10 ground truths are unproven.

---

## B. BAKED-IN BIASES: Aesthetic Preferences Masquerading as Universal Principles

**1. The Warm Editorial Bias.** PA-18 ("all grays same family?"), PA-20 ("visual personality matches verbal?"), PA-25 ("identity persists without header?") all assume a warm, editorial aesthetic IS quality. A cool-palette Stripe-style page would fail PA-18 and PA-25 while being objectively well-designed.

**2. The Coherence-as-Quality Bias.** PA-03, PA-05b, PA-16, PA-17, PA-24 all treat visual unity as a quality proxy. This is ONE design philosophy. Memphis Group, David Carson, and Emigre magazine achieved quality through deliberate incoherence. The skill cannot evaluate design traditions that don't share this value.

**3. The Spatial Confidence Bias.** PA-11 ("generous or anxious margins?"), PA-31 ("designed space or leftover?"), PA-33 ("silence or dropped signal?") encode this system's specific spatial philosophy. The language itself ("anxious," "leftover," "dropped signal") primes auditors toward negative assessment of any spacing that doesn't match the pipeline's model.

**4. The Compositional Intelligence Bias.** PA-60 through PA-68 (all 9 Tier 5 questions), PA-34-36 (transitions/pacing/drama), PA-69-71 (pipeline integration) assume the compositional intelligence framework. These questions cannot detect quality that doesn't express itself through scales, channels, and multi-coherence. A page with 3 powerful mechanisms deployed with restraint would score lower on Tier 5 than a page with 12 mediocre mechanisms spread across boundaries.

**5. The Defect-Priming Bias.** PA-01 ("first thing that bothers you?") and PA-26 ("wrong but intentional?") prime auditors into defect-finding mode calibrated to THIS aesthetic. "Bother" is relative to expectation; expectations are set by prior exposure to this system's pages.

**Ratio (from file 20):** 39% aesthetic-neutral, 61% aesthetic-shaped. The PRIMARY metric (PA-05) is fully aesthetic-shaped across all 4 sub-criteria.

---

## C. ACTUAL USAGE: Living Tool or Orphaned Reference?

**Finding: The skill is ORPHANED in pipeline builds, REFERENCED in CLAUDE.md, and PARTIALLY ALIVE for standalone audits.**

Evidence:
1. **MANIFEST.md** (the actual pipeline execution spec) contains **zero references** to `perceptual-auditing/SKILL.md`. The pipeline uses 6 split artifact files instead: `pa-questions.md`, `pa-deployment.md`, `pa-weaver.md`, `pa-guardrails.md`, `pa-guardrails-weaver.md`, `pa-manifest.md`.

2. **design-system/CLAUDE.md** references the skill in two places: (a) Phase 7 verification in compositional-core/CLAUDE.md ("Invoke: perceptual-auditing skill"), (b) standalone auditing routing ("For auditing EXISTING pages"). But Phase 7 is now handled by the MANIFEST's own PA deployment, making reference (a) stale.

3. **The skill and the artifacts have DIVERGED.** The skill contains 69 questions (as of last enrichment). The pa-questions.md artifact contains 69 questions but with different organization, updated scoring guidance, council verdict compliance, and perception threshold tables that the skill lacks.

4. **Real pipeline PA deploys from artifacts, not skill.** The MANIFEST's Appendix E (copy-paste agent prompts) routes PA auditors to `pa-questions.md` + `pa-guardrails.md`. The Weaver gets `pa-weaver.md`. The skill file is never mentioned.

**Verdict:** The skill is a HISTORICAL DOCUMENT that was superseded by the va-extraction artifact split (2026-02-24/25). It remains nominally referenced for "standalone audits" but any standalone audit using the skill would get OLDER question definitions than a pipeline audit using the artifacts. The skill is effectively dead code.

---

## D. THE 69 QUESTIONS: Classification

### Would Survive Design System Change (Universal) -- 27 questions
PA-02, PA-08 (readability); PA-14, PA-15 (layout structure); PA-22, PA-23, PA-46 (responsive); PA-37, PA-38 (information architecture); PA-50, PA-51, PA-52, PA-53 (void/density measurement); PA-55, PA-56 (sub-perceptual detection); PA-73 (accessibility); PA-77 (typographic hierarchy); PA-80 (navigation); PA-81 (chart communication); PA-29 (cognitive overload); PA-39 (header ratio); PA-47 (monotony); PA-54 (promise-delivery); PA-70 (content-density response); PA-71 (transition quality); PA-74 (boundary coherence); PA-75 (designed ending)

### System-Specific (Tied to THIS Design Philosophy) -- 18 questions
PA-18 (warm gray family); PA-19 (vocabulary belonging); PA-20 (personality match); PA-24 (system coherence); PA-25 (identity persistence); PA-42, PA-43, PA-44 (metaphor ideology); PA-60 through PA-68 (all 9 Tier 5 -- compositional depth stack)

### Ambiguous (Universal Principle, System-Biased Execution) -- 18 questions
PA-01 (first bother -- priming); PA-03 (one designer); PA-04 (eye direction); PA-05 (name-worthy -- sub-criteria biased); PA-11, PA-12, PA-13 (spatial judgment); PA-16, PA-17 (consistency/rhythm); PA-26 (rule conflict); PA-27 (from-scratch redesign); PA-28 (fragility); PA-30, PA-31, PA-32, PA-33 (spatial interpretation); PA-34, PA-35, PA-36 (transitions/pacing)

### Embed Contradicted Soul Constraints -- 3 questions
PA-18 (presupposes warm palette -- soul #6 traces to contradicted Sanrok extraction); PA-19 ("different website" calibrated against vocabulary including border-radius: 0 / box-shadow: none, both contradicted by source); PA-25 (identity persistence defined through soul constraints that were imposed, not extracted)

**Summary:** 39% universal / 26% system-specific / 26% ambiguous / 4% embed contradicted constraints. Only 27 of 69 questions would survive a design system change intact.

---

## E. WHAT IT SHOULD BECOME

### Option 1: Retire the Skill, Canonicalize the Artifacts
The pa-*.md artifacts already contain everything the skill offers, plus council verdict compliance, perception threshold tables, and updated scoring. **Delete the skill. Update CLAUDE.md to route standalone audits to the artifact files directly.** Lowest effort, highest honesty.

**Pro:** Eliminates divergence. Single source of truth.
**Con:** Loses the skill's anti-optimization warning and pedagogical framing (Section 0 warning about audit-optimized composition).

### Option 2: Redesign as Universal + Addendum
Split into two layers per file 24's recommendation:
- **Core (universal):** ~27 questions that apply regardless of design system. PA-05 redefined with aesthetic-neutral sub-criteria (Option C from file 24). Experiential Pass preserved.
- **Addendum (system-specific):** ~18 questions labeled "KortAI design system assessment." Tier 5 questions, metaphor ideology, warm palette checks. Clearly marked as non-portable.

**Pro:** Honest about what's universal vs what's taste. Portable to other design systems.
**Con:** More work. Ambiguous questions (~18) require judgment calls on classification.

### Option 3: Minimal Fix -- Add Bias Disclosure + Retire Divergent Content
Keep skill structure but: (a) add explicit bias disclosure to every system-specific question, (b) mark PA-05 sub-criteria as "per this system's model," (c) remove all content that duplicates the artifacts, leaving only the pedagogical frame (anti-optimization warning, deployment philosophy, fresh-eyes principle).

**Pro:** Preserves invested thinking. Low disruption.
**Con:** Doesn't fix the fundamental circularity. Bias disclosures are soft rules (file 22: "judgment rules achieve ~0% compliance").

### Recommendation Signal
Option 1 for immediate action. Option 2 if the user wants the PA system to be genuinely portable. Option 3 is a half-measure that preserves the problem.

---

## F. WHAT TO PRESERVE (Genuine Value That Survives Any Redesign)

**1. Experiential Pass (Section 0).** The single most validated innovation in the entire pipeline. "Read every word from the pixels before analyzing anything" catches real failures that analytical frameworks miss. This is genuinely universal. **Preserve unconditionally.**

**2. Visual Verification Principle.** "Judge readability from pixels, not from what you know the content says." This corrects for LLM tendency to infer from context rather than observe from evidence. **Preserve unconditionally.**

**3. Multi-Auditor Architecture.** 9 independent evaluators provide breadth that 2-3 cannot. The ceiling whitespace void (9/9 flagged) validated this architecture. The architecture is sound even if questions need redesign. **Preserve the architecture, evolve the questions.**

**4. Anti-Optimization Warning.** "If you are consulting this skill BEFORE building, you are doing it wrong." This framing correctly separates verification from design. Most quality frameworks conflate the two. **Preserve as design philosophy, not just skill preamble.**

**5. Priority Override (Readability > Everything).** Illegible text trumps all other findings. This is universally correct and should survive any redesign. **Preserve unconditionally.**

**6. PA-05's Holistic Framing.** "Would you put your name on this?" is powerful precisely because it resists decomposition. The QUESTION is valuable. The SUB-CRITERIA need redesign (remove "multi-scale coherence," "mechanism deployment," specific px ranges). **Preserve the question, redesign the rubric.**

**7. Three Laws of PA Evidence.** Answers must cite visual evidence, not speculation. This is a genuinely useful constraint that improves audit quality regardless of design system. **Preserve unconditionally.**

**8. Screenshot-Based Evaluation.** Auditors judge rendered pixels, not code. This is aesthetically neutral -- a pixel is a pixel. **Preserve unconditionally.**

---

## [INDEPENDENT CHECK] CROSS-VALIDATION WITH FRESH-EYES EVALUATION

An independent Opus agent with zero prior analysis context evaluated the same PA source files and actual build reports. Key divergences:

**[VERIFIED] Experiential Pass is genuinely innovative.** Independent rates this as "the single best feature" of the PA system. This audit's identification of it as the one PROVEN ground truth is confirmed.

**[VERIFIED] Circularity exists in Tier 5 and PA-05a.** Independent confirms: "Tier 5 questions are almost entirely system-shaped -- they detect THIS system's idea of quality rather than universal design quality." Agrees PA-05a DESIGNED conflates "varied" with "intentional."

**[NUANCED] "Orphaned" overstates the situation.** This audit calls the skill "ORPHANED" (Section C header). Independent confirms the skill is not invoked by the pipeline -- this is factual. However, independent rates the PA skill itself as SOLID: "Well-designed measurement framework. Questions are concrete, scoring is binary, principles are battle-tested." The skill's content was successfully EXTRACTED into artifacts -- that is migration, not orphaning. The skill served as the upstream source that produced the operational artifacts. "Not invoked" is accurate. "Orphaned" implies abandoned and valueless, which independent evidence contradicts. More precise framing: the skill is a SUPERSEDED SOURCE DOCUMENT whose content lives on in the artifacts it produced.

**[NUANCED] PA-05 is "biased but not broken."** This audit calls PA-05 "fully circular." Independent says: "PA-05 correlates with actual perceptual quality even if its vocabulary is system-specific. It would correctly identify a BAD page in any system. It might unfairly penalize a GOOD minimalist page." The distinction matters: PA-05 has real discriminative power (1.5/4 Flagship was genuinely bad, 3.5/4 Gas Town was genuinely good). "Fully circular" implies it measures nothing real. "System-biased but empirically useful" is more accurate.

**[NUANCED] Auditor quality is genuine, not performative.** Independent reviewed actual PA reports and found: "Auditors provide genuine insights, not going through motions." The Panopticon weaver's recalibration of 9 contaminated auditor reports was "genuine analytical work, not rubber-stamping." This audit focuses on structural problems (circularity, bias) but understates the operational value: the system, as deployed, catches real defects and makes sound judgments.

**[OVERLOOKED] The deployment protocol has independent, system-agnostic value.** Independent rates the 9-auditor deployment architecture as "genuinely good engineering" that "would work for any design system with question substitution." This audit focuses on question-level problems but gives insufficient credit to the deployment architecture (screenshot-based evaluation, fresh-eyes isolation, weaver synthesis, fix-type classification) -- all of which are system-agnostic innovations independent of question quality.

**[OVERLOOKED] The "over-engineered" caveat.** Independent notes "11 agents for one page is expensive" and "69 questions is too many for meaningful attention." This audit identifies the system-specific question count but doesn't flag the operational cost as a concern.

## BOTTOM LINE

The perceptual-auditing skill is a 774-line document with ~200 lines of genuinely universal design evaluation wisdom buried in ~574 lines of system-specific aesthetic enforcement. Its single most important innovation (Experiential Pass) is genuinely validated. Its primary metric (PA-05) is system-biased but empirically useful -- it correlates with actual perceptual quality across builds, even if its vocabulary favors this system's aesthetic. It has been functionally superseded by 6 artifact files that the pipeline actually uses; the skill served as the upstream source for those artifacts, not as dead code.

The deployment architecture (9 parallel fresh-eyes auditors, screenshot-based evaluation, weaver synthesis, fix-type classification) has genuine system-agnostic value that would survive a complete question redesign. The 8 items in Section F represent real intellectual investment worth preserving. The system-specific content (~61%) should be clearly labeled, not removed -- it is valid within its intended scope (evaluating pages built by THIS pipeline for THIS design system).

---

*25-pa-skill-audit.md -- 250 lines target, ~248 actual*
