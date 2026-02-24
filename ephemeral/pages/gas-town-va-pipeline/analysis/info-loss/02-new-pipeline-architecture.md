# Pipeline v3 Architecture: Complete Anatomy

**Agent:** new-pipeline-architect
**Date:** 2026-02-23
**Sources:** SKILL.md, MANIFEST.md, 9 artifact files, 10-pipeline-flow.md
**Total source material:** ~7,500 lines across 12 files

---

## 1. Complete Information Flow Map

### Entry Point

Pipeline v3 begins at `/build-page` (SKILL.md, 60 lines). This is a THIN orchestrator entry point — it contains zero pipeline intelligence. Its sole function is to parse the content path and redirect execution to `MANIFEST.md`.

```
User invokes /build-page {CONTENT_PATH}
        │
        ▼
    SKILL.md (60 lines)
    "Read MANIFEST.md first, then follow the 11-step quickstart"
        │
        ▼
    MANIFEST.md (1,092 lines) — THE authoritative pipeline spec
        │
        ├── References 9 artifact files (~5,400 lines total)
        ├── References council-verdict.md (authoritative override)
        ├── References tokens.css (183 lines) — DIRECT to builder
        └── References components.css (290 lines) — DIRECT to builder
```

### Information Decomposition

The pipeline's intelligence is decomposed into 9 LAYERS distributed across 9 artifact files:

| Layer | ID | Items | Artifact File | Lines |
|-------|----|-------|---------------|-------|
| L1 IDENTITY | SC-01..SC-10 | 33 | artifact-identity-perception.md | 556 |
| L2 PERCEPTION | PT-01..PT-06 | 52 | artifact-identity-perception.md | (shared) |
| L3 SCAFFOLDING | — | 75 | artifact-builder-recipe.md | 857 |
| L4 DISPOSITION | D-01..D-08 | 78 | artifact-builder-recipe.md | (shared) |
| L5 VALUES | — | 94 | artifact-value-tables.md | 226 |
| L6 GATES | G-01..G-42 | 72 | artifact-gate-runner.md | ~1,379 |
| L7 PA | PA-01..PA-68 | 88 | artifact-pa-protocol.md | 1,004 |
| L8 ROUTING | — | 125 | artifact-routing.md | 901 |
| L9 ORCHESTRATION | — | 222 | artifact-orchestrator.md | 971 |
| — | — | — | artifact-tc-brief-template.md | 169 |
| — | — | — | artifact-worked-examples.md | 183 |

**Total tracked items:** 885 (from MANIFEST Section 2)
**Total artifact lines:** ~6,246

### The Two-Channel Information Flow

Pipeline v3 routes information through two distinct channels:

**Channel 1: UNIVERSAL (lossless, 1:1 compression)**
- The TC brief template (artifact-tc-brief-template.md, 169 lines) provides a FIXED scaffold
- Tier 1 (IDENTITY, ~15 lines): 10 soul world-descriptions copied VERBATIM
- Tier 2 (PERCEPTION, ~8 lines): 6 perception thresholds copied VERBATIM with calibration ranges
- These tiers survive at 1:1 ratio — zero compression, zero interpretation

**Channel 2: CONTENT (regenerated, ~10:1 compression)**
- Content Analyst reads the source markdown and produces a Content Map (~50-80 lines)
- Brief Assembler SYNTHESIZES Tier 3 (~50 lines) from Content Map + recipe + routing artifacts
- Tier 4 (~40 lines) is ADAPTED per content with technique vocabulary from D-01..D-08
- This channel compresses ~500-800 lines of source + reference into ~90 lines of brief
- The highest compression point: Tier 3 synthesis at ~36:1 (per 10-pipeline-flow.md)

**Direct File Routes (bypass brief entirely):**
- `tokens.css` (183 lines) → Builder reads directly
- `components.css` (290 lines) → Builder reads directly
- These CSS files are NEVER compressed or summarized — the builder gets raw CSS

### Phase-by-Phase Information Flow

```
PHASE 0: Content Analysis
  IN:  Source markdown content file
  OUT: Content Map (~50-80 lines)
  AGENT: Content Analyst (1 agent)
  READS: artifact-routing.md (Phase 0 protocol, 7 operations)
  COMPRESSION: ~5-10:1 (content → structured analysis)

PHASE 1: Brief Assembly
  IN:  Content Map + 4 artifact files
  OUT: Execution Brief (~100-165 lines)
  AGENT: Brief Assembler (1 agent)
  READS: artifact-tc-brief-template.md, artifact-builder-recipe.md,
         artifact-routing.md, artifact-identity-perception.md
  COMPRESSION: Mixed (Tiers 1-2 = 1:1, Tier 3 = ~36:1, Tier 4 = ~3:1)

PHASE 2: Building
  IN:  Execution Brief + tokens.css + components.css
  OUT: Complete HTML page (800-1200+ CSS lines)
  AGENT: Builder (1 Opus agent, MANDATORY)
  READS: Execution Brief (~100-165 lines), tokens.css (183), components.css (290)
  COMPRESSION: EXPANSION (~540 lines input → 1000-2000+ lines output)

PHASE 3: Verification
  IN:  Built HTML page (rendered in browser)
  OUT: Gate results + PA scores + verdict
  AGENTS: Gate Runner (Playwright JS, not LLM) + 9 PA Auditors +
          1 Integrative Auditor + 1 Weaver (12 total)
  READS: Gate Runner reads artifact-gate-runner.md (Playwright JS)
         PA Auditors read ONLY screenshots + assigned questions
         Weaver reads all PA reports + artifact-pa-protocol.md calibration
  COMPRESSION: N/A (verification, not transformation)
```

### Total Agent Count: 15

| Agent | Type | Count |
|-------|------|-------|
| Content Analyst | LLM (Opus) | 1 |
| Brief Assembler | LLM (Opus) | 1 |
| Builder | LLM (Opus, MANDATORY) | 1 |
| Gate Runner | Playwright JS (NOT LLM) | 1 |
| PA Auditors A-I | LLM (Opus) | 9 |
| Integrative Auditor | LLM (Opus) | 1 |
| Weaver | LLM (Opus) | 1 |
| **Total** | | **15** |

