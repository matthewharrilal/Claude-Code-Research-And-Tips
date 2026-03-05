# SCAN-D: Cross-Reference Against Operational Files 17-20 + AUXILIARY-EXECUTION-WRAPPER

**Scanner:** Scanner D
**Task:** #4
**Date:** 2026-02-17
**Sources scanned:**
- `17-pa-operational-scaffolding.md` (1,114 lines)
- `18-structural-anti-skimming-audit.md` (659 lines)
- `19-soundness-audit.md` (646 lines)
- `20-invocation-guarantee-audit.md` (897 lines)
- `AUXILIARY-EXECUTION-WRAPPER.md` (399 lines)

**Reference prompt:** `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (695 lines)

---

## METHODOLOGY

For each source file, I identified every concrete specification, rule, threshold, formula, verification method, or requirement that is either:
(a) ABSENT from the FINAL prompt entirely, or
(b) PRESENT but in an incomplete, inconsistent, or unpropagated form.

Each finding includes: source quote, classification, exact insertable text, and placement in the FINAL prompt.

---

## SOURCE FILE 17: PA Operational Scaffolding

### FINDING 17-01 -- Auditor Assignment Discrepancy [CRITICAL]

**Source quote (Section 1, Assignment Table):**
```
A: Impression+Emotion | PA-01, PA-04, PA-05, PA-18, PA-19, PA-20, PA-45 | 7 Qs
```

**What the FINAL prompt says (C4):**
```
A: PA-01,03,04,05,18,19,20,45  (Identity+First Impression+Color, 8 Qs)
```

**Gap:** File 17 assigns PA-04 and PA-45 to Auditor A (7 questions). FINAL prompt assigns PA-01, 03, 04, 05, 18, 19, 20, 45 (8 questions). The discrepancy is that File 17 does NOT include PA-03 in Auditor A's set, and has 7 questions vs 8. Additionally, File 17 assigns PA-04 AND omits PA-03 while the FINAL prompt includes PA-03 and retains PA-04. If File 17 is authoritative (it's the detailed operational scaffold), Auditor A should NOT have PA-03.

**Insertable text:** Review C4 assignment for Auditor A. If PA-03 belongs to Auditor A, it must also appear in File 17. If not, remove PA-03 from Auditor A and verify it is assigned to another auditor. Currently PA-03 appears in no other auditor's list in C4 -- it may be unassigned.

**Placement:** C4 auditor assignment table, Auditor A row.

---

### FINDING 17-02 -- ADV Auditor Questions Discrepancy [CRITICAL]

**Source quote (File 17, Section 1, Table):**
```
ADV: Adversarial | PA-26, PA-27, PA-28, PA-48 | 4 Qs
```

**What the FINAL prompt says (C4):**
```
ADV: PA-24,25,26,27,28,48      (Adversarial+Cross-Page, 6 Qs)
```

**Gap:** File 17 assigns the ADV auditor 4 questions (PA-26, 27, 28, 48). The FINAL prompt assigns 6 questions (PA-24, 25, 26, 27, 28, 48). PA-24 and PA-25 are present in the FINAL prompt's ADV assignment but NOT in File 17's assignment. This creates an unresolved operational mismatch. If auditors receive File 17 as their instruction sheet, PA-24 and PA-25 will be uncovered. PA-25 is missing from ALL auditor assignments in File 17.

**Insertable text:** Add to C4 a note: "ADV auditor assignment is the FINAL prompt (6 Qs: PA-24,25,26,27,28,48). File 17's ADV assignment (4 Qs) is superseded by C4. Ensure PA-24 and PA-25 are covered." Alternatively, update File 17 and propagate to C4.

**Placement:** C4, after ADV row; or as a footnote to the assignment table.

---

### FINDING 17-03 -- PA-05c Sub-Dimension Horizontal Proportion Threshold Missing [CRITICAL]

**Source quote (File 17, Auditor A, PA-05c):**
```
3a Horizontal Proportion: Does container width use viewport effectively?
PASS: 65-80%. FAIL: <65% or >85%.
```

**What the FINAL prompt contains:** B2 soul rules and S-01 cover container width (940-1100px), but the PA-05c sub-dimension operational definition with its three sub-sub-criteria (3a Horizontal, 3b Vertical, 3c Breathing) and the specific pass/fail thresholds are NOT present in the FINAL prompt.

**Gap:** File 17 provides the fully operationalized 3-part PA-05c rubric. The FINAL prompt's B9 (PA Integration Routing) says "PA-05 scoring: All auditors contribute. 4 sub-criteria: Designed, Coherent, Proportionate, Polished" but does NOT enumerate the 3 sub-dimensions of Proportionate (3a, 3b, 3c) or their thresholds. This means auditors receiving only the FINAL prompt cannot score PA-05c correctly.

**Insertable text (insert in B9 or C4):**
```
PA-05c PROPORTIONATE -- 3 sub-dimensions, ALL must pass:
  3a Horizontal: container uses 65-80% of viewport. FAIL: <65% or >85%.
  3b Vertical: every scroll third has >= 1 designed moment. FAIL: any third empty.
  3c Breathing: negative space is designed (silence in music), not abandoned.
ALL THREE sub-dimensions must PASS for PA-05c to PASS.
```

**Placement:** B9 (PA Integration Routing), after "4 sub-criteria: Designed, Coherent, Proportionate, Polished."

---

### FINDING 17-04 -- PA-36 Climax Position Targets Missing [IMPORTANT]

**Source quote (File 17, Auditor D, PA-36):**
```
Flagship target: climax at 40-55% scroll, with additional moments at 15% and 85%.
If climax is at <20% scroll: FRONT-LOADED finding (anti-pattern from ceiling).
```

**What the FINAL prompt says:** C-09 says ">= 1 designed moment per scroll quartile" and A8 says "Act 2 (15-35%): first delight." Neither specifies the Flagship-specific climax position target (40-55% scroll) or the front-loaded anti-pattern threshold (<20% = FAIL).

**Insertable text (insert in B3 after C-09):**
```
C-09b. Climax position (Flagship): Peak density moment at 40-55% scroll depth.
        Climax at <20% = FRONT-LOADED anti-pattern. FAIL.
        Additional designed moments at ~15% and ~85% scroll.
```

**Placement:** B3, after C-09.

---

### FINDING 17-05 -- PA-47 Novelty Sustainability Target Missing [IMPORTANT]

**Source quote (File 17, Auditor H, PA-47):**
```
Ceiling experiment: novelty died at 30% scroll. Flagship target: novelty sustained past 60%.
```

**What the FINAL prompt says:** A8 describes a 5-act reader journey but does not specify a novelty sustainability threshold. No rule enforces "visual novelty must be sustained past 60% scroll."

**Insertable text (insert in B3 or B10 self-check):**
```
C-09c. Novelty sustainability: Visual novelty must be sustained past 60% scroll depth.
        Verify: scroll through at reading speed; note scroll % where visual variation stops.
        60%+ = PASS. Below 60% = FAIL.
```

**Placement:** B3 after C-09b, or as a self-check item in B10.

---

### FINDING 17-06 -- PA-44 Metaphor Scoring Scale Missing [CRITICAL]

**Source quote (File 17, Auditor G, PA-44):**
```
Scoring: 0-20% = NO metaphor. 20-50% = ANNOUNCED. 50-80% = ATMOSPHERIC. 80-100% = STRUCTURAL.
Ceiling experiment scored 40% = ANNOUNCED. Flagship target: >60% (ATMOSPHERIC or STRUCTURAL).
```

**What the FINAL prompt says (MG-04):**
```
Metaphor structural test: remove all labels and titles. Does the visual structure alone
communicate the metaphor? YES = proceed. NO = re-derive. Binary gate.
```

**Gap:** MG-04 is a binary YES/NO gate. File 17 operationalizes PA-44 with a 4-level percentage scale (0-20/20-50/50-80/80-100%) AND specifies the Flagship threshold (>60% = ATMOSPHERIC or STRUCTURAL). The FINAL prompt's C5 Gate-Then-Ranking includes "PA-44 metaphor expression (structural > atmospheric > labeled > announced)" but does not provide the percentage thresholds. The C5 ranking also says: "For flagship tier, metaphor must be ATMOSPHERIC or STRUCTURAL (>50%). Below 50% = WOULD-NOT-SHIP for flagship" -- this IS in the FINAL prompt (Section 8.1 of File 17 gate integration). But the percentage scoring methodology is absent.

**Insertable text (add to B6 or C4 under Auditor G):**
```
PA-44 scoring methodology for Auditor G:
  0-20%: NO structural metaphor detectable
  20-50%: ANNOUNCED (text-dependent, not structure-dependent) = WOULD-NOT-SHIP for Flagship
  50-80%: ATMOSPHERIC (felt through palette/texture) = CONDITIONAL PASS
  80-100%: STRUCTURAL (felt through spatial organization alone) = PASS
  Flagship minimum: >60% (ATMOSPHERIC or STRUCTURAL). Ceiling experiment score: 40% (ANNOUNCED).
