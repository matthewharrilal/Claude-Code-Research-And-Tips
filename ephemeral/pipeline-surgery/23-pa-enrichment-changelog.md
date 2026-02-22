# PA Skill Enrichment Changelog

**Date:** 2026-02-20
**Agent:** pa-skill-enricher (Opus)
**Skill file:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Before:** 987 lines, 57 questions (48 standard + 9 Tier 5)
**After:** 1,208 lines (+221), 59 questions (50 standard + 9 Tier 5)

---

## Enrichment Summary

| # | Enrichment | Lines Added | Location |
|---|-----------|-------------|----------|
| 1 | Screenshot-Reading Protocol | +18 | After Mode 4 task graph, before Weaver Protocol |
| 2 | Weaver Protocol (6-section) | +62 net | Replaced old 2-section protocol (lines 571-588) |
| 3 | Tier 5 Question Detail Merge | +48 net | Replaced compact table with full text + scoring rubrics + auditor assignments |
| 4 | TC-Aware Auditing Guidance | +39 | After Metaphor Expression Spectrum, before Common Metaphor Traps |
| 5 | PA-69 + PA-70 New Questions | +16 | After PA-48, before Tier 4 |

**Additional small edits:**
- Updated Mode 4 auditor B: added PA-70 (5 Qs -> 6 Qs)
- Updated Mode 4 auditor D: added PA-69 (6 Qs -> 7 Qs)
- Updated total question count: 57 -> 59 throughout (header warning, Mode 4 description, total line)
- Updated Red Flags: "8/8" -> "9/9" for Tier 5 unreliable auditor check

---

## Enrichment 1: Screenshot-Reading Protocol

**Source:** pa-sufficiency-audit BLOCKING 3
**What changed:** Added a new section "Screenshot-Reading Protocol (Pipeline Auditors)" after the Mode 4 task graph.

**Content:** Explains that pipeline auditors receive pre-captured PNG screenshots instead of live Playwright access. Workflow: read cold-look screenshots first, apply Cold Look Protocol, then read scroll-through sequences, apply Zone Sweep. Key point: screenshot-based auditing is MORE aligned with PA principles because it forces purely visual assessment.

**Why:** The PA skill's visual auditing protocol described Playwright-based capture, but /build-page auditors never use Playwright -- they read pre-captured screenshots via the Read tool. Without this section, auditors reading the skill encounter workflow instructions they cannot follow.

**Preservation checks:**
- Fresh-eyes principle: PRESERVED (no build context added)
- Language hard-block: PRESERVED (perceptual language instruction reinforced)
- One Rule: PRESERVED (react to what you SEE)

---

## Enrichment 2: Weaver Protocol (6-Section)

**Source:** pa-sufficiency-audit BLOCKING 1 + build-page SKILL.md lines 299-353
**What changed:** Replaced the existing 2-section Weaver protocol with a comprehensive 6-section spec. Added Weaver Calibration References.

**6 sections:**
1. PA-05 SCORE (0-4/4) -- 4 sub-criteria rated independently, averaged to 0.5 precision
2. TIER 5 SCORE (0-9/9) -- YES count with threshold labels (COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY)
3. TOP-5 ISSUES -- ranked by severity, each with: auditor source, question ID, severity, exact quote, scroll position, actionable feedback, affected channel + scale + transition type
4. FULL PER-QUESTION MATRIX -- separate file, all questions x all auditors, inter-auditor agreement, calibration targets
5. COMPOSITIONAL CRITERIA -- 6 mandatory checks (soul, voids, metaphor structural, rhythm, multi-coherence, scale coverage)
6. VERDICT -- 6-row matrix (SHIP / SHIP WITH RESERVATION / NOT FLAGSHIP / FIX CYCLE / REBUILD / ESCALATE)