---

## 2. Agent-to-Artifact Routing Map

This is extracted from MANIFEST.md Section 3 (artifact-to-agent routing table) and cross-referenced with Appendix E (agent prompt templates) and artifact-orchestrator.md Section 3.

### Complete Routing Table

| Agent | Artifacts Read | Specific Sections Used |
|-------|---------------|----------------------|
| **Content Analyst** | artifact-routing.md | Phase 0 Content Analysis Protocol (7 operations), Reader Model 5-Axis, Content-Volume-to-Zone-Count Map, Content-Form Fit Gate |
| **Brief Assembler** | artifact-tc-brief-template.md | Full template (4 tiers + appendix + assembly rules) |
| | artifact-builder-recipe.md | Phase 1 READ vocabulary, mechanism catalog refs, D-01..D-08 |
| | artifact-routing.md | Multi-coherence framework, temporal composition, brief template structure |
| | artifact-identity-perception.md | Soul constraints (world-description framing), perception thresholds (calibration ranges) |
| **Builder** | Execution Brief (assembled) | ~100-165 lines (product of Phase 1) |
| | tokens.css | Full file (183 lines, DIRECT route) |
| | components.css | Full file (290 lines, DIRECT route) |
| **Gate Runner** | artifact-gate-runner.md | All 42 gate definitions with Playwright JS code |
| **(orchestrator)** | artifact-identity-perception.md | Gate check fields from SC-01..SC-10, PT-01..PT-06 |
| **PA Auditors A-I** | Screenshots ONLY | 3 viewports (1440, 1024, 768px), cold look + scroll-through |
| | Assigned questions | Thematic subsets of 65 questions from artifact-pa-protocol.md |
| **Integrative Auditor** | All 9 PA reports | Reads auditor outputs |
| | artifact-pa-protocol.md | Calibration references, severity scale |
| **Weaver** | Integrative report | Reads integrative auditor output |
| | artifact-pa-protocol.md | Multi-coherence scale, metaphor expression spectrum, verdict criteria |

### PA Auditor Question Assignments (from artifact-pa-protocol.md)

The 65 questions are distributed thematically, NOT sequentially:

| Auditor | Theme | Question Count | Example Questions |
|---------|-------|---------------|-------------------|
| A | Overall Impression & Soul | ~7 | First impression, warmth, sharpness |
| B | Typography & Reading | ~7 | Type hierarchy, line-height, measure |
| C | Color & Background | ~7 | Background deltas, warm palette, accent usage |
| D | Spacing & Rhythm | ~7 | Stacked gaps, margin values, density arc |
| E | Compositional Intelligence | ~8 | PA-05 sub-criteria, multi-coherence, metaphor |
| F | Borders & Structure | ~7 | Border hierarchy, container width, header |
| G | Components & Interaction | ~7 | Component variety, hover states, code blocks |
| H | Temporal & Scroll | ~7 | Section height variation, scroll rhythm, closure |
| I | Flagship Detection (Tier 5) | ~9 | PA-60..PA-68, pervading metaphor, scale-channel |

### What Each Agent Does NOT Receive (Information Isolation)

This is as important as what they receive:

| Agent | EXPLICITLY EXCLUDED |
|-------|-------------------|
| **Builder** | Gate thresholds, prohibition list, count-gates, fix instructions, research, process metadata, PA questions |
| **PA Auditors** | Build context, brief, content map, recipe, gate results, other auditor reports, ANY pipeline context |
| **Content Analyst** | Builder recipe, gate definitions, PA questions, value tables |
| **Brief Assembler** | Gate definitions, PA questions, value tables (directly — but value tables are referenced in routing) |

This isolation is DELIBERATE. Per artifact-orchestrator.md Section 3:
- Builder isolation prevents "teaching to the test" (optimizing for gates rather than quality)
- PA isolation ensures "fresh-eyes" perception (zero confirmation bias from knowing the intent)

---

## 3. Architecture Diagram

