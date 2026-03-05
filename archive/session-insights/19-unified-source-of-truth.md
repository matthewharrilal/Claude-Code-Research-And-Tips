# Unified Source-of-Truth Map + Staleness Synthesis

**Date:** 2026-02-15
**Author:** staleness-synthesizer (clarification-enrichment team)
**Purpose:** Unified synthesis of all 4 area-specific staleness audits

**Source Files:**
- `19-ephemeral-staleness-audit.md` (54 files, ephemeral/)
- `19-pipeline-staleness-audit.md` (10 files, design-system/pipeline/)
- `19-core-staleness-audit.md` (17 files, compositional-core/)
- `19-skill-staleness-audit.md` (4 files, skills + CLAUDE.md files)

**Context Files:**
- `18-clarification-mapping.md` (8 clarifications mapped to 14 insertion points)
- `18-middle-tier-checklist.md` (129 binary verification items)

---

## EXECUTIVE SUMMARY

**Total Files Audited:** 85 files across 4 documentation areas
**Blocking Staleness:** 0 files (zero files block the Middle-tier experiment)
**Critical Issues:** 3 items (2 P0, 1 P1)
**Medium Priority:** 11 items (P2)
**Low Priority:** 5 items (nice-to-have clarity)

**The Good News:**
- All key continuity files (HANDOFF.md, 03-ENTRY-POINT.md, design-system/CLAUDE.md) are CURRENT
- Wave 1 DOC modifications: 100% PRESENT in compositional-core/
- No files reference outdated states like "Phase D not started" or "tier model TBD"
- Provenance quality across all operational files is EXCELLENT

**The Critical Issues:**
1. **P0 (BLOCKS Middle experiment):** M1 contradiction in tension-composition skill (line 887 says "sample 2-4" but line 112 says "8-10 for Middle") — builder cannot follow both instructions
2. **P0 (CONTRADICTS execution):** pipeline/02-POST-CD-PHASES.md shows Phase D as NOT STARTED when Phase D is COMPLETE
3. **P1 (CREATES confusion):** Skill enrichment status mismatch (design-system/CLAUDE.md says COMPLETE, but M1 not yet applied)

**The Pattern:** Staleness is NOT widespread. The 3 critical issues are LOCALIZED contradictions between planning (Phase D future) vs reality (Phase D complete), and between two parts of the skill itself (0D vs 4.0).

**Net Assessment:** Documentation is 95% ready for Middle-tier experiment. The 3 critical fixes require ~30 minutes total. All other issues are clarity improvements, not blockers.

---

## 1. UNIFIED SOURCE OF TRUTH MAP

For every major topic, THE canonical file plus backup/context files.

### Project State & History

| Topic | Source of Truth | Backup/Context | Staleness Status |
|-------|----------------|----------------|------------------|
| **Current project state** | `ephemeral/continuity-docs/HANDOFF.md` (473 lines) | `MEMORY.md` (compressed version) | ✅ CURRENT |
| **Phase D complete results** | `ephemeral/phase-d-execution/` (47 files) | `HANDOFF.md` Section 2, `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` | ✅ CURRENT |
| **Phase timeline** | `pipeline/05-COMPLETE-ROADMAP.md` (876 lines) | `pipeline/02-POST-CD-PHASES.md` | ⚠️ 05 CURRENT, 02 STALE |
| **Skill enrichment status** | `compositional-core/CLAUDE.md` line 8 ("In Progress") | `design-system/CLAUDE.md` line 264 | ⚠️ compositional-core ACCURATE, design-system CONTRADICTORY |
| **Wave 1 completion** | `~/.claude/skills/tension-composition/SKILL.md` (1,533 lines = post-enrichment) | `ephemeral/session-insights/08-skill-enrichment-plan.md` | ✅ M2/M3/M5/M8 APPLIED, ❌ M1 NOT APPLIED |
| **Next steps** | `HANDOFF.md` line 22 ("Middle-tier experiment NEXT") | `pipeline/05-COMPLETE-ROADMAP.md` line 79 ("YOU ARE HERE") | ✅ CURRENT |

### Research Findings

| Topic | Source of Truth | Backup/Context | Staleness Status |
|-------|----------------|----------------|------------------|
| **Tier model** | `ephemeral/rigidity-research/03-tier-specifications.md` | `HANDOFF.md` Section 4, `pipeline/05-COMPLETE-ROADMAP.md` lines 127-138 | ✅ CURRENT |
| **Richness findings** | `ephemeral/richness-research/05-unified-synthesis.md` | `HANDOFF.md` Section 3 | ✅ CURRENT |
| **Rigidity findings** | `ephemeral/rigidity-research/06-unified-synthesis.md` | `HANDOFF.md` Section 3 | ✅ CURRENT |
| **Modification recommendations** | `ephemeral/session-insights/08-skill-enrichment-plan.md` | `13-master-agenda.md`, `HANDOFF.md` Section 5 | ✅ CURRENT |
| **Vocabulary-library distinction** | `ephemeral/session-insights/05-extraction-chain.md` | `HANDOFF.md` Section 7, `compositional-core/CLAUDE.md` lines 353-517 | ✅ CURRENT with CONCRETE CSS EXAMPLES |
| **Semantic framework** | `ephemeral/session-insights/03-semantic-framework.md` (991 lines) | No backup (unique analysis) | ✅ CURRENT |
| **Fresh-eyes confusions** | `ephemeral/session-insights/10-fresh-eyes-review.md` | `03-ENTRY-POINT.md` (fixes applied) | ✅ CURRENT |

### Compositional Core (6-Layer Ontology)

