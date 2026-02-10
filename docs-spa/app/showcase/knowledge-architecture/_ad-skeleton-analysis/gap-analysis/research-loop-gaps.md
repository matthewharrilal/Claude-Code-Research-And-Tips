# Research Integration Feedback Loop: Gap Analysis
## What the AD Skeleton Is Missing About Identity-Research-Paradigm Circulation

**Analyst:** research-loop-analyst
**Date:** 2026-02-09
**Sources Consulted:** ad-skeleton-synthesis.md (Sections 4/6/7), ad-skeleton-research.md (654 lines), ad-skeleton-enrichment.md (605 lines), ACCUMULATED-IDENTITY-v1.1.md (577 lines), RESEARCH-ACTIVE.md (150+ lines), EXT-RESEARCH-REGISTRY.md (100 lines), r2-evaluation.md (100 lines), OD-SYNTHESIS.md (100 lines), PIPELINE-MANIFEST.md (100 lines), HANDOFF-OD-TO-AD.md (80 lines), identity-delta-wave1.md, identity-delta-wave2.md, identity-delta-wave3.md
**Target Output File:** /tmp/ad-gap-team/research-loop-gaps.md

---

## EXECUTIVE SUMMARY

The AD skeleton describes research as a BUILD INPUT and identity as a CONSTRAINT. It treats them as two independent streams that converge at the builder's desk. But the actual OD re-enrichment history reveals something far more powerful and far more fragile: a **circular refinement loop** where identity guides research, research validates (or challenges) identity, and the resolution feeds the next wave's identity delta. The skeleton captures the STRUCTURE of this loop (Section 4.6 "Generative Identity Loop") but misses:

1. **The selection mechanism** -- how identity PRIORITIZES which of 192 R-4 findings matter most
2. **The validation-back channel** -- how research discoveries get TESTED against the accumulated paradigm
3. **The challenge protocol** -- what happens when research CONTRADICTS identity
4. **The R-2 structural failure** -- why 0% consumption persisted for 3 stages despite being flagged
5. **The EXT commissioning guidance** -- how identity shapes WHAT gets researched, not just what passes the soul test

These are not minor gaps. They are the difference between a pipeline that applies research mechanically and one that LEARNS.

---

## 1. THE MISSING FEEDBACK LOOP: Identity as Research Prioritizer

### What the Skeleton Says

Skeleton Section 4.2 ("Research-as-Build-Input"):
> "Wave 0 produces... 6 research packages (one per AD, with chain traversal + EXT-AXIS-* + R-4/R-2 applicable subset)"

Skeleton Section 7.1 (R-4 Evaluation Protocol):
> "Read all 192 R-4 findings, categorize by AD exploration applicability, soul-check each finding"

The skeleton treats the R-4 evaluator as a CLASSIFIER: read 192 findings, mark each PASS/FAIL/APPLICABLE. The evaluation is presented as a flat sweep where all 192 findings are treated with equal initial weight.

### What's Actually Missing

**Identity should WEIGHT the evaluation.** ACCUMULATED-IDENTITY-v1.1 contains specific learned principles that should determine which findings get HIGH priority vs LOW:

| Identity Principle | Research Prioritization Implication | Skeleton Addresses? |
|-------------------|------------------------------------|--------------------|
| ANTI-PHYSICAL (20/20 SOUL FAILs) | Any R-4 finding involving depth, parallax, shadow, animation: pre-emptively LOW priority -- will almost certainly SOUL FAIL | NO -- evaluator treats all 192 equally |
| DD-F-006 fractal at 5 scales | R-4 findings demonstrating multi-scale self-similarity: HIGH priority | NO -- fractal priority not specified |
| OD-F-005 org=density | R-4 findings that treat axis as separable from org/density: LOWER priority (they fight the transitive chain) | NO -- evaluator checks soul gates but not paradigm coherence |
| OD-F-FL-001 axis preferences | R-4 findings aligning with natural axis preferences per org pattern: HIGHER priority for their target AD | PARTIAL -- the mapping table exists but priority weighting doesn't |
| "Bold minimalism 2026" (EXT-CONV-011) | Contemporary axis trends aligning with editorial minimalism: ELEVATED priority | NO |
| Compound density (OD-F-008) | R-4 findings about combining axis patterns: ELEVATED priority especially for AD-006 | NO |

**The fix:** The R-4 evaluator prompt should include an IDENTITY-WEIGHTED PRIORITY MATRIX that explicitly elevates findings aligned with identity and de-prioritizes findings that the identity's history predicts will fail. The evaluator doesn't just classify -- they RANK.

### Proposed Addition to Skeleton Section 7.1

