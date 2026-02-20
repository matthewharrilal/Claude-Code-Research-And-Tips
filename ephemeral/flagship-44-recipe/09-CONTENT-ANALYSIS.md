# 09: Content-Form Resonance Analysis -- What Content Produces the Best Flagship Results?

**Agent:** content-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Analyze content-form resonance as an unexamined confound in all experiments. Determine what content properties correlate with high PA-05 scores, what content the design system offers for Flagship, and whether we should control for content or optimize it.

**CRITICAL FRAMING NOTE:** Flagship 4/4 DESIGNED has NEVER been observed. It does not exist yet. We are defining what it SHOULD be based on the compositional intelligence stack (scales, channels, multi-coherence, anti-scale model). CD-006 (39/40) is best classified as Middle or Ceiling tier -- it demonstrates vocabulary fluency and structural competence, but NOT the multi-coherence, 5-scale depth, or channel coordination that defines theoretical Flagship. All analysis below uses existing experiments as evidence about content properties, NOT as examples of Flagship quality.

**Files examined:**
- `ephemeral/fat-core-capability/13-wrong-question.md` (content-form resonance as strongest unexamined variable)
- `ephemeral/fat-core-capability/25-flagship-experiments.md` (Flagship experiment design + content requirements)
- `design-system/research/RESEARCH-SYNTHESIS.md` (384 lines, content used for failed Flagship experiment)
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (CD-006 content: "Building Your First KortAI Documentation Page" -- Middle/Ceiling tier, NOT Flagship)
- `ephemeral/middle-tier-experiment/01-content-selection.md` (Middle content: SYSTEM Mac automation, 1,184 words)
- `ephemeral/middle-tier-experiment/04-perceptual-audit.md` (Middle PA: "professional but stiff," PA-05 4/4)
- `ephemeral/middle-tier-experiment/07-VERDICT.md` (Middle verdict + content analysis)
- `ephemeral/flagship-experiment/01-adapted-content.md` (Flagship adapted content, 12 sections, ~2,850 words)
- `ephemeral/flagship-experiment/00-content-inventory.md` (Flagship content inventory + density map)

---

## THE CONTENT-EXPERIMENT MATRIX

Every experiment used different content. Content was NEVER controlled. This is the single highest-leverage unexamined variable across all experiments.

**IMPORTANT:** None of these experiments achieved Flagship-tier quality. The highest scores (CD-006 39/40, Middle 4/4) represent Middle/Ceiling tier at best. Flagship 4/4 is a theoretical target defined by the compositional intelligence stack -- multi-coherence at boundaries, 5-scale depth, coordinated channel shifts, anti-scale restraint. No experiment has yet tested content under Flagship conditions.

| Experiment | Content | Domain | Content Types | Lines | PA-05 | Tier (Actual) |
|-----------|---------|--------|---------------|-------|-------|---------------|
| **CD-006** | "Building Your First KortAI Documentation Page" | Tutorial (meta: system documenting itself) | Code, tables, questions, diagrams, procedural steps, component demos, challenges | ~2,000 HTML | ~4.0 | **Middle/Ceiling** (NOT Flagship) |
| **Middle** | SYSTEM Mac automation (ygwyg) | Technical reference/tutorial | Prose, code (9 blocks), tables (3), ASCII diagram (1), step sequences (3), threat model | 313 MD | 4/4 | **Middle** |
| **Flagship attempt** | RESEARCH-SYNTHESIS.md (adapted) | Academic synthesis / design theory | Prose, tables (7), component sequences (4), pullquote (1). Uniform third-person declarative register | 384 source / ~311 adapted | 1.5/4 | **FAILED** (attempted Flagship, achieved sub-Floor) |
| **Remediation** | Same as Flagship (CSS changes only) | Same as Flagship | Same as Flagship | Same | 2.5/4 | **FAILED** (+1.0 improvement, still sub-Middle) |
| **Ceiling attempt** | Technical content (unspecified) | Technical | Mixed | - | DO NOT SHIP | **FAILED** |

---

## QUESTION 1: What Properties Make Content GOOD for Flagship?

### What we know from existing experiments (Middle/Ceiling tier, not Flagship)

