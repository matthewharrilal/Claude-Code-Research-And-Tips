# Complete Provenance Gap Inventory: AD Phase

**Compiled by:** Provenance Gap Analyst
**Date:** 2026-02-11
**Sources:** 8 provenance assessment files (provenance-audit, commit-archaeology, dark-matter, od-vs-ad-comparison, research-threading, plans-teams-archaeology, cd-readiness, PROVENANCE-ASSESSMENT-SYNTHESIS)
**Total source material analyzed:** ~4,500 lines across 8 reports

---

## Methodology

Every gap identified across all 8 analyst reports was extracted, deduplicated (where multiple reports flag the same gap), and assigned a canonical ID. Each gap is classified by:
- **Severity:** BLOCKING / HIGH / MEDIUM / LOW
- **Change type:** CREATE (new file), MOVE (existing content to new location), UPDATE (modify existing file), COMPOSITE (merge multiple sources)
- **Dependencies:** Which gaps must be resolved before others

The synthesis report (PROVENANCE-ASSESSMENT-SYNTHESIS.md) already performed a first-pass deduplication into GAP-001 through GAP-023. This inventory refines that list with exact file paths, specific content requirements, and estimated line counts, while also capturing gaps that the synthesis may have merged too aggressively.

---

## BLOCKING Gaps (2)

### GAP-001: stage-5-combination-cd/ home directory says CD cannot start

| Field | Value |
|-------|-------|
| **Severity** | BLOCKING |
| **File(s) to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-5-combination-cd/STAGE-HEADER.md` |
| | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-5-combination-cd/CLAUDE.md` |
| **Change type** | UPDATE |
| **What to change** | STAGE-HEADER.md currently says AD is PENDING and CD is "blocked on three levels." Must update to: AD = COMPLETE, CD = UNBLOCKED, reference HANDOFF-AD-TO-CD.md as gate document, update predecessor chain to show stage-4-axis-ad as COMPLETE. CLAUDE.md similarly needs status update. |
| **Est. lines changed** | ~40-60 lines across both files |
| **Reports flagging** | cd-readiness (BLOCKING), provenance-audit (implied) |
| **Dependencies** | None -- can be done first |

### GAP-002: PATTERN-INDEX.md axis section says "AD explorations not yet started"

| Field | Value |
|-------|-------|
| **Severity** | BLOCKING |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/patterns/PATTERN-INDEX.md` |
| **Change type** | UPDATE |
| **What to change** | Replace "AXIS PATTERNS -- PENDING" / "AD explorations not yet started" with 6 validated axis pattern entries: Z-Pattern (AD-001, 35/40), F-Pattern (AD-002, 36/40), Bento Grid (AD-003, 36/40), Spiral (AD-004, 35/40), Choreography (AD-005, 37/40), Compound (AD-006, 38/40). Include density pairing, equivalence type, and finding references per pattern. Match format of existing OD pattern entries. |
| **Est. lines changed** | ~80-120 lines (new section content) |
| **Reports flagging** | cd-readiness (BLOCKING) |
| **Dependencies** | None |

---

## HIGH Gaps (10)

### GAP-003: EXT-RESEARCH-REGISTRY.md missing 33 EXT-AXIS-* entries

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md` |
| **Change type** | UPDATE |
| **What to change** | Add 33 EXT-AXIS-* bespoke research findings to the registry: EXT-AXIS-Z (1-5), EXT-AXIS-F (1-5), EXT-AXIS-B (1-5), EXT-AXIS-SP (1-5), EXT-AXIS-CH (1-5), EXT-AXIS-X (1-8). Each entry needs: finding ID, title, source exploration, application status, applied-in reference. Data source: AD-outbound-findings.md (20 mentions), AD-SYNTHESIS.md (15 mentions), 6 HTML exploration files (184 mentions). OD registered all 94 EXT-* findings in this file; AD registered zero. |
| **Est. lines added** | ~100-150 lines (33 entries at 3-4 lines each) |
| **Reports flagging** | provenance-audit (CRITICAL), cd-readiness (MEDIUM), research-threading |
| **Dependencies** | None |