```
                    ┌─────────────────────────────────────────┐
                    │            /build-page SKILL.md          │
                    │          (60 lines, THIN entry point)    │
                    └──────────────────┬──────────────────────┘
                                       │
                                       ▼
                    ┌─────────────────────────────────────────┐
                    │           MANIFEST.md (1,092 lines)      │
                    │        Authoritative Pipeline Spec        │
                    │  11-step quickstart, routing table,       │
                    │  agent prompts (Appendix E),              │
                    │  model mandate (Appendix F: ALL Opus)     │
                    └──────────────────┬──────────────────────┘
                                       │
                    ┌──────────────────┴──────────────────────┐
                    │         ORCHESTRATOR (Team Lead)          │
                    │  Reads: MANIFEST + artifact-orchestrator  │
                    │  Topology: FLAT (sequential spawn)        │
                    │  Passes: 1 (default) or 3 (experimental) │
                    └──────────────────┬──────────────────────┘
                                       │
          ┌────────────────────────────┼────────────────────────────┐
          │                            │                            │
          ▼                            ▼                            ▼
   ┌──────────────┐          ┌──────────────┐          ┌──────────────────┐
   │  9 ARTIFACT   │          │  DIRECT FILE │          │ council-verdict  │
   │    FILES      │          │   ROUTES     │          │  (override doc)  │
   │  ~6,246 lines │          │              │          └──────────────────┘
   └──────┬───────┘          │ tokens.css   │
          │                   │   (183 lines)│
          │                   │ components   │
          │                   │   (290 lines)│
          │                   └──────┬───────┘
          │                          │
          │                          │ (bypass brief,
          │                          │  go direct to builder)
          │                          │
  ════════╪══════════════════════════╪════════════════════════
  PHASE 0 │                          │
          ▼                          │
   ┌──────────────┐                  │
   │   CONTENT     │                  │
   │   ANALYST     │                  │
   │               │                  │
   │ reads:        │                  │
   │  artifact-    │                  │
   │  routing.md   │                  │
   │  (Phase 0     │                  │
   │   protocol)   │                  │
   └──────┬───────┘                  │
          │                          │
          │ Content Map              │
          │ (~50-80 lines)           │
          ▼                          │
  ════════╪══════════════════════════╪════════════════════════
  PHASE 1 │                          │
          ▼                          │
   ┌──────────────┐                  │
   │    BRIEF      │                  │
   │   ASSEMBLER   │                  │
   │               │                  │
   │ reads:        │                  │
   │  Content Map  │                  │
   │  tc-brief-    │                  │
   │   template    │                  │
   │  builder-     │                  │
   │   recipe      │                  │
   │  routing      │                  │
   │  identity-    │                  │
   │   perception  │                  │
   └──────┬───────┘                  │
          │                          │
          │ Execution Brief          │
          │ (~100-165 lines)         │
          │                          │
          │  ┌─ Tier 1: IDENTITY     │
          │  │   (15 lines, 1:1)     │
          │  ├─ Tier 2: PERCEPTION   │
          │  │   (8 lines, 1:1)      │
          │  ├─ Tier 3: COMPOSITIONAL│
          │  │   (50 lines, ~36:1)   │
          │  ├─ Tier 4: DISPOSITION  │
          │  │   (40 lines, ~3:1)    │
          │  └─ Content Map Appendix │
          │     (30-50 lines, 1:1)   │
          ▼                          │
  ════════╪══════════════════════════╪════════════════════════
  PHASE 2 │                          │
          ▼                          ▼
   ┌─────────────────────────────────────┐
   │              BUILDER                 │
   │         (Opus, MANDATORY)            │
   │                                      │
   │  reads:                              │
   │    Execution Brief (~100-165 lines)  │
   │    tokens.css (183 lines, DIRECT)    │
   │    components.css (290 lines, DIRECT)│
   │                                      │
   │  Total input: ~540-640 lines         │
   │  (but MANIFEST says ~3,600 honest)   │
   │                                      │
   │  Output: Complete HTML page          │
   │    (800-2000+ lines)                 │
   └──────────────────┬──────────────────┘
                      │
                      │ HTML file written to disk
                      ▼
  ════════════════════════════════════════════════════════════
  PHASE 3: VERIFICATION
          │
          ├──── ORCHESTRATOR takes screenshots ──────────┐
          │     (3 viewports: 1440, 1024, 768px)         │
          │     Cold look + scroll-through at each        │
          │     Screenshots saved to disk                 │
          │                                               │
          ▼                                               ▼
   ┌──────────────┐                          ┌─────────────────┐
   │  GATE RUNNER  │                          │  9 PA AUDITORS  │
   │  (Playwright  │                          │  (A through I)  │
   │   JS, NOT     │                          │                 │
   │   an LLM)     │                          │ reads:          │
   │               │                          │  Screenshots    │
   │ reads:        │                          │  ONLY + assigned│
   │  gate-runner  │                          │  questions      │
   │  .md (JS)     │                          │                 │
   │               │                          │ ZERO pipeline   │
   │ 42 gates      │                          │ context         │
   │ PASS/FAIL/    │                          └────────┬────────┘
   │ MANUAL        │                                   │
   └──────┬───────┘                          9 independent reports
          │                                            │
          │                                            ▼
          │                                   ┌────────────────┐
          │                                   │  INTEGRATIVE   │
          │                                   │   AUDITOR      │
          │                                   │                │
          │                                   │ reads:         │
          │                                   │  All 9 reports │
          │                                   │  pa-protocol   │
          │                                   │  calibration   │
          │                                   └────────┬───────┘
          │                                            │
          ▼                                            ▼
   ┌──────────────────────────────────────────────────────────┐
   │                        WEAVER                             │
   │                                                           │
   │  reads: Gate results + Integrative report +               │
   │         pa-protocol.md calibration references             │
   │                                                           │
   │  Output: Final verdict (SHIP / SHIP WITH FIXES /          │
   │          DO NOT SHIP) + PA-05 score                       │
   └──────────────────────────────────────────────────────────┘
```

### Topology: FLAT

The orchestrator spawns agents SEQUENTIALLY in phases. There is NO nested hierarchy. This is confirmed in artifact-orchestrator.md and MANIFEST.md:

- Phase 0: Spawn Content Analyst, wait for output
- Phase 1: Spawn Brief Assembler with Content Map, wait for output
- Phase 2: Spawn Builder with Brief + direct files, wait for output
- Phase 3: Orchestrator takes screenshots, then spawns Gate Runner (Playwright JS) + 9 PA Auditors IN PARALLEL, then Integrative Auditor, then Weaver

The ONLY parallelism is in Phase 3: Gate Runner + 9 PA Auditors run simultaneously because they have no dependencies on each other.

---

## 4. Anti-Compression Mechanisms

Pipeline v3 was specifically designed to solve the compression problem that destroyed Pipeline v2 (the monolithic 963-line master prompt). Here are the mechanisms:

### 4.1 Artifact Decomposition

**Problem solved:** Single-prompt compression (963 lines → 75-line builder window → 50:1 information loss)

**Mechanism:** Instead of one giant prompt, intelligence is split into 9 specialized artifact files. Each agent reads ONLY the artifacts relevant to its role. No agent reads all 9.

**Evidence of effectiveness:** The builder in v3 never sees gate definitions (artifact-gate-runner.md), PA questions (artifact-pa-protocol.md), or orchestration protocol (artifact-orchestrator.md). These ~3,354 lines are simply ABSENT from the builder's context, not compressed.

### 4.2 Dual-Channel Architecture

**Problem solved:** Content-specific information destroying universal constraints during compression

**Mechanism:** Two separate information channels:
- Channel 1 (UNIVERSAL): Fixed template text, copied verbatim 1:1. The 10 soul world-descriptions and 6 perception thresholds are NEVER interpreted, summarized, or adapted.
- Channel 2 (CONTENT): Synthesized fresh per page. Content Map is generated, not compressed from a larger source.

**Key insight:** Channel 1 achieves zero compression because it's TEMPLATE text, not summarized research. The Brief Assembler copies it verbatim per assembly rules.

### 4.3 Dual-Route Pattern

**Problem solved:** Same information needing different framing for different agents

