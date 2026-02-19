# Flagship Retrospective: Unified Synthesis

**Synthesizer:** Opus 4.6
**Date:** 2026-02-17
**Source Reports:** 8 retrospective analyses (01 through 08)
**Scope:** Complete post-mortem of the flagship experiment failure

---

## Part 1: VERIFIED ROOT CAUSES

### RC-1: "The Pipeline Has No Generative Arrow"
**Verdict: PARTIALLY TRUE**
The prompt DOES contain generative elements -- A5 provides a worked CD-006 crescendo example with specific CSS values, A7 provides a copy-pasteable transition CSS block, and C-05 defines three transition types with exact spacing and border parameters. The build plan (718 lines) contains detailed per-section CSS specifications. However, this generative content is either (a) in the conviction layer (Section A) which was excluded from the builder's 75-line prompt, or (b) produced during execution by the Planner agent, not by the pipeline itself. The corrected statement: "the pipeline has no CSS-generative arrow that reaches the builder." The contrarian report (07) notes that these generative elements being in the wrong section (A instead of B) is the real failure, not their absence.

### RC-2: "7.9:1 Guardrail-to-Playbook Ratio"
**Verdict: CONFIRMED**
55 building guardrails vs 7 building playbooks, verified exactly (01, lines 48-61). In the 71-line builder prompt, "border" appears 3 times as prohibition and once as reference value, zero times as construction instruction. The contrarian report (07) raises an important nuance: CD-006 was ALSO built under a constraint-heavy regime but with creative latitude. The ratio may prescribe the wrong fix -- more playbooks rather than fewer constraints. The deeper issue is TONE: 55 prohibitions create a risk-averse agent that plays it safe.

### RC-3: "Builder Saw 13.4% of the Prompt"
**Verdict: CONFIRMED, BUT OVERSTATED**
71/530 = 13.4% is mathematically verified (01, lines 89-102). However, the contrarian report (07) correctly notes that: (1) the visibility cap is intentional by design (two-instance pattern prevents continuation bias), (2) later-pass builders had richer visibility sets including the 718-line build plan, and (3) the Mechanism Builder saw far more than 13.4%. The REAL issue is not the percentage but the CONTENT: those 75 lines were 100% guardrails with zero CSS recipes.

### RC-4: "Sub-Perceptual Variation Satisfies Every Rule"
**Verdict: CONFIRMED**
The audit data is unambiguous (01, lines 116-135): letter-spacing varies by 0.096px (sub-pixel, invisible), line-height range is 2.4px (barely perceptible), backgrounds differ by 1-8 RGB points (below human perception threshold of ~15-20 RGB). No rule in the entire prompt defines a minimum perceptual magnitude. The contrarian attempt to frame this as "intentional restraint" fails because the variation is UNIFORM (all sections identical on p fontSize, fontWeight, color, marginBottom), not SELECTIVE. Uniform defaults are not design choices. This is the TRUEST root cause per the contrarian's own assessment.

### RC-5: "Zero Agent Communication"
**Verdict: CONFIRMED, WITH CAUSAL NUANCE**
19 agents, zero SendMessage calls, despite an explicit mandate for minimum 8 messages with 6 checkpoints (01, lines 146-172). However, the contrarian report (07) presents a legitimate counter: the Middle-tier experiment ALSO had zero communication and scored PA-05 DESIGNED (4/4). Communication is necessary for QUALITY REFINEMENT but insufficient for QUALITY GENERATION. The flagship's core failure (sub-perceptual variation, zero borders) is not a communication problem -- it is a prompt content problem. Even with perfect messaging, agents communicating guardrails would still produce guardrail-compliant flat output.

### RC-6: "Validation Checked Coverage Not Causation"
**Verdict: PARTIALLY TRUE**
The "135+ agents" number is overstated (~65+ is more accurate across validation teams). Some validators DID check causation (adversarial reviewers, ultra-deep specialists). But the core 12 wave-1 domain validators and 4 pre-flight verification agents used a coverage/percentage methodology that checked PRESENCE not CAUSATION (01, lines 183-197). The contrarian report (07) raises an important challenge: causal validation of aesthetic output may be fundamentally impossible before execution. The feasible fix is not "predict quality in advance" but "embed perceptual checks in execution gates."

