# Commit Archaeology: AD vs OD Provenance Through Git History

## A. AD Commit Timeline (Chronological)

### Pre-AD Infrastructure (Feb 9, before AD proper)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 1 | `56bd9cc` | Feb 9, 20:43 | analysis(ad-skeleton): 15-agent deep gap analysis | 24 | 11,563 | 0 | Analysis | NO -- scratchpad only (`_ad-skeleton-analysis/`) |
| 2 | `68f0bc3` | Feb 9, 21:15 | synthesis(ad): 11-agent master execution spec | 11 | 8,411 | 0 | Synthesis | NO -- scratchpad only (`_ad-skeleton-analysis/master-synthesis/`) |

**Subtotal:** 35 files, 19,974 lines. **0 lines into formal provenance.**

### AD Execution (Feb 10)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 3 | `4526a31` | Feb 10, 10:22 | audit(ad-006): AD execution + PA audit -- 6 explorations, 28 findings | 168 | 45,553 | 117 | Build+Audit+Provenance | **PARTIAL** |

This single mega-commit contains:
- 6 AD HTML explorations (AD-001 through AD-006): ~10,400 lines of product
- 61 `_ad-execution/` scratchpad files: ~12,882 lines (NOT in provenance)
- 6 Stage 4 provenance chain files: ~1,644 lines (**YES** -- in provenance)
- 15 `_perceptual-research/` files: ~10,000+ lines (NOT in provenance)
- 4 `_plan-audit/` files: ~2,100+ lines (NOT in provenance)
- 1 `ACCUMULATED-IDENTITY-v2.md`: 518 lines (**YES** -- formal identity doc)
- Comprehensive audit visual/structural reports relocated: ~2,000+ lines
- 16 `_ad-skeleton-analysis/gap-analysis/` empty placeholder files
- 11 `_ad-skeleton-analysis/master-synthesis/` empty placeholder files

### Perceptual Audit Infrastructure (Feb 11, 01:38)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 4 | `00b3057` | Feb 11, 01:38 | audit(pa): lock sheet + preflight | 2 | 277 | 0 | Audit infra | NO -- scratchpad (`_perceptual-audit/`) |

### PA Fix Execution (Feb 11, 01:38)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 5 | `4a4fa08` | Feb 11, 01:38 | fix(ad-001): Z-Pattern | 7 | 824 | 6 | Fix | PARTIAL (HTML fix YES, audit reports NO) |
| 6 | `b34698e` | Feb 11, 01:38 | fix(ad-002): F-Pattern | 7 | 969 | 9 | Fix | PARTIAL |
| 7 | `0d55b35` | Feb 11, 01:38 | fix(ad-003): Bento Grid | 7 | 837 | 20 | Fix | PARTIAL |
| 8 | `315784d` | Feb 11, 01:38 | fix(ad-004): Spiral | 7 | 952 | 9 | Fix | PARTIAL |
| 9 | `776ba2f` | Feb 11, 01:38 | fix(ad-005): Choreography | 14 | 2,180 | 9 | Fix | PARTIAL |
| 10 | `a231977` | Feb 11, 01:38 | fix(ad-006): Compound | 13 | 2,421 | 2 | Fix | PARTIAL |

Each fix commit includes: 1 HTML fix (product) + 5-12 audit report files in `_perceptual-audit/AD-XXX/` (scratchpad, NOT provenance).

### PA Verification + Post-mortem (Feb 11)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 11 | `360091f` | Feb 11, 01:38 | verify(pa): visual verification 6/6 PASS | 1 | 149 | 0 | Verification | NO -- scratchpad |
| 12 | `ca3da24` | Feb 11, 04:31 | analysis(pa): skill evolution post-mortem | 5 | 2,781 | 0 | Analysis | NO -- scratchpad (`_skill-evolution/`) |

### AD Commit Summary

| Metric | Value |
|--------|-------|
| **Total AD commits** | **12** |
| **Total files changed** | **276** |
| **Total lines added** | **86,916** |
| **Total lines deleted** | **172** |
| **Lines into formal provenance chain** | **~2,162** (1,644 stage-4 chain + 518 ACCUM-ID-v2) |
| **Lines into scratchpad/working dirs** | **~74,354** |
| **Lines into product HTML** | **~10,400** |
| **Provenance formalization rate** | **~2.5%** |

---

## B. OD Commit Timeline (Chronological)

### OD Creation (Feb 7)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 1 | `c8f5700` | Feb 7, 07:58 | feat(od-phase): Add 6 OD explorations | 29 | 31,420 | 44 | Build | PARTIAL (HTML yes, execution journal NO) |
| 2 | `1891d34` | Feb 7, 08:01 | chore: Update OD-CHECKPOINT status | 2 | 183 | 17 | Status | NO |
| 3 | `3ee4941` | Feb 7, 08:05 | fix(od-threading): Fix R3 finding IDs | 3 | 28 | 24 | Fix | YES (header correction) |

