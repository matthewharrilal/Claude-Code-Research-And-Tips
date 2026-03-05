# Experiment Prompt: Hybrid Agent

You are participating in a design system analysis experiment. Your ONLY task is to analyze the design system whose source files are provided below and produce a detailed written analysis.

You have NO access to any files beyond what is included in this prompt. Everything you need is here. Do not attempt to read, search, or access any external resources.

---

## READING PROTOCOL

Before analyzing, use these questions to guide your engagement with the source files below. These are thinking tools, not output requirements — use them to deepen your reading, not as a checklist.

**As you read each file, ask yourself:**
1. What does this system REFUSE, and what does each refusal REVEAL about its character?
2. Where does this system contradict itself? Find at least one internal tension.
3. Pick one constraint — how does it GENERATE design possibilities rather than just prevent them?
4. Describe this system using NO visual vocabulary. (Force yourself to translate properties into character.)
5. What surprised you?

**The "sentence with but" test:** After reading all files, characterize the system in ONE sentence using "but" or "yet" to capture its internal contradiction. Example: "This system is X, but it also Y — which means Z." If you cannot write this sentence, you haven't engaged deeply enough. Re-read.

---

## DESIGN SYSTEM SOURCE FILES

The following are the actual source files of a design system. Read them carefully and form your own understanding of what this system IS.