**Added calibration references (for Weaver ONLY, not auditors):**
- Multi-coherence scale (0-6 simultaneous shifts -> FLAT/FUNCTIONAL/DESIGNED/COMPOSED/FLAGSHIP)
- Severity scale (1-2 / 3-5 / 6+ viewport-heights -> LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC)
- Metaphor expression spectrum (STRUCTURAL > ATMOSPHERIC > LABELED > ANNOUNCED)

**Why:** The PA skill and build-page defined DIFFERENT weaver protocols. PA skill had 2 sections; build-page had 6. Making PA skill authoritative eliminates fragmentation. Build-page can now reference "follow the PA skill's weaver protocol" instead of duplicating.

**Preservation checks:**
- Calibration tables go to Weaver ONLY, NOT to auditors
- Fresh-eyes for auditors: PRESERVED
- Verdict matrix: PRESERVED (same thresholds as before)

---

## Enrichment 3: Tier 5 Question Detail Merge

**Source:** pa-sufficiency-audit BLOCKING 2 + `design-system/pipeline/flagship-pa-questions.md`
**What changed:** Replaced the compact table of 9 Tier 5 questions with full per-question blocks including:
- Full question text
- Detection target with richer context (e.g., PA-60 now says "Middle pages have 0-1; Flagship needs >= 5 distributed across all scroll thirds")
- Detailed scoring rubric (YES/NO criteria with specific thresholds)
- Explicit auditor assignment per question
- Auditor Assignment Summary table at end of section

**Why:** The separate `flagship-pa-questions.md` file had MORE DETAILED scoring criteria than the PA skill. Auditors reading only the PA skill got less detailed guidance. Merging eliminates dual-source ambiguity. The separate file can now be deprecated.

**Question count:** Still 9 Tier 5 (PA-60 through PA-68). No questions added or removed.

**Scoring thresholds:** All remain /9 throughout (already correct).

---

## Enrichment 4: TC-Aware Auditing Guidance

**Source:** pa-sufficiency-audit Recommendation 3 + pa-metacognitive Section 1
**What changed:** Added two new subsections after the Metaphor Expression Spectrum:

**4a. "Fresh-Eyes Detection"** (~10 lines): A 3-step test for detecting metaphor quality WITHOUT knowing the intended metaphor. Mentally remove all text -> look at visual structure -> classify as STRUCTURAL/ATMOSPHERIC/LABELED/ANNOUNCED. Directly informs PA-44 and PA-68.

**4b. "Detecting Principled vs Ad-Hoc Composition"** (~25 lines): Vocabulary for distinguishing compositions derived from a unifying organizational principle vs ad-hoc assembly. Principled signatures: visual decisions agree, organizing logic inferrable, transitions feel like chapters, components adapt to zones. Ad-hoc signatures: contradictions, no inferrable logic, arbitrary transitions, static components. NOT a separate question -- it's a lens for PA-03, PA-05a, PA-65.

**4c. "Content-Form Coupling Detection"** (~4 lines): Brief guidance on detecting whether visual density matches analytical density of content.

**Why:** Without this, auditors lacked vocabulary to distinguish the pipeline's core value proposition (principled composition from a systematic principle) from generic competence. Both pa-sufficiency-audit and pa-metacognitive identified this as a SIGNIFICANT gap.

**Preservation checks:**
- ZERO TC knowledge shared (no mention of TC, metaphor names, or build process)
- ZERO violation of fresh-eyes (guidance is about WHAT TO LOOK FOR, not WHAT TO EXPECT)
- All language is perceptual ("visual decisions agree," "components adapt")
- Explicitly stated: "You do NOT need to name the principle"

---

## Enrichment 5: PA-69 + PA-70

**Source:** pa-sufficiency-audit Question Gap Analysis + pa-metacognitive Section 4.1
**What changed:** Added 2 new questions in a "Pipeline Integration" subsection after Tier 3 Adversarial, before Tier 4.

