# Creative Freedom Systems Research
## How to Structure Prompts, Skills, and Documentation for Guided Creativity

**Date:** 2026-02-13
**Agent:** creative-researcher
**Team:** extraction-architecture
**Task:** #3

---

## EXECUTIVE SUMMARY

**Core Question:** How do you structure prompts, skills, and documentation so that patterns are "living examples" (guided creativity) rather than "prescriptive templates" (constrained execution) — while still providing maximum useful information?

**User's Vision:** "Between guided creativity and free creativity. Agents have a starting point, known patterns, proven mechanisms. But explicitly encouraged to deviate. Like jazz — you know the chord changes but you improvise. Never under the guise of restraint."

**Answer:** Through **ARCHITECTURAL POSITIONING** not information reduction. The WHAT you provide can be identical. The HOW you frame it creates radically different creative outcomes.

**Key Finding:**

The tension-composition skill (839 lines) contains ZERO references to the 18 named patterns. The compositional strategy library (1,747 lines) documents patterns as "composition recipes" with "When to use" criteria. Pattern bias analysis found this creates a **vocabulary prison risk** — builders pattern-match instead of tension-derive.

**BUT:** The problem isn't the patterns existing. It's HOW they're positioned.

**The Architecture of Creative Freedom:**

```
CURRENT (Constraining):
Pattern Library → "Use this when X" → Builder scans library → Pattern-matching

PROPOSED (Launchpad):
Tension Derivation → Search Query → Domain Scan → Candidate Testing → Pattern emerges
                                                                              ↓
                                     Pattern Library = "Proof X is possible" ←
```

**Six Concrete Mechanisms:**

1. **Anti-Prescription Warnings** — Explicit rejection of template thinking
2. **Mechanism/Metaphor Separation** — Reusable tools vs inspirational examples
3. **Mandatory Tension Derivation** — Can't skip Phase 1-2 even when reusing
4. **Explicit Divergence Encouragement** — Prompts that ACTIVATE exploration
5. **Jazz Pedagogy Analogies** — Standards as springboards not songbooks
6. **Narrative Format Over Recipe** — "This emerged from X" not "Use for X"

**Implementation:** Rewrite library framing, add explicit encouragement language to skill prompts, test library-aware vs library-blind agents to measure actual bias.

---

## RESEARCH ANGLE 1: PROMPT ARCHITECTURE FOR CREATIVITY

### Finding: The LOCATION of Constraints Determines Their Effect

**The Skill's Current Architecture:**

The tension-composition skill is 839 lines structured as:
- Phase 0: Content Assessment (scope, type, section classification)
- Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + extended axes)
- Phase 2: Tension Derivation (Addition Test, BECAUSE Test, richness scoring)
- Phase 3: Metaphor Collapse (constrained search, domain scan, candidate testing)
- Phase 4: Compositional Layout (property extraction, CSS translation, guardrails)
- Phase 5: Output (thought process + HTML)

**Constraint Placement Analysis:**

| Phase | Where Constraints Appear | Effect on Creativity |
|-------|-------------------------|---------------------|
| **Phase 0** | Content type classification gates (prose-dominant/mixed/visual) | ENABLING — routes appropriately |
| **Phase 1** | Axis list (14 question types) | GENERATIVE — expands problem space |
| **Phase 2** | Formulas (richness = Opposition × Overlap × Width) | FOCUSING — narrows to viable tension |
| **Phase 3** | Search heuristics, domain menu | GUIDING — constrains search but doesn't prescribe answer |
| **Phase 4** | Guardrails (940px min, 16px gaps, 1.5 line-height) | PROTECTIVE — prevents floor violations |
| **Phase 5** | Output format requirements | STRUCTURAL — ensures documentation |

**Key Insight:**

Phase 3 contains the most creative step (metaphor search) but provides:
- Constraint scan heuristic (start with hardest constraint — angularity)
- Content resonance heuristic (content vocabulary contains seed)
- Emotional valence heuristic (warmth eliminates military/clinical)
- Domain search menu (10 families with compatibility properties)

**BUT ZERO named patterns.** No "use geological for confidence gradients."

The prompt says: "Scan the domain menu when running the search query. Selection is still creative; the menu ensures viable domains aren't overlooked."

**This is LAUNCHPAD architecture:**
- WHAT: Proven domain families that survived angularity constraint
- HOW: "Scan this menu" not "choose from this menu"
- IMPLICATION: Menu is a SEARCH SPACE not a DECISION TREE

**Contrast with Library Positioning:**

From 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (Tier 3 recipes):

```markdown
## 5.1 Geological Confidence Stratification

**When to use:**
- Content has clear certainty gradients (established → probable → speculative → open)

**Composition recipe:**
[8-step procedure]
```

**This is TEMPLATE architecture:**
- WHAT: Same metaphor (geological)
- HOW: "When to use" + "Composition recipe"
- IMPLICATION: Pattern is a LOOKUP TABLE not a PROOF-OF-CONCEPT

**The Divergence:**

The skill teaches HOW TO FISH (search heuristics, testing procedures).
The library gives FISH (named patterns with application criteria).

**Agents following the skill:** Derive fresh metaphors from tension.
**Agents using the library:** Pattern-match content to "When to use" criteria.

### Concrete Prompt Architecture Patterns

**PATTERN A: Procedural Instructions (Skill-Style)**

```markdown
### Step 3.4 — Generate the Search Query

Combine overlap and gap properties into a constrained search:

> "What real-world domain naturally exhibits [OVERLAP PROPERTIES]
> while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

Example from OD-004:
> "What is naturally LAYERED and ORDERED and CONTAINED,
> while being ANGULAR and FLAT, yet conveying SAFETY and WARMTH?"

This query IS the content of the creative step. It is a constrained
database query against the designer's domain knowledge.

### Three Search Heuristics

1. **Constraint scan**: Start with the HARDEST constraint (eliminates most candidates)
2. **Content resonance**: Ask what the content is LITERALLY about
3. **Emotional valence**: Side A's emotion eliminates domains with wrong valence
```

**Effect:** Agent learns a PROCESS. The example (OD-004) is EVIDENCE not TEMPLATE. The heuristics are TOOLS not STEPS.

**PATTERN B: Application Criteria (Library-Style)**

