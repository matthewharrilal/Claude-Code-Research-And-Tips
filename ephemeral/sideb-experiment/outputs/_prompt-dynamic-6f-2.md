# Experiment Prompt: Dynamic Agent

You are participating in a design system analysis experiment. Your ONLY task is to analyze the design system whose source files are provided below and produce a detailed written analysis.

You have NO access to any files beyond what is included in this prompt. Everything you need is here. Do not attempt to read, search, or access any external resources.

---

## DESIGN SYSTEM SOURCE FILES

The following are the actual source files of a design system. Read them carefully and form your own understanding of what this system IS — its character, its values, its constraints, its possibilities.

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

### FILE 4: mechanism-catalog.md
```
# Mechanism Catalog — 18 Reusable CSS Techniques

A mechanism is a **CSS technique that works across MULTIPLE metaphors**, verified by two tests:
- **Name Test:** Remove the metaphor name. Does the description still make sense? YES → mechanism
- **Transfer Test:** Does this technique work with a DIFFERENT metaphor? YES → mechanism

---

## Mechanism Categories (5 Property Families)

Each mechanism belongs to one or more property categories. These categories enable per-category selection (see tension-composition skill Phase 4).

| Category | ID | Mechanisms | What It Governs |
|----------|----|-----------|-----------------|
| **Spatial** | S | #5, #6, #15 | Layout topology, density rhythm, grid structure |
| **Hierarchy** | H | #1, #4, #11 | Importance encoding, structural weight, scale |
| **Component** | C | #2, #9, #10, #17 | Internal component patterns, semantic signals |
| **Depth/Emphasis** | D | #3, #7, #16 | Layering, zone differentiation, focal points |
| **Structure/Navigation** | N | #8, #12, #13, #14, #18 | Page chrome, navigation, progressive disclosure |

**CRITICAL DISTINCTION: Same Catalog, Different Selection Logic**

All tiers (Floor/Middle/Ceiling/Flagship) use the SAME 18 mechanisms from this catalog. The tools are identical. What differs is HOW you decide which tools to pick and WHY.

**Middle (content-structure mapping):**
- Builder looks at content: "This has code blocks → I need mechanism #17"
- Builder looks at content: "This has hierarchy → I need mechanism #1"
- Builder looks at content: "This has callouts → I need mechanism #2"
- Each mechanism serves a DIFFERENT content need INDEPENDENTLY
- Selection logic: content feature → mechanism capability (direct mapping)

**Ceiling (metaphor-driven multi-channel coherence):**
- Builder has derived a metaphor (e.g., "geological strata") through Phases 1-3
- Builder looks at catalog THROUGH the metaphor: "Geological strata have pressure gradients → spacing compression (#4). Strata have consolidation levels → border-weight (#1). Strata have distinct layers → zone backgrounds (#7)."
- KEY REALIZATION: spacing compression, border-weight, AND zone backgrounds all encode the SAME thing — geological depth. They REINFORCE each other.
- Selection logic: metaphor → shared semantic dimension → multiple mechanisms encoding that dimension simultaneously

**The concrete difference in output:**
- Middle: border-weight handles hierarchy, zone backgrounds handle section breaks, spacing handles rhythm — each independently solving different problems
- Ceiling: border-weight + zone backgrounds + spacing ALL encode "depth" together — when you scroll down, borders get heavier AND backgrounds get darker AND spacing gets tighter, all saying "deeper" in three CSS channels at once

This multi-channel coherence is what creates the "atmosphere" that Middle pages lack. The CATALOG doesn't change — only the SELECTION AND COMBINATION logic changes.

**Multi-category note:** Some mechanisms serve multiple categories. Border-weight gradient (#1) is primarily HIERARCHY but also encodes DEPTH. Tag the PRIMARY category in the heading; note secondary categories in the mechanism description.

**Per-category selection protocol:** For Middle-tier+ pages, deploy AT LEAST ONE mechanism from each category to ensure vocabulary breadth. See tension-composition skill Phase 4 for the full protocol.

---

---

## The Mechanisms (18 Total)

### 1. Border-Weight Gradient Encoding [HIERARCHY]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Creates immediate visual hierarchy. Readers notice border thickness differences even without measuring.

**CSS Mechanism:**
```css
.element--highest-priority {
  border-left: 4px solid var(--color-text);
}

.element--high-priority {
  border-left: 3px solid var(--color-text);
}

.element--medium-priority {
  border-left: 2px solid var(--color-text); /* ONLY semantic use */
}

.element--low-priority {
  border-left: 1px solid var(--color-border);
}
```

**Reusable boundary:** Border widths ARE the mechanism (4px/3px/2px/1px gradient). What those widths MEAN is metaphor-specific (confidence vs consolidation vs structural hierarchy).

**Transfer test:** YES — works in geological metaphor (strata consolidation), confidence metaphor (certainty levels), structural metaphor (semantic hierarchy).

**Application Modes:**

**PROGRESSIVE MODE:** Use for content with NATURAL stratification (confidence levels, security criticality, geological depth). Deploy 4px→3px→2px→1px as continuous gradient across 4-5 elements. Each element represents a different LEVEL in the same dimension.

Example: Security layers (4px authentication → 3px authorization → 2px data validation → 1px rate limiting) — each layer has different criticality on a continuous scale.

**DISCRETE MODE:** Use for CATEGORICAL differentiation (callouts vs headers vs separators). Deploy 4px, 3px, 1px as distinct categories with no gradient relationship.

Example: 4px for featured callouts, 3px for structural section borders, 1px for data separators — three different TYPES, not levels.

**ANTI-PATTERN:** Discrete mode applied uniformly to ALL elements of same type (e.g., ALL h3 elements get 3px). This creates mechanical rhythm. Instead, use border-weight to encode SEMANTIC importance (critical h3 = 3px, supporting h3 = 1px).

**Middle-tier validation:** Security layers used PROGRESSIVE mode (4px→3px→1px encoding layered criticality) — rated as design highlight by perceptual auditor. Border-weight on ALL h3 headings used DISCRETE mode uniformly — rated as "slightly repetitive."

---

### 2. 2-Zone Component DNA [COMPONENT]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Creates internal component structure. Visible when components are numerous.

**CSS Mechanism:**
```css
.component {
  border-left: 4px solid var(--accent-color);
  padding: var(--component-padding, 20px 24px);
  margin: var(--component-margin, 24px 0);
}

.component__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-within);
  display: block;
}

.component__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}
```

**Reusable boundary:**
- Zone 1 (label): sparse, meta-level, uppercase, 12px
- Zone 2 (body): dense, content-level, normal case, 16px
- **NOT reusable:** Label text ("ESSENCE" vs "FOSSIL" vs "MAIN HALL")

**Transfer test:** YES — callouts, mineral veins, fossils, security desks all use same 2-zone structure.

---

### 3. Solid Offset Depth (Box-Shadow Alternative) [DEPTH/EMPHASIS]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Creates depth through shadow-like offset. Strong focal point generator.

**CSS Mechanism:**
```css
.featured-element {
  position: relative;
}

.featured-element::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 100%;
  height: 100%;
  background: var(--color-text); /* #1A1A1A */
  z-index: -1;
}
```

**Reusable boundary:** The ::after pseudo-element offset IS the mechanism. What gets featured is compositional judgment.

**Transfer test:** YES — works for callouts, headers, section emphasis across all metaphors.

**Critical constraint:** MUST use `box-shadow: none` (soul piece #2). Solid offset is the ONLY depth technique.

---

### 4. Spacing Compression (Inverse Density-Confidence) [HIERARCHY]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Invisible to untrained eye. Creates sense of 'tightness' without visible cause.

**CSS Mechanism:**
```css
/* Highest certainty/importance = most space */
.zone--sparse {
  padding: var(--space-20); /* 80px */
}

/* Moderate certainty = moderate space */
.zone--moderate {
  padding: var(--space-8); /* 32px */
}

/* Low certainty = compressed space */
.zone--dense {
  padding: var(--space-4); /* 16px */
}
```

**Reusable boundary:** Padding values create density gradient. What determines density (confidence, importance, structural depth) is content-specific.

**Transfer test:** YES — geological depth, confidence certainty, breathing rhythm all use spacing compression.

---

### 5. Dense/Sparse Alternation (INHALE/EXHALE Rhythm) [SPATIAL]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Creates rhythm through density changes. Effect is cumulative across sections.

**CSS Mechanism:**
```css
.section--sparse {
  padding: var(--space-20) var(--space-6);
  margin-bottom: var(--space-chapter);
}

.section--dense {
  padding: var(--space-6);
  margin-bottom: var(--space-between);
}
```

**Reusable boundary:** Alternation pattern (A→B→A→B) IS the mechanism. Section content changes.

**Transfer test:** YES — works for tutorials (sparse/dense), narratives (setup/climax), references (overview/detail).

---

### 6. Width Variation (Channel/Pool Pattern) [SPATIAL]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Subtle horizontal rhythm. Operates below conscious perception.

**CSS Mechanism:**
```css
.narrow-channel {
  max-width: 70%;
  margin-left: 5%;
}

