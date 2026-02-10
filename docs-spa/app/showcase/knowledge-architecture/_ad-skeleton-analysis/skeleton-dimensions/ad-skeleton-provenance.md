# AD Skeleton: Incremental Provenance Architecture

**Author:** Provenance Architect
**Date:** 2026-02-09
**Based on:** Full reading of 15+ OD provenance chain documents, remediation handoff, gap analysis root cause, finding registry, convention spec, accumulated identity v1, EXT-RESEARCH-REGISTRY, BACKBONE, SOUL-DISCOVERIES, HANDOFF-OD-TO-AD

---

## THE CORE LESSON: OD Built After, AD Builds During

OD's provenance was a retroactive remediation project: 18 agents, 5 waves, to formalize what should have been written during the build. Root cause analysis (06-root-cause-analysis.md) identified 5 structural causes:

1. **No enforcement gate for post-build documentation** -- pipeline has research gate but nothing blocking next stage until provenance is written
2. **Multi-session execution breaks the pipeline** -- OD spanned 5+ sessions with no natural pause for formalization
3. **MEMORY.md doesn't track provenance** -- Records "OD Fix COMPLETE" but never "OD Provenance PENDING"
4. **Inline headers create illusion of completeness** -- Rich 150-line headers make everything look done
5. **DD's provenance process was non-repeatable** -- A dedicated documentation session that happened once but was never codified

**AD's answer:** Every provenance artifact is written by the agent who discovers it, at the moment of discovery. No separate scribe phase. No deferred documentation. The finding ID is assigned before the CSS is written.

---

## 1. FILES AD MUST CREATE

### 1.1 stage-4-axis-ad/STAGE-HEADER.md

**Format:** YAML frontmatter + 8 narrative sections (matching OD STAGE-HEADER exactly)

```yaml
---
pipeline_stage: 4
stage_name: Axis Exploration (AD)
file_type: stage-header
predecessor: provenance/stage-3-organization-od/STAGE-HEADER.md
successor: provenance/stage-5-combination-cd/STAGE-HEADER.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: [DATE]
status: [IN_PROGRESS | COMPLETE]
---
```

**Required sections:**
1. THE STORY -- What AD explored (axis geometry -- how content is ARRANGED in visual space)
2. WHAT THIS STAGE CONSUMED -- Table: inputs, file locations, item counts, roles
3. WHAT THIS STAGE PRODUCED -- Table: outputs, file locations, status
4. QUALITY ACHIEVED -- Scores, soul compliance, R-4 application rate, EXT-* rates
5. KEY DECISIONS -- Numbered table with Why and Impact columns
6. NEGATIVE SPACE -- What AD did NOT find (new soul pieces? axis-specific constraints?)
7. EMERGENCE TRACKING -- AD's equivalent of OD-F-005 crown jewel tracking
8. RE-ENRICHMENT / AUDIT RESULTS -- Post-audit subsection if audited

**When written:** DRAFT at start of AD (sections 1-2 from HANDOFF). UPDATED after each AD exploration is built. FINALIZED after audit/fix cycle. Sections 3-8 filled incrementally.

**Who writes it:** Lead (sections 1-2 at start, 5-8 at end). Builders update section 3 after each exploration. Verifiers update section 4 after audit.

---

### 1.2 stage-4-axis-ad/AD-outbound-findings.md

**Format:** Identical to OD-outbound-findings.md -- YAML frontmatter, finding ID convention table, per-finding blocks with 7 fields each.

```yaml
---
pipeline_stage: 4
stage_name: Axis Exploration (AD)
file_type: outbound-findings
predecessor: provenance/stage-3-organization-od/OD-outbound-findings.md
successor: provenance/stage-5-combination-cd/CD-outbound-findings.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: [DATE]
total_ad_f_findings: [COUNT]
finding_id_range: AD-F-001 through AD-F-[N]
---
```

**Per-finding template (7 fields):**
```markdown
### AD-F-NNN: [Title]

| Field | Value |
|-------|-------|
| **ID** | AD-F-NNN |
| **Finding** | [One-sentence discovery] |
| **Source** | AD-NNN-[name].html |
| **Discovery Context** | [How and when discovered during build] |
| **Status** | APPLIED |
| **Score** | [X/40 if scored] |
| **Target Stages** | CD, Migration |

**Description:** [2-3 paragraphs: what was discovered, why it matters, chain impact]

**Chain Impact:** [How this constrains CD and Migration]

**Validation Evidence:** [Specific HTML lines, CSS rules, or DOM evidence]
```

