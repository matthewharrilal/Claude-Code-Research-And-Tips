# Migration Plans Research Summary
## What the existing documentation says about migration

**Researcher:** Agent #2
**Sources read:** BACKBONE.md, QUICK-START.md, migration-guide.md, MASTER-STATE.md, KA-DECISIONS.md, PATTERN-INDEX.md, FINDINGS-INDEX.md, PIPELINE-MANIFEST.md (migration sections), README.md (migration sections), HANDOFF-AD-TO-CD.md, plus 97 files searched for migration/migrate mentions.

---

## 1. WHAT IS PLANNED

### 1A. The Pipeline Positions Migration as the FINAL Stage

BACKBONE.md shows the master pipeline as:

```
Research (337 findings) -> Stage 1: Components -> Stage 2: DD -> Stage 3: OD -> Stage 4: AD -> Stage 5: CD -> MIGRATION
```

Migration is explicitly the terminal node after CD (combination). Every pipeline diagram in BACKBONE.md, the Causal Chain (Section 10), and the Generated Research Flow (Section 8) all terminate at "Migration." The pipeline's "Consumed By" column for every stage-generated finding includes "Migration" as a downstream consumer:

- COMP-F-### -> "DD, OD, AD, CD, **Migration**"
- DD-F-### -> "OD, AD, CD, **Migration**"
- OD-F-### -> "AD, CD, **Migration**"
- AD-F-### -> "CD, **Migration**"
- CD-F-### -> "**Migration**" (pending)

This means migration is designed to consume ALL findings from ALL stages.

### 1B. Migration Guide Exists (Tactical, Style-Focused)

`DESIGN-SYSTEM/guides/migration-guide.md` is a complete document focused on **CSS-level conversion** of existing documentation pages to KortAI compliance. It covers:

1. **Pre-migration checklist** (CSS variables loaded, fonts loaded, styles reset, anti-patterns read)
2. **Style audit** (remove border-radius, box-shadow, cool grays; replace with locked tokens)
3. **Callout conversion** (generic alerts -> KortAI callout components with type mapping)
4. **Code block conversion** (generic pre/code -> KortAI code-snippet component)
5. **Density pattern selection** (content type -> pattern mapping: Tutorial=PULSE, Getting Started=CRESCENDO, Reference=Islands, Long-form=WAVE)
6. **Verification checklist** (geometry, colors, typography, density)
7. **Common pitfalls** (rounded corners, shadows, sans-serif for Essence, thin borders)
8. **Migration automation** (pseudo-code for CSS variable injection and anti-pattern detection lint rules)
9. **Post-migration audit** ("Bootstrap test" + visual comparison to Sanrok reference)

**Key limitation:** This guide is purely CSS/HTML focused. It does NOT address:
- How to migrate the docs-spa React/Next.js pages
- How to select OD organizational patterns for a page
- How to select AD axis patterns for a page
- How to apply the combination rules (CD)
- How to create provenance documentation for migrated pages
- Page-level architectural decisions (which components, what order, what structure)

### 1C. PATTERN-INDEX Defines an 8-Step Migration Workflow

`DESIGN-SYSTEM/patterns/PATTERN-INDEX.md` (Section: MIGRATION WORKFLOW) defines a more complete 8-step workflow:

```
1. Identify content type -> What is this page trying to do?
2. Select organizational pattern -> How should info be structured?
3. Apply paired density pattern -> What rhythm should the page have?
4. Apply FRACTAL at all scales -> Does rhythm repeat at every level?
5. Select axis layout -> How are components positioned?
6. Apply combination rules -> How do components work together?
7. Verify soul compliance -> Do all 5 soul pieces pass?
8. Document provenance -> What findings were applied? (cite IDs)
```

This workflow references the full Step 1-5 pattern selection guide in the same file, which maps:
- Content type -> OD pattern (6 options)
- OD pattern -> DD density pairing (6 validated pairings)
- FRACTAL self-similarity (mandatory for all)
- OD pattern -> AD axis layout (6 validated pairings)
- Soul verification (5 pieces)

**Key strength:** This is the most architecturally complete migration plan in the codebase.
**Key gap:** It assumes CD (Step 6) is done. CD is still PENDING.

### 1D. FINDINGS-INDEX Migration Section

`FINDINGS-INDEX.md` Section 7 ("MIGRATION GUIDE -- Preserving Findings") addresses a DIFFERENT concern: preserving findings when moving to a new framework. It lists:

1. Preserve design tokens (copy :root variables)
2. Preserve component properties (Velocity/Temperature/Weight model)
3. Preserve density patterns (PULSE/CRESCENDO/WAVE)
4. Preserve combination rules
5. Preserve anti-patterns

Plus automation rules for AI systems:
```yaml
density_pattern_selection:
  tutorial: PULSE
  onboarding: CRESCENDO
  reference: Islands
  long_form: WAVE
```

**This is about framework portability, NOT about migrating pages.**

### 1E. CLAUDE.md (showcase root) Defines Migration Pre-Read

The showcase CLAUDE.md defines what must be read before ANY migration:

```
MUST READ:
- DESIGN-SYSTEM/* (complete package)
- All validated explorations
- All anti-patterns
- knowledge-architecture/KA-DECISIONS.md

MUST EXTRACT:
- Exact token values to apply
- Pattern to use (with validation reference)
- Compliance checklist
```

### 1F. README.md (THE KORTAI DESIGN MIND) Positions Migration at Level 1

The README describes 4 engagement levels. Migration of straightforward pages is positioned at Level 1 (Application): "You need to migrate an API reference page. You open PATTERN-INDEX.md, find 'API reference -> CONFIDENCE-BASED organization + CRESCENDO density.' You apply those patterns. You're done."