```

**Placement:** C4 under Auditor G instructions, or as a note in MG-04 or C5.

---

### FINDING 17-07 -- Cold Look Locked Response Rules Missing [IMPORTANT]

**Source quote (File 17, Section 4.1, Step 3):**
```
Rules for the reaction:
- "Gut reaction" must be an EMOTION, not an analysis. "Empty and lonely" YES. "Too much whitespace" NO.
- "Worst thing" must be specific and locatable. "The area below the header" YES. "The spacing" NO.
- "Best thing" must be specific. "The dark header typography" YES. "The colors" NO (too vague).
- "Ship verdict" must be one of the three options. No hedging.
```

**What the FINAL prompt says (C4):**
```
COLD LOOK PROTOCOL: 5 seconds screenshot, gut reaction, THEN questions. Zero TC context.
```

**Gap:** The FINAL prompt's cold look protocol is a single line. File 17 provides 4 behavioral rules for cold look responses that prevent contamination and ensure the data is valid (emotion not analysis, specific not vague, no hedging). Without these rules, cold look responses will be analytical rather than perceptual and lose their diagnostic value.

**Insertable text (add to C4 cold look protocol):**
```
Cold look response rules (MANDATORY per viewport):
  "Gut reaction": EMOTION only. "Empty and lonely" YES. "Too much whitespace" NO (analysis).
  "Worst thing": Specific and locatable. "Area below the header" YES. "The spacing" NO.
  "Best thing": Specific. "Dark header typography" YES. "The colors" NO (too vague).
  "Ship verdict": YES / YES WITH RESERVATIONS / NO -- one of three. No hedging allowed.
Responses are LOCKED FOREVER after writing. Cannot be revised after reading specs or other findings.
```

**Placement:** C4, after "COLD LOOK PROTOCOL" line.

---

### FINDING 17-08 -- Weaver Synthesis Step 3 Contradiction Rules Missing [IMPORTANT]

**Source quote (File 17, Section 7.2, Step 3):**
```
7+ agree and 1-2 dissent: majority prevails, note dissent
5-6 agree and 3-4 dissent: finding VALID but contested, note both sides
Split (4-5 vs 4-5): AMBIGUOUS, flag for human review
1-2 auditors found it: VALID but MINOR unless spatial/void (spatial findings from 1 auditor taken seriously)
```

**What the FINAL prompt says (C5):**
```
Corroboration escalation: 5+ auditors agree on severity -> auto-escalate one tier.
```

**Gap:** The FINAL prompt has only one rule about corroboration (escalation at 5+ auditors). File 17 provides a full 4-rule contradiction-handling matrix for the Weaver. The weaver has no guidance for 7+ vs 1-2, for 5-6 vs 3-4, for exact splits, or for the special case of spatial findings with low corroboration.

**Insertable text (add to C5):**
```
WEAVER CONTRADICTION RULES:
  7+ auditors agree, 1-2 dissent: majority prevails, note dissent.
  5-6 agree, 3-4 dissent: finding VALID but contested, document both sides.
  4-5 vs 4-5 split: AMBIGUOUS -- flag for human review.
  1-2 auditors find issue: VALID but MINOR, EXCEPT spatial/void findings (taken seriously at any count).
```

**Placement:** C5 after "Corroboration escalation" line.

---

### FINDING 17-09 -- Embedded Auditor Alert Thresholds Not Specified [IMPORTANT]

**Source quote (File 17, Appendix B):**
```
Auditor findings contain CSS properties -> Flag file as CONTAMINATED. Weaver notes contamination
but still includes findings (with warning).
```

**Source quote (File 17, Appendix B):**
```
All auditors return zero concerns -> Spawn ADDITIONAL adversarial auditor with instruction:
"Your predecessors found nothing. Find what they missed."
```

**What the FINAL prompt says:** B12 (Recovery Protocols) has 4 rules (RP-01 through RP-04) for metaphor failure, consecutive gate failure, measurement disagreement, and HTML corruption. No protocol for CSS contamination in auditor findings, and no protocol for zero-finding results from all auditors.

**Insertable text (add to B12 or C4):**
```
RP-05. Auditor findings contain CSS property names (px, rem, rgba, etc.): Flag file
       CONTAMINATED. Weaver includes findings with WARNING. Do not exclude.
RP-06. All 9 auditors return zero findings: Spawn ADDITIONAL adversarial auditor.
       Instruction: "Your predecessors found nothing. Find what they missed."
```

**Placement:** B12 after RP-04.

---

### FINDING 17-10 -- Screenshot Capture Viewport Heights Discrepancy [CRITICAL]

**Source quote (File 17, Section 3.3, Step 3):**
```
| 1 | 1440x900  | Cold look | flagship-1440-coldlook.png |
| 2 | 768x1024  | Cold look | flagship-768-coldlook.png  |
| 3 | 1024x768  | Cold look | flagship-1024-coldlook.png |
```

**What the FINAL prompt says (C4):**
```
4 viewports: 1440px, 1024px, 768px, 480px.
```

**Gap:** File 17 specifies 3 viewports with exact dimensions (1440x900, 768x1024, 1024x768). The FINAL prompt specifies 4 viewports (adding 480px) without height dimensions. The AUXILIARY-EXECUTION-WRAPPER specifies "3 viewports: 1440px, 768px, 480px" (omitting 1024px). There is a 3-way discrepancy:
- File 17: 1440, 768, 1024 (no 480px)
- FINAL C4: 1440, 1024, 768, 480
- WRAPPER Phase 5: 1440, 768, 480

**Insertable text:** Resolve to one authoritative viewport list. Recommend File 17's operationalized list (1440x900, 768x1024, 1024x768) plus 480px if desired, with explicit height dimensions:
```
Screenshot viewports (with height):
  1440x900 (desktop), 768x1024 (tablet portrait), 1024x768 (laptop), 480x900 (mobile)
```

**Placement:** C4 screenshot pre-capture section.

---

### FINDING 17-11 -- Task Graph and Parallelism Rules Missing [IMPORTANT]

**Source quote (File 17, Appendix C):**
```
#1 Team Lead: Screenshot Pre-Capture    blockedBy: []         blocks: [#2-#11]
#2 Research Contextualizer: Lock Sheet  blockedBy: [#1]       blocks: [#3-#11]
#11 Adversarial Auditor                 blockedBy: [#1, #2]   blocks: [#12]
#12 Weaver-Synthesizer                  blockedBy: [#3-#11]   blocks: []
Parallelism: Tasks #3-#10 run in PARALLEL (8 concurrent). #11 after #2.
Expected timeline: Screenshots 5-10 min, Lock Sheet 10-15 min, Auditors 15-30 min, Weaver 20-30 min.
```

**What the FINAL prompt says:** C4 says "9 Mode 4 auditors" and mentions screenshot pre-capture but does not specify the dependency graph or the Lock Sheet agent role. The FINAL prompt omits the Adversarial auditor's dependency on the Lock Sheet.

**Gap:** The Lock Sheet agent (Research Contextualizer) is not mentioned in the FINAL prompt's C1 agent roster at all. The task dependency graph is absent. The timeline estimate is absent.

**Insertable text (add to C1 or C4):**
```
PA TASK DEPENDENCIES (parallel execution rules):
  Team-lead (screenshots): runs FIRST. Blocks all 9 auditors.
  Research Contextualizer: runs in parallel with screenshots. Produces Lock Sheet.
                           Blocks ADV auditor only.
  Auditors A-H: run in PARALLEL after screenshots. Do NOT wait for Lock Sheet.
  ADV Auditor: runs after Lock Sheet is ready (may overlap with A-H).
  Weaver: runs ONLY after ALL 9 auditors complete.
Lock Sheet: team-lead or contextualizer produces CHALLENGEABLE section for ADV auditor only.
```

**Placement:** C4, after PA deployment spec.

---

### FINDING 17-12 -- PA-05 Calibration Table Missing [CRITICAL]

**Source quote (File 17, Section 6.4):**
```
| 4/4 | Ship-ready | DESIGNED: multi-scale coherence, rhythm variation, deliberate focal points.
                    COHERENT: zero dialect shifts. PROPORTIONATE: 65-80% container, weight in all thirds,
                    designed negative space. POLISHED: zero missing elements, all tokens compliant. |
| 3/4 | Ship with reservations | Acceptable ONLY if PA-05d POLISHED fails.
                    If PA-05a DESIGNED or PA-05c PROPORTIONATE fails, treat as 2/4. |
| 2/4 | Would not ship | For flagship, 2/4 = WOULD-NOT-SHIP severity. |
| 1.5/4 | Do not ship (ceiling experiment score) | Structural rebuild required. |
```

**What the FINAL prompt says:** B9 says "Calibration: Middle=4/4, Ceiling=1.5/4, DD-006=4/4, CD-006=4/4" [NOTE: CD-006=4/4 was INCORRECT and has been corrected to CD-006=~3/4 COMPOSED (39/40 soul, CEILING tier)] and C5 has gate-then-ranking with ship/no-ship criteria. But the per-score sub-criteria definition (what 4/4 DESIGNED means, what makes 3/4 with PA-05a failing = 2/4) is absent.

**Insertable text (add to B9 or C5):**
```
PA-05 calibration (Flagship tier):
  4/4 = SHIP. DESIGNED: multi-scale coherence + rhythm variation + deliberate focal points.
              COHERENT: zero dialect shifts. PROPORTIONATE: 65-80% width + designed silence.
              POLISHED: zero missing elements + token compliance.
  3/4 = CONDITIONAL. ONLY acceptable if PA-05d (POLISHED) is the failing criterion.
        If PA-05a or PA-05c fails: treat as 2/4 (WOULD-NOT-SHIP).
  2/4 = WOULD-NOT-SHIP. Significant quality gap; fix cycle required.
  1.5/4 or below = KILL. Structural failure; CSS fixes insufficient.
