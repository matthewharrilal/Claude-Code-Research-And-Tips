# Research: SKILL.md Architecture Analysis

**Researcher:** architecture-researcher
**Date:** 2026-03-03
**Input:** SKILL.md (919 lines, v1.2), postmortem-synthesis.md, pipeline-intent-vs-reality.md
**Method:** Structural decomposition of the 5-phase pipeline, every handoff analyzed for information loss, every gate analyzed for coverage gaps, postmortem evidence cross-referenced throughout

---

## 1. THE 5-PHASE LINEAR ARCHITECTURE

### Shape: Why Linear?

The pipeline is a strict linear chain: SETUP -> DERIVE -> RESEARCH -> BUILD -> EVALUATE -> REFINE. No phase can begin until the previous phase's validation gate passes. No phase feeds back into an earlier phase (except REFINE -> re-EVALUATE, which is a forward loop within Phase 5, not a true backtrack).

**Why this shape makes sense:**
- **Context isolation.** Each agent gets a fresh context. The linear chain means information flows through FILES, not through accumulated conversation context. This is the pipeline's most important architectural decision -- it solves the "context overflow" problem that killed earlier approaches (26,528 lines of knowledge base cannot fit in any single agent's context).
- **Specialization.** The TC agent has domain expertise in metaphor derivation. Specialists have domain expertise in their knowledge-base slices. Builders have domain expertise in CSS composition. PA auditors have zero-context perceptual expertise. These roles cannot be effectively combined.
- **Traceability.** The linear chain produces a clear audit trail: TC brief -> specialist findings -> packages -> HTML -> PA reports -> verdict. The comparison report can trace any CSS rule back to its originating finding.
- **Cost governance.** Each phase has a cost estimate. The pipeline can be stopped after any phase. The $50 hard gate prevents runaway spending.

**Why this shape causes problems:**
- **No iteration within the creative process.** Human designers work in tight loops: sketch -> look -> revise. The pipeline writes CSS (Phase 3) and then the next time anyone LOOKS at the result is Phase 4 (PA evaluation), which is separated by a full phase boundary. The builder writes CSS blind -- never rendering, never evaluating, never revising based on visual feedback.
- **Information can only flow forward.** If Phase 4 (PA) discovers that the TC brief's core metaphor doesn't translate visually, the only recourse is Phase 5 (REFINE) which patches CSS, or a full REBUILD which restarts from Phase 1. There is no mechanism for "the page looks wrong in this specific way, let me re-derive the zone architecture."
- **Creative decisions are front-loaded and irreversible.** Phase 1 (TC) sets the metaphor. Phase 2 (Research) compiles the packages. Phase 3 (Build) deploys. By the time Phase 4 discovers problems, the entire creative direction is baked in. The conservative ratchet (identified in pipeline-intent-vs-reality.md) is a structural consequence of this linearity.

### Alternatives considered (or that should be):

1. **Iterative loop:** DERIVE -> BUILD-small -> EVALUATE-quick -> adjust -> BUILD-more -> EVALUATE-full. This is how human designers work. The pipeline rejects this because each agent is a fresh context (no memory of previous iterations without file handoffs), but the rejection is over-determined -- file handoffs COULD support iteration.

2. **Parallel tracks:** Run TC + Research concurrently, merge before Build. The current design is sequential (TC before Research) because specialists need the TC brief. But the TC brief primarily provides metaphor + arc + zones -- the specialists primarily provide knowledge-base findings. These could potentially be parallelized with a merge step.

3. **Hub-and-spoke:** One persistent "creative director" agent that orchestrates multiple specialists and builders, maintaining continuity. The pipeline rejects this because the orchestrator is explicitly banned from creative decisions (Principle 1). But a creative director is not the orchestrator -- it could be a separate persistent agent.

4. **Feedback loop from PA to Build:** Rather than the current REFINE phase (which patches), allow PA findings to trigger targeted re-builds of specific zones. This would require a zone-level build architecture rather than the current whole-page build.

---

## 2. EVERY HANDOFF BETWEEN PHASES

### Handoff 0->1: SETUP -> DERIVE

**What transfers:** Content markdown path, identity files (identity.md + vocabulary.md), TC skill path.
**What is lost:** Nothing -- Phase 1 gets clean inputs.
**Assessment:** Clean handoff. No information loss. The TC agent reads the content directly and derives fresh.