```markdown
### 1.7 Identity-Weighted Priority Assessment

The R-4 evaluator does NOT evaluate all 192 findings with equal weight.
After soul-testing each finding, apply identity-weighted priority:

| Weight Factor | Priority Modifier | Source |
|--------------|-------------------|--------|
| Multi-scale (fractal) axis pattern | +2 priority levels | DD-F-006 |
| Aligns with natural axis preference (OD-F-FL-001) | +1 priority level | OD-F-FL-001 |
| Demonstrates org=density=axis transitive chain | +2 priority levels | OD-F-005 + DD-F-012 |
| Involves depth/shadow/animation/parallax | -3 priority levels (likely SOUL FAIL) | ANTI-PHYSICAL identity |
| Demonstrates compound pattern combination | +1 priority level | OD-F-008 |
| Validated by 2026 editorial minimalism trends | +1 priority level | EXT-CONV-011 |
| Fights density pattern serving | -2 priority levels | DD-F-010 |

The resulting priority (HIGH/MEDIUM/LOW) determines order of application by builders.
Builders apply HIGH-priority findings first. If context budget exhausted,
LOW-priority findings can be deferred without FAIL.
```

---

## 2. RESEARCH -> IDENTITY VALIDATION: The Missing Back-Channel

### What the Skeleton Says

Skeleton Section 4.6 ("Generative Identity Loop"):
> "Identity v1.1 -> Wave 1A builds -> Lead writes identity-delta-ad-wave1A"

Skeleton Section 6.2 (v1.1 -> v2 Extension):
> The v2 document extends v1.1 with axis findings.

The skeleton describes identity ACCUMULATION: each wave adds discoveries to the identity. But it does not describe identity VALIDATION: the mechanism by which research discoveries are TESTED against the accumulated paradigm before being integrated.

### What Actually Happened in OD (The Proof It Matters)

The identity delta documents reveal that OD's generative loop was not just accumulative -- it was **dialectical**. Each wave posed forward questions that the next wave's research explicitly tested:

**Wave 1 posed:** "The ANTI-PHYSICAL identity pattern -- does it extend to OD-003/005?"
**Wave 2 answered:** "YES. 7/7 additional SOUL FAILs continue the pattern. Now 13/13."
**Wave 2 posed:** "Does geological metaphor imply physical depth?"
**Wave 3 answered:** "NO -- border weight encodes geological depth through flat 2D signals."

This is not just research expanding identity. This is research **TESTING A HYPOTHESIS** that identity poses. The hypothesis ("ANTI-PHYSICAL extends to all ODs") was confirmable or falsifiable. It happened to confirm. But the skeleton has no protocol for what happens if research DISCONFIRMS.

### What's Missing: The Challenge Protocol

The skeleton needs a formal CHALLENGE protocol for when research findings contradict identity:

```
IDENTITY-RESEARCH CHALLENGE PROTOCOL

When a Wave N builder or researcher discovers something that CONTRADICTS
accumulated identity:

1. DOCUMENT the contradiction in the builder's DISCOVERIES section
   (the skeleton correctly requires this)

2. CLASSIFY the contradiction:
   - CLASS A: Contradicts a SOUL PIECE (e.g., rounded corners work better
     for axis transitions). Resolution: SOUL PIECES ARE IMMUTABLE.
     Document as negative finding. Do NOT apply.
   - CLASS B: Contradicts a PROCESS FINDING (e.g., OD-F-005 doesn't
     extend to axis -- axis IS separable from org/density).
     Resolution: ESCALATE TO LEAD. Lead must decide:
     (a) The finding is wrong (document why)
     (b) The process finding needs refinement (update identity delta)
     (c) The finding reveals a genuine new dimension (major identity evolution)
   - CLASS C: Contradicts an AGENT-AUTHORED CONVENTION (T2 assertion).
     Resolution: ALLOWED. T2 assertions are conventions, not discoveries.
     They can be revised with documented rationale.

3. LOG in identity-delta-ad-wave{N}.md under new section:
   "CHALLENGES TO IDENTITY" (separate from "What Surprised")

4. Weaver tracks challenge resolution across waves
```

The skeleton's identity delta template (Section 4.6) says "Each delta MUST contain >= 1 specific new question." But it doesn't distinguish between EXTENDING questions ("does the pattern continue?") and CHALLENGING questions ("is this identity claim actually wrong?"). The OD deltas show that both kinds existed:

- Extending: "Should OD-004/006 also make density visible?" (Wave 2, Q3)
- Challenging: "Does geological metaphor imply physical depth?" (Wave 2, Q1) -- this could have BROKEN the identity

The skeleton must acknowledge that challenge questions are the more valuable kind.

---

## 3. SUBAGENT RESEARCH EXPANSION: Identity as GUIDE vs CONSTRAINT

### What the Skeleton Says

ad-skeleton-research.md Section 3.6 ("How Agents Use Prior Learnings to DIRECT Expansion"):

> "The accumulated identity is not merely a CONSTRAINT document -- it is a GUIDE."

This is the RIGHT insight. The table in Section 3.6 maps specific prior learnings to research directions. But the mapping is STATIC -- it's listed once and never updated.

