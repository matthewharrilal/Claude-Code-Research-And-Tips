# Builder Recipe: COMPOSE PASS (Pass A of 2)
Date: 2026-02-26
Status: AUTHORITATIVE (conforms to council-verdict.md)
Pass: A (COMPOSE — structural/compositional dispositions)
Dispositions: D-01, D-02, D-03, D-04, D-05, D-06, D-09 (7 of 9)
Items covered: 70 SCAFFOLDING (Layer 3) + 76 DISPOSITION (Layer 4) = 146 items total
Format: RECIPE (sequenced steps with Read/Select/Deploy/Assess verbs)
Evidence status for D-01 through D-09: EXPERIMENTAL (council verdict Part 5, item 9)
Framing: PURPOSE + VOCABULARY (council verdict: "activation" RETIRED)

---

## How to Use This Document

This is **Pass A of a two-pass build.** You produce the compositional skeleton. A separate Pass B agent will add enrichment (hover states, accessibility, micro-refinements). Do NOT attempt D-07 or D-08.

**What Pass A produces:**
- Complete HTML with all zones, transitions, backgrounds, typography hierarchy
- Layout grids, density arc, surprise moments, quiet zones
- 7 of 9 dispositions (D-01 through D-06, D-09)
- Conviction statement: `<!-- CONVICTION: ... -->` (3 sentences)
- RESIDUAL artifact: `<!-- RESIDUAL: ... -->`

**What Pass A does NOT produce (Pass B handles these):**
- Hover states, ::selection colors, print styles (D-07)
- Skeleton test assessment (D-08)
- Accessibility (skip link, ARIA, focus-visible, contrast)
- Full experiential self-evaluation (Steps 5.0-5.2, 5.4)

