# MANIFEST.md Surgical Replacement Plan

**Author:** manifest-surgeon (Opus 4.6)
**Date:** 2026-02-24
**Source MANIFEST:** `ephemeral/va-extraction/MANIFEST.md` (1,192 lines, 70.6% compliance)
**Safe addition budget:** +20 lines net (per enrichment-safety-analysis Section 2)
**Strategy:** For each enrichment, identify specific removable/compressible content to offset additions. Target net change <= +20 across ALL MANIFEST enrichments.

---

## Enrichments Targeting MANIFEST.md

Six enrichments from `05-MASTER-ENRICHMENT-LIST.md` directly target MANIFEST.md:

| ID | Name | Severity | Lines Needed |
|----|------|----------|-------------|
| ME-005 | Fix Verdict Logic for Mechanical Identity Failures | BLOCKING | +8 |
| ME-008 | Add Usability Circuit Breaker to Orchestrator | BLOCKING | +7 |
| ME-017 | Add Phase 4: Fix Application Protocol | SIGNIFICANT | +12 |
| ME-042 | Update MANIFEST Line Counts | MINOR | 0 (replacement) |
| ME-045 | Add Context Budget Awareness | MINOR | +3 |
| ME-046 | Corrected Screenshot Recovery Protocol | MINOR | +4 |

**Total raw addition needed:** +34 lines
**Budget:** +20 lines
**Deficit to resolve:** -14 lines (must free at least 14 lines through removal/compression)

Additionally, PA question enrichments (ME-021, ME-022, ME-023, ME-037) require updates to MANIFEST L149-157 (agent roster question counts), but these are value replacements (number changes), not net additions.

---

## REMOVAL/COMPRESSION OPPORTUNITIES IDENTIFIED

### Opportunity R-1: Verdict Logic Duplication (MANIFEST has it THREE times)

The verdict logic appears at:
- **L275-285** (Section 3, artifact-gate-runner.md routing — full 8-rule priority list + combination paragraph)
- **L505-512** (Section 4, Phase 3C Weaver steps — full 7-rule priority list)
- Quickstart L39 references it indirectly

The Phase 3C copy (L505-512) is the authoritative execution copy. The Section 3 copy (L275-285) is routing context that DUPLICATES the Phase 3C copy line-for-line. The combination paragraph at L285 restates what the numbered list already says.

**Lines freed by compressing Section 3 copy:** 8 lines

**Old text (L275-287):**
```
**VERDICT LOGIC (Priority Order):**
1. ANY Identity gate FAIL → **REBUILD** (soul violation, cannot be patched) — HIGHEST PRIORITY
2. 3+ Anti-Pattern gates FAIL → **REBUILD** (systemic problem, patch won't fix)
3. ANY Perception gate FAIL → **REFINE** (can be fixed with targeted CSS edits)
4. <3 Anti-Pattern gates FAIL → **REFINE** (isolated issues)
5. PA-05 >= 3.5 AND all gates PASS → **SHIP**
6. PA-05 >= 3.0 AND all required gates PASS AND fixes are MECHANICAL only → **SHIP WITH FIXES**
7. PA-05 2.5-3.5 → **REFINE**
8. PA-05 < 2.5 → **REBUILD**

In combinations: Identity failures override all else. Anti-pattern 3+ overrides perception. Perception failures trigger REFINE regardless of PA-05 score. SHIP WITH FIXES requires ALL fixes to be CSS-only (MECHANICAL).

**VALUES REROUTING (34 items):**
```

**New text:**
```
**VERDICT LOGIC:** See Phase 3C (Section 4) for the authoritative 8-rule priority list. Identity FAIL = REBUILD. Perception FAIL = REFINE. PA-05 drives SHIP/REFINE/REBUILD. SHIP WITH FIXES requires ALL fixes MECHANICAL.

**VALUES REROUTING (34 items):**
```

**Lines freed:** 10 (13 lines old -> 3 lines new)

---

### Opportunity R-2: Known Historical Failure Modes Compression (L652-663)

Seven historical failure modes are listed with full prose descriptions. These duplicate content that lives in the artifact files (S-01 through S-20 in artifact-builder-recipe.md, gates in gate-runner-spec.md). In the MANIFEST, they serve as a quick reference but use ~14 lines for 7 items.