### FILE 1: prohibitions.md
```
# Prohibitions — Identity-Bearing Negative Rules

**Lens Statement:** I am using Identity + Enablement hybrid lens. This prioritizes soul preservation and creative freedom over frequency and completeness.

**Date:** 2026-02-14
**Extractor:** prohibition-extractor (agent)
**Purpose:** Extract identity-bearing prohibitions that define KortAI by what it REFUSES

---

## What This Document IS

These prohibitions define KortAI identity through CONSTRAINTS. Each uses NEVER/ALWAYS language because binary rules achieve 100% agent compliance (metacognition finding from MEMORY.md).

These are NOT recommendations. They are IDENTITY-LEVEL BOUNDARIES.

---

## ABSOLUTE PROHIBITIONS (No Exceptions, EVER)

These define KortAI by what it REFUSES. They protect the ANTI-PHYSICAL editorial identity.

### 1. NEVER Use border-radius > 0 on Any Element

**Why it exists:** Sharp edges = decisive, confident, print heritage. Rounded corners = friendly, safe, generic. This is THE #1 soul constraint. Sharp geometry IS KortAI identity.

**What it protects:** Visual soul (anti-physical aesthetic), geometric precision, editorial authority

**Evidence:**
- `geometry.md` lines 31-32: "border-radius: 0 on EVERYTHING (LOCKED, NO EXCEPTIONS) — Sharp edges = decisive, confident; rounded = generic. This is the #1 soul constraint"
- `anti-patterns/registry.md` lines 59-72: "Could be any UI kit... sharp edges = decisive, confident"
- AD validation: "border-radius: 0 was verified as GENERATIVE, not merely restrictive — the angular spiral in AD-004 exists BECAUSE of this constraint (AD-F-013)"
- Identity-lens.md line 30: "border-radius: 0 EVERYWHERE — Zero rounded corners, always"

---

### 2. NEVER Use box-shadow on Any Element

**Why it exists:** Shadows create false depth through physical light metaphors. KortAI achieves depth through spacing, borders, and background zones. Flat = print heritage, honest.

**What it protects:** Anti-physical identity, flat design principle, honest representation

**Evidence:**
- `geometry.md` lines 88-95: "box-shadow: none on EVERYTHING. No exceptions. Why? Shadows = fake 3D, dishonest. Flat = print heritage, honest."
- AD validation: "AD-005 (Choreography) produced the strongest evidence via ANTI-PHYSICAL identity (AD-F-020): 20 CONDITIONAL PASS R-4 findings required reinterpretation from 'visual movement' to 'structural movement.' Any technique implying physical object behavior (including shadows) fails the soul test."
- `anti-patterns/registry.md` lines 76-89: "Fake 3D, dishonest, breaks flat design principle"
- Identity-lens.md line 31: "box-shadow: none EVERYWHERE — No shadows, no depth illusion"

---

### 3. NEVER Use filter: drop-shadow() on Any Element

**Why it exists:** Same principle as box-shadow — physical reality metaphors (light casting shadows) contradict KortAI's abstract precision. Any shadow effect violates anti-physical identity.

**What it protects:** Anti-physical identity, flat aesthetic consistency

**Evidence:**
- `geometry.md` line 151: "Drop shadow: NEVER"
- Identity-lens.md line 32: "filter: drop-shadow() FORBIDDEN — No shadow effects"
- Soul-constraints.md: "filter: none (no drop-shadow) — WHY: Same principle as box-shadow — physical reality metaphors (light casting shadows) contradict KortAI's abstract precision."

---

### 4. NEVER Use Semi-Transparent Backgrounds (opacity < 1 on Visual Elements)

**Why it exists:** Any opacity < 1.0 on offset pseudo-elements or backgrounds creates the same visual effect as box-shadow — a depth illusion that violates the ANTI-PHYSICAL identity. Embedded rgba backgrounds survive multiple review layers but are soul violations.

**What it protects:** Anti-physical identity, flat depth encoding

**Evidence:**
- `anti-patterns/registry.md` lines 329-354: "OD-AP-003: Semi-Transparent Backgrounds (Systemic Audit Gap) — Found in EVERY wave of re-enrichment... opacity < 1.0 on offset pseudo-elements creates the same visual effect as box-shadow... Binary rule: opacity === 1.0 on all visual elements. No exceptions."
- Identity-lens.md line 33: "opacity: 1 on all backgrounds — No transparency tricks"
- Re-enrichment finding: "rgba(0,0,0,0.04) on callout inline code and troubleshoot inline code" found in multiple waves

---

### 5. NEVER Use Gradient Backgrounds (linear-gradient, radial-gradient, etc.)

**Why it exists:** Gradients imply light sources, dimensional depth, or decorative complexity. All contradict flat editorial identity.

**What it protects:** Flat color principle, anti-complexity, honest representation

**Evidence:**
- Identity-lens.md line 282: "Gradient backgrounds — Violates flat color principle"
- Anti-patterns registry concept: "Decorative effects" category includes gradients as neumorphism/glassmorphism violations
- Enablement-lens.md: Flat backgrounds only (implied from all examples)

---

### 6. NEVER Use Pure Black (#000000) or Pure White (#FFFFFF)

**Why it exists:** KortAI uses warm earth tones. Pure black = harsh, digital. Pure white = sterile, clinical. The warm cream background (#FEF9F5) and soft black text (#1A1A1A) create the distinctive editorial warmth.

**What it protects:** Warm palette identity, editorial tone, visual warmth

**Evidence:**
- `geometry.md` implied (use palette values only)
- Identity-lens.md line 53: "Soft black (never pure #000)" and line 283: "Pure black (#000) or pure white (#FFF) — Violates warm palette"
- `anti-patterns/registry.md` lines 113-124: "Gray Backgrounds — What: background: #F5F5F5 or similar cool grays. Why it fails: Sterile, institutional, not editorial. Alternative: Warm cream (#FEF9F5)"
- Lens-manifesto.md line 266: "No pure black (#000) or pure white (#FFF)"

---

### 7. NEVER Use Instrument Serif for Body Text

**Why it exists:** Instrument Serif is DISPLAY ONLY (headings, titles). Using it for body text destroys the typography trinity and makes long-form reading difficult. Inter is body font.

**What it protects:** Typography hierarchy, readability, editorial voice

**Evidence:**
- `geometry.md` (implied from typography trinity structure)
- Identity-lens.md lines 71-79: "Typography Trinity... Instrument Serif on H1s gives the distinctive 'literary documentation' feel. Inter for body creates clean readability."
- Lens-manifesto.md line 265: "Serif NOT for body text (only display headings)"
- `anti-patterns/registry.md` lines 172-188: "Sans-Serif for Essence Body... Using Inter for Essence Callout body text... Loses reverent, archival quality. Alternative: Instrument Serif italic [FOR ESSENCE ONLY, not general body text]"

---

### 8. NEVER Use Rounded Corners for Decoration (Redundant Reinforcement of #1)

**Why it exists:** This prohibition has distinct intent from #1 — this is about COSMETIC SOFTENING vs geometric precision. Rounding corners to "make things friendly" is a design philosophy KortAI explicitly rejects.

**What it protects:** Angular identity, anti-friendly-design philosophy, decisiveness

**Evidence:**
- `anti-patterns/registry.md` lines 59-62: "Signals 'safe/generic' — could be any UI kit. Alternative: border-radius: 0 — sharp edges = decisive, confident"
- Identity-lens.md line 280: "Rounded corners (border-radius > 0) — INSTANTLY breaks anti-physical identity"
- Lens-manifesto.md cosmetic vs structural distinction (implied)

---

## CONDITIONAL PROHIBITIONS (Documented Exceptions ONLY)

These have SPECIFIC, DOCUMENTED contexts where they DO NOT apply. Outside those contexts, they are prohibited.

### 9. NEVER Use 2px Borders (EXCEPT for Confidence Encoding in OD-004 Pattern)

**Why it exists:** 2px borders are structurally ambiguous — too thin to be architectural signal (like 4px callout border), too thick to be subtle separator (like 1px divider). Creates "neither here nor there" visual weakness.

**Exception:** OD-004 uses 2px borders as part of confidence-encoding system (specific, documented pattern).

**What it protects:** Visual hierarchy clarity, structural border weights

**Evidence:**
- `anti-patterns/registry.md` lines 282-307: "OD-F-AP-001: 2px Border Epidemic — 108 CSS declarations, 1000+ computed instances... too thin to be a strong architectural signal (like the 4px callout left-border), too thick to be a subtle separator (like 1px dividers)"
- `geometry.md` line 120: "The 2px width is deliberately skipped to avoid the 2px epidemic anti-pattern (OD-F-AP-001)"
- Identity-lens.md line 42: "NO 2px BORDERS ever — Forbidden epidemic value"
- OD granular audit: "#1 systemic issue identified"

**Exception documentation:** If using 2px borders, you MUST document: "Using 2px border for [specific confidence encoding pattern from OD-004]. Exception justified by [pattern reference]."

---

### 10. NEVER Use Accent Borders < 4px (EXCEPT for Progressive Depth Encoding)

**Why it exists:** The 4px left-border is KortAI's signature accent. Too subtle (1-2px) doesn't register as intentional. 3px is minimum for structural borders, 4px is standard for callout accents.

**Exception:** AD-004 (Spiral) uses progressive border-weight gradient (4px/3px/1px) for geological depth encoding. This is ONE documented context where progressive widths are semantic.

**What it protects:** Signature callout accent, visual intentionality, hierarchy clarity

**Evidence:**
- `geometry.md` lines 109-121: "Left Accent Border (Callouts) — 4px minimum. Never 1-2px (too subtle)... AD-004 (Spiral) uses a progressive border-weight gradient (4px/3px/1px) for geological depth encoding (AD-F-014). This is the ONE context where progressive border widths are semantic."
- `anti-patterns/registry.md` lines 190-203: "Thin Callout Borders — What: border-left: 1px or 2px. Why it fails: Too subtle, doesn't create visual anchor. Alternative: 4px minimum"
- Identity-lens.md lines 41-47: "4px left-border is KortAI's signature accent"

**Exception documentation:** If using borders < 4px, you MUST document: "Using border-weight gradient [4px/3px/1px] for depth encoding per AD-F-014. Exception justified by [geological stratification pattern]."

---

### 11. NEVER Use Decorative Elements That Do Not Carry Information

**Why it exists:** KortAI follows anti-complexity principle and perceptual depth principle. Every visual element must carry semantic weight. Decoration for decoration's sake is rejected.

**Exception:** NONE documented. If an element doesn't carry information, delete it.

**What it protects:** Anti-complexity principle, information density, semantic design

**Evidence:**
- Identity-lens.md lines 133-139: "Anti-Complexity Principle... This principle is ENCODED IN THE CSS. The soul constraints (border-radius: 0, box-shadow: none) are the CSS manifestation of anti-complexity. No gradients, no transforms, no animations (except subtle scroll reveals). The visual language rejects decorative complexity."
- `anti-patterns/registry.md` line 269: "neumorphism, glassmorphism, or decorative effects"
- Lens-manifesto.md line 268: "No neumorphism, glassmorphism, or decorative effects"
- Enablement-lens.md principle: "Information density over decoration"

---

### 12. NEVER Break Grid with Decoration (Content-Only Grid Breaking Permitted)

**Why it exists:** Breaking grid structure must serve CONTENT HIERARCHY, not visual playfulness. Decorative grid breaks violate flat design and anti-complexity.

**Exception:** Content-driven asymmetry (e.g., pull quotes, emphasis callouts) where the break serves semantic purpose.

**What it protects:** Flat design, content hierarchy, structural integrity

**Evidence:**
- `anti-patterns/registry.md` lines 163-167: "Decorative Grid Breaking — What: Breaking grid with decorative elements. Why it fails: Violates flat design — decoration competes with content. Alternative: Break with CONTENT, not decoration"
- Identity-lens.md line 299: "Floating action buttons — Breaks flat hierarchy"
- Structural identity concept: page anatomy consistency

---

### 13. NEVER Use Vertical Borders in Tables

**Why it exists:** Vertical lines create "prison bars effect" — claustrophobic, heavy. Open grid with horizontal rules only creates breathing room and cleaner data presentation.

**Exception:** NONE documented. Always use horizontal-only borders in tables.

**What it protects:** Open grid aesthetic, readability, breathing room

**Evidence:**
- `geometry.md` lines 130-138: "No Vertical Borders in Tables — Why? Vertical lines = prison bars. Open grid = breathing room."
- `anti-patterns/registry.md` lines 241-258: "Vertical Table Borders — What: Cell borders on left/right of table columns. Why it fails: Prison bars effect, claustrophobic. Alternative: Open grid — horizontal rules only, whitespace for columns"
- Enablement-lens.md line 80: "Table open-grid pattern (no vertical borders, horizontal-only, semantic header row)"

---

### 14. NEVER Use Hover Lift Effects (transform: translateY)

**Why it exists:** Hover lift treats content like interactive buttons, creating fake 3D movement. Violates anti-physical identity and flat content principle.

**Exception:** NONE documented. Content is editorial, not interactive element.

**What it protects:** Anti-physical identity, flat interaction model, content vs UI distinction

**Evidence:**
- `anti-patterns/registry.md` lines 229-237: "Hover Lift Effects — What: transform: translateY(-4px) on hover. Why it fails: Treats content like buttons, fake 3D. Alternative: No transform — content, not interactive element. AD Forward Reference: [AD-F-020] — AD-005 (Choreography) clarified: 'movement' in this system means choreography of READER's attention through static content structure, not CSS animation."
- Identity-lens.md line 295: "Floating action buttons — Breaks flat hierarchy"
- AD-F-020: "20 R-4 findings required reinterpretation from 'visual movement' to 'structural movement.' 8 SOUL FAIL findings explicitly document the boundary."

---

### 15. NEVER Use Traffic-Light Color Adjacency (Green Next to Red)

**Why it exists:** Green (#4A9D6B) adjacent to red (#E83025) creates kindergarten-level visual language, diminishes both colors' authority.

**Exception:** Separate with whitespace (48px+ spacing) or neutral component between them.

**What it protects:** Color authority, visual maturity, palette sophistication

**Evidence:**
- `anti-patterns/registry.md` lines 94-109: "Traffic-Light Colors — What: Green (#4A9D6B) adjacent to red (#E83025). Why it fails: Kindergarten-level visual language, diminishes both. Alternative: Separate with whitespace or neutral component"
- Visual break prohibition category (identity-lens.md)

**Exception documentation:** If using green and red on same page, you MUST document: "Tip callout and Gotcha callout separated by [48px spacing / neutral content component]. Exception justified by sufficient visual separation."

---

### 16. NEVER Use Cool-Toned Grays (#F5F5F5, #E0E0E0, etc.)

**Why it exists:** Cool grays = sterile, institutional. KortAI uses warm earth tones. Background must be warm cream (#FEF9F5), borders warm tan (#E0D5C5).

**Exception:** NONE documented. Always use warm palette values.

**What it protects:** Warm palette identity, editorial tone, color temperature consistency

**Evidence:**
- `anti-patterns/registry.md` lines 113-124: "Gray Backgrounds — What: background: #F5F5F5 or similar cool grays. Why it fails: Sterile, institutional, not editorial. Alternative: Warm cream (#FEF9F5) or semantic tints"
- Identity-lens.md line 285: "Cool-toned grays — Violates warm palette"
- Lens-manifesto.md principle: warm editorial identity

---

### 17. NEVER Use Non-Italic h3 Headings

**Why it exists:** Editorial hierarchy convention requires all h3 to be italic. This creates the distinctive KortAI typographic rhythm.

**Exception:** NONE documented. All h3 must be italic.

**What it protects:** Editorial hierarchy, typography rhythm, voice consistency

**Evidence:**
- `anti-patterns/registry.md` lines 207-219: "Non-Italic h3 — What: h3 with normal font-style. Why it fails: Breaks editorial hierarchy convention. Alternative: All h3 should be italic"
- Typography conventions (identity-lens.md)

---

### 18. NEVER Use Same-Density Stacking (SLOW + SLOW or FAST + FAST Adjacent)

**Why it exists:** Monotonous density creates no rhythm, no rest points. KortAI requires fractal density rhythm — dense/sparse alternation at multiple scales.

**Exception:** Intentional crescendo patterns (PULSE, CRESCENDO) where density BUILDS toward climax.

**What it protects:** Fractal density rhythm, reading experience, perceptual depth

**Evidence:**
- `anti-patterns/registry.md` lines 155-161: "Same Density Throughout — What: Uniform spacing/density from top to bottom. Why it fails: Monotonous, no rhythm, no rest points. Alternative: Use PULSE, CRESCENDO, BOOKENDS, or WAVE patterns"
- `anti-patterns/registry.md` lines 261-266: "Same-Velocity Stacking — What: SLOW + SLOW or FAST + FAST components adjacent. Why it fails: Monotonous, no rhythm. Alternative: Vary velocity (SLOW → FAST → SLOW)"
- Identity-lens.md lines 116-126: "Density Layering (Fractal Self-Similarity) — The same dense/sparse rhythm at multiple scales"

**Exception documentation:** If using same-density stacking, you MUST document: "Using [CRESCENDO / PULSE] pattern from [source]. Exception justified by intentional density arc from [sparse → dense → resolution]."

---

## Meta-Prohibitions (Process-Level)

These protect the DECISION-MAKING PROCESS, not just visual outcomes.

### 19. NEVER Justify Design Choices Without Research Provenance

**Why it exists:** Every visual decision must trace to research findings. Arbitrary choices break the provenance chain and undermine the research-first methodology.

**What it protects:** Research-first principle, provenance integrity, design rigor

**Evidence:**
- Identity-lens.md lines 141-147: "Research-First Methodology... Every visual decision is grounded in research findings (R1-R5). Every pattern is validated through explorations (DD, OD, CD, AD). Nothing is arbitrary... This creates the 'intentional design' feel."
- CLAUDE.md MANDATORY RESEARCH GROUNDING section
- Lens-manifesto.md: "Document provenance" principle

---

### 20. NEVER Create New Patterns Without Tension Derivation

**Why it exists:** Patterns emerge from content tension resolution, not template reuse. Creating patterns without tension analysis creates pattern-matching instead of genuine metaphor derivation.

**What it protects:** Creative freedom, metaphor authenticity, anti-gravity mechanisms

**Evidence:**
- Rigidity-mechanics.md lines 915-920: "YES — if patterns are framed as templates and available during generation. NO — if patterns are framed as proof-of-concept and unavailable during derivation."
- Tension-composition skill: Phase 1-3 must happen BEFORE pattern consultation
- Lens-manifesto.md M6: "Explicit Divergence Mandate"

---

### 21. NEVER Allow a Full Viewport Height of Contentless Space (EXCEPT Single Breathing Zone)

**Why it exists:** A full viewport (100vh at 1440px width) with less than 30% content coverage communicates "page is broken" or "content failed to load." It destroys reading momentum and makes the page feel abandoned. Breathing zones serve intentional rest; voids serve nothing.

**What it protects:** Spatial confidence, reading momentum, page completeness perception

**Evidence:**
- Ceiling experiment (2026-02-16): 70-80% of scroll was empty cream void (9/9 Mode 4 auditors flagged independently)
- Mode 4 PA audit: "24 consecutive frames of nothing" (Auditor D); "cavernous emptiness" (PA-01 universal finding)
- Failure analysis root cause: Metaphor structural obligations created whitespace as feature, not bug. Plan demanded void. No prohibition prevented it.
- Re-audit confirmed fix team's CSS-only patches reduced ~1,652px from ~10,000px void -- insufficient because the problem was CONTENT, not SPACING

**Measurement (binary test):**

Step 1: At 1440px viewport width, scroll through the entire page in viewport-height increments (position 0, 900, 1800, 2700, ...).

Step 2: At each scroll position, estimate content coverage percentage:
- "Content" = text paragraphs, headings, callouts, code blocks, tables, diagrams, images, structured elements with visible content
- "Not content" = background color, margins, padding without child elements, empty containers

Step 3: Count consecutive scroll positions where content coverage is below 30%.

**Pass/Fail:**
- 0 consecutive positions below 30%: PASS
- 1 position below 30%: PASS (acceptable as breathing zone if intentional and labeled)
- 2+ consecutive positions below 30%: FAIL -- void pattern, always a defect

**Exception:** A SINGLE breathing zone (one scroll position, not two consecutive) with intentional transition content (1-3 sentences of text that connects the sections above and below). This exception requires:
1. The breathing zone has visible text content (not just background)
2. The breathing zone is between two content-bearing sections
3. No other breathing zone appears within 2 scroll positions

**Exception documentation:** If using a breathing zone near 30% threshold: "Breathing zone at [scroll position] contains [content description]. Adjacent sections at [positions] contain [content percentages]."

---

### 22. NEVER Concentrate All Visual Interest in the First Third of the Page

**Why it exists:** Pages where all designed moments (visual peaks -- diagrams, dark-background sections, bento grids, featured callouts) cluster in the first 30% of scroll produce a "beautiful book cover attached to blank pages" perception.

**What it protects:** Reading momentum, scroll engagement, visual arc across the page

**Evidence:**
- Ceiling experiment: Only 1 designed moment at 10% scroll depth (PA-36)
- Mode 4 PA audit: "Visual novelty dies at 30% scroll depth" (PA-47)
- Mode 4 PA audit: "Interest level: PEAK -> CLIFF -> FLATLINE" (PA-35)
- Mode 4 PA audit: "Visual weight concentrated at top, depleted downward" (PA-32)

**Rule:** For pages with 3+ sections, at least ONE designed moment (visual peak using 3+ simultaneous mechanisms at high intensity) must appear in the SECOND HALF of the page (below 50% scroll depth).

**Measurement:**

Step 1: Identify all designed moments on the page. A designed moment is a section that uses 3+ mechanisms at high intensity AND has a unique visual treatment not repeated elsewhere on the page. Examples: architecture diagram on dark background, bento grid with variable spans, drop cap + zone-bedrock + border-weight-max combined, full-width code block with syntax highlighting after text-only sections.

Step 2: Map each designed moment's scroll position as a percentage of total page height.

Step 3: Check: Is at least one designed moment at or below 50% scroll depth?

**Pass/Fail:**
- At least 1 designed moment below 50%: PASS
- All designed moments above 50%: FAIL

**Exception:** Very short pages (< 3 sections or < 2 viewport heights total) where the entire page is visible without substantial scrolling.

---

## Summary Statistics

- **Absolute Prohibitions:** 8 (identity-defining, zero exceptions)
- **Conditional Prohibitions:** 14 (documented exceptions only)
- **Meta-Prohibitions:** 2 (process-level)
- **Total:** 24 prohibitions

**Coverage:**
- Visual breaks: 8 prohibitions (#1-8)
- Structural breaks: 6 prohibitions (#9-10, #12-14, #18)
- Typographic breaks: 2 prohibitions (#7, #17)
- Color breaks: 2 prohibitions (#15-16)
- Interaction breaks: 1 prohibition (#14)
- Spatial/layout breaks: 2 prohibitions (#21-22)
- Process breaks: 2 prohibitions (#19-20)
- General principle: 1 prohibition (#11)

---

## How to Use This Document

1. **Before building:** Read ABSOLUTE PROHIBITIONS — these are non-negotiable
2. **During building:** Check CONDITIONAL PROHIBITIONS — if exception applies, document it
3. **After building:** Verify ZERO violations exist
4. **In code reviews:** Use this as checklist

**Every violation must be caught BEFORE commit. There is NO "we'll fix it later" exception.**

---

**END PROHIBITIONS DOCUMENT**

```

