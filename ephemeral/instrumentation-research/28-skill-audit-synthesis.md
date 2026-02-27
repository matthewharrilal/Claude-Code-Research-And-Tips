# Unified Skill Audit Synthesis

**Date:** 2026-02-27
**Inputs:** Files 25 (PA audit), 26 (TC audit), 27 (usage investigation), 15 (brief), 11 (master session)

---

## 1. COMBINED GROUND TRUTHS: Total Exposure

### The Numbers

| Metric | TC Skill | PA Skill | Combined |
|--------|----------|----------|----------|
| Total lines | 1,649 | 774 | 2,423 |
| Ground truths audited | 10 | 10 | 20 |
| PROVEN | 0 | 1 | 1 (5%) |
| CONTRADICTED / DISPROVEN | 3 | 1 | 4 (20%) |
| ASSUMED | 4 | 3 | 7 (35%) |
| SYSTEM-SPECIFIC (invented) | 3 | 5 | 8 (40%) |
| Universal content (%) | ~40% | ~39% | ~40% |
| System-specific content (%) | ~60% | ~61% | ~60% |
| Actually invoked by pipeline | NO | NO | 0/2 |

**One ground truth across 2,423 lines is proven.** That one is PA's Experiential Pass (GT-9), validated when 9/9 auditors independently flagged the ceiling whitespace void that analytical-only audit missed. Everything else rests on assumptions, inventions, single-source observations, or claims contradicted by the system's own data.

### The Four Contradictions

1. **border-radius: 0 and box-shadow: none** (PA GT-8, TC GT-03): Sanrok source uses 4-6px corners + subtle shadows. The two most enforced constraints contradict their own provenance.
2. **Mechanism count targets** (TC GT-04): Middle Tier scored PA-05 4/4 with 12 mechanisms. Flagship scored PA-05 1.5/4 with 16-18. The skill hedges ("count is a PROXY") then reasserts specific targets three more times.
3. **Richness formula predicts depth, not quality** (TC GT-09): The skill's own Boris test showed richness-27 content producing worse output than richness-12 content. The formula was corrected (Perceptual Risk cap added) but the original framing persists throughout.
4. **"9/9 agreement = ground truth"** (PA GT-7): All 9 auditors use identical PA questions embedding identical aesthetic. Agreement proves question reliability, not finding universality.

### Lines Resting on Unproven Foundations

- TC: ~60% system-specific = ~990 lines dependent on unvalidated soul constraints
- PA: ~61% aesthetic-shaped = ~472 lines encoding unvalidated preferences
- Combined: **~1,462 of 2,423 lines (60%) rest on foundations never validated against anything outside this system**

The remaining ~40% (~961 lines) contains genuinely universal methodology -- but it is interwoven with the unvalidated content, not cleanly separable without rewriting.

---

## 2. SKILL BIAS vs PIPELINE BIAS: Inheritance or Parallel Evolution?

### The Evidence Points to PARALLEL EVOLUTION

The skills and the pipeline share the same biases (PA circularity, soul constraint contradictions, enforcement spiral) but they did NOT inherit from each other. Evidence:

1. **The pipeline never invokes either skill.** Zero Skill tool calls across 5 builds. The pipeline reimplemented TC's function (Content Analyst + Brief Assembler) and PA's function (6 split artifact files) independently.

2. **The TC brief template was modeled on TC's structure but diverges in methodology.** TC uses formal 4-axis questioning; the pipeline uses freeform tension identification. TC has a 500-line metaphor derivation; the pipeline has ~10 lines in a template. Same concept, different execution.

3. **The PA artifacts are a superset, not a derivative.** Pipeline PA has 69 questions vs skill's 28 core, plus deployment architecture, weaver protocol, guardrails, and Mini-PA mode that the skill never contained. The skill is an ancestor, not a parent.

4. **Both inherit from the SAME upstream source.** The soul constraints, the warm editorial aesthetic, the compositional intelligence framework, the tier model -- these originate in the DD/AD/OD/CD research phases. Both skills and pipeline drew from this common well. The biases are in the WATER, not in the PIPES.

