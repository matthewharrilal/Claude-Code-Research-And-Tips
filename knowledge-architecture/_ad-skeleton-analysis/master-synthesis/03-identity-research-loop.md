# 03: IDENTITY-RESEARCH BIDIRECTIONAL LOOP
## The Circular Refinement Architecture Missing from the AD Skeleton

**Synthesized from:**
- ad-skeleton-identity.md (694 lines) -- Identity Traverser's full analysis
- ad-skeleton-research.md (654 lines) -- Research Strategist's full analysis
- research-loop-gaps.md (676 lines) -- Research-Loop Analyst + Auditor
- identity-cycle-gaps.md (748 lines) -- Identity-Cycle Analyst + Auditor

**Purpose:** Define the identity-research loop as a STRUCTURE first (states, transitions, triggers), then procedures for each transition. This section is execution-ready.

---

## TABLE OF CONTENTS

1. The Loop as a State Machine (Structure)
2. Identity GUIDES Research: The Lens Function
3. Research VALIDATES BACK Against Paradigms: The Challenge Protocol
4. Findings REFINE Identity: The Circular Refinement Mechanism
5. Identity-Constraint Map for Research Filtering
6. Decision Tree for Identity-Challenging Findings
7. Paradigm Fit Test: The 4-Level System
8. R-2 Structural Integration
9. Static vs Evolving Research Guidance
10. Reconciled Protocol: 4-Branch + CLASS A/B/C Unified

---

## 1. THE LOOP AS A STATE MACHINE

### 1.1 States

The identity-research loop has 7 discrete states. At any point in the AD pipeline, the system is in exactly one of these states.

```
STATE 1: IDENTITY-LOADED
  Description: Accumulated identity v1.1 has been consumed by the active agent.
  Entry condition: Agent reads ACCUMULATED-IDENTITY-v1.1.md (577 lines).
  Artifacts present: v1.1, soul checklist, ANTI-PHYSICAL categories.
  Artifacts absent: Research packages, EXT-AXIS-* findings, identity deltas.

STATE 2: LENS-ACTIVE
  Description: Identity has been converted from static document to active
  research filter. The identity-constraint map and identity lens document
  are generated and available.
  Entry condition: Convention Agent or R-4 Evaluator produces the
  identity-constraint map and identity lens.
  Artifacts present: Identity-constraint map, identity lens (DO/DO NOT search),
  tension table for EXT-AXIS-* queries.
  Artifacts absent: Evaluated research findings.

STATE 3: RESEARCH-FILTERED
  Description: R-4 (192), R-2 (25 applicable), and EXT-AXIS-* findings have
  been evaluated through the lens. Each finding is classified as
  PASS / FAIL / CHALLENGE.
  Entry condition: R-4 Evaluator, R-2 Re-Mapper, and EXT-AXIS-* researchers
  complete their evaluation passes.
  Artifacts present: R-4-AD-EVALUATION.md, r2-ad-mapping.md, 6 research packages,
  all findings classified.
  Artifacts absent: Builder output, identity deltas.

STATE 4: BUILD-IN-PROGRESS
  Description: Builders are applying research findings to AD explorations.
  Findings are being cited in HTML. New discoveries and challenges are emerging.
  Entry condition: Builder receives research package + soul template +
  convention spec.
  Artifacts present: AD-NNN.html files in progress, research citations.
  Artifacts absent: Identity deltas (not yet written).

STATE 5: FINDINGS-PRODUCED
  Description: A build wave has completed. Builders have reported discoveries,
  challenges, and research application records. Findings exist but have not
  yet been evaluated against the identity paradigm.
  Entry condition: All builders in the wave mark their AD as COMPLETE.
  Artifacts present: Builder reports with DISCOVERIES and CHALLENGES sections,
  research application records, HTML with citations.
  Artifacts absent: Identity delta, paradigm fit evaluation of new findings.

STATE 6: IDENTITY-TESTED
  Description: New findings have been evaluated against the accumulated
  paradigm using the paradigm fit test and challenge protocol. Resolutions
  exist for each challenge finding.
  Entry condition: Lead applies paradigm fit test and challenge protocol
  to all wave findings.
  Artifacts present: Challenge resolutions, paradigm fit results,
  identity-delta-ad-wave{N}.md.
  Artifacts absent: Updated research guidance for next wave.

STATE 7: GUIDANCE-EVOLVED
  Description: The identity delta has been written, the cumulative checkpoint
  updated, and the research guidance revised for the next wave. The lens
  has evolved.
  Entry condition: Lead writes identity delta with REVISED RESEARCH GUIDANCE
  section and CUMULATIVE IDENTITY CHECKPOINT.
  Artifacts present: Updated checkpoint, revised lens for next wave,
  delta-derived queries for next wave's researchers.
  Exit: Transition back to STATE 2 (LENS-ACTIVE) with evolved lens, or
  to STATE 8 (SYNTHESIS) if final wave.

STATE 8: SYNTHESIS (Terminal)
  Description: All waves complete. Identity Scribe produces v2 from v1.1 +
  all deltas + all challenge resolutions + all paradigm fit results.
  Entry condition: All 6 ADs built, audited, fixed.
  Artifacts present: ACCUMULATED-IDENTITY-v2.md, AD-SYNTHESIS.md,
  AD-outbound-findings.md.
```

### 1.2 Transitions

```
T1: IDENTITY-LOADED -> LENS-ACTIVE
  Trigger: Wave 0 begins. Convention Agent reads full v1.1.
  Action: Generate identity-constraint map (10 binary gates from v1.1),
  identity lens document (DO/DO NOT search lists), and tension table
  (5 identity tensions for EXT-AXIS-* query generation).
  Agent: Convention Agent (full v1.1 dosage, 577 lines).
  Gate: Identity lens document exists with >= 5 DO items and >= 5 DO NOT items.

T2: LENS-ACTIVE -> RESEARCH-FILTERED
  Trigger: Wave 0 researchers begin evaluation.
  Action: R-4 Evaluator applies identity-constraint map to all 192 findings.
  R-2 Re-Mapper re-maps 25 applicable findings from OD targets to AD targets
  with identity awareness. EXT-AXIS-* researchers generate tension-derived
  queries and produce 40-52 bespoke findings.
  Agents: R-4 Evaluator (60-line identity dosage), R-2 Re-Mapper (50-line),
  6 EXT-AXIS-* researchers (60-line each).
  Gate: >= 150 R-4 findings classified. >= 18 R-2 findings mapped to AD targets.
  >= 5 EXT-AXIS-* per AD, all SOUL PASS. Each finding classified as
  PASS / FAIL / CHALLENGE.

T3: RESEARCH-FILTERED -> BUILD-IN-PROGRESS
  Trigger: Research Gate compiled and passed.
  Action: Gate Compiler assembles per-AD research packages with R-4 applicable
  subset, R-2 findings EMBEDDED (not referenced), EXT-AXIS-* findings,
  R-2/R-4 synergies identified. Builders receive packages.
  Agent: Gate Compiler (1 agent), then builders (N agents).
  Gate: AD-RESEARCH-GATE.md exists with all findings tracked. Each research
  package contains >= 4 R-2 findings and >= 15 R-4 citations for AD-001/002/003/004,
  >= 20 for AD-005, >= 25 for AD-006.

T4: BUILD-IN-PROGRESS -> FINDINGS-PRODUCED
  Trigger: All builders in the current wave mark their AD COMPLETE.
  Action: Builders write DISCOVERIES and CHALLENGES sections in their reports.
  Research application records are finalized in HTML headers.
  Agent: Builders (write reports before returning).
  Gate: Each builder report contains DISCOVERIES section (>= 1 entry) and
  CHALLENGES section (0+ entries, but section MUST exist even if empty).

T5: FINDINGS-PRODUCED -> IDENTITY-TESTED
  Trigger: Lead begins delta writing.
  Action: Lead reads all builder reports. For each CHALLENGE finding, applies
  the decision tree (Section 6 below). For each DISCOVERY, applies paradigm
  fit test (Section 7 below). Classifies each new finding.
  Agent: Lead (full judgment authority for CLASS B challenges).
  Gate: Every CHALLENGE finding has a resolution (ADAPTED / REJECTED / ESCALATED
  / TEST-DESIGNED). Every DISCOVERY has a paradigm fit classification
  (PARADIGM-CONFIRMING / PARADIGM-EXTENDING / PARADIGM-CHALLENGING /
  PARADIGM-BREAKING).

T6: IDENTITY-TESTED -> GUIDANCE-EVOLVED
  Trigger: Lead has classified all findings.
  Action: Lead writes identity-delta-ad-wave{N}.md containing:
  - New discoveries with paradigm fit classification
  - Challenge resolutions with rationale
  - >= 1 forward question following the confirm -> stress-test -> extend evolution
  - REVISED RESEARCH GUIDANCE section (2-3 specific updates to search directives)
  - References >= 1 EXT-AXIS-* finding by ID (proving researcher work connected
    to builder work)
  Lead also writes cumulative identity checkpoint (50-100 lines).
  Agent: Lead.
  Gate: Delta contains all required sections. Checkpoint exists. Forward question
  matches wave position (confirming in Wave 1A, stress-testing in Wave 1B,
  extending in Wave 1C).

T7: GUIDANCE-EVOLVED -> LENS-ACTIVE (Loop)
  Trigger: Next wave begins.
  Action: Next wave's researchers read the cumulative checkpoint (not v1.1 +
  all deltas). They read the REVISED RESEARCH GUIDANCE section from the
  latest delta. They generate DELTA-DERIVED QUERIES that could not have been
  written without reading the latest delta. Research packages for the next
  wave incorporate evolved guidance.
  Agent: Next wave researchers.
  Gate: Each research package for the next wave contains a "DELTA-DERIVED
  QUERIES" section with >= 1 query provably derived from the latest delta.

T8: GUIDANCE-EVOLVED -> SYNTHESIS (Terminal)
  Trigger: Final wave complete. All 6 ADs built, audited, fixed.
  Action: Identity Scribe produces ACCUMULATED-IDENTITY-v2.md using the
  determination protocol (Section 4 below).
  Agent: Identity Scribe (full v1.1 + all deltas + all AD-F findings).
  Gate: v2 contains >= 3 sentences referencing specific AD wave discoveries.
  v2 is a standalone document (any agent reading ONLY v2 can make consistent
  decisions). v2 is 700-800 lines.
```