**Mechanism:** The same underlying constraint appears in TWO forms in TWO artifacts:
- Soul constraint SC-01 (sharp corners) appears as:
  - **World-description** in artifact-identity-perception.md for the builder: "Every surface is sharp. Corners are cut, not curved."
  - **Gate check** in artifact-gate-runner.md for the gate runner: `border-radius: 0` verification JS

This means the builder gets ENABLING language ("this world IS") while the gate runner gets BINARY verification ("pass/fail"). Neither framing is compressed from the other — they're independently authored.

### 4.4 Recipe Format (not Checklist)

**Problem solved:** Builder receiving prohibitions instead of creative instructions

**Mechanism:** artifact-builder-recipe.md is structured as a 6-phase RECIPE with action verbs:
1. READ vocabulary (tokens, components, mechanisms)
2. SELECT creative decisions (9 specific decisions)
3. DEPLOY scaffolding (HTML structure)
4. DEPLOY disposition (D-01..D-08, experimental)
5. SELF-EVALUATE
6. TEMPORAL COMPOSITION

Per the conversation summary's key finding: "Recipe (Read/Select/Deploy/Assess verbs) = DESIGNED output; Checklist (Verify/Fail if/Must be) = FLAT output."

### 4.5 Direct File Routes

**Problem solved:** CSS vocabulary being summarized instead of delivered raw

**Mechanism:** `tokens.css` (183 lines) and `components.css` (290 lines) bypass the brief entirely. The builder reads them as raw CSS files. These 473 lines reach the builder at 1:1 — zero compression.

### 4.6 Information Isolation

**Problem solved:** Builder optimizing for gate metrics instead of perceptual quality ("teaching to the test")

**Mechanism:** The builder NEVER sees:
- Gate thresholds or pass/fail criteria
- PA questions
- Prohibition lists
- Fix instructions from previous passes
- Research documents
- Process metadata

This is not compression — it's deliberate EXCLUSION. The builder can't game what it can't see.

### 4.7 Fresh-Eyes PA Protocol

**Problem solved:** Confirmation bias in perceptual evaluation

**Mechanism:** PA auditors receive ONLY screenshots + assigned questions. They never see:
- The execution brief
- The content map
- The builder's intent
- Gate results
- Other auditors' reports (until integration)

This is anti-compression in the verification direction: by WITHHOLDING information, the system ensures perceptual judgments are based on what the eye actually sees.

### 4.8 Pre-Computed Value Tables

**Problem solved:** Builders guessing at concrete CSS values

**Mechanism:** artifact-value-tables.md (226 lines) provides:
- 20 background color pairs with exact RGB deltas
- 3 spacing scale progressions with boundary gap calculations
- 3 typography combination sets
- 5 border weight configurations
- Component library class inventories

These are CONCRETE VALUES, not principles. The builder gets "use #FEF9F5 next to #F0EBE3 for a 14-point delta (BELOW threshold, adjust)" instead of "make backgrounds differ."

### 4.9 Worked Examples

**Problem solved:** Abstract instructions being misinterpreted

**Mechanism:** artifact-worked-examples.md (183 lines) provides Gas Town execution as concrete reference:
- Example content map (66 lines)
- Example brief reference (165 lines)
- Example gate results (14 gates shown)
- Example PA excerpt (showing boundary weakness at 17 RGB delta)

### Summary: Compression Rates by Channel

| Information Path | Lines In | Lines Out | Compression | Mechanism |
|-----------------|----------|-----------|-------------|-----------|
| Soul constraints (Tier 1) | 15 | 15 | 1:1 | Verbatim template |
| Perception thresholds (Tier 2) | 8 | 8 | 1:1 | Verbatim template |
| Tier 3 synthesis | ~1,800 | ~50 | ~36:1 | Creative synthesis |
| Tier 4 adaptation | ~120 | ~40 | ~3:1 | Content adaptation |
| Content Map appendix | ~50-80 | ~50-80 | 1:1 | Verbatim append |
| tokens.css | 183 | 183 | 1:1 | Direct file route |
| components.css | 290 | 290 | 1:1 | Direct file route |
| Gate definitions | ~1,379 | 0 (to builder) | ∞ (excluded) | Information isolation |
| PA questions | ~1,004 | 0 (to builder) | ∞ (excluded) | Information isolation |

---

## 5. Token Budget Analysis Per Agent

### Methodology

Token estimates based on line counts from source files. Approximate conversion: 1 line of markdown/CSS ≈ 15-25 tokens. 1 line of dense prose ≈ 20-30 tokens.

### Content Analyst

| Input | Lines | Est. Tokens |
|-------|-------|-------------|
| Source content markdown | ~200-500 | ~5,000-12,500 |
| artifact-routing.md (Phase 0 sections) | ~150 | ~3,750 |
| Agent prompt (from MANIFEST Appendix E) | ~30-50 | ~750-1,250 |
| **Total input** | **~380-700** | **~9,500-17,500** |

Output: Content Map (~50-80 lines, ~1,500-2,000 tokens)

### Brief Assembler

| Input | Lines | Est. Tokens |
|-------|-------|-------------|
| Content Map (from Phase 0) | ~50-80 | ~1,250-2,000 |
| artifact-tc-brief-template.md | 169 | ~4,225 |
| artifact-builder-recipe.md | 857 | ~21,425 |
| artifact-routing.md (multi-coherence, temporal, brief structure) | ~300 | ~7,500 |
| artifact-identity-perception.md (soul + perception) | 556 | ~13,900 |
| Agent prompt (from MANIFEST Appendix E) | ~50-80 | ~1,250-2,000 |
| **Total input** | **~1,982-2,042** | **~49,550-51,050** |

Output: Execution Brief (~100-165 lines, ~3,000-4,950 tokens)

**Critical observation:** The Brief Assembler has the LARGEST input context of any agent (~50k tokens). It must read and synthesize 4 full artifact files plus the content map. This is the agent most likely to experience attention/context pressure.

### Builder