### GAP-004: RESEARCH-ACTIVE.md not updated for AD

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **File(s) to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/checkpoints/RESEARCH-ACTIVE.md` |
| | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md` |
| **Change type** | UPDATE (both copies) |
| **What to change** | Both copies still show all 6 ADs as "(pending)" and R-4 as unapplied. Must update: R-4 application rate = 169/192 cited (88%), R-2 application rate = 25/27 mapped (~67% applied), 7 R-2 findings deferred to CD, all EXT-AXIS-* application status = APPLIED, remove "(pending)" labels from all 6 AD entries, add AD completion timestamp. Data source: AD-SYNTHESIS.md, R-4-AD-EVALUATION.md, r2-ad-mapping.md. |
| **Est. lines changed** | ~60-80 lines per copy (~120-160 total) |
| **Reports flagging** | provenance-audit (HIGH), cd-readiness (HIGH), research-threading |
| **Dependencies** | None |

### GAP-005: AD-CONVENTION-SPEC.md not in formal provenance directory

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **Current location** | `docs-spa/app/showcase/knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` (822 lines) |
| **Target location** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-CONVENTION-SPEC.md` |
| **Change type** | MOVE (copy to provenance, keep original) |
| **What to change** | Copy the 822-line convention spec to the formal provenance directory. OD's equivalent (OD-CONVENTION-SPEC.md, 468 lines) is in its provenance directory. AD's is 1.8x larger but lives only in execution scratchpad. Content should NOT be modified during copy -- promote as-is. However, note that DM-003 (container width 860->1100px) means the spec contains a STALE convention that was overridden during PA fixes. This stale value should be updated (see GAP-009). |
| **Est. lines added** | 822 lines (copy) |
| **Reports flagging** | provenance-audit (HIGH), od-vs-ad-comparison, commit-archaeology, cd-readiness |
| **Dependencies** | GAP-009 (convention width update) should be applied before or during promotion |

### GAP-006: AD-RESEARCH-GATE.md thin and not in provenance

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **Current location(s)** | `knowledge-architecture/_ad-execution/AD-RESEARCH-GATE.md` (96 lines -- THIN) |
| | `knowledge-architecture/_ad-execution/R-4-AD-EVALUATION.md` (429 lines) |
| | `knowledge-architecture/_ad-execution/r2-ad-mapping.md` (200 lines) |
| **Target location** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-RESEARCH-GATE.md` |
| **Change type** | COMPOSITE (merge 3 sources into 1 promoted file) |
| **What to change** | Create a composite research gate document for the provenance directory. OD's OD-RESEARCH-GATE.md (440 lines) is the model. The composite should include: (1) AD-RESEARCH-GATE.md content (R-4 as primary, R-5 as reference, R-2 evaluation), (2) R-4 application summary from R-4-AD-EVALUATION.md (169/192 cited, breakdown by category), (3) R-2 deferred findings from r2-ad-mapping.md (7 deferred to CD by ID), (4) EXT-AXIS-* summary (33 findings, 100% applied). |
| **Est. lines produced** | ~350-450 lines |
| **Reports flagging** | provenance-audit (HIGH), od-vs-ad-comparison, commit-archaeology |
| **Dependencies** | None |

### GAP-007: axis-patterns.md never created

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **File to create** | `docs-spa/app/showcase/DESIGN-SYSTEM/patterns/axis-patterns.md` |
| **Change type** | CREATE |
| **What to create** | Detailed axis pattern specification file, parallel to existing `organizational-patterns.md` and `density-patterns.md`. Must include: (1) per-pattern sections for all 6 axis patterns (Z-Pattern, F-Pattern, Bento Grid, Spiral, Choreography, Compound), (2) provenance headers per pattern, (3) equivalence mechanism documentation (which of the 5 types each pattern uses), (4) density pairings, (5) transition grammar entries (from 5x5 matrix), (6) AD-F finding references per pattern. Data sources: AD-SYNTHESIS.md, AD-outbound-findings.md, HANDOFF-AD-TO-CD.md, 6 exploration HTML files. |
| **Est. lines produced** | ~300-500 lines |
| **Reports flagging** | cd-readiness (HIGH) |
| **Dependencies** | None, but benefits from GAP-002 being done first (PATTERN-INDEX entries provide summary, this provides detail) |