**Old text (L652-663):**
```
These failure modes have been observed in prior pipeline executions and are explicitly guarded against:

1. **Threshold Gaming (S-08):** Builder uses exact threshold minimums (16 RGB, 0.026em) everywhere. Anti-pattern gate GR-19 detects this. Fix: builder never sees thresholds.
2. **Prohibition Rigidity (S-02):** Builder receives raw prohibition list, becomes overly cautious. Fix: soul constraints delivered as world-description, not prohibitions.
3. **Checklist Format (S-01):** Builder receives checklist ("Verify X, Fail if Y") instead of recipe ("Read, Select, Deploy, Assess"). Fix: artifact-builder-recipe.md enforces recipe format.
4. **Whitespace Voids:** Stacked gaps exceed 120px. Gate GR-14 measures TOTAL stacked gap, not per-property. GR-44 detects trailing whitespace void. S-09 loophole closed.
5. **Ghost Mechanisms:** CSS values below perception thresholds (letter-spacing 0.001em). Gate GR-18 detects sub-perceptual values.
6. **CSS Budget Misallocation:** 22% of CSS spent on imperceptible micro-typography. Gate GR-22 checks budget distribution.
7. **Uniform Typography:** All text same size/weight. Gate GR-21 verifies typographic variation.
```

**New text (compressed to table):**
```
Historical failure modes (guarded by gates + routing):

| Failure | Suppressor | Gate | Fix |
|---------|-----------|------|-----|
| Threshold Gaming | S-08 | GR-19 | Builder never sees thresholds |
| Prohibition Rigidity | S-02 | BV-04 | World-description, not prohibitions |
| Checklist Format | S-01 | BV-03 | Recipe format enforced |
| Whitespace Voids | S-09 | GR-14, GR-44 | Total stacked gap measured |
| Ghost Mechanisms | — | GR-18 | Sub-perceptual values detected |
| CSS Budget Misallocation | — | GR-22 | Budget distribution checked |
| Uniform Typography | — | GR-21 | Typographic variation verified |
```

**Lines freed:** 3 (14 lines old -> 11 lines new; prose becomes table)

---

### Opportunity R-3: Appendix A Evidence Taxonomy Note Compression (L841)

**Old text (L841):**
```
**Note:** artifact-identity-perception.md uses a 5-level taxonomy (omitting PROVEN). artifact-gate-runner.md uses the full 6-level taxonomy. The 6-level version from council-verdict.md CF-04 is authoritative.
```

**New text:**
```
**Note:** The 6-level version from council-verdict.md CF-04 is authoritative. Some artifacts use subsets.
```

**Lines freed:** 1

---

### Opportunity R-4: Section 1 Architecture Prose Compression (L62-68)

The Architecture section uses 5 bullet points with some redundant parenthetical explanations.

**Old text (L62-68):**
```
### Architecture

- **Topology:** FLAT. Orchestrator spawns agents sequentially. Direct I/O between orchestrator and each agent. No nested hierarchies.
- **Default mode:** SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it).
- **Total agents:** 15 (1 orchestrator + 14 workers). The Gate Runner is NOT a separate agent — it is Playwright JavaScript code executed by the orchestrator directly.
- **Estimated runtime:** 80–105 minutes.
- **Target tier:** MIDDLE (default) or COMPOSED/FLAGSHIP (mode-dependent).
```

**New text (compress "Total agents" — gate runner clarification appears 3x in the MANIFEST already):**
```
### Architecture

- **Topology:** FLAT. Orchestrator spawns agents sequentially. Direct I/O. No nested hierarchies.
- **Default mode:** SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it).
- **Total agents:** 15 (1 orchestrator + 14 workers). Gate Runner is orchestrator-executed JS, not a separate agent.
- **Estimated runtime:** 80–105 minutes.
- **Target tier:** MIDDLE (default) or COMPOSED/FLAGSHIP (mode-dependent).
```

**Lines freed:** 0 (character compression within same line count -- frees capacity even if not line count)

---

### Opportunity R-5: Known Limitations Section (L969-971)

This 3-line section contains a single known limitation about orchestrator density. It can be compressed.

**Old text (L969-971):**
```
### Known Limitations

1. **Orchestrator artifact is dense.** At 1,058 lines, artifact-orchestrator.md covers execution protocol (Sections 0-8, ~500 lines), orchestrator decision rules (Section 9, ~87 lines, GR-23-28), and historical/theoretical context (Sections 10+, ~470 lines). For execution, focus on Sections 0-9.
```

**New text:**
```
### Known Limitations

1. **Orchestrator artifact is dense** (1,058 lines). For execution, focus on Sections 0-9 (~590 lines).
```

**Lines freed:** 1

---

### TOTAL LINES FREED BY REMOVALS: 15

