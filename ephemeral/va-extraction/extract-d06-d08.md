# Extraction: Diagrams 6, 7, and 8 — VISUAL-ARCHITECTURE.md

**Source:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pipeline-v3-research/VISUAL-ARCHITECTURE.md`
**Diagrams:** 6 (lines 480-560), 7 (lines 564-636), 8 (lines 640-703)
**Extraction method:** Zero-loss, line-by-line, every actionable item quoted verbatim.

---

## DIAGRAM 6: 3-PASS ITERATION ARCHITECTURE (Flagship Mode)

### ITEM 1
- **Diagram:** 6
- **Line range:** 486
- **Type:** DECISION
- **Exact text:** "Middle = 1 pass | Ceiling = 2 passes | Flagship = 3 passes"
- **Actionable implication:** Pipeline must route to different pass counts based on quality tier selection.

### ITEM 2
- **Diagram:** 6
- **Line range:** 490
- **Type:** PROCESS
- **Exact text:** "PASS 1: STRUCTURAL SKELETON + PERVADING METAPHOR (20-35 min)"
- **Actionable implication:** Pass 1 must be time-boxed at 20-35 minutes and scoped to structural skeleton and pervading metaphor establishment.

### ITEM 3
- **Diagram:** 6
- **Line range:** 491
- **Type:** DECISION
- **Exact text:** "Mode: GENERATIVE (composing, not complying)"
- **Actionable implication:** Pass 1 builder instructions must activate GENERATIVE/COMPOSING mode, not compliance mode.

### ITEM 4
- **Diagram:** 6
- **Line range:** 492
- **Type:** AGENT_ROLE
- **Exact text:** "Builder: Opus instance A"
- **Actionable implication:** Pass 1 builder must be an Opus model instance.

### ITEM 5
- **Diagram:** 6
- **Line range:** 494
- **Type:** VALUE
- **Exact text:** "Input: Activation brief + content + 73-line constraints"
- **Actionable implication:** Pass 1 input consists of exactly three artifacts: activation brief, content, and 73-line constraint set.

### ITEM 6
- **Diagram:** 6
- **Line range:** 494
- **Type:** THRESHOLD
- **Exact text:** "73-line constraints"
- **Actionable implication:** The constraint set fed to the builder must be capped at 73 lines.

### ITEM 7
- **Diagram:** 6
- **Line range:** 495-496
- **Type:** VALUE
- **Exact text:** "Output: Complete HTML/CSS — complete but raw / Skeleton strong, metaphor established, details rough"
- **Actionable implication:** Pass 1 must produce a complete HTML/CSS file (not a partial), with strong skeleton and established metaphor but rough details.

### ITEM 8
- **Diagram:** 6
- **Line range:** 501
- **Type:** AGENT_ROLE
- **Exact text:** "COMPOSITIONAL CRITIC (Opus — separate agent)"
- **Actionable implication:** A separate Opus agent must serve as compositional critic between passes.

### ITEM 9
- **Diagram:** 6
- **Line range:** 503
- **Type:** DECISION
- **Exact text:** "Views SCREENSHOTS only (not CSS)"
- **Actionable implication:** The compositional critic must receive only screenshots of the page, never raw CSS source code.

### ITEM 10
- **Diagram:** 6
- **Line range:** 504-507
- **Type:** DECISION
- **Exact text:** "Three Laws: / 1. Never name a CSS property / 2. Never reference a threshold / 3. Always suggest a QUALITY, not an ACTION"
- **Actionable implication:** Critic agent prompt must enforce these three laws as hard constraints on its output format.

### ITEM 11
- **Diagram:** 6
- **Line range:** 505
- **Type:** DECISION
- **Exact text:** "1. Never name a CSS property"
- **Actionable implication:** Critic output must be validated to contain zero CSS property names.

### ITEM 12
- **Diagram:** 6
- **Line range:** 506
- **Type:** DECISION
- **Exact text:** "2. Never reference a threshold"
- **Actionable implication:** Critic output must be validated to contain zero numeric threshold references.

### ITEM 13
- **Diagram:** 6
- **Line range:** 507
- **Type:** DECISION
- **Exact text:** "3. Always suggest a QUALITY, not an ACTION"
- **Actionable implication:** Critic output must describe desired qualities (e.g., "energy", "resolution") not prescriptive actions.

### ITEM 14
- **Diagram:** 6
- **Line range:** 509-512
- **Type:** VALUE
- **Exact text:** "Example output: / \"The middle sags — the energy that builds in the first third / dissipates by section 5. The page needs a SECOND CRESCENDO. / The footer wants to resolve but hasn't earned it yet.\""
- **Actionable implication:** This example defines the expected register and granularity of critic feedback — compositional, metaphorical, section-level.

### ITEM 15
- **Diagram:** 6
- **Line range:** 514
- **Type:** WARNING
- **Exact text:** "NOT: \"SC-09 FAILED: stacked gap 210px exceeds 120px threshold\""
- **Actionable implication:** Critic must never produce gate-runner-style output; this is an explicit anti-pattern to block.

### ITEM 16
- **Diagram:** 6
- **Line range:** 516-517
- **Type:** VALUE
- **Exact text:** "Artistic feedback + conviction artifact / (~25 lines transferring compositional logic)"
- **Actionable implication:** Critic output must be approximately 25 lines and must include both artistic feedback and a conviction artifact.

### ITEM 17
- **Diagram:** 6
- **Line range:** 517
- **Type:** THRESHOLD
- **Exact text:** "~25 lines transferring compositional logic"
- **Actionable implication:** Critic-to-builder handoff artifact must be approximately 25 lines.

### ITEM 18
- **Diagram:** 6
- **Line range:** 520
- **Type:** PROCESS
- **Exact text:** "PASS 2: ATMOSPHERIC ENRICHMENT + MECHANISM COUPLING (15-25 min)"
- **Actionable implication:** Pass 2 must be time-boxed at 15-25 minutes and scoped to atmospheric enrichment and mechanism coupling.

### ITEM 19
- **Diagram:** 6
- **Line range:** 521
- **Type:** DECISION
- **Exact text:** "Mode: COMPOSITIONAL (refining relationships, not fixing defects)"
- **Actionable implication:** Pass 2 builder instructions must activate COMPOSITIONAL mode — refining relationships, NOT defect-fixing.

### ITEM 20
- **Diagram:** 6
- **Line range:** 522
- **Type:** AGENT_ROLE
- **Exact text:** "Builder: Opus instance B (FRESH — defeats continuation bias)"
- **Actionable implication:** Pass 2 must use a FRESH Opus instance (not the same as Pass 1) to defeat continuation bias.

### ITEM 21
- **Diagram:** 6
- **Line range:** 522
- **Type:** DECISION
- **Exact text:** "FRESH — defeats continuation bias"
- **Actionable implication:** Each pass must use a separate builder agent to prevent continuation bias from prior pass output.

### ITEM 22
- **Diagram:** 6
- **Line range:** 524
- **Type:** VALUE
- **Exact text:** "Input: Pass 1 output + Critic feedback + value tables"
- **Actionable implication:** Pass 2 input consists of three artifacts: Pass 1 HTML/CSS output, critic feedback, and value tables.

### ITEM 23
- **Diagram:** 6
- **Line range:** 525-526
- **Type:** VALUE
- **Exact text:** "Output: Enriched page — mechanisms coupled, density arc embodied / Mechanisms now INTERACT, not just coexist"
- **Actionable implication:** Pass 2 success criterion is that mechanisms interact/couple rather than merely coexist.

### ITEM 24
- **Diagram:** 6
- **Line range:** 531-532
- **Type:** PROCESS
- **Exact text:** "COMPOSITIONAL CRITIC (second review) / Final impressions only — no structural notes"
- **Actionable implication:** Second critic review is scoped to final impressions only — must NOT include structural feedback.

### ITEM 25
- **Diagram:** 6
- **Line range:** 537
- **Type:** PROCESS
- **Exact text:** "PASS 3: TERMINAL CRAFT + DESIGNED MOMENTS (10-20 min)"
- **Actionable implication:** Pass 3 must be time-boxed at 10-20 minutes and scoped to terminal craft and designed moments.

### ITEM 26
- **Diagram:** 6
- **Line range:** 538
- **Type:** DECISION
- **Exact text:** "Mode: POLISHING (detail attention, not structural change)"
- **Actionable implication:** Pass 3 builder instructions must activate POLISHING mode — detail attention only, no structural changes.

### ITEM 27
- **Diagram:** 6
- **Line range:** 539
- **Type:** AGENT_ROLE
- **Exact text:** "Builder: Opus instance C (or Sonnet for cost efficiency)"
- **Actionable implication:** Pass 3 builder can be Opus instance C or Sonnet (cost optimization option).

### ITEM 28
- **Diagram:** 6
- **Line range:** 541
- **Type:** VALUE
- **Exact text:** "Input: Pass 2 output + Critic's final impressions"
- **Actionable implication:** Pass 3 input consists of two artifacts: Pass 2 output and critic's final impressions.

### ITEM 29
- **Diagram:** 6
- **Line range:** 542-543
- **Type:** VALUE
- **Exact text:** "Output: Finished page — terminal craft, responsive, accessible / \"Designed moments\" — places where something surprises"
- **Actionable implication:** Pass 3 output must include responsiveness, accessibility, and at least one designed moment (surprise element).

### ITEM 30
- **Diagram:** 6
- **Line range:** 548-550
- **Type:** PROCESS
- **Exact text:** "Standard Mode 4 PA Audit / (9 auditors + 1 integrative / + 1 weaver)"
- **Actionable implication:** After all passes, a standard Mode 4 PA audit must run with 9 auditors + 1 integrative + 1 weaver (11 agents total).

### ITEM 31
- **Diagram:** 6
- **Line range:** 555
- **Type:** THRESHOLD
- **Exact text:** "Pass 1 alone: PA-05 ~2.5-3.5 (Register 1-2)"
- **Actionable implication:** Pass 1 alone is expected to produce PA-05 score of 2.5-3.5, Register 1-2.

### ITEM 32
- **Diagram:** 6
- **Line range:** 556
- **Type:** THRESHOLD
- **Exact text:** "+ Pass 2: PA-05 ~3.0-3.8 (Register 2-2.5)"
- **Actionable implication:** After Pass 2, expected PA-05 score is 3.0-3.8, Register 2-2.5.

### ITEM 33
- **Diagram:** 6
- **Line range:** 557
- **Type:** THRESHOLD
- **Exact text:** "+ Pass 3: PA-05 ~3.2-4.0 (Register 2.5-3)"
- **Actionable implication:** After Pass 3, expected PA-05 score is 3.2-4.0, Register 2.5-3.

### ITEM 34
- **Diagram:** 6
- **Line range:** 558
- **Type:** WARNING
- **Exact text:** "Diminishing returns: Pass 4 adds <0.1 with S-20 risk"
- **Actionable implication:** A 4th pass must NOT be attempted — it adds less than 0.1 PA-05 and introduces S-20 risk.

### ITEM 35
- **Diagram:** 6
- **Line range:** 558
- **Type:** THRESHOLD
- **Exact text:** "Pass 4 adds <0.1"
- **Actionable implication:** The maximum expected gain from a 4th pass is less than 0.1 on PA-05.

---

## DIAGRAM 7: 13 IRREDUCIBLE CONCEPTS -> PIPELINE MAPPING

### ITEM 36
- **Diagram:** 7
- **Line range:** 568
- **Type:** DECISION
- **Exact text:** "13 IRREDUCIBLE CONCEPTS: How the Pipeline Addresses Each"
- **Actionable implication:** Pipeline v3 must address all 13 irreducible concepts; none can be dropped.

### ITEM 37
- **Diagram:** 7
- **Line range:** 571
- **Type:** VALUE
- **Exact text:** "7 EXISTING (from 40-concept collapse)"
- **Actionable implication:** 7 of the 13 concepts were distilled from the original 40-concept set.

### ITEM 38
- **Diagram:** 7
- **Line range:** 575-577
- **Type:** DECISION
- **Exact text:** "Builder Cognitive Mode (11 concepts) | ACTIVATED | Dispositional recipe D-01 through D-08 + recipe format | Phase 1 (brief format activates COMPOSING mode)"
- **Actionable implication:** Builder Cognitive Mode is ACTIVATED via dispositional recipes D-01 through D-08 in Phase 1 brief format.

### ITEM 39
- **Diagram:** 7
- **Line range:** 575
- **Type:** VALUE
- **Exact text:** "Builder Cognitive Mode (11 concepts)"
- **Actionable implication:** 11 of the original 40 concepts collapsed into the Builder Cognitive Mode irreducible concept.

### ITEM 40
- **Diagram:** 7
- **Line range:** 576
- **Type:** FILE_REF
- **Exact text:** "Dispositional recipe D-01 through D-08"
- **Actionable implication:** 8 dispositional recipes (D-01 to D-08) must exist and be included in the pipeline.

### ITEM 41
- **Diagram:** 7
- **Line range:** 579-581
- **Type:** DECISION
- **Exact text:** "Content-Form Coupling (9) | SPECIFIED +ACTIVATED | TC brief routing + D-01 content-register reading | Phase 0 (content analysis) + Phase 1"
- **Actionable implication:** Content-Form Coupling is both SPECIFIED and ACTIVATED, requiring TC brief routing and D-01 content-register reading across Phases 0 and 1.

### ITEM 42
- **Diagram:** 7
- **Line range:** 579
- **Type:** VALUE
- **Exact text:** "Content-Form Coupling (9)"
- **Actionable implication:** 9 of the original 40 concepts collapsed into the Content-Form Coupling irreducible concept.

### ITEM 43
- **Diagram:** 7
- **Line range:** 580
- **Type:** FILE_REF
- **Exact text:** "TC brief routing + D-01 content-register reading"
- **Actionable implication:** TC brief routing mechanism and D-01 content-register reading mechanism must both be implemented.

### ITEM 44
- **Diagram:** 7
- **Line range:** 583-585
- **Type:** DECISION
- **Exact text:** "Compression Physics (6) | SPECIFIED | 73-line brief cap + dual-channel architecture | Phase 1 (brief assembly format)"
- **Actionable implication:** Compression Physics is SPECIFIED via 73-line brief cap and dual-channel architecture in Phase 1.

### ITEM 45
- **Diagram:** 7
- **Line range:** 583
- **Type:** VALUE
- **Exact text:** "Compression Physics (6)"
- **Actionable implication:** 6 of the original 40 concepts collapsed into the Compression Physics irreducible concept.

### ITEM 46
- **Diagram:** 7
- **Line range:** 584
- **Type:** THRESHOLD
- **Exact text:** "73-line brief cap"
- **Actionable implication:** The activation brief must be capped at 73 lines.

### ITEM 47
- **Diagram:** 7
- **Line range:** 584
- **Type:** DECISION
- **Exact text:** "dual-channel architecture"
- **Actionable implication:** Brief must use dual-channel architecture (brief + reference files — two delivery channels).

### ITEM 48
- **Diagram:** 7
- **Line range:** 587-589
- **Type:** DECISION
- **Exact text:** "Intentional Composition | ACTIVATED +EMERGENT | Multi-coherence framework + metaphor instruction | Phase 2 (builder applies multi-coherence recipe)"
- **Actionable implication:** Intentional Composition is both ACTIVATED and EMERGENT, addressed via multi-coherence framework and metaphor instruction in Phase 2.

### ITEM 49
- **Diagram:** 7
- **Line range:** 591-593
- **Type:** DECISION
- **Exact text:** "Peak-Valley Architecture | ACTIVATED | D-04 second-half moment + density arc | Phase 2 (builder creates designed moments)"
- **Actionable implication:** Peak-Valley Architecture is ACTIVATED via D-04 second-half moment and density arc in Phase 2.

### ITEM 50
- **Diagram:** 7
- **Line range:** 591
- **Type:** FILE_REF
- **Exact text:** "D-04 second-half moment + density arc"
- **Actionable implication:** Dispositional recipe D-04 must include second-half moment instruction, and density arc must be part of builder input.

### ITEM 51
- **Diagram:** 7
- **Line range:** 595-597
- **Type:** DECISION
- **Exact text:** "Specification Interference (8) | SPECIFIED | Suppressor removal + ≤113 line cap + gates hidden | Phase 1 (brief design avoids all 20 suppress.)"
- **Actionable implication:** Specification Interference is SPECIFIED by removing suppressors, capping at 113 lines, and hiding gates from the builder.

### ITEM 52
- **Diagram:** 7
- **Line range:** 596
- **Type:** THRESHOLD
- **Exact text:** "≤113 line cap"
- **Actionable implication:** Total specification visible to the builder must be 113 lines or fewer.

### ITEM 53
- **Diagram:** 7
- **Line range:** 596
- **Type:** VALUE
- **Exact text:** "Suppressor removal"
- **Actionable implication:** All 20 known quality suppressors must be removed from builder-visible specifications.

### ITEM 54
- **Diagram:** 7
- **Line range:** 597
- **Type:** DECISION
- **Exact text:** "gates hidden"
- **Actionable implication:** Gate runner criteria must be hidden from the builder — builder never sees gate definitions.

### ITEM 55
- **Diagram:** 7
- **Line range:** 597
- **Type:** THRESHOLD
- **Exact text:** "avoids all 20 suppress."
- **Actionable implication:** The brief design must avoid all 20 identified quality suppressors.

### ITEM 56
- **Diagram:** 7
- **Line range:** 599-600
- **Type:** DECISION
- **Exact text:** "Scale-Channel Independence | SPECIFIED | 6-channel framework + value tables | Phase 1 (brief encodes channels)"
- **Actionable implication:** Scale-Channel Independence is SPECIFIED via 6-channel framework and value tables encoded in the Phase 1 brief.

### ITEM 57
- **Diagram:** 7
- **Line range:** 600
- **Type:** FILE_REF
- **Exact text:** "6-channel framework + value tables"
- **Actionable implication:** The 6-channel framework and associated value tables must be included in the brief.

### ITEM 58
- **Diagram:** 7
- **Line range:** 602
- **Type:** VALUE
- **Exact text:** "6 MISSING (newly identified)"
- **Actionable implication:** 6 concepts are NEW — they were not in the original 40-concept set and must be added to Pipeline v3.

### ITEM 59
- **Diagram:** 7
- **Line range:** 604-605
- **Type:** DECISION
- **Exact text:** "Temporal Composition | ACTIVATED | Density arc recipe + D-06 neg space | Phase 1 (brief) + Phase 2 (build)"
- **Actionable implication:** Temporal Composition is ACTIVATED via density arc recipe and D-06 negative space, spanning Phases 1 and 2.

### ITEM 60
- **Diagram:** 7
- **Line range:** 605
- **Type:** FILE_REF
- **Exact text:** "D-06 neg space"
- **Actionable implication:** Dispositional recipe D-06 must include negative space instruction.

### ITEM 61
- **Diagram:** 7
- **Line range:** 607-608
- **Type:** DECISION
- **Exact text:** "Reader Model | SPECIFIED | Reader persona in content analysis | Phase 0 (content analysis output)"
- **Actionable implication:** Reader Model is SPECIFIED via reader persona generated in Phase 0 content analysis.

### ITEM 62
- **Diagram:** 7
- **Line range:** 610-612
- **Type:** DECISION
- **Exact text:** "Emotional Arc | EMERGENT | D-04 + D-05 + arc dispositional framing | Phase 2 (builder produces, cannot be specified)"
- **Actionable implication:** Emotional Arc is EMERGENT — cannot be directly specified, only conditions can be created via D-04, D-05, and arc dispositional framing.

### ITEM 63
- **Diagram:** 7
- **Line range:** 612
- **Type:** WARNING
- **Exact text:** "builder produces, cannot be specified"
- **Actionable implication:** Pipeline must NOT attempt to specify emotional arc directly — it can only create conditions for emergence.

### ITEM 64
- **Diagram:** 7
- **Line range:** 614-615
- **Type:** DECISION
- **Exact text:** "Compositional Anti-Patterns | SPECIFIED | 6 binary anti-pattern gates in gate runner | Phase 3 (gate runner detects)"
- **Actionable implication:** 6 binary anti-pattern gates must be implemented in the gate runner for Phase 3 detection.

### ITEM 65
- **Diagram:** 7
- **Line range:** 615
- **Type:** THRESHOLD
- **Exact text:** "6 binary anti-pattern gates"
- **Actionable implication:** Exactly 6 anti-pattern gates must exist, each must be binary (pass/fail).

### ITEM 66
- **Diagram:** 7
- **Line range:** 617-619
- **Type:** DECISION
- **Exact text:** "Cross-Page Coherence | SPECIFIED | Soul constraints + shared tokens.css + components.css | Phase 1 (shared template ensures family DNA)"
- **Actionable implication:** Cross-Page Coherence is SPECIFIED via soul constraints, shared tokens.css, and shared components.css in Phase 1.

### ITEM 67
- **Diagram:** 7
- **Line range:** 618
- **Type:** FILE_REF
- **Exact text:** "shared tokens.css + components.css"
- **Actionable implication:** tokens.css and components.css must be shared across all pages to ensure cross-page coherence.

### ITEM 68
- **Diagram:** 7
- **Line range:** 621-623
- **Type:** DECISION
- **Exact text:** "Revision Quality | ACTIVATED | REBUILD not FIX + zone-aware editing protocol | Phase 3 (verdict protocol)"
- **Actionable implication:** Revision Quality is ACTIVATED via REBUILD-not-FIX approach and zone-aware editing protocol in Phase 3.

### ITEM 69
- **Diagram:** 7
- **Line range:** 621
- **Type:** DECISION
- **Exact text:** "REBUILD not FIX"
- **Actionable implication:** When revision is needed, the pipeline must REBUILD (fresh pass) not FIX (patch existing output).

### ITEM 70
- **Diagram:** 7
- **Line range:** 622
- **Type:** DECISION
- **Exact text:** "zone-aware editing protocol"
- **Actionable implication:** A zone-aware editing protocol must be implemented for any revision operations.

### ITEM 71
- **Diagram:** 7
- **Line range:** 628
- **Type:** VALUE
- **Exact text:** "SPECIFIED (binary rules, measurable): 6 / 13"
- **Actionable implication:** 6 of 13 concepts are SPECIFIED — addressable with binary rules and measurable gates.

### ITEM 72
- **Diagram:** 7
- **Line range:** 629
- **Type:** VALUE
- **Exact text:** "ACTIVATED (dispositional, recipe): 5 / 13"
- **Actionable implication:** 5 of 13 concepts are ACTIVATED — addressable via dispositional recipes that shape builder behavior.

### ITEM 73
- **Diagram:** 7
- **Line range:** 630
- **Type:** VALUE
- **Exact text:** "EMERGENT (conditions only): 2 / 13"
- **Actionable implication:** 2 of 13 concepts are EMERGENT — pipeline can only create conditions, cannot directly specify or activate.

### ITEM 74
- **Diagram:** 7
- **Line range:** 632-634
- **Type:** RECOMMENDATION
- **Exact text:** "\"Specify what can be encoded at Tier 1-2. / Activate what requires COMPOSING mode. / Create CONDITIONS for what must emerge.\""
- **Actionable implication:** This is the master routing principle for all 13 concepts — each concept must be classified and addressed by the appropriate mechanism type.

---

## DIAGRAM 8: GAS TOWN QUALITY GAP VISUALIZATION

### ITEM 75
- **Diagram:** 8
- **Line range:** 643-644
- **Type:** VALUE
- **Exact text:** "Gas Town: 10-Dimension Flagship Gap / ■ = Current score □ = Gap to 4/5 ★ = Fixable by prompt ▲ = Needs architecture"
- **Actionable implication:** Gas Town is evaluated on 10 dimensions; each dimension has a current score and a fix-type classification.

### ITEM 76
- **Diagram:** 8
- **Line range:** 649-650
- **Type:** THRESHOLD
- **Exact text:** "Pervading Metaphor ▲ | 2.5"
- **Actionable implication:** Gas Town scores 2.5/5 on Pervading Metaphor; requires architecture change (▲) to fix.

### ITEM 77
- **Diagram:** 8
- **Line range:** 652-653
- **Type:** THRESHOLD
- **Exact text:** "Multi-coherence ▲ | 1.5"
- **Actionable implication:** Gas Town scores 1.5/5 on Multi-coherence; requires architecture change (▲) to fix.

### ITEM 78
- **Diagram:** 8
- **Line range:** 655-656
- **Type:** THRESHOLD
- **Exact text:** "Compositional Intelligence ▲ | 2.0"
- **Actionable implication:** Gas Town scores 2.0/5 on Compositional Intelligence; requires architecture change (▲) to fix.

### ITEM 79
- **Diagram:** 8
- **Line range:** 658-659
- **Type:** THRESHOLD
- **Exact text:** "Material Authenticity ★ | 1.5"
- **Actionable implication:** Gas Town scores 1.5/5 on Material Authenticity; fixable by prompt enrichment (★).

### ITEM 80
- **Diagram:** 8
- **Line range:** 661-662
- **Type:** THRESHOLD
- **Exact text:** "Detail Density ★ | 2.0"
- **Actionable implication:** Gas Town scores 2.0/5 on Detail Density; fixable by prompt enrichment (★).

### ITEM 81
- **Diagram:** 8
- **Line range:** 664-665
- **Type:** THRESHOLD
- **Exact text:** "Typographic Craft ★ | 2.0"
- **Actionable implication:** Gas Town scores 2.0/5 on Typographic Craft; fixable by prompt enrichment (★).

### ITEM 82
- **Diagram:** 8
- **Line range:** 667-668
- **Type:** THRESHOLD
- **Exact text:** "Scale Hierarchy CSS | 3.0"
- **Actionable implication:** Gas Town scores 3.0/5 on Scale Hierarchy; fixable by CSS-only changes.

### ITEM 83
- **Diagram:** 8
- **Line range:** 670-671
- **Type:** THRESHOLD
- **Exact text:** "Channel Shifts CSS | 3.0"
- **Actionable implication:** Gas Town scores 3.0/5 on Channel Shifts; fixable by CSS-only changes.

### ITEM 84
- **Diagram:** 8
- **Line range:** 673-674
- **Type:** THRESHOLD
- **Exact text:** "Emotional Arc CSS | 3.5"
- **Actionable implication:** Gas Town scores 3.5/5 on Emotional Arc; fixable by CSS-only changes.

### ITEM 85
- **Diagram:** 8
- **Line range:** 676-677
- **Type:** THRESHOLD
- **Exact text:** "Spatial Confidence CSS | 3.5"
- **Actionable implication:** Gas Town scores 3.5/5 on Spatial Confidence; fixable by CSS-only changes.

### ITEM 86
- **Diagram:** 8
- **Line range:** 681-685
- **Type:** RECOMMENDATION
- **Exact text:** "CSS-only (no prompt change) | Channel Shifts, Emotional Arc, Spatial Confidence | 2.5 → 3.2/5"
- **Actionable implication:** CSS-only fixes on Channel Shifts, Emotional Arc, and Spatial Confidence move average from 2.5 to 3.2/5.

### ITEM 87
- **Diagram:** 8
- **Line range:** 683
- **Type:** THRESHOLD
- **Exact text:** "2.5 → 3.2/5"
- **Actionable implication:** CSS-only intervention tier raises overall average from 2.5 to 3.2 out of 5.

### ITEM 88
- **Diagram:** 8
- **Line range:** 687-689
- **Type:** RECOMMENDATION
- **Exact text:** "Prompt enrichment (add playbooks) | Typographic Craft, Material Authentic., Detail Density | 3.2 → 3.5/5"
- **Actionable implication:** Prompt enrichment with playbooks for Typographic Craft, Material Authenticity, and Detail Density moves average from 3.2 to 3.5/5.

### ITEM 89
- **Diagram:** 8
- **Line range:** 687
- **Type:** THRESHOLD
- **Exact text:** "3.2 → 3.5/5"
- **Actionable implication:** Prompt enrichment tier raises overall average from 3.2 to 3.5 out of 5.

### ITEM 90
- **Diagram:** 8
- **Line range:** 691-694
- **Type:** RECOMMENDATION
- **Exact text:** "Architecture change (pipeline v3 required) | Pervading Metaphor, Multi-coherence, Comp. Intelligence, Scale Hierarchy | 3.5 → 4.0+/5"
- **Actionable implication:** Architecture change (Pipeline v3) is required for Pervading Metaphor, Multi-coherence, Compositional Intelligence, and Scale Hierarchy to reach 4.0+/5.

### ITEM 91
- **Diagram:** 8
- **Line range:** 691
- **Type:** THRESHOLD
- **Exact text:** "3.5 → 4.0+/5"
- **Actionable implication:** Architecture change tier raises overall average from 3.5 to 4.0+ out of 5.

### ITEM 92
- **Diagram:** 8
- **Line range:** 691
- **Type:** DEPENDENCY
- **Exact text:** "pipeline v3 required"
- **Actionable implication:** The top 4 dimensions (Pervading Metaphor, Multi-coherence, Compositional Intelligence, Scale Hierarchy) CANNOT reach 4.0+ without Pipeline v3.

### ITEM 93
- **Diagram:** 8
- **Line range:** 697
- **Type:** DECISION
- **Exact text:** "DIAGNOSIS: \"Right vocabulary, WRONG MODE of composition\""
- **Actionable implication:** The core diagnosis is that Gas Town has correct compositional vocabulary but wrong compositional mode — mechanisms deployed as checklist items.

### ITEM 94
- **Diagram:** 8
- **Line range:** 698-699
- **Type:** WARNING
- **Exact text:** "The builder deploys mechanisms as CHECKLIST items / not as RESPONSES to content meaning."
- **Actionable implication:** Current pipeline produces checklist-mode deployment; Pipeline v3 must force response-to-content-meaning mode.

### ITEM 95
- **Diagram:** 8
- **Line range:** 700-701
- **Type:** RECOMMENDATION
- **Exact text:** "Pipeline v3 addresses this via dispositional recipe / + activation architecture + COMPOSING mode gatekeeper."
- **Actionable implication:** Pipeline v3 addresses the wrong-mode problem with three mechanisms: dispositional recipe, activation architecture, and COMPOSING mode gatekeeper.

### ITEM 96
- **Diagram:** 8
- **Line range:** 700
- **Type:** FILE_REF
- **Exact text:** "dispositional recipe"
- **Actionable implication:** Dispositional recipe (D-01 through D-08) is a required Pipeline v3 component for fixing the mode problem.

### ITEM 97
- **Diagram:** 8
- **Line range:** 701
- **Type:** FILE_REF
- **Exact text:** "activation architecture"
- **Actionable implication:** Activation architecture is a required Pipeline v3 component.

### ITEM 98
- **Diagram:** 8
- **Line range:** 701
- **Type:** FILE_REF
- **Exact text:** "COMPOSING mode gatekeeper"
- **Actionable implication:** A COMPOSING mode gatekeeper mechanism must be built into Pipeline v3.

### ITEM 99
- **Diagram:** 8
- **Line range:** 644
- **Type:** VALUE
- **Exact text:** "★ = Fixable by prompt"
- **Actionable implication:** Dimensions marked ★ (Material Authenticity, Detail Density, Typographic Craft) are fixable by prompt changes alone.

### ITEM 100
- **Diagram:** 8
- **Line range:** 644
- **Type:** VALUE
- **Exact text:** "▲ = Needs architecture"
- **Actionable implication:** Dimensions marked ▲ (Pervading Metaphor, Multi-coherence, Compositional Intelligence) require architectural changes — prompt alone insufficient.

### ITEM 101
- **Diagram:** 8
- **Line range:** 667-677
- **Type:** VALUE
- **Exact text:** "Scale Hierarchy CSS | Channel Shifts CSS | Emotional Arc CSS | Spatial Confidence CSS"
- **Actionable implication:** Four dimensions (Scale Hierarchy, Channel Shifts, Emotional Arc, Spatial Confidence) are marked CSS — fixable by CSS-only changes without prompt or architecture changes.

---

## EXTRACTION SUMMARY

**Total items extracted: 101**

| Diagram | Items |
|---------|-------|
| 6       | 35    |
| 7       | 39    |
| 8       | 27    |

**By type:**
| Type | Count |
|------|-------|
| DECISION | 28 |
| THRESHOLD | 20 |
| VALUE | 20 |
| RECOMMENDATION | 5 |
| PROCESS | 5 |
| AGENT_ROLE | 4 |
| FILE_REF | 9 |
| WARNING | 5 |
| DEPENDENCY | 1 |

**All 13 irreducible concepts individually extracted:** YES (Items 38-70)
- 7 EXISTING: Builder Cognitive Mode, Content-Form Coupling, Compression Physics, Intentional Composition, Peak-Valley Architecture, Specification Interference, Scale-Channel Independence
- 6 MISSING: Temporal Composition, Reader Model, Emotional Arc, Compositional Anti-Patterns, Cross-Page Coherence, Revision Quality

**All fix-type classifications individually extracted:** YES (Items 76-85, 86-92, 99-101)
- 3 Architecture (▲): Pervading Metaphor, Multi-coherence, Compositional Intelligence
- 3 Prompt (★): Material Authenticity, Detail Density, Typographic Craft
- 4 CSS: Scale Hierarchy, Channel Shifts, Emotional Arc, Spatial Confidence

**All activation measurements individually extracted:** YES (Items 71-73)
- SPECIFIED: 6/13
- ACTIVATED: 5/13
- EMERGENT: 2/13
