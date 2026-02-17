# Middle-Tier Page: Complete File Reference Map

> Every file that should be referenced for the Middle-tier master execution prompt, organized by relevance tier.
> Generated 2026-02-15 from comprehensive 3-agent directory scan.

---

## TIER 1: MUST-LOAD (Builder agent reads these directly)

These files are consumed during the build. The execution prompt must ensure agents load them.

### Compositional Core — 6-Layer Ontology

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 1 | `design-system/compositional-core/identity/prohibitions.md` | 353 | 22 soul constraints (8 absolute, 12 conditional). Load FIRST — defines what NEVER to do. |
| 2 | `design-system/compositional-core/vocabulary/tokens.css` | 174 | 65 tokens: color palette, typography trinity, spacing scale. Load SECOND. |
| 3 | `design-system/compositional-core/grammar/mechanism-catalog.md` | 1,011 | 18 mechanisms across 5 categories + 11 compositional rules + border system. THE mechanism vocabulary. |
| 4 | `design-system/compositional-core/components/merged-components.css` | 1,195 | 31KB merged component CSS. Track 1 assembly source. |
| 5 | `design-system/compositional-core/case-studies/_INDEX.md` | ~50 | Index of 9 case studies. Read during divergence check only. |
| 6 | `design-system/compositional-core/guidelines/semantic-rules.md` | 286 | When to use what; appropriateness criteria. |
| 7 | `design-system/compositional-core/guidelines/usage-criteria.md` | 298 | Tier-specific deployment levels + responsive strategy. |

### Skills (Execution Pipelines)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 8 | `~/.claude/skills/tension-composition/SKILL.md` | ~1,582 | 6-phase pipeline (M1 applied, C3-C5 enrichments). THE build pipeline for Track 2. |
| 9 | `~/.claude/skills/perceptual-auditing/SKILL.md` | ~200 | 48 PA questions + 4 audit modes. Post-build validation. |

### Routing & Protocol

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 10 | `design-system/compositional-core/CLAUDE.md` | 680 | Phase-gated building protocol. Track 1 vs Track 2 routing. Anti-gravity rules. |
| 11 | `design-system/CLAUDE.md` | 715 | Root navigation + soul constraint enforcement. |

**Tier 1 total: 11 files, ~6,344 lines**

---

## TIER 2: MUST-REFERENCE (Execution prompt cites or summarizes these)

Builder doesn't read these directly, but the execution prompt incorporates their findings.

### Checklist & Validation

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 12 | `ephemeral/session-insights/18-middle-tier-checklist.md` | ~1,200 | 138-item checklist. THE validation instrument. Critical-10 items. |
| 13 | `ephemeral/session-insights/21-quick-check.md` | ~150 | 15-item gate evaluation (30-40 min). First-pass validation. |
| 14 | `ephemeral/session-insights/21-pa05-operationalization.md` | ~200 | 4 binary sub-criteria replacing "feels designed". |
| 15 | `ephemeral/session-insights/21-mechanism-hardening.md` | 361 | B4.4 (interaction), B4.5 (perceptibility floor), floor raise to 7. |
| 16 | `ephemeral/session-insights/21-missing-items-spec.md` | ~250 | A1.0, B2.5, C3.5 + 6 Tier-1 items. |
| 17 | `ephemeral/session-insights/21-section-b-reorder.md` | ~200 | Build workflow sequence for Section B. |

### Tier Model & Context

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 18 | `ephemeral/continuity-docs/HANDOFF.md` | 508 | Complete state transfer. Phase D results. Modification recs. |
| 19 | `ephemeral/doc-enrichment/03-ENTRY-POINT.md` | ~200 | Quick-start for new instances. |
| 20 | `ephemeral/doc-enrichment/02-tier-methodology.md` | ~300 | 4-tier model methodology (Floor/Middle/Ceiling/Flagship). |

### Comparison Baselines (Variant B)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 21 | `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html` | ~400 | Phase D winner (18/19, 4/5). THE comparison baseline. |
| 22 | `ephemeral/session-insights/20-variant-b-recount.md` | ~200 | Authoritative recount: 7 mechanisms, 5 categories. |

### Crown Jewel References

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 23 | `design-system/validated-explorations/density/DD-006-fractal.html` | ~800 | Fractal self-similarity (20+ refs). Ceiling-tier reference. |
| 24 | `design-system/validated-explorations/combination/CD-006-pilot-migration.html` | ~900 | Pilot migration (39/40). Flagship-tier reference. |

