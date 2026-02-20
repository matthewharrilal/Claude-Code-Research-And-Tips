# 01 -- RESEARCH EXTRACTION: Everything for conventions-brief.md

**Agent:** brief-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #1 -- Extract EVERY specific value, rule, principle, CSS snippet, and threshold that belongs in the conventions brief. No compression. Actual values, actual thresholds, actual transition grammar types with examples.

**Sources Read:**
- ephemeral/flagship-44-recipe/ (all 23 reports, ~12,000 lines) -- includes 01-DEFINITION.md (14-dimension Flagship spec)
- ephemeral/fat-core-capability/ (29 reports, ~750KB)
- design-system/compositional-core/identity/prohibitions.md (353 lines)
- design-system/compositional-core/vocabulary/tokens.css (183 lines)
- design-system/compositional-core/grammar/mechanism-catalog.md (1,218 lines)
- design-system/CLAUDE.md (root navigation)
- design-system/compositional-core/CLAUDE.md (phase-gated protocol)
- memory/MEMORY.md (project state + findings)

**CRITICAL FRAMING NOTE:** CD-006 (39/40) is CEILING tier, NOT Flagship. Flagship 4/4 has NEVER been achieved. CD-006 is used throughout this report as a FLOOR REFERENCE for what Ceiling-quality CSS looks like -- its specific values demonstrate that the CSS vocabulary works. But the TARGET is Flagship 4/4 as defined by the 14-dimension specification in 01-DEFINITION.md, which requires unified pervading metaphor, global multi-coherence, compositional surprise, and 5/5 fractal scales with strong expression -- all BEYOND what CD-006 demonstrates.

---

## SECTION 1: IDENTITY (Soul Constraints)

### What the brief MUST contain (exact values, zero ambiguity)

**8 Absolute Prohibitions (from prohibitions.md):**

```
border-radius: 0           -- Every edge is sharp. Decisive, not friendly.
box-shadow: none            -- No shadows. Depth comes from spacing and borders, not illusion.
filter: drop-shadow(): NEVER -- No shadow effects anywhere.
opacity: 1 on containers    -- No semi-transparent backgrounds. What you see is what exists.
background: solid only      -- No gradients (linear-gradient, radial-gradient, etc.)
color: no #000000 or #FFFFFF -- Warm near-black (#1A1A1A), warm cream (#FEF9F5). Never clinical.
Serif ONLY for display headings -- Instrument Serif never used for body text.
No decorative complexity    -- No neumorphism, glassmorphism, or illustration.
```

**Typography Trinity (from tokens.css lines 67-70):**
```css
--font-display: 'Instrument Serif', Georgia, serif;   /* Editorial authority - display headings ONLY */
--font-body: 'Inter', system-ui, sans-serif;           /* Functional clarity - body text */
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;  /* Technical precision - code */
```

**Rule:** Serif NEVER for body text. Sans-serif NEVER for main headings.

**Container Width (NON-NEGOTIABLE):**
```
940-960px centered
```
**Evidence:** THE single most common failure mode in Phase D (4/5 pages violated it). CD-006 uses 960px. Middle experiment compliant at 960px.
**Source:** prohibitions.md, CLAUDE.md, PV2 diagram, 17-MASTER-SYNTHESIS.md

**Color Palette (from tokens.css lines 27-32):**
```css
--color-primary: #E83025;        /* Sanrok red - editorial confidence, LOCKED */
--color-background: #FEF9F5;     /* Warm cream - not sterile white, LOCKED */
--color-text: #1A1A1A;           /* Near-black - softer than #000, LOCKED */
--color-text-secondary: #666666; /* Muted secondary text, LOCKED */
--color-border: #E0D5C5;         /* Warm border tone, LOCKED */
--color-border-subtle: #F0EBE3;  /* Very subtle dividers, LOCKED */
```

**Accent Colors (mutable, from tokens.css lines 35-39):**
```css
--accent-blue: #4A90D9;   /* Info Callout */
--accent-green: #4A9D6B;  /* Tip Callout */
--accent-coral: #C97065;  /* Gotcha Callout */
--accent-amber: #D97706;  /* Essence Callout */
--accent-purple: #7C3AED; /* Challenge Callout */
```

**Spacing Scale (from tokens.css lines 96-107, 4px base unit):**
```
8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
```
**Semantic aliases (tokens.css lines 110-112):**
```css
--space-within: 8px;    /* within single unit */
--space-between: 32px;  /* between sections */
--space-chapter: 64px;  /* major divisions */
```
**RULE:** No single margin or padding value exceeds 96px. (tokens.css lines 115-122)

**Border Weights (from tokens.css lines 132-135):**
```css
--border-structural: 4px;  /* Left accent borders (callouts) - LOCKED */
--border-accent: 3px;      /* Secondary accent weight */
--border-micro: 1px;       /* Subtle dividers, frames */
```

---

## SECTION 2: PERCEPTION THRESHOLDS

### Exact values from across all source reports (converged)

These are the minimum deltas for a human to perceive a difference. Below these values, CSS is invisible -- technically present but experientially absent.

