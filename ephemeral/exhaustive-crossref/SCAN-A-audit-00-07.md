# SCAN-A: Exhaustive Cross-Reference Report -- Files 00-07 vs FINAL Prompt

**Scanner:** Scanner A (Sonnet 4.5)
**Date:** 2026-02-17
**Task:** #1 -- Cross-reference FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md against 8 audit files
**FINAL Prompt:** `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (695 lines)

---

## SUMMARY TABLE

| Source File | CRITICAL Missing | IMPORTANT Missing | NICE-TO-HAVE Missing | Already Present |
|-------------|-----------------|-------------------|----------------------|-----------------|
| 00-PROMPT-STRUCTURE-OUTLINE.md | 1 | 3 | 2 | ~80% of specs |
| 01-tc-skill-audit.md | 5 | 6 | 4 | 14% coverage |
| 02-pa-skill-audit.md | 4 | 5 | 3 | ~30% coverage |
| 03-ceiling-reflections-audit.md | 2 | 4 | 3 | ~50% coverage |
| 04-flagship-prep-crossref.md | 3 | 5 | 2 | ~40% coverage |
| 05-pre-flight-crossref.md | 2 | 6 | 4 | ~55% coverage |
| 06-scale-metacognitive-audit.md | 2 | 5 | 5 | ~45% coverage |
| 07-crown-jewel-design-system-audit.md | 1 | 4 | 3 | ~60% coverage |
| **TOTALS** | **20** | **38** | **26** | — |

**NOTE:** Many items from these audit files were already incorporated into the FINAL prompt (v2). The gaps below represent items that remain absent or only partially addressed despite that incorporation.

---

## SOURCE FILE 00: PROMPT-STRUCTURE-OUTLINE.md

### What This File Contains
Structural specification for the master prompt assembly -- 9 sections, 17 success criteria, 10 known gaps, and 8 fundamental principles.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C00-01: Builder attention cap at ≤55 lines not verified**
- Source: "Builder <=55 lines at <=37 attention units" (line 81, success criterion)
- Status: MISSING from FINAL prompt. FINAL prompt has a builder self-check (B10) of 16 items but no specification that builders only SEE Layer 2 + Layer 1 opening (~150 lines total). The full prompt is 695 lines; builders would see the entire thing.
- Insertable text (place in Appendix or C1):
```
BUILDER VISIBILITY: Builder agents read ONLY:
  - Section A: Conviction (~82 lines)
  - Section B: Execution Spec (~107 lines)
  - Their agent-specific reference files (Section E)
Builder MUST NOT read Section C (coordination) or the full Appendix.
Team-lead reads the full prompt. Builder-visible total: ≤200 lines.
```
- Classification: CRITICAL (attention budget directly determines compliance rates)

#### IMPORTANT

**I00-01: "10 Things" test not referenced**
- Source: "10 Things test passes" (line 87, success criterion)
- Status: Not in FINAL prompt. No mechanism to verify the 10 most important behaviors are unambiguously encoded.
- Placement: Appendix or pre-build gate

**I00-02: Adversarial reviewer "no path to 70% void" not gated**
- Source: "Adversarial reviewer: no path to 70% void" (line 88)
- Status: FINAL prompt has void detection rules (S-10, S-12, C3 prevention) but no explicit adversarial check for whether a compliant build CAN produce 70% void through gameable rules.
- Insertable: "Pre-build adversarial check: identify any configuration that satisfies all rules yet produces > 40% void. If such a path exists, add a rule to close it."

**I00-03: Conviction sandwich not fully implemented**
- Source: Known gap #10 (line 104): "Prompt structure suggestion from V2: conviction-execution-conviction sandwich"
- Status: FINAL prompt has Section A (conviction opening) and Section D (conviction closing) -- sandwich IS implemented. However, Section D is only 10 lines vs Section A's 82. The closing conviction is disproportionately thin.
- Insertable: Expand Section D to 25-30 lines with a brief restatement of the top 3 principles and an explicit "stop analyzing, start building" directive. Currently Section D has this but it's sparse.

#### NICE-TO-HAVE

**N00-01: Cross-reference zero items lost from 187 unique items**
- Source: Success criterion line 92
- Status: No mechanism to verify all 187 items have prompt homes. FINAL prompt has no traceability audit.

**N00-02: Attention cost documented per section**
- Source: Success criterion line 89
- Status: Absent from FINAL prompt. Prompt does not annotate attention cost per rule.

---

## SOURCE FILE 01: TC-SKILL-AUDIT.md

### What This File Contains
Deep audit of the Tension-Composition skill (1,932 lines). Overall rating: 4/10 coverage in previous prompt. Identifies 7 critical gaps, 14 high-value additions.

### Current Status in FINAL Prompt
The FINAL prompt (v2) now has Section B8 (TC Pipeline Routing, 7 lines), MG-01 through MG-05 (metaphor gates), and P-02 (Phase 0E library prohibition). Coverage improved substantially but key TC phases remain un-invoked.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C01-01: Full Phase 0D tier routing absent**
- Source: CG-1 -- "Flagship = FULL pipeline Phases 0-5 + multi-pass audit"
- Status in FINAL: B8 shows routing summary (7 lines) but NEVER states "Execute full pipeline Phases 0-5." Agent can see TC Phase references but no explicit statement that ALL phases are mandatory.
- Partially present: B8 references TC Phases 0-5 with agent assignments
- Insertable (add to B8):
```
TC TIER: Flagship = FULL pipeline. Metaphor Agent MUST execute ALL phases:
  Phase 0: Content classification + scope + section ID + tier routing
  Phase 1: Multi-axis questioning (14 axes, ALL mandatory for Flagship)
  Phase 2: Tension derivation (Addition Test + BECAUSE Test + richness formula)
  Phase 3: Metaphor collapse (6-criterion rubric, 6 rejection checks, perceptual risk)
  Phase 3.5: Commitment gate (lock-in, NO library access before this point)
  Phases 4-5: Compositional layout + divergence verification
  NO PHASE MAY BE SKIPPED.
```
- Classification: CRITICAL

**C01-02: Addition Test + BECAUSE Test not in any gate**
- Source: CG-5 -- "Addition Test + BECAUSE Test Missing from Execution Gates"
- Status in FINAL: P-02 mentions Phase 0E library prohibition but neither test appears. MG-01 through MG-05 gate metaphor QUALITY but not metaphor NECESSITY.
- Partially present: NONE (concept entirely absent from gate sequence)
- Insertable (add to B6 or a new B6.5):
```
NECESSITY GATES (before metaphor derivation):
  Addition Test: "Can you serve the reader by placing existing components
    without transforming their meaning?" YES = no metaphor needed. NO = proceed.
  BECAUSE Test: "The reader needs X BECAUSE [specific content property]."
    Cannot complete = manufactured tension. ABORT.
  Both must be run and documented before metaphor agent begins Phase 1.
```
- Classification: CRITICAL

**C01-03: Perceptual Risk + Perceptual Cost assessments absent**
- Source: CG-3 -- two assessment protocols (Perceptual Risk 4 questions, Perceptual Cost 5 questions)
- Status in FINAL: MG-01 through MG-05 contain the 6-criterion rubric and interpretive distance gate. But Perceptual Risk (4 questions scored 0-4) and Perceptual Cost (5 questions scored 0-5+) are ABSENT. These are INPUT gates, not output checks.
- Partially present: MG-05 (metaphor spatial cost ≤15%) partially covers perceptual cost but is incomplete
- Insertable (add to MG section):
```
MG-06 (Perceptual Risk, 4 questions, 0-4 score): transition model, expression mode,
  element variety, responsive story. Score >= 2.5 = rank BELOW lower-risk alternatives
  even with higher resolution. Override richness score.
MG-07 (Perceptual Cost, 5 questions, 0-5+ score): compression below floors,
  container width, uniform grids, transitions as empty space, explicit labels.
  Score 3+ = consider alternative metaphor. Documented threshold.
