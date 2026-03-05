# Gap Analysis: Critical Missing Content for Ceiling Execution Prompt

**Author:** gap-analyst (ceiling-prompt-assembly)
**Date:** 2026-02-16
**Task:** Identify critical content from design system files that other extractors likely MISSED

**Files analyzed:**
1. `/design-system/compositional-core/identity/prohibitions.md` (353 lines)
2. `/design-system/compositional-core/vocabulary/tokens.css` (174 lines)
3. `/design-system/compositional-core/guidelines/semantic-rules.md` (380 lines)
4. `/ephemeral/middle-tier-experiment/01-content-selection.md` (313 lines)
5. `/ephemeral/ceiling-prompt-assembly/02-SPECIFICATION-EXTRACTION.md` (910 lines) — for context
6. `/ephemeral/ceiling-prompt-assembly/META-PURPOSE-ALIGNMENT.md` (239 lines) — for context

---

## EXECUTIVE SUMMARY: WHAT'S MISSING

The 7 extraction files focus on **WHAT to build** (mechanisms, binary rules, tier boundaries, modifications). They likely MISS the **WHY constraints exist**, **WHAT defines soul**, and **HOW to make semantic decisions**.

**Critical gaps identified:**

1. **SOUL/IDENTITY RULES** — 22 prohibitions define KortAI through REFUSAL. The execution prompt MUST enforce these, not as checklist items, but as IDENTITY boundaries.

2. **TOKEN USAGE EXPECTATION** — tokens.css exists but there is NO specification on token compliance. Middle achieved 66.5%. What's the Ceiling target?

3. **SEMANTIC DECISION FRAMEWORK** — The 3-Question Test and semantic value framework provide TOOLS for making spacing/border/typography decisions. Without these, agents use arbitrary values.

4. **CONTENT SELECTION CRITERIA** — Middle used infrastructure content (SYSTEM remote Mac control). Should Ceiling use THE SAME content or different? What makes content suitable for Ceiling composition?

5. **EXCEPTION CLAUSES** — Prohibitions have documented exceptions (progressive border weights in AD-F-014, 2px borders in OD-004). The prompt must know these exist.

6. **THE CONVICTION PASSAGE** — Meta-Purpose-Alignment identified the missing creative frame: "The difference between Ceiling and Middle is not complexity. It is conviction."

---

## SECTION 1: SOUL/IDENTITY RULES (From prohibitions.md)

### What the Execution Prompt MUST Enforce

**The execution prompt needs to state these IDENTITY rules explicitly, not just trust that builders know them:**

#### ABSOLUTE PROHIBITIONS (Zero Exceptions, Binary Enforcement)

**The BIG 3 (Visual Soul):**
1. **border-radius: 0** — ALWAYS sharp edges. NEVER > 0. This is THE #1 soul constraint. Sharp geometry IS KortAI identity.
2. **box-shadow: none** — ALWAYS flat design. No shadows anywhere. Depth through spacing/borders/backgrounds, not fake 3D.
3. **filter: drop-shadow() FORBIDDEN** — Same principle as box-shadow. Any shadow effect violates anti-physical identity.