| Input | Lines | Est. Tokens |
|-------|-------|-------------|
| Execution Brief | ~100-165 | ~3,000-4,950 |
| tokens.css (DIRECT) | 183 | ~3,660 |
| components.css (DIRECT) | 290 | ~5,800 |
| Agent prompt (from MANIFEST Appendix E) | ~30-50 | ~600-1,000 |
| **Total input** | **~603-688** | **~13,060-15,410** |

Output: Complete HTML page (~1,000-2,000 lines, ~20,000-50,000 tokens)

**BUT — artifact-orchestrator.md Section 9.1 provides honest accounting:**

The orchestrator document flags that the builder's TRUE context is ~3,600 lines when you count:
- The entire system prompt context
- The execution brief
- tokens.css + components.css
- Any conversational context from the orchestrator's spawn message

The 603-688 line estimate above is the DELIBERATE input. The ~3,600 figure is the ACTUAL context window usage.

### Gate Runner (Playwright JS — NOT an LLM)

| Input | Lines | Est. Tokens |
|-------|-------|-------------|
| artifact-gate-runner.md (JS code) | ~1,379 | N/A (executed as JS) |
| Rendered HTML page | N/A | N/A (DOM access) |

The Gate Runner is NOT an LLM agent. It is Playwright JavaScript code executed by the orchestrator. There is no token budget — it operates on DOM elements directly.

### PA Auditors (each of 9)

| Input | Lines | Est. Tokens |
|-------|-------|-------------|
| Screenshots (~10-15 images) | N/A | ~1,000-3,000 per image |
| Assigned questions (~7-9) | ~20-30 | ~500-750 |
| Agent prompt | ~20-30 | ~400-600 |
| **Total input** | | **~11,000-46,000** |

Token count varies wildly based on screenshot count and image encoding. The screenshot-heavy input is WHY these agents are spawned in parallel — serializing 9 agents with ~30k tokens each would be prohibitively slow.

### Integrative Auditor

| Input | Lines | Est. Tokens |
|-------|-------|-------------|
| 9 PA audit reports | ~900-1,800 | ~22,500-45,000 |
| artifact-pa-protocol.md (calibration) | ~200 | ~5,000 |
| Agent prompt | ~30-50 | ~750-1,250 |
| **Total input** | **~1,130-2,050** | **~28,250-51,250** |

### Weaver

| Input | Lines | Est. Tokens |
|-------|-------|-------------|
| Integrative report | ~100-200 | ~2,500-5,000 |
| Gate results | ~50-100 | ~1,250-2,500 |
| artifact-pa-protocol.md (verdict criteria) | ~100 | ~2,500 |
| Agent prompt | ~30-50 | ~750-1,250 |
| **Total input** | **~280-450** | **~7,000-11,250** |

### Token Budget Summary

| Agent | Est. Input Tokens | Role |
|-------|-------------------|------|
| Content Analyst | ~9,500-17,500 | Analyze content |
| **Brief Assembler** | **~49,550-51,050** | **LARGEST — synthesize 4 artifacts** |
| Builder | ~13,060-15,410 (deliberate) / ~70,000+ (honest) | Build HTML |
| Gate Runner | N/A (JS execution) | Verify programmatically |
| PA Auditor (each) | ~11,000-46,000 | Perceptual evaluation |
| PA Auditor (all 9) | ~99,000-414,000 | Total PA investment |
| Integrative Auditor | ~28,250-51,250 | Synthesize PA reports |
| Weaver | ~7,000-11,250 | Final verdict |
| **Total pipeline** | **~206,000-560,000** | |

---

## 6. Information Availability vs. Usage

This section maps what information is AVAILABLE to each agent (what they CAN read) versus what they actually USE (what influences their output).

### Content Analyst

| Available | Actually Used | Gap |
|-----------|--------------|-----|
| artifact-routing.md Phase 0 protocol (7 operations) | All 7 operations | Minimal gap |
| Reader Model 5-Axis Input Space | Axis scoring for routing | Used |
| Content-Volume-to-Zone-Count Map | Zone count determination | Used |
| Content-Form Fit Gate | Mode validation | Used |
| artifact-routing.md Sections beyond Phase 0 (~600 lines) | Likely skimmed or ignored | ~600 lines available but not directly relevant |

**Gap analysis:** The Content Analyst reads ALL of artifact-routing.md (901 lines) but only needs ~150-200 lines of Phase 0 content. The remaining ~700 lines (multi-coherence framework, temporal composition, brief template structure) are intended for the Brief Assembler. This is a SHARED ARTIFACT with role-specific sections.

### Brief Assembler

| Available | Actually Used | Gap |
|-----------|--------------|-----|
| artifact-tc-brief-template.md (169 lines) | All — this IS the output template | Fully used |
| artifact-builder-recipe.md (857 lines) | Phase 1 vocabulary (~100 lines), mechanism refs, D-01..D-08 (~120 lines) | ~637 lines available but not directly needed |
| artifact-routing.md (901 lines) | Multi-coherence (~80 lines), temporal (~40 lines), brief structure (~60 lines) | ~721 lines available but section-specific use |
| artifact-identity-perception.md (556 lines) | Soul world-descriptions (~30 lines), perception calibration (~20 lines) | ~506 lines available for reference but Tier 1/2 are verbatim copies |

**Gap analysis:** The Brief Assembler has ~2,483 lines available but produces ~100-165 lines of output. However, much of the "unused" content provides CONTEXT for synthesis decisions. The recipe's Phase 2-6 (~400 lines) inform HOW the brief should be structured even though they're not directly quoted. The identity-perception anti-patterns (~100 lines) help the assembler avoid known failure modes.

**Critical gap:** The Brief Assembler reads artifact-builder-recipe.md's "Builder Extraction Guide" which explicitly says what to INCLUDE VERBATIM (Phase 1 + mechanism minimums + D-01..D-08), SUMMARIZE (Phase 2), and REFERENCE (Phases 3-6). This is the anti-compression mechanism — the recipe tells the assembler HOW to compress itself.

### Builder

