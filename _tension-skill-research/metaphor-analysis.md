# Metaphor Collapse: Deep Analysis

**Agent:** metaphor-analyst
**Date:** 2026-02-12
**Sources analyzed:** SKILL.md (Phase 3 placeholder), TENSION-PROTOCOL.md (1,940 lines), tension-deep-dive.md (351 lines), agent-report-synthesis.md (391 lines), agent-report-journey.md (234 lines), OD-004 header (96 lines), CD-001/CD-003/CD-006 headers + CSS (600+ lines each), DD-006 header (100 lines)
**Purpose:** Deeply analyze how tension collapses into metaphor -- the "five seconds" step -- and produce enrichment content for Phase 3 of the SKILL.md

---

## 1. DECOMPOSING THE "FIVE SECONDS"

### The Existing Account

The tension protocol describes the creative leap from tension to metaphor as "perhaps five seconds of creative association" that "cannot be mechanized." It traces four intermediate steps:

1. Domain analysis (content structure suggests layering)
2. Constraint inventory (angular + layered = geology)
3. Metaphor testing (does geology resolve all tensions?)
4. Mechanism invention (translating geological properties into CSS)

But this account is incomplete. Steps 1 and 2 are presented as nearly simultaneous, and Step 2 leaps directly to a named metaphor ("geological strata") without explaining the cognitive search process. The "five seconds" lives between Steps 1 and 2 -- between "the content suggests layering" and "geology." That gap is where the real analysis needs to happen.

### The Full Decomposition: Seven Sub-Steps

The constrained associative search (Step 3.3 in the SKILL.md) actually operates through seven cognitive sub-operations, not one:

**Sub-step A: Extract structural properties from Side A (reader needs)**

Not emotional adjectives but STRUCTURAL PRIMITIVES. From the OD-004 case:
- Reader needs graduated trust --> structural property: ORDERING (a sequence with rank)
- Reader needs visible progress --> structural property: TRAVERSAL (movement through stages)
- Reader needs calibrated investment --> structural property: STRATIFICATION (parallel layers of different value)
- Reader needs safety in uncertainty --> structural property: CONTAINMENT (bounded zones)

The operation: transform emotional needs into geometric/topological abstractions. "Warmth" is not a structural property. "Containment with visible boundaries" is.

**Sub-step B: Extract structural properties from Side B (system constraints)**

Not the constraint values themselves but what they GEOMETRICALLY produce:
- `border-radius: 0` --> ANGULARITY (all boundaries are straight lines)
- `box-shadow: none` --> FLATNESS (no depth illusion, all surfaces coplanar)
- Border categories (1px, 3px, 4px) --> DISCRETE WEIGHT (finite set of emphasis levels)
- Spacing scale (mathematical) --> PRECISE INTERVALS (positions are quantized)
- Limited palette --> NARROW TEMPERATURE RANGE (small perceptual variation)

The operation: transform design constraints into geometric/perceptual abstractions.

**Sub-step C: Find the structural overlap**

Compare Sub-step A's list with Sub-step B's list. What properties appear on BOTH lists?

From OD-004:
- Side A: ordering, traversal, stratification, containment
- Side B: angularity, flatness, discrete weight, precise intervals, narrow temperature range
- **OVERLAP: ordering + stratification + containment** (Both sides demand layers. Both sides demand bounded zones. Both sides demand sequence.)
- **GAP: warmth (A) vs. angularity+flatness (B)** -- this is the unresolved tension

The overlap is the bridge material. The gap is what the metaphor must resolve.

**Sub-step D: Generate the search query**

This is the critical translation step that has never been made explicit. The overlap properties and gap properties combine into a SEARCH QUERY:

> "What real-world domain naturally exhibits [OVERLAP PROPERTIES] while being [GAP-B PROPERTIES] yet conveying [GAP-A PROPERTIES]?"

For OD-004:
> "What is naturally LAYERED and ORDERED and CONTAINED, while being ANGULAR and FLAT, yet conveying SAFETY and WARMTH?"

This query is the actual content of the "five seconds." It is not free association. It is a constrained database query against the designer's domain knowledge.

**Sub-step E: Search real-world domains**

This is where the cognitive work happens. The designer's mental database of physical, cultural, and conceptual domains is searched against the query. The search is NOT exhaustive -- it is heuristic, primed by the specific words in the query.

For OD-004, the query contains "layered + ordered + angular + flat + safe + warm":
- Architecture: layered and ordered, angular, but not inherently warm or safe. PARTIAL MATCH.
- Typography/editorial: layered (in sections), ordered, angular (in grid layout), but not warm. PARTIAL MATCH.
- Geological strata: layered, ordered by time/depth, angular (rock faces are sharp), flat (strata are horizontal planes), safe (bedrock = stability), warm (foundation = trust). FULL MATCH.
- Filing systems: ordered, contained, angular, but not warm and not meaningfully layered. WEAK MATCH.
- Archaeological excavation: layered, ordered by time, angular (dig sites are gridded), but implies DESTRUCTION (digging removes layers) rather than safety. PARTIAL MATCH with negative valence.

