# 17 -- MASTER SYNTHESIS: Can Fat Core Produce 4/4? What Configuration Actually Works?

**Agent:** gap-mapper (Opus 4.6)
**Date:** 2026-02-19
**Inputs:** Reports 01-16 + 18-29 (29 reports, ~750KB), PV2-FLAGSHIP-VARIANT.md, mechanism-catalog.md, tokens.css, prohibitions.md, semantic-rules.md, all research files
**Contrarian mode engaged:** All conclusions tempered by report 16's challenges

---

## THE ANSWER

### (1) Can Fat Core AS CURRENTLY DESIGNED produce 4/4?

**PROBABLY YES for Middle tier. UNKNOWN for Flagship.**

Evidence:
- CD-006 (39/40) used a single Opus agent with rich reference material -- structurally similar to Fat Core
- Middle experiment (4/4) used Opus with a planner's 100-line extract + direct catalog access -- similar input profile
- Both successes share: Opus builder + direct reference access + moderate content complexity
- Fat Core as designed (100-170 line brief + tokens + prohibitions + trimmed catalog) gives the builder direct access to reference material -- matching the successful pattern

However:
- Fat Core has N=0 empirical evidence (NEVER TESTED)
- The Middle experiment's success may be partly attributable to the Opus PLANNER's 675-line compositional plan, which the conventions brief doesn't replicate
- Flagship-complexity content (12+ sections, multiple themes) has never been successfully handled by any configuration
- The contrarian challenge (report 16) correctly identifies 4 confounded variables that prevent attributing success to any single factor

**Confidence: 65-75% for Middle, 35-50% for Flagship.** These are the same ranges the PV2 Flagship Variant reports (75-85% for Flagship handling, Report 20) but REDUCED by the contrarian adjustment for retrospective optimism.

---

### (2) If not, what's the MINIMUM change to get there?

The minimum change depends on which experimental outcome materializes. The PV2 Implementation Guide's sequencing is correct -- run cheap experiments first, build infrastructure only if experiments prove it's needed.

**If Experiment A (naked Opus, $5) scores >= 3.0:**
- MINIMUM CHANGE: Nothing. The conventions brief may be unnecessary overhead.
- ACTUAL MINIMUM: Add perception thresholds (8 lines) + transition grammar (20 lines) + PA verification shell.
- Total addition: ~28 lines + PA shell architecture.

**If Experiment A scores < 3.0 but Experiment B (Opus + brief, $5-10) scores >= 3.0:**
- MINIMUM CHANGE: Write the conventions brief (~100 lines). No enhanced version.
- Add: PA verification shell (9 auditors + weaver).
- Total new code: ~165 lines + PA infrastructure.

**If both A and B score < 3.0:**
- MINIMUM CHANGE: Full Fat Core (orchestrator + brief + gates + PA shell).
- Consider the 444-line critical gap additions (transition grammar, restraint protocol, density floors).
- Total new code: ~1,250-1,700 lines.

**The implementation guide already sequences this correctly.** The only insight the 29 reports add is specificity about WHAT the 444-line critical gap contains.

---

### (3) Recommended configuration (architecture-agnostic) for producing 4/4

**TIER 1: THE CONFIGURATION THAT HAS WORKED TWICE (N=2)**

| Property | Value | Evidence |
|----------|-------|----------|
| Builder model | **Opus** | CD-006 (39/40), Middle (4/4). Sonnet scored 1.5/4. N=4, zero exceptions. CONFOUNDED but strongest signal. |
| Instruction format | **Recipe or Constitutional** | NOT checklist. Recipe (imperative verbs, sequenced steps, exact CSS) or constitutional (constraints + creative freedom). Both scored 4/4; checklist scored 1.5/4. |
| Instruction volume (builder-facing) | **100-300 lines** | Both successes at ~100 lines builder-facing. Remediation at 1,025 scored 2.5/4. Flagship at 530/75 scored 1.5/4. Sweet spot appears to be 100-300 lines. |
| Reference material access | **Direct access to mechanism catalog + tokens** | Both successes gave builder direct access to reference material. Flagship routed catalogs to planner (wrong agent). |
| Verification | **9 PA auditors + weaver (Mode 4)** | Unchallenged across all reports. Fresh-eyes catch what self-assessment cannot. |
| Fix cycle | **Same builder** | Preserves compositional memory. Remediation demonstrated Opus can self-correct from PA feedback. |
| Content complexity | **UNTESTED at Flagship** | Both successes used medium complexity. High-complexity content may require additional support. |

