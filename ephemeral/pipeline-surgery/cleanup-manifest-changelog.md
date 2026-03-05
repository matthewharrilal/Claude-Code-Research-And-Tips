# Changelog: MANIFEST.md + EXECUTION-TRACKER-TEMPLATE.md Cleanup

**Date:** 2026-02-25
**Agent:** manifest-fixer (Opus 4.6)
**Task:** #2 — Fix MANIFEST.md and EXECUTION-TRACKER-TEMPLATE.md
**Audit sources:** 01-stale-reference-audit.md, 03-fresh-eyes-coherence.md, 05-cross-file-consistency.md

---

## MANIFEST.md (1,246 -> 1,247 lines, +1 net)

### Fix 1: Line count updates (F-02 through F-13, F-04 through F-10)

**Section 3 routing table:**
- artifact-routing.md: 843 -> 900 lines
- artifact-builder-recipe.md: 840 -> 999 lines
- Running text "840-line recipe" -> "~1,000-line recipe"
- gate-runner-core.js: ~1,550 -> ~1,626 lines
- gate-runner-spec.md: 188 -> ~223 lines (+ "Waves 1-4" description)
- gate-manifest.json: 159 -> ~200 lines
- pa-questions.md: 412 -> ~431 lines
- pa-deployment.md: 237 -> ~363 lines (+ updated description: "9-auditor assignments, Section 0 experiential pass protocol, screenshot protocol, visual verification")
- pa-weaver.md: 376 -> ~455 lines (+ updated description: "Section 0 experiential anchor, Weaver protocol, verdicts, calibration (INFORMATION ISOLATION)")
- pa-guardrails.md: 151 -> ~175 lines (+ updated description: "Auditor constraints, Section 3.1 visual verification, scoring anchors")
- artifact-orchestrator.md heading: "971 lines + ~42 lines Wave 3 additions" -> "~1,100 lines"

**Appendix D file path registry (F-11, 14 of 21 entries updated):**
- artifact-orchestrator.md: 1,058 -> ~1,100
- artifact-builder-recipe.md: 934 -> ~999
- gate-runner-core.js: 1,436 -> ~1,626
- gate-runner-spec.md: 188 -> ~223
- gate-manifest.json: 159 -> ~200
- EXECUTION-TRACKER-TEMPLATE.md: 319 -> ~595
- experiment-protocol.md: ~40 -> ~51
- pa-questions.md: 412 -> ~431
- pa-deployment.md: 237 -> ~363 (+ updated description)
- pa-weaver.md: 376 -> ~455 (+ updated description)
- pa-guardrails.md: 151 -> ~175 (+ updated description)
- artifact-routing.md: 843 -> ~900
- artifact-tc-brief-template.md: ~165 -> ~223
- artifact-worked-examples.md: ~183 -> ~182
- artifact-value-tables.md: ~226 -> ~262
- council-verdict.md: added "optional, artifacts are self-sufficient" note

**External Dependencies section:**
- TC Brief Template: ~165 -> ~223
- Value Tables: ~226 -> ~262

**Known Limitations section:**
- "1,058 lines" -> "~1,100 lines"

**Components.css references (new finding not in original audit):**
- All 4 references updated: 290 -> ~1,195 lines (actual: 1,195)

**Value tables references:**
- All 3 references of "~550 lines" updated to "~262 lines" (actual: 262)

**Glossary entries updated:**
- Value Tables: ~225 -> ~262

### Fix 2: Gate count (F-01)

- Line 142 table: "38 Playwright + 4 BV" -> "36 GR + 4 BV + 2 diagnostic"

### Fix 3: Authority clarification (S-1 from fresh-eyes audit)

- Status line changed from "This file governs all Pipeline v3 execution" to "This file is the ROUTING authority (what goes where, who receives what). artifact-orchestrator.md is the EXECUTION authority (step-by-step protocol for running each phase)."

### Fix 4: Brief line count standardization (S-2 from fresh-eyes audit)

- All 10 references to "~165 lines" for TC Brief Template -> "~223 lines" (actual: 223)
- Execution Brief range kept as "~100-165 lines" (output is compressed from template)
- Honest Complexity Accounting: added "Constraint layer: ~73 lines within the brief"
- Glossary: Execution Brief now includes "(produced by merging the ~223-line TC Brief Template with the Content Map)" and "Constraint layer within brief: ~73 lines"
- Glossary: TC Brief Template updated to "~223-line template"

### Fix 5: Output directory convention

- Quickstart step 0 now starts with: "Create output directory at `ephemeral/builds/{SLUG}-{DATE}/`."

### Fix 6: Merge redundant prerequisite

- Prerequisites heading changed to "Prerequisites (verified in Step 1):"
- Step 1 text updated to reference Appendix D for file paths and expected line counts
- Merged the two verification passes into a single workflow

### Fix 7: 146/153 item count discrepancy (S-4 from fresh-eyes audit)

- Replaced dismissive "discrepancy is an artifact-internal issue" with clear explanation: "The 7-item discrepancy is because the appendix counts include secondary-classified items that are cross-matched from other layers. Both numbers are correct for their scope."

### Fix 8: council-verdict.md optional

- Prerequisites: added "Optional; the 9 artifacts are self-sufficient for execution. Read only to resolve ambiguities where artifacts conflict."
- Appendix D: added "optional, artifacts are self-sufficient" note

