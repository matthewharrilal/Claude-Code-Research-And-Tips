# 18 — SCALES DEEP DIVE: The 5 Architectural Zoom Levels

**Agent:** scale-tracer (Opus)
**Date:** 2026-02-19
**Task:** #33 — How does each scale manifest in CSS and how does the recipe invoke them?
**Artifacts examined:** CD-006-pilot-migration.html, 07-intentionality.html (Flagship 1.5/4), middle-tier-page.html, mechanism-catalog.md, scale-research.md, 10-CONVENTIONS-BRIEF-DRAFT.md

---

## WHAT SCALES ARE (AND ARE NOT)

Scales are **vertical depth** -- fractal self-similarity at each zoom level. They answer: "If I squint at this page from progressively closer distances, does the same organizing principle appear at every distance?"

Scales are NOT:
- Mechanisms (horizontal breadth of CSS vocabulary)
- Channels (the 6 CSS property families that can shift at boundaries)
- Quality (more scales does not equal better design -- Middle at 2 scales scored 4/4, Ceiling at 4 scales scored 1.5/4)

**The mathematical ceiling:** Alexander/Salingaros formula gives `ln(1440/12) / ln(2.7) = 4.8` -- 5 scales is the natural maximum for web. Beyond 5, add CHANNELS (more CSS properties at existing levels), not LEVELS.

**The anti-scale finding:** Scales measure a SIDE EFFECT of richness, not its cause. Richness = semantic density x restraint x spatial confidence. Fractality is EMERGENT from constraint pressure, not designed-in.

---

## THE 5 SCALES: CONCRETE CSS ANALYSIS

### Scale 1: NAVIGATION (~1440px zoom -- bird's eye)

**What you see:** Header, table of contents, page-level navigation. The widest view before content begins.

**CSS properties that express it:**

| Property | What It Does at This Scale | Concrete Values |
|----------|---------------------------|-----------------|
| `header { background }` | Dark landmark -- establishes page identity before content | `#1A1A1A` (near-black) |
| `header { border-bottom }` | Primary accent -- structural signal of authority | `3px solid #E83025` |
| `.toc { background, border, padding }` | Navigation zone -- distinct surface from content | `#FAF5ED`, `3px solid #E0D5C5`, `32px` |
| `.header-inner { max-width }` | Container width -- THE identity constraint | `960-1100px` |
| `.header-meta { letter-spacing, text-transform }` | Meta typography -- mono, uppercase, tracked | `0.1-0.15em`, `uppercase` |

**What "the pattern appears at this zoom level" means CONCRETELY:**

If the page's organizing principle is "progressive density" (sparse-to-dense), then at Navigation scale the header should feel SPARSE -- generous padding (64px+), few elements, breathing room. The TOC should preview the density arc (e.g., CD-006's TOC shows density labels like "Sparse" and "Dense" next to section titles).

If the principle is "refinement" (raw-to-polished), then the header should feel RAW -- warm, expansive, introductory -- and the TOC should preview the refinement journey.

**How a builder KNOWS they've achieved expression at this scale:**

Squint test: Cover all body content. Look ONLY at the header + TOC region. Can you feel the organizing principle from this alone? In CD-006, the header meta says "PILOT MIGRATION" in tracked mono type, the title is in display serif, and the subtitle says "this page is both tutorial and proof." You feel the principle (self-demonstration) before reading any content.

**How the current recipe invokes this scale:**

The conventions brief (Section 5, Fractal Echo) says: "Navigation scale (~1440px): The header and nav set the tone -- sparse, authoritative, establishing the density arc before content begins." This is good as DESCRIPTION but lacks CSS specificity. A builder knows WHAT to achieve but not HOW.

**Recipe gap:** No concrete instruction like "Your header padding should encode your organizing principle -- if the principle is compression, header padding starts at 64-80px (generous) as the widest point of the arc."

---

### Scale 2: PAGE (~960px zoom -- the scroll)

**What you see:** How sections sequence across the full page. The flow of the entire document.

**CSS properties that express it:**