### Handoff 1->2: DERIVE -> RESEARCH

**What transfers:** TC brief (_tc-brief.md) + content markdown to all 5 specialists.
**What is lost:** The TC agent's reasoning process, alternative metaphors considered, creative tensions explored but not selected. The brief is a PRODUCT, not a PROCESS. Specialists see what was chosen, not what was rejected.
**Assessment:** Acceptable loss. The TC brief is designed to be conviction-driven -- it SHOULD be a definitive statement, not an exploration log. However, the "definitive metaphor" validation gate (Section 1 must contain no 'could', 'might', 'perhaps') means any productive ambiguity in the TC agent's thinking is stripped out.

### Handoff 2A->2C: SPECIALISTS -> SYNTHESIZER

**What transfers:** All 5 specialist outputs (~200 + 80 + 100 + 60 + 80 = ~520 lines minimum, often much more).
**What is lost:** The specialists' reading of the source files. Each specialist reads 3,800-5,200 lines of knowledge base. The synthesizer sees the specialist's EXTRACTIONS (findings, validated chains, case studies, constraints, protocols) but not the source material. The synthesizer must trust the specialists' judgment about what was relevant.
**Assessment:** THIS IS THE CORE COMPRESSION STEP. 26,528 lines of knowledge base -> ~520-800 lines of specialist output -> 3 package files (~600-770 lines total). The compression ratio is roughly 35:1 from source to packages. The pipeline-intent-vs-reality report identifies this as the "53 discrete items" problem: the packages are individually well-curated but collectively overwhelming.

