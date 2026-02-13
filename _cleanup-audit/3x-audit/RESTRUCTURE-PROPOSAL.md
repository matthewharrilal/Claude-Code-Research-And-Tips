# RESTRUCTURE PROPOSAL — docs-spa/ Clean Architecture

**Date:** 2026-02-13
**Author:** restructure-proposer
**Input:** MASTER-VERDICT-3X.md (1,175 files audited, 514 post-cleanup)
**Principle:** Maximum 4 levels depth, function over chronology, runtime separated from research

---

## EXECUTIVE SUMMARY

**Current Structure Problems:**
1. **Excessive Nesting (5-7 levels deep):** combination screenshots at depth 7, fortress files suffer 0.7× provenance penalty
2. **Mixing Runtime and Research:** Next.js showcase routes contain archived research, load-bearing tokens buried alongside historical provenance
3. **Underscore Proliferation:** 12 underscore directories with inconsistent meaning (some DELETE, some KEEP, some mixed)
4. **Phase/Process Names in Permanent Structure:** "phase4-standalone/", "POST-CD-PIPELINE/" — chronology, not function
5. **Zone Names Don't Reflect Final State:** "organizational" and "density" are lenses, not exploration types

**Proposed Solution:**
- **Top-level separation:** Runtime (app/, content/, components/) vs Research (explorations/, research/)
- **Max depth: 4 levels** from docs-spa/ root
- **Flat structure** in explorations/ (no phase subdirectories)
- **Functional names** in research/ (synthesis, planning, methodology)
- **Clear .internal/** for build artifacts

**Impact:** 56% file reduction (1,175 → 514 files), depth reduction (7→3 average), runtime/research separation, zero fortress disruption

---

## CURRENT PROBLEMS

### Problem 1: Excessive Nesting (5-7 levels deep)

**Current worst offenders:**
```
docs-spa/app/showcase/explorations/combination/phase4-standalone/cd-001/screenshots/
docs-spa/app/showcase/POST-CD-PIPELINE/_tension-analysis/
knowledge-architecture/_comprehensive-audit/visual/workers/
```

**Depth analysis:**
- Maximum depth: 7 levels (combination screenshots)
- Average depth: 4.3 levels across all zones
- 37% of paths exceed 4 levels

**Impact:** Cognitive overhead, tooling path limits (Windows 260 char), tab-completion pain

---

### Problem 2: Mixing Runtime and Research

**Current structure conflates:**
```
docs-spa/app/showcase/
├── explorations/         # Research artifacts (HTML files)
│   ├── organizational/   # OD fortress
│   ├── density/          # DD fortress
│   ├── combination/      # CD explorations + 343 screenshots + research packages
│   └── axis/            # AD explorations + execution scratchpads
├── DESIGN-SYSTEM/       # Runtime tokens + provenance stages
└── POST-CD-PIPELINE/    # Planning docs + tension analysis scratchpads
```

**Problems:**
- Runtime Next.js routes (`app/showcase/`) contain archived research
- Design tokens (runtime-critical) buried alongside historical provenance
- No clear "safe to delete" vs "load-bearing" boundary

---

### Problem 3: Underscore Proliferation (Inconsistent Meaning)

**Current underscore directories:**

| Directory | Meaning | Status |
|-----------|---------|--------|
| `_comprehensive-audit/` | Scratchpad (DELETE) | ✅ Consistent |
| `_od-audit-scratchpad/` | Scratchpad (DELETE) | ✅ Consistent |
| `_tension-analysis/` | Scratchpad (DELETE) | ✅ Consistent |
| `_cd-research/` | Mixed (some KEEP) | ❌ Inconsistent |
| `_migration-research/` | Mixed (some KEEP) | ❌ Inconsistent |
| `_SOURCE-BRIEF.md` | File, not directory | ❌ Confusing |

**Issue:** Underscore doesn't reliably signal "scratchpad" — some contain keepable synthesis files

---

### Problem 4: Phase/Process Names in Permanent Structure

**Examples:**
- `phase4-standalone/` — phase number is ephemeral metadata
- `POST-CD-PIPELINE/` — "POST-CD" describes chronology, not function
- `_od-reenrichment/` — process name, not content type

**Problem:** Future readers don't know what "Phase 4" or "POST-CD" means without archaeology

---

### Problem 5: Zone Names Don't Reflect Final State

**Current top-level (in knowledge-architecture/ and showcase/):**
```
organizational/      # OD explorations (8 files, fortress)
density/            # DD explorations (7 files, fortress)
combination/        # CD explorations (414 files → 10 after cleanup)
axis/               # AD explorations (233 files, needs audit)
DESIGN-SYSTEM/      # Tokens + provenance (59 files)
POST-CD-PIPELINE/   # Planning docs (36 files → 21)
```

**Issues:**
- "organizational" and "density" are design LENSES, not exploration types
- "combination" doesn't communicate that it's about compositional density
- "axis" is cryptic (refers to Alignment-Density axes from AD convention)
- Zone names optimized for BUILD phase, not MAINTENANCE phase

---

## PROPOSED STRUCTURE

### Top-Level Separation: Runtime vs Research

```
docs-spa/
├── app/                    # Next.js application (RUNTIME — no changes)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── showcase/          # Content routes (unchanged)
│       └── [...all existing routes]
│
├── content/               # Velite content (RUNTIME — no changes)
│   └── [152 files]
│
├── components/            # React components (RUNTIME — no changes)
│   └── content/
│
├── design-system/         # Design tokens + docs (SEPARATED)
│   ├── tokens/           # Soul enforcers (4 files) — LOAD-BEARING
│   ├── docs/             # Design system documentation
│   └── provenance/       # Optional: stage-based provenance (if kept)
│
├── explorations/          # HTML research artifacts (FLAT)
│   ├── organizational/   # OD-001 through OD-006 (8 files)
│   ├── density/          # DD-001 through DD-006 (7 files)
│   ├── combination/      # CD-001 through CD-006 (10 files)
│   └── axis/             # AD-001 through AD-00X (TBD after re-audit)
│
├── research/             # Synthesis documents and planning (FLAT)
│   ├── synthesis/        # Cross-phase synthesis documents
│   ├── planning/         # Pipeline planning docs (ex-POST-CD-PIPELINE)
│   └── methodology/      # Meta-research (workflow metacognition, etc.)
│
├── archive/              # Completed phase artifacts (if kept post-review)
│   ├── combination/      # CD research packages (6 files)
│   ├── provenance/       # Provenance analysis scratchpads (45 files)
│   └── audit/            # Checkpoint files (12 files)
│
└── .internal/            # Build artifacts, temp files
    ├── .velite/
    ├── .next/
    └── dependency-trace/ # If kept (19 files under review)
```

**Key changes:**
1. **Runtime** (app/, content/, components/) vs **Research** (explorations/, research/) separation
2. **Flat structure** in explorations/ (no phase subdirectories)
3. **Functional names** in research/ (synthesis, planning, methodology)
4. **Archive zone** for historical artifacts (only if kept post-human-review)
5. **.internal/** for non-permanent build artifacts

---

### Maximum Depth: 4 Levels Example

**Before (7 levels):**
```
docs-spa/app/showcase/explorations/combination/phase4-standalone/cd-001/screenshots/
```

**After (3 levels):**
```
docs-spa/explorations/combination/cd-001.html
```

**Screenshots:** DELETED (per Phase 1 of execution plan)

---

## MIGRATION MAP

### Zone 1: Fortress Explorations (OD, DD)

| Old Path | New Path | Files | Notes |
|----------|----------|-------|-------|
| `docs-spa/app/showcase/explorations/organizational/` | `docs-spa/explorations/organizational/` | 8 | No changes to files |
| `docs-spa/app/showcase/explorations/density/` | `docs-spa/explorations/density/` | 7 | No changes to files |

**Rationale:** Move out of Next.js showcase route, preserve 100% of files

---

### Zone 2: Combination Explorations (CD)

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `docs-spa/app/showcase/explorations/combination/CD-00*.html` | `docs-spa/explorations/combination/` | 6 | Move + flatten |
| `docs-spa/app/showcase/explorations/combination/lock-sheet.md` | `docs-spa/explorations/combination/` | 1 | Move |
| `docs-spa/app/showcase/explorations/combination/CD-AUDIT-SYNTHESIS.md` | `docs-spa/explorations/combination/` | 1 | Move |
| `docs-spa/app/showcase/explorations/combination/phase4-standalone/*/screenshots/` | **DELETED** | 343 | Phase 1 cleanup |
| `docs-spa/app/showcase/explorations/combination/debrief-*.md` | **DELETED** | 4 | Phase 4 cleanup |
| `docs-spa/app/showcase/explorations/combination/research-package-cd-*.md` | `docs-spa/archive/combination/` | 6 | **HUMAN_REVIEW** |

**Rationale:** Flatten from phase4-standalone/ structure, delete screenshots, archive research packages (if kept)

---

### Zone 3: Axis Explorations (AD)

| Old Path | New Path | Files | Notes |
|----------|----------|-------|-------|
| `explorations/axis/` | `docs-spa/explorations/axis/` | TBD | **MUST RE-AUDIT FIRST** |

**Rationale:** All agents audited wrong path (showcase route vs repository source) — awaiting correct audit

---

### Zone 4: Design System

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `docs-spa/app/showcase/DESIGN-SYSTEM/tokens/` | `docs-spa/design-system/tokens/` | 4 | **LOAD-BEARING** |
| `docs-spa/app/showcase/DESIGN-SYSTEM/CLAUDE.md` | `docs-spa/design-system/CLAUDE.md` | 1 | Move |
| `docs-spa/app/showcase/DESIGN-SYSTEM/README.md` | `docs-spa/design-system/README.md` | 1 | Move |
| `docs-spa/app/showcase/DESIGN-SYSTEM/BACKBONE.md` | `docs-spa/design-system/docs/` | 1 | Move |
| `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/` | `docs-spa/design-system/provenance/` | 37 | **HUMAN_REVIEW** |
| `docs-spa/app/showcase/DESIGN-SYSTEM/.DS_Store` | **DELETED** | 1 | Phase 3 cleanup |

**Rationale:** Separate load-bearing tokens from documentation/provenance, preserve all tokens

---

### Zone 5: Knowledge Architecture Core

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | `docs-spa/research/synthesis/` | 1 | KEEP (76 refs) |
| `knowledge-architecture/COMPREHENSIVE-AUDIT-SPEC.md` | `docs-spa/research/methodology/` | 1 | KEEP (hierarchical model) |
| `knowledge-architecture/PHASE-1B-MEGA-DEBRIEF.md` | `docs-spa/research/synthesis/` | 1 | KEEP (25 refs) |
| `knowledge-architecture/PIPELINE-BACKBONE.md` | `docs-spa/research/synthesis/` | 1 | KEEP (CLAUDE.md veto) |
| `knowledge-architecture/CLAUDE.md` | `docs-spa/research/CLAUDE.md` | 1 | KEEP (auto-loaded) |
| `knowledge-architecture/WORKFLOW-METACOGNITION-ANALYSIS.md` | `docs-spa/archive/methodology/` | 1 | **HUMAN_REVIEW** (297KB) |
| `knowledge-architecture/OD-EXECUTION-PROTOCOL-v3.md` | `docs-spa/archive/methodology/` | 1 | **HUMAN_REVIEW** (277KB) |
| `knowledge-architecture/ACCUMULATED-IDENTITY-v1.md` | **DELETED** | 1 | SUPERSEDED marker |

**Rationale:** Separate synthesis (forward-consumed) from methodology (historical), archive large strategic files (if kept)

---

### Zone 6: Scratchpads A (Minimal Retention)

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `knowledge-architecture/MASTER-AD-EXECUTION-SPEC.md` | `docs-spa/research/synthesis/` | 1 | KEEP (92 pts) |
| `knowledge-architecture/AD-CONVENTION-SPEC.md` | `docs-spa/research/synthesis/` | 1 | KEEP (268 refs) |
| `knowledge-architecture/AD-RESEARCH-GATE.md` | `docs-spa/research/methodology/` | 1 | KEEP (gate methodology) |
| `knowledge-architecture/_cd-research/09-CD-SYNTHESIS-BRIEFING.md` | `docs-spa/research/synthesis/` | 1 | KEEP (78 pts) |
| `knowledge-architecture/_migration-research/10-MIGRATION-SYNTHESIS.md` | `docs-spa/research/synthesis/` | 1 | KEEP (78 pts) |
| `knowledge-architecture/_ad-execution/` | **DELETED** | 58 | Phase 2 cleanup |
| `knowledge-architecture/_ad-skeleton-analysis/` | **DELETED** | 34 | Phase 2 cleanup |
| `knowledge-architecture/_cd-research/01-08-*.md` | **DELETED** | 16 | Phase 2 cleanup |
| `knowledge-architecture/_migration-research/01-09-*.md` | **DELETED** | 18 | Phase 2 cleanup |

**Rationale:** Extract 5 synthesis files to research/synthesis/, delete 126 scratchpad files

---

### Zone 7: Scratchpads B (Complete Deletion)

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `knowledge-architecture/_comprehensive-audit/` | **DELETED** | 78 | Phase 2 cleanup |
| `knowledge-architecture/_execution-journal/` | **DELETED** | 5 | Phase 2 cleanup |
| `knowledge-architecture/_od-audit-scratchpad/` | **DELETED** | 29 | Phase 2 cleanup |
| `knowledge-architecture/_od-reenrichment/` | **DELETED** | 65 | Phase 2 cleanup |

**Rationale:** 100% unanimous DELETE (8.4:1 compression ratio, zero forward consumption)

---

### Zone 8: Scratchpads C (Archive)

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `knowledge-architecture/REMEDIATION-STATE.md` | `docs-spa/archive/provenance/` | 1 | KEEP (2/3 consensus) |
| `knowledge-architecture/_provenance-deep-dive/` | `docs-spa/archive/provenance/` | 10 | **HUMAN_REVIEW** (ARCHIVE likely) |
| `knowledge-architecture/_provenance-gap-analysis/` | `docs-spa/archive/provenance/` | 15 | **HUMAN_REVIEW** (ARCHIVE likely) |
| `knowledge-architecture/_remediation/` | `docs-spa/archive/provenance/` | 10 | **HUMAN_REVIEW** (ARCHIVE likely) |
| `knowledge-architecture/_workflow-metacognition/` | `docs-spa/archive/methodology/` | 10 | **HUMAN_REVIEW** (ARCHIVE likely) |

**Rationale:** 2/3 consensus for ARCHIVE (preserve for historical record if kept)

---

### Zone 9: Pipeline (Flatten + Rename)

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `docs-spa/app/showcase/POST-CD-PIPELINE/01-*.md` | `docs-spa/research/planning/` | 9 | Move + flatten |
| `docs-spa/app/showcase/POST-CD-PIPELINE/README.md` | `docs-spa/research/planning/` | 1 | Move |
| `docs-spa/app/showcase/POST-CD-PIPELINE/CLAUDE.md` | `docs-spa/research/planning/` | 1 | Move |
| `docs-spa/app/showcase/POST-CD-PIPELINE/MASTER-CD-EXECUTION-PROMPT.md` | `docs-spa/research/planning/` | 1 | Move |
| `docs-spa/app/showcase/POST-CD-PIPELINE/TENSION-PROTOCOL.md` | `docs-spa/research/synthesis/` | 1 | Move (synthesis, not planning) |
| `docs-spa/app/showcase/POST-CD-PIPELINE/_tension-analysis/` | **DELETED** | 15 | Phase 5 cleanup |
| `docs-spa/app/showcase/POST-CD-PIPELINE/_SOURCE-BRIEF.md` | TBD | 1 | **HUMAN_REVIEW** |

**Rationale:** Rename POST-CD-PIPELINE → research/planning (functional name), delete tension scratchpads, move synthesis to synthesis/

---

### Zone 10: Audit Artifacts

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `checkpoints/CLAUDE.md` | `docs-spa/archive/audit/` | 1 | Move (if archive kept) |
| `checkpoints/MASTER-STATE.md` | `docs-spa/archive/audit/` | 1 | Move |
| `checkpoints/SOUL-DISCOVERIES.md` | `docs-spa/archive/audit/` | 1 | Move |
| `checkpoints/RESEARCH-ACTIVE.md` | `docs-spa/archive/audit/` | 1 | Move |
| `audit-screenshots/` | **DELETED** | 22 | Phase 1 cleanup |
| `_comprehensive-audit/visual/` | **DELETED** | 14 | Phase 2 cleanup |
| `checkpoints/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` | `docs-spa/archive/audit/` | 8 | **HUMAN_REVIEW** (ARCHIVE likely) |

**Rationale:** Delete screenshots, archive checkpoint files (if kept), remove from top-level to archive/

---

### Zone 11: Infrastructure (No Changes)

| Old Path | New Path | Files | Action |
|----------|----------|-------|--------|
| `infrastructure/content/` | `docs-spa/content/` | 152 | **NO CHANGE** (runtime) |
| `infrastructure/components/content/` | `docs-spa/components/content/` | 13 | **NO CHANGE** (runtime) |
| `infrastructure/app/` | `docs-spa/app/` | 4 | **NO CHANGE** (runtime) |
| `infrastructure/.velite/` | `docs-spa/.internal/.velite/` | 4 | Move to .internal/ |
| `infrastructure/dependency-trace/` | `docs-spa/.internal/dependency-trace/` | 19 | **HUMAN_REVIEW** + move |
| `infrastructure/R5-COMBINATION-THEORY.md` | `docs-spa/research/synthesis/` | 1 | KEEP (forward-consumed) |
| `infrastructure/RESEARCH-SYNTHESIS.md` | `docs-spa/research/synthesis/` | 1 | KEEP (forward-consumed) |
| `infrastructure/app/.DS_Store` | **DELETED** | 1 | Phase 3 cleanup |

**Rationale:** Preserve runtime infrastructure, move build artifacts to .internal/, extract 2 synthesis files

---

## NAMING CONVENTIONS

### 1. Directory Names (Semantic, Not Chronological)

**GOOD:**
- `synthesis/` — function (cross-phase synthesis documents)
- `planning/` — function (pipeline planning docs)
- `methodology/` — function (meta-research on process)
- `tokens/` — content (design tokens)

**BAD:**
- `POST-CD-PIPELINE/` — chronology (requires knowing what "POST-CD" means)
- `phase4-standalone/` — process metadata (ephemeral)
- `_od-reenrichment/` — process name (temporary)

### 2. Underscore Usage (Strict Rules)

**ONLY for:**
- `.internal/` — build artifacts, dependency traces, temp files
- Active scratchpads during a build phase (deleted after synthesis)

**NEVER for:**
- Permanent directories (use semantic names)
- Directories with keepable files (promotes confusion)

**Migration rule:** All current underscore directories either DELETE or move to non-underscore location

### 3. Depth Limits

- **Max 4 levels** from docs-spa/ root
- **Prefer 2-3 levels** where possible
- **Flatten aggressively** — no nesting for nesting's sake

**Examples:**
```
✅ docs-spa/explorations/combination/cd-001.html         (3 levels)
✅ docs-spa/research/synthesis/accumulated-identity.md    (3 levels)
✅ docs-spa/design-system/tokens/geometry.md             (3 levels)
❌ docs-spa/app/showcase/explorations/combination/cd-001 (5+ levels)
```

### 4. File Extensions (Be Explicit)

- HTML explorations: `.html` extension (not implicit)
- Markdown docs: `.md` extension (always)
- TypeScript/TSX: preserve existing conventions

### 5. Top-Level Zones (Functional Grouping)

| Zone | Purpose | Depth | Example |
|------|---------|-------|---------|
| `app/` | Next.js runtime | Unchanged | `app/layout.tsx` |
| `content/` | Velite content | Unchanged | `content/posts/example.md` |
| `components/` | React components | Unchanged | `components/content/CodeBlock.tsx` |
| `design-system/` | Tokens + docs | 2-3 | `design-system/tokens/colors.md` |
| `explorations/` | HTML research | 2-3 | `explorations/density/dd-006.html` |
| `research/` | Synthesis + planning | 2-3 | `research/synthesis/phase-1b-debrief.md` |
| `archive/` | Historical artifacts | 2-3 | `archive/combination/research-package-cd-001.md` |
| `.internal/` | Build artifacts | 2-3 | `.internal/.velite/index.json` |

---

## CLAUDE.md PLACEMENT

### Required CLAUDE.md Files (6 total)

```
docs-spa/
├── CLAUDE.md                          # Top-level navigation
├── design-system/CLAUDE.md            # Token reference + provenance nav
├── explorations/CLAUDE.md             # OD/DD/CD/AD explorer guide
├── research/CLAUDE.md                 # Synthesis + planning nav
├── archive/CLAUDE.md                  # Historical context (if archive kept)
└── .internal/CLAUDE.md                # Build artifact reference
```

### Content Outline

**docs-spa/CLAUDE.md** (top-level):
```markdown
# docs-spa/ — Documentation Site Architecture

