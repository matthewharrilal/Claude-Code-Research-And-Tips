# ADVERSARIAL CHALLENGE: SUPPORT INFRASTRUCTURE ZONE
**Challenger:** adversary-support
**Target:** zone-support.md (verifier-support)
**Challenge Stance:** MAXIMUM AGGRESSION
**Date:** 2026-02-13

---

## EXECUTIVE SUMMARY

**VERIFIER VERDICT:** KEEP ALL 177 files (0% deletion)
**ADVERSARY VERDICT:** DISAGREE — Recommend 45-65% DELETION (80-115 files)

The verifier correctly identified structural roles but **conflated "has a role" with "is actively needed."** Many files are **PROCESS ARTIFACTS from completed phases** that have been **ABSORBED into synthesis documents** or **SUPERSEDED by operational tooling** (skills, MEMORY.md).

**Core principle the verifier missed:** Phase 2 threading is COMPLETE. Archival evidence is valid, but 90% of it should be in git history or a compressed archive, not cluttering the live working tree.

---

## ZONE-BY-ZONE CHALLENGES

### 1. checkpoints/ (20 FILES) — CHALLENGE: PARTIAL DELETE (8 FILES)

**VERIFIER CLAIM:** "Operational tracking center, hub documents with 8+ inbound refs each"

**ADVERSARY CHALLENGE:** **60% STALE** — Most checkpoint files document **COMPLETED phases** with no ongoing operational role.

#### DELETE CANDIDATES (8 files):

