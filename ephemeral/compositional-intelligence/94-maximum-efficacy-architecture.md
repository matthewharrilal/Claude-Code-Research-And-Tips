# MAXIMUM EFFICACY PIPELINE ARCHITECTURE

**Author:** Architectural Patterns Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #94 -- What structural shape of PV2 maximizes efficacy at every level?
**Sources:** PV2-PIPELINE-DIAGRAM.md, 74-bridging-tissue.md, 84-builder-telescope-microscope.md, 85-recipe-ceiling.md, 87-inherent-vs-bolted.md, 29-meta-first-principles.md, 19-design-programmatic-enforcement.md

---

## 0. THE QUESTION, PRECISELY

What topology + agent count + responsibility distribution maximizes PA-05 score per unit of compute?

The evidence base:
| Artifact | Agents | Topology | PA-05 | Compute (min) | PA-05/hour |
|----------|--------|----------|-------|---------------|------------|
| CD-006 | 1 (+ human) | Single node | 39/40 (~4/4) | ~120-180 | ~1.5/hr |
| Middle | 8 | Flat file-bus | 4/4 | ~35 | ~6.9/hr |
| Remediation | 16+ | Hub-and-spoke | 2.5/4 | ~180 | ~0.8/hr |
| Flagship | 19 | Multi-wave pipeline | 1.5/4 | ~240-400 | ~0.3/hr |

The correlation is clear and damning: **more agents = lower quality per unit time.** The Middle experiment with 8 agents in 35 minutes produced the highest quality. CD-006 with 1 agent produced the highest absolute quality. The 19-agent flagship produced the worst.

But correlation is not causation. The confounds are real (content complexity, brownfield/greenfield, instruction format, builder model). This report designs from the evidence while acknowledging its limitations.

---

## 1. THREE TOPOLOGIES EVALUATED

### 1.1 Linear Pipeline (Current PV2)

```
User -> TC Planner -> Metaphor Validator -> Handoff Gate -> Builder -> Gates -> PA (x9) -> Fix -> Output
```

**Properties:**
- Sequential wave execution (Wave 0 -> 0.5 -> 0.9 -> 1 -> 2 -> 3)
- Each wave waits for the previous to complete
- Single path, no branching (under ALWAYS FLAGSHIP)
- 4-6 distinct agent roles
- ~160-270 min total

**Strengths:**
- Simple control flow. The orchestrator is a linear script.
- Each stage has clear inputs and outputs.
- Fire-and-forget: user walks away, pipeline completes.

**Weaknesses:**
- Intelligence degrades at every boundary crossing (Report 74: 11 boundaries, 4 destructive).
- Sequential = no feedback loops DURING building. The builder writes 90-150 min of CSS before ANY verification.
- Pipeline length proportional to failure cost. A metaphor problem at Wave 0.5 wastes all subsequent compute.

**Critical deficiency:** The linear pipeline separates UNDERSTANDING (TC planner) from EXECUTION (builder). The planner understands the content deeply. The builder receives a compressed artifact. This separation is the root cause of intelligence loss (Report 74, Boundary 3: ~20:1 compression, ~35% survival).

### 1.2 Star Topology (Central Orchestrator)

```
                  Orchestrator
                 /    |    \    \
           TC   Builder  Gates   PA(x9)
          Planner                Weaver
```

**Properties:**
- Central orchestrator spawns and coordinates all agents
- Agents communicate ONLY through orchestrator (file-bus mediated)
- Orchestrator holds full pipeline state
- Agents are stateless workers receiving instructions per task

**Strengths:**
- Single point of coordination. No agent-to-agent communication ambiguity.
- Orchestrator can route information selectively (different agents see different files).
- Easy to add/remove agents without changing topology.

**Weaknesses:**
- Orchestrator becomes bottleneck. Every message routes through it.
- Orchestrator must understand ALL agent roles to coordinate effectively.
- Information loss at orchestrator (it compresses agent outputs to fit coordination messages).

**Critical deficiency:** The star topology with many leaf agents is what the flagship used. The orchestrator coordinated 19 agents and became a compression engine -- taking rich TC output and distilling it to brief builder instructions. Report 87 (inherent vs bolted-on) shows this is where "bolted on" architecture thrives: the orchestrator TELLS agents what to do rather than STRUCTURALLY REQUIRING it.

### 1.3 Minimal Core + Verification Shell

```
[CORE: 1-2 agents, deep integration]
           |
           v
[SHELL: Programmatic gates + PA auditors]
```

**Properties:**
- CORE: Minimum agents holding maximum compositional intelligence
- SHELL: Automated/parallel verification with no compositional responsibility
- CORE produces the artifact; SHELL verifies it
- Sharp boundary between CREATION (core) and VERIFICATION (shell)