Existing experiments tell us what content properties correlate with HIGHER PA-05 scores at the Middle/Ceiling tier. These are NECESSARY conditions for Flagship but NOT SUFFICIENT -- Flagship additionally requires content that invites multi-coherence, 5-scale expression, and coordinated channel shifts, which no experiment has yet tested.

### The Pattern: Content that scores well has natural structural variety

**CD-006 content properties (39/40, Middle/Ceiling tier):**
1. **Procedural sequences** -- step-by-step installation, setup, component building
2. **Code blocks** -- real TypeScript/HTML, creating high-contrast visual anchors
3. **Questions embedded in prose** -- "What changes about the density?" "Does the content still work?" -- inviting different visual treatment than declarative prose
4. **Self-referential meta-content** -- a page ABOUT building pages. The content IS the design system, creating natural content-form resonance where visual form demonstrates the concepts being discussed
5. **Multiple content MODES** -- explanatory, procedural, comparative, demonstrative, challenging
6. **Built-in decision points** -- "Now try building the same section with Bento Grid instead of Z-Pattern"
7. **Natural visual anchors** -- code snippets, tables, diagrams, component demos each DEMAND different visual treatment

**Middle content properties (4/4):**
1. **Architecture diagram** -- large ASCII art (Brain/Tunnel/Body) creating a high-contrast dark block
2. **Code blocks** -- 9 blocks (bash + TypeScript) creating visual rhythm
3. **Feature tables** -- 3 data tables with distinct structures
4. **Step sequences** -- 3 separate step-by-step procedures
5. **Threat model** -- comparative structure (protects against / does NOT protect against)
6. **Security layers** -- 4 distinct layers, each with code example
7. **Mixed register** -- alternates between explanatory prose, procedural steps, technical specification, and security analysis

### The Pattern: Content that FAILS has uniform register

**Failed Flagship-attempt content properties (1.5/4):**
1. **Uniform rhetorical mode** -- ALL 12 sections use "third-person declarative, medium-length sentences, zero variation" (flagged in retrospective RC-13)
2. **Table-heavy** -- 7 tables comprising ~40% of visual weight, but ALL tables are the same type (concept/value lists)
3. **No code** -- Zero code blocks in the source material. Code blocks were the primary visual anchor in BOTH successful experiments
4. **No procedural content** -- No step sequences, no "do this then do that." Everything is expository
5. **Single semantic domain** -- Design research synthesis, uniformly abstract
6. **No questions** -- Zero dialogic address in the source; adapted content added some but maintained uniform prose
7. **No domain transitions** -- The content stays in one register from start to finish

### The 7 Content Properties That Predict Higher PA-05 (Necessary but Not Sufficient for Flagship)

These properties correlate with higher scores at Middle/Ceiling tier. Flagship additionally requires content that supports multi-coherence at zone boundaries, 5-scale expression depth, and coordinated channel shifts -- properties not yet tested.

| Property | CD-006 (M/C) | Middle | Failed Flagship | Correlation with PA-05 |
|----------|--------|--------|----------|----------------------|
| **P1: Code blocks** | 11+ | 9 | 0 | STRONG POSITIVE |
| **P2: Multiple content modes** | 5+ (explanatory, procedural, comparative, demonstrative, challenging) | 4+ (explanatory, procedural, comparative, analytical) | 1 (expository) | STRONG POSITIVE |
| **P3: Procedural sequences** | Yes (3+) | Yes (3) | No | STRONG POSITIVE |
| **P4: Questions / dialogic address** | Yes (embedded) | Implicit (threat model what-if) | No | MODERATE POSITIVE |
| **P5: High-contrast visual anchors** | Code + diagrams + tables | Code + ASCII diagram + tables | Tables only (uniform type) | STRONG POSITIVE |
| **P6: Domain transitions** | Tutorial -> specification -> comparison -> challenge | Features -> architecture -> installation -> security | None (uniform synthesis) | MODERATE POSITIVE |
| **P7: Self-referential / meta-content** | YES (page about building pages) | No | No | UNCERTAIN (N=1) |

