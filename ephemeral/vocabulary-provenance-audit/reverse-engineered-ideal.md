# Reverse-Engineered Ideal: What the Dynamic-6f-1 Agent Actually Needed

**Task:** The dynamic-6f-1 agent scored 24/24 reading 6 raw files with zero guidance. This report reverse-engineers what it used, what it ignored, what it inferred, and what the ideal file set would look like.

**Method:** Line-by-line comparison of the agent's output (42 lines, 8 sections) against each source file's content, tracking every claim to its origin or identifying it as inference.

---

## Part 1: What Information the Agent Actually USED

### From prohibitions.md (420 lines)

**USED (roughly 30 lines worth of signal out of 420):**
- Prohibition #1 (border-radius: 0): Used to build "Sharp edges = decisive, confident, print heritage" (Section 1: Character) and the entire generative constraint #1 (Section 5)
- Prohibition #2 (box-shadow: none): Used for "Flat = print heritage, honest" and the philosophical contradiction observation (Section 2)
- Prohibition #21 (void rule): Used directly in Section 8 (Surprise) -- "born from a catastrophic experiment where the system's own rules produced 80% empty space"
- Prohibition #22 (front-loading): Used for Section 8 context
- The PHRASE "anti-physical identity" (used verbatim in Sections 2, 4, 5)
- The phrase "fake 3D, dishonest" (paraphrased in Section 4)

