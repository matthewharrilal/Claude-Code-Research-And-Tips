# Pipeline v3 Visual Architecture — Execution Manifest

**Date:** 2026-02-23
**Status:** AUTHORITATIVE — This file is the ROUTING authority (what goes where, who receives what). artifact-orchestrator.md is the EXECUTION authority (step-by-step protocol for running each phase).
**Scope:** Maps 885 extracted items across 9 artifact files to 17 agents in a 4-phase pipeline.
**Immutability:** This file is an ORCHESTRATION SPEC. It is NOT modified during execution. Per-build state goes in EXECUTION-TRACKER-TEMPLATE.md (see Wave 3).

---

## Quickstart: Running Your First Build

This is the minimum viable procedure. Each step references the detailed section below.

**Prerequisites (verified in Step 1):**
- `design-system/compositional-core/vocabulary/tokens.css` (183 lines)
- `design-system/compositional-core/components/components.css`
- `design-system/compositional-core/grammar/mechanism-catalog.md`
- `council-verdict.md` (575 lines) — Optional; the 9 artifacts are self-sufficient for execution. Read only to resolve ambiguities where artifacts conflict.
- Raw content markdown (the pipeline input)
- TC Brief Template (`ephemeral/va-extraction/artifact-tc-brief-template.md`, ~223 lines)

**Procedure:**
0. Create output directory at `ephemeral/builds/{SLUG}-{DATE}/`. Copy `EXECUTION-TRACKER-TEMPLATE.md` to this output directory. Fill in BUILD_DATE, CONTENT_PATH, SLUG. This is your working document for the run.
1. Verify all prerequisite files exist. (Phase 0 preconditions — see Appendix D for file paths and expected line counts.)
2. Spawn **Content Analyst** (Opus) with raw content markdown + content analysis protocol from artifact-routing.md. Receive **Content Map** (~30-50 lines). (Section 4, Phase 0)
3. Determine mode: APPLIED (default) or COMPOSED (requires heterogeneity + metaphor viability).
4. Spawn **Brief Assembler** (Opus) with Content Map + TC Brief Template + soul world-description + perception thresholds + recipe phases + disposition D-01-D-09. Receive **Execution Brief** (~100-165 lines). (Section 4, Phase 1)
4a. **Brief Verification (CRITICAL):** Orchestrator runs BV-01 through BV-05 against the produced brief:
   - BV-01: Tier Line Budget — each tier meets minimum line count (T1>=12, T2>=6, T3>=40, T4>=32, ContentMap>=24 at 80% threshold)
   - BV-02: Background Delta Verification — every adjacent zone background hex pair has >= 15 RGB delta
   - BV-03: Recipe Format Verification — recipe:checklist verb ratio >= 3:1 (Read/Select/Deploy/Assess, NOT Verify/Fail if/Must be)
   - BV-04: Suppressor Scan — zero instances of quality suppressor patterns (S-01, S-02, S-08, S-11)
   - BV-05: Recipe Keyword Scan — verifies recipe-format language in builder-facing sections
   If ANY BV gate FAILS: return brief to Brief Assembler with failure details. Maximum 2 revision cycles. If ALL PASS after revisions or on first attempt: proceed to step 5.
   **Also at pipeline startup:** BV-06 (Anti-Regression Language Scan — scans spec files for regressed language). **Before spawning builder:** BV-07 (Builder Input Volume Ceiling — max 2,500 lines total builder input). (~5 min added)
5a. Spawn **Pass A Builder** (Opus, REQUIRED) with Execution Brief + tokens.css + components.css + mechanism-catalog.md + value tables + Pass A Recipe (D-01–D-06, D-09). Receive **Pass A HTML** (structure + conviction + self-eval). (Section 4, Phase 2A)
5b. Run **Pass A Structural Check** (orchestrator, lightweight gate subset: GR-01–GR-10, GR-51, zone count, CSS floor). IF identity gate FAILS → RETHINK. IF PASSES → proceed. (Section 4, Phase 2A-gate)
5c. Spawn **Pass B Builder** (DIFFERENT Opus agent) with Pass A HTML + Execution Brief + tokens.css + components.css + mechanism-catalog.md + value tables + Pass B Recipe (D-07, D-08). Receive **Pass B HTML** (final artifact). (Section 4, Phase 2B)
6. Serve HTML via HTTP. Capture screenshots at 3 viewports (1440px, 1024px, 768px) using `captureScreenshots(page, htmlUrl, dir)` from gate-runner-core.js Section 8 (creates DPR-1 contexts, handles animation disabling + font loading automatically). Then validate with GR-62. (Section 4, Phase 3A)
7. Run **Gate Runner** programmatically (Playwright JavaScript, executed by orchestrator — NOT a separate LLM agent) against Pass B HTML. (Section 4, Phase 3B)
8. Spawn 9 **PA Auditors** (A-I, all Opus) in parallel, each with screenshots + assigned questions ONLY. (Section 4, Phase 3B)
9. Spawn **Integrative Auditor** (Opus) with all 9 reports. Receive gestalt synthesis report (cross-auditor patterns, convergence, contradictions, blind spots).
10. Spawn **Weaver** (Opus) with integrative report + gate results. Weaver scores PA-05, Tier 5, and issues verdict: **RELEASE / POLISH / IMPROVE / RETHINK**.
11. If POLISH: pipeline completes with mechanical fix list. If IMPROVE (the standard path): execute IMPROVE protocol (artifact-orchestrator.md Section 7) — spawn different Opus builder with Cycle 0 builder's improvement ideas + PA artistic impression, then RETURN TO PHASE 3 FOR FULL RE-AUDIT. If RETHINK: execute RETHINK protocol (artifact-orchestrator.md Section 7) — full Phase 0-3 re-execution. Pipeline is NOT complete until verdict is RELEASE or POLISH.
11a. **Before closing any verdict:** Read the builder's `<!-- IMPROVEMENTS: ... -->` HTML comments. Log in execution tracker under "Builder Ideas." If verdict is POLISH AND builder identified COMPOSITIONAL improvements AND iteration budget allows, the orchestrator MAY elect to IMPROVE instead — treating the builder's ideas as the artistic brief for the IMPROVE builder.

**Convergence budget:** 1 RETHINK + 2 IMPROVE passes maximum (each with full Mode 4 PA). Cycle 1 (first IMPROVE) is the standard path — not an exception. Additionally: up to 3 intermediate gate-only cycles within a single IMPROVE pass (see artifact-orchestrator.md "Low-Friction Iteration Protocol"). Stop when PA-05 delta < 0.3 between PA-verified passes (diminishing returns). Mini-PA (Mode 2.5) available for IMPROVE validation when previous PA-05 >= 3.0 (see pa-deployment.md Section 6). If a second RETHINK is triggered, pipeline halts with diagnostic output for human review.

---

## 1. Pipeline Overview

### What This Pipeline Does

Pipeline v3 takes raw content (markdown, articles, research) and produces a single-page HTML artifact that meets the design system's soul constraints, perception thresholds, and compositional intelligence standards.

> **Note:** The council retired the "Activation Pipeline" name (Contradiction A). Use "Pipeline v3" only. The framing is PURPOSE + VOCABULARY, not "activation."

### Master Equation

```
Quality_0 = Agent Capability × Content Affordance × Spec Fidelity
Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)
```

**Cycle 0 depends on inputs. Every subsequent cycle adds the builder's creative ideas and the PA's perceptual findings.** The pipeline converges toward quality through iteration — it does not produce quality in a single step. Zero in any Cycle 0 factor = zero starting point. The convergence term is where quality grows.

### Architecture

