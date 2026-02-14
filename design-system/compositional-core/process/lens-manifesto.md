# Phase C Lens Manifesto — Identity + Enablement Hybrid

**Date:** 2026-02-14
**Purpose:** Define the extraction worldview for Phase C migration
**Status:** OPERATIONAL DIRECTIVE

---

## 1. LENS DECLARATION

Phase C uses **Identity + Enablement hybrid**. This is a **CHOICE**, not a discovery.

### Why Identity Lens

**Rationale:** Preserves what makes KortAI recognizably KortAI — defined by REFUSALS as much as affordances.

**What it extracts:**
- Soul constraints (border-radius: 0, box-shadow: none)
- Visual signatures (sharp edges, 4px borders, warm palette)
- Compositional patterns (2-zone callout DNA, fractal density rhythm)
- Philosophical identity (anti-complexity, research-first, perceptual depth)

**What it achieves:**
- Coherence across all outputs ("this feels like KortAI")
- Soul preservation (identity never drifts)
- Recognition at first glance (distinctive visual language)

**Evidence from research:**
- All 5 Wave 1 lenses agreed on 3 soul constraints (border-radius, box-shadow, primary red)
- Identity lens extracted 29 character-defining items
- Visual rendering confirmed: sharp corners + flat surfaces + 4px borders = instant KortAI recognition

**The core principle:** KortAI identity lives in CONSTRAINTS more than AFFORDANCES. It is defined by what it REFUSES (rounded corners, shadows, decorative complexity) as much as what it EMBRACES (flat geometry, editorial typography, research rigor).

### Why Enablement Lens

**Rationale:** Extracts only what ENABLES creativity, stopping before extraction becomes constraint.

**What it extracts:**
- Blocking constraints (agents will violate without explicit prohibition)
- Minimum viable foundations (colors, fonts, spacing anchors)
- Negative rules (what NOT to do — more important than recipes)
- Creative friction thresholds (extract up to enablement point, stop before constraint zone)

**What it achieves:**
- Creative freedom (30-40 items — below the enablement threshold)
- Prevention of soul violations (prohibitions explicit)
- Space for novel metaphors (foundations set, examples not templates)

**Evidence from research:**
- Enablement lens extracted 10 items (minimum viable for creative freedom)
- Identified 8+ prohibitions missing from other lenses
- Defined threshold: extract foundations + structure, NOT examples

**The core principle:** Less extraction = more freedom, up to a threshold where absence becomes friction. Below threshold: creative paralysis. At threshold: creative enablement. Above threshold: creative constraint.

### Why Identity + Enablement Together

**The balance:**
- **Identity** ensures soul preservation (non-negotiable character)
- **Enablement** ensures creative freedom (prevents pattern-matching)
- **Together:** Constraint (identity) balanced with freedom (enablement)

**The output:**
- 30-40 items total
- 16 consensus core (soul + palette + fonts + callout DNA + border system)
- 8 prohibitions (enablement-specific negative rules)
- 6-16 additional components/mechanisms (identity + frequency convergence)

**The range logic:**
- Below 30: Under-extraction (missing critical identity markers)
- 30-40: Sweet spot (soul preserved, creativity enabled)
- Above 40: Over-extraction (crossing into constraint zone)

### Deprioritized Lenses and Why

**Frequency Lens (42-45 items):**
- **Why deprioritized:** Backward-looking, privileges stability over innovation
- **What it misses:** Treats web standards (skip-link, reduced-motion) as KortAI-specific
- **What it counts wrong:** All repeated patterns equally (no distinction between soul vs convenience)
- **Risk:** Inflates count with standards compliance artifacts

**Completeness Lens (56+ items):**
- **Why deprioritized:** Crosses enablement threshold into constraint zone
- **What it misses:** Conflates existence with extractability (counts ALL named artifacts)
- **What it counts wrong:** Adds syntax highlighting tokens, conversational-specific tokens
- **Risk:** Bloat — extraction for documentation's sake, not creative need

**Minimalism Lens (10 items):**
- **Why deprioritized:** Below creative friction threshold
- **What it misses:** Under-values identity beyond soul constraints
- **What it counts wrong:** Assumes too much is derivable (agents will get it wrong)
- **Risk:** Under-extraction — agents lack sufficient foundation