**Color/Palette (4 rules):**
4. **opacity: 1 on all visual elements** — No semi-transparent backgrounds. rgba(0,0,0,0.04) creates same depth illusion as box-shadow. Binary: opacity === 1.0.
5. **No gradient backgrounds** — linear-gradient, radial-gradient forbidden. Flat color principle.
6. **No pure black #000 or pure white #FFF** — Use palette values (#1A1A1A for text, #FEF9F5 for background).
7. **No cool-toned grays (#F5F5F5, #E0E0E0)** — Warm palette only (#FEF9F5 cream, #E0D5C5 tan).

**Typography:**
8. **Instrument Serif ONLY for display headings** — NEVER for body text. Inter is body font. This is locked.

**Anti-Complexity:**
11. **No decorative elements that don't carry information** — Every visual element must have semantic weight. Decoration for decoration's sake is rejected.

#### CONDITIONAL PROHIBITIONS (Documented Exceptions ONLY)

**Border System (3 rules):**
9. **NO 2px borders** — EXCEPT for confidence encoding in OD-004 pattern. Too thin to be architectural signal (4px), too thick to be subtle separator (1px). Creates "neither here nor there" weakness.
10. **NO accent borders < 4px** — EXCEPT for progressive depth encoding (AD-F-014 geological gradient 4px/3px/1px). The 4px left-border is KortAI's signature accent.
13. **No vertical borders in tables** — ALWAYS use horizontal-only borders. Vertical = prison bars. Open grid = breathing room.

**Structural Rules (5 rules):**
12. **NEVER break grid with decoration** — Content-driven asymmetry permitted (pull quotes, emphasis). Decorative grid breaks violate flat design.
14. **NO hover lift effects (transform: translateY)** — Treats content like buttons, fake 3D movement. Content is editorial, not interactive element.
15. **NO traffic-light color adjacency (green next to red)** — Separate with 48px+ spacing or neutral component. Diminishes both colors' authority.
17. **All h3 headings MUST be italic** — Editorial hierarchy convention. No exceptions.
18. **NO same-density stacking (SLOW+SLOW or FAST+FAST adjacent)** — EXCEPT intentional crescendo patterns. Fractal density rhythm requires dense/sparse alternation.

#### META-PROHIBITIONS (Process-Level)

19. **NEVER justify design choices without research provenance** — Every visual decision must trace to research findings.
20. **NEVER create new patterns without tension derivation** — Patterns emerge from content tension resolution, not template reuse.

### What the Prompt MUST Say

**Opening section (before any specifications):**

```
SOUL CONSTRAINTS — NON-NEGOTIABLE IDENTITY

These rules define KortAI through REFUSAL. They are not recommendations.
They are IDENTITY-LEVEL BOUNDARIES with ZERO exceptions.

THE BIG 3 (enforce programmatically):
1. border-radius: 0 — ALWAYS. Sharp edges = decisive, confident. This is
   THE #1 soul constraint.
2. box-shadow: none — ALWAYS. Flat = print heritage, honest. No fake depth.
3. No drop-shadow filter — ALWAYS. Same principle as box-shadow.

ADDITIONAL ABSOLUTES:
4. opacity: 1 on all backgrounds/containers — No transparency tricks
5. No gradient backgrounds — Solid colors only
6. No pure black #000 or pure white #FFF — Use #1A1A1A and #FEF9F5
7. No cool grays (#F5F5F5) — Use warm cream (#FEF9F5)
8. Instrument Serif ONLY for headings — NEVER for body text

CONDITIONAL (documented exceptions):
9. NO 2px borders (epidemic value) — Exception: OD-004 confidence encoding
10. NO accent borders < 4px — Exception: AD-F-014 progressive gradient
13. NO vertical table borders — Horizontal-only, always
17. All h3 MUST be italic — No exceptions
18. NO same-density stacking — Exception: crescendo patterns

Violation of any ABSOLUTE = INVALID work. No "we'll fix it later."
```

### Gap Analysis: What Spec Extraction Missed

**02-SPECIFICATION-EXTRACTION.md covers:**
- Container width 940-960px (NON-NEGOTIABLE)
- Binary rules (9 total)
- Measurement formulas

**What it DOESN'T cover:**
- **WHY border-radius: 0 exists** — "Sharp edges = decisive, confident; rounded = generic. Anti-physical editorial identity."
- **WHY box-shadow is forbidden** — "Shadows = fake 3D, dishonest. Flat = print heritage, honest."
- **The distinction between ABSOLUTE and CONDITIONAL** — 8 rules have zero exceptions, 12 have documented exceptions, 2 are process-level.
- **Exception documentation** — When using 2px borders or progressive gradients, you MUST document: "Using 2px border for [OD-004 confidence pattern]. Exception justified by [pattern reference]."
- **The soul vs specification boundary** — Container width 940-960px is SPECIFICATION (perceptual origin, exceptions documented, crown jewels exceeded it). Border-radius: 0 is SOUL (identity-defining, zero exceptions).

**Recommendation:** The prompt needs a SOUL CONSTRAINTS section BEFORE specifications. Soul = identity (border-radius: 0). Specifications = readability floors (container width 940-960px). Different enforcement levels.

---

## SECTION 2: DESIGN TOKENS (From tokens.css)

### What Tokens Exist

**65 tokens in :root block:**

#### Soul Constraints (2 tokens)
```css
--border-radius: 0;           /* IMMUTABLE — soul: ALWAYS sharp edges */
--box-shadow: none;            /* IMMUTABLE — soul: ALWAYS flat design */
```

#### Color Palette (18 tokens)

**Primary Colors (IMMUTABLE — identity):**
```css
--color-primary: #E83025;        /* Sanrok red - LOCKED */
--color-background: #FEF9F5;     /* Warm cream - LOCKED */
--color-text: #1A1A1A;          /* Near-black - LOCKED */
--color-text-secondary: #666666; /* Muted secondary - LOCKED */
--color-border: #E0D5C5;        /* Warm border - LOCKED */
--color-border-subtle: #F0EBE3; /* Subtle dividers - LOCKED */
```

**Accent Colors (MUTABLE — semantic flexibility):**
```css
--accent-blue: #4A90D9;         /* Info Callout, File Tree */
--accent-green: #4A9D6B;        /* Tip Callout */
--accent-coral: #C97065;        /* Gotcha Callout */
--accent-amber: #D97706;        /* Essence Callout, Reasoning */
--accent-purple: #7C3AED;       /* Challenge Callout */
```

**Background Colors (AVAILABLE — zone differentiation):**
```css
--bg-page: #FAFAFA;             /* Page ground */
--bg-card: #FFFFFF;             /* Elevated zones */
--bg-warm: #FEF9F5;             /* Warm emphasis (Essence) */
--bg-dark: #1E1E1E;             /* Inverted focus (Code) */
--bg-info: #F5F8FA;             /* Info semantic */
--bg-tip: #F5FAF5;              /* Tip semantic */
--bg-gotcha: #FEF6F5;           /* Warning semantic */
--bg-summary: #FEF9F0;          /* Synthesis (Reasoning) */
```

#### Typography (11 tokens)

**Font Families (IMMUTABLE — trinity):**
```css
--font-display: 'Instrument Serif', Georgia, serif;  /* LOCKED */
--font-body: 'Inter', system-ui, sans-serif;         /* LOCKED */
--font-mono: 'JetBrains Mono', 'SF Mono', monospace; /* LOCKED */
```

**Type Scale (MUTABLE — responsive hierarchy):**
```css
--text-xs: 0.75rem;       /* 12px — Labels */
--text-sm: 0.875rem;      /* 14px — Small body */
--text-base: 1rem;        /* 16px — Body baseline */
--text-lg: 1.125rem;      /* 18px — Large body */
--text-h4: 1.25rem;       /* 20px — Small headlines */
--text-h3: 1.5rem;        /* 24px — Section headlines */
--text-h2: 2rem;          /* 32px — Major headlines */
--text-h1: 2.5rem;        /* 40px — Page titles */
```

#### Spacing Scale (24 tokens)

**Core Scale (IMMUTABLE — 4px base unit):**
```css
--space-1: 4px;           /* Base unit - LOCKED */
--space-2: 8px;           /* Within element */
--space-3: 12px;          /* Zone gaps */
--space-4: 16px;          /* Standard separation */
--space-5: 20px;          /* Generous padding */
--space-6: 24px;          /* Component padding */
--space-8: 32px;          /* Section breaks */
--space-10: 40px;         /* Large section breaks */
--space-12: 48px;         /* Page margins */
--space-16: 64px;         /* Major sections (EXHALE) */
--space-20: 80px;         /* Recovery breathing */
--space-24: 96px;         /* Sparse ocean */
```

#### Border Widths (4 tokens)

**Structural Borders (IMMUTABLE — system):**
```css
--border-structural: 4px;     /* Left accent - LOCKED */
--border-accent: 3px;         /* Secondary accent */
--border-micro: 1px;          /* Subtle dividers */
```

#### Syntax Highlighting (7 tokens)

**Dark background code blocks:**
```css
--syntax-keyword: #E83025;      /* Red - keywords */
--syntax-string: #6B9B7A;       /* Green - strings */
--syntax-comment: #666666;      /* Gray - comments */
--syntax-function: #4A7C9B;     /* Blue - functions */
```

### Token Compliance: What's Expected?

**Middle-tier token compliance: 66.5%**
- Builder used raw values like `padding: 36px` instead of `var(--space-9)`
- 20 tokenized values + 10 raw values = 30 total
- (20 / 30) × 100% = 66.7%

**NEW-4 modification (unapplied) specifies 80% target:**
```
Token Compliance Self-Check (Phase 4.8):
- Formula: (tokenized_values / total_values) × 100%
- Target: ≥ 80%
- If < 80% → refactoring required before Phase 5
```

**Gap: The execution prompt has NO token compliance requirement currently.**

### What the Prompt MUST Say

**Section on token usage:**

```
TOKEN USAGE REQUIREMENT

Use design tokens for ALL spacing, color, typography, and border values.

Target: ≥ 80% token compliance
Formula: (count of var(--token) / count of all spacing values) × 100%

CORRECT:
.section { padding: var(--space-8); }
.callout { border-left: var(--border-structural) solid var(--accent-blue); }

WRONG:
.section { padding: 32px; }  /* Use var(--space-8) */
.callout { border-left: 4px solid #4A90D9; }  /* Use tokens */

EXCEPTIONS (raw values allowed):
1. Calculated values: calc(var(--space-8) - 2px)
2. Sub-pixel refinements: 0.5px (subtle dividers)
3. Viewport-relative: clamp(16px, 4vw, 24px)

All other values MUST use tokens from compositional-core/vocabulary/tokens.css.

Before Phase 5 (implementation), verify:
□ Count all spacing/sizing values in CSS
□ Count instances of var(--token)
□ Calculate ratio
□ If < 80% → refactor to use tokens
```

### Gap Analysis: What Spec Extraction Missed

**02-SPECIFICATION-EXTRACTION.md covers:**
- NEW-4 token compliance self-check (formula, 80% target)
- Binary rule #8 (token compliance ≥ 80%)

**What it DOESN'T cover:**
- **Token inventory** — What tokens exist? The prompt can't say "use tokens" without listing them.
- **Token mutability** — Which tokens are IMMUTABLE (--color-primary) vs MUTABLE (--text-h3)?
- **Token categories** — Soul constraints (2), colors (18), typography (11), spacing (24), borders (4), syntax (7).
- **When raw values are allowed** — Exceptions for calc(), sub-pixel, viewport-relative.
- **Middle's actual compliance** — 66.5% was the baseline. Ceiling needs 80%+.

**Recommendation:** The prompt needs a TOKEN INVENTORY section with all 65 tokens categorized. Plus explicit 80% compliance requirement. Plus exception list for raw values.

---

## SECTION 3: SEMANTIC GUIDELINES (From semantic-rules.md)

### The 3-Question Test (CRITICAL DECISION FRAMEWORK)

**From semantic-rules.md lines 283-336:**

This framework provides TOOLS for making spacing/border/typography decisions. Without it, agents use arbitrary values ("looked good," "was on the token scale").

**For EVERY varying CSS value, answer:**

#### Q1: WHAT varies?
Identify the property and its range across the page.

#### Q2: WHY does it vary?
Reference one of:
- **Content structure** (hierarchical depth, section importance, reader journey phase)
- **Metaphor logic** (geological depth, confidence certainty) — Ceiling+ only
- **Pattern logic** (CRESCENDO peaks here, dense stratum, EXHALE section)
- **NOT** "token availability" or "looked good" (these are ARBITRARY)

#### Q3: WHY THESE SPECIFIC VALUES and not adjacent ones on the token scale?
- If answer references content/metaphor/pattern → SEMANTIC
- If answer references "it's on the scale" or "looked good" → ARBITRARY, revise

### Tier-Specific Justification Depth

| Tier | Expected Depth | Example |
|------|---------------|---------|
| **Floor** | None (lookup) | "Callouts use --space-6 per component inventory" |
| **Middle** | Pattern logic | "CRESCENDO peak uses 16px because complexity peaks here" |
| **Ceiling** | Metaphor logic | "Bedrock uses 40px because geological consolidation = sparse" |
| **Flagship** | Multi-dimensional | "20px = confidence (compression) × journey (unfamiliarity) × attention (recovery)" |

### Passing Criteria

- **Middle:** 80%+ varying values justified via pattern logic
- **Ceiling:** 90%+ varying values justified via metaphor logic
- **Flagship:** 95%+ varying values encode multi-dimensional overlaps

### Red Flags (Indicates ARBITRARY Values)

- "It looked good" — aesthetics without structural reasoning
- "It was available on the token scale" — token availability ≠ semantic fit
- "OD-004 used this value" — copied values without YOUR semantic reasoning
- "Padding decreases as page progresses" — pattern without RATIO justification

### Before/After Examples

**Example 1: Section Padding (ARBITRARY vs SEMANTIC)**

❌ **ARBITRARY:**
```css
.section--intro { padding: 48px 24px; }
.section--detail { padding: 40px 24px; }
.section--summary { padding: 32px 24px; }
/* "Padding decreases" — but WHY 48/40/32? No ratio justification. */
```

✅ **SEMANTIC:**
```css
.section--intro { padding: 64px 24px; }
  /* CRESCENDO intro: reader unfamiliar, needs orientation SPACE.
     Maximum breathing. */
.section--detail { padding: 32px 24px; }
  /* CRESCENDO build: reader oriented. 50% compression from intro. */
.section--summary { padding: 16px 24px; }
  /* CRESCENDO peak: reader has full context. Minimum padding = densest.
     RATIO: 64→32→16 = 4:2:1 exponential compression matching
     cognitive familiarity. */
```

**Example 2: Border-Weight (ARBITRARY vs SEMANTIC)**

❌ **ARBITRARY:**
```css
.level-1 { border-left: 4px solid; padding: 40px; }
.level-2 { border-left: 3px solid; padding: 32px; }
.level-3 { border-left: 2px solid; padding: 24px; }
/* Values decrease — but 40→32→24 has no ratio justification */
```

✅ **SEMANTIC:**
```css
.stratum--established { border-left: 4px solid; padding: 40px; }
  /* Bedrock: max weight (4px) + sparse (40px). Consolidation = space. */
.stratum--probable { border-left: 3px solid; padding: 32px; }
  /* Sediment: 75% weight. Partially consolidated. */
.stratum--speculative { border-left: 2px solid; padding: 16px; }
  /* Topsoil: 50% weight + 60% compression from bedrock.
     Gap between probable→speculative is LARGER than established→probable
     because epistemic distance grows non-linearly. */
```

### Gap 1: Info vs Note Callout Selection

**Both use blue (--accent-blue). What content properties distinguish them?**

**Use `callout--info` for:**
- Section-level orientation (before starting a procedure)
- Setting expectations ("What you'll accomplish")
- High-level framing (answers "why am I reading this?")
- Position: Section start (above first content paragraph)

**Use `callout--note` for:**
- Inline warnings attached to specific steps
- Clarifications of ambiguous terminology
- Edge cases or exceptions to rules
- Position: Within content flow (after relevant paragraph)

**Boundary rule:**
- If content applies to **entire section** → Info
- If content applies to **single paragraph/step** → Note

### Gap 2: Inline vs Block Code Selection

**Use inline `<code>` when:**
- Content is ≤1 line (single command, function name, variable)
- No syntax highlighting needed
- Appears within prose (paragraph or list item)

**Use `<pre><code>` block when:**
- Content is ≥2 lines or >50 characters on single line
- Syntax highlighting provides value
- Standalone reference (not mid-sentence)

**Threshold:**
- Line count: 1 line → inline, 2+ lines → block
- Character count: ≤50 chars → inline, >50 chars → consider block

### Gap 4: Breathing-Room Zone Triggers

**Breathing-room zone criteria:**
1. Position: Between major sections/chapters (not within sections)
2. Content length: ≤3 sentences (typically 1-2)
3. Function: Transition or palate cleanser (not primary content)
4. Spacing: ≥48px padding (--space-12 minimum)

**Sparse zone criteria:**
1. Density: Low information per vertical pixel (≤2 paragraphs per viewport)
2. Cognitive load: High-certainty or simple content
3. Padding: 40-80px (--space-10 to --space-20)

**Dense zone criteria:**
1. Density: High information per vertical pixel (4+ paragraphs, code blocks, tables)
2. Cognitive load: Low-certainty or complex content
3. Padding: 16-32px (--space-4 to --space-8)

### Gap 5: Callout Semantic Differentiation

**5 semantic colors, 8 CSS class variants:**

| Semantic Type | Color | Hex | Font | When to Use |
|---------------|-------|-----|------|-------------|
| **Informational (Info/Note)** | Blue | #4A90D9 | Body sans | Procedural context, clarifications |
| **Helpful (Tip)** | Green | #4A9D6B | Body sans | Suggestions, best practices |
| **Wisdom (Essence)** | Amber | #D97706 | Serif italic | Core principles, deep insights |
| **Warning (Gotcha/Warning)** | Red | #E83025 | Body sans | Common mistakes, pitfalls |
| **Challenge (Challenge/Caution)** | Purple | #7C3AED | Body sans | Advanced topics, exercises |

**Essence is special:**
- ONLY callout using serif font
- ONLY callout with italic styling
- Reserved for wisdom/core principles (not procedural content)

### What the Prompt MUST Say

**Section on semantic decision-making:**

```
SEMANTIC VALUE FRAMEWORK (Ceiling-Tier Requirement)

For EVERY varying CSS value (padding, margin, font-size, border-width),
you MUST answer the 3-Question Test:

Q1: WHAT varies?
Identify the property and its range across the page.

Q2: WHY does it vary?
Reference one of:
- Content structure (hierarchical depth, section importance)
- Metaphor logic (YOUR metaphor's semantic dimensions)
- Pattern logic (CRESCENDO peaks, dense stratum, EXHALE section)

NOT ACCEPTABLE: "token availability" or "looked good"

Q3: WHY THESE SPECIFIC VALUES and not adjacent ones?
If answer references content/metaphor/pattern → SEMANTIC ✓
If answer references "it's on the scale" → ARBITRARY ✗ revise

CEILING REQUIREMENT: 90%+ varying values must be justified via
metaphor logic (not just "pattern logic").

EXAMPLE SEMANTIC JUSTIFICATION:
✓ "Bedrock uses 40px because geological consolidation = sparse.
   Established knowledge compresses into stable layers with space between."

✗ "I used 40px because it's on the spacing scale."

RED FLAGS (indicates arbitrary):
- "It looked good"
- "OD-004 used this value"
- "Padding decreases as page progresses" (pattern without ratio)

Before Phase 5, verify: Do 90%+ of your varying values have
metaphor-driven justification?
```

### Gap Analysis: What Spec Extraction Missed

**02-SPECIFICATION-EXTRACTION.md covers:**
- Binary rules (9 total)
- Container width NON-NEGOTIABLE
- Reinforcing pairs (2+ mechanisms encoding same semantic)

**What it DOESN'T cover:**
- **The 3-Question Test** — HOW to make semantic decisions about values
- **Tier-specific justification depth** — Ceiling requires 90% metaphor logic (not pattern logic)
- **Red flags for arbitrary values** — "looked good," "was on scale," "OD-004 used this"
- **Before/After examples** — Concrete CSS showing arbitrary vs semantic
- **Callout selection criteria** — Info vs Note, inline vs block code, breathing-room triggers
- **Semantic differentiation map** — 5 colors, 8 classes, when to use which

**Recommendation:** The prompt needs a SEMANTIC FRAMEWORK section teaching agents HOW to justify values through metaphor logic. Plus the 5 semantic gap rules (Info/Note, inline/block, breathing-room, callout types).

---

## SECTION 4: CONTENT SELECTION CRITERIA (From 01-content-selection.md)

### What Content Was Used for Middle

**Source:** extractions/infrastructure/004-system-remote-mac.md
**Domain:** Infrastructure / Mac automation / AI agent systems
**Word Count:** 1,184 words

**Structural breakdown:**
1. Prose paragraphs: 12+ (explaining concepts, architecture rationale)
2. Code blocks: 9 (bash commands, TypeScript security layers)
3. Tables: 3 data tables (Features, Threat Model, Security comparison)
4. Step sequences: 3 (Desktop App setup, CLI setup, Hardening)
5. Headings: 3 levels (h3, h4, h5)
6. Lists: 4+ bulleted lists
7. ASCII diagrams: 1 large architecture diagram (Brain/Tunnel/Body)

**A2 Criteria (Content Requirements) — ALL PASSED:**
- 800-1,200 words ✓
- ≥ 3 paragraphs of prose ✓
- ≥ 2 code blocks ✓
- ≥ 2 callout/tip/warning elements ✓
- 2+ heading levels ✓
- ≥ 1 data table ✓
- ≥ 1 step sequence (3+ steps) ✓
- Domain NOT scientific calibration ✓
- NOT about the design system itself ✓
- Recognizable genre (technical reference/tutorial) ✓

**A3 Criteria (Structural Diversity) — ALL PASSED:**
- ≥ 4 element types ✓ (7 types present)
- No single type > 60% ✓ (Prose ~40%, code ~20%, tables ~15%, other ~25%)

### Should Ceiling Use THE SAME Content or Different?

**CRITICAL DECISION:** The prompt must specify content source.

**Option 1: Use THE SAME content (SYSTEM remote Mac control)**

**Pros:**
- Direct comparison possible (Middle vs Ceiling, same content)
- Controls for content variability
- Validates that tier difference is PROCESS, not content

**Cons:**
- Same content = comparison becomes unavoidable (risks pattern-matching)
- Middle already produced border-weight gradient on security layers (builder may replicate)
- Brain/Tunnel/Body architecture was Middle's strongest section (may anchor thinking)

**Option 2: Use DIFFERENT content (similar domain, different topic)**

**Pros:**
- Prevents direct comparison / pattern-matching
- Forces fresh metaphor derivation
- Tests vocabulary transfer (can mechanisms apply to NEW content?)

**Cons:**
- Content variability confounds tier comparison
- May select content that's harder/easier than Middle
- Loses ability to say "same content, richer expression"

**Option 3: Use SAME domain, DIFFERENT article**

**Pros:**
- Controls for domain knowledge (infrastructure/Mac automation)
- Prevents direct pattern-matching (different architecture)
- Allows domain vocabulary transfer (still technical docs)

**Cons:**
- Requires selecting comparable content (800-1200 words, structural diversity)
- May accidentally select easier/harder content

### Recommendation from 01-content-selection.md

**Lines 309-313:**

> I confirm I did not read mechanism-catalog.md, case-studies, or any
> mechanism vocabulary before selecting this content. Content was
> extracted from extractions/infrastructure/004-system-remote-mac.md.
>
> The selection was made purely on structural merit: mixed technical
> content with tables, code blocks, prose, step sequences, and ASCII
> diagrams representing a real-world infrastructure tutorial.

**Implication:** Middle content was selected BEFORE any mechanism vocabulary. Ceiling should follow SAME protocol: select on structural merit, NOT mechanism applicability.

### What Makes Content Suitable for Ceiling Composition?

**From A2/A3 criteria:**

**Required structure:**
- 800-1,200 words (enough content for composition, not so much it overwhelms)
- Mixed element types (prose + code + tables + diagrams)
- ≥ 4 element types, no single type > 60% (structural diversity)
- Recognizable genre (technical reference, tutorial, guide)

**Content properties that enable Ceiling:**
- **Hierarchical structure** — Sections with clear importance gradients
- **Conceptual depth** — Ideas that can be stratified (basic → advanced, concrete → abstract)
- **Procedural + explanatory balance** — Not pure reference (too flat), not pure narrative (no structure)
- **Visual + textual mix** — Diagrams/tables create spatial opportunities

**Content to AVOID for Ceiling:**
- Pure API reference (too flat, no hierarchy)
- Pure narrative (no structural anchors)
- Scientific calibration (domain excluded per A2.8)
- Design system meta-content (per A2.9)

### What the Prompt MUST Say

**Section on content selection:**

```
CONTENT SELECTION (For Ceiling Experiment)

OPTION A: Use THE SAME content as Middle-tier experiment
Source: extractions/infrastructure/004-system-remote-mac.md
Domain: Infrastructure / Mac automation / AI agent systems
Word Count: 1,184 words

Structural elements:
- 12+ prose paragraphs
- 9 code blocks (bash + TypeScript)
- 3 data tables
- 3 step sequences
- 1 ASCII diagram (Brain/Tunnel/Body architecture)

OPTION B: Use DIFFERENT content (if avoiding direct comparison)
Requirements:
- 800-1,200 words
- ≥ 4 element types (prose, code, tables, diagrams)
- No single type > 60%
- Hierarchical structure (enables depth encoding)
- Conceptual depth (basic → advanced gradient)
- Procedural + explanatory balance

AVOID:
- Pure API reference (too flat)
- Pure narrative (no structure)
- Scientific calibration (domain excluded)
- Design system meta-content

RECOMMENDATION: [To be decided by master assembler]
If using SAME content → enables direct Middle/Ceiling comparison
If using DIFFERENT → prevents pattern-matching, tests transfer
```

### Gap Analysis: What Spec Extraction Missed

**02-SPECIFICATION-EXTRACTION.md covers:**
- Binary rules (9)
- Tier boundaries (reinforcing pairs, scale coverage)
- Modifications (M1, NEW-2, etc.)

**What it DOESN'T cover:**
- **Content source** — WHAT content will Ceiling use?
- **Content selection criteria** — WHAT makes content suitable for Ceiling?
- **Middle's content breakdown** — 12 paragraphs, 9 code blocks, 3 tables, 1 diagram
- **A2/A3 criteria** — Structural diversity requirements (4+ types, none > 60%)
- **Same vs different decision** — Should Ceiling reuse Middle content or select new?

**Recommendation:** The prompt MUST specify content source (Option A or B). If Option B, include A2/A3 criteria for selection. If Option A, acknowledge comparison implications.

---

## SECTION 5: EXCEPTION CLAUSES (From prohibitions.md)

### Documented Exceptions to Prohibitions

**The execution prompt needs to know these exceptions exist, otherwise agents will FAIL when legitimate patterns require them.**

#### Exception 1: 2px Borders (Conditional Prohibition #9)

**Rule:** NO 2px borders (epidemic value)

**Exception:** OD-004 confidence encoding pattern uses 2px borders as part of semantic system

**Documentation requirement:**
```
If using 2px borders, you MUST document:
"Using 2px border for [specific confidence encoding pattern from OD-004].
Exception justified by [pattern reference]."
```

**Source:** prohibitions.md lines 135-150

#### Exception 2: Progressive Border-Weight Gradient (Conditional Prohibition #10)

**Rule:** NO accent borders < 4px

**Exception:** AD-F-014 geological depth encoding uses progressive border-weight gradient (4px/3px/1px) for stratification

**Documentation requirement:**
```
If using borders < 4px, you MUST document:
"Using border-weight gradient [4px/3px/1px] for depth encoding per AD-F-014.
Exception justified by [geological stratification pattern]."
```

**Source:** prohibitions.md lines 152-167

#### Exception 3: Container Width Internal Narrowing (Spec Rule)

**Rule:** Container width 940-960px NON-NEGOTIABLE

**Exception:** Internal padding to create narrow aesthetic

**Correct implementation:**
```css
.page-container {
  max-width: 960px; /* Non-negotiable floor */
  margin: 0 auto;
}
.content-core {
  padding: 0 120px; /* Internal narrowing preserves container width */
}
/* Result: 960px container + 240px padding = 720px effective content width */
```

**Source:** 02-SPECIFICATION-EXTRACTION.md lines 66-74

#### Exception 4: Same-Density Stacking (Conditional Prohibition #18)

**Rule:** NO same-density stacking (SLOW + SLOW or FAST + FAST adjacent)

**Exception:** Intentional crescendo patterns (PULSE, CRESCENDO) where density BUILDS toward climax

**Documentation requirement:**
```
If using same-density stacking, you MUST document:
"Using [CRESCENDO / PULSE] pattern from [source]. Exception justified by
intentional density arc from [sparse → dense → resolution]."
```

**Source:** prohibitions.md lines 274-290

### What the Prompt MUST Say

**Section on exceptions:**

```
DOCUMENTED EXCEPTIONS TO PROHIBITIONS

The following prohibitions have SPECIFIC, DOCUMENTED exceptions.
Outside these contexts, they remain prohibited.

EXCEPTION 1: 2px Borders (Conditional Prohibition #9)
Rule: NO 2px borders (epidemic value)
Exception: OD-004 confidence encoding pattern
If using: Document "Using 2px border for [OD-004 pattern]. Exception: [ref]."

EXCEPTION 2: Progressive Border Gradient (Conditional Prohibition #10)
Rule: NO accent borders < 4px
Exception: AD-F-014 geological gradient (4px/3px/1px)
If using: Document "Using gradient [4px/3px/1px] per AD-F-014. Exception: [geological stratification]."

EXCEPTION 3: Internal Narrowing (Container Width)
Rule: Container width 940-960px NON-NEGOTIABLE
Exception: Internal padding to create narrow aesthetic
Correct:
  .page-container { max-width: 960px; }  /* Preserve 940-960px */
  .content-core { padding: 0 120px; }    /* Internal narrowing */

EXCEPTION 4: Same-Density Stacking (Conditional Prohibition #18)
Rule: NO same-density stacking
Exception: Intentional crescendo patterns (PULSE, CRESCENDO)
If using: Document "Using [pattern] from [source]. Exception: density arc [sparse → dense]."

ALL OTHER PROHIBITIONS HAVE ZERO EXCEPTIONS.
```

### Gap Analysis: What Spec Extraction Missed

**02-SPECIFICATION-EXTRACTION.md covers:**
- Container width 940-960px NON-NEGOTIABLE (includes internal padding escape hatch)
- Binary rules (9 total)

**What it DOESN'T cover:**
- **2px border exception** — OD-004 confidence encoding is documented use case
- **Progressive border gradient exception** — AD-F-014 geological stratification
- **Same-density stacking exception** — Crescendo patterns build intentionally
- **Documentation requirement** — All exceptions MUST be documented with pattern reference

**Recommendation:** The prompt needs an EXCEPTIONS section listing all 4 documented exceptions plus documentation template. Otherwise agents will (a) violate prohibitions when they shouldn't, or (b) avoid legitimate patterns because they think they're prohibited.

---

## SECTION 6: THE CONVICTION PASSAGE (From META-PURPOSE-ALIGNMENT.md)

### What Meta-Purpose-Alignment Identified

**Lines 212-217:**

> If I could add one thing to the prompt's DNA, it would be this passage,
> placed at the very top, before any rules or specifications:
>
> **THE DIFFERENCE BETWEEN CEILING AND MIDDLE IS NOT COMPLEXITY. IT IS CONVICTION.**
>
> A Middle page applies mechanisms to content. A Ceiling page transforms
> content through a metaphor. The mechanisms are the same. The tokens are
> the same. The difference is that in a Ceiling page, if you asked "why is
> this section structured this way?" the answer would begin with the metaphor,
> not with the checklist.
>
> Your metaphor is not a label. It is the load-bearing structure. If the
> metaphor collapsed, the page should collapse with it. If the metaphor
> changed, the page structure should change with it. Test every structural
> decision against this: "does this serve the metaphor, or does this serve
> the checklist?" When the answer is "checklist," reconsider.

### Why This Matters

**The 92-spec problem (from META-PURPOSE-ALIGNMENT lines 142-147):**

> 92 specs won't produce excellence. They'll produce compliance. The agent
> will satisfy all 92 and produce a page that passes every check and feels
> like an exam answer. What 92 specs CAN do is prevent the worst failure
> modes (missing footer, container width violation, 2-category-only deployment).
> But they cannot produce the best outcomes (semantic unity, "felt through"
> quality, the reader saying "this page has a point of view").

**The missing ingredient:**

> The missing ingredient is not another extraction. It's a creative frame —
> the understanding that Ceiling's differentiator is not quantitative (more
> mechanisms, more scales, more checks) but qualitative (every decision
> serving a unified vision).

