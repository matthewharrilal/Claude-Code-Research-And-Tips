# Process Topology Shift Analysis

**Agent:** process-topology (Opus 4.6)
**Date:** 2026-02-18
**Sources:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines), 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines), 09-SYNTHESIS.md (268 lines)
**Scope:** Bidirectional mapping of every process/team topology transformation between master prompt and remediation spec

---

## 1. INTENDED vs PRODUCED: The Master Prompt's Topology

### 1.1 What the Master Prompt INTENDED

The master prompt specifies a 12-agent coordinated production system across 6 passes with 6 gates:

```
INTENDED TOPOLOGY (C1, lines 441-496):

Pass 0:   Content Architect (Opus) + Metaphor Agent (Opus)
          -> GATE 0: Spatial Budget
Pass 0.5: Planner (Opus)
          -> GATE 0.5: Content Quality
Pass 1:   Skeleton Builders A+B (Sonnet, competitive) + Embedded Auditor (Sonnet)
          -> GATE 1: Spatial Confidence
Pass 2:   Mechanism Builder (Sonnet)
          -> GATE 3: Composition
Pass 3:   Metaphor Builder (Opus)
          -> GATE 4: Metaphor Coherence
Pass 4:   Intentionality Builder (Opus)
          -> GATE 5: Ship-Ready (Mode 4 PA, 9 auditors)
```

Communication protocol: hub-and-spoke with team-lead as hub. 6 mandatory checkpoints (CP-A through CP-F). Minimum 8 substantive messages. Zero messages at Gate 1 = PAUSE BUILD.

This is a **sequential pipeline with parallel competitive branching** -- agents execute in strict pass order, each pass's output gates the next, with one competitive fork (Pass 1: two skeleton builders, pick better).

### 1.2 What It Actually PRODUCED

From the synthesis (09-SYNTHESIS.md, RC-5, Part 3):

- **Zero SendMessage calls** across all 19 agents
- **Planner agent** produced a 718-line build plan that was architecturally brilliant but specified sub-perceptual values (RC-10)
- **Skeleton Builders** received 71 lines (13.4% of prompt), 100% constraints, zero CSS recipes
- **Mechanism Builder** deployed 14 mechanisms with CCS ~0.05 (effectively uncoupled)
- **Communication protocol** completely ignored -- CP-A through CP-F never fired
- **Gates** checked rule compliance, not perceptual quality -- every gate PASSED while the page was visually empty

The ACTUAL topology was: **isolated agents writing files in sequence, each inheriting the previous file, with no cross-agent feedback, governed by compliance checks that could not detect the core failure.**

### 1.3 Root Cause of the Topology Failure

The master prompt's topology failed for three interconnected reasons:

**A. Communication as obligation, not task.** CP-A through CP-F are defined as things agents SHOULD DO after completing work, not as standalone tasks with deliverables. In the task system, agents complete their primary task and mark it done. The communication obligations are attached as afterthoughts ("AFTER SELF-CHECK: SendMessage to planner..."). Agents optimize for task completion, not for auxiliary obligations. This is the binary-rule principle applied to communication: if communication is not a task with its own completion criterion, it does not happen.

**B. Gate structure checked rules, not experience.** Gate 1 checks S-01 (container width), S-02 (content-to-void ratio), S-07 (CPL), etc. All binary checks that can be satisfied by technically-compliant-but-visually-empty output. No gate asks "scroll through -- does each viewport look different?" The perceptual check (Mode 4 PA) is deferred to Gate 5 -- after the entire page is built. By Gate 5, fixing perceptual failures requires rebuilding.

**C. Sequential dependency created information loss.** Content Architect -> Planner -> Skeleton Builder -> Mechanism Builder. Each handoff compresses the previous agent's output. The Planner's 718-line plan becomes the builder's input. The builder's 75-line constraint prompt becomes the builder's behavioral guide. The result: 2,400:1 compression from original research to builder behavior (RC-8). Each agent in the chain could only see its immediate predecessor's output, not the original intent.

---

## 2. WHY THE REMEDIATION'S SIMPLER TOPOLOGY WORKED BETTER

### 2.1 The Remediation's 4-Wave Architecture