For non-straightforward pages, Level 2 (Understanding) or Level 3 (Extension) is required.

---

## 2. WHAT IS NOT PLANNED (Gaps)

### 2A. CD Stage is Pending -- Migration Cannot Be Complete

Every migration document references CD (combination) as a required input. CD is Stage 5, which has not been started. The PATTERN-INDEX migration workflow Step 6 says "Apply combination rules" but CD-F-### findings don't exist yet. HANDOFF-AD-TO-CD.md exists and is complete, so CD can begin, but it hasn't.

**Impact:** Migration CANNOT be fully defined until CD completes. Combination rules are unknown.

### 2B. No Per-Page Migration Specification

The docs-spa contains actual Next.js pages that need to be migrated. No document identifies:
- Which specific pages exist in docs-spa
- What content type each page is
- Which OD/DD/AD pattern applies to each
- The current state of each page (migrated? partially? not at all?)
- Priority order for migration

### 2C. No Migration Execution Protocol

There is no agent-team-style execution spec for migration (unlike the MASTER-AD-EXECUTION-SPEC that existed for AD). No document defines:
- How many agents to use
- What wave structure to follow
- How to verify per-page migration quality
- How to handle pages that don't fit neatly into a content type
- How to handle compound pages (multiple content types in one page)

### 2D. No React/TSX Migration Guide

The migration guide is pure HTML/CSS. The actual docs-spa pages are React/Next.js with TSX components, Tailwind CSS, MDX content, etc. No guide addresses:
- How to map KortAI CSS variables to Tailwind utilities
- How to convert existing React components to KortAI-compliant versions
- How to handle MDX content pages
- How to integrate the validated exploration patterns (which are raw HTML) into the React component architecture

### 2E. No Provenance-for-Migration Documentation

Step 8 of the PATTERN-INDEX workflow says "Document provenance -- what findings were applied?" but there's no template or specification for what migration provenance looks like. The existing provenance system (inline threading headers, light sections, formal chain documents) was built for the research/exploration pipeline, not for migrated pages.

### 2F. No Quality Gate for Migration

The exploration pipeline has clear quality gates (scores, soul compliance audits, adversarial review). There is no equivalent for migration:
- What score does a migrated page need?
- Who audits it?
- What does "done" look like for a migrated page?

### 2G. Design-System-to-Code Gap

The design-system/ directory is documentation (markdown), not code. There is a gap between:
- `DESIGN-SYSTEM/tokens/` (markdown describing CSS variables)
- `docs-spa/` (actual Next.js app with its own component system)

The `design-system/src/styles/tokens.css` file exists but has CONTRADICTIONS with T1 (KA-DECISIONS documents 3 contradictions: primary red color, border-radius values, box-shadow values, type scale). T1 wins, but the code hasn't been updated.

---

## 3. STATE OF READINESS

| Prerequisite | Status | Notes |
|-------------|--------|-------|
| Soul pieces defined | COMPLETE | 5 soul pieces, 100% compliance across all stages |
| Token values locked | COMPLETE | CSS variables in QUICK-START.md and DESIGN-TOKEN-SUMMARY.md |
| Density patterns validated | COMPLETE | 6 patterns, all INCLUDE |
| Organizational patterns validated | COMPLETE | 6 patterns, all VALIDATED |
| Axis patterns validated | COMPLETE | 6 patterns, all VALIDATED |
| Combination patterns validated | PENDING | CD stage not started |
| Migration guide exists | PARTIAL | CSS-only, not React/TSX |
| Pattern selection workflow | COMPLETE | 8-step workflow in PATTERN-INDEX |
| Anti-patterns documented | COMPLETE | registry.md |
| Per-page plan | MISSING | No page-by-page spec |
| Migration execution protocol | MISSING | No agent team spec |
| Quality gate for migration | MISSING | No scoring rubric |
| Code-level integration plan | MISSING | No React/Tailwind guide |

---

## 4. PIPELINE MANIFEST EVIDENCE

PIPELINE-MANIFEST.md explicitly lists "Migration" as a consumer for ALL stage findings:
- All 13 OD-F findings: "AD, CD, Migration"
- OD-F-MP-001 (Organization = Density): "ALL (AD, CD, Migration)"
- OD-F-AP-001 (2px border epidemic): "AD, CD, Migration"
- All 12 key AD-F findings: "CD, Migration"
- AD-F-023 (ATTENTION TOPOLOGY): "CD (MANDATORY), Migration"
- AD-F-024 (Compound sequential): "CD (MANDATORY), Migration"
- AD-F-025 (Transition grammar): "CD (MANDATORY), Migration"

The manifest also notes: "After migration work: Update pattern usage counts" -- confirming migration is expected to track which patterns are used.

---

## 5. SUMMARY OF GAPS

**Critical gaps (block migration):**
1. CD stage incomplete -- combination rules unknown
2. No per-page migration plan -- don't know what to migrate or in what order
3. No React/TSX migration guide -- can't bridge HTML patterns to component code

**Important gaps (degrade migration quality):**
4. No migration execution protocol -- no agent team structure
5. No migration quality gate -- no scoring rubric
6. No migration provenance template -- no documentation standard
7. Design-system code has known contradictions with T1 tokens

**Minor gaps (can work around):**
8. Migration automation is pseudo-code only
9. FINDINGS-INDEX migration section conflates framework migration with page migration
10. MASTER-STATE.md is significantly out of date (still shows OD-001 as next, when AD is complete)