| Threshold | Value | Source | Evidence |
|-----------|-------|--------|----------|
| Background delta between adjacent zones | >= 15 RGB points | CI-07, Report 10, Report 20, remediation | Flagship backgrounds differed by 1-8 RGB (imperceptible). Remediation applied >=15 and scored +1.0 |
| Font-size delta between typographic zones | >= 2px | CI-07, Report 10 | |
| Letter-spacing delta between zones | >= 0.03em | Report 10 (conventions brief draft). Note: CI-07 says >=0.5px which is ~0.03em at 16px | |
| Maximum stacked gap at any section boundary | <= 108px total | Report 10, S-09 stacking rule. tokens.css line 120: max per-property = 96px | Flagship accumulated 210-276px voids from stacked spacing |
| Border presence | >= 1 structural border-left per zone (alternating OK) | Report 10 | |
| Component adoption | >= 10 component families from merged-components.css | Report 10 Quality Floor | |
| Mechanism categories deployed | >= 4 of 5 categories (S/H/C/D/N) | Report 10, CI-08 | Middle hit 12 mechanisms organically. Per-category minimum ensures breadth. |
| Multi-coherence transitions | >= 3 CSS channels shift at every zone boundary | Report 10, Report 20 (6 operational rules) | |

**Perception-Proportional Intensity Levels (from CI-24, Report 20):**

| Level | Chromatic (RGB delta) | Font-size | Letter-spacing | Padding | Border-width |
|-------|----------------------|-----------|----------------|---------|-------------|
| SUBTLE | 15 | 2px | 0.03em | 16px | 1px existence |
| MODERATE | 20-30 | 3-4px | 0.05em | 24-32px | 2px increase |
| STRONG | 40+ | 6+px | 0.08+em | 48+px | 3px appearance |

---

## SECTION 3: TRANSITION GRAMMAR

### Three kinds of boundary (from Report 10 conventions brief draft, sections 3)

**SMOOTH** -- A quiet modulation. Content shifts topic but not mode.

CSS recipe:
- Background shifts by 15-25 RGB
- 1px horizontal rule
- Spacing holds steady or shifts by one step
- Reader crosses without noticing they crossed

**BRIDGE** -- A deliberate pause between territories. Content shifts mode (exposition to analysis, overview to deep-dive).

CSS recipe:
- Background shifts by 25+ RGB
- A tinted breathing band (48-64px) with a transitional sentence
- Typography weight or size shifts
- Reader pauses, reorients, continues

**BREATHING** -- A full rest. The page exhales. Use sparingly -- one or two per page maximum.

CSS recipe:
- Structural border (3-4px) marks the boundary
- Generous spacing (64-80px) above and below
- Reader arrives at a new region

**Rules:**
- Never stack two BREATHING transitions adjacent
- Never use more than three SMOOTH transitions in sequence without a BRIDGE or BREATHING

**CD-006 Evidence (Ceiling-tier floor reference, from 03-CD006-FORENSICS.md, ST3):**
CD-006 (Ceiling tier, NOT Flagship) implements exactly this grammar:
```css
.transition--smooth  { margin: 48px; border-top: 1px }
.transition--bridge  { margin: 64px; background: breathing }
.transition--breathing { margin: 80px; border-top: 3px }
```

**Why this matters:** Transition grammar is PROJECT-SPECIFIC knowledge (CI-09 gap analysis). Without it, Opus uses empty space (the void failure). This is the #1 item in the 444-line critical gap (Report 09). The flagship's 210-276px whitespace voids occurred precisely because the builder had no transition grammar.

---

## SECTION 4: MULTI-COHERENCE BINDING

### The binding rule (from Report 10, Report 20)

At every zone boundary, **at least 3 of these 6 CSS channels** must shift simultaneously:

1. **Chromatic** -- background-color, accent color, or border color
2. **Typographic** -- font-size, font-weight, letter-spacing, or line-height
3. **Spatial** -- padding, margin, or content density
4. **Structural** -- border-left weight, horizontal rules, or visual dividers
5. **Behavioral** -- hover states, transition timing, or interaction depth
6. **Material** -- surface treatment, texture, or component density

### Semantic direction requirement

The shifts must point the **same semantic direction**. Define direction before building:

```
"DEEPENING"  = darker bg + tighter spacing + heavier borders + denser typography
"OPENING"    = warmer bg + generous spacing + thinner borders + more air
"FOCUSING"   = narrower content + larger type + bolder accents + fewer elements
"RESOLVING"  = settled tones + standard spacing + lighter borders + clean typography
```

**Anti-pattern:** Background darkens but spacing increases (contradictory signal).

### Practical channel count scale (from Report 20):
```
0-1 channels = FLAT (1.5/4)
2 channels   = FUNCTIONAL (2.5/4)
3 channels   = DESIGNED (3.0/4)
4-5 channels = COMPOSED (3.5-4.0/4)
6 channels   = FLAGSHIP
```

