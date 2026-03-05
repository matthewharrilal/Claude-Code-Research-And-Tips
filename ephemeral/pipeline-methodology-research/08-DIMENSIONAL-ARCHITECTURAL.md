# 08: Dimensional Analysis — Architectural Constraints and Tradeoffs

**Dimension:** ARCHITECTURAL
**Analyst:** analyst-architectural (Opus)
**Date:** 2026-03-01
**Input:** 01-MASTER-FINDINGS.md, compose/SKILL.md, tension-composition/SKILL.md, compositional-core/CLAUDE.md

---

## 1. The Cost Spectrum: 149 Agents vs. 5-10

### Exploration Era Costs (Empirical)

The exploration era deployed agents at a scale the pipeline deliberately abandoned:

| Stage | Agents (build) | Agents (enrichment) | Agents (audit) | Total |
|-------|----------------|--------------------|--------------------|-------|
| DD | ~18 builders | — | — | ~18 |
| OD | ~18 builders | 43 re-enrichment | 17 audit + 7 fix | ~85 |
| AD | ~18 builders | 0 (NO re-enrichment) | ~15 audit | ~33 |
| CD | 7 foundation + 6 builders | — | 10 audit | ~23 |
| **Total per stage avg** | | | | **~40** |

OD alone consumed ~149 agents across 6 waves (build, audit, fix, re-enrichment, comprehensive audit, provenance remediation). CD's Phase 0 deployed 7 agents BEFORE any building started — convention agents, research packagers, lock sheets, audits. The researcher agent (Agent-0C) produced 6 packages at 100-200 lines each.

**Cost estimate (exploration era):** At $0.15-0.40/agent (Opus-class), a single stage cost $6-60. The full 5-stage pipeline across all enrichment waves: $100-500+ over weeks.

### Current Compose Pipeline Costs (Empirical)

The compose pipeline (/compose) deploys:
- 1 TC agent (Opus, ~$1-3)
- 1 Builder agent (Opus, ~$2-5)
- 5 PA auditors (Opus, ~$1-2 each = $5-10)
- 1 Weaver agent (Opus, ~$1-2)
- Fix cycles: 1-3 additional builder invocations ($2-5 each)

**Total per build:** ~$12-25 over 1-2 hours. Pipeline v5 (deep-build) achieved: 1h 40m, $28.79 for 8 Phase A passes + 3 PA cycles.

### The Cost Gap

| Configuration | Agents | Cost | Time |
|---------------|--------|------|------|
| Compose pipeline (current) | 8-12 | $12-28 | 1-2 hours |
| Compose + minimal researcher | 9-13 | $15-35 | 1.5-2.5 hours |
| Compose + full researcher | 12-18 | $25-50 | 2-3.5 hours |
| Exploration era (single stage) | 30-85 | $20-60+ | Days-weeks |
| Exploration era (full 5-stage) | 149-300+ | $100-500+ | Weeks-months |

The cost spectrum spans two orders of magnitude. The question is where on this spectrum the marginal return on agent investment drops below the marginal cost.

---

## 2. The Time Dimension

### Exploration Era: Knowledge as Product of TIME

The exploration era operated across a fundamentally different temporal axis. Each stage existed across multiple sessions, multiple agents, multiple enrichment waves. As the master findings state:

> "The exploration process wasn't a BETTER context window — it was a fundamentally different relationship with TIME."

- DD: ~2-3 sessions, days of iteration
- OD: ~4-6 sessions, weeks including 43-agent re-enrichment
- AD: ~3-4 sessions, days (BUT no re-enrichment — and the quality data shows it)
- CD: ~3-5 sessions, days with Wave 1 → Wave 2 learning

**Key temporal mechanism:** Each session built on the artifacts of prior sessions. This is not parallelizable — it is inherently sequential. Session N produces findings that session N+1 consumes.

### Compose Pipeline: Knowledge as Product of COMPRESSION

