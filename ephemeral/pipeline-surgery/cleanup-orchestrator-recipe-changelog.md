# Changelog: artifact-orchestrator.md + artifact-builder-recipe.md

Date: 2026-02-25
Agent: orchestrator-recipe-fixer

---

## artifact-orchestrator.md Changes

### 1. Section numbering realignment (Fix #2)
**Status:** APPLIED
Added "(Phase X)" labels to all section headers to eliminate the Section/Phase offset confusion (Section 2 = Phase 0, Section 5 = Phase 2, etc.):
- SECTION 0 -> SECTION 0 (Pre-Pipeline)
- SECTION 1 -> SECTION 1 (Pre-Pipeline)
- SECTION 2 -> SECTION 2 (Phase 0)
- SECTION 3 -> SECTION 3 (Phase 1)
- SECTION 4 -> SECTION 4 (Phase 1.5)
- SECTION 5 -> SECTION 5 (Phase 2)
- SECTION 6 -> SECTION 6 (Phase 3)
- SECTION 7 -> SECTION 7 (Phase 4)

Chose option (b) -- adding labels rather than renumbering -- to avoid cross-reference breaks in MANIFEST.md and other files.

**Audit ref:** 03-fresh-eyes-coherence.md finding S-5

### 2. Experiential scan enforcement note (Fix #7)
**Status:** APPLIED
Added explicit enforcement note in Phase 3A+ (after the EXPERIENTIAL_SCAN recording instruction). Specifies:
- Execution tracker fields P3A+-1a through P3A+-1d with their exact questions
- ENFORCEMENT block stating the orchestrator MUST record results BEFORE spawning PA auditors
- Clarification that this is a process discipline requirement (auditable via tracker), not a programmatic gate

**Audit ref:** 02-adversarial-audit.md Finding 05

### 3. Fresh-eyes / circuit breaker resolution (Fix #8)
**Status:** APPLIED
Added "FRESH-EYES EXCEPTION (circuit breaker only)" block after the USABILITY CIRCUIT BREAKER section. Formalizes:
- This is the ONLY permitted context injection into auditor prompts
- Narrowly scoped: ONLY BLOCKING-USABILITY findings from orchestrator's own scan
- ONLY framed as "verify or contradict"
- NOT gate results, NOT pipeline vocabulary, NOT architectural context
- Must be documented in execution tracker (P3A+-5)
- Zero BLOCKING-USABILITY findings = pure fresh-eyes prompts

**Audit ref:** 02-adversarial-audit.md Finding 02, 03-fresh-eyes-coherence.md indirectly

### 4. D-09 / BV-02 conflation (Fix #1)
**Status:** NOT APPLICABLE -- conflation does not exist in current file
The fresh-eyes auditor (03-fresh-eyes-coherence.md finding B-1) reported that "Section 5 says D-09 background hex lock is ENFORCED." Thorough search (grep for D-09, BV-02, hex lock, Quiet Zone, background hex) found zero matches in the current artifact-orchestrator.md. This conflation was either fixed in a prior wave or was present in a version the auditor reviewed that predates the current file. No action taken.

---

## artifact-builder-recipe.md Changes

### 5. Step 1.3 template -> Execution Brief (Fix #3)
**Status:** APPLIED
Changed Step 1.3 heading from "Read the 73-line template" to "Read the Execution Brief." Updated body text to clarify that the builder receives the assembled brief (from Brief Assembler), not the raw 73-line template. Added a provenance reference to Appendix B.

**Audit ref:** 03-fresh-eyes-coherence.md finding S-3

### 6. Inline ITEM citations cleanup (Fix #4)
**Status:** APPLIED
Moved all inline provenance citations from the recipe body (Phases 1-6) to Appendix B. Changes:
- Removed ~90 inline ITEM citation lines (blockquote lines containing only `[ITEM X, extract-file.md, VA LXXX]`)
- Removed ~40 trailing ITEM references from bullet points (e.g., `[ITEM 83, extract-d12-d14.md, VA L1089]`)
- Kept ALL operational CSS guidance, calibration values, and reference data in place
- Added provenance note at top of Appendix B explaining the change
- Updated the closing line to note that provenance was moved to Appendix B

File reduced from 999 lines to 828 lines (-171 lines, all provenance-only content). Zero operational content removed.

**Audit ref:** 03-fresh-eyes-coherence.md finding M-4, 02-adversarial-audit.md (general readability)

### 7. Stale line counts (Fix #5)
**Status:** NOT APPLICABLE -- no stale line counts found
Searched for "840 lines" and "934 lines" throughout the file. Neither exists in the current version. These were likely fixed in a prior wave.

### 8. Experiential format specs (Fix #6)
**Status:** ALREADY PRESENT
- Builder recipe Step 5.0 already specifies `<!-- EXPERIENTIAL-CHECK: [findings] -->` (line 651 in original)
- Orchestrator already specifies `EXPERIENTIAL_SCAN: [CLEAN|findings]` (line 471 in original)
No action needed.

---

## Summary

| Fix # | Description | Status | File |
|-------|-------------|--------|------|
| 1 | D-09/BV-02 conflation | N/A (not found) | orchestrator |
| 2 | Section numbering | APPLIED | orchestrator |
| 3 | Step 1.3 template -> brief | APPLIED | recipe |
| 4 | Inline ITEM citations | APPLIED | recipe |
| 5 | Stale line counts | N/A (not found) | recipe |
| 6 | Experiential format specs | ALREADY PRESENT | both |
| 7 | Experiential scan enforcement | APPLIED | orchestrator |
| 8 | Fresh-eyes / circuit breaker | APPLIED | orchestrator |

**Net changes:** 4 fixes applied, 2 not applicable (already fixed), 2 already present.
**Lines changed:** orchestrator ~+20 lines, recipe ~-171 lines (provenance moved to appendix).