### GAP-008: AD-003 and AD-004 HTML missing inline threading headers

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **Files to change** | `docs-spa/app/showcase/explorations/axis/AD-003-bento-grid.html` |
| | `docs-spa/app/showcase/explorations/axis/AD-004-spiral.html` |
| **Change type** | UPDATE |
| **What to change** | Both files start with `<!DOCTYPE html>` -- no inline threading header or Research Application Record. AD-001, AD-002, AD-005, AD-006 all have provenance headers. Add headers matching the format used by sibling files. AD-001 has RAR-style (80+ lines), AD-005/006 have Inline Threading Header style. Use the simpler Inline Threading Header format: provenance chain (predecessor/successor), parent phase, T1 synthesis reference, finding IDs produced by this exploration, research consumed (R-4, EXT-AXIS-*). |
| **Est. lines added** | ~30-50 lines per file (~60-100 total) |
| **Reports flagging** | provenance-audit (MEDIUM), dark-matter |
| **Dependencies** | None |

### GAP-009: 7 MUST-ADD dark matter items not formalized

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **Files to change/create** | Multiple targets (see sub-items below) |
| **Change type** | UPDATE + CREATE |
| **Sub-items:** | |

**DM-001: Lock-vs-lock conflict (S12.5 responsive breakpoint vs AD-F-009 bento pattern)**
- Source: AD-006 AUDIT-REPORT.md (MF-002)
- Target: AD-CONVENTION-SPEC.md (add resolution note to S12.5) AND AD-outbound-findings.md (add note to AD-F-009)
- What: Two LOCKED conventions produce BROKEN outcome between 768-960px. Resolution must be documented.
- Est. lines: ~15-20

**DM-002: Scroll-reveal progressive enhancement resolution**
- Source: AD-006 AUDIT-REPORT.md (MF-001)
- Target: AD-CONVENTION-SPEC.md (update S15.3 interpretation)
- What: Locked scroll-reveal convention hides 40-60% content when animations fail. Resolution: "Initial CSS state MUST be visible. JavaScript MAY add hidden state."
- Est. lines: ~10-15

**DM-003: Container width convention update (860px -> 1100px)**
- Source: All 6 AUDIT-REPORT.md files + failure-analysis.md Intervention 4
- Target: AD-CONVENTION-SPEC.md (update max-width convention)
- What: All 6 AD pages independently flagged for narrow 860px. User intervened. Pages widened to 1100px. Convention spec still lists 860px. CRITICAL for CD.
- Est. lines: ~10-15

**DM-004: Template-level footer/capstone requirement**
- Source: All 6 AUDIT-REPORT.md files (unanimous)
- Target: AD-CONVENTION-SPEC.md (add new convention) OR AD-outbound-findings.md (add systemic finding)
- What: All 6 ADs "just stop" without visual ending. Template gap, not per-page oversight. CD must know.
- Est. lines: ~10-15

**DM-005: Breathing zone ceiling (<=25%)**
- Source: All 6 AUDIT-REPORT.md files (unanimous)
- Target: AD-CONVENTION-SPEC.md (add ceiling to breathing zone budget)
- What: Every AD page has multi-viewport blank zones. Current convention has 15% minimum but NO ceiling.
- Est. lines: ~10-15

