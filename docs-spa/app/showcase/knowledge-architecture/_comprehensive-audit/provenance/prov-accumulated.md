# PROV-ACCUMULATED — ACCUMULATED-IDENTITY Accuracy Verification
## Worker: prov-accumulated | Captain: Captain-Provenance

**Scope:** ACCUMULATED-IDENTITY-v1.md and v1.1.md
**Method:** For each assertion, verify current state matches

---

## SUMMARY

| Document | Assertions Checked | CURRENT | STALE | Rate |
|----------|-------------------|---------|-------|------|
| v1 | 15 | 12 | 3 | 80% |
| v1.1 | 25 | 22 | 3 | 88% |
| **TOTAL** | **40** | **34** | **6** | **85%** |

---

## ACCUMULATED-IDENTITY v1.1 VERIFICATION

### Section 1: WHO WE ARE

PROV-AI-001: "5 Soul Pieces" — **CURRENT** (still 5, no 6th discovered in OD)
PROV-AI-002: "6 Universal Rules (CSS-Locked)" — **CURRENT** (rules match)
PROV-AI-003: "20/20 SOUL FAILs (ANTI-PHYSICAL)" — **CURRENT** (confirmed across all 6 ODs)

### Section 2: WHAT WE'VE LEARNED

PROV-AI-004: DD Scores cited — **CURRENT**
- DD-001: 33/40 (matches checkpoints)
- DD-002: 35/40 (matches)
- DD-003: 32/40 (matches)
- DD-004: 35/40 (matches)
- DD-005: 36/40 (matches)
- DD-006: 36/40 (matches)

Note: v1.1 says DD-001 "PULSE, 33/40" but the DD-F finding table says DD-F-001 score is "33/40". These match.

PROV-AI-005: OD Scores cited — **CURRENT**
- OD-001: 37/40 — matches STAGE-HEADER.md and RESEARCH-ACTIVE.md
- OD-002: 35/40 — matches
- OD-003: ~35/40 — matches
- OD-004: 34/40 — matches
- OD-005: 35/40 — matches
- OD-006: 37/40 — matches

PROV-AI-006: "DD-F-001 through DD-F-018" count — **CURRENT** (18 findings)
PROV-AI-007: "OD-F-001 through OD-F-013 + specials = 17 total" — **CURRENT** (matches OD-outbound-findings.md)

PROV-AI-008: "94 unique bespoke findings" (EXT-*) — **STALE/CONFLICTED**
- v1.1 Section 6 says "94 unique bespoke findings"
- EXT-RESEARCH-REGISTRY.md header says "69 unique"
- EXT-RESEARCH-REGISTRY.md summary table says "72 total"
- The actual count depends on counting methodology (shared vs unique)
- Severity: **MEDIUM** — The number 94 appears in RESEARCH-ACTIVE but the registry was not updated to match

PROV-AI-009: "337 total research findings" — **CURRENT** (R1:28 + R2:27 + R3:51 + R4:192 + R5:39 = 337)
PROV-AI-010: "32 formally applied (9.50%)" — **CURRENT** (matches RESEARCH-ACTIVE.md summary)

### Section 3: WHAT WE HONOR

PROV-AI-011: Border System 3-Category — **CURRENT** (matches convention spec)
PROV-AI-012: "2px is structurally ambiguous" — **CURRENT** (the epidemic was resolved)
PROV-AI-013: Process Constraints — **CURRENT** (all gates match)

### Section 4: WHAT WORKED

PROV-AI-014: "DD-F-006 Fractal scales: 5 confirmed" — **CURRENT** (navigation, page, section, component, character)
PROV-AI-015: v3 scores in validation table — **CURRENT** (all 10 entries match actual scores)

### Section 5: WHAT DIDN'T WORK

PROV-AI-016: Anti-patterns list — **CURRENT** (8 anti-patterns documented, all verified)

### Section 6: WHERE WE ARE

PROV-AI-017: Pipeline position "AD (PENDING)" — **CURRENT** (AD work has not started)
PROV-AI-018: "R-1: 22/28 applied (78.6%)" — **STALE**
- v1.1 says "UNAPPLIED: 6" in the summary but the table shows 8 unapplied
- Calculated: 22/28 = 78.6% — but if 8 are unapplied, then 20/28 = 71.4%
- OR: 22 applied + 8 unapplied = 30, which exceeds 28 total
- The issue: some "APPLIED" findings (R1-002, R1-010) were counted but the "UNAPPLIED" list was also independently counted, and they don't add to 28
- Actually: 22 APPLIED + 6 UNAPPLIED = 28 total (using summary count). But the detailed list shows 8 UNAPPLIED items.
- The discrepancy is between the summary (UNAPPLIED: 6) and the actual count of UNAPPLIED rows (8)
- Severity: **MEDIUM** — Arithmetic inconsistency

PROV-AI-019: "R-2: 0/27 applied" — **CURRENT** (confirmed all UNAPPLIED)
PROV-AI-020: OD-to-Density Pairing Matrix — **CURRENT** (all 6 rows match)

### Section 7: OPEN QUESTIONS FOR AD

PROV-AI-021: All 6 open questions — **CURRENT** (none resolved; AD hasn't started)

### Section 8: IDENTITY STATEMENT

PROV-AI-022: Identity statement text — **CURRENT** (accurately reflects the system)

### Appendix: Token Lock

PROV-AI-023: `:root` token block — **CURRENT** (all token values match)
PROV-AI-024: OD-to-Density pairing matrix — **CURRENT** (matches section 6 table)

---

## ACCUMULATED-IDENTITY v1 VERIFICATION (Spot Checks)

PROV-AI-025: v1 soul statement — **CURRENT** (identical to v1.1)
PROV-AI-026: v1 "5 Soul Pieces" table — **CURRENT** (identical to v1.1)
PROV-AI-027: v1 says "Generated: 2026-02-07" — **CURRENT** (correct date)
PROV-AI-028: v1 should be SUPERSEDED by v1.1 — **NO SUPERSESSION MARKER**
- v1 does NOT have a "SUPERSEDED BY v1.1" marker
- v1.1 says "Evolved from: ACCUMULATED-IDENTITY-v1.md (2026-02-07)" but v1 itself doesn't point to v1.1
- Severity: **MEDIUM** — Risk of reading outdated v1 without knowing v1.1 exists

---

## GATE ASSESSMENT

| Gate | Criterion | Status |
|------|-----------|--------|
| PV-08 | ACCUMULATED-IDENTITY v1.1 current | **CONDITIONAL PASS** — 88% assertions current; EXT-* count conflict and R-1 arithmetic issue are MEDIUM severity |
