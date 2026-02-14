# Practical Workflow Research — What to DO with Compositional-Core

**Researcher:** practical-researcher
**Date:** 2026-02-14
**Focus:** Step-by-step builder workflow when using compositional-core

---

## Executive Summary

**The Core Insight:** Compositional-core is NOT a component library to copy from. It's a **vocabulary + grammar system** that you use to BUILD pages after deriving your metaphor through tension-composition.

**Critical Sequence:**
1. Load vocabulary (tokens.css, components.css, prohibitions.md) — your instrument
2. Run tension-composition Phases 0-3 BLIND to case studies — your creative work
3. Lock in your metaphor (Phase 3.5) — point of no return
4. Consult mechanism catalog for reusable techniques — your toolbox
5. OPTIONALLY read 2-3 case studies for divergence verification — quality control
6. Build using CSS vocabulary + mechanisms — your implementation
7. Verify with perceptual-auditing — your QA

**The Jazz Model:** You learn scales/chords (vocabulary), music theory (grammar), listen to recordings (case studies for inspiration not replication), respect instrument constraints (prohibitions), practice with methodology (skills).

---

## The Concrete 7-Step Workflow

### STEP 1: ALWAYS Load Vocabulary First

**What to do:** Read these 3 files at the start of EVERY page build.

**Files to read:**
```
1. design-system/compositional-core/vocabulary/tokens.css (all 174 lines)
2. design-system/compositional-core/components/components.css (first 100 lines for structure)
3. design-system/compositional-core/identity/prohibitions.md (all 353 lines)
```

**Why this order:**
- Tokens = your palette (colors, spacing, typography)
- Components = your vocabulary (2-zone DNA, border patterns, spacing patterns)
- Prohibitions = your constraints (what you CANNOT do)

**What you're loading into working memory:**