## Quick Reference
- **Runtime code:** app/, content/, components/
- **Design tokens:** design-system/tokens/ (LOAD-BEARING)
- **Research artifacts:** explorations/, research/
- **Historical:** archive/ (if kept)

## Directory Guide
[Link to each zone with 1-sentence description]

## Common Tasks
- Add new exploration: explorations/[lens]/
- Update design token: design-system/tokens/
- Find synthesis doc: research/synthesis/
```

**explorations/CLAUDE.md**:
```markdown
# Explorations — HTML Research Artifacts

## Fortress Zones (100% Retention)
- organizational/ — OD-001 through OD-006 (421 refs, OD-F-005 = 726 citations)
- density/ — DD-001 through DD-006 (371 refs, all MEGA-HUBs)

## Other Lenses
- combination/ — CD-001 through CD-006 (compositional density)
- axis/ — AD-00X (alignment-density axes)

## File Naming
- HTML files: [lens]-[number].html
- Supporting docs: lock-sheet.md, audit-synthesis.md
```

**design-system/CLAUDE.md**:
```markdown
# Design System — Tokens + Documentation

## CRITICAL (Load-Bearing)
tokens/ — 4 files, SOUL ENFORCERS
- geometry.md — border-radius: 0, box-shadow: none (LOCKED)
- typography.md — Instrument Serif, Inter, JetBrains Mono
- spacing.md — 4px-96px scale, INHALE/EXHALE rhythm
- colors.md — #E83025, #FEF9F5, #1A1A1A, #E0D5C5