### What This Means for Fixes

**Fixing the skills will NOT fix the pipeline.** The pipeline's biases are independently encoded in: MANIFEST.md (885 items), artifact-routing.md (1,056 lines), 6 PA artifact files (~1,600 lines), the TC brief template (223 lines), and the gate runner files. These are the operational documents. The skills are not in the execution path.

**Fixing the upstream source (DD/AD/OD/CD identity layer) would fix BOTH** -- but only if the fixed identity propagates into new pipeline artifacts and new skill versions. Currently, the compression from identity to pipeline (1,520:1 for soul description per the brief) means even corrected identity would be crushed.

The pipeline and skills are SIBLINGS with the same genetic disease, not parent-child where treating the parent cures the child.

---

## 3. THE ORPHAN QUESTION: What Happens to Dead Code Containing Live Ideas?

### Current State

Both skills are **functionally dead in the pipeline execution path** but **nominally alive in CLAUDE.md references**:

- TC: Zero invocations. One vestigial reference (pa-weaver.md line 163, never triggered). The pipeline's Content Analyst + Brief Assembler replaced it.
- PA: Zero invocations. Two citation-only references. Pipeline's 6 artifact files superseded it entirely.

### The Three Options

**Option A: Retire Both, Extract Value Into Pipeline Artifacts**

Acknowledge reality: the pipeline artifacts ARE the executed product. Move the ~8 genuinely valuable ideas (see Section 5) into the artifacts where they'll actually be read. Delete the skill files. Update CLAUDE.md routing.

*Pro:* Eliminates the divergence problem. Single source of truth. Honest about what's used.
*Con:* Feels like writing off hundreds of hours. Loses the pedagogical framing that makes the ideas understandable.

**Option B: Redesign as Universal Frameworks + System Configs**

Split each skill into a universal methodology layer (~300-400 lines combined) and a system-specific configuration layer. The universal layer becomes a genuine tool for ANY design system. The system config provides KortAI values.

*Pro:* Honors the intellectual investment. Creates something genuinely portable. The multi-axis questioning, experiential pass, and tension derivation concepts deserve to exist independently.
*Con:* Significant rewrite effort. The skills would still not be invoked by the pipeline unless re-integrated. Risk of creating better documentation that remains unused.

**Option C: Reduce to Reference Cards + Re-integrate**

Compress each skill to ~50-100 lines of core methodology. Wire TC into the Content Analyst's context (multi-axis questioning as a structured alternative to freeform tension identification). Wire PA's experiential pass + anti-optimization warning into pa-deployment.md.

*Pro:* Skills become genuinely executable again. Short enough to actually be read. Pipeline gains the structured methodology it replaced with freeform approaches.
*Con:* Requires pipeline changes, not just skill changes. The freeform approach may be working fine.

**Option D: Acknowledge and Freeze**

Mark both skills as "HISTORICAL -- superseded by pipeline artifacts" in their headers. Keep them as-is for reference. Do nothing else.

*Pro:* Zero effort. Honest about status.
*Con:* The divergence will grow. New instances will encounter conflicting sources of truth.

---

## 4. WHAT BOTH SKILLS SHOULD BECOME

### Given the Full Research Context

The brief (file 15) identifies that the pipeline's best mechanism is REFINE -- artistic prose to a fresh builder who sees zero gates. The enforcement spiral is self-perpetuating. Gates are theater. The compression from identity to builder is 1,520:1. The delivery format crisis means findings die in synthesis.

In this context, skills should serve one of two purposes:
1. **Methodology that agents actually execute** (operational)
2. **Thinking frameworks that humans reference** (pedagogical)

Currently the skills are neither -- too long to execute, too stale to reference.

### TC Skill: Two Viable Futures