The pipeline operates within a single session boundary (~2 hours). TC derives, builder builds, PA evaluates. The temporal axis is:

```
TC (20-40 min) → Build (30-60 min) → PA (20-30 min) → Fix (20-40 min)
```

The pipeline's advantage: **speed**. The pipeline's cost: **no accumulation within the run, and no accumulation across runs**.

### Where Does a Researcher Agent Fit?

A researcher agent sits at a temporal sweet spot: it adds 15-30 minutes of knowledge curation WITHOUT requiring multi-session temporal accumulation. It operates on knowledge that ALREADY EXISTS (337 findings, 109 stage findings, 24 explorations) but is currently inaccessible to the pipeline.

```
Time axis:

Exploration era:    [====DAYS/WEEKS====] per stage
Researcher agent:   [=15-30 min=]
Compose pipeline:   Already embedded in the 2-hour window

Total with researcher: 2h → 2.25-2.5h (+12-25% time)
```

This is a fundamentally different proposition than replicating the exploration era. The researcher agent does not CREATE new knowledge through multi-session iteration. It TRAVERSES existing knowledge and CURATES it for the current build. The exploration era was building the knowledge graph. The researcher agent navigates one that already exists.

---

## 3. The Pre-Existing Knowledge Argument

### The Strongest Case Against a Researcher Agent

The pipeline's most powerful argument is this: **the accumulated knowledge EXISTS now.** The exploration era was CREATING the 337 findings, 109 stage findings, and 24 explorations. Today, they are CREATED. They live in files. They have been extracted into the compositional-core ontology. The 7-file vocabulary is itself the product of a 50-agent Phase C extraction.

If the knowledge already exists in compressed form (7 files, ~1,045 lines), why do we need an agent to traverse the uncompressed form (337+ findings across dozens of files)?

### Why Pre-Existing Knowledge Does NOT Offset the Missing Curation Layer

Three reasons this argument fails:

**Reason 1: Compression destroyed implementation mapping.**

The master findings document this precisely:

Exploration era (from OD-RESEARCH-GATE.md):
```
R1-001 → "Q&A alternation follows PULSE: Questions=sparse, Answers=dense"
  → Expected evidence: "Visible PULSE rhythm in layout"
  → Must honor: DD-F-001 PULSE
  → Implementation: Use alternating padding (sparse 48px, dense 24px)
```

Pipeline equivalent (from mechanisms.md):
```
border-weight gradient encodes hierarchy
```

The compression ratio is 48:1 (337 findings → 7 files). At that ratio, implementation maps, expected evidence, constraint linkages, and structural propositions are ALL lost. The 7-file vocabulary tells the builder WHAT tools exist. It does not tell the builder HOW to deploy those tools for THIS specific content. The gap is not knowledge PRESENCE — it is knowledge SPECIFICITY.

**Reason 2: TC operates blind to accumulated knowledge by design.**

The Library Access Prohibition in TC (Phases 0-3) prevents reading case studies, prior explorations, and component libraries. This is intentional and correct — it prevents creative contamination. But the cost is that TC reinvents from scratch what the exploration era already discovered.

TC asks: "What does the reader need to FEEL?" and derives structural properties from content tension.
The exploration era asked: "Does CRESCENDO density work for code-heavy content?" — a structural hypothesis informed by DD-F findings.

Both question types are needed (see 04-GENERATIVE-QUESTIONS.md). TC produces one; the researcher agent could produce the other. They are complementary, not substitutable.

**Reason 3: The 7 files are universal; builds are specific.**

mechanisms.md lists 20 mechanisms applicable to ANY content. A researcher agent curates which subset of mechanisms + which specific parametric choices are RIGHT for THIS content with THIS metaphor. Agent-0C's packages were 100-200 lines EACH, tailored per-builder, containing:

- Soul checklist (from identity, universal)
- Applicable R-5 findings EMBEDDED (from research, content-specific)
- Stage findings relevant to THIS exploration (accumulated, content-specific)
- CSS examples matching the pattern (implementation, content-specific)
- Anti-pattern checklist (historical, content-specific)
- Implementation plans with expected evidence (structural, content-specific)

4 of 6 items are content-specific. The 7-file vocabulary provides at most 2 of 6. Pre-existing knowledge provides the RAW MATERIAL but not the per-build CURATION.

---

## 4. Minimum Viable Researcher Agent

### Architecture: Single Opus Agent, Pre-TC

The minimum viable researcher agent is a SINGLE Opus agent that:

1. **Reads the content markdown** (same input as TC)
2. **Reads a SUBSET of accumulated knowledge files** (not all 337 findings)
3. **Produces a structural proposition package** (output: 100-200 lines)

### What Is the "Right Subset"?

The subset depends on content properties. The researcher agent needs to:

1. **Classify the content** by structural type (hierarchical, narrative, reference, mixed)
2. **Identify the dominant density pattern** likely to serve (CRESCENDO for progressive deepening, PULSE for Q&A, F-PATTERN for reference, BENTO for parallel items)
3. **Select the 2-3 most relevant case studies** from `case-studies/_INDEX.md` based on content similarity
4. **Pull the relevant stage findings** from the selected case studies' exploration stage

**Minimum reading list (estimated ~2,000-3,000 lines):**
- Content markdown (variable)
- `case-studies/_INDEX.md` (~50 lines — for routing)
- 2-3 selected case study files (~200-400 lines each)
- `grammar/mechanisms.md` (88 lines — mechanism names)
- `grammar/grammar.md` (149 lines — compositional rules)
- `research/RESEARCH-SYNTHESIS.md` (~300 lines — cross-research insights)
- 1-2 selected R-stream files relevant to content type (~500-1,000 lines)

This is well within a single Opus context window.

### Output: Structural Proposition Package

The package bridges TC's experiential output and the builder's structural needs:

```
STRUCTURAL PROPOSITION PACKAGE
  Content: [title]
  Type: [hierarchical/narrative/reference/mixed]

  DENSITY HYPOTHESIS
    Primary pattern: [CRESCENDO/PULSE/F-PATTERN/BENTO]
    Evidence: [from R-stream findings + case study precedent]
    Expected visual signature: [what it should LOOK like]

  MECHANISM RECOMMENDATIONS (6-10)
    For each:
      Name: [mechanism name from grammar]
      Deployment: [WHERE in this content]
      Expected evidence: [what to CHECK]
      Precedent: [which case study used this mechanism in a similar way]

  TRANSITION GRAMMAR
    Boundary 1: [zone A → zone B, shift type, channel changes]
    Boundary 2: ...

  ANTI-PATTERNS (3-5)
    From prior exploration failures relevant to this content type

  STRUCTURAL HYPOTHESIS
    One sentence: "If [metaphor domain] is applied to this content,
    the reader should experience [structural prediction]"
```

### Cost: ~$2-4, ~15-20 minutes

This adds approximately 15% to build cost and 12% to build time.

---

## 5. Maximum Researcher Agent: Full Agent-0C Replication

### Architecture: Multi-Agent Research Phase

The maximum researcher replicates the CD-era Agent-0C approach:

1. **Research Navigator** (1 Opus agent): Reads ALL 337 findings + 109 stage findings. Produces a knowledge graph subset relevant to the content. ~$3-5, ~30 min.

2. **Structural Hypothesis Generator** (1 Opus agent): Takes the knowledge graph subset + content. Formulates 3-5 structural hypotheses (exploration-era style questions). ~$2-4, ~20 min.

3. **Package Assembler** (1 Opus agent): Takes the best hypothesis + full mechanism catalog + case studies + content. Produces a comprehensive research package with implementation-mapped findings. ~$2-4, ~20 min.