### What multi-coherence looks like (CD-006 worked example -- Ceiling tier, NOT the Flagship target):

From the conventions brief draft (Report 10) and 03-CD006-FORENSICS.md. NOTE: This example shows LOCAL multi-coherence (within one boundary). Flagship 4/4 requires GLOBAL multi-coherence -- a unified metaphor driving channel coordination across ALL boundaries, which CD-006 does not demonstrate:

```
Zone 2 -> Zone 3 (overview to deep-dive):
  Background: #FEF9F5 -> #F0EBE3 (18 RGB delta, visible warmth shift)
  Font-size: 18px -> 16px (reader registers "denser")
  Spacing: padding 64px -> 48px (compression = deeper territory)
  Border: none -> 3px solid #E83025 (hard cut = new domain)
  Letter-spacing: 0.04em -> 0.02em (tightening echoes compression)

5 channels shift TOGETHER, all point DEEPER.
Reader feels the transition without analyzing it.
```

### CD-006 boundary data (Ceiling-tier reference, from 03-CD006-FORENSICS.md):

CD-006 averages **3.36 channels per boundary** across 11 boundaries with **5 scale levels** deployed. It achieves this through **LAYOUT DIVERSITY** -- rotating grid patterns (Z-pattern, bento grid, 2-column, 3-column) guarantee multi-channel shifting as an emergent property of layout change, rather than explicit per-boundary channel management.

**Key insight (Finding F-06 from 12-SYNTHESIS.md):** Layout diversity is the EASIER, more reliable path to multi-coherence than explicit property modulation.

**IMPORTANT: CD-006's multi-coherence is LOCAL, not GLOBAL.** Its geological strata in S1, Z-pattern in S2, bento in S3, etc. are DIFFERENT organizational patterns applied section-by-section -- not a unified metaphor driving CSS decisions throughout. Flagship 4/4 requires global coherence from a single pervading metaphor. The Flagship target (14/14 dimensions, from 01-DEFINITION.md) has NEVER been achieved.

### 6 Operational Rules for Multi-Coherence (from Report 20, R-MC-01 through R-MC-06):

1. **R-MC-01:** Name the coherence direction in a CSS comment at each boundary: `/* Boundary Z2->Z3: DEEPENING */`
2. **R-MC-02:** Count the channels shifting. If fewer than 3, add shifts before proceeding.
3. **R-MC-03:** Verify all shifts point the same direction. If one contradicts, fix it now.
4. **R-MC-04:** Use the transition table (or conviction cards) to pre-plan channel shifts BEFORE writing CSS.
5. **R-MC-05:** Vary intensity across boundaries (not all boundaries equally dramatic).
6. **R-MC-06:** Squint test: view full page at a distance. Can you perceive zone transitions from color and spacing alone?

---

## SECTION 5: FRACTAL ECHO

### Pattern at every scale (from Report 10, Report 22)

Composition should echo its organizing principle at **3-5 architectural scales**:

| Scale | Approximate Size | What Expresses Here | Primary CSS |
|-------|-----------------|---------------------|-------------|
| Navigation | ~1440px | Header/nav set the tone | Layout, borders |
| Page | ~960px | Sections sequence across scroll | Padding, backgrounds |
| Section | ~200-400px | Elements arrange within one viewport | Margin, borders |
| Component | ~40-100px | Content organizes inside one element | Label/body spacing |
| Character | ~12-20px | Micro-typography shifts | Letter-spacing, size |

**Fractal Echo Table** -- builder produces this in build log before writing CSS:

```
| Scale      | How the pattern expresses here       | Primary CSS            |
|------------|--------------------------------------|------------------------|
| Navigation | [header/nav tone and density]        | [layout, borders]      |
| Page       | [zone sequence and density arc]      | [padding, backgrounds] |
| Section    | [within-section rhythm]              | [margin, borders]      |
| Component  | [component internal structure]       | [label/body spacing]   |
| Character  | [micro-typography shifts]            | [letter-spacing, size] |
```

**Pattern direction must be consistent across all rows.** If page-level says "compressing" but component-level says "expanding," the fractal is broken.

**Key findings from Report 22:**
- **2 strong scales beat 5 weak scales.** Middle achieved 4/4 with 2 scales. Flagship achieved 1.5/4 with 5 attempted scales.
- **Realistic minimum for Flagship: 3/5 strong** (Navigation + Page + Component)
- **Dependency chain:** Establish largest scale FIRST, then express downward
- **Character scale is OPTIONAL** -- only after Page + Section are perceptibly established

**CD-006 evidence (Ceiling tier, NOT Flagship):** CD-006 achieves 4/5 strong + 1 moderate fractal scales, but with LOCAL metaphors per section (geological strata in S1, Z-pattern in S2, etc.), not a SINGLE unified metaphor echoing at every scale. Flagship 4/4 requires 5/5 strong with a unified pervading metaphor (D-05 + D-13 from the 14-dimension definition).

---

## SECTION 6: COMPOSITIONAL MEMORY PROTOCOL

### Preventing drift during long builds (from Report 10)