### FILE 2: soul-constraints.md
```
# Soul Constraints — The 3 Absolute Identity Markers

**Lens Statement:** I am using Identity + Enablement hybrid lens. This prioritizes soul preservation and creative freedom over frequency and completeness.

**Date:** 2026-02-14
**Extractor:** prohibition-extractor (agent)
**Purpose:** Document the 3 ABSOLUTE soul constraints that define KortAI's visual identity at the deepest level

---

## What This Document IS

These are the 3 IMMUTABLE constraints that define KortAI identity. They are not stylistic preferences. They are SOUL PIECES — the foundational geometry that makes KortAI recognizably KortAI.

Every other prohibition, pattern, and token derives from or supports these 3.

**If you violate ANY of these, the output is NOT KortAI.**

---

## The 3 Soul Constraints

### 1. border-radius: 0 — Angular Geometry IS KortAI

**The Rule:** `border-radius: 0` on EVERYTHING. No exceptions. Ever.

**Why This IS Soul:**
Angular geometry IS KortAI. Sharp edges signal decisiveness and print heritage. Rounded corners signal a different design philosophy entirely — friendly, safe, generic, approachable. That is NOT KortAI's identity.

KortAI's identity is: decisive, confident, editorial, authoritative, precise.

**The Philosophy:**
Every rounded corner says "we want to be friendly and non-threatening." Every sharp corner says "we are precise and confident in our content."

This is not decoration. This is CHARACTER.

**Evidence:**
- `geometry.md` lines 31-32: "border-radius: 0 on EVERYTHING (LOCKED, NO EXCEPTIONS) — Sharp edges = decisive, confident; rounded = generic. This is the #1 soul constraint"
- AD validation: "border-radius: 0 was verified as GENERATIVE, not merely restrictive — the angular spiral in AD-004 exists BECAUSE of this constraint (AD-F-013), and bento grid size hierarchy is MORE visible with sharp edges (AD-F-010)."
- `anti-patterns/registry.md` lines 59-72: "Rounded Corners... Signals 'safe/generic' — could be any UI kit. Alternative: border-radius: 0 — sharp edges = decisive, confident"
- Identity-lens.md lines 382-389: "KortAI's identity lives in the CONSTRAINTS more than the AFFORDANCES. It's defined by what it REFUSES (rounded corners, shadows, decorative complexity) as much as what it EMBRACES (flat geometry, editorial typography, research-first rigor)."

**What It Protects:**
- Visual soul (anti-physical aesthetic)
- Geometric precision
- Editorial authority
- Decisiveness over friendliness
- Print heritage
- Distinctive character

**Violations:**
- `border-radius: 4px` on cards → SOUL VIOLATION
- `border-radius: 50%` on avatars → SOUL VIOLATION
- `border-top-left-radius: 8px` on tabs → SOUL VIOLATION
- ANY non-zero radius value → SOUL VIOLATION

**The Test:**
If you blur your eyes and look at the page, do you see SHARP RECTANGLES or SOFT ROUNDED SHAPES?

If you see soft rounded shapes, it's not KortAI.

---

### 2. box-shadow: none — Flat Surfaces Achieve Depth Through Structure

**The Rule:** `box-shadow: none` on EVERYTHING. No exceptions. Ever.

**Why This IS Soul:**
Shadows = fake 3D. Shadows create depth illusion using physical light metaphors (object casting shadow from light source). This is PHYSICAL REALITY SIMULATION.

KortAI achieves depth through spacing, borders, and background zones. This is STRUCTURAL DEPTH.

The difference is philosophical:
- Physical depth: "I look 3D because light hits me and casts a shadow"
- Structural depth: "I am deep because I contain hierarchical structure"

**The Philosophy:**
Flat surfaces are honest. Shadows are dishonest.

When you use box-shadow, you're saying "this content floats above the page." But it doesn't. It's flat HTML. The shadow is a lie.

KortAI says: "This content is hierarchically important" through STRUCTURE (larger border, more padding, darker background, different color zone). Not through fake physics.

**Evidence:**
- `geometry.md` lines 88-104: "box-shadow: none on EVERYTHING. No exceptions. Rule: box-shadow: none on EVERYTHING. No exceptions. Why? Shadows = fake 3D, dishonest. Flat = print heritage, honest. AD Validation: 0 shadow violations across all 6 AD explorations. AD-005 (Choreography) produced the strongest evidence via ANTI-PHYSICAL identity (AD-F-020): 20 CONDITIONAL PASS R-4 findings required reinterpretation from 'visual movement' to 'structural movement.' Any technique implying physical object behavior (including shadows) fails the soul test."
- `anti-patterns/registry.md` lines 76-89: "Drop Shadows... Fake 3D, dishonest, breaks flat design principle. Alternative: box-shadow: none — use whitespace for separation. AD Forward Reference: [AD-F-014, AD-F-022] — AD validated 0 shadow violations across 6 explorations. AD-F-014 showed border-weight gradient (4px/3px/1px) encodes depth as a flat 2D property, no z-axis needed. AD-F-022 showed gravitational density (connection count) replaces shadow-based hierarchy cues."
- Identity-lens.md lines 149-155: "Perceptual Depth Over Decoration... Depth comes from content hierarchy, not visual tricks. Nested structure, proximity, typography scale, border accents — these create depth. Shadows and rounded corners are rejected... DD-006 creates depth through nested boxes with different border weights. OD-002 creates depth through 'Act I / Act II / Act III' structure. Boris vault creates depth through 'Clearance Level' layers. ZERO depth from shadows."

**What It Protects:**
- Anti-physical identity
- Flat design principle
- Honest representation
- Print heritage
- Structural hierarchy
- Perceptual depth methodology

**Violations:**
- `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` on cards → SOUL VIOLATION
- `box-shadow: 0 2px 4px rgba(0,0,0,0.05)` on subtle lift → SOUL VIOLATION
- `filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1))` → SOUL VIOLATION
- ANY shadow effect → SOUL VIOLATION

**Related Violation:**
- `opacity: 0.04` on offset pseudo-elements → creates shadow-like depth illusion → SOUL VIOLATION
- `rgba(0,0,0,0.04)` on backgrounds → same effect → SOUL VIOLATION

**The Test:**
If you disable ALL shadows in DevTools, does the hierarchy still work?

If hierarchy depends on shadows, it's not KortAI.

---

### 3. filter: none — No Shadow Effects, No Physical Metaphors

**The Rule:** `filter: drop-shadow()` FORBIDDEN. `filter: none` or non-shadow filters only.

**Why This IS Soul:**
Same principle as box-shadow, but often sneaks in via SVG styling or icon treatment.

Physical reality metaphors (light casting shadows) contradict KortAI's abstract precision.

**The Philosophy:**
Any technique that implies "this object exists in physical space with lighting" violates the anti-physical identity.

Movement, depth, hierarchy — all must be achieved through STRUCTURAL techniques (spacing, borders, nesting, color zones), NOT PHYSICAL SIMULATION (shadows, gradients, 3D transforms).

**Evidence:**
- `geometry.md` line 151: "Drop shadow: NEVER"
- Identity-lens.md line 32: "filter: drop-shadow() FORBIDDEN — No shadow effects"
- Soul-constraints documentation: "filter: none (no drop-shadow) — WHY: Same principle as box-shadow — physical reality metaphors (light casting shadows) contradict KortAI's abstract precision."
- AD-F-020: "Any technique implying physical object behavior (including shadows) fails the soul test."

**What It Protects:**
- Anti-physical identity
- Abstract precision
- Consistency with box-shadow prohibition
- SVG/icon styling integrity

**Violations:**
- `filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1))` on icons → SOUL VIOLATION
- `filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2))` on SVG → SOUL VIOLATION
- ANY drop-shadow effect → SOUL VIOLATION

**Permitted Filters:**
- `filter: none` → PERMITTED
- `filter: grayscale(1)` → PERMITTED (non-physical effect)
- `filter: brightness(0.9)` → PERMITTED (non-physical effect)
- `filter: contrast(1.1)` → PERMITTED (non-physical effect)

**The Test:**
Does the filter create an illusion of lighting or physical space?

If yes, it's forbidden.

---

## Why Only 3?

**Many prohibitions exist (see prohibitions.md), but only 3 are SOUL-LEVEL.**

The distinction:

**Soul Constraints (these 3):**
- Immutable, non-negotiable, define identity at deepest level
- Violating ANY ONE makes output "not KortAI"
- Cannot be overridden by any context or requirement
- Visual recognition happens INSTANTLY when violated

**Other Prohibitions:**
- Important, identity-bearing, but DERIVED from or SUPPORTING the 3 soul constraints
- Violating creates quality issues but doesn't destroy soul
- Can have documented exceptions in specific contexts
- Visual recognition happens on INSPECTION

**Example:**
- 2px borders → important prohibition, quality issue, but not soul-destroying
- box-shadow → SOUL VIOLATION, instantly recognizable as "not KortAI"

**The Test:**
If you showed someone 2 pages (one KortAI-compliant, one with THIS violation), could they instantly identify the violation without detailed inspection?

If yes → soul constraint.
If no (requires inspection) → important prohibition, not soul.

---

## Philosophical Principles (Supporting the 3)

These principles explain WHY the 3 constraints exist:

### Depth Through Structure, Not Simulation

**What It Means:**
Hierarchy and depth are created through:
- Spacing (more important = more breathing room)
- Border weight (4px vs 3px vs 1px encodes depth)
- Background zones (dark background = elevated importance)
- Typography scale (larger text = higher hierarchy)
- Nesting (contained sections = structural depth)

NOT through:
- Shadows (fake physics)
- Rounded corners (fake material)
- Gradients (fake lighting)
- 3D transforms (fake space)

**Evidence:**
Identity-lens.md lines 149-155: "Perceptual Depth Over Decoration... Depth comes from content hierarchy, not visual tricks. Nested structure, proximity, typography scale, border accents — these create depth."

---

### Information Density Over Decoration

**What It Means:**
Every visual element must carry semantic weight. If it doesn't communicate information or hierarchy, delete it.

Decoration for decoration's sake is rejected.

**Evidence:**
Identity-lens.md lines 133-139: "Anti-Complexity Principle... Every visual element must carry semantic weight. Decoration for decoration's sake is rejected."

Enablement-lens.md principle: "Information density over decoration"

---

### Every Visual Element Must Carry Semantic Weight

**What It Means:**
- Borders communicate hierarchy (4px callout border = semantic accent)
- Background colors communicate zones (dark = elevated, warm = default, tinted = semantic type)
- Spacing communicates relationships (close = related, far = separated)
- Typography communicates voice (serif = authority, sans = clarity, mono = technical)

Nothing is "just pretty."

**Evidence:**
Identity-lens.md: "Every visual element must carry semantic weight"

Anti-patterns registry: "Decorative elements that do not carry information" prohibited

---

## How the 3 Constraints Generate KortAI Identity

**Visual Recognition Test:**

If you see a page and it has:
1. ✅ Sharp 90-degree corners everywhere
2. ✅ Flat surfaces (no shadows)
3. ✅ No filter effects

Then you are LIKELY seeing KortAI (or compatible identity).

If you see:
1. ❌ Rounded corners
2. ❌ Drop shadows
3. ❌ Shadow filters

Then you are DEFINITELY NOT seeing KortAI.

**The Generative Property:**

These 3 constraints don't just PREVENT bad design. They GENERATE good design.

Example from AD-F-013:
> "border-radius: 0 was verified as GENERATIVE, not merely restrictive — the angular spiral in AD-004 exists BECAUSE of this constraint"

The sharp corners FORCED the designer to create an angular spiral approximation. That constraint GENERATED a unique visual solution.

**The Compositional Chain:**

```
Soul Constraints (3)
    ↓