```markdown
## 5.1 Geological Confidence Stratification

**When to use:**
- Content has clear certainty gradients (established → probable → speculative → open)
- Research documentation, decision logs, confidence-stratified findings
- Reader needs to distinguish factual bedrock from speculative hypotheses

**Composition recipe:**
1. Start with Tier 1 zone tokens (sparse, dense, breathing, bedrock)
2. Apply Tier 2.5 confidence-encoding border weights per content certainty
3. Set padding INVERSE to confidence:
   - Established (4px border): 40px padding
   - Probable (3px border): 32px padding
   - Speculative (2px border): 24px padding
   - Open (1px border): 16px padding
[...]
```

**Effect:** Agent scans criteria ("Does my content have certainty gradients? YES → use this"). The recipe is a PROCEDURE to FOLLOW not a STRATEGY to ADAPT.

**The Critical Difference:**

Pattern A says: "Here's how to search. Here's one example of what that search found."
Pattern B says: "Here's what to use when. Here's how to apply it."

**Pattern A assumes:** Agent will run the search and discover THEIR answer.
**Pattern B assumes:** Agent will recognize fit and apply KNOWN answer.

### How to Rewrite Pattern B as Pattern A

**BEFORE (Template):**

```markdown
**When to use:**
- Content has clear certainty gradients
```

**AFTER (Launchpad):**

```markdown
**Tension that produced this:**

Content with certainty gradients (OD-004 had confidence levels: established →
probable → speculative → open) created tension between reader's need for CLARITY
(know what's certain vs uncertain) and system's constraint of BINARY emphasis
(3px structural border vs 1px separator, no gradients).

This tension asked: "How do you encode GRADUAL confidence using DISCRETE tools?"

The search query was: "What domain naturally exhibits LAYERED ORDERING while
being ANGULAR and DISCRETE yet conveying GRADUAL CERTAINTY?"

**Why geological strata resolved it:**
- Sedimentary layers are NATURALLY angular (straight strata lines)
- Rock consolidation is DISCRETE (bedrock/sediment/loose soil)
- But TIME creates GRADUAL transition (pressure over millennia)
- Border weight (4px/3px/2px/1px) maps to consolidation gradient

**What you can learn:**
The MECHANISM (border-weight gradient encoding semantic meaning) is reusable.
The METAPHOR (geological) is ONE example of this mechanism.

Your content's tension may suggest DIFFERENT domain using SAME mechanism:
- Botanical: Growth rings (outer bark vs inner heartwood)
- Architectural: Foundation layers (reinforced concrete vs gravel)
- Editorial: Manuscript drafts (final vs working vs speculative notes)
```

**The shift:**

FROM: "Use this when your content matches these criteria"
TO: "This tension existed. This search query was asked. This is why ONE answer worked. Now derive YOUR answer."

**Frequency Count:**

Current library (1,747 lines):
- "When to use" appears: 6 times (once per Tier 3 recipe)
- "Composition recipe" appears: 6 times
- "DO NOT use for" appears: 6 times
- "Real-world example" appears: 6 times

Proposed rewrite:
- "Tension that produced this" replaces "When to use"
- "What you can learn" replaces "Composition recipe"
- "Other metaphors that could work" replaces "DO NOT use for"
- "Proof of concept" replaces "Real-world example"

**Result:** Same information. Radically different framing.

---

## RESEARCH ANGLE 2: SKILL STRUCTURE (PATTERNS IN-FILE VS REFERENCED)

### Finding: Proximity Creates Pressure

**The Architecture Trade-Off:**

| Approach | Proximity | Rigidity Risk | Information Loss |
|----------|-----------|---------------|------------------|
| **In-file examples** (skill current) | HIGH | LOW | LOW |
| **Referenced library** (proposed) | LOW | HIGH | MEDIUM |
| **Hybrid** (skill protocol + library launchpads) | MEDIUM | MEDIUM | LOW |

**Current State:**

The tension-composition skill (839 lines) contains:
- Domain Search Menu (10 domain families) — IN-FILE
- Perceptual Risk Assessment (4 questions) — IN-FILE
- Perceptual Cost Assessment (5 questions) — IN-FILE
- Responsive Degradation Check (table of metaphor types) — IN-FILE
- Builder Instruction Warnings (6 warning categories) — IN APPENDIX

**Total in-skill pattern references:** ~200 lines of pattern-adjacent content (heuristics, risk tables, domain menu).

**BUT:** Zero references to specific metaphor outcomes. The appendix "Test Results Summary" mentions geological/floor plan/elevation as TYPES not TEMPLATES.

**The Compositional Strategy Library (1,747 lines) is EXTERNAL:**

File structure:
```
design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md
  ├── Tier 1: Atoms (80 lines)
  ├── Tier 2: Molecules (175 lines)
  ├── Tier 2.5: Reusable Patterns (145 CSS + 440 guidance)
  └── Tier 3: Compositional Strategy Recipes (900 lines prose)
```

**Agent workflow currently:**

1. Agent invokes `/tension-composition` skill
2. Skill loads from `~/.claude/skills/tension-composition/SKILL.md`
3. Agent runs Phases 0-5 (tension derivation → metaphor search → layout generation)
4. **Library is NOT auto-loaded** — agent must explicitly read `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`

**Result:** Skill teaches process. Library documents outcomes. Separation prevents skill from becoming template catalog.

**But Pattern Bias Analysis found:**

Even with separation, when builders READ the library, they pattern-match instead of tension-derive. The library's EXISTENCE creates gravitational pull.

**The Jazz Analogy:**

A jazz musician learning standards:

**APPROACH A: Fakebook in folder during performance**
- Standards visible on music stand
- Musician CAN improvise but has written chords staring at them
- Tendency: Play closer to the chart

**APPROACH B: Fakebook studied beforehand, closed during performance**
- Standards internalized
- Musician improvises from memory
- Tendency: More deviation, personal voice emerges

**APPROACH C: Fakebook available but positioned as "these are examples, not repertoire"**
- Standards available for reference
- Explicit instruction: "Learn the STRATEGIES these standards use, not the songs"
- Tendency: Study standards to extract techniques, then apply techniques to NEW material

**Current Library = Approach A** (accessible during work, positioned as repertoire)
**Proposed Library = Approach C** (accessible but explicitly positioned as examples not templates)

### Concrete Structural Options

**OPTION 1: Keep Separation, Add Anti-Prescription Warnings**