**Strengths:**
- Minimal intelligence loss in the core (fewer boundaries = fewer compression points).
- Verification agents need zero compositional intelligence (fresh-eyes principle).
- Matches the empirical evidence: CD-006 = 1-core + human-shell. Middle = 2-core + 6-shell.

**Weaknesses:**
- Core agents carry high responsibility. If the core fails, the shell can only detect failure, not prevent it.
- Core agents need large context windows (must hold telescope + microscope).
- Less parallel work in the core (1-2 agents = sequential).

**This topology matches the evidence.** Every successful build (CD-006, Middle) had a tight core + verification shell. Every unsuccessful build (flagship, remediation) had a distributed core where compositional intelligence was spread across many agents.

---

## 2. THE MAXIMUM EFFICACY ARCHITECTURE

### 2.1 The Principle

**Maximize the intelligence density of the CORE. Maximize the breadth of the SHELL. Minimize the boundary count between them.**

This principle derives from three converging findings:

1. **Report 85 (Recipe Ceiling):** Convention-level instruction (WHAT to achieve + WHY) produces 4/4. Recipe-level instruction (HOW to execute) caps at 3/4. The builder must UNDERSTAND, not just FOLLOW.

2. **Report 74 (Bridging Tissue):** Every boundary crossing loses intelligence. 4 of 11 boundaries are destructive. The highest-leverage fix is reducing compression at boundaries, but the highest-leverage ARCHITECTURE is reducing boundary COUNT.

3. **Report 87 (Inherent vs Bolted-On):** Features become inherent through structural dependency, not through text instructions. The fewer agents that must coordinate, the fewer opportunities for text instructions to be ignored.

### 2.2 The Architecture: "Fat Core, Thin Shell"

```
USER: /build-page content.md
  |
  v
ORCHESTRATOR (thin: ~250 lines, mechanical coordination only)
  |
  |-- Spawns TC+Builder as SINGLE OPUS AGENT
  |   (The core: one agent that plans AND builds)
  |
  |-- Between build phases, runs programmatic gates
  |   (Mechanical, no agent needed)
  |
  |-- After build complete, pre-captures screenshots
  |   (Mechanical, one Playwright session)
  |
  |-- Spawns 9 PA auditors in parallel (fresh-eyes)
  |   (The shell: verification, zero compositional knowledge)
  |
  |-- Spawns PA weaver
  |   (Synthesis of 9 reports)
  |
  |-- If PA-05 < 3/4: routes fixes to SAME core agent
  |   (Preserves compositional memory)
  |
  v
OUTPUT: HTML + PA report + build log
```

**Agent count: 12 total (1 orchestrator + 1 core + 9 PA auditors + 1 weaver)**

Compare:
- Current PV2 diagram: 12+ agents (TC planner + metaphor validator + builder + gate runner + 9 PA + weaver)
- Flagship experiment: 19 agents
- Middle experiment: 8 agents
- CD-006: 1 agent + human

### 2.3 The CORE Agent: TC+Builder Fusion

**The single most important architectural decision: MERGE the TC planner and the builder into ONE agent.**

**Why this is radical:** PV2 currently separates planning (TC, Opus, 30-60 min) from building (Builder, Opus, 90-150 min). This separation exists because the TC skill (1,878 lines) was designed as a standalone pipeline that outputs a build plan consumed by a separate builder.

**Why this is correct:** The separation creates Boundary 3 (TC output -> build plan, ~20:1 compression, the single most destructive boundary). By MERGING planner and builder into one agent, Boundary 3 DISAPPEARS. The agent that derives the metaphor is the same agent that writes the CSS. No compression. No handoff. No intelligence loss.

**The evidence demands this:**
- CD-006: ONE agent held telescope + microscope. Scored 39/40.
- Middle: TC planner and builder were separate, but the builder received a 100-line recipe that was effectively a direct transcript of TC's thinking. The compression was mild. Scored 4/4.
- Flagship: TC planner and builder were deeply separated (19 agents, 963-line master prompt). Compression was catastrophic (~50:1). Scored 1.5/4.
- Remediation: TC analysis was done by the SAME team that built the spec. The remediation builder received a 1,025-line spec that was a direct product of diagnostic analysis. Scored 2.5/4 (brownfield).

**The pattern:** Intelligence survival correlates with the degree of fusion between planning and building. Maximum fusion (CD-006) = maximum quality. Maximum separation (flagship) = minimum quality.

**Implementation:**

The core agent receives:
1. `content.md` (the raw content)
2. TC SKILL instructions (embedded in prompt, NOT as a separate skill invocation)
3. Reference files: `tokens.css`, `prohibitions.md`, `mechanism-catalog.md`, `merged-components.css`, `perception-thresholds.md`
4. A ~100-line "conventions brief" (WHAT to achieve, not HOW to execute)

The core agent's instruction:

```markdown
## YOUR TASK

You are building a designed HTML page from this content. You will PLAN and BUILD in one pass.

### PHASE A: UNDERSTAND (10-20 min)
Read the content deeply. Determine:
- Zone count (2-5) and which sections map to which zones
- The emotional/intellectual arc (what the reader FEELS at each stage)
- The semantic direction: one sentence that captures the compositional intent
  Example: "Deepening revelation -- surface accessibility gives way to analytical density"
- The metaphor (if one emerges naturally from the content). If forced, skip it.

### PHASE B: PLAN (10-20 min)
For each zone:
- Background color (>= 15 RGB delta between adjacent zones)
- Typography treatment (display / body / detail zones)
- Mechanisms to deploy (one from EACH category: S, T, M, B, R)
- Transition type to the next zone (SMOOTH / BRIDGE / BREATHING)

Write this plan as an HTML comment at the top of your output file.

### PHASE C: BUILD (60-120 min)
Write the HTML + CSS. Use the recipe phases as a GUIDE, not a mandate:
1. HTML skeleton first (semantic markup, component library classes, ARIA, skip link)
2. Soul CSS (border-radius: 0, box-shadow: none, container 960px)
3. Zone backgrounds
4. Borders + transitions
5. Typography zones
6. Element-level richness
7. Accessibility (focus styles, reduced motion, responsive breakpoints, print)

At each step, ask yourself: "Can I SEE this? Does this serve the semantic direction?"

### PHASE D: PROVE (10-15 min)
Write the cascade value table (computed CSS at every section boundary).
Verify >= 3 channels shift at every zone boundary.
Verify perception thresholds: >= 15 RGB bg delta, >= 2px font-size delta, <= 108px stacked gap.

### CONVENTIONS (not a recipe -- WHAT, not HOW)
- Every background color must be visible AND serve the semantic direction
- Every typographic choice must be perceptible AND reinforce the reading arc
- Every border must be present AND encode meaningful hierarchy
- Component library: adopt >= 10/26 classes
- Accessibility: WCAG 2.1 AA (non-negotiable)
- Responsiveness: 768px and 1024px breakpoints
- The page must feel DESIGNED, not assembled. If you find yourself following steps without understanding WHY, stop and re-read the content.
```