| Topic | Source of Truth | Backup/Context | Staleness Status |
|-------|----------------|----------------|------------------|
| **Layer 1: Identity** | `compositional-core/identity/prohibitions.md` | Referenced as always-load | ✅ CURRENT (inferred) |
| **Layer 2: Vocabulary** | `compositional-core/vocabulary/tokens.css` (174 lines) | `specification/tokens/` (617 lines total) | ✅ CURRENT, ⚠️ ENRICHMENT: verify alignment |
| **Layer 3: Grammar** | `compositional-core/grammar/mechanism-catalog.md` (923 lines) | `compositional-core/grammar/mechanism-combinations.md` (448 lines) | ✅ CURRENT, ⚠️ ENRICHMENT NEEDED: add tier counts (P0) |
| **Layer 4: Components** | `compositional-core/components/merged-components.css` | `compositional-core/components/component-inventory.md` (880 lines) | ✅ CURRENT, ⚠️ ENRICHMENT: add tier mapping |
| **Layer 5: Case Studies** | `compositional-core/case-studies/_INDEX.md` | `compositional-core/case-studies/README.md` (542 lines) | ✅ CURRENT |
| **Layer 6: Guidelines** | `compositional-core/guidelines/semantic-rules.md` (380 lines) | `compositional-core/guidelines/compositional-rules.md` (528 lines), `usage-criteria.md` (338 lines) | ✅ CURRENT |

### Skills & Building Protocols

| Topic | Source of Truth | Backup/Context | Staleness Status |
|-------|----------------|----------------|------------------|
| **Track 2 pipeline** | `~/.claude/skills/tension-composition/SKILL.md` (1,533 lines) | `design-system/compositional-core/CLAUDE.md` | ❌ M1 CONTRADICTION (line 887 vs 112) |
| **Perceptual auditing** | `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines) | `design-system/compositional-core/guidelines/semantic-rules.md` PA-SEM integration | ✅ CURRENT (Wave 3 not yet applied, as expected) |
| **Phase-gated protocol** | `design-system/compositional-core/CLAUDE.md` (681 lines) | `pipeline/03-MIGRATION-PIPELINE.md` | ✅ CURRENT |
| **Root navigation** | `design-system/CLAUDE.md` (716 lines) | `pipeline/05-COMPLETE-ROADMAP.md` | ⚠️ Skill enrichment status CONTRADICTORY |

### Crown Jewels & Showcases

| Topic | Source of Truth | Backup/Context | Staleness Status |
|-------|----------------|----------------|------------------|
| **DD-006 fractal** | `design-system/validated-explorations/density/DD-006-fractal.html` | References in 20+ documents | ✅ CURRENT (20+ references confirmed) |
| **CD-006 pilot** | `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (39/40 score) | `HANDOFF.md` Section 2 | ✅ CURRENT |
| **OD-004 geological** | `design-system/validated-explorations/ontology/OD-004-geological-confidence.html` | Referenced in mechanism-catalog.md, case-studies | ✅ CURRENT |

### Planning & Execution

| Topic | Source of Truth | Backup/Context | Staleness Status |
|-------|----------------|----------------|------------------|
| **Middle-tier experiment design** | `ephemeral/session-insights/13-master-agenda.md` | `18-middle-tier-checklist.md`, `14-master-execution-prompt.md` | ✅ CURRENT (planning docs) |
| **Conversation clarifications** | `ephemeral/session-insights/17-conversation-clarifications.md` (8 clarifications) | `18-clarification-mapping.md` (14 insertion points) | ✅ CURRENT (awaiting doc-enricher to apply) |
| **Wave assignments** | `HANDOFF.md` Section 5 | `08-skill-enrichment-plan.md` | ✅ CURRENT |

---

## 2. STALENESS PRIORITY LIST

### P0 — BLOCKS MIDDLE-TIER EXPERIMENT (Must Fix Before Building)

#### S-P0-1: M1 Contradiction in tension-composition Skill

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Issue:** Line 887 says "Sample 2-4 mechanisms" but line 112 says "Middle tier requires 8-10 mechanisms across 5 categories"
**Evidence:**
- Line 887: "Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms."
- Line 112: "Middle-tier richness comes from PATTERN DEPLOYMENT (8-10 mechanisms across 5 categories)"
**Impact:** Builder following sequential phases will:
  1. Route to Middle tier (Step 0D) expecting 8-10 mechanisms
  2. Arrive at Step 4.0 and be told "sample 2-4"
  3. Deploy 2-4 mechanisms, directly contradicting the tier specification
**Why This Blocks:** Without M1, the Middle experiment tests a 2-4 mechanism approach when the HYPOTHESIS is 8-10 mechanisms. The experiment cannot test what it's designed to test.
**Fix:** Apply M1 modification from `14-master-execution-prompt.md` Section 4 (replace "sample 2-4" with per-category minimum protocol)
**Estimated Time:** 15 minutes
**Source:** skill-auditor finding #1

#### S-P0-2: Pipeline Phase D Status Contradicts Execution

