# MANIFEST Dual-Behavior Architecture: Orchestration Spec + Execution Accountability

**Agent:** manifest-dual-behavior-researcher
**Date:** 2026-02-24
**Sources:** MANIFEST.md (1,091 lines), artifact-orchestrator.md (971 lines), SKILL.md (60 lines), 08-anti-loss-catalog.md, 02-new-pipeline-architecture.md
**Question:** Can the MANIFEST serve BOTH as orchestration specification AND execution accountability checklist? What is the best architecture?

---

## Table of Contents

1. [Current State Inventory](#1-current-state-inventory)
2. [Architecture Comparison](#2-architecture-comparison)
3. [Recommended Architecture](#3-recommended-architecture)
4. [Concrete Design](#4-concrete-design)
5. [Recursive Depth Recommendation](#5-recursive-depth-recommendation)
6. [Implementation Plan](#6-implementation-plan)
7. [Risk Assessment](#7-risk-assessment)

---

## 1. Current State Inventory

### 1.1 Routing Instructions

A "routing instruction" is a specific mapping of "Section X of Artifact Y goes to Agent Z." Counted from Section 3 routing tables:

| Artifact | Routing Instructions |
|----------|---------------------|
| artifact-identity-perception.md | 6 (3 sections, some dual-routed to 2 agents) |
| artifact-routing.md | 8 (8 sections to 4 different agents) |
| artifact-builder-recipe.md | 8 (6 recipe phases + mechanism minimums + quality floor) |
| artifact-gate-runner.md | 8 (5 gate sections + 3 meta-gate categories) |
| artifact-pa-protocol.md | 7 (PA-05 core + auditor assignments + screenshot pattern + emotional arc + fresh-eyes + integrative + weaver) |
| artifact-orchestrator.md | 11 (Sections 0-8 + experiment protocol + suppressor management) |
| **Total** | **48 distinct routing instructions** |

Of these 48, exactly **5 are dual-routed** (same section sent to 2 different agents with different framing):
- Soul Constraints -> Brief Assembler + Gate Runner
- Core Thresholds -> Brief Assembler + Gate Runner
- Quality Floor -> Brief Assembler + Gate Runner
- PA-05 Criteria -> PA Protocol + Gate Runner verdict gates
- Mode Selection -> Orchestrator + Routing (content analysis informs decision)

### 1.2 Agent Spawn Events

Counted from Section 4 (Phase-by-Phase Execution), explicit "Orchestrator spawns" statements:

| Phase | Spawn Event | Agent(s) | Count |
|-------|-------------|----------|-------|
| Phase 0 | Content Analyst | 1 agent | 1 |
| Phase 1 | Brief Assembler | 1 agent | 1 |
| Phase 2 | Builder | 1 agent | 1 |
| Phase 3A | Gate Runner (NOT a spawn -- orchestrator self-executes JS) | 0 agents | 0 |
| Phase 3B | PA Auditors A-I (parallel) | 9 agents | 1 event (batch spawn) |
| Phase 3B | Integrative Auditor | 1 agent | 1 |
| Phase 3C | Weaver | 1 agent | 1 |
| **Total** | | **14 LLM agents** | **6 spawn events** |

The Gate Runner is explicitly NOT a spawn event -- it is Playwright JS executed by the orchestrator. This distinction is repeated 4 times in the MANIFEST.

### 1.3 File-Reading Events

Events where an agent reads a specific file from disk (counted from routing tables + Phase-by-Phase + Appendix B):

| Agent | Files Read | Count |
|-------|-----------|-------|
| Orchestrator | MANIFEST.md, artifact-orchestrator.md, council-verdict.md (optional) | 3 |
| Content Analyst | Raw content markdown, artifact-routing.md (Phase 0 + Reader Model sections) | 2 |
| Brief Assembler | Content Map (Phase 0 output), artifact-tc-brief-template.md, artifact-builder-recipe.md, artifact-routing.md, artifact-identity-perception.md, artifact-value-tables.md (reference) | 6 |
| Builder | Execution Brief (Phase 1 output), tokens.css, components.css, mechanism-catalog.md, artifact-value-tables.md, CD-006 (optional) | 5-6 |
| Gate Runner (orchestrator) | Built HTML (via Playwright), artifact-gate-runner.md | 2 |
| PA Auditors (x9) | Screenshot files (via Read tool), assigned questions (embedded in prompt) | 1 per auditor (screenshot set) |
| Integrative Auditor | 9 PA reports, screenshot files, PA-05 scoring criteria | 11 |
| Weaver | Integrative report, gate results, 9 individual PA reports, calibration references | 12 |
| **Total distinct file-read events** | | **~51** |

### 1.4 Verification Checkpoints

The MANIFEST has exactly **3 categories** of verification:

**Category A: Section 9 "Coverage Verification" (10 checkboxes)**
- Lines 750-761: 10 unchecked `[ ]` items verifying that all 885 items have layer assignments, agent assignments, and are present in artifact files
- This is a STATIC verification checklist for the MANIFEST's own completeness -- it verifies the SPEC is complete, not that EXECUTION happened
- It is aimed at MANIFEST authors/maintainers, not at the orchestrator during a build

**Category B: Phase Decision Gates (5 decision points)**
- Phase 0 output: Content Map present? -> Proceed or ABORT
- Phase 0.5: Mode selection (APPLIED/COMPOSED) -> Proceed
- Phase 1 output: Brief passes content-form fit gate? -> Proceed or return to Phase 0
- Phase 2 output: Builder produced HTML? -> Proceed or retry
- Phase 3C: Verdict (SHIP/REFINE/REBUILD) -> Terminal decision

**Category C: Precondition Checks (6 prerequisite files)**
- Lines 13-19: 6 files that must exist before the pipeline starts
- Gate Runner GR-23 through GR-28 also check these programmatically

**What is MISSING:** There is NO mechanism that verifies "the orchestrator actually read Section X and passed it to Agent Y." The 48 routing instructions are specifications of WHAT SHOULD HAPPEN, with zero confirmation of what DID happen. The orchestrator reads the 11-step quickstart, follows it sequentially, and the MANIFEST trusts that each step was executed correctly.

### 1.5 Quickstart vs Detailed Sections

The **Quickstart** (lines 9-35, 26 lines) is a compressed 11-step procedure. Each step is a 1-2 sentence summary that references the detailed section below. It serves as a "table of contents for execution" -- the orchestrator reads step N, jumps to the referenced section for details, executes, then returns to step N+1.

The **Detailed Sections** (Sections 1-9 + Appendices A-F, lines 38-1091, ~1,053 lines) provide the full specification: routing tables, agent rosters, phase descriptions, failure recovery, council mandates, evidence taxonomy, glossary, file paths, and prompt templates.

**The gap:** The quickstart tells the orchestrator WHAT to do in sequence. The detailed sections tell HOW to do each step. Neither tells the orchestrator to RECORD that it did the step. An orchestrator could execute perfectly and produce zero evidence of correct execution, or skip a step entirely and nobody would know until the output failed verification.

---

## 2. Architecture Comparison

### Option A: Single MANIFEST with Embedded Execution Tracking

**Concept:** Add `[ ]` checkbox items inline with each routing instruction. The orchestrator marks each as `[x]` during execution by editing the MANIFEST file.

**Example:**
```markdown
### artifact-identity-perception.md (556 lines)
- [ ] Read "1.2 Soul Constraints" (PART 1), extract World-description fields
- [ ] Pass World-description to Brief Assembler prompt
- [ ] Read "1.2 Soul Constraints" (PART 1) gate-check fields
- [ ] Embed in Gate Runner code (GR-01 through GR-10)
```

**Pros:**
- Single source of truth -- spec and tracking in one file
- Every routing instruction has a paired accountability item
- Post-run, the MANIFEST file itself is the execution record

**Cons:**
- Bloats the already 1,091-line file by ~100-150 lines (48 routing + spawn + file-read checkboxes)
- The MANIFEST becomes a MUTABLE document during execution -- the authoritative spec changes state mid-run
- Git diff becomes noisy (spec changes mixed with execution tracking changes)
- If the orchestrator's context window fills, it may lose track of which checkboxes are checked
- An LLM editing checkboxes in a 1,200+ line file risks accidental edits to spec content
- File contention: the MANIFEST is read-only reference material; making it read-write introduces corruption risk

**Verdict:** HIGH RISK. Mutable spec documents are an anti-pattern. The MANIFEST's authority derives from being a stable reference; making it a working document undermines that authority.

### Option B: MANIFEST + Separate Execution Checklist

**Concept:** MANIFEST remains the authoritative immutable spec. A new `EXECUTION-CHECKLIST.md` (<200 lines) is the step-by-step checklist the orchestrator follows, with each item referencing MANIFEST sections. The orchestrator writes to the checklist as it executes.

**Example:**
```markdown
## Phase 0 — Content Analysis
- [ ] PRECONDITION: tokens.css exists (MANIFEST Appendix D)
- [ ] PRECONDITION: components.css exists (MANIFEST Appendix D)
- [ ] READ artifact-routing.md "Phase 0: Content Analysis Protocol"
- [ ] SPAWN Content Analyst with: raw content + Phase 0 protocol + Reader Model
- [ ] RECEIVE Content Map (~30-50 lines)
- [ ] DECISION: Mode = APPLIED / COMPOSED (MANIFEST Section 4, Phase 0.5)
```

**Pros:**
- Separation of concerns: spec stays stable, execution tracking is ephemeral
- Checklist is small (<200 lines) -- fits in orchestrator working memory
- Post-run, the checklist is the execution record; MANIFEST is unchanged
- Multiple builds produce separate checklists without modifying the spec
- Easy to template: same checklist structure every time

**Cons:**
- Two files to maintain -- if MANIFEST routing changes, checklist must update
- Drift risk: checklist could become stale relative to MANIFEST
- The orchestrator must read TWO files at startup instead of one
- Checklist items are inherently redundant with MANIFEST quickstart steps

**Drift Mitigation:** The checklist could be auto-generated from the MANIFEST's routing tables. If the MANIFEST changes, regenerate the checklist. This makes drift a solvable problem, not an inherent risk.

**Verdict:** LOW RISK, HIGH VALUE. This is the natural separation of REFERENCE (immutable spec) from WORKING DOCUMENT (mutable execution record).

### Option C: MANIFEST + Programmatic Verification

**Concept:** MANIFEST stays as spec. After execution completes, a verification agent programmatically checks that each routing instruction was followed by examining the execution outputs.

**Checks might include:**
- Did the Content Analyst output file exist and contain the expected structure?
- Did the Execution Brief contain all 4 tiers?
- Did the Builder receive tokens.css (check for token references in output HTML)?
- Did all 9 PA auditors produce reports?
- Did the gate runner produce JSON results for all 42 gates?

**Pros:**
- Fully automated -- no manual tracking
- Catches output-level failures (agent produced output but wrong structure)
- Can be rerun independently

**Cons:**
- ONLY verifies outputs, not inputs. Cannot confirm "the Brief Assembler was given the correct artifact sections" -- only that the Brief Assembler produced something
- Requires writing verification code for each check
- Some routing instructions have no verifiable output (e.g., "Orchestrator reads Section 1 for understanding")
- Post-hoc verification cannot catch mid-pipeline routing errors early enough to prevent cascading failures
- Adds a Phase 4 to the pipeline (~5-10 minutes extra)

**Verdict:** COMPLEMENTARY but NOT SUFFICIENT alone. Programmatic verification catches output failures but not input routing errors. Pair with Option B for complete coverage.

### Option D: Manifest as Structured Data (YAML/JSON) + Markdown Rendering

**Concept:** Convert routing tables to machine-parseable YAML/JSON. Generate both the human-readable spec AND the execution checklist from the same structured source.

**Example:**
```yaml
routing:
  - artifact: artifact-identity-perception.md
    section: "1.2 Soul Constraints (PART 1)"
    agent: Brief Assembler
    purpose: "Embed as Tier 1 IDENTITY in brief"
    extraction: "World-description field ONLY"
    phase: 1
```

**Pros:**
- Single source of truth in structured format
- Auto-generate MANIFEST.md (human reading) and EXECUTION-CHECKLIST.md (execution tracking)
- Machine-parseable: programmatic verification can cross-reference against structured data
- Changes in one place propagate to both views

**Cons:**
- SEVERE: Natural language nuance is lost. The MANIFEST's most valuable content is its explanatory prose -- WHY items are dual-routed, HOW the recipe format prevents failure, WHAT the builder must NOT receive. YAML cannot express this.
- YAML/JSON is an additional format the orchestrator must parse
- Restructuring 1,091 lines of rich prose into YAML is a multi-day effort with high information loss risk
- The MANIFEST already IS the structured data, just in markdown tables

**Verdict:** OVER-ENGINEERING. The MANIFEST's value is in its prose explanations, not its tabular data. Extracting the tables into YAML loses the explanatory context that makes the routing instructions meaningful.

### Option E: Phased Manifest (Progressive Disclosure)

**Concept:** Split MANIFEST into per-phase files: `manifest-phase0.md`, `manifest-phase1.md`, `manifest-phase2.md`, `manifest-phase3.md`. Each phase file has both spec AND checklist.

**Pros:**
- Reduces per-phase cognitive load -- orchestrator only reads ~200-300 lines for current phase
- Each phase file is self-contained for that phase's execution
- Execution tracking is per-phase, not monolithic

**Cons:**
- Loses the cross-phase overview (dependency graph, total agent count, cross-artifact verification points)
- 4 files instead of 1 means 4x the maintenance surface
- The current MANIFEST's quickstart already serves as progressive disclosure (11 steps, each referencing detailed sections)
- Appendices (A-F) don't belong to any single phase -- they'd need duplication or a 5th file
- Routing tables span phases (Brief Assembler reads from 5 artifacts across phases)
- Council mandates and evidence taxonomy are cross-cutting

**Verdict:** WRONG DECOMPOSITION AXIS. The MANIFEST is organized by ARTIFACT (Section 3), PHASE (Section 4), and ROLE (Section 7). Phase-splitting would lose the artifact and role dimensions.

### Option F (NEW): MANIFEST + Execution Log Pattern

**Concept:** MANIFEST stays as immutable spec. The orchestrator writes an `execution-log.md` file as it executes, appending entries in real-time. Each entry records: timestamp, phase, action taken, inputs provided, outputs received, status.

This is distinct from Option B (checklist) because it is APPEND-ONLY (the orchestrator never reads back what it wrote) and NARRATIVE (describes what happened, not what should happen).

**Example:**
```markdown
## Execution Log — Build 2026-02-24T14:30

### Phase 0 — Content Analysis
- [14:30] Verified preconditions: tokens.css EXISTS, components.css EXISTS, ...
- [14:31] Read artifact-routing.md sections: "Phase 0: Content Analysis Protocol", "Reader Model"
- [14:32] Spawned Content Analyst (Opus) with: raw content (path/to/content.md) + Phase 0 protocol
- [14:38] Received Content Map: 42 lines, type=MIXED, heterogeneity=HIGH, metaphor="dispatch center"
- [14:38] Mode decision: COMPOSED (high heterogeneity + metaphor viability)
```

**Pros:**
- APPEND-ONLY eliminates file corruption risk (orchestrator never reads back its own log)
- Narrative format matches LLM natural output (no checkbox manipulation)
- Post-run, the log is a complete audit trail
- A verification agent can cross-reference the log against MANIFEST routing tables
- Multiple builds produce separate logs with timestamps
- Zero impact on MANIFEST (remains immutable)

**Cons:**
- Orchestrator must remember to write log entries (self-discipline problem)
- Log entries could be vague or incomplete without a structured format
- No pre-execution prompting (unlike a checklist, which tells you what to do next)

**Verdict:** LOW RISK, MEDIUM VALUE. Natural for LLMs but lacks the forward-looking guidance of a checklist.

### Option G (NEW): MANIFEST + Execution Checklist + Post-Run Verification (Hybrid B+C+F)

**Concept:** Combine the best of B, C, and F:
1. **EXECUTION-CHECKLIST.md** (~150 lines): Pre-flight + per-phase checklist the orchestrator follows step-by-step. Contains both WHAT to do and WHERE to record it.
2. **execution-log.md** (append-only, created per-run): The orchestrator records what it actually did.
3. **Post-run programmatic verification**: A final step cross-references the log against the checklist.

**Pros:**
- Checklist provides forward-looking guidance (what to do next)
- Log provides backward-looking accountability (what was done)
- Programmatic verification catches discrepancies
- MANIFEST remains immutable

**Cons:**
- Three new files per run (checklist is templated, log and verification results are per-run)
- Most complex option
- The orchestrator has the most overhead (follow checklist + write log + run verification)

**Verdict:** MAXIMUM COVERAGE but potentially over-engineered for a single-pass pipeline with 6 spawn events.

---

## 3. Recommended Architecture

### Recommendation: Option B+F Hybrid — Execution Checklist with Integrated Log Sections

The optimal architecture is a **single new file per build** that serves as BOTH checklist AND log, distinct from the immutable MANIFEST.

**Rationale:**

1. **The MANIFEST must stay immutable.** Its authority as the pipeline spec depends on stability. Embedding execution tracking (Option A) undermines this.

2. **Phase splitting is wrong** (Option E). The MANIFEST's value is cross-cutting (artifacts span phases, roles span phases, council mandates are global). Splitting by phase destroys the relationships.

3. **Structured data loses prose** (Option D). The MANIFEST is not a database; it is an explanation system. Converting to YAML discards the explanatory context.

4. **Programmatic-only verification is incomplete** (Option C). It catches output failures but cannot verify input routing. It should be a COMPLEMENT, not a replacement.

5. **The specification paradox applies.** Research shows that specification documents past ~100-200 lines degrade LLM output quality. The MANIFEST at 1,091 lines is already past this threshold. Adding execution tracking to it (Option A) would make it worse. A SEPARATE, SHORTER execution document (~150 lines) keeps the orchestrator's working document within the effective range.

6. **LLMs work best with sequential procedures and append-only writing.** A checklist with interleaved log sections matches the natural execution pattern: read next step, do it, record what happened, move to next step.

### The B+F Hybrid Design

**File:** `EXECUTION-TRACKER.md` (~150 lines template, grows during execution)

**Structure:**
- Template sections with `[ ]` checkboxes for each actionable step
- After each checkbox cluster, a `### Log` subsection where the orchestrator records what it actually did
- The template is generated from the MANIFEST's routing tables (auto-generation eliminates drift)
- Each build creates a COPY of the template in the output directory, which the orchestrator fills in during execution

**Why this beats pure checklist (B) or pure log (F):**
- The checklist provides FORWARD guidance: "here is what you must do next"
- The log provides BACKWARD accountability: "here is what I actually did"
- Combined, they create a self-verifying execution record
- A post-run verification agent can compare checkboxes (claimed) against log entries (detailed) against outputs (actual)

---

## 4. Concrete Design

### 4.1 Template Structure

```markdown
# Pipeline v3 Execution Tracker
# Auto-generated from MANIFEST.md routing tables
# Date: {BUILD_DATE}
# Content: {CONTENT_PATH}
# Build ID: {SLUG}-{TIMESTAMP}

---

## Pre-Flight Checklist

- [ ] MANIFEST.md readable at ephemeral/va-extraction/MANIFEST.md
- [ ] tokens.css exists at design-system/compositional-core/vocabulary/tokens.css
- [ ] components.css exists at design-system/compositional-core/components/components.css
- [ ] mechanism-catalog.md exists
- [ ] council-verdict.md exists at ephemeral/va-extraction/council-verdict.md
- [ ] Raw content file exists at {CONTENT_PATH}
- [ ] TC Brief Template exists at ephemeral/va-extraction/artifact-tc-brief-template.md

### Pre-Flight Log
> (Record file existence checks and any issues here)

---

## Phase 0 — Content Analysis

### Routing Verification
- [ ] READ artifact-routing.md "Phase 0: Content Analysis Protocol"
- [ ] READ artifact-routing.md "Reader Model — 5-Axis Input Space"
- [ ] SPAWN Content Analyst (Opus) with: raw content + Phase 0 protocol + Reader Model
- [ ] RECEIVE Content Map (expected: ~30-50 lines)

### Phase 0 Decision
- [ ] Content Map classifies content type: ___________
- [ ] Structural heterogeneity assessed: LOW / MODERATE / HIGH
- [ ] Metaphor viability assessed: YES / NO
- [ ] MODE DECISION: APPLIED / COMPOSED (record rationale below)

### Phase 0 Log
> (Record Content Map summary, mode decision rationale, any anomalies)

---

## Phase 1 — Brief Assembly

### Routing Verification
- [ ] READ artifact-tc-brief-template.md (full, ~165 lines)
- [ ] READ artifact-identity-perception.md "1.2 Soul Constraints" — extract World-description fields ONLY
- [ ] READ artifact-identity-perception.md "2.2 Core Thresholds" — natural-law format
- [ ] READ artifact-builder-recipe.md "PHASE 1" through "PHASE 6" — recipe phases
- [ ] READ artifact-builder-recipe.md "PHASE 4" — D-01 through D-08 disposition instructions
- [ ] READ artifact-routing.md "Brief Template Structure" — tier budgets
- [ ] READ artifact-routing.md "Content-Form Fit Gate"
- [ ] READ artifact-routing.md "Content-Volume-to-Zone-Count Map"
- [ ] READ artifact-value-tables.md (reference for Brief Assembler)
- [ ] SPAWN Brief Assembler (Opus) with: Content Map + TC Brief Template + soul world-descriptions + perception thresholds + recipe phases + D-01-D-08
- [ ] RECEIVE Execution Brief (expected: ~100-165 lines)
- [ ] VERIFY brief has 4 tiers + Content Map appendix

### Phase 1 Log
> (Record brief line count, tier compliance, any compression concerns)

---

## Phase 2 — Building

### Routing Verification
- [ ] Execution Brief ready (from Phase 1)
- [ ] tokens.css ready (direct file route, 183 lines)
- [ ] components.css ready (direct file route, 290 lines)
- [ ] mechanism-catalog.md ready (direct file route)
- [ ] artifact-value-tables.md ready (optional reference)
- [ ] CONFIRM builder prompt uses RECIPE format (Read/Select/Deploy/Assess), NOT checklist
- [ ] CONFIRM builder prompt does NOT include gate thresholds, prohibition lists, or count-gates
- [ ] SPAWN Builder (Opus, STRONG recommendation) with: Execution Brief + reference files
- [ ] RECEIVE HTML file (single self-contained page)
- [ ] RECEIVE Conviction Statement (separate file or HTML comment)
- [ ] HTML file written to output directory

### Phase 2 Log
> (Record HTML file size, CSS line count estimate, conviction statement summary)

---

## Phase 3A — Screenshots + Gate Runner

### Screenshot Capture
- [ ] HTML served via HTTP (not file://)
- [ ] Animations disabled: animation: none !important; opacity: 1 !important
- [ ] Fonts loaded: document.fonts.ready
- [ ] 1440px: cold-look screenshot captured
- [ ] 1440px: scroll-through screenshots captured (80% viewport steps)
- [ ] 1024px: cold-look screenshot captured
- [ ] 1024px: scroll-through screenshots captured
- [ ] 768px: cold-look screenshot captured
- [ ] 768px: scroll-through screenshots captured
- [ ] All screenshots saved to output directory

### Gate Runner (Playwright JS, NOT a separate agent)
- [ ] READ artifact-gate-runner.md executable code sections
- [ ] Identity Gates GR-01 through GR-10: ___/10 PASS
- [ ] Perception Gates GR-11 through GR-16: ___/6 PASS
- [ ] Anti-Pattern Gates GR-17 through GR-22: ___/6 PASS
- [ ] Precondition Gates GR-23 through GR-28: ___/6 PASS
- [ ] Gate results saved as structured JSON

### Early Termination Check
- [ ] ANY identity gate FAIL? If YES -> skip PA, proceed to REBUILD verdict
- [ ] (If no identity failures, proceed to Phase 3B)

### Phase 3A Log
> (Record screenshot count, gate results summary, any identity failures)

---

## Phase 3B — Perceptual Audit

### PA Deployment
- [ ] SPAWN PA Auditor A (Opus) — Impression + Emotion: PA-01,03,04,05,45,65,67
- [ ] SPAWN PA Auditor B (Opus) — Readability + Typography: PA-02,06,07,08,29,56
- [ ] SPAWN PA Auditor C (Opus) — Spatial + Proportion: PA-09,10,11,30-33,50-53,55,64,66
- [ ] SPAWN PA Auditor D (Opus) — Flow + Pacing: PA-12,13,34-36,69,70,62
- [ ] SPAWN PA Auditor E (Opus) — Grid + Layout: PA-14,15,37-39,63
- [ ] SPAWN PA Auditor F (Opus) — Consistency + Rhythm: PA-16,17,40,41,60,61
- [ ] SPAWN PA Auditor G (Opus) — Metaphor + Ideology: PA-18-20,42-44,68
- [ ] SPAWN PA Auditor H (Opus) — Responsiveness: PA-21-23,46,47
- [ ] SPAWN PA Auditor I (Opus) — Cross-Page + Adversarial: PA-24-28,48
- [ ] CONFIRM: All 9 auditors received screenshots ONLY + assigned questions ONLY (fresh-eyes)
- [ ] RECEIVE all 9 audit reports
- [ ] SPAWN Integrative Auditor (Opus) with: all 9 reports + all screenshots
- [ ] RECEIVE PA-05 score: ___/4

### Phase 3B Log
> (Record PA-05 score and sub-criteria, key findings from integrative report)

---

## Phase 3C — Verdict

### Verdict Assembly
- [ ] SPAWN Weaver (Opus) with: integrative report + gate results + individual auditor reports
- [ ] RECEIVE Verdict: SHIP / REFINE / REBUILD
- [ ] RECEIVE Diagnostic report (for orchestrator)
- [ ] RECEIVE Artistic impression (for potential REFINE/REBUILD builder)

### Final Verdict
- [ ] VERDICT: _______________
- [ ] PA-05 Score: ___/4
- [ ] Identity Gates: ___/10 PASS
- [ ] Perception Gates: ___/6 PASS
- [ ] Anti-Pattern Gates: ___/6 PASS

### Phase 3C Log
> (Record verdict, key action items, recommended next steps)

---

## Execution Summary

| Metric | Value |
|--------|-------|
| Total agents spawned | ___/14 |
| Total routing instructions executed | ___/48 |
| Total checkboxes completed | ___/___ |
| Build duration | ___ minutes |
| PA-05 score | ___/4 |
| Verdict | SHIP / REFINE / REBUILD |

### Missing Steps (if any)
> (Record any steps that were skipped or modified, with rationale)
```

### 4.2 How the Orchestrator Interacts with It

**Workflow:**
1. At pipeline start, the orchestrator COPIES the `EXECUTION-TRACKER-TEMPLATE.md` to the output directory as `execution-tracker.md`, filling in `{BUILD_DATE}`, `{CONTENT_PATH}`, and `{SLUG}`.
2. Before each phase, the orchestrator reads the next section of the tracker to know what to do.
3. As it completes each step, the orchestrator edits the tracker: marks checkboxes `[x]` and writes log entries in the `> Log` sections.
4. The tracker is the orchestrator's WORKING document -- the MANIFEST is its REFERENCE document.
5. At the end, the tracker is the execution record for that build.

**Key principle:** The tracker is SMALL (~150 lines template). The MANIFEST is LARGE (1,091 lines). The orchestrator's per-step working memory only needs the ~20-line phase section of the tracker, not the entire MANIFEST. It reads the MANIFEST for detailed context only when the tracker references a specific section.

### 4.3 Post-Execution Verification

A verification agent (or the orchestrator itself) can perform three checks:

**Check 1: Completeness** -- Are all checkboxes marked? Any unchecked boxes indicate skipped steps.

**Check 2: Consistency** -- Do log entries match checkbox claims? If a box says "SPAWN Content Analyst" is checked but the log says "skipped due to X," there is an inconsistency.

**Check 3: Output Correspondence** -- Do the claimed outputs exist? If the tracker says "RECEIVE Content Map (42 lines)" but no Content Map file exists, the claim is false.

These checks can be automated: parse the tracker for `[x]` count, parse log sections for anomaly keywords ("skipped", "failed", "modified"), verify file existence for all claimed outputs.

---

## 5. Recursive Depth Recommendation

### The Question: Should Artifacts Get Sub-Manifests?

The MANIFEST has 48 routing instructions across 6 artifact files. Some artifacts are themselves large orchestration documents:

| Artifact | Lines | Internal Steps | Sub-Manifest Warranted? |
|----------|-------|---------------|------------------------|
| artifact-gate-runner.md | ~1,379 | 42 gates (each with code) | NO -- gates are code, not orchestration. The Gate Runner IS the verification. |
| artifact-pa-protocol.md | 1,004 | 65 questions + deployment protocol | NO -- question assignment is already in the MANIFEST Section 2 roster. |
| artifact-orchestrator.md | 971 | 16 sections of orchestration detail | NO -- the MANIFEST already IS the orchestrator's manifest. This artifact is the MANIFEST's detail layer. |
| artifact-builder-recipe.md | 840 | 6 recipe phases | NO -- the recipe IS the builder's execution sequence. Adding a manifest over a recipe is meta-overhead. |
| artifact-routing.md | 843 | Content analysis protocol + brief assembly process | NO -- these are consumed by agents, not orchestrated by the orchestrator. |
| artifact-identity-perception.md | 556 | Soul constraints + perception thresholds | NO -- declarative definitions, not execution sequences. |

### Recommendation: ONE Level Only

**The MANIFEST's Execution Tracker is the single level of execution accountability.** No artifact needs its own sub-manifest. Here is why:

1. **The MANIFEST is already the recursion terminus.** It maps artifacts to agents. Artifacts map content to CSS/HTML/checks. Adding a manifest layer inside artifacts would create manifest-ception with no additional accountability.

2. **Artifact-level accountability is handled by OUTPUT verification.** The gate runner produces 42 PASS/FAIL results -- that IS its accountability mechanism. The PA protocol produces 9 reports + a PA-05 score -- that IS its accountability mechanism. The builder recipe produces an HTML file -- the gates and PA verify it.

3. **The specification paradox constrains depth.** Each additional level of manifest adds meta-overhead that competes with execution. The 150-line tracker is already at the edge of the ~100-200 line effective range. Adding per-artifact trackers would push total meta-documents past the point of usefulness.

4. **The 2-level architecture is: MANIFEST (spec) + Execution Tracker (accountability).** That is sufficient because every routing instruction in the MANIFEST has a corresponding checkbox in the tracker, and every artifact output is verified either by gates, PA, or the weaver.

**Exception:** If the pipeline later supports MULTI-PASS execution (the experimental 3-pass mode), each pass would need its own tracker section. But this is a horizontal extension (more phases within one tracker), not a vertical extension (sub-trackers inside artifacts).

---

## 6. Implementation Plan

### New Files Created

| File | Location | Lines | Purpose |
|------|----------|-------|---------|
| `EXECUTION-TRACKER-TEMPLATE.md` | `ephemeral/va-extraction/` | ~150 | Reusable template, auto-generated from MANIFEST routing tables |
| `execution-tracker.md` | Per-build output directory | ~150-250 (grows during execution) | Filled-in execution record for each build |

### Files Modified

| File | Change | Impact |
|------|--------|--------|
| `MANIFEST.md` | Add ~10 lines to Quickstart: "Step 0: Copy EXECUTION-TRACKER-TEMPLATE.md to output directory" | Minimal -- adds one pre-flight step |
| `SKILL.md` | Add reference to execution tracker in "Execution rules" section | Minimal -- one additional bullet point |

### No Files Deleted

The execution tracker is additive. No existing files change their structure or purpose.

### Dependency Order

1. Create `EXECUTION-TRACKER-TEMPLATE.md` (no dependencies -- derived from MANIFEST routing tables)
2. Add Step 0 to MANIFEST Quickstart (depends on template existing)
3. Add execution tracker reference to SKILL.md (depends on template existing)
4. Test with a build (depends on all above)

### Auto-Generation Protocol

The template should be regenerable from the MANIFEST. The generation process:

1. Extract all routing instructions from Section 3 tables (48 items)
2. Extract all spawn events from Section 4 (6 events with 14 agents)
3. Extract all file-read events from Appendix B (51 events)
4. Organize by phase (Phase 0, 1, 2, 3A, 3B, 3C)
5. Add pre-flight section from MANIFEST prerequisites
6. Add summary section with blank metrics

If the MANIFEST changes, the template is regenerated. This eliminates drift risk between spec and tracker.

---

## 7. Risk Assessment

### Risk 1: Specification Paradox Amplification

**Risk:** Adding an execution tracker means the orchestrator now reads TWO documents (MANIFEST + tracker) instead of one. If combined length exceeds the effective specification threshold, output quality drops.

**Mitigation:** The tracker REPLACES the quickstart as the orchestrator's working document, not supplements it. The orchestrator reads the tracker for "what to do next" and consults the MANIFEST only when the tracker references a specific section for detail. Net working memory load stays ~150 lines (tracker) rather than 1,091 lines (full MANIFEST). This is an IMPROVEMENT over the current state where the orchestrator must navigate 1,091 lines to find each next step.

**Residual risk:** LOW. The tracker reduces per-step cognitive load by providing a focused sequential procedure.

### Risk 2: Tracker Becomes Stale

**Risk:** The MANIFEST evolves (new routing instructions, changed agents, modified phases) but the tracker template is not updated.

**Mitigation:** Auto-generation protocol. The template is derived FROM the MANIFEST, not maintained independently. A generation script or generation prompt extracts the checkable items from MANIFEST sections. When the MANIFEST changes, the template is regenerated.

**Residual risk:** LOW, if the auto-generation discipline is maintained.

### Risk 3: Orchestrator Skips Tracker Entries

**Risk:** The orchestrator completes steps but forgets to mark checkboxes or write log entries. The tracker shows incomplete execution even though the pipeline ran correctly.

**Mitigation:**
- The tracker's phase sections are structured as "Routing Verification + Log" pairs. The orchestrator reads the verification checkboxes as its TODO list, naturally marking them as it goes.
- The Execution Summary section at the bottom requires the orchestrator to count completed checkboxes, which forces a review pass.
- Post-run verification can cross-reference outputs against claimed completions.

**Residual risk:** MEDIUM. LLM orchestrators may still skip entries under context pressure. But the cost of a skipped entry is LOW (missing audit trail) not HIGH (pipeline failure), because the actual execution is governed by the MANIFEST routing tables, not by the tracker.

### Risk 4: Tracker Editing Corrupts Nearby Content

**Risk:** When the orchestrator edits checkboxes in the tracker, it accidentally modifies nearby checklist items or log entries.

**Mitigation:** The tracker is a SHORT file (~150 lines template). Each phase section is ~20-25 lines. The Edit tool operates on exact string matches. The risk of accidental corruption is proportional to file length -- at 150 lines, it is much lower than editing within the 1,091-line MANIFEST (which is why Option A was rejected).

**Residual risk:** LOW.

### Risk 5: Meta-Overhead Exceeds Value

**Risk:** The execution tracker adds 150 lines of meta-documentation overhead to a pipeline that already has 1,091 lines of spec + ~6,246 lines of artifacts. The meta-to-output ratio worsens.

**Mitigation:** The tracker is EPHEMERAL (per-build, not permanent). It does not count toward the pipeline's standing meta-overhead. Each build's tracker is archived with the build output and does not accumulate into the specification layer.

**Residual risk:** LOW. The tracker is a per-run artifact, not permanent infrastructure.

### Risk 6: 13 Anti-Loss Mechanisms Disrupted

**Assessment of impact on each mechanism:**

| # | Mechanism | Impact | Assessment |
|---|-----------|--------|------------|
| 1 | MANIFEST structure | UNCHANGED -- MANIFEST stays immutable | SAFE |
| 2 | Artifact separation | UNCHANGED -- tracker is a new file, not merged into artifacts | SAFE |
| 3 | Dual-route pattern | UNCHANGED -- tracker documents dual-routes but doesn't modify them | SAFE |
| 4 | Fresh-eyes principle | UNCHANGED -- tracker is orchestrator-only, PA auditors never see it | SAFE |
| 5 | Recipe format | UNCHANGED -- tracker doesn't modify builder inputs | SAFE |
| 6 | Gate-hidden-from-builder | UNCHANGED -- tracker references gates but builder doesn't read tracker | SAFE |
| 7 | World-description framing | UNCHANGED -- tracker doesn't modify identity framing | SAFE |
| 8 | Perception threshold dual-route | UNCHANGED -- tracker documents routes, doesn't modify them | SAFE |
| 9 | TC Brief Template | UNCHANGED -- template is consumed by Brief Assembler, not tracker | SAFE |
| 10 | Screenshot pre-capture | TRACKER DOCUMENTS IT -- adds checkboxes for each viewport capture | ENHANCED |
| 11 | Content Map | UNCHANGED -- Content Map is produced by Content Analyst | SAFE |
| 12 | Tier structure in brief | UNCHANGED -- tracker verifies tier completeness but doesn't modify tiers | SAFE |
| 13 | Opus model mandate | TRACKER DOCUMENTS IT -- each spawn checkbox includes "(Opus)" | ENHANCED |

**Result:** 0 mechanisms disrupted, 2 mechanisms ENHANCED (screenshot capture now has explicit checkboxes; model mandate now has per-spawn verification).

---

## Summary of Findings

### The Core Answer

**YES, the MANIFEST can serve BOTH purposes -- but NOT in a single file.** The MANIFEST should remain the immutable orchestration specification. A separate `EXECUTION-TRACKER-TEMPLATE.md` (~150 lines) serves as the execution accountability checklist, generated from the MANIFEST's routing tables.

### Key Numbers

- 48 routing instructions in the current MANIFEST
- 6 spawn events (14 LLM agents)
- ~51 file-read events
- 10 coverage verification checkboxes (Section 9, spec completeness -- NOT execution tracking)
- 5 decision gates (execution flow control)
- 0 execution accountability mechanisms currently exist

### Recommended Architecture

**Option B+F Hybrid:** A per-build execution tracker that combines checklist (forward guidance) with interleaved log sections (backward accountability). One level of manifest recursion only -- no per-artifact sub-manifests.

### Implementation Cost

- 1 new template file (~150 lines)
- ~10 lines added to MANIFEST Quickstart
- ~2 lines added to SKILL.md
- Zero changes to any artifact file
- Zero changes to any agent prompt
- Zero disruption to the 13 anti-loss mechanisms
