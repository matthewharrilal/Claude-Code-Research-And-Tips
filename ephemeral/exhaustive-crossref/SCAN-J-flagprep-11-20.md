# SCAN-J: Cross-Reference Report — Flagship Preparation Files 11-20

**Scanner:** Scanner J (Sonnet 4.5)
**Date:** 2026-02-17
**Files Scanned:** flagship-preparation/11-20 (10 files)
**FINAL Prompt:** ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md

---

## METHODOLOGY

For each of the 10 flagship preparation files (11-20), I identified every concrete specification, rule, threshold, formula, verification method, or operational procedure that is MISSING or UNDERSPECIFIED in the FINAL prompt. Each gap is classified:

- **CRITICAL**: Directly predicts failure; missing from FINAL prompt entirely
- **IMPORTANT**: Materially affects quality; weakly specified in FINAL prompt
- **NICE-TO-HAVE**: Would improve clarity but prompt is functional without it

**Note on file naming:** The actual files differ from the task description. Actual names:
- 11 = `11-crown-jewel-forensics.md`
- 12 = `12-defining-beautiful.md`
- 13 = `13-compositional-fluency.md`
- 14 = `14-intentionality-layer-design.md`
- 15 = `15-perceptual-hierarchy.md`
- 16 = `16-cross-experiment-analysis.md`
- 17 = `17-no-compromise-pipeline.md`
- 18 = `18-UNIFIED-ACTION-PLAN.md`
- 19 = `19-constraint-pressure-hypothesis.md`
- 20 = `20-attention-bandwidth-theory.md`

---

## FILE 11: Crown Jewel Forensics

### GAP-11-01: Crown Jewel Minimum Technique Set (8-check quality gate)
**Classification: CRITICAL**

File 11 derives a minimum 8-technique set for crown jewel quality. The FINAL prompt references CD-006 (39/40) in A7 but does NOT give builders a compact, verifiable checklist distilled from the crown jewels. The file provides:

```
CROWN JEWEL QUALITY GATE (8 checks):
1. TOKEN COVERAGE: Zero CSS values hardcoded? (All via var())
2. FRAME: Dark header + dark footer with primary accent?
3. TRANSITIONS: All section boundaries Smooth/Bridge/Breathing? Bridges have prose?
4. META: Each section shows structural strategy (axis/density) in visible label?
5. VARIETY: 8+ distinct component types used, each demanded by content?
6. ARC: Page density follows sparse-dense-sparse? Climax in middle, not end?
7. ACCESSIBILITY: Every <section> has aria-label? Every callout role="note"? Skip link?
8. SOUL: *:where(:not(input,button,select)){border-radius:0} present?
```

**Placement:** Add to B10 BUILDER SELF-CHECK as a "Crown Jewel Gate" section, or as a sub-section of Gate 5 in C3.

---

### GAP-11-02: Critical CSS Metrics Table (CSS lines / classes / tokens targets)
**Classification: IMPORTANT**

File 11 provides specific numerical targets that are entirely absent from FINAL prompt:

```
FLAGSHIP FILE METRICS (from forensic analysis of DD-006 and CD-006):
  Total lines: 1,800-2,500
  CSS lines: 900-1,200
  HTML lines: 800-1,100
  CSS classes: 80-120
  :root tokens: 50-60
  Component types: 10-14
  Component instances: 25-40
  ARIA attributes: 25+
  Media queries: 4-5
  Hardcoded values: 0-3 (target: 0)
```

**Placement:** Add to Appendix (authoritative parameter table) as "Flagship File Metrics."

---

### GAP-11-03: Semantic Gestalt Spacing Aliases
**Classification: IMPORTANT**

File 11 identifies that CD-006 introduces `--space-within`, `--space-between`, `--space-chapter` semantic aliases as a maturation signal ABSENT from DD-006. The FINAL prompt mentions semantic spacing concepts but does NOT require these specific token names. Builders who add these aliases create better semantic clarity.

**Insertable text for Section E (builder reads):**

```
SEMANTIC SPACING ALIASES (CD-006 crown jewel pattern):
--space-within: 8px   (related elements within a component)
--space-between: 32px  (distinct elements in same section)
--space-chapter: 64px  (section breaks, major transitions)
These create a CONCEPTUAL LAYER on top of the numeric spacing scale.
```

**Placement:** Section E (Builder reads) or B7 process rules.

---

### GAP-11-04: DD-006 rgba() Progressive Opacity Technique
**Classification: NICE-TO-HAVE**

File 11 identifies `rgba(232,48,37,0.03/0.06/0.09)` progressive opacity nesting as a technique unique to DD-006 that creates depth without box-shadow (soul-compliant). The FINAL prompt prohibits `rgba()` under U-04, but the note says "exception: progressive depth tinting per DD-006." The exception is mentioned but no operational guidance is given for when/how to use it.

**Insertable text for U-04:**

```
U-04 exception: Progressive depth tinting only (per DD-006):
  rgba(accent-color, 0.03) -> 0.06 -> 0.09 for nested fractal containers.
  Never use rgba for opacity < 0.90 on flat section backgrounds.
```

---

### GAP-11-04b: Golden Ratio Grid Pattern
**Classification: NICE-TO-HAVE**

File 11 identifies `grid-template-columns: 1.618fr 1fr` as CD-006's only golden ratio grid use. The FINAL prompt has no mention of this technique as a hero-layout option.

---

### GAP-11-05: 3-Category Border System Enforcement
**Classification: IMPORTANT**

File 11 specifies a critical constraint: "4px (structural accent left border), 3px (structural frame border), 1px (data separator/subtle). NEVER 2px." The FINAL prompt's soul rules mention borders but do NOT enforce the NEVER 2px prohibition explicitly. This is in prohibitions.md but not surfaced in the builder's self-check or soul section.

**Insertable text for B2 (SOUL):**

```
U-11. Border weight trinity: 4px (structural accent), 3px (structural frame), 1px (separator).
      NEVER 2px. The 2px value is reserved for prohibition.
```

**Placement:** B2 SOUL, as U-11 (currently 10 rules, adding an 11th).

---

### GAP-11-06: Missing Responsive Degradation Target
**Classification: IMPORTANT**

File 11 identifies CD-006 uses 3-tier responsive design (960/768/480) with "progressive degradation" as a must-replicate technique. The FINAL prompt specifies 4 viewports for PA audit (C4: 1440/1024/768/480) but does NOT specify that the page must implement CSS media queries for these breakpoints. There is no B rule requiring responsive implementation.