## Documentation
- README.md — design system overview
- BACKBONE.md — structural principles

## Provenance (if kept)
- provenance/ — stage-based research history
```

**research/CLAUDE.md**:
```markdown
# Research — Synthesis + Planning + Methodology

## synthesis/
Cross-phase synthesis documents (forward-consumed):
- accumulated-identity-v2.md (76 refs)
- master-ad-execution-spec.md (92 pts)
- ad-convention-spec.md (268 refs)
- tension-protocol.md (pipeline synthesis)

## planning/
Pipeline planning docs (ex-POST-CD-PIPELINE):
- 01-09-*.md — planning sequence
- master-cd-execution-prompt.md

## methodology/
Meta-research on process:
- comprehensive-audit-spec.md (hierarchical model)
- ad-research-gate.md (gate methodology)
```

**archive/CLAUDE.md** (if archive kept):
```markdown
# Archive — Historical Artifacts

## Purpose
Completed phase artifacts preserved for:
- Process archeology
- Historical reference
- Reproducibility research

## Zones
- combination/ — CD research packages (6 files)
- provenance/ — Provenance analysis scratchpads (45 files)
- audit/ — Checkpoint files (12 files)
- methodology/ — Large strategic docs (3 files, 732KB)

## Warning
Files in archive/ are NOT forward-consumed. Do not rely on these for current work.
```

**.internal/CLAUDE.md**:
```markdown
# .internal/ — Build Artifacts + Temp Files

