# Reference File Map: What the New /build-page Skill Needs

**Author:** ref-mapper (Task #4)
**Date:** 2026-02-27
**Purpose:** Trace every reference file the pipeline uses, classify for the new process, identify what's missing

---

## METHODOLOGY

1. Read the current `/build-page` skill (SKILL.md, 110 lines)
2. Traced every file it references -- MANIFEST, 9 artifacts, gate runner split (5 files), PA split (6 files), per-build tracking (2 files), council verdict
3. Traced every file the MANIFEST and artifacts reference (identity, vocabulary, grammar, components, case studies, guidelines, explorations)
4. Read the adversarial review (15-process-adversarial.md, 614 lines) for what the new process strips
5. Read the holistic process design (10-holistic-process.md) and receiving protocol (13-receiving-protocol.md) for the new process architecture
6. Classified each file: KEEP / MODIFY / DISCARD / CREATE-NEW
7. Mapped which agent window each file loads into

---

## SUMMARY

| Category | Current Files | Current Lines | New Process Files | New Process Lines | Reduction |
|----------|--------------|---------------|-------------------|-------------------|-----------|
| Skill file | 1 | 110 | 1 | ~150-200 | +36-82% (more self-contained) |
| Identity | 2 | 602 | 2 | 602 | 0% (unchanged) |
| Vocabulary | 2 | 934 | 2 | 934 | 0% (unchanged) |
| Grammar/Components | 2 | 1,695 | 2 | 1,695 | 0% (unchanged) |
| TC Skill | 1 | 1,648 | 1 | ~300 | -82% |
| TC Template | 1 | 235 | 0 | 0 | -100% (merged into TC skill) |
| MANIFEST | 1 | 1,450 | 0 | 0 | -100% (absorbed into skill) |
| Builder recipe | 3 | 1,993 | 0 | 0 | -100% (replaced by conviction brief) |
| Routing | 1 | 1,056 | 0 | 0 | -100% (ALWAYS FLAGSHIP) |
| Orchestrator | 1 | 755 | 0 | 0 | -100% (absorbed into skill) |
| Gate runner (JS) | 1 | 3,185 | 1 | ~1,500 | -53% |
| Gate runner (specs) | 4 | 899 | 1 | ~200 | -78% |
| PA questions | 1 | 456 | 1 | ~200 | -56% |
| PA deployment | 1 | 450 | 0 | 0 | -100% (embedded in skill) |
| PA weaver | 1 | 468 | 1 | ~200 | -57% (simplified) |
| PA guardrails | 2 | 172 | 0 | 0 | -100% (embedded in auditor prompt) |
| PA manifest/tracking | 2 | 288 | 1 | ~60 | -79% |
| Council verdict | 1 | 575 | 0 | 0 | -100% (historical, not needed) |
| Worked examples | 1 | 182 | 0 | 0 | -100% (TC conviction is self-authored) |
| Value tables | 1 | 262 | 0 | 0 | -100% (thresholds in gate JS) |
| Identity-perception | 1 | 556 | 0 | 0 | -100% (content merged into conventions brief) |
| Experiment protocol | 1 | 51 | 0 | 0 | -100% |
| Case studies | 14 | 5,120 | 14 | 5,120 | 0% (unchanged, Phase 5 access) |
| **Conventions brief** | 0 | 0 | 1 | ~40 | **NEW** |
| **Receiving protocols** | 0 | 0 | 0 | 0 | Embedded in skill prompts (~5 lines each) |
| **TOTAL** | **~47 files** | **~22,200** | **~14 files** | **~11,000** | **-50%** |

---

## SECTION 1: IDENTITY FILES

### 1A. prohibitions.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/identity/prohibitions.md` |
| **Current lines** | 419 |
| **Content** | 22 prohibitions (8 absolute, 12 conditional, 2 meta). Defines KortAI through REFUSAL. border-radius: 0, box-shadow: none, no gradients, no pure B/W, etc. |
| **Classification** | **KEEP -- NO CHANGES** |
| **New path** | Same |
| **Loaded by** | ALL agent windows (always-load). The orchestrator ensures every spawned agent has this file. |
| **Why unchanged** | This IS the identity. The adversarial review explicitly keeps all identity constraints. The new process still needs builders to know what KortAI refuses. |

### 1B. tokens.css

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/vocabulary/tokens.css` |
| **Current lines** | 183 |
| **Content** | 65 CSS custom properties in :root block. Color palette (8 values), typography trinity (3 fonts), spacing scale (4px base, 6 anchors), border weights (4px/3px/1px). |
| **Classification** | **KEEP -- NO CHANGES** |
| **New path** | Same |
| **Loaded by** | ALL agent windows (always-load). |
| **Why unchanged** | Source of truth for token values. Builders need exact CSS custom property names. |

### 1C. soul-constraints.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/identity/soul-constraints.md` |
| **Current lines** | 342 |
| **Content** | The 3 absolute identity markers (border-radius: 0, box-shadow: none, flat surfaces). Philosophical justification. |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Redundant with prohibitions.md. The same 3 constraints are covered (with more detail) in prohibitions.md items #1, #2, #3. Including both wastes 342 lines of builder context for zero additional information. |
| **Still exists** | Yes, as reference documentation. Just not loaded by the pipeline. |

---

## SECTION 2: VOCABULARY FILES

### 2A. mechanism-catalog.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/grammar/mechanism-catalog.md` |
| **Current lines** | 751 |
| **Content** | 18 reusable CSS mechanisms with 5-category classification (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). Name test + transfer test for each. Impact profiles, application modes, zone mappings. |
| **Classification** | **KEEP -- NO CHANGES** |
| **New path** | Same |
| **Loaded by** | Window 1 (derive+build agent) -- loaded at Phase 3.5+ (after metaphor commitment). NOT before. Anti-gravity R1 still applies. |
| **Why unchanged** | The mechanism catalog is the vocabulary the builder selects from. The adversarial review does not challenge its existence -- it challenges HOW mechanisms are selected (content-mapping vs metaphor-driven). The catalog itself is neutral. |

### 2B. components.css

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/components/components.css` |
| **Current lines** | 944 |
| **Content** | Merged component CSS. Callout family, blockquote, pull-quote, code blocks, Q&A, timeline, data visualization, etc. All soul-compliant (border-radius: 0, box-shadow: none). |
| **Classification** | **KEEP -- NO CHANGES** |
| **New path** | Same |
| **Loaded by** | Window 1 (derive+build agent) -- loaded at Phase 3.5+ alongside mechanism-catalog.md. |
| **Why unchanged** | Builders need the component CSS to include in their pages. These are the reusable building blocks. |

### 2C. compositional-rules.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/grammar/compositional-rules.md` |
| **Current lines** | 527 |
| **Content** | 11 compositional rules governing how mechanisms combine. |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | The adversarial review identifies compositional rules as "proxy measurement." The builder working from a conviction brief and metaphor makes compositional decisions intuitively. The rules describe what good composition LOOKS LIKE; they don't help create it. In the combined TC+BUILD window, the builder's conviction brief already encodes compositional intent. |
| **Still exists** | Yes, as reference. Potentially useful for the conventions brief's "non-negotiables" section. |

### 2D. border-system.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/grammar/border-system.md` |
| **Current lines** | 658 |
| **Content** | 3-category border encoding (structural, semantic, accent). |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Border semantics are already captured in mechanism-catalog.md (#1 border-weight gradient) and in tokens.css (border weights). This file elaborates on border philosophy but a builder who has the mechanism catalog and tokens already knows border-weight = 4px/3px/1px for hierarchy encoding. |
| **Still exists** | As reference for research tasks. |

### 2E. mechanism-combinations.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/grammar/mechanism-combinations.md` |
| **Current lines** | 447 |
| **Content** | How mechanisms combine (multi-coherence theory). |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Multi-coherence is achieved through the metaphor (multiple mechanisms encoding the same semantic), not through combination rules. The conviction brief's calibration section handles this. |

---

## SECTION 3: CURRENT PIPELINE INFRASTRUCTURE (ephemeral/va-extraction/)

### 3A. MANIFEST.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/MANIFEST.md` |
| **Current lines** | 1,450 |
| **Content** | 12-step quickstart, agent roster, agent prompt templates (Appendix E), glossary, file registry. The master orchestration document. |
| **Classification** | **DISCARD -- absorbed into new skill** |
| **Reason** | The new /build-page skill IS the orchestration document. The MANIFEST was needed because the old skill was a thin launcher pointing to a heavy manifest. The new skill is self-contained: it describes the 3-window process, embeds agent prompts, and lists file references directly. A 150-200 line skill replaces a 110-line launcher + 1,450-line manifest. Net: same information, one file instead of two. |

### 3B. artifact-identity-perception.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-identity-perception.md` |
| **Current lines** | 556 |
| **Content** | Soul constraints + perception thresholds combined. Warm palette values, font trinity details, perceptual deltas (15 RGB, 120px stacked, 96px single). |
| **Classification** | **DISCARD -- content split** |
| **Reason** | Soul constraints → already in prohibitions.md. Perception thresholds → move to conventions brief (~5 lines of actual threshold values) + gate runner JS (enforcement). This file is a merge of two concerns that the new process separates cleanly. |

### 3C. artifact-builder-recipe.md (redirect)

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-builder-recipe.md` |
| **Current lines** | 827 (redirect file to split files) |
| **Classification** | **DISCARD** |
| **Reason** | Redirect file. Not loaded directly. |

### 3D. artifact-builder-recipe-compose.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-builder-recipe-compose.md` |
| **Current lines** | 866 |
| **Content** | Pass A recipe -- D-01 through D-06, D-09 disposition sequencing. Specific CSS values, sequenced build steps. |
| **Classification** | **DISCARD** |
| **Reason** | The recipe is replaced by the conviction brief. The adversarial review's central finding: "Recipe beats checklist" is preserved, but the recipe comes from the builder's OWN conviction derivation (TC Phase 4.5), not from a pre-written recipe file. The builder in Window 1 derives their own creative sequence. The 9-disposition recipe was the old pipeline's way of encoding compositional intent as sequenced steps. The new pipeline encodes it as a conviction brief that the builder writes to themselves. |

### 3E. artifact-builder-recipe-enrich.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-builder-recipe-enrich.md` |
| **Current lines** | 300 |
| **Content** | Pass B recipe -- D-07, D-08 enrichment + IMPROVEMENTS. |
| **Classification** | **DISCARD** |
| **Reason** | Same as 3D. Two-pass build is eliminated. Single builder derives + builds in Window 1. Enrichment happens in the builder's own creative process, not as a separate pass. |

### 3F. artifact-gate-runner.md (redirect)

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-gate-runner.md` |
| **Current lines** | 22 |
| **Classification** | **DISCARD** |
| **Reason** | Redirect to split files. |

### 3G. artifact-pa-protocol.md (redirect)

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-pa-protocol.md` |
| **Current lines** | 23 |
| **Classification** | **DISCARD** |
| **Reason** | Redirect to split files. |

### 3H. artifact-routing.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-routing.md` |
| **Current lines** | 1,056 |
| **Content** | Content routing + mode determination. Decides Track 1 vs Track 2, tier routing. |
| **Classification** | **DISCARD** |
| **Reason** | ALWAYS FLAGSHIP. No routing needed. Every page gets full composition. |

### 3I. artifact-orchestrator.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-orchestrator.md` |
| **Current lines** | 755 |
| **Content** | Orchestration protocol, observer protocol, GR-23 through GR-28 decision rules, IMPROVE protocol (Section 7), iteration support. |
| **Classification** | **DISCARD -- absorbed into new skill** |
| **Reason** | Orchestration logic is embedded in the new /build-page skill directly. The IMPROVE protocol becomes the REFINE window (Window 3). Observer agent is eliminated (adversarial review: "process tracking meta gates are ceremony"). Decision rules (SHIP/REFINE/RETHINK) are 10 lines in the skill. |

### 3J. artifact-tc-brief-template.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-tc-brief-template.md` |
| **Current lines** | 235 |
| **Content** | ~223-line TC brief template for Brief Assembler. 6-section format. |
| **Classification** | **DISCARD -- merged into TC skill** |
| **Reason** | The conviction brief format is defined in the simplified TC skill (~300 lines). The brief template was needed when TC and builder were separate windows with a separate Brief Assembler agent. In the combined Window 1, the builder writes their own brief using the format defined in the TC skill. |

### 3K. artifact-worked-examples.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-worked-examples.md` |
| **Current lines** | 182 |
| **Content** | Gas Town worked examples (content map, brief excerpt, gate excerpt, PA excerpt). |
| **Classification** | **DISCARD** |
| **Reason** | The builder derives their own conviction brief. Worked examples from Gas Town are not generalizable and risk pattern-matching ("make it like Gas Town"). The TC skill itself has enough guidance for brief format. |

### 3L. artifact-value-tables.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/artifact-value-tables.md` |
| **Current lines** | 262 |
| **Content** | Pre-computed CSS perception threshold values. |
| **Classification** | **DISCARD -- thresholds embedded in gates + conventions brief** |
| **Reason** | The 5 key thresholds (15 RGB, 120px stacked, 96px single, 0.025em letter-spacing, container 940-960px) are enforced by the gate runner JS and stated in the conventions brief. A 262-line value table is redundant. |

### 3M. council-verdict.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/council-verdict.md` |
| **Current lines** | 575 |
| **Content** | Authoritative override document when artifacts conflict. Historical council decisions. |
| **Classification** | **DISCARD** |
| **Reason** | Historical. The new process has fewer artifacts, so fewer conflicts. Any overrides are handled by the skill itself. |

---

## SECTION 4: GATE RUNNER FILES

### 4A. gate-runner-core.js

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/gate-runner-core.js` |
| **Current lines** | 3,185 |
| **Content** | 29 executable Playwright JS functions covering 57 gates. Screenshot capture with 3 fallback strategies. |
| **Classification** | **MODIFY -- reduce to ~28 gates, ~1,500 lines** |
| **New path** | `ephemeral/va-extraction/gate-runner-core.js` (same path, reduced content) |
| **Loaded by** | Window 2 (evaluate). Orchestrator runs the JS via `browser_run_code`. |
| **What changes** | Per adversarial review Part 1: strip ~24 functional gates + ~5 absorbed. Keep: Physics (2), Identity (6 essential + 3 advisory), Perception (6 essential + 2 advisory), Structural (1 essential + 1 advisory), Meta (3 essential), BV (4 essential). Strip: all process-tracking meta gates, proxy structural gates, redundant identity gates. Screenshot capture function (captureScreenshots + checkScreenshotQuality) KEPT -- this is high-value infrastructure. |
| **Depends on** | Task #2 (gate-auditor) output for exact gate list. |

### 4B. gate-runner-spec.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/gate-runner-spec.md` |
| **Current lines** | 304 |
| **Content** | Human-readable gate specifications (Waves 1-4). |
| **Classification** | **MODIFY -- reduce to ~200 lines** |
| **New path** | Same |
| **Loaded by** | Not loaded by any agent. Reference for the human/orchestrator understanding gate meanings. |
| **What changes** | Strip specs for removed gates. Keep specs for surviving ~28. |

### 4C. gate-runner-preconditions.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/gate-runner-preconditions.md` |
| **Current lines** | 83 |
| **Content** | Text-based pre-build checks (before Playwright runs). |
| **Classification** | **DISCARD** |
| **Reason** | The preconditions are file-existence checks ("does the HTML file exist?", "does the output dir exist?"). Trivially verified by the orchestrator without a separate document. |

### 4D. gate-runner-provenance.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/gate-runner-provenance.md` |
| **Current lines** | 151 |
| **Content** | History + traceability of gate development. |
| **Classification** | **DISCARD** |
| **Reason** | Historical documentation. Not loaded by any agent. Does not affect page quality. |

### 4E. gate-manifest.json

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/gate-manifest.json` |
| **Current lines** | 361 |
| **Content** | Canonical gate registry with tiers (REQUIRED/RECOMMENDED/ADVISORY/DIAGNOSTIC/BV/UTILITY), execution order. |
| **Classification** | **MODIFY -- update to reflect ~28 surviving gates** |
| **New path** | Same |
| **Loaded by** | Orchestrator uses this to know which gates to run and in what order. |
| **What changes** | Remove entries for stripped gates. Simplify tier structure (REQUIRED + ADVISORY only, drop DIAGNOSTIC/UTILITY). |

---

## SECTION 5: PA FILES

### 5A. pa-questions.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/pa-questions.md` |
| **Current lines** | 456 |
| **Content** | 69 PA question definitions (PA-01 through PA-81, some numbers skipped). 5 tiers. |
| **Classification** | **MODIFY -- reduce to 20 experiential questions, ~200 lines** |
| **New path** | Same |
| **Loaded by** | Window 2 auditors (each receives their 10-question subset). |
| **What changes** | Per adversarial review Part 2: reduce from 69 to 20 questions. Keep the 20 most experiential questions that surface real perceptual issues. Drop Tier 5 (Flagship-specific), drop redundant questions, drop analytical questions that measure proxies. The 20 must cover: first impression (2), spatial experience (3), typography/readability (3), emotional arc (3), metaphor coherence (3), content-form fit (3), usability (3). |
| **Depends on** | Curation -- which 20 questions survive needs careful selection from the existing 69. |

### 5B. pa-deployment.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/pa-deployment.md` |
| **Current lines** | 450 |
| **Content** | 9-auditor assignments, Section 0 experiential pass protocol, screenshot protocol, visual verification, Mini-PA Mode 2.5. |
| **Classification** | **DISCARD -- absorbed into new skill** |
| **Reason** | Deployment for 9 auditors is no longer needed. Standard: 2 auditors. High-stakes: 5 auditors. The auditor prompt (including Section 0 cold look protocol) is embedded directly in the /build-page skill's Window 2 section. Screenshot protocol is the `captureScreenshots()` function in gate-runner-core.js. |

### 5C. pa-weaver.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/pa-weaver.md` |
| **Current lines** | 468 |
| **Content** | Section 0 experiential anchor, Weaver protocol, verdicts, calibration, INFORMATION ISOLATION rules. |
| **Classification** | **MODIFY -- simplify to ~200 lines for high-stakes path only** |
| **New path** | Same |
| **Loaded by** | Window 2 Weaver agent (high-stakes builds only). |
| **What changes** | Standard builds (2 auditors): NO Weaver. Orchestrator reads reports directly. High-stakes builds (5 auditors): Simplified Weaver protocol. Keep: Experience Portrait, AMPLIFY/RELEASE/DEEPEN framing, convergence/divergence detection, routing verdict. Drop: detailed calibration tables, exhaustive scoring anchors, Mini-PA references. |

### 5D. pa-guardrails.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/pa-guardrails.md` |
| **Current lines** | 113 |
| **Content** | Auditor constraints, Section 3.1 visual verification, scoring anchors. |
| **Classification** | **DISCARD -- embedded in auditor prompt** |
| **Reason** | The auditor prompt in the new skill includes a 5-line receiving principle that replaces 113 lines: "You are seeing this page for the first time. Describe what you experience. No design vocabulary. Your perception is sovereign. Section 0: scroll through the full page first and write what you feel before answering questions." |

### 5E. pa-guardrails-weaver.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/pa-guardrails-weaver.md` |
| **Current lines** | 59 |
| **Content** | Weaver/Orchestrator-only guardrails. Anti-patterns, S-09 stacking, revision degradation. |
| **Classification** | **DISCARD -- absorbed into Weaver protocol (5C)** |
| **Reason** | When the Weaver is used (high-stakes), these guardrails are embedded in its prompt. When no Weaver (standard), the orchestrator doesn't need them. |

### 5F. pa-manifest.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/pa-manifest.md` |
| **Current lines** | 89 |
| **Content** | Per-run PA tracking template. |
| **Classification** | **MODIFY -- simplify to ~60 lines** |
| **New path** | Same, or merged into a simplified execution tracker |
| **Loaded by** | Orchestrator, for tracking which auditor answered which questions. |
| **What changes** | Reduce from 69 questions to 20. Simpler assignment matrix (2 auditors x 10 questions each, or 5 auditors x 4 questions each). |

---

## SECTION 6: TC SKILL

### 6A. TC Skill (current)

| Property | Value |
|----------|-------|
| **Current path** | `~/.claude/skills/tension-composition/SKILL.md` |
| **Current lines** | 1,648 |
| **Content** | Full TC pipeline: Phase 0-5 + standalone appendix. 14 axes, metaphor collapse, 6 rejection checks, transition tables, conviction brief template. |
| **Classification** | **MODIFY -- reduce to ~300 lines** |
| **New path** | Same |
| **Loaded by** | Window 1 (derive+build agent). The combined window reads TC skill, runs derivation, then builds. |
| **What changes** | Per adversarial review Part 2 and Task #5 (tc-simplifier): reduce to ~300 lines. Keep: Phase 0 (content assessment), Phase 1 simplified (4 core axes only: FEEL/UNDERSTAND/DO/BECOME), Phase 2 (tension tests -- high value), Phase 3 simplified (3 candidates, pick one, one binary check: structural or decorative?), Phase 4.5 (conviction brief: 5 sections, ~50 lines output). Drop: 5 extended axes, 5 structural triggers, 6 rejection checks (reduce to 1), transition tables, fractal consistency check. |
| **Critical preservation** | The metaphor derivation is the core value. Tension tests (Addition/BECAUSE/SUBSTITUTION) are proven high-value. Phase-gated library access (anti-gravity R1) remains. |

### 6B. TC Skill Rewrite (draft)

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/tc-skill-update/SKILL-REWRITE.md` |
| **Current lines** | 841 |
| **Content** | Draft rewrite of TC skill. Still at 841 lines (same as current operational). |
| **Classification** | **REFERENCE -- input for Task #5 (tc-simplifier)** |
| **Reason** | This is the starting point for the ~300-line simplification. Not directly loaded by the new pipeline. |

---

## SECTION 7: PA SKILL

### 7A. PA Skill (current)

| Property | Value |
|----------|-------|
| **Current path** | `~/.claude/skills/perceptual-auditing/SKILL.md` |
| **Current lines** | 517 |
| **Content** | Standalone perceptual auditing. 48 PA questions (Tier 1-4). Auditor protocol. Mode determination. |
| **Classification** | **KEEP for standalone use. NOT used by new /build-page.** |
| **Reason** | The PA skill exists for auditing EXISTING pages independently. The new /build-page pipeline has its own PA protocol embedded in Window 2 (20 questions, 2-5 auditors, Section 0 cold look). The PA skill continues to exist for direct invocation (`/perceptual-audit`) but is NOT referenced by /build-page. |

---

## SECTION 8: PER-BUILD TRACKING

### 8A. EXECUTION-TRACKER-TEMPLATE.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md` |
| **Current lines** | 199 |
| **Content** | Per-build accountability tracker. 375 fields reduced to 58 in v4. Build date, content path, slug, phase tracking, gate results, PA results. |
| **Classification** | **MODIFY -- simplify to ~60 lines** |
| **New path** | Same |
| **Loaded by** | Orchestrator copies to output dir at pipeline start. |
| **What changes** | 3-window process needs far less tracking. Essential fields: build date, content path, slug, conviction brief filename, artifact filename, gate results summary (pass/fail + failures listed), auditor count, auditor verdicts, routing decision, REFINE (yes/no + reason). Drop: Observer fields, iteration logs, crack dimension tracking, multi-pass tracking. |

### 8B. experiment-protocol.md

| Property | Value |
|----------|-------|
| **Current path** | `ephemeral/va-extraction/experiment-protocol.md` |
| **Current lines** | 51 |
| **Content** | Experiment gates GR-36 through GR-39 (Stage 0 Smoke through Stage 4 Flagship). |
| **Classification** | **DISCARD** |
| **Reason** | Experiment staging is historical. The new process is post-experimental -- every page is ALWAYS FLAGSHIP. No staging needed. |

---

## SECTION 9: CASE STUDIES + EXPLORATIONS

### 9A. Case Studies (compositional-core/case-studies/)

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/case-studies/` |
| **Current lines** | 5,120 (14 files) |
| **Content** | 9 case studies (DD-003, DD-004, DD-006, OD-001, OD-004, OD-006, CD-001, CD-005, CD-006) + README + ANTI-PRESCRIPTION-TEMPLATE + 3 visual variants. |
| **Classification** | **KEEP -- NO CHANGES** |
| **Loaded by** | Window 1 (derive+build agent) -- ONLY at Phase 5 (divergence verification). Anti-gravity R1: no access before metaphor commitment. |
| **Why unchanged** | Case studies serve divergence verification. The builder checks if their derived metaphor matches an existing case study. If convergence, they justify or regenerate. This anti-gravity mechanism is preserved. |

### 9B. Validated Explorations (DD/OD/CD HTML files)

| Property | Value |
|----------|-------|
| **Current path** | `design-system/validated-explorations/` |
| **Current lines** | ~5,840 (3 key files: DD-006, OD-006, CD-006) |
| **Content** | Frozen HTML artifacts proving design concepts. |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Per adversarial review Part 2 Section 3: "There is ZERO empirical evidence that raw explorations produce better output than summaries." The Middle-tier experiment (PA-05 4/4) used zero explorations. Explorations consume 15-20% of builder context for reading material that may distract more than inspire. Default: not loaded. Optional: orchestrator can offer 1-2 explorations as loading suggestions for genuinely complex content. |
| **Still exists** | Yes, as permanent reference. Available for optional loading, not mandatory. |

---

## SECTION 10: GUIDELINES + VALIDATION

### 10A. semantic-rules.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/guidelines/semantic-rules.md` |
| **Current lines** | 529 |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Semantic rules are "when to use what" guidance. The builder working from a conviction brief derives "when to use what" from their metaphor, not from general rules. |

### 10B. usage-criteria.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/guidelines/usage-criteria.md` |
| **Current lines** | 337 |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Same as 10A. Usage criteria are subsumed by the conviction brief's compositional arc. |

### 10C. responsive-strategy.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/guidelines/responsive-strategy.md` |
| **Current lines** | 271 |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | The conventions brief (~40 lines) contains the essential responsive rule: "768px breakpoint." The 271-line strategy document is research context, not operational guidance. |

### 10D. anti-gravity-compliance.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/validation/anti-gravity-compliance.md` |
| **Current lines** | 1,196 |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Anti-gravity mechanisms (phase-gated access, divergence mandate) are enforced by the TC skill and the /build-page skill directly. A 1,196-line compliance audit report is validation evidence, not operational input. |

### 10E. gap-check.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/validation/gap-check.md` |
| **Current lines** | 901 |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Historical gap analysis from extraction phase. Not relevant to building. |

### 10F. component-inventory.md

| Property | Value |
|----------|-------|
| **Current path** | `design-system/compositional-core/components/component-inventory.md` |
| **Current lines** | 879 |
| **Classification** | **DISCARD from pipeline loading** |
| **Reason** | Component confidence levels are useful for understanding extraction quality but not for building. The builder uses components.css directly. |

---

## SECTION 11: FILES THAT NEED TO BE CREATED

### 11A. Conventions Brief (~40 lines) -- NEW

| Property | Value |
|----------|-------|
| **Proposed path** | `design-system/compositional-core/conventions-brief.md` |
| **Proposed lines** | ~40 |
| **Content** | Universal non-negotiables for all pages. NOT creative direction (that's the conviction brief). These are the physics/identity constraints that apply regardless of metaphor. |
| **Loaded by** | Window 1 (derive+build agent) -- loaded AFTER conviction brief, BEFORE building. "Read creative direction first, mechanical constraints last." |
| **Proposed structure** | |

```
# Conventions Brief -- Universal Page Physics

## Container
- Max-width: 940-960px, centered

## Typography
- Display: Instrument Serif (headings only)
- Body: Inter (everything else)
- Code: JetBrains Mono
- Base: 16px body, line-height: 1.7

## Color
- Backgrounds must be warm (R >= G >= B)
- Adjacent zone backgrounds: >= 15 RGB max-channel delta
- No pure black (#000) or pure white (#FFF)

## Spacing
- 4px base unit
- Stacked gap at section boundaries: <= 120px total
- Single margin/padding: <= 96px
- No sub-perceptual spacing (letter-spacing >= 0.025em)

## Borders
- border-radius: 0 (NO exceptions)
- box-shadow: none (NO exceptions)
- Weight hierarchy: 4px (primary) / 3px (secondary) / 1px (tertiary)

## Responsive
- 768px breakpoint
- Stack to single column below 768px

## Accessibility
- >= 5 ARIA landmarks
- Skip link present
- WCAG 2.1 AA contrast minimum

## Embedding
- Self-contained HTML file
- All CSS embedded (no external stylesheets)
- Google Fonts loaded via <link>
```

**Why this is needed:** Currently, these non-negotiables are scattered across: prohibitions.md (419 lines, lots of philosophy), tokens.css (183 lines, CSS custom properties), artifact-identity-perception.md (556 lines), artifact-value-tables.md (262 lines), and various gate specs. A builder needs the RULES without the philosophy. 40 lines. Read in 30 seconds. Every value is binary (specific number or yes/no). Zero judgment required.

**Relationship to other files:** This is NOT a replacement for prohibitions.md or tokens.css. Those files provide the WHY and the CSS custom property names. The conventions brief provides the WHAT in the most compressed form possible. The builder reads prohibitions.md (identity understanding), tokens.css (CSS variables), then conventions brief (rules summary).

### 11B. Simplified Gate Runner (~1,500 lines JS) -- MODIFY from existing

This is not a new file but a significant reduction of gate-runner-core.js. The exact gate list depends on Task #2 (gate-auditor) output. Estimated: remove ~24 gate functions, keep ~28.

### 11C. 20-Question Experiential Set (~200 lines) -- MODIFY from existing

Not a new file but a significant curation of pa-questions.md. Reduce from 69 questions to 20. Curate for maximum perceptual coverage with minimum question count.

---

## SECTION 12: WHAT LOADS INTO EACH AGENT WINDOW

### Window 1: DERIVE + BUILD (single combined agent)

| File | Lines | When Loaded | Purpose |
|------|-------|-------------|---------|
| TC Skill (simplified) | ~300 | Immediately | Pipeline protocol for derivation |
| Raw content markdown | varies | Immediately | The material being composed |
| prohibitions.md | 419 | Immediately | Identity constraints (WHY) |
| tokens.css | 183 | Immediately | CSS custom properties (HOW) |
| mechanism-catalog.md | 751 | Phase 3.5+ (after metaphor commitment) | CSS techniques (WHAT) |
| components.css | 944 | Phase 3.5+ | Reusable component CSS |
| conventions-brief.md | ~40 | After conviction brief, before building | Universal physics |
| case-studies/README.md | 541 | Phase 5 only (divergence check) | Anti-gravity verification |
| **Total (pre-metaphor)** | **~900 + content** | | ~10-15% of context |
| **Total (full build)** | **~3,180 + content** | | ~25-35% of context |

**Context headroom:** 65-75% available for thinking + building. This is a significant improvement over the current pipeline where the builder window loads ~4,500 lines of recipe + conventions + identity + explorations.

### Window 2: EVALUATE (orchestrator + auditors)

| File | Lines | Who Loads | Purpose |
|------|-------|-----------|---------|
| gate-runner-core.js | ~1,500 | Orchestrator (runs via browser_run_code) | Programmatic verification |
| gate-manifest.json | ~200 | Orchestrator | Gate execution order |
| Screenshots | N/A | Auditors (via Read tool) | Visual input |
| pa-questions.md (subset) | ~100 per auditor | Each auditor (10 questions) | Experiential questions |
| 5-line receiving principle | ~5 | Each auditor | Processing mode activation |
| pa-weaver.md (high-stakes only) | ~200 | Weaver agent | Synthesis protocol |
| **Auditor total** | **~105** | | ~1% of context = massive headroom for perception |

### Window 3: REFINE (if needed, different builder)

| File | Lines | When Loaded | Purpose |
|------|-------|-------------|---------|
| The HTML artifact | varies | First (scroll through) | The page being refined |
| Conviction brief | ~50 | After own impression | Original creative intent |
| Builder reflection (3 dims) | ~20 | After conviction brief | What the builder intended |
| Auditor reports (raw) | ~200-400 | After reflection | Experiential feedback |
| Raw content markdown | varies | Reference | The original content |
| mechanism-catalog.md | 751 | Reference | CSS techniques |
| components.css | 944 | Reference | Component CSS |
| prohibitions.md | 419 | Reference | Identity constraints |
| tokens.css | 183 | Reference | CSS variables |
| conventions-brief.md | ~40 | Reference | Universal physics |
| 5-line receiving principle | ~5 | First thing in prompt | Processing mode activation |
| **Total** | **~2,600 + content + artifact** | | ~30-40% of context |

---

## SECTION 13: FILES FROM CURRENT PIPELINE NOT NEEDED

Complete list of files in `ephemeral/va-extraction/` that the new process does NOT use:

| File | Lines | Reason for Removal |
|------|-------|-------------------|
| MANIFEST.md | 1,450 | Absorbed into new /build-page skill |
| artifact-identity-perception.md | 556 | Split: prohibitions.md + conventions brief |
| artifact-builder-recipe.md | 827 | Replaced by self-authored conviction brief |
| artifact-builder-recipe-compose.md | 866 | Same |
| artifact-builder-recipe-enrich.md | 300 | Same; two-pass build eliminated |
| artifact-gate-runner.md | 22 | Redirect file |
| artifact-pa-protocol.md | 23 | Redirect file |
| artifact-routing.md | 1,056 | ALWAYS FLAGSHIP, no routing |
| artifact-orchestrator.md | 755 | Absorbed into skill |
| artifact-tc-brief-template.md | 235 | Merged into TC skill |
| artifact-worked-examples.md | 182 | Risk of pattern-matching |
| artifact-value-tables.md | 262 | Thresholds in gates + conventions |
| council-verdict.md | 575 | Historical |
| gate-runner-preconditions.md | 83 | Trivial checks, inline |
| gate-runner-provenance.md | 151 | Historical |
| pa-deployment.md | 450 | Absorbed into skill |
| pa-guardrails.md | 113 | Absorbed into auditor prompt |
| pa-guardrails-weaver.md | 59 | Absorbed into Weaver protocol |
| experiment-protocol.md | 51 | Post-experimental |
| EXECUTION-TRACKER-TEMPLATE.md | 199 | Modified (simplified), not removed |
| d10-observer-protocol.md | varies | Observer agent eliminated |
| All `buddy-*.md` files | ~5,000+ | Historical review artifacts |
| All `extract-*.md` files | ~3,000+ | Historical extraction artifacts |
| All `phase7-*.md` files | ~2,000+ | Historical verification |
| All `verify-*.md` files | varies | Historical |
| All `meta-buddy-*.md` files | varies | Historical |
| **Total removed lines** | **~7,000+** | (artifacts only, not historical files) |

---

## SECTION 14: DEPENDENCY MAP

```
/build-page SKILL.md (new, ~150-200 lines)
  |
  +-- ALWAYS LOADED (all windows):
  |     +-- prohibitions.md (419 lines, unchanged)
  |     +-- tokens.css (183 lines, unchanged)
  |
  +-- Window 1 (DERIVE + BUILD):
  |     +-- TC Skill (~300 lines, simplified from 1,648)
  |     +-- Raw content (user-provided)
  |     +-- [Phase 3.5+] mechanism-catalog.md (751 lines, unchanged)
  |     +-- [Phase 3.5+] components.css (944 lines, unchanged)
  |     +-- [After conviction brief] conventions-brief.md (~40 lines, NEW)
  |     +-- [Phase 5, optional] case-studies/README.md (541 lines)
  |
  +-- Window 2 (EVALUATE):
  |     +-- gate-runner-core.js (~1,500 lines, reduced from 3,185)
  |     +-- gate-manifest.json (~200 lines, reduced from 361)
  |     +-- pa-questions.md (~200 lines, reduced from 456)
  |     +-- [High-stakes only] pa-weaver.md (~200 lines, reduced from 468)
  |
  +-- Window 3 (REFINE, if needed):
  |     +-- The artifact (HTML from Window 1)
  |     +-- Conviction brief (from Window 1)
  |     +-- Builder reflection (from Window 1)
  |     +-- Auditor reports (from Window 2)
  |     +-- mechanism-catalog.md (751 lines)
  |     +-- components.css (944 lines)
  |     +-- conventions-brief.md (~40 lines)
  |     +-- prohibitions.md (419 lines)
  |     +-- tokens.css (183 lines)
  |
  +-- Per-build tracking:
        +-- Simplified tracker (~60 lines, reduced from 199)
```

---

## SECTION 15: RISKS AND OPEN QUESTIONS

### Risk 1: Conventions Brief Too Thin

The ~40-line conventions brief compresses 1,400+ lines of identity/perception/value content. If builders miss critical constraints because the brief is too compressed, quality drops. **Mitigation:** The builder ALSO reads prohibitions.md (419 lines) and tokens.css (183 lines) which provide deeper context. The conventions brief is a SUMMARY, not a replacement.

### Risk 2: 20-Question PA Too Thin

Reducing from 69 to 20 questions means each question must carry more weight. If the 20 miss a critical perceptual dimension, the audit has a blind spot. **Mitigation:** The 20 should be selected to maximize coverage across 7 perceptual dimensions (first impression, spatial, typography, emotional, metaphor, content-form, usability). Tiered escalation (5 auditors with more questions) is the escape valve.

### Risk 3: Gate Runner Reduction Misses Proven Failures

Removing 24+ gates means some failure modes go unchecked. **Mitigation:** Only strip gates that either (a) measure process artifacts, (b) measure proxies that the conviction brief prevents, or (c) catch failure modes that have never actually occurred. All empirically-proven failure mode gates (container width, warm palette, perception thresholds, stacked gaps, ghost mechanisms) are KEPT.

### Risk 4: No Explorations = Impoverished Visual Vocabulary

The Middle-tier experiment succeeded without explorations. But n=1. Complex content with unusual structural needs (fractal layouts, bento grids, island isolation) may require visual reference. **Mitigation:** Optional loading: the TC derivation can recommend 1-2 specific explorations for unusual structural needs. The orchestrator offers but does not mandate.

### Risk 5: Combined TC+BUILD Window Mode-Switching

Derivation (creative/analytical) and building (technical/spatial) are different cognitive modes. Combining them in one context risks shallow derivation as the agent anticipates building. **Mitigation:** The TC skill enforces sequential phases. The agent completes all derivation BEFORE building begins. Mode switch is sequential, not interleaved.

---

**END OF REFERENCE FILE MAP**