Generate Visual Identity
    ↓
Inform Other Prohibitions (20+)
    ↓
Guide Pattern Development
    ↓
Create Compositional Grammar
    ↓
Enable Distinctive Layouts
```

Everything traces back to these 3.

---

## Validation Checklist

Before ANY output is marked complete, verify:

```
□ border-radius: 0 everywhere? (Inspect computed styles, not just source)
□ box-shadow: none everywhere? (Check all elements + pseudo-elements)
□ filter: drop-shadow() absent? (Check SVGs, icons, images)
□ No rgba/opacity tricks creating shadow illusion?
□ Depth achieved through structure (borders/spacing/zones)?
□ Every visual element carries semantic weight?
```

**If ANY checkbox is unchecked → SOUL VIOLATION → Output is INVALID.**

---

## What Happens When Soul Is Violated

**Visual Impact:**
- Page instantly feels "not KortAI"
- Could be any modern UI kit
- Generic, friendly, approachable (opposite of intended identity)
- Loses editorial authority
- Loses print heritage
- Loses decisiveness

**Systemic Impact:**
- Breaks provenance chain (soul violations cannot be justified by research)
- Undermines design system integrity
- Creates precedent for future violations
- Erodes identity consistency across all pages

**Process Impact:**
- Output marked INVALID
- Cannot be committed
- Cannot inform future patterns
- Must be rebuilt from soul-compliant foundation

**The Non-Negotiability:**

There is NO context where soul violations are acceptable:
- "But the client wants rounded corners" → Then this isn't KortAI
- "But shadows improve usability" → Use structural depth instead
- "But this is just a prototype" → Prototypes must be soul-compliant
- "But we'll fix it later" → No. Fix it now.

**Soul compliance is the FIRST checkpoint, not the last.**

---

**END SOUL CONSTRAINTS DOCUMENT**

```

