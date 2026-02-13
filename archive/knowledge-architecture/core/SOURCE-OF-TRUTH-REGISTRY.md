<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: docs-spa/app/showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md
     Tier: A | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
SOURCE-OF-TRUTH-REGISTRY.md is the authority declaration document for the
entire KortAI design system. It establishes a 4-tier hierarchy (T1 FOUNDATION,
T2 FRAMEWORK, T3 PATTERN, T4 OPERATIONAL) that determines which files are
authoritative, which are derived, and which are superseded. When files conflict,
this registry is the tiebreaker: the higher tier wins. It also maintains the
SUPERSEDED list — the only canonical record of which files must NOT be trusted.
Without this document, agents risk building on stale or contradicted sources.

2. THE QUESTION THIS ANSWERS
"Which files are authoritative for what, and when two files conflict, which
one should I trust?"

3. STATUS
ACTIVE | Lifecycle: LIVING (updated when files are superseded or new
authoritative sources are established) | Authority: CANONICAL — this is
the single authoritative registry of what's trustworthy. Its tier
declarations override any individual file's self-assessment.

4. SOUL ALIGNMENT
This file is soul-adjacent, not soul-implementing. It documents which files
contain the soul definition (MASTER-SOUL-SYNTHESIS.md, KORTAI-ESSENCE-FOUNDATION.md,
SOUL-TRANSLATION-GUIDE.md) and declares them T1 FOUNDATION, but does not itself
contain or enforce soul token values. Its structural role is to prevent soul
drift by clearly marking which soul files are authoritative and which prior
versions are superseded.

5. BUILT ON
| Source                        | Role                    | Key Values Taken                                  | Path                                                        |
|-------------------------------|-------------------------|---------------------------------------------------|-------------------------------------------------------------|
| MASTER-SOUL-SYNTHESIS.md     | T1 soul definition      | Complete soul statement, declared T1 FOUNDATION    | design-extraction/component-system/perceptual-audit-v2/synthesis/  |
| SOUL-TRANSLATION-GUIDE.md    | T1 soul translation     | Soul-to-CSS rules, declared T1 FOUNDATION          | design-extraction/component-system/perceptual-audit-v2/foundation/ |
| KORTAI-ESSENCE-FOUNDATION.md | T1 soul philosophy      | Core philosophy, declared T1 FOUNDATION            | design-extraction/component-system/perceptual-audit-v2/foundation/ |
| CHARACTER-FAMILY-COMPLETE.md | T1 component specs      | 11 component specifications, declared T1           | design-extraction/component-system/perceptual-audit-v2/synthesis/  |
| DESIGN-TOKEN-SUMMARY.md      | T1 design tokens        | All locked CSS variables, declared T1              | design-extraction/component-system/perceptual-audit-v2/synthesis/  |
| R1-R5 research files         | T2 framework files      | 337 findings across 5 research streams             | docs-spa/app/showcase/research/                              |
| DD-002-gradient.html         | T3 validated pattern    | Gold standard (34/40), declared T3 PATTERN         | docs-spa/app/showcase/explorations/density/                  |

6. MUST HONOR
| Constraint                                | Why                                                        | Violation Consequence                           |
|-------------------------------------------|------------------------------------------------------------|-------------------------------------------------|
| Tier hierarchy is absolute (T1 > T2 > T3 > T4) | Conflict resolution depends on tier ordering          | Contradictions go unresolved, soul drift occurs |
| SUPERSEDED list is exhaustive             | Any file not listed as superseded might be mistakenly used | Agents build on stale/wrong values              |
| T1 files cannot be regenerated            | They are original intellectual property                    | Loss of irreplaceable source material           |
| T2 files can be re-derived from T1 + research | Establishes regenerability hierarchy                  | Over-protection of regenerable artifacts        |
| "If NOT in this list, don't trust it"     | Default-deny authority model                               | Unapproved files treated as authoritative       |
| Paths must resolve to actual files        | Integrity report verified paths are correct                | Broken references mislead agents                |

7. WHAT BREAKS IF THIS CHANGES
Blast radius: HIGH (16+ inbound references across two repository trees).
Changing tier assignments or the superseded list would invalidate:
- showcase/CLAUDE.md (references this as authority for what to trust)
- knowledge-architecture/CLAUDE.md (lists this with 8+ inbound refs)
- knowledge-architecture/KA-VERIFICATION.md (built_on this registry)
- dependency-trace/PHASE-2A-CLASSIFICATION.md (classifies files using tiers)
- dependency-trace/09-INTEGRITY-REPORT.md (verified its path integrity)
- dependency-trace/02-threading-data/showcase-threading.md (threading data)
- dependency-trace/03-relationship-map.md (maps tier relationships)
- dependency-trace/01-reachability-report.md (uses tier hierarchy)
- dependency-trace/TRACE-SUMMARY.md (historical record)
- 6 T1 synthesis files in design-extraction/ (CONSISTENCY-VERIFICATION.md,
  ANTI-PATTERNS-REGISTRY.md, PRODUCTION-RULES.md, CHARACTER-FAMILY-COMPLETE.md,
  DESIGN-TOKEN-SUMMARY.md, MASTER-SOUL-SYNTHESIS.md) which cross-reference
  this registry to establish their own authority