| Available | Actually Used | Evidence |
|-----------|--------------|----------|
| Execution Brief Tier 1 (15 lines) | World-description informs design decisions | Should be fully internalized |
| Execution Brief Tier 2 (8 lines) | Perception thresholds as constraints | Direct CSS value constraints |
| Execution Brief Tier 3 (~50 lines) | Multi-coherence, metaphor, density arc | PRIMARY creative input |
| Execution Brief Tier 4 (~40 lines) | D-01..D-08 experimental dispositions | Compositional techniques |
| tokens.css (183 lines) | CSS custom properties | Direct reference during build |
| components.css (290 lines) | Component class definitions | Direct reference during build |

**Gap analysis:** The builder's information availability is tightly controlled by design. The question is not "what's available but unused" but "what's MISSING that should be available":
- Mechanism catalog (referenced in recipe but not delivered directly)
- Value tables (artifact-value-tables.md, 226 lines — NOT routed to builder per MANIFEST)
- Worked examples (artifact-worked-examples.md, 183 lines — NOT routed to builder)

**This is a known gap:** artifact-orchestrator.md Section 9 ("Honest Complexity Accounting") acknowledges that the builder receives ~3,600 lines in practice but only ~540 lines of deliberate pipeline input. The remaining ~3,060 lines are system prompt, conversational overhead, and orchestrator framing.

### PA Auditors

| Available | Actually Used | Gap |
|-----------|--------------|-----|
| Screenshots (all viewports) | All — this IS their input | Fully used |
| Assigned questions (~7-9) | All — these drive their analysis | Fully used |
| ANY pipeline context | Nothing — deliberately excluded | N/A (isolation by design) |

**Gap analysis:** PA auditors have MINIMAL availability by design. The gap here is inverted — the question is whether their LIMITED information is SUFFICIENT for accurate perceptual judgment. Evidence from the Mode 4 PA on the ceiling experiment suggests YES: 9/9 auditors independently flagged the whitespace void, demonstrating that screenshot-only evaluation works.

### Gate Runner

| Available | Actually Used | Gap |
|-----------|--------------|-----|
| artifact-gate-runner.md JS code | 42 gate checks executed | All used |
| Rendered DOM | All elements queried | Depends on gate specificity |

**Gap analysis:** The Gate Runner executes ALL defined gates. The gap is in gate COVERAGE, not usage: 42 gates cover identity, perception, scaffolding, and some disposition, but per 10-pipeline-flow.md, there are known gaps in stacked spacing verification (S-09 loophole: individual values pass but total exceeds 120px) and compositional intelligence verification (gates can check presence but not quality).

---

## 7. Theoretical vs. Actual Information Propagation

### 7.1 Theoretical Model (How v3 is SUPPOSED to work)

The MANIFEST describes an idealized propagation model:

```
885 extracted items
    │
    ├── DECOMPOSED into 9 artifact files (by layer)
    │
    ├── ROUTED to agents (by role, per routing table)
    │
    ├── COMPRESSED through dual-channel architecture
    │   ├── Channel 1: 1:1 (verbatim template text)
    │   └── Channel 2: ~10:1 (content-specific synthesis)
    │
    ├── DELIVERED to builder as ~540 line brief + CSS files
    │
    └── VERIFIED by 42 programmatic gates + 65 perceptual questions
```

**Theoretical propagation function** (from artifact-routing.md):
```
S(x) = 1 / (1 + C(x))
```
Where S(x) is the survival probability of information item x, and C(x) is the number of compression stages it passes through.

For Channel 1 items: C(x) = 0, so S(x) = 1.0 (perfect survival)
For Channel 2 items: C(x) = 1-2, so S(x) = 0.33-0.50

**Theoretical quality equation** (from artifact-orchestrator.md):
```
Quality = Agent Capability × Content Affordance × Spec Fidelity
```

### 7.2 Actual Propagation (Evidence from executions)

Evidence comes from 10-pipeline-flow.md analysis and the Gas Town v3 execution:

**What actually propagates at 1:1 (confirmed):**
- Soul constraint world-descriptions → Tier 1 of brief (10 paragraphs, verbatim)
- Perception threshold values → Tier 2 of brief (6 natural laws, verbatim)
- tokens.css → builder (direct file read)
- components.css → builder (direct file read)
- Content Map → brief appendix (verbatim append)

**What propagates with measurable loss:**
- Tier 3 compositional synthesis: ~36:1 compression. The Brief Assembler must read ~1,800 lines of multi-coherence framework, temporal composition, mechanism catalog references, and content map, then produce ~50 lines. This is the HIGHEST compression point in the pipeline. Evidence from the worked example (artifact-worked-examples.md): the Gas Town brief was 165 lines, exceeding the 100-165 target, suggesting the assembler feels pressure to include more than fits.
- Tier 4 disposition adaptation: ~3:1 compression. D-01 through D-08 templates are ~120 lines; adapted output is ~40 lines. The known failure mode: purpose-only dispositions without technique vocabulary (flagged in tc-brief-template.md: "Gas Town's Tier 4 received only 25 lines vs the 40-line budget; the missing 15 lines were technique specifics").

**What does NOT propagate (confirmed losses):**
1. **Mechanism catalog richness** — The builder recipe references the mechanism catalog but the builder never reads it directly. The Brief Assembler must extract and compress mechanism vocabulary into Tier 3. Per 10-pipeline-flow.md, this is a top-3 optimization opportunity.
2. **Value table specifics** — artifact-value-tables.md (226 lines of concrete CSS values) is NOT routed to the builder. The builder must derive or guess values from the perception thresholds in Tier 2.
3. **Worked examples** — artifact-worked-examples.md (183 lines) is NOT routed to the builder. The builder has no reference implementation to calibrate against.
4. **Anti-pattern knowledge** — artifact-identity-perception.md contains specific anti-patterns (AP-09 Ghost Mechanisms, AP-10 Threshold Gaming, AP-01 Density Stacking) that the builder never sees.

### 7.3 Propagation Rate by Layer