```
- Classification: CRITICAL

**C01-04: Pacing Prediction Heuristic (Phase 4.2B) not invoked**
- Source: CG-7 -- "Void Prevention Gate Missing"
- Status in FINAL: FINAL has B1 void detection rules (S-10, S-12) which are MEASUREMENT metrics. Phase 4.2B of TC skill is a PREDICTIVE gate run BEFORE generating HTML. The distinction is critical: measurement catches void after; prediction prevents void.
- Partially present: S-12 detects void after build; P-08 adds spatial re-check concept
- Insertable (add to B7 Process or as new P-09):
```
P-09. Pre-generation void prediction (TC Phase 4.2B): BEFORE writing HTML,
  run pacing prediction:
  - Section count: 3-6 = good, 11+ = HIGH RISK (must group sections)
  - Breathing zone model: CHANGING STATE (bg shift, border change, density
    gradient). NEVER EMPTY SPACE (viewport-height gap). Max: 48px.
  - Element uniformity: 6+ same-shaped elements = must break with visual separator
  - Dramatic moment: place at 60-80% of total page height
  Output: PACING RISK rating (LOW/MODERATE/HIGH). HIGH = restructure before building.
```
- Classification: CRITICAL

**C01-05: 14-axis multi-questioning protocol absent**
- Source: HV-12 -- "Multi-Axis Questioning Protocol (14 Axes)"
- Status in FINAL: B8 assigns TC Phase 1 (Multi-Axis Questioning) to Metaphor Agent (Opus). But 14 axes are not enumerated, no axis selection protocol is specified, and RECONCILE axis (highest richness against KortAI) is not mentioned.
- Partially present: Phase 1 is assigned but content is not specified
- Insertable (add to B8 or Section E Metaphor Agent reference):
```
TC Phase 1 for Metaphor Agent: Run ALL 14 axes for Flagship tier:
  Core 4: FEEL / UNDERSTAND / DO / BECOME
  Extended 5: NAVIGATE / TRUST / EVALUATE / ORIENT / RECONCILE
  Structural 5: COMPARE / IDENTIFY / DISCOVER / SEE / REMEMBER
  KortAI-specific: RECONCILE produces highest tension (richness ~27).
  Extended axes (especially RECONCILE) are where Flagship metaphors originate.
  Output: axis selections with richness ratings, axis interaction effects.
```
- Classification: CRITICAL

#### IMPORTANT

**I01-01: Richness Formula (Opposition x Overlap x Width) missing**
- Source: HV-1 -- multiplicative scoring formula
- Status in FINAL: Absent. No concrete scoring protocol for selecting between tensions.
- Insertable: "Richness Formula (TC Phase 2): Opposition (1-3) x Overlap (1-3) x Width (1-3). Score. Minimum 8 to proceed. Zero on any dimension = zero richness."
- Classification: IMPORTANT

**I01-02: Domain Search Menu (10 compatible families) missing**
- Source: HV-3 -- 10 pre-vetted metaphor domain categories + 5 incompatible families
- Status in FINAL: Not referenced. Metaphor agent must derive domains from scratch.
- Insertable: Route skill lines 528-543 to Metaphor Agent reference. Note 5 incompatible families (organic/biological, liquid/fluid, atmospheric, textile, musical).
- Classification: IMPORTANT

**I01-03: 5-Category Property Extraction (Phase 4.1) missing**
- Source: HV-4 -- "systematic extraction across Spatial, Temporal, Material, Behavioral, Relational"
- Status in FINAL: Not referenced in B8. Metaphor agent has no systematic extraction requirement.
- Insertable: Add to B8 or Section E: "TC Phase 4.1: Extract metaphor properties across 5 categories (Spatial/Temporal/Material/Behavioral/Relational). If ANY category yields zero properties, metaphor is insufficiently rich."
- Classification: IMPORTANT

**I01-04: Builder Warning Categories (W-DEADZONE through W-IMPLICIT) missing**
- Source: HV-7 -- 6 warning categories based on Perceptual Risk and Pacing output
- Status in FINAL: Absent. Builder agents receive no metaphor-specific warnings from the metaphor agent.
- Insertable: "Metaphor Agent outputs: W-DEADZONE, W-UNIFORM, W-LABEL, W-IMPLICIT (or confirmed absence). Builder agents receive appended warning codes. W-IMPLICIT = 'Make reader FEEL metaphor without NAMING it.'"
- Classification: IMPORTANT

**I01-05: Fractal Consistency Gate (5 scales, Phase 4.7) missing**
- Source: HV-8 -- "Mandatory gate requiring same design pattern at multiple scales. Flagship: 5 scales."
- Status in FINAL: B5 covers scale-channel rules (SC-01 through SC-08) but does not reference TC Phase 4.7 fractal consistency gate specifically. SC-07 (Scale Coherence Index) is partially related.
- Partially present: SC-07 requires same principle at >= 3 scales (weaker than TC's 5-scale requirement)
- Insertable: Clarify in SC-07 that Flagship requires 5 scales: Navigation/Page/Section/Component/Character.
- Classification: IMPORTANT

**I01-06: Phase 3.5 Metaphor Commitment Gate missing**
- Source: HV-11 -- "formal lock-in gate with 3 commitment verification questions"
- Status in FINAL: P-02 prohibits library access before metaphor lock-in. But the formal commitment verification (3 questions) and divergence justification protocol are absent.
- Insertable: Add to B7 or Section E: "After metaphor commitment (Phase 3.5): state committed metaphor in 1 sentence, document WHY it was selected (vs 2 alternatives), confirm 3 commitment questions answered. You are NOW LOCKED IN. No changes after library access."
- Classification: IMPORTANT

#### NICE-TO-HAVE

**N01-01: Translation Grammar Lookup Table (Phase 4.2) missing from reference files**
- Source: HV-5 -- lookup table mapping abstract properties to CSS expressions
- Status: Not in reference library routing (Section E). Builder would need to derive CSS from scratch.
- Classification: NICE-TO-HAVE (can be routed to Section E at zero prompt cost)

**N01-02: 6-Channel constraint boundary not in Section E**
- Source: HV-6 -- "6 and ONLY 6 CSS channels for metaphor expression"
- Status: Not referenced. The 6 channels (Background, Border, Typography, Spacing, Layout, Color accent) prevent soul violations.
- Classification: NICE-TO-HAVE

**N01-03: TC Skill line-range routing missing from Section E**
- Source: Section 4 of audit -- "Route these TC sections to specific agents"
- Status: Section E routes TC SKILL.md to Metaphor Agent but doesn't specify which lines.
- Classification: NICE-TO-HAVE

**N01-04: Test Results Summary (6 key findings from 15 layouts) missing**
- Source: Audit appendix -- TC skill appendix with 15-layout test findings
- Status: Not in Section E. Builder would benefit from seeing what the pipeline predicts vs produces.
- Classification: NICE-TO-HAVE

---

## SOURCE FILE 02: PA-SKILL-AUDIT.md

### What This File Contains
Deep audit of perceptual-auditing skill (847 lines). Rating 4/10 coverage. Identifies 7 critical gaps, 7 high-value additions.

### Current Status in FINAL Prompt
The FINAL prompt (v2) now has: C4 (PA deployment with 9 auditor assignments, screenshot pre-capture, Tier A questions), C5 (gate-then-ranking with severity system), B9 (PA integration routing with PA-50 through PA-53 routing to Auditor C). Coverage improved significantly but key operational protocols remain absent.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C02-01: Cold Look Protocol not specified**
- Source: GAP-C2 -- "5-step cold look protocol, responses locked before answering questions"
- Status in FINAL: C4 mentions "COLD LOOK PROTOCOL: 5 seconds screenshot, gut reaction, THEN questions." But the 4 locked responses (gut reaction, worst thing, best thing, ship verdict) are NOT enumerated. The locking mechanism is not specified.
- Partially present: Concept mentioned, protocol not enumerated
- Insertable (add to C4):
```
COLD LOOK PROTOCOL (full specification):
  1. CLEAR: Close all CSS files, build plan, prior audit context.
  2. LOOK (5 seconds): Open viewport screenshot. DO NOT read text.
     Absorb shape, color, weight distribution only.
  3. REACT (immediate, 4 responses -- LOCKED before reading questions):
     Gut reaction: [one sentence]
     Worst thing: [one visual element]
     Best thing: [one visual element]
     Ship verdict: YES / YES WITH RESERVATIONS / NO
  4. LOCK: These 4 responses are FINAL. Cannot change after question set begins.
  5. REPEAT: Cold look independently for each viewport screenshot.