.full-pool {
  max-width: 100%;
  margin-left: 0;
}
```

**Reusable boundary:** Width values create visual rhythm. What content gets narrow vs wide is semantic.

**Transfer test:** YES — Q&A (question/answer), editorial (paragraph/illustration), comparison (option A / option B).

---

### 7. Zone Background Differentiation [DEPTH/EMPHASIS]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Subtle warmth/coolness shifts. Builds atmosphere, not drama.

**CSS Mechanism:**
```css
:root {
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;
  --color-zone-bedrock: #1A1A1A;
}

.zone--sparse { background: var(--color-zone-sparse); }
.zone--dense { background: var(--color-zone-dense); }
.zone--breathing { background: var(--color-zone-breathing); }
.zone--bedrock { background: var(--color-zone-bedrock); }
```

**Reusable boundary:** 4-color token system IS the mechanism. Zone semantic meaning is metaphor-specific.

**Transfer test:** YES — works for geological layers, confidence zones, floor levels, section types.

**Semantic Mappings (Recommended):**

| Zone Color | Token | Content Type | When to Use |
|------------|-------|--------------|-------------|
| Sparse (#FEF9F5, warm cream) | --color-zone-sparse | Introductory, opening, overview | First section, high-level concepts, generous padding |
| Dense (#FFFFFF, near-white) | --color-zone-dense | Technical, detailed, compressed | Deep-dive sections, code-heavy, API reference, compressed padding |
| Breathing (#FAF5ED, earthy tan) | --color-zone-breathing | Procedural, moderate, transitional | Installation steps, how-to guides, moderate padding |
| Bedrock (#1A1A1A, dark) | --color-zone-bedrock | Structural landmarks only | Header, footer, featured diagrams — NOT for body content sections |

**CAVEAT:** These are RECOMMENDATIONS, not rules. Your metaphor may suggest different mappings (e.g., geological metaphor uses warm→cool gradient to encode depth, not content type). When metaphor conflicts with default mapping, metaphor wins — but document the deviation.

**Middle-tier validation:** F-PATTERN deployment used sparse→dense→breathing→dense zone progression encoding introduction→technical→procedural→technical content flow. Zone shifts were perceptually subtle (MEDIUM impact) but contributed to spatial atmosphere.

---

### 8. Scroll Witness / Sticky TOC [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Functional, not visual. Progress indicator serves navigation, not aesthetics.

**CSS Mechanism:**
```css
.scroll-witness {
  position: sticky;
  top: var(--space-8);
  background: var(--color-zone-breathing);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}

.scroll-witness__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  transition: color var(--transition-standard);
}

.scroll-witness__item.active {
  color: var(--color-primary);
  font-weight: 600;
}
```

**Reusable boundary:** Sticky positioning + .active state IS the mechanism. JavaScript intersection observer required (not CSS).

**Transfer test:** YES — works for chapter nav, TOC, section progress, reading position.

---

### 9. Confidence/Priority Encoding via Color [COMPONENT]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Semantic differentiation through accent color. Context-dependent visibility.

**CSS Mechanism:**
```css
.element--critical { border-left-color: var(--color-primary); }
.element--warning { border-left-color: var(--accent-coral); }
.element--info { border-left-color: var(--accent-blue); }
.element--success { border-left-color: var(--accent-green); }
.element--note { border-left-color: var(--accent-purple); }
.element--caution { border-left-color: var(--accent-amber); }
```

**Reusable boundary:** Color-to-semantic mapping IS the mechanism. Exact semantic (info vs note) varies.

**Transfer test:** YES — all explorations use same 6-color accent palette for semantic differentiation.

---

### 10. Border-Left Semantic Signaling [COMPONENT]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Immediately visible accent pattern. Strong categorical differentiation.

**CSS Mechanism:**
```css
.component {
  border-left: 4px solid var(--semantic-color);
  /* Other properties */
}
```

**Reusable boundary:** 4px left border IS the universal callout signal. Color changes semantics.

**Transfer test:** YES — universal across all metaphors for "this is emphasized content."

---

### 11. Typographic Scale Jumping (Hierarchy Transitions) [HIERARCHY]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Operates through hierarchy, not drama. Readers use headings, don't admire them.

**CSS Mechanism:**
```css
:root {
  --type-page: 2.5rem;      /* Page title */
  --type-section: 1.625rem; /* Major sections */
  --type-subsection: 1.375rem; /* Subsections */
  --type-body: 1rem;        /* Body text */
  --type-code: 0.875rem;    /* Code */
  --type-meta: 0.75rem;     /* Labels, metadata */
}

/* Jump from meta (0.75rem) to body (1rem) = 1.33x */
/* Jump from section (1.625rem) to page (2.5rem) = 1.54x */
```

**Reusable boundary:** ~1.5x ratio between levels IS the mechanism. Exact values are tokens.

**Transfer test:** YES — discrete scale jumps signal hierarchy across all content types.

---

### 12. Progressive Disclosure (Density Gradient Flow) [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Functional interaction pattern. Visual impact depends on trigger design.

**CSS Mechanism:**
```css
/* Phase 1: Introduction (sparse) */
.phase--intro {
  padding: var(--space-20);
}

/* Phase 2: Building (moderate) */
.phase--build {
  padding: var(--space-8);
}

/* Phase 3: Climax (dense) */
.phase--climax {
  padding: var(--space-4);
}

/* Phase 4: Resolution (breathing) */
.phase--resolve {
  padding: var(--space-10);
}
```

**Reusable boundary:** Progressive padding compression IS the mechanism. What triggers phases is content structure.

**Transfer test:** YES — works for tutorials, narratives, confidence flows, complexity gradients.

---

### 13. Dark Header + 3px Primary Border [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Dramatic contrast landmark. First thing readers see.

**CSS Mechanism:**
```css
header {
  background: var(--color-text); /* #1A1A1A */
  color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8);
}
```

**Reusable boundary:** Dark background + 3px red border IS the header signal universally.

**Transfer test:** YES — all explorations use identical dark header structure.

---

### 14. Footer Mirror (Dark + 3px Border-Top) [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Structural bookend. Impact is narrative (closure), not visual drama.

**CSS Mechanism:**
```css
footer {
  background: var(--color-text);
  color: var(--color-background);
  border-top: 3px solid var(--color-primary);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-8);
}
```

**Reusable boundary:** Header/footer symmetry IS the mechanism.

**Transfer test:** YES — works for all page types requiring navigation bookends.

---

### 15. Bento Grid (Variable Span Layout) [SPATIAL]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Layout pattern creating contained zones. Visibility depends on content density contrast.

**CSS Mechanism:**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.bento-cell--large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-cell--wide {
  grid-column: span 2;
}

.bento-cell--tall {
  grid-row: span 2;
}
```

**Reusable boundary:** Grid + span modifiers IS the mechanism. Cell SIZE signals importance.

**Transfer test:** YES — task-based docs, component galleries, floor plans, reference indexes.

---

### 16. Drop Cap (Editorial Opening) [DEPTH/EMPHASIS]

**Perceptual Effectiveness:** MEDIUM
**Impact Profile:** Decorative opening signal. High impact at start, diminishes after first use.

**CSS Mechanism:**
```css
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  margin-right: var(--space-2);
  margin-top: 4px;
  color: var(--color-primary);
}
```

**Reusable boundary:** `::first-letter` styling IS the mechanism. Where to use it is compositional.

**Transfer test:** YES — works for editorial, narrative, formal documentation openings.

---

### 17. Code Block (Dark Background + Syntax Highlighting) [COMPONENT]

**Perceptual Effectiveness:** HIGH
**Impact Profile:** Visually distinct functional zone. Natural focal point in technical content.

**CSS Mechanism:**
```css
pre {
  background: var(--color-text); /* #1A1A1A */
  color: var(--color-background);
  border: 3px solid var(--color-border);
  padding: 24px 32px;
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.5;
  overflow-x: auto;
}

.kw { color: var(--syntax-keyword); }    /* #E83025 red */
.st { color: var(--syntax-string); }     /* #6B9B7A green */
.cm { color: var(--syntax-comment); }    /* #666666 gray */
.fn { color: var(--syntax-function); }   /* #4A7C9B blue */
.nu { color: var(--syntax-number); }     /* #D97706 amber */
```

**Reusable boundary:** Dark background + 7 syntax tokens IS the mechanism universally.

**Transfer test:** YES — all technical documentation uses identical code styling.

---

### 18. Data Table (Mono Headers + Border Categories) [STRUCTURE/NAVIGATION]

**Perceptual Effectiveness:** LOW
**Impact Profile:** Functional clarity pattern. Visual impact is informational, not compositional.

**CSS Mechanism:**
```css
.data-table th {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 12px 16px;
  border-bottom: 3px solid var(--color-border); /* Cat 1 structural */
}

.data-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border); /* Cat 2 separator */
}
```