**Insertable text:**

```
B-RESPONSIVE (from crown jewel forensics):
  R-01. At minimum 3 breakpoints: 960px, 768px, 480px.
  R-02. At 768px: grid columns collapse to 1fr, font size reduces for display headings.
  R-03. At 480px: padding reduces, footer elements stack.
  R-04. prefers-reduced-motion: animation/transition set to 0.01ms globally.
  R-05. print: dark backgrounds convert to white, borders convert to black.
```

---

## FILE 12: Defining Beautiful

### GAP-12-01: "Confident Intention at Every Scale" Operationalization
**Classification: CRITICAL**

File 12 defines beauty as "encountering confident intention at every scale of attention" and breaks this into 4 resolved tensions: warm/not-soft, austere/not-cold, authoritative/not-aggressive, restrained/not-empty. The FINAL prompt has "Warm. Authoritative. Unhurried." but does NOT provide the NEGATIVE POLE of each tension. The negative poles are what prevent misinterpretation:

**Insertable text for A2 TENSIONS (expand table):**

```
| Axis | IS | IS NOT | FAILURE MODE |
|------|-----|--------|--------------|
| Temperature | Warm | Soft | Generic friendliness |
| Restraint | Austere | Cold | Sterile emptiness |
| Authority | Authoritative | Aggressive | Intimidating |
| Density | Restrained | Empty | Void (Ceiling failure) |
| Feeling | Confident | Tentative | "Someone stopped designing" |
```

The fifth row (Confident/Tentative) is the critical addition. The Ceiling page was not ugly; it was TENTATIVE. This distinction must be in the prompt.

---

### GAP-12-02: First Moment of Delight Specification
**Classification: IMPORTANT**

File 12 specifies that the first moment of delight must occur within the first 15-20% of the page AND must be visual (not textual). The FINAL prompt has A8 (5-act story) but does NOT specify that Act 2's "first delight" must be visual.

**Insertable text for A8:**

```
VISUAL DELIGHT RULE (from 12-defining-beautiful.md):
First delight (Act 2, 15-20% scroll): MUST be visual, not textual.
A diagram, visualization, or particularly well-composed callout box.
"Something that makes the viewer think: this page is different."
Textual delight (clever prose) does NOT satisfy this requirement.
```

---

### GAP-12-03: Optimal Eye Pattern ("Descent with Pauses")
**Classification: IMPORTANT**

File 12 specifies the optimal viewer eye pattern: "Descent with Pauses" -- NOT F-pattern, NOT Z-pattern. This is directly applicable to Pass 4 (Intentionality) as a design target.

**Insertable text for A8 (Reader Journey) or B3:**

```
OPTIMAL EYE PATTERN ("Descent with Pauses"):
1. Land on header (dark anchor)
2. Pause at orientation element (context box)
3. Scan first content section
4. Encounter first designed moment (MUST ARREST SCROLL)
5. Pause -- viewer thinks "someone thought about this"
6. Resume with increased engagement
7. Encounter rhythm variation (dense -> breathing -> designed moment)
8. Arrive at footer with sense of COMPLETION

The designed moment at step 4 should not be loud but VISUALLY DISTINCT.
```

---

### GAP-12-04: The Perceptual Sequence Checklist
**Classification: IMPORTANT**

File 12 provides a 5-second perceptual sequence (seconds 0-1, 1-2, 2-3, 3-5) with specific requirements for each second. The FINAL prompt references the 5-second test in A1 but gives no operational detail for what passes it.

**Insertable text for A1 (THESIS):**

```
5-SECOND TEST CRITERIA:
  Second 0-1: Dark header communicates authority + warmth simultaneously
  Second 1-2: Eye drops to context box -- viewer knows WHAT and WHY in < 3 sentences
  Second 2-3: Peripheral vision detects 3+ distinct visual textures below fold
  Second 3-5: Brain detects hierarchy + rhythm + system ("this is organized")
FAIL: any of these is absent or takes longer than the specified window.
```

---

## FILE 13: Compositional Fluency

### GAP-13-01: Compositional Cluster Format in Build Plan
**Classification: CRITICAL**

File 13 specifies that the build plan MUST organize mechanisms by COMPOSITIONAL CLUSTERS, not by mechanism number. The FINAL prompt specifies what the planner must produce (03-build-plan.md) but does NOT specify that the plan format must use compositional clusters. This is the single most important architectural principle for compositional quality.

**Insertable text for C1 (Planner deliverable):**

```
COMPOSITIONAL CLUSTER FORMAT (mandatory for 03-build-plan.md):
  WRONG: "Deploy #1 (border-weight) for hierarchy; deploy #7 (zone backgrounds) for sections"
  RIGHT:
    CLUSTER A: [SHARED SEMANTIC, e.g. DEPTH ENCODING]
      - #1 (border-weight) + #7 (zone backgrounds) + #4 (spacing compression)
      - All THREE encode: [shared semantic dimension]
      - Co-variation table:
        | State | Border | Background | Padding |
        |-------|--------|------------|---------|
        | Deep  | 4px    | dense      | 20px    |
        | Mid   | 3px    | breathing  | 32px    |
        | Surface| 1px  | sparse     | 64px    |

Clusters > 1 mechanism = reinforcing pair (counts toward MC-02).
```

**Placement:** C1 (AGENT ROSTER), Planner section.

---

### GAP-13-02: Composition Self-Check (CC-01 through CC-07)
**Classification: CRITICAL**

File 13 specifies a 7-item composition audit checklist that is almost entirely absent from the FINAL prompt. The FINAL prompt has CCS in MC-01 but does NOT have the full 7-item checklist.

**Insertable text:**

```
COMPOSITION AUDIT (after mechanism deployment, before Gate 3):
CC-01: 2+ reinforcing pairs documented with shared semantic dimension? YES/NO
CC-02: For each pair, do values co-vary in same direction? YES/NO
CC-03: Pick any 3 mechanisms. Remove each mentally. Does page feel different? YES for 2+ of 3?
CC-04: Is there >= 1 "response" -- mechanism that ANSWERS a previous section's visual weight? YES/NO
CC-05: Is there >= 1 "silence zone" -- deliberate absence creating contrast? YES/NO
CC-06: Would an auditor describe the page as "atmospheric" or "mood-shifting"? YES/NO
CC-07 (ACID TEST): Can you describe the page in one sentence NOT listing mechanisms?
  YES = composition. NO = vocabulary. ("The page DESCENDS into increasingly dense
  territory" = YES; "The page uses border-weight, zones, and spacing" = NO.)
CC-07 FAIL = revise at least one mechanism cluster to share a semantic dimension.
```