### OD Audit Cycle (Feb 7-8)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 4 | `27a0c6f` | Feb 7, 10:20 | docs: OD retrospective + protocol v2 | 1 | 589 | 0 | Retrospective | NO (meta-process doc) |
| 5 | `f5357a7` | Feb 7, 17:07 | fix(od-audit): Apply 16 fixes to 6 OD HTMLs | 6 | 447 | 136 | Fix | YES (product HTML fixed) |

### OD Provenance Remediation (Feb 8)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 6 | `f46f293` | Feb 8, 10:57 | docs: 29 agent scratchpad reports | 29 | 9,275 | 0 | Scratchpad archive | NO |
| 7 | `72c608d` | Feb 8, 10:57 | docs: Consolidated audit results + prompt map | 2 | 1,097 | 27 | Audit synthesis | NO (remained in KA dir) |
| 8 | `cbd525e` | Feb 8, 10:57 | docs: Fix execution prompt + protocol v3 | 2 | 1,536 | 0 | Meta-process | NO |
| 9 | `effc7bd` | Feb 8, 10:57 | docs: Workflow metacognition analysis | 11 | 5,135 | 0 | Analysis | NO (meta-process) |
| 10 | `2c572b5` | Feb 8, 10:58 | docs: 15 gap analysis reports | 15 | 11,237 | 0 | Diagnostic | NO (scratchpad) |
| 11 | `b4af467` | Feb 8, 10:58 | docs: Deep dive + plan revisions | 10 | 2,636 | 0 | Planning | NO (scratchpad) |
| 12 | `b5597bf` | Feb 8, 10:58 | docs: Remediation handoff + prompts | 3 | 925 | 0 | Planning | NO (instructions) |
| 13 | `b0e5185` | Feb 8, 11:52 | **provenance(od-chain): Formal OD provenance chain** | 27 | 5,423 | 336 | **PROVENANCE** | **YES -- 8 new files, 13 updates** |

### OD Documentation Fixes (Feb 8, afternoon)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 14 | `a13d277` | Feb 8, 17:28 | docs: Documentation audit reports | 4 | 1,173 | 2 | Audit | NO (but identified provenance gaps) |
| 15 | `0a4ea76` | Feb 8, 17:29 | docs: Fix stale OD status in 4 files | 4 | 81 | 14 | Fix | **YES** (CLAUDE.md updates in provenance dirs) |
| 16 | `77347c2` | Feb 8, 17:29 | docs: Fix OD tense, finding counts | 6 | 30 | 25 | Fix | **YES** (corrects OD-SYNTHESIS, CLAUDE.md) |

### OD Re-Enrichment (Feb 9)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 17 | `826ce3a` | Feb 9, 08:36 | **enrichment(od): Re-enrich 6 OD explorations** | 92 | 15,000 | 3,035 | **RE-ENRICHMENT** | **YES** -- 43-agent team, Mode C provenance |

### Comprehensive Audit (Feb 9 -- cross-phase, covers OD+DD+AD)

| # | Hash | Date | Message | Files | +Lines | -Lines | Type | In Provenance? |
|---|------|------|---------|-------|--------|--------|------|----------------|
| 18 | `71dc02c` | Feb 9, 16:45 | audit(comprehensive): ~58-agent hierarchical audit | 78 | 9,544 | 122 | Audit+Fix | **YES** (fixes to OD/DD HTMLs + provenance metadata) |

### OD Commit Summary

| Metric | Value |
|--------|-------|
| **Total OD-related commits** | **18** (excluding readme/meta docs) |
| **Total files changed** | **324** |
| **Total lines added** | **95,759** |
| **Total lines deleted** | **3,882** |
| **Provenance-producing commits** | **5** (b0e5185, 826ce3a, 71dc02c, 0a4ea76, 77347c2) |
| **Lines into formal provenance chain** | **~24,000+** (5,423 chain build + 15,000 re-enrichment + 9,544 comprehensive audit adjustments) |
| **Provenance formalization rate** | **~25%** |

---

## C. Comparison Matrix