```
- Classification: CRITICAL

**C02-02: Scroll-through protocol not specified**
- Source: GAP-C6 -- "Scroll-through forces viewport-scale examination"
- Status in FINAL: C4 specifies "50-80 screenshots" and "4 viewports" but does NOT specify that screenshots must be viewport-scale (not full-page). Full-page screenshots compress void; viewport-scale captures it.
- Partially present: Screenshot count specified, not method
- Insertable (add to C4):
```
SCREENSHOT CAPTURE PROTOCOL:
  - Cold look screenshots: fullPage at each viewport (4 images total)
  - Scroll-through: viewport-sized ONLY (fullPage: false). Scroll 80% of
    viewport height, capture, repeat until bottom.
  - Produces: 10-15 viewport-scale images per viewport width
  - Total target: 50-80 screenshots across 4 viewports
  - CRITICAL: Full-page screenshots compress void and make it invisible.
    ONLY viewport-scale scroll-through detects real spatial failure.
```
- Classification: CRITICAL

**C02-03: Auditor CSS language hard block absent**
- Source: ADD-H6 -- "Answers may NOT contain CSS property names"
- Status in FINAL: Not mentioned. Auditors will likely describe findings in CSS terms, losing perceptual quality.
- Insertable (add to C4):
```
PERCEPTUAL LANGUAGE REQUIREMENT: Auditor answers may NOT contain: px, rem, em,
%, hex, rgb, rgba, border-radius, box-shadow, padding, margin, font-size,
font-family, line-height, max-width, flex, grid, opacity, or any CSS property.
Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, anxious, confident, broken, polished, warm, cold, sharp, cluttered,
breathing, stacking, flowing, stuck, drifting.
```
- Classification: CRITICAL (prevents CSS-verification masquerading as perceptual audit)

**C02-04: Dual Severity Track not operational**
- Source: GAP-C5 -- "Two independent tracks: Rule Track and Perception Track"
- Status in FINAL: C5 has LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC severity levels but these merge both tracks into one scale. The Rule Track (soul violation / convention bug) and Perception Track (would-not-ship / looks-wrong) are distinct and must not be conflated.
- Partially present: Severity levels exist but track separation is absent
- Insertable (add to C5 synthesis section):
```
DUAL SEVERITY TRACK:
  Rule Track: SOUL VIOLATION / CONVENTION BUG / OVERFLOW (specification failures)
  Perception Track: WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER (experience failures)
  Rules:
  - A finding exists on BOTH tracks simultaneously if applicable
  - Perception track findings CANNOT be dismissed because "convention allows it"
  - Convention vs perception conflict: escalate to team-lead
  Root cause classification per finding: CONTENT / SPACING / STRUCTURAL / EXECUTION / METAPHOR
```
- Classification: CRITICAL

#### IMPORTANT

**I02-01: Builder's 10 Self-Check missing 3 items**
- Source: ADD-H1 -- B-02 (transition quality), B-05 (section visual differentiation), B-07 (metaphor structural presence per section)
- Status in FINAL: B10 has 16 items but is missing B-02, B-05, and B-07.
- Insertable (add to B10):
```
[ ] Each section visually distinct from previous (different visual treatment,
    diagram, table, or callout density)
[ ] Transition between sections is designed moment (visual shift, breathing
    space, bridge prose) -- NOT just empty gap
[ ] Without reading text labels, can metaphor be sensed from visual structure?
```
- Classification: IMPORTANT

**I02-02: PA-05 full 4-criterion evaluation protocol absent**
- Source: GAP-C4 -- "PA-05c has THREE sub-dimensions, ALL must pass"
- Status in FINAL: B9 mentions "PA-05 scoring: 4 sub-criteria: Designed, Coherent, Proportionate, Polished" and "Calibration: Middle=4/4." But the EVALUATION PROTOCOL (what auditors look for in each sub-criterion) is absent. PA-05c has 3 sub-dimensions.
- Insertable (add to C4 or B9):
```
PA-05 EVALUATION PROTOCOL:
  05a DESIGNED: intentional composition vs assembled components? Multi-scale
    coherence, rhythm variation, deliberate focal points.
  05b COHERENT: one designer vocabulary? Consistent mechanism deployment, no
    dialect shifts. Ratio check: largest/smallest section padding >= 2.0x
    (target 2.5x+). 2.0x is floor, not target.
  05c PROPORTIONATE (3 sub-dimensions, ALL must pass):
    Horizontal: content fills 65-80% viewport width
    Vertical: every third of page has designed moment
    Breathing: negative space designed (silence in music) not abandoned (void)
  05d POLISHED: ready to ship? Missing elements, token compliance, transition grammar.
  Scoring: 4/4 = YES, 3/4 = YES WITH RESERVATIONS, 2/4 or fewer = NO.
```
- Classification: IMPORTANT

**I02-03: Information isolation matrix absent**
- Source: ADD-H5 -- "strict information isolation protocol" (4 blocked pathways)
- Status in FINAL: C4 says auditors receive screenshots only and "ZERO build context." But the specific blocked information pathways are not enumerated.
- Insertable: Add to C4: "Auditors receive ONLY: screenshots + PA questions. BLOCKED: build plan, mechanism count, metaphor name, design system files, prior audit results, sovereignty classification. Information isolation is NON-NEGOTIABLE."
- Classification: IMPORTANT

**I02-04: Root cause classification protocol absent from synthesis**
- Source: ADD-H7 -- 5 root cause types with fix strategies
- Status in FINAL: C5 has a verdict system but no root cause classification for findings.
- Insertable (add to C5):
```
SYNTHESIZER ROOT CAUSE CLASSIFICATION (required for each BLOCKING finding):
  CONTENT: Add content or remove containers. CSS fixes useless.
  SPACING: Adjust padding/margin values.
  STRUCTURAL: Restructure information architecture.
  EXECUTION: Fix CSS to match design intent.
  METAPHOR: Modify metaphor expression or choose different metaphor.
Correct root cause prevents ceiling failure repeat: void was misclassified as
SPACING when it was CONTENT, causing fix to fail.
```
- Classification: IMPORTANT

**I02-05: Auditor C overload not addressed**
- Source: Audit Section 6 -- "Auditor C is overloaded. 11 questions is 2.5x the median."
- Status in FINAL: C4 assigns Auditor C 11 questions as specified. But FINAL prompt does not weight Auditor C's findings more heavily or offer the split into C1/C2 option.
- Insertable: Add to C4: "AUDITOR C IS THE PRIMARY SPATIAL EVALUATOR. If synthesis must prioritize, Auditor C's findings rank highest. Consider splitting into C1 (PA-09,10,11,30,31) and C2 (PA-32,33,50,51,52,53) if context window permits."
- Classification: IMPORTANT

#### NICE-TO-HAVE

**N02-01: Metaphor-Awareness Principles for auditors not in C4**
- Source: ADD-H3 -- "metaphor expression spectrum: Structural > Atmospheric > Labeled > Announced"
- Status: Not in C4. Auditors may flag metaphor-driven spatial decisions as failures.
- Classification: NICE-TO-HAVE

**N02-02: Checkpoint 3-embedded pre-audit content audit absent**
- Source: ADD-H2 -- "Content Audit (before CSS): each zone >= 3 distinct content elements"
- Status: Partially covered by P-07 (checkpoint artifacts) but the binary check is not specified.
- Classification: NICE-TO-HAVE

**N02-03: PA-33 (largest empty space: silence or void?) not in gate**
- Source: Audit PA question map -- PA-33 rated HIGH gap, maps to spatial failure diagnosis
- Status: Not routed to any auditor in C4. Auditor C question list includes PA-30/31/32/33 -- wait, PA-33 IS assigned to Auditor C in C4. But the SPECIFIC QUESTION is not reproduced. Auditors need the question text, not just the number.
- Classification: NICE-TO-HAVE

---

## SOURCE FILE 03: CEILING-REFLECTIONS-AUDIT.md

### What This File Contains
Lessons from ceiling experiment failure (19 files analyzed). 10 top lessons, failure taxonomy, prevention mapping, PA calibration insights.

### Current Status in FINAL Prompt
Several ceiling lessons ARE incorporated: void rules (S-09 through S-15), communication protocol (C2), mode 4 PA (C4), content-mechanism distinction (P-08). Key gaps remain.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C03-01: "3 distinct content elements per section" rule absent**
- Source: L1 (Lesson 1): "Each zone/section MUST contain >= 3 distinct content elements (text block, table, code block, diagram, list). Empty structural containers = BLOCKING defect."
- Status in FINAL: S-05 requires "each planned section with >= 200px rendered content height" but does NOT require >= 3 distinct element types. A section with 200px of blank padding-wrapped text is a BLOCKING defect that S-05 cannot catch.
- Insertable (add to B1 or as new S-16):
```
S-16. Content element count: each section/zone MUST contain >= 3 distinct
  content element types (text block, table, code block, diagram, list, callout).
  A section with only text paragraphs does NOT meet this requirement.
  Empty structural containers with spacing = BLOCKING defect.
  Verify: count element types per section before Gate 2.