| Opportunity | Lines Freed |
|-------------|------------|
| R-1: Verdict logic dedup | 10 |
| R-2: Historical failures to table | 3 |
| R-3: Evidence taxonomy note | 1 |
| R-5: Known limitations compress | 1 |
| **Total** | **15** |

---

## ENRICHMENT-BY-ENRICHMENT SURGERY PLAN

### Enrichment: ME-005 — Fix Verdict Logic for Mechanical Identity Failures
- **Lines needed:** 8
- **Replacement strategy:** COMPRESS (R-1 verdict logic dedup frees 10 lines, absorbing this enrichment entirely)
- **Lines freed by R-1:** 10
- **Net change:** -2 (10 freed - 8 added)
- **Exact old text (L275-285):**
```
**VERDICT LOGIC (Priority Order):**
1. ANY Identity gate FAIL → **REBUILD** (soul violation, cannot be patched) — HIGHEST PRIORITY
2. 3+ Anti-Pattern gates FAIL → **REBUILD** (systemic problem, patch won't fix)
3. ANY Perception gate FAIL → **REFINE** (can be fixed with targeted CSS edits)
4. <3 Anti-Pattern gates FAIL → **REFINE** (isolated issues)
5. PA-05 >= 3.5 AND all gates PASS → **SHIP**
6. PA-05 >= 3.0 AND all required gates PASS AND fixes are MECHANICAL only → **SHIP WITH FIXES**
7. PA-05 2.5-3.5 → **REFINE**
8. PA-05 < 2.5 → **REBUILD**

In combinations: Identity failures override all else. Anti-pattern 3+ overrides perception. Perception failures trigger REFINE regardless of PA-05 score. SHIP WITH FIXES requires ALL fixes to be CSS-only (MECHANICAL).
```
- **Exact new text:**
```
**VERDICT LOGIC:** See Phase 3C (Section 4) for the authoritative 8-rule priority list. Summary: Identity FAIL = REBUILD. Perception FAIL = REFINE. PA-05 drives SHIP/REFINE/REBUILD. SHIP WITH FIXES requires ALL fixes MECHANICAL.

**MECHANICAL EXCEPTION:** If ALL identity gate failures are auto-classified MECHANICAL by the gate runner (criteria: fix requires <=5 CSS lines, no HTML structural change, no design decision), verdict is REFINE, not REBUILD. Gate runner auto-classifies; orchestrator does NOT override classification.
```
- **Where ME-005's MANIFEST portion also needs updating:** The Phase 3C verdict logic at L505-512 remains the authoritative copy and gets the MECHANICAL exception added there too. Add after L512:
```
   - MECHANICAL EXCEPTION: If ALL identity gate failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision — auto-classified by gate runner), treat as REFINE, not REBUILD.
```
  This adds 1 line at L513.
- **Total net for ME-005:** -2 (Section 3) + 1 (Phase 3C) = **-1 net**

---

### Enrichment: ME-008 — Add Usability Circuit Breaker to Orchestrator
- **Lines needed:** 7
- **Replacement strategy:** ADD at Phase 3B->3C handoff (between L492 "Output:" and L494 "### Phase 3C"), using R-2 freed lines
- **Lines freed by R-2:** 3
- **Net change:** +4
- **Exact insertion point:** After L492 ("**Output:** Gestalt synthesis report + 9 individual audit reports."), before L494 ("### Phase 3C: Verdict"):
```

**USABILITY CIRCUIT BREAKER:** Before passing to Weaver, orchestrator scans all 9 auditor reports for BLOCKING-severity findings related to: text legibility, information accessibility, content completeness, or navigation. If ANY auditor flags BLOCKING usability: (1) elevate to BLOCKING-USABILITY, (2) annotate for Weaver as "must be Fix #1", (3) if SHIP WITH FIXES verdict, verify usability fix is in the fix list.
```
- **Why this location:** The circuit breaker fires between PA completion and Weaver spawn — exactly the Phase 3B->3C handoff.

---