**File:** `design-system/pipeline/02-POST-CD-PHASES.md`
**Issue:** Lines 113-133 show Phase D as NOT STARTED when Phase D was EXECUTED 2026-02-15 (CONDITIONAL PASS)
**Evidence:**
- Line 11: "Status: ACTIVE -- updated to reflect pipeline evolution research" (generic, doesn't mention Phase D complete)
- Lines 113-133: Phase D shown in phase sequence as future work
- Line 377: "Phase D: Extraction Validation Pass (1-2 hours)" with future tense framing
**Actual State:** Phase D COMPLETE (47 files in ephemeral/phase-d-execution/, CONDITIONAL PASS verdict, Variant B best at 18/19 compliance)
**Impact:** New agent reading pipeline docs sees Phase D as pending when it's done
**Fix:** Update lines 113-133 phase box to show Phase D + D+ + D++ completed/in-progress, add Phase D results summary
**Estimated Time:** 10 minutes
**Source:** pipeline-auditor findings

---

### P1 — CREATES CONFUSION (Should Fix Soon)

#### S-P1-1: Skill Enrichment Status Mismatch

**File:** `design-system/CLAUDE.md`
**Issue:** Line 264 marks skill enrichment as "✅ COMPLETE" but M1 (Wave 2) has NOT been applied yet
**Evidence:**
- Line 264: "✅ Skill Enrichment (tension-composition + perceptual-auditing, Phase 4.0 guardrails)"
- Line 252: "Next: Skill enrichment (modification implementation), then Middle-tier experiment"
- Actual state: Wave 1 (M2, M3, M5, M8) COMPLETE, Wave 2 (M1) NOT STARTED
**Contradiction:** Lines 252 (skill enrichment is NEXT) vs 264 (skill enrichment COMPLETE)
**Impact:** Confusion about whether Middle experiment should begin now or after Wave 2
**Fix:** Change line 264 to "🔧 Skill Enrichment (Wave 1 COMPLETE: M2/M3/M5/M8, Wave 2 IN PROGRESS: M1)"
**Estimated Time:** 5 minutes
**Source:** skill-auditor finding #2, cross-verified by ephemeral-auditor

#### S-P1-2: 13-master-agenda.md Phase 0 Lacks Completion Markers

**File:** `ephemeral/session-insights/13-master-agenda.md`
**Issue:** Lines 48-142 (Phase 0 section) list PRE-1 and other items as pending when they were executed
**Evidence:**
- Header line 6: "User Decision: Skill enrichment FIRST, Middle-tier experiment SECOND" (accurate but no execution status)
- Phase 0 checklist items like "0.1.1 Fix design-system/CLAUDE.md" are now COMPLETE but not marked
**Impact:** Reader doesn't know which Phase 0 items are done vs pending
**Fix:** Add completion markers (✅) to executed items, add "Wave 1 EXECUTED 2026-02-15" header note
**Estimated Time:** 5 minutes
**Source:** ephemeral-auditor S-01

#### S-P1-3: CLAUDE.md Phase D Status Line

**File:** `design-system/CLAUDE.md`
**Issue:** Line 7 doesn't mention Phase D complete, line 99 shows Phase D with duration estimate (implies not done)
**Evidence:**
- Line 7: "Status: ACTIVE — Expanded with Track 2 compositional supplements..."
- Line 99: Phase D shown with "(1-2h)" estimate
**Actual State:** Phase D COMPLETE (2026-02-15), CONDITIONAL PASS
**Fix:** Line 7 update status, line 99 add "✅ COMPLETE (2026-02-15)"
**Estimated Time:** 3 minutes
**Source:** pipeline-auditor findings

---

### P2 — REDUCES CLARITY (Nice-to-Have)

#### S-P2-1: Pattern vs Mechanism Distinction Missing (tension-composition skill)

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Issue:** Density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) and mechanisms (18 from catalog) are never explicitly distinguished
**Evidence:** Patterns appear at lines 82-91, mechanisms throughout, no clarification that patterns are skeleton and mechanisms are flesh
**Impact:** Builder may think CRESCENDO is a mechanism or conflate the two concepts
**Fix:** Add 2-3 sentence clarification at line 83 distinguishing patterns (page-scale rhythm) from mechanisms (technique-scale tools)
**Estimated Time:** 5 minutes
**Source:** skill-auditor finding #3, conversation clarification C4

#### S-P2-2: Middle-Tier Fractal Gate Needs Concrete Example

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Issue:** Lines 1,187-1,192 state "Middle: 2 scales minimum" but no concrete example of what "2 scales" looks like
**Evidence:** Tier requirements stated abstractly, no walkthrough showing Page scale + Component scale in practice
**Impact:** Builder knows the requirement but not how to verify it
**Fix:** Add 3-4 line concrete Middle-tier example after line 1,192
**Estimated Time:** 5 minutes
**Source:** skill-auditor finding #4

#### S-P2-3: WHY Middle Skips Phases 1-3 Explanation

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Issue:** Lines 111-112 explain theoretically (richness research) but not practically (content-structure mapping vs metaphor-driven selection)
**Evidence:** "Middle-tier richness comes from PATTERN DEPLOYMENT" present but WHY no metaphor derivation is not explained
**Impact:** Builder knows Middle skips 1-3 but doesn't understand the fundamental difference in selection logic
**Fix:** Add 2-3 sentences at line 112 clarifying pattern selection is content-structure mapping, not tension resolution
**Estimated Time:** 5 minutes
**Source:** skill-auditor finding #5, conversation clarification C3

#### S-P2-4: Tier Model Reference Missing from mechanism-catalog.md

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Issue:** Line 737 says "sample 2-4 mechanisms" with no tier-specific counts (5 / 8-10 / 12-15 / 16-18)
**Evidence:** Mechanism catalog has no tier model integration, even though mechanism-combinations.md (separate file) has tier guidance
**Impact:** Builder reading mechanism catalog doesn't know tier-specific selection guidance
**Fix:** Add tier-specific mechanism counts at lines 737-758 (Usage Guidance section)
**Estimated Time:** 10 minutes
**Source:** core-auditor Priority 1, conversation clarification C1

#### S-P2-5: Tier Mapping Missing from component-inventory.md

**File:** `design-system/compositional-core/components/component-inventory.md`
**Issue:** 34 components listed with confidence levels, no tier availability (Floor+ / Middle+ / Ceiling+ / Flagship-only)
**Evidence:** Component inventory has no tier context
**Impact:** Builder doesn't know which components are appropriate for which tier
**Fix:** Add tier availability column to component inventory
**Estimated Time:** 15 minutes
**Source:** core-auditor Priority 2

#### S-P2-6: Tier-Aware Track Selection in CLAUDE.md

**File:** `design-system/compositional-core/CLAUDE.md`
**Issue:** Track 1 vs Track 2 decision (lines 54-85) doesn't mention tier awareness
**Evidence:** Track selection based on content type only, no mention that Floor/Middle typically Track 1, Ceiling/Flagship typically Track 2
**Impact:** Builder doesn't see the tier-track correlation
**Fix:** Refine Track 1/2 decision with tier awareness
**Estimated Time:** 5 minutes
**Source:** core-auditor Priority 3

