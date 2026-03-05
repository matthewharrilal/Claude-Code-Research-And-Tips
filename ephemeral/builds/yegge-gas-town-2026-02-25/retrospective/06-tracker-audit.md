# 06 — Execution Tracker Integrity Audit

**Build:** yegge-gas-town-2026-02-25
**Auditor:** Opus (tracker-integrity agent)
**Template:** `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md` (597 lines)
**Actual:** `ephemeral/builds/yegge-gas-town-2026-02-25/EXECUTION-TRACKER.md` (638 lines)

---

## 1. Field Completion Rate

**Template totals:** 208 checkboxes (`[ ]`), 167 fill-in fields (`___`). Total: 375 trackable items.

**Actual tracker:**
- Checked boxes `[x]`: 99
- Unchecked boxes `[ ]`: 120 (includes 39 in Post-Run Verification, which is expected-unfilled)
- Remaining `___` fields: 56 (includes 27 in Post-Run Verification)

**Adjusted counts** (excluding Post-Run Verification section and instruction line):

| Category | Total in Template | Filled in Actual | Unfilled | Fill Rate |
|----------|------------------|------------------|----------|-----------|
| Checkboxes (L0-L3) | ~168 | 99 | ~69 | **59%** |
| Fill-in fields (L3) | ~130 | ~101 | ~29 | **78%** |
| **Combined** | **~298** | **~200** | **~98** | **67%** |

The tracker instructions say: "All `___` fields and `[ ]` checkboxes must be populated by pipeline end." At 67% fill rate, this mandate was not met.

---

## 2. L0/L2 Divergence: The Two-Story Problem

**L0 tells one story:** All 18 L0 rows (14 original + 4 REFINE phases) show `[x]` = COMPLETE. 100% success.

**L2 tells a different story:** Entire sections of L2 checklists remain untouched.

### Specific L0=YES / L2=EMPTY contradictions:

| L0 Claim | L2 Evidence Missing |
|----------|-------------------|
| Pre-Flight `[x]` | ALL 22 pre-flight L2 checkboxes unchecked (PF-1a through PF-3a). Zero file accessibility verified. |
| Phase 0 `[x]` | ALL 7 L2 routing checks unchecked (P0-1a through P0-1d, P0-2a through P0-2f). Content type, heterogeneity, section count, density arc all blank `___`. |
| Phase 1 `[x]` | ALL 18 L2 items unchecked (P1-1a through P1-2g). BV gates show results in L0 Notes but L2 detail rows have blank PASS/FAIL and blank per-tier counts. |
| Phase 2 `[x]` | ALL 16 L2 items unchecked (P2-1a through P2-3g). Builder routing, HTML verification, and all 7 self-eval questions blank. |
| Phase 3A `[x]` (steps) | L1 steps P3A-0 through P3A-4 all unchecked `[ ]`, even though L2 details ARE filled (DPR, screenshots, gates). L1 contradicts L2. |
| PA Audit (P3B-3) | Experiential Pass Verification table: all 9 auditor rows have unchecked `[ ]` and blank `___` for legibility findings, despite L0 and L1 claiming complete. |
| REFINE R-4 through R-8 | 5 of 8 REFINE L1 steps unchecked `[ ]`, yet L0 shows all REFINE phases `[x]`. |

**Severity: CRITICAL.** L0 paints a picture of a fully-tracked, fully-verified pipeline run. L2 reveals that Pre-Flight, Phase 0, Phase 1, and Phase 2 were essentially untracked at the detail level. The orchestrator filled L0 summary rows and some L2/L3 sections (Phase 3A, 3B deployment, 3C) but skipped earlier phases entirely.

---

## 3. Agent Detail Tables

| Phase | Agent Details Section | Model | Start | End | Output Path |
|-------|----------------------|-------|-------|-----|-------------|
| Phase 0 (Content Analyst) | L3: P0-1 | `___` | `___` | `___` | `___` |
| Phase 1 (Brief Assembler) | L3: P1-1 | `___` | `___` | `___` | `___` |
| Phase 2 (Builder) | L3: P2-1 | `___` | `___` | `___` | `___` |
| Phase 3B (Integrative) | L2: P3B-4 | Opus | filled | filled | filled |
| Phase 3C (Weaver) | L3: P3C-1 | Opus | filled | filled | filled |
| REFINE (Builder) | L3: REFINE | Opus | filled | `___` | filled |

**3 of 6 agent detail tables completely blank** (Phase 0, 1, 2). Only the later-pipeline agents (Integrative, Weaver, REFINE builder) got detail tracking. The builder -- the single most important agent -- has zero agent metadata recorded.

---

## 4. BV Gate Detail

L0 Notes say "BV-01-BV-04 all PASS" but the L2 table has:
- BV-01: Result = `___`, per-tier counts = `T1=___ T2=___ T3=___ T4=___ CM=___`
- BV-02: Result = `___`, zone pairs = `___`
- BV-03: Result = `___`, ratio = `___`
- BV-04: Result = `___`, suppressors found = `___`
- BV Revision Cycles: `___`

**Zero BV detail recorded.** We know they passed (L0 says so, Phase 2 was reached) but have no evidence of the actual values. If BV-01 tier counts were borderline (e.g., T3=41 vs threshold 40), we cannot learn from it.