### What the Prompt MUST Say

**Opening passage (BEFORE any specifications):**

```
═══════════════════════════════════════════════════════════════════════
THE DIFFERENCE BETWEEN CEILING AND MIDDLE IS NOT COMPLEXITY.
IT IS CONVICTION.
═══════════════════════════════════════════════════════════════════════

A Middle page applies mechanisms to content.
A Ceiling page transforms content through a metaphor.

The mechanisms are the same. The tokens are the same.
The difference is that in a Ceiling page, if you asked "why is this
section structured this way?" the answer would begin with the metaphor,
not with the checklist.

Your metaphor is not a label. It is the load-bearing structure.

If the metaphor collapsed, the page should collapse with it.
If the metaphor changed, the page structure should change with it.

Test every structural decision against this:
"Does this serve the metaphor, or does this serve the checklist?"

When the answer is "checklist," reconsider.

THIS PAGE SHOULD HAVE A POINT OF VIEW.

Not "here is documentation, arranged with mechanisms."
But "this content IS [your metaphor], and the page structure
EMBODIES that metaphor at every scale."

═══════════════════════════════════════════════════════════════════════

What follows are the specifications, guardrails, and binary rules.
These PREVENT failure. They do not PRODUCE excellence.

Excellence comes from conviction: the metaphor as load-bearing structure.

═══════════════════════════════════════════════════════════════════════
```