The search terminates when a FULL MATCH is found or when the candidate pool is exhausted. "Five seconds" reflects the speed of matching, not the simplicity of the process.

**Sub-step F: Test the metaphor against ALL tensions**

This is Step 3.4 in the SKILL.md. Each candidate is tested against every tension identified in Phase 2:

```
CANDIDATE: Geological strata
Tension 1 (warmth vs. austerity): RESOLVES -- rock strata are angular yet communicate depth/foundation/stability, which are warm concepts
Tension 2 (graduated trust vs. binary vocabulary): RESOLVES -- border-weight gradient encodes stratum depth (4px=established, 3px=probable, 2px=speculative, 1px=open)
Tension 3 (invitation vs. formality): RESOLVES -- geological survey is formal AND exploratory; field notes reframe formality as expertise
Tension 4 (progressive density vs. visual sameness): RESOLVES -- geological compression provides the conceptual framework for progressive tightening across 5 CSS channels
SCORE: 4/4 tensions fully resolved
```

**Sub-step G: Verify structural isomorphism (not just compatibility)**

The final check: is the metaphor merely COMPATIBLE with the domain, or is it STRUCTURALLY ISOMORPHIC? This is the difference between "geology could work" and "geology must work."

Isomorphism test from OD-004 (the table from tension-deep-dive.md):

| Geological Property | Confidence Property | Design System Implementation |
|---|---|---|
| Deeper layers are older | Higher confidence = more established | Border weight gradient (4px to 1px) |
| Deeper layers are more compressed | Higher confidence = sparser | Padding/line-height decrease |
| Rock layers have sharp boundaries | Confidence levels need clear transitions | Stratum boundary markers with 3px rules |
| Geological surveys map before excavating | Readers need overview before depth | Survey header with strata inventory |
| Strata are independently informative | Each confidence level has standalone value | Every stratum independently useful |
| You dig down by choice | You read deeper by choice | Confidence switcher |

If the mapping produces at least 4-5 independent isomorphisms across different dimensions, the metaphor is structurally sound -- not decoration but architecture.

### Can Step E Be Further Decomposed?

Yes. The "mental database search" is primed by specific cognitive strategies:

1. **Domain scanning by constraint**: Start with the hardest constraint (the one that eliminates most candidates). For KortAI, ANGULARITY is the hardest. This immediately eliminates: organic/biological, liquid/fluid, atmospheric/cloud, textile/fabric, botanical/growth.

2. **Domain scanning by content resonance**: Ask what the CONTENT is literally about. OD-004 is about "stability" and "layers of certainty." These words have physical analogues: stability = geological, layers = geological. The content literally contains the metaphor's seed.

3. **Domain scanning by emotional valence**: The Side A emotion (warmth, safety) eliminates domains with negative valence: military (too aggressive), medical (too clinical), judicial (too adversarial). Domains with positive or neutral valence survive: geological (foundational), architectural (structural), botanical (growth), astronomical (expansive).

4. **Intersection of surviving domains**: The domain that survives ALL three filters is the metaphor. In OD-004's case:
   - Angularity filter: eliminates botanical, textile, liquid, atmospheric
   - Content resonance filter: promotes geological, architectural
   - Emotional valence filter: eliminates military, judicial, medical
   - SURVIVOR: geological

The "five seconds" is actually a rapid intersection of three elimination filters. It FEELS instantaneous because the filters operate in parallel, not sequentially. But each filter is doing real cognitive work.

---

## 2. COMMON METAPHOR FAMILIES FOR ANGULAR/FLAT/SHARP DESIGN SYSTEMS

### The KortAI Constraint Profile

KortAI's constraints form a specific personality: angular, flat, sharp, institutional, precise, narrow-palette, mathematical. This personality acts as a PERMANENT FILTER on the metaphor space. Certain metaphor families are structurally compatible with this personality; others are structurally incompatible.

### Compatible Metaphor Families

**A. Geological/Sedimentary (Layers, Strata, Compression)**
- Natural properties: angular (rock faces), flat (horizontal strata), ordered (by age/depth), sharp (crystalline), precise (measurable), layered
- Best for content about: confidence levels, knowledge maturity, historical progression, foundation/stability, expertise depth
- Design system expression: border-weight gradient, zone backgrounds, progressive tightening, stratum boundaries
- PROVEN: OD-004 geological strata
- Strength: extraordinarily rich -- geology provides 6+ independent structural isomorphisms
- Weakness: can become heavy/ponderous for light content; implies downward movement