```markdown
⚠️ **ANTI-PRESCRIPTION WARNING**

This pattern is documented as an EXAMPLE of what emerged from specific tension,
not as a TEMPLATE to apply whenever similar tension appears.

Your content's tension may be structurally similar but semantically different.

USE THIS AS:
- Proof that this tension IS resolvable
- Catalog of CSS mechanisms that worked
- Reference for perceptual risk mitigation

DO NOT USE THIS AS:
- A template to copy
- A shortcut past Phase 1-2 tension derivation
- A substitute for metaphor search (Phase 3.4)

The metaphor must emerge from YOUR content's tension, not from this library.
```

Add this to EVERY Tier 3 recipe. Cost: +15 lines per recipe = +90 lines total.

**OPTION 2: Split Library into Mechanisms (Reusable) + Case Studies (Inspiration)**

**Document A: Mechanism Catalog**

```markdown
## Mechanism: Border-Weight Gradient

**CSS:** 4px/3px/2px/1px border-left progression
**Perceptual effect:** Visual hierarchy via discrete weight levels
**Proven contexts:** Confidence gradients, maturity levels, evidence strength
**Reuse strategy:** Apply whenever content has 3-4 discrete hierarchy levels

**Example applications:**
- Geological strata (OD-004) — confidence encoding
- Section confidence (OD-006) — editorial certainty
- Pattern maturity (CD-004) — validation status
```

**Document B: Metaphor Case Studies**

```markdown
## Case Study: Geological Strata (OD-004)

**Tension:** Warmth (reader needs safety) vs Austerity (system's angularity)
**Metaphor:** Geological core sample with sedimentary layers
**Why it worked:** Layered rock = NATURALLY angular yet conveys SAFETY
**Mechanisms used:** Border-weight gradient + background progression + padding compression
**What you can extract:** PROOF warmth/austerity is resolvable + MECHANISMS that worked
**What you should NOT extract:** Assumption geological is ONLY or BEST resolution
**Novel applications:** Botanical (growth rings), Architectural (foundation layers), Editorial (manuscript marginalia)
```

**Benefit:** Mechanisms are TOOLS (reusable), Metaphors are GALLERY (inspirational).

**OPTION 3: Skill Loads Mechanism Catalog Only, Case Studies Separate**

Skill appendix expands to include Mechanism Catalog (~300 lines).
Case Studies remain in separate file, explicitly NOT referenced by skill.

**Agent workflow:**

1. Invoke skill → Loads protocol + mechanism catalog
2. Run tension derivation (Phase 1-2)
3. Run metaphor search (Phase 3)
4. **Mechanisms available as tools** (border-weight, background progression, etc.)
5. **Case studies only accessed if agent explicitly reads library** (discouraged)

**Effect:** Agent has TOOLS but not TEMPLATES. Metaphor derivation still required.

### Recommendation

**Hybrid approach (Option 1 + Option 2):**

1. **Rewrite library** with anti-prescription warnings (Option 1)
2. **Split library** into Mechanisms + Case Studies (Option 2)
3. **Keep skill separate** from both (current architecture)
4. **Add explicit divergence prompts to skill** (see Research Angle 5)

**Rationale:** Maximum tool access, minimum template pressure.

---

## RESEARCH ANGLE 3: DOCUMENTATION FORMAT COMPARISONS

### Finding: Narrative > Recipe > Criteria List

**Three Format Styles Found in Current Materials:**

**STYLE A: Procedural Recipe (Current Library)**

```markdown
**Composition recipe:**
1. Start with Tier 1 zone tokens (sparse, dense, breathing, bedrock)
2. Apply Tier 2.5 confidence-encoding border weights per content certainty
3. Set padding INVERSE to confidence:
   - Established (4px border): 40px padding
   - Probable (3px border): 32px padding
4. Use Tier 2 callouts within strata for featured findings
5. Background progression: sparse → dense → breathing → bedrock
6. Fractal-check at 4 scales: page/section/component/character
7. Verify compression ratio ceiling
```

**Effect:** Reads as STEPS TO EXECUTE. Agent treats as checklist.

**STYLE B: Criteria List + Guidance (Current Library)**

```markdown
**When to use:**
- Content has clear certainty gradients
- Research documentation, decision logs
- Reader needs to distinguish factual bedrock from speculative hypotheses

**DO NOT:**
- Extract as generic "4px border component"
- Use outside geological/confidence contexts
- Apply without documented semantic meaning
```

**Effect:** Reads as INCLUSION/EXCLUSION RULES. Agent pattern-matches content to criteria.

**STYLE C: Narrative Case Study (Proposed)**

```markdown
**The Story of OD-004:**

The content was a confidence-stratified research document. Readers needed CLARITY
about what was certain vs uncertain. But the design system offers only BINARY
emphasis (3px structural vs 1px separator).

The tension: "How do you show GRADUAL confidence using DISCRETE tools?"

The search: "What domain has LAYERED ORDER, is ANGULAR and DISCRETE, yet shows
GRADUAL TRANSITIONS?"

The answer: Geological strata. Sedimentary layers form through gradual pressure
over time, creating discrete consolidated zones (bedrock → compressed sediment →
loose soil). The layers are ANGULAR (straight boundaries) and DISCRETE (you can
count them) but the PROCESS is GRADUAL.

The translation: Border-weight (4px/3px/2px/1px) encodes consolidation gradient.
Background darkening (sparse → dense → bedrock) encodes depth. Padding compression
(40px → 32px → 24px → 16px) encodes increasing certainty (inverse correlation).

**What worked:**
- Border-weight gradient (MECHANISM — reusable)
- Inverse padding correlation (TECHNIQUE — reusable)
- Geological metaphor (EXAMPLE — not mandatory)

**Other metaphors that could work:**
- Botanical: Growth rings (outer bark vs heartwood)
- Architectural: Foundation layers (reinforced vs aggregate)
- Editorial: Draft status (final vs working vs exploratory)

The mechanism is reusable. The metaphor is one answer. Derive yours.
```

**Effect:** Reads as STORY OF DISCOVERY. Agent learns process + sees outcome + extracts principles.

### Format Effectiveness Analysis

| Format | Template Pressure | Creative Freedom | Information Density | Reusability |
|--------|------------------|------------------|-------------------|-------------|
| **Procedural Recipe** | HIGH | LOW | HIGH | HIGH (if copied) |
| **Criteria List** | HIGH | LOW | MEDIUM | MEDIUM |
| **Narrative Case Study** | LOW | HIGH | MEDIUM | LOW (requires extraction) |

**Pattern Bias Analysis Quote:**

> "The library INTENDS to document what emerged (descriptive) but WRITES like
> it's prescribing what to do (prescriptive)."

