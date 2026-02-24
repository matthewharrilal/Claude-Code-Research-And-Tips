# Wave 2 Conflict Resolutions

**Status:** FINAL — All 9 conflicts resolved
**Authority:** This document is the single source of truth for Wave 2 editors. If a source file contradicts this document, this document wins.

---

## CONFLICT-001: PA-23 Rewrite Wording

**Conflict:** File 14 and File 14b propose different rewrites for PA-23.
- **File 14:** "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?"
- **File 14b:** "At 768px, does anything look broken, truncated, or overlapping that worked at 1440px? At what point between viewports does the layout feel most strained?"

**Resolution:** ADOPT File 14's version.
**Rationale:** More specific (references exact screenshot pairs). File 14b's "at what point between viewports" implies interactive testing, which auditors cannot perform on static screenshots.

**Editor Directive (FIX-047):** Replace PA-23 text with exactly:
> "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?"

---

## CONFLICT-002: PA-24/PA-25 Rewrite Wording

**Conflict:** File 14 and File 14b propose different rewrites for PA-24 and PA-25.
- **File 14 PA-24:** "Does this feel like it belongs to a SYSTEM, or is it one-off custom work?"
- **File 14 PA-25:** "If you covered the header, could you identify the design system?"
- **File 14b PA-24:** Keep but rewrite for single-page context.
- **File 14b PA-25:** "If you covered the header, does the rest of the page still feel like a cohesive design?"

