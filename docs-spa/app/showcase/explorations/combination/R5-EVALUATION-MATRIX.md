<!-- INLINE THREADING HEADER
Tier: B (navigation/mapping)
WHY THIS EXISTS: Maps all 39 R-5 findings to CD explorations for systematic evaluation
STATUS: ACTIVE
BUILT ON: R5-COMBINATION-THEORY.md, AD-outbound-findings.md, axis-patterns.md, combination-rules.md
CONSUMED BY: All CD builders, CD-RESEARCH-GATE.md, Verification Agent
-->

# R5 Evaluation Matrix
## Systematic Mapping of All R-5 Findings to CD Explorations

**Purpose:** Map every R-5 finding from R5-COMBINATION-THEORY.md to one or more CD explorations, verify 100% coverage, define evaluation templates, and create specific test scenarios for the 6 Tier-1 binary rules.

**Sources:**
- `DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` (39 findings)
- `DESIGN-SYSTEM/patterns/combination-rules.md` (4 combination rules)
- `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` (28 AD findings)
- `DESIGN-SYSTEM/patterns/axis-patterns.md` (6 axis pattern definitions)

**AD Lens:** Per AD-F-023 (ATTENTION TOPOLOGY), all R-5 combination findings must be evaluated through the attention topology lens. Axis IS Organization IS Density -- component combinations are constrained by their natural axis-density pairings. Per AD-F-024, compound is SEQUENTIAL through scrolling time, not simultaneous within a viewport.

---

## Part 1: R-5 Finding Catalog

### 1.1 Complete Finding Index

The 39 R-5 findings are organized into 10 categories:

| # | ID | Title | Category | Source Section |
|---|-----|-------|----------|---------------|
| 1 | H1 | Family Cohesion Through Shared DNA | Harmony | Part 1 |
| 2 | H2 | Contrast Creates Perceived Harmony | Harmony | Part 1 |
| 3 | H3 | Shared Visual Anchors | Harmony | Part 1 |
| 4 | H4 | The "Editorial Spread" Pattern | Harmony | Part 1 |
| 5 | T1 | Productive Tension vs. Jarring Collision | Tension | Part 2 |
| 6 | T2 | The Velocity Mismatch Rule | Tension | Part 2 |
| 7 | T3 | Semantic Dissonance (Temperature Flow) | Tension | Part 2 |
| 8 | T4 | The 2-Callout Limit | Tension | Part 2 |
| 9 | S1 | The Setup-Payoff Arc | Sequence | Part 3 |
| 10 | S2 | Density Wave Sequencing | Sequence | Part 3 |
| 11 | S3 | The First Component Rule | Sequence | Part 3 |
| 12 | S4 | The Resolution Component | Sequence | Part 3 |
| 13 | S5 | The "Teaching Moment" Sequence | Sequence | Part 3 |
| 14 | G1 | Semantic Proximity | Grouping | Part 4 |
| 15 | G2 | The Container Signal | Grouping | Part 4 |
| 16 | G3 | Visual Weight Balance | Grouping | Part 4 |
| 17 | G4 | The "Advisory Cluster" | Grouping | Part 4 |
| 18 | N1 | Components Stack, Not Nest | Nesting | Part 5 |
| 19 | N2 | Composite Components Are Pre-Composed | Nesting | Part 5 |
| 20 | N3 | When Nesting Feels Necessary, Re-sequence | Nesting | Part 5 |
| 21 | N4 | The Depth Limit | Nesting | Part 5 |
| 22 | R1 | Kinship Model | Relationships | Part 6 |
| 23 | R2 | Component Moods | Relationships | Part 6 |
| 24 | R3 | Component Voices | Relationships | Part 6 |
| 25 | A1 | Callout Cacophony | Anti-Patterns | Part 7 |
| 26 | A2 | Code Wall | Anti-Patterns | Part 7 |
| 27 | A3 | Decision Paralysis | Anti-Patterns | Part 7 |
| 28 | A4 | Orphaned Heavy Components | Anti-Patterns | Part 7 |
| 29 | A5 | Temperature Whiplash | Anti-Patterns | Part 7 |
| 30 | A6 | Missing Context Start | Anti-Patterns | Part 7 |
| 31 | A7 | Anxiety Ending | Anti-Patterns | Part 7 |
| 32 | Q1 | Component Density Limits | Quantitative | Part 9 |
| 33 | Q2 | Spacing Standards | Quantitative | Part 9 |
| 34 | Q3 | Reading Rhythm Ratios | Quantitative | Part 9 |
| 35 | Matrix | 11x11 Component Compatibility Matrix | Meta | Appendix |
| 36 | Recipe 1 | The Quick Reference | Recipes | Part 8 |
| 37 | Recipe 2 | The Deep Dive | Recipes | Part 8 |
| 38 | Recipe 3 | The Decision Guide | Recipes | Part 8 |
| 39 | Recipe 4 | The Troubleshooting Guide | Recipes | Part 8 |
| 40 | Recipe 5 | The Tutorial Section | Recipes | Part 8 |
| 41 | Recipe 6 | The Architecture Overview | Recipes | Part 8 |

**Note on Count:** R5-COMBINATION-THEORY.md documents 39 distinct principles across Parts 1-9 plus the Appendix. The six recipes (Part 8) are composite applications of earlier findings. The matrix (Appendix) is a cross-reference tool. For evaluation purposes, all 41 items are tracked -- the 35 core findings plus 6 recipes.

---

## Part 2: CD Exploration Mapping

### 2.1 Target Explorations

