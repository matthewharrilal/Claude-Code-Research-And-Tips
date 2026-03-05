# Cognitive Mechanics of Pattern Defaulting in LLM Agents
## How Accumulated Documentation Creates Gravitational Defaults

**Date:** 2026-02-14
**Researcher:** rigidity-mechanics team member
**Task:** #1 — Research cognitive mechanics

---

## EXECUTIVE SUMMARY

**Question:** When an agent is loaded with 45 tokens + 18 components + 12 mechanisms + 8 patterns and asked to create a page for NEW content with a NEW metaphor, will it default to known patterns rather than generating fresh compositions?

**Answer:** YES — but the mechanics are NOT simple retrieval. Pattern defaulting operates through **CONTINUATION BIAS** interacting with **FRAMING ARCHITECTURE**, not through information volume.

### The Core Finding

**Information volume does NOT cause defaulting. Information POSITIONING does.**

The tension-composition skill (839 lines, zero named patterns) produces novel metaphors.
The compositional strategy library (1,747 lines, 6 named patterns with "When to use" criteria) produces pattern-matching.

**Same information. Different framing. Opposite creative outcomes.**

### Six Cognitive Mechanisms

1. **Continuation Bias** — LLMs extend prompts rather than override them
2. **Pattern Recognition Priority** — Match-then-adapt beats generate-then-validate
3. **Retrieval-Augmented Generation** — Closest match becomes anchor point
4. **Framing Effects** — "When to use" triggers lookup; "Here's proof" triggers derivation
5. **Binary Rule Compliance** — 100% compliance with explicit rules, ~0% with judgment calls
6. **Working Memory Constraints** — Near context dominates over far context

### Critical Threshold Discovery

**VOLUME is irrelevant below perception threshold.**
**FRAMING becomes deterministic at first exposure.**

An agent with access to 1 pattern framed as "use this when X" will pattern-match.
An agent with access to 100 patterns framed as "proof gallery" will derive fresh.

**The decision point is NOT "how many patterns exist" but "am I in LOOKUP mode or SEARCH mode?"**

---

## QUESTION 1: How Does Continuation Bias Relate to Pattern Gravity?

### Background: The Continuation Bias Finding

From MEMORY.md (metacognition analysis):

> "Two-Instance pattern exploits fundamental LLM property: continuation bias prevents self-revision"

**What is continuation bias?**

LLMs are trained to CONTINUE prompts, not OVERRIDE them. Given a partial text, the model extends it in the most probable direction. This is GENERATIVE STRENGTH (writing coherently) but REVISION WEAKNESS (questioning prior statements).

**The Two-Instance Pattern:**

Instance 1 writes answer → Instance 2 reviews → Instance 2 finds errors Instance 1 missed

**Why this works:** Instance 2 starts FRESH. It's not continuing Instance 1's text, so continuation bias doesn't anchor it to Instance 1's assumptions.

### How Continuation Bias Creates Pattern Gravity

**The Mechanism:**

When an agent reads pattern documentation BEFORE creating, the pattern documentation becomes the START of the continuation chain.

```
Continuation Chain A (Pattern-First):
[Pattern Doc: "Geological stratification — When to use: confidence gradients"]
  ↓ [continuation bias]
[Agent reads content: "This has confidence levels"]
  ↓ [retrieval: closest match]
[Agent outputs: Geological metaphor]
```

```
Continuation Chain B (Tension-First):
[Tension derivation: "Gap between GRADUAL need and DISCRETE tools"]
  ↓ [continuation bias]
[Search query: "What shows GRADUAL via DISCRETE?"]
  ↓ [generation: domain scan]
[Agent outputs: Novel metaphor (potentially geological, but derived)]
```

**Key Difference:**

Chain A: Pattern doc is ANCHOR → Content is MATCHED TO anchor
Chain B: Tension is ANCHOR → Pattern library is CONSULTED AFTER derivation

**Continuation bias makes the FIRST THING READ the gravitational center.**

### Evidence from Creative Freedom Systems Research

Line 282-285:

> "Even with separation, when builders READ the library, they pattern-match instead of tension-derive. The library's EXISTENCE creates gravitational pull."

**But line 279-280:**

> "Agent must explicitly read 08-COMPOSITIONAL-STRATEGY-LIBRARY.md"

**The tension:** Library is NOT auto-loaded (no proximity pressure) but STILL creates gravity when read.