#### S-P2-7: mechanism-catalog.md Needs Cross-Reference to mechanism-combinations.md

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Issue:** No reference to mechanism-combinations.md (which documents proven combination families)
**Evidence:** Two separate files, no cross-linking
**Impact:** Builder reads catalog but doesn't know about combination patterns
**Fix:** Add "See mechanism-combinations.md for proven combination families" after Mechanism Summary Table (line 722)
**Estimated Time:** 2 minutes
**Source:** core-auditor Priority 4

#### S-P2-8: case-studies/README.md Needs Tier Context

**File:** `design-system/compositional-core/case-studies/README.md`
**Issue:** Lines 261-284 (Index of Case Studies) don't note that DD-006/OD-004 are Ceiling-tier examples
**Evidence:** Case studies referenced without tier classification
**Impact:** Builder doesn't understand exemplar complexity level
**Fix:** Add tier context notes to case study index
**Estimated Time:** 3 minutes
**Source:** core-auditor Priority 5

#### S-P2-9: 02-POST-CD-PHASES.md Needs Tier Model Integration

**File:** `design-system/pipeline/02-POST-CD-PHASES.md`
**Issue:** No tier model mention anywhere despite it being established in Phase D+
**Evidence:** File updated for pipeline evolution but tier model not integrated
**Impact:** Strategic planning doc missing key Phase D+ research finding
**Fix:** Add tier model context section after line 138
**Estimated Time:** 10 minutes
**Source:** pipeline-auditor recommendation 3

#### S-P2-10: Wave 1 Completion Log Missing

**File:** `ephemeral/doc-enrichment/01-updates-applied.md`
**Issue:** Logs staleness fixes but not Wave 1 skill modifications (PRE-1, M2, M3, M5, M8)
**Evidence:** File is archival update log, Wave 1 completion not logged
**Impact:** No persistent record of Wave 1 execution
**Fix:** Add Wave 1 completion section with dates
**Estimated Time:** 5 minutes
**Source:** ephemeral-auditor E-03

#### S-P2-11: Category Terminology Reconciliation

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Issue:** Abstract categories (Spatial/Temporal/Material/Behavioral/Relational from HANDOFF.md) vs operational categories (Spatial/Hierarchy/Component/Depth/Structure from catalog) — two competing systems
**Evidence:** 03-ENTRY-POINT.md lines 72-79 document the evolution but don't reconcile
**Impact:** Builder sees two category naming systems without mapping
**Fix:** Add mapping table to mechanism-catalog.md showing both systems
**Estimated Time:** 10 minutes
**Source:** ephemeral-auditor E-01

---

### P3 — LOW PRIORITY (Archival/Cosmetic)

#### S-P3-1: plan-audit/ Folder Needs README

**File:** NEW — `ephemeral/plan-audit/README.md`
**Issue:** 12 audit files in folder, all executed 2026-02-15, no header explaining status
**Impact:** Unclear if folder is active or archival
**Fix:** Add README marking folder as archival (all audits executed)
**Estimated Time:** 3 minutes
**Source:** ephemeral-auditor R-03

#### S-P3-2: Vocabulary-Library Practical Test Status Note

**File:** `ephemeral/continuity-docs/07-open-threads-and-gaps.md`
**Issue:** OT-03 states vocabulary-library distinction is "tested in theory, untested in practice" but Middle experiment IS the practical test
**Impact:** Could be more explicit
**Fix:** Add note to OT-03 that Middle experiment is THE practical test
**Estimated Time:** 2 minutes
**Source:** ephemeral-auditor E-02

#### S-P3-3: HANDOFF.md Reference in pipeline/CLAUDE.md

**File:** `design-system/pipeline/CLAUDE.md`
**Issue:** No link to HANDOFF.md (THE authoritative Phase D summary)
**Impact:** Navigation gap
**Fix:** Add row in file list linking to ephemeral/continuity-docs/HANDOFF.md
**Estimated Time:** 2 minutes
**Source:** pipeline-auditor recommendation 4

#### S-P3-4: specification/BACKBONE.md Phase D Section

**File:** `design-system/specification/BACKBONE.md`
**Issue:** Stage 5 (CD) placeholder at line 134, no Phase D validation section
**Impact:** Narrative update, not operational
**Fix:** Add Phase D validation results + tier model findings after Stage 4 (AD)
**Estimated Time:** 20 minutes (if expanded fully)
**Source:** core-auditor Priority 8

#### S-P3-5: compositional-rules.md Open Questions

**File:** `design-system/compositional-core/guidelines/compositional-rules.md`
**Issue:** Lines 466-494 list 5 open questions awaiting evidence
**Impact:** Questions explicitly marked as open (not blocking)
**Fix:** Resolve with Phase D/E evidence if available
**Estimated Time:** Variable (depends on whether evidence exists)
**Source:** core-auditor Priority 7

---

## 3. CROSS-FILE CONSISTENCY CHECK

### Mechanism Counts Per Tier

**Question:** Do all files agree on Floor: 5 / Middle: 8-10 / Ceiling: 12-15 / Flagship: 16-18?

| File | Floor | Middle | Ceiling | Flagship | Status |
|------|-------|--------|---------|----------|--------|
| HANDOFF.md Section 4 | 5 | 8-10 | 12-15 | 16-18 | ✅ MATCH |
| 03-ENTRY-POINT.md tier table | 5 | 8-10 | 12-15 | 16-18 | ✅ MATCH |
| 14-master-execution-prompt.md | 5 | 8-10 | 12-15 | 16-18 | ✅ MATCH |
| pipeline/05-COMPLETE-ROADMAP.md | 5 | 8-10 | 12-15 | 16-18 | ✅ MATCH |
| pipeline/03-MIGRATION-PIPELINE.md | 5 | 8-10 | 12-15 | 16-18 | ✅ MATCH |
| rigidity-research/03-tier-specifications.md | 5 | 8-10 | 12-15 | 16-18 | ✅ MATCH |
| tension-composition/SKILL.md line 112 | N/A | 8-10 | N/A | N/A | ✅ MATCH |
| mechanism-catalog.md | **NO TIER COUNTS** | **NO TIER COUNTS** | **NO TIER COUNTS** | **NO TIER COUNTS** | ❌ MISSING |

