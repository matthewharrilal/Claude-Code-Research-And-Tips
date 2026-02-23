# Extraction: Diagrams 9, 10, and 11
## Source: VISUAL-ARCHITECTURE.md (lines 707-962)

---

## DIAGRAM 9: EXPERIMENT PROTOCOL DECISION TREE (lines 707-805)

### ITEM 1
- **Diagram:** 9
- **Line range:** 707
- **Type:** DECISION
- **Exact text:** "EXPERIMENT PROTOCOL DECISION TREE"
- **Actionable implication:** The experiment validation process follows a decision-tree structure with branching outcomes at each stage.

### ITEM 2
- **Diagram:** 9
- **Line range:** 711-712
- **Type:** PROCESS
- **Exact text:** "EXPERIMENT PROTOCOL / 4 Stages, Progressive"
- **Actionable implication:** The experiment protocol consists of exactly 4 stages that are progressive (each builds on the previous), not independent.

### ITEM 3
- **Diagram:** 9
- **Line range:** 715
- **Type:** PROCESS
- **Exact text:** "STAGE 0: SMOKE TEST (3 hours, 1 run)"
- **Actionable implication:** Stage 0 must be budgeted for 3 hours and requires exactly 1 experimental run.

### ITEM 4
- **Diagram:** 9
- **Line range:** 717
- **Type:** DECISION
- **Exact text:** "Pipeline v3 on Gas Town content"
- **Actionable implication:** Stage 0 must use the Gas Town content specifically — not arbitrary content.

### ITEM 5
- **Diagram:** 9
- **Line range:** 718
- **Type:** DECISION
- **Exact text:** "Opus builder, 73-line brief, single pass"
- **Actionable implication:** Stage 0 requires three specific constraints: Opus model for the builder agent, the 73-line brief format, and a single-pass build (no iteration).

### ITEM 6
- **Diagram:** 9
- **Line range:** 722
- **Type:** THRESHOLD
- **Exact text:** "PA-05 ≥ 2.0?"
- **Actionable implication:** Stage 0 pass/fail gate is PA-05 score of 2.0 or higher; below 2.0 means the brief is broken.

### ITEM 7
- **Diagram:** 9
- **Line range:** 727-728
- **Type:** PROCESS
- **Exact text:** "Continue to Stage 1"
- **Actionable implication:** If PA-05 >= 2.0, proceed to Stage 1 without modification.

### ITEM 8
- **Diagram:** 9
- **Line range:** 728-730
- **Type:** WARNING
- **Exact text:** "STOP & DEBUG / Brief broken"
- **Actionable implication:** If PA-05 < 2.0 at Stage 0, the entire pipeline must halt and the brief itself must be debugged before proceeding — do NOT continue to Stage 1.

### ITEM 9
- **Diagram:** 9
- **Line range:** 732
- **Type:** PROCESS
- **Exact text:** "STAGE 1: Q20 SHORTCUT (6 hours, 2 runs)"
- **Actionable implication:** Stage 1 must be budgeted for 6 hours and requires exactly 2 experimental runs.

### ITEM 10
- **Diagram:** 9
- **Line range:** 734-735
- **Type:** DECISION
- **Exact text:** "OLD Flagship prompt + ONLY 25-line threshold appendix. Same content."
- **Actionable implication:** Stage 1 uses the OLD (pre-v3) Flagship prompt with ONLY a 25-line threshold appendix added — not the full v3 pipeline. Same content as Stage 0.

### ITEM 11
- **Diagram:** 9
- **Line range:** 736
- **Type:** DECISION
- **Exact text:** "Tests: Are thresholds the dominant cause?"
- **Actionable implication:** Stage 1's scientific purpose is to isolate whether perception thresholds alone are the dominant variable causing quality improvement.

### ITEM 12
- **Diagram:** 9
- **Line range:** 740
- **Type:** THRESHOLD
- **Exact text:** "Δ PA-05 ≥ +0.5?"
- **Actionable implication:** Stage 1 success threshold is a PA-05 improvement of at least +0.5 over the old Flagship prompt baseline.

### ITEM 13
- **Diagram:** 9
- **Line range:** 745-746
- **Type:** RECOMMENDATION
- **Exact text:** "Thresholds are high-leverage / Continue"
- **Actionable implication:** If delta >= +0.5, thresholds are confirmed as the high-leverage intervention and the team should continue to Stage 2.

### ITEM 14
- **Diagram:** 9
- **Line range:** 746-747
- **Type:** RECOMMENDATION
- **Exact text:** "Thresholds alone insufficient. / Still continue."
- **Actionable implication:** Even if delta < +0.5, the protocol does NOT stop — it continues to Stage 2 anyway. Thresholds being insufficient is informative but not blocking.

### ITEM 15
- **Diagram:** 9
- **Line range:** 750
- **Type:** PROCESS
- **Exact text:** "STAGE 2: HEAD-TO-HEAD (12 hours, 4 runs)"
- **Actionable implication:** Stage 2 must be budgeted for 12 hours and requires exactly 4 experimental runs.

