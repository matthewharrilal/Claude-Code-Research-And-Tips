# Pipeline v3 Visual Architecture — Execution Manifest

**Date:** 2026-02-23
**Status:** AUTHORITATIVE — This file governs all Pipeline v3 execution.
**Scope:** Maps 885 extracted items across 6 artifact files to 15 agents in a 4-phase pipeline.

---

## Quickstart: Running Your First Build

This is the minimum viable procedure. Each step references the detailed section below.

**Prerequisites:** Verify these files exist before starting:
- `design-system/compositional-core/vocabulary/tokens.css` (183 lines)
- `design-system/compositional-core/components/components.css` (290 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md`
- `council-verdict.md` (575 lines — authoritative override document)
- Raw content markdown (the pipeline input)
- TC Brief Template (73 lines — must be authored before first run; structure defined in artifact-routing.md "Brief Template Structure" section)

**Procedure:**
1. Verify all prerequisite files exist. (Phase 0 preconditions)
2. Spawn **Content Analyst** (Opus) with raw content markdown + content analysis protocol from artifact-routing.md. Receive **Content Map** (~30-50 lines). (Section 4, Phase 0)
3. Determine mode: APPLIED (default) or COMPOSED (requires heterogeneity + metaphor viability).
4. Spawn **Brief Assembler** (Opus) with Content Map + TC Brief Template + soul world-description + perception thresholds + recipe phases + disposition D-01-D-08. Receive **Activation Brief** (~93-113 lines). (Section 4, Phase 1)
5. Spawn **Builder** (Opus, STRONG recommendation) with Activation Brief + tokens.css + components.css + mechanism-catalog.md. Receive single **HTML file**. (Section 4, Phase 2)
6. Serve HTML via HTTP. Capture screenshots at 3 viewports (1440px, 1024px, 768px): cold look + scroll-through. Disable animations first. (Section 4, Phase 3A)
7. Run **Gate Runner** programmatically (Playwright JavaScript, executed by orchestrator — NOT a separate LLM agent) against built HTML. (Section 4, Phase 3B)
8. Spawn 9 **PA Auditors** (A-I, all Opus) in parallel, each with screenshots + assigned questions ONLY. (Section 4, Phase 3B)
9. Spawn **Integrative Auditor** (Opus) with all 9 reports. Receive PA-05 score.
10. Spawn **Weaver** (Opus) with integrative report + gate results. Receive verdict: **SHIP / REFINE / REBUILD**.
11. If REFINE or REBUILD: pipeline terminates with action items for a new manual run. (Single-pass default — no automatic re-execution.)

**Maximum iterations:** 1 REBUILD + 1 REFINE before requiring human review. If a second REBUILD is triggered, the pipeline terminates with diagnostic output.

---

## 1. Pipeline Overview

### What This Pipeline Does

Pipeline v3 takes raw content (markdown, articles, research) and produces a single-page HTML artifact that meets the design system's soul constraints, perception thresholds, and compositional intelligence standards.

> **Note:** The council retired the "Activation Pipeline" name (Contradiction A). Use "Pipeline v3" only. The framing is PURPOSE + VOCABULARY, not "activation."

### Master Equation

```
Quality = Agent Capability × Content Affordance × Spec Fidelity
```

**Zero in ANY factor = zero quality.** This is non-negotiable.

### Architecture

- **Topology:** FLAT. Orchestrator spawns agents sequentially. Direct I/O between orchestrator and each agent. No nested hierarchies.
- **Default mode:** SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it).
- **Total agents:** 15 (1 orchestrator + 14 workers). The Gate Runner is NOT a separate agent — it is Playwright JavaScript code executed by the orchestrator directly.
- **Estimated runtime:** 80–105 minutes.
- **Target tier:** MIDDLE (default) or COMPOSED/FLAGSHIP (mode-dependent).

### Soul Constraints Summary (The 10 Non-Negotiables)

These are the design system's DNA. See artifact-identity-perception.md "1.2 Soul Constraints" for full definitions.

| ID | Constraint | CSS Rule |
|----|-----------|----------|
| SC-01 | Sharp Surfaces | `border-radius: 0` on ALL elements |
| SC-02 | No Shadows | `box-shadow: none` on ALL elements |
| SC-03 | Container Discipline | `max-width: 940-960px` (1100px for data-heavy) |
| SC-04 | Warm Palette | `#E83025` red, `#FEF9F5` cream, `#1A1A1A` text |
| SC-05 | Font Trinity | Instrument Serif / Inter / JetBrains Mono |
| SC-06 | No Gradients | Solid backgrounds only |
| SC-07 | Zero Decorative Elements | Every element earns its place |
| SC-08 | Border-Weight Hierarchy | 4px primary / 3px section / 1px subtle |
| SC-09 | Header DNA | Dark background + 3px red bottom border |
| SC-10 | Typography Foundations | line-height 1.7, max-width 70ch, h3 italic |

### Layer Architecture (9 Layers + META)

Item counts shown are base layer classification counts. Some layers have additional items from council rerouting — see artifact detail sections in Section 3 for post-rerouting totals.

| Layer | Name | Base Count | Primary Artifact |
|-------|------|-----------|------------------|
| L1 | IDENTITY | 33 | artifact-identity-perception.md |
| L2 | PERCEPTION | 52 | artifact-identity-perception.md |
| L3 | SCAFFOLDING | 68 | artifact-builder-recipe.md |
| L4 | DISPOSITION | 62 | artifact-builder-recipe.md |
| L5 | VALUES | 94 | Distributed (council-rerouted) |
| L6 | GATES | 72 | artifact-gate-runner.md |
| L7 | PA | 56 | artifact-pa-protocol.md |
| L8 | ROUTING | 63 | artifact-routing.md |
| L9 | ORCHESTRATION | 188 | artifact-orchestrator.md |
| META | Process/Documentation | 197 | Distributed |

**Total: 885 items (base classification).** Artifact detail sections below show expanded totals including council reclassifications and cross-matches. 716 of 753 non-META items (95.1%) are strictly cited by ITEM ID in artifacts; 37 items (4.9%) are covered semantically (concepts present, specific ITEM IDs not cited).

---

## 2. Agent Roster

### Phase 0 — Content Analysis

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Content Analyst** | Opus (recommended) | Classify content, map structure, assess metaphor viability | Raw content markdown | Content Map (~30–50 lines) |

### Phase 1 — Brief Assembly

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Brief Assembler** | Opus (recommended) | Merge TC brief template + content map into execution brief | Content Map + TC Brief Template (73 lines) | Execution Brief (~93–113 lines) |

### Phase 2 — Building

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Builder** | Opus (STRONG recommendation) | Write the HTML/CSS artifact | Execution Brief + reference files | Single HTML file |

**Why Opus for Builder:** Sonnet complies meticulously but stays within constraints. Opus complies AND creates beyond constraints. This is the single highest-leverage model decision. (Per council: STRONG RECOMMENDATION, not non-negotiable.)

### Phase 3A — Screenshot Pre-Capture

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Orchestrator** (self) | — | Take all screenshots before spawning auditors | Built HTML file | Screenshot set (cold look + scroll-through at 1440px, 1024px, 768px) |

### Phase 3A (parallel) — Gate Runner

The Gate Runner is NOT a separate LLM agent. It is Playwright JavaScript code executed directly by the orchestrator. It runs in parallel with screenshot capture.

| Executor | Model | Role | Receives | Produces |
|----------|-------|------|----------|----------|
| **Orchestrator** (Playwright JS) | N/A | Run 42 programmatic gate checks | Built HTML file + artifact-gate-runner.md | Structured JSON results (42 gates: PASS/FAIL) |

### Phase 3B — Perceptual Audit (Mode 4)

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **PA Auditor A** | Opus | Impression + Emotion | Screenshots + PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67 (7 questions) | Audit findings |
| **PA Auditor B** | Opus | Readability + Typography | Screenshots + PA-02, PA-06, PA-07, PA-08, PA-29, PA-56 (6 questions) | Audit findings |
| **PA Auditor C** | Opus | Spatial + Proportion | Screenshots + PA-09, PA-10, PA-11, PA-30-33, PA-50-53, PA-55, PA-64, PA-66 (14 questions) | Audit findings |
| **PA Auditor D** | Opus | Flow + Pacing | Screenshots + PA-12, PA-13, PA-34-36, PA-69, PA-70, PA-62 (8 questions) | Audit findings |
| **PA Auditor E** | Opus | Grid + Layout | Screenshots + PA-14, PA-15, PA-37-39, PA-63 (6 questions) | Audit findings |
| **PA Auditor F** | Opus | Consistency + Rhythm | Screenshots + PA-16, PA-17, PA-40, PA-41, PA-60, PA-61 (6 questions) | Audit findings |
| **PA Auditor G** | Opus | Metaphor + Ideology | Screenshots + PA-18-20, PA-42-44, PA-68 (7 questions) | Audit findings |
| **PA Auditor H** | Opus | Responsiveness | Screenshots + PA-21-23, PA-46, PA-47 (5 questions) | Audit findings |
| **PA Auditor I** | Opus | Cross-Page + Adversarial | Screenshots + PA-24-28, PA-48 (6 questions) | Audit findings |

**Total: 65 questions across 9 auditors.** These assignments are thematic groupings from artifact-pa-protocol.md Part 4, Section 4.2 — NOT sequential ranges.

### Phase 3B — Integration

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Integrative Auditor** | Opus | Synthesize 9 auditor reports + gestalt impression, score PA-05 | All 9 audit reports + all screenshots | PA-05 score + verdict recommendation |

The Integrative Auditor has NO assigned questions. Their role is a free-form gestalt impression that catches cross-cutting patterns individual auditors miss.

### Phase 3C — Verdict

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Weaver** | Opus | Final verdict: SHIP / REFINE / REBUILD | Integrative report + gate results + individual auditor reports | Verdict + action items (TWO outputs: diagnostic for orchestrator + artistic impression for potential REFINE builder) |

**Total: 15 agents** (Orchestrator + Content Analyst + Brief Assembler + Builder + 9 PA Auditors + Integrative Auditor + Weaver). Gate Runner is NOT counted — it is orchestrator-executed code, not an LLM agent.

---

## 3. Artifact-to-Agent Routing Table

This section maps each artifact file to the specific agents who receive it. Section references use actual artifact headers (not numeric §notation) for precision.

### artifact-identity-perception.md (556 lines)
**Layers covered:** L1 IDENTITY (33 items), L2 PERCEPTION (52 items)
**Total items:** 85

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "1.2 Soul Constraints" (PART 1) | **Brief Assembler** | Embed as Tier 1 IDENTITY in brief (~15 lines, world-description format). Extract ONLY the "World-description" field from each SC table — do NOT include "Gate check" or "CSS rule" fields. |
| "1.2 Soul Constraints" (PART 1) | **Gate Runner** (orchestrator code) | Binary checks: border-radius=0, box-shadow=none, container 940–960px |
| "2.2 Core Thresholds" (PART 2) | **Brief Assembler** | Embed as Tier 2 PERCEPTION in brief (~8 lines, natural-law format) |
| "2.2 Core Thresholds" (PART 2) | **Gate Runner** (orchestrator code) | Binary checks: >=15 RGB, >=0.025em, <=120px stacked, <=96px single |
| "2.3 Perception Calibration Table" (PART 2) | **Builder** (via brief) | Calibration context: "15 RGB = subtle, 50 RGB = dramatic" |
| "PART 3: CROSS-LAYER INTEGRATION" | **Orchestrator** | Understanding of why items appear in two places |

**DUAL-ROUTE PATTERN (Council Mandate):** Identity and perception items go to BOTH the builder (as world-description/calibration in the brief) AND the gate runner (as binary verification checks). The builder sees them as creative context; the gate runner sees them as pass/fail thresholds. These are NOT redundant — they serve different purposes.

**CRITICAL:** The builder must NOT receive the raw prohibition list. Soul constraints are reframed as world-description ("Every surface is sharp. Corners are cut, not curved.") not as prohibitions ("Do NOT use border-radius"). This prevents suppressor S-02 (prohibition-induced rigidity). The Brief Assembler must extract ONLY the "World-description" field from each SC-XX table and EXCLUDE the "Gate check" and "CSS rule" fields from builder-facing content.

### artifact-routing.md (843 lines)
**Layers covered:** L8 ROUTING (125 items: 63 base classified + 62 cross-matched + 3 council-added)
**Total items:** 125

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "Phase 0: Content Analysis Protocol" (TOC #1) | **Content Analyst** | Phase 0 execution: classify content type, map structural heterogeneity, assess metaphor viability |
| "Reader Model — 5-Axis Input Space" (TOC #4) | **Content Analyst** | Reader classification: expertise, patience, goal, context, device |
| "Phase 1: TC Brief Assembly Process" (TOC #9) | **Brief Assembler** | The process for merging template + content map into execution brief |
| "Brief Template Structure" (TOC #10) | **Brief Assembler** | Tier 1 Identity (15 lines) + Tier 2 Perception (8 lines) + Tier 3 Compositional (50 lines) + Tier 4 Disposition (~40 lines) + Content Map (~30–50 lines) |
| "Compression Physics" (TOC #8) | **Orchestrator** | S(x) = 1/(1+C(x)) — governs how much of each input the brief includes |
| "Content-Form Fit Gate" (TOC #12) | **Brief Assembler** | Verify content-form alignment before passing brief to builder |
| "Content-Volume-to-Zone-Count Map" (TOC #11) | **Brief Assembler** | How many zones to allocate based on content volume |
| "Temporal Composition — Scroll Rhythm" (TOC #5) | **Builder** (via brief Tier 3) | Scroll rhythm decisions: OPENING → DEEPENING → RESOLVING |

**PREREQUISITE:** The TC Brief Template (73 lines) must be authored before the first pipeline run. artifact-routing.md "Brief Template Structure" (TOC #10) defines the template's tier structure and line budgets, but the actual template text must be created as a standalone file. The Brief Assembler needs the ACTUAL template, not just the structural description.

**CRITICAL SECTION:** The TC Brief Template is the single most important routing document. It defines the EXACT structure of what the builder receives. Every line has been calibrated against pipeline failure modes. The Brief Assembler must follow it EXACTLY — no additions, no omissions, no reordering.

### artifact-builder-recipe.md (840 lines)
**Layers covered:** L3 SCAFFOLDING (75 items per appendix), L4 DISPOSITION (78 items per appendix)
**Total items:** 146 (per header; appendix lists 75+78=153 — discrepancy is an artifact-internal issue)

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "PHASE 1: READ YOUR VOCABULARY" | **Builder** (via brief Tier 3) | Read tokens.css, components.css, mechanism-catalog.md |
| "PHASE 2: SELECT YOUR PER-PAGE CREATIVE DECISIONS" | **Builder** (via brief Tier 3) | Choose metaphor, density arc, channel shifts |
| "PHASE 3: DEPLOY SCAFFOLDING" (if present) | **Builder** (via brief Tier 3) | HTML structure, grid layouts, component adoption |
| "PHASE 4: DEPLOY DISPOSITION" (D-01–D-08) | **Builder** (via brief Tier 4) | 8 disposition instructions (ALL tagged EXPERIMENTAL per council) |
| "PHASE 5: SELF-EVALUATE" (if present) | **Builder** (inline) | Builder self-checks before handoff |
| "PHASE 6: TEMPORAL COMPOSITION" (if present) | **Builder** (via brief Tier 3) | Scroll rhythm, density arc, pacing decisions |
| Mechanism Minimums (within recipe) | **Brief Assembler** | Per-category minimums: Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+ |
| Quality Floor (within recipe) | **Gate Runner** (orchestrator code) | >=14 mechanisms, >=800 CSS lines, >=3 channel shifts |

**FORMAT IS CRITICAL:** This artifact uses RECIPE format (sequenced steps: "Read → Select → Deploy → Assess") NOT checklist format ("Verify → Fail if → Must be"). Recipe format = DESIGNED output. Checklist format = FLAT output. This distinction is the single most important formatting decision in the pipeline.

**BRIEF ASSEMBLER EXTRACTION GUIDE:** The 840-line recipe cannot fit in the ~90-line compositional + disposition tiers. The Brief Assembler should:
- **INCLUDE VERBATIM:** Phase 1 file-reading instructions (Step 1.1-1.3), mechanism minimums, disposition D-01-D-08 instructions
- **SUMMARIZE:** Phase 2 creative decision framework (key questions, not full detail)
- **REFERENCE (not inline):** Phase 3-6 deploy steps (builder has mechanism-catalog.md as direct file)
- **PRESERVE FORMAT:** The output must read as a recipe (sequenced verbs: Read, Select, Deploy, Assess) not a checklist

**D-01 through D-08 are ALL EXPERIMENTAL** per council verdict CF-02/G. They are included in the brief but tagged with evidence level. The builder should attempt them but they are NOT gate-checked.

### artifact-gate-runner.md (763 lines)
**Layers covered:** L6 GATES (42 gates + 34 VALUES items rerouted per council verdict — see VALUES Rerouting below)
**Total items:** 42 gates (39 binary pass/fail + 3 advisory)

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "SECTION 1: IDENTITY GATES" (GR-01–GR-10) | **Gate Runner** (orchestrator code) | Soul constraint verification: border-radius, box-shadow, container, palette, fonts |
| "SECTION 2: PERCEPTION GATES" (GR-11–GR-16) | **Gate Runner** (orchestrator code) | Threshold verification: RGB delta, letter-spacing, stacked gap, single margin |
| "SECTION 3: ANTI-PATTERN GATES" (GR-17–GR-22) | **Gate Runner** (orchestrator code) | Detect: density stacking, ghost mechanisms, threshold gaming, whitespace voids, uniform typography, CSS budget misallocation |
| "SECTION 4: PRECONDITION GATES" (GR-23–GR-28) | **Gate Runner** (orchestrator code) | Pre-build checks: files exist, content map present, brief assembled |
| "SECTION 5: VERDICT GATES" (GR-29–GR-32) | **Gate Runner** (orchestrator code) | PA-05 score mapping to SHIP/REFINE/REBUILD |
| Mode Advisory Gates (GR-33–GR-35) | **Orchestrator** | Mode selection: APPLIED vs COMPOSED thresholds. NOTE: These 3 gates are ADVISORY (report-only), not binary pass/fail. |
| Experiment Gates (GR-36–GR-39) | **Orchestrator** | Track experiment state: which experiments are active |
| Policy Gates (GR-40–GR-42) | **Orchestrator** | Meta-policy: sunset protocol, evidence requirements |

**GATE RUNNER IS NOT AN AGENT.** The gate runner is Playwright JavaScript code executed directly by the orchestrator (see artifact-gate-runner.md "Gate Runner Execution Protocol"). The orchestrator opens a Playwright session, runs `document.querySelectorAll('*')` and similar DOM queries, and collects results as structured JSON. No LLM is involved.

**EXECUTION TIMING:** Gates run AFTER the builder completes (Phase 3A), in parallel with screenshot capture. The builder NEVER sees gate thresholds. This is by design — exposing thresholds to the builder causes threshold gaming (building to exact minimums rather than building with intent).

**VERDICT LOGIC (Priority Order):**
1. ANY Identity gate FAIL → **REBUILD** (soul violation, cannot be patched) — HIGHEST PRIORITY
2. 3+ Anti-Pattern gates FAIL → **REBUILD** (systemic problem, patch won't fix)
3. ANY Perception gate FAIL → **REFINE** (can be fixed with targeted CSS edits)
4. <3 Anti-Pattern gates FAIL → **REFINE** (isolated issues)
5. PA-05 score determines final verdict for remaining cases (see Phase 3C)

In combinations: Identity failures override all else. Anti-pattern 3+ overrides perception. Perception failures trigger REFINE regardless of PA-05 score.

**VALUES REROUTING (34 items):** Per council verdict Pattern 5, 34 Layer 5 VALUES items originally classified as GATE-RUNNER were rerouted AWAY from the gate runner: 15 to ORCHESTRATOR (planning/calibration), 10 to PA_AUDITOR (quality assessment framework), 9 to DOCUMENTATION (historical data). These are tracked in artifact-gate-runner.md Appendix A.

### artifact-pa-protocol.md (1,004 lines)
**Layers covered:** L7 PA (56 items + rerouted = 88 total tracked)
**Total items:** 88

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "PART 1: PA-05 — THE CORE QUESTION" | **Integrative Auditor** | Primary success metric: 4 sub-criteria (Designed, Coherent, Proportionate, Polished) |
| "4.2 Auditor Assignments" (PART 4) | **All PA Auditors** | Thematic question assignments — see Agent Roster above for exact per-auditor lists |
| "PART 5: SCREENSHOT PRE-CAPTURE PATTERN" | **Orchestrator** | Pre-capture pattern: take ALL screenshots at 3 viewports BEFORE spawning auditors |
| "PART 6: EMOTIONAL ARC ASSESSMENT" | **PA Auditor G** (Metaphor + Ideology) | 4 registers: Surprise, Delight, Authority, Earned Closure |
| Fresh-Eyes Principle (within PART 4) | **All PA Auditors** | Zero-context audit: auditors see ONLY screenshots + questions, never the brief or build intent |
| "4.4 Integrative Auditor" (PART 4) | **Integrative Auditor** | How to produce gestalt impression and synthesize 9 reports into single PA-05 score |
| "4.5 Weaver" (PART 4) | **Weaver** | SHIP/REFINE/REBUILD thresholds + calibration references (multi-coherence scale, severity scale, metaphor expression spectrum) |

**PA-05 IS THE PRIMARY SUCCESS METRIC.** Everything in the pipeline ultimately serves PA-05. Sub-criteria:
1. **Designed** — Does this look intentionally composed, not template-generated?
2. **Coherent** — Do visual decisions reinforce each other across the page?
3. **Proportionate** — Are spatial relationships deliberate and hierarchical?
4. **Polished** — Are details refined (typography, spacing, color transitions)?

**PA-05 SCORING:** PA-05 uses a 1-4 discrete scale (FLAT / ASSEMBLED / COMPOSED / DESIGNED) where each sub-criterion is PASS/FAIL. 4/4 PASS = 4/4 score, 3/4 PASS = 3/4, 2/4 or fewer = below 3. The SHIP threshold (>=3.5) means 4/4 sub-criteria must PASS; 3/4 results in REFINE.

**FRESH-EYES IS NON-NEGOTIABLE.** PA Auditors receive ONLY screenshots and their assigned questions. They do NOT see the brief, build intent, content map, or any pipeline context. This prevents confirmation bias — they judge what IS, not what was INTENDED.

**SCREENSHOT PRE-CAPTURE PATTERN:** The orchestrator takes ALL screenshots (cold look + full scroll at **3 viewports: 1440px, 1024px, and 768px**) BEFORE spawning any PA auditors. Auditors read saved images via Read tool. This eliminates Playwright contention and enables all 9 auditors to run in parallel.

### artifact-orchestrator.md (971 lines)
**Layers covered:** L9 ORCHESTRATION (188 items + 15 council-rerouted + 19 VALUES context = 222 items)
**Total items:** 222

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "SECTION 0: MASTER EQUATION AND PRECONDITIONS" | **Orchestrator** | Verify all input files exist, content is valid, pipeline state is clean |
| "SECTION 1: TOPOLOGY AND ARCHITECTURE" | **Orchestrator** | FLAT topology, sequential spawning, direct I/O |
| "SECTION 2: PHASE 0 — CONTENT ANALYSIS" | **Orchestrator** → **Content Analyst** | Spawn content analyst, pass raw content, receive content map |
| "SECTION 3: PHASE 1 — BRIEF ASSEMBLY" | **Orchestrator** → **Brief Assembler** | Spawn brief assembler, pass content map + TC template, receive brief |
| Mode Selection (within SECTION 3) | **Orchestrator** | Select APPLIED or COMPOSED based on content affordance. Builder receives ONE mode — implicit in recipe format, not as a label. |
| "SECTION 4: PHASE 2 — BUILDING" | **Orchestrator** → **Builder** | Spawn builder, pass execution brief + reference files, receive HTML |
| "SECTION 6: PHASE 3 — PERCEPTUAL AUDIT" | **Orchestrator** | Take screenshots at 3 viewports. Run gate-runner code. Deploy PA auditors. |
| "SECTION 7: VERDICT AND DECISION TREE" | **Orchestrator** | Decision tree: SHIP / REFINE / REBUILD with specific actions for each |
| "SECTION 8: REFINE AND REBUILD PROTOCOLS" (if present) | **Orchestrator** | How to handle REFINE (spawn different Opus builder with artistic impressions) and REBUILD (fresh builder in COMPOSING mode) |
| Experiment Protocol (later sections) | **Orchestrator** | Which experiments are active, how to toggle, evidence requirements |
| Suppressor Management (later sections) | **Orchestrator** | 20 historical suppressors, currently 0 active, phased removal per council |

**MODE SELECTION (APPLIED vs COMPOSED):** The orchestrator selects the mode based on content analysis output. The builder receives ONE mode — implicit in the recipe format and brief structure, not as a "Mode: APPLIED" label. APPLIED = content-first, design serves readability. COMPOSED = design-first, content and form are co-equal. Default is APPLIED; COMPOSED requires content with high structural heterogeneity and metaphor viability.

**HONEST COMPLEXITY ACCOUNTING (CF-01):** Total builder input is ~3,600 lines (not "73 lines"):
- Constraint layer: 73 lines (recipe format)
- Disposition layer: ~40 lines (8 instructions)
- Content map: ~35 lines
- tokens.css: 183 lines (direct file)
- components.css: 290 lines (direct file)
- Value tables: ~550 lines (CSS vocabulary)
- Content source material: varies
- CD-006 reference (optional): ~1,200 lines

The improvement is FORMAT (recipe vs checklist) and STRUCTURE (layered constraint architecture), not volume reduction.

---

## 4. Phase-by-Phase Execution

### Phase 0: Content Analysis (~15 min, 1 agent)

**Trigger:** Raw content markdown is available.

**Steps:**
1. Orchestrator verifies preconditions (all input files exist — see Appendix D for file paths).
2. Orchestrator spawns **Content Analyst** with:
   - Raw content markdown
   - Content analysis protocol from artifact-routing.md "Phase 0: Content Analysis Protocol"
   - 5-axis reader model from artifact-routing.md "Reader Model — 5-Axis Input Space"
3. Content Analyst classifies content type: PROSE / MIXED / VISUAL.
4. Content Analyst maps structural heterogeneity (section-by-section character).
5. Content Analyst assesses metaphor viability (is there a pervading metaphor candidate?).
6. Content Analyst produces per-section classification: NARRATIVE / REFERENCE / CODE.
7. Content Analyst estimates density arc across sections.
8. Content Analyst outputs **Content Map** (~30–50 lines).

**Output:** Content Map describing "what the content IS, not what the design SHOULD BE."

**Decision Gate:** If content is empty or structurally unclassifiable → ABORT pipeline.

### Phase 0.5: Mode Selection (orchestrator decision)

Before spawning the Brief Assembler, the orchestrator determines mode (APPLIED or COMPOSED) based on Phase 0 output, per artifact-orchestrator.md "SECTION 3: PHASE 1 — BRIEF ASSEMBLY."

- **APPLIED** (default): Content-first design. Content has low-medium structural heterogeneity.
- **COMPOSED**: Design-first composition. Requires BOTH high structural heterogeneity AND metaphor viability from the Content Map.

### Phase 1: Brief Assembly (~15 min, 1 agent)

**Trigger:** Content Map is available from Phase 0. Mode determined in Phase 0.5.

**Steps:**
1. Orchestrator spawns **Brief Assembler** with:
   - Content Map (from Phase 0)
   - TC Brief Template (73 lines, from artifact-routing.md "Brief Template Structure")
   - Soul constraints as world-description (from artifact-identity-perception.md "1.2 Soul Constraints" — extract ONLY "World-description" fields)
   - Perception thresholds as natural laws (from artifact-identity-perception.md "2.2 Core Thresholds")
   - Builder recipe phases (from artifact-builder-recipe.md "PHASE 1" through "PHASE 6")
   - Disposition instructions D-01–D-08 (from artifact-builder-recipe.md "PHASE 4")
2. Brief Assembler merges template + content map following the tier structure:
   - Tier 1: IDENTITY (~15 lines) — Soul as world-description
   - Tier 2: PERCEPTION (~8 lines) — Thresholds as natural laws + calibration table
   - Tier 3: COMPOSITIONAL (~50 lines) — Multi-coherence, metaphor, density arc, content-form coupling, creative authority, CSS values
   - Tier 4: DISPOSITION (~40 lines) — D-01 through D-08 in recipe format
   - Content Map (~30–50 lines) — Appended, per-section analysis + metaphor seeds
3. Brief Assembler applies survival function S(x) = 1/(1+C(x)) to manage compression.
4. Brief Assembler verifies content-form fit gate.
5. Brief Assembler outputs **Execution Brief** (~93–113 lines).

**Output:** Execution Brief ready for builder consumption.

**CRITICAL — Builder conviction statement:** The builder must output its conviction statement (a brief articulation of design intent) as a SEPARATE FILE before beginning construction. The orchestrator must capture and preserve this artifact — it is required for the REBUILD path if the build fails.

**Decision Gate:** Brief must pass content-form fit gate. If mismatch detected → return to Phase 0 with feedback.

### Phase 2: Building (~45 min, 1 agent)

**Trigger:** Execution Brief is available from Phase 1.

**Steps:**
1. Orchestrator spawns **Builder** with:
   - Execution Brief (~93–113 lines)
   - Reference files (see Appendix D for paths):
     - `tokens.css` (183 lines)
     - `components.css` (290 lines)
     - `mechanism-catalog.md`
     - Value tables (~550 lines — CSS vocabulary for the 6-channel framework)
     - CD-006 reference HTML (optional — the design system's highest-scoring existing artifact, ~1,200 lines)
   - Mode implicit in brief format (APPLIED or COMPOSED — not as a separate label)
   - NO gate thresholds, NO prohibition lists, NO raw research
2. Builder follows recipe sequence (NOT checklist):
   - **Read Vocabulary:** tokens.css → components.css → mechanism-catalog.md
   - **Select Creative Decisions:** Choose metaphor, density arc, channel shifts
   - **Deploy Scaffolding:** HTML structure, grid layouts, component adoption
   - **Deploy Disposition:** D-01 through D-08 (experimental, attempt all)
   - **Self-Evaluate:** Check own work against brief
   - **Temporal Composition:** Scroll rhythm, pacing, density arc execution
3. Builder outputs conviction statement as a separate file.
4. Builder produces single HTML file with inline CSS.
5. Builder self-evaluates against brief criteria.

**Output:** Single HTML file + conviction statement file.

**Quality Floor (verified by gates, NOT seen by builder):** >=14 mechanisms, >=800 CSS lines, >=3 channel shifts.

### Phase 3A: Screenshot Pre-Capture + Gate Runner (~5 min, orchestrator)

**Trigger:** HTML file is available from Phase 2.

**Steps (screenshots — runs in parallel with gate runner):**
1. Orchestrator serves HTML file via HTTP (Playwright blocks `file://`).
2. Orchestrator disables scroll animations: `animation: none !important; opacity: 1 !important`.
3. Orchestrator waits for fonts: `document.fonts.ready` (CRITICAL before capturing).
4. For each of 3 viewport widths (1440px, 1024px, 768px):
   a. Take cold-look screenshot at viewport top (no scrolling).
   b. Take scroll-through screenshots at 80% viewport-height steps covering entire page.
5. All screenshots saved to local files following naming convention: `screenshots/{width}/cold-look.png`, `screenshots/{width}/scroll-01.png`, etc.

**Steps (gate runner — runs in parallel with screenshots):**
1. Orchestrator opens Playwright session against served HTML.
2. Gate runner executes all 42 gates at 1440px viewport width.
3. Responsive gates re-run at 768px.
4. Results collected as structured JSON.

**Optimization:** If gate runner completes before PA auditors and ANY identity gate (GR-01–GR-10) fails, the orchestrator MAY skip PA deployment and proceed directly to REBUILD verdict. This saves ~11 agent spawns but is optional — running both in parallel is the default.

**Output:** Complete screenshot set at 3 viewports + gate runner JSON results.

### Phase 3B: Perceptual Audit (~15 min, 10 agents parallel + 1 sequential)

**Trigger:** Screenshots are available from Phase 3A.

**Steps:**
1. Orchestrator spawns 9 **PA Auditors** (A through I) IN PARALLEL, each receiving:
   - Screenshot set (read via Read tool) — file paths to saved PNG images
   - Their assigned question subset ONLY (see Agent Roster, Section 2)
   - NO execution brief, NO build intent, NO content map (fresh-eyes principle)
2. Each PA Auditor reads screenshots using Read tool, applies Cold Look Protocol, then answers assigned questions independently.
3. Orchestrator collects all 9 audit reports.
4. Orchestrator spawns **Integrative Auditor** with all 9 reports + all screenshots.
5. Integrative Auditor writes free-form gestalt impression + synthesizes into single PA-05 score with sub-criteria ratings.

**Output:** PA-05 score + 9 individual audit reports + integrative synthesis.

### Phase 3C: Verdict (~5 min, 1 agent)

**Trigger:** Integrative report and gate results are available.

**Steps:**
1. Orchestrator spawns **Weaver** with:
   - Integrative auditor report (PA-05 score + sub-criteria)
   - Gate runner results (42 gates: PASS/FAIL)
   - Individual auditor reports (for evidence)
   - Calibration references from artifact-pa-protocol.md "4.5 Weaver" (multi-coherence scale, severity scale, metaphor expression spectrum)
2. Weaver applies verdict logic (priority order):
   - ANY Identity gate FAIL → **REBUILD** (highest priority)
   - 3+ Anti-Pattern gates FAIL → **REBUILD**
   - ANY Perception gate FAIL → **REFINE**
   - PA-05 >= 3.5 AND all identity/perception gates PASS → **SHIP**
   - PA-05 2.5–3.5 → **REFINE** (with specific action items)
   - PA-05 < 2.5 → **REBUILD** (fundamental rework needed)
3. Weaver produces TWO outputs:
   - **Diagnostic verdict** for the orchestrator: SHIP/REFINE/REBUILD + gate-format action items + fix-type classifications (MECHANICAL / STRUCTURAL / COMPOSITIONAL)
   - **Artistic impression** for a potential REFINE/REBUILD builder: generative language, no threshold numbers, no gate scores

**Output:** SHIP / REFINE / REBUILD verdict + action items + artistic impression.

**For FLAGSHIP detection:** PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations AND metaphor STRUCTURAL.

**Single-pass behavior:** In single-pass mode (the default), REFINE and REBUILD are OUTPUT LABELS. The pipeline terminates with the verdict + action items. A human decides whether to run a new pipeline execution. There is no automatic re-execution. Maximum iterations across multiple runs: 1 REBUILD + 1 REFINE before requiring human intervention.

---

## 5. Dependency Graph

```
Phase 0: Content Analysis
    │
    ▼
Phase 0.5: Mode Selection (orchestrator)
    │
    ▼
Phase 1: Brief Assembly
    │
    ▼
Phase 2: Building
    │
    ├───────────────────────┐
    ▼                       ▼
Phase 3A: Screenshots    Phase 3A: Gate Runner
    (3 viewports)           (orchestrator code)
    │                       │
    ▼                       │
Phase 3B: PA Auditors ×9   │
    (parallel)              │
    │                       │
    ▼                       │
Phase 3B: Integrative  ◄───┘
    Auditor
    │
    ▼
Phase 3C: Weaver
    │
    ▼
VERDICT: SHIP / REFINE / REBUILD
```

### Sequential Dependencies (MUST complete before next starts)

1. Content Map (Phase 0) → Mode Selection (Phase 0.5) → Brief Assembly (Phase 1)
2. Execution Brief (Phase 1) → Building (Phase 2)
3. Built HTML (Phase 2) → Screenshots (Phase 3A) AND Gate Runner (Phase 3A)
4. Screenshots (Phase 3A) → PA Auditors (Phase 3B)
5. All 9 PA reports → Integrative Auditor (Phase 3B)
6. Integrative report + Gate results → Weaver (Phase 3C)

### Parallel Opportunities

- Gate Runner runs in parallel with screenshot capture (both depend on built HTML, neither depends on the other).
- 9 PA Auditors run fully in parallel (each depends only on screenshots + their questions).
- NO other parallelism exists in the default single-pass pipeline.

### Feedback Loops (Single-Pass)

In single-pass mode, there are NO feedback loops. If the verdict is REFINE or REBUILD, the pipeline terminates with action items. A new pipeline run would be needed to act on those items.

In experimental 3-pass mode (not yet validated): REFINE verdict triggers a targeted CSS-only repair pass; REBUILD triggers full re-execution from Phase 1.

---

## 6. Failure and Recovery Paths

### Circuit Breaker

**Maximum iterations: 1 REBUILD + 1 REFINE before human intervention.** If a second REBUILD is triggered, the pipeline terminates with diagnostic output for human review. Budget expectation: 25-40% of builds may fail first pass (per council recommendation REC-07).

### Pre-Pipeline Failures

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Missing input files | Precondition Gates GR-23–GR-28 | ABORT. Locate missing files before re-running. See Appendix D for required file paths. |
| Invalid content (empty/corrupt) | Content Analyst Phase 0 | ABORT. Provide valid content. |
| Missing reference files (tokens.css, etc.) | Precondition Gates | ABORT. Verify design system files exist at paths listed in Appendix D. |
| TC Brief Template not authored | Brief Assembler Phase 1 | ABORT. Author the 73-line template per artifact-routing.md "Brief Template Structure" before running pipeline. |

### Phase 0 Failures

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Content unclassifiable | Content Analyst returns error | ABORT. Content may need restructuring. |
| No metaphor viability | Content Map shows no candidates | PROCEED with APPLIED mode (not COMPOSED). |

### Phase 1 Failures

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Brief exceeds line budget | Brief Assembler word count | Re-run Brief Assembler with stricter compression. |
| Content-form fit mismatch | Content-form fit gate | Return to Phase 0 with feedback for re-analysis. |
| Template structure violated | Brief Assembler self-check | Re-run Brief Assembler. |

### Phase 2 Failures

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Builder produces no output | Orchestrator timeout (recommend 60 min limit) | Re-spawn Builder. If persistent, check brief for confusing instructions. |
| Builder ignores recipe format | Gate Runner anti-pattern checks | Detected in Phase 3. If checklist behavior detected, flag for brief revision. |
| CSS below quality floor | Gate Runner (<800 lines, <14 mechanisms, <3 channel shifts) | REBUILD verdict. Brief may need richer compositional tier. |
| Conviction statement not captured | Orchestrator check | Re-spawn Builder with explicit instruction to output conviction as separate file. |

### Phase 3 Failures

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Screenshot capture fails | Playwright error | Retry. Check HTTP server. Check `file://` not used. |
| PA Auditor produces empty report | Orchestrator check | Re-spawn that auditor with same inputs. |
| Identity gate FAIL | Gate Runner GR-01–GR-10 | **REBUILD.** Soul violations cannot be patched. |
| Perception gate FAIL | Gate Runner GR-11–GR-16 | **REFINE.** Targeted CSS edits to fix threshold violations. |
| 3+ Anti-pattern gates FAIL | Gate Runner GR-17–GR-22 | **REBUILD.** Systemic quality problem. |
| PA-05 < 2.5 | Integrative Auditor | **REBUILD.** Fundamental compositional failure. |
| PA-05 2.5–3.5 | Integrative Auditor | **REFINE.** Specific action items from auditor reports. |

### Known Historical Failure Modes

These failure modes have been observed in prior pipeline executions and are explicitly guarded against:

1. **Threshold Gaming (S-08):** Builder uses exact threshold minimums (16 RGB, 0.026em) everywhere. Anti-pattern gate GR-16 detects this. Fix: builder never sees thresholds.
2. **Prohibition Rigidity (S-02):** Builder receives raw prohibition list, becomes overly cautious. Fix: soul constraints delivered as world-description, not prohibitions.
3. **Checklist Format (S-01):** Builder receives checklist ("Verify X, Fail if Y") instead of recipe ("Read, Select, Deploy, Assess"). Fix: artifact-builder-recipe.md enforces recipe format.
4. **Whitespace Voids:** Stacked gaps exceed 120px. Gate GR-19 measures TOTAL stacked gap, not per-property. S-09 loophole closed.
5. **Ghost Mechanisms:** CSS values below perception thresholds (letter-spacing 0.001em). Gate GR-15 detects sub-perceptual values.
6. **CSS Budget Misallocation:** 22% of CSS spent on imperceptible micro-typography. Gate GR-22 checks budget distribution.
7. **Uniform Typography:** All text same size/weight. Gate GR-21 verifies typographic variation.

---

## 7. Critical Sections Index

These sections are HIGH-PRIORITY reading for the listed agent. Skimming or omitting them causes known failure modes.

### For the Orchestrator

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-orchestrator.md | "SECTION 0: MASTER EQUATION AND PRECONDITIONS" | Missing files = pipeline crash |
| artifact-orchestrator.md | Mode Selection (within SECTION 3) | Wrong mode = wrong tier target |
| artifact-orchestrator.md | "SECTION 7: VERDICT AND DECISION TREE" | Misapplied verdict = wrong recovery |
| artifact-pa-protocol.md | "PART 5: SCREENSHOT PRE-CAPTURE PATTERN" | Contention = PA audit failure |
| council-verdict.md | "PART 3: SPECIFIC CONTRADICTIONS" (Contradictions A–H) | Overrides all other documents |

**NOTE on council-verdict.md:** This file is NOT one of the 6 artifacts but is referenced as an authoritative override. All council rulings are already incorporated into the 6 artifacts; the orchestrator should read council-verdict.md only to resolve ambiguities where artifacts seem to conflict. If council-verdict.md is unavailable, the 6 artifacts are self-sufficient for execution.

### For the Content Analyst

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-routing.md | "Phase 0: Content Analysis Protocol" | Defines entire Phase 0 procedure (6 operations) |
| artifact-routing.md | "Reader Model — 5-Axis Input Space" | Required classification framework (expertise, patience, goal, context, device) |

### For the Brief Assembler

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-routing.md | "Brief Template Structure" (TOC #10) | The master template — follow EXACTLY |
| artifact-routing.md | "Content-Volume-to-Zone-Count Map" (TOC #11) | Zone allocation depends on this |
| artifact-identity-perception.md | "1.2 Soul Constraints" (PART 1) | Tier 1 of brief — extract ONLY "World-description" field |
| artifact-identity-perception.md | "2.3 Perception Calibration Table" | Tier 2 calibration context |
| artifact-builder-recipe.md | D-01–D-08 within "PHASE 4" | Tier 4 content — recipe format required |

### For the Builder

| File | Section | Why Critical |
|------|---------|-------------|
| The Execution Brief (produced by Phase 1) | ALL | Builder's sole execution document |
| tokens.css | ALL | Vocabulary — read FIRST |
| components.css | ALL | Available components |
| mechanism-catalog.md | ALL | Available mechanisms — the recipe's "Step 1.3: Read the 73-line template" section references this implicitly |

**NOTE:** The builder does NOT read any artifact files directly. The builder reads ONLY the Execution Brief + reference files (tokens.css, components.css, mechanism-catalog.md, value tables, optionally CD-006). All pipeline intelligence reaches the builder through the brief.

### For the Gate Runner (Orchestrator Code)

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-gate-runner.md | "SECTION 1: IDENTITY GATES" (GR-01–GR-10) | ANY fail = REBUILD |
| artifact-gate-runner.md | "SECTION 2: PERCEPTION GATES" (GR-11–GR-16) | ANY fail = REFINE |
| artifact-gate-runner.md | "SECTION 3: ANTI-PATTERN GATES" (GR-17–GR-22) | 3+ fail = REBUILD |
| artifact-gate-runner.md | "SECTION 5: VERDICT GATES" (GR-29–GR-32) | Score-to-verdict mapping |

### For PA Auditors

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-pa-protocol.md | "4.2 Auditor Assignments" (PART 4) | Their assigned questions — thematic groupings, not sequential |
| artifact-pa-protocol.md | Fresh-Eyes Principle (within PART 4) | Must NOT receive pipeline context |

### For the Integrative Auditor

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-pa-protocol.md | "PART 1: PA-05 — THE CORE QUESTION" | The 4 sub-criteria definition |
| artifact-pa-protocol.md | "4.4 Integrative Auditor" (PART 4) | How to produce gestalt impression and synthesize 9 reports |

### For the Weaver

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-pa-protocol.md | "4.5 Weaver" (PART 4) | Verdict protocol + calibration references |
| artifact-gate-runner.md | "SECTION 5: VERDICT GATES" | Gate-to-verdict mapping |

---

## 8. Council Mandates Summary

These rulings from `council-verdict.md` are AUTHORITATIVE and override all other documents. All council rulings have been incorporated into the 6 artifacts; this section summarizes them for quick reference.

### Structural Mandates

| ID | Mandate | Impact |
|----|---------|--------|
| CF-01 | 73-line constraint layer within ~3,600 total builder input. FORMAT improvement (recipe vs checklist), not volume reduction. | Every item has a home; honest accounting required |
| CF-02 | Compositional Critic REMOVED from default pipeline | 15 agents, not 16 |
| CF-03 | Phased suppressor removal: 20→0 active suppressors | Zero suppression in current pipeline |
| CF-04 | N=4 evidence taxonomy: FACT/PROVEN/OBSERVED/CONFOUNDED/THEORETICAL/SPECULATIVE | All claims must be tagged |

### Contradiction Resolutions

| ID | Resolution | Effect |
|----|-----------|--------|
| A | "Activation" framing RETIRED → replaced with PURPOSE + VOCABULARY | No more "activation" language in prompts. Note: "Activation Brief" is a legacy name retained for document continuity; the framing philosophy behind it is retired. |
| B | Single-pass = DEFAULT, 3-pass = EXPERIMENTAL | No automatic re-runs |
| C | Emotional arc = EMERGENT, not prescribed | Builder discovers arc, not told it |
| D | Creative authority (80%/20%) = UNTESTED | Included in brief, but evidence is THEORETICAL |
| E | Opus builder = STRONG RECOMMENDATION, not non-negotiable | Sonnet allowed but expect lower quality |
| F | Perception thresholds DUAL-ROUTE | To builder (calibration) AND gate-runner (binary) |
| G | D-01–D-08 = ALL EXPERIMENTAL | Attempt but don't gate-check |
| H | Values (L5) rerouted: 34 items rerouted AWAY from gate-runner (15 to orchestrator, 10 to PA auditor, 9 to documentation); 26 to builder context; 34 remain L5 | Layer 5 is distributed, not standalone |

---

## 9. Coverage Verification

### Layer Coverage by Artifact

Item counts shown as "Base / Artifact-reported" where they differ.

| Layer | Base Count | Artifact-Reported Total | Primary Artifact | Coverage Status |
|-------|-----------|------------------------|------------------|----------------|
| L1 IDENTITY | 33 | 33 | artifact-identity-perception.md | COVERED — 10 soul constraints + derivatives |
| L2 PERCEPTION | 52 | 52 | artifact-identity-perception.md | COVERED — 6 core thresholds + calibration + derivatives |
| L3 SCAFFOLDING | 68 | 75 (appendix) | artifact-builder-recipe.md | COVERED — Recipe phases 1-3, mechanism minimums |
| L4 DISPOSITION | 62 | 78 (appendix) | artifact-builder-recipe.md | COVERED — D-01–D-08 + recipe phases 4-6 |
| L5 VALUES | 94 | Distributed | DISTRIBUTED | COVERED — 34 rerouted from gates (15 orch, 10 PA, 9 doc); 26 to builder context; 34 standalone |
| L6 GATES | 72 | 42 gates + rerouted | artifact-gate-runner.md | COVERED — 42 gates (39 binary + 3 advisory) |
| L7 PA | 56 (+32 rerouted) | 88 total tracked | artifact-pa-protocol.md | COVERED — 65 questions across 9 auditors + integration + verdict |
| L8 ROUTING | 63 (+62 cross-matched) | 125 total | artifact-routing.md | COVERED — Content analysis + TC brief + compression + zones |
| L9 ORCHESTRATION | 188 (+37 rerouted/context) | 222 total | artifact-orchestrator.md | COVERED — Full pipeline sequence + mode + verdict + experiments |
| META | 197 | Distributed | DISTRIBUTED | COVERED — Process documentation, evidence taxonomy, phase history |

**NOTE on count discrepancies:** Base counts are from the original `classify-by-layer.md` classification. Artifact-reported totals are higher because council reclassifications moved items between layers, and appendix item lists include secondary-classified items. The 885 total is the base classification sum. See `unified-registry.md` for the authoritative item-by-item accounting.

### Cross-Artifact Verification Points

Items that appear in MULTIPLE artifacts (by design):

1. **Soul Constraints (L1):** Appear in artifact-identity-perception.md (definition) AND artifact-gate-runner.md (binary checks). DUAL-ROUTE per council mandate.
2. **Perception Thresholds (L2):** Appear in artifact-identity-perception.md (definition + calibration) AND artifact-gate-runner.md (binary checks). DUAL-ROUTE per council mandate.
3. **Quality Floor Metrics:** Appear in artifact-builder-recipe.md (mechanism minimums) AND artifact-gate-runner.md (gate checks). Different framing: recipe uses "aim for" language, gates use "fail if below" language.
4. **PA-05 Criteria:** Appear in artifact-pa-protocol.md (scoring definition) AND artifact-gate-runner.md (verdict gates). Protocol defines HOW to score; gates define WHAT score triggers WHICH verdict.
5. **Mode Selection:** Appears in artifact-orchestrator.md (decision logic) AND artifact-routing.md (content analysis informs the decision). Orchestrator decides; routing provides input.

### Items NOT in Any Artifact (By Design)

Some META items (process documentation, evidence taxonomy definitions, phase history) are NOT explicitly represented in the 6 artifacts because they describe the pipeline itself rather than instructing agents. These items are:
- Pipeline naming and versioning (META)
- Evidence taxonomy definitions (META, referenced but defined in council-verdict.md)
- Historical experiment results (META, archived)
- Suppressor history (META, all 20 inactive)

These items are tracked in `unified-registry.md` with layer=META and agent=DOCUMENTATION.

### Verification Checklist

To verify coverage is complete:

- [ ] Every item in `unified-registry.md` has a layer assignment (from `classify-by-layer.md`)
- [ ] Every item in `unified-registry.md` has an agent assignment
- [ ] Every non-META item appears in at least one artifact file
- [ ] DUAL-ROUTE items appear in exactly two artifacts with different framing
- [ ] No artifact contains items from layers it doesn't own (except by council mandate)
- [ ] All 42 gates in artifact-gate-runner.md have corresponding items in the registry
- [ ] All 65 PA questions in artifact-pa-protocol.md have corresponding items in the registry
- [ ] All 8 disposition instructions (D-01–D-08) in artifact-builder-recipe.md have corresponding items
- [ ] All 10 soul constraints in artifact-identity-perception.md have corresponding items
- [ ] Council rerouting decisions (87 total) are reflected in artifact assignments

---

## Appendix A: Evidence Taxonomy

All claims in this manifest and its artifacts are tagged with evidence levels per council mandate CF-04:

| Level | Meaning | Count in Pipeline |
|-------|---------|-------------------|
| **FACT** | Definitional truth, cannot be wrong | Pipeline structure, file paths |
| **PROVEN** | Validated across >=3 experiments | Perception thresholds, soul constraints, recipe > checklist |
| **OBSERVED** | Seen in >=1 experiment, not yet replicated | Middle tier success (n=1), PA-05 correlation |
| **CONFOUNDED** | Observed but multiple variables changed | Opus vs Sonnet effect, team topology effect |
| **THEORETICAL** | Derived from reasoning, not tested | Creative authority 80/20, disposition D-01–D-08 |
| **SPECULATIVE** | Hypothesized, no evidence | 3-pass pipeline improvement, flagship 4/4 achievability |

**Note:** artifact-identity-perception.md uses a 5-level taxonomy (omitting PROVEN). artifact-gate-runner.md uses the full 6-level taxonomy. The 6-level version from council-verdict.md CF-04 is authoritative.

---

## Appendix B: File Routing Quick Reference

**What each agent receives at spawn time:**

| Agent | Files / Inputs |
|-------|---------------|
| Content Analyst | Raw content markdown + content analysis protocol (full "Phase 0: Content Analysis Protocol" section from artifact-routing.md) + reader model ("Reader Model — 5-Axis Input Space" section) |
| Brief Assembler | Content Map, TC Brief Template (73-line standalone file), soul world-description (from SC tables — World-description field ONLY), perception thresholds, recipe phases, disposition D-01–D-08 |
| Builder | Execution Brief ONLY + tokens.css + components.css + mechanism-catalog.md + value tables (~550 lines) + CD-006 reference (optional) |
| Gate Runner (orchestrator code) | Built HTML file + artifact-gate-runner.md (42 gates, executed as Playwright JavaScript) |
| PA Auditors (×9) | Screenshots ONLY + assigned question subset (thematic groupings per Section 2 roster) |
| Integrative Auditor | 9 PA auditor reports + all screenshots + PA-05 scoring criteria |
| Weaver | Integrative report + gate results + individual auditor reports + calibration references (multi-coherence scale, severity scale, metaphor expression spectrum) |

**What each agent MUST NOT receive:**

| Agent | Excluded Inputs | Why |
|-------|----------------|-----|
| Builder | Gate thresholds | Prevents threshold gaming (S-08) |
| Builder | Raw prohibition list / "Gate check" or "CSS rule" fields from SC tables | Prevents prohibition rigidity (S-02) |
| Builder | Pipeline research / meta-analysis | Prevents information overload |
| PA Auditors | Execution Brief | Fresh-eyes principle: judge what IS, not what was INTENDED |
| PA Auditors | Content Map or build intent | Prevents confirmation bias |
| PA Auditors | Other auditors' reports | Independent assessment |

---

## Appendix C: Glossary

| Term | Definition |
|------|-----------|
| **Execution Brief** | The ~93–113 line document the builder receives. Contains soul (as world-description), perception (as natural laws), composition, disposition, and content map. Sole execution spec for builder. (Previously called "Activation Brief" — name retained in some artifacts as legacy.) |
| **TC Brief Template** | 73-line template defining the structure of the Execution Brief. Described structurally in artifact-routing.md "Brief Template Structure." Must be authored as a standalone file before first pipeline run. Merged with Content Map by Brief Assembler. |
| **Content Map** | ~30–50 line output of Phase 0 describing content structure, type, heterogeneity, and metaphor viability. Describes "what the content IS, not what the design SHOULD BE." |
| **Soul Constraints** | 10 non-negotiable design rules (SC-01–SC-10): sharp surfaces, no shadows, container discipline, warm palette, font trinity, no gradients, zero decorative elements, border-weight hierarchy, header DNA, typography foundations. Delivered as world-description to builder, binary checks to gate runner. |
| **Perception Thresholds** | 6 empirically validated minimums (PT-01–PT-06): >=15 RGB background delta, >=0.025em letter-spacing, <=120px stacked gap, <=96px single margin, etc. Dual-routed to builder (calibration) and gate runner (binary). |
| **Disposition** | 8 creative instructions (D-01–D-08): Content-Register Reading, Room Perception, Signing Frame, Second-Half Moment, Reader's Scroll, Negative Space as Shape, Edge Intentionality, Skeleton Test. Tagged EXPERIMENTAL. Attempt all, gate-check none. |
| **Mechanism** | A CSS technique that creates perceptible visual effect. Categories: Spatial (layout, grid), Temporal (scroll rhythm, density arc), Material (color, texture, border), Behavioral (hover, interaction), Relational (content-form coupling). Quality floor: >=14 mechanisms per page. |
| **Channel** | One of 6 independently variable CSS dimensions: background color, typography, spacing, border weight, opacity/color, layout. "Channel shift" = a perceptible change in one channel at a zone boundary. Quality floor: >=3 channel shifts. |
| **Zone** | A distinct visual section of the page with its own background, density, and character. Zone count determined by content volume (see artifact-routing.md "Content-Volume-to-Zone-Count Map"). |
| **PA-05** | Primary success metric. Scale: 1/4 FLAT, 2/4 ASSEMBLED, 3/4 COMPOSED, 4/4 DESIGNED. Sub-criteria: Designed + Coherent + Proportionate + Polished. Each sub-criterion is PASS/FAIL. |
| **Mode: APPLIED** | Content-first design. Design serves readability. Default mode. CSS custom properties named by POSITION (--bg-z1, --bg-z2). |
| **Mode: COMPOSED** | Design-first composition. Content and form are co-equal. Requires high structural heterogeneity + metaphor viability. CSS custom properties named by CONCEPT (--dispatch-open, --dispatch-tactical). |
| **DUAL-ROUTE** | Pattern where one item goes to two agents with different framing (e.g., soul → builder as world-description, soul → gates as binary check). |
| **Fresh-Eyes** | Principle that PA auditors see ONLY screenshots + questions, zero pipeline context. |
| **Quality Floor** | Minimum thresholds: >=14 mechanisms, >=800 CSS lines, >=3 channel shifts. Builder never sees these — gates check after the fact. |
| **Suppressor** | Historical quality-reducing pattern (S-01 through S-20). Currently 0 active. Key examples: S-01 (checklist format), S-02 (prohibition rigidity), S-08 (threshold gaming), S-09 (stacked gap loophole). |
| **Survival Function** | S(x) = 1/(1+C(x)). Curation function governing compression during brief assembly — how much of each input survives into the brief. |
| **Council** | The council-verdict.md document (575 lines). A neutral judge's resolution of contradictions between 11 extraction reports. All rulings are incorporated into the 6 artifacts. The council document itself is the ultimate authority when artifacts conflict. |
| **CCS (Compositional Coherence Score)** | RESEARCH CONSTRUCT measuring mechanism interdependence. Scale 0.00-1.00. NOT operational — methodology varies by +/-0.15 depending on evaluator. Do not gate-check until methodology is standardized. |
| **Value Tables** | ~550 lines of CSS vocabulary for the 6-channel framework. Provided to the builder as reference material (not constraints). Part of the ~3,600 total builder input. |

---

## Appendix D: File Path Registry

All external files referenced in this manifest, with their repository locations:

### Design System Files (Builder Reference)

| File | Path | Size | Required By |
|------|------|------|-------------|
| tokens.css | `design-system/compositional-core/vocabulary/tokens.css` | 183 lines | Builder (direct file route) |
| components.css | `design-system/compositional-core/components/components.css` | 290 lines | Builder (direct file route) |
| mechanism-catalog.md | `design-system/compositional-core/grammar/mechanism-catalog.md` | varies | Builder (direct file route) |

### Pipeline Artifacts (This VA Extraction)

| File | Path | Size | Required By |
|------|------|------|-------------|
| artifact-orchestrator.md | `ephemeral/va-extraction/artifact-orchestrator.md` | 971 lines | Orchestrator |
| artifact-identity-perception.md | `ephemeral/va-extraction/artifact-identity-perception.md` | 556 lines | Brief Assembler, Gate Runner |
| artifact-builder-recipe.md | `ephemeral/va-extraction/artifact-builder-recipe.md` | 840 lines | Brief Assembler |
| artifact-gate-runner.md | `ephemeral/va-extraction/artifact-gate-runner.md` | 763 lines | Gate Runner (orchestrator code) |
| artifact-pa-protocol.md | `ephemeral/va-extraction/artifact-pa-protocol.md` | 1,004 lines | PA Auditors, Integrative Auditor, Weaver |
| artifact-routing.md | `ephemeral/va-extraction/artifact-routing.md` | 843 lines | Content Analyst, Brief Assembler |
| council-verdict.md | `ephemeral/va-extraction/council-verdict.md` | 575 lines | Orchestrator (override authority) |

### External Dependencies (Must Exist Before Pipeline Runs)

| File | Path | Size | Required By | Status |
|------|------|------|-------------|--------|
| TC Brief Template | TBD — must be authored | 73 lines | Brief Assembler | PREREQUISITE: Must be created before first run |
| Value tables | TBD — must be assembled | ~550 lines | Builder | PREREQUISITE: CSS vocabulary for 6-channel framework |
| CD-006 reference | `design-system/validated-explorations/combination/CD-006-pilot-migration.html` | ~1,200 lines | Builder (optional) | EXISTS |
| Raw content markdown | User-provided | varies | Content Analyst | Pipeline INPUT |

### Tracking Files (Audit/Verification Only — Not Required for Execution)

| File | Path | Purpose |
|------|------|---------|
| unified-registry.md | `ephemeral/va-extraction/unified-registry.md` | Item-by-item tracking of all 885 items |
| classify-by-layer.md | `ephemeral/va-extraction/classify-by-layer.md` | Layer classification source |

---

### Known Limitations

1. **No worked examples.** The manifest does not include example Content Maps, Execution Briefs, PA reports, or Weaver verdicts. See actual pipeline outputs in `ephemeral/pages/` for reference.
2. **Agent prompt templates not included.** The manifest tells agents WHAT files to read but does not provide pre-composed prompts. The orchestrator must compose agent prompts from the artifact content.
3. **Orchestrator artifact is dense.** At 971 lines, artifact-orchestrator.md covers both execution protocol (Sections 0-8, ~500 lines) and historical/theoretical context (Sections 9+, ~470 lines). For execution, focus on Sections 0-8.
