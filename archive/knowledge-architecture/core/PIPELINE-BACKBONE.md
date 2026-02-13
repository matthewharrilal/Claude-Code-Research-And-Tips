<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: docs-spa/app/showcase/knowledge-architecture/PIPELINE-BACKBONE.md
     Tier: A | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
PIPELINE-BACKBONE.md is the master narrative document for the entire KortAI
design system knowledge pipeline. It defines the MINIMAL set of 12 essential
files needed to understand the system, establishes a mandatory 5-phase reading
order (SOUL -> TOKENS -> COMPONENTS -> PATTERNS -> VALIDATION), and provides
the canonical dependency diagram showing how upstream changes cascade downstream.
Without this file, agents and humans lack a guided entry point into a 400+ file
ecosystem, leading to wasted time reading non-authoritative or superseded content.

2. THE QUESTION THIS ANSWERS
"What files must I read, in what order, to fully understand the KortAI design
system — and how do those files depend on each other?"

3. STATUS
ACTIVE | Lifecycle: LOCKED (defines structural truth about the pipeline;
content may be amended only if the pipeline itself changes) | Authority:
CANONICAL — this is the single authoritative read-order definition for the
system. All CLAUDE.md files and onboarding instructions defer to it.

4. SOUL ALIGNMENT
This file is soul-adjacent, not soul-implementing. It documents the soul
pipeline rather than implementing soul constraints. It references the soul
files (KORTAI-ESSENCE-FOUNDATION.md, SOUL-TRANSLATION-GUIDE.md,
MASTER-SOUL-SYNTHESIS.md) as Phase 1 reading but does not itself contain
or enforce soul token values. Its structural role is to ensure soul files
are read FIRST, before any implementation files.

5. BUILT ON
| Source                        | Role                  | Key Values Taken                              | Path                                                        |
|-------------------------------|-----------------------|-----------------------------------------------|-------------------------------------------------------------|
| SOUL-TRANSLATION-GUIDE.md    | Phase 1 soul file     | Soul-to-CSS mapping methodology               | design-extraction/component-system/perceptual-audit-v2/foundation/ |
| MASTER-SOUL-SYNTHESIS.md     | Phase 1 soul file     | Complete soul definition, derivation root      | design-extraction/component-system/perceptual-audit-v2/synthesis/  |
| R3-DENSITY-DIMENSIONS.md     | Phase 4 pattern file  | 6 density dimensions, PULSE/CRESCENDO patterns | docs-spa/app/showcase/research/                              |
| R5-COMBINATION-THEORY.md     | Phase 4 pattern file  | Velocity/Temperature/Weight model              | docs-spa/app/showcase/research/                              |
| DD-002-gradient.html         | Phase 5 validation    | Gold standard implementation (34/40 score)     | docs-spa/app/showcase/explorations/density/                  |

6. MUST HONOR
| Constraint                              | Why                                                       | Violation Consequence                        |
|-----------------------------------------|-----------------------------------------------------------|----------------------------------------------|
| 5-phase ordering is canonical           | Agents read SOUL before TOKENS before COMPONENTS          | Misunderstanding soul → wrong implementations|
| 12-file list is the MINIMAL set         | Everything else is supporting context                     | Agents read too much or miss essentials      |
| Dependency diagram direction is strict  | Upstream changes cascade DOWN, not up                     | Circular dependency / soul violation         |
| External references (design-extraction) | Soul files live outside showcase/                         | Broken provenance if paths change            |
| Read order matches dependency order     | Files are listed so each builds on prior understanding    | Comprehension gaps if reordered              |

7. WHAT BREAKS IF THIS CHANGES
Blast radius: HIGH (12+ inbound references). Changing the pipeline order or
the 12-file minimal set would invalidate:
- knowledge-architecture/CLAUDE.md (defers to this as "master narrative")
- design-extraction/FOLDER-MAP.md (links here 3 times as "Key reference")
- showcase/CLAUDE.md (mandatory reading lists reference this pipeline)
- dependency-trace/PHASE-2A-CLASSIFICATION.md (classifies this file)
- dependency-trace/09-INTEGRITY-REPORT.md (verified its external refs)
- dependency-trace/02-threading-data/showcase-threading.md (threading source)
- dependency-trace/TRACE-SUMMARY.md (historical record)
- T1 synthesis files (CHARACTER-FAMILY-COMPLETE.md, DESIGN-TOKEN-SUMMARY.md,
  MASTER-SOUL-SYNTHESIS.md) which cross-reference back to this pipeline