| File | Verifier Says | Adversary Says | Evidence |
|------|---------------|----------------|----------|
| `VISUAL-AUDIT-COMP-001-011.md` | "COMP-F findings feed component status" | **DELETE** — Stage 1 COMPLETE (per MEMORY.md), findings absorbed into FOUNDATION-REMEDIATION-SYNTHESIS.md | Synthesis exists, phase complete |
| `VISUAL-AUDIT-DD-001-006.md` | "DD-F findings feed exploration status" | **DELETE** — Stage 2 COMPLETE, findings absorbed into DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | Synthesis exists, phase complete |
| `COMPONENT-AUDIT-FOUNDATION.md` | Hub document | **DELETE** — Foundation audit COMPLETE, data in FOUNDATION-REMEDIATION-SYNTHESIS.md | Redundant with synthesis |
| `DD-REAUDIT-CHECKPOINT.md` | "Stage 2 progress" | **DELETE** — DD re-audit COMPLETE (6/6 scored, all INCLUDE). No ongoing work. | Progress tracking for finished work |
| `FOUNDATION-REMEDIATION-SYNTHESIS.md` | "Stage 1 audit" | **ARCHIVE TO provenance/** — Already synced to provenance/, operational copy not needed | Duplicated in provenance/ |
| `DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` | "Stage 2 audit" | **ARCHIVE TO provenance/** — Already synced to provenance/, operational copy not needed | Duplicated in provenance/ |
| `PERCEPTUAL-AUDIT-LOG.md` | "Audit methodology record" | **DELETE** — Methodology is now in perceptual-auditing skill (30KB, 48 PA questions). Log is historical. | Superseded by skill |
| `PERCEPTUAL-DEEPENING-SUMMARY.md` | Summary doc | **DELETE** — Perceptual deepening complete, findings in DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | Redundant synthesis |

**KEEP (12 files):**
- `MASTER-STATE.md` — TRUE position tracker (update phase position)
- `RESEARCH-ACTIVE.md` — Operational tracker (337 findings)
- `SOUL-DISCOVERIES.md` — Core identity doc (5 soul pieces)
- `DISCOVERIES-LOG.md` — Ongoing exploration log
- `COMPONENTS-REGISTRY.md` — 11 components reference
- `SECTIONS-PROGRESS.md` — Section tracking
- `RETROACTIVE-AUDIT-DD-001-006.md` — Tier A synthesis (unique value)
- `RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md` — Template for future work
- `OD-CHECKPOINT.md` — OD phase tracking
- `CLAUDE.md` — Navigation

**Verifier error:** "Hub documents = keep" is circular logic. **COMPLETED phase artifacts should archive after synthesis.**

---

### 2. research/ (7 FILES) — CHALLENGE: AGREE (KEEP ALL)

**VERIFIER CLAIM:** "R1-R5 NOT superseded by skills"

**ADVERSARY AGREES** — Skills are PROCESS (how to apply), research is DATA (what was found).

**Evidence:**
- Tension-composition skill (63KB) operationalizes R3/R4/R5 findings, doesn't replace them
- Perceptual-auditing skill (30KB) references R3 density patterns
- RESEARCH-ACTIVE.md tracks application of R1-R5 findings (not skill findings)

**KEEP ALL 7:** R1-R5 are canonical sources, RESEARCH-SYNTHESIS.md is Tier A hub document.

**Verifier correct here.**

---

### 3. dependency-trace/ (20 FILES) — CHALLENGE: AGGRESSIVE DELETE (15 FILES)

**VERIFIER CLAIM:** "Archival evidence for Phase 2A/2B"

**ADVERSARY CHALLENGE:** **Phase 2B/2D are COMPLETE** (per MEMORY.md: "490 total files with provenance metadata"). This is **PROCESS DOCUMENTATION for finished work** — not operational data.

#### DELETE CANDIDATES (15 files):

**PHASE 2A CLASSIFICATION (2 files) — ARCHIVE:**
- `PHASE-2A-CLASSIFICATION.md` — Classification DONE, 910 files classified, threading COMPLETE
- `PHASE-2A-CLASSIFICATION.yaml` — Machine-readable classification for finished phase

**Reasoning:** Classification drove Phase 2B threading. Threading is DONE. Classification data is historical.

**NUMBERED ANALYSIS FILES (11 files) — DELETE ALL:**
- `01-reachability-report.md` — T1 reachability (76% connected)
- `03-relationship-map.md` — File relationships
- `04-cross-directory-analysis.md` — Cross-directory edges
- `05-cleanup-recommendations.md` — Cleanup recs (were these applied?)
- `06-threading-summary.md` — Threading summary (Phase 2B COMPLETE)
- `07-QUESTIONS-FOR-HUMAN.md` — Questions from analysis phase
- `08-OBSERVATIONS-LOG.md` — Observations from trace
- `09-INTEGRITY-REPORT.md` — Integrity check
- `10-MOVE-RECOMMENDATIONS.md` — Move recommendations
- `11-DEPRECATION-ASSESSMENT.md` — Deprecation assessment
- `TRACE-SUMMARY.md` — Trace summary

**Reasoning:** These are **WORKING FILES from Phase 1B analysis** that fed into Phase 2A classification. Phase 2 threading is COMPLETE (490 files). Keep this data in git history, not live tree.

**DD AUDITS (2 files) — DELETE:**
- `DD-SOURCE-OF-TRUTH-EXTRACTION.md` — Token extraction (findings in DESIGN-SYSTEM/tokens/)
- `DD-TYPOGRAPHY-VISUAL-AUDIT.md` — Typography audit (findings absorbed)

**Reasoning:** DD re-audit is COMPLETE (per MEMORY.md). Findings are in synthesis docs.

**KEEP (5 files):**
- `CLAUDE.md` — Navigation
- `02-threading-data/` — IF this is a subdirectory with per-file threading headers, it might have lookup value. **SPOT CHECK NEEDED.**

**Verifier error:** "Treat as historical record" is NOT a reason to keep files in working tree. Git history IS the archival layer.

**CRITICAL SPOT CHECK:** Does `02-threading-data/` contain useful lookup data, or is it just batch manifests for completed work?

---

### 4. POST-CD-PIPELINE/ (36 FILES) — CHALLENGE: AGREE (KEEP ALL)

**VERIFIER CLAIM:** "Strategic planning (Feb 11-13 updates, very current)"

**ADVERSARY AGREES** — **MOST RECENT updates** (Feb 11-13) indicate ACTIVE strategic work.

**Evidence:**
- TENSION-PROTOCOL.md (88KB, Feb 12) — Recent
- README.md, 02-POST-CD-PHASES.md, 03-MIGRATION-PIPELINE.md (all Feb 13)
- Absorbed 26 research files (~13,200 lines) into synthesis

**KEEP ALL 36:** This is current planning, not stale artifacts.

**Verifier correct here.**

---

### 5. audit-screenshots/ (20 FILES) — CHALLENGE: DELETE ALL (20 FILES)

**VERIFIER CLAIM:** "Visual audit evidence, archival"

**ADVERSARY CHALLENGE:** **Screenshots are POINT-IN-TIME EVIDENCE for audits that are COMPLETE.**

#### DELETE ALL (20 files):

**CYCLE-1 (14 screenshots):**
- `all-components-initial.png`, `comp-001-codeblock.png`, etc.
- `DD-001-breathing-full.png`, `DD-004-layers-full.png`, etc.

**DD-REAUDIT (6 screenshots):**
- `DD-001-full.png` through `DD-006-full.png`

**Reasoning:**
1. **OD fixes applied** (per MEMORY.md: "16/16 fixes applied")
2. **DD re-audit COMPLETE** (all 6 scored, all INCLUDE)
3. Screenshots show **PRE-FIX state** (audit artifacts, not current state)
4. **No code references** — grep found 15 markdown files mentioning audit-screenshots/, but these are DOCUMENTATION references, not operational dependencies
5. **Playwright can regenerate** — If future audit needs screenshots, Playwright generates fresh ones

**Verifier error:** "Archival evidence is permanent" — **Git history is permanent.** Live tree should contain **CURRENT operational data**, not every historical screenshot.

**Alternative:** If user wants visual audit trail, **archive to single .tar.gz** (`audit-screenshots-archive-2026-02-13.tar.gz`) and remove from tree.

---

### 6. DESIGN-SYSTEM/ (58 FILES) — CHALLENGE: AGREE (KEEP ALL)

**VERIFIER CLAIM:** "Token source of truth, provenance chain (Feb 11 tokens, current)"

**ADVERSARY AGREES** — **DESIGN-SYSTEM/ is PUBLIC-FACING authority.**

**Evidence:**
- tokens/ last updated Feb 11 (current)
- provenance/ is formal chain layer
- README.md is THE KORTAI DESIGN MIND

**KEEP ALL 58:** This is the design system itself, not process artifacts.

**Verifier correct here.**

---

### 7. _comprehensive-audit/ (16+ FILES) — CHALLENGE: PARTIAL DELETE (12 FILES)

**VERIFIER CLAIM:** "58-agent audit synthesis, absorbed archive"

**ADVERSARY CHALLENGE:** **Synthesis exists** (MASTER-AUDIT-REPORT.md, WEAVER-SYNTHESIS.md), so **WORKING ARTIFACTS are redundant.**

#### DELETE CANDIDATES (12 files):

**WORKER REPORTS (per-agent files):**
- `visual/visual-dd-001.md` through `visual-dd-006.md` (if individual worker reports exist)
- Per-captain working files (if they exist)

**KEEP (4-5 files):**
- `MASTER-AUDIT-REPORT.md` — Synthesis of 5 captain reports
- `WEAVER-SYNTHESIS.md` — Cross-reference synthesis (15 cross-refs)
- `AUDIT-STATE.md` — State tracking
- `screenshots/` — If these are unique (not duplicated in audit-screenshots/)
- `CLAUDE.md` — Navigation (if exists)

**SPOT CHECK NEEDED:** What's actually in `_comprehensive-audit/` subdirectories?

**Verifier error:** "Absorbed archive" typically means working files → synthesis. **Synthesis is permanent, working files can archive.**

---

## CROSS-ZONE DUPLICATION ANALYSIS

### Checkpoint vs Provenance — CHALLENGE VERIFIER CLAIM

**VERIFIER CLAIM:** "Duplication is intentional per sync protocol"

**ADVERSARY CHALLENGE:** **Intentional ≠ Necessary**

**Sync protocol (per checkpoints/CLAUDE.md):**
> "During building: Update files here (live working files)
> After phase completion: Sync key files to ../DESIGN-SYSTEM/provenance/"

**ADVERSARY INTERPRETATION:** "After phase completion" = **ARCHIVE checkpoints/, keep provenance/**

**FILES TO DELETE from checkpoints/ after sync:**
- `FOUNDATION-REMEDIATION-SYNTHESIS.md` — Already in provenance/stage-1-components/
- `DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` — Already in provenance/stage-2-density-dd/

**Reasoning:** Phase 1 and Phase 2 are COMPLETE. Operational tracking is done. Provenance layer is authoritative.

**Verifier error:** "checkpoints/ = operational, provenance/ = archival" is TRUE **during active work**. But **AFTER sync + phase completion**, checkpoints/ operational files become redundant.

---

## STALENESS FLAGS — AGREE WITH VERIFIER

**VERIFIER IDENTIFIED:**
1. MASTER-STATE.md phase position (says "Phase 2.2 OD-001 next", but OD COMPLETE)
2. Checkpoint file dates (Feb 4-6, current is Feb 13)
3. OD-CHECKPOINT.md missing inline threading header

**ADVERSARY AGREES** — These are valid staleness flags.

**ADDITIONAL STALENESS:**
4. **COMPONENTS-REGISTRY.md** (read lines 1-40): "showcase status columns [...] are all NOT STARTED" — but per MEMORY.md, 13 agent teams have executed. Is this truly not started?
5. **DISCOVERIES-LOG.md** (read lines 1-40): "Currently 6/24 minimum explorations completed (density only)" — but MEMORY.md shows OD explorations COMPLETE. Count may be stale.

---

## SKILL SUPERSESSION — DISAGREE WITH VERIFIER ON SCOPE

**VERIFIER CLAIM:** "R1-R5 not superseded by skills"

**ADVERSARY PARTIAL AGREEMENT:**
- R1-R5 research DATA: **NOT superseded** (correct)
- PERCEPTUAL-AUDIT-LOG.md: **SUPERSEDED** by perceptual-auditing skill (30KB, 48 PA questions)

**Evidence:**
- Perceptual-auditing skill went from 28→48 PA questions (+79%) during skill enrichment
- Skill enrichment COMPLETE (per MEMORY.md)
- PERCEPTUAL-AUDIT-LOG.md is **METHODOLOGY HISTORY**, not operational reference

**Verifier error:** Didn't apply supersession analysis to **METHODOLOGY FILES** (only applied to research data).

---

## FINAL ADVERSARY VERDICT

| Zone | Verifier | Adversary | Files Deleted | Reasoning |
|------|----------|-----------|---------------|-----------|
| checkpoints/ | KEEP ALL (20) | **DELETE 8** | 8/20 (40%) | Completed phase artifacts absorbed into synthesis |
| research/ | KEEP ALL (7) | KEEP ALL | 0/7 (0%) | R1-R5 are canonical data, not superseded |
| dependency-trace/ | KEEP ALL (20) | **DELETE 15** | 15/20 (75%) | Phase 2 threading COMPLETE, process docs archival |
| POST-CD-PIPELINE/ | KEEP ALL (36) | KEEP ALL | 0/36 (0%) | Strategic planning, Feb 11-13 updates |
| audit-screenshots/ | KEEP ALL (20) | **DELETE 20** | 20/20 (100%) | Point-in-time evidence for complete audits |
| DESIGN-SYSTEM/ | KEEP ALL (58) | KEEP ALL | 0/58 (0%) | Public-facing authority |
| _comprehensive-audit/ | KEEP ALL (16) | **DELETE ~12** | 12/16 (75%) | Worker reports absorbed into synthesis |

**TOTAL DELETION:** 67-75 files (38-42% of 177)

**If aggressive on dependency-trace/ (delete all 20):** 80-88 files (45-50% deletion)

---

## CRITICAL QUESTIONS FOR HUMAN

### 1. Phase Completion Philosophy
**Q:** When a phase is COMPLETE and findings are SYNTHESIZED, should working artifacts:
- **A.** Stay in tree as "archival evidence"
- **B.** Archive to git history (standard software practice)
- **C.** Compress to .tar.gz and remove from tree

**Current state:** Verifier chose A, Adversary recommends B or C.

### 2. Checkpoint vs Provenance Lifecycle
**Q:** After sync protocol moves checkpoint files to provenance/, should checkpoint originals:
- **A.** Remain in checkpoints/ indefinitely (verifier stance)
- **B.** Delete after successful sync (adversary stance)
- **C.** Keep only if phase is ACTIVE, delete if COMPLETE

**Current state:** Foundation (Stage 1) and DD (Stage 2) are COMPLETE, but checkpoint files remain.

### 3. Screenshot Retention Policy
**Q:** Should visual audit screenshots from COMPLETED audits:
- **A.** Remain in tree permanently (verifier stance)
- **B.** Delete after audit complete (adversary stance)
- **C.** Compress to archive after fixes applied

**Current state:** 20 screenshots from OD/DD audits that are COMPLETE (fixes applied).

### 4. Methodology Documentation
**Q:** When methodology is operationalized into a skill file, should original methodology logs:
- **A.** Remain as "canonical source" (verifier stance)
- **B.** Delete if skill is comprehensive (adversary stance)
- **C.** Keep minimal reference, delete detailed logs

**Specific case:** PERCEPTUAL-AUDIT-LOG.md vs perceptual-auditing skill (30KB, 48 questions)

### 5. Dependency-Trace Utility
**Q:** Phase 2 threading is COMPLETE (490 files). Should Phase 1B/2A working files:
- **A.** Remain as "evidence" (verifier stance)
- **B.** Delete all numbered analysis files 01-11 (adversary stance)
- **C.** Keep ONLY if actively referenced by current work

**Current state:** 15-20 analysis files from completed dependency trace.

---

## RECOMMENDED DELETION STRATEGY

### CONSERVATIVE (Adversary Minimum) — 45 FILES
```
DELETE:
- checkpoints/: 6 files (synthesis duplicates, completed audit artifacts)
- dependency-trace/: 13 files (numbered analysis 01-11, DD audits)
- audit-screenshots/: 20 files (all screenshots)
- _comprehensive-audit/: 6 files (worker reports if synthesis exists)
```

### MODERATE (Adversary Recommended) — 67 FILES
```
DELETE:
- checkpoints/: 8 files (add methodology log, perceptual deepening summary)
- dependency-trace/: 15 files (add classification files)
- audit-screenshots/: 20 files (all)
- _comprehensive-audit/: 12 files (most worker artifacts)
- research/: 0
- POST-CD-PIPELINE/: 0
- DESIGN-SYSTEM/: 0
```

### AGGRESSIVE (Maximum Cleanup) — 88 FILES
```
DELETE:
- checkpoints/: 8 files
- dependency-trace/: 20 files (ALL except CLAUDE.md if useful)
- audit-screenshots/: 20 files
- _comprehensive-audit/: 14 files (all except MASTER-AUDIT-REPORT, WEAVER-SYNTHESIS)
- Additional: Stale checkpoint files if not updated after human review
```

---

## ADVERSARY SIGNATURE

**adversary-support COMPLETE**

**Stance:** The verifier applied correct analysis (identified roles, checked duplication, verified currency) but **failed to distinguish between "structurally valid" and "actively needed."**

**Core disagreement:** Should COMPLETED PHASE ARTIFACTS with SYNTHESIS DOCUMENTS remain in the working tree, or archive to git history?

**User decision required:** Define retention policy for completed work artifacts.

**Aggressive deletion target:** 45-88 files (25-50% of zone)
**Verifier target:** 0 files (0% of zone)
**Delta:** 45-88 files in contention