- All future agent sessions that need to resolve file conflicts

8. CONSUMED BY
| Consumer                                              | How It Uses This File                                              |
|-------------------------------------------------------|--------------------------------------------------------------------|
| showcase/CLAUDE.md                                    | Points agents here for authority declarations                      |
| knowledge-architecture/CLAUDE.md                      | Lists it as key file with 8+ inbound refs                         |
| knowledge-architecture/KA-VERIFICATION.md             | Uses tier declarations for verification checklists                 |
| dependency-trace/PHASE-2A-CLASSIFICATION.md           | References tier structure for file classification                  |
| dependency-trace/09-INTEGRITY-REPORT.md               | Verified all T1 FOUNDATION paths resolve correctly                 |
| dependency-trace/03-relationship-map.md               | Maps tier-to-tier derivation relationships                         |
| T1 synthesis files (6 files in design-extraction/)    | Cross-reference to confirm their own authoritative status          |
| Conflict resolution scenarios                         | Tiebreaker when two files contradict each other                    |
| SUPERSEDED file consumers                             | Check here before trusting any file not in the 12-file backbone    |

9. RESEARCH DEBT
- SUPERSEDED section (lines 107-117) lists only 6 superseded files; the
  Phase 2A classification identified additional files that may need formal
  supersession entries but are not yet recorded here
- T1 tracking files (COLOR-TOKENS.md, TYPOGRAPHY-TOKENS.md, SPACING-TOKENS.md,
  CONTAINER-TOKENS.md) are listed as T1 FOUNDATION but also appear in the
  SUPERSEDED section as superseded by DESIGN-TOKEN-SUMMARY.md — this creates
  a contradiction: a file cannot be both T1 authoritative and superseded
- No timestamp on tier assignments: when a file was promoted or superseded
  is not recorded, making it impossible to audit tier changes over time
- OUTPUT section (lines 120-126) is minimal — does not specify which
  authoritative source each output type derives from
- QUICK REFERENCE table (lines 129-141) duplicates information from
  PIPELINE-BACKBONE.md without citing it, creating a potential drift risk

10. DIAGNOSTIC QUESTIONS
Q1: Do all files listed under T1 FOUNDATION actually exist on disk at
    their declared paths? (Tests path integrity.)
Q2: Are the 4 tracking token files (COLOR, TYPOGRAPHY, SPACING, CONTAINER)
    truly T1 FOUNDATION given that they also appear in the SUPERSEDED
    section? (Tests internal consistency.)
Q3: If a new agent encounters a conflict between DESIGN-TOKEN-SUMMARY.md
    and TYPOGRAPHY-TOKENS.md, does this registry unambiguously resolve it?
    (Tests conflict resolution clarity.)
Q4: Are there files in the system that SHOULD be in the SUPERSEDED list
    but are not? (Tests supersession completeness.)
Q5: Does the QUICK REFERENCE table (lines 129-141) match the current
    state of PIPELINE-BACKBONE.md's 12-file list? (Tests cross-document
    consistency.)

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
# SOURCE OF TRUTH REGISTRY
## What Files to Trust RIGHT NOW

═══════════════════════════════════════════════════════════════════════════════

## HOW TO USE THIS DOCUMENT

If a file is NOT in this list → Don't trust it as authoritative.
If files conflict → The higher tier wins.
If in doubt → Start with T1 FOUNDATION.

═══════════════════════════════════════════════════════════════════════════════

## T1: FOUNDATION (Locked — Cannot be regenerated)

These are the source of truth. Everything else derives from these.

### Soul Definition
| File | Path | Purpose |
|------|------|---------|
| MASTER-SOUL-SYNTHESIS.md | perceptual-audit-v2/synthesis/ | Complete KortAI soul definition |
| KORTAI-ESSENCE-FOUNDATION.md | perceptual-audit-v2/foundation/ | Core philosophy extraction |
| SOUL-TRANSLATION-GUIDE.md | perceptual-audit-v2/foundation/ | Soul-to-CSS translation rules |

### Component Specifications
| File | Path | Purpose |
|------|------|---------|
| CHARACTER-FAMILY-COMPLETE.md | perceptual-audit-v2/synthesis/ | All 11 components with characters |
| PERCEPTUAL-TRUTHS.md | perceptual-audit-v2/tracking/ | Soul truths per component |
| NAMED-CHARACTERS.md | perceptual-audit-v2/tracking/ | Character names and archetypes |

