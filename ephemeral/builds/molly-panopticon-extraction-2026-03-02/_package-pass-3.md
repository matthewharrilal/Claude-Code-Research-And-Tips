# Research Package — Pass 3: HARDENING
## For Builder Pass 3 (HARDENING)

This is the FINAL pass before perceptual audit. Focus: defensive quality.
Catch problems, integrate proven CSS, verify structural propositions.

**Soul reminder:** border-radius: 0, box-shadow: none, no gradients, no rgba alpha < 1.0.
3-category borders only (1px/3px/4px — ZERO 2px). Font trinity: Instrument Serif, Inter, JetBrains Mono.
Container 960px. Max 2 callouts per viewport.

---

## 6. ANTI-PATTERNS — RISK PROFILE FOR THIS BUILD

| Anti-Pattern | Risk | WHY This Risk Level for the Panopticon | CSS Mitigation |
|-------------|------|----------------------------------------|----------------|
| Callout Cacophony | **HIGH** | This content has 7 key blockquotes (Part XIII), 4 philosophical warnings (Part VI), 4 anti-pattern subsections (Part X), and multiple inline quotes. The natural impulse is 15-20+ callouts. At 800px viewport, that is 3-4 per screen, destroying signal value. The cartographic metaphor encodes hierarchy through density — callout overload flattens hierarchy into monotone alerting. | Select 6-8 highest-signal items as callouts. Demote remaining to styled blockquotes (left-border only, no tinted background, no label zone). HIGH-signal: "violent gap" (Essence), Goodhart's Law (Gotcha), "we must continue to live outside it" (Essence), bottleneck quote (Essence), Anthropic trade-off (Info), self-imprisonment (Gotcha). DEMOTED: remaining Part XIII quotes -> blockquote styling. CLAUDE.md examples -> code blocks. Anti-pattern subsections -> prose with bold. |
| Code Wall | **HIGH** | The content has 12+ code blocks — bash scripts, directory trees, tmux commands, cron configs, CLAUDE.md examples. Parts IV-V stack 3+ code blocks. Parts VIII-IX stack 3+ more. Without intervention, these become "code walls" — dense blocks of monospace with no interpretive scaffolding. | `pre + pre, .code-block + .code-block { margin-top: 48px; }` Maximum 2 consecutive code blocks without prose connector. Deploy code-block labels above each block: `font-size: 13px; color: #666666; margin-bottom: 8px`. Cap visible code height: `max-height: 400px; overflow-y: auto`. |
| Uniform Density | **HIGH** | 17 Parts of similar length (300-900 words each). Without deliberate intervention, builder applies uniform 48px between all Parts, creating metronomic rhythm — every Part feels equally important. The TC brief describes peaks (opening, Goodhart warning) and valleys (architecture, implementation). Uniform density asserts "everything is equally important," which is never true. | Verify padding varies: Cartouche 64-80px, Grid 40-48px, Annotations 48-56px, Legend 48-64px, Terra 64px. If all padding values are identical or within 8px, density is uniform — the anti-pattern has formed. |
| Whitespace Void | **HIGH** | Four background shifts = four opportunities for stacking gaps. The Grid->Annotations transition (white->tan) is highest risk: if the builder adds `margin-bottom` on Grid AND `margin-top` on Annotations AND `padding` on the border element, total gap could reach 200-300px. The "density debt payment" transition needs breathing but not a void. | Measure total gap at every zone boundary: `padding-bottom + margin-bottom + border-spacing + padding-top` of next zone. Flag any sum > 200px. At the critical Grid->Annotations transition, target 88-96px total (56px breathing gap + 32px structural). |
| Decorative Cartographic Ornament | **MEDIUM** | The cartographic metaphor risks encouraging ornamental map elements — compass roses, decorative border frames, rounded map edges. The TC brief explicitly warns: "RESIST this. The map is functional, not decorative." The 8-domain architecture and correlation engine have visual diagramming potential that tempts decoration. | For every pseudo-element (::before, ::after) and decorative element, ask: "Does this carry information content?" If no, remove it. No `clip-path` creating non-rectangular shapes. No decorative frames around code blocks. The map IS functional: survey coordinates (code blocks), grid squares (domain cards), notation marks (borders). |
| Traffic-Light Color Adjacency | **MEDIUM** | Parts VI and X contain dialectical structures (claim->counter->response). Builder might alternate green tip and coral warning callouts to encode the dialectic — producing exactly the kindergarten color adjacency that diminishes both signals. | No green (#4A9D6B) accent adjacent to coral (#C97065) or red (#E83025). Separate with minimum 48px whitespace OR a neutral element. Use blue (info) + amber (caution) pairing instead of green + coral for dialectical structures. |
| Semi-Transparent Backgrounds | **MEDIUM** | Extensive inline code within prose (domain paths like `~/trades`, `~/health`, configuration keys). Builder will reach for `rgba(0,0,0,0.04)` for subtle tints. OD-AP-003 documents this as the most systematically missed violation — survives multiple review layers. | Search all CSS for `rgba(`. Any `rgba()` with alpha < 1.0 on a background is a violation. Use locked opaque values: `code:not(pre code) { background: #F0EBE3; }` (fully opaque warm tint). |
| Sans-Serif for Essence Body | **MEDIUM** | The key quotes (Part XIII) and philosophical insights (Part I) are Essence callout candidates. Using Inter instead of Instrument Serif italic loses the cartographer's voice at the legend level — undermines the register shift from surveyor (sans) to cartographer (serif). | `.callout--essence .callout__body { font-family: 'Instrument Serif'; font-style: italic; }` All other callout bodies use Inter. |

**CHECK PROCEDURE (do this in order):**
1. **SCAN for soul violations:** Search CSS for `border-radius` (should only appear as `: 0`), `box-shadow`, `rgba(`, `linear-gradient`, `2px`. If any found with non-zero values, fix immediately.
2. **SCAN for whitespace voids:** Measure total gap at every zone boundary. Flag any sum > 200px. Priority: Grid->Annotations transition (the CLIMAX).
3. **SCAN for callout count:** Count all callout elements. If > 8 total on the page or > 2 visible in any 800px vertical slice, demote lower-priority items to blockquote styling.
4. **SCAN for code walls:** Count consecutive code blocks without intervening prose. If 3+ stack with < 32px between them, add prose connectors.
5. **SCAN for uniform density:** List all section padding values. If all identical or within 8px, deploy the zone-specific padding from Section 4.
6. **SCAN for decorative elements:** Review every pseudo-element. Remove any that carry zero information.
7. **SCAN for Essence font:** Inspect every purple-accented callout. If body font-family is 'Inter', switch to Instrument Serif italic.

---

## 7. PROVEN CSS PATTERNS

### Pattern 1: Zone Transition via Border + Spacing (Major Boundaries)

From DD-004, OD-004, CD-005 — convergent across 3 case studies:
```css
/* Major zone boundary — used between Cartouche/Grid, Grid/Annotations */
.zone-boundary--major {
  border-top: 3px solid #E83025;  /* Primary accent — structural significance */
  padding-top: 48px;
  margin-top: 0;  /* Border absorbs the visual gap — no double spacing */
}
/* Minor zone boundary — used between Annotations/Legend, Legend/Terra */
.zone-boundary--minor {
  border-top: 1px solid #E0D5C5;  /* Subtle — the transition is atmospheric, not structural */
  padding-top: 48px;
  margin-top: 0;
}
```
**When to deploy:** At every zone transition. Major boundaries (where background color AND typography register shift simultaneously) get 3px. Minor boundaries (where only one property shifts) get 1px.

### Pattern 2: Code Block as Survey Coordinate

From COMP-F-009 (2-zone dark code block), adapted for cartographic measurement data:
```css
pre, .code-block {
  background: #1A1A1A;
  color: #FAFAF5;
  border: 3px solid #E0D5C5;          /* Cat 1 structural border */
  padding: 24px 32px;
  margin: 32px 0;                      /* Isolation from surrounding prose */
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow-x: auto;
}
.code-block__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: #666666;
  margin-bottom: 8px;
  /* "Domain: ~/trades" or "Launch script" — the measurement label */
}
```
**When to deploy:** On all 12+ code blocks. The label above each code block tells the reader WHAT is being measured. In the cartographic metaphor, code blocks are precise coordinates rendered by the surveyor's instrument.

### Pattern 3: Dense Zone Typography (Survey Grid Sections)

From DD-004 typography compression, validated across CRESCENDO builds:
```css
.zone--grid {
  font-size: 1rem;           /* 16px — standard field-worker voice */
  line-height: 1.7;
  letter-spacing: 0;
}
.zone--grid h2 {
  font-family: 'Instrument Serif', serif;
  font-size: 1.625rem;       /* 26px — surveyor heading */
  letter-spacing: -0.015em;  /* Tighter tracking = confidence in the data */
  margin-bottom: 24px;
}
.zone--grid h3 {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 1.375rem;       /* 22px — sub-region label */
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}
```
**When to deploy:** In Survey Grid (Parts II-V) and Field Notes (Parts VIII-XII) where density is highest. The typography compresses subtly — tighter letter-spacing, smaller heading margins — signaling "you are deeper in the survey data."

### Pattern 4: Blockquote as Marginal Annotation (Annotations Zone)

From OD-004 confidence encoding + TC brief Invitation 4 (asymmetric treatment):
```css
.zone--annotations blockquote {
  margin-left: 48px;              /* Asymmetric — written in the margin */
  margin-right: 0;
  padding: 24px 24px 24px 20px;
  border-left: 3px solid #666666; /* Lighter weight = contested territory */
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;           /* 15px — annotator voice, slightly reduced */
  color: #666666;
  line-height: 1.75;
}
.attribution {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: #666666;
  margin-bottom: 8px;
  /* @provisionalidea, @flutterwhat — another hand on the map */
}
```
**When to deploy:** Parts VI-VII only. The asymmetric left margin signals "these are annotations written after the main survey." The lighter border weight signals contested territory. The reduced font-size signals a different voice. All three signals CONVERGE to create the marginal-annotation effect the TC brief demands.

### Pattern 5: Legend Entry with Semantic Color Code

From TC brief Invitation 2 + COMP-F-003 (callout family DNA):
```css
.legend-entry {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.4;
  padding: 24px 32px;
  margin: 48px 0;               /* One entry per viewport rhythm */
  border-left: 4px solid;       /* Color varies by quote category */
}
.legend-entry--legibility { border-left-color: #4A90D9; } /* Blue — self-legibility */
.legend-entry--warning { border-left-color: #D97706; }    /* Amber — warnings */
.legend-entry--capability { border-left-color: #E83025; } /* Red — capability claims */
.legend-entry--philosophy { border-left-color: #7C3AED; } /* Purple — Essence/wisdom */
```
**When to deploy:** Part XIII's 7 key quotes. Each quote gets a color-coded left border based on its semantic category. The reader encountering these should feel like decoding the map's symbol key. NOT full callout treatment (would trigger cacophony at 7 items) — use blockquote styling with accent borders.

### Pattern 6: Mode-Transition Label (Between Registers)

From OD-006 mode-transition breathing + S5 protocol analysis:
```css
.register-transition {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px 0;
  margin: 40px 0;
  color: #666666;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.register-transition::before,
.register-transition::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #E0D5C5;
  /* Survey region boundary markers: a thin ruled line flanking the label.
     "THE SURVEY GRID" or "MARGINAL ANNOTATIONS" */
}
```
**When to deploy:** At each major zone transition. The mono uppercase label signals the new register. Deploy between Cartouche/Grid, Grid/Annotations, Annotations/Field Notes, and Field Notes/Legend. The label names the map region the reader is entering.

---

## 8. STRUCTURAL PROPOSITIONS

These are hypotheses about how the cartographic survey station metaphor should manifest visually.
Test each against your build. If the build does not embody a proposition, adjust CSS to move toward it.

1. **The survey deepens, the notation densifies:**
   As the reader scrolls from the philosophical cartouche (Part I) into the technical grid (Parts II-V), the page should feel progressively tighter — letter-spacing decreases, padding compresses, code blocks appear, line-height tightens from 1.8 to 1.7.
   - Evidence check: Screenshot Part I and Part IV side-by-side. Does Part IV feel measurably denser?
   - If absent: Increase cartouche padding to 80px. Decrease grid padding to 40px. Add `letter-spacing: -0.01em` on grid headings.

2. **Zone boundaries should be felt, not only seen:**
   The transition between zones should create a perceptual shift (background, typography, spacing all change together) without ONLY relying on heavy borders. Cover the border at each zone boundary — can you still feel the transition through background and typography alone?
   - Evidence check: Temporarily remove all zone-boundary borders. Does the page still have structure?
   - If absent: Ensure each zone has a DISTINCT combination of: background color + heading font-size + section padding. If two adjacent zones share all three properties, they are perceptually merged.

3. **The annotations should feel like a different hand:**
   Parts VI-VII should NOT feel like "more content in the same format." They should feel like someone picked up the map and wrote critical notes in the margins — a different voice, a different ink. The asymmetric left margin, the annotator font-size (15px vs 16px body), and the lighter border weight (3px in #666666 vs #1A1A1A) should CONVERGE to create this effect.
   - Evidence check: Read Parts V and VI back-to-back at 1440px. Does Part VI feel like a register shift, or like a continuation?
   - If absent: Increase the left margin on annotation blockquotes to 48px. Shift to `#FAF5ED` background if not already applied. Deploy the `.attribution` pattern (monospace author handle above quotes).

4. **The legend should decode the map:**
   Part XIII's key quotes, displayed as legend entries with color-coded left borders, should feel like the symbol key at the bottom of a cartographic map. The reader encountering blue (self-legibility), amber (warning), and red (capability) borders should feel like they are learning what the map's symbols MEAN — retroactively illuminating everything they scrolled through.
   - Evidence check: After reading Part XIII, mentally re-read Parts I and VI. Do the legend colors map to quote categories you recognize?
   - If absent: Ensure at least 3 distinct accent colors appear in the legend entries. Ensure 48px spacing between entries creates one-per-viewport rhythm.

5. **The terra incognita should feel like the map running out:**
   The final zone (Parts XV-XVII) should feel like the edge of the known — the survey's measurements ending, the ruled lines thinning, the questions floating in unmapped space. If using the bedrock dark background (#1A1A1A), the inverted text should feel like questions asked around a camp lantern after fieldwork ends. If using parchment, the generous spacing should feel like blank paper waiting for future surveys.
   - Evidence check: Does Part XVI feel like the SPARSEST zone on the page? Does it feel like an ending that acknowledges incompleteness?
   - If absent: Increase padding to 64px+. Reduce border-weight to 1px or none. If dark background feels forced, revert to parchment — the proposition is that the zone feels sparse and open, not that it must be dark.

---

## Agent Log: Synthesizer (Pass 3)
- Anti-patterns risk-profiled: 8 (3 HIGH: callout cacophony, code wall, uniform density; 1 HIGH: whitespace void; 3 MEDIUM: decorative ornament, traffic-light adjacency, semi-transparent backgrounds, sans-serif essence body; 1 LOW omitted: same-velocity stacking — addressed by code-wall mitigation)
- CSS patterns included: 6 (zone transition, code block, dense typography, marginal annotation, legend entry, mode-transition label)
- Propositions defined: 5 (survey deepening, zone boundaries, annotations voice, legend decoding, terra incognita edges)
- Output size: 150 lines