**Reusable boundary:** Mono headers + 3px/1px border distinction IS the mechanism.

**Transfer test:** YES — all tabular data uses identical structure.

---

---

---

## Mechanism Summary Table

| # | Mechanism | CSS Lines | Metaphor Independence | Complexity |
|---|-----------|-----------|----------------------|------------|
| 1 | Border-Weight Gradient | ~20 | HIGH (confidence, consolidation, hierarchy) | LOW |
| 2 | 2-Zone Component DNA | ~50 | VERY HIGH (callouts, veins, fossils, desks) | LOW |
| 3 | Solid Offset Depth | ~15 | VERY HIGH (any featured element) | LOW |
| 4 | Spacing Compression | ~20 | HIGH (depth, confidence, importance) | LOW |
| 5 | Dense/Sparse Alternation | ~15 | VERY HIGH (tutorials, narratives, references) | LOW |
| 6 | Width Variation | ~10 | HIGH (Q&A, editorial, comparison) | LOW |
| 7 | Zone Background Differentiation | ~25 | VERY HIGH (all metaphors use 4-color system) | LOW |
| 8 | Scroll Witness/Sticky TOC | ~35 | HIGH (multi-section pages) | MEDIUM (requires JS) |
| 9 | Confidence Encoding via Color | ~10 | VERY HIGH (all semantic callouts) | LOW |
| 10 | Border-Left Semantic Signal | ~5 | VERY HIGH (universal callout marker) | LOW |
| 11 | Typographic Scale Jumping | ~10 | VERY HIGH (~1.5x ratio universal) | LOW |
| 12 | Progressive Disclosure | ~30 | HIGH (tutorials, narratives, flows) | MEDIUM |
| 13 | Dark Header + 3px Border | ~20 | VERY HIGH (all pages) | LOW |
| 14 | Footer Mirror | ~20 | VERY HIGH (all pages with footer) | LOW |
| 15 | Bento Grid | ~25 | HIGH (task docs, galleries, references) | MEDIUM |
| 16 | Drop Cap | ~10 | MEDIUM (editorial/narrative only) | LOW |
| 17 | Code Block | ~40 | VERY HIGH (all technical docs) | LOW |
| 18 | Data Table | ~20 | VERY HIGH (all tabular data) | LOW |

**Total extractable CSS:** ~370 lines across 18 mechanisms

**Metaphor independence breakdown:**
- VERY HIGH (13): Work across ALL metaphors
- HIGH (4): Work across 3+ metaphors
- MEDIUM (1): Work in editorial/narrative contexts only

---

---

## Transition Grammar -- How Mechanisms Hand Off Between Zones

### Why This Section Exists

The catalog above documents 18 individual mechanisms. This section documents how to TRANSITION between them. Without transition grammar, zone boundaries are implemented as VOID (empty space with no signal), which produces the catastrophic whitespace pattern (ceiling experiment: 70-80% void, 9/9 auditors flagged).

**Evidence:** Ceiling experiment had 7 zone transitions (T1-T7). Each was implemented as 48-80px of empty space with no content or structural signal. Total transition whitespace: ~400-560px before any intra-zone spacing. The transitions themselves became the void.

### The 3 Transition Types

Every zone boundary or section transition MUST use exactly one of these three types. "No transition" (just empty space) is NOT a valid option.

#### Type 1: HARD CUT

**When to use:** Content changes DOMAIN (tutorial -> reference, narrative -> API documentation, conceptual -> procedural).

**CSS pattern:**
```css
.section-a + .section-b {
  border-top: 3px solid var(--color-primary);
  /* Zone background change occurs at element boundary */
  /* No additional spacing beyond --space-between (32px) */
}
```

**What the reader perceives:** Clear break. "We are now in a different part of the document." The 3px primary border is the strongest available transition signal under soul constraints.

**Validated example:** CD-006 uses 3px primary border hard cuts between major content modes (39/40 audit score).

#### Type 2: SPACING SHIFT

**When to use:** Content changes INTENSITY within the same domain (overview -> detail, introduction -> deep-dive, sparse -> dense within same topic).

**CSS pattern:**
```css
.zone--moderate {
  padding: var(--space-8); /* 32px */
  /* Intermediate spacing between sparse (--space-16 = 64px) and dense (--space-4 = 16px) */
  /* NO border, NO background change -- spacing alone carries the signal */
}
```

**What the reader perceives:** Gradual compression. "The content is getting more detailed." No visible break element -- the density change IS the transition.

**Validated example:** OD-004 uses spacing compression between established (40px) and speculative (16px) strata.

#### Type 3: CHECKPOINT

