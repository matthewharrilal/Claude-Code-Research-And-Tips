# 13 -- Target Information Topology
## The Blueprint for a Structurally Sound Provenance Chain

**Generated:** 2026-02-08
**Analyst:** Research and Design Agent (Claude Opus 4.6)
**Purpose:** Define the exact target architecture -- every file, every finding flow, every dark matter disposition -- for the clean provenance chain
**Input Reports:** 10-dark-matter-census.md, 07-perfect-state-gap-audit.md, 03-pipeline-infrastructure-map.md, plus PIPELINE-MANIFEST, BACKBONE, HANDOFF-DD-TO-OD, OD-CHECKPOINT, DD-outbound-findings, ACCUMULATED-IDENTITY-v1

---

## TABLE OF CONTENTS

1. [Section 1: The Clean Chain Directory Structure](#section-1-the-clean-chain-directory-structure)
2. [Section 2: Per-Stage File Manifest](#section-2-per-stage-file-manifest)
3. [Section 3: Infrastructure File Updates](#section-3-infrastructure-file-updates)
4. [Section 4: Dark Matter Disposition Map](#section-4-dark-matter-disposition-map)
5. [Section 5: The Finding Registry](#section-5-the-finding-registry)
6. [Section 6: Information Flow Diagram](#section-6-information-flow-diagram)

---

# SECTION 1: THE CLEAN CHAIN DIRECTORY STRUCTURE

## 1.1 Target Directory Tree

The following is the complete directory tree for `DESIGN-SYSTEM/` and its provenance chain when all information is properly routed. New files (not yet existing) are marked with `[NEW]`. Updated files (exist but need OD updates) are marked with `[UPDATE]`. Files that are already complete are marked with `[OK]`.

```
DESIGN-SYSTEM/
├── README.md                                    [OK]     The KortAI Design Mind
├── BACKBONE.md                                  [UPDATE] Master narrative (Section 4 stale)
├── QUICK-START.md                               [OK]     Quick reference
│
├── tokens/
│   ├── colors.md                                [OK]     Locked color tokens
│   ├── geometry.md                              [OK]     Locked geometry tokens
│   ├── spacing.md                               [OK]     Locked spacing tokens
│   └── typography.md                            [OK]     Locked typography tokens
│
├── patterns/
│   ├── PATTERN-INDEX.md                         [UPDATE] Master pattern index (OD patterns stale)
│   ├── density-patterns.md                      [OK]     6 validated density patterns
│   ├── organizational-patterns.md               [NEW]    6 validated organizational patterns
│   └── combination-rules.md                     [OK]     Pattern combination rules
│
├── components/
│   └── OVERVIEW.md                              [UPDATE] Add component character names ref
│
├── anti-patterns/
│   └── registry.md                              [UPDATE] Add OD-discovered anti-patterns
│
├── guides/
│   └── migration-guide.md                       [OK]     Migration procedures
│
└── provenance/
    ├── CLAUDE.md                                [UPDATE] Navigation (Stage 3 status stale)
    ├── PIPELINE-MANIFEST.md                     [UPDATE] Master registry (OD sections stale)
    ├── SOUL-DISCOVERIES.md                      [UPDATE] Add OD determination
    ├── RESEARCH-ACTIVE.md                       [UPDATE] Finalize OD R-1 application
    ├── EXT-RESEARCH-REGISTRY.md                 [NEW]    Master registry for all EXT-* findings
    │
    ├── original-research/
    │   ├── CLAUDE.md                            [OK]
    │   ├── R1-DOCUMENTATION-PATTERNS.md         [OK]     28 findings
    │   ├── R2-CREATIVE-LAYOUTS.md               [OK]     27 findings
    │   ├── R3-DENSITY-DIMENSIONS.md             [OK]     51 findings
    │   ├── R4-AXIS-INNOVATIONS.md               [OK]     192 findings
    │   ├── R5-COMBINATION-THEORY.md             [OK]     39 findings
    │   └── RESEARCH-SYNTHESIS.md                [OK]     Cross-research insights
    │
    ├── stage-1-components/
    │   ├── CLAUDE.md                            [OK]
    │   ├── STAGE-HEADER.md                      [OK]
    │   ├── component-findings.md                [OK]     COMP-F-001 to COMP-F-021
    │   └── FOUNDATION-REMEDIATION-SYNTHESIS.md  [OK]
    │
    ├── stage-2-density-dd/
    │   ├── CLAUDE.md                            [OK]
    │   ├── STAGE-HEADER.md                      [OK]
    │   ├── DD-outbound-findings.md              [OK]     DD-F-001 to DD-F-018
    │   ├── HANDOFF-DD-TO-OD.md                  [OK]     Gate file for OD
    │   ├── DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md   [OK]     Audit record
    │   └── DD-REAUDIT-CHECKPOINT.md             [OK]
    │
    ├── stage-3-organization-od/
    │   ├── CLAUDE.md                            [UPDATE] Complete 5-section navigation
    │   ├── STAGE-HEADER.md                      [UPDATE] Full rewrite: COMPLETE status
    │   ├── OD-RESEARCH-GATE.md                  [UPDATE] Add post-build verification addendum
    │   ├── OD-outbound-findings.md              [NEW]    OD-F-001 to OD-F-012+
    │   ├── OD-SYNTHESIS.md                      [NEW]    Cross-OD analysis
    │   ├── OD-AUDIT-SYNTHESIS.md                [NEW]    89 findings distilled
    │   └── HANDOFF-OD-TO-AD.md                  [NEW]    Gate file for AD
    │
    ├── stage-4-axis-ad/
    │   ├── CLAUDE.md                            [OK]     Placeholder (expected)
    │   └── STAGE-HEADER.md                      [OK]     Placeholder (expected)
    │
    └── stage-5-combination-cd/
        ├── CLAUDE.md                            [OK]     Placeholder (expected)
        └── STAGE-HEADER.md                      [OK]     Placeholder (expected)
```

## 1.2 File-by-File Specification

### NEW FILES

#### `patterns/organizational-patterns.md` [NEW]
- **What:** Formal definition of all 6 validated organizational patterns
- **Contains:** Pattern name, provenance (research + finding IDs), validation evidence (OD exploration + score), usage guide, density pairing, constraints, CSS implementation notes, anti-patterns to avoid
- **Flows IN from:** OD-CHECKPOINT.md (per-OD data), OD inline headers (implementation details), HANDOFF-DD-TO-OD.md (density pairing assignments), OD-GRANULAR-AUDIT-RESULTS.md (quality data)
- **Flows OUT to:** PATTERN-INDEX.md (entry linking), Migration (pattern application), AD (consumption), BACKBONE.md (narrative reference)
- **Approximate size:** 400-500 lines

#### `provenance/EXT-RESEARCH-REGISTRY.md` [NEW]
- **What:** Master registry for ALL external research findings (EXT-*) generated during OD
- **Contains:** Every EXT-CONV, EXT-TASK, EXT-CONF, EXT-SPAT, EXT-CREATIVE, EXT-DENSITY finding with: ID, source, soul test result, application status, consuming OD exploration
- **Flows IN from:** OD-004-EXTERNAL-RESEARCH.md, OD-005-EXTERNAL-RESEARCH.md, OD-006-CREATIVE-RESEARCH-FEED.md, OD-001 inline header, identity-brief.md, research-refinement.md
- **Flows OUT to:** PIPELINE-MANIFEST.md (referenced in Section B), OD-outbound-findings.md (EXT citations), HANDOFF-OD-TO-AD.md (research transfer)
- **Approximate size:** 350-450 lines

#### `provenance/stage-3-organization-od/OD-outbound-findings.md` [NEW]
- **What:** Formal declaration of all OD-F findings (the equivalent of DD-outbound-findings.md)
- **Contains:** OD-F-001 through OD-F-012+ with ID, Finding text, Source exploration, Score basis, Target stage(s), Chain Impact narrative. Meta-pattern section for OD-F-005. Forward-looking findings for AD/CD. Anti-pattern findings. Consumption matrix. Stage 2 consumption verification table.
- **Flows IN from:** OD-CHECKPOINT.md lines 140-157 (OD-F definitions), OD-006-creative.html inline header (OD-F-005-008), cross-od-consistency.md (consistency evidence), OD-GRANULAR-AUDIT-RESULTS.md (validation data)
- **Flows OUT to:** HANDOFF-OD-TO-AD.md (mandatory consumption), PIPELINE-MANIFEST.md Section B (finding registration), BACKBONE.md Section 4 (narrative), AD stage (chain citation), CD stage (chain citation), Migration (final consumption)
- **Approximate size:** 350-500 lines
- **Note:** Must also formalize the 4 informal insights from OD-002/003/004/005 as OD-F-009 through OD-F-012 (or similar)

#### `provenance/stage-3-organization-od/OD-SYNTHESIS.md` [NEW]
- **What:** Cross-OD analysis covering all 6 explorations and their relationships
- **Contains:** Cross-OD pattern comparison, shared insights, divergent approaches, 3-quality-dialect analysis (Polished/Functional/Editorial), cumulative identity evolution from OD-001 through OD-006, OD-F-005 meta-insight analysis, paths not taken, key decisions (5-10 with What/Why/Impact), negative space record, emergence reasoning chains, scoring rubric definition
- **Flows IN from:** OD-CHECKPOINT.md (per-OD snapshots), OD-GRANULAR-AUDIT-RESULTS.md (3-dialect analysis, systemic issues), cross-od-consistency.md (cross-OD comparison), fresh-eyes.md (adversarial perspective), OD inline headers (per-exploration summaries)
- **Flows OUT to:** HANDOFF-OD-TO-AD.md (synthesis reference), BACKBONE.md Section 4 (narrative source), patterns/organizational-patterns.md (pattern relationship context)
- **Approximate size:** 500-700 lines

#### `provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` [NEW]
- **What:** Formal audit synthesis distilling the 89-finding adversarial audit into a provenance-chain document (equivalent to DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md)
- **Contains:** Executive summary (89 findings, 16 fixes, 2 false positives, 3 quality dialects, 0 soul violations), methodology summary (17-agent, 4-phase, ~45 min), per-OD soul compliance results, systemic issues (2px border epidemic), fix execution summary (16/16 + 2 false positives + 1 deferred), finding disposition for all 89 findings (fixed/accepted/false-positive/deferred/note), audit verification results (187 programmatic tests, 12 visual screenshots), process findings for future stages, references to scratchpad evidence files
- **Flows IN from:** OD-GRANULAR-AUDIT-RESULTS.md (primary source, 620 lines), FIX-STATE.md (fix execution record), fix-verification-programmatic.md (187 test results), fix-report-fixer-c.md (false positive evidence), contrast-accessibility.md (WCAG data), structural-integrity.md (semantic HTML/ARIA data), systematic-audit-001 through 006 (per-OD raw data), visual-audit-001 through 006 (per-OD visual data), fresh-eyes.md (adversarial perspective), cross-od-consistency.md (consistency proof)
- **Flows OUT to:** OD-outbound-findings.md (validation data), HANDOFF-OD-TO-AD.md (audit methodology transfer), OD-SYNTHESIS.md (quality data)
- **Approximate size:** 400-600 lines

#### `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` [NEW]
- **What:** Gate document for AD (the equivalent of HANDOFF-DD-TO-OD.md)
- **Contains:** Purpose + acknowledgment protocol, organizational pattern table with scores/descriptions/AD usage instructions, OD outbound findings mandatory consumption table, soul piece transfer (5 visual + OD-F-005 determination), quality bar comparison (OD achieved vs AD must match), primary research for AD (R-4 as primary, 192 findings), OD iteration lessons, AD responsibilities checklist (files to create/update, verifications to pass), OD-to-axis pairing table, acknowledgment checklist, external research transfer (EXT-* findings and methodology), process methodology transfer (17-agent audit, 7-agent fix)
- **Flows IN from:** OD-outbound-findings.md (all OD-F findings), OD-SYNTHESIS.md (cross-OD insights), OD-AUDIT-SYNTHESIS.md (quality data), OD-CHECKPOINT.md (per-OD data), HANDOFF-DD-TO-OD.md (template structure), ACCUMULATED-IDENTITY-v1.md (identity snapshot), EXT-RESEARCH-REGISTRY.md (external research), patterns/organizational-patterns.md (validated patterns)
- **Flows OUT to:** AD stage (mandatory first-read), BACKBONE.md (narrative reference), PIPELINE-MANIFEST.md (handoff registered)
- **Approximate size:** 400-550 lines

### UPDATED FILES

Detailed in Section 3 (Infrastructure File Updates).

---

# SECTION 2: PER-STAGE FILE MANIFEST

## 2.1 Original Research (Stage 0)

**Status:** COMPLETE -- No changes needed.

| File | Contents | Status |
|------|----------|--------|
| R1-DOCUMENTATION-PATTERNS.md | 28 findings (R1-001 to R1-028) | OK |
| R2-CREATIVE-LAYOUTS.md | 27 findings (R2-001 to R2-027) | OK |
| R3-DENSITY-DIMENSIONS.md | 51 findings (R3-001 to R3-051) | OK |
| R4-AXIS-INNOVATIONS.md | 192 findings (R4-001 to R4-192) | OK |
| R5-COMBINATION-THEORY.md | 39 findings (R5-001 to R5-039) | OK |
| RESEARCH-SYNTHESIS.md | Cross-research insights, 5 principles | OK |

**Dark matter feeds:** None needed. Original research is complete.

## 2.2 Stage 1: Component Foundation

**Status:** COMPLETE -- No changes needed.

| File | Contents | Status |
|------|----------|--------|
| STAGE-HEADER.md | Complete narrative | OK |
| CLAUDE.md | Complete navigation | OK |
| component-findings.md | COMP-F-001 to COMP-F-021 | OK |
| FOUNDATION-REMEDIATION-SYNTHESIS.md | 54% to 92% remediation record | OK |

**Dark matter feeds:** None needed. Stage 1 chain is fully connected.

## 2.3 Stage 2: Density Exploration (DD)

**Status:** COMPLETE -- No changes needed.

| File | Contents | Status |
|------|----------|--------|
| STAGE-HEADER.md | Complete narrative | OK |
| CLAUDE.md | Complete navigation | OK |
| DD-outbound-findings.md | DD-F-001 to DD-F-018 | OK |
| HANDOFF-DD-TO-OD.md | Complete gate file | OK |
| DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | Full audit record | OK |
| DD-REAUDIT-CHECKPOINT.md | Audit progress | OK |

**Dark matter feeds:** None needed. Stage 2 chain is fully connected.

**Note:** DD-outbound-findings.md YAML frontmatter `successor` field (line 6) points to `provenance/stage-3-organization-od/OD-outbound-findings.md` which does not yet exist. This forward pointer will resolve automatically when OD-outbound-findings.md is created (GAP-013).

## 2.4 Stage 3: Organization (OD) -- THE TARGET

**Status:** PARTIALLY COMPLETE -- 4 new files + 3 updates required.

### File Manifest (Target State)

| # | File | Contents | Status | Dependency Order |
|---|------|----------|--------|------------------|
| 1 | `CLAUDE.md` | Complete 5-section navigation | UPDATE | Write LAST (needs all files) |
| 2 | `STAGE-HEADER.md` | Complete narrative: consumed/produced, key decisions, quality | UPDATE | Write after OD-outbound-findings + OD-SYNTHESIS |
| 3 | `OD-RESEARCH-GATE.md` | Pre-build mapping + post-build verification addendum | UPDATE | Write early (add verification column) |
| 4 | `OD-outbound-findings.md` | OD-F-001 to OD-F-012+ formal declarations | NEW | Write FIRST (everything depends on this) |
| 5 | `OD-SYNTHESIS.md` | Cross-OD analysis, 3-dialect, identity evolution | NEW | Write SECOND (after outbound-findings) |
| 6 | `OD-AUDIT-SYNTHESIS.md` | 89-finding audit distillation | NEW | Write THIRD (after synthesis, before handoff) |
| 7 | `HANDOFF-OD-TO-AD.md` | Complete gate file for AD | NEW | Write FOURTH (after all above) |

### Dependency Order (Critical Path)

```
                    OD-RESEARCH-GATE.md (addendum)
                           |
                           v
              OD-outbound-findings.md  <---  (must be written FIRST)
                    |            |
                    v            v
            OD-SYNTHESIS.md   OD-AUDIT-SYNTHESIS.md
                    |            |
                    v            v
              HANDOFF-OD-TO-AD.md  <---  (must be written FOURTH)
                    |
                    v
                STAGE-HEADER.md  (rewrite)
                    |
                    v
                  CLAUDE.md  (update LAST)
```

### What Each File Contains (Detailed)

#### File 4: OD-outbound-findings.md (Write FIRST)

**Sections required:**
1. YAML frontmatter (`pipeline_stage: 3`, predecessor: DD-outbound-findings, successor: AD-outbound-findings)
2. Inline threading header (Tier A)
3. How To Use This File
4. Section A: OD-F Finding Declarations
   - OD-F-001 through OD-F-004 (from OD-001)
   - OD-F-005 through OD-F-008 (from OD-006)
   - OD-F-009 through OD-F-012 (NEW -- formalized from OD-002/003/004/005 key insights)
     - OD-F-009: "Narrative Arc as Natural CRESCENDO" (from OD-002)
     - OD-F-010: "Task Structure as Natural ISLANDS" (from OD-003)
     - OD-F-011: "Confidence Levels as Natural GEOLOGICAL" (from OD-004)
     - OD-F-012: "Hub-Spoke as Natural WAVE" (from OD-005)
   - Each with: ID, Finding text, Source exploration, Score basis, Target stage(s), Chain Impact
5. Section B: The Meta-Pattern -- OD-F-005 Elevation
   - "Organization IS Density" elevated as THE meta-finding (equivalent to DD-F-006)
   - Full reasoning chain: observation, hypothesis, evidence, conclusion, implications
   - Relationship to DD-F-006 (FRACTAL): OD-F-005 extends DD-F-006; both are meta-patterns
6. Section C: Forward-Looking Findings for AD/CD
   - Which findings target AD specifically
   - Which findings target CD specifically
   - "How AD Should Apply" instructions per finding
7. Section D: Anti-Pattern Findings
   - 2px border epidemic (from audit: 108 CSS declarations)
   - Uneven enrichment depth (3-dialect issue)
   - Anti-patterns avoided per exploration (aggregated from inline headers)
8. Section E: Stage 2 Consumption Verification
   - DD-F-001 through DD-F-018 consumption status (APPLIED/CONSUMED/FORWARDED)
   - Per-finding evidence: which OD consumed it, where
9. Section F: Consumption Matrix (for AD/CD/Migration)
   - Grid: OD-F findings x consuming stages

**Finding IDs referenced:** OD-F-001 through OD-F-012, DD-F-001 through DD-F-018
**Dark matter feeds:** OD-CHECKPOINT.md (lines 140-157), OD-006 inline header, ACCUMULATED-IDENTITY-v1.md, OD-GRANULAR-AUDIT-RESULTS.md, cross-od-consistency.md

#### File 5: OD-SYNTHESIS.md (Write SECOND)

**Sections required:**
1. Executive Summary
2. Per-OD Summaries (6 explorations, each with: pattern, density pairing, score, key insight, research applied)
3. Cross-OD Pattern Comparison
   - What they share (soul compliance, fractal compliance, shared tokens)
   - Where they diverge (creative techniques, external research depth, density pairing)
4. The 3 Quality Dialects
   - Polished (OD-001, OD-002): enriched with creative techniques
   - Functional (OD-003, OD-004, OD-005): technically sound, less enriched
   - Editorial (OD-006): full creative synthesis
   - Why the gap exists, what it means for pattern selection
5. Cumulative Identity Evolution
   - How ACCUMULATED-IDENTITY changed from OD-001 through OD-006
   - v0 -> v1 transition documentation
6. OD-F-005 Meta-Insight Analysis
   - "Organization IS Density" discovery narrative
   - Evidence from each OD exploration
   - Implications for AD and CD
7. Key Decisions (5-10 with What/Why/Impact)
   - Why OD-001 was enriched; why OD-003/004/005 were not
   - Why OD-006 is the crown jewel
   - Why WAVE replaced "Custom" for OD-005
   - Why BOOKENDS is secondary for OD-003
   - Why 8 findings from only 2 of 6 ODs (and now formalized from all 6)
8. Negative Space Record
   - 4 unmapped R-1 findings with reasons
   - Rejected density pairings
   - Why no cognitive soul pieces (or: OD-F-005 as candidate)
   - 72 audit findings that were not fixed (disposition)
9. Emergence Reasoning Chains
   - OD-F-005, OD-F-006, OD-F-007, OD-F-008 full chains
10. Scoring Analysis
    - Scoring rubric definition (Innovation, Utility, Soul, Execution)
    - Per-OD dimension breakdowns (complete for all 6)
    - Score trajectories (if any changed post-audit)
11. OD-006 Cross-Reference Verification
    - Does OD-006 actually demonstrate all 5 prior patterns? Evidence.

**Finding IDs referenced:** OD-F-001 through OD-F-012, DD-F-001 through DD-F-018
**Dark matter feeds:** OD-CHECKPOINT.md, OD-GRANULAR-AUDIT-RESULTS.md, cross-od-consistency.md, fresh-eyes.md, ACCUMULATED-IDENTITY-v1.md, OD inline headers, HANDOFF-DD-TO-OD.md (for comparing recommended vs actual pairings)

#### File 6: OD-AUDIT-SYNTHESIS.md (Write THIRD)

**Sections required:**
1. Executive Summary (89 findings, 16 fixes, 2 false positives, 0 soul violations)
2. Methodology (17-agent adversarial audit, 4 phases, ~45 min wall time)
3. Soul Compliance Matrix (OD-001 through OD-006, all 5 soul pieces, 3,479 elements)
4. Systemic Issues
   - 2px border epidemic (108 CSS declarations, 1000+ computed instances)
   - Classification and categorization of the 89 findings by type
5. Fix Execution Summary
   - 16 fixes applied (what, where, evidence)
   - 2 false positives (Fix #1 Essence font: `document.fonts.ready` timing; Fix #7 dead zone: scroll-animation artifact)
   - 1 deferred (Fix #17: subjective header meta layout)
6. Finding Disposition Table
   - All 89 findings with disposition: FIXED / ACCEPTED / FALSE-POSITIVE / DEFERRED / NOTE
   - This closes the gap between 89 total and 17 actioned
7. Accessibility Data Summary
   - WCAG contrast findings (CA-001 through CA-005 from contrast-accessibility.md)
   - Semantic HTML findings (from structural-integrity.md)
   - ARIA and focus management findings
8. Process Findings for Future Stages
   - 17-agent audit methodology (formalized as process finding)
   - 7-agent fix execution methodology (formalized as process finding)
   - Fresh-eyes constraint value (produced 2 findings builder-context agents missed)
   - Per-file ownership pattern (zero contention)
9. Evidence References
   - Links to scratchpad files (systematic-audit-001-006, visual-audit-001-006, etc.)
   - Note: scratchpad is evidence, not provenance

**Finding IDs referenced:** OD-F-001 through OD-F-012, F-E-001 through F-E-005, CA-001 through CA-005
**Dark matter feeds:** OD-GRANULAR-AUDIT-RESULTS.md, _od-audit-scratchpad/* (all 29 files as raw data), OD-CHECKPOINT.md (soul compliance status), FIX-STATE.md

#### File 7: HANDOFF-OD-TO-AD.md (Write FOURTH)

**Sections required (modeled on HANDOFF-DD-TO-OD.md structure):**
1. YAML frontmatter (`pipeline_stage: 3->4`, predecessor: OD-outbound-findings, successor: stage-4 STAGE-HEADER)
2. Inline threading header (Tier A)
3. Purpose Statement + 3-Step Acknowledgment Protocol
4. Section A: Organizational Pattern Table
   - 6 patterns with: name, density pairing, score, description, AD usage instructions
5. Section B: OD Outbound Findings -- Mandatory Consumption
   - OD-F-001 through OD-F-012 consumption requirements
   - Which AD must cite, which AD may adapt, which pass through to CD
6. Section C: Soul Piece Transfer
   - 5 visual soul pieces (unchanged)
   - OD-F-005 soul candidacy determination (with reasoning)
   - DD-F-011 prediction resolution
7. Section D: Quality Bar
   - OD achieved: per-OD scores, soul compliance 100%, 0 violations
   - AD must match: threshold definition
   - Cumulative quality bar from Stage 1 + 2 + 3
8. Section E: Primary Research for AD
   - R-4 Axis Innovations (192 findings) as primary
   - R-1 and R-3 findings forwarded as inherited constraints
   - EXT-* methodology: how to commission external research agents
9. Section F: OD Iteration Lessons
   - What worked (parallel builders, identity accumulation, 8-agent external research)
   - What to improve (even enrichment across all explorations)
   - Process innovations (17-agent audit, per-file ownership fix execution)
10. Section G: AD Responsibilities Checklist
    - Files to CREATE: AD-outbound-findings.md, AD-RESEARCH-GATE.md, AD-SYNTHESIS.md, HANDOFF-AD-TO-CD.md, axis-patterns.md
    - Files to UPDATE: PIPELINE-MANIFEST.md, BACKBONE.md, PATTERN-INDEX.md, SOUL-DISCOVERIES.md, RESEARCH-ACTIVE.md
    - Verifications to pass: visual audit, soul compliance, research application rate >= 80%
11. Section H: OD-to-Axis Pairing Table
    - Which organizational pattern suggests which axis approach
    - Recommended density + org + axis triads
12. Section I: Acknowledgment Checklist
    - Formal checkboxes AD agent must confirm

**Finding IDs referenced:** OD-F-001 through OD-F-012, DD-F-001 through DD-F-018, COMP-F-001 through COMP-F-021
**Dark matter feeds:** OD-CHECKPOINT.md, OD-outbound-findings.md (will exist by then), OD-SYNTHESIS.md, OD-AUDIT-SYNTHESIS.md, HANDOFF-DD-TO-OD.md (template), ACCUMULATED-IDENTITY-v1.md, EXT-RESEARCH-REGISTRY.md

## 2.5 Infrastructure Files (Cross-Stage)

| File | What Needs to Happen | Dependency |
|------|---------------------|------------|
| PIPELINE-MANIFEST.md | Add OD-F Section B, update Section C soul, add Section D org patterns, add OD example Section E, update Section F counts | After OD-outbound-findings.md |
| BACKBONE.md | Rewrite Section 4 (complete narrative), extend Section 8 (generated research), extend Section 9 (soul matrix), update Section 10 (causal chain) | After OD-SYNTHESIS.md |
| PATTERN-INDEX.md | Update 6 OD patterns from PENDING to VALIDATED with scores and links | After organizational-patterns.md |
| SOUL-DISCOVERIES.md | Add OD determination (new piece or "none discovered" with justification) | After OD-SYNTHESIS.md |
| RESEARCH-ACTIVE.md | Finalize all R-1 finding application statuses for OD | After OD-RESEARCH-GATE addendum |
| EXT-RESEARCH-REGISTRY.md | Create master EXT-* registry | After reviewing all OD inline headers |
| anti-patterns/registry.md | Add "2px border epidemic" + any OD-validated anti-patterns | After OD-AUDIT-SYNTHESIS.md |
| components/OVERVIEW.md | Add reference to COMPONENTS-REGISTRY.md for character names | After COMPONENTS-REGISTRY disposition |
| provenance/CLAUDE.md | Update Stage 3 status to COMPLETE | LAST (after everything) |

---

# SECTION 3: INFRASTRUCTURE FILE UPDATES

## 3.1 PIPELINE-MANIFEST.md Updates

### Section B: Generated Findings -- ADD OD-F entries

**Current state:** "Stage 3 (OD-F-###) -- Organization -- PENDING. TBD -- OD explorations not yet complete."

**Target state:**
```markdown
### Stage 3 (OD-F-###) -- Organization

| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| OD-F-001 | Conversational Width Variation | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-002 | Fractal Nesting via Follow-ups | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-003 | Q&A as Natural PULSE Generator | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-004 | Chapter Dividers as Breathing Zones | Technique | AD, CD, Migration | ACTIVE |
| OD-F-005 | Organization IS Density | META | ALL, AD, CD, Migration | ACTIVE |
| OD-F-006 | Meta-Documentation as Purest Density Test | Process | Methodology | ACTIVE |
| OD-F-007 | Mode-Transition Breathing | Constraint | AD, CD | ACTIVE |
| OD-F-008 | Compound Creative Techniques | Technique | AD, CD, Migration | ACTIVE |
| OD-F-009 | Narrative Arc as Natural CRESCENDO | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-010 | Task Structure as Natural ISLANDS | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-011 | Confidence Levels as Natural GEOLOGICAL | Pattern | AD, CD, Migration | ACTIVE |
| OD-F-012 | Hub-Spoke as Natural WAVE | Pattern | AD, CD, Migration | ACTIVE |

**Total OD-F-###:** 12 findings
```

### Section B: DD-F Consumption Status Update

DD-F findings currently show "PENDING" for OD consumption. Update to:

| ID | Current Status | New Status | Evidence |
|----|---------------|------------|----------|
| DD-F-001 (PULSE) | PENDING | CONSUMED by OD-001 | OD-001 uses PULSE as primary density |
| DD-F-002 (CRESCENDO) | PENDING | CONSUMED by OD-002, OD-004 | OD-002 uses CRESCENDO; OD-004 secondary |
| DD-F-003 (ISLANDS) | PENDING | CONSUMED by OD-003, OD-005 | OD-003 primary ISLANDS; OD-005 secondary |
| DD-F-004 (GEOLOGICAL) | PENDING | CONSUMED by OD-004 | OD-004 uses GEOLOGICAL as primary |
| DD-F-005 (TIDAL/RIVERS) | PENDING | CONSUMED by OD-001 | OD-001 uses TIDAL as secondary |
| DD-F-006 (FRACTAL) | PENDING | CONSUMED by ALL ODs | Mandatory per HANDOFF; all 6 verified |
| DD-F-007-009 (Process) | ACTIVE | ACTIVE | Process findings remain active |
| DD-F-010-014 (Forward) | PENDING | PARTIALLY CONSUMED | OD consumed applicable; remainder forwards to AD |
| DD-F-015-018 (Anti-patterns) | ACTIVE | ACTIVE | Verified in OD audit; remain constraints |

### Section C: Soul Pieces -- ADD OD determination

**Current state:** `? | TBD | OD-F-??? | Cognitive | May emerge from OD | R1-* (organization)`

**Target state:** Either:
- (a) `6 | Organization IS Density | OD-F-005 | Cognitive | Emerged from OD-006 | R1-*, DD-F-006` -- if OD-F-005 is elevated to soul piece
- (b) `-- | No cognitive soul piece from OD | OD-F-005 considered but determined to be a META-FINDING not a SOUL PIECE because [justification] | -- | --` -- if formally declined

**Recommendation:** This is a design decision for the human to make. The analysis should present both options with reasoning.

### Section D: Pattern Provenance -- ADD Organizational Patterns

**Current state:** "Organizational Patterns -- PENDING. TBD -- OD explorations not yet complete."

**Target state:**
```markdown
### Organizational Patterns

| Pattern | Research | Generated Finding | Validated By | Score | Density Pairing |
|---------|----------|-------------------|--------------|-------|-----------------|
| CONVERSATIONAL | R1-001, R1-002, R1-003 | OD-F-001, OD-F-003 | OD-001 | ~35/40 | PULSE + TIDAL |
| NARRATIVE ARC | R1-007, R1-016, R1-017 | OD-F-009 | OD-002 | ~33/40 | CRESCENDO |
| TASK-BASED | R1-008, R1-016, EXT-TASK-* | OD-F-010 | OD-003 | ~33/40 | ISLANDS + BOOKENDS |
| CONFIDENCE | R1-017, R1-018, EXT-CONF-* | OD-F-011 | OD-004 | INCLUDE | GEOLOGICAL + CRESCENDO |
| SPATIAL/MAP | R1-018, R1-019, EXT-SPAT-* | OD-F-012 | OD-005 | INCLUDE | WAVE + ISLANDS |
| CREATIVE SYNTHESIS | R1-001-028 (20 of 28), EXT-CREATIVE-* | OD-F-005, OD-F-006, OD-F-007, OD-F-008 | OD-006 | INCLUDE (crown) | ALL (FRACTAL primary) |
```

### Section E: Cross-Reference Index -- ADD OD example

Add an OD chain trace example parallel to the R3-023 DD trace:

```markdown
### "Where was R1-001 used?"

R1-001 (Density Rhythm Principle):
- **DD (all):** APPLIED, PULSE/CRESCENDO patterns
- **OD-001:** Applied as conversational PULSE rhythm
- **OD-002 through OD-006:** Applied in all explorations (per OD-CHECKPOINT)
- **OD-F-003:** Generated finding about Q&A as natural PULSE
- **HANDOFF-OD-TO-AD:** Forwarded as accumulated constraint
```

### Section F: Finding Lifecycle States -- UPDATE counts

| State | Old Count | New Count |
|-------|-----------|-----------|
| PENDING | ~260 | ~248 (12 OD findings now ACTIVE, some R-1 now APPLIED) |
| APPLIED | ~75 | ~87 (R-1 findings applied in OD) |
| ACTIVE | ~25 | ~37 (12 OD-F findings added) |

## 3.2 BACKBONE.md Updates

### Section 4: STAGE 3 -- FULL REWRITE

Replace the entire Section 4 (lines 221-254) with a complete narrative modeled on Section 3 (DD):

**New Section 4 structure:**
1. **The Story** -- Past tense. What OD explored, what it discovered, the meta-insight.
2. **What It Consumed** -- Table of inputs (DD-F findings, HANDOFF, R-1 research, soul pieces, external research)
3. **What It Produced** -- Table of outputs (6 organizational patterns, OD-F-001 to OD-F-012, HANDOFF-OD-TO-AD, quality bar, 3-dialect analysis, process innovations)
4. **Key Decisions** -- 5 decisions:
   1. Organization IS Density -- OD-F-005 as meta-finding
   2. External research enrichment -- 8 parallel agents for OD-001
   3. Crown jewel strategy -- OD-006 as synthesis exploration
   4. 12 formal findings -- all 6 explorations contribute
   5. 17-agent adversarial audit -- methodology established for future stages

### Section 8: Generated Research Flow -- UPDATE

Change `OD-F-### | TBD` to `OD-F-### | 12 | AD, CD, Migration`

### Section 9: Soul Pieces Cumulative Matrix -- EXTEND

Add rows for OD-001 through OD-006:

```
| # | Soul Piece      | ... DD-006 | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|---|-----------------|------------|--------|--------|--------|--------|--------|--------|
| 1 | Sharp Edges     | ...        | PASS   | PASS   | PASS   | PASS   | PASS   | PASS   |
| 2 | Archivist Serif | ...        | PASS   | PASS   | PASS   | PASS   | PASS   | PASS   |
| 3 | Family DNA      | ...        | PASS   | PASS   | PASS   | PASS   | PASS   | PASS   |
| 4 | No Shadows      | ...        | PASS   | PASS   | PASS   | PASS   | PASS   | PASS   |
| 5 | Squares Signal  | ...        | PASS   | N/A    | PASS   | N/A    | N/A    | PASS   |
```

Source: OD-GRANULAR-AUDIT-RESULTS.md confirmed 0 soul violations across 3,479 elements.

### Section 10: The Causal Chain -- UPDATE

Change `OD organizational explorations (in progress)` to:
```
OD organizational explorations (6 patterns, 12 findings, 100% soul compliance)
```

## 3.3 SOUL-DISCOVERIES.md Updates

**Add an OD section after the 5 existing soul pieces:**

```markdown
## OD STAGE DETERMINATION

### DD-F-011 Prediction: "Cognitive soul pieces may emerge from OD"

**Resolution:** [HUMAN DECISION NEEDED]

**Candidate:** OD-F-005 "Organization IS Density" -- the discovery that organizational
patterns do not merely CREATE density patterns; they ARE density. Same phenomenon,
two perspectives.

**Evidence for Soul Piece #6:**
- Transcends individual explorations (demonstrated across all 6 ODs)
- Changes HOW you see organization, not just what you do
- Parallel structure to DD-F-006 (both are meta-patterns that reframe relationships)
- Satisfies the "perceptual truth" criterion: once seen, cannot be unseen

**Evidence against:**
- May be a META-FINDING rather than a SOUL PIECE (DD-F-006 was a meta-finding, not a soul piece)
- The 5 existing soul pieces are all VISUAL; OD-F-005 is COGNITIVE
- Adding it would change the soul constraint surface for AD/CD

### OD Soul Compliance Verification

All 6 OD explorations passed 100% soul compliance:
- 0 border-radius violations across 3,479 DOM elements
- 0 box-shadow violations
- All serif/sans-serif usage correct
- All callout structure correct
- Verified by 17-agent adversarial audit
```

## 3.4 anti-patterns/registry.md Updates

**Add OD-discovered anti-patterns:**

1. **"2px Border Epidemic"** (NEW)
   - Description: 108 CSS declarations using 2px borders across 6 OD explorations; Rule 5 says "1px borders signal uncertainty" and "commit to it" (3px+). 2px occupies the ambiguous middle ground.
   - Evidence: OD audit finding (108 CSS declarations, 1000+ computed instances)
   - Prevention: Use only 1px (for explicit subtle lines), 3px, or 4px. Never 2px.
   - Discovery: OD granular audit, F-E-001 from fresh-eyes agent

2. **"Uneven Enrichment Depth"** (NEW, if determined to be anti-pattern)
   - Description: OD-001 and OD-006 received extensive creative enrichment (scroll witnesses, solid offsets, editorial drops) while OD-003/004/005 received basic functional builds. This creates 3 quality dialects within a single stage.
   - Evidence: OD audit's 3-dialect classification
   - Prevention: Apply enrichment evenly across all explorations, or document the intentional gradient with rationale.
   - Discovery: OD granular audit, fresh-eyes observation

3. **Update existing DD anti-patterns with OD verification results:**
   - DD-F-015 (traffic-light): Verified in OD audit -- [status per OD]
   - DD-F-016 (inconsistent borders): CONFIRMED systemic in OD (the 2px epidemic)
   - DD-F-017 (uniform density): Verified -- [status per OD]
   - DD-F-018 (fighting the pattern): Verified -- [status per OD]

## 3.5 PATTERN-INDEX.md Updates

**Update all 6 OD patterns from PENDING to VALIDATED:**

```markdown
### Organizational Patterns -- VALIDATED

| Pattern | Status | Score | Density Pairing | Provenance |
|---------|--------|-------|-----------------|------------|
| CONVERSATIONAL | VALIDATED | ~35/40 | PULSE + TIDAL | OD-001, OD-F-001/003 |
| NARRATIVE ARC | VALIDATED | ~33/40 | CRESCENDO | OD-002, OD-F-009 |
| TASK-BASED | VALIDATED | ~33/40 | ISLANDS + BOOKENDS | OD-003, OD-F-010 |
| CONFIDENCE | VALIDATED | INCLUDE | GEOLOGICAL + CRESCENDO | OD-004, OD-F-011 |
| SPATIAL/MAP | VALIDATED | INCLUDE | WAVE + ISLANDS | OD-005, OD-F-012 |
| CREATIVE SYNTHESIS | VALIDATED | INCLUDE (crown) | ALL (FRACTAL primary) | OD-006, OD-F-005/006/007/008 |
```

Add link to `organizational-patterns.md` for full definitions.
Update Usage Flowchart to include OD pattern selection step.

## 3.6 OD-RESEARCH-GATE.md Addendum

**Add a post-build verification section after the existing pre-build mapping:**

```markdown
## POST-BUILD VERIFICATION (Added [Date])

### R-1 Application Summary

| Finding | Planned For | Actually Applied In | Evidence | Status |
|---------|------------|---------------------|----------|--------|
| R1-001 | OD-001 | OD-001, OD-002, OD-003, OD-004, OD-005, OD-006 | All explorations apply density rhythm | APPLIED |
| R1-002 | OD-001 | OD-001, OD-006 | Retention whitespace | APPLIED |
| ... | ... | ... | ... | ... |

**Summary:** [X] of 28 R-1 findings APPLIED (target was >= 80%)
**Rate:** [X]% (vs 86% planned)
**Delta:** [Explanation of any differences between planned and actual]
```

Source: 6 OD exploration inline headers ("Applied Research" sections), OD-CHECKPOINT per-OD R-1 listings

## 3.7 provenance/CLAUDE.md Update

**Change Section 3 table entry:**

From: `stage-3-organization-od/ | IN PROGRESS`
To: `stage-3-organization-od/ | COMPLETE (7 files: 3 existing + 4 new)`

**Update Section 5 chain walkthrough:**

Change Stage 3 entry from "PENDING (OD not started)" to actual OD application data:
```
**Stage 3 (OD):**
- Location: provenance/stage-3-organization-od/OD-outbound-findings.md
- Constraint: DD-F-006 is MANDATORY for all OD explorations
- Applied in: All 6 OD explorations verified (0 soul violations, 3,479 elements)
- OD-F-005 extends DD-F-006: organization IS density (fractal applies at org level too)
- Status: APPLIED, VERIFIED
```

---

# SECTION 4: DARK MATTER DISPOSITION MAP

For each of the 51 dark matter files identified in Report 10, the disposition is one of:
- **ABSORB**: Extract findings/data into the formal chain (specify target)
- **CONSOLIDATE**: Merge content with an existing formal doc
- **ARCHIVE**: Move to archive directory with provenance link
- **KEEP-IN-PLACE**: Serves a different purpose; stays where it is
- **DELETE**: Truly redundant

## 4.1 checkpoints/ Dark Matter (10 files)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 2 | COMPONENT-AUDIT-COMP-001-011.md | 755 | **KEEP-IN-PLACE** | Reference from components/OVERVIEW.md | Contains unique pre-remediation baseline (54% actual vs 86% claimed). Historical record. Not needed in provenance chain directly, but should be discoverable via reference. |
| 3 | COMPONENT-AUDIT-FOUNDATION.md | 669 | **KEEP-IN-PLACE** | N/A | Audit lookup table organized by dimension. Redundant with RESEARCH-ACTIVE.md in a different format. Useful for reference but not chain-critical. |
| 4 | COMPONENTS-REGISTRY.md | 629 | **ABSORB** (partial) | components/OVERVIEW.md gets reference link; organizational-patterns.md gets pattern-component pairings | Contains unique component identity data (character names, soul scores). Character names should be referenced from OVERVIEW.md. Component-pattern pairings needed for organizational-patterns.md. |
| 6 | DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | 658 | **KEEP-IN-PLACE** | Already mirrored in provenance | Operational copy; provenance copy is authoritative. |
| 7 | DISCOVERIES-LOG.md | 844 | **ABSORB** (partial) | OD-SYNTHESIS.md, OD-outbound-findings.md | Contains scoring history and curation decisions. OD scores and decisions should be extracted into OD-SYNTHESIS. Finding data should flow to outbound-findings. |
| 8 | FOUNDATION-REMEDIATION-SYNTHESIS.md | 238 | **KEEP-IN-PLACE** | Already mirrored in provenance | Operational copy; provenance copy is authoritative. |
| 10 | OD-CHECKPOINT.md | 162 | **ABSORB** | OD-outbound-findings.md, OD-SYNTHESIS.md, STAGE-HEADER.md | PRIMARY SOURCE for OD data. Lines 140-157 (OD-F findings) go to outbound-findings. Per-OD snapshots go to synthesis. Identity version data goes to STAGE-HEADER. After absorption, this file becomes operational history. |
| 11 | PERCEPTUAL-AUDIT-LOG.md | 476 | **KEEP-IN-PLACE** | Reference from OD-AUDIT-SYNTHESIS.md | Unique sub-agent methodology record. Historical evidence, not chain-critical. |
| 12 | PERCEPTUAL-DEEPENING-SUMMARY.md | 249 | **KEEP-IN-PLACE** | N/A | Alternate scoring scale (/70 vs /40). Historical record. |
| 14 | RESEARCH-ACTIVE.md | 737 | **KEEP-IN-PLACE** | Sync to provenance/RESEARCH-ACTIVE.md | Operational copy; sync protocol applies. |
| 16 | RETROACTIVE-AUDIT-DD-001-006.md | 928 | **ABSORB** (reference) | Reference from DD STAGE-HEADER or DD-REAUDIT-PERCEPTUAL-SYNTHESIS | Contains unique finding-to-DD applicability matrix. Too granular for provenance chain directly, but should be referenced as evidence. |
| 18 | SOUL-DISCOVERIES.md | 266 | **KEEP-IN-PLACE** | Already mirrored in provenance | Operational copy; provenance copy is authoritative. |
| 19 | VISUAL-AUDIT-COMP-001-011.md | 320 | **KEEP-IN-PLACE** | Reference from OD-AUDIT-SYNTHESIS.md | Code-level soul token verification. Historical evidence. |
| 20 | VISUAL-AUDIT-DD-001-006.md | 430 | **KEEP-IN-PLACE** | Reference from DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | Granular per-agent scores. Historical evidence. |

## 4.2 dependency-trace/ Dark Matter (13 files)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 22 | 01-reachability-report.md | 264 | **KEEP-IN-PLACE** | Reference from PHASE-1B-MEGA-DEBRIEF | 76% T1 reachability proof. Structural evidence. |
| 23-25 | 02-threading-data/*.md | ~1695 | **KEEP-IN-PLACE** | N/A | Raw threading graph data. Embedded in inline headers. Historical evidence. |
| 26 | 03-relationship-map.md | 331 | **KEEP-IN-PLACE** | N/A | File relationship graph data. Historical evidence. |
| 27 | 04-cross-directory-analysis.md | 247 | **KEEP-IN-PLACE** | N/A | Structural analysis. Historical evidence. |
| 29 | 06-threading-summary.md | 192 | **KEEP-IN-PLACE** | N/A | Statistics summary. Historical evidence. |
| 31 | 08-OBSERVATIONS-LOG.md | 342 | **KEEP-IN-PLACE** | N/A | Structural observations. Historical evidence. |
| 32 | 09-INTEGRITY-REPORT.md | 206 | **KEEP-IN-PLACE** | Reference from PHASE-1B-MEGA-DEBRIEF | Verification results. Should be discoverable. |
| 36 | DD-SOURCE-OF-TRUTH-EXTRACTION.md | 674 | **ABSORB** (reference) | Reference from tokens/*.md, anti-patterns/registry.md | Contains 4 CRITICAL token divergences. These divergences should be documented as notes in the relevant token files AND as anti-pattern evidence. The file itself stays in place as detailed evidence. |
| 37 | DD-TYPOGRAPHY-VISUAL-AUDIT.md | 244 | **KEEP-IN-PLACE** | Reference from tokens/typography.md | Ground-truth rendered values. Historical evidence. |
| 38 | PHASE-2A-CLASSIFICATION.md | 708 | **KEEP-IN-PLACE** | N/A | Master file classification. Historical record of 910-file inventory. |
| 39 | TRACE-SUMMARY.md | 238 | **KEEP-IN-PLACE** | N/A | Summary of all trace findings. Historical evidence. |

## 4.3 knowledge-architecture/ Top-Level Dark Matter (11 files)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 87 | ACCUMULATED-IDENTITY-v1.md | 539 | **KEEP-IN-PLACE** | Reference from HANDOFF-OD-TO-AD.md, OD STAGE-HEADER | CRITICAL operational document. The agent onboarding document. Should be referenced from the handoff as "for identity context, see this file." Does not belong in provenance chain directly (it is a compiled snapshot, not a chain artifact), but must be discoverable. |
| 89 | KA-DECISIONS.md | 382 | **KEEP-IN-PLACE** | Reference from BACKBONE.md | Tier classification framework. Meta-documentation about the architecture. Not chain-critical but architecturally important. |
| 92 | OD-004-EXTERNAL-RESEARCH.md | 680 | **ABSORB** | EXT-RESEARCH-REGISTRY.md | Contains 24 external findings (EXT-CONF-001-012, EXT-TASK-001-012). All finding IDs must be registered in the new EXT-RESEARCH-REGISTRY. Original file stays in place as detailed source; registry contains the formal entries. |
| 93 | OD-005-EXTERNAL-RESEARCH.md | 1725 | **ABSORB** | EXT-RESEARCH-REGISTRY.md | Contains 12 EXT-SPAT-* findings. Same treatment as OD-004. Largest dark matter file. |
| 94 | OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md | 536 | **ABSORB** (partial) | OD-AUDIT-SYNTHESIS.md (process findings section) | Protocol evolution (v1->v2->v3) and cost-benefit analysis are process findings. Extract methodology insights into OD-AUDIT-SYNTHESIS process findings section. Original stays in place as detailed record. |
| 95 | OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md | 4411 | **KEEP-IN-PLACE** | Reference from OD-AUDIT-SYNTHESIS.md | Primarily a process/execution document. Contains agent coordination research. Too operational for provenance chain. Should be referenced as "for agent team methodology, see this file." |
| 99 | OD-GRANULAR-AUDIT-RESULTS.md | 620 | **ABSORB** | OD-AUDIT-SYNTHESIS.md (primary source) | THE authoritative OD audit document. Its key data (89 findings, severity distribution, 3 dialects, systemic issues) must be distilled into OD-AUDIT-SYNTHESIS.md in the provenance directory. Original stays in place as detailed evidence. |
| 100 | OD-RETROSPECTIVE-AND-PROTOCOL-v2.md | 589 | **ABSORB** (partial) | OD-AUDIT-SYNTHESIS.md (process findings section) | First team retrospective. Process insights (parallel builder validation, weaver role proof) should be extracted as process findings. |
| 101 | PHASE-1B-MEGA-DEBRIEF.md | 2632 | **KEEP-IN-PLACE** | Reference from BACKBONE.md | Structural integrity baseline. Multiple files cite its conclusions. Too large and too historical for provenance chain inclusion. Should be formally referenced from BACKBONE.md as "structural proof: see PHASE-1B-MEGA-DEBRIEF." |
| 106 | PLAN-REVISION-TRACKER.md | 2289 | **KEEP-IN-PLACE** | N/A | Plan cross-reference (56 revisions). Operational history. Not chain-critical. |
| 108 | WORKFLOW-METACOGNITION-ANALYSIS.md | 878 | **KEEP-IN-PLACE** | N/A | Meta-analysis of workflow. Process research, not design research. Valuable for future orchestration but not part of the design provenance chain. |

## 4.4 _execution-journal/ Dark Matter (4 files)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 109 | builder-log.md | 148 | **KEEP-IN-PLACE** | N/A | OD-001 build data. Operational record. |
| 111 | decisions.md | 36 | **ABSORB** (partial) | OD-SYNTHESIS.md (key decisions section) | DEC-001 and DEC-002 rationale should be incorporated into OD-SYNTHESIS key decisions. Small but contains unique reasoning. |
| 112 | lead-log.md | 129 | **KEEP-IN-PLACE** | N/A | Session recovery data. Operational record. |
| 113 | weaver-log.md | 259 | **KEEP-IN-PLACE** | Reference from OD-AUDIT-SYNTHESIS.md | Threading verification evidence. Most detailed record of how threading was executed. Historical evidence. |

## 4.5 _od-audit-scratchpad/ Dark Matter (15 files)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 115 | comparative-reference.md | 313 | **ABSORB** (partial) | OD-SYNTHESIS.md | DD-to-OD inheritance verification, drift detection. Cross-stage comparison data should inform OD-SYNTHESIS cross-OD analysis. |
| 116 | content-authenticity.md | 306 | **KEEP-IN-PLACE** | Reference from OD-AUDIT-SYNTHESIS.md | Content quality data. Evidence file. |
| 117 | contrast-accessibility.md | 361 | **ABSORB** | OD-AUDIT-SYNTHESIS.md (accessibility section) | CA-001 through CA-005 WCAG contrast failures. Unique accessibility data that must be summarized in audit synthesis. |
| 118 | cross-od-consistency.md | 607 | **ABSORB** (partial) | OD-SYNTHESIS.md, OD-AUDIT-SYNTHESIS.md | Token diff (12/12 PASS), squint test results, contradiction resolution. Key consistency proof data for synthesis. |
| 121 | fix-report-fixer-c.md | 257 | **ABSORB** (partial) | OD-AUDIT-SYNTHESIS.md (false positive section) | FALSE POSITIVE evidence for Fix #1 and #7. The `document.fonts.ready` finding is unique and must be in the audit synthesis. |
| 126 | fresh-eyes.md | 324 | **ABSORB** | OD-AUDIT-SYNTHESIS.md, OD-outbound-findings.md | F-E-001 through F-E-005. The 108 thin-border discovery, 3 quality dialects classification. Key findings that informed the audit results. |
| 127 | identity-brief.md | 522 | **KEEP-IN-PLACE** | Reference from HANDOFF-OD-TO-AD.md | Complete identity brief for audit team. Parallel to ACCUMULATED-IDENTITY. Operational document for agent onboarding. |
| 128 | research-refinement.md | 395 | **ABSORB** | EXT-RESEARCH-REGISTRY.md | 55 EXT-* soul test results, 7 spirit violations, 7 raw directives. Per-citation soul test data must be registered. |
| 129 | structural-integrity.md | 403 | **ABSORB** (partial) | OD-AUDIT-SYNTHESIS.md (accessibility section) | Semantic HTML, ARIA, focus management findings. Summarize in audit synthesis. |
| 130-135 | systematic-audit-001-006 | ~2607 | **KEEP-IN-PLACE** | Reference from OD-AUDIT-SYNTHESIS.md | Per-OD programmatic DOM audit data. Raw evidence files. Too granular for provenance chain; referenced as evidence. |
| 136-141 | visual-audit-001-006 | ~1825 | **KEEP-IN-PLACE** | Reference from OD-AUDIT-SYNTHESIS.md | Per-OD visual audit data. Raw evidence files. Summarized in OD-GRANULAR-AUDIT-RESULTS. |

## 4.6 _provenance-gap-analysis/ Dark Matter (7+ files)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 143-149 | Reports 01-07 | ~3875 | **KEEP-IN-PLACE** | N/A | These are meta-research about the provenance system itself. They document the problem being solved. They are the analytical basis for THIS document (Report 13). They should remain as the analytical record of the gap analysis process. Not part of the design provenance chain. |
| -- | Reports 10-13 | ~varies | **KEEP-IN-PLACE** | N/A | Same disposition. These are the analysis that drives the fix, not part of the fixed chain. |

## 4.7 _workflow-metacognition/ Dark Matter (8 files)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 151-159 | All 8 analysis files | ~4240 | **KEEP-IN-PLACE** | N/A | Entirely unique process research about the WORKFLOW, not about the DESIGN. Contains valuable orchestration insights (binary rules, 2.6:1 meta-to-output ratio, 7 paradoxes) but these are about HOW the system was built, not WHAT was built. Not part of the design provenance chain. Could inform a separate "process provenance" system if desired. |

## 4.8 explorations/ Dark Matter (1 file)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 85 | OD-006-CREATIVE-RESEARCH-FEED.md | 975 | **ABSORB** | EXT-RESEARCH-REGISTRY.md | Contains EXT-CREATIVE-001 through EXT-CREATIVE-012 with soul integration matrix. All finding IDs must be registered in EXT-RESEARCH-REGISTRY. Original file stays in place as detailed source. Must also be referenced from OD-outbound-findings.md. |

## 4.9 FINDINGS-INDEX.md Dark Matter (1 file)

| # | File | Lines | Disposition | Target | Rationale |
|---|------|-------|-------------|--------|-----------|
| 86 | FINDINGS-INDEX.md | 516 | **CONSOLIDATE** | Merge function into PIPELINE-MANIFEST.md | The PIPELINE-MANIFEST.md already serves as the master finding registry. FINDINGS-INDEX provides a different cross-cutting view. After PIPELINE-MANIFEST is updated with OD-F entries, assess whether FINDINGS-INDEX provides unique value. If so, KEEP-IN-PLACE as a secondary index. If not, mark as SUPERSEDED. |

## 4.10 Disposition Summary

| Disposition | Count | Total Lines | Description |
|-------------|-------|-------------|-------------|
| **ABSORB** | 13 | ~8,200 | Extract key data into formal chain files |
| **CONSOLIDATE** | 1 | ~516 | Merge function into existing file |
| **KEEP-IN-PLACE** | 35 | ~22,400 | Operational/historical data that stays where it is |
| **ARCHIVE** | 0 | 0 | Nothing needs archiving (files serve current purposes) |
| **DELETE** | 0 | 0 | No truly redundant content identified |
| **Already mirrored** | 2 | ~896 | Already synced to provenance |
| **TOTAL** | 51 | ~32,800 | |

**Key insight:** The majority of dark matter (35 files, ~22,400 lines) should KEEP-IN-PLACE. It serves legitimate operational/historical purposes. The problem is not that it exists outside the chain -- it is that the chain does not acknowledge its existence or reference it as evidence. The 13 ABSORB files contain the data that must flow into the formal chain to close the gaps.

---

# SECTION 5: THE FINDING REGISTRY

## 5.1 Master Registry of All ~89 Dark Matter Finding IDs

### EXT-CONV (5 findings) -- OD-001 External Research

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| EXT-CONV-001 | OD-001 inline header, identity-brief.md | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |
| EXT-CONV-002 | OD-001 inline header | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |
| EXT-CONV-003 | OD-001 inline header | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |
| EXT-CONV-004 | OD-001 inline header | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |
| EXT-CONV-005 | OD-001 inline header | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |

### EXT-DENSITY (3 findings) -- OD-001 External Research

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| EXT-DENSITY-001 | OD-001 inline header | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |
| EXT-DENSITY-002 | OD-001 inline header | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |
| EXT-DENSITY-003 | OD-001 inline header | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |

### EXT-TASK (12 findings) -- OD-003/004 External Research

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| EXT-TASK-001 through EXT-TASK-012 | OD-004-EXTERNAL-RESEARCH.md | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |

### EXT-CONF (12 findings) -- OD-004 External Research

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| EXT-CONF-001 through EXT-CONF-012 | OD-004-EXTERNAL-RESEARCH.md | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |

### EXT-SPAT (12 findings) -- OD-005 External Research

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| EXT-SPAT-001 through EXT-SPAT-012 | OD-005-EXTERNAL-RESEARCH.md | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |

### EXT-CREATIVE (12 findings) -- OD-006 External Research

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| EXT-CREATIVE-001 through EXT-CREATIVE-012 | OD-006-CREATIVE-RESEARCH-FEED.md | EXT-RESEARCH-REGISTRY.md | PIPELINE-MANIFEST.md Section B (reference) | UNREGISTERED |

### OD-F (8 existing + 4 new = 12 findings) -- OD Outbound

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| OD-F-001 | OD-CHECKPOINT.md line 144 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-002 | OD-CHECKPOINT.md line 145 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-003 | OD-CHECKPOINT.md line 146 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-004 | OD-CHECKPOINT.md line 147 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-005 | OD-CHECKPOINT.md line 153 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-006 | OD-CHECKPOINT.md line 154 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-007 | OD-CHECKPOINT.md line 155 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-008 | OD-CHECKPOINT.md line 156 | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | UNREGISTERED |
| OD-F-009 | NEW (from OD-002 key insight) | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | DOES NOT EXIST |
| OD-F-010 | NEW (from OD-003 key insight) | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | DOES NOT EXIST |
| OD-F-011 | NEW (from OD-004 key insight) | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | DOES NOT EXIST |
| OD-F-012 | NEW (from OD-005 key insight) | OD-outbound-findings.md | PIPELINE-MANIFEST.md Section B | DOES NOT EXIST |

### F-E (5 findings) -- Fresh-Eyes Audit

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| F-E-001 | fresh-eyes.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| F-E-002 | fresh-eyes.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| F-E-003 | fresh-eyes.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| F-E-004 | fresh-eyes.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| F-E-005 | fresh-eyes.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |

### CA (5 findings) -- Contrast/Accessibility Audit

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| CA-001 | contrast-accessibility.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| CA-002 | contrast-accessibility.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| CA-003 | contrast-accessibility.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| CA-004 | contrast-accessibility.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |
| CA-005 | contrast-accessibility.md | OD-AUDIT-SYNTHESIS.md | OD-AUDIT-SYNTHESIS.md (internal) | UNREGISTERED |

### DEC (12 findings) -- Decisions

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| DEC-001 through DEC-012 | decisions.md, lead-log.md, CURRENT-STATE.md | OD-SYNTHESIS.md (key decisions section) | OD-SYNTHESIS.md (internal) | UNREGISTERED |

### COMP-F (11+ detailed findings) -- Component Audit

| ID | Defined In | Formal Home (Target) | Registration Target | Status |
|----|-----------|---------------------|---------------------|--------|
| COMP-F-* (detailed) | COMPONENT-AUDIT-COMP-001-011.md | Already partially in component-findings.md | PIPELINE-MANIFEST.md Section B (already partial) | PARTIALLY REGISTERED |

## 5.2 Finding ID Collisions Requiring Resolution

### R3-023 vs R3-036

**Issue:** OD-CHECKPOINT.md line 104 notes: "R3-005 labeled as WAVE (actually BOOKENDS), R3-007 labeled as ISLANDS (actually Scroll-triggered). Correct IDs: R3-006=WAVE, R3-047=ISLANDS."

**Resolution needed:** The OD-005 inline header references incorrect R3 finding IDs. The header should reference R3-006 (WAVE) and R3-047 (ISLANDS), not R3-005 and R3-007. This is a factual error in the inline header that should be corrected AND noted in the OD-SYNTHESIS negative space section as a known documentation error.

### OD-F-005 Potential Collision

**Issue:** OD-F-005 is defined as "Organization IS Density" in OD-CHECKPOINT. This is also the strongest candidate for Soul Piece #6. If elevated to soul piece status, the finding ID remains OD-F-005, but the soul piece entry in SOUL-DISCOVERIES.md and PIPELINE-MANIFEST.md Section C would reference OD-F-005 as its discovery finding -- similar to how COMP-F-001 through COMP-F-005 map to Soul Pieces #1-5.

**Resolution:** No collision exists. The finding ID and soul piece designation are complementary, not conflicting. DD-F-006 (FRACTAL) was similarly both a finding and a meta-pattern without being elevated to soul piece status. The human decision is whether OD-F-005 is a META-FINDING (like DD-F-006) or a SOUL PIECE (like COMP-F-001).

### COMP-F Detailed vs Summary

**Issue:** COMPONENT-AUDIT-COMP-001-011.md contains detailed per-component, per-dimension audit data that references COMP-F finding IDs at a granularity level that does not exist in component-findings.md. The summary in the formal chain has 21 COMP-F findings; the detailed audit data in dark matter has per-finding, per-component application evidence.

**Resolution:** Not a collision. The detailed data is evidence supporting the summary findings. Reference from component-findings.md to the detailed audit as evidence source. No ID changes needed.

## 5.3 Registration Plan Summary

| Finding Type | Count | Formal Home | Registration In |
|-------------|-------|-------------|----------------|
| EXT-* (all types) | ~56 | EXT-RESEARCH-REGISTRY.md (NEW) | Referenced from PIPELINE-MANIFEST.md Section B |
| OD-F-001 to OD-F-012 | 12 | OD-outbound-findings.md (NEW) | PIPELINE-MANIFEST.md Section B |
| F-E-001 to F-E-005 | 5 | OD-AUDIT-SYNTHESIS.md (NEW) | Internal to audit synthesis |
| CA-001 to CA-005 | 5 | OD-AUDIT-SYNTHESIS.md (NEW) | Internal to audit synthesis |
| DEC-001 to DEC-012 | 12 | OD-SYNTHESIS.md (NEW) | Internal to synthesis |
| COMP-F-* (detailed) | ~11 | Already partially registered | No change needed |
| **TOTAL** | **~89** (excluding COMP-F) | | |

**After registration:** All ~89 dark matter finding IDs will have formal homes AND be discoverable through the provenance chain (either directly in PIPELINE-MANIFEST or via documents referenced from it).

---

# SECTION 6: INFORMATION FLOW DIAGRAM

## 6.1 The Clean Chain (Target State)

```
═══════════════════════════════════════════════════════════════════════════════
                        THE TARGET INFORMATION FLOW
═══════════════════════════════════════════════════════════════════════════════

ORIGINAL RESEARCH (337 findings)
├── R1: 28 Documentation Patterns ──────────────────────────────┐
├── R2: 27 Creative Layouts ─────────────────────────────────── │
├── R3: 51 Density Dimensions ──────────────┐                   │
├── R4: 192 Axis Innovations ───────────────│────────────────── │
└── R5: 39 Combination Theory ──────────────│────────────────── │
                                            │                   │
     ┌──────────────────────────────────────┘                   │
     │                                                          │
     ▼                                                          │
 STAGE 1: COMPONENT FOUNDATION                                  │
 ├── 5 Soul Pieces  ─────────────────────────────────────→ ALL  │
 ├── COMP-F-001 to COMP-F-021  ──────────────────────────→ ALL  │
 ├── STAGE-HEADER.md  [OK]                                      │
 ├── component-findings.md  [OK]                                │
 └── FOUNDATION-REMEDIATION-SYNTHESIS.md  [OK]                  │
     │                                                          │
     │ ENABLED                                                  │
     ▼                                                          │
 STAGE 2: DENSITY EXPLORATION (DD) ←── R3 PRIMARY ──────────────│
 ├── DD-F-001 to DD-F-018  ──────────────────────────────→ ALL  │
 ├── 6 Density Patterns  ────────────────────────────────→ ALL  │
 ├── STAGE-HEADER.md  [OK]                                      │
 ├── DD-outbound-findings.md  [OK]                              │
 ├── DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md  [OK]                   │
 ├── HANDOFF-DD-TO-OD.md  [OK]  ─────────┐                     │
 └── Quality bar: 34.5/40                 │                     │
     │                                    │                     │
     │ CONSTRAINED + GENERATED            │                     │
     ▼                                    ▼                     │
 STAGE 3: ORGANIZATION (OD) ←── R1 PRIMARY ←────────────────────┘
 │
 ├── [FORMAL CHAIN -- provenance/stage-3-organization-od/]
 │   ├── OD-outbound-findings.md  [NEW]
 │   │   └── OD-F-001 to OD-F-012 ─────────────────────→ AD, CD, Migration
 │   │       ├── OD-F-005 "Organization IS Density" (META) → ALL
 │   │       └── OD-F-009-012 (formalized from OD-002-005) → AD, CD
 │   ├── OD-SYNTHESIS.md  [NEW]
 │   │   └── 3-dialect analysis, identity evolution, key decisions, negative space
 │   ├── OD-AUDIT-SYNTHESIS.md  [NEW]
 │   │   └── 89 findings distilled, F-E-*, CA-*, process findings
 │   ├── HANDOFF-OD-TO-AD.md  [NEW]  ────────┐
 │   │   └── Complete gate file for AD        │
 │   ├── OD-RESEARCH-GATE.md  [UPDATE]        │
 │   │   └── Pre-build + post-build verification
 │   ├── STAGE-HEADER.md  [UPDATE]            │
 │   │   └── Complete narrative (COMPLETE status)
 │   └── CLAUDE.md  [UPDATE]                  │
 │       └── Accurate navigation              │
 │                                            │
 ├── [EXTERNAL RESEARCH]                      │
 │   └── EXT-RESEARCH-REGISTRY.md  [NEW]      │
 │       └── ~56 EXT-* findings registered    │
 │                                            │
 ├── [PATTERNS]                               │
 │   └── organizational-patterns.md  [NEW]    │
 │       └── 6 validated patterns  ──────────→│ AD, CD, Migration
 │                                            │
 ├── [INFRASTRUCTURE UPDATES]                 │
 │   ├── PIPELINE-MANIFEST.md  [UPDATE]       │
 │   │   └── OD-F entries, DD-F consumption,  │
 │   │       soul determination, org patterns │
 │   ├── BACKBONE.md  [UPDATE]                │
 │   │   └── Section 4 rewrite, soul matrix,  │
 │   │       causal chain                     │
 │   ├── PATTERN-INDEX.md  [UPDATE]           │
 │   │   └── 6 OD patterns VALIDATED          │
 │   ├── SOUL-DISCOVERIES.md  [UPDATE]        │
 │   │   └── OD determination                 │
 │   ├── anti-patterns/registry.md  [UPDATE]  │
 │   │   └── 2px border epidemic + OD results │
 │   └── RESEARCH-ACTIVE.md  [UPDATE]         │
 │       └── R-1 finalized, OD applied        │
 │                                            │
 │   CONSTRAINED + GENERATED                  │
 ▼                                            ▼
 STAGE 4: AXIS EXPLORATION (AD)  ←── R4 PRIMARY (192 findings)
 ├── Consumes: OD-F-001-012 + DD-F-001-018 + COMP-F-001-021 + 5 Soul Pieces
 ├── Consumes: 6 density + 6 organizational patterns (with pairings)
 ├── Consumes: EXT-* methodology (how to commission external research)
 ├── Creates: AD-F-### findings, 6 axis patterns, HANDOFF-AD-TO-CD
 └── Updates: PIPELINE-MANIFEST, BACKBONE, PATTERN-INDEX, SOUL-DISCOVERIES
     │
     │ CONSTRAINED + GENERATED
     ▼
 STAGE 5: COMBINATION (CD)  ←── R5 PRIMARY (39 findings)
 ├── Consumes: ALL accumulated (COMP-F + DD-F + OD-F + AD-F + Soul + all patterns)
 ├── Creates: CD-F-### findings, combination rules
 └── Updates: PIPELINE-MANIFEST, BACKBONE, PATTERN-INDEX
     │
     ▼
 MIGRATION
 └── Consumes: ALL accumulated findings + ALL patterns + ALL rules
```

## 6.2 Where Dark Matter Currently Sits vs Where It Needs to Go

```
═══════════════════════════════════════════════════════════════════════════════
                    DARK MATTER MIGRATION MAP
═══════════════════════════════════════════════════════════════════════════════

CURRENT STATE:                              TARGET STATE:
(Dark matter locations)                     (Formal chain destinations)

checkpoints/OD-CHECKPOINT.md ─────────────→ OD-outbound-findings.md (OD-F data)
  (lines 140-157: 8 OD-F findings)          OD-SYNTHESIS.md (per-OD snapshots)
                                            STAGE-HEADER.md (identity version)

knowledge-architecture/
  OD-GRANULAR-AUDIT-RESULTS.md ───────────→ OD-AUDIT-SYNTHESIS.md (distilled)
  OD-004-EXTERNAL-RESEARCH.md ────────────→ EXT-RESEARCH-REGISTRY.md (24 findings)
  OD-005-EXTERNAL-RESEARCH.md ────────────→ EXT-RESEARCH-REGISTRY.md (12 findings)
  OD-RETROSPECTIVE-AND-PROTOCOL-v2.md ───→ OD-AUDIT-SYNTHESIS.md (process findings)
  OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3 → OD-AUDIT-SYNTHESIS.md (process findings)
  ACCUMULATED-IDENTITY-v1.md ─────────────→ Referenced from HANDOFF-OD-TO-AD.md

explorations/organizational/
  OD-006-CREATIVE-RESEARCH-FEED.md ───────→ EXT-RESEARCH-REGISTRY.md (12 findings)
                                            Referenced from OD-outbound-findings.md

_od-audit-scratchpad/
  fresh-eyes.md ──────────────────────────→ OD-AUDIT-SYNTHESIS.md (F-E findings)
                                            OD-outbound-findings.md (anti-patterns)
  contrast-accessibility.md ──────────────→ OD-AUDIT-SYNTHESIS.md (CA findings)
  cross-od-consistency.md ────────────────→ OD-SYNTHESIS.md (consistency proof)
  fix-report-fixer-c.md ─────────────────→ OD-AUDIT-SYNTHESIS.md (false positives)
  research-refinement.md ────────────────→ EXT-RESEARCH-REGISTRY.md (soul tests)
  structural-integrity.md ────────────────→ OD-AUDIT-SYNTHESIS.md (accessibility)
  comparative-reference.md ───────────────→ OD-SYNTHESIS.md (cross-stage comparison)

_execution-journal/
  decisions.md ───────────────────────────→ OD-SYNTHESIS.md (key decisions)

checkpoints/
  DISCOVERIES-LOG.md ─────────────────────→ OD-SYNTHESIS.md (scoring history)

                    ┌─────────────────────────────────┐
                    │  FILES THAT STAY IN PLACE        │
                    │  (35 files, ~22,400 lines)       │
                    │                                  │
                    │  These become REFERENCED from    │
                    │  the formal chain as evidence    │
                    │  and detailed records, but their │
                    │  data does not need to move.     │
                    └─────────────────────────────────┘
```

## 6.3 Finding ID Flow Through the Clean Chain

```
═══════════════════════════════════════════════════════════════════════════════
              FINDING ID FLOW — TARGET STATE
═══════════════════════════════════════════════════════════════════════════════

R-findings (R1-001..R5-039)  ═══ 337 IDs ═══
    │
    ▼
COMP-F-001 to COMP-F-021  ═══ 21 IDs ═══  [component-findings.md]
    │
    │ Chain intact ────→ DD-outbound-findings.md
    ▼
DD-F-001 to DD-F-018  ═══ 18 IDs ═══  [DD-outbound-findings.md]
    │
    │ Chain intact ────→ HANDOFF-DD-TO-OD.md ────→ OD-RESEARCH-GATE.md
    ▼
OD-F-001 to OD-F-012  ═══ 12 IDs ═══  [OD-outbound-findings.md] ← CHAIN RESTORED
    │
    │ + EXT-* (~56 IDs) registered in EXT-RESEARCH-REGISTRY.md
    │ + F-E/CA/DEC (~22 IDs) registered in OD-AUDIT-SYNTHESIS/OD-SYNTHESIS
    │
    │ Chain connection ────→ HANDOFF-OD-TO-AD.md
    ▼
AD-F-### (future)  ═══ TBD IDs ═══  [AD-outbound-findings.md]
    │
    ▼
CD-F-### (future)  ═══ TBD IDs ═══  [CD-outbound-findings.md]
    │
    ▼
MIGRATION  ← consumes ALL accumulated IDs

═══════════════════════════════════════════════════════════════════════════════
```

## 6.4 Provenance Chain Coverage: Before and After

| Metric | Current State | Target State | Delta |
|--------|--------------|--------------|-------|
| **Formal chain files (Stage 3)** | 3 (all stale) | 7 (all current) | +4 new files |
| **Finding IDs in formal chain** | 0 OD-F registered | 12 OD-F registered | +12 |
| **EXT-* IDs in chain** | 0 | ~56 registered | +56 |
| **Audit IDs in chain** | 0 | ~10 (F-E + CA) referenced | +10 |
| **Decision IDs in chain** | 0 | ~12 in OD-SYNTHESIS | +12 |
| **Dark matter coverage** | ~24% of research in chain | ~75% of research accessible from chain | +51% |
| **AD readiness** | BLOCKED (no handoff, no findings, no patterns) | UNBLOCKED (complete gate file) | Critical |
| **Provenance self-sufficiency** | ~5% of OD info in provenance | ~85% discoverable from provenance | +80% |
| **PIPELINE-MANIFEST staleness** | 4 sections TBD/PENDING | 0 sections TBD | Fixed |
| **BACKBONE staleness** | Section 4 IN PROGRESS | Section 4 COMPLETE | Fixed |
| **PATTERN-INDEX staleness** | 6 patterns PENDING | 6 patterns VALIDATED | Fixed |

## 6.5 What Remains Outside the Chain (Acceptable Dark Matter)

After all absorptions and updates are complete, approximately 35 files (~22,400 lines) remain outside the formal provenance chain. This is by design. These files fall into three categories:

1. **Operational history** (~12 files, ~8,000 lines): Builder logs, execution journals, batch manifests, state trackers. These document HOW the work was done, not WHAT was discovered. They serve as historical records and context-recovery aids.

2. **Raw evidence** (~15 files, ~9,000 lines): Per-OD systematic audits, visual audits, threading data, dependency traces. These are the granular evidence behind summarized findings. They are referenced from the formal chain as evidence sources but do not need to be in the chain themselves.

3. **Process research** (~8 files, ~5,400 lines): Workflow metacognition, retrospectives, agent team architectures. These document insights about the ORCHESTRATION PROCESS rather than the DESIGN SYSTEM. They could form the basis of a separate "process provenance" chain if desired, but they do not belong in the design provenance chain.

The key architectural principle: **the formal chain must be SUFFICIENT for any fresh agent to understand what OD produced, why, and how it connects to downstream stages. The dark matter provides DEPTH for agents that need granular evidence or historical context. The chain references the dark matter; it does not need to contain it.**

---

## APPENDIX A: EXECUTION ORDER

For the team that will implement this topology, the dependency-ordered execution plan:

### Phase A: Create OD Stage 3 Core Files (Critical Path)

1. **OD-outbound-findings.md** -- Write first. Everything depends on this.
   - Source: OD-CHECKPOINT.md, OD inline headers, ACCUMULATED-IDENTITY-v1.md
   - Creates: OD-F-001 through OD-F-012 formal declarations
   - Resolves: GAP-001, GAP-016, GAP-017

2. **EXT-RESEARCH-REGISTRY.md** -- Write second. Needed by outbound-findings and handoff.
   - Source: OD-004/005 EXTERNAL-RESEARCH, OD-006-CREATIVE-RESEARCH-FEED, research-refinement.md, OD inline headers
   - Creates: ~56 EXT-* formal entries
   - Resolves: GAP-019, GAP-032

3. **OD-SYNTHESIS.md** -- Write third. Needed by handoff and stage-header.
   - Source: OD-CHECKPOINT, OD-GRANULAR-AUDIT-RESULTS, cross-od-consistency, fresh-eyes, decisions.md, DISCOVERIES-LOG
   - Creates: Cross-OD analysis, key decisions, negative space, emergence chains
   - Resolves: GAP-003, GAP-022, GAP-023, GAP-025

4. **OD-AUDIT-SYNTHESIS.md** -- Write fourth. Needed by handoff.
   - Source: OD-GRANULAR-AUDIT-RESULTS, all scratchpad files, FIX-STATE, retrospectives
   - Creates: Audit distillation, finding dispositions, process findings
   - Resolves: GAP-005, GAP-024, GAP-029, GAP-030

5. **HANDOFF-OD-TO-AD.md** -- Write fifth. Depends on all above.
   - Source: All 4 files above + HANDOFF-DD-TO-OD (template) + ACCUMULATED-IDENTITY
   - Creates: Complete AD gate file
   - Resolves: GAP-002

### Phase B: Create Pattern File

6. **organizational-patterns.md** -- Can be written in parallel with Phase A.
   - Source: OD-CHECKPOINT, PATTERN-INDEX placeholders, OD inline headers
   - Creates: 6 validated pattern definitions
   - Resolves: GAP-004

### Phase C: Update Infrastructure Files

7. **PIPELINE-MANIFEST.md** -- After OD-outbound-findings exists.
   - Resolves: GAP-009, GAP-015

8. **BACKBONE.md** -- After OD-SYNTHESIS exists.
   - Resolves: GAP-010, GAP-028

9. **PATTERN-INDEX.md** -- After organizational-patterns.md exists.
   - Resolves: GAP-011

10. **SOUL-DISCOVERIES.md** -- After OD-SYNTHESIS (needs OD-F-005 determination context).
    - Resolves: GAP-026

11. **anti-patterns/registry.md** -- After OD-AUDIT-SYNTHESIS exists.
    - Resolves: GAP-027

12. **RESEARCH-ACTIVE.md** -- After OD-RESEARCH-GATE addendum.

### Phase D: Update OD Stage 3 Existing Files

13. **OD-RESEARCH-GATE.md** -- Add post-build verification addendum.
    - Resolves: GAP-008

14. **STAGE-HEADER.md** -- Full rewrite after all content files exist.
    - Resolves: GAP-006, GAP-014

15. **CLAUDE.md** -- Update LAST after all files exist.
    - Resolves: GAP-007

### Phase E: Update Cross-References

16. **provenance/CLAUDE.md** -- Update Stage 3 status.
17. **components/OVERVIEW.md** -- Add COMPONENTS-REGISTRY reference.

### Gap Resolution Matrix

| GAP | File That Resolves It | Phase |
|-----|----------------------|-------|
| GAP-001 (OD-outbound-findings MISSING) | OD-outbound-findings.md | A.1 |
| GAP-002 (HANDOFF MISSING) | HANDOFF-OD-TO-AD.md | A.5 |
| GAP-003 (OD-SYNTHESIS MISSING) | OD-SYNTHESIS.md | A.3 |
| GAP-004 (org-patterns MISSING) | organizational-patterns.md | B.6 |
| GAP-005 (Audit synthesis MISSING) | OD-AUDIT-SYNTHESIS.md | A.4 |
| GAP-006 (STAGE-HEADER stale) | STAGE-HEADER.md rewrite | D.14 |
| GAP-007 (CLAUDE.md placeholder) | CLAUDE.md update | D.15 |
| GAP-008 (RESEARCH-GATE pre-build only) | OD-RESEARCH-GATE addendum | D.13 |
| GAP-009 (PIPELINE-MANIFEST stale) | PIPELINE-MANIFEST update | C.7 |
| GAP-010 (BACKBONE stale) | BACKBONE update | C.8 |
| GAP-011 (PATTERN-INDEX stale) | PATTERN-INDEX update | C.9 |
| GAP-013 (DD successor pointer broken) | Resolves automatically with GAP-001 | A.1 |
| GAP-014 (STAGE-HEADER inline header stale) | STAGE-HEADER rewrite | D.14 |
| GAP-015 (DD-F consumption not updated) | PIPELINE-MANIFEST update | C.7 |
| GAP-016 (OD-F no lifecycle) | OD-outbound-findings.md | A.1 |
| GAP-017 (OD-002-005 no findings) | OD-outbound-findings.md (OD-F-009-012) | A.1 |
| GAP-018 (R-1 not finalized) | OD-RESEARCH-GATE addendum | D.13 |
| GAP-019 (EXT-* not registered) | EXT-RESEARCH-REGISTRY.md | A.2 |
| GAP-020 (Scoring rubric missing) | OD-SYNTHESIS.md (Section 10) | A.3 |
| GAP-021 (Score breakdowns missing) | OD-SYNTHESIS.md (Section 10) | A.3 |
| GAP-022 (Key decisions missing) | OD-SYNTHESIS.md (Section 7) | A.3 |
| GAP-023 (Negative space missing) | OD-SYNTHESIS.md (Section 8) | A.3 |
| GAP-024 (Audit disposition missing) | OD-AUDIT-SYNTHESIS.md (Section 6) | A.4 |
| GAP-025 (Emergence chains incomplete) | OD-SYNTHESIS.md (Section 9) | A.3 |
| GAP-026 (SOUL-DISCOVERIES no OD) | SOUL-DISCOVERIES.md update | C.10 |
| GAP-027 (Anti-pattern registry no OD) | anti-patterns/registry.md update | C.11 |
| GAP-028 (Soul matrix no OD rows) | BACKBONE.md update | C.8 |
| GAP-029 (Audit methodology not captured) | OD-AUDIT-SYNTHESIS.md (Section 8) | A.4 |
| GAP-030 (Fix execution not captured) | OD-AUDIT-SYNTHESIS.md (Section 8) | A.4 |
| GAP-031 (Provenance directory insufficient) | All Phase A+D files | A+D |
| GAP-032 (Creative research orphaned) | EXT-RESEARCH-REGISTRY.md + reference | A.2 |
| GAP-033 (Process innovation trapped) | OD-AUDIT-SYNTHESIS.md (Section 8) | A.4 |

**All 33 gaps addressed. 0 gaps remaining after full execution.**

---

## APPENDIX B: SIZING ESTIMATES

| Work Item | Estimated Lines | Estimated Effort |
|-----------|----------------|------------------|
| OD-outbound-findings.md (NEW) | 400-500 | HIGH (most complex new file) |
| EXT-RESEARCH-REGISTRY.md (NEW) | 350-450 | MEDIUM (data extraction) |
| OD-SYNTHESIS.md (NEW) | 500-700 | HIGH (synthesis + analysis) |
| OD-AUDIT-SYNTHESIS.md (NEW) | 400-600 | MEDIUM (distillation) |
| HANDOFF-OD-TO-AD.md (NEW) | 400-550 | HIGH (gate file) |
| organizational-patterns.md (NEW) | 400-500 | MEDIUM (pattern definitions) |
| PIPELINE-MANIFEST.md (UPDATE) | +100-150 | LOW (table additions) |
| BACKBONE.md (UPDATE) | +80-120 | MEDIUM (narrative rewrite) |
| PATTERN-INDEX.md (UPDATE) | +40-60 | LOW (table updates) |
| SOUL-DISCOVERIES.md (UPDATE) | +30-50 | LOW (determination section) |
| anti-patterns/registry.md (UPDATE) | +40-60 | LOW (new entries) |
| RESEARCH-ACTIVE.md (UPDATE) | +50-80 | LOW (status updates) |
| OD-RESEARCH-GATE.md (UPDATE) | +80-120 | MEDIUM (verification addendum) |
| STAGE-HEADER.md (UPDATE) | +100-150 | MEDIUM (full rewrite) |
| CLAUDE.md (UPDATE) | +30-50 | LOW (navigation update) |
| provenance/CLAUDE.md (UPDATE) | +10-20 | LOW (status change) |
| **TOTAL NEW CONTENT** | **~3,200-4,500 lines** | |

**Total new files:** 6
**Total updated files:** 10
**Total files touched:** 16
**Estimated total new content:** ~3,200-4,500 lines

This is approximately 10-14% of the current dark matter volume (~32,800 lines), confirming that the solution is DISTILLATION (extracting the essential data), not MIGRATION (moving everything).

---

*End of Target Information Topology*
