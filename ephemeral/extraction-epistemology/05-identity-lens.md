# Identity Lens — System Identity Extraction

**Worldview:** CHARACTER and SOUL. What makes KortAI recognizably KortAI across any page?

**Methodology:** I am extracting based on VISUAL IDENTITY rendered through Playwright, combined with source code analysis of the soul constraints and token system. This is about what MUST be preserved to maintain KortAI's distinctive character — the immutable identity-bearing elements that define "this feels like KortAI."

## Visual Rendering Methodology

I visually rendered 4 pages via Playwright to see the ACTUAL visual identity:
- DD-006-fractal.html (Density exploration)
- OD-002-narrative.html (Organizational exploration)
- CD-002-task-containing-decision.html (Combination exploration)
- Boris Archival Vault (Tension-test metaphor layout)

I also read source code from:
- AD-004-spiral.html (Axis exploration)
- Gas Town Industrial Refinery (Tension-test metaphor layout)

**Key observation:** These pages LOOK and FEEL cohesive despite being different explorations, different metaphors, different content. There is a VISUAL SOUL that unifies them.

---

## THE IDENTITY CORE — What Makes KortAI KortAI

### 1. VISUAL SOUL (The Anti-Physical Identity)

**THESE ARE NON-NEGOTIABLE IDENTITY MARKERS:**

#### Geometry Constraints
- `border-radius: 0` EVERYWHERE — Zero rounded corners, always
- `box-shadow: none` EVERYWHERE — No shadows, no depth illusion
- `filter: drop-shadow()` FORBIDDEN — No shadow effects
- `opacity: 1` on all backgrounds — No transparency tricks

**Why identity-bearing:** These constraints create the ANTI-PHYSICAL aesthetic. Rounding corners or adding shadows would INSTANTLY break KortAI's character. This is the most distinctive visual signature.

**Visual evidence:** Every page I rendered had crisp 90-degree corners, flat surfaces, sharp edges. DD-006 fractal diagrams, OD-002 callouts, CD-002 tables, Boris vault sections — all zero-radius rectangles.

#### Border Philosophy
- NO 2px BORDERS ever — Forbidden epidemic value
- Standardized border-left: 4px for callouts/zones
- Border-weight gradient (4px/3px/1px) for depth signaling WITHOUT shadows
- Border color from token system only

**Why identity-bearing:** The 4px left-border is KortAI's signature accent. It appears on Info callouts, Context boxes, Essence blocks, Challenge sections — it's the visual punctuation that creates hierarchy without rounded material-design cards.

**Visual evidence:** Every callout I saw had the 4px red/blue/coral/green left border. DD-006 "Key Insight" boxes, OD-002 "Context" panels, Boris vault "Classification" labels.

#### Color Palette (LOCKED)
```css
--color-primary: #E83025;        /* KortAI red — the signature */
--color-background: #FEF9F5;     /* Warm off-white */
--color-text: #1A1A1A;           /* Soft black (never pure #000) */
--color-border: #E0D5C5;         /* Muted tan */
```

**Accent callouts (5 standard):**
```css
--accent-blue: #4A90D9;
--accent-coral: #C97065;
--accent-green: #6B9B7A;
--accent-amber: #D97706;
--accent-purple: #7C3AED;
```