4. **Package Validator** (1 Opus agent, optional): Fresh-eyes review of the package for coherence and completeness. ~$1-2, ~10 min.

**Total: 3-4 agents, $7-15, 45-80 minutes.**

### What This Produces vs. Minimum Viable

| Dimension | Minimum (1 agent) | Maximum (3-4 agents) |
|-----------|-------------------|---------------------|
| Structural propositions | 1 hypothesis | 3-5 hypotheses, best selected |
| Mechanism specificity | Names + deployment locations | Full implementation plans with CSS |
| Precedent depth | 2-3 case studies | Full stage-finding chain |
| Findings coverage | ~30% of R-streams | ~80% of R-streams |
| Anti-pattern coverage | 3-5 from nearest case study | Comprehensive from all stages |
| Cost | $2-4 | $7-15 |
| Time | 15-20 min | 45-80 min |

### The Diminishing Return Curve

The critical question: does the jump from $2-4 (minimum) to $7-15 (maximum) produce proportionally more build quality? Based on the exploration-era data:

- DD-001 (no researcher, first exploration): 33/40, 418 CSS lines
- CD-006 (full researcher, maximum context): 39/40, 1,019 CSS lines

The 6-point quality gap was produced by BOTH the researcher layer AND multi-stage accumulation. Isolating the researcher's contribution is impossible with current data. But the minimum viable version captures the highest-leverage portion: per-build curation from existing knowledge.

---

## 6. Where on the Spectrum Should the Pipeline Sit?

### The Architecture Principle: Minimum Effective Dose

The pipeline should add the minimum researcher complexity that produces a measurable quality improvement. The evidence suggests:

**Start with minimum viable (1 agent, $2-4, 15-20 min).**

Reasons:
1. **The gap is specificity, not volume.** The builder needs 10-15 implementation-mapped findings, not 337 raw findings. One agent can produce that.
2. **The compose pipeline is already 1-2 hours.** Adding 45-80 min (maximum) nearly doubles build time. Adding 15-20 min is marginal.
3. **We lack quality measurement for the researcher's isolated contribution.** Running the minimum version first provides a data point: does per-build curation improve PA scores?
4. **The maximum version replicates exploration-era overhead without exploration-era TIME advantage.** Agent-0C's packages were excellent partly because the researcher had access to weeks of accumulated session context. A pipeline researcher operating in 45 min cannot replicate that temporal depth.

### The Experiment Protocol

1. Run /compose WITHOUT researcher on content X. Record PA scores, CSS lines, build time, cost.
2. Run /compose WITH minimum researcher on SAME content X. Record same metrics.
3. Compare. If delta > 0.5 PA points OR > 100 CSS lines OR qualitative improvement in PA synthesis: proceed to tune.
4. If minimum researcher shows value: test whether maximum researcher improves further.

**Without this experiment, adding a maximum researcher is premature optimization.**

---

## 7. Compose Skill Architecture: Placement of the Researcher Step

### Option A: Before TC (Pre-Derivation)

```
Content → RESEARCHER → Structural Package → TC (+ package) → Builder → PA
```

**What this means:** The researcher produces structural propositions BEFORE TC derives metaphor. TC receives both the content AND the structural package. TC can use structural hypotheses as constraints or inspirations during metaphor derivation.

**Advantages:**
- TC gets structural framework that would otherwise require multi-session accumulation
- Structural propositions inform metaphor selection (deeper candidates survive)
- The researcher operates on content properties only (no metaphor contamination)

**Risks:**
- Researcher's structural hypothesis may BIAS TC's metaphor derivation
- If researcher proposes "geological strata," TC may gravitationally collapse to geological metaphor
- This potentially violates the Library Access Prohibition's spirit (R1)

**Mitigation:** The researcher produces structural PROPERTIES (layering, ordering, compression) WITHOUT naming metaphor domains. "This content has 4-level hierarchy with progressive compression" rather than "This content wants geological strata." The researcher speaks in STRUCTURE, not METAPHOR.