### Gap Analysis: What ALL Extractors Missed

**ALL 7 extraction files are QUANTITATIVE:**
- Mechanisms (18)
- Binary rules (9)
- Modifications (M1, NEW-2, etc.)
- Reinforcing pairs (2+ minimum)
- Scale coverage (4 scales)
- Token compliance (80%)
- CPL maximum (80)

**NONE are QUALITATIVE:**
- Does the page have a point of view?
- Does the metaphor create structural obligation?
- Would changing the metaphor require changing the structure?
- Does every decision serve the metaphor or the checklist?

**Recommendation:** The conviction passage MUST open the execution prompt. It provides the creative frame that 92 specs cannot. Without it, Ceiling produces "Middle with more mechanisms" instead of "Middle with conviction."

---

## SECTION 7: WHAT THE MASTER ASSEMBLER MUST DO

### Critical Additions to Execution Prompt

**1. CONVICTION PASSAGE (opening, before all specs)**
- Source: META-PURPOSE-ALIGNMENT.md lines 212-217
- Placement: First section, before SOUL CONSTRAINTS
- Purpose: Creative frame (qualitative goal, not quantitative)

**2. SOUL CONSTRAINTS SECTION (before specifications)**
- Source: prohibitions.md
- Content: 8 absolute prohibitions (border-radius: 0, box-shadow: none, etc.)
- Format: Binary enforcement (NON-NEGOTIABLE, zero exceptions)
- Distinction: Soul = identity (border-radius: 0), Specification = readability (container width 940-960px)