Flagship target: 4/4. 3/4 acceptable ONLY for PA-05d.
```

**Placement:** B9 after calibration line, or at end of C5.

---

### FINDING 17-13 -- Void Gate Automatic Actions Partially Missing [IMPORTANT]

**Source quote (File 17, Section 8.3):**
```
PA-50: 3+ consecutive frames <30% content = WOULD-NOT-SHIP (automatic).
       6+ frames = CATASTROPHIC (automatic KILL).
PA-51: Below 60% = WOULD-NOT-SHIP. Below 40%: CATASTROPHIC (automatic KILL).
PA-52: Any third NO designed moment = WOULD-NOT-SHIP. All three empty = CATASTROPHIC.
PA-53: Below 50% at 1440px = WOULD-NOT-SHIP. Cross-validate with SC-01.
```

**What the FINAL prompt says (C5, gate questions):**
```
PA-50: 2+ consecutive blank viewport-heights
PA-51: VOID-DOMINATED classification (<40% content)
PA-52: any third of page lacks designed moment (Flagship tier)
```

**Gap:** FINAL prompt's C5 uses "2+ consecutive blank viewport-heights" for PA-50 (gate trigger), but File 17 specifies 3+ consecutive frames for WOULD-NOT-SHIP and 6+ for CATASTROPHIC. The FINAL prompt's PA-51 gate is "<40% content" but File 17 says below 60% is WOULD-NOT-SHIP and below 40% is CATASTROPHIC. The FINAL prompt collapses the 2-level severity into a single gate threshold.

**Insertable text (update C5):**
```
PA-50 gate (consecutive blank frames):
  2+ consecutive frames <30% content: GATE TRIGGER (investigate).
  3+ consecutive frames <30%: WOULD-NOT-SHIP (automatic).
  6+ consecutive frames: CATASTROPHIC (automatic KILL).
PA-51 gate (overall content ratio):
  <60%: WOULD-NOT-SHIP (automatic).
  <40%: CATASTROPHIC (automatic KILL).
```

**Placement:** C5, gate questions section.

---

### FINDING 17-14 -- Language Hard Block Absent [IMPORTANT]

**Source quote (File 17, Appendix A):**
```
BLOCKED TERMS: px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow, padding, margin,
font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index,
overflow, display, position
USE INSTEAD: heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious,
confident, broken, polished, warm, cold, sharp, soft, cluttered, breathing, stacking, flowing...
Exception: Adversarial auditor may reference design system concepts for PA-26/28.
Exception: Dimensional estimates permitted ("roughly half the screen width").
```

**What the FINAL prompt says:** No language hard block for PA auditors appears anywhere in the FINAL prompt. C4 says "Each finding: PA-XX, severity, evidence, recommendation" but does not specify that CSS vocabulary is prohibited.

**Insertable text (add to C4):**
```
AUDITOR LANGUAGE RULE: PA auditor findings may NOT contain CSS property names.
BLOCKED: px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow, padding, margin,
         font-size, font-family, line-height, max-width, min-width, flex, grid, gap,
         opacity, z-index, overflow, display, position.
USE INSTEAD: heavy, light, cramped, spacious, jarring, smooth, floating, grounded,
             anxious, confident, broken, polished, warm, cold, sharp, soft, cluttered,
             breathing, stacking, flowing, stuck, drifting, thick, thin, tight, loose.
Exception: ADV auditor may reference design system concepts when critiquing conventions (PA-26/28).
Findings with blocked terms are flagged CONTAMINATED. Weaver includes with WARNING.
```

**Placement:** C4, before "Each finding" line.

---

## SOURCE FILE 18: Structural Anti-Skimming Audit

### FINDING 18-01 -- Primacy Zone Content Specification Missing [CRITICAL]

**Source quote (File 18, Section 2):**
```
E4 recommends the first 3 lines be:
  FLAGSHIP BUILDER: Single HTML page. Ceiling-plus tier. Metaphor-driven.
  FAIL IF: container != 940-960px | void > 30% | zero messages sent
  This page has a point of view. The metaphor is the structure, not a label.
First 10 lines must contain:
  1. Mission statement (1 line)
  2. 3 kill criteria (1 line)
  3. Conviction frame (1 line)
  4. Per-agent role declaration (1 line)
  5. The 3 most critical binary rules for this agent (3-5 lines)
```

**What the FINAL prompt says:** Section A begins with a thesis quote ("The difference between Flagship and Ceiling is not complexity. It is restraint.") which is conviction, not a kill-criteria primacy line. The 3 kill criteria (S-01, S-02, zero messages) are buried in B1 (~lines 60-80 of the prompt), not in the first 10 lines.

**Gap:** File 18 identifies this as a BLOCKING structural issue (recommendation #1 of 7). The FINAL prompt does not address it -- the primacy zone contains conviction narrative rather than kill criteria.

**Insertable text:** Add at the very top of SECTION B (before B1):
```
================================================================
KILL CRITERIA -- READ FIRST (primacy position)
================================================================
FAIL IF: container width outside 940-1100px
FAIL IF: content-to-void ratio < 60% at any scroll position
FAIL IF: zero messages sent before file write (zero messages = PAUSE BUILD)
```

**Placement:** Immediately before SECTION B heading (currently line ~109).

---

### FINDING 18-02 -- Call-and-Response Protocol Partially Missing [IMPORTANT]

**Source quote (File 18, Section 8, T2 deployment):**
```
T2 (Call-and-response) deployed at ONLY 2 points:
  1. In Section 2D (Process): "BUILDER: Before writing file, state your container width
     and content-to-void ratio in your message to planner."
  2. In Section 3B (Communication): "BUILDER: Your first message to planner MUST include
     your biggest spatial concern."
T2 NOT deployed broadly -- >3 instances creates fatigue.
```

**What the FINAL prompt says (B10 self-check):**
```
>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
>>> AFTER FILE WRITE: SendMessage to team-lead with page-height + content-ratio + section-count <<<
```

**Gap:** The FINAL prompt has the call-and-response directives at the END of B10 (good recency position) but does NOT have them at Process rule P-07 location or in the communication protocol (C2). File 18 explicitly says both should appear: one in the process section and one in the communication section. The current B10 placement is the recency-position instance, but the process-section instance at P-01 through P-08 is missing the inline call-and-response trigger.

**Insertable text (add to P-03 or adjacent):**
```
P-03b. BUILDER first action after reading plan: State container width and biggest spatial
       concern in Checkpoint A message BEFORE building. This is mandatory, not optional.
```

**Placement:** B7 after P-03.

---

### FINDING 18-03 -- Section Length Caps Not Enforced [IMPORTANT]

**Source quote (File 18, Recommendation #12):**
```
Cap every section at 10 rules. If a section exceeds 10, split into sub-sections.
```

**What the FINAL prompt says:** B3 (Compositional) has 19 rules (C-01 through C-19). This exceeds the 10-rule cap specified by File 18. B1 (Spatial) has 15 rules. Both are above the cap.

**Gap:** The ANTI-SKIMMING COMPLIANCE section at the end of the FINAL prompt notes "Rule cap per section: No section exceeds 18 rules (B3 is largest at 18)" -- and now it actually has 19 (C-01 through C-19 with C-19 added later). File 18's cap is 10 per section. The FINAL prompt's stated compliance of "18 max" violates the 10-rule recommendation.

**Note:** This is a tradeoff issue. File 18 recommends splitting, but the FINAL prompt chose 18 as its cap. The gap is that B3 is now 19 (not 18) after C-19 was added -- the stated compliance claim is wrong.

**Insertable text (in ANTI-SKIMMING COMPLIANCE section):**
```
- **Rule cap per section:** B3 contains 19 rules (C-01 through C-19). This exceeds the
  10-rule recommendation from anti-skimming analysis. Consider splitting B3 into B3a
  (Mechanisms: C-01 through C-07) and B3b (Quality + Restraint: C-08 through C-19).