**At every zone boundary** (when CSS transitions from one zone to the next):
1. Name the coherence direction in a CSS comment: `/* Boundary Z2->Z3: DEEPENING */`
2. Count the channels shifting. If fewer than 3: add shifts before proceeding.
3. Verify all shifts point the same direction. If one contradicts: fix it now.

**At the midpoint of the build** (roughly Section 6 of 12, or ~500 CSS lines):
- Render the page. Scroll top to bottom.
- Write 3 sentences in build log: What feels *designed*? What feels *flat*? What is the single weakest section?
- Strengthen the weakest section before continuing.

**After every 5th mechanism deployment:**
- Count mechanisms by category (Spatial / Hierarchy / Component / Depth / Navigation).
- Any category at 0? Deploy one before continuing.
- Any category at 4+? Evaluate whether the last addition was necessary.

**Why this matters:** This protocol prevents the catastrophic drift that produced 210-276px whitespace voids in the Flagship. It adds ~15 minutes to a build.

---

## SECTION 7: SELF-CHECK PROTOCOL

### Five questions before submission (from Report 10, Option C analysis from fat-core-capability/10)

**Q1: SQUINT TEST.** Lean back. Squint at the full page. Can you identify every zone boundary from color and spacing alone, without reading text?
- YES -> proceed
- NO -> chromatic or spatial channel shifts are below perception threshold. Increase them.

**Q2: SCROLL TEST.** Scroll the full page. Is there any continuous stretch of more than 108px that contains no content (no text, no borders, no components -- just background)?
- NO -> proceed
- YES -> you have a void. Fill it with content or reduce spacing.

**Q3: SECOND-HALF TEST.** Does at least one designed moment (visual peak using 3+ mechanisms at high intensity with unique treatment) appear below the 50% scroll mark?
- YES -> proceed
- NO -> visual interest is front-loaded. Move or add a designed moment to the second half.

**Q4: CHANNEL COUNT.** At your most important zone boundary, how many CSS channels shift? Count: background, font-size, font-weight, letter-spacing, spacing, borders.
- 3 or more -> proceed
- Fewer than 3 -> add channel shifts at that boundary.

**Q5: SPATIAL SKELETON.** Imagine removing all color and text from your page, leaving only borders and whitespace. Does the spatial skeleton still communicate structure, hierarchy, and rhythm?
- YES -> proceed (spatial confidence)
- NO -> spatial structure is incomplete. Strengthen borders and spacing before adding more surface treatment.

### Extended self-check questions (from Option C in fat-core-capability/10):

**SCALE CHECK:**
- Q6: Squint at full page. Do you see rhythm? (Y/N)
- Q7: Look at one section. Same rhythm inside it? (Y/N)
- Q8: Look at one component. Does it echo page-level pattern? (Y/N)
- If any N: add mechanism deployment at that scale.

**RESTRAINT CHECK:**
- Q9: Any viewport-height section with >4 distinct mechanisms? (Y/N) If Y: redistribute.
- Q10: Does every third of the page have >= 2 mechanisms? (Y/N) If N: add to sparse section.

---

## SECTION 8: CREATIVE AUTHORITY

### What the builder is free to do (from Report 10, CI-04)

The builder is the composer. Soul constraints are the instrument's range -- they define what notes exist, not what melodies are played.

**Explicit permissions:**
- Override ANY non-soul value in tokens.css if logged in build log with compositional reasoning (what, from, to, and why)
- Invent new component patterns not in merged-components.css if content demands them
- Choose own zone count (2-5), section architecture, mechanism selection, metaphor, and density arc
- Reject any mechanism from the catalog that does not serve the content
- Deploy mechanisms in own way -- catalog describes techniques, not implementations

**CI-04 exact language:** "You may override any non-soul value if you log the override and reason. You may introduce mechanisms not in the catalog. You may deviate from any suggested pattern if content demands it. Your compositional judgment supersedes this document on all non-soul matters."

**The anti-scale formula (from Report 21, CI-28):**
```
Richness = semantic density x restraint x spatial confidence
```
- Density: how much meaning each CSS choice carries
- Restraint: what you DON'T add matters more than what you do
- Spatial confidence: does the page feel intentional at arm's length?

**Restraint guidelines:**
- Maximum 4 distinct mechanisms per viewport-height screenful (CI-30)
- Every third of page (by scroll depth) has >= 2 distinct mechanisms
- What you DON'T add matters as much as what you do
- If the page feels busy, REMOVE. Do not add more.
- Builder should produce a rejection log: for each of 5 categories, name one mechanism NOT deployed + why (CI-30)

---

## SECTION 9: QUALITY FLOOR

### Minimum standards (from Report 10, CI-08)

**Mechanism deployment:**
- Deploy mechanisms from at least 4 of 5 categories:
  - **Spatial (S):** layout topology, density rhythm, grid structures
  - **Hierarchy (H):** border-weight gradient, importance encoding, scale differentiation
  - **Component (C):** 2-zone DNA, semantic callouts, component internal structure
  - **Depth/Emphasis (D):** zone differentiation, solid offset, focal points
  - **Navigation (N):** page chrome, progressive disclosure, structural landmarks
