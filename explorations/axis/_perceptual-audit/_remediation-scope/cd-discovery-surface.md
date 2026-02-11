# CD Agent Discovery Surface Map

**Generated:** 2026-02-11
**Perspective:** A fresh Claude instance told "Execute the CD phase"
**Method:** Traced every reference from HANDOFF-AD-TO-CD.md through 2+ hops, then inventoried all existing files to identify orphaned critical knowledge

---

## 1. The Discovery Path: Step by Step

### Step 0: Entry Point
A CD agent enters through one of two paths:
1. **Direct handoff reference:** Told to read `HANDOFF-AD-TO-CD.md`
2. **CLAUDE.md auto-read:** Enters `stage-5-combination-cd/` directory, which auto-reads `CLAUDE.md` there

The stage-5 CLAUDE.md says:
1. Read `../stage-4-axis-ad/HANDOFF-AD-TO-CD.md` -- MANDATORY
2. Read `STAGE-HEADER.md` -- What CD will do
3. Read `../original-research/R5-COMBINATION-THEORY.md` -- PRIMARY research

### Step 1: HANDOFF-AD-TO-CD.md (The Gate File)
**Location:** `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md`
**Status:** EXISTS, COMPLETE (234 lines)

The handoff explicitly lists 9 files CD MUST read (Section "FILES CD MUST READ"):