### What's Missing: Dynamic Guidance Evolution

In OD's actual re-enrichment, the identity EVOLVED between waves and that evolution CHANGED what researchers looked for:

**Wave 1:** Researchers used base identity (v1) to generate queries. Found semi-transparent opacity violation pattern.
**Wave 2:** Researchers used identity + Wave 1 delta. The new opacity binary rule CHANGED what Wave 2 researchers specifically checked for: "does the offset move?"
**Wave 3:** Researchers used identity + deltas 1+2. The new "ANTI-PHYSICAL" label CHANGED query generation: researchers specifically searched for techniques that achieve 3D metaphors through 2D signals.

Each wave's discoveries REFINED the lens for the next wave's researchers. The skeleton captures the identity delta mechanism but doesn't formalize the FEEDBACK from delta to researcher query generation.

### Proposed Addition: Dynamic Research Guidance Protocol

```markdown
### 3.7 Dynamic Guidance Update (Per-Wave)

After Lead writes identity-delta-ad-wave{N}.md, the delta MUST include:

SECTION: "REVISED RESEARCH GUIDANCE FOR WAVE {N+1}"

This section contains 2-3 SPECIFIC updates to the research query generation
protocol based on THIS wave's discoveries:

| Wave N Discovery | Wave N+1 Research Directive |
|-----------------|---------------------------|
| [specific finding] | "Search specifically for [X]. Previous guidance said [Y]; now search for [Z] instead." |

EXAMPLE from OD Wave 1 -> Wave 2:
| Discovery: opacity < 1.0 on offsets = shadow illusion | Directive: "For AD-003/004, when evaluating grid axis patterns, specifically test: does any axis transition technique use opacity < 1.0? If yes, SOUL FAIL regardless of visual subtlety." |

This prevents the "static guidance" problem where researchers in Wave 3
use the same search terms as Wave 1 despite 2 waves of evolved understanding.
```

### How Identity Should Constrain EXPLORATION vs APPLICATION

The skeleton conflates two different ways identity constrains research:

1. **Identity constrains WHAT GETS APPLIED** (the soul test -- skeleton handles this well)
2. **Identity constrains WHAT GETS EXPLORED** (query generation -- skeleton barely handles this)

These are fundamentally different. Consider:

- CONSTRAINT on application: "R4-045 (CSS 3D transforms for axis) SOUL FAILS because transforms imply z-depth." This is a FILTER.
- CONSTRAINT on exploration: "Because the identity is ANTI-PHYSICAL, don't search for '3D CSS axis transitions' -- search for 'flat 2D axis signals for spatial hierarchy.'" This is a LENS.

The filter is binary (PASS/FAIL). The lens is generative (it shapes what you even look for). The skeleton has the filter (5-gate soul test) but not the lens.

### Proposed Addition: Identity Lens Document

```markdown
### IDENTITY LENS (Generated from ACCUMULATED-IDENTITY-v1.1 for AD researchers)

DO search for:
- Flat 2D visual signals for axis hierarchy (border weight, typography scale, spacing)
- Axis patterns that preserve editorial calm (minimal decoration, typography-dominant)
- Grid/layout techniques that work WITHOUT shadows, rounded corners, or animation
- Techniques validated in magazine/editorial contexts (the identity is editorial)
- Multi-scale self-similar axis patterns (DD-F-006 is mandatory at 5 scales)

DO NOT search for (will almost certainly SOUL FAIL):
- Parallax scrolling for axis transitions
- Card shadows or elevation for axis zone hierarchy
- Animated axis transitions (hover lifts, scale transforms, 3D perspective)
- Gradient-based axis zone differentiation
- Rounded container shapes for axis zones
- Color-coding systems using traffic-light semantics

The lens is updated per wave (see Dynamic Guidance Update).
```

---

## 4. THE R-2 STRUCTURAL FAILURE: Why 0% Persisted for 3 Stages

### The Damning Facts

| Stage | R-2 Status | Action Taken | Result |
|-------|-----------|-------------|--------|
| DD | 0% applied | R-2 not designated for DD | Expected |
| OD Build (v1) | 0% applied | R-2 not in builder prompts | Structural failure |
| OD Audit (17 agents) | 0% applied | Audit didn't check R-2 application | Audit gap |
| OD Re-Enrichment (43 agents) | 0% applied (evaluated, not applied) | researcher-1a produced r2-evaluation.md; builders received it but no R-2 citations appear in OD HTML | The evaluation was an output, not a consumed input |
| AD Skeleton | "R-2 >= 72%" | Gate requirement set | TBD |

### What Actually Went Wrong

The r2-evaluation.md produced by researcher-1a during OD re-enrichment Wave 1 is a masterpiece of analysis: 485 lines evaluating all 27 R-2 findings against all 6 ODs with soul tests. But it was produced as a STANDALONE DOCUMENT. It was never integrated into the per-OD research packages that builders actually read.

