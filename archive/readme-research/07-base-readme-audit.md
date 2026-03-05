# Base README Audit — Staleness and Gaps Report

**Auditor:** readme-auditor
**Date:** 2026-02-14
**Files Audited:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/README.md` (2,364 lines, 137KB)
- Actual directory structure: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/`

---

## Executive Summary

The base README (THE KORTAI DESIGN MIND) is **severely out of date** with the current repository structure. It references the **OLD pre-restructure architecture** from `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/showcase/DESIGN-SYSTEM/` which **NO LONGER EXISTS**. The 3x comprehensive audit restructured the repo into `fortress/`, `active/`, and `archive/` tiers — **none of which are documented in the README**.

**Most critical gap:** The README contains **ZERO mention of `compositional-core/`**, the most important recent addition (Phase C extraction, 40 items, 16 consensus core + 8 prohibitions + 16 components). This is the completed design system extraction that should be the FIRST THING a new reader encounters.

---

## 1. Directory Tree Accuracy — CRITICAL FAILURES

### What the README Shows (Lines 1864-2024)

The README documents this structure:

```
DESIGN-SYSTEM/
├── tokens/           ← WHAT the system uses
├── components/       ← HOW elements behave
├── patterns/         ← WHEN to apply what
├── guides/           ← HOW to migrate and apply
└── anti-patterns/    ← What NOT to do

DESIGN-SYSTEM/provenance/
├── PIPELINE-MANIFEST.md
├── RESEARCH-ACTIVE.md
├── SOUL-DISCOVERIES.md
├── original-research/
├── stage-1-components/
├── stage-2-density-dd/
├── stage-3-organization-od/
├── stage-4-axis-ad/
└── stage-5-combination-cd/

showcase/explorations/
├── density/
├── organizational/
├── axis/
└── combination/

showcase/checkpoints/
├── MASTER-STATE.md
├── [PHASE]-CHECKPOINT.md
└── RESEARCH-ACTIVE.md
```

### What Actually Exists (Current Structure)

```
design-system/
├── axis/                    ← NOT IN README
├── compositional-core/      ← NOT IN README (CRITICAL OMISSION)
├── implementation/          ← NOT IN README
├── pipeline/                ← NOT IN README
├── research/                ← NOT IN README
├── specification/           ← NOT IN README
├── tension-test/            ← NOT IN README (recently moved from archive)
├── validated-explorations/  ← NOT IN README
├── CLAUDE.md                ← mentioned
└── README.md                ← this file
```

### Comparison: Missing vs Documented

| Directory | In README? | Actually Exists? | Status |
|-----------|------------|------------------|--------|
| `compositional-core/` | ❌ NO | ✅ YES | **CRITICAL GAP** — Phase C extraction, 766 lines, 40 items |
| `tension-test/` | ❌ NO | ✅ YES | **HIGH GAP** — 15 HTML layouts, metaphor validation |
| `axis/` | ❌ NO | ✅ YES | **HIGH GAP** — AD work, research, axis explorations |
| `implementation/` | ❌ NO | ✅ YES | **MEDIUM GAP** |
| `pipeline/` | ❌ NO | ✅ YES | **MEDIUM GAP** |
| `research/` | ❌ NO | ✅ YES | **MEDIUM GAP** — R1-R5 streams |
| `specification/` | ❌ NO | ✅ YES | **MEDIUM GAP** |
| `validated-explorations/` | ❌ NO | ✅ YES | **MEDIUM GAP** |
| `tokens/` | ✅ YES | ❌ NO | **STALE** — old path, doesn't exist here |
| `components/` | ✅ YES | ❌ NO | **STALE** — old path, doesn't exist here |
| `patterns/` | ✅ YES | ❌ NO | **STALE** — old path, doesn't exist here |
| `guides/` | ✅ YES | ❌ NO | **STALE** — old path, doesn't exist here |
| `anti-patterns/` | ✅ YES | ❌ NO | **STALE** — old path, doesn't exist here |
| `provenance/` | ✅ YES | ❌ NO | **STALE** — old path `DESIGN-SYSTEM/provenance/` doesn't exist |

**Accuracy rate: 0/8 documented directories exist at documented paths = 0%**

---

## 2. Stale References — SYSTEMATIC FAILURES

### Path References (All Stale)