**Tier 2 total: 13 files, ~5,669 lines**

---

## TIER 3: SHOULD-REFERENCE (Informs prompt design, not directly cited)

These shaped the checklist, tier model, and modification recommendations.

### Grammar & Components (Extended)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 25 | `design-system/compositional-core/grammar/mechanism-combinations.md` | 334 | How to combine mechanisms. Interaction matrices. |
| 26 | `design-system/compositional-core/grammar/border-system.md` | 658 | Border language: weights, combinations, semantic rules. |
| 27 | `design-system/compositional-core/grammar/compositional-rules.md` | 527 | 11 grammatical rules for mechanism application. |
| 28 | `design-system/compositional-core/components/component-inventory.md` | 879 | 31 components with confidence levels and variant coverage. |
| 29 | `design-system/compositional-core/components/components-dd-od.css` | 555 | DD+OD variant component styles. |
| 30 | `design-system/compositional-core/components/components-cd-tt.css` | 666 | CD+tension-test variant component styles. |
| 31 | `design-system/compositional-core/guidelines/responsive-strategy.md` | 194 | Breakpoint strategy (768px). |

### Research Synthesis

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 32 | `design-system/research/RESEARCH-SYNTHESIS.md` | 432 | Cross-research unified framework (337 findings). |
| 33 | `design-system/research/R3-DENSITY-DIMENSIONS.md` | 553 | 51 density findings. Source of DD patterns. |
| 34 | `design-system/research/R5-COMBINATION-THEORY.md` | 784 | 39 combination findings. Source of CD patterns. |

### Pipeline Strategy

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 35 | `design-system/pipeline/03-MIGRATION-PIPELINE.md` | 1,697 | Track 1 vs Track 2 architecture. |
| 36 | `design-system/pipeline/07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` | 1,142 | Track 2 execution specification. |
| 37 | `design-system/pipeline/05-COMPLETE-ROADMAP.md` | 875 | Master timeline Phase C through I. |

### Specification Tokens

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 38 | `design-system/specification/tokens/colors.md` | 133 | Palette definitions with rationale. |
| 39 | `design-system/specification/tokens/typography.md` | 166 | Font trinity specifications. |
| 40 | `design-system/specification/tokens/spacing.md` | 155 | 4px base unit spacing scale. |
| 41 | `design-system/specification/tokens/geometry.md` | 163 | Border-radius = 0 specification. |

### Session Insights (Planning)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 42 | `ephemeral/session-insights/13-master-agenda.md` | ~800 | 58-item dependency-aware work plan. |
| 43 | `ephemeral/session-insights/14-master-execution-prompt.md` | ~600 | Self-contained prompt for skill enrichment. |
| 44 | `ephemeral/session-insights/17-conversation-clarifications.md` | ~400 | 8 clarifications (C1-C8) revealing documentation gaps. |

### Skill Enrichments

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 45 | `design-system/compositional-core/skill-enrichments/tension-composition-additions.md` | 473 | Modifications to tension-composition skill from Phase D. |
| 46 | `design-system/compositional-core/skill-enrichments/perceptual-auditing-additions.md` | 189 | Enhancements to PA skill. |

**Tier 3 total: 22 files, ~11,375 lines**

---

## TIER 4: CONTEXT-AVAILABLE (Deep reference if questions arise during build)

### Richness & Rigidity Research

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 47 | `ephemeral/richness-research/05-unified-synthesis.md` | ~300 | Richness research synthesis. |
| 48 | `ephemeral/rigidity-research/06-unified-synthesis.md` | ~300 | Rigidity research synthesis + 4-type taxonomy. |
| 49 | `ephemeral/rigidity-research/02-modification-analysis.md` | ~300 | M1-M9 modification effects. |
| 50 | `ephemeral/rigidity-mechanics/08-synthesis.md` | ~300 | Rigidity mechanics actionable recommendations. |