Look at the file manifest in `_od-reenrichment/CLAUDE.md`:
- `research-package-od-001.md` (264 lines) -- produced by researcher-1a
- `r2-evaluation.md` (485 lines) -- ALSO produced by researcher-1a

These are PARALLEL outputs. The research packages contain EXT-* findings and chain traversal queries. The R-2 evaluation sits alongside them. But the builder prompt for OD-001 says "read research-package-od-001.md" -- it does NOT say "also read r2-evaluation.md." The R-2 evaluation was structurally orphaned from the build pipeline.

### Why the Skeleton Doesn't Fix This

The skeleton says (Section 7.2):
> "r2-evaluation.md from OD re-enrichment already evaluated all 27 R-2 findings. AD re-maps from OD targets to AD targets."

And (Section 4.2):
> "6 research packages (one per AD, with chain traversal + EXT-AXIS-* + R-4/R-2 applicable subset)"

The "+R-4/R-2 applicable subset" is the fix: R-2 findings are EMBEDDED in each research package, not in a separate document. This is structurally correct. But the skeleton doesn't explain WHY this matters or warn against the OD failure mode.

### What's Missing: Structural Integration Guarantee

```markdown
### R-2 STRUCTURAL INTEGRATION GUARANTEE

CRITICAL LESSON FROM OD: R-2 sat at 0% for 3 stages because the evaluation
was a standalone document, not embedded in builder research packages.

AD FIX: Each research-package-ad-{N}.md MUST contain an inline section titled:

## R-2 FINDINGS FOR THIS EXPLORATION (Mandatory Application)

| R2 Finding | Name | Application Guidance for AD-{N} | Priority |
|-----------|------|--------------------------------|----------|

This section is NOT a reference to r2-ad-mapping.md. It is a COPY of the
applicable subset, reformatted for the specific exploration. The builder
should not need to read any file other than their research package.

BINARY GATE: Each research package must contain >= 4 R-2 findings
(per the citation requirements table). If a research package has fewer
than 4 R-2 entries, the package FAILS the gate.

ANTI-ORPHANING RULE: No research evaluation document may exist as a
standalone output. Every evaluation must be CONSUMED by a downstream
document that builders read. If an evaluation document is produced but
not consumed, the evaluation is DARK MATTER.
```

---

## 5. EXT-AXIS-* COMMISSIONING: How Identity Defines WHAT to Research

### What the Skeleton Says

ad-skeleton-research.md Section 3.3 ("Research Query Generation Protocol"):
> "Each EXT-AXIS-* researcher MUST: 1. Read ACCUMULATED-IDENTITY-v1.1.md as GUIDE (not just constraint)"

Section 3.6 provides a table of prior learnings -> research directions. This is a good start.

### What's Missing: Commissioning as Identity Expression

The skeleton treats EXT-AXIS-* commissioning as a process: traverse chain, generate queries, search web, soul-test results. But it doesn't address the deeper question: **what makes one set of search queries better than another?**

In OD, the EXT-* findings that had the highest impact were those whose queries were DERIVED from specific identity tensions:

| High-Impact EXT Finding | Query Derivation | Identity Tension Exploited |
|------------------------|-----------------|---------------------------|
| EXT-CONV-011 (Bold Minimalism 2026) | "Is current design trend direction consistent with KortAI soul?" | Temporal relevance vs timeless authority |
| EXT-NARR-001 (Freytag 5-Act) | "What narrative structure extends 3-act CRESCENDO?" | Story arc completeness vs cognitive load |
| EXT-CREATIVE-010 (Fractal Annotation Layer) | "Can the document annotate its own fractal structure?" | Meta-documentation as density test |
| EXT-SPAT-018 (WAVE Self-Documentation) | "Can the page show its own density in real time?" | Transparency vs editorial authority |

Each of these queries was born from a TENSION in the identity -- a point where two identity principles pull in different directions. The best research doesn't just confirm identity; it RESOLVES tensions that identity leaves open.

### Proposed Addition: Tension-Driven Query Generation