**Lens-derivation Creative Lens (9 meta-patterns):**
- **Why deprioritized:** Too abstract for immediate application
- **What it counts:** Generative primitives (fractal self-similarity, compositional primitives)
- **What it misses:** Practical components agents need (callouts, code blocks)
- **Risk:** Philosophically pure but operationally insufficient

**The decision:** Identity + Enablement hybrid balances soul preservation with creative freedom better than any single lens.

---

## 2. CONFLICT RESOLUTION PROTOCOL

For EACH known conflict between Identity and Enablement lenses, this section documents the DECISION and WHY.

### Conflict 1: Callout Variants — 1 Component or 6?

**Identity lens says:** 6 semantic types (Info, Tip, Essence, Challenge, Gotcha, Note) — semantic differentiation matters for soul
**Enablement lens says:** 1 parameterized component with color variants — fewer constraints, more freedom

**DECISION:** 1 parameterized component (enablement wins)

**Rationale:**
- Extracting 6 separate components creates the illusion of 6 independent choices
- Reality: all share 2-zone DNA (sparse label + dense body + 4px border)
- Only difference: `--accent-color` parameter
- Enablement principle: fewer constraints = more freedom
- Agents can generate NEW semantic types (Warning, Success, Error) without template

**Implementation:**
```css
.callout {
  /* Universal 2-zone DNA */
  border-left: 4px solid var(--accent-color);
}
.callout--info { --accent-color: var(--accent-blue); }
.callout--tip { --accent-color: var(--accent-green); }
/* Agents can add .callout--warning, etc. */
```

**Extract:** 1 callout component + 5 color parameters
**Do NOT extract:** 6 separate callout types

### Conflict 2: Spacing Scale — 6 Anchors or 14 Values?

**Identity lens says:** 14 distinct values (all observed spacing values across explorations)
**Enablement lens says:** 6 anchors (4, 16, 32, 48, 64, 80) — rest are derivable via 4px increments

**DECISION:** 6 anchors + document the full 14 as available (enablement sets floor, identity caps ceiling)

**Rationale:**
- Identity demands: spacing system preserves perceptual coherence
- Enablement demands: agents can derive intermediate values (12px = 4px × 3)
- Hybrid: 6 anchors MUST exist, 14 values MAY exist
- If agent needs 24px (not in 14), they derive it (4px × 6) — system permits this
- If agent needs 7px (off-grid), system PROHIBITS this — violates 4px base unit

**Implementation:**
```css
/* ANCHORS (extract these) */
--space-1: 4px;   /* Base unit */
--space-4: 16px;  /* Anchor */
--space-8: 32px;  /* Anchor */
--space-12: 48px; /* Anchor */
--space-16: 64px; /* Anchor */
--space-20: 80px; /* Anchor */

/* AVAILABLE (document, don't mandate) */
--space-2: 8px;   /* Derivable: 4px × 2 */
--space-3: 12px;  /* Derivable: 4px × 3 */
/* ... etc up to --space-20 */
```

**Extract:** 6 anchors + 4px base unit principle
**Document:** Full 14-value scale as available
**Prohibit:** Off-grid values (3px, 7px, 13px)

### Conflict 3: Patterns — Extractable or Not?

**Identity lens says:** Extract compositional case studies (PULSE, GEOLOGICAL, etc.) as identity-bearing examples
**Enablement lens says:** Do NOT extract as templates — constrains future metaphors
**Rigidity-mechanics says:** 75-80% metaphor-generated — patterns are proof, not recipes

**DECISION:** NOT extractable as templates, YES as case studies (identity demands soul preservation, enablement demands not constraining future metaphors)

**Rationale:**
- Identity concern: Without examples, agents don't understand what "KortAI-quality" means
- Enablement concern: With templates, agents pattern-match instead of deriving fresh
- Resolution: Extract MECHANISMS (reusable), document PATTERNS (proof), prohibit TEMPLATES (constraint)

**Implementation structure:**
- `/techniques/mechanisms.md` — Border-weight gradient, 2-zone DNA (EXTRACT)
- `/case-studies/GEOLOGICAL.md` — Full exploration with anti-prescription header (DOCUMENT)
- NO `/templates/geological-layout.html` — This would be template (PROHIBITED)

**Framing rules:**
- Every case study begins: "⚠️ NOT A TEMPLATE"
- Patterns show tension narrative (what produced this), NOT criteria (when to use this)
- Divergence assignment: "If your metaphor is geological, justify independent convergence"