**Finding ID convention (matching OD pattern):**

| Prefix | Category | Example |
|--------|----------|---------|
| `AD-F-NNN` | Core axis pattern findings | AD-F-001 through AD-F-[N] |
| `AD-F-MP-NNN` | Meta-pattern findings | AD-F-MP-001 |
| `AD-F-PR-NNN` | Process findings | AD-F-PR-001 |
| `AD-F-FL-NNN` | Forward-looking findings | AD-F-FL-001 |
| `AD-F-AP-NNN` | Anti-pattern findings | AD-F-AP-001 |

**When written:** STARTED as empty scaffold at AD Phase 0. Each finding added THE MOMENT it is discovered during build. Builder discovers AD-F-001 during AD-001 construction, builder writes the finding entry IMMEDIATELY, not in a separate scribe pass.

**Who writes it:** The builder who discovers the finding. Not a scribe. Not a lead. The discovering agent. This is the single most important change from OD.

**Collision prevention protocol:**
1. Each AD exploration gets a RESERVED ID RANGE assigned before build starts:
   - AD-001: AD-F-001 through AD-F-004
   - AD-002: AD-F-005 through AD-F-008
   - AD-003: AD-F-009 through AD-F-012
   - AD-004: AD-F-013 through AD-F-016
   - AD-005: AD-F-017 through AD-F-020
   - AD-006: AD-F-021 through AD-F-028 (crown jewel gets extra range)
2. If a builder needs more IDs than their range, they append from AD-F-029+
3. Meta-pattern / process / forward / anti-pattern IDs use their own prefix (AD-F-MP-NNN etc.) and CANNOT collide with core IDs
4. The lead assigns ranges. Builders NEVER self-assign outside their range.
5. OD's collision (OD-F-005 builder-log vs OD-CHECKPOINT) happened because two agents independently chose the same ID. Reserved ranges make this impossible.

---

### 1.3 stage-4-axis-ad/AD-SYNTHESIS.md

**Format:** Matching OD-SYNTHESIS.md structure.

**Required sections:**
1. The AD Story -- Narrative of what AD explored
2. What AD Consumed / What AD Produced -- Tables matching OD-SYNTHESIS Section 2
3. 6-Pattern Analysis Table -- Per-AD score, density+org pairing, axis geometry, key insight, R-4 findings applied
4. Quality Dialect Analysis -- If dialects emerge, document them (OD had 3)
5. Key Decisions Made -- Numbered table
6. Negative Space -- What AD did NOT find
7. Emergence Tracking -- AD crown jewel equivalent

**When written:** Skeleton created at Phase 0 with sections 1-2 pre-populated from HANDOFF. Sections 3-7 populated AFTER all 6 ADs are built, BEFORE audit. Updated after audit.

**Who writes it:** Lead or designated synthesis agent. This is one of the few documents that CAN be written after build (because it synthesizes across explorations). But sections 1-2 are pre-populated.

---

### 1.4 stage-4-axis-ad/AD-RESEARCH-GATE.md

**Format:** Matching OD-RESEARCH-GATE.md structure.

**Required sections:**
1. Inline Section Verification -- Table of files read (Y/N) and constraints extracted
2. R-4 Finding-by-Finding Mapping -- Per-AD: finding ID, finding name, implementation plan, expected evidence, OD constraint
3. R-2 Consumption Decisions -- Per-finding: applied/deferred/rejected with rationale
4. DD/OD Constraints Inherited -- Table mapping which DD-F/OD-F constraints apply to which ADs
5. Summary -- Application rates (R-4 target >=80%, R-2 target: all 25 SOUL PASS evaluated, EXT-* target >=90%)
6. POST-BUILD VERIFICATION (added after build) -- Actual R-4 application status per finding

**When written:** Sections 1-4 written at Phase 0 BEFORE any building. This is the research gate -- building cannot start until this file passes. Section 5 summarizes the pre-build plan. Section 6 added post-build as verification.

**Who writes it:** Lead or research agent at Phase 0. Updated by builders as they apply/skip findings.

---

### 1.5 stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md

**Format:** Matching OD-AUDIT-SYNTHESIS.md structure.