```markdown
### 3.8 Tension-Driven Query Generation

The highest-value EXT-AXIS-* queries arise from identity TENSIONS --
points where two accumulated principles create productive friction.

AD IDENTITY TENSIONS (derived from ACCUMULATED-IDENTITY-v1.1):

| Tension | Principle A | Principle B | Query Template |
|---------|------------|------------|----------------|
| FLAT DEPTH | ANTI-PHYSICAL (no z-depth) | Axis patterns inherently imply spatial hierarchy | "How do [axis type] patterns signal hierarchy through flat 2D means?" |
| EDITORIAL CALM vs SPATIAL ENERGY | Unhurried Editor (restraint) | Axis choreography needs visual movement | "How do editorial/magazine layouts create [axis movement] without animation?" |
| FRACTAL CONSISTENCY vs AXIS VARIATION | DD-F-006 (same rhythm at all scales) | Different axis types need different visual structures | "Can [axis pattern] maintain fractal self-similarity while [varying appropriately]?" |
| SOUL RIGIDITY vs AXIS NOVELTY | 5 soul pieces are immutable | AD explores genuinely new territory | "What [axis technique] is novel AND compatible with sharp edges + flat design?" |
| TRANSITIVE CHAIN vs AXIS INDEPENDENCE | OD-F-005 (org=density) | Is axis a 3rd perspective or independent? | "Does [axis pattern] serve [density-org pairing] or introduce a new dimension?" |

REQUIREMENT: Each EXT-AXIS-* researcher must generate at least 1 query
from the tension table. This ensures research explores the productive
edges of the identity, not just the safe center.
```

---

## 6. THE REFINEMENT CYCLE: Where It Lives (and Barely Does) in the Skeleton

### The Theoretical Cycle

```
Identity v1.1
    |
    v
GUIDES research query generation (identity as lens)
    |
    v
Research discovers new patterns
    |
    v
Patterns either CONFIRM or CHALLENGE identity
    |
    v
Lead writes identity delta (resolution)
    |
    v
Identity v1.1 + delta(s) = evolved identity
    |
    v
Evolved identity GUIDES next wave's research (cycle repeats)
    |
    v
After all waves: ACCUMULATED-IDENTITY v2 (synthesis)
```

### Where the Skeleton Captures This

| Cycle Step | Skeleton Location | Coverage |
|-----------|------------------|----------|
| Identity guides research | Section 3.6 (static table) | 40% -- table exists but no dynamic update mechanism |
| Research discovers patterns | Section 4.6 (identity deltas) | 70% -- deltas capture discoveries but not their identity implications |
| Confirm/challenge | NOWHERE | 0% -- no challenge protocol exists |
| Lead writes delta | Section 4.6 | 80% -- format specified, forward question required |
| Evolved identity guides next wave | Implied but not specified | 20% -- "researchers read prior deltas" but no guidance on HOW deltas change research behavior |
| Final synthesis | Section 6.2 (v2 Extension) | 60% -- sections listed but synthesis METHOD not specified |

**Overall coverage: approximately 45%.** The skeleton captures the ARTIFACTS of the loop (deltas, v2 document, research packages) but not the MECHANISMS (how identity changes research behavior, how challenges are resolved, how the lens evolves).

### What OD Actually Did vs What the Skeleton Specifies

| Mechanism | What OD Did | What Skeleton Specifies |
|-----------|-------------|------------------------|
| Query derivation from identity | Researchers traversed provenance chain and generated queries from specific finding intersections | "Traverse chain, generate 3 queries" (format specified, quality not) |
| Identity-guided soul test | 5-gate test with Gate 4 (density pairing) and Gate 5 (identity tension) | 5-gate test specified (this is well-covered) |
| Discovery documentation | Builders included DISCOVERIES section in reports | "DO include a DISCOVERIES section" (correctly specified) |
| Forward questions | Deltas posed specific questions targeting next wave's ODs | "Each delta MUST contain >= 1 specific new question" (correctly specified but no quality guidance) |
| Challenge resolution | Wave 2's geological-depth question was RESOLVED by Wave 3's border-weight discovery | NO challenge protocol |
| Evolved query guidance | Wave 2 researchers searched specifically for "flat 2D signals for depth metaphor" based on Wave 1's ANTI-PHYSICAL discovery | NO dynamic guidance update mechanism |
| R-2 integration | R-2 evaluated but structurally orphaned from builder inputs | "Research packages include R-2 subset" (structural fix specified, anti-orphaning lesson not) |

---

## 7. R-2 AT 0%: THE STRUCTURAL PATHOLOGY

### Why R-2 Failed (Deep Analysis)

R-2 Creative Layouts has 27 findings. It has been at 0% consumption across DD, OD build, OD audit, and OD re-enrichment -- FOUR opportunities to apply it. The skeleton acknowledges this (Section 7.2: "R-2 has been at 0% across DD and OD -- three full stages without consumption") but doesn't analyze WHY.

The pathology has three layers:

**Layer 1: Designation Gap.** R-2 was designated for "creative layouts" but no stage's primary mission was "creative layouts." DD was density, OD was organization, and both consumed R-1 (documentation patterns) and R-3 (density dimensions) because those aligned with their missions. R-2 fell between stages.

**Layer 2: Evaluation Without Integration.** The OD re-enrichment DID produce r2-evaluation.md (485 lines, comprehensive). But the evaluation was a PARALLEL output to the research packages, not embedded in them. Builders were told to read their research package. The R-2 evaluation was dark matter from the moment it was written.

**Layer 3: No Binary Gate for R-2.** The OD re-enrichment specification had gates for EXT-* application rates but NOT for R-2 application rates. Without a gate, 0% was never caught by any automated check.