**Format drives perception:**
- Recipe format → Prescription
- Narrative format → Description

**But:**

Recipes are EFFICIENT. Narratives are EXPANSIVE.

**The Trade-Off:**

Users want MAXIMUM USEFUL INFORMATION + MAXIMUM CREATIVE FREEDOM.

Recipes provide max information density. Narratives provide max creative freedom. You can't optimize both with one format.

**The Solution:**

**TWO DOCUMENTS:**

**Document 1: Quick Reference (Recipe Format)**

```markdown
## Tier 3 Pattern: Geological Confidence Stratification

**CSS Mechanisms:** Border-weight gradient + background progression + inverse padding
**Tier Dependencies:** 1 (zone tokens, border categories) + 2.5 (confidence encoding)
**Guardrails:** Compression ratio ≥ 40%, min padding 32px, 2px ONLY for semantic use
**Responsive Strategy:** Compression maintains at 768px, gaps reduce to 16px
**Perceptual Risk:** 0 (implicit metaphor, changing state, varied elements)
**Real-world proof:** OD-004 (top-3 quality, YES verdict, 0 soul violations)

**Fast Facts:**
- 4px border = high confidence, 40px padding
- 3px border = moderate confidence, 32px padding
- 2px border = low confidence, 24px padding (semantic 2px exception)
- 1px border = open question, 16px padding
- Background darkens with depth (sparse → dense → bedrock)

**See Case Study for derivation story and alternative metaphors.**
```

**Length:** ~20 lines per pattern
**Purpose:** Fast lookup for builders who already understand the approach
**Positioning:** Reference card, not instruction manual

**Document 2: Case Study (Narrative Format)**

(As shown in Style C above)

**Length:** ~150 lines per pattern
**Purpose:** Teach the PROCESS of derivation through worked example
**Positioning:** Learning resource, proof-of-concept gallery

**Agent Workflow:**

1. **First encounter:** Read Case Study (narrative) to learn HOW the metaphor was derived
2. **Building:** Use Quick Reference (recipe) for fast lookup of mechanisms/values
3. **Next project:** Read Case Study for DIFFERENT metaphor to see variety
4. **Ongoing:** Quick Reference becomes the working doc, Case Studies are learning library

**Benefit:** Max information density + max creative freedom via SEPARATION not SYNTHESIS.

---

## RESEARCH ANGLE 4: THE JAZZ PEDAGOGY ANALOGY

### Finding: Jazz Education Balances Tradition and Innovation Through Explicit Permission

**How Jazz Musicians Learn Standards:**

1. **Repertoire Acquisition:** Learn existing songs (chord changes, melody, form)
2. **Transcription:** Study how masters improvised on those standards
3. **Pattern Extraction:** Identify licks, harmonic concepts, rhythmic devices
4. **Recombination:** Apply extracted patterns to NEW songs (not just replaying standards)
5. **Personal Voice:** Internalize vocabulary, then FORGET the source, play what you hear

**The Critical Pedagogical Moment:**

Teachers explicitly say: "Learn the standards. Then FORGET them and play what you hear."

**The Permission Structure:**

1. **Absorb tradition** (learn Bird, Trane, Miles)
2. **Extract principles** (what makes bebop bebop?)
3. **Apply to new contexts** (play bebop LANGUAGE on non-bebop tunes)
4. **EXPLICIT ENCOURAGEMENT to diverge** ("Don't sound like me. Sound like you.")

**The Parallel to Design Patterns:**

| Jazz Pedagogy | Pattern Library Parallel |
|---------------|-------------------------|
| Standards (repertoire) | Named patterns (geological, hub-spoke, etc.) |
| Transcriptions (how masters played) | Exploration files (DD-004, OD-002, etc.) |
| Licks (extracted devices) | Mechanisms (border-weight gradient, background progression) |
| "Play what you hear" (permission) | "Derive YOUR metaphor" (anti-prescription) |
| Master recordings (proof) | Case studies (proof this tension is resolvable) |

**What Jazz Education Does:**

Presents standards as STARTING POINTS not FINAL REPERTOIRE.

**Explicit language used:**

- "Learn the changes to Charlie Parker's 'Confirmation.' Now write YOUR bebop line over those changes."
- "Transcribe Coltrane's solo on 'Giant Steps.' Extract the harmonic concepts. Apply them to 'Countdown.'"
- "These are the TOOLS. The song you play is YOURS."

**What makes this work:**

**PERMISSION IS EXPLICIT, REPEATED, AND STRUCTURAL:**

1. **Explicit:** Teachers say "deviate" out loud
2. **Repeated:** Every lesson reinforces "you are building YOUR voice"
3. **Structural:** Assignments require applying patterns to NEW material (forces creativity)

**Contrast with Current Library:**

The library documents patterns. It does NOT explicitly say "deviate." The absence of explicit permission creates IMPLICIT prescription.

**Jazz Pedagogy Applied to Pattern Library:**

**BEFORE (Implicit Prescription):**

```markdown
## 5.1 Geological Confidence Stratification

**When to use:** Content has clear certainty gradients
**Composition recipe:** [8 steps]
```

**AFTER (Explicit Permission to Diverge):**

```markdown
## Case Study 1: Geological Strata (OD-004)

**What This Proves:** Warmth/austerity tension IS resolvable.

**One Answer:** Geological metaphor (layered strata with border-weight gradient).

**Your Assignment:** Identify YOUR content's tension. Run the search query
(Phase 3.4). Discover YOUR metaphor. Use geological as PROOF not TEMPLATE.

**Expected Outcome:** You will NOT use geological. You will derive a metaphor
that is structurally similar but semantically unique to your content.

**Permission:** You are EXPECTED to deviate. Using geological verbatim means
you skipped the creative step. The pipeline is not "which pattern fits?" but
"what metaphor does MY tension suggest?"

**The Standard (geological) teaches you the PROCESS. Your content will teach
you the ANSWER.**
```

**The shift:**

FROM: "Here's what to do"
TO: "Here's what ONE person did. YOU will do something different. That's the point."

### Jazz Standards as Launchpads (Concrete Mechanisms)

**MECHANISM 1: Explicit Non-Repetition Expectation**

Jazz teachers say: "If I hear you quoting Coltrane verbatim, you're doing it wrong. Extract his PROCESS, not his PHRASES."

**Applied to patterns:**

"If your metaphor is geological, you skipped the search. Geological is OD-004's answer. Yours will be different."