### ITEM 16
- **Diagram:** 9
- **Line range:** 752
- **Type:** DECISION
- **Exact text:** "Old pipeline vs v3 on TWO content types"
- **Actionable implication:** Stage 2 is a controlled comparison: old pipeline versus v3, tested on two different content types to check for content-dependence.

### ITEM 17
- **Diagram:** 9
- **Line range:** 753
- **Type:** DECISION
- **Exact text:** "(Gas Town + RESEARCH-SYNTHESIS)"
- **Actionable implication:** The two content types for Stage 2 are specifically Gas Town and RESEARCH-SYNTHESIS — both must be used.

### ITEM 18
- **Diagram:** 9
- **Line range:** 754
- **Type:** DECISION
- **Exact text:** "Opus builder both. Blind PA evaluation."
- **Actionable implication:** Stage 2 requires Opus model for builders in BOTH conditions, and the PA evaluation must be BLIND (evaluators do not know which pipeline produced which output).

### ITEM 19
- **Diagram:** 9
- **Line range:** 758-759
- **Type:** THRESHOLD
- **Exact text:** "v3 > old on BOTH content types?"
- **Actionable implication:** Stage 2 success criterion is v3 outperforming old pipeline on BOTH content types, not just one.

### ITEM 20
- **Diagram:** 9
- **Line range:** 764-766
- **Type:** RECOMMENDATION
- **Exact text:** "v3 validated. Stage 3 for dose-response."
- **Actionable implication:** If v3 wins on both content types, v3 is validated and Stage 3 is used for dose-response fine-tuning.

### ITEM 21
- **Diagram:** 9
- **Line range:** 764-766
- **Type:** RECOMMENDATION
- **Exact text:** "Content-dependent. Stage 3."
- **Actionable implication:** If results are mixed (v3 wins on one content type but not the other), the result is "content-dependent" and Stage 3 is still needed for investigation.

### ITEM 22
- **Diagram:** 9
- **Line range:** 764-766
- **Type:** WARNING
- **Exact text:** "v3 needs rethinking. Investigate."
- **Actionable implication:** If v3 loses on BOTH content types, v3 needs fundamental rethinking — do not proceed to Stage 3 as planned.

### ITEM 23
- **Diagram:** 9
- **Line range:** 769
- **Type:** PROCESS
- **Exact text:** "STAGE 3: VARIABLE ISOLATION (18 hours, 6 runs)"
- **Actionable implication:** Stage 3 must be budgeted for 18 hours and requires exactly 6 experimental runs.

### ITEM 24
- **Diagram:** 9
- **Line range:** 771-773
- **Type:** PROCESS
- **Exact text:** "Dose-response curve: old → +thresholds → +recipe → -suppress → 73-line → +multi-coherence → full v3"
- **Actionable implication:** Stage 3 runs a 7-point dose-response curve with these exact incremental additions: (1) old baseline, (2) add thresholds, (3) add recipe format, (4) remove suppressors, (5) switch to 73-line brief, (6) add multi-coherence, (7) full v3.

### ITEM 25
- **Diagram:** 9
- **Line range:** 775
- **Type:** DECISION
- **Exact text:** "Identifies WHICH changes cause improvement"
- **Actionable implication:** Stage 3's scientific purpose is causal isolation — determining which specific v3 changes cause quality improvement through incremental addition.

### ITEM 26
- **Diagram:** 9
- **Line range:** 779
- **Type:** PROCESS
- **Exact text:** "STAGE 4: FLAGSHIP EXISTENCE PROOF (5 hours, 1-2 runs)"
- **Actionable implication:** Stage 4 must be budgeted for 5 hours and requires 1-2 experimental runs.

### ITEM 27
- **Diagram:** 9
- **Line range:** 781-783
- **Type:** DECISION
- **Exact text:** "Maximum investment: 3-pass + disposition + worked examples + compositional critic"
- **Actionable implication:** Stage 4 uses maximum pipeline investment — all available features: 3-pass architecture, disposition layer, worked examples, and compositional critic.

### ITEM 28
- **Diagram:** 9
- **Line range:** 783
- **Type:** DECISION
- **Exact text:** "PA + Tier 5 questions"
- **Actionable implication:** Stage 4 evaluation uses both standard PA AND the additional Tier 5 questions (PA-60 through PA-77) for Flagship detection.

### ITEM 29
- **Diagram:** 9
- **Line range:** 785
- **Type:** DECISION
- **Exact text:** "Tests: Is 4/4 even achievable?"
- **Actionable implication:** Stage 4's scientific purpose is an existence proof — determining whether Flagship 4/4 quality is achievable at all, not optimizing for it.

### ITEM 30
- **Diagram:** 9
- **Line range:** 789-790
- **Type:** THRESHOLD
- **Exact text:** "PA-05 ≥ 3.5 AND Tier 5 ≥ 6/8?"
- **Actionable implication:** Stage 4 success requires BOTH conditions: PA-05 >= 3.5 AND Tier 5 score >= 6/8. Both must be met simultaneously.