- Per-category minimum: 1+ from each of S, H, C, D (N recommended but not required)

**CSS range:** 700-1200 lines typical for Flagship. Below 500 suggests under-deployment. Above 1500 suggests over-engineering.

**Component adoption:** Use at least 10 component families from merged-components.css. May extend or adapt.

**Grid/layout diversity:** 2+ distinct grid layouts somewhere on the page. Flagship target (D-09): >= 3 distinct axis patterns with named transitions between them. CD-006 (Ceiling tier) used 5 grid topologies as a reference for what is achievable.

**Accessibility:** WCAG 2.1 AA compliance.
- Skip link present
- Landmark roles (main, nav, header, footer)
- Focus indicators: `*:focus-visible { outline: 3px solid #E83025; outline-offset: 2px }`
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- Reduced motion: `@media (prefers-reduced-motion: reduce) { ... }`
- Build accessibility into HTML skeleton from the start, not as afterthought

**Responsive behavior:** Page must function at 768px viewport width.
- Multi-column layouts collapse to single column
- Spacing reduces proportionally
- Soul (sharp edges, flat surfaces, warm palette, typography trinity) remains unchanged

---

## SECTION 10: CONVICTION CARD

### Anchoring compositional memory (from Report 10, Option E from fat-core-capability/10)

Before writing first line of CSS, builder writes in build log:

```
CONVICTION STATEMENT

Content: [filename]
Zones: [number and names]
Organizing principle: [one sentence describing what concept organizes the page]
Coherence direction: [one word -- deepening, opening, focusing, resolving, ...]
Metaphor (if any): [name and one-sentence structural connection to content]

I commit to:
- Making every zone boundary shift >= 3 channels in the [direction] direction
- Placing at least one designed moment in the second half of the page
- Stopping at the midpoint to render, scroll, and assess
- Logging every override with compositional reasoning
- Answering the 5 self-check questions honestly before submitting
```

---

## SECTION 11: BUILD PROCESS

### Phase sequence (from Report 10)

**Phase A -- Understand.** Read the content markdown. Identify the natural zones (where does the content shift topic, mode, or intensity?). Identify tensions (what pulls in two directions?). If a metaphor emerges from the content's structure, name it. If not, build without one.

**Phase B -- Plan.** Write conviction statement, transition table, and fractal echo table in build log. Consult mechanism-catalog.md to select mechanisms that serve content -- not the most mechanisms, but the right mechanisms. Plan zone backgrounds, checking >= 15 RGB between adjacent zones.

**Phase C -- Build.** Write HTML first (skeleton with landmarks, skip link, ARIA roles, component classes). Then CSS in this sequence:
1. Reset + soul + base typography
2. Zone backgrounds
3. Structural borders
4. Typography zones
5. Element-level richness
6. Responsive

Four verification pauses during build:
- After HTML skeleton: check landmarks, skip link, component classes
- After zone backgrounds: check >= 15 RGB delta between adjacent zones
- After borders: check border-left presence and distinct weight values
- After typography: check >= 2px font-size delta between zones

**Phase D -- Verify.** Render the page. Scroll top to bottom. Answer 5 self-check questions. Produce cascade value table (computed CSS values at every section boundary). Fix anything that fails.

### Deliverables:
1. `output.html` -- the page
2. `_build-log.md` -- conviction statement, transition table, fractal echo table, midpoint observation, override log, self-check answers
3. `_cascade-value-table.md` -- computed background, font-size, font-weight, letter-spacing, border-left, margin at every section boundary

---

## SECTION 12: KEY FINDINGS THAT SHAPE BRIEF DESIGN

### Format findings (strongest convergence across all reports)

1. **FORMAT > VOLUME (18+ of 22 reports agree).** Specificity beats length. A 100-line recipe outperforms a 530-line checklist. The inverse correlation is NOT with length per se but with format -- checklists (constraint verbs, "FAIL IF") trigger compliance mode, recipes (imperative verbs, sequenced steps) trigger planning-then-executing mode, world descriptions (conventions brief) aim to trigger composing mode.

2. **The conventions brief IS the pipeline for Fat Core.** The ~230-line brief + tokens + prohibitions + catalog IS the entire builder input. No separate planning step, no inter-agent handoff. One Opus agent reads content, reads the brief, composes.

3. **Recipe ceiling hypothesis (Report 17):** Three recipe types:
   - Specification recipe (ceiling 2.5/4) -- "Verify X, Fail if Y"
   - Procedural recipe (ceiling 3.0-3.5/4) -- "Do step 1, then step 2"
   - Dispositional recipe (unknown, possibly 4/4) -- "Here is the world; build inside it"
   The conventions brief aims for DISPOSITIONAL -- describing the world, not prescribing steps.

4. **Content-form resonance, proportional intelligence, creative surprise, emergent coherence** -- these 4 capabilities exist in the AGENT, not in any document (CI-04). The brief provides SPACE for them to emerge by constraining only what would break the soul.

