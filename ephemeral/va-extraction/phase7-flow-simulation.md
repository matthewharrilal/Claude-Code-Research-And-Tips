# Pipeline v3 Flow Simulation Report
Date: 2026-02-23
Simulator: flow-simulator agent
Input: 6 artifacts + council-verdict.md (total ~5,977 lines)

---

## 1. PHASE-BY-PHASE FLOW TABLE

### Phase 0: CONTENT ANALYSIS (~15 min)

| Field | Value |
|-------|-------|
| **Agent** | Content Analyst (Opus) — 1 agent |
| **Inputs** | Raw content source material (markdown/article/research) |
| **Process** | 6 operations: (1) classify content type (prose/mixed/visual), (2) map structural heterogeneity, (3) assess metaphor viability, (4) per-section character (NARRATIVE/REF/CODE), (5) estimate density arc, (6) reader model classification |
| **Outputs** | CONTENT MAP (~30-50 lines) + Reader Profile (~15 lines) |
| **Decision Point** | Content Affordance Check: does content have heterogeneity + metaphor viability? |
| **If YES** | Proceed to Phase 1 (COMPOSED mode candidate) |
| **If NO** | Proceed at Middle tier (APPLIED mode) OR reject content as unsuitable |
| **Failure Path** | If content lacks heterogeneity AND metaphor viability, orchestrator can reject or downgrade to APPLIED mode. No rebuild — content is the issue, not the pipeline. |
| **Artifacts Referenced** | artifact-routing.md (Phase 0 protocol, content type classification, reader model 5-axis), artifact-orchestrator.md (Section 2) |

### Phase 0.5: MODE SELECTION (Orchestrator Decision, ~0 min — immediate)

| Field | Value |
|-------|-------|
| **Agent** | Orchestrator (no separate agent spawned) |
| **Inputs** | Content Map from Phase 0 |
| **Process** | Apply content-form routing rules: heterogeneity + metaphor viability → COMPOSED; low het. + low metaphor → APPLIED. Content-form fit gate (council-added) runs here. Content-volume-to-zone-count map applied. |
| **Outputs** | Mode selection (APPLIED or COMPOSED) — builder receives ONE mode's recipe only |
| **Decision Point** | Content-form fit gate (5 lines): FAIL if COMPOSED requested but content has < 3 distinct section types |
| **If FAIL** | Mode downgrades to APPLIED |
| **Failure Path** | No pipeline failure — graceful downgrade |
| **Artifacts Referenced** | artifact-routing.md (content-form routing, content-form fit gate, content-volume-to-zone-count map), artifact-orchestrator.md (Section 4) |

### Phase 1: BRIEF ASSEMBLY (~15 min)

| Field | Value |
|-------|-------|
| **Agent** | Brief Assembler (Opus) — 1 agent |
| **Inputs** | (1) 73-line template (pre-compressed, static), (2) Content Map (~35 lines from Phase 0), (3) Reader Profile (~15 lines from Phase 0) |
| **Process** | Merge template + content map → BRIEF. Reader profile integrated into Tier 3. Survival function S(x) runs here to filter constraints. Content-type propagation made explicit. |
| **Outputs** | BRIEF (~93-113 lines) with 4 tiers: Tier 1 IDENTITY (15 lines), Tier 2 PERCEPTION PHYSICS (8 lines), Tier 3 COMPOSITIONAL FRAMEWORKS (50 lines), Tier 4 DISPOSITION (~40 lines) + Content Map appendix |
| **Decision Point** | Precondition gates GR-23 through GR-28 run here (pre-build verification): Opus model? Content heterogeneity? Suppressor count = 0? Brief < 200 lines? Builder gate-free? Recipe format? |
| **If ANY FAIL** | Pipeline STOPS. Fix precondition before proceeding. |
| **Failure Path** | GR-25 (suppressor detected in brief) → remove suppressor, re-assemble. GR-26 (brief too long) → trim constraint layer. GR-28 (checklist format detected) → reformat to recipe. |
| **Artifacts Referenced** | artifact-routing.md (brief template structure, survival function, information flow architecture), artifact-orchestrator.md (Section 3), artifact-gate-runner.md (Section 4: precondition gates) |

### Phase 2: BUILDING (~45 min)