- All future agent sessions that read CLAUDE.md for onboarding
- Context recovery procedures that start from this file

8. CONSUMED BY
| Consumer                                              | How It Uses This File                                           |
|-------------------------------------------------------|-----------------------------------------------------------------|
| knowledge-architecture/CLAUDE.md                      | Lists it as "master narrative" with 12+ inbound refs            |
| design-extraction/FOLDER-MAP.md                       | Links 3x as key reference for pipeline understanding            |
| showcase/CLAUDE.md                                    | Mandatory reading rules point agents here                       |
| dependency-trace/PHASE-2A-CLASSIFICATION.md           | Classifies it within knowledge-architecture files               |
| dependency-trace/09-INTEGRITY-REPORT.md               | Verifies its external references are intact                     |
| T1 synthesis files (3 files)                          | Cross-reference back to pipeline for positional awareness       |
| New agent sessions                                    | Entry point for understanding what to read and in what order    |
| Context recovery                                      | First file to read after compaction to re-establish position    |

9. RESEARCH DEBT
- PIPELINE QUERIES section (lines 111-139) covers only 4 common questions;
  real-world usage may reveal additional query paths not yet documented
- Phase 5 VALIDATION lists only DD-002-gradient.html; as more explorations
  reach INCLUDE status, the minimal set may need expansion
- The dependency diagram (lines 161-179) shows a single linear chain but the
  actual system has some lateral dependencies (e.g., R5 depends on R3) that
  are not visualized
- No versioning: if the 12-file set changes, there is no mechanism to track
  which version of the backbone was active when prior work was done
- BACKUP/ARCHIVE PROTOCOL section lacks automation — it is advisory only

10. DIAGNOSTIC QUESTIONS
Q1: Does the current 12-file list match the actual files present on disk?
    (Verify each of the 12 paths resolves to an existing file.)
Q2: If you remove any one of the 12 files, can the remaining 11 still
    convey the complete system? (Tests minimality claim.)
Q3: Does reading the files in the prescribed order actually build
    understanding incrementally, or are there forward references that
    require jumping ahead? (Tests ordering correctness.)
Q4: Are there any CLAUDE.md files or onboarding documents that prescribe
    a DIFFERENT reading order than this backbone? (Tests authority.)
Q5: Does the dependency diagram (lines 161-179) match the actual
    import/reference graph from Phase 1B analysis? (Tests accuracy.)

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
# PIPELINE BACKBONE
## Minimal Files Required for Migration

═══════════════════════════════════════════════════════════════════════════════

## PURPOSE

This document identifies the MINIMAL set of files needed to:
1. Understand the KortAI soul
2. Get all design tokens
3. Know all component specifications
4. Apply density and combination patterns

**Everything else is supporting context.** These 12 files ARE the system.

═══════════════════════════════════════════════════════════════════════════════

## THE 12 ESSENTIAL FILES

### Phase 1: SOUL (Read First)

| # | File | Why Essential |
|---|------|---------------|
| 1 | **KORTAI-ESSENCE-FOUNDATION.md** | Defines soul in 3 dimensions |
| 2 | **SOUL-TRANSLATION-GUIDE.md** | Maps print → digital |
| 3 | **MASTER-SOUL-SYNTHESIS.md** | Complete soul statement |

**Location:** `perceptual-audit-v2/foundation/` and `perceptual-audit-v2/synthesis/`

### Phase 2: TOKENS (The "WHAT")

| # | File | Why Essential |
|---|------|---------------|
| 4 | **DESIGN-TOKEN-SUMMARY.md** | All locked CSS variables |
| 5 | **PERCEPTUAL-TRUTHS.md** | Soul truths per component |
| 6 | **NAMED-CHARACTERS.md** | Component personas |
| 7 | **ANTI-PATTERNS.md** | What NOT to do |

**Location:** `perceptual-audit-v2/synthesis/` and `perceptual-audit-v2/tracking/`

### Phase 3: COMPONENTS (The "HOW")

| # | File | Why Essential |
|---|------|---------------|
| 8 | **CHARACTER-FAMILY-COMPLETE.md** | All 11 component specs |

**Location:** `perceptual-audit-v2/synthesis/`

### Phase 4: PATTERNS (The "WHEN")