```
- Classification: CRITICAL

**C03-02: PA-05b measurement requirement missing**
- Source: L6: "PA-05b: MEASURE largest and smallest section padding. Compute ratio. Must be >= 2.0x with >= 0.5x margin (target 2.5x+)."
- Status in FINAL: B10 builder self-check does not include PA-05b measurement. Builders estimate rather than measure.
- Insertable (add to B10):
```
[ ] PA-05b: Measure largest and smallest section padding.
    Ratio = largest / smallest. Target >= 2.5x (floor 2.0x = zero margin).
    Middle-tier hit 2.0x exactly = zero safety margin. Target 2.5x+.
[ ] PA-05d: Measure non-framework CSS lines / total declarations. >= 15%.
    Do NOT estimate. Count.
```
- Classification: CRITICAL (prevents false-positive PA-05 scores)

#### IMPORTANT

**I03-01: Structural halt trigger for consecutive void absent**
- Source: L4, Prevention mapping for B2: "If embedded auditor identifies >= 2 consecutive blank viewports, HALT build."
- Status in FINAL: S-12 (B1 detection, 2+ consecutive viewport positions < 30%) is a gate check but does NOT trigger an automatic build halt. It's treated as a rule violation, not a halt trigger.
- Insertable (add to B7 or P-08):
```
STRUCTURAL HALT: If >= 2 consecutive viewport positions below 30% content
at any point during Pass 1 monitoring, HALT build immediately.
DO NOT attempt CSS fix. Return to Content Architect for content injection.
CSS fixes cannot rescue content failures (validated: 40 ceiling patches, void unchanged).
```
- Classification: IMPORTANT

**I03-02: Footer reachability check missing from self-check**
- Source: L3 / Prevention A3: "Footer MUST be visible in final 2 scroll frames."
- Status in FINAL: S-04 requires footer to exist with visible content and "Gap <= 1 viewport height from last content." But the VERIFICATION protocol (scroll to page bottom, confirm footer visible in final 2 frames) is not in B10.
- Insertable (add to B10):
```
[ ] Footer visibility: scroll to page bottom. Footer MUST be visible
    in final 2 scroll frames at 1440px. Ceiling failure: footer HTML
    existed but was unreachable behind 4,700px void.
```
- Classification: IMPORTANT

**I03-03: Convention-vs-intention principle absent from conviction**
- Source: L7: "Design shaped by checklist compliance rather than authentic experience."
- Status in FINAL: Section A has "mission is beauty, not compliance" (Section D line) and "zero judgment language" in spec. But the specific distinction "Constraint-shaped asks 'did I meet the rule?' Intention-shaped asks 'does this serve the reader?'" is not in conviction layer.
- Insertable (add to A6 Experiential Laws):
```
- Convention-shaped asks "did I meet the rule?" Intention-shaped asks
  "does this serve the reader?" Both pass the checklist. Only one produces quality.
```
- Classification: IMPORTANT

**I03-04: Container width measurement PROTOCOL missing from self-check**
- Source: L8: "Measure .content-container or equivalent max-width, NOT viewport width."
- Status in FINAL: B10 has "S-01: Container 940-1100px (getBoundingClientRect at 1440px viewport)" but does not specify WHICH element to measure. Ceiling false-positive measured 2,160px viewport not content container.
- Insertable (clarify in B10):
```
[ ] S-01: Container width: measure THE CONTENT CONTAINER (not viewport).
    Use: document.querySelector('[class*=container], [class*=content], main')
         .getBoundingClientRect().width
    Must be 940-1100px. NOT viewport width (ceiling measured 2,160px viewport).
```
- Classification: IMPORTANT

#### NICE-TO-HAVE

**N03-01: Two-PA vs Mode-4 calibration note absent**
- Source: Section 6.1 -- "2-PA audit scored 3/4, recommended 'ship after fix.' Mode 4 with 9 auditors scored 1.5/4, DO NOT SHIP."
- Status: Not in FINAL prompt. Builders/leads may not understand WHY 9 auditors are required.
- Classification: NICE-TO-HAVE

**N03-02: Screenshot fresh-eyes rationale absent**
- Source: Section 6.4: "Context creates confirmation bias: 'I know there are 14 mechanisms, so the page must be rich.'"
- Status: FINAL prompt says "ZERO build context" but not why. Including the rationale prevents workarounds.
- Classification: NICE-TO-HAVE

**N03-03: "Content-first" methodology as pre-build step absent**
- Source: Section 4.5: "Lookup mode: content has X -> mechanism Y. Don't ask builder to both derive AND execute."
- Status: FINAL prompt separates Planner from Builder (two-instance pattern P-03) but doesn't explicitly state builder should execute from plan, NOT derive from metaphor independently.
- Classification: NICE-TO-HAVE

---

## SOURCE FILE 04: FLAGSHIP-PREP-CROSSREF.md

### What This File Contains
Cross-reference of all 21 flagship preparation files against prompt structure. Priority 1 (must-have) and Priority 2 (should-have) gaps identified.

### Current Status in FINAL Prompt
FINAL prompt has incorporated: content adaptation (B11), pass structure (C1), kill criteria (C3), restraint protocol (C-12 through C-14), intentionality dimensions (C-15 through C-17). Key gaps remain.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C04-01: Zone boundary test (ALL THREE conditions) not verifiably binary**
- Source: File 05 (content-first), P-05 in FINAL: "Zone boundary requires ALL THREE: content mass >= 800px, content type change, reader intent change."
- Status in FINAL: P-05 IS present and correct. However, "content mass >= 800px" is stated but NOT verifiable via self-check. No measurement method is given.
- Insertable (add measurement to P-05 or B10):
```
P-05 verification: Measure each zone's content height with:
  document.querySelector('[class*=zone], [class*=section]').scrollHeight
  Must be >= 800px per zone. Three NOs on any condition = MERGE zones.