### Case Studies (Individual)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 51 | `design-system/compositional-core/case-studies/DD-006-fractal.md` | 398 | Fractal case study (crown jewel). |
| 52 | `design-system/compositional-core/case-studies/CD-006-pilot-migration.md` | 289 | Pilot migration case study (39/40). |
| 53 | `design-system/compositional-core/case-studies/OD-004-confidence.md` | 213 | Confidence hierarchy. |
| 54 | `design-system/compositional-core/case-studies/DD-003-islands.md` | 242 | Island layout pattern. |
| 55 | `design-system/compositional-core/case-studies/DD-004-layers.md` | 287 | Layered content. |
| 56 | `design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md` | 201 | Multi-axis transitions. |
| 57 | `design-system/compositional-core/case-studies/OD-006-creative.md` | 218 | Creative asymmetry. |
| 58 | `design-system/compositional-core/case-studies/OD-001-conversational.md` | 156 | Conversational tone. |
| 59 | `design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md` | 174 | Embedded reasoning. |
| 60 | `design-system/compositional-core/case-studies/README.md` | 541 | Anti-prescription format guide. |
| 61 | `design-system/compositional-core/case-studies/ANTI-PRESCRIPTION-TEMPLATE.md` | 471 | Meta-template for divergence analysis. |

### Checklist Audit Reports

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 62 | `ephemeral/session-insights/20-checklist-completeness-audit.md` | ~400 | 20 proposed items, 3 key gaps. |
| 63 | `ephemeral/session-insights/20-checklist-gaming-audit.md` | ~500 | 6/10 gaming resistance, 13 fixes. |
| 64 | `ephemeral/session-insights/20-checklist-traceability-audit.md` | ~400 | 95% coverage, 3 critical gaps. |
| 65 | `ephemeral/session-insights/20-checklist-measurement-audit.md` | ~400 | 91 binary (70.5%), 26 judgment (20.2%). |
| 66 | `ephemeral/session-insights/20-checklist-usability-audit.md` | ~500 | 5/10 practical rating, barriers. |

### Phase D Evaluation

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 67 | `ephemeral/phase-d-execution/FINAL-REPORT.md` | ~500 | Complete Phase D final report. |
| 68 | `ephemeral/phase-d-execution/digest/FINAL-DIGEST.md` | ~300 | Phase D findings digest. |
| 69 | `ephemeral/phase-d-execution/evaluation/cross-variant-comparison.md` | ~400 | All 5 variants compared. |
| 70 | `ephemeral/phase-d-execution/evaluation/programmatic-audit.md` | ~300 | Automated audit results. |

### Validation Layer

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 71 | `design-system/compositional-core/validation/anti-gravity-compliance.md` | 1,196 | Anti-gravity mechanism audit. |
| 72 | `design-system/compositional-core/validation/gap-check.md` | 901 | Coverage audit. |
| 73 | `design-system/compositional-core/validation/convergence-check.md` | 801 | Coherence validation. |

### Pipeline (Extended)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 74 | `design-system/pipeline/TENSION-PROTOCOL.md` | 1,940 | Deep tension-driven composition protocol. |
| 75 | `design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` | 1,747 | Library of compositional strategies. |
| 76 | `design-system/pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` | 984 | Phase D test procedures. |
| 77 | `design-system/pipeline/04-CONTENT-INGESTION.md` | 562 | Content ingestion taxonomy. |
| 78 | `design-system/pipeline/MASTER-CD-EXECUTION-PROMPT.md` | 930 | CD phase execution prompt (reference for format). |

### Research (Individual Streams)

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 79 | `design-system/research/R1-DOCUMENTATION-PATTERNS.md` | 584 | 28 documentation findings. |
| 80 | `design-system/research/R2-CREATIVE-LAYOUTS.md` | 810 | 27 creative layout findings. |
| 81 | `design-system/research/R4-AXIS-INNOVATIONS.md` | 990 | 192 axis findings. |

### Specification Patterns

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 82 | `design-system/specification/patterns/density-patterns.md` | 435 | Validated density rhythms. |
| 83 | `design-system/specification/patterns/organizational-patterns.md` | 504 | Organizational structures. |
| 84 | `design-system/specification/patterns/axis-patterns.md` | 667 | Attention topology. |
| 85 | `design-system/specification/patterns/combination-rules.md` | 189 | Cross-pattern combination rules. |

### Specification Philosophy

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 86 | `design-system/specification/BACKBONE.md` | 542 | Master narrative of 5-stage evolution. |
| 87 | `design-system/specification/README.md` | 2,516 | THE KORTAI DESIGN MIND (philosophical anchor). |

### Cross-Validation & Changelog

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 88 | `ephemeral/session-insights/21-cross-validation.md` | ~400 | 8/10 PASS. Fix notes for item count + table format. |
| 89 | `ephemeral/session-insights/21-checklist-changelog.md` | ~300 | Full change record. |
| 90 | `ephemeral/session-insights/21-variant-b-corrections.md` | ~150 | 3 files corrected. |