**When to use:** Content changes PHASE (prerequisites -> implementation -> verification, or when the page's metaphor explicitly defines zone boundaries with labels).

**CSS pattern:**
```css
.checkpoint {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4) var(--space-6); /* 16px 24px */
  background: var(--color-zone-breathing);
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

**What the reader perceives:** Structural landmark. "I've completed one phase and am entering another." The checkpoint element has visible content (a label), visible structure (borders + background), and occupies minimal space.

**Validated example:** Ceiling experiment's CHECK-01 through CHECK-05 system (the one successful spatial element in an otherwise failed page).

### Transition Selection Rule

For every pair of adjacent sections in your page, answer:

**Q: "Is the content on either side of this boundary from the SAME domain?"**
- NO (different domains) -> Type 1: HARD CUT
- YES, but different intensity -> Type 2: SPACING SHIFT
- YES, but different phase -> Type 3: CHECKPOINT

**Binary compliance test:** List all section boundaries. Each boundary must have exactly one transition type assigned. If any boundary has no assigned type (implemented as empty space only), the page FAILS transition grammar compliance.

### Maximum Transition Spacing

No transition may exceed `var(--space-max-zone)` (96px) in total vertical space consumed (see C3 below). If a transition needs more visual separation, add a CHECKPOINT element -- do not add more whitespace.

---

## Restraint Protocol -- When NOT to Deploy a Mechanism

### Why This Section Exists

The catalog above documents 18 mechanisms and a selection flow chart (Usage Guidance). That flow only addresses WHEN to use mechanisms. This section addresses WHEN NOT TO. Without restraint guidance, builders treat mechanism count as a target rather than a natural landing zone, producing front-loaded saturation.

**Evidence:** Ceiling experiment deployed 14 mechanisms in CSS. Only 1 was perceptually visible (Mode 4 audit finding). 13 mechanisms were present in code but not perceivable by readers. The problem was not insufficient mechanisms -- it was insufficient DISTRIBUTION and excessive CONCENTRATION.

### Mechanism Density Cap Per Viewport

**Rule:** No single viewport-height section (one screenful at 1440px) may contain MORE THAN 4 distinct mechanisms operating simultaneously.

**What counts as "operating":** A mechanism is operating in a section if its CSS properties are producing a VISIBLE effect within that viewport. A mechanism defined in CSS but not visible (e.g., border-weight gradient on an element not in view) does not count.

**Why 4:** At 4 simultaneous mechanisms, readers can perceive each one distinctly. At 5+, mechanisms compete for attention and none register clearly. The ceiling experiment concentrated 14 mechanisms in the first 20% of scroll -- average of ~7 mechanisms per viewport in the opening section -- and none were individually perceivable.

**Binary test:** For each viewport-height section of the page, count distinct mechanisms with VISIBLE effects. If any section exceeds 4: redistribute mechanisms to other sections or remove the least essential one from that section.

### Distribution Requirement

**Rule:** Across the full page, mechanisms must be distributed so that EVERY third of the page (0-33%, 33-66%, 66-100% by scroll depth) contains at least 2 distinct mechanisms.

**Why:** The ceiling experiment had 14 mechanisms in the first 20% and ~0 in the remaining 80%. Distribution, not count, drives perception.

**Binary test:** Divide page into thirds by scroll depth. Count distinct mechanisms in each third. If any third has fewer than 2 mechanisms: add mechanism deployment to that third or redistribute from an over-concentrated third.

### The Restraint Ratio

For Ceiling and Flagship tiers, document which mechanisms you CONSIDERED AND REJECTED for each section, and why.

**Target ratios:**
- Middle: Deploy 8-10, no rejection documentation required
- Ceiling: Deploy 12-15, document 3+ rejected mechanisms with reasoning
- Flagship: Deploy 16-18, document 5+ rejected mechanisms with reasoning

**Why:** Documenting rejections forces the builder to EVALUATE each mechanism rather than deploying all available mechanisms by default. A mechanism rejected with reasoning ("border-weight gradient not used in FAQ section because questions have equal importance -- no hierarchy to encode") demonstrates deeper understanding than deploying all 18 mechanisms mechanically.

**Binary test:** Count documented rejections. If below minimum for tier: add rejection documentation. This does NOT require the builder to reject additional mechanisms -- only to document the reasoning for mechanisms NOT deployed.

---

**END MECHANISM CATALOG**

```

### FILE 5: components.css
```css
/* ============================================
   MERGED COMPONENT CSS
   Soul compliance: border-radius: 0, box-shadow: none
   CD-ONLY and TENSION-TEST-ONLY markers applied
   ============================================ */


/* ============================================================================
   UNIVERSAL COMPONENTS (present across all stages)
   ============================================================================ */

/* --- CALLOUT FAMILY: Sparse label + dense body + 4px left border --- */

.callout {
  border-left: var(--border-left-width, 4px) solid var(--callout-border-color, var(--accent-color));
  background: var(--callout-bg-color, var(--color-zone-sparse));
  padding: var(--space-6, 24px) var(--space-5, 20px);
  margin-bottom: var(--space-6, 24px);
}

.callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta, 10px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--callout-label-color, var(--accent-color));
  margin-bottom: var(--space-3, 12px);
}

.callout__content,
.callout__body {
  font-size: var(--type-body, 14px);
  line-height: 1.7;
  color: var(--color-text);
}

/* Essence variant: serif italic for wisdom content */
.callout--essence .callout__content,
.callout--essence .callout__body {
  font-family: var(--font-display);
  font-size: 18px;
  font-style: italic;
}

/* Semantic color variants (all share 2-zone DNA) */
.callout--essence {
  --callout-border-color: var(--accent-amber, #D97706);
  --callout-bg-color: rgba(217, 119, 6, 0.05);
  --callout-label-color: var(--accent-amber, #D97706);
  --accent-color: var(--accent-amber, #D97706);
}

.callout--tip {
  --callout-border-color: var(--accent-green, #4A9D6B);
  --callout-bg-color: rgba(74, 157, 107, 0.05);
  --callout-label-color: var(--accent-green, #4A9D6B);
  --accent-color: var(--accent-green, #4A9D6B);
}

.callout--info,
.callout--note {
  --callout-border-color: var(--accent-blue, #4A90D9);
  --callout-bg-color: rgba(74, 144, 217, 0.05);
  --callout-label-color: var(--accent-blue, #4A90D9);
  --accent-color: var(--accent-blue, #4A90D9);
}

.callout--gotcha,
.callout--warning {
  --callout-border-color: var(--color-primary, #E83025);
  --callout-bg-color: rgba(232, 48, 37, 0.05);
  --callout-label-color: var(--color-primary, #E83025);
  --accent-color: var(--color-primary, #E83025);
}

.callout--challenge,
.callout--caution {
  --callout-border-color: var(--accent-purple, #7C3AED);
  --callout-bg-color: rgba(124, 58, 237, 0.05);
  --callout-label-color: var(--accent-purple, #7C3AED);
  --accent-color: var(--accent-purple, #7C3AED);
}


/* --- CODE BLOCKS: Dark background + syntax highlighting, 3px border --- */

pre {
  background: var(--color-text, #1A1A1A);
  color: var(--color-background, #FAFAF5);
  border: 3px solid var(--color-border, #E0D5C5);
  padding: var(--space-6, 24px) var(--space-8, 32px);
  font-family: var(--font-mono);
  font-size: var(--type-code, 14px);
  line-height: 1.5;
  overflow-x: auto;
  margin-bottom: var(--space-8, 32px);
  border-radius: var(--border-radius, 0);
}

pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
}

code {
  font-family: var(--font-mono);
  font-size: var(--type-code, 14px);
  line-height: 1.5;
}

/* Inline code within paragraphs */
p code,
li code {
  background: var(--color-border-subtle, #F0EBE3);
  padding: 2px 6px;
  font-size: var(--type-code, 14px);
  border: 1px solid var(--color-border, #E0D5C5);
  border-radius: var(--border-radius, 0);
}

/* Code snippet component with header (DD/OD specific structure) */
.code-snippet {
  background: #1A1A1A;
  margin-bottom: var(--space-6, 24px);
  border-radius: var(--border-radius, 0);
}

.code-snippet__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2, 8px) var(--space-4, 16px);
  background: #1A1A1A;
  border-bottom: 1px solid var(--color-border, #E0D5C5);
}

.code-snippet__filename {
  font-family: var(--font-mono);
  font-size: var(--type-meta, 11px);
  color: var(--color-text-secondary, #666666);
}

.code-snippet__copy {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--color-primary, #E83025);
  padding: var(--space-1, 4px) var(--space-2, 8px);
  border: 1px solid var(--color-primary, #E83025);
  background: transparent;
  cursor: pointer;
  border-radius: var(--border-radius, 0);
}

.code-snippet__content {
  padding: var(--space-4, 16px);
  font-family: var(--font-mono);
  font-size: var(--type-code, 14px);
  line-height: 1.5;
  color: #FAFAF5;
  overflow-x: auto;
  white-space: pre;
}

/* Syntax highlighting tokens (locked palette) */
.code-snippet__content .comment { color: #666666; }
.code-snippet__content .keyword { color: #E83025; }
.code-snippet__content .string { color: #6B9B7A; }
.code-snippet__content .function { color: #4A7C9B; }
.code-snippet__content .variable { color: #C97065; }


/* --- PAGE HEADER: ID, title, subtitle --- */

.exploration-header,
.page-header {
  border-bottom: 3px solid var(--color-primary, #E83025);
  padding: var(--space-6, 24px);
  background: white;
  margin-bottom: var(--space-12, 48px);
}

.exploration-id,
.page-header__id {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-primary, #E83025);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-2, 8px);
}

.exploration-title,
.page-header__title {
  font-family: var(--font-display);
  font-size: 32px;
  font-style: italic;
  margin-bottom: var(--space-3, 12px);
}

.exploration-hypothesis,
.page-header__subtitle {
  font-size: 14px;
  color: var(--color-text-secondary, #666666);
  max-width: 600px;
}


/* --- PAGE FOOTER: Metadata + navigation --- */

.page-footer {
  border-top: 3px solid var(--color-primary, #E83025);
  padding: var(--space-6, 24px);
  margin-top: var(--space-16, 64px);
  font-size: var(--type-meta, 12px);
  color: var(--color-text-secondary, #666666);
}

.page-footer__section {
  margin-bottom: var(--space-4, 16px);
}

.page-footer__label {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-2, 8px);
}


/* --- TABLES: 3px header border, uppercase mono headers --- */

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--space-8, 32px);
  display: block;
  overflow-x: auto;
}

th {
  font-family: var(--font-body);
  font-size: var(--type-meta, 12px);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: left;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 3px solid var(--color-border, #E0D5C5);
  color: var(--color-text-secondary, #666666);
}

td {
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border, #E0D5C5);
  font-size: var(--type-body, 14px);
  line-height: 1.6;
  vertical-align: top;
}

tr:last-child td {
  border-bottom: none;
}


/* --- SKIP LINK: Keyboard navigation skip-to-content --- */

.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary, #E83025);
  color: var(--color-background, #FEF9F5);
  padding: 8px 16px;
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
  border: none;
  border-radius: var(--border-radius, 0);
}

.skip-link:focus {
  top: 0;
}


/* --- FOCUS-VISIBLE: Keyboard navigation outline --- */

*:focus-visible {
  outline: 3px solid var(--color-primary, #E83025);
  outline-offset: 2px;
}


/* --- SELECTION STYLING: Text selection highlight --- */

::selection {
  background: var(--color-primary, #E83025);
  color: var(--color-background, #FEF9F5);
}


/* --- STATS BAR / METADATA GRID: Horizontal flex layout, label-value pairs --- */

.stats-bar {
  display: flex;
  gap: var(--space-6, 24px);
  flex-wrap: wrap;
  margin-bottom: var(--space-6, 24px);
}

/* DD/OD pattern: flex segments */
.stats-bar__segment {
  flex: 1;
  padding: var(--space-2, 8px);
  text-align: center;
  border: 1px solid var(--color-border, #E0D5C5);
}

.stats-bar__label {
  font-size: var(--type-meta, 10px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary, #666666);
  margin-bottom: var(--space-1, 4px);
}

.stats-bar__value {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text, #1A1A1A);
}

/* CD pattern: vertical stat items */
.stat-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
}

.stat-label {
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary, #666666);
}

.stat-value {
  font-family: var(--font-body);
  font-size: var(--type-body, 16px);
  font-weight: 600;
  color: var(--color-text, #1A1A1A);
}


/* --- SECTION INDICATOR / META LINE: Mono uppercase secondary color --- */

.section-indicator {
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary, #666666);
  margin-bottom: var(--space-4, 16px);
  padding-bottom: var(--space-2, 8px);
  border-bottom: 1px solid var(--color-border-subtle, #F0EBE3);
}

.meta-line {
  font-family: var(--font-body);
  font-size: var(--type-meta, 10px);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary, #666666);
  margin-bottom: var(--space-2, 8px);
  display: flex;
  align-items: center;
  gap: var(--space-4, 16px);
  flex-wrap: wrap;
}


/* --- FILE TREE: Monospace directory structure --- */

.file-tree {
  background: var(--color-background, #FEF9F5);
  border: 1px solid var(--color-border-subtle, #F0EBE3);
  border-left: 4px solid var(--accent-blue, #4A90D9);
  padding: var(--space-4, 16px);
  margin-bottom: var(--space-6, 24px);
}

.file-tree__label {
  font-family: var(--font-body);
  font-size: var(--type-meta, 10px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-blue, #4A90D9);
  margin-bottom: var(--space-3, 12px);
}

.file-tree__content {
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

.file-tree__content .folder { color: var(--accent-blue, #4A90D9); }
.file-tree__content .file { color: var(--color-text, #1A1A1A); }
.file-tree__content .comment { color: var(--color-text-secondary, #666666); }


/* --- DECISION MATRIX: Structured comparison grid --- */

.decision-matrix {
  border-left: 4px solid var(--color-primary, #E83025);
  margin-bottom: var(--space-6, 24px);
  overflow-x: auto;
}

.decision-matrix__header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-4, 16px);
  padding: var(--space-3, 12px) var(--space-4, 16px);
  background: rgba(232, 48, 37, 0.05);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.decision-matrix__row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-4, 16px);
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-subtle, #F0EBE3);
  font-size: 14px;
}

.decision-matrix__row:last-child {
  border-bottom: none;
}


/* --- DENSITY INDICATOR: Visual density level marker --- */

.density-indicator {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-border, #E0D5C5);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: var(--space-4, 16px);
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
}

.density-bar {
  height: 4px;
  background: var(--color-border, #E0D5C5);
}

.density-bar--sparse { width: 20px; }
.density-bar--medium { width: 40px; }
.density-bar--dense { width: 80px; }


/* --- Q&A PAIR: Question-answer structure with offset positioning --- */

.question {
  max-width: 60%;
  margin-left: var(--space-8, 32px);
  margin-bottom: var(--space-4, 16px);
}

.question__marker {
  width: 8px;
  height: 8px;
  background: var(--color-primary, #E83025);
  display: inline-block;
  margin-right: var(--space-2, 8px);
  border-radius: var(--border-radius, 0);
}

.question__text {
  font-family: var(--font-display);
  font-size: var(--type-subsection, 22px);
  font-style: italic;
  line-height: 1.4;
}

.answer {
  padding: var(--space-6, 24px);
  margin-bottom: var(--space-8, 32px);
  background: var(--color-zone-dense, #FFFFFF);
}

.answer__lead {
  font-size: var(--type-body, 16px);
  line-height: 1.7;
  margin-bottom: var(--space-4, 16px);
}

/* Editorial drop cap on opening paragraphs */
.answer__lead--dropcap::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  line-height: 0.85;
  float: left;
  margin: 0 0.1em 0 0;
  font-weight: normal;
}


/* --- BREADCRUMB NAVIGATION: Hierarchical page location --- */

.breadcrumb {
  font-size: var(--type-meta, 12px);
  color: var(--color-text-secondary, #666666);
  margin-bottom: var(--space-4, 16px);
}

.breadcrumb__link {
  color: var(--color-text-secondary, #666666);
  text-decoration: none;
}

.breadcrumb__link:hover {
  color: var(--color-primary, #E83025);
}

.breadcrumb__separator {
  margin: 0 var(--space-2, 8px);
  color: var(--color-border, #E0D5C5);
}


/* ============================================================================
   CD-SPECIFIC COMPONENTS
   ============================================================================ */

/* --- REASONING COMPONENT (CD-ONLY): Framed deliberation container --- */

/* CD-ONLY */
.reasoning {
  border: 3px solid var(--color-border, #E0D5C5);
  padding: var(--space-8, 32px);
  margin: var(--space-8, 32px) 0;
  background: var(--color-zone-sparse);
}

.reasoning__header {
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  margin-bottom: var(--space-6, 24px);
  padding-bottom: var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border, #E0D5C5);
}

.reasoning__icon {
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-amber, #D97706);
  border: 1px solid var(--accent-amber, #D97706);
  padding: var(--space-1, 4px) var(--space-3, 12px);
}

.reasoning__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection, 22px);
  font-style: italic;
  color: var(--color-text);
}

.reasoning__body p {
  margin-bottom: var(--space-4, 16px);
}

.reasoning__body p:last-child {
  margin-bottom: 0;
}


/* --- CORE ABSTRACTION (CD-ONLY): Essence quote above, code proof below --- */

/* CD-ONLY */
.core-abstraction {
  border: 3px solid var(--color-primary, #E83025);
  margin: var(--space-8, 32px) 0;
  background: var(--color-zone-dense);
}

.core-abstraction__essence {
  padding: var(--space-8, 32px);
  border-bottom: 3px solid var(--color-primary, #E83025);
  background: var(--color-zone-sparse);
}

.core-abstraction__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-purple, #7C3AED);
  margin-bottom: var(--space-3, 12px);
}

.core-abstraction__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-section, 26px);
  line-height: 1.4;
  color: var(--color-text);
  max-width: 55ch;
}

.core-abstraction__proof {
  padding: 0;
}

.core-abstraction__proof pre {
  border: none;
  margin-bottom: 0;
}


/* --- BENTO GRID (CD-ONLY): 2-column grid for high-density containment --- */

/* CD-ONLY */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6, 24px);
  margin: var(--space-8, 32px) 0;
}

.bento-cell {
  border: 3px solid var(--color-border, #E0D5C5);
  padding: var(--space-6, 24px);
  background: var(--color-zone-dense);
}

.bento-cell--primary {
  grid-column: 1 / -1;
}

.bento-cell__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary, #666666);
  margin-bottom: var(--space-4, 16px);
  padding-bottom: var(--space-2, 8px);
  border-bottom: 1px solid var(--color-border-subtle, #F0EBE3);
}

.bento-cell pre {
  margin-bottom: 0;
}


/* --- ESSENCE PULLQUOTE (CD-ONLY): Bridge transition element --- */

/* CD-ONLY */
.essence-pullquote {
  border-left: 4px solid var(--accent-purple, #7C3AED);
  padding: var(--space-8, 32px) var(--space-6, 24px);
  margin: var(--space-between, 40px) 0;
  background: var(--color-zone-sparse);
}

.essence-pullquote p {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-section, 26px);
  line-height: 1.4;
  color: var(--color-text);
  max-width: 55ch;
}

.essence-pullquote cite {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  font-style: normal;
  color: var(--color-text-secondary, #666666);
  margin-top: var(--space-3, 12px);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}


/* --- DENSITY METER (CD-ONLY): 5-segment density visualization bar --- */

/* CD-ONLY */
.density-meter {
  display: flex;
  gap: var(--space-1, 4px);
  margin-bottom: var(--space-6, 24px);
}

.density-meter__segment {
  height: var(--space-2, 8px);
  flex: 1;
  background: var(--color-border-subtle, #F0EBE3);
  border: 1px solid var(--color-border, #E0D5C5);
}

.density-meter__segment--filled {
  background: var(--color-primary, #E83025);
  border-color: var(--color-primary, #E83025);
}

.density-meter__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  color: var(--color-text-secondary, #666666);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: var(--space-1, 4px);
}


/* --- VERSION BADGE (CD-ONLY): Header metadata badge --- */

/* CD-ONLY */
.version-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--type-meta, 10px);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border: 1px solid var(--color-text-secondary, #666666);
  color: var(--color-text-secondary, #666666);
}


/* --- SECTION ZONES (CD-ONLY): Density progression containers (values are examples, not mandates) --- */

/* CD-ONLY */
.section-zone {
  padding: var(--space-12, 48px) var(--space-6, 24px);
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

/* Density progression examples (available, not mandated) */
.section-zone--opening {
  background: var(--color-zone-sparse);
  padding-top: var(--space-16, 64px);
  padding-bottom: var(--space-16, 64px);
}

.section-zone--rising {
  background: var(--color-zone-dense);
  padding-top: var(--space-12, 48px);
  padding-bottom: var(--space-12, 48px);
}

.section-zone--building {
  background: var(--color-zone-dense);
  padding-top: var(--space-8, 32px);
  padding-bottom: var(--space-8, 32px);
}

.section-zone--peak {
  background: var(--color-zone-dense);
  padding-top: var(--space-6, 24px);
  padding-bottom: var(--space-8, 32px);
}

.section-zone--resolution {
  background: var(--color-zone-sparse);
  padding-top: var(--space-16, 64px);
  padding-bottom: var(--space-16, 64px);
}


/* --- BREATHING ZONES (CD-ONLY): Between-section decompression --- */

/* CD-ONLY */
.breathing-zone {
  background: var(--color-zone-breathing);
  padding: var(--space-12, 48px) var(--space-6, 24px);
  border-top: 3px solid var(--color-border, #E0D5C5);
  border-bottom: 3px solid var(--color-border, #E0D5C5);
}

.breathing-zone__inner {
  max-width: 1100px;
  margin: 0 auto;
}

.breathing-zone--tight {
  padding: var(--space-6, 24px) var(--space-6, 24px);
}

.breathing-zone--release {
  padding: var(--space-16, 64px) var(--space-6, 24px);
}


/* ============================================================================
   TENSION-TEST-ONLY COMPONENTS (lower confidence — metaphor-specific)
   ============================================================================ */

/* --- LAYER BOUNDARIES (TENSION-TEST-ONLY): Horizontal separators --- */

/* TENSION-TEST-ONLY — lower confidence */
.stratum,
.layer {
  position: relative;
  transition: none;
}

.stratum-boundary,
.layer-boundary {
  height: 3px;
  background: var(--color-border, #E0D5C5);
  position: relative;
}

.stratum-boundary--major,
.layer-boundary--major {
  height: 4px;
  background: var(--color-text-secondary, #666666);
}


/* --- BUILDING FLOOR STRUCTURE (TENSION-TEST-ONLY): Hierarchical nesting --- */

/* TENSION-TEST-ONLY — lower confidence */
.floor {
  background: var(--color-background);
  border: 4px solid var(--color-text);
  padding: 0;
  margin-bottom: 24px;
}

.floor-label {
  background: var(--color-text);
  color: var(--color-background);
  padding: 12px 32px;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.room {
  border: 3px solid var(--color-text);
  padding: 24px;
  margin-bottom: 16px;
}


/* --- COMPRESSION GRID (TENSION-TEST-ONLY): 2-column compact grid --- */

/* TENSION-TEST-ONLY — lower confidence */
.compression-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--color-border, #E0D5C5);
  margin: 24px 0;
}

.compression-cell {
  background: var(--color-zone-sparse);
  padding: 16px 20px;
}


/* ============================================================================
   RESPONSIVE UTILITIES
   ============================================================================ */

@media (max-width: 768px) {
  .exploration-title,
  .page-header__title {
    font-size: 26px;
  }

  .question {
    max-width: 100%;
    margin-left: 0;
  }

  .answer {
    padding: var(--space-4, 16px);
  }

  .code-snippet__content {
    font-size: 12px;
  }

  .decision-matrix__header,
  .decision-matrix__row {
    grid-template-columns: 1fr;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }
}


/* ============================================================================
   REDUCED MOTION (Accessibility)
   ============================================================================ */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}



```

### FILE 6: compositional-rules.md
```
# Compositional Grammar Rules

**Lens:** I am using Identity + Enablement hybrid lens.

**Date:** 2026-02-14
**Extraction Method:** Source-first (read HTML structure, then CSS patterns)
**Evidence Files:** DD-003-islands.html, DD-006-fractal.html, OD-004-confidence.html, OD-006-creative.html, CD-005-multi-axis-transition.html, CD-006-pilot-migration.html

---

## 1. Zone Nesting Rules

### Rule N1: Callouts Nest Inside Zone Wrappers (NOT Other Callouts)

**Evidence:**
- DD-003 (islands.html): `.density-island` contains `.callout-tip` and `.callout-info` (lines 642-647, 713-719)
- OD-004 (confidence.html): Strata zones (`.stratum--established`, `.stratum--probable`) contain callouts, NOT callouts within callouts
- CD-006 (pilot-migration.html): Page sections contain callouts as direct children

**Pattern:**
```html
<div class="zone-wrapper">  <!-- Geological stratum, island, section -->
  <div class="callout">     <!-- Callout inside zone -->
    ...
  </div>
</div>
```

**NOT:**
```html
<div class="callout">
  <div class="callout">  <!-- NEVER nest callouts -->
```

**Maximum nesting depth observed:** 2 levels (zone → callout). Never deeper.

---

### Rule N2: Code Blocks Can Appear Inside Callouts AND Independently

**Evidence:**
- DD-003: Code blocks appear INSIDE density islands (`.density-island` contains `.code-snippet`, lines 622-640)
- DD-006 (fractal.html): Code blocks appear as independent character-scale demonstrations (lines 949-990)
- OD-006: Code blocks nest inside sections but NOT inside callouts (sections contain callouts OR code, not both nested)

**Pattern:** Code blocks are PEERS to callouts (same nesting level) OR independent components.

---

### Rule N3: Decision Matrices Can Contain Lists (NOT Callouts)

**Evidence:**
- DD-003: `.decision-matrix` contains `.decision-matrix__row` grid items (lines 649-670), NO callouts inside
- Pattern is row-based data display, not nested semantic components

**Constraint:** Decision matrices are TERMINAL nodes — they contain data rows, not other components.

---

### Rule N4: Maximum Component Nesting Depth = 2

**Evidence across all 6 files:**
- Level 1: Zone wrapper (`.stratum`, `.density-island`, `.section`)
- Level 2: Component (`.callout`, `.code-snippet`, `.decision-matrix`)
- NEVER Level 3: No components nest inside components

**OBSERVATION — needs more evidence:** Bento grids MAY nest callouts inside cells (CD-005, CD-006 bento patterns suggest this but need verification).

---

## 2. Spacing Rhythm Patterns — INHALE/EXHALE Model

### Rule R1: Dense Sections Followed by Sparse Sections (Page Scale)

**Evidence:**
- DD-003: Sparse ocean (80px padding, lines 274-280) → Dense island (24px padding, lines 288-295) → Sparse separator (96px height, lines 541-552) → Next island
- DD-006: Dense section demonstrations (32px padding) → Sparse section dividers (48px+ margin, lines 690-715)
- OD-004: ESTABLISHED stratum (sparse, 40px padding) → PROBABLE stratum (moderate, 32px) → SPECULATIVE (dense, 20px) → OPEN (densest, 16px) — INVERSE rhythm (certain = sparse, uncertain = dense, lines 246-249)
- CD-006: Sequential sections alternate density via padding (lines suggest compound rhythm)

**Pattern:** Every 2-4 dense zones MUST be followed by breathing room (48px+ spacing or background color shift to `--color-zone-breathing`).

---

### Rule R2: Minimum Consecutive Dense Sections = 1, Maximum = 3

**Evidence:**
- DD-003: Single dense island → sparse separator → next island (never more than 1 dense without breathing)
- DD-006: 4 scale demonstrations (3 dense concepts) → section divider (breathing)
- OD-006: 6 sections each with DIFFERENT organizational modes — density varies per section, never more than 2-3 dense sections consecutively

**Constraint:** If 3 dense sections appear consecutively, the NEXT section MUST be sparse (breathing zone, 64-96px padding).

---

### Rule R3: Breathing-Room Triggers

**What triggers a breathing zone:**
- After 2-3 dense components (callouts, code blocks, decision matrices)
- Between major page sections (chapter transitions)
- After viewport-height dense content (perceptual density ceiling)
- Before/after fractal scale shifts (transitioning from page-scale to section-scale demonstrations)

**Evidence:**
- DD-003: Sparse separator after 2 islands (lines 675-678)
- DD-006: Section divider after 4 scale demos (lines 836-838)
- OD-004: Chapter dividers use `--color-zone-breathing` background + 64px margin
- CD-006: Breathing zones separate axis pattern transitions

---

### Rule R4: Spacing Compression Inside Components vs Between Components

**Inside components (DENSE):**
- Callout label → body: 8-12px (`--space-2` to `--space-3`)
- Code line spacing: 1.5 line-height (minimal)
- Decision matrix rows: 8-12px gap

**Between components (SPARSE):**
- Callout → next component: 24-32px (`--space-6` to `--space-8`)
- Section → next section: 48-64px (`--space-12` to `--space-16`)
- Chapter → next chapter: 64-96px (`--space-16` to `--space-24`)

**Evidence:**
- DD-003: Callout internal padding 16-20px (lines 406, 426), callout margin 24px (line 406)
- DD-006: Internal component spacing 8-12px, between-component spacing 32-48px
- Tokens.css: `--space-within: 8px`, `--space-between: 32px`, `--space-chapter: 64px` (semantic aliases)

**Ratio:** Inside:Between = 1:3 to 1:4 (e.g., 12px inside, 48px between).

---

## 3. Background Zone Rules

### Rule Z1: Background Color Changes Signal Content Type Shift

**Evidence:**
- DD-003: White islands on warm cream ocean (`--color-background: #FEF9F5` vs `background: white`)
- DD-006: Alternating backgrounds for dense vs sparse scale sections (lines 380-387)
- OD-004: Zone backgrounds encode confidence: `--color-zone-sparse` (established) → `--color-zone-moderate` (probable) → `--color-zone-densest` (open) (lines 223-228)
- CD-006: Zone tokens for axis patterns (lines 150-154)

**Color-to-function mapping:**
- `--color-zone-sparse (#FEF9F5)`: Confident, certain, or breathing content
- `--color-zone-dense (#FFFFFF)`: Standard content zones
- `--color-zone-breathing (#FAF5ED)`: Recovery zones, chapter dividers, mode transitions

**OBSERVATION — needs more evidence:** Dark backgrounds (`#1A1A1A`) signal CODE zones or inverted emphasis (headers, footers). Need 2+ examples to confirm as grammar rule.

---

### Rule Z2: Maximum Zone Changes Per Viewport = 2-3

**Evidence:**
- DD-003: Viewport typically shows 1 island (dense white) on ocean (sparse warm cream) = 1 zone change visible
- DD-006: Fractal visualization section shows 2-3 background shifts within viewport
- OD-004: Geological strata show 2 confidence zones per viewport at most

**Constraint:** More than 3 background color changes per viewport creates visual chaos (anti-pattern: "strobe effect").

**OBSERVATION — needs more evidence:** This may correlate with perceptual guardrail (viewport-height content limit). Needs validation across more files.

---

### Rule Z3: Zone Transitions Use Border OR Spacing (Not Both Heavily)

**Evidence:**
- DD-003: Islands use 4px left border + subtle 1px border on other edges + 16px margin (border PRIMARY, spacing SECONDARY)
- DD-006: Section dividers use 48-64px spacing + 1px decorative line (spacing PRIMARY, border SECONDARY, lines 690-715)
- OD-004: Stratum transitions use 48px spacing + 3px rule + label (BOTH present but serving different functions: spacing = breathing, border = structural marker, per EXT-CONF-014)

**Pattern:** If heavy border (3-4px), use moderate spacing (24-32px). If light border (1px or none), use generous spacing (48-96px).

---

## 4. Component Density Limits — Information Density Per Viewport

### Rule D1: Maximum Components Per Viewport-Height = 3-4

**Evidence:**
- DD-003: 1 island + 1 essence callout visible per viewport (2 components)
- DD-006: Fractal visualization (1 component) OR scale comparison grid (1 component split into 4 sub-items)
- OD-004: 1 stratum section + 1-2 callouts visible = 2-3 components
- CD-006: Section header + 1-2 content blocks + max 1 callout = 3-4 components

**Constraint:** 5+ components per viewport = density ceiling violation (perceptual guardrail from tension-composition skill).

---

### Rule D2: Density Becomes Overwhelming When...

**Triggers:**
- 3+ callouts in viewport (callout cacophony anti-pattern, R5-A1)
- Code block + 2 callouts + decision matrix in single viewport (>4 components)
- No whitespace breaks for 2+ viewport-heights (missing breathing zones)

**Evidence:**
- DD-F-014 / R5-A1: "Max 2 callouts per viewport" (cited across OD-004, OD-006, CD-005)
- Compositional Strategy Library: Bento grid warning "More than 12 total cells without grouping/breathing zones" (line 1231)
- OD-006: Each section's density emerges from organizational mode — sections with 3+ callouts felt overwhelming per audit

---

### Rule D3: Density Variation Across Page Sections

**Pattern:** Intro (sparse) → Middle (dense) → Conclusion (sparse)

**Evidence:**
- DD-003: Sparse ocean intro → dense islands → sparse ocean conclusion (lines 589-607, 836-845)
- DD-006: Sparse intro (lines 799-806) → dense demonstrations (4 scale levels) → sparse essence callout conclusion (lines 1050-1059)
- OD-004: Follows GEOLOGICAL + CRESCENDO: sparse established → dense speculative (INVERSE of typical pattern due to confidence encoding)
- CD-006: Tutorial structure follows progressive density CRESCENDO (sparse setup → dense implementation)

**OBSERVATION — needs more evidence:** GEOLOGICAL pattern INVERTS this (certain = sparse, uncertain = dense). Need to classify when to use standard vs inverted density arc.

---

## 5. 2-Zone DNA Pattern — Sparse Label + Dense Body

### Rule DNA1: Callout Structure is ALWAYS 2-Zone

**Evidence (6/6 files demonstrate this):**
- DD-003: `.callout-tip__label` (10px, uppercase, sparse) + `.callout-tip__content` (14px, body) (lines 409-421)
- DD-006: `.callout-essence__label` (10px, uppercase) + `.callout-essence__content` (17px, italic serif) (lines 581-596)
- OD-004: All callouts follow label+body pattern
- OD-006: All callouts follow label+body pattern
- CD-005: All callouts follow label+body pattern
- CD-006: All callouts follow label+body pattern

**Characteristics:**

**Label zone:**
- Font: `var(--font-body)` (Inter, NOT serif)
- Size: `var(--type-meta)` (0.75rem / 12px) — was 10px in older files, standardized to 12px per Convention Spec
- Weight: 600 (semi-bold)
- Transform: `text-transform: uppercase`
- Letter-spacing: `0.1em` to `0.15em`
- Color: Accent color matching border (`--accent-blue`, `--accent-green`, etc.)
- Margin-bottom: `--space-2` (8px) separation from body

**Body zone:**
- Font: `var(--font-body)` (Inter) OR `var(--font-display)` (Instrument Serif italic) for Essence callouts ONLY
- Size: `var(--type-body)` (1rem / 16px) or slightly smaller (14px for compact callouts)
- Line-height: 1.6-1.7
- Color: `--color-text` (standard text color)

---

### Rule DNA2: Separator Between Zones is Spacing (NOT Border)

**Evidence:**
- All 6 files: Label → body separation via `margin-bottom: 8-12px` on label
- NO horizontal rule or border between label and body
- Visual separation achieved through size contrast (12px → 16px) + color contrast (accent → text) + spacing (8-12px gap)

**Exception:** Decision matrices use 1px border between header and rows (functional data table pattern, NOT 2-zone callout pattern).

---

### Rule DNA3: 2-Zone DNA Applies to Non-Callout Components

**Evidence:**
- DD-003: `.density-island__label` (10px mono uppercase) + `.density-island__content` (14px body) (lines 307-325)
- DD-006: `.scale-demo__level` (10px mono badge) + `.scale-demo__title` (20px serif italic) (lines 343-358)
- OD-004: Stratum headers follow sparse label (confidence level) + dense content pattern
- Code blocks: Filename header (sparse, 11-12px mono) + code content (dense, 14px mono, lines 356-393 in DD-003)

**Pattern is UNIVERSAL:** Sparse metadata label + dense content body = 2-zone DNA at component scale.

---

## 6. Compound Grammar — Multi-Pattern Pages

### Rule C1: Sequential NOT Simultaneous (AD-F-024)

**Evidence:**
- CD-005: Z-Pattern (Section 1) → F-Pattern (Section 2) → Bento Grid (Section 3) — SEQUENTIAL sections, each commits to ONE pattern
- CD-006: Uses ALL 5 axis patterns across different sections, never mixing within a section
- OD-006: 6 sections, each using DIFFERENT organizational pattern (conversational → narrative → task → confidence → spatial → emergent)

**Constraint:** Do NOT mix axis patterns or organizational patterns within a single section. One section = one pattern.

**Exception (OBSERVATION):** Compound sections MAY layer density pattern (e.g., CRESCENDO) over organizational pattern (e.g., narrative), but axis patterns remain singular.

---

### Rule C2: Transition Grammar Between Patterns (AD-F-025)

**Types of transitions observed:**

**SMOOTH transition:** Patterns with compatible reading flows (e.g., Z-Pattern → F-Pattern)
- Evidence: CD-005 uses SMOOTH transition between Z and F (both are scanning patterns)
- Visual: Minimal spacing (32-48px), no background color shift, no bridge content

**BRIDGE transition:** Patterns with incompatible reading flows (e.g., F-Pattern → Bento Grid)
- Evidence: CD-005 uses BRIDGE transition between F and Bento (linear → random-access shift)
- Visual: Breathing zone (64-96px), optional background color shift, optional transitional callout

**BREATHING transition:** Between major chapters or density mode shifts
- Evidence: DD-003 sparse separators (96px height), OD-004 chapter dividers (64px + breathing background)
- Visual: Maximum spacing (96px+), background color shift to `--color-zone-breathing`, optional visual marker (horizontal rule)

---

### Rule C3: Maximum Patterns Per Page = 5-6

**Evidence:**
- CD-006: Uses 5 axis patterns (Z, F, Bento, Spiral, Choreography) across 7 sections — MAX observed
- OD-006: Uses 6 organizational patterns (conversational, narrative, task, confidence, spatial, emergent) across 6 sections — MAX observed

**Constraint:** More than 6 different patterns on one page creates cognitive whiplash (too many mode shifts).

**OBSERVATION — needs more evidence:** This may correlate with fractal scales (6 patterns = 6 page-scale sections, each internally consistent). Needs confirmation.

---

## 7. Fractal Application Rules (DD-F-006 Mandatory)

### Rule F1: Fractal Self-Similarity at 4 Scales REQUIRED

**Evidence (ALL 6 files comply):**

**DD-006 (defines the pattern):**
- PAGE SCALE: Dense/sparse section alternation
- SECTION SCALE: Dense/sparse paragraph alternation
- COMPONENT SCALE: Dense/sparse zone alternation (callout label/body)
- CHARACTER SCALE: Dense/sparse line alternation (code/comments)

**OD-004, OD-006, CD-005, CD-006:** All demonstrate 4-scale fractal compliance per inline threading headers.

**Constraint:** ANY exploration missing fractal at even 1 scale is INVALID per DD-F-006 mandate.

---

### Rule F2: Each Scale Repeats the SAME Rhythm

**Evidence:**
- DD-006: `█░░█░░█░░` pattern repeats at page, section, component, character levels (lines 815-832)
- OD-006: Most fractal of all ODs — demonstrates rhythm at NAVIGATION SCALE (5th scale added) plus standard 4

**Pattern:** If page alternates dense/sparse (PULSE), sections within each page zone also alternate dense/sparse, components within sections alternate, and character-level content alternates.

**OBSERVATION — needs more evidence:** Some patterns may use INVERTED rhythm at different scales (e.g., GEOLOGICAL: page-scale sparse→dense, but section-scale dense→sparse within deep strata). Need more examples to codify inversion rules.

---

### Rule F3: Fractal Breaks Create Coherence Loss

**Evidence (negative constraint):**
- Compositional Strategy Library: "Fractal-check at 4 scales" is mandatory verification step (line 1056)
- OD-006 Wave 5 audit: "DD-F-006 fractal at 5 scales — MOST fractal of all ODs" cited as quality indicator
- Perceptual guardrail from tension-composition skill: Fractal compliance correlates with higher audit scores

**Constraint:** If fractal rhythm breaks at any scale, page loses "coherent and navigable" quality (DD-006 finding).

---

## 8. Grid Grammar

### Rule G1: Bento Grid Cell Span Encodes Importance

**Evidence:**
- Compositional Strategy Library: "2x2 large cell = conceptual anchor, 2x1 wide cell = secondary importance, 1x1 standard cell = tertiary content" (lines 1241-1245)
- DD-003: Archipelago uses 2-column grid but uniform cell sizes (no span variation) — simpler hierarchy (lines 520-536)

**Pattern:**
```css
.bento-cell--large { grid-column: span 2; grid-row: span 2; } /* Anchor */
.bento-cell--wide { grid-column: span 2; }                     /* Secondary */
.bento-cell { /* 1x1 default */ }                               /* Tertiary */
```

**Constraint:** Do NOT use uniform cell sizes in bento grids — creates "grid monotony" (CD-005 audit finding).

---

### Rule G2: Grid Gaps = OCEAN Whitespace (ISLANDS Density Pattern)

**Evidence:**
- Compositional Strategy Library: "Grid cells ARE islands; grid gaps ARE sparse ocean" (AD-F-009, line 650)
- DD-003: `.archipelago` gap of 24px separates mini-islands (line 523)

**Pattern:** Grid gap should be 24-32px (`--space-6` to `--space-8`) to create perceptible "ocean" between island cells.

---

### Rule G3: Maximum Grid Cells Without Breathing = 12

**Evidence:**
- Compositional Strategy Library: Bento Task Islands recipe warns "More than 12 total cells without grouping/breathing zones" (line 1231)
- DD-003: Archipelago shows 2 cells only (conservative application)

**Constraint:** If grid exceeds 12 cells, MUST introduce breathing zones (spacing, grouping, or section breaks).

---

## 9. Responsive Collapse Grammar

### Rule RC1: Grids Collapse to 1-2 Columns at 768px

**Evidence:**
- DD-003: `@media (max-width: 768px) { .archipelago { grid-template-columns: 1fr; } }` (lines 527-531)
- DD-006: Fractal diagram collapses from 4-column to single-column at 768px (lines 254-258)
- All CD files: Convention spec Section 5 enforces 768px breakpoint

**Pattern:** Multi-column grids (2-4 cols) collapse to 1 column below 768px. Bento grids may maintain 2 columns at tablet if cells are compact.

---

### Rule RC2: Padding Compression at Mobile

**Evidence:**
- Compositional Strategy Library: "At 768px: padding compression, stacking" (line 664)
- Tension-composition skill: 32px padding floor even at mobile (guardrail)

**Pattern:**
- Desktop: 48-64px section padding
- Tablet (768px): 32-48px section padding
- Mobile (480px): 24-32px section padding (NEVER below 24px per guardrail)

---

## 10. Anti-Pattern Grammar (What NOT to Do)

### Rule AP1: NO Callout Stacking (DD-F-014 / R5-A1)

**Evidence (cited in OD-004, OD-006, CD-005, CD-006):**
- "Max 2 callouts per viewport section"
- Callout cacophony = 3+ callouts visible simultaneously

**Constraint:** If 2 callouts already present in viewport, next callout MUST be below fold OR in different section.

---

### Rule AP2: NO Uniform Density (DD-F-017)

**Evidence:**
- All explorations vary density across sections
- Uniform padding throughout page = monotony anti-pattern

**Constraint:** MUST vary density via padding, spacing, or background color changes. Minimum 2 density modes per page.

---

### Rule AP3: NO Fighting the Pattern (DD-F-018)

**Evidence:**
- Compositional Strategy Library: "Sparse strata stay sparse, dense strata stay dense" (line 48)
- OD-006: "Each section's density emerges from its organizational pattern (not imposed)" (diagnostic question)

**Constraint:** If organizational pattern generates PULSE rhythm, do NOT override with forced CRESCENDO density. Let density emerge from structure.

---

### Rule AP4: NO Simultaneous Axis Patterns (AD-F-024)

**Evidence:**
- CD-005, CD-006: Each section commits to ONE axis pattern
- Simultaneous Z+F patterns = cognitive overload

**Constraint:** One section = one axis pattern. Use sequential sections for pattern transitions.

---

## 11. Open Grammar Questions

**Q1:** When does GEOLOGICAL inversion apply (certain = sparse, uncertain = dense) vs standard density arc (intro sparse → middle dense)?

**Evidence:** OD-004 uses inversion (confidence-based). Other patterns use standard arc. Need codification of WHEN to invert.

---

**Q2:** Do Tier 2.5 patterns (bento grid, solid offset, scroll witness) have nesting grammar?

**Evidence:** Solid offset appears on FEATURED elements only (1-2 per page). Scroll witness is sidebar component. Bento grid cells may contain callouts (needs verification). Nesting rules unclear.

---

**Q3:** What is maximum pattern diversity per section?

**Evidence:** One organizational pattern + one density pattern + one axis pattern = 3 pattern layers MAX per section. Need validation.

---

**Q4:** Do dark backgrounds (#1A1A1A) have specific nesting rules?

**Evidence:** Dark headers/footers contain light text. Dark code blocks contain syntax highlighting. Need to codify whether dark zones can nest, or if they're always top-level.

---

**Q5:** Is there a minimum page length for fractal compliance?

**Evidence:** All audited explorations are 500+ lines HTML. Shorter pages may not have room for 4 fractal scales. Need minimum content threshold.

---

## Summary Statistics

**Total Grammar Rules Extracted:** 41 rules across 11 categories
- Zone Nesting: 4 rules
- Spacing Rhythm: 4 rules
- Background Zones: 3 rules
- Component Density: 3 rules
- 2-Zone DNA: 3 rules
- Compound Grammar: 3 rules
- Fractal Application: 3 rules
- Grid Grammar: 3 rules
- Responsive Collapse: 2 rules
- Anti-Patterns: 4 rules
- Open Questions: 5

**Rules with 2+ evidence sources:** 35/41 (85%)
**Observations needing more evidence:** 6/41 (15%)

**Files providing evidence:**
- DD-003-islands.html: 18 rule citations
- DD-006-fractal.html: 15 rule citations
- OD-004-confidence.html: 12 rule citations
- OD-006-creative.html: 11 rule citations
- CD-005-multi-axis-transition.html: 8 rule citations
- CD-006-pilot-migration.html: 7 rule citations

**Cross-file validation:** All core rules (nesting, spacing rhythm, 2-zone DNA, fractal) validated across 4+ files.

---

**END COMPOSITIONAL RULES**

```

---

## YOUR TASK

Based ONLY on the source files above, write a thorough analysis covering ALL of the following:

1. **Character**: What is this design system's character? Not just its properties — its personality, its attitude, its stance toward content and readers. What kind of entity is it?

2. **Internal Tensions**: Where does this system contradict itself? Where do its own values pull in opposing directions? Identify at least 2 genuine internal tensions.

3. **What It Enables**: What kinds of compositional moves does this system make EASY or NATURAL? What does it want you to do?

4. **What It Refuses**: What does this system reject? Not just what's prohibited — what is philosophically incompatible with its character?

5. **Generative Constraints**: Pick 2-3 constraints and explain how each one GENERATES design possibilities rather than just preventing them.

6. **Compositional Opportunities**: If you were building a content page in this system, what are the richest areas for creative composition? Where does the system leave room for the builder to make meaningful choices?

7. **Vocabulary Landscape**: Map what this system can express WELL vs what it STRUGGLES to express. Where is it fluent? Where is it limited?

8. **Surprise**: What, if anything, surprised you about this system? What is unexpected or counterintuitive?

Write 400-600 words. Be specific and concrete — reference actual values, properties, and relationships from the source files.