```
REMEDIATION TOPOLOGY (12-ENHANCED-REMEDIATION-SPEC.md):

Wave 0:   DEALLOCATION (1 agent, read-only analysis -> deletion spec)
Wave 1:   HTML RESTRUCTURING (1 agent, targeted modifications)
Wave 2-6: CSS RECIPE (1 agent, sequential phases with mid-process checkpoints)
Wave 7:   ACCESSIBILITY + RESPONSIVE (1 agent, additive CSS)
Wave 8:   VERIFICATION (1 agent, programmatic + perceptual checks)
```

Total agents: **1 builder** (Opus). The "waves" are phases within a single agent's execution, not separate agents.

### 2.2 Why Simplicity Won

**A. Zero information loss.** One agent reads the entire spec. No compression, no handoff, no telephone game. The builder has 1,025 lines of context including perception thresholds, worked examples, specific CSS values, cascade verification tables, and self-checks. Compare to the master prompt's builder who received 71 lines of constraints.

**B. Recipe replaces checklist.** The remediation spec is structured as imperative instructions: "Find this block. DELETE everything from X through Y. Replace ALL THREE with these values." Each phase tells the builder WHAT TO DO, not just what not to do. The master prompt's builder section (B1-B12) is structured as declarative rules: "FAIL IF container width outside 940-1100px." The remediation says "add this CSS." The master says "don't violate this constraint."

**C. Embedded verification eliminates deferred feedback.** After every phase, the remediation includes a "PERCEPTION CHECK" that requires the builder to visually verify the work:
- Phase 2: "You should see warm peach -> tan -> honey -> cooling cream -> cool gray"
- Phase 3: "You should see left borders on S2, S5, S7, S9, S10, S12"
- Phase 4: "S1 text should look LARGER, more OPEN, warmer"

These are perceptual gates embedded in execution, not deferred to a final audit. The master prompt's equivalent is P-04 ("Builder self-scroll before file write") -- one line, no specifics about what to look for.

**D. Elimination of coordination overhead.** The master prompt allocates significant attention budget to coordination: C1 (agent roster, 55 lines), C2 (communication protocol, 22 lines), C3 (gate sequence, 30 lines), C4 (PA deployment, 40 lines). That is 147 lines of coordination infrastructure -- more than the builder's total prompt (71 lines). The remediation eliminates coordination entirely because there is only one agent.

### 2.3 Bidirectional Mapping: Multi-Agent Pipeline vs Single-Agent Recipe