**DM-006: ATTENTION TOPOLOGY perceptual validation**
- Source: AD-005, AD-006 AUDIT-REPORT.md
- Target: AD-outbound-findings.md (add perceptual evidence to AD-F-023 entry)
- What: Independent perceptual auditors confirmed the 3-way unification is VISIBLE, not just structural. Currently only structural evidence cited.
- Est. lines: ~10-15

**DM-007: Internal quality dialect within pages**
- Source: AD-003, AD-004 AUDIT-REPORT.md
- Target: HANDOFF-AD-TO-CD.md (add warning) OR AD-outbound-findings.md (add finding)
- What: OD had 3 dialects ACROSS pages. PA discovered quality inconsistency WITHIN individual pages. CD compound pages at risk.
- Est. lines: ~10-15

**Total DM-001 through DM-007 estimated lines:** ~75-110 lines of new content across 3-4 files

| **Reports flagging** | dark-matter (all 7), cd-readiness (implied via DM-003 risk) |
| **Dependencies** | GAP-005 should be done first (promotes CONVENTION-SPEC to provenance before editing it) |

### GAP-010: DO-NOT-SHIP verdict resolutions undocumented in provenance

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` |
| **Change type** | UPDATE |
| **What to change** | Add "Ship Verdicts" section and "Fix Execution Record" section. AD-002 received DO-NOT-SHIP (empty Acts IV-V). AD-006 received DO-NOT-SHIP (scroll-reveal + bento collapse). Both were resolved during PA fix execution (commits 4a4fa08 through a231977). Currently AD-AUDIT-SYNTHESIS.md lists what SHOULD be fixed (FIX-001 through FIX-032) but not what WAS fixed or the ship verdict outcomes. Add: (1) per-page ship verdicts (all 6), (2) DO-NOT-SHIP resolution summaries for AD-002 and AD-006, (3) cross-reference to fix-report.md files in `_perceptual-audit/AD-*/`. |
| **Est. lines added** | ~40-60 lines |
| **Reports flagging** | dark-matter (DM-042), research-threading |
| **Dependencies** | None |

### GAP-010B: PA fix execution cross-references missing from provenance

| Field | Value |
|-------|-------|
| **Severity** | HIGH |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` |
| **Change type** | UPDATE |
| **What to change** | The 6 fix-report.md files in `explorations/axis/_perceptual-audit/AD-{001-006}/fix-report.md` document actual CSS changes (width 860->1100px, dead space removal, footer additions, responsive fixes). No provenance document references them. Add a "Perceptual Audit Fix Reports" section with references to all 6 files and summary of key changes applied. |
| **Est. lines added** | ~20-30 lines |
| **Reports flagging** | research-threading (D.1), dark-matter |
| **Dependencies** | Logically combined with GAP-010 (same target file, same section) |

---

## MEDIUM Gaps (10)

### GAP-011: SOUL-DISCOVERIES.md not updated for AD

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/checkpoints/SOUL-DISCOVERIES.md` |
| **Change type** | UPDATE |
| **What to change** | Still says "AD is the next opportunity for soul discovery." Add AD determination: "Stage 4 (AD): No new soul piece discovered. 5-piece model confirmed across 4 stages. ANTI-PHYSICAL identity extended: AD-005 Choreography reinterprets 'choreography' as implied movement through compositional rhythm, not literal animation. Confirms boundary: the system can describe motion without performing it." |
| **Est. lines added** | ~10-15 lines |
| **Reports flagging** | provenance-audit (MEDIUM), cd-readiness (MEDIUM) |
| **Dependencies** | None |

### GAP-012: explorations/CLAUDE.md says axis/ is "PENDING"

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **File to change** | `docs-spa/app/showcase/explorations/CLAUDE.md` |
| **Change type** | UPDATE |
| **What to change** | Replace `axis/ | PENDING | AD-001 through AD-006 (future)` and `axis/ | PENDING | Empty (AD work pending)` with `axis/ | COMPLETE | AD-001 through AD-006 (6 axis explorations + CLAUDE.md)`. |
| **Est. lines changed** | ~5-10 lines |
| **Reports flagging** | provenance-audit (MEDIUM), cd-readiness (MEDIUM) |
| **Dependencies** | None |

### GAP-013: FINDINGS-INDEX.md has no AD-F entries

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/FINDINGS-INDEX.md` (or equivalent location) |
| **Change type** | UPDATE |
| **What to change** | Add all 28 AD-F findings (AD-F-001 through AD-F-028) with: classification (Confirming/Extending/Novel per HANDOFF categories), source exploration, severity, and CD forward-flow status. Also update OD-F-FL-001 status from "PENDING (AD)" to "VALIDATED by AD" (per od-vs-ad-comparison: OD-F-FL-001 confirmed across all 6 ADs). Data source: AD-outbound-findings.md (506 lines). |
| **Est. lines added** | ~80-120 lines (28 entries + header) |
| **Reports flagging** | cd-readiness (MEDIUM) |
| **Dependencies** | None |