```

**Placement:** ANTI-SKIMMING COMPLIANCE section, update the rule cap note.

---

### FINDING 18-04 -- Automated Grep for Hedging Words Not Specified [NICE-TO-HAVE]

**Source quote (File 18, Recommendation #15):**
```
Add automated grep for banned hedging words (should/consider/ensure/aim/try/ideally/
appropriate/feel) as a pre-assembly validation step.
ZERO TOLERANCE for should/consider/ensure/aim/try/ideally/appropriate/feel in Layers 2-3.
Run automated grep before finalizing.
```

**What the FINAL prompt says:** The ANTI-SKIMMING COMPLIANCE section states "Judgment language in execution spec: ZERO" but provides no mechanism (automated grep) for verifying this. No pre-assembly validation step is specified.

**Insertable text (add to B7 or as a gate step):**
```
Pre-assembly validation: grep execution spec (B1-B12) for: should|consider|ensure|aim\s+for|
try\s+to|ideally|appropriate|feel. Zero matches required. Any match = REWRITE to binary form.
```

**Placement:** End of SECTION B or as a Team-Lead gate check.

---

### FINDING 18-05 -- Gate Self-Containment Rule Absent [IMPORTANT]

**Source quote (File 18, Recommendation #13, significant):**
```
Make every gate definition self-contained. Never reference "see Rule X." Always inline the
threshold value. Example FRAGILE: "GATE CP-2: Verify Rule 3 passes."
Example RESILIENT: "GATE CP-2: Content-to-void ratio >= 60:40. Calculate: sum(content-element-
heights) / total-scroll-height."
```

**What the FINAL prompt says (C3 Gate Sequence):**
```
Gate 1 (Post-Pass-1): S-01, S-02, S-07, S-09, S-10, S-11, S-12, S-14 (spatial confidence).
```

**Gap:** Gate 1 lists rule IDs only (S-01, S-02, etc.) without inlining the threshold values. An agent reading only C3 cannot execute Gate 1 without cross-referencing B1. File 18 identifies this as a resilience requirement.

**Insertable text (expand Gate 1 in C3):**
```
Gate 1 (Post-Pass-1): Spatial confidence -- 8 binary checks:
  S-01: container 940-1100px (getBoundingClientRect)
  S-02: content-to-void >= 60:40 (sum content heights / scroll height)
  S-07: CPL 45-80 (content-width / font-size / 0.6)
  S-09: no content gap > 96px (adjacent margin-bottom + padding-top)
  S-10: no contiguous void > 2160px
  S-11: no CSS margin/padding value > 96px
  S-12: no viewport position < 30% content (2+ consecutive = FAIL)
  S-14: content-to-void 50% minimum at skeleton (graduated gate)
```

**Placement:** C3 Gate 1 entry.

---

### FINDING 18-06 -- Conviction Embedding in Builder Prompt Not Specified [NICE-TO-HAVE]

**Source quote (File 18, Recommendation #16, minor):**
```
Add a 1-paragraph conviction summary to the builder prompt header as insurance against
conviction section being skimmed.
```

**What the FINAL prompt says:** The FINAL prompt is structured as a single document. If agents receive the full prompt, conviction is available but may be skimmed. No specification exists for embedding a conviction summary in the builder's sub-prompt.

**Insertable text (add to C1 builder agent definition):**
```
Builder prompt header MUST include 3-sentence conviction summary (extracted from Section A):
  "This page must achieve PA-05 >= 4/4 DESIGNED. [Warm. Authoritative. Unhurried.]
  The metaphor is the load-bearing structure. Spatial confidence is not negotiable."
```

**Placement:** C1 under Skeleton Builders A+B definition.

---

## SOURCE FILE 19: Soundness Audit

### FINDING 19-01 -- Container Width Rule Lacks CSS-vs-Visual-Band Distinction [CRITICAL]

**Source quote (File 19, SC-01):**
```
Resolution: CSS container: max-width 960px (structural container in CSS)
            Visual content band: 860-960px effective (after padding)
            The rule should specify: max-width: 960px is the structural container.
            Internal padding may narrow the visual content band to 860px minimum.
            What matters is the VISUAL band width at 1440px viewport = 860-960px (60-67%).
```

**What the FINAL prompt says (S-01):**
```
S-01. Container width outside 940-1100px
      Verify: querySelector('.page-container').getBoundingClientRect().width
```

**Gap:** The FINAL prompt's container rule uses a range (940-1100px) but does not distinguish between the CSS container (`max-width`) and the visual content band (effective width after padding). File 19's SC-01 resolution requires this distinction to reconcile CD-006's 1100px with the 960px rule. The FINAL prompt's Appendix also lists "Container width: 940-1100px (960px default, 1100px proven upper bound from CD-006)" but does not explain the visual band concept.

**Insertable text (add to S-01 or Appendix):**
```
S-01 NOTE: Distinguish CSS container from visual content band.
  CSS container (max-width): 960px default. Up to 1100px with internal padding.
  Visual content band (effective after padding): 860-960px at 1440px viewport.
  What matters: visual content band, not CSS container declaration.
  CD-006 used max-width: 1100px + 120px side padding = ~860px effective band (PASS).
  Verify: measure RENDERED content width (text column), not CSS max-width.
```

**Placement:** S-01 verification method or Appendix parameter table footnote.

---

### FINDING 19-02 -- Void Threshold Pixel Value is a Mathematical Error [CRITICAL]

**Source quote (File 19, SC-02):**
```
The 2,160px value (1.5x viewport WIDTH) is a MATHEMATICAL ERROR that conflated viewport
width with viewport height. At 1440x900, 1.5 viewports = 1,350px (height-based) or 2,160px
(width-based). The height-based calculation is correct since we measure vertical scroll.
Resolution: Use B1's measurement protocol (scroll in viewport-height increments, count
consecutive frames below 30%). Do NOT specify a pixel threshold.
```

**What the FINAL prompt says:**
```
S-10. No contiguous void > 2160px (1.5 x 1440px viewport width).
      Skeleton stage: stricter 1620px check.
```

The Appendix also lists:
```
Void threshold (final): 2160px | FAIL-IF binary | TC-07, width basis (1.5 x 1440px)
```

**Gap:** The FINAL prompt retains 2160px as the void threshold AND acknowledges it is width-based (1.5 x 1440px). File 19's SC-02 identifies this as a mathematical error (should be height-based: 1350px or measurement-protocol-based). The FINAL prompt acknowledges "width basis" but does not correct it or switch to the measurement protocol. The Appendix note "width basis (1.5 x 1440px)" actually confirms the error is present.

**Insertable text (replace S-10 and Appendix entry):**
```
S-10. Void measurement protocol: scroll in viewport-height increments (900px at 1440x900).
      At each scroll position, estimate content coverage %.
      0-1 consecutive positions below 30%: PASS.
      2+ consecutive positions below 30%: FAIL (WOULD-NOT-SHIP).
      6+ consecutive positions below 30%: CATASTROPHIC (KILL).
      Note: 2160px (width-based) was a mathematical error; height-based is 1350px.
            Use the measurement protocol, not a pixel threshold.
```

**Placement:** S-10 in B1 and Appendix parameter table.

---

### FINDING 19-03 -- Designed Moment Operational Definition Missing [CRITICAL]

**Source quote (File 19, SC-22):**
```
Operationalize "designed moment" as: A section with (a) >= 3 different mechanism categories
represented, (b) at least 1 mechanism NOT used in the adjacent sections, and (c) a visual
treatment that differs from the preceding section in >= 3 CSS channels.
```

**What the FINAL prompt says:**
- C-09: ">= 1 designed moment per scroll quartile"
- C-13: ">= 2 designed silence zones (200px+ height, base typography only)"
- C5 mentions "PA-52: any third of page lacks designed moment (Flagship tier)"

**Gap:** "Designed moment" is used in 5+ rules in the FINAL prompt but never operationally defined. File 19 flags this as SC-22 (SIGNIFICANT) and provides the operationalized definition. Without it, builders will inconsistently apply the rule (one mechanism = designed moment?).

**Insertable text (add to B3 near C-09, or as definition in Section A/Appendix):**
```
DESIGNED MOMENT definition (for all C-09, C-13, PA-52 references):
A section qualifies as a "designed moment" when ALL THREE conditions hold:
  (a) >= 3 different mechanism CATEGORIES represented (not just 3 mechanisms)
  (b) >= 1 mechanism NOT used in either adjacent section (local uniqueness)
  (c) visual treatment differs from preceding section in >= 3 CSS channels