### ITEM 31
- **Diagram:** 9
- **Line range:** 795-798
- **Type:** RECOMMENDATION
- **Exact text:** "Flagship is ACHIEVABLE. Pipeline v3 works."
- **Actionable implication:** If both thresholds are met, Flagship quality is confirmed as achievable and Pipeline v3 is validated for Flagship-tier output.

### ITEM 32
- **Diagram:** 9
- **Line range:** 795-798
- **Type:** WARNING
- **Exact text:** "Flagship 4/4 may not be a discrete register. Accept Ceiling as maximum."
- **Actionable implication:** If Stage 4 fails, the team must accept that Flagship 4/4 may not exist as a discrete quality register and Ceiling tier may be the practical maximum.

### ITEM 33
- **Diagram:** 9
- **Line range:** 801
- **Type:** VALUE
- **Exact text:** "TOTAL PROGRAM: 44 hours, 14 runs"
- **Actionable implication:** The complete 5-stage experiment program requires 44 hours and 14 total experimental runs.

### ITEM 34
- **Diagram:** 9
- **Line range:** 802
- **Type:** VALUE
- **Exact text:** "CHEAPEST USEFUL: Stage 0+1 = 9 hours"
- **Actionable implication:** The minimum useful experiment (Stages 0+1 only) costs 9 hours and provides smoke test + threshold isolation.

### ITEM 35
- **Diagram:** 9
- **Line range:** 803
- **Type:** VALUE
- **Exact text:** "HIGHEST ROI: Stage 0+1+2 = 21 hours"
- **Actionable implication:** The highest ROI subset (Stages 0+1+2) costs 21 hours and provides smoke test + threshold isolation + head-to-head comparison.

---

## DIAGRAM 10: QUALITY TIER SYSTEM (lines 809-853)

### ITEM 36
- **Diagram:** 10
- **Line range:** 813-815
- **Type:** DECISION
- **Exact text:** "QUALITY TIER SYSTEM / Each tier represents a discrete register of compositional quality"
- **Actionable implication:** Quality tiers are DISCRETE REGISTERS (not a continuous spectrum) — each has qualitatively different compositional behavior.

### ITEM 37
- **Diagram:** 10
- **Line range:** 818
- **Type:** PROCESS
- **Exact text:** "PA-05    CCS     Mechanisms  CSS Lines   Build Time"
- **Actionable implication:** Quality tiers are measured across 5 dimensions: PA-05 score, CCS (Compositional Coupling Score), mechanism count, CSS lines, and build time.

### ITEM 38
- **Diagram:** 10
- **Line range:** 821
- **Type:** DECISION
- **Exact text:** "FLAGSHIP"
- **Actionable implication:** Flagship is the highest quality tier in the system.

### ITEM 39
- **Diagram:** 10
- **Line range:** 822
- **Type:** THRESHOLD
- **Exact text:** "PA-05 ≥3.5, CCS 0.55-0.80"
- **Actionable implication:** Flagship tier requires PA-05 >= 3.5 AND CCS between 0.55 and 0.80.

### ITEM 40
- **Diagram:** 10
- **Line range:** 823
- **Type:** DECISION
- **Exact text:** "Register 3 (ATMOSPHERIC coupling)"
- **Actionable implication:** Flagship operates at Register 3, characterized as "atmospheric coupling" — the highest coupling register.

### ITEM 41
- **Diagram:** 10
- **Line range:** 824
- **Type:** THRESHOLD
- **Exact text:** "16-18 mechanisms, 1000-1500 CSS lines"
- **Actionable implication:** Flagship tier requires 16-18 mechanisms and 1000-1500 CSS lines.

### ITEM 42
- **Diagram:** 10
- **Line range:** 825
- **Type:** WARNING
- **Exact text:** "NEVER ACHIEVED — requires 3-pass + Opus"
- **Actionable implication:** Flagship has NEVER been achieved in experiments. It requires the 3-pass architecture AND Opus model builder.

### ITEM 43
- **Diagram:** 10
- **Line range:** 826
- **Type:** THRESHOLD
- **Exact text:** "Unified pervading metaphor throughout"
- **Actionable implication:** Flagship requires a unified pervading metaphor that extends throughout the entire page — not local metaphors.

### ITEM 44
- **Diagram:** 10
- **Line range:** 827
- **Type:** THRESHOLD
- **Exact text:** "Content-form INDISTINGUISHABLE"
- **Actionable implication:** At Flagship tier, content and form must be indistinguishable — form is not decorating content but is content.

### ITEM 45
- **Diagram:** 10
- **Line range:** 830
- **Type:** DECISION
- **Exact text:** "CEILING"
- **Actionable implication:** Ceiling is the second-highest quality tier in the system.