### Fix 9: Verdict logic consistency (C-2, C-3, C-4 from cross-file audit)

**Phase 4 Section (verdict rules):**
- Added PRIORITY 0: "If a CONFIRMED experiential finding exists (3+ auditors flag same element), verdict CANNOT be SHIP."
- SHIP threshold: added "AND no confirmed experiential failures" (aligns with pa-weaver.md and Weaver prompt)
- SHIP WITH FIXES: added "AND <=3 MECHANICAL fixes" (aligns with pa-weaver.md Section 5.1)

**Weaver prompt template (Appendix E):**
- SHIP WITH FIXES rule: added "AND <=3 MECHANICAL fixes" to match pa-weaver.md

### Fix 10: Appendix E specialty labels

- Auditor prompt: moved "{SPECIALTY}" from opening line to Section 1 header
- Opening line: "PA Auditor {LETTER} -- {SPECIALTY}" -> "PA Auditor {LETTER}"
- Experiential pass: added "This pass is ROLE-NEUTRAL -- do not filter through any specialty lens."
- Section 1 header: "QUESTION ANSWERS" -> "QUESTION ANSWERS -- Your specialty: {SPECIALTY}"

### Fix 11: "SHIP WITH FIXES" cap

- Covered by Fix 9 above (<=3 MECHANICAL fixes added to both locations)

### Additional fix: D-09 conflation (B-1 from fresh-eyes audit)

- Phase 2 description: "D-09 background hex lock is ENFORCED" corrected to "D-09 = The Quiet Zone). Background Hex Lock is a separate BV-02 constraint, not a disposition."

---

## EXECUTION-TRACKER-TEMPLATE.md (595 -> 595 lines, 0 net change)

### Fix 12: Line count updates in pre-flight section

| ID | Field | Old | New (actual) |
|----|-------|-----|-------------|
| PF-1b | artifact-orchestrator.md | ~1,060 | ~1,100 (1,100) |
| PF-1d | artifact-builder-recipe.md | ~959 | ~999 (999) |
| PF-1e | gate-runner-core.js | ~1,550 | ~1,626 (1,626) |
| PF-1f | gate-runner-spec.md | ~210 | ~223 (223) |
| PF-1h | gate-manifest.json | ~180 | ~200 (200) |
| PF-1i | pa-questions.md | ~432 | ~431 (431) |
| PF-1j | pa-deployment.md | ~320 | ~363 (363) |
| PF-1k | pa-weaver.md | ~450 | ~455 (455) |
| PF-1l | pa-guardrails.md | ~176 | ~175 (175) |
| PF-1n | artifact-routing.md | 843 | ~900 (900) |
| PF-1o | artifact-tc-brief-template.md | ~165 | ~223 (223) |
| PF-1p | artifact-value-tables.md | ~226 | ~262 (262) |
| PF-2b | components.css | 290 | ~1,195 (1,195) |
| P2-1c | components.css | 290 | ~1,195 (1,195) |
| P2-1e | value tables | ~226 | ~262 (262) |

### Gate counts in tracker

- Verified: 38 total in gate runner results table is CORRECT (36 GR + 2 diagnostic, excluding BV-01-BV-04 which are tracked separately in Phase 1)
- Verified: "___/38" in-runner and "___/42" total in Execution Summary are CORRECT
- No changes needed for gate counts

---

## Audit findings addressed

### From 01-stale-reference-audit.md
- F-01 (BLOCKING): Fixed gate count breakdown
- F-02 (SIGNIFICANT): Fixed builder-recipe line count in routing table
- F-03 (SIGNIFICANT): Fixed "840-line" running text
- F-04 (SIGNIFICANT): Fixed gate-runner-core.js line count
- F-05 (SIGNIFICANT): Fixed gate-runner-spec.md line count
- F-06 (SIGNIFICANT): Fixed gate-manifest.json line count
- F-07 (MINOR): Fixed pa-questions.md line count
- F-08 (BLOCKING): Fixed pa-deployment.md line count + description
- F-09 (SIGNIFICANT): Fixed pa-weaver.md line count + description
- F-10 (MINOR): Fixed pa-guardrails.md line count + description
- F-11 (BLOCKING): Fixed all 14 stale Appendix D entries
- F-12 (SIGNIFICANT): Fixed both stale builder-recipe counts (219 and 925)
- F-13 (MINOR): Fixed orchestrator line count in Known Limitations
- F-17 through F-18: Verified NOT STALE (38 is correct for in-runner scope)
- F-19 through F-26: Fixed all 8 EXECUTION-TRACKER line counts

### From 03-fresh-eyes-coherence.md
- B-1 (BLOCKING): Fixed D-09/Background Hex Lock conflation
- S-1 (SIGNIFICANT): Added authority clarification
- S-2 (SIGNIFICANT): Standardized brief line counts
- S-4 (SIGNIFICANT): Explained 146/153 discrepancy
- M-6 (MINOR): Marked council-verdict.md as optional

### From 05-cross-file-consistency.md
- C-2 (MEDIUM): Added <=3 MECHANICAL fixes cap to SHIP WITH FIXES
- C-3 (MEDIUM): Added "no confirmed experiential failures" to SHIP threshold
- C-4 (MEDIUM): Added Priority 0 experiential override to Section 4 verdict logic

---

*End of changelog.*