**Critical insight:** Content properties P1, P2, P3, and P5 co-vary. Content with code blocks (P1) naturally has procedural sequences (P3) and multiple content modes (P2) and high-contrast visual anchors (P5). The underlying variable is **structural heterogeneity** -- content that CONTAINS structurally different element types FORCES the builder to use different visual treatments, which IS what PA-05 measures as "designed."

**The causal chain (Middle/Ceiling tier, proven):**
```
Structurally heterogeneous content
  -> Builder MUST use different components for different elements
  -> Different components have different visual weight/rhythm
  -> Page has natural visual variety WITHOUT relying on CSS cleverness
  -> PA auditors perceive variety as "designed"
```

**The failure chain (observed in Flagship attempt):**
```
Structurally uniform content (all expository prose + uniform tables)
  -> Builder CAN use same component for every section
  -> Same component = same visual treatment = visual monotony
  -> CSS micro-variations (letter-spacing 0.001em) don't compensate
  -> PA auditors perceive uniformity as "flat" or "styled"
```

**The Flagship gap (theoretical, untested):**
```
Structural heterogeneity alone produces Middle/Ceiling (PA-05 3-4/4).
Flagship requires ADDITIONALLY:
  -> Content with >= 2 domain transitions where MULTI-COHERENCE at boundaries is natural
  -> Content depth sufficient for 5-SCALE expression (navigation, page, section, component, character)
  -> Content semantic variety that invites COORDINATED CHANNEL SHIFTS (not just different components)
  -> Content that rewards RESTRAINT (anti-scale: density x restraint x spatial confidence)
These properties have NEVER been tested. Structural heterogeneity is floor, not ceiling.
```

---

## QUESTION 2: What Content in the Design System Would Be Ideal?

### Candidate Assessment

| Content | Lines | Structural Heterogeneity | Domain Transitions | Code | Procedural | Verdict |
|---------|-------|-------------------------|-------------------|------|------------|---------|
| **RESEARCH-SYNTHESIS.md** | 384 | LOW (tables + prose) | None | 5 pseudo-code blocks | None | INSUFFICIENT -- already proven to fail |
| **R1 (Documentation Patterns)** | 584 | MEDIUM (findings + examples + comparisons) | None | Some | None | MARGINAL |
| **R3 (Density Dimensions)** | 553 | MEDIUM (6 dimensions with examples) | None | Some | None | MARGINAL |
| **R5 (Combination Theory)** | 784 | MEDIUM-HIGH (rules + examples + sequences) | Partial | Some | Some | POSSIBLE |
| **README.md (THE KORTAI DESIGN MIND)** | 2,516 | HIGH (philosophy + specification + examples + rules) | YES (3 Parts) | Some | Some | STRONG CANDIDATE (but too long for single build) |
| **SYSTEM Mac automation** | 313 | HIGH (proven at Middle 4/4) | YES (features -> architecture -> install -> security) | 9 blocks | 3 sequences | ALREADY USED (Middle tier) |

### The Best Available Content: Composite Document

The highest-quality content for Flagship would be a **composite document** assembled from multiple sources, chosen to maximize structural heterogeneity. Specifically:

**Recommended composite (Option B from file 25):**
- Sections from R1 (documentation patterns with concrete site examples)
- Sections from R3 (density dimensions with 6-dimension framework)
- Sections from R5 (component combination with velocity/temperature/weight model)
- Target: 600-800 lines, 3 domain transitions, 5+ content types

**Why composite > single source:**
1. Domain transitions are FORCED (documentation -> density -> combination = 3 shifts)
2. Content type variety emerges naturally (R1 has examples, R3 has frameworks, R5 has rules)
3. Semantic ambiguity exists at domain boundaries (where does density end and combination begin?)
4. Length is sufficient for 5-scale expression (600-800 lines vs 384 for RESEARCH-SYNTHESIS)

**Alternative strong candidate: Curated README.md excerpt (~700 lines from Parts I-II)**
- 3 registers: philosophical, definitional, implementational
- Inherent tension between abstract principles and concrete rules
- Multiple content types: narrative, definitions, constraints, examples
- Already exists, no assembly required

---

## QUESTION 3: Same Content (RESEARCH-SYNTHESIS) or Different Content?

### The Case for SAME Content (Control)