**Why identity-bearing:** The PRIMARY RED (#E83025) is KortAI's signature color. It appears on headers, key labels, primary accents. The warm cream background (#FEF9F5) creates the distinctive "warm, editorial" feel. Using different reds or pure white backgrounds would break identity.

**Visual evidence:** The red appears on DD-006 header borders, OD-002 density arc labels ("CRESCENDO" in red), CD-002 "EXPLORATION CD-002" badge, Boris vault "CLEARANCE LEVEL" headers. The warm cream background is consistent across all pages.

#### Typography Trinity
```css
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

**Why identity-bearing:** The Instrument Serif + Inter + JetBrains Mono combination creates KortAI's editorial voice. Instrument Serif on H1s gives the distinctive "literary documentation" feel. Inter for body creates clean readability. JetBrains Mono for code/labels creates technical precision.

**Visual evidence:** DD-006 "Fractal Density" title in Instrument Serif italic, OD-002 "Narrative Arc Structure" in Instrument Serif, Boris vault "Boris Cherny: The Complete Mental Model" in Instrument Serif. All body text in Inter. All code blocks in JetBrains Mono.

---

### 2. STRUCTURAL IDENTITY (The Compositional Soul)

#### Page Anatomy (Consistent Across ALL Pages)
1. **Skip link** (accessibility) — Always first
2. **Banner/Header zone** (dark or distinctive) — Page title + metadata
3. **Main content container** (940-960px max-width) — Central reading column
4. **Structured sections** with visual hierarchy
5. **Footer** (minimal, metadata only)

**Why identity-bearing:** This page skeleton creates the "KortAI page" feel. Even metaphor-driven layouts (Boris Vault, Gas Town Refinery) preserve this: distinctive header → contained body → footer.

**Visual evidence:** DD-006 has red-bordered header + contained main. OD-002 has dark header + contained main. CD-002 has labeled header + contained main. Boris vault has dark "Feed Hopper" header + contained "Reading Room" sections.

#### Callout Component Grammar

**Standard callout types with CONSISTENT STRUCTURE:**

```
[4px colored left-border]
[LABEL in mono/caps/colored]
[Content in body font]
```

**Callout types:**
- **Context** (blue border) — Orientation, setup
- **Info** (blue border) — Factual detail
- **Essence** (coral/red border) — Core insight
- **Challenge** (purple border) — Provocative task
- **Gotcha** (coral border) — Warning
- **Tip** (green border) — Practical advice

**Why identity-bearing:** This callout grammar appears on EVERY page. It's the compositional DNA. The pattern of [colored-border][label][content] is instantly recognizable.

**Visual evidence:** DD-006 "Key Insight" box with coral border. OD-002 "Essence" boxes with coral border, "Turning Point" with amber, "Gotcha" with coral. CD-002 "Prerequisites" box, "Recommendation" box, "Tip" box. Boris vault "Classification: Public Identity" box.

#### Density Layering (Fractal Self-Similarity)

**The same dense/sparse rhythm at multiple scales:**
- Page level: sections alternate dense (content-rich) and sparse (breathing room)
- Section level: paragraphs alternate dense (detail) and sparse (reflection)
- Component level: callouts have dense label zones + sparse content zones

**Why identity-bearing:** This fractal density rhythm (DD-F-006) creates the "KortAI reading experience." It's not just visual — it's EXPERIENTIAL. The alternating rhythm makes pages feel coherent and navigable.

**Visual evidence:** DD-006 explicitly demonstrates this with "The Same Rhythm at Every Scale" diagram. OD-002 uses crescendo density (sparse → dense → sparse). Boris vault uses clearance levels as density layers.

---

### 3. PHILOSOPHICAL IDENTITY (The Embedded Principles)

#### Anti-Complexity Principle

**What it means:** "Do the simple thing first" — inherited from Boris Cherny's engineering philosophy. Markdown files over vector databases. Local terminal over containers. Simple solutions that work.

**Why identity-bearing:** This principle is ENCODED IN THE CSS. The soul constraints (border-radius: 0, box-shadow: none) are the CSS manifestation of anti-complexity. No gradients, no transforms, no animations (except subtle scroll reveals). The visual language rejects decorative complexity.

**Visual evidence:** Every page uses flat, undecorated rectangles. No glassmorphism, no neumorphism, no trendy effects. The Boris vault page EXPLICITLY documents this principle in "Design Philosophy" section.

#### Research-First Methodology

**What it means:** Every visual decision is grounded in research findings (R1-R5). Every pattern is validated through explorations (DD, OD, CD, AD). Nothing is arbitrary.

**Why identity-bearing:** This creates the "intentional design" feel. Every spacing value, every border width, every color choice has a provenance chain. Users feel this rigor even if they never read the research.

**Visual evidence:** The inline threading headers in source code document every decision. AD-004-spiral.html has a 50-line header explaining WHY angular spiral geometry serves geological density. This metadata IS part of the identity.

#### Perceptual Depth Over Decoration

**What it means:** Depth comes from content hierarchy, not visual tricks. Nested structure, proximity, typography scale, border accents — these create depth. Shadows and rounded corners are rejected.

**Why identity-bearing:** This creates the "editorial documentation" aesthetic vs "modern web app" aesthetic. KortAI pages feel like typeset books, not Figma mockups.

**Visual evidence:** DD-006 creates depth through nested boxes with different border weights. OD-002 creates depth through "Act I / Act II / Act III" structure. Boris vault creates depth through "Clearance Level" layers. ZERO depth from shadows.

---

## WHAT TO EXTRACT — Identity-Bearing Elements

### TIER 1: SOUL CONSTRAINTS (Must Extract — Breaking These Breaks Identity)

1. **border-radius: 0** — Foundational geometry constraint
2. **box-shadow: none** — Foundational depth constraint
3. **filter: drop-shadow() forbidden** — Shadow prohibition
4. **opacity: 1 on backgrounds** — Transparency prohibition
5. **NO 2px borders** — Epidemic avoidance
6. **4px left-border pattern** — Signature callout accent
7. **Primary red (#E83025)** — Signature brand color
8. **Warm cream background (#FEF9F5)** — Signature warmth
9. **Typography trinity** (Instrument Serif / Inter / JetBrains Mono)
10. **5 accent colors** (blue/coral/green/amber/purple) — Callout palette

**Rationale:** These are the immutable visual constraints. Violating ANY of these makes a page "not KortAI."

### TIER 2: COMPOSITIONAL PATTERNS (Must Extract — These Create Recognition)

11. **Callout grammar** — [4px border][LABEL][content] pattern
12. **Page anatomy** — Skip link → Banner → Container → Footer
13. **940-960px max-width** — Reading column standard
14. **Fractal density rhythm** — Dense/sparse alternation at multiple scales
15. **Zone backgrounds** (3 standard: sparse/dense/breathing)
16. **Mono-label pattern** — Uppercase, letter-spaced, colored labels
17. **Border-weight gradient** (4px/3px/1px) — Depth without shadows
18. **Spacing scale** — 4px base unit, geometric progression

**Rationale:** These compositional patterns create the "KortAI layout" feel. They're reused across all explorations.

### TIER 3: SEMANTIC STRUCTURES (Should Extract — These Enable Content)

19. **Code block component** — Dark background, syntax highlighting, copy button
20. **Table styling** — Clean borders, zebra striping optional, mono headers
21. **Metadata bars** — Stats, gauges, status indicators (mono font)
22. **Section dividers** — Horizontal rules, colored by content type
23. **Inline code styling** — Subtle background, slightly smaller, mono font
24. **Strong emphasis** — Color instead of bold (often uses primary red)
25. **Quote/citation blocks** — Indented, italic, attribution line
26. **List styling** — Clean bullets, proper indentation, spacing

**Rationale:** These are the semantic building blocks that enable different content types while maintaining identity.

---

## IDENTITY-BEARING BUT NOT FREQUENTLY REUSED

### Metaphor-Specific Visual Languages

**Example: Boris Vault "Archival Facility" Theme**
- Dark header ("Control Room" aesthetic)
- "Clearance Level" progression (1-6)
- "Gauge Strip" metrics bar
- "Accession Record" footer metadata

**Why identity-bearing:** The metaphor creates a DISTINCTIVE READING EXPERIENCE that's uniquely KortAI. The vault metaphor serves the content (progressive disclosure of Boris's knowledge). But these specific components aren't reused elsewhere.

**Extraction decision:** EXTRACT THE TECHNIQUE (metaphor-driven layout), NOT THE SPECIFIC COMPONENTS. The method of "spatial metaphor as organizational structure" is identity-bearing. The vault clearance levels are content-specific.

### Exploration-Specific Diagrams

**Example: DD-006 "Fractal Density" Diagrams**
- Multi-scale density visualization (Page/Section/Component/Character)
- Self-similarity indicators (≈ symbols)
- Dense/sparse block representations (█░░█)

**Why identity-bearing:** These diagrams EXPLAIN the fractal density principle, which IS part of KortAI's identity. But the specific diagram format is exploration-specific.

**Extraction decision:** EXTRACT THE PRINCIPLE (self-similar density), NOT THE DIAGRAM FORMAT. The fractal rhythm is identity-bearing. The specific ASCII-art representation is content-specific.

### Narrative Arc Visualizations

**Example: OD-002 "Freytag 5-Beat Model" Bar Chart**
- Crescendo density arc visualization
- Act I-V progression
- Tension indicators

**Why identity-bearing:** The crescendo density pattern IS part of KortAI's identity. But this specific visualization is narrative-content-specific.

**Extraction decision:** EXTRACT THE PATTERN (crescendo density), NOT THE VISUALIZATION. The density arc is reusable. The Freytag diagram is content-specific.

---

## FREQUENTLY REUSED BUT NOT IDENTITY-BEARING

### 960px Max-Width Container

**Frequency:** Appears on EVERY page as `.page-container` or `.main-content-inner`

**Identity-bearing?** NO — This is a readability best practice, not unique to KortAI.

**Rationale:** While the 940-960px container creates comfortable reading, it's a standard web design pattern. The IDENTITY comes from WHAT'S INSIDE the container (soul constraints, callout grammar, density rhythm), not the container width itself.

**Extraction decision:** Include as a USABILITY guideline, but don't treat it as identity-bearing. Using 900px or 1000px wouldn't break "KortAI-ness."

### Skip Link Accessibility

**Frequency:** First element on every page

**Identity-bearing?** NO — This is accessibility best practice, not unique to KortAI.

**Rationale:** The skip link is mandatory for keyboard navigation, but it's not what makes KortAI recognizable. It's hygiene, not identity.

**Extraction decision:** Include in component library for completeness, but it's not identity-defining.

### Mono Font for Labels

**Frequency:** Used for ALL label text (callout labels, metadata, gauges, stats)

**Identity-bearing?** BORDERLINE — The mono font CONTRIBUTES to identity but isn't DEFINING.

**Rationale:** Using Inter for labels instead of JetBrains Mono would weaken the "technical precision" feel, but wouldn't destroy KortAI identity. The 4px colored border is more identity-bearing than the label font.

**Extraction decision:** Include as RECOMMENDED pattern (strong signal), but not as REQUIRED constraint (soul-level).

---

## ANTI-IDENTITY — What Would BREAK KortAI

### Visual Breaks (Soul Violations)

1. **Rounded corners** (border-radius > 0) — INSTANTLY breaks anti-physical identity
2. **Drop shadows** (box-shadow, filter: drop-shadow) — Violates flat aesthetic
3. **Gradient backgrounds** — Violates flat color principle
4. **Pure black (#000) or pure white (#FFF)** — Violates warm earth tones
5. **Different primary red** — Breaks brand color signature
6. **Cool-toned grays** — Violates warm palette
7. **Glassmorphism/neumorphism** — Violates anti-complexity principle

**Why these break identity:** They introduce PHYSICAL METAPHORS (depth, material, light) that contradict the ANTI-PHYSICAL identity.

### Structural Breaks

1. **Full-width layouts** (no max-width container) — Breaks editorial reading experience
2. **Sidebar navigation** — Breaks single-column reading flow
3. **Floating action buttons** — Breaks flat hierarchy
4. **Modal dialogs** — Breaks page-based navigation
5. **Infinite scroll** — Breaks section-based structure
6. **Sticky headers** — Breaks natural scroll behavior (except subtle scroll reveals)

**Why these break identity:** They introduce APP PATTERNS that contradict the EDITORIAL DOCUMENTATION identity.

### Typographic Breaks

1. **Sans-serif display headings** — Breaks literary voice
2. **Multiple display fonts** — Breaks typographic hierarchy
3. **Decorative fonts** — Violates functional typography principle
4. **Centered body text** — Breaks left-aligned reading flow
5. **Justified text** — Creates uneven word spacing (anti-readability)

**Why these break identity:** They break the EDITORIAL TYPOGRAPHY that creates the "serious documentation" feel.

---

## EXTRACTION FRAMEWORK — What Gets Extracted to Preserve Identity

### Phase C Extraction Targets (Identity Lens)

**SOUL TOKENS (10 items) — Non-negotiable constraints:**
1. border-radius
2. box-shadow
3. drop-shadow prohibition
4. opacity requirements
5. 2px border prohibition
6. 4px border standard
7. Primary red
8. Background cream
9. Typography trinity
10. Accent color palette

**COMPOSITIONAL PATTERNS (8 items) — Recognition patterns:**
11. Callout grammar
12. Page anatomy
13. Max-width container
14. Fractal density rhythm
15. Zone backgrounds
16. Mono-label pattern
17. Border-weight gradient
18. Spacing scale

**SEMANTIC COMPONENTS (8 items) — Content enablers:**
19. Code block component
20. Table component
21. Metadata bar component
22. Section divider component
23. Inline code component
24. Strong emphasis pattern
25. Quote/citation component
26. List styling

**PHILOSOPHICAL PRINCIPLES (3 items) — Design mindset:**
27. Anti-complexity (flat, simple, no decoration)
28. Research-first (every decision has provenance)
29. Perceptual depth (hierarchy over effects)

**Total: 29 identity-bearing extractions**

---

## IDENTITY EXTRACTION METHODOLOGY

**How I decided what's identity-bearing vs incidental:**

1. **Visual rendering test:** If changing this makes the page "not look like KortAI," it's identity-bearing.
2. **Cross-page consistency:** If it appears across DD, OD, CD, AND tension-test metaphor layouts, it's identity-bearing.
3. **Soul documentation:** If it's explicitly documented in ACCUMULATED-IDENTITY or SOUL-DISCOVERIES, it's identity-bearing.
4. **Breaking test:** If removing this makes the page unrecognizable as KortAI, it's identity-bearing.
5. **Substitution test:** If substituting with a standard web pattern breaks the "KortAI feel," it's identity-bearing.

**Explicitly not identity-bearing:**
- Specific content (Boris's workflow, Gas Town factory metaphor)
- Specific diagram formats (fractal visualization, density arc chart)
- Specific exploration findings (AD-F-013, OD-F-005)
- Layout dimensions (940px vs 960px)
- Accessibility features (skip link, ARIA labels)

**The distinction:**
- **Identity-bearing:** The VISUAL LANGUAGE and COMPOSITIONAL GRAMMAR that makes KortAI recognizable
- **Not identity-bearing:** The CONTENT, SPECIFIC EXAMPLES, and STANDARD PRACTICES that could change without breaking character

---

## KEY INSIGHT — Identity Is a Visual Soul

**The deepest identity extraction:**

KortAI's identity lives in the CONSTRAINTS more than the AFFORDANCES. It's defined by what it REFUSES (rounded corners, shadows, decorative complexity) as much as what it EMBRACES (flat geometry, editorial typography, research-first rigor).

The identity is ANTI-PHYSICAL EDITORIAL DOCUMENTATION. It looks like a typeset technical book, not a modern web app. It feels like reading serious research, not consuming content.

**The metaphor shapes experience; the soul prevents it from breaking experience.**

Every metaphor-driven layout (Boris Vault, Gas Town Refinery) preserves the soul constraints while creating distinctive spatial experiences. The identity is the INVARIANT across all metaphor variations.

**What makes a page recognizably KortAI:**
1. You see 90-degree corners and flat surfaces (visual soul)
2. You see 4px colored left-borders on callouts (compositional soul)
3. You see Instrument Serif headings and warm cream background (typographic soul)
4. You feel dense/sparse rhythm at multiple scales (experiential soul)
5. You sense intentional design grounded in research (philosophical soul)

Strip everything else away — the content, the metaphors, the specific diagrams — and if these 5 remain, it's still KortAI.

---

## EXTRACTION CONFIDENCE

**High confidence (visually verified + source confirmed):**
- Soul constraints (border-radius, box-shadow, colors, typography)
- Callout grammar (4px border, label, content)
- Page anatomy (header, container, footer)
- Fractal density rhythm

**Medium confidence (source confirmed, partially visually verified):**
- Border-weight gradient (4px/3px/1px)
- Zone background system
- Spacing scale

**Low confidence (inferred from single example):**
- Specific metaphor techniques (clearance levels, gauge strips)
- Diagram formats
- Advanced interactive patterns

**Requires validation:**
- Responsive behavior (saw desktop only)
- Dark mode variants (if any)
- Animation/transition patterns (saw minimal motion)
- Print stylesheets (if any)

---

**EXTRACTION COMPLETE. 29 identity-bearing items identified. Methodology: visual rendering + source analysis + soul constraint validation. Worldview: CHARACTER and SOUL.**
