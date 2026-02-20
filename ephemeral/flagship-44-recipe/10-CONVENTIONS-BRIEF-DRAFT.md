# Flagship Conventions Brief — Draft v1

You are building a single HTML page for the KortAI design system. You are both the telescope (WHY — compositional reasoning about what form the content needs) and the microscope (WHAT — the specific CSS that manifests that reasoning). You plan the composition, write the HTML and CSS, and verify your own work. There is no separate planner handing you instructions. The compositional intelligence lives in you.

This brief describes the world you are building inside — the materials, the physics, the quality of light. It does not tell you what to build. That comes from the content.

Read this brief once, fully. Then build.

---

## 1. IDENTITY (Soul)

KortAI pages are warm, sharp, flat, and editorial. Five constraints define the identity. They cannot be overridden, negotiated, or reinterpreted. They are the physics of this world.

```
border-radius: 0           — Every edge is sharp. Decisive, not friendly.
box-shadow: none            — No shadows. Depth comes from spacing and borders, not illusion.
background: solid only      — No gradients. Flat color planes, honestly stated.
color: no #000 or #FFF      — Warm near-black (#1A1A1A), warm cream (#FEF9F5). Never clinical.
opacity: 1 on containers    — No semi-transparent backgrounds. What you see is what exists.
```

Typography is a trinity: **Instrument Serif** for display headings (editorial authority), **Inter** for body text (functional clarity), **JetBrains Mono** for code (technical precision). Serif is never used for body text. Sans-serif is never used for main headings.

The page container is **940-960px** wide. This is non-negotiable — it was the single most common failure in previous builds. Express density through internal spacing, not width reduction.

Spacing follows a 4px base unit: 8, 16, 24, 32, 48, 64, 80, 96. No single margin or padding value exceeds 96px.

---

## 2. PERCEPTION THRESHOLDS (The Floor)

These are the minimum deltas for a human to perceive a difference. Below these values, your CSS is invisible — technically present but experientially absent. Every design choice must clear these floors.

```yaml
thresholds:
  background_delta:     ">= 15 RGB between adjacent zones"
  font_size_delta:      ">= 2px between typographic zones"
  letter_spacing_delta: ">= 0.03em between typographic zones"
  stacked_gap_max:      "<= 108px total gap at any section boundary"
  border_presence:      ">= 1 structural border-left per zone (alternating OK)"
  component_adoption:   ">= 10 component families from merged-components.css"
  mechanism_categories: ">= 4 of 5 categories deployed (S/H/C/D/N)"
  multi_coherence:      ">= 3 CSS channels shift at every zone boundary"
```

If your adjacent zone backgrounds differ by 5 RGB points, they are the same color. If your letter-spacing changes by 0.005em, it changed by nothing. Design above the floor or do not design at all.

---

## 3. TRANSITION GRAMMAR (Three Kinds of Boundary)

Every zone boundary has a character. Match the transition type to the boundary meaning:

**SMOOTH** — A quiet modulation. The content shifts topic but not mode. CSS: background shifts by 15-25 RGB, 1px horizontal rule, spacing holds steady or shifts by one step. The reader crosses without noticing they crossed.

**BRIDGE** — A deliberate pause between territories. The content shifts mode (from exposition to analysis, from overview to deep-dive). CSS: background shifts by 25+ RGB, a tinted breathing band (48-64px) with a transitional sentence, typography weight or size shifts. The reader pauses, reorients, continues.

**BREATHING** — A full rest. The page exhales. A structural border (3-4px) marks the boundary. Generous spacing (64-80px) above and below. The reader arrives at a new region. Use sparingly — one or two per page maximum.

Never stack two BREATHING transitions adjacent. Never use more than three SMOOTH transitions in sequence without a BRIDGE or BREATHING to break monotony.

---

## 4. MULTI-COHERENCE BINDING (The Binding Rule)

At every zone boundary, **at least 3 of these 6 CSS channels** must shift simultaneously:

1. **Chromatic** — background-color, accent color, or border color
2. **Typographic** — font-size, font-weight, letter-spacing, or line-height
3. **Spatial** — padding, margin, or content density
4. **Structural** — border-left weight, horizontal rules, or visual dividers
5. **Behavioral** — hover states, transition timing, or interaction depth
6. **Material** — surface treatment, texture, or component density

The shifts must point the **same semantic direction**. Define your direction before building:

```
"deeper"   = darker bg + tighter spacing + heavier borders + denser typography
"lighter"  = warmer bg + generous spacing + thinner borders + more air
"focusing" = narrower content + larger type + bolder accents + fewer elements
```

At the Zone 1 to Zone 2 boundary, if the background darkens, the spacing should compress and the borders should thicken. Not: background darkens but spacing increases (contradictory signal). The reader should feel one shift, not three unrelated changes.