### ITEM 46
- **Diagram:** 10
- **Line range:** 831
- **Type:** THRESHOLD
- **Exact text:** "PA-05 3.0-3.5, CCS 0.35-0.55"
- **Actionable implication:** Ceiling tier has PA-05 between 3.0-3.5 AND CCS between 0.35-0.55.

### ITEM 47
- **Diagram:** 10
- **Line range:** 832
- **Type:** DECISION
- **Exact text:** "Register 2 (STRUCTURAL coupling)"
- **Actionable implication:** Ceiling operates at Register 2, characterized as "structural coupling."

### ITEM 48
- **Diagram:** 10
- **Line range:** 833
- **Type:** THRESHOLD
- **Exact text:** "12-15 mechanisms, 700-1000 CSS lines"
- **Actionable implication:** Ceiling tier requires 12-15 mechanisms and 700-1000 CSS lines.

### ITEM 49
- **Diagram:** 10
- **Line range:** 834
- **Type:** VALUE
- **Exact text:** "CD-006 (39/40), Gas Town (3.5/4)"
- **Actionable implication:** Ceiling tier has been achieved by CD-006 (scoring 39/40) and Gas Town (scoring 3.5/4 PA-05). These are reference exemplars.

### ITEM 50
- **Diagram:** 10
- **Line range:** 835
- **Type:** THRESHOLD
- **Exact text:** "Multi-coherence LOCAL not GLOBAL"
- **Actionable implication:** Ceiling tier exhibits multi-coherence at a LOCAL level only (within sections) — not GLOBAL (across the entire page). This distinguishes it from Flagship.

### ITEM 51
- **Diagram:** 10
- **Line range:** 838
- **Type:** DECISION
- **Exact text:** "MIDDLE (Default Floor)"
- **Actionable implication:** Middle is the DEFAULT floor — the minimum acceptable tier for any pipeline output.

### ITEM 52
- **Diagram:** 10
- **Line range:** 839
- **Type:** THRESHOLD
- **Exact text:** "PA-05 2.5-3.0, CCS 0.15-0.35"
- **Actionable implication:** Middle tier has PA-05 between 2.5-3.0 AND CCS between 0.15-0.35.

### ITEM 53
- **Diagram:** 10
- **Line range:** 840
- **Type:** DECISION
- **Exact text:** "Register 1 (LOCAL coupling)"
- **Actionable implication:** Middle operates at Register 1, characterized as "local coupling."

### ITEM 54
- **Diagram:** 10
- **Line range:** 841
- **Type:** THRESHOLD
- **Exact text:** "8-10 mechanisms, 350-500 CSS lines"
- **Actionable implication:** Middle tier requires 8-10 mechanisms and 350-500 CSS lines.

### ITEM 55
- **Diagram:** 10
- **Line range:** 842
- **Type:** VALUE
- **Exact text:** "Middle experiment (PA-05 4/4 DESIGNED)"
- **Actionable implication:** The Middle tier was achieved by the Middle experiment, which scored PA-05 4/4 (DESIGNED). This is the reference exemplar.

### ITEM 56
- **Diagram:** 10
- **Line range:** 843
- **Type:** RECOMMENDATION
- **Exact text:** "Highest ROI tier (3-4x richness for +45min)"
- **Actionable implication:** Middle is the highest-ROI tier: it provides 3-4x richness improvement for only +45 minutes of additional build time compared to Floor.

### ITEM 57
- **Diagram:** 10
- **Line range:** 846
- **Type:** DECISION
- **Exact text:** "FLOOR"
- **Actionable implication:** Floor is the lowest quality tier in the system.

### ITEM 58
- **Diagram:** 10
- **Line range:** 847
- **Type:** THRESHOLD
- **Exact text:** "PA-05 <2.5, CCS <0.15"
- **Actionable implication:** Floor tier has PA-05 below 2.5 AND CCS below 0.15.

### ITEM 59
- **Diagram:** 10
- **Line range:** 848
- **Type:** DECISION
- **Exact text:** "Register 0 (NO coupling)"
- **Actionable implication:** Floor operates at Register 0, characterized as "no coupling" — elements exist independently with no compositional relationship.

### ITEM 60
- **Diagram:** 10
- **Line range:** 849
- **Type:** THRESHOLD
- **Exact text:** "5 mechanisms, 150-250 CSS lines"
- **Actionable implication:** Floor tier has approximately 5 mechanisms and 150-250 CSS lines.

### ITEM 61
- **Diagram:** 10
- **Line range:** 850
- **Type:** VALUE
- **Exact text:** "Flagship experiment (PA-05 1.5/4 FAILED)"
- **Actionable implication:** The Flagship experiment (which FAILED) actually scored at Floor tier (PA-05 1.5/4) — demonstrating that over-specification can produce WORSE output than minimal specification.

---

## DIAGRAM 11: WHAT PIPELINE v3 LOOKS LIKE IN PRACTICE (lines 857-959)

### ITEM 62
- **Diagram:** 11
- **Line range:** 861
- **Type:** PROCESS
- **Exact text:** "A SINGLE BUILD: Timeline & Agent Activity"
- **Actionable implication:** Diagram 11 shows the full timeline and agent allocation for a single Pipeline v3 build execution.