| Metric | OD | AD | Gap | Assessment |
|--------|----|----|-----|------------|
| **Total commits** | 18 | 12 | 6 fewer | AD condensed into fewer, larger commits |
| **Calendar days** | 3 (Feb 7-9) | 3 (Feb 9-11) | Parity | Same wall time |
| **Total lines produced** | 95,759 | 86,916 | ~9K fewer | Roughly comparable raw output |
| **Enrichment passes** | 2 (initial + re-enrichment) | 1 (initial only) | **1 MISSING** | AD never got re-enriched |
| **Remediation cycles** | 1 (b0e5185: 18-agent, 5 waves) | 0 | **1 MISSING** | AD provenance chain was never remediated |
| **Audit commits** | 3 (granular + comprehensive + doc audit) | 2 (structural in 4526a31 + perceptual) | 1 fewer | AD audit was perceptual only, no granular |
| **Fix commits** | 2 (f5357a7 + 71dc02c fixes) | 6 (PA fixes per-page) | +4 | AD had more fix commits but narrower scope |
| **Provenance-producing commits** | 5 | 1 | **4 MISSING** | AD had exactly 1 commit that touched provenance |
| **Lines in formal provenance chain** | 3,851 | 1,644 | **2,207 fewer** | AD chain is 43% the size of OD chain |
| **Provenance chain files** | 8 files | 6 files | 2 fewer | AD missing CONVENTION-SPEC, RESEARCH-GATE |
| **Verification items** | 104 (94 PASS) | 0 | **104 MISSING** | AD provenance was never verified |
| **Pre-execution planning commits** | 6 (gap analysis + deep dive + revisions + prompts + metacognition + doc audits) | 2 (skeleton analysis + master spec) | 4 fewer | But AD planning was informed by OD lessons |
| **Scratchpad lines** | ~32,000 | ~74,354 | +42K more | AD produced MORE raw work but LESS provenance |
| **Meta-process docs** | 3 (retrospective v2, v3, metacognition) | 1 (skill evolution post-mortem) | 2 fewer | AD had less reflection |

---

## D. What AD Produced But Didn't Formalize

### Category 1: AD Skeleton Analysis (19,974 lines -- ZERO formalized)

**Commits:** `56bd9cc`, `68f0bc3`

| File Group | Lines | Content | Should Be Formalized? |
|------------|-------|---------|----------------------|
| 8 skeleton dimension analyses | ~5,200 | Deep analysis of AD phase skeleton from 7 dimensions | YES -- contains structural definitions needed by CD |
| 16 gap analysis files | ~5,800 | 40 gaps identified (5C/10H/18M/7L) | YES -- gap closure status should be in provenance |
| Weaver synthesis | 584 | Cross-references, contradictions, emergent patterns | YES -- key discoveries |
| 5 domain synthesis files | ~5,100 | Structural defs, provenance arch, identity loop, rules, team execution | Partially -- MASTER-AD-EXECUTION-SPEC consumed some |
| 5 cross-check files | ~1,888 | Verification of synthesis accuracy | NO -- internal QA |
| MASTER-AD-EXECUTION-SPEC | 1,407 | Self-contained execution spec | NO -- consumed by execution (served its purpose) |

### Category 2: AD Execution Scratchpad (12,882 lines -- ZERO formalized into provenance chain)

**Commit:** `4526a31` (embedded in mega-commit)

| File Group | Lines | Content | Should Be Formalized? |
|------------|-------|---------|----------------------|
| 6 research packages | ~2,050 | External research per AD page | **YES -- should feed AD-RESEARCH-GATE or EXT-RESEARCH-REGISTRY** |
| AD-CONVENTION-SPEC | 821 | Convention rules for AD pages | **YES -- equivalent of OD-CONVENTION-SPEC (which IS in provenance)** |
| AD-RESEARCH-GATE | 96 | Research gate document | **YES -- equivalent of OD-RESEARCH-GATE (which IS in provenance)** |
| R-4-AD-EVALUATION | 429 | R4 evaluation against AD explorations | **YES -- research evaluation should be in chain** |
| 6 builder findings | ~850 | Builder-discovered findings (A through F) | **YES -- raw finding data** |
| 3 scribe reports + 3 spotchecks | ~1,000 | Provenance scribe work | PARTIAL -- scribe output should flow to chain |
| 3 identity deltas + 1 checkpoint | ~345 | Identity evolution tracking | **YES -- identity deltas feed ACCUMULATED-IDENTITY** |
| 18 hygiene reports (spacing/overflow/fresh-eyes) | ~4,100 | Per-page hygiene audits | NO -- internal QA (but findings should be summarized) |
| Fix reports, verification, audit synthesis | ~2,000 | Fix execution records | NO -- internal QA |
| r2-ad-mapping | 200 | R2 evaluation against AD | **YES -- should be in formal R-evaluation chain** |

### Category 3: Perceptual Research (10,000+ lines -- ZERO formalized)

**Commit:** `4526a31` (embedded in mega-commit)

| File Group | Lines | Content | Should Be Formalized? |
|------------|-------|---------|----------------------|
| 15 perceptual research files | ~10,000 | Skill analysis, design perception science, audit methodology, team architecture, pipeline map, enrichment protocol | NO -- internal methodology development |

### Category 4: Plan Audit Files (2,100+ lines -- ZERO formalized)