Single-mechanism sections do NOT qualify as designed moments regardless of mechanism intensity.
```

**Placement:** B3 before C-09, or as a definitional note after C-09.

---

### FINDING 19-04 -- TC "Perceptual Risk" vs PA "Perception Track" Terminology Collision [IMPORTANT]

**Source quote (File 19, SC-10):**
```
TC skill: "perceptual risk" = risk that metaphor causes visual problems (Phase 3.5E, scored 0-4)
PA skill: "perception track" = classification for perceptual findings (vs rule-track)
Resolution: Rename TC's concept to "EXECUTION RISK" in all prompt references.
Never use "perceptual risk" ambiguously.
```

**What the FINAL prompt says:** The FINAL prompt references "perception track" in no explicit location. MG-01 through MG-05 do not use the term "perceptual risk." The PA skill routing in B9 does not name the tracks. The collision point is if agents read both skills.

**Gap:** While the FINAL prompt itself may not use the collision term, the instruction to Metaphor Agent (Section E) directs it to read SKILL.md which uses "perceptual risk." Without a disambiguation note, the terminology collision can confuse agents reading both skills.

**Insertable text (add to Section E under METAPHOR AGENT reads):**
```
NOTE: TC SKILL.md uses "perceptual risk" to mean EXECUTION RISK (risk of metaphor causing
visual problems). PA SKILL.md uses "perception track" to classify finding types. These are
DIFFERENT concepts. "Perceptual risk" in TC = EXECUTION RISK. Do not conflate.
```

**Placement:** Section E, under METAPHOR AGENT reads block.

---

### FINDING 19-05 -- Header Proportion 33% Reference Not Eliminated [IMPORTANT]

**Source quote (File 19, SC-13):**
```
Resolution: Use the STRICTER value: 20% warning, 25% hard abort.
The 33% value appears to be an earlier, less refined version. Remove all references to 33%.
Action: Standardize on "Header: <20% first viewport = PASS, 20-25% = WARNING, >25% = FAIL."
```

**What the FINAL prompt says (S-03):**
```
S-03. Header: <= 20% of first viewport (288px at 1440px). Kill at 25% (360px).
```

**Status:** S-03 in the FINAL prompt correctly uses 20%/25%. File 19's concern was about the 33% value appearing in enrichment documents. The FINAL prompt does not contain 33%. This gap is RESOLVED for the FINAL prompt itself. However, the Appendix says "Header proportion: 20% warning / 25% abort (288px / 360px at 1440px)" which is correct.

**Assessment:** No action needed on this item -- the FINAL prompt correctly implements SC-13's resolution.

---

### FINDING 19-06 -- "Binary = 100% Compliance" Overstated Claim Persists [IMPORTANT]

**Source quote (File 19, SC-07):**
```
Soften the claim. Instead of "binary = 100%, judgment = 0%," use "binary rules are 4-8x
more likely to be followed."
```

**What the FINAL prompt says (ANTI-SKIMMING COMPLIANCE):**
```
(not explicitly stated in the FINAL prompt text as a claim)
```

**What the FINAL prompt's Appendix parameter table says:**
```
(not present)
```

**Status:** The FINAL prompt does not contain the claim "binary = 100%." The MEMORY.md contains "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%" but this is in memory, not the FINAL prompt. No correction needed in the FINAL prompt itself.

**Assessment:** No action needed -- the overclaim is not in the FINAL prompt.

---

### FINDING 19-07 -- Mechanism Hard Cap Inconsistency [IMPORTANT]

**Source quote (File 19, SC-04):**
```
Standardize: target 12-14, hard cap 14, absolute max 16. Remove all references to "16-18"
from execution-facing documents.
```

**What the FINAL prompt says:**
- C-02: "Mechanism target: 12-14 deployed. Hard cap: 16 (absolute maximum, requires justification)."
- Appendix: "Mechanism target: 12-14 | Target range"
- Appendix: "Mechanism hard cap: 16 | FAIL-IF binary"

**Gap:** File 19's SC-04 recommends hard cap = 14, absolute max = 16 with justification. The FINAL prompt's C-02 sets hard cap = 16 (not 14 as SC-04 recommends). The Appendix lists "hard cap: 16 FAIL-IF binary" which is what C-02 says. The soundness audit's preferred value (14 hard cap, 16 absolute max requiring justification) is partially implemented (the "requires justification" language is present) but the FINAL prompt calls 16 the "hard cap" rather than calling 14 the hard cap and 16 the "absolute maximum with justification."

**Insertable text (update C-02):**
```
C-02. Mechanism target: 12-14 deployed.
      Hard cap: 14 (requires team-lead confirmation above 14).
      Absolute maximum: 16 (requires documented justification for each mechanism above 14).
      Hard cap FAIL IF: > 16 mechanisms deployed without written justification.
```

**Placement:** C-02 in B3.

---

### FINDING 19-08 -- Gate Count Exceeds 5-Gate Recommendation [IMPORTANT]

**Source quote (File 19, SC-15):**
```
Consolidate into 5 gates with clear ownership:
  Gate 0: Spatial budget + zone count + mechanism allocation (after plan)
  Gate 1: SC-01 through SC-07 + communication check (7 binary, after Pass 1)
  Gate 2: CP-01 through CP-04 + spatial re-check (4+7 binary, after Pass 2)
  Gate 3: Height delta + intentionality checklist (3 checks, after Pass 3)
  Gate 4: Mode 4 PA + blind novelty + comparative + ship decision (post-audit)
Total: 5 gates, ~25 binary checks max.
```

**What the FINAL prompt says (C3):**
```
Gate 0 (Pre-Build), Gate 1 (Post-Pass-1), Gate 2 (Landmarks), Gate 3 (Post-Pass-2),
Gate 4 (Post-Pass-3), Gate 5 (Final)
```

**Gap:** The FINAL prompt has 6 gates (0 through 5), not 5 as recommended by SC-15. The FINAL prompt's Gate 2 (Landmarks) is an extra gate not in SC-15's recommended structure. Gate 3 and Gate 4 in the FINAL prompt map to SC-15's Gate 2. This creates a numbering inconsistency where agents referencing SC-15's gate numbers will mis-map.

**Note:** The extra gate (Landmarks check) is not harmful and may be intentional. The primary concern is that kill criteria (KB-01 etc.) reference gate numbers that agents may cross-reference against SC-15.

**Insertable text (clarification note in C3):**
```
NOTE: This prompt uses 6 gates (0-5), not the 5-gate recommendation from SC-15.
Gate 2 (Landmarks) is an additional landmark check between the spatial and composition gates.
Gate numbers in this prompt are authoritative. SC-15's 5-gate structure is superseded here.
```

**Placement:** C3 before gate sequence.

---

## SOURCE FILE 20: Invocation Guarantee Audit

### FINDING 20-01 -- Rule Acknowledgment Protocol Absent [CRITICAL]

**Source quote (File 20, Section 3.2):**
```
RULE ACKNOWLEDGMENT (Builder, Checkpoint A):
SPATIAL: S1[container 960px] S2[void <1.5vp] S3[content >=70%] S4[header <25%] S5[max-spacing 96px]
SOUL: U1-U8 [8 binary checks acknowledged]
COMPOSITIONAL: C1[per-cat min] C2[reinforcing pairs] C3[3+ transitions] C4[designed moments] ...
TOTAL TRACKED: __ rules
```

**What the FINAL prompt says:** B10 self-check lists items as checkboxes. CP-A says: "Container: ___px. Estimated height: ___px. Content-to-void: __:__. Biggest spatial concern: ___." But there is NO requirement for an explicit rule acknowledgment list (enumerating rule IDs) in Checkpoint A.

**Gap:** File 20's Checkpoint A template requires the builder to enumerate ALL rule IDs they are tracking. This is the primary invocation guarantee mechanism. The FINAL prompt's CP-A only requires 4 measurements (container, height, ratio, concern) but does not require the builder to LIST rule IDs. Without this, a builder can send CP-A without having read B1 through B7.

**Insertable text (add to C2 CP-A specification):**
```
CP-A MUST ALSO INCLUDE rule acknowledgment:
  "RULES TRACKED: S-01[container ___px] S-02[void] S-07[CPL] S-12[B1] U-01...U-10[soul]
   C-01[per-cat min] C-05[3+ transitions] C-09[designed moments] MC-01[CCS] MC-02[pairs]
   [list all rule IDs actively being tracked]"
If rule IDs are absent from CP-A: Gate 1 = FAIL (communication gate violation).
```

**Placement:** C2, after CP-A definition.

---

### FINDING 20-02 -- Section Checksums Not in Prompt [CRITICAL]

**Source quote (File 20, Section 2.1):**
```
Each section contains a KEY PHRASE that the reading agent MUST quote in their first output.
| Conviction | "Confident intention at every scale of attention" | Metaphor agent | Metaphor derivation |
| Layer 2A Spatial | "Container: max-width: 960px" | Builder | Checkpoint A |
| Layer 2C Compositional | "Per-category minimums" | Planner | Build plan mechanism table header |
| Layer 3C Audit | "9 PA auditors" | Team-lead | Audit spawn log |
```

**What the FINAL prompt says:** The FINAL prompt does not specify checksum phrases or require agents to quote specific phrases as proof-of-read. The anti-skimming compliance section mentions structural techniques but not checksum phrases.

**Gap:** The checksum system is the primary verification mechanism for ensuring sections were actually read (not scanned). It is completely absent from the FINAL prompt.

**Insertable text (add to B7 Process or as a Section F verification spec):**
```
SECTION CHECKSUM PHRASES (proof-of-read verification):
  Section A (Conviction): Quote "confident intention at every scale" in first checkpoint.
  B1 (Spatial): Quote "container: 940-1100px" in Checkpoint A.
  B2 (Soul): Quote "Soul 10/10" in self-check report header.
  B3 (Compositional): Quote "per-category minimums" in build plan mechanism table.
  C2 (Communication): Quote "5 mandatory checkpoints" in communication log header.
  C4 (PA Deployment): Quote "9 PA auditors" in audit spawn log.
Checksum phrase absent from expected artifact = section was not processed.
```

**Placement:** New P-09 in B7, or as F-section verification spec.

---

### FINDING 20-03 -- Response Templates Missing from FINAL Prompt [CRITICAL]

**Source quote (File 20, Section 2.2):**
```
CHECKPOINT A template:
  - My biggest spatial concern is: ___
  - My whitespace calculation shows: ___px total void
  - Container width I will use: ___px
  - Rules I am tracking (list IDs): S1, S2, S3, S4, S5, U1-U8, C1-C6, ___
CHECKPOINT B template:
  - Page height: ___px
  - Content-to-void ratio: ___:___
  - Token compliance: ___% (var() count: ___, raw count: ___)
  - CPL at body text: ___
  - Self-check results: S1[___] S2[___] S3[___] S4[___] U[___/8] C3[___] C4[___]
  - Deviations from plan: ___