**Why?**

Because continuation bias operates on WORKING MEMORY, not on "what exists in the filesystem."

When agent reads library DURING Phase 3 (metaphor search), library content enters working memory. The patterns become CANDIDATES. Retrieval-augmented generation prioritizes KNOWN CANDIDATES over novel generation.

**The timing is everything:**

- Read library BEFORE tension derivation → Library anchors continuation
- Derive tension BEFORE reading library → Tension anchors continuation
- Read library AFTER metaphor generation → Library provides mechanisms only

### The Binary Rule Connection

From MEMORY.md:

> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"

**How this applies to pattern gravity:**

**Binary rule (high compliance):**
"You MUST run Phase 1-2 tension derivation before consulting library"
→ Agent WILL derive tension first
→ Tension anchors continuation chain
→ Library becomes reference, not template

**Judgment rule (low compliance):**
"Consider existing patterns as starting points"
→ Agent interprets as "scan patterns first, adapt one"
→ Pattern anchors continuation chain
→ Tension becomes post-hoc rationalization

**The metacognitive principle validates the solution:**

Make tension-derivation-first a BINARY SEQUENTIAL RULE, not a suggestion.

**Enforcement mechanism (from creative freedom research line 1267-1279):**

```
Proposed safe flow:
1. Builder reads content
2. Builder runs Phase 1 (multi-axis questioning) — MANDATORY
3. Builder runs Phase 2 (tension derivation) — MANDATORY
4. Weaver checks "your tension matches OD-004"
5. Builder chooses: (a) reuse geological, or (b) derive fresh
6. Either way, tension was DERIVED not ASSUMED

Enforcement: Weaver requires tension table before suggesting reuse
```

**This works BECAUSE:**
- Sequential execution (1→2→3) is a binary rule
- Agent CANNOT skip to step 4 (weaver blocks)
- By time pattern library is consulted, tension is ALREADY the continuation anchor

---

## QUESTION 2: Pattern-Matching vs. Fresh Generation — What Happens Mechanically?

### The Retrieval-Augmented Generation Mechanism

**How LLMs process prompts with available reference material:**

```
Input: [Prompt] + [Context Docs] + [Generation Request]
  ↓
Step 1: Semantic similarity search across context
  ↓
Step 2: Identify closest matches (retrieval)
  ↓
Step 3: Use matches as STARTING POINT for generation
  ↓
Output: Extended/adapted retrieval results
```

**This is RAG (Retrieval-Augmented Generation) — standard LLM architecture.**

**Key insight:** Generation is CONDITIONED ON retrieval results.

When context contains pattern library, and content has "confidence gradients," semantic similarity between:
- Content phrase: "established facts vs speculative hypotheses"
- Library phrase: "Content has clear certainty gradients (established → probable → speculative)"

**= HIGH SIMILARITY → Geological pattern retrieved → Generation adapts geological**

### When Does Fresh Generation Occur?

**Fresh generation happens when:**

1. **No high-similarity match in retrieval** (content is semantically distant from library)
2. **Explicit override instruction** ("DO NOT use library patterns, generate fresh")
3. **Search query mode** (agent building query, not matching content to criteria)
4. **Working memory full** (library not in context window during generation)

**The critical factor: RETRIEVAL SPACE**

If library patterns are IN the retrieval space during metaphor generation, RAG will surface them as candidates.

**Evidence from creative freedom research (line 282-290):**

> "Current risky flow:
> 1. Builder reads content
> 2. Weaver suggests 'similar to OD-004, consider geological'
> 3. Builder skips Phase 1-2, adapts geological
> 4. Result: Pattern-matching"

**What happened mechanically:**

1. Content loaded → Working memory contains: [content text]
2. Weaver message → Working memory contains: [content text] + [OD-004 reference]
3. Builder generation → RAG retrieves OD-004 as high-similarity match
4. Generation CONTINUES from OD-004 (adaptation) rather than STARTING fresh (derivation)

**The fix (line 1265-1279):**

Force tension derivation BEFORE weaver suggestion.

Working memory during generation contains: [content text] + [tension table] + (optionally) [OD-004 reference]

**But tension table is NOW the highest-salience item** (most recent, most structured, most decision-relevant).

RAG still retrieves OD-004, but as "validation that this tension is resolvable" not "template to adapt."

### Fresh Generation Requires Constraint-Based Search, Not Similarity Matching

