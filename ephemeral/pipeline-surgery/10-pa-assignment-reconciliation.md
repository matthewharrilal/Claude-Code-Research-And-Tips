# PA Question Assignment Reconciliation

**Author:** pa-assignment-reconciler (Opus 4.6)
**Date:** 2026-02-20
**Purpose:** Reconcile all conflicting PA question-to-auditor assignment schemes across the codebase
**Files Examined:** 18 files containing assignment tables across 6 source directories

---

## Section 1: All Assignment Schemes Found

### Scheme 1: PA SKILL.md Mode 4 (AUTHORITATIVE -- Tier 5 questions present)

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md` (lines 532-553)
**Date/Context:** Updated through 2026-02-19. The canonical PA skill.
**Auditor role names:** A through I (Adversarial labeled without letter in team tree, but "Adversarial" in task graph)
**Total questions:** 57 (48 standard + 9 Tier 5)
**Tier 5 range:** PA-60 through PA-67 (8 questions listed in Tier 5 section, lines 369-381), BUT PA-68 appears in Mode 4 team tree (line 547) assigned to Auditor G

| Auditor | Role | Standard Questions | Tier 5 | Total |
|---------|------|--------------------|--------|-------|
| A | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45 | PA-65, PA-67 | 9 |
| B | Readability+Typography | PA-02, 06, 07, 08, 29 | (none) | 5 |
| C | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53 | PA-64, PA-66 | 13 |
| D | Flow+Pacing | PA-12, 13, 34, 35, 36 | PA-62 | 6 |
| E | Grid+Layout | PA-14, 15, 37, 38, 39 | PA-63 | 6 |
| F | Consistency+Rhythm | PA-16, 17, 40, 41 | PA-60, PA-61 | 6 |
| G | Metaphor+Ideology | PA-42, 43, 44 | PA-68 | 4 |
| H | Responsive | PA-21, 22, 23, 46, 47 | (none) | 5 |
| I (Adversarial) | Adversarial | PA-26, 27, 28, 48 | (none) | 4 |

**INTERNAL CONTRADICTION:** The Tier 5 section (lines 363-402) defines PA-60 through PA-67 as 8 questions, with scoring out of 8 ("7-8 / 8 = COMPOSED"). But the Mode 4 team tree (lines 535-553) says "48 standard + 9 Tier 5 = 57 questions" and assigns PA-68 to Auditor G. The Tier 5 scoring table says 8 max, but Mode 4 says 9 Tier 5. PA-68 EXISTS in `flagship-pa-questions.md` but is NOT listed in the PA SKILL.md Tier 5 question table.

**Missing from assignments:** PA-03, PA-24, PA-25 (all exist in the PA SKILL.md question definitions but are NOT assigned to any Mode 4 auditor)

---

### Scheme 2: flagship-pa-questions.md (Tier 5 ONLY -- AUTHORITATIVE for Tier 5)

**File:** `design-system/pipeline/flagship-pa-questions.md` (full file, 158 lines)
**Date/Context:** Tier 5 question definitions with auditor assignments per question
**Auditor role names:** Same A through I as Scheme 1
**Total questions:** 9 Tier 5 ONLY (PA-60 through PA-68)
**Standard question assignments:** References existing PA skill assignments

| Auditor | Role | Standard Qs (referenced) | Tier 5 Addition | Total (per file) |
|---------|------|-------------------------|-----------------|------------------|
| A | Impression+Emotion | PA-01,04,05,18,19,20,45 | PA-65, PA-67 | 9 |
| B | Readability+Typography | PA-02,06,07,08,29 | (none) | 5 |
| C | Spatial+Proportion | PA-09,10,11,30,31,32,33,50,51,52,53 | PA-64, PA-66 | 13 |
| D | Flow+Pacing | PA-12,13,34,35,36 | PA-62 | 6 |
| E | Grid+Layout | PA-14,15,37,38,39 | PA-63 | 6 |
| F | Consistency+Rhythm | PA-16,17,40,41 | PA-60, PA-61 | 6 |
| G | Metaphor+Ideology | PA-42,43,44 | PA-68 | 4 |
| H | Responsive | PA-21,22,23,46,47 | (none) | 5 |
| I | Adversarial | PA-26,27,28,48 | (none) | 4 |

**CRITICAL:** This file explicitly includes PA-68 (Metaphor Spatial Coverage) as a Tier 5 question, with full question text, scoring rubric, and auditor assignment to G. It says "48 standard + 9 Tier 5 = 57 questions." The summary table at the bottom matches exactly.

---

### Scheme 3: /build-page SKILL.md Section 6.2 (AUTHORITATIVE for orchestrator)

**File:** `~/.claude/skills/build-page/SKILL.md` (lines 275-286)
**Date/Context:** The /build-page orchestrator, written 2026-02-19.
**Total questions stated:** Not explicitly stated, but weaver section says "PA-60 through PA-68" (9 Tier 5) and "57 questions x 9 auditors"

| Auditor | Role | Questions |
|---------|------|-----------|
| A | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45, **65**, **67** |
| B | Readability+Typography | PA-02, 06, 07, 08, 29 |
| C | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, **64**, **66** |
| D | Flow+Pacing | PA-12, 13, 34, 35, 36, **62** |
| E | Grid+Layout | PA-14, 15, 37, 38, 39, **63** |
| F | Consistency+Rhythm | PA-16, 17, 40, 41, **60**, **61** |
| G | Metaphor+Ideology | PA-42, 43, 44, **68** |
| H | Responsive | PA-21, 22, 23, 46, 47 |
| I | Adversarial | PA-26, 27, 28, 48 |

**MATCHES Scheme 2 (flagship-pa-questions.md) exactly.** This is the most recent authoritative source.

---

### Scheme 4: Prompt-Enrichment-Audit Reports (EARLIER -- 8 Tier 5, NO PA-68)

Multiple files in `ephemeral/prompt-enrichment-audit/` define assignment tables:

**4a. File 02 (PA Skill Audit):** `ephemeral/prompt-enrichment-audit/02-pa-skill-audit.md` (lines 43-51)
- Lists 9 auditors, 48 standard questions, NO Tier 5 assignments
- References PA SKILL.md content directly
- Notes PA-03, PA-24, PA-25 ARE defined in skill but NOT assigned to any auditor

**4b. File 12 (PA Deep Invocation):** `ephemeral/prompt-enrichment-audit/12-pa-deep-invocation.md` (lines 22-33)
- 9 auditors, **53 questions** (standard only, NO Tier 5)
- Lists PA-50 through PA-53 on Auditor C (11 questions)
- Does NOT include PA-03, PA-24, PA-25 in assignments
- Total count: 49 standard questions (NOT 48) -- this discrepancy matches the question IDs listed (PA-01 through PA-53, minus gaps PA-03, PA-24, PA-25, PA-49 = 49)

**Wait -- recount:** The file says "53 questions across 4 tiers" but the table sums to:
A(7) + B(5) + C(11) + D(5) + E(5) + F(4) + G(3) + H(5) + I(4) = 49. The file says 53 but assigns 49.

**4c. File 17 (PA Operational Scaffolding):** `ephemeral/prompt-enrichment-audit/17-pa-operational-scaffolding.md` (lines 18-28)
- 9 auditors, 49 question-assignments, NO Tier 5
- Identical to 4b assignments for standard questions
- Explicitly labels Adversarial auditor as "ADV" not "I"
- Says "49 question-assignments" (consistent with recount)

**4d. File 06 (PA Skill Audit in build-page-prompt):** `ephemeral/build-page-prompt/06-pa-skill-audit.md` (lines 198-211)
- 9 auditors, 48 standard + 8 Tier 5 = **56 total**
- PA-60 through PA-67 ONLY (NO PA-68)
- Otherwise identical standard assignments

---

### Scheme 5: Build-Page Prompt Drafts (EARLIER -- 8 Tier 5, NO PA-68)

Multiple drafts in `ephemeral/build-page-prompt/`:

**5a. DRAFT-11-pa-orchestrator-section.md** (lines 356-368)
- Identical to Scheme 3 (build-page SKILL.md) INCLUDING PA-68
- This is the DRAFT that became the final SKILL.md
- Says 57 questions but weaver section says "PA-60 through PA-67" (8 Tier 5) -- contradiction within the same file

**5b. DRAFT-orchestrator.md** (lines 266-276)
- Identical standard assignments to Scheme 3
- Includes PA-64, PA-66 on C; PA-62 on D; PA-63 on E; PA-60, PA-61 on F; PA-65, PA-67 on A
- Does NOT include PA-68 on G (G gets only PA-42, 43, 44)

**5c. 04-orchestrator-research.md** (lines 397-407)
- 56 total (48 standard + 8 Tier 5)
- NO PA-68
- G gets only PA-42, 43, 44 (3 questions)

**5d. 03-pa-research.md** (lines 267-277)
- 56 total (48 standard + 8 Tier 5)
- NO PA-68
- G gets only PA-42, 43, 44 (3 questions)

**5e. DRAFT-pa-questions.md** (lines 118-132)
- 56 total (48 standard + 8 Tier 5)
- NO PA-68
- G gets only 3 questions

**5f. 16-CONTRARIAN-CHALLENGE.md** (lines 149-160)
- Recounts assignments and finds 57, NOT 56
- Identifies PA-03 as MISSING from all auditor assignments
- Notes the 49 vs 48 standard question discrepancy

---

### Scheme 6: Flagship-44-Recipe Verification Spec (MINIMAL -- 3 auditors)

**File:** `ephemeral/flagship-44-recipe/08-VERIFICATION-SPEC.md` (lines 400-403)
- MINIMUM viable audit with 3 auditors only:
  - Auditor A (Impression): PA-01, 04, 05, 65, 67
  - Auditor C (Spatial): PA-09, 10, 50, 52, 64, 66
  - Auditor F (Rhythm): PA-17, 41, 60, 61
- NOT a full assignment scheme; a triage instrument

---

### Scheme 7: Flagship Remediation PA (AD-HOC -- non-standard numbering)

**File:** `ephemeral/flagship-remediation/_verification/pa-auditor-[A-I].md`
**Date/Context:** 2026-02-18 flagship remediation
- Used 9 auditors (A through I)
- But question numbering is COMPLETELY DIFFERENT -- sequential per-auditor assignment (PA-01 through PA-06 for Auditor A means different questions than the standard PA-01 through PA-06)
- Auditor A: "PA-01 through PA-06" = First Impression, Visual Hierarchy, Spatial Rhythm, Color Warmth, Component Variety, Overall Composition
- Auditor D: "PA-19 through PA-24" = different questions entirely
- This is NOT based on the PA SKILL.md question scheme at all
- **This scheme should be DISREGARDED for reconciliation** as it used ad-hoc questions

---

### Scheme 8: Ceiling Experiment PA

**File:** `ephemeral/ceiling-experiment/_perceptual-audit/`
- Used 9 auditors matching standard role assignments
- Used 48 standard PA questions (pre-Tier 5)
- No Tier 5 questions (PA-60 through PA-68 did not exist yet)
- Standard question assignments match Scheme 1's standard questions

---

## Section 2: Discrepancies

### Discrepancy D-1: Tier 5 Question Count (8 vs 9)

**The fundamental split:**

| Source | Tier 5 Count | PA-68? | Total |
|--------|-------------|--------|-------|
| PA SKILL.md Tier 5 section (lines 363-402) | **8** (PA-60 through PA-67) | NO | implied 56 |
| PA SKILL.md Mode 4 team tree (line 535) | **9** | YES (G) | stated 57 |
| flagship-pa-questions.md | **9** (PA-60 through PA-68) | YES (G) | stated 57 |
| /build-page SKILL.md | **9** | YES (G) | stated 57 |
| build-page-prompt/06-pa-skill-audit.md | **8** | NO | stated 56 |
| build-page-prompt/04-orchestrator-research.md | **8** | NO | stated 56 |
| build-page-prompt/03-pa-research.md | **8** | NO | stated 56 |
| build-page-prompt/DRAFT-pa-questions.md | **8** | NO | stated 56 |
| build-page-prompt/DRAFT-orchestrator.md | **8** | NO | stated 56 |

**Root cause:** PA-68 (Metaphor Spatial Coverage) was ADDED to `flagship-pa-questions.md` after the initial 8 Tier 5 questions were designed. It was propagated to the PA SKILL.md Mode 4 section and to the /build-page SKILL.md, but the PA SKILL.md Tier 5 DEFINITION section (lines 363-402) was NOT updated. This creates an internal contradiction in `perceptual-auditing/SKILL.md`:
- Tier 5 section: 8 questions, scoring out of 8
- Mode 4 section: 9 Tier 5 questions, 57 total

**Which is authoritative:** PA-68 EXISTS in flagship-pa-questions.md with full question text, scoring rubric, and auditor assignment. It is USED in the /build-page SKILL.md (the most recent authoritative document). It SHOULD be 9 Tier 5 questions.

---

### Discrepancy D-2: PA-03, PA-24, PA-25 Unassigned

**The problem:** Three standard PA questions exist in the PA SKILL.md definitions but are NOT assigned to any Mode 4 auditor:

| Question | Text | Tier | Natural Auditor |
|----------|------|------|-----------------|
| PA-03 | "Does this feel like one designer made it, or three?" | Tier 1 (Mandatory Five) | A (Impression+Emotion) or F (Consistency) |
| PA-24 | "Does this page feel like it belongs with its siblings?" | Tier 3 (Cross-Page) | F (Consistency+Rhythm) or G (Metaphor) |
| PA-25 | "If you covered the header, could you identify the design system?" | Tier 3 (Cross-Page) | G (Metaphor+Ideology) or A (Impression) |

**Impact:** PA-03 is a TIER 1 MANDATORY question. It is one of the original "Mandatory Five" (PA-01 through PA-05). Failing to assign it means a critical design quality signal goes unevaluated in every Mode 4 audit.

PA-24 and PA-25 are Tier 3 (Cross-Page) questions. These are less critical for single-page audits but become essential once multiple pages exist.

**ALL sources agree on this gap.** Every assignment table across all 18 files examined omits PA-03, PA-24, and PA-25. The contrarian challenge file (16-CONTRARIAN-CHALLENGE.md) explicitly calls this out.

**Root cause:** The Mode 4 assignment was built from the Tier 2 (Standard Fifteen) question groupings, which start at PA-06. PA-03 is in Tier 1 but was not included in Auditor A's list despite being a Tier 1 question. PA-24 and PA-25 are in a separate "Cross-Page" subsection of Tier 3 and were overlooked during the dimension-based assignment.

---

### Discrepancy D-3: Standard Question Total (48 vs 49)

**The count problem:**

The PA SKILL.md defines these standard question IDs:
- Tier 1: PA-01, PA-02, PA-03, PA-04, PA-05 (5)
- Tier 2 Readability: PA-06, PA-07, PA-08, PA-29 (4)
- Tier 2 Spatial: PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33 (7)
- Tier 2 Flow: PA-12, PA-13, PA-34, PA-35, PA-36 (5)
- Tier 2 Grid: PA-14, PA-15, PA-37, PA-38, PA-39 (5)
- Tier 2 Consistency: PA-16, PA-17, PA-40, PA-41 (4)
- Tier 2 Color: PA-18, PA-19, PA-20 (3)
- Tier 2 Quality: PA-45 (1)
- Tier 3 Responsive: PA-21, PA-22, PA-23, PA-46, PA-47 (5)
- Tier 3 Cross-Page: PA-24, PA-25 (2)
- Tier 3 Architectural: PA-26, PA-27 (2)
- Tier 3 Adversarial: PA-28, PA-48 (2)
- Tier 4 Void: PA-50, PA-51, PA-52, PA-53 (4)
- Tier 2 Metaphor: PA-42, PA-43, PA-44 (3)

**Total defined:** 5 + 4 + 7 + 5 + 5 + 4 + 3 + 1 + 5 + 2 + 2 + 2 + 4 + 3 = **52 standard questions**

**But currently assigned:** 49 (all except PA-03, PA-24, PA-25)

**All sources say "48 standard"** but there are actually 52 unique standard question IDs defined. The "48" count appears to come from excluding Tier 4 void questions (PA-50 through PA-53) from the "standard" count and treating them as a separate category, giving 52 - 4 = 48. BUT the Mode 4 assignments DO include PA-50 through PA-53 in the standard assignments (on Auditor C), so the 48 count is inconsistent.

**Reconciled count:** 52 standard questions defined, 49 currently assigned, 3 unassigned.

---

### Discrepancy D-4: Tier 5 Scoring Thresholds

| Source | Max | COMPOSED | APPROACHING | STRUCTURED | VOCABULARY ONLY |
|--------|-----|----------|-------------|------------|-----------------|
| PA SKILL.md Tier 5 section | /8 | 7-8 | 5-6 | 3-4 | 0-2 |
| flagship-pa-questions.md | /9 | 8-9 | 6-7 | 3-5 | 0-2 |
| /build-page SKILL.md (Section 8) | /9 | >= 7 | 5-6 | -- | -- |

**Root cause:** Same as D-1. PA-68 was added to flagship-pa-questions.md, changing the denominator from /8 to /9. The PA SKILL.md Tier 5 section was not updated.

---

### Discrepancy D-5: Auditor G Load Imbalance

Without PA-68:
- G has 3 questions (PA-42, 43, 44) -- lightest load by far

With PA-68:
- G has 4 questions -- still the lightest load

Either way, G is underloaded relative to C (13 questions). This is justified because metaphor assessment requires deep qualitative analysis per question, but the 3-question version leaves G severely underutilized in a Mode 4 audit that takes ~25-30 minutes.

---

### Discrepancy D-6: Font Trinity Inconsistency (Ancillary)

The /build-page SKILL.md says "Instrument Serif, Inter, JetBrains Mono" in SC-03.
The PA SKILL.md Tier 5 enriched prompt (B2, U-09) says "Instrument Serif / Source Sans 3 / Source Code Pro".

This is a font trinity discrepancy unrelated to PA assignments but discovered during this audit.

---

## Section 3: Canonical Assignment Recommendation

### Guiding Principles

1. **PA-68 is IN.** It has full question text, scoring rubric, and assignment in the most recent authoritative documents.
2. **PA-03 MUST be assigned.** It is a Tier 1 Mandatory question and should never have been omitted.
3. **PA-24 and PA-25 should be assigned** for completeness, but are lower priority (Cross-Page questions for single-page audits).
4. **Load balancing** should keep no auditor above 14 questions unless justified by domain coherence.
5. **Domain coherence** takes priority over perfect load balance -- questions grouped by perceptual domain produce deeper analysis.

### Canonical Assignment Table (57 questions: 49 standard + 8 Tier 5 via specific assignment, BUT recognizing PA-03/PA-24/PA-25 exist)

**OPTION A: Minimal Fix (add 3 unassigned + confirm PA-68 = 60 total)**

| Auditor | Role | Standard Questions | Tier 5 | Total |
|---------|------|--------------------|--------|-------|
| **A** | Impression+Emotion | PA-01, **PA-03**, PA-04, PA-05, PA-18, PA-19, PA-20, PA-45 | PA-65, PA-67 | **10** |
| **B** | Readability+Typography | PA-02, PA-06, PA-07, PA-08, PA-29 | (none) | **5** |
| **C** | Spatial+Proportion | PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-52, PA-53 | PA-64, PA-66 | **13** |
| **D** | Flow+Pacing | PA-12, PA-13, PA-34, PA-35, PA-36 | PA-62 | **6** |
| **E** | Grid+Layout | PA-14, PA-15, PA-37, PA-38, PA-39 | PA-63 | **6** |
| **F** | Consistency+Rhythm | PA-16, PA-17, PA-40, PA-41, **PA-24** | PA-60, PA-61 | **7** |
| **G** | Metaphor+Ideology | PA-42, PA-43, PA-44, **PA-25** | PA-68 | **5** |
| **H** | Responsive | PA-21, PA-22, PA-23, PA-46, PA-47 | (none) | **5** |
| **I** | Adversarial | PA-26, PA-27, PA-28, PA-48 | (none) | **4** |

**Totals:** 52 standard + 9 Tier 5 = **61 total question-assignments** (but PA-17 and PA-41 are ALSO flagged by all auditors per the Ceiling+ elevation rule, so effective coverage is higher).

Wait -- recount. Standard questions defined: 52. But the established convention is "48 standard" which seems to exclude PA-50-53 from the "standard" label even though they are assigned. Let me be precise:

- **Tier 1 Mandatory (5):** PA-01, PA-02, PA-03, PA-04, PA-05
- **Tier 2 Standard (20):** PA-06-08, PA-09-11, PA-12-13, PA-14-15, PA-16-17, PA-18-20, PA-29-36, PA-37-41, PA-42-45
- **Tier 3 Deep Dive (8):** PA-21-23, PA-24, PA-25, PA-26-28, PA-46-48
- **Tier 4 Void (4):** PA-50-53
- **Tier 5 Compositional (9):** PA-60-68

Total defined: 5 + 20 + 8 + 4 + 9 = **46 question IDs**

Wait, let me recount carefully from the PA SKILL.md output:

Tier 1: PA-01, PA-02, PA-03, PA-04, PA-05 = 5
Tier 2 Readability: PA-06, PA-07, PA-08, PA-29 = 4
Tier 2 Spatial: PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33 = 7
Tier 2 Flow: PA-12, PA-13, PA-34, PA-35, PA-36 = 5
Tier 2 Grid: PA-14, PA-15, PA-37, PA-38, PA-39 = 5
Tier 2 Consistency: PA-16, PA-17, PA-40, PA-41 = 4
Tier 2 Color+Emotion: PA-18, PA-19, PA-20 = 3
Tier 2 Metaphor: PA-42, PA-43, PA-44 = 3
Tier 2 Quality: PA-45 = 1
Tier 3 Responsive: PA-21, PA-22, PA-23, PA-46, PA-47 = 5
Tier 3 Cross-Page: PA-24, PA-25 = 2
Tier 3 Architectural: PA-26, PA-27 = 2
Tier 3 Adversarial: PA-28, PA-48 = 2
Tier 4 Void: PA-50, PA-51, PA-52, PA-53 = 4
Tier 5: PA-60, PA-61, PA-62, PA-63, PA-64, PA-65, PA-66, PA-67, PA-68 = 9

**Grand total: 61 question IDs**

The "48 standard" count = Tiers 1-3 = 5 + 4 + 7 + 5 + 5 + 4 + 3 + 3 + 1 + 5 + 2 + 2 + 2 = **48** (Tiers 1 through 3)
Plus Tier 4: +4 = 52
Plus Tier 5: +9 = 61

So the PA SKILL.md Mode 4 section saying "48 standard + 9 Tier 5 = 57" is WRONG in two ways:
1. It excludes Tier 4 void questions from the "standard" count but DOES assign them
2. After adding PA-68, the count should be 48 + 4 + 9 = 61, or using the current (flawed) convention: 48+9 = 57 but 4 void questions are also assigned = 53 explicitly assigned

**Actually**, re-examining the PA SKILL.md: the Mode 4 section counts "48 standard" which likely includes Tier 4 void questions in the "standard" total, giving:
- Tiers 1-3 = 48 (as counted above)
- ...but the current assignments include PA-50-53 which are Tier 4

I believe the convention is: "48 standard" = Tiers 1-4 combined (44 from Tiers 1-3 excluding PA-03, PA-24, PA-25 + 4 Tier 4 = 48). This reconciles with the Mode 4 assignment count of 49 assigned (48 + the 3 missing ones would make 51, but they are not assigned).

Let me just do a direct count of what IS assigned:
A: 7, B: 5, C: 11, D: 5, E: 5, F: 4, G: 3, H: 5, I: 4 = 49 standard questions assigned
Plus Tier 5: A: 2, C: 2, D: 1, E: 1, F: 2, G: 1 = 9 Tier 5
Total assigned: 49 + 9 = 58

But the PA SKILL says "48 standard + 9 Tier 5 = 57". So it claims 48 standard but assigns 49. The discrepancy is 1 question.

Regardless, PA-03, PA-24, and PA-25 are UNASSIGNED. This is the key finding.

### FINAL CANONICAL ASSIGNMENT TABLE

| Auditor | Role | Questions (with Tier 5 in bold) | Count | Justification for Changes |
|---------|------|------|-------|---------------------------|
| **A** | Impression+Emotion | PA-01, **PA-03**, PA-04, PA-05, PA-18, PA-19, PA-20, PA-45, **PA-65**, **PA-67** | 10 | +PA-03 (Tier 1 Mandatory -- "one designer or three?" is a gestalt impression question, natural fit for Auditor A) |
| **B** | Readability+Typography | PA-02, PA-06, PA-07, PA-08, PA-29 | 5 | Unchanged. Readability is narrow and deep. |
| **C** | Spatial+Proportion | PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-52, PA-53, **PA-64**, **PA-66** | 13 | Unchanged. Heavy but domain-coherent -- all spatial/proportion. |
| **D** | Flow+Pacing | PA-12, PA-13, PA-34, PA-35, PA-36, **PA-62** | 6 | Unchanged. |
| **E** | Grid+Layout | PA-14, PA-15, PA-37, PA-38, PA-39, **PA-63** | 6 | Unchanged. |
| **F** | Consistency+Rhythm | PA-16, PA-17, **PA-24**, PA-40, PA-41, **PA-60**, **PA-61** | 7 | +PA-24 ("belongs with siblings" = cross-page consistency, natural fit for Consistency auditor) |
| **G** | Metaphor+Ideology | **PA-25**, PA-42, PA-43, PA-44, **PA-68** | 5 | +PA-25 ("identify the design system without header" = identity/ideology detection), +PA-68 (Metaphor Spatial Coverage, already assigned in flagship-pa-questions.md) |
| **H** | Responsive | PA-21, PA-22, PA-23, PA-46, PA-47 | 5 | Unchanged. |
| **I** | Adversarial | PA-26, PA-27, PA-28, PA-48 | 4 | Unchanged. |

### Totals

| Category | Count |
|----------|-------|
| Tier 1 (Mandatory) | 5 |
| Tier 2 (Standard) | 32 |
| Tier 3 (Deep Dive) | 11 |
| Tier 4 (Void) | 4 |
| Tier 5 (Compositional) | 9 |
| **GRAND TOTAL** | **61** |

| Auditor | Count | Load Rating |
|---------|-------|-------------|
| A | 10 | Heavy (PA-05 expands to 4 sub-criteria = effective 13) |
| B | 5 | Light |
| C | 13 | Heaviest (justified: spatial domain is broadest) |
| D | 6 | Moderate |
| E | 6 | Moderate |
| F | 7 | Moderate |
| G | 5 | Moderate (up from 3-4, more balanced now) |
| H | 5 | Light |
| I | 4 | Lightest |

### Verification: No Question Assigned Twice, No Question Unassigned

**All 61 PA question IDs assigned exactly once:**

PA-01(A), PA-02(B), PA-03(A), PA-04(A), PA-05(A), PA-06(B), PA-07(B), PA-08(B), PA-09(C), PA-10(C), PA-11(C), PA-12(D), PA-13(D), PA-14(E), PA-15(E), PA-16(F), PA-17(F), PA-18(A), PA-19(A), PA-20(A), PA-21(H), PA-22(H), PA-23(H), PA-24(F), PA-25(G), PA-26(I), PA-27(I), PA-28(I), PA-29(B), PA-30(C), PA-31(C), PA-32(C), PA-33(C), PA-34(D), PA-35(D), PA-36(D), PA-37(E), PA-38(E), PA-39(E), PA-40(F), PA-41(F), PA-42(G), PA-43(G), PA-44(G), PA-45(A), PA-46(H), PA-47(H), PA-48(I), PA-50(C), PA-51(C), PA-52(C), PA-53(C), PA-60(F), PA-61(F), PA-62(D), PA-63(E), PA-64(C), PA-65(A), PA-66(C), PA-67(A), PA-68(G)

**Cross-check:** 61 entries. No duplicates. No gaps in the defined PA question set.

### Tier 5 Scoring Update

With PA-68 included, Tier 5 scoring must be out of 9:

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 8-9 / 9 | **COMPOSED** | Full compositional depth. Flagship target. |
| 6-7 / 9 | **APPROACHING** | Significant depth. 1-2 layers need strengthening. |
| 3-5 / 9 | **STRUCTURED** | Some compositional intelligence. Multiple layers absent. |
| 0-2 / 9 | **VOCABULARY ONLY** | Mechanisms deployed but not composed. Middle-equivalent. |

---

## Section 4: Files That Need Updating

### BLOCKING (Must update for canonical scheme to take effect)

| # | File | What Needs Changing | Specific Edit |
|---|------|-------------------|---------------|
| 1 | `~/.claude/skills/perceptual-auditing/SKILL.md` | **Tier 5 section (lines 363-402):** Add PA-68 to Tier 5 question table. Change scoring from /8 to /9. Update verdict thresholds. | Add PA-68 row to table at line ~381. Change "7-8 / 8" to "8-9 / 9", "5-6 / 8" to "6-7 / 9", "3-4 / 8" to "3-5 / 9". Change "0-2 / 8" to "0-2 / 9". |
| 2 | `~/.claude/skills/perceptual-auditing/SKILL.md` | **Mode 4 section (lines 532-553):** Add PA-03 to Auditor A, PA-24 to Auditor F, PA-25 to Auditor G. Update total count. Also fix "56 questions" if it says that (it currently says 57 which matches 9 Tier 5 but does NOT include PA-03/24/25). | Update team tree: A line to include PA-03. F line to include PA-24. G line total to [4 Qs] -> [5 Qs]. Update total to "52 standard + 9 Tier 5 = 61 questions." |
| 3 | `~/.claude/skills/build-page/SKILL.md` | **Section 6.2 (lines 275-286):** Add PA-03 to Auditor A, PA-24 to Auditor F, PA-25 to Auditor G. Confirm PA-68 on G (already present). Update question count references. | Edit table rows for A, F, G. |
| 4 | `design-system/pipeline/flagship-pa-questions.md` | **Auditor Assignment Summary table (lines 146-158):** Add PA-03 to A, PA-24 to F, PA-25 to G. Update totals. | Edit summary table. Standard Qs for A: add PA-03. Standard Qs for F: add PA-24. Standard Qs for G: add PA-25. Update total line. |

### SIGNIFICANT (Should update for consistency)

| # | File | What Needs Changing |
|---|------|-------------------|
| 5 | `~/.claude/skills/perceptual-auditing/SKILL.md` | **Mode 3 section (lines 516-530):** Verify Mode 3 Auditor Beta covers PA-24 and PA-25 (currently "PA-24 to PA-45" -- this is fine as-is). |
| 6 | `~/.claude/skills/perceptual-auditing/SKILL.md` | **Combined verdict matrix (lines 394-401):** Update to use /9 instead of /8 for Tier 5 scores. |

### INFORMATIONAL (Ephemeral files -- no update needed, but noted for provenance)

| # | File | Status |
|---|------|--------|
| 7 | `ephemeral/prompt-enrichment-audit/12-pa-deep-invocation.md` | Historical. Uses 8 Tier 5. No update needed. |
| 8 | `ephemeral/prompt-enrichment-audit/17-pa-operational-scaffolding.md` | Historical. Uses 49 standard, no Tier 5. No update needed. |
| 9 | `ephemeral/prompt-enrichment-audit/02-pa-skill-audit.md` | Historical. Pre-Tier 5. No update needed. |
| 10 | `ephemeral/build-page-prompt/04-orchestrator-research.md` | Draft. Superseded by SKILL.md. No update needed. |
| 11 | `ephemeral/build-page-prompt/03-pa-research.md` | Draft. Superseded by SKILL.md. No update needed. |
| 12 | `ephemeral/build-page-prompt/DRAFT-pa-questions.md` | Draft. Superseded. No update needed. |
| 13 | `ephemeral/build-page-prompt/06-pa-skill-audit.md` | Research. Superseded. No update needed. |
| 14 | `ephemeral/build-page-prompt/DRAFT-orchestrator.md` | Draft. Superseded. No update needed. |
| 15 | `ephemeral/build-page-prompt/DRAFT-11-pa-orchestrator-section.md` | Draft that became SKILL.md. No update needed. |
| 16 | `ephemeral/build-page-prompt/16-CONTRARIAN-CHALLENGE.md` | Correctly identified the PA-03 gap. No update needed. |
| 17 | `ephemeral/flagship-remediation/_verification/` | Used ad-hoc numbering. Not reconcilable. |
| 18 | `ephemeral/flagship-44-recipe/08-VERIFICATION-SPEC.md` | Minimum viable triage, not full assignment. No update needed. |

---

## Summary of Changes Required

1. **PA-68 is canonical Tier 5.** It exists in flagship-pa-questions.md with full definition. Add it to PA SKILL.md Tier 5 section. Update scoring to /9.
2. **PA-03 assigned to Auditor A.** Tier 1 Mandatory question that was inexplicably omitted from all Mode 4 assignments.
3. **PA-24 assigned to Auditor F.** Cross-page consistency naturally fits the Consistency+Rhythm role.
4. **PA-25 assigned to Auditor G.** Design system identity recognition naturally fits Metaphor+Ideology.
5. **Total question count: 61** (52 standard across Tiers 1-4, plus 9 Tier 5). Or using the old convention: "48 standard + 4 void + 9 Tier 5 = 61."
6. **4 files need updating** (2 skills + 1 pipeline doc + 1 flagship-pa-questions summary).
7. **Font trinity discrepancy** found in B2/U-09 of enriched prompt vs SC-03 of build-page SKILL.md (Inter vs Source Sans 3, JetBrains Mono vs Source Code Pro). This is a separate issue to resolve.

---

**END OF RECONCILIATION REPORT**