### Option B: After TC, Before Builder (Post-Derivation)

```
Content → TC → Brief → RESEARCHER (+ brief) → Enhanced Package → Builder → PA
```

**What this means:** TC derives metaphor independently (library-blind). The researcher then reads the TC brief + accumulated knowledge and produces an implementation-mapped package that TRANSLATES the metaphor into specific mechanism deployments informed by prior exploration findings.

**Advantages:**
- TC derives independently (no contamination)
- Researcher can match metaphor to nearest precedent case studies
- Package is metaphor-aware: "Given geological metaphor, DD-004's GEOLOGICAL pattern at 4px→3px→2px→1px is directly applicable"
- Builder gets both conviction brief (creative fuel) AND structural package (implementation map)

**Risks:**
- Researcher may FLATTEN the metaphor by over-mapping to precedent (the curse of "we've seen something like this before")
- Additional serialization delay (TC must complete before researcher starts)
- The researcher's CSS suggestions may conflict with the builder's creative interpretation of the brief

**Mitigation:** Frame the package as SUGGESTIONS, not PRESCRIPTIONS. "Prior explorations found that geological metaphors benefit from 4px→1px border gradient (DD-004). The builder may adapt this to their specific interpretation."

### Option C: Parallel to TC

```
Content → TC (blind)
       → RESEARCHER (knowledge-aware)
       → Both outputs merge → Builder → PA
```

**What this means:** TC and researcher run simultaneously on the same content. TC produces experiential conviction; researcher produces structural proposition. Both outputs are delivered to the builder.

**Advantages:**
- No serialization delay (TC and researcher run in parallel)
- TC stays completely independent
- Builder gets TWO complementary inputs: experiential + structural
- This exactly mirrors the exploration era's dual-input model (structural hypothesis + emotional conviction)

**Risks:**
- Potential CONTRADICTION between TC's metaphor and researcher's structural hypothesis
- Builder must RECONCILE two potentially different architectural visions
- More complex orchestrator logic (merge step required)

**Mitigation:** The merge step is itself an opportunity. If TC says "geological" and researcher says "the content's density pattern matches CRESCENDO with 4-level hierarchy," these REINFORCE each other. If TC says "geological" and researcher says "the content is flat with no hierarchy," this is a SIGNAL — the builder should question whether the geological metaphor is structurally supported.

### Recommendation: Option B (Post-TC, Pre-Builder)

Option B is the highest-signal, lowest-risk placement for three reasons:

1. **TC independence is preserved.** The Library Access Prohibition exists for a reason. The researcher operates AFTER TC has committed its metaphor, so there is zero contamination risk.

2. **The researcher has the MOST information.** It knows the content (from reading it), the metaphor (from the TC brief), AND the accumulated knowledge. It can produce the most specific possible implementation mapping.

3. **The orchestrator change is minimal.** /compose already has a serial pipeline (TC → Builder → PA). Inserting one agent between TC and Builder requires one additional spawn and one additional artifact (`_research-package.md`). The builder prompt gains one additional input file.

4. **It maps directly to what Agent-0C did.** Agent-0C operated AFTER the structural hypothesis was set (CD-era equivalent of post-TC metaphor lock). It produced per-builder packages that translated the committed hypothesis into implementation-mapped plans. This is architecturally identical.

---

## 8. Multi-Pass Builds: Build → Evaluate → Research → Rebuild

### The Enrichment Wave Pattern in Pipeline Context

The exploration era's strongest quality mechanism was enrichment waves — build, evaluate, discover findings, enrich knowledge, rebuild. Could the pipeline replicate this?

```
Pass 1: TC → Build → PA → Findings Production
                              ↓
Pass 2: Researcher (+ findings) → Enhanced Package → Rebuild → PA
                                                        ↓
Pass 3: (if needed) Further refinement
```

### Cost-Benefit Analysis

