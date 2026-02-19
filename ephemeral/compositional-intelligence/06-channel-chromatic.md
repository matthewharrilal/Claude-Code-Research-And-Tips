# Channel Trace: CHROMATIC (Backgrounds, Text Colors, Accent Colors, Border Colors)

**Agent:** chromatic-channel-tracer (Opus)
**Task:** #6
**Date:** 2026-02-19
**Scope:** Trace how the chromatic channel operates in PV2 -- where it carries semantic meaning, where it flattens to a compliance floor, and what structured chromatic gates would enforce semantic color progression beyond "be different enough."

---

## 1. WHAT THE CHROMATIC CHANNEL IS

The chromatic channel is the deployment of color as a **semantic signal**. Not "what color is this element" but "what does this color MEAN at this point on the page." It encompasses:

- **Zone backgrounds** -- warm cream (#FEF9F5), cool white (#FFFFFF), breathing tan (#FAF5ED), dark bedrock (#1A1A1A)
- **Text colors** -- primary (#1A1A1A), secondary (#666666), tertiary (#888888), muted (#AAAAAA), inverse (#FFFFFF)
- **Accent colors** -- 6 callout border colors (red/blue/green/coral/amber/purple) encoding semantic categories
- **Border colors** -- warm (#E0D5C5), subtle (#F0EBE3), dark (#1A1A1A), primary red (#E83025)

The channel operates at every scale: dark header bookends (Navigation), zone background progression (Page), section boundary shifts (Section), callout accent encoding (Component), syntax highlighting (Character).

---

## 2. WHAT PV2 CURRENTLY SPECIFIES FOR CHROMATIC

### 2.1 The Floor: >= 15 RGB Delta

PV2's primary chromatic rule is **SC-09**: adjacent zone backgrounds must differ by >= 15 RGB points. This is specified at:

- **PV2-PIPELINE-DIAGRAM.md** line 399: "MANDATORY: >= 15 RGB delta between adjacent zones."
- **PV2-PIPELINE-DIAGRAM.md** line 559: SC-09 gate in the programmatic gate runner.
- **PV2-PIPELINE-DIAGRAM.md** line 511: Recipe Phase 3 mentions "Deploy warm-cool-warm arc."

### 2.2 The Palette Constraint: R >= G >= B

PV2 line 388 specifies "R >= G >= B for ALL colors (warm palette enforcement)" in Phase 2 (CSS Reset). This ensures every color used sits in the warm spectrum.

### 2.3 Accent Color Semantic Mapping

TC Skill Rule C-5 (line 1358) maps accent colors to fixed semantic roles:
- `--color-primary` (#E83025) = structural emphasis, page-level accents
- `--accent-blue` = informational callouts
- `--accent-green` = tips, positive actions
- `--accent-coral` = gotchas, warnings
- `--accent-amber` = challenges, caution
- `--accent-purple` = essence, core abstractions

### 2.4 Zone Token Vocabulary

tokens.css defines 4 zone backgrounds (sparse/dense/breathing/bedrock) plus 5 semantic backgrounds (info/tip/gotcha/summary/warm) plus the primary color palette. Total: ~20 color tokens.

---

## 3. WHERE CHROMATIC INTELLIGENCE IS PRESENT

### 3.1 The 15-RGB Delta Gate (SC-09)

This is the SINGLE most important chromatic innovation in PV2. The flagship experiment had zones differing by 1-8 RGB points -- literally invisible. SC-09 makes this a binary PASS/FAIL gate. This prevents the catastrophic failure mode.

**Strength:** Binary, measurable, prevents the worst-case scenario.

### 3.2 The Dark Bookend Pattern (Mechanisms #13/#14)

Dark header (#1A1A1A) + 3px red border-bottom, dark footer + 3px red border-top. This creates the strongest chromatic landmarks on the page. Specified in the recipe at Phase 2 and verified by SC-01/SC-02.

**Strength:** HIGH perceptual impact. The header/footer provide unmistakable chromatic anchoring.

### 3.3 Accent-to-Semantic Mapping (Rule C-5)

Six accent colors mapped to fixed semantic roles. This is well-specified and consistently enforced. Every callout's border color carries categorical meaning.

**Strength:** Compositional intelligence preserved. The accent vocabulary is semantic, not decorative.

### 3.4 Coherence Rule C-1 (Density Direction)

TC Skill line 1337: "Background MUST darken or warm progressively." This is the only rule that attempts chromatic DIRECTIONALITY -- tying background color to the page's semantic arc.

**Strength:** Correct instinct -- chromatic progression should track meaning.

---

## 4. WHERE CHROMATIC INTELLIGENCE IS LOST

### 4.1 The "Be Different Enough" Ceiling

The >= 15 RGB delta is a FLOOR, not a COMPOSITIONAL INSTRUCTION. It tells the builder "don't make adjacent zones invisible" but says NOTHING about:

- **Direction:** Should zone 2 be warmer or cooler than zone 1? The delta requirement says "differ by 15 RGB" -- this permits random wandering. Zone 1 could be warm, zone 2 cooler, zone 3 warmer, zone 4 cooler, with no semantic motivation for the shifts.
- **Trajectory:** Should the chromatic arc follow the content's argument arc? PV2 mentions "warm-cool-warm arc" exactly once (line 511 of the diagram) in passing, without specification. What determines where warm transitions to cool? What content property triggers the shift?
- **Reinforcement:** Should deeper/denser content have darker backgrounds? TC Rule C-1 says "background MUST darken or warm progressively" but the operational recipe (Phase 3 of the 9-phase build) provides no mechanism for the builder to determine WHAT "progressively" means for this specific content.

**The gap:** SC-09 ensures perceptibility. Nothing ensures semantic meaning. A builder can pass SC-09 with random color assignments as long as deltas exceed 15.

### 4.2 Warm Palette Becomes the ONLY Chromatic Intelligence

R >= G >= B enforcement (SC-04) plus the warm cream token palette means the chromatic channel operates within an extremely narrow gamut. The available background range is approximately:

- Lightest: #FFFFFF (pure white -- just barely fails R>=G>=B, used for code blocks in inverted form)
- Warmest: #FEF9F5 (warm cream)
- Earthiest: #FAF5ED (breathing zone)
- Darkest body: ~#F0EBE3 (subtle border)
- Darkest landmark: #1A1A1A (header/footer/code)

Within the body content zones (excluding header/footer/code), the chromatic gamut spans approximately 20 RGB points total across all channels. This means:

**With 4 zones at 15 RGB minimum delta, you need 45+ RGB points of range but only have ~20.** The math doesn't work for 4+ zones. With 3 zones, you get exactly the documented behavior: 3 perceptibly distinct background groups (warm/cool/resolved) with within-group sub-perceptual variation.

The remediation audit (file 05, line 113) independently discovered this: "12 per-section backgrounds within the warm cream palette CANNOT all be perceptibly distinct. The fix is to accept 3-4 perceptibly distinct background groups."

**What this means for PV2:** The pipeline cannot deliver more than 3-4 perceptibly distinct body zone backgrounds. The SC-09 gate at 15 RGB effectively caps zone count at 3 for body content (+ 1 dark landmark zone = 4 total).

### 4.3 No Chromatic-Content Mapping Protocol

The TC Skill specifies HOW to select mechanisms (Phase 4), HOW to select metaphors (Phase 3), but has NO protocol for selecting zone background colors based on content semantics. The Translation Grammar (Step 4.2) provides a 3-level depth lookup:

```
Surface → background: #FEF9F5 (warmest, lightest)
Middle  → background: #FFFFFF or #FAF5ED (neutral)
Deep    → background: #1A1A1A + inverted text (bedrock)
```

This is a LOOKUP TABLE, not a derivation process. The builder gets "surface = warm, deep = dark" but no protocol for:

1. Which content sections constitute "surface" vs "middle" vs "deep"
2. Whether the chromatic arc should follow the argument arc, the density arc, or the metaphor arc
3. How to handle content with 5+ sections when only 3-4 distinct backgrounds are available

### 4.4 No Cross-Channel Chromatic Coupling Enforcement

The multi-coherence invocation (file 16, lines 596-604) identifies 5 chromatic couplings:

| Coupling | What It Means |
|----------|--------------|
| Spatial x Chromatic | Dense zones should have warmer/darker backgrounds |
| Chromatic x Typographic | Dark backgrounds use light text with different weight |
| Chromatic x Temporal | Color temperature tracks the page's argument arc |
| Chromatic x Rhythmic | Accent colors on borders match zone background families |
| Chromatic x Semantic | Color encoding is consistent with zone background encoding |

**None of these couplings are enforced by any gate.** SC-09 checks background DELTA but not background DIRECTION. No gate checks whether dense zones use warmer backgrounds. No gate checks whether accent colors align with zone temperature. These couplings are DESCRIBED in the research but ABSENT from the operational pipeline.

### 4.5 The "Ch1-Ch4 Paradox"

The pipeline analysis (file 31, line 435) identified a critical paradox: "Ch4 STRUCTURAL has HIGHEST visibility; Ch1 CHROMATIC has LOWEST (despite being primary metaphor carrier)."

The chromatic channel is supposed to be the primary vehicle for metaphor expression (graduated backgrounds = geological depth, warming progression = elevation map, etc.). Yet it is the LEAST VISIBLE channel in actual builds because:

1. The warm palette gamut is too narrow for dramatic shifts
2. No gate enforces directional progression
3. The builder allocates CSS budget to structural (borders) and typographic (font sizing) changes that are more visually dramatic with less effort

**Result:** The chromatic channel becomes wallpaper -- present but semantically inert. The metaphor's "backbone" (graduated backgrounds telling the page's story) is invisible while the metaphor's "skeleton" (borders, type hierarchy) does all the work.

### 4.6 Zero Character-Scale Chromatic Intelligence

PV2 has no specification for character-scale chromatic behavior beyond syntax highlighting in code blocks. No rules govern:

- Whether link color should shift with zone context (warm zone = warmer link, cool zone = cooler link)
- Whether selection highlight (::selection) should match zone temperature
- Whether emphasis markers (bold, italic) should have chromatic weight shifts in different zones
- Whether inline code background should shift with zone background

This means at the Character scale, chromatic is STATIC -- identical `::selection`, identical `a:link`, identical `code` backgrounds regardless of which zone they appear in. The page's chromatic story stops at the Section scale and goes silent at Component/Character.

---

## 5. THE ROOT CAUSE: FLOOR WITHOUT DIRECTION

Every chromatic specification in PV2 is either:

1. **A constraint** (R >= G >= B, no pure black/white, specific accent mappings)
2. **A threshold** (>= 15 RGB delta)
3. **A lookup** (surface = warm, deep = dark)

None are **directional instructions**:
- "Background warmth should INCREASE in sections where the content's argument is resolving"
- "Background warmth should DECREASE in sections where the content's argument is complicating"
- "The warmest zone should appear where the content's emotional peak occurs"
- "The coolest zone should appear where the content's analytical peak occurs"

The chromatic channel has a floor (SC-09) and a palette (tokens.css) but no COMPASS. It knows what colors are legal and how different they must be, but not what they should MEAN at each point in the page.

Compare this with the structural channel, which has:
- Border weight gradient encoding (4px > 3px > 1px = importance hierarchy) -- DIRECTIONAL
- Transition type taxonomy (HARD CUT > SPACING SHIFT > CHECKPOINT = axis distance) -- DIRECTIONAL
- Component containment grammar (bounded > accented > open = containment level) -- DIRECTIONAL

The structural channel has direction, hierarchy, and grammar. The chromatic channel has a delta check.

---

## 6. WHAT STRUCTURED CHROMATIC GATES WOULD FIX THIS

### Gate CG-01: Chromatic Arc Alignment (BINARY)

**Rule:** The build plan MUST specify a chromatic arc that maps to the content's argument arc. The chromatic arc has exactly 3 values: WARM, NEUTRAL, COOL.

**Protocol:**
1. TC Planner identifies the content's argument arc (e.g., "explore -> analyze -> resolve")
2. TC Planner assigns a chromatic direction to each arc phase:
   - WARM (#FEF9F5 to #FEF2E4 range) = introductory, inviting, safe, opening
   - NEUTRAL (#FFFFFF to #FAF8F5 range) = analytical, precise, technical, dense
   - COOL (#F0EBE3 to #FAF5ED range) = transitional, procedural, building
3. Build plan includes: `CHROMATIC ARC: WARM -> NEUTRAL -> WARM` (or whatever the content demands)
4. Builder assigns zone backgrounds following the arc

**Gate check:** "Does the background color sequence follow the declared arc direction?" Parse the hex values of sequential zones and verify the R/G/B trend matches the declared trajectory (WARM->NEUTRAL = R should decrease or G/B should increase between opening and middle zones).

**Why this works:** Forces the planner to make a SEMANTIC decision about color direction before the builder writes CSS. The builder gets a compass ("this arc goes warm-cool-warm") not just a floor ("be 15 RGB apart").

### Gate CG-02: Chromatic-Density Coupling (BINARY)

**Rule:** Zone backgrounds MUST correlate with zone density. Denser zones use warmer or darker backgrounds within the body content area.

**Protocol:**
1. Compute padding per zone from the build plan
2. Assign backgrounds such that: `padding_zone_i < padding_zone_j => warmth(bg_zone_i) >= warmth(bg_zone_j)`
3. Warmth measurement: simple sum R+G+B. Higher sum = cooler/lighter. Lower sum = warmer/richer.

**Gate check (programmatic):**
```javascript
// For each adjacent zone pair:
const paddingA = getComputedStyle(zoneA).paddingTop;
const paddingB = getComputedStyle(zoneB).paddingTop;
const warmthA = bgR + bgG + bgB; // lower = warmer
const warmthB = bgR + bgG + bgB;
// If paddingA < paddingB (A is denser), warmthA should be <= warmthB (A should be warmer)
if (paddingA < paddingB && warmthA > warmthB) FAIL("Dense zone has cooler background than sparse zone");
```

**Why this works:** Couples chromatic to spatial. Prevents random color assignment that passes SC-09 delta but has no semantic relationship to content density.

### Gate CG-03: Accent-Zone Temperature Alignment (BINARY)

**Rule:** Accent colors used on callout borders should align with their host zone's temperature family.

**Protocol:**
- In WARM zones: prefer amber (#D97706), coral (#C97065), or primary red (#E83025) accents
- In NEUTRAL/COOL zones: prefer blue (#4A90D9), green (#4A9D6B), or purple (#7C3AED) accents
- Functional semantics (tip = green, warning = coral) override temperature alignment when the callout's semantic role demands a specific color

**Gate check:** Verify that >= 60% of accent colors in warm zones are warm-family accents, and >= 60% of accent colors in cool zones are cool-family accents. Functional exceptions (warning callout in warm zone using coral = OK because coral IS warm) should be documented.

**Why this works:** Prevents the common pattern where accent colors are assigned by semantic role alone without regard to host zone temperature. A blue "info" callout in a warm peach zone creates chromatic dissonance. This gate encourages (but doesn't rigidly enforce) temperature alignment.

### Gate CG-04: Chromatic Scale Penetration (BINARY)

**Rule:** The chromatic channel must manifest at >= 3 of 5 scales for Middle-tier+ pages.

**Scale checklist:**
| Scale | Chromatic Manifestation | Verification |
|-------|------------------------|-------------|
| Navigation | Dark header/footer bookend | SC-01 already checks this (background: #1A1A1A) |
| Page | Zone background progression following arc | CG-01 checks this |
| Section | Background shifts at section boundaries | SC-09 checks delta |
| Component | Accent color on callout borders | C-5 maps this |
| Character | Link color, ::selection, inline code background vary by zone context | **NEW -- nothing checks this** |

**Gate check:** Count scales where chromatic manifests. Require >= 3 for Middle, >= 4 for Ceiling, all 5 for Flagship.

**Why this works:** Prevents the documented failure mode where chromatic "goes silent" below Section scale. Forces the builder to carry the chromatic story into components and characters.

### Gate CG-05: Chromatic Convergence Limit (BINARY)

**Rule:** No more than 2 adjacent zones may share the same background value (within 5 RGB).

**Why this exists:** The warm palette gamut limitation means builders may "give up" on chromatic differentiation and assign the same background to multiple adjacent zones, effectively making the chromatic channel disappear. This gate prevents chromatic collapse while acknowledging the palette constraint.

**Gate check:** For each consecutive zone triplet (A, B, C), if delta(A,B) < 5 AND delta(B,C) < 5, FAIL. Two identical-looking zones in sequence = acceptable lull. Three = chromatic channel has collapsed.

---

## 7. THE DEEPER MISSING PIECE: CHROMATIC GRAMMAR

Gates CG-01 through CG-05 enforce chromatic BEHAVIOR. But PV2 is still missing a chromatic GRAMMAR analogous to what exists for structural (border-weight gradient: 4px/3px/1px = importance hierarchy) and spatial (padding scale = density encoding).

**Proposed Chromatic Grammar:**

### 7.1 The Temperature-Meaning Mapping

| Temperature | Range (RGB sum) | Semantic Role | Content Type |
|-------------|----------------|---------------|-------------|
| **WARM** | R+G+B < 740 | Inviting, safe, opening, resolving | Introduction, conclusion, philosophical, personal |
| **NEUTRAL** | 740 <= R+G+B < 755 | Analytical, precise, technical | Analysis, data, technical detail, comparison |
| **COOL** | R+G+B >= 755 | Procedural, building, transitional | Steps, processes, how-to, code-heavy |

(Within the warm cream palette, "cool" means cooler-white, not literally cool-blue. The R >= G >= B constraint keeps everything warm, but RELATIVE temperature within the warm spectrum carries meaning.)

### 7.2 The 3-Zone Chromatic Arc Pattern

The pipeline should specify (and the build plan should contain) a 3-zone chromatic arc:

```
CHROMATIC ARC: [WARM/NEUTRAL/COOL] -> [WARM/NEUTRAL/COOL] -> [WARM/NEUTRAL/COOL]
MAPPING: Zone 1 = [section list], Zone 2 = [section list], Zone 3 = [section list]
```

Standard arcs:
- **EXPLORE-ANALYZE-RESOLVE:** WARM -> NEUTRAL -> WARM (the remediation's pattern)
- **TEACH-PRACTICE-MASTER:** NEUTRAL -> COOL -> WARM (cool in the doing, warm in the mastering)
- **INTRODUCE-COMPLICATE-SIMPLIFY:** WARM -> COOL -> NEUTRAL (building complexity then resolving)

### 7.3 The Accent Color Temperature Protocol

Accent colors inherit zone temperature:
- In WARM zones: primary red, amber, coral (warm-spectrum accents)
- In NEUTRAL zones: any accent (neutral zones accept all temperatures)
- In COOL zones: blue, green, purple (cool-spectrum accents)

This is a PREFERENCE, not a prohibition. Functional semantics (warning = coral) override zone temperature when necessary.

### 7.4 Character-Scale Chromatic Extension

```css
/* Zone-aware character-level chromatic */
.zone--warm ::selection { background: rgba(232, 48, 37, 0.15); }  /* warm selection */
.zone--neutral ::selection { background: rgba(74, 144, 217, 0.15); } /* neutral selection */
.zone--cool ::selection { background: rgba(106, 155, 122, 0.15); } /* cool selection */

.zone--warm a:link { color: #C97065; }  /* warm link */
.zone--neutral a:link { color: #4A90D9; } /* neutral link */
.zone--cool a:link { color: #4A9D6B; } /* cool link */
```

This carries the chromatic arc all the way to Character scale. The reader's highlight color, link color, and inline code background subtly shift with the zone temperature, extending the chromatic story to every zoom level.

---

## 8. SUMMARY: CHROMATIC CHANNEL STATUS IN PV2

| Dimension | Status | Gap |
|-----------|--------|-----|
| Floor (perceptibility) | STRONG (SC-09, >= 15 RGB) | None -- well-specified |
| Palette constraint | STRONG (R >= G >= B, token system) | Gamut too narrow for 4+ distinct body zones |
| Semantic direction | WEAK (C-1 mentions "darken progressively") | No operational protocol for deriving direction from content |
| Content-form coupling | ABSENT | No protocol maps content arc to chromatic arc |
| Cross-channel coupling | ABSENT (described in research, not in gates) | CG-02 and CG-03 would fix this |
| Scale penetration | PARTIAL (Navigation, Page, Section present; Component/Character absent) | CG-04 would fix this |
| Chromatic grammar | ABSENT | No temperature-meaning mapping, no arc taxonomy |
| Accent alignment | PARTIAL (C-5 maps accent to semantic role but not zone temperature) | CG-03 would fix this |

### The One-Sentence Diagnosis

**PV2 ensures chromatic VISIBILITY (>= 15 RGB) but does not ensure chromatic MEANING (color carries the content's semantic direction).**

### Priority Actions

1. **CG-01 (Chromatic Arc Alignment)** -- HIGHEST PRIORITY. Forces the planner to declare a chromatic arc in the build plan. Transforms chromatic from "be different" to "be different in THIS direction."

2. **CG-02 (Chromatic-Density Coupling)** -- HIGH PRIORITY. Couples chromatic to spatial. Prevents random color assignment.

3. **Chromatic Grammar (Section 7)** -- HIGH PRIORITY. Gives the builder a temperature-meaning vocabulary analogous to the structural weight vocabulary.

4. **CG-04 (Scale Penetration)** -- MEDIUM PRIORITY. Extends chromatic story to Component/Character scales.

5. **CG-03 (Accent-Zone Alignment)** -- MEDIUM PRIORITY. Subtle but important for multi-channel coherence.

6. **CG-05 (Convergence Limit)** -- LOWER PRIORITY. Defensive gate against palette collapse.

---

## 9. CHROMATIC CHANNEL VS OTHER CHANNELS: THE ASYMMETRY

The chromatic channel has the WEAKEST operational specification of any channel in PV2:

| Channel | Direction Grammar | Threshold Gate | Content Mapping | Scale Coverage |
|---------|------------------|---------------|-----------------|---------------|
| Structural | YES (4px/3px/1px hierarchy) | YES (SC-02 soul) | PARTIAL (border = importance) | 4/5 scales |
| Typographic | YES (display/body/meta) | YES (SC-03 fonts, SC-11 delta) | YES (type = authority) | 5/5 scales |
| Spatial | YES (padding scale) | YES (SC-10 stacked gap) | PARTIAL (density arc) | 4/5 scales |
| Chromatic | NO (only delta) | YES (SC-09 delta) | NO | 3/5 scales |
| Behavioral | NO | NO | NO | 1/5 scales |
| Material | NO | NO | NO | 2/5 scales |

Chromatic is the MOST specified after structural/typographic/spatial (it has SC-09) but the LEAST directional. It has a gate but no grammar. It can tell you "FAIL -- zones too similar" but cannot tell you "WHY should zone 3 be warmer than zone 2."

This asymmetry is the architectural root of the Ch1-Ch4 paradox: chromatic is designated as the primary metaphor carrier but has the weakest operational infrastructure. The builder defaults to structural (borders) and typographic (sizing) channels because those channels have both floors AND direction. Chromatic has only a floor.

**Fixing this asymmetry requires CG-01 (direction), the chromatic grammar (vocabulary), and CG-02/CG-04 (coupling/penetration).** Without these, chromatic will remain the weakest link in multi-channel coherence even though it should be the strongest.

---

*End of chromatic channel trace.*
