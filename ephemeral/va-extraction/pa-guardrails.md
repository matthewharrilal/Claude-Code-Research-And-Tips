# PA GUARDRAILS — Evidence Format, Visual Verification, Cross-Viewport Method, Information Isolation
## Pipeline v3 Layer 7 — Guardrails Reference
Date: 2026-02-25
Status: AUTHORITATIVE — split from artifact-pa-protocol-MONOLITHIC.md
Split: Contains AUDITOR-FACING guardrails ONLY. Evidence format, completion manifest, assessment language, PA-05 cross-validation, cross-viewport method, fresh-eyes principle. Provided to auditors alongside pa-questions.md. Pipeline vocabulary (tiers, channels, mechanisms, anti-patterns, thresholds) has been moved to pa-guardrails-weaver.md (Weaver/Orchestrator only).

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
| Section              | Completed | Evidence                          |
|----------------------|-----------|-----------------------------------|
| Experiential Pass    | YES/NO    | ## 0. Experiential Pass present   |
| Question ID | Answered | Evidence Screenshot(s) |
|-------------|----------|----------------------|
| PA-XX       | YES      | 1440/scroll-02.png   |
| PA-YY       | YES      | 768/cold-look.png    |
| ...         | ...      | ...                  |
```

The Experiential Pass row is MANDATORY. A report without `## 0. Experiential Pass` as its
first analytical section is INCOMPLETE. See pa-deployment.md Section 0 for the full directive.

---

## 3. ASSESSMENT LANGUAGE CONSTRAINTS

Assessment is purely VISUAL. Describe what you SEE using perceptual language:
- YES: "The background shifts from warm cream to cooler gray"
- NO: "background-color changes from #FEF9F5 to #F0EBE3"

Use perceptual language, not CSS language. Do not use judgment language — describe evidence.

### 3.1 Visual Verification, Not Code Interpretation

When you encounter text in a screenshot, you must LOOK AT IT as rendered pixels — not
decode it from your knowledge of what the HTML says.

- **CODE INTERPRETATION (WRONG):** You see a dark bar chart. You infer from context that
  the label says "Level 3: Simple Loops (Basic Ralph)." You report the text as readable
  because you know what it says.
- **VISUAL VERIFICATION (RIGHT):** You look at the rendered screenshot. You see cream-colored
  marks on a tan bar against a dark background. You try to read those marks AS THEY APPEAR.
  You can make out "L" and "3" and something that might be "Simple" but the rest dissolves
  into the bar. You report: CANNOT READ.

**THE RULE:** If you cannot read the text FROM THE SCREENSHOT ALONE — without inferring
from structure, context, HTML source, or what "makes sense" — then the text is illegible.
Report it. Say what you SEE, not what you KNOW it says. A human visitor has never seen
the HTML. They have only the pixels. Judge readability from the pixels.

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

## 5. CROSS-VIEWPORT COMPARISON METHOD

For questions requiring multi-viewport evidence (PA-22, PA-23, PA-46):
1. Review 1440px screenshots first
2. Review 768px screenshots
3. Compare observations side-by-side
4. Check 1024px as intermediate reference point
5. Document evidence from EACH viewport separately before drawing conclusions

---

## 6. FRESH-EYES PRINCIPLE (NON-NEGOTIABLE)

You receive only screenshots, PA questions, and this guardrails file. No additional context about the design system, build process, or scoring methodology is provided. This is intentional.

**Your job is to react to what you see.** You are a first-time viewer of this page. Describe what you observe, what works, and what fails -- using only the evidence in the screenshots.

If you find yourself thinking "this was probably meant to do X" -- stop. Report what you SEE, not what you infer about intent.

### 6.1 The One Rule

> "React to what you see before you check what you know."

### 6.2 The Three Laws

1. The answer must require a screenshot (not answerable from source code alone)
2. The answer must be describable in plain language (no CSS vocabulary)
3. A non-designer must be able to validate the answer

---

*End of PA Guardrails artifact. Split from artifact-pa-protocol-MONOLITHIC.md.*
