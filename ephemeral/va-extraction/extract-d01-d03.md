# EXTRACTION: Diagrams 1, 2, and 3 — VISUAL-ARCHITECTURE.md
**Source:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pipeline-v3-research/VISUAL-ARCHITECTURE.md`
**Extractor:** Agent (Opus)
**Date:** 2026-02-23
**Coverage:** Lines 7-358 (Diagrams 1, 2, 3)

---

## DIAGRAM 1: PIPELINE v3 — COMPLETE ARCHITECTURE OVERVIEW (Lines 7-221)

### ITEM 1
- **Diagram:** 1
- **Line range:** 11-15
- **Type:** VALUE
- **Exact text:** "PIPELINE v3: THE ACTIVATION PIPELINE"
- **Actionable implication:** Pipeline v3's official name is "The Activation Pipeline" — all references and documentation must use this name.

### ITEM 2
- **Diagram:** 1
- **Line range:** 13
- **Type:** DECISION
- **Exact text:** "Master Equation: Quality = Agent Capability × Content Affordance × Spec Fidelity"
- **Actionable implication:** The pipeline must ensure all three factors are non-zero; quality is multiplicative, not additive.

### ITEM 3
- **Diagram:** 1
- **Line range:** 14
- **Type:** WARNING
- **Exact text:** "Zero in ANY factor = zero quality"
- **Actionable implication:** Any gate or check must verify none of the three master equation factors is zero before proceeding.

### ITEM 4
- **Diagram:** 1
- **Line range:** 18-19
- **Type:** PROCESS
- **Exact text:** "CONTENT SOURCE (Input) Raw markdown / article / research The content to be designed"
- **Actionable implication:** Pipeline input is raw markdown, articles, or research — the content to be designed into a page.

### ITEM 5
- **Diagram:** 1
- **Line range:** 24
- **Type:** PROCESS
- **Exact text:** "PHASE 0: CONTENT ANALYSIS"
- **Actionable implication:** Phase 0 is the first pipeline phase, dedicated to content analysis (not design).

### ITEM 6
- **Diagram:** 1
- **Line range:** 26
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 1: Content Analyst (Opus)"
- **Actionable implication:** Agent 1 must be an Opus-class model performing content analysis.

### ITEM 7
- **Diagram:** 1
- **Line range:** 28
- **Type:** PROCESS
- **Exact text:** "Classify content type (prose/mixed/visual)"
- **Actionable implication:** The content analyst must classify input into one of three types: prose, mixed, or visual.

### ITEM 8
- **Diagram:** 1
- **Line range:** 29
- **Type:** PROCESS
- **Exact text:** "Map structural heterogeneity"
- **Actionable implication:** The content analyst must map structural heterogeneity of the content (variation in section types/structures).

### ITEM 9
- **Diagram:** 1
- **Line range:** 30
- **Type:** PROCESS
- **Exact text:** "Assess metaphor viability"
- **Actionable implication:** The content analyst must assess whether the content supports a pervading structural metaphor.

### ITEM 10
- **Diagram:** 1
- **Line range:** 31
- **Type:** PROCESS
- **Exact text:** "Per-section character (NARRATIVE/REF/CODE)"
- **Actionable implication:** Each section must be classified as NARRATIVE, REF (reference), or CODE.

### ITEM 11
- **Diagram:** 1
- **Line range:** 32
- **Type:** PROCESS
- **Exact text:** "Estimate density arc"
- **Actionable implication:** The content analyst must estimate the density arc across the content (how information density varies).

### ITEM 12
- **Diagram:** 1
- **Line range:** 33
- **Type:** PROCESS
- **Exact text:** "Reader model classification"
- **Actionable implication:** The content analyst must classify the reader model (who will read this page and how).

### ITEM 13
- **Diagram:** 1
- **Line range:** 35
- **Type:** VALUE
- **Exact text:** "Output: CONTENT MAP (~30-50 lines)"
- **Actionable implication:** Phase 0 output must be a content map of approximately 30-50 lines.

### ITEM 14
- **Diagram:** 1
- **Line range:** 36
- **Type:** DECISION
- **Exact text:** "\"What the content IS, not what the design SHOULD BE\""
- **Actionable implication:** The content map must describe content properties only, NOT prescribe design decisions.

### ITEM 15
- **Diagram:** 1
- **Line range:** 41
- **Type:** PROCESS
- **Exact text:** "PHASE 1: ACTIVATION BRIEF ASSEMBLY"
- **Actionable implication:** Phase 1 assembles the activation brief by merging template + content map.

### ITEM 16
- **Diagram:** 1
- **Line range:** 44
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 2: Brief Assembler (Opus)"
- **Actionable implication:** Agent 2 must be an Opus-class model performing brief assembly.

### ITEM 17
- **Diagram:** 1
- **Line range:** 46
- **Type:** PROCESS
- **Exact text:** "MERGES 73-line template + content map → ACTIVATION BRIEF"
- **Actionable implication:** The assembler merges a pre-existing 73-line template with the content map to produce the activation brief.

### ITEM 18
- **Diagram:** 1
- **Line range:** 49
- **Type:** VALUE
- **Exact text:** "ACTIVATION BRIEF (~93-113 lines)"
- **Actionable implication:** The activation brief must be approximately 93-113 lines total.

### ITEM 19
- **Diagram:** 1
- **Line range:** 51
- **Type:** DECISION
- **Exact text:** "Tier 1: IDENTITY (15 lines)"
- **Actionable implication:** Tier 1 (Identity) section of the brief must be approximately 15 lines.

### ITEM 20
- **Diagram:** 1
- **Line range:** 52
- **Type:** DECISION
- **Exact text:** "10 soul constraints as WORLD-DESCRIPTION"
- **Actionable implication:** Soul constraints must be expressed as world-descriptions (declarative statements about the world), not as prohibitions.

### ITEM 21
- **Diagram:** 1
- **Line range:** 53
- **Type:** RECOMMENDATION
- **Exact text:** "\"Every surface is sharp. Corners are cut, not curved\""
- **Actionable implication:** Example voice for world-description framing — constraints stated as qualities of the world, not rules.

### ITEM 22
- **Diagram:** 1
- **Line range:** 54
- **Type:** THRESHOLD
- **Exact text:** "border-radius:0, box-shadow:none, container 940-960px"
- **Actionable implication:** Identity tier must specify: zero border-radius, no box-shadow, container width 940-960px.

### ITEM 23
- **Diagram:** 1
- **Line range:** 55
- **Type:** THRESHOLD
- **Exact text:** "warm palette (R≥G≥B), font trinity, no gradients"
- **Actionable implication:** Identity tier must specify: warm palette where Red >= Green >= Blue, the font trinity, and no gradients.

### ITEM 24
- **Diagram:** 1
- **Line range:** 58
- **Type:** DECISION
- **Exact text:** "Tier 2: PERCEPTION PHYSICS (8 lines)"
- **Actionable implication:** Tier 2 (Perception Physics) must be approximately 8 lines in the brief.

### ITEM 25
- **Diagram:** 1
- **Line range:** 59
- **Type:** DECISION
- **Exact text:** "4 empirically validated thresholds as NATURAL LAWS"
- **Actionable implication:** Perception thresholds must be framed as natural laws, not as rules or requirements.

### ITEM 26
- **Diagram:** 1
- **Line range:** 60
- **Type:** THRESHOLD
- **Exact text:** "≥15 RGB bg delta"
- **Actionable implication:** Background color differences must be >= 15 RGB points to be perceptible.

### ITEM 27
- **Diagram:** 1
- **Line range:** 60
- **Type:** THRESHOLD
- **Exact text:** "≥0.025em letter-spacing"
- **Actionable implication:** Letter-spacing differences must be >= 0.025em to be perceptible.

### ITEM 28
- **Diagram:** 1
- **Line range:** 61
- **Type:** THRESHOLD
- **Exact text:** "≤120px stacked gap"
- **Actionable implication:** Stacked (combined) gaps must not exceed 120px total.

### ITEM 29
- **Diagram:** 1
- **Line range:** 61
- **Type:** THRESHOLD
- **Exact text:** "≤96px single margin"
- **Actionable implication:** Any single margin value must not exceed 96px.

### ITEM 30
- **Diagram:** 1
- **Line range:** 62
- **Type:** DECISION
- **Exact text:** "All CSS must be perceptible to human eye"
- **Actionable implication:** Every CSS property that differs between zones/sections must produce a visible perceptual difference.

### ITEM 31
- **Diagram:** 1
- **Line range:** 65
- **Type:** DECISION
- **Exact text:** "Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines)"
- **Actionable implication:** Tier 3 (Compositional Frameworks) must be approximately 50 lines in the brief.

### ITEM 32
- **Diagram:** 1
- **Line range:** 66-67
- **Type:** VALUE
- **Exact text:** "A. Multi-Coherence (18 lines) 6 channels, 4 directions, boundary-by-boundary"
- **Actionable implication:** Multi-coherence section is 18 lines, specifying 6 channels, 4 directions, and boundary-by-boundary analysis.

### ITEM 33
- **Diagram:** 1
- **Line range:** 68-69
- **Type:** VALUE
- **Exact text:** "B. Structural Metaphor (8 lines) Derive from content, embody in CSS not labels"
- **Actionable implication:** Structural metaphor section is 8 lines; metaphor must derive from content and be embodied in CSS, not text labels.

### ITEM 34
- **Diagram:** 1
- **Line range:** 70-71
- **Type:** VALUE
- **Exact text:** "C. Density Arc (6 lines) OPENING → DEEPENING → RESOLVING"
- **Actionable implication:** Density arc section is 6 lines following the three-phase arc: OPENING, DEEPENING, RESOLVING.

### ITEM 35
- **Diagram:** 1
- **Line range:** 72-73
- **Type:** VALUE
- **Exact text:** "D. Content-Form Coupling (4 lines) Per-section decisions driven by content meaning"
- **Actionable implication:** Content-form coupling section is 4 lines; design decisions must be driven by each section's content meaning.

### ITEM 36
- **Diagram:** 1
- **Line range:** 74-75
- **Type:** VALUE
- **Exact text:** "E. Creative Authority + Components (8 lines) 80% creative / 20% constraint"
- **Actionable implication:** Creative authority section is 8 lines, specifying 80% creative freedom / 20% constraint ratio.

### ITEM 37
- **Diagram:** 1
- **Line range:** 76
- **Type:** VALUE
- **Exact text:** "F. CSS Value Table (6 lines)"
- **Actionable implication:** CSS value table section is 6 lines providing concrete CSS values for the builder.

### ITEM 38
- **Diagram:** 1
- **Line range:** 79
- **Type:** DECISION
- **Exact text:** "Tier 4: DISPOSITION (8 instructions, ~40 lines)"
- **Actionable implication:** Tier 4 (Disposition) contains exactly 8 dispositional instructions totaling approximately 40 lines.

### ITEM 39
- **Diagram:** 1
- **Line range:** 80
- **Type:** VALUE
- **Exact text:** "D-01: Content-Register Reading"
- **Actionable implication:** Disposition instruction D-01 is "Content-Register Reading" — must be included in brief.

### ITEM 40
- **Diagram:** 1
- **Line range:** 81
- **Type:** VALUE
- **Exact text:** "D-02: Room Perception at Boundaries"
- **Actionable implication:** Disposition instruction D-02 is "Room Perception at Boundaries" — must be included in brief.

### ITEM 41
- **Diagram:** 1
- **Line range:** 82
- **Type:** VALUE
- **Exact text:** "D-03: The Signing Frame"
- **Actionable implication:** Disposition instruction D-03 is "The Signing Frame" — must be included in brief.

### ITEM 42
- **Diagram:** 1
- **Line range:** 83
- **Type:** VALUE
- **Exact text:** "D-04: The Second-Half Moment"
- **Actionable implication:** Disposition instruction D-04 is "The Second-Half Moment" — must be included in brief.

### ITEM 43
- **Diagram:** 1
- **Line range:** 84
- **Type:** VALUE
- **Exact text:** "D-05: The Reader's Scroll"
- **Actionable implication:** Disposition instruction D-05 is "The Reader's Scroll" — must be included in brief.

### ITEM 44
- **Diagram:** 1
- **Line range:** 85
- **Type:** VALUE
- **Exact text:** "D-06: Negative Space as Shape ← NEW"
- **Actionable implication:** Disposition instruction D-06 is "Negative Space as Shape" — NEW instruction that must be included in brief.

### ITEM 45
- **Diagram:** 1
- **Line range:** 86
- **Type:** VALUE
- **Exact text:** "D-07: Edge Intentionality ← NEW"
- **Actionable implication:** Disposition instruction D-07 is "Edge Intentionality" — NEW instruction that must be included in brief.

### ITEM 46
- **Diagram:** 1
- **Line range:** 87
- **Type:** VALUE
- **Exact text:** "D-08: The Skeleton Test ← NEW"
- **Actionable implication:** Disposition instruction D-08 is "The Skeleton Test" — NEW instruction that must be included in brief.

### ITEM 47
- **Diagram:** 1
- **Line range:** 90-92
- **Type:** VALUE
- **Exact text:** "CONTENT MAP (from Phase 0, ~30-50 lines) Per-section analysis, metaphor seeds, density arc"
- **Actionable implication:** The content map from Phase 0 is appended to the activation brief and includes per-section analysis, metaphor seeds, and density arc.

### ITEM 48
- **Diagram:** 1
- **Line range:** 99
- **Type:** PROCESS
- **Exact text:** "PHASE 2: BUILDING (The Core Creative Act)"
- **Actionable implication:** Phase 2 is the building phase, explicitly framed as "The Core Creative Act."

### ITEM 49
- **Diagram:** 1
- **Line range:** 102
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 3: BUILDER (Opus — NON-NEGOTIABLE)"
- **Actionable implication:** The builder agent MUST be Opus model — this is non-negotiable.

### ITEM 50
- **Diagram:** 1
- **Line range:** 105
- **Type:** FILE_REF
- **Exact text:** "① Activation brief (~100 lines)"
- **Actionable implication:** Builder reads the activation brief (approximately 100 lines) as input #1.

### ITEM 51
- **Diagram:** 1
- **Line range:** 106
- **Type:** FILE_REF
- **Exact text:** "② Content source material"
- **Actionable implication:** Builder reads the original content source material as input #2.

### ITEM 52
- **Diagram:** 1
- **Line range:** 107
- **Type:** FILE_REF
- **Exact text:** "③ tokens.css (direct Tier 1 vocabulary)"
- **Actionable implication:** Builder reads tokens.css directly as input #3 — direct access to design tokens, not compressed.

### ITEM 53
- **Diagram:** 1
- **Line range:** 108
- **Type:** FILE_REF
- **Exact text:** "④ components.css (pre-built component library)"
- **Actionable implication:** Builder reads components.css directly as input #4 — pre-built component library.

### ITEM 54
- **Diagram:** 1
- **Line range:** 109
- **Type:** FILE_REF
- **Exact text:** "⑤ CD-006 reference (optional crown jewel)"
- **Actionable implication:** Builder may optionally read CD-006 reference file as input #5 — described as "crown jewel."

### ITEM 55
- **Diagram:** 1
- **Line range:** 112
- **Type:** DECISION
- **Exact text:** "✗ Gate thresholds (post-build only)"
- **Actionable implication:** Builder must NOT receive gate thresholds — gates are post-build only (prevents S-18 suppressor).

### ITEM 56
- **Diagram:** 1
- **Line range:** 113
- **Type:** DECISION
- **Exact text:** "✗ Prohibition list beyond soul (prevents S-02)"
- **Actionable implication:** Builder must NOT receive prohibition lists beyond soul constraints — prevents S-02 suppressor.

### ITEM 57
- **Diagram:** 1
- **Line range:** 114
- **Type:** DECISION
- **Exact text:** "✗ Count-gates (\"≥3 channels\") (prevents S-18)"
- **Actionable implication:** Builder must NOT receive count-gates like ">=3 channels" — prevents S-18 suppressor.

### ITEM 58
- **Diagram:** 1
- **Line range:** 115
- **Type:** DECISION
- **Exact text:** "✗ Fix cycle instructions (self-evaluation replaces)"
- **Actionable implication:** Builder must NOT receive fix cycle instructions — replaced by self-evaluation via Playwright.

### ITEM 59
- **Diagram:** 1
- **Line range:** 119
- **Type:** PROCESS
- **Exact text:** "1. Write conviction statement \"This page is about X. Metaphor is Y. Arc: Z→W\""
- **Actionable implication:** Build process step 1: builder writes a conviction statement with content topic, metaphor, and arc.

### ITEM 60
- **Diagram:** 1
- **Line range:** 122
- **Type:** PROCESS
- **Exact text:** "2. Build header + Zone 1 (OPENING)"
- **Actionable implication:** Build process step 2: build header and Zone 1, which is the OPENING phase of the density arc.

### ITEM 61
- **Diagram:** 1
- **Line range:** 125-130
- **Type:** PROCESS
- **Exact text:** "3. SELF-EVALUATE (Playwright) Take screenshot, assess against conviction. Does it feel like the metaphor? Backgrounds perceptible?"
- **Actionable implication:** Build process step 3: builder takes a screenshot via Playwright, self-evaluates against conviction statement, checking metaphor embodiment and perceptibility.

### ITEM 62
- **Diagram:** 1
- **Line range:** 128-129
- **Type:** DECISION
- **Exact text:** "Builder SEES its own output (Tier 4 info via EXPERIENCE)"
- **Actionable implication:** The builder MUST have Playwright access to see its own output — Tier 4 information comes through visual experience, not specification.

### ITEM 63
- **Diagram:** 1
- **Line range:** 132
- **Type:** PROCESS
- **Exact text:** "4. Adjust if needed"
- **Actionable implication:** Build process step 4: builder adjusts output based on self-evaluation.

### ITEM 64
- **Diagram:** 1
- **Line range:** 134
- **Type:** PROCESS
- **Exact text:** "5. Build Zone 2-3 (DEEPENING)"
- **Actionable implication:** Build process step 5: build Zones 2-3, which is the DEEPENING phase of the density arc.

### ITEM 65
- **Diagram:** 1
- **Line range:** 137-141
- **Type:** PROCESS
- **Exact text:** "6. MIDPOINT SELF-EVALUATE Density arc working? Mechanisms interacting or isolated? Full-page scroll screenshot"
- **Actionable implication:** Build process step 6: midpoint self-evaluation via full-page scroll screenshot, checking density arc and mechanism interaction.

### ITEM 66
- **Diagram:** 1
- **Line range:** 143
- **Type:** PROCESS
- **Exact text:** "7. Build Zone 4 + footer (RESOLVING)"
- **Actionable implication:** Build process step 7: build Zone 4 and footer, which is the RESOLVING phase of the density arc.

### ITEM 67
- **Diagram:** 1
- **Line range:** 146-149
- **Type:** PROCESS
- **Exact text:** "8. FINAL SELF-EVALUATE Gestalt works? Would I sign this? 1440px + 768px"
- **Actionable implication:** Build process step 8: final self-evaluation at both 1440px and 768px viewports, checking gestalt and signing-frame quality.

### ITEM 68
- **Diagram:** 1
- **Line range:** 152
- **Type:** VALUE
- **Exact text:** "Output: Complete HTML page (800-1200 CSS lines)"
- **Actionable implication:** Phase 2 output must be a complete HTML page with 800-1200 CSS lines.

### ITEM 69
- **Diagram:** 1
- **Line range:** 158
- **Type:** PROCESS
- **Exact text:** "PHASE 3: PERCEPTUAL AUDIT (Verification Only)"
- **Actionable implication:** Phase 3 is perceptual audit — verification only, NOT building or fixing.

### ITEM 70
- **Diagram:** 1
- **Line range:** 161
- **Type:** PROCESS
- **Exact text:** "Lead takes ALL screenshots at 1440px, 1024px, 768px"
- **Actionable implication:** The team lead (not auditors) takes all screenshots at three viewports: 1440px, 1024px, and 768px.

### ITEM 71
- **Diagram:** 1
- **Line range:** 162
- **Type:** DECISION
- **Exact text:** "(eliminates Playwright contention, enables parallel auditors)"
- **Actionable implication:** Screenshots are pre-captured to eliminate Playwright contention and enable fully parallel auditor execution.

### ITEM 72
- **Diagram:** 1
- **Line range:** 168-169
- **Type:** AGENT_ROLE
- **Exact text:** "PA-1 Q1-6 | PA-2 Q7-12 | PA-3 Q13-18 | PA-4 Q19-24 | PA-5 Q25-30 | PA-6 Q31-36 | PA-7 Q37-42"
- **Actionable implication:** 7 PA auditors with 6 questions each: PA-1 (Q1-6), PA-2 (Q7-12), PA-3 (Q13-18), PA-4 (Q19-24), PA-5 (Q25-30), PA-6 (Q31-36), PA-7 (Q37-42).

### ITEM 73
- **Diagram:** 1
- **Line range:** 172-173
- **Type:** AGENT_ROLE
- **Exact text:** "PA-8 Q43-48"
- **Actionable implication:** PA auditor 8 handles questions Q43-48.

### ITEM 74
- **Diagram:** 1
- **Line range:** 176-177
- **Type:** AGENT_ROLE
- **Exact text:** "PA-9 Q49-54"
- **Actionable implication:** PA auditor 9 handles questions Q49-54 (total 54 PA questions across 9 auditors).

### ITEM 75
- **Diagram:** 1
- **Line range:** 182-184
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 14: INTEGRATIVE AUDITOR (Opus) NO assigned questions. Pure gestalt. \"Does this page WORK? YES/NO + 200-word impression\""
- **Actionable implication:** Agent 14 is an Opus integrative auditor with NO assigned questions — provides pure gestalt YES/NO verdict plus 200-word impression.

### ITEM 76
- **Diagram:** 1
- **Line range:** 191-192
- **Type:** AGENT_ROLE
- **Exact text:** "Agent 15: WEAVER (Opus) Reads all 10 auditor reports → produces VERDICT"
- **Actionable implication:** Agent 15 is an Opus weaver that reads all 10 auditor reports (9 PA + 1 integrative) and produces the final verdict.

### ITEM 77
- **Diagram:** 1
- **Line range:** 201-204
- **Type:** THRESHOLD
- **Exact text:** "SHIP PA-05 ≥ 3.5/4 Zero soul violations"
- **Actionable implication:** SHIP verdict requires: PA-05 score >= 3.5/4 AND zero soul violations.

### ITEM 78
- **Diagram:** 1
- **Line range:** 206-210
- **Type:** PROCESS
- **Exact text:** "REFINE PA-05 2.5-3.5/4 DIFFERENT Opus agent applies targeted fixes (reads conviction)"
- **Actionable implication:** REFINE verdict (PA-05 2.5-3.5): a DIFFERENT Opus agent applies targeted fixes while reading the builder's conviction statement.

### ITEM 79
- **Diagram:** 1
- **Line range:** 212-215
- **Type:** PROCESS
- **Exact text:** "REBUILD PA-05 < 2.5/4 FRESH builder in COMPOSING mode (not REPAIR mode)"
- **Actionable implication:** REBUILD verdict (PA-05 < 2.5): a FRESH builder agent starts over in COMPOSING mode, not REPAIR mode.

### ITEM 80
- **Diagram:** 1
- **Line range:** 219-220
- **Type:** DECISION
- **Exact text:** "Returns to Phase 2 with PA verdict as CONTEXT (not as fix list — generative language)"
- **Actionable implication:** When returning to Phase 2, the PA verdict is provided as generative context, NOT as a fix list — language must be generative/artistic, not diagnostic.

---

## DIAGRAM 2: OLD PIPELINE vs NEW PIPELINE (Lines 225-270)

### ITEM 81
- **Diagram:** 2
- **Line range:** 230
- **Type:** VALUE
- **Exact text:** "OLD PIPELINE (v1/v2) PA-05: 1.5-3.5/4"
- **Actionable implication:** Old pipeline achieved PA-05 scores of 1.5-3.5/4 — this is the baseline to beat.

### ITEM 82
- **Diagram:** 2
- **Line range:** 230
- **Type:** THRESHOLD
- **Exact text:** "NEW PIPELINE (v3) Target PA-05: 3.5-4.0/4"
- **Actionable implication:** Pipeline v3 targets PA-05 scores of 3.5-4.0/4 — this is the success bar.

### ITEM 83
- **Diagram:** 2
- **Line range:** 233
- **Type:** VALUE
- **Exact text:** "963 lines of specification"
- **Actionable implication:** Old pipeline used 963 lines of specification — v3 must dramatically reduce this.

### ITEM 84
- **Diagram:** 2
- **Line range:** 233
- **Type:** VALUE
- **Exact text:** "~113 lines of activation brief"
- **Actionable implication:** New pipeline uses approximately 113 lines of activation brief — 8.5x reduction from old pipeline.

### ITEM 85
- **Diagram:** 2
- **Line range:** 235
- **Type:** VALUE
- **Exact text:** "7.9:1 guardrail-to-playbook"
- **Actionable implication:** Old pipeline had 7.9:1 guardrail-to-playbook ratio — massively skewed toward prohibitions.

### ITEM 86
- **Diagram:** 2
- **Line range:** 235
- **Type:** VALUE
- **Exact text:** "0.3:1 guardrail-to-playbook"
- **Actionable implication:** New pipeline has 0.3:1 guardrail-to-playbook ratio — inverted to favor playbooks over guardrails.

### ITEM 87
- **Diagram:** 2
- **Line range:** 236
- **Type:** VALUE
- **Exact text:** "55 prohibitions"
- **Actionable implication:** Old pipeline had 55 prohibitions — too many, causing suppressor activation.

### ITEM 88
- **Diagram:** 2
- **Line range:** 236
- **Type:** VALUE
- **Exact text:** "10 soul constraints"
- **Actionable implication:** New pipeline has only 10 soul constraints — reduced from 55 prohibitions to 10 identity constraints.

### ITEM 89
- **Diagram:** 2
- **Line range:** 237
- **Type:** DECISION
- **Exact text:** "Checklist format"
- **Actionable implication:** Old pipeline used checklist format — identified as a quality suppressor.

### ITEM 90
- **Diagram:** 2
- **Line range:** 237
- **Type:** DECISION
- **Exact text:** "Recipe + disposition format"
- **Actionable implication:** New pipeline uses recipe + disposition format — the format shift is a core architectural decision.

### ITEM 91
- **Diagram:** 2
- **Line range:** 238
- **Type:** DECISION
- **Exact text:** "\"Verify/Fail if/Must be\""
- **Actionable implication:** Old pipeline used compliance voice ("Verify/Fail if/Must be") — must be eliminated from v3.

### ITEM 92
- **Diagram:** 2
- **Line range:** 238
- **Type:** DECISION
- **Exact text:** "\"This world IS / You ARE\""
- **Actionable implication:** New pipeline uses world-description voice ("This world IS / You ARE") — the builder prompt voice must use this framing.

### ITEM 93
- **Diagram:** 2
- **Line range:** 240
- **Type:** VALUE
- **Exact text:** "19-34 agents"
- **Actionable implication:** Old pipeline used 19-34 agents — overly complex team structure.

### ITEM 94
- **Diagram:** 2
- **Line range:** 240
- **Type:** VALUE
- **Exact text:** "12-15 agents"
- **Actionable implication:** New pipeline targets 12-15 agents — leaner team.

### ITEM 95
- **Diagram:** 2
- **Line range:** 242
- **Type:** DECISION
- **Exact text:** "Hierarchical (lead→sub→worker)"
- **Actionable implication:** Old pipeline used hierarchical agent structure (lead to sub to worker).

### ITEM 96
- **Diagram:** 2
- **Line range:** 242
- **Type:** DECISION
- **Exact text:** "Flat (each agent, direct I/O)"
- **Actionable implication:** New pipeline uses flat structure where each agent has direct I/O — no sub-hierarchy.

### ITEM 97
- **Diagram:** 2
- **Line range:** 243
- **Type:** DECISION
- **Exact text:** "Multi-pass build (3-5 passes)"
- **Actionable implication:** Old pipeline used 3-5 build passes — multiple passes caused fix-mode degradation.

### ITEM 98
- **Diagram:** 2
- **Line range:** 243
- **Type:** DECISION
- **Exact text:** "Single builder, self-evaluating"
- **Actionable implication:** New pipeline uses a single builder that self-evaluates — replaces multi-pass with self-evaluation loop.

### ITEM 99
- **Diagram:** 2
- **Line range:** 244
- **Type:** DECISION
- **Exact text:** "Sonnet builders"
- **Actionable implication:** Old pipeline used Sonnet-class builders — identified as potential quality limiter.

### ITEM 100
- **Diagram:** 2
- **Line range:** 244
- **Type:** DECISION
- **Exact text:** "Opus builder (non-negotiable)"
- **Actionable implication:** New pipeline requires Opus builder — non-negotiable requirement.

### ITEM 101
- **Diagram:** 2
- **Line range:** 245
- **Type:** DECISION
- **Exact text:** "Zero Playwright for builders"
- **Actionable implication:** Old pipeline gave builders zero Playwright access — they could not see their own output.

### ITEM 102
- **Diagram:** 2
- **Line range:** 245
- **Type:** DECISION
- **Exact text:** "Builder HAS Playwright"
- **Actionable implication:** New pipeline gives builder Playwright access — builder can see and evaluate its own output.

### ITEM 103
- **Diagram:** 2
- **Line range:** 247
- **Type:** VALUE
- **Exact text:** "83:1 compression through TC"
- **Actionable implication:** Old pipeline had 83:1 compression ratio through Tension-Composition brief — massive information loss.

### ITEM 104
- **Diagram:** 2
- **Line range:** 247
- **Type:** VALUE
- **Exact text:** "10:1 regeneration (not compress)"
- **Actionable implication:** New pipeline has 10:1 ratio through regeneration (not compression) — content-specific info is regenerated, not compressed.

### ITEM 105
- **Diagram:** 2
- **Line range:** 249
- **Type:** VALUE
- **Exact text:** "99-line TC brief with hex values"
- **Actionable implication:** Old pipeline produced 99-line TC brief with hex color values — TC agent generated specific CSS values.

### ITEM 106
- **Diagram:** 2
- **Line range:** 249
- **Type:** VALUE
- **Exact text:** "~35-line TC brief: routing only"
- **Actionable implication:** New pipeline TC brief is approximately 35 lines doing routing only — no CSS value generation.

### ITEM 107
- **Diagram:** 2
- **Line range:** 250-251
- **Type:** DECISION
- **Exact text:** "TC generates CSS values WITHOUT perception physics"
- **Actionable implication:** Old pipeline: TC generated CSS values without perception physics — values could be imperceptible.

### ITEM 108
- **Diagram:** 2
- **Line range:** 250-251
- **Type:** DECISION
- **Exact text:** "Builder generates CSS values WITH perception physics (direct access)"
- **Actionable implication:** New pipeline: builder generates CSS values directly, WITH perception physics — builder has direct access to thresholds.

### ITEM 109
- **Diagram:** 2
- **Line range:** 253
- **Type:** DECISION
- **Exact text:** "Fix cycles (FIX → FIX → FIX)"
- **Actionable implication:** Old pipeline used fix cycles — identified as S-11 and S-20 suppressor activator.

### ITEM 110
- **Diagram:** 2
- **Line range:** 253
- **Type:** DECISION
- **Exact text:** "REBUILD with fresh builder"
- **Actionable implication:** New pipeline uses REBUILD with a fresh builder instead of fix cycles.

### ITEM 111
- **Diagram:** 2
- **Line range:** 255
- **Type:** DECISION
- **Exact text:** "Same builder in REPAIR mode"
- **Actionable implication:** Old pipeline reused same builder in REPAIR mode — continuation bias prevents self-revision.

### ITEM 112
- **Diagram:** 2
- **Line range:** 255
- **Type:** DECISION
- **Exact text:** "Fresh builder in COMPOSING mode"
- **Actionable implication:** New pipeline uses fresh builder in COMPOSING mode — defeats continuation bias via two-instance pattern.

### ITEM 113
- **Diagram:** 2
- **Line range:** 256
- **Type:** DECISION
- **Exact text:** "Diagnostic language"
- **Actionable implication:** Old pipeline used diagnostic language in fix feedback — activates REPAIR mode in builder.

### ITEM 114
- **Diagram:** 2
- **Line range:** 256
- **Type:** DECISION
- **Exact text:** "Generative/artistic language"
- **Actionable implication:** New pipeline uses generative/artistic language — feedback must describe qualities and impressions, not defects.

### ITEM 115
- **Diagram:** 2
- **Line range:** 257
- **Type:** WARNING
- **Exact text:** "S-11 + S-20 suppressors active"
- **Actionable implication:** Old pipeline's fix cycles activated S-11 (continuation bias) and S-20 (repair mode) suppressors — must be avoided.

### ITEM 116
- **Diagram:** 2
- **Line range:** 257
- **Type:** VALUE
- **Exact text:** "Zero repair-mode suppressors"
- **Actionable implication:** New pipeline must have zero repair-mode suppressors active.

### ITEM 117
- **Diagram:** 2
- **Line range:** 259
- **Type:** VALUE
- **Exact text:** "20 quality suppressors active"
- **Actionable implication:** Old pipeline had 20 quality suppressors active — all must be eliminated in v3.

### ITEM 118
- **Diagram:** 2
- **Line range:** 259
- **Type:** VALUE
- **Exact text:** "0 suppressors active"
- **Actionable implication:** New pipeline targets zero active quality suppressors.

### ITEM 119
- **Diagram:** 2
- **Line range:** 261
- **Type:** DECISION
- **Exact text:** "Builder sees gates (\"≥3 channels\")"
- **Actionable implication:** Old pipeline: builder saw gate thresholds — caused optimization for gates instead of quality.

### ITEM 120
- **Diagram:** 2
- **Line range:** 261
- **Type:** DECISION
- **Exact text:** "Builder sees frameworks only"
- **Actionable implication:** New pipeline: builder sees compositional frameworks only — no gate thresholds visible to builder.

### ITEM 121
- **Diagram:** 2
- **Line range:** 262
- **Type:** DECISION
- **Exact text:** "Gates in builder prompt"
- **Actionable implication:** Old pipeline placed gates in builder prompt — must not be repeated.

### ITEM 122
- **Diagram:** 2
- **Line range:** 262
- **Type:** DECISION
- **Exact text:** "Gates in orchestrator only"
- **Actionable implication:** New pipeline places gates in orchestrator only — builder never sees gate thresholds.

### ITEM 123
- **Diagram:** 2
- **Line range:** 263
- **Type:** DECISION
- **Exact text:** "Builder optimizes for gates"
- **Actionable implication:** Old pipeline's builder optimized for gates — produced technically compliant but perceptually empty output.

### ITEM 124
- **Diagram:** 2
- **Line range:** 263
- **Type:** DECISION
- **Exact text:** "Builder optimizes for quality"
- **Actionable implication:** New pipeline's builder optimizes for quality — architectural goal of the activation pipeline.

### ITEM 125
- **Diagram:** 2
- **Line range:** 266-268
- **Type:** VALUE
- **Exact text:** "RESULT: \"RIGHT vocabulary, WRONG mode of composition\" Procedural, not intentional"
- **Actionable implication:** Old pipeline diagnosis: correct vocabulary but wrong mode — procedural rather than intentional composition.

### ITEM 126
- **Diagram:** 2
- **Line range:** 266-268
- **Type:** VALUE
- **Exact text:** "PREDICTED RESULT: Vocabulary + correct MODE COMPOSING not COMPLYING Intentional, content-responsive"
- **Actionable implication:** New pipeline predicted result: vocabulary + correct mode = COMPOSING not COMPLYING, intentional and content-responsive.

---

## DIAGRAM 3: THE FUNNEL STRUCTURE (Lines 274-358)

### ITEM 127
- **Diagram:** 3
- **Line range:** 278-280
- **Type:** DECISION
- **Exact text:** "INPUT PRECONDITIONS (All 3 must be TRUE)"
- **Actionable implication:** All 3 input preconditions must be true before pipeline execution begins — this is a hard gate.

### ITEM 128
- **Diagram:** 3
- **Line range:** 288-289
- **Type:** THRESHOLD
- **Exact text:** "PRECONDITION 1 Model = OPUS"
- **Actionable implication:** Precondition 1: the builder model must be Opus — required for Agent Capability factor.

### ITEM 129
- **Diagram:** 3
- **Line range:** 290-291
- **Type:** VALUE
- **Exact text:** "(Agent Capability)"
- **Actionable implication:** Precondition 1 maps to the "Agent Capability" factor of the master equation.

### ITEM 130
- **Diagram:** 3
- **Line range:** 293-294
- **Type:** PROCESS
- **Exact text:** "Pipeline: Phase 2 model selection"
- **Actionable implication:** Precondition 1 is enforced at Phase 2 model selection — pipeline must verify Opus before spawning builder.

### ITEM 131
- **Diagram:** 3
- **Line range:** 288-289
- **Type:** THRESHOLD
- **Exact text:** "PRECONDITION 2 Content has heterogeneity + metaphor viability"
- **Actionable implication:** Precondition 2: content must have structural heterogeneity AND metaphor viability — required for Content Affordance factor.

### ITEM 132
- **Diagram:** 3
- **Line range:** 293-294
- **Type:** VALUE
- **Exact text:** "(Content Affordance)"
- **Actionable implication:** Precondition 2 maps to the "Content Affordance" factor of the master equation.

### ITEM 133
- **Diagram:** 3
- **Line range:** 296-300
- **Type:** PROCESS
- **Exact text:** "Pipeline: Phase 0 content analysis"
- **Actionable implication:** Precondition 2 is assessed during Phase 0 content analysis — pipeline must verify content affordance before proceeding.

### ITEM 134
- **Diagram:** 3
- **Line range:** 288-290
- **Type:** THRESHOLD
- **Exact text:** "PRECONDITION 3 Suppressor count = 0"
- **Actionable implication:** Precondition 3: active suppressor count must be zero — required for Specification Fidelity factor.

### ITEM 135
- **Diagram:** 3
- **Line range:** 291-292
- **Type:** VALUE
- **Exact text:** "(Specification Fidelity)"
- **Actionable implication:** Precondition 3 maps to the "Specification Fidelity" factor of the master equation.

### ITEM 136
- **Diagram:** 3
- **Line range:** 294-296
- **Type:** PROCESS
- **Exact text:** "Pipeline: 73-line brief format design"
- **Actionable implication:** Precondition 3 is enforced by the 73-line brief format design — the brief format itself is designed to eliminate suppressors.

### ITEM 137
- **Diagram:** 3
- **Line range:** 308
- **Type:** DECISION
- **Exact text:** "Builder enters COMPOSING mode (not COMPLYING / PLANNING / REPAIRING)"
- **Actionable implication:** The gatekeeper ensures the builder enters COMPOSING mode — must NOT enter COMPLYING, PLANNING, or REPAIRING mode.

### ITEM 138
- **Diagram:** 3
- **Line range:** 313
- **Type:** DECISION
- **Exact text:** "Recipe format (not checklist)"
- **Actionable implication:** COMPOSING mode is determined partly by recipe format — must use recipe, not checklist.

### ITEM 139
- **Diagram:** 3
- **Line range:** 314
- **Type:** VALUE
- **Exact text:** "8 dispositional instructions"
- **Actionable implication:** COMPOSING mode is determined partly by the 8 dispositional instructions (D-01 through D-08).

### ITEM 140
- **Diagram:** 3
- **Line range:** 315
- **Type:** VALUE
- **Exact text:** "Creative authority (80/20)"
- **Actionable implication:** COMPOSING mode is determined partly by 80% creative authority / 20% constraint ratio.

### ITEM 141
- **Diagram:** 3
- **Line range:** 316
- **Type:** DECISION
- **Exact text:** "World-description voice"
- **Actionable implication:** COMPOSING mode is determined partly by world-description voice (not compliance voice).

### ITEM 142
- **Diagram:** 3
- **Line range:** 317
- **Type:** THRESHOLD
- **Exact text:** "Sub-200 line brief"
- **Actionable implication:** The brief must be under 200 lines to maintain COMPOSING mode — over 200 lines risks mode collapse.

### ITEM 143
- **Diagram:** 3
- **Line range:** 324-340
- **Type:** DECISION
- **Exact text:** "CAPABILITY 1 Compositional Fluency Mechanisms deployed INTER-dependently Register 1→2→3 (CCS 0.15→0.80) EMERGENT from conditions"
- **Actionable implication:** Capability 1 (Compositional Fluency) requires mechanisms deployed interdependently, progressing through registers 1-3 (CCS 0.15 to 0.80), and EMERGES from conditions — cannot be specified directly.

### ITEM 144
- **Diagram:** 3
- **Line range:** 334-335
- **Type:** THRESHOLD
- **Exact text:** "Register 1→2→3 (CCS 0.15→0.80)"
- **Actionable implication:** Compositional Coherence Score (CCS) ranges: Register 1 = 0.15, Register 3 = 0.80 — these define the quality tiers.

### ITEM 145
- **Diagram:** 3
- **Line range:** 324-340
- **Type:** DECISION
- **Exact text:** "CAPABILITY 2 Peak-Valley Rhythm Designed moments within a competent baseline D-04 second-half moment instruction EMERGENT from conditions"
- **Actionable implication:** Capability 2 (Peak-Valley Rhythm) requires designed moments within a competent baseline, driven by D-04 instruction, and EMERGES from conditions.

### ITEM 146
- **Diagram:** 3
- **Line range:** 337-339
- **Type:** DECISION
- **Exact text:** "EMERGENT from conditions"
- **Actionable implication:** Both capabilities (Compositional Fluency and Peak-Valley Rhythm) are EMERGENT — they cannot be directly specified, only enabled by creating the right conditions.

### ITEM 147
- **Diagram:** 3
- **Line range:** 348-349
- **Type:** THRESHOLD
- **Exact text:** "Floor (2.5-3.0): Preconditions met, gatekeeper partial"
- **Actionable implication:** Floor quality (PA-05 2.5-3.0) results when preconditions are met but gatekeeper only partially activates COMPOSING mode.

### ITEM 148
- **Diagram:** 3
- **Line range:** 351-352
- **Type:** THRESHOLD
- **Exact text:** "Ceiling (3.0-3.5): All met, capabilities at Register 2"
- **Actionable implication:** Ceiling quality (PA-05 3.0-3.5) results when all conditions are met and capabilities reach Register 2.

### ITEM 149
- **Diagram:** 3
- **Line range:** 354-356
- **Type:** THRESHOLD
- **Exact text:** "Flagship (3.5-4.0): All met, capabilities at Register 3 + unified metaphor throughout"
- **Actionable implication:** Flagship quality (PA-05 3.5-4.0) requires all conditions met, capabilities at Register 3, PLUS a unified metaphor throughout the entire page.

---

## EXTRACTION SUMMARY

**Total items extracted: 149**

**Breakdown by diagram:**
- Diagram 1: 80 items (Items 1-80)
- Diagram 2: 46 items (Items 81-126)
- Diagram 3: 23 items (Items 127-149)

**Breakdown by type:**
- DECISION: 44
- VALUE: 37
- PROCESS: 23
- THRESHOLD: 19
- AGENT_ROLE: 9
- FILE_REF: 5
- WARNING: 3
- RECOMMENDATION: 1
- DEPENDENCY: 0

**Key architectural facts extracted:**
1. Pipeline name: "The Activation Pipeline"
2. Master equation: Quality = Agent Capability x Content Affordance x Spec Fidelity
3. 4 phases: Content Analysis (Phase 0), Brief Assembly (Phase 1), Building (Phase 2), Perceptual Audit (Phase 3)
4. 3 preconditions: Opus model, content heterogeneity + metaphor viability, zero suppressors
5. Activation brief: ~93-113 lines, 4 tiers (Identity 15L, Perception 8L, Compositional 50L, Disposition 40L) + content map
6. Builder: Opus NON-NEGOTIABLE, has Playwright, sees frameworks NOT gates, 5 inputs, 8-step build process with 3 self-evaluations
7. PA audit: 9 question-assigned auditors (54 questions) + 1 integrative auditor + 1 weaver = 11 agents
8. 3 verdicts: SHIP (>=3.5), REFINE (2.5-3.5, different Opus agent), REBUILD (<2.5, fresh builder)
9. Old vs New: 963→113 lines, 55→10 constraints, 7.9:1→0.3:1 guardrail ratio, Sonnet→Opus, checklist→recipe
10. Quality tiers: Floor 2.5-3.0, Ceiling 3.0-3.5, Flagship 3.5-4.0