**Tier 4 total: 44 files, ~22,929 lines**

---

## TIER 5: ARCHIVAL (Historical, not needed for build)

These exist for provenance and audit trail but should NOT be loaded for the Middle-tier build.

### Phase D Builds (Other Variants)

| # | File | Purpose |
|---|------|---------|
| 91 | `ephemeral/phase-d-execution/builds/variant-a-skill-only.html` | Variant A baseline. |
| 92 | `ephemeral/phase-d-execution/builds/variant-c-anti-gravity.html` | Variant C. |
| 93 | `ephemeral/phase-d-execution/builds/variant-d-library-first.html` | Variant D. |
| 94 | `ephemeral/phase-d-execution/builds/track-1-assembly.html` | Track 1 variant. |
| 95 | `ephemeral/phase-d-execution/builds/page-[A-E].html` | Pages A-E (5 files). |

### Phase D Logs & Screenshots

| # | File | Purpose |
|---|------|---------|
| 96 | `ephemeral/phase-d-execution/logs/variant-[a-d]-log.md` | 5 build logs. |
| 97 | `ephemeral/phase-d-execution/screenshots/*.png` | 10 primary screenshots. |
| 98 | `ephemeral/phase-d-execution/evaluation/*.png` | 10 cold-look screenshots. |
| 99 | `ephemeral/phase-d-execution/explainer/*.png` | 2 review screenshots. |

### Phase D Evaluation (Extended)

| # | File | Purpose |
|---|------|---------|
| 100 | `ephemeral/phase-d-execution/evaluation/visual-audit-judge-[a-b].md` | Visual audits. |
| 101 | `ephemeral/phase-d-execution/evaluation/component-utilization.md` | Component usage. |
| 102 | `ephemeral/phase-d-execution/evaluation/gap-catalog.md` | Gap catalog. |
| 103 | `ephemeral/phase-d-execution/evaluation/integration-audit.md` | Integration audit. |
| 104 | `ephemeral/phase-d-execution/evaluation/anti-gravity-verification.md` | AG verification. |
| 105 | `ephemeral/phase-d-execution/digest/[others].md` | 6 digest files. |
| 106 | `ephemeral/phase-d-execution/explainer/[all].md` | 7 explainer files. |
| 107 | `ephemeral/phase-d-execution/content/[both].md` | 2 content specs. |
| 108 | `ephemeral/phase-d-execution/RANDOMIZATION-MAP.md` | Agent randomization. |

### Pre-Phase D Research

| # | File | Purpose |
|---|------|---------|
| 109 | `ephemeral/phase-d-success-research/[01-09].md` | 9 files. Protocol/variant/failure design. |

### Historical Research Directories (94 files total)

| # | Directory | Files | Purpose |
|---|-----------|-------|---------|
| 110 | `ephemeral/richness-research/[01-04].md` | 4 | Non-synthesis richness research. |
| 111 | `ephemeral/rigidity-research/[01,03-05].md` | 4 | Non-synthesis rigidity research. |
| 112 | `ephemeral/rigidity-mechanics/[01-07].md` | 7 | Rigidity cognitive mechanics. |
| 113 | `ephemeral/pipeline-metacognition/[01-05].md` | 5 | Pipeline metacognitive analysis. |
| 114 | `ephemeral/extraction-architecture/[01-06].md` | 6 | Extraction architecture design. |
| 115 | `ephemeral/extraction-epistemology/[01-09].md` | 9 | Extraction epistemology. |
| 116 | `ephemeral/claude-md-research/[01-10].md` + reviews | 20 | CLAUDE.md ingestion research. |
| 117 | `ephemeral/post-cd-research/[01-06].md` + SYNTHESIS | 7 | Post-CD analysis. |
| 118 | `ephemeral/doc-reflection/[01-06].md` | 6 | Meta-reflection on docs. |
| 119 | `ephemeral/readme-research/[01-07].md` | 7 | README research. |
| 120 | `ephemeral/true-extraction-inventory/[01-07].md` + screenshots | 45 | CSS/HTML forensics + screenshots. |
| 121 | `ephemeral/plan-audit/[all].md` | 12 | Execution plan audits. |

### Session Insights (Historical)

