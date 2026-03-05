# Master Synthesis: Pipeline Methodology Investigation

**Date:** 2026-03-01
**Scope:** Synthesis of 9 research documents (01 Master Findings + 02 Exploration Architecture + 03 Pipeline Gap Analysis + 04 Generative Questions + 05 Provenance Mechanism + 06-09 Dimensional Analyses), totaling ~320k of primary analysis from 13+ Opus research agents
**Purpose:** Establish what we KNOW, what we BELIEVE, what we DON'T KNOW, and what we should DO about the quality gap between exploration-era HTML files and compose pipeline output

---

## 1. WHAT WE KNOW (High Confidence, Multi-Source Convergence)

These findings are supported by evidence from multiple independent agents, verified against primary source documents, and consistent across all analytical dimensions.

### 1.1 The Tripod Existed and Produced Quality

The exploration era operated with a three-instrument architecture that the pipeline lacks:

**Instrument 1: Researcher/Curation Layer (Agent-0C pattern)**
- Agent-0C traversed the full accumulated knowledge graph (337 research findings, 88 stage findings, 24 validated explorations, 94 EXT-* bespoke findings)
- Produced per-builder research packages (100-200 lines each, self-contained, implementation-mapped)
- Verified across CD stage: 6 packages, 6 builders, 0 soul violations, average score 37.3/40
- Source: 01 Section 5, 02 Section 6, 05 Section 3, 06 Sections 2-5

**Instrument 2: Structural Propositions (Generative Questions)**
- Exploration-era questions were top-down architectural hypotheses: "Can X work?" -> "What if X organized?" -> "Does X serve Y?" -> "Can N coexist?"
- These produced testable structural propositions connecting content properties to visual properties (e.g., "density inversely correlates with confidence")
- TC's bottom-up experiential questions ("What does the reader need to FEEL?") are categorically different and do not produce structural propositions
- Source: 01 Section 3, 04 Sections 1-5, 06 Section 4

**Instrument 3: Accumulation Across Stages**
- Knowledge grew across 5 stages: DD (18 DD-F) -> OD (17 OD-F + 94 EXT-*) -> AD (28 AD-F) -> CD (25 CD-F)
- Total accumulated: 337 research findings + 88 stage findings + 94 bespoke findings = 500+ distinct knowledge items available to CD-006
- CSS growth: DD avg 517 -> OD avg 980 -> AD avg 897 -> CD avg 886 (peaks at OD due to enrichment waves)
- Score growth: DD avg 34.5 -> OD 35.5 -> AD 36.2 -> CD 37.3 (crown jewels: 36 -> 37 -> 38 -> 39)
- Source: 01 Section 3, 02 Sections 1-9, 09 Section 3

### 1.2 The Pipeline Lacks 2 of 3 Instruments