**B. Architectural/Structural (Beams, Foundations, Cross-Sections)**
- Natural properties: angular (buildings are rectangular), flat (walls/floors are planes), precise (engineered to specification), institutional (public buildings)
- Best for content about: system architecture, component relationships, structural dependencies, load-bearing decisions, frameworks
- Design system expression: structural borders as load-bearing beams, spacing as floor plans, typography hierarchy as building levels
- UNTESTED but likely rich
- Strength: deeply resonant with technical documentation about SYSTEMS and ARCHITECTURE
- Weakness: can feel cold/impersonal unless the specific architectural metaphor carries warmth (e.g., "home" vs. "office building")

**C. Typographic/Editorial (Columns, Margins, Grids, Print)**
- Natural properties: angular (columns are rectangular), flat (paper is 2D), precise (typeset with mathematical precision), institutional (newspapers, journals)
- Best for content about: information hierarchy, publishing workflows, content organization, editorial judgment, style guides
- Design system expression: column-based layouts, pull quotes as editorial voice, rule lines as column separators, meta labels as editorial annotations
- PARTIALLY PROVEN: The entire KortAI system already has an editorial personality ("The Unhurried Editor")
- Strength: the system IS typographic/editorial by nature -- this family is always a viable fallback
- Weakness: can be circular (using editorial metaphor in a system that IS editorial) -- most powerful when applied to NON-editorial content

**D. Cartographic/Territorial (Maps, Zones, Boundaries, Wayfinding)**
- Natural properties: angular (map grids are rectangular), flat (maps are 2D projections of 3D), precise (coordinates, scales), institutional (government surveys)
- Best for content about: navigation, spatial relationships, territory/scope, exploration, discovery, orientation
- Design system expression: zone backgrounds as territory, borders as boundaries, meta labels as coordinates/legends, spacing as distance
- PARTIALLY PROVEN: OD-004's geological survey header is cartographic. OD-005's hub-spoke spatial pattern is cartographic.
- Strength: excellent for content that involves NAVIGATION or EXPLORATION
- Weakness: requires the content to have meaningful spatial/navigational metaphor potential

**E. Industrial/Mechanical (Machines, Assembly, Precision, Engineering)**
- Natural properties: angular (machine parts are precisely cut), flat (tolerances are exact), precise (engineered), institutional (factory/workshop)
- Best for content about: APIs, build systems, toolchains, manufacturing processes, debugging, system administration
- Design system expression: mono-spaced labels as engineering specifications, heavy borders as machined edges, spacing as tolerances, comparison grids as spec sheets
- PARTIALLY PROVEN: The system's monospace meta labels already feel like engineering specifications
- Strength: deeply resonant with developer documentation about TOOLS and PROCESSES
- Weakness: can feel dehumanizing -- machines don't have warmth by default

**F. Scientific/Laboratory (Experiments, Measurements, Specimens, Field Notes)**
- Natural properties: precise (measured), institutional (academic), angular (equipment/slides are rectangular), flat (microscope slides, petri dishes viewed from above)
- Best for content about: testing, validation, experimental approaches, hypothesis-driven development, data analysis
- Design system expression: meta labels as specimen labels, borders as sample boundaries, comparison grids as data tables, callouts as field observations
- UNTESTED
- Strength: combines precision with curiosity -- laboratory work is institutional AND exploratory
- Weakness: can feel sterile; needs content that genuinely involves investigation/discovery

### Incompatible Metaphor Families

These metaphor families CONFLICT with KortAI's angular/flat/sharp constraints:

- **Organic/Biological**: Requires curves, growth patterns, organic shapes. Violates `border-radius: 0`.
- **Liquid/Fluid**: Requires flowing shapes, gradients, wave forms. Violates flat/angular constraints.
- **Atmospheric/Weather**: Requires opacity, gradients, blur, softness. Violates `box-shadow: none` and `filter: none`.
- **Textile/Fabric**: Requires texture, draping, soft folds. Incompatible with flat, sharp surfaces.
- **Musical**: Requires curves (sound waves, notation), flowing rhythm. Angular system can express rhythm through spacing but not through form.

### What Determines Which Family Is Richest?

Three factors predict metaphor family richness for a given content type:

**Factor 1: Content domain resonance.** Does the content literally USE vocabulary from the metaphor family? OD-004's content about "API stability" and "confidence levels" literally uses geological vocabulary (stable, layered, foundational). When the content's own language maps to the metaphor family, the isomorphism is deep and natural.

**Factor 2: Number of independent structural isomorphisms.** Count how many INDEPENDENT properties of the metaphor map to INDEPENDENT properties of the content. Geological strata produced 6 independent mappings for OD-004. If a metaphor family can only produce 2-3 mappings, it's thin -- it will feel like decoration rather than architecture.

**Factor 3: Tension resolution breadth.** Does the metaphor family resolve ALL identified tensions, or only some? The geological family resolved all four of OD-004's tensions. An architectural metaphor might resolve warmth (foundations are safe) and graduated trust (floors have hierarchy) but struggle with invitation (buildings can feel fortress-like) and progressive density (buildings don't naturally compress upward).