| Dimension | Master Prompt (Multi-Agent) | Remediation (Single-Agent) | Winner |
|-----------|---------------------------|---------------------------|--------|
| Information fidelity | 2,400:1 compression | 1:1 (builder reads all) | Remediation |
| Builder prompt type | 71 lines, 100% constraints | 1,025 lines, ~70% recipes | Remediation |
| Communication protocol | 6 checkpoints, min 8 messages | N/A (one agent) | Remediation (by elimination) |
| Creative judgment | Sonnet builders, compliance focus | Opus builder, judgment enabled | Remediation |
| Perceptual feedback | Deferred to Gate 5 | After every phase | Remediation |
| Coordination overhead | 147 lines of spec | 0 lines | Remediation |
| Concurrent execution | Theoretical (never realized) | Sequential by design | Push (master's concurrency never activated) |
| Scalability to larger pages | Better in theory | Harder (one agent, context limits) | Master (in theory) |
| Metaphor integration | Dedicated Opus agent | Not applicable (remediation) | Master (feature present) |
| Compositional intelligence | Intentionality Builder (Opus, Pass 4) | Not applicable | Master (feature present) |

**Verdict:** The remediation's topology is superior for THIS task (CSS + HTML remediation of an existing page). The master prompt's topology is designed for a DIFFERENT task (building a page from scratch). The remediation's simplicity is appropriate because its scope is constrained -- it operates on an existing HTML artifact, not a blank canvas.

---

## 3. THE SINGLE-BUILDER PATTERN

### 3.1 Why One Writer With Manifest Inputs Beats Multiple Writers

The master prompt assigns writing responsibility across multiple agents:
- Content Architect writes `01-adapted-content.md`
- Planner writes `03-build-plan.md`
- Skeleton Builders A+B write the HTML file (competitive)
- Mechanism Builder modifies the HTML file
- Metaphor Builder modifies the HTML file
- Intentionality Builder modifies the HTML file

This creates 4 sequential writes to the same HTML file plus 2 upstream documents. Each writer inherits the previous writer's choices and can only ADD to them (continuation bias). No writer can step back and question architectural decisions.

The remediation assigns ONE writer:
- Single Opus agent writes ALL CSS and HTML modifications

### 3.2 Why Single-Writer is Superior for This Domain

**A. Holistic perception.** One agent can scroll the full page and perceive it as a whole. Sequential builders each see their phase's changes but not the cumulative effect. The Mechanism Builder cannot assess whether Pass 2's additions create void when combined with Pass 1's spacing.

**B. Cross-phase coherence.** The remediation's Phase 2 (backgrounds) informs Phase 3 (borders) informs Phase 4 (typography). The agent carries context across phases. In the multi-agent model, the Mechanism Builder does not know what the Skeleton Builder's reasoning was.

**C. Backtracking ability.** If Phase 4 typography makes Phase 2 backgrounds look wrong, the single agent can revise Phase 2. In the multi-agent model, the Mechanism Builder cannot modify the skeleton -- that would require re-engaging the Skeleton Builder, which the gate structure does not support.

**D. Manifest pattern.** The remediation creates a "manifest" -- the complete spec is the manifest. The builder reads the full manifest and executes. In the multi-agent model, each agent reads a SLICE of the manifest (their 75-line prompt) and writes their contribution. The slicing creates gaps.

### 3.3 When Multiple Writers Would Be Justified

The single-builder pattern breaks down when:
- The page is too large for one agent's context window
- The task requires specialized competencies that cannot coexist (e.g., metaphor derivation requires creative Opus; spatial layout requires systematic Sonnet)
- Time pressure requires parallelism

For the flagship experiment (one HTML page, ~2,000 lines), none of these conditions applied. The master prompt's multi-agent topology was over-engineered for the actual task.

---

## 4. COMMUNICATION PROTOCOL: MANDATORY MESSAGING vs FILE-BUS

### 4.1 What the Master Prompt Mandated

Section C2 (lines 498-527):
```
5+1 mandatory checkpoints. ALL are MUST rules, not MAY.
MEDIUM: SendMessage tool (NOT file-only). File artifacts supplement messages, never replace them.
Zero SendMessage = quality cost.
Minimum 8 substantive messages across experiment.
Zero messages at Gate 1 = PAUSE BUILD.
```

Six specific message templates (CP-A through CP-F) with exact formats:
- CP-A: Builder -> Planner (container, height, content-to-void, concern)
- CP-B: Builder -> Team-Lead (page height, content ratio, sections, channels, deviations)
- CP-D: Pass 2 Builder -> Team-Lead (mechanisms, CCS, channels, reinforcing pairs, spatial re-check)
- CP-F: Metaphor Agent -> Planner (metaphor, channel map, primary channels)

### 4.2 What Actually Happened

Zero messages. 19 agents, zero SendMessage calls.

The synthesis explains why (RC-5): "Communication is necessary for QUALITY REFINEMENT but insufficient for QUALITY GENERATION." The Middle-tier experiment also had zero communication and scored PA-05 4/4.

### 4.3 What the Remediation Did Instead

The remediation eliminated inter-agent communication entirely. With one agent, communication is internal (the agent reads its own previous output). The "communication" happens through the spec itself:

- Phase 0 checkpoint: "Open the page at 1440px. It should look IDENTICAL to before."
- Phase 3 perception check: "You should see left borders on S2, S5, S7, S9, S10, S12"
- Phase 4 perception check: "Compare S1 vs S5 side by side"
- Phase 8 verification: 10-item binary richness checklist + 6-item accessibility check

These are SELF-COMMUNICATION: the agent talks to itself through structured checkpoints. They replace inter-agent messages with intra-agent verification.

### 4.4 Bidirectional Mapping: Communication Models

| Aspect | Master (Inter-Agent Messaging) | Remediation (Intra-Agent Verification) |
|--------|-------------------------------|---------------------------------------|
| Medium | SendMessage tool | Perception checks in spec |
| Compliance achieved | 0% (zero messages sent) | ~100% (embedded in execution flow) |
| Information transferred | Nothing (protocol ignored) | Perceptual observations |
| Failure mode | Silent -- no error when omitted | Visible -- checkpoint produces artifact |
| Overhead | 147 lines of spec for coordination | 0 lines of coordination spec |
| Quality impact | Unknown (never activated) | Directly prevents void/monotony |
| Why it worked/failed | Communication attached to work, not a task itself | Verification IS a phase of work |

**Key insight:** The master prompt treated communication as an OBLIGATION. The remediation treated verification as a PHASE. The difference is structural: obligations are skippable; phases are sequential gates.

---

## 5. GATE STRUCTURE vs WAVE STRUCTURE

### 5.1 The Master Prompt's Gate Structure

6 gates, each binary (PASS/FAIL), each checking specific rule IDs:

```
Gate 0:  Content-to-void >= 60:40. Zone count. Content/Zone >= 1.5.
Gate 0.5: Content Quality (CT-01 through CT-08).
Gate 1:  S-01, S-02, S-07, S-09, S-10, S-11, S-12, S-14 (spatial confidence).
Gate 2:  Header + Footer + all sections present. >= 5 content sections.
Gate 3:  C-01 through C-04. MC self-check. Crown Jewel 8-Check. Spatial re-check.
Gate 4:  2 fresh-eyes. Metaphor structural >= 70%.
Gate 5:  Mode 4 PA, 9 auditors, programmatic audit.
```

Gate failure triggers: max 2 fix cycles per gate, then ABORT.

### 5.2 The Remediation's Wave Structure

9 phases, each with embedded checkpoints:

```
Phase 0:  Deallocation -- DELETE sub-perceptual CSS
          CHECKPOINT: Page should look IDENTICAL to before
Phase 1:  HTML restructuring -- semantic landmarks, callout conversion, grids
          CHECKPOINT: Skip link, aria-labels, grid wrappers in place
Phase 2:  Zone backgrounds -- amplify chromatic channel
          PERCEPTION CHECK: See 3+ color transitions without tools
Phase 3:  Structural borders + dividers + callouts + grids + table headers
          PERCEPTION CHECK: See 6 left borders, distinct dividers, grids
Phase 4:  Typography variation -- font-size, weight, spacing by zone
          PERCEPTION CHECK: Compare S1 vs S5, see difference
Phase 5:  Spatial rhythm -- paragraph margins, section padding
          PERCEPTION CHECK: S1-S3 more spaced than S5-S8
Phase 6:  Element-level richness -- inline code, hover, selection
Phase 7:  Accessibility + responsive
          PERCEPTION CHECK: Selection, focus, skip link, responsive
Phase 8:  Verification -- cascade table, gap check, scale levels, soul, binary richness, accessibility
```

### 5.3 Structural Comparison

| Property | Master Gates | Remediation Phases |
|----------|-------------|-------------------|
| Check type | Binary rule compliance | Perceptual + programmatic |
| Granularity | Per-pass (coarse) | Per-channel (fine) |
| Failure response | Fix cycle or ABORT | Immediate adjustment |
| What they measure | Rule satisfaction | Visible difference |
| Agent boundary | Between agents | Within single agent |
| Sequential enforcement | Strict -- next pass cannot start until gate passes | Soft -- agent proceeds to next phase after checkpoint |
| Cumulative check | Only at Gate 3 (spatial re-check) and Gate 5 (full PA) | Phase 8 checks everything |
| Time cost | Large -- requires spawning audit agents | Small -- agent scrolls page |
| Sophistication | High (9-auditor Mode 4 PA at Gate 5) | Low (self-assessment only) |

**Critical difference:** The master prompt's gates are BETWEEN agents; the remediation's checkpoints are WITHIN phases. The master prompt treats verification as a handoff event. The remediation treats verification as an embedded step.

The master prompt's Gate 5 (Mode 4 PA with 9 auditors) is vastly more thorough than any remediation checkpoint. But Gate 5 arrives AFTER the entire page is built. The remediation's lightweight checkpoints catch failures DURING construction, when they are cheap to fix.

**The optimal design would combine both:** lightweight perceptual checkpoints after each phase (remediation pattern) PLUS a comprehensive Mode 4 PA at the end (master prompt pattern). This is what the synthesis recommends in Takeaway 10: "Embed perception checks in execution gates, not just final PA."

---

## 6. THE PLANNER AGENT ELIMINATION

### 6.1 What the Master Prompt Required

Pass 0.5 (lines 464-470): The Planner (Opus) reads content assessment + metaphor derivation, produces a build plan with mechanism deployment map, spatial budget, section ordering. Reads: mechanism-catalog.md, semantic-rules.md, 16-multi-coherence-invocation.md, content inventory, metaphor derivation. Produces: `03-build-plan.md`.

The Planner is the CENTRAL INTELLIGENCE of the master prompt's topology. It is the only agent that sees both content and mechanisms. It translates abstract metaphor into concrete deployment.

### 6.2 What the Planner Actually Produced

From the synthesis (RC-10): "The Planner agent produced an architecturally brilliant 349-line build plan that maps 14 mechanisms to 12 sections. But its chromatic arc specifies zone backgrounds that differ by 5 RGB points -- physically imperceptible."

The Planner's plan was structurally sound but VALUE-blind. It specified WHICH mechanisms go WHERE but not HOW MUCH variation to apply. The plan validated itself against TOKEN NAMES, not PERCEIVED DIFFERENCES.

### 6.3 Why the Remediation Didn't Need One

The remediation eliminates the Planner for two reasons:

**A. The "plan" is the spec itself.** The remediation spec IS a build plan. Phase 2 says "replace zone colors with these specific hex values." Phase 3 says "add these specific borders to these specific sections." Phase 4 says "set these specific font sizes for these specific zones." The spec author (the synthesizer agent that wrote the remediation) IS the planner -- the planning happened during spec creation, not during execution.

**B. Perceptual values replace token references.** The remediation spec includes a perception thresholds reference (Appendix, lines 970-985):

```
| Property | Minimum Perceptible Delta | This Spec's Values |
|----------|--------------------------|-------------------|
| Background color | >= 10 RGB points | 10-20 RGB points |
| Font-size | >= 2px between zones | 15px vs 17px = 2px |
| Border weight | >= 1px difference | 1px/2px/3px/4px hierarchy |
```

The planning problem (what goes where, how much) is solved in the spec, not at runtime.

### 6.4 Implications for Future Topologies

The Planner agent is not intrinsically flawed. It failed because:
1. It had no perception thresholds to guide value selection
2. Its output was never verified against perceptual criteria
3. The builder could not question or modify the plan

A well-functioning Planner would need:
- Perception thresholds for every channel
- A plan-fidelity gate (RC-15)
- Bidirectional communication with the builder (so the builder can report "this background delta is invisible")

The remediation's approach (embed the plan in the spec) works only when the spec author has enough domain knowledge to make all deployment decisions in advance. For novel content, a runtime Planner may still be necessary.

---

## 7. READ-ONLY PREP AGENTS: THE MANIFEST PATTERN

### 7.1 The Master Prompt's Approach to Analysis vs Execution

The master prompt MIXES analysis and execution within agents:
- Content Architect analyzes content AND writes adapted prose
- Planner analyzes metaphor + content AND writes build plan
- Builders execute CSS AND verify against rules

This mixing creates role confusion. The Content Architect's analytical output (content inventory) feeds the Planner, but the Content Architect's creative output (adapted prose) feeds the builder. Different outputs for different consumers, produced by the same agent.

### 7.2 The Remediation's Separation of Concerns

The remediation spec was itself produced by a read-only analytical process:

```
PRODUCTION TOPOLOGY (from 12-ENHANCED-REMEDIATION-SPEC.md header):

11 remediation-audit reports (read-only analysis, 11 agents)
    -> 1 Opus synthesizer (read-only analysis + spec writing)
        -> 1 Opus builder (execution only)
```

The 11 audit agents ONLY analyzed. They produced findings, gap analyses, CSS comparisons, adversarial challenges. They wrote ZERO CSS. They modified ZERO files. Their output was a "manifest" -- a complete description of what needed to change and why.

The synthesizer agent read all 11 reports and produced the 1,025-line remediation spec -- another manifest artifact. Still no CSS written, no files modified.

Only the final builder agent actually executes. It reads the manifest and writes code.

### 7.3 Why Separation Works

**A. Analysis is cheap; execution is risky.** Reading 11 reports and writing a synthesis costs time but creates no artifacts that could be wrong. Writing CSS to a file creates artifacts that must be correct. Separating the two allows maximum analytical investment before any execution risk.

**B. Manifests are reviewable.** The 1,025-line remediation spec can be reviewed by humans before execution. The master prompt's Planner output (03-build-plan.md) is produced and consumed within the same execution run -- no review opportunity.

**C. Read-only agents cannot damage the artifact.** The 11 audit agents had no ability to modify the HTML file. Even if their analysis was wrong, the file was safe. In the master prompt, every builder agent modifies the HTML file, meaning analysis errors directly become artifact errors.

### 7.4 Bidirectional Mapping: Analysis-Execution Patterns

| Dimension | Master Prompt | Remediation |
|-----------|--------------|-------------|
| Analysis-execution separation | Mixed within agents | Strict: read-only analysts -> synthesizer -> builder |
| Manifest artifact | Build plan (03-build-plan.md, 349 lines) | Remediation spec (1,025 lines) |
| Reviewability | Plan produced and consumed within same run | Spec produced, reviewed, then executed |
| Analytical scope per agent | Narrow (agent's assigned pass only) | Broad (each auditor reads full page + reference files) |
| Execution risk from bad analysis | High (builder writes bad CSS directly) | Low (spec can be corrected before builder starts) |
| Cost | Lower (fewer agents, less time) | Higher (11 analysts + 1 synthesizer before 1 builder) |

---

## 8. PIPELINE REPRODUCIBILITY

### 8.1 The Master Prompt's Reproducibility Profile

The master prompt has LOW reproducibility across runs for these reasons:

**A. Agent model variance.** Sonnet and Opus agents produce different outputs for the same prompt. The master prompt assigns specific model choices (Sonnet for builders, Opus for planners). Different runs with the same models will still produce different metaphors, different build plans, different mechanism selections.

**B. Competitive branching non-determinism.** Pass 1 spawns two skeleton builders and picks the better one. The selection criterion is subjective (team-lead judgment). Different team-lead instances will pick different skeletons.

**C. Communication sensitivity.** The master prompt's communication protocol, if it ever activates, creates branching paths. CP-A's "biggest spatial concern" message would trigger different Planner responses in different runs.

**D. Gate arbitrariness.** Gates check binary rules, but borderline cases (content-to-void at 59% vs 61%) create different outcomes across runs.

**E. Metaphor dependence.** The entire page structure depends on metaphor derivation (TC Phases 1-3), which is inherently non-deterministic. Different metaphors produce fundamentally different pages.

### 8.2 The Remediation's Reproducibility Profile

The remediation spec has HIGH reproducibility across runs for these reasons:

**A. Specific values eliminate variance.** "Replace zone backgrounds with #FEF5EB, #F5EDE2, #FBF3E8..." leaves zero room for interpretation. Every builder agent will produce identical zone backgrounds.

**B. Sequential recipe eliminates branching.** No competitive forks, no communication-dependent branches, no metaphor derivation. Phase 0 -> Phase 1 -> Phase 2 -> ... -> Phase 8 is deterministic.

**C. Single agent eliminates coordination variance.** No agent-to-agent handoff means no information loss variance across runs.

**D. Artifact-based checkpoints are deterministic.** "Page should look IDENTICAL to before" is verifiable. "Open at 1440px, you should see warm peach -> tan -> honey" is more specific than "content-to-void >= 60:40."

### 8.3 Reproducibility vs Quality Ceiling

There is a fundamental tension:

- **High reproducibility = lower quality ceiling.** The remediation spec specifies exact values, which means every run produces the same output -- but that output is limited to what the spec author anticipated. No creative surplus is possible.

- **Low reproducibility = higher quality ceiling.** The master prompt's topology COULD produce a CD-006-level crown jewel if all agents perform optimally, communicate effectively, and make good judgment calls. But it could also produce the flagship failure. High variance.

The remediation targets the 3/4 to 3-4/4 PA-05 range with high confidence. The master prompt targets 4/4 with low confidence.

### 8.4 Bidirectional Mapping: Reproducibility

| Dimension | Master Prompt | Remediation |
|-----------|--------------|-------------|
| Run-to-run consistency | LOW (metaphor variance, agent model variance, communication variance) | HIGH (specific values, sequential phases, single agent) |
| Quality ceiling | HIGH (4/4 possible with optimal execution) | MODERATE (3-4/4 maximum, limited by pre-specified values) |
| Quality floor | LOW (1.5/4 as demonstrated) | MODERATE-HIGH (3/4 minimum predicted) |
| Variance width | 1.5/4 to 4/4 (2.5 point spread) | 3/4 to 3-4/4 (0.5-1 point spread) |
| Failure mode | Catastrophic (visually empty page) | Mediocre (competent but not crown jewel) |
| Context sensitivity | HIGH (different content produces very different pages) | LOW (remediation is page-specific) |
| Transferability to new content | YES (topology is content-agnostic) | NO (spec is artifact-specific) |

---

## 9. FULL BIDIRECTIONAL SHIFT MAP

| # | Shift | Master Prompt | Remediation | Direction | Impact |
|---|-------|--------------|-------------|-----------|--------|
| 1 | Agent count | 12 creative + 9 PA auditors = 21 | 1 builder | Massive reduction | Eliminated coordination overhead, eliminated information loss |
| 2 | Agent model | Sonnet builders + Opus planners | Opus builder | Builder model upgraded | Creative judgment enabled in execution |
| 3 | Topology | Hub-and-spoke with sequential pipeline | Single agent, sequential phases | Flattened to atomic | No coordination = no coordination failure |
| 4 | Communication protocol | 6 mandatory checkpoints, min 8 messages | Perception checks embedded in phases | External messaging -> internal verification | 0% compliance -> ~100% compliance |
| 5 | Builder prompt size | 71 lines (13.4% of prompt) | 1,025 lines (100% of spec) | 14x expansion | Full context vs constraint-only snippet |
| 6 | Builder prompt type | 100% constraints (55 guardrails, 7 playbooks) | ~70% recipes, ~30% constraints | Descriptive -> Prescriptive | Recipe-driven execution vs constraint-driven compliance |
| 7 | Planner agent | Dedicated Opus agent, Pass 0.5 | Eliminated (plan embedded in spec) | Planning moved from runtime to design-time | Pre-validated values vs runtime-generated values |
| 8 | Gate structure | 6 binary gates between passes | 7 perceptual checkpoints within phases | Binary compliance -> Perceptual verification | Catches failures during construction, not after |
| 9 | Competitive branching | Pass 1: 2 skeleton builders, pick better | None | Eliminated | Reduced non-determinism |
| 10 | Metaphor integration | Dedicated Metaphor Agent + Metaphor Builder | Not applicable (remediation of existing page) | Feature eliminated by scope reduction | N/A for remediation context |
| 11 | Intentionality pass | Dedicated Intentionality Builder (Opus, Pass 4) | Not applicable | Feature eliminated by scope reduction | N/A for remediation context |
| 12 | Content adaptation | Content Architect adapts research prose | Not applicable (existing content preserved) | Feature eliminated by scope reduction | N/A for remediation context |
| 13 | Analysis-execution separation | Mixed within agents | Strict separation (11 analysts -> 1 synthesizer -> 1 builder) | Implicit -> Explicit | Manifests reviewable before execution |
| 14 | File ownership | Sequential: each builder writes to same HTML file | Single owner | Multi-writer -> Single-writer | Zero contention, holistic perception |
| 15 | Information compression | 2,400:1 from research to builder behavior | ~1:1 (builder reads full spec) | Near-total -> Near-zero | Builder sees all context including perception thresholds |
| 16 | Perception thresholds | None (no minimum perceptible magnitude defined) | Explicit (Appendix: >= 10 RGB, >= 2px font, >= 1px border, etc.) | Absent -> Mandatory | Prevents sub-perceptual compliance |
| 17 | CSS value specification | Abstract (token names, rule IDs) | Concrete (specific hex values, pixel sizes) | Abstract -> Concrete | Zero interpretation variance |
| 18 | PA integration | Mode 4 with 9 auditors at Gate 5 | Self-assessment perception checks + Phase 8 verification | External audit -> Internal verification | Faster, less thorough, but catches gross failures earlier |
| 19 | Scope | Full page build from scratch | Remediation of existing page | Greenfield -> Brownfield | Different task, different optimal topology |
| 20 | Reproducibility | Low (high variance across runs) | High (specific values, deterministic phases) | Variable -> Consistent | Higher floor, lower ceiling |
| 21 | Kill criteria | 5 kill criteria with ABORT | None (spec assumes success) | Present -> Absent | Remediation lacks escape hatch |
| 22 | Recovery protocols | 4 recovery rules (RP-01 through RP-04) | Mid-process checkpoints with adjustment guidance | Formal recovery -> Informal adjustment | Remediation relies on builder judgment for recovery |
| 23 | Conviction framing | 82-line conviction layer + 10-line closing | None (pure execution spec) | Present -> Absent | Remediation is utilitarian; master prompt attempts inspiration |

---

## 10. SYNTHESIS: WHAT THIS MEANS FOR PIPELINE DESIGN

### 10.1 The Fundamental Tradeoff

The master prompt and remediation represent two poles of a spectrum:

```
MASTER PROMPT                                    REMEDIATION
Multi-agent, coordinated, high-variance    <-->  Single-agent, sequential, low-variance
Content-agnostic, generalizable            <-->  Artifact-specific, non-transferable
Rule-driven, compliance-checked            <-->  Recipe-driven, perception-checked
High ceiling, low floor                    <-->  Moderate ceiling, high floor
```

Neither pole is universally superior. The master prompt's topology is appropriate for NOVEL builds where the content, metaphor, and page structure are unknown in advance. The remediation's topology is appropriate for TARGETED modifications to existing artifacts where the exact changes are known.

### 10.2 The Optimal Hybrid

The synthesis (Takeaway 1+2+10) points toward a hybrid:

1. **Pre-execution planning phase** (remediation's manifest pattern): dedicated analytical agents produce a complete build manifest with SPECIFIC VALUES and PERCEPTION THRESHOLDS before any builder starts
2. **Single builder with full context** (remediation's single-writer pattern): one Opus builder reads the full manifest and executes
3. **Embedded perceptual checkpoints** (remediation's phase-checkpoint pattern): after each major construction phase, builder verifies perceptual output
4. **Final comprehensive audit** (master prompt's Mode 4 PA): after construction, 9 independent auditors assess the final artifact

This hybrid preserves:
- The master prompt's analytical depth (multi-agent research, metaphor derivation, mechanism planning)
- The remediation's execution reliability (single builder, full context, perception checks)
- The master prompt's final audit thoroughness (Mode 4 PA)

While eliminating:
- The master prompt's coordination overhead (no inter-agent messaging during construction)
- The master prompt's information loss (builder sees full manifest)
- The remediation's quality ceiling limitation (analytical agents generate creative options)

### 10.3 The Process Lesson

The deepest finding across both documents: **the unit of quality in CSS composition is the PERCEPTUAL DECISION, not the RULE COMPLIANCE.** The master prompt optimized for rule compliance and achieved it perfectly -- zero soul violations, correct container width, correct CPL. But the page was visually empty. The remediation optimized for perceptual impact and specified values above human perception thresholds.

A topology that checks "does this LOOK different?" after every phase will outperform a topology that checks "does this COMPLY with rules?" at every gate. The master prompt has the right STRUCTURE (gates between passes); it just checks the wrong THING (compliance instead of perception).

---

**END OF PROCESS TOPOLOGY SHIFT ANALYSIS**

**Total shifts mapped:** 23
**Bidirectional tables:** 6
**Source files analyzed:** 3 (2,256 combined lines)