**Extract:** Mechanisms (techniques that generated patterns)
**Document:** Patterns (proof that techniques work)
**Prohibit:** Templates (prescriptive layouts)

### Conflict 4: Typography — 3 Fonts or 6-Level Scale?

**Identity lens says:** Extract Instrument Serif + Inter + JetBrains Mono (typography trinity defines voice)
**Enablement lens says:** Extract hierarchy principle (display serif, body sans, code mono), fonts are parameters

**DECISION:** Extract BOTH — 3 specific fonts (identity floor) + hierarchy principle (enablement ceiling)

**Rationale:**
- Identity constraint: "Instrument Serif" creates the distinctive editorial voice — this is soul-level
- Enablement freedom: IF project needs different fonts (e.g., accessibility requirement), hierarchy principle permits swap
- Hybrid: Default fonts preserve identity, principle permits evolution

**Implementation:**
```css
/* IDENTITY (extract specific fonts) */
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;

/* PRINCIPLE (extract hierarchy) */
/* Display = serif (literary authority) */
/* Body = sans-serif (clean readability) */
/* Code = monospace (technical precision) */
```

**Extract:** 3 specific fonts + typography trinity principle
**Permit:** Font substitution IF hierarchy preserved (rare, requires justification)
**Prohibit:** Sans-serif display headings, serif body text, non-mono code

### Conflict 5: Component Count — 7 vs 18 vs 29?

**Enablement lens says:** 7 archetypes (minimum viable)
**Frequency/Reuse lens says:** 18 components (high-frequency structures)
**Identity lens says:** 29 items (soul + compositional + semantic)

**DECISION:** 15-25 components (enablement floor, identity ceiling, frequency validates)

**Rationale:**
- Below 15: Under-extraction (enablement: agents lack critical structures)
- 15-25: Sweet spot (identity: sufficient for soul, enablement: not constraining)
- Above 25: Over-extraction (enablement: crossing constraint threshold)

**What counts as component:**
- Universal structures (callout, code block, header)
- NOT variants (callout-info is color parameter, not separate component)
- NOT standards (skip-link is accessibility hygiene, not KortAI identity)

**Extract:** 15-25 components
**Count variants as:** Parameters of base component
**Exclude standards:** Web accessibility patterns (document separately)

### Conflict 6: Prohibitions — Implicit or Explicit?

**Identity lens says:** Soul constraints (border-radius: 0, box-shadow: none) are sufficient — rest is implicit
**Enablement lens says:** 8+ explicit prohibitions needed — agents will violate without prohibition

**DECISION:** Explicit prohibition documentation (enablement wins — prevention over cure)

**Rationale:**
- Identity assumption: "Agents will see border-radius: 0 and infer 'never round corners'"
- Enablement finding: Agents default to rounded corners (training distribution bias)
- Reality check: Explicit prohibition prevents soul violations