| Layer | Items | To Brief | To Builder | Effective Rate |
|-------|-------|----------|------------|----------------|
| L1 IDENTITY | 33 | 10 world-descriptions (verbatim) | Via Tier 1 | ~30% of items, but 100% of critical constraints |
| L2 PERCEPTION | 52 | 6 thresholds (verbatim) | Via Tier 2 | ~12% of items, but 100% of critical thresholds |
| L3 SCAFFOLDING | 75 | Mechanism refs in Tier 3 | Via brief synthesis | ~15-25% (estimated) |
| L4 DISPOSITION | 78 | D-01..D-08 in Tier 4 | Via brief adaptation | ~40-50% (8 dispositions preserved) |
| L5 VALUES | 94 | NOT routed to brief | NOT routed to builder | ~0% (TOTAL LOSS to builder) |
| L6 GATES | 72 | NOT in brief (by design) | NOT to builder (by design) | 100% to gate runner, 0% to builder |
| L7 PA | 88 | NOT in brief (by design) | NOT to builder (by design) | 100% to PA auditors, 0% to builder |
| L8 ROUTING | 125 | Synthesis decisions | Indirect via brief | ~20-30% (estimated) |
| L9 ORCHESTRATION | 222 | NOT in brief | NOT to builder | 0% to builder (orchestrator use only) |

**Key finding:** L5 VALUES (94 items, 226 lines) is the largest TOTAL LOSS to the builder. These are pre-computed CSS perception threshold values — exactly what the builder needs for concrete implementation — and they never reach the builder at all.

### 7.4 Theoretical vs Actual: Summary

| Aspect | Theory | Reality |
|--------|--------|---------|
| Channel 1 compression | 1:1 | 1:1 (confirmed) |
| Channel 2 compression | ~10:1 | ~36:1 at peak (Tier 3) |
| Direct file routes | Lossless | Lossless (confirmed) |
| Builder total input | ~540 lines deliberate | ~3,600 lines honest (system context) |
| Information isolation | Clean separation | Clean (confirmed, by architecture) |
| Value table delivery | Available | NOT ROUTED (0% to builder) |
| Mechanism catalog | Referenced | Not directly delivered |
| Anti-pattern knowledge | Available | NOT ROUTED (0% to builder) |

---

## 8. Routing Architecture

### 8.1 How MANIFEST Decides What Goes Where

The MANIFEST routing decision is encoded in **Section 3: Artifact-to-Agent Routing Table**. This is a STATIC mapping — it does not change per content or per mode. The routing was determined during pipeline design, not at runtime.

The routing logic follows these principles:

**Principle 1: Role-Based Routing**
Each agent reads only artifacts relevant to its function:
- Content analysis agents → routing artifact (content protocols)
- Brief assembly agents → template + recipe + identity + routing
- Build agents → brief output + CSS files
- Verification agents → gate/PA artifacts

**Principle 2: Information Isolation by Exclusion**
The routing table implicitly defines isolation by NOT listing certain artifacts for certain agents. There is no "deny list" — agents simply don't receive file paths for artifacts they shouldn't see.

**Principle 3: Dual-Route for Dual-Purpose Items**
Items that serve both CREATION and VERIFICATION appear in two artifacts with different framing:
- Soul constraints → artifact-identity-perception.md (world-descriptions for creation) AND artifact-gate-runner.md (binary checks for verification)
- Perception thresholds → same dual-route pattern

**Principle 4: Direct Routes for Concrete Vocabulary**
CSS files (tokens.css, components.css) are routed directly to the builder, bypassing the brief compression entirely. The MANIFEST explicitly lists these as direct file reads in the builder's spawn prompt.

### 8.2 Static Routing Table (Extracted from MANIFEST)

```
ARTIFACT                        → CONTENT  BRIEF  BUILDER  GATE   PA    INTEG  WEAVER
                                  ANALYST  ASSEM          RUNNER AUDIT  AUDIT
─────────────────────────────────────────────────────────────────────────────────────
artifact-identity-perception.md    —        ✓       —       ✓      —      —      —
artifact-builder-recipe.md         —        ✓       —       —      —      —      —
artifact-gate-runner.md            —        —       —       ✓      —      —      —
artifact-pa-protocol.md            —        —       —       —      ✓*     ✓      ✓
artifact-routing.md                ✓        ✓       —       —      —      —      —
artifact-orchestrator.md           —        —       —       —      —      —      —**
artifact-tc-brief-template.md     —        ✓       —       —      —      —      —
artifact-worked-examples.md        —        ✓†      —       —      —      —      —
artifact-value-tables.md           —        ✓†      —       —      —      —      —
tokens.css (DIRECT)                —        —       ✓       —      —      —      —
components.css (DIRECT)            —        —       ✓       —      —      —      —
Execution Brief (Phase 1 output)   —        —       ✓       —      —      —      —
Content Map (Phase 0 output)       —        ✓       —       —      —      —      —
Screenshots (Phase 3 output)       —        —       —       —      ✓      —      —
PA Reports (Phase 3 output)        —        —       —       —      —      ✓      ✓
Gate Results (Phase 3 output)      —        —       —       —      —      —      ✓
Integrative Report (Phase 3)       —        —       —       —      —      —      ✓

✓* = PA auditors receive ONLY their assigned question subset, not the full protocol
✓† = Referenced but routing is indirect (Brief Assembler may or may not read these)
** = artifact-orchestrator.md is read by the ORCHESTRATOR (team lead), not by any spawned agent
```

### 8.3 Routing Gaps and Anomalies

1. **artifact-value-tables.md → Builder: NOT ROUTED**
   - Contains 226 lines of pre-computed CSS values
   - Builder must derive these from Tier 2 perception thresholds (~8 lines)
   - This is the single largest routing gap by information volume
   - Impact: builder guesses at concrete color pairs, spacing progressions

2. **artifact-worked-examples.md → Builder: NOT ROUTED**
   - Contains 183 lines of concrete Gas Town execution examples
   - Builder has no calibration reference for what "good" looks like
   - Impact: builder has no output benchmark

3. **artifact-builder-recipe.md → Builder: NOT ROUTED (only via brief)**
   - The recipe is 857 lines; the brief Tier 3+4 is ~90 lines
   - The 6-phase structure (READ/SELECT/DEPLOY/ASSESS) is compressed into synthesis
   - Impact: builder receives compressed recipe, not the sequenced workflow