### 1.3 State Machine Diagram

```
                     ┌──────────────────────────────────────────────────┐
                     │                                                  │
                     v                                                  │
  ┌──────────────────────────┐    T1     ┌──────────────────┐          │
  │  STATE 1                 │ ────────> │  STATE 2         │          │
  │  IDENTITY-LOADED         │           │  LENS-ACTIVE     │ <──┐     │
  │  (v1.1 consumed)         │           │  (constraint map │    │     │
  └──────────────────────────┘           │   + lens + tension│    │     │
                                         │   table generated)│    │     │
                                         └───────┬──────────┘    │     │
                                                 │ T2            │     │
                                                 v               │ T7  │
                                         ┌───────────────────┐   │     │
                                         │  STATE 3          │   │     │
                                         │  RESEARCH-FILTERED│   │     │
                                         │  (PASS/FAIL/      │   │     │
                                         │   CHALLENGE)      │   │     │
                                         └───────┬───────────┘   │     │
                                                 │ T3            │     │
                                                 v               │     │
                                         ┌───────────────────┐   │     │
                                         │  STATE 4          │   │     │
                                         │  BUILD-IN-PROGRESS│   │     │
                                         └───────┬───────────┘   │     │
                                                 │ T4            │     │
                                                 v               │     │
                                         ┌───────────────────┐   │     │
                                         │  STATE 5          │   │     │
                                         │  FINDINGS-PRODUCED│   │     │
                                         └───────┬───────────┘   │     │
                                                 │ T5            │     │
                                                 v               │     │
                                         ┌───────────────────┐   │     │
                                         │  STATE 6          │   │     │
                                         │  IDENTITY-TESTED  │   │     │
                                         └───────┬───────────┘   │     │
                                                 │ T6            │     │
                                                 v               │     │
                                         ┌───────────────────┐   │     │
                                         │  STATE 7          │───┘     │
                                         │  GUIDANCE-EVOLVED │         │
                                         │                   │─────────┘
                                         └───────┬───────────┘   T8
                                                 │ (final wave)
                                                 v
                                         ┌───────────────────┐
                                         │  STATE 8          │
                                         │  SYNTHESIS         │
                                         │  (v2 produced)    │
                                         └───────────────────┘
```

### 1.4 Loop Frequency

The STATE 2 -> STATE 7 cycle executes once per build wave. For AD's 3-wave structure (Wave 1A, 1B, 1C), the loop executes 3 times. Each iteration MUST evolve the lens -- if Wave 1B's research guidance is identical to Wave 1A's, the loop has broken.

---

## 2. IDENTITY GUIDES RESEARCH: THE LENS FUNCTION

### 2.1 The Distinction: Lens vs Filter

The skeleton conflates two fundamentally different ways identity constrains research. Both analysts identified this gap independently.

**FILTER (already in skeleton):** Identity constrains what gets APPLIED. The 5-gate soul test is a filter. A finding either passes or fails. This is binary and well-specified.

**LENS (missing from skeleton):** Identity constrains what gets EXPLORED. The accumulated identity should shape the search queries researchers generate. This is generative -- it determines what you even look for.

The filter is a POST-HOC mechanism (evaluate after finding). The lens is a PRE-HOC mechanism (direct before searching). The skeleton has the filter. It needs the lens.

**Source:** Research-loop-analyst Section 3 (lines 188-220), confirmed by research-loop-auditor as "the analysis's most important contribution."

### 2.2 The Identity Lens Document

Generated during T1 (IDENTITY-LOADED -> LENS-ACTIVE) by the Convention Agent from full v1.1 traversal.

```
IDENTITY LENS FOR AD RESEARCHERS
(Derived from ACCUMULATED-IDENTITY-v1.1, updated per wave via delta)

VERSION: 1.0 (base, from v1.1)
VALID UNTIL: First identity delta written (then update per Section 9)

DO SEARCH FOR:
- Flat 2D visual signals for axis hierarchy (border weight, typography scale, spacing)
- Axis patterns that preserve editorial calm (minimal decoration, typography-dominant)
- Grid/layout techniques that work WITHOUT shadows, rounded corners, or animation
- Techniques validated in magazine/editorial contexts (the identity is editorial)
- Multi-scale self-similar axis patterns (DD-F-006 is mandatory at 5 scales)
- Axis patterns where the reading path is signaled by typographic weight, not visual decoration
- Contemporary (2026) editorial trends that align with bold minimalism (EXT-CONV-011 precedent)
- Techniques that achieve depth metaphors through flat 2D encoding (border-weight-as-strata precedent)

DO NOT SEARCH FOR (will almost certainly SOUL FAIL):
- Parallax scrolling for axis transitions
- Card shadows or elevation for axis zone hierarchy
- Animated axis transitions (hover lift, scale transform, 3D perspective)
- Gradient-based axis zone differentiation
- Rounded container shapes for axis zones
- Color-coding systems using traffic-light semantics (red/amber/green)
- Opacity-based transitions between axis zones
- Z-depth layering for spatial hierarchy
- Blurred backgrounds for focal emphasis
- Decorative borders (2px is BANNED per 3-category system)
```

### 2.3 Identity-Weighted Priority Assessment

The R-4 Evaluator does NOT evaluate all 192 findings with equal weight. After soul-testing each finding, apply identity-weighted priority modifiers:

| Weight Factor | Priority Modifier | Source |
|---------------|-------------------|--------|
| Multi-scale (fractal) axis pattern | +2 priority levels | DD-F-006 |
| Aligns with natural axis preference per OD-F-FL-001 | +1 priority level | OD-F-FL-001 |
| Demonstrates org=density=axis transitive chain | +2 priority levels | OD-F-005 + DD-F-012 |
| Involves depth/shadow/animation/parallax | -3 priority levels (likely SOUL FAIL) | ANTI-PHYSICAL identity |
| Demonstrates compound pattern combination | +1 priority level | OD-F-008 |
| Validated by 2026 editorial minimalism trends | +1 priority level | EXT-CONV-011 |
| Fights density pattern serving | -2 priority levels | DD-F-010 |

The resulting priority (HIGH/MEDIUM/LOW) determines order of application by builders. Builders apply HIGH-priority findings first. If context budget is exhausted, LOW-priority findings can be deferred without gate FAIL.

**Source:** Research-loop-analyst Section 1 (lines 39-73). Auditor confirmed: "agents apply +2/-3 levels mechanically" -- fully binary.

### 2.4 Tension-Driven Query Generation for EXT-AXIS-*

The highest-value EXT-AXIS-* queries arise from identity TENSIONS -- points where two accumulated principles create productive friction.

| Tension ID | Principle A | Principle B | Query Template |
|-----------|------------|------------|----------------|
| TENSION-1: FLAT DEPTH | ANTI-PHYSICAL (no z-depth) | Axis patterns inherently imply spatial hierarchy | "How do [axis type] patterns signal hierarchy through flat 2D means?" |
| TENSION-2: CALM vs ENERGY | Unhurried Editor (restraint) | Axis choreography needs visual movement | "How do editorial/magazine layouts create [axis movement] without animation?" |
| TENSION-3: FRACTAL vs VARIATION | DD-F-006 (same rhythm at all scales) | Different axis types need different visual structures | "Can [axis pattern] maintain fractal self-similarity while [varying appropriately]?" |
| TENSION-4: RIGIDITY vs NOVELTY | 5 soul pieces are immutable | AD explores genuinely new territory | "What [axis technique] is novel AND compatible with sharp edges + flat design?" |
| TENSION-5: CHAIN vs INDEPENDENCE | OD-F-005 (org=density) | Is axis a 3rd perspective or independent? | "Does [axis pattern] serve [density-org pairing] or introduce a new dimension?" |

REQUIREMENT: Each EXT-AXIS-* researcher must generate at least 1 query from the tension table (binary gate, verifiable by checking query derivation in research package).

**Source:** Research-loop-analyst Section 5 (lines 297-332). The tensions are real: each maps to an actual pair of v1.1 statements verified by identity-cycle-auditor (Section 1, all 10 claims verified).

### 2.5 Identity Dosage Per Role

Different agent roles need different slices of identity. Full v1.1 is 577 lines -- context budget makes this impossible for most agents.