### FILE 3: tokens.css
```css
/* ============================================
   PHASE C — DESIGN TOKEN VOCABULARY
   Lens: Identity + Enablement hybrid

   I am using Identity + Enablement hybrid lens. This prioritizes soul
   preservation and creative freedom over frequency and completeness.

   Source: design-system/specification/tokens/*.md (SOURCE-FIRST extraction)
   Verification: DD-006-fractal.html, OD-001-conversational.html, CD-006-pilot-migration.html
   Date: 2026-02-14
   ============================================ */

:root {
  /* ========================================
     SOUL CONSTRAINTS (IMMUTABLE — soul)
     The non-negotiable identity anchors
     ======================================== */
  --border-radius: 0;           /* IMMUTABLE — soul: ALWAYS sharp edges. Never > 0. */
  --box-shadow: none;            /* IMMUTABLE — soul: ALWAYS flat design. Never any shadow. */
  /* filter: drop-shadow() also prohibited in all contexts (see prohibitions.md) */

  /* ========================================
     COLOR PALETTE
     ======================================== */

  /* --- Primary Colors (IMMUTABLE — identity) --- */
  --color-primary: #E83025;        /* Sanrok red - editorial confidence, LOCKED */
  --color-background: #FEF9F5;     /* Warm cream - not sterile white, LOCKED */
  --color-text: #1A1A1A;          /* Near-black - softer than #000, LOCKED */
  --color-text-secondary: #666666; /* Muted secondary text, LOCKED */
  --color-border: #E0D5C5;        /* Warm border tone, LOCKED */
  --color-border-subtle: #F0EBE3; /* Very subtle dividers, LOCKED */

  /* --- Accent Colors (MUTABLE — accent, semantic flexibility) --- */
  --accent-blue: #4A90D9;         /* Info Callout, File Tree */
  --accent-green: #4A9D6B;        /* Tip Callout */
  --accent-coral: #C97065;        /* Gotcha Callout (alternative) */
  --accent-amber: #D97706;        /* Essence Callout, Reasoning */
  --accent-purple: #7C3AED;       /* Challenge Callout */

  /* --- Background Colors (AVAILABLE — zone differentiation) --- */
  --bg-page: #FAFAFA;             /* Page ground */
  --bg-card: #FFFFFF;             /* Elevated zones */
  --bg-warm: #FEF9F5;             /* Warm emphasis (Essence) */
  --bg-dark: #1E1E1E;             /* Inverted focus (Code Snippet) - CD-006 uses #1A1A1A */
  --bg-info: #F5F8FA;             /* Info semantic */
  --bg-tip: #F5FAF5;              /* Tip semantic */
  --bg-gotcha: #FEF6F5;           /* Warning semantic */
  --bg-summary: #FEF9F0;          /* Synthesis (Reasoning) */

  /* --- Zone Colors (AVAILABLE — OD-F-005 zone token naming) --- */
  --color-zone-sparse: #FEF9F5;   /* Sparse breathing zones */
  --color-zone-dense: #FFFFFF;    /* Dense content zones */
  --color-zone-breathing: #FAF5ED;/* Recovery breathing zones */

  /* --- Text Hierarchy Colors (AVAILABLE — structural roles) --- */
  --text-primary: #1A1A1A;        /* "This is important" */
  --text-secondary: #444444;      /* "This explains" */
  --text-tertiary: #888888;       /* "This is supporting" */
  --text-muted: #AAAAAA;          /* "This recedes" */
  --text-inverse: #FFFFFF;        /* Dark background content */

  /* ========================================
     TYPOGRAPHY
     ======================================== */

  /* --- Font Families (IMMUTABLE — identity trinity) --- */
  --font-display: 'Instrument Serif', Georgia, serif;  /* Editorial authority - LOCKED */
  --font-body: 'Inter', system-ui, sans-serif;         /* Functional clarity - LOCKED */
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace; /* Technical precision - LOCKED */

  /* --- Type Scale (MUTABLE — scale, responsive hierarchy) --- */
  --text-xs: 0.75rem;       /* 12px — Labels, captions */
  --text-sm: 0.875rem;      /* 14px — Small body, metadata */
  --text-base: 1rem;        /* 16px — Body text baseline */
  --text-lg: 1.125rem;      /* 18px — Large body */
  --text-h4: 1.25rem;       /* 20px — Small headlines */
  --text-h3: 1.5rem;        /* 24px — Section headlines */
  --text-h2: 2rem;          /* 32px — Major headlines */
  --text-h1: 2.5rem;        /* 40px — Page titles */
  --text-display: 3rem;     /* 48px — Hero text */

  /* Alternative naming (CD-006 convention) - same values */
  --type-page: 3rem;        /* Page-level titles */
  --type-section: 1.625rem; /* Section titles */
  --type-subsection: 1.375rem; /* Subsection titles */
  --type-body: 1rem;        /* Body text */
  --type-code: 0.875rem;    /* Code blocks */
  --type-meta: 0.75rem;     /* Metadata, labels */

  /* ========================================
     SPACING SCALE
     ======================================== */

  /* --- Core Scale (IMMUTABLE — anchors, 4px base unit) --- */
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

  /* --- Gestalt Semantic Aliases (AVAILABLE — extended, clarity) --- */
  --space-within: var(--space-2);   /* 8px - within single unit */
  --space-between: var(--space-8);  /* 32px - between sections */
  --space-chapter: var(--space-16); /* 64px - major divisions */

  /* --- Spacing Maximums (AVAILABLE -- prevent void accumulation) --- */
  --space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections within a zone */
  --space-max-zone: var(--space-24);     /* 96px -- Maximum margin/padding between zones or major page divisions */
  /* RULE: No single margin or padding value should exceed --space-max-zone (96px).
     If a zone transition needs more visual separation than 96px, use a CHECKPOINT
     element (see mechanism-catalog.md Transition Grammar), not more whitespace.
     Stacking two 96px margins creates 192px of void -- use checkpoint elements instead.
     Evidence: Ceiling experiment accumulated ~1,500-2,000px in zone transitions alone
     by stacking generous spacing values. This rule caps the maximum per-property value. */

  /* --- Grid System (IMMUTABLE — system) --- */
  --grid-gap: 24px;         /* Standard grid separation - LOCKED */

  /* ========================================
     BORDER WIDTHS
     ======================================== */

  /* --- Structural Borders (IMMUTABLE — system) --- */
  --border-structural: 4px;     /* Left accent borders (callouts) - LOCKED */
  --border-accent: 3px;         /* Secondary accent weight */
  --border-micro: 1px;          /* Subtle dividers, frames */
  --border-left-width: 4px;     /* Callout standard (alias) */

  /* ========================================
     SYNTAX HIGHLIGHTING (AVAILABLE — code zones)
     Dark background code blocks
     ======================================== */
  --syntax-keyword: #E83025;      /* Red - keywords */
  --syntax-string: #6B9B7A;       /* Green - strings */
  --syntax-comment: #666666;      /* Gray - comments */
  --syntax-function: #4A7C9B;     /* Blue - functions */
  --syntax-type: #C97065;         /* Coral - types */
  --syntax-number: #D97706;       /* Amber - numbers */
  --syntax-punctuation: #E0D5C5;  /* Border color - punctuation */

  /* ========================================
     TRANSITIONS (AVAILABLE — CD convention)
     ======================================== */
  --transition-standard: 0.3s ease; /* Standard timing */

  /* ========================================
     SOLID OFFSET (AVAILABLE — EXT-CREATIVE-001)
     Neobrutalist depth without box-shadow
     ======================================== */
  --offset-x: 4px;
  --offset-y: 4px;
  --offset-color: #1A1A1A;
}

/* ============================================
   TOKEN EXTRACTION NOTES

   EXTRACTION METHOD: Source-first
   - Read token specification files BEFORE HTML explorations
   - Verified against DD-006, OD-001, CD-006 implementations
   - All values traced to design-system/specification/tokens/*.md

   LENS: Identity + Enablement hybrid
   - Identity: Preserves soul constraints (border-radius: 0, box-shadow: none)
   - Identity: Locks visual signatures (specific fonts, colors, borders)
   - Enablement: 6 spacing anchors (not all 14 values mandated)
   - Enablement: Accent colors are parameters (not separate components)

   MUTABILITY CLASSIFICATION:
   - IMMUTABLE (soul, identity): Cannot change without violating identity
   - MUTABLE (scale, accent): Can vary within constraints
   - AVAILABLE (extended): Exist but not required

   See tokens-mutability.md for full classification rationale.
   ============================================ */

```