The compose pipeline currently has:
- TC agent (produces experiential conviction -- this IS the pipeline's version of emotional direction)
- 7 static vocabulary files (identity.md, vocabulary.md, tokens.css, mechanisms.md, grammar.md, components.css, components.md -- total ~1,319 lines)
- Builder, PA auditors, Weaver, fix cycles

The pipeline lacks:
1. **No researcher/curation layer.** Every builder gets the same 7 files regardless of content, metaphor, or structural requirements. No per-build curation. No implementation-mapped findings.
2. **No structural propositions.** TC produces experiential metaphors ("geological stratification") but not structural rules ("density inversely correlates with confidence; spacing = 16px * confidence_tier"). The builder must independently translate feeling into CSS.
3. **No findings production.** Builds produce HTML + PA reports. No stage findings feed forward. No enrichment waves. No accumulated identity growth.
4. **No anti-orphaning.** 337 research findings exist in the repository but are invisible to the builder. Knowledge sits in files the builder never reads.
5. **No constraint linkage.** Pipeline vocabulary gives mechanism NAMES ("border-weight gradient encodes hierarchy") without tracing them to the DD-F/OD-F/AD-F findings that validated them, the constraints they must honor, or the expected perceptual evidence.
6. **No expected evidence.** The builder has no statement of what "correct" looks like. Programmatic gates passed while PA found imperceptible differences -- because no one told the builder what perceptual success looks like.

Source: 01 Section 6, 03 (full document), 06 Section 7, 07 Section 3

### 1.3 The Context Window Framing Is the Wrong Framing

This is the core insight of the entire investigation, convergently identified by the master findings and confirmed across all dimensional analyses:

> "We reframed a knowledge-growth problem as a context-management problem, and that reframing IS the root cause of the quality gap."

The exploration era never asked "how do we fit knowledge into a context window?" It asked "how do we make knowledge RICHER before it reaches the builder?" The pipeline inverted this: "given a context window, what do we put in it?" This led to 48:1 compression (337 findings -> 7 files), destroying 6 of 7 knowledge quality dimensions (07 Section 3).

The compression is not recoverable. Quality was a PROCESS PRODUCT, not a STORAGE FORMAT. You cannot decompress "border-weight gradient encodes hierarchy" back into the 4-layer finding (what/evidence/constraint/how) that created it. The mapping from generic mechanism to specific implementation requires knowing the content, the metaphor, and the stage constraints -- this mapping was CREATED by researcher agents, not ENCODED in the files. (07 Section 4)

Source: 01 Section 4, 03 Section 2, 07 Sections 2-4

### 1.4 The Compression Destroys 6 of 7 Knowledge Quality Dimensions

The epistemological analysis (07) identified seven independent dimensions of knowledge quality:

| Dimension | Exploration Era | Pipeline | Status |
|-----------|----------------|----------|--------|
| Implementation Specificity | 4-layer findings (what/evidence/constraint/how) | 1-layer names | 75% destroyed |
| Constraint Linkage | Explicit DD-F/OD-F/AD-F links per finding | No links | 100% destroyed |
| Expected Evidence | "Natural pause points per scroll" | Not present | 100% destroyed |
| Per-Build Relevance | Packages tailored per builder/content | Same 7 files always | 100% destroyed |
| Provenance Context | Full validation history | Not present | 100% destroyed |
| Anti-Orphaning | Structural guarantee: finding -> package -> builder | No routing mechanism | Never existed |
| Enrichment Trajectory | v1 -> v2 -> v3 with targeted feedback | Single-pass, no growth | Architecturally impossible |

A researcher agent would address dimensions 1-5 directly. Dimensions 6-7 require architectural changes beyond a single agent.

### 1.5 AD Without Re-Enrichment Is the Controlled Experiment

AD (axis explorations) skipped the 43-agent re-enrichment wave that OD received. Same team, same era, same standards, same tools. The measurable consequences:

| Metric | OD (with enrichment) | AD (without) |
|--------|---------------------|--------------|
| Threading density | 1.0x (baseline) | 0.28x (3.6x less connected) |
| Dark matter items | 0 (all surfaced) | 47 orphaned knowledge items |
| Infrastructure staleness | 0 files | 7+ files out of date |
| Findings produced | 17 | 28 (more, but less connected) |
| Score average | 35.5/40 | 36.2/40 (HIGHER -- but inherited OD's enrichment) |

Critical distinction: re-enrichment's value is not visible in ARTIFACT scores (AD scored higher because it inherited OD's enriched findings through handoffs). Its value is visible in SYSTEM quality -- how easily the next stage can absorb what this stage discovered. (09 Section 3)

The pipeline repeats AD's omission for every build, but goes further: zero findings production, zero provenance, zero accumulated identity, zero bespoke research, and the same static 7 files regardless of content. (09 Section 5)

---

## 2. WHAT WE BELIEVE (Supported But Not Proven)

These findings are supported by evidence and logic but have not been tested through controlled experiments with the pipeline specifically.

### 2.1 The Tripod CAUSED the Quality Difference

The correlation between the tripod (researcher layer + structural propositions + accumulation) and exploration-era quality is strong. The data shows:

- Knowledge depth correlates with scores: DD-001 (2 refs, 33/40) -> CD-006 (337+ refs, 39/40)
- AD without re-enrichment had 3.6x less knowledge connectivity than OD with it
- CSS growth correlates with available knowledge: DD avg 517 -> OD avg 980

However, causation is not proven. Multiple confounding variables exist (see Section 3.3). The exploration era was ALSO a research program with multi-session iteration, human oversight, different content, and different temporal pressure. The tripod may be necessary but not sufficient, or it may be a symptom of a deeper cause (the research orientation itself).

Confidence: 70-80% that the tripod is a major causal factor. 50-60% that it is THE primary causal factor.

### 2.2 The Missing Researcher Agent Is the Highest-Leverage Intervention

All four dimensional analyses converge on this:

- **Functional (06):** The researcher would traverse 100,000+ words of accumulated knowledge and curate 150-line per-build packages with implementation-mapped findings, structural propositions, expected evidence, and constraint linkage.
- **Epistemological (07):** The researcher addresses 5 of 7 knowledge quality dimensions, the most of any single intervention.
- **Architectural (08):** Minimum viable researcher = 1 Opus agent, $2-4, 15-20 minutes. Post-TC placement. Token-neutral (replaces generic files with curated package of similar size).
- **Comparative (09):** AD's partial compensation (pre-build convention spec + bespoke research) produced higher artifact scores than OD. The researcher agent replicates these mechanisms for the pipeline.

The researcher is highest-leverage because it is:
1. The cheapest intervention (~$2-4 per build for minimum viable)
2. The fastest to implement (one additional agent between TC and builder)
3. The most directly analogous to what worked (Agent-0C pattern)
4. Token-neutral for the builder (curated 150 lines replaces generic 1,319 lines)

Confidence: 75-85% that a researcher agent would measurably improve PA scores.

### 2.3 The Curation Process and Package Are Inseparable

A research package compiled by a human once and reused for all builds is NOT equivalent to a research package compiled per-build by an agent. This is because:

1. Per-build relevance requires analyzing THIS content against the accumulated knowledge
2. The metaphor (from TC) changes what knowledge is relevant
3. Content structure (hierarchical vs narrative vs reference) determines which mechanisms apply
4. Implementation mapping (CSS ranges, expected evidence) must be specific to THIS content's sections

The 7 vocabulary files ARE a static research package -- compiled once for all builds. The evidence shows this is insufficient. The value is in the CURATION ACT itself, not in the static output of prior curation.

Confidence: 85-90%. This is well-supported by the exploration-era evidence (Agent-0C created DIFFERENT packages for different builders because different explorations had different structural challenges).

### 2.4 The Quality-Knowledge Relationship Is Threshold-Based

The epistemological analysis (07 Section 6) models quality as a function of knowledge depth:

- DD-001 to DD-006: 3-point quality increase for 10x knowledge increase (sublinear)
- DD-006 to OD-006: 1-point increase for 2.5x knowledge (more sublinear)
- OD-006 to CD-006: 2-point increase for 6.7x knowledge (crosses a threshold)
- Pipeline: sits at a fixed point (7 files) well below the threshold

The threshold appears to be around 20-50 implementation-mapped references, below which builders produce technically correct but perceptually flat output. Above this threshold, compositional richness emerges.

The implication: any intervention that crosses the threshold will produce a DISCONTINUOUS quality improvement, not a gradual one. A researcher agent providing 10-15 implementation-mapped findings (from a base of 20-50 relevant references in the corpus) could cross the threshold.

Confidence: 60-70%. The threshold model is inferred from limited data points (N=4 stages + N=2 pipeline runs).

---

## 3. WHAT WE DON'T KNOW (Open Questions, Confounded Variables)

### 3.1 Model Capability: Opus vs Sonnet

The exploration era used Opus for ALL builder agents. The pipeline uses both Opus and Sonnet. From prior memory: "Sonnet complies meticulously; Opus complies AND creates beyond constraints. Potentially highest-leverage single intervention."

We do not know:
- Whether the quality gap is primarily model-driven rather than process-driven
- Whether Sonnet with a researcher agent matches Opus without one
- Whether Opus with current pipeline already produces exploration-era quality

This is the single biggest confound in the entire investigation. The model variable was never isolated.

### 3.2 Whether Pre-Existing Knowledge Enables Sufficient Curation

The knowledge base NOW exists (337 findings, 88 stage findings, 24 explorations). The exploration era was CREATING this knowledge; a researcher agent would be TRAVERSING it. We do not know:

- Whether traversal of existing knowledge achieves the same quality as the process of creating it
- Whether the existing knowledge is detailed enough for implementation-mapped packages (or whether the original research files have been archived/compressed beyond recovery)
- Whether a single-session researcher agent can replicate the quality of Agent-0C, who operated within weeks of accumulated session context

The epistemological analysis (07 Section 5) estimates: "CURATED loaded knowledge achieves 60-80% of lived knowledge's effect." The remaining 20-40% requires experiential builder cycles or builder-level knowledge accumulation.

### 3.3 Whether Minimum Viable Tripod Crosses the Quality Threshold

The threshold model (Section 2.4) predicts a discontinuous improvement when knowledge depth crosses ~20-50 references. But we don't know:

- Whether a minimum researcher (1 agent, 15 min, $2-4) produces enough implementation-mapped references to cross the threshold
- Whether the threshold applies to pipeline builds (different from exploration builds in multiple ways)
- Whether crossing the threshold on knowledge depth translates to crossing the perceptual quality threshold that PA audits measure

### 3.4 The Cost-Quality Relationship

The architectural analysis (08) maps the cost spectrum:

| Configuration | Cost | Time | Expected Quality |
|---------------|------|------|-----------------|
| Current pipeline | $12-28 | 1-2h | Baseline |
| + minimum researcher | $15-35 | 1.5-2.5h | Unknown |
| + full researcher (3-4 agents) | $25-50 | 2-3.5h | Unknown |
| + multi-pass with researcher | $27-53 | 2.5-3.5h | Unknown (predicted highest) |

We have zero data points on the pipeline WITH a researcher agent. All quality predictions are extrapolated from exploration-era evidence under different conditions.

### 3.5 Whether TC's Library Access Prohibition Should Be Modified

TC deliberately operates blind to accumulated knowledge (Library Access Prohibition). The generative questions analysis (04) shows TC and explorations ask categorically different questions:

- TC: bottom-up, experiential, reader-oriented ("What does the reader need to FEEL?")
- Explorations: top-down, architectural, structure-oriented ("Can N patterns coexist?")

We don't know whether:
- TC would produce better metaphors if it could see structural propositions from prior explorations
- Contamination risk outweighs the benefit of structural awareness
- The parallel model (TC and researcher run simultaneously on the same content) produces coherent or contradictory outputs

### 3.6 Whether Findings Production Is Achievable Within Pipeline Constraints

The pipeline is a single-session, 1-2 hour process. Findings production in the exploration era required multi-session iteration. We don't know:

- Whether a pipeline builder can produce meaningful findings in a single pass
- Whether PA auditors can produce findings (not just fix instructions)
- Whether findings from build N can practically reach build N+1 given the pipeline's per-session architecture
- What the minimum viable findings-production mechanism looks like

---

## 4. STRONGEST ARGUMENTS FOR THE TRIPOD

### 4.1 The Functional Argument (from 06)

The functional analysis traces exactly what a researcher agent would DO at every step:
1. Receive TC output (metaphor, creative conditions)
2. Parse the metaphor's structural implications into search queries against accumulated knowledge
3. Traverse relevant findings (R-stream, stage findings, validated explorations, bespoke research)
4. Filter by content properties (structure type, length, audience, domain)
5. Produce implementation-mapped findings with specific CSS ranges, expected evidence, and constraint linkage
6. Package as a 100-200 line self-contained research package

The builder's experience changes from "translate feeling into CSS independently" to "follow an architectural plan with creative latitude within the framework." This directly mirrors how CD builders operated -- and CD builders produced CD-006 (39/40).

The distinction between VOLUME (giving the builder more files) and CURATION (giving the builder fewer, more relevant lines) is critical. The librarian vs shelf metaphor: "A shelf holds every book. A librarian reads every book and then hands you the three that answer YOUR question, with the relevant pages bookmarked." (06 Section 6)

### 4.2 The Epistemological Argument (from 07)

Knowledge quality is not a scalar -- it has 7 independent dimensions. The pipeline destroyed 6 of 7 through compression. This is a DIMENSIONAL COLLAPSE, not an information reduction. No amount of improving the vocabulary files addresses the missing dimensions because:

- Implementation specificity requires per-build analysis (cannot be pre-computed)
- Constraint linkage requires knowing which prior findings validated each rule (severed at compression time)
- Expected evidence requires knowing what perceptual success looks like for THIS content (varies per build)
- Per-build relevance is a computation, not a retrieval
- Provenance context cannot exist in files that discarded their own history

Quality is a PROCESS PRODUCT: "It was created by the act of curation, not encoded in the files that curation produced." (07 Section 4)

### 4.3 The Architectural Argument (from 08)

The architectural analysis shows the researcher fits naturally into the pipeline:

- **Placement:** Post-TC, pre-builder (Option B). TC derives independently; researcher translates metaphor into structural architecture using accumulated knowledge. Builder receives both conviction (from TC) and architecture (from researcher).
- **Cost:** +$2-4 for minimum viable, +15-20 min. Token-neutral for builder (curated 150 lines replaces generic files).
- **Precedent:** This is architecturally identical to what Agent-0C did in the CD stage.
- **REFINE synergy:** The existing REFINE builder (different Opus, reads conviction + artistic only) could receive researcher output between passes, creating a build -> PA -> research -> rebuild cycle that approximates exploration-era enrichment within a single session.

The architectural analysis also identifies the deepest constraint: "The compose pipeline's context isolation model is fundamentally incompatible with knowledge accumulation." The researcher agent is architecturally unique because it crosses isolation boundaries -- the first agent with a panoramic view in a pipeline of deliberately myopic agents. (08 Section 11)

### 4.4 The Comparative Argument (from 09)

The AD failure case is the strongest empirical evidence because it is the closest thing to a controlled experiment:

- Same team, same era, same standards, same tools
- OD received 43-agent re-enrichment; AD did not
- Measurable consequences: 3.6x less connected findings, 47 dark matter items, 7+ stale infrastructure files
- AD compensated with pre-build convention spec and bespoke research -- these helped but did not replace the enrichment wave's CONNECTIVITY function

The pipeline is "AD without re-enrichment -- but worse." AD at least produced 28 findings, had bespoke research, consumed accumulated identity, and operated within the handoff protocol. The pipeline has none of these. (09 Section 5)

### 4.5 The Generative Questions Argument (from 04)

The exploration era asked a CATEGORY of question that TC cannot generate: structural propositions. These are statements connecting content properties to visual properties through generative rules.

TC produces: "The reader should feel awe at machinery" (experience)
A structural proposition produces: "Operational sections get 16-24px spacing; principle sections get 48-64px; the ratio encodes abstraction level" (generative rule)

Structural propositions are GENERATIVE: they produce different CSS for different sections automatically. Without them, builders produce uniform treatments with imperceptible variation -- exactly the failure mode PA audits consistently flag. (04 Section 5)

The bridge between TC and builder is a mechanism that DERIVES structural propositions from TC's experiential output. The researcher agent is that bridge.

---

## 5. STRONGEST ARGUMENTS AGAINST (Contrarian Position)

### 5.1 Confounded Variables

The quality gap between explorations and pipeline may not be caused by the tripod at all. At least 4 variables are confounded:

1. **Model:** Explorations used Opus exclusively; pipeline uses Opus + Sonnet
2. **Time:** Explorations spanned weeks with multi-session iteration; pipeline runs in 1-2 hours
3. **Content:** Explorations used KortAI documentation; pipeline uses varied content
4. **Human oversight:** Explorations had continuous human direction; pipeline runs autonomously

Any or all of these could account for the quality gap. The tripod hypothesis is the most ARCHITECTURALLY TRACTABLE explanation, but not necessarily the correct one.

### 5.2 Curation Bias

The research documents are written by agents asked "what did the exploration era do that the pipeline doesn't?" This framing biases toward finding exploration-era advantages. A symmetric investigation ("what does the pipeline do that explorations didn't?") might find:

- Pipeline is 10-100x faster per build
- Pipeline has zero soul violations consistently
- Pipeline produces consistent quality without human oversight
- Pipeline's programmatic gates catch defects that exploration-era builds had

The quality gap may be partly an artifact of comparing a RESEARCH PROGRAM (explorations, optimized for discovery) with a PRODUCTION SYSTEM (pipeline, optimized for throughput).

### 5.3 Over-Specification Risk

Adding a researcher agent adds specification. The pipeline already has a known failure mode of OVER-SPECIFICATION: "Binary rules achieve compliance, not quality" (from memory). The Flagship experiment demonstrated that 71 binary rules produced technically compliant but perceptually flat output.

A researcher agent's implementation-mapped findings are MORE specifications. If the builder receives "spacing = 24-32px for established, 32-40px for probable" and follows these literally, the output may be LESS creative than a builder who received only "geological stratification" and invented their own CSS interpretation.

The exploration era's success may have been despite the research packages, not because of them -- the research packages may have worked because CD-era builders (Opus, multi-session context, highly primed) could treat specifications as SUGGESTIONS rather than PRESCRIPTIONS.

### 5.4 The Researcher May Not Have Access to Quality Source Material

The investigation assumes the researcher agent can traverse the full accumulated knowledge (337 findings, 88 stage findings, etc.). In practice:

- Many original research files may be in archive/ directories with unclear organization
- Stage finding files may not have the implementation detail needed for mapping
- Case studies exist but are 9 files covering 9 specific explorations -- not all content types
- The 7 vocabulary files may actually be the RIGHT compression for a single-session pipeline

If the source material is not traversable (too scattered, too compressed, too archived), the researcher agent produces low-quality packages and adds cost without benefit.

### 5.5 Single-Session Curation May Not Cross the Threshold

The epistemological analysis estimates that curated loaded knowledge achieves 60-80% of lived knowledge's effect. If the quality threshold requires 80%+ of lived knowledge's effect, single-session curation CANNOT cross the threshold regardless of researcher quality.

The exploration era's quality may be fundamentally un-replicable in a single session because:
- Enrichment waves required temporal separation between build and diagnosis
- Crown jewels required multi-stage accumulation that cannot be compressed
- Builder discovery (OD-F-005: "organization IS density") requires building, not reading

---

## 6. RECOMMENDED EXPERIMENTS

### 6.1 Experiment 1: Cheapest Possible Test (The Researcher Delta)

**What:** Run /compose on content X without researcher, then run /compose on the SAME content X with a minimum viable researcher agent added between TC and builder.

**Protocol:**
1. Select content (use same content as a prior pipeline run for baseline comparison)
2. Run 1: Standard /compose pipeline. Record: PA scores, CSS lines, mechanism count, build time, cost, qualitative PA synthesis
3. Run 2: Modified /compose with 1 additional Opus agent post-TC that:
   - Reads the content markdown
   - Reads the TC conviction brief
   - Reads 2-3 case study files + mechanisms.md + grammar.md
   - Produces a ~150-line structural proposition package
   - Builder receives conviction brief + structural package + vocabulary files
4. Record same metrics for Run 2
5. Compare

**Cost:** ~$15-35 for Run 2 (baseline + ~$2-4 for researcher)
**Time:** ~2.5 hours for Run 2
**What would convince us it works:** PA score improvement >= 0.5 points OR CSS lines increase >= 100 OR qualitative improvement in PA synthesis (more varied mechanisms, less uniform typography, fewer whitespace voids)
**What would convince us it doesn't work:** No measurable difference in PA scores AND no qualitative improvement AND builder produces output indistinguishable from baseline

### 6.2 Experiment 2: Model Isolation (Opus Builder Without Researcher)

**What:** Run /compose with Opus as the builder agent (no researcher), to isolate the model variable from the process variable.

**Protocol:**
1. Same content as Experiment 1
2. Run 3: Standard /compose pipeline but with Opus builder (currently uses Opus, but verify)
3. Compare Run 3 vs Run 1 (model effect) and Run 3 vs Run 2 (researcher effect given same model)

**Cost:** ~$15-30
**What this tells us:** If Run 3 matches Run 2, the model variable dominates and the researcher agent is unnecessary. If Run 3 matches Run 1, the model variable does not explain the gap and the researcher is likely causally important.

### 6.3 Experiment 3: Multi-Pass with Researcher (The REFINE Synergy)

**What:** Run /compose with researcher output fed to the REFINE builder between passes.

**Protocol:**
1. Pass 1: Standard TC -> Build -> PA (quick, 3 auditors)
2. Researcher reads: TC brief + PA creative direction + content + 2-3 case studies
3. Researcher produces: Enhanced package targeting PA-identified weaknesses
4. Pass 2: REFINE builder receives: conviction brief + PA creative direction + research package + current HTML
5. Record metrics for both passes

**Cost:** ~$30-55
**What this tells us:** Whether the researcher's value is amplified when targeted at diagnosed weaknesses (PA's findings from Pass 1) rather than operating blind (pre-build). This approximates the exploration era's enrichment cycle within a single session.

