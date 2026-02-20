# Scale Analysis: PAGE (~960px — Zone Sequencing Across Full Scroll)

**Agent:** scale-page
**Task:** #22
**Date:** 2026-02-20
**Sources:** conventions-brief.md, mechanism-catalog.md, gate-runner.md

---

## Why Page Scale Is the Most Important Scale

Page scale is where the reader experiences the COMPOSITION. Navigation scale sets the tone. Section scale arranges elements. Component scale structures content. Character scale polishes. But Page scale is where the reader scrolls and feels "this was designed" or "this is flat." It is the scale of the VISUAL ARC — how zones sequence, how backgrounds shift, how density progresses across the full document.

Page scale is also where multi-coherence LIVES. Zone boundaries are page-scale events. The 6-channel shift model is fundamentally a page-scale concept. When the brief says "at every zone boundary, at least 3 of 6 CSS channels shift simultaneously," it is describing page-scale architecture.

---

## 1. THE 6 CHANNELS AT PAGE SCALE

### 1.1 Chromatic (Zone Background Color Sequencing — STRONGEST SIGNAL)

At page scale, chromatic = the sequence of zone background colors across the full scroll. This is the single strongest visual signal the reader receives. When you squint at a page, you see color bands. Those bands ARE the page's chromatic architecture.

**What the brief says:** "Background-color shift (the strongest visual signal)" (Section 4). Zone backgrounds must have >= 15 RGB max-channel delta between adjacent zones (Section 2). 3-5 zones required (Section 9B).