| Line(s) | Stale Reference | Actual Location (if exists) | Priority |
|---------|----------------|----------------------------|----------|
| 3, 55-65 | `docs-spa/app/showcase/DESIGN-SYSTEM/` | `design-system/` (repo root) | CRITICAL |
| 60 | `DESIGN-SYSTEM/BACKBONE.md` | Unknown if exists | CRITICAL |
| 61 | `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` | Unknown if exists | CRITICAL |
| 62 | `showcase/checkpoints/SOUL-DISCOVERIES.md` | `archive/checkpoints/SOUL-DISCOVERIES.md` | HIGH |
| 63 | `DESIGN-SYSTEM/patterns/density-patterns.md` | Unknown if exists | HIGH |
| 93-96 | Multiple `docs-spa/app/showcase/` paths | N/A (old structure) | HIGH |
| 102 | `DESIGN-SYSTEM/CLAUDE.md` | `design-system/CLAUDE.md` (exists) | MEDIUM |
| 103 | `showcase/CLAUDE.md` | N/A (old structure) | MEDIUM |
| 112 | `provenance/stage-3-organization-od/OD-outbound-findings.md` | Unknown if exists | MEDIUM |
| 174 | `provenance/CLAUDE.md` | Unknown if exists | MEDIUM |
| 508 | `showcase/DESIGN-SYSTEM/provenance/` | N/A (old structure) | CRITICAL |
| 1859 | `docs-spa/showcase/DESIGN-SYSTEM/` | `design-system/` | CRITICAL |
| 1864-1870 | `DESIGN-SYSTEM/tokens/`, `components/`, etc. | Unknown if exists | CRITICAL |
| 1877-1887 | `DESIGN-SYSTEM/provenance/` (entire tree) | Unknown if exists | CRITICAL |
| 1894-1900 | `showcase/checkpoints/` | `archive/checkpoints/` | HIGH |
| 1907-1912 | `showcase/explorations/` | `fortress/DD/`, `fortress/OD/`, etc. | CRITICAL |
| 1922-1935 | `showcase/` directory tree | Restructured to `fortress/`, `active/`, `archive/` | CRITICAL |

**Total stale path references: 40+ instances across entire document**

### Outdated Descriptions

| Section | What It Says | What's Wrong | Priority |
|---------|-------------|--------------|----------|
| Lines 1864-1870 | "DESIGN-SYSTEM/ contains tokens/, components/, patterns/, guides/, anti-patterns/" | None of these directories exist at this path | CRITICAL |
| Lines 1877-1887 | "DESIGN-SYSTEM/provenance/ organized by stage-1 through stage-5" | Provenance structure unknown, old paths | CRITICAL |
| Lines 1907-1912 | "showcase/explorations/ contains density/, organizational/, axis/, combination/" | Explorations now in `fortress/DD/`, `fortress/OD/`, `fortress/CD/` | CRITICAL |
| Lines 1922-1935 | "showcase/ contains CLAUDE.md, checkpoints/, explorations/, research/, knowledge-architecture/" | Restructured — checkpoints in archive/, research in active/, no showcase/ at root | CRITICAL |

---

## 3. Missing Content — THE COMPOSITIONAL-CORE GAP

### CRITICAL: Zero Mention of `compositional-core/`

**What compositional-core IS:**
- **Phase C extraction** (completed 2026-02-14)
- **40 items extracted** from 27 HTML explorations (DD, OD, CD, TT)
- **Identity + Enablement hybrid lens**
- **Structure:** identity/, vocabulary/, grammar/, components/, case-studies/, guidelines/, validation/, process/
- **Purpose:** THE extracted design system — what to actually USE when building
- **Status:** COMPLETE and COMMITTED

**From `compositional-core/process/extraction-provenance.md`:**
- 21 identity constraints (3 soul + 18 prohibitions)
- 65 design tokens (21 immutable, 14 mutable, 30 available)
- 18 compositional mechanisms + 41 rules
- 26 component families, 34 selectors
- 12 case studies (DD, OD, CD proof instances)
- 7+ semantic decision guidelines
- 98% convergence validation
- 94.7% anti-gravity compliance
- 100% soul compliance

**Why this is CRITICAL:**
The README is supposed to be "THE KORTAI DESIGN MIND" — the comprehensive philosophical anchor. But it doesn't mention the **completed extraction** that represents the USABLE design system. A new reader following the README would have NO IDEA that compositional-core exists.

**Where it SHOULD appear:**
1. **Part I** (Philosophy) — Should explain how compositional-core fits into the discovery-based model
2. **Part II** (Pipeline) — Should document Phase C as the extraction phase AFTER Stage 5 (CD)
3. **Part VII** (File Structure) — Should show compositional-core/ as the PRIMARY output layer
4. **"How to Use" section** — Should direct readers to compositional-core/ FIRST for building

---

### HIGH: Zero Mention of `tension-test/`

**What tension-test IS:**
- **15 HTML layouts** testing metaphor-driven composition
- **Recently moved** from `archive/tension-test/` to `design-system/tension-test/`
- **Purpose:** Metaphor validation (geological, manuscript, fractal, building floor plan, gas town, playbook)
- **Relationship to compositional-core:** 3 TT case studies extracted (TT layer boundaries, building floor structure, compression grid)

**Why missing:** README predates the move from archive/ to design-system/

**Where it SHOULD appear:**
- **Part VII** (File Structure) — Listed alongside validated-explorations/
- **Part II** (Pipeline) — Explained as metaphor validation layer

---

### MEDIUM: Missing Restructure Context

The README contains **zero acknowledgment** that a 3x comprehensive audit restructured the entire repository:

**From MEMORY.md:**
- **Commits:** 6592f53 (audit reports) + 2e91ee6 (restructure)
- **Impact:** 1,172 → 479 files (59% reduction), 85MB → 16.5MB (81% reduction)
- **New 3-Tier Structure:**
  - `fortress/` (29 files): DD, OD, CD explorations — zero bloat, 100% KEEP
  - `active/` (283 files): axis, pipeline, design-system, research — forward work
  - `archive/` (165 files): KA core, scratchpads-c, CD audit reports, checkpoints