## Purpose
Non-permanent files excluded from version control or cleanup-resistant.

## Contents
- .velite/ — Velite build output (auto-generated)
- .next/ — Next.js build cache (auto-generated)
- dependency-trace/ — Phase 2A classification data (19 files under review)

## Do Not Edit
These files are build artifacts or intermediate analysis outputs.
```

---

## MIGRATION SEQUENCE

### Pre-Migration (Execute Cleanup First)

**Complete MASTER-VERDICT Phase 1-5 deletions before restructure:**
1. Phase 1: Screenshots (98 files, ~32MB)
2. Phase 2: Scratchpads (541 files, ~13MB)
3. Phase 3: Junk files (2 files, ~10KB)
4. Phase 4: Debrief files (5 files, ~100KB)
5. Phase 5: Tension analysis (15 files, ~500KB)

**Result:** 1,175 → 514 files (661 deletions before restructure)

---

### Migration Phase 1: Create New Structure

```bash
cd /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/

# Create top-level directories
mkdir -p design-system/tokens
mkdir -p design-system/docs
mkdir -p explorations/organizational
mkdir -p explorations/density
mkdir -p explorations/combination
mkdir -p explorations/axis
mkdir -p research/synthesis
mkdir -p research/planning
mkdir -p research/methodology
mkdir -p archive/combination
mkdir -p archive/provenance
mkdir -p archive/audit
mkdir -p archive/methodology
mkdir -p .internal
```

---

### Migration Phase 2: Move Fortress Explorations

```bash
# OD (organizational)
mv app/showcase/explorations/organizational/* explorations/organizational/

# DD (density)
mv app/showcase/explorations/density/* explorations/density/
```

**Files moved:** 15 (8 OD + 7 DD)
**Verification:** All references updated (148 total refs to OD/DD explorations)

---

### Migration Phase 3: Move Design System

```bash
# Tokens (LOAD-BEARING)
mv app/showcase/DESIGN-SYSTEM/tokens/* design-system/tokens/

# Documentation
mv app/showcase/DESIGN-SYSTEM/CLAUDE.md design-system/
mv app/showcase/DESIGN-SYSTEM/README.md design-system/
mv app/showcase/DESIGN-SYSTEM/BACKBONE.md design-system/docs/
mv app/showcase/DESIGN-SYSTEM/PIPELINE-MANIFEST.md design-system/docs/

# Provenance (if kept after human review)
mv app/showcase/DESIGN-SYSTEM/provenance/ design-system/provenance/
```

**Files moved:** 54 (4 tokens + 13 docs + 37 provenance)
**Verification:** Check all token imports in components/

---

### Migration Phase 4: Flatten Combination (CD)

```bash
# Move HTML explorations + core docs
mv app/showcase/explorations/combination/CD-*.html explorations/combination/
mv app/showcase/explorations/combination/lock-sheet.md explorations/combination/
mv app/showcase/explorations/combination/CD-AUDIT-SYNTHESIS.md explorations/combination/

# Archive research packages (if kept after human review)
mv app/showcase/explorations/combination/research-package-cd-*.md archive/combination/

# Note: phase4-standalone/*/screenshots/ already deleted in Phase 1
# Note: debrief-*.md already deleted in Phase 4
```

**Files moved:** 10 (6 HTML + 2 docs) + 6 to archive (if kept)

---

### Migration Phase 5: Extract KA Synthesis Files

```bash
# From knowledge-architecture/ root
mv knowledge-architecture/ACCUMULATED-IDENTITY-v2.md research/synthesis/
mv knowledge-architecture/COMPREHENSIVE-AUDIT-SPEC.md research/methodology/
mv knowledge-architecture/PHASE-1B-MEGA-DEBRIEF.md research/synthesis/
mv knowledge-architecture/PIPELINE-BACKBONE.md research/synthesis/
mv knowledge-architecture/CLAUDE.md research/