**Future 1 (Operational): The Content Analyst's Structured Protocol (~150 lines)**
Extract the multi-axis questioning framework + Addition/BECAUSE/SUBSTITUTION tests + perceptual risk assessment. Format as a protocol the Content Analyst agent ACTUALLY runs during Phase 0. This replaces freeform tension identification with structured methodology. Strip all KortAI-specific values (personality percentages, banned families, CSS translation tables) into a separate config the protocol reads.

**Future 2 (Pedagogical): The Tension Thinking Reference (~100 lines)**
Compress to the core insight: composition lives in the gap between what content needs and what a system provides. Include the 6-criterion metaphor rubric, the construction-not-discovery frame, and the perceptual risk principle. Mark as "Reference only -- not invoked during builds." Honest about its role.

### PA Skill: Two Viable Futures

**Future 1 (Retire + Extract): Delete skill, enrich artifacts**
Move the 8 universally valuable items (Section F of file 25) into the pipeline artifacts that actually get used: experiential pass principle into pa-deployment.md (already there but less well framed), anti-optimization warning into pa-guardrails.md, visual verification principle into pa-deployment.md. Delete the skill file.

**Future 2 (Universal Core): The Aesthetic-Neutral PA Framework (~200 lines)**
Extract the 27 universal questions + experiential pass + visual verification principle + multi-auditor architecture into a design-system-agnostic evaluation tool. Mark the 18 system-specific questions (warm palette, metaphor ideology, Tier 5) as "KortAI addendum." Redesign PA-05 sub-criteria to be aesthetic-neutral (per Option C from file 24). This creates a genuinely portable quality evaluation framework.

---

## 5. THE INVESTMENT PARADOX: How to Honor Work While Fixing Foundations

### What the Investment Actually Produced

The hundreds of hours did not produce two 2,400-line documents. They produced **8 genuinely original ideas** that survive any redesign:

1. **Experiential Pass** -- read every word from pixels before analyzing. PROVEN.
2. **Multi-axis questioning** (FEEL/UNDERSTAND/DO/BECOME + 5 extended) -- a legitimate content analysis methodology. UNIVERSAL.
3. **Construction-not-discovery** -- prevents "the content IS geological" vs "I am reading it as geological." EPISTEMOLOGICALLY SOUND.
4. **Addition/BECAUSE/SUBSTITUTION tests** -- binary diagnostics for whether metaphor is earned. USEFUL.
5. **Perceptual risk assessment** -- structural richness does not predict visual quality. PROVEN BY OWN DATA.
6. **Anti-optimization warning** -- consulting the audit BEFORE building corrupts the build. METACOGNITIVELY VALUABLE.
7. **Visual verification principle** -- judge from pixels, not from what you know. CORRECTS LLM TENDENCY.
8. **Multi-auditor architecture** -- 9 independent perspectives catch what 2-3 miss. VALIDATED.

These 8 ideas fit in ~200 lines. They are the RETURN on the investment. The other ~2,200 lines are the COST -- system-specific implementation, soul-constraint contamination, untested thresholds, and diverged content.

### The Honest Framing

The investment was not wasted. It was EXPLORATORY. The skills were the laboratory where ideas were tested against builds. Some ideas proved out (experiential pass, perceptual risk). Most implementations turned out to be system-specific. This is normal for research -- you invest broadly to discover narrowly.

The paradox resolves when you separate DISCOVERIES from IMPLEMENTATIONS:
- **Discoveries** (8 ideas above): permanent intellectual value. Preserve, compress, make accessible.
- **Implementations** (soul-specific CSS tables, personality percentages, banned metaphor families): valid only within their assumptions. Those assumptions are now questioned. Let them go or clearly label them.

### The Path Forward

The highest-leverage action is NOT choosing between the 4 options above. It is this: **Write down the 8 discoveries in ~200 lines, in the user's own idiom, as a reference they can actually internalize.** Not a skill file that agents execute. Not a synthesis that compresses nuance. A thinking document that captures WHY these ideas matter, with the reasoning intact.