### What the Skeleton Gets Right

The skeleton specifies:
- R-2 findings embedded in per-AD research packages (Layer 2 fix)
- R-2 >= 72% binary gate (Layer 3 fix)
- R-2 Re-Mapper agent in Wave 0 (Layer 1 fix)

### What the Skeleton Still Misses

1. **R-2 Re-Mapper agent receives no identity guidance.** The skeleton says the agent "converts OD-mapped R-2 to AD targets." But the OD mapping (from r2-evaluation.md) was against OD patterns. The AD re-mapping needs to consider the TRANSITIVE CHAIN: each R-2 finding should be re-evaluated not just for "which AD applies this" but for "how does this R-2 finding SERVE the org-density-axis identity of AD-{N}?"

2. **No tracking of R-2 findings that CROSS AD boundaries.** R2-005 (Whitespace as Content) and R2-020 (Whitespace for Hierarchy) are marked "ALL" -- applicable to all 6 ADs. But the skeleton's per-AD research packages create 6 independent containers. A finding that applies to ALL should have DIFFERENT application guidance per AD, not the same generic text copied 6 times.

3. **No mechanism for R-2 findings that combine with R-4 findings.** R2-014 (Bento Grid Layout) and R4-016 through R4-028 (Bento Grid Patterns) are obviously related. The skeleton treats R-4 and R-2 as independent streams. There should be a CROSS-REFERENCE section in each research package identifying R-2+R-4 synergies.

### Proposed Addition: R-2 Cross-Integration Protocol

```markdown
### 7.4 R-2 Cross-Integration with R-4

R-2 and R-4 are not independent research streams. Multiple R-2 findings
overlap with R-4 categories:

| R-2 Finding | Related R-4 Category | Integration Approach |
|------------|---------------------|---------------------|
| R2-014 Bento Grid | R4-016 to R4-028 Bento Grid | Unified grid axis specification |
| R2-015 Asymmetric Grid | R4-035 to R4-049 Broken Grid | Unified asymmetric specification |
| R2-019 Typography as Primary | R4-050 to R4-068 Visual Rhythm | Typography IS the axis rhythm |
| R2-025 Scrollytelling | R4-077 to R4-092 Axis Transitions | Scroll-driven axis mechanism |

Each research package MUST include a "R-2/R-4 SYNERGY" section identifying
where R-2 and R-4 findings address the SAME design problem from different
angles. The builder applies the unified recommendation, not two separate ones.
```

---

## 8. THE GENERATIVE LOOP'S REAL POWER (What OD Proved)

### The Three-Wave Evolution

Reading the actual identity delta documents reveals something the skeleton doesn't capture: the generative loop's power comes not from accumulation but from EVOLUTION OF THE QUESTION.

**Wave 1 question style:** "Is [pattern] consistent with [identity]?" (CONFIRMING)
- "Does the ANTI-PHYSICAL identity extend to OD-003/005?"

**Wave 2 question style:** "Given [confirmed pattern], does [harder case] still hold?" (STRESS-TESTING)
- "Does geological metaphor imply physical depth?" (the metaphor itself suggests 3D)

**Wave 3 question style:** "Given [stress-tested pattern], what are the implications?" (EXTENDING)
- "Can the 3-category border system accommodate gradient semantics?"
- "Quintuple Equivalence: is navigation a new member of the equivalence class?"

The questions evolved from CONFIRMING to STRESS-TESTING to EXTENDING. This evolution happened organically in OD because the Lead happened to write good forward questions. But the skeleton doesn't encode this evolution pattern.

### Proposed Addition: Question Evolution Protocol

```markdown
### 4.7 Forward Question Evolution Pattern

Forward questions in identity deltas MUST follow this progression:

Wave 1A delta: CONFIRMING questions
- "Does [identity principle from v1.1] hold in AD-001/002 context?"
- "Is [OD discovery] relevant to axis geometry?"
- Answers expected: YES/NO with evidence

Wave 1B delta: STRESS-TESTING questions
- "Given Wave 1A confirmed [principle], does it hold in [harder case]?"
- "What happens when [principle A] and [principle B] conflict in AD-003/004?"
- Answers expected: resolution of a genuine tension

Wave 1C delta: EXTENDING questions
- "Given [stress-tested principle], what does this imply for [CD/Migration]?"
- "Does AD's axis dimension reveal a new [equivalence/scale/soul piece]?"
- Answers expected: forward-looking implications that shape IDENTITY v2

If a Lead writes a CONFIRMING question in Wave 1C, the question is too safe.
If a Lead writes an EXTENDING question in Wave 1A, the question is premature.
The evolution must match the accumulated evidence.
```

---

## 9. WHAT OD ACTUALLY DID: True Feedback Loop or One-Directional?

### Verdict: OD Had a TRUE Feedback Loop, But It Was Accidental