**PA-69: Multi-Coherence Dynamic Range** (Tier 2, Auditor D: Flow+Pacing)
- "Pick any two section transitions. Count how many visual properties change at each..."
- Detects whether boundaries have VARIED intensity or uniform intensity
- Scoring: YES = different transition weights correlating with content importance; NO = all transitions identical or random
- Assigned to Auditor D (already handles PA-34, PA-62 -- transition questions)

**PA-70: Content-Form Coupling** (Tier 2, Auditor B: Readability+Typography)
- "Compare the densest analytical section to the lightest overview section..."
- Detects whether visual treatment responds to content density
- Scoring: YES = visual density correlates with content density; NO = uniform treatment
- Assigned to Auditor B (lightest load at 5 Qs, now 6; content-form is a typography/density question)

**Why PA-69:** PA-62 partially covers transition variation but from "dramatic vs quiet" angle. PA-69 adds CONSISTENCY across all boundaries (do major boundaries feel different from minor ones?). Fills the multi-coherence evaluation framework gap where the framework existed but no PA question asked auditors to evaluate it.

**Why PA-70:** No existing question detected content-form coupling -- TC's core principle. A page could pass all 57 previous questions while applying uniform visual treatment to wildly different content sections.

**Classification:** Added as Tier 2 (Standard) rather than Tier 5 to avoid threshold recalibration. They detect quality issues regardless of tier classification.

**Updated auditor assignments:**
- Auditor B: PA-02, 06, 07, 08, 29, **70** [6 Qs, was 5]
- Auditor D: PA-12, 13, 34, 35, 36, **69** + T5: PA-62 [7 Qs, was 6]

---

## What Was NOT Changed

Per anti-failure guardrails, these were explicitly preserved:

1. **Fresh-eyes principle** (lines 46-48): Unchanged. Auditors receive ONLY screenshots and PA questions.
2. **Audit optimization trap warning** (lines 5-43): Unchanged. Prominently placed at top.
3. **One Rule + Three Laws** (lines 52-73): Unchanged.
4. **PA-05 sub-criteria definitions** (lines 88-133): Unchanged.
5. **Quantitative guardrails** (lines 420-493): Unchanged.
6. **Severity calibration** (lines 153-165): Unchanged.
7. **Team roles CAN/CANNOT** (lines 844-873): Unchanged.
8. **Language hard-block** (lines 858-860): Unchanged.
9. **Information isolation** (lines 896-904): Unchanged.
10. **Mode 1-3 definitions** (lines 498-531): Unchanged.

---

## Verification

### Question Count
- Tier 1: 5 (PA-01 through PA-05)
- Tier 2 Standard: 33 (PA-06 through PA-45, excluding Tier 5)
- Pipeline Integration: 2 (PA-69, PA-70)
- Tier 3: 10 (PA-21 through PA-28, PA-46 through PA-48)
- Tier 4: 4 (PA-50 through PA-53)
- **Standard total: 50** (was 48)
- Tier 5: 9 (PA-60 through PA-68)
- **Grand total: 59** (was 57)

Note: PA-49 intentionally skipped (no question with that ID exists). PA-54 through PA-59 also do not exist.

### Auditor Load After Changes
| Auditor | Before | After | Change |
|---------|--------|-------|--------|
| A (Impression+Emotion) | 9 | 9 | -- |
| B (Readability+Typography) | 5 | 6 | +PA-70 |
| C (Spatial+Proportion) | 13 | 13 | -- |
| D (Flow+Pacing) | 6 | 7 | +PA-69 |
| E (Grid+Layout) | 6 | 6 | -- |
| F (Consistency+Rhythm) | 6 | 6 | -- |
| G (Metaphor+Ideology) | 4 | 4 | -- |
| H (Responsive) | 5 | 5 | -- |
| I (Adversarial) | 4 | 4 | -- |

### File Size
- Before: 987 lines
- After: 1,208 lines
- Delta: +221 lines (target was ~187; overshoot from richer Tier 5 format)