### ITEM 63
- **Diagram:** 11
- **Line range:** 864
- **Type:** VALUE
- **Exact text:** "Time  0        15       30       45       60       75       90      105"
- **Actionable implication:** A full Pipeline v3 build spans approximately 0 to 105 minutes across all phases.

### ITEM 64
- **Diagram:** 11
- **Line range:** 867
- **Type:** PROCESS
- **Exact text:** "Phase 0: Content Analysis"
- **Actionable implication:** Phase 0 is the first phase, dedicated to content analysis (not building).

### ITEM 65
- **Diagram:** 11
- **Line range:** 868
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 1"
- **Actionable implication:** Phase 0 requires exactly 1 agent (Agent 1).

### ITEM 66
- **Diagram:** 11
- **Line range:** 869
- **Type:** AGENT_ROLE
- **Exact text:** "(Opus)  │ Read content, classify, map sections, assess metaphor"
- **Actionable implication:** Agent 1 must be Opus model and performs four tasks: read content, classify it, map sections, and assess metaphor potential.

### ITEM 67
- **Diagram:** 11
- **Line range:** 870
- **Type:** VALUE
- **Exact text:** "Output: content map (~35 lines)"
- **Actionable implication:** Phase 0 produces a content map of approximately 35 lines.

### ITEM 68
- **Diagram:** 11
- **Line range:** 864-868
- **Type:** VALUE
- **Exact text:** "Phase 0: Content Analysis" [runs from time 0 to ~15 min based on timeline bar]
- **Actionable implication:** Phase 0 takes approximately 15 minutes.

### ITEM 69
- **Diagram:** 11
- **Line range:** 873
- **Type:** PROCESS
- **Exact text:** "Phase 1: Brief Assembly"
- **Actionable implication:** Phase 1 is dedicated to assembling the brief from the template and content map.

### ITEM 70
- **Diagram:** 11
- **Line range:** 874
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 2"
- **Actionable implication:** Phase 1 requires exactly 1 agent (Agent 2), separate from Agent 1.

### ITEM 71
- **Diagram:** 11
- **Line range:** 875
- **Type:** AGENT_ROLE
- **Exact text:** "(Opus)           │ Merge 73-line template + content map"
- **Actionable implication:** Agent 2 must be Opus model and merges the 73-line template with the content map from Phase 0.

### ITEM 72
- **Diagram:** 11
- **Line range:** 876
- **Type:** VALUE
- **Exact text:** "Output: activation brief (~113 lines)"
- **Actionable implication:** Phase 1 produces an activation brief of approximately 113 lines (73-line template + ~35-line content map + integration).

### ITEM 73
- **Diagram:** 11
- **Line range:** 874
- **Type:** VALUE
- **Exact text:** "Agent 2          ████████" [runs from time ~15 to ~30 based on timeline bar]
- **Actionable implication:** Phase 1 takes approximately 15 minutes (from minute 15 to minute 30).

### ITEM 74
- **Diagram:** 11
- **Line range:** 879
- **Type:** PROCESS
- **Exact text:** "Phase 2: Building"
- **Actionable implication:** Phase 2 is the actual building phase where HTML/CSS is produced.

### ITEM 75
- **Diagram:** 11
- **Line range:** 880
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 3"
- **Actionable implication:** Phase 2 requires exactly 1 builder agent (Agent 3).

### ITEM 76
- **Diagram:** 11
- **Line range:** 881
- **Type:** AGENT_ROLE
- **Exact text:** "(Opus)                    │ Build + self-evaluate + adjust"
- **Actionable implication:** Agent 3 (the builder) must be Opus model and follows a build-self-evaluate-adjust cycle within a single pass.

### ITEM 77
- **Diagram:** 11
- **Line range:** 882-883
- **Type:** PROCESS
- **Exact text:** "Zone1→screenshot→Zone2-3→screenshot→ / Zone4+footer→final screenshot"
- **Actionable implication:** The builder follows a zone-by-zone workflow: build Zone 1, take screenshot, build Zones 2-3, take screenshot, build Zone 4 + footer, take final screenshot. 3 screenshot checkpoints during build.

### ITEM 78
- **Diagram:** 11
- **Line range:** 884
- **Type:** VALUE
- **Exact text:** "Output: complete HTML (800-1200 CSS)"
- **Actionable implication:** Phase 2 produces a complete HTML file with 800-1200 lines of CSS.

### ITEM 79
- **Diagram:** 11
- **Line range:** 880
- **Type:** VALUE
- **Exact text:** "Agent 3                   ████████████████████████████████" [runs from time ~30 to ~75 based on timeline bar]
- **Actionable implication:** Phase 2 (building) takes approximately 45 minutes (from minute 30 to minute 75) — the longest single phase.