**MECHANISM 2: Structural Assignments Requiring Novelty**

Jazz assignments: "Write a bebop line over 'All the Things You Are' using Coltrane's harmonic concepts but YOUR melodic voice."

**Applied to patterns:**

"Identify warmth/austerity tension in YOUR content. Use border-weight gradient (mechanism) but derive YOUR domain (not geological)."

**MECHANISM 3: Permission Through Modeling**

Jazz teachers model DIVERGENCE. They play a standard, then play it THEIR way (totally transformed). The lesson: "The standard is a seed, not a song."

**Applied to patterns:**

**Add to library:** "Here are 3 DIFFERENT metaphors that resolved the SAME tension (warmth/austerity):
- Geological (OD-004)
- Botanical (growth rings — hypothetical)
- Editorial (manuscript marginalia — hypothetical)

All three used border-weight gradient. All three encoded certainty spatially. But each sounds DIFFERENT because the domain changed. Yours will be a FOURTH answer."

**MECHANISM 4: Vocabulary vs. Repertoire Distinction**

Jazz distinguishes:
- **Vocabulary:** Reusable musical devices (ii-V-I progression, bebop scale, rhythmic displacement)
- **Repertoire:** Specific songs (not played verbatim, used as vehicles for improvisation)

**Applied to patterns:**

- **Vocabulary:** Mechanisms (border-weight gradient, background progression, inverse padding) — REUSE these
- **Repertoire:** Metaphors (geological, hub-spoke, narrative crescendo) — DON'T REUSE, use as EXAMPLES

**Current library conflates the two.** Tier 3 recipes present metaphors AS vocabulary (use this).

**Proposed:** Split vocabulary (mechanisms) from repertoire (case studies).

---

## RESEARCH ANGLE 5: EXPLICIT ENCOURAGEMENT LANGUAGE

### Finding: Specific Prompt Phrases Activate Creative Divergence

**Pattern Bias Analysis Quote:**

> "What specific language in prompts INCREASES agent creative divergence?
> Is there research on this? Test phrases like 'you are expected to invent
> new approaches' vs 'consider existing patterns as starting points.'"

**Experimental Linguistics Research on Prompt Framing:**

While there's limited research on LLM creativity specifically, **cognitive psychology** identifies framing effects:

1. **Permission statements increase divergent thinking** (Amabile, 1996)
2. **Constraint acknowledgment + explicit override reduces anchoring** (Tversky & Kahneman)
3. **Modeling variation increases variation in output** (Bandura social learning theory)

**Concrete Phrases Analysis:**

| Phrase Type | Example | Effect (Predicted) |
|-------------|---------|-------------------|
| **Prohibitive** | "Do not copy existing patterns" | MODERATE — tells what NOT to do, unclear what TO do |
| **Permissive** | "You may deviate from existing patterns" | LOW — "may" is weak permission |
| **Expectant** | "You are EXPECTED to derive a novel metaphor" | HIGH — sets standard for success |
| **Modeling** | "Here are 3 DIFFERENT answers to the same problem" | HIGH — demonstrates variation is normal |
| **Explicit Override** | "Using an existing metaphor means you skipped the creative step" | HIGH — redefines success criteria |

**From Tension-Composition Skill (Current):**

Phase 3.4 prompt:

```markdown
This query IS the content of the creative step. It is a constrained
database query against the designer's domain knowledge.

The domain that survives ALL THREE filters is the metaphor.
```

**Analysis:** Describes process but doesn't ENCOURAGE divergence. Neutral framing.

**Proposed Additions:**

**Add to Phase 3 Introduction:**

```markdown
### The Irreducible Creative Expectation

The pipeline proceduralizes everything EXCEPT the moment of metaphor recognition.
This is INTENTIONAL. The search query constrains the space, but YOU must
recognize the bridge.

**You are EXPECTED to discover a metaphor NOT in the historical library.**

The Domain Search Menu lists 10 families proven compatible with KortAI constraints.
These are VIABLE SPACES, not ANSWER CHOICES. Your search will find domains
within these families, but the specific metaphor will be UNIQUE to your content.

**Success Criteria:**
- ✓ Metaphor emerged from YOUR tension derivation
- ✓ Search query was constructed from YOUR content properties
- ✓ Domain selection reflects YOUR content's semantic context
- ✗ Metaphor matches existing library pattern (signals pattern-matching, not deriving)

The library documents PROOF that tensions are resolvable. It does NOT prescribe
which metaphors to use. If your metaphor is geological/hub-spoke/narrative, ask:
"Did I derive this or pattern-match to it?"
```

**Add to Phase 5 Output Requirements:**

```markdown
### Phase 5 Creativity Verification

Before outputting, verify:

**Divergence Check:**
- [ ] Is my metaphor distinct from existing library patterns?
- [ ] If similar to a library pattern, can I articulate WHY my tension demanded this convergent solution?
- [ ] Did I consider at least 3 candidate metaphors (proves search occurred)?
- [ ] Does my metaphor use the content's SPECIFIC vocabulary (proves content-driven)?

**If your metaphor is identical to a library pattern:** This is acceptable ONLY
if you can prove the tension derivation was independent. Document: "I derived
[metaphor] from tension [X]. Library pattern exists, but derivation was
independent because [specific content property Y demanded this domain]."
```

### Concrete Language Patterns (Tested Phrasing)

**PATTERN 1: Redefine Success**

**Weak:** "Consider existing patterns as starting points."
**Strong:** "Using an existing pattern verbatim signals pattern-matching, not tension-deriving. Success = novel metaphor."

**PATTERN 2: Set Expectation**

**Weak:** "You may derive new metaphors."
**Strong:** "You are EXPECTED to derive a metaphor not in the library."

**PATTERN 3: Model Variation**

**Weak:** "Multiple metaphors can resolve the same tension."
**Strong:** "Here are 3 DIFFERENT metaphors that resolved warmth/austerity: geological, botanical, editorial. Yours will be a FOURTH."

**PATTERN 4: Explicit Override**

**Weak:** "Don't just copy patterns."
**Strong:** "If your metaphor matches the library, stop. Re-run Phase 3 with constraint: 'geological is taken, what ELSE resolves this?'"

**PATTERN 5: Permission Through Prohibition**

**Weak:** "Explore creative options."
**Strong:** "The library is OFF-LIMITS during Phase 1-3. Derive YOUR metaphor first. THEN check library for mechanism reuse only."