| CD Exploration | Focus | Primary Axis | Primary Density |
|----------------|-------|-------------|-----------------|
| **CD-001** | Reasoning Inside Code | Z-Pattern or F-Pattern | PULSE or CRESCENDO |
| **CD-002** | Task Containing Decision | Bento Grid or F-Pattern | ISLANDS or CRESCENDO |
| **CD-003** | File Tree with Callouts | Bento Grid or Z-Pattern | ISLANDS or PULSE |
| **CD-004** | Essence as Background | Spiral or Choreography | GEOLOGICAL or WAVE |
| **CD-005** | (Per Phase 0 decision) | TBD | TBD |
| **CD-006** | Pilot Migration (ALL) | Compound | ALL (FRACTAL primary) |

### 2.2 Finding-to-Exploration Mapping

#### CD-001: Reasoning Inside Code (11 findings)

| Finding | Why This Exploration | Test Method |
|---------|---------------------|-------------|
| **H2** | Code Snippet + Essence Callout is a HIGH-HARMONY contrasting pair (dark/light, technical/philosophical) -- CD-001 places Reasoning adjacent to Code, testing whether contrast creates harmony at combination scale | Verify that Code+Reasoning adjacency reads as complementary, not dissonant |
| **T2** | Velocity mismatch: Code (SLOW) + Reasoning (SLOW) = two SLOW components adjacent. CD-001 MUST insert a FAST component between them or demonstrate why the combination survives without one | Measure reader fatigue; check if velocity mismatch is mitigated by the "reasoning inside code" framing |
| **N1** | Stack, don't nest: the "reasoning inside code" concept risks nesting Reasoning within Code Snippet. CD-001 must prove this is sequential stacking, not nesting | Verify DOM structure is flat (stacked components), not nested containers |
| **N2** | Pre-composed composites: Core Abstraction already combines Essence+Code. CD-001 tests whether a NEW composite (Reasoning+Code) can be created without violating N2's "don't create ad-hoc composites" rule | Evaluate whether the combination is a stacking pattern or an unauthorized composite |
| **N3** | Re-sequence when nesting feels necessary: if "reasoning inside code" implies nesting, the correct solution is to re-sequence as Reasoning before/after Code | Verify implementation uses sequential placement, not containment |
| **N4** | Depth limit: maximum effective depth is 1 level. CD-001 must not create deeper nesting even when combining complex components | Check that no component is more than 1 level deep |
| **G2** | Container signal: Reasoning (framed) adjacent to Code (dark mass). Two "bounded thoughts" need connective tissue between them per G2 | Verify there is a non-framed connector (e.g., Tip Callout) between them |
| **G3** | Weight balance: Code (Heavy) + Reasoning (Heavy) = two Heavy components adjacent. Must include 1-2 Light components before the next Heavy per G3 golden ratio | Count Heavy/Light ratio in the exploration |
| **A4** | Orphaned heavy components: both Code and Reasoning are Heavy. Neither should appear without decompression | Verify each Heavy component has a Light component nearby for breathing room |
| **Recipe 2** | The Deep Dive recipe uses Code+Essence+Core Abstraction -- CD-001's Code+Reasoning tests a variation of this pattern | Compare CD-001's sequence against Recipe 2's established pattern |
| **S5** | Teaching Moment sequence (Essence -> Core Abstraction -> Code -> Tip) -- CD-001 tests whether Reasoning can substitute for Core Abstraction in this sequence | Evaluate whether Reasoning+Code achieves the same abstract-to-concrete flow |

#### CD-002: Task Containing Decision (9 findings)

| Finding | Why This Exploration | Test Method |
|---------|---------------------|-------------|
| **H2** | Task Component + Reasoning is a HIGH-HARMONY contrasting pair (action/deliberation) -- Tasks emerge from reasoning | Verify that Task+Decision Matrix reads as natural (tasks emerge from decisions) |
| **H4** | Editorial Spread: Decision Matrix + Reasoning is one of the identified editorial pairs (Options + deliberation) | Verify the pair reads as a cohesive "magazine spread" |
| **T2** | Task (FAST) + Decision Matrix (MEDIUM) -- velocity shift is moderate, but Reasoning (SLOW) creates a mismatch if adjacent to Task | Check velocity sequencing across all components in the exploration |
| **N1** | "Task containing decision" risks nesting Decision Matrix inside Task Component. Must be sequential stacking per N1 | Verify flat DOM structure; Decision precedes or follows Task, not inside it |
| **N2** | Neither Task nor Decision Matrix is a pre-composed composite. Their combination must remain as stacked components | Confirm no ad-hoc composite container is created |
| **R1** | Kinship: Decision Matrix and Reasoning are analytical siblings. Task Component and Decision Matrix are cousins (shared traits: structured lists/grids) | Verify sibling/cousin relationships are leveraged for coherence |
| **A3** | Decision Paralysis: Decision Matrix + Reasoning + Reasoning = too many decision forks. CD-002 must limit to one Decision Matrix + one Reasoning with clear recommendation | Count decision structures per section; verify single-recommendation pattern |
| **Recipe 3** | The Decision Guide recipe (Info -> Decision Matrix -> Reasoning -> Task) is the DIRECT template for CD-002 | Compare CD-002's structure against Recipe 3 step-by-step |
| **S1** | Setup-Payoff Arc: CD-002 should follow Context -> Map -> Principle -> Demo -> Action -> Hazards ordering | Verify section ordering matches the S1 arc |

#### CD-003: File Tree with Callouts (10 findings)