### ITEM 80
- **Diagram:** 11
- **Line range:** 887-890
- **Type:** PROCESS
- **Exact text:** "Phase 3: Screenshot Capture"
- **Actionable implication:** Phase 3 begins with screenshot capture by the team lead.

### ITEM 81
- **Diagram:** 11
- **Line range:** 888
- **Type:** AGENT_ROLE
- **Exact text:** "Lead"
- **Actionable implication:** Screenshot capture is performed by the team LEAD agent, not a worker agent.

### ITEM 82
- **Diagram:** 11
- **Line range:** 889
- **Type:** PROCESS
- **Exact text:** "1440+1024+768"
- **Actionable implication:** Screenshots must be captured at 3 viewport widths: 1440px, 1024px, and 768px.

### ITEM 83
- **Diagram:** 11
- **Line range:** 892
- **Type:** PROCESS
- **Exact text:** "Phase 3: PA Audit (parallel)"
- **Actionable implication:** PA audit runs in Phase 3 as a parallel operation alongside/after screenshot capture.

### ITEM 84
- **Diagram:** 11
- **Line range:** 893
- **Type:** AGENT_ROLE
- **Exact text:** "PA-1 thru PA-9"
- **Actionable implication:** PA audit requires 9 parallel PA auditor agents (PA-1 through PA-9).

### ITEM 85
- **Diagram:** 11
- **Line range:** 894
- **Type:** AGENT_ROLE
- **Exact text:** "(9 Opus)"
- **Actionable implication:** All 9 PA auditor agents must be Opus model.

### ITEM 86
- **Diagram:** 11
- **Line range:** 895
- **Type:** AGENT_ROLE
- **Exact text:** "+ Integrative"
- **Actionable implication:** In addition to 9 PA auditors, there is an Integrative agent that synthesizes their findings.

### ITEM 87
- **Diagram:** 11
- **Line range:** 897
- **Type:** PROCESS
- **Exact text:** "Phase 3: Weaver"
- **Actionable implication:** Phase 3 concludes with a Weaver agent that produces the final verdict.

### ITEM 88
- **Diagram:** 11
- **Line range:** 898
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 15"
- **Actionable implication:** The Weaver is Agent 15, indicating the full pipeline uses 15 agents total.

### ITEM 89
- **Diagram:** 11
- **Line range:** 899
- **Type:** AGENT_ROLE
- **Exact text:** "(Opus)                                                                │Verd│"
- **Actionable implication:** The Weaver agent must be Opus model and produces the final VERDICT.

### ITEM 90
- **Diagram:** 11
- **Line range:** 903
- **Type:** VALUE
- **Exact text:** "TOTAL: ~80-105 min  │  15 agents  │  ~113 lines specification"
- **Actionable implication:** A full Pipeline v3 build requires approximately 80-105 minutes, 15 agents total, and uses approximately 113 lines of specification.

### ITEM 91
- **Diagram:** 11
- **Line range:** 905-906
- **Type:** VALUE
- **Exact text:** "Compare old pipeline: / ~240-400 min  │  19-34 agents  │  963 lines specification"
- **Actionable implication:** The old pipeline comparison baseline: 240-400 minutes, 19-34 agents, 963 lines specification. Pipeline v3 is 2.5-4x faster, uses fewer agents, and has 88% fewer specification lines.

---

## STATUS: Files Produced by This Research Team (lines 912-959)

### ITEM 92
- **Diagram:** 11 (status section)
- **Line range:** 916
- **Type:** FILE_REF
- **Exact text:** "PIPELINE DESIGN REPORTS (11/11 complete)"
- **Actionable implication:** All 11 pipeline design reports are complete and available as inputs.

### ITEM 93
- **Diagram:** 11 (status section)
- **Line range:** 918
- **Type:** FILE_REF
- **Exact text:** "01  Architecture from first principles                  ✅  ~580 ln"
- **Actionable implication:** Report 01 (Architecture from first principles, ~580 lines) is complete and available.

### ITEM 94
- **Diagram:** 11 (status section)
- **Line range:** 919
- **Type:** FILE_REF
- **Exact text:** "02  Minimal constraint set (73 lines)                   ✅  ~450 ln"
- **Actionable implication:** Report 02 (Minimal constraint set producing the 73-line brief, ~450 lines) is complete and available.

### ITEM 95
- **Diagram:** 11 (status section)
- **Line range:** 920
- **Type:** FILE_REF
- **Exact text:** "03  Dispositional recipe layer (8 instructions)         ✅  ~650 ln"
- **Actionable implication:** Report 03 (Dispositional recipe layer with 8 instructions, ~650 lines) is complete and available.

### ITEM 96
- **Diagram:** 11 (status section)
- **Line range:** 921
- **Type:** FILE_REF
- **Exact text:** "04  Suppressor-free specification format                ✅  ~445 ln"
- **Actionable implication:** Report 04 (Suppressor-free specification format, ~445 lines) is complete and available.