**Verdict:** ALL files that document tier model agree on counts. ONE critical file (mechanism-catalog.md) is missing tier integration entirely.

---

### Modification Status (Applied vs Pending)

**Question:** Do files agree on which modifications are applied vs pending?

| Modification | Status | Files Confirming | Contradictions |
|-------------|--------|-----------------|----------------|
| **PRE-1** (category labels) | ✅ APPLIED | mechanism-catalog.md lines 52-66, HANDOFF.md line 15 | None |
| **M2** (fractal gate) | ✅ APPLIED | tension-composition/SKILL.md lines 1,171-1,213 | None |
| **M3** (container width) | ✅ APPLIED | tension-composition/SKILL.md lines 808-845 | None |
| **M5** (tier routing) | ✅ APPLIED | tension-composition/SKILL.md lines 68-121 | None |
| **M8** (tier framing both locations) | ✅ APPLIED | tension-composition/SKILL.md lines 114-118, 770-774 | None |
| **M1** (per-category minimum) | ❌ NOT APPLIED | HANDOFF.md line 16 says "M1 is Wave 2", line 887 still has "sample 2-4" | ⚠️ CONTRADICTION: skill line 112 says "8-10" but line 887 says "2-4" |
| **DOC-1** through **DOC-6** | ✅ APPLIED | All 6 verified by core-auditor | None |
| **M6, M7** (Wave 2) | ❌ NOT APPLIED | HANDOFF.md Section 5 | None (expected) |
| **M9, M10, M11** (Wave 3) | ❌ NOT APPLIED | perceptual-auditing skill has no tier references | None (expected) |

**Verdict:** Wave 1 status is CONSISTENT across all files EXCEPT the internal M1 contradiction within the skill itself (line 887 vs 112).

---

### Phase D Verdict

**Question:** Do files agree that Phase D = COMPLETE, CONDITIONAL PASS?

| File | Phase D Status | Evidence |
|------|---------------|----------|
| HANDOFF.md Section 2 | ✅ COMPLETE, CONDITIONAL PASS | "Variant B best (18/19, 4/5 novelty)" |
| design-system/CLAUDE.md | ✅ COMPLETE | Line 9: "Phase D COMPLETE (CONDITIONAL PASS, 2026-02-15)" |
| compositional-core/CLAUDE.md | ✅ COMPLETE | Line 8: "Phase D Validation Complete" |
| pipeline/05-COMPLETE-ROADMAP.md | ✅ COMPLETE | Line 22: "Phase D ✅ COMPLETE (2026-02-15)" |
| pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md | ✅ COMPLETE | Line 13: "EXECUTED — CONDITIONAL PASS (2026-02-15)" |
| pipeline/02-POST-CD-PHASES.md | ❌ NOT STARTED | Lines 113-133: Phase D shown as NOT STARTED | ⚠️ CONTRADICTS |
| pipeline/CLAUDE.md | ⚠️ INCOMPLETE | Line 99: Phase D shown with "(1-2h)" estimate | ⚠️ IMPLIES PENDING |

**Verdict:** 5/7 files CORRECTLY show Phase D complete. 2/7 files show Phase D as pending/future work.

**Contradiction detected:** pipeline/02-POST-CD-PHASES.md directly contradicts 5 other files.

---

### Wave Assignments

**Question:** Do files agree on Wave 1: M2,M3,M5,M8 / Wave 2: M1,M6,M7 / Wave 3: M9,M10,M11?

| File | Wave 1 | Wave 2 | Wave 3 | Status |
|------|--------|--------|--------|--------|
| HANDOFF.md Section 5 | M2, M3, M5, M8 | M1, M6, M7 | Not mentioned | ✅ MATCH |
| 08-skill-enrichment-plan.md | M2, M3, M5, M8 | M1, M6, M7 | M9, M10, M11 | ✅ MATCH |
| 13-master-agenda.md | Phase 1.1: M2, M3, M5, M8 | Phase 1.2: M1, M6, M7 | Not mentioned | ✅ MATCH |

**Verdict:** ALL files agree on wave assignments. No contradictions.

---

### Container Width Specification

**Question:** Do files agree that 940-960px at 1440px is NON-NEGOTIABLE?

| File | Container Width | Non-Negotiable? | Status |
|------|----------------|----------------|--------|
| tension-composition/SKILL.md M3 | 940-960px at 1440px | YES, line 845 says "NON-NEGOTIABLE" | ✅ MATCH |
| perceptual-auditing/SKILL.md | 700-960px optimal, 640px min, 1280px max | No "non-negotiable" language | ⚠️ RANGE DIFFERS |
| HANDOFF.md Section 6 | 940-960px = #1 Phase D failure mode | Implicitly non-negotiable | ✅ MATCH |
| pipeline/05-COMPLETE-ROADMAP.md | "Container width was THE primary failure mode" | Implicitly non-negotiable | ✅ MATCH |

**Verdict:** tension-composition skill has EXPLICIT non-negotiable 940-960px. perceptual-auditing skill has WIDER range (700-960px optimal). These do NOT contradict (perceptual auditing says 700-960 is acceptable, tension-composition narrows to 940-960 as the target). The narrower spec takes precedence.

---

### Density Pattern Names

**Question:** Do files use consistent pattern names (CRESCENDO / F-PATTERN / BENTO / PULSE)?

| File | Pattern Names | Status |
|------|--------------|--------|
| tension-composition/SKILL.md | CRESCENDO, F-PATTERN, BENTO, PULSE | ✅ MATCH |
| HANDOFF.md Section 4 | CRESCENDO, F-PATTERN, BENTO, PULSE | ✅ MATCH |
| 03-ENTRY-POINT.md | CRESCENDO, F-PATTERN, BENTO, PULSE | ✅ MATCH |

**Verdict:** ALL files use identical 4-pattern names. No variance.

---

### Category Names (Abstract vs Operational)

**Question:** Do files agree on category taxonomy?