| Finding | Why This Exploration | Test Method |
|---------|---------------------|-------------|
| **H1** | Family cohesion: if multiple callout types annotate a File Tree, they share structural DNA (same zone structure, spacing rhythm) | Verify all callouts maintain consistent structure when mixed with File Tree |
| **H3** | Shared visual anchors: File Tree (left border) and Callouts (left border flag) are both left-anchored. CD-003 tests whether shared anchoring creates reading momentum | Verify left-alignment consistency between File Tree and adjacent callouts |
| **H4** | Editorial Spread: File Tree + Core Abstraction is an identified pair (structure map + principle explanation) | If Core Abstraction appears, verify it feels like the File Tree's explanatory partner |
| **T4** | 2-Callout Limit: with multiple callouts annotating a File Tree, CD-003 is the highest-risk exploration for exceeding the 2-callout limit per viewport | Count callouts per viewport; enforce max 2 consecutive |
| **G1** | Semantic proximity: Callouts explaining specific parts of the File Tree should be visually proximate (tight grouping 8-16px) | Measure spacing between File Tree and its annotating callouts |
| **G4** | Advisory Cluster: if multiple advisories relate to the File Tree's structure, they should be grouped as a cluster rather than scattered | Verify callouts are clustered, not scattered between unrelated content |
| **N3** | Re-sequence: the urge to embed callouts inside File Tree items should be resolved by placing callouts before/after the tree with line references | Verify callouts reference specific tree items by name, not by nesting |
| **A1** | Callout Cacophony: highest risk exploration for stacking too many callouts. Must interleave with prose or code after 2 | Count consecutive callouts; verify interleaving after 2 |
| **Recipe 6** | Architecture Overview recipe (File Tree -> Core Abstraction -> Decision Matrix -> Tip) is the template for CD-003's structural explanation | Compare structure against Recipe 6 |
| **G2** | Container signal: File Tree is anchored (left border), not framed. If combined with framed components (Core Abstraction, Reasoning), anchored should precede framed per H3 | Verify anchored-before-framed ordering when both types appear |

#### CD-004: Essence as Background (11 findings)

| Finding | Why This Exploration | Test Method |
|---------|---------------------|-------------|
| **H3** | Shared visual anchors: Essence Callout uses left-anchor + serif italic. When Essence becomes a "background" element, does the anchor still create reading momentum? | Test whether Essence's visual anchor functions when used as contextual background |
| **T3** | Temperature flow: Essence (Warm) as background sets a warm tone. Subsequent components must follow Warm -> Neutral -> Cold, not jump directly to Cold | Map temperature flow across the entire exploration; verify no warm-to-cold jumps |
| **G2** | Container signal: Essence Callout (anchored, annotation) vs Core Abstraction (framed, bounded thought). CD-004 tests whether Essence can serve as a persistent contextual signal rather than a point annotation | Evaluate whether Essence maintains its "annotation" signal when used as background |
| **G3** | Weight balance: Essence (Medium weight) as background shifts the weight distribution. Adjacent Heavy components need balancing | Count weight distribution across the exploration |
| **N1** | Stack, don't nest: "Essence as background" could imply Essence wrapping other components (nesting). Must be sequential | Verify Essence is a standalone component, not a wrapper |
| **N2** | Pre-composed composites: Core Abstraction already contains an Essence-style quote. CD-004 must clarify whether Essence-as-background is different from Core Abstraction's built-in Essence zone | Distinguish CD-004's pattern from Core Abstraction's existing composite |
| **N3** | Re-sequence: if the urge is to nest content inside Essence, the solution is Essence -> Content sequence | Verify sequential structure |
| **N4** | Depth limit: Essence as background risks creating a 2-level nesting (Essence -> Component -> Component). Maximum depth is 1 | Verify max depth of 1 level |
| **R2** | Component Moods: Essence = Reverent + Contemplative. Using it as background sets a reverent mood for everything that follows. CD-004 tests mood persistence | Evaluate whether the reverent mood persists through subsequent components |
| **R3** | Component Voices: Essence = "Wise archivist" speaking "If you remember nothing else..." CD-004 tests whether this voice can serve as a sustained narrative frame | Evaluate whether the archivist voice maintains coherence as a frame |
| **A5** | Temperature Whiplash: with Essence (Warm) as persistent background, any Cold component (Gotcha) nearby creates whiplash risk. Temperature buffers are critical | Identify all warm-to-cold transitions; verify neutral buffers exist |

**Additional from S3:** The First Component Rule -- if Essence is the first component, it sets a "philosophical treatise" tone. CD-004 tests whether this tone setting is compatible with practical content that follows.

#### CD-005: Per Phase 0 Decision (9 findings)

| Finding | Why This Exploration | Test Method |
|---------|---------------------|-------------|
| **H1** | Family cohesion: test whether family DNA works across axis pattern boundaries | Verify callout family consistency across axis transitions |
| **T3** | Temperature flow: test temperature management across the exploration's chosen axis pattern | Map temperature flow end-to-end |
| **T4** | 2-Callout Limit: enforce across the exploration's specific content type | Count callouts per viewport |
| **R2** | Component Moods: test mood compatibility in the exploration's specific context | Map mood transitions across sections |
| **R3** | Component Voices: test voice harmony in the chosen content scenario | Verify no enthusiastic-to-authoritative jumps without transition |
| **A1** | Callout Cacophony: test across the exploration's callout density | Monitor callout stacking |
| **A5** | Temperature Whiplash: test across the exploration's temperature transitions | Track warm/cold adjacencies |
| **S1** | Setup-Payoff Arc: verify the exploration follows S1 ordering | Map section structure against S1 template |
| **G4** | Advisory Cluster: test grouping discipline in the exploration's advisory content | Verify advisory clustering |