BUILD PLAN SPATIAL BUDGET TABLE template (Planner):
  Zone | Content Height | Void Height | Mechanism Count | Content Ratio
```

**What the FINAL prompt says (C2):**
```
CP-A (post-plan read): Builder -> Planner. "Container: ___px. Estimated height: ___px.
     Content-to-void: __:__. Biggest spatial concern: ___."
CP-B (post-build): Builder -> Team-Lead. "Page height: ___px. Content ratio: __%.
     Sections: __. Deviations from plan: ___."
```

**Gap:** The FINAL prompt has abbreviated versions of CP-A and CP-B but is missing:
1. Token compliance field in CP-B
2. CPL field in CP-B
3. Individual self-check results table (S1[___] format) in CP-B
4. "Rules I am tracking (list IDs)" field in CP-A
5. The full Planner spatial budget table template
6. The Metaphor Agent derivation template

**Insertable text (expand C2 templates):**
```
CP-A full template:
  "Container: ___px. Estimated height: ___px. Content-to-void: __:__.
   Biggest spatial concern: ___. Rules tracking: [list all rule IDs]."

CP-B full template:
  "Page height: ___px. Content ratio: __%. Sections: __. Deviations: ___.
   Token compliance: __% (var() count: ___, raw count: ___). CPL: ___.
   Self-check: S-01[___] S-02[___] S-07[___] S-12[___] U[__/10] C-05[___] C-09[___]."
```

**Placement:** C2, expanding existing CP-A and CP-B definitions.

---

### FINDING 20-04 -- Execution Log Entries Not Required [IMPORTANT]

**Source quote (File 20, Section 2.3):**
```
Every agent writes a structured log entry upon reading each assigned section:
READ [SECTION ID]: [LINE COUNT] lines. Key rules: [RULE IDs].
Flagging: [CONCERN or "none"].
Example: READ 2A-SPATIAL: 15 lines. Key rules: S1, S2, S3, S4, S5.
         Flagging: S2 void limit may conflict with 5-zone metaphor -- need to verify with planner.
```

**What the FINAL prompt says:** No execution log entries are required from agents. The gate execution log (C3 kill criteria) is a team-lead artifact, but per-agent section-read logs are not specified.

**Gap:** File 20's execution log entries create a continuous trail of proof-of-read across all sections. Without them, section skipping is undetectable until a gate fails.

**Insertable text (add to P-07 or C2):**
```
P-09. Each agent writes a section-read log in their first message:
      "READ [SECTION ID]: [line count] lines. Key rules: [rule IDs]. Flagging: [concern or none]."
      Minimum: 3 log entries per agent (first section read, spatial/soul, and self-check).
      Missing log entries = incomplete processing. Team-lead verifies at Gate 1.
```

**Placement:** B7 as P-09.

---

### FINDING 20-05 -- Spot Check Protocol Absent [IMPORTANT]

**Source quote (File 20, Section 3.3):**
```
Spot Check 1 (during Pass 1 build):
  Team-lead selects 1 random rule ID from builder's acknowledgment list.
  Sends message: "Builder: What does rule [ID] require? Reply with threshold."
  If incorrect or no reply: FLAG (does not block, but logged).
Spot Check 2 (during Pass 2 or 3): Same protocol, different rule, different domain.
Cost: ~1 attention unit each. Catches performative acknowledgment (~20% base rate).
```

**What the FINAL prompt says:** No spot check protocol exists in the FINAL prompt. C2 specifies 5 mandatory checkpoints but does not specify team-lead spot checks during builds.

**Gap:** File 20 identifies ~20% performative acknowledgment rate (builder lists rule IDs without reading rules). The spot check is the detection mechanism. Without it, the team-lead cannot distinguish genuine from performative acknowledgment.

**Insertable text (add to C2 or as a Team-Lead process rule):**
```
TEAM-LEAD SPOT CHECKS (2 required per experiment):
  Spot Check 1: During Pass 1 build. Select 1 rule ID from builder's CP-A acknowledgment.
                Message builder: "What does rule [ID] require? Reply with threshold."
                Correct = PASS. Incorrect = FLAG (log, do not block).
  Spot Check 2: During Pass 2 or 3. Different rule ID from different domain.
  Purpose: detect performative acknowledgment (~20% base rate without checks).
```

**Placement:** C2 after CP-E, or as a Team-Lead process rule in B7.

---

### FINDING 20-06 -- Per-Agent Attention Budget Not Specified [IMPORTANT]

**Source quote (File 20, Section 7.4):**
```
| Builder (Pass 1) | 75 lines max | 30 binary rules max | 37 attention units |
| Builder (Pass 2) | 60 lines max | 20 binary rules max | 30 attention units |
| Builder (Pass 3) | 50 lines max | 15 binary rules max | 25 attention units |
| Planner         | 100 lines max | 25 binary + 10 judgment | 55 attention units |
| Team-lead       | 200 lines max | N/A | 38.5 units on enforcement |
Every line beyond the max is a candidate dead line.
```

**What the FINAL prompt says:** The Appendix has "Builder prompt length: <= 75 lines (rules + conviction opener + closer) | Hard cap." No per-pass distinction exists. Pass 2 builder (60 lines), Pass 3 builder (50 lines), and Planner (100 lines) limits are absent.

**Insertable text (add to Appendix parameter table):**
```
| Builder prompt (Pass 1) | <= 75 lines | Hard cap | SC-17 + SC-03 |
| Builder prompt (Pass 2) | <= 60 lines | Hard cap | SC-17 + SC-03 |
| Builder prompt (Pass 3) | <= 50 lines | Hard cap | SC-17 + SC-03 |
| Planner prompt | <= 100 lines | Hard cap | SC-17 + SC-03 |
| Team-lead prompt | <= 200 lines | Soft cap | SC-17 + SC-03 |
```

**Placement:** Appendix parameter table, after "Builder prompt length" row.

---

### FINDING 20-07 -- Phased Reveal Protocol Absent [IMPORTANT]

**Source quote (File 20, Section 6.2, 6.3):**
```
Three-batch delivery for builder:
  Batch 1: SPATIAL + SOUL (lines 1-13) -> STOP. Send Checkpoint A.
  Batch 2: MECHANISM TABLE + COMPOSITIONAL -> BUILD. When complete, continue to Phase 3.
  Batch 3: SELF-CHECK + METAPHOR SUMMARY -> Run self-check, send Checkpoint B, write file.

In single-prompt architecture, phased reveal achieved through:
  === PHASE 1: READ AND ACKNOWLEDGE ===
  [Spatial + Soul]
  >>> STOP. Send Checkpoint A before continuing. <<<
  === PHASE 2: BUILD ===
  [Mechanism table + Compositional]
  >>> BUILD. When complete, continue to Phase 3. <<<
  === PHASE 3: VERIFY ===
  [Self-check + Metaphor summary]
  >>> Run self-check. Send Checkpoint B. Then write file. <<<
```

**What the FINAL prompt says:** B10 self-check ends with:
```
>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
>>> AFTER FILE WRITE: SendMessage to team-lead with page-height + content-ratio + section-count <<<
```

**Gap:** The FINAL prompt has the recency-position stop markers in B10 but does NOT have the Phase 1 stop marker between B2 (Soul) and B3 (Compositional). The phased reveal requires THREE stop points. The FINAL prompt only has ONE effective stop (end of B10). Without the Phase 1 stop after B2, builders will read all of B1-B10 continuously before sending any checkpoint, which allows them to scan rules rather than acknowledge them.

**Insertable text (insert between B2 and B3):**
```
================================================================
>>> PHASE 1 COMPLETE. STOP HERE. <<<
Send Checkpoint A to planner NOW (before reading B3 and beyond):
"Container: ___px. Height: ___px. Void: __:__. Concern: ___. Rules tracking: [IDs]."
Wait for planner acknowledgment. Then continue to B3.
================================================================
```

**Placement:** Between B2 (Soul) and B3 (Compositional).

---

### FINDING 20-08 -- Dead Line Indicators Not Defined [NICE-TO-HAVE]

**Source quote (File 20, Section 7.3):**
```
A line is DEAD if it matches ANY of these patterns:
- No rule ID
- No owner annotation
- No action consequence
- Restates another line (deduplication)
- Uses "should" without threshold
- Explanation of rationale (belongs in reference doc)
- Addresses wrong reader
- Aspirational without measurement ("Aim for beauty.")
Dead line test: Does it have an ID? An owner? An action? A detection method?
If a line fails all 4: remove it.
```

**What the FINAL prompt says:** The ANTI-SKIMMING COMPLIANCE section describes anti-skimming techniques applied but does not define dead line indicators or provide a self-audit mechanism for the team-lead to verify the prompt quality.

**Gap:** The dead line audit framework allows the team-lead to verify the FINAL prompt itself is not wasting attention budget. Without it, the team-lead has no systematic way to review the prompt for attention waste.

**Insertable text (add as a Team-Lead pre-flight check):**
```
TEAM-LEAD PROMPT QUALITY CHECK (pre-flight, one-time):
For each line in B1-B12 (execution spec), verify:
  - Has a rule ID (S-XX, U-XX, C-XX, etc.) OR is a section header OR action directive?
  - Has a named reader (builder, planner, auditor)?
  - Triggers an action or is verified at a gate?
  - Detectably absent if skipped?