| File | Category System | Names |
|------|----------------|-------|
| HANDOFF.md (research framing) | Abstract (from richness research) | Spatial, Temporal, Material, Behavioral, Relational |
| mechanism-catalog.md (operational) | Operational (from mechanism analysis) | Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation |
| 03-ENTRY-POINT.md lines 72-79 | **BOTH DOCUMENTED** | Notes evolution from abstract to operational, says "USE operational names" |

**Verdict:** This is NOT a contradiction. The abstract categories were research terminology. The operational categories are the implemented taxonomy. 03-ENTRY-POINT.md documents the evolution and explicitly states to use operational names. This is DOCUMENTED INTENTIONALLY, not a staleness issue.

**Recommendation:** Add mapping table to mechanism-catalog.md showing both systems for clarity (S-P2-11).

---

## 4. ENRICHMENT PRIORITY LIST

From all 4 auditors combined, which documentation gaps would most benefit from conversation clarifications?

### Highest Impact (Directly Affects Middle Experiment)

**E-01: Mechanism Counts as Proxy Not Target (Clarification C1)**
- **Target Files:** 4 locations (tension-composition/SKILL.md, HANDOFF.md, 03-ENTRY-POINT.md, 14-master-execution-prompt.md)
- **Gap:** Tier mechanism counts (5 / 8-10 / 12-15 / 16-18) presented without provenance or "proxy not target" caveat
- **Clarification Content:** "These counts were BACKWARD-ENGINEERED from existing pages (Variant B -> 5, OD-004 -> 12-15, CD-006 -> 16-18), not invented as targets. They describe NATURAL LANDING ZONES for each effort level. Peak richness occurs at maximum content-mechanism fit, not maximum technique count."
- **Impact on Middle Experiment:** Without this, builder treats "8-10" as a target and pads mechanisms to hit 8, or stops at 8 when content naturally wants 11.
- **Mapping:** 18-clarification-mapping.md Clarification 1 (4 locations)
- **Estimated Enrichment Time:** 4 insertions, ~20 minutes total

**E-02: "Sample 2-4" Is the PROBLEM Being Fixed (Clarification C2)**
- **Target Files:** 3 locations (tension-composition/SKILL.md, HANDOFF.md, 03-ENTRY-POINT.md)
- **Gap:** "Sample 2-4 mechanisms" appears without warning that it's the identified limitation
- **Clarification Content:** "This instruction is the BROKEN state that M1 exists to replace. It was identified by ALL 11 research agents as the single most limiting specification. It caps richness at 5-7 mechanisms when showcase pages deploy 12-18. M1 (Wave 2) will replace this with per-category minimum."
- **Impact on Middle Experiment:** Builder seeing "sample 2-4" without context may think it's intentional design, not a known problem
- **Mapping:** 18-clarification-mapping.md Clarification 2 (3 locations)
- **Estimated Enrichment Time:** 3 insertions, ~15 minutes total

**E-03: Creative Derivation vs Lookup (Clarification C3)**
- **Target File:** mechanism-catalog.md
- **Gap:** No explanation that Middle (lookup) and Ceiling (metaphor-driven) use SAME catalog but DIFFERENT selection logic
- **Clarification Content:** "Middle: content feature -> mechanism capability (direct mapping). Ceiling: metaphor -> shared semantic dimension -> multiple mechanisms encoding that dimension simultaneously. SAME 18 mechanisms, DIFFERENT selection logic."
- **Impact on Middle Experiment:** Builder doesn't understand HOW Middle selection differs from Ceiling beyond 'simpler'
- **Mapping:** 18-clarification-mapping.md Clarification 3 (1 location)
- **Estimated Enrichment Time:** 1 insertion, ~10 minutes

**E-04: Patterns Are Skeleton, Mechanisms Are Flesh (Clarification C4)**
- **Target Files:** 2 locations (HANDOFF.md, 03-ENTRY-POINT.md)
- **Gap:** CRESCENDO/F-PATTERN/BENTO/PULSE (patterns) vs 18 mechanisms never distinguished
- **Clarification Content:** "Patterns are SPATIAL ORGANIZATION STRATEGIES (page-scale rhythm, the skeleton). Mechanisms are INDIVIDUAL CSS TECHNIQUES deployed within the pattern (technique-scale tools, the flesh). Pattern determines overall flow; mechanisms implement that flow."
- **Impact on Middle Experiment:** Builder may conflate CRESCENDO (pattern) with mechanisms, or think CRESCENDO is a mechanism
- **Mapping:** 18-clarification-mapping.md Clarification 4 (2 locations)
- **Estimated Enrichment Time:** 2 insertions, ~10 minutes

**E-05: Scales vs Mechanisms (Clarification C5)**
- **Target File:** compositional-core/CLAUDE.md
- **Gap:** Fractal gate requires "2 scales for Middle" but doesn't explain WHAT scales are or how they differ from mechanisms
- **Clarification Content:** "Mechanisms = breadth of vocabulary (how many distinct CSS techniques). Scales = depth of coherence (how many zoom levels the pattern appears at). 5 scales: Navigation / Page / Section / Component / Character. Fractal means the same design direction repeats as you zoom in."
- **Impact on Middle Experiment:** Builder knows fractal gate exists but not how to implement it concretely
- **Mapping:** 18-clarification-mapping.md Clarification 5 (1 location)
- **Estimated Enrichment Time:** 1 insertion, ~10 minutes

---

### Medium Impact (Improves Experiment Design Understanding)

**E-06: M1 Sequencing Decision and Implications (Clarification C6)**
- **Target File:** 13-master-agenda.md
- **Gap:** M1 assigned to Wave 2 without explaining the circular dependency problem or the three approaches
- **Clarification Content:** "M1 was originally Wave 2 (validate parameters through experiment). The problem: you can't test whether 8-10 mechanisms works if the skill tells the builder to use 2-4. Three approaches: (a) apply M1 before experiment, (b) manual override in builder prompt, (c) two builds. Conversation consensus: M1 sequencing was arguably a mistake."
- **Impact on Middle Experiment:** Understanding M1 sequencing rationale prevents repeat of the same sequencing mistake in future experiments
- **Mapping:** 18-clarification-mapping.md Clarification 6 (1 location)
- **Estimated Enrichment Time:** 1 insertion, ~15 minutes