**3. TOKEN INVENTORY + 80% COMPLIANCE TARGET**
- Source: tokens.css
- Content: 65 tokens categorized (soul 2, colors 18, typography 11, spacing 24, borders 4, syntax 7)
- Mutability: IMMUTABLE vs MUTABLE classification
- Requirement: ≥ 80% token compliance (formula provided)
- Exceptions: calc(), sub-pixel, viewport-relative

**4. SEMANTIC FRAMEWORK (3-Question Test)**
- Source: semantic-rules.md lines 283-336
- Content: Q1 (what varies), Q2 (why), Q3 (why these values)
- Tier requirement: Ceiling = 90% metaphor logic justification
- Red flags: "looked good," "was on scale," "OD-004 used this"
- Before/After examples: Arbitrary vs semantic CSS

**5. SEMANTIC GAP RULES (5 rules from semantic-rules.md)**
- Gap 1: Info vs Note callout selection (section-level vs inline)
- Gap 2: Inline vs block code (1 line vs 2+, ≤50 chars vs >50)
- Gap 4: Breathing-room zone triggers (≤3 sentences, ≥48px padding)
- Gap 5: Callout semantic differentiation (5 colors, 8 classes, when to use which)

**6. DOCUMENTED EXCEPTIONS (4 exceptions to prohibitions)**
- Exception 1: 2px borders (OD-004 confidence encoding)
- Exception 2: Progressive border gradient (AD-F-014 geological)
- Exception 3: Internal narrowing (container width escape hatch)
- Exception 4: Same-density stacking (crescendo patterns)
- Template: "Using [X] for [pattern]. Exception justified by [ref]."