This is a **sequenced recipe**, not a checklist. Work through it in order. Each phase builds on the previous one. You have **80% creative authority** within identity constraints — this recipe provides PURPOSE (why) and VOCABULARY (what's available), and you decide HOW to combine them to serve the page.

> **Mode note:** This recipe serves both COMPOSED and APPLIED modes. The Execution Brief specifies your mode. COMPOSED sections are marked. If your brief says APPLIED: follow the APPLIED alternatives where noted; skip metaphor-specific steps; name properties by position (`--bg-z1`) not concept. APPLIED mode quality target: PA-05 2.5-3.0 (MIDDLE tier). COMPOSED mode quality target: PA-05 3.0+ (CEILING/FLAGSHIP).

Per council verdict (CF-01): this recipe is part of ~3,600 total builder input lines (including reference files shared with v2). The improvement is FORMAT (recipe vs checklist) and STRUCTURE (layered constraint architecture), not volume reduction.

---

## PHASE 1: READ YOUR VOCABULARY

Before writing any CSS, read these files to internalize the design vocabulary.

### Step 1.1: Read tokens.css (183 lines) — shared vocabulary

Read `tokens.css` cover to cover. This file provides the CSS custom properties that form family DNA across all pages in the design system.

**What survives compression and appears here:**
- Hex colors (#E83025)
- Pixel measurements (64px)
- Border weights (4px/3px/1px)
- Font sizes (1rem, 0.875rem)
- Spacing scale (4-96px)
- Token names (--color-primary)

> These are your building blocks. They ensure ~80% cross-page coherence automatically.

### Step 1.1b: Mechanism Catalog Quick-Reference

Before reading the full mechanism-catalog.md (1,200+ lines), orient with this summary of the 6 mechanism categories and their top CSS signatures:

| Category | Top Mechanisms | CSS Signature |
|----------|---------------|---------------|
| **Spatial** | Zone padding progression, container width modulation | `padding: 80px 0` → `48px 0`; `max-width` shifts |
| **Temporal** | Density arc, scroll rhythm, transition weight | Section heights vary; `border-width` + `gap` at boundaries |
| **Material** | Background color pairs, border weight hierarchy | `background-color` deltas >= 15 RGB; `border: 4px/3px/1px` |
| **Behavioral** | Hover states, focus-visible, ::selection | `:hover { border-color }`, `:focus-visible { outline: 3px }` |
| **Relational** | Multi-coherence, component zone-adaptation | 3+ channels shift per boundary; callout padding varies per zone |
| **Typographic** | Type scale progression, letter-spacing zones | `font-size` from 18px→15px across zones; `letter-spacing: 0.03-0.05em` |

Read the full catalog for depth, but use this table to quickly identify which categories serve each zone.

### Step 1.2: Read components.css (~944 lines) — shared component DNA

Read `components.css` to understand the pre-built component library.

These two files are provided as **direct file routes** — they bypass the brief and go straight to you uncompressed.

### Step 1.3: Read the Execution Brief — shared identity

The Execution Brief (assembled by the Brief Assembler from the 73-line template + content map) embeds soul constraints. It provides the identity frame. You receive the assembled brief, not the raw template.
> Provenance: ITEM 089 (extract-d15-d17.md L1324), ITEM 090 (extract-d15-d17.md L1324) — see Appendix B.

### Step 1.4: Assess — do you know the vocabulary?

After reading, you should be able to answer:
- What are the primary, background, and text colors?
- What is the font trinity?
- What border weights define the hierarchy?
- What spacing scale is available?

If any answer is unclear, re-read the relevant file before proceeding.

---

## PHASE 2: SELECT YOUR PER-PAGE CREATIVE DECISIONS

These are the things that **vary per page** — your creative territory within the 80% authority zone. Each page is unique because of these decisions.

### CD-006 Zone-by-Zone Reference (CEILING exemplar)

Use this as a concrete vocabulary reference — CD-006 scored 39/40 and demonstrates COMPOSED-mode technique deployment:
- **S1 (Opening):** Full-bleed dark header, 3px red bottom border, generous 80px padding
- **S3 (Dense):** Dark inversion block (`background: #1E1E1E`), 4px left border callouts, 16px body text, tightened line-height 1.6
- **S4 (Peak):** Multi-column grid layout, compressed callouts (12px 16px padding), highest density
- **S6 (Resolving):** Return to light background, wider spacing, 3 distinct transition types across boundaries
- **S8 (Closing):** Footer echoes header dark treatment, minimal content, earned closure

### Step 2.1: Select zone background strategy + colors

Choose how background colors differentiate your page's zones. The backgrounds should make each zone feel like a distinct room.

**Calibration (from perception thresholds — delivered as calibration, not pass/fail):**
- 15 RGB delta = FLOOR (minimum to be perceptible)
- 25-50 RGB delta = COMPOSITIONAL (creates distinct atmosphere per zone)
- Backgrounds that differ by <15 RGB points are invisible to the human eye

**Targets (from Gas Town retrospective — prevents the dominant defect):**
- 20 RGB delta = BUILDER MINIMUM for adjacent zones (gate floor is 15, but 15-19 feels flat)
- 25 RGB delta = COMPOSITIONAL TARGET (aim for this at 3+ boundaries)
- 50+ RGB delta = DRAMATIC (1-2 boundaries per page)
- Never use #FFFFFF for zone backgrounds — lightest acceptable: #FAFAF8
- No cold blues (#4A90D9) or cold purples (#7C3AED) — warm alternatives: teal (#5B8A9B), plum (#7D5B8A)

See `artifact-value-tables.md` for 20 pre-computed warm color pairs at all intensity levels.

**Anti-pattern: threshold gaming.** Using 16 RGB and 0.026em everywhere passes the floor but creates calibrationally flat output. 15 is the floor, not the target. Subtle and dramatic should be DIFFERENT values.

### Step 2.2: Select type scale values + naming

Choose how typography varies across zones and content types.

### Step 2.3: Select structural metaphor vocabulary

Derive a governing metaphor from the content. Name your CSS custom properties by CONCEPT, not by position.

> **APPLIED MODE:** Skip metaphor derivation. Name CSS custom properties by position (`--bg-z1`, `--bg-z2`, `--text-primary`). This is correct for APPLIED mode — position-naming signals that mechanisms solve LOCAL problems, not a governing concept. Proceed to Step 2.4.

**COMPOSED mode indicator:** `--dispatch-open`, `--dispatch-tactical` (named by concept)
**APPLIED mode indicator:** `--bg-z1`, `--bg-z2` (named by position — avoid this)

Concept-based names PREDICT other CSS properties — if your naming scheme carries meaning, the rest of your CSS decisions flow from it.

**THE SMOKING GUN:** CSS custom properties naming is the strongest single indicator of composed vs applied mode. When CSS custom properties are named by concept rather than function, the builder is in COMPOSED mode.

### Step 2.4: Select callout variant semantics

Decide how callouts adapt to zone context. In composed mode, callouts should modulate per zone:

> **APPLIED MODE:** Style callouts uniformly across all zones. Consistent component appearance is a FEATURE of APPLIED mode, not a defect. Use one padding value, one border-weight, one background tint for all callouts. Proceed to Step 2.5.

**Reference values for zone-adapted callouts:**
- Zone 1 (opening): padding 20px 24px (generous)
- Zone 3 (dense): padding 12px 16px (compressed)
- Zone 3 border-left-width: 5px (heavier — the compression emphasizes)

Contrast with APPLIED mode where callouts are styled identically across all zones.

> These selections will be deployed in Step 3.4b. Write them down — you will need them.

**Forward reference:** These callout selections will be applied per-zone in Step 3.4b (component adaptation to zone character). Record your padding, border-weight, background tint, and label sizing decisions here for use during deployment.

### Step 2.5: Select component selection + layout

Choose which components to use and how to lay them out. The brief's content map tells you what each section needs.

**Reader model axis values (select based on content analysis):**

Axis 1 — Info Density:
- line-height: 1.5 (expert) ... 1.8 (general)
- font-size: 15px (expert) ... 18px (general)

Axis 2 — Visual Complexity:
- 3-4 components/viewport (expert) ... 2 (general)
- Compound grids (expert) ... Simple stacks (general)

Axis 4 — Navigation:
- Optional TOC (expert) ... Mandatory TOC + map (general)
- Expert scrolls linearly ... Reader needs wayfinding

Axis 5 — Entry Velocity:
- Minimal header (expert) ... Expansive header (general)
- 30-50% less header height (expert) ... Full orientation (general)

### Step 2.6: Select container width

Choose based on content density. Both are within identity constraints.

Container must be 940-960px (soul constraint). 1100px is available for some layouts but the 940-960 range is the default.

### Step 2.7: Select hover behavior patterns

Choose how interactive elements respond.

### Step 2.8: Select transition type vocabulary

Choose how zones transition into each other. You need at least 3 distinct transition types (not 1 uniform divider).

**Reference: Three transition weights**
- Light transition: 1px border + 48px gap = legato
- Medium transition: 3px border + 80px gap = breathing rest
- Heavy transition: colored bg + text = full stop

CD-006 uses 3 distinct transition types. Gas Town uses 1 (uniform dividers) = TEMPORAL MONOTONY.

### Step 2.9: Assess — are your selections coherent?

Before building, review all selections together. Do they serve a single governing logic? Can you state that logic in one sentence?

If your selections feel like isolated decisions rather than aspects of one idea, revisit the structural metaphor (Step 2.3) and let it unify them.

**Creative check:** Before proceeding to Phase 3, pause. Are you EXCITED about building this page? Can you see the finished product in your mind? If the selections feel like compliance rather than creation, revisit the structural metaphor (Step 2.3). The metaphor should make you want to build, not just make you able to build.

### Disposition Forward-Reference (Read Now, Deploy in Phase 4)

These 7 dispositions shape your building. Internalize them NOW — they guide the choices you make in Phase 3 and the assessment you perform in Phase 4:

| ID | One-Sentence Purpose | Affects Phase 3 Decisions | APPLIED Mode |
|----|---------------------|--------------------------|--------------|
| D-01 | CSS should respond to each section's character (NARRATIVE/REFERENCE/CODE) | Zone typography, density, layout type | Apply as written |
| D-02 | Zone transitions should feel like entering a different room | Background deltas, boundary channel shifts | SUBTLE (15-25 RGB) |
| D-03 | Build as if you will sign this page — express certainty | Restraint in mechanism selection, border hierarchy | Apply as written |
| D-04 | Create a second-half surprise moment that breaks the pattern | 1-2 scale/color/layout ruptures, placed in scroll bottom 50% | **SKIP** |
| D-05 | The scroll should feel like a journey with pacing | Section heights, visual density variation | Apply as written |
| D-06 | Whitespace is deliberate shape, not default | Vary padding between zones, compress/breathe intentionally | Apply as written |
| D-09 | Designate one mid-page zone as deliberately plainer | Choose quiet zone during Phase 2 zone selection | Optional |

**Full deployment instructions are in Phase 4.** This table ensures you CONSIDER these purposes while making creative decisions, even if you deploy them later.

---

## PHASE 3: DEPLOY YOUR SCAFFOLDING

Build the page zone by zone, deploying your selected vocabulary.

**Layout variety requirement (from Gas Town retrospective):** At least 2 distinct layout patterns across the page. Single-column stack must not exceed 60% of zones. Use grids, multi-column layouts, or side-by-side patterns for REFERENCE and CODE zones. Gas Town scored 19/25 on spatial composition because it used single-column for all but one zone.

**Component adoption requirement:** Check `components.css` for matching classes BEFORE writing custom CSS. Adopt and extend existing classes, never reinvent. Gas Town builder reinvented ~200 lines of CSS that already existed in the component library. Aim for 8+ component library classes used.

**HTML background (prevents post-footer void):** Set `html { background: var(--color-text); }` or match the footer zone background. No trailing white space should be visible below the last content zone.

### Step 3.1: Deploy the 6-channel framework

Your page has 6 channels that shift across zone boundaries. Use the value tables from the brief to deploy these.

The 4 CSS-fixable dimensions from the 10-dimension gap analysis:
1. Scale Hierarchy (3.0/5 current)
2. Channel Shifts (3.0/5 current)
3. Emotional Arc (3.5/5 current)
4. Spatial Confidence (3.5/5 current)

CSS-only improvements target these 4. The remaining 6 require prompt enrichment or architecture changes.

### Step 3.2: Deploy zone heights (scroll rhythm dimension A)

Plan section heights to create a deliberate scroll rhythm. This is the "measure length" of your page's music.

**Reference section heights from exemplars:**

Gas Town (crescendo pattern: SHORT -> LONG -> LONGEST -> MODERATE):
- Z1: ~600px
- Z2: ~1800px
- Z3: ~2400px
- Z4: ~1200px

CD-006 (regular 4/4 time: uniform sections):
- S1: ~900px
- S2: ~1000px
- S3: ~1000px
- S4: ~1100px
- S5: ~1000px
- S6: ~900px
- S7: ~900px
- S8: ~700px

Choose your pattern based on content: crescendo, 4/4 time, or another rhythmic structure.

### Step 3.3: Deploy visual density arc (scroll rhythm dimension B)

Plan how density varies across zones. This is the "dynamics" — loud and quiet.

**Reference density patterns:**

Gas Town (CRESCENDO + RELEASE):
- Z1: SPARSE
- Z2: MODERATE
- Z3: DENSE
- Z4: MODERATE

CD-006 (PLATEAU + TAPER):
- S1: MEDIUM
- S2: HIGH
- S3: HIGH
- S4: V.HIGH
- S5: HIGH
- S6: MEDIUM
- S7: MEDIUM
- S8: LOW

### Step 3.4: Deploy the page — Build Order

Build zone by zone following the density arc (OPENING -> DEEPENING -> RESOLVING):

**Cycle 0 output target:** Complete HTML/CSS with skeleton strong and metaphor established.

**Single-pass output target:** Complete HTML page with 800-1200 CSS lines.

The page should use the metaphor + zone strategy to create page uniqueness while drawing on shared tokens/components for family DNA.

Cross-page coherence emerges naturally from tokens.css + soul + components.css. No additional cross-page spec is needed.

**Border width rule:** All border widths use INTEGER pixels. Non-integer borders render inconsistently across browsers and zoom levels.
- WRONG: `border-width: 0.5px`, `border: 2.5px solid`, `border-left: 0.67px`
- RIGHT: `border-width: 1px`, `border: 2px solid`, `border-left: 4px`
- Permitted values: 1px, 2px, 3px, 4px. No other border widths.

### Step 3.4b: Adapt components to zone character (fractal coherence)

Components should not look identical across all zones. Adapt shared components to each zone's density and character, creating fractal coherence — the same design language expressed at different scales.

**READ:** Review your Step 2.4 callout variant selections and the zone density arc from Step 3.3.

**SELECT:** For each component type (callouts, cards, tables, code blocks), choose 4 properties to modulate per zone:

| Property | Sparse Zone (Z1) | Dense Zone (Z3) | Reference (CD-006) |
|----------|-------------------|------------------|---------------------|
| Padding | 20px 24px (generous) | 12px 16px (compressed) | Z1: 20px 24px, Z3: 12px 16px |
| Border-weight | 3px (moderate) | 5px (heavier — compression emphasizes) | Z1: 3px, Z3: 5px |
| Background tint | Lighter (closer to zone bg) | Slightly deeper (contrast with dense content) | Per zone background + 8-12 RGB offset |
| Label sizing | 13px (readable) | 11px (tight) | Z1: 13px, Z3: 11px |

**DEPLOY:** Write zone-specific component overrides in CSS:
```css
/* Zone 1 — sparse, generous */
.zone-opening .callout { padding: 20px 24px; border-left-width: 3px; }
/* Zone 3 — dense, compressed */
.zone-dense .callout { padding: 12px 16px; border-left-width: 5px; }
```

**ASSESS:** Do components feel like they BELONG to their zone, or do they look pasted in from a generic library? If the same callout looks identical in Zone 1 and Zone 3, the adaptation is insufficient.

> Source: OM-09 (component zone-modulation) + OM-10 (fractal coherence)

### Step 3.4c: Deploy builder signal declarations

After building the page, add HTML comment declarations that communicate page characteristics to downstream validation agents. These declarations help the screenshot validation system distinguish your intentional design choices from rendering bugs.

**DEPLOY:** If your page uses scroll-triggered animations or reveal-on-scroll effects that hide content until the reader scrolls to it, add this HTML comment inside `<body>`:
```html
<!-- SCROLL-REVEALS: true -->
```

If your page does NOT use scroll-triggered reveals, no declaration is needed — absence of the comment signals that all content should be visible without scrolling interaction.

> Source: MUST-12 (ADV-1C-3). This declaration allows screenshot validation to distinguish intentional hidden content from broken screenshots caused by device-pixel-ratio bugs.

### Step 3.4d: Narrate your design decisions (INTENT comments)

As you build, embed `<!-- INTENT ... -->` HTML comments that explain WHY you made key CSS decisions. These comments are invisible in the rendered page but are read by the brief-diff gate to distinguish deliberate creative choices from accidental omissions.

**Format:**
```html
<!-- INTENT [D-XX] selector-or-location | what you decided and why | which brief item motivated it OR "CREATIVE" | what you traded off OR "—" -->
```

**Required INTENT comments (17-22 total):**
1. **Governing metaphor** (1): How you derived the metaphor from content
2. **Zone boundaries** (1 per boundary): Which channels shift and why this weight
3. **Each D-01 through D-09** (1 per disposition): How you embodied each disposition in CSS
4. **Creative divergences** (2-5): Where you used 80% authority to override or reinterpret the brief
5. **Deliberate omissions** (1-3): Brief items you consciously chose NOT to implement

**Place each INTENT comment adjacent to the CSS or HTML it describes.** Do not cluster them at the top of the file.

**For deliberate omissions, cluster at the END of `<style>`:**
```html
<!-- INTENT [NOT-IMPL] what | brief reference | why you chose against it | under what conditions you would reconsider -->
```

**Self-test:** Before finishing, count your INTENT comments. If you have fewer than 15, you have under-narrated (major decisions are unrecorded). If you have more than 25, you have over-narrated (narration is consuming creative attention).

**IMPROVE narration:** If this is an IMPROVE pass, read the existing INTENT comments before making changes. When you modify a decision, UPDATE the INTENT comment (do not delete the original — append your reasoning):
```html
<!-- INTENT [D-02] Z3 body text | [CYCLE-0] rgba(254,249,245,0.9) for atmospheric depth | [IMPROVE] changed to #FEF9F5 full opacity — PA auditor flagged dark-zone fatigue, legibility > atmosphere -->
```

### Step 3.5: Assess scaffolding

After deploying the scaffolding, take a screenshot and assess:
- Do the zone backgrounds create distinct rooms? (>= 15 RGB delta minimum, but USE THE FULL RANGE)
- Do transitions vary? (at least 3 types)
- Does the scroll rhythm have shape? (not uniform)
- Does the type scale respond to content density?

---

## PHASE 4: DEPLOY DISPOSITIONAL INSTRUCTIONS (D-01 through D-09)

> **NOTE:** You previewed these dispositions in the Phase 2 forward-reference table.
> Now APPLY them deliberately. For each disposition below, assess whether your
> Phase 3 building already embodies it (often it will if you internalized the table)
> or whether you need to adjust your work.

> **EVIDENCE STATUS: EXPERIMENTAL** (council verdict Part 5, item 9)
> These 9 instructions are DESIGN INTENTIONS that create conditions for quality. They do not guarantee outcomes. Per council verdict: "D-04 creates conditions for surprise (not guaranteed)."
> Include in smoke test. Evaluate via experiment #20.

The purpose of these instructions is to shift your building mode from APPLIED (each mechanism solves a local problem) to COMPOSED (each mechanism serves a governing logic).

> **APPLIED MODE:** Skip D-04 (Second-Half Moment) entirely — consistency IS the value for reference/catalog content. For D-02 (Room Perception), use SUBTLE zone differentiation (15-25 RGB) rather than dramatic (25-50 RGB). For D-09 (Quiet Zone), this is optional — uniform density across zones is acceptable for APPLIED mode. Apply D-01 (Content-Register Reading), D-03 (Signing Frame), D-05 (Reader's Scroll), and D-06 (Negative Space) as written — these serve all modes.

**Typographic spectacle requirement (from Gas Town retrospective):** At least 1 typographic moment that exceeds normal hierarchy — examples: 28-32px pull quote, 36-48px display numerals, small-caps accent section, oversized drop cap. Zone-inflect H2s: at least 1 differentiating property (size, weight, decoration, color) between H2 treatments in different zones. Gas Town had identical H2s across 5 zones — this was the typography gap preventing DESIGNED.

**Builder disposition toward quality:** Optimize for quality, not gate compliance. Enter COMPOSING mode (not COMPLYING/PLANNING/REPAIRING).

### D-01: Content-Register Reading [EXPERIMENTAL]

**PURPOSE:** Read the content's register before choosing mechanisms. Each section has a character (NARRATIVE / REFERENCE / CODE). Your CSS should respond to what the content IS.

**VOCABULARY:** Match section character to density, typography, and layout:
- NARRATIVE sections: generous line-height, wider measure, breathing room
- REFERENCE sections: tighter spacing, possible multi-column, navigation aids
- CODE sections: monospace, fixed width, syntax highlighting from token vocabulary

This is the content-form coupling mechanism: SPECIFIED via TC brief routing + D-01.

### D-02: Room Perception at Boundaries [EXPERIMENTAL]

**PURPOSE:** Each zone transition should feel like entering a different room. The visitor's eye needs to register that something has changed.

**VOCABULARY:** Combine multiple channels at boundaries:
- Background color shift (>= 15 RGB minimum, use 25-50 for compositional effect)
- Typography shift (font-size, weight, or letter-spacing)
- Spacing shift (padding, margin)
- Border weight shift (4px -> 3px -> 1px hierarchy)

This replaces the old threshold rule ("Use >= 15 RGB delta") with a perceptual instruction.

### D-03: The Signing Frame [EXPERIMENTAL]

**PURPOSE:** Build as if you will sign this page. Every element should express certainty — the page knows what it is.

**VOCABULARY (Authority techniques):**
- Consistent border-weight hierarchy (4px ALWAYS = primary)
- Restraint: knowing what NOT to use
- Dense, purposeful header (dark bg, tight spacing)
- Zero decorative elements

**DESIGN INTENTION:** D-03 creates conditions for AUTHORITY in the emotional arc. Authority should be HIGH throughout (soul ensures the baseline).

Gas Town scored 7/10 authority — lost for uniform component styling.

### D-04: The Second-Half Moment [EXPERIMENTAL]

**PURPOSE:** Somewhere in the second half of the page, create a moment that breaks the established pattern — a surprise that rewards the reader who has scrolled this far.

**VOCABULARY (Surprise techniques):**
- Scale break: headline 2.5x body size
- Color inversion: dark zone mid-page
- Layout rupture: grid after 4+ single-column viewports
- Structural inversion: border-RIGHT in a border-LEFT page

**DESIGN INTENTION:** D-04 creates conditions for SURPRISE. Requires COMPOSING mode. 1-2 moments only, in the SECOND HALF.

Gas Town: ZERO surprise moments. Consistency as default = flatline.

D-04 + D-06 together create conditions for surprise.

> **APPLIED MODE:** SKIP D-04. Reference and catalog content should be predictable. A "surprise" in a documentation page is a failure of user expectations, not a design achievement. Your quality comes from CONSISTENCY and CLARITY, not compositional drama.

### D-05: The Reader's Scroll [EXPERIMENTAL]

**PURPOSE:** After building, scroll through your page as a reader would. The scroll should feel like a journey with pacing — not a uniform wall.

**VOCABULARY:** The three dimensions of scroll rhythm:
- A. Section height = "measure length" (vary section heights to create rhythm)
- B. Visual density = "dynamics" (loud zones / quiet zones)
- C. Transition weight = "articulation" (staccato vs legato between zones)

**DESIGN INTENTION:** D-05 creates conditions for CLOSURE — the ending should feel earned by the journey.

Scroll rhythm EMERGES from height x density x transitions. The pipeline creates CONDITIONS, not specifications.

Closure should appear only in final 2-3 viewports. Must be EARNED.

Gas Town: 5/10 closure. Z4 too similar to Z2, no final moment.

### D-06: Negative Space as Shape [EXPERIMENTAL] [NEW]

**PURPOSE:** Whitespace is not emptiness — it is a deliberate shape. Each gap should have a reason. Uniform gaps = visual monotony.

**VOCABULARY:**
- Vary padding between zones (not uniform 48px everywhere)
- Let dense sections compress and sparse sections breathe
- The gap between zones is a design element, not a default

**DESIGN INTENTION:** D-06 prevents uniform gaps. Combined with D-04, creates conditions for surprise by making silence (space) as intentional as sound (content).

**Calibration:** Stacked gap must stay <= 120px total. But within that, VARY the gaps. 80-120px gap before footer for breathing space.

> **D-07 (Edge Intentionality) and D-08 (Skeleton Test) are handled in PASS B.** Do not attempt these during Pass A. Pass B adds behavioral CSS (hover states, ::selection, print styles, micro-refinements) and performs the full skeleton test assessment after composition is complete.

### D-09: The Quiet Zone [EXPERIMENTAL] [NEW]

**PURPOSE:** Designate at least ONE zone in the middle third of the page as deliberately plainer than its neighbors. This zone is a breathing pause in the density arc — the visual equivalent of a rest in music.

**VOCABULARY:**
- Fewer mechanisms than surrounding zones: 2-3 mechanisms (vs 4-5 in adjacent zones)
- No bento grid or multi-column layout — single-column prose only
- Wider line-height, more generous margins — let the content speak without ornament
- Simpler component usage — plain text blocks, minimal callouts

**PRESERVE (family membership):**
- Zone background from the value table (the quiet zone is still a ROOM, not a void)
- Typography from the type scale (same font family, proportional sizing)
- Border-weight hierarchy (if borders appear, they follow 4px/3px/1px)
- The zone must still feel like it belongs to the same page

**DESIGN INTENTION:** D-09 creates conditions for CONTRAST. A quiet zone makes its neighbors feel richer. Without rest, sustained density becomes noise. The quiet zone is deliberate restraint, not absence.

**Anti-pattern: empty zone with uniform cream.** The quiet zone must still have CONTENT and STRUCTURE — it is plainer, not blank. A zone with a single cream background, no borders, no typography variation, and no visible content structure is a whitespace void, not a quiet zone. The difference: a quiet zone has fewer mechanisms deployed WITH INTENTION; a void has no mechanisms deployed AT ALL.

### Assess Disposition Deployment (Pass A)

After applying D-01 through D-06 and D-09, the page's compositional arc should have shape:

**The 4 emotional registers (Pass A establishes 3 of 4; Pass B adds the 4th):**

1. **AUTHORITY** (constant) — should be HIGH throughout (D-03 creates conditions)
2. **SURPRISE** (rare peak) — 1-2 moments only, in SECOND HALF (D-04 creates conditions)
3. **DELIGHT** (steady) — Pass B adds via D-07 (hover states, micro-refinements). Pass A focuses on composition.
4. **EARNED CLOSURE** — only in final 2-3 viewports, must be EARNED (D-05 creates conditions)

**Closure techniques:**
- Footer echoes header (bookending)
- Density arc resolves (Z4 releases what Z3 compressed)
- Final drop cap or typographic moment
- Breathing space before footer (80-120px gap)

**Emotional arc is EMERGENT, not SPECIFIED.** It cannot be gate-checked. The PA auditor will assess it after build. The disposition-emotion links are DESIGN INTENTIONS, not guaranteed causal links.

Per council verdict: "D-04 creates conditions for surprise (not guaranteed)" — all D-emotion links are design intentions.

---

## PHASE 5: SELF-EVALUATE (Pass A — Partial)

> **Pass A performs a PARTIAL self-evaluation.** Steps 5.0 (experiential reader pass), 5.1 (text legibility), 5.2 (visual component clarity), and 5.4 (skeleton test / D-08) are deferred to Pass B, which performs the FULL self-evaluation after adding polish.

### Step 5.3: Screenshot and assess vs conviction

Take a Playwright screenshot and compare against your conviction statement ("This page is about X. Metaphor Y. Arc Z.").

> This is the builder self-evaluation loop. You SEE your own output (Tier 4 info via EXPERIENCE).

### Step 5.5: Apply the Reader's Scroll (D-05)

Scroll through as a reader. Does the journey have pacing?

### Step 5.6: Check mode indicators

Is the page in COMPOSED mode or APPLIED mode? Check:
- Mode determinant 1: Are custom property names concept-based or position-based?
- Mode determinant 2: Do components modulate per zone or stay identical?
- Mode determinant 3: Are layout choices driven by metaphor or by content-type alone?
- Mode determinant 5: Can you articulate the governing logic in one sentence?

> **APPLIED MODE expected indicators:** Position-based custom property names, uniform component styling, no governing metaphor (articulate "well-organized reference" instead), layout driven by content-type not concept. These are CORRECT outcomes for APPLIED mode, not defects.

### Step 5.7: Assess Pass A output targets

Your output should be:
- Complete HTML page with compositional skeleton
- 800-1200 CSS lines
- Responsive (1440px + 768px)
- With surprise moments (D-04) and quiet zone (D-09)
- Conviction statement: `<!-- CONVICTION: ... -->` (3 sentences)
- RESIDUAL artifact: `<!-- RESIDUAL: ... -->` documenting what was preserved, changed, and what comes next

> **Note:** Accessibility and designed moments (D-07 hover states) are added by Pass B. Do not spend time on those here.

### Step 5.8: Surface your unfinished thinking (MANDATORY)

You made compromises during this build. Every builder does — time, token budget, competing priorities, uncertainty about what would work. List 5-10 specific things you would improve if you had another pass. Be concrete: name the zone, the CSS property, the mechanism, the disposition.

For each idea:
1. Tag with the relevant disposition (D-01 through D-09) or category (STRUCTURAL / MECHANICAL / ACCESSIBILITY / COMPOSITIONAL)
2. Describe what you would change in one sentence
3. Rate your confidence: HIGH (I know this would help) / MEDIUM (I think this would help) / LOW (worth exploring)

Place as an HTML comment AFTER your self-evaluation block:

```html
<!-- IMPROVEMENTS:
[D-XX] Zone/Element — specific change description | CONFIDENCE
[CATEGORY] Zone/Element — specific change description | CONFIDENCE
(minimum 5 items, at least 1 HIGH, at least 2 different tags)
-->
```

This is not a confession of failure. This is professional craft: the gap between "what I built" and "what I see it could become." CONVICTION captures what went right. IMPROVEMENTS captures what comes next. A different Opus builder will read these ideas during the IMPROVE pass and use them as a starting point for deepening your work.

There is no penalty for having ideas. Zero ideas triggers single-pass RELEASE evaluation; four or more ideas confirms the standard IMPROVE path.

---

## PHASE 6: TEMPORAL COMPOSITION

> **Note:** This phase is verified during Phase 5 self-evaluation (Steps 5.5-5.7). The content below is reference — the builder verifies these aspects in Phase 5 rather than executing Phase 6 as a separate step.

This phase addresses how static CSS creates a time-based experience. Every reader experiences the page temporally — they scroll.

### Step 6.1: Deploy the density arc

The density arc has three movements: OPENING -> DEEPENING -> RESOLVING.

Phase 0 (Content Analyst) maps the section-by-section density arc. Phase 1 (Brief Assembler) includes the density arc description in the brief. D-05 activates temporal awareness.

### Step 6.2: Deploy multi-coherence

The multi-coherence framework: 6 channels, 4 directions, boundary-by-boundary.

Intentional Composition: ACTIVATED + EMERGENT via multi-coherence.

### Step 6.3: Deploy structural metaphor

Derive from content, embody in CSS. The metaphor should be STRUCTURAL (expressed through the CSS itself), not ANNOUNCED (only present in labels/comments).

### Step 6.4: Deploy content-form coupling

Per-section decisions linking content character to CSS treatment.

### Step 6.5: Deploy creative authority + components

80% creative authority / 20% constraint. Use the component library from components.css.

### Step 6.6: Deploy CSS value tables

The CSS value tables provide specific ranges for each channel per zone. Use them as vocabulary, not as a checklist to satisfy.

---

## APPENDIX A: COUNCIL VERDICT AMENDMENTS

The following amendments from the council verdict affect this document:

1. **"Activation" framing RETIRED.** Replaced with PURPOSE + VOCABULARY. The disposition provides compositional intent; the value table provides CSS vocabulary. The builder integrates both. [Council verdict, Contradiction A]

2. **Dispositional instructions D-01-D-08 are EXPERIMENTAL.** Include in smoke test, evaluate via experiment #20. [Council verdict, Part 5, item 9]

3. **Emotional arc dependencies are DESIGN INTENTIONS, not guaranteed causal links.** "D-04 creates conditions for surprise (not guaranteed)" rather than "D-04 creates SURPRISE." [Council verdict, Contradiction C]

4. **80% creative authority = retained as builder framing.** Cross-page consistency is an OPEN QUESTION (untested). [Council verdict, Contradiction D]

5. **Value tables are "structured reference material"** (not "positive scaffolding" or "activation"). The creative authority is in HOW the builder combines these values to serve the page's governing logic. [Council verdict, Contradiction A resolution]

6. **Two-pass = DEFAULT (v5).** Pass A (Compose: D-01..D-06, D-09) + Pass B (Enrich: D-07, D-08, accessibility, self-eval). Replaces single-pass default from council verdict Contradiction B. 3-pass items remain EXPERIMENTAL/BLOCKED-UNTIL-EXPERIMENT-21.

7. **Perception thresholds delivered as CALIBRATION** (not pass/fail): "Backgrounds must differ by at least 15 RGB points to be perceptible" rather than "FAIL if adjacent zone background delta < 15 RGB." [Council verdict, Pattern 1 resolution]

8. **CCS is a RESEARCH CONSTRUCT, not an operational metric.** Do not operationalize until methodology standardized. [Council verdict, Pattern 5 resolution]

9. **Compositional Critic = EXPERIMENTAL/UNVALIDATED.** All dependent items (3-pass, conviction artifacts) tagged EXPERIMENTAL. [Council verdict, CF-02]

10. **Opus builder = REQUIRED (non-negotiable).** Enforced as strictly as container width 940-960px. Sonnet permitted ONLY for declared [SONNET-TEST] runs. [Upgraded from council verdict Pattern 3 sub-ruling based on accumulated evidence]

---

## APPENDIX B: COMPLETE ITEM CROSS-REFERENCE

> **Note:** All inline ITEM citations have been moved from the recipe body to this appendix. The recipe text (Phases 1-6) contains operational CSS guidance only. This appendix preserves full provenance for every item: source file, extraction line reference, and short description. Use this for audit trail verification, not during building.

### Layer 3: SCAFFOLDING Items (75 items)

| # | Item ID | Source | VA Line | Text (80 chars) |
|---|---------|--------|---------|------------------|
| 1 | ITEM 52 | extract-d01-d03.md | L107 | tokens.css (direct Tier 1 vocabulary) -- builder input #3 |
| 2 | ITEM 53 | extract-d01-d03.md | L108 | components.css (pre-built component library) -- builder input #4 |
| 3 | ITEM 68 | extract-d01-d03.md | L152 | Output: Complete HTML page (800-1200 CSS lines) |
| 4 | ITEM 3 | extract-d04-d05.md | L372-374 | RESEARCH ARCHIVE (337 findings) ~45,000 lines |
| 5 | ITEM 4 | extract-d04-d05.md | L372-374 | DESIGN SYSTEM (6-layer) ~3,500 lines |
| 6 | ITEM 18 | extract-d04-d05.md | L413 | tokens.css 183 lines |
| 7 | ITEM 19 | extract-d04-d05.md | L413 | components.css 290 lines |
| 8 | ITEM 20 | extract-d04-d05.md | L415-416 | tokens.css and components.css as DIRECT FILE routes |
| 9 | ITEM 7 | extract-d06-d08.md | L495-496 | Cycle 0 output: Complete HTML/CSS -- skeleton strong, metaphor estab |
| 10 | ITEM 23 | extract-d06-d08.md | L525-526 | Cycle 1 output: Enriched page -- mechanisms coupled, density arc emb |
| 11 | ITEM 29 | extract-d06-d08.md | L542-543 | Pass 3 output: Finished page -- responsive, accessible, designed moments |
| 12 | ITEM 56 | extract-d06-d08.md | L599-600 | Scale-Channel Independence: 6-channel framework + value tables |
| 13 | ITEM 57 | extract-d06-d08.md | L600 | 6-channel framework + value tables |
| 14 | ITEM 66 | extract-d06-d08.md | L617-619 | Cross-Page Coherence: soul + shared tokens.css + components.css |
| 15 | ITEM 67 | extract-d06-d08.md | L618 | shared tokens.css + components.css |
| 16 | ITEM 86 | extract-d06-d08.md | L681-685 | CSS-only fix tier: Channel Shifts, Emotional Arc, Spatial Confidence |
| 17 | ITEM 88 | extract-d06-d08.md | L687-689 | Prompt enrichment tier: Typographic Craft, Material Auth, Detail Den |
| 18 | ITEM 90 | extract-d06-d08.md | L691-694 | Architecture change tier: Pervading Metaphor, Multi-coherence, etc |
| 19 | ITEM 101 | extract-d06-d08.md | L667-677 | 4 dims fixable by CSS: Scale Hierarchy, Channel Shifts, Emo Arc, Spatial |
| 20 | ITEM 78 | extract-d09-d11.md | L884 | Output: complete HTML (800-1200 CSS) |
| 21 | ITEM 7 | extract-d12-d14.md | L980 | Hex colors (#E83025) survive compression |
| 22 | ITEM 8 | extract-d12-d14.md | L981 | Pixel measurements (64px) survive compression |
| 23 | ITEM 9 | extract-d12-d14.md | L982 | Border weights (4px/3px/1px) survive compression |
| 24 | ITEM 10 | extract-d12-d14.md | L983 | Font sizes (1rem, 0.875rem) survive compression |
| 25 | ITEM 11 | extract-d12-d14.md | L984 | Spacing scale (4-96px) survive compression |
| 26 | ITEM 12 | extract-d12-d14.md | L985 | Token names (--color-primary) survive compression |
| 27 | ITEM 34 | extract-d12-d14.md | L1028 | Gas Town Z1: ~600px height |
| 28 | ITEM 35 | extract-d12-d14.md | L1029 | Gas Town Z2: ~1800px height |
| 29 | ITEM 36 | extract-d12-d14.md | L1030 | Gas Town Z3: ~2400px height |
| 30 | ITEM 37 | extract-d12-d14.md | L1031 | Gas Town Z4: ~1200px height |
| 31 | ITEM 38 | extract-d12-d14.md | L1028 | CD-006 S1: ~900px height |
| 32 | ITEM 39 | extract-d12-d14.md | L1029 | CD-006 S2: ~1000px height |
| 33 | ITEM 40 | extract-d12-d14.md | L1030 | CD-006 S3: ~1000px height |
| 34 | ITEM 41 | extract-d12-d14.md | L1031 | CD-006 S4: ~1100px height |
| 35 | ITEM 42 | extract-d12-d14.md | L1032 | CD-006 S5: ~1000px height |
| 36 | ITEM 43 | extract-d12-d14.md | L1034 | CD-006 S6: ~900px height |
| 37 | ITEM 44 | extract-d12-d14.md | L1034 | CD-006 S7: ~900px height |
| 38 | ITEM 45 | extract-d12-d14.md | L1035 | CD-006 S8: ~700px height |
| 39 | ITEM 64 | extract-d12-d14.md | L1053 | Light transition: 1px + 48px gap = legato |
| 40 | ITEM 65 | extract-d12-d14.md | L1054 | Medium transition: 3px + 80px gap = breathing rest |
| 41 | ITEM 66 | extract-d12-d14.md | L1055 | Heavy transition: colored bg + text = full stop |
| 42 | ITEM 82 | extract-d12-d14.md | L1088-1091 | Axis 1: Info Density (line-height, font-size, max-width) |
| 43 | ITEM 83 | extract-d12-d14.md | L1089 | line-height: 1.5 Expert ... 1.8 General |
| 44 | ITEM 84 | extract-d12-d14.md | L1090 | font-size: 15px Expert ... 18px General |
| 45 | ITEM 86 | extract-d12-d14.md | L1094 | 3-4 components/viewport Expert ... 2 General |
| 46 | ITEM 87 | extract-d12-d14.md | L1095 | Compound grids Expert ... Simple stacks General |
| 47 | ITEM 92 | extract-d12-d14.md | L1102 | Optional TOC Expert ... Mandatory TOC + map General |
| 48 | ITEM 93 | extract-d12-d14.md | L1103 | Expert scrolls linearly ... Reader needs wayfinding |
| 49 | ITEM 95 | extract-d12-d14.md | L1106 | Minimal header Expert ... Expansive header General |
| 50 | ITEM 96 | extract-d12-d14.md | L1107 | 30-50% less header height Expert ... Full orientation General |
| 51 | ITEM 074 | extract-d15-d17.md | L1306 | WHAT VARIES (per-page creative decisions) |
| 52 | ITEM 075 | extract-d15-d17.md | L1306 | Zone background strategy + colors (varies per page) |
| 53 | ITEM 076 | extract-d15-d17.md | L1307 | Type scale values + naming (varies per page) |
| 54 | ITEM 077 | extract-d15-d17.md | L1308 | Structural metaphor vocabulary (varies per page) |
| 55 | ITEM 078 | extract-d15-d17.md | L1309 | Callout variant semantics (varies per page) |
| 56 | ITEM 079 | extract-d15-d17.md | L1310 | Component selection + layout (varies per page) |
| 57 | ITEM 080 | extract-d15-d17.md | L1311 | Container width (960px vs 1100px) (varies per page) |
| 58 | ITEM 081 | extract-d15-d17.md | L1312 | Hover behavior patterns (varies per page) |
| 59 | ITEM 082 | extract-d15-d17.md | L1313 | Transition type vocabulary (varies per page) |
| 60 | ITEM 085 | extract-d15-d17.md | L1322 | Builder reads tokens.css (183 lines) -> shared vocabulary |
| 61 | ITEM 086 | extract-d15-d17.md | L1322 | tokens.css (183 lines) |
| 62 | ITEM 087 | extract-d15-d17.md | L1323 | Builder reads components.css (290 lines) -> shared DNA |
| 63 | ITEM 088 | extract-d15-d17.md | L1323 | components.css (290 lines) |
| 64 | ITEM 089 | extract-d15-d17.md | L1324 | 73-line template embeds soul -> shared identity |
| 65 | ITEM 090 | extract-d15-d17.md | L1324 | 73-line template (exact size) |
| 66 | ITEM 091 | extract-d15-d17.md | L1325 | Per-page metaphor + zone strategy -> page uniqueness |
| 67 | ITEM 58 | extract-d18-d20.md | L1507-1509 | APPLIED: --bg-z1, --bg-z2 named by POSITION |
| 68 | ITEM 59 | extract-d18-d20.md | L1507-1509 | COMPOSED: --dispatch-open, --dispatch-tactical named by CONCEPT |

**Additional SCAFFOLDING items from secondary classification:**
| 69 | ITEM 64 | extract-d18-d20.md | L1520-1521 | APPLIED: Callouts styled identically across all zones |
| 70 | ITEM 65 | extract-d18-d20.md | L1523-1526 | COMPOSED: Callouts adapt to zone context (padding/border varies) |

**Council-reclassified from GATES (council verdict Pattern 1, items #5-#6):**
| 71 | ITEM 57 | extract-d18-d20.md | L1502 | THE SMOKING GUN — CSS Custom Properties naming |
| 72 | ITEM 61 | extract-d18-d20.md | L1512 | Named by CONCEPT = Composed mode indicator |

**Council-reclassified from GATES (council verdict Pattern 1, items #7-#9):**
| 73 | ITEM 66 | extract-d18-d20.md | L1524 | zone-1 callout padding: 20px 24px (generous) |
| 74 | ITEM 67 | extract-d18-d20.md | L1525 | zone-3 callout padding: 12px 16px (compressed) |
| 75 | ITEM 68 | extract-d18-d20.md | L1526 | zone-3 callout border-left-width: 5px (heavier) |

### Layer 4: DISPOSITION Items (78 items)

| # | Item ID | Source | VA Line | Text (80 chars) |
|---|---------|--------|---------|------------------|
| 1 | ITEM 38 | extract-d01-d03.md | L79 | Tier 4: DISPOSITION (8 instructions, ~40 lines) |
| 2 | ITEM 39 | extract-d01-d03.md | L80 | D-01: Content-Register Reading |
| 3 | ITEM 40 | extract-d01-d03.md | L81 | D-02: Room Perception at Boundaries |
| 4 | ITEM 41 | extract-d01-d03.md | L82 | D-03: The Signing Frame |
| 5 | ITEM 42 | extract-d01-d03.md | L83 | D-04: The Second-Half Moment |
| 6 | ITEM 43 | extract-d01-d03.md | L84 | D-05: The Reader's Scroll |
| 7 | ITEM 44 | extract-d01-d03.md | L85 | D-06: Negative Space as Shape (NEW) |
| 8 | ITEM 45 | extract-d01-d03.md | L86 | D-07: Edge Intentionality (NEW) |
| 9 | ITEM 46 | extract-d01-d03.md | L87 | D-08: The Skeleton Test (NEW) |
| 10 | ITEM 90 | extract-d01-d03.md | L237 | Recipe + disposition format (new pipeline) |
| 11 | ITEM 92 | extract-d01-d03.md | L238 | "This world IS / You ARE" (world-description voice) |
| 12 | ITEM 139 | extract-d01-d03.md | L314 | 8 dispositional instructions (COMPOSING mode factor) |
| 13 | ITEM 140 | extract-d01-d03.md | L315 | Creative authority (80/20) |
| 14 | ITEM 141 | extract-d01-d03.md | L316 | World-description voice |
| 15 | ITEM 38 | extract-d06-d08.md | L575-577 | Builder Cognitive Mode: ACTIVATED via D-01 to D-08 + recipe format |
| 16 | ITEM 39 | extract-d06-d08.md | L575 | Builder Cognitive Mode (11 concepts collapsed) |
| 17 | ITEM 40 | extract-d06-d08.md | L576 | Dispositional recipe D-01 through D-08 (file ref) |
| 18 | ITEM 48 | extract-d06-d08.md | L587-589 | Intentional Composition: ACTIVATED + EMERGENT via multi-coherence |
| 19 | ITEM 49 | extract-d06-d08.md | L591-593 | Peak-Valley Architecture: ACTIVATED via D-04 + density arc |
| 20 | ITEM 50 | extract-d06-d08.md | L591 | D-04 second-half moment + density arc (file ref) |
| 21 | ITEM 59 | extract-d06-d08.md | L604-605 | Temporal Composition: ACTIVATED via density arc recipe + D-06 |
| 22 | ITEM 60 | extract-d06-d08.md | L605 | D-06 neg space (file ref) |
| 23 | ITEM 62 | extract-d06-d08.md | L610-612 | Emotional Arc: EMERGENT via D-04 + D-05 + arc framing |
| 24 | ITEM 63 | extract-d06-d08.md | L612 | builder produces, cannot be specified (emotional arc) |
| 25 | ITEM 95 | extract-d06-d08.md | L700-701 | Pipeline v3 addresses via dispositional recipe + purpose arch |
| 26 | ITEM 96 | extract-d06-d08.md | L700 | dispositional recipe (file ref) |
| 27 | ITEM 24 | extract-d12-d14.md | L1002 | Disposition D-02 replaces threshold with perceptual instruction |
| 28 | ITEM 69 | extract-d12-d14.md | L1063 | Phase 0: Content Analyst maps section-by-section density arc |
| 29 | ITEM 70 | extract-d12-d14.md | L1064 | Phase 1: Brief includes density arc description |
| 30 | ITEM 71 | extract-d12-d14.md | L1065 | Phase 2: D-05 'Reader's Scroll' activates temporal awareness |
| 31 | ITEM 72 | extract-d12-d14.md | L1066 | D-06 'Negative Space as Shape' prevents uniform gaps |
| 32 | ITEM 74 | extract-d12-d14.md | L1069-1070 | KEY RULE: Scroll rhythm EMERGES from height x density x transitions |
| 33 | ITEM 75 | extract-d12-d14.md | L1071 | Pipeline v3 creates CONDITIONS, not specifications |
| 34 | ITEM 79 | extract-d18-d20.md | L1556-1558 | MODE IS SET AT BUILD START by spec format: Checklist->APPLIED, Recipe |
| 35 | ITEM 80 | extract-d18-d20.md | L1557 | Checklist -> APPLIED mode (inevitable) |
| 36 | ITEM 81 | extract-d18-d20.md | L1558 | Recipe + disposition -> COMPOSED mode (possible, not guaranteed) |
| 37 | ITEM 82 | extract-d18-d20.md | L1560-1562 | Pipeline v3 creates conditions via D-01 + D-02 + Recipe + 80% + Opus |
| 38 | ITEM 83 | extract-d18-d20.md | L1561 | D-01 content-register reading (dependency) |
| 39 | ITEM 84 | extract-d18-d20.md | L1561 | D-02 room perception (dependency) |
| 40 | ITEM 85 | extract-d18-d20.md | L1562 | 80% creative authority |
| 41 | ITEM 001 | extract-d21-d25.md | L1572-1574 | EMOTIONAL ARC: 4 emotional registers distinct from density arc |
| 42 | ITEM 002 | extract-d21-d25.md | L1579-1580 | 1. SURPRISE -- moment page does something unexpected |
| 43 | ITEM 003 | extract-d21-d25.md | L1583 | Scale break: headline 2.5x body size (surprise CSS technique) |
| 44 | ITEM 004 | extract-d21-d25.md | L1584 | Color inversion: dark zone mid-page (surprise CSS technique) |
| 45 | ITEM 005 | extract-d21-d25.md | L1585 | Layout rupture: grid after 4+ single-column viewports |
| 46 | ITEM 006 | extract-d21-d25.md | L1586 | Structural inversion: border-RIGHT in a border-LEFT page |
| 47 | ITEM 007 | extract-d21-d25.md | L1588-1590 | GAS TOWN: ZERO surprise moments. Consistency as default = flatline |
| 48 | ITEM 008 | extract-d21-d25.md | L1592-1595 | D-04 + D-06 create conditions for surprise. Requires COMPOSING mode |
| 49 | ITEM 009 | extract-d21-d25.md | L1597-1598 | 2. DELIGHT -- small unexpected refinements that reward attention |
| 50 | ITEM 010 | extract-d21-d25.md | L1601 | Hover states revealing hidden content (table row tint, link border) |
| 51 | ITEM 011 | extract-d21-d25.md | L1602 | Typographic micro-refinement (tabular-nums, text-indent) |
| 52 | ITEM 012 | extract-d21-d25.md | L1603 | Zone-specific ::selection colors |
| 53 | ITEM 013 | extract-d21-d25.md | L1604 | Print-specific styling (@media print) |
| 54 | ITEM 014 | extract-d21-d25.md | L1605 | First/last child edge treatments |
| 55 | ITEM 016 | extract-d21-d25.md | L1611-1612 | 3. AUTHORITY -- page knows what it is, every element expresses certainty |
| 56 | ITEM 017 | extract-d21-d25.md | L1615 | Consistent border-weight hierarchy (4px ALWAYS = primary) |
| 57 | ITEM 018 | extract-d21-d25.md | L1616 | Restraint (knowing what NOT to use) |
| 58 | ITEM 019 | extract-d21-d25.md | L1617 | Dense, purposeful header (dark bg, tight spacing) |
| 59 | ITEM 022 | extract-d21-d25.md | L1624-1625 | 4. EARNED CLOSURE -- ending feels earned by the journey |
| 60 | ITEM 023 | extract-d21-d25.md | L1628 | Footer echoes header (bookending) |
| 61 | ITEM 024 | extract-d21-d25.md | L1629 | Density arc resolves (Z4 releases what Z3 compressed) |
| 62 | ITEM 025 | extract-d21-d25.md | L1630 | Final drop cap or typographic moment |

**Additional DISPOSITION items from secondary classification:**
| 63 | ITEM 026 | extract-d21-d25.md | L1631 | Breathing space before footer (80-120px gap) |
| 64 | ITEM 027 | extract-d21-d25.md | L1633-1635 | GAS TOWN: 5/10 closure. Z4 too similar to Z2, no final moment |
| 65 | ITEM 028 | extract-d21-d25.md | L1641-1642 | Authority (constant): should be HIGH throughout (soul ensures) |
| 66 | ITEM 029 | extract-d21-d25.md | L1644-1645 | Surprise (rare peak): 1-2 moments only, in SECOND HALF (D-04) |
| 67 | ITEM 030 | extract-d21-d25.md | L1647-1648 | Delight (steady): distributed throughout, more in high-density zones |
| 68 | ITEM 031 | extract-d21-d25.md | L1650-1651 | Closure (earned): only in final 2-3 viewports, must be EARNED |
| 69 | ITEM 032 | extract-d21-d25.md | L1656-1657 | Emotional arc is EMERGENT, not SPECIFIED. Cannot be gate-checked |
| 70 | ITEM 033 | extract-d21-d25.md | L1659 | D-03 'Would you sign this?' -> AUTHORITY |
| 71 | ITEM 034 | extract-d21-d25.md | L1660 | D-04 'Second-half moment' -> SURPRISE |
| 72 | ITEM 035 | extract-d21-d25.md | L1661 | D-05 'Scroll as reader' -> CLOSURE |
| 73 | ITEM 036 | extract-d21-d25.md | L1662 | D-07 'Edge intentionality' -> DELIGHT |
| 74 | ITEM 015 | extract-d21-d25.md | L1607-1609 | GAS TOWN DELIGHT SCORE: 2/10. Missing 6 techniques |
| 75 | ITEM 021 | extract-d21-d25.md | L1620-1622 | GAS TOWN: 7/10 authority. Loses for uniform component styling |
| 76 | ITEM 166 | extract-d21-d25.md | L2018 | THEORIZED: Dispositional instructions activate native capability |

**Council-reclassified from GATES (council verdict Pattern 1, items #2-#3):**
| 77 | ITEM 124 | extract-d01-d03.md | L263 | Builder optimizes for quality (new) |
| 78 | ITEM 137 | extract-d01-d03.md | L308 | Builder enters COMPOSING mode (not COMPLYING/PLANNING/REPAIRING) |

---

## APPENDIX C: EVIDENCE STATUS KEY

Per council verdict (CF-04), all items carry evidence classification:

- **FACT**: Binary observation verifiable in the data
- **OBSERVED**: Consistent direction across available data, but variables not isolated
- **CONFOUNDED**: Direction observed but cannot separate from co-varying factors
- **THEORETICAL**: N=0, hypothesis only
- **SPECULATIVE**: Author estimate with no empirical basis

**Items in this document by evidence status:**
- SCAFFOLDING items: Mostly FACT (tokens.css exists, compression behavior observed) and OBSERVED (section heights, density patterns from N=2 exemplars)
- D-01 through D-09: THEORETICAL (N=0 as a set, council verdict flags as EXPERIMENTAL)
- Emotional arc: THEORETICAL (emergent, not yet observed in v3 pipeline)
- Perception thresholds (calibration values): FACT (observed across N=3+ builds)
- Mode determinants: OBSERVED (B8 investigation, N=2 builds analyzed)
- Reader model axis values: THEORETICAL (proposed in B2 investigation, never tested)

---

*End of Builder Recipe. 146 items from Layers 3-4. Inline provenance citations moved to Appendix B for readability; all item IDs and VA line refs preserved there. Conforms to council-verdict.md rulings.*