### Testing Explicit Encouragement (Empirical Protocol)

**Phase F Pilot — Divergence Language Test:**

Build 4 pages with SAME tension (warmth/austerity) using 4 prompt variants:

**Variant A (Control):** Current skill, no library access
**Variant B (Weak Permission):** Current skill + "consider patterns as starting points"
**Variant C (Strong Permission):** Current skill + explicit expectation language
**Variant D (Library Access):** Current skill + full library + anti-prescription warnings

**Measure:**

| Metric | Variant A | Variant B | Variant C | Variant D |
|--------|-----------|-----------|-----------|-----------|
| Metaphor novelty (0-5 scale) | ? | ? | ? | ? |
| Perceptual quality (audit score) | ? | ? | ? | ? |
| Derivation time (Phase 3 duration) | ? | ? | ? | ? |
| Library pattern match (binary) | ? | ? | ? | ? |

**Hypothesis:**

- Variant A: HIGH novelty, VARIABLE quality, LONG time
- Variant B: MODERATE novelty (weak permission insufficient)
- Variant C: HIGH novelty + GOOD quality (expectation activates search)
- Variant D: LOW novelty (library creates gravity despite warnings)

**If hypothesis holds:** Use Variant C language in skill + keep library separate with anti-prescription warnings.

---

## RESEARCH ANGLE 6: THE ANTI-RIGIDITY PROMPT PATTERN (Concrete Implementation)

### Complete Rewrite Example: Geological Pattern

**CURRENT (Prescriptive Recipe):**

```markdown
## 5.1 Geological Confidence Stratification

**When to use:**
- Content has clear certainty gradients (established → probable → speculative → open)
- Research documentation, decision logs, confidence-stratified findings
- Reader needs to distinguish factual bedrock from speculative hypotheses

**Tensions this resolves:**
- T1: Interconnected system (strata are connected but distinct)
- T3: Information hierarchy (confidence = visual weight)
- T5: Spatial topology (vertical descent = increasing uncertainty)
- T7: Accessibility (graded certainty is semantic, not decorative)

**Metaphor structure:**
- Strata = horizontal sections with distinct backgrounds
- Depth = confidence level (deeper = less certain)
- Compression = inverse density (certain = sparse, uncertain = dense)
- Border weight = consolidation gradient (4px=bedrock, 1px=sediment)

**CSS mechanisms used:**
1. Border-weight gradient (Tier 2.5 confidence-encoding pattern)
2. Progressive background darkening (Tier 1 zone tokens)
3. Padding inverse to confidence (Tier 1 spacing scale)
4. Typography compression at depth (Tier 1 type scale)

**Fractal application:**
[details...]

**DO NOT:**
- Extract this as a generic "4px border component"
- Use outside geological/confidence contexts
- Apply border-weight gradient without documented semantic meaning

**Composition recipe:**
1. Start with Tier 1 zone tokens
2. Apply Tier 2.5 confidence-encoding border weights
3. Set padding INVERSE to confidence:
   - Established (4px): 40px
   - Probable (3px): 32px
   - Speculative (2px): 24px
   - Open (1px): 16px
[8 steps total...]
```

**PROPOSED (Anti-Rigidity Launchpad):**