| # | File | Purpose |
|---|------|---------|
| 122 | `ephemeral/session-insights/00-LIVING-DOCUMENT.md` | Insight catalog. |
| 123 | `ephemeral/session-insights/[01-06,08-12].md` | 11 files. Early research. |
| 124 | `ephemeral/session-insights/15-prompt-validation.md` | Prompt validation. |
| 125 | `ephemeral/session-insights/16-final-enrichment-recommendations.md` | Enrichment recs. |
| 126 | `ephemeral/session-insights/18-clarification-mapping.md` | Clarification mapping. |
| 127 | `ephemeral/session-insights/18-cross-validation.md` | Clarification cross-val. |
| 128 | `ephemeral/session-insights/18-enrichment-summary.md` | Enrichment summary. |
| 129 | `ephemeral/session-insights/19-[all 11 files].md` | Staleness audits, source-of-truth, archival. |
| 130 | `ephemeral/session-insights/audit-[01-02].md` | Modification/staleness audits. |
| 131 | `ephemeral/session-insights/cross-ref-[01-04].md` | Cross-references. |
| 132 | `ephemeral/session-insights/plan-revision-[02-04].md` | Plan revisions. |

### Continuity (Historical)

| # | File | Purpose |
|---|------|---------|
| 133 | `ephemeral/continuity-docs/[01-08].md` | 8 docs. Narrative, worldview, adversarial. |
| 134 | `ephemeral/continuity-docs/DOC-UPDATES.md` | Update tracking. |
| 135 | `ephemeral/doc-enrichment/[01,04-07].md` | 5 docs. Applied updates, metacognitive, vocab. |

### Design System (Historical/Extended)

| # | File | Purpose |
|---|------|---------|
| 136 | `design-system/specification/provenance/[all stages]` | ~35 files. Full provenance chain. |
| 137 | `design-system/specification/anti-patterns/registry.md` | Anti-pattern catalog. |
| 138 | `design-system/specification/components/OVERVIEW.md` | Component spec overview. |
| 139 | `design-system/specification/guides/migration-guide.md` | Migration guide. |
| 140 | `design-system/pipeline/[01,02,06,OPEN-QUESTIONS,others].md` | ~8 files. Extended pipeline docs. |
| 141 | `design-system/compositional-core/process/[all 4].md` | Process docs (lens, construction, provenance, assumptions). |
| 142 | `design-system/compositional-core/case-studies/*-visual.md` | 3 visual annotation files. |
| 143 | `design-system/validated-explorations/[other HTMLs]` | ~28 other exploration HTML files. |

**Tier 5 total: ~200+ files (archival, not needed for build)**

---

## SUMMARY

| Tier | Files | Lines | Role |
|------|-------|-------|------|
| **1: MUST-LOAD** | 11 | ~6,344 | Builder agent reads directly |
| **2: MUST-REFERENCE** | 13 | ~5,669 | Execution prompt cites/summarizes |
| **3: SHOULD-REFERENCE** | 22 | ~11,375 | Informs prompt design |
| **4: CONTEXT-AVAILABLE** | 44 | ~22,929 | Deep reference if needed |
| **5: ARCHIVAL** | ~200+ | — | Historical, not for build |
| **TOTAL** | **~290** | **~46,000+** | |

### Critical Path (Minimum Viable Reference Set)

If the execution prompt can only reference a limited set, these 15 files cover 90% of what matters:

1. `compositional-core/identity/prohibitions.md` — Soul constraints
2. `compositional-core/vocabulary/tokens.css` — Token vocabulary
3. `compositional-core/grammar/mechanism-catalog.md` — Mechanism vocabulary
4. `compositional-core/components/merged-components.css` — Component implementations
5. `compositional-core/guidelines/semantic-rules.md` — Decision framework
6. `compositional-core/CLAUDE.md` — Building protocol
7. `~/.claude/skills/tension-composition/SKILL.md` — Build pipeline
8. `~/.claude/skills/perceptual-auditing/SKILL.md` — Validation pipeline
9. `ephemeral/session-insights/18-middle-tier-checklist.md` — 138-item checklist
10. `ephemeral/session-insights/21-quick-check.md` — 15-item gate
11. `ephemeral/continuity-docs/HANDOFF.md` — State context
12. `ephemeral/doc-enrichment/02-tier-methodology.md` — Tier model
13. `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html` — Comparison baseline
14. `design-system/validated-explorations/density/DD-006-fractal.html` — Crown jewel reference
15. `design-system/validated-explorations/combination/CD-006-pilot-migration.html` — Crown jewel reference

### Known Issues to Fix Before Build

1. **Quick Check item 14** — References "Variant B = 2 categories" (should be 5)
2. **Checklist summary stats** — Section B count says 46, actual is 53