**Required sections:**
1. Executive Summary -- Finding counts by severity, key outcomes
2. Audit Metadata -- Date, type, agent count, files audited, wall time
3. Finding Summary Table -- Severity x Count x Key Examples
4. Prioritization Mapping -- How raw findings consolidated to fix items
5. Fix Execution Summary -- Per-fix status, agent assignments
6. False Positives -- Any disproved findings
7. Soul Compliance Matrix -- 0 violations required

**When written:** AFTER audit phase completes. This is post-hoc by nature.

**Who writes it:** Audit synthesis agent or lead.

---

### 1.6 stage-4-axis-ad/AD-CONVENTION-SPEC.md (OR inherit OD's)

**Decision: EXTEND, not inherit.**

OD-CONVENTION-SPEC.md (468 lines) defines conventions for OD explorations. AD must:
1. INHERIT all OD conventions (soul checklist, border system, code block theme, header layout, type scale, spacing tokens, zone tokens)
2. EXTEND with AD-specific conventions:
   - Axis geometry token naming (e.g., `--axis-columns`, `--axis-gutter`, `--axis-ratio`)
   - Axis-specific pattern vocabulary
   - Any AD-unique type scale needs (e.g., if multi-column layouts need different body size)

**When written:** Phase 0 (Wave 0), BEFORE any AD exploration is built. This is lesson #2 from HANDOFF-OD-TO-AD: "Building Before Conventions -- OD's 3 dialects required 43-agent remediation."

**Who writes it:** Lead or convention agent at Wave 0.

---

### 1.7 stage-4-axis-ad/HANDOFF-AD-TO-CD.md

**Format:** Matching HANDOFF-OD-TO-AD.md structure exactly.

**Required sections:**
1. PURPOSE -- What this document transfers
2. ACKNOWLEDGMENT PROTOCOL -- Checkbox list for CD to confirm before starting
3. AXIS PATTERNS -- Table of 6 validated axis patterns with scores
4. AD OUTBOUND FINDINGS -- MUST consume and SHOULD reference tables
5. THE CHAIN -- Extended transitive chain (org->density->axis->combination)
6. SOUL PIECES + ANTI-PHYSICAL IDENTITY -- Updated if new soul pieces discovered
7. QUALITY BAR -- AD achieved vs CD target
8. PRIMARY RESEARCH FOR CD -- R-5 as primary, R-2 remaining
9. AD ITERATION LESSONS -- What worked, what didn't, highest/lowest scores
10. MISTAKES TO AVOID -- AD's equivalent of OD's 10 items
11. RE-ENRICHMENT TOPOLOGY EVALUATION -- If applicable
12. AD-TO-COMBINATION PAIRING -- Suggested pairings
13. DD/OD FINDINGS CARRIED FORWARD -- Transitive constraints
14. CD'S RESPONSIBILITIES TO THE CHAIN -- Files to create, files to update, verify checklist
15. MODE C PROVENANCE GUIDANCE -- Incremental provenance instructions
16. PROVENANCE-CHECKLIST-TEMPLATE -- Binary gate checklist

**When written:** AFTER all AD work is complete (build + audit + fix). This is the final deliverable.

**Who writes it:** Lead. This is a lead-only document.

---

### 1.8 stage-4-axis-ad/CLAUDE.md

**Format:** 5-section structure matching OD's stage CLAUDE.md exactly.

```markdown
# CLAUDE.md -- Stage 4: Axis Exploration (AD)

## 1. IDENTITY
## 2. HOW TO READ (recommended reading order)
## 3. WHAT'S HERE (file inventory table)
## 4. HOW THIS CONNECTS (consumed from / produced for)
## 5. MINDSET
```

**When written:** Phase 0 scaffold, updated throughout.

**Who writes it:** Lead at Phase 0. Updated after each major milestone.

---

### 1.9 ACCUMULATED-IDENTITY-v2.md

**Format:** Extending ACCUMULATED-IDENTITY-v1.1.md (which supersedes v1).