```
- Classification: CRITICAL (P-05 is correct but unverifiable without method)

**C04-02: Pre-build content quality gate (KB-01) weakness**
- Source: File 07 kill criteria, C3 KILL CRITERIA: KB-01 "content sections >= 4 with >= 200 words each."
- Status in FINAL: KB-01 IS present in C3. But "200 words per section" does not prevent the ceiling failure where sections had text but the TEXT was sparse/thin. The ceiling had adequate word counts but insufficient element variety per section.
- Insertable (strengthen KB-01): "KB-01: >= 4 content sections with >= 200 words AND >= 3 distinct content element types each."
- Classification: CRITICAL

**C04-03: 5-pass decomposition not clearly specified as sequential**
- Source: File 17 (no-compromise pipeline): "5 passes with single cognitive focus per pass."
- Status in FINAL: C1 specifies passes (Pass 0, 0.5, 1, 2, 3, 4) with agents. But the "single cognitive focus per pass" principle -- the reason multi-concern builders fail -- is not stated.
- Insertable (add to C1 preamble):
```
5-PASS ARCHITECTURE: Each pass has ONE cognitive focus. Ceiling failure combined
Mechanism Deployment + Metaphor Integration in one build -- builder lost both.
Pass 0: Content + Metaphor (understanding)
Pass 0.5: Planning (coordination)
Pass 1: Spatial Skeleton (space)
Pass 2: Mechanism Deployment (richness)
Pass 3: Metaphor Integration (expression)
Pass 4: Intentionality (meaning)
NO BUILDER HANDLES TWO PASSES.
```
- Classification: CRITICAL

#### IMPORTANT

**I04-01: Crown jewel 15 techniques not in reference library**
- Source: File 11 -- "15 must-replicate techniques with specific CSS patterns"
- Status in FINAL: Section E routes Metaphor Agent to CD-006 and DD-006 HTML files. But the 15 techniques are not extracted into a reference document. Builder must forensically derive techniques from raw HTML.
- Insertable: Add to Section E (Intentionality Builder reads): "`11-crown-jewel-forensics.md` -- 15 must-replicate techniques with CSS patterns from CD-006."
- Classification: IMPORTANT

**I04-02: Competitive skeleton build (Pass 1) not specified**
- Source: File 17: "COMPETITIVE BUILD in Pass 1: two builders, team-lead picks better skeleton, doubles P(good skeleton) from ~70% to ~91%."
- Status in FINAL: C1 specifies "Skeleton Builders A+B (Sonnet, competitive): 2 parallel, team-lead picks better." The RATIONALE is absent. Team-lead may not understand why two builders are needed or how to evaluate "better."
- Insertable (add to C1 Pass 1 description):
```
COMPETITIVE RATIONALE: Two independent skeleton builders doubles probability
of good skeleton (~70% -> ~91% per probabilistic model). Team-lead evaluates
based on: S-01 (container), S-02 (void ratio), S-04 (footer), S-06 (section count).
Discard the inferior skeleton entirely. Do not merge them.
```
- Classification: IMPORTANT

**I04-03: Spatial re-check after Pass 2 (not just Pass 1) missing from gates**
- Source: File 09 (adversarial pre-mortem): "Re-run SC-02 and SC-03 AFTER Pass 2."
- Status in FINAL: P-08 says "Spatial re-check after Pass 2: S-01 + S-02 must still pass." Gate 3 also mentions "spatial re-check (regression detection)." This IS present.
- Note: This item is PRESENT. Marking for awareness.

**I04-04: "Composition felt through" vs "specifications applied correctly" absent**
- Source: File 05 Section 4.5: "Specifications applied correctly rather than composition felt through."
- Status in FINAL: Section A has compositional fluency section (A5). But the specific language "the builder derived and executed vs the builder executed from plan" distinction is not in the prompt.
- Insertable (add to A5 or A4):
```
The test for compositional fluency is NOT "were mechanisms applied correctly?"
but "does the page feel designed by a composer, not assembled by a checker?"
Correct application of 12 mechanisms can feel WORSE than thoughtful use of 8.
```
- Classification: IMPORTANT

**I04-05: Metacognitive checkpoint anti-performative principle absent**
- Source: File 08: "Checkpoints must be EXTERNALIZED (different agent), CONCRETE (number not judgment), and have CONSEQUENCES (what stops on failure)."
- Status in FINAL: C2 communication protocol has 5 checkpoints with specific formats and measurement requirements. The anti-performative principle (psychological vs mechanical function) is not stated.
- Classification: IMPORTANT

#### NICE-TO-HAVE

**N04-01: Attention bandwidth theory not in conviction**
- Source: File 20: "Agent attention budget ~100 units. Binary rules ~0.5-1 units. Judgment rules ~4-6 units. Spatial proportion is EMERGENT from attention LEFT OVER."
- Status in FINAL: A6 Experiential Laws has: "Every rule has an attention cost. Binary rules cheap (~1 unit)." This IS present (partially).
- Note: Already partially present. Marking NICE-TO-HAVE for expanded version.

**N04-02: "Be the argument" principle (DD-006 self-reference) absent**
- Source: File 07 (crown jewel forensics): "DD-006 demonstrates fractal density by BEING fractal."
- Status in FINAL: C-16 requires ">=1 self-referential element." But the principle "if the page explains X, the page should structurally BE X" is not stated.
- Classification: NICE-TO-HAVE

---

## SOURCE FILE 05: PRE-FLIGHT-CROSSREF.md

### What This File Contains
Cross-reference of 24 pre-flight files vs prompt structure. 114 items tracked across 11 dimensions. 55% overall coverage. 6 critical actions identified.

### Current Status in FINAL Prompt
FINAL (v2) improved significantly. Container width rule updated to 940-1100px. Convergent items 90% present. Key nuance recovery items (V1-V3) remain mostly absent.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C05-01: Void threshold discrepancy still not fully resolved**
- Source: V1-D1 -- "1,620 vs 2,160 vs 1,350px" (three competing values)
- Status in FINAL: S-10 says "No contiguous void > 2160px (1.5 x 1440px viewport width)" and Appendix says "Void threshold (skeleton): 1620px" and "Void threshold (final): 2160px."
- The discrepancy: 2160px uses 1440px viewport WIDTH as base. But viewport WIDTH ≠ content height per scroll. The correct base is viewport HEIGHT (approximately 900px at 1440px width). 1.5 x 900px = 1350px.
- Pre-flight report recommends 1350px as the mathematically correct value.
- Impact: Using 2160px as void threshold allows 2.4 viewport-height-equivalents of void. Middle experiment would have failed at 1350px.
- Insertable: Clarify S-10 and Appendix: "S-10: No contiguous void > 1350px (1.5 x 900px viewport height at 1440px). NOTE: 2160px (1.5 x viewport WIDTH) is mathematically incorrect and overly permissive."
- Classification: CRITICAL

**C05-02: S3 experiential laws mostly absent**
- Source: S3 analysis -- "6 of 10 experiential laws missing"
- Status in FINAL: A6 (Experiential Laws) has 6 lines. Missing laws include:
  - "Plans do NOT prevent spatial failure. Only GATES prevent spatial failure." (PRESENT)
  - "Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived." (PRESENT)
  - "Designed MOMENTS are not designed COMPOSITION." (PRESENT)
  - Missing: "Agents don't spontaneously communicate" (partially addressed)
  - Missing: "Breadth > depth for finding issues" (implicit in Mode 4)
  - Missing: "Concept quality does NOT predict product quality" (PRESENT)
  - Missing: "Accidental constraint outperforms intentional permission" (PRESENT)
  - Missing: "Plans don't prevent spatial failure. Only GATES do." -- Wait, PRESENT
  - Missing: "Measurement-perception gap is total" -- ABSENT
  - Missing: "Applied-vs-felt gap" -- ABSENT
  - Missing: "Signal-to-noise inversion" -- ABSENT
- Insertable (add to A6):
```
- Measurement-perception gap is total: a page can be 100% spatially correct
  by programmatic measurement and 0% spatially successful by perception.
  Measurements verify floor; perception determines quality.
- Signal-to-noise inversion: more signal does NOT produce more perceived richness.
  The ceiling's 14 mechanisms left 1 visible. Saturation destroys drama.
- Applied-vs-felt: mechanisms can be applied correctly and still feel assembled,
  not composed. Correct application ≠ felt experience.