### ITEM 97
- **Diagram:** 11 (status section)
- **Line range:** 922
- **Type:** FILE_REF
- **Exact text:** "05  Content-form routing mechanism                      ✅  ~550 ln"
- **Actionable implication:** Report 05 (Content-form routing mechanism, ~550 lines) is complete and available.

### ITEM 98
- **Diagram:** 11 (status section)
- **Line range:** 923
- **Type:** FILE_REF
- **Exact text:** "06  13 irreducible concepts → pipeline map              ✅  ~450 ln"
- **Actionable implication:** Report 06 (13 irreducible concepts mapped to pipeline, ~450 lines) is complete and available.

### ITEM 99
- **Diagram:** 11 (status section)
- **Line range:** 924
- **Type:** FILE_REF
- **Exact text:** "07  Blind spot coverage mechanisms                      ✅  ~530 ln"
- **Actionable implication:** Report 07 (Blind spot coverage mechanisms, ~530 lines) is complete and available.

### ITEM 100
- **Diagram:** 11 (status section)
- **Line range:** 925
- **Type:** FILE_REF
- **Exact text:** "08  Activation architecture (not transmission)          ✅  ~580 ln"
- **Actionable implication:** Report 08 (Activation architecture — activation not transmission, ~580 lines) is complete and available.

### ITEM 101
- **Diagram:** 11 (status section)
- **Line range:** 926
- **Type:** FILE_REF
- **Exact text:** "09  Iteration architecture (3-pass)                     ✅  ~650 ln"
- **Actionable implication:** Report 09 (Iteration/3-pass architecture, ~650 lines) is complete and available.

### ITEM 102
- **Diagram:** 11 (status section)
- **Line range:** 927
- **Type:** FILE_REF
- **Exact text:** "10  Experiment protocol (4 stages)                      ✅  ~500 ln"
- **Actionable implication:** Report 10 (Experiment protocol with 4 stages, ~500 lines) is complete and available.

### ITEM 103
- **Diagram:** 11 (status section)
- **Line range:** 928
- **Type:** FILE_REF
- **Exact text:** "11  CSS value tables and structural directives           ✅  ~750 ln"
- **Actionable implication:** Report 11 (CSS value tables and structural directives, ~750 lines) is complete and available.

### ITEM 104
- **Diagram:** 11 (status section)
- **Line range:** 930
- **Type:** FILE_REF
- **Exact text:** "CROSS-REFERENCE AUDITS (7/7 complete)"
- **Actionable implication:** All 7 cross-reference audits are complete and available as inputs.

### ITEM 105
- **Diagram:** 11 (status section)
- **Line range:** 932
- **Type:** FILE_REF
- **Exact text:** "A1  Contradiction matrix (12 contradictions found)      ✅  done"
- **Actionable implication:** Audit A1 (Contradiction matrix) found 12 contradictions that must be resolved or addressed.

### ITEM 106
- **Diagram:** 11 (status section)
- **Line range:** 933
- **Type:** FILE_REF
- **Exact text:** "A2  Evidence grounding (67 claims audited)              ✅  done"
- **Actionable implication:** Audit A2 (Evidence grounding) audited 67 claims for evidence basis.

### ITEM 107
- **Diagram:** 11 (status section)
- **Line range:** 934
- **Type:** FILE_REF
- **Exact text:** "A3  Quantitative verification (347 claims, 83.3%)       ✅  done"
- **Actionable implication:** Audit A3 (Quantitative verification) verified 347 claims with 83.3% accuracy — 16.7% of quantitative claims may be inaccurate.

### ITEM 108
- **Diagram:** 11 (status section)
- **Line range:** 935
- **Type:** FILE_REF
- **Exact text:** "A4  Knowledge flow cluster audit (42-46)                ✅  done"
- **Actionable implication:** Audit A4 audited knowledge flow cluster (reports 42-46).

### ITEM 109
- **Diagram:** 11 (status section)
- **Line range:** 936
- **Type:** FILE_REF
- **Exact text:** "A5  Provenance + gaps cluster audit (47-53)             ✅  done"
- **Actionable implication:** Audit A5 audited provenance and gaps cluster (reports 47-53).

### ITEM 110
- **Diagram:** 11 (status section)
- **Line range:** 937
- **Type:** FILE_REF
- **Exact text:** "A6  Flagship + intervention cluster audit (54-59)       ✅  done"
- **Actionable implication:** Audit A6 audited Flagship and intervention cluster (reports 54-59).

### ITEM 111
- **Diagram:** 11 (status section)
- **Line range:** 938
- **Type:** FILE_REF
- **Exact text:** "A7  Actionability audit (25 items, 4 tiers)             ✅  done"
- **Actionable implication:** Audit A7 assessed actionability of 25 items across 4 tiers.

### ITEM 112
- **Diagram:** 11 (status section)
- **Line range:** 940
- **Type:** FILE_REF
- **Exact text:** "BLIND SPOT + GAS TOWN INVESTIGATIONS (8/8 complete)"
- **Actionable implication:** All 8 blind spot and Gas Town investigation reports are complete and available.

