# Flagship Preparation Cross-Reference: Missing Items in Enriched Master Execution Prompt

**Author:** FLAGSHIP-CROSSREF (Opus 4.6, Task #5)
**Date:** 2026-02-17
**Method:** Read full enriched prompt (530 lines), then first 80-180 lines of each of 21 flagship preparation files (01 through 21). For each file, identified 2-3 critical items that SHOULD be in the prompt but AREN'T.
**Total items found:** 28 insertable items across 10 priority files

---

## FILE 03: SPATIAL CONFIDENCE GATE

### MISSING ITEM 03-A: Void Budget Estimation Formula (for planners)

The enriched prompt references content-to-void ratio thresholds (S-02, S-14) but does NOT provide the simplified estimation method that the planner uses to CALCULATE projected page height pre-build. File 03 lines 69-91 contain the concrete estimation formulas that make the spatial budget gate executable.

**Insertable text (for Section B7, after P-01):**

```
P-01b. Spatial budget calculation TEMPLATE (planner MUST produce this table):
       body_text_px = word_count / 12 * 30.6
       code_block_px = code_lines * 22.3
       table_px = table_rows * 40
       heading_px = heading_count * 55
       zone_padding_px = zone_count * avg_zone_padding * 2
       transition_px = transition_count * avg_transition_gap
       TOTAL = content_px + overhead_px
       Ratio = content_px / TOTAL >= 0.60. This table MUST appear in the build plan document.
```

### MISSING ITEM 03-B: Calibration Warning -- Void Budget is NECESSARY but NOT SUFFICIENT

File 03 lines 161-168 contain a critical calibration note: the void budget calculation catches GROSS spatial failures but NOT the ceiling experiment's specific failure mode (content present but perceptually void due to zone monotony + horizontal emptiness + empty structural elements). The 7 binary checks address what the void budget misses. The enriched prompt presents S-02 as the primary void check without this nuance.

**Insertable text (as annotation to S-02):**

```
S-02 NOTE: Content-to-void ratio by ELEMENT HEIGHT can be 92% while perceived
     ratio is 30:70 (ceiling experiment data). This check catches GROSS spatial
     failures only. S-12 (viewport content coverage) catches perceptual void.
     Both checks are required. Neither alone is sufficient.
```

### MISSING ITEM 03-C: Content Weight Check (SC-08 proposal from adversarial premortem)

File 09 (adversarial premortem), Failure Mode 1, recommends adding SC-08: minimum 3 visual elements per section, minimum 2 content TYPES per section. The enriched prompt's S-05 requires ">= 200px rendered content height" per section but does NOT require content variety within sections. A section with 2 short paragraphs passes S-05 at 200px but reads as sparse.

**Insertable text (for Section B1, after S-06):**

```
S-06b. Content weight per section: >= 3 visual elements AND >= 2 content types
       (e.g., prose + code, prose + table, prose + callout). Two short paragraphs
       = FAIL even if >= 200px. Catches "technically populated but perceptually sparse."
```

---

## FILE 04: RESTRAINT PROTOCOL

### MISSING ITEM 04-A: Rejection Log Entry Template

The enriched prompt specifies C-12 (rejection log >= 21 entries) but does NOT provide the copy-paste template for what a rejection entry looks like. File 04 lines 32-38 define the 5-field format. Without this template, builders will produce freeform rejection documentation that cannot be verified.

**Insertable text (for Section B3, as annotation to C-12):**

```
C-12 FORMAT (each rejection entry):
  REJECTED: [Mechanism # and Name]
  PROPOSED LOCATION: [Section name or CSS selector]
  PROPOSED SCALE: [Page / Section / Component / Detail]
  REASON FOR REJECTION: [One sentence: what would be LOST by deploying here]
  WHAT IS PRESERVED: [One sentence: what the ABSENCE achieves]
```

### MISSING ITEM 04-B: Silence Zone CSS Specification

The enriched prompt specifies C-13 (>= 2 silence zones, 200px+ height) but does NOT define what CSS IS and IS NOT allowed in a silence zone. File 04 lines 116-158 contain the complete specification: ALLOWED (base typography only), PROHIBITED (any mechanism CSS). Without this, builders create "silence zones" with border-left or zone backgrounds that negate the silence.

**Insertable text (for Section B3, as annotation to C-13):**

```
C-13 DEFINITION: A silence zone allows ONLY base typography (body font, body size,
     body color, standard paragraph margins, page background). PROHIBITED in silence:
     border-left, zone backgrounds, dark zones, callouts, code blocks, any mechanism
     CSS. Silence zones contain CONTENT (text, simple lists) but NO mechanism.
     If it has a border-left or custom background, it is NOT a silence zone.
```

### MISSING ITEM 04-C: Two-Phase Rejection Logging (Planner vs Builder)

The enriched prompt assigns all 21 rejections as a single number. File 04 lines 80-100 specify a two-phase approach: planner documents >= 15 rejections during elaboration planning, builder adds >= 6 during implementation. This division matters because the planner's rejections are STRATEGIC (scope decisions) while the builder's are TACTICAL (implementation discoveries).

**Insertable text (for Section B7, or as annotation to C-12):**

```
C-12 PHASING: Planner documents >= 15 rejections in elaboration plan (Phase A).
     Builder documents >= 6 additional rejections during implementation (Phase B).
     Same mechanism at different locations = separate rejections.
```

---

## FILE 07: KILL CRITERIA

### MISSING ITEM 07-A: KB-02 Content/Zone Ratio >= 1.5

The enriched prompt's Gate 0 (C3) checks "Content/Zone >= 1.5" but this is the ONLY mention and lacks the worked example that makes it memorable. File 07 lines 62-83 contain the critical calibration: the ceiling experiment had ratio = 1.0 (4 zones, 4 content sections) which produced the void. A 4-zone metaphor requires >= 6 content sections.

**Insertable text (for Section C3, Gate 0 expansion):**

```
Gate 0 detail: Content/Zone ratio = (content sections with >= 200 words) / (metaphor zones).
  MUST >= 1.5. Ceiling experiment: 4 zones / 4 sections = 1.0 -> produced void.
  Example: 4-zone metaphor requires >= 6 content sections.
  FAIL action: select simpler metaphor with fewer zones OR expand content.
```

### MISSING ITEM 07-B: KB-05 Metaphor Soul Compatibility Check

File 07 lines 143-164 define a binary soul compatibility check: the metaphor agent fills a table asking whether the metaphor requires gradients, shadows, cool tones, or border-radius. Count conflicts. Zero = PASS. This is not covered in the enriched prompt's metaphor gates (MG-01 through MG-05). MG-03 mentions "R1-R6 rejection checks" but does not include soul compatibility as a specific binary test.

**Insertable text (for Section B6, after MG-05):**

```
MG-06. Metaphor soul compatibility: metaphor agent fills YES/NO table for 4 channels
       (gradients, shadows, cool tones, border-radius). Conflict count MUST = 0.
       Any channel the metaphor requires but soul prohibits = REDESIGN metaphor.
```

### MISSING ITEM 07-C: SP Container Width Range Discrepancy

File 07 line 182 specifies container width threshold as 940-960px, while the enriched prompt's S-01 and parameter table specify 940-1100px (with 1100px as CD-006 proven upper bound). The kill criteria document uses the STRICTER range. The enriched prompt should clarify which is the KILL range vs the ACCEPTABLE range.

**Insertable text (for Appendix parameter table, container width row):**

```
Container width: 940-1100px acceptable, 940-960px PREFERRED.
Kill criterion SP-01 triggers at < 940 or > 1100. Design target 960px.
CD-006 at 1100px is the proven upper bound. > 1100px = ABORT after 2 cycles.
```

---

## FILE 08: METACOGNITIVE CHECKPOINTS

### MISSING ITEM 08-A: Anti-Ambition Audit (Check 1.4)

File 08 lines 102-114 describe a critical pre-build checkpoint: a DIFFERENT agent reads the build plan and describes "the SIMPLEST version of this page that would satisfy flagship requirements" in 3 sentences. The planner then lists every addition beyond that simplest version with its specific SPATIAL COST. This checkpoint is completely absent from the enriched prompt and directly addresses the ceiling's over-ambition failure.

**Insertable text (for Section B7, after P-06):**

```
P-06b. Anti-ambition audit: a SEPARATE agent (not planner, not builder) reads the
       build plan and answers: "What is the SIMPLEST version that meets flagship
       requirements? Describe in 3 sentences." Planner lists EVERY addition beyond
       this with spatial cost. Any addition with spatial cost > perceptual benefit
       = REMOVE. Any addition without a 1-sentence perceptual benefit = REMOVE.
```

### MISSING ITEM 08-B: Subtraction Test (Check 3.1)

File 08 lines 226-242 define a post-Pass-2 checkpoint where the builder identifies the LAST 3 mechanisms deployed and for each answers: (a) WORSE if removed, (b) SAME, or (c) BETTER. Any mechanism rated (b) or (c) is removed. This operationalizes the restraint principle at the builder level and is absent from the enriched prompt.

**Insertable text (for Section B10, builder self-check):**

```
[ ] SUBTRACTION TEST: For the last 3 mechanisms deployed, answer:
    (a) WORSE if removed -- reader loses something noticeable
    (b) SAME -- reader wouldn't perceive the difference
    (c) BETTER -- page gains breathing room or clarity
    Any (b) or (c) = REMOVE that mechanism. Justify (a) with 1 sentence of
    what the READER loses (not what the CHECKLIST requires).
```

### MISSING ITEM 08-C: Metaphor Distance Test (Check 1.5)

File 08 lines 118-129 define a binary check: list 10 key terms from the metaphor and 10 from the content. Count overlaps. If overlap > 3/10, the metaphor is too literal ("labeling, not metaphor"). The ceiling experiment's "Secure Facility" for security content had near-total overlap. This is partially covered by MG-02 (Interpretive Distance >= 2) but the 10-word overlap test is more concrete and agent-executable.

**Insertable text (for Section B6, as annotation to MG-02):**

```
MG-02 TEST: List 10 key terms from metaphor, 10 from content. Overlap <= 3/10.
     If overlap > 3/10, metaphor is labeling, not metaphor. Example: "Secure Facility"
     for security content = near-total overlap = FAIL. Metaphor must introduce concepts
     ABSENT from the content domain.
```

---

## FILE 14: INTENTIONALITY LAYER DESIGN

### MISSING ITEM 14-A: Six Intentionality Dimensions with Concrete Recipes

The enriched prompt's C-15 lists 6 dimensions (self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation) but provides no recipes or examples. File 14 contains concrete HTML recipes and builder instructions for each dimension (8-10 lines each). The intentionality builder needs at minimum the 1-sentence minimum viable implementation for each.

**Insertable text (for Section E, Intentionality Builder reading list):**

```
INTENTIONALITY BUILDER reads:
  - 14-intentionality-layer-design.md -- 6 dimensions with HTML recipes:
    * Self-reference: code block showing CSS that styles its own container (0 CSS cost)
    * Pedagogical sequencing: sections ordered as cumulative learning progression
    * Cognitive transitions: bridge prose naming the reader's mental shift
    * Bookending: final section echoes opening with resolution
    * Deliberate absence: documented omission that creates meaning through contrast
    * Meta-annotation: comment-style content that reveals design intent
    Minimum: 1 self-referential element + 2 bridge transitions + 1 bookend pair
```

### MISSING ITEM 14-B: Self-Reference Danger Zone -- No Meta-Pretension

File 14 lines 101-105 contain a critical anti-pattern: self-reference MUST describe STRUCTURE ("this callout has a dense label zone"), NEVER AESTHETICS ("this callout looks great"). The ceiling had zero self-reference; the risk for flagship is PERFORMATIVE self-reference that narrates quality rather than demonstrating structure.

**Insertable text (for Section A, conviction layer or Section D):**

```
INTENTIONALITY WARNING: Self-reference describes STRUCTURE, never AESTHETICS.
  GOOD: "Notice how this callout has a dense label zone followed by a sparse content zone"
  BAD: "Notice how beautifully this section transitions"
  Self-reference must be ORGANIC to the content topic. If the topic doesn't support it,
  use structural self-reference (page layout mirrors the concepts being discussed).
```

---

## FILE 15: PERCEPTUAL HIERARCHY

### MISSING ITEM 15-A: Visual Weight Distribution Curve (3 Peaks, 2 Valleys)

File 15 lines 197-218 contain a concrete weight distribution curve specifying 3 peaks (Opening at 0-15%, Climax at 40-60%, Depth at 60-85%) with 2 valleys between them (Reading Zone at 15-35%, Resolution at 85-100%). The enriched prompt's A8 describes a 5-act structure but does NOT provide the visual weight targets per act. This is the most concrete operationalization of "spatial confidence" available.

**Insertable text (for Section A8, after the 5-act description):**

```
VISUAL WEIGHT TARGETS (10-point scale):
  Act 1 (0-15%): 7/10 -- confident but not overwhelming (header + orientation)
  Valley 1 (15-35%): 4/10 -- reading zone, let eye settle
  Act 3 (40-60%): 9/10 -- CLIMAX, highest contrast, stop-scrolling moment
  Act 4 (60-85%): 6/10 -- highest information density, substance zone
  Act 5 (85-100%): 5/10 -- resolution, spacing expands, footer bookend
  RULE: Act 4 MUST have MORE content per viewport than Act 2.
  RULE: NEVER more than 2 viewports of identical texture consecutively.
```

### MISSING ITEM 15-B: Mandatory Footer Specification

File 15 lines 189-193 specify concrete footer requirements: must have visual weight comparable to header (bookend effect), must contain copyright/attribution + navigation links + date, must use dark background or heavy border, must NOT just fade into cream. The enriched prompt's S-04 only says "Footer: MUST exist with visible content" without specifying what makes a footer adequate.

**Insertable text (for Section B1, as annotation to S-04):**

```
S-04 FOOTER SPEC: Visual weight comparable to header (bookend). Contains at minimum:
     copyright/attribution, navigation links, date. Uses dark background OR 3px+
     primary border to signal "end" decisively. Footer MUST NOT fade into cream.
     Ending must be ASSERTIVE. Gap from last content element <= 1 viewport height.
```

### MISSING ITEM 15-C: Act 3 Climax Position Mandate

File 15 lines 124-146 specify that the single most visually striking moment must be positioned at 40-60% scroll depth (the midpoint), NOT at the opening. The ceiling experiment positioned its best element (architecture diagram) at 10-15% -- front-loaded weight that made the rest feel like decline. The enriched prompt's C-09 requires ">= 1 designed moment per scroll quartile" but does not specify WHERE the STRONGEST moment should be.

**Insertable text (for Section B3, after C-09):**

```
C-09b. Climax positioning: the single HIGHEST-WEIGHT visual element (dark inset,
       complex grid, full-width diagram) MUST be positioned at 40-60% scroll depth.
       NOT in the first 25%. The ceiling experiment front-loaded at 10-15% and
       everything after felt like decline. The climax is the REWARD for scrolling.
```

---

## FILE 16: CROSS-EXPERIMENT ANALYSIS

### MISSING ITEM 16-A: Quality-Richness Frontier Thesis

File 16 lines 10-56 establish that quality and richness are NOT in a simple trade-off -- the crown jewels prove both are achievable simultaneously -- but the conditions that produce both (iteration + compositional discovery time) are fundamentally different from pipeline execution. The enriched prompt's conviction layer (Section A) does not include this empirical finding, which is the strongest evidence-based frame for the flagship's ambition.

**Insertable text (for Section A4 or A6, experiential laws):**

```
QUALITY-RICHNESS IS NOT A TRADE-OFF. Crown jewels prove both are simultaneously
achievable. But the conditions are: iteration count + compositional discovery time.
Phase D->Middle: richness UP, quality UP. Middle->Ceiling: richness UP, quality DOWN.
Crown jewels: BOTH high. The frontier exists. Pipeline execution sits BELOW it.
Flagship's 5-pass architecture is the attempt to approximate iteration within pipeline.
```

### MISSING ITEM 16-B: Best Quality Predictors (Ranked)

File 16 lines 73-79 rank quality predictors: (1) Spatial confidence -- ZERO counter-evidence across all 4 experiments, (2) Iteration count -- zero counter-evidence but confounded with human involvement. The enriched prompt treats spatial confidence as one concern among many. This ranking should reinforce its primacy.

**Insertable text (for Section A3 or conviction closing):**

```
QUALITY PREDICTOR RANKING (all 4 experiments):
  #1 Spatial confidence -- ZERO counter-evidence. Every high-quality result had it.
     Every failure lacked it. The ONLY hypothesis with zero counter-evidence.
  #2 Iteration count -- zero counter-evidence but confounded with human involvement.
  REJECTED: mechanism count (14 > 12 but worse quality), constraint compliance (necessary
     but not sufficient). Spatial confidence is THE primary quality gate.
```

---

## FILE 17: NO-COMPROMISE PIPELINE

### MISSING ITEM 17-A: Composition Verification Gate -- Mechanism Perception Check

File 17 lines 75-76 specify that Gate 3 (post-Pass-2) includes not just programmatic mechanism verification but also a PERCEPTION check: "How many mechanisms are VISIBLE?" The ceiling had 14 present but only 1 visible. The enriched prompt's Gate 3 checks "CP-01 through CP-04 + spatial re-check" but does NOT include a perceptual mechanism visibility check.

**Insertable text (for Section C3, Gate 3):**

```
Gate 3 addition: Mechanism Perception Check. A fresh-eyes agent views the page and
  counts: "How many distinct visual techniques can you identify?" If count < 6
  (half of deployment target), mechanisms are present but invisible (ceiling failure
  mode: 14 deployed, 1 visible). Builder must increase contrast between mechanism
  deployments or reduce mechanism count to those that ARE visible.
```

### MISSING ITEM 17-B: 3 Metacognitive Reviewers at 3 Pipeline Stages

File 17 lines 96-106 specify 3 metacognitive reviewers: Pre-Mortem (before Pass 0), Mid-Pipeline (after Pass 2), Post-Build (after Pass 4, before Mode 4). Each is an Opus agent with ZERO prior context. The enriched prompt includes none of these metacognitive review agents in Section C1.

**Insertable text (for Section C1, agent roster):**

```
METACOGNITIVE REVIEWERS (3 zero-context Opus agents):
  Pre-Mortem (before Pass 1): "Assume this fails. Most likely cause?"
  Mid-Pipeline (after Pass 2): "What has been lost from the original vision?
    Is the metaphor serving the page or has the page been deformed to serve it?"
  Post-Build (after Pass 4, before Mode 4): "In 10 seconds, emotional response?
    Crown jewel or well-executed technical document? Single most improving change?"
  Each receives ONLY the HTML/screenshots. ZERO build context. Prevents continuation bias.
```

### MISSING ITEM 17-C: Competitive Build Selection Criteria

File 17 lines 167-178 describe the competitive build: 2 skeleton builders execute Pass 1 in parallel, team-lead picks the better one. The enriched prompt mentions "Skeleton Builders A+B (Sonnet, competitive): 2 parallel, team-lead picks better" but does NOT specify HOW the team-lead selects. The selection criteria are crucial.

**Insertable text (for Section C1, after competitive builder mention):**

```
COMPETITIVE BUILD SELECTION (team-lead picks better skeleton):
  1. Run spatial gate (SC-01 through SC-07) on BOTH skeletons
  2. If both pass: pick the one with HIGHER content-to-void ratio
  3. If one passes, one fails: pick the passing skeleton
  4. If both fail: abort and re-plan (do NOT pick the "less bad" one)
  Tie-breaker: the skeleton with more visual variety in the first 1.5 viewports.
```

---

## FILE 19: CONSTRAINT PRESSURE HYPOTHESIS

### MISSING ITEM 19-A: Constraint Pressure Quantification

File 19 lines 20-63 quantify the constraint pressure mechanism: KortAI soul closes 6 of 8 major expressive channels. Each surviving channel carries 4-5x normal semantic weight. This is the ENGINE of richness. The enriched prompt's A4 (Dual Richness Sources) mentions "Source 1: Soul prohibitions close ~55-65% of CSS toolkit" but does not explain WHY closing channels creates richness (the channel capacity redistribution).

**Insertable text (for Section A4, expanding Source 1):**

```
WHY CLOSING CHANNELS CREATES RICHNESS: Conventional design distributes semantic load
across 8+ channels (shadows, gradients, rounded corners, etc.). Soul closes 6/8.
Remaining 2-3 channels (border-weight, zone-background, spacing) carry 4-5x normal
semantic weight. 1px vs 4px border in KortAI carries MORE perceptual meaning than
in Material Design because the viewer has no competing channels to process.
This is automatic from soul compliance. It is NOT optional richness -- it IS the richness.
```

---

## FILE 20: ATTENTION BANDWIDTH THEORY

### MISSING ITEM 20-A: Mechanism Attention Tax Quantification

File 20 lines 121-131 calculate that mechanism deployment alone consumed ~42% of the ceiling builder's attention budget. 14 mechanisms x 3.5 attention units each = ~53 units out of ~100. This left ~0 units for spatial proportion. The enriched prompt's A6 says "Every rule in this prompt has an attention cost" but does not quantify the mechanism tax or its consequence.

**Insertable text (for Section A6, experiential laws):**

```
ATTENTION TAX: Each mechanism costs ~3.5 attention units to deploy (understand +
implement + place + verify interactions). 14 mechanisms = ~53 units = ~42% of total
budget. Mechanisms at 12 cost ~42 units (34%). The delta (14->12) frees ~11 units
for spatial proportion. This is why the mechanism target is 12-14, not 14-16.
FEWER mechanisms = MORE attention for emergent quality (the thing that ACTUALLY matters).
```

### MISSING ITEM 20-B: Attention Priority Hierarchy

File 20 lines 44-52 document the stable compliance hierarchy: (1) Binary identity rules ~100%, (2) Explicit structural mandates ~80-90%, (3) Quantitative thresholds ~60-70%, (4) Judgment-based qualities ~0-10%, (5) Emergent properties ~0%. The enriched prompt should state this hierarchy explicitly so the team-lead understands WHY spatial proportion gates are essential (the builder WILL drop them without gates).

**Insertable text (for Section A6 or B7, process awareness):**

```
ATTENTION PRIORITY (what builders preserve vs drop under pressure):
  Priority 1: Binary identity (soul) -- ~100% compliance
  Priority 2: Structural mandates (footer, sections) -- ~80-90%
  Priority 3: Quantitative thresholds (CPL, token%) -- ~60-70%
  Priority 4: Judgment qualities -- ~0-10%
  Priority 5: Emergent properties (spatial proportion, rhythm) -- ~0%
  Spatial proportion is Priority 5. Without BINARY GATES, it WILL be dropped.
  Every spatial rule in this prompt is a gate BECAUSE builders cannot self-enforce it.
```

---

## FILE 09: ADVERSARIAL PREMORTEM

### MISSING ITEM 09-A: Failure Mode 4 -- Messaging Goodhart's Law Warning

File 09 lines 58-68 predict that mandating message COUNT will produce procedural compliance artifacts, not genuine quality checks. The builder will ask a superficial question to satisfy the gate. The enriched prompt mandates "minimum 8 substantive messages" and "Zero messages at Gate 1 = PAUSE BUILD" but does not address the Goodhart risk.

**Insertable text (for Section C2, communication protocol):**

```
GOODHART WARNING: Do NOT count messages. Count DELIVERABLE ARTIFACTS.
  Gate 1 requires builder to submit SPATIAL REPORT (3 numbers: total height,
  content height, void %). Gate 3 requires MECHANISM IMPACT REPORT (which
  mechanisms added the most spacing, was it intentional?). These are FILES,
  not messages. "I see no concerns, proceeding" is NOT a substantive message.
  Messages MUST contain specific NUMBERS per existing rules. Enforce via
  deliverable presence, not message count.
```

### MISSING ITEM 09-B: Failure Mode 10 -- Seam Visibility Between Passes

File 09 lines 144-154 predict that 3 different agents (skeleton Sonnet, mechanism Sonnet, intentionality Opus) will produce 3 distinct stylistic voices creating visible "seams" between passes. CSS will be coherent (same tokens) but HTML/prose voice will differ. The enriched prompt does not address this risk.

**Insertable text (for Section C1 or B7, process rules):**

```
P-08b. Voice continuity across passes: Pass 2 and Pass 3 builders MUST read Pass 1's
       HTML before writing. Match prose style, heading patterns, comment conventions,
       and structural patterns from Pass 1. The page must read as ONE designer's work.
       PA-05b (COHERENT -- "one designer, no dialect shifts") applies to HTML content
       voice, not just CSS tokens. Three agents, one voice.
```

### MISSING ITEM 09-C: Failure Mode 5 -- Intentionality Must Be Designed In, Not Bolted On

File 09 lines 72-82 predict that Pass 4 (intentionality) will produce COSMETIC additions (appended bookend, inserted bridge text) rather than STRUCTURAL integration. The enriched prompt separates intentionality into Pass 4 but does not address the architectural risk that late-stage intentionality additions lack structural integration.

**Insertable text (for Section B7, after P-01):**

```
P-01c. Intentionality pre-planning: The content architect (Pass 0) MUST specify
       at least 2 intentionality hooks in the content architecture document:
       "Section X will include a self-referential element showing [specific content-form
       relationship]. The final section will echo the opening with [specific resolution]."
       These are STRUCTURAL decisions that Pass 1's skeleton must account for.
       Pass 4 ELABORATES these hooks. It does not invent them from scratch.
```

---

## PRIORITY RANKING OF INSERTABLE ITEMS

### BLOCKING (must include or prompt is structurally deficient):

1. **08-A: Anti-Ambition Audit** -- Directly prevents the ceiling's over-ambition root cause. No current check addresses cumulative spatial cost of individual additions.
2. **15-A: Visual Weight Distribution Curve** -- Operationalizes "spatial confidence" into actionable per-act weight targets. Without this, "spatial confidence" remains a judgment rule.
3. **17-B: 3 Metacognitive Reviewers** -- Zero-context reviewers at 3 pipeline stages prevent continuation bias. This is the primary mechanism missing from the agent roster.
4. **04-B: Silence Zone CSS Specification** -- Without this, builders create "silence zones" with mechanism CSS, defeating the purpose.
5. **20-B: Attention Priority Hierarchy** -- Explains WHY spatial gates are essential. Without this understanding, the team-lead may soften gate enforcement.

### HIGH (should include for prompt completeness):

6. **03-A: Void Budget Estimation Formula** -- Makes P-01 executable by planners.
7. **04-A: Rejection Log Entry Template** -- Makes C-12 verifiable.
8. **09-C: Intentionality Pre-Planning** -- Prevents Pass 4 from producing cosmetic additions.
9. **15-C: Climax Position Mandate** -- Prevents front-loaded visual weight.
10. **17-A: Mechanism Perception Check** -- Catches "deployed but invisible" failure.
11. **08-B: Subtraction Test** -- Builder-level restraint operationalization.
12. **09-B: Seam Visibility Warning** -- Addresses 3-agent voice coherence risk.

### MODERATE (include if space allows):

13. **03-B: Void Budget Calibration Warning** -- Nuance for S-02.
14. **03-C: Content Weight Check** -- Catches sparse-but-technically-passing sections.
15. **07-A: Content/Zone Ratio Worked Example** -- Makes Gate 0 memorable.
16. **07-B: Metaphor Soul Compatibility** -- Binary check missing from MG gates.
17. **08-C: Metaphor Distance Test** -- More concrete than MG-02.
18. **14-A: Intentionality Recipes for Builder** -- Reference list for Pass 4.
19. **14-B: Self-Reference Anti-Pretension** -- Prevents performative self-reference.
20. **16-A: Quality-Richness Frontier** -- Empirical frame for conviction layer.
21. **16-B: Quality Predictor Ranking** -- Reinforces spatial confidence primacy.
22. **17-C: Competitive Build Selection** -- Makes skeleton selection criteria explicit.
23. **19-A: Constraint Pressure Explanation** -- Deepens Source 1 understanding.
24. **20-A: Mechanism Attention Tax** -- Quantifies why 12-14, not 14-16.
25. **04-C: Two-Phase Rejection Logging** -- Operational detail for C-12.
26. **07-C: Container Width Range Clarification** -- Resolves 940-960 vs 940-1100.
27. **09-A: Messaging Goodhart Warning** -- Addresses procedural compliance risk.
28. **15-B: Footer Specification** -- Makes S-04 more specific.

---

**END OF CROSS-REFERENCE SPECIFICATION**
**Total insertable items:** 28
**Priority BLOCKING:** 5
**Priority HIGH:** 7
**Priority MODERATE:** 16
**Files covered:** 10 of 10 priority files + 1 bonus (File 09)
**Estimated lines if all BLOCKING + HIGH items inserted:** ~120 lines (well within prompt budget)