```
- Classification: CRITICAL (these are conviction-layer anchor points)

#### IMPORTANT

**I05-01: Restraint ratio not explicit (convergent item 18)**
- Source: SECTION 1 -- Item 18: "Document >=21 considered-and-rejected mechanisms (>=1.5:1 ratio vs deployed)."
- Status in FINAL: C-12 says "Rejection log: document >= 21 considered-and-rejected mechanism placements (>= 1.5:1 ratio vs deployed)." This IS present.
- Note: PRESENT. Confirming presence for scanner record.

**I05-02: Checkpoint message examples absent**
- Source: V1-6, SECTION 5 Layer 3B: "Agents need to see what good messages look like."
- Status in FINAL: C2 has 5 checkpoints (CP-A through CP-E) with exact format. But no worked message examples are provided.
- Insertable (add to C2 or Section E):
```
MESSAGE EXAMPLE (CP-A):
"Container: 960px. Estimated height: 4,200px. Content-to-void: 68:32.
Header: 180px (20%). My biggest spatial concern: zone 3 has only 2
content elements and relies on spacing to fill 400px."

MESSAGE EXAMPLE (CP-C spatial gate):
"SC-01: PASS (960px). SC-02: PASS (max void 800px). SC-03: PASS.
S-04: PASS (footer 40px gap from content). All spatial gates PASS.
Proceeding to Pass 2."
```
- Classification: IMPORTANT

**I05-03: Kill criteria not specified as abort triggers with consequences**
- Source: E1 analysis -- "Kill criteria designed but not placed in prompt as ABORT triggers"
- Status in FINAL: C3 has "KILL CRITERIA QUICK REFERENCE" with KB-01 through FK-01. But the consequences of failure are not enumerated (ABORT? REDESIGN? DOWNGRADE?).
- Insertable (add to C3):
```
KILL CRITERION CONSEQUENCES:
  KB-01 FAIL: ABORT. Add content to all sections before retry.
  KB-03 FAIL: RESTRUCTURE content architecture. Do not proceed.
  SP-01 FAIL (after 2 fix cycles): ABORT Pass 1. Ship as ceiling-equivalent or stop.
  FK-01 FAIL: DO NOT SHIP. Identify root cause (CONTENT/STRUCTURAL/EXECUTION).
```
- Classification: IMPORTANT

**I05-04: Scale-attention matrix absent**
- Source: V3-1 -- "6-level table: quality prediction per scale count"
- Status in FINAL: A3 has the smoking gun (2 scales PA-05 4/4 vs 4 scales 1.5/4) but not the full scale-attention matrix.
- Insertable (add to A3 or reference library): Route scale exploration findings to Planner reference.
- Classification: IMPORTANT

**I05-05: Falsification criteria absent**
- Source: V3-3 -- "5 specific observational tests that would FALSIFY the flagship hypothesis"
- Status in FINAL: Absent. No mechanism to know if the flagship proves or disproves its core thesis.
- Insertable: "Flagship is a HYPOTHESIS TEST, not a demonstration. It would be falsified if: (1) spatial confidence is HIGH but quality is LOW, (2) composition is high but perception disagrees, (3) iteration count outweighs pass sophistication."
- Classification: IMPORTANT

**I05-06: S4 blind spots partially unaddressed**
- Source: S4 analysis -- "0/5 blind spots addressed" (note: some were added in v2)
- Status in FINAL: FINAL prompt has: staged downgrade (C4 "STAGED DOWNGRADE at 240 min"), builder conviction stance (Section D). Still missing:
  - BS-2 (reader journey temporal spec) -- A8 now covers this (5-act story). PRESENT.
  - BS-3 (failure-as-information) -- ABSENT
  - BS-4 (calibrated "good enough") -- ABSENT
- Insertable (add to C2 or Section D):
```
FAILURE AS INFORMATION: If a kill criterion triggers, BEFORE aborting:
  1. Document what was caught
  2. Screenshot the failing state (3 images)
  3. Hypothesize WHY the plan produced the violation
  Then abort. Learning data informs next experiment.
```
- Classification: IMPORTANT

#### NICE-TO-HAVE

**N05-01: E4 Law 5 (primacy ordering) not applied**
- Source: E4 analysis -- "Most dangerous rules first in builder prompt"
- Status: B10 self-check starts with S-01, S-07, S-02 -- container, CPL, void. This IS roughly priority-ordered. Minor improvement possible.
- Classification: NICE-TO-HAVE

**N05-02: File Diff Gate not mentioned**
- Source: E1 -- "Before/after file comparison as enforcement type"
- Status: Not in FINAL prompt. Mechanism builder could corrupt HTML from Pass 1 without detection.
- Classification: NICE-TO-HAVE

**N05-03: "Silence after silence is void" principle absent**
- Source: V2-8 -- key design principle for silence zones
- Status: FINAL C-13 requires ">=2 designed silence zones" and C-14 specifies signal-to-silence ratio. But the principle "Silence after silence is void, not restraint" is not stated.
- Insertable: Add to C-13: "'Silence after silence is void, not restraint.' Silence zones must be separated by signal-rich sections."
- Classification: NICE-TO-HAVE

**N05-04: Per-act mechanism deployment recommendations absent**
- Source: V3-6 -- "specific mechanisms per scroll act"
- Status: A8 now has the 5-act scroll structure. But specific mechanism recommendations per act (Act 1: identity markers; Act 2: density variation; etc.) are not specified.
- Classification: NICE-TO-HAVE

---

## SOURCE FILE 06: SCALE-METACOGNITIVE-AUDIT.md

### What This File Contains
7 convergent scale findings + 6 blind spots + 4 cognitive bias countermeasures + 5 interdimensional connections. 10 documents analyzed (~5,800 lines).

### Current Status in FINAL Prompt
FINAL prompt has substantial scale content: A3 (anti-scale model, Alexander/Salingaros formula, smoking gun), SC-01 through SC-08, SC-07 (Scale Coherence Index). Finding 3 (anti-scale model) and Finding 5 (restraint) are well-captured.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C06-01: Iteration protocol after final gate absent**
- Source: Finding 6 -- "After final gate, if verdict is Strong not Crown Jewel: targeted CSS fix + re-check"
- Status in FINAL: ABSENT. FINAL prompt has no post-gate iteration protocol. After Gate 5 (Mode 4 PA), the only options are SHIP or DO NOT SHIP. No fix-and-re-check cycle is specified.
- Insertable (add to C3 or B7):
```
POST-GATE ITERATION PROTOCOL (Finding 6 -- Iteration > Specification):
If Gate 5 verdict is "SHIP WITH NOTES" or better but NOT crown jewel:
  1. Identify top 3 PA findings by severity
  2. Create targeted fix plan (CSS-only, no structural changes, 15-20 min)
  3. Apply fixes
  4. Re-run: S-01, S-02, PA-05 quick-check (auditor A only)
  5. If PA-05 improves >= 0.5 points: ship improved version
  6. If no improvement: ship at current state (diminishing returns)