- **Topology:** FLAT. Orchestrator spawns agents sequentially. Direct I/O between orchestrator and each agent. No nested hierarchies.
- **Default mode:** TWO-CYCLE CONVERGENCE. Initial build (Cycle 0) + PA audit + IMPROVE cycle (Cycle 1) + PA re-audit. Single-cycle RELEASE is the welcome exception, not the expected outcome. Standard path: 60-80% of builds converge to RELEASE in two cycles. Third cycle available when improvement trajectory is strong (delta >= 0.3). The 3-pass Compositional Critic architecture remains EXPERIMENTAL (blocked until Experiment #21).
- **Total agents:** 17 (1 orchestrator + 16 workers: Observer + Content Analyst + Brief Assembler + Pass A Builder + Pass B Builder + 9 PA Auditors + Integrative Auditor + Weaver). The Gate Runner is NOT a separate agent — it is Playwright JavaScript code executed by the orchestrator directly.
- **Estimated runtime:** 90–120 minutes.
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
| L7 | PA | 56 | pa-questions.md + pa-deployment.md + pa-weaver.md + pa-guardrails.md |
| L8 | ROUTING | 63 | artifact-routing.md |
| L9 | ORCHESTRATION | 188 | artifact-orchestrator.md |
| META | Process/Documentation | 197 | Distributed |

**Total: 885 items (base classification).** Artifact detail sections below show expanded totals including council reclassifications and cross-matches. 716 of 753 non-META items (95.1%) are strictly cited by ITEM ID in artifacts; 37 items (4.9%) are covered semantically (concepts present, specific ITEM IDs not cited).

---

## 2. Agent Roster

### Phase 0 — Content Analysis

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Content Analyst** | Opus (REQUIRED) | Classify content, map structure, assess metaphor viability | Raw content markdown | Content Map (~30–50 lines) |

### Phase 1 — Brief Assembly

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Brief Assembler** | Opus (REQUIRED) | Merge TC brief template + content map into execution brief | Content Map + TC Brief Template (~235 lines) | Execution Brief (~100–165 lines) |

### Phase 2A — Pass A Build (Structure)

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Pass A Builder** | Opus (REQUIRED) | Write structural HTML/CSS (D-01–D-06, D-09: 7 dispositions) | Execution Brief + reference files + Pass A Recipe | Pass A HTML (structure + conviction + self-eval) |

### Phase 2A-gate — Structural Check

No separate agent. Orchestrator runs lightweight gate subset (GR-01–GR-10, GR-51, zone count, CSS floor >=400) against Pass A HTML.

### Phase 2B — Pass B Build (Enrichment)

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Pass B Builder** | Opus (REQUIRED, DIFFERENT agent) | Enrich CSS (D-07, D-08: 2 dispositions) | Pass A HTML + Execution Brief + reference files + Pass B Recipe + structural check results | Pass B HTML (final artifact) |

**Why Opus for Builders:** Sonnet complies meticulously but stays within constraints. Opus complies AND creates beyond constraints. This is the single highest-leverage model decision. Builder model = Opus is a non-negotiable pipeline requirement, enforced as strictly as container width 940-960px. Pass A and Pass B MUST be DIFFERENT Opus agents (defeats continuation bias).

### Observer — Independent Compliance Verifier

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Observer** | Opus | Monitor pipeline compliance across ALL phases | Execution tracker + all phase outputs (read-only) | OBSERVER-REPORT.md (30 binary checks) |

The Observer is the FIRST agent spawned (before Content Analyst). It runs for the full pipeline lifecycle, performing 30 binary compliance checks across 7 categories. It has STOP authority via `OBSERVER-STOP.md`. See artifact-orchestrator.md Section 1 for full protocol.

### Phase 3A — Screenshot Pre-Capture

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Orchestrator** (self) | — | Take all screenshots before spawning auditors | Pass B HTML file | Screenshot set (cold look + scroll-through at 1440px, 1024px, 768px) |

### Phase 3A (parallel) — Gate Runner

The Gate Runner is NOT a separate LLM agent. It is Playwright JavaScript code executed directly by the orchestrator. It runs in parallel with screenshot capture.

| Executor | Model | Role | Receives | Produces |
|----------|-------|------|----------|----------|
| **Orchestrator** (Playwright JS) | N/A | Run 57 programmatic gate checks (see gate-manifest.json for canonical breakdown) | Pass B HTML file + gate-runner-core.js | Structured JSON results (57 gates: PASS/FAIL) + 6 orchestrator decision rules |


### Phase 3B — Perceptual Audit (Mode 4)

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **PA Auditor A** | Opus | Impression + Emotion | Screenshots + PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 (9 questions) | Audit findings |
| **PA Auditor B** | Opus | Readability + Typography | Screenshots + PA-02, PA-08, PA-29, PA-55, PA-56, PA-70, PA-77, PA-81 (8 questions) | Audit findings |
| **PA Auditor C** | Opus | Spatial + Proportion | Screenshots + PA-11, PA-30-33, PA-50, PA-51, PA-53, PA-64, PA-66 (10 questions) | Audit findings |
| **PA Auditor D** | Opus | Flow + Pacing | Screenshots + PA-12, PA-13, PA-34-36, PA-52, PA-62, PA-69, PA-71, PA-74, PA-75 (11 questions) | Audit findings |
| **PA Auditor E** | Opus | Grid + Layout | Screenshots + PA-14, PA-15, PA-37-39, PA-63, PA-80 (7 questions) | Audit findings |
| **PA Auditor F** | Opus | Consistency + Rhythm | Screenshots + PA-16, PA-17, PA-41, PA-60, PA-61 (5 questions) | Audit findings |
| **PA Auditor G** | Opus | Metaphor + Ideology | Screenshots + PA-18-20, PA-42-44, PA-54, PA-68 (8 questions) | Audit findings |
| **PA Auditor H** | Opus | Responsiveness | Screenshots + PA-22, PA-23, PA-46, PA-47, PA-73 (5 questions) | Audit findings |
| **PA Auditor I** | Opus | Cross-Page + Adversarial | Screenshots + PA-24-28, PA-48 (6 questions) | Audit findings |

**Total: 69 questions across 9 auditors.** These assignments are thematic groupings from pa-deployment.md Section 1.2 — NOT sequential ranges. Questions defined in pa-questions.md.

### Phase 3B — Integration

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Integrative Auditor** | Opus | Synthesize 9 auditor reports + gestalt impression | All 9 audit reports + all screenshots | Gestalt synthesis report + verdict recommendation (PA-05 scoring is the WEAVER's responsibility per FIX-083) |

The Integrative Auditor has NO assigned questions. Their role is a free-form gestalt impression that catches cross-cutting patterns individual auditors miss.

**GATEWAY:** Integrative Auditor MUST spawn AFTER all 9 PA report files exist on disk. Verify: `ls p3b-pa-auditor-*.md | wc -l` returns 9 before spawning Integrative. If count < 9, wait. This is a STRUCTURAL dependency — the Integrative Auditor's cross-auditor synthesis role is unfulfilled if any reports are missing.

### Phase 3C — Verdict

| Agent | Model | Role | Receives | Produces |
|-------|-------|------|----------|----------|
| **Weaver** | Opus | Final verdict: RELEASE / POLISH / IMPROVE / RETHINK | Integrative report + gate results + all 9 individual auditor reports + calibration from pa-weaver.md | Verdict + PA-05 score (with sub-criteria) + fix-type classification + emotional arc synthesis (TWO outputs: diagnostic for orchestrator + artistic impression for potential IMPROVE builder) |

**Total: 17 agents** (Orchestrator + Observer + Content Analyst + Brief Assembler + Pass A Builder + Pass B Builder + 9 PA Auditors + Integrative Auditor + Weaver). Gate Runner is NOT counted — it is orchestrator-executed code, not an LLM agent.

**Mini-PA (Mode 2.5) Alternative:** For IMPROVE validation, a reduced PA deployment is available: 3 auditors (A, C, G) + 1 weaver = 4 agents, 15 questions, 1 viewport. See pa-deployment.md Section 6 for deployment protocol and escalation triggers.

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
| "2.3 Perception Calibration Table" (PART 2) | **Pass A Builder** (via brief) | Calibration context: "15 RGB = subtle, 50 RGB = dramatic" |
| "PART 3: CROSS-LAYER INTEGRATION" | **Orchestrator** | Understanding of why items appear in two places |

**DUAL-ROUTE PATTERN (Council Mandate):** Identity and perception items go to BOTH the builder (as world-description/calibration in the brief) AND the gate runner (as binary verification checks). The builder sees them as creative context; the gate runner sees them as pass/fail thresholds. These are NOT redundant — they serve different purposes.

**CRITICAL:** The builder must NOT receive the raw prohibition list. Soul constraints are reframed as world-description ("Every surface is sharp. Corners are cut, not curved.") not as prohibitions ("Do NOT use border-radius"). This prevents suppressor S-02 (prohibition-induced rigidity). The Brief Assembler must extract ONLY the "World-description" field from each SC-XX table and EXCLUDE the "Gate check" and "CSS rule" fields from builder-facing content.

### artifact-routing.md (~1,056 lines)
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
| "Temporal Composition — Scroll Rhythm" (TOC #5) | **Pass A Builder** (via brief Tier 3) | Scroll rhythm decisions: OPENING → DEEPENING → RESOLVING |

**PREREQUISITE:** The TC Brief Template (~235 lines) must be authored before the first pipeline run. artifact-routing.md "Brief Template Structure" (TOC #10) defines the template's tier structure and line budgets, but the actual template text must be created as a standalone file. The Brief Assembler needs the ACTUAL template, not just the structural description.

**CRITICAL SECTION:** The TC Brief Template is the single most important routing document. It defines the EXACT structure of what the builder receives. Every line has been calibrated against pipeline failure modes. The Brief Assembler must follow it EXACTLY — no additions, no omissions, no reordering.

### artifact-builder-recipe.md (~828 lines)
**Layers covered:** L3 SCAFFOLDING (75 items per appendix), L4 DISPOSITION (78 items per appendix)
**Total items:** 146 per section headers; 153 per appendix (75 L3 + 78 L4). The 7-item discrepancy is because the appendix counts include secondary-classified items that are cross-matched from other layers. Both numbers are correct for their scope.

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "PHASE 1: READ YOUR VOCABULARY" | **Pass A Builder** (via brief Tier 3) | Read tokens.css, components.css, mechanism-catalog.md |
| "PHASE 2: SELECT YOUR PER-PAGE CREATIVE DECISIONS" | **Pass A Builder** (via brief Tier 3) | Choose metaphor, density arc, channel shifts |
| "PHASE 3: DEPLOY SCAFFOLDING" (if present) | **Pass A Builder** (via brief Tier 3) | HTML structure, grid layouts, component adoption |
| "PHASE 4: DEPLOY DISPOSITION" (D-01–D-06, D-09) | **Pass A Builder** (via brief Tier 4) | Pass A Recipe: Content-Register Reading, Room Perception, Signing Frame, Second-Half Moment, Reader's Scroll, Negative Space as Shape, The Quiet Zone |
| "PHASE 4: DEPLOY DISPOSITION" (D-07, D-08) | **Pass B Builder** (via brief Tier 4) | Pass B Recipe: Edge Intentionality, Skeleton Test |
| "PHASE 5: SELF-EVALUATE" (if present) | **Both Builders** (inline) | Builder self-checks before handoff |
| "PHASE 6: TEMPORAL COMPOSITION" (if present) | **Pass A Builder** (via brief Tier 3) | Scroll rhythm, density arc, pacing decisions |
| Mechanism Minimums (within recipe) | **Brief Assembler** | Per-category minimums: Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+ |
| Quality Floor (within recipe) | **Gate Runner** (orchestrator code) | >=14 mechanisms, >=800 CSS lines, >=3 channel shifts |

**FORMAT IS CRITICAL:** This artifact uses RECIPE format (sequenced steps: "Read → Select → Deploy → Assess") NOT checklist format ("Verify → Fail if → Must be"). Recipe format = DESIGNED output. Checklist format = FLAT output. This distinction is the single most important formatting decision in the pipeline.

**BRIEF ASSEMBLER EXTRACTION GUIDE:** The ~828-line recipe cannot fit in the ~90-line compositional + disposition tiers. The Brief Assembler should:
- **INCLUDE VERBATIM:** Phase 1 file-reading instructions (Step 1.1-1.3), mechanism minimums, disposition D-01-D-09 instructions
- **SUMMARIZE:** Phase 2 creative decision framework (key questions, not full detail)
- **REFERENCE (not inline):** Phase 3-6 deploy steps (builder has mechanism-catalog.md as direct file)
- **PRESERVE FORMAT:** The output must read as a recipe (sequenced verbs: Read, Select, Deploy, Assess) not a checklist

**D-01 through D-09 are ALL EXPERIMENTAL** per council verdict CF-02/G. D-09 (The Quiet Zone) was added in Wave 3 — designate at least one zone in the middle third as deliberately plainer (2-3 mechanisms vs 4-5, no bento grid, single-column prose). All dispositions are included in the brief and tagged with evidence level. None are gate-checked. **BACKGROUND HEX LOCK** (zone backgrounds from the brief are LOCKED) is a separate constraint enforced by BV-02, not a disposition.

### artifact-gate-runner.md (split into 5 files — see gate-manifest.json)
**Layers covered:** L6 GATES (57 gate-runner gates + 6 orchestrator decision rules + 34 VALUES items rerouted per council verdict — see VALUES Rerouting below)
**Total items:** 57 gate-runner gates (22 REQUIRED + 15 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 8 BV + 1 UTILITY — see gate-manifest.json) + 6 orchestrator decision rules (GR-23–GR-28)

**Wave 3 split files:** The monolithic gate runner (2,410 lines) was split into 5 operational files:
- `gate-runner-core.js` (~3,185 lines) — All executable Playwright JavaScript (29 functions)
- `gate-runner-spec.md` (~300 lines) — Human-readable gate specifications (Waves 1-4)
- `gate-runner-preconditions.md` (83 lines) — Text-based pre-build checks
- `gate-runner-provenance.md` (151 lines) — History, traceability, wave change logs
- `gate-manifest.json` (~362 lines) — JSON TOC, tiers, execution order
The original `artifact-gate-runner.md` is now a redirect pointer. `artifact-gate-runner-MONOLITHIC.md` preserves the original.

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "SECTION 0: BRIEF VERIFICATION GATES" (BV-01–BV-08) | **Orchestrator** (text parsing) | Pre-build brief verification: tier line budget, background delta, recipe format, suppressor scan, recipe keywords, anti-regression language, builder input volume, brief-output diff |
| "SECTION 1: IDENTITY GATES" (GR-01–GR-10) | **Gate Runner** (orchestrator code) | Soul constraint verification: border-radius, box-shadow, container, palette, fonts |
| "SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44, GR-60) | **Gate Runner** (orchestrator code) | Threshold verification: RGB delta, letter-spacing, stacked gap, single margin, trailing void, WCAG contrast |
| "SECTION 3: ANTI-PATTERN GATES" (GR-17–GR-22, GR-45, GR-51) | **Gate Runner** (orchestrator code) | Detect: density stacking, ghost mechanisms, threshold gaming, whitespace voids, uniform typography, CSS budget misallocation |
| "SECTION 3B: OUTPUT VERIFICATION" (GR-43) | **Gate Runner** (orchestrator code) | Self-evaluation comment existence |
| "SECTION 4: PRECONDITION GATES" (GR-23–GR-28) | **Orchestrator** (decision rules) | Pre-build checks: builder model, content heterogeneity, suppressor count, brief size, builder gate-free, recipe format. Reclassified from gate-runner to orchestrator in Wave 3 — these are text/config checks, not DOM inspection. |
| "SECTION 5: MODE DETECTION" (GR-33–GR-34) | **Gate Runner** (orchestrator code) | Mode selection: APPLIED vs COMPOSED indicators. ADVISORY (report-only). |
| Wave 2 gates (GR-45, GR-46, GR-50–GR-53) | **Gate Runner** (orchestrator code) | Accessibility, output validation, measurement gates |
| Meta gates (GR-48, GR-49) | **Gate Runner** (orchestrator code) | Gate coverage verification, result integrity |
| *Experiment gates (GR-36–GR-39)* | **experiment-protocol.md** | Moved to experiment protocol (separate file). |
| *Policy gates (GR-40–GR-42)* | **Orchestrator** | Moved to orchestrator verdict logic. |
| *Verdict gates (GR-29–GR-32)* | **Orchestrator** | Moved to orchestrator verdict logic. |

**GATE RUNNER IS NOT AN AGENT.** The gate runner is Playwright JavaScript code executed directly by the orchestrator (see artifact-gate-runner.md "Gate Runner Execution Protocol"). The orchestrator opens a Playwright session, runs `document.querySelectorAll('*')` and similar DOM queries, and collects results as structured JSON. No LLM is involved.

**EXECUTION TIMING:** Gates run AFTER the builder completes (Phase 3A), in parallel with screenshot capture. The builder NEVER sees gate thresholds. This is by design — exposing thresholds to the builder causes threshold gaming (building to exact minimums rather than building with intent).

**VERDICT LOGIC:** See Phase 3C (Section 4) for the authoritative 8-rule priority list. Summary: Identity FAIL = RETHINK. Perception FAIL = IMPROVE. PA-05 drives RELEASE/IMPROVE/RETHINK. POLISH requires ALL fixes MECHANICAL.

**MECHANICAL EXCEPTION:** If ALL identity gate failures are auto-classified MECHANICAL by the gate runner (criteria: fix requires <=5 CSS lines, no HTML structural change, no design decision), verdict is IMPROVE, not RETHINK. Gate runner auto-classifies; orchestrator does NOT override classification.

**VALUES REROUTING (34 items):** Per council verdict Pattern 5, 34 Layer 5 VALUES items originally classified as GATE-RUNNER were rerouted AWAY from the gate runner: 15 to ORCHESTRATOR (planning/calibration), 10 to PA_AUDITOR (quality assessment framework), 9 to DOCUMENTATION (historical data). These are tracked in gate-runner-provenance.md.

### artifact-pa-protocol.md (split into 5 files — see pa-manifest.md)
**Layers covered:** L7 PA (56 items + rerouted = 88 total tracked)
**Total items:** 88

**Wave 3 split files:** The monolithic PA protocol (1,141 lines) was split into 6 operational files:
- `pa-questions.md` (~431 lines) — All 69 PA question definitions with scoring guidance
- `pa-deployment.md` (~442 lines) — 9-auditor assignments, Section 0 experiential pass protocol, screenshot protocol, visual verification
- `pa-weaver.md` (~466 lines) — Section 0 experiential anchor, Weaver protocol, verdicts, calibration (INFORMATION ISOLATION)
- `pa-guardrails.md` (~113 lines) — Auditor constraints, Section 3.1 visual verification, scoring anchors
- `pa-guardrails-weaver.md` (~59 lines) — Weaver/Orchestrator-only guardrails: anti-patterns, revision degradation, S-09 stacking, Tier 1 equivalents, Tier 5 provisional scoring. PA Auditors must NOT receive this file.
- `pa-manifest.md` (89 lines) — Per-run tracking template, completeness verification
The original `artifact-pa-protocol-MONOLITHIC.md` preserves the pre-split version.

**INFORMATION ISOLATION:** The split enforces role-based access:
- **PA Auditors** receive: pa-questions.md (their subset) + pa-guardrails.md (includes visual verification principle + experiential pass requirement). PA Auditors must NOT receive pa-guardrails-weaver.md.
- **Weaver** receives: pa-weaver.md (includes experiential anchor protocol) + pa-guardrails-weaver.md (anti-patterns, revision degradation, S-09 stacking) + all auditor reports
- **Orchestrator** receives: pa-deployment.md (includes experiential pass deployment protocol) + pa-guardrails-weaver.md (anti-patterns context for verdict) + pa-manifest.md

| Split File | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| `pa-questions.md` — PA-05 core + all 69 questions | **PA Auditors** (subset per assignment) | Question definitions, scoring guidance, perception thresholds |
| `pa-deployment.md` — Auditor assignments, screenshot protocol | **Orchestrator** | Deploy PA: assignments, model recs, cross-validation, screenshot capture |
| `pa-weaver.md` — Weaver protocol, verdicts | **Weaver** | RELEASE/POLISH/IMPROVE/RETHINK thresholds, diagnostic vocabulary, emotional arc |
| `pa-guardrails.md` — Auditor constraints | **PA Auditors** | Evidence format, fresh-eyes principle, language constraints, completion manifest |
| `pa-guardrails-weaver.md` — Weaver/Orchestrator guardrails | **Weaver**, **Orchestrator** | Anti-patterns, revision degradation, S-09 stacking, Tier 1 equivalents, Tier 5 provisional. NOT for PA Auditors. |
| `pa-manifest.md` — Run tracking | **Orchestrator** | Per-run auditor report checklist, PA-05 cross-validation status |

**PA-05 IS THE PRIMARY SUCCESS METRIC.** Everything in the pipeline ultimately serves PA-05. Sub-criteria:
1. **Designed** — Does this look intentionally composed, not template-generated?
2. **Coherent** — Do visual decisions reinforce each other across the page?
3. **Proportionate** — Are spatial relationships deliberate and hierarchical?
4. **Polished** — Are details refined (typography, spacing, color transitions)?

**PA-05 SCORING:** PA-05 uses a 1-4 discrete scale (FLAT / ASSEMBLED / COMPOSED / DESIGNED) where each sub-criterion is PASS/FAIL. 4/4 PASS = 4/4 score, 3/4 PASS = 3/4, 2/4 or fewer = below 3. The RELEASE threshold (>=3.5) means 4/4 sub-criteria must PASS; 3/4 results in IMPROVE.

**FRESH-EYES IS NON-NEGOTIABLE.** PA Auditors receive ONLY screenshots and their assigned questions. They do NOT see the brief, build intent, content map, or any pipeline context. This prevents confirmation bias — they judge what IS, not what was INTENDED.

**SCREENSHOT PRE-CAPTURE PATTERN:** The orchestrator takes ALL screenshots (cold look + full scroll at **3 viewports: 1440px, 1024px, and 768px**) BEFORE spawning any PA auditors. Auditors read saved images via Read tool. This eliminates Playwright contention and enables all 9 auditors to run in parallel.

### artifact-orchestrator.md (~744 lines)
**Layers covered:** L9 ORCHESTRATION (188 items + 15 council-rerouted + 19 VALUES context + 6 reclassified decision rules = 228 items)
**Total items:** 228

| Section (Actual Header) | Receiving Agent | Purpose |
|------------------------|-----------------|---------|
| "SECTION 0: MASTER EQUATION AND PRECONDITIONS" | **Orchestrator** | Verify all input files exist, content is valid, pipeline state is clean |
| "SECTION 1: TOPOLOGY AND ARCHITECTURE" | **Orchestrator** | FLAT topology, sequential spawning, direct I/O |
| "SECTION 2: PHASE 0 — CONTENT ANALYSIS" | **Orchestrator** → **Content Analyst** | Spawn content analyst, pass raw content, receive content map |
| "SECTION 3: PHASE 1 — BRIEF ASSEMBLY" | **Orchestrator** → **Brief Assembler** | Spawn brief assembler, pass content map + TC template, receive brief |
| "SECTION 4 (Phase 1.5): MODE SELECTION" | **Orchestrator** | Select APPLIED or COMPOSED based on content affordance. Builder receives ONE mode — implicit in recipe format, not as a label. |
| "SECTION 5 (Phase 2): TWO-PASS BUILDING" | **Orchestrator** → **Builder** | Spawn builder, pass execution brief + reference files, receive HTML |
| "SECTION 6: PHASE 3 — PERCEPTUAL AUDIT" | **Orchestrator** | Take screenshots at 3 viewports. Run gate-runner code. Deploy PA auditors. |
| "SECTION 7: VERDICT AND DECISION TREE" | **Orchestrator** | Decision tree: RELEASE / IMPROVE / RETHINK with specific actions for each. Includes Orchestrator Decision Rules (GR-23–GR-28, 6 gates reclassified from gate-runner in Wave 3). |
| "SECTION 7 (Phase 4): VERDICT AND DECISION TREE" (iteration subsections) | **Orchestrator** | IMPROVE targeting (R-A/R-B/R-C), RETHINK protocol, low-friction iteration, IMPROVE builder inputs |
| Experiment Protocol (later sections) | **Orchestrator** | Which experiments are active, how to toggle, evidence requirements |
| Suppressor Management (later sections) | **Orchestrator** | 20 historical suppressors, currently 0 active, phased removal per council |

**MODE SELECTION (APPLIED vs COMPOSED):** The orchestrator selects the mode based on content analysis output. The builder receives ONE mode — implicit in the recipe format and brief structure, not as a "Mode: APPLIED" label. APPLIED = content-first, design serves readability. COMPOSED = design-first, content and form are co-equal. Default is APPLIED; COMPOSED requires content with high structural heterogeneity and metaphor viability.

**HONEST COMPLEXITY ACCOUNTING (CF-01):** Total builder input is ~3,600 lines (not "~223 lines"):
- Constraint layer: ~73 lines within the brief (recipe format); TC Brief Template is ~223 lines
- Disposition layer: ~40 lines (9 instructions, D-01 through D-09)
- Content map: ~35 lines
- tokens.css: 183 lines (direct file)
- components.css: ~944 lines (direct file)
- Value tables: ~262 lines (CSS vocabulary)
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

**Latency budget:** Brief verification adds ~5 minutes per run. Maximum: ~15 minutes (if 2 revision cycles). 5 minutes of verification prevents 45+ minutes of wasted builder time.

**Trigger:** Content Map is available from Phase 0. Mode determined in Phase 0.5.

**Steps:**
1. Orchestrator spawns **Brief Assembler** with:
   - Content Map (from Phase 0)
   - TC Brief Template (~223 lines, from artifact-tc-brief-template.md)
   - Soul constraints as world-description (from artifact-identity-perception.md "1.2 Soul Constraints" — extract ONLY "World-description" fields)
   - Perception thresholds as natural laws (from artifact-identity-perception.md "2.2 Core Thresholds")
   - Builder recipe phases (from artifact-builder-recipe.md "PHASE 1" through "PHASE 6")
   - Disposition instructions D-01–D-09 (from artifact-builder-recipe.md "PHASE 4")
2. Brief Assembler merges template + content map following the tier structure:
   - Tier 1: IDENTITY (~15 lines) — Soul as world-description
   - Tier 2: PERCEPTION (~8 lines) — Thresholds as natural laws + calibration table
   - Tier 3: COMPOSITIONAL (~50 lines) — Multi-coherence, metaphor, density arc, content-form coupling, creative authority, CSS values
   - Tier 4: DISPOSITION (~40 lines) — D-01 through D-09 in recipe format
   - Content Map (~30–50 lines) — Appended, per-section analysis + metaphor seeds
3. Brief Assembler applies survival function S(x) = 1/(1+C(x)) to manage compression.
4. Brief Assembler verifies content-form fit gate.
5. Brief Assembler outputs **Execution Brief** (~100–165 lines).
6. **Brief Verification Loop (CRITICAL):** Orchestrator runs BV-01 through BV-05 against the produced brief:
   - BV-01: Tier Line Budget — each tier meets minimum line count (T1>=12, T2>=6, T3>=40, T4>=32, ContentMap>=24 at 80% threshold)
   - BV-02: Background Delta Verification — every adjacent zone background hex pair has >= 15 RGB delta
   - BV-03: Recipe Format Verification — recipe:checklist verb ratio >= 3:1 (Read/Select/Deploy/Assess, NOT Verify/Fail if/Must be)
   - BV-04: Suppressor Scan — zero instances of quality suppressor patterns (S-01, S-02, S-08, S-11)
   - BV-05: Recipe Keyword Scan — verifies recipe-format language in builder-facing sections
   If ANY BV gate FAILS: return brief to Brief Assembler with specific failure details. Maximum 2 revision cycles.
   If ALL PASS: proceed to Phase 2.

**Output:** Execution Brief ready for builder consumption (BV-verified).

**CRITICAL — Builder conviction statement:** The builder must output its conviction statement (a brief articulation of design intent) as a SEPARATE FILE before beginning construction. The orchestrator must capture and preserve this artifact — it is required for the RETHINK path if the build fails.

**Decision Gate:** Brief must pass content-form fit gate AND BV-01 through BV-05. If content-form mismatch detected → return to Phase 0 with feedback. If BV failure after 2 revision cycles → ABORT with diagnostic output. BV-06 runs at pipeline startup (spec file regression scan). BV-07 runs before spawning builder (input volume ceiling).

### Phase 2A: Pass A Build — Structure (~25 min, 1 agent)

**Trigger:** Execution Brief is available from Phase 1.

**Steps:**
1. Orchestrator spawns **Pass A Builder** (Opus, REQUIRED) with:
   - Execution Brief (~100–165 lines)
   - Reference files (see Appendix D for paths):
     - `tokens.css` (183 lines)
     - `components.css` (~944 lines)
     - `mechanism-catalog.md`
     - Value tables (~262 lines — CSS vocabulary for the 6-channel framework)
     - CD-006 reference HTML (optional — the design system's highest-scoring existing artifact, ~1,200 lines)
   - **Pass A Recipe** (D-01–D-06, D-09): Content-Register Reading, Room Perception, Signing Frame, Second-Half Moment, Reader's Scroll, Negative Space as Shape, The Quiet Zone
   - Mode implicit in brief format (APPLIED or COMPOSED — not as a separate label)
   - NO gate thresholds, NO prohibition lists, NO raw research
2. Pass A Builder follows recipe sequence (NOT checklist):
   - **Read Vocabulary:** tokens.css → components.css → mechanism-catalog.md
   - **Select Creative Decisions:** Choose metaphor, density arc, channel shifts
   - **Deploy Scaffolding:** HTML structure, grid layouts, component adoption
   - **Deploy Disposition D-01–D-06, D-09** (all EXPERIMENTAL). Background Hex Lock is a separate BV-02 constraint, not a disposition.
   - **Self-Evaluate:** Answer 7 required self-evaluation questions as HTML comment block
3. Pass A Builder outputs structured conviction statement (3 sentences: metaphor, emotional arc, compositional strategy) as HTML comment at top of file.
4. Pass A Builder produces Pass A HTML with inline CSS + conviction + self-evaluation comments.

**Output:** Pass A HTML (~400-700 CSS lines, structure + conviction + self-eval).

### Phase 2A-gate: Structural Check (~1 min, orchestrator)

**Trigger:** Pass A HTML is available.

**Steps:**
1. Orchestrator runs lightweight gate subset against Pass A HTML:
   - Identity gates GR-01–GR-10 (10 gates)
   - GR-51 heading hierarchy
   - Zone count (section count matches brief)
   - CSS floor (>= 400 lines)
   - Conviction statement present
   - Self-eval present
2. If identity gate FAILS → RETHINK (return to Phase 0). If structural check PASSES → proceed to Phase 2B.

**Output:** Structural check results (PROCEED-TO-PASS-B / RE-SPAWN / RETHINK).

### Phase 2B: Pass B Build — Enrichment (~30 min, 1 agent)

**Trigger:** Pass A HTML passes structural check.

**Steps:**
1. Orchestrator spawns **Pass B Builder** (Opus, REQUIRED, DIFFERENT agent than Pass A) with:
   - Pass A HTML (the structural foundation)
   - Execution Brief (~100–165 lines)
   - Reference files: tokens.css + components.css + mechanism-catalog.md + value tables
   - **Pass B Recipe** (D-07, D-08 only): Edge Intentionality, Skeleton Test
   - Structural check results (what passed, what needs attention)
   - NO gate thresholds, NO prohibition lists
2. Pass B Builder refines the Pass A structure:
   - **Read Pass A HTML:** Understand conviction, structure, metaphor
   - **Deploy Disposition D-07, D-08** (all EXPERIMENTAL)
   - **Refine CSS:** Polish transitions, boundaries, typography details
   - **Self-Evaluate:** Answer 7 self-evaluation questions as HTML comment block
3. Pass B Builder preserves Pass A's section count, heading hierarchy, and grid-template-columns (verified post-build by GR-65).
4. Pass B Builder produces Pass B HTML (final artifact).

**Output:** Pass B HTML (~800-1200 CSS lines, final artifact with conviction + self-evaluation).

**GR-65 Structure Preservation (post-Pass-B):** Orchestrator verifies Pass B preserved Pass A's section count, heading hierarchy, and grid-template-columns. FAIL = re-spawn Pass B with explicit preservation instruction.

**Quality Floor (verified by gates, NOT seen by builders):** >=14 mechanisms, >=800 CSS lines, >=3 channel shifts.

**Builder Input Volume Ceiling (BV-07):** Before spawning each builder, count total lines of ALL builder-facing files. Maximum: 2,500 lines. If exceeded, compress or remove content until under ceiling. Enforced by BV-07 gate in gate-runner-core.js.

### Phase 3A: Screenshot Pre-Capture + Gate Runner (~5 min, orchestrator)

**Trigger:** Pass B HTML is available from Phase 2B.

**Steps (screenshots — runs in parallel with gate runner):**
1. Orchestrator serves HTML file via HTTP (Playwright blocks `file://`).
2. Orchestrator calls `captureScreenshots(page, htmlUrl, screenshotDir)` from gate-runner-core.js Section 8 via `browser_run_code`. This function handles ALL screenshot capture automatically:
   - Creates DPR-1 browser contexts (prevents black screenshots on Retina Mac)
   - Disables animations, forces opacity: 1, waits for fonts
   - Captures cold-look + full-page + scroll-through at all 3 viewports (1440px, 1024px, 768px)
   - Falls back to CDP DeviceMetricsOverride if browser.newContext() unavailable
   - Falls back to element-level screenshots if viewport captures produce blanks
   - Saves to `screenshots/{width}/cold-look.png`, `screenshots/{width}/scroll-00.png`, etc.
3. **Do NOT manually capture screenshots.** The function replaces all manual scroll-and-capture.
4. After capture, run `checkScreenshotQuality(screenshotDir)` (GR-62). If FAIL, re-capture.

**Steps (gate runner — runs in parallel with screenshots):**
1. Orchestrator opens Playwright session against served HTML.
2. Gate runner executes all post-build gates at 1440px viewport width (see gate-manifest.json for the 57-gate inventory: 22 REQUIRED + 15 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 8 BV + 1 UTILITY).
3. Responsive gates re-run at 768px.
4. Results collected as structured JSON.

**Optimization:** If gate runner completes before PA auditors and ANY identity gate (GR-01–GR-10) fails, the orchestrator MAY skip PA deployment and proceed directly to RETHINK verdict. This saves ~11 agent spawns but is optional — running both in parallel is the default.

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
5. Integrative Auditor writes free-form gestalt impression + cross-cutting pattern synthesis. (PA-05 scoring is the WEAVER's responsibility per FIX-083.)

**Output:** Gestalt synthesis report + 9 individual audit reports.

**USABILITY CIRCUIT BREAKER:** Before passing to Weaver, orchestrator scans all 9 auditor reports for BLOCKING-severity findings related to: text legibility, information accessibility, content completeness, or navigation. If ANY auditor flags BLOCKING usability: (1) elevate to BLOCKING-USABILITY, (2) annotate for Weaver as "must be Fix #1", (3) if POLISH verdict, verify usability fix is in the fix list.

### Phase 3C: Verdict (~5 min, 1 agent)

**Trigger:** Integrative report and gate results are available.

**Steps:**
1. Orchestrator spawns **Weaver** with:
   - Integrative auditor report (gestalt synthesis)
   - Gate runner results (57 gates: PASS/FAIL — see gate-manifest.json)
   - All 9 individual auditor reports (for evidence)
   - Calibration references from pa-weaver.md (multi-coherence scale, severity scale, metaphor expression spectrum)
2. Weaver scores PA-05 (per FIX-083): sub-criteria (Designed | Coherent | Proportionate | Polished), Tier 5 score (PA-60–PA-77), fix-type classification (MECHANICAL / STRUCTURAL / COMPOSITIONAL), emotional arc synthesis.
3. Weaver applies verdict logic (priority order):
   - **PRIORITY 0:** If a CONFIRMED experiential finding exists (3+ auditors flag same element), verdict CANNOT be RELEASE.
   - ANY Identity gate FAIL → **RETHINK** (highest priority after experiential)
   - 3+ Anti-Pattern gates FAIL → **RETHINK**
   - ANY Perception gate FAIL → **IMPROVE**
   - PA-05 >= 3.5 AND all gates PASS AND no confirmed experiential failures → **RELEASE**
   - PA-05 >= 3.0 AND all required gates PASS AND fixes MECHANICAL only AND <=3 MECHANICAL fixes → **POLISH**
   - PA-05 2.5–3.5 → **IMPROVE** (with specific action items)
   - PA-05 < 2.5 → **RETHINK** (fundamental rework needed)
   - MECHANICAL EXCEPTION: If ALL identity gate failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision — auto-classified by gate runner), treat as IMPROVE, not RETHINK.
4. Weaver produces TWO outputs:
   - **Diagnostic verdict** for the orchestrator: RELEASE/POLISH/IMPROVE/RETHINK + PA-05 (with sub-criteria) + Tier 5 score + gate-format action items + fix-type classifications
   - **Artistic impression** for a potential IMPROVE/RETHINK builder: generative language, no threshold numbers, no gate scores

**Output:** RELEASE / POLISH / IMPROVE / RETHINK verdict + PA-05 score + action items + artistic impression.

**For FLAGSHIP detection:** PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations AND metaphor STRUCTURAL.

**IMPROVE is the pipeline's highest-ROI intervention:** Historical data shows +1.0 to +1.5 PA-05 improvement per IMPROVE cycle. An IMPROVE verdict is not a failure — it is the pipeline's most effective quality mechanism. The orchestrator treats IMPROVE as the expected path for Ceiling/Flagship-tier content.

**Verdict behavior:** IMPROVE and RETHINK are ACTION TRIGGERS. When the Weaver issues IMPROVE, the orchestrator executes the IMPROVE protocol (artifact-orchestrator.md Section 7) and returns to Phase 3 for re-audit. When the Weaver issues RETHINK, the orchestrator executes the RETHINK protocol and returns to Phase 0. The pipeline continues until verdict is RELEASE or POLISH, or the iteration budget is exhausted.

### Per-Agent Output Logging

Every agent spawn MUST log its output to a timestamped file in the build output directory. This enables post-run analysis and debugging.

**Format:** `{phase}-{agent}-{timestamp}.md`

**Required logged outputs:**
| Phase | Agent | Output File Example |
|-------|-------|-------------------|
| Lifecycle | Observer | `observer-report.md` (updated throughout) |
| Phase 0 | Content Analyst | `p0-content-analyst-20260224T1430.md` |
| Phase 1 | Brief Assembler | `p1-brief-assembler-20260224T1445.md` |
| Phase 2A | Pass A Builder | `p2a-builder-20260224T1500.html` (Pass A HTML) |
| Phase 2A-gate | Structural Check | `p2a-gate-structural-check.json` |
| Phase 2B | Pass B Builder | `p2b-builder-20260224T1530.html` (Pass B HTML — final artifact) |
| Phase 3A | Gate Runner | `p3a-gate-runner-20260224T1535.json` |
| Phase 3B | PA Auditors A-I | `p3b-pa-auditor-{A..I}-20260224T1540.md` |
| Phase 3B | Integrative Auditor | `p3b-integrative-20260224T1555.md` |
| Phase 3C | Weaver | `p3c-weaver-20260224T1600.md` |

The orchestrator is responsible for capturing and saving each agent's output. No agent output should be ephemeral — all outputs are preserved for the full build lifecycle.

---

## 5. Dependency Graph

```
Observer (spawned FIRST, runs full lifecycle)
    │
Phase 0: Content Analysis
    │
    ▼
Phase 0.5: Mode Selection (orchestrator)
    │
    ▼
Phase 1: Brief Assembly
    │
    ▼
Phase 2A: Pass A Build (Structure, D-01–D-06, D-09)
    │
    ▼
Phase 2A-gate: Structural Check (orchestrator)
    │
    ▼
Phase 2B: Pass B Build (Refinement, D-07, D-08)
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
VERDICT: RELEASE / IMPROVE / RETHINK
```

### Sequential Dependencies (MUST complete before next starts)

1. Content Map (Phase 0) → Mode Selection (Phase 0.5) → Brief Assembly (Phase 1)
2. Execution Brief (Phase 1) → Pass A Build (Phase 2A)
3. Pass A HTML (Phase 2A) → Structural Check (Phase 2A-gate)
4. Structural Check PASS (Phase 2A-gate) → Pass B Build (Phase 2B)
5. Pass B HTML (Phase 2B) → Screenshots (Phase 3A) AND Gate Runner (Phase 3A)
6. Screenshots (Phase 3A) → PA Auditors (Phase 3B)
7. All 9 PA reports → Integrative Auditor (Phase 3B)
8. Integrative report + Gate results → Weaver (Phase 3C)

### Parallel Opportunities

- Observer runs in parallel with ALL phases (independent lifecycle).
- Gate Runner runs in parallel with screenshot capture (both depend on Pass B HTML, neither depends on the other).
- 9 PA Auditors run fully in parallel (each depends only on screenshots + their questions).
- NO other parallelism exists in the default single-cycle pipeline.

### Feedback Loops (IMPROVE Loop)

The pipeline includes a feedback loop for IMPROVE verdicts: after IMPROVE build, the pipeline returns to Phase 3A (screenshots + gates) and Phase 3B-C (full PA re-audit). This loop repeats until PA-05 reaches RELEASE threshold or improvement stalls. The dependency graph arrow from VERDICT back to Phase 3A is the IMPROVE loop.

In experimental 3-pass mode (not yet validated): the Compositional Critic architecture adds a structured multi-pass build. This is separate from the standard IMPROVE loop and remains blocked until Experiment #21.

---

## 6. Failure and Recovery Paths

### Circuit Breaker

**Iteration budget: 1 RETHINK + 2 IMPROVE passes.** Stop when PA-05 delta < 0.3 between passes (diminishing returns). If a second RETHINK is triggered, pipeline halts with diagnostic output for human review. Budget expectation: 40-60% of builds will use at least one IMPROVE cycle (per operational evidence).

### Pre-Pipeline Failures

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Missing input files | Precondition Gates GR-23–GR-28 | ABORT. Locate missing files before re-running. See Appendix D for required file paths. |
| Invalid content (empty/corrupt) | Content Analyst Phase 0 | ABORT. Provide valid content. |
| Missing reference files (tokens.css, etc.) | Precondition Gates | ABORT. Verify design system files exist at paths listed in Appendix D. |
| TC Brief Template not authored | Brief Assembler Phase 1 | ABORT. Verify artifact-tc-brief-template.md (~223 lines) exists before running pipeline. |

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
| CSS below quality floor | Gate Runner (<800 lines, <14 mechanisms, <3 channel shifts) | RETHINK verdict. Brief may need richer compositional tier. |
| Conviction statement not captured | Orchestrator check | Re-spawn Builder with explicit instruction to output conviction as separate file. |

### Phase 3 Failures

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Screenshot capture fails | Playwright error | Retry. Check HTTP server. Check `file://` not used. |
| PA Auditor produces empty report | Orchestrator check | Re-spawn that auditor with same inputs. |
| Identity gate FAIL | Gate Runner GR-01–GR-10 | **RETHINK** (unless ALL failures are MECHANICAL — see MECHANICAL EXCEPTION in verdict logic). |
| Perception gate FAIL | Gate Runner GR-11–GR-15, GR-44, GR-60 | **IMPROVE.** Targeted CSS edits to fix threshold violations. |
| 3+ Anti-pattern gates FAIL | Gate Runner GR-17–GR-22 | **RETHINK.** Systemic quality problem. |
| PA-05 < 2.5 | Weaver (per FIX-083) | **RETHINK.** Fundamental compositional failure. |
| PA-05 2.5–3.5 | Weaver (per FIX-083) | **IMPROVE.** Specific action items from auditor reports. |

### Known Historical Failure Modes

These failure modes have been observed in prior pipeline executions and are explicitly guarded against:

1. **Threshold Gaming (S-08):** Builder uses exact threshold minimums (16 RGB, 0.026em) everywhere. Anti-pattern gate GR-19 detects this. Fix: builder never sees thresholds.
2. **Prohibition Rigidity (S-02):** Builder receives raw prohibition list, becomes overly cautious. Fix: soul constraints delivered as world-description, not prohibitions.
3. **Checklist Format (S-01):** Builder receives checklist ("Verify X, Fail if Y") instead of recipe ("Read, Select, Deploy, Assess"). Fix: artifact-builder-recipe.md enforces recipe format.
4. **Whitespace Voids:** Stacked gaps exceed 120px. Gate GR-14 measures TOTAL stacked gap, not per-property. GR-44 detects trailing whitespace void. S-09 loophole closed.
5. **Ghost Mechanisms:** CSS values below perception thresholds (letter-spacing 0.001em). Gate GR-18 detects sub-perceptual values.
6. **CSS Budget Misallocation:** 22% of CSS spent on imperceptible micro-typography. Gate GR-22 checks budget distribution.
7. **Uniform Typography:** All text same size/weight. Gate GR-21 verifies typographic variation.

---

## 7. Critical Sections Index

These sections are HIGH-PRIORITY reading for the listed agent. Skimming or omitting them causes known failure modes.

### For the Orchestrator

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| artifact-orchestrator.md | "SECTION 0: MASTER EQUATION AND PRECONDITIONS" | Missing files = pipeline crash |
| artifact-orchestrator.md | "SECTION 4 (Phase 1.5): MODE SELECTION" | Wrong mode = wrong tier target |
| artifact-orchestrator.md | "SECTION 7: VERDICT AND DECISION TREE" | Misapplied verdict = wrong recovery |
| pa-deployment.md | "Screenshot Pre-Capture Pattern" | Contention = PA audit failure |
| council-verdict.md | "PART 3: SPECIFIC CONTRADICTIONS" (Contradictions A–H) | Overrides all other documents |

**NOTE on council-verdict.md:** This file is NOT one of the 9 artifacts but is referenced as an authoritative override. All council rulings are already incorporated into the 9 artifacts; the orchestrator should read council-verdict.md only to resolve ambiguities where artifacts seem to conflict. If council-verdict.md is unavailable, the 9 artifacts are self-sufficient for execution.

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
| artifact-builder-recipe.md | D-01–D-09 within "PHASE 4" | Tier 4 content — recipe format required |

### For the Builder

| File | Section | Why Critical |
|------|---------|-------------|
| The Execution Brief (produced by Phase 1) | ALL | Builder's sole execution document |
| tokens.css | ALL | Vocabulary — read FIRST |
| components.css | ALL | Available components |
| mechanism-catalog.md | ALL | Available mechanisms — referenced by recipe Phase 1 (READ YOUR VOCABULARY) |

**NOTE:** The builder does NOT read any artifact files directly. The builder reads ONLY the Execution Brief + reference files (tokens.css, components.css, mechanism-catalog.md, value tables, optionally CD-006). All pipeline intelligence reaches the builder through the brief.

### For the Gate Runner (Orchestrator Code)

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| gate-runner-spec.md | "SECTION 1: IDENTITY GATES" (GR-01–GR-10) | ANY fail = RETHINK |
| gate-runner-spec.md | "SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44, GR-60) | ANY fail = IMPROVE |
| gate-runner-spec.md | "SECTION 3: ANTI-PATTERN GATES" (GR-17–GR-22) | 3+ fail = RETHINK |
| artifact-orchestrator.md | "Gate Logic Relocated from Gate Runner" | Score-to-verdict mapping (GR-29–GR-32 moved to orchestrator verdict logic in Wave 1) |

### For PA Auditors

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| pa-deployment.md | "1.2 Auditor Assignments" | Their assigned questions — thematic groupings, not sequential |
| pa-guardrails.md | Fresh-Eyes Principle | Must NOT receive pipeline context |

### For the Integrative Auditor

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| pa-questions.md | "PA-05 — THE CORE QUESTION" | The 4 sub-criteria definition |
| pa-deployment.md | "1.4 Integrative Auditor" | How to produce gestalt impression and synthesize 9 reports |

### For the Weaver

| File | Section (Actual Header) | Why Critical |
|------|------------------------|-------------|
| pa-weaver.md | Full file (INFORMATION ISOLATION) | Verdict protocol + calibration references |
| artifact-orchestrator.md | "Gate Logic Relocated from Gate Runner" | Gate-to-verdict mapping (moved from gate-runner in Wave 1) |

---

## 8. Council Mandates Summary

These rulings from `council-verdict.md` are AUTHORITATIVE and override all other documents. All council rulings have been incorporated into the 9 artifacts; this section summarizes them for quick reference.

### Structural Mandates

| ID | Mandate | Impact |
|----|---------|--------|
| CF-01 | ~73-line constraint layer within ~3,600 total builder input. FORMAT improvement (recipe vs checklist), not volume reduction. | Every item has a home; honest accounting required |
| CF-02 | Compositional Critic REMOVED from default pipeline | 17 agents (was 16 with Critic, now 17 with two-pass + observer) |
| CF-03 | Phased suppressor removal: 20→0 active suppressors | Zero suppression in current pipeline |
| CF-04 | N=4 evidence taxonomy: FACT/PROVEN/OBSERVED/CONFOUNDED/THEORETICAL/SPECULATIVE | All claims must be tagged |

### Contradiction Resolutions

| ID | Resolution | Effect |
|----|-----------|--------|
| A | "Activation" framing RETIRED → replaced with PURPOSE + VOCABULARY | No more "activation" language in prompts. Note: "Activation Brief" is a legacy name retained for document continuity; the framing philosophy behind it is retired. |
| B | Iterative-to-convergence = DEFAULT, 3-pass Compositional Critic = EXPERIMENTAL | IMPROVE loop is the default convergence mechanism |
| C | Emotional arc = EMERGENT, not prescribed | Builder discovers arc, not told it |
| D | Creative authority (80%/20%) = UNTESTED | Included in brief, but evidence is THEORETICAL |
| E | Opus builder = REQUIRED for all pipeline agents | Sonnet allowed ONLY for declared [SONNET-TEST] runs |
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
| L4 DISPOSITION | 62 | 78 (appendix) | artifact-builder-recipe.md | COVERED — D-01–D-09 + recipe phases 4-6 |
| L5 VALUES | 94 | Distributed | DISTRIBUTED | COVERED — 34 rerouted from gates (15 orch, 10 PA, 9 doc); 26 to builder context; 34 standalone |
| L6 GATES | 72 | 57 gates + rerouted | artifact-gate-runner.md | COVERED — 57 gates (22 REQUIRED + 15 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 8 BV + 1 UTILITY — see gate-manifest.json) + 6 orchestrator decision rules |
| L7 PA | 56 (+32 rerouted) | 88 total tracked | pa-questions.md + pa-deployment.md + pa-weaver.md | COVERED — 69 questions across 9 auditors + integration + verdict |
| L8 ROUTING | 63 (+62 cross-matched) | 125 total | artifact-routing.md | COVERED — Content analysis + TC brief + compression + zones |
| L9 ORCHESTRATION | 188 (+37 rerouted/context) | 222 total | artifact-orchestrator.md | COVERED — Full pipeline sequence + mode + verdict + experiments |
| META | 197 | Distributed | DISTRIBUTED | COVERED — Process documentation, evidence taxonomy, phase history |

**NOTE on count discrepancies:** Base counts are from the original `classify-by-layer.md` classification. Artifact-reported totals are higher because council reclassifications moved items between layers, and appendix item lists include secondary-classified items. The 885 total is the base classification sum. See `unified-registry.md` for the authoritative item-by-item accounting.

### Cross-Artifact Verification Points

Items that appear in MULTIPLE artifacts (by design):

1. **Soul Constraints (L1):** Appear in artifact-identity-perception.md (definition) AND artifact-gate-runner.md (binary checks). DUAL-ROUTE per council mandate.
2. **Perception Thresholds (L2):** Appear in artifact-identity-perception.md (definition + calibration) AND artifact-gate-runner.md (binary checks). DUAL-ROUTE per council mandate.
3. **Quality Floor Metrics:** Appear in artifact-builder-recipe.md (mechanism minimums) AND artifact-gate-runner.md (gate checks). Different framing: recipe uses "aim for" language, gates use "fail if below" language.
4. **PA-05 Criteria:** Appear in pa-questions.md (question definition) AND pa-weaver.md (scoring protocol + calibration) AND artifact-gate-runner.md (verdict gates). Questions define WHAT to ask; weaver defines HOW to score; gates define WHAT score triggers WHICH verdict.
5. **Mode Selection:** Appears in artifact-orchestrator.md (decision logic) AND artifact-routing.md (content analysis informs the decision). Orchestrator decides; routing provides input.

### Items NOT in Any Artifact (By Design)

Some META items (process documentation, evidence taxonomy definitions, phase history) are NOT explicitly represented in the 9 artifacts because they describe the pipeline itself rather than instructing agents. These items are:
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
- [ ] All 57 gates in gate-manifest.json have corresponding items in the registry
- [ ] All 69 PA questions in pa-questions.md have corresponding items in the registry
- [ ] All 9 disposition instructions (D-01–D-09) in artifact-builder-recipe.md have corresponding items
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
| Observer | Execution tracker + all phase outputs (read-only). Spawned FIRST, runs full lifecycle. |
| Content Analyst | Raw content markdown + content analysis protocol (full "Phase 0: Content Analysis Protocol" section from artifact-routing.md) + reader model ("Reader Model — 5-Axis Input Space" section) |
| Brief Assembler | Content Map, TC Brief Template (~223-line standalone file), soul world-description (from SC tables — World-description field ONLY), perception thresholds, recipe phases, disposition D-01–D-09 |
| Pass A Builder | Execution Brief ONLY + tokens.css + components.css + mechanism-catalog.md + value tables (~262 lines) + CD-006 reference (optional) + Pass A Recipe (D-01–D-06, D-09) |
| Pass B Builder | Pass A HTML + Execution Brief + tokens.css + components.css + mechanism-catalog.md + value tables + Pass B Recipe (D-07, D-08) + structural check results. DIFFERENT Opus agent than Pass A. |
| Gate Runner (orchestrator code) | Pass B HTML file + gate-runner-core.js (57 gates — see gate-manifest.json for canonical breakdown) |
| PA Auditors (×9) | Screenshots ONLY + assigned question subset from pa-questions.md (thematic groupings per pa-deployment.md) + pa-guardrails.md |
| Integrative Auditor | 9 PA auditor reports + all screenshots (PA-05 scoring is WEAVER's responsibility per FIX-083) |
| Weaver | Integrative report + gate results + individual auditor reports + pa-guardrails-weaver.md (pipeline-vocabulary guardrails) + calibration references (multi-coherence scale, severity scale, metaphor expression spectrum) |

**What each agent MUST NOT receive:**

| Agent | Excluded Inputs | Why |
|-------|----------------|-----|
| Pass A Builder | Gate thresholds | Prevents threshold gaming (S-08) |
| Pass A Builder | Raw prohibition list / "Gate check" or "CSS rule" fields from SC tables | Prevents prohibition rigidity (S-02) |
| Pass A Builder | Pipeline research / meta-analysis | Prevents information overload |
| Pass B Builder | Gate thresholds | Prevents threshold gaming (S-08) |
| Pass B Builder | Raw prohibition list / "Gate check" or "CSS rule" fields from SC tables | Prevents prohibition rigidity (S-02) |
| Pass B Builder | PA reports or gate results from previous runs | Fresh builder perspective |
| Observer | Generative authority (cannot modify outputs) | Observation-only role |
| PA Auditors | Execution Brief | Fresh-eyes principle: judge what IS, not what was INTENDED |
| PA Auditors | Content Map or build intent | Prevents confirmation bias |
| PA Auditors | Other auditors' reports | Independent assessment |

---

## Appendix C: Glossary

| Term | Definition |
|------|-----------|
| **Execution Brief** | The ~100–165 line document the builder receives (produced by merging the ~223-line TC Brief Template with the Content Map). Contains soul (as world-description), perception (as natural laws), composition, disposition, and content map. Constraint layer within brief: ~73 lines. Sole execution spec for builder. (Previously called "Activation Brief" — name retained in some artifacts as legacy.) |
| **TC Brief Template** | ~223-line template defining the structure of the Execution Brief. Described structurally in artifact-routing.md "Brief Template Structure." Must be authored as a standalone file before first pipeline run. Merged with Content Map by Brief Assembler. |
| **Content Map** | ~30–50 line output of Phase 0 describing content structure, type, heterogeneity, and metaphor viability. Describes "what the content IS, not what the design SHOULD BE." |
| **Soul Constraints** | 10 non-negotiable design rules (SC-01–SC-10): sharp surfaces, no shadows, container discipline, warm palette, font trinity, no gradients, zero decorative elements, border-weight hierarchy, header DNA, typography foundations. Delivered as world-description to builder, binary checks to gate runner. |
| **Perception Thresholds** | 6 empirically validated minimums (PT-01–PT-06): >=15 RGB background delta, >=0.025em letter-spacing, <=120px stacked gap, <=96px single margin, etc. Dual-routed to builder (calibration) and gate runner (binary). |
| **Disposition** | 9 creative instructions (D-01–D-09): Content-Register Reading, Room Perception, Signing Frame, Second-Half Moment, Reader's Scroll, Negative Space as Shape, Edge Intentionality, Skeleton Test, The Quiet Zone. All 9 tagged EXPERIMENTAL (attempt all, gate-check none). Background Hex Lock (zone backgrounds LOCKED) is a separate BV-02 constraint, not a disposition. |
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
| **Council** | The council-verdict.md document (575 lines). A neutral judge's resolution of contradictions between 11 extraction reports. All rulings are incorporated into the 9 artifacts. The council document itself is the ultimate authority when artifacts conflict. |
| **CCS (Compositional Coherence Score)** | RESEARCH CONSTRUCT measuring mechanism interdependence. Scale 0.00-1.00. NOT operational — methodology varies by +/-0.15 depending on evaluator. Do not gate-check until methodology is standardized. |
| **Value Tables** | ~262 lines of CSS vocabulary for the 6-channel framework. Provided to the builder as reference material (not constraints). Part of the ~3,600 total builder input. See `artifact-value-tables.md`. |
| **TC (Tension-Composition)** | The design system's core methodology. "TC Brief" = a brief that integrates content tensions with compositional frameworks. "TC Brief Template" = the template for producing such briefs. The "TC" prefix distinguishes pipeline-specific briefs from general execution documents. |
| **Register** | The character of a content section: NARRATIVE (flowing prose — generous line-height, wider measure), REFERENCE (tables, specs, lists — tighter spacing, possible multi-column), CODE (code blocks, commands — monospace, structured, tight line-height). Mixed sections get combined labels (e.g., NARRATIVE+CODE). Register determines CSS treatment per zone. |
| **Boundary** | The transition point between two adjacent zones. Multi-coherence is measured AT boundaries — how many of the 6 channels shift simultaneously. Light boundary (1-2 shifts) = legato. Medium boundary (3 shifts) = breathing rest. Heavy boundary (4+ shifts) = full stop. |
| **Multi-Coherence** | The principle that multiple CSS channels should shift simultaneously at zone boundaries to create perceptible transitions. The 6 channels are: background color, typography, spacing, borders, color accents, components. A boundary that shifts only 1 channel is a wall with a window; a boundary that shifts 3+ channels is a doorway to a new space. |
| **PA-05 Scale Labels** | FLAT (1/4) = template-generated appearance, no compositional intent. ASSEMBLED (2/4) = components arranged but not unified. COMPOSED (3/4) = unified design language with intentional transitions. DESIGNED (4/4) = every choice serves THIS content specifically, metaphor is structural. |
| **Content Tension** | A pair of opposing poles that the content navigates between (e.g., "Chaos vs Control," "Individual vs Colony"). Each tension has a dominant pole. The metaphor-shaping tension is the one most structural to the page's visual architecture. Identified in Phase 0 Content Map. |
| **Stacked Gap** | The total visual distance between the last content in one zone and the first content in the next zone. Measured two ways: GR-13 sums CSS properties (margin-bottom + padding-bottom + margin-top + padding-top, ceiling 120px), GR-14 measures bounding-rect visual gap (ceiling 150px). These are complementary checks. |
| **Conviction Statement** | 2-5 sentence articulation of the builder's design intent, written as an HTML comment at the top of the output file BEFORE construction begins. Required for the RETHINK path — if the build fails, a new builder reads this to understand what was intended. |
| **Recipe vs Checklist** | The single most important formatting distinction. Recipe format (Read → Select → Deploy → Assess) produces DESIGNED output. Checklist format (Verify → Fail if → Must be) produces FLAT output. All builder-facing content MUST use recipe format. This is PROVEN across multiple experiments. |
| **Worked Examples** | Actual inputs and outputs from a completed pipeline execution, annotated with quality commentary. See `artifact-worked-examples.md` for Gas Town examples (Content Map, Execution Brief, Gate Results, PA excerpt). |
| **D-09 (The Quiet Zone)** | Disposition instruction added in Wave 3 [EXPERIMENTAL]. Designate at least ONE zone in the middle third as deliberately plainer: 2-3 mechanisms (vs 4-5), no bento grid, single-column prose, wider line-height. Must preserve zone background, typography, and border-weight hierarchy (family membership). Anti-pattern: empty zone with uniform cream — the quiet zone must still have CONTENT and STRUCTURE. |
| **Background Hex Lock** | Builder constraint (NOT a disposition). Zone background hex values specified in the brief are LOCKED — the builder must not modify them. Enforced by BV-02. Prevents threshold gaming where builders substitute imperceptibly similar colors. |
| **Execution Tracker** | Per-build accountability document copied from EXECUTION-TRACKER-TEMPLATE.md at pipeline start. Captures build metadata, routing verification, gate results, PA scores, and post-run verification. Not modified during pipeline design — only during pipeline execution. |

---

## Appendix D: File Path Registry

All external files referenced in this manifest, with their repository locations:

### Design System Files (Builder Reference)

| File | Path | Size | Required By |
|------|------|------|-------------|
| tokens.css | `design-system/compositional-core/vocabulary/tokens.css` | 183 lines | Builder (direct file route) |
| components.css | `design-system/compositional-core/components/components.css` | ~944 lines | Builder (direct file route) |
| mechanism-catalog.md | `design-system/compositional-core/grammar/mechanism-catalog.md` | varies | Builder (direct file route) |

### Pipeline Artifacts (This VA Extraction)

| File | Path | Size | Required By |
|------|------|------|-------------|
| artifact-orchestrator.md | `ephemeral/va-extraction/artifact-orchestrator.md` | ~744 lines | Orchestrator |
| artifact-identity-perception.md | `ephemeral/va-extraction/artifact-identity-perception.md` | 556 lines | Brief Assembler, Gate Runner |
| artifact-builder-recipe.md | `ephemeral/va-extraction/artifact-builder-recipe.md` | redirect (~827 lines, includes preserved original) | Redirect to split recipe files |
| artifact-builder-recipe-compose.md | `ephemeral/va-extraction/artifact-builder-recipe-compose.md` | ~833 lines | Pass A Builder (D-01–D-06, D-09: structure) |
| artifact-builder-recipe-enrich.md | `ephemeral/va-extraction/artifact-builder-recipe-enrich.md` | ~300 lines | Pass B Builder (D-07, D-08: enrichment) |
| artifact-gate-runner.md | `ephemeral/va-extraction/artifact-gate-runner.md` | redirect (22 lines) | Gate Runner — points to split files |
| gate-runner-core.js | `ephemeral/va-extraction/gate-runner-core.js` | ~3,185 lines | Gate Runner (orchestrator code) — executable Playwright JS (29 functions) |
| gate-runner-spec.md | `ephemeral/va-extraction/gate-runner-spec.md` | ~300 lines | Human-readable gate specifications (Waves 1-4) |
| gate-runner-preconditions.md | `ephemeral/va-extraction/gate-runner-preconditions.md` | 83 lines | Text-based pre-build checks |
| gate-runner-provenance.md | `ephemeral/va-extraction/gate-runner-provenance.md` | 151 lines | Gate history and traceability |
| gate-manifest.json | `ephemeral/va-extraction/gate-manifest.json` | ~362 lines | JSON TOC, tiers, execution order |
| EXECUTION-TRACKER-TEMPLATE.md | `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md` | ~199 lines | Per-build accountability tracking template |
| experiment-protocol.md | `ephemeral/va-extraction/experiment-protocol.md` | ~51 lines | Experiment gates GR-36–GR-39 |
| artifact-pa-protocol.md | `ephemeral/va-extraction/artifact-pa-protocol.md` | redirect (22 lines) | PA Protocol — points to split files |
| pa-questions.md | `ephemeral/va-extraction/pa-questions.md` | ~431 lines | PA Auditors (question definitions) |
| pa-deployment.md | `ephemeral/va-extraction/pa-deployment.md` | ~442 lines | Orchestrator (auditor assignments, Section 0 experiential pass, screenshot protocol, Mini-PA Mode 2.5) |
| pa-weaver.md | `ephemeral/va-extraction/pa-weaver.md` | ~466 lines | Weaver ONLY (Section 0 experiential anchor, verdicts, calibration — INFORMATION ISOLATION) |
| pa-guardrails.md | `ephemeral/va-extraction/pa-guardrails.md` | ~113 lines | PA Auditors (constraints, visual verification, scoring anchors) |
| pa-guardrails-weaver.md | `ephemeral/va-extraction/pa-guardrails-weaver.md` | ~59 lines | Weaver + Orchestrator ONLY (anti-patterns, revision degradation, S-09, Tier 1 equiv, Tier 5 provisional) |
| pa-manifest.md | `ephemeral/va-extraction/pa-manifest.md` | 89 lines | Per-run PA tracking template |
| artifact-routing.md | `ephemeral/va-extraction/artifact-routing.md` | ~1,056 lines | Content Analyst, Brief Assembler |
| council-verdict.md | `ephemeral/va-extraction/council-verdict.md` | 575 lines | Orchestrator (override authority — optional, artifacts are self-sufficient) |
| artifact-tc-brief-template.md | `ephemeral/va-extraction/artifact-tc-brief-template.md` | ~235 lines | Brief Assembler |
| artifact-worked-examples.md | `ephemeral/va-extraction/artifact-worked-examples.md` | ~182 lines | All agents (reference) |
| artifact-value-tables.md | `ephemeral/va-extraction/artifact-value-tables.md` | ~262 lines | Builder (reference) |

### External Dependencies (Must Exist Before Pipeline Runs)

| File | Path | Size | Required By | Status |
|------|------|------|-------------|--------|
| TC Brief Template | `ephemeral/va-extraction/artifact-tc-brief-template.md` | ~235 lines | Brief Assembler | EXISTS (created 2026-02-23) |
| Value Tables | `ephemeral/va-extraction/artifact-value-tables.md` | ~262 lines | Builder | EXISTS (created 2026-02-23) |
| CD-006 reference | `design-system/validated-explorations/combination/CD-006-pilot-migration.html` | ~1,200 lines | Builder (optional) | EXISTS |
| Raw content markdown | User-provided | varies | Content Analyst | Pipeline INPUT |

### Pipeline Integrity Files (Verification — Used During Any Pipeline Modification)

| File | Path | Purpose |
|------|------|---------|
| crack-dimensions.md | `design-system/pipeline/crack-dimensions.md` | 14 crack dimensions — living failure mode reference. Check before any pipeline modification. |
| AUXILIARY-PROMPT.md | `design-system/pipeline/AUXILIARY-PROMPT.md` | Pipeline integrity protocol (v3): Gate 0 crack pre-check + 3 structural gates + 4 binary audits. |

### Tracking Files (Audit/Verification Only — Not Required for Execution)

| File | Path | Purpose |
|------|------|---------|
| unified-registry.md | `ephemeral/va-extraction/unified-registry.md` | Item-by-item tracking of all 885 items |
| classify-by-layer.md | `ephemeral/va-extraction/classify-by-layer.md` | Layer classification source |

---

### Known Limitations

1. **Orchestrator artifact is reduced.** At ~744 lines (down from ~1,193 after D14 complexity reduction), artifact-orchestrator.md covers execution protocol (Sections 0-8) and orchestrator decision rules (Section 9). Historical/theoretical sections archived to `_historical/`.

---

## Appendix E: Agent Prompt Templates

Copy-paste-ready prompts for every pipeline agent. Variables marked with `{VARIABLE_NAME}` must be filled by the orchestrator at spawn time. These templates reference only the artifacts and manifest by file path.

**Template source:** See `ephemeral/pipeline-retro/07-context-gap.md` Section 4 for the full prompt text with commentary. The templates below are the authoritative versions.

### Content Analyst Prompt (Phase 0)

Use the full prompt from `artifact-tc-brief-template.md` is NOT needed here — the Content Analyst produces the Content Map, it does not consume the template. The Content Analyst receives:

```
You are the Content Analyst for Pipeline v3. Your job is to analyze raw content and produce a CONTENT MAP — a description of what the content IS, not what the design SHOULD BE.

Read the raw content below, then perform these 7 operations:

1. CLASSIFY CONTENT TYPE: PROSE / MIXED / VISUAL
2. MAP STRUCTURAL HETEROGENEITY: per-section element types. Rate: LOW / MODERATE / HIGH.
3. ASSESS METAPHOR VIABILITY: Generate 2-3 metaphor candidates from the content's own language. For each: source, CSS mapping, risk (LOW/MEDIUM/HIGH). Recommend one.
4. PER-SECTION CHARACTER: Classify each section as NARRATIVE / REFERENCE / CODE.
5. ESTIMATE DENSITY ARC: SPARSE / MODERATE / DENSE per section. Pattern: CRESCENDO / PLATEAU+TAPER / WAVE / UNIFORM.
6. READER MODEL: Position on 5 axes (Info Density, Visual Complexity, Progressive Disclosure, Navigation, Entry Velocity).
7. CONTENT TENSIONS: Identify 2-4 content tensions (poles the content navigates). State pole dominance. Identify which tension is metaphor-shaping.

Output format: See artifact-worked-examples.md "Example 1: Content Map" for the exact structure.

---
RAW CONTENT:
{RAW_CONTENT_MARKDOWN}
```

### Brief Assembler Prompt (Phase 1)

```
You are the Brief Assembler for Pipeline v3. Merge the Content Map with the TC Brief Template to produce an Execution Brief.

MODE: {APPLIED or COMPOSED}

Follow the TC Brief Template structure EXACTLY (see artifact-tc-brief-template.md):
- Tier 1: IDENTITY (~15 lines) — use the 10 soul world-descriptions VERBATIM from the template
- Tier 2: PERCEPTION (~8 lines) — use the natural law + calibration text VERBATIM from the template
- Tier 3: COMPOSITIONAL (~50 lines) — SYNTHESIZE from Content Map + template instructions
- Tier 4: DISPOSITION (~40 lines) — ADAPT D-01 through D-09 per content
- Content Map Appendix (~30-50 lines) — APPEND verbatim from Phase 0

CRITICAL RULES:
- Total: ~100-165 lines. Err toward more compositional detail.
- RECIPE FORMAT: "Build / Create / Derive / Map" — NOT "Verify / Fail if / Must be."
- For COMPOSED mode: multi-coherence boundary descriptions are ESSENTIAL.
- Do NOT include gate thresholds in pass/fail format.

INPUTS:
1. TC Brief Template: artifact-tc-brief-template.md
2. Content Map (from Phase 0): {CONTENT_MAP}
3. Soul world-descriptions: included in template
4. Perception thresholds: included in template
5. Recipe framework: artifact-builder-recipe.md
6. Value Tables: artifact-value-tables.md (reference for Tier 3 CSS vocabulary)
```

### Pass A Builder Prompt (Phase 2A — Structure)

```
You are the Pass A Builder for Pipeline v3. Create the STRUCTURAL FOUNDATION of a single self-contained HTML page with inline CSS. You handle D-01 through D-06 plus D-09 (7 dispositions).

Read and internalize these files IN ORDER:
1. The Execution Brief below (your primary guide)
2. tokens.css (183 lines) — shared design vocabulary
3. components.css (~944 lines) — pre-built component library
4. mechanism-catalog.md — available compositional mechanisms
5. Value Tables (artifact-value-tables.md) — BACKGROUND COLOR PAIRS are Tier 2 LOCKED (see brief; do NOT modify zone background hex values). For all OTHER values: use as REFERENCE.
6. CD-006 reference (COMPOSED mode ONLY, optional for APPLIED) — study for compositional patterns.

Zone backgrounds in the brief are LOCKED. Do not modify zone background hex values from what the brief specifies.

Before building, write a 3-sentence CONVICTION STATEMENT:
(1) The governing metaphor is ___.
(2) The emotional arc goes from ___ to ___.
(3) The compositional strategy is ___.
Place as <!-- CONVICTION: [your 3 sentences] --> at the TOP of your HTML output.

Follow this recipe sequence:
PHASE 1 - READ: Internalize vocabulary from reference files before writing CSS.
PHASE 2 - SELECT: Make per-page creative decisions (zone backgrounds, type scale, metaphor vocabulary, component adaptation, mechanism selection).
PHASE 3 - DEPLOY SCAFFOLDING: HTML structure with semantic sections, ARIA landmarks, grid layouts, component library classes (aim for 8+), skip link, proper heading hierarchy.
PHASE 4 - DEPLOY DISPOSITION (D-01–D-06, D-09): Content-Register Reading, Room Perception, Signing Frame, Second-Half Moment, Reader's Scroll, Negative Space as Shape, The Quiet Zone.
PHASE 5 - SELF-EVALUATE: Answer ALL 7 self-evaluation questions as an HTML comment block.
Format: <!-- SELF-EVALUATION:
1. Zone transitions = different room? (answer per boundary)
2. Distinct transition types count: ___ (need 3+)
3. Skeleton has shape without text? (yes/no)
4. Scroll surprise in second half? (yes/no — describe)
5. Section heights — 3+ different heights? (yes/no)
6. Density arc — does density increase then resolve? (5 words)
7. Ending — does final viewport feel earned? (yes/no — why?)
-->

OUTPUT: Single HTML file, all CSS in <style> tag, Google Fonts imports. Target 400-700 CSS lines (structure).

---
EXECUTION BRIEF:
{EXECUTION_BRIEF_FROM_PHASE_1}

---
REFERENCE FILES:
{tokens.css content}
---
{components.css content}
---
{mechanism-catalog.md content}
---
{value-tables.md content — optional, include if token budget allows}
```

### Pass B Builder Prompt (Phase 2B — Enrichment)

```
You are the Pass B Builder for Pipeline v3. You ENRICH an existing structural foundation. You handle D-07 and D-08 (Edge Intentionality, Skeleton Test).

You are a DIFFERENT agent than the Pass A Builder who created this structure. Your job: polish, refine, add CSS sophistication — NOT restructure.

Read and internalize these files IN ORDER:
1. Pass A HTML below (the structural foundation — PRESERVE its section count, heading hierarchy, and grid-template-columns)
2. The Execution Brief (for context on intent and metaphor)
3. tokens.css, components.css, mechanism-catalog.md (vocabulary)
4. Structural check results (what passed/failed in Pass A)

DEPLOY DISPOSITION D-07, D-08:
- D-07: Edge Intentionality — micro-refinement of borders, edges, transition zones
- D-08: Skeleton Test — does the page have visual shape when you remove all text?

Enrich CSS:
- Polish zone transitions and boundaries
- Enhance typography details (letter-spacing, font-weight gradients)
- Strengthen multi-coherence at boundaries (3+ channel shifts)
- Add hover states, responsive refinements
- Ensure >=800 total CSS lines, >=14 mechanisms

PRESERVATION RULE: You MUST preserve Pass A's section count, heading hierarchy, and grid-template-columns. Adding CSS refinement is your mandate. Restructuring HTML is NOT.

SELF-EVALUATE: Answer ALL 7 self-evaluation questions as an HTML comment block.

IMPROVEMENTS: After self-evaluation, add an IMPROVEMENTS comment listing 5-10 things you would change if given another pass:
<!-- IMPROVEMENTS:
1. Category | Zone | Change | Confidence (LOW/MED/HIGH)
...
-->
If 3+ items are HIGH confidence, the orchestrator overrides RELEASE to IMPROVE.

OUTPUT: Single HTML file (refined), all CSS in <style> tag. Target 800-1200 total CSS lines.

---
PASS A HTML:
{PASS_A_HTML}

---
EXECUTION BRIEF:
{EXECUTION_BRIEF_FROM_PHASE_1}

---
STRUCTURAL CHECK RESULTS:
{STRUCTURAL_CHECK_RESULTS}

---
REFERENCE FILES:
{tokens.css content}
---
{components.css content}
---
{mechanism-catalog.md content}
```

### Gate Runner (Phase 3A)

The Gate Runner is NOT a separate LLM agent — it is Playwright JavaScript executed by the orchestrator. See `gate-runner-core.js` for 27 executable functions. Primary entry points: `runAllGates(page, briefText)` (unified wrapper calling all 4 phases), or individually: `runBriefVerification(briefText)` for BV-01–BV-07, `runPhase3Gates(page)` for all Playwright DOM gates, `runPostWeaverGates(reports, weaver)` for post-weaver verification, `runMetaGates(allResults)` for coverage + integrity. Also exported separately: `captureScreenshots(page, htmlUrl, outputDir)` for DPR-safe screenshot capture (Section 8 — creates DPR-1 contexts, replaces manual scroll-and-capture), `checkDPR(page)` for GR-61 (informational when captureScreenshots is used), `checkScreenshotQuality(screenshotDir)` for GR-62 (post-screenshot), `checkVisibleContent(screenshotDir)` for A-03. See `gate-manifest.json` for the full execution order and tier breakdown.

### PA Auditor Prompts (Phase 3B — 9 Auditors)

All 9 auditor prompts follow this pattern:

```
You are PA Auditor {LETTER}.

You are evaluating a web page design. You will see screenshots at multiple viewports. Judge ONLY what you SEE.

IMPORTANT: You are a FRESH-EYES auditor. No knowledge of build process, design intent, or content meaning.

## 0. EXPERIENTIAL PASS (MANDATORY — COMPLETE BEFORE ANY QUESTIONS)

Before answering a single question, you must attempt to USE this page as a reader would. This pass is ROLE-NEUTRAL — do not filter through any specialty lens.

STEP 1 — READ EVERY WORD. Start at the top of the 1440px cold-look screenshot. Read each heading, paragraph, label, caption, and annotation in the order they appear. For any text you cannot read FROM THE RENDERED PIXELS ALONE — without inferring from structure, context, or what "makes sense" — note it immediately. You are looking at PIXELS, not decoding HTML. If characters blur together, if labels dissolve into backgrounds, if annotations are too small to parse, those are FINDINGS. Report what you SEE, not what you KNOW it says.

STEP 2 — EXTRACT INFORMATION. For every chart, diagram, table, or infographic, attempt to answer: "What is the ONE thing this element wants me to know?" If you cannot answer within 5 seconds of looking, the element fails its communicative purpose.

STEP 3 — FOLLOW THE STRUCTURE. If there is a table of contents, numbered sections, or navigation, attempt to use them. Can you find content promised by navigation? Does the reading order match the visual hierarchy?

STEP 4 — RANK YOUR FINDINGS. List comprehension failures in severity order:
- BLOCKING: Cannot read text, cannot extract information, cannot navigate
- SIGNIFICANT: Requires effort (squinting, re-reading, scrolling back)
- MINOR: Suboptimal but functional

Write your experiential findings as "## 0. Experiential Pass" — this section MUST appear FIRST in your report, before any PA question answers.

## 1. QUESTION ANSWERS — Your specialty: {SPECIALTY}

Read each screenshot image file. First the cold-look (no scrolling), then scroll-through in order.

Answer each question below with:
- Your answer (YES/NO/specific response)
- Evidence (perceptual language — describe what you see, not CSS)
- Severity if negative (MINOR / SIGNIFICANT / BLOCKING)

QUESTIONS:
{ASSIGNED_QUESTIONS — see Section 2 Agent Roster for per-auditor assignments}

SCREENSHOTS:
{List of screenshot file paths — 1440px cold-look + scroll, 1024px cold-look + scroll, 768px cold-look + scroll}
```

**CRITICAL:** The Experiential Pass is in **primacy position** (before questions) by design. LLMs interpret subsequent instructions through the lens of their first instruction. If analytical questions come first, the auditor enters analyst mode and never leaves it. The experiential pass forces reader mode FIRST, and those findings carry forward as the highest-priority lens for all subsequent analysis. See pa-deployment.md Section 0 for the full protocol and rationale.

For the full per-auditor question text, see `ephemeral/pipeline-retro/07-context-gap.md` Section 4.5.

### Integrative Auditor Prompt (Phase 3B)

```
You are the Integrative Auditor. You have NO assigned questions. Read ALL 9 PA auditor reports + ALL screenshots.

## 0. YOUR OWN EXPERIENTIAL PASS (BEFORE READING ANY REPORTS)

Before reading a single auditor report, look at the screenshots yourself as a reader would:

1. Read the 1440px cold-look screenshot top to bottom. Note any text you cannot read FROM THE PIXELS ALONE — not from what you know it says. Report what you SEE, not what you KNOW.
2. Attempt to extract the main message from any chart, diagram, or infographic within 5 seconds.
3. Follow any navigation or table of contents. Does the page deliver on its structural promises?
4. Write a 3-sentence first impression: What works? What fails? What did you feel?

This is your ANCHOR. It cannot be overridden by auditor scores or gate results.

## 1. EXPERIENTIAL PASS AGGREGATION

Before any analytical synthesis, check: How many of the 9 auditors flagged the SAME experiential issue?
- 3+ auditors flag same element → CONFIRMED finding (must be Fix #1 regardless of other scores)
- 1-2 auditors flag same element → POSSIBLE issue (investigate further)
- Your own experiential pass DISAGREEING with auditor consensus → note explicitly (you may be seeing something they missed, or vice versa)

## 2. GESTALT SYNTHESIS

What patterns emerge across reports that no single auditor catches? Convergence? Contradictions? Blind spots?

## 3. TOP-5 FIXES (if not shipping)

Classify as MECHANICAL / STRUCTURAL / COMPOSITIONAL. Usability/comprehension failures from the experiential pass aggregation ALWAYS rank above property-level CSS findings.

NOTE: PA-05 scoring and Tier 5 synthesis are performed by the **Weaver** (per FIX-083), NOT the Integrative Auditor. Do NOT score PA-05 here.

---
AUDITOR REPORTS: {all 9 reports}
SCREENSHOTS: {file paths}
```

### Weaver Prompt (Phase 3C)

```
You are the Weaver. Read the Integrative Auditor report + Gate Runner results. Produce TWO outputs.

## 0. YOUR OWN EXPERIENTIAL ANCHOR (BEFORE ANY ANALYSIS)

Before reading any reports or gate results, view the screenshots yourself:

1. Read the 1440px cold-look top to bottom as a READER. Note anything you cannot read FROM THE PIXELS ALONE — report what you SEE, not what you KNOW it says.
2. Write a 3-sentence first impression capturing what the page FEELS like. This is your experiential anchor — it CANNOT be overridden by gate scores or auditor numbers.
3. Check: Does the Integrative Auditor's experiential aggregation AGREE with your impression? Note any divergence.

## 1. EXPERIENTIAL PASS AGGREGATION

Review the Integrative Auditor's experiential pass findings. If 3+ of 9 auditors flagged the same text element as illegible, that is a CONFIRMED usability failure and MUST appear as Fix #1 in any fix list, regardless of all other scores. See pa-weaver.md Section 0.3 for the full aggregation table.

## 2. VERDICT LOGIC (priority order — experiential findings OVERRIDE analytical scores)

PRIORITY 0 (HIGHEST): If a CONFIRMED experiential finding exists (3+ auditors), verdict CANNOT be RELEASE.
a. ANY identity gate FAIL => RETHINK (unless ALL failures are MECHANICAL — see below)
b. 3+ anti-pattern gates FAIL => RETHINK
c. ANY perception gate FAIL => IMPROVE
d. PA-05 >= 3.5 AND all gates PASS AND no confirmed experiential failures => RELEASE
e. PA-05 >= 3.0 AND all required gates PASS AND fixes are MECHANICAL only AND <=3 MECHANICAL fixes => POLISH
f. PA-05 2.5-3.5 => IMPROVE
g. PA-05 < 2.5 => RETHINK
MECHANICAL EXCEPTION: If ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision), treat as IMPROVE, not RETHINK.

PA-05 SCORING (Weaver responsibility per FIX-083):
Score PA-05 using sub-criteria: Designed | Coherent | Proportionate | Polished
Compute Tier 5 Score (0-9) from Tier 5 questions (PA-60 through PA-77).
Classify each fix as: MECHANICAL (CSS-only) / STRUCTURAL (HTML changes) / COMPOSITIONAL (re-think needed).
Synthesize emotional arc across all 4 registers.

OUTPUT A — DIAGNOSTIC (for orchestrator): VERDICT + experiential anchor + gate failures + PA-05 (with sub-criteria) + Tier 5 score + fix-type classification + classified fix list (usability fixes FIRST)
OUTPUT B — ARTISTIC IMPRESSION (for IMPROVE/RETHINK builder): NO numbers/gates, describe what the page FEELS like using emotional arc registers (Surprise, Delight, Authority, Earned Closure).

CALIBRATION (for your use, NOT shared with auditors):
Multi-Coherence: 0-1 shifts=FLAT, 2=FUNCTIONAL, 3=DESIGNED, 4-5=COMPOSED, 6=FLAGSHIP
Dead Space Severity: 1-2vh=LOOKS-WRONG, 3-5vh=WOULD-NOT-SHIP, 6+=CATASTROPHIC
Metaphor: STRUCTURAL > ATMOSPHERIC > LABELED > ANNOUNCED

PIPELINE-VOCABULARY GUARDRAILS (from pa-guardrails-weaver.md):
{pa-guardrails-weaver.md content — Tier 1 equivalents, Tier 5 provisional scoring, anti-patterns, revision degradation warnings, S-09 stacking check}

---
INTEGRATIVE REPORT: {integrative_report}
GATE RESULTS: {gate_results_json}
INDIVIDUAL REPORTS: {all 9 reports — for evidence}
```

### IMPROVE Builder Prompt (Phase 2 — Iteration Cycle)

```
You are the IMPROVE Builder. You are RECOMPOSING within the original builder's metaphor.
Honor the conviction artifact's metaphor choice — do not introduce a new governing idea.

Read these inputs IN ORDER:
1. The conviction artifact (<!-- CONVICTION: ... --> from Cycle 0 HTML)
2. The artistic impression from the Weaver (generative language — what the page FEELS like)
3. The RESIDUAL artifact (<!-- RESIDUAL: ... --> from Cycle 0 HTML — builder's rationale)
4. The original Execution Brief
5. The Cycle 0 HTML output

You are entering COMPOSITIONAL mode. You are DEEPENING relationships, not fixing defects.
Use generative verbs: illuminate, reveal, deepen, intensify, amplify.
Do NOT use diagnostic verbs: fix, repair, address, correct.

Your goal: make the page's existing metaphor MORE VISIBLE, its transitions MORE DISTINCT,
its compositional logic MORE PERCEPTIBLE. The page already has an idea — make that idea
impossible to miss.

Include your own <!-- RESIDUAL: ... --> comment documenting what you preserved, changed,
what would come next, and what trade-offs you made (>= 50 chars, >= 3 of 4 sections).

OUTPUT: Single HTML file replacing Cycle 0 output. Maintain container, soul, warm palette.

---
CONVICTION ARTIFACT: {CONVICTION_FROM_CYCLE_0}
ARTISTIC IMPRESSION: {WEAVER_ARTISTIC_IMPRESSION}
RESIDUAL ARTIFACT: {RESIDUAL_FROM_CYCLE_0}
EXECUTION BRIEF: {EXECUTION_BRIEF}
CYCLE 0 HTML: {CYCLE_0_HTML}
```

---

## Appendix F: Model Mandate

**ALL pipeline agents MUST use the Opus model.** Non-negotiable. Sonnet is permitted ONLY for explicitly declared cost-constrained testing runs (see Exception below).

**Rationale:** Sonnet complies meticulously but stays within constraints. Opus complies AND creates beyond constraints. The builder model choice is the single highest-leverage quality variable — more impactful than prompt length, suppressor count, or brief format. PA auditors on Opus produce richer perceptual language and catch subtler defects. The Brief Assembler on Opus produces richer compositional synthesis.

**Exception:** Sonnet may be used ONLY for cost-constrained testing runs. Such runs MUST be clearly marked as `[SONNET-TEST]` in all output files and their results MUST NOT be compared directly against Opus-built artifacts without noting the model difference. Testing runs do not count toward pipeline quality baselines.

**Model per role:**

| Agent | Model | Requirement |
|-------|-------|-------------|
| Observer | Opus | MUST — independent compliance verification |
| Content Analyst | Opus | MUST — richer metaphor identification, tension analysis |
| Brief Assembler | Opus | MUST — better compositional synthesis in Tier 3 |
| Pass A Builder | Opus | MUST — creates beyond constraints, not just within them. Highest-leverage single variable. |
| Pass B Builder | Opus | MUST — DIFFERENT Opus agent than Pass A. Refinement requires fresh perspective. |
| Gate Runner | N/A | Playwright JavaScript, no LLM |
| PA Auditors (x9) | Opus | MUST — subtler perceptual language, catches more |
| Integrative Auditor | Opus | MUST — better cross-cutting pattern recognition |
| Weaver | Opus | MUST — richer artistic impression output |