**Resolution:** HYBRID — PA-24 uses File 14's version; PA-25 uses File 14b's version.
**Rationale:** File 14's PA-24 is more actionable. File 14b's PA-25 does not require the auditor to have design system knowledge (which they won't have in a standalone PA).

**Editor Directive (FIX-051):** Replace PA-24 text with exactly:
> "Does this feel like it belongs to a SYSTEM, or is it one-off custom work?"

**Editor Directive (FIX-052):** Replace PA-25 text with exactly:
> "If you covered the header, does the rest of the page still feel like a cohesive design?"

---

## CONFLICT-003: PA-72 Auditor Assignment

**Conflict:** File 14 assigns PA-72 (accessibility) to Auditor H. File 14b assigns PA-72 to Auditor E.
- **File 14:** Auditor H (lightest load, responsiveness-adjacent)
- **File 14b:** Auditor E (Grid + Layout, already has 6 questions)

**Resolution:** ADOPT File 14's assignment — Auditor H.
**Rationale:** H has the lightest load. Accessibility is responsiveness-adjacent (viewport behavior, touch targets). E already has 6 questions and adding more risks quality dilution.

**Editor Directive (FIX-056):** Assign PA-72 to Auditor H. Do NOT assign to Auditor E.

---

## CONFLICT-004: New PA Question Numbering — ALREADY RESOLVED

**Conflict:** File 14 and File 14b proposed overlapping PA numbers for new questions.

**Resolution:** Numbering is settled as follows:
| PA Number | Question Topic | Source | Assigned Auditor |
|-----------|---------------|--------|-----------------|
| PA-71 | Transition quality | Wave 1 cleanup addition | Auditor D |
| PA-72 | Content-form specificity | File 14 (was PA-71) | See CONFLICT-003 |
| PA-73 | Accessibility quality | File 14 (was PA-72) | Auditor H |
| PA-74 | Coherence direction | File 14 (was PA-73) | Per assignment table |
| PA-75 | Completion | File 14 (was PA-74) | Per assignment table |
| PA-76 | Emotional arc direct assessment | File 14b (was PA-71) | Per assignment table |
| PA-77 | Typographic hierarchy as composition | File 14b (was PA-73) | Per assignment table |

**Editor Directive (FIX-055 through FIX-060):** Use the numbering above. All references to old numbers from File 14 or File 14b must be updated to match this table.

---

## CONFLICT-005: Auditor C Load Reduction Strategy

**Conflict:** Two competing strategies for reducing Auditor C's question load.
- **File 14:** Redistribute — move PA-52 to D, PA-55 to B, remove PA-10. Result: C at 11-12 questions.
- **File 14b:** Split C into C1 (8 Qs) and C2 (5-6 Qs). Requires a 10th auditor. Cost: ~$5-15 extra.

**Resolution:** ADOPT File 14's redistribution strategy. Mark FIX-064 (C1/C2 split) as DEFERRED CONTINGENT.
**Rationale:** Redistribution is cheaper, simpler, and sufficient. The C1/C2 split is a valid escalation path if redistribution proves insufficient, but should not be implemented proactively.

**Editor Directive (FIX-061):** Move PA-52 from Auditor C to Auditor D.
**Editor Directive (FIX-062):** Move PA-55 from Auditor C to Auditor B.
**Editor Directive (FIX-064):** Mark as DEFERRED CONTINGENT. Do NOT implement the C1/C2 split. Only revisit if Auditor C quality degrades at 11-12 questions.

---

## CONFLICT-006: PA-50/PA-53 Keep vs Demote

**Conflict:** Whether to keep PA-50 and PA-53 as standalone scored questions or demote them to gate-verification notes.
- **File 14:** KEEP as standalone questions (scored 5.0 and 4.8 respectively in value assessment)
- **File 14b:** DEMOTE to gate-verification notes (near-identical to gate checks GR-14 and GR-03)

**Resolution:** KEEP as standalone questions. Do NOT demote.
**Rationale:** The perceptual assessment adds value beyond the gate's binary check. A gate verifies "does this exist?" — a PA question evaluates "does this work well?" These are different evaluations. Auditor C overload is better addressed by redistribution (CONFLICT-005) than by removing valuable questions.

**Editor Directive (FIX-109, FIX-110):** PA-50 and PA-53 remain as standalone scored PA questions. No changes needed — preserve current state.

---

## CONFLICT-007: GR-47 vs BV-01 Redundancy

**Conflict:** Two proposals for the same check (brief line budget compliance) with different names and placement.
- **File 13:** GR-47 (Brief Line Budget Compliance) as new RECOMMENDED gate in gate-runner
- **File 15:** BV-01 (Tier Line Budget Compliance) as brief verification gate in pre-build checks

**Resolution:** Do NOT implement GR-47. BV-01 from Wave 1 already covers this.
**Rationale:** These are the same check. BV-01 runs pre-build (where it belongs — catching budget violations before building starts). Adding GR-47 as a gate-runner gate would duplicate the check at a later stage where it's less useful.

**Editor Directive (FIX-007):** Do NOT add GR-47 to the gate runner. If FIX-007 references GR-47, skip it.
**Editor Directive (FIX-103):** BV-01 is already implemented or scheduled in Wave 1. No additional action needed for Wave 2.

---

## CONFLICT-008: GR-48 vs META-COVERAGE Redundancy

**Conflict:** Two proposals for the same check (gate coverage completeness) with different names.
- **File 13:** GR-48 (Gate Coverage Completeness) as new REQUIRED gate
- **File 15:** META-COVERAGE function `verifyGateCoverage(results)` as a meta-verification function

**Resolution:** Implement as GR-48 using File 13's naming convention. Absorb File 15's implementation code into the GR-48 gate.
**Rationale:** One gate, one name, one implementation. File 13's naming (GR-48) follows the existing gate naming convention. File 15's code provides the executable logic.

**Editor Directive (FIX-069):** Add GR-48 to the gate runner using the name "Gate Coverage Completeness". Use File 15's `verifyGateCoverage(results)` code as the implementation body.
**Editor Directive (FIX-127):** Do NOT add a separate META-COVERAGE function. It is absorbed into GR-48.

---

## CONFLICT-009: GR-19 Demote vs Add Code

**Conflict:** Whether to demote GR-19 (threshold gaming detection) to ADVISORY or add executable code for it.
- **File 13:** Demote GR-19 to ADVISORY (rationale: arbitrary threshold, no code backing it)
- **File 15:** Provides executable code for GR-19

**Resolution:** Implement FIX-031 (add code). Keep GR-19 as RECOMMENDED. Mark FIX-040 as SUPERSEDED.
**Rationale:** The rationale for demotion was "no code, arbitrary threshold." FIX-031 provides code, which eliminates the rationale for demotion. With code backing the gate, RECOMMENDED is the appropriate classification.

**Editor Directive (FIX-031):** Add File 15's executable code for GR-19. Gate remains classified as RECOMMENDED.
**Editor Directive (FIX-040):** Mark as SUPERSEDED. Do NOT demote GR-19 to ADVISORY.

---

## Summary Table

| Conflict | Resolution | Key Directive |
|----------|-----------|---------------|
| 001 | File 14's PA-23 wording | Use exact screenshot pair reference |
| 002 | Hybrid: File 14 PA-24 + File 14b PA-25 | PA-25 must not require design system knowledge |
| 003 | Auditor H for PA-72 | Do NOT assign to E |
| 004 | Already resolved | PA-71 through PA-77 per table above |
| 005 | Redistribution, not split | FIX-064 is DEFERRED CONTINGENT |
| 006 | KEEP PA-50/PA-53 | Do NOT demote to gate notes |
| 007 | BV-01 only, no GR-47 | Skip any FIX referencing GR-47 |
| 008 | GR-48 name + File 15 code | One gate, not two |
| 009 | Add code + keep RECOMMENDED | FIX-040 is SUPERSEDED |