### ITEM 113
- **Diagram:** 11 (status section)
- **Line range:** 942
- **Type:** FILE_REF
- **Exact text:** "B1  Temporal composition                                ✅  done"
- **Actionable implication:** Investigation B1 (Temporal composition) is complete and available.

### ITEM 114
- **Diagram:** 11 (status section)
- **Line range:** 943
- **Type:** FILE_REF
- **Exact text:** "B2  Reader model                                        ✅  done"
- **Actionable implication:** Investigation B2 (Reader model) is complete and available.

### ITEM 115
- **Diagram:** 11 (status section)
- **Line range:** 944
- **Type:** FILE_REF
- **Exact text:** "B3  Emotional arc                                       ✅  done"
- **Actionable implication:** Investigation B3 (Emotional arc) is complete and available.

### ITEM 116
- **Diagram:** 11 (status section)
- **Line range:** 945
- **Type:** FILE_REF
- **Exact text:** "B4  Compositional anti-patterns                         ✅  done"
- **Actionable implication:** Investigation B4 (Compositional anti-patterns) is complete and available.

### ITEM 117
- **Diagram:** 11 (status section)
- **Line range:** 946
- **Type:** FILE_REF
- **Exact text:** "B5  Cross-page coherence                                ✅  done"
- **Actionable implication:** Investigation B5 (Cross-page coherence) is complete and available.

### ITEM 118
- **Diagram:** 11 (status section)
- **Line range:** 947
- **Type:** FILE_REF
- **Exact text:** "B6  Revision quality                                    ✅  done"
- **Actionable implication:** Investigation B6 (Revision quality) is complete and available.

### ITEM 119
- **Diagram:** 11 (status section)
- **Line range:** 948
- **Type:** FILE_REF
- **Exact text:** "B7  Gas Town flagship gap (10-dimension remediation)    ✅  done"
- **Actionable implication:** Investigation B7 (Gas Town flagship gap with 10-dimension remediation plan) is complete and available.

### ITEM 120
- **Diagram:** 11 (status section)
- **Line range:** 949
- **Type:** FILE_REF
- **Exact text:** "B8  \"Wrong mode\" deep investigation                     ✅  done"
- **Actionable implication:** Investigation B8 ("Wrong mode" deep investigation) is complete and available.

### ITEM 121
- **Diagram:** 11 (status section)
- **Line range:** 952
- **Type:** FILE_REF
- **Exact text:** "12  Adversarial pre-review (4 CF, 7 SR, 5 DT)          ✅  done"
- **Actionable implication:** Synthesis report 12 (Adversarial pre-review with 4 counterfactuals, 7 steel-man rebuttals, 5 devil's advocate tests) is complete.

### ITEM 122
- **Diagram:** 11 (status section)
- **Line range:** 953
- **Type:** FILE_REF
- **Exact text:** "A8  Grand synthesis wireframe                           ⏳ pending"
- **Actionable implication:** The grand synthesis wireframe (A8) is STILL PENDING — this is the only incomplete deliverable in the entire research corpus.

### ITEM 123
- **Diagram:** 11 (status section)
- **Line range:** 954
- **Type:** FILE_REF
- **Exact text:** "THIS FILE (VISUAL-ARCHITECTURE.md)                      ✅  v4"
- **Actionable implication:** The Visual Architecture file itself is at version 4 and is complete.

### ITEM 124
- **Diagram:** 11 (status section)
- **Line range:** 957
- **Type:** VALUE
- **Exact text:** "TOTAL PRODUCED: 28 files, ~11,000+ lines of analysis"
- **Actionable implication:** The research corpus totals 28 files with over 11,000 lines of analysis.

### ITEM 125
- **Diagram:** 11 (status section)
- **Line range:** 958
- **Type:** VALUE
- **Exact text:** "TOTAL AGENTS: 38+ launched (11 design + 7 audit + 8 investigation + 6 wave 2 + 6 wave 3)"
- **Actionable implication:** The research team used 38+ agents: 11 design agents, 7 audit agents, 8 investigation agents, 6 Wave 2 agents, and 6 Wave 3 agents.

---

## EXTRACTION SUMMARY

**Total items extracted: 125**

| Diagram | Items | Type Breakdown |
|---------|-------|----------------|
| 9 (Experiment Protocol) | 35 items (1-35) | 6 THRESHOLD, 10 DECISION, 7 PROCESS, 5 RECOMMENDATION, 3 WARNING, 4 VALUE |
| 10 (Quality Tier System) | 26 items (36-61) | 11 THRESHOLD, 6 DECISION, 1 PROCESS, 1 RECOMMENDATION, 1 WARNING, 3 VALUE |
| 11 (Practice + Status) | 64 items (62-125) | 0 THRESHOLD, 1 DECISION, 6 PROCESS, 0 RECOMMENDATION, 0 WARNING, 11 AGENT_ROLE, 12 VALUE, 34 FILE_REF |

**All 3 diagrams fully extracted. Zero items skipped.**