The richest metaphor family for any given content is the one that maximizes all three factors simultaneously.

---

## 3. STRUCTURAL OVERLAP AS PREDICTOR

### The Hypothesis

Does MORE structural overlap between Side A (reader needs) and Side B (system constraints) predict BETTER metaphors?

### The Evidence

From the existing explorations:

**OD-004 (Geological strata): HIGH overlap, EXCELLENT metaphor**
- Side A structural: ordering, stratification, traversal, containment
- Side B structural: angularity, flatness, discrete weight, precise intervals
- Overlap: ordering + stratification + containment (3 of 4 Side A properties overlap with Side B's capabilities)
- Metaphor quality: HIGHEST in the system -- 6 independent isomorphisms, all 4 tensions resolved

**OD-001 (Interview transcript / TIDAL): MODERATE overlap, GOOD metaphor**
- Side A structural: alternation, turn-taking, responsiveness, rhythm
- Side B structural: angularity, flatness, discrete weight, precise intervals
- Overlap: alternation + rhythm (2 of 4 overlap) -- the system's ability to alternate widths maps to conversational turn-taking
- Metaphor quality: Good -- the TIDAL width variation creates genuine conversational rhythm, but the metaphor is narrower (fewer independent isomorphisms)

**OD-006 (Self-documenting recursion): LOW overlap, BRILLIANT metaphor**
- Side A structural: recursion, self-reference, meta-commentary, modal diversity
- Side B structural: angularity, flatness, discrete weight, precise intervals
- Overlap: minimal -- the system has no native mechanism for recursion or self-reference
- Metaphor quality: Brilliant but DIFFERENT IN KIND -- the "metaphor" is LITERALISM (the page IS its own documentation). The low overlap forced an entirely different creative strategy.

**CD-002 (Task containing decision): HIGH overlap, NO metaphor**
- Side A structural: sequential tasks, embedded decisions, workflow
- Side B structural: angular containers, bordered sections, ordered layout
- Overlap: very high -- the system directly handles tasks, decisions, and sequential flow
- Metaphor quality: NONE -- no tension, no creative leap, mechanical assembly

### The Sweet Spot

The evidence suggests a **Goldilocks zone** for structural overlap:

```
LOW OVERLAP ←──────────────────────────────────→ HIGH OVERLAP
   |                |                |                |
   OD-006           OD-001          OD-004           CD-002
   Brilliant        Good            Excellent        None
   but radical      metaphor        metaphor         (assembly)
```

**Too high (>80% overlap):** No tension exists. The system can directly fulfill the reader's needs. Result: mechanical assembly. CD-002 demonstrates this -- tasks and decisions map directly to the system's container-and-border vocabulary, so no creative leap is needed or produced.

**Sweet spot (40-70% overlap):** Enough shared structural DNA for the metaphor to USE the system's tools, but enough GAP for the metaphor to need to REINTERPRET those tools. OD-004 sits here -- the system can do layers and ordering (overlap) but can't do warmth or graduated feeling (gap). The geological metaphor uses the overlap as its medium and bridges the gap.

**Low overlap (<30%):** The tension is so extreme that conventional metaphor fails. The resolution requires a fundamentally different creative strategy -- literalism (OD-006's self-documenting page), meta-commentary, or structural inversion. These resolutions can be brilliant but they are harder to find, harder to execute, and harder to teach.

### Implications for the Skill

The overlap percentage should be CALCULATED as a diagnostic step in Phase 3:

1. Count Side A structural properties
2. Count Side B structural properties
3. Count properties that appear on both lists
4. Overlap = shared / total unique properties

If overlap > 80%: WARNING -- low tension. Consider whether this content actually needs metaphor, or whether assembly is appropriate.
If overlap 40-70%: IDEAL zone. Proceed with constrained associative search.
If overlap < 30%: WARNING -- extreme tension. Expect the metaphor to be unconventional. Consider literalism, meta-commentary, or structural inversion as strategies.

---

## 4. THE ISOMORPHISM TABLE: Scoring Metaphor Candidates

### Current State in the SKILL.md

Phase 3, Step 3.4 currently uses a simple scoring format:

```
CANDIDATE: [metaphor name]
Tension 1: Resolves? YES/PARTIAL/NO
Tension 2: Resolves? YES/PARTIAL/NO
...
SCORE: X/N tensions fully resolved
```

This is adequate but undersells the evaluation. Three improvements:

### Improvement 1: Structural Isomorphism Count

Beyond "does it resolve the tension?" ask "HOW MANY independent structural mappings does it produce?"

```
CANDIDATE: Geological strata
ISOMORPHISM TABLE:
| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| Deeper = older | More established = higher confidence | Border-weight gradient |
| Compression with depth | Denser with uncertainty | Progressive tightening (5 channels) |
| Sharp boundaries between layers | Clear confidence level transitions | Stratum boundary markers |
| Survey maps before excavation | Overview before depth | Dark header survey |
| Independent layers | Independent confidence levels | Standalone stratum value |
| You choose dig depth | You choose reading depth | Confidence switcher |
ISOMORPHISM COUNT: 6 (STRONG)
```

An isomorphism count of:
- **6+**: Structurally isomorphic. The metaphor is not decoration -- it IS the content's structure. Proceed with high confidence.
- **4-5**: Structurally strong. The metaphor has genuine depth but may have dimensions it doesn't cover. Acceptable.
- **2-3**: Structurally thin. The metaphor works at surface level but will feel like analogy rather than architecture. Consider whether a different candidate has more depth.
- **0-1**: Decorative only. Reject this candidate.

### Improvement 2: Content Resonance Score

Does the metaphor use vocabulary that the content's domain ALREADY USES?

```
CANDIDATE: Geological strata
CONTENT DOMAIN: API stability and confidence levels
RESONANCE CHECK:
- "Stability" --> geological (bedrock, foundation, solid ground) = HIGH
- "Confidence levels" --> geological (depth = establishment) = HIGH
- "Best practices" --> geological (proven over time, compressed by pressure) = MEDIUM
- "Open questions" --> geological (unexplored territory, surface material) = MEDIUM
RESONANCE SCORE: HIGH (content vocabulary naturally maps to metaphor vocabulary)
```

### Improvement 3: Mechanism Feasibility

Can the metaphor's properties be expressed using ONLY the design system's tools?

```
CANDIDATE: Geological strata
MECHANISM FEASIBILITY:
| Metaphor Property | Required System Tool | Available? | Feasible? |
|---|---|---|---|
| Layer depth | Border-weight gradient | Yes (1px, 3px, 4px) | YES |
| Compression | Spacing/typography scale | Yes (mathematical spacing) | YES |
| Sharp boundaries | 3px rule lines | Yes | YES |
| Survey map | Dark header with minimap | Yes (background + borders) | YES |
| Depth choice | Tab switcher | Yes (semantic HTML) | YES |
| Temperature shift | Zone background tokens | Yes (4 zone tokens) | YES |
FEASIBILITY: 6/6 -- all properties expressible in system vocabulary
```

If any metaphor property REQUIRES a tool the system doesn't have (e.g., "soft gradients" requiring CSS gradients that violate soul), the metaphor fails at the mechanism level, no matter how good its structural isomorphism.

### Recommended Composite Score

```
CANDIDATE: [metaphor name]
  Tension Resolution: X/N tensions (YES/PARTIAL/NO for each)
  Isomorphism Count: X (STRONG/ACCEPTABLE/THIN/DECORATIVE)
  Content Resonance: HIGH/MEDIUM/LOW
  Mechanism Feasibility: X/X properties expressible

  COMPOSITE: [PROCEED / CONSIDER / REJECT]
  - PROCEED: All tensions resolved + isomorphism >= 4 + resonance >= MEDIUM + feasibility 100%
  - CONSIDER: Most tensions resolved + isomorphism >= 3 + resonance >= LOW + feasibility >= 80%
  - REJECT: Any tension unresolved + isomorphism < 3, OR feasibility < 80%
```

---

## 5. METAPHOR FAILURE MODES

### Mode 1: Metaphor Monopoly (Only 1 Candidate)

**Symptom:** The constrained associative search produces exactly ONE candidate. No alternatives survive the filters.

**Diagnosis:** The constraints may be too tight. Review whether some "constraints" are actually preferences. OR, the one candidate may genuinely be the only viable metaphor, which happens when the tension is highly specific.

**Risk:** Without alternatives to compare against, you cannot assess whether the monopoly candidate is GOOD or merely SURVIVING. A surviving metaphor is not necessarily a resonant one.

**Recovery strategies:**
1. **Relax one constraint** temporarily and search again. If relaxing constraint C produces 3 additional candidates, then C was over-constraining.
2. **Test the monopoly candidate extra hard.** If isomorphism count >= 5 and content resonance is HIGH, the monopoly may be genuine (geological strata for OD-004 was essentially a monopoly -- the only domain that is simultaneously angular, layered, ordered, and warm).
3. **Accept the monopoly if it's strong.** Not every tension produces multiple candidates. A single, deeply isomorphic metaphor is better than a forced choice between a good candidate and weak alternatives.

### Mode 2: Metaphor Inflation (Too Many Candidates)

**Symptom:** The constrained search produces 8+ candidates. The constraints didn't sufficiently narrow the space.

**Diagnosis:** The tension may be COSMETIC rather than GENUINE. If Side A and Side B don't genuinely oppose, many domains will resolve the (non-existent) tension trivially.

**Risk:** Choice paralysis. With too many candidates, the selection becomes arbitrary rather than inevitable. The resulting composition will feel CHOSEN rather than NECESSARY.

**Recovery strategies:**
1. **Re-examine the tension.** Is it genuine? Does Side A truly need something Side B cannot directly provide? If the tension is cosmetic, abandon the metaphor search -- this is a Track 1 (assembly) page, not Track 2.
2. **Tighten constraints.** Add the content resonance filter. Many candidates that survive the structural filter will fail the resonance test.
3. **Apply the isomorphism count.** Most inflated candidate pools collapse when you demand >= 4 independent structural mappings. Shallow metaphors fail this test.

### Mode 3: Metaphor Forcing (No Candidate Fully Resolves)

**Symptom:** All candidates score PARTIAL on at least one tension. No candidate achieves a clean sweep.

**Diagnosis:** Two possible causes:
a. The tension is GENUINE but NOVEL -- no existing domain naturally resolves it. This is the hardest case.
b. One or more tensions are MISLABELED -- what appears to be a tension is actually a preference or aesthetic choice.

**Risk:** Proceeding with a partially-resolving metaphor produces a composition that feels strained on the unresolved dimensions. The reader senses "something is off" without knowing what.

**Recovery strategies:**
1. **Check for mislabeled tensions.** Re-read Phase 2 output. Is every listed tension genuinely a CONFLICT between reader need and system constraint? Or are some tensions between two reader needs, or two system properties? Only reader-vs-system tensions need metaphor resolution.
2. **Accept partial resolution consciously.** If a candidate resolves 3/4 tensions and the fourth is minor, document the gap honestly and proceed. Not every dimension needs metaphorical resolution -- some can be handled by direct design (spacing, color, typography).
3. **Combine two metaphors.** DANGEROUS but sometimes necessary. If metaphor A resolves tensions 1-3 and metaphor B resolves tension 4, consider whether A and B can coexist on the same page without incoherence. This is rare and requires careful section-level segregation.
4. **Consider OD-006's strategy: literalism.** When no external domain resolves the tension, ask whether the content can BE its own metaphor. Self-referential compositions bypass the need for an external bridging domain.

### Mode 4: Metaphor Redundancy (Two Candidates Resolve Identically)

**Symptom:** Two or more candidates produce identical tension resolution patterns and similar isomorphism counts.

**Diagnosis:** The candidates are likely from the SAME metaphor family (e.g., "archaeological dig" vs. "geological strata" are both from the geological/sedimentary family).

**Risk:** Low -- either candidate would work. But the choice feels arbitrary rather than inevitable.

**Resolution criteria when candidates tie:**
1. **Content resonance tiebreaker.** Which metaphor uses vocabulary the content ALREADY uses? OD-004's content about "stability" and "layers" resonates more with "geological strata" than with "archaeological dig" (which implies destruction/excavation).
2. **Emotional valence tiebreaker.** Which metaphor's emotional register matches the reader's need more precisely? "Geological strata" connotes FOUNDATION (reassuring); "archaeological dig" connotes EXCAVATION (effortful). For a reader needing safety, foundation wins.
3. **Mechanism richness tiebreaker.** Which metaphor produces more DISTINCT CSS mechanisms? If both produce the same mechanisms (border-weight gradient, zone backgrounds), the tiebreaker is immaterial -- pick either.

### Mode 5: Metaphor Decay (Metaphor Weakens During Implementation)

**Symptom:** A metaphor that scored well in Phase 3 evaluation loses coherence during Phase 4 (layout translation). The mechanisms feel forced. The isomorphism table was accurate in theory but fails to produce satisfying visual results.

**Diagnosis:** The metaphor was structurally isomorphic but PERCEPTUALLY flat. The structural mapping was correct but the VISUAL EXPERIENCE doesn't convey the metaphor's properties. This happens when the design system's tools are too uniform to express the metaphor's variety.

**Recovery strategies:**
1. **Return to Phase 3** and select the next-best candidate. Decay usually means the metaphor was correct on paper but didn't survive contact with CSS.
2. **Modulate more channels.** Progressive tightening across only 1-2 channels is imperceptible. OD-004 used FIVE simultaneous channels (typography, line-height, padding, font-size, content density). If the metaphor is decaying, check whether enough channels are being modulated to make the metaphor FELT.
3. **Add isomorphisms.** If the metaphor had 3 structural mappings and one feels forced, the entire metaphor feels forced. Can you find 1-2 additional mappings that strengthen the perception?

---

## 6. THE "IRREDUCIBLE CREATIVE STEP": HONEST ANALYSIS

### What Is Truly Irreducible

After full decomposition, the irreducible creative moment is SMALLER than the tension protocol claims but REAL. Here is what can be proceduralized and what cannot:

**FULLY PROCEDURAL (mechanical, can be done by rule):**
- Extracting structural properties from Side A and Side B (Sub-steps A and B)
- Computing the structural overlap (Sub-step C)
- Generating the search query from overlap + gap properties (Sub-step D)
- Testing candidates against tensions (Sub-step F)
- Checking structural isomorphism (Sub-step G)
- Scoring and ranking candidates (the composite score)

**PARTIALLY PROCEDURAL (can be guided but not automated):**
- Searching real-world domains (Sub-step E): The three elimination filters (constraint compatibility, content resonance, emotional valence) can be APPLIED mechanically. But the pool of domains to search is the designer's accumulated experience. The search is guided but the DATABASE is not procedural -- it is whatever domains the designer has encountered.

**IRREDUCIBLY CREATIVE (genuine judgment, not encodable):**
- The FINAL SELECTION among tied candidates when the composite scores are equal or near-equal. When geological strata and archaeological excavation both score 5/6 on isomorphism and both resolve 4/4 tensions, the choice between them is aesthetic judgment -- the sense that one "rings truer" than the other for this specific content.
- The RECOGNITION that a domain exists where the constraint IS the solution. This is the analogical reasoning step. You can tell someone to search for domains where angularity is warmth, but you cannot make them see that geological strata fits this description. The recognition is an act of perception, not deduction.

### The Irreducible Moment Is Perhaps Two Seconds, Not Five

The decomposition reveals that three of the "five seconds" are actually procedural:
- ~1 second: generating the search query (Sub-step D, procedural)
- ~1 second: running elimination filters (Sub-step E-filters, partially procedural)
- ~2 seconds: recognizing a match (Sub-step E-recognition, irreducibly creative)
- ~1 second: confirming the match against tensions (Sub-step F, procedural)

The irreducible creative moment is the RECOGNITION -- the moment when the designer's mental domain database returns "geological strata" and the designer immediately perceives that it fits. This recognition cannot be taught as a procedure. But it CAN be cultivated by:

1. **Expanding the domain database.** Exposure to diverse real-world domains (geology, architecture, cartography, music, biology, manufacturing, editorial, culinary, military, nautical, astronomical) increases the probability that a fitting domain exists in memory. The skill file should recommend building familiarity with physical/spatial domains especially, since angular/flat design systems map most naturally to physical structures.

2. **Practicing the search query format.** Running the query "What is naturally [CONSTRAINT PROPERTIES] while conveying [NEED PROPERTIES]?" repeatedly across different content types builds the skill of constrained associative search. Like any cognitive skill, it improves with practice.

3. **Studying successful resolutions.** The existing explorations (OD-004 geological, OD-001 interview transcript, OD-006 self-documentation, DD-006 fractal) are training data. Each one demonstrates how a specific tension was bridged by a specific metaphor. The more resolutions a designer has studied, the richer their repertoire of RESOLUTION STRATEGIES (not resolution answers -- strategies for how to FIND answers).

### Providing Categories of Domains to Search

To partially address the "domain database" problem, the skill file can provide a SEARCH MENU of domain categories organized by which system constraints they are compatible with:

**For angular/flat/sharp systems like KortAI:**

| Domain Category | Compatible Properties | Best When Content Is About |
|---|---|---|
| Geological | Angular, layered, ordered, compressed | Stability, maturity, confidence, progression |
| Architectural | Angular, precise, load-bearing, zoned | Systems, frameworks, dependencies, structure |
| Typographic/Editorial | Angular (grid), precise, hierarchical | Information hierarchy, editorial judgment, style |
| Cartographic | Angular (grid), flat (2D), bounded | Navigation, exploration, territory, scope |
| Industrial/Mechanical | Angular, precise, toleranced, assembled | Tools, processes, APIs, build systems |
| Scientific/Laboratory | Precise, institutional, measured, observed | Testing, validation, data, research |
| Legal/Contractual | Formal, precise, structured, authoritative | Policies, requirements, specifications, contracts |
| Archival/Catalogic | Ordered, classified, preserved, indexed | Collections, taxonomies, inventories, registries |
| Military/Strategic | Precise, hierarchical, territorial, decisive | Decision trees, priorities, risk, triage |
| Astronomical/Surveying | Precise, mapped, measured, vast | Scale, overview, positioning, orientation |

This table is NOT a lookup table (it does not say "use geology for confidence content"). It is a SEARCH MENU -- a curated list of domains to search when running the constrained associative query. The designer scans the menu and asks "does any of these fit my specific query?" The selection is still creative; the menu merely ensures the designer doesn't overlook viable domains.

---

## 7. ENRICHMENT CONTENT FOR SKILL.MD PHASE 3

Based on the above analysis, here is the content that should replace the `[TEAM ENRICHMENT PLACEHOLDER]` in Phase 3 of the SKILL.md:

### 7.1 Structural Overlap Diagnostic

After extracting structural properties (Steps 3.1-3.2), CALCULATE the overlap percentage:

```
Overlap = (shared properties) / (total unique properties across both sides)

> 80%: LOW TENSION -- consider whether this content is Track 1 (assembly).
       Metaphor may be unnecessary. Proceed only if a genuine gap exists.
40-70%: IDEAL ZONE -- strong metaphor potential. Proceed with search.
< 30%: EXTREME TENSION -- expect unconventional resolution. Consider
        literalism, meta-commentary, or structural inversion.
```

### 7.2 Domain Search Menu

When running the constrained associative search (Step 3.3), scan these domain categories for compatibility with KortAI's angular/flat/sharp constraints:

[The table from Section 6 above]

### 7.3 Composite Scoring

When testing candidates (Step 3.4), score on four dimensions:

1. **Tension Resolution**: X/N tensions (YES = 1, PARTIAL = 0.5, NO = 0)
2. **Structural Isomorphism Count**: Number of independent property mappings (>= 4 = strong)
3. **Content Resonance**: Does the content's vocabulary naturally map to the metaphor's vocabulary? (HIGH/MEDIUM/LOW)
4. **Mechanism Feasibility**: Can every metaphor property be expressed using ONLY the system's CSS tools? (X/X properties)

```
PROCEED: Resolution >= N-1, Isomorphism >= 4, Resonance >= MEDIUM, Feasibility = 100%
CONSIDER: Resolution >= N-2, Isomorphism >= 3, Resonance >= LOW, Feasibility >= 80%
REJECT: Any other combination
```

### 7.4 Failure Mode Awareness

After selecting a metaphor, verify that none of these failure modes apply:

- **Monopoly**: Only 1 candidate survived. Is it genuinely the best, or were constraints too tight?
- **Inflation**: 8+ candidates survived. Is the tension genuine, or cosmetic?
- **Forcing**: No candidate resolves all tensions. Is a partial resolution acceptable?
- **Redundancy**: Two candidates tie. Apply content resonance tiebreaker.
- **Decay**: The metaphor weakens during Phase 4. Are enough channels being modulated?

### 7.5 The Irreducible Creative Moment

The pipeline procedurializes everything EXCEPT the moment of recognition in Step 3.3: the perception that a specific real-world domain IS the bridge between constraint and need. This moment is cultivated by:

1. Expanding domain familiarity (geology, architecture, cartography, editorial, industrial, scientific, legal, archival)
2. Practicing the search query format: "What is naturally [CONSTRAINT PROPERTIES] while conveying [NEED PROPERTIES]?"
3. Studying successful resolutions (OD-004, OD-001, OD-006, DD-006) as training data for resolution STRATEGIES

The protocol cannot provide the metaphor. It CAN constrain the search space so dramatically that the metaphor, when found, feels inevitable.

---

## 8. CROSS-TEAM CONNECTIONS

### For tension-analyst

The QUALITY of the tension directly determines the quality of the metaphor search. Specific connections:

- **Genuine vs. cosmetic tension**: If the tension is cosmetic (Side A and Side B don't truly oppose), the metaphor search will produce inflation (too many candidates, all shallow). The tension analyst's role in distinguishing genuine from cosmetic tension is the upstream gatekeeper for metaphor quality.

- **Constituent tension count**: OD-004 had 4 constituent tensions. The MORE tensions that need resolution, the MORE constrained the metaphor search becomes, and paradoxically the BETTER the metaphor tends to be (because fewer candidates survive all four filters). One-tension cases (like CD-004's single-axis ANTI-PHYSICAL constraint) tend to produce thinner metaphors.

- **Tension articulation precision**: The specific words used to describe the tension directly prime the domain search. "Warmth vs. austerity" leads to different domains than "invitation vs. formality" even though both are part of OD-004's tension set. The tension analyst's vocabulary feeds directly into the metaphor analyst's search query.

### For layout-translator

The metaphor's properties feed directly into layout decisions. Specific connections:

- **Metaphor properties ARE layout properties.** The isomorphism table's right column ("Design System Implementation") is the layout translator's input. Each row specifies a CSS mechanism that the metaphor demands.

- **Coherence checking is metaphor validation.** The layout translator's coherence check (Step 4.3 in the SKILL.md) is verifying that all mechanisms shift in the direction the METAPHOR demands. If the metaphor implies "descent" (geological strata: deeper = more compressed), then border weight, spacing, and typography must ALL decrease. Incoherence means the layout is fighting the metaphor.

- **Metaphor decay detection.** The layout translator is the first to detect decay (Failure Mode 5). If mechanisms feel forced during implementation, the feedback loop should return to Phase 3 for metaphor reconsideration, not force the metaphor through Phase 4.

- **The number of isomorphisms bounds the number of distinct CSS mechanisms.** A 6-isomorphism metaphor produces 6 distinct mechanisms to implement. A 3-isomorphism metaphor produces 3. The layout translator should expect proportional complexity.

---

*Analysis complete. 7 sub-steps decomposed from the "five seconds." 6 compatible metaphor families cataloged. Sweet spot for structural overlap identified (40-70%). 5 failure modes documented with recovery strategies. The irreducible creative moment narrowed from "five seconds" to approximately two seconds of analogical recognition. Domain search menu provided as procedural aid.*