#### CD-006: Pilot Migration -- ALL Findings (Comprehensive)

CD-006 is the comprehensive stress test. ALL 41 findings (35 core + 6 recipes) must be testable in CD-006. This exploration serves as the ultimate validation: if all R-5 findings hold at migration scale, the combination theory is validated.

**CD-006 tests every finding** because it is a pilot migration that should use real content requiring the full range of component combinations. Every finding that received VALIDATED, EXTENDED, CHALLENGED, or DEFERRED status in CD-001 through CD-005 gets a second evaluation opportunity in CD-006.

---

## Part 3: Coverage Verification Matrix

### 3.1 Finding Coverage Table

Every R-5 finding must appear in at least 1 CD exploration. CD-006 covers all by definition.

| Finding | CD-001 | CD-002 | CD-003 | CD-004 | CD-005 | CD-006 | Total (excl. 006) |
|---------|:------:|:------:|:------:|:------:|:------:|:------:|:-----------------:|
| **H1** | | | X | | X | X | 2 |
| **H2** | X | X | | | | X | 2 |
| **H3** | | | X | X | | X | 2 |
| **H4** | | X | X | | | X | 2 |
| **T1** | | | | | | X | 0 (CD-006 only) |
| **T2** | X | X | | | | X | 2 |
| **T3** | | | | X | X | X | 2 |
| **T4** | | | X | | X | X | 2 |
| **S1** | | X | | | X | X | 2 |
| **S2** | | | | | | X | 0 (CD-006 only) |
| **S3** | | | | X | | X | 1 |
| **S4** | | | | | | X | 0 (CD-006 only) |
| **S5** | X | | | | | X | 1 |
| **G1** | | | X | | | X | 1 |
| **G2** | X | | X | X | | X | 3 |
| **G3** | X | | | X | | X | 2 |
| **G4** | | | X | | X | X | 2 |
| **N1** | X | X | | X | | X | 3 |
| **N2** | X | X | | X | | X | 3 |
| **N3** | X | | X | X | | X | 3 |
| **N4** | X | | | X | | X | 2 |
| **R1** | | X | | | | X | 1 |
| **R2** | | | | X | X | X | 2 |
| **R3** | | | | X | X | X | 2 |
| **A1** | | | X | | X | X | 2 |
| **A2** | | | | | | X | 0 (CD-006 only) |
| **A3** | | X | | | | X | 1 |
| **A4** | X | | | | | X | 1 |
| **A5** | | | | X | X | X | 2 |
| **A6** | | | | | | X | 0 (CD-006 only) |
| **A7** | | | | | | X | 0 (CD-006 only) |
| **Q1** | | | | | | X | 0 (CD-006 only) |
| **Q2** | | | | | | X | 0 (CD-006 only) |
| **Q3** | | | | | | X | 0 (CD-006 only) |
| **Matrix** | | | | | | X | 0 (CD-006 only) |
| **Recipe 1** | | | | | | X | 0 (CD-006 only) |
| **Recipe 2** | X | | | | | X | 1 |
| **Recipe 3** | | X | | | | X | 1 |
| **Recipe 4** | | | | | | X | 0 (CD-006 only) |
| **Recipe 5** | | | | | | X | 0 (CD-006 only) |
| **Recipe 6** | | | X | | | X | 1 |

### 3.2 Coverage Summary

| Metric | Value |
|--------|-------|
| Total R-5 findings | 41 (35 core + 6 recipes) |
| Findings tested in CD-001 through CD-005 (excl. CD-006) | 27 |
| Findings tested ONLY in CD-006 | 14 |
| Findings tested in 2+ explorations (excl. CD-006) | 18 |
| Findings tested in 3+ explorations (excl. CD-006) | 5 |
| **100% coverage through CD-006** | **YES** |

### 3.3 Findings Tested Only in CD-006

These findings have no dedicated test in CD-001 through CD-005 and rely on CD-006 for validation:

| Finding | Reason for CD-006-Only | Risk Level |
|---------|------------------------|------------|
| T1 (Productive Tension) | General principle, emerges naturally in full migration | LOW |
| S2 (Density Wave) | Requires page-length content to demonstrate wave pattern | LOW |
| S4 (Resolution Component) | Requires natural section endings | LOW |
| A2 (Code Wall) | Requires code-heavy content sections | LOW |
| A6 (Missing Context) | Requires natural section starts | LOW |
| A7 (Anxiety Ending) | Requires natural section endings | LOW |
| Q1 (Density Limits) | Requires full-page component counting | LOW |
| Q2 (Spacing Standards) | Requires CSS implementation verification | LOW |
| Q3 (Reading Rhythm) | Requires full-page weight distribution | LOW |
| Matrix | Cross-reference tool, tested by all pairings in CD-006 | LOW |
| Recipe 1 (Quick Reference) | Requires quick-reference content section | LOW |
| Recipe 4 (Troubleshooting) | Requires troubleshooting content section | LOW |
| Recipe 5 (Tutorial) | Requires tutorial content section | LOW |

**Assessment:** All CD-006-only findings are either general principles that emerge naturally in a full migration, or quantitative guidelines that require page-scale content. No high-risk findings are limited to CD-006 only. The critical structural and compositional findings (N1-N4, G2-G3, T2-T4, A1-A5) all have dedicated tests in CD-001 through CD-005.