Then decide what to do with the skills. The ideas are safe regardless.

---

## SUMMARY TABLE

| Question | Answer |
|----------|--------|
| Combined ground truths validated | 1/20 (5%) -- Experiential Pass only |
| Lines on unproven foundations | ~1,462/2,423 (60%) |
| Did pipeline inherit bias from skills? | No -- parallel evolution from shared upstream source (DD/AD/OD/CD) |
| Will fixing skills fix pipeline? | No -- pipeline artifacts are independent execution path |
| Are skills being used? | No -- both orphaned, pipeline reimplemented their functions |
| What should happen? | Extract 8 proven ideas (~200 lines), retire or redesign the rest |
| What's the hardest part? | Accepting that 60% of invested thinking was system-specific implementation, not universal methodology |

---

---

## [INDEPENDENT CHECK] CROSS-VALIDATION WITH FRESH-EYES EVALUATION

An independent Opus agent rated the overall system SOLID (pipeline), SOLID (PA skill), MIXED (TC skill), and STRONG (build-page skill). This synthesis claims "1/20 ground truths proven, 60% on unvalidated foundations." The independent evaluation provides essential nuance:

**[VERIFIED] 1/20 PROVEN by empirical standard.** The Experiential Pass is the only ground truth validated against external evidence. Independent confirms this is "the single best feature" and "genuinely innovative." The factual count holds.

**[NUANCED] "Unvalidated" is not the same as "wrong."** This synthesis frames 60% of skill content as resting on "unvalidated foundations," which is accurate by epistemic standards. But independent rates the system's design decisions as "reasonable and generative": soul constraints "force creative solutions within a distinctive design language," the pipeline architecture is "sound," and TC Phases 0-3.5 are "genuinely insightful methodology." A system can be both unvalidated AND well-designed. Many successful design systems (Material Design, Apple HIG, Editorial design traditions) rest on aesthetic judgments that are not empirically validated -- they are validated by USE. The pipeline has produced PA-05 3.0-3.5 across actual builds. That is empirical evidence of functional value, even if the individual ground truths haven't been isolated and tested.

Key distinction: this audit asks "can we PROVE each claim independently?" (answer: mostly no). Independent asks "does the system WORK?" (answer: mostly yes). Both questions are valid. The synthesis should hold both perspectives.

**[NUANCED] The "parallel evolution" finding is correct but implications are understated.** Section 2 correctly identifies that skills and pipeline inherited biases from the same upstream source (DD/AD/OD/CD research). Independent confirms: "The skills are NOT duplicates of the artifacts -- they serve different purposes." But this means the skills aren't just dead code with biases -- they are the INSTITUTIONAL MEMORY of why the pipeline makes the decisions it does. Retiring them without preserving this explanatory value (not just the 8 ideas, but the reasoning chains) risks future pipeline modifications being uninformed by the derivation history.

**[NUANCED] The "8 genuine ideas" count may be conservative.** This synthesis identifies 8 genuinely valuable ideas. Independent identifies additional value: the two-pass build architecture ("defeats continuation bias -- a real insight"), IMPROVE isolation ("prevents metric-chasing"), recipe-over-checklist distinction ("genuine finding that drives real quality differences"), and iteration-as-standard-path ("architecturally honest about LLM generation quality"). These are pipeline innovations that ORIGINATED in the skill/research ecosystem, even if they don't live in the skill files themselves. The intellectual value produced exceeds the 8 named items.

**[OVERLOOKED] The system produces real results.** This synthesis focuses on epistemic foundations (what's proven/unproven) without noting that the pipeline has a functional track record: PA-05 3.0-3.5 on actual builds, successful defect detection, the REFINE cycle producing the largest single-cycle improvement ever documented (PA-05 +1.5). Whatever the epistemic status of individual ground truths, the SYSTEM works. This should factor into recommendations -- tearing down a working system to fix its theoretical foundations carries its own risks.

---

*28-skill-audit-synthesis.md -- ~250 lines with independent check*