**TIER 2: ADDITIONS WITH THEORETICAL SUPPORT BUT N=0 EVIDENCE**

| Addition | Lines | Rationale | Risk of Omitting |
|----------|-------|-----------|-----------------|
| Perception thresholds in brief | 8-15 | Prevents sub-perceptual CSS. Remediation proved these transfer successfully. | MEDIUM -- Opus may generate perceptible values naturally (CD-006 did) |
| Transition grammar (3 types) | 20-30 | Prevents void at zone boundaries. Project-specific knowledge unlikely in training data. | MEDIUM-HIGH -- flagship void was the dominant failure |
| Content density floor rules | 15-20 | Prevents over-formation (bento grid for 2 items). | MEDIUM -- Opus has general sense |
| Self-check protocol (Option C) | 25 | Circuit-breaker during build. Stops errors before they compound. | LOW -- Opus self-checks naturally |
| Compositional principles (Option A) | 30 | Encodes restraint, spatial confidence, transition musicality. | LOW -- more educational than operational |

**TIER 3: INFRASTRUCTURE (BUILD ONLY IF EXPERIMENTS PROVE VALUE)**

| Component | Lines | When to Build |
|-----------|-------|---------------|
| Orchestrator | ~250 | Only if Exp C > Exp B by >= 0.5 |
| Gate runner (15 gates) | ~400 | Only if Exp C > Exp B by >= 0.5 |
| Gate registry (YAML) | ~200 | Only if building gate runner |
| Perception threshold file | ~100 | If thresholds prove critical in experiments |
| Recipe template | ~650 | Only if Exp D > Exp C |

---

### (4) Three highest-leverage changes

**#1: USE OPUS FOR THE BUILDER.**

Every data point supports this. The confounds are real (report 16), but if you had to bet on one variable from N=4, this is it. Changing Sonnet to Opus changes the failure distribution from "meticulously compliant but flat" to "creative with occasional oversights that PA catches."

Cost: ~$5-15 more per page (Opus vs Sonnet pricing differential).
Evidence: N=4, zero exceptions.

**#2: GIVE THE BUILDER DIRECT ACCESS TO THE MECHANISM CATALOG.**

