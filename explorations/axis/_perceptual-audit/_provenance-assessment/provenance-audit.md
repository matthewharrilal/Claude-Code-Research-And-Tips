# AD Provenance Chain Audit

**Auditor:** Provenance Chain Auditor
**Date:** 2026-02-11
**Scope:** Complete inventory of AD provenance state, layer-by-layer comparison against OD baseline, gap identification

---

## A. AD Provenance Inventory

### A1. Formal Chain Documents (stage-4-axis-ad/)

Location: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/`

| File | Lines | Quality | Contents |
|------|-------|---------|----------|
| `STAGE-HEADER.md` | 140 | THOROUGH | Frontmatter chain (predecessor/successor), status, consumed/produced tables, key constraint DD-F-012, file inventory. Complete. |
| `CLAUDE.md` | 110 | THOROUGH | Navigation file, identity, reading order, file inventory, connection map, mindset section. Complete. |
| `AD-outbound-findings.md` | 506 | THOROUGH | All 28 AD-F findings (AD-F-001 through AD-F-028), full table format with ID, title, source, severity, classification, description, evidence. Frontmatter with predecessor/successor chain. Complete. |
| `AD-SYNTHESIS.md` | 298 | THOROUGH | 12 sections: story, consumed/produced, 6-pattern analysis, 3-way unification, DD-F-012 elevation, DD-F-006 validation, key decisions, negative space, transition grammar, research consumption, audit summary, cross-AD lessons. Citations throughout. Complete. |
| `AD-AUDIT-SYNTHESIS.md` | 357 | THOROUGH | Priority-ranked fix guide. Severity breakdown (~47 actionable from ~250+ raw). 7 BROKEN/SOUL VIOLATION, 11 OVERFLOW, 1 REJECT, etc. Per-fix details with file, location, current/required. Complete. |
| `HANDOFF-AD-TO-CD.md` | 233 | THOROUGH | Gate file with frontmatter chain. Acknowledgment protocol, central discovery, 28 findings summary, mandatory constraints, R-5 research mandate, convention spec carry-forward. Complete. |
| **TOTAL** | **1,644** | | **6 files** |

### A2. Working Artifacts (knowledge-architecture/_ad-execution/)

Location: `docs-spa/app/showcase/knowledge-architecture/_ad-execution/`

| File | Lines | Quality | Contents |
|------|-------|---------|----------|
| `AD-CONVENTION-SPEC.md` | 821 | THOROUGH | Convention specification created BEFORE build (lessons from OD dialect problem). 822-line spec covering all visual conventions. |
| `AD-RESEARCH-GATE.md` | 96 | THIN | Brief research gate reference. Much thinner than OD's OD-RESEARCH-GATE.md (440 lines). |
| `R-4-AD-EVALUATION.md` | 429 | ADEQUATE | R-4 finding-by-finding evaluation (192 findings). |
| `r2-ad-mapping.md` | 200 | ADEQUATE | R-2 to AD mapping (27 findings evaluated). |
| `AD-BUILD-STATE.md` | 78 | ADEQUATE | Build tracking state file. |
| `AD-SOUL-TEMPLATE.html` | N/A | ADEQUATE | Soul template HTML used as base for all builds. |
| `findings-builder-{A-F}.md` | 849 total | THOROUGH | 6 builder finding files (104+151+98+140+136+220). Raw findings from each builder agent. |
| `scribe-report-wave1{A,B,C}.md` | 726 total | THOROUGH | 3 scribe reports (220+210+296). Cross-wave documentation. |
| `scribe-spotcheck-wave1{A,B,C}.md` | 179 total | ADEQUATE | 3 spotcheck files (31+67+81). |
| `identity-delta-ad-wave1{A,B,C}.md` | 304 total | ADEQUATE | 3 identity delta files (94+113+97). |
| `identity-checkpoint-cumulative.md` | 41 | THIN | Cumulative identity checkpoint. Very brief. |
| `research-package-ad-{001-006}.md` | 2,048 total | THOROUGH | 6 research packages (302+302+307+325+358+454). Per-exploration research inputs. |
| `hygiene-spacing-AD-{001-006}.md` | 1,529 total | THOROUGH | 6 spacing audit reports. |
| `hygiene-overflow-AD-{001-006}.md` | 1,625 total | THOROUGH | 6 overflow audit reports. |
| `hygiene-fresheys-AD-{001-006}.md` | 1,005 total | THOROUGH | 6 fresh-eyes audit reports. |
| `visual-audit-{001-002,003-004,005-006}.md` | 349 total | ADEQUATE | 3 visual audit reports covering pairs. |
| `structural-audit-report.md` | 285 | ADEQUATE | Structural audit report. |
| `provenance-audit-report.md` | 325 | ADEQUATE | Provenance audit report (internal). |
| `research-auditor-report.md` | 114 | THIN | Research auditor report. Brief. |
| `convention-auditor-report.md` | 147 | ADEQUATE | Convention audit report. |
| `fresh-eyes-report.md` | 199 | ADEQUATE | Fresh-eyes summary report. |
| `FIX-MANIFEST.md` | 138 | ADEQUATE | Fix tracking manifest. |
| `fix-report-fixer-{A,B,C}.md` | 325 total | ADEQUATE | 3 fix reports (92+100+133). |
| `fix-verification-report.md` | 100 | ADEQUATE | Fix verification report. |
| `post-fix-verification-report.md` | 187 | ADEQUATE | Post-fix verification. |
| `weaver-audit-synthesis.md` | 312 | THOROUGH | Weaver's cross-agent synthesis of audit. |
| **TOTAL** | **~12,411** | | **61 files** |

### A3. Pre-Execution Analysis (_ad-skeleton-analysis/)

Location: `docs-spa/app/showcase/knowledge-architecture/_ad-skeleton-analysis/`

| Subdirectory | Files | Lines (est.) | Quality | Contents |
|-------------|-------|-------------|---------|----------|
| `skeleton-dimensions/` | 8 files | ~3,000 | THOROUGH | 8 dimension analysis files from 15-agent team |
| `gap-analysis/` | 15 files | ~4,000 | THOROUGH | Deep gap analysis: 40 gaps, 15 cross-refs, 5 contradictions, 4 patterns |
| `master-synthesis/` | 11 files | ~8,411 | THOROUGH | 11-agent master execution spec (MASTER-AD-EXECUTION-SPEC.md = 1,407 lines) |
| **TOTAL** | **34 files** | **~15,411** | | Pre-execution planning artifacts |

### A4. Exploration HTML Files

Location: `docs-spa/app/showcase/explorations/axis/`

| File | Lines | Provenance Header | Quality |
|------|-------|-------------------|---------|
| `AD-001-z-pattern.html` | 1,694 | YES (RAR-style, lines 1-80+) | THOROUGH — Full Research Application Record |
| `AD-002-f-pattern.html` | 1,639 | YES (RAR + Inline Threading Header) | THOROUGH — Both RAR and threading header |
| `AD-003-bento-grid.html` | 1,845 | **MISSING** — starts with `<!DOCTYPE html>` | **GAP** — No inline threading header, no RAR |
| `AD-004-spiral.html` | 1,432 | **MISSING** — starts with `<!DOCTYPE html>` | **GAP** — No inline threading header, no RAR |
| `AD-005-choreography.html` | 1,846 | YES (Inline Threading Header) | THOROUGH — Threading header present |
| `AD-006-compound.html` | 2,276 | YES (Inline Threading Header) | THOROUGH — Threading header present |
| `CLAUDE.md` | 83 | N/A | ADEQUATE — Navigation file |
| **TOTAL** | **10,732** | 4/6 have headers | **2/6 MISSING headers** |

### A5. Perceptual Audit Artifacts (PA)

Location: `explorations/axis/_perceptual-audit/`

| Subdirectory/File | Files | Contents |
|-------------------|-------|----------|
| `AD-001/` through `AD-006/` | 6 dirs, ~42 md files + 100+ screenshots | Audit reports, cold-look files, findings files, fix reports, weaver drafts |
| `_skill-evolution/` | 5 files | Failure analysis, OD benchmark, skill redesign, synthesis, team structure |
| `lock-sheet.md` | 1 | Lock sheet for audit |
| `preflight-report.md` | 1 | Preflight report |
| `FIX-VERIFICATION-REPORT.md` | 1 | Fix verification |
| **TOTAL** | ~50 md files + 100+ screenshots | Comprehensive PA audit artifacts |

### A6. Pipeline-Level Documents (Updated for AD)

| File | Lines | AD Content | Quality |
|------|-------|-----------|---------|
| `PIPELINE-MANIFEST.md` | ~400+ | Section for Stage 4 AD-F findings — summary only (3 lines), defers to AD-outbound-findings.md | ADEQUATE but thin vs OD |
| `ACCUMULATED-IDENTITY-v2.md` | 518 | Full updated identity with AD discoveries | THOROUGH |
| `ACCUMULATED-IDENTITY-v1.1.md` | 576 | Input identity (pre-AD) | THOROUGH |
| `SOUL-DISCOVERIES.md` | 299 | **NOT UPDATED** — still says "AD is the next opportunity for soul discovery" | **GAP** |
| `RESEARCH-ACTIVE.md` | ~350+ | **NOT UPDATED** for AD — R-2 still says "Apply in: AD-003", no AD application records | **GAP** |
| `EXT-RESEARCH-REGISTRY.md` | 331 | **NOT UPDATED** for AD — zero EXT-AXIS-* entries (33 findings exist but not registered) | **CRITICAL GAP** |
| `provenance/CLAUDE.md` | ~200 | Updated — stage-4-axis-ad/ listed as COMPLETE | ADEQUATE |

---

## B. OD Provenance Inventory (Baseline for Comparison)

### B1. Formal Chain Documents (stage-3-organization-od/)

| File | Lines | Quality |
|------|-------|---------|
| `STAGE-HEADER.md` | 305 | THOROUGH |
| `CLAUDE.md` | 158 | THOROUGH |
| `OD-outbound-findings.md` | 935 | THOROUGH |
| `OD-SYNTHESIS.md` | 672 | THOROUGH |
| `OD-AUDIT-SYNTHESIS.md` | 522 | THOROUGH |
| `OD-CONVENTION-SPEC.md` | 468 | THOROUGH — **IN provenance directory** |
| `OD-RESEARCH-GATE.md` | 440 | THOROUGH — **IN provenance directory** |
| `HANDOFF-OD-TO-AD.md` | 351 | THOROUGH |
| **TOTAL** | **3,851** | **8 files** |

### B2. Working Artifacts

| Location | Files | Lines |
|----------|-------|-------|
| `_od-audit-scratchpad/` | 29 md files | ~8,000+ |
| `_od-reenrichment/` | 65 files | ~15,000+ |
| **TOTAL** | ~94 files | ~23,000+ |

### B3. Pipeline-Level Documents (After OD)

| File | OD Content | Quality |
|------|-----------|---------|
| `PIPELINE-MANIFEST.md` | Individual DD-F and COMP-F findings listed | THOROUGH |
| `SOUL-DISCOVERIES.md` | Updated with OD negative finding (no 6th soul piece) | ADEQUATE |
| `RESEARCH-ACTIVE.md` | Updated with OD application records | THOROUGH |
| `EXT-RESEARCH-REGISTRY.md` | All 94 EXT-* OD findings registered | THOROUGH |

---

## C. Layer-by-Layer Comparison

| Layer | OD Status | AD Status | Gap |
|-------|-----------|-----------|-----|
| **Findings (XX-F-*)** | 17 OD-F findings, 935 lines, full table format | 28 AD-F findings, 506 lines, full table format | NONE — AD has more findings, slightly denser format |
| **Outbound findings** | OD-outbound-findings.md (935 lines) | AD-outbound-findings.md (506 lines) | NONE — Both exist and are complete |
| **Convention spec** | OD-CONVENTION-SPEC.md **IN provenance dir** (468 lines) | AD-CONVENTION-SPEC.md **only in _ad-execution/** (821 lines) | **MEDIUM GAP** — AD convention spec not promoted to provenance directory |
| **Research Gate** | OD-RESEARCH-GATE.md **IN provenance dir** (440 lines) | AD-RESEARCH-GATE.md **only in _ad-execution/** (96 lines, thin) | **HIGH GAP** — Not promoted AND much thinner. R-4-AD-EVALUATION.md (429 lines) exists but also not promoted |
| **Synthesis** | OD-SYNTHESIS.md (672 lines) | AD-SYNTHESIS.md (298 lines) | MINOR — AD shorter but covers same structure (12 sections vs OD's larger scope) |
| **Audit Synthesis** | OD-AUDIT-SYNTHESIS.md (522 lines) | AD-AUDIT-SYNTHESIS.md (357 lines) | NONE — Both complete, AD slightly shorter |
| **Identity evolution** | ACCUMULATED-IDENTITY-v1.1.md (576 lines, updated for OD) | ACCUMULATED-IDENTITY-v2.md (518 lines, updated for AD) | NONE — Both exist and are complete |
| **Soul discoveries update** | SOUL-DISCOVERIES.md updated with OD negative finding | **NOT UPDATED** for AD negative finding (no 6th soul piece) | **MEDIUM GAP** — Should record AD's confirmation |
| **Handoff doc** | HANDOFF-OD-TO-AD.md (351 lines) | HANDOFF-AD-TO-CD.md (233 lines) | NONE — Both exist and are complete |
| **Research threading** | RESEARCH-ACTIVE.md fully updated for OD | **NOT UPDATED** for AD | **HIGH GAP** — R-4 (88% applied), R-2 (~67% applied), EXT-AXIS-* (33 findings) not tracked |
| **EXT-RESEARCH-REGISTRY** | All 94 EXT-* OD findings registered | **ZERO** EXT-AXIS-* entries (33 findings) | **CRITICAL GAP** — 33 bespoke research findings unregistered |
| **Provenance chain headers (HTML)** | All 6 OD HTML files have inline threading headers | 4/6 AD HTML files have headers; **AD-003 and AD-004 MISSING** | **MEDIUM GAP** — 2/6 explorations lack provenance headers |
| **PIPELINE-MANIFEST update** | Individual findings listed | Summary paragraph only (3 lines), defers to AD-outbound-findings | MINOR — Approach is valid (defer to outbound) but less granular |
| **STAGE-HEADER** | 305 lines | 140 lines | MINOR — AD shorter but structurally complete |

---

## D. Missing Files / Gaps

### D1. CRITICAL Gaps (Provenance Chain Breaks)

| # | Gap | Impact | OD Equivalent | Severity |
|---|-----|--------|---------------|----------|
| 1 | **EXT-RESEARCH-REGISTRY.md not updated with EXT-AXIS-* findings** | 33 bespoke research findings (EXT-AXIS-Z 1-5, EXT-AXIS-F 1-5, EXT-AXIS-B 1-5, EXT-AXIS-SP 1-5, EXT-AXIS-CH 1-5, EXT-AXIS-X 1-8) are CONSUMED in AD explorations but UNREGISTERED in the central registry. A CD agent looking for bespoke axis research will find nothing in EXT-RESEARCH-REGISTRY.md. | OD registered all 94 EXT-* findings. | **CRITICAL** |
| 2 | **RESEARCH-ACTIVE.md not updated with AD application records** | R-4 (169/192 cited, ~88%), R-2 (25/27 mapped, ~67% applied), and all EXT-AXIS-* findings are consumed in AD but not tracked in the central research tracking file. RESEARCH-ACTIVE.md still has future-tense entries like "Apply in: AD-003" from pre-AD planning. | OD updated RESEARCH-ACTIVE.md with all application records. | **HIGH** |

### D2. HIGH Gaps (Documents Missing from Provenance Directory)

| # | Gap | Impact | OD Equivalent | Severity |
|---|-----|--------|---------------|----------|
| 3 | **AD-CONVENTION-SPEC.md not in provenance/stage-4-axis-ad/** | 821-line convention spec exists only in `_ad-execution/` working directory. OD's convention spec was promoted to the provenance directory. A CD agent following the provenance pattern will not find it. | OD-CONVENTION-SPEC.md (468 lines) is in provenance directory. | **HIGH** |
| 4 | **AD-RESEARCH-GATE.md thin (96 lines) and not in provenance** | The research gate is both thin (96 lines vs OD's 440) and not promoted to provenance. R-4-AD-EVALUATION.md (429 lines) and r2-ad-mapping.md (200 lines) provide the detail but are also only in working directory. | OD-RESEARCH-GATE.md (440 lines) is in provenance directory. | **HIGH** |

### D3. MEDIUM Gaps (Incomplete Updates)

| # | Gap | Impact | Severity |
|---|-----|--------|----------|
| 5 | **SOUL-DISCOVERIES.md not updated for AD** | Still says "AD is the next opportunity for soul discovery." AD confirmed no 6th soul piece, extended ANTI-PHYSICAL identity with AD-005 choreography paradox. This should be recorded. | **MEDIUM** |
| 6 | **AD-003 and AD-004 HTML missing inline threading headers** | 2/6 AD exploration HTML files (AD-003-bento-grid.html, AD-004-spiral.html) have no inline threading header or Research Application Record at the top. AD-001, AD-002, AD-005, AD-006 all have them. This is a provenance Layer 1 gap. | **MEDIUM** |
| 7 | **explorations/CLAUDE.md says axis/ is "PENDING" and "Empty"** | The explorations/ directory CLAUDE.md still says `axis/ | PENDING | AD-001 through AD-006 (future)` and `axis/ | PENDING | Empty (AD work pending)`. This is stale — AD is COMPLETE with 6 files + CLAUDE.md. | **MEDIUM** |

### D4. LOW Gaps (Minor Inconsistencies)

| # | Gap | Impact | Severity |
|---|-----|--------|----------|
| 8 | **PIPELINE-MANIFEST.md AD section is summary-only** | OD section in PIPELINE-MANIFEST has individual finding entries. AD section is a 3-line paragraph deferring to AD-outbound-findings.md. This is a valid approach but breaks the pattern. | **LOW** |
| 9 | **AD-SYNTHESIS.md File Inventory references files not in provenance** | Section 13 lists AD-CONVENTION-SPEC.md (822 lines), AD-RESEARCH-GATE.md (~500 lines), R-4-AD-EVALUATION.md (~1000 lines) as if they're in the same directory, but they're in `_ad-execution/`. The line counts also don't match actual (RESEARCH-GATE is 96 lines not ~500, R-4-AD-EVALUATION is 429 not ~1000). | **LOW** |
| 10 | **Identity checkpoint cumulative is very thin** | `identity-checkpoint-cumulative.md` is only 41 lines — compared to the 3 identity delta files (304 lines total) and ACCUMULATED-IDENTITY-v2.md (518 lines), this feels incomplete. | **LOW** |

---

## E. Quantitative Summary

### Total Provenance Artifact Counts

| Metric | OD | AD | Delta |
|--------|----|----|-------|
| Formal chain docs (in provenance/) | 8 files, 3,851 lines | 6 files, 1,644 lines | -2 files, -2,207 lines |
| Working artifacts (in _*/) | ~94 files, ~23,000+ lines | ~61 files, ~12,411 lines | -33 files, -10,589 lines |
| Pre-execution analysis | N/A (OD used ad-hoc planning) | 34 files, ~15,411 lines | +34 files (AD had dedicated pre-analysis) |
| Exploration HTML files | 6 files, all with headers | 6 files, 4/6 with headers | -2 header gaps |
| PA audit artifacts | N/A (OD had separate audit) | ~50 md + 100+ screenshots | AD has dedicated PA |
| EXT-* registered | 94 findings | **0** findings | **-94** |
| Findings produced | 17 OD-F | 28 AD-F | +11 |
| Pipeline docs updated | 4/4 | 1/4 (PIPELINE-MANIFEST partial, CLAUDE.md updated) | **-3** |

### Provenance Completeness Score

| Layer | OD Score | AD Score |
|-------|----------|----------|
| Layer 1: Inline Threading Headers (HTML) | 6/6 (100%) | 4/6 (67%) |
| Layer 2: Formal Chain Documents | 8/8 (100%) | 6/8 (75%) — missing CONVENTION-SPEC, RESEARCH-GATE in provenance |
| Layer 3: Pipeline-Level Updates | 4/4 (100%) | 1/4 (25%) — only ACCUMULATED-IDENTITY fully done |
| Working Artifacts | Complete | Complete |
| **Overall** | **~100%** | **~65%** |

---

## F. Diagnosis

### What AD Did Well
1. **Formal chain documents are thorough.** The 6 files in `stage-4-axis-ad/` are well-written, internally consistent, and properly cross-referenced.
2. **ACCUMULATED-IDENTITY-v2.md is complete.** The identity evolution was properly tracked through 3 waves with delta files.
3. **Working artifacts are comprehensive.** 61 files in `_ad-execution/` provide deep audit trail.
4. **AD-CONVENTION-SPEC.md was created pre-build.** This was the #1 lesson from OD applied successfully.
5. **28 AD-F findings are well-documented.** Full table format with evidence and classification.
6. **PA audit artifacts exist.** Dedicated perceptual audit with per-exploration findings, cold-look reports, and fix reports.

### What AD Failed to Do
1. **Pipeline-level infrastructure updates were skipped.** EXT-RESEARCH-REGISTRY, RESEARCH-ACTIVE, SOUL-DISCOVERIES, explorations/CLAUDE.md were all left stale. This appears to be a "last mile" failure — the synthesis and handoff were written, but the infrastructure bookkeeping was not done.
2. **Convention spec and research gate were not promoted to provenance.** These exist in the working directory but weren't copied/promoted to the formal provenance directory as OD did.
3. **2/6 HTML files lack provenance headers.** AD-003 and AD-004 were built in Wave 1B and apparently never received headers (AD-001/002 from Wave 1A and AD-005/006 from Wave 1C did).

### Root Cause
The provenance gaps are concentrated in **infrastructure updates** (pipeline-level files) and **promotion** (moving working artifacts to formal provenance). The core synthesis work (findings, synthesis, handoff, identity) is complete. The gaps are in the "last mile" bookkeeping that connects AD's outputs back into the shared infrastructure. This is consistent with a team that completed its primary mission (build + audit + fix + synthesize) but did not complete the provenance remediation step that OD received as a dedicated 43-agent re-enrichment phase.

---

## G. Remediation Priority

### Must Fix Before CD (Blocking)

1. **Register 33 EXT-AXIS-* findings in EXT-RESEARCH-REGISTRY.md** — CD will commission its own EXT-* research and needs the registry current.
2. **Update RESEARCH-ACTIVE.md with AD application records** — CD's research grounding step reads this file.
3. **Promote AD-CONVENTION-SPEC.md to provenance/stage-4-axis-ad/** — CD needs to find it where OD's equivalent lives.

### Should Fix Before CD (Important)

4. **Add inline threading headers to AD-003 and AD-004 HTML** — Layer 1 provenance completeness.
5. **Update SOUL-DISCOVERIES.md** — Record AD's confirmation of no 6th soul piece and ANTI-PHYSICAL v2 extension.
6. **Promote AD-RESEARCH-GATE.md or a composite research gate to provenance** — May need to merge AD-RESEARCH-GATE.md + R-4-AD-EVALUATION.md + r2-ad-mapping.md into one file.
7. **Update explorations/CLAUDE.md** — Fix stale "PENDING" / "Empty" references for axis/.

### Nice to Have

8. **Flesh out PIPELINE-MANIFEST.md AD section** — Add individual finding entries matching OD pattern.
9. **Fix AD-SYNTHESIS.md Section 13 line count inaccuracies** — RESEARCH-GATE claimed as ~500 lines but is 96; R-4-AD-EVALUATION claimed as ~1000 but is 429.
10. **Flesh out identity-checkpoint-cumulative.md** — Currently 41 lines; could summarize the 3 deltas more completely.

---

*Compiled 2026-02-11 from exhaustive inventory of all AD provenance artifacts across 4 locations: provenance/stage-4-axis-ad/ (6 files, 1,644 lines), knowledge-architecture/_ad-execution/ (61 files, 12,411 lines), knowledge-architecture/_ad-skeleton-analysis/ (34 files, ~15,411 lines), explorations/axis/ (6 HTML files + CLAUDE.md, 10,815 lines), explorations/axis/_perceptual-audit/ (~50 md files + 100+ screenshots). Compared against OD baseline: provenance/stage-3-organization-od/ (8 files, 3,851 lines).*