---

## YOUR TASK

Based ONLY on the source files above and guided by the reading protocol, write a thorough analysis covering ALL of the following:

1. **The "but" sentence**: Your one-sentence characterization capturing the system's internal contradiction.

2. **Character**: What is this design system's character? Not just its properties — its personality, its attitude, its stance toward content and readers. What kind of entity is it?

3. **Internal Tensions**: Where does this system contradict itself? Where do its own values pull in opposing directions? Identify at least 2 genuine internal tensions.

4. **What It Enables**: What kinds of compositional moves does this system make EASY or NATURAL? What does it want you to do?

5. **What It Refuses**: What does this system reject? Not just what's prohibited — what is philosophically incompatible with its character?

6. **Generative Constraints**: Pick 2-3 constraints and explain how each one GENERATES design possibilities rather than just preventing them.

7. **Compositional Opportunities**: If you were building a content page in this system, what are the richest areas for creative composition? Where does the system leave room for the builder to make meaningful choices?

8. **Vocabulary Landscape**: Map what this system can express WELL vs what it STRUGGLES to express. Where is it fluent? Where is it limited?

9. **Surprise**: What, if anything, surprised you about this system? What is unexpected or counterintuitive?

Write 400-600 words. Be specific and concrete — reference actual values, properties, and relationships from the source files.