# From _cd-research and _migration-research
mv knowledge-architecture/_cd-research/09-CD-SYNTHESIS-BRIEFING.md research/synthesis/
mv knowledge-architecture/_migration-research/10-MIGRATION-SYNTHESIS.md research/synthesis/

# From scratchpads-a
mv knowledge-architecture/MASTER-AD-EXECUTION-SPEC.md research/synthesis/
mv knowledge-architecture/AD-CONVENTION-SPEC.md research/synthesis/
mv knowledge-architecture/AD-RESEARCH-GATE.md research/methodology/

# Archive large strategic files (if kept after human review)
mv knowledge-architecture/WORKFLOW-METACOGNITION-ANALYSIS.md archive/methodology/
mv knowledge-architecture/OD-EXECUTION-PROTOCOL-v3.md archive/methodology/
mv knowledge-architecture/OD-EXECUTION-ARCH-v4.md archive/methodology/
```

**Files moved:** 9 to research/ + 3 to archive/ (if kept)

---

### Migration Phase 6: Rename POST-CD-PIPELINE

```bash
# Move planning docs
mv app/showcase/POST-CD-PIPELINE/01-*.md research/planning/
mv app/showcase/POST-CD-PIPELINE/README.md research/planning/
mv app/showcase/POST-CD-PIPELINE/CLAUDE.md research/planning/
mv app/showcase/POST-CD-PIPELINE/MASTER-CD-EXECUTION-PROMPT.md research/planning/
mv app/showcase/POST-CD-PIPELINE/OPEN-QUESTIONS.md research/planning/