### Enrichment: ME-017 — Add Phase 4: Fix Application Protocol
- **Lines needed:** 12
- **Replacement strategy:** ADD new subsection after Phase 3C (after L521), using R-3 + R-5 freed lines (2 total)
- **Lines freed by R-3 + R-5:** 2
- **Net change:** +10
- **Exact insertion point:** After L521 ("**Single-pass behavior:** ... before requiring human intervention."), before L523 ("### Per-Agent Output Logging"):
```

### Phase 4: Fix Application (SHIP WITH FIXES only, ~15 min)

**Trigger:** Verdict is SHIP WITH FIXES and ALL fixes are classified MECHANICAL.

**Steps:**
1. Orchestrator applies MECHANICAL fixes only (CSS value changes, font-stack cleanup, html color declaration). No structural or compositional changes.
2. Re-run ONLY the gates that originally failed.
3. If all re-run gates PASS: update verdict to SHIP.
4. If any re-run gates still FAIL: maintain SHIP WITH FIXES + updated fix list.
5. Budget: <=15 minutes, <=50 CSS lines changed.

**Circuit breaker update:** Maximum iterations: 1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix before human intervention.
```
- **Also update L605 circuit breaker.** Replace:
```
**Maximum iterations: 1 REBUILD + 1 REFINE before human intervention.**
```
  With:
```
**Maximum iterations: 1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix before human intervention.**
```
  This is a replacement (0 net lines).

---

### Enrichment: ME-042 — Update MANIFEST Line Counts
- **Lines needed:** 0 (in-place value replacements)
- **Replacement strategy:** REPLACE values in existing table cells
- **Lines freed:** 0
- **Net change:** 0
- **Exact replacements:**
  1. L15: `components.css` line count — verify actual and update `(290 lines)` if changed
  2. L67: Update estimated runtime from `80–105 minutes` to `80–180 minutes` (accounts for context window boundaries per ME-045)
  3. L346-356: Update honest complexity accounting table values to current actuals
  4. L921: Update `components.css` path entry line count
  5. Add pre-flight note to Quickstart L14: after `- \`design-system/compositional-core/components/components.css\` (290 lines)` — verify the line count matches within +/-20%

  The pre-flight note is a parenthetical addition to an existing line, not a new line. Net zero.

---