**Placement:** B3 COMPOSITIONAL or Gate 3 in C3.

---

### GAP-13-03: Vocabulary-Composition Axis Distinction
**Classification: IMPORTANT**

File 13 demonstrates that vocabulary and composition are NOT a spectrum -- they are TWO INDEPENDENT AXES. The FINAL prompt conflates them. A builder deploying 14 mechanisms independently scores high on vocabulary but zero on composition. This distinction must be explicit.

**Insertable text for A5 (COMPOSITIONAL FLUENCY) or A6:**

```
VOCABULARY vs COMPOSITION (NOT a spectrum -- two independent axes):
  HIGH vocabulary + LOW composition = "professionally stiff" (Middle result)
  LOW vocabulary + HIGH composition = "sparse but atmospheric" (possible)
  HIGH vocabulary + HIGH composition = crown jewel (CD-006 target)

Test: "Can you describe this page's atmosphere in one sentence without listing
mechanisms?" If NO, you have vocabulary without composition.

Composition requires mechanisms that NEED each other. Removing mechanism A
should change how mechanism B is perceived. If not, they are independent (vocabulary).
```

---

### GAP-13-04: Inter-Agent Compositional Messaging Protocol
**Classification: IMPORTANT**

File 13 identifies that agent messaging must be specifically COMPOSITIONAL -- about mechanism relationships, not just implementation questions. The FINAL prompt has communication checkpoints (CP-A through CP-E) but none specify compositional interaction as the topic.

**Insertable text for C2 (COMMUNICATION PROTOCOL):**

```
COMPOSITIONAL MESSAGING (required content type for CP-A/CP-D):
  Builder -> Planner: "The [ELEMENT] creates strong visual weight. Should [MECHANISM X]
    echo it to create a weight transition? Specific question: should the drop cap
    use --color-primary to echo the header's red border?"
  Planner -> Builder: "[YES/NO + reasoning about mechanism relationship, not implementation]"

Messages about mechanism RELATIONSHIPS count toward the minimum 8.
Messages about implementation details (file paths, CSS syntax) do NOT count.
```

---

## FILE 14: Intentionality Layer Design

### GAP-14-01: Full 12-Check Intentionality Binary Checklist
**Classification: CRITICAL**

File 14 provides a 12-item binary checklist (I-01 through I-12) for intentionality compliance. The FINAL prompt references C-15 (>= 3 of 6 dimensions) and C-16/C-17 (self-reference, bridge transitions), but does NOT provide the full 12-item checklist. The checklist items I-03, I-07, I-08, I-09, I-11, I-12 are entirely absent from the FINAL prompt.

**Insertable text (compact version for B3 or Gate 5):**

```
INTENTIONALITY COMPLIANCE (12 binary checks, must pass 10/12):
I-01: >= 1 element where content describes its own form (self-reference) YES/NO
I-02: Self-reference is organic (from topic), not bolted-on YES/NO
I-03: Section N+1 depends on section N for >= 3 consecutive pairs YES/NO
I-04: >= 2 bridge transitions with cognitive-shift prose YES/NO
I-05: >= 2 transition--bridge elements with prose content YES/NO
I-06: Bridge prose names both preceding AND following content YES/NO
I-07: First and last content sections use SAME axis pattern YES/NO (BOOKENDING)
I-08: >= 1 structural element (callout type, layout) echoes across bookend sections YES/NO
I-09: Every content section has .section-meta with axis + density pattern names YES/NO
I-10: Meta-annotation uses mono/small/secondary styling (quiet) YES/NO
I-11: Inline threading header of >= 20 lines in HTML comment YES/NO
I-12: >= 50% of sections have boundary comments with citations YES/NO

Flagship TARGET: 12/12 binary. MINIMUM: 10/12. Crown jewel benchmark: CD-006 = 12/12.
```

**Placement:** B3 as subsection, or Gate 5 in C3.

---

### GAP-14-02: Pass 1 Bookending Preparation Requirement
**Classification: CRITICAL**

File 14 identifies that bookending is the ONE intentionality dimension that MUST be planned before the skeleton is built (Pass 1). The FINAL prompt does NOT include a Pass 1 instruction to designate bookend sections.

**Insertable text for C1 (Planner deliverable, Pass 0.5):**

```
BOOKEND DESIGNATION (must be in 03-build-plan.md, before skeleton build):
  First and last content sections: designated as bookend pair.
  Both sections: SAME axis pattern (e.g., both Spiral or both Z-Pattern).
  Both sections: same mechanism treatment (same callout types, same border treatment).
  If the plan does not designate bookend pair, Pass 1 builder cannot implement it.
  This is the ONLY intentionality dimension that is a Pass 1 dependency.
```

---

### GAP-14-03: Provenance Threading Minimum Specification
**Classification: IMPORTANT**

File 14 specifies provenance threading with concrete minimums that are absent from the FINAL prompt. C-15 mentions "provenance threading" as one of 6 dimensions but gives no operational detail.

**Insertable text for Pass 4 (Intentionality Builder):**

```
PROVENANCE THREADING (Pass 4, Intentionality Builder):
1. INLINE THREADING HEADER (HTML comment, top of file):
   Minimum 20 lines: why page exists, what it builds on, constraints honored.
2. SECTION BOUNDARY COMMENTS (HTML comments above each section):
   Axis pattern name + justification (e.g., "Axis: SPIRAL (geological depth metaphor)")
3. CSS TOKEN COMMENTS (:root block):
   Source document cited for each token group.
These are INVISIBLE to reader. Visible to auditors and future builders.
```

---

### GAP-14-04: Section-Meta Label Format
**Classification: IMPORTANT**

File 14 specifies an exact format for `.section-meta` elements that is absent from the FINAL prompt.

**Insertable text:**

```
.section-meta FORMAT (every content section, above h2):
  "Section [NN] · [AXIS PATTERN] · [DENSITY PATTERN]"
  Example: "Section 01 · Spiral · Geological Density"
  CSS: font-family: mono, font-size: type-meta (0.75rem), color: secondary,
       letter-spacing: 0.1em, text-transform: uppercase.
  This creates dual reading: surface (ignore labels) + structural (understand architecture).
```