### 6.4 Experiment 4: Source Material Audit

**What:** Before running any pipeline experiments, audit whether the researcher agent CAN traverse the accumulated knowledge.

**Protocol:**
1. Inventory all files in compositional-core/, specification/provenance/, archive/knowledge-architecture/
2. For each: is it readable? Does it contain implementation detail? Is it findable by filename?
3. Produce a "researcher reading list" of files that are traversable
4. Estimate: given the reading list, can a single Opus agent produce meaningful implementation-mapped findings in ~15-20 minutes?

**Cost:** ~$2-4 (1 Opus agent)
**What this tells us:** Whether the source material problem (Section 5.4) is real. If the knowledge base is too scattered or compressed, the researcher experiment will fail regardless of architecture.

---

## 7. RECOMMENDED PATH FORWARD

### 7.1 The Sequenced Strategy

Based on the strength of evidence (strong FOR, legitimate but testable AGAINST), the recommended path is:

**Phase 1: Source Material Audit (Experiment 4)**
- Cost: ~$2-4, ~30 min
- Purpose: Verify that accumulated knowledge is traversable before building a researcher agent
- Decision gate: If reading list is < 5 files with implementation detail, STOP -- the knowledge base needs enrichment before curation is possible

**Phase 2: Minimum Viable Researcher (Experiment 1)**
- Cost: ~$35-70 (two runs on same content)
- Purpose: Isolate the researcher's contribution to build quality
- Decision gate: If no measurable improvement, consider Experiment 2 (model isolation) before adding more process. If improvement, proceed to Phase 3.

