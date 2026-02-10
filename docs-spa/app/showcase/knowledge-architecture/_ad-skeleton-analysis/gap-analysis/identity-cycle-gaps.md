# Identity-Guided Research Cycle Gaps
## AD Skeleton Gap Analysis: How Accumulated Identity Constrains Research and How Research Refines Identity

**Analyst:** Identity-Cycle Analyst
**Date:** 2026-02-09
**Sources Consumed:**
- ad-skeleton-synthesis.md (Sections 4.6 Generative Loop, 6 Identity Chain, full document)
- ad-skeleton-identity.md (694 lines, full traversal)
- ACCUMULATED-IDENTITY-v1.1.md (577 lines, full traversal -- the crown jewel)
- ACCUMULATED-IDENTITY-v1.md (542 lines, superseded version, structural comparison)
- SOUL-DISCOVERIES.md (300 lines, full traversal)
- HANDOFF-OD-TO-AD.md (352 lines, full traversal)
- OD-SYNTHESIS.md (200 lines read, structural analysis)
- OD-outbound-findings.md (200 lines read, finding structure analysis)

---

## Executive Summary

The AD skeleton describes a "generative identity loop" (Section 4.6) where identity
evolves between build waves via 10-15 line deltas. It also describes identity chain
continuity (Section 6) with ordered consumption, v1.1 -> v2 extension, and open question
resolution. What it DOES NOT describe is the deep bidirectional coupling between identity
and research: how identity should constrain what subagents explore, how research findings
get validated against existing paradigms, and what happens when research CHALLENGES
identity rather than confirming it. This analysis identifies 7 major gaps across these
dimensions, with specific remediation proposals for each.

---

## 1. Identity as Research Constraint: The Missing Constraint Map

### The Gap

The skeleton says builders receive "AD-SOUL-TEMPLATE.html + AD-CONVENTION-SPEC.md +
research-package-ad-{N}.md" (Section 4.2). But it never specifies HOW the accumulated
identity CONSTRAINS what research packages contain or what builders do with research
findings. The identity is treated as a one-time input rather than an ongoing filter.

### What the Identity Actually Says (and What Each Statement Constrains)

I read the full 577 lines of ACCUMULATED-IDENTITY-v1.1.md. Here is the constraint map
the skeleton needs but doesn't have:

| Identity Statement (v1.1) | Section | Research Constraint for AD | Binary Gate |
|---------------------------|---------|---------------------------|-------------|
| "Organization IS Density" (OD-F-005) | 2 | Research that treats axis as independent from org-density MUST be flagged for transitive chain testing. R-4 findings proposing axis layouts that ignore org-density pairing must be classified as CHALLENGE findings, not applied directly. | Does this R-4 finding respect the org-density-axis triple constraint? YES/NO |
| "Fractal self-similarity at 5 scales" (DD-F-006) | 2 | Research on axis geometry must demonstrate scale invariance. An R-4 finding about Z-pattern works only if Z-pattern can be shown at navigation, page, section, component, and character scales. | Does this axis pattern exhibit fractal self-similarity? YES/NO |
| "The identity is ANTI-PHYSICAL" | 1 | ANY research finding that requires shadows, z-animation, rounded shapes, gradients-as-light, parallax, or perceived depth is automatically SOUL FAIL. This applies to R-4 findings about spiral (AD-004), choreography (AD-005), and bento grid (AD-003) since all three naturally use depth cues in conventional implementations. | Does this technique imply 3D space? YES/NO |
| "Shadows Lie About Depth" (Soul Piece #4) | 1 | Spiral research (AD-004) is the highest-risk area. Any R-4 finding about Fibonacci spirals that relies on focal point elevation, depth-of-field metaphor, or radial z-layering FAILS. The builder must find flat 2D alternatives. | Does this use depth as a visual signal? YES/NO |
| "3-category border system" | 3 | Research about grid systems (AD-003 Bento Grid) must use Cat 1 (3px+) for structural grid lines, Cat 2 (1px) for cell separators. Any research proposing 2px grid borders is automatically REJECTED. | Does this use only Cat 1/2/3 border widths? YES/NO |
| "opacity === 1 on ALL visual elements" | 1 | ANY R-4 finding using opacity transitions, fade effects, or semi-transparent overlays for axis transitions is SOUL FAIL. This specifically constrains AD-005 Choreography where axis transitions are the core topic. | Is opacity 1.0 on all visual elements? YES/NO |
| "Zone token naming uses density function names" | 3 | Research about zone delineation in axis layouts must use sparse/dense/breathing naming, not container-specific naming (e.g., "grid-cell" or "sidebar"). | Does this use density function token names? YES/NO |
| "Callouts Share Family DNA" (Soul Piece #3) | 1 | When axis research suggests callout positioning within axis patterns, the callout must remain 2-zone (label + body) with 4px left border. No research finding can justify breaking family DNA for axis purposes. | Does this preserve callout family DNA? YES/NO |
| "Max 2 callouts per viewport" (DD-F-014) | 3 | Axis research about content distribution MUST respect the 2-callout-per-viewport constraint. A bento grid layout that clusters 3+ callouts in one viewport section FAILS. | Are there <= 2 callouts per viewport section? YES/NO |
| "The Archivist Speaks in Serif" (Soul Piece #2) | 1 | Axis research about typography in axis layouts must preserve serif italic for Essence/CoreAbstraction ONLY. No axis transition technique may reassign serif to non-wisdom content. | Is serif italic reserved for wisdom content only? YES/NO |

### What This Means for the Skeleton

**GAP-IC-01: The skeleton has no identity-constraint map for research filtering.**

The R-4 Evaluator agent (Wave 0) receives 192 findings but the skeleton only says
to "categorize by AD target" (Section 7.1). It does NOT say to run each finding through
the identity constraint map above. The result: findings that violate identity could be
packaged into research packages and handed to builders, who then must individually catch
violations during build -- a reactive approach that has already proven expensive (see
the 2px border epidemic, the rgba epidemic).

**Remediation:** Add a mandatory identity-constraint pass to the R-4 evaluation. Each
of the 192 findings gets a binary identity gate (PASS/FAIL/CHALLENGE). FAIL findings
are excluded from research packages. CHALLENGE findings are included but flagged with
specific identity tension notes. Only PASS findings go in as direct application targets.

**Cost of not fixing this:** Builders receive identity-violating research, attempt to
apply it, produce soul violations, audit catches them, fix phase removes them. This
is the same reactive pattern that caused the 2px border epidemic (108 CSS declarations,
1000+ instances, 43-agent remediation). Proactive filtering at research gate prevents
it entirely.

---

## 2. Identity-Guided Subagent Prompts: The Dosage Problem

### The Gap

When a subagent (builder, researcher, auditor) is told "research axis patterns," how
much of the accumulated identity should they receive? The skeleton says builders get
the soul template and convention spec. But v1.1 is 577 lines. The convention spec will
be 300-500 lines. A research package is probably 200-400 lines. That's 1,000-1,500 lines
of context BEFORE the builder starts working.

### The Current Approach (Skeleton)

The skeleton prescribes:
1. **All builders:** Receive AD-SOUL-TEMPLATE.html + AD-CONVENTION-SPEC.md + research-package
2. **All builders:** Embed 10-line soul checklist (Section 11.2)
3. **Fresh-eyes:** Full identity knowledge but NO convention spec, NO builder justifications

### What's Missing: The Identity Dosage Framework

Different agent roles need different slices of identity:

| Role | Identity Needs | What to Include | What to Exclude | Lines |
|------|---------------|-----------------|-----------------|-------|
| **R-4 Evaluator** | Must filter research against identity constraints | 10-line soul checklist + ANTI-PHYSICAL categories (6) + 3-category border system + identity-constraint map (Table 1 above) | Full OD findings, full DD lesson chain, process patterns, open questions | ~60 lines |
| **R-2 Re-Mapper** | Must map R-2 to AD targets with identity awareness | 10-line soul checklist + OD-to-AD pairing table + transitive chain explanation | Full fractal detail, full ANTI-PHYSICAL categories, process patterns | ~50 lines |
| **Convention Agent** | Must create AD-CONVENTION-SPEC.md that inherits identity | FULL v1.1 (577 lines) -- this agent needs everything | Nothing excluded | 577 lines |
| **Builder** | Must build AD-NNN.html respecting identity | Soul template (embeds all tokens) + 10-line checklist + research package + identity delta from prior waves + 6 binary gates | Full v1.1 (use template instead), full R-4 analysis, other AD packages | ~200 lines total identity |
| **Visual Auditor** | Must assess identity compliance visually | 10-line soul checklist + ANTI-PHYSICAL categories + convention spec reference + planted violation list | Full v1.1, research packages, builder justifications | ~80 lines |
| **Structural Auditor** | Must check DOM for identity violations | Binary gates only: border-radius, box-shadow, filter, opacity, border widths, font families, heading hierarchy | Everything else | ~30 lines |
| **Fresh-Eyes** | Must assess identity WITHOUT convention details | FULL v1.1 MINUS convention spec values, builder justifications, prior audit findings | Convention spec, builder CSS comments, audit reports | ~500 lines |
| **Identity Scribe** | Must synthesize v2 from v1.1 + AD findings | FULL v1.1 + all AD-F findings + AD-SYNTHESIS + identity deltas | Research packages, audit scratchpad | 577 + AD output |

### GAP-IC-02: No Prescribed Identity Dosage Per Role

The skeleton prescribes the same identity inputs for all builders and leaves researcher
dosage unspecified. The consequence: either agents receive too much context (exhausting
context budget on identity instead of work) or too little (missing constraints and
producing violations).

**Remediation:** Add an Identity Dosage Matrix to the skeleton (like the table above).
For each role, specify exactly which identity sections to include, which to exclude,
and the target line count. The Convention Agent curates identity into role-specific
summaries during Wave 0.

**Evidence this matters:** OD's builders received the full accumulated identity
(539 lines at v1) as a single dump. The result: some builders internalized identity
deeply (OD-001/002 scored 37/40) while others treated it as background noise
(OD-004 scored 34/40, highest soul-compliance risk). The variance suggests identity
dosage affects quality.

---

## 3. Research Challenging Identity: The Missing Decision Tree

### The Gap

The skeleton describes what happens when research CONFIRMS identity (apply it, cite it,
build with it). But it never describes what happens when research CHALLENGES identity.
This is the single most critical gap in the identity-research cycle.

### Concrete Challenge Scenarios for AD

| Scenario | Challenge to Identity | Current Skeleton Response | What's Needed |
|----------|----------------------|--------------------------|---------------|
| R-4 finding shows spiral patterns require perceived depth to function | Challenges ANTI-PHYSICAL (Soul Piece #4) | None | Decision tree |
| Bento grid research shows 2px cell borders are industry standard | Challenges 3-category border system | None | Decision tree |
| Axis choreography research shows opacity transitions are the primary axis transition signal | Challenges opacity === 1.0 binary gate | None | Decision tree |
| Z-pattern research shows Z works only at page scale, not fractal at 5 scales | Challenges DD-F-006 fractal mandate | None | Decision tree |
| Compound axis research shows axis IS genuinely independent from org-density | Challenges OD-F-005 (Organization IS Density) transitive chain | Mentioned in Section 10 table but no protocol | Decision tree |
| Research shows that rounded progress indicators improve axis wayfinding | Challenges Soul Piece #5 (Squares Signal System) | None | Decision tree |

### The Decision Tree That Needs to Exist

```
Research finding X appears to challenge identity statement Y

STEP 1: CLASSIFY THE CHALLENGE
  Is Y a Soul Piece (1-5)?
    YES -> HARD CONSTRAINT. Go to Step 2A.
    NO  -> Is Y a derived constraint (border system, opacity gate, zone naming)?
      YES -> SOFT CONSTRAINT. Go to Step 2B.
      NO  -> Is Y a process pattern (fractal mandate, convention-first)?
        YES -> PROCESS CONSTRAINT. Go to Step 2C.
        NO  -> Is Y an empirical finding (OD-F-005, DD-F-012)?
          YES -> EMPIRICAL CLAIM. Go to Step 2D.

STEP 2A: SOUL PIECE CHALLENGE
  Can the research finding be adapted to respect the soul piece?
    YES -> Adapt finding. Document adaptation rationale. Apply adapted version.
           Example: Spiral without depth -> use border-weight gradient (OD-004 precedent).
    NO  -> REJECT the finding. Document why: "R4-NNN SOUL FAIL: requires [technique]
           which violates Soul Piece #N ([name]). No adaptation path found."
           This is a BINARY decision. Soul pieces are immutable.

STEP 2B: DERIVED CONSTRAINT CHALLENGE
  Is the constraint derived from a soul piece?
    YES -> Trace back to soul piece. Treat as 2A.
    NO  -> Was the constraint empirically validated (20/20 ANTI-PHYSICAL)?
      YES -> Treat with high confidence. Require 2+ independent counterexamples
             to modify. Document as POTENTIAL REFINEMENT (not rejection).
      NO  -> The constraint is a heuristic. The research may improve it.
             Document as REFINEMENT CANDIDATE. Apply to ONE AD as experiment.
             Audit result determines if heuristic changes.

STEP 2C: PROCESS CONSTRAINT CHALLENGE
  Research suggests a different process is better?
    Document the proposed change. Apply to ONE wave as experiment.
    Compare quality metrics (score, soul compliance, audit findings) between
    experimental and control waves. If better: adopt. If worse: reject.

STEP 2D: EMPIRICAL CLAIM CHALLENGE
  Research presents evidence that contradicts an empirical finding?
    This is the most important case for AD. Example: research shows axis IS
    independent from org-density, contradicting OD-F-005.

    PROTOCOL:
    1. FLAG the finding as CHAIN CHALLENGE (not regular finding)
    2. DO NOT reject the finding. DO NOT accept the finding.
    3. DESIGN a specific test in the AD exploration that can discriminate.
       Example: Build AD-NNN with the axis explicitly SERVING org-density
       (per OD-F-005) AND build a parallel section with axis INDEPENDENT.
       Score both. Compare.
    4. Document the test design, results, and conclusion.
    5. If chain is CONFIRMED: strengthen the finding with AD evidence.
       If chain is CHALLENGED: document as AD-F finding with evidence.
       Let v2 identity capture the nuance.
    6. NEVER silently override an empirical finding. The chain is the proof.
```

### GAP-IC-03: No Decision Tree for Identity-Challenging Research

The skeleton's Section 10 mentions possible chain outcomes (validated, challenged,
independent, partially independent) but provides no PROTOCOL for reaching those
conclusions. The Lead must be able to make decisions about challenging findings using
a structured process, not ad hoc judgment.

**Remediation:** Add the decision tree above to the skeleton, ideally as a standalone
AD-IDENTITY-CHALLENGE-PROTOCOL.md that every agent receives as a reference.

**Why this is CRITICAL:** If AD discovers that axis geometry is genuinely independent
from org-density (contradicting OD-F-005), this is the most important finding in the
entire pipeline. But without a protocol, there are two failure modes:
1. The finding is silently suppressed because it contradicts identity (confirmation bias)
2. The finding is loudly adopted without sufficient evidence (novelty bias)

Both are equally dangerous. The decision tree ensures neither happens.

---

## 4. The Paradigm Fit Test: Beyond SOUL PASS/FAIL

### The Gap

The skeleton has a SOUL PASS/FAIL gate for research findings (5 binary checks from the
10-line soul checklist). But the full identity is MUCH broader than the 5 soul pieces.
The skeleton has no test for paradigm fit -- whether a research finding is consistent
with the FULL identity (577 lines), not just the soul (5 pieces).

### What the Full Paradigm Includes

| Layer | What It Contains | Current Test | Gap |
|-------|-----------------|--------------|-----|
| Soul Pieces (1-5) | 5 perceptual truths | SOUL PASS/FAIL (10-line checklist) | COVERED |
| ANTI-PHYSICAL Identity | 6 rejection categories, 20/20 SOUL FAIL track record | Partially covered (opacity check, filter check) | 4 categories UNCOVERED in binary gates |
| Transitive Chain | org -> density -> axis | Not tested per-finding | UNCOVERED |
| Fractal Mandate | 5-scale self-similarity | Not tested per-finding | UNCOVERED |
| Unified Phenomenon | Organization IS Density | Not tested per-finding | UNCOVERED |
| Editorial Voice | Unhurried Editor, premium publication, nothing to prove | Not tested per-finding | UNCOVERED |
| Process Identity | Convention-first, research-before-build, incremental provenance | Not tested per-finding | UNCOVERED |

### The Paradigm Fit Test (What Needs to Exist)

After research produces findings AND they pass SOUL PASS/FAIL, apply:

```
PARADIGM FIT TEST (Per Research Finding)

Level 1 — Soul (Already Exists, Binary)
  [ ] border-radius: 0
  [ ] box-shadow: none
  [ ] No filter: drop-shadow
  [ ] No fake depth, gradients, blur
  [ ] Locked palette colors only
  [ ] Font trio only
  [ ] Border weights: 4px left / 3px full / 1px separator
  [ ] opacity === 1.0 on all visual elements

Level 2 — Anti-Physical (NEW, Binary)
  [ ] No decorative depth (card shadows, gradient connectors)
  [ ] No animated z-movement (hover lift, scale, perspective, 3D transforms)
  [ ] No rounded shapes implying physical objects
  [ ] No gradients suggesting light/material interaction
  [ ] No traffic-light color semantics (red/amber/green material signals)
  [ ] No parallax or z-space layering

Level 3 — Chain Coherence (NEW, Semi-Binary)
  [ ] Does this axis technique SERVE the org-density pairing for its AD? (YES/NO)
  [ ] Can this axis pattern be traced through density to organization? (YES/NO)
  [ ] Does this technique exhibit fractal properties at >= 3 of 5 scales? (YES/PARTIAL/NO)

Level 4 — Editorial Identity (NEW, Judgment — FRESH-EYES ONLY)
  [ ] Does this feel like it belongs in a premium editorial publication?
  [ ] Does this communicate confident restraint?
  [ ] Would this be distinguishable from a generic web layout?
```

### GAP-IC-04: No Paradigm Fit Test Beyond Soul

The skeleton's binary gates test soul compliance but not broader paradigm fit. Research
that passes soul but violates chain coherence (e.g., an axis pattern that works but
doesn't serve org-density) would be applied uncritically.

**Remediation:** Extend the per-finding evaluation to include Levels 2-4 above. Levels
1-2 are binary (evaluator can apply). Level 3 is semi-binary (evaluator can apply with
guidance). Level 4 is judgment (ONLY Fresh-Eyes can apply, post-build).

---

## 5. v1.1 -> v2 Evolution Mechanism: The Decision Process Gap

### The Gap

The skeleton's Section 6.2 lists WHAT changes in v2 for each v1.1 section (e.g., "Add
axis identity statement to WHO WE ARE"). But it never describes HOW the changes get
determined. WHO decides what the axis identity statement should say? Based on WHAT
evidence? With what THRESHOLD of confidence?

### The Current v1.1 -> v2 Process (As Described)

```
1. All 6 ADs built, audited, fixed
2. Identity Scribe reads v1.1 + all AD-F findings + AD-SYNTHESIS + audit results
3. For each v1.1 section, determine what changes
4. Write v2 as COMPLETE document
5. v2 must be standalone (any agent reading ONLY v2 can make consistent decisions)
```

### What's Missing: The Determination Protocol

The Scribe is told to "determine what changes" but given no criteria for determination.
Here are the specific decisions that need a protocol:

**Decision 1: Does axis add to the identity statement or replace part of it?**

v1.1's identity statement (Section 8) says: "Organization IS density. This is not a
metaphor." If AD discovers axis IS the same phenomenon too (3-way unification), the
statement becomes "Organization IS density IS axis." But if axis is partially
independent, the statement needs nuance. The Scribe needs criteria:

```
IF all 6 ADs confirm axis serves unified org-density phenomenon
  -> EXTEND: "Organization IS density IS axis"
ELSE IF 4-5 ADs confirm, 1-2 show independence
  -> NUANCE: "Organization IS density. Axis SERVES org-density for [patterns]
     but adds independent information for [patterns]"
ELSE IF 3 or fewer confirm
  -> CHALLENGE: "The transitive chain holds for density -> org but axis
     introduces a genuinely new dimension. The chain is org -> density,
     and separately, axis."
```

**Decision 2: What evidence threshold elevates a finding to identity status?**

Not every AD-F finding belongs in the identity document. OD-F-005 ("Organization IS
Density") made it because it was the META-PATTERN across all 6 ODs. But OD-F-004
(chapter dividers as breathing zones) did not make it into the identity statement
despite being valid. The criteria for identity elevation:

```
IDENTITY ELEVATION CRITERIA:
1. CROSS-AD VALIDATION: The finding appears in >= 4 of 6 AD explorations
2. IDENTITY IMPACT: The finding changes HOW YOU THINK about the system,
   not just how you BUILD within it
3. NON-OBVIOUS: The finding was not predicted by the pre-existing identity
4. IRREVERSIBILITY: Once discovered, it cannot be unseen (same criterion as soul pieces)

If a finding meets ALL 4: INCLUDE in identity statement
If a finding meets 2-3: INCLUDE in "WHAT WE'VE LEARNED" table only
If a finding meets 0-1: INCLUDE in AD-outbound-findings only (not identity)
```

**Decision 3: How does the Scribe handle contradictions between identity and AD findings?**

If AD-F findings contradict v1.1 statements, the Scribe needs a rule:

```
IF contradiction is with a soul piece -> Soul piece wins. AD finding
   is documented as "CONSTRAINED BY Soul Piece #N"
IF contradiction is with an empirical finding (OD-F-005) -> Document BOTH
   the original finding and the AD counterevidence. DO NOT resolve in v2.
   Flag for CD to investigate further.
IF contradiction is with a process pattern -> AD finding wins if it
   produced measurably better outcomes (score, compliance, audit findings)
```

### GAP-IC-05: No Determination Protocol for v2 Decisions

The skeleton prescribes the STRUCTURE of v2 but not the REASONING for what goes in it.
The Identity Scribe is expected to make high-stakes decisions (what's in the identity
statement? what gets elevated? how are contradictions handled?) without criteria.

**Remediation:** Add an "Identity Scribe Decision Protocol" with the three decision
frameworks above. The protocol should be embedded in the Scribe's agent prompt.

---

## 6. Open Question Resolution: The Missing Evidence Standard

### The Gap

v1.1 has 6 open questions (Section 7). The skeleton maps them to AD explorations
(Section 6.3). But the skeleton never defines WHAT CONSTITUTES an answer. When is a
question "answered"? Who decides? Based on what evidence standard?

### The 6 Open Questions and Their Evidence Gaps

| # | Open Question | Skeleton's AD Test | Missing: Evidence Standard |
|---|---------------|-------------------|---------------------------|
| 1 | 4px/3px/1px gap asymmetry | AD-004 Spiral + AD-006 Compound testing | What does "accommodates" mean? 0 visual glitches? Auditor approval? Score >= 32? |
| 2 | Quintuple Equivalence (is navigation a scale?) | AD-006 testing 6th member | What does "testing" mean? If AD-006 demonstrates axis at navigation scale, does that prove equivalence? What if it demonstrates axis but NOT at navigation scale? |
| 3 | Semi-transparent violations | Binary rgba/opacity sweep on all 6 ADs | This one IS binary. ANSWERED when 0 rgba < 1.0 across all ADs. Clear evidence standard. |
| 4 | WAVE self-documentation | AD-005 Choreography as natural test | What counts as "self-documentation"? If AD-005 has a sidebar showing axis transitions in real time, is that sufficient? If it only shows axis TYPE without real-time state, is that partial? |
| 5 | R-2 at 0% | AD consumes R-2 (25 SOUL PASS, 2 SOUL FAIL) | ANSWERED when >= 18/25 R-2 findings have planned AD targets (per Gate 0-10). Clear threshold. |
| 6 | Org implies axis (transitive chain) | AD's CORE task. 6 explorations validate chain. | What does "validates" mean? All 6 confirm? 5/6? Each AD shows axis SERVES org-density? What if 3 confirm and 3 show independence? |

### The Evidence Standard That Needs to Exist

```
OPEN QUESTION RESOLUTION PROTOCOL

When: After all 6 ADs are built, audited, and fixed. Before v2 identity is written.

Who decides: The Lead, informed by:
  - Builder reports (per-AD)
  - Audit findings (visual + structural + fresh-eyes)
  - Weaver cross-references
  - AD-F findings

Evidence standard per question:

Q1 (Border asymmetry): ANSWERED when:
  - AD-004 and AD-006 both use the 4px/3px/1px gradient
  - Visual audit shows no perceptible gap at both 1440px and 768px
  - Score >= 32 on both ADs (confirming gradient doesn't hurt quality)
  Possible answers: "Accommodates" | "Requires dedicated semantic rule" | "Inconclusive"

Q2 (Quintuple Equivalence): ANSWERED when:
  - AD-006 either demonstrates or fails to demonstrate axis at navigation scale
  - If demonstrated: quintuple equivalence confirmed (org=density=disclosure=fractal=navigation=axis)
  - If not: axis is parallel to, not member of, the equivalence chain
  - Evidence: specific HTML elements in AD-006 that show axis at navigation scale
  Possible answers: "Sextuple confirmed" | "Axis parallel, not member" | "Inconclusive"

Q3 (Semi-transparent): ANSWERED when:
  - grep -c 'rgba\|opacity' across all 6 ADs returns 0 problematic instances
  - Structural audit confirms opacity === 1.0 on all visual elements
  Possible answers: "0 violations (RESOLVED)" | "N violations found (AUDIT GAP PERSISTS)"

Q4 (WAVE self-documentation): ANSWERED when:
  - AD-005 contains a visual mechanism that makes axis transitions visible to the reader
  - The mechanism is assessed by Fresh-Eyes as "I can see what axis pattern is active"
  Possible answers: "Self-documenting" | "Partially visible" | "Not self-documenting"

Q5 (R-2 consumption): ANSWERED when:
  - >= 18/25 R-2 findings have planned AD targets (Gate 0-10)
  - Post-build: actual application rate measured
  Possible answers: "N/25 consumed (target met/not met)"

Q6 (Transitive chain): ANSWERED when:
  - Each AD has explicit Chain Validation section in its Research Application Record
  - Each section states: "This AD's axis choice [SERVES/IS INDEPENDENT OF] the
    org-density pairing [name]"
  - Aggregate: N/6 confirm chain, M/6 show independence
  Possible answers: "6/6 confirmed (3-way unification)" | "N/6 confirmed, M/6
    independent (partial chain)" | "< 3/6 confirmed (chain challenged)"
```

### GAP-IC-06: No Evidence Standard for Open Question Resolution

The skeleton maps questions to tests but doesn't define what counts as an answer.
Without evidence standards, the Lead must make subjective calls about when questions
are "resolved." This is a judgment rule, which (per the metacognition analysis) achieves
~0% compliance. Binary evidence standards achieve 100%.

**Remediation:** Add the evidence standard table above to the skeleton. Each open
question gets: trigger (when is it evaluated), evidence (what proves it), possible
answers (enumerated), and who decides (always Lead, based on specific evidence).

---

## 7. Identity Continuity Across Compaction: The Delta Sufficiency Problem

### The Gap

The skeleton says identity evolves via deltas (10-15 lines each, Section 4.6) and
that the Lead recovery protocol (Section 10.2) reads "identity-delta-ad-wave{N}.md
(latest)." But are deltas SUFFICIENT for identity recovery?

### The Problem with Delta-Only Recovery

Consider this scenario:

```
Wave 1A builds AD-001 + AD-002
  -> Lead writes identity-delta-ad-wave1A.md (15 lines)
  -> Delta says: "Z-pattern confirmed as flat-compatible. F-pattern CRESCENDO
     serves vertical scanning without depth cues. Open: does Z-pattern exhibit
     fractal self-similarity at component scale?"

[Lead compacts]

Lead re-reads delta.
Question: Does the Lead now know:
  1. What the full identity state is? NO. The delta is 15 lines. v1.1 is 577 lines.
  2. What was in the research packages? NO.
  3. What constraints are active? PARTIALLY. Only if the delta mentions them.
  4. What the open questions are? NO. Only the delta's new question, not v1.1's 6.
  5. What soul pieces to enforce? NO. Not in the delta.
```

### The Sufficiency Analysis

| Recovery Need | In Delta? | In v1.1? | In State File? | Recovery Source |
|---------------|-----------|----------|----------------|----------------|
| Current phase/wave | No | No | YES (AD-BUILD-STATE.md) | State file |
| Active soul constraints | No | YES | No | v1.1 (must re-read) |
| Active empirical findings | No | YES | No | v1.1 (must re-read) |
| New findings from this wave | YES | No | No | Delta |
| Open questions (v1.1) | No | YES | No | v1.1 (must re-read) |
| New questions from this wave | YES | No | No | Delta |
| Research packages consumed | No | No | No | NOWHERE (gap) |
| Convention spec | No | No | No | AD-CONVENTION-SPEC.md (must re-read) |
| Per-AD findings | No | No | PARTIAL | AD-outbound-findings.md |

### The Root Issue

Deltas are DIFFERENTIAL, not CUMULATIVE. After compaction, the Lead needs the
CUMULATIVE identity state, not just the latest diff. The skeleton's recovery protocol
says "RE-READ identity-delta-ad-wave{N}.md (latest)" but should say "RE-READ
ACCUMULATED-IDENTITY-v1.1.md + ALL identity deltas written so far."

But even that is expensive. After 3 waves, the Lead must read: v1.1 (577 lines) +
delta1A (15 lines) + delta1B (15 lines) + delta1C (15 lines) = 622 lines just for
identity. Plus AD-BUILD-STATE.md, plus _ad-execution/CLAUDE.md, plus TaskList. That's
approaching the very context budget the deltas were designed to save.

### GAP-IC-07: Delta-Only Recovery is Insufficient; Cumulative Snapshot Needed

The skeleton's recovery protocol under-specifies identity recovery. Deltas provide
incremental knowledge but not cumulative state.

**Remediation:** Two options:

**Option A: Cumulative Identity Checkpoint (Recommended)**
After each wave, the Lead writes a CUMULATIVE identity checkpoint (not just a delta).
This is a 50-100 line document that captures the CURRENT state of all identity beliefs:
- Which soul pieces are confirmed
- Which empirical findings are confirmed/challenged
- Current chain status (confirmed/partially/challenged)
- Active open questions (resolved ones removed, new ones added)
- Key constraints for the next wave

This replaces reading v1.1 + all deltas after compaction. It's larger than a delta
(100 lines vs 15 lines) but much smaller than v1.1 + all deltas (100 vs 622).

**Option B: Running v2 Draft**
Instead of deltas, maintain a running draft of ACCUMULATED-IDENTITY-v2.md that gets
updated after each wave. After compaction, the Lead reads the draft v2 (growing from
~100 lines at start to ~700 lines at end). This is the most accurate but highest-cost
approach.

**Recommendation:** Option A. The 50-100 line cumulative checkpoint is the right
trade-off between accuracy and context cost. The deltas still get written (as an
append-only log) but the checkpoint is what the Lead actually reads after compaction.

---

## 8. Cross-Cutting Analysis: The Identity-Research Cycle Architecture

### What the Skeleton Describes (Current)

```
Identity v1.1 ─────────────────────────────────────────────────────────────>
    |                                                                      |
    v                                                                      v
  Wave 0                                                              v2 Written
  (Research)                                                        (End of AD)
    |                                                                      ^
    v                                                                      |
  Research ── packages ──> Wave 1A ── delta ──> Wave 1B ── delta ──> Wave 1C
  Gate                     Build       1A       Build       1B       Build
```

This is a LINEAR flow. Identity enters at Wave 0, evolves via deltas between waves,
and v2 is written at the end. Research is consumed by builders but never loops back
to modify the identity input for future builders.

### What the Architecture Should Be (Proposed)

```
Identity v1.1 ─── FILTER ──> Research Gate ─── FILTER ──> Research Packages
    |                |              |                            |
    v                v              v                            v
  Constraint    Identity       R-4/R-2/EXT                  Per-AD
  Map           Dosage         Evaluated                    Filtered
    |           per role       (PASS/FAIL/                  Packages
    |               |          CHALLENGE)                       |
    v               v              |                            v
  Wave 1A ─── Findings ──> PARADIGM FIT ──> Validated ──> Delta 1A
  Build            |       TEST                Findings        |
                   |           |                               v
                   v           v                    Cumulative
              CHALLENGE   Identity                  Checkpoint
              Findings    Checkpoint                    1A
                   |       Updated                      |
                   v           |                        v
              Decision         v                  Wave 1B
              Tree         Research                Build
              Applied      Packages               (reads
                   |       MODIFIED                checkpoint,
                   v       for Wave 1B             not v1.1)
              Identity         |                        |
              Updated          v                        v
                          Wave 1B ─── ... ──────> Delta 1B
```

### Key Differences from Current Skeleton

1. **Identity FILTERS research** (not just informs it). The constraint map from
   Gap 1 acts as a pre-filter on all research before it reaches builders.

2. **Research CHALLENGES identity** (not just confirms it). The decision tree from
   Gap 3 processes challenge findings through a structured protocol.

3. **Identity dosage is role-specific** (not one-size-fits-all). The dosage matrix
   from Gap 2 ensures each agent gets the right slice.

4. **Paradigm fit extends beyond soul** (4-level test). The paradigm fit test from
   Gap 4 catches violations that soul checks miss.

5. **Cumulative checkpoints replace delta-only recovery** (100 lines vs 622 lines).
   The checkpoint from Gap 7 provides efficient post-compaction recovery.

6. **Open questions have evidence standards** (not just test mappings). The evidence
   standards from Gap 6 turn subjective judgments into binary assessments.

7. **v2 decisions follow a determination protocol** (not Scribe judgment). The
   decision frameworks from Gap 5 constrain the Scribe's synthesis.

---

## 9. How Identity Was Actually Used in OD (Empirical Evidence)

### The OD Precedent

Reading OD-SYNTHESIS.md and OD-outbound-findings.md reveals how identity actually
functioned during OD:

1. **v1 was written DURING OD build** (line 67 of OD-SYNTHESIS.md: "ACCUMULATED-IDENTITY-v1.md |
   Identity | 539 lines | Full inherited identity" as consumed input). This means the
   identity document was both INPUT to and OUTPUT of OD. The skeleton for AD correctly
   separates these: v1.1 is input, v2 is output.

2. **Identity evolution happened implicitly, not via deltas.** OD did not produce
   formal identity deltas between explorations. Instead, v1 was generated after the
   fact during the OD build, and v1.1 was generated during re-enrichment. The skeleton's
   delta mechanism is a NEW protocol not yet tested.

3. **Identity was not used as a research filter.** The OD R-1 evaluation did not run
   findings through an identity constraint map. The 78.6% R-1 application rate was
   determined by relevance to OD topics, not by identity alignment. This is exactly
   the gap the skeleton perpetuates.

4. **The 2px epidemic proves reactive identity enforcement fails.** 108 CSS declarations
   with 2px borders were created DESPITE Rule 5 ("1px borders signal uncertainty").
   The rule existed in identity but was not ENFORCED at the research/build input stage.
   It was caught later by audit (reactive). This is the clearest evidence that identity
   must be proactively injected into research filtering, not just builder prompts.

5. **Convention spec was created AFTER OD build, not before.** OD-CONVENTION-SPEC.md
   was created during re-enrichment (Wave 0), applied retroactively. The skeleton
   correctly addresses this by mandating convention-before-build. But the identity-as-
   filter gap persists.

### Lessons for AD

| OD Experience | AD Implication |
|---------------|----------------|
| No formal identity deltas between OD explorations | AD's delta mechanism is UNTESTED. Plan for delta failures. |
| Identity not used as research filter | AD must add identity-constraint filtering to research evaluation. |
| 2px epidemic from unenforced identity constraint | AD must enforce ALL identity constraints at research gate, not just soul pieces. |
| Convention spec retroactive | AD correctly mandates convention-first. Apply same logic to identity filtering. |
| v1 generated during build (mixed input/output) | AD correctly separates input (v1.1) from output (v2). Preserve this separation. |

---

## 10. Priority-Ranked Gap Summary

| Rank | Gap ID | Gap Description | Impact if Unresolved | Effort to Fix |
|------|--------|-----------------|----------------------|---------------|
| 1 | GAP-IC-03 | No decision tree for identity-challenging research | Confirmation bias or novelty bias on critical chain findings | MEDIUM (design tree, embed in protocol) |
| 2 | GAP-IC-01 | No identity-constraint map for research filtering | Identity-violating research reaches builders, causing reactive fixes | MEDIUM (create map, add to R-4 evaluation) |
| 3 | GAP-IC-05 | No determination protocol for v2 decisions | Scribe makes unsupported high-stakes identity decisions | MEDIUM (define criteria, embed in Scribe prompt) |
| 4 | GAP-IC-04 | No paradigm fit test beyond soul | Research passes soul but violates chain, editorial identity | LOW (extend existing checklist) |
| 5 | GAP-IC-06 | No evidence standard for open question resolution | Questions declared "answered" without sufficient evidence | LOW (add evidence table) |
| 6 | GAP-IC-07 | Delta-only recovery insufficient | Lead loses identity state after compaction | LOW (add cumulative checkpoint) |
| 7 | GAP-IC-02 | No identity dosage matrix per role | Agents receive too much or too little identity context | LOW (create matrix, Convention Agent curates) |

---

## 11. Recommendations for Skeleton Revision

### Must-Add Documents

1. **AD-IDENTITY-CHALLENGE-PROTOCOL.md** (~100 lines) — The decision tree for
   identity-challenging research. Covers soul piece challenges, derived constraint
   challenges, process challenges, and empirical claim challenges. Referenced by
   R-4 Evaluator, Lead, and Identity Scribe.

2. **Identity-Constraint Map** (~30 lines) — Table mapping each v1.1 identity statement
   to its research constraint and binary gate. Embedded in R-4 Evaluator prompt.

3. **Identity Scribe Decision Protocol** (~50 lines) — Criteria for v2 decisions:
   identity elevation criteria, contradiction handling, evidence thresholds.
   Embedded in Identity Scribe prompt.

### Must-Modify Sections

1. **Section 4.6 (Generative Loop):** Add cumulative checkpoint alongside deltas.
   Change recovery protocol to read checkpoint, not delta.

2. **Section 7.1 (R-4 Digestion):** Add identity-constraint filtering pass. Each
   finding gets PASS/FAIL/CHALLENGE classification against identity.

3. **Section 6.3 (Open Question Resolution):** Add evidence standards per question.
   Change from "AD answers through [test]" to "AD answers when [evidence criterion met]."

4. **Section 11 (Prompt Design):** Add Identity Dosage Matrix. Each role gets a
   specified slice of identity, not the full document.

5. **Section 10.2 (Lead Recovery):** Change from "RE-READ identity-delta-ad-wave{N}.md
   (latest)" to "RE-READ identity-checkpoint-ad-wave{N}.md (cumulative)."

### Must-Not-Change

- The delta mechanism itself (keep as append-only log alongside checkpoints)
- The v1.1 -> v2 structural mapping (Section 6.2 is correct about WHAT changes)
- The soul checklist (10 lines, proven effective)
- The consumption order (Section 6.1 is correct)
- The finding ID reserved ranges (Section 3.3 prevents collisions)

---

## End of Analysis

**Total gaps identified:** 7 (3 HIGH impact, 4 LOW-MEDIUM impact)
**Core insight:** The skeleton treats identity as a ONE-WAY input (identity -> builders)
when it should be a BIDIRECTIONAL cycle (identity <-> research <-> build <-> identity).
The missing mechanisms are: filtering (identity constrains research), challenge handling
(research contests identity), determination protocols (how changes to identity get
decided), and cumulative recovery (how identity state survives compaction).

**The deepest gap:** GAP-IC-03 (no decision tree for challenging research) because AD's
CORE task is testing the transitive chain. If the chain is challenged, the entire
identity narrative may need revision. Without a structured protocol for handling that
challenge, the outcome depends on the Lead's ad hoc judgment -- and the metacognition
analysis proved that judgment rules achieve ~0% compliance.