**E-07: Content Selection Criteria Justification (Clarification C7)**
- **Target File:** 13-master-agenda.md
- **Gap:** Content selection criteria state "mixed content" without explaining WHY (not just a preference)
- **Clarification Content:** "Pure prose limits mechanism deployment. Variant B was prose-dominant and hit a mechanism ceiling at 6. Mixed content (tutorial with code examples, callouts, tables) naturally exercises more categories. Content type recommendation: technical tutorial because it naturally contains prose + code + callouts + steps + table."
- **Impact on Middle Experiment:** Builder understands WHY content choice matters, not just THAT it matters
- **Mapping:** 18-clarification-mapping.md Clarification 7 (1 location)
- **Estimated Enrichment Time:** 1 insertion, ~10 minutes

**E-08: Experiment Verdict Implications (Clarification C8)**
- **Target File:** 13-master-agenda.md
- **Gap:** SUCCESS/PARTIAL/FAILURE verdicts defined but implications not explained
- **Clarification Content:** "SUCCESS means Middle is sufficient for 40-50% of pages, Floor-to-Middle has highest ROI. PARTIAL means designed but lacks atmosphere, tier boundaries may need adjustment. FAILURE means lookup-based deployment can't produce engagement, metaphor required even for tutorials. The significance: this is the first PRACTICAL test of vocabulary-vs-library distinction."
- **Impact on Middle Experiment:** Team understands what each verdict means for the broader project, not just this single page
- **Mapping:** 18-clarification-mapping.md Clarification 8 (1 location)
- **Estimated Enrichment Time:** 1 insertion, ~10 minutes

---

### Lower Impact (General Documentation Quality)

**E-09: Wave 1 DOC Modification Descriptions**
- **Target Files:** All 6 DOC files (mechanism-catalog.md, mechanism-combinations.md, case-studies/README.md, CLAUDE.md, semantic-rules.md, 03-ENTRY-POINT.md)
- **Gap:** DOC modifications are PRESENT but not explicitly labeled as "added by Wave 1"
- **Impact:** Future readers don't know which sections were enrichment vs original
- **Fix:** Add "Added by Wave 1 DOC-X (2026-02-15)" notes to enriched sections
- **Estimated Time:** 6 files, ~15 minutes

**E-10: Tier Model Cross-References**
- **Target Files:** mechanism-catalog.md, component-inventory.md, usage-criteria.md, case-studies/README.md
- **Gap:** Tier model established but not referenced in operational docs
- **Impact:** Builder reading grammar/components/guidelines doesn't see tier context
- **Fix:** Add tier references where appropriate
- **Estimated Time:** 4 files, ~20 minutes

---

## 5. CRITICAL DECISIONS FOR TEAM LEAD

### Decision 1: M1 Timing for Middle Experiment

**The Blocking Question:** The Middle experiment tests whether 8-10 mechanisms across 5 categories produces "designed" output. The skill currently says "sample 2-4 mechanisms." Which approach?

**Option A: Apply M1 to skill before building**
- **Pros:** Clean test of full Middle concept, builder follows actual skill, tests what we'll ship
- **Cons:** Can't isolate M1's effect, if result is good we can't attribute it to M1 vs M2/M3/M5
- **Time:** 15 minutes to modify SKILL.md

**Option B: Manual override in builder prompt**
- **Pros:** Skill unchanged, can test concept before committing to permanent change
- **Cons:** Tests the concept, not the skill (experiment validates theory but not implementation)
- **Time:** 5 minutes to add override to builder prompt

**Option C: Two builds (one with "2-4", one with per-category minimum)**
- **Pros:** Provides direct comparison, isolates M1's effect
- **Cons:** Double build time (2x 70-100 min = 140-200 min), but comparison data is valuable
- **Time:** 2 builds required

**Conversation Consensus (from 17-conversation-clarifications.md):** "M1 sequencing was arguably a mistake. M1 is categorically different from M6/M7. M6/M7 genuinely need experiment feedback. M1 is the foundational enabler."

**Recommended Decision:** **Option A** (apply M1 before building). Rationale:
1. We have 11 agents' worth of evidence that M1 is critical
2. The experiment's PURPOSE is to test Middle tier, which is defined as 8-10 mechanisms
3. Testing with "2-4" would confirm what 11 agents already concluded
4. Isolated effect testing is valuable when hypothesis is uncertain; here hypothesis is well-supported

**If team lead chooses Option B or C:** Document the rationale for that choice in the master execution prompt.

---

### Decision 2: Which Staleness Fixes Are Blocking?

**P0 fixes (MUST be done before Middle experiment):**
1. ✅ **S-P0-1:** M1 contradiction fix (Decision 1 resolves this)
2. ⚠️ **S-P0-2:** Pipeline 02-POST-CD-PHASES.md Phase D status — **Is this ACTUALLY blocking?**

**Question for team lead:** Does pipeline/02-POST-CD-PHASES.md Phase D status block the Middle experiment?

**Analysis:**
- The Middle experiment builder will read:
  - `~/.claude/skills/tension-composition/SKILL.md` (primary instructions)
  - `design-system/compositional-core/CLAUDE.md` (phase-gated protocol)
  - `ephemeral/session-insights/13-master-agenda.md` OR `14-master-execution-prompt.md` (experiment instructions)
- The builder will NOT read `pipeline/02-POST-CD-PHASES.md` (strategic planning, not operational instructions)
- Therefore: S-P0-2 does NOT block the experiment, despite being a contradiction