**Phase 3: Multi-Pass Architecture (Experiment 3)**
- Cost: ~$30-55
- Purpose: Test whether researcher + REFINE builder creates an approximation of the exploration-era enrichment cycle
- Decision gate: If Pass 2 shows significant improvement over Pass 1, the multi-pass researcher architecture is validated. If Pass 2 shows minimal improvement, the minimum viable researcher (Phase 2) may be the ceiling.

**Phase 4: Pipeline Integration (If Phases 2-3 validate)**
- Implement researcher agent as a /compose skill step: post-TC, pre-builder
- Researcher reads: content + TC brief + 2-3 case studies + mechanisms.md + grammar.md
- Researcher produces: structural proposition package (~150 lines)
- Builder receives: conviction brief + structural package + components.css + tokens.css
- Optional: REFINE builder also receives research package between passes

### 7.2 What We Should NOT Do

1. **Do NOT build a full exploration-replication system.** The pipeline's value proposition is speed. A $60, multi-day pipeline is not a pipeline -- it is a new exploration era. The knowledge graph exists; the question is how to traverse it efficiently.

2. **Do NOT add more vocabulary files.** The problem is not volume but curation. Adding more generic files does not address per-build relevance, implementation mapping, or expected evidence.

3. **Do NOT modify TC's Library Access Prohibition.** TC's independence is correct and valuable. The researcher agent operates DOWNSTREAM of TC, not as a TC input.