Evidence of genuine circularity in OD:

1. **Wave 1 discovery -> Wave 2 search terms changed:**
   - Wave 1 discovered: opacity < 1.0 = shadow illusion (binary rule)
   - Wave 2 researchers specifically searched for: "static vs animated offset" techniques
   - This changed the KIND of findings produced, not just the filter applied to them

2. **Wave 2 question -> Wave 3 answer -> identity evolution:**
   - Wave 2 asked: "Does geological metaphor imply physical depth?"
   - Wave 3 answered: "NO -- border weight gradient achieves geological encoding through flat 2D"
   - Identity evolved: "GEOLOGICAL = BORDER WEIGHT, not physical depth"
   - This is a genuine LEARNING that changed the identity document

3. **Wave 3 discovery -> v1.1 identity statement:**
   - The final identity statement in ACCUMULATED-IDENTITY-v1.1 Section 8 contains the sentence: "Even when a metaphor implies three-dimensionality -- geological strata, depth layers, floating islands -- the CSS encoding remains strictly two-dimensional."
   - This sentence exists BECAUSE of the Wave 2-3 dialectic. It was not in v1.

### But It Was Accidental Because:

1. **No protocol mandated the question evolution.** The Lead happened to write good forward questions. A different Lead might have written generic ones.

2. **No protocol required Wave 2 researchers to CHANGE their queries based on Wave 1 deltas.** Researchers "read all prior deltas" (per the enrichment spec) but whether they actually used the deltas to modify their search queries was left to agent judgment -- and we know from the metacognition analysis that judgment rules achieve ~0% compliance.

3. **No protocol detected when the loop BROKE.** R-2 is proof that the loop can break silently. The evaluation was produced, no application happened, and no gate caught it.

### What the Skeleton Must Add to Make the Loop RELIABLE

The skeleton must make the feedback loop BINARY, not judgmental:

```markdown
### FEEDBACK LOOP BINARY ENFORCEMENT

RULE 1: Each identity delta MUST reference >= 1 specific finding from
THIS wave's research packages by EXT-AXIS-* ID. If the delta only
references builder discoveries (not research), the researcher's work
was disconnected from the builder's work. FAIL.

RULE 2: Each Wave N+1 researcher MUST include a section in their research
package titled "DELTA-DERIVED QUERIES" containing >= 1 query that
COULD NOT HAVE BEEN WRITTEN without reading identity-delta-wave{N}.
If this section is missing or contains queries that are indistinguishable
from Wave 1 queries, the feedback loop is broken. FAIL.

RULE 3: Each Wave N+1 builder MUST cite >= 1 finding from Wave N's
identity delta in their HTML comments. If no delta citation appears,
the builder ignored the evolved identity. FAIL.

RULE 4: The final ACCUMULATED-IDENTITY v2 MUST contain >= 3 sentences
that reference specific AD wave discoveries (not just OD findings carried
forward). If v2 is indistinguishable from v1.1 with AD findings appended
at the end, the generative loop did not actually evolve the identity. FAIL.
```

---

## 10. SYNTHESIS: THE FIVE CRITICAL GAPS

Ranked by impact on AD execution quality:

### GAP 1: No Identity-Research Challenge Protocol (CRITICAL)
**What's missing:** What happens when research CONTRADICTS identity. The skeleton assumes all research either passes soul test or fails. But the OD evidence shows the most valuable findings RESOLVED TENSIONS (geological depth via border weight). Without a challenge protocol, AD agents will either (a) reject all tension-generating findings (too conservative) or (b) apply findings without acknowledging the tension (too permissive).
**Fix:** Add CLASS A/B/C challenge protocol (Section 2 above).

### GAP 2: Static Research Guidance That Never Evolves (HIGH)
**What's missing:** The mechanism by which identity deltas CHANGE researcher behavior. The table in ad-skeleton-research.md Section 3.6 is static -- written once, never updated. OD proved that the most valuable research emerged when search queries evolved between waves.
**Fix:** Add Dynamic Research Guidance Protocol requiring each delta to include revised search directives for the next wave (Section 3 above).

### GAP 3: R-2 Structural Orphaning Not Addressed (HIGH)
**What's missing:** An explicit anti-orphaning rule. The skeleton embeds R-2 in research packages (correct structural fix) but doesn't explain WHY or warn against the OD failure mode. Without the warning, future plan implementors might re-orphan R-2 by creating it as a standalone evaluation again.
**Fix:** Add R-2 Structural Integration Guarantee with anti-orphaning rule and R-2/R-4 cross-integration protocol (Sections 4 and 7 above).

### GAP 4: Identity as Lens Not Just Filter (HIGH)
**What's missing:** The distinction between identity constraining what gets APPLIED (filter = soul test, well-specified) vs what gets EXPLORED (lens = query generation, barely specified). The filter is binary (PASS/FAIL). The lens is generative. The skeleton has the filter but not the lens.
**Fix:** Add Identity Lens Document and Tension-Driven Query Generation protocol (Sections 3 and 5 above).