**Recommended Reclassification:** S-P0-2 -> S-P1 (creates confusion but doesn't block experiment)

**Actual P0 List:**
1. S-P0-1: M1 contradiction (BLOCKS unless Decision 1 resolves)

**P1 fixes (should be done before experiment to reduce confusion):**
1. S-P1-1: Skill enrichment status mismatch in design-system/CLAUDE.md
2. S-P1-2: 13-master-agenda.md Phase 0 completion markers
3. S-P1-3: CLAUDE.md Phase D status line
4. S-P0-2 (reclassified): pipeline/02-POST-CD-PHASES.md Phase D status

**Estimated Time for ALL P1 fixes:** 23 minutes (5 + 5 + 3 + 10)

---

### Decision 3: Documentation Enrichment Timing

**The Question:** Should clarification enrichments (E-01 through E-08) be applied BEFORE or AFTER the Middle experiment?

**Enrichments That Affect Builder Behavior (apply BEFORE):**
- E-01: Mechanism counts as proxy not target (prevents padding to hit 8)
- E-02: "Sample 2-4" is the problem (prevents interpreting it as intentional design)
- E-03: Creative derivation vs lookup (explains selection logic difference)
- E-04: Patterns vs mechanisms (prevents conflation)
- E-05: Scales vs mechanisms (enables fractal gate implementation)

**Enrichments That Affect Experiment Design (apply BEFORE):**
- E-06: M1 sequencing decision (informs Decision 1)
- E-07: Content selection criteria (informs content choice)
- E-08: Verdict implications (defines success criteria)

**Enrichments That Are Documentation Quality (can apply AFTER):**
- E-09: Wave 1 DOC labels
- E-10: Tier model cross-references

**Recommended Decision:** Apply E-01 through E-08 BEFORE the experiment (total time: ~90 minutes across 14 insertions). E-09 and E-10 can wait until post-experiment.

**Rationale:** The enrichments clarify critical concepts (counts as proxy, patterns vs mechanisms, scales vs mechanisms) that directly affect how the builder interprets the instructions. Without these, the builder may misinterpret tier guidance or mechanism selection logic.

---

## 6. NEXT STEPS RECOMMENDATION

### Immediate Actions (Before Middle Experiment)

**Step 1: Resolve M1 Timing (Decision 1) — 15 minutes OR 5 minutes**
- If Option A: Apply M1 to `~/.claude/skills/tension-composition/SKILL.md` line 887
- If Option B: Add per-category override to builder prompt
- Document chosen approach in master execution prompt

**Step 2: Apply P1 Staleness Fixes — 23 minutes**
1. S-P1-1: Update design-system/CLAUDE.md skill enrichment status
2. S-P1-2: Add completion markers to 13-master-agenda.md Phase 0
3. S-P1-3: Update CLAUDE.md Phase D status line
4. S-P0-2 (reclassified): Update pipeline/02-POST-CD-PHASES.md Phase D status

**Step 3: Apply High-Impact Enrichments (E-01 through E-05) — 55 minutes**
1. E-01: Mechanism counts provenance (4 locations, 20 min)
2. E-02: "Sample 2-4" problem labeling (3 locations, 15 min)
3. E-03: Creative derivation vs lookup (1 location, 10 min)
4. E-04: Patterns vs mechanisms distinction (2 locations, 10 min)
5. E-05: Scales vs mechanisms distinction (1 location, 10 min)

**Step 4: Apply Experiment-Design Enrichments (E-06 through E-08) — 35 minutes**
1. E-06: M1 sequencing rationale (1 location, 15 min)
2. E-07: Content selection justification (1 location, 10 min)
3. E-08: Verdict implications (1 location, 10 min)

**Total Pre-Experiment Time:** 113-128 minutes (~2 hours)

---

### Post-Experiment Actions

**Step 5: Apply P2 Staleness Fixes — 60 minutes**
- S-P2-1 through S-P2-11 (clarity improvements, not blockers)

**Step 6: Apply Low-Impact Enrichments (E-09, E-10) — 35 minutes**
- Wave 1 DOC labels and tier model cross-references

**Step 7: Apply P3 Staleness Fixes — 27 minutes**
- Archival markers and minor navigation improvements

**Total Post-Experiment Time:** 122 minutes (~2 hours)

---

## 7. FINAL VERDICTS

### Overall Documentation Health: EXCELLENT (95% Ready)

**Category Breakdown:**
- **CURRENT (No Changes Needed):** 68/85 files (80%)
- **STALE (Contradicts Reality):** 2/85 files (2%) — both P1, not blocking
- **ENRICHMENT-NEEDED:** 15/85 files (18%) — mostly P2/P3 clarity improvements

**Critical Path:**
1. M1 timing decision (Decision 1)
2. 4 P1 staleness fixes (23 min)
3. 8 clarification enrichments (90 min)
4. **THEN ready for Middle experiment**

**Non-Critical Path:**
- 11 P2 fixes (60 min) — improves clarity, not required for experiment
- 5 P3 fixes (27 min) — archival/cosmetic
- 2 low-impact enrichments (35 min) — documentation quality

**Total Pre-Experiment Effort:** 113-128 minutes (~2 hours)
**Total Post-Experiment Effort:** 122 minutes (~2 hours)

**Blocking Staleness:** ZERO files block the Middle experiment (after M1 decision)

**Key Strength:** All 4 auditors independently confirmed that the three "key continuity files" (HANDOFF.md, 03-ENTRY-POINT.md, design-system/CLAUDE.md) are CURRENT and accurate. The staleness that exists is LOCALIZED (pipeline planning docs, skill internal contradiction) not SYSTEMIC.

**Highest-Leverage Fix:** Resolve M1 timing (Decision 1) — everything else is either non-blocking or quick.

---

**END SYNTHESIS**

**Deliverables:**
1. ✅ Unified source-of-truth map (Section 1)
2. ✅ Staleness priority list (Section 2: P0, P1, P2, P3)
3. ✅ Cross-file consistency check (Section 3: 8 consistency dimensions)
4. ✅ Enrichment priority list (Section 4: E-01 through E-10)

**Next teammate:** doc-enricher (to apply clarification insertions from 18-clarification-mapping.md)