**From tokens.css:**
- Soul constraints (border-radius: 0, box-shadow: none, no drop-shadow)
- Primary colors (--color-primary: #E83025, --color-background: #FEF9F5, etc.)
- Typography trinity (--font-display: Instrument Serif, --font-body: Inter, --font-mono: JetBrains Mono)
- Spacing scale (--space-1: 4px through --space-24: 96px)
- Border widths (--border-structural: 4px, --border-accent: 3px, --border-micro: 1px)

**From components.css:**
- Callout family (2-zone DNA: sparse label + dense body + 4px left border)
- Parametric variation pattern (--accent-color controls border + label color)
- Semantic variants (essence, tip, info, gotcha, challenge)

**From prohibitions.md:**
- 8 absolute prohibitions (NEVER exceptions: border-radius > 0, box-shadow, drop-shadow, opacity < 1, gradients, pure black/white, serif body text, decorative elements)
- 10 conditional prohibitions (documented exceptions: 2px borders, accent borders < 4px, grid breaking, vertical table borders, hover lift, traffic-light adjacency, cool grays, non-italic h3, same-density stacking)
- 2 meta-prohibitions (justify without research, create patterns without tension)

**Critical understanding:** These are NOT suggestions. They are IDENTITY-LEVEL BOUNDARIES. Violating them = not KortAI.

---

### STEP 2: Run Tension-Composition Phases 0-3 BLIND

**What to do:** Use the tension-composition skill to derive your metaphor WITHOUT reading case studies.

**Phases to complete:**

**Phase 0: Content Assessment**
- Read all content
- Identify content type
- Flag structural needs
- **CRITICAL:** Phase 0D prohibits reading case-studies/ or library/ directories

**Phase 1: Multi-Axis Questioning**
- Ask multi-axis questions (FEEL, UNDERSTAND, BECOME)
- Identify content tensions
- Score tension richness

**Phase 2: Tension Derivation**
- Build tension table (opposition + overlap + width)
- Calculate richness score
- Decide Track 1 (baseline) vs Track 2 (compositional)

**Phase 3: Metaphor Search**
- If Track 2: Run constrained associative search
- Generate metaphor candidates
- Evaluate candidates against tensions
- Select best-fit metaphor

**What you're NOT doing:**
- ❌ Reading design-system/case-studies/ (PROHIBITED until Phase 5)
- ❌ Reading prior explorations (DD-001, OD-004, Boris-2, etc.)
- ❌ Looking at tension-test layouts
- ❌ Consulting library patterns

**Why this matters:**

From skill-enrichments/tension-composition-additions.md:
> "Library patterns are VALIDATION tools, not GENERATION tools. Reading them before metaphor commitment = pattern-matching, not tension-deriving."

**The construction principle:**

From ANTI-PRESCRIPTION-TEMPLATE.md:
> "You are CONSTRUCTING a composition, not DISCOVERING one. Your lens shapes what you see. The metaphor you choose is a CREATIVE ACT, not an inevitable conclusion."

**What you're building:** Independent creative derivation from YOUR content tensions, not pattern adaptation from library examples.

---

### STEP 3: Phase 3.5 — Commit Your Metaphor (LOCK IN)

**What to do:** Write down your committed metaphor BEFORE consulting any library resources.

**The gate questions (from skill-enrichments):**

```
1. Did I derive this metaphor independently?
   - If NO: You read library patterns. RESTART Phase 1.

2. Can I justify this metaphor without referencing library examples?
   - If NO: You are pattern-matching. Regenerate with constraint.

3. Does this metaphor appear in case-studies/_INDEX.md? (titles only)
   - If YES: Divergence justification required (Step 3.5D)
   - If NO: Proceed to Phase 4
```

**Commitment documentation:**

```markdown
**Your metaphor:** [Write it here]

**How it resolves the tension:**
[Explain: What property of THIS metaphor resolves THIS tension?]

**Why this metaphor vs alternatives:**
[What alternatives did you consider? Why reject them?]
```

**Why this gate exists:**

From skill-enrichments:
> "The library contains proven metaphors. Seeing them BEFORE derivation creates gravitational pull toward pattern-matching. This gate ensures your metaphor is YOURS, not a library reproduction."

**Critical understanding:** This is the point of no return. After this gate, you DO NOT change your metaphor based on library consultation. Library is for technique extraction only.

---

### STEP 4: Read Mechanism Catalog for Reusable Techniques

**What to do:** NOW you can read mechanism-catalog.md to find techniques applicable to YOUR metaphor.

**Files now permitted:**
```
✅ design-system/compositional-core/grammar/mechanism-catalog.md (first 200 lines for structure)
✅ design-system/compositional-core/components/components.css (full file if needed)
```

**What to extract from mechanism catalog:**

**✅ REUSABLE TECHNIQUES (apply to ANY metaphor):**
- Border-weight gradient encoding (4px/3px/2px/1px hierarchy)
- 2-zone component DNA (sparse label + dense body)
- Solid offset depth (box-shadow alternative)
- Spacing compression (inverse density-confidence)
- Dense/sparse alternation (INHALE/EXHALE rhythm)

**❌ DO NOT extract:**
- Full layout architectures (metaphor-specific)
- Section structures (metaphor-driven)
- Metaphor vocabulary (geological, manuscript, etc.)

**How mechanisms work (from mechanism-catalog.md):**

**Test 1: Name Test**
> "Remove the metaphor name from the description. Does the description still make sense?"
> - YES → mechanism
> - NO → metaphor-specific

**Test 2: Transfer Test**
> "Does this technique work with a DIFFERENT metaphor?"
> - YES → mechanism
> - NO → metaphor-specific

**Example application:**

**Mechanism:** Border-weight gradient encoding
**What it is:** Use border thickness (4px/3px/1px) to encode semantic levels
**Why reusable:** Hierarchy is universal; thickness is a parameter
**How to adapt:** Map YOUR hierarchy (not certainty) to border-weight scale

**Your implementation:** If your metaphor is "construction site," border-weight might encode structural stability (4px = load-bearing, 1px = temporary scaffolding). DIFFERENT meaning, SAME technique.

**Critical distinction (from skill-enrichments):**
> "Mechanisms (extractable) = border-weight gradient, compression technique, 2-zone DNA"
> "Implementations (metaphor-specific) = '4px bedrock border', '80px surface padding', '6 strata'"

**What you're doing:** Extracting TECHNIQUES, not copying IMPLEMENTATIONS.

---

### STEP 5: OPTIONALLY Read 2-3 Case Studies for Divergence Verification

**What to do:** After Phase 4 implementation, you MAY consult case studies to verify your metaphor diverges.

**Files now permitted:**
```
✅ design-system/compositional-core/case-studies/_INDEX.md (titles + tension summaries)
✅ 2-3 most similar case studies (full reading)
```

**Purpose of case study reading:**

From skill-enrichments Phase 5:
> "NOT to get implementation ideas (you already built in Phase 4)."
> "TO verify your metaphor diverges from library patterns (or justify convergence)."

**How to select case studies:**
1. Scan _INDEX.md for similar tensions to yours
2. Read ONLY 2-3 most similar
3. DO NOT read all case studies

**Divergence comparison table:**

```
| Comparison Dimension | Your Metaphor | Case Study | Divergence? |
|---------------------|---------------|------------|-------------|
| Metaphor domain | [yours] | [theirs] | DIFFERENT/SAME |
| Structural isomorphisms | [your mappings] | [their mappings] | DIFFERENT/OVERLAP/SAME |
| Section architecture | [your structure] | [their structure] | DIFFERENT/SIMILAR/SAME |
| Vocabulary | [your labels] | [their labels] | DIFFERENT/SAME |
| Mechanisms used | [your techniques] | [their techniques] | DIFFERENT/OVERLAP/SAME |
```

**Divergence verdict:**
- DIFFERENT on 3+ dimensions → Strong divergence, proceed
- SAME/SIMILAR on 3+ dimensions → Convergence detected, justification required

**If convergence detected (from skill-enrichments):**

**Acceptable convergence:**
- Same domain, DIFFERENT content, DIFFERENT isomorphisms
- Independent derivation with strong evidence (Phase 1-2 work shown)

**Unacceptable convergence:**
- Same domain, SAME content → you're reproducing library output
- Cannot prove independent derivation → pattern-matching occurred

**Regeneration path:**
> "If justification FAILS: Regenerate metaphor with explicit constraint: 'BANNED metaphors: [list]. Derive NEW metaphor for same tension.'"

**Critical understanding:** Case studies are PROOF-OF-CONCEPT, not TEMPLATES. You study them to verify novelty, not to copy structure.

---

### STEP 6: Implement Using CSS Vocabulary + Mechanisms

**What to do:** Build your HTML/CSS using tokens + mechanisms adapted to YOUR metaphor.

**Implementation checklist:**

**From vocabulary (tokens.css):**
```css
/* Use exact token values */
color: var(--color-primary);
background: var(--color-background);
font-family: var(--font-display);
padding: var(--space-8);
border-left: var(--border-structural) solid var(--accent-color);
```

**From mechanisms (adapted to YOUR metaphor):**
```css
/* Example: 2-zone component DNA adapted to "construction site" metaphor */
.blueprint-section {
  border-left: 4px solid var(--accent-blue); /* mechanism: border-weight encoding */
  padding: var(--space-6); /* mechanism: component padding */
}

.blueprint-section__label {
  font-size: var(--type-meta); /* mechanism: 2-zone DNA sparse label */
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3);
}

.blueprint-section__content {
  font-size: var(--type-body); /* mechanism: 2-zone DNA dense body */
  line-height: 1.7;
}
```

**What you're NOT doing:**
- ❌ Copying CSS blocks from case studies
- ❌ Using metaphor-specific vocabulary from library ("bedrock", "strata", "topsoil")
- ❌ Replicating exact padding values from examples (48px → 40px → 32px)
- ❌ Copying section structures verbatim

**What you ARE doing:**
- ✅ Using token VALUES (--space-8, --color-primary, etc.)
- ✅ Applying mechanism TECHNIQUES (border-weight gradient, 2-zone DNA)
- ✅ Generating YOUR vocabulary from YOUR metaphor ("blueprint", "foundation", "framework")
- ✅ Deriving YOUR padding values from YOUR perceptual needs

**From prohibitions.md — Absolute rules:**
```css
/* NEVER */
border-radius: 0; /* ALWAYS sharp edges */
box-shadow: none; /* ALWAYS flat */
filter: none; /* NO drop-shadow */
opacity: 1; /* NO transparency tricks on backgrounds */
background: var(--color-background); /* NO pure black #000 or pure white #FFF */
```

**From prohibitions.md — Conditional rules:**
```css
/* AVOID (unless documented exception) */
border-left: 2px; /* Epidemic value — use 1px or 3px+ */
border-top: 1px; /* In tables: horizontal only, no vertical */
```

---

### STEP 7: Verify with Perceptual-Auditing Skill

**What to do:** Run the perceptual-auditing skill to verify your implementation meets KortAI identity.

**Files to read for audit methodology:**
```
~/.claude/skills/perceptual-auditing/SKILL.md (full methodology)
```

**Audit layers (from CLAUDE.md project instructions):**

```
1. Soul extraction (border-radius: 0, box-shadow: none verification)
2. Sub-agent deployment (A through G, full definitions)
3. Squint test
4. KortAI comparison
5. Scoring rubric
```

**What the audit catches:**

**From skill-enrichments research:**
- Metaphor-driven visual compromise (metaphors encode spatial biases as CSS values)
- Container width floor violations (< 940px at 1440px viewport)
- Label-to-heading spacing violations (< 16px)
- Padding floor violations (< 32px on primary containers)
- Compression ratio violations (> 40% content loss in responsive)

**Key guardrails (from skill-enrichments):**
- 940px min container (65% viewport at 1440px)
- 16px label-to-heading minimum spacing
- 32px padding floor on containers
- 40% compression ratio maximum

**Core principle (from skill-enrichments):**
> "The metaphor shapes experience; the guardrails prevent it from breaking experience"

**What success looks like:**
- ✅ All soul constraints pass (border-radius: 0, box-shadow: none, etc.)
- ✅ All guardrails met (container width, spacing, padding)
- ✅ Metaphor preserved (your vocabulary intact)
- ✅ Zero regressions (no anti-patterns introduced)

---

## The Jazz Model Analogy — Practical Explanation

**The setup:** You're learning jazz piano. Compositional-core is your jazz education system.

### Component 1: Vocabulary = Your Instrument (Notes, Chords, Scales)

**Tokens.css = the piano keyboard**
- Keys exist (notes/colors/spacing values)
- Positions are fixed (C is always C, --color-primary is always #E83025)
- You don't change the keyboard, you PLAY it

**Components.css = chord vocabulary**
- Standard fingerings (2-zone DNA, callout structure)
- Chord progressions (border patterns, spacing patterns)
- You learn the shapes, then USE them in your composition

**What this means practically:**
- You don't invent new colors — you use --color-primary, --accent-blue, etc.
- You don't create new spacing — you use --space-4, --space-8, etc.
- You don't redesign callouts — you use the 2-zone DNA pattern
- **But:** You CHOOSE which colors, which spacing, which patterns for YOUR song

### Component 2: Grammar = Music Theory (How Notes Combine)

**Mechanism-catalog.md = music theory textbook**
- Harmonic progressions (how borders combine with spacing)
- Voice leading rules (how density transitions work)
- Tension/resolution patterns (how sparse/dense alternates)

**Prohibitions.md = instrument's physical constraints**
- A piano can't bend notes (guitar can) → border-radius: 0 (never round)
- A piano can't sustain indefinitely (organ can) → box-shadow: none (no fake depth)
- A piano has fixed tuning → color palette is locked

**What this means practically:**
- Music theory teaches "avoid parallel fifths" → prohibitions teach "avoid 2px borders"
- Music theory teaches "resolve tension to tonic" → mechanisms teach "sparse/dense alternation"
- You DON'T break theory rules arbitrarily — you follow them to make coherent music
- **But:** Within rules, infinite compositions exist

### Component 3: Case Studies = Recordings of Great Performances

**Case-studies/ directory = jazz albums library**
- Bill Evans played "Autumn Leaves" THIS way
- Miles Davis played "So What" THAT way
- You study them for INSPIRATION, not REPLICATION

**The trap (pattern-matching):**
- ❌ Listening to Bill Evans → copying his exact voicings for YOUR different song
- ❌ "My song is also in C minor, so I'll use Bill's exact arrangement"
- ❌ Transcribing note-for-note without understanding WHY those choices

**The correct approach (mechanism extraction):**
- ✅ Bill Evans uses rootless voicings → I'll try that TECHNIQUE in my song
- ✅ Miles Davis uses modal harmony → I'll explore that APPROACH for my melody
- ✅ I understand WHY Bill chose those voicings (voice leading, tension) → I'll apply same PRINCIPLE to different notes

**What this means practically:**
- Geological case study uses 4px/3px/1px borders for confidence → I'll use border-weight gradient for MY hierarchy
- Manuscript case study uses spacing compression for depth → I'll use compression for MY metaphor's progression
- **Not:** Geological uses 6 layers → I'll use 6 layers (metaphor-specific, not reusable)

### Component 4: Prohibitions = Physical Constraints

**Piano constraints:**
- Can't bend pitch → NEVER use pitch bend techniques (guitar/synth only)
- Can't sustain infinitely → NEVER write infinite sustain notation
- Fixed keyboard range → NEVER write notes outside range

**KortAI constraints:**
- Flat design identity → NEVER use box-shadow (creates fake 3D)
- Angular identity → NEVER use border-radius > 0 (creates soft edges)
- Warm palette → NEVER use pure black #000 or pure white #FFF (sterile/harsh)

**What this means practically:**
- You don't FIGHT the instrument's nature — you WORK WITH it
- Piano can't bend notes, but it has OTHER strengths (chords, percussive attack)
- KortAI can't use shadows, but it has OTHER strengths (sharp geometry, spacing depth, border accents)
- Constraints = CREATIVE FUEL, not creative limitation

### Component 5: Skill = Training Methodology

**Tension-composition skill = jazz improvisation course**
- Teaches you HOW to derive original solos from chord changes
- NOT: "Here are 50 licks to memorize"
- YES: "Here's how to analyze harmony, find tensions, resolve them creatively"

**Perceptual-auditing skill = ear training**
- Teaches you HOW to hear what you played
- NOT: "This solo is good/bad"
- YES: "This note creates THIS harmonic tension, which feels THIS way"

**What this means practically:**
- Tension-composition teaches HOW to find metaphors from content tensions
- NOT: "Use geological for depth content"
- YES: "Analyze YOUR content tensions → derive YOUR metaphor → commit before library exposure"
- Perceptual-auditing teaches HOW to verify your implementation preserves identity
- NOT: "This is right/wrong"
- YES: "This spacing creates THIS perceptual effect, which matches/violates identity principles"

### The Complete Jazz Workflow (Parallel to Compositional-Core Workflow)

**Jazz musician building a new arrangement:**

1. **Learn your instrument** (load vocabulary)
   - Practice scales, chords, fingerings
   - = Read tokens.css, components.css, prohibitions.md

2. **Analyze the song** (tension-composition Phases 0-3)
   - What's the melody? What are the chord changes? What's the emotional arc?
   - = What's the content? What are the tensions? What metaphor resolves them?

3. **Commit to your approach** (Phase 3.5 lock-in)
   - "I'm playing this modal, not bebop"
   - = "My metaphor is construction site, not geological"

4. **Study music theory** (mechanism catalog)
   - "Modal harmony works like THIS, rootless voicings work like THAT"
   - = "Border-weight encoding works like THIS, spacing compression works like THAT"

5. **OPTIONALLY listen to other versions** (case studies, Phase 5)
   - "Bill Evans played it THIS way, but I'm playing it DIFFERENTLY"
   - = "Geological case study structured it THIS way, but I'm structuring it DIFFERENTLY"

6. **Play your arrangement** (implement)
   - Use scales + theory + your creative choices
   - = Use tokens + mechanisms + your metaphor

7. **Record and listen back** (perceptual-auditing)
   - "Did I stay in key? Did I resolve tensions? Does it feel like jazz?"
   - = "Did I meet soul constraints? Did I preserve metaphor? Does it feel like KortAI?"

**The outcome:** Original composition that sounds like jazz (follows theory, uses standard vocabulary) but is YOURS (unique interpretation, personal voice).

**The parallel:** Original page that looks like KortAI (follows soul, uses token vocabulary) but is YOURS (unique metaphor, creative resolution).

---

## What NOT To Do — Concrete Anti-Patterns

### Anti-Pattern 1: Reading Case Studies Before Committing Metaphor

**The trap:**
```
User: "Build a page for documentation with depth levels"
Bad process:
  1. Read geological case study (depth metaphor)
  2. "Oh, geological works for depth!"
  3. Use geological structure
```

**Why it's wrong:**
- You pattern-matched to library example
- You didn't derive from YOUR content tensions
- Your metaphor is THEIRS, not yours

**The correct path:**
```
User: "Build a page for documentation with depth levels"
Good process:
  1. Run tension-composition Phases 0-3 (BLIND to library)
  2. YOUR tensions reveal depth + warmth/austerity
  3. YOUR metaphor search yields "archaeological dig"
  4. Lock in "archaeological dig" (Phase 3.5)
  5. Read mechanism catalog for techniques
  6. THEN read geological case study
  7. Divergence table shows: domain SAME (earth), metaphor DIFFERENT (archaeology vs geology), vocabulary DIFFERENT (layers/artifacts vs strata/bedrock)
```

**From ANTI-PRESCRIPTION-TEMPLATE.md:**
> "The trap: 'My content has certainty gradients too, so I'll use geological stratification.'"
> "The correct path: 'My content has certainty gradients. Phase 1-2 tension derivation will reveal MY metaphor.'"

---

### Anti-Pattern 2: Treating Components.css as a Component Library Menu

**The trap:**
```
Bad thinking:
  "I need an info box → components.css has .callout--info → copy that HTML/CSS"
```

**Why it's wrong:**
- Components.css shows VOCABULARY (2-zone DNA pattern), not MENU (ready-to-use components)
- You're using components WITHOUT metaphor derivation
- You're skipping the creative process entirely

**The correct path:**
```
Good thinking:
  "My metaphor is 'construction site' → I need a safety notice component"
  "2-zone DNA from components.css: sparse label + dense body"
  "Applied to MY metaphor: .safety-notice with .safety-notice__header + .safety-notice__alert"
  "Uses SAME pattern (2-zone), DIFFERENT vocabulary (safety-notice, not callout)"
```

**From mechanism-catalog.md:**
> "2-Zone Component DNA: Zone 1 (label): sparse, meta-level, uppercase, 12px. Zone 2 (body): dense, content-level, normal case, 16px."
> "NOT reusable: Label text ('ESSENCE' vs 'FOSSIL' vs 'MAIN HALL')"

**Critical distinction:**
- Components.css = vocabulary of PATTERNS (how to structure 2-zone components)
- NOT: vocabulary of COMPONENTS (pre-built callouts to insert)

---

### Anti-Pattern 3: Copying Case Study Structure for Different Content Type

**The trap:**
```
Bad process:
  Case study: Boris documentation (6,200 words, procedural depth) → geological 6-layer structure
  Your content: Product features (800 words, flat list) → "I'll use 6 layers too!"
```

**Why it's wrong:**
- 6-layer structure came from BORIS content having 6 certainty groupings
- YOUR content has DIFFERENT structure
- You're applying metaphor-specific OUTPUT to different INPUT

**The correct path:**
```
Good process:
  Case study: Boris → geological → 6 layers
  Your content: Product features → YOUR tension analysis → YOUR metaphor
  Result: Maybe 3 layers (current/planned/future), maybe grid (not vertical depth), maybe timeline (not geological)
```

**From ANTI-PRESCRIPTION-TEMPLATE.md Section 5:**
> "✗ 6-layer structure — Specific to THIS content's certainty groupings"
> "Why not reusable: YOUR content may have 3 layers, 10 layers, or continuous spectrum"

---

### Anti-Pattern 4: Skipping Prohibitions

**The trap:**
```
Bad thinking:
  "border-radius: 4px looks nicer → I'll use rounded corners"
  "box-shadow makes it pop → I'll add subtle shadow"
```

**Why it's wrong:**
- Prohibitions are IDENTITY-LEVEL BOUNDARIES, not suggestions
- Violating them = not KortAI anymore
- "Looks nicer" to you ≠ preserves KortAI identity

**The correct path:**
```
Good thinking:
  "I want depth → box-shadow is PROHIBITED"
  "Solid offset depth (mechanism catalog) achieves depth WITHOUT shadow"
  "Use ::after pseudo-element with offset background"
```

**From prohibitions.md:**
> "NEVER Use border-radius > 0 on Any Element"
> "Why it exists: Sharp edges = decisive, confident, print heritage. Rounded corners = friendly, safe, generic. This is THE #1 soul constraint."

**From prohibitions.md:**
> "NEVER Use box-shadow on Any Element"
> "Why it exists: Shadows create false depth through physical light metaphors. KortAI achieves depth through spacing, borders, and background zones."

---

### Anti-Pattern 5: Using Metaphor Vocabulary from Library

**The trap:**
```
Bad implementation:
  Your metaphor: "Factory assembly line"
  Your HTML: <div class="stratum">...</div> <!-- "stratum" is from geological case study -->
```

**Why it's wrong:**
- "stratum" belongs to geological metaphor
- YOUR metaphor is factory → YOUR vocabulary should be factory-related
- You're mixing metaphors incoherently

**The correct path:**
```
Good implementation:
  Your metaphor: "Factory assembly line"
  Your HTML: <div class="assembly-station">...</div>
  Your CSS uses SAME techniques (border-weight, spacing compression) but DIFFERENT names
```

**From ANTI-PRESCRIPTION-TEMPLATE.md Section 5:**
> "✗ Geological vocabulary (strata, bedrock, topsoil, core)"
> "Why not reusable: Only makes sense within geological metaphor"

---

### Anti-Pattern 6: Copying Exact Spacing Values

**The trap:**
```
Bad CSS:
  /* From geological case study */
  .layer-1 { padding: 48px; }
  .layer-2 { padding: 40px; }
  .layer-3 { padding: 32px; }

  /* Your implementation */
  .section-1 { padding: 48px; } /* copied verbatim */
  .section-2 { padding: 40px; }
  .section-3 { padding: 32px; }
```

**Why it's wrong:**
- Those values were derived for BORIS content at SPECIFIC viewport
- YOUR content has DIFFERENT density needs
- You're copying IMPLEMENTATION, not extracting TECHNIQUE

**The correct path:**
```
Good CSS:
  /* Extract TECHNIQUE: spacing compression gradient */

  /* YOUR implementation (different values, same technique) */
  .priority-high { padding: var(--space-12); } /* 48px */
  .priority-medium { padding: var(--space-8); } /* 32px */
  .priority-low { padding: var(--space-4); } /* 16px */

  /* Same PATTERN (compression), different VALUES (tuned to YOUR content) */
```

**From ANTI-PRESCRIPTION-TEMPLATE.md Section 5:**
> "✗ Specific padding values (48px → 40px → 32px → 24px)"
> "Why not reusable: Derived from THIS content's depth needs + viewport constraints"

---

## Summary Checklist — Before Building Any Page

```
□ Step 1: Load vocabulary FIRST
  □ Read tokens.css (all 174 lines)
  □ Read components.css (first 100 lines)
  □ Read prohibitions.md (all 353 lines)

□ Step 2: Run tension-composition Phases 0-3 BLIND
  □ Phase 0: Content assessment + library prohibition
  □ Phase 1: Multi-axis questioning
  □ Phase 2: Tension derivation
  □ Phase 3: Metaphor search
  □ VERIFY: Did NOT read case-studies/ directory

□ Step 3: Lock in metaphor (Phase 3.5)
  □ Write metaphor commitment
  □ Document justification
  □ Verify divergence (or justify convergence)
  □ VERIFY: Metaphor is LOCKED, will NOT change after library consultation

□ Step 4: Read mechanism catalog
  □ Read mechanism-catalog.md (first 200 lines)
  □ Extract 3-5 techniques relevant to YOUR metaphor
  □ VERIFY: Extracted TECHNIQUES, not implementations

□ Step 5: OPTIONALLY read 2-3 case studies
  □ Read _INDEX.md (titles only)
  □ Select 2-3 most similar
  □ Complete divergence table
  □ VERIFY: Divergence confirmed OR convergence justified

□ Step 6: Implement
  □ Use token VALUES (--color-primary, --space-8, etc.)
  □ Apply mechanism TECHNIQUES (adapted to YOUR metaphor)
  □ Generate YOUR vocabulary (not library metaphor terms)
  □ VERIFY: All prohibitions followed (border-radius: 0, box-shadow: none, etc.)

□ Step 7: Verify with perceptual-auditing
  □ Run full audit (soul + sub-agents + squint + comparison + scoring)
  □ Check guardrails (940px container, 16px spacing, 32px padding, 40% compression)
  □ VERIFY: Zero soul violations, all guardrails met
```

---

## The Jazz Model Summary

**What you're learning:**

| Jazz Education | Compositional-Core | What It Means |
|----------------|-------------------|---------------|
| **Scales/chords** | tokens.css | Fixed vocabulary you USE, not invent |
| **Music theory** | mechanism-catalog.md | How elements combine (rules + techniques) |
| **Recordings** | case-studies/ | Proof-of-concept, not templates |
| **Instrument constraints** | prohibitions.md | Physical boundaries that shape creativity |
| **Improvisation course** | tension-composition skill | HOW to derive original work from inputs |
| **Ear training** | perceptual-auditing skill | HOW to verify what you built |

**The outcome:** Jazz that sounds like jazz (follows theory, uses standard scales) but is YOUR unique solo (creative interpretation, personal voice).

**The parallel:** Pages that look like KortAI (follow soul, use token vocabulary) but are YOUR unique designs (creative metaphor, original resolution).

---

**END RESEARCH FILE**