**What this achieves:**
- Zero intelligence loss at the TC-to-builder boundary (it doesn't exist)
- The agent that UNDERSTANDS the content WRITES the CSS
- The "recipe ceiling" is bypassed: conventions replace recipes
- The agent holds telescope AND microscope throughout
- Content-form resonance is possible (the builder KNOWS the content)
- Creative surprise is possible (the builder has compositional freedom)

**What this risks:**
- A single agent could produce structurally incomplete output (skip accessibility, forget responsive breakpoints)
- Mitigation: Programmatic gates catch omissions BEFORE the PA runs. Report 87's Pattern 2 (phase-locked build) can be applied: orchestrator checks intermediate saves.

### 2.4 The ORCHESTRATOR: Mechanical Coordinator

The orchestrator is deliberately THIN. It does NOT understand compositional intelligence. It understands only:
1. Spawn the core agent with the right files
2. After the core agent saves intermediate HTML, run programmatic gates
3. If a gate fails, send the fix recipe (with measured values) back to the core agent
4. After the core agent completes, pre-capture screenshots
5. Spawn 9 PA auditors with screenshots only
6. Spawn PA weaver to synthesize
7. If PA-05 < 3/4, route top-3 issues to core agent for fix cycle
8. If PA-05 >= 3/4 or 3 fix cycles exhausted, output results

This is ~250 lines of coordination code. No compositional intelligence. No recipe knowledge. Just routing.

**Why thin orchestrator matters:** A thick orchestrator becomes a compression engine (the master prompt's 963 lines). A thin orchestrator is a TRAFFIC COP -- it routes artifacts but doesn't interpret them. This prevents the orchestrator from becoming a bottleneck where intelligence degrades.

### 2.5 The SHELL: 9 PA Auditors + Weaver

The shell is UNCHANGED from PV2's current design. This is the part that works:
- Pre-capture screenshots (team lead, mechanical)
- 9 fresh-eyes Opus auditors in parallel (zero build context)
- Each auditor answers assigned subset of 48 PA questions
- PA weaver synthesizes 9 reports into PA-05 score + top-3 issues
- Convergence-based findings (7/9 agree = real, 2/9 agree = noise)

The shell's job is NARROW: "Does this LOOK designed?" Not "Did the builder follow the recipe?" The fresh-eyes principle is non-negotiable (Report 74, Boundary 8: intentional context stripping).

### 2.6 The GATES: Phase-Locked Inherent Verification

Between the core agent's build phases, the orchestrator runs programmatic gates. This is Report 87's Pattern 2 (phase-locked build) applied to the fat-core architecture:

```
Core agent: "Phases A-B complete. Intermediate HTML saved."
  |
Orchestrator runs Gate 1 (structural: landmarks, zone count, skip link, components)
  |-- PASS -> Orchestrator: "Gate 1 passed. Continue to Phase C (backgrounds, soul)."
  |-- FAIL -> Orchestrator: "Gate 1 failed. Fix: [measured values + CSS recipe]. Re-save."
  |
Core agent: "Phase C through backgrounds complete. Saved."
  |
Orchestrator runs Gate 2 (perceptual: bg deltas, warm palette, container width)
  |-- PASS -> Orchestrator: "Gate 2 passed. Continue."
  |-- FAIL -> Orchestrator: "Gate 2 failed at zones 2-3. Delta = 8. Need >= 15. Darken zone 3."
  |
(... Gate 3 after borders, Gate 4 after typography, Gate 5 comprehensive ...)
```

**3 gates, not 5.** The fat-core architecture needs fewer gates because the agent understands WHY it's building. Reduced from 5 to 3:

| Gate | After | Checks | Rationale |
|------|-------|--------|-----------|
| G1 | Phase B (plan) + Phase C start (skeleton) | Zone count, ARIA, skip link, component classes | Catch structural omissions before CSS work begins |
| G2 | Phase C (backgrounds + soul + typography + borders) | BG delta, warm palette, container width, font-size zones, border presence, soul | Catch perception threshold violations before element richness |
| G3 | Phase D (comprehensive) | ALL checks + stacked gap + multi-coherence + accessibility + cascade table | Final regression before PA audit |

**Why fewer gates:** More gates = more interruptions to the core agent's creative flow. CD-006 had ZERO gates and scored 39/40. The Middle had ZERO intermediate gates and scored 4/4. Gates are a SAFETY NET for the fat core, not a CONTROL MECHANISM over a thin builder. The fat core is trusted to compose; the gates verify it didn't make mechanical errors.

---

## 3. COMPARISON: FAT CORE vs CURRENT PV2

| Dimension | Current PV2 (Linear Pipeline) | Fat Core + Thin Shell |
|-----------|------------------------------|----------------------|
| **Agent count** | 12-14 (TC + validator + builder + gates + 9 PA + weaver) | 12 (core + orchestrator + 9 PA + weaver) |
| **Boundary crossings** | 11 (4 destructive) | 7 (1 destructive: PA->fix cycle) |
| **Intelligence survival** | ~25% (end-to-end, Report 74) | ~60-70% (projected: 3 fewer destructive boundaries) |
| **Build time** | 160-270 min | 120-210 min (no TC-builder handoff latency) |
| **Core agent context** | Builder: 1,150 lines (6 files, mental merge) | Core: content + ~100 line brief + 5 reference files (~1,400 lines, single vision) |
| **Recipe format** | 650-line sequential recipe (HOW) | 100-line conventions brief (WHAT + WHY) |
| **Phase enforcement** | 5 mandatory checkpoints (text instruction) | 3 programmatic gates (inherent, Pattern 2) |
| **Builder understanding** | Follows steps without knowing WHY | Derives plan from content, knows WHY |
| **Metaphor validation** | Separate fresh-eyes agent (Wave 0.5) | Core agent self-validates (RISK: self-assessment bias) |
| **Compositional ceiling** | Recipe ceiling: ~3/4 COMPOSED | Convention ceiling: 4/4 possible (CD-006 model) |
| **Failure mode** | Technically correct, perceptually flat | Potentially creative but structurally incomplete |
| **Failure mitigation** | Recipe prevents omissions | Gates catch omissions; PA catches perception failures |

### The Critical Trade-Off

**Current PV2 trades quality ceiling for reliability floor.** The recipe guarantees structural completeness (nothing is skipped) at the cost of compositional quality (everything is mechanical).

**Fat Core trades reliability floor for quality ceiling.** The conventions brief enables compositional quality (everything is intentional) at the risk of structural omissions (the agent might skip accessibility).

**The gates resolve this trade-off.** Programmatic gates enforce the reliability floor WITHOUT limiting the quality ceiling. The core agent composes freely; the gates catch mechanical errors. This is exactly the "speed bumps + physical barriers" model from Report 87: structure prevents mechanical failures while allowing creative driving.

---

## 4. THE METAPHOR VALIDATION PROBLEM

Current PV2 has Wave 0.5: a fresh-eyes agent validates the metaphor as STRUCTURAL (suggests CSS) vs ANNOUNCED (just a label). This catches the flagship's "geological intentionality" failure where the metaphor was a label, not a structure.

In the fat-core architecture, the same agent plans the metaphor AND builds from it. Self-validation is the known weakness (Report 29: "self-eval bias").

### Three options:

**Option A: Keep Wave 0.5 as separate agent (adds 1 agent, +5-10 min)**

The core agent outputs its metaphor description after Phase A. A fresh-eyes agent evaluates it. If ANNOUNCED, the core agent re-derives or switches to flat mode.

Pro: Eliminates self-assessment bias.
Con: Adds a boundary crossing. But this boundary is LOW-LOSS (only the metaphor description crosses, not the full plan).

**Option B: Gate-based metaphor validation**

After Phase A, the core agent writes the metaphor + 3 "CSS implications" (concrete CSS forms the metaphor suggests). Gate G0 checks: are the CSS implications SPECIFIC (e.g., "layered backgrounds with depth progression") or GENERIC (e.g., "visual variety")?

Pro: No additional agent.
Con: Specificity check is itself a text assessment. An LLM gate checking another LLM's text is theater.

**Option C: Defer to PA**

Don't validate the metaphor pre-build. Let the core agent build from its metaphor. If the metaphor was ANNOUNCED (not structural), the PA will detect it: "Elements have labels but no structural relationship." Fix cycle corrects.

Pro: Simplest architecture. No additional agent, no additional gate.
Con: Wastes 90-150 min of build time if the metaphor is bad. But the flagship's metaphor problem was discovered only after building -- this doesn't change the cost, it just changes WHO discovers it.

**Recommendation: Option A (separate fresh-eyes agent) for first builds. Option C (defer to PA) after validation that the core agent produces structural metaphors consistently.**

The cost of Option A is small (5-10 min, 1 additional agent) and the risk it mitigates is large (90-150 min wasted build). After 3-5 successful builds where the core agent's metaphors are consistently structural, downgrade to Option C.

---

## 5. THE RESPONSIBILITY DISTRIBUTION

### Who Does WHAT

| Responsibility | Current PV2 | Fat Core Architecture |
|---------------|------------|----------------------|
| Content analysis | TC Planner | Core agent (Phase A) |
| Tension derivation | TC Planner | Core agent (Phase A) |
| Metaphor collapse | TC Planner | Core agent (Phase A) |
| Mechanism selection | TC Planner | Core agent (Phase B) |
| Zone architecture | TC Planner | Core agent (Phase B) |
| Transition planning | TC Planner | Core agent (Phase B) |
| **Metaphor validation** | **Fresh-eyes agent (Wave 0.5)** | **Fresh-eyes agent (Option A) OR deferred to PA** |
| **Handoff validation** | **Orchestrator (Wave 0.9)** | **Gate G1 (structural checks)** |
| HTML skeleton | Builder | Core agent (Phase C.1) |
| Soul CSS | Builder | Core agent (Phase C.2) |
| Zone backgrounds | Builder | Core agent (Phase C.3) |
| Borders + transitions | Builder | Core agent (Phase C.4) |
| Typography zones | Builder | Core agent (Phase C.5) |
| Element richness | Builder | Core agent (Phase C.6) |
| Accessibility | Builder | Core agent (Phase C.7) |
| Cascade value table | Builder | Core agent (Phase D) |
| **Programmatic gates** | **Gate runner (JS)** | **Gate runner (JS) -- UNCHANGED** |
| **Screenshot capture** | **Team lead** | **Orchestrator** |
| **Perceptual audit** | **9 PA auditors** | **9 PA auditors -- UNCHANGED** |
| **PA synthesis** | **PA weaver** | **PA weaver -- UNCHANGED** |
| **Fix cycle** | **Fix-cycle builder (may be different agent)** | **SAME core agent (preserves compositional memory)** |

**Key changes:**
1. TC planner + builder MERGE into core agent (eliminates Boundary 3)
2. Fix-cycle builder = SAME core agent (preserves compositional memory, eliminates Boundary 10's "lost context" problem)
3. Handoff gate becomes Gate G1 (structural, programmatic, inherent)
4. Metaphor validation optionally retained as separate agent (Option A)

### What the Core Agent's Context Window Contains

The core agent must hold everything in one context window:

| Input | Lines | Priority |
|-------|-------|----------|
| Content markdown | 500-2000 | PRIMARY (the content IS the compositional intelligence) |
| Conventions brief | ~100 | PRIMARY (WHAT to achieve, perception thresholds) |
| `tokens.css` | 174 | REFERENCE (look up as needed) |
| `prohibitions.md` | 353 | REFERENCE (soul constraints) |
| `mechanism-catalog.md` | ~869 | REFERENCE (lookup per mechanism) |
| `merged-components.css` | ~500 | REFERENCE (component classes) |
| `perception-thresholds.md` | ~80 | INLINE in conventions brief |

**Total input: ~2,500-4,000 lines.** This is within Opus's effective attention range, especially since reference files are consulted per-phase (not held in active attention throughout).

**Compare to current PV2 builder:** ~1,150 lines across 6 files (less input, but no content understanding and no compositional reasoning).

The core agent has MORE input but BETTER input -- it reads the content directly, plans from it, and builds from that plan. The current PV2 builder reads instructions ABOUT the content without reading the content itself.

---

## 6. THE FIX CYCLE: COMPOSITIONAL MEMORY PRESERVATION

In current PV2, the fix-cycle builder may be a DIFFERENT agent from the original builder. This creates Boundary 10 (Report 74): the fix-cycle builder receives perceptual symptoms ("whitespace void") without compositional context ("the stacked gaps at zones 3-4 encode a breathing pause before the conclusion").

In the fat-core architecture, the fix-cycle builder IS the core agent. It has full compositional memory:
- It remembers WHY it chose those zone backgrounds
- It knows WHICH channels shifted at each boundary and WHY
- It understands the metaphor and can evaluate whether the PA's concern is a genuine defect or a misunderstanding

This eliminates the "fix builder breaks intentional design" failure mode. When the PA says "borders feel inconsistent," the core agent knows the alternating presence IS the design (rhythm mechanism) and can explain this to the orchestrator, or adjust the rhythm if the PA's concern reveals a genuine perception failure.

**Implementation:** The orchestrator keeps the core agent alive across fix cycles. After Gate G3 passes, the orchestrator pre-captures screenshots and spawns PA auditors. While PA runs (30-45 min), the core agent is IDLE but ALIVE (context preserved). When PA results arrive, the orchestrator sends them to the SAME core agent.

**Cost:** One Opus agent held alive for ~30-45 min of PA processing. This is the COMPUTE COST of compositional memory preservation.

**Alternative (cheaper):** Kill the core agent after build. If PA fails, re-spawn with the original content + output.html + PA report. The re-spawned agent re-derives compositional intent from the code (Report 84's "telescope from microscope" reconstruction). This is lossy (~80% reconstruction vs 100% memory preservation) but cheaper.

**Recommendation:** Keep core agent alive for first build (prove the architecture). If compute cost is prohibitive, switch to respawn model for subsequent builds.

---

## 7. TIMING AND COST PROJECTION

### Fat Core Architecture Timeline

```
TIME    STAGE                           AGENTS ACTIVE
0:00    Orchestrator reads content       1 (orchestrator)
0:01    Core agent spawned               2 (orchestrator + core)
0:01    Phase A: Content understanding   2
0:20    Phase A complete. Gate G0 (optional metaphor validation)
0:25    Fresh-eyes metaphor agent        3 (+ metaphor validator)
0:30    Metaphor validated. Phase B.     2 (validator done)
0:40    Phase B complete. Phase C starts.
0:50    Gate G1 (structural). PASS.      2
1:00    Phase C continues (CSS work).    2
1:30    Gate G2 (perceptual). PASS.      2
1:30    Phase C continues (richness).    2
2:00    Phase D (verification). Gate G3. 2
2:05    Gate G3 PASS. Screenshots.       2
2:10    PA auditors spawned.             11-12 (core idle, 9 PA + weaver staging)
2:30    PA complete. Weaver synthesizes. 3 (core + weaver + orchestrator)
2:35    PA-05 >= 3/4? SHIP.             1 (orchestrator outputs)
        PA-05 < 3/4? Fix cycle.         2 (orchestrator + core for fixes)

TOTAL: ~150-180 min (vs PV2's ~160-270 min)
TOTAL AGENTS: 12-13 (vs PV2's 12-14)
```

### Cost Comparison

| Resource | Current PV2 | Fat Core |
|----------|------------|----------|
| Opus agent-hours | ~8-12 (TC 1hr + Builder 2hr + PA 0.5hr x9 + weaver 0.5hr) | ~6-8 (Core 2.5hr + PA 0.5hr x9 + weaver 0.5hr) |
| Distinct agent spawns | 12-14 | 12-13 |
| Boundary crossings | 11 | 7 |
| Destructive boundaries | 4 | 1 |
| Expected PA-05 | >= 3/4 (recipe ceiling) | >= 3/4, potential 4/4 |
| Failure detection | After 90-150 min (post-build gates) | After 20-40 min (phase-locked gates) |

The fat-core architecture is **cheaper AND better**: fewer agent-hours (TC planner time folded into core agent), fewer boundaries (3 eliminated), earlier failure detection (phase gates vs post-build gates), higher ceiling (conventions vs recipes).

---

## 8. RISK ANALYSIS

### Risk 1: Core Agent Overwhelm

The core agent holds content + conventions + reference files + its own plan + its CSS output. At 2,500-4,000 lines of input, this approaches the effective attention limit.

**Mitigation:** Reference files are CONSULTED, not held in active attention. The conventions brief is 100 lines (not 650). The content is the PRIMARY input (not a compressed build plan). The core agent's attention budget goes to CONTENT UNDERSTANDING and CSS COMPOSITION, not to tracking recipe phases.

**Evidence:** CD-006's builder held equivalent context (full research + conventions + all prior explorations) and produced 39/40.

### Risk 2: Structural Omissions

Without a 9-phase recipe mandating accessibility, responsive breakpoints, and print styles, the core agent might skip them.

**Mitigation:** Gate G3 (comprehensive) catches all structural omissions programmatically. SC-06 (ARIA landmarks), SC-07 (skip link), focus styles, reduced motion -- all binary, all machine-checkable. The conventions brief lists them as non-negotiable. Gates enforce them.

**Evidence:** Report 87 shows that programmatic gates make these features INHERENT (Pattern 2: phase-locked build). The core agent can't skip accessibility because Gate G3 blocks output.

### Risk 3: Self-Assessment Bias

The core agent plans AND builds. If the metaphor is bad, the core agent won't catch it because it INVENTED the metaphor.

**Mitigation:** Option A (fresh-eyes metaphor validation) addresses this for the first 3-5 builds. After establishing that the core agent produces structural metaphors, downgrade to relying on the PA audit (which catches announced metaphors with 9 independent perspectives).

### Risk 4: N=0 for This Architecture

The fat-core architecture has never been tested. It is DERIVED from evidence (CD-006 pattern + Middle pattern + inherent patterns from Report 87) but never VALIDATED.

**Mitigation:** This is the strongest risk. The first build is an experiment. Design it as one: same content as the flagship (RESEARCH-SYNTHESIS), so PA-05 scores are directly comparable. If the fat core produces >= 2.5/4 (matching remediation), the architecture is viable. If it produces >= 3/4, the architecture is superior.

### Risk 5: Opus Context Degradation Over Time

Opus agents lose coherence over very long sessions. A 2.5-hour core agent session may degrade in the final phases.

**Mitigation:** Phase gates serve as CHECKPOINT markers. If the core agent's output at Gate G3 shows degradation (e.g., Phase C.7 accessibility is sloppy despite earlier phases being strong), the gate catches it. The fix cycle is short (30-60 min) and focused, reducing degradation risk.

---

## 9. THE CONTRARIAN CHALLENGE: "JUST BUILD AND SEE"

Report 29 (First Principles) argues that the only way to resolve the recipe-vs-convention debate is to BUILD TWO PAGES on the SAME content:
- Page 1: Current PV2 (recipe, linear pipeline)
- Page 2: Fat Core (conventions, merged agent)

Same content. Same gates. Same PA. Compare PA-05 scores.

Report 85 (Recipe Ceiling) provides the framework: if the fat core produces >= 3/4, the recipe is unnecessary complexity. If it produces < 3/4, we learn something real about whether conventions need recipe backup.

**This is the right next step.** The architecture in this report is a HYPOTHESIS. The experiment validates it.

**Cheapest experiment:** Build one page with the fat-core architecture on RESEARCH-SYNTHESIS content. Compare to the flagship (1.5/4) and remediation (2.5/4) on the same content. If fat core beats 2.5/4, the architecture is adopted. If not, investigate why and iterate.

---

## 10. THE MAXIMUM EFFICACY ANSWER

**Topology:** Minimal Core + Verification Shell (not linear pipeline, not star).

**Agent count:** 12 (1 orchestrator + 1 core + 1 optional metaphor validator + 9 PA auditors + 1 weaver).

**Core responsibility:** ONE agent plans AND builds. Holds telescope + microscope. Reads content directly. Composes from conventions, not recipes.

**Shell responsibility:** Programmatic gates (3, inherent enforcement) + 9 fresh-eyes PA auditors + 1 weaver. Shell DETECTS failures; it doesn't PREVENT them (that's the core's job, verified by gates).

**Instruction format:** ~100-line conventions brief (WHAT + WHY), not ~650-line recipe (HOW). Core agent has full reference files (tokens, prohibitions, mechanism catalog, components, perception thresholds).

**Fix cycle:** SAME core agent (preserves compositional memory). Orchestrator routes PA findings back to the agent that BUILT the page.

**Expected outcome:** PA-05 >= 3/4 (projected from evidence), potential 4/4 (convention ceiling, not recipe ceiling). Cheaper than current PV2 (fewer boundaries, fewer agent-hours). Earlier failure detection (phase-locked gates, not post-build gates).

**The shape that maximizes efficacy: a single powerful composer surrounded by mechanical verification and perceptual audit.** Not a factory (many specialized workers). Not a bureaucracy (many approval steps). A STUDIO: one artist, many critics.

---

## APPENDIX A: THE 7 BOUNDARY CROSSINGS (Fat Core)

| # | Boundary | From -> To | Loss | Type |
|---|----------|-----------|------|------|
| 1 | Content -> Core agent | content.md -> agent context | LOW | CONSTRUCTIVE |
| 2 | Core internal (plan -> build) | Phase A/B -> Phase C | ZERO | INTERNAL (same agent) |
| 3 | Core output -> Gate runner | output.html -> Playwright | ZERO | MEASUREMENT |
| 4 | Core output -> Screenshots | output.html -> PNG | TOTAL (intentional) | NECESSARY |
| 5 | 9 PA reports -> Weaver | 9 reports -> synthesis | LOW | CONSTRUCTIVE |
| 6 | PA report -> Core agent (fix) | Symptoms -> same builder | LOW | CONSTRUCTIVE |
| 7 | Fix cycle -> Final output | Revised HTML -> done | ZERO | REVISION |

**Eliminated boundaries (from current PV2's 11):**
- B3: TC output -> build plan (ELIMINATED: core agent plans AND builds)
- B4: Handoff gate (ABSORBED into Gate G1)
- B5: Multi-file -> builder (SIMPLIFIED: core agent reads content directly)
- B10: PA -> fix cycle builder (ELIMINATED: same core agent)

**Net: 7 boundaries (0 destructive) vs 11 (4 destructive).**

---

## APPENDIX B: CONVENTIONS BRIEF (DRAFT, ~100 lines)

```markdown
# BUILDING CONVENTIONS

You are creating a designed HTML page from the provided content.
Every visual decision must be INTENTIONAL and COHERENT with every other decision.

## SOUL (ABSOLUTE -- violation = invalid output)
- border-radius: 0 everywhere
- box-shadow: none everywhere
- No gradients, no drop-shadows
- No pure #000 or #FFF
- Container: max-width 960px, margin: 0 auto
- Font trinity: Instrument Serif (display), system serif (body), system sans (detail)

## PERCEPTION THRESHOLDS (ABSOLUTE -- violation = gate failure)
- Background: >= 15 RGB delta between adjacent zones
- Typography: >= 2px font-size delta between typographic zones (display/body/detail)
- Letter-spacing: >= 0.03em between zones (or 0)
- Stacked gap: <= 108px total at any section boundary
- Multi-coherence: >= 3 CSS channels visibly shift at every zone boundary
  Channels: chromatic (background), typographic (font-size/weight), spatial (padding),
  structural (border), behavioral (hover), material (texture)

## STRUCTURAL REQUIREMENTS (ABSOLUTE -- violation = gate failure)
- Zone count: 2-5 zones (data-zone attributes)
- ARIA landmarks: >= 3 (header, main, footer/nav/complementary)
- Skip link: <a href="#main" class="skip-link">Skip to content</a>
- Focus styles: 2px solid outline, 2px offset
- Reduced motion: @media (prefers-reduced-motion: reduce)
- Responsive: 768px and 1024px breakpoints
- Print: @media print
- Component library: >= 10/26 classes from merged-components.css

## MECHANISM CATEGORIES (deploy >= 1 from EACH)
- Spatial: progressive-disclosure, parallax-depth, bento-grid, etc.
- Temporal: scroll-reveal, reading-rhythm, sequential-disclosure, etc.
- Material: paper-texture, ink-weight, warm-cool-arc, etc.
- Behavioral: hover-depth, focus-glow, selection-styling, etc.
- Relational: border-weight-gradient, type-scale-ratio, spacing-rhythm, etc.
See mechanism-catalog.md for full list with CSS examples.

## TRANSITION TYPES (use >= 3 different types across zone boundaries)
- SMOOTH: Gradual CSS property shift (no visual break)
- BRIDGE: Decorative element between zones (hr, decorative border, icon row)
- BREATHING: Intentional whitespace pause (48-72px, not more)

## DELIVERABLES
1. output.html (designed page, HTML + embedded CSS)
2. Cascade value table (HTML comment at bottom): computed CSS at every section boundary
   columns: section, background, font-size, font-weight, letter-spacing, border-left,
   padding, line-height
3. Build plan (HTML comment at top): zone map, semantic direction, mechanism deployment

## THE ONE RULE
Every CSS decision must serve your semantic direction. If you cannot explain
WHY a property has this value in terms of the content's meaning, change it.
```

---

**END OF REPORT**

**Statistics:**
- Topologies evaluated: 3 (linear pipeline, star, minimal core + shell)
- Architecture designed: Fat Core + Thin Shell (12 agents, 7 boundaries, 0 destructive)
- Boundaries eliminated: 4 (from 11 to 7, all 4 destructive boundaries removed)
- Gate count: 3 (reduced from 5, appropriate for trusted core agent)
- Convention brief: ~100 lines (replaces 650-line recipe)
- Expected PA-05: >= 3/4 (projected), potential 4/4 (convention ceiling)
- Build time: ~150-180 min (vs 160-270 min)
- Key innovation: TC planner + builder MERGED into single core agent
- Key risk: N=0 (untested architecture, first build is an experiment)