### RC-7: "ABSENCE COHERENCE Rule Actively Validated Under-Building"
**Verdict: CONFIRMED, WITH NUANCE**
Line 732 of the master prompt explicitly states "Consistent absence reads as restraint" (01, lines 209-228). Ch4 (Structural) was completely absent -- zero borders anywhere in the body. The contrarian report (07) correctly notes that the absence coherence rule is philosophically sound (consistent absence IS better than inconsistent deployment), but has a dangerous interaction with the guardrail-heavy prompt: when no rule says "ADD borders," the absence coherence rule provides JUSTIFICATION for not adding them. The fix is not removing the rule but pairing it with mandatory deployment minimums.

### RC-8: "2,400:1 Compression of Channel Research"
**Verdict: CONFIRMED WITH CORRECTION**
The compression is actually WORSE than claimed: 2,733 lines of scale research compressed to 4 lines in the conviction layer = 683:1 (01, lines 242-277). The surviving text is classified as CONVICTION, not EXECUTION -- no corresponding operational rule exists in Section B. The contrarian report (07) argues the ratio is misleading because agents have access to reference files, but concedes the critical point: WHAT compressed away matters more than HOW MUCH. Constraints survived compression because they are one-line binary rules. Operational instructions died because they require multi-line context.

---

## Part 2: NEW ROOT CAUSES DISCOVERED

The missing-causes analyst (02) identified 7 new root causes. The prompt forensics agent (03) identified additional cross-cutting failures. Combined:

### RC-9: Component Library Invisible to Builder (NEW)
The design system has a 34-component library. The flagship uses ZERO standard callout components. Instead, the builder invented 15+ custom class patterns. The builder prompt contains no mention of components.css or `.callout` classes. Component utilization: 9% (3 of 34 used, all partially). The builder reinvented components from scratch instead of composing with proven ones. (02, lines 30-83)

### RC-10: Build Plan Specifies Tokens Not Perceptible Values (NEW)
The Planner agent produced an architecturally brilliant 349-line build plan that maps 14 mechanisms to 12 sections. But its chromatic arc specifies zone backgrounds that differ by 5 RGB points -- physically imperceptible. The plan validates itself against TOKEN NAMES, not PERCEIVED DIFFERENCES. No "perception gate" exists between plan and build. This interacts with RC-4: the plan specifies sub-perceptual tokens AND the rules allow sub-perceptual values. Double failure. (02, lines 86-132)

### RC-11: Ch4 Structural Absent -- No Rule Requires It (NEW)
SC-02 requires 5 of 7 channels but doesn't specify WHICH 5. The builder satisfied SC-02 with Ch1+Ch2+Ch3+Ch5+Ch7, leaving Ch4+Ch6 absent. This is distinct from the guardrail ratio (RC-2): even if guardrails existed for Ch4, there is no rule REQUIRING section-level structural elements. (02, lines 135-175)

### RC-12: Single-Column Monotony (NEW)
Zero multi-column layout, zero grid, zero flex container, zero asymmetric arrangement across all 2,034 lines of HTML. The prompt has no rule requiring layout variation. The build plan assigned F-pattern to 10 of 12 sections. CD-006 uses 6 layout patterns. (02, lines 178-227)

### RC-13: Uniform Prose Register (NEW)
All 12 sections use identical rhetorical mode: third-person declarative, medium-length sentences, zero variation. No lists, no questions, no short punchy statements, no tone shifts. Content uniformity drives visual uniformity -- when every section contains the same content TYPE, every section demands the same CSS treatment. (02, lines 230-274)

### RC-14: Transition Dividers Compound Into Void (NEW)
S-09 caps individual CSS properties at 96px, but stacked values at section boundaries create 210-276px gaps: section padding-bottom (64px) + divider margin (48-80px) + section padding-top (32-64px). Each value is individually compliant; the SUM is non-compliant. This is the SPECIFICATION DEFECT behind the catastrophic whitespace voids. The prompt forensics agent (03, Finding 2) calls this "the stacking loophole." (02, lines 278-315)