---

## Part 4: Per-Finding Evaluation Template

### 4.1 Four Outcome Categories

Every R-5 finding, after evaluation in a CD exploration, receives one of four outcome designations:

#### VALIDATED
**Definition:** Finding confirmed at combination scale with no modification needed.

**Criteria:**
- The finding's rule or principle holds exactly as stated in R5-COMBINATION-THEORY.md
- Evidence is visible in the CD exploration's structure
- No edge cases or exceptions discovered
- The finding's guidance produced the expected result

**Documentation format:**
```
Finding: [ID] — [Title]
Outcome: VALIDATED
Exploration: CD-[XXX]
Evidence: [Specific structural element where finding holds]
AD-lens confirmation: [How AD-F-023/024/025 relates]
```

#### EXTENDED
**Definition:** Finding holds but new nuance discovered at combination scale.

**Criteria:**
- The finding's core principle is correct
- New information emerged that ADDS to the finding (does not contradict)
- The extension is specific to the combination context (not visible at individual component scale)
- The finding should be updated to incorporate the new nuance

**Documentation format:**
```
Finding: [ID] — [Title]
Outcome: EXTENDED
Exploration: CD-[XXX]
Original statement: [What R5 says]
Extension: [New nuance discovered]
Evidence: [Specific structural element showing extension]
Recommendation: [How to update the finding]
AD-lens impact: [Does extension affect attention topology?]
```

#### CHALLENGED
**Definition:** Finding partially contradicted at combination scale.

**Criteria:**
- The finding's rule produced an unexpected or suboptimal result
- Evidence exists that the finding needs revision or qualification
- The challenge is structural, not implementation-quality related
- At least one concrete counter-example is documented

**Documentation format:**
```
Finding: [ID] — [Title]
Outcome: CHALLENGED
Exploration: CD-[XXX]
Original statement: [What R5 says]
Challenge: [What went wrong or didn't hold]
Counter-evidence: [Specific structural element contradicting the finding]
Severity: [MINOR: edge case | MAJOR: fundamental revision needed]
Proposed revision: [How to fix the finding]
AD-lens analysis: [Does the attention topology explain the challenge?]
```

#### DEFERRED
**Definition:** Finding could not be tested in this exploration.

**Criteria:**
- The finding requires content/context not present in this exploration
- The finding will be tested in a different CD exploration (must specify which)
- Deferral is legitimate (not avoidance)

**Documentation format:**
```
Finding: [ID] — [Title]
Outcome: DEFERRED
Exploration: CD-[XXX]
Reason: [Why not testable here]
Deferred to: CD-[YYY] — [Why that exploration can test it]
```

### 4.2 Evaluation Record Template (Per Exploration)

Each CD exploration must produce an evaluation record using this template:

```markdown
## CD-[XXX] Evaluation Record

### Findings Evaluated

| Finding | Outcome | Confidence | Summary |
|---------|---------|------------|---------|
| [ID] | VALIDATED/EXTENDED/CHALLENGED/DEFERRED | HIGH/MEDIUM/LOW | [One-line summary] |

### VALIDATED Findings
[Detail per 4.1 template for each VALIDATED finding]

### EXTENDED Findings
[Detail per 4.1 template for each EXTENDED finding]

### CHALLENGED Findings
[Detail per 4.1 template for each CHALLENGED finding]

### DEFERRED Findings
[Detail per 4.1 template for each DEFERRED finding]

### AD-Lens Summary
- AD-F-023 (Attention Topology): [How attention topology affected combinations]
- AD-F-024 (Sequential): [How sequential constraint applied]
- AD-F-025 (Transition Grammar): [Which transitions were tested]

### Soul Checklist
- [ ] border-radius: 0 everywhere
- [ ] box-shadow: none
- [ ] No filter: drop-shadow()
- [ ] font-family: 'Instrument Serif'; font-style: italic for Essence/Core ONLY
- [ ] 2-zone callouts + border-left: 4px solid + color differentiation
- [ ] No physical-movement animation
- [ ] opacity: 1 on all backgrounds
- [ ] 3-category borders (ZERO 2px -- only 1px, 3px, 4px)
- [ ] #E83025 only accent color
- [ ] No hover depth effects
```

---

## Part 5: Tier-1 Binary Rule Test Scenarios

### 5.1 Overview

Six R-5 findings are classified as **Tier-1 Binary Rules** -- rules that admit no judgment, no exceptions. They must be tested with specific scenarios that can produce a definitive PASS/FAIL result.

These binary rules map directly to the AD stage discovery that binary rules achieve 100% agent compliance while judgment rules achieve ~0% (from Workflow Metacognition Analysis). The combination rules in `combination-rules.md` formalize four of these as "The 4 Combination Rules."

### 5.2 Binary Rule Test Scenarios

---

#### RULE T2: Velocity Mismatch
**Statement:** Never place two SLOW components consecutively without a FAST component between them.
**Source:** R5-COMBINATION-THEORY Part 2, Principle T2
**Also:** combination-rules.md Rule 1 ("Never Stack Same-Velocity")

**Test Exploration:** CD-001 (Reasoning Inside Code)

**Test Scenario: Two SLOW Components Adjacent**

| Step | Action | Expected |
|------|--------|----------|
| 1 | Place Code Snippet (SLOW) directly adjacent to Reasoning Component (SLOW) | This violates T2 |
| 2 | Read the sequence without a FAST buffer between them | Reader fatigue should be measurable |
| 3 | Insert a Tip Callout (FAST) between Code and Reasoning | Rhythm should restore |
| 4 | Compare version A (violation) vs version B (compliant) | B should read more smoothly |