The README still references the **pre-restructure architecture** as if it's current.

**Where restructure SHOULD be explained:**
- **Part I** (Philosophy) — Brief note that structure evolved through audits
- **Part VII** (File Structure) — Updated to show 3-tier architecture
- **New section:** "Post-Restructure Path Map" showing old → new path mappings

---

### MEDIUM: Missing Relationship Between Folders

The README lists folders but doesn't explain **how they feed each other** in the current structure:

**Missing relationships:**
1. `compositional-core/` ← extracted FROM `fortress/DD/`, `fortress/OD/`, `fortress/CD/`, `design-system/tension-test/`
2. `validated-explorations/` vs `fortress/` — what's the difference?
3. `axis/` vs `fortress/DD/`, `fortress/OD/` — how does AD work relate to prior stages?
4. `specification/` vs `implementation/` — what's the distinction?
5. `research/` (R1-R5) vs `pipeline/` — how do research streams feed pipeline?

**Why this matters:**
A new reader can't orient themselves without understanding the graph structure, not just the list.

---

## 4. Structural Issues

### Issue #1: Document Length vs Density

**Problem:** 2,364 lines, 137KB for a README that's supposed to be an "operating manual"

**Evidence:**
- Part I (Philosophy): 200 lines
- Part II (Pipeline): 300 lines
- Part III (Provenance Chain): 800+ lines (templates, examples)
- Part IV-IX: 1000+ lines

**Why problematic:**
- TOO DENSE for "START HERE" document
- CLAUDE.md should be 30-150 lines for orientation
- Philosophy should be in separate PHILOSOPHY.md

**Recommendation:**
- Base README: 200-300 lines (orientation only)
- Detailed philosophy → PHILOSOPHY.md
- Provenance templates → PROVENANCE-SPEC.md
- Pipeline details → PIPELINE-GUIDE.md

**Priority:** MEDIUM (current length is functional but not ideal)

---

### Issue #2: No Navigation for Current State

**Problem:** README doesn't tell readers **where to start for their USE CASE**

**What's missing:**
```markdown
## Quick Start by Use Case

| I want to... | Start here | Then read |
|-------------|-----------|-----------|
| Build a new page using the extracted design system | compositional-core/README.md | compositional-core/vocabulary/tokens.css |
| Understand the extraction process | compositional-core/process/extraction-provenance.md | compositional-core/validation/ |
| Validate an existing page | compositional-core/identity/prohibitions.md | compositional-core/guidelines/semantic-rules.md |
| Understand the research pipeline | active/research/RESEARCH-SYNTHESIS.md | active/pipeline/ |
| See completed explorations | fortress/DD/, fortress/OD/, fortress/CD/ | — |
| See metaphor validation | design-system/tension-test/ | — |
```

**Priority:** HIGH (readers are lost without this)

---

### Issue #3: Section Order Doesn't Match Learning Path

**Current order:**
1. Philosophy (WHY)
2. Pipeline (WHAT stages)
3. Provenance Chain (HOW files connect)
4. Digestion (HOW to consume)
5. Interception (HOW to add external)
6. Reproduction (HOW to self-perpetuate)
7. File Structure (WHAT files exist)
8. Meta-Insight (WHAT we built)
9. Retroactive Bridge (WHAT to do next)

**Problem:** A new reader needs **orientation** before **philosophy**

**Recommended order:**
1. **Orientation** (WHAT is this repo? Where is the extracted design system?)
2. **Quick Start** (USE CASE → path mapping)
3. **Philosophy** (WHY discovery-based, not decision-based)
4. **File Structure** (WHAT directories exist, how they relate)
5. **Pipeline** (WHAT stages produced the extraction)
6. **Provenance** (HOW to trace findings)
7. **Digestion** (HOW to consume prior work)
8. **Meta-Insight** (WHAT we actually built)

**Priority:** HIGH (current order front-loads theory before practical context)

---

### Issue #4: Glossary Outdated

**Lines 266-283:** Glossary defines terms but **doesn't include new ones**

**Missing terms:**
- **Phase C** — Compositional-core extraction phase
- **TT** — Tension-test (metaphor validation)
- **Fortress** — Zero-bloat tier (DD, OD, CD explorations)
- **Active** — Forward-work tier
- **Archive** — Completed-phase tier
- **M1-M12** — Anti-gravity mechanisms (rigidity mechanics)
- **Lens** — Extraction perspective (Identity, Enablement, Frequency, Completeness, Minimalism)

**Priority:** MEDIUM (glossary functional but incomplete)

---

## 5. Specific Recommendations (Prioritized)

### CRITICAL Priority Fixes

#### C1. Add Compositional-Core Section (Lines 1860-1870)

**Current (Lines 1864-1870):**
```markdown
DESIGN-SYSTEM/
├── tokens/           ← WHAT the system uses
├── components/       ← HOW elements behave
├── patterns/         ← WHEN to apply what
├── guides/           ← HOW to migrate and apply
└── anti-patterns/    ← What NOT to do
```