### RC-15: No Plan-Fidelity Gate (NEW)
No gate in the 6-gate sequence checks whether the built artifact matches the build plan. Gates check RULES, not PLANS. The plan specified 14 mechanisms with specific deployment locations, 4 compositional clusters, and a chromatic arc. Gate 3 checked mechanism counts and CCS, not plan fidelity. (02, lines 318-357)

---

## Part 3: WHERE EXACTLY THE PROMPT FAILED

From the forensics report (03), section-by-section verdict:

### WORKED (4 sections, all share the same DNA):
- **B2 Soul (U-01 to U-10):** 10/10 PASS. Specific CSS property + specific forbidden value, zero judgment.
- **B11 Content Transform (CT-01 to CT-08):** 8/8 PASS. Specific text property + forbidden pattern, zero judgment.
- **C4 PA Deployment:** Excellent procedural specification. (Never actually invoked during experiment.)
- **C5/C6/C7 PA Processing:** Well-designed specifications. (Never used.)

**Pattern:** Rules that name a SPECIFIC THING and a SPECIFIC VALUE achieve near-perfect compliance.

### FAILED (5 sections, all share different DNA):
- **B4 Multi-Coherence:** CCS -- the ONE metric that directly measures compositional quality -- was NEVER COMPUTED. 3 of 8 rules are unknown/unmeasured. Claims are unverified.
- **B5 Scale-Channel:** Systematic magnitude blindness. SC-02 technically passed (5 channels "active") but only 2-3 are PERCEPTIBLE. No rule distinguishes "active" from "perceivable."
- **B6 Metaphor Gates:** MG-04 (structural test: remove labels, does structure communicate?) FAILED. Without labels, the page reads as a generic documentation page. Metaphor is announced, not structural.
- **C2 Communication Protocol:** ~0% messaging compliance despite being THE most-repeated lesson in project memory. Messages defined as obligations attached to other activities, not as standalone tasks.
- **A6 Experiential Laws:** COUNTERPRODUCTIVE. Contains "Deployment does NOT equal perception" -- predicts exactly what happened -- but formatted as wisdom, not as gates. Self-contradictory: "LENGTH IS THE ENEMY OF QUALITY" in a 963-line prompt.

**Pattern:** Rules describing abstract concepts, checking for presence without magnitude, and requiring judgment achieve near-zero compliance.

### COUNTERPRODUCTIVE (2 sections):
- **A6 Experiential Laws:** The prompt contains the DIAGNOSIS of its own failure ("14 mechanisms deployed, 1 perceived") but formats it as philosophical observation, not as a binary gate.
- **D Conviction Closing:** "STOP ANALYZING. START BUILDING" arrives after 734 lines of analysis. The builder's attention budget is exhausted before reaching this instruction. Self-contradictory positioning.

### Most Surprising Findings:
1. **KB-04 violated by the prompt itself.** The kill criterion "execution prompt <= 200 lines" was designed to prevent this exact failure. The prompt is 963 lines -- 4.8x the kill criterion it contains.
2. **C-13 contradicts S-09.** C-13 requires ">= 2 silence zones (200px+)" while S-09 caps spacing at 96px. How do you create a 200px silence zone with a 96px cap? 7 total contradictions identified (03, Finding 7).
3. **The prompt is 12x longer than the builder needs.** 963 lines for all audiences; builder needs ~75 lines. The other 888 lines are for team-lead, planner, metaphor agent, PA auditors.
4. **22% of flagship CSS budget spent on imperceptible micro-typography.** 227 lines of per-zone letter-spacing (0.001-0.01em), word-spacing (0.005-0.02em), and heading color shifts (1-12 RGB points) that no human can see (06, Section 9).

---

## Part 4: WHAT THE REMEDIATION IS MISSING

From reports 04 and 08, the remediation prompt (301 lines, 5 phases) addresses individual channel deficits but has three BLOCKING gaps and four non-blocking gaps.