| Pass | Marginal Cost | Marginal Time | Expected Marginal Quality |
|------|-------------|--------------|-------------------------|
| Pass 1 | $12-28 (baseline) | 1-2 hours | Baseline |
| Pass 2 (with research) | $15-25 | 1-1.5 hours | HIGH — first exposure to implementation-mapped knowledge |
| Pass 3 (refinement) | $8-15 | 0.5-1 hours | DIMINISHING — most gains captured in Pass 2 |

**Total 2-pass cost:** $27-53, 2.5-3.5 hours.
**Total 3-pass cost:** $35-68, 3-4.5 hours.

### Where This Connects to the REFINE Builder

Pipeline v5's REFINE builder is the closest existing mechanism to a multi-pass approach:

> "The REFINE builder reads conviction + artistic only, never sees gates."

The REFINE builder is a different Opus instance that receives:
- The original conviction brief
- The PA's creative direction (artistic feedback)
- The current HTML artifact

It does NOT receive:
- Gate scores, thresholds, or compliance checklists
- The original builder's reflection
- Technical audit details

**This is already a two-instance pattern.** The first builder produces an initial composition. The REFINE builder improves it with fresh eyes + artistic feedback. What the REFINE builder LACKS is the structural knowledge that a researcher agent would provide.

### The Synthesis: REFINE + Researcher

The most powerful multi-pass architecture would be:

```
Pass 1: TC → Builder → PA (quick, 3 auditors)
                         ↓
        RESEARCHER reads:
          - TC brief (metaphor)
          - PA creative direction (what's working/not)
          - Content
          - Accumulated knowledge
                         ↓
        Produces: Enhanced package (what specific mechanisms
                  from prior explorations would improve
                  the weak areas PA identified)
                         ↓
Pass 2: REFINE builder receives:
          - Conviction brief (creative fuel)
          - PA creative direction (what to fix)
          - Research package (structural knowledge)
          - Current HTML artifact
```

This is qualitatively different from both the current pipeline (no researcher) and the exploration era (separate sessions over weeks). It operates in a single session but uses multi-pass iteration to approximate the exploration era's enrichment cycle.

**Key insight:** The researcher operates BETWEEN passes, not before the first pass. It uses PA's findings from Pass 1 to TARGET its knowledge traversal. Instead of "here are all findings relevant to your content," it says "PA found whitespace voids in zones 3-4 — here are specific mechanisms from DD-005 and OD-006 that solved this exact problem in prior explorations."

---

## 9. The REFINE Builder's Relationship to the Researcher Concept

### What the REFINE Builder Already Does

The REFINE builder in pipeline v5 embodies one half of the researcher agent concept:

1. **Fresh perspective** — Different Opus instance, no continuation bias from original build
2. **Artistic orientation** — Reads conviction + PA creative direction, not gates
3. **Improvement focus** — Knows what's working (from PA's AMPLIFY) and what isn't (from PA's RELEASE/DEEPEN)

### What the REFINE Builder Lacks

1. **Historical knowledge** — Doesn't know that prior explorations solved similar problems
2. **Implementation maps** — Knows WHAT to improve but not HOW (no mechanism-specific recommendations)
3. **Structural propositions** — Cannot generate hypotheses like "density inversely correlates with confidence"
4. **Content-specific mechanism routing** — Doesn't know which of the 20 mechanisms are most applicable

### How They Complement Each Other

The researcher agent provides the KNOWLEDGE dimension. The REFINE builder provides the CREATIVE dimension. Together:

| Dimension | REFINE builder alone | REFINE + researcher |
|-----------|---------------------|-------------------|
| What to improve | PA says "whitespace voids" | PA says "whitespace voids" |
| How to improve | Builder's own creative judgment | Researcher: "DD-005's tidal rhythm at 48px/24px solved this, and OD-006's breathing zones used 5 distinct backgrounds" |
| Structural framework | Improvise from conviction brief | Implementation-mapped plan from accumulated knowledge |
| Risk | May repeat original builder's mistakes | Has historical anti-patterns to avoid |