### Enrichment: ME-045 — Add Context Budget Awareness (MANIFEST portion)
- **Lines needed:** 3 (MANIFEST portion only; artifact-orchestrator.md gets the bulk)
- **Replacement strategy:** COMPRESS existing runtime estimate at L67 to absorb context awareness note
- **Lines freed:** 0 (absorbed into ME-042's L67 replacement)
- **Net change:** +3
- **Exact insertion point:** After L67 ("- **Estimated runtime:** 80–105 minutes."):
```
- **Context sessions:** Typically 2-3 sessions due to context exhaustion. Plan session boundaries between Phase 2 (build) and Phase 3A (gates). Save all state to files before each boundary.
```
  This replaces the need for a separate section. The runtime at L67 is also updated via ME-042 to `80–180 minutes` to reflect multi-session reality.

  Note: The full ME-045 enrichment also targets `artifact-orchestrator.md` with more detailed guidance. Only the MANIFEST summary goes here.

---

### Enrichment: ME-046 — Corrected Screenshot Recovery Protocol
- **Lines needed:** 4
- **Replacement strategy:** ADD to Phase 3A section (after L476 "Output: Complete screenshot set..."), consuming remaining budget
- **Lines freed:** 0
- **Net change:** +4
- **Exact insertion point:** After L476 ("**Output:** Complete screenshot set at 3 viewports + gate runner JSON results."):
```

**Screenshot correction protocol:** If re-capture is needed (e.g., after animation override failure), corrected screenshots MUST cover the entire page at regular intervals (every 900px of scroll height), not selected regions. Correction must be algorithmic, not curated.
```

---

## INDIRECT MANIFEST UPDATES (PA Question Changes)

These are NOT net additions — they are value replacements in existing table cells at L149-157 (Agent Roster, Phase 3B).

### ME-021 (Add PA-80): Update Auditor E count from 6 to 7 questions
- L153: Change `PA-14, PA-15, PA-37-39, PA-63 (6 questions)` to `PA-14, PA-15, PA-37-39, PA-63, PA-80 (7 questions)`

### ME-022 (Add PA-81): Route to experiential pass or Auditor E — update accordingly
- If routed to Auditor E: L153 count becomes 8

### ME-023 (Add PA-54): Route to Auditor G
- L155: Change `PA-18-20, PA-42-44, PA-68 (7 questions)` to `PA-18-20, PA-42-44, PA-54, PA-68 (8 questions)`

### ME-037 (Retire 4 questions): Update affected auditor counts
- PA-06 retired: Update Auditor B count (L150) from 8 to 7
- PA-09 retired: Update Auditor C count (L151) from 11 to 10
- PA-40 retired: Update Auditor F count (L154) from 6 to 5

### L159 total update:
Change `**Total: 69 questions across 9 auditors.**` to reflect new total after retirements and additions.
Formula: 69 - 4 (retired) + 3 (ME-021/022/023) = 68 (or adjust if ME-022 routes elsewhere).

**Net lines for indirect updates:** 0 (all in-place replacements)

---

## NET BUDGET ACCOUNTING

| Item | Lines Added | Lines Freed | Net |
|------|-----------|------------|-----|
| R-1: Verdict logic compression | — | 10 | -10 |
| R-2: Historical failures to table | — | 3 | -3 |
| R-3: Evidence taxonomy note | — | 1 | -1 |
| R-5: Known limitations compress | — | 1 | -1 |
| ME-005: Mechanical exception (Section 3) | 5 | (via R-1) | +5 |
| ME-005: Mechanical exception (Phase 3C) | 1 | — | +1 |
| ME-008: Usability circuit breaker | 4 | — | +4 |
| ME-017: Phase 4 fix application | 12 | — | +12 |
| ME-017: Circuit breaker L605 update | 0 | — | 0 |
| ME-042: Line count updates | 0 | — | 0 |
| ME-045: Context sessions note | 2 | — | +2 |
| ME-046: Screenshot recovery protocol | 3 | — | +3 |
| PA question updates (indirect) | 0 | — | 0 |
| **TOTAL** | **27** | **15** | **+12** |

**+12 net lines. Within the +20 budget. 8 lines of headroom remaining.**

---

## IMPLEMENTATION ORDER

1. **Apply compressions FIRST** (R-1, R-2, R-3, R-5) — frees 15 lines
2. **Apply ME-042** (line count replacements) — 0 net, immediate accuracy improvement
3. **Apply ME-005** (verdict logic) — uses R-1 freed space + adds mechanical exception
4. **Apply ME-008** (usability circuit breaker) — 4 lines in Phase 3B->3C gap
5. **Apply ME-017** (Phase 4) — 12 lines after Phase 3C + circuit breaker L605 update
6. **Apply ME-045** (context sessions) — 2 lines after architecture section
7. **Apply ME-046** (screenshot recovery) — 3 lines after Phase 3A output
8. **Apply PA question updates** (indirect) — value replacements in auditor roster

**Verify after each step:** Total MANIFEST line count stays within 1,192 + 20 = 1,212 ceiling.

---

## RISK ASSESSMENT

| Enrichment | Cluster(s) Affected | Risk Level | Mitigation |
|------------|---------------------|-----------|------------|
| ME-005 | Cluster 3 (Gate Verification), Cluster 5 (Routing) | RISK | Must stay synchronized with gate-manifest.json and gate-runner-core.js verdict logic. Mechanical classification criteria are binary (<=5 CSS lines AND no HTML AND no design decision). |
| ME-008 | Cluster 4 (PA Audit Integrity) | SAFE | Lightweight keyword scan only. Does not modify gate code, PA routing, or verdict logic. |
| ME-017 | Cluster 3 (Gate Verification), Cluster 5 (Routing) | CAUTION | New pipeline phase adds complexity. Scoped to MECHANICAL fixes only. Must update circuit breaker, dependency graph (Section 5), and EXECUTION-TRACKER-TEMPLATE.md. |
| ME-042 | Cluster 5 (Routing) | SAFE | Metadata corrections only. |
| ME-045 | None | SAFE | Documentation/planning guidance. |
| ME-046 | Cluster 4 (PA Audit Integrity) | SAFE | Adds recovery protocol, does not modify capture logic. |

---

## CROSS-FILE COORDINATION REQUIRED

These MANIFEST changes require coordinated updates in other files:

| MANIFEST Change | Other File | Update Needed |
|----------------|-----------|---------------|
| ME-005 mechanical exception | gate-manifest.json L55-59 | Add MECHANICAL exception to verdict logic |
| ME-005 mechanical exception | gate-runner-core.js L752-778 | Auto-classify mechanical failures in verdict summary |
| ME-017 Phase 4 | EXECUTION-TRACKER-TEMPLATE.md | Add Phase 4 tracking fields |
| ME-017 Phase 4 | MANIFEST Section 5 dependency graph | Add Phase 4 node after Phase 3C |
| PA question updates | pa-deployment.md | Assignment table updates |
| PA question updates | pa-manifest.md | Checklist updates |
| PA question updates | pa-questions.md | Question definitions |

---

*Surgery plan complete. 6 enrichments mapped, 4 compression opportunities identified freeing 15 lines, net change +12 lines (within +20 budget with 8 lines headroom). All changes use declarative routing format consistent with MANIFEST patterns. No prose additions -- all enrichments use binary rules or structured protocol format.*