4. **Do NOT over-specify the researcher's output format.** The researcher's package should provide ARCHITECTURE (structural propositions, CSS ranges, expected evidence) while leaving COMPOSITION (exact values, transitions, local decisions) to the builder. 100-200 lines is the ceiling.

5. **Do NOT assume the researcher will solve everything.** The epistemological analysis estimates 60-80% of lived knowledge's effect from curated loaded knowledge. The remaining gap requires either multi-session enrichment or architectural innovations for builder-level knowledge accumulation -- neither of which is a single-session fix.

### 7.3 The Minimum Viable Tripod

If all experiments validate, the minimum viable tripod for the pipeline is:

| Instrument | Pipeline Implementation | Cost | Time |
|------------|------------------------|------|------|
| Researcher/Curation | 1 Opus agent post-TC, traverses case studies + research, produces ~150-line package | +$2-4 | +15-20 min |
| Structural Propositions | Researcher derives 3-6 propositions from TC metaphor + accumulated knowledge | (included above) | (included above) |
| Findings Production (partial) | Builder writes a 10-line "discoveries" section at end of build; PA captures 3-5 findings per audit | +$0 | +5 min |

**Total additional cost:** ~$2-4 per build
**Total additional time:** ~20-25 min per build
**Expected quality improvement:** Unknown, but the threshold model predicts discontinuous improvement if the researcher provides >= 15-20 implementation-mapped references

### 7.4 The Key Principle

The investigation earned one principle above all others:

**Quality is not in the FILES -- quality is in the PROCESS of curating files for a specific build.**

The exploration era's files were artifacts of a quality-creating process. The pipeline attempted to preserve quality by preserving the files. But quality was never in the files. It was in the researcher who read 100,000 words and curated 150 lines. It was in the structural propositions that connected metaphor to CSS. It was in the enrichment waves that grew knowledge through feedback loops.

The minimum viable path forward is to restore the curation process -- not the full exploration era's multi-week research program, but the single-session, per-build curation that Agent-0C provided for the CD explorations. One agent. One traversal. One curated package. Per build. That is the experiment worth running.

---

## Appendix A: Evidence Convergence Map

| Finding | Sources That Converge | Confidence |
|---------|----------------------|------------|
| Tripod existed (researcher + propositions + accumulation) | 01, 02, 04, 05, 06 | VERY HIGH |
| Pipeline lacks 2/3 instruments | 01, 03, 06, 07, 08, 09 | VERY HIGH |
| Context window = wrong framing | 01, 03, 07 | HIGH |
| Compression destroys 6/7 quality dimensions | 07, 03, 06 | HIGH |
| AD failure = controlled experiment for skipping curation | 09, 01 | HIGH |
| Researcher = highest leverage intervention | 06, 07, 08 | HIGH |
| Quality-knowledge relationship is threshold-based | 07, 01, 02 | MEDIUM-HIGH |
| TC + structural propositions are complementary | 04, 06 | HIGH |
| Model variable is confounded | Memory (flagship retrospective) | HIGH |
| Curated loaded knowledge = 60-80% of lived | 07 | MEDIUM |
| Minimum viable researcher = $2-4, 15-20 min | 08 | MEDIUM-HIGH |
| Post-TC placement is optimal | 08 | MEDIUM-HIGH |

## Appendix B: Documents Synthesized

| # | Document | Lines | Key Contribution |
|---|----------|-------|-----------------|
| 01 | MASTER-FINDINGS.md | 427 | Core insight, million dollar question, 6 missing mechanisms |
| 02 | EXPLORATION-ARCHITECTURE.md | 770 | 5-stage build process, CSS progression, crown jewel pattern |
| 03 | PIPELINE-GAP-ANALYSIS.md | ~1,000 | Side-by-side comparison, 6 structural gaps, question category gap |
| 04 | GENERATIVE-QUESTIONS.md | 520 | 24 questions catalog, TC comparison, structural proposition gap |
| 05 | PROVENANCE-MECHANISM.md | 527 | 3-layer provenance, builder consumption (corrected), anti-orphaning |
| 06 | DIMENSIONAL-FUNCTIONAL.md | 641 | What researcher would DO, output format, builder experience delta |
| 07 | DIMENSIONAL-EPISTEMOLOGICAL.md | 394 | 7 knowledge quality dimensions, threshold model, lived vs loaded |
| 08 | DIMENSIONAL-ARCHITECTURAL.md | 522 | Cost spectrum, placement options, REFINE synergy, architectural constraint |
| 09 | DIMENSIONAL-COMPARATIVE.md | 387 | AD failure case, 47 dark matter, 3.6x threading gap, pipeline comparison |