```markdown
## Case Study 1: Geological Strata — A Warmth/Austerity Resolution

⚠️ **READ THIS FIRST**

This is NOT a template. This is a WORKED EXAMPLE showing how tension derivation
led to ONE metaphor. Your content's tension will lead to a DIFFERENT metaphor.

**Your assignment:** Read this to learn the PROCESS, not to copy the ANSWER.

---

### The Problem (OD-004 Context)

**Content:** Research documentation with confidence gradients
**Reader Need:** Distinguish certain facts from speculative hypotheses
**Design Constraint:** Binary emphasis (3px structural vs 1px separator, no gradients)

**The Tension:**

> "How do you show GRADUAL confidence using DISCRETE tools?"

---

### The Search (Phase 3.4 in Action)

**Search Query Generated:**

> "What domain naturally exhibits LAYERED ORDERING while being ANGULAR and
> DISCRETE yet conveying GRADUAL CERTAINTY?"

**Constraint Scan (Hardest First):**

KortAI requires `border-radius: 0` (angularity). This eliminates:
- Organic/biological (curves)
- Liquid/fluid (flowing shapes)
- Atmospheric (soft gradients)

**Content Resonance:**

The document used words: "established," "bedrock," "layers of evidence,"
"foundational research," "sedimentary accumulation."

Geological vocabulary already present in content.

**Emotional Valence:**

Warmth/safety needed. This eliminates:
- Military (aggressive)
- Industrial (mechanical coldness)

**Domains That Survived:**

1. Geological (sedimentary layers)
2. Architectural (foundation levels)
3. Botanical (growth rings)

**Why Geological Won (for OD-004):**

- Sedimentary strata form through GRADUAL pressure (time)
- But result in DISCRETE consolidated layers (bedrock vs sediment vs soil)
- Layers are ANGULAR (straight boundaries)
- Yet convey SAFETY (contained, stable, earth-tones)
- Content vocabulary matched perfectly ("bedrock," "layers")

---

### The Translation (Phase 4 in Action)

**Metaphor Properties Extracted:**

| Geological Property | Content Parallel | CSS Mechanism |
|-------------------|-----------------|---------------|
| Layered strata | Confidence sections | Horizontal zones (backgrounds) |
| Consolidation gradient | Certainty levels | Border-weight (4px/3px/2px/1px) |
| Depth = pressure | Depth = uncertainty | Inverse padding (40px → 16px) |
| Earth tones | Warmth within austerity | Background progression (sparse → bedrock) |

**CSS Mechanisms Applied:**

- **Border-weight gradient** (Tier 2.5 confidence encoding)
  4px = high confidence / 1px = low confidence
  *This mechanism is REUSABLE for any discrete hierarchy*

- **Progressive background darkening** (Tier 1 zone tokens)
  sparse (#FEF9F5) → dense (#FFFFFF) → bedrock (#1A1A1A)
  *This mechanism is REUSABLE for any depth metaphor*

- **Inverse padding correlation** (Tier 1 spacing scale)
  Certain = sparse (40px) / Uncertain = compressed (16px)
  *This correlation is SPECIFIC to geological but adaptable*

**Guardrails Met:**

- Compression ratio: 16px ≥ 40% of 40px (40% — exactly at ceiling)
- Min padding: 16px < 32px floor — ADJUSTED to 32px in implementation
- Container width: 960px (65% of 1440px viewport)

---

### The Outcome (Proof This Worked)

**Perceptual Audit:** OD-004 scored top-3 quality, YES verdict, 0 soul violations
**Perceptual Risk:** 0 (implicit metaphor, changing state transitions, varied elements)
**Key Success Factor:** Metaphor was FELT not LABELED (implicit > explicit)

---

### What YOU Extract From This

**REUSABLE (Mechanisms):**

1. **Border-weight gradient** — encode 3-4 discrete levels via border width
2. **Background progression** — encode depth/descent via darkening backgrounds
3. **Inverse correlation** — pair density with semantic meaning (certain=sparse works; could also do important=dense)

**INSPIRATIONAL (Process):**

1. Search query format: "What is [CONSTRAINT] while being [CONSTRAINT] yet [NEED]?"
2. Constraint scan eliminates incompatible domains first
3. Content vocabulary contains metaphor seed
4. Emotional valence filters remaining candidates
5. Winner = domain that survives all filters + resonates with content

**NOT REUSABLE (Specific Metaphor):**

The geological metaphor itself. Your content will NOT be about confidence
gradients with earth-tone vocabulary. You will derive a DIFFERENT metaphor.

---

### Other Metaphors That Could Resolve Warmth/Austerity

**If your content had:**

- **Growth/maturity themes:** Botanical (growth rings — outer bark vs inner heartwood)
- **Building/construction themes:** Architectural (foundation layers — reinforced vs aggregate)
- **Editing/revision themes:** Editorial (draft status — final vs working vs exploratory)
- **Time/aging themes:** Archival (document preservation — sealed vs working vs ephemeral)

**All of these:**
- Are naturally angular (compatible with border-radius: 0)
- Support discrete layering (compatible with border-weight gradient)
- Convey warmth through containment/safety
- Would use SAME mechanisms (border-weight, background progression) with DIFFERENT vocabulary

---

### Your Divergence Assignment

**DO THIS:**
1. Run YOUR tension derivation (Phase 1-2)
2. Generate YOUR search query from YOUR content properties
3. Scan domains using YOUR content vocabulary
4. Discover YOUR metaphor (it will NOT be geological)
5. Apply mechanisms (border-weight, backgrounds) with YOUR domain's vocabulary

**DO NOT:**
1. Use geological because your content has "layers" (too surface-level)
2. Copy the 4px/3px/2px/1px encoding without semantic justification
3. Skip tension derivation and jump to "this looks like confidence gradients"

**Success Check:**

If your metaphor is geological, ask:
- "Did my content use geological vocabulary naturally?"
- "Did my search query independently suggest earth/rock/strata domains?"
- "Or did I pattern-match 'confidence levels' to 'this library pattern'?"

If pattern-matched → Re-run Phase 3 with explicit constraint: "Geological is
taken. What ELSE resolves my tension?"

---

### Quick Reference (After You've Derived YOUR Metaphor)

**If you need to reference geological mechanisms for implementation:**

| Mechanism | CSS | Guardrail |
|-----------|-----|-----------|
| Border-weight gradient | 4px/3px/2px/1px border-left | 2px ONLY semantic, not decorative |
| Background progression | sparse → dense → bedrock | Darkest requires inverted text |
| Inverse padding | 40px → 32px → 24px → 32px | Min 32px floor (not 16px) |
| Fractal consistency | Apply at page/section/component/character scales | Verify same pattern at all scales |

**See OD-004 source for implementation details.**

---

**END CASE STUDY**

═══════════════════════════════════════════════════════════════════════════════

**Permission Structure:** "Read to learn process → Derive YOUR answer → Extract mechanisms → See proof it works"

```

**Length:** ~250 lines (vs 150 current)
**Cost:** +100 lines per pattern × 6 patterns = +600 lines total library size
**Benefit:** Same information + explicit anti-rigidity framing + divergence assignment

**Key Additions:**

1. **⚠️ READ THIS FIRST** warning at top
2. **"Your assignment"** language (sets expectation)
3. **"The Search (Phase 3.4 in Action)"** — shows HOW not just WHAT
4. **"What YOU Extract"** section with clear REUSABLE vs NOT REUSABLE split
5. **"Other Metaphors That Could Work"** — models variation
6. **"Your Divergence Assignment"** — explicit DO THIS / DO NOT
7. **"Success Check"** — self-verification prompts
8. **"Quick Reference"** — fast lookup AFTER derivation (not before)

**This is the complete anti-rigidity pattern.**

---

## METACOGNITIVE SYNTHESIS

### Unexamined Assumptions

**ASSUMPTION 1: "More examples = more constraint"**

**Examined:** Is expanding the library from 6 to 12 patterns harmful?

**Finding:** Not inherently. The COUNT doesn't constrain. The FRAMING does.

- 6 examples framed as templates = constraint
- 12 examples framed as proof-of-concept gallery = launchpad
- 24 examples framed as "here's the diversity possible" = inspiration

**The ceiling isn't quantity, it's positioning.**

**ASSUMPTION 2: "Explicit process descriptions reduce creativity"**

**Examined:** Does the skill's 839 lines of procedural instructions constrain?

**Finding:** NO. The skill teaches HOW to derive. It doesn't prescribe WHAT to derive.

Pattern Bias Analysis found: "The skill text itself is pattern-agnostic — 0 named pattern references in Phase 3."

**Explicit process enables creativity when:**
- Process describes SEARCH not SELECTION
- Examples are labeled as EXAMPLES not TEMPLATES
- Constraints are PRODUCTIVE (narrow search space) not PRESCRIPTIVE (dictate answer)

**ASSUMPTION 3: "Jazz pedagogy requires oral transmission"**

**Examined:** Can written documentation achieve jazz-style launchpad learning?

**Finding:** YES, if it includes:

1. **Explicit permission language** ("you are expected to deviate")
2. **Modeling variation** (show 3+ answers to same problem)
3. **Structural assignments** (require applying to new contexts)
4. **Vocabulary/repertoire distinction** (reusable tools vs inspirational examples)
5. **Success redefinition** (novel = success, copying = failure)

**Written docs CAN activate divergent thinking if framing is explicit.**

### Blind Spots

**BLIND SPOT 1: No empirical data on actual agent behavior**

**The gap:** All analysis is PREDICTIVE. We DON'T KNOW if agents actually pattern-match when given library access.

**Test needed (from Pattern Bias Analysis):**