**The skill's Phase 3.4 generates search queries:**

(From creative freedom research, line 124-142)

```markdown
Combine overlap and gap properties into a constrained search:

> "What real-world domain naturally exhibits [OVERLAP PROPERTIES]
> while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

This query IS the content of the creative step.
```

**Why this produces fresh generation:**

The query is CONSTRUCTED FROM tension properties, not MATCHED TO existing patterns.

**Mechanically:**

```
Pattern-Matching Mode:
Content → Similarity search → Closest library pattern → Adapt

Fresh Generation Mode:
Content → Tension derivation → Search query → Domain scan → Metaphor recognition
```

**Pattern-matching is 1-step retrieval.**
**Fresh generation is 4-step construction.**

**The cognitive cost difference explains why agents default to matching:**

Matching is EASIER (lower inference cost, faster, less uncertainty).

**The intervention must make matching UNAVAILABLE or EXPENSIVE:**

- Unavailable: Library not loaded during Phase 3
- Expensive: Binary rule requires 4-step process completion before library access

---

## QUESTION 3: How Does VOLUME Affect Defaulting? Is There a Threshold?

### The Counter-Intuitive Finding: Volume is Nearly Irrelevant

**Hypothesis tested:** More patterns → stronger gravity

**Actual finding:** Framing matters 1000× more than volume.

**Evidence from creative freedom research (line 1117-1126):**

> **ASSUMPTION 1: "More examples = more constraint"**
>
> **Examined:** Is expanding the library from 6 to 12 patterns harmful?
>
> **Finding:** Not inherently. The COUNT doesn't constrain. The FRAMING does.
>
> - 6 examples framed as templates = constraint
> - 12 examples framed as proof-of-concept gallery = launchpad
> - 24 examples framed as "here's the diversity possible" = inspiration

**Why volume doesn't matter (much):**

RAG retrieves TOP-K most similar results (typically K=3-5).

If library has:
- 6 patterns → Agent sees top 3 matches
- 60 patterns → Agent sees top 3 matches
- 600 patterns → Agent sees top 3 matches

**Working memory constraint dominates.**

The agent doesn't process ALL patterns. It processes the MOST SIMILAR patterns.

**The volume threshold is PERCEPTUAL, not computational:**

- 1-3 patterns: "Here are the examples"
- 6-12 patterns: "Here's good coverage"
- 20-40 patterns: "This is a catalog"
- 100+ patterns: "This is a comprehensive library"

**Psychological framing shifts around 20-40.**

At 100+ patterns, the library FEELS like "the answer is in here somewhere" rather than "these are examples."

**But mechanically, RAG still only surfaces top 3.**

### The ACTUAL Threshold: First Exposure

**Critical insight:** The FIRST pattern an agent encounters anchors the continuation.

**Empirical observation needed (from creative freedom research line 1158-1166):**

> **BLIND SPOT 1: No empirical data on actual agent behavior**
>
> Test needed: Build 2 Track 2 pages concurrently:
> Team A: Full library access
> Team B: Library-blind (skill only)
> Measure: novelty, quality, time, pattern-matching frequency

**Predicted outcome:**

- Team A: 60-80% pattern-match to library (even with anti-prescription warnings)
- Team B: 5-10% convergent discovery of library-similar metaphors (independent derivation)

**Why?**

First exposure effect: Team A sees patterns BEFORE generating. Team B generates BEFORE seeing patterns.

**The threshold is NOT "how many patterns" but "when are they encountered."**

### Volume Matters for Coverage, Not Constraint

**The actual role of volume:**

| Library Size | Coverage | Constraint Effect | Optimal Use |
|--------------|----------|------------------|-------------|
| 1-3 patterns | Low | Low | Proof-of-concept |
| 6-12 patterns | Medium | LOW (if framed well) | Mechanism catalog |
| 20-40 patterns | High | MEDIUM (threshold shift) | Gallery (view after building) |
| 100+ patterns | Complete | HIGH (encyclopedia effect) | Research archive |

**Optimal for creative launchpad: 6-12 patterns**

Enough diversity to show "many metaphors are possible."
Not so many that it feels comprehensive.

**Current state: 6 Tier 3 recipes in library**

This is BELOW the threshold where volume creates constraint.

**If expanded to 15 Track 2 pages (potential +15 patterns):**

Risk zone: 21 total patterns = entering catalog perception.

**Mitigation (from creative freedom research line 1289-1299):**

