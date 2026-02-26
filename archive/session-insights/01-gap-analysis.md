# Gap Analysis: Session Insights vs. Existing Documentation

**Author:** gap-analyst
**Date:** 2026-02-15
**Purpose:** Cross-reference all 10 session insights against existing documentation to identify gaps, partial coverage, and untapped enrichment opportunities.

---

## METHODOLOGY

For each insight from 00-LIVING-DOCUMENT.md, I:
1. Read all target documentation files
2. Determined coverage level (NONE / PARTIAL / FULL)
3. Identified specific gaps (what's missing, where it belongs)
4. Assessed priority based on impact on builders/auditors

**Coverage Levels:**
- **NONE:** Insight not addressed anywhere in target files
- **PARTIAL:** Some aspect covered, but missing critical details or examples
- **FULL:** Insight comprehensively documented with examples

---

## I-01: Vocabulary vs Library Distinction (Concrete CSS Examples)

**Target Files:**
- design-system/compositional-core/grammar/mechanism-catalog.md ✓
- design-system/compositional-core/case-studies/README.md ✓ (NOT _INDEX.md — that file doesn't exist)
- design-system/compositional-core/CLAUDE.md ✓

**Coverage Assessment:** PARTIAL

### What EXISTS:
1. **mechanism-catalog.md** has Name Test + Transfer Test (lines 18-29) — the EXACT tests that define the boundary
2. **case-studies/README.md** has extensive "What to Extract" section (lines 176-235) showing DO/DON'T patterns with concrete CSS examples
3. **CLAUDE.md** has Jazz Real Book framing (lines 326-349) and vocabulary vs library distinction (lines 381-398)

### What's MISSING:
1. **No extraction provenance in mechanism-catalog.md.** The document says mechanisms were "extracted via Name Test + Transfer Test" but does NOT say "extracted FROM case studies during Phase C." The history is absent.
2. **No "WHY case studies exist alongside catalog" in case-studies/README.md.** The README explains HOW to use them (process, not templates) but not WHY both layers exist. The user needed multiple examples to internalize that grammar/ is TOOLS and case-studies/ is USAGE.
3. **No side-by-side CSS comparison in CLAUDE.md.** Section "Jazz Real Book Model" (lines 326-349) uses the analogy but doesn't show concrete CSS — what does mechanism-level extraction look like vs. metaphor-specific implementation?

### SPECIFIC GAPS:

**Gap 1A: mechanism-catalog.md missing extraction history**
- **Location:** Lines 1-50 (header section before "What Is a MECHANISM?")
- **Add:** "Extracted FROM: case studies during Phase C (2026-02-14). The mechanisms existed as implementations in DD-006, OD-004, CD-006. Phase C extraction applied Name Test + Transfer Test to separate transferable techniques from metaphor-specific CSS."
- **Why:** Without this, builders don't know the mechanisms are PROVEN in real pages, not theoretical abstractions.

**Gap 1B: case-studies/README.md missing dual-layer rationale**
- **Location:** After line 309 ("Why This Layer Exists")
- **Add new section:** "Why BOTH Grammar and Case Studies?"
  - Grammar (Layer 3) = transferable TOOLS (Name Test passes)
  - Case Studies (Layer 5) = USAGE proof (how tools were applied in specific metaphors)
  - WITHOUT grammar: agents copy metaphor-specific CSS, can't transfer
  - WITHOUT case studies: mechanisms are abstract, no proof of what's possible
  - The two layers together = vocabulary to USE + literature to LEARN FROM
- **Why:** This is THE architectural distinction. Every builder needs to internalize it.

**Gap 1C: CLAUDE.md missing concrete CSS example**
- **Location:** After line 349 (end of Jazz Real Book section)
- **Add subsection:** "Concrete Example: Border-Weight Gradient"
  - **Mechanism (grammar/):** "Border widths encode hierarchy: 4px/3px/1px gradient"
  - **Implementation (OD-004):** `border-left: 4px` for established knowledge, `3px` for probable, `1px` for open questions
  - **Implementation (CD-006):** `border-left: 4px` for structural headers, `3px` for subsections, `1px` for separators
  - **Same mechanism, different semantics.** The 4px/3px/1px gradient IS the mechanism. WHAT those widths mean is metaphor-specific.
- **Why:** One concrete CSS example is worth 1000 words of abstract explanation.

### PRIORITY: **HIGH**
This affects every builder's understanding of what to use and when. Gap 1C (concrete example) is the highest-leverage single addition.

---

## I-02: 4-Type Rigidity Taxonomy (Concrete Good/Bad Examples)

**Target Files:**
- ephemeral/doc-enrichment/02-tier-methodology.md ✓
- design-system/compositional-core/CLAUDE.md ✓

**Coverage Assessment:** PARTIAL

### What EXISTS:
1. **02-tier-methodology.md** has the 4-type taxonomy mentioned (line 296: "4-type constraint taxonomy") but NO EXAMPLES per type
2. **CLAUDE.md** does NOT mention the 4-type taxonomy at all — this is a research finding not yet integrated into operational docs

### What's MISSING:
1. **No concrete good/bad examples per type** anywhere in either file
2. **No diagnostic questions per type** — the user asked how to EVALUATE whether a specification-type constraint is good or bad
3. **No integration into CLAUDE.md** — the taxonomy exists only in tier-methodology.md (which is ephemeral research, not operational)

### SPECIFIC GAPS:

**Gap 2A: 02-tier-methodology.md missing examples section**
- **Location:** After line 299 (after "4-type constraint taxonomy")
- **Add new section:** "The 4-Type Taxonomy with Good/Bad Examples"

  **Type 1: Identity Rigidity (Almost Always Good)**
  - **Example:** `border-radius: 0` — defines WHO we are
  - **When bad:** Only if identity contradicts audience (e.g., medical device UI needing rounded for accessibility)
  - **Diagnostic:** "Does this define WHO we are, not just HOW we work?"

  **Type 2: Procedural Rigidity (Almost Always Good)**
  - **Example:** "Read prohibitions.md before work" — prevents known failure mode
  - **When bad:** Only if sequence blocks useful verification (e.g., preventing early prototyping)
  - **Diagnostic:** "Has skipping this step EVER caused failure?"

  **Type 3: Specification Rigidity (WHERE BAD RIGIDITY LIVES)**
  - **Good example:** "Container width 940-960px" — prevents known failure (4/5 Phase D pages violated this)
  - **Bad example:** "Sample 2-4 mechanisms" — prevents correct decisions (caps technique density)
  - **Diagnostic:** "Has violating this ever produced a REAL failure, or just aesthetic preference?"

  **Type 4: Ambient Rigidity (Bad in Aggregate, Not Per-Item)**
  - **Example:** ~168 constraints simultaneously = cognitive overload
  - **Each individual constraint may be valid, but VOLUME creates random constraint-dropping**
  - **Diagnostic:** "Can a builder hold ALL active constraints simultaneously in working memory?"

- **Why:** Without examples, the taxonomy is abstract. With examples, builders can self-evaluate constraints.

**Gap 2B: CLAUDE.md missing rigidity quick-reference**
- **Location:** After line 407 (end of "Minimum Metacognitive Overhead")
- **Add new section:** "Rigidity Quick-Reference: The 4-Type Model"
  - Brief (20-30 line) summary of the taxonomy with 1 example per type
  - Point to tier-methodology.md for full details
  - Position as "when evaluating new constraints" reference
- **Why:** CLAUDE.md is auto-loaded. Builders need quick access to the framework.

### PRIORITY: **HIGH**
This affects how ALL modifications are evaluated. Without the diagnostic questions, builders can't distinguish good specification rigidity (940px) from bad (sample 2-4).

---

## I-03: Semantic vs Arbitrary Value Assignment Test

**Target Files:**
- ~/.claude/skills/tension-composition/SKILL.md (NOT in design-system/)
- ~/.claude/skills/perceptual-auditing/SKILL.md (NOT in design-system/)
- design-system/compositional-core/guidelines/semantic-rules.md ✓

**Coverage Assessment:** NONE

### What EXISTS:
1. **semantic-rules.md** covers 5 semantic gaps (Info vs Note, inline vs block code, table styling, breathing-room, callout types) — all about COMPONENT SELECTION, not VALUE JUSTIFICATION
2. **Skills are external to design-system/** — I cannot read them from this directory
3. **NOWHERE in compositional-core/** is the semantic value test documented

### What's MISSING:
1. **The entire semantic vs arbitrary value test** is absent from all documentation
2. **Per-tier semantic source** (Floor: none, Middle: pattern logic, Ceiling: metaphor logic) is undocumented
3. **The diagnostic question** ("Why this value and not adjacent values on the token scale?") appears nowhere

### SPECIFIC GAPS:

**Gap 3A: semantic-rules.md missing value justification framework**
- **Location:** After line 278 (end of current content)
- **Add new section:** "Gap 6: Semantic vs. Arbitrary Value Assignment"

  **The Test:** For any varying CSS value, ask:
  > "Why this value and not the adjacent values on the token scale?"

  **If answer references:**
  - **CONTENT STRUCTURE or METAPHOR LOGIC** → semantic
  - **TOKEN SCALE or VISUAL AESTHETICS** → arbitrary

  **Per-Tier Semantic Source:**
  - **Floor:** No semantic reasoning expected (direct token lookup: "use --space-8")
  - **Middle:** Pattern logic ("CRESCENDO peaks here, so padding tightens to --space-4")
  - **Ceiling:** Metaphor logic ("speculative knowledge compresses under established weight, so --space-4 vs --space-10")
  - **Flagship:** Multi-layered metaphor logic (same as Ceiling with multiple dimensions)

  **Examples:**
  - **Floor:** `.section { padding: var(--space-8); }` — lookup-based, no justification needed
  - **Middle:** `.crescendo-peak { padding: var(--space-4); }` — pattern-based ("peak = tight")
  - **Ceiling:** `.stratum-speculative { padding: var(--space-4); }` — metaphor-based ("speculative = compressed")

  **Validation:** In audit, ask builder: "Why --space-4 here and not --space-6 or --space-8?" If no structural answer, value is arbitrary.

- **Why:** This is a CRITICAL audit question with no current answer. Builders don't know when they're making semantic decisions vs. aesthetic guesses.

**Gap 3B: Skills enrichment required (external to this analysis)**
- **tension-composition/SKILL.md** needs semantic justification requirement at Phase 4 (when applying mechanisms)
- **perceptual-auditing/SKILL.md** needs semantic value audit question (PA-XX: "Are varying padding values semantically justified?")
- **Note:** I cannot modify skills from this analysis (out of scope), but documenting the need.

### PRIORITY: **HIGH**
This directly affects build quality and audit accuracy. Without this test, builders assign padding/margin values arbitrarily, and auditors can't catch it.

---

## I-04: Tier Distinction = Individual → Combination → Multi-Pattern

**Target Files:**
- ephemeral/doc-enrichment/02-tier-methodology.md ✓
- ~/.claude/skills/tension-composition/SKILL.md (external)
- design-system/compositional-core/grammar/mechanism-catalog.md ✓

**Coverage Assessment:** PARTIAL

### What EXISTS:
1. **02-tier-methodology.md** defines the 4 tiers with mechanism counts (Floor 5, Middle 8-10, Ceiling 12-15, Flagship 16-18) and build times, BUT does NOT frame the distinction as individual → combination → multi-pattern
2. **mechanism-catalog.md** has "Combination Rules" section (lines 706-718) showing compatible combinations (Border-Weight + Zone Background) BUT does NOT say "this is the CEILING-tier distinction"

### What's MISSING:
1. **The framing itself** — tiers differ by LEVEL OF ANALYSIS, not just count
2. **Tier-specific mechanism deployment instructions** — what does "individual" mean concretely vs. "combination"?
3. **Mechanism combinations section** in catalog showing which mechanisms naturally reinforce each other

### SPECIFIC GAPS:

**Gap 4A: 02-tier-methodology.md missing individual → combination → multi-pattern framing**
- **Location:** After line 144 (end of Tier 4 Flagship profile, before "HOW WE MIGHT BUILD EACH TIER")
- **Add new section:** "What Makes Tiers Different: Individual → Combination → Multi-Pattern"

  **The Core Distinction (Level of Mechanism Analysis):**
  - **Floor (5 mechanisms):** Individual deployment. Each mechanism serves content independently. Border-weight for hierarchy. 2-zone DNA for callouts. Code block for code. No interaction between mechanisms.
  - **Middle (8-10 mechanisms):** Individual deployment at scale. More mechanisms = more vocabulary, but each still operates independently. Grid for layout. Zones for sections. Rhythm for pacing. Additive, not combinatorial.
  - **Ceiling (12-15 mechanisms):** Mechanism COMBINATION deployment. Multiple mechanisms encode the SAME semantic dimension. Example: borders thin AND padding tightens AND line-height compresses as confidence decreases (3 mechanisms, 1 dimension). The mechanisms REINFORCE each other.
  - **Flagship (16-18 mechanisms):** Multi-pattern COMPOSITION. CRESCENDO in Part 1, BENTO in Part 2, PULSE in Part 3. Each pattern section has its own mechanism combinations. Typed transitions between patterns.

  **Implications for Building:**
  - **Middle:** "Deploy 8-10 mechanisms. Each should serve a content need independently. Grid for comparisons. Zones for sections. Rhythm for pacing."
  - **Ceiling:** "Identify at least 2 mechanism COMBINATIONS where multiple mechanisms encode the same semantic dimension. Document the shared dimension. Example: confidence = border + padding + line-height."
  - **Flagship:** "Deploy 3-5 density patterns with typed transitions. Each pattern section has its own mechanism combinations."

- **Why:** This is THE structural gap. Without this framing, Middle and Ceiling feel like "use more stuff" rather than "analyze differently."

**Gap 4B: mechanism-catalog.md missing mechanism combinations section**
- **Location:** After line 718 (end of "Combination Rules")
- **Expand section:** "Mechanism Combinations (Ceiling-Tier Analysis)"

  **Which Mechanisms Naturally Reinforce Each Other:**

  **Combination 1: Hierarchy Encoding**
  - Border-Weight Gradient (4px/3px/1px)
  - Typographic Scale Jumping (~1.5x ratio)
  - Spacing Compression (more padding = more important)
  - **Shared dimension:** Hierarchical importance. All three encode the same semantic axis.
  - **Example (OD-004):** Established knowledge = 4px border + 2.5rem heading + 40px padding. Speculative = 1px border + 1rem heading + 16px padding.

  **Combination 2: Density Rhythm**
  - Dense/Sparse Alternation (section-level)
  - Zone Background Differentiation (cream/white/breathing)
  - Progressive Disclosure (padding compression across arc)
  - **Shared dimension:** Information density. All three create pacing.
  - **Example (DD-002 CRESCENDO):** Sparse intro (80px, cream) → dense peak (16px, white) → breathing resolution (48px, tan).

  **Combination 3: Semantic Differentiation**
  - 2-Zone Component DNA (label + body)
  - Confidence Encoding via Color (blue/green/red/amber/purple)
  - Border-Left Semantic Signal (4px universal callout marker)
  - **Shared dimension:** Content type. All three signal "this is a callout of type X."
  - **Example (all explorations):** Callout structure + accent color + 4px border.

  **When to Use Combinations (Tier Calibration):**
  - **Floor/Middle:** Use mechanisms individually. No need for multi-channel encoding.
  - **Ceiling:** Identify 2-3 combinations where mechanisms reinforce the same dimension.
  - **Flagship:** Use 4-5 combinations across multiple pattern sections.

- **Why:** Shows builders WHICH mechanisms work together and WHY — enables Ceiling-tier thinking.

**Gap 4C: Skills enrichment (external, noted for completeness)**
- **tension-composition/SKILL.md** needs tier-specific instructions at Phase 4
- Middle: "Deploy mechanisms independently"
- Ceiling: "Identify 2+ combinations"
- Flagship: "3-5 patterns with combinations per pattern"

### PRIORITY: **HIGHEST**
This is the foundational tier distinction. Without it, all tiers collapse to "use more mechanisms."

---

## I-05: Mechanism Catalog Carries Showcase DNA (Family Resemblance)

**Target Files:**
- design-system/compositional-core/grammar/mechanism-catalog.md ✓
- ephemeral/doc-enrichment/02-tier-methodology.md ✓
- design-system/compositional-core/CLAUDE.md ✓

**Coverage Assessment:** PARTIAL

### What EXISTS:
1. **mechanism-catalog.md** documents extraction method (lines 32-49: "Source-first reading order") and validation (lines 722-757: cross-validated against Strategy Library and Fresh Extraction) BUT does NOT acknowledge showcase DNA
2. **02-tier-methodology.md** has vocabulary-vs-library section (lines 320-398) mentioning that mechanisms were EXTRACTED from showcases BUT does NOT address the family resemblance question
3. **CLAUDE.md** has Template Immunity section (lines 307-325) saying case studies are NOT templates BUT does NOT address "what if mechanism usage at high density creates convergence?"

### What's MISSING:
1. **Acknowledgment in mechanism-catalog.md** that mechanisms CAME FROM showcases and therefore carry their structural DNA
2. **Expected convergence vs problematic convergence** guidance — when is similarity GOOD (shared vocabulary) vs. BAD (template copying)?
3. **The vocabulary-vs-library nuance** in tier-methodology — this is THE central open question for Middle-tier

### SPECIFIC GAPS:

**Gap 5A: mechanism-catalog.md missing provenance note**
- **Location:** After line 49 (end of "Extraction Method")
- **Add subsection:** "Provenance and Family Resemblance"

  **Where These Mechanisms Come From:**
  Mechanisms were extracted FROM showcase pages (DD-006, OD-004, CD-006) during Phase C (2026-02-14). They existed as IMPLEMENTATIONS first (e.g., border-weight gradient in OD-004 with geological metaphor). Extraction applied Name Test + Transfer Test to separate transferable techniques from metaphor-specific CSS.

  **Family Resemblance Is Expected:**
  A page deploying 8-10 mechanisms will have STRUCTURAL SIMILARITY to showcases because mechanisms ARE the showcase structural patterns. This is identity (shared vocabulary), not template convergence (copied values).

  **The Distinction:**
  - **Family resemblance (GOOD):** Same mechanisms (dark header, zone backgrounds, 2-zone DNA), different values (your padding, your colors, your metaphor-specific tokens)
  - **Template convergence (BAD):** Same CSS values (80px padding because DD-006 used 80px), same section count (6 strata because OD-004 had 6)

  **Validation Test:**
  - If two pages use border-weight gradient but encode DIFFERENT semantics (one: importance, other: confidence), that's vocabulary usage ✓
  - If two pages have 6 sections with geological class names, that's template copying ✗

- **Why:** Without this, builders worry that using mechanisms = copying showcases. With this, they understand the expected vs. problematic similarity.

**Gap 5B: 02-tier-methodology.md strengthen vocabulary-vs-library section**
- **Location:** Lines 399-413 (after "The Untested Practical Dimension")
- **Expand paragraph:** Add explicit acknowledgment of the open question

  [EXISTING CONTENT through line 413]

  **The Middle-Tier Experiment Tests This:**
  Building a Middle-tier page with 8-10 mechanisms and NO metaphor will reveal:
  - (a) If grammar fluency produces NOVEL output (mechanisms transfer, feel fresh)
  - (b) If mechanism density creates DERIVATIVE output (looks like showcases despite different content)

  Evidence suggesting (a): Name Test proves mechanisms produce different CSS with different metaphors.
  Evidence suggesting (b): Variant B scored 4/5 novelty precisely because it used ONLY 5/44 techniques.

  **Hypothesis:** At 8-10 mechanisms (Middle), family resemblance is visible but acceptable. At 15+ (Ceiling/Flagship), anti-gravity R1/R5/R6 must protect mechanism COMBINATION divergence, not just metaphor divergence.

  **THIS IS THE CENTRAL OPEN QUESTION.** Everything downstream depends on whether Middle-tier achieves novelty or convergence.

- **Why:** Makes the open question EXPLICIT and stakes everything on the Middle-tier experiment.

**Gap 5C: CLAUDE.md missing convergence guidance**
- **Location:** After line 325 (end of Template Immunity section)
- **Add new subsection:** "Expected Convergence vs. Problematic Convergence"

  **Family resemblance is INTENDED:**
  The design system has an identity. Pages using the same vocabulary (mechanisms) will look related. This is GOOD — it's brand cohesion, not template copying.

  **Expected similarity:**
  - Dark header with 3px red border (all pages)
  - 2-zone callout DNA (label + body)
  - Zone backgrounds (cream/white/breathing)
  - Border-weight for hierarchy

  **These are VOCABULARY. Using them is correct.**

  **Problematic similarity:**
  - Same metaphor as a case study (geological → geological)
  - Same CSS values (80px padding because showcase used 80px)
  - Same section count (6 parts because showcase had 6)
  - Same class names (.stratum, .bedrock)

  **These are TEMPLATE COPYING. Divergence check required.**

  **The Boundary Question:**
  At what mechanism density does family resemblance become perceived template convergence? This is THE open question the Middle-tier experiment tests.

- **Why:** Builders need to know when similarity is acceptable vs. when it triggers divergence checks.

### PRIORITY: **HIGH**
This affects how builders and auditors interpret structural similarity — and it's the central untested hypothesis.

---

## I-06: Lookup Ideology Came From Richness Research

**Target Files:**
- ephemeral/doc-enrichment/02-tier-methodology.md ✓
- ephemeral/doc-enrichment/05-richness-journey.md ✓

**Coverage Assessment:** FULL (but could be strengthened)

### What EXISTS:
1. **02-tier-methodology.md** section "Vocabulary vs. Prohibition" (lines 320-398) explains the ideology explicitly
2. **05-richness-journey.md** section "The Richness Gap" (lines 10-32) documents the finding that gap is technique SATURATION, not absence

### What's MISSING:
1. **The nuance** that lookup-based decisions solve STRUCTURE (spatial organization) while creative derivation solves IDENTITY (what is this about)
2. **The distinction** between Variant B's strategy (creative metaphor) and Middle tier's strategy (structural competence)

### SPECIFIC GAPS:

**Gap 6A: 02-tier-methodology.md add ideology section**
- **Location:** After line 577 (end of document, before "END TIER METHODOLOGY")
- **Add new section:** "Ideology Behind Lookup-Based Middle Tier"

  **Why Middle Tier Uses Lookup, Not Creativity:**

  **The Richness Finding:**
  Richness gap = technique SATURATION (quantity of mechanism deployment), not technique ABSENCE or creative freedom. Showcase pages achieved richness through ACCUMULATED VOCABULARY (44 technique families), not through unconstrained creativity.

  **The Implication:**
  Deploying more vocabulary (lookup: "use CRESCENDO pattern") closes the gap without requiring creative derivation (metaphor collapse).

  **But This Creates a Tension with Variant B:**
  - **Variant B** solved IDENTITY through creative derivation (novel lab metaphor)
  - **Middle tier** solves STRUCTURE through vocabulary deployment (CRESCENDO, grid, zones)

  **These are DIFFERENT strategies for DIFFERENT purposes:**
  - **Variant B** (Ceiling-tier): "What is this content about?" → creative metaphor
  - **Middle tier**: "How is this content spatially organized?" → pattern selection

  **Middle tier is NOT "Variant B without creativity."** It's a different compositional mode: structural richness without metaphor penetration.

  **The Open Question:**
  Does structural richness (Middle) achieve the "place" feeling, or is metaphor penetration (Ceiling) necessary? The Middle-tier experiment resolves this.

- **Why:** Without this, Middle tier sounds like "dumbed-down Ceiling" rather than "different compositional strategy."

**Gap 6B: 05-richness-journey.md add identity-vs-structure distinction**
- **Location:** After line 85 ("The Evolution of Understanding")
- **Add to the 4-question progression:**

  5. **Identity vs structure:** "Are lookup decisions sufficient for spatial richness?" -- Answer: lookup solves STRUCTURE (CRESCENDO pattern), creativity solves IDENTITY (what this content is about)

- **Why:** Completes the progression of understanding.

### PRIORITY: **MEDIUM**
Clarifies rationale but doesn't change what gets built. Valuable for understanding why Middle tier exists.

---

## I-07: Tier Combinations as Controlled Experiment Design

**Target Files:**
- ephemeral/doc-enrichment/02-tier-methodology.md ✓
- design-system/pipeline/05-COMPLETE-ROADMAP.md (external to compositional-core)

**Coverage Assessment:** PARTIAL

### What EXISTS:
1. **02-tier-methodology.md** defines the 4 tiers with profiles, but does NOT frame them as controlled experiments
2. **05-COMPLETE-ROADMAP.md** (external) — cannot assess without reading

### What's MISSING:
1. **Experimental design logic** — tiers as isolated variable tests
2. **The table** showing tier → variables → what it tests
3. **The observation** that Variant B = missing combination (metaphor + few mechanisms)

### SPECIFIC GAPS:

**Gap 7A: 02-tier-methodology.md add experimental design section**
- **Location:** After line 144 (end of Tier 4 profile, before "HOW WE MIGHT BUILD EACH TIER")
- **Add new section:** "Experimental Design Logic: Tiers as Controlled Variable Tests"

  **Why Four Tiers? Controlled Variables:**

  Each tier adds ONE major variable, allowing isolation of mechanism effects:

  | Tier | Variables | Tests |
  |------|-----------|-------|
  | **Floor** (5 mechanisms, no metaphor) | Control baseline | Token compliance + component assembly |
  | **Middle** (+mechanisms, no metaphor) | +vocabulary density | Isolates MECHANISM EFFECT (spatial richness without metaphor) |
  | **Ceiling** (+metaphor) | +creative derivation | Isolates METAPHOR EFFECT (does metaphor-driven CSS add value?) |
  | **Flagship** (+iteration) | +audit cycles | Isolates ITERATION EFFECT (does multi-pass refinement justify cost?) |

  **Why Middle MUST NOT Have Metaphor:**
  If Middle has metaphor, we lose the ability to isolate the mechanism variable. We can't tell if richness comes from mechanisms OR metaphor.

  **The Missing Combination:**
  "Metaphor + few mechanisms" = Variant B (already exists). Variant B proved metaphor alone doesn't create structural richness (5/44 techniques, 11.4%). Therefore:
  - Floor tests: token compliance
  - Middle tests: vocabulary density
  - Ceiling tests: metaphor penetration
  - Flagship tests: iterative refinement
  - Variant B (already tested): creative identity with low density

  **The Hypothesis Structure:**
  - Floor → Middle: Does vocabulary density create spatial richness?
  - Middle → Ceiling: Does metaphor add enough value to justify creative cost?
  - Ceiling → Flagship: Does iteration justify 2x build time?

- **Why:** Reframes tiers as experiments, not quality levels. Makes the research design explicit.

**Gap 7B: 05-COMPLETE-ROADMAP.md (external, noted for completeness)**
- Needs Phase E framing as controlled variable isolation experiments
- Cannot assess without reading the file

### PRIORITY: **MEDIUM**
Clarifies rationale for tier design. Helps researchers understand the experimental structure.

---

## I-08: Technique vs Mechanism Terminology Clarification

**Target Files:**
- design-system/compositional-core/grammar/mechanism-catalog.md ✓
- ephemeral/doc-enrichment/02-tier-methodology.md ✓

**Coverage Assessment:** PARTIAL

### What EXISTS:
1. **mechanism-catalog.md** uses "mechanism" consistently (18 mechanisms) BUT does NOT define "technique"
2. **02-tier-methodology.md** uses BOTH terms interchangeably without distinguishing them

### What's MISSING:
1. **Explicit terminology note** defining mechanism vs. technique
2. **Usage guidance** — when to use which term
3. **The relationship** — 44 technique families ≈ 18 mechanisms + implementation variants

### SPECIFIC GAPS:

**Gap 8A: mechanism-catalog.md add terminology note**
- **Location:** After line 29 (end of "What Is a MECHANISM?")
- **Add new subsection:** "Terminology: Mechanism vs. Technique"

  **Mechanism:**
  One of 18 transferable CSS PATTERNS (conceptual units) documented in this catalog. Example: "Border-Weight Gradient" is one mechanism.

  **Technique:**
  Any distinct CSS APPROACH (granular measurement). One mechanism may involve multiple techniques. Example: Border-Weight Gradient mechanism includes 4 techniques (4px/3px/2px/1px implementations).

  **The "44 technique families" count:**
  More granular than "18 mechanisms." Counts implementation variants. Example:
  - Mechanism: 2-Zone Component DNA (1 mechanism)
  - Techniques: callout, data table, code block, header (4 techniques using the same 2-zone structure)

  **For practical purposes:** Technique saturation ≈ mechanism deployment density. A page deploying 12 mechanisms uses approximately 20-30 techniques.

  **Usage in this catalog:** We say "mechanisms" (conceptual level). Research says "techniques" (implementation level). Both refer to the same CSS patterns at different granularities.

- **Why:** Eliminates confusion when research documents say "44 techniques" but catalog says "18 mechanisms."

**Gap 8B: 02-tier-methodology.md clarify usage throughout**
- **Location:** Global find-replace NOT recommended (would be invasive)
- **Better approach:** Add footnote at first usage (around line 22 where "technique saturation" appears)

  **Footnote:** "Note: This document uses 'technique' and 'mechanism' interchangeably. Technically: 18 mechanisms (conceptual patterns) = ~44 technique families (implementation variants). For tier calibration, 'deploy 8-10 mechanisms' means 'use 8-10 conceptual patterns' which produces ~15-25 technique instances."

- **Why:** Clarifies without requiring document-wide changes.

### PRIORITY: **LOW**
Terminological, not architectural. Helpful for precision but doesn't change building behavior.

---

## I-09: Middle-Tier Validation Framework (5 Concrete Tests)

**Target Files:**
- ephemeral/session-insights/validation-framework.md (NEW — doesn't exist yet)
- ~/.claude/skills/perceptual-auditing/SKILL.md (external)
- ephemeral/doc-enrichment/02-tier-methodology.md ✓

**Coverage Assessment:** NONE

### What EXISTS:
1. **02-tier-methodology.md** section "Middle Experiment: THE MOST IMPORTANT TEST" (lines 242-253) describes WHAT to measure BUT does NOT provide the 5 concrete tests
2. **validation-framework.md** does NOT exist — this is a proposed NEW document

### What's MISSING:
1. **The entire 5-test validation framework** from the session
2. **Synthesis framework** (4-5 grammar signals = proceed, 4-5 derivative signals = revise)
3. **Concrete operationalization** of the grammar-vs-derivative question

### SPECIFIC GAPS:

**Gap 9A: Create NEW validation-framework.md**
- **Location:** /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/validation-framework.md
- **Content:** Full 5-test protocol as discussed in session

  **Structure:**
  1. **Introduction:** Why this framework exists (grammar vs. derivative is THE central question)
  2. **Test 1: Blur Test** (structural fingerprint comparison)
  3. **Test 2: Fresh-Eyes Agent Test** (zero-context evaluation)
  4. **Test 3: Mechanism Expression Audit** (per-mechanism CSS comparison)
  5. **Test 4: Side-by-Side Perception Test** (Middle vs Variant B, Middle vs OD-004)
  6. **Test 5: Structural Similarity Score** (8-point quantitative comparison)
  7. **Synthesis Framework:** 4-5 grammar signals = proceed, mixed = build second page, 4-5 derivative signals = revise
  8. **Application:** When to run this (after EVERY Middle-tier build initially)

- **Why:** This is THE validation framework for the most important experiment. Needs dedicated document.

**Gap 9B: 02-tier-methodology.md add validation test plan reference**
- **Location:** After line 253 (end of "Middle Experiment" section)
- **Add paragraph:**

  **Validation Protocol:**
  Run the 5-test grammar-vs-derivative framework (see ephemeral/session-insights/validation-framework.md):
  1. Blur Test (structural fingerprint)
  2. Fresh-Eyes Agent Test (zero-context evaluation)
  3. Mechanism Expression Audit (per-mechanism CSS comparison)
  4. Side-by-Side Perception Test (Middle vs showcase)
  5. Structural Similarity Score (8-point quantitative)

  **Synthesis:** 4-5 grammar signals = proceed to Ceiling experiment. Mixed = build second Middle page on different content. 4-5 derivative signals = revise approach.

- **Why:** Points builders to the validation framework document.

**Gap 9C: Skills enrichment (external, noted)**
- **perceptual-auditing/SKILL.md** needs grammar-vs-derivative audit mode
- Separate from general perceptual audit
- Specifically for Middle-tier validation

### PRIORITY: **HIGH**
Directly needed before building the Middle-tier experiment. Blocking P0 priority.

---

## I-10: Case Studies as "Novels" — Three Functions

**Target Files:**
- design-system/compositional-core/case-studies/README.md ✓ (actual file, NOT _INDEX.md)
- design-system/compositional-core/CLAUDE.md ✓

**Coverage Assessment:** PARTIAL

### What EXISTS:
1. **case-studies/README.md** section "How to Use This Directory" (lines 101-174) covers the Jazz Real Book analogy and extraction process BUT does NOT enumerate the three functions
2. **CLAUDE.md** section "Jazz Real Book Model" (lines 326-349) covers fluency vs recipe-following BUT does NOT mention the three functions

### What's MISSING:
1. **Explicit enumeration** of the three functions: comprehension aid, verification reference, vocabulary expansion
2. **Tier-gating** — the third function (vocabulary expansion via combinations) only relevant at Ceiling+
3. **"How to Use Case Studies" section** with tier-specific guidance

### SPECIFIC GAPS:

**Gap 10A: case-studies/README.md add three functions section**
- **Location:** After line 100 (before "How to Use This Directory")
- **Add new section:** "Three Functions of Case Studies (Tier-Gated)"

  **Function 1: Comprehension Aid (ALL Tiers)**
  See principles in action. What does "spacing compression" LOOK LIKE in actual CSS?
  - **Who:** Any builder learning mechanisms
  - **When:** After reading mechanism-catalog.md, before applying to own content
  - **Example:** "Border-weight gradient encodes hierarchy" is abstract. OD-004 shows `4px` for established, `1px` for speculative.

  **Function 2: Verification Reference (Phase 5+ — Ceiling/Flagship)**
  Compare your implementation against showcase implementations. "Is my border-weight usage as principled as OD-004's?"
  - **Who:** Ceiling+ builders post-implementation
  - **When:** Phase 5 (after building, before final audit)
  - **Example:** "I used 4px/2px/1px. OD-004 used 4px/3px/2px/1px. Is my 3-value gradient semantically sufficient, or should I add the missing tier?"

  **Function 3: Vocabulary Expansion via Combinations (Ceiling+ ONLY)**
  Discover which mechanisms COMBINE to encode the same dimension. Not available at Floor/Middle (they use mechanisms individually).
  - **Who:** Ceiling+ builders during planning
  - **When:** Phase 4 (mechanism extraction)
  - **Example:** OD-004 shows border-weight + spacing compression + zone backgrounds ALL encode confidence. Three mechanisms, one dimension. This is a COMBINATION (Ceiling-tier thinking).

  **Tier Calibration:**
  - **Floor:** Function 1 only (learn what mechanisms look like)
  - **Middle:** Function 1 only (still using mechanisms individually)
  - **Ceiling:** Functions 1, 2, and 3 (combinations matter now)
  - **Flagship:** Functions 1, 2, and 3 (all three active)

- **Why:** Makes the three functions explicit and shows when each applies.

**Gap 10B: CLAUDE.md add case study usage guidance**
- **Location:** After line 349 (end of Jazz Real Book Model)
- **Add new subsection:** "How to Use Case Studies: Three Functions by Tier"

  [Brief version of the three functions]

  **Floor/Middle:** Use case studies as COMPREHENSION AIDS. Learn what mechanisms look like in real CSS. Extract the PATTERN (2-zone DNA), not the VALUES (specific padding amounts).

  **Ceiling/Flagship:** Add VERIFICATION and COMBINATION discovery. Compare your implementation to showcase quality. Identify mechanism combinations that encode the same dimension.

  **Never:** Treat case studies as TEMPLATES. If you're copying CSS values (80px because DD-006 used 80px), you're pattern-matching, not composing.

- **Why:** Quick reference for tier-appropriate case study usage.

### PRIORITY: **MEDIUM**
Affects case study ingestion but doesn't change architecture. Valuable for tier-appropriate usage.

---

## CROSS-CUTTING FINDINGS

### Documentation Structure Issues

**Missing Index File:**
- 00-LIVING-DOCUMENT.md references `case-studies/_INDEX.md` (lines 29, 156) but this file does NOT exist
- Workaround: case-studies/README.md serves some _INDEX functions (lines 261-284: "Index of Case Studies")
- **Recommendation:** Either create _INDEX.md OR update living document to reference README.md instead

**Skills Are External:**
- Two insights (I-03, I-09) target skills (tension-composition, perceptual-auditing)
- Skills live in `~/.claude/skills/`, NOT in design-system/
- **Recommendation:** Document skill enrichments separately, then reference them from design-system/ docs

**Ephemeral vs. Operational Split:**
- 02-tier-methodology.md and 05-richness-journey.md live in `ephemeral/doc-enrichment/`
- These are HIGH-VALUE documents that should potentially move to `design-system/compositional-core/process/` or similar
- **Recommendation:** Decide which ephemeral docs should become permanent references

### Gaps by Severity

**CRITICAL (Blocking — Must Address Before Middle-Tier Build):**
- I-09: Validation framework (5 tests) — needs NEW document
- I-04: Individual → combination → multi-pattern framing — foundational tier distinction
- I-01: Vocabulary vs library concrete examples — affects every builder

**HIGH (Important — Address in Next 1-3 Builds):**
- I-02: 4-type rigidity with good/bad examples — affects constraint evaluation
- I-03: Semantic value test — affects build quality
- I-05: Family resemblance acknowledgment — central open question

**MEDIUM (Valuable — Clarifies Rationale):**
- I-06: Lookup ideology documentation — explains Middle-tier strategy
- I-07: Experimental design logic — frames tiers as experiments
- I-10: Case study three functions — tier-appropriate usage

**LOW (Terminological — Helpful But Not Blocking):**
- I-08: Mechanism vs technique clarification — precision, not architecture

### Documentation Coverage Summary

| Insight | Coverage | Critical Gap | Est. Lines to Add |
|---------|----------|--------------|-------------------|
| I-01 | PARTIAL | Concrete CSS example in CLAUDE.md | 50-80 |
| I-02 | PARTIAL | Good/bad examples per type | 80-120 |
| I-03 | NONE | Entire semantic value framework | 60-100 |
| I-04 | PARTIAL | Individual → combination framing | 100-150 |
| I-05 | PARTIAL | Provenance + convergence guidance | 80-120 |
| I-06 | FULL | Minor: identity vs structure note | 20-40 |
| I-07 | PARTIAL | Experimental design table | 50-80 |
| I-08 | PARTIAL | Terminology note | 20-40 |
| I-09 | NONE | Entire 5-test validation framework | 200-300 (NEW DOC) |
| I-10 | PARTIAL | Three functions enumeration | 60-100 |

**Total Estimated Additions:** ~720-1,130 lines across 7 files (6 existing + 1 new)

---

## PRIORITY-ORDERED ENRICHMENT ROADMAP

### Phase 1: BLOCKING (Before Middle-Tier Build)

1. **Create validation-framework.md** (I-09) — NEW document, 200-300 lines
   - Location: ephemeral/session-insights/validation-framework.md
   - Content: Full 5-test protocol + synthesis framework

2. **Add individual → combination → multi-pattern framing** (I-04)
   - Location: 02-tier-methodology.md after line 144
   - Content: Core distinction + tier-specific instructions (~100-150 lines)

3. **Add mechanism combinations section** (I-04 continuation)
   - Location: mechanism-catalog.md after line 718
   - Content: Which mechanisms reinforce each other + examples (~80-120 lines)

4. **Add concrete CSS example to CLAUDE.md** (I-01)
   - Location: CLAUDE.md after line 349
   - Content: Border-weight gradient mechanism vs implementations (~50-80 lines)

### Phase 2: HIGH PRIORITY (Next 1-3 Builds)

5. **Add 4-type rigidity with good/bad examples** (I-02)
   - Location: 02-tier-methodology.md after line 299 + CLAUDE.md quick-reference
   - Content: Type-by-type examples + diagnostic questions (~100-150 lines total)

6. **Add semantic value framework** (I-03)
   - Location: semantic-rules.md after line 278
   - Content: The Test + per-tier semantic source + examples (~60-100 lines)

7. **Add provenance and convergence guidance** (I-05)
   - Location: mechanism-catalog.md (provenance) + 02-tier-methodology.md (convergence) + CLAUDE.md (guidance)
   - Content: Acknowledge showcase DNA + expected vs problematic similarity (~180-240 lines total)

### Phase 3: MEDIUM PRIORITY (After 10+ Builds)

8. **Add lookup ideology section** (I-06)
   - Location: 02-tier-methodology.md end + 05-richness-journey.md addition
   - Content: Why Middle uses lookup + identity vs structure distinction (~60-100 lines total)

9. **Add experimental design logic** (I-07)
   - Location: 02-tier-methodology.md after line 144
   - Content: Tier as controlled variable table + hypothesis structure (~50-80 lines)

10. **Add case study three functions** (I-10)
    - Location: case-studies/README.md before line 101 + CLAUDE.md quick-reference
    - Content: Enumerate functions + tier-gating (~80-120 lines total)

### Phase 4: LOW PRIORITY (When Refining)

11. **Add terminology clarification** (I-08)
    - Location: mechanism-catalog.md after line 29 + 02-tier-methodology.md footnote
    - Content: Mechanism vs technique definition (~40-60 lines total)

---

## RECOMMENDATIONS

### Immediate Actions (This Session)

1. **Create validation-framework.md** — highest priority, blocks Middle-tier experiment
2. **Fix _INDEX.md reference** — either create the file or update living document to point to README.md
3. **Add I-01 concrete example** — highest ROI single addition (50 lines, massive clarity gain)

### Session 2 Actions

4. **Complete I-04 enrichments** — foundational tier distinction, affects all future building
5. **Add I-02 rigidity examples** — affects how modifications are evaluated
6. **Add I-03 semantic value test** — affects build quality immediately

### Long-Term Actions

7. **Decide ephemeral-to-permanent migration** — which docs in ephemeral/ should move to compositional-core/process/?
8. **Skills enrichment coordination** — document needed skill changes separately, track as external dependencies
9. **Validation after 10 builds** — revisit this gap analysis after Middle/Ceiling experiments, update based on findings

---

## CONCLUSION

**Overall Coverage:** PARTIAL across all 10 insights. No insight is fully absent, but most have critical gaps.

**Highest-Leverage Additions:**
1. Validation framework (I-09) — entirely missing, blocks experiment
2. Individual → combination framing (I-04) — changes tier understanding fundamentally
3. Concrete CSS example (I-01) — 50 lines, massive clarity

**Pattern:** Session insights revealed NUANCES missing from existing docs. The architecture is documented, but the DISTINCTIONS and DIAGNOSTIC QUESTIONS are absent.

**Total Work:** ~720-1,130 lines across 7 files (6 edits + 1 new doc). Manageable scope for 2-3 enrichment sessions.

**Next Step:** Create validation-framework.md (I-09), then apply Phase 1 blocking enrichments before Middle-tier build.

---

**END GAP ANALYSIS**