**Total synthesized:** ~5,188 lines (~320k) from 9 documents produced by 13+ Opus research agents.

**Note:** Documents 10-14 (redefinition, curation, TC-tripod, minimum viable tripod, contrarian analyses) were not available at synthesis time. If these documents become available, the synthesis should be updated to incorporate their findings -- particularly the contrarian analysis, which may strengthen or weaken the arguments in Sections 4-5.

---

*This synthesis represents the current state of knowledge from the pipeline methodology investigation. It should be treated as a RESEARCH SUMMARY that leads to EXPERIMENTS, not as a DECISION document that leads to implementation. The recommended path forward (Section 7) is sequenced to produce evidence before committing resources.*

---

## 8. Updated Synthesis (with docs 10-14)

**Added:** 2026-03-01
**New documents integrated:** 10-PIPELINE-REDEFINITION.md (795 lines), 11-CURATION-WITH-EXISTING-KNOWLEDGE.md (512 lines), 12-TC-AND-THE-TRIPOD.md (577 lines), 13-MINIMUM-VIABLE-TRIPOD.md (507 lines), 14-CONTRARIAN-TRIPOD.md (394 lines)
**Total corpus now synthesized:** ~8,000 lines across 14 documents from 18+ Opus research agents

The five new documents transform the original synthesis in three ways: they make the abstract concrete (MVT provides exact costs and protocols), they reveal architectural structure invisible in the original analysis (TC as coupling mechanism), and they introduce genuinely threatening counterarguments that change the recommended experimental sequence.

### 8.1 Does the Redefinition Analysis Change the Recommended Path?

**Yes, in one critical way. No, in direction.**

The redefinition analysis (doc 10) establishes that the tripod is not three independent improvements but an INTERLOCKING SYSTEM. This changes the recommended path because it means the original Section 7's phased approach -- adding instruments one at a time -- may undercount the tripod's value. The interlocking thesis predicts:

- Package without curation = generic file dump (what exists today)
- Curation without execution prompt = excellent package read superficially
- Execution prompt without package = rigorous process consuming thin material