**What this means at page scale:**
- The full scroll is divided into 3-5 color bands
- Each band boundary is perceptibly different (>= 15 RGB delta)
- The sequence of colors creates a visual arc: warm cream (#FEF9F5) → earthy tan (#FAF5ED) → near-white (#FFFFFF) → dark slab (#1A1A1A)
- The DIRECTION of color change encodes meaning: darkening = DEEPENING, lightening = OPENING

**How chromatic creates the page's visual arc:**
The zone background sequence IS the page's skeleton. A reader scrolling sees: light band → medium band → dark band → light band. That rhythm is the page's visual heartbeat. Without perceptible zone backgrounds, the page is a single unbroken cream expanse — monochromatic, undifferentiated, flat. This was exactly the Flagship failure: backgrounds differing by 1-8 RGB points, producing a single-tone page.

**Current brief coverage:** STRONG. Section 2 (perception thresholds), Section 4 (multi-coherence channel list), Section 9B (quality floor), Section 5 (fractal echo table with BG delta >= 15 RGB at Page scale). SC-09 gate enforces programmatically.

### 1.2 Typographic (Heading Hierarchy Across Sections)

At page scale, typographic = how heading sizes, weights, and treatments PROGRESS across the full scroll. Not individual heading sizes (that's component scale), but the PATTERN of heading treatment as the reader scrolls.

**What the brief says:** "font-size, font-weight, letter-spacing, or line-height shift" (Section 4). Typography zone hierarchy requires display-body delta >= 10px and 3+ distinct font-size clusters (SC-11).

**What this means at page scale:**
- Zone 1 might use large display headings (2.5rem) for broad overview
- Zone 2 might shift to medium headings (1.625rem) for detailed analysis
- Zone 3 might use tight meta headings (0.75rem) for reference content
- The PROGRESSION from large → medium → small encodes DEEPENING (overview → detail)
- Or medium → large → medium encodes FOCUSING (context → climax → resolution)

**How typographic creates the page's visual arc:**
Typography at page scale marks cognitive territory. When heading sizes shrink across zones, the reader feels "we're getting into the weeds." When heading sizes grow, the reader feels "we're opening up a new vista." The page-scale typography arc tells the reader whether they're ascending or descending through the material.

**Current brief coverage:** MODERATE. SC-11 enforces minimum delta (10px display-body) and cluster count (3+). The brief names typography as a channel. But the brief does NOT describe HOW typography should PROGRESS across zones — what a typographic arc looks like, what DEEPENING vs OPENING looks like in heading sizes. The fractal echo table mentions "heading hierarchy" but only with a section-scale threshold (">= 2 component types per viewport"), not a page-scale typographic progression threshold.

### 1.3 Spatial (Section Padding Progression)

At page scale, spatial = how section padding and content density PROGRESS from top to bottom. The page's breathing rhythm. Dense zones compressed with 16-32px padding. Sparse zones generous with 64-80px padding. The progression IS the spatial arc.

**What the brief says:** "padding, margin, or content density shift" (Section 4). Spacing from 4px base scale: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96. No single value exceeds 96px. Stacked gaps <= 120px (SC-10).

**What this means at page scale:**
- Early zones might use generous padding (64-80px) for sparse, introductory content
- Middle zones might compress to 32-48px for dense technical content
- Late zones might return to 64px for resolution/breathing
- The progression sparse → dense → sparse is a CRESCENDO pattern
- The progression sparse → dense → dense → dense is a DEEPENING pattern

**How spatial creates the page's visual arc:**
Spatial density is the page's rhythm section. When padding compresses, the reader feels urgency, detail, depth. When padding expands, the reader feels pause, overview, rest. Without spatial progression, every zone has the same padding — the page breathes monotonically. Mechanism #5 (Dense/Sparse Alternation) and #12 (Progressive Disclosure) are the spatial arc mechanisms.

**Current brief coverage:** STRONG. SC-10 prevents void stacking (<=120px). The brief describes spacing compression (mechanism #4), dense/sparse alternation (mechanism #5), and progressive disclosure (mechanism #12). The perception threshold (padding delta >= 24px between zones) is stated in SC-13. The quality floor requires at least 2 distinct spacing zones.

### 1.4 Structural (Border Weight Across Zones)

At page scale, structural = how border presence, weight, and treatment change zone by zone. The page's skeleton.

**What the brief says:** "border-left weight, horizontal rules, or divider presence change" (Section 4). 3-tier border budget: 4px accent, 3px structural, 1px separator (Section 8). >= 3 distinct border configurations required (Section 9B, SC-15).

**What this means at page scale:**
- Zone 1 (overview) might have minimal borders — just the 3px header accent
- Zone 2 (deep analysis) might introduce 4px left-borders on callouts, 1px table separators
- Zone 3 (reference) might have dense 1px grid borders everywhere
- The ACCUMULATION of border presence from sparse to dense encodes structural complexity
- Or the SHIFT from heavy (4px) to light (1px) encodes resolution

**How structural creates the page's visual arc:**
Borders are the page's bone structure. They're visible at arm's length — you can see border patterns even when squinting. A zone with heavy borders feels "structured, defined, bounded." A zone with minimal borders feels "open, flowing, uncontained." The border arc across zones tells the reader how much structure the content carries.

**Current brief coverage:** MODERATE. SC-15 enforces 3+ distinct configurations. The mechanism catalog documents border-weight gradient (#1), border-left semantic signaling (#10), and the 3-tier budget. The brief describes the 3-tier system clearly. But the brief does NOT describe a page-scale border PROGRESSION — how border treatment should evolve across zones as part of the visual arc.

### 1.5 Behavioral (Section-Level Interactions)

At page scale, behavioral = whether zones have hover states, transitions, interactive elements, or remain static. The page's interactivity arc.

**What the brief says:** "hover states, transition timing change" (Section 4). Listed as an "enhancement channel" — enriches but does not substitute for primary four.

**What this means at page scale:**
- Overview zones might be entirely static (no hover, no transitions)
- Interactive zones might have hover-reveal details, expandable sections
- Reference zones might have hoverable table rows, tooltips
- The APPEARANCE of interactivity marks a zone transition

**How behavioral creates the page's visual arc:**
Behavioral channel is the weakest page-scale signal. Most readers don't hover over every element to discover interaction patterns. But presence/absence of interactive elements creates a subtle cognitive shift — "this zone wants me to explore" vs "this zone wants me to read."

**Current brief coverage:** WEAK. SC-13 checks for transition presence/absence between zones, but the brief barely describes what behavioral channel means at page scale. No mechanisms in the catalog directly address page-scale behavioral progression. The Scroll Witness (#8) is the closest, but it's navigation, not zone-level behavioral arc.

### 1.6 Material (Surface Treatment Variation)

At page scale, material = how surface treatment (texture, density, component density) changes across zones. The page's material palette.

**What the brief says:** "surface treatment or component density change" (Section 4). Listed as an "enhancement channel" alongside behavioral.

**What this means at page scale:**
- Zone 1 might have smooth, minimal surface — large text, few components
- Zone 2 might have rich surface — code blocks, callouts, tables, data
- Zone 3 might return to smooth surface — summary, conclusion
- The shift from smooth → textured → smooth mirrors spatial compression

**How material creates the page's visual arc:**
Material is closely related to spatial density but distinct. Two zones can have the same padding but different material density — one with a single paragraph, one with a code block + callout + table. Material density creates visual WEIGHT independent of spacing.

**Current brief coverage:** WEAK. SC-13 checks for backgroundImage changes (a very limited proxy for material). SC-08 requires >= 8 component types but doesn't measure their distribution. The brief mentions "component density" as a channel but provides no mechanism for controlling material progression across zones.

---

## 2. MULTI-COHERENCE AT PAGE SCALE

### 2.1 This Is Where Multi-Coherence Matters Most

Multi-coherence is fundamentally a page-scale concept. When the brief says "at every zone boundary, at least 3 of 6 CSS channels shift simultaneously," it describes what happens at the SEAMS between page-scale zones. Zone boundaries are page-scale architecture. Multi-coherence IS the quality of those seams.

### 2.2 What a 5-Channel Shift Looks Like

At a major zone boundary (e.g., Overview → Deep Analysis — a DEEPENING transition):

| Channel | Before (Zone 1) | After (Zone 2) | Direction |
|---------|-----------------|-----------------|-----------|
| **Chromatic** | BG #FEF9F5 (warm cream) | BG #F0EBE3 (earthy tan) | Darker (DEEPENING) |
| **Typographic** | H2 at 1.625rem/400 | H2 at 1.375rem/600 | Smaller + heavier (DEEPENING) |
| **Spatial** | Padding 64px | Padding 40px | Tighter (DEEPENING) |
| **Structural** | No border-left | 4px border-left on callouts | More structure (DEEPENING) |
| **Material** | Prose-only (1 component type) | Prose + code + callouts (3 types) | Denser surface (DEEPENING) |

**Total:** 5 channels shifting, ALL encoding DEEPENING. The reader feels a unified shift: "we are going deeper." No single channel dominates — the aggregate effect is greater than any individual shift. THIS is multi-coherence.

**What the brief example says (Section 4):** "background shifts from #FEF9F5 to #F0EBE3 (18 RGB delta), font-size drops from 18px to 16px, padding compresses from 64px to 48px, a 3px border-left appears, and letter-spacing tightens from 0.05em to 0.03em. Five channels moving together, all encoding DEEPENING."

### 2.3 What a 3-Channel Quiet Boundary Looks Like

At a minor zone boundary (e.g., Technical Section A → Technical Section B — a SMOOTH transition within the same domain):

| Channel | Before (Zone 2a) | After (Zone 2b) | Direction |
|---------|-------------------|------------------|-----------|
| **Chromatic** | BG #F0EBE3 | BG #FFFFFF (near-white) | Shifts (OPENING slightly) |
| **Typographic** | H3 at 1.375rem | H3 at 1.375rem | NO SHIFT |
| **Spatial** | Padding 40px | Padding 48px | Slightly looser (OPENING) |
| **Structural** | 4px border-left | 3px border-left | Lighter (OPENING) |
| **Behavioral** | No change | No change | NO SHIFT |
| **Material** | No change | No change | NO SHIFT |

**Total:** 3 channels shifting (chromatic + spatial + structural), encoding gentle OPENING. The reader feels a soft modulation: "the content is shifting slightly." This is a SMOOTH transition per the transition grammar (Section 7).

### 2.4 The 4 Semantic Directions at Zone Boundaries

The brief defines 4 primary semantic directions (Section 4):

**DEEPENING** = darker bg + tighter spacing + heavier borders + denser typography
- Page-scale manifestation: Zone sequence gets progressively darker, denser, more structured
- Use for: Overview → Detail, Introduction → Technical Core, Broad → Specific
- CSS signals: BG darkens (cream → tan → near-white), padding compresses (64→40→24px), border-left weight increases (0→3→4px), heading sizes shrink (2.5→1.625→1.375rem)

**OPENING** = warmer bg + generous spacing + thinner borders + more air
- Page-scale manifestation: Zone sequence gets lighter, airier, less structured
- Use for: Dense Section → Resolution, Technical → Reflective, Conclusion → Coda
- CSS signals: BG lightens (tan → cream), padding expands (40→64→80px), borders thin (4→3→1px), heading sizes grow (1.375→1.625rem)

**FOCUSING** = narrower content + larger type + bolder accents + fewer elements
- Page-scale manifestation: A single zone narrows and intensifies — the climax
- Use for: The KEY INSIGHT zone, the one thing the reader must remember
- CSS signals: Content max-width reduces (100%→70%), heading size jumps (1.625→2.5rem), accent borders appear (4px primary), component count drops to 1

**RESOLVING** = settled tones + standard spacing + lighter borders + clean typography
- Page-scale manifestation: The final zone returns to neutral — calm after intensity
- Use for: Summary, conclusion, next-steps, footer lead-in
- CSS signals: BG returns to cream (#FEF9F5), padding standardizes (48px), borders lighten (1px only), heading returns to section size (1.625rem)

### 2.5 The Page-Scale Coherence Arc

Multi-coherence is not uniform across all boundaries. The brief explicitly states (Section 4): "The coherence profile varies — quieter boundaries at 3 channels, climactic boundaries at 5-6 channels — creating a narrative arc of visual intensity."

A well-composed page has a COHERENCE ARC:

```
Zone 1 → Zone 2:  3 channels (SMOOTH entry — gentle DEEPENING)
Zone 2 → Zone 3:  5 channels (BRIDGE climax — strong FOCUSING)
Zone 3 → Zone 4:  3 channels (SMOOTH exit — gentle RESOLVING)
Zone 4 → Zone 5:  2 channels (BREATHING — minimal closure)
```

The number of shifting channels creates its own arc — quiet → loud → quiet. The PAGE'S emotional trajectory IS this coherence arc.

---

## 3. ANTI-SCALE AT PAGE SCALE

The anti-scale model states: `Richness = semantic density x restraint x spatial confidence`.

### 3.1 Density at Page Scale

**Definition:** Component variety per viewport-height screenful.

At page scale, density means: across the FULL SCROLL, how many different component types does the reader encounter per viewport? Not total component count (that's a flat metric). Component VARIETY per viewport — "this viewport has prose + code + callout; next viewport has prose + table + figure."

**Brief coverage:** Section 3 (Richness) states ">= 2 distinct component types per viewport-height screenful." SC-08 requires >= 8 total component types. The mechanism density cap (catalog Section "Restraint Protocol") limits to 4 mechanisms per viewport.

**What density looks like at page scale:** Scrolling through the page, the reader encounters DIFFERENT visual textures every viewport. Not the same callout-prose-callout pattern repeated. Not 5 viewports of pure prose. Each viewport offers something visually distinct.

### 3.2 Restraint at Page Scale

**Definition:** Zones that breathe vs zones that are dense.

At page scale, restraint means: NOT every zone is maximally dense. Some zones deliberately breathe — generous spacing, minimal components, open air. The brief's quality floor requires 14+ mechanisms, but restraint means NOT deploying all 14 in the first two zones.

**Brief coverage:** The mechanism distribution requirement ("EVERY third of the page contains at least 2 distinct mechanisms") and the density cap ("no viewport exceeds 4 mechanisms") both enforce restraint. Section 3 explicitly requires "at least 3 mechanisms deliberately absent — document which ones and why."

**What restraint looks like at page scale:** The page has visible CONTRAST between dense zones (callouts + code + tables + borders) and sparse zones (prose with generous padding). The sparse zones make the dense zones feel richer by contrast. Without sparse zones, density becomes noise.

### 3.3 Spatial Confidence at Page Scale

**Definition:** Designed at arm's length squint.

At page scale, spatial confidence means: lean back, squint at the page, blur the text. Can you still see STRUCTURE? Can you still see zone boundaries? Can you still see rhythm? If yes, the page has spatial confidence. If the squint reveals a uniform cream rectangle with no internal structure, the page lacks spatial confidence.

**Brief coverage:** Section 11 (Five Questions) — "The Squint" test explicitly describes this: "Lean back and squint. The blur strips away detail, revealing your page's architecture in pure shape and color. If you can identify every zone boundary from blur alone, your chromatic and spatial architecture is working."

**What spatial confidence looks like at page scale:** The page looks like a DESIGNED OBJECT from across the room. Color bands are visible. Border patterns are visible. Dense zones are distinguishable from sparse zones. The page has visual weight distribution — heavy zones and light zones, not uniform weight everywhere.

---

## 4. FRACTAL SELF-SIMILARITY AT PAGE SCALE

### 4.1 Zone Sequence Echoes Metaphor

The brief states (Section 5): "Your composition echoes its organizing principle at multiple architectural scales."

At page scale, this means: the zone sequence ITSELF embodies the metaphor. If the metaphor is "geological descent," zones darken and compress as the reader scrolls DOWN — cream surface → tan sediment → earthy depths → dark bedrock. The scroll direction maps to the metaphor's spatial direction. Scrolling = descending = DEEPENING.

If the metaphor is "architectural ascent," zones LIGHTEN as the reader scrolls — heavy basement → structural ground → airy upper → light roofline. The scroll direction maps to ascending the building.

### 4.2 Current Brief Coverage

**STRONG.** The fractal echo table (Section 5) explicitly includes Page scale:

```
| Page | ~960px | Zones sequence across scroll | BG delta >= 15 RGB between adjacent zones |
```

The brief states: "Pattern direction is consistent across all rows. If your page-level pattern says 'compressing' but your component-level says 'expanding,' the fractal is broken."

The brief also states the build order: "build largest first, verify before proceeding" — meaning Page scale is built SECOND (after Navigation) and verified before Section and Component scales proceed.

### 4.3 What's Well-Covered

- The zone-to-metaphor mapping is explicit
- The perception threshold (>= 15 RGB) is stated and gated (SC-09)
- The build order prioritizes Page scale
- The fractal echo table mandates Page-scale documentation

---

## 5. PERCEPTION THRESHOLDS AT PAGE SCALE

These are FLOORS — the minimum deltas for CSS to be perceptible.

| Property | Threshold | Gate | Brief Reference |
|----------|-----------|------|-----------------|
| Background delta | >= 15 RGB max-channel | SC-09 (blocking) | Section 2, Section 5 |
| Font hierarchy | >= 10px display-body delta, 3+ clusters | SC-11 (blocking) | Section 2 |
| Stacked gaps | <= 120px total | SC-10 (blocking) | Section 2 |
| Multi-coherence | >= 3 channels per boundary, avg >= 4 | SC-13 (blocking) | Section 4, Section 9B |
| Border variety | >= 3 distinct configurations | SC-15 (blocking) | Section 8, Section 9B |
| Sub-perceptual prevention | No letter-spacing < 0.025em, no bg delta 1-14 RGB | SC-14 (blocking) | Section 2 |
| Zone count | 3-5 zones | SC-12 (blocking) | Section 9B |

**Current brief coverage:** EXCELLENT. All page-scale perception thresholds are stated in Section 2, reinforced in Section 9B (quality floor), and enforced programmatically by gates SC-09, SC-10, SC-11, SC-12, SC-13, SC-14, SC-15.

---

## 6. WHAT WOULD ENRICHMENT LOOK LIKE?

### 6.1 What the Brief Already Has at Page Scale

The conventions brief is STRONGEST at page scale. It has:

1. **Multi-coherence definition** (Section 4) — 6 channels, 4 directions, example, boundary naming
2. **Fractal echo table** (Section 5) — explicit Page scale row with threshold
3. **Transition grammar** (Section 7) — SMOOTH/BRIDGE/BREATHING types with CSS
4. **Perception thresholds** (Section 2) — all page-scale deltas stated
5. **Quality floor** (Section 9B) — 14+ mechanisms, 800+ CSS lines, 3+ shifts, 3 borders, 8 components, 3-5 zones
6. **Five questions** (Section 11) — Squint test, Scroll test, Second Half test, Boundary test, Skeleton test
7. **Compositional memory** (Section 10) — boundary naming, midpoint reflection
8. **Transition grammar in mechanism catalog** — 3 transition types (HARD CUT, SPACING SHIFT, CHECKPOINT) with CSS patterns
9. **Restraint protocol in mechanism catalog** — density cap per viewport (4 mechanisms max), distribution requirement (2+ per third), restraint ratio documentation

### 6.2 What's MISSING

Despite being the strongest scale, several specific gaps exist:

**GAP 1: Stack PROGRESSION is not stated explicitly.**

The brief describes individual zone boundaries and their multi-coherence, but it does NOT describe how the SEQUENCE of boundaries should form a progression. The coherence arc concept (quiet → loud → quiet) is implicit in "climactic boundaries at 5-6 channels" but NOT stated as an explicit requirement or even recommendation.

**What enrichment would add:** A section on "Coherence Arc Planning" that explicitly states:
- Plan the SEQUENCE of boundary intensities before building
- At least one boundary should be at 5+ channels (climactic)
- At least one boundary should be at exactly 3 channels (quiet)
- The climactic boundary should coincide with the content's turning point
- Document the coherence arc in the build log alongside the fractal echo table

**GAP 2: Typographic PROGRESSION across zones is not described.**

The brief states minimum deltas (10px display-body, 3+ clusters) but doesn't describe HOW typography should progress across zones. Should heading sizes shrink as zones deepen? Should font-weight increase? What does DEEPENING look like in typography specifically?

**What enrichment would add:** A brief paragraph or table mapping semantic directions to typographic progressions:
- DEEPENING: heading sizes decrease (2.5rem → 1.375rem), body weight stays constant, meta text increases in presence
- OPENING: heading sizes increase, line-height expands, letter-spacing opens
- FOCUSING: heading size jumps larger, body narrows (max-width 70ch), weight increases
- RESOLVING: heading returns to section size, body returns to standard weight

**GAP 3: Material channel has no concrete guidance.**

The brief names "material" as a channel but provides no mechanisms, no thresholds, no examples of what material progression looks like. SC-13 checks for backgroundImage changes — a nearly useless proxy. Material density (component variety per zone) is a critical page-scale signal with no operational guidance.

**What enrichment would add:** A brief definition of material channel at page scale:
- Material = component variety and visual texture within each zone
- Material shift = the number/type of components changes between zones
- Minimum: at least 2 zones with different component mixes
- Example: Zone 1 (prose-only) → Zone 2 (prose + code + callout) = material shift
- This is NOT the same as spatial (padding) — two zones can have identical padding but different material density

**GAP 4: Border PROGRESSION is not described at page scale.**

Like typography, borders have a minimum (3 distinct configurations) but no guidance on how border treatment should PROGRESS across zones. The mechanism catalog describes border-weight gradient (#1) for encoding hierarchy within a single scope, but not for encoding the page's structural arc.

**What enrichment would add:** Brief guidance on border arc:
- Early zones may be border-light (overview, open content)
- Deep zones should be border-heavy (structured, bounded content)
- Resolution zones should lighten borders (return to openness)
- The border arc mirrors the structural complexity of the content

**GAP 5: The relationship between transition types (Section 7) and multi-coherence channels (Section 4) is not explicit.**

The brief describes 3 transition types (SMOOTH, BRIDGE, BREATHING) and 6 multi-coherence channels separately. But it doesn't state the relationship: a SMOOTH transition shifts 3 channels. A BRIDGE transition shifts 4-5 channels. A BREATHING transition shifts 5-6 channels. This mapping is implicit but never stated.

**What enrichment would add:** An explicit mapping table:

| Transition Type | Typical Channel Count | When |
|----------------|----------------------|------|
| SMOOTH | 3 channels | Same domain, different subtopic |
| BRIDGE | 4-5 channels | Different mode (exposition → analysis) |
| BREATHING | 5-6 channels | Full region change, major structural break |

### 6.3 Summary of Enrichment Needs

| Gap | Severity | Enrichment Type | Lines Estimate |
|-----|----------|-----------------|----------------|
| Stack progression (coherence arc) | MODERATE | New subsection in Section 4 or 7 | 15-20 lines |
| Typographic progression | MODERATE | Table in Section 4 or Section 8 | 10-15 lines |
| Material channel guidance | MODERATE | Paragraph + example in Section 4 | 10-15 lines |
| Border progression | LOW | Paragraph in Section 8 | 8-10 lines |
| Transition-to-coherence mapping | LOW | Table bridging Section 4 and Section 7 | 8-10 lines |

**Total enrichment estimate:** ~50-70 lines across 5 gaps.

---

## 7. VISUAL QUALITY: IS ENRICHMENT EVEN NEEDED?

### 7.1 Where the Pipeline Is STRONGEST

Page scale is where the pipeline is strongest. The evidence:

**SC-09 (Background Delta >= 15 RGB):** Directly targets THE primary Flagship failure. This single gate prevents the catastrophic monochromatic page. It is the highest-value gate in the entire system.

**SC-12 (Zone Count 3-5):** Prevents both under-zoning (flat page) and over-zoning (fragmented page). Validated against Alexander/Salingaros mathematical ceiling.

**SC-13 (Multi-Coherence >= 3 per boundary, avg >= 4):** Enforces the binding rule at every zone boundary. The most complex gate, directly measuring the page's compositional quality.

**SC-10 (Stacked Gap <= 120px):** Prevents whitespace voids — the other half of the Flagship failure.

**SC-15 (Border Presence >= 3 configs):** Ensures structural skeleton exists.

These 5 gates (SC-09, SC-10, SC-12, SC-13, SC-15) form the page-scale verification suite. Together they enforce: visible zone boundaries + no voids + multi-coherence + structural skeleton. This is the strongest gate cluster in the system.

### 7.2 Where the Pipeline Is Weakest at Page Scale

Despite the strong gate coverage, the pipeline has page-scale weaknesses:

**Weakness 1: Gates measure EXISTENCE, not QUALITY.** SC-13 counts how many channels shift — it does not judge whether the shifts serve the same semantic direction (SC-13B is ADVISORY only, not blocking). A boundary where background darkens but spacing opens (contradictory) passes SC-13 if 3 channels shift. Multi-coherence without direction coherence is noise, not design.

**Weakness 2: No gate measures the COHERENCE ARC.** SC-13 measures each boundary independently. No gate checks whether the sequence of boundary intensities forms a narrative arc (quiet → climactic → quiet). A page with uniform 3-channel shifts at every boundary passes all gates but lacks compositional arc.

**Weakness 3: Material and behavioral channels are under-gated.** SC-13 checks for transition presence/absence (behavioral) and backgroundImage changes (material) — both are crude proxies. The four primary channels (chromatic, typographic, spatial, structural) are well-gated; the two enhancement channels are effectively ungated.

**Weakness 4: The brief has the tools but lacks the RECIPE.** The conventions brief describes multi-coherence, transition grammar, fractal echo, perception thresholds — all separately. But it doesn't provide a page-scale RECIPE: "Step 1: Plan zone backgrounds. Step 2: Plan typography progression. Step 3: Plan border arc. Step 4: At each boundary, set all shifting channels together." The brief provides the WHAT but not the HOW-IN-SEQUENCE.

### 7.3 Verdict: Is Enrichment Needed?

**YES, but targeted.** The page-scale infrastructure is solid — the concepts, the gates, the thresholds are all in place. What's missing is:

1. **The coherence arc concept** — explicitly stating that boundary intensity should form its own progression (not uniform)
2. **Per-channel progression guidance** — how typography, borders, and material should progress across zones, not just exist
3. **The transition-to-coherence bridge** — mapping transition types to channel counts
4. **Material channel operationalization** — making material a real channel with real guidance, not a checkbox

These are REFINEMENTS, not overhauls. The page-scale foundation is the strongest in the system. Enrichment here is about completing the last 15% — connecting existing concepts that currently sit in isolation.

---

## 8. SPECIFIC ENRICHMENT RECOMMENDATIONS

### Recommendation 1: Add Coherence Arc Planning to Section 4 or 7

**Priority:** HIGH (this is the missing connective tissue between boundaries)
**Location:** After the multi-coherence example in Section 4, or as a new subsection
**Content:**

```
COHERENCE ARC: Plan the sequence of boundary intensities before building.

Not all boundaries are equal. Your page has a coherence arc — the progression
of boundary intensity across the full scroll. At least one boundary should be
at 5+ channels (the climactic moment). At least one should be at 3 channels
(a quiet passage). The climactic boundary coincides with the content's
turning point.

Document your planned coherence arc in the build log:
  Zone 1 → Zone 2: 3 channels (SMOOTH entry)
  Zone 2 → Zone 3: 5 channels (BRIDGE climax)
  Zone 3 → Zone 4: 3 channels (SMOOTH exit)
```

### Recommendation 2: Add Transition-to-Coherence Mapping

**Priority:** MODERATE (bridges two existing sections that should be connected)
**Location:** After transition grammar (Section 7) or within multi-coherence (Section 4)
**Content:** Table mapping SMOOTH→3ch, BRIDGE→4-5ch, BREATHING→5-6ch (as described in Gap 5 above)

### Recommendation 3: Add Per-Direction Typographic Progression

**Priority:** MODERATE (fills a gap in the "what does DEEPENING look like?" question)
**Location:** Within Section 4, expanding the direction definitions
**Content:** One additional line per direction describing its typographic manifestation

### Recommendation 4: Operationalize Material Channel

**Priority:** LOW-MODERATE (weak channel, but naming it without defining it is worse than omitting it)
**Location:** Within Section 4, expanding the channel definitions
**Content:** 3-4 lines defining material as "component variety and visual texture per zone" with a minimum threshold

### Recommendation 5: Do NOT add a page-scale build recipe

**Priority:** N/A (would belong in the /build-page orchestrator, not the conventions brief)
**Rationale:** The conventions brief describes the WORLD. The operational recipe (which lives in /build-page) describes the BUILD SEQUENCE. Adding build-sequence instructions to the brief would violate its design: "This brief describes the world you are building inside — the materials, the physics, the quality of light. It does not tell you what to build."

---

## 9. CROSS-REFERENCES TO GATES

| Page-Scale Concept | Primary Gate | Secondary Gates | Brief Section |
|-------------------|-------------|-----------------|---------------|
| Zone backgrounds | SC-09 | SC-14 (sub-perceptual) | 2, 4, 5, 9B |
| Zone count | SC-12 | — | 5, 9B |
| Typography hierarchy | SC-11 | SC-03 (font trinity) | 2, 4, 8 |
| Stacked gaps | SC-10 | — | 2, 7 |
| Multi-coherence | SC-13 | SC-13B (direction, ADVISORY) | 4, 9B |
| Border skeleton | SC-15 | SC-02 (no shadows) | 8, 9B |
| Monotonic progression | SC-16 (ADVISORY) | — | 5 |
| Component library | SC-08 | — | 8, 9B |
| Sub-perceptual | SC-14 | — | 2 |

**Gate coverage summary:** 7 blocking gates + 2 advisory gates directly measure page-scale properties. This is the densest gate coverage of any scale.

---

## 10. CONCLUSION

Page scale is the pipeline's STRONGEST scale — the richest gate coverage, the most detailed brief sections, and the most direct connection to multi-coherence. The gaps are refinements, not structural: coherence arc planning, per-channel progression guidance, material channel operationalization, and transition-to-coherence bridging. Total enrichment: ~50-70 lines, filling 5 specific gaps.

The question is not "does the pipeline handle page scale?" — it clearly does, better than any other scale. The question is "does the pipeline help the builder compose page-scale ARCS, or does it only check page-scale MINIMUMS?" The gates check minimums excellently. The brief describes the world excellently. What's missing is the connective tissue between the world description and the build sequence — the progression planning that turns individual boundary checks into a composed visual arc. That connective tissue belongs partly in the brief (Recommendations 1-4) and partly in the /build-page orchestrator's operational recipe.
