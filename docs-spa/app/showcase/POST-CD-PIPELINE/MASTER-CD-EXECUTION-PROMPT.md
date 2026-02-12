# MASTER CD EXECUTION PROMPT
## For: Another Claude Instance to Create a Full CD Execution Plan

**Synthesized from:** 7 research files totaling ~5,200 lines, compressed into this execution prompt.
**Governing Principle:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%.

---

## TABLE OF CONTENTS

- [Section 0: Preamble](#section-0-preamble)
- [Section 1: Mandatory Reads](#section-1-mandatory-reads)
- [Section 2: What CD Inherits](#section-2-what-cd-inherits)
- [Section 3: What CD Must Produce](#section-3-what-cd-must-produce)
- [Section 4: The 6 Explorations](#section-4-the-6-explorations)
- [Section 5: Team Topology and Wave Structure](#section-5-team-topology-and-wave-structure)
- [Section 6: Binary Rules](#section-6-binary-rules)
- [Section 7: Perceptual Audit Integration](#section-7-perceptual-audit-integration)
- [Section 8: Convention Spec Requirements](#section-8-convention-spec-requirements)
- [Section 9: Completeness Gate](#section-9-completeness-gate)
- [Section 10: Provenance Requirements](#section-10-provenance-requirements)
- [Section 11: Identity v3 Requirements](#section-11-identity-v3-requirements)
- [Section 12: Execution Checklist](#section-12-execution-checklist)
- [Section 13: Plan Verification Audit Checklist](#section-13-plan-verification-audit-checklist)

---

# SECTION 0: PREAMBLE

## What This Document Is

A Claude instance reading ONLY this document should be able to create a full CD execution plan: what agents to spawn, what files to create, what gates to check, what explorations to build, and how to handle every contingency. This document is SELF-CONTAINED.

## What CD (Combination Design) Does

CD is a STRESS TEST of the 3-way equivalence known as ATTENTION TOPOLOGY (AD-F-023). Where prior stages explored individual dimensions -- density (DD), organization (OD), axis (AD) -- CD explores what happens when validated patterns from ALL three dimensions COMBINE on the same page. CD answers: does the grammar hold when patterns coexist?

**The governing metaphor:** If DD invented the alphabet, OD discovered word formation, and AD proved that writing direction IS meaning, then CD writes the first sentences -- testing whether components combine grammatically under the equivalence identity.

## Pipeline Position: YOU ARE HERE

```
Stage 1: Component Foundation (COMPLETE) -- 21 COMP-F findings, 5 soul pieces
Stage 2: Density Design / DD  (COMPLETE) -- 18 DD-F findings, 6 density patterns
Stage 3: Organization Design / OD (COMPLETE) -- 17 OD-F findings, 6 org patterns
Stage 4: Axis Design / AD    (COMPLETE) -- 28 AD-F findings, 6 axis patterns, ATTENTION TOPOLOGY
Stage 5: Combination Design / CD  <-- THIS STAGE (FINAL EXPLORATION STAGE)
  |
  v
Post-CD: Component Extraction -> Content Analysis -> Migration Playbook -> Pilot Migration -> Full Migration
```

CD is the TERMINAL exploration stage. There is no Stage 6. After CD, the design system FREEZES. Everything downstream uses ONLY what CD certifies as complete. A gap in CD's coverage becomes a permanent gap in the design system's expressiveness.

## What Changed: The 8 Recommendations That Evolved CD

These recommendations are EMBEDDED in the execution flow below, not listed separately:

1. **CD-005 Evaluation Gate** -- CD-005 (All Callouts as Conversation) may be redundant with OD-001 (37/40). An explicit evaluation gate in Phase 0 determines: REPLACE with Multi-Axis Transition exploration, or KEEP but reframe to test whether a page composed ENTIRELY of callout components can sustain engagement.
2. **CD-006 as Pilot Migration** -- CD-006 uses REAL content (not synthetic), processed through the full pattern vocabulary. Target: 39-40/40 without design system updates = completeness proven.
3. **HANDOFF as Playbook** -- Not a passive summary but an active guide: pattern selection for every content type, completeness confirmation, CD-F summary with migration implications.
4. **Completeness Gate** -- New gate with no precedent. CD cannot declare completion based solely on exploration scores. Every component must be used, every R-5 finding evaluated, density tolerance table complete.
5. **Convention Spec BEFORE Building** -- Non-negotiable. OD built AFTER = 3 quality dialects + 43-agent remediation. AD built BEFORE = 0 dialect divergence.
6. **Every Exploration Declares DD+OD+AD Combination** -- Each CD exploration explicitly states its density pattern, organizational pattern, and axis pattern.
7. **Component Chemistry Validated** -- Velocity (reading speed), temperature (emotional register), weight (cognitive load) tested empirically.
8. **R-5 as Primary Research** -- 39 findings at ~20-25% consumed. CD must close this to ~80%+.

## What Comes After CD

5 intermediate phases bridge the "abstraction cliff" between 15,000 lines of research prose and implementable migrated pages:
- Phase B+D: Component Extraction (6-10 hours)
- Phase F: Content Analysis (2-4 hours)
- Phase E: Migration Playbook v2 (3-4 hours)
- Phase G: Pilot Migration (3-5 hours)
- Phase H: Playbook Refinement (1-2 hours)
- **FREEZE LINE** -- Language is complete. No new letters, no new grammar.
- Phase I+J: Full Migration (15-40 hours)

CD's completeness gate is the formal trigger for Component Extraction. Extraction cannot begin until CD passes.

## What This Spec Assumes the Reader Has Access To

1. The full repository at the path: `docs-spa/app/showcase/`
2. An HTTP server that can serve files from that path (e.g., `python3 -m http.server 8080`)
3. Playwright MCP for browser automation (screenshots, navigation, DOM inspection)
4. The perceptual auditing skill v3 at `~/.claude/skills/perceptual-auditing/`
5. All prior exploration HTML files in `explorations/` subdirectories
6. All provenance chain documents in `DESIGN-SYSTEM/provenance/`
7. The `knowledge-architecture/` directory with working artifacts

---

# SECTION 1: MANDATORY READS

## Phase-0 Reads (BEFORE Any Planning)

These files MUST be read in this order before any CD work begins. The ordering matters: each file provides context for the next.

| # | File | Path (from `docs-spa/app/showcase/`) | Lines | What It Provides |
|---|------|--------------------------------------|-------|------------------|
| 1 | HANDOFF-AD-TO-CD.md | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | 447 | Gate document: mandatory acknowledgments, open questions, escalations, ship status, reading order, constraint findings |
| 2 | R5-COMBINATION-THEORY.md | `DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` | 756 | PRIMARY research: 39 findings on component combinations, 4 combination rules, 6 recipes, 11x11 compatibility matrix |
| 3 | AD-PA-CONVENTIONS.md | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md` | 970 | Convention ideology: WHY behind every rule, perceptual evidence, authority levels (LOCKED/SOFT-LOCKED/OPEN), conditions for challenge |
| 4 | ACCUMULATED-IDENTITY-v2.md | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | ~520 | Full accumulated context: soul statement, 84 findings, anti-patterns, open questions, identity statement |
| 5 | combination-rules.md | `DESIGN-SYSTEM/patterns/combination-rules.md` | 177 | 4 combination rules (velocity, temperature, weight, spacing), component properties table |
| 6 | AD-CONVENTION-SPEC.md | `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` | 1,093 | Convention spec template: sections 1-16, LOCKED/AXIS split, deviation protocol, three-value label system |
| 7 | AD-outbound-findings.md | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` | 681 | 28 AD-F findings with chain impact subsections for CD |
| 8 | AD-SYNTHESIS.md | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` | 307 | 12-section cross-exploration synthesis |
| 9 | axis-patterns.md | `DESIGN-SYSTEM/patterns/axis-patterns.md` | 667 | 6 axis pattern specs (Z, F, Bento, Spiral, Choreography, Compound) |
| 10 | AD-RESEARCH-GATE.md | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-RESEARCH-GATE.md` | 510 | Research gate template for CD's own gate |

**Total Phase-0 reading: ~6,128 lines.**

## Perceptual Audit Skill Files

| File | Path | Lines | Purpose |
|------|------|-------|---------|
| GATES.md | `~/.claude/skills/perceptual-auditing/GATES.md` | 534 | 7 binary gates (100% compliance target) |
| PROTOCOL.md | `~/.claude/skills/perceptual-auditing/PROTOCOL.md` | 719 | 28 PA questions + 23 anti-patterns |
| TEAM.md | `~/.claude/skills/perceptual-auditing/TEAM.md` | 840 | Exact agent prompts for audit team |

## Per-Wave Builder Reads

Each builder receives a SUBSET of reads, not the full Phase-0 list:
- **ALL builders:** AD-PA-CONVENTIONS.md, CD-CONVENTION-SPEC.md (created Phase 0), combination-rules.md, their specific research package
- **Wave 1 builders:** AD-001 through AD-003 HTML files
- **Wave 2 builders:** AD-004 through AD-006 HTML files + identity delta from Wave 1

## Prior Exploration HTML Paths (for builder reference)

```
explorations/axis/AD-001-z-pattern.html       (Z-Pattern, 36/40)
explorations/axis/AD-002-f-pattern.html       (F-Pattern, 35/40)
explorations/axis/AD-003-bento-grid.html      (Bento Grid, 37/40)
explorations/axis/AD-004-spiral.html          (Spiral, 36/40)
explorations/axis/AD-005-choreography.html    (Choreography, 35/40)
explorations/axis/AD-006-compound.html        (Compound, 38/40)
```

All paths relative to `docs-spa/app/showcase/`.

---

# SECTION 2: WHAT CD INHERITS

## 2.1 Prior Findings (84 Total)

| Stage | Series | Count | Key Finding |
|-------|--------|-------|-------------|
| Stage 1 (Components) | COMP-F-001 to COMP-F-021 | 21 | 5 soul pieces discovered |
| Stage 2 (Density/DD) | DD-F-001 to DD-F-018 | 18 | DD-F-006 Fractal self-similarity (5 scales) |
| Stage 3 (Organization/OD) | OD-F-001 to OD-F-017 | 17 | OD-F-005 Organization IS Density |
| Stage 4 (Axis/AD) | AD-F-001 to AD-F-028 | 28 | AD-F-023 ATTENTION TOPOLOGY |
| **Total** | | **84** | |

## 2.2 The 5 Soul Pieces (LOCKED -- Zero Exceptions)

| # | Soul Piece | CSS Implementation | Violations Across Pipeline |
|---|-----------|-------------------|---------------------------|
| 1 | Sharp Edges Command Authority | `border-radius: 0` | 0 |
| 2 | The Archivist Speaks in Serif | `font-family: 'Instrument Serif'; font-style: italic` | 0 |
| 3 | Callouts Share Family DNA | 2-zone + `border-left: 4px solid` + color differentiation | 0 |
| 4 | Shadows Lie About Depth | `box-shadow: none` | 0 |
| 5 | Squares Signal System | `border-radius: 0` on indicators | 0 |

No 6th soul piece (AD-F-028 confirms). ANTI-PHYSICAL identity extends from these 5 pieces.

## 2.3 The 20 Validated Patterns

**Density (6, DD):** PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL. Avg: 34.5/40.
**Organization (6, OD):** CONVERSATIONAL, NARRATIVE, TASK-BASED, CONFIDENCE, SPATIAL, CREATIVE. Avg: ~35.5/40.
**Axis (6, AD):** Z-PATTERN, F-PATTERN, BENTO GRID, SPIRAL, CHOREOGRAPHY, COMPOUND. Avg: 36.2/40.

## 2.4 The 3-Way Equivalence Chain

```
DD-F-010 (Org SERVES density) -> OD-F-005 (Org IS Density) -> AD-F-004 (Axis IS Org IS Density) -> AD-F-023 (ATTENTION TOPOLOGY)
```

Five equivalence mechanisms: Temporal (Z/F), Spatial (Bento), Proportional (Spiral), Kinetic (Choreography), Gravitational (Compound).

## 2.5 The 6-Pattern Identity Chain

| Axis | = Organization | = Density |
|------|---------------|-----------|
| Z-Pattern | Conversational Q&A | PULSE + TIDAL |
| F-Pattern | Narrative Arc | CRESCENDO |
| Bento Grid | Task Clusters | ISLANDS |
| Spiral | Confidence Strata | GEOLOGICAL |
| Choreography | Spatial Mapping | WAVE |
| Compound | All (sequential) | All (FRACTAL primary) |

## 2.6 R-5 Combination Theory (39 Findings)

| Tier | Type | Count | Priority |
|------|------|-------|----------|
| 1 | Binary Rules | 6 | HIGHEST |
| 2 | Patterns | 9 | HIGH |
| 3 | Frameworks | 7 | MEDIUM |
| 4 | Reference | 11 | ONGOING |
| 5 | Guidance | 6 | BACKGROUND |

Key binary: T2 (velocity mismatch), T3 (temperature flow), T4 (2-callout limit), G3 (weight balance), N1 (stack don't nest), N4 (depth limit).

Application status: ~20-25% applied. ~75-80% UNAPPLIED at combination level.

## 2.7 The 4 Combination Rules

| Rule | Name | Principle |
|------|------|-----------|
| 1 | Velocity Sequencing | Never stack same-velocity. Insert different-velocity buffer. |
| 2 | Temperature Flow | Gradual flow only. NEVER Warm->Cold directly. Traffic Light: NEVER Tip adjacent to Gotcha. |
| 3 | Weight Balance | For every heavy, include 1-2 light before next heavy. |
| 4 | Semantic Proximity | Tight 8-16px, Moderate 24-32px, Loose 48-64px, Recovery 64-80px. |

## 2.8 Component Properties Table

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Medium |
| Essence Callout | SLOW | Warm | Medium |
| Challenge Callout | FAST | Warm | Medium |
| File Tree | MEDIUM | Neutral | Heavy |
| Decision Matrix | MEDIUM | Neutral | Heavy |
| Core Abstraction | SLOW | Reverent | Heavy |
| Task Component | FAST | Utilitarian | Medium |
| Reasoning | SLOW | Deliberate | Heavy |

## 2.9 The 5x5 Transition Grammar (AD-F-025)

| From \ To | Z | F | Bento | Spiral | Choreo |
|-----------|---|---|-------|--------|--------|
| **Z** | -- | Smooth | Bridge | Breathing | Bridge |
| **F** | Smooth | -- | Bridge | Breathing | Bridge |
| **Bento** | Bridge | Bridge | -- | Breathing | Smooth |
| **Spiral** | Breathing | Breathing | Breathing | -- | Breathing |
| **Choreo** | Bridge | Bridge | Smooth | Breathing | -- |

Smooth=4 pairs, Bridge=10, Breathing=6. Choreography=universal bridge. Spiral=most isolated.

## 2.10 The 11x11 Component Compatibility Matrix

| | Info | Tip | Gotcha | Essence | Challenge | Code | FileTree | Matrix | Core | Task | Reasoning |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Info** | - | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Tip** | Yes | OK | OK | Yes | Yes | Yes | OK | OK | Yes | Yes | OK |
| **Gotcha** | Yes | OK | No | OK | No | Yes | OK | OK | OK | Yes | OK |
| **Essence** | OK | Yes | OK | No | Yes | Yes | OK | OK | Yes | OK | Yes |
| **Challenge** | Yes | Yes | No | Yes | No | Yes | OK | OK | Yes | Yes | OK |
| **Code** | Yes | Yes | Yes | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes |
| **FileTree** | Yes | OK | OK | OK | OK | Yes | No | Yes | Yes | Yes | Yes |
| **Matrix** | Yes | OK | OK | OK | OK | Yes | Yes | No | Yes | Yes | Yes |
| **Core** | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes | No | Yes | Yes |
| **Task** | Yes | Yes | Yes | OK | Yes | Yes | Yes | Yes | Yes | OK | Yes |
| **Reasoning** | Yes | OK | OK | Yes | OK | Yes | Yes | Yes | Yes | Yes | No |

Code=universal connector. Self-pairings=No. Gotcha+Challenge=strongest No.

## 2.11 The 6 Combination Recipes

| Recipe | Use Case | Sequence |
|--------|----------|----------|
| 1: Quick Reference | API docs | Info -> Code -> Tip |
| 2: Deep Dive | Concept teaching | Info -> Essence -> Core -> Code -> Gotcha -> Task |
| 3: Decision Guide | Tech choice | Info -> Matrix -> Reasoning -> Task |
| 4: Troubleshooting | Error resolution | Gotcha -> Matrix -> Code -> Task -> Tip |
| 5: Tutorial | Step-by-step | Info -> Task -> Code -> Tip -> Code -> Gotcha -> Challenge |
| 6: Architecture | System structure | FileTree -> Core -> Matrix -> Tip |

## 2.12 Open Escalations

| ESC-ID | Conflict | Recommendation |
|--------|----------|---------------|
| ESC-001 | 768px vs bento multi-column | Move to ~960px for 4+-column grids |
| ESC-002 | Scroll-reveal vs visibility | Initial CSS MUST render visible; JS MAY add hidden |

## 2.13 The Big Three Constraints

1. **DD-F-013 (Density Tolerance -- CD GATE):** How much density variation can a component absorb before splitting?
2. **AD-F-024 (Sequential):** NO simultaneous axis patterns in single viewport. VIOLATION = INVALID.
3. **AD-F-025 (Transition Grammar):** MUST consult 5x5 matrix. Missing classification = INVALID.

## 2.14 Deferred R-2 Findings (7)

R2-1.1 (Breaking Grid), R2-2.4 (Dashboard Storylines), R2-3.3 (Experimental Namespace), R2-4.2 (Asymmetric Grid), R2-4.4 (Golden Ratio), R2-6.1 (Split Screen), R2-6.3 (Scrollytelling).

## 2.15 The 5 Dark Matter Amendments (LOCKED)

| # | Amendment | Change |
|---|-----------|--------|
| DM-001 | Container width | 860px -> 1100px |
| DM-002 | Footer | Mandatory footer/capstone on every page |
| DM-003 | Breathing zone | 15% min, 25% max |
| DM-004 | Progressive enhancement | Initial CSS visible; JS may add hidden |
| DM-005 | Grid collapse | 960px for 4+-column grids |

---

# SECTION 3: WHAT CD MUST PRODUCE

## 3.1 Provenance Documents

| Document | Expected Size | Purpose |
|----------|--------------|---------|
| CD-outbound-findings.md | ~300-500 lines | CD-F-### with chain impact |
| CD-SYNTHESIS.md | ~300-400 lines | Cross-combination synthesis |
| CD-AUDIT-SYNTHESIS.md | ~300-400 lines | Audit record |
| CD-CONVENTION-SPEC.md | ~600-800 lines | Sections 1-16 inherited + 17-20 new |
| CD-PA-CONVENTIONS.md | ~400-600 lines | Convention ideology |
| CD-RESEARCH-GATE.md | ~400-500 lines | 39 R-5 findings evaluated |
| HANDOFF-CD-TO-MIGRATION.md | ~250-350 lines | Migration PLAYBOOK |
| ACCUMULATED-IDENTITY-v3.md | ~700-900 lines | Terminal identity (no v4) |
| combination-patterns.md | ~300-400 lines | Validated combination specs |

## 3.2 Finding-Level Outputs

CD-F-### findings (15-25), R-5 evaluation record (39), EXT-CD-* bespoke (15-20), density tolerance table.

## 3.3 Artifacts

6 HTML explorations, validated transition grammar, combination recipes, completeness certification.

## 3.4 Pipeline-Level Updates

BACKBONE.md, PIPELINE-MANIFEST.md, RESEARCH-ACTIVE.md, SOUL-DISCOVERIES.md, PATTERN-INDEX.md, anti-patterns/registry.md, CLAUDE.md files (5+), STAGE-HEADER.md.

---

# SECTION 4: THE 6 EXPLORATIONS

## CD-001: Reasoning Inside Code

**DD:** CRESCENDO | **OD:** NARRATIVE | **AD:** F-PATTERN + BENTO
**R-5 Tests:** H2, T2, N1-N4, G2, G3, A4, Recipe 2, S5
**Equivalence Test:** Can two SLOW components combine without monotony? Teaching Moment exception at structural merge level?
**Rules Validated:** Rule 1 (velocity), Rule 3 (weight)
**Challenge:** Super-heavy composite may overwhelm surrounding light components.
**Finding Range:** CD-F-001 to CD-F-004

---

## CD-002: Task Containing Decision

**DD:** PULSE | **OD:** TASK-BASED | **AD:** Z-PATTERN + SPIRAL
**R-5 Tests:** H2, H4, T2, N1, N2, R1, A3, Recipe 3, S1
**Equivalence Test:** Can decision-point density pulse within task confidence strata?
**Rules Validated:** Rule 2 (temperature), Rule 4 (spacing)
**Challenge:** Embedded Matrix may violate N1. Spacing collapse to 0px loses semantic signal.
**Finding Range:** CD-F-005 to CD-F-008

---

## CD-003: File Tree with Callouts

**DD:** ISLANDS | **OD:** SPATIAL | **AD:** BENTO + CHOREOGRAPHY
**R-5 Tests:** H1, H3, H4, T4, G1, G4, N3, A1, Recipe 6, G2
**Equivalence Test:** Does hierarchical choreography preserve island independence?
**Rules Validated:** Rule 2 (temperature cycling), Rule 3 (weight balance)
**Challenge:** Shared left-anchor = monotony risk. Callout cacophony if over-annotated.
**Finding Range:** CD-F-009 to CD-F-012

---

## CD-004: Essence as Background

**DD:** TIDAL | **OD:** CONFIDENCE-BASED | **AD:** ISLANDS + GEOLOGICAL
**R-5 Tests:** H3, T3, G2, G3, N1-N4, R2, R3, S3, A5
**Equivalence Test:** Can essence flow as tidal substrate? Does ambient mode change equivalence?
**Rules Validated:** All 4 rules need RE-EVALUATION (ambient mode)
**CRITICAL:** "Background" MUST NOT use physical depth (opacity, z-index, shadows). Violates ANTI-PHYSICAL.
**Challenge:** Must find flat/anti-physical "background" feel via color/typography only.
**Finding Range:** CD-F-013 to CD-F-016

---

## CD-005: All Callouts as Conversation [EVALUATION GATE]

**PHASE 0 DECISION:** REPLACE with Multi-Axis Transition (Option A) OR KEEP+REFRAME as callout-as-content test (Option B). Evaluate: does it test something OD-001 did NOT?

**If KEPT:** DD: PULSE | OD: CONVERSATIONAL | AD: Z-PATTERN
**R-5 Tests (if kept):** H1, T3, T4, R2, R3, A1, A5, S1, G4
**Equivalence Test:** Does conversation context override the 2-callout anti-pattern?
**Rules Validated:** Rule 1 (all FAST), Rule 2 (oscillation as feature), Rule 3 (all Light)
**Finding Range:** CD-F-017 to CD-F-020

---

## CD-006: Creative / Pilot Migration [CROWN JEWEL]

**DD:** ALL (FRACTAL) | **OD:** ALL (sequential) | **AD:** ALL (compound)
**Content:** REAL documentation page, not synthetic. Score target: 39-40/40.
**Score Progression:** DD-006=36, OD-006=37, AD-006=38, CD-006=39-40.
**R-5 Tests:** ALL 39 findings. Key stress: S2, S1, T2, Q1, Matrix, AD-F-024/025/023.
**Equivalence Test:** Does 3-way equivalence hold at MAXIMUM stress?
**Budget:** 30-40% of research investment. Content selected in Phase 0.
**Success:** 39-40/40 = COMPLETENESS PROVEN. Failure = fix before freeze.
**Finding Range:** CD-F-021 to CD-F-025

---

# SECTION 5: TEAM TOPOLOGY AND WAVE STRUCTURE

## 5.1 Full Topology (~18-22 Agents)

```
PERSISTENT: Lead (orchestrate ONLY) + Weaver (state tracking)

PHASE 0 (~4 agents, ~30 min):
  Convention Extender, R-5 Evaluator, Research Packager, Convention Auditor

PHASE 1A (~3-4 agents, ~45 min):
  Builder-A (CD-001), Builder-B (CD-002), Builder-C (CD-003), Scribe

PHASE 1B (~3-4 agents, ~60 min):
  Builder-D (CD-004), Builder-E (CD-005), Builder-F (CD-006 crown), Scribe

PHASE 2 (~5-7 agents, ~45-60 min):
  Lock Sheet Generator, Auditor Alpha, Auditor Beta, Fresh-Eyes, Synthesis Agent, Weaver-Synthesizer

PHASE 3 (~2-4 agents, ~25-30 min):
  Fixer(s), Programmatic Verifier, Visual Verifier

PHASE 4 (~3 agents, ~30 min):
  Synthesizer, Identity Scribe (v3), Infrastructure Updater
```

## 5.2 Phase Flow

```
PHASE 0 -> [GATE 0: 20 checks] -> PHASE 1A -> [PER-WAVE: 16 checks] -> PHASE 1B -> [PER-WAVE: 16+] -> PHASE 2 -> [AUDIT: 11 checks] -> PHASE 3 -> [FIX: 10 checks] -> PHASE 4 -> [COMPLETENESS: 25+ checks] -> COMPLETE
```

## 5.3 Per-File Ownership

| Builder | File | Finding Range |
|---------|------|---------------|
| A | CD-001-reasoning-inside-code.html | CD-F-001 to CD-F-004 |
| B | CD-002-task-containing-decision.html | CD-F-005 to CD-F-008 |
| C | CD-003-file-tree-with-callouts.html | CD-F-009 to CD-F-012 |
| D | CD-004-essence-as-background.html | CD-F-013 to CD-F-016 |
| E | CD-005 (per decision) | CD-F-017 to CD-F-020 |
| F | CD-006-pilot-migration.html | CD-F-021 to CD-F-025 |

## 5.4 Agent Prompt Mandatory Blocks

**Block 1: Soul Checklist** (border-radius:0, box-shadow:none, no drop-shadow, Instrument Serif for Essence/Core only, 2-zone callouts, no animation, opacity:1, 3-category borders, #E83025 only accent, no hover depth)

**Block 2: File-Write Enforcement** ("CRITICAL: You MUST write using Write tool. Text output is NOT sufficient.")

**Block 3: Compaction Survival** (Read CD-BUILD-STATE.md. Your file: [path]. Your range: CD-F-[X] to CD-F-[Y].)

**Block 4: Embedded Q1-Q3** (Builders/fixers only. Screenshot at 1440px. Q1: first bother? Q2: uncomfortable text? Q3: ship as-is? Fix if ANY problem. Also test 1024px.)

## 5.5 OD/AD Lessons (13 Baked In)

Convention before building, per-file ownership, document.fonts.ready, Write tool enforcement, incremental provenance, crown jewel from Phase 0, HTTP server first, Lead THIN, Weaver persistent, binary rules, sequential Playwright, cross-page synthesis, independent verification.

---

# SECTION 6: BINARY RULES

## 6.1 Soul Rules (10)
S-01: border-radius:0 | S-02: box-shadow:none | S-03: no drop-shadow | S-04: Instrument Serif for Essence/Core only | S-05: 2-zone callouts + 4px border | S-06: no physical-movement animation | S-07: opacity:1 | S-08: 3-category borders (ZERO 2px) | S-09: #E83025 only accent | S-10: no hover depth

## 6.2 Convention Rules (7)
C-01: Spec exists BEFORE builders | C-02: Sections 1-16 inherited | C-03: Sections 17-20 added | C-04: Auditor validates | C-05: Temperature taxonomy resolved | C-06: ESC-001 resolved | C-07: ESC-002 resolved

## 6.3 Combination Rules (13)
K-01: Each declares DD+OD+AD | K-02: Each refs >= 2 AD explorations | K-03: Each tests >= 3 R-5 | K-04: AD-F-024 sequential | K-05: AD-F-025 transitions classified | K-06: Compatibility matrix consulted | K-07: No consecutive same-velocity without buffer | K-08: No Warm->Cold direct | K-09: Max 3 heavy per viewport | K-10: Max 2 callouts per viewport | K-11: 48px+ breathing at transitions | K-12: CD-004 no physical depth | K-13: DD-F-006 fractal 5 scales per exploration

## 6.4 Perceptual Audit Gates (7)
Gate 1: Playwright alive | Gate 2: >= 6 screenshots | Gate 3: Cold Look before findings | Gate 4: <= 3 CSS terms | Gate 5: Synthesis after 3 pages | Gate 6: Auto-fix on DO-NOT-SHIP | Gate 7: Independent verification

## 6.5 Completeness Gate (17)
G-01 through G-17: Every component used, tolerance classified, chemistry tested, 39 R-5 evaluated, 7 R-2 re-evaluated, AD-F-023/024/025/027 tested, pattern guide complete, recipes tested, CD-006 >= 39/40, v3 complete, 0 soul violations, sections 17-20 followed, chain impact on all findings, tolerance table empirical.

## 6.6 Provenance Rules (7)
P-01: CD-F-### with YAML | P-02: Chain impact per finding | P-03: Incremental (scribes during build) | P-04: STAGE-HEADER PENDING->COMPLETE | P-05: BACKBONE Stage 5 | P-06: PIPELINE-MANIFEST CD-F entries | P-07: CLAUDE.md mesh >= 5 files

**TOTAL BINARY RULES: 61**

---

# SECTION 7: PERCEPTUAL AUDIT INTEGRATION

## 7.1 Two Audit Points
1. **Embedded (during build):** Q1-Q3 in every builder/fixer prompt
2. **Formal (Phase 2):** Full v3 protocol with 7 gates, 28 questions

## 7.2 Lock Sheet
Generated ONCE in Phase 0. ALWAYS-LOCKED (soul), LOCKED (AD decisions), CHALLENGEABLE (CD choices).

## 7.3 Audit Team
First exploration: Standalone (6 agents, 28 questions). Subsequent: Standard (3 agents, PA-01 to PA-20). After 3rd: synthesis. Fresh-Eyes with zero context.

## 7.4 Sequential Playwright
One auditor at a time per page. Adds ~15 min, prevents ~30-60 min false positives.

## 7.5 Cold Look / Temporal Firewall
CLEAR -> LOOK (5 sec) -> REACT (gut/worst/best/ship) -> LOCK (final) -> CHECKPOINT WRITE (file before analysis). Auditors MUST NOT see Lock Sheet before Cold Look.

## 7.6 Scroll-Through
Viewport-sized screenshots (NOT fullPage:true). 80% scroll steps. All viewports: 1440, 1024, 900, 768, 480.

## 7.7 The 28 PA Questions
Tier 1 (5 mandatory): PA-01 to PA-05. Tier 2 (15 standard): PA-06 to PA-20. Tier 3 (8 deep): PA-21 to PA-28.

## 7.8 Anti-Patterns (23)
Categories A-G: Cognitive Escape, Rule-Checking Disguise, Scope Failures, Completion Failures, Aesthetic Masking, Sovereignty Violations, Scale Distortion.

---

# SECTION 8: CONVENTION SPEC REQUIREMENTS

## 8.1 Structure
Sections 1-16 inherited from AD. New: 17 (Combination Rules + temperature taxonomy), 18 (Transition Grammar Extension), 19 (Density Tolerance Table), 20 (Combination Accessibility).

## 8.2 Lifecycle
DRAFT (Phase 0) -> VALIDATE (after Wave 1A) -> FROZEN (after Wave 1B).

## 8.3 Phase 0 Resolutions
Temperature taxonomy, ESC-001, ESC-002, CD-004 no-depth constraint, CD-005 evaluation gate.

---

# SECTION 9: COMPLETENESS GATE

Terminal stage, no safety net. ALL must pass.

## 9.1 Component Coverage
- [ ] Every component used in >= 1 exploration
- [ ] Every component's density tolerance classified
- [ ] Every component's velocity/temperature/weight tested
- [ ] 11x11 matrix verified at combination scale

## 9.2 Research Coverage
- [ ] All 39 R-5 evaluated
- [ ] All 7 deferred R-2 re-evaluated
- [ ] R-5 >= 80%, R-4 >= 72%, R-2 >= 60%

## 9.3 Equivalence Validation
- [ ] AD-F-023 under combination pressure
- [ ] AD-F-025 at combination scale
- [ ] AD-F-027 verified (5 scales)
- [ ] AD-F-024 preserved
- [ ] AD-F-028 respected (no 6th scale)

## 9.4 Migration Readiness
- [ ] Pattern selection guide complete
- [ ] Recipes documented and tested
- [ ] HANDOFF as playbook
- [ ] CD-006 >= 39/40
- [ ] Classification pipeline documented

## 9.5 Identity + Provenance
- [ ] v3 complete, soul 0 violations, sections 17-20 followed
- [ ] All CD-F have chain impact, synthesis spans 5 stages, BACKBONE/MANIFEST/CLAUDE.md updated

**FAIL: Any unchecked = CD NOT complete. "Ran out of time" NOT valid.**

---

# SECTION 10: PROVENANCE REQUIREMENTS

## 10.1 Create (9 documents)
CD-outbound-findings, CD-SYNTHESIS, CD-AUDIT-SYNTHESIS, CD-CONVENTION-SPEC, CD-PA-CONVENTIONS, CD-RESEARCH-GATE, HANDOFF-CD-TO-MIGRATION, ACCUMULATED-IDENTITY-v3, combination-patterns. All in `provenance/stage-5-combination-cd/` except identity (knowledge-architecture/) and patterns (DESIGN-SYSTEM/patterns/).

## 10.2 Update (8+ documents)
BACKBONE, PIPELINE-MANIFEST, RESEARCH-ACTIVE, SOUL-DISCOVERIES, PATTERN-INDEX, anti-patterns, STAGE-HEADER, CLAUDE.md mesh.

## 10.3 Finding Format
CD-F-### with YAML frontmatter (id, title, class, source_exploration, combination_pattern, r5_findings_tested). Description, Evidence, Chain Impact sections.

## 10.4 HANDOFF Playbook Sections (7)
Pattern Selection Guide, Completeness Confirmation, CD-F Summary, Equivalence Verdict, Identity v3 Diff, Known Risks, Classification Pipeline.

---

# SECTION 11: IDENTITY v3 REQUIREMENTS

v2 input -> v3 output. v3 is TERMINAL (no v4). Must add: CD-F findings, tolerance rules, grammar refinements, R-5 consumption record, combination topology, v2's 5 questions answered, recipes, anti-patterns, pipeline position COMPLETE. Soul LOCKED, no 6th piece, conservative challenge protocol, self-sufficient for future agents. Delta per wave: >= 2 surprises, >= 2 questions.

---

# SECTION 12: EXECUTION CHECKLIST

## PRE-CD (6 items)
- [ ] HTTP server started (curl 200)
- [ ] Playwright functional
- [ ] 10 Phase-0 files read
- [ ] PA skill files accessible
- [ ] Stage-5 directory created
- [ ] CD-BUILD-STATE.md initialized

## PHASE 0 (16 items)
- [ ] CD-CONVENTION-SPEC.md exists
- [ ] Sections 1-16 inherited, 17-20 added
- [ ] Temperature taxonomy resolved
- [ ] ESC-001 resolved
- [ ] ESC-002 resolved
- [ ] Convention Auditor passes
- [ ] CD-005 gate decided
- [ ] CD-006 real content selected
- [ ] CD-004 approach documented (no depth)
- [ ] Research packages per builder (>= 3 R-5 each)
- [ ] EXT-CD-* initiated
- [ ] Lock Sheet generated
- [ ] Convention at DRAFT
- [ ] R-5 Evaluator complete (39 mapped)
- [ ] Builder prompts have Blocks 1-4
- [ ] Weaver tracking active

## PHASE 1A (24 items)
- [ ] Builders A/B/C spawned with inputs
- [ ] Scribe active
- [ ] CD-001/002/003 HTML exist and valid
- [ ] Each declares DD+OD+AD
- [ ] Each refs >= 2 AD explorations
- [ ] Each tests >= 3 R-5
- [ ] Soul: 0 border-radius violations
- [ ] Soul: 0 box-shadow violations
- [ ] Soul: 0 drop-shadow
- [ ] 0 instances of 2px borders
- [ ] AD-F-024 compliance all 3
- [ ] AD-F-025 all transitions classified
- [ ] Max 2 callouts/viewport all 3
- [ ] 48px+ breathing at transitions
- [ ] Q1-Q3 answered all 3
- [ ] Q1-Q3 all CLEAN
- [ ] CD-F-001 to CD-F-012 documented
- [ ] Identity delta Wave 1 (>= 2 surprises, >= 2 questions)
- [ ] Convention -> VALIDATE
- [ ] CD-BUILD-STATE.md updated
- [ ] max-width: 1100px in all 3
- [ ] Footer/capstone on all 3
- [ ] Breathing zone 15-25% in all 3
- [ ] Fractal 5 scales verified in all 3

## PHASE 1B (24 items)
- [ ] Builders receive Wave 1 delta
- [ ] Builders D/E/F spawned
- [ ] Builder-F has 30-40% budget
- [ ] Scribe active
- [ ] CD-004/005/006 HTML exist
- [ ] CD-004 NO opacity<1, z-index, box-shadow for background
- [ ] CD-006 uses REAL content
- [ ] Each declares DD+OD+AD
- [ ] Each refs >= 2 AD explorations
- [ ] Each tests >= 3 R-5
- [ ] Soul: 0 violations all 3
- [ ] 0 instances of 2px borders
- [ ] AD-F-024 compliance
- [ ] AD-F-025 compliance
- [ ] Max 2 callouts/viewport
- [ ] 48px+ breathing
- [ ] Q1-Q3 answered and CLEAN
- [ ] CD-F-013 to CD-F-025 documented
- [ ] Identity delta Wave 2
- [ ] Cross-wave consistency (tokens match all 6)
- [ ] Convention -> FROZEN
- [ ] CD-BUILD-STATE.md updated
- [ ] max-width: 1100px, footer, breathing zone in all 3
- [ ] Fractal 5 scales verified in all 3

## PHASE 2 (16 items)
- [ ] Gate 1: Playwright alive
- [ ] Lock Sheet available (hidden from auditors)
- [ ] Standalone Audit for first exploration
- [ ] Standard Audit for subsequent
- [ ] Sequential Playwright
- [ ] Gate 2: >= 6 screenshots per auditor
- [ ] Gate 3: Cold Look before findings
- [ ] Gate 4: <= 3 CSS terms
- [ ] Gate 5: synthesis after 3rd exploration
- [ ] Fresh-Eyes with zero context
- [ ] Scroll-through (viewport-sized)
- [ ] Viewports: 1440, 1024, 900, 768, 480
- [ ] CD-006 full audit attention
- [ ] Weaver-Synthesizer final report
- [ ] Gate 6 evaluated
- [ ] All PA anti-patterns checked against

## PHASE 3 (12 items)
- [ ] Gate 6: fix list if DO-NOT-SHIP > 0
- [ ] Priority: systemic > per-page > WOULD-NOT-SHIP
- [ ] Per-file fixer ownership
- [ ] Fixers have Q1-Q3 block
- [ ] Post-fix Q1-Q3 at 1440px AND 768px
- [ ] Gate 7: non-fixer verification
- [ ] document.fonts.ready before checks
- [ ] Soul spot-checks (10 random elements/page)
- [ ] Fix-specific DOM checks
- [ ] Visual screenshots at 1440+768
- [ ] 0 NEW violations
- [ ] All 6 explorations SHIP

## PHASE 4 (22 items)
- [ ] CD-outbound-findings.md complete
- [ ] CD-SYNTHESIS.md complete
- [ ] CD-AUDIT-SYNTHESIS.md complete
- [ ] CD-RESEARCH-GATE.md (39 R-5 evaluated)
- [ ] CD-PA-CONVENTIONS.md complete
- [ ] HANDOFF-CD-TO-MIGRATION.md as PLAYBOOK
- [ ] ACCUMULATED-IDENTITY-v3.md complete
- [ ] combination-patterns.md complete
- [ ] Density tolerance table (DD-F-013)
- [ ] BACKBONE.md updated
- [ ] PIPELINE-MANIFEST.md updated
- [ ] SOUL-DISCOVERIES.md updated
- [ ] PATTERN-INDEX.md updated
- [ ] anti-patterns/registry.md updated
- [ ] STAGE-HEADER.md PENDING->COMPLETE
- [ ] CLAUDE.md mesh >= 5 files
- [ ] Completeness Gate ALL items
- [ ] R-5 >= 80%, R-4 >= 72%, R-2 >= 60%
- [ ] CD-006 >= 39/40
- [ ] 0 soul violations final
- [ ] All exploration scores documented
- [ ] Completeness certification written

## IDENTITY-RESEARCH LOOP (8 items)
- [ ] Delta per wave
- [ ] Each: >= 2 surprises, >= 2 questions
- [ ] Wave 2 received Wave 1 delta
- [ ] v3 consumes both deltas
- [ ] v2's 5 questions answered
- [ ] No 6th soul piece
- [ ] Conservative challenge protocol
- [ ] v3 self-sufficient

## SEQUENCING (10 items)
- [ ] Phase 0 BEFORE Phase 1A
- [ ] Phase 1A BEFORE Phase 1B
- [ ] Phase 1 BEFORE Phase 2
- [ ] Phase 2 BEFORE Phase 3
- [ ] Phase 3 BEFORE Phase 4
- [ ] Gate 5 after 3rd exploration
- [ ] Gate 6 after ALL audits
- [ ] Completeness Gate FINAL
- [ ] Lead commits, agents never
- [ ] One branch only

**TOTAL CHECKLIST: 138 items**

---

# SECTION 13: PLAN VERIFICATION AUDIT CHECKLIST

Use AFTER the plan is created. Every item = YES/NO. A human or auditor verifies the planning Claude's output against this list.

## 13.1 PREAMBLE (7 checks)
- [ ] States "Binary rules achieve 100% compliance"
- [ ] Identifies CD as Stage 5 / FINAL
- [ ] Acknowledges ATTENTION TOPOLOGY (AD-F-023)
- [ ] States post-CD pipeline
- [ ] States design system FREEZES
- [ ] Claims self-containment
- [ ] Embeds (not just lists) all 8 recommendations

## 13.2 MANDATORY READS (7 checks)
- [ ] ALL 10 Phase-0 reads with EXACT paths
- [ ] Reading ORDER specified
- [ ] Line counts per file
- [ ] 3 PA skill files with paths
- [ ] Per-wave builder reads
- [ ] 6 AD HTML paths
- [ ] Distinguishes Phase-0 from per-wave reads

## 13.3 INHERITANCE (16 checks)
- [ ] 84 findings (21+18+17+28)
- [ ] 5 soul pieces with CSS
- [ ] 20 validated patterns
- [ ] 3-way equivalence chain
- [ ] 5 equivalence mechanisms
- [ ] 6-pattern identity chain
- [ ] 39 R-5 by priority tier
- [ ] 4 combination rules
- [ ] Component properties (11 components)
- [ ] 5x5 transition grammar
- [ ] 11x11 compatibility matrix
- [ ] 6 recipes
- [ ] 7 deferred R-2
- [ ] 2 escalations
- [ ] Big Three (DD-F-013, AD-F-024, AD-F-025)
- [ ] 5 Dark Matter amendments

## 13.4 DELIVERABLES (15 checks)
- [ ] CD-outbound-findings (15-25 count)
- [ ] CD-SYNTHESIS
- [ ] CD-AUDIT-SYNTHESIS
- [ ] CD-CONVENTION-SPEC (sections 17-20)
- [ ] CD-PA-CONVENTIONS
- [ ] CD-RESEARCH-GATE (39 evaluated)
- [ ] HANDOFF as PLAYBOOK
- [ ] IDENTITY v3 as TERMINAL
- [ ] combination-patterns
- [ ] 6 HTML explorations
- [ ] Density tolerance table
- [ ] Completeness certification
- [ ] Transition grammar validated
- [ ] Recipes tested
- [ ] Pipeline updates (BACKBONE, MANIFEST, RESEARCH-ACTIVE, SOUL, PATTERN-INDEX, anti-patterns, STAGE-HEADER, CLAUDE.md x5)

## 13.5 PER-EXPLORATION (60 checks -- 10 per exploration)

### CD-001
- [ ] Scenario | [ ] DD:CRESCENDO | [ ] OD:NARRATIVE | [ ] AD:F+BENTO
- [ ] R-5: H2,T2,N1-N4,G2,G3,A4,Recipe2,S5 | [ ] Equivalence test
- [ ] Rules:1+3 | [ ] Challenge | [ ] Range:001-004 | [ ] Teaching Moment exception

### CD-002
- [ ] Scenario | [ ] DD:PULSE | [ ] OD:TASK-BASED | [ ] AD:Z+SPIRAL
- [ ] R-5: H2,H4,T2,N1,N2,R1,A3,Recipe3,S1 | [ ] Equivalence test
- [ ] Rules:2+4 | [ ] Challenge | [ ] Range:005-008 | [ ] Nesting boundary

### CD-003
- [ ] Scenario | [ ] DD:ISLANDS | [ ] OD:SPATIAL | [ ] AD:BENTO+CHOREO
- [ ] R-5: H1,H3,H4,T4,G1,G4,N3,A1,Recipe6,G2 | [ ] Equivalence test
- [ ] Rules:2+3 | [ ] Challenge | [ ] Range:009-012 | [ ] Cacophony risk

### CD-004
- [ ] Scenario | [ ] DD:TIDAL | [ ] OD:CONFIDENCE | [ ] AD:ISLANDS+GEO
- [ ] R-5: H3,T3,G2,G3,N1-N4,R2,R3,S3,A5 | [ ] Equivalence test
- [ ] ANTI-PHYSICAL explicit | [ ] All 4 rules re-eval | [ ] Range:013-016 | [ ] No opacity/z-index

### CD-005
- [ ] Eval gate (REPLACE vs KEEP) | [ ] Criteria | [ ] Option A | [ ] Option B
- [ ] R-5 for KEEP: H1,T3,T4,R2,R3,A1,A5,S1,G4 | [ ] Equivalence test
- [ ] OD-001 redundancy | [ ] Rules:1+2+3 | [ ] Range:017-020 | [ ] Phase 0 decision

### CD-006
- [ ] Pilot migration (REAL content) | [ ] Score:39-40/40 | [ ] Progression shown
- [ ] ALL 39 R-5 | [ ] Key stress: S2,S1,T2,Q1,Matrix,024/025/023
- [ ] Success/failure implications | [ ] Budget:30-40% | [ ] Content in Phase 0
- [ ] Classification pipeline | [ ] Range:021-025

## 13.6 TEAM (14 checks)
- [ ] ~18-22 agents | [ ] Lead orchestrate ONLY | [ ] Weaver persistent
- [ ] Phase 0: ~4 | [ ] 1A: 3+scribe | [ ] 1B: 3+scribe
- [ ] Phase 2: 5-7 | [ ] Phase 3: 2-4 | [ ] Phase 4: 3
- [ ] Per-file ownership | [ ] Non-overlapping IDs | [ ] Blocks 1-4
- [ ] Recovery protocol | [ ] >= 13 lessons baked in

## 13.7 BINARY RULES (7 checks)
- [ ] 10 soul rules | [ ] 7 convention rules | [ ] 13 combination rules
- [ ] 7 PA gates with fail actions | [ ] 17 completeness rules | [ ] 7 provenance rules
- [ ] ALL rules are PASS/FAIL (zero judgment words)

## 13.8 PERCEPTUAL AUDIT (15 checks)
- [ ] Q1-Q3 in builder/fixer prompts | [ ] Lock Sheet Phase 0 | [ ] Standalone first
- [ ] Standard subsequent | [ ] Gate 5 after 3rd | [ ] Fresh-Eyes zero context
- [ ] Sequential Playwright | [ ] Cold Look/Firewall | [ ] Scroll-through not fullPage
- [ ] 1440/1024/900/768/480 | [ ] Gate 6 auto-fix | [ ] Gate 7 independent
- [ ] Programmatic before visual | [ ] fonts.ready | [ ] v3 files referenced

## 13.9 CONVENTION (12 checks)
- [ ] BEFORE building | [ ] Sections 1-16 inherited | [ ] 17:Combination Rules
- [ ] 18:Transition Grammar | [ ] 19:Density Tolerance | [ ] 20:Accessibility
- [ ] Temperature resolved | [ ] ESC-001 resolved | [ ] ESC-002 resolved
- [ ] DRAFT->VALIDATE->FROZEN | [ ] Three-value labels | [ ] Deviation protocol

## 13.10 COMPLETENESS GATE (8 checks)
- [ ] Component coverage | [ ] Research coverage (39+7, rates)
- [ ] Equivalence (023/025/027/024/028) | [ ] Migration readiness (guide, recipes, playbook, pilot, pipeline)
- [ ] Identity (v3, soul, 17-20) | [ ] Provenance (chain, synthesis, backbone, manifest, claude.md)
- [ ] FAIL CONDITION stated | [ ] "Ran out of time" NOT valid

## 13.11 PROVENANCE (6 checks)
- [ ] 9 docs to create with locations | [ ] 8+ docs to update
- [ ] Finding format (YAML) | [ ] Citation format | [ ] Playbook 7 sections | [ ] Incremental scribes

## 13.12 IDENTITY (8 checks)
- [ ] v2 in, v3 out | [ ] TERMINAL (no v4) | [ ] 10+ additions
- [ ] 5 questions answered | [ ] Delta >= 2 surprises + 2 questions
- [ ] Soul LOCKED | [ ] No 6th piece | [ ] Conservative challenge

## 13.13 EXECUTION CHECKLIST (10 checks)
- [ ] PRE-CD >= 6 | [ ] PHASE 0 >= 16 | [ ] 1A >= 22 | [ ] 1B >= 22
- [ ] PHASE 2 >= 14 | [ ] PHASE 3 >= 10 | [ ] PHASE 4 >= 20
- [ ] IDENTITY-LOOP >= 8 | [ ] SEQUENCING >= 10 | [ ] Total >= 130

## 13.14 CROSS-CUTTING (30 checks)

### R-5 Coverage
- [ ] Each of 39 mapped to exploration | [ ] 6 binary rules tested (T2,T3,T4,G3,N1,N4)
- [ ] 7 anti-patterns mapped (A1-A7) | [ ] 6 recipes tested | [ ] Q1-Q3 at combo scale
- [ ] Temperature 6th property noted

### Constraints
- [ ] DD-F-006 fractal 5 scales/exploration | [ ] DD-F-013 at combo scale
- [ ] DD-F-014 max 2 callouts | [ ] OD-F-007 48px+ breathing
- [ ] AD-F-024 sequential | [ ] AD-F-025 all transitions | [ ] AD-F-023 at combo scale

### Quality
- [ ] R-5>=80%, R-4>=72%, R-2>=60% | [ ] CD-006>=39/40
- [ ] Delta>=2+2 per wave | [ ] 0 soul violations | [ ] ~100+ gates, >=94% binary

### Process
- [ ] Lead no build/no Playwright | [ ] Lead commits only | [ ] One branch
- [ ] HTTP server first | [ ] Weaver continuous | [ ] Write tool enforcement
- [ ] Compaction survival | [ ] Gate 6 auto-fix | [ ] Gate 7 independent

### Technical
- [ ] 1100px (DM-001) | [ ] Footer (DM-002) | [ ] Breathing 15-25% (DM-003)
- [ ] Progressive enhancement (DM-004) | [ ] 960px grids (DM-005)
- [ ] ANTI-PHYSICAL | [ ] 3-category borders

## 13.15 FINAL META (9 checks)
- [ ] Length 1,500-2,000 lines
- [ ] ALL paths exact
- [ ] Structure: WHAT->WHERE->HOW->RULES->WHO->CHECKLIST
- [ ] No hidden judgment words
- [ ] Fresh instance can execute
- [ ] Covers all 5 stages
- [ ] Honest about risks
- [ ] Concrete FAIL condition
- [ ] Concrete SUCCESS criteria (CD-006>=39/40, 0 soul, R-5>=80%)

---

**TOTAL PLAN VERIFICATION ITEMS: 224**

Use Section 13 AFTER plan creation to audit for gaps. Every unchecked item must be addressed before CD execution begins.

---

*End of MASTER-CD-EXECUTION-PROMPT.md. A Claude instance reading this document has everything needed to plan and execute the CD phase.*