### GAP 5: No Binary Enforcement of the Feedback Loop (MEDIUM)
**What's missing:** Binary rules that DETECT when the feedback loop breaks. In OD, the loop worked accidentally because the Lead wrote good questions. But R-2's 0% proves the loop can break silently. The skeleton's rules are all about artifacts (deltas exist, research packages exist) but not about CONNECTIONS (delta actually changed researcher behavior, researcher output actually reached builder).
**Fix:** Add Feedback Loop Binary Enforcement rules (Section 9 above).

---

## 11. SECONDARY GAPS (Lower Priority)

### GAP 6: Identity-Weighted R-4 Priority (MEDIUM)
The R-4 evaluator treats all 192 findings equally. Identity should weight the evaluation so builders apply identity-aligned findings first.

### GAP 7: Question Evolution Pattern Not Formalized (MEDIUM)
The confirming -> stress-testing -> extending progression in OD's forward questions was accidental. Formalizing it ensures each wave's questions become more sophisticated.

### GAP 8: EXT Commissioning as Identity Tension Exploration (MEDIUM)
The highest-value EXT findings resolved identity tensions. The skeleton should include a tension table for EXT-AXIS-* query generation.

### GAP 9: R-2/R-4 Synergy Detection (LOW)
Multiple R-2 and R-4 findings address the same design problem. Research packages should identify and unify these overlaps.

### GAP 10: Feedback Loop Metrics (LOW)
No way to measure whether the feedback loop is working. Possible metrics: delta-to-query conversion rate, challenge-to-resolution cycle time, research-to-citation pathway length.

---

## APPENDIX A: The Complete Feedback Loop Architecture (Proposed)

```
                    ACCUMULATED IDENTITY v1.1
                           |
                    ┌──────┴──────┐
                    |             |
                LENS           FILTER
           (query gen)      (soul test)
                    |             |
                    v             v
            RESEARCH          EVALUATION
         (EXT-AXIS-*)      (R-4 192 findings)
                    |             |
                    v             v
              RESEARCH PACKAGES
         (per-AD, with R-2 EMBEDDED,
          R-4/R-2 synergies identified,
          tension-derived queries marked)
                    |
                    v
               BUILDERS
         (apply findings, cite in HTML,
          report DISCOVERIES and CHALLENGES)
                    |
                    v
           IDENTITY DELTA
         (surprises, refinements,
          CHALLENGES TO IDENTITY,
          REVISED RESEARCH GUIDANCE,
          forward questions following
          confirm->stress->extend evolution)
                    |
                    v
            EVOLVED IDENTITY
         (v1.1 + delta1 + delta2...)
                    |
         ┌──────────┴──────────┐
         |                     |
    NEXT WAVE              NEXT WAVE
    RESEARCHERS            BUILDERS
    (DELTA-DERIVED         (cite delta
     queries required)      findings)
         |                     |
         v                     v
         └─────────┬───────────┘
                   |
            FEEDBACK LOOP
            BINARY CHECKS
            (4 rules from
             Section 9)
                   |
                   v
         ACCUMULATED-IDENTITY v2
         (>= 3 sentences from
          AD wave discoveries;
          challenge resolutions
          documented; evolved
          understanding, not just
          appended findings)
```

---

## APPENDIX B: Proposed Skeleton Modifications (Summary)

| Skeleton Section | Current | Proposed Addition |
|-----------------|---------|-------------------|
| 4.6 Generative Identity Loop | Format + forward question requirement | Challenge protocol + dynamic guidance update + question evolution pattern |
| 7.1 R-4 Evaluation Protocol | Flat classification of 192 findings | Identity-weighted priority matrix |
| 7.2 R-2 Consumption Plan | Re-mapping from OD to AD targets | Structural integration guarantee + anti-orphaning rule + R-2/R-4 synergy detection |
| 3.6 Prior Learnings table | Static mapping | Dynamic guidance update per wave + identity lens document |
| 3.3 EXT-AXIS-* Commissioning | Chain traversal + query generation | Tension-driven query generation table |
| NEW Section 4.7 | Does not exist | Forward question evolution pattern |
| NEW Section | Does not exist | Identity-Research Challenge Protocol (CLASS A/B/C) |
| NEW Section | Does not exist | Feedback Loop Binary Enforcement (4 rules) |
| 6.2 v2 Extension | Section-by-section extension guide | Requirement for >= 3 AD-discovery sentences; challenge resolution section |

---

**END OF ANALYSIS**
**Total: ~580 lines**
**Top 5 findings: Challenge Protocol (GAP 1), Dynamic Research Guidance (GAP 2), R-2 Anti-Orphaning (GAP 3), Identity as Lens (GAP 4), Feedback Loop Binary Enforcement (GAP 5)**