**The 8+ prohibitions:**
1. No 2px borders (epidemic value)
2. No rounded corners (border-radius > 0)
3. No drop shadows (box-shadow, filter: drop-shadow)
4. No semi-transparent backgrounds (opacity < 1 on containers)
5. Serif NOT for body text (only display headings)
6. No gradient backgrounds
7. No pure black (#000) or pure white (#FFF)
8. No neumorphism, glassmorphism, or decorative effects

**Extract:** All 8 prohibitions in `/foundations/prohibitions.md`
**Format:** "DO NOT [action]. Rationale: [why this violates soul]"
**Enforce:** Binary rules (not judgment — 100% compliance expected)

### Additional Conflicts Identified

**Conflict 7: Responsive Strategy — Document 768px Only or Full Breakpoint System?**

**Identity lens says:** 768px observed across all explorations — this is the standard
**Enablement lens says:** Document principle (grid collapse at mobile), not specific pixel value

**DECISION:** Document 768px as primary + responsive principle

**Implementation:**
- Extract: 768px primary breakpoint (grid → single-column)
- Document: Mobile (375px) and tablet (1024px) as available
- Principle: Collapse complexity at smaller widths (spacing compression, stacking)

**Conflict 8: Dark Mode — Extract or Not?**

**Identity lens says:** No dark mode implementations exist — cannot extract what doesn't exist
**Enablement lens says:** Future need predictable — extract token override structure

**DECISION:** Do NOT extract (enablement: only extract validated patterns)

**Rationale:**
- Dark mode is PLANNED but NOT VALIDATED
- Extracting unvalidated patterns = speculation
- When dark mode exists, Phase C-II can extract it

**Status:** DEFERRED until dark mode validated

---

## 3. ANTI-ASSUMPTION INSTRUCTIONS

The 4 invisible assumptions all agents carry from training, with explicit counter-questions.

### Assumption A: Extraction is FOR Agents

**The invisible assumption:**
Design systems exist to help agents build faster/better. Extraction optimizes agent productivity.

**Counter-question:**
"Is this FOR agents or FOR content?"

**Why this matters:**
- Agent-centric extraction prioritizes reusability (what agents use most)
- Content-centric extraction prioritizes meaning (what content needs to communicate)
- Example: Callout-essence vs callout-info — agent sees "2 similar boxes," content sees "fundamentally different semantic intent"

**The correct frame:**
Extract what CONTENT needs to express itself, not what AGENTS find convenient to reuse.

**Application:**
When evaluating extractability, ask:
- "Does extracting this preserve MEANING?" (content frame)
- NOT "Does extracting this reduce CODE?" (agent frame)

### Assumption B: Design Tokens are Discrete Items

**The invisible assumption:**
Tokens are atomic values that can be counted (45 tokens, 18 components, etc.).

**Counter-question:**
"Are these discrete items or continuous?"

**Why this matters:**
- Discrete framing: --space-1 through --space-20 = 20 separate tokens
- Continuous framing: 4px base unit + geometric progression = 1 system with infinite derivable values
- Example: Is --space-3 (12px) a separate token, or is it --space-1 × 3?

**The correct frame:**
Design systems are LAYERED SYSTEMS, not collections of discrete atoms.

**Application:**
When counting, ask:
- "Is this an independent value or a derived value?"
- "Am I counting ANCHORS (extract) or INSTANCES (derivable)?"

**The 6-layer ontology:**
1. Identity constraints (soul — immutable)
2. Design vocabulary (tokens — anchors)
3. Compositional grammar (how to combine)
4. Component implementations (structures)
5. Case studies (proof, not templates)
6. Semantic decision rules (when-to-use)

These layers are NOT additive. You cannot add "3 constraints + 16 tokens + 12 mechanisms = 31 extractables."

### Assumption C: Value Exists Independent of Context

**The invisible assumption:**
If border-radius: 0 works for explorations, it will work for ALL future content. Patterns are universally reusable.

**Counter-question:**
"Does value survive outside this context?"

**Why this matters:**
- Context-independent framing: "Callouts are extractable" (universal)
- Context-dependent framing: "Callouts worked for dense technical documentation" (situated)
- Example: 4px borders feel authoritative for editorial docs, might feel heavy for marketing content

**The correct frame:**
Extraction is SITUATED. What worked for fortress content may not work for all future content.

**Application:**
When extracting, document:
- "This worked for [content type]"
- NOT "This is universally optimal"

**Provenance requirement:**
Every extracted pattern MUST document:
- Where it came from (which exploration)
- What content characteristics it served (warmth/austerity, simple/complex)
- What context it assumes (dense technical, narrative editorial, conversational Q&A)

### Assumption D: Discovery Language

**The invisible assumption:**
Patterns exist in the material, waiting to be FOUND. Extraction is empirical observation.

**Counter-question:**
"Am I finding this or constructing it?"

**Why this matters:**
- Discovery language: "The data REVEALS that callouts are extractable"
- Construction language: "I DECIDED that 97.4% frequency means mandatory extraction"
- Reality: Frequency is fact (97.4%), but "mandatory" is decision (threshold choice)

**The correct frame:**
Extraction is CONSTRUCTION disguised as DISCOVERY. Acknowledge the construction.

**Application:**
When writing extraction rationale:
- Use: "I chose to extract X because Y" (ownership)
- NOT: "The analysis reveals that X should be extracted" (false objectivity)

**Required transparency:**
- State lens choice: "Using Identity + Enablement hybrid"
- State threshold: "30%+ frequency counted as extractable"
- State granularity: "Counting callout as 1 component with 6 parameters, not 6 components"
- State reading order: "Visual-first extraction vs source-first"

**The epistemological truth:**
There is NO SINGLE CORRECT extraction. Different lenses produce different extractions (9 items vs 56 items). This is not error — this is lens-dependent reality construction.

---

## 4. LENS WEIGHTS

**Identity:** 100%
**Enablement:** 80%
**Perceptual:** 60%
**Creative:** 40%
**Frequency:** 20%

### What These Weights Mean

**Weight = veto power in conflicts.**

When lenses disagree, higher-weighted lens wins.

**Example conflict: Callout variants (1 vs 6)**
- Identity (100%): "Extract 6 semantic types"
- Enablement (80%): "Extract 1 parameterized component"
- Resolution: Enablement wins on creative freedom principle, BUT Identity requires documenting 6 semantic meanings
- Outcome: 1 component + 6 documented semantic intents

**Example conflict: Spacing scale (6 vs 14)**
- Identity (100%): "Extract 14 observed values"
- Enablement (80%): "Extract 6 anchors, rest derivable"
- Resolution: Hybrid — 6 anchors MUST exist (enablement floor), 14 values MAY exist (identity ceiling)

**Example conflict: Soul constraints**
- Identity (100%): "border-radius: 0 is non-negotiable"
- Frequency (20%): "Not all pages use border-radius: 0" (false, but hypothetically)
- Resolution: Identity veto — soul constraints are absolute regardless of frequency

### Why These Specific Weights

**Identity = 100% (Absolute)**
- Rationale: Soul preservation is non-negotiable
- Veto power: Identity can override ALL other lenses on soul constraints
- Example: Even if frequency lens finds rounded corners in 1 file, identity prohibits extraction

**Enablement = 80% (Very High)**
- Rationale: Creative freedom is primary goal
- Veto power: Can override frequency, perceptual, creative lenses
- Example: Enablement prevents extracting 56 items (completeness lens) — crosses constraint threshold

**Perceptual = 60% (Medium-High)**
- Rationale: Visual coherence matters, but not above creative freedom
- Veto power: Can override creative and frequency lenses
- Example: Perceptual requires fractal density rhythm (even if frequency is low)

**Creative = 40% (Medium)**
- Rationale: Generative patterns valuable, but abstract
- Veto power: Can override frequency lens
- Example: Creative extracts meta-patterns (even if they appear once)

**Frequency = 20% (Low)**
- Rationale: Past usage informs, but doesn't dictate
- Veto power: None — lowest priority
- Example: Skip-link appears 100%, but frequency doesn't override enablement ("this is web standard, not KortAI-specific")

### How to Apply Weights

**Step 1: Identify conflict**
- Example: "Should we extract all 14 spacing values or just 6 anchors?"

**Step 2: Map lenses to positions**
- Identity: 14 values (observed across all explorations)
- Enablement: 6 anchors (rest derivable)
- Frequency: 14 values (all appear in code)

**Step 3: Apply weights**
- Identity (100%) + Frequency (20%) = 120 points for "14 values"
- Enablement (80%) = 80 points for "6 anchors"

**Step 4: STOP — Weights are not arithmetic**

**Correct resolution process:**
1. Does Identity have absolute position? → YES: 6 anchors MUST exist
2. Does Enablement have freedom concern? → YES: 14 values creates constraint
3. Hybrid: 6 anchors (mandatory), 14 values (permitted but not mandated)

**Weights are VETO POWER, not vote-counting.**

### Edge Cases

**When all high-weight lenses agree:**
- Extract with high confidence
- Example: Identity + Enablement + Perceptual all agree on 2-zone callout DNA → DEFINITE extract

**When high-weight lenses conflict:**
- Seek hybrid resolution (not winner-take-all)
- Example: Identity wants 6 callout types, Enablement wants 1 → Hybrid: 1 component + 6 semantic meanings documented

**When only low-weight lens supports:**
- Do NOT extract
- Example: Only Frequency lens finds skip-link extractable → Don't extract (web standard, not KortAI identity)

**When Creative lens finds unique meta-pattern:**
- Extract IF Identity permits, EVEN IF Frequency is low
- Example: Fractal self-similarity appears once (DD-006) → Creative (40%) supports, Identity (100%) permits → EXTRACT

---

## 5. READING ORDER PRESCRIPTION

**Source-first for vocabulary (Wave 1-2 agents), visual-first for case studies (Wave 3 agents).**

### Why Reading Order Matters

**FROM PROCESS METACOGNITION RESEARCH:**
Reading order is NOT neutral. It shapes categories agents construct.

**Evidence:**
- Visual-first agents extracted perceptual patterns (drop caps, rhythm, "islands feel like islands")
- Source-first agents extracted technical constraints (border-radius: 0, box-shadow: none, CSS tokens)
- SAME MATERIAL. DIFFERENT ORDER. DIFFERENT CATEGORIES.

**The mechanism:**
First-read material becomes ANCHOR. Later material is categorized relative to anchor.

**Example:**
- **Visual-first:** See sharp corners → categorize as "visual soul" → read CSS → confirm observation
- **Source-first:** Read `border-radius: 0` → categorize as "token" → see sharp corners → confirm CSS value

SAME FINDING (sharp corners), DIFFERENT FRAMING (soul vs token).

### Wave 1-2: Vocabulary Extraction (Source-First)

**WHO:** Agents extracting tokens, components, mechanisms
**WHEN:** Phase C-I through C-III
**WHAT:** Foundations and techniques

**READING ORDER:**
1. Read CSS source code FIRST (tokens, component structures)
2. Read HTML structures SECOND (callout anatomy, nesting patterns)
3. Read visual renderings LAST (confirmation only)

**WHY SOURCE-FIRST:**
- Creates technical categories (tokens, components, mechanisms)
- Prevents visual-driven over-interpretation ("this FEELS important" vs "this IS in code")
- Vocabulary is implementation-focused — source is ground truth

**CATEGORIES PRODUCED:**
- `:root` tokens (colors, spacing, fonts)
- Component structures (2-zone callout, code block, header)
- CSS mechanisms (border-weight gradient, solid-offset depth)

**WHAT THIS PREVENTS:**
- Visual-only patterns that have no CSS implementation
- Over-abstracting visual rhythm into "extractable component"
- Missing technical constraints hidden in source

**BINARY RULE:**
"You MUST read source code BEFORE visual rendering during vocabulary extraction. DO NOT form categories from visual impressions alone."

### Wave 3: Case Study Documentation (Visual-First)

**WHO:** Agents documenting patterns as case studies
**WHEN:** Phase C-IV
**WHAT:** Compositional explorations (PULSE, GEOLOGICAL, etc.)

**READING ORDER:**
1. Read visual rendering via Playwright FIRST (experience the page)
2. Read tension narrative SECOND (understand what produced this)
3. Read source implementation LAST (how it was built)

**WHY VISUAL-FIRST:**
- Creates perceptual categories (rhythm, density, metaphor coherence)
- Captures EXPERIENCE (what users perceive, not what code implements)
- Case studies are about EFFECT, not implementation

**CATEGORIES PRODUCED:**
- Metaphor coherence ("geological feels like strata")
- Perceptual patterns (dense/sparse alternation, visual weight)
- Experiential qualities ("this feels authoritative")

**WHAT THIS PREVENTS:**
- Missing emergent visual effects (patterns visible rendered but not obvious in source)
- Over-focusing on CSS at expense of experience
- Documenting implementation without understanding effect

**BINARY RULE:**
"You MUST visually render pages BEFORE reading source during case study documentation. DO NOT document implementation before understanding experience."

### Why Different Orders for Different Phases

**Vocabulary = TECHNICAL ACCURACY**
- Source-first ensures extracted tokens match actual CSS
- Prevents hallucinating components that don't exist
- Grounds extraction in implementation reality

**Case Studies = EXPERIENTIAL UNDERSTANDING**
- Visual-first ensures documented patterns capture perceived effect
- Prevents reducing metaphors to CSS mechanics
- Grounds documentation in user experience

**The principle:**
Different reading orders create different extractions — this is BY DESIGN.

### What Happens If Order Reversed

**If vocabulary extracted visual-first:**
- Risk: "I see rhythmic spacing → extract 'rhythm component'"
- Reality: No such component exists in CSS, it's emergent from multiple spacing values
- Outcome: Hallucinated components, false abstractions

**If case studies documented source-first:**
- Risk: "I see 6-layer nesting → extract '6-layer pattern'"
- Reality: The 6 layers serve geological metaphor (bedrock → atmosphere), not a reusable structure
- Outcome: Pattern-as-template, metaphor-as-recipe

### Enforcement Mechanism

**Phase C-I through C-III (Vocabulary):**
- Agents receive source files ONLY
- Visual renderings withheld until after source analysis
- Structural separation (M1) enforces order

**Phase C-IV (Case Studies):**
- Agents receive Playwright access FIRST
- Source code revealed after visual analysis
- Sequential prompting enforces order

**Verification:**
- Check extraction reports for category types
- Source-first should produce technical categories
- Visual-first should produce perceptual categories
- If vocabulary agent uses perceptual language ("this FEELS...") → order violated

---

## 6. BINARY RULES (Enforcement)

All rules in this manifesto use MUST/DO NOT, never "might want to" or "consider."

### The Binary Rule Principle

**FROM MEMORY.md METACOGNITION FINDING:**
> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

**What this means:**
- Binary: "You MUST extract in order: vocab → mechanisms → patterns" → 100% compliance
- Judgment: "Consider extracting vocabulary before patterns" → ~0% compliance

**Why:**
- LLMs trained on instruction-following
- "MUST" triggers compliance mode
- "Consider" triggers reasoning mode (agents rationalize non-compliance)

### Rule Format Requirements

**CORRECT FORMAT:**
- "You MUST [action]"
- "DO NOT [action]"
- "Extract [item]"
- "Prohibit [item]"

**PROHIBITED FORMAT:**
- "You might want to [action]"
- "Consider [action]"
- "It would be good to [action]"
- "You may wish to [action]"

**Examples:**

✅ CORRECT:
- "You MUST extract spacing anchors BEFORE derivable values."
- "DO NOT extract patterns before vocabulary."
- "Extract callout as 1 component with 6 parameters."
- "Prohibit rounded corners (border-radius > 0)."

❌ PROHIBITED:
- "You might want to extract anchors first."
- "Consider whether patterns should be templates."
- "It would be good to document prohibitions."
- "You may wish to use visual-first order."

### Critical Phase C Rules (Binary)

**Rule 1: Extraction Sequence**
"You MUST extract in this order: Vocabulary → Mechanisms → Patterns. DO NOT read pattern files until vocabulary extraction is complete."

**Rule 2: Reading Order (Vocabulary)**
"You MUST read source code BEFORE visual rendering during vocabulary extraction."

**Rule 3: Reading Order (Case Studies)**
"You MUST visually render pages BEFORE reading source during case study documentation."

**Rule 4: Lens Adherence**
"You MUST use Identity + Enablement hybrid lens. DO NOT apply Frequency lens or Completeness lens."

**Rule 5: Component Granularity**
"Extract callout as 1 component with color parameters. DO NOT extract callout variants as separate components."

**Rule 6: Prohibition Documentation**
"You MUST document all 8 prohibitions in `/foundations/prohibitions.md`. DO NOT leave prohibitions implicit."

**Rule 7: Pattern Framing**
"You MUST use anti-prescription template for all case studies. DO NOT use prescriptive 'when to use' format."

**Rule 8: Mechanism Separation**
"You MUST separate mechanisms from metaphors in 2 files. DO NOT mix reusable techniques with pattern-specific implementations."

**Rule 9: Count Range**
"Extract between 30-40 items total. DO NOT extract fewer than 30 (under-extraction) or more than 40 (over-extraction)."

**Rule 10: Anchor Priority**
"Extract spacing anchors (6 values). Document full scale (14 values) as available. DO NOT mandate all 14 values."

### Why Judgment Language is Prohibited

**Example judgment rule:**
"Consider whether to extract 6 spacing anchors or 14 spacing values based on your assessment of derivability."

**What happens:**
- Agent A: "I assess 6 is sufficient" → extracts 6
- Agent B: "I assess 14 is better" → extracts 14
- Result: Inconsistent extraction, no convergence

**Binary equivalent:**
"Extract 6 spacing anchors. Document 14 values as available."

**What happens:**
- Agent A: Extracts 6, documents 14
- Agent B: Extracts 6, documents 14
- Result: Consistent extraction, convergence

**The lesson:**
Binary rules are not about being authoritarian. They are about RELIABLE COORDINATION across agents.

---

## OPERATIONAL STATUS

This manifesto is OPERATIONAL for Phase C extraction.

**All Phase C agents MUST:**
1. Use Identity + Enablement hybrid lens
2. Apply conflict resolution decisions (Section 2)
3. Counter invisible assumptions (Section 3)
4. Follow lens weights (Section 4)
5. Follow reading order prescription (Section 5)
6. Enforce binary rules (Section 6)

**Deviations require explicit justification.**

**Manifesto version:** 1.0
**Date finalized:** 2026-02-14
**Next review:** After Phase C-IV completion

---

**END LENS MANIFESTO**