| # | File Referenced | Exists? | Actual Path |
|---|----------------|---------|-------------|
| 1 | THIS FILE (handoff) | YES | `provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` |
| 2 | ACCUMULATED-IDENTITY-v2.md | YES | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` |
| 3 | SOUL-DISCOVERIES.md | YES | `provenance/SOUL-DISCOVERIES.md` (or `checkpoints/SOUL-DISCOVERIES.md`) |
| 4 | AD-outbound-findings.md | YES | `provenance/stage-4-axis-ad/AD-outbound-findings.md` |
| 5 | AD-SYNTHESIS.md | YES | `provenance/stage-4-axis-ad/AD-SYNTHESIS.md` |
| 6 | AD-CONVENTION-SPEC.md | YES | `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` |
| 7 | R-5 Combination Theory | YES | `provenance/original-research/R5-COMBINATION-THEORY.md` (or `research/R5-COMBINATION-THEORY.md`) |
| 8 | PIPELINE-MANIFEST.md | YES | `provenance/PIPELINE-MANIFEST.md` |
| 9 | BACKBONE.md | YES | `DESIGN-SYSTEM/BACKBONE.md` |

**Additional handoff references (inline, not in the reading list):**
- AD-SOUL-TEMPLATE.html -- referenced as "reuse as base for CD locked layer"
- OD-CONVENTION-SPEC.md -- referenced as "sections 1-11 inherited"
- AD-F-024, AD-F-025 -- referenced as "MANDATORY constraints for CD"
- DD-F-013 -- referenced as "AD's gate finding for CD"
- DD-F-012 -- referenced as "AD's gate finding" (elevated)
- R-4 (Axis Innovations) -- referenced as "secondary"

### Step 2: Second-Hop References (What the 9 files point to)

#### From ACCUMULATED-IDENTITY-v2.md:
- All 5 soul pieces (inline, self-contained)
- 6 universal CSS rules (inline)
- COMP-F-001 through COMP-F-021 (references, not paths)
- DD-F-001 through DD-F-018 (references, not paths)
- OD-F-001 through OD-F-017 (references, not paths)
- AD-F-001 through AD-F-028 (references, not paths)
- Points to nothing that isn't already in the handoff reading list

#### From AD-SYNTHESIS.md:
- AD-CONVENTION-SPEC.md (already in reading list)
- AD-RESEARCH-GATE.md --> `knowledge-architecture/_ad-execution/AD-RESEARCH-GATE.md`
- R-2-AD-EVALUATION.md --> `knowledge-architecture/_ad-execution/R-4-AD-EVALUATION.md` (note: filename says R-4)
- r2-ad-mapping.md --> `knowledge-architecture/_ad-execution/r2-ad-mapping.md`
- EXT-AXIS-* findings (33 total) -- referenced by ID only, no file path given
- HANDOFF-OD-TO-AD.md --> `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md`
- ACCUMULATED-IDENTITY-v1.1.md --> `knowledge-architecture/ACCUMULATED-IDENTITY-v1.1.md`
- 6 AD HTML exploration artifacts (AD-001 through AD-006)

#### From BACKBONE.md:
- PATTERN-INDEX.md --> `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md`
- component-findings.md --> `provenance/stage-1-components/component-findings.md`
- DD-outbound-findings.md --> `provenance/stage-2-density-dd/DD-outbound-findings.md`
- PIPELINE-MANIFEST.md (already in reading list)
- SOUL-DISCOVERIES.md (already in reading list)
- RESEARCH-ACTIVE.md --> `provenance/RESEARCH-ACTIVE.md`

#### From PIPELINE-MANIFEST.md:
- All finding IDs across all stages (inline registry)
- References to R-1 through R-5 research files
- References to component-findings.md, DD-outbound-findings.md
- No new file paths beyond what's already reachable

#### From AD-CONVENTION-SPEC.md:
- OD-CONVENTION-SPEC.md (sections 1-11 inherited)
- AD-SOUL-TEMPLATE.html (the locked template)
- Token files: `DESIGN-SYSTEM/tokens/colors.md`, `tokens/geometry.md`, `tokens/spacing.md`, `tokens/typography.md`
- Anti-patterns: `DESIGN-SYSTEM/anti-patterns/registry.md`

#### From R-5 Combination Theory:
- Self-contained research document (39 findings)
- References other R-files by ID only

---

## 2. CLAUDE.md Auto-Read Chain

When a CD agent navigates directories, CLAUDE.md files auto-read. Here is what each provides:

| CLAUDE.md Location | What It Tells the Agent | Reachable? |
|--------------------|------------------------|------------|
| `stage-5-combination-cd/CLAUDE.md` | Read handoff, stage-header, R-5 | YES (entry point) |
| `stage-4-axis-ad/CLAUDE.md` | Read handoff-to-CD first, then synthesis, findings, audit-synthesis, accumulated-identity-v2 | YES (adjacent directory) |
| `provenance/CLAUDE.md` | PIPELINE-MANIFEST entry point, provenance structure, chain walkthrough | YES (parent directory) |
| `DESIGN-SYSTEM/CLAUDE.md` | READ README.md first, navigation table to all DESIGN-SYSTEM subdirs | YES (grandparent) |
| `showcase/CLAUDE.md` | MANDATORY research grounding (5 files), refinement loop, perceptual audit protocol | YES (ancestor) |
| `knowledge-architecture/CLAUDE.md` | Pipeline backbone, source of truth registry, KA decisions | YES (sibling directory) |
| `explorations/CLAUDE.md` | Navigation for exploration artifacts | YES (sibling) |
| `checkpoints/CLAUDE.md` | Operational tracking files | YES (sibling) |

---

## 3. Complete Discovery Surface Table

All paths relative to `docs-spa/app/showcase/`.

### Tier 1: Direct References from Handoff (Hop 0-1)

| # | File | Reachable from handoff? | Hops | Contains critical CD knowledge? | Gap? |
|---|------|------------------------|------|-------------------------------|------|
| 1 | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | YES (IS the handoff) | 0 | YES -- gate file, 28 findings summary, constraints, open questions | NO |
| 2 | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | YES (handoff #2) | 1 | YES -- complete accumulated soul, rules, anti-physical identity | NO |
| 3 | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | YES (handoff #3) | 1 | YES -- 5 soul pieces with perceptual truths | NO |
| 4 | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` | YES (handoff #4) | 1 | YES -- 28 AD-F findings (full detail) | NO |
| 5 | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` | YES (handoff #5) | 1 | YES -- cross-exploration synthesis, consumption/production tables | NO |
| 6 | `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` | YES (handoff #6) | 1 | YES -- 822-line spec, base for CD locked layer | NO |
| 7 | `DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` | YES (handoff #7) | 1 | YES -- PRIMARY research (39 findings) | NO |
| 8 | `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` | YES (handoff #8) | 1 | YES -- master finding registry | NO |
| 9 | `DESIGN-SYSTEM/BACKBONE.md` | YES (handoff #9) | 1 | MODERATE -- master narrative, useful context | NO |
| 10 | `DESIGN-SYSTEM/provenance/stage-5-combination-cd/STAGE-HEADER.md` | YES (CD CLAUDE.md #2) | 1 | YES -- CD planned explorations, inputs/outputs, constraints | NO |

### Tier 2: Second-Hop References (Hop 2)

| # | File | Reachable from handoff? | Hops | Contains critical CD knowledge? | Gap? |
|---|------|------------------------|------|-------------------------------|------|
| 11 | `knowledge-architecture/_ad-execution/AD-SOUL-TEMPLATE.html` | YES (handoff inline mention) | 2 | YES -- locked HTML template for CD base | NO |
| 12 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md` | YES (convention spec reference) | 2 | MODERATE -- sections 1-11 inherited into AD-CONVENTION-SPEC | NO |
| 13 | `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md` | YES (BACKBONE reference) | 2 | YES -- pattern selection guide, content-type-to-pattern mapping | NO |
| 14 | `DESIGN-SYSTEM/patterns/density-patterns.md` | YES (PATTERN-INDEX reference) | 2 | YES -- 8 validated density patterns with scores | NO |
| 15 | `DESIGN-SYSTEM/patterns/organizational-patterns.md` | YES (PATTERN-INDEX reference) | 2 | YES -- 6 OD patterns with scores and pairings | NO |
| 16 | `DESIGN-SYSTEM/patterns/combination-rules.md` | YES (STAGE-HEADER reference) | 2 | YES -- velocity/temperature/weight model for combinations | NO |
| 17 | `DESIGN-SYSTEM/anti-patterns/registry.md` | YES (convention spec reference) | 2 | YES -- what to avoid | NO |
| 18 | `DESIGN-SYSTEM/tokens/colors.md` | YES (convention spec reference) | 2 | YES -- locked color values | NO |
| 19 | `DESIGN-SYSTEM/tokens/geometry.md` | YES (convention spec reference) | 2 | YES -- locked geometry values | NO |
| 20 | `DESIGN-SYSTEM/tokens/spacing.md` | YES (convention spec reference) | 2 | YES -- locked spacing values | NO |
| 21 | `DESIGN-SYSTEM/tokens/typography.md` | YES (convention spec reference) | 2 | YES -- locked typography values | NO |
| 22 | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` | YES (AD CLAUDE.md reference) | 2 | MODERATE -- audit findings, quality gate record | NO |
| 23 | `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md` | YES (provenance CLAUDE.md) | 2 | MODERATE -- 94 EXT-* OD findings, CD may need for combination context | NO |
| 24 | `DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md` | YES (BACKBONE reference) | 2 | MODERATE -- tracks which research has been applied | NO |
| 25 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | YES (provenance CLAUDE.md) | 2 | YES -- 17 OD-F findings consumed by AD, inherited by CD | NO |
| 26 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | YES (BACKBONE reference) | 2 | YES -- 18 DD-F findings, DD-F-013 is CD's gate finding | NO |
| 27 | `DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md` | YES (BACKBONE reference) | 2 | MODERATE -- 21 COMP-F findings, soul pieces | NO |
| 28 | `DESIGN-SYSTEM/README.md` | YES (DESIGN-SYSTEM CLAUDE.md) | 2 | YES -- THE KORTAI DESIGN MIND, transferable reasoning | NO |
| 29 | `research/R5-COMBINATION-THEORY.md` | YES (duplicate of #7) | 1 | YES -- same as provenance copy | NO |

### Tier 3: Third-Hop and Further (Hop 3+)

| # | File | Reachable from handoff? | Hops | Contains critical CD knowledge? | Gap? |
|---|------|------------------------|------|-------------------------------|------|
| 30 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md` | YES (OD CLAUDE.md) | 3 | MODERATE -- OD cross-exploration synthesis | NO |
| 31 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | YES (OD CLAUDE.md) | 3 | LOW -- OD research filtering decisions | NO |
| 32 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` | YES (OD CLAUDE.md) | 3 | LOW -- historical, already consumed by AD | NO |
| 33 | `DESIGN-SYSTEM/components/OVERVIEW.md` | YES (DESIGN-SYSTEM CLAUDE.md) | 3 | MODERATE -- component specifications, velocity/temp/weight properties | NO |
| 34 | `DESIGN-SYSTEM/guides/migration-guide.md` | YES (DESIGN-SYSTEM CLAUDE.md) | 3 | LOW -- migration guide, post-CD | NO |
| 35 | `DESIGN-SYSTEM/QUICK-START.md` | YES (DESIGN-SYSTEM CLAUDE.md) | 3 | LOW -- quick reference | NO |
| 36 | `research/R1-DOCUMENTATION-PATTERNS.md` | YES (showcase CLAUDE.md) | 3 | LOW -- secondary research for CD | NO |
| 37 | `research/R2-CREATIVE-LAYOUTS.md` | YES (showcase CLAUDE.md) | 3 | LOW -- secondary research for CD | NO |
| 38 | `research/R3-DENSITY-DIMENSIONS.md` | YES (showcase CLAUDE.md) | 3 | MODERATE -- density research, contextual for CD | NO |
| 39 | `research/R4-AXIS-INNOVATIONS.md` | YES (showcase CLAUDE.md) | 3 | MODERATE -- axis research, secondary for CD | NO |
| 40 | `research/RESEARCH-SYNTHESIS.md` | YES (showcase CLAUDE.md) | 3 | MODERATE -- cross-research synthesis | NO |
| 41 | `checkpoints/RESEARCH-ACTIVE.md` | YES (showcase CLAUDE.md) | 3 | MODERATE -- tracking which research applied | NO |
| 42 | `checkpoints/DISCOVERIES-LOG.md` | YES (showcase CLAUDE.md) | 3 | MODERATE -- learnings from prior explorations | NO |
| 43 | `checkpoints/MASTER-STATE.md` | YES (checkpoints CLAUDE.md) | 3 | LOW -- positional state | NO |

### Tier 4: ORPHANED FROM CD's PERSPECTIVE (Exist but NOT Reachable)

These files exist in the repo and contain potentially critical knowledge, but a CD agent following the handoff + CLAUDE.md chain would NEVER be directed to read them.

| # | File | Reachable? | Hops | Contains critical CD knowledge? | GAP? |
|---|------|-----------|------|-------------------------------|------|
| 44 | `knowledge-architecture/_ad-execution/AD-RESEARCH-GATE.md` | ORPHANED | N/A | MODERATE -- R-4 evaluation decisions, how 192 findings were filtered | **YES** |
| 45 | `knowledge-architecture/_ad-execution/R-4-AD-EVALUATION.md` | ORPHANED | N/A | LOW -- R-4 evaluation detail | MINOR |
| 46 | `knowledge-architecture/_ad-execution/r2-ad-mapping.md` | ORPHANED | N/A | LOW -- R-2 to AD mapping | MINOR |
| 47 | `knowledge-architecture/_ad-execution/AD-BUILD-STATE.md` | ORPHANED | N/A | LOW -- AD build state tracking | NO |
| 48 | `knowledge-architecture/_ad-execution/findings-builder-{A-F}.md` | ORPHANED | N/A | LOW -- raw builder outputs, consumed into AD-outbound-findings | NO |
| 49 | `knowledge-architecture/_ad-execution/scribe-report-wave1{A,B,C}.md` | ORPHANED | N/A | LOW -- scribe reports, consumed into AD-SYNTHESIS | NO |
| 50 | `knowledge-architecture/_ad-execution/identity-checkpoint-cumulative.md` | ORPHANED | N/A | MODERATE -- identity delta tracking across AD waves | **MINOR** |
| 51 | `knowledge-architecture/_ad-execution/identity-delta-ad-wave1{A,B,C}.md` | ORPHANED | N/A | LOW -- per-wave identity deltas, consumed into v2 | NO |
| 52 | `knowledge-architecture/_ad-execution/research-package-ad-{001-006}.md` | ORPHANED | N/A | MODERATE -- per-exploration research packages with EXT-AXIS-* findings | **YES** |
| 53 | `knowledge-architecture/_ad-execution/visual-audit-{001-006}.md` | ORPHANED | N/A | LOW -- visual audit reports, consumed into AD-AUDIT-SYNTHESIS | NO |
| 54 | `knowledge-architecture/_ad-execution/structural-audit-report.md` | ORPHANED | N/A | LOW -- structural audit, consumed into AD-AUDIT-SYNTHESIS | NO |
| 55 | `knowledge-architecture/_ad-execution/fresh-eyes-report.md` | ORPHANED | N/A | LOW -- fresh-eyes findings, consumed | NO |
| 56 | `knowledge-architecture/_ad-execution/fix-report-fixer-{A-C}.md` | ORPHANED | N/A | LOW -- fix execution reports, consumed | NO |
| 57 | `knowledge-architecture/_ad-execution/fix-verification-report.md` | ORPHANED | N/A | LOW -- fix verification, consumed | NO |
| 58 | `knowledge-architecture/_ad-execution/post-fix-verification-report.md` | ORPHANED | N/A | LOW -- post-fix verification, consumed | NO |
| 59 | `knowledge-architecture/_ad-execution/convention-auditor-report.md` | ORPHANED | N/A | LOW -- convention audit, consumed | NO |
| 60 | `knowledge-architecture/_ad-execution/provenance-audit-report.md` | ORPHANED | N/A | LOW -- provenance audit, consumed | NO |
| 61 | `knowledge-architecture/_ad-execution/research-auditor-report.md` | ORPHANED | N/A | LOW -- research audit, consumed | NO |
| 62 | `knowledge-architecture/_ad-execution/weaver-audit-synthesis.md` | ORPHANED | N/A | MODERATE -- cross-audit synthesis from weaver | **MINOR** |
| 63 | `knowledge-architecture/_ad-execution/hygiene-*.md` (18 files) | ORPHANED | N/A | LOW -- per-exploration hygiene checks | NO |
| 64 | `knowledge-architecture/_ad-execution/FIX-MANIFEST.md` | ORPHANED | N/A | LOW -- fix tracking state | NO |
| 65 | `knowledge-architecture/_ad-skeleton-analysis/master-synthesis/MASTER-AD-EXECUTION-SPEC.md` | ORPHANED | N/A | LOW -- AD planning doc, historical (AD is complete) | NO |
| 66 | `knowledge-architecture/_ad-skeleton-analysis/master-synthesis/*.md` (10 files) | ORPHANED | N/A | LOW -- AD planning artifacts | NO |
| 67 | `knowledge-architecture/_ad-skeleton-analysis/gap-analysis/*.md` | ORPHANED | N/A | LOW -- AD gap analysis, historical | NO |
| 68 | `knowledge-architecture/_ad-skeleton-analysis/skeleton-dimensions/*.md` | ORPHANED | N/A | LOW -- AD skeleton analysis, historical | NO |
| 69 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.md` | ORPHANED | N/A | LOW -- superseded by v2 | NO |
| 70 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.1.md` | ORPHANED | N/A | LOW -- superseded by v2 | NO |
| 71 | `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` | ORPHANED | N/A | LOW -- OD audit results, 89 findings | NO |
| 72 | `knowledge-architecture/OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` | ORPHANED | N/A | **HIGH -- protocol evolution, team architecture lessons** | **YES** |
| 73 | `knowledge-architecture/OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md` | ORPHANED | N/A | **HIGH -- agent team architecture for execution** | **YES** |
| 74 | `knowledge-architecture/OD-EXECUTION-PROTOCOL.md` | ORPHANED | N/A | MODERATE -- execution protocol patterns | **YES** |
| 75 | `knowledge-architecture/OD-FIX-EXECUTION-PROMPT.md` | ORPHANED | N/A | MODERATE -- fix execution agent team prompt | **MINOR** |
| 76 | `knowledge-architecture/OD-GRANULAR-AUDIT-PROMPT.md` | ORPHANED | N/A | MODERATE -- audit agent team prompt | **MINOR** |
| 77 | `knowledge-architecture/OD-REENRICHMENT-SPECIFICATION.md` | ORPHANED | N/A | MODERATE -- re-enrichment specification | **MINOR** |
| 78 | `knowledge-architecture/WORKFLOW-METACOGNITION-ANALYSIS.md` | ORPHANED | N/A | **HIGH -- fundamental learnings about agent behavior** | **YES** |
| 79 | `knowledge-architecture/COMPREHENSIVE-AUDIT-SPECIFICATION.md` | ORPHANED | N/A | MODERATE -- comprehensive audit spec | **MINOR** |
| 80 | `knowledge-architecture/_comprehensive-audit/MASTER-AUDIT-REPORT.md` | ORPHANED | N/A | LOW -- comprehensive audit report | NO |
| 81 | `knowledge-architecture/_comprehensive-audit/WEAVER-SYNTHESIS.md` | ORPHANED | N/A | LOW -- comprehensive audit synthesis | NO |
| 82 | `knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md` | ORPHANED (from handoff; reachable from KA CLAUDE.md at hop 3+) | 3+ | MODERATE -- authority declarations | NO |
| 83 | `knowledge-architecture/KA-DECISIONS.md` | ORPHANED (from handoff; reachable from KA CLAUDE.md) | 3+ | MODERATE -- architectural decisions | NO |
| 84 | `knowledge-architecture/PIPELINE-BACKBONE.md` | ORPHANED (from handoff; reachable from KA CLAUDE.md) | 3+ | LOW -- older pipeline narrative (BACKBONE.md supersedes) | NO |
| 85 | `explorations/axis/_perceptual-research/MASTER-PERCEPTUAL-EXECUTION-PROMPT.md` | ORPHANED | N/A | **HIGH -- perceptual audit skill package** | **YES** |
| 86 | `explorations/axis/_perceptual-research/01-15 + AUXILIARY*.md` (17 files) | ORPHANED | N/A | MODERATE -- perceptual audit research and skill development | **MINOR** |
| 87 | `explorations/axis/_perceptual-audit/lock-sheet.md` | ORPHANED | N/A | MODERATE -- AD perceptual audit lock sheet | **MINOR** |
| 88 | `explorations/axis/_perceptual-audit/AD-001/ through AD-006/` | ORPHANED | N/A | MODERATE -- per-exploration perceptual audit results | **MINOR** |
| 89 | `explorations/axis/AD-001-z-pattern.html` through `AD-006-compound.html` | WEAKLY REACHABLE (AD-SYNTHESIS mentions them, no path) | 2 | YES -- validated HTML artifacts CD should study | **YES** |
| 90 | `explorations/organizational/OD-001-*.html` through `OD-006-*.html` | NOT REACHABLE from handoff | N/A | MODERATE -- OD validated artifacts for combination reference | **MINOR** |
| 91 | `explorations/density/DD-001-*.html` through `DD-006-*.html` | NOT REACHABLE from handoff | N/A | MODERATE -- DD validated artifacts | NO |
| 92 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` | NOT REACHABLE from handoff | 3+ | LOW -- OD audit synthesis, historical | NO |
| 93 | `knowledge-architecture/_workflow-metacognition/*.md` (9 files) | ORPHANED | N/A | MODERATE -- raw workflow analysis | NO |
| 94 | `knowledge-architecture/_od-audit-scratchpad/*.md` (22 files) | ORPHANED | N/A | LOW -- OD audit scratchpad files | NO |
| 95 | `knowledge-architecture/_od-reenrichment/*.md` | ORPHANED | N/A | LOW -- OD re-enrichment scratchpad | NO |

---

## 4. Critical Gaps Analysis

### GAP 1: AD HTML Exploration Artifacts (CRITICAL)
**Files:** `explorations/axis/AD-001-z-pattern.html` through `AD-006-compound.html`
**Problem:** The handoff references "6 AD explorations" but provides NO PATH to the actual HTML files. AD-SYNTHESIS says they produced ~467KB of HTML artifacts. A CD agent building COMBINATIONS of axis patterns needs to READ these validated artifacts, but would never find them.
**Impact:** CD agent would build combinations without seeing what they're combining.
**Fix:** Add explicit paths to the handoff's reading list or the stage-5 CLAUDE.md.

### GAP 2: Execution Protocol Knowledge (HIGH)
**Files:**
- `knowledge-architecture/OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md`
- `knowledge-architecture/OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md`
- `knowledge-architecture/OD-EXECUTION-PROTOCOL.md`
**Problem:** These contain hard-won lessons about HOW to execute multi-agent phases (team topology, wave execution, Playwright contention, file-writing emphasis). A CD agent team lead would repeat all mistakes from OD/AD.
**Impact:** CD execution would likely suffer the same failure modes AD/OD did.
**Fix:** Reference these from the stage-5 CLAUDE.md or create a CD-EXECUTION-PROTOCOL.md that synthesizes them.

### GAP 3: Perceptual Audit Skill Package (HIGH)
**Files:**
- `explorations/axis/_perceptual-research/MASTER-PERCEPTUAL-EXECUTION-PROMPT.md`
- `explorations/axis/_perceptual-research/01-15 *.md` (17 files)
- `explorations/axis/_perceptual-audit/lock-sheet.md`
**Problem:** The showcase/CLAUDE.md mandates "invoke the FULL Perceptual Depth Audit" but the handoff doesn't reference the actual skill package. A CD agent following only the handoff chain would not know WHERE the audit prompt is.
**Impact:** CD explorations might skip perceptual audit or implement it incorrectly.
**Fix:** Add perceptual audit skill reference to handoff or CD CLAUDE.md.

### GAP 4: Workflow Metacognition Analysis (HIGH)
**File:** `knowledge-architecture/WORKFLOW-METACOGNITION-ANALYSIS.md`
**Problem:** Contains THE most important architectural principle: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%." Also documents the Two-Instance pattern, Prophylactic Paradox, and complexity ratchet. None of this is reachable from the CD discovery path.
**Impact:** CD phase design would miss fundamental agent behavior insights.
**Fix:** Reference from CD planning materials or incorporate key principles into ACCUMULATED-IDENTITY-v2.

### GAP 5: EXT-AXIS-* Bespoke Research Details (MODERATE)
**Files:** `knowledge-architecture/_ad-execution/research-package-ad-{001-006}.md`
**Problem:** 33 EXT-AXIS-* findings are referenced by ID in AD-outbound-findings and AD-SYNTHESIS, but the ACTUAL research packages that define them are orphaned in _ad-execution/. If a CD agent needs the full detail of EXT-AXIS-Z-001 (e.g., to understand a Z-Pattern finding for combination work), they cannot find it.
**Impact:** CD agents would have finding IDs without full context.
**Fix:** EXT-RESEARCH-REGISTRY.md should be updated to include EXT-AXIS-* findings (currently only covers OD-stage EXT-* findings).

### GAP 6: OD Exploration Artifacts (MINOR)
**Files:** `explorations/organizational/OD-001-*.html` through `OD-006-*.html`
**Problem:** CD combines axis AND organizational patterns. The OD HTML explorations demonstrate the organizational patterns in practice. These are not reachable from the handoff.
**Impact:** CD agent misses concrete examples of OD patterns when designing combinations.
**Fix:** Reference OD exploration paths in the CD stage materials.

---

## 5. Reachability Summary

| Category | Count | Reachable? |
|----------|-------|-----------|
| Handoff direct references | 10 files | ALL exist and reachable (hop 0-1) |
| Second-hop references | 19 files | ALL exist and reachable (hop 2) |
| Third-hop+ references | 14 files | ALL exist, reachable through deep CLAUDE.md chain |
| Orphaned (exist but unreachable) | ~52 files | NOT reachable from handoff chain |

**Of the ~52 orphaned files:**
- 6 contain **CRITICAL/HIGH** CD knowledge (Gaps 1-4 above)
- ~12 contain **MODERATE** knowledge (useful but not blocking)
- ~34 contain **LOW** knowledge (historical, consumed into synthesized docs)

---

## 6. The CD Agent's Actual Reading Journey

If a fresh Claude instance is told "Execute the CD phase," here is the realistic path:

1. **Enters `stage-5-combination-cd/`** --> reads CLAUDE.md (auto)
2. **Reads HANDOFF-AD-TO-CD.md** (234 lines) -- gets the 28-finding summary, constraints, open questions
3. **Reads ACCUMULATED-IDENTITY-v2.md** (~700+ lines) -- gets full soul, rules, anti-physical identity
4. **Reads SOUL-DISCOVERIES.md** (~200 lines) -- gets 5 soul pieces with perceptual truths
5. **Reads AD-outbound-findings.md** (~800+ lines) -- gets all 28 findings in detail
6. **Reads AD-SYNTHESIS.md** (~600+ lines) -- gets cross-exploration synthesis
7. **Reads AD-CONVENTION-SPEC.md** (822 lines) -- gets convention spec to extend
8. **Reads R5-COMBINATION-THEORY.md** -- gets primary research (39 findings)
9. **Reads PIPELINE-MANIFEST.md** -- gets finding registry
10. **Reads BACKBONE.md** -- gets master narrative

**Total direct reading: ~4,000-5,000 lines across 10 documents.**

**What the agent will NOT read (but should):**
- The actual AD HTML explorations (no path given)
- Execution protocol documents (not referenced)
- Perceptual audit skill package (not referenced)
- Workflow metacognition insights (not referenced)
- EXT-AXIS-* full research packages (no path, only IDs)

---

## 7. Recommendations for Closing Gaps

| Priority | Action | Files to Update |
|----------|--------|----------------|
| **P0** | Add AD exploration file paths to handoff or CD CLAUDE.md | `HANDOFF-AD-TO-CD.md` or `stage-5-combination-cd/CLAUDE.md` |
| **P0** | Add perceptual audit skill reference to CD materials | `stage-5-combination-cd/CLAUDE.md` |
| **P1** | Create CD-EXECUTION-PROTOCOL.md synthesizing protocol v3 + team arch v4 | New file in `stage-5-combination-cd/` |
| **P1** | Update EXT-RESEARCH-REGISTRY.md to include EXT-AXIS-* findings | `provenance/EXT-RESEARCH-REGISTRY.md` |
| **P2** | Add OD exploration file paths for combination reference | `stage-5-combination-cd/CLAUDE.md` |
| **P2** | Incorporate metacognition key principles into ACCUMULATED-IDENTITY | `ACCUMULATED-IDENTITY-v2.md` |

---

*Discovery surface mapping complete. 2026-02-11.*