# Move synthesis doc to synthesis/
mv app/showcase/POST-CD-PIPELINE/TENSION-PROTOCOL.md research/synthesis/

# Move other keepable files
mv app/showcase/POST-CD-PIPELINE/tension-deep-dive.md research/synthesis/
mv app/showcase/POST-CD-PIPELINE/component-evolution-synthesis.md research/synthesis/
mv app/showcase/POST-CD-PIPELINE/source-component-comparison.md research/planning/

# Note: _tension-analysis/ already deleted in Phase 5
# Note: _SOURCE-BRIEF.md under human review
```

**Files moved:** 21 files

---

### Migration Phase 7: Archive Checkpoint Files

```bash
# Move checkpoint files (if archive kept)
mv checkpoints/CLAUDE.md archive/audit/
mv checkpoints/MASTER-STATE.md archive/audit/
mv checkpoints/SOUL-DISCOVERIES.md archive/audit/
mv checkpoints/RESEARCH-ACTIVE.md archive/audit/

# Archive synthesis files (if kept after human review)
mv checkpoints/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md archive/audit/
# ... (8 files total)
```

**Files moved:** 4 + 8 (if archive kept)

---

### Migration Phase 8: Infrastructure Extraction

```bash
# Extract synthesis files from infrastructure/
mv infrastructure/R5-COMBINATION-THEORY.md research/synthesis/
mv infrastructure/RESEARCH-SYNTHESIS.md research/synthesis/