**Replace with:**
```markdown
design-system/
├── compositional-core/  ← **START HERE** — The extracted design system (Phase C)
│   ├── identity/        ← Soul constraints + prohibitions
│   ├── vocabulary/      ← 65 tokens (colors, spacing, typography)
│   ├── grammar/         ← 18 mechanisms + 41 compositional rules
│   ├── components/      ← 26 families, 34 selectors
│   ├── case-studies/    ← 12 proof instances (DD, OD, CD)
│   ├── guidelines/      ← Semantic rules + responsive strategy
│   └── validation/      ← Convergence + anti-gravity + soul checks
├── validated-explorations/ ← Source material for extraction
├── tension-test/        ← 15 metaphor validation layouts
├── axis/                ← AD (Stage 4) work
├── pipeline/            ← Planning docs + tension synthesis
├── research/            ← R1-R5 research streams + synthesis
├── specification/       ← Specifications
├── implementation/      ← Implementation artifacts
├── CLAUDE.md            ← Navigation + process enforcement
└── README.md            ← This file (philosophical anchor)
```

**Add immediately after line 1870.**

**Justification:** Readers need to know compositional-core EXISTS and is the PRIMARY output.

---

#### C2. Update All Path References (40+ instances)

**Search-replace operations:**

| Old Path | New Path | Lines Affected |
|----------|----------|----------------|
| `docs-spa/app/showcase/DESIGN-SYSTEM/` | `design-system/` | 3, 55-65, 93-96, 1859, 1864 |
| `docs-spa/app/showcase/` | `active/` or `archive/` (context-dependent) | 93-96, 102-103 |
| `showcase/checkpoints/` | `archive/checkpoints/` | 62, 1894-1900 |
| `showcase/explorations/density/` | `fortress/DD/` | 55, 1907-1912 |
| `showcase/explorations/organizational/` | `fortress/OD/` | 1907-1912 |
| `showcase/explorations/combination/` | `fortress/CD/` | 1907-1912 |
| `DESIGN-SYSTEM/tokens/` | `design-system/compositional-core/vocabulary/tokens.css` | 1865 |
| `DESIGN-SYSTEM/patterns/` | `design-system/compositional-core/grammar/` + `case-studies/` | 1867 |
| `DESIGN-SYSTEM/components/` | `design-system/compositional-core/components/` | 1866 |

**Priority:** CRITICAL — every path reference is currently WRONG

---

#### C3. Add "Quick Start by Use Case" Section (After Line 158)

**Insert after "HOW TO USE THIS DOCUMENT" (line 158), before Part I:**

```markdown
---

## QUICK START: Where to Go First

### By Use Case

| I want to... | Start here | Then read |
|-------------|-----------|-----------|
| **Build a new page** | `compositional-core/README.md` | `compositional-core/vocabulary/tokens.css` |
| **Understand the extracted design system** | `compositional-core/process/extraction-provenance.md` | `compositional-core/validation/` |
| **Validate an existing page** | `compositional-core/identity/prohibitions.md` | `compositional-core/guidelines/semantic-rules.md` |
| **Understand the research pipeline** | `active/research/RESEARCH-SYNTHESIS.md` | `active/pipeline/` |
| **See completed explorations** | `fortress/DD/`, `fortress/OD/`, `fortress/CD/` | — |
| **See metaphor validation** | `design-system/tension-test/` | — |
| **Understand the philosophy** | Continue reading this README (Part I) | — |

### Current State (2026-02-14)

- **Phase C extraction:** COMPLETE — compositional-core/ contains 40 items extracted from 27 explorations
- **Stages 1-3:** COMPLETE — DD (density), OD (organization), CD (combination) in fortress/
- **Tension validation:** COMPLETE — 15 metaphor layouts in tension-test/
- **Stage 4 (AD - Axis):** IN PROGRESS — axis/ directory
- **Repository structure:** Post-3x-audit (59% file reduction, 3-tier architecture)

---
```

**Justification:** New readers need **orientation** before **philosophy**. Tell them WHERE THE THING IS before WHY IT EXISTS.

---

#### C4. Add Compositional-Core to Part II (Pipeline)

**Current Part II (Lines 366-500):** Documents 5 stages (Components → DD → OD → AD → CD)

**Insert after Stage 5 (CD) section (around line 478):**