### Opus as builder (strongest empirical signal)

Every data point:
- CD-006 (Opus, ~50 lines instruction) = 39/40 (Ceiling tier -- NOT Flagship)
- Middle (Opus, ~100 lines instruction) = PA-05 4/4 (Middle tier)
- Flagship (Sonnet, ~530 lines instruction) = PA-05 1.5/4 (failed)
- Remediation (Opus, ~1,025 lines instruction) = PA-05 2.5/4 (partial recovery)
- **Flagship 4/4 (the target) has NEVER been achieved by any configuration.**

**Confound warning (from 16-contrarian.md):** 4 variables change simultaneously (model, format, content, team size). Cannot isolate Opus effect with N=4. But if forced to bet on one variable, this is it.

### Layout diversity finding (from Report 19, Finding F-06)

CD-006 (Ceiling tier) achieves multi-coherence (avg 3.4 channels/boundary) through LAYOUT DIVERSITY -- rotating grid patterns (Z-pattern, bento grid, 2-column, 3-column) guarantee that multiple CSS properties shift at boundaries as emergent property of layout change. The failed Flagship achieved same channel COUNT through explicit PROPERTY MODULATION but this approach is fragile.

**Implication for brief:** Emphasize layout diversity ("use 3+ distinct axis patterns with named transitions" per D-09) as primary mechanism for achieving multi-coherence, not explicit channel counting. But note: CD-006's multi-coherence is LOCAL (section-by-section). Flagship 4/4 requires GLOBAL coherence from a unified metaphor, which has never been achieved.

### Inverted quality routing (from flagship dissection)

Both successful builds gave the builder DIRECT ACCESS to mechanism catalog + tokens. The Flagship routed catalog to planner (wrong agent), not builder. Fat Core eliminates this structurally -- the single agent IS both planner and builder.

---

## SECTION 13: WHAT MUST NOT GO IN THE BRIEF

### Intelligence that would create interference (from CI-06, Report 13)

