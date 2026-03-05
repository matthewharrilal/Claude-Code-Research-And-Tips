# TC Brief Template — Pipeline v3

**Purpose:** This is the template the Brief Assembler merges with the Content Map to produce the Execution Brief. Follow this structure EXACTLY.

**Total target:** ~100-165 lines. Err toward more compositional detail, not less.

---

## TIER 1: IDENTITY — The World You Inhabit (~15 lines)

{For each of the 10 soul constraints SC-01 through SC-10, write the WORLD-DESCRIPTION text ONLY. Do NOT include "Gate check" or "CSS rule" fields. Frame as "this world IS" not "you must not."}

Extract the "World-description" field from each SC-XX table in artifact-identity-perception.md "1.2 Soul Constraints." Write as flowing prose — one constraint per paragraph, 1-2 sentences each.

**Template text (use verbatim, these are the 10 soul world-descriptions):**

Every surface is sharp. Corners are cut, not curved. There are no soft edges in this world.

Light is direct. Nothing floats. Nothing hovers above the page. Surfaces sit flat against each other.

The page has a spine. Content lives within 940-960px. The spine holds.

This is a warm world. Colors carry warmth -- red leads (#E83025), cream grounds (#FEF9F5), near-black anchors (#1A1A1A). Five accent colors complete the palette, all warm.

Three typefaces. No more. Instrument Serif for headings. Inter for body. JetBrains Mono for code.

Color is flat. Backgrounds are solid. Transitions between colors happen at boundaries, not within surfaces.

Every element earns its place. Nothing is decorative. If it does not serve the content, it does not exist.

Borders speak. 4px = primary emphasis. 3px = section-level. 1px = subtle articulation. This hierarchy is absolute.

The header is the page's signature. Dark background. 3px red bottom border. Dense. Purposeful.

Text breathes at 1.7 line-height. Prose never exceeds 70 characters per line. Third-level headings are italic.

---

## TIER 2: PERCEPTION PHYSICS — The Natural Laws (~8 lines)

{For each of the 6 perception thresholds PT-01 through PT-06, write as NATURAL LAW + CALIBRATION. Include the full calibration range. Explicitly state: "Use the FULL RANGE. A page that uses only floor values is technically correct but perceptually flat."}

**Template text (adapt calibration values from artifact-identity-perception.md "2.3 Perception Calibration Table"):**

Adjacent backgrounds differ by at least 15 RGB points. Below that, the human eye cannot distinguish them. 15 is the floor, not the target. Calibration: 15 = subtle (floor), 20 = minimum compositional (aim here), 25 = confident, 50 = dramatic. Use the full range.

Letter-spacing below 0.025em is invisible. When applying letter-spacing, stay above 0.025em. Compositional range: 0.03-0.05em.

When padding-bottom + margin-bottom + padding-top between content blocks exceeds 120px total, the eye registers a void -- the page appears broken, not breathing. Compositional range: 60-90px (generous but purposeful).

No single margin or padding value exceeds 96px. If a transition needs more separation, use a structural element, not more whitespace.

Container width: 940-960px. Content beyond 960px loses the reader's eye.

### Signal Declarations

Place signal declarations as HTML comments in the first 20 lines of output. These declare which behavioral systems are active. Format: `<!-- SIGNAL-NAME: true/false -->`. At minimum, declare: `<!-- SCROLL-REVEALS: true -->` if any scroll-triggered animations exist, `<!-- HOVER-STATES: true -->` if hover interactions exist, `<!-- RESPONSIVE: true -->` if breakpoint-specific CSS exists.

---

### PRIORITY OVERRIDE: Tier 2 vs Tier 3 Conflicts

When Tier 3 creative decisions conflict with Tier 2 perception physics:
- **Tier 2 WINS** for: background deltas (>= 15 RGB), letter-spacing (>= 0.025em), stacked gaps (<= 120px), single margins (<= 96px)
- **Tier 3 WINS** for: metaphor interpretation, component selection, layout patterns, color accents, typography beyond thresholds
- Zone backgrounds specified in Tier 3 MUST satisfy Tier 2 delta requirements — creative authority does not override perception physics

**Worked examples (how to resolve specific conflicts):**
- Brief says Zone 3 background `#f5f2ec` but Tier 2 requires delta >= 15 from Zone 2 `#faf7f0` — delta is only 5 — override to `#e8e2d5` (delta 24, confident intensity)
- Brief says Zone 4 letter-spacing `0.01em` for dense reference text but Tier 2 requires >= 0.025em — override to `0.03em` (compositional range)
- Brief metaphor suggests "compressed industrial" styling for Zone 2 with 40px padding — Tier 3 WINS here because 40px is within Tier 2 limits (under 96px single, under 120px stacked) — keep the metaphor-driven choice

---

## TIER 3: COMPOSITIONAL FRAMEWORKS (~50 lines)

This tier is the HEART of the brief. The Brief Assembler synthesizes this section from:
- Content Map (zone architecture, density arc, content tensions, metaphor seeds)
- artifact-builder-recipe.md (mechanism vocabulary, creative decisions)
- artifact-routing.md (multi-coherence framework, temporal composition)

### Zone Background Assignments (Tier 2 LOCKED)

{For each zone, specify the background hex from artifact-value-tables.md. These are FIXED — the builder may modify accents, typography, spacing, and components, but zone background hex values come from value-tables.md and are NOT creative territory.}

| Zone Boundary | Color A | Color B | RGB Delta | Intensity |
|---------------|---------|---------|-----------|-----------|
| {Z1 -> Z2}    | {hex}   | {hex}   | {delta}   | {subtle/confident/dramatic} |
| {Z2 -> Z3}    | {hex}   | {hex}   | {delta}   | {subtle/confident/dramatic} |
| {... one row per adjacent zone pair} |

**Rules:** Every delta >= 15 RGB (perception floor). Compositional target: >= 25 RGB at 3+ boundaries. Select from the 20 pre-computed pairs in artifact-value-tables.md.

### Multi-Coherence (6 channels, boundary-by-boundary)

**The 6 coherence channels:**
1. **Background color** -- zone-to-zone deltas using the full 15-50 RGB range (VALUES LOCKED above)
2. **Typography** -- font-size, weight, letter-spacing shifts at boundaries
3. **Spacing** -- padding and margin shifts encoding density changes
4. **Borders** -- 4px/3px/1px weight shifts marking hierarchy transitions
5. **Color accents** -- accent color or tint shifts signaling zone character
6. **Components** -- component density and variant shifts per zone

**Boundary requirements (numbered):**
1. At each zone boundary, deploy >= 3 distinct channels (background, typography, spacing, border, accent, component type). A boundary with fewer than 3 channels is a wall with a window, not a doorway.
2. Average across all boundaries: >= 4 channels per boundary.
3. At edge-zone boundaries (first and last zone transitions), deploy >= 3 channels. Edge zones receive equal investment to dramatic boundaries.
4. Specify >= 3 distinct transition types and MAP each to a specific boundary:
   - light (1px border + 48px gap = legato)
   - medium (3px border + 80px gap = breathing rest)
   - heavy (colored background + text = full stop)
5. Every boundary mapping is EXPLICIT: "Z1->Z2 = light (similar density), Z2->Z3 = heavy (entering peak density), Z3->Z4 = medium (releasing from peak)." The builder receives WHICH transition at WHICH boundary.

### Structural Metaphor: {Metaphor Name from Content Map}

{Map the recommended metaphor seed to page structure. Explain how the metaphor maps to zone groups. Name CSS custom properties by CONCEPT (--factory-intake, --dispatch-tactical) not by position (--bg-z1). Concept-based naming is the strongest single indicator of composed mode.}

### Density Arc: {PATTERN_NAME from Content Map}

```
{ASCII density arc from Content Map}
```

{Per-zone height estimates from Content Map. Density labels per zone.}

### Content-Form Coupling

{For each zone from the Content Map, specify the content register (NARRATIVE/REFERENCE/CODE) and its CSS implications:}
- NARRATIVE = generous line-height, wider measure, breathing room
- REFERENCE = tighter spacing, tables, possible multi-column
- CODE = monospace heavy, structured

**Content-Type Conditional (adapt Tier 3 emphasis based on page content type):**

IF page is predominantly **PROSE** (essays, arguments, long-form writing):
- Focus on typography and spacing as primary differentiators between zones
- Metaphor should be ATMOSPHERIC (felt through rhythm and proportion, not through structural novelty)
- Density arc drives the argument arc — dense where the argument peaks, spacious where it breathes
- Fewer zone boundaries needed (3-4 total) — let the prose flow without excessive interruption
- Components: pull quotes, callouts for emphasis, minimal tables/grids

IF page is predominantly **MIXED** (prose + reference + code + media):
- Deploy FULL multi-coherence framework — all 6 channels active at most boundaries
- Metaphor should be STRUCTURAL (expressed through layout shifts, grid changes, component adaptation)
- More zone boundaries (4-6 total) — each content type gets its own spatial treatment
- Components: full range — callouts, tables, code blocks, grids, cards
- Layout variety requirement is highest here — single-column must not exceed 50% of zones

IF page is predominantly **VISUAL** (galleries, diagrams, image-heavy):
- Focus on layout and spacing as primary differentiators — reduce typography guidance
- Image containers and galleries are priority components — use grid layouts liberally
- Typography takes a supporting role — fewer type scale shifts, let images carry zone character
- Whitespace around images is a first-class design element (D-06 is especially relevant)
- Fewer text-based mechanisms — spatial and material mechanisms carry the composition

### Creative Authority + Components

You have 80% creative authority within identity constraints. The soul (Tier 1) and physics (Tier 2) are non-negotiable. Everything else -- how you interpret the metaphor, which mechanisms you deploy, how zones transition -- is yours.

Use components from components.css as your structural toolkit. Aim for 8+ components from components.css. Adapt rather than invent — check the component library BEFORE writing custom CSS. Callouts should modulate per zone (generous padding in sparse zones, compressed in dense zones, heavier border in emphasis zones). Gas Town used 3/26 available components; the target is 8+.

### CSS Value Table

Reference `tokens.css` for exact values. Key vocabulary: spacing scale (4-96px in 4px increments), border weights (4px/3px/1px), type scale (0.75rem to 3rem), color palette (8 primary + 5 accent + 3 zone + 4 text hierarchy). Build with 800-1200 CSS lines total.

---

## TIER 4: DISPOSITION (D-01 through D-09, ~45 lines MINIMUM)

{For each disposition D-01 through D-09, write a short instruction with PURPOSE and specific techniques relevant to this page's content. Tag each as [EXPERIMENTAL]. Include 1-2 content-specific observations per disposition. D-09 (The Quiet Zone) should identify which specific middle-third zone the assembler recommends as the quiet zone candidate, based on content density from the Content Map.}

**CRITICAL: Each disposition MUST include at least ONE specific CSS property:value pair.** Purpose-only dispositions produce vague output. If Tier 4 falls below 35 lines, you are under-specifying technique vocabulary.

INSUFFICIENT: "D-04: Create a second-half surprise moment."
SUFFICIENT: "D-04: Create 1-2 second-half moments. Techniques for this content: dark inversion block (`background: var(--color-text); color: var(--bg-primary);`) at the Principles zone where the argument pivots. Scale break: `font-size: 36px` pull quote of the 'nature prefers colonies' insight."

### D-01: Content-Register Reading [EXPERIMENTAL]
**PURPOSE:** Read each section's character before choosing its CSS treatment. {Content-specific: identify which zones are NARRATIVE, REFERENCE, or CODE from the Content Map.}

### D-02: Room Perception at Boundaries [EXPERIMENTAL]
**PURPOSE:** Each zone transition should feel like entering a different room. Combine multiple channels at each boundary. A boundary that only changes one channel is a wall with a window. A boundary that changes three channels is a doorway to a new space.

### D-03: The Signing Frame [EXPERIMENTAL]
**PURPOSE:** Build as if you will sign this page. Every element expresses certainty: consistent border-weight hierarchy, restraint, dense purposeful header, zero decorative elements.

### D-04: The Second-Half Moment [EXPERIMENTAL]
**PURPOSE:** Somewhere in the second half, create a moment that breaks the established pattern. Techniques: scale break, color inversion, layout rupture, structural inversion. 1-2 moments only. {Content-specific observation about what the content lacks or needs.}

### D-05: The Reader's Scroll [EXPERIMENTAL]
**PURPOSE:** Three dimensions: section height (vary -- not uniform), visual density (loud and quiet zones), transition weight (staccato vs legato). Closure appears only in the final 2-3 viewports, earned by the journey.

### D-06: Negative Space as Shape [EXPERIMENTAL]
**PURPOSE:** Whitespace is a deliberate shape, not emptiness. Vary padding between zones. Let dense zones compress and sparse zones breathe. Stacked gaps stay under 120px total but VARY within that range.

### D-07: Edge Intentionality [EXPERIMENTAL]
**PURPOSE:** Every edge is a decision. Techniques: hover states, typographic micro-refinement (tabular-nums, text-indent), zone-specific ::selection colors, first/last child edge treatments. Distribute more in high-density zones.

### Hover Behavior Vocabulary (MANDATORY — 100% loss rate in prior builds)

Interactive elements reveal depth on hover. Deploy >= 3 hover interactions across the page. Cards lift (`transform: translateY(-2px); border-color: var(--color-accent);`). Links surface underlines (`text-decoration-color` transition from transparent). Expandable sections hint at content (`background` shifts toward zone accent on hover). Every hover uses `transition: 0.2s ease`.

```css
/* Card hover — lift + accent border */
.card:hover { transform: translateY(-2px); border-color: var(--color-accent); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
/* Link hover — underline reveal */
a:hover { text-decoration: underline; text-decoration-color: currentColor; }
/* Expandable hover — background hint */
details summary:hover { background: color-mix(in srgb, var(--zone-bg) 85%, var(--color-accent)); }
```

### D-08: The Skeleton Test [EXPERIMENTAL]
**PURPOSE:** Remove all content mentally. Does the skeleton (spacing, borders, backgrounds, typography framework) still have shape? If it looks like a uniform stack of boxes, it is applied mode. If it has rhythm and proportion, it is composed mode.

### D-09: The Quiet Zone [EXPERIMENTAL]
**PURPOSE:** Designate at least one zone in the middle third as deliberately plainer (2-3 mechanisms vs 4-5, single-column prose, no bento grid). Preserve family membership (zone background, typography, border-weight). {Content-specific: identify the recommended quiet zone candidate from the Content Map density arc — typically the zone BEFORE or AFTER the peak density zone.}

---

## CONTENT MAP APPENDIX (~15 lines, compressed)

{Append a COMPRESSED Content Map from Phase 0. Include ONLY: zone architecture table (zone ID | name | density | register), recommended metaphor seed (1 line), density arc ASCII (3 lines), reader profile (1 line). Omit content tensions and alternate metaphor seeds — those are already synthesized into Tier 3.}

---

## ASSEMBLY RULES

1. Total brief: ~100-165 lines. Err toward more compositional detail, not less.
2. PRESERVE RECIPE FORMAT: Use verbs like "Build," "Create," "Derive," "Map" -- NOT "Verify," "Fail if," "Must be."
3. Tier 1 is VERBATIM from the template text above (the 10 soul world-descriptions).
4. Tier 2 is VERBATIM from the template text above (adapt calibration only if thresholds change).
5. Tier 3 is SYNTHESIZED from the Content Map + reference artifacts. This requires creative judgment.
6. Tier 4 is ADAPTED per content -- each D-01 through D-09 gets 1-2 content-specific observations.
7. Content Map Appendix is COMPRESSED (zone table + metaphor + arc + reader only).
8. Do NOT include gate thresholds in pass/fail format.
9. For COMPOSED mode: multi-coherence boundary descriptions are ESSENTIAL.