- Isolates architecture as the independent variable
- The remediation already showed CSS-only changes improved from 1.5 to 2.5 on same content
- Allows direct PA comparison across experiments (same page, different treatment)
- Addresses the N=1 confound for at least ONE content type

### The Case for DIFFERENT Content (Optimize)

- RESEARCH-SYNTHESIS has a demonstrated CEILING of 2.5/4 after intensive CSS remediation
- Uniform prose register may cap PA-05 regardless of architecture
- The Middle experiment (different content, simpler architecture) beat the Flagship (same content, complex architecture)
- Using the SAME content that already failed twice is testing the same hypothesis a third time

### THE VERDICT: USE DIFFERENT CONTENT, with a controlled comparison later

**Primary experiment: Use the Middle experiment's SYSTEM content (or similar heterogeneous content).**

**Rationale:**
1. The question is "what does Flagship 4/4 require?" -- not "can we make RESEARCH-SYNTHESIS score 4/4?"
2. Using content with proven structural heterogeneity REMOVES content as a confound, isolating the ARCHITECTURE question
3. If Flagship 4/4 is achieved with good content, THEN test whether the same architecture can reach 3.5+ with harder content (RESEARCH-SYNTHESIS)
4. This sequences the experiments correctly: prove the architecture works (easy content) BEFORE testing its limits (hard content)

**However, a controlled comparison is essential for learning:**

```
Experiment Plan:
  Step 1: Build with heterogeneous content (e.g., SYSTEM or composite)
          -> Expected: PA-05 >= 3.5 (architecture validated)

  Step 2: Build with SAME architecture on RESEARCH-SYNTHESIS
          -> Expected: PA-05 = 2.5-3.0 (content ceiling measured)

  Step 3: Compare.
          -> Delta = content effect size
          -> If Step 1 = 4/4 and Step 2 = 2.5/4: content effect = 1.5 points
          -> If Step 1 = 3/4 and Step 2 = 2.5/4: content effect = 0.5 points (architecture is the bottleneck)
```

---

## QUESTION 4: Is Content Complexity a Confound?

### Yes. Definitively.

File 13 ("Wrong Question") identifies content-form resonance as "THE STRONGEST ALTERNATIVE HYPOTHESIS" (verdict on alternative (g), line 264) and calls content "the most varying variable and the least examined" across all experiments.

**Evidence that content complexity suppressed the Flagship:**

1. **Uniform prose register** -- All 12 sections of the Flagship adapted content use the same rhetorical mode. The retrospective flagged this as RC-13 (root cause): "All 12 sections use identical rhetorical mode: third-person declarative, medium-length sentences, zero variation."

2. **Content resisted visual variety** -- The build plan (03-build-plan.md, line 60) explicitly REJECTED bento grid because "content doesn't support 4+ items of comparable weight." The builder correctly identified that the content offered no structural basis for horizontal layout variation. This was not a builder failure -- it was a CONTENT limitation.

3. **CSS budget misallocation was content-driven** -- The Flagship builder spent 22% of CSS (227 lines) on imperceptible micro-typography (letter-spacing 0.001-0.01em). The retrospective interpreted this as waste, but it may have been the builder's CORRECT instinct for research synthesis content: this content WANTS quiet typographic sophistication, not bold visual diversity.

4. **Remediation improved from 1.5 to 2.5 but NOT to 4.0** -- The +1.0 improvement came from adding visible borders, components, and accessibility. But the content ceiling prevented further improvement. The remediation builder could add borders and styled tables, but could not add code blocks, procedural sequences, or domain transitions that don't exist in the content.

**But content complexity alone does not explain the failure:**

- The remediation proved CSS changes CAN improve scores on uniform content (+1.0 point)
- The build plan contained specific mechanism instructions that the builder largely ignored
- The builder produced ZERO visible borders despite border instructions in the spec
- The builder spent budget on invisibility when the spec asked for perceptibility

**Content complexity is a CEILING factor, not the SOLE cause.** It caps achievable quality but does not prevent competent execution within that cap.

---

## QUESTION 5: Does Content TYPE Affect What Mechanisms Are Natural?

### Yes. Content type creates mechanism affinity.

