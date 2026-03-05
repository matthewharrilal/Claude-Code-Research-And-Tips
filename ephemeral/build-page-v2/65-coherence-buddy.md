# Coherence Buddy Review

**Author:** coherence-buddy (Task #65)
**Date:** 2026-02-28
**Reviewing:** `64-coherence-audit.md`

---

## 1. SPOT-CHECK RESULTS

### Numeric Values Verified (4 spot-checks)

**CHECK 1: Container Width (GR-03)**
- Audit claims: SKILL.md 940-960px, gate-runner `mw >= 940 && mw <= 960`
- Verified at gate-runner-v2.js line 178: `return mw >= 940 && mw <= 960;` -- CORRECT
- Verified at SKILL.md line 136, 830, 947: "940-960px" -- CORRECT
- Verified at conventions-brief.md line 4: "940-960px" -- CORRECT
- Verified at world-description.md line 11: "940-960px" -- CORRECT
- **PASS**

**CHECK 2: Background Delta (GR-11)**
- Audit claims: `delta >= 15` at gate-runner line 451
- Verified at gate-runner-v2.js line 451: `pass: delta >= 15` -- CORRECT
- Verified at SKILL.md line 141: ">= 15 RGB difference" -- CORRECT
- Verified at conventions-brief.md line 34: ">= 15 RGB max-channel delta" -- CORRECT
- **PASS**

**CHECK 3: Stacked Gap (GR-13)**
- Audit claims: `cssSum <= 120` at gate-runner line 474
- Verified at gate-runner-v2.js line 474: `pass: cssSum <= 120` -- CORRECT
- Threshold object at line 481: `{ maxCSSSum: 120 }` -- CORRECT
- SKILL.md line 142: "<= 120px total" -- CORRECT
- **PASS**

**CHECK 4: Single Margin (GR-15)**
- Audit claims: `val > 96` at gate-runner line 536
- Verified at gate-runner-v2.js line 536: `if (val > 96) violations.push(...)` -- CORRECT
- Threshold object at line 543: `{ maxSingleValue: 96 }` -- CORRECT
- SKILL.md line 143: "<= 96px" -- CORRECT
- **PASS**

**All 4 spot-checks PASSED. Numeric values are accurately reported.**

### Gate ID Cross-References Verified

**essentialIds array (gate-runner-v2.js lines 913-917):**
Verified: GR-03, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-48, GR-60, GR-67, GR-45 (16 total) -- MATCHES audit table.

**advisoryIds array (gate-runner-v2.js line 919):**
Verified: GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55, GR-61, GR-66 (9 total) -- MATCHES audit table.

**SKILL.md gate lists (lines 312-320):**
- 14 REQUIRED: GR-03, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-18, GR-44, GR-60, GR-67 -- MATCHES
- 1 META: GR-48 -- MATCHES
- 1 RECOMMENDED: GR-45 -- MATCHES
- 9 ADVISORY: GR-01, GR-02, GR-04, GR-07, GR-20, GR-51, GR-55, GR-61, GR-66 -- MATCHES

**All gate IDs match between SKILL.md and gate-runner-v2.js.**

---

## 2. MISSED CONTRADICTIONS

### MISSED: Viewport Count Disagreement (PA Skill vs SKILL.md)

**This is a genuine discrepancy the audit did NOT catch.**

The PA skill (`~/.claude/skills/perceptual-auditing/SKILL.md`) specifies **3 viewport widths** in three separate locations:
- Line 246: "pre-captured at 1440px, 1024px, 768px"
- Line 264: "Screenshots are captured at 3 viewport widths: 1440px, 1024px, 768px"
- Line 277: "For each viewport width (1440px, 1024px, 768px)"

The build-page SKILL.md (Step 2.3, line 216-226) captures at **2 viewports only**: 1440px and 768px. There is no mention of 1024px anywhere in SKILL.md.

The prompt-templates.md also uses only 2 viewports (1440px and 768px at lines 168, 198-199).

**Impact:** The PA skill tells auditors to expect screenshots at 1024px. No such screenshots will be produced by the orchestrator. If an auditor reads the PA skill and expects 1024px screenshots, they will find none.

**Mitigation:** SKILL.md line 335-336 says auditors receive "ONLY: receiving principle, Section 0 protocol, screenshot paths, their 4 questions, language constraint, output instruction." They do NOT receive the PA skill file. The auditor prompt is constructed by the orchestrator from SKILL.md's template (lines 424-482), which references `{1440_scroll_paths}` and `{768_scroll_paths}` only. So the PA skill's 1024px references are never exposed to auditors at runtime.

**Severity:** LOW for runtime (auditors never see the PA skill directly), but MEDIUM for documentation accuracy. The PA skill claims 3 viewports; the pipeline delivers 2. If someone consults the PA skill for reference, they will get the wrong number.

**Recommended fix:** Update PA skill lines 246, 264, and 277 to say "1440px, 768px" (2 viewports), or add 1024px screenshots to SKILL.md Step 2.3 (3 viewports). The 2-viewport approach matches the actual implementation.

### All Other Audit Findings Verified -- No Additional Contradictions Found

I checked:
- GR-09 border hierarchy: SKILL.md says 4px/3px/1px, gate-runner uses 3.5-4.5/2.5-3.5/0.5-1.5 tolerance bands (lines 331-333). Audit correctly identified this as coherent.
- GR-67 footer font: Gate checks `fs < 11` (line 144), SKILL.md patch table says "Replace with 12px" (line 654). Audit correctly identified the gate/patch distinction.
- GR-05 warm order: Gate uses 5-point tolerance AND a 10-point spread exclusion for near-neutrals (lines 227-230). Audit noted the 5-point tolerance but did not mention the spread exclusion. This is not a contradiction -- it is an implementation detail the audit did not fully describe but it does not conflict with anything.
- GR-10 body line-height check: `bodyLH >= 1.6` (line 393). Audit correctly noted this is permissive of the 1.7 standard.
- Question assignments: All 20 questions match across SKILL.md, PA skill, and prompt-templates.md. Verified question text is verbatim.

---

## 3. C-01 FIX VERIFIED

**prompt-templates.md line 524:**
```
- **RUNTIME NOTE:** At runtime, the orchestrator (SKILL.md) reads all files and embeds content INLINE in the REFINE prompt. The "Read this file" instructions in the template above are the DESIGN INTENT but the actual delivery mechanism is inline embedding. This means the REFINE builder receives all content in its prompt without needing filesystem access.
```

This runtime note is present at line 524 and accurately describes the discrepancy between the template's file-reading instructions and SKILL.md's inline-embedding behavior.

**C-01 FIX: CONFIRMED PRESENT AND ACCURATE.**

---

## 4. ARE THE 5 MINOR DISCREPANCIES REALLY MINOR?

**D-01 (World-Description missing from Template 1): AGREE -- LOW.**
prompt-templates.md is reference-only (its own line 5 says SKILL.md is runtime authority). The omission means the template is incomplete as documentation, but SKILL.md correctly includes it. No runtime impact.

**D-02 (Visual Verification paragraph in auditor template): AGREE -- LOW.**
The PA skill includes this paragraph (lines 73-78). prompt-templates.md pulled it from the PA skill source but SKILL.md didn't embed it. It is a beneficial addition that is non-contradictory. The auditor prompt DOES benefit from this paragraph, so adding it to SKILL.md's auditor template would be an improvement. But its absence does not cause a bug.

**D-03 (Weaver Section 0 elaboration): AGREE -- LOW.**
The Receiving Principle item #1 in SKILL.md already says "View the screenshots yourself first. Write 3 sentences about what YOU experience." The Section 0 block in prompt-templates.md is an elaboration, not new content. Non-contradictory.

**D-04 (GR-48 tier labeling): AGREE -- LOW.**
The JS code labels GR-48 as `tier: 'REQUIRED'` (line 900) while the JS header comment says META (line 13) and SKILL.md says META (line 314-315). Functionally, GR-48 IS in essentialIds (line 916), so it blocks routing regardless of label. The label inconsistency is cosmetic. However, I note: the audit called this "cosmetic labeling only" which is almost but not exactly right -- if someone reads the JSON output and sees `tier: 'REQUIRED'` for GR-48, they might think there are 15 REQUIRED gates instead of 14+1 META. Strictly cosmetic but slightly misleading in the JSON output. Still LOW.

**D-05 (Q-XX vs E-XX prefix): AGREE -- LOW.**
SKILL.md line 368 explicitly says "embedded -- do NOT parse PA skill at runtime" and uses Q-XX as an intentional local namespace. Fully intentional, fully documented.

**Verdict on minor discrepancies: ALL 5 ARE GENUINELY MINOR. None have runtime impact.**

---

## 5. VERDICT

**AGREE WITH COHERENT** -- with one addition.

The audit correctly identified 1 genuine contradiction (C-01, now fixed) and 5 minor discrepancies. Its numeric spot-checks are accurate. Its gate ID cross-references are accurate. Its question assignment verification is accurate.

**One missed item:** The PA skill references 3 viewport widths (1440, 1024, 768) while SKILL.md and prompt-templates.md only use 2 (1440, 768). This is a documentation inconsistency in the PA skill that does not affect runtime (auditors never receive the PA skill file directly), but it means the PA skill's "Screenshot Pre-Capture Protocol" section is out of sync with the actual pipeline.

**Overall assessment:** The system is FUNCTIONALLY COHERENT. All contradictions are either fixed (C-01) or documentation-only. The one new finding (viewport count) is LOW-MEDIUM severity and does not affect runtime behavior.

### Summary Table

| Finding | Audit Assessment | Buddy Assessment | Agreement |
|---------|-----------------|------------------|-----------|
| C-01 (REFINE delivery) | GENUINE, MEDIUM | FIXED, confirmed | AGREE |
| D-01 (World-Description) | LOW | LOW | AGREE |
| D-02 (Visual Verification) | LOW | LOW | AGREE |
| D-03 (Weaver Section 0) | LOW | LOW | AGREE |
| D-04 (GR-48 tier label) | LOW | LOW (slightly misleading in JSON output) | AGREE |
| D-05 (Q-XX vs E-XX) | LOW | LOW | AGREE |
| NEW: Viewport count | NOT FOUND | LOW-MEDIUM (PA skill says 3, pipeline uses 2) | NEW FINDING |