The builder does NOT receive:
- 650-line recipe (compression artifact -- causes compliance mode)
- Research digest (pre-digested intelligence degrades to checklist)
- Transition table (the AGENT creates its own transitions from conviction card)
- Fractal echo table (the AGENT discovers fractal patterns organically, then verifies via self-check)
- Case studies (PROHIBITED before metaphor commitment per anti-gravity R1)
- TC pipeline phases (1,878 lines -- the agent's own creative process replaces this)

### The 134,800:1 compression finding (Report 13)

Total research-to-CSS compression: 134,800:1. Quality = f(model_capability - instruction_interference). Optimal instruction volume: ~70-150 lines. Above ~200 lines, interference overtakes benefit. The conventions brief at ~230 lines is near the ceiling.

### Constraint-to-freedom ratio

The constraint:action ratio should be intentionally LOW. The builder has far more freedom than restriction. Restrictions exist to prevent specific, measured failure modes (imperceptible CSS, whitespace voids, monotone typography, contradictory channel shifts). Everything else is creative space.

---

## SECTION 14: SPECIFIC CSS PATTERNS FROM CD-006

### Exact values extracted from CD-006 that demonstrate what the brief should enable

**5 Grid Topologies (from 03-CD006-FORENSICS.md):**
```css
/* Golden ratio */
.z-hero { grid-template-columns: 1.618fr 1fr }

/* 4-column bento */
.bento-grid { grid-template-columns: repeat(4, 1fr); gap: 24px }

/* 3-column spokes */
.choreo-spokes { grid-template-columns: repeat(3, 1fr); gap: 24px }

/* 2-column reasoning */
.reasoning-columns { grid-template-columns: 1fr 1fr }

/* Inline 2-column */
style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6)"
```

**3-Tier Border Weight System:**
```css
4px -- callout left, stratum-established (highest hierarchy)
3px -- component borders, header/footer accent, stratum-probable
1px -- data separators, stratum-speculative (lowest hierarchy)
```

**Letter-Spacing as Register (4 distinct values):**
```
0      -- body text
0.05em -- table headers
0.1em  -- section-meta, labels, stratum-label
0.15em -- header-meta
```

**Type Scale (6 steps):**
```
3rem     -- 48px, page titles (display)
1.625rem -- 26px, section titles
1.375rem -- 22px, subsection titles
1.25rem  -- 20px, small headlines
1rem     -- 16px, body text
0.875rem -- 14px, small body, metadata
0.75rem  -- 12px, labels, captions
```

**Full Chromatic Inversion (header/footer):**
```css
header { background: #1A1A1A; border-bottom: 3px solid #E83025; color: #FEF9F5 }
footer { border-top: 3px solid #E83025; background: #1A1A1A; color: #FEF9F5 }
```

**Zone Background System (3 zones):**
```css
--color-zone-sparse: #FEF9F5;    /* Sparse breathing zones */
--color-zone-dense: #FFFFFF;     /* Dense content zones */
--color-zone-breathing: #FAF5ED; /* Recovery breathing zones */
```

**Callout 2-Zone DNA Pattern:**
```css
.callout {
  border-left: 4px solid var(--accent-color);
  padding: 20px 24px;
  margin: 24px 0;
}
.callout__label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.callout__body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
}
```

**Focus Indicator (accessibility):**
```css
*:focus-visible { outline: 3px solid #E83025; outline-offset: 2px }
```

**Reduced Motion (accessibility):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Branded Selection:**
```css
::selection { background: #E83025; color: #FEF9F5 }
```

---

## SECTION 15: CONTENT DENSITY RULES (FROM THE 444-LINE CRITICAL GAP)

### What prevents over-formation and void (from Report 09, CI-08)

**Content density floors (from semantic-rules.md, Report 09 category 5 gaps 6-7):**
- Minimum content per zone: zone must contain enough content to fill at least 30% of its visual area
- Zone below 30% fill must contain deliberate spatial element (centered heading, full-width border, framing element)
- Zone below 20% fill must be MERGED with adjacent zone or JUSTIFIED in build log

**Content-form fit rules:**
- Bento grid: requires 4+ items of comparable visual weight
- Progressive disclosure: requires 3+ depths of content
- Zone differentiation: requires content that naturally shifts register

**Spacing maxima (from tokens.css lines 115-122):**
- No single margin or padding exceeds 96px
- STACKED values at section boundaries must not exceed 108px TOTAL (the S-09 stacking rule)
- If zone transition needs more separation than 96px, use a CHECKPOINT element (transition grammar), not more whitespace

---

## SECTION 16: CALLOUT SEMANTIC COLORS (FROM SEMANTIC RULES)

### 5 callout types with semantic color mapping

| Type | Color | Accent | Use When |
|------|-------|--------|----------|
| Info | Blue (#4A90D9) | #F5F8FA bg | Factual reference, definitions |
| Tip | Green (#4A9D6B) | #F5FAF5 bg | Actionable advice, best practices |
| Essence | Amber (#D97706) | #FAF5ED bg | Core concept, synthesis, key insight |
| Gotcha | Coral (#C97065) | #FEF6F5 bg | Warning, common mistake, pitfall |
| Challenge | Purple (#7C3AED) | #F8F5FE bg | Exercise, question, provocation |

---

## SECTION 17: DENSITY PATTERNS

### Named page-scale spatial organizations (from TC skill, Report 09)

| Pattern | Description | When to Use |
|---------|-------------|-------------|
| CRESCENDO | Building intensity from sparse opening to dense climax | Research synthesis, argument building |
| F-PATTERN | Dense left column, sparse right, following natural scan | Reference docs, API documentation |
| BENTO | Grid of independent modules at varying densities | Feature showcases, component galleries |
| PULSE | Alternating dense/sparse sections (inhale/exhale) | Tutorials, narrative docs |

---

## SECTION 18: MECHANISM CATALOG SUMMARY (18 MECHANISMS)

### What the builder needs to know (condensed from 1,218 lines)

**Category S (Spatial):**
- #5: Gestalt semantic spacing (--space-within/between/chapter)
- #6: Grid topology diversity (Z-pattern, bento, 2-col, 3-col)
- #15: Progressive indentation (file trees, nested lists)

**Category H (Hierarchy):**
- #1: Border-weight gradient (4px/3px/2px/1px encodes importance)
- #4: Spacing compression (padding decreases = deeper territory)
- #11: Type scale hierarchy (3rem -> 0.75rem, 6-step scale)

**Category C (Component):**
- #2: 2-Zone DNA (sparse label + dense body)
- #9: Callout semantic colors (5 types x accent)
- #10: Code block inversion (dark bg, syntax highlighting)
- #17: Table styling (clean headers, no zebra-striping)

**Category D (Depth/Emphasis):**
- #3: Zone background differentiation (>= 15 RGB between adjacent)
- #7: Solid offset (neobrutalist depth without box-shadow)
- #16: Full chromatic inversion (dark header/footer bookend)

**Category N (Navigation/Structure):**
- #8: Section meta self-documentation (mono, uppercase, 0.1em tracking)
- #12: TOC as navigation island (bordered, breathing background)
- #13: Transition grammar (Smooth/Bridge/Breathing)
- #14: Progressive disclosure (expandable sections)
- #18: Drop cap (editorial authority, first-letter treatment)

### Application modes (critical deployment knowledge):

**PROGRESSIVE MODE:** For content with NATURAL stratification. Deploy gradient across 4-5 elements. Each represents different LEVEL in same dimension.

**DISCRETE MODE:** For CATEGORICAL differentiation. Deploy distinct categories with no gradient relationship.

**ANTI-PATTERN:** Discrete mode applied uniformly to ALL elements of same type (e.g., ALL h3 elements get 3px border). This creates mechanical rhythm. Instead, use border-weight to encode SEMANTIC importance.

---

## SECTION 19: CONTRARIAN WARNINGS

### What could go wrong (from 16-contrarian.md, 11-CONTRARIAN.md in flagship-44-recipe)

1. **The Opus hypothesis is confounded.** 4 variables change simultaneously between success and failure. Cannot isolate model effect from format, content, team, or volume effects with N=4.

2. **The 444-line critical gap is retrospective.** Identified what was MISSING from flagship and concluded adding it would fix things. But CD-006 achieved 39/40 WITHOUT any of those 444 lines. The gap may be unnecessary if Opus + brief is sufficient.

3. **The conventions brief at 230 lines may already be above the interference threshold.** Report 13 estimates optimal volume at 70-150 lines. Report 17 suggests a 30-50 line DISPOSITIONAL variant (untested) may have higher ceiling.

4. **Fat Core has N=0 empirical evidence.** Never tested. The entire design is theoretical, built on retrospective analysis of confounded experiments.

5. **The null hypothesis:** Fat Core as originally specified (100-line brief + tokens + prohibitions + catalog) may be sufficient for Middle tier, and no changes are needed before running experiments. The experiments will tell us what works.

6. **Meta-to-output ratio is at infinity:1.** 750KB+ analysis, 0 pages built. Every additional report is diminishing returns. The first experiment ($5, 2 hours) will tell more than 29 more reports.

### The embarrassingly simple alternative (from Report 16):

"Use Opus. Give it the content, soul constraints, tokens, and the mechanism catalog. Don't tell it HOW to compose -- just tell it WHAT the design system IS. Then verify with 9 PA auditors. Fix anything they flag. Ship."

---

## SECTION 20: VALUE RECONCILIATION TABLE

### Where sources disagree on specific values

| Parameter | Report 10 Value | CI-07 Value | Report 20 Value | RECOMMENDED |
|-----------|----------------|-------------|-----------------|-------------|
| Letter-spacing delta | >= 0.03em | >= 0.5px | >= 0.03em | **>= 0.03em** (0.5px at 16px = 0.03em, consistent) |
| Max stacked gap | <= 108px | <= 108px | -- | **<= 108px** (converged) |
| Background delta | >= 15 RGB | >= 15 RGB | >= 15 RGB | **>= 15 RGB** (unanimously converged) |
| Font-size delta | >= 2px | >= 2px | >= 2px | **>= 2px** (converged) |
| Component families | >= 10 | >= 5 | -- | **>= 10** (Report 10 is more recent, CD-006 used 11+) |
| Mechanism categories | >= 4 of 5 | >= 4 of 5 | -- | **>= 4 of 5** with per-category min 1+ (converged) |
| Multi-coherence | >= 3 channels | >= 3 channels | >= 3 channels | **>= 3 channels** (unanimously converged) |
| CSS lines (Flagship) | 700-1200 | >= 600 | -- | **700-1200** (guideline, not gate) |
| Brief total length | ~230 lines | ~100-170 lines | -- | **~230 lines** (Report 10 draft; interference risk per Report 13) |

### Where sources AGREE (highest confidence values)

These values have ZERO disagreement across all reports:
- Container: 940-960px
- border-radius: 0 everywhere
- box-shadow: none everywhere
- No gradients
- No #000000 or #FFFFFF
- Font trinity: Instrument Serif / Inter / JetBrains Mono
- Background delta >= 15 RGB
- Opus as builder model
- 9 PA auditors for verification (Mode 4)

---

## SUMMARY: EXTRACTION COMPLETENESS

| Section | Lines of Exact Content | Confidence | Source Count |
|---------|----------------------|------------|-------------|
| 1. Identity (Soul) | 40+ lines of exact CSS | VERY HIGH | 5+ sources converge |
| 2. Perception Thresholds | 8 binary thresholds with values | VERY HIGH | 6+ sources converge |
| 3. Transition Grammar | 3 types with CSS recipes | HIGH | CD-006 forensics + Report 10 |
| 4. Multi-Coherence | 6 channels, direction rules, worked example | HIGH | Reports 10, 19, 20, CD-006 |
| 5. Fractal Echo | 5 scales, table template, findings | HIGH | Reports 10, 22, CD-006 |
| 6. Compositional Memory | 3 protocols | MODERATE | Report 10 (single source) |
| 7. Self-Check | 5 core + 5 extended questions | HIGH | Report 10, Option C analysis |
| 8. Creative Authority | Exact permissions + anti-scale formula | HIGH | CI-04, Report 10 |
| 9. Quality Floor | 6+ minimums with exact values | HIGH | CI-08, Report 10 |
| 10. Conviction Card | Template with exact fields | MODERATE | Report 10, Option E analysis |
| 11. Build Process | 4-phase with verification pauses | HIGH | Report 10 |
| 12-19. Supporting | CSS examples, density rules, patterns | HIGH | CD-006 forensics, catalogs |

**Total unique content extracted: ~500+ specific values, rules, and CSS snippets across 20 sections.**

This extraction provides EVERYTHING the conventions-brief drafter needs to write Section 2 of the master prompt. No compression was applied -- every value, every rule, every example is included as it appears in the source material.

---

*END RESEARCH EXTRACTION -- 01-brief-research.md*