# Move build artifacts to .internal/
mv infrastructure/.velite/ .internal/
mv infrastructure/dependency-trace/ .internal/  # If kept after human review

# Note: content/, components/, app/ remain in place (runtime)
```

**Files moved:** 2 to research/synthesis/

---

### Migration Phase 9: Archive Provenance Scratchpads

```bash
# If kept after human review (45 files)
mv knowledge-architecture/_provenance-deep-dive/ archive/provenance/
mv knowledge-architecture/_provenance-gap-analysis/ archive/provenance/
mv knowledge-architecture/_remediation/ archive/provenance/
mv knowledge-architecture/REMEDIATION-STATE.md archive/provenance/

# Methodology scratchpads
mv knowledge-architecture/_workflow-metacognition/ archive/methodology/
```

**Files moved:** 46 (if archive kept)

---

### Migration Phase 10: Create CLAUDE.md Files

```bash
# Write 6 CLAUDE.md files (see "CLAUDE.md PLACEMENT" section for content)
# - docs-spa/CLAUDE.md
# - design-system/CLAUDE.md
# - explorations/CLAUDE.md
# - research/CLAUDE.md
# - archive/CLAUDE.md (if archive kept)
# - .internal/CLAUDE.md
```

**Files created:** 6 new CLAUDE.md files

---

### Migration Phase 11: Remove Empty Directories

```bash
# Remove old structure after verifying all moves
rm -rf app/showcase/explorations/organizational/
rm -rf app/showcase/explorations/density/
rm -rf app/showcase/explorations/combination/
rm -rf app/showcase/DESIGN-SYSTEM/
rm -rf app/showcase/POST-CD-PIPELINE/
rm -rf knowledge-architecture/_cd-research/
rm -rf knowledge-architecture/_migration-research/
rm -rf checkpoints/