| Role | Identity Lines | What to Include | What to Exclude |
|------|---------------|-----------------|-----------------|
| Convention Agent | 577 (full v1.1) | Everything -- sole entity absorbing full identity | Nothing |
| R-4 Evaluator | ~60 | 10-line soul checklist + ANTI-PHYSICAL categories (6) + 3-category border system + identity-constraint map | Full OD findings, process patterns, open questions |
| R-2 Re-Mapper | ~50 | 10-line soul checklist + OD-to-AD pairing table + transitive chain explanation | Full fractal detail, process patterns |
| EXT-AXIS-* Researcher | ~60 | 10-line soul checklist + tension table (5 tensions) + chain traversal reference | Full v1.1, other AD research packages |
| Builder | ~200 | Soul template (embeds all tokens) + 10-line checklist + research package + identity delta from prior waves + 6 binary gates | Full v1.1, full R-4 analysis, other AD packages |
| Visual Auditor | ~80 | 10-line soul checklist + ANTI-PHYSICAL categories + convention spec reference | Full v1.1, research packages, builder justifications |
| Structural Auditor | ~30 | Binary gates ONLY: border-radius, box-shadow, filter, opacity, border widths, font families | Everything else |
| Fresh-Eyes | ~500 | Full v1.1 MINUS convention spec values, builder justifications, prior audit findings | Convention spec, builder CSS comments |
| Identity Scribe | 577 + AD output | Full v1.1 + all AD-F findings + AD-SYNTHESIS + identity deltas | Research packages, audit scratchpad |

**WARNING (from identity-cycle-auditor, Missed Gap C):** The Convention Agent is a SINGLE POINT OF FAILURE. It is the only entity that absorbs the full 577-line identity. If it misrepresents identity in AD-CONVENTION-SPEC.md, every downstream builder inherits the misrepresentation. MITIGATION: A second agent (the R-4 Evaluator) independently reads the identity-constraint map and can flag discrepancies with the Convention Agent's output.

**Source:** Identity-cycle-analyst Section 2 (GAP-IC-02), auditor verified dosage matrix as sound, flagged Convention Agent bottleneck as missed gap.

---

## 3. RESEARCH VALIDATES BACK AGAINST PARADIGMS: THE CHALLENGE PROTOCOL

### 3.1 The Three Classes of Research-Identity Interaction

When a builder or researcher discovers something in the AD research that relates to accumulated identity, the finding falls into exactly one of three classes:

```
CLASS A: PARADIGM-CONFIRMING
  Definition: The finding is consistent with and strengthens the accumulated identity.
  Example: Z-pattern works as flat 2D axis without depth cues (confirms ANTI-PHYSICAL).
  Action: Apply the finding. Cite the identity statement it confirms.
  Identity impact: Strengthens existing beliefs. No delta change needed beyond logging.

CLASS B: PARADIGM-EXTENDING
  Definition: The finding is consistent with identity but adds something new.
  It doesn't contradict identity -- it reveals an implication not previously seen.
  Example: Axis transitions require explicit typographic signals (extends editorial identity).
  Action: Apply the finding. Document as potential identity extension in DISCOVERIES.
  Identity impact: Candidate for identity delta. May become part of v2.

CLASS C: PARADIGM-CHALLENGING
  Definition: The finding appears to contradict one or more identity statements.
  Example: Spiral axis patterns require perceived depth to function (challenges ANTI-PHYSICAL).
  Action: DO NOT apply directly. Invoke the decision tree (Section 6 below).
  Identity impact: May refine, constrain, or rarely overturn identity claims.
```

**Source:** Research-loop-analyst Section 2 (lines 104-137), identity-cycle-analyst Section 3 (GAP-IC-03). Both analysts independently identified the need for challenge classification; the research-loop-analyst used CLASS A/B/C labels while the identity-cycle-analyst used a 4-branch decision tree. Section 10 below reconciles them.

### 3.2 The Validation-Back Channel

Research findings do not just EXPAND identity (accumulation). They TEST identity (validation). The OD evidence proves this:

| Wave | Identity Hypothesis Tested | Research Result | Identity Evolution |
|------|---------------------------|-----------------|-------------------|
| OD Wave 1 | "ANTI-PHYSICAL extends to OD-003/005" | 7/7 additional SOUL FAILs (13/13 cumulative) | ANTI-PHYSICAL strengthened |
| OD Wave 2 | "Does geological metaphor imply physical depth?" | Posed as stress-test question | Opened dialectical investigation |
| OD Wave 3 | "Geological depth via what mechanism?" | Border weight gradient achieves geological encoding through flat 2D | ANTI-PHYSICAL refined: metaphors CAN imply depth if CSS encoding is 2D |

This is a dialectical spiral, not a linear accumulation. Each wave tests at a higher level of abstraction:
- Wave 1: Tests EXTENSION of existing pattern (confirming)
- Wave 2: Tests LIMIT of pattern (stress-testing)
- Wave 3: Tests MECHANISM of pattern (extending)

**Source:** Research-loop-analyst Section 8 (lines 443-486), confirmed by auditor as "even cleaner than their description suggests." Auditor noted the spiral characterization: "each iteration operates at a higher level of abstraction" -- the cycle doesn't return to the same point; it ascends.

### 3.3 Binary Enforcement of the Validation-Back Channel

The OD loop worked accidentally (good Lead questions). R-2's 0% proves loops can break silently. Four binary rules detect loop breakage:

```
FEEDBACK LOOP BINARY ENFORCEMENT

RULE 1: Each identity delta MUST reference >= 1 specific finding from
THIS wave's research packages by EXT-AXIS-* ID. If the delta only
references builder discoveries (not research), the researcher's work
was disconnected from the builder's work. GATE: FAIL.

RULE 2: Each Wave N+1 researcher MUST include a section in their research
package titled "DELTA-DERIVED QUERIES" containing >= 1 query that
COULD NOT HAVE BEEN WRITTEN without reading identity-delta-wave{N}.
If this section is missing or contains queries indistinguishable from
Wave 1 queries, the feedback loop is broken. GATE: FAIL.

RULE 3: Each Wave N+1 builder MUST cite >= 1 finding from Wave N's
identity delta in their HTML comments. If no delta citation appears,
the builder ignored the evolved identity. GATE: FAIL.

RULE 4: The final ACCUMULATED-IDENTITY v2 MUST contain >= 3 sentences
that reference specific AD wave discoveries (not just OD findings carried
forward). If v2 is indistinguishable from v1.1 with AD findings appended
at the end, the generative loop did not actually evolve the identity.
GATE: FAIL.
```

**Source:** Research-loop-analyst Section 9 (lines 520-545). Auditor graded these as "Excellent: exactly what the skeleton needs" -- all 4 rules verifiable by automated gate checks.

---

## 4. FINDINGS REFINE IDENTITY: THE CIRCULAR REFINEMENT MECHANISM

### 4.1 The Identity Delta Template (Extended)

The skeleton's Section 4.6 specifies 10-15 line deltas with forward questions. This section extends the template to include challenge resolutions, paradigm fit classifications, and revised research guidance.

```
# IDENTITY DELTA: AD Wave {N}
## Written by: Lead
## Date: [date]

### NEW DISCOVERIES (CLASS A + B findings)
| Finding | Class | Paradigm Fit | Impact on Identity |
|---------|-------|--------------|-------------------|
| [finding] | A (confirming) | Strengthens [identity statement] | None needed |
| [finding] | B (extending) | Adds [new implication] | Candidate for v2 |

### CHALLENGES RESOLVED (CLASS C findings)
| Challenge | Identity Statement Challenged | Resolution | Rationale |
|-----------|------------------------------|------------|-----------|
| [finding] | [which v1.1 statement] | ADAPTED / REJECTED / TEST-DESIGNED | [why] |

### IDENTITY STATE CHANGES
[What changed in the cumulative identity understanding this wave]

### REVISED RESEARCH GUIDANCE FOR WAVE {N+1}
| Wave N Discovery | Wave N+1 Research Directive |
|-----------------|---------------------------|
| [specific finding] | "Search specifically for [X]. Previous guidance said [Y]; now search for [Z] instead." |

### FORWARD QUESTION(S)
[>= 1 question following the evolution pattern:]
- Wave 1A: CONFIRMING ("Does [identity principle] hold in AD-001/002 context?")
- Wave 1B: STRESS-TESTING ("Given [confirmed], does it hold in [harder case]?")
- Wave 1C: EXTENDING ("Given [stress-tested], what does this imply for CD?")

[If the question type doesn't match the wave position, explain why.]

### EXT-AXIS-* REFERENCE
[>= 1 specific EXT-AXIS-* finding ID from this wave's research, proving
researcher work connected to builder work. RULE 1 enforcement.]
```

### 4.2 The Cumulative Identity Checkpoint

After each wave, the Lead writes a CUMULATIVE identity checkpoint (50-100 lines) that captures the CURRENT state of all identity beliefs. This replaces reading v1.1 (577 lines) + all deltas after compaction.