**IGNORED (~390 lines, 93%):**
- ALL evidence citations (every "Evidence:" block with line numbers -- completely irrelevant to understanding)
- ALL exception documentation ("If using 2px borders, you MUST document...")
- ALL process instructions ("Before building:", "During building:", "After building:")
- ALL redundant prohibitions that are DERIVED from the 3 soul constraints (#3 drop-shadow is just #2 restated, #4 opacity is a variant of #2, #5 gradients is a variant of the anti-physical principle)
- Prohibitions #9-18 entirely (conditional prohibitions were not discussed)
- Meta-prohibitions #19-20 entirely (process rules, not system character)
- Summary statistics section
- "How to Use This Document" section

**KEY INSIGHT:** The agent extracted ~7% of prohibitions.md's content. It needed the PHILOSOPHICAL PRINCIPLES behind 3-4 prohibitions, not the 22-prohibition checklist. The agent treated prohibitions as CHARACTER EVIDENCE, not as compliance rules.

---

### From soul-constraints.md (343 lines)

**USED (roughly 40 lines worth of signal out of 343):**
- The 3 constraints themselves (border-radius: 0, box-shadow: none, filter: none)
- The PHILOSOPHY sections -- "Flat surfaces are honest. Shadows are dishonest." (used in Section 4)
- The generative property of border-radius: 0 -- "angular spiral in AD-004 exists BECAUSE of this constraint" (used verbatim in Section 5, generative constraint #1)
- "Structural depth" vs "physical depth" distinction (used in Section 5, constraint #2)
- The compositional chain diagram concept (Section 6: Compositional Opportunities implicitly)

**IGNORED (~300 lines, 87%):**
- ALL violation examples ("border-radius: 4px on cards -> SOUL VIOLATION")
- ALL test procedures ("If you blur your eyes...")
- "What Happens When Soul Is Violated" section entirely
- "Validation Checklist" section entirely
- Redundant restatement of principles already in prohibitions.md
- The entire "Why Only 3?" section (the agent already grasped this intuitively)
- Every "Evidence:" citation block
- All "What It Protects:" bullet lists

**KEY INSIGHT:** The agent extracted the PHILOSOPHY (~15%) and ignored the COMPLIANCE MACHINERY (~85%). It used soul-constraints.md as a character study, not a verification checklist. The document's most valuable content is its philosophical framing ("Flat surfaces are honest"), not its enforcement procedures.

---

### From tokens.css (184 lines)

**USED (roughly 25 lines worth of signal out of 184):**
- Color palette: #FEF9F5 (cream), #E0D5C5 (borders), #1A1A1A (text) -- used in Section 1 (Character) to describe "warm earth tones"
- Typography trinity: Instrument Serif / Inter / JetBrains Mono -- used in Section 7 (Vocabulary Landscape)
- Zone colors: --color-zone-sparse, dense, breathing, bedrock -- used in Section 3 (What It Enables) as "4 tokens"
- Solid offset variables: --offset-x, --offset-y, --offset-color -- used in Section 2 (Internal Tensions) as the philosophical contradiction
- Spacing maximums: --space-max-zone: 96px -- used in Section 5 (Generative Constraint #3)
- The IMMUTABLE/MUTABLE/AVAILABLE classification concept (implicitly used to distinguish what can change vs what can't)

**IGNORED (~160 lines, 87%):**
- The full spacing scale (4px through 96px individual values)
- Accent colors (blue, green, coral, amber, purple)
- Semantic background variants (bg-info, bg-tip, bg-gotcha, bg-summary)
- Text hierarchy colors (secondary, tertiary, muted)
- Syntax highlighting tokens
- Alternative CD-006 naming convention
- Grid system variable
- Transition timing
- ALL extraction method notes at bottom

**KEY INSIGHT:** The agent cherry-picked ~8 design decisions that have CHARACTER implications (warm cream = not sterile, serif = literary authority, 4 zone tokens = spatial vocabulary). It ignored all the IMPLEMENTATION DETAILS (exact spacing values, syntax colors, grid gaps). For a system-understanding task, the specific values are noise; the design DECISIONS are signal.

---

### From mechanism-catalog.md (752 lines)

**USED (roughly 60 lines worth of signal out of 752):**
- The CONCEPT of 18 mechanisms organized by 5 categories -- used in Section 3 ("18-mechanism catalog with per-category selection")
- INHALE/EXHALE model -- used in Section 3 ("Dense/sparse rhythmic composition across four fractal scales")
- 2-zone DNA pattern concept -- used in Section 3 ("2-zone DNA pattern")
- Solid Offset Depth mechanism #3 -- used in Section 2 (Internal Tensions) as the philosophical contradiction
- The critical constraint on #3 ("MUST use box-shadow: none") -- the tension between offset depth and anti-shadow philosophy
- Mechanism density cap concept -- used in Section 6 ("mechanism density cap (<=4 per viewport)")
- Distribution requirement concept -- used in Section 6 (">=2 per page-third")
- The Restraint Protocol section's KEY FINDING -- "14 mechanisms and none were perceptible" -- used in Section 8 (Surprise) as the system's self-awareness about failure
- The Floor/Middle/Ceiling/Flagship tier CONCEPT (used implicitly in Section 6)

**IGNORED (~690 lines, 92%):**
- ALL 18 individual mechanism CSS code blocks
- ALL "Perceptual Effectiveness" ratings
- ALL "Transfer test" documentation
- ALL "Application Modes" (PROGRESSIVE vs DISCRETE)
- ALL "Impact Profile" descriptions
- The Mechanism Summary Table
- The full Transition Grammar section (3 transition types, selection rules)
- Zone Background Differentiation semantic mappings table
- Middle-tier validation notes

**KEY INSIGHT:** The agent treated the mechanism catalog as a CAPABILITY INVENTORY, not a CSS reference. It cared about WHAT the system can express (18 mechanisms, 5 categories, 4 fractal scales), not HOW to implement each one. The CSS code blocks -- which constitute ~60% of the file -- were entirely ignored. The most powerful content it extracted was from the Restraint Protocol (a FAILURE ANALYSIS section, not a mechanism specification).

---

### From components.css (945 lines)

**USED (roughly 0-5 lines worth of signal out of 945):**
- The EXISTENCE of callout variants (essence, tip, info, gotcha, challenge) -- implied in Section 7 as "semantic callout family"
- The 2-zone DNA implementation (callout__label + callout__body) -- confirmed mechanism #2 from the catalog
- Possibly the Q&A component structure -- referenced in Section 7 as content types the system handles

**IGNORED (~940 lines, 99%):**
- ALL CSS declarations, selectors, and property values
- ALL component-specific implementations (code-snippet, decision-matrix, density-indicator, etc.)
- ALL responsive breakpoint rules
- ALL CD-ONLY and TENSION-TEST-ONLY components
- The reduced-motion media query

**KEY INSIGHT:** components.css was the LEAST useful file for the agent's task. A 945-line CSS file provides almost zero value for UNDERSTANDING a design system's character. The agent needed to know WHAT components exist and WHAT they signal, not HOW they're implemented in CSS. A 20-line inventory ("callouts signal semantic emphasis, code blocks signal technical content, Q&A pairs signal conversational structure") would have been more useful than 945 lines of CSS.

---

### From compositional-rules.md (528 lines)

**USED (roughly 15 lines worth of signal out of 528):**
- Zone nesting concept (Rule N4: max depth = 2) -- implicitly used to understand compositional limits
- INHALE/EXHALE concept from R1 (dense-sparse alternation) -- reinforced what mechanism catalog already said
- Fractal self-similarity at 4 scales (Rule F1) -- used in Section 3 ("four fractal scales")
- Maximum patterns per page = 5-6 (Rule C3) -- used implicitly in Section 6 (combinatorial space)
- The transition grammar concept (hard cut / spacing shift / checkpoint) -- used in Section 6 ("Three transition types")

**IGNORED (~510 lines, 97%):**
- ALL evidence citations with line numbers
- ALL individual rule specifications (N1-N4, R1-R4, Z1-Z3, D1-D3, DNA1-DNA3, C1-C3, F1-F3, G1-G3, RC1-RC2, AP1-AP4)
- ALL HTML code examples
- ALL "OBSERVATION -- needs more evidence" notes
- ALL anti-pattern specifications
- ALL responsive collapse grammar
- Summary statistics section
- Open questions section

**KEY INSIGHT:** The agent extracted ~5 high-level STRUCTURAL PRINCIPLES from compositional-rules.md and ignored the 41 individual rules. The rules are compliance tools; the principles are understanding tools. "Fractal self-similarity at 4 scales" is a single sentence that captures what Rules F1/F2/F3 take 60 lines to specify.

---

## Part 2: What Was NOISE

Across all 6 files, the noise follows consistent patterns:

### Pattern 1: Evidence Citations (~25% of total content)
Every "Evidence:" block with specific line numbers, file references, and cross-references. The agent never referenced a single line number. Evidence citations serve PROVENANCE (tracing decisions to sources) but provide zero value for UNDERSTANDING the system. A reader who already has the source files doesn't need to be told where to find things in them.

### Pattern 2: Compliance/Enforcement Machinery (~30% of total content)
- Violation examples ("box-shadow: 0 4px 6px rgba(0,0,0,0.1) on cards -> SOUL VIOLATION")
- Measurement procedures ("Step 1: At 1440px viewport width, scroll through...")
- Pass/Fail criteria
- Exception documentation templates
- "How to Use This Document" sections
- Validation checklists

These serve BUILDERS and AUDITORS in execution mode. They are invisible to an agent trying to understand what the system IS.

### Pattern 3: Redundant Restatement (~15% of total content)
- soul-constraints.md repeats most of prohibitions.md #1-3 with more words
- prohibitions.md #3 (drop-shadow) is just #2 (box-shadow) restated
- prohibitions.md #4 (opacity) is a special case of #2
- prohibitions.md #8 (rounded corners for decoration) is just #1 restated
- The "Why Only 3?" section explains why #1/#2/#3 are special, but their specialness is self-evident from reading them

### Pattern 4: CSS Implementation Details (~20% of total content)
- Specific CSS code blocks in mechanism-catalog.md
- All of components.css
- CSS examples in compositional-rules.md
- Exact pixel values, class selectors, media queries

The agent never reproduced or referenced a single CSS declaration. It understood WHAT border-weight gradient encoding does without needing to see the `.element--highest-priority { border-left: 4px solid var(--color-text); }` code.

### Pattern 5: Process/Operational Instructions (~10% of total content)
- "Before building: Read ABSOLUTE PROHIBITIONS"
- "During building: Check CONDITIONAL PROHIBITIONS"
- "Exception documentation: If using 2px borders, you MUST document..."
- Phase-gating instructions, tier routing notes

These serve the BUILD PIPELINE, not system understanding.

---

## Part 3: What the Agent INFERRED (Gaps)

These are claims in the agent's output that are NOT explicitly stated in any source file:

### Inference 1: "An editorial purist with the temperament of a print architect" (Section 1)
- **Source evidence:** Scattered across files -- "print heritage" in prohibitions.md, "editorial authority" in soul-constraints.md, serif display font in tokens.css, warm cream background in tokens.css
- **Gap:** No file synthesizes these into a CHARACTER STATEMENT. The agent performed a gestalt interpretation that no individual file provides.

### Inference 2: "It treats the screen as a page, not an app" (Section 1)
- **Source evidence:** Implicit from anti-physical identity, no hover effects, no interactive lift, serif headings
- **Gap:** This page-vs-app distinction is never stated. It's a BRILLIANT inference from the constraint pattern.

### Inference 3: "Simultaneously inviting and uncompromising" (Section 1)
- **Source evidence:** Warm palette + sharp geometry = warmth + severity
- **Gap:** The TENSION between these two is never named in the source files. The files present warmth and severity as separate properties. The agent identified the CONTRADICTION.

### Inference 4: The Solid Offset philosophical contradiction (Section 2)
- **Source evidence:** Mechanism #3 in mechanism-catalog.md exists. Its "Critical constraint: MUST use box-shadow: none" is stated. The EXT-CREATIVE-001 label in tokens.css exists.
- **Gap:** NO FILE acknowledges this as a CONTRADICTION. The files present solid offset as a "box-shadow alternative" -- a compliant technique, not a philosophical tension. The agent saw through the framing: "The distinction -- 'structural' vs 'simulated' -- is philosophically thin. A 4px solid offset at #1A1A1A produces a depth illusion perceptually identical to a hard box-shadow."
- **This is the most impressive inference.** The agent identified a tension the system's OWN documentation refuses to acknowledge.

### Inference 5: "More self-aware about its failures than its successes" (Section 8)
- **Source evidence:** Prohibition #21 (void), #22 (front-loading), Restraint Protocol (14 imperceptible mechanisms)
- **Gap:** This META-OBSERVATION is nowhere in the source files. The files present these as "rules" and "protocols." The agent recognized them as SCAR TISSUE -- the system encoding its failures as grammar.

### Inference 6: "Limited: Playfulness, visual surprise, emotional range" (Section 7)
- **Source evidence:** Absence of gradients, animations, border-radius variation, shadow effects
- **Gap:** No file discusses what the system CANNOT express. All files focus on what it CAN do. The agent identified the negative space -- the vocabulary the system lacks.

### Inference 7: "Celebratory states have almost no expression -- success is just a green left-border" (Section 7)
- **Source evidence:** The accent-green (#4A9D6B) color and the callout--tip variant in components.css
- **Gap:** This is a devastating observation. The system's ENTIRE emotional range for positive outcomes is a single color on a 4px left border. No file acknowledges this constraint on expressiveness.

---

## Part 4: Redesigning the 6 Files to Maximize Agent Understanding

### Problem Statement

The current 6 files total ~3,172 lines. The agent used ~175 lines worth of content (~5.5%). The remaining 94.5% was noise for the task of understanding the system's character, tensions, and capabilities.

But the agent also INFERRED things that should have been STATED. The files are simultaneously too long (drowning in compliance/evidence) and too shallow (missing character synthesis, tension acknowledgment, capability boundaries).

### Design Principles for Redesigned Files

1. **Separate UNDERSTANDING from COMPLIANCE.** The current files mix "what the system IS" with "how to verify you built it right." These serve different audiences at different times.

2. **Lead with CHARACTER, not RULES.** The agent's first section was Character. None of the 6 files start with character. They start with rules, constraints, and prohibitions. Rules tell you what to avoid; character tells you what to be.

3. **Name the TENSIONS.** The agent's second section was Internal Tensions. The current files present warmth and severity as separate properties. They never name the contradiction between solid offset and anti-shadow philosophy. Making tensions explicit helps agents understand the system DEEPLY, not just comply with it.

4. **Inventory CAPABILITIES and LIMITATIONS.** The agent's sections 3, 4, and 7 covered what the system enables, refuses, and struggles with. The current files only cover what it enables and refuses. The negative space -- what the system CANNOT express -- is critical for understanding.

5. **Eliminate evidence citations.** For understanding purposes, provenance is noise. A separate provenance document can exist for those who need it.

6. **CSS as appendix, not narrative.** The agent didn't read any CSS. Implementation details should be in a separate reference layer, not interspersed with system understanding.

### Proposed Redesign

#### File 1: `identity.md` (~120 lines) -- REPLACES prohibitions.md + soul-constraints.md

**Structure:**
```
# KortAI Identity

## Character (WHO -- ~20 lines)
  - Personality synthesis (editorial purist, print architect)
  - The page-not-app distinction
  - Warmth + severity as dual identity

## Soul (WHAT MAKES IT RECOGNIZABLE -- ~15 lines)
  - 3 visual signatures: angular geometry, flat surfaces, structured depth
  - WHY these 3 generate identity (1 paragraph each, not 50 lines each)
  - The generative property (constraints PRODUCE, not just PREVENT)

## Tensions (WHAT IT STRUGGLES WITH -- ~20 lines)
  - Warmth vs severity (warm palette + sharp geometry)
  - Solid offset contradiction (anti-shadow stance + shadow-like depth)
  - Scar tissue (void rule, front-loading rule = encoded failures)
  - Vocabulary ceiling (no playfulness, no surprise, celebration = green border)

## Refusals (WHAT DEFINES THE BOUNDARY -- ~30 lines)
  - 8 absolute refusals (one line each, philosophical reason, no evidence)
  - Pattern: physical metaphor rejection (shadows, gradients, rounded)
  - Pattern: emotional range restriction (no soft, no whimsy, no decorative)

## Conditional Boundaries (~20 lines)
  - 14 conditional rules (one line each with exception summary)

## Process Boundaries (~10 lines)
  - Provenance requirement
  - Tension-first derivation
```

**What's different:** Character FIRST. Tensions NAMED. Refusals as CHARACTER, not COMPLIANCE. ~70% shorter than current 2 files combined (763 lines -> ~120 lines). Evidence citations GONE. Violation examples GONE. Measurement procedures GONE (move to gate-runner or audit tooling).

---

#### File 2: `vocabulary.md` (~80 lines) -- REPLACES tokens.css

**Structure:**
```
# Design Vocabulary

## Palette (~15 lines)
  - 3 identity colors: cream (#FEF9F5), near-black (#1A1A1A), red (#E83025)
  - Why warm, not cool (editorial warmth, not clinical sterility)
  - 5 accent colors (one line each with semantic meaning)

## Typography (~15 lines)
  - Trinity: Instrument Serif (authority), Inter (clarity), JetBrains Mono (precision)
  - Why serif ONLY for display (literary documentation feel)
  - Why NOT for body (readability)

## Spatial System (~20 lines)
  - 4px base unit
  - 4 zones: sparse/dense/breathing/bedrock
  - 96px maximum (ceiling experiment scar)
  - Gestalt aliases: within (8px), between (32px), chapter (64px)

## Structural Signals (~15 lines)
  - 3 border weights: 4px (maximum), 3px (accent), 1px (subtle)
  - Why 2px is skipped (epidemic anti-pattern)
  - Depth through solid offset (the philosophical exception)

## Token Reference
  [Link to tokens.css for exact values]
```

**What's different:** DESIGN DECISIONS, not variable declarations. Explains WHY cream instead of white, not just that cream is #FEF9F5. ~55% shorter. The actual CSS variable declarations still exist in tokens.css for builders -- this file is the UNDERSTANDING layer.

---

#### File 3: `mechanisms.md` (~150 lines) -- REPLACES mechanism-catalog.md

**Structure:**
```
# Compositional Mechanisms (18 Tools)

## What Mechanisms Are (~10 lines)
  - CSS techniques that work across metaphors
  - Name test + transfer test
  - 5 categories: Spatial, Hierarchy, Component, Depth, Structure

## Capability Inventory (~60 lines)
  - Each mechanism: 3 lines max (name, what it does, when it's powerful)
  - NO CSS code blocks
  - Perceptual effectiveness rating (HIGH/MEDIUM/LOW)

## Composition Logic (~30 lines)
  - Middle: content -> mechanism (direct mapping)
  - Ceiling: metaphor -> shared dimension -> multiple mechanisms
  - The multi-channel coherence insight (the atmosphere difference)

## Restraint (~25 lines)
  - Density cap: <=4 per viewport (why: 5+ compete, none register)
  - Distribution: >=2 per page-third
  - The 14-mechanism failure (present in code, invisible to readers)

## Transitions (~20 lines)
  - 3 types: hard cut, spacing shift, checkpoint
  - Selection logic (domain change vs intensity change vs phase change)
  - Maximum transition spacing (96px, then use checkpoint)

## CSS Reference
  [Link to full mechanism implementations for builders]
```

**What's different:** No CSS code blocks in the understanding file. ~80% shorter (752 -> ~150 lines). The COMPOSITION LOGIC section (which is the most useful content in the current file) is elevated from a buried note to a primary section. Restraint Protocol gets a full section because it was the agent's favorite part.

---

#### File 4: `grammar.md` (~100 lines) -- REPLACES compositional-rules.md

**Structure:**
```
# Compositional Grammar

## Nesting (~15 lines)
  - Max depth: 2 (zone -> component, never deeper)
  - Callouts inside zones, never inside callouts
  - Code blocks are peers to callouts

## Rhythm (~25 lines)
  - INHALE/EXHALE: every 2-3 dense zones need breathing room
  - Inside:Between spacing ratio = 1:3 to 1:4
  - Fractal self-similarity at 4 scales (page, section, component, character)

## Zones (~20 lines)
  - Background change = content type shift
  - Max 2-3 zone changes per viewport
  - Zone transitions use border OR spacing (not both heavily)

## Density (~15 lines)
  - Max 3-4 components per viewport
  - 3+ callouts = cacophony
  - Standard arc: sparse -> dense -> sparse
  - GEOLOGICAL inversion: certain = sparse, uncertain = dense

## Compound Pages (~15 lines)
  - Sequential patterns, not simultaneous
  - 3 transition types between patterns
  - Max 5-6 patterns per page

## Anti-Patterns (~10 lines)
  - No callout stacking (max 2 per viewport)
  - No uniform density (min 2 density modes)
  - No fighting the pattern (let density emerge from structure)
  - No simultaneous axis patterns
```

**What's different:** 41 rules distilled to ~25 PRINCIPLES with no evidence citations. ~80% shorter (528 -> ~100 lines). Open questions section REMOVED (useful for researchers, not for understanding). CSS/HTML examples REMOVED. Each principle is stated as a GUIDELINE, not a compliance rule.

---

#### File 5: `components.md` (~40 lines) -- REPLACES components.css (945 lines)

**Structure:**
```
# Component Inventory

## Universal Components
  - Callout family (5 variants: essence, tip, info, gotcha, challenge)
    - All follow 2-zone DNA: sparse label + dense body
    - Differentiated by accent color and border
  - Code block (dark background, syntax highlighting, 3px border)
  - Page header (ID + title + subtitle, 3px primary border)
  - Page footer (mirror of header, metadata)
  - Data table (mono uppercase headers, horizontal borders only)
  - Stats bar (flex layout, label-value pairs)
  - File tree (monospace directory structure)
  - Q&A pair (question offset, answer with optional drop cap)

## Specialized Components (lower confidence)
  - Bento grid (variable-span containment)
  - Reasoning container (CD-specific: framed deliberation)
  - Core abstraction (CD-specific: essence + proof)
  - Breathing zone (between-section decompression)
  - Section zone (density progression container)

## CSS Reference
  [Link to components.css for full implementation]
```

**What's different:** 945 lines of CSS replaced by 40 lines of inventory. For UNDERSTANDING what components exist and what they signal, you need names and descriptions, not CSS selectors and property values. The CSS file still exists for builders -- this file is the UNDERSTANDING layer.

---

#### File 6: KEEP tokens.css (~184 lines, unchanged)

tokens.css is the one file that serves BOTH understanding AND implementation. Keep it as-is, but reference it from vocabulary.md as the authoritative value reference.

---

### Summary of Proposed Changes

| Current File | Lines | Agent Used | Proposed Replacement | Lines | Ratio |
|-------------|-------|------------|---------------------|-------|-------|
| prohibitions.md | 420 | ~30 (7%) | identity.md (merged with soul-constraints) | ~120 | 3.5x reduction |
| soul-constraints.md | 343 | ~40 (12%) | (merged into identity.md) | 0 | eliminated |
| tokens.css | 184 | ~25 (14%) | vocabulary.md + tokens.css | ~80 + 184 | understanding + reference |
| mechanism-catalog.md | 752 | ~60 (8%) | mechanisms.md | ~150 | 5x reduction |
| components.css | 945 | ~5 (0.5%) | components.md | ~40 | 24x reduction |
| compositional-rules.md | 528 | ~15 (3%) | grammar.md | ~100 | 5x reduction |
| **TOTAL** | **3,172** | **~175 (5.5%)** | **~490 + 184 (reference)** | **~674** | **4.7x reduction** |

---

## Part 5: Ideal File Set

### The Answer: Different Decomposition, Not Same 6 Files

The current decomposition follows a COMPLIANCE taxonomy:
- What you must NOT do (prohibitions)
- What values to use (tokens)
- What techniques exist (mechanisms)
- What CSS to write (components)
- How things combine (rules)

The dynamic-6f-1 agent's analysis followed a CHARACTER taxonomy:
1. Who is this system? (Character)
2. What contradictions does it contain? (Internal Tensions)
3. What can it do? (Enables)
4. What does it refuse? (Refuses)
5. What constraints generate what? (Generative Constraints)
6. What's the compositional space? (Compositional Opportunities)
7. What's it good and bad at? (Vocabulary Landscape)
8. What's surprising? (Surprise)

### Proposed: 2-Layer Architecture

**Layer 1: UNDERSTANDING (5 files, ~490 lines)**
For agents analyzing, planning, and deriving. No CSS. No evidence citations. Character-first.

1. `identity.md` (~120 lines) -- Character, soul, tensions, refusals
2. `vocabulary.md` (~80 lines) -- Design decisions and their reasons
3. `mechanisms.md` (~150 lines) -- Capability inventory, composition logic, restraint
4. `grammar.md` (~100 lines) -- Principles of combination
5. `components.md` (~40 lines) -- Component inventory with signals

**Layer 2: REFERENCE (3 files, ~1,880 lines)**
For agents building, implementing, and auditing. Exact CSS. Exact thresholds. Compliance tooling.

1. `tokens.css` (~184 lines) -- Exact variable declarations
2. `components.css` (~945 lines) -- Exact component implementations
3. `build-reference.md` (~750 lines) -- Mechanism CSS blocks, evidence citations, measurement procedures, violation examples, exception documentation

**How they relate:**
- Layer 1 says "the system achieves depth through structural nesting, not shadows"
- Layer 2 says "here's the exact CSS for 4-level border-weight gradient, here's how to measure compliance, here's what violations look like"

Agents doing what dynamic-6f-1 did (understanding the system) read Layer 1. Agents building pages read Layer 1 THEN Layer 2. Auditors read Layer 2 with Layer 1 as context.

### What This Gets Right

1. **The agent's 24/24 insights came from ~175 lines of content across 3,172 lines.** The redesign concentrates that signal.

2. **The agent's BEST insights were INFERENCES from gaps in the files.** The redesign makes those explicit (character synthesis, tension naming, vocabulary limitations).

3. **Components.css was 945 lines of near-zero value for understanding.** The redesign separates implementation reference from system understanding.

4. **Evidence citations are provenance, not understanding.** The redesign removes them from the understanding layer entirely.

5. **The agent never read a single CSS code block.** The redesign puts all CSS in the reference layer.

### What This Risks

1. **Builders might skip Layer 2 and build from understanding alone.** Mitigation: Layer 1 explicitly links to Layer 2 with "for implementation details, see [file]."

2. **The understanding layer requires more subjective writing.** "Editorial purist with the temperament of a print architect" is interpretation, not extraction. Mitigation: Acknowledge the interpretive nature. State the lens.

3. **Provenance becomes harder to trace.** If evidence citations are removed from Layer 1, how do you know WHERE a principle came from? Mitigation: Layer 2's build-reference.md contains full provenance. Layer 1 focuses on WHAT and WHY, not WHERE FROM.

4. **The understanding layer might age faster.** Character synthesis and tension naming are more fragile than compliance rules. Mitigation: Review the understanding layer after each major experiment. Compliance rules change rarely; character insights deepen over time.

---

## Conclusion

The dynamic-6f-1 agent demonstrated that UNDERSTANDING a design system and BUILDING with a design system require fundamentally different information. The current 6 files are optimized for building and auditing (compliance, verification, CSS reference). They are suboptimal for understanding (character buried in rules, tensions unacknowledged, capability boundaries undocumented, 95% noise for the understanding task).

The ideal file set has two layers: understanding (~490 lines, character-first, no CSS) and reference (~1,880 lines, CSS-first, compliance-oriented). The dynamic-6f-1 agent's 24/24 score proves that understanding can be extracted from compliance documents -- but it shouldn't have to be.

**The files should say what the agent had to infer.**