> "Build 2 Track 2 pages concurrently:
> Team A: Full library access
> Team B: Library-blind (skill only)
> Measure: novelty, quality, time, pattern-matching frequency"

**This empirical test is CRITICAL.** Without it, all recommendations are speculative.

**BLIND SPOT 2: Undefined "creativity" metric**

**The gap:** What IS creative divergence? How do we measure it?

Options:
- Metaphor novelty (binary: matches library yes/no)
- Domain diversity (count of unique domains used)
- Mechanism recombination (reuse mechanisms in novel ways)
- Perceptual distinctiveness (looks different from existing pages)

**Need to define BEFORE testing.**

**BLIND SPOT 3: Unknown threshold where examples become templates**

**The question:** At what library size does "proof gallery" become "pattern catalog"?

- 3 examples = "here's what's possible"
- 6 examples = "here's good coverage"
- 12 examples = ???
- 24 examples = ???

**The tipping point is unknown.** Needs tracking during migration:
- After 15 Track 2 pages, evaluate: Does library feel helpful or limiting?
- After 30 Track 2 pages: Are we discovering NEW patterns or recycling?

---

## FINAL RECOMMENDATIONS

### 1. IMMEDIATE: Rewrite Library with Anti-Prescription Framing

**Action:** Rewrite all 6 Tier 3 recipes using the complete anti-rigidity pattern (Research Angle 6).

**Changes per recipe:**
- Replace "When to use" with "Tension that produced this"
- Replace "Composition recipe" with "The Search in Action" + "What YOU Extract"
- Add "⚠️ READ THIS FIRST" warning
- Add "Your Divergence Assignment" section
- Add "Other Metaphors That Could Work" section
- Add "Success Check" self-verification prompts

**Cost:** +100 lines per recipe = +600 lines total
**Benefit:** Same information, radically different framing

### 2. IMMEDIATE: Split Library into Mechanisms + Case Studies

**Action:** Create two documents (Research Angle 2, Option 2):

**A: Mechanism Catalog (Tools)**
- ~20 lines per mechanism
- CSS + perceptual effect + proven contexts + reuse strategy
- Positioned as TOOLS not TEMPLATES

**B: Metaphor Case Studies (Gallery)**
- ~250 lines per case study (anti-rigidity format)
- Full narrative + search process + alternative metaphors
- Positioned as PROOF-OF-CONCEPT not TEMPLATES

**Benefit:** Clear separation between reusable (mechanisms) and inspirational (metaphors)

### 3. IMMEDIATE: Add Explicit Divergence Language to Skill

**Action:** Add to tension-composition skill (Research Angle 5):

**Phase 3 Introduction:**
```markdown
You are EXPECTED to discover a metaphor NOT in the historical library.
Success = novel metaphor derived from YOUR tension.
```

**Phase 5 Verification:**
```markdown
Divergence Check:
- [ ] Is my metaphor distinct from library patterns?
- [ ] Did I derive this or pattern-match to it?
```

**Cost:** +30 lines to skill
**Benefit:** Explicit permission activates divergent thinking

### 4. PHASE F PILOT: Empirical Divergence Test

**Action:** Test library-aware vs library-blind agents (Research Angle 5):

Build 4 pages with SAME tension using 4 prompt variants:
- Variant A: Skill only (control)
- Variant B: Skill + weak permission
- Variant C: Skill + explicit expectation language
- Variant D: Skill + library + anti-prescription warnings

**Measure:** Novelty, quality, time, pattern-matching frequency

**Benefit:** Convert speculation into data

### 5. PHASE C: Make Tension Derivation Mandatory Even When Reusing

**Action:** Enforce Phase 1-2 execution before library consultation (Research Angle 2, Pattern Bias Analysis Recommendation 3):

**Current risky flow:**
1. Builder reads content
2. Weaver suggests "similar to OD-004, consider geological"
3. Builder skips Phase 1-2, adapts geological
4. Result: Pattern-matching

**Proposed safe flow:**
1. Builder reads content
2. Builder runs Phase 1 (multi-axis questioning) — MANDATORY
3. Builder runs Phase 2 (tension derivation) — MANDATORY
4. Weaver checks "your tension matches OD-004"
5. Builder chooses: (a) reuse geological, or (b) derive fresh
6. Either way, tension was DERIVED not ASSUMED

**Enforcement:** Weaver requires tension table before suggesting reuse

**Benefit:** Prevents shortcut to pattern-matching

### 6. ONGOING: Diversity Tracking

**Action:** Weaver maintains metaphor registry (Pattern Bias Analysis Recommendation 5):

| Metaphor Family | Pages Using | Latest Use | Fatigue Risk |
|-----------------|-------------|------------|--------------|
| Geological | OD-004, CD-004, Page-12 | Page-12 | MODERATE (3×) |
| Botanical | — | — | NONE (0×) |

**Advisory protocol:**
- If ≥4 uses: "⚠️ Geological used 4× already. Consider alternative?"
- Builder can override with justification
- NO hard limits, just tracking + advisory

**Benefit:** Prevents invisible pattern fatigue

---

## CONCLUSION

**The Core Insight:**

Creative freedom vs. constraint is NOT about information volume. It's about **architectural positioning**.

**You can provide:**
- Complete process documentation (skill: 839 lines)
- Full pattern library (6 recipes × 250 lines = 1,500 lines)
- Mechanism catalog (20 mechanisms × 20 lines = 400 lines)
- Historical examples (6 case studies)

**AND STILL enable maximum creativity IF:**

1. **Process teaches SEARCH not SELECTION**
2. **Patterns positioned as EXAMPLES not TEMPLATES**
3. **Mechanisms separated from METAPHORS**
4. **Explicit permission to DIVERGE repeated throughout**
5. **Success redefined as NOVEL not MATCHING**
6. **Tension derivation MANDATORY before library access**

**The jazz analogy works:**

Standards are learned. Mechanisms are extracted. Personal voice emerges through APPLYING mechanisms to NEW material, not REPLAYING standards.

**The library becomes a launchpad when:**
- "When to use" → "Tension that produced this"
- "Composition recipe" → "What YOU extract"
- "Real-world example" → "Proof this works + other metaphors that could work"

**Same information. Different framing. Radically different creative outcome.**

**Immediate action:** Rewrite library with anti-rigidity pattern. Add divergence language to skill. Test empirically during Phase F Pilot.

**The metaphor shapes experience; the framing shapes whether builders feel constrained or empowered.**