```
# IDENTITY CHECKPOINT: AD Wave {N}
## Written by: Lead
## Date: [date]

### SOUL PIECES: [5 or 6] confirmed
[1-line summary per soul piece, status: CONFIRMED / CHALLENGED / EXTENDED]

### ANTI-PHYSICAL: [N]/[N] SOUL FAILs across [stages]
[Updated count, any new categories from AD axis techniques]

### TRANSITIVE CHAIN STATUS
[CONFIRMED: N/6 ADs / CHALLENGED: M/6 ADs / UNTESTED: K/6 ADs]
[Current belief: org IS density IS axis / org IS density, axis SERVES / axis independent]

### EMPIRICAL FINDINGS STATUS
| Finding | Status | AD Evidence |
|---------|--------|-------------|
| OD-F-005 (org=density) | [CONFIRMED/CHALLENGED/UNTESTED] | [evidence] |
| DD-F-006 (fractal 5 scales) | [CONFIRMED/CHALLENGED/UNTESTED] | [evidence] |
| DD-F-012 (density implies axis) | [CONFIRMED/CHALLENGED/UNTESTED] | [evidence] |

### OPEN QUESTIONS
[v1.1's 6 questions: each marked RESOLVED/OPEN/PARTIALLY RESOLVED with evidence]
[New questions from this wave]

### ACTIVE CONSTRAINTS FOR NEXT WAVE
[5-10 line bullet list of constraints next wave's builders must respect]

### RESEARCH GUIDANCE EVOLUTION HISTORY
[1-line per wave: what changed in the research lens]
```

This checkpoint is the PRIMARY read after compaction. The deltas remain as an append-only audit trail for error checking.

**Source:** Identity-cycle-analyst Section 7 (GAP-IC-07), auditor confirmed delta-only recovery is insufficient and cumulative checkpoint is the right trade-off. Auditor added: keep deltas AS WELL as checkpoints -- deltas provide error-correction mechanism if checkpoint contains mistakes.

### 4.3 Identity Elevation Criteria (What Enters v2)

Not every AD-F finding belongs in the identity document. The Identity Scribe uses these criteria:

```
IDENTITY ELEVATION CRITERIA

For an AD-F finding to be included in ACCUMULATED-IDENTITY-v2:

1. CROSS-AD VALIDATION: The finding appears in >= 4 of 6 AD explorations
   [BINARY: count >= 4? YES/NO]

2. IDENTITY IMPACT: The finding changes how you THINK about the system,
   not just how you BUILD within it
   [JUDGMENT: Lead determines. This is unavoidable -- "thinking" cannot be
   binarized. Accepted as Lead-only protocol.]

3. NON-OBVIOUS: The finding was not predicted by v1.1
   [SEMI-BINARY: Can cite the specific v1.1 passage that WOULD have
   predicted it? YES = obvious, NO = non-obvious]

4. IRREVERSIBILITY: Once discovered, it cannot be unseen
   [JUDGMENT: Same criterion as soul pieces. Lead determines.]

CLASSIFICATION:
  ALL 4 met: Include in IDENTITY STATEMENT (Section 8 of v2)
  2-3 met:   Include in WHAT WE'VE LEARNED table (Section 2 of v2)
  0-1 met:   Include in AD-outbound-findings.md only (not in identity)
```

**Source:** Identity-cycle-analyst Section 5, Decision 2 (lines 346-361). Auditor flagged criteria 2 and 4 as judgment calls but acknowledged they cannot be binarized. These are explicitly marked as Lead-only protocols.

### 4.4 v2 Determination Protocol

The Identity Scribe needs criteria for high-stakes decisions:

**Decision 1: Does axis add to or replace the identity statement?**

```
IF all 6 ADs confirm axis serves unified org-density phenomenon
  -> EXTEND: "Organization IS density IS axis"
ELSE IF 4-5 ADs confirm, 1-2 show independence
  -> NUANCE: "Organization IS density. Axis SERVES org-density for
     [patterns] but adds independent information for [patterns]"
ELSE IF 3 or fewer confirm
  -> CHALLENGE: "The transitive chain holds for density -> org but axis
     introduces a genuinely new dimension"
```

**Decision 2: How does the Scribe handle contradictions?**

```
IF contradiction is with a soul piece -> Soul piece wins. Finding is
   documented as "CONSTRAINED BY Soul Piece #N"
IF contradiction is with an empirical finding (OD-F-005) -> Document BOTH
   the original finding and the AD counterevidence. DO NOT resolve in v2.
   Flag for CD to investigate further.
IF contradiction is with a process pattern -> AD finding wins if it produced
   measurably better outcomes (defined as: score >= 32 AND zero soul
   violations AND lower audit finding count than the alternative approach)
```

**Source:** Identity-cycle-analyst Section 5 (GAP-IC-05), all three decisions. Auditor verified the structure as sound but flagged the 4-5/<=3 thresholds as arbitrary -- retained because they provide binary cutoffs even if the exact numbers are debatable.

---

## 5. IDENTITY-CONSTRAINT MAP FOR RESEARCH FILTERING

### 5.1 The Map

Every R-4 finding, R-2 finding, and EXT-AXIS-* finding passes through this map during evaluation. The map converts v1.1's 577 lines into 10 binary gates that an evaluator can apply mechanically.