Max 2 iteration cycles. Total additional budget: 40 min.
```
- Classification: CRITICAL

**C06-02: Pre-mortem gate absent**
- Source: Wild Card 4, Cognitive Bias 4 -- "Before experiment launch, team lead answers: assume catastrophic failure, most likely cause?"
- Status in FINAL: ABSENT. FINAL prompt has no pre-mortem gate. Preparation paradox documented but not operationalized.
- Insertable (add to C1 or B7):
```
PRE-MORTEM GATE (team lead, before experiment launch):
"Assume this experiment fails catastrophically. What is the most likely cause?"
If the cause is only DOCUMENTED in preparation files (not procedurally prevented):
DO NOT LAUNCH. Add a procedural prevention first.
Common pre-mortem scenarios: content too thin for zones, metaphor requires labels,
builder misinterprets mechanism deployment plan.
```
- Classification: CRITICAL

#### IMPORTANT

**I06-01: Dual richness sources synthesis not in conviction**
- Source: Finding 7 -- "Source 1 (Constraint Pressure) + Source 2 (Design Intelligence) = crown jewel"
- Status in FINAL: A4 IS present (Dual Richness Sources, 8 lines): "Source 1 (Constraint Pressure)... Source 2 (Design Intelligence)... Both REQUIRED."
- Note: PRESENT. This was incorporated in v2.

**I06-02: Wild Card 3: Temporal confidence rule present but incomplete**
- Source: Wild Card 3 -- "metronomic rhythm failure mode. Section spacing MUST vary."
- Status in FINAL: C-11 IS present: "Section spacing MUST vary: at least 3 distinct spacing values across sections. Metronomic rhythm (all gaps equal) is a design failure." And MC-08 (Anti-metronome): ">= 3 distinct padding/margin values."
- Note: PRESENT. Temporal confidence IS encoded.

**I06-03: Absence coherence principle absent from conviction**
- Source: Wild Card 6 -- "If you omit a higher-order element, omit ALL elements at that tier."
- Status in FINAL: Section D (Conviction Closing) has: "ABSENCE COHERENCE: If you omit a higher-order element (metaphor vocabulary, zone labels, cognitive transitions), omit ALL elements at that tier."
- Note: PRESENT. This was incorporated.

**I06-04: Narrative prohibition for audits absent**
- Source: Cognitive Bias 1 -- "All verdicts structured as EVALUATION not SUCCESS/FAILURE"
- Status in FINAL: ABSENT from C4/C5. The ceiling experiment's "SUCCESS WITH CRITICAL DEFECT" framing allowed the catastrophic void to be minimized.
- Insertable (add to C5):
```
NARRATIVE PROHIBITION: Verdicts are EVALUATIONS not narratives.
Format: "PA-05: 3.5/4. PA-09: BLOCKING (3 consecutive void viewports).
PA-17: WOULD-NOT-SHIP." NOT: "SUCCESS WITH ONE SPATIAL CONCERN."
Evidence determines verdict. Verdict does NOT filter evidence.
DO NOT construct narrative until ALL auditors have submitted findings.
```
- Classification: IMPORTANT

**I06-05: Abandon trigger (6/9 auditors WOULD-NOT-SHIP) absent**
- Source: Cognitive Bias 2 -- "If >= 6/9 auditors flag WOULD-NOT-SHIP on same finding: fix path = ARCHITECTURAL RESTRUCTURE"
- Status in FINAL: C5 has corroboration escalation ("5+ auditors agree on severity -> auto-escalate one tier") but does NOT specify that 6/9 convergence on a single finding triggers architectural restructure (not CSS patch).
- Insertable (add to C5):
```
ABANDON TRIGGER: If >= 6/9 auditors flag WOULD-NOT-SHIP on the SAME finding:
  Fix path = ARCHITECTURAL RESTRUCTURE, not CSS patch.
  "We built the wrong thing" is a valid and valuable conclusion.
  Sunk preparation cost does NOT justify preserving a failed architecture.
```
- Classification: IMPORTANT

#### NICE-TO-HAVE

**N06-01: Emotional audit questions absent**
- Source: Blind Spot 6 -- 3 emotional questions for Mode 4 supplement
- Status: ABSENT from C4. No emotional response measurement.
- Insertable: Add to C4: "Optional emotional supplement: E1: One word how the page makes you feel. E2: Did someone care about every detail? (1-5). E3: Would you bookmark as design example? (Y/N)."
- Classification: NICE-TO-HAVE

**N06-02: Mid-build quality checkpoint after Pass 2 absent**
- Source: Connection 5 -- "After Pass 2, run PA-05 quick-check to establish quality baseline"
- Status: ABSENT. No baseline measurement between passes.
- Classification: NICE-TO-HAVE

**N06-03: "Invisible typography" principle absent**
- Source: Wild Card 1 -- "Mechanisms should be perceived as QUALITY, not as MECHANISMS"
- Status: Partially covered by metaphor structural requirement (MG-04). The typography principle specifically is absent.
- Classification: NICE-TO-HAVE

**N06-04: 22-agent coordination risk not addressed**
- Source: Wild Card 4 -- "22 agents exceeds validated flat-topology capacity (8-12)"
- Status: ABSENT. No coordination topology guidance for large teams.
- Classification: NICE-TO-HAVE

**N06-05: Learning protocol on kill trigger absent**
- Source: Blind Spot 3, Metacognitive Gap 1
- Status: C03-01 above addresses structural halt. The learning protocol (document WHY before aborting) is a separate item.
- Classification: NICE-TO-HAVE

---

## SOURCE FILE 07: CROWN-JEWEL-DESIGN-SYSTEM-AUDIT.md

### What This File Contains
Audit of CD-006 (39/40) and DD-006 (36/40) crown jewels + all 4 design system files. 15 must-replicate techniques. 7 enrichments verified. Container width confirmed at 1100px.

### Current Status in FINAL Prompt
FINAL prompt has: U-10 (soul enforcement selector), transition grammar (C-05 through C-07), container width 940-1100px, mechanism catalog references, 3-transition minimum. Several technique references remain absent.

### Gaps Found Against FINAL Prompt

#### CRITICAL

**C07-01: Mechanism-catalog.md missing Transition Grammar entry**
- Source: Audit Section 3 (A1 verification), Section 6 Finding: "mechanism-catalog.md lacks a dedicated 'Transition Grammar' mechanism entry."
- Status in FINAL: FINAL prompt references transition grammar (C-05 through C-07) and the catalog is routed to the Planner in Section E. But the CATALOG ITSELF does not have a Mechanism #18 "Transition Grammar" entry. A builder reading only the catalog cannot learn Smooth/Bridge/Breathing grammar.
- Action needed: Add Mechanism #18 to mechanism-catalog.md (design system file, not prompt change).
- Insertable (add to A7 or Section E builder notes): "NOTE: Transition grammar CSS patterns are in CD-006 lines 772-791, NOT in mechanism-catalog.md. Builder must read crown jewel or the technique excerpts below."
- Classification: CRITICAL

#### IMPORTANT

**I07-01: ARIA requirements not in soul rules or self-check**
- Source: Technique 2 -- "Every section has aria-label, every callout role='note', every transition role='separator'"
- Status in FINAL: A7 references CD-006 and "Every `<section>` has `aria-label`. Every callout has `role='note'`. Every transition has `role='separator'`." This IS present in A7.
- Note: PRESENT in conviction layer exemplar. Should also be in B10 self-check for verification.
- Insertable (add to B10):
```
[ ] ARIA: Every <section> has aria-label. Every callout has role="note".
    Every transition div has role="separator" aria-hidden="true". Skip link present.
```
- Classification: IMPORTANT

**I07-02: Print media query and prefers-reduced-motion not required**
- Source: Techniques 11 and 12 -- "CD-006: @media print + @media prefers-reduced-motion"
- Status in FINAL: Not required anywhere. Accessibility media queries are crown jewel quality markers.
- Insertable (add to B2 soul rules or B10):
```
U-11. @media (prefers-reduced-motion: reduce): animation and transition
      durations set to 0.01ms. Required for accessibility compliance.
U-12. @media print: minimal print styles present (background: white,
      color: black for header/footer). Required for production-quality pages.
