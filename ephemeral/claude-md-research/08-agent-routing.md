# Agent Routing Research — How Root CLAUDE.md Should Direct Agents to Right Subfolder

**Research Mission:** Map task types to design-system subfolders to create routing logic for the root CLAUDE.md

**Researcher:** agent-routing-researcher
**Date:** 2026-02-14

---

## Executive Summary

The design-system folder contains **8 subfolders** serving fundamentally different purposes across a **discovery-based research pipeline** (Stages 1-5: Components → Density → Organization → Axis → Combination) that feeds into **compositional-core** (the extracted operational layer) and eventually **site/** (implementation).

**Critical Discovery:** The folder structure maps to THREE temporal states (historical fortress, active extraction/evolution, future planning) PLUS two specialized domains (implementation artifacts, tension-testing). Agents need **STATE-BASED routing** (what phase are we in?) not just **task-based routing** (what am I doing?).

**Top Priority File:** compositional-core/README.md — The operational layer between abstract specification and concrete implementation. Read this FIRST for ANY building task.

---

## 1. TASK-TO-FOLDER MAPPING

### Task Category: BUILDING CONTENT/PAGES

| Specific Task | Primary Folder | Secondary/Support | Rationale |
|--------------|----------------|-------------------|-----------|
| **Build a new documentation page** | `compositional-core/` | specification/tokens/, research/ | Use the operational layer with phase-gated access. Load vocabulary (tokens) + grammar (mechanisms) + case studies (NOT as templates). Research/ provides finding context. |
| **Build an exploration (DD/OD/CD-style)** | `specification/` then `validated-explorations/` | research/, compositional-core/ | Specification/ has BACKBONE, patterns, provenance chain. Validated-explorations/ are the fortress examples (DD-006, OD-006, CD-006 crown jewels). Research/ provides R1-R5 findings. |
| **Apply tension-composition pipeline** | `compositional-core/` + `pipeline/07-TRACK-2` | research/, specification/anti-patterns/ | Compositional-core has the extracted identity + vocabulary. Pipeline/07 has Track 2 skill invocation spec. Anti-patterns prevent known failures. |
| **Compose from component library** | `compositional-core/components/` | pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md | Components/ has merged CSS + inventory. Pipeline/08 has 3-tier model (Tier 1: tokens, Tier 2: strategies, Tier 3: recipes). |

### Task Category: AUDITING/VALIDATION

| Specific Task | Primary Folder | Secondary/Support | Rationale |
|--------------|----------------|-------------------|-----------|
| **Audit existing page for soul compliance** | `compositional-core/identity/prohibitions.md` | specification/tokens/, compositional-core/validation/ | Prohibitions.md has 8 absolute + 12 conditional prohibitions. Validation/ has quantitative rules. Tokens/ has locked values (border-radius: 0, box-shadow: none). |
| **Validate extraction quality** | `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` | compositional-core/process/, specification/provenance/ | Pipeline/09 is Phase D test procedures. Process/ has extraction provenance. Specification/provenance/ has full research chain. |
| **Check perceptual depth** | `compositional-core/validation/` + skill | specification/anti-patterns/registry.md | Validation/ has perceptual cost model + guardrails (940px container, 16px label-to-heading gap, 32px padding floor). Anti-patterns registry prevents epidemic patterns. |
| **Verify finding application** | `research/RESEARCH-SYNTHESIS.md` | specification/provenance/, validated-explorations/ | Research-synthesis has cross-research insights. Provenance/ traces finding origins. Validated-explorations/ are proof-of-concept implementations. |

### Task Category: RESEARCH/UNDERSTANDING

| Specific Task | Primary Folder | Secondary/Support | Rationale |
|--------------|----------------|-------------------|-----------|
| **Research design system patterns** | `specification/patterns/` | research/, compositional-core/grammar/ | Specification/patterns/ has validated rhythms (density, organization, axis). Research/ has R1-R5 raw findings. Compositional-core/grammar/ has 18 extracted mechanisms. |
| **Understand design system philosophy** | `README.md` (root) | specification/BACKBONE.md, compositional-core/process/ | README.md is "THE KORTAI DESIGN MIND" (2,053 lines, 9 Parts). BACKBONE is master narrative. Process/ has extraction methodology. |
| **Trace a finding's provenance** | `specification/provenance/` | validated-explorations/, research/ | Provenance/ has 3-layer architecture: inline headers (490 files), light sections (244 files), formal chain docs. Validated-explorations/ are fortress artifacts. Research/ has original R-X findings. |
| **Check what research findings exist** | `research/RESEARCH-SYNTHESIS.md` | research/R1-R5 files, specification/provenance/ | Research-synthesis is cross-research insights. R1-R5 are 337 total findings (R1: 28, R2: 27, R3: 51, R4: 192, R5: 39). |
| **Understand extraction lens** | `compositional-core/process/lens-manifesto.md` | compositional-core/process/extraction-provenance.md | Lens manifesto explains Identity + Enablement hybrid lens (CHOICE not discovery). Extraction-provenance is 766-line complete methodology. |

### Task Category: PLANNING/EVOLUTION

| Specific Task | Primary Folder | Secondary/Support | Rationale |
|--------------|----------------|-------------------|-----------|
| **Plan next migration steps** | `pipeline/` | compositional-core/, specification/guides/migration-guide.md | Pipeline/ has 9 strategic planning docs (CD vision, post-CD phases, migration pipeline, roadmap). Compositional-core is what gets deployed. Guides/ has migration guide. |
| **Update design system specification** | `specification/` | compositional-core/, research/ | Specification/ is abstract specification layer. Compositional-core is operational layer. Research/ informs updates with new findings. |
| **Plan new extraction (Phase D)** | `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` | compositional-core/process/, compositional-core/validation/ | Pipeline/09 has Phase D test procedures. Process/ has construction narrative. Validation/ has convergence checks. |
| **Understand pipeline evolution** | `pipeline/README.md` then `pipeline/06-KEY-INSIGHTS.md` | compositional-core/README.md, specification/BACKBONE.md | Pipeline/README is comprehensive overview. 06-KEY-INSIGHTS has language analogy, sameness impossibility, attention topology. Compositional-core and BACKBONE bridge research to execution. |

### Task Category: IMPLEMENTATION

| Specific Task | Primary Folder | Secondary/Support | Rationale |
|--------------|----------------|-------------------|-----------|
| **Add new component to system** | `compositional-core/components/` | specification/components/, implementation/ | Compositional-core/components/ is operational layer (merged CSS + inventory). Specification/components/ is abstract spec. Implementation/ has card-system, component-system, typography-system artifacts. |
| **Look up token values** | `specification/tokens/` OR `compositional-core/vocabulary/tokens.css` | - | Specification/tokens/ is abstract (geometry, colors, typography, spacing files). Compositional-core/vocabulary/tokens.css is operational (:root block, 40 tokens). BOTH are locked. |
| **Check existing implementations** | `implementation/` | specification/components/, compositional-core/components/ | Implementation/ has archive (historical), card-system, component-system, font-research, typography-system. Links back to specifications. |

### Task Category: TESTING/VALIDATION

| Specific Task | Primary Folder | Secondary/Support | Rationale |
|--------------|----------------|-------------------|-----------|
| **Run tension-composition pipeline** | `compositional-core/` + skill invocation | pipeline/07-TRACK-2, tension-test/ | Compositional-core has vocabulary + grammar + case studies. Pipeline/07 has Track 2 execution spec. Tension-test/ has 15 HTML layouts (3 metaphors × 5 each for Playbook, Gas Town, Boris). |
| **Validate metaphor-driven composition** | `tension-test/` | compositional-core/case-studies/, pipeline/07-TRACK-2 | Tension-test/ has proof-of-concept implementations. Case-studies/ are anti-prescription format. Pipeline/07 explains quality lessons (top 3: Playbook Elevation Map, Gas Town Floor Plan, Boris Geological Core). |
| **Check anti-gravity compliance** | `compositional-core/validation/anti-gravity-report.md` | compositional-core/process/mechanisms.md | Anti-gravity report has 18/19 mechanism verification (94.7%). Mechanisms.md has 18 extracted mechanisms + 11 compositional rules. |

---

## 2. DECISION TREE — Self-Routing Questions

An agent landing at design-system root should ask these questions **in this order**:

### Level 1: STATE (Which Phase?)

```
Q1: What phase am I working in?
├─ Phase C extraction COMPLETE → compositional-core/ is LOCKED, operational layer READY
├─ Phase D validation NEXT → pipeline/09 has validation protocol
├─ Pre-Phase C (fortress only) → validated-explorations/ are examples, specification/ is spec
└─ Migration phase → compositional-core/ + pipeline/03 migration pipeline

Q2: Am I working with CURRENT extraction or FUTURE planning?
├─ Current extraction (Phase C complete) → compositional-core/
├─ Future planning (Phase D, migration) → pipeline/
└─ Historical understanding (fortress explorations) → validated-explorations/
```

### Level 2: PURPOSE (Build vs Analyze vs Plan?)

```
Q3: Am I BUILDING, ANALYZING, or PLANNING?
├─ BUILDING content/pages → compositional-core/ (operational layer)
├─ ANALYZING existing work → specification/ + compositional-core/validation/
├─ PLANNING next phases → pipeline/
└─ RESEARCHING patterns → research/ + specification/patterns/
```

### Level 3: EXECUTION (What workflow?)

```
Q4: What execution track?
├─ Track 1 (assembly — token + pattern) → compositional-core/vocabulary/ + grammar/
├─ Track 2 (composition — tension + metaphor) → compositional-core/ + pipeline/07 + skill
└─ Validation (audit existing) → compositional-core/validation/ + identity/prohibitions.md

Q5: Do I need raw research or extracted design system?
├─ Raw research findings (R1-R5, 337 findings) → research/
├─ Extracted design system (40 items, 6 layers) → compositional-core/
└─ Provenance chain (research → findings → explorations) → specification/provenance/
```

### Level 4: DETAIL (Which specific files?)

```
Q6: What's my first file to read?
├─ Philosophy/orientation → design-system/README.md (THE KORTAI DESIGN MIND)
├─ Operational building → compositional-core/README.md (phase-gated protocol)
├─ Abstract specification → specification/BACKBONE.md (master narrative)
├─ Planning/evolution → pipeline/README.md (roadmap overview)
├─ Soul compliance → compositional-core/identity/prohibitions.md (22 prohibitions)
└─ Research grounding → research/RESEARCH-SYNTHESIS.md (cross-research insights)
```

---

## 3. PRIORITY ORDERING — Critical First Reads

### IF AGENT MUST READ ONE FILE:

**`compositional-core/README.md`** (35KB, updated 2026-02-14)

**Why:** This is the operational layer between abstract spec and concrete implementation. It defines:
- 6-layer ontology (identity → vocabulary → grammar → components → case studies → guidelines)
- Phase-gated access protocol (what opens when)
- Anti-gravity mechanisms (prevents pattern-matching)
- First Contact layer (prohibitions.md + soul-constraints.md — ALWAYS load these)

**Alternative (for philosophy):** `design-system/README.md` (109KB) — THE KORTAI DESIGN MIND

### IF AGENT MUST READ TWO FILES:

1. **`compositional-core/README.md`** — Operational layer
2. **`compositional-core/identity/prohibitions.md`** — 8 absolute + 12 conditional prohibitions (border-radius: 0, box-shadow: none, etc.)

**Why:** README defines the system, prohibitions define the soul constraints that NEVER change.

### IF AGENT MUST READ THREE FILES:

1. **`compositional-core/README.md`** — Operational layer
2. **`compositional-core/identity/prohibitions.md`** — Soul constraints
3. **`compositional-core/vocabulary/tokens.css`** — 40 locked token values (operational :root block)

**Why:** These three give you: system structure, what you can't do, and what values to use.

### IF AGENT HAS 5-10 MINUTES (Context Recovery Mode):

From design-system/README.md Mode 3 path:
1. design-system/CLAUDE.md — System structure navigation **(DOES NOT EXIST YET — needs to be written)**
2. **Inline threading section** of target file — Constraints, dependencies, blast radius
3. compositional-core/README.md — Current extracted system
4. design-system/README.md Part II — 5-stage pipeline refresh
5. Specific PART for current task

### IF AGENT HAS 15-20 MINUTES (Task Execution Mode):

| Task Type | Reading Path |
|-----------|--------------|
| Building with compositional-core | compositional-core/README.md → vocabulary/ + grammar/ |
| Understanding why pattern exists | specification/BACKBONE.md → compositional-core/process/extraction-provenance.md |
| Validating against soul | compositional-core/identity/prohibitions.md → validation/ |
| Building exploration | specification/patterns/ → validated-explorations/ → research/ |
| Creating updates | design-system/README.md Part IX (Retroactive Bridge) → provenance/ |

### IF AGENT HAS 45-60 MINUTES (First Read — Philosophy Mode):

1. design-system/README.md **Part I** (Philosophy) — Why discovery-based?
2. design-system/README.md **Part II** (Pipeline) — 5 stages
3. design-system/README.md **Part III** (Provenance) — 7 structures, 2 traversals
4. Skim design-system/README.md **Part IV-VIII**
5. compositional-core/README.md — Operational layer
6. compositional-core/vocabulary/tokens.css — Locked values

---

## 4. ANTI-PATTERNS — Common Routing Mistakes

### Anti-Pattern 1: Going to specification/ when they need compositional-core/

**Symptom:** Agent reads specification/tokens/ files (geometry.md, colors.md, typography.md, spacing.md) when they need to BUILD.

**Problem:** Specification is ABSTRACT. It explains WHY tokens exist, traces provenance. For building, need compositional-core/vocabulary/tokens.css (the :root block with 40 locked values).

**Correct route:** compositional-core/vocabulary/tokens.css for building, specification/tokens/ for understanding provenance.

**Root cause:** Conflating "understanding the system" (specification/) with "using the system" (compositional-core/).

---

### Anti-Pattern 2: Reading pipeline/ planning docs when they should be building

**Symptom:** Agent reads pipeline/01-CD-EVOLVED-VISION.md or pipeline/03-MIGRATION-PIPELINE.md when user asked to "build a page."

**Problem:** Pipeline/ is STRATEGIC PLANNING for future phases (CD execution, post-CD phases, migration roadmap). Not operational building instructions.

**Correct route:** compositional-core/README.md → phase-gated access → vocabulary + grammar + case studies.

**Root cause:** Interpreting "migration pipeline" as "how to build" when it's actually "how to plan the migration phase."

---

### Anti-Pattern 3: Skipping research/ context before building explorations

**Symptom:** Agent builds DD/OD/CD-style exploration without reading research/R3-DENSITY-DIMENSIONS.md or research/R5-COMBINATION-THEORY.md.

**Problem:** Explorations are research-grounded artifacts. R3 has 51 density findings, R5 has 39 combination findings. Building without these = mechanical application, not discovery-based extension.

**Correct route:** research/RESEARCH-SYNTHESIS.md → research/R[relevant].md → specification/patterns/ → validated-explorations/[fortress examples] → build.

**Root cause:** Not understanding that explorations test research hypotheses, not just demonstrate components.

---

### Anti-Pattern 4: Confusing validated-explorations/ fortress with templates to copy

**Symptom:** Agent treats DD-006-fractal.html or OD-006-creative.html as copy-paste templates.

**Problem:** Fortress explorations are PROOF-OF-CONCEPT implementations of research findings, not templates. Compositional-core has anti-gravity mechanisms specifically to prevent pattern-matching.

**Correct route:** Read validated-explorations/ to UNDERSTAND findings in context, then use compositional-core/case-studies/ (anti-prescription format) as inspiration, NOT templates.

**Root cause:** Not absorbing the "jazz model" philosophy: vocabulary (notes) + skill (improvisation) + gallery (recordings as inspiration).

---

### Anti-Pattern 5: Not reading prohibitions.md before building ANYTHING

**Symptom:** Agent builds page with border-radius > 0, box-shadow values, or gradient backgrounds.

**Problem:** 8 absolute prohibitions have ZERO exceptions. These are soul constraints. Violating them = work is INVALID, must be redone.

**Correct route:** compositional-core/identity/prohibitions.md is **First Contact layer**. Read BEFORE anything else for ANY task.

**Root cause:** Not understanding that compositional-core has phase-gated access: prohibitions.md is Layer 0 (always-load), not optional context.

---

### Anti-Pattern 6: Reading specification/BACKBONE.md when they need compositional-core/README.md

**Symptom:** Agent reads 35KB BACKBONE.md (master narrative of entire pipeline) when user asked "how do I use the design system?"

**Problem:** BACKBONE is historical narrative of research pipeline (5 stages, provenance chain). For USING the system, need compositional-core/README.md (operational layer, phase-gated protocol).

**Correct route:** BACKBONE for understanding WHY system exists and HOW it was built. Compositional-core/README for USING the system.

**Root cause:** Conflating "system narrative" (specification/BACKBONE) with "system operations manual" (compositional-core/README).

---

### Anti-Pattern 7: Not distinguishing Track 1 (assembly) from Track 2 (composition)

**Symptom:** Agent uses token application for prose-heavy narrative content, or invokes tension-composition skill for data tables.

**Problem:** ~40-50% of pages are Track 1 (assembly — mechanical token + pattern application). ~50-60% are Track 2 (composition — metaphor-driven tension resolution). Different execution paths, different timelines (45-90 min vs 3-5 hours).

**Correct route:** pipeline/03-MIGRATION-PIPELINE.md explains Track 1 vs Track 2 split. Pipeline/07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md has Track 2 skill invocation spec.

**Root cause:** Not reading pipeline/README.md "Big Picture" section that explains two-track architecture.

---

## 5. FOLDER LANDSCAPE — 8 Subfolders Explained

### Core Structure

```
design-system/
├── axis/                      ← Stage 4 explorations (AD-001 through AD-006)
├── compositional-core/        ← Extracted operational layer (Phase C output, 42 files, 880KB)
├── implementation/            ← Implementation artifacts (card-system, component-system, typography-system)
├── pipeline/                  ← Strategic planning docs (CD vision, migration, ingestion, 13 files)
├── research/                  ← Raw research findings (R1-R5, RESEARCH-SYNTHESIS.md, 337 findings)
├── specification/             ← Abstract specification (BACKBONE, tokens, patterns, provenance)
├── tension-test/              ← Metaphor validation (15 HTML layouts, 3 domains × 5 metaphors)
├── validated-explorations/    ← Fortress zone (DD, OD, CD explorations, 100% retention)
├── CLAUDE.md                  ← **MISSING — needs to be written**
└── README.md                  ← THE KORTAI DESIGN MIND (109KB, 9 Parts)
```

### Temporal States

| State | Folders | Status | Purpose |
|-------|---------|--------|---------|
| **Historical Fortress** | validated-explorations/ | LOCKED, 100% retention | DD-001 through DD-006, OD-001 through OD-006, CD-001 through CD-006. Proof-of-concept implementations. Crown jewels: DD-006 (108 refs), OD-006 (726 citations), CD-006 (39/40 score). |
| **Active Extraction** | compositional-core/ | LOCKED (Phase C complete) | 6-layer ontology: identity → vocabulary → grammar → components → case studies → guidelines. 40 items, Identity + Enablement hybrid lens. Anti-gravity 94.7% compliance. |
| **Active Specification** | specification/ | ACTIVE, evolving | Abstract layer: BACKBONE (master narrative), tokens (locked values), patterns (validated rhythms), provenance (3-layer architecture). |
| **Active Research** | research/ | ACTIVE, 337 findings | R1: 28 documentation patterns, R2: 27 creative layouts, R3: 51 density dimensions, R4: 192 axis innovations, R5: 39 combination theory. RESEARCH-SYNTHESIS cross-research insights. |
| **Future Planning** | pipeline/ | ACTIVE, strategic docs | CD evolved vision, post-CD phases, migration pipeline (Track 1+2), content ingestion, roadmap, insights. 13 files, ~9,200 lines. |
| **Ongoing Exploration** | axis/ | ACTIVE, Stage 4 explorations | AD-001 through AD-006 (6 files). AD findings feed into CD. |
| **Implementation Artifacts** | implementation/ | MIXED (archive + active) | Historical: archive/. Active: card-system/, component-system/, font-research/, typography-system/. |
| **Validation Testing** | tension-test/ | COMPLETE (archived to archive/tension-test/) | 15 HTML layouts testing metaphor-driven composition. Top 3: Playbook Elevation Map, Gas Town Floor Plan, Boris Geological Core. Moved to archive per git status. |

---

## 6. ROUTING DECISION MATRIX — Quick Reference

| If Agent Says... | Route To... | Then Read... | Warning |
|------------------|-------------|--------------|---------|
| "I need to build a page" | compositional-core/ | README.md → identity/prohibitions.md → vocabulary/tokens.css | DON'T skip prohibitions.md |
| "I need to validate a page" | compositional-core/validation/ | identity/prohibitions.md → validation/anti-gravity-report.md | Soul violations = INVALID work |
| "I need to understand the system" | design-system/README.md | Part I-III (45 min) | DON'T confuse this with specification/BACKBONE |
| "I need to plan migration" | pipeline/ | README.md → 03-MIGRATION-PIPELINE.md → 07-TRACK-2 | Distinguish Track 1 vs Track 2 |
| "I need to check research findings" | research/ | RESEARCH-SYNTHESIS.md → R[relevant].md | 337 findings total, not 124 |
| "I need token values" | compositional-core/vocabulary/tokens.css | (just read the :root block) | DON'T read specification/tokens/ for building |
| "I need to see examples" | validated-explorations/ | FINDINGS-INDEX.md → fortress/[DD/OD/CD]/ | DON'T copy-paste, use as inspiration |
| "I need to trace provenance" | specification/provenance/ | PIPELINE-MANIFEST.md → stage directories | 3-layer architecture: inline headers, light sections, formal docs |
| "I need to avoid anti-patterns" | specification/anti-patterns/registry.md | (read the registry) | Also check compositional-core/identity/prohibitions.md |

---

## 7. CRITICAL GAP IDENTIFIED

**The root design-system/CLAUDE.md does NOT exist.**

The current CLAUDE.md at /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/CLAUDE.md is actually **docs-spa/app/showcase/CLAUDE.md** from the old structure (before refactor). It:

1. References OLD paths (active/research/, archive/checkpoints/, active/design-system/tokens/)
2. Has 3-tier architecture references to fortress/, active/, archive/ that don't match current design-system/ structure
3. Mandates research grounding process that may not apply to all design-system/ tasks
4. Does NOT provide routing logic for the 8 subfolders

**This research identifies what the NEW design-system/CLAUDE.md should contain.**

---

## 8. RECOMMENDED ROUTING LOGIC FOR ROOT CLAUDE.MD

### Structure Recommendation

```markdown
# design-system/CLAUDE.md

## Quick Start — What Are You Here To Do?

### I'm here to BUILD
→ Start: compositional-core/README.md
→ ALWAYS load first: compositional-core/identity/prohibitions.md (8 absolute prohibitions)
→ Then: compositional-core/vocabulary/tokens.css (40 locked values)

### I'm here to VALIDATE/AUDIT
→ Start: compositional-core/identity/prohibitions.md (soul constraints)
→ Then: compositional-core/validation/ (quantitative rules + anti-gravity report)

### I'm here to UNDERSTAND the philosophy
→ Start: design-system/README.md (THE KORTAI DESIGN MIND, Part I-III, 45 min)
→ Then: specification/BACKBONE.md (master narrative)

### I'm here to PLAN migration/evolution
→ Start: pipeline/README.md (roadmap overview)
→ Then: pipeline/03-MIGRATION-PIPELINE.md (Track 1+2 architecture)

### I'm here to RESEARCH patterns
→ Start: research/RESEARCH-SYNTHESIS.md (cross-research insights)
→ Then: research/R[1-5].md (337 total findings)

### I'm here to TRACE provenance
→ Start: specification/provenance/PIPELINE-MANIFEST.md
→ Then: specification/provenance/stage-[N]-[name]/ directories

## Decision Tree

Q1: What phase are you in?
├─ Phase C extraction complete → compositional-core/ is operational layer (LOCKED)
├─ Phase D validation → pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md
├─ Fortress-only (pre-Phase C) → validated-explorations/ + specification/
└─ Migration → compositional-core/ + pipeline/03

Q2: Build, Analyze, or Plan?
├─ Build → compositional-core/
├─ Analyze → specification/ + compositional-core/validation/
└─ Plan → pipeline/

Q3: Track 1 (assembly) or Track 2 (composition)?
├─ Track 1 → compositional-core/vocabulary/ + grammar/
└─ Track 2 → compositional-core/ + pipeline/07 + tension-composition skill

## Folder Map

| Folder | State | Purpose | When To Read |
|--------|-------|---------|--------------|
| compositional-core/ | LOCKED (Phase C) | Operational layer, 40-item extraction | Building, primary entry point |
| specification/ | ACTIVE | Abstract spec, tokens, patterns, provenance | Understanding WHY, tracing history |
| research/ | ACTIVE | 337 findings (R1-R5) | Research grounding, finding context |
| pipeline/ | ACTIVE | Strategic planning (CD, migration, ingestion) | Planning future phases |
| validated-explorations/ | LOCKED | Fortress (DD, OD, CD) proof-of-concept | Inspiration, NOT templates |
| axis/ | ACTIVE | Stage 4 explorations (AD-001 through AD-006) | Understanding axis dimension |
| implementation/ | MIXED | Implementation artifacts (card-system, etc.) | Checking existing implementations |
| tension-test/ | ARCHIVED | Metaphor validation (moved to archive/) | Historical validation reference |

## Anti-Patterns to Avoid

1. DON'T read specification/tokens/ when building — use compositional-core/vocabulary/tokens.css
2. DON'T read pipeline/ when building — pipeline is strategic planning, not operations
3. DON'T skip compositional-core/identity/prohibitions.md — 8 absolute prohibitions ALWAYS apply
4. DON'T copy validated-explorations/ as templates — use as inspiration only
5. DON'T confuse BACKBONE (narrative) with compositional-core/README (operations manual)
6. DON'T mix Track 1 (assembly) with Track 2 (composition) execution paths
7. DON'T read for 45 min when you need 5 min — use Mode 3 (Context Recovery) path

## Priority First Reads

### 1 file (5 min):
compositional-core/README.md

### 2 files (10 min):
1. compositional-core/README.md
2. compositional-core/identity/prohibitions.md

### 3 files (15 min):
1. compositional-core/README.md
2. compositional-core/identity/prohibitions.md
3. compositional-core/vocabulary/tokens.css

### Context Recovery (5-10 min):
1. design-system/CLAUDE.md (this file)
2. Inline threading header of target file
3. compositional-core/README.md
4. design-system/README.md Part II (pipeline refresh)
```

---

## Conclusion

**Key Insight:** The design-system folder is NOT a flat collection of resources. It's a **temporal layering** of:
- Historical fortress (validated-explorations/)
- Extracted operational layer (compositional-core/)
- Abstract specification (specification/)
- Future planning (pipeline/)
- Active research (research/)
- Active exploration (axis/)

Agents need **state-based routing** ("which phase?") BEFORE task-based routing ("what am I doing?").

**Recommended Next Step:** Write design-system/CLAUDE.md with:
1. Quick Start section (I'm here to BUILD/VALIDATE/UNDERSTAND/PLAN/RESEARCH/TRACE)
2. Decision tree (3 questions: phase, purpose, track)
3. Folder map (8 folders, temporal states, when to read)
4. Anti-patterns (7 common mistakes)
5. Priority first reads (1/2/3 files + context recovery path)