### GAP-014: AD-F threading density 3.6x thinner than OD

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **Files to change** | Multiple files across provenance chain (would require mini-remediation pass) |
| **Change type** | UPDATE (distributed) |
| **What to change** | AD-F findings average 22 references across 65 files vs OD's 80 references across 171 files. Primary cause: no dedicated provenance remediation pass. Would require adding AD-F references in: PIPELINE-MANIFEST.md, PATTERN-INDEX.md, axis-patterns.md (if created), BACKBONE.md, and cross-stage pattern documents. This is a distributed threading task, not a single file update. |
| **Est. lines added** | ~200-400 lines distributed across 10-15 files |
| **Reports flagging** | research-threading, od-vs-ad-comparison |
| **Dependencies** | GAP-002, GAP-007 (threading targets must exist first) |

### GAP-015: Lock sheet classification not referenced from provenance

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **Current location** | `explorations/axis/_perceptual-audit/lock-sheet.md` (150 lines) |
| **Target file** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` OR `AD-CONVENTION-SPEC.md` (once promoted) |
| **Change type** | UPDATE (add reference) |
| **What to change** | The lock sheet (81 decisions: 12 ALWAYS-LOCKED, 34 LOCKED, 19 CHALLENGEABLE, 16 PREVIOUS FINDINGS) is the most rigorous decision-categorization framework in the project. Add a reference/pointer in the handoff document or convention spec directing CD agents to consult it. Do NOT copy the full lock sheet -- just add a reference with path and summary. |
| **Est. lines added** | ~10-15 lines (reference + summary) |
| **Reports flagging** | dark-matter (DM-008) |
| **Dependencies** | GAP-005 (if adding to convention spec, it must be promoted first) |

### GAP-016: R-2 deferred findings not listed by ID in handoff

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` |
| **Change type** | UPDATE |
| **What to change** | Add "Deferred Research" subsection listing 7 R-2 findings deferred to CD, by ID. Data source: `knowledge-architecture/_ad-execution/r2-ad-mapping.md` (200 lines). Currently the handoff mentions R-5 as primary and R-4 as secondary but does not identify specific deferred R-2 findings. |
| **Est. lines added** | ~15-20 lines |
| **Reports flagging** | research-threading (D.5) |
| **Dependencies** | None |

### GAP-017: 2 unresolved contradictions from PA audit

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **Files to verify** | `docs-spa/app/showcase/explorations/axis/AD-001-z-pattern.html` (scroll-triggered navigation) |
| | `docs-spa/app/showcase/explorations/axis/AD-002-f-pattern.html` (two-column collapse) |
| **Change type** | UPDATE (after programmatic verification) |
| **What to change** | Two contradictions require programmatic verification: (1) DM-038: AD-001 scroll-triggered navigation hijack -- Alpha flagged, Beta did not observe. May be Playwright contention artifact. Verify via Playwright whether scroll triggers page navigation. (2) DM-039: AD-002 two-column collapse at 768px -- Alpha says it collapses, Beta says it survives. Verify actual behavior. After verification, document resolutions in AD-AUDIT-SYNTHESIS.md. |
| **Est. lines added** | ~10-20 lines (resolution documentation) |
| **Reports flagging** | dark-matter (DM-038, DM-039) |
| **Dependencies** | Requires Playwright access for verification |