Lines failing all 4: DEAD. Remove or route to reference library.
Target: zero dead lines in builder's 75-line prompt.
```

**Placement:** Section E (Reference Library) or as a pre-flight checklist item.

---

### FINDING 20-09 -- Team-Lead Contract Deliverables Not in FINAL Prompt [IMPORTANT]

**Source quote (File 20, Section 4.1):**
```
Team-lead MUST PRODUCE:
  - 00-preamble-digest.md (5 lines, 3 key phrases)
  - 00-agent-reading-assignments.md (66 files, zero unassigned)
  - Agent roster log (per-agent: name, model, prompt line count, attention estimate)
  - Gate execution log (22+ entries, append-only)
  - Communication log (5 checkpoint entries minimum)
  - 2 spot check results
VERIFICATION: post-experiment audit checks entry count >= 22
```

**What the FINAL prompt says:** C1 lists agents and roles. C3 has gate sequence. No explicit contract for team-lead deliverables exists (minimum artifact list, minimum gate entry count, required file names).

**Insertable text (add to C1 under TEAM-LEAD or as a new C7 section):**
```
TEAM-LEAD MANDATORY ARTIFACTS:
  - 00-preamble-digest.md (3 key phrases extracted from Section A)
  - 00-agent-reading-assignments.md (all files assigned to named agents)
  - 09-gate-execution-log.md (>= 5 gate entries, one per gate; running log)
  - 09-communication-log.md (>= 8 entries: 5 CPs + 3 escalation triggers)
  - 2 spot check results documented in gate log
If any artifact is missing at experiment end: Gate 5 = INCOMPLETE.
```

**Placement:** C1 or as new C7.

---

### FINDING 20-10 -- Section Order Optimization Not Applied [IMPORTANT]

**Source quote (File 20, Section 7.2):**
```
OPTIMAL ORDER (for builder prompt):
1. SPATIAL ANCHORS (S1-S5) -- Highest priority, worst historical failure
2. SOUL CHECKS (U1-U8) -- Second priority, highest historical compliance
3. COMMUNICATION OBLIGATIONS -- Third, prevents isolation failure
4. >>> CHECKPOINT A STOP <<<
5. MECHANISM TABLE
6. COMPOSITIONAL RULES (C1-C6)
7. TOKEN + MEASUREMENT
8. >>> BUILD NOW <<<
9. SELF-CHECK LIST -- Post-build verification
10. METAPHOR SUMMARY -- Final "why" refresh
11. >>> CHECKPOINT B STOP <<<
```

**What the FINAL prompt says:** Current section order is A1 (Thesis) through A8 (Reader Journey), then B1 (Spatial) through B12 (Recovery), then C1 through C6, then D (Closing), then E (Reference Library). Communication obligations (C2) come AFTER all 12 B-sections.

**Gap:** File 20 specifies that communication obligations must be third in the builder's reading order (before mechanism table and compositional rules), while in the FINAL prompt they appear in Section C2 which is 200+ lines into the document. The section order optimization is not applied to the FINAL prompt.

**Note:** The FINAL prompt is a multi-agent document, not a builder-only document. Section order cannot be perfectly optimized for one agent without harming others. However, the communication obligations could be inserted as a call-out within B7 (Process) to give them an earlier position for the builder.

**Insertable text (add inline reminder in B7):**
```
P-01b. COMMUNICATION PRIORITY: Before any other action, builder identifies planner's
       contact and confirms communication channel. CP-A must be sent within first
       10 minutes of reading. If no planner response in 5 minutes, escalate to team-lead.
```

**Placement:** B7 as P-01b.

---

## SOURCE FILE: AUXILIARY-EXECUTION-WRAPPER

### FINDING W-01 -- Wrapper References Outdated File Path [CRITICAL]

**Source quote (WRAPPER, Phase 0):**
```
Read the enriched master execution prompt at:
  ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md
```

**What actually exists:** The FINAL prompt is at:
```
ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md
```

**Gap:** The WRAPPER instructs the executing instance to read a specific file path (10-ENRICHED-MASTER-EXECUTION-PROMPT.md in prompt-enrichment-audit/) which is the EARLIER version. The FINAL enriched prompt (v2 with all fixes) is at a different path. An agent executing the wrapper will read the WRONG prompt.

**Insertable text (update Phase 0):**
```
Read the enriched master execution prompt at:
  ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md
```

**Placement:** WRAPPER, Phase 0, the file path specification.

---

### FINDING W-02 -- Wrapper Auditor Assignments Contradict FINAL Prompt C4 [CRITICAL]

**Source quote (WRAPPER, Phase 2, Pass 5):**
```
A: PA-01,02,03,04,05           (Identity + First Impression)
B: PA-06,07,08,09,10,11        (Spatial Composition)
C: PA-12,13,14,30-35,50,51     (Spatial Detail + Void -- HIGHEST priority)
D: PA-15,16,17,18,19           (Typography + Rhythm)
E: PA-20,21,22,23,24           (Component Quality)
F: PA-25,26,27,28,29,41        (Mechanism Deployment + Rhythm)
G: PA-36,37,38                 (Responsive + Accessibility)
H: PA-39,40,42,43,44           (Proportions + Polish)
I: PA-45,46,47,48,52,53        (Coherence + Void Assessment)
```

**What the FINAL prompt says (C4):**
```
A: PA-01,03,04,05,18,19,20,45  B: PA-02,06,07,08,29  C: PA-09,10,11,30,31,32,33,50,51,52,53
D: PA-12,13,34,35,36           E: PA-14,15,37,38,39  F: PA-16,17,40,41
G: PA-42,43,44                 H: PA-21,22,23,46,47  ADV: PA-24,25,26,27,28,48
```

**Gap:** The WRAPPER uses a completely different assignment schema (A-I, 9 auditors using sequential PA numbers) vs the FINAL prompt's thematic assignment (A-H + ADV, based on perceptual dimensions). These are fundamentally incompatible. An agent executing the WRAPPER's Phase 2 will spawn auditors with the WRONG question assignments relative to what C4 specifies. The question coverage also differs -- wrapper's schema omits PA-52, PA-53 from Auditor C/I placement logic.

**This is the most critical discrepancy in the WRAPPER.** It will cause the PA audit to use a different schema than C4 specifies, making cross-experiment comparison impossible.

**Insertable text (update WRAPPER Phase 2 auditor assignments):**
```
USE ASSIGNMENTS FROM C4 OF THE ENRICHED PROMPT (authoritative):
  A: PA-01,03,04,05,18,19,20,45    (8 Qs -- Identity+First Impression+Color)
  B: PA-02,06,07,08,29             (5 Qs -- Readability+Typography)
  C: PA-09,10,11,30,31,32,33,50,51,52,53  (11 Qs -- Spatial+Void, HIGHEST)
  D: PA-12,13,34,35,36             (5 Qs -- Flow+Pacing)
  E: PA-14,15,37,38,39             (5 Qs -- Grid+Layout)
  F: PA-16,17,40,41                (4 Qs -- Consistency+Rhythm, PA-17/41 PRIMARY)
  G: PA-42,43,44                   (3 Qs -- Metaphor+Ideology)
  H: PA-21,22,23,46,47             (5 Qs -- Responsive)
  ADV: PA-24,25,26,27,28,48        (6 Qs -- Adversarial+Cross-Page)
```

**Placement:** WRAPPER, Phase 2, Pass 5 auditor assignments section.

---

### FINDING W-03 -- Wrapper Specifies 3 Viewports, FINAL Prompt Specifies 4 [IMPORTANT]

**Source quote (WRAPPER, Phase 2, Pass 5):**
```
Team-lead captures ALL screenshots:
  - 3 viewports: 1440px, 768px, 480px
```

**What the FINAL prompt says (C4):**
```
4 viewports: 1440px, 1024px, 768px, 480px. Cold look + full scroll at each. 50-80 screenshots.
```

**Gap:** WRAPPER omits 1024px viewport. This is a 3-way discrepancy with File 17 (which has 1440, 768, 1024 but NOT 480px). None of the three documents agree on which viewports to capture.

**Insertable text (update WRAPPER Phase 2):**
```
Team-lead captures ALL screenshots at 4 viewports (authoritative per C4 of enriched prompt):
  1440x900 (desktop), 1024x768 (laptop), 768x1024 (tablet), 480x900 (mobile)
  Expected: 50-80 screenshots total.