**Critical information loss at this step:**
- Knowledge-base context that WASN'T extracted (what the specialists read but didn't flag)
- Cross-specialist connections (Specialist 1 and Specialist 3 may have found complementary patterns, but the synthesizer must discover this independently)
- Nuance and gradation (a specialist finding rated HIGH is transmitted; the reasoning about WHY it's high may be compressed)

### Handoff 2C->3: SYNTHESIZER -> BUILDERS (the three-way split)

**What transfers:**
- Pass 1 gets: _package-pass-1.md (Foundations: soul + context + mechanisms + consumption protocol + compositional questions + structural propositions)
- Pass 2 gets: _package-pass-2.md (Enrichment: findings + zones + case studies) + Pass 1 decisions
- Pass 3 gets: _package-pass-3.md (Hardening: anti-patterns + CSS examples + structural propositions) + Pass 1+2 decisions

**What is lost:**
- **Each builder sees only 1/3 of the packages.** Pass 1 builder never sees the zone architecture recipe (Section 4, in Pass 2). Pass 2 builder never sees the mechanism rationales (Section 2, in Pass 1). Pass 3 builder never sees the findings (Section 3, in Pass 2).
- **The TC brief is only seen by Pass 1 (indirectly via the package's Section 1).** Passes 2 and 3 see only the decisions.md files, which carry WHAT was decided but not the conviction behind it.
- **Compositional Questions live only in Pass 1.** Questions are explored during structure creation and then "deepened" via the decisions.md handoff. But the decisions.md carries "I explored Q2 with 6 channels" -- it does not carry the creative insight that generated the exploration.

**Assessment:** This is the rotation system's trade-off. It solves attention trough (real problem) but creates information isolation. The designers of this handoff explicitly chose file-based handoffs over shared context, accepting the loss. The question is whether the decisions.md mechanism is rich enough to carry cross-pass continuity.

**Evidence from Mar-03 build:** The Pass 1 decisions file flagged Q1 for completion in Pass 2 (3/7 channels deployed, 4 remaining). Pass 2 never completed Q1. The decisions.md handoff DID carry the flag. The Pass 2 builder either didn't read it or didn't prioritize it. The handoff format worked; the consumption failed.

### Handoff 3->4: BUILD -> EVALUATE

**What transfers:** Screenshots (6 images: 3 viewports x 2 crops each), sanitized to prevent context contamination.
**What is lost:** EVERYTHING except the visual output. The PA auditors receive zero pipeline context -- no metaphor name, no mechanism names, no package content, no builder reasoning. This is by design (fresh-eyes principle, Principle 8).
**Assessment:** This is the pipeline's MOST aggressive information boundary. The PA system evaluates what the page IS, not what it was supposed to be. The postmortem identified the consequence: auditors can SEE problems (232px gaps) but cannot EXPRESS them in terms the pipeline can act on. The Weaver bridges this gap by receiving both auditor reports AND the packages/HTML for compliance checking, but the Weaver's experiential anchor is supposed to outrank compliance data.

### Handoff 4->5: EVALUATE -> REFINE

**What transfers:** Weaver synthesis (_pa/synthesis.md), relevant package files (routed by gap location), builder reflection, the HTML itself.
**What is lost:** Individual auditor reports (Weaver synthesis replaces them). The auditors' fresh-eyes impressions are compressed through the Weaver's synthesis. If the Weaver misinterprets or downweights an auditor's observation, it's gone.
**Assessment:** The Weaver is a single point of failure. 5 independent auditors converge on a problem -> Weaver synthesizes -> Weaver decides verdict. In the Mar-03 build, all 5 auditors gave REFINE in cold look. The Weaver overrode to SHIP. The handoff format (5 reports -> 1 synthesis) structurally enables this override.

---

## 3. EVERY VALIDATION GATE

### Gate 0: SETUP
**Measures:** Files exist, directories created, Playwright browser available.
**Misses:** Nothing -- this is infrastructure validation, correctly scoped.

### Gate 1: DERIVE (TC Brief)
**Measures:** File exists, >50 lines, 6 sections present, definitive metaphor (no hedging), 3+ waypoints, compositional questions present (2-3 with 3+ CSS channels each), structural observation (non-blocking).
**Misses:**
- **Quality of the metaphor.** "Definitive" is measured by absence of hedge words, not by creative power. A trite metaphor stated definitively passes the gate.
- **Compositional arc feasibility.** The arc may propose zone progressions that are impossible to realize in CSS. No one checks whether the creative vision is buildable.
- **Question generativity.** The gate checks that questions EXIST with 3+ implied channels. It does not check whether the questions are genuinely generative or formulaic.
- **Content coverage.** The TC brief may focus on 70% of the content and ignore 30%. The gate checks for a Content Map section but not for completeness.

### Gate 2A: SPECIALIST OUTPUTS
**Measures:** File exists, line count above quality floor (200/80/100/60/80 lines).
**Misses:**
- **Quality vs quantity.** 200 lines of generic findings pass the gate. 150 lines of precise, actionable findings fail it. The gate measures volume, not relevance.
- **Content-specificity.** The gate does not check whether findings reference THIS article's specific structural features.
- **Cross-specialist overlap.** If Specialist 1 and Specialist 3 produce the same finding independently, this waste is not detected.
- **Actionability.** A finding can be "HIGH" relevance without containing a CSS action. The quality floor description says "Each HIGH finding: finding ID + relevance rationale + specific CSS action" but the gate only checks line count.

### Gate 2D: SYNTHESIZER (Packages)
**Measures:** Files exist, >=130 lines each (gate says 100 in one place, 130 in another -- inconsistency), recipe format (recipe verbs > checklist verbs), content-specificity (article title appears), structural uniqueness (2+ mechanism rationales reference content features), Section 10 (compositional questions) present with 5+ questions, Section 11 (structural propositions) present.
**Misses:**
- **Recipe VOLUME.** The gate checks recipe FORMAT but not recipe SIZE. A 300-line recipe in recipe format is functionally a checklist. No upper bound on item count.
- **Package coherence.** The gate checks sections independently but not whether the package tells a coherent story. Mechanisms could contradict zone architecture. Findings could be incompatible with the anti-patterns.
- **CSS specificity.** The gate checks for content references but not for CSS concreteness. A package can describe mechanisms in prose without providing deployable CSS.
- **Builder feasibility.** The gate does not check whether the total package is consumable by a single builder in a single pass. The 53-item problem is structurally invisible at this gate.

### Gate 3: BUILD (per-pass)
**Measures:** HTML exists, >1KB, has `<style>`, has Google Fonts, self-contained (no external stylesheets), decisions.md exists (>10 lines), Pass 2 >= Pass 1 size.
**Misses:**
- **CSS quality.** The gate checks HTML structure but zero CSS properties. A page with 10 lines of CSS and 1000 lines of unstyled HTML passes.
- **Content completeness.** The gate does not check whether all content sections are present in the HTML. The builder could skip sections.
- **Visual rendering.** The gate never renders the page. This is the postmortem's #1 finding (RC-1): no stage between BUILD and EVALUATE looks at the page.
- **Mechanism deployment.** The gate does not check whether the builder actually deployed any mechanisms. Deployment tracking is deferred to the comparison report (Phase 4), which is too late to correct.
- **Soul compliance.** The gate does not check border-radius: 0, box-shadow: none, or other soul invariants. These are checked by the builder's self-auditing (if the builder remembers) and by PA (which can't name CSS properties).

### Gate 4: EVALUATE
**Measures:** Synthesis has verdict, comparison report has gap analysis.
**Misses:**
- **Verdict quality.** The gate checks that a verdict EXISTS, not that it's CORRECT. The Weaver could issue SHIP on a bland page (as it did in Mar-03).
- **Auditor agreement.** The gate does not check whether auditors agreed or disagreed. 5/5 REFINE -> SHIP override is invisible at the gate level.
- **Gap severity.** The comparison report exists, but the gate doesn't check whether the gaps are severe or minor. The orchestrator trusts the Weaver's judgment.

### Gate 5: REFINE
**Measures:** Max 2 cycles, re-screenshot and re-PA after each.
**Misses:**
- **Fix scope.** The gate limits CYCLES but not the scope of each cycle. A single cycle could attempt 20 fixes or 1 fix. No guidance on optimal fix batch size.
- **Regression.** The gate checks that re-PA runs, but doesn't check whether the fix introduced NEW problems. The Weaver could approve a fix that solved one issue but created two others.
- **Fix addressing core issues.** The gate doesn't require that fixes address the auditors' "worst things." The Weaver curates the fix list, potentially sidelining the most important issues (as in Mar-03).

---

## 4. AGENT COUNT AND TOPOLOGY

### Count: 16-30 agents per run

- Phase 0: 0 agents (orchestrator only)
- Phase 1: 1 agent (TC)
- Phase 2: 6 agents (5 specialists + 1 synthesizer)
- Phase 3: 3 agents (1 per build pass)
- Phase 4: 6 agents (5 PA auditors + 1 weaver)
- Phase 5: 0-14 agents (up to 7 per fix cycle x 2 cycles)

**Total: 16 base + 0-14 refine = 16-30 agents**

### Topology: Star with sequential spine

The orchestrator is the hub. Every agent is spawned by and reports to the orchestrator. Agents NEVER communicate with each other directly. All inter-agent communication happens through FILES that the orchestrator routes.

```
              TC
              |
    S1 S2 S3 S4 S5  (parallel)
              |
          Synthesizer
              |
    B1 -> B2 -> B3   (sequential)
              |
   A1 A2 A3 A4 A5   (parallel)
              |
           Weaver
              |
         [Fix Builder -> Re-PA -> Re-Weaver] x 0-2
```

**What this topology enables:**
- Perfect isolation between agents (no contamination)
- File-based handoffs that survive context compression
- Parallel execution where dependencies allow (specialists, auditors)
- Clear accountability (each agent's output is a named file)

**What this topology prevents:**
- **Agent collaboration.** Specialists cannot ask each other clarifying questions. The builder cannot ask the TC agent "what did you mean by bilateral gaze?" The auditors cannot negotiate with the builder. This was identified in prior research as a key quality limiter: "Zero SendMessage = fast execution but quality cost."
- **Iterative refinement within a phase.** The builder writes CSS in 3 passes, but each pass is a new agent. Pass 2 cannot ask Pass 1 "why did you make this choice?" It can only read the decisions.md file.
- **Dynamic routing.** The orchestrator cannot adjust the pipeline based on intermediate results. If the TC brief is unconventional, the specialists still run the same prompt. If the packages are thin, the builder still runs 3 passes. The pipeline is structurally static.

---

## 5. COST GOVERNANCE

**Estimated ranges per phase:**
- Phase 0: $0 (orchestrator context)
- Phase 1: $3-5 (1 Opus agent)
- Phase 2: $10-18 (6 Opus agents)
- Phase 3: $12-18 (3 Opus agents, heavy CSS generation)
- Phase 4: $5-10 (6 Opus agents)
- Phase 5: $0-16 per cycle, max 2 cycles ($0-32)

**Total: $30-59 base + $0-32 refine = $30-91**

**Hard gate: $50.** The orchestrator MUST pause and get user approval before exceeding $50 cumulative.

**Assessment:**
- The $50 gate is placed well -- it triggers before Phase 5 in most runs, giving the user a decision point before expensive re-evaluation cycles.
- Cost estimates are RANGES, not precise. The orchestrator estimates based on agent count, not actual token usage. No mechanism to measure actual cost during the run.
- All agents are Opus (Principle 10: "All Opus, all the time"). This is the single largest cost driver. The pipeline explicitly rejected model downgrading for specialists or auditors.
- The pipeline has no mechanism to SHORT-CIRCUIT an expensive phase. If Phase 2 produces thin specialist outputs, the pipeline still runs the full synthesizer and 3 build passes before discovering the thinness at Phase 4.

---

## 6. CONTEXT RECOVERY

The pipeline has an explicit context recovery protocol, reflecting the reality that the orchestrator's context WILL compress during a long run.

**Mechanism:** `_pipeline-log.md` serves as the orchestrator's external memory. Every phase writes a checkpoint with timestamps, artifact counts, validation results, cost estimates, and decisions. When context compresses, the orchestrator re-reads the pipeline log to find its position.

**What works:**
- Phase boundary checkpoints are well-defined
- Each phase section begins with "Context recovery: If context has compressed, re-read _pipeline-log.md"
- File-based handoffs mean agent outputs survive compression
- Decisions.md files carry cross-pass continuity for builders

**What doesn't work:**
- **Orchestrator judgment is lost.** If the orchestrator noticed something concerning at Phase 2 (a thin specialist output that technically passed the gate), this observation is lost when context compresses. The checkpoint format includes "Concerns" but the orchestrator may not realize what to record.
- **No recovery for mid-phase compression.** If context compresses DURING Phase 2 (between specialist 3 and specialist 4), the orchestrator may not realize specialists 1-3 have completed. The pipeline log wouldn't have a Phase 2 checkpoint yet because Phase 2 isn't complete.
- **Decision rationale is compressed.** The checkpoint records "Decision: PROCEED" but the reasoning behind that decision (e.g., "S3 output was thin but acceptable because the content has limited case-study affinity") is compressed to one sentence.

---

## 7. THE 13 KEY PRINCIPLES: WHICH FOLLOWED, WHICH ASPIRATIONAL, CONTRADICTIONS

### Principles That Are Structurally Enforced

**P1: Orchestrator handles plumbing, not creativity.**
Status: ENFORCED. The SKILL.md explicitly and repeatedly tells the orchestrator "you do NOT make compositional decisions." Agent prompts are passed as file paths, not composed by the orchestrator.

**P2: Three files, not one.**
Status: ENFORCED. The 3-package split is hardcoded into the synthesizer prompt and the build-pass routing. The orchestrator validates all 3 files exist.

**P5: Rotation ensures full consumption.**
Status: ENFORCED. Each pass receives exactly one package in primacy position. The reading order is specified precisely.

**P7: Context management through files.**
Status: ENFORCED. Every phase reads from and writes to `_pipeline-log.md`. Decisions.md files bridge build passes. Context recovery instructions appear at every phase boundary.

**P8: Fresh-eyes PA is non-negotiable.**
Status: ENFORCED. The PA auditors receive only sanitized screenshots. The Weaver does not receive the TC brief. The information boundary is explicit and well-guarded.

**P10: All Opus, all the time.**
Status: ENFORCED. Every agent spawn specifies `model: "opus"`.

**P11: Validation gates between every phase.**
Status: ENFORCED. Every phase ends with explicit validation steps and "DO NOT proceed until validation passes."

### Principles That Are Designed But Degraded in Practice

**P3: Recipe format, not checklist format.**
Status: DESIGNED BUT DEGRADED. The synthesizer prompt explicitly bans checklist verbs. The validation gate checks recipe vs checklist verb counts. But as pipeline-intent-vs-reality.md found: "A recipe with 53 steps is functionally a checklist, regardless of verb format." The principle is enforced at the FORMAT level but not at the VOLUME level. No gate checks total item count.

**P4: Per-build curation, not generic vocabulary.**
Status: DESIGNED BUT PARTIALLY DEGRADED. The validation gate checks for content-specific references. Specialists DO produce content-specific findings. But the synthesizer compiles these into packages that contain both content-specific items AND generic vocabulary (soul checklist, anti-patterns, token values). The generic content dilutes the curation.

**P9: Quality floors, not quality ceilings.**
Status: DESIGNED BUT ASYMMETRICALLY ENFORCED. Quality floors exist (line counts). Quality ceilings are banned in principle. But the pipeline structure imposes implicit ceilings: package volume creates builder overwhelm, 3-pass structure limits creative iteration, decisions.md format limits cross-pass continuity. The principle says "if a specialist finds 40 HIGH findings, let it produce 200 lines" -- but the builder who receives 40 HIGH findings in a 300-line package is effectively constrained.

**P12: Re-read at every phase boundary.**
Status: DESIGNED BUT UNRELIABLE. Context recovery instructions are present. But the orchestrator is an LLM -- it may not realize its context has compressed. The instruction "if you suspect context may have compressed" relies on the orchestrator's self-awareness, which is unreliable after compression.

### Principles That Are Aspirational

**P6: Diagnostic by design.**
Status: ASPIRATIONAL. The comparison report maps package -> build -> PA. But as the postmortem found, the diagnostic maps DEPLOYMENT, not EFFECT. "M04 deployed" is tracked. "Does the page feel progressively denser?" is not. The instrumentation is thorough for compliance diagnostics and absent for quality diagnostics.

**P13: Instrumentation is diagnostic, not overhead.**
Status: ASPIRATIONAL. Layer A (agent logs) is ~200 tokens per agent -- genuinely low overhead. Layer B (checkpoints) is useful for context recovery. Layer C (comparison report) is useful for understanding knowledge transfer. But the instrumentation became a success metric (the "green dashboard" problem). The postmortem found that "10/10 followed, 0/10 partial, 0/10 not followed" was interpreted as pipeline success when the page was perceptually bland. The instrumentation is diagnostic for compliance but MISLEADING for quality.

### Contradictions

1. **P1 (orchestrator doesn't create) vs P7 (orchestrator manages context).** The orchestrator is responsible for routing package files to fix builders based on gap analysis (Step 5B). This routing requires JUDGMENT about which gaps matter and which package files address them. The orchestrator is making creative triage decisions while being told it doesn't make creative decisions.

2. **P3 (recipe format) vs package volume.** The design says "recipe, not checklist." The execution produces 53-item recipes. These are contradictory at the FUNCTIONAL level even though they're consistent at the FORMAT level. The principle needs a corollary: "recipe format AND recipe SCOPE -- no package should contain more than N actionable items."

3. **P8 (fresh-eyes PA) vs Weaver receiving packages.** The Weaver is supposed to have an experiential anchor ("Your experiential anchor outranks auditor reports") but also receives the 3 packages and HTML for compliance checking. The Weaver's experiential judgment is contaminated by seeing the package's prescriptions. If the Weaver knows the package prescribed 8 mechanisms and sees 8 mechanisms deployed, the compliance satisfaction suppresses the perceptual assessment.

4. **P9 (no quality ceilings) vs gate line-count minimums.** Quality floors measured by line count implicitly create a ceiling: agents optimize for line count rather than insight density. A specialist that produces 60 brilliant lines is told to "go deeper" while one that produces 200 mediocre lines passes.

5. **P11 (gates between every phase) vs the absence of a rendering gate.** There are validation gates after EVERY phase -- except none of them render the page. The most important validation (does the page look good?) is structurally absent from the gate system. The PA phase is the closest proxy, but PA evaluates atmosphere, not craft.

---

## 8. VERSION HISTORY PATTERNS

### v1.0 (2026-03-01): Initial release
- 5-phase pipeline, 16-17 agents, 14 prompt files
- Tested on two builds (Molly/Panopticon and Yegge/Gas Town)

### v1.1 (2026-03-02): 31-finding remediation
- Added Compositional Questions layer (Section 10)
- Standardized citation format
- TC question carry-through to specialists
- KB question families from proven exploration questions
- Builder question exploration across 3 passes
- PA rebalancing
- Weaver override visibility
- Pre-fix preservation
- $50 hard gate
- Target: 5-7 channel coordination per question (up from 3-4)

### v1.2 (2026-03-02): Structural awareness
- TC structural observation (non-blocking)
- Section 11 (Structural Propositions) in Pass 1 package
- Builder ADOPT/MODIFY/REJECT decisions
- PA questions E-21/E-22/E-23 for structural perception
- Weaver structural variety metrics (DIVERSE/UNIFORM)
- Comparison report structural variety section
- All structural checks non-blocking

### Pattern analysis:

1. **Additive evolution.** Every version ADDS sections, checks, and mechanisms. No version REMOVES anything. v1.1 added Section 10 (compositional questions). v1.2 added Section 11 (structural propositions). The pipeline grows more complex with each version. This is the "complexity ratchet" identified in prior research -- rules accumulate, never retire.

2. **Non-blocking by default.** v1.2's structural awareness is entirely non-blocking. The TC structural observation is "informational, not a gate failure." The builder's structural adoption is "the builder's creative decision." The orchestrator "enables but does not enforce structural invention." This reflects a design philosophy of OPTIONALITY over REQUIREMENT. But optionality for LLM agents means "ignore by default" -- unless something is enforced, agents take the path of least resistance.

3. **Quick iteration cycle.** v1.0, v1.1, and v1.2 were all released on consecutive days (Mar-01, Mar-02, Mar-02). This is a high-velocity iteration pattern that adds features without removing old ones. The risk is feature accretion without integration -- each version adds a new section to the packages without reducing existing sections.

4. **The "one more section" pattern.** v1.1 added Section 10. v1.2 added Section 11. Each is ~30-50 lines in the package. The cumulative effect is that Pass 1's package grows from ~280 lines to ~360 lines. The builder's consumption burden increases with each version.

---

## 9. STRUCTURAL ASSUMPTIONS (implicit, not stated)

### Assumption 1: File-based handoffs are sufficient for creative continuity

The pipeline assumes that decisions.md files (20-30 lines) can carry enough creative context from Pass 1 to Pass 2 to Pass 3. The Mar-03 build showed this assumption failing: Pass 1 flagged Q1 for completion, Pass 2 never completed it. The handoff format worked; the creative continuity did not transfer.

### Assumption 2: Specialist outputs are complementary, not redundant

The 5-specialist partition assumes that dividing the knowledge base into 5 slices produces 5 complementary perspectives. But the partitioning is by SOURCE (research files, provenance files, case studies, constraints, protocols), not by FUNCTION (what the builder needs to know about spacing, typography, color, layout, interaction). This means the builder's needs are scattered across all 5 specialist outputs, and the synthesizer must reconstruct builder-relevant information from source-oriented extractions.

### Assumption 3: The PA system is the visual quality gate

The pipeline has no visual quality check between Build (Phase 3) and PA (Phase 4). The implicit assumption is that the PA system WILL catch visual quality problems. The Mar-03 build showed this assumption failing: the PA system evaluates atmosphere, not craft. The pipeline has no backup visual quality mechanism.

### Assumption 4: The Weaver's judgment is reliable

The entire EVALUATE -> REFINE handoff depends on the Weaver correctly synthesizing 5 auditor reports, performing compliance checking, and issuing an appropriate verdict. The Weaver is a single agent making a high-stakes decision. The Mar-03 build showed this assumption failing: the Weaver overrode 5/5 REFINE verdicts with no accountability mechanism.

### Assumption 5: More information = better output

The pipeline's evolution pattern is to ADD sections, findings, questions, propositions. The assumption is that giving builders more curated research produces better pages. The Mar-03 build showed the opposite: 53 items consumed all creative bandwidth. The pipeline has no mechanism for information SUBTRACTION -- no gate checks "is this package too rich to consume in a single pass?"

### Assumption 6: The builder can self-audit CSS quality

The builder prompts include self-auditing instructions (check stacked gaps, verify soul compliance, etc.). The assumption is that builders will follow these instructions alongside their primary creative work. The Mar-03 build showed self-auditing failing: Pass 3 hardening checks existed in the prompt but were not executed. When creative production and self-auditing compete for the builder's attention, creative production wins.

---

## 10. CROSS-CUTTING FINDINGS

### Finding 1: The pipeline has zero render-evaluate steps

This is the postmortem's #1 finding (RC-1) and the architecture confirms it. Between Phase 0 (setup) and Phase 4 (PA screenshots), the page is NEVER rendered. The builder writes CSS based on package instructions without visual feedback. This is the single largest architectural gap.

### Finding 2: Information compression is 35:1 with no fidelity check

26,528 lines of knowledge base -> 5 specialist outputs (~520-800 lines) -> 3 packages (~600-770 lines) -> 1 HTML page. The compression happens in two steps (specialists, synthesizer) with quality gates that check VOLUME but not FIDELITY. There is no mechanism to verify that the compression preserved the most important information.

### Finding 3: The gate system measures structure, not quality

Every gate checks file existence, line counts, section headers, and verb format. No gate checks CSS quality, visual rendering, content coverage, or perceptual impact. The gates ensure the pipeline RUNS; they do not ensure the pipeline produces good output.

### Finding 4: The 3-pass structure solves attention trough but creates conservative ratchet

The rotation design is clever and solves a real problem. But its side effects (creative ambition decreasing across passes, first-pass decisions becoming permanent) are more damaging than the problem it solves. The attention trough problem could potentially be solved with smaller, more focused packages rather than a 3-pass rotation of large packages.

### Finding 5: The Weaver is structurally over-powered

The Weaver receives auditor reports, packages, HTML, builder reflection, and builder decisions. It produces the verdict, the compliance assessment, and the fix scope. It can override unanimous auditor opinions. It is the single point of failure for the entire evaluation phase. The design intended the Weaver to be a creative synthesis role; in practice, it is an unchecked authority.

### Finding 6: Cost governance works; quality governance doesn't

The $50 hard gate, per-phase cost estimates, and user approval checkpoints are well-designed cost governance. But there is no equivalent quality governance. No gate says "the pipeline has produced mediocre output at 80% of budget; stop and reconsider." Quality governance is entirely delegated to the PA system, which (as the postmortem found) evaluates atmosphere rather than craft.

### Finding 7: The pipeline's anti-compliance design principles are real but structurally unsupported

Principles 3 (recipe format), 4 (per-build curation), and 9 (no quality ceilings) are genuinely anti-compliance. But the pipeline structure (volume of items, traceability requirements, gate metrics, green dashboard) creates compliance pressure that the principles cannot override. The principles are aspirational text in the SKILL.md; the compliance pressure is structural in the gates and handoffs.

---

## 11. SUMMARY: ARCHITECTURE STRENGTHS AND GAPS

### What the architecture gets right:
- Context isolation through file-based handoffs
- Specialization (TC, research, build, evaluate are genuinely different skills)
- Cost governance ($50 hard gate, per-phase estimates)
- Context recovery protocol (pipeline log, phase checkpoints)
- Fresh-eyes PA (zero-context auditors)
- Rotation for attention-trough prevention
- Explicit agent prompts stored as separate files for maintainability

### What the architecture gets wrong:
1. **No render-evaluate loop.** The biggest gap. Zero visual feedback during the creative process.
2. **Compression without fidelity checking.** 35:1 compression from knowledge base to packages with only volume gates.
3. **Gates measure structure, not quality.** File existence and line counts, never visual rendering or CSS quality.
4. **Conservative ratchet.** First-pass decisions are permanent. No creative recovery mechanism.
5. **Single-point-of-failure Weaver.** Unchecked authority over the evaluation verdict.
6. **Information overload without volume control.** Packages grow with each version, no mechanism for subtraction.
7. **Compliance pressure from traceability.** Deployment completeness becomes the success metric, overriding perceptual quality.

### The fundamental tension:

The pipeline was designed to solve a CONTEXT MANAGEMENT problem (26,528 lines of knowledge too large for any single agent). It solved that problem well. But in doing so, it created a CREATIVE PROCESS problem: the pipeline is a document-processing chain that produces documents, not a visual design process that produces visual designs. The architecture needs a fundamental addition: render-evaluate-intervene capabilities at the BUILD phase, not just at the EVALUATE phase.