**Why CD-001:** CD-001 combines Reasoning and Code -- both SLOW components. This is the most natural exploration to test whether the velocity mismatch rule holds when the semantic connection between the two SLOW components is strong (Reasoning ABOUT Code).

**Critical Question:** Does strong semantic connection between two SLOW components mitigate the velocity mismatch? If so, T2 may need qualification: "Never place two SLOW components consecutively... UNLESS they have direct semantic dependency (e.g., Reasoning analyzing adjacent Code)."

**Component Velocities (from combination-rules.md):**

| Component | Velocity |
|-----------|----------|
| Code Snippet | SLOW |
| Reasoning Component | SLOW |
| Core Abstraction | SLOW |
| Essence Callout | SLOW |
| Decision Matrix | MEDIUM |
| File Tree | MEDIUM |
| Task Component | FAST |
| Info Callout | FAST |
| Tip Callout | FAST |
| Gotcha Callout | FAST |
| Challenge Callout | FAST |

---

#### RULE T3: Temperature Flow
**Statement:** Don't oscillate rapidly between warm and cold. Use Warm -> Neutral -> Cold ordering with neutral buffers.
**Source:** R5-COMBINATION-THEORY Part 2, Principle T3
**Also:** combination-rules.md Rule 2 ("Temperature Flow")

**Test Exploration:** CD-002 (Task Containing Decision)

**Test Scenario: Attempted Warm-to-Cold Jump**

| Step | Action | Expected |
|------|--------|----------|
| 1 | Place Tip Callout (Warm) immediately before Gotcha Callout (Cold) | This violates T3 + Traffic Light Rule |
| 2 | Read the sequence for tonal dissonance | Tonal whiplash should be perceptible |
| 3 | Insert Info Callout (Neutral) between Tip and Gotcha | Temperature should flow smoothly |
| 4 | Compare version A (violation) vs version B (compliant) | B should feel coherent |

**Why CD-002:** CD-002 combines Task (Utilitarian/Cold) with Decision Matrix (Neutral) and potentially Tip Callouts (Warm). The task-decision workflow naturally involves advisory callouts that could create temperature oscillation.

**Component Temperatures (from combination-rules.md):**

| Component | Temperature |
|-----------|-------------|
| Tip Callout | Warm |
| Challenge Callout | Warm |
| Essence Callout | Warm |
| Info Callout | Neutral |
| File Tree | Neutral |
| Decision Matrix | Neutral |
| Code Snippet | Neutral |
| Gotcha Callout | Cold |
| Task Component | Utilitarian (Cold-adjacent) |
| Core Abstraction | Reverent (Warm-adjacent) |
| Reasoning Component | Deliberate (Neutral-adjacent) |

---

#### RULE T4: The 2-Callout Limit
**Statement:** Never place more than 2 callouts consecutively.
**Source:** R5-COMBINATION-THEORY Part 2, Finding T4
**AD Confirmation:** DD-F-014 enforced across all 6 AD explorations. AD-005 validated at highest callout density.

**Test Exploration:** CD-003 (File Tree with Callouts)

**Test Scenario: 3 Callout Types in One Viewport**

| Step | Action | Expected |
|------|--------|----------|
| 1 | Place Info + Tip + Gotcha callouts consecutively annotating a File Tree | This violates T4 |
| 2 | Read the sequence for "sidebar fatigue" | Third callout should lose interruption power |
| 3 | Solution A: Group all 3 into a single Info Callout with bullets | Sidebar power preserved |
| 4 | Solution B: Interleave with prose or Code between callouts | Each callout retains power |
| 5 | Solution C: Use Decision Matrix to compare the 3 considerations | Callout function replaced by structure |

**Why CD-003:** CD-003 naturally requires multiple callout annotations for different File Tree entries. This is the highest-risk exploration for T4 violation because the temptation to annotate each tree item with its own callout is strong.

**PASS Criteria:** No section of the exploration places 3+ callouts consecutively. If 3+ advisories are needed, one of the three solutions from T4 is applied.

---

#### RULE G3: Visual Weight Balance
**Statement:** Balance heavy components with light ones. For every heavy component, include 1-2 light components before the next heavy component.
**Source:** R5-COMBINATION-THEORY Part 4, Principle G3
**Also:** combination-rules.md Rule 3 ("Weight Balance")

**Test Exploration:** CD-001 and CD-004

**Test Scenario (CD-001): Triple Heavy Sequence**

| Step | Action | Expected |
|------|--------|----------|
| 1 | Place Code Snippet (Heavy) + Reasoning (Heavy) + Core Abstraction (Heavy) | Three consecutive Heavy = oppressive |
| 2 | Read the sequence for visual overwhelm | Page should feel "crushing" |
| 3 | Insert Tip Callout (Light) between Code and Reasoning, Info Callout (Light) between Reasoning and Core Abstraction | Page should feel balanced |
| 4 | Measure Heavy/Light ratio | Target: 20-30% Heavy per Q3 |

**Test Scenario (CD-004): Heavy After Essence Background**

| Step | Action | Expected |
|------|--------|----------|
| 1 | With Essence (Medium) as background, place Code Snippet (Heavy) + Core Abstraction (Heavy) | Essence shifts weight upward; two Heavy after it = overload |
| 2 | Insert Light components between each Heavy component | Balance restored |
| 3 | Measure overall weight distribution | Should match Q3 ratios (20-30% Heavy, 30-40% Light) |