```markdown
### Phase C — Compositional-Core Extraction — COMPLETE

**What it did:** Extracted 40 items (identity, vocabulary, grammar, components) from 27 validated explorations using an Identity + Enablement hybrid lens.

**What it consumed:** ALL DD/OD/CD explorations (fortress/), ALL TT layouts (tension-test/), R1-R5 research, rigidity-mechanics anti-gravity research (R4).

**What it produced:**
- **21 identity constraints:** 3 soul pieces (IMMUTABLE) + 18 prohibitions (8 absolute, 10 conditional)
- **65 design tokens:** 21 immutable, 14 mutable, 30 available
- **18 compositional mechanisms** (reusable techniques) + **41 compositional rules**
- **26 component families** (34 selectors total)
- **12 case studies** (DD-003, DD-004, DD-006, OD-001, OD-004, OD-006, CD-001, CD-005, CD-006, plus 3 visual variants)
- **7+ semantic decision guidelines** (when Info vs Context? when serif vs sans?)
- **Anti-gravity mechanisms:** 7 of 12 deployed (M1, M2, M3, M5, M6, M9, M12 partial)

**Quality:** 98% convergence (25/25 required items), 94.7% anti-gravity compliance, 100% soul compliance (0 violations across 34 components)

**⬇️ Forward:** This is THE design system to USE when building. compositional-core/ is the PRIMARY output of the entire pipeline.

**Why it matters:** Phases 1-5 DISCOVERED patterns. Phase C EXTRACTED the reusable vocabulary, grammar, and components. Without Phase C, builders would have 27 HTML explorations to study but no clear "here's what to use" extraction.

**Location:** `design-system/compositional-core/`

**Provenance:** See `compositional-core/process/extraction-provenance.md` (766 lines, complete methodology)
```

**Justification:** Phase C is as important as Stages 1-5 but is currently INVISIBLE in the README.

---

### HIGH Priority Fixes

#### H1. Update File Structure Section (Lines 1859-2024)

**Current section:** Documents old showcase/DESIGN-SYSTEM/ structure

**Replace entire section with:**

```markdown
# PART VII — THE FILE STRUCTURE AS EMBODIED KNOWLEDGE

## Post-Restructure Architecture (3-Tier)

The repository was restructured via 3x comprehensive audit (commits 6592f53 + 2e91ee6) into a **3-tier architecture**:

### Tier 1: Fortress (Load-Bearing Explorations)

```
fortress/
├── DD/    ← 6 density explorations (DD-001 through DD-006) — 7 files, 371 inbound refs
├── OD/    ← 6 organizational explorations (OD-001 through OD-006) — 8 files, 421 inbound refs
└── CD/    ← 6 combination explorations (CD-001 through CD-006) — 13 files, crown jewels
```

**Purpose:** Zero-bloat explorations. 100% KEEP. These are the SOURCE MATERIAL for compositional-core extraction.

**Quality:** DD avg 34.5/40, OD avg 37.3/40 (93.3%), CD avg 38.5/40 (96.3%)

---

### Tier 2: Active (Forward Work)

```
active/
├── design-system/          ← This directory (compositional-core, tension-test, etc.)
├── research/               ← R1-R5 streams + RESEARCH-SYNTHESIS.md
└── pipeline/               ← Planning docs + tension synthesis
```

**Purpose:** Work-in-progress and forward-facing pipeline.

---

### Tier 3: Archive (Completed Phases)

```
archive/
├── knowledge-architecture/ ← KA core + synthesis
├── checkpoints/            ← Audit milestones (SOUL-DISCOVERIES.md, MASTER-STATE.md, etc.)
├── ka-scratchpads-c/       ← Provenance, remediation, metacognition
└── cd-audit-reports/       ← Phase 2, 3, 4 CD audit reports
```

**Purpose:** Completed work. Reference only.

---

## How design-system/ Fits In

```
design-system/
├── compositional-core/     ← **PRIMARY OUTPUT** — Extracted design system (Phase C)
├── validated-explorations/ ← Explorations that inform extraction
├── tension-test/           ← 15 metaphor validation layouts (moved from archive)
├── axis/                   ← AD (Stage 4) work in progress
├── pipeline/               ← POST-CD planning (17 files)
├── research/               ← R1-R5 + RESEARCH-SYNTHESIS.md
├── specification/          ← Specifications
├── implementation/         ← Implementation artifacts
├── CLAUDE.md               ← Navigation + process enforcement
└── README.md               ← This file
```

---

## The Compositional-Core Directory (CRITICAL — Read This First)

**Location:** `design-system/compositional-core/`

**Purpose:** THE extracted design system. This is what you USE when building.

**Structure:**

```
compositional-core/
├── identity/           ← Soul constraints (border-radius: 0, etc.) + prohibitions
├── vocabulary/         ← 65 tokens (tokens.css + mutability classification)
├── grammar/            ← 18 mechanisms + 41 compositional rules + border system
├── components/         ← 26 families, 34 selectors (components.css + inventory)
├── case-studies/       ← 12 proof instances (DD, OD, CD) — NOT templates
├── guidelines/         ← Semantic rules + responsive strategy + usage criteria
├── validation/         ← Convergence check + anti-gravity compliance + soul verification
└── process/            ← Extraction provenance (766 lines) + lens manifesto + construction narrative
```

**Quality:**
- 98% convergence (25/25 required items present)
- 94.7% anti-gravity compliance (18/19 mechanisms deployed)
- 100% soul compliance (0 violations across 34 components)

**How to use:** See `compositional-core/README.md` for navigation.

**Provenance:** Extracted from 27 HTML explorations (DD-001–006, OD-001–006, CD-001–006, TT-001–015) using Identity + Enablement hybrid lens.

---

## How to Navigate

| I want to... | Start here |
|--------------|------------|
| **Build using the extracted design system** | `compositional-core/README.md` |
| **Understand the extraction methodology** | `compositional-core/process/extraction-provenance.md` |
| **Validate against soul constraints** | `compositional-core/identity/prohibitions.md` |
| **See the source explorations** | `fortress/DD/`, `fortress/OD/`, `fortress/CD/` |
| **See metaphor validation** | `tension-test/` |
| **Understand the research pipeline** | `active/research/RESEARCH-SYNTHESIS.md` |
| **See current project state** | `archive/checkpoints/MASTER-STATE.md` |
| **Understand the philosophy** | Continue reading this README (Part I) |

---

## Path Map: Old → New (Post-Restructure)

| Old Path (Pre-Restructure) | New Path (Current) | Notes |
|----------------------------|-------------------|-------|
| `docs-spa/app/showcase/DESIGN-SYSTEM/` | `design-system/` | Moved to repo root |
| `showcase/explorations/density/` | `fortress/DD/` | Tier 1 (fortress) |
| `showcase/explorations/organizational/` | `fortress/OD/` | Tier 1 (fortress) |
| `showcase/explorations/combination/` | `fortress/CD/` | Tier 1 (fortress) |
| `showcase/checkpoints/` | `archive/checkpoints/` | Tier 3 (archive) |
| `showcase/research/` | `active/research/` | Tier 2 (active) |
| `DESIGN-SYSTEM/tokens/` | `compositional-core/vocabulary/tokens.css` | Phase C extraction |
| `DESIGN-SYSTEM/components/` | `compositional-core/components/` | Phase C extraction |
| `DESIGN-SYSTEM/patterns/` | `compositional-core/grammar/` + `case-studies/` | Phase C extraction |
```