```
- Classification: IMPORTANT

**I07-03: "Be the argument" principle absent**
- Source: Audit Finding 2 -- "DD-006's magic: the page demonstrates fractal density by BEING fractal."
- Status in FINAL: C-16 requires ">=1 self-referential element." But the principle "if the page explains X, structurally BE X" is not stated.
- Insertable (add to A5 or A4 Dual Richness Sources):
```
"BE THE ARGUMENT": The highest form of content-form alignment is when the
page demonstrates what it explains. DD-006 is a page ABOUT fractals that IS
fractal. CD-006 is documentation that DOCUMENTS ITSELF. This is not a CSS
technique -- it requires choosing content whose structure naturally supports
the intended metaphor. Test: "Does the page's form reinforce its content's claim?"
```
- Classification: IMPORTANT

**I07-04: 8-point Crown Jewel Quality Gate absent from self-check**
- Source: Audit Finding 4 -- "8 binary checks condensed from forensics report"
- Status in FINAL: B10 has 16 self-check items. The 8 crown jewel checks (token coverage, frame, transitions, meta, variety, arc, accessibility, soul) are not consolidated as a separate gate.
- Insertable (add to B10 or as a named quality gate in C3):
```
CROWN JEWEL QUALITY GATE (8 checks, run before Gate 5):
[ ] TOKEN: Zero hardcoded CSS values (all via var())
[ ] FRAME: Dark header + dark footer with primary accent
[ ] TRANSITIONS: All section boundaries use Smooth/Bridge/Breathing; bridges have prose
[ ] META: Each section shows its structural strategy in a visible label
[ ] VARIETY: 8+ distinct component types, each demanded by content
[ ] ARC: Page density follows sparse-dense-sparse (climax in middle, not end)
[ ] ARIA: Every <section> has aria-label, callouts have role="note", skip link present
[ ] SOUL: *:where(:not(input,button,select)){border-radius:0} present
```
- Classification: IMPORTANT

#### NICE-TO-HAVE

**N07-01: Drop cap deployment constraint absent**
- Source: Technique 13 -- "Used only 2x in 8 sections (sparse = impactful)"
- Status: Not in prompt. Builder could over-use drop caps.
- Insertable: "Drop cap: if used, deploy <= 25% of sections (CD-006: 2/8 sections = 25%). Scarcity is required for impact."
- Classification: NICE-TO-HAVE

**N07-02: CD-006 signal-to-silence benchmark absent**
- Source: Audit Finding 1 -- "~4 components per section, 1 transition per boundary, drop caps at <25% frequency"
- Status: Not in prompt. No benchmark for component density.
- Classification: NICE-TO-HAVE

**N07-03: tokens.css semantic alias explanation absent from reference**
- Source: Audit Section 6 (builder readability) -- "Some tokens lack usage guidance."
- Status: Not in prompt or reference library. Builder may not know WHEN to use specific tokens.
- Classification: NICE-TO-HAVE

---

## CONSOLIDATED PRIORITY RANKINGS

### TIER 1: CRITICAL (Must Add)

| ID | Gap | Source | Insertable Lines | Placement |
|----|-----|--------|-----------------|-----------|
| C00-01 | Builder visibility cap (≤200 lines) | 00 | 6 | Appendix or C1 |
| C01-01 | Full Phase 0D tier routing (Flagship = ALL phases) | 01 | 8 | B8 |
| C01-02 | Addition Test + BECAUSE Test | 01 | 8 | New gate before B6 |
| C01-03 | Perceptual Risk + Perceptual Cost assessments (MG-06, MG-07) | 01 | 8 | B6 |
| C01-04 | Pacing Prediction Heuristic (P-09) | 01 | 8 | B7 |
| C01-05 | 14-axis multi-questioning protocol | 01 | 6 | B8 or Section E |
| C02-01 | Cold Look Protocol (4 locked responses) | 02 | 10 | C4 |
| C02-02 | Scroll-through protocol (viewport-scale, not full-page) | 02 | 8 | C4 |
| C02-03 | Auditor CSS language hard block | 02 | 6 | C4 |
| C02-04 | Dual Severity Track (Rule vs Perception) | 02 | 8 | C5 |
| C03-01 | >= 3 distinct content element types per section (S-16) | 03 | 5 | B1 |
| C03-02 | PA-05b/05d measurement in B10 | 03 | 5 | B10 |
| C04-01 | Zone boundary measurement method for P-05 | 04 | 4 | B7/B10 |
| C04-02 | KB-01 strengthened with element type count | 04 | 2 | C3 |
| C04-03 | 5-pass single cognitive focus principle | 04 | 8 | C1 |
| C05-01 | Void threshold: 2160px -> 1350px correction | 05 | 3 | S-10 + Appendix |
| C05-02 | Measurement-perception gap + signal saturation laws | 05 | 6 | A6 |
| C06-01 | Post-gate iteration protocol (2 cycles, 40 min) | 06 | 10 | C3 or B7 |
| C06-02 | Pre-mortem gate (before experiment launch) | 06 | 6 | C1 or B7 |
| C07-01 | Mechanism-catalog.md note: transition grammar is in crown jewels | 07 | 4 | A7 or Section E |

**TOTAL CRITICAL GAPS: 20 | Estimated lines to add: ~129**

### TIER 2: IMPORTANT (Should Add)

*36 items identified across all 8 source files. See per-file sections above for full details.*

Top 10 by impact:
1. I02-02: PA-05 full 4-criterion evaluation protocol (12 lines, C4)
2. I06-04: Narrative prohibition for audits (6 lines, C5)
3. I06-05: Abandon trigger (6/9 convergence = restructure) (6 lines, C5)
4. I02-04: Root cause classification protocol (8 lines, C5)
5. I04-03: 5-pass competitive build rationale (8 lines, C1)
6. I05-02: Checkpoint message examples (8 lines, C2 or Section E)
7. I05-03: Kill criterion consequences specified (6 lines, C3)
8. I02-01: Builder's 10 missing items B-02, B-05, B-07 (4 lines, B10)
9. I07-04: 8-point Crown Jewel Quality Gate (10 lines, B10 or C3)
10. I03-01: Structural halt trigger for consecutive void (4 lines, B7)

**TOTAL IMPORTANT GAPS: ~38 | Estimated lines to add: ~90 (top 10)**

### TIER 3: NICE-TO-HAVE (Consider Adding)

*26 items identified. None are blocking. All can be routed to Section E reference library at zero prompt cost.*

Top 5 by routing efficiency:
1. N01-01: Translation Grammar Lookup Table -> Section E (Metaphor Agent)
2. N05-04: Per-act mechanism recommendations -> Section E (Planner)
3. N04-02: "Be the argument" principle -> Section E (Intentionality Builder)
4. N07-01: Drop cap deployment constraint -> B2 (1 line)
5. N02-01: Metaphor-Awareness Principles -> Section E (PA Auditors)

---

## COVERAGE ASSESSMENT

### Items CONFIRMED PRESENT in FINAL Prompt (v2)

The following audit items were previously identified as missing but are now verified as present:

- Anti-scale model with Alexander/Salingaros formula (A3)
- Dual Richness Sources (A4)
- CD-006 compositional fluency exemplar (A5)
- 5-act scroll story (A8)
- Absence Coherence principle (Section D)
- Container width updated to 940-1100px (S-01, Appendix)
- PA-50 through PA-53 routing to Auditor C (B9)
- Tier A questions (C4)
- Gate-then-ranking protocol (C5)
- PA-to-TC fix routing (C6)
- Content transformation rules (B11)
- Recovery protocols (B12)
- Communication checkpoints CP-A through CP-E (C2)
- Restraint ratio (C-12)
- Silence zones (C-13)
- Signal-to-silence ratio (C-14)
- Intentionality dimensions (C-15 through C-17)
- Density arc (C-18)
- Semantic density proportionality (C-19)
- CCS formula per-mechanism removal test (MC-01)
- Channel definitions (SC-02)
- Void source corrected to LIVING-STATE.md (Appendix)
- Multi-coherence invocation (Section E Planner reads)
- All BLOCKING fixes BG-01 through BG-07

### Overall Gap Assessment

The FINAL prompt (v2) is substantially complete. The 20 CRITICAL gaps identified above represent areas where:
1. Rules exist but verification methods are absent (C04-01, C03-02)
2. Gates exist but operational protocols are absent (C02-01, C02-02, C02-03)
3. Threshold values require correction (C05-01)
4. TC pipeline routing is referenced but not mandated for all phases (C01-01 through C01-05)
5. Iteration and pre-mortem protocols are entirely absent (C06-01, C06-02)

The most impactful single addition would be **C05-01 (void threshold correction from 2160px to 1350px)** which changes a fundamental measurement gate, followed by **C02-01 through C02-03** which operationalize the PA deployment that is currently specified as a goal but not as a protocol.

---

**END SCAN-A REPORT**
**Source files read:** 9 (FINAL prompt + 8 audit files)
**Total source material:** ~10,000+ lines
**CRITICAL gaps identified:** 20
**IMPORTANT gaps identified:** ~38
**NICE-TO-HAVE gaps identified:** ~26
**Items confirmed PRESENT (previously identified as gaps):** 29
**Estimated insertable lines for CRITICAL fixes:** ~129
**Estimated insertable lines for top-10 IMPORTANT fixes:** ~90