| Field | Value |
|-------|-------|
| **Agent** | Builder (Opus — STRONG RECOMMENDATION per council) — 1 agent |
| **Inputs** | (1) Brief (~113 lines), (2) Content source material, (3) tokens.css (183 lines, direct), (4) components.css (290 lines, direct), (5) CD-006 reference (optional, ~1,200 lines) |
| **Process** | 8-step zone-by-zone build: (1) Conviction statement, (2) Build header + Zone 1 (OPENING), (3) Self-evaluate via Playwright screenshot, (4) Adjust, (5) Build Zone 2-3 (DEEPENING), (6) Midpoint self-evaluate (full-page scroll), (7) Build Zone 4 + footer (RESOLVING), (8) Final self-evaluate at 1440px + 768px |
| **Outputs** | Complete HTML page (800-1200 CSS lines) |
| **Decision Point** | Builder self-evaluation at 3 checkpoints. Builder has Playwright access for screenshots. |
| **If self-eval poor** | Builder adjusts in-place (same agent, same session). This is NOT a fix cycle — it's the generative process. |
| **Failure Path** | If builder produces fundamentally wrong output, it will be caught in Phase 3 (PA audit). No Phase 2 abort mechanism — the build always completes and goes to verification. |
| **Builder DOES NOT receive** | Gate thresholds (pass/fail), prohibition list (beyond 10 soul constraints), count-gates (">=3 channels"), fix cycle instructions, research archive, process metadata |
| **Builder DOES receive** | Perception thresholds as CALIBRATION ("15 RGB = barely visible, 50 RGB = dramatic"), soul constraints as WORLD-DESCRIPTION, disposition instructions D-01 through D-08 |
| **Artifacts Referenced** | artifact-builder-recipe.md (entire document — the builder's recipe), artifact-identity-perception.md (perception calibration table, soul constraints), artifact-orchestrator.md (Section 5) |

### Phase 3A: SCREENSHOT CAPTURE (~5 min)

| Field | Value |
|-------|-------|
| **Agent** | Orchestrator (team lead) — 0 new agents |
| **Inputs** | Complete HTML page from Phase 2 |
| **Process** | (1) Serve HTML via HTTP, (2) Disable animations (`animation: none !important`), (3) Wait for `document.fonts.ready`, (4) Take cold-look + scroll-through screenshots at 3 viewports: 1440px, 1024px, 768px |
| **Outputs** | Saved PNG screenshots (cold-look + scroll sequence at each viewport) |
| **Decision Point** | None — mechanical capture |
| **Failure Path** | If Playwright fails, retry. No fallback path. |
| **Artifacts Referenced** | artifact-pa-protocol.md (Part 5: screenshot pre-capture pattern), artifact-orchestrator.md (Section 6) |

### Phase 3B: PROGRAMMATIC GATES (parallel with 3C, ~5 min)

| Field | Value |
|-------|-------|
| **Agent** | Gate Runner — 1 agent (or orchestrator-embedded) |
| **Inputs** | HTML page served via HTTP + Playwright session |
| **Process** | Execute 42 gates at 1440px, responsive gates re-run at 768px. Results as structured JSON. |
| **Outputs** | Gate results: per-gate PASS/FAIL + measured values |
| **Decision Point** | Verdict logic: ANY identity gate FAIL → REBUILD. ANY perception gate FAIL → REFINE (CSS fix). 3+ anti-pattern FAIL → REBUILD. All PASS → proceed to PA verdict. |
| **Failure Path** | Identity FAIL → skip PA, go directly to REBUILD. Perception FAIL → targeted CSS fix before PA. |
| **Artifacts Referenced** | artifact-gate-runner.md (Sections 1-3: identity, perception, anti-pattern gates), artifact-orchestrator.md (Section 6) |
| **NOTE** | The orchestrator document does NOT explicitly mention programmatic gates as a separate Phase 3B step. It describes Phase 3 as "PERCEPTUAL AUDIT (Verification Only)" focused on PA auditors. The gate-runner artifact defines when gates run (Phase 3, after build), but the orchestrator's flow description centers on PA deployment. See Consistency Finding #1. |

### Phase 3C: PA AUDIT (~15 min, parallel)

| Field | Value |
|-------|-------|
| **Agent** | 9 PA Auditors (A-I, all Opus) + 1 Integrative Auditor (Opus) — 10 agents, all parallel |
| **Inputs** | Saved PNG screenshots (from Phase 3A) + PA questions. NOTHING ELSE. Fresh-eyes principle: zero context about build, mechanisms, tier targets. |
| **Process** | Each auditor reads screenshots via Read tool. Auditors answer assigned questions. 65 questions total across 9 auditors (5 mandatory + 15 standard + deep dive + Tier 5). Integrative auditor writes free-form gestalt impression. |
| **Outputs** | 10 auditor reports (9 PA + 1 integrative) |
| **Decision Point** | None at this stage — all auditors report independently |
| **Failure Path** | No failure possible at this stage (auditors always produce reports). Quality of reports depends on screenshot quality and auditor model (must be Opus). |
| **Artifacts Referenced** | artifact-pa-protocol.md (Parts 1-4: PA-05, Tier 5 questions, full question inventory, 9-auditor deployment), artifact-orchestrator.md (Section 6) |

### Phase 3D: WEAVER VERDICT (~5 min)

| Field | Value |
|-------|-------|
| **Agent** | Weaver (Opus) — 1 agent, sequential after all auditors complete |
| **Inputs** | All 10 auditor reports |
| **Process** | Synthesize reports into: (1) PA-05 score (1-4 scale + sub-criteria), (2) Tier 5 score (0-9 YES count), (3) Combined verdict (PA-05 x Tier 5 matrix), (4) Top-5 fixes (classified MECHANICAL/STRUCTURAL/COMPOSITIONAL), (5) Ship decision, (6) Emotional arc assessment |
| **Outputs** | VERDICT document with ship decision: SHIP / REFINE / REBUILD |
| **Decision Point** | The central pipeline decision. See Phase 4. |
| **Failure Path** | If weaver produces ambiguous verdict, orchestrator must interpret. No formal handling defined. |
| **Artifacts Referenced** | artifact-pa-protocol.md (Part 4: weaver), artifact-orchestrator.md (Section 7) |

### Phase 4: VERDICT AND DECISION TREE (Orchestrator, ~0 min — immediate)

| Field | Value |
|-------|-------|
| **Agent** | Orchestrator (decision only) |
| **Inputs** | Weaver VERDICT + gate runner results |
| **Process** | Apply ship/refine/rebuild thresholds |

**Branch: SHIP (PA-05 >= 3.5 AND zero soul violations)**
| Field | Value |
|-------|-------|
| **Action** | Pipeline COMPLETE. Page is ready. |
| **Programmatic gates** | Run as final verification (informational, not gating at this point). |
| **Output** | Final HTML page |

**Branch: REFINE (PA-05 2.5-3.5)**
| Field | Value |
|-------|-------|
| **Action** | Spawn DIFFERENT Opus builder |
| **Refine agent receives** | Original brief, Pass 1 output, PA weaver's artistic impressions (generative language) |
| **Refine agent DOES NOT receive** | Gate scores, threshold numbers, diagnostic language |
| **Mode** | COMPOSITIONAL (refining relationships, not fixing defects) |
| **Return to** | Phase 3 (full re-audit: screenshots → gates → PA → weaver) |
| **Cost** | Adds ~60-75 min + PA re-audit |

**Branch: REBUILD (PA-05 < 2.5)**
| Field | Value |
|-------|-------|
| **Action** | Spawn FRESH Opus builder in COMPOSING mode |
| **Rebuild agent receives** | Original brief, content, conviction artifact from failed build |
| **Rebuild agent DOES NOT receive** | The failed HTML, fix lists, diagnostic analysis |
| **Mode** | COMPOSING (starts from scratch with conviction lesson) |
| **Return to** | Phase 2 entirely (full build + Phase 3) |
| **Cost** | Adds ~80-105 min (full Phase 2-3 redo) |

---

## 2. DEPENDENCY GRAPH

```
Phase 0: Content Analysis
  │
  ├── Hard dep: Raw content source material
  │
  ▼
Phase 0.5: Mode Selection (orchestrator)
  │
  ├── Hard dep: Content Map from Phase 0
  │
  ▼
Phase 1: Brief Assembly
  │
  ├── Hard dep: Content Map + Reader Profile (from Phase 0)
  ├── Hard dep: 73-line template (static, pre-exists)
  ├── Soft dep: Mode selection (from Phase 0.5)
  │
  ▼
[PRECONDITION GATES GR-23 through GR-28 — BLOCKING]
  │
  ▼
Phase 2: Building
  │
  ├── Hard dep: Brief (from Phase 1)
  ├── Hard dep: Content source material
  ├── Hard dep: tokens.css (static file)
  ├── Hard dep: components.css (static file)
  ├── Soft dep: CD-006 reference (optional)
  │
  ▼
Phase 3A: Screenshot Capture
  │
  ├── Hard dep: Complete HTML (from Phase 2)
  │
  ▼
Phase 3B: Gates ──────── Phase 3C: PA Audit (PARALLEL)
  │                         │
  ├── Hard dep: HTML        ├── Hard dep: Screenshots (from 3A)
  │                         │
  ▼                         ▼
Phase 3D: Weaver
  │
  ├── Hard dep: All 10 auditor reports (from 3C)
  ├── Soft dep: Gate results (from 3B) — informational context
  │
  ▼
Phase 4: Verdict
  │
  ├── SHIP ──────► DONE
  ├── REFINE ────► New builder → Phase 3 (re-audit)
  └── REBUILD ───► Fresh builder → Phase 2 (full rebuild)
```

**Parallel Opportunities:**
- Phase 3B (gates) and Phase 3C (PA audit) can run in parallel — both only need Phase 3A output
- All 10 PA auditors (9 + integrative) run fully in parallel
- Phase 0 and Phase 1 are strictly sequential (1 depends on 0)
- Phase 2 is a single-agent sequential process with internal self-evaluation loops

---

## 3. FAILURE PATH MAP

### 3.1 Gate Failure Paths

| Gate Category | Count | Failure Action | Defined In |
|---------------|-------|---------------|------------|
| **Identity gates (GR-01 to GR-10)** | 10 | ANY FAIL → REBUILD (PA-05 < 2.5 equivalent) | artifact-gate-runner.md Section 1, verdict logic |
| **Perception gates (GR-11 to GR-16)** | 6 | ANY FAIL → REFINE (targeted CSS fix) | artifact-gate-runner.md Section 2 |
| **Anti-pattern gates (GR-17 to GR-22)** | 6 | 3+ FAIL → REBUILD; <3 FAIL → proceed to PA | artifact-gate-runner.md Section 3 |
| **Precondition gates (GR-23 to GR-28)** | 6 | ANY FAIL → STOP (fix precondition, re-assemble) | artifact-gate-runner.md Section 4 |
| **Mode gates (GR-33 to GR-35)** | 3 | ADVISORY only — no blocking action | artifact-gate-runner.md Section 6 |

**Gap identified:** The orchestrator artifact does not explicitly define the gate-runner's role in the Phase 3 flow. It describes Phase 3 as "PERCEPTUAL AUDIT" with screenshot capture → PA auditors → weaver. The gate-runner is mentioned in the pre-build precondition context and the verdict context but its Phase 3 execution is not sequenced in the orchestrator's timeline table (Section 8). The gate-runner artifact independently states gates run "in Phase 3, AFTER the builder has completed its work." This is consistent but underspecified in the orchestrator.

### 3.2 PA Failure Paths

| PA-05 Score | Verdict | Action | Fresh Agent? | What They Receive | Defined In |
|-------------|---------|--------|-------------|-------------------|------------|
| >= 3.5 | SHIP | Pipeline complete | N/A | N/A | artifact-orchestrator.md Section 7, artifact-pa-protocol.md Part 10 |
| 2.5-3.5 | REFINE | Spawn different Opus | YES (different) | Brief + Pass 1 output + PA artistic impressions (generative language) | artifact-orchestrator.md Section 7, artifact-pa-protocol.md Part 10.2 |
| < 2.5 | REBUILD | Spawn fresh Opus | YES (fresh) | Brief + content + conviction artifact (NOT failed HTML) | artifact-orchestrator.md Section 7, artifact-pa-protocol.md Part 10.3 |

**Key principle:** "You cannot fix your way to Flagship. Only compose your way." (artifact-orchestrator.md Section 7)

**Open question:** What happens if REBUILD also fails? The artifacts do not define a maximum iteration count. Theoretically the pipeline could loop indefinitely between REBUILD → Phase 2 → Phase 3 → REBUILD. The council notes "budget for failure recovery (25-40% builds fail)" but doesn't specify a circuit breaker.

### 3.3 Builder Failure Paths

| Failure Type | Detection | Recovery | Defined In |
|--------------|-----------|----------|------------|
| Fundamentally wrong output (wrong content, broken HTML) | Phase 3 gates (identity failures) | REBUILD with fresh builder | artifact-gate-runner.md verdict logic |
| Technically correct but perceptually flat | Phase 3 PA audit (PA-05 < 2.5) | REBUILD with fresh builder + conviction | artifact-orchestrator.md Section 7 |
| Good but not great | Phase 3 PA audit (PA-05 2.5-3.5) | REFINE with different builder | artifact-orchestrator.md Section 7 |
| Builder enters wrong mode (APPLIED when COMPOSED intended) | GR-33/34/35 mode detection (ADVISORY) + PA questions PA-03, PA-05a, PA-63, PA-65 | Detected post-build, feeds into REFINE/REBUILD decision | artifact-gate-runner.md Section 6, artifact-pa-protocol.md Part 11 |

### 3.4 Content Failure Paths

| Failure Type | Detection | Recovery | Defined In |
|--------------|-----------|----------|------------|
| Low heterogeneity | Phase 0 content analysis | Proceed at Middle tier (APPLIED mode) or reject | artifact-orchestrator.md Section 2 |
| No metaphor viability | Phase 0 content analysis | Route to APPLIED mode (no metaphor needed) | artifact-routing.md (content-form routing) |
| Content-form mismatch | Phase 1 content-form fit gate | Mode downgrade to APPLIED | artifact-routing.md (content-form fit gate) |
| Content volume → zone mismatch | Phase 1 zone-count map check | Adjust zone count recommendation | artifact-routing.md (content-volume-to-zone-count map) |

**The pipeline does NOT abort for content issues.** It adapts (mode downgrade, tier reduction). Content failure = lower ceiling, not pipeline failure.

---

## 4. AGENT FILE LOADING MATRIX

### 4.1 Files Each Agent Receives

| Agent | artifact-identity-perception.md | artifact-builder-recipe.md | artifact-gate-runner.md | artifact-pa-protocol.md | artifact-routing.md | artifact-orchestrator.md |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Orchestrator** | Reference (routing rules) | Reference (format validation) | Reference (precondition gates, verdict logic) | Reference (deployment architecture) | READ (primary) | READ (primary) |
| **Content Analyst** | Skip | Skip | Skip | Skip | READ (Phase 0 protocol) | Reference (Phase 0 overview) |
| **Brief Assembler** | READ (Tier 1-2 content) | Reference (brief structure) | Reference (precondition gates) | Skip | READ (brief template, information flow) | Reference (Phase 1 overview) |
| **Builder** | READ (soul constraints as world-description, perception calibration table) | READ (primary — the builder's recipe) | NEVER (gate thresholds hidden) | NEVER (PA questions hidden) | Skip | NEVER (process metadata hidden) |
| **Gate Runner** | READ (binary gate checks) | Skip | READ (primary — all gate specs) | Skip | Skip | Reference (verdict thresholds) |
| **PA Auditors (A-I)** | Skip (fresh-eyes principle) | Skip | Skip | READ (assigned questions ONLY) | Skip | Skip |
| **Integrative Auditor** | Skip | Skip | Skip | READ (gestalt role description) | Skip | Skip |
| **Weaver** | Skip | Skip | Skip | READ (verdict framework, calibration references) | Skip | Reference (ship thresholds) |
| **REFINE Builder** | READ (soul + perception) | READ (recipe) | NEVER | NEVER | Skip | NEVER |
| **REBUILD Builder** | READ (soul + perception) | READ (recipe) | NEVER | NEVER | Skip | NEVER |

### 4.2 Files Mentioned in Orchestrator That Exist in Artifact Set

| File Reference in Orchestrator | Corresponding Artifact | Status |
|-------------------------------|----------------------|--------|
| "73-line template" | Static artifact (NOT in our 6-file set — it's a pre-built template, not a VA artifact) | EXISTS ELSEWHERE |
| "tokens.css (183 lines)" | Direct file in design system (not a VA artifact) | EXISTS ELSEWHERE |
| "components.css (290 lines)" | Direct file in design system (not a VA artifact) | EXISTS ELSEWHERE |
| "Content Map (~35 lines)" | Produced at runtime by Content Analyst (not pre-existing) | RUNTIME OUTPUT |
| "Brief (~113 lines)" | Produced at runtime by Brief Assembler (not pre-existing) | RUNTIME OUTPUT |
| "CD-006 reference (optional)" | Existing design system artifact | EXISTS ELSEWHERE |
| Soul constraints / perception thresholds | artifact-identity-perception.md | COVERED |
| Builder recipe (D-01 through D-08) | artifact-builder-recipe.md | COVERED |
| Gate specifications | artifact-gate-runner.md | COVERED |
| PA question assignments | artifact-pa-protocol.md | COVERED |
| Content analysis protocol | artifact-routing.md | COVERED |

### 4.3 Artifacts Never Mentioned by Orchestrator

All 6 artifacts are referenced by the orchestrator (directly or indirectly). No artifact is orphaned.

### 4.4 Missing Files (Referenced but Not in Artifact Set)

| Referenced File | Where Referenced | Status |
|-----------------|-----------------|--------|
| 73-line template | orchestrator Section 3, routing brief template | MUST BE CREATED — static artifact, encoded once from research archive |
| tokens.css | orchestrator Section 5, builder-recipe Phase 1 | EXISTS in design system |
| components.css | orchestrator Section 5, builder-recipe Phase 1 | EXISTS in design system |
| CD-006 reference HTML | orchestrator Section 5 (optional) | EXISTS in design system |
| CSS value tables (~550 lines) | orchestrator Section 1 (honest accounting) | STATUS UNCLEAR — mentioned in total line count but not as a standalone artifact in our set |

---

## 5. CONSISTENCY FINDINGS

### Finding 1: Gate Runner Placement in Phase 3 — UNDERSPECIFIED

**Orchestrator says:** Phase 3 = Screenshot Capture → PA Audit → Weaver. Timeline table (Section 8) lists Phase 3A (screenshots), Phase 3B (PA audit), Phase 3C (verdict). No explicit Phase 3 slot for gate runner.

**Gate runner artifact says:** "Gates run in Phase 3, AFTER the builder has completed its work" (L24-26). Execution order: serve HTML → execute gates → collect results → FAIL gates produce fix recipes.

**Verdict:** CONSISTENT but UNDERSPECIFIED in orchestrator. The gate runner runs during Phase 3 but its sequencing relative to PA is not explicitly stated. From the dependency graph, gates and PA can run in parallel (both need HTML/screenshots). The orchestrator's verdict logic (Section 7) references both PA-05 scores and soul violations, implying both ran. **Recommended fix:** Add explicit gate runner step to orchestrator timeline.

### Finding 2: PA Question Count — CONSISTENT

**Orchestrator says:** "PA-1 Q1-6, PA-2 Q7-12, ..., PA-7 Q37-42 (7 auditors x 6 questions)" + "PA-8 Q43-48" + "PA-9 Q49-54 (total 54 PA questions across 9 auditors)"

**PA protocol says:** 65 total questions (54 standard + 2 sub-perceptual + 9 Tier 5). Question assignment table shows specific question IDs per auditor (A through I) with varying counts (5-14 per auditor).

**Verdict:** MINOR INCONSISTENCY. The orchestrator uses an older "54 questions" count and a sequential Q1-Q54 numbering scheme. The PA protocol uses PA-01 through PA-70 numbering with 65 total. The orchestrator's numbered assignment scheme (PA-1 gets Q1-6) does NOT match the PA protocol's assignment (Auditor A gets PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67 = 7 questions from non-sequential IDs). **The PA protocol's assignment table is authoritative.** The orchestrator's Section 6 question assignment is a simplified summary that should be treated as superseded.

### Finding 3: Agent Count — CONSISTENT

**Orchestrator says:** 15 total agents for single-pass (Section 8 timeline: 1 Content Analyst + 1 Brief Assembler + 1 Builder + 10 PA (9 + 1 integrative) + 1 Weaver + orchestrator itself for screenshots = 15, with orchestrator not counted as a spawned agent).

**PA protocol says:** Mode 4 deploys 11 agents: 9 PA Auditors + 1 Integrative + 1 Weaver.

**Verdict:** CONSISTENT. 1 + 1 + 1 + 9 + 1 + 1 = 14 spawned agents + orchestrator doing screenshots = 15 total positions in the pipeline. The PA protocol's "11 agents" counts only Phase 3 agents.

### Finding 4: Gate Runner Gate List — CONSISTENT

**Orchestrator references:** Ship threshold (PA-05 >= 3.5), rebuild threshold (PA-05 < 2.5), refine threshold (2.5-3.5), preconditions (model=Opus, content heterogeneity, suppressor count, brief size, builder gate-free, recipe format).

**Gate runner defines:** 42 gates across 8 categories. All orchestrator-referenced thresholds map to specific gates (GR-23 through GR-32).

**Verdict:** CONSISTENT. The orchestrator references a subset; the gate runner provides the full specification.

### Finding 5: 9-Auditor Deployment — CONSISTENT

**Orchestrator says:** "PA-1 thru PA-9 (9 parallel auditors)" + "all PA auditors must be Opus" + "Agent 14: INTEGRATIVE AUDITOR (Opus) NO assigned questions" + "Agent 15: WEAVER (Opus) reads 10 auditor reports -> VERDICT."

**PA protocol says:** 9 Auditors (A-I) + 1 Integrative + 1 Weaver = 11 agents. All Opus. Specific question assignments per auditor.

**Verdict:** CONSISTENT. Naming convention differs (PA-1 through PA-9 in orchestrator vs Auditor A through I in PA protocol) but structure matches exactly.

### Finding 6: Builder Input Line Count — CONSISTENT

**Orchestrator says:** Total builder input ~3,600 lines. Breakdown: 73 constraint + ~40 disposition + ~35 content map + 183 tokens.css + 290 components.css + ~550 value tables + content source + optional ~1,200 CD-006.

**Builder recipe says:** "~3,600 total builder input lines (including reference files shared with v2)" (per council CF-01). Recipe format with 6 phases.

**Routing artifact says:** "Total builder input is ~3,600 lines" with same breakdown.

**Verdict:** FULLY CONSISTENT across all three artifacts.

### Finding 7: Stacked Gap Thresholds — MINOR TENSION

**Identity-perception artifact says:** PT-03 stacked gap ceiling = 120px. Gate check at 150px (council CF-03 created buffer zone). 120-150px = "perceptually risky but not gate-failing."

**Gate runner says:** GR-13 (stacked gap <= 120px) and GR-14 (total stacked gap <= 150px) as two separate gates.

**Orchestrator says:** Nothing specific about the 120 vs 150 distinction.

**Verdict:** CONSISTENT but COMPLEX. Two separate gates serve two purposes: GR-13 checks individual stacked gaps at 120px; GR-14 checks total accumulated boundary gaps at 150px. The council intentionally set the gate threshold wider than the perception threshold. This is correctly reflected in both artifacts but could confuse implementers.

### Finding 8: Survival Function Location — CONSISTENT

**Orchestrator says:** "Reclassified from ROUTING/GATE-RUNNER to ORCHESTRATOR per council Pattern 4. The survival function runs during prompt assembly (Phase 0-1), NOT during gate verification (Phase 3)." (Section 1)

**Routing artifact says:** "STATUS: RECLASSIFIED PER COUNCIL VERDICT. Layer ROUTING -> GATES. Agent GATE-RUNNER -> ORCHESTRATOR." Describes function as running during assembly.

**Council verdict says:** Pattern 4 ruling: survival function is curation for prompt assembly, not runtime gate.

**Verdict:** FULLY CONSISTENT across all three documents.

### Finding 9: CSS Value Tables — STATUS UNCLEAR

The orchestrator's honest accounting (Section 1) lists "Value tables: ~550 lines" as part of builder input. The builder recipe references CSS value tables in Phase 6 Step 6.6 ("CSS Value Table (6 lines)" in the brief, but the 550-line figure suggests much more). Neither artifact provides the actual 550-line value table content.

**Verdict:** GAP. The value tables are referenced as builder input but are not contained in any of our 6 artifacts. They appear to be a separate deliverable that must be created as part of pipeline implementation.

---

## 6. CRITICAL PATH ANALYSIS

### Default Single-Pass (Happy Path)

```
Phase 0 (15 min) → Phase 1 (15 min) → Phase 2 (45 min) → Phase 3A (5 min) → Phase 3B+3C (15 min parallel) → Phase 3D (5 min)
                                                                                                                           │
Total critical path: 15 + 15 + 45 + 5 + 15 + 5 = 100 min                                                                │
                                                                                                                     VERDICT
```

**Bottleneck:** Phase 2 (Building) at 45 minutes is the single longest phase and a single-agent sequential process with no parallelization opportunity.

### REFINE Path

```
Default path (100 min) → REFINE build (~45 min) → Phase 3 re-audit (~25 min)
Total: 100 + 45 + 25 = ~170 min
```

### REBUILD Path

```
Default path (100 min) → Full Phase 2+3 (~70 min)
Total: 100 + 70 = ~170 min
```

### Worst Case (1 REBUILD + 1 REFINE)

```
Default (100) → REBUILD (70) → REFINE (70) = ~240 min
```

### Cost Summary

| Path | Duration | Agents Spawned | Estimated Cost |
|------|----------|----------------|---------------|
| SHIP on first pass | ~80-105 min | 15 | ~$30-150 |
| REFINE needed | ~135-180 min | ~27 | ~$60-300 |
| REBUILD needed | ~160-210 min | ~27 | ~$90-450 |
| REBUILD + REFINE | ~215-285 min | ~39 | ~$150-750 |

---

## 7. OPEN QUESTIONS

### Q1: Maximum Iteration Count (CRITICAL)
No artifact defines a maximum number of REBUILD or REFINE cycles. The pipeline could theoretically loop forever. **Recommendation:** Add a circuit breaker (e.g., max 2 rebuilds before human intervention).

### Q2: Gate Runner Sequencing in Phase 3
The orchestrator's Phase 3 timeline does not explicitly slot the gate runner. Is it intended to run parallel with PA auditors (both reading the HTML), or sequential before PA? The gate runner's verdict logic (identity FAIL → REBUILD) could short-circuit the PA audit entirely, saving the cost of 11 agents. **Recommendation:** Define explicitly. If gates can short-circuit PA, run gates first.

### Q3: CSS Value Tables (~550 lines)
Where do these live? The orchestrator counts them in the ~3,600 line builder input, but they are not part of any artifact in our set. Are they embedded in the brief's Tier 3? Part of tokens.css? A separate file? **Recommendation:** Create or identify this deliverable.

### Q4: 73-Line Template
The template is described as "pre-compressed, created ONCE" (artifact-routing.md). It is the most critical pipeline input but does not exist as an artifact in our set. The routing artifact describes its structure (4 tiers) but not its content. **Recommendation:** This template must be authored before the smoke test.

### Q5: Conviction Artifact in REBUILD Path
The REBUILD protocol gives the fresh builder "the conviction artifact from the failed build." But the conviction statement is written by the builder in Step 1 of the build sequence — it's a brief text ("This page is about X. Metaphor Y. Arc Z."). In single-pass mode (default), is this conviction statement preserved by the orchestrator for potential REBUILD use? **Recommendation:** Yes — orchestrator should capture the builder's conviction statement as a pipeline artifact.

### Q6: Experiment-Gated Features
The 3-pass architecture is "BLOCKED until experiment #21 validates." Dispositional instructions D-01-D-08 are "EXPERIMENTAL, include in smoke test, evaluate via experiment #20." If the smoke test reveals D-01-D-08 are harmful, the builder recipe loses its entire Phase 4 and Phase 6. What remains? **Recommendation:** Ensure the pipeline works even with all dispositional instructions removed (degrade gracefully to APPLIED mode).

### Q7: REFINE Agent Input Ambiguity
The orchestrator says the REFINE agent receives "PA weaver's artistic impressions (in generative language)." The PA protocol says the weaver produces "Top-5 Fixes (classified as MECHANICAL / STRUCTURAL / COMPOSITIONAL)." Fix classifications use diagnostic categories. Is the weaver expected to produce TWO outputs — one diagnostic (for orchestrator) and one artistic (for REFINE agent)? **Recommendation:** Define weaver output format for the REFINE case explicitly.

### Q8: Content Analyst → Mode Selection Handoff
The orchestrator describes Mode Selection as an "Orchestrator Decision" (Section 4) that happens between Phase 0 and Phase 2. But the routing artifact describes a content-form fit gate (council-added) that runs "during assembly (Phase 1)." Is mode selection a Phase 0 output or a Phase 1 output? **Recommendation:** Clarify: Content Analyst proposes mode → Brief Assembler validates via content-form fit gate → mode is confirmed.

### Q9: "Phase 3B" vs "Phase 3C" Naming
The orchestrator's timeline table uses Phase 3A (screenshots), Phase 3B (PA Audit), Phase 3C (verdict). But the text sections use Phase 3A (screenshots), Phase 3B (PA Audit), Phase 3C (Weaver). The gate runner has no explicit Phase 3 sub-designation. This report introduces "Phase 3B" for gates and "Phase 3C" for PA to reflect parallelism. **Recommendation:** Standardize naming.

---

## 8. SUMMARY STATISTICS

| Metric | Value |
|--------|-------|
| Total artifacts read | 7 (6 artifacts + council verdict) |
| Total lines analyzed | ~5,977 |
| Pipeline phases | 6 major (0, 1, 2, 3A, 3B/C, 3D/4) |
| Maximum agents per build (single-pass, SHIP) | 15 |
| Maximum agents per build (with REBUILD) | ~27 |
| Total gates defined | 42 |
| Total PA questions | 65 |
| Critical path duration | ~80-105 min (happy path) |
| Inter-artifact consistency findings | 9 (7 CONSISTENT, 1 MINOR INCONSISTENCY, 1 GAP) |
| Open questions | 9 |
| Missing deliverables (not in artifact set) | 2 (73-line template, CSS value tables) |
| Failure paths defined | 4 categories (gate, PA, builder, content) |

---

*This simulation was produced by reading all 6 VA artifacts + council verdict and tracing every dependency, handoff, and decision point. The pipeline is internally consistent with minor exceptions noted above. The two critical missing deliverables (73-line template, CSS value tables) must be created before the smoke test can run.*