**What changes in v2:**
- Section 1 (WHO WE ARE): Updated if new soul pieces or identity refinements discovered
- Section 2 (WHAT WE'VE LEARNED): Add AD-F-### findings alongside existing DD-F and OD-F
- Section 3 (WHAT WE MUST HONOR): Add AD-specific constraints
- Section 4 (R-4 consumption status): Full R-4 application record
- Section 5 (R-2 consumption status): Updated from evaluated to applied/deferred
- Section 6 (OD-F-005 supersession): Clarify if AD crown jewel extends or modifies OD-F-005
- New: ANTI-PHYSICAL diagnostic update (any new SOUL FAIL categories?)
- New: Convention spec evolution (AD extensions to OD-CONVENTION-SPEC)

**When written:** DRAFT at Phase 0 (copy v1.1, add AD sections as empty). UPDATED incrementally as AD findings emerge. FINALIZED after audit.

**Who writes it:** Lead creates draft. Builders add findings to their sections. Lead finalizes.

**Location:** `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` (matching v1 location)

---

## 2. FILES AD MUST UPDATE

### 2.1 PIPELINE-MANIFEST.md

**What changes:**
- Section B (Generated Findings): Add `Stage 4 (AD-F-###) -- Axis` table with all AD findings
- Section A (Original Research): Update R-4 status from "~20% applied" to actual rate. Update R-2 status from "0% applied" to actual decisions.
- Section D (Pattern Provenance): Add "Axis Patterns" table
- Section F (Finding Lifecycle States): Update PENDING/APPLIED/VALIDATED counts

**When updated:** After each AD exploration completes (builder adds their AD-F entries). Lead does final count reconciliation.

### 2.2 BACKBONE.md

**What changes:**
- Section covering Stage 4: Replace "PENDING" with full narrative (matching Stage 2/3 format)
- Pipeline diagram: Update `STAGE 4: AXIS (AD) -- [SCORE] avg` and `COMPLETE`
- Research Chain Table (Section 7): Add AD row

**When updated:** After AD stage is COMPLETE (build + audit + fix + synthesis).

### 2.3 RESEARCH-ACTIVE.md

**What changes:**
- R-4 section: Update each finding's status (PENDING -> APPLIED/DEFERRED with evidence)
- R-2 section: Update from "evaluated" to "applied" or "deferred" with per-finding rationale
- EXT-AD-* section: Add all bespoke AD research findings
- Application rate summary

**When updated:** DURING build -- builders update as they apply findings.

### 2.4 SOUL-DISCOVERIES.md

**What changes:** ONLY IF new soul pieces are discovered (AD may find spatial/axis soul pieces). If no new soul pieces: add "Stage 4 determination: No new soul pieces discovered" matching OD's negative finding.

**When updated:** After AD stage analysis, before marking COMPLETE.

### 2.5 patterns/axis-patterns.md

**What changes:** Create or populate with 6 validated axis patterns (matching density-patterns.md and organizational-patterns.md format):
- Per-pattern: name, score, axis geometry, density pairing, org pairing, key CSS, usage guide, provenance header

**When updated:** After each AD exploration is built and scored. Updated after audit.

### 2.6 EXT-RESEARCH-REGISTRY.md

**What changes:** Add EXT-AD-* categories (one per AD exploration's bespoke research).

**When updated:** As each AD's bespoke research is commissioned and applied.

### 2.7 explorations/axis/CLAUDE.md

**What changes:** Create or update with AD exploration inventory, scores, status.

### 2.8 explorations/CLAUDE.md

**What changes:** Update AD row from "PENDING" to "IN PROGRESS" then "COMPLETE".

### 2.9 provenance/CLAUDE.md

**What changes:** Update stage-4-axis-ad/ row from "PENDING" to status.

---

## 3. INCREMENTAL PROVENANCE PROTOCOL

### The Fundamental Rule

> **Write it when you discover it. Not later. Not in a separate pass. NOW.**

OD's failure mode: Builder discovers insight -> continues building -> plans to document later -> session ends -> provenance never written -> 18-agent remediation required.

AD's protocol: Builder discovers insight -> STOPS building -> writes AD-F-NNN entry in AD-outbound-findings.md -> RESUMES building.

### 3.1 The Discovery-to-Documentation Flow

```
Builder notices something during AD-003 construction
    |
    v
Is this a FINDING (reusable insight for CD/Migration)?
    |
    YES                              NO (just implementation detail)
    |                                |
    v                                v
    STOP BUILDING                    Continue building
    |                                (no provenance needed)
    v
    Assign ID from reserved range
    (AD-003 range: AD-F-009 to AD-F-012)
    |
    v
    Open AD-outbound-findings.md
    Write the 7-field finding block
    (ID, Finding, Source, Discovery Context, Status, Score, Target Stages)
    Write Description + Chain Impact + Validation Evidence
    |
    v
    Update PIPELINE-MANIFEST.md Section B
    (add one row to AD-F table)
    |
    v
    RESUME BUILDING
    |
    v
    Cite AD-F-NNN in the HTML header comment
    of the exploration being built
```

### 3.2 When to Write What

| Event | Provenance Action | File(s) Updated |
|-------|-------------------|-----------------|
| Phase 0 starts | Create all scaffold files | STAGE-HEADER (draft), RESEARCH-GATE, AD-outbound-findings (empty), CLAUDE.md, AD-CONVENTION-SPEC |
| Research gate passes | Finalize research gate | AD-RESEARCH-GATE.md (sections 1-5) |
| Builder discovers finding | Write finding immediately | AD-outbound-findings.md, PIPELINE-MANIFEST.md |
| EXT-* research commissioned | Register immediately | EXT-RESEARCH-REGISTRY.md, RESEARCH-ACTIVE.md |
| AD exploration scored | Update score | STAGE-HEADER (section 4), axis-patterns.md |
| Audit completes | Write audit synthesis | AD-AUDIT-SYNTHESIS.md |
| All ADs built | Write synthesis | AD-SYNTHESIS.md (sections 3-7) |
| Stage complete | Finalize all | HANDOFF-AD-TO-CD.md, BACKBONE.md, ACCUMULATED-IDENTITY-v2.md |

### 3.3 File Ownership Matrix (Prevents Contention)

| File | Owner | Other Agents May |
|------|-------|-----------------|
| AD-outbound-findings.md | Builder who discovers finding (append-only) | Read only |
| PIPELINE-MANIFEST.md | Lead | Builders request updates via message |
| AD-RESEARCH-GATE.md | Lead / Research agent | Builders read only |
| STAGE-HEADER.md | Lead | Builders update section 3 (produced table) |
| AD-SYNTHESIS.md | Lead / Synthesis agent | Builders contribute raw data via messages |
| AD-AUDIT-SYNTHESIS.md | Audit synthesis agent | Fixers contribute fix reports |
| HANDOFF-AD-TO-CD.md | Lead only | Nobody else touches this |
| AD-CONVENTION-SPEC.md | Lead only (Phase 0) | All builders read; nobody modifies post-Wave-0 |
| ACCUMULATED-IDENTITY-v2.md | Lead (draft/finalize) | Builders add to their sections |
| axis-patterns.md | Lead | Builders provide data via messages |
| EXT-RESEARCH-REGISTRY.md | Researchers (append-only per category) | Builders read only |

**Critical rule:** AD-outbound-findings.md is append-only. Builders append their findings to the end. They never modify other builders' entries. The lead does final ordering/formatting after all ADs are built.

### 3.4 Contention Prevention for PIPELINE-MANIFEST.md

PIPELINE-MANIFEST.md is a shared file with high contention risk. Protocol:

1. **During build waves:** Builders do NOT directly edit PIPELINE-MANIFEST. Instead, they write their AD-F entries in AD-outbound-findings.md (which they own).
2. **Between waves:** Lead batch-updates PIPELINE-MANIFEST from AD-outbound-findings.md.
3. **At stage completion:** Lead does final reconciliation.

This eliminates the contention that would occur if 4-6 builders all try to edit PIPELINE-MANIFEST simultaneously.

---

## 4. FINDING ID ASSIGNMENT PROTOCOL

### 4.1 ID Format

```
AD-F-NNN       Core axis pattern finding (NNN = 001-999)
AD-F-MP-NNN    Meta-pattern finding
AD-F-PR-NNN    Process finding
AD-F-FL-NNN    Forward-looking finding (implications for CD)
AD-F-AP-NNN    Anti-pattern finding
```

### 4.2 Reserved Range Assignment

The lead assigns ranges BEFORE Wave 1 building starts:

| Builder | AD Exploration | Reserved Range | Max Core IDs |
|---------|---------------|----------------|--------------|
| Builder-A | AD-001 Z-Pattern | AD-F-001 through AD-F-004 | 4 |
| Builder-B | AD-002 F-Pattern | AD-F-005 through AD-F-008 | 4 |
| Builder-C | AD-003 Bento Grid | AD-F-009 through AD-F-012 | 4 |
| Builder-D | AD-004 Spiral Reveal | AD-F-013 through AD-F-016 | 4 |
| Builder-E | AD-005 Axis Choreography | AD-F-017 through AD-F-020 | 4 |
| Builder-F | AD-006 Creative | AD-F-021 through AD-F-028 | 8 |
| Overflow | Any builder needing more | AD-F-029+ | Unlimited |

**Why OD's collision happened:** Two agents (builder-log during OD-002 and OD-CHECKPOINT during OD-006) independently assigned OD-F-005 to different findings. Neither knew the other had used the ID. The finding-registry.md diagnostic confirmed 10+ downstream citations for the OD-006 definition vs 0 for the OD-002 definition, requiring renumbering of 5 findings.

**Why reserved ranges prevent this:** Each builder has exclusive IDs. Even if two builders discover similar findings, they use different IDs. Deduplication happens at synthesis time (lead can merge if truly identical), not at assignment time.

### 4.3 Categorical Finding Format

**Meta-pattern (AD-F-MP-NNN):** Findings that describe patterns ACROSS multiple AD explorations. Only assignable by lead or synthesis agent. Expected: 0-2 meta-patterns (OD produced 1: OD-F-MP-001 "Organization = Density Identity").

**Process (AD-F-PR-NNN):** Findings about the build process itself. Example: "Bespoke research elevates scores +1.5 avg" (OD-F-PR-001).

**Forward-looking (AD-F-FL-NNN):** Findings that specifically constrain CD. Example: "Axis geometry implies combination preferences" (extending OD-F-FL-001's transitive chain).

**Anti-pattern (AD-F-AP-NNN):** Findings about what NOT to do. Must include: what the anti-pattern is, where it was observed, and the remediation.

### 4.4 Finding Quality Checklist

Before a finding ID is assigned, the builder verifies:

```
[ ] Is this genuinely reusable? (Will CD or Migration need to know this?)
[ ] Is this different from all existing findings? (Check OD-F, DD-F, COMP-F)
[ ] Can I write a one-sentence "Finding" that stands alone?
[ ] Can I describe "Chain Impact" (how this constrains downstream)?
[ ] Can I point to "Validation Evidence" (specific HTML/CSS/DOM proof)?
```

If any answer is NO, it is an implementation detail, not a finding. Do not assign an ID.

---

## 5. PROVENANCE GATE (Binary Check)

### 5.1 Pre-Build Gate (Phase 0 Complete)

All items must be YES before any AD exploration building begins:

```
PHASE 0 GATE:
[ ] HANDOFF-OD-TO-AD.md read completely (all sections)
[ ] OD-outbound-findings.md read completely (all 17 findings)
[ ] AD-RESEARCH-GATE.md created with R-4 finding-by-finding mapping
[ ] AD-CONVENTION-SPEC.md created (inheriting OD conventions + AD extensions)
[ ] AD-outbound-findings.md scaffold created (empty, with YAML frontmatter)
[ ] STAGE-HEADER.md draft created (sections 1-2 populated)
[ ] CLAUDE.md created (5-section structure)
[ ] Finding ID ranges assigned to all builders
[ ] ACCUMULATED-IDENTITY-v2.md draft created (v1.1 copied, AD sections empty)
[ ] R-4 fully read (192 findings)
[ ] R-2 evaluation consumed (r2-evaluation.md from OD re-enrichment)
[ ] OD-CONVENTION-SPEC.md read and AD extensions documented
[ ] Transitive chain understood: org -> density -> axis (from HANDOFF section)
```

### 5.2 Per-Exploration Gate (After Each AD-NNN)

After each AD exploration is built, verify:

```
PER-EXPLORATION GATE:
[ ] HTML file created: explorations/axis/AD-NNN-[name].html
[ ] Score assigned: >=32/40 for INCLUDE
[ ] Soul compliance: 0 border-radius violations, 0 box-shadow violations, 0 semi-transparent backgrounds
[ ] AD-F findings written in AD-outbound-findings.md (at least 1 per exploration)
[ ] R-4 findings applied cited in HTML header comment
[ ] DD-F-006 fractal verified at 4+ scales
[ ] OD-F-005 org=density respected (axis serves unified phenomenon)
[ ] Bespoke research (EXT-AD-*) applied and registered
[ ] No 2px borders (3-category system enforced)
[ ] No traffic-light color violations
[ ] Convention spec compliance verified
[ ] axis-patterns.md entry added for this pattern
```

### 5.3 Stage Completion Gate (AD Phase Done)

Before marking Stage 4 COMPLETE:

```
STAGE COMPLETION GATE:
[ ] AD-outbound-findings.md EXISTS with >=10 findings
[ ] AD-SYNTHESIS.md EXISTS with all 7 sections populated
[ ] AD-RESEARCH-GATE.md EXISTS with post-build verification (section 6)
[ ] AD-AUDIT-SYNTHESIS.md EXISTS with audit results
[ ] HANDOFF-AD-TO-CD.md EXISTS with acknowledgment protocol
[ ] STAGE-HEADER.md says COMPLETE in YAML + heading
[ ] CLAUDE.md updated to COMPLETE status
[ ] PIPELINE-MANIFEST.md updated: AD-F entries, R-4 status, R-2 decisions, lifecycle counts
[ ] BACKBONE.md updated: Stage 4 narrative, pipeline diagram, research chain table
[ ] RESEARCH-ACTIVE.md updated: R-4 application rates, EXT-AD-* entries
[ ] SOUL-DISCOVERIES.md has Stage 4 determination (new pieces or "none discovered")
[ ] axis-patterns.md has all 6 validated patterns with provenance headers
[ ] EXT-RESEARCH-REGISTRY.md has all EXT-AD-* categories
[ ] ACCUMULATED-IDENTITY-v2.md finalized
[ ] explorations/axis/CLAUDE.md created with scores
[ ] explorations/CLAUDE.md updated (AD: COMPLETE)
[ ] provenance/CLAUDE.md updated (stage-4: COMPLETE)
[ ] All 6 AD explorations scored >=32/40 for INCLUDE
[ ] 5 soul pieces verified, 0 violations across all AD explorations
[ ] Convention compliance verified across all 6 ADs
```

### 5.4 J-03 Test (Reproducibility)

A fresh agent with NO prior context must be able to answer these 5 questions from provenance alone:

1. **What did Stage 4 discover?** (Answer from AD-SYNTHESIS.md and AD-outbound-findings.md)
2. **What constraints did it inherit?** (Answer from AD-RESEARCH-GATE.md sections 1-4)
3. **What constraints does it pass forward?** (Answer from HANDOFF-AD-TO-CD.md)
4. **What research was consumed at what rate?** (Answer from AD-RESEARCH-GATE.md section 6)
5. **What quality bar was achieved?** (Answer from STAGE-HEADER.md section 4)

If any question is unanswerable, the chain is INCOMPLETE. Do not mark Stage 4 as COMPLETE.

---

## 6. INCREMENTAL VS DEFERRED: DECISION MATRIX

| Document | Incremental or Deferred? | Rationale |
|----------|--------------------------|-----------|
| AD-outbound-findings.md | **INCREMENTAL** (each finding written at discovery) | This is the single highest-value change from OD. OD's deferred approach caused the OD-F-005 collision and required 18-agent remediation. |
| AD-RESEARCH-GATE.md | **PRE-BUILD** (written before any building) | Research gate must block building until passed. OD had this right. |
| AD-CONVENTION-SPEC.md | **PRE-BUILD** (written before any building) | OD's 3 dialects required 43-agent remediation. Convention before building prevents this. |
| AD-SYNTHESIS.md | **DEFERRED** (written after all ADs built) | By nature requires cross-AD comparison. Sections 1-2 pre-populated, sections 3-7 deferred. |
| AD-AUDIT-SYNTHESIS.md | **DEFERRED** (written after audit) | Cannot exist before audit happens. |
| HANDOFF-AD-TO-CD.md | **DEFERRED** (written at stage end) | Requires complete picture of AD outcomes. |
| STAGE-HEADER.md | **HYBRID** (draft at start, updated throughout, finalized at end) | |
| ACCUMULATED-IDENTITY-v2.md | **HYBRID** (draft at start, findings added during build, finalized at end) | |
| PIPELINE-MANIFEST.md | **BATCHED** (lead updates between waves from AD-outbound-findings.md) | Contention prevention. |
| axis-patterns.md | **INCREMENTAL** (each pattern added after its exploration is built) | |
| EXT-RESEARCH-REGISTRY.md | **INCREMENTAL** (each EXT-AD category added when research is commissioned) | |

---

## 7. OD REMEDIATION LESSONS APPLIED TO AD

| OD Problem | Root Cause | AD Prevention |
|------------|-----------|---------------|
| Provenance never written | No enforcement gate, multi-session drift | Binary gates at Phase 0, per-exploration, and stage completion |
| OD-F-005 collision | Two agents independently assigned same ID | Reserved ID ranges per builder |
| 3 quality dialects | No convention spec before building | AD-CONVENTION-SPEC at Wave 0, before any building |
| 51 dark matter files | Research scattered across random directories | All findings written to AD-outbound-findings.md immediately |
| PIPELINE-MANIFEST stale | Nobody updated it during build | Lead batch-updates between waves |
| Inline headers create illusion of completeness | Rich headers but no formal chain | Gates check formal chain documents, not headers |
| MEMORY.md didn't track provenance status | Only tracked build/audit status | Stage completion gate includes explicit provenance checklist |
| ACCUMULATED-IDENTITY gap | v1 written but v2 never created | v2 draft created at Phase 0, updated incrementally |

---

## 8. PROVENANCE FILE DEPENDENCY GRAPH

```
Phase 0 (Pre-Build):
  HANDOFF-OD-TO-AD.md (READ) ──┐
  OD-outbound-findings.md (READ)─┤
  R-4 (READ) ───────────────────┤
  R-2 evaluation (READ) ────────┤
  OD-CONVENTION-SPEC (READ) ────┤
  ACCUMULATED-IDENTITY-v1.1 (READ)─┤
                                   v
                        AD-RESEARCH-GATE.md (WRITE)
                        AD-CONVENTION-SPEC.md (WRITE)
                        STAGE-HEADER.md draft (WRITE)
                        CLAUDE.md (WRITE)
                        AD-outbound-findings.md scaffold (WRITE)
                        ACCUMULATED-IDENTITY-v2 draft (WRITE)

Build Waves (Per AD Exploration):
  Builder discovers finding ──> AD-outbound-findings.md (APPEND)
  Builder applies EXT-* ──> EXT-RESEARCH-REGISTRY.md (APPEND)
  Builder scores exploration ──> axis-patterns.md (APPEND)
  Lead between waves ──> PIPELINE-MANIFEST.md (BATCH UPDATE)

Post-Build:
  All ADs built ──> AD-SYNTHESIS.md (WRITE)

Post-Audit:
  Audit complete ──> AD-AUDIT-SYNTHESIS.md (WRITE)
  Fixes applied ──> STAGE-HEADER.md section 4 (UPDATE)

Stage Close:
  Everything above ──> HANDOFF-AD-TO-CD.md (WRITE)
                  ──> BACKBONE.md (UPDATE)
                  ──> ACCUMULATED-IDENTITY-v2 (FINALIZE)
                  ──> All completion gate items (VERIFY)
```

---

## 9. OPEN QUESTIONS FOR LEAD

1. **AD-CONVENTION-SPEC.md scope:** Should AD create its own spec or extend OD-CONVENTION-SPEC.md with an AD addendum? Recommendation: Separate file that starts with "INHERITS: OD-CONVENTION-SPEC.md" and only adds axis-specific conventions.

2. **ACCUMULATED-IDENTITY-v2 location:** v1 and v1.1 live in `knowledge-architecture/`. Should v2 also live there, or move to `DESIGN-SYSTEM/provenance/`? Recommendation: Keep in `knowledge-architecture/` for consistency, but add a reference from `provenance/`.

3. **EXT-AD naming:** OD used per-OD categories (EXT-CONV, EXT-NARR, EXT-TASK, etc.). AD should use per-AD categories. Suggested: EXT-ZAXIS (AD-001), EXT-FAXIS (AD-002), EXT-BENTO (AD-003), EXT-SPIRAL (AD-004), EXT-CHOREO (AD-005), EXT-AXCREATIVE (AD-006). Or simpler: EXT-AD-001 through EXT-AD-006.

4. **Finding count expectation:** OD produced 17 findings across 6 explorations (~2.8 per exploration). AD should target similar density. The reserved ranges of 4 per exploration (8 for crown jewel) provide headroom.

5. **R-2 consumption:** HANDOFF says 25 applicable, 2 SOUL FAIL. The r2-evaluation.md from OD re-enrichment gives specific recommendations. AD must make explicit per-finding decisions during Phase 0 research gate.