### BLOCKING GAPS:

**1. Accessibility: Complete Channel Absence (0/6 requirements covered)**
Zero mention of ::selection, focus-visible, prefers-reduced-motion, skip link, ARIA labels, or responsive breakpoints. CD-006 scores 8/8 on accessibility; the remediation leaves flagship at 0/8. Fix: ~15 lines of accessibility CSS. (04, lines 113-148)

**2. Whitespace Void Mitigation: Insufficient (6 specific voids not targeted)**
The remediation reduces ONE divider margin (divider-breathing from --space-20 to --space-16) but does not individually target the 6 catastrophic gaps (210-276px). No verification check for maximum gap size. After remediation, scroll positions 4000/5000/6000px may still be blank cream. Fix: explicit per-gap CSS + 120px maximum gap verification. (04, lines 192-228)

**3. Multi-Coherence Verification: Absent**
The remediation creates varied CSS across channels (Phases 1-5) but provides no mechanism to verify channels CO-VARY at zone boundaries. No cascade value table. No per-transition channel count check. Without these, the builder could apply phases independently and still fail SC-09 at 5 of 11 transitions. Fix: cascade value table + per-transition verification in Phase 6. (04, lines 305-340)

### NON-BLOCKING GAPS:
4. Body text color variation missing (heading colors vary; paragraph text stays #1A1A1A)
5. Component VARIETY structurally impossible via CSS-only (needs HTML restructuring)
6. Table header backgrounds missing (quick win: ~2 CSS lines)
7. Word-spacing missing (tertiary Scale 5 property)

### Requirements Coverage Summary (from report 08):
- 45 total requirements defined
- 18 fully covered by current remediation (YES)
- 12 partially covered (PARTIALLY)
- 15 not covered (NO)
- Worst category: Accessibility/Responsive (0/6 covered), Multi-Coherence (0/7 fully covered)

---

## Part 5: CSS GAP -- WHAT CD-006 HAS THAT FLAGSHIP LACKS

From report 06, the CSS forensics reveal that both files have nearly identical total CSS (~1,050 lines each). The gap is not quantity -- it is WHERE those lines are spent.

### Critical Gaps (highest visual impact):

**1. Structural Containment: CD-006 has 23 border contexts, Flagship has 14**
CD-006 applies 3px containment borders to 11 component types (code blocks, file trees, decision matrices, task components, reasoning columns, etc.). Flagship applies borders only to tables and component-block left edges. Zero components with full containment. (06, Section 4)

**2. Grid Layouts: CD-006 has 10 grid/flex declarations, Flagship has 0**
CD-006 uses: bento grid (4-column), Z-pattern golden ratio (1.618:1), 2-column reasoning, 3-column choreography spokes. Flagship is exclusively single-column. (06, Section 2)

**3. Component Types: CD-006 has 11 distinct types, Flagship has 3**
CD-006: callout--info, callout--tip, callout--gotcha, callout--essence, callout--challenge, code-block, file-tree, decision-matrix, core-abstraction, task-component, reasoning. Each has unique border, background, typography, and internal structure. Flagship: component-block (one shape, three color variants), sequence-block, pullquote. (06, Section 5)

**4. Background Color Diversity: CD-006 has 10 perceptibly distinct, Flagship has 5**
CD-006's callout backgrounds are DIFFERENT HUES (blue tint, green tint, coral tint, amber tint, purple tint). Flagship's zone backgrounds are all within 1-8 RGB points of warm cream -- zero distinct-hue tinted backgrounds. (06, Section 3)

**5. Responsive/Accessibility: CD-006 has 5 @media queries, Flagship has 0**
CD-006: prefers-reduced-motion, print, 960px, 768px, 480px breakpoints. Plus skip link, focus-visible, ::selection, role="note" (17 instances), aria-label (21 instances). Flagship: zero. (06, Section 1)

### Where Flagship Actually Exceeded CD-006:
- **Max-width variation:** Flagship has 7 distinct values vs CD-006's 2. One of the few channels where flagship invested more.
- **Custom properties defined:** Flagship has 48 vs CD-006's 47. But CD-006's are used 8.8x each on average; flagship's are used 5.6x each.

### The Root Diagnosis (06, Section 12):
CD-006 distributes CSS across 12 visual channels equally. Flagship concentrates CSS in 2 channels (zone backgrounds + typographic micro-modulation). The flagship spent ~22% of its CSS budget (227 lines) on per-zone letter-spacing (0.001-0.01em), word-spacing (0.005-0.02em), and heading color shifts (1-12 RGB points) that are IMPERCEPTIBLE. CD-006 spent those same ~230 lines on 11 component definitions, 5 grid layouts, and 3 responsive breakpoints -- all immediately visible.

**This is not a lazy page. It is a MISALLOCATED page.** The builder had technical skill (7 table variants, 6 metaphor channels, 12-zone progression). The execution prompt's emphasis on "refinement gradients" and "metaphor channels" directed that skill toward imperceptible micro-typography instead of visible structural variety.

---

## Part 6: PROCESS LESSONS -- WHAT TO DO DIFFERENTLY NEXT TIME

From report 05, the metacognitive analysis identifies the fundamental process failure:

### Finding 1: Recipe vs Checklist
The Middle-tier builder received a RECIPE (100-line planner slice with sequenced steps: "Read this, then select a pattern, then deploy mechanisms"). The Flagship builder received a CHECKLIST (71 lines of constraints: "verify that X is true"). The Middle builder was told WHAT TO DO. The Flagship builder was told WHAT NOT TO DO. This is the difference between a generative document and a descriptive document. (05, Section 1)

### Finding 2: The Gradual Phase Transition
The pipeline transitioned from GENERATIVE (Phases 1-4) to DESCRIPTIVE (Phases 5-10) gradually, not suddenly. Phase 7 (Flagship Preparation, 21 agents) was the inflection point where the process decided to respond to the ceiling experiment's failure with MORE RULES rather than BETTER INSTRUCTIONS. Every subsequent phase amplified this choice. (05, Section 2)

### Finding 3: Frame Blindness
All 65+ validation agents operated within a COVERAGE frame ("does prompt match sources?") rather than a UTILITY frame ("can builder produce rich CSS from prompt alone?"). The frame was never questioned because: (a) success bias from Middle-tier attributed success to constraints rather than recipe, (b) the frame is self-reinforcing (rules checking rules checking rules), (c) agents execute assigned tasks, they don't question whether the task is the right one. (05, Section 3)

### Finding 4: The Meta-to-Output Ratio
Middle-tier: 3.6:1 meta-to-output ratio (healthy). Flagship pipeline: 660:1 (pathological). At 660:1, meta-production feeds on itself -- each agent's analysis becomes input for the next agent's analysis. The diagnostic question: "Does the meta-output CHANGE what the builder writes?" At 3.6:1, yes. At 660:1, no -- the 1.35M lines of analysis changed the prompt's RULES but not its INSTRUCTIONS. (05, Section 6)

### Finding 5: Binary Rules Achieve Compliance, Not Quality
Binary rules define FLOORS (minimum viable compliance), not TARGETS (quality surplus). ">= 3 distinct spacing values" is satisfied by 48px, 49px, 50px -- three values, zero semantic meaning. The AGGREGATE of minimum viable compliance across 97 rules produces a formally correct, visually empty page. CD-006 achieves quality through SURPLUS (4px borders where 1px would suffice, 40 RGB points where 15 would pass), which is a property of INTENT, not compliance. (05, Section 7)

### Finding 6: Analysis Displaces Creation
Across Phases 5-10: ~140 analytical/procedural artifacts produced. Creative/operational artifacts: ZERO. Not one phase produced a CSS playbook, a section-by-section implementation guide, or a worked "how to build a section like CD-006 Section 3." The process has massive analytical capacity and zero generative capacity. Analytical work is the DEFAULT MODE for LLM agent teams; generative work requires explicit structural support. (05, Section 8)

### The Structural Fix:
Add a PLAYBOOK GENERATION phase between analysis and execution. One Opus agent reads the build plan + mechanism catalog + tokens.css and writes section-by-section CSS instructions with specific values. Cost: 1 agent, ~30 minutes. Replace the 75-line constraint-only builder prompt with a ~150-line dual-track prompt: 30 lines of binary constraints + 100 lines of CSS implementation instructions + 20 lines of self-check. (05, Section 10)

---

## Part 7: CONTRARIAN FINDINGS -- WHERE WE MIGHT BE WRONG

From report 07, the contrarian challenge reveals important caveats:

### Root causes that may be OVERSTATED:

**RC-1, RC-2, RC-3, RC-8 are FOUR descriptions of ONE cause.** They are not independent root causes. They are four measurements of a single architectural decision: to build a rule-extraction pipeline rather than an instruction-generation pipeline. Counting them as separate root causes inflates the diagnosis. (07, Symptom Cluster 1)

**RC-5 and RC-7 are ENABLERS, not causes.** Zero communication and absence coherence did not CAUSE the flat page; they ENABLED and RATIONALIZED it. Remove them and you get a slightly less flat page, not a crown jewel. (07, Symptom Cluster 2)

### The Unexamined Factor: Agent Model Selection
The contrarian raises a finding NOT in any of the 8 root causes: the Sonnet-for-builders decision. CD-006 was built by an Opus agent. The flagship skeleton and mechanism builders were Sonnet agents. A Sonnet agent given 55 constraints will comply meticulously. An Opus agent given 55 constraints will comply AND make creative decisions beyond the constraints. This may be the highest-leverage intervention -- changing the builder model from Sonnet to Opus. (07, lines 296-301)

### Alternative Diagnosis:
The root cause is not in the PROMPT but in the PROCESS that produced the prompt. The pipeline's unit of analysis is the RULE, not the EXPERIENCE. The quality of CD-006 came from an Opus agent making hundreds of good judgment calls, not from following rules. No amount of rule enrichment can replicate design judgment. (07, lines 268-274)

### Where the Contrarian Concedes:
- RC-4 (sub-perceptual variation) is the TRUEST root cause. The counter-argument (intentional restraint) does not survive scrutiny.
- The coverage-not-causation critique (RC-6) is correct even though the prescribed fix (predictive causal validation) may not exist.

---

## Part 8: MASTER TAKEAWAYS

Distilled from all 8 reports into actionable items:

### 1. ADD A PLAYBOOK GENERATION PHASE
Stop the analysis-to-rules pipeline before it reaches the builder. Insert one Opus agent between the build plan and the builder who reads the plan + mechanism catalog + tokens.css and writes 100-150 lines of section-by-section CSS instructions with specific values. Cost: 1 agent, ~30 minutes. The Middle-tier's planner slice is the template. (Sources: 03 Finding 5, 05 Section 10)

### 2. SPLIT THE BUILDER PROMPT INTO DUAL TRACKS
Track A: 30 lines of binary constraints (soul, container width, CPL). Track B: 100 lines of CSS implementation instructions (per-section backgrounds, borders, typography, spacing with specific values). Track A achieves compliance. Track B generates richness. The current monolithic document merges both into one constraint-only document. (Sources: 05 Section 4, 03 lines 505-509)

### 3. ADD PERCEPTUAL MAGNITUDE FLOORS TO EVERY CHANNEL RULE
No rule currently defines "how much" variation is enough. Add minimum perceptual thresholds: background deltas >= 15 RGB points, letter-spacing range >= 0.025em, border weight difference >= 2px between zones, font-size variation >= 2px. Without these, "channel active" means "technically present but invisible." (Sources: 03 Finding 1, 04 lines 370-371, 06 Section 9)

### 4. FIX THE S-09 STACKING LOOPHOLE
Redefine S-09 to measure TOTAL visual gap between adjacent content (sum of all margins, paddings, divider heights) rather than per-property maximum. Current: each property <= 96px, but stacked values create 210-276px voids. Target: total gap <= 120px between any two content elements. (Sources: 02 RC-14, 03 Finding 2, 04 lines 192-228)

### 5. ADD ACCESSIBILITY MINIMUM TO REMEDIATION AND FUTURE PROMPTS
::selection, focus-visible, prefers-reduced-motion, and at least one responsive breakpoint (768px). CD-006 scores 8/8 on accessibility; flagship scores 0/8. This is ~15 lines of CSS. No reason to omit it. (Sources: 04 lines 113-148, 06 Channel F, 08 REQ-25 through REQ-30)

### 6. REDIRECT CSS BUDGET FROM MICRO-MODULATION TO STRUCTURAL VARIETY
The flagship spent 227 lines (22% of CSS) on imperceptible per-zone typography shifts. CD-006 spent those lines on 11 component types, 5 grid layouts, and 3 responsive breakpoints. The execution prompt's emphasis on "refinement gradients" caused this misallocation. Future prompts should explicitly state: "structural diversity (borders, component types, layout patterns) takes priority over typographic micro-modulation." (Sources: 06 Sections 9-12)

### 7. CAP ANALYTICAL PHASES AT 2 BETWEEN RESEARCH AND EXECUTION
The Flagship pipeline ran 6 consecutive analytical phases (5-10), inflating the meta-to-output ratio to 660:1. Each phase added rules but zero builder instructions. Cap at 2 analytical phases. Use the third phase slot for the playbook generation phase (Takeaway 1). The threshold: if meta-output exceeds 20:1 ratio to product, the pipeline is feeding on itself. (Sources: 05 Section 6)

### 8. CONSIDER OPUS FOR ALL CREATIVE BUILDER ROLES
CD-006 was built by Opus. The flagship skeleton/mechanism builders were Sonnet. The contrarian report identifies this as potentially the highest-leverage unexamined intervention. Sonnet excels at constraint compliance; Opus excels at judgment-laden creative work. At minimum, the Mechanism Builder (Pass 2) and Intentionality Builder (Pass 4) should be Opus. (Sources: 07 lines 296-301)

### 9. ADD A PLAN-FIDELITY GATE
No current gate checks whether the built artifact matches the build plan. Add Gate 2.5 (post-skeleton, pre-mechanism): compare skeleton against build plan, verify every planned section exists with approximately matching spatial budget, verify each mechanism cluster's primary property is present. Plan-to-build divergence > 20% = fix cycle. (Sources: 02 RC-15, 03 Section C3)

### 10. EMBED PERCEPTION CHECKS IN EXECUTION GATES, NOT JUST FINAL PA
Currently, perceptual quality is only checked at Gate 5 (Mode 4 PA) -- after the page is fully built. By then, fixing perceptual failures requires rebuilding. Move simple perceptual checks into Gate 1 (post-skeleton) and Gate 3 (post-mechanism): "scroll through at 1440px -- are there blank viewports? Can you distinguish sections by background color without dev tools?" These take 5 minutes and catch the catastrophic failures 4 hours earlier. (Sources: 03 Section B7, 07 RC-6 verdict)

---

## APPENDIX: Cross-Report Concordance

| Finding | Reports Confirming | Strength |
|---------|-------------------|----------|
| Sub-perceptual variation is the truest failure | 01, 02, 03, 04, 06, 07, 08 | UNANIMOUS (7/8) |
| Builder prompt needs CSS recipes, not just constraints | 02, 03, 05, 07 | STRONG (4/8) |
| Stacking loophole in S-09 | 02, 03, 04 | STRONG (3/8) |
| Accessibility completely absent | 04, 06, 08 | STRONG (3/8) |
| CD-006 CSS budget allocated to visibility; flagship to imperceptibility | 06 (primary), 03, 05 | STRONG (3/8) |
| Communication is an enabler, not a root cause | 05, 07 | MODERATE (2/8) |
| Agent model (Sonnet vs Opus) is unexamined | 07 (primary) | MODERATE (1/8, but high leverage) |
| Process naturally drifts from generative to analytical | 05 (primary) | MODERATE (1/8, but structurally important) |

---

**END OF SYNTHESIS**