**Justification:** Entire Part VII currently documents a structure that NO LONGER EXISTS.

---

#### H2. Update Glossary (Lines 266-283)

**Current glossary:** 15 terms (DD, OD, AD, CD, COMP-F, R-1 through R-5, T1, patterns)

**Add to glossary:**

| Term | Meaning |
|------|---------|
| **Phase C** | Compositional-core extraction phase (post-Stage 5) |
| **TT** | Tension-test — 15 metaphor validation layouts |
| **Fortress** | Tier 1 of 3-tier architecture — zero-bloat explorations (DD, OD, CD) |
| **Active** | Tier 2 of 3-tier architecture — forward-work directories |
| **Archive** | Tier 3 of 3-tier architecture — completed phases |
| **M1-M12** | Anti-gravity mechanisms (rigidity mechanics) to prevent pattern-matching |
| **Lens** | Extraction perspective (Identity, Enablement, Frequency, Completeness, Minimalism) |
| **Identity + Enablement** | Hybrid lens used for Phase C extraction (soul preservation + creative freedom) |
| **Convergence** | Cross-lens agreement on which items to extract (Tier 1 = 5/5 lenses, Tier 2 = 4/5, Tier 3 = 3/5) |
| **Soul compliance** | Verification that no border-radius > 0, no box-shadow, no drop-shadow, primary red #E83025 |

**Priority:** HIGH (new terms used throughout but not defined)

---

#### H3. Add "Current State" Section (After Line 299)

**Insert after "If You Get Lost" (line 287-295), before Part I:**

```markdown
---

## CURRENT STATE SNAPSHOT (2026-02-14)

### What's Complete
- ✅ **Stage 1 (Components):** COMP-F-001 through COMP-F-008 + 5 soul pieces
- ✅ **Stage 2 (DD - Density):** 6 explorations, avg 34.5/40, 18 findings
- ✅ **Stage 3 (OD - Organization):** 6 explorations, avg 37.3/40, 17 findings
- ✅ **Stage 5 (CD - Combination):** 6 explorations, crown jewel CD-006 = 39/40
- ✅ **Phase C (Extraction):** 40 items extracted into compositional-core/
- ✅ **Tension validation:** 15 TT layouts testing metaphor-driven composition
- ✅ **3x comprehensive audit:** 654 files changed, 59% reduction, 3-tier structure
- ✅ **Skill enrichment:** Perceptual-auditing + tension-composition skills updated
- ✅ **Post-fix synthesis:** 30 visual fixes across 15 layouts, 0 regressions

### What's In Progress
- 🔄 **Stage 4 (AD - Axis):** Research complete, execution pending
- 🔄 **README enrichment:** This audit (base README) + compositional-core README

### What's Next
- ⏳ **AD execution:** Build axis explorations using HANDOFF-OD-TO-AD.md + ACCUMULATED-IDENTITY-v1.md
- ⏳ **Phase D builds:** Apply compositional-core/ to new content, validate extraction

### Repository Statistics
- **Total files:** 479 (down from 1,172)
- **Total size:** 16.5MB (down from 85MB)
- **Fortress explorations:** 29 files (DD + OD + CD)
- **Compositional-core:** 40 items (21 identity + 65 tokens + 18 mechanisms + 26 components)
- **Soul compliance:** 100% across all explorations (0 violations)

---
```

**Justification:** Readers need to know WHERE THE PROJECT IS before diving into philosophy.

---

### MEDIUM Priority Fixes

#### M1. Reorder Sections for Learning Path

**Current order:** Philosophy → Pipeline → Provenance → Digestion → Interception → Reproduction → File Structure → Meta-Insight → Retroactive Bridge