---

## 5. Pre-Flight Checklist

**Fill rate: 0/22.** All PF-1a through PF-2e checkboxes are `[ ]`. PF-3a output directory is `___`.

The orchestrator clearly verified files existed (L0 Notes says "All 16 artifact files + 5 reference files verified") but never checked the individual boxes. This is the strongest evidence of the two-story problem: the work happened, the tracking did not.

---

## 6. Builder Routing Confirmation

**Fill rate: 0/9.** P2-1a through P2-1i all unchecked `[ ]`. P2-1f (CD-006 reference) is `___`.

The builder's routing is the single highest-leverage tracking point in the pipeline (wrong routing = wrong output). Having zero routing verification recorded means we cannot confirm or deny that the builder received the correct inputs.

---

## 7. Template Design Gaps

The template does NOT track:

1. **Token/line counts of agent inputs.** Routing checks are binary (received/not) but don't record HOW MUCH was received. A truncated mechanism-catalog is worse than a missing one.
2. **Compression ratios.** No field for brief-to-source compression (e.g., 272 lines from 1,100 lines routing = 24.7%).
3. **Per-agent timing.** Only the REFINE builder and Integrative/Weaver have Start/End. Content Analyst, Brief Assembler, and Builder have template slots that went unfilled.
4. **Gate failure triage.** The gate table records PASS/FAIL but has no field for "intentional / false positive / genuine failure." The actual tracker added this as free-text notes, which is not parseable.
5. **REFINE delta metrics.** No field for "lines changed," "CSS lines added/removed," or "specific HTML modifications." The tracker says "p2 grew 2,671 to 2,931 lines" but only in L0 Notes.
6. **Post-REFINE PA auditor details.** The template has no REFINE-specific PA section. The actual tracker added a second round of PA reporting at L0, but L2/L3 tracking for REFINE PA auditors is absent.
7. **Screenshot-to-auditor routing.** Which screenshots went to which auditors? No field exists.
8. **Respawn tracking.** Auditors A and B required respawns (noted in Execution Summary) but there is no template field for respawn count, reason, or whether the respawned agent received the same inputs.

---

## 8. Two-Story Problem: Structural Fix

The problem is structural: L0 is cheap to fill (one `[x]` per phase), L2 is expensive (5-22 items per phase). Under time pressure, the orchestrator filled L0 and skipped L2.

**Proposed fix: Eliminate L0 as manual entry. Auto-derive it from L2.**

Specifically:
- Remove the L0 summary table's `[x]` checkboxes
- Replace with a computed field: "L0 PASS = all L2 items in this phase are checked"
- If L2 is incomplete, L0 automatically shows INCOMPLETE regardless of what the orchestrator believes
- This makes it impossible for L0 to claim success while L2 evidence is missing

Alternative (lighter touch): Add a mandatory "L2 completion gate" before L0 can be marked. The orchestrator must run a self-check: "Count unchecked L2 items in this section. If >0, L0 cannot be [x]."

---

## 9. Automation Opportunities

| Field | Automation Method | Effort |
|-------|-------------------|--------|
| PF-1a through PF-1p (file existence) | Script: `[ -f "$path" ] && wc -l` | Trivial |
| PF-2a through PF-2e (reference files) | Same script | Trivial |
| PF-3a (output dir) | `mkdir -p` + record path | Trivial |
| P0-2a line count | `wc -l p0-content-map.md` | Trivial |
| P1-2a line count | `wc -l p1-execution-brief.md` | Trivial |
| BV gate values | Gate runner already computes these; output to tracker format | Medium |
| P2-2a through P2-2d (HTML markers) | `grep` for conviction, self-eval, experiential markers | Trivial |
| P3A-2 screenshot counts | `ls screenshots/*.png \| wc -l` | Trivial |
| Agent Start/End times | `date -u +%Y-%m-%dT%H:%M:%SZ` at spawn/completion | Trivial |
| L0 derivation from L2 | Count `[x]` vs `[ ]` per section | Medium |
| Output Files Manifest existence | `[ -f "$path" ] && [ -s "$path" ]` | Trivial |
| Post-Run Verification (all) | Script combining above checks | Medium |

**Recommendation:** Create a `tracker-verify.sh` script that auto-fills all "Trivial" items and validates all "Medium" items. Run it at pipeline end before declaring complete. Estimated effort: 2-3 hours to write, saves 15-20 min per run and eliminates the two-story problem for automatable fields.

---

## 10. Summary Findings

| Finding | Severity |
|---------|----------|
| 67% overall field fill rate (mandate: 100%) | CRITICAL |
| L0 claims 100% complete; L2 shows ~40% complete for Phases 0-2 | CRITICAL |
| 3/6 agent detail tables completely blank (Phase 0, 1, 2) | HIGH |
| Zero BV gate detail despite "all PASS" claim | HIGH |
| Zero pre-flight checkboxes despite "all verified" claim | HIGH |
| Zero builder routing confirmation | HIGH |
| Post-Run Verification section entirely unfilled | MEDIUM |
| REFINE cycle lacks template-level L2 tracking for re-PA | MEDIUM |
| No gate failure triage field (intentional vs genuine) | MEDIUM |
| No automation for automatable fields | LOW |