### GAP-018: Perceptual audit sovereignty classification not in provenance

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **Source files** | All 6 `explorations/axis/_perceptual-audit/AD-*/AUDIT-REPORT.md` sovereignty sections |
| **Target file** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` OR separate addendum |
| **Change type** | UPDATE |
| **What to change** | Each PA finding was classified as SOVEREIGN (page-specific) or POTENTIALLY SYSTEMIC (may affect other pages). Key systemic patterns: responsive collapse failures, no visual ending, dead space, container width, dark code block contrast. Key sovereign: AD-001 Z-sweep shallowness, AD-003 code truncation, AD-004 invisible border, AD-005 transition inconsistency. This classification separates template bugs from design choices -- critical for CD. Add a "Systemic vs Sovereign" summary section. |
| **Est. lines added** | ~30-40 lines |
| **Reports flagging** | dark-matter (DM-012) |
| **Dependencies** | None |

### GAP-019: PIPELINE-MANIFEST.md AD section is summary-only

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` |
| **Change type** | UPDATE |
| **What to change** | OD section has individual finding entries. AD section is a 3-line summary deferring to AD-outbound-findings.md. While valid as an approach, it breaks the established pattern. Add per-finding entries for at least the highest-severity AD-F findings (AD-F-023 ATTENTION TOPOLOGY, AD-F-024 transition grammar, AD-F-025 3-way unification, etc.) matching the OD section format. |
| **Est. lines added** | ~40-60 lines |
| **Reports flagging** | provenance-audit (LOW), synthesis (LOW) |
| **Dependencies** | None |

### GAP-020: 768px viewport failure pattern not synthesized in provenance

| Field | Value |
|-------|-------|
| **Severity** | MEDIUM |
| **Source** | All 6 AUDIT-REPORT.md multi-viewport comparison sections |
| **Target file** | AD-CONVENTION-SPEC.md (once promoted) or HANDOFF-AD-TO-CD.md |
| **Change type** | UPDATE |
| **What to change** | Consistent pattern across all 6 pages: 1440px = good, 1024px = often sweet spot, 768px = where problems concentrate. Many layouts break BEFORE 768px (AD-006 bento breaks at ~900px). The 768px breakpoint may need compound-layout-specific overrides. Add a note about this pattern for CD. |
| **Est. lines added** | ~10-15 lines |
| **Reports flagging** | dark-matter (DM-013) |
| **Dependencies** | GAP-005 (if targeting convention spec) |

---

## LOW Gaps (7)

### GAP-021: AD-SYNTHESIS.md Section 13 line counts inaccurate

| Field | Value |
|-------|-------|
| **Severity** | LOW |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` |
| **Change type** | UPDATE |
| **What to change** | Section 13 "File Inventory" claims: RESEARCH-GATE ~500 lines (actual: 96), R-4-AD-EVALUATION ~1000 lines (actual: 429). Correct to actual line counts. |
| **Est. lines changed** | ~5 lines |
| **Reports flagging** | provenance-audit (LOW) |
| **Dependencies** | None |

### GAP-022: ACCUMULATED-IDENTITY-v2 path ambiguous in handoff

| Field | Value |
|-------|-------|
| **Severity** | LOW |
| **File to change** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` |
| **Change type** | UPDATE |
| **What to change** | Handoff says "Read ACCUMULATED-IDENTITY-v2.md" without full path. Add explicit path: `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md`. A fresh instance searching `provenance/` would not find it. |
| **Est. lines changed** | ~2-3 lines |
| **Reports flagging** | cd-readiness (LOW) |
| **Dependencies** | None |

### GAP-023: identity-checkpoint-cumulative.md very thin