**Recommended order:**
1. **Quick Start** (C3 — use case mapping)
2. **Current State** (H3 — project status)
3. **File Structure** (H1 — what directories exist)
4. **Philosophy** (Part I — why discovery-based)
5. **Pipeline** (Part II + C4 — stages + Phase C)
6. **Provenance** (Part III — how files connect)
7. **Digestion** (Part IV — how to consume)
8. **Meta-Insight** (Part VIII — what we built)
9. **Retroactive Bridge** (Part IX — what to do next)

**Justification:** Context before theory, practical before philosophical.

**Priority:** MEDIUM (current order works but front-loads theory)

---

#### M2. Add Compositional-Core to Part I (Philosophy)

**Insert after line 340 (after "That's a **CAUSAL CHAIN**" paragraph):**

```markdown
## Phase C: From Discovery to Extraction

The 5-stage pipeline (Components → DD → OD → AD → CD) DISCOVERED patterns through building and auditing. But discovery alone doesn't make a design system **usable**. A reader with 27 HTML explorations still asks: "What do I actually USE when building?"

Phase C (compositional-core extraction) answered that question. Through a rigorous lens-based process:
1. **Identity lens** (what makes KortAI recognizably KortAI)
2. **Enablement lens** (what ENABLES creativity without constraint)
3. **Convergence validation** (cross-lens agreement on extraction)
4. **Anti-gravity deployment** (mechanisms to prevent pattern-matching)

The extraction produced **40 items** organized into 6 layers:
1. **Identity constraints** (3 soul + 18 prohibitions)
2. **Design vocabulary** (65 tokens)
3. **Compositional grammar** (18 mechanisms + 41 rules)
4. **Component implementations** (26 families)
5. **Case studies** (12 proof instances — NOT templates)
6. **Semantic decision rules** (7+ guidelines)

This extraction is NOT "the only possible extraction." It's a CONSTRUCTED extraction optimizing for soul preservation (border-radius: 0, box-shadow: none) + creative freedom (30-40 items, below constraint threshold) + anti-pattern-matching (mechanisms separated from metaphors).

Different lenses would produce different extractions:
- **Frequency lens** → 42-45 items (includes web standards)
- **Completeness lens** → 56 items (includes all syntax highlighting tokens)
- **Minimalism lens** → 10 items (soul + prohibitions only)

The Identity + Enablement hybrid was chosen to balance identity truth (what MUST be preserved) with creative freedom (what CAN vary).

**Why this matters:** The compositional-core extraction is the BRIDGE between "patterns we discovered" and "tools you can use." It makes the design mind TRANSFERABLE — not just readable, but APPLICABLE.
```

**Justification:** Philosophy section should explain HOW EXTRACTION FITS into the discovery-based model.

---

#### M3. Update "What Breaks If This Changes" (Lines 78-97)

**Current section:** Lists files that depend on README.md

**Problem:** All paths are STALE (showcase/DESIGN-SYSTEM/CLAUDE.md, etc.)

**Replace with:**

```markdown
7. WHAT BREAKS IF THIS CHANGES

- **design-system/CLAUDE.md** — Directly references README.md as "READ FIRST" mandatory prerequisite. If README.md philosophy changes, CLAUDE.md's framing becomes misaligned.
- **compositional-core/ extraction** — Phase C extraction was built on the 5-stage pipeline philosophy (discovery-based, not decision-based). Changed philosophy = changed extraction rationale.
- **All future AD/CD/Phase D work** — Any future work must absorb this document as part of its research gate. Changed philosophy = changed reasoning foundation.
- **Active research** (active/research/) — R1-R5 streams reference the philosophical framework for grounding.
- **Blast radius:** Potentially the entire design system. This is the philosophical root node. Changes here propagate to every file that depends on the reasoning framework.
- **Files directly affected:**
  - design-system/CLAUDE.md
  - design-system/compositional-core/README.md
  - design-system/compositional-core/process/extraction-provenance.md
  - active/research/RESEARCH-SYNTHESIS.md
  - active/pipeline/ (multiple files)
  - All future Stage 4 (AD) and Phase D work
```

**Priority:** MEDIUM (functional impact of stale paths = low, but accuracy matters)

---

#### M4. Add Links to Related READMEs

**Insert after H3 "Current State" section:**

```markdown
---

## Related Navigation Files

This README (THE KORTAI DESIGN MIND) is the **philosophical anchor**. For directory-specific navigation:

| Directory | README | Purpose |
|-----------|--------|---------|
| `compositional-core/` | `compositional-core/README.md` | How to use the extracted design system |
| `compositional-core/identity/` | `compositional-core/identity/README.md` | Soul constraints + prohibitions |
| `compositional-core/vocabulary/` | `compositional-core/vocabulary/README.md` | Token system (65 tokens) |
| `compositional-core/grammar/` | `compositional-core/grammar/README.md` | Mechanisms + compositional rules |
| `compositional-core/components/` | `compositional-core/components/README.md` | Component families (26 families) |
| `compositional-core/case-studies/` | `compositional-core/case-studies/README.md` | Proof instances (12 studies) |
| `compositional-core/guidelines/` | `compositional-core/guidelines/README.md` | Semantic decision rules |
| `design-system/` | `design-system/CLAUDE.md` | Process enforcement + directory map |

**When to read which:**
- **New to the system?** Read this README (Part I: Philosophy) → compositional-core/README.md
- **Building a page?** Start with compositional-core/README.md → vocabulary/ → grammar/ → components/
- **Validating a page?** Start with compositional-core/identity/README.md → guidelines/
- **Understanding extraction?** Read compositional-core/process/extraction-provenance.md
- **Understanding pipeline?** Read this README (Part II: Pipeline) → active/research/RESEARCH-SYNTHESIS.md

---
```