Both successful builds had the builder reading CSS-rich reference material directly. The Flagship routed the catalog to the planner (who doesn't write CSS) instead of the builder (who does). This is the "inverted quality routing" finding that survived the contrarian challenge.

Cost: 0 new lines (the catalog already exists). The builder reads it.
Evidence: CD-006 had full catalog access. Middle builder was told "Read mechanism-catalog.md." Flagship builder got zero catalog access.

**#3: RUN THE EXPERIMENTS BEFORE BUILDING MORE INFRASTRUCTURE.**

The meta-to-output ratio is at infinity:1 (0 pages built, 750KB+ analysis). Every additional report is diminishing returns. The first experiment ($5, 2 hours) will tell us more than 29 more reports.

Cost: ~$5-10 for first two experiments.
Evidence: This is the implementation guide's core insight, validated by 29 reports that collectively demonstrate we don't know what works until we test it.

---

### (5) What should the user build?

**PHASE 1: EXPERIMENTS (2 days, ~$20-30)**

Build NOTHING new. Run with existing files:

**Experiment A: The Naked Test ($5, ~2 hours)**
- Input: RESEARCH-SYNTHESIS.md + 42-line soul prompt
- Architecture: Single Opus agent, no pipeline
- Verification: Full Mode 4 PA (9 auditors)
- Purpose: Establishes baseline. If >= 3.0/4, the entire pipeline is unnecessary.

**Experiment B: Conventions Brief ($5-10, ~3 hours)**
- Input: RESEARCH-SYNTHESIS.md + conventions brief (~100 lines) + tokens.css + prohibitions.md
- Architecture: Single Opus agent, no pipeline
- Verification: Full Mode 4 PA
- Purpose: Tests whether the brief adds value over naked Opus. If >= 3.0/4 and > A by 0.5+, the brief is the pipeline.

**PHASE 2: BUILD BASED ON RESULTS (1-5 days, variable)**

| Exp A Result | Exp B Result | What to Build | Lines |
|-------------|-------------|---------------|-------|
| >= 3.5 | N/A | **NOTHING.** Brief is overhead. Ship Opus + soul prompt + PA shell. | 0 new |
| < 3.0 | >= 3.5 | **Conventions brief ONLY.** Ship brief + PA shell. Maybe add perception thresholds. | ~165 |
| < 3.0 | 3.0-3.4 | **Brief + critical gap.** Add transition grammar + density floors to brief. Consider Fat Core gates. | ~300-600 |
| < 3.0 | < 3.0 | **Full Fat Core.** Orchestrator + gates + enhanced brief. The 444-line critical gap becomes important. | ~1,250-1,700 |

**PHASE 3: FLAGSHIP TEST (only if Middle tier passes)**

Run same winning configuration with RESEARCH-SYNTHESIS.md (high-complexity content). If < 3.0/4, THEN consider Flagship-specific additions (TC enrichment, Tier 5 PA questions, divergent exploration).

---

## WHAT THE 29 REPORTS ACTUALLY CONTRIBUTED

Despite the contrarian challenge (report 16), the investigation produced genuine value:

1. **SPECIFICITY on the 444-line critical gap.** If experiments show the brief alone is insufficient, we know EXACTLY what to add: transition grammar (3 types, 80 lines), restraint protocol (60 lines), content density floors (80 lines), content-form fit (80 lines), spacing maxima (8 lines), impact profiles (36 lines), application modes (100 lines). This is actionable.

2. **The format hierarchy.** Recipe/constitutional > checklist is supported even with confounds. The specific mechanism (action verbs vs constraint verbs, sequenced steps vs rule lists) has theoretical backing from instructional design. This is actionable: write recipes, not checklists.

3. **Inverted quality routing diagnosis.** The insight that the Flagship sent the best reference files to the planner instead of the builder is robust. Fat Core's single-agent architecture eliminates this problem structurally. This is a genuine architectural insight.

4. **Gate coverage quantification.** Knowing that 15 gates cover ~26% of compositional quality and 65% is inherently un-gateable is valuable for setting expectations. Gates catch soul violations and measurable defects. They do NOT catch composition quality. PA is the composition quality gate. This is the correct architecture.

5. **The enhanced conventions brief design.** Options A+C+E (compositional principles + self-check + conviction card, ~75 lines) are a reasonable enhancement IF the base brief proves insufficient but the full Fat Core infrastructure proves unnecessary. This occupies a useful middle ground in the decision tree.

6. **PV2 Flagship Variant.** The updated diagram with gate coverage annotations, Flagship-specific thresholds (PA-05 >= 3.5 not 3.0), ALWAYS FLAGSHIP directive, and enhanced Fat Core specification is a comprehensive reference even if it's a hypothesis, not a tested design.

---

## THE ONE UNCOMFORTABLE TRUTH

The project has spent 50+ agent-hours analyzing a pipeline that has built exactly 0 pages using it. The meta-to-output ratio exceeds any reasonable threshold.

The analysis is thorough, internally consistent, and well-supported by the available evidence. But the available evidence is N=4 with confounded variables. Every conclusion is a hypothesis, no matter how many reports elaborate on it.

**The highest-confidence recommendation from all 29 reports is unanimous: RUN THE EXPERIMENTS.**

---

## SUMMARY TABLE

| Question | Answer | Confidence | Evidence |
|----------|--------|------------|---------|
| Can Fat Core produce 4/4 at Middle? | **PROBABLY YES** | 65-75% | CD-006 + Middle pattern match |
| Can Fat Core produce 4/4 at Flagship? | **UNKNOWN** | 35-50% | N=0 at Flagship complexity |
| What's the minimum for Middle 4/4? | **Opus + brief + catalog + PA** | MODERATE | N=2 (CD-006, Middle) |
| What's the minimum for Flagship 4/4? | **Unknown until tested** | LOW | N=0 |
| Highest-leverage change? | **Use Opus as builder** | HIGH (confounded) | N=4, zero exceptions |
| What to build first? | **NOTHING. Run Experiment A.** | HIGH | Unanimous across 29 reports |
| When to add infrastructure? | **Only after experiments prove need** | HIGH | Implementation guide sequencing |