```

**Placement:** WRAPPER, Phase 2, Pass 5 screenshot capture spec.

---

### FINDING W-04 -- Wrapper Rule Count Discrepancy [IMPORTANT]

**Source quote (WRAPPER, Phase 0 digest):**
```
SECTION B EXECUTION (107 lines): [list ALL 71 rule IDs: S-01 through S-15, U-01 through U-10,
C-01 through C-18, MC-01 through MC-08, SC-01 through SC-08, MG-01 through MG-05, P-01 through P-08]
```

**What the FINAL prompt says (FINAL prompt footer):**
```
Total rule IDs: 87 (S:15, U:10, C:19, MC:8, SC:8, MG:5, P:8, CT:8, RP:4)
```

**Gap:** The WRAPPER says 71 rules. The FINAL prompt says 87 rules. The WRAPPER does not include CT-01 through CT-08 (Content Transformation, 8 rules) or RP-01 through RP-04 (Recovery Protocols, 4 rules). These 12 additional rules are in B11 and B12 of the FINAL prompt but are not listed in the WRAPPER's digest template.

**Insertable text (update WRAPPER Phase 0 digest):**
```
SECTION B EXECUTION (107 lines): [list ALL 87 rule IDs:
  S-01 through S-15, U-01 through U-10, C-01 through C-19, MC-01 through MC-08,
  SC-01 through SC-08, MG-01 through MG-05, P-01 through P-08,
  CT-01 through CT-08, RP-01 through RP-04]
```

**Placement:** WRAPPER, Phase 0, digest template SECTION B line.

---

### FINDING W-05 -- Wrapper Missing Planner Agent (Pass 0.5) [CRITICAL]

**Source quote (WRAPPER, Phase 2):**
```
Pass 0: Content Architecture (2 Opus agents) [content-architect, metaphor-agent]
Pass 1: Spatial Skeleton (2 Sonnet builders + 1 Sonnet auditor)
```

**What the FINAL prompt says (C1):**
```
PASS 0.5: Build Planning
  - Planner (Opus): receives content assessment + metaphor derivation, produces build plan
    Reads: mechanism-catalog.md, semantic-rules.md, 16-multi-coherence-invocation.md...
    Produces: 03-build-plan.md
```

**Gap:** The WRAPPER completely omits Pass 0.5 (Planner agent). The WRAPPER jumps from Pass 0 (2 agents) directly to Pass 1 (skeleton builders). The Planner (BG-01 fix that was BLOCKING in the FINAL prompt) is missing from the WRAPPER's execution sequence.

**Insertable text (add to WRAPPER Phase 2 between Pass 0 and Pass 1):**
```
### Pass 0.5: Build Planning (1 Opus planner)

**Agent: planner (Opus)**
- Reads: 01-content-assessment.md, 02-metaphor-derivation.md, mechanism-catalog.md,
         semantic-rules.md, 16-multi-coherence-invocation.md, 15-scale-channel-invocation.md
- Produces: 03-build-plan.md containing:
  * Spatial budget table (per-zone: content height, void height, mechanism count, ratio)
  * Mechanism deployment map (per-category minimums: Spatial:1+, Hierarchy:1+, Component:1+, Depth:1+, Structure/Nav:1+)
  * Transition plan (3+ types, no identical adjacent)
  * Designed moment locations (1 per scroll quartile)
  * Reinforcing pair definitions (>= 2 pairs for C-08 gate, >= 3 for MC-02 aspiration)
  * MC plan (>= 3 reinforcing, >= 2 modulating, >= 1 cascade)
- Gate 0.5: Content quality (CT-01 through CT-08 -- zero verbatim source sentences, 2500-4000 words)
```

**Placement:** WRAPPER, Phase 2, between Pass 0 and Pass 1.

---

### FINDING W-06 -- Wrapper Missing Content Adapter (Pass 0 scope) [IMPORTANT]

**Source quote (WRAPPER, Phase 2, Pass 0):**
```
Agent: content-architect (Opus)
- Executes: TC Phase 0 (content assessment)
- Produces: 01-content-assessment.md with word count per section, content type mix...
```

**What the FINAL prompt says (C1):**
```
PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table.
    ALSO: adapt RESEARCH-SYNTHESIS.md prose into showcase-ready sections
    (research register -> reader-friendly register). Output: 01-adapted-content.md.
```

**Gap:** The WRAPPER's content-architect only produces 01-content-assessment.md. The FINAL prompt (HP-03 fix) requires the Content Architect to ALSO produce 01-adapted-content.md (prose transformation from research register to reader-friendly register). This was a HIGH-priority fix that is present in the FINAL prompt but absent from the WRAPPER.

**Insertable text (update WRAPPER Pass 0 content-architect):**
```
- ALSO produces: 01-adapted-content.md -- all page prose rewritten in final form:
  * Research register -> reader-friendly register
  * All headings reader-facing (not research-facing: wrong: "R3-R5 Synthesis: Density Patterns")
  * 2500-4000 words total prose
  * Zero verbatim source sentences (CT-01)
  * No hedging phrases, no forward references, no unexpanded acronyms (CT-06)
```

**Placement:** WRAPPER, Phase 2, Pass 0, content-architect agent definition.

---

### FINDING W-07 -- Wrapper Staged Downgrade Tier Names Inconsistent [NICE-TO-HAVE]

**Source quote (WRAPPER, Phase 5, If Gate Fails):**
```
After 2 failures: ABORT that pass. Ship at lower tier:
  - Pass 2+ complete = ship as CEILING-PLUS
  - Pass 1 complete = ship as CEILING-MINUS
  - Pass 1 failing = ABORT entirely
```

**What the FINAL prompt says (C4):**
```
STAGED DOWNGRADE at 240 min:
  Pass 2 complete = ship as CEILING-PLUS. Pass 1 complete = ship as CEILING-MINUS.
  Pass 1 failing = ABORT.
```

**Gap:** The WRAPPER triggers staged downgrade on gate failure (per-gate) while the FINAL prompt triggers it at 240 min elapsed. These are different trigger conditions. The WRAPPER's condition (2 gate failures) and the FINAL prompt's condition (240 min) are both valid but should be unified.

**Insertable text (clarify trigger conditions in WRAPPER):**
```
Staged downgrade triggers at EITHER condition (whichever comes first):
  Condition A: 2 consecutive gate failures on same gate (gate-failure-based abort)
  Condition B: 240 minutes elapsed since experiment start (time-based abort)
```

**Placement:** WRAPPER, Phase 5 failure recovery section.

---

## SUMMARY TABLE

### By Source File

| Source | Total Findings | CRITICAL | IMPORTANT | NICE-TO-HAVE |
|--------|---------------|----------|-----------|--------------|
| File 17 (PA Operational) | 14 | 5 | 8 | 1 |
| File 18 (Anti-Skimming) | 6 | 1 | 3 | 2 |
| File 19 (Soundness) | 8 | 3 | 4 | 1 |
| File 20 (Invocation Guarantee) | 10 | 3 | 6 | 1 |
| AUXILIARY WRAPPER | 7 | 4 | 2 | 1 |
| **TOTAL** | **45** | **16** | **23** | **6** |

### Critical Findings (Must Fix Before Execution)

| # | Finding | Source | Description |
|---|---------|--------|-------------|
| 1 | 17-01 | File 17 | Auditor A assignment discrepancy (PA-03 presence) |
| 2 | 17-02 | File 17 | ADV auditor question count mismatch (4 vs 6 questions) |
| 3 | 17-03 | File 17 | PA-05c 3-part sub-dimension rubric missing |
| 4 | 17-06 | File 17 | PA-44 metaphor scoring scale (0-20/20-50/50-80/80-100%) missing |
| 5 | 17-10 | File 17 | Screenshot viewport spec is 3-way inconsistent (3/4 viewports) |
| 6 | 17-12 | File 17 | PA-05 calibration table per-score missing |
| 7 | 18-01 | File 18 | Kill criteria not in primacy position (buried in B1) |
| 8 | 19-01 | File 19 | Container width CSS vs visual band distinction absent |
| 9 | 19-02 | File 19 | Void threshold 2160px is a mathematical error (width vs height) |
| 10 | 19-03 | File 19 | "Designed moment" undefined operationally |
| 11 | 20-01 | File 20 | Rule acknowledgment protocol absent from CP-A |
| 12 | 20-02 | File 20 | Section checksum phrases not specified |
| 13 | 20-03 | File 20 | CP-A/CP-B response templates incomplete |
| 14 | W-01 | WRAPPER | Wrong file path (old v1 not v2 FINAL prompt) |
| 15 | W-02 | WRAPPER | Auditor assignments completely contradict C4 |
| 16 | W-05 | WRAPPER | Planner (Pass 0.5) completely missing from WRAPPER |

### Top Priority Action Items

1. **FIX W-02 IMMEDIATELY** -- WRAPPER will spawn auditors with wrong question sets
2. **FIX W-01 IMMEDIATELY** -- WRAPPER will read wrong prompt file
3. **FIX W-05 IMMEDIATELY** -- WRAPPER omits Planner agent entirely
4. **FIX 19-02** -- void threshold 2160px is a mathematical error; use measurement protocol
5. **FIX 19-03** -- "designed moment" must be operationally defined
6. **FIX 17-03 + 17-12** -- PA-05c rubric and calibration table are essential for auditor scoring
7. **FIX 20-01** -- Rule acknowledgment in CP-A is the primary invocation guarantee mechanism
8. **ADD 18-01** -- Kill criteria should be in primacy position

---

**END SCAN-D**
**Total findings: 45 (16 CRITICAL, 23 IMPORTANT, 6 NICE-TO-HAVE)**
**Most critical gap: AUXILIARY-EXECUTION-WRAPPER has 3 CRITICAL structural errors that will cause execution to fail immediately (wrong file path, wrong auditor assignments, missing Planner agent)**