| Content Type | Natural Mechanisms | Unnatural Mechanisms | Evidence |
|-------------|-------------------|---------------------|----------|
| **Tutorial/Procedural** | Step sequences, progressive disclosure, code blocks, task components, numbered lists, before/after comparisons | Dense data tables, philosophical pullquotes, abstract diagrams | Middle experiment: F-PATTERN emerged naturally from technical tutorial structure |
| **Technical Reference** | Feature tables, code snippets, comparison matrices, specification lists, threat models | Narrative arcs, emotional temperature shifts, crescendo builds | Middle experiment: tables + code blocks were primary visual anchors |
| **Research Synthesis** | Concept tables, principle statements, conflict resolutions, hypothesis lists | Code blocks, step sequences, interactive demos, comparative layouts | Flagship: 7 tables were the ONLY visual variety. Zero code, zero procedures |
| **Design Exploration** | Component demos, pattern comparisons, visual examples, meta-referential content | Pure data tables, abstract theory, procedural sequences | CD-006: the content about building pages naturally demonstrated components |
| **Philosophical / Narrative** | Long prose sections, pullquotes, typographic emphasis, breathing whitespace, section arcs | Dense tables, code blocks, step sequences | README.md: inherent tension between philosophy and specification |

### Mechanism Affinity Map

```
TEMPORAL mechanisms (scroll reveals, progressive disclosure, animation):
  -> STRONG affinity: Tutorial, Procedural, Exploration
  -> WEAK affinity: Reference, Synthesis

SPATIAL mechanisms (grids, columns, density variation):
  -> STRONG affinity: Reference, Catalog, Exploration
  -> WEAK affinity: Narrative, Philosophical

STRUCTURAL mechanisms (borders, zones, components):
  -> STRONG affinity: Tutorial (component boundaries), Reference (section boundaries)
  -> WEAK affinity: Synthesis (uniform sections blur boundaries)

BEHAVIORAL mechanisms (hover, expand, interactive):
  -> STRONG affinity: Tutorial, Exploration, Reference
  -> WEAK affinity: Synthesis, Narrative (passive reading mode)

MATERIAL mechanisms (background, texture, visual weight):
  -> UNIVERSAL affinity (all content types support background differentiation)
  -> But: Synthesis content makes zones feel ARBITRARY because section topics don't shift enough to justify chromatic shifts

RELATIONAL mechanisms (content-form resonance, self-reference):
  -> STRONG affinity: Meta-content (CD-006), Design exploration
  -> WEAK affinity: Everything else
```

**Key insight:** Research synthesis content has WEAK affinity with 4 of 6 mechanism categories (temporal, spatial, behavioral, relational). Only STRUCTURAL and MATERIAL mechanisms naturally apply to uniform synthesis prose. This means the Flagship's 14 mechanisms were fighting the content's natural grain -- mechanisms were deployed BECAUSE the prompt required them, not because the content invited them.

---

## QUESTION 6: Can We Select Content That NATURALLY Invites Flagship Complexity?

### Yes, but "naturally invites" means structurally heterogeneous

The ideal Flagship content would have ALL of:

**MUST-HAVE properties (structural heterogeneity):**
1. **Code blocks** (>= 4) -- creates visual anchors with fundamentally different typographic treatment
2. **Multiple content modes** (>= 3 of: expository, procedural, comparative, demonstrative, dialogic) -- forces the builder to vary component selection
3. **Domain transitions** (>= 2 clear topic shifts) -- creates natural boundaries where multi-coherence occurs organically
4. **Data tables** (>= 2, with DIFFERENT structures) -- tables with different column counts/types prevent uniform table styling
5. **Sufficient length** (>= 600 lines / 2,500 words adapted) -- enough depth for 5-scale expression

**NICE-TO-HAVE properties (compositional opportunity):**
6. **Self-referential potential** -- content about design invites meta-resonance where form demonstrates concept
7. **Inherent tension** -- competing demands that the visual treatment must RESOLVE, not just accommodate
8. **Questions/dialogic address** -- invites pull-quotes, callout styling, visual emphasis variety
9. **Hierarchical depth** (4+ heading levels naturally) -- enables fractal coherence without forcing it

### The Ranked Content Choices