| # | File | Why Essential |
|---|------|---------------|
| 9 | **R3-DENSITY-DIMENSIONS.md** | 6 dimensions, 4 patterns |
| 10 | **R5-COMBINATION-THEORY.md** | Velocity/Temperature/Weight |
| 11 | **RESEARCH-SYNTHESIS.md** | 5 unified principles |

**Location:** `showcase/research/`

### Phase 5: VALIDATION (The "CHECK")

| # | File | Why Essential |
|---|------|---------------|
| 12 | **DD-002-gradient.html** | Gold standard implementation |

**Location:** `showcase/explorations/density/`

═══════════════════════════════════════════════════════════════════════════════

## READING ORDER

```
1. KORTAI-ESSENCE-FOUNDATION.md
   ↓ "What is the soul?"

2. SOUL-TRANSLATION-GUIDE.md
   ↓ "How does soul become CSS?"

3. MASTER-SOUL-SYNTHESIS.md
   ↓ "Complete soul definition"

4. DESIGN-TOKEN-SUMMARY.md
   ↓ "What are the exact values?"

5. CHARACTER-FAMILY-COMPLETE.md
   ↓ "What are the 11 components?"

6. PERCEPTUAL-TRUTHS.md
   ↓ "What is each component's soul?"

7. ANTI-PATTERNS.md
   ↓ "What must I avoid?"

8. R3-DENSITY-DIMENSIONS.md
   ↓ "What patterns exist?"

9. R5-COMBINATION-THEORY.md
   ↓ "How do components combine?"

10. RESEARCH-SYNTHESIS.md
    ↓ "What are the unified principles?"

11. DD-002-gradient.html
    ↓ "Show me an example"

12. NAMED-CHARACTERS.md
    → "Reference character names"
```

═══════════════════════════════════════════════════════════════════════════════

## PIPELINE QUERIES

### Q: "I have existing docs. How do I apply this design system?"

**Answer Path:**
1. Read DESIGN-TOKEN-SUMMARY.md → Get CSS variables
2. Read ANTI-PATTERNS.md → Know what to remove
3. Read CHARACTER-FAMILY-COMPLETE.md → Map your components
4. See DD-002-gradient.html → Validation example

### Q: "What density pattern should I use for a tutorial?"

**Answer Path:**
1. Read R3-DENSITY-DIMENSIONS.md → Section on PULSE pattern
2. Implementation: Rhythmic high-low cycles (24px → 64-80px → 24px)

### Q: "What components can I use together?"

**Answer Path:**
1. Read R5-COMBINATION-THEORY.md → Velocity/Temperature/Weight
2. Key rules: Never stack same-velocity, smooth temperature flow
3. Recommended sequences in "Closing Sequence", "Teaching Sequence", etc.

### Q: "What spacing should I use between components?"

**Answer Path:**
1. Read DESIGN-TOKEN-SUMMARY.md → Spacing section
2. Key values: 24px related, 48px sections, 64-80px recovery

═══════════════════════════════════════════════════════════════════════════════

## BACKUP/ARCHIVE PROTOCOL

### Must Preserve (Cannot Regenerate)
All 12 files above — these are the system's IP.

### Can Regenerate
- Screenshots (from Playwright)
- Component HTML demos (from specs)
- Test files (from requirements)

### Should Keep (Context)
- Research files R1-R5 (methodology)
- Exploration files DD-001, DD-003 (learning)
- Re-audit files (verification evidence)

═══════════════════════════════════════════════════════════════════════════════

## DEPENDENCY DIAGRAM

```
┌─ Sanrok Reference Images (ORIGIN)
│
└─► KORTAI-ESSENCE-FOUNDATION.md
    └─► SOUL-TRANSLATION-GUIDE.md
        └─► MASTER-SOUL-SYNTHESIS.md
            │
            ├─► DESIGN-TOKEN-SUMMARY.md
            ├─► CHARACTER-FAMILY-COMPLETE.md
            ├─► PERCEPTUAL-TRUTHS.md
            ├─► NAMED-CHARACTERS.md
            └─► ANTI-PATTERNS.md
                │
                ├─► R3-DENSITY-DIMENSIONS.md
                ├─► R5-COMBINATION-THEORY.md
                └─► RESEARCH-SYNTHESIS.md
                    │
                    └─► DD-002-gradient.html (validation)
```

If any file in this chain changes, everything downstream needs review.