---

### GAP-14-05: Pass 3 Workload Estimate Missing
**Classification: NICE-TO-HAVE**

File 14 specifies that the intentionality layer adds 93-168 lines HTML/comments at 0 CSS lines in 26-48 minutes. This calibration data would help the builder allocate time correctly.

---

## FILE 15: Perceptual Hierarchy

### GAP-15-01: Weight Distribution Curve (3 Peaks Specification)
**Classification: CRITICAL**

File 15 specifies a 3-peak visual weight distribution curve that is NOT in the FINAL prompt. The FINAL prompt has a 5-act story (A8) but no WEIGHT TARGET per scroll position. Without weight targets, builders produce flat or front-loaded weight distribution (Ceiling failure mode).

**Insertable text:**

```
VISUAL WEIGHT DISTRIBUTION (3-peak curve, non-negotiable):
  Peak 1 (0-15%, header + orientation): weight target 7/10
  Valley 1 (15-35%, reading zone): weight target 4/10 -- NO dark backgrounds
  Peak 2 (40-55%, CLIMAX): weight target 9/10 -- THE maximum on page
  Valley 2 (55-80%, substance zone): weight target 5-6/10
  Peak 3 (85-100%, footer + resolution): weight target 6/10

CRITICAL: Peak 2 is the CLIMAX (maximum weight), NOT the header.
CRITICAL: Header is NOT the climax. Header is the INVITATION (7/10 max).
If any scroll position has a weight HIGHER than Peak 2, the distribution is wrong.
```

**Placement:** A8 (READER JOURNEY) or new B3 rule.

---

### GAP-15-02: Pause Point Distribution Specification
**Classification: IMPORTANT**

File 15 specifies 4-5 pause points at specific scroll positions with specific visual mechanisms. The FINAL prompt has C-09 (designed moments per quartile) but no specification of WHAT creates a pause or how pause points should be distributed.

**Insertable text:**

```
PAUSE POINTS (4-5 required, distributed non-uniformly):
PP1 (~5-8% scroll): Orientation box -- chromatic accent (blue/4px) creates visual arrest
PP2 (~12-18%): First content table or feature list -- structured info arrests eye
PP3 (~42-52%): MIDPOINT CLIMAX -- dark background OR complex grid (MOST IMPORTANT)
PP4 (~65-75%): First warning/gotcha callout in coral/red (novel color = arrest)
PP5 (~82-88%): Essence callout -- font family shift (sans -> serif italic) creates arrest

CRITICAL DESIGN RULE: Save warning/gotcha callouts for Act 4.
If they appear too early, they lose arresting power when important warnings appear.
```

---

### GAP-15-03: Contrast Calendar (Background Sequence)
**Classification: IMPORTANT**

File 15 provides a "contrast calendar" with specific background sequence (dark/cream/white/breathing/dark) that signals content transitions. The FINAL prompt mentions zone backgrounds but not the SEQUENCING logic.

**Insertable text for B3 or A8:**

```
CONTRAST CALENDAR (background as content signal):
  Cream (--color-zone-sparse): breathing, transition, orientation
  White (--color-zone-dense): substantive content, reading zones
  Breathing (--color-zone-breathing): explicit pauses between major sections
  Dark (--color-text): structural framing ONLY (header, footer, ONE climax element)

DARK SECTIONS: Appear exactly 3 times -- header, midpoint climax, footer.
Never 4 or more. Three creates rhythm; four creates monotone.

ANTI-METRONOME: NEVER alternate cream-white-cream-white mechanically.
Vary the INTERVAL, not just the color. (Shorter cream zones create urgency.)
```

---

### GAP-15-04: Anti-Pattern Protocols (6 Named Anti-Patterns)
**Classification: IMPORTANT**

File 15 names 6 anti-patterns with concrete prevention protocols. The FINAL prompt has some anti-patterns in A6 (EXPERIENTIAL LAWS) but not these specific 6:

Anti-patterns missing from FINAL prompt:
- "Narrow River in a Wide Desert" (content doesn't fill container width)
- "Every Zone Looks the Same" (monotone scroll -- zones lack distinct treatment)
- "Big Header, Nothing Else" (front-loading visual weight)
- "Abandoned Scroll" (missing footer)
- "Compositional Blindness" (no desktop-specific treatments at 1440px)
- "Promised Architecture, Delivered Fragment" (section labels without content)

**Insertable text for A6 (EXPERIENTIAL LAWS):**

```
ANTI-PATTERN 6: Narrow River in Wide Desert
  -- Content fills COLUMN but not CONTAINER. At 1440px, every section must
  -- use at least ONE full-container-width element (table, code block, diagram).
  -- Test: Does negative space have SHAPE (designed) or FORMLESSNESS (leftover)?

ANTI-PATTERN 7: Promised Architecture, Delivered Fragment
  -- DO NOT create section headings without >= 2 paragraphs beneath them.
  -- Content inventory BEFORE structure design. Never design empty sections.

ANTI-PATTERN 8: Viewport Amnesia
  -- At 1440px, >= 1 section must use a layout feature requiring desktop width.
  -- Squint test at 1440px vs 768px: compositions should look DIFFERENT, not just scaled.
```

---

### GAP-15-05: Builder Before-Building Checklist (from File 15 §7)
**Classification: IMPORTANT**

File 15 provides a before-building checklist that is distinct from the FINAL prompt's B10 self-check. The FINAL prompt's self-check is post-build. File 15 provides PRE-BUILD items that should happen before any HTML is written.

**Insertable text for B7 (PROCESS):**

```
P-09. Before building: create scroll-position-to-weight-target table.
      Assign each 10% scroll increment a weight from 1-10.
      Only ONE increment gets maximum weight (9/10) = the climax.
      If header increment gets 9/10, it IS the climax -- WRONG. Reduce to 7/10.
P-10. Before building: identify the single most visually striking element.
      This is Pass 1's CLIMAX candidate. Position it at 40-55% scroll depth.
P-11. Before building: identify planned PAUSE POINTS (4-5 per §15).
      If fewer than 4 pause points identified, content inventory is insufficient.
```

---

## FILE 16: Cross-Experiment Analysis

### GAP-16-01: Three Laws of Pipeline Quality (Explicit Formalization)
**Classification: CRITICAL**

File 16 formalizes 3 laws from 4 experiments. These are HIGH-CONFIDENCE findings (consistent across all data points) but are NOT explicitly stated in the FINAL prompt as LAWS. They are implied in various places but not stated as the governing principles.

**Insertable text for A6 (EXPERIENTIAL LAWS) or new A9:**

```
THREE LAWS OF PIPELINE QUALITY (evidence: 4 experiments, zero counter-evidence):

LAW 1: SPATIAL CONFIDENCE TRUMPS EVERYTHING.
  No mechanism count, metaphor quality, or soul compliance rescues catastrophic
  spatial composition. Ceiling proved: 9/9 novelty + 8/8 soul + 14 mechanisms
  = DO NOT SHIP because 70-80% was blank. Spatial gates must be FIRST, not last.

LAW 2: MECHANISM COUNT HAS DIMINISHING RETURNS (sweet spot: 8-12).
  Phase D->Middle (7->12): quality IMPROVED. Middle->Ceiling (12->14): quality DEGRADED.
  DD-006 (6 mechanisms, 36/40) beats Ceiling (14 mechanisms, DO NOT SHIP).
  Past 14 mechanisms, spatial management overhead exceeds compositional benefit.
  Flagship target: 12-14. Hard cap: 16.

LAW 3: BINARY RULES ACHIEVE COMPLIANCE; JUDGMENT RULES ACHIEVE ZERO.
  "Sample 2-4" (judgment) -> 5-7 deployed. "1+ per category" (binary) -> 12 deployed.
  "MAY send message" -> 0 messages. "MUST send message" (binary) -> compliance.
  EVERY rule in execution spec must be binary (pass/fail) or quantified.
```

---

### GAP-16-02: Quality Prediction Model Formula
**Classification: IMPORTANT**

File 16 derives a formal quality prediction model that could serve as a mental model for builders and auditors. The FINAL prompt has the anti-scale model formula (A3) but not the quality prediction formula.

**Insertable text for A3 (or new section):**

```
QUALITY PREDICTION MODEL (from 4-experiment analysis):
Quality = f(spatial_confidence, iteration_count, content_mechanism_fit, constraint_compliance)
  spatial_confidence: sets the CEILING (catastrophic failure = quality collapse)
  iteration_count: enables DISCOVERY (finding what works through revision)
  content_mechanism_fit: determines COHERENCE (mechanisms serve content, not distract)
  constraint_compliance: sets the FLOOR (violations = immediate degradation)

Mechanism count is NOT a factor. Communication enables iteration, which IS a factor.
Richness (perceived) = mechanism_count x perceivability.
Mechanisms buried in spatial void contribute ZERO perceived richness.
```

---

### GAP-16-03: Vocabulary Generation as Richness Predictor
**Classification: IMPORTANT**

File 16 identifies "vocabulary generation" (creating new terms from metaphor: WS-01, CHECK-01, zone labels) as the PRIMARY richness predictor, above vocabulary fluency. The FINAL prompt discusses metaphor but does NOT instruct the metaphor agent to CREATE new vocabulary.

**Insertable text for B8 (TC PIPELINE) or Metaphor Agent instructions:**

```
VOCABULARY GENERATION (primary richness differentiator):
  The metaphor should generate NEW vocabulary terms, not just use existing ones.
  Ceiling example: WS-01 (workstations), CHECK-01 (checkpoints), ZONE labels.
  DD-006 example: 4-scale language (page/section/component/character).
  CD-006 example: meta-vocabulary (documentation documenting itself).

  A metaphor that generates 3+ new vocabulary terms scores higher richness
  than a metaphor with the same conceptual quality but zero new terms.
  Include vocabulary generation checklist in TC Phase 3 (Metaphor Collapse).
```

---

## FILE 17: No-Compromise Pipeline Design

### GAP-17-01: Single-Concern Pass Principle (Missing from C1)
**Classification: CRITICAL**

File 17's core philosophical insight is "DO NOT TRUST any single agent with multiple concerns. Decompose until each pass has ONE focus." The FINAL prompt has 5 passes but does NOT make the single-concern principle EXPLICIT. The Ceiling experiment failed because builders managed mechanism + metaphor simultaneously. Without this principle stated, future team leads may collapse passes.

**Insertable text for C1 header:**

```
SINGLE-CONCERN PRINCIPLE (non-negotiable pass architecture):
Each pass has EXACTLY ONE cognitive focus. This prevents the Ceiling failure mode
where builders managing two concerns lose spatial awareness.
  Pass 0: THINKING (what goes where) -- NOT building
  Pass 1: STRUCTURE (HTML/CSS skeleton) -- NOT mechanisms
  Pass 2: MECHANISMS (CSS techniques) -- NOT metaphor vocabulary
  Pass 3: METAPHOR (vocabulary, zone naming) -- NOT new mechanisms
  Pass 4: INTENTIONALITY (bookending, self-reference) -- NOT new CSS

If team-lead is tempted to collapse two passes: DO NOT. The collapse is the failure.
```

---

### GAP-17-02: Embedded Auditor Protocol (Missing from C1/C2)
**Classification: CRITICAL**

File 17 specifies an embedded auditor (Sonnet) running in parallel with Passes 1-2, taking screenshots every 100 CSS lines. The FINAL prompt's C1 has a "Embedded Auditor (Sonnet)" in Pass 1 but provides NO operational protocol for it. There are no specifications for: screenshot frequency, alert thresholds, message format, or what triggers a hard alert vs soft alert.

**Insertable text for C2 (COMMUNICATION PROTOCOL):**

```
EMBEDDED AUDITOR PROTOCOL (Passes 1-2):
  Screenshot frequency: after every 100 lines of CSS added.
  SC-01 check: run at every checkpoint.
  Void ratio check: run at every checkpoint.

HARD ALERT (SendMessage immediately):
  Container width violation (SC-01 fail)
  Void ratio > 30% at any checkpoint

SOFT ALERT (log only, include in pass summary):
  Void ratio trending upward across 2+ checkpoints
  Section density imbalance developing

SUMMARY MESSAGE (at pass completion):
  Full void ratio trend, which checkpoint triggered any alerts, recovery confirmation.
  Builder MUST acknowledge hard alerts with brief response.
  Non-acknowledgment = yellow flag for team-lead.
```

---

### GAP-17-03: Competitive Skeleton Selection Criteria
**Classification: IMPORTANT**

File 17 specifies 4 criteria for selecting between competing skeleton builds. The FINAL prompt mentions "2 parallel, team-lead picks better" but gives NO criteria for "better."

**Insertable text for C1 (Skeleton Builders A+B):**

```
SKELETON SELECTION CRITERIA (team-lead evaluates both):
1. Spatial Confidence Gate: if one fails and other passes -> passing wins automatically.
2. Squint Test Comparison: screenshots at 1440px AND 768px. Which has better
   visual mass distribution at 25% zoom?
3. Content-Container Fit: which makes content feel natural (not squeezed)?
4. Mechanism Receptivity: which provides better "hooks" for mechanism deployment
   in Pass 2? (Some skeletons create uniform containers that resist mechanisms.)

If BOTH fail spatial gate: both enter fix cycles.
If both pass: select on criteria 2-4 in order.
```

---

### GAP-17-04: Ideal Flagship 24-Metric Scorecard
**Classification: IMPORTANT**

File 17 provides a 24-metric ideal flagship specification with clear GATE vs SCORE distinction. The FINAL prompt's Appendix covers many of these but does NOT provide the explicit Gate/Score classification. This classification matters because team-lead must know which metrics block shipping vs which are optimization targets.

**Insertable text for Appendix or C3:**

```
GATE vs SCORE CLASSIFICATION (11 gates = binary blocking; 13 scores = optimize):

GATES (block shipping if failed):
  PA-05 DESIGNED (4/4), PA-05c PROPORTIONATE, Container 940-960px,
  Void budget < 15% contentless, Soul 8/8, No WOULD-NOT-SHIP findings,
  Content distribution 70%+ of scroll has content, Footer gap <= 1 viewport,
  CPL 45-80, Heading spacing >= 1.5:1, 4-scale coherence (Nav+Page+Section+Component)

SCORES (optimize, not blocking):
  Novelty 8+/9, Better-than-Ceiling (>= 3 improvements), Mechanism 12-14,
  Signal-to-silence 0.6-0.8, Restraint ratio 1.5:1, Intentionality 4+/6,
  Token 85%+, Messaging 12+ substantive, Reinforcing pairs 3+,
  Transition variation 4+ types, Silence zones 3+ documented,
  Metaphor structural 70%+
```

---

### GAP-17-05: Quality Bands Definition
**Classification: IMPORTANT**

File 17 specifies explicit quality bands (Crown Jewel / Full Flagship / Strong Flagship / MVF / Failed Flagship) with specific PA-05, Novelty, and Intentionality criteria for each. The FINAL prompt's C3 has "STAGED DOWNGRADE at 240 min" but no quality band definitions. Auditors need these to give verdicts.

**Insertable text for C3 (GATE SEQUENCE) or C5:**

```
QUALITY BANDS (used by verdict synthesizer):
  Crown Jewel:    PA-05=4/4, Novelty=9/9, Intentionality=5-6/6 -> "Belongs with DD/CD-006"
  Full Flagship:  PA-05=4/4, Novelty=8+/9, Intentionality=4+/6 -> "Tier above Ceiling"
  Strong Flagship: PA-05=3.5+/4, Novelty=7+/9, Intentionality=3+/6 -> "Flagship moments"
  MVF:            PA-05=3/4, Novelty=7+/9, Intentionality=2+/6 -> "Ceiling-plus"
  Failed Flagship: PA-05 < 3/4, any novelty -> "Ship as Ceiling after downgrade"
```

---

### GAP-17-06: Risk Register (R1-R10)
**Classification: NICE-TO-HAVE**

File 17 provides a 10-item risk register with probability, impact, and mitigation for each. The FINAL prompt's B12 (Recovery Protocols) covers failure recovery but not pre-identification of risks. A compact risk register would help team-lead prioritize attention.

---

## FILE 18: Unified Action Plan

### GAP-18-01: Pre-Build Checklist (A-E sections)
**Classification: CRITICAL**

File 18 provides a pre-build checklist with 14 binary items across 5 categories (Content Preparation, Metaphor Derivation, Spatial Budget, Prompt Assembly, Design System Enrichment). The FINAL prompt has no pre-build checklist. These items happen BEFORE any agent starts building and must be explicitly required.

**Insertable text for C3 (GATE SEQUENCE) as Gate -1:**

```
GATE -1 (Pre-Build, team-lead must complete before spawning any agent):

CONTENT:
  [ ] A1: Content inventory complete (word count, type mix, density map)
  [ ] A2: >= 4 content sections with >= 200 words each (KB-01, else STOP)
  [ ] A3: Density map plotted, peak position identified

METAPHOR:
  [ ] B2: Soul compatibility verified (no conflicts with soul channels)
  [ ] B3: Spatial obligation analyzed, cumulative cost < 10% page height
  [ ] B4: Content/Zone ratio >= 1.5 (ceiling failure: ratio = 1.0, not 1.5)
  [ ] B5: Metaphor scores >= 12/18 on 6-criterion rubric

SPATIAL BUDGET:
  [ ] C1: Void budget calculated (formula: spacing / (spacing + content) x 100 <= 30%)
  [ ] C2: Zone necessity test (3 NOs on content mass/type/intent = MERGE)
  [ ] C3: Spatial budget TABLE written into build plan (not prose)

Gate -1 FAIL = cannot proceed to Pass 0. Fix blocking items first.
```

---

### GAP-18-02: Gate 1 Spatial Confidence Specification (7-check vs 8-check)
**Classification: IMPORTANT**

File 18's Gate 1 uses 7 checks (SC-01 through SC-07) but FINAL prompt's B5 (SCALE-CHANNEL) uses SC-01 through SC-08. These are DIFFERENT numbering systems. The FINAL prompt should clarify which SC numbers belong to which system (spatial confidence vs scale-channel).

**Suggested fix:** Rename spatial confidence checks to "SP-" prefix:
```
SP-01: Container 940-960px
SP-02: Maximum contiguous void <= 2160px
SP-03: Content distribution >= 70% of scroll depth has content
SP-04: Squint test -- 3+ distinct content regions at 25% zoom
SP-05: Header <= 20% of first viewport
SP-06: >= 5 content sections with >= 200px content each
SP-07: Footer gap <= 1 viewport height
```

---

### GAP-18-03: Restraint Protocol Planner vs Builder Split
**Classification: IMPORTANT**

File 18 specifies that the TOTAL of 21 rejections is split: Planner documents >= 15 (Phase A) + Builder documents >= 6 (Phase B). The FINAL prompt's C-12 says ">= 21 considered-and-rejected mechanism placements" but does NOT specify the planner/builder split. Without the split, all 21 might be assigned to either agent and the other neglects it.

**Insertable text for C-12 or C1 (Planner section):**

```
REJECTION LOG SPLIT (mandatory ownership):
  Planner (03-build-plan.md): >= 15 rejections (Phase A -- during planning)
  Builder (in HTML comments): >= 6 rejections (Phase B -- during build)
  Total >= 21 before Gate 3.

  Format per rejection: MECHANISM NAME | PROPOSED LOCATION | REASON | WHAT PRESERVED
```

---

### GAP-18-04: Gateway 3 CP-03 Definition
**Classification: IMPORTANT**

File 18 includes Gate 3 check CP-03: "Zone boundaries perceptible without labels (invisible_boundaries <= 1)." The FINAL prompt's Gate 3 in C3 does NOT include this check.

**Insertable text for Gate 3 in C3:**

```
Gate 3 (Post-Pass-2): [existing checks] +
  CP-03: Zone boundaries perceptible WITHOUT labels. At most 1 boundary requires
         a label to be recognized. If 2+ boundaries are label-dependent, metaphor
         integration is insufficient -- re-do Pass 3.
```

---

## FILE 19: Constraint Pressure Hypothesis

### GAP-19-01: Soul Constraint Pressure Quantification
**Classification: IMPORTANT**

File 19 quantifies that KortAI prohibitions close ~51-65% of CSS design space, which is why surviving channels carry 4-5x semantic load. The FINAL prompt mentions "55-65% of CSS toolkit" (A4, Source 1) but does not explain the MECHANISM by which this creates richness.

**Insertable text for A4 (DUAL RICHNESS SOURCES):**

```
CONSTRAINT PRESSURE MECHANISM (why 55-65% closure creates richness):
  Shannon channel capacity: when 6 of 8 expressive channels are closed, the
  remaining channels have higher S/N ratio (less competition for perceptual attention).
  A 1px vs 4px border in KortAI carries MORE semantic weight than the same
  distinction in Material Design -- because border weight IS the hierarchy signal,
  not one of 8 competing signals.

  This means: every border-weight choice carries 4-5x the semantic density of
  conventional systems. Every spacing choice. Every background zone choice.
  NOT because you work harder -- because surviving channels are UNMASKED.
```

---

### GAP-19-02: Comparative Constraint Ratios (Design System Context)
**Classification: NICE-TO-HAVE**

File 19 shows KortAI at 55-65% constraint closure sits at "the sweet spot" vs competitors (Tailwind 5%, Material 20-25%, Apple HIG 30-35%, Brutalist 70-80%). This context helps builders understand why the prohibitions are enabling, not limiting.

---

## FILE 20: Attention Bandwidth Theory

### GAP-20-01: Attention Cost Per Rule Type (Rule Design Guidance)
**Classification: CRITICAL**

File 20 provides specific attention cost estimates per rule type that explain WHY binary rules outperform judgment rules. This information should guide how rules are written. The FINAL prompt HAS binary rules but does NOT provide this cost model to justify its own architecture.

**Insertable text for A6 (EXPERIENTIAL LAWS) or new architectural note:**

```
ATTENTION COST MODEL (why this prompt is structured as it is):
  Binary identity rule: ~0.5 units (pattern-match, no reasoning)
  Binary specification: ~1 unit (remember threshold, verify once)
  Formula-based check: ~2 units (compute and verify)
  Judgment rule: ~4 units (requires contextual reasoning)
  Metaphor-derived rule: ~6 units (hold metaphor + reason about expression)
  Interaction rule: ~6-8 units (hold 2+ mechanisms + reason about intersection)

The agent's attention budget per invocation: ~100 units (estimated).
The Ceiling prompt demanded ~128 units -> 28-unit deficit -> spatial proportion dropped.
14 mechanisms consumed ~53 units (42% of total budget) alone.

THIS PROMPT IS SHORT BECAUSE LENGTH IS THE ENEMY OF QUALITY.
Each rule added to prevent a known failure REDUCES budget for emergent quality.
The relationship is zero-sum.
```

---

### GAP-20-02: Attention Priority Hierarchy (Compliance Prediction)
**Classification: IMPORTANT**

File 20 provides a stable 5-tier compliance hierarchy that predicts which rules agents will drop under pressure. This is entirely absent from the FINAL prompt.

**Insertable text (useful for team-lead mental model, C section or A6):**

```
AGENT COMPLIANCE HIERARCHY (stable across Middle and Ceiling experiments):
  Priority 1 (~100%): Binary identity rules (soul prohibitions)
  Priority 2 (~80-90%): Explicit structural mandates (footer present, mechanism count)
  Priority 3 (~60-70%): Quantitative thresholds (token compliance, CPL)
  Priority 4 (~0-10%): Judgment-based qualities (spatial proportion, weight distribution)
  Priority 5 (~0%): Emergent properties (visual rhythm, gestalt coherence)

Emergent properties (Priority 5) are ALWAYS the first casualty under attention pressure.
Spatial proportion is an emergent property -> it MUST be made binary (S-02, S-12)
to move it from Priority 5 to Priority 1. That is why S-02 (content-to-void >= 60:40)
exists as a binary rule -- to prevent it from being dropped.
```

---

### GAP-20-03: Residual Theory Implication for Rule Design
**Classification: IMPORTANT**

File 20 establishes "The Residual Theory": spatial proportion was the RESIDUAL -- what was left over after mechanism work consumed attention. This means mechanism count is directly at odds with spatial quality.

**Insertable text for A6 or C3 gate notes:**

```
RESIDUAL THEORY IMPLICATION:
Mechanism attention (14 mechs): ~53 units (42% of budget).
Scale coherence (4 scales): ~36 units.
Combined: ~89 units -- leaves ~11 units for content, spatial proportion, transitions.

For Flagship (12-14 mechanisms, 2-3 scales preferred):
  Mechanism attention: ~12 x 3.5 = ~42 units.
  Scale coherence (3 scales): ~18 + 9 cross-verification = ~27 units.
  Remaining for emergent properties: ~31 units.

PREFERRED 2-3 SCALES is specifically to preserve budget for spatial proportion.
SC-01 is NON-NEGOTIABLE because without binary gates, spatial proportion is residual.
```

---

### GAP-20-04: Examples > Explanations Principle
**Classification: NICE-TO-HAVE**

File 20 shows that examples consume ~1 attention unit vs explanations consuming ~3 units. This is a prompt design principle but not directly actionable in the FINAL prompt.

---

## SUMMARY TABLE

### CRITICAL Gaps (must fix before flagship execution)

| ID | File | Gap Description | Placement |
|----|------|-----------------|-----------|
| GAP-11-01 | 11 | Crown Jewel Quality Gate (8-check) | B10 or Gate 5 |
| GAP-12-01 | 12 | Confident/Tentative tension pole + 5-row table | A2 |
| GAP-13-01 | 13 | Compositional Cluster format in build plan | C1 Planner |
| GAP-13-02 | 13 | CC-01 through CC-07 composition audit | B3 or Gate 3 |
| GAP-14-01 | 14 | Full 12-check intentionality checklist (I-01..I-12) | B3 or Gate 5 |
| GAP-14-02 | 14 | Pass 1 bookending designation requirement | C1 Planner |
| GAP-15-01 | 15 | 3-peak weight distribution curve | A8 or B3 |
| GAP-16-01 | 16 | Three Laws of Pipeline Quality (explicit formalization) | A6 |
| GAP-17-01 | 17 | Single-Concern Pass Principle (explicit) | C1 header |
| GAP-17-02 | 17 | Embedded Auditor Protocol (hard/soft alerts) | C2 |
| GAP-18-01 | 18 | Pre-Build Checklist Gate -1 (A-C required) | C3 |
| GAP-20-01 | 20 | Attention Cost Model (why prompt is short) | A6 |

### IMPORTANT Gaps (materially affect quality, fix before flagship)

| ID | File | Gap Description | Placement |
|----|------|-----------------|-----------|
| GAP-11-02 | 11 | CSS metrics table (lines/classes/tokens targets) | Appendix |
| GAP-11-03 | 11 | Semantic gestalt spacing aliases | Section E / B7 |
| GAP-11-05 | 11 | NEVER 2px border rule | B2 as U-11 |
| GAP-11-06 | 11 | Responsive degradation (3 breakpoints required) | New B-RESPONSIVE |
| GAP-12-02 | 12 | Visual delight spec (15-20%, MUST be visual) | A8 |
| GAP-12-03 | 12 | Optimal eye pattern ("Descent with Pauses") | A8 |
| GAP-12-04 | 12 | 5-second test criteria (second-by-second) | A1 |
| GAP-13-03 | 13 | Vocabulary-composition axis distinction | A5 |
| GAP-13-04 | 13 | Compositional messaging protocol | C2 |
| GAP-14-03 | 14 | Provenance threading minimum (3 levels) | C1 Pass 4 |
| GAP-14-04 | 14 | .section-meta format spec | Pass 4 instructions |
| GAP-15-02 | 15 | Pause point distribution (PP1-PP5) | A8 or B3 |
| GAP-15-03 | 15 | Contrast calendar (background sequence logic) | B3 or A8 |
| GAP-15-04 | 15 | Anti-patterns 6-8 (narrow river, viewport amnesia, etc.) | A6 |
| GAP-15-05 | 15 | Pre-build builder checklist (P-09 through P-11) | B7 |
| GAP-16-02 | 16 | Quality prediction model formula | A3 |
| GAP-16-03 | 16 | Vocabulary generation as richness target | B8 |
| GAP-17-03 | 17 | Skeleton selection criteria (4 criteria) | C1 |
| GAP-17-04 | 17 | Gate vs Score classification (11 gates, 13 scores) | Appendix |
| GAP-17-05 | 17 | Quality bands (Crown Jewel through Failed Flagship) | C5 |
| GAP-18-02 | 18 | SC vs SP numbering conflict | C3 fix |
| GAP-18-03 | 18 | Restraint log planner/builder split (15+6) | C-12 |
| GAP-18-04 | 18 | CP-03 zone boundary legibility gate | Gate 3 |
| GAP-19-01 | 19 | Constraint pressure mechanism (why closure creates richness) | A4 |
| GAP-20-02 | 20 | Compliance hierarchy (Priority 1-5) | A6 |
| GAP-20-03 | 20 | Residual theory (mechanism count vs spatial quality) | A6 or C3 |

### NICE-TO-HAVE Gaps (improve clarity but not blocking)

| ID | File | Gap Description |
|----|------|-----------------|
| GAP-11-04 | 11 | rgba() progressive opacity operational guidance |
| GAP-11-04b | 11 | Golden ratio grid as hero layout option |
| GAP-14-05 | 14 | Pass 3 workload estimate (26-48 min, 93-168 lines) |
| GAP-16-03 | 16 | Vocabulary generation as richness predictor |
| GAP-17-06 | 17 | Full risk register (R1-R10) |
| GAP-19-02 | 19 | Comparative constraint ratios (design system context) |
| GAP-20-04 | 20 | Examples > Explanations principle |

---

## HIGHEST-PRIORITY INSERTIONS (top 5 by impact)

1. **GAP-15-01 (Weight Distribution Curve)** -- Directly addresses Ceiling failure mode (front-loaded weight). Without this, any new experiment risks the same catastrophe. Single most important spatial gap.

2. **GAP-13-01 (Compositional Cluster Format)** -- Addresses "professionally stiff" Middle failure. Compositional clusters force the planner to think about mechanism RELATIONSHIPS, not deployment. Single most important quality gap.

3. **GAP-14-01 (12-Check Intentionality Checklist)** -- 10 of 12 items are absent from FINAL prompt. Without this, Pass 4 has no verification criteria. The 12/12 binary is the difference between CD-006 (39/40) and Ceiling (0/6 intentionality).

4. **GAP-17-02 (Embedded Auditor Protocol)** -- The embedded auditor is mentioned in C1 but has no operational protocol. Without the hard alert mechanism, it cannot prevent the Ceiling void in real time.

5. **GAP-18-01 (Pre-Build Checklist Gate -1)** -- Catches metaphor spatial obligation (B3, B4) and content volume (A2) BEFORE any building begins. The Ceiling experiment never calculated its void budget upfront. This gate would have prevented that.

---

**END SCAN-J**

**Total gaps identified:** 43 (12 CRITICAL, 25 IMPORTANT, 6 NICE-TO-HAVE)
**Files processed:** 10 (11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
**Prompt sections with most gaps:** A6, A8, B3, C1, C2, C3