# Remove deleted scratchpad directories (already deleted in Phase 2)
# (no-op, already done)
```

---

### Migration Phase 12: Verification

**Run these checks:**

1. **All 514 files accounted for:**
   ```bash
   find docs-spa -type f | wc -l  # Should be 514 + 6 new CLAUDE.md = 520
   ```

2. **No files left in old locations:**
   ```bash
   find docs-spa/app/showcase/explorations/ -name "*.html" | wc -l  # Should be 0
   find docs-spa/app/showcase/DESIGN-SYSTEM/ -type f | wc -l        # Should be 0
   find knowledge-architecture/_* -type f | wc -l                    # Should be 0
   ```

3. **All fortress files present:**
   ```bash
   ls explorations/organizational/  # Should show OD-001 through OD-006 + CLAUDE.md + OD-006-CREATIVE-RESEARCH-FEED.md
   ls explorations/density/         # Should show DD-001 through DD-006 + CLAUDE.md
   ```

4. **All token files present (CRITICAL):**
   ```bash
   ls design-system/tokens/  # Should show geometry.md, typography.md, spacing.md, colors.md
   ```

5. **Depth check:**
   ```bash
   find docs-spa -type f | awk -F/ '{print NF-1}' | sort -n | tail -1  # Should be ≤ 4
   ```

6. **Underscore directories:**
   ```bash
   find docs-spa -type d -name "_*"  # Should only show .internal/ subdirectories (if any)
   ```

---

## ESTIMATED IMPACT

### Before vs After Structure

**Before (post-cleanup, pre-restructure):**
```
docs-spa/
├── app/showcase/
│   ├── explorations/          # 5-7 levels deep
│   ├── DESIGN-SYSTEM/         # Mixed load-bearing + historical
│   └── POST-CD-PIPELINE/      # Chronological name
├── knowledge-architecture/     # Mixed synthesis + scratchpads
├── infrastructure/            # Mixed runtime + research
└── checkpoints/               # Top-level scratchpads
```

**After (restructure complete):**
```
docs-spa/
├── app/                       # Runtime only
├── content/                   # Runtime only
├── components/                # Runtime only
├── design-system/             # Tokens + docs (clear separation)
├── explorations/              # HTML research (flat, 2-3 levels)
├── research/                  # Synthesis + planning (semantic names)
├── archive/                   # Historical (optional, human-review dependent)
└── .internal/                 # Build artifacts (hidden)
```

### Depth Reduction

| Zone | Before | After | Improvement |
|------|--------|-------|-------------|
| CD screenshots | 7 levels | **DELETED** | N/A |
| OD explorations | 5 levels | 3 levels | -40% |
| DD explorations | 5 levels | 3 levels | -40% |
| Design tokens | 4 levels | 3 levels | -25% |
| Synthesis docs | 2 levels | 3 levels | +50% (grouped) |
| Average | 4.3 levels | 2.8 levels | **-35%** |

### Semantic Clarity

**Chronological → Functional names:**
- `POST-CD-PIPELINE/` → `research/planning/`
- `phase4-standalone/` → **DELETED** (flattened)
- `_od-reenrichment/` → **DELETED**
- `knowledge-architecture/` → `research/` (partial)

**Underscore reduction:**
- Before: 12 underscore directories (mixed meaning)
- After: 1 underscore directory (`.internal/` only)
- Reduction: **-92%**

### File Organization

| Category | Files | Location (New) |
|----------|-------|----------------|
| Fortress explorations | 15 | `explorations/organizational/`, `explorations/density/` |
| CD explorations | 10 | `explorations/combination/` |
| AD explorations | TBD | `explorations/axis/` (after re-audit) |
| Design tokens | 4 | `design-system/tokens/` (**LOAD-BEARING**) |
| Synthesis docs | 11 | `research/synthesis/` |
| Planning docs | 13 | `research/planning/` |
| Methodology docs | 3 | `research/methodology/` |
| Runtime code | 170 | `app/`, `content/`, `components/` (**NO CHANGE**) |
| Archive | 46-65 | `archive/` (human-review dependent) |
| Build artifacts | 23 | `.internal/` |

---

## OPEN QUESTIONS (Human Review Required)

### Question 1: Archive Zone — Keep or Delete?

**Options:**
- **Option A:** Keep `archive/` zone with 46-65 files (combination, provenance, audit, methodology)
- **Option B:** Delete all contested files, no archive zone (save ~3-4MB)

**Recommendation:** KEEP archive/ — preserves historical context for process archeology, minimal storage cost (~3-4MB)

---

### Question 2: Axis Zone Re-Audit

**All 3 agents audited wrong path** (showcase route vs repository source).

**Next steps:**
1. Re-audit correct path: `/explorations/axis/` (233 files, 14MB)
2. Apply verdicts to migration map
3. Move surviving files to `explorations/axis/`

**Timeline:** Block migration Phase 4 (axis) until re-audit complete

---

### Question 3: Provenance Stage Files (37 files)

**Methodology conflict:**
- Researcher: Stage-N synthesis supersedes stage-N research
- Adversary: T1 synthesis supersedes ALL stage research
- Fresh-eyes: Stage research feeds forward (not superseded)

**Options:**
- **Option A:** KEEP all 37 files in `design-system/provenance/`
- **Option B:** DELETE stage research, keep only stage synthesis files (~10 files)
- **Option C:** ARCHIVE all 37 files to `archive/provenance/design-system/`

**Recommendation:** Human decision required — depends on whether provenance chain is load-bearing

---

### Question 4: Large Strategic Files (3 files, 732KB)

**Files:**
- WORKFLOW-METACOGNITION-ANALYSIS.md (297KB)
- OD-EXECUTION-PROTOCOL-v3.md (277KB)
- OD-EXECUTION-ARCH-v4.md (158KB)

**Adversary finding:** WORKFLOW-METACOGNITION references phantom POST-CD-PIPELINE directory (fabrication error)

**Options:**
- **Option A:** ARCHIVE all 3 to `archive/methodology/`
- **Option B:** DELETE all 3 (fully superseded)

**Recommendation:** ARCHIVE — adversary caught fabrication, but strategic value for process archeology

---

### Question 5: _SOURCE-BRIEF.md (1 file, ~50KB)

**Disagreement:**
- Researcher: 67 KEEP (original source material)
- Adversary: 42 ARCHIVE (superseded by published specs)
- Fresh-eyes: 7 DELETE (conversation transcript redundant)

**Options:**
- **Option A:** KEEP in `research/planning/`
- **Option B:** ARCHIVE in `archive/planning/`
- **Option C:** DELETE

**Recommendation:** Human verification required — check if transcript contains unique insights not in published specs

---

## CONCLUSION

**Proposed restructure reduces:**
- **Depth:** 4.3 → 2.8 levels average (-35%)
- **Underscore dirs:** 12 → 1 (-92%)
- **Chronological names:** 5 → 0 (100% semantic)
- **Mixing:** Runtime and research fully separated

**Key principles preserved:**
- Fortress files (OD, DD) moved intact — zero changes
- Load-bearing tokens isolated in `design-system/tokens/`
- Runtime code untouched (app/, content/, components/)
- Synthesis docs grouped in `research/synthesis/` (forward-consumed)

**Next steps:**
1. Execute MASTER-VERDICT Phase 1-5 deletions (661 files)
2. Human review 5 open questions (archive policy, provenance, large files)
3. Execute migration Phase 1-12 (514 files → clean structure)
4. Re-audit zone-axis at correct path
5. Update all CLAUDE.md files with new structure

**Timeline estimate:** ~2-3 hours for full migration (assuming human review decisions made)

---

**END RESTRUCTURE PROPOSAL**