| Field | Value |
|-------|-------|
| **Severity** | LOW |
| **File to change** | `docs-spa/app/showcase/knowledge-architecture/_ad-execution/identity-checkpoint-cumulative.md` |
| **Change type** | UPDATE |
| **What to change** | Only 41 lines. Could summarize the 3 identity deltas (304 lines total) more completely. The ACCUMULATED-IDENTITY-v2.md (518 lines) IS complete, so this is a secondary artifact. Low priority. |
| **Est. lines added** | ~30-40 lines |
| **Reports flagging** | provenance-audit (LOW) |
| **Dependencies** | None |

### GAP-024: Skill evolution meta-knowledge has no provenance representation

| Field | Value |
|-------|-------|
| **Severity** | LOW |
| **Source files** | `explorations/axis/_perceptual-audit/_skill-evolution/` (5 files, ~2,781 lines) |
| **Target file** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` |
| **Change type** | UPDATE (add pointer) |
| **What to change** | Add a "Process Lessons" subsection in the handoff pointing to `_skill-evolution/` directory. Key transferable items: binary rule compliance principle (DM-044), three-layer audit architecture (DM-043), 7 validation gates (DM-046), meta-lesson about structural-vs-experiential quality (DM-047). Do NOT promote to stage-4 provenance (it's process knowledge, not design knowledge). Just add a reference. |
| **Est. lines added** | ~10-15 lines |
| **Reports flagging** | dark-matter (DM-043 through DM-047), research-threading |
| **Dependencies** | None |

### GAP-025: Perceptual positive findings not cited as provenance strengths

| Field | Value |
|-------|-------|
| **Severity** | LOW |
| **Source** | All 6 AUDIT-REPORT.md positive findings sections |
| **Target file** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` |
| **Change type** | UPDATE |
| **What to change** | AD-SYNTHESIS mentions strengths generally but doesn't cite PA's independent confirmation. Key confirmed strengths to PROTECT: typography velocity (serif Q / sans A), header authority (dark full-bleed), warm palette cohesion, Q&A conversational rhythm, page personality ("Scholarly, Deliberate, Warm"), callout differentiation. Add a sentence or two referencing PA confirmation. |
| **Est. lines added** | ~5-10 lines |
| **Reports flagging** | dark-matter (DM-014) |
| **Dependencies** | None |

### GAP-026: AD-004 spiral metaphor perceptual non-achievement not noted

| Field | Value |
|-------|-------|
| **Severity** | LOW |
| **Source** | AD-004 AUDIT-REPORT.md (LW-2, 2/2 concordance) |
| **Target file** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` (AD-F-013 entry) |
| **Change type** | UPDATE |
| **What to change** | Both auditors agree the "spiral" label is aspirational, not delivered. "The page reads as four stacked horizontal layers, not a spiral." The GEOLOGICAL metaphor IS delivered; SPIRAL is not. Add a note to AD-F-013 about the naming/framing tension. |
| **Est. lines added** | ~5-10 lines |
| **Reports flagging** | dark-matter (DM-016) |
| **Dependencies** | None |

### GAP-027: Nuclear question not asked in AD formal audit

| Field | Value |
|-------|-------|
| **Severity** | LOW |
| **Source** | od-benchmark.md (Section B.7) |
| **Target** | Documentation only (no file change required unless methodology docs are maintained) |
| **Change type** | None required (informational gap) |
| **What it is** | OD asked every auditor: "If this exploration were the ONLY page a user ever saw -- would they understand the identity?" AD had no equivalent single-forcing question. PA v3 added it, but AD pages were already audited without it. This is a methodology gap worth noting but not a provenance fix. |
| **Reports flagging** | dark-matter (DM-017) |
| **Dependencies** | None |

---

## Dependency Map

```
GAP-005 (promote CONVENTION-SPEC)
  |
  +---> GAP-009 (dark matter convention updates -- DM-001,002,003,004,005)
  |       Should apply convention fixes before or during promotion
  |
  +---> GAP-015 (lock sheet reference -- can add to CONVENTION-SPEC after promotion)
  |
  +---> GAP-020 (768px pattern note -- can add to CONVENTION-SPEC after promotion)