**What multi-coherence produces:** Imagine a zone boundary where background shifts from #FEF9F5 to #F0EBE3 (18 RGB delta), font-size drops from 18px to 16px, padding compresses from 64px to 48px, a 3px border appears, and letter-spacing tightens from 0.04em to 0.02em. Five channels moving together. The reader feels "we are going deeper" without analyzing any single property. That is multi-coherence. No page we have built has achieved this consistently at every boundary across Flagship-scale complexity. That is your challenge. Make every boundary do this.

---

## 5. FRACTAL ECHO (Pattern at Every Scale)

Your composition should echo its organizing principle at all 5 architectural scales. If your page is organized around "progressive density," then:

- **Navigation scale** (~1440px): The header and nav set the tone — sparse, authoritative, establishing the density arc before content begins
- **Page scale** (~960px): Sections get denser as the reader scrolls deeper
- **Section scale** (~200-400px): Within each section, content compresses toward the conclusion
- **Component scale** (~40-100px): Callout internals mirror the sparse-label → dense-body pattern
- **Character scale** (~12-20px): Letter-spacing tightens in denser zones

Before writing CSS, produce a **Fractal Echo Table** in your build log:

```
| Scale      | How the pattern expresses here       | Primary CSS            |
|------------|--------------------------------------|------------------------|
| Navigation | [header/nav tone and density]        | [layout, borders]      |
| Page       | [zone sequence and density arc]      | [padding, backgrounds] |
| Section    | [within-section rhythm]              | [margin, borders]      |
| Component  | [component internal structure]       | [label/body spacing]   |
| Character  | [micro-typography shifts]            | [letter-spacing, size] |
```

Pattern direction must be consistent across all 5 rows. If your page-level pattern says "compressing" but your component-level says "expanding," the fractal is broken. Either align them or acknowledge the break is intentional (and explain why).

This is not decoration. This is what makes a page feel *composed* rather than *assembled*. The human perceives it as "this page was designed by someone who thought about it" — not because they analyze each scale, but because every scale reinforces the same message.

---

## 6. COMPOSITIONAL MEMORY PROTOCOL (Preventing Drift)

Long builds drift. By Section 10, you may have forgotten the coherence direction you established at Section 1. This protocol keeps your compositional memory active.

**At every zone boundary** (when your CSS transitions from one zone to the next):
1. Name the coherence direction in a CSS comment: `/* Boundary Z2→Z3: DEEPENING */`
2. Count the channels shifting. If fewer than 3: add shifts before proceeding.
3. Verify all shifts point the same direction. If one contradicts: fix it now.

**At the midpoint of your build** (roughly Section 6 of 12, or when you have written ~500 CSS lines):
- Render the page. Scroll top to bottom.
- Write 3 sentences in your build log: What feels *designed*? What feels *flat*? What is the single weakest section?
- Strengthen the weakest section before continuing.

**After every 5th mechanism deployment:**
- Count mechanisms by category (Spatial / Hierarchy / Component / Depth / Navigation).
- Any category at 0? Deploy one before continuing.
- Any category at 4+? Evaluate whether the last addition was necessary.

This protocol adds approximately 15 minutes to a build. It prevents the catastrophic drift that produced 210-276px whitespace voids in previous Flagship attempts.

---

## 7. SELF-CHECK PROTOCOL (Five Questions Before Submission)

After completing your first full draft of HTML and CSS, pause. Answer these five questions honestly. Do not proceed to final output until all five are answered.

**Q1: SQUINT TEST.** Lean back from the screen. Squint at the full page. Can you identify every zone boundary from color and spacing alone, without reading any text?
- YES → proceed
- NO → your chromatic or spatial channel shifts are below perception threshold. Increase them.

**Q2: SCROLL TEST.** Scroll the full page. Is there any continuous stretch of more than 108px that contains no content (no text, no borders, no components — just background)?
- NO → proceed
- YES → you have a void. Fill it with content or reduce spacing.

**Q3: SECOND-HALF TEST.** Does at least one designed moment (visual peak using 3+ mechanisms at high intensity with unique treatment) appear below the 50% scroll mark?
- YES → proceed
- NO → your visual interest is front-loaded. Move or add a designed moment to the second half.

**Q4: CHANNEL COUNT.** At your most important zone boundary, how many CSS channels shift? Count them: background, font-size, font-weight, letter-spacing, spacing, borders.
- 3 or more → proceed
- Fewer than 3 → add channel shifts at that boundary.

**Q5: SPATIAL SKELETON.** Imagine removing all color and text from your page, leaving only borders and whitespace. Does the spatial skeleton still communicate structure, hierarchy, and rhythm?
- YES → proceed (your page has spatial confidence)
- NO → your spatial structure is incomplete. Strengthen borders and spacing before adding more surface treatment.

---

## 8. CREATIVE AUTHORITY (What You Are Free To Do)

You are the composer. The soul constraints are your instrument's range — they define what notes exist, not what melodies you play. Everything outside the five soul constraints and the perception thresholds is yours to decide.

Specifically, you may:

- **Override any non-soul value** in tokens.css if you log the override in your build log with compositional reasoning (what, from, to, and why).
- **Invent new component patterns** not in merged-components.css if the content demands them.
- **Choose your own zone count** (2-5), section architecture, mechanism selection, metaphor, and density arc.
- **Reject any mechanism** from the catalog that does not serve your content. Using fewer mechanisms with deeper intention beats deploying many mechanisms superficially.
- **Deploy mechanisms your own way.** The catalog describes CSS techniques that transfer across metaphors. How you combine them, what semantic weight you give each, and where you place them is entirely your judgment.

The constraint:action ratio of this brief is intentionally low. You have far more freedom than restriction. The restrictions exist to prevent specific, measured failure modes (imperceptible CSS, whitespace voids, monotone typography, contradictory channel shifts). Everything else is creative space.

Trust your compositional instinct. If something feels flat, it probably is — strengthen it. If something feels over-designed, it probably is — remove it. **Richness is semantic density multiplied by restraint multiplied by spatial confidence.** More is not better. Meaning is better.

---

## 9. QUALITY FLOOR (Minimum Standards)

Your page must meet these minimums. They are not aspirational — they are the floor below which the page is considered structurally incomplete.

**Mechanism count:** Deploy mechanisms from at least 4 of 5 categories:
- **Spatial** (S): layout topology, density rhythm, grid structures
- **Hierarchy** (H): border-weight gradient, importance encoding, scale differentiation
- **Component** (C): 2-zone DNA, semantic callouts, component internal structure
- **Depth/Emphasis** (D): zone differentiation, solid offset, focal points
- **Navigation** (N): page chrome, progressive disclosure, structural landmarks

**CSS range:** A Flagship page typically produces 700-1200 lines of CSS. Below 500 suggests under-deployment. Above 1500 suggests over-engineering. These are guidelines, not gates.

**Component adoption:** Use at least 10 component families from merged-components.css. You may extend or adapt them, but the component library represents proven patterns.

**Accessibility:** WCAG 2.1 AA compliance. Skip link, landmark roles, focus indicators, sufficient color contrast (4.5:1 for normal text, 3:1 for large text). Accessibility is not an afterthought — build it into the HTML skeleton from the start.

**Responsive behavior:** The page must function at 768px viewport width. Multi-column layouts collapse to single column. Spacing reduces proportionally. The soul (sharp edges, flat surfaces, warm palette, typography trinity) remains unchanged.

---

## 10. CONVICTION CARD (Your Commitment)

Before writing your first line of CSS, write this in your build log:

```
CONVICTION STATEMENT

Content: [filename]
Zones: [number and names]
Organizing principle: [one sentence describing what concept organizes the page]
Coherence direction: [one word — deepening, opening, focusing, resolving, ...]
Metaphor (if any): [name and one-sentence structural connection to content]

I commit to:
- Making every zone boundary shift >= 3 channels in the [direction] direction
- Placing at least one designed moment in the second half of the page
- Stopping at the midpoint to render, scroll, and assess
- Logging every override with compositional reasoning
- Answering the 5 self-check questions honestly before submitting
```

This is not bureaucracy. It is the difference between building with intention and building by accumulation. The conviction statement anchors your compositional memory for the duration of the build. When you are deep in CSS at Section 9 and have forgotten why you chose this structure, scroll back to your conviction statement. It will remind you.

---

## PROCESS (How This Flows)

**Phase A — Understand.** Read the content markdown. Identify the natural zones (where does the content shift topic, mode, or intensity?). Identify tensions (what pulls in two directions?). If a metaphor emerges from the content's structure, name it. If not, build without one — a well-composed page without a metaphor beats a poorly-composed page with a forced one.

**Phase B — Plan.** Write your conviction statement, transition table, and fractal echo table in your build log. This is your navigation instrument for the build. Consult `mechanism-catalog.md` to select mechanisms that serve your content — not the most mechanisms, but the right mechanisms. Plan your zone backgrounds, checking that adjacent zones differ by >= 15 RGB.

**Phase C — Build.** Write HTML first (skeleton with landmarks, skip link, ARIA roles, component classes). Then CSS in this sequence: reset + soul + base typography → zone backgrounds → structural borders → typography zones → element-level richness → responsive. At each stage, verify against your plan.

Four verification pauses during build:
- After HTML skeleton: check landmarks, skip link, component classes
- After zone backgrounds: check >= 15 RGB delta between adjacent zones
- After borders: check border-left presence and distinct weight values
- After typography: check >= 2px font-size delta between zones

**Phase D — Verify.** Render the page. Scroll from top to bottom. Answer the 5 self-check questions. Produce your cascade value table (computed CSS values at every section boundary). Fix anything that fails before submitting.

**Deliverables:**
1. `output.html` — the page
2. `_build-log.md` — conviction statement, transition table, fractal echo table, midpoint observation, override log, self-check answers
3. `_cascade-value-table.md` — computed background, font-size, font-weight, letter-spacing, border-left, margin at every section boundary

---

*This brief is approximately 230 lines. It describes a world, not a checklist. Build inside it.*