**7. CONTENT SOURCE DECISION**
- Option A: Use SAME content as Middle (SYSTEM remote Mac control)
- Option B: Use DIFFERENT content (A2/A3 criteria provided)
- Recommendation: To be decided by master assembler
- Implication: Option A enables comparison, Option B prevents pattern-matching

### What Can Be Removed/Compressed

**The 92-spec problem applies here too. The prompt should be TIGHT, not exhaustive.**

**Keep (binary, enforceable):**
- 8 absolute prohibitions
- Container width 940-960px
- Per-category minimum 1+ (M1)
- Reinforcing pairs 2+ minimum
- Scale coverage 4 scales
- Token compliance 80%
- 3-Question Test

**Compress (from 7 files to unified sections):**
- Mechanism inventory (from mechanism-catalog.md, just list 18 with categories)
- Modification status (from MODIFICATION-INVENTORY.md, just CRITICAL items M1 + NEW-2)
- Tier boundaries (from VERBIAGE-ANALYSIS.md, just Middle vs Ceiling table)

**Remove (procedural overhead):**
- 62-item checklist (too granular for prompt)
- Phase numbers (4.7B, 4.2C) — agents don't need internal phase IDs
- Exact file names for agent outputs (coordination detail, not creative requirement)
- Scoring rubrics (audit task, not building task)

