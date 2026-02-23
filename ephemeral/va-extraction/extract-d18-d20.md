# Extraction: Diagrams 18, 19, 20

**Source:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pipeline-v3-research/VISUAL-ARCHITECTURE.md`
**Lines:** 1333-1567
**Extractor:** Diagrams 18-20 agent
**Date:** 2026-02-23

---

## DIAGRAM 18: KNOWLEDGE SURVIVAL PREDICTION (from A4)
### Source lines: 1333-1393

---

### ITEM 1
- **Diagram:** 18
- **Line range:** 1333
- **Type:** FILE_REF
- **Exact text:** "KNOWLEDGE SURVIVAL PREDICTION (from A4)"
- **Actionable implication:** This diagram's content originates from report A4 (Knowledge Flow Cluster Audit); any pipeline artifact referencing knowledge survival must trace provenance to A4.

### ITEM 2
- **Diagram:** 18
- **Line range:** 1337-1338
- **Type:** DECISION
- **Exact text:** "THE PIPELINE PREDICTS ITS OWN FAILURE MODES  Progressive incarnation (43) + Lost knowledge (44) = complete theory"
- **Actionable implication:** The pipeline must incorporate both Report 43 (progressive incarnation) and Report 44 (lost knowledge) as a unified theory of what survives and what dies during compression.

### ITEM 3
- **Diagram:** 18
- **Line range:** 1342-1344
- **Type:** DECISION
- **Exact text:** "WHAT SURVIVES (Report 43): Things that can become MORE CONCRETE at each level"
- **Actionable implication:** The pipeline must identify and prioritize knowledge items that can be progressively concretized (observation -> prohibition -> world-property -> CSS token -> pixels).

### ITEM 4
- **Diagram:** 18
- **Line range:** 1342-1344
- **Type:** DECISION
- **Exact text:** "WHAT DIES (Report 44): Things that exist only as RELATIONSHIPS among values"
- **Actionable implication:** The pipeline must have a specific mechanism to preserve relational knowledge (judgment calibration, perceptual ranges) that cannot be reduced to single CSS values.

### ITEM 5
- **Diagram:** 18
- **Line range:** 1346-1357
- **Type:** PROCESS
- **Exact text:** "border-radius: 0  observation → prohib → world-property → CSS token → pixels  Each level: restated in the MEDIUM of the next level  S(x) = 1/(1+C(x))  C(x) = 0 → survives"
- **Actionable implication:** Knowledge with zero compositional complexity (C(x) = 0) survives compression because it can be restated concretely at each pipeline level; the pipeline must encode such items as direct CSS tokens.

### ITEM 6
- **Diagram:** 18
- **Line range:** 1347-1357
- **Type:** VALUE
- **Exact text:** "Judgment calibration: '15 RGB = subtle, 50 RGB = dramatic'  Cannot point to ONE CSS value and say 'this IS judgment calibration'  It's a PATTERN of choices across the whole page  C(x) > 0 → dies"
- **Actionable implication:** Judgment calibration (relational knowledge like "15 RGB = subtle, 50 RGB = dramatic") has compositional complexity > 0 and will die in compression; the pipeline must transmit calibration as explicit range tables, not as single threshold values.

### ITEM 7
- **Diagram:** 18
- **Line range:** 1356-1357
- **Type:** THRESHOLD
- **Exact text:** "S(x) = 1/(1+C(x))  C(x) = 0 → survives  C(x) > 0 → dies"
- **Actionable implication:** The survival function S(x) = 1/(1+C(x)) must be used as a predictor: items with C(x) = 0 (zero compositional complexity) survive; items with C(x) > 0 die. Pipeline must explicitly handle both categories differently.

### ITEM 8
- **Diagram:** 18
- **Line range:** 1365-1373
- **Type:** WARNING
- **Exact text:** "Pages that are TECHNICALLY CORRECT but CALIBRATIONALLY FLAT  = The Flagship experiment failure mode  All gates passed.  PA-05 1.5/4.  Values survived compression.  Relationships did not.  Builder used 15 RGB EVERYWHERE because 15 passes the gate.  Without calibration, 'subtle' and 'dramatic' collapse to the same minimum-viable value."
- **Actionable implication:** The pipeline must prevent "calibrationally flat" output by ensuring builders receive calibration ranges (not just minimums); using the same value everywhere (e.g., 15 RGB for all deltas) must be flagged as a gate failure.

### ITEM 9
- **Diagram:** 18
- **Line range:** 1371
- **Type:** THRESHOLD
- **Exact text:** "Builder used 15 RGB EVERYWHERE because 15 passes the gate."
- **Actionable implication:** A gate that checks only for >=15 RGB is insufficient; the gate must also verify RANGE/VARIANCE across the page -- not just that each individual delta meets the minimum.

### ITEM 10
- **Diagram:** 18
- **Line range:** 1372-1373
- **Type:** WARNING
- **Exact text:** "Without calibration, 'subtle' and 'dramatic' collapse to the same minimum-viable value."
- **Actionable implication:** The builder recipe must include explicit calibration guidance distinguishing subtle (15-25 RGB) from moderate (25-40 RGB) from dramatic (40-60+ RGB) background deltas.

### ITEM 11
- **Diagram:** 18
- **Line range:** 1378-1379
- **Type:** DECISION
- **Exact text:** "Report 42 says: 'Synthesis, not compression' (SUCCESS story)  Report 44 says: '83:1 compression loss' (LOSS story)"
- **Actionable implication:** Both reports are correct at different scopes; pipeline v3 must acknowledge that assembly-level compression (10:1) is reasonable while total-research compression (83:1) is destructive.

### ITEM 12
- **Diagram:** 18
- **Line range:** 1381-1383
- **Type:** VALUE
- **Exact text:** "Both correct. Different scope.  42 measures: assembly inputs → prompt  (10:1, reasonable)  44 measures: total research → prompt   (83:1, brutal)"
- **Actionable implication:** The pipeline must track compression ratios at each stage; assembly-input-to-prompt at 10:1 is acceptable, but total-research-to-prompt at 83:1 signals catastrophic information loss.

### ITEM 13
- **Diagram:** 18
- **Line range:** 1382
- **Type:** THRESHOLD
- **Exact text:** "42 measures: assembly inputs → prompt  (10:1, reasonable)"
- **Actionable implication:** Assembly-to-prompt compression ratio of 10:1 is the acceptable benchmark; pipeline v3 should target this ratio or better.

### ITEM 14
- **Diagram:** 18
- **Line range:** 1383
- **Type:** THRESHOLD
- **Exact text:** "44 measures: total research → prompt   (83:1, brutal)"
- **Actionable implication:** Total-research-to-prompt compression ratio of 83:1 is identified as brutal/destructive; pipeline v3 must reduce this by encoding research into the template directly.

### ITEM 15
- **Diagram:** 18
- **Line range:** 1385-1387
- **Type:** DECISION
- **Exact text:** "Most loss happened BEFORE assembly. 5 categories of dead knowledge never reached assembly inputs. Assembly ≠ culprit. Pre-assembly compression is the real bottleneck."
- **Actionable implication:** Pipeline v3 must fix pre-assembly compression (the stage where 5 categories of knowledge die before ever reaching the prompt assembler), not just the assembly step itself.

### ITEM 16
- **Diagram:** 18
- **Line range:** 1385
- **Type:** VALUE
- **Exact text:** "5 categories of dead knowledge never reached assembly inputs."
- **Actionable implication:** The pipeline must identify and preserve these 5 categories of dead knowledge (not enumerated here -- must cross-reference Report 44/A4 for the full list).

### ITEM 17
- **Diagram:** 18
- **Line range:** 1389-1391
- **Type:** DECISION
- **Exact text:** "Pipeline v3 fix: 73-line template encoded ONCE from full research. No cascading compression. Template IS the research distillate, not a lossy summary of a lossy summary."
- **Actionable implication:** Pipeline v3 must use a 73-line template that encodes research knowledge directly (single-step distillation) rather than compressing through multiple intermediate stages.

### ITEM 18
- **Diagram:** 18
- **Line range:** 1389
- **Type:** VALUE
- **Exact text:** "73-line template encoded ONCE from full research."
- **Actionable implication:** The constraint template must be approximately 73 lines and must be derived in a single encoding pass from the full research corpus.

### ITEM 19
- **Diagram:** 18
- **Line range:** 1390-1391
- **Type:** RECOMMENDATION
- **Exact text:** "No cascading compression. Template IS the research distillate, not a lossy summary of a lossy summary."
- **Actionable implication:** The pipeline architecture must eliminate cascading compression (summary-of-summary chains); the template must be the ONE authoritative distillation.

---

## DIAGRAM 19: CCS ≠ PA-05 — TWO DIFFERENT QUALITY MEASURES (from A6)
### Source lines: 1397-1475

---

### ITEM 20
- **Diagram:** 19
- **Line range:** 1397
- **Type:** FILE_REF
- **Exact text:** "CCS ≠ PA-05 — TWO DIFFERENT QUALITY MEASURES (from A6)"
- **Actionable implication:** This diagram's content originates from report A6 (Flagship + Intervention Cluster Audit); quality measurement architecture must trace to A6.

### ITEM 21
- **Diagram:** 19
- **Line range:** 1401-1402
- **Type:** DECISION
- **Exact text:** "CCS (Compositional Coupling Score) ≠ PA-05 (Perceptual Audit Score)  They measure DIFFERENT properties. High in one ≠ high in other."
- **Actionable implication:** The pipeline must treat CCS and PA-05 as independent metrics; achieving a high score in one does not guarantee a high score in the other.

### ITEM 22
- **Diagram:** 19
- **Line range:** 1406
- **Type:** DECISION
- **Exact text:** "PA-05 measures: PERCEIVED design quality"
- **Actionable implication:** PA-05 is defined as measuring perceived design quality (not technical correctness); the PA protocol must evaluate from a perceptual/gestalt perspective.

### ITEM 23
- **Diagram:** 19
- **Line range:** 1408
- **Type:** THRESHOLD
- **Exact text:** "Does it look DESIGNED?"
- **Actionable implication:** The core PA-05 question is "Does it look DESIGNED?" -- this must remain the central evaluation criterion in any PA deployment.

### ITEM 24
- **Diagram:** 19
- **Line range:** 1409
- **Type:** VALUE
- **Exact text:** "Vocabulary, restraint, atmosphere"
- **Actionable implication:** PA-05 evaluates three perceptual dimensions: vocabulary (design language), restraint (selective deployment), and atmosphere (overall feel); all three must be assessed.

### ITEM 25
- **Diagram:** 19
- **Line range:** 1410
- **Type:** VALUE
- **Exact text:** "Content-form resonance"
- **Actionable implication:** PA-05 includes content-form resonance as an evaluation dimension; the PA protocol must check whether visual form serves and reinforces the content.

### ITEM 26
- **Diagram:** 19
- **Line range:** 1411
- **Type:** VALUE
- **Exact text:** "Overall gestalt impression"
- **Actionable implication:** PA-05 includes overall gestalt impression; auditors must evaluate the page holistically, not just component-by-component.

### ITEM 27
- **Diagram:** 19
- **Line range:** 1412
- **Type:** THRESHOLD
- **Exact text:** "1-4 scale (FLAT/ASSEMBLED/COMPOSED/DESIGNED)"
- **Actionable implication:** PA-05 uses a 1-4 scale with named registers: 1=FLAT, 2=ASSEMBLED, 3=COMPOSED, 4=DESIGNED; these exact labels must be used in PA scoring.

### ITEM 28
- **Diagram:** 19
- **Line range:** 1415
- **Type:** DECISION
- **Exact text:** "CCS measures: MECHANISM INTERDEPENDENCE"
- **Actionable implication:** CCS is defined as measuring mechanism interdependence (how much mechanisms depend on each other), distinct from perceived quality.

### ITEM 29
- **Diagram:** 19
- **Line range:** 1417
- **Type:** DECISION
- **Exact text:** "Do mechanisms INTERACT or just COEXIST?"
- **Actionable implication:** The core CCS question is whether mechanisms interact (coupled) or merely coexist (independent); this distinction drives the CCS measurement.

### ITEM 30
- **Diagram:** 19
- **Line range:** 1418-1419
- **Type:** PROCESS
- **Exact text:** "Measured by removal test (remove mechanism, does overall quality drop disproportionately?)"
- **Actionable implication:** CCS must be measured via removal test: remove each mechanism individually and check if overall quality drops disproportionately (more than the mechanism's proportional contribution).

### ITEM 31
- **Diagram:** 19
- **Line range:** 1420
- **Type:** THRESHOLD
- **Exact text:** "0.00-1.00 scale (0=independent, 1=fully coupled)"
- **Actionable implication:** CCS uses a 0.00-1.00 scale where 0 = fully independent mechanisms and 1 = fully coupled mechanisms; this scale must be used in any CCS measurement.

### ITEM 32
- **Diagram:** 19
- **Line range:** 1426-1429
- **Type:** VALUE
- **Exact text:** "MIDDLE EXPERIMENT:   PA-05 = 4/4 (DESIGNED)  CCS   ≈ 0.10-0.15 (Register 1)  → High quality through VOCABULARY alone  → Mechanisms independent, page still works"
- **Actionable implication:** The Middle experiment achieved PA-05 4/4 (DESIGNED) with CCS of only 0.10-0.15 (Register 1), proving that vocabulary alone can produce high perceived quality with low mechanism coupling.

### ITEM 33
- **Diagram:** 19
- **Line range:** 1431-1434
- **Type:** VALUE
- **Exact text:** "GAS TOWN:           PA-05 = 3.5/4 (COMPOSED)  CCS   ≈ 0.45-0.55 (Register 2.5)  → Higher coupling but lower perceived  → Calibration flat despite interaction"
- **Actionable implication:** Gas Town achieved PA-05 3.5/4 (COMPOSED) with CCS 0.45-0.55 (Register 2.5), showing that higher coupling does NOT automatically produce higher perceived quality -- calibration flatness can suppress PA-05 even with interacting mechanisms.

### ITEM 34
- **Diagram:** 19
- **Line range:** 1436-1439
- **Type:** VALUE
- **Exact text:** "CD-006:              PA-05 = 3.5/4 (COMPOSED)  CCS   ≈ 0.40 (Register 2)  → Same PA as Gas Town, lower CCS  → Both 'CEILING' quality, different paths"
- **Actionable implication:** CD-006 achieved PA-05 3.5/4 with CCS 0.40 (Register 2), same PA as Gas Town but lower CCS; multiple paths to CEILING quality exist (vocabulary-heavy vs coupling-heavy).

### ITEM 35
- **Diagram:** 19
- **Line range:** 1441-1443
- **Type:** VALUE
- **Exact text:** "FLAGSHIP (failed):   PA-05 = 1.5/4 (FLAT)  CCS   = N/A (no coupling to measure)  → Values present but not composed"
- **Actionable implication:** The failed Flagship scored PA-05 1.5/4 (FLAT) with CCS not measurable (no coupling); this is the failure mode where values are present but not composed -- the pipeline must prevent this.

### ITEM 36
- **Diagram:** 19
- **Line range:** 1449
- **Type:** DECISION
- **Exact text:** "PA-05 is the PRIMARY success metric (user-facing quality)"
- **Actionable implication:** PA-05 must be designated as the PRIMARY success metric in the pipeline; it measures the user-facing quality that ultimately matters.

### ITEM 37
- **Diagram:** 19
- **Line range:** 1450
- **Type:** DECISION
- **Exact text:** "CCS is a DIAGNOSTIC metric (explains WHY PA-05 is what it is)"
- **Actionable implication:** CCS must be designated as a DIAGNOSTIC metric (not primary); it explains the mechanism-level reasons behind PA-05 scores but is not the success criterion itself.

### ITEM 38
- **Diagram:** 19
- **Line range:** 1453
- **Type:** THRESHOLD
- **Exact text:** "Path to Flagship: PA-05 ≥ 3.5 AND CCS ≥ 0.55 AND unified metaphor"
- **Actionable implication:** The Flagship quality bar requires ALL THREE conditions: PA-05 >= 3.5, CCS >= 0.55, AND a unified metaphor; failing any one disqualifies Flagship status.

### ITEM 39
- **Diagram:** 19
- **Line range:** 1455
- **Type:** DECISION
- **Exact text:** "Middle can hit PA-05 4/4 at CCS 0.15 through vocabulary alone"
- **Actionable implication:** Middle-tier pages can achieve PA-05 4/4 (DESIGNED) with CCS as low as 0.15 through vocabulary mastery alone; vocabulary is the most efficient path to perceived quality.

### ITEM 40
- **Diagram:** 19
- **Line range:** 1456
- **Type:** DECISION
- **Exact text:** "But Flagship requires BOTH high PA-05 AND high CCS"
- **Actionable implication:** Flagship is distinguished from Ceiling/Middle by requiring BOTH perceived quality (PA-05) AND mechanism interdependence (CCS); vocabulary alone cannot reach Flagship.

### ITEM 41
- **Diagram:** 19
- **Line range:** 1457
- **Type:** THRESHOLD
- **Exact text:** "Vocabulary alone maxes out at Ceiling"
- **Actionable implication:** Vocabulary-only approaches have a hard ceiling at CEILING tier; any page relying solely on vocabulary mastery without compositional coupling cannot exceed Ceiling.

### ITEM 42
- **Diagram:** 19
- **Line range:** 1458
- **Type:** THRESHOLD
- **Exact text:** "Beyond Ceiling requires compositional fluency (CCS ≥ 0.55)"
- **Actionable implication:** Breaking through the Ceiling tier into Flagship requires CCS >= 0.55 (compositional fluency), which means mechanisms must be atmospherically coupled.

### ITEM 43
- **Diagram:** 19
- **Line range:** 1463-1465
- **Type:** THRESHOLD
- **Exact text:** "Register 1 (CCS 0.15-0.35): LOCAL coupling  → Adjacent mechanisms interact. Remove one, neighbors adjust.  → Middle tier. Achievable with recipe format."
- **Actionable implication:** Register 1 (CCS 0.15-0.35) is LOCAL coupling where adjacent mechanisms interact; this is the Middle tier and is achievable with recipe-format instructions.

### ITEM 44
- **Diagram:** 19
- **Line range:** 1467-1469
- **Type:** THRESHOLD
- **Exact text:** "Register 2 (CCS 0.35-0.55): STRUCTURAL coupling  → Mechanism chains span sections. Remove one, structure shows.  → Ceiling tier. Requires multi-coherence awareness."
- **Actionable implication:** Register 2 (CCS 0.35-0.55) is STRUCTURAL coupling where mechanism chains span sections; this is the Ceiling tier and requires multi-coherence awareness in the builder.

### ITEM 45
- **Diagram:** 19
- **Line range:** 1471-1473
- **Type:** THRESHOLD
- **Exact text:** "Register 3 (CCS 0.55-0.80): ATMOSPHERIC coupling  → Whole page is one composition. Remove anything, feel it.  → Flagship tier. NEVER ACHIEVED. Requires 3-pass + metaphor."
- **Actionable implication:** Register 3 (CCS 0.55-0.80) is ATMOSPHERIC coupling where the whole page is one composition; this is the Flagship tier, has NEVER been achieved, and requires 3-pass building plus a unified metaphor.

### ITEM 46
- **Diagram:** 19
- **Line range:** 1473
- **Type:** WARNING
- **Exact text:** "NEVER ACHIEVED. Requires 3-pass + metaphor."
- **Actionable implication:** Register 3 / Flagship-tier atmospheric coupling has NEVER been achieved in any experiment; the pipeline must include 3-pass building and metaphor integration to even attempt this level.

### ITEM 47
- **Diagram:** 19
- **Line range:** 1465
- **Type:** RECOMMENDATION
- **Exact text:** "Achievable with recipe format."
- **Actionable implication:** Register 1 (Middle tier) is achievable with recipe-format builder instructions; the builder recipe format is sufficient for this quality level.

### ITEM 48
- **Diagram:** 19
- **Line range:** 1469
- **Type:** RECOMMENDATION
- **Exact text:** "Requires multi-coherence awareness."
- **Actionable implication:** Register 2 (Ceiling tier) requires the builder to have multi-coherence awareness -- understanding how mechanisms across sections relate; builder instructions must include multi-coherence guidance.

---

## DIAGRAM 20: APPLIED vs COMPOSED MODE — THE PRECISE CSS DISTINCTION (from B8)
### Source lines: 1479-1564

---

### ITEM 49
- **Diagram:** 20
- **Line range:** 1479
- **Type:** FILE_REF
- **Exact text:** "APPLIED vs COMPOSED MODE — THE PRECISE CSS DISTINCTION (from B8)"
- **Actionable implication:** This diagram's content originates from report B8 (Wrong Mode Analysis); any pipeline artifact referencing applied vs composed mode must trace to B8.

### ITEM 50
- **Diagram:** 20
- **Line range:** 1483-1484
- **Type:** DECISION
- **Exact text:** "THE MODE DISTINCTION: Swiss Army Knife vs Orchestra  'The content drives the mechanism choice. The metaphor does not.'"
- **Actionable implication:** Applied mode = Swiss Army Knife (content drives mechanism choice); Composed mode = Orchestra (metaphor drives mechanism choice). This distinction must be embedded in builder instructions.

### ITEM 51
- **Diagram:** 20
- **Line range:** 1488-1493
- **Type:** DECISION
- **Exact text:** "APPLIED MODE (Gas Town):  Swiss Army Knife  Each mechanism solves a LOCAL content problem"
- **Actionable implication:** Applied mode is defined as each mechanism solving a local content problem independently; Gas Town is the reference example of this mode.

### ITEM 52
- **Diagram:** 20
- **Line range:** 1488, 1493
- **Type:** DECISION
- **Exact text:** "COMPOSED MODE (Flagship target):  Orchestra  Each mechanism serves a GOVERNING LOGIC"
- **Actionable implication:** Composed mode is defined as each mechanism serving a governing logic (unified concept); this is the Flagship target and must be the pipeline's aspiration for Flagship-tier pages.

### ITEM 53
- **Diagram:** 20
- **Line range:** 1495-1496
- **Type:** PROCESS
- **Exact text:** "Q: 'What does THIS section need?'"
- **Actionable implication:** In Applied mode, the builder asks "What does THIS section need?" -- a local, section-by-section question. Pipeline must detect this as the Applied-mode signal.

### ITEM 54
- **Diagram:** 20
- **Line range:** 1495-1496
- **Type:** PROCESS
- **Exact text:** "Q: 'What does the page's CONCEPT need here?'"
- **Actionable implication:** In Composed mode, the builder asks "What does the page's CONCEPT need here?" -- a global, concept-driven question. Pipeline must instruct builders to ask this question at each section.

### ITEM 55
- **Diagram:** 20
- **Line range:** 1498-1499
- **Type:** VALUE
- **Exact text:** "Remove mechanism A: B is unchanged"
- **Actionable implication:** In Applied mode, removing mechanism A leaves mechanism B unchanged -- this is the removal test signature of Applied mode (low CCS).

### ITEM 56
- **Diagram:** 20
- **Line range:** 1498-1499
- **Type:** VALUE
- **Exact text:** "Remove mechanism A: B's meaning shifts"
- **Actionable implication:** In Composed mode, removing mechanism A causes mechanism B's meaning to shift -- this is the removal test signature of Composed mode (high CCS).

### ITEM 57
- **Diagram:** 20
- **Line range:** 1502
- **Type:** DECISION
- **Exact text:** "THE SMOKING GUN — CSS Custom Properties:"
- **Actionable implication:** CSS custom property naming is identified as the "smoking gun" indicator of Applied vs Composed mode; the pipeline must examine custom property names as a diagnostic.

### ITEM 58
- **Diagram:** 20
- **Line range:** 1507-1509
- **Type:** VALUE
- **Exact text:** "APPLIED (Gas Town):  --bg-z1: #FEF9F5;  --bg-z2: #F0EBE3;  --bg-z3: #E8E0D4;  --bg-z4: #F5F0E8;"
- **Actionable implication:** Applied mode names CSS custom properties by POSITION (z1, z2, z3, z4); this naming convention signals the builder is thinking in spatial terms, not conceptual terms.

### ITEM 59
- **Diagram:** 20
- **Line range:** 1507-1509
- **Type:** VALUE
- **Exact text:** "COMPOSED (hypothetical):  --dispatch-open: #FEF9F5;  --dispatch-tactical: #F0EBE3;  --dispatch-classified: #DDD4C4;  --dispatch-field: #F5F0E8;"
- **Actionable implication:** Composed mode names CSS custom properties by CONCEPT (dispatch-open, dispatch-tactical, dispatch-classified, dispatch-field); this naming convention signals the builder is thinking in metaphor terms.

### ITEM 60
- **Diagram:** 20
- **Line range:** 1512
- **Type:** DECISION
- **Exact text:** "Named by POSITION."
- **Actionable implication:** Position-based naming (--bg-z1, --bg-z2) is the Applied mode indicator; gate runner should check for this pattern as a diagnostic signal.

### ITEM 61
- **Diagram:** 20
- **Line range:** 1512
- **Type:** DECISION
- **Exact text:** "Named by CONCEPT."
- **Actionable implication:** Concept-based naming (--dispatch-open, --dispatch-classified) is the Composed mode indicator; gate runner should check for this pattern as a positive signal.

### ITEM 62
- **Diagram:** 20
- **Line range:** 1513
- **Type:** WARNING
- **Exact text:** "Name tells builder NOTHING about border/spacing/type."
- **Actionable implication:** Position-based names provide no design guidance to the builder -- they cannot infer border weight, spacing, or typography from "z1" vs "z3"; this limits compositional decisions.

### ITEM 63
- **Diagram:** 20
- **Line range:** 1513-1515
- **Type:** RECOMMENDATION
- **Exact text:** "Name PREDICTS other CSS: classified = heavier borders = tighter spacing = denser"
- **Actionable implication:** Concept-based names should PREDICT other CSS properties (e.g., "classified" predicts heavier borders, tighter spacing, denser typography); builder instructions must explain this predictive naming convention.

### ITEM 64
- **Diagram:** 20
- **Line range:** 1520-1521
- **Type:** VALUE
- **Exact text:** "APPLIED: Callouts styled identically across all zones  .callout { /* same everywhere */ }"
- **Actionable implication:** In Applied mode, components (like callouts) are styled identically regardless of zone context; this is a detectable pattern and a signal of Applied mode.

### ITEM 65
- **Diagram:** 20
- **Line range:** 1523-1526
- **Type:** VALUE
- **Exact text:** "COMPOSED: Callouts adapt to their zone context  .zone-1 .callout { padding: 20px 24px; }  /* generous */  .zone-3 .callout { padding: 12px 16px; }  /* compressed */  .zone-3 .callout { border-left-width: 5px; }  /* heavier */"
- **Actionable implication:** In Composed mode, components adapt to their zone context (e.g., generous padding in zone-1, compressed padding and heavier borders in zone-3); the gate runner must check for zone-modulated component styles.

### ITEM 66
- **Diagram:** 20
- **Line range:** 1524
- **Type:** THRESHOLD
- **Exact text:** ".zone-1 .callout { padding: 20px 24px; }  /* generous */"
- **Actionable implication:** Zone-1 (open/generous zone) callout padding example: 20px 24px; this is the reference value for generous zone styling.

### ITEM 67
- **Diagram:** 20
- **Line range:** 1525
- **Type:** THRESHOLD
- **Exact text:** ".zone-3 .callout { padding: 12px 16px; }  /* compressed */"
- **Actionable implication:** Zone-3 (compressed/dense zone) callout padding example: 12px 16px; this is the reference value for compressed zone styling.

### ITEM 68
- **Diagram:** 20
- **Line range:** 1526
- **Type:** THRESHOLD
- **Exact text:** ".zone-3 .callout { border-left-width: 5px; }  /* heavier */"
- **Actionable implication:** Zone-3 callout border example: 5px border-left-width (heavier than other zones); this demonstrates zone-contextual border weight variation.

### ITEM 69
- **Diagram:** 20
- **Line range:** 1529
- **Type:** PROCESS
- **Exact text:** "THE REMOVAL TEST (Gas Town):"
- **Actionable implication:** The removal test must be applied to actual builds to measure coupling; Gas Town is the reference case for demonstrating Applied-mode removal test results.

### ITEM 70
- **Diagram:** 20
- **Line range:** 1531-1535
- **Type:** VALUE
- **Exact text:** "Remove bento grid from Zone 2:  → Zone 3 callouts unchanged  → Zone 4 extension cards unchanged  → No other mechanism changes meaning  → CCS ≈ 0.25-0.35 (low coupling)"
- **Actionable implication:** Gas Town removal test: removing the bento grid from Zone 2 leaves all other zones unchanged, yielding CCS 0.25-0.35 (low coupling); this is the Applied-mode benchmark.

### ITEM 71
- **Diagram:** 20
- **Line range:** 1535
- **Type:** THRESHOLD
- **Exact text:** "CCS ≈ 0.25-0.35 (low coupling)"
- **Actionable implication:** CCS of 0.25-0.35 from the bento grid removal test confirms low (Applied-mode) coupling; values below 0.35 indicate mechanisms are independent.

### ITEM 72
- **Diagram:** 20
- **Line range:** 1537-1542
- **Type:** VALUE
- **Exact text:** "Remove zone backgrounds entirely:  → Typography progression still works  → Spacing compression still works  → Solid offset still reads as emphatic  → Backgrounds provide atmosphere but DON'T CHANGE other mechanisms' perceived meaning"
- **Actionable implication:** Gas Town's zone backgrounds provide atmosphere but don't change other mechanisms' perceived meaning; removing them leaves typography, spacing, and solid offset intact -- confirming Applied-mode independence.

### ITEM 73
- **Diagram:** 20
- **Line range:** 1547
- **Type:** DECISION
- **Exact text:** "B8's VERDICT: REAL. The distinction is operationally definable through 5 measurable CSS properties:"
- **Actionable implication:** The Applied vs Composed distinction is verified as REAL and operationally measurable (not just subjective); the pipeline must implement all 5 measurable properties as diagnostic checks.

### ITEM 74
- **Diagram:** 20
- **Line range:** 1550
- **Type:** PROCESS
- **Exact text:** "1. Custom property naming: by POSITION vs by CONCEPT"
- **Actionable implication:** Mode determinant 1: Check CSS custom property names -- position-based (--bg-z1) = Applied; concept-based (--dispatch-classified) = Composed. Gate runner must implement this check.

### ITEM 75
- **Diagram:** 20
- **Line range:** 1551
- **Type:** PROCESS
- **Exact text:** "2. Component zone-modulation: absent vs present"
- **Actionable implication:** Mode determinant 2: Check whether components are styled differently per zone -- absent = Applied; present = Composed. Gate runner must check for zone-specific component selectors.

### ITEM 76
- **Diagram:** 20
- **Line range:** 1552
- **Type:** PROCESS
- **Exact text:** "3. Layout choice driver: content-type vs metaphor"
- **Actionable implication:** Mode determinant 3: Determine whether layout choices are driven by content type (Applied) or by the page's governing metaphor (Composed). This is assessed qualitatively in PA.

### ITEM 77
- **Diagram:** 20
- **Line range:** 1553
- **Type:** THRESHOLD
- **Exact text:** "4. Removal test CCS: <0.35 vs >0.45"
- **Actionable implication:** Mode determinant 4: Removal test CCS below 0.35 = Applied mode; above 0.45 = Composed mode. The 0.35-0.45 range is the transition zone.

### ITEM 78
- **Diagram:** 20
- **Line range:** 1554
- **Type:** PROCESS
- **Exact text:** "5. Governing logic: absent vs articulable in 1 sentence"
- **Actionable implication:** Mode determinant 5: Can the page's governing logic be stated in one sentence? Absent = Applied; articulable = Composed. Builder must articulate this sentence before building begins.

### ITEM 79
- **Diagram:** 20
- **Line range:** 1556-1558
- **Type:** DECISION
- **Exact text:** "MODE IS SET AT BUILD START by the specification format:  Checklist → APPLIED mode (inevitable)  Recipe + disposition → COMPOSED mode (possible, not guaranteed)"
- **Actionable implication:** The specification format DETERMINES the mode: checklist format inevitably produces Applied mode; recipe + disposition format makes Composed mode possible (but not guaranteed). Pipeline MUST use recipe + disposition format for Flagship targets.

### ITEM 80
- **Diagram:** 20
- **Line range:** 1557
- **Type:** WARNING
- **Exact text:** "Checklist → APPLIED mode (inevitable)"
- **Actionable implication:** Using a checklist format for builder instructions inevitably produces Applied mode output; the pipeline must NEVER use checklist format for Flagship-tier pages.

### ITEM 81
- **Diagram:** 20
- **Line range:** 1558
- **Type:** RECOMMENDATION
- **Exact text:** "Recipe + disposition → COMPOSED mode (possible, not guaranteed)"
- **Actionable implication:** Recipe + disposition format creates the CONDITIONS for Composed mode but does not guarantee it; additional factors (Opus builder, 3-pass, metaphor) are also needed.

### ITEM 82
- **Diagram:** 20
- **Line range:** 1560-1562
- **Type:** PROCESS
- **Exact text:** "Pipeline v3 creates conditions for COMPOSED mode via: D-01 content-register reading + D-02 room perception + Recipe format + 80% creative authority + Opus builder"
- **Actionable implication:** Pipeline v3 must include ALL five conditions for Composed mode: D-01 content-register reading, D-02 room perception, recipe format, 80% creative authority, and Opus as the builder model.

### ITEM 83
- **Diagram:** 20
- **Line range:** 1561
- **Type:** DEPENDENCY
- **Exact text:** "D-01 content-register reading"
- **Actionable implication:** D-01 (content-register reading) is a prerequisite for Composed mode; the pipeline must include this dispositional instruction that has the builder read the content's register before making design decisions.

### ITEM 84
- **Diagram:** 20
- **Line range:** 1561
- **Type:** DEPENDENCY
- **Exact text:** "D-02 room perception"
- **Actionable implication:** D-02 (room perception) is a prerequisite for Composed mode; the pipeline must include this dispositional instruction that has the builder perceive the spatial "room" the page creates.

### ITEM 85
- **Diagram:** 20
- **Line range:** 1562
- **Type:** THRESHOLD
- **Exact text:** "80% creative authority"
- **Actionable implication:** The builder must have 80% creative authority (only 20% constrained by rules); this ratio is a prerequisite for Composed mode and must be maintained in the pipeline.

### ITEM 86
- **Diagram:** 20
- **Line range:** 1562
- **Type:** AGENT_ROLE
- **Exact text:** "Opus builder"
- **Actionable implication:** The builder agent must be Opus model (not Sonnet) for Flagship-tier / Composed mode pages; Opus is listed as a prerequisite condition for Composed mode.

---

## EXTRACTION SUMMARY

**Total items extracted:** 86

**By Diagram:**
- Diagram 18 (Knowledge Survival Prediction): 19 items (Items 1-19)
- Diagram 19 (CCS vs PA-05): 29 items (Items 20-48)
- Diagram 20 (Applied vs Composed Mode): 38 items (Items 49-86)

**By Type:**
- THRESHOLD: 18 items (7, 8, 9, 13, 14, 23, 27, 31, 38, 41, 42, 43, 44, 45, 66, 67, 68, 71, 77, 85) — note: some items have dual types
- DECISION: 20 items (2, 3, 4, 11, 15, 17, 21, 22, 28, 29, 36, 37, 39, 40, 50, 51, 52, 57, 60, 61, 73, 79)
- VALUE: 14 items (6, 12, 16, 18, 24, 25, 26, 32, 33, 34, 35, 55, 56, 58, 59, 64, 65, 70, 72)
- PROCESS: 10 items (5, 30, 53, 54, 69, 74, 75, 76, 78, 82)
- WARNING: 5 items (8, 10, 46, 62, 80)
- RECOMMENDATION: 5 items (19, 47, 48, 63, 81)
- FILE_REF: 3 items (1, 20, 49)
- DEPENDENCY: 2 items (83, 84)
- AGENT_ROLE: 1 item (86)

**Key Knowledge Items Individually Extracted:**
- Survival function S(x) = 1/(1+C(x)) with both branches (C=0 survives, C>0 dies): Items 5, 6, 7
- CCS vs PA-05 as independent metrics: Items 21, 22, 28, 36, 37
- All 4 experiment data points (Middle, Gas Town, CD-006, Flagship): Items 32, 33, 34, 35
- All 3 compositional registers with CCS ranges and CSS indicators: Items 43, 44, 45
- All 5 mode determinants: Items 74, 75, 76, 77, 78
- All 3 compositional modes (Applied/Composed/Composed-conditions): Items 51, 52, 79
- All Pipeline v3 Composed-mode prerequisites: Items 82, 83, 84, 85, 86
- Compression ratio benchmarks (10:1 acceptable, 83:1 destructive): Items 13, 14
- 73-line template specification: Items 17, 18
- Flagship threshold (PA-05 >= 3.5 AND CCS >= 0.55 AND unified metaphor): Item 38
