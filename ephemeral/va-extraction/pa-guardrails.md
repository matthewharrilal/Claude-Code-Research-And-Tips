# PA GUARDRAILS — Anti-Patterns, Quality Bars, Scoring Thresholds
## Pipeline v3 Layer 7 — Guardrails Reference
Date: 2026-02-24
Status: AUTHORITATIVE — split from artifact-pa-protocol-MONOLITHIC.md
Split: Contains guardrails ONLY. Anti-patterns, quality bars, scoring thresholds, PA-05 cross-validation requirements, auditor constraints. Provided to auditors alongside pa-questions.md.

---

## 1. EVIDENCE FORMAT REQUIREMENT

**Every PA question answer MUST follow this format:**

> **ANSWER FORMAT:** YES / NO / CONDITIONAL + for each finding: [screenshot reference, e.g., `1440/scroll-03.png`] + [1-sentence description of what you see]

This applies to ALL 69 questions across ALL 9 auditors (A-I). Evidence is a STRUCTURAL part of the answer, not optional. Answers without screenshot references are INCOMPLETE.

---

## 2. COMPLETION MANIFEST REQUIREMENT

Each auditor's report MUST include a **completion table** as its FINAL section:

```
## Completion Manifest — Auditor [LETTER]
| Question ID | Answered | Evidence Screenshot(s) |
|-------------|----------|----------------------|
| PA-XX       | YES      | 1440/scroll-02.png   |
| PA-YY       | YES      | 768/cold-look.png    |
| ...         | ...      | ...                  |
```

---

## 3. ASSESSMENT LANGUAGE CONSTRAINTS

Assessment is purely VISUAL. Describe what you SEE using perceptual language:
- YES: "The background shifts from warm cream to cooler gray"
- NO: "background-color changes from #FEF9F5 to #F0EBE3"

Use perceptual language, not CSS language. Do not use judgment language — describe evidence.

---

## 4. PA-05 CROSS-VALIDATION — AUDITOR INSTRUCTIONS

If you are a cross-validator for a PA-05 sub-criterion (F validates DESIGNED, G validates COHERENT, C validates PROPORTIONATE, B validates POLISHED), add a SECONDARY assessment at the END of your report:

```
## PA-05 Cross-Validation — [SUB-CRITERION NAME]
Assessment: PASS / CONDITIONAL PASS / FAIL
Evidence: [1-2 sentences citing specific screenshots]
```

You do NOT see Auditor A's scores. This is a blind cross-validation.

---

## 5. TIER 1 EQUIVALENT QUESTIONS

PA-17 (visual rhythm) and PA-41 (pattern repetition without variation) are TIER 1 EQUIVALENT. FAIL on either = verdict cannot exceed "YES WITH RESERVATIONS."

---

## 6. TIER 5 PROVISIONAL SCORING NOTE

Tier 5 scoring thresholds (8-9 = COMPOSED, 6-7 = APPROACHING, etc.) are PROVISIONAL with N=1 validation (derived from compositional intelligence stack theory, not from observed Flagship artifacts). Treat these thresholds as hypotheses until at least N=3 data points exist. Boundary cases (e.g., exactly 6 or exactly 8) should be reported with the caveat "threshold is provisional."

---

## 7. PA-ASSESSED ANTI-PATTERNS

Some anti-patterns cannot be detected programmatically. They require the PA auditor's perceptual judgment:

| AP | Anti-Pattern | What It Detects | PA Questions That Catch It |
|----|-------------|-----------------|---------------------------|
| AP-02 | COLOR ZONE CONFLICT | Hierarchy DISAGREEMENT between color zones | PA-18 (color family), PA-55 (zone differences) |
| AP-03 | TRANSITION MONOTONY | All zones use identical dividers | PA-17 (rhythm), PA-69 (transition variation), PA-62 (Tier 5) |
| AP-05 | SPACING FLAT-LINE | Density arc compresses uniformly | PA-69 (transition variation), PA-66 (negative space variety) |
| AP-06 | CHANNEL ISOLATION | 6 channels shift not at same boundaries | PA-69 (transition properties), PA-61 (multi-voice) |
| AP-07 | METAPHOR BLEED | Vocabulary leaks across zone boundaries | PA-44 (metaphor persistence), PA-68 (metaphor coverage) |
| AP-08 | COMPONENT ORPHAN | Component styled for wrong zone | PA-63 (fractal zoom), PA-19 (different website element) |
| AP-12 | RESTRAINT EROSION | Additions erode deliberate absences | PA-64 (restraint as expression) |
| AP-13 | BOOKEND ASYMMETRY | Header/footer echo breaks in revision | PA-13 (clear ending), PA-24 (system coherence) |

---

## 8. REVISION DEGRADATION WARNINGS

Fix cycles can DEGRADE composition. Watch for:

| Warning | What Degrades |
|---------|--------------|
| Multi-channel encoding decouples | Fix to one channel breaks alignment with others |
| Density arcs flatten | Individual zone correction breaks overall arc |
| Bookending symmetry breaks | Modifying one end breaks header/footer echo |
| Component-context coupling breaks | CSS changes disconnect components from zones |
| Restraint coherence degrades | Changing mechanisms shifts what "restraint" means |

---

## 9. S-09 STACKING CHECK (MANDATORY at every section boundary)

> Total boundary gap = section bottom padding + divider margins + divider height + next section top padding
> <= 120px: PASS | > 120px: VOID-RISK | > 200px: CATASTROPHIC VOID

---

## 10. CROSS-VIEWPORT COMPARISON METHOD

For questions requiring multi-viewport evidence (PA-22, PA-23, PA-46):
1. Review 1440px screenshots first
2. Review 768px screenshots
3. Compare observations side-by-side
4. Check 1024px as intermediate reference point
5. Document evidence from EACH viewport separately before drawing conclusions

---

## 11. FRESH-EYES PRINCIPLE (NON-NEGOTIABLE)

**PA auditors MUST be context-starved.** Do NOT provide:
- Mechanism counts
- Pattern names
- Build plan details
- Prior experiment results
- Tier 5 expected scores
- Compositional stack theory

If the auditor knows "this should have 12 mechanisms," they will see 12 mechanisms everywhere.

**Zero context = genuine first impressions.**

The auditor receives ONLY:
1. The rendered page (saved screenshots)
2. The PA questions (pa-questions.md)
3. The PA guardrails (this file)
4. Nothing else

### 11.1 The One Rule

> "React to what you see before you check what you know."

### 11.2 The Three Laws

1. The answer must require a screenshot (not answerable from source code alone)
2. The answer must be describable in plain language (no CSS vocabulary)
3. A non-designer must be able to validate the answer

---

*End of PA Guardrails artifact. Split from artifact-pa-protocol-MONOLITHIC.md.*