### Estimated Prompt Size

**Current extraction total: ~13,000 lines across 7 files**

**Recommended prompt size: 800-1200 lines**

**Section breakdown:**
1. Conviction passage: 40 lines
2. Soul constraints: 80 lines (8 absolute + 12 conditional + 2 meta)
3. Token inventory + compliance: 100 lines (65 tokens + 80% requirement)
4. Semantic framework: 120 lines (3-Question Test + examples)
5. Semantic gap rules: 60 lines (5 rules)
6. Binary specifications: 150 lines (container, M1, pairs, scales, CPL, rhythm, landmarks, token)
7. Documented exceptions: 50 lines (4 exceptions)
8. Tier boundaries: 60 lines (Middle vs Ceiling table)
9. Content source: 40 lines (Option A or B)
10. Mechanism inventory: 100 lines (18 mechanisms + categories)
11. Modification status: 60 lines (M1, NEW-2, NEW-1, NEW-4)
12. Verification checklist: 40 lines (soul check, perceptual audit, divergence)

**Total: ~900 lines (achievable, focused)**

### Quality Criteria for Master Assembler

**The prompt should:**
1. **Open with conviction** (qualitative goal), then specifications (quantitative floors)
2. **Distinguish soul from specification** (border-radius: 0 vs container width 940-960px)
3. **Provide decision tools** (3-Question Test, semantic gap rules, exception documentation)
4. **State enforcement levels clearly** (ABSOLUTE zero exceptions, CONDITIONAL documented exceptions)
5. **Include concrete examples** (arbitrary vs semantic CSS, before/after)
6. **Specify content source** (Option A or B, with justification)
7. **List token inventory** (can't say "use tokens" without showing which ones exist)
8. **Focus on WHAT (outcomes) not HOW (process)** — agents don't need phase IDs, just requirements

**The prompt should NOT:**
1. Prescribe exact workflows (phase 4.7B → 4.8 → 5.1)
2. Include 62-item checklists (too granular)
3. Specify agent file names (coordination overhead)
4. Repeat specifications across multiple sections (DRY principle)
5. Include audit rubrics (that's post-build verification, not building requirements)

---

## SECTION 8: FINAL RECOMMENDATIONS

### For Master Assembler

**CRITICAL PRIORITIES (apply before Ceiling experiment):**

1. **Add conviction passage** — Opening section, before all specs. This is THE qualitative frame.

2. **Add soul constraints section** — 8 absolute + 12 conditional + 2 meta prohibitions. Distinct from specifications.

3. **Add token inventory + 80% compliance** — List all 65 tokens, specify ≥ 80% target, provide formula.

4. **Add semantic framework** — 3-Question Test, tier requirements (90% metaphor logic for Ceiling), red flags, before/after examples.

5. **Decide content source** — Option A (same as Middle) or Option B (different). This is BLOCKING decision.

6. **Add documented exceptions** — 4 exceptions to prohibitions, with documentation template.

7. **Add semantic gap rules** — Info vs Note, inline vs block, breathing-room, callout types.

**HIGH PRIORITIES (strengthen prompt quality):**

8. **Compress 7 extractions into unified sections** — Eliminate redundancy, focus on binary requirements.

9. **Remove procedural overhead** — Phase IDs, file names, scoring rubrics don't belong in builder prompt.

10. **Provide concrete examples** — Before/after CSS (arbitrary vs semantic), exception documentation templates.

**MEDIUM PRIORITIES (can defer if size constrained):**

11. **Include 40-50 lines from CD-006** — Quality exemplar passage (not full page).

12. **Add "load-bearing metaphor test"** — "If metaphor changed, would structure change? If no, metaphor is decorative."

### For Ceiling Experiment Success

**The execution prompt needs:**
- **Creative conviction** (qualitative goal) + **Binary floors** (quantitative minimums)
- **Decision tools** (3-Question Test, semantic gaps) + **Constraint boundaries** (prohibitions, exceptions)
- **Token inventory** (what exists) + **Compliance target** (80% minimum)
- **Content specification** (SYSTEM or different) + **Selection criteria** (A2/A3 if different)

**The execution prompt does NOT need:**
- 92 specs in exhaustive detail
- Phase-by-phase procedural choreography
- 62-item granular checklists
- Audit scoring rubrics (that's post-build)

**Success metric:**

> "Does the page have a point of view?" — not "does it pass all 92 checks?"

If the prompt produces Ceiling pages that pass every binary rule but feel like "Middle with more mechanisms," the qualitative frame (conviction) was insufficient.

If the prompt produces Ceiling pages that violate container width or soul constraints, the quantitative floors (prohibitions, guardrails) were insufficient.

**Both are required. Neither alone is sufficient.**

---

## END GAP ANALYSIS

**Files that MUST be integrated into master prompt:**
1. ✅ prohibitions.md (soul constraints, 22 prohibitions, exceptions)
2. ✅ tokens.css (65 tokens, 80% compliance target)
3. ✅ semantic-rules.md (3-Question Test, 5 gap rules, examples)
4. ✅ 01-content-selection.md (content source decision, A2/A3 criteria)
5. ✅ META-PURPOSE-ALIGNMENT.md (conviction passage, qualitative frame)
6. ✅ 02-SPECIFICATION-EXTRACTION.md (binary rules, tier boundaries)

**Critical additions identified:**
- Conviction passage (qualitative goal)
- Soul constraints section (identity boundaries)
- Token inventory + compliance (80% target)
- Semantic framework (decision tools)
- Semantic gap rules (Info/Note, inline/block, breathing-room, callout types)
- Documented exceptions (4 exceptions with templates)
- Content source decision (Option A or B)

**Estimated prompt size after integration: 800-1200 lines**

**Quality criterion: Does the page have a point of view?**

---

**This gap analysis is complete and ready for the master assembler.**