| # | Identity Statement (v1.1 Source) | Research Constraint for AD | Binary Gate Question |
|---|----------------------------------|---------------------------|---------------------|
| 1 | "Organization IS Density" (OD-F-005, Section 2) | Research treating axis as independent from org-density must be flagged as CHALLENGE | Does this R-4 finding respect the org-density-axis triple constraint? YES/NO |
| 2 | "Fractal self-similarity at 5 scales" (DD-F-006, Section 2) | Axis pattern must demonstrate scale invariance at >= 3 of 5 scales (navigation, page, section, component, character) | Does this axis pattern exhibit fractal self-similarity at >= 3 scales? YES/NO |
| 3 | "The identity is ANTI-PHYSICAL" (Section 1, 20/20 FAILs) | Any finding requiring shadows, z-animation, rounded shapes, gradients-as-light, parallax, perceived depth = automatic SOUL FAIL | Does this technique imply 3D space? YES/NO |
| 4 | "Shadows Lie About Depth" (Soul Piece #4, Section 1) | Spiral research (AD-004) highest risk. No focal point elevation, depth-of-field, radial z-layering | Does this use depth as a visual signal? YES/NO |
| 5 | "3-category border system" (Section 3) | Grid systems must use Cat 1 (3px+) for structural, Cat 2 (1px) for separators. 2px = BANNED | Does this use only Cat 1/2/3 border widths? YES/NO |
| 6 | "opacity === 1 on ALL visual elements" (Section 1) | No opacity transitions, fades, semi-transparent overlays for axis transitions | Is opacity 1.0 on all visual elements? YES/NO |
| 7 | "Zone token naming uses density function names" (Section 3) | Zone delineation must use sparse/dense/breathing naming, not container-specific naming | Does this use density function token names? YES/NO |
| 8 | "Callouts Share Family DNA" (Soul Piece #3, Section 1) | Callout positioning within axis patterns must preserve 2-zone (label + body) with 4px left border | Does this preserve callout family DNA? YES/NO |
| 9 | "Max 2 callouts per viewport" (DD-F-014, Section 3) | Axis research about content distribution must respect 2-callout-per-viewport constraint | Are there <= 2 callouts per viewport section? YES/NO |
| 10 | "The Archivist Speaks in Serif" (Soul Piece #2, Section 1) | Serif italic reserved for Essence/CoreAbstraction ONLY. No axis transition may reassign serif | Is serif italic reserved for wisdom content only? YES/NO |

### 5.2 Application of the Map

The R-4 Evaluator applies all 10 gates to each of the 192 findings. Classification:

```
ALL 10 gates pass:           PASS (include in research package, no flags)
9 gates pass, 1 SOFT fail:   CONDITIONAL PASS (include with constraint note)
Any HARD gate fails (3,4,6): FAIL (exclude from research package entirely)
Gate 1 fails:                CHALLENGE (include but flagged for chain testing)
Gates 2,5,7,8,9,10 fail:    CONDITIONAL FAIL (exclude unless adaptation path exists)
```

"HARD gates" are soul-piece-derived and immutable. "SOFT gates" are empirical-finding-derived and testable.

**Source:** Identity-cycle-analyst Section 1 (GAP-IC-01), all 10 constraints verified by auditor (Section 1, "Constraint Map Accuracy: 10/10 claims verified"). This is "immediately usable" per auditor assessment.

---

## 6. DECISION TREE FOR IDENTITY-CHALLENGING FINDINGS

### 6.1 The Unified 4-Branch Decision Tree

When a research finding or builder discovery challenges an identity statement, classify the challenge by the TYPE of identity statement being challenged:

```
FINDING X CHALLENGES IDENTITY STATEMENT Y

STEP 1: CLASSIFY WHAT Y IS
  ├── Y is a SOUL PIECE (1-5)
  │     └── Go to Branch A: SOUL CHALLENGE
  ├── Y is a DERIVED CONSTRAINT (border system, opacity gate, zone naming)
  │     └── Go to Branch B: DERIVED CHALLENGE
  ├── Y is a PROCESS PATTERN (convention-first, fractal mandate)
  │     └── Go to Branch C: PROCESS CHALLENGE
  └── Y is an EMPIRICAL FINDING (OD-F-005, DD-F-012)
        └── Go to Branch D: EMPIRICAL CHALLENGE

BRANCH A: SOUL CHALLENGE
  Soul pieces are IMMUTABLE "ways of seeing."
  Can the finding be adapted to respect the soul piece?
    YES -> Adapt finding. Document adaptation rationale. Apply adapted version.
           Example: Spiral without depth -> use border-weight gradient.
    NO  -> REJECT the finding. Document as "R4-NNN SOUL FAIL: requires
           [technique] which violates Soul Piece #N ([name])."
  This is a BINARY decision. No escalation needed.

BRANCH B: DERIVED CHALLENGE
  Is the derived constraint traceable to a soul piece?
    YES -> Treat as Branch A (soul piece is the real constraint).
    NO  -> Was the constraint empirically validated (e.g., 20/20 ANTI-PHYSICAL)?
      YES -> HIGH CONFIDENCE. Require 2+ independent counterexamples
             from AD to modify. Document as POTENTIAL REFINEMENT.
      NO  -> The constraint is a heuristic. Apply finding to ONE AD as
             experiment. Compare audited quality against control.
             If better: adopt refinement. If worse: retain constraint.

BRANCH C: PROCESS CHALLENGE
  Research suggests a different process produces better outcomes?
    Document the proposed change.
    Apply to ONE wave as experiment.
    Compare: score, soul compliance, audit finding count.
    Binary comparison: experimental better on ALL THREE metrics = adopt.
    Otherwise: retain existing process.

BRANCH D: EMPIRICAL CHALLENGE
  Research contradicts an empirical finding (e.g., "axis IS independent
  from org-density, contradicting OD-F-005").
  This is AD's most important case.

  PROTOCOL:
  1. FLAG the finding as CHAIN CHALLENGE (special tag, not regular finding)
  2. DO NOT reject. DO NOT accept.
  3. DESIGN a discriminating test in the AD exploration:
     Build one section with axis SERVING org-density (per OD-F-005)
     AND a parallel section with axis INDEPENDENT.
     Score both. Compare.
  4. Document: test design, results, conclusion.
  5. If chain CONFIRMED: strengthen with AD evidence.
     If chain CHALLENGED: document as AD-F finding.
     Let v2 identity capture the nuance.
  6. NEVER silently override an empirical finding. The chain is the proof.
```

### 6.2 Concrete AD Challenge Scenarios

| Scenario | Branch | Expected Resolution |
|----------|--------|-------------------|
| Spiral patterns require perceived depth | A (Soul Piece #4) | ADAPT: use border-weight gradient for flat spiral (OD-004 precedent) OR REJECT |
| Bento grid shows 2px cell borders are industry standard | B (derived, traceable to Rule 5) | Treat as A: reject 2px, use 1px separators or 3px+ structural |
| Axis choreography needs opacity transitions | A (opacity === 1.0) | REJECT: find alternative axis transition signal (typographic weight, spacing, border) |
| Z-pattern works only at page scale, not fractal | D (DD-F-006 empirical) | DESIGN TEST: build Z-pattern at component and character scales; compare quality |
| Axis IS independent from org-density | D (OD-F-005 empirical) | DESIGN TEST: build with axis serving vs axis independent; score comparison |
| Rounded progress indicators improve wayfinding | A (Soul Piece #5) | REJECT: find square-cornered alternative |

### 6.3 Internal Identity Tension Resolution

The identity-cycle-auditor identified a gap: the tree handles challenges FROM research but not challenges BETWEEN identity statements when applied to new (axis) territory.

Example: Fractal self-similarity (DD-F-006) at component scale may conflict with ANTI-PHYSICAL (Soul Piece #4) if the fractal pattern at small scale naturally implies spiral depth.

```
INTERNAL TENSION PROTOCOL

When two identity statements conflict in a specific AD context:

1. IDENTIFY which statement has HIGHER precedence:
   Soul Piece > Empirical Finding > Derived Constraint > Process Pattern

2. The higher-precedence statement WINS for the specific context.
   The lower-precedence statement is CONSTRAINED, not violated:
   "DD-F-006 fractal applies at [4 of 5 scales] in AD-004 context
   because Soul Piece #4 prevents fractal at component scale for spirals."

3. Document the tension and its resolution in the identity delta.
   This is a REFINEMENT of the lower-precedence statement, not a rejection.
```

**Source:** Identity-cycle-analyst Section 3 (GAP-IC-03), identity-cycle-auditor Section 2 (verified decision tree as sound, added internal tension gap). Research-loop-analyst Section 2 (CLASS A/B/C). All three sources aligned on the need; reconciled in Section 10 below.

---

## 7. PARADIGM FIT TEST: THE 4-LEVEL SYSTEM

### 7.1 Beyond Simple SOUL PASS/FAIL

The skeleton has a binary SOUL PASS/FAIL gate (10-line checklist, 5 checks). But the full identity is 577 lines. Research that passes soul may still violate broader paradigm. The 4-level paradigm fit test catches what the soul test misses.

```
PARADIGM FIT TEST (Applied to each research finding AND each builder discovery)

LEVEL 1 — SOUL (Existing, Binary, All Agents)
  [ ] border-radius: 0
  [ ] box-shadow: none
  [ ] No filter: drop-shadow
  [ ] No fake depth, gradients, blur
  [ ] Locked palette colors only
  [ ] Font trio only (Space Grotesk, Newsreader, JetBrains Mono)
  [ ] Border weights: 4px left accent, 3px full, 1px separator only
  [ ] opacity === 1.0 on all visual elements
  GATE: ALL 8 must be YES. Any NO = SOUL FAIL.

LEVEL 2 — ANTI-PHYSICAL (New, Binary, Evaluator + Builder + Auditor)
  [ ] No decorative depth (card shadows, gradient connectors)
  [ ] No animated z-movement (hover lift, scale, perspective, 3D transforms)
  [ ] No rounded shapes implying physical objects
  [ ] No gradients suggesting light/material interaction
  [ ] No traffic-light color semantics (red/amber/green material signals)
  [ ] No parallax or z-space layering
  GATE: ALL 6 must be YES. Any NO = ANTI-PHYSICAL FAIL.

LEVEL 3 — CHAIN COHERENCE (New, Binary, Evaluator + Builder)
  [ ] Does this axis technique SERVE the org-density pairing for its AD? YES/NO
  [ ] Can this axis pattern be traced through density to organization? YES/NO
  [ ] Does this technique exhibit fractal properties at >= 3 of 5 scales? YES/NO
  GATE: All 3 must be YES. First two are strict binary. Third uses
  the >= 3 threshold as binary cutoff (3+ = YES, 0-2 = NO).

LEVEL 4 — EDITORIAL IDENTITY (New, Judgment, FRESH-EYES ONLY, Post-Build)
  [ ] Does this feel like it belongs in a premium editorial publication?
  [ ] Does this communicate confident restraint?
  [ ] Would this be distinguishable from a generic web layout?
  NOTE: Level 4 CANNOT be binarized. It is applied only by Fresh-Eyes
  agents post-build. It is documented but does not trigger a gate FAIL
  in the research evaluation phase. It informs the identity delta.
```

### 7.2 Paradigm Fit Classification

After applying all 4 levels, each finding receives a paradigm fit classification:

| Level Results | Classification | Action |
|---------------|---------------|--------|
| L1 PASS + L2 PASS + L3 PASS + L4 PASS | PARADIGM-CONFIRMING | Apply with high confidence |
| L1 PASS + L2 PASS + L3 PASS + L4 N/A or MIXED | PARADIGM-EXTENDING | Apply, document as identity candidate |
| L1 PASS + L2 PASS + L3 FAIL (one check) | PARADIGM-CHALLENGING | Invoke decision tree Branch D |
| L1 PASS + L2 FAIL | PARADIGM-BREAKING (ANTI-PHYSICAL) | Reject unless adaptation path exists |
| L1 FAIL | SOUL FAIL | Reject unconditionally |

### 7.3 When to Apply Each Level

| Phase | L1 (Soul) | L2 (Anti-Physical) | L3 (Chain) | L4 (Editorial) |
|-------|-----------|-------------------|------------|-----------------|
| Wave 0 (Research Evaluation) | YES | YES | YES | NO |
| Wave 1+ (Build) | YES | YES | YES | NO |
| Audit (Structural) | YES | YES | NO | NO |
| Audit (Visual) | YES | YES | NO | NO |
| Audit (Fresh-Eyes) | YES | YES | YES | YES |
| Identity Delta Writing | Review L1-L3 results | Review L2 results | Review L3 results | Review L4 results |

**Source:** Identity-cycle-analyst Section 4 (GAP-IC-04). Auditor verified L1 as binary, L2 as binary, L3 as "PARTIALLY" binary (fixed by using >= 3 threshold as binary cutoff per auditor recommendation), L4 as correctly labeled judgment.

---

## 8. R-2 STRUCTURAL INTEGRATION

### 8.1 The R-2 Pathology

R-2 (Creative Layouts, 27 findings) has been at 0% consumption across 4 pipeline opportunities (DD, OD build, OD audit, OD re-enrichment). The pathology has three layers:

| Layer | Failure | AD Fix |
|-------|---------|--------|
| Layer 1: Designation Gap | No stage's primary mission was "creative layouts" | AD designates R-2 as secondary with minimum application targets per AD |
| Layer 2: Evaluation Without Integration | r2-evaluation.md (485 lines) was produced as PARALLEL output to research packages; builders received research packages but not R-2 evaluation | R-2 findings EMBEDDED in each per-AD research package (not referenced, COPIED) |
| Layer 3: No Binary Gate | 0% was never caught by automated check | R-2 >= 72% binary gate; each research package must contain >= 4 R-2 findings |

### 8.2 The Anti-Orphaning Rule

```
ANTI-ORPHANING RULE

No research evaluation document may exist as a standalone output.
Every evaluation must be CONSUMED by a downstream document that builders
actually read.

If an evaluation document is produced but not consumed, the evaluation
is DARK MATTER -- invisible to the build pipeline.

Verification: For each research evaluation file produced in Wave 0,
trace a path to a builder's input. If no path exists, the file is
orphaned. GATE: FAIL.

Example path: r2-evaluation.md -> r2-ad-mapping.md -> research-package-ad-001.md
                                                       (EMBEDDED, not referenced)
```

### 8.3 R-2 Embedding in Research Packages

Each research-package-ad-{N}.md MUST contain an inline section:

```
## R-2 FINDINGS FOR THIS EXPLORATION (Mandatory Application)

| R2 Finding | Name | Application Guidance for AD-{N} | Priority |
|-----------|------|--------------------------------|----------|
| R2-XXX | [name] | [specific guidance for THIS AD's axis context] | HIGH/MEDIUM/LOW |
```

This section is a COPY of the applicable subset, reformatted for the specific exploration. The builder should not need to read any file other than their research package.

### 8.4 R-2/R-4 Cross-Integration

Multiple R-2 and R-4 findings address the same design problem. Research packages must identify and unify these overlaps:

| R-2 Finding | Related R-4 Category | Integration Approach |
|------------|---------------------|---------------------|
| R2-014 Bento Grid | R4-016 to R4-028 Bento Grid | Unified grid axis specification for AD-003 |
| R2-015 Asymmetric Grid | R4-035 to R4-049 Broken Grid | Unified asymmetric specification for AD-005/006 |
| R2-019 Typography as Primary | R4-050 to R4-068 Visual Rhythm | Typography IS the axis rhythm for AD-001/002 |
| R2-025 Scrollytelling | R4-077 to R4-092 Axis Transitions | Scroll-driven axis mechanism for AD-005 |

Each research package MUST include a "R-2/R-4 SYNERGY" section identifying where R-2 and R-4 findings address the SAME design problem from different angles. The builder applies the unified recommendation, not two separate ones.

### 8.5 R-2 Per-AD Mapping (from ad-skeleton-research.md Section 2.3)

| AD | R-2 Findings Applicable | Count | Minimum Required |
|----|------------------------|-------|-----------------|
| AD-001 | R2-002, R2-004, R2-005, R2-011, R2-016, R2-019, R2-020, R2-021, R2-025, R2-027 | 10 | 5 |
| AD-002 | R2-002, R2-003, R2-004, R2-005, R2-009, R2-011, R2-019, R2-020, R2-021, R2-022, R2-025, R2-027 | 12 | 5 |
| AD-003 | R2-004, R2-005, R2-007, R2-008, R2-011, R2-013, R2-018, R2-020, R2-021, R2-027 | 10 | 5 |
| AD-004 | R2-004, R2-005, R2-008, R2-010, R2-011, R2-013, R2-016, R2-020, R2-021, R2-023, R2-027 | 11 | 5 |
| AD-005 | R2-001, R2-003, R2-004, R2-005, R2-006, R2-007, R2-011, R2-014, R2-015, R2-016, R2-017, R2-018, R2-020, R2-021, R2-023, R2-027 | 16 | 8 |
| AD-006 | R2-001, R2-002, R2-004, R2-005, R2-006, R2-007, R2-009, R2-011, R2-012, R2-014, R2-015, R2-018, R2-019, R2-020, R2-021, R2-022, R2-027 | 17 | 8 |

**SOUL FAILs excluded:** R2-024 (Overlapping Elements) and R2-026 (Card Animation). Both fail Level 1 (soul) and Level 2 (anti-physical).

**Source:** Research-loop-analyst Sections 4 and 7 (lines 224-440), ad-skeleton-research.md Section 2 (lines 158-214). Auditor confirmed R-2 orphaning as "forensically precise" and the anti-orphaning rule as "the most immediately actionable fix."

---

## 9. STATIC VS EVOLVING RESEARCH GUIDANCE

### 9.1 The Problem

The skeleton's research guidance (ad-skeleton-research.md Section 3.6) is a static table mapping prior learnings to research directions. It is written once and never updated. But OD proved that guidance MUST evolve between waves.

**Evidence from OD:**
- Wave 1: Researchers used base identity to generate queries. Found opacity violation pattern.
- Wave 2: The new opacity binary rule CHANGED what researchers checked for.
- Wave 3: The new "ANTI-PHYSICAL" label CHANGED query generation entirely -- researchers specifically searched for techniques achieving 3D metaphors through 2D signals.

Each wave's discoveries REFINED the lens for the next wave. The skeleton captures the delta mechanism but not the FEEDBACK from delta to query generation.

### 9.2 The Dynamic Guidance Update Protocol

After Lead writes identity-delta-ad-wave{N}.md, the delta MUST include:

```
SECTION: "REVISED RESEARCH GUIDANCE FOR WAVE {N+1}"

This section contains 2-3 SPECIFIC updates to the research query generation
protocol based on THIS wave's discoveries:

| Wave N Discovery | Wave N+1 Research Directive |
|-----------------|---------------------------|
| [specific finding] | "Search specifically for [X]. Previous guidance
                      said [Y]; now search for [Z] instead." |

EXAMPLE (from OD Wave 1 -> Wave 2):
| Discovery: opacity < 1.0 on offsets = shadow illusion |
| Directive: "For AD-003/004, when evaluating grid axis patterns,
  specifically test: does any axis transition technique use
  opacity < 1.0? If yes, SOUL FAIL regardless of visual subtlety." |
```

### 9.3 Identity Lens Versioning

The identity lens document (Section 2.2) is valid only until the first identity delta. After each delta:

```
LENS VERSION UPDATE PROTOCOL

Trigger: Identity delta written for Wave N.
Action: Update identity lens version number (1.0 -> 1.1 -> 1.2...).
Check each DO/DO NOT item against delta discoveries:
  - Any DO item invalidated by delta? REMOVE or MODIFY.
  - Any DO NOT item validated as wrong by delta? MOVE to DO with constraints.
  - Any new DO item implied by delta? ADD.
  - Any new DO NOT item implied by delta? ADD.

Produce LENS VERSION {N+1} with change log showing what moved and why.

BINARY GATE: Lens version number MUST match wave number.
Lens 1.0 = base (from v1.1). Lens 1.1 = after Wave 1A delta.
If lens version and wave number disagree, the lens was not updated. FAIL.
```

### 9.4 Forward Question Evolution Pattern

Forward questions in identity deltas MUST follow a progressive pattern:

```
QUESTION EVOLUTION PATTERN

Wave 1A deltas: CONFIRMING questions
  - "Does [identity principle from v1.1] hold in AD-001/002 context?"
  - "Is [OD discovery] relevant to axis geometry?"
  - Expected answers: YES/NO with evidence

Wave 1B deltas: STRESS-TESTING questions
  - "Given Wave 1A confirmed [principle], does it hold in [harder case]?"
  - "What happens when [principle A] and [principle B] conflict?"
  - Expected answers: resolution of a genuine tension

Wave 1C deltas: EXTENDING questions
  - "Given [stress-tested principle], what does this imply for CD/Migration?"
  - "Does AD's axis dimension reveal a new equivalence/scale/soul piece?"
  - Expected answers: forward-looking implications shaping v2

ENFORCEMENT: If a Lead writes a confirming question in Wave 1C, the question
is too safe. If a Lead writes an extending question in Wave 1A, the question
is premature. The evolution must match the accumulated evidence.

NOTE: This is a JUDGMENT-BASED guideline, not a binary gate. The Lead is
the judgment-call agent. If the Lead has evidence justifying a confirming
question in Wave 1C (e.g., an unexpected late finding), they document the
rationale for the out-of-sequence question type.
```

**Source:** Research-loop-analyst Sections 3 and 8 (lines 143-486). Auditor confirmed the spiral characterization and dynamic guidance need. Auditor flagged the question evolution as judgment-based -- accepted as Lead-only protocol. Identity-cycle-auditor flagged lens expiration problem (Missed Gap B) -- addressed via versioning protocol above.

---

## 10. RECONCILED PROTOCOL: 4-BRANCH DECISION TREE + CLASS A/B/C

### 10.1 The Two Models

The research-loop-analyst proposed a 3-class system for research findings:
- **CLASS A:** Contradicts a SOUL PIECE -> immutable, reject or adapt
- **CLASS B:** Contradicts a PROCESS FINDING -> escalate to Lead
- **CLASS C:** Contradicts an AGENT-AUTHORED CONVENTION -> revisable with rationale

The identity-cycle-analyst proposed a 4-branch decision tree:
- **Branch A:** SOUL CHALLENGE -> adapt or reject
- **Branch B:** DERIVED CONSTRAINT CHALLENGE -> trace to soul or test
- **Branch C:** PROCESS CHALLENGE -> experiment and compare
- **Branch D:** EMPIRICAL CLAIM CHALLENGE -> design discriminating test

### 10.2 The Reconciliation

These models are COMPLEMENTARY, not contradictory. They operate at different levels:
- The CLASS system classifies WHAT the finding does to identity (confirms, extends, challenges)
- The BRANCH system classifies WHICH TYPE of identity statement is challenged

Unified protocol:

```
UNIFIED IDENTITY-RESEARCH CHALLENGE PROTOCOL

STEP 1: CLASSIFY THE FINDING (CLASS system)
  Is the finding consistent with accumulated identity?
    YES, and strengthens it     -> CLASS A: PARADIGM-CONFIRMING
    YES, and adds something new -> CLASS B: PARADIGM-EXTENDING
    NO, it contradicts identity -> CLASS C: PARADIGM-CHALLENGING
    NO, and fundamentally       -> CLASS D: PARADIGM-BREAKING

STEP 2: FOR CLASS C AND D, CLASSIFY THE TARGET (BRANCH system)
  What kind of identity statement is being challenged?
    Soul Piece (1-5)        -> Branch A: SOUL CHALLENGE
    Derived Constraint      -> Branch B: DERIVED CHALLENGE
    Process Pattern         -> Branch C: PROCESS CHALLENGE
    Empirical Finding       -> Branch D: EMPIRICAL CHALLENGE

STEP 3: APPLY BRANCH-SPECIFIC RESOLUTION (from Section 6.1 above)

STEP 4: DOCUMENT IN IDENTITY DELTA
  CLASS A findings: log in "NEW DISCOVERIES" section
  CLASS B findings: log in "NEW DISCOVERIES" + mark as identity candidate
  CLASS C findings: log in "CHALLENGES RESOLVED" with resolution
  CLASS D findings: log in "CHALLENGES RESOLVED" + flag for CD investigation
```

### 10.3 The Combined Decision Matrix

| Finding Class | Branch (if C/D) | Action | Identity Delta Section | Paradigm Fit Level |
|--------------|-----------------|--------|----------------------|-------------------|
| A (Confirming) | N/A | Apply, cite identity | NEW DISCOVERIES | L1-L3 PASS |
| B (Extending) | N/A | Apply, mark as candidate | NEW DISCOVERIES + elevation criteria | L1-L3 PASS, L4 informs |
| C (Challenging) + Branch A | Soul | Adapt or reject | CHALLENGES RESOLVED | L1 FAIL or adapted |
| C (Challenging) + Branch B | Derived | Trace to soul or test | CHALLENGES RESOLVED | L2 FAIL or tested |
| C (Challenging) + Branch C | Process | Experiment in one wave | CHALLENGES RESOLVED | L3 FAIL, testable |
| C (Challenging) + Branch D | Empirical | Design discriminating test | CHALLENGES RESOLVED | L3 FAIL, critical |
| D (Breaking) + Branch A | Soul | REJECT unconditionally | CHALLENGES RESOLVED | L1 FAIL |
| D (Breaking) + Branch D | Empirical | AD's most important case. Full test protocol. | CHALLENGES RESOLVED + flag for CD | L3 FAIL, pipeline-critical |

### 10.4 Why Reconciliation Was Necessary

The two analysts had partially overlapping but non-identical models:

| Aspect | Research-Loop Analyst | Identity-Cycle Analyst | Reconciled |
|--------|----------------------|----------------------|------------|
| Classification basis | What the finding DOES (confirm/extend/challenge) | What TYPE of statement is challenged | Both: WHAT it does THEN WHICH type |
| Soul handling | CLASS A: "SOUL PIECES ARE IMMUTABLE" | Branch A: "Adapt or reject" | Aligned: immutable, but adaptation possible |
| Process handling | CLASS C: "Conventions can be revised" | Branch C: "Experiment and compare" | Extended: experiment provides the evidence for revision |
| Empirical handling | CLASS B: "Escalate to Lead" | Branch D: "Design discriminating test" | Extended: Lead escalation WITH specific test protocol |
| Internal tensions | Not addressed | Identified but not fully resolved | Added via precedence hierarchy (Section 6.3) |
| Prompt budget | Not addressed | Proposed ~200 lines of additional protocol | Addressed via identity dosage (Section 2.5) -- protocols go in reference documents, not agent prompts |

### 10.5 Prompt Budget Resolution

The research-loop-auditor flagged that proposed additions total ~175 lines against a 50-100 line prompt budget. The identity-cycle-auditor independently flagged Convention Agent as single point of failure.

RESOLUTION: Protocols in Sections 3-7 and 10 are REFERENCE DOCUMENTS, not prompt-embedded rules. Each agent receives only their dosage (Section 2.5):

| Agent | What they receive from this document | Lines |
|-------|--------------------------------------|-------|
| R-4 Evaluator | Identity-constraint map (10 gates) + priority matrix | ~30 |
| EXT-AXIS-* Researcher | Tension table + lens document (DO/DO NOT) | ~25 |
| Builder | 6 binary gates (L1-L3) + challenge reporting format | ~20 |
| Fresh-Eyes | Paradigm fit test L4 questions only | ~5 |
| Lead | Full decision tree + delta template + checkpoint template | ~80 |
| Identity Scribe | Elevation criteria + v2 determination protocol | ~40 |

Only the Lead receives the full protocol (~80 lines). All other agents receive slices. Total per-agent identity addition from this document: 5-40 lines, well within the 50-100 line prompt budget.

---

## 11. SOUL PIECE #6 INTERACTION WITH THE LOOP

The identity-cycle-auditor identified a gap: the skeleton plans for potential Soul Piece #6 discovery during AD, but the identity-research loop has no provision for a NEW soul piece emerging mid-process.

### 11.1 The Source Contradiction

SOUL-DISCOVERIES.md (line 18): "LOCKED -- 5 soul pieces are final."
Skeleton Section 6.4: Explicitly plans for Soul Piece #6 (spatial).
ACCUMULATED-IDENTITY-v1.1 Section 7, Q4: Lists potential #6 candidates.

### 11.2 Resolution Protocol

```
IF a finding during AD appears to meet soul piece criteria:
  1. It MUST be a WAY OF SEEING (not a CSS rule)
  2. It MUST be DISCOVERED (not decided)
  3. It MUST be immutable (cannot change without destroying identity)
  4. TWO-INSTANCE VERIFICATION: A second, independent agent must ALSO
     identify the candidate as soul-level

IF all 4 criteria met:
  - Do NOT retroactively re-filter Wave 1A/1B research
    (findings already applied cannot be un-applied)
  - DO add the new soul piece to the identity lens immediately
  - DO add new binary gates to L1 of the paradigm fit test for Wave 1C+
  - DO flag all previously-applied findings for re-audit against #6
  - DO include prominently in identity delta and cumulative checkpoint
  - SOUL-DISCOVERIES.md LOCKED status is OVERRIDDEN by the skeleton's
    explicit planning for #6. The lock is a STRONG DEFAULT, not absolute.
```

### 11.3 ANTI-PHYSICAL as Soul Piece #6

The identity-cycle-analyst identified ANTI-PHYSICAL elevation as the most likely #6 outcome. If AD produces 10+ additional SOUL FAILs in the ANTI-PHYSICAL categories (adding to OD's 20/20), the evidence becomes overwhelming. However:

- ANTI-PHYSICAL is a META-OBSERVATION about what the soul rejects, not a PERCEPTUAL TRUTH about how things look.
- Soul pieces are "ways of seeing." ANTI-PHYSICAL is a "way of NOT seeing."
- The two-instance verification test applies: a second agent must independently conclude ANTI-PHYSICAL has soul-piece status.

**Source:** Identity-cycle-auditor Missed Gap B, ad-skeleton-identity.md Section 9 (lines 529-583).

---

## 12. OPEN QUESTION EVIDENCE STANDARDS

The 6 open questions from v1.1 Section 7 need evidence standards (not just test mappings).

| # | Question | Evidence Standard | Possible Answers | Binary? |
|---|----------|------------------|-----------------|---------|
| 1 | 4px/3px/1px gap asymmetry | AD-004 and AD-006 both use gradient; visual audit shows no perceptible gap at 1440px and 768px; score >= 32 on both | "Accommodates" / "Requires dedicated semantic rule" / "Inconclusive" | YES (measurable) |
| 2 | Quintuple Equivalence | AD-006 demonstrates or fails to demonstrate axis at navigation scale; specific HTML elements cited | "Sextuple confirmed" / "Axis parallel, not member" / "Inconclusive" | YES (demonstrable) |
| 3 | Semi-transparent violations | grep -c 'rgba\|opacity' across all 6 ADs returns 0 problematic instances | "0 violations (RESOLVED)" / "N violations (AUDIT GAP PERSISTS)" | YES (binary count) |
| 4 | WAVE self-documentation | AD-005 contains visual mechanism making axis transitions visible; Fresh-Eyes can identify active axis pattern without being told | "Self-documenting" / "Partially visible" / "Not self-documenting" | MOSTLY (Fresh-Eyes assessment) |
| 5 | R-2 at 0% | >= 18/25 R-2 findings have planned AD targets; post-build actual rate measured | "N/25 consumed (target met/not met)" | YES (threshold) |
| 6 | Transitive chain | Each AD has Chain Validation section; aggregate N/6 confirm, M/6 independent | "6/6 (3-way unification)" / "N/6 (partial)" / "<3/6 (challenged)" | YES (countable) |

When: After all 6 ADs built, audited, fixed. Before v2 is written.
Who decides: Lead, based on evidence enumerated above.

**Source:** Identity-cycle-analyst Section 6 (GAP-IC-06). Auditor verified Q3 and Q6 evidence standards as binary; flagged Q4 as judgment-based but accepted since Fresh-Eyes IS the judgment agent.

---

## 13. COMPLETE LOOP ARCHITECTURE DIAGRAM

```
ACCUMULATED IDENTITY v1.1 (577 lines)
         |
    ┌────┴────┐
    |         |
  LENS      FILTER
(query    (soul test,
 gen,      5 gates)
 DO/DON'T     |
 search)      |
    |         v
    v    IDENTITY-CONSTRAINT MAP
TENSION  (10 binary gates from v1.1)
TABLE         |
(5 identity   |
 tensions)    |
    |         |
    └────┬────┘
         |
         v
   RESEARCH EVALUATION
   (R-4: 192 findings x 10 gates -> PASS/FAIL/CHALLENGE)
   (R-2: 25 findings remapped to AD targets)
   (EXT-AXIS-*: 40-52 tension-derived findings)
         |
         v
   PER-AD RESEARCH PACKAGES
   (R-4 applicable + R-2 EMBEDDED + EXT-AXIS-* +
    R-2/R-4 synergies + identity-weighted priorities)
         |
         v
   BUILDERS (per wave)
   (apply findings, cite in HTML,
    report DISCOVERIES + CHALLENGES)
         |
         ├── CLASS A/B findings ──> IDENTITY DELTA (NEW DISCOVERIES)
         |
         └── CLASS C/D findings ──> DECISION TREE
                                    ├── Branch A (Soul): adapt/reject
                                    ├── Branch B (Derived): trace/test
                                    ├── Branch C (Process): experiment
                                    └── Branch D (Empirical): design test
                                              |
                                              v
                                    IDENTITY DELTA
                                    (CHALLENGES RESOLVED +
                                     REVISED RESEARCH GUIDANCE +
                                     forward question matching
                                     confirm->stress->extend pattern +
                                     >= 1 EXT-AXIS-* reference)
                                              |
                                              v
                                    CUMULATIVE CHECKPOINT
                                    (50-100 lines, replaces
                                     reading v1.1 + all deltas)
                                              |
                                    ┌─────────┴─────────┐
                                    |                   |
                               NEXT WAVE            NEXT WAVE
                               RESEARCHERS          BUILDERS
                               (DELTA-DERIVED        (cite delta
                                queries required,     findings,
                                updated lens,         >= 1 delta
                                tension table         citation in
                                refreshed)            HTML)
                                    |                   |
                                    v                   v
                                    └─────────┬─────────┘
                                              |
                                       FEEDBACK LOOP
                                       BINARY CHECKS
                                       (4 rules: delta
                                        references EXT-*,
                                        delta-derived queries,
                                        builder cites delta,
                                        v2 has AD sentences)
                                              |
                                              v
                                    LOOP REPEATS (3 waves)
                                              |
                                              v (final wave)
                                    IDENTITY SCRIBE
                                    (v1.1 + all deltas +
                                     all challenge resolutions +
                                     elevation criteria applied +
                                     determination protocol for
                                     identity statement + chain +
                                     open question resolutions)
                                              |
                                              v
                                    ACCUMULATED-IDENTITY v2
                                    (700-800 lines, standalone,
                                     >= 3 AD-discovery sentences,
                                     chain status documented,
                                     challenge resolutions archived,
                                     open questions answered with evidence)
```

---

## 14. BINARY GATE SUMMARY

All binary gates from this section, consolidated for implementation:

| Gate ID | Gate Description | Where Applied | Binary Check |
|---------|-----------------|---------------|-------------|
| IRL-G01 | Identity lens exists with >= 5 DO + >= 5 DO NOT items | T1 (IDENTITY-LOADED -> LENS-ACTIVE) | Count >= 5 each? YES/NO |
| IRL-G02 | >= 150 R-4 findings classified through identity-constraint map | T2 (LENS-ACTIVE -> RESEARCH-FILTERED) | Count >= 150? YES/NO |
| IRL-G03 | >= 18 R-2 findings mapped to AD targets | T2 | Count >= 18? YES/NO |
| IRL-G04 | >= 5 EXT-AXIS-* per AD, all SOUL PASS | T2 | Count >= 5 per AD, 0 SOUL FAIL? YES/NO |
| IRL-G05 | Each research package contains >= 4 R-2 findings | T3 (RESEARCH-FILTERED -> BUILD) | Count >= 4? YES/NO |
| IRL-G06 | Each builder report has DISCOVERIES + CHALLENGES sections | T4 (BUILD -> FINDINGS-PRODUCED) | Sections exist? YES/NO |
| IRL-G07 | Every CHALLENGE has resolution (ADAPTED/REJECTED/ESCALATED/TEST-DESIGNED) | T5 (FINDINGS-PRODUCED -> IDENTITY-TESTED) | All resolved? YES/NO |
| IRL-G08 | Every DISCOVERY has paradigm fit classification | T5 | All classified? YES/NO |
| IRL-G09 | Delta references >= 1 EXT-AXIS-* finding by ID | T6 (IDENTITY-TESTED -> GUIDANCE-EVOLVED) | Reference exists? YES/NO |
| IRL-G10 | Delta contains REVISED RESEARCH GUIDANCE section | T6 | Section exists? YES/NO |
| IRL-G11 | Cumulative checkpoint exists (50-100 lines) | T6 | File exists, 50-100 lines? YES/NO |
| IRL-G12 | Forward question matches wave evolution pattern | T6 | Type matches position? YES/NO (judgment for Lead) |
| IRL-G13 | Next wave's research packages contain DELTA-DERIVED QUERIES section | T7 (GUIDANCE-EVOLVED -> LENS-ACTIVE) | Section exists with >= 1 query? YES/NO |
| IRL-G14 | Lens version number matches wave number | T7 | Numbers match? YES/NO |
| IRL-G15 | v2 contains >= 3 sentences referencing AD wave discoveries | T8 (GUIDANCE-EVOLVED -> SYNTHESIS) | Count >= 3? YES/NO |
| IRL-G16 | v2 is standalone (700-800 lines) | T8 | 700-800 lines? YES/NO |

16 binary gates. 15 are fully binary (mechanical verification). 1 (IRL-G12) is judgment-based but restricted to Lead (the designated judgment agent).

---

## 15. SOURCE CROSS-REFERENCE

Every claim in this document traces to at least one source file:

| Section | Primary Source | Secondary Source | Auditor Verification |
|---------|---------------|-----------------|---------------------|
| 1. State Machine | ad-skeleton-synthesis.md Sections 4.2-4.6 | ad-skeleton-research.md Section 6 | N/A (synthesis structure) |
| 2. Lens Function | research-loop-gaps.md Section 3 | identity-cycle-gaps.md Section 1 | research-loop-audit.md: "most important contribution" |
| 3. Challenge Protocol | research-loop-gaps.md Section 2 | identity-cycle-gaps.md Section 3 | Both auditors: "APPROVE" |
| 4. Circular Refinement | research-loop-gaps.md Section 8 | identity-cycle-gaps.md Section 5 | research-loop-audit.md: "STRONGLY CONFIRMED" |
| 5. Constraint Map | identity-cycle-gaps.md Section 1 | ad-skeleton-identity.md Section 2 | identity-cycle-audit.md: "10/10 verified" |
| 6. Decision Tree | identity-cycle-gaps.md Section 3 | research-loop-gaps.md Section 2 | identity-cycle-audit.md: "VERIFIED AS SOUND" + internal tension addition |
| 7. Paradigm Fit | identity-cycle-gaps.md Section 4 | research-loop-gaps.md Section 1 (priority) | identity-cycle-audit.md: L1-L2 binary, L3 fixed, L4 judgment |
| 8. R-2 Integration | research-loop-gaps.md Sections 4, 7 | ad-skeleton-research.md Section 2 | research-loop-audit.md: "forensically precise" |
| 9. Evolving Guidance | research-loop-gaps.md Section 3 | research-loop-gaps.md Section 8 | research-loop-audit.md: "well-supported" + lens expiration |
| 10. Reconciliation | research-loop-gaps.md Section 2 (CLASS) | identity-cycle-gaps.md Section 3 (BRANCH) | Both auditors approved |
| 11. Soul #6 | identity-cycle-audit.md Missed Gap B | ad-skeleton-identity.md Section 9 | Source contradiction identified by auditor |
| 12. Evidence Standards | identity-cycle-gaps.md Section 6 | ad-skeleton-identity.md Section 6.3 | identity-cycle-audit.md: Q3 and Q6 binary, Q4 judgment |
| 13. Architecture Diagram | Synthesis of all 6 sources | N/A | N/A (novel synthesis) |
| 14. Binary Gates | All sections | N/A | 15/16 fully binary per auditor standards |

---

## END OF IDENTITY-RESEARCH LOOP SYNTHESIS

**Total: ~880 lines**
**States defined:** 8 (7 active + 1 terminal)
**Transitions defined:** 8
**Binary gates:** 16 (15 fully binary, 1 Lead-judgment)
**Challenge classes:** 4 (A-D) mapped to 4 branches
**Paradigm fit levels:** 4 (Soul, Anti-Physical, Chain Coherence, Editorial)
**Identity-constraint gates:** 10 (from v1.1)
**R-2 findings integrated:** 25 applicable, 2 excluded (SOUL FAIL)
**Sources reconciled:** 2 analyst models (CLASS A/B/C + 4-Branch) unified into single protocol
**Auditor corrections incorporated:** 5 (0% overclaim, prompt budget, binarization fixes, internal tension, Soul #6 interaction)