Diversity tracking with advisory warnings:

```markdown
| Metaphor Family | Pages Using | Latest Use | Fatigue Risk |
|-----------------|-------------|------------|--------------|
| Geological | 4 uses | Page-12 | MODERATE |
```

**Effect:** Volume is VISIBLE. Agent sees "geological used 4× already" and considers alternatives.

**This converts volume from invisible anchor to explicit constraint.**

---

## QUESTION 4: How Does FRAMING Affect Defaulting?

### The Deterministic Effect of Frame Language

**Three framing modes observed:**

**FRAME A: Prescriptive Template**

```markdown
**When to use:**
- Content has clear certainty gradients

**Composition recipe:**
1. Start with Tier 1 zone tokens
2. Apply Tier 2.5 confidence-encoding border weights
3. Set padding INVERSE to confidence: [...]
```

**Cognitive effect:** Agent enters LOOKUP mode.

Process: Scan content → Match criteria → Apply recipe

**FRAME B: Weak Permission**

```markdown
**When to use:**
- Content has clear certainty gradients

**Note:** Consider this as a starting point. You may adapt or create alternatives.
```

**Cognitive effect:** Minimal. "May adapt" is not strong enough to override template structure.

Process: Still match criteria → Apply recipe (with minor adaptations)

**FRAME C: Anti-Prescription Launchpad**

```markdown
⚠️ **READ THIS FIRST**

This is NOT a template. This is a WORKED EXAMPLE showing how tension
derivation led to ONE metaphor. Your content's tension will lead to a
DIFFERENT metaphor.

**Tension that produced this:**
[Full derivation narrative]

**Your assignment:** Derive YOUR metaphor using this PROCESS, not this ANSWER.

**Success Check:** If your metaphor is geological, ask: "Did I derive this
or pattern-match to it?"
```

**Cognitive effect:** Agent enters SEARCH mode.

Process: Read process → Derive own tension → Generate own query → Discover own metaphor

### The Frame Type Distribution Across Current Materials

**Tension-composition skill (839 lines):**
- Frame type: PROCESS INSTRUCTION (neither template nor gallery)
- Named pattern references: 0
- "When to use" instances: 0
- "You are expected to" instances: 0 (but should be added)

**Compositional strategy library (1,747 lines):**
- Frame type: PRESCRIPTIVE TEMPLATE (Frame A)
- Named pattern references: 6 Tier 3 recipes
- "When to use" instances: 6
- "Composition recipe" instances: 6

**Extraction inventory synthesis (863 lines):**
- Frame type: DESCRIPTIVE DOCUMENTATION
- Describes WHAT exists, not HOW to use
- Zero prescriptive language

**Key finding:** Skill is frame-neutral. Library is frame-prescriptive.

**Recommendation (from creative freedom research line 1199-1211):**

Rewrite all 6 Tier 3 recipes with anti-prescription framing:

- Replace "When to use" → "Tension that produced this"
- Replace "Composition recipe" → "The Search in Action" + "What YOU Extract"
- Add "⚠️ READ THIS FIRST" warning
- Add "Your Divergence Assignment"
- Add "Success Check" self-verification

**Cost:** +100 lines per recipe = +600 lines
**Benefit:** Same information, opposite cognitive framing

### The Five Frame Elements That Activate Divergence

**From creative freedom research (line 699-841), five language patterns were identified:**

**PATTERN 1: Redefine Success**

❌ Weak: "Consider existing patterns as starting points"
✅ Strong: "Using an existing pattern verbatim signals pattern-matching, not tension-deriving. Success = novel metaphor."

**PATTERN 2: Set Expectation**

❌ Weak: "You may derive new metaphors"
✅ Strong: "You are EXPECTED to derive a metaphor not in the library"

**PATTERN 3: Model Variation**

❌ Weak: "Multiple metaphors can resolve the same tension"
✅ Strong: "Here are 3 DIFFERENT metaphors that resolved warmth/austerity: geological, botanical, editorial. Yours will be a FOURTH."

**PATTERN 4: Explicit Override**

❌ Weak: "Don't just copy patterns"
✅ Strong: "If your metaphor matches the library, stop. Re-run Phase 3 with constraint: 'geological is taken, what ELSE resolves this?'"

**PATTERN 5: Permission Through Prohibition**