**Priority:** MEDIUM (navigation aid for multi-README structure)

---

### LOW Priority Fixes

#### L1. Fix Typos and Minor Inconsistencies

| Line | Issue | Fix |
|------|-------|-----|
| 543 | "OD-F-007/008/009 in the doc body (Parts III-IX) are pre-OD illustrative examples" | Clarify these are FORMAT examples, not real findings |
| 1859 | "docs-spa/showcase/DESIGN-SYSTEM/" | Update to "design-system/" |

**Priority:** LOW (cosmetic)

---

## 6. Summary of Gaps

### By Severity

| Severity | Count | Examples |
|----------|-------|----------|
| CRITICAL | 6 | compositional-core/ not mentioned, all path references stale, file structure section outdated |
| HIGH | 5 | tension-test/ not mentioned, no restructure context, no use-case navigation, glossary incomplete, no "current state" |
| MEDIUM | 4 | section ordering, compositional-core not in philosophy, related READMEs not linked, dependencies list stale |
| LOW | 2 | typos, minor formatting |

### By Type

| Type | Count | Examples |
|------|-------|----------|
| Missing content | 7 | compositional-core/, tension-test/, restructure context, use-case nav, current state, related READMEs, Phase C in pipeline |
| Stale references | 5 | 40+ path references, file structure tree, dependencies list, old showcase/ structure |
| Structural issues | 4 | section ordering, document length, glossary gaps, no relationship map |
| Cosmetic | 1 | typos |

---

## 7. Estimated Effort to Remediate

### Critical Fixes (C1-C4) — ~2-3 hours
- C1: Add compositional-core section (30 min)
- C2: Update 40+ path references (60 min)
- C3: Add Quick Start section (20 min)
- C4: Add Phase C to Part II (40 min)

### High Priority Fixes (H1-H3) — ~2 hours
- H1: Rewrite Part VII file structure (60 min)
- H2: Update glossary (20 min)
- H3: Add current state section (30 min)

### Medium Priority Fixes (M1-M4) — ~1 hour
- M1: Reorder sections (20 min — mostly copy-paste)
- M2: Add compositional-core to Part I (20 min)
- M3: Update dependencies (10 min)
- M4: Add related READMEs (10 min)

**Total estimated effort:** 5-6 hours for complete remediation

---

## 8. Recommended Approach

### Phase 1: Critical Path (Ship First)
1. C1: Add compositional-core to file structure
2. C3: Add Quick Start section
3. H3: Add Current State section
4. C2: Update top 10 most-referenced stale paths

**Impact:** Readers can FIND compositional-core and ORIENT themselves

**Effort:** 2 hours

---

### Phase 2: Structural (Ship Second)
1. H1: Rewrite Part VII completely
2. C4: Add Phase C to Part II
3. M2: Add compositional-core to Part I
4. H2: Update glossary

**Impact:** README accurately reflects current structure + philosophy

**Effort:** 2.5 hours

---

### Phase 3: Polish (Ship Third)
1. C2: Complete all remaining path updates
2. M1: Reorder sections
3. M3-M4: Dependencies + related READMEs
4. L1: Typos

**Impact:** README is comprehensive and polished

**Effort:** 1.5 hours

---

## 9. Decision: Ship Incrementally or Full Rewrite?

### Option A: Incremental Fixes
- **Pros:** Faster to ship Phase 1 (2 hours), readers immediately benefit
- **Cons:** 3 separate commits, potential merge conflicts if other work touches README

### Option B: Full Rewrite
- **Pros:** Single comprehensive update, cleaner commit history
- **Cons:** 6 hours before anything ships, readers wait longer

**Recommendation:** **Option A (Incremental)** — Phase 1 fixes solve 80% of reader pain (can't find compositional-core) with 33% of effort (2/6 hours).

---

## 10. Open Questions for Team Lead

1. **Path verification:** Do `DESIGN-SYSTEM/BACKBONE.md`, `PIPELINE-MANIFEST.md`, `provenance/` exist anywhere? Or completely removed in restructure?
2. **compositional-core READMEs:** Do they exist yet? (audit assumes they're being created in parallel)
3. **Incremental vs full rewrite:** Preference for shipping approach?
4. **Section reordering (M1):** Worth the effort or keep current order?
5. **Document length:** Should README stay comprehensive (2,364 lines) or split into separate files (PHILOSOPHY.md, PIPELINE-GUIDE.md, etc.)?

---

**END AUDIT REPORT**