**Rank 1: SYSTEM Mac automation content (ALREADY PROVEN)**
- 1,184 words, 7 distinct element types, 4 domain transitions
- 9 code blocks, 3 tables, 3 step sequences, 1 ASCII diagram
- Achieves structural heterogeneity P1-P6 naturally
- Limitation: Already used for Middle experiment -- using it again conflates content familiarity with architecture improvement
- Verdict: IDEAL as a control, but not as the primary Flagship test

**Rank 2: Composite research document (R1 + R3 + R5 sections)**
- Estimated 600-800 lines, 3 domain transitions (documentation -> density -> combination)
- Would need content architect to select sections that maximize type variety
- Must include: code examples from R1 (site implementations), framework tables from R3, combination rules from R5
- Requires ~2 hours of assembly but produces genuinely heterogeneous content
- Verdict: BEST for primary Flagship experiment (new content, structured variety, genuine domain shifts)

**Rank 3: README.md excerpt (Parts I-II, ~700 lines)**
- 3 registers (philosophical, definitional, implementational)
- Inherent tension between abstract principles and concrete rules
- Limitation: Still prose-heavy. Less code, fewer tables than ranks 1-2
- Would need content architect to extract sections that maximize heterogeneity
- Verdict: STRONG for secondary validation (tests Flagship on harder, more uniform content)

**Rank 4: RESEARCH-SYNTHESIS.md (already used)**
- 384 lines, uniform register, no code, no procedures
- Proven ceiling of 2.5/4 after intensive CSS remediation
- Verdict: ONLY for controlled comparison (measuring content effect size). Never as primary Flagship test.

---

## THE DECISIVE FINDING: CONTENT IS NOT NEUTRAL INFRASTRUCTURE

The project has treated content as passive input -- the "raw material" that architecture processes. This is wrong. Content is an ACTIVE PARTICIPANT in the quality of the output.

**Content is a co-author of the design.**

When CD-006 achieved 39/40 (Middle/Ceiling tier), the content about building pages DEMANDED diverse components (code for tutorials, tables for specifications, questions for exploration). The builder didn't invent visual variety -- the content REQUIRED it. The visual diversity emerged from content diversity. But CD-006 is NOT Flagship -- it achieved vocabulary fluency without multi-coherence, scale depth, or coordinated channel shifts.

When the Middle experiment achieved 4/4, 8 code blocks and an ASCII architecture diagram created visual anchors that the builder only needed to STYLE, not INVENT. The F-pattern layout emerged from the content's natural progression (features -> architecture -> installation -> security). This is Middle-tier success, not Flagship.

When the Flagship attempt achieved 1.5/4, 12 sections of uniform synthesis prose offered the builder NO structural footholds for visual variety. Every section was "principle statement + explanatory paragraphs + concept table." The builder deployed 14 mechanisms, but 13 of them were invisible because the content provided no natural boundaries where visual shifts would feel intentional.

**The formula (for Middle/Ceiling -- proven):**
```
Middle/Ceiling quality = min(Architecture capability, Content structural ceiling)
```

**The formula (for Flagship -- theoretical):**
```
Flagship quality = min(
  Architecture capability,
  Content structural ceiling,
  Content multi-coherence invitation,  <-- untested
  Content scale-depth potential,        <-- untested
  Content channel-coordination fit      <-- untested
)
```

Structural heterogeneity is the FLOOR for Flagship content. Without it, even Middle quality is unreachable (as the Flagship attempt proved). But structural heterogeneity alone only produces Middle/Ceiling -- it does NOT produce Flagship. Flagship content must additionally invite the compositional intelligence properties (multi-coherence, scale depth, channel coordination) that define the Flagship tier. This has never been tested because Flagship 4/4 has never been achieved.

---

## RECOMMENDATIONS FOR THE FLAGSHIP 4/4 RECIPE

### R1: Content Selection is a DESIGN DECISION, not a logistical one

The conventions brief should include content selection criteria. The builder should not receive "here is your content, style it." The builder should receive "here is content selected for structural heterogeneity AND Flagship compositional potential -- it contains code blocks, tables, procedures, and domain transitions that naturally invite diverse visual treatment, AND domain transitions where multi-coherence at boundaries is natural, AND sufficient depth for 5-scale expression."