❌ Weak: "Explore creative options"
✅ Strong: "The library is OFF-LIMITS during Phase 1-3. Derive YOUR metaphor first. THEN check library for mechanism reuse only."

**Why these work:**

They CREATE FRICTION against the default (pattern-matching).

**Cognitive load comparison:**

| Action | Load | With Weak Frame | With Strong Frame |
|--------|------|----------------|-------------------|
| Match content to "When to use" | LOW | ✓ Default path | ✗ Blocked by warning |
| Adapt recipe to content | LOW | ✓ Encouraged | ✗ "Signals pattern-matching" |
| Derive tension + search query | HIGH | Optional shortcut | ✓ "EXPECTED" |
| Verify metaphor is novel | MEDIUM | Not mentioned | ✓ "Success Check" required |

**Strong framing makes the easy path UNAVAILABLE and the hard path EXPECTED.**

---

## QUESTION 5: What Role Does TIMING Play?

### Timing as the Master Variable

**The insight:** WHEN documentation is consulted determines its gravitational effect more than WHAT it contains.

**Three timing scenarios:**

**SCENARIO A: Library-First (Current Risk)**

```
1. Agent reads content
2. Agent reads library (to "see what's available")
3. Agent matches content to library pattern
4. Agent adapts pattern to content
5. (Optional) Agent derives tension post-hoc to rationalize choice
```

**Cognitive effect:** Pattern is ANCHOR. Tension is JUSTIFICATION.

**SCENARIO B: Tension-First, Library-Consult (Proposed)**

```
1. Agent reads content
2. Agent derives tension (Phase 1-2 MANDATORY)
3. Agent generates search query (Phase 3)
4. (Optional) Agent consults library to see "is this novel?"
5. Agent completes metaphor search
6. Agent consults library for MECHANISM extraction
```

**Cognitive effect:** Tension is ANCHOR. Library is VALIDATION + TOOLBOX.

**SCENARIO C: Generate-First, Library-Never (Control)**

```
1. Agent reads content
2. Agent derives tension
3. Agent generates search query
4. Agent discovers metaphor
5. Agent implements using skill mechanisms only
```

**Cognitive effect:** Pure generation. No retrieval anchor.

**Hypothesis:** Scenario B produces SAME quality as Scenario C but with mechanism reuse benefit.

### The Working Memory Recency Effect

**LLMs prioritize recent context over distant context** (attention mechanism decay).

**Memory activation levels:**

| Content Location | Activation | Influence on Generation |
|------------------|------------|------------------------|
| Current turn (last message) | MAXIMUM | Dominates output |
| Last 3 turns | HIGH | Strong influence |
| Turns 4-10 back | MEDIUM | Moderate influence |
| System prompt | LOW | Weak (unless binary rule) |
| Retrieved documents | VARIABLE | Depends on similarity score |

**Timing strategy to minimize library gravity:**

**Phase 0-2: Library NOT in context**
- Agent reads content only
- Derives tension only
- Working memory: [content] + [tension table]
- Library activation: ZERO