If the instruments are truly interdependent, testing one instrument in isolation (e.g., adding only the researcher agent without changing the builder's execution prompt) would UNDERESTIMATE the tripod's effect. The cheapest experiment (Section 6.1) tests researcher + existing builder prompt. If it fails, the failure may be attributable to missing Instrument 1, not to the researcher's inadequacy.

**Revision to recommended path:** The cheapest experiment should test ALL THREE instruments simultaneously, not just the researcher agent. The 20-line prompt addition (sequencing protocol, absorption protocol, findings log) from doc 13 costs $0 and 0 minutes -- there is no reason to omit it from the test. The experiment becomes: add 20-line prompt restructuring (Instrument 1) + researcher agent producing curated package (Instruments 2+3) + builder receives both. This tests the full tripod at minimum viable scale.

The redefinition analysis also introduces a concrete new architecture (Phase 1.5 researcher between TC and builder) and specifies what the builder STOPS receiving: the static 7 vocabulary files are replaced by the curated package, not supplemented by it. This is a stronger claim than the original synthesis (Section 7.4) which left the relationship ambiguous. The replacement model is architecturally cleaner but also higher-risk -- if the package is bad, the builder has NO fallback material.

**Recommendation:** For the first experiment, give the builder BOTH the curated package AND the vocabulary files. Only remove the vocabulary files after validating that the package subsumes their value.

### 8.2 Does the TC-Tripod Finding Affect Experimental Design?

**Yes, significantly. TC as coupling mechanism changes what we measure.**

The TC-tripod analysis (doc 12) reveals that TC is not one leg of the tripod but the JOINT where all three legs connect. This is a structural insight absent from the original synthesis. The key findings:

1. **TC's 14 axes distribute asymmetrically across the three instruments.** Core four (FEEL/UNDERSTAND/DO/BECOME) feed Instrument 1 (master execution prompt). Extended nine (NAVIGATE through REMEMBER) primarily feed Instruments 2 and 3 (research package and curation process). This means the researcher agent's curation quality depends on how RICH TC's extended axis output is -- not just on the corpus traversal.

2. **Structural propositions split into two categories.** TC generates METAPHOR-SPECIFIC structural propositions ("in this excavation, descent must be consistent across all 6 channels"). The researcher retrieves UNIVERSAL structural propositions from accumulated knowledge ("Organization IS Density"). Neither agent alone produces both categories. This resolves the original synthesis's open question (Section 3.5) about whether TC should be modified: TC should NOT be augmented to produce universal propositions. The researcher handles those.

3. **The researcher's traversal is TC-SHAPED.** The researcher does not traverse the knowledge graph blindly. TC's metaphor provides the primary search criteria, TC's tension analysis provides the opposition axis, TC's Phase 4 mechanism extraction provides the mechanism axis. Without TC's output, the researcher would need to include everything potentially relevant -- reproducing the current pipeline's problem of generic files.

**Impact on experimental design:** The experiment must ensure TC runs its FULL extended axis set (not just core four) because the researcher's curation quality depends on the richness of TC's output. If TC only produces a brief conviction with core-four axes, the researcher loses its curation lens. The experiment should verify that TC's conviction brief includes NAVIGATE, TRUST, EVALUATE, DISCOVER, and other extended axes that shape the curation process.

Additionally, the experiment should measure whether the researcher's package reflects TC's metaphor coherently -- not just whether it improves PA scores. A new metric: METAPHOR-PACKAGE COHERENCE, measuring whether the researcher's mechanism selections and implementation maps serve the specific metaphor TC derived, or whether they default to generic "safe" selections regardless of metaphor.

### 8.3 Does the MVT Analysis Make the Cheapest Experiment More Concrete?

**Yes. Dramatically. The experiment is now fully specified.**

The minimum viable tripod analysis (doc 13) transforms the original synthesis's Experiment 1 (Section 6.1) from a sketch into a protocol. Key specifications:

**Cost:** $11-24 total, WITHIN the existing pipeline cost envelope of $11-35. The researcher agent adds only $2-4 and 8-12 minutes. This is not a "new experiment" -- it is the existing pipeline with one additional agent call.

**Curation level:** Option B (interpretive curation) is the sweet spot. Not grep-based keyword matching (Option A, too thin) and not full corpus traversal (Option C, unnecessary for first test). The researcher reads TC brief + ALL 9 case studies + mechanisms.md + grammar.md and produces 80-150 lines.

**The Level 0 intervention:** 20 lines of prompt restructuring at $0 cost. Sequencing protocol, absorption protocol, findings log. This should be deployed IMMEDIATELY regardless of whether the researcher experiment proceeds. There is zero risk, zero cost, and it addresses the "compose from tools" anti-pattern that the master findings identified.

**The REFINE builder as proto-tripod:** Doc 13 reveals that the existing REFINE builder (different Opus instance, reads conviction + artistic direction) is already Leg 3 of the tripod with a partial Leg 1. It lacks only Leg 2 (the curated research package). The minimum change to make REFINE a full tripod is inserting a researcher agent between PA weaver and REFINE builder. This means the tripod experiment can be run WITHIN the existing REFINE cycle, not as a replacement for the main build. This significantly reduces risk.

**Concrete protocol (revised from Section 6.1):**

| Step | Agent | Input | Output | Cost | Time |
|------|-------|-------|--------|------|------|
| 1 | TC (existing) | Content + TC skill | Conviction brief | $1-3 | 20-40 min |
| 2 | Researcher (NEW) | TC brief + content + 9 case studies + mechanisms + grammar | Research package (80-150 lines) | $2-4 | 8-12 min |
| 3 | Builder (modified) | 20-line prompt addition + conviction brief + research package + vocabulary files | page.html + reflection + findings log | $2-5 | 30-60 min |
| 4 | PA (existing) | Screenshots + questions | Audit verdicts | $6-12 | 25-40 min |
| **Total** | | | | **$11-24** | **1.5-2.5h** |

**Quality floor for the package:** Doc 13 specifies that below 50 lines, fewer than 5 mechanism selections, zero CSS examples, or less than 3 minutes of researcher time, the package becomes too thin to help and may actively hurt by creating false precision. The experiment must verify the package exceeds these minimums.

### 8.4 Does the Contrarian's Alternative Thesis Deserve Its Own Experiment?

**Yes. The contrarian identified the investigation's most dangerous blind spot.**

The contrarian analysis (doc 14) raises two CRITICAL objections that cannot be dismissed:

**Objection 1: Confounded Variables (N=4 Problem).** The entire investigation compares exploration-era output (Opus builders, weeks of iteration, human oversight, self-referential content) to pipeline output (Sonnet builders, hours, autonomous, external content). At least 5 variables differ simultaneously: model, time, human oversight, build cycles, and content type. The tripod hypothesis attributes the quality gap to knowledge curation, but model capability alone could explain the entire gap. This objection is LEGITIMATE and was not adequately addressed in the original synthesis.

**Objection 2: Model Capability.** "Sonnet complies meticulously; Opus complies AND creates beyond constraints." If the builder model is the bottleneck, the tripod is solving the wrong problem. Richer input helps only if the builder USES IT CREATIVELY. Sonnet receiving 14 implementation-mapped findings may execute them literally (producing compliant-but-flat output -- the Flagship failure mode), while Opus with the same 7 vocabulary files may produce richer output through creative interpretation.

**The contrarian's alternative thesis:** Opus builder + perceptual thresholds + recipe format + CSS examples (2-3 exploration HTML files as reference). No researcher agent needed. Cost: ~$15-20 additional per build. This addresses the diagnosis (more knowledge, implementation examples, perceptual thresholds) without the tripod's complexity.

**The contrarian's 5-question experimental protocol:**

1. Q1: Is the model the bottleneck? (Opus builder + same 7 files, ~$38)
2. Q2: Are perceptual thresholds sufficient? (Sonnet + thresholds in prompt, ~$28)
3. Q3: Does recipe format matter? (Sonnet + recipe format, ~$28)
4. Q4: Does MORE knowledge help Sonnet? (Sonnet + 5 additional reference files, ~$28)
5. Q5: Is the combination sufficient? (Opus + thresholds + recipe + 7 files, ~$40)

Total: ~$150, ~9 hours (parallelizable to ~4 hours).

**Assessment:** The contrarian is right that Q1 (model isolation) should be answered BEFORE building the tripod. If Opus + 7 files produces exploration-era quality, the tripod is unnecessary. The original synthesis's recommended path (Section 7.1) skipped this question entirely.

However, the contrarian's protocol has a flaw: Q1-Q5 test individual variables but not their interaction with the tripod. Even if Opus + 7 files improves quality, Opus + tripod might improve it MORE. The contrarian assumes a binary choice (tripod vs no-tripod) when the real question is marginal value (how much does the tripod add GIVEN the best builder model?).

**Revised recommendation:** Insert the contrarian's Q1 (Opus builder isolation) as the FIRST experiment, before the tripod experiment. This costs ~$38 and answers the most important confounded variable. The revised experimental sequence becomes:

1. **Experiment 0 (NEW):** Opus builder + existing pipeline (no researcher). Isolates model variable. Cost: ~$38, ~2h.
2. **Experiment 1 (revised):** If Experiment 0 shows improvement, run Opus builder + tripod (researcher + 20-line prompt + curated package). Compare against Experiment 0. This isolates the tripod's contribution given the same model. Cost: ~$42, ~2.5h.
3. **Experiment 1-alt:** If Experiment 0 shows NO improvement, run Sonnet builder + tripod. This tests whether the tripod compensates for a weaker model. Cost: ~$28, ~2h.

This sequence answers the causal question: is the quality gap primarily model-driven or process-driven? The original synthesis assumed process-driven. The contrarian argues model-driven. The experiment resolves the debate.

### 8.5 Updated Confidence Levels

With the additional 5 documents integrated, confidence levels shift:

| Claim | Original Confidence | Updated Confidence | Direction | Reason |
|-------|--------------------|--------------------|-----------|--------|
| Tripod existed and produced quality | VERY HIGH | VERY HIGH | Unchanged | Docs 10-12 further validate; no new counter-evidence |
| Pipeline lacks 2/3 instruments | VERY HIGH | VERY HIGH | Unchanged | Doc 10 makes the gap MORE precise, not less |
| Researcher = highest leverage intervention | 75-85% | 55-70% | **DOWN** | Doc 14 identifies model variable as potentially higher-leverage; doc 13 shows researcher adds only $2-4, so even if not highest-leverage, it is low-cost enough to test |
| Quality-knowledge relationship is threshold-based | 60-70% | 60-70% | Unchanged | No new evidence for or against |
| Tripod CAUSED quality difference | 70-80% | 50-65% | **DOWN** | Doc 14's confounded-variables analysis is legitimate; 5 co-varying factors unresolved |
| Curation process and package are inseparable | 85-90% | 85-90% | Unchanged | Doc 11 reinforces with 3 curation modes |
| TC as coupling mechanism (NEW) | -- | 80-85% | NEW | Doc 12 provides compelling structural argument with 14-axis mapping |
| Findings production is critical for knowledge growth (NEW) | -- | 75-80% | NEW | Doc 11 identifies "frozen knowledge" as key limitation; growth loop architecture is well-specified |
| Minimum viable researcher is achievable at $2-4 (NEW) | -- | 80-90% | NEW | Doc 13 specifies Option B curation at $2-4; within existing cost envelope |
| Model variable may dominate process variable (NEW) | -- | 40-55% | NEW | Doc 14; no experiment has isolated this variable; the Flagship retrospective flagged it as "unexamined" |

**The most important shift:** Confidence that the tripod CAUSED the quality difference dropped from 70-80% to 50-65%. This is not because the tripod hypothesis became weaker, but because the contrarian made a compelling case that the causal mechanism is unidentified. The diagnosis (knowledge compression = quality loss) remains strong. The attribution (tripod = solution) is now properly understood as ONE of multiple plausible interventions, not the only one.

### 8.6 Synthesis of New Findings

The five new documents converge on three insights absent from the original synthesis:

**Insight 1: The cheapest intervention is free.** Doc 13 identifies a Level 0 intervention (20 lines of prompt restructuring) that costs $0, takes 0 minutes, carries zero risk, and addresses the "compose from tools" anti-pattern. This should be deployed IMMEDIATELY. The original synthesis did not identify any zero-cost interventions.

**Insight 2: The tripod experiment and the contrarian's model experiment are not mutually exclusive -- they are sequential.** The revised experimental sequence (Section 8.4) tests the model variable FIRST, then tests the tripod's marginal contribution. Total cost for both experiments: ~$80, ~4.5 hours. This is less than the total cost of the 14 research documents that produced this investigation (~$40+ in Opus agent time).

**Insight 3: Curation has three modes, not one.** Doc 11 identifies direct mapping, analogical mapping, and exploratory mapping as distinct curation behaviors. This means the researcher agent's value varies by content: HIGH for content that maps directly to explored territory, MEDIUM for structural analogs, LOW for content far from the explored corpus. The experiment should test at least two content types (one direct-mapping, one analogical) to measure this variance.

### 8.7 Updated Recommended Path Forward

The original recommended path (Section 7.1) is revised to:

**Phase 0: Free Intervention (NOW)**
- Add 20-line prompt restructuring to /compose builder prompt
- Add findings log dimension to builder reflection
- Cost: $0. Time: 0 min. Risk: zero.

**Phase 1: Model Isolation (Experiment 0)**
- Run /compose with Opus builder + existing pipeline (no researcher)
- Compare against most recent Sonnet builder baseline
- Cost: ~$38. Time: ~2h.
- Decision gate: If Opus + 7 files produces exploration-era quality, the model is the primary variable. Proceed to Phase 1b to confirm, then consider whether the tripod adds marginal value. If Opus + 7 files does NOT produce exploration-era quality, the process/knowledge variable is confirmed. Proceed to Phase 2.

**Phase 1b: Threshold + Recipe Isolation (if Phase 1 shows model improvement)**
- Run Opus builder + perceptual thresholds + recipe format (contrarian's Q2+Q3 combined)
- Compare against Phase 1 result
- Cost: ~$40. Time: ~2h.
- Decision gate: If thresholds + recipe + Opus closes the remaining gap, the tripod is unnecessary. If a gap remains, proceed to Phase 2.

**Phase 2: Minimum Viable Tripod (Experiment 1)**
- Run /compose with researcher agent (Option B curation) + 20-line prompt addition + vocabulary files retained as fallback
- Use same content as Phase 1 for comparison
- Cost: ~$42 (with Opus builder). Time: ~2.5h.
- Decision gate: If PA verdicts improve vs Phase 1, the tripod adds value beyond model + thresholds. If no improvement, the tripod's marginal contribution is zero given a capable builder model.

**Phase 3: REFINE Synergy (if Phase 2 validates)**
- Insert researcher between PA and REFINE builder
- Test targeted curation (informed by PA findings from Pass 1)
- Cost: ~$55. Time: ~3h.

This path resolves the contrarian's objections by testing the model variable BEFORE committing to the tripod. It adds ~$40 and ~2 hours to the original path but eliminates the risk of building infrastructure for a problem that might be solved by a model switch.

### 8.8 What Changed in This Update vs the Original Synthesis

| Aspect | Original Synthesis (Sections 1-7) | Updated (Section 8) |
|--------|-----------------------------------|---------------------|
| Causal confidence | 70-80% tripod is primary cause | 50-65% (model variable unresolved) |
| Cheapest intervention | Source material audit ($2-4) | 20-line prompt restructuring ($0) |
| First experiment | Researcher delta | Model isolation (Opus builder) |
| Tripod testing approach | Test instruments individually | Test all three instruments together (interlocking thesis) |
| TC's role | Input to researcher | Coupling mechanism coordinating all three instruments |
| Builder model | Assumed adequate | Identified as potentially the primary variable |
| Experimental cost | ~$35-70 for first two phases | ~$80 for first two phases (adds model isolation) |
| Risk framing | "What if the tripod doesn't work?" | "What if the model is the bottleneck and the tripod is irrelevant?" |

The core direction is UNCHANGED: the investigation recommends experiments before implementation. But the experimental sequence is revised to address the contrarian's strongest objection -- that the model variable has never been isolated. This is the most important methodological correction from the five new documents.

---

*Updated synthesis incorporating documents 10-14. The original synthesis (Sections 1-7) is preserved above. This addendum should be read as a refinement that makes the experimental plan more rigorous, not as a contradiction of the original analysis. The diagnosis remains strong. The intervention requires empirical validation that the original synthesis called for but the contrarian analysis made more urgent.*