### R2: For the primary Flagship experiment, use composite research content (Rank 2)

Assemble a ~700-line document from R1 + R3 + R5 with:
- >= 4 code examples (from R1's site analyses) -- structural heterogeneity floor
- >= 3 distinct table types -- prevents uniform table styling
- >= 2 procedural sequences -- creates high-contrast visual anchors
- >= 2 clear domain transitions -- creates NATURAL multi-coherence boundaries (this is Flagship-specific)
- >= 3 content modes (expository + comparative + procedural at minimum) -- forces component variety
- Sufficient depth per section for scale expression at component AND character levels (Flagship-specific)

### R3: For a controlled comparison, re-run on RESEARCH-SYNTHESIS (Rank 4)

After testing Flagship architecture on good content, test it on hard content. The delta measures content effect size and calibrates expectations for uniform-prose pages.

### R4: Add CT-09 (Rhetorical Variety Requirement) to the conventions brief

```
CT-09: Adapted content MUST use >= 3 distinct rhetorical forms across all
sections: expository paragraphs, lists/enumerations, questions, short
declarative statements, dialogic address. Uniform prose register = FAIL.
```

This was identified as a fix in the retrospective (02-missing-causes.md, line 274) but never applied. It should be in every Flagship conventions brief.

### R5: Route the full mechanism catalog to content-type-appropriate subset

Not all 18 mechanisms suit all content. Include a content-type affinity mapping in the conventions brief so the builder selects mechanisms that RESONATE with the content rather than deploying mechanisms the content resists.

### R6: Accept that RESEARCH-SYNTHESIS may never reach Flagship

The content ceiling for uniform synthesis prose is likely Middle-tier (3.0-3.5) with optimal architecture. Expecting Flagship 4/4 from content with WEAK affinity to 4/6 mechanism categories AND no natural multi-coherence boundaries AND insufficient depth for 5-scale expression is asking architecture to compensate for fundamental content limitations.

### R7: Acknowledge the Flagship content gap (NEW)

No content in the existing design system has been TESTED under Flagship conditions. The recommendations above are extrapolations from Middle/Ceiling evidence. The first Flagship experiment will simultaneously test BOTH the architecture AND the content selection -- we cannot isolate them without a second experiment. This is an inherent limitation of N=1 exploration. The composite document (R2) is our best theoretical choice, but it remains unvalidated.

---

## SUMMARY TABLE

| Question | Answer |
|----------|--------|
| Q1: What makes content GOOD? | **Structural heterogeneity**: code blocks, multiple content modes, procedural sequences, domain transitions, high-contrast visual anchors |
| Q2: What design-system content is ideal? | **Composite from R1+R3+R5** (rank 2) or **SYSTEM automation** (rank 1, but already used). Assemble 700 lines with 4+ code blocks, 3+ table types, 2+ domain transitions |
| Q3: Same or different content? | **DIFFERENT for primary experiment** (composite research). SAME for controlled comparison (RESEARCH-SYNTHESIS, measuring content effect size) |
| Q4: Is content a confound? | **YES, definitively.** Content sets a CEILING on PA-05. Uniform content capped Flagship at 2.5 even after intensive remediation. Content structural heterogeneity is the #1 uncontrolled variable |
| Q5: Does content type affect mechanisms? | **YES.** Tutorial/procedural content has STRONG affinity with 5/6 mechanism categories. Research synthesis has WEAK affinity with 4/6. Content type determines which mechanisms feel natural vs forced |
| Q6: Can we select content that invites Flagship? | **YES.** Composite research document with enforced structural heterogeneity (code, tables, procedures, domain transitions). The content must CONTAIN the variety the design must EXPRESS |

---

**The meta-insight:** "Content-form resonance" is not a subjective aesthetic judgment. It is a measurable structural property. Content with heterogeneous element types (code + prose + tables + procedures + diagrams) FORCES visual heterogeneity because each element type demands different visual treatment. Content with homogeneous elements (prose + uniform tables) PERMITS visual monotony because the builder can apply the same treatment everywhere. Flagship 4/4 requires content that does not PERMIT monotony -- content where visual variety is structurally inevitable.

---

**END OF CONTENT-FORM RESONANCE ANALYSIS**