**Component Weights (from combination-rules.md):**

| Component | Weight |
|-----------|--------|
| Code Snippet | Heavy |
| Decision Matrix | Heavy |
| Core Abstraction | Heavy |
| Reasoning Component | Heavy |
| File Tree | Heavy |
| Essence Callout | Medium |
| Gotcha Callout | Medium |
| Challenge Callout | Medium |
| Task Component | Medium |
| Info Callout | Light |
| Tip Callout | Light |

---

#### RULE N1: Stack Don't Nest
**Statement:** KortAI components are designed to stack vertically, not nest within each other. The flat, editorial design philosophy rejects deep nesting.
**Source:** R5-COMBINATION-THEORY Part 5, Principle N1
**AD Reinforcement:** AD-F-024 (compound = sequential, not simultaneous) extends stacking to the axis level.

**Test Exploration:** CD-002 (Task Containing Decision)

**Test Scenario: Decision Matrix Inside Task Component**

| Step | Action | Expected |
|------|--------|----------|
| 1 | Attempt to embed a Decision Matrix inside a Task Component (as a task step) | This violates N1 -- nesting a component inside another |
| 2 | Evaluate whether the nesting "works" or creates confusion | Should create visual hierarchy confusion |
| 3 | Re-sequence: place Decision Matrix BEFORE Task Component (decisions inform tasks) | Sequential reading: decide, then act |
| 4 | Alternative: place Task Component first, then Decision Matrix (tasks reveal need for decision) | Sequential reading: act, then choose |
| 5 | Evaluate both sequential orderings against the nested version | Sequential should always be clearer |

**Why CD-002:** "Task Containing Decision" is the most explicit nesting temptation in the CD explorations. The exploration title itself suggests containment. This is a deliberate stress test of N1.

**PASS Criteria:** The final implementation uses sequential stacking, not nesting. If the exploration title "Task Containing Decision" is misleading, the evaluation should note this and clarify that "containing" means "related to" not "wrapping."

---

#### RULE N4: The Depth Limit
**Statement:** Maximum effective depth is 1 level: Component -> Embedded zone. Beyond this, complexity exceeds editorial restraint.
**Source:** R5-COMBINATION-THEORY Part 5, Finding N4

**Test Exploration:** CD-004 (Essence as Background)

**Test Scenario: ANTI-PHYSICAL Boundary**

| Step | Action | Expected |
|------|--------|----------|
| 1 | Attempt Essence as a wrapping "background" container for other components | This risks creating depth > 1: Essence -> Component -> Component's zone |
| 2 | Count nesting levels in the DOM | Should not exceed 1 level |
| 3 | If depth > 1 detected, flatten: Essence as standalone component, then other components in sequence | Depth reduced to 1 |
| 4 | Verify ANTI-PHYSICAL identity: no component implies spatial containment of another (no z-axis, no overlapping, no layering) | Per AD-F-020: all "containment" must be sequential, not spatial |

**Why CD-004:** "Essence as Background" directly implies spatial layering -- one component behind another. This is the most aggressive test of the ANTI-PHYSICAL identity at the combination level. If "background" means visual z-axis layering, it violates both N4 (depth > 1) and the ANTI-PHYSICAL identity (AD-F-020). The correct interpretation: "background" means Essence sets the contextual frame (mood, philosophy) for subsequent components, not that Essence is literally behind them in z-space.

**PASS Criteria:**
1. Maximum DOM nesting depth = 1 level
2. No z-index, no `position: absolute` layering between components
3. No visual overlap between Essence and subsequent components
4. "Background" is interpretive (sets mood/frame), not spatial (z-layer)

---

## Part 6: Combination Rules Cross-Reference

### 6.1 Mapping R-5 Findings to the 4 Combination Rules

`combination-rules.md` distills R-5 findings into 4 operational rules. This cross-reference maps each rule to its source findings:

| Combination Rule | Source R-5 Findings | Binary? | Test In |
|------------------|---------------------|---------|---------|
| Rule 1: Never Stack Same-Velocity | T2, G3 | YES | CD-001 |
| Rule 2: Temperature Flow | T3, A5 | YES | CD-002 |
| Rule 3: Weight Balance | G3, Q3 | YES | CD-001, CD-004 |
| Rule 4: Semantic Proximity Spacing | G1, Q2 | PARTIAL (token-based) | CD-003, CD-006 |

### 6.2 Additional Rules From R-5 Not in combination-rules.md

These R-5 findings establish rules not captured in the 4 combination rules but equally important for CD:

| Finding | Rule | Binary? | Why Not in combination-rules.md |
|---------|------|---------|-------------------------------|
| T4 | Max 2 consecutive callouts | YES | Specific to callout family, not general combination |
| N1 | Stack, don't nest | YES | Structural constraint, not sequencing rule |
| N4 | Max depth 1 level | YES | Structural constraint, not sequencing rule |
| S1 | Setup-payoff arc ordering | NO (guideline) | Flexible ordering, not binary |
| A1-A7 | 7 anti-patterns | MIXED | Avoidance rules, not combination rules |

---

## Part 7: AD Finding Integration

### 7.1 AD Findings That Modify R-5 Evaluation

Several AD findings directly affect how R-5 findings should be evaluated at CD scale:

| AD Finding | Impact on R-5 Evaluation |
|------------|--------------------------|
| **AD-F-004** (3-Way Unification) | Component combinations are constrained by natural axis-density pairings. R-5 findings about component adjacency must be evaluated WITHIN axis sections, not across axis boundaries. |
| **AD-F-013** (Soul Constraint as Generative) | border-radius: 0 didn't limit combination space, it SHAPED it. R-5 anti-patterns should be evaluated as generative constraints, not just prohibitions. |
| **AD-F-020** (Choreography = Reader Movement) | All "movement" in R-5 (velocity, flow, rhythm) means reader attention movement through static structure. No R-5 finding should be implemented via CSS animation. |
| **AD-F-023** (ATTENTION TOPOLOGY) | R-5 findings are not about visual arrangement -- they are about attention topology. Component combinations shape attention flow. Evaluate R-5 findings through this lens. |
| **AD-F-024** (Compound = Sequential) | R-5 Recipe combinations within a CD exploration must be sequential (one recipe per section), not simultaneous. Multiple recipes cannot operate in the same viewport. |
| **AD-F-025** (Transition Grammar) | When CD explorations transition between sections that use different R-5 recipes, the 5x5 transition grammar applies. Smooth, Bridge, or Breathing spacing required. |

### 7.2 AD-Enhanced Evaluation Criteria

For each R-5 finding evaluated in a CD exploration, evaluators must additionally check:

1. **Attention Topology Alignment (AD-F-023):** Does the component combination shape attention flow as intended?
2. **Sequential Compliance (AD-F-024):** Is each section committed to one combinatorial pattern, with compound emerging through scrolling?
3. **Transition Grammar (AD-F-025):** Are section transitions classified (Smooth/Bridge/Breathing) and spaced accordingly?
4. **Soul Constraint Generation (AD-F-013):** Did the soul constraint (border-radius: 0, no shadows) generate useful design decisions rather than just limiting options?
5. **ANTI-PHYSICAL Identity (AD-F-020):** Does "movement" mean reader attention movement, not CSS animation?

---

## Part 8: Execution Sequence

### 8.1 Evaluation Order

1. **CD-001 through CD-005 (individual explorations):** Each builder evaluates their assigned R-5 findings using the template from Part 4
2. **CD-006 (pilot migration):** Comprehensive evaluation of ALL findings, including those only tested in CD-006
3. **Cross-exploration synthesis:** Compare outcomes across explorations. If finding X was VALIDATED in CD-001 but CHALLENGED in CD-003, investigate the discrepancy
4. **Final evaluation matrix:** Consolidate all outcomes into a single matrix

### 8.2 Success Criteria

| Metric | Target | Rationale |
|--------|--------|-----------|
| Findings VALIDATED | >= 30/41 (73%) | Most R-5 findings should hold at combination scale |
| Findings EXTENDED | <= 8/41 (20%) | Extensions are valuable discoveries but shouldn't dominate |
| Findings CHALLENGED | <= 3/41 (7%) | Challenges require revision; too many suggest R-5 theory is weak |
| Findings DEFERRED | 0 after CD-006 | CD-006 covers all; nothing should remain deferred after it |
| Soul violations | 0 | Absolute requirement |
| AD-lens alignment | 100% | Every evaluation must reference AD-F-023/024/025 |

### 8.3 Failure Modes to Watch

| Failure Mode | Symptom | Response |
|-------------|---------|----------|
| CHALLENGED > 5 | R-5 theory needs fundamental revision | Pause CD, revisit R-5 research |
| DEFERRED > 5 (pre-CD-006) | Explorations are too narrow | Expand exploration scope |
| VALIDATED = 41 (all) | Suspiciously clean; evaluation may lack rigor | Invoke adversarial fresh-eyes review |
| No EXTENDED findings | Combination scale revealed nothing new | Investigate whether evaluations were sufficiently deep |

---

## Part 9: Soul Compliance Checklist

Every CD exploration evaluation must verify:

- [ ] `border-radius: 0` everywhere -- no rounded corners on any component
- [ ] `box-shadow: none` -- no shadows anywhere
- [ ] No `filter: drop-shadow()` -- no shadow filters
- [ ] `font-family: 'Instrument Serif'; font-style: italic` for Essence/Core ONLY -- serif is wisdom, not decoration
- [ ] 2-zone callouts with `border-left: 4px solid` and color differentiation
- [ ] No physical-movement animation -- all "movement" is structural (spacing changes, not transforms)
- [ ] `opacity: 1` on all backgrounds -- no transparency
- [ ] 3-category borders: ZERO 2px values. Only 1px (atmosphere/light), 3px (structural), 4px (accent/bedrock)
- [ ] `#E83025` as the ONLY accent color
- [ ] No hover depth effects -- no scale transforms, no shadow-on-hover, no elevation changes

These are non-negotiable. Any soul violation invalidates the entire evaluation regardless of R-5 finding outcomes.

---

## Document Metadata

**Created:** 2026-02-11
**Agent:** Agent-0B (R-5 Evaluator)
**Word Count:** ~4,500
**Status:** ACTIVE -- awaiting CD builder execution
**Consumed By:** All CD builders (CD-001 through CD-006), CD verification agent, CD synthesis agent
**Built On:** R5-COMBINATION-THEORY.md (39 findings), combination-rules.md (4 rules), AD-outbound-findings.md (28 AD findings), axis-patterns.md (6 patterns)

---

*This document maps the complete R-5 research to CD explorations. Every finding has at least one dedicated test. The evaluation template provides four clear outcome categories. The binary rule test scenarios create definitive PASS/FAIL criteria. The AD-lens integration ensures all evaluations respect the attention topology meta-equivalence (AD-F-023).*