GAP-002 (PATTERN-INDEX update)
  |
  +---> GAP-007 (axis-patterns.md creation -- detailed version of index entries)
  |
  +---> GAP-014 (threading density -- needs PATTERN-INDEX and axis-patterns.md as targets)

All other gaps are independent and can be parallelized.
```

---

## Aggregate Statistics

| Severity | Count | Est. Total Lines | Est. Agent-Hours |
|----------|-------|-----------------|-----------------|
| BLOCKING | 2 | ~120-180 | ~0.75 hours |
| HIGH | 10 | ~1,500-2,100 | ~5-6 hours |
| MEDIUM | 10 | ~200-350 | ~2-3 hours |
| LOW | 7 | ~60-100 | ~1-1.5 hours |
| **TOTAL** | **29** | **~1,880-2,730** | **~9-11 agent-hours** |

With 4-6 parallel agents: **~2.5-3.5 hours wall time** for all 29 gaps.
With targeted remediation (BLOCKING + HIGH only): **~2-2.5 hours wall time** for 12 gaps.

---

## Cross-Reference: Source Report to Gap Mapping

| Source Report | Gaps Identified | Unique Contributions |
|---------------|----------------|---------------------|
| **provenance-audit.md** | GAP-001 (implied), 003, 004, 005, 006, 008, 011, 012, 019, 021, 023 | Most comprehensive structural inventory; Layer 1/2/3 scoring framework |
| **commit-archaeology.md** | GAP-005, 006, 009 (implied), 010 | Mega-commit problem; 2.5% formalization rate; detailed commit timeline |
| **dark-matter.md** | GAP-008, 009 (all 7 DM items), 010, 015, 017, 018, 020, 024, 025, 026, 027 | 47 dark matter items; MUST-ADD classification; methodology dark matter |
| **od-vs-ad-comparison.md** | GAP-003, 004, 005, 006, 014 | Quantitative depth comparison (2.3x line deficit); enrichment cycle gap |
| **research-threading.md** | GAP-003, 004, 010B, 014, 016, 017, 024 | 3.6x threading density gap; R-4 sampling; 5 threading paths analysis |
| **plans-teams-archaeology.md** | GAP-001 (implied), 005, 014 | Process maturity scoring (adjusted: 62% vs OD's 97%); plan rigor comparison |
| **cd-readiness.md** | GAP-001, 002, 003, 004, 005, 007, 011, 012, 013, 022 | J-03 test; CD agent walkthrough; stale file enumeration; readiness score 7/10 |
| **PROVENANCE-ASSESSMENT-SYNTHESIS.md** | All GAPs (dedup + merge) | Cross-report concordance; contradiction resolution; remediation roadmap |

---

## Notable Contradictions Resolved

1. **plans-teams-archaeology claims "no provenance chain" and "no handoff"** -- INCORRECT. provenance-audit and cd-readiness confirm 6 files in stage-4-axis-ad/ including HANDOFF-AD-TO-CD.md (234 lines). Process maturity score adjusted from 27/60 to 37/60.

2. **EXT-RESEARCH-REGISTRY status** -- provenance-audit says "ZERO entries" (correct for the registry file) while research-threading says "all 33 cited in formal chain" (correct for AD-outbound-findings.md and AD-SYNTHESIS.md). BOTH are correct at different levels. The gap is in the REGISTRY, not in the chain documents.

3. **CD readiness scores differ** -- od-vs-ad-comparison rates 6/10 (measuring provenance DEPTH vs OD), cd-readiness rates 7/10 (measuring practical ability to START CD). Both are valid for their different perspectives.

---

*Inventory complete. 29 gaps across 4 severity levels. 8 source reports analyzed. All gaps have exact file paths, change types, estimated line counts, and dependency mappings.*