4. **artifact-orchestrator.md → NO AGENT (orchestrator only)**
   - 971 lines read only by the orchestrator/team lead
   - Contains historical context, theoretical framework, experiment protocols
   - Much of this is META-INFORMATION that doesn't need to reach agents
   - However: the "honest complexity accounting" and "information isolation rules" are PROCESS KNOWLEDGE that validates the routing architecture itself

5. **Mode-dependent routing: ABSENT**
   - The routing table is STATIC — same routing for APPLIED and COMPOSED modes
   - COMPOSED mode requires more multi-coherence detail, more boundary specifications
   - The only mode-dependent behavior is in the Content Analyst's mode recommendation and the Brief Assembler's Tier 3 synthesis depth
   - There is no mechanism to route ADDITIONAL artifacts to agents in COMPOSED mode

### 8.4 Routing Decision Flow

```
/build-page invoked
    │
    ▼
ORCHESTRATOR reads MANIFEST.md
    │
    ├── Determines: This is a SINGLE-PASS execution (default)
    │   (3-pass experimental requires explicit opt-in)
    │
    ├── Phase 0 routing decision:
    │   Spawn Content Analyst with:
    │     → artifact-routing.md (Phase 0 protocol)
    │     → Source content file
    │
    ├── Phase 1 routing decision:
    │   Spawn Brief Assembler with:
    │     → Content Map (Phase 0 output)
    │     → artifact-tc-brief-template.md
    │     → artifact-builder-recipe.md
    │     → artifact-routing.md
    │     → artifact-identity-perception.md
    │   Mode determination: Content Analyst recommends APPLIED or COMPOSED
    │     → Brief Assembler adjusts Tier 3 depth accordingly
    │
    ├── Phase 2 routing decision:
    │   Spawn Builder with:
    │     → Execution Brief (Phase 1 output)
    │     → tokens.css (DIRECT)
    │     → components.css (DIRECT)
    │   Model mandate: MUST be Opus (Appendix F)
    │
    └── Phase 3 routing decision:
        Orchestrator takes screenshots (pre-capture pattern)
        Spawn in parallel:
          → Gate Runner: artifact-gate-runner.md + rendered page
          → PA Auditors A-I: screenshots + assigned questions
        Then sequential:
          → Integrative Auditor: all PA reports + pa-protocol.md
          → Weaver: integrative report + gate results + pa-protocol.md
```

### 8.5 Council Override Mechanism

When artifacts conflict, `council-verdict.md` serves as the authoritative override. This is referenced in MANIFEST.md Section 8. Known council mandates include:
- D-01 through D-08 ALL tagged [EXPERIMENTAL] (overriding any artifact that might imply they're mandatory)
- Container width 940-960px (reinforcing SC-03, non-negotiable)
- All-Opus model mandate (overriding any cost-optimization suggestions)
- Content-Volume-to-Zone-Count Map (added to routing artifact by council)
- Content-Form Fit Gate (added to routing artifact by council)

The council is not a runtime agent — it's a document produced during pipeline design that resolves known conflicts. It represents HUMAN JUDGMENT codified as overrides.

---

## Appendix A: File Size Summary

| File | Lines | Role in Pipeline |
|------|-------|-----------------|
| SKILL.md | 60 | Entry point |
| MANIFEST.md | 1,092 | Master specification |
| artifact-identity-perception.md | 556 | L1+L2 |
| artifact-builder-recipe.md | 857 | L3+L4 |
| artifact-gate-runner.md | ~1,379 | L6 |
| artifact-pa-protocol.md | 1,004 | L7 |
| artifact-routing.md | 901 | L8 |
| artifact-orchestrator.md | 971 | L9 |
| artifact-tc-brief-template.md | 169 | Brief template |
| artifact-worked-examples.md | 183 | Calibration examples |
| artifact-value-tables.md | 226 | CSS value tables |
| council-verdict.md | ~100 (est.) | Override document |
| tokens.css | 183 | CSS vocabulary |
| components.css | 290 | CSS components |
| **Total** | **~7,971** | |

## Appendix B: Key Terminology

| Term | Definition |
|------|-----------|
| **Dual-route** | Same information appears in two artifacts with different framing (creation vs verification) |
| **Direct file route** | CSS files that bypass brief compression, delivered raw to builder |
| **Information isolation** | Deliberate exclusion of information from agents to prevent gaming/bias |
| **Fresh-eyes** | PA auditors with zero pipeline context — perceptual judgment only |
| **Channel 1 / Channel 2** | Universal (1:1 verbatim) vs Content (synthesized ~10:1) information paths |
| **Recipe format** | Sequenced action verbs (Read/Select/Deploy/Assess) — produces DESIGNED output |
| **Checklist format** | Verification verbs (Verify/Fail if/Must be) — produces FLAT output |
| **COMPOSED mode** | Design-first building for high-heterogeneity content with viable metaphor |
| **APPLIED mode** | Content-first building for uniform or reference-heavy content |
| **S(x)** | Survival function: probability that information item x reaches the builder |
| **PA-05** | Primary quality metric: 4 sub-criteria, 1-4 scale (FLAT/ASSEMBLED/COMPOSED/DESIGNED) |
| **Stacked gap** | Total whitespace at a section boundary (padding-bottom + margin-bottom + padding-top) |

## Appendix C: Critical Numbers

- **885** total extracted items across 9 artifact layers
- **15** agents in the pipeline (1 Content Analyst, 1 Brief Assembler, 1 Builder, 1 Gate Runner, 9 PA Auditors, 1 Integrative Auditor, 1 Weaver)
- **42** programmatic gates
- **65** perceptual audit questions (+9 Tier 5 Flagship = 74 total)
- **4** phases (0: Content Analysis, 1: Brief Assembly, 2: Building, 3: Verification)
- **~540** lines of deliberate builder input (brief + CSS files)
- **~3,600** lines of honest builder context (including system prompt)
- **36:1** peak compression ratio (Tier 3 synthesis)
- **1:1** minimum compression ratio (Channel 1 universal, direct file routes)
- **0%** of L5 VALUES items reaching the builder (total routing gap)
- **80-105** minutes estimated single-pass execution time