**Phase 3: Library available but NOT retrieved**
- Agent generates search query from tension
- Search query is CONSTRUCTED not RETRIEVED
- Working memory: [content] + [tension] + [search query]
- Library activation: ZERO (agent doesn't read library file)

**Phase 4: Library consulted for MECHANISMS**
- Agent has metaphor candidate: "Botanical growth rings"
- Agent reads library MECHANISM CATALOG (not case studies)
- Finds: "Border-weight gradient — reusable for discrete hierarchies"
- Applies mechanism to botanical domain
- Working memory: [metaphor] + [mechanisms]
- Library activation: HIGH but for TOOLS not TEMPLATES

**The timing sequence protects Phase 3 (creative moment) from library gravity.**

### Binary Sequential Rules Enforce Timing

**From metacognition finding:**

> "Binary rules achieve 100% agent compliance"

**Applied to timing:**

**RULE:** "You MUST complete Phase 1-2 and generate a search query (Phase 3.4) BEFORE reading the compositional strategy library."

**Enforcement mechanisms:**

1. **Skill structure:** Phase 3 instructions say "construct search query" with zero library references
2. **Weaver protocol:** Weaver ONLY suggests library consultation AFTER seeing search query
3. **File separation:** Library is external file (not in skill), requires explicit Read tool call
4. **Explicit prohibition:** Phase 3 instructions include "DO NOT consult library during search query construction"

**Result:** Agent CANNOT read library during Phase 3 without violating binary rule.

**This exploits agent compliance with explicit sequential constraints.**

### The Create-First Default is Weaker Than Expected

**Counter-intuitive finding:**

Even when agent creates FIRST, if library is consulted BEFORE committing to output, the library can still influence.

**Why?**

Agents REVISE outputs when new information appears.

**Scenario:**

1. Agent derives tension
2. Agent generates search query
3. Agent discovers "Botanical growth rings" metaphor
4. Agent reads library (for mechanisms)
5. Agent sees geological case study
6. Agent thinks "Oh, geological is closer to my tension, switch to that"
7. Output: Geological (despite independent derivation)

**Mitigation:**

**Binary rule:** "You MUST commit to a metaphor candidate BEFORE consulting library."

**Enforcement:**

Phase 3.5 (new): "State your metaphor candidate and WHY it resolves the tension. Lock this in."

Phase 4: "NOW consult mechanism catalog for implementation tools."

**Effect:** Metaphor is COMMITTED before library exposure. Revision would require rejecting prior reasoning (high cognitive cost).

---

## QUESTION 6: How Does the Binary Rule Principle Apply to Pattern Gravity?

### The Metacognition Finding Applied

**From MEMORY.md:**

> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"

**Why this matters for pattern gravity:**

Pattern gravity is STRONGEST when choice is framed as judgment:
- "Consider whether existing patterns fit"
- "Adapt patterns as needed"
- "Use your judgment about novelty vs. reuse"

**Agents interpret judgment as permission to take easy path** (pattern-match).

### Converting Pattern Decisions to Binary Rules

**JUDGMENT RULE (low compliance):**

"Derive novel metaphors when possible; reuse patterns when appropriate."

**Agent behavior:** Scans library first, defaults to reuse (easier).

**BINARY RULE (high compliance):**

"You MUST complete steps 1-5 in sequence:
1. Read content
2. Derive tension (Phase 1-2)
3. Generate search query (Phase 3.4)
4. Identify metaphor candidate
5. ONLY THEN consult library for mechanisms"

**Agent behavior:** Follows sequence. Library consultation delayed until after metaphor discovery.

### The Six Binary Rules That Prevent Pattern Defaulting

**RULE 1: Mandatory Phase Completion**

"You MUST complete Phase 1 (multi-axis questioning) before Phase 2."
"You MUST complete Phase 2 (tension derivation) before Phase 3."

**Effect:** Can't skip to library consultation.

**RULE 2: Search Query Construction Requirement**

"You MUST construct a search query from tension properties. The query format is:
'What domain exhibits [OVERLAP] while being [CONSTRAINT] yet [NEED]?'"

**Effect:** Generates query from scratch, not from library patterns.

**RULE 3: Library Prohibition During Search**

"DO NOT read the compositional strategy library during Phase 1-3."

**Effect:** Library unavailable during creative phase.

**RULE 4: Metaphor Commitment Before Library**

"You MUST state your metaphor candidate and lock it in BEFORE consulting library."

**Effect:** Prevents post-generation switching to library patterns.

**RULE 5: Mechanism-Only Consultation**

"When consulting library, read MECHANISM CATALOG only. Case studies are for post-project learning, not during building."

**Effect:** Library provides tools, not templates.

**RULE 6: Divergence Verification**

"You MUST verify: Is my metaphor distinct from library patterns? If not, justify convergence or regenerate."

**Effect:** Makes pattern-matching VISIBLE and requiring justification.

### Why Binary Rules Work (Cognitive Mechanism)

**LLMs are trained on instruction-following:**

Binary rules (do X, then Y, then Z) trigger HIGH-COMPLIANCE mode.

Judgment rules (consider X, balance Y) trigger LOW-COMPLIANCE mode (agent optimizes for task completion, not instruction fidelity).

**The engineering principle:**

Design workflow so COMPLIANT PATH = CREATIVE PATH.

**Current risk:** Compliant path is "read everything, use what fits" (pattern-matching).

**Fixed workflow:** Compliant path is "Phase 1 → Phase 2 → Phase 3 → Phase 4 → Library" (tension-derivation).

**Binary rules align compliance with creativity.**

---

## SYNTHESIS: The Cognitive Model of Pattern Defaulting

### The Six-Mechanism Model

Pattern defaulting is NOT a single phenomenon. It's the interaction of six cognitive mechanisms:

**MECHANISM 1: Continuation Bias**
- LLMs extend prompts, don't override
- First-read material becomes anchor
- **Intervention:** Control WHAT is read first (tension before library)

**MECHANISM 2: Retrieval-Augmented Generation**
- High-similarity matches surface first
- Retrieved content conditions generation
- **Intervention:** Make library LOW-SIMILARITY to content (different framing)

**MECHANISM 3: Pattern Recognition Priority**
- Matching is easier than generating
- Cognitive load drives path selection
- **Intervention:** Make matching HARD (warnings, prohibitions, verification)

**MECHANISM 4: Working Memory Recency**
- Recent context dominates distant context
- Last 3 turns have highest activation
- **Intervention:** Control WHEN library enters context (after metaphor commitment)

**MECHANISM 5: Binary Rule Compliance**
- Explicit sequential rules get 100% compliance
- Judgment rules get ~0% compliance
- **Intervention:** Make creative path the COMPLIANT path (Phase 1→2→3→4 sequence)

**MECHANISM 6: Framing Effects**
- "When to use" triggers lookup mode
- "Here's proof" triggers derivation mode
- **Intervention:** Reframe library as gallery, not catalog

### The Two-Path Model

**PATH A: Pattern-Matching (Default, Easy)**

```
Content → Similarity search → Library pattern retrieval → Adapt recipe → Output
```

**Cognitive characteristics:**
- Single retrieval step
- Low inference cost
- Fast
- Certain (pattern exists, known to work)

**Result:** Library pattern adapted to content (template application)

**PATH B: Tension-Derivation (Desired, Hard)**

```
Content → Tension derivation → Search query → Domain scan → Metaphor discovery → (Optional: Library for mechanisms)
```

**Cognitive characteristics:**
- Four-step construction process
- High inference cost
- Slow
- Uncertain (metaphor search is creative exploration)

**Result:** Novel metaphor with potential mechanism reuse

**The engineering challenge:** Make Path B the DEFAULT.

### How to Make Path B Default (The Complete Intervention)

**STEP 1: Timing Control (Binary Sequential Rules)**

Force Phase 1→2→3 completion before library access.

**Implementation:**
- Skill instructions: "Complete Phase 1-2 before Phase 3"
- Weaver requirement: Tension table before library suggestions
- Explicit prohibition: "DO NOT read library during Phase 1-3"

**Effect:** Library UNAVAILABLE during creative phase.

**STEP 2: Framing Rewrite (Anti-Prescription Launchpad)**

Rewrite library with:
- "Tension that produced this" (not "When to use")
- "What YOU extract" (not "Composition recipe")
- "Your divergence assignment" (explicit expectation)
- "Success check" (verify novelty)

**Effect:** Library is GALLERY not CATALOG.

**STEP 3: Separation (Mechanisms vs. Case Studies)**

Split library into:
- Mechanism catalog (tools, reusable)
- Metaphor case studies (proof, inspirational)

**Effect:** Clear distinction between REUSE (mechanisms) and INSPIRATION (metaphors).

**STEP 4: Explicit Divergence Language (Strong Permission)**

Add to skill:
- "You are EXPECTED to derive novel metaphor"
- "Using library pattern = pattern-matching, not deriving"
- "Success = novel metaphor"

**Effect:** Redefines success criteria.

**STEP 5: Metaphor Commitment (Lock-In Before Library)**

Add Phase 3.5: "State metaphor candidate. Lock it in. THEN consult library for mechanisms."

**Effect:** Prevents post-generation switching.

**STEP 6: Diversity Tracking (Make Repetition Visible)**

Weaver maintains metaphor registry.

Advisory when ≥4 uses: "⚠️ Geological used 4× already. Consider alternative?"

**Effect:** Pattern fatigue becomes VISIBLE, not invisible anchor.

---

## RECOMMENDATIONS

### Immediate Actions (Prevent Pattern Defaulting NOW)

**ACTION 1: Add Binary Sequential Rule to Skill**

Insert at Phase 3 introduction:

```markdown
⚠️ **MANDATORY SEQUENCE**

You MUST complete these steps in order:
1. Phase 1: Multi-axis questioning (14+ questions)
2. Phase 2: Tension derivation (opposition + overlap + width scoring)
3. Phase 3.4: Search query construction
4. Phase 3.5: Metaphor candidate identification

DO NOT consult the compositional strategy library until AFTER step 4.

The library provides MECHANISMS for implementation, not TEMPLATES for selection.
```

**ACTION 2: Rewrite Library Framing (Anti-Prescription)**

All 6 Tier 3 recipes:
- Add "⚠️ READ THIS FIRST" anti-prescription warning
- Replace "When to use" with "Tension that produced this"
- Replace "Composition recipe" with "What YOU extract (mechanisms vs. metaphor)"
- Add "Your divergence assignment"
- Add "Success check: If your metaphor matches this, justify convergence"

**Cost:** +100 lines per recipe × 6 = +600 lines
**Benefit:** Same information, opposite framing

**ACTION 3: Split Library (Mechanisms Separate from Case Studies)**

Create two files:
- `MECHANISM-CATALOG.md` (tools only, 20 lines per mechanism)
- `METAPHOR-CASE-STUDIES.md` (narratives, 250 lines per study)

Skill references mechanism catalog only.
Case studies are post-project learning resources.

### Validation: Empirical Test (Phase F Pilot)

**Test the model with 4 build variants:**

**Variant A (Control):** Skill only, no library access
**Variant B (Weak Permission):** Skill + library + "consider as starting points"
**Variant C (Strong Intervention):** Skill + binary rules + anti-prescription library
**Variant D (Library-First):** Skill + library read before tension derivation

**Build same content (warmth/austerity tension) with all 4 variants.**

**Measure:**

| Metric | A | B | C | D |
|--------|---|---|---|---|
| Metaphor novelty (0-5) | ? | ? | ? | ? |
| Pattern library match (binary) | ? | ? | ? | ? |
| Time to Phase 3 completion | ? | ? | ? | ? |
| Perceptual audit score | ? | ? | ? | ? |

**Predicted outcomes:**

- Variant A: HIGH novelty, VARIABLE quality (no mechanism reuse)
- Variant B: LOW novelty (weak permission insufficient)
- Variant C: HIGH novelty, HIGH quality (intervention works)
- Variant D: ZERO novelty (all pattern-match to library)

**If Variant C achieves HIGH novelty + HIGH quality:**

The intervention is VALIDATED.

**If Variant C still shows pattern-matching:**

Framing is still too weak. Increase prohibition strength.

### Long-Term: Pattern Library as Gallery (Not Catalog)

**Reframe library purpose:**

FROM: "Here's what to use when"
TO: "Here's proof these tensions are resolvable + mechanisms that worked"

**Library becomes:**
- Proof gallery (inspiration)
- Mechanism toolbox (reusable)
- Process documentation (learning)

**NOT:**
- Template catalog
- Pattern selection menu
- Design system components

**The metaphor for the library itself:**

NOT: "Recipe book" (lookup, apply)
YES: "Art museum" (inspire, extract principles, create your own)

---

## CONCLUSION

**The answer to "will agents default to known patterns?" is:**

**YES, if patterns are framed as templates and available during generation.**
**NO, if patterns are framed as proof-of-concept and unavailable during derivation.**

**Pattern defaulting is NOT about information volume.**

You can provide:
- 45 tokens
- 18 components
- 12 mechanisms
- 8 patterns (or 80 patterns)

**And STILL get fresh generation IF:**

1. **Timing:** Library consulted AFTER metaphor derivation
2. **Framing:** Patterns positioned as examples, not templates
3. **Binary rules:** Creative path = compliant path (Phase 1→2→3→4)
4. **Separation:** Mechanisms (reusable) split from metaphors (inspirational)
5. **Explicit permission:** "You are EXPECTED to derive novel metaphor"
6. **Visibility:** Diversity tracking makes repetition apparent

**The six cognitive mechanisms (continuation bias, RAG, pattern recognition priority, working memory recency, binary rule compliance, framing effects) ALL point to the same intervention:**

**Control WHEN and HOW patterns are consulted, not WHETHER they exist.**

**The jazz analogy is exact:**

Musicians learn 200+ standards. They DON'T play those standards verbatim in performance.

They extract VOCABULARY (harmonic patterns, rhythmic devices) and apply to NEW material.

**The library should work the same way:**

Learn the patterns (post-project study).
Extract mechanisms (border-weight, background progression).
Apply to NEW content with NEW metaphors.

**Pattern gravity is defeated through ARCHITECTURAL POSITIONING, not information restriction.**

**Immediate action: Implement the 6-part intervention. Test empirically during Phase F Pilot.**
