# THE COMPLETE TRIPOD PIPELINE — Specification Document

**Purpose:** This is the single source of truth for the entire Tripod Pipeline architecture. Every agent on the build team reads this before doing any work. If something contradicts this document, this document wins.

**Status:** PRE-BUILD SPECIFICATION (not yet implemented)

**What this builds:** A new skill (`/research-compose`) that orchestrates 5 phases to produce a designed HTML page from content markdown, using the full accumulated knowledge base (26,528 lines across 57 files) instead of the 1,053 lines of compressed pipeline vocabulary the current `/compose` skill uses.

---

## TABLE OF CONTENTS

1. [The Problem This Solves](#1-the-problem-this-solves)
2. [The Tripod Theory](#2-the-tripod-theory)
3. [Pipeline Architecture Overview](#3-pipeline-architecture-overview)
4. [Phase 1: DERIVE (Tension-Composition)](#4-phase-1-derive)
5. [Phase 2: RESEARCH (Specialist Team)](#5-phase-2-research)
6. [Phase 3: BUILD (3-Pass Rotation)](#6-phase-3-build)
7. [Phase 4: EVALUATE (Perceptual Audit)](#7-phase-4-evaluate)
8. [Phase 5: REFINE (Fix Cycles)](#8-phase-5-refine)
9. [Instrumentation & Logging](#9-instrumentation--logging)
10. [The Accumulated Knowledge Base](#10-the-accumulated-knowledge-base)
11. [Known Obstacles & Mitigations](#11-known-obstacles--mitigations)
12. [Proven Patterns from /compose](#12-proven-patterns-from-compose)
13. [Agent-0C's Curation as Exemplar](#13-agent-0cs-curation-as-exemplar)
14. [File Routing Map](#14-file-routing-map)
15. [Cost & Timing Estimates](#15-cost--timing-estimates)
16. [Output Manifest](#16-output-manifest)
17. [Key Principles](#17-key-principles)

---

## 1. THE PROBLEM THIS SOLVES

### The Quality Gap

Exploration-era HTML files (DD-001 through CD-006) exhibit significantly higher visual richness than current `/compose` pipeline output. After weeks of investigation with 7+ research agents, the root cause was identified:

**The builder receives flat, generic input and produces flat, generic output.**

Today's `/compose` builder gets 4 static vocabulary files (1,053 lines total) — the same files every build, regardless of what's being designed. These files are compressed derivatives ("shitty summaries") with 99.8% information loss from the original 337 research findings.

Meanwhile, 26,528 lines of accumulated knowledge sit on disk — original research, validated stage findings, case studies with actual CSS that worked, convention specs with reasoning, handoff documents carrying cross-stage intelligence — none of which reaches the builder.

### The Thesis

> "The quality of the builder's output is determined by the quality of the builder's input, and the quality of the input is determined by how knowledge reaches the builder, not by how much knowledge exists."
> — Pipeline Redefinition (Doc 10)

### What Changes

| Aspect | Current /compose | Tripod /research-compose |
|--------|-----------------|--------------------------|
| Builder input | 4 static files (1,053 lines) | Curated research package (400-600 lines) |
| Knowledge traversed | 0 lines per build | 24,525 lines per build (Layers 1-9) |
| Curation | None | 5 specialists + 1 synthesizer |
| Build passes | 1 | 3 (rotation mechanism) |
| Per-build tailoring | None (same files every time) | Full (package curated for THIS content + metaphor) |
| Builder context management | All at once (attention trough) | Rotated (each section gets primacy) |

---

## 2. THE TRIPOD THEORY

Three interlocking instruments from the exploration era. Remove any one and the system breaks.

### Instrument 1: Master Execution Prompt (HOW to consume)
- Specifies reading order and absorption sequence
- Defines recipe verbs: Read → Internalize → Map → Deploy → Verify
- Establishes anti-orphaning principle (every CSS property traces to a finding)
- Requires findings production with CHAIN annotations

### Instrument 2: Research Package (WHAT to consume)
- Per-build curated selection from the full knowledge base
- Implementation-mapped findings (not names — plans with expected CSS evidence)
- Anti-pattern risk profiles specific to THIS content
- CSS examples from validated explorations that share structural affinity
- Recipe format (sequenced steps), NOT checklist format (constraints)

### Instrument 3: Curation Process (HOW the package was created)
- A dedicated research phase traverses ALL accumulated knowledge
- Specialist agents read different knowledge slices in depth
- LLM judgment determines which findings apply to THIS build
- Findings are translated into build-specific actions with CSS examples
- A synthesizer resolves conflicts and assembles the final package

### The Interlocking Property
- Without Instrument 1: builder has knowledge but no consumption protocol → reads randomly, misses critical material
- Without Instrument 2: builder has protocol but generic knowledge → applies findings that don't fit this content
- Without Instrument 3: builder has specific knowledge but it wasn't intelligently selected → noise overwhelms signal

### Confidence Level
Tripod causation confidence: 50-65% (contrarian's model variable objection: quality may partly come from Opus-as-builder, not from the tripod alone). This pipeline uses Opus for all agents, so both hypotheses are addressed.

---

## 3. PIPELINE ARCHITECTURE OVERVIEW

```
USER: /research-compose ephemeral/content/article.md
  │
  ▼
ORCHESTRATOR (main Claude Code session, reads SKILL.md)
  │
  ├── Phase 0: Setup (create dirs, validate input)
  │
  ├── Phase 1: DERIVE ──────── 1 TC agent (Opus) ──────────▶ _tc-brief.md
  │
  ├── Phase 2: RESEARCH ────── 5 specialists (Opus, parallel)
  │   │                          + 1 synthesizer (Opus, sequential)
  │   │
  │   ├── Specialist 1: Findings Mapper ──────▶ _specialist-1-findings.md
  │   ├── Specialist 2: Validation Mapper ────▶ _specialist-2-validated.md
  │   ├── Specialist 3: Case Study Analyst ───▶ _specialist-3-casestudies.md
  │   ├── Specialist 4: Constraints Compiler ─▶ _specialist-4-constraints.md
  │   ├── Specialist 5: Protocol Analyst ─────▶ _specialist-5-protocol.md
  │   │
  │   └── Synthesizer ──▶ _package-pass-1.md
  │                       _package-pass-2.md
  │                       _package-pass-3.md
  │
  ├── Phase 3: BUILD ──────── 1 builder (Opus) × 3 rotation passes
  │   ├── Pass 1 (Structure) ──▶ _build-pass-1.html
  │   ├── Pass 2 (Enrichment) ─▶ _build-pass-2.html
  │   └── Pass 3 (Hardening) ──▶ _build-final.html
  │
  ├── Phase 4: EVALUATE ───── Screenshots + 5 PA auditors (Opus, parallel)
  │   │                        + 1 Weaver (Opus)
  │   └──▶ _pa/synthesis.md (verdict: SHIP / REFINE / REBUILD)
  │
  └── Phase 5: REFINE ──────── 1 refine builder (Opus, if needed, max 2 cycles)
      └──▶ _build-final.html (refined)
```

**Total agents per run:** 14-15 (1 TC + 5 specialists + 1 synthesizer + 1 builder×3 + 5 PA + 1 weaver + 0-1 refine)

---

## 4. PHASE 1: DERIVE (Tension-Composition)

**Identical to current /compose Phase 1.** No changes.

**Agent:** 1 Opus TC agent
**Input:** content.md + TC SKILL.md + identity files
**Output:** `_tc-brief.md` (conviction brief — metaphor, zones, spatial direction, mechanisms suggested, emotional arc)
**Est. Cost:** $3-5 | **Est. Time:** ~10 min

**Orchestrator validates before proceeding:**
- Brief has all 6 sections (World-Description, Calibration, Opposition Map, Compositional Arc, Creative Conditions, Content Map)
- Section 1 contains a definitive metaphor statement
- Section 4 contains at least 3 creative waypoints
- Brief is conviction-driven (creative invitations, not compliance checklists)

---

## 5. PHASE 2: RESEARCH (Specialist Team)

**This is the NEW phase — the core of the tripod.**

### 5.1 Common Input (ALL specialists receive)

Every specialist receives these BEFORE their domain-specific files:

1. **content.md** — the article being designed (so they know WHAT they're curating FOR)
2. **_tc-brief.md** — the conviction brief (so they know the METAPHOR/LENS to curate THROUGH)
3. **Their specific task instructions** — what to read, what to produce, quality floor

### 5.2 Specialist 1: Findings Mapper

**Reads (Layer 1 + Layer 6a) — ~4,810 lines:**

| File | Path | Lines |
|------|------|-------|
| R1-DOCUMENTATION-PATTERNS.md | design-system/research/ | 584 |
| R2-CREATIVE-LAYOUTS.md | design-system/research/ | 810 |
| R3-DENSITY-DIMENSIONS.md | design-system/research/ | 553 |
| R4-AXIS-INNOVATIONS.md | design-system/research/ | 990 |
| R5-COMBINATION-THEORY.md | design-system/research/ | 784 |
| RESEARCH-SYNTHESIS.md | design-system/research/ | 383 |
| R5-EVALUATION-MATRIX.md | design-system/validated-explorations/combination/ | 706 |

**Task:** For each of 337 raw findings, assess relevance to THIS content + THIS metaphor. Rate: HIGH / MEDIUM / LOW / SKIP. For HIGH findings: translate into a build-specific CSS action with expected visual evidence. Cross-reference R5 evaluation matrix for combination logic.

**Output:** `_specialist-1-findings.md` (~100-150 lines)

**Quality floor:** Minimum 20 HIGH findings. Each HIGH finding must include: finding ID, relevance rationale, specific CSS action for THIS build. Recipe format (verbs: apply, deploy, encode), not checklist format (verify, ensure).

### 5.3 Specialist 2: Validation Mapper

**Reads (Layer 2 + Layer 5 + Layer 6b) — ~4,827 lines:**

| File | Path | Lines |
|------|------|-------|
| component-findings.md | specification/provenance/stage-1-components/ | 196 |
| DD-outbound-findings.md | specification/provenance/stage-2-density-dd/ | 232 |
| OD-outbound-findings.md | specification/provenance/stage-3-organization-od/ | 959 |
| AD-outbound-findings.md | specification/provenance/stage-4-axis-ad/ | 680 |
| HANDOFF-DD-TO-OD.md | specification/provenance/stage-2-density-dd/ | 338 |
| HANDOFF-OD-TO-AD.md | specification/provenance/stage-3-organization-od/ | 351 |
| HANDOFF-AD-TO-CD.md | specification/provenance/stage-4-axis-ad/ | 447 |
| OD-SYNTHESIS.md | specification/provenance/stage-3-organization-od/ | 672 |
| AD-SYNTHESIS.md | specification/provenance/stage-4-axis-ad/ | 306 |
| 09-CD-SYNTHESIS-BRIEFING.md | archive/knowledge-architecture/ | 646 |

**Task:** Find findings VALIDATED in actual HTML builds. Follow provenance chains (DD-F → OD-F → AD-F). Track which findings were ELEVATED (gained confidence) or BOUNDED (limits found) across stages. Map validated findings to THIS build. Identify cross-stage reinforcement patterns (findings validated in 3+ stages = highest confidence).

**Output:** `_specialist-2-validated.md` (~80-120 lines)

**Quality floor:** Minimum 15 validated findings with provenance chains. Each must show: finding ID, stage progression, validation evidence, build-specific application.

### 5.4 Specialist 3: Case Study Analyst

**Reads (Layer 3) — ~5,120 lines:**

| File | Path | Lines |
|------|------|-------|
| DD-003-islands.md | compositional-core/case-studies/ | 405 |
| DD-004-layers.md | same | 428 |
| DD-006-fractal.md | same | 377 |
| dd-003-islands-visual.md | same | 462 |
| dd-004-layers-visual.md | same | 144 |
| dd-006-fractal-visual.md | same | 165 |
| OD-001-conversational.md | same | 297 |
| OD-004-confidence.md | same | 309 |
| OD-006-creative.md | same | 333 |
| CD-001-reasoning-inside-code.md | same | 415 |
| CD-005-multi-axis-transition.md | same | 386 |
| CD-006-pilot-migration.md | same | 387 |
| ANTI-PRESCRIPTION-TEMPLATE.md | same | 471 |
| README.md | same | 541 |

**Task:** Find case studies with STRUCTURAL AFFINITY to this content + metaphor. Not visual similarity — structural logic similarity. Extract: the PROCESSES used (how decisions were made), the CSS that produced richness (actual property values), the zone structures (how space was divided), the mechanism deployment sequences (what order mechanisms were applied). Anti-prescription: show how the case study THOUGHT, not what it LOOKS LIKE.

**Output:** `_specialist-3-casestudies.md` (~100-150 lines)

**Quality floor:** 3-5 case studies with structural affinity identified. Each must include: affinity rationale, process extraction, at least 10 lines of actual CSS from the case study adapted for THIS build.

### 5.5 Specialist 4: Constraints Compiler

**Reads (Layer 4 + Layer 9 + Layer 11) — ~5,162 lines:**

| File | Path | Lines |
|------|------|-------|
| AD-CONVENTION-SPEC.md | specification/provenance/stage-4-axis-ad/ | 1,093 |
| AD-PA-CONVENTIONS.md | specification/provenance/stage-4-axis-ad/ | 970 |
| OD-CONVENTION-SPEC.md | specification/provenance/stage-3-organization-od/ | 468 |
| identity.md | compositional-core/identity/ | 87 |
| vocabulary.md | compositional-core/identity/ | 55 |
| tokens.css | compositional-core/vocabulary/ | 124 |
| registry.md | specification/anti-patterns/ | 354 |
| ACCUMULATED-IDENTITY-v2.md | archive/knowledge-architecture/core/ | 519 |
| BACKBONE.md | design-system/specification/ | 542 |
| OD-RESEARCH-GATE.md | specification/provenance/stage-3-organization-od/ | 440 |
| AD-RESEARCH-GATE.md | specification/provenance/stage-4-axis-ad/ | 510 |

**Task:** Compile the CONSTRAINT LANDSCAPE for this build. Soul checklist (non-negotiables). Locked token values from tokens.css. Risk-profile anti-patterns specifically for THIS content type. Extract convention REASONING (WHY rules exist, from AD-PA-CONVENTIONS) not just rules. Identify creative territory boundaries (where the builder has freedom vs where constraints are absolute).

**Output:** `_specialist-4-constraints.md` (~60-80 lines)

**Quality floor:** Soul checklist (all non-negotiables listed). Minimum 6 anti-patterns risk-profiled with: risk level (HIGH/MEDIUM/LOW), WHY it's risky for this specific content, specific CSS mitigation. Token values included as reference.

### 5.6 Specialist 5: Protocol & Exemplar Analyst

**Reads (Layer 7 + Layer 8) — ~3,892 lines:**

| File | Path | Lines |
|------|------|-------|
| MASTER-AD-EXECUTION-SPEC.md | archive/knowledge-architecture/ | 1,407 |
| MASTER-CD-EXECUTION-PROMPT.md | design-system/pipeline/ | 930 |
| research-package-cd-001.md | archive/combination-research/ | 249 |
| research-package-cd-002.md | archive/combination-research/ | 240 |
| research-package-cd-003.md | archive/combination-research/ | 249 |
| research-package-cd-004.md | archive/combination-research/ | 250 |
| research-package-cd-005.md | archive/combination-research/ | 226 |
| research-package-cd-006.md | archive/combination-research/ | 341 |

**Task:** Extract the CONSUMPTION PROTOCOL from master execution specs — how should a builder sequence its reading and building? Study Agent-0C's 6 packages as FORMAT exemplars — what structural patterns made them effective (recipe format, ASCII density diagrams, component selection with min/max counts, risk profiling)? Determine the optimal template structure for the synthesizer to follow. Define the anti-orphaning principle and how the builder should trace CSS properties to findings.

**Output:** `_specialist-5-protocol.md` (~60-80 lines)

**Quality floor:** Consumption protocol defined (reading order, absorption sequence, recipe verbs). Agent-0C's effective patterns identified (minimum 5 patterns). Template structure proposed for synthesizer. Anti-orphaning principle stated.

### 5.7 Synthesizer: Package Assembler

**Runs AFTER all 5 specialists complete (sequential, not parallel).**

**Reads:**
- All 5 specialist outputs (~400-580 lines total)
- `_tc-brief.md` (conviction brief — the metaphor + spatial direction)
- `content.md` (the original article)

**Task:**
1. **DEDUPLICATE:** Where specialists overlap (e.g., both S1 and S2 flagged DD-F-006), merge into one actionable entry with the richer rationale.
2. **RESOLVE CONFLICTS:** If specialists disagree, use TC brief as tiebreaker (the metaphor determines which approach fits).
3. **INTEGRATE:** Weave findings, CSS examples, constraints, and protocol into ONE cohesive recipe document.
4. **STRUCTURE FOR ROTATION:** Organize into 3 pass-groups (see Section 6).
5. **FRONT-LOAD per pass:** Most critical content first within each group.
6. **USE RECIPE FORMAT:** Sequenced verbs (Read → Internalize → Map → Deploy → Verify). NOT checklist format (Verify → Fail if → Must be).

**Produces THREE files (not one):**

- `_package-pass-1.md` — Foundations (~130-170 lines)
  - Section 0: Soul Checklist (~15 lines)
  - Section 1: Build Context — metaphor + content map (~30 lines)
  - Section 2: Mechanism Selections + full rationale + CSS examples (~100-120 lines)
  - Section 9: Consumption Protocol — how to read and sequence work (~20 lines)

- `_package-pass-2.md` — Enrichment (~130-180 lines)
  - Section 3: Findings → Build-Specific Actions (~80-100 lines)
  - Section 4: Zone Architecture — zone-by-zone recipe with ASCII density diagram (~50-70 lines)
  - Section 5: Case Study Processes + CSS that worked (~50-60 lines)

- `_package-pass-3.md` — Hardening (~110-150 lines)
  - Section 6: Anti-Patterns risk-profiled + CSS mitigations (~30-40 lines)
  - Section 7: CSS Examples from validated explorations (~40-60 lines)
  - Section 8: Structural Propositions — testable hypotheses (~20-30 lines)

**Quality floor:** Total across 3 files: 400-600 lines. Each file must be self-contained (readable without the others). Pass 1 file must contain all mechanism selections. Pass 2 must contain all zone-level instructions. Pass 3 must contain all defensive material. No file should be below 100 lines.

**WHY three files instead of one:** The orchestrator passes one file per builder pass. This avoids requiring the orchestrator to parse section markers from a single document — a fragile operation (50-60% reliability). File-based handoffs are robust (85%+ reliability). See Section 11 (Known Obstacles).

---

## 6. PHASE 3: BUILD (3-Pass Rotation)

### 6.1 Why Rotation

Transformer attention follows a U-shaped curve: primacy (beginning) and recency (end) get disproportionate weight; the middle gets compressed. In a 400-600 line document, sections 3-6 sit in the attention trough — exactly where the richest build-specific content lives.

Rotation ensures EVERY section gets primacy position exactly once by splitting the build into 3 passes, each with different package sections at the top of the context.

### 6.2 Builder Pass 1: STRUCTURE

**Agent:** 1 Opus builder
**Receives (in this order — order matters for attention):**
1. `_package-pass-1.md` (Sections 0, 1, 2, 9 — in primacy position)
2. content.md
3. `_tc-brief.md`
4. tokens.css (65 CSS custom properties)
5. components.css (locked component implementations)
6. Builder instructions for Pass 1

**Builder instructions (Pass 1):**
> Read and internalize the research package FIRST. It tells you the mechanisms to deploy, the soul constraints, and HOW to sequence your work.
>
> Then read the conviction brief. It tells you the metaphor, the emotional arc, the spatial direction.
>
> Then read the content. Map it to zones based on the brief's compositional arc.
>
> BUILD: Create the initial HTML structure. Establish the zone skeleton. Deploy the mechanisms from Section 2 of the package. Write the full CSS + HTML — self-contained .html file with all CSS inline in a `<style>` block.
>
> Use concept-based CSS naming from your metaphor's concepts (`--stratum-depth`, not `--section-bg`).
>
> Soul constraints (non-negotiable from Section 0): border-radius: 0, box-shadow: none, no gradients, no semi-transparent backgrounds, no cool grays. Container max-width: 940-960px.
>
> Write responsive CSS for 1440px, 1024px, 768px viewports.

**Outputs:** `_build-pass-1.html`
**Also outputs:** `_pass-1-decisions.md` (~20-30 lines — what was built, which mechanisms deployed, what zones were created) — this is the "summary of Pass 1" that Pass 2 receives.

### 6.3 Builder Pass 2: ENRICHMENT

**Agent:** Same builder model (new Opus spawn)
**Receives (in this order):**
1. `_package-pass-2.md` (Sections 3, 4, 5 — in primacy position)
2. `_pass-1-decisions.md` (what Pass 1 built and why)
3. `_build-pass-1.html` (the HTML from Pass 1)
4. Builder instructions for Pass 2

**Builder instructions (Pass 2):**
> You are ENRICHING an existing HTML page, not starting from scratch.
>
> The research package (Section 3) contains findings mapped to specific build actions. Apply them zone-by-zone.
>
> Section 4 contains the zone architecture with an ASCII density diagram. Verify your zones match the intended density progression. Adjust if needed.
>
> Section 5 contains case study processes and CSS examples from explorations that share structural logic with this build. Integrate their techniques — not their visual appearance, but their PROCESSES and CSS patterns.
>
> DO NOT rebuild from scratch. Refine what exists. Add density, deploy findings, integrate case study CSS. The structure from Pass 1 is your foundation.

**Outputs:** `_build-pass-2.html`
**Also outputs:** `_pass-2-decisions.md` (~20-30 lines — what was enriched, which findings applied, what changed)

### 6.4 Builder Pass 3: HARDENING

**Agent:** Same builder model (new Opus spawn)
**Receives (in this order):**
1. `_package-pass-3.md` (Sections 6, 7, 8 — in primacy position)
2. `_pass-1-decisions.md` + `_pass-2-decisions.md` (full build history)
3. `_build-pass-2.html` (the HTML from Pass 2)
4. Builder instructions for Pass 3

**Builder instructions (Pass 3):**
> You are HARDENING the build — this is the final pass before audit.
>
> Section 6 contains anti-patterns risk-profiled for this specific content. Check EVERY anti-pattern listed. If ANY is present in the current HTML, apply the specified CSS mitigation immediately.
>
> Section 7 contains validated CSS examples from prior explorations. Integrate any that fit — these are proven to produce rich output.
>
> Section 8 contains structural propositions — hypotheses about how the metaphor should manifest visually. Test each one against the current build. If the build doesn't embody a proposition, adjust CSS to move toward it.
>
> Focus: defensive quality. Catch problems, integrate proven CSS, verify propositions.

**Outputs:** `_build-final.html`
**Also outputs:** `_builder-reflection.md` (~30-50 lines — 6 dimensions: conviction fidelity, alternatives considered, surprises, impulses resisted, experience quality, unresolved tensions)

---

## 7. PHASE 4: EVALUATE (Perceptual Audit)

**Identical to current /compose Phase 3, with one addition.**

### 7.1 Screenshots (Orchestrator does this)

Same protocol as /compose:
1. Serve `_build-final.html` via HTTP (`python3 -m http.server 8080`)
2. Playwright MCP captures at 1440px, 1024px, 768px (full-page + above-fold)
3. Disable animations, wait for fonts
4. Save to `_screenshots/` and copy sanitized versions to `_pa/_images/`

### 7.2 PA Auditors (5 parallel Opus agents)

**Same isolation as /compose:** Auditors receive ONLY sanitized screenshots + their assigned PA questions. NO conviction brief, NO metaphor name, NO research package.

**NEW addition:** After PA auditors complete, the WEAVER receives the research package alongside auditor reports (but still NOT the conviction brief or metaphor). This lets the weaver check: "Did the builder follow the research package's instructions?"

### 7.3 Weaver

Same as /compose weaver protocol, plus:
- Receives `_package-pass-1.md`, `_package-pass-2.md`, `_package-pass-3.md`
- Produces an additional **Output 4: Package Compliance** section that maps: what the package instructed vs what the build actually did. Section-by-section gap analysis.
- This is the key instrumentation for measuring whether the tripod actually works.

---

## 8. PHASE 5: REFINE (Fix Cycles)

Same as /compose Phase 4 with one enhancement:

**Fix builder receives relevant package sections.** If PA found issues in zone architecture, the fix builder gets `_package-pass-2.md` (which contains the zone instructions). If issues are anti-pattern related, it gets `_package-pass-3.md`.

Max 2 fix cycles (matching /compose's maximum). Each cycle: re-capture screenshots, re-run PA (or subset).

---

## 9. INSTRUMENTATION & LOGGING

Three layers of visibility, all baked into the skill:

### Layer A: Agent-Level Logging

Every agent writes a structured log alongside its output:

```markdown
## Agent Log: [Agent Name]
- Files read: [list with line counts]
- Decisions made: [key decisions with rationale]
- Output size: [line count]
- Output size: [line count]
- Quality self-assessment: [does this meet the quality floor? Y/N, why]
```

Each specialist writes this as a footer on their output file. The synthesizer includes a log section. Each builder pass includes a decisions file.

### Layer B: Phase Checkpoint Reflections

After each PHASE completes, the orchestrator writes a checkpoint:

```markdown
## Phase [N] Checkpoint
- Phase: [DERIVE / RESEARCH / BUILD / EVALUATE / REFINE]
- Agents spawned: [count]
- Artifacts produced: [list with sizes]
- Expected vs actual: [did outputs meet quality floors?]
- Quality concerns: [any red flags?]
- Cumulative cost estimate: [$X so far]
- Decision: [proceed / re-run / abort]
```

Written to: `_pipeline-log.md` (appended after each phase)

### Layer C: Output Comparison Report

After PA completes, a final comparison document:

```markdown
## Package → Build Comparison Report
For each package section:
  - Section N: [what the package instructed]
  - Build evidence: [what the builder actually did]
  - Gap: [what's missing or divergent]
  - PA confirmation: [did auditors flag this gap?]
```

The Weaver produces this as **Output 4: Package Compliance** within `_pa/synthesis.md`. The orchestrator then extracts it into a standalone `_comparison-report.md` for archival purposes.

This is the key diagnostic: it shows exactly WHERE knowledge failed to transfer from researcher → builder → HTML.

---

## 10. THE ACCUMULATED KNOWLEDGE BASE

57 files, 26,528 lines, across 11 layers. Most paths relative to `design-system/`. Exception: `archive/` files are at the PROJECT ROOT (not inside `design-system/`).

### Layer 1: Original Research (4,104 lines — 6 files)
The RAW findings from external competitive analysis. 337 total findings.

- `research/R1-DOCUMENTATION-PATTERNS.md` (584 lines) — 28 findings
- `research/R2-CREATIVE-LAYOUTS.md` (810 lines) — 27 findings
- `research/R3-DENSITY-DIMENSIONS.md` (553 lines) — 51 findings
- `research/R4-AXIS-INNOVATIONS.md` (990 lines) — 192 findings
- `research/R5-COMBINATION-THEORY.md` (784 lines) — 39 findings
- `research/RESEARCH-SYNTHESIS.md` (383 lines) — cross-research framework

### Layer 2: Stage Findings (2,067 lines — 4 files)
Findings VALIDATED through building actual HTML explorations.

- `specification/provenance/stage-1-components/component-findings.md` (196 lines) — 21 COMP-F findings
- `specification/provenance/stage-2-density-dd/DD-outbound-findings.md` (232 lines) — 18 DD-F findings
- `specification/provenance/stage-3-organization-od/OD-outbound-findings.md` (959 lines) — 17 OD-F findings
- `specification/provenance/stage-4-axis-ad/AD-outbound-findings.md` (680 lines) — 28 AD-F findings

### Layer 3: Case Studies (5,120 lines — 14 files)
Anti-prescription format — shows PROCESS, not templates.

- `compositional-core/case-studies/DD-003-islands.md` (405 lines)
- `compositional-core/case-studies/DD-004-layers.md` (428 lines)
- `compositional-core/case-studies/DD-006-fractal.md` (377 lines)
- `compositional-core/case-studies/dd-003-islands-visual.md` (462 lines)
- `compositional-core/case-studies/dd-004-layers-visual.md` (144 lines)
- `compositional-core/case-studies/dd-006-fractal-visual.md` (165 lines)
- `compositional-core/case-studies/OD-001-conversational.md` (297 lines)
- `compositional-core/case-studies/OD-004-confidence.md` (309 lines)
- `compositional-core/case-studies/OD-006-creative.md` (333 lines)
- `compositional-core/case-studies/CD-001-reasoning-inside-code.md` (415 lines)
- `compositional-core/case-studies/CD-005-multi-axis-transition.md` (386 lines)
- `compositional-core/case-studies/CD-006-pilot-migration.md` (387 lines)
- `compositional-core/case-studies/ANTI-PRESCRIPTION-TEMPLATE.md` (471 lines)
- `compositional-core/case-studies/README.md` (541 lines)

### Layer 4: Convention Specs (2,531 lines — 3 files)
Design rules + WHY they exist.

- `specification/provenance/stage-4-axis-ad/AD-CONVENTION-SPEC.md` (1,093 lines)
- `specification/provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md` (970 lines)
- `specification/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md` (468 lines)

### Layer 5: Handoffs (1,136 lines — 3 files)
Stage transition gates carrying forward key findings.

- `specification/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` (338 lines)
- `specification/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` (351 lines)
- `specification/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` (447 lines)

### Layer 6: Synthesis & Evaluation (3,994 lines — 7 files)
Cross-stage analysis and finding-to-build mappings.

- `validated-explorations/combination/R5-EVALUATION-MATRIX.md` (706 lines)
- `archive/knowledge-architecture/09-CD-SYNTHESIS-BRIEFING.md` (646 lines)
- `specification/provenance/stage-3-organization-od/OD-SYNTHESIS.md` (672 lines)
- `specification/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` (306 lines)
- `specification/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` (522 lines)
- `specification/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` (496 lines)
- `specification/provenance/stage-2-density-dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` (646 lines)

### Layer 7: Master Execution Specs (2,337 lines — 2 files)
How to consume knowledge + builder protocols.

- `archive/knowledge-architecture/MASTER-AD-EXECUTION-SPEC.md` (1,407 lines)
- `pipeline/MASTER-CD-EXECUTION-PROMPT.md` (930 lines)

### Layer 8: Agent-0C's Packages (1,555 lines — 6 files)
Format exemplars of what good curation looks like.

- `archive/combination-research/research-package-cd-001.md` (249 lines)
- `archive/combination-research/research-package-cd-002.md` (240 lines)
- `archive/combination-research/research-package-cd-003.md` (249 lines)
- `archive/combination-research/research-package-cd-004.md` (250 lines)
- `archive/combination-research/research-package-cd-005.md` (226 lines)
- `archive/combination-research/research-package-cd-006.md` (341 lines)

### Layer 9: Identity, Tokens, Anti-Patterns (1,681 lines — 6 files)
Soul constraints + locked values + system narrative.

- `compositional-core/identity/identity.md` (87 lines)
- `compositional-core/identity/vocabulary.md` (55 lines)
- `compositional-core/vocabulary/tokens.css` (124 lines)
- `specification/anti-patterns/registry.md` (354 lines)
- `archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md` (519 lines)
- `specification/BACKBONE.md` (542 lines)

### Layer 10: Current Pipeline Vocabulary (1,053 lines — 4 files)
What the builder gets TODAY — the compressed derivatives. REPLACED by research package.

- `compositional-core/grammar/mechanisms.md` (88 lines)
- `compositional-core/grammar/grammar.md` (149 lines)
- `compositional-core/components/components.css` (779 lines)
- `compositional-core/components/components.md` (37 lines)

### Layer 11: Research Gates (950 lines — 2 files)
How research was filtered at each stage.

- `specification/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` (440 lines)
- `specification/provenance/stage-4-axis-ad/AD-RESEARCH-GATE.md` (510 lines)

### Plus: 18 Validated Exploration HTML Files
Located in `validated-explorations/density/`, `organizational/`, `combination/`.

---

## 11. KNOWN OBSTACLES & MITIGATIONS

### Obstacle 1: Context Pressure on Orchestrator

**Problem:** By Phase 4, the orchestrator has processed ~15+ tool calls. Earlier instructions compress/truncate. Fix cycle logic may degrade.

**Mitigation:**
- `_pipeline-log.md` serves as external memory — the orchestrator re-reads it at each phase boundary
- Critical instructions are repeated at each phase's entry point in the skill file (not just at the top)
- The skill file uses explicit section headers the orchestrator can Ctrl+F to: `## Phase 4: EVALUATE — START HERE`

### Obstacle 2: Specialist Producing Thin Output

**Problem:** A specialist reads 4,000+ lines but produces only 30 lines of generic advice.

**Mitigation:**
- Quality floors are specified per-specialist (minimum line counts, minimum finding counts)
- Each specialist prompt includes 2-3 exemplar lines showing the expected depth
- The orchestrator checks output size before passing to synthesizer: `if lines < quality_floor: re-run with "Your output was N lines. The quality floor is M lines. Go deeper."`
- However: the orchestrator may not reliably enforce re-runs (60% fidelity). Accept that some specialists will produce thinner output and the synthesizer must work with what it gets.

### Obstacle 3: Rotation Section Parsing (SOLVED)

**Problem:** Having the orchestrator extract sections from a single file is fragile (50-60% fidelity).

**Solution:** THREE separate files (`_package-pass-1.md`, `_package-pass-2.md`, `_package-pass-3.md`). No parsing needed. Pure file-based handoffs. Reliability: 85%+.

### Obstacle 4: Builder Ignoring Pass 2/3 Material

**Problem:** Pass 2/3 builder spawns are new agents. They don't have Pass 1's "memory." The decisions.md file is a proxy, not true continuity.

**Mitigation:**
- `_pass-N-decisions.md` provides compressed continuity (20-30 lines of what was done and why)
- The previous pass's HTML is the strongest continuity signal — the builder can READ the CSS to understand what was done
- Pass 2/3 instructions explicitly say "DO NOT rebuild from scratch — refine what exists"
- Accept some quality loss vs a single-pass builder — the rotation benefit (full attention on each section) likely outweighs the continuity cost

### Obstacle 5: Synthesizer Producing Generic Package

**Problem:** The synthesizer merges 5 specialist outputs but loses specificity — producing a document that could apply to any content.

**Mitigation:**
- Synthesizer receives content.md + TC brief alongside specialist outputs — anchoring on the SPECIFIC content and metaphor
- Quality check: "Does every section reference specific aspects of THIS article? If a section could apply to any article, it's too generic — rewrite with content-specific details."
- The synthesizer prompt includes Agent-0C's cd-001 and cd-006 packages as exemplars of content-specific curation

### Obstacle 6: Cost Overrun

**Problem:** 14-15 Opus agents could exceed $50 if specialists are verbose or the builder takes long passes.

**Mitigation:**
- Specialists have output CEILINGS as well as floors (S1: 100-150 lines, not 300)
- Builder passes have max token limits in their prompts
- The orchestrator tracks estimated cost in `_pipeline-log.md` at each checkpoint
- If estimated cost exceeds $50 at any checkpoint, the orchestrator pauses and reports to user

### Obstacle 7: Contrarian's Model Variable

**Problem:** Quality improvement might come from using Opus everywhere (already the case in /compose) rather than from the tripod.

**Mitigation:**
- This is an experimental risk, not an engineering obstacle
- The `_comparison-report.md` output will show whether research package instructions were actually followed — if the builder follows them AND quality improves, the tripod thesis is supported
- If the builder ignores the package and quality is still good, the model variable thesis wins
- We accept this uncertainty — the pipeline is designed to produce diagnostic data either way

### Obstacle 8: PA Auditors Can't Assess Package Compliance

**Problem:** PA auditors work from screenshots only (fresh-eyes principle). They can't check if DD-F-006 was applied at 4 scales from a screenshot alone.

**Mitigation:**
- The WEAVER (not auditors) receives the research package for compliance checking
- Auditors remain fresh-eyes (perceptual quality only)
- Weaver produces Package Compliance section (Output 4) based on reading both the package and the HTML source
- This separates perceptual quality (auditors) from instruction compliance (weaver)

### Obstacle 9: Skill File Size

**Problem:** This skill is significantly more complex than /compose (309 lines). It could exceed 600-800 lines, which increases the chance the orchestrator loses track of later sections.

**Mitigation:**
- The skill file uses a strict "current phase" pattern — each phase section is self-contained
- The orchestrator is instructed to re-read the relevant phase section before executing it
- Critical information is repeated (soul constraints appear in Phase 0 setup AND in builder instructions)
- The skill file includes a "quick reference" at the top listing all phases and their outputs

### Obstacle 10: Specialist File Loading

**Problem:** Specialists need to read 3,000-5,000 lines of files. These must be loaded into their agent prompts since subagents can't access conversation context. Loading 5,000 lines into a prompt is expensive.

**Mitigation:**
- Specialists are spawned with `subagent_type: "general-purpose"` which gives them Read tool access
- Instead of including all file contents in the prompt, the prompt lists the file paths and instructs the specialist to read them
- This reduces prompt size but means specialists must use tool calls to read files (slower but cheaper)
- Trade-off accepted: slightly slower specialist execution in exchange for manageable prompt sizes

---

## 12. PROVEN PATTERNS FROM /COMPOSE

These patterns are proven to work in the existing `/compose` skill and should be reused:

1. **Orchestrator handles plumbing, not creativity.** Load files, spawn agents, take screenshots, route fixes. Don't make compositional decisions.

2. **Agents are context-isolated.** TC doesn't see components. Builder doesn't see PA questions. PA auditors don't see the brief. Isolation prevents contamination.

3. **File-based handoffs are the source of truth.** The output directory is the canonical state. If context compresses, re-read from disk.

4. **All agents are Opus.** TC needs creative derivation. Specialists need deep reading comprehension. Builder needs compositional fluency. PA needs perceptual sensitivity.

5. **Screenshots before PA, not during.** Orchestrator captures all screenshots, saves to disk. PA auditors read saved images. Eliminates Playwright contention.

6. **Fresh-eyes PA is non-negotiable.** Auditors get sanitized screenshots only. No metaphor name, no pipeline context.

7. **Maximum 2 fix cycles.** Track by counting `fix-N-feedback.md` files. If fix-2 exists, stop.

8. **Include full file contents in agent prompts where possible.** Agents cannot read conversation context. Either include the content or provide file paths with Read tool access.

---

## 13. AGENT-0C'S CURATION AS EXEMPLAR

Agent-0C created 6 research packages during the CD exploration stage. Key patterns that made them effective:

### Template Structure (8 sections)
1. Soul checklist (binary checks)
2. Common references (shared across all builders)
3. Combination assignment (specific pattern triple for THIS builder)
4. Component selection (which components, with min/max appearance counts)
5. R-5 findings (mapped to THIS builder's specific actions, not generic)
6. Density pattern (ASCII diagram + pixel-level breathing zones)
7. Anti-patterns (risk-profiled for THIS builder's content type)
8. Scoring criteria (calibrated target score)

### Recipe Format
- Sequenced verbs: Read → Select → Deploy → Assess
- NOT checklist verbs: Verify → Fail if → Must be
- Each section tells the builder what to DO, in what ORDER, with what EXPECTED RESULT

### Per-Builder Customization
- CD-001 got 5 of 11 components, CD-006 got all 11
- CD-001 got 11 of 39 R-5 findings, CD-006 got all 39
- Anti-patterns were risk-profiled differently per content type
- Score targets were calibrated (CD-001: 35-37/40, CD-006: 39-40/40)

### What We Go Deeper On
- Full rationale + CSS examples from case studies (Agent-0C didn't have case studies)
- Zone architecture with pixel-level CSS values (more detailed density data)
- Anti-pattern mitigations with specific CSS alternatives (audit data shows what fixed issues)
- Structural propositions (hypotheses the PA can test)
- Case study processes (how decisions were made, not just results)

---

## 14. FILE ROUTING MAP

Which files go to which agents. This is the critical reference for building agent prompts.

### Phase 1: TC Agent
- content.md ✓
- ~/.claude/skills/tension-composition/SKILL.md ✓
- design-system/compositional-core/identity/identity.md ✓
- design-system/compositional-core/identity/vocabulary.md ✓

### Phase 2: All Specialists (common input)
- content.md ✓
- _tc-brief.md ✓

### Phase 2: Specialist 1 (Findings Mapper) — see Section 5.2
### Phase 2: Specialist 2 (Validation Mapper) — see Section 5.3
### Phase 2: Specialist 3 (Case Study Analyst) — see Section 5.4
### Phase 2: Specialist 4 (Constraints Compiler) — see Section 5.5
### Phase 2: Specialist 5 (Protocol Analyst) — see Section 5.6

### Phase 2: Synthesizer
- All 5 specialist outputs ✓
- _tc-brief.md ✓
- content.md ✓
- (exemplar reference: archive/combination-research/research-package-cd-001.md, cd-006.md)

### Phase 3: Builder Pass 1
- _package-pass-1.md ✓ (PRIMACY)
- content.md ✓
- _tc-brief.md ✓
- design-system/compositional-core/vocabulary/tokens.css ✓
- design-system/compositional-core/components/components.css ✓

### Phase 3: Builder Pass 2
- _package-pass-2.md ✓ (PRIMACY)
- _pass-1-decisions.md ✓
- _build-pass-1.html ✓

### Phase 3: Builder Pass 3
- _package-pass-3.md ✓ (PRIMACY)
- _pass-1-decisions.md + _pass-2-decisions.md ✓
- _build-pass-2.html ✓

### Phase 4: PA Auditors (5 parallel)
- _pa/_images/ (sanitized screenshots only) ✓
- Stripped PA skill (assigned questions only) ✓

### Phase 4: Weaver
- _pa/_images/ ✓
- All 5 auditor reports ✓
- Weaver protocol from PA skill ✓
- _package-pass-1.md + _package-pass-2.md + _package-pass-3.md ✓ (for compliance check)

### Phase 5: Refine Builder (if needed)
- _build-final.html ✓
- _pa/synthesis.md (Weaver's findings) ✓
- Relevant _package-pass-N.md (targeted) ✓

---

## 15. COST & TIMING ESTIMATES

| Phase | Agents | Model | Est. Cost | Est. Time | Sequential/Parallel |
|-------|--------|-------|-----------|-----------|-------------------|
| 1. DERIVE | 1 TC | Opus | $3-5 | ~10 min | Sequential |
| 2. RESEARCH (specialists) | 5 | Opus | $5-10 | ~12 min | Parallel |
| 2. RESEARCH (synthesizer) | 1 | Opus | $3-5 | ~10 min | Sequential (after specialists) |
| 3. BUILD (3 passes) | 1 × 3 | Opus | $12-18 | ~30-40 min | Sequential |
| 4. EVALUATE | 5 PA + 1 Weaver | Opus | $5-10 | ~15 min | PA parallel, Weaver sequential |
| 5. REFINE (if needed) | 0-1 | Opus | $0-8 | ~0-15 min | Sequential |
| **TOTAL** | **14-15** | | **$28-56** | **~75-100 min** | |

vs. current /compose: 8-9 agents, $15-30, 40-55 min.

---

## 16. OUTPUT MANIFEST

```
ephemeral/builds/{content-name}-{date}/
├── _build-final.html ............... The designed page (DELIVERABLE)
├── _tc-brief.md .................... TC conviction brief
├── _specialist-1-findings.md ....... Raw findings mapping
├── _specialist-2-validated.md ...... Validated findings mapping
├── _specialist-3-casestudies.md .... Case study analysis
├── _specialist-4-constraints.md .... Constraint compilation
├── _specialist-5-protocol.md ....... Protocol analysis
├── _package-pass-1.md .............. Research package: Foundations
├── _package-pass-2.md .............. Research package: Enrichment
├── _package-pass-3.md .............. Research package: Hardening
├── _build-pass-1.html .............. Structure pass output
├── _build-pass-2.html .............. Enrichment pass output
├── _pass-1-decisions.md ............ Pass 1 build decisions
├── _pass-2-decisions.md ............ Pass 2 build decisions
├── _builder-reflection.md .......... Builder's 6-dimension reflection
├── _pipeline-log.md ................ Phase checkpoint reflections
├── _comparison-report.md ........... Package vs build gap analysis
├── _screenshots/ ................... Viewport captures
│   ├── 1440-full.png, 1440-fold.png
│   ├── 1024-full.png, 1024-fold.png
│   └── 768-full.png, 768-fold.png
├── _pa/ ............................ Perceptual audit
│   ├── _images/ .................... Sanitized screenshots
│   ├── auditor-1.md through auditor-5.md
│   └── synthesis.md ................ Weaver's verdict + package compliance
└── _fixes/ ......................... Fix cycle artifacts (if any)
    ├── fix-1-feedback.md
    └── fix-1-page.html
```

---

## 17. KEY PRINCIPLES

1. **The orchestrator handles plumbing, not creativity.** File loading, agent spawning, screenshots, routing. Never compositional decisions.

2. **Three files, not one.** Research package split into 3 pass-group files. No section parsing by the orchestrator. File-based handoffs only.

3. **Recipe format, not checklist format.** Sequenced verbs (Read → Deploy → Verify), not constraints (Must be → Fail if). Agent-0C's most effective pattern.

4. **Per-build curation, not generic vocabulary.** Every research package is unique to THIS content + THIS metaphor. If a package could apply to any article, it's too generic.

5. **Rotation ensures full consumption.** Each package section gets primacy position exactly once. No section sits in the attention trough.

6. **Diagnostic by design.** The comparison report maps package instructions → build evidence → PA confirmation. This shows exactly where knowledge transfer succeeded or failed.

7. **Context management through files.** `_pipeline-log.md` is the orchestrator's external memory. `_pass-N-decisions.md` is the builder's cross-pass continuity. Files survive context compression.

8. **Fresh-eyes PA is non-negotiable.** Auditors get zero pipeline context. Weaver gets the package for compliance checking but NOT the conviction brief.

9. **Quality floors, not quality ceilings.** Specialists must produce minimum output. But don't cap creativity — if a specialist finds 40 HIGH findings, let it produce 200 lines.

10. **All Opus, all the time.** Every agent in this pipeline requires deep comprehension and creative judgment. No cost optimization through model downgrading.