**Commit:** `4526a31` (embedded in mega-commit)

| File Group | Lines | Content | Should Be Formalized? |
|------------|-------|---------|----------------------|
| 4 plan audit files | ~2,100 | Cross-reference gaps, skill emphasis gaps, topology risks, enrichment cascade gaps | NO -- internal planning QA |

### Category 5: Perceptual Audit Reports (8,500+ lines -- ZERO formalized)

**Commits:** `00b3057`, `4a4fa08` through `a231977`, `360091f`

| File Group | Lines | Content | Should Be Formalized? |
|------------|-------|---------|----------------------|
| Lock sheet | 149 | 81 decisions classifying conventions | MAYBE -- useful for CD phase |
| Preflight report | 128 | Pre-audit verification | NO |
| 6x AUDIT-REPORT.md | ~1,800 | Per-page synthesized audit reports | **YES -- should feed AD-AUDIT-SYNTHESIS** |
| 6x findings-alpha/beta | ~3,300 | Raw auditor findings | NO -- raw data |
| 6x cold-look-alpha/beta | ~400 | First-impression snapshots | NO |
| 6x fix-report.md | ~600 | Fix application records | PARTIAL |
| 6x weaver-draft.md (AD-005, AD-006 only) | ~880 | Weaver synthesis drafts | NO -- intermediate |
| FIX-VERIFICATION-REPORT | 149 | Verification of all fixes | PARTIAL |

### Category 6: Skill Evolution Post-Mortem (2,781 lines -- ZERO formalized)

**Commit:** `ca3da24`

| File Group | Lines | Content | Should Be Formalized? |
|------------|-------|---------|----------------------|
| failure-analysis.md | 447 | 7 human interventions mapped | NO -- meta-process |
| od-benchmark.md | 473 | Transferable OD patterns | NO -- meta-process |
| skill-redesign.md | 304 | Skill consolidation rationale | NO -- meta-process |
| team-structure.md | 1,253 | Future team blueprint | NO -- meta-process |
| SYNTHESIS.md | 304 | Coherence verification | NO -- meta-process |

---

## E. Critical Findings

### Finding 1: The Mega-Commit Problem
AD's entire execution was compressed into a single 168-file commit (`4526a31`). This commit contains:
- Product HTML (should be tracked separately)
- Formal provenance chain files (the actual deliverable)
- 61 scratchpad files (working artifacts)
- 15 perceptual research files (methodology development)
- 4 plan audit files (planning QA)
- Relocated comprehensive audit files from a different phase

This makes it impossible to distinguish what was deliberate provenance vs what was bundled in.

### Finding 2: AD Never Got Its Own Provenance Remediation
OD had a dedicated 18-agent, 5-wave provenance remediation (commit `b0e5185`) that:
- Produced 8 new provenance chain files
- Updated 13 existing files
- Closed 33 identified gaps
- Ran 104-item verification (94 PASS)

AD had **zero equivalent**. The Stage 4 provenance files were created during the execution mega-commit with no subsequent remediation, verification, or gap analysis of the chain itself.

### Finding 3: AD Convention Spec and Research Gate Exist But Are Not In Provenance
`AD-CONVENTION-SPEC.md` (821 lines) sits in `_ad-execution/` scratchpad. Its OD equivalent (`OD-CONVENTION-SPEC.md`, 468 lines) was elevated to formal provenance in `stage-3-organization-od/`.

`AD-RESEARCH-GATE.md` (96 lines) also sits in scratchpad. Its OD equivalent (`OD-RESEARCH-GATE.md`, 440 lines) is in formal provenance.

### Finding 4: Perceptual Audit Findings Never Reached AD-AUDIT-SYNTHESIS
The 6 AUDIT-REPORT.md files from the perceptual audit (commits `4a4fa08` through `a231977`) contain 18 unique perceptual findings per the commit message. These findings do NOT appear to have been integrated back into the Stage 4 `AD-AUDIT-SYNTHESIS.md` (which was written BEFORE the PA was conducted -- it's in the Feb 10 mega-commit).

### Finding 5: Re-Enrichment Gap
OD had a full 43-agent re-enrichment pass (`826ce3a`, 15,000 lines, Mode C provenance). AD's explorations were fixed by the perceptual audit but never re-enriched through a formal pipeline. The PA fixes were code changes (width adjustments, footer additions) without the full research-to-enrichment loop.

### Finding 6: Provenance Chain Size Disparity
- OD chain: 8 files, 3,851 lines
- AD chain: 6 files, 1,644 lines (43% of OD)
- Missing AD equivalents: CONVENTION-SPEC, RESEARCH-GATE

### Finding 7: Verification Gap
OD provenance verification: 104 items, 94 PASS (90.4%)
AD provenance verification: 0 items, never performed