### Design Tokens
| File | Path | Purpose |
|------|------|---------|
| DESIGN-TOKEN-SUMMARY.md | perceptual-audit-v2/synthesis/ | All locked CSS variables |
| COLOR-TOKENS.md | perceptual-audit-v2/tracking/ | Color system |
| TYPOGRAPHY-TOKENS.md | perceptual-audit-v2/tracking/ | Typography system |
| SPACING-TOKENS.md | perceptual-audit-v2/tracking/ | Spacing scale |
| CONTAINER-TOKENS.md | perceptual-audit-v2/tracking/ | Border and container rules |

### Anti-Patterns
| File | Path | Purpose |
|------|------|---------|
| ANTI-PATTERNS-REGISTRY.md | perceptual-audit-v2/synthesis/ | Complete what NOT to do |
| ANTI-PATTERNS.md | perceptual-audit-v2/tracking/ | Structural anti-patterns |

### Production Rules
| File | Path | Purpose |
|------|------|---------|
| PRODUCTION-RULES.md | perceptual-audit-v2/synthesis/ | Implementation rules |
| CONSISTENCY-VERIFICATION.md | perceptual-audit-v2/synthesis/ | Verification checklists |

═══════════════════════════════════════════════════════════════════════════════

## T2: FRAMEWORK (Derived from T1 + research)

These build on T1 with external research. Can be re-derived.

### Research Documents
| File | Path | Findings | Source |
|------|------|----------|--------|
| R1-DOCUMENTATION-PATTERNS.md | showcase/research/ | 24 | Stripe, Vercel, Linear analysis |
| R2-CREATIVE-LAYOUTS.md | showcase/research/ | 25 | Magazine, dashboard patterns |
| R3-DENSITY-DIMENSIONS.md | showcase/research/ | 30 | 6 density dimensions |
| R4-AXIS-INNOVATIONS.md | showcase/research/ | 25 | Z, F, Bento patterns |
| R5-COMBINATION-THEORY.md | showcase/research/ | 20 | Component properties model |
| RESEARCH-SYNTHESIS.md | showcase/research/ | — | 5 unified principles |

### Master Index
| File | Path | Purpose |
|------|------|---------|
| FINDINGS-INDEX.md | showcase/ | Complete knowledge architecture |

═══════════════════════════════════════════════════════════════════════════════

## T3: PATTERN (Validated through exploration)

These are applied patterns validated through testing.

### Validated Explorations
| File | Path | Score | Pattern |
|------|------|-------|---------|
| DD-002-gradient.html | showcase/explorations/density/ | 34/40 ★ | CRESCENDO |
| DD-001-breathing.html | showcase/explorations/density/ | 30.5/40 | PULSE |
| DD-003-islands.html | showcase/explorations/density/ | 30.5/40 | Tidal Pools |

═══════════════════════════════════════════════════════════════════════════════

## T4: OPERATIONAL (Execution state)

### Current Project State
| File | Path | Purpose |
|------|------|---------|
| MASTER-STATE.md | showcase/checkpoints/ | Project position |
| DISCOVERIES-LOG.md | showcase/checkpoints/ | Exploration scores |
| SECTIONS-PROGRESS.md | showcase/checkpoints/ | Section build status |

### Knowledge Architecture
| File | Path | Purpose |
|------|------|---------|
| KA-POSITION.md | showcase/knowledge-architecture/ | KA phase position |
| KA-DECISIONS.md | showcase/knowledge-architecture/ | KA decisions log |
| KA-VERIFICATION.md | showcase/knowledge-architecture/ | KA verification |

═══════════════════════════════════════════════════════════════════════════════

## SUPERSEDED (Do NOT use)

| File | Superseded By | Reason |
|------|---------------|--------|
| soul-extractions/*.md | PERCEPTUAL-TRUTHS.md | Summaries, not authoritative |
| tracking/TYPOGRAPHY-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| tracking/SPACING-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| tracking/COLOR-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| tracking/CONTAINER-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| coexistence/COEXISTENCE-TEST-RESULTS.md | re-audit/coexistence-reaudits/ | Phase 4-BETA re-audit |

═══════════════════════════════════════════════════════════════════════════════

## OUTPUT (Regenerable)

These can be regenerated from authoritative sources:
- screenshots/*.png
- Component HTML demos
- Test files

═══════════════════════════════════════════════════════════════════════════════

## QUICK REFERENCE: Find Anything

| Need | Go To |
|------|-------|
| Soul definition | MASTER-SOUL-SYNTHESIS.md |
| CSS variables | DESIGN-TOKEN-SUMMARY.md |
| Component specs | CHARACTER-FAMILY-COMPLETE.md |
| What NOT to do | ANTI-PATTERNS-REGISTRY.md |
| All research findings | FINDINGS-INDEX.md |
| Density patterns | R3-DENSITY-DIMENSIONS.md |
| Combination rules | R5-COMBINATION-THEORY.md |
| Validated example | DD-002-gradient.html |
