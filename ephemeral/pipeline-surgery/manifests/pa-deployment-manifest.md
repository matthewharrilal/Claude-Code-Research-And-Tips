# Semantic Manifest: pa-deployment.md
Source: ephemeral/va-extraction/pa-deployment.md (363 lines)
Checks: JUDGMENT ONLY -- automatable checks handled by verify-pipeline-structure.js

---

## Experiential Pass (Section 0)

1. Does the experiential directive read as a READER instruction or an ANALYST instruction? The pass should prime "attempting to use the page," not "evaluating the page." If you could swap it into a gate-runner prompt without changing the tone, it has drifted.

2. Is the visual verification principle ("say what you SEE, not what you KNOW") woven naturally into the directive, or does it feel bolted on as a separate rule? The bar chart example should feel like an organic illustration, not a bolted-on addendum.

3. Would a first-time auditor (who has never seen this pipeline) know exactly what to DO after reading Section 0.1? Test: could you hand this to someone with zero context and get a usable experiential pass back?

4. Does the contamination check (Section 0.4) create a testable standard? "Must NOT reference assigned question numbers" is clear -- but could an auditor still be analytically contaminated without using PA-XX labels?

## Auditor Assignments (Section 1)

5. Do the 9 auditor role labels (Impression+Emotion, Readability+Typography, etc.) accurately predict which questions they contain? If Auditor B is "Readability+Typography" but has PA-81 (information extraction), does the label mislead?

6. Does the cross-validation protocol (Section 1.3) maintain genuine independence? The instruction says cross-validators "do NOT see Auditor A's scores" -- but does the rest of the document accidentally leak expectations about what a DESIGNED page looks like?

7. Is the load balance across auditors reasonable for quality? D has 11 questions while F has 5. Does the heaviest-loaded auditor risk shallow answers?

## Screenshot Protocol (Section 2)

8. Does the screenshot validation gate (Section 2.3a) catch the failure modes it claims to catch? Specifically: would it detect the DPR bug that caused 2880px captures?

9. Is the auditor screenshot-reading protocol (Section 2.4) clear enough that an auditor would never attempt to open the HTML directly? The protocol says "CANNOT interact with the page" -- is the prohibition unambiguous?

## Fresh-Eyes Principle (Section 3)

10. Does the exclusion list (mechanism counts, pattern names, build plan details, etc.) cover all plausible contamination vectors? Is there anything an orchestrator might accidentally pass that would anchor the auditor?

11. Do the Three Laws (Section 3.2) work as a self-check an auditor could apply mid-report? "The answer must require a screenshot" is testable -- but would an auditor actually pause and verify this for each answer?