The REFINE builder is the pipeline's current best approximation of iterative improvement. Adding a researcher agent between PA and REFINE transforms it from "try again with feedback" to "try again with feedback AND historical knowledge."

---

## 10. Architectural Decision Matrix

### Summary of Tradeoffs

| Decision | Option | Cost | Time | Quality Signal | Risk |
|----------|--------|------|------|---------------|------|
| No researcher | Status quo | $12-28 | 1-2h | Baseline | None |
| Min researcher pre-TC | 1 agent | $15-32 | 1.5-2.3h | Unknown (may bias TC) | TC contamination |
| Min researcher post-TC | 1 agent | $15-32 | 1.5-2.3h | HIGH (targeted) | May flatten metaphor |
| Min researcher parallel | 1 agent | $14-30 | 1.3-2.1h | MEDIUM (may conflict) | Reconciliation burden |
| Max researcher post-TC | 3-4 agents | $20-45 | 2-3h | HIGH (comprehensive) | Premature optimization |
| Multi-pass with researcher | 2 passes + research | $27-53 | 2.5-3.5h | HIGHEST (iterative) | Cost ceiling |
| Full exploration replication | 30-85 agents | $20-60+ per stage | Days | KNOWN HIGH | Not viable in pipeline |

### The Recommended Path

1. **First experiment:** Minimum viable researcher, post-TC placement, single pass. Cost: +$2-4. Time: +15-20 min. This isolates the researcher's contribution.

2. **If positive results:** Multi-pass architecture with researcher between Pass 1 PA and Pass 2 REFINE builder. Cost: +$15-25. Time: +1-1.5 hours.

3. **If diminishing returns:** Stop at minimum. The exploration era's quality came from accumulation across STAGES, not from researcher sophistication within a single stage.

4. **Never attempt:** Full exploration replication. The pipeline's value proposition IS speed. A $60, multi-day pipeline is not a pipeline — it is a new exploration. The knowledge graph exists; the question is how to traverse it efficiently, not how to rebuild it.

---

## 11. The Architectural Constraint That Matters Most

The deepest architectural constraint is not cost, time, or complexity. It is this:

**The compose pipeline's context isolation model is fundamentally incompatible with knowledge accumulation.**

The compose skill's architecture deliberately isolates agents:
- TC doesn't see components
- Builder doesn't see PA questions
- PA doesn't see the brief
- Weaver doesn't see the brief

This isolation is correct for preventing contamination. But it also means NO agent has access to the full knowledge graph. TC sees content + identity. Builder sees brief + vocabulary. PA sees screenshots. Each agent operates on a SLICE.

The researcher agent is the first agent in the pipeline that would operate on a SYNTHESIS — content + metaphor + accumulated knowledge. It is architecturally unique because it crosses the isolation boundaries:

- It reads the TC brief (post-TC placement) — crossing the TC→builder boundary
- It reads accumulated knowledge (case studies, research, stage findings) — crossing the library prohibition boundary
- It produces a package consumed by the builder — crossing the knowledge→implementation boundary

This is why the researcher agent cannot be a "tweak" to an existing agent. It is a new architectural ROLE — the first agent in the pipeline that has a holistic view. Every other agent is deliberately myopic. The researcher is deliberately panoramic.

The question is whether that panoramic view produces enough value to justify breaking the isolation model at one point. The exploration era's evidence says YES — Agent-0C's panoramic view produced the curated packages that made CD-006 possible. The pipeline needs to test whether a single panoramic agent within a 2-hour window can replicate even a fraction of that value.

---

*This analysis examines constraints and tradeoffs. For the functional analysis of what a researcher agent would DO, see 06-DIMENSIONAL-FUNCTIONAL.md. For the epistemological dimension, see 07-DIMENSIONAL-EPISTEMOLOGICAL.md.*
