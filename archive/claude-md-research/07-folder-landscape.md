# Design-System Folder Landscape Map

**Date:** 2026-02-14
**Researcher:** folder-landscape-researcher
**Mission:** Map ALL folders inside `design-system/` to understand structure, relationships, and redundancies

---

## Executive Summary — The Dual-Core Problem

The `design-system/` folder contains **TWO parallel token/component/pattern systems** with different purposes:

1. **`compositional-core/`** (NEW, Feb 2026) — 43 files, **Phase-gated operational layer** for building new pages
2. **`specification/`** (OLDER, 2025-2026) — 57 files, **Comprehensive documentation** with provenance chain

**KEY RELATIONSHIP:** These are NOT redundant. They serve different audiences:
- **compositional-core/** = "Jazz model" — minimal vocabulary for creative composition (40 items)
- **specification/** = "Music theory textbook" — complete system documentation with research provenance (617+ lines of tokens alone)

**ROOT CLAUDE.MD CHALLENGE:** Must explain this dual-core structure and route agents appropriately.

---

## Top-Level Structure — 8 Folders

```
design-system/
├── compositional-core/    43 files  ← NEW Phase C extraction (2026-02-14)
├── specification/         57 files  ← Comprehensive spec with provenance
├── validated-explorations/ 30 files ← DD/OD/CD HTML artifacts
├── implementation/      4,059 files ← React components, testing, experiments
├── research/               7 files  ← R1-R5 research streams + synthesis
├── pipeline/              17 files  ← Post-CD planning docs
├── axis/                 194 files  ← AD (Stage 4) axis explorations
├── tension-test/         104 files  ← Metaphor validation layouts
```

**File count sources:** `find [dir] -type f | wc -l`

---

## 1. compositional-core/ — The Phase-Gated Operational Layer

**Created:** 2026-02-14 (Phase C extraction)
**Files:** 43 (880KB, 20,576 lines)
**Status:** ACTIVE — newest addition to design-system/
**Purpose:** Minimal operational vocabulary for building KortAI pages

### Structure (6-Layer Ontology)

```
compositional-core/
├── README.md              ← Entry point, phase-gate protocol
├── identity/              ← Layer 1: Prohibitions (what NOT to do)
│   ├── prohibitions.md    ← 20 prohibitions (8 absolute, 12 conditional)
│   └── soul-constraints.md← 3 immutable anchors
├── vocabulary/            ← Layer 2: Design tokens
│   ├── tokens.css         ← :root block (174 lines) — EXTRACTION from spec/tokens/
│   └── token-mutability.md← IMMUTABLE vs MUTABLE classification
├── grammar/               ← Layer 3: Compositional rules
│   ├── mechanisms.md      ← 18 mechanisms (border system, callouts, etc.)
│   ├── composition-rules.md← 11 rules for combining mechanisms
│   └── border-grammar.md  ← Border-width encoding semantics
├── components/            ← Layer 4: Component inventory
│   ├── merged-components.css ← 31KB stripped CSS (metaphor names removed)
│   └── component-inventory.md← Component list with confidence levels
├── case-studies/          ← Layer 5: Proof-of-concept layouts
│   ├── DD-case-studies.md ← 3 DD layouts analyzed
│   ├── OD-case-studies.md ← 3 OD layouts analyzed
│   ├── CD-case-studies.md ← 3 CD layouts analyzed
│   └── case-study-template.md ← Anti-prescription format
├── guidelines/            ← Layer 6: Semantic gap guidance
│   ├── responsive-strategy.md
│   ├── usage-criteria.md
│   └── semantic-gap-rules.md ← 7+ rules
├── validation/            ← Phase C success metrics
│   ├── convergence-report.md
│   ├── anti-gravity-audit.md ← 94.7% mechanism compliance
│   └── gap-assessment.md
├── process/               ← Meta-documentation
│   ├── extraction-provenance.md ← Lens choice rationale
│   ├── lens-manifesto.md
│   ├── assumption-log.md
│   └── construction-narrative.md
└── skill-enrichments/     ← Additions for tension-composition skill
    ├── tension-enrichments.md
    └── perceptual-enrichments.md
```

### What It Contains

**40 extracted items** (lens: Identity + Enablement hybrid):
- 3 soul constraints (border-radius: 0, box-shadow: none, primary red)
- 8 absolute prohibitions + 12 conditional prohibitions
- 16 consensus core items (color palette, typography, spacing scale)
- 18 mechanisms (callout family, border encoding, zone differentiation)
- 11 compositional rules
- 9 case studies (anti-prescription format)

**SOURCE-FIRST extraction:** Built from `specification/tokens/*.md`, verified against DD/OD/CD HTML

### When Agents Enter Here

**USE compositional-core/ when:**
- Building NEW pages with KortAI design language
- Need MINIMAL vocabulary (not overwhelmed by full spec)
- Following phase-gated workflow (Layer 1 → 2 → 3...)
- Want jazz-model approach (improvise within constraints)

**ROUTING SIGNAL:** Task mentions "build," "create," "new page," "composition"

### Relationship to specification/

**compositional-core/ IS:**
- Extracted SUBSET of specification/ (40 items vs 617+ lines of tokens)
- Operationally optimized (phase gates, anti-gravity mechanisms)
- Construction-focused (how to compose, not why it exists)

**compositional-core/ IS NOT:**
- Replacement for specification/ (different purpose)
- Complete system documentation (missing provenance chain)
- Source of truth for token values (specification/ is source)

**CRITICAL INSIGHT:** compositional-core/vocabulary/tokens.css was EXTRACTED FROM specification/tokens/*.md. The extraction process:
1. Read all 4 files in specification/tokens/ (617 lines)
2. Applied Identity + Enablement lens
3. Collapsed to 174-line :root block
4. Classified tokens as IMMUTABLE vs MUTABLE vs AVAILABLE

---

## 2. specification/ — The Comprehensive Design System Documentation

**Created:** 2025-2026 (evolved through T1→DD→OD→AD→CD pipeline)
**Files:** 57 files
**Status:** ACTIVE — canonical source of truth
**Purpose:** Complete design system documentation with research provenance

### Structure

```
specification/
├── README.md              ← "THE KORTAI DESIGN MIND" (109KB, 2,053 lines)
├── CLAUDE.md              ← Navigation for agents entering specification/
├── BACKBONE.md            ← Master narrative of 5-stage pipeline
├── QUICK-START.md         ← Quick reference
├── tokens/                ← Canonical token registry (SOURCE OF TRUTH)
│   ├── colors.md          ← 133 lines, T1-locked values
│   ├── typography.md      ← 166 lines, font trinity
│   ├── spacing.md         ← 155 lines, 4px base unit
│   └── geometry.md        ← 163 lines, border-radius: 0
├── patterns/              ← Validated rhythms
│   ├── PATTERN-INDEX.md
│   ├── density-patterns.md
│   ├── organizational-patterns.md
│   ├── axis-patterns.md
│   └── combination-rules.md
├── components/            ← Component specifications
│   └── OVERVIEW.md
├── anti-patterns/         ← What to avoid
│   └── registry.md
├── guides/                ← Usage guidance
│   └── migration-guide.md
└── provenance/            ← Research chain (3-layer architecture)
    ├── PIPELINE-MANIFEST.md
    ├── stage-1-components/
    ├── stage-2-density-dd/
    ├── stage-3-organization-od/
    ├── stage-4-axis-ad/
    ├── stage-5-combination-cd/
    └── original-research/
```

### What It Contains

**FULL design system:**
- 617+ lines of token documentation (vs compositional-core's 174)
- Complete provenance chain (337 research findings → patterns)
- 5-stage pipeline narrative (T1→DD→OD→AD→CD)
- Anti-patterns registry
- Migration guides
- Phase 2B threading headers (490 files with provenance metadata)

**KEY FILES:**
1. **README.md** (109KB) — "THE KORTAI DESIGN MIND" — philosophical operating manual
2. **BACKBONE.md** — Master narrative connecting 337 findings to validated patterns
3. **tokens/*.md** — SOURCE OF TRUTH for all token values (compositional-core extracts from here)

### When Agents Enter Here

**USE specification/ when:**
- Need to understand WHY (provenance chain)
- Researching design system rationale
- Tracing finding IDs (COMP-F-XXX, DD-F-XXX, etc.)
- Understanding full philosophical framework
- Migrating existing pages
- Validating against complete system

**ROUTING SIGNAL:** Task mentions "why," "provenance," "research," "trace finding," "philosophy," "understand rationale"

### Relationship to compositional-core/

**specification/ IS:**
- Source of truth for compositional-core/vocabulary/tokens.css
- Complete documentation (compositional-core is minimal subset)
- Research-grounded (provenance chain)
- Philosophy-heavy (README.md teaches "how to think")

**specification/ FEEDS:**
- compositional-core/vocabulary/tokens.css (extracted from tokens/*.md)
- compositional-core/identity/prohibitions.md (soul constraints from README.md)

---

## 3. validated-explorations/ — The HTML Artifact Repository

**Created:** 2025-2026 (DD/OD/CD phases)
**Files:** 30 files
**Status:** REFERENCE — frozen artifacts
**Purpose:** Validated HTML explorations that proved design concepts

### Structure

```
validated-explorations/
├── CLAUDE.md
├── FINDINGS-INDEX.md
├── density/               ← DD-001 through DD-006
│   ├── DD-001-breathing.html
│   ├── DD-002-gradient.html
│   ├── DD-003-islands.html
│   ├── DD-004-layers.html
│   ├── DD-005-rivers.html
│   └── DD-006-fractal.html (crown jewel, 20+ inbound refs)
├── organizational/        ← OD-001 through OD-006
│   ├── OD-001-conversational.html
│   ├── OD-002-narrative.html
│   ├── OD-003-task-based.html
│   ├── OD-004-confidence.html
│   ├── OD-005-spatial.html
│   ├── OD-006-creative.html
│   └── OD-006-CREATIVE-RESEARCH-FEED.md
└── combination/           ← CD-001 through CD-006
    ├── CD-001-reasoning-inside-code.html
    ├── CD-002-task-containing-decision.html
    ├── CD-003-file-tree-with-callouts.html
    ├── CD-004-essence-as-background.html
    ├── CD-005-multi-axis-transition.html
    ├── CD-006-pilot-migration.html (crown jewel, 39/40 audit score)
    ├── CD-005-EVALUATION.md
    ├── CD-006-CONTENT-SELECTION.md
    ├── CD-AUDIT-SYNTHESIS.md
    ├── CD-BUILD-STATE.md
    ├── convention-audit-report.md
    ├── lock-sheet.md
    └── R5-EVALUATION-MATRIX.md
```

### What It Contains

**27 HTML explorations** (6 DD + 6 OD + 6 CD = 18 core, + 9 CD research files):
- Density dimension (DD) explorations — validated breathing, gradient, islands, layers, rivers, fractal patterns
- Organizational (OD) explorations — validated conversational, narrative, task-based, confidence, spatial, creative layouts
- Combination (CD) explorations — validated multi-pattern compositions

**CROWN JEWELS:**
- DD-006-fractal.html — 20+ inbound references, self-similarity proof
- CD-006-pilot-migration.html — 39/40 audit score, convention compliance

### When Agents Enter Here

**USE validated-explorations/ when:**
- Need visual proof-of-concept for patterns
- Researching pattern combinations
- Extracting CSS for compositional-core
- Understanding pattern implementation
- Validating new work against proven examples

**ROUTING SIGNAL:** Task mentions "example," "reference," "visual proof," "DD-006," "crown jewel"

### Relationship to Other Folders

**FEEDS:**
- compositional-core/components/merged-components.css (extracted from DD/OD/CD CSS)
- compositional-core/case-studies/*.md (analyzed DD/OD/CD layouts)
- specification/patterns/*.md (patterns validated through these explorations)

**FROZEN:** These files are reference artifacts, not active development

---

## 4. implementation/ — The React Component Codebase

**Created:** 2025-2026
**Files:** 4,059 files
**Status:** MIXED (active systems + archive)
**Purpose:** React component implementations, testing infrastructure, experiments

### Structure

```
implementation/
├── README.md
├── CLAUDE.md
├── FOLDER-MAP.md
├── component-system/      ← Active component library
│   ├── components/
│   ├── css/
│   ├── tests/
│   ├── perceptual-audit-v2/ ← T1 synthesis (CRITICAL — source of truth)
│   ├── assets/
│   └── archive/
├── card-system/           ← Card component experiments
│   ├── css/
│   ├── tests/
│   ├── research/
│   ├── experiments/
│   └── assets/
├── typography-system/     ← Typography testing
│   ├── tests/
│   ├── test-snapshots/
│   ├── test-results/
│   ├── playwright-report/
│   └── node_modules/
├── font-research/         ← Font specimen comparisons
│   ├── specimens/
│   └── comparisons/
└── archive/               ← Deprecated implementations
    ├── tokens/
    ├── components/
    ├── extraction/
    └── variations/
```

### What It Contains

**4,059 files including:**
- React component implementations
- Playwright tests + snapshots
- node_modules (typography-system)
- perceptual-audit-v2/ — **T1 SYNTHESIS** (source of all locked token values)
- Font research specimens
- Archived deprecated code

**CRITICAL SUBFOLDER:**
- **implementation/component-system/perceptual-audit-v2/synthesis/** — Contains T1 synthesis files (DESIGN-TOKEN-SUMMARY.md, etc.) that are the SOURCE OF TRUTH for all token values referenced by specification/tokens/*.md

### When Agents Enter Here

**USE implementation/ when:**
- Building React components
- Running Playwright tests
- Researching font choices
- Need T1 synthesis files (perceptual-audit-v2/synthesis/)
- Working on component-level implementation

**AVOID implementation/archive/** — deprecated code

**ROUTING SIGNAL:** Task mentions "React," "component," "test," "implement," "T1 synthesis"

### Relationship to Other Folders

**FEEDS:**
- specification/tokens/*.md (from perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md)
- compositional-core/vocabulary/tokens.css (indirectly, via specification/)

**WARNING:** Contains archive/ with DANGEROUS wrong values (border-radius > 0, incorrect fonts) per MEMORY.md

---

## 5. research/ — The R1-R5 Research Streams

**Created:** 2025
**Files:** 7 files
**Status:** REFERENCE — completed research
**Purpose:** Original research findings that fed into design system

### Structure

```
research/
├── CLAUDE.md
├── R1-DOCUMENTATION-PATTERNS.md
├── R2-CREATIVE-LAYOUTS.md
├── R3-DENSITY-DIMENSIONS.md
├── R4-AXIS-INNOVATIONS.md
├── R5-COMBINATION-THEORY.md
└── RESEARCH-SYNTHESIS.md
```

### What It Contains

**337 research findings** across 5 streams:
- R1: Documentation patterns
- R2: Creative layouts
- R3: Density dimensions (source of DD patterns)
- R4: Axis innovations (source of AD patterns)
- R5: Combination theory (source of CD patterns)
- RESEARCH-SYNTHESIS.md: Cross-research insights

**FEEDS:** specification/BACKBONE.md narrative + specification/patterns/*.md

### When Agents Enter Here

**USE research/ when:**
- Tracing finding IDs (R1-XXX, R3-023, etc.)
- Understanding research rationale
- Researching pattern origins

**ROUTING SIGNAL:** Task mentions "R1-," "R3-023," "research finding," "original research"

---

## 6. pipeline/ — Post-CD Planning Documents

**Created:** 2026 (post-CD)
**Files:** 17 files
**Status:** PLANNING — forward-looking strategy
**Purpose:** Post-CD phase planning (extraction, migration, content ingestion)

### Structure

```
pipeline/
├── README.md
├── CLAUDE.md
├── 01-CD-EVOLVED-VISION.md
├── 02-POST-CD-PHASES.md
├── 03-MIGRATION-PIPELINE.md
├── 04-CONTENT-INGESTION.md
├── 05-COMPLETE-ROADMAP.md
├── 06-KEY-INSIGHTS.md
├── 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md
├── 08-COMPOSITIONAL-STRATEGY-LIBRARY.md
├── 09-EXTRACTION-VALIDATION-PROTOCOL.md
├── MASTER-CD-EXECUTION-PROMPT.md
├── OPEN-QUESTIONS.md
├── component-evolution-synthesis.md
├── source-component-comparison.md
├── tension-deep-dive.md
└── TENSION-PROTOCOL.md
```

### What It Contains

**Post-CD strategic planning:**
- Phase D extraction planning (led to compositional-core/ creation)
- Migration pipeline strategy
- Content ingestion protocols
- Tension composition methodology

**INFORMED:** compositional-core/ Phase C extraction

### When Agents Enter Here

**USE pipeline/ when:**
- Planning future phases
- Understanding extraction strategy
- Migration planning

**ROUTING SIGNAL:** Task mentions "Phase D," "migration," "extraction planning"

---

## 7. axis/ — Stage 4 (AD) Axis Explorations

**Created:** 2025-2026 (AD phase)
**Files:** 194 files
**Status:** COMPLETED — AD phase done
**Purpose:** Axis dimension (attention topology) explorations

### Structure

```
axis/
├── CLAUDE.md
├── AD-001-z-pattern.html
├── AD-002-f-pattern.html
├── AD-003-bento-grid.html
├── AD-004-spiral.html
├── AD-005-choreography.html
├── AD-006-compound.html
├── _perceptual-audit/     ← AD audit work
│   └── AD-006/
└── _perceptual-research/  ← AD research
    └── _plan-audit/
```

### What It Contains

**6 AD explorations** (z-pattern, f-pattern, bento-grid, spiral, choreography, compound)
**AD findings** (AD-F-001 through AD-F-025+)
**Audit research**

**FEEDS:** specification/patterns/axis-patterns.md

### When Agents Enter Here

**USE axis/ when:**
- Researching attention topology patterns
- Tracing AD findings
- Understanding axis dimension

**ROUTING SIGNAL:** Task mentions "AD-," "axis," "attention topology," "z-pattern"

---

## 8. tension-test/ — Metaphor Validation Layouts

**Created:** 2025-2026 (tension-composition testing)
**Files:** 104 files
**Status:** REFERENCE — test complete
**Purpose:** 15 HTML layouts testing metaphor-driven composition

### Structure

```
tension-test/
├── playbook/              ← 5 metaphor variations
│   ├── metaphor-1-apprenticeship-workshop.html
│   ├── metaphor-2-construction-site.html
│   ├── metaphor-3-geological-stratigraphy.html
│   ├── metaphor-4-elevation-map.html (TOP 3)
│   ├── metaphor-5-curriculum-syllabus.html
│   └── {screenshots}/
├── boris/                 ← 5 metaphor variations
│   ├── metaphor-1-manuscript-codex.html
│   ├── metaphor-2-geological-core.html (TOP 3)
│   ├── metaphor-3-craftsman-workbench.html
│   ├── metaphor-4-apprentice-curriculum.html
│   ├── metaphor-5-archival-vault.html
│   └── {screenshots}/
├── gastown/               ← 5 metaphor variations
│   ├── metaphor-1-industrial-refinery.html
│   ├── metaphor-2-military-command.html
│   ├── metaphor-3-city-zoning.html
│   ├── metaphor-4-circuit-board.html
│   ├── metaphor-5-building-floorplan.html (TOP 3)
│   └── {screenshots}/
└── audit/                 ← Audit reports
    ├── screenshots/
    └── [audit reports]
```

### What It Contains

**15 metaphor-driven layouts** (3 base contents × 5 metaphors each):
- Tested tension-composition pipeline
- Validated metaphor-driven composition approach
- TOP 3: Playbook Elevation Map, Boris Geological Core, Gas Town Floor Plan

**INFORMED:**
- ~/.claude/skills/tension-composition/SKILL.md
- compositional-core/skill-enrichments/

### When Agents Enter Here

**USE tension-test/ when:**
- Researching metaphor-driven composition
- Understanding tension-composition skill development
- Reviewing metaphor validation

**ROUTING SIGNAL:** Task mentions "tension," "metaphor," "composition," "TOP 3"

---

## Key Redundancies & Overlaps

### TOKENS: specification/ vs compositional-core/

**specification/tokens/ (617 lines):**
- 4 markdown files (colors, typography, spacing, geometry)
- Complete documentation with provenance headers
- Threading metadata (Phase 2B)
- Diagnostic questions
- SOURCE OF TRUTH

**compositional-core/vocabulary/tokens.css (174 lines):**
- Single CSS file (:root block)
- EXTRACTED from specification/tokens/*.md
- Lens: Identity + Enablement (minimal subset)
- Mutability classification (IMMUTABLE vs MUTABLE vs AVAILABLE)

**RELATIONSHIP:** compositional-core is DERIVED, specification is SOURCE

### PATTERNS: specification/patterns/ vs compositional-core/grammar/

**specification/patterns/:**
- density-patterns.md (validated DD patterns with scores)
- organizational-patterns.md (OD patterns)
- axis-patterns.md (AD patterns)
- combination-rules.md (CD combination grammar)
- Complete provenance chain

**compositional-core/grammar/:**
- mechanisms.md (18 mechanisms extracted from patterns)
- composition-rules.md (11 rules for combining)
- border-grammar.md (border-width semantics)

**RELATIONSHIP:** compositional-core extracts OPERATIONAL subset (how to use), specification documents FULL RESEARCH (why it exists)

### COMPONENTS: All Three

**specification/components/:**
- Component specifications (documentation)

**compositional-core/components/:**
- merged-components.css (31KB stripped CSS from DD/OD/CD)
- component-inventory.md (list with confidence levels)

**implementation/component-system/:**
- React component implementations

**RELATIONSHIP:**
- specification/ = spec docs
- compositional-core/ = extracted CSS for composition
- implementation/ = actual React code

---

## Folder Status Classification

### ACTIVE (agents work here)
1. **compositional-core/** — NEW operational layer (Phase C, 2026-02-14)
2. **specification/** — Canonical design system documentation

### REFERENCE (read-only, frozen)
3. **validated-explorations/** — DD/OD/CD HTML artifacts
4. **research/** — R1-R5 research streams
5. **tension-test/** — Metaphor validation layouts

### SPECIALIZED (specific tasks only)
6. **implementation/** — React components, testing (4,059 files)
7. **axis/** — AD explorations (completed)
8. **pipeline/** — Post-CD planning docs

---

## Critical Paths for Common Agent Tasks

### Task: Build a new KortAI page
**PATH:**
1. Read `compositional-core/README.md` (phase-gate protocol)
2. Layer 1: `compositional-core/identity/prohibitions.md` (ALWAYS load)
3. Layer 2: `compositional-core/vocabulary/tokens.css` (ALWAYS load)
4. Layer 3+: Follow phase gates

### Task: Understand design system philosophy
**PATH:**
1. Read `specification/README.md` (THE KORTAI DESIGN MIND, 109KB)
2. Read `specification/BACKBONE.md` (master narrative)
3. Explore `specification/provenance/` (research chain)

### Task: Trace a finding ID
**PATH:**
1. Check `specification/provenance/PIPELINE-MANIFEST.md`
2. Navigate to stage folder (stage-1-components/, stage-2-density-dd/, etc.)
3. Read finding document (component-findings.md, DD-outbound-findings.md, etc.)

### Task: Get token values
**PATH:**
1. **SOURCE OF TRUTH:** `specification/tokens/*.md` (617 lines)
2. **QUICK REFERENCE:** `compositional-core/vocabulary/tokens.css` (174 lines)

### Task: Understand pattern provenance
**PATH:**
1. Read `specification/patterns/[pattern-name].md`
2. Trace to `specification/provenance/` for research chain
3. Check `research/R[X]-[NAME].md` for original research

---

## Design-System CLAUDE.md Routing Strategy

Based on this landscape, the root `design-system/CLAUDE.md` must:

### 1. Explain Dual-Core Structure
- compositional-core/ = minimal operational layer (jazz model)
- specification/ = comprehensive documentation (music theory)

### 2. Route by Task Intent

**Build/Create/Compose → compositional-core/**
- "I need to build a new page"
- "How do I compose KortAI layouts?"
- "What tokens are available?"

**Understand/Research/Trace → specification/**
- "Why does this pattern exist?"
- "Trace finding DD-F-006"
- "What's the provenance chain?"

**Reference/Example → validated-explorations/**
- "Show me an example of density patterns"
- "What does DD-006 look like?"

**Implement → implementation/**
- "Build React component"
- "Run tests"

### 3. Always-Load Files (ALL agents, ALL tasks)
1. `compositional-core/identity/prohibitions.md` (22 prohibitions)
2. `compositional-core/vocabulary/tokens.css` (174 lines)

These are NON-NEGOTIABLE for ANY design-system work.

### 4. Warn About Stale/Dangerous Folders
- **implementation/archive/** — deprecated code, DANGEROUS wrong values
- Do NOT use old token values from archive/

---

## Redundancy Assessment

### NOT REDUNDANT (different purposes)
- **compositional-core/ vs specification/** — minimal vs comprehensive, jazz vs textbook
- **specification/tokens/ vs compositional-core/vocabulary/** — source vs extraction

### ARCHIVE CANDIDATES
- **implementation/archive/** — already marked as deprecated
- **Some pipeline/ docs** — planning docs for completed Phase C?

### KEEP ALL
- **validated-explorations/** — frozen artifacts, historical proof
- **research/** — original research, provenance chain dependency
- **tension-test/** — skill development provenance
- **axis/** — AD phase complete, but needed for AD finding references

---

## Folder Relationships Diagram

```
specification/               compositional-core/
(SOURCE OF TRUTH)           (EXTRACTED OPERATIONAL)
    ↓                              ↑
tokens/*.md (617 lines) ──────→ vocabulary/tokens.css (174 lines)
patterns/*.md ──────────────→ grammar/mechanisms.md
provenance/ ────────────────→ process/extraction-provenance.md
README.md (philosophy) ─────→ identity/prohibitions.md

                ↓
validated-explorations/
(DD/OD/CD HTML)
    ↓
compositional-core/components/merged-components.css
compositional-core/case-studies/*.md

research/               specification/
(R1-R5 findings) ─────→ patterns/*.md
                  ─────→ provenance/

implementation/
component-system/
perceptual-audit-v2/
synthesis/
    ↓
specification/tokens/*.md (T1 values)
```

---

## Recommendations for Root CLAUDE.md

### 1. Lead with Dual-Core Explanation
```
design-system/ contains TWO parallel systems:
- compositional-core/ — Minimal vocabulary for building (40 items)
- specification/ — Complete documentation for understanding (617+ lines)

Think: Jazz improvisation (compositional-core) vs Music theory textbook (specification)
```

### 2. Binary Routing Decision Tree
```
Q: Are you BUILDING something new?
  YES → Start with compositional-core/README.md
  NO  → Continue below

Q: Do you need to understand WHY?
  YES → Start with specification/README.md
  NO  → Continue below

Q: Do you need a visual example?
  YES → Go to validated-explorations/
  NO  → Continue below

Q: Are you implementing React code?
  YES → Go to implementation/
  NO  → Read specification/BACKBONE.md
```

### 3. Universal Always-Load (all agents)
```
BEFORE ANY WORK, ALWAYS LOAD:
1. compositional-core/identity/prohibitions.md
2. compositional-core/vocabulary/tokens.css

These are NON-NEGOTIABLE. Violating prohibitions = not KortAI.
```

### 4. Folder Status Legend
```
✅ ACTIVE: compositional-core/, specification/
📚 REFERENCE: validated-explorations/, research/, tension-test/
🔧 SPECIALIZED: implementation/, axis/, pipeline/
⚠️  DEPRECATED: implementation/archive/
```

### 5. Token Source Clarity
```
TOKEN VALUES — Single Source of Truth:
- specification/tokens/*.md (617 lines) ← READ THIS for understanding
- compositional-core/vocabulary/tokens.css (174 lines) ← USE THIS for building

compositional-core tokens are EXTRACTED from specification tokens.
If conflict exists, specification/ wins.
```

---

## Evolution State Summary

### NEWEST (Feb 2026)
- **compositional-core/** — Phase C extraction (2026-02-14)

### CURRENT (2025-2026)
- **specification/** — Living documentation, active
- **validated-explorations/** — Frozen reference
- **implementation/** — Active development
- **axis/** — AD phase complete (reference)

### HISTORICAL (2025)
- **research/** — R1-R5 completed research
- **pipeline/** — Post-CD planning (informed Phase C)
- **tension-test/** — Tension-composition validation (complete)

### DEPRECATED
- **implementation/archive/** — Old tokens, components (DANGEROUS)

---

## Open Questions for Root CLAUDE.md

1. **Should compositional-core/README.md be linked from root CLAUDE.md as mandatory first-contact?** (Given it's the newest operational layer)

2. **How to prevent agents from reading specification/ when compositional-core/ would suffice?** (Avoid context bloat)

3. **Should the dual-core explanation live in root CLAUDE.md or be referenced from design-system/README.md?** (Avoid duplication)

4. **Is there a "quick start" path for agents who just need tokens + prohibitions?** (2-file minimum viable load)

5. **Should pipeline/ docs be archived now that Phase C extraction is complete?** (Or keep for Phase D planning?)

---

## File Count Summary

| Folder | Files | Purpose | Status |
|--------|-------|---------|--------|
| compositional-core/ | 43 | Phase-gated operational layer | ✅ ACTIVE (NEW) |
| specification/ | 57 | Comprehensive documentation | ✅ ACTIVE |
| validated-explorations/ | 30 | DD/OD/CD HTML artifacts | 📚 REFERENCE |
| implementation/ | 4,059 | React components, tests | 🔧 SPECIALIZED |
| research/ | 7 | R1-R5 research streams | 📚 REFERENCE |
| pipeline/ | 17 | Post-CD planning | 🔧 SPECIALIZED |
| axis/ | 194 | AD explorations | 📚 REFERENCE |
| tension-test/ | 104 | Metaphor validation | 📚 REFERENCE |
| **TOTAL** | **4,511** | | |

**Active folders:** 2 (compositional-core, specification)
**Reference folders:** 4 (validated-explorations, research, axis, tension-test)
**Specialized folders:** 2 (implementation, pipeline)

---

## Key Insight — The Jazz Model Metaphor

The relationship between compositional-core/ and specification/ is like:

**compositional-core/ = Jazz improvisation**
- Minimal vocabulary (notes, chords)
- Skill-based (how to compose)
- Gallery of inspiration (case studies, NOT templates)
- Phase-gated (learn vocabulary → grammar → composition)

**specification/ = Music theory textbook**
- Complete documentation
- Historical provenance (why these notes?)
- Research-grounded
- Philosophy-heavy (how to think about music)

**An agent building a page** needs the jazz model (compositional-core/).
**An agent understanding the system** needs the textbook (specification/).

Both are necessary. Neither is redundant.

---

**END FOLDER LANDSCAPE RESEARCH**