| Property | What It Does at This Scale | Concrete Values |
|----------|---------------------------|-----------------|
| `section { padding-top/bottom }` | Section breathing -- encodes density arc across scroll | 32px (dense) to 64-80px (sparse) |
| `section { background-color }` | Zone backgrounds -- chromatic arc across scroll | 3-4 distinct zone colors |
| Section-level `border-left` | Structural containment -- rhythm of presence/absence | 4px (featured), 3px (standard), 0 (absent) |
| `.transition { type }` | Boundary grammar -- how sections hand off | Smooth (1px), Bridge (background shift), Breathing (3px + 80px) |
| Section heading `font-size` variation | Typographic arc across scroll | 30px (opening) → 26px (analytical) → 28px (resolved) |

**What "the pattern appears at this zoom level" means CONCRETELY:**

If the principle is "progressive density," then section padding should compress as you scroll: S1 at 64px, S3 at 48px, S5 at 32px, S8 at 48px (resolution). The zone backgrounds should warm-to-cool or saturate. In CD-006, sections progress: sparse (#FEF9F5, 80px padding) → dense (#FFFFFF, 32px padding) → breathing (#FAF5ED, 64px padding) → resolving.

The Flagship attempted this with 12 per-section zone colors (--color-zone-s1 through --color-zone-s12), but the RGB deltas between adjacent zones were 1-8 points -- BELOW PERCEPTION THRESHOLD (15 minimum). So the pattern existed in CSS but was invisible.

**How a builder KNOWS they've achieved expression:**

Scroll test: Scroll from top to bottom at normal speed. WITHOUT reading any text, can you feel the density arc changing? In CD-006, the transition from sparse cream sections to dense white sections to the dark code blocks and back to warm breathing sections is FELT as a rhythm. In the Flagship, all sections looked the same cream color.

**How the current recipe invokes this scale:**

The brief says: "Page scale (~960px): Sections get denser as the reader scrolls deeper." It also mandates the Fractal Echo Table. This is the BEST-INVOKED scale because section padding and zone backgrounds are the most familiar CSS tools.

**Recipe gap:** The brief doesn't specify MINIMUM perceptual deltas at this scale. The Flagship proves that a builder will create 12 zone colors differing by 3 RGB points and believe they've achieved expression. The recipe needs: "Adjacent zone backgrounds must differ by >= 15 RGB points. If you cannot see the difference on a calibrated monitor, it is not a difference."

---

### Scale 3: SECTION (~200-400px zoom -- one screen)

**What you see:** How components arrange within a section. What fills one viewport.

**CSS properties that express it:**

| Property | What It Does at This Scale | Concrete Values |
|----------|---------------------------|-----------------|
| Intra-section heading hierarchy | Sub-hierarchy within a section | h2 → h3 → h4 with ~1.5x ratio |
| Component `margin` between siblings | Intra-section rhythm | 24px (tight) to 32-48px (generous) |
| Grid layouts within sections | Spatial topology of one screen | `grid-template-columns: 1fr 1fr` or `repeat(4, 1fr)` |
| Component ordering within section | Narrative arc within a screen | Intro paragraph → callout → code → table → summary |
| Width variation within section | Horizontal rhythm within a screen | `max-width: 70%` (narrow) vs `100%` (full) |

**What "the pattern appears at this zoom level" means CONCRETELY:**

If the principle is "progressive density" and this section is in the "dense zone" of the page-level arc, then WITHIN this section: the intro paragraph should be moderate, the technical content should compress (tighter component margins, denser grids), and the section conclusion should breathe slightly. The section-level arc ECHOES the page-level arc in miniature.

CD-006 achieves this: Section 5 (the dense peak) uses a Bento Grid with 4 columns (`repeat(4, 1fr)`) and 24px gap -- the tightest layout anywhere on the page. Component margins within this section are 24px vs 32px in sparse sections. The section has an internal arc: exposition → Decision Matrix (dense peak) → Reasoning (moderate) → Essence callout (breathing).

The Flagship attempted this with detailed `.zone-s5 .component-block { margin: var(--space-4) 0; }` (16px component margins in dense zones) vs larger margins in sparse zones. This is correct in principle but the VISUAL DIFFERENCE between 16px and 24px component margins is subtle at best.

**How a builder KNOWS they've achieved expression:**

One-screen test: Take a screenshot of a single viewport at the midpoint of the page. Within that one screenshot, can you see an internal rhythm? Multiple component types? A sub-arc from introduction to detail? In CD-006's midpoint (Section 5), one viewport shows: h2 heading → exposition paragraph → Decision Matrix table → Reasoning two-column component. Four distinct visual zones in one screen. In the Flagship's midpoint, one viewport shows: uniform paragraphs with identical styling.

**How the current recipe invokes this scale:**

The brief says: "Section scale (~200-400px): Within each section, content compresses toward the conclusion." This is vague. It tells the builder WHAT the result should look like but not HOW to create intra-section rhythm.

**Recipe gap:** The recipe needs concrete instruction: "Each section should contain at least 2 distinct component types. Within a section, component margins should vary by at least 8px between the section's sparse and dense moments. If your section is 100% body paragraphs, it has zero section-scale expression."

---

### Scale 4: COMPONENT (~40-100px zoom -- one element)

**What you see:** How content organizes inside a single component (callout, card, code block, table).

**CSS properties that express it:**

| Property | What It Does at This Scale | Concrete Values |
|----------|---------------------------|-----------------|
| `.callout-label { font-size, letter-spacing, text-transform }` | Sparse label zone (meta-level) | 12px, 0.1em, uppercase |
| `.callout-body { font-size, line-height }` | Dense body zone (content-level) | 16px, 1.7 |
| `border-left: 4px solid` | Component accent -- semantic color signal | 4px (standard), color varies |
| `.callout { padding }` | Internal breathing -- varies by page zone | 24px (sparse sections) vs 16px (dense sections) |
| Table `th` vs `td` styling | Internal hierarchy within tables | th: mono, uppercase, 12px; td: body, 16px |

**What "the pattern appears at this zoom level" means CONCRETELY:**

The 2-zone DNA (sparse label → dense body) is the primary component-scale expression. EVERY callout, every table, every code block should have this internal structure: a small, tracked, uppercase meta-zone (LABEL) followed by a larger, normal-case content-zone (BODY).

But fractal coherence means MORE than just having 2-zone DNA. It means the component's INTERNAL spacing echoes the organizing principle. In CD-006, components in dense page zones have tighter internal padding:

```css
/* Dense zone: components compress */
.component-block.dense .component-label {
  padding: var(--space-2) var(--space-4);  /* 8px 16px */
}
.component-block.dense .component-body {
  padding: var(--space-3) var(--space-4);  /* 12px 16px */
}

/* Sparse zone: components breathe */
.component-block.sparse .component-label {
  padding: var(--space-3) var(--space-6);  /* 12px 24px */
}
.component-block.sparse .component-body {
  padding: var(--space-4) var(--space-6);  /* 16px 24px */
}
```

The Flagship achieved basic 2-zone DNA (label/body zones in callouts) but did NOT vary component internals by page zone. Every callout had identical internal padding regardless of whether it sat in a "sparse" or "dense" section. The fractal echo was present at the structural level but absent at the parametric level.

**How a builder KNOWS they've achieved expression:**

Component isolation test: Extract one callout from a sparse section and one from a dense section. Place them side by side. Can you tell which came from the sparse zone and which from the dense zone WITHOUT reading the content? In CD-006, yes -- the sparse callout has visibly more internal padding. In the Flagship, no -- they are identical.

**How the current recipe invokes this scale:**

The brief says: "Component scale (~40-100px): Callout internals mirror the sparse-label → dense-body pattern." This invokes the STRUCTURAL pattern (2-zone DNA) but does not invoke the PARAMETRIC variation (component internals varying by zone).

**Recipe gap:** The recipe needs: "Components should breathe differently depending on which page zone they inhabit. Define 2 component padding variants: `.component.sparse` (generous: 12px/24px) and `.component.dense` (compressed: 8px/16px). Apply the sparse variant in sparse zones and the dense variant in dense zones. This is the fractal echo at component scale."

---

### Scale 5: CHARACTER (~12-20px zoom -- inline text)

**What you see:** Text-level styling: letter-spacing, font-size variation between zones, line-height changes, bold/italic patterns, inline code formatting.

**CSS properties that express it:**

| Property | What It Does at This Scale | Concrete Values |
|----------|---------------------------|-----------------|
| `letter-spacing` per zone | Tracking encodes density/formality | 0.02em (generous) to -0.01em (compressed) |
| `font-size` per zone | Body text size encodes reading mode | 17px (sparse) to 15px (dense) to 16px (standard) |
| `line-height` per zone | Vertical rhythm encodes breathing | 1.85 (sparse) to 1.55 (dense) |
| `max-width` per zone (ch units) | Reading column width per zone | 62ch (narrow/generous) to 72ch (wide/dense) |
| Drop cap `::first-letter` | Editorial opening -- character-scale landmark | 3.5em, display serif, primary color |

**What "the pattern appears at this zoom level" means CONCRETELY:**

This is the HARDEST scale to achieve and the most controversial. The scale research found that Middle (2 scales, NO character scale) scored PA-05 4/4 while Ceiling (4 scales, attempted character scale) scored 1.5/4.

CD-006 achieves character scale through:
1. **Consistent label tracking:** ALL component labels use `letter-spacing: 0.1em` (meta-level signal)
2. **Consistent code tracking:** Code labels use `letter-spacing: 0.05em` (code-level signal)
3. **Header meta tracking:** `letter-spacing: 0.15em` (page-level meta)
4. **Drop caps:** Two instances (S1 and S4) using `::first-letter` at 3.5em
5. **Body text max-width:** `70ch` -- subtle character-scale decision

But CD-006 does NOT vary letter-spacing by page zone. Its character-scale expression is CATEGORICAL (labels vs body vs code) not PROGRESSIVE (zone 1 vs zone 2 vs zone 3).

The Flagship attempted progressive character-scale variation:
```css
/* Zone 1: Generous reading */
.zone-s1 p, .zone-s2 p, .zone-s3 p {
  font-size: 17px;
  line-height: 1.85;
  letter-spacing: 0.02em;
}

/* Zone 2: Analytical compression */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  font-size: 15px;
  line-height: 1.55;
  letter-spacing: -0.01em;
}
```

This is AMBITIOUS and CONCEPTUALLY CORRECT. The problem is not the idea but the execution: the background colors those paragraphs sit on differed by only 3-8 RGB points, so the letter-spacing variation had no spatial context. The character-scale coherence existed in isolation, not as part of a multi-channel shift.

The Middle experiment has only 3 instances of letter-spacing, all identical (`0.1em`), all on component labels. Zero per-zone variation. Zero progressive character treatment. Yet it scored 4/4.

**How a builder KNOWS they've achieved expression:**

Character test: Read one paragraph from a sparse zone and one from a dense zone. Do they FEEL different? Not because of content, but because of the text itself -- is one airier, with more space between letters and lines? In the Flagship, if you read S1 at 17px/1.85/0.02em and S5 at 15px/1.55/-0.01em, yes, they feel different. But because the surrounding zones looked identical, the reader has no REASON to notice the difference. The character-scale variation was technically present but contextually meaningless.

**How the current recipe invokes this scale:**

The brief says: "Character scale (~12-20px): Letter-spacing tightens in denser zones." This is the RIGHT instruction but it needs a PRECONDITION: character-scale expression only matters if page-scale and section-scale expression are already perceptible. Without visible zone backgrounds or section borders, letter-spacing variation is orphaned.

**Recipe gap:** The recipe should say: "Character-scale variation is the LAST thing you implement. Only after zone backgrounds differ by >= 15 RGB and section borders establish visual rhythm should you add per-zone letter-spacing. Character scale is the finish that makes a composed page feel polished; it cannot make an uncomposed page feel composed."

---

## SCALE EXPRESSION AUDIT: THREE ARTIFACTS COMPARED

### CD-006 (39/40, PA-05 ~3.5/4)

| Scale | Score | Evidence |
|-------|-------|----------|
| **Navigation** | STRONG | Dark header with 3px red border + TOC with density labels + axis pattern annotations. Header padding 64px. TOC has breathing zone background. Navigation reads as "authoritative editorial opening." |
| **Page** | STRONG | 4-act density arc (Orient/Learn/Build/Ship). 3 transition types (Smooth/Bridge/Breathing) with 48px/64px/80px gaps. Zone backgrounds: #FEF9F5 → #FFFFFF → #FAF5ED clearly perceptible. Section padding: 80px → 32px → 48px → 64px. |
| **Section** | STRONG | 11 component types across 8 sections. Within-section arcs: exposition → technical peak → resolution. Bento Grid in S5 (4-column). Width variation (70% pullquote, 100% tables). Internal sub-headings with italic serif. |
| **Component** | STRONG | 33 component instances, all with 2-zone DNA. Dense/sparse variants with different internal padding. 6 callout colors (semantic encoding). Reasoning component: 2-column grid. Core Abstraction: 3-zone (label + principle + proof). |
| **Character** | MODERATE | Consistent label tracking (0.1em), code tracking (0.05em), header meta tracking (0.15em). Drop caps at S1 and S4. But NO per-zone body text variation -- all body text is 16px/1.7. Character scale is CATEGORICAL not PROGRESSIVE. |

**Total: 5/5 scales expressed. 4 strong + 1 moderate = robust fractal coherence.**

### Flagship 1.5/4 (07-intentionality.html)

| Scale | Score | Evidence |
|-------|-------|----------|
| **Navigation** | MODERATE | Dark header with 3px red border. Header meta in mono. BUT: no TOC (no navigation structure beyond the header). Navigation scale is only half-expressed -- the dark landmark exists but the previewing/wayfinding function is absent. |
| **Page** | WEAK | 12 per-section zone colors defined but differing by 1-8 RGB (imperceptible). Section padding varies (32px to 64px) -- this is perceptible. Section border-left alternates (present on 6/12 sections, with weight variation 3px/4px). The spacing arc works. The chromatic arc is invisible. The structural arc works. So 2/3 page-scale channels function. |
| **Section** | WEAK | Most sections contain only body paragraphs + 1 callout or table. Limited component variety within any single section. No within-section grids. No within-section density arc. Sections feel like "paragraphs with occasional callouts" not "composed viewports." |
| **Component** | MODERATE | 2-zone callout DNA present. Multiple callout variants (info, gotcha, tip, essence). Tables with mono headers. Code blocks (dark, syntax highlighted). But component internals do NOT vary by page zone -- identical padding everywhere. Basic structural DNA without parametric variation. |
| **Character** | ATTEMPTED | Per-zone body text variation: 17px/1.85/0.02em (sparse) → 15px/1.55/-0.01em (dense) → 16px/1.75/0 (resolved). Per-zone heading variation: 30px/400/0.03em → 26px/600/-0.02em → 28px/400/0. TECHNICALLY PRESENT and CONCEPTUALLY CORRECT. But orphaned -- sits on imperceptible zone backgrounds, making the variation feel random rather than reinforcing a multi-channel shift. |

**Total: 5/5 scales attempted. 0 strong, 2 moderate, 2 weak, 1 attempted-but-orphaned. The Flagship's failure is not missing scales -- it attempted ALL 5. The failure is that scales 2-3 were too weak to provide context for scales 4-5.**

### Middle Experiment (PA-05 4/4 DESIGNED)

| Scale | Score | Evidence |
|-------|-------|----------|
| **Navigation** | STRONG | Dark header with 3px red border. Header inner at 960px. Header meta in mono. No TOC, but the header is a strong landmark. |
| **Page** | STRONG | 4 distinct sections with perceptible differences: Sparse (cream, 64px), Dense (white, 32px, 3px border), Moderate (breathing tan, 48px), Dense again (white, 32px). Zone backgrounds: #FEF9F5 → #FEFEFE → #FAF5ED → #FEFEFE -- at least 15+ RGB delta between adjacent zones. Section borders: 1px (sparse), 3px (dense). Footer mirror (dark, 3px red). |
| **Section** | MODERATE | Section B has table + ordered list. Section C has callout + architecture diagram + benefit items (3 distinct component types). Section D has installation steps (custom numbered). Section E has security layers (border-weight gradient). Multiple component types per section. But no within-section grids. |
| **Component** | STRONG | 2-zone callout DNA with distinct label/body zones. Architecture diagram with solid offset (::after). Security layers with 4-level border-weight gradient (4px/3px/3px/1px). Tables with mono headers. Code blocks dark. Components internally well-structured. |
| **Character** | ABSENT | Only 3 letter-spacing declarations, all 0.1em on labels. No per-zone body text variation. No drop caps. Body text is uniform 16px/1.7 everywhere. Character scale is not expressed at all. |

**Total: 4/5 scales expressed (Navigation absent in wayfinding sense). 3 strong + 1 moderate + 1 absent = solid fractal coherence at 2 required scales (Page + Component), with bonus Section scale.**

---

## THE PARADOX: WHY 2 SCALES BEAT 5 SCALES

The Middle experiment proves that strong expression at 2 scales (Page + Component) produces a 4/4 DESIGNED perception. The Flagship proves that weak expression at 5 scales produces 1.5/4.

**Root cause:** Scales are PERCEPTUAL, not TECHNICAL. A scale that exists in CSS but cannot be perceived does not contribute to the design quality. The Flagship's character-scale variation was technically perfect but perceptually orphaned.

**The dependency chain:**

```
Scale 1 (Navigation) ← standalone, no dependency
Scale 2 (Page)       ← standalone, no dependency
Scale 3 (Section)    ← depends on Scale 2 being perceptible
Scale 4 (Component)  ← depends on Scale 3 being perceptible (for parametric variation)
Scale 5 (Character)  ← depends on Scale 2 + Scale 3 being perceptible
```

You cannot express Scale 5 (character-level zone variation) if Scale 2 (page-level zone backgrounds) is imperceptible, because the reader has no CONTEXT for why the letter-spacing is changing. The variation reads as random, not intentional.

**This means scales must be built BOTTOM-UP (largest first):**
1. Establish Navigation landmark (header)
2. Establish Page arc (zone backgrounds + section padding + transitions)
3. Verify Page arc is PERCEPTIBLE (squint test)
4. Only then: establish Section arc (intra-section rhythm)
5. Only then: establish Component variation (zone-dependent internals)
6. Only then: add Character variation (zone-dependent letter-spacing)

**The Flagship built all 5 simultaneously and verified none perceptually.**

---

## WHAT THE RECIPE MUST SAY ABOUT SCALES

### Current Recipe Language (Section 5)

The brief's Fractal Echo section is GOOD at describing the concept but MISSING three critical elements:

### Gap 1: Perception-First Ordering

The recipe should mandate: "Build scales in order: Navigation → Page → Section → Component → Character. After each scale, VERIFY it is perceptible before proceeding to the next. If Scale 2 (Page) fails the squint test, do NOT proceed to Scale 3."

### Gap 2: Minimum Perceptual Thresholds Per Scale

| Scale | Minimum Perceptible Expression | Threshold |
|-------|-------------------------------|-----------|
| Navigation | Dark header + one navigation element (TOC or nav) | Header visible at 20% zoom |
| Page | Zone backgrounds differ by >= 15 RGB + section padding varies by >= 16px | Squint test: can see zone shifts |
| Section | >= 2 distinct component types per section + intra-section margin variation >= 8px | One-screen test: viewport has internal rhythm |
| Component | 2-zone DNA present + zone-dependent padding variants | Component isolation test: sparse vs dense distinguishable |
| Character | Zone-dependent letter-spacing >= 0.03em delta + zone-dependent font-size >= 2px delta | ONLY after Page + Section pass their tests |

### Gap 3: Scale as SEQUENCING, Not Checklist

The Fractal Echo Table asks the builder to fill in all 5 rows before building. This is correct for PLANNING but creates a checklist mentality. The recipe should reframe: "The Fractal Echo Table is your PLAN. But BUILD in scale order. After each scale layer, render and verify. The table tells you where you're going; the build order tells you how to get there."

---

## SCALE EXPRESSION VS DESIGN QUALITY: THE CORRELATION

| Artifact | Scales Attempted | Scales Perceptible | PA-05 Score | Lesson |
|----------|-----------------|-------------------|-------------|--------|
| CD-006 | 5 | 4.5 (character moderate) | ~3.5/4 | Strong perceptible expression at 4+ scales = DESIGNED |
| Middle | 4 | 3 (Nav strong, Page strong, Section moderate, Component strong) | 4/4 | Strong perceptible expression at 2+ scales = DESIGNED |
| Flagship | 5 | 1.5 (Nav moderate, Page partial, rest orphaned) | 1.5/4 | Attempted expression at all 5 with weak perception = NOT DESIGNED |

**The correlation is with PERCEPTIBLE scales, not ATTEMPTED scales.**

The recipe must encode this. A builder who achieves 2 strongly perceptible scales should STOP and ship rather than attempting 3 more weakly perceptible scales. Adding weak scales does not add quality -- it fragments attention from the scales that ARE working.

---

## ACTIONABLE RECIPE ADDITIONS

### For the Fractal Echo Table (Section 5 of brief):

Add a column: "Verification method" with the specific test for that scale.

```
| Scale      | How the pattern expresses | Primary CSS        | Verification           |
|------------|--------------------------|--------------------|-----------------------|
| Navigation | [describe]               | [properties]       | Visible at 20% zoom?  |
| Page       | [describe]               | [properties]       | Squint test passes?   |
| Section    | [describe]               | [properties]       | One-screen has rhythm? |
| Component  | [describe]               | [properties]       | Isolation test passes? |
| Character  | [describe]               | [properties]       | ONLY if Page passes   |
```

### For the Compositional Memory Protocol (Section 6 of brief):

Add a verification pause after Page scale is implemented:

"After implementing zone backgrounds and section padding (Page scale), STOP. Render the page. Squint. Can you see the zone shifts from arm's length? If NO: increase RGB deltas until you can. Do NOT proceed to Section or Component scale until Page scale is perceptible."

### For the Self-Check Protocol (Section 7 of brief):

Modify Q1 (Squint Test) to explicitly test SCALE ORDERING:

"Q1A: Can you identify every zone boundary from COLOR? (Tests Page scale)
Q1B: Within one viewport, can you see internal rhythm without reading? (Tests Section scale)
Q1C: Can you distinguish a sparse-zone component from a dense-zone component? (Tests Component scale)

If Q1A fails, Q1B and Q1C are irrelevant."

---

## APPENDIX: CD-006 LETTER-SPACING TAXONOMY

CD-006 uses letter-spacing as a CATEGORICAL system, not a progressive one:

| Context | Value | Semantic |
|---------|-------|----------|
| Header meta | 0.15em | Page-level identity signal |
| Component labels | 0.1em | Meta-level annotation |
| Code block labels | 0.05em | Code-adjacent annotation |
| Table headers | 0.05em | Data-level annotation |
| Body text | normal | Content (no tracking) |

5 distinct tracking values encoding 4 hierarchy levels. This is CHARACTER SCALE through categorical differentiation, not progressive zone variation. It works because each value serves a clear semantic purpose that the reader subconsciously registers.

The Flagship also has categorical tracking (0.08em for labels, 0.12em for meta) PLUS progressive zone tracking (0.02em → -0.01em → 0). The progressive layer was imperceptible. The categorical layer would have worked fine on its own.

**Recommendation for the recipe:** Specify character scale as CATEGORICAL (different tracking for different element types) not PROGRESSIVE (different tracking for different page zones). The categorical approach is reliably perceptible; the progressive approach requires strong page-scale context that may not exist.

---

**END OF SCALES DEEP DIVE**
