# Guardrail vs Playbook Classification — All 97 Rules

**Analyst:** guardrail-classifier (Opus 4.6)
**Date:** 2026-02-17
**Source:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines, read in full)
**Audit data:** 00-AUDIT-DATA.md (109 lines, read in full)

---

## EXECUTIVE SUMMARY

| Classification | Count | Percentage |
|---------------|-------|------------|
| **GUARDRAIL** | **62** | **63.9%** |
| **PLAYBOOK** | **17** | **17.5%** |
| **HYBRID** | **18** | **18.6%** |
| **Total** | **97** | **100%** |

**The ratio is 3.6:1 guardrail-to-playbook.** For every instruction telling an agent what TO DO, there are 3.6 instructions telling them what NOT to do or what ceiling/floor to stay within. This is THE diagnosis.

**Even the "playbook" rules are thin:** most specify WHAT to produce but not HOW to produce it. A playbook that says "use 3 transition types" without showing what each looks like in CSS is still a guardrail wearing playbook clothing.

---

## COMPLETE CLASSIFICATION TABLE

### B1. SPATIAL (17 rules: S-01 through S-17)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| S-01 | Container width outside 940-1100px = FAIL | **GUARDRAIL** | "Set `.page-container { max-width: 960px; margin: 0 auto; padding: 0 48px; }`. At 1440px viewport, content area = 960px centered with 240px margins each side." |
| S-02 | Content-to-void ratio < 60:40 = FAIL | **GUARDRAIL** | "Target 70:30 content-to-void. Achieve by: (1) section padding 48-64px top/bottom, (2) paragraph margin-bottom 16-20px, (3) h2 margin-top 32-48px, (4) transition zones 48-80px. Count content height: sum all text blocks + images + callouts + code blocks." |
| S-03 | Header <= 20% of first viewport (288px at 1440px) | **HYBRID** | "Header recipe: 64px padding-top, 48px padding-bottom, site-title 14px Inter caps + page-title 42px Instrument Serif + 24px subtitle Inter. Total: ~200-240px. Dark background (#1A1A1A or near-black from tokens)." |
| S-04 | Footer MUST exist with visible content | **GUARDRAIL** | "Footer recipe: 48px padding, 1px border-top var(--color-border), 3-4 lines of closing text (project name, date, methodology note), same typography as body. Mirror header's weight without duplicating its visual treatment." |
| S-05 | All planned sections present with >= 200px content height | **GUARDRAIL** | "Each section needs minimum: 1 heading (28-32px), 2-3 paragraphs (48-72px each), 16px gaps = ~180-250px minimum. If a section has < 200 words, MERGE with adjacent rather than creating a short section." |
| S-06 | >= 5 content sections | **GUARDRAIL** | "For 2500-4000 word content: plan 6-8 sections. Section 1: orientation (300-500w). Sections 2-6: body (400-600w each). Section 7-8: resolution + closing (200-400w each). Each section has distinct purpose stated in plan." |
| S-07 | CPL 45-80 characters | **GUARDRAIL** | "At 960px container with 48px padding each side, content area = 864px. At 16px font-size, CPL = 864/16/0.6 = 90 -- TOO HIGH. Solution: add content max-width: 720px or use columns. 720px/16/0.6 = 75 CPL (target). Always verify with getBoundingClientRect." |
| S-08 | Heading spacing ratio >= 1.5:1 | **GUARDRAIL** | "h2: margin-top 48px, font-size 28px (ratio = 1.71). h3: margin-top 32px, font-size 20px (ratio = 1.6). These ratios create visible 'breathing room' above headings that signals topic change." |
| S-09 | Max spacing between content elements: 96px total | **GUARDRAIL** | "Standard section gap: margin-bottom 48px + padding-top 48px = 96px (maximum). Within section: paragraph margin-bottom 16px, heading margin-top 32px. Transition zone: use border-top 1px + padding-top 48px (total visible gap ~64px including border)." |
| S-10 | No contiguous void > 2160px | **GUARDRAIL** | "Every 1000px of scroll should contain at minimum: 2 paragraphs + 1 heading OR 1 paragraph + 1 callout/aside + 1 heading. If estimated section height > 1500px, insert a callout, aside, or visual break." |
| S-11 | No single CSS margin/padding > 96px | **GUARDRAIL** | "Use spacing scale from tokens.css: var(--space-4) through var(--space-max-zone). Maximum var(--space-max-zone) = 96px. Section padding: 48-64px. Transition gap: 64-80px margin + border. NEVER hand-code a value > 96px." |
| S-12 | No viewport position < 30% content coverage | **GUARDRAIL** | "At every scroll position, at least 270px of 900px viewport should be content. Prevent by: (1) no more than 2 consecutive empty-ish elements, (2) callouts/asides between long sections, (3) designed moments in transition zones." |
| S-13 | >= 1 designed moment past 50% scroll depth | **GUARDRAIL** | "Designed moment recipe: a callout box (border-left 3-4px + padding 24px + background shift), a pull-quote (Instrument Serif 24px + border-top/bottom 1px), a data display (grid of 2-3 key metrics), or a code example with annotation. Place one at ~60% and one at ~80%." |
| S-14 | Content-to-void graduated thresholds | **GUARDRAIL** | "Pre-build: estimate height, confirm >= 60% content. Post-skeleton: measure, confirm >= 50%. Post-mechanism: measure, confirm >= 70% (mechanisms ADD content elements like callouts, asides, visual breaks)." |
| S-15 | Zone count ceiling by word count | **HYBRID** | "Zone count is already prescriptive. Add: each zone template includes specific CSS structure. Zone 1 (warm): background var(--color-cream), padding 64px 0. Zone 2 (neutral): background var(--color-warm-gray-1), padding 48px 0. Zone 3 (dense): background #fefefe, padding 32px 0." |
| S-16 | Scale Confidence Index >= 0.60 | **GUARDRAIL** | "To achieve SCI >= 0.60: ensure at least 8 of 14 mechanisms have CCS >= 0.30. For each mechanism, verify: removing it changes the perceived meaning of at least 4 other mechanisms. If a mechanism is decorative (removing it changes nothing), demote it." |
| S-17 | First 1.5 viewports >= 3 visual textures | **HYBRID** | "In the first 2160px (header + first 1-2 sections), ensure the reader sees: (1) border-weight variation (1px divider + 3px accent), (2) background color shift (dark header -> warm cream -> slightly different warm), (3) typographic contrast (Instrument Serif heading + Inter body + possible JetBrains Mono code). These 3 textures are AUTOMATIC if header + first section are built correctly." |

**B1 Subtotal: 13 GUARDRAIL, 1 HYBRID (S-03), 2 HYBRID (S-15, S-17), 0 PLAYBOOK = 13G / 4H / 0P**

---

### B2. SOUL (10 rules: U-01 through U-10)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| U-01 | border-radius: 0 | **GUARDRAIL** | "All elements use sharp 90-degree corners. This creates the rectilinear, architectural feel. Buttons, cards, callouts, code blocks -- all square." |
| U-02 | box-shadow: none | **GUARDRAIL** | "Depth is communicated through BORDER WEIGHT, not shadow. 1px border = standard element. 2px border = elevated importance. 3-4px border = high emphasis. Background color shift = containment." |
| U-03 | No filter: drop-shadow() | **GUARDRAIL** | Same as U-02. "Use border-weight hierarchy for depth: 1px/2px/3px/4px." |
| U-04 | No rgba() or opacity < 1 on backgrounds | **GUARDRAIL** | "Use solid colors from tokens.css. For depth layering: var(--color-cream) base, var(--color-warm-gray-1) for elevated, var(--color-warm-gray-2) for contained. Each is a SOLID color, no transparency." |
| U-05 | No gradients | **GUARDRAIL** | "Zone boundaries use HARD color changes, not blended transitions. Section A: background #fefcf3. Section B: background #f5f0e8. The HARD edge between them is the zone boundary signal." |
| U-06 | No #000000 or #FFFFFF | **GUARDRAIL** | "Near-black: #1A1A1A (headings, high-emphasis text). Body text: #3D3D3D. Cream white: #fefcf3 (backgrounds). All from tokens.css variable definitions." |
| U-07 | Instrument Serif: display headings ONLY | **HYBRID** | "Typography deployment: Instrument Serif 28-42px for h1/h2 ONLY. Inter 16-20px for body, h3-h6, UI elements, callout text. JetBrains Mono 14-15px for code blocks and inline code. NEVER mix -- each font has ONE job." |
| U-08 | No cool-toned grays | **GUARDRAIL** | "Gray scale (warm-shifted): #f5f0e8, #e8e0d4, #d4ccc0, #8a8078, #5c5248, #3d3d3d, #1a1a1a. ALL grays have warm undertones. Test: if the gray looks blue-ish on a warm cream background, it is wrong." |
| U-09 | Typography trinity: Instrument Serif / Inter / JetBrains Mono | **PLAYBOOK** | Already prescriptive -- specifies exact fonts. But MISSING: size scale, weight scale, tracking values, line-height values for each font. |
| U-10 | Soul enforcement: *:where(:not...) { border-radius: 0 } | **PLAYBOOK** | Already prescriptive -- gives exact CSS rule. But a DEFENSIVE playbook (enforcing a guardrail). |

**B2 Subtotal: 8 GUARDRAIL, 1 HYBRID (U-07), 1 PLAYBOOK (U-09, though thin). Reclassifying U-10 as HYBRID since it is a guardrail enforcement mechanism in playbook form = 8G / 2H / 0P**

Wait -- U-09 and U-10 DO specify exact values. Classification stands:

**B2 Subtotal: 8G / 1H / 1P**

---

### B3. COMPOSITIONAL (21 rules: C-01 through C-21)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| C-01 | Per-category minimums: Spatial 1+, Hierarchy 1+, Component 1+, Depth 1+, Structure 1+ | **GUARDRAIL** | "Spatial mechanism starter: use SPACING SHIFT (vary padding 32/48/64/80px across sections). Hierarchy starter: use TYPOGRAPHIC SCALE (h2 28px + h3 20px + body 16px minimum). Component starter: create 1 CALLOUT BOX (border-left 3px + padding 24px + warm background). Depth starter: use ZONE BACKGROUNDS (alternate 2-3 background colors). Structure starter: use SECTION DIVIDERS (1px border-top between major sections)." |
| C-02 | Mechanism target 12-14, hard cap 16 | **GUARDRAIL** | "Start with these 8 CORE mechanisms (always deploy): (1) spacing shift, (2) typographic scale, (3) zone backgrounds, (4) section dividers, (5) callout boxes, (6) border-weight hierarchy, (7) pull quotes, (8) density variation. Then add 4-6 from: code formatting, data displays, visual anchors, transition markers, content grids, list styling." |
| C-03 | Mechanism density <= 4 OPERATING per viewport | **GUARDRAIL** | "In any 900px scroll window, the reader should see 2-3 mechanisms actively contributing. Example: at scroll position 3000px, the reader sees (1) warm cream background zone, (2) 3px border-left on a callout, (3) Instrument Serif heading. That is 3 mechanisms operating. Adding a pull-quote + code block + data grid in the same viewport = too many." |
| C-04 | Every third of page has >= 2 distinct mechanisms active | **GUARDRAIL** | "Plan mechanism distribution: Top third (0-33%): spacing shift + zone backgrounds + typographic scale + callout. Middle third (33-66%): border-weight variation + pull quote + density shift + code block. Bottom third (66-100%): designed moment callback + list styling + closing callout + footer structure." |
| C-05 | >= 3 transition types: SMOOTH/BRIDGE/BREATHING | **PLAYBOOK** | Already somewhat prescriptive. MISSING the actual CSS. "SMOOTH: margin-bottom 48px + border-top 1px solid var(--color-border). BRIDGE: margin 64px 0, background var(--color-warm-gray-1), padding 32px, contains 1-3 sentences of cognitive reframe prose. BREATHING: margin 80px 0, border-top 3px solid var(--color-border), padding-top 80px." |
| C-06 | No two adjacent transitions identical type | **GUARDRAIL** | "Sequence example: SMOOTH -> BRIDGE -> SMOOTH -> BREATHING -> SMOOTH -> BRIDGE. Alternate to create rhythm. Never BRIDGE-BRIDGE or BREATHING-BREATHING." |
| C-07 | Bridge transitions MUST contain cognitive-reframe prose | **PLAYBOOK** | Already prescriptive but thin. MISSING: "Bridge prose template: 'Now that we understand [previous concept], we can examine [next concept].' or 'This pattern reveals something deeper about [theme].' 1-3 sentences, active voice, second person. The prose JUSTIFIES the structural break." |
| C-08 | >= 2 reinforcing pairs (GATE MINIMUM) | **GUARDRAIL** | "Reinforcing pair recipe: PAIR 1: border-weight + zone-background (3px border appears ONLY in sections with warm cream background -- border signals 'pay attention here', warm background signals 'comfort zone'). PAIR 2: typographic-scale + spacing (larger headings get MORE whitespace above -- size and space both say 'new major topic')." |
| C-09 | >= 1 designed moment per scroll quartile | **GUARDRAIL** | "Designed moment recipes: Q1 (0-25%): context/orientation box with border + background shift. Q2 (25-50%): pull-quote in Instrument Serif with border-top/bottom. Q3 (50-75%): data display or key-insight callout with left-border accent. Q4 (75-100%): bookend/callback element that echoes header treatment." |
| C-10 | >= 2 purpose-built components invented for THIS content | **GUARDRAIL** | "Examine your content. What structures does it DEMAND that no generic component serves? Example: if content discusses a 3-phase process, build a PHASE INDICATOR (numbered, with border progression 1px->2px->3px). If content compares approaches, build a COMPARISON FRAME (side-by-side with border separation). The component must be INSEPARABLE from the content." |
| C-11 | Section spacing MUST vary: >= 3 distinct spacing values | **GUARDRAIL** | "Spacing variation recipe: Section gap A = 48px (between related sections). Section gap B = 64px (between different topics). Section gap C = 80px (before major theme shift, with border). Use tokens: var(--space-12), var(--space-16), var(--space-20). Metronomic = every gap is 64px. Rhythmic = gaps signal content relationship." |
| C-12 | Rejection log: document >= 21 rejected mechanism placements | **GUARDRAIL** | "Before deploying each mechanism, consider 3 placements. Reject 2. Document: 'REJECTED: pull-quote in Section 3 because content is technical procedure, not quotable insight.' This forces evaluation of fit, not just presence." |
| C-13 | >= 2 silence zones (200px+ height, base typography only) | **HYBRID** | "Silence zone recipe: a section of 200-400px where ONLY base paragraph typography appears -- 16px Inter, #3D3D3D, 16px margin-bottom, no borders, no callouts, no background shifts, no heading. The content 'breathes' in unadorned prose. Place after high-mechanism sections to create contrast." |
| C-14 | Signal-to-silence ratio 0.6-0.8:1 | **GUARDRAIL** | "For every 600px of mechanism-active content, include 600-800px of mechanism-silent content. If you have 8 sections totaling 6000px of content, ~3600px should have mechanisms operating and ~2400-3000px should be base typography only. Silence is not void -- silence is CONTENT without decoration." |
| C-15 | >= 3 of 6 intentionality dimensions present | **GUARDRAIL** | "Intentionality recipes: SELF-REFERENCE: 'The spacing you see above this paragraph is deliberate -- it mirrors the breathing pattern we describe.' BOOKENDING: footer echoes header's visual weight (same border-top weight, same background darkness). COGNITIVE TRANSITION: bridge prose between sections. PEDAGOGICAL SEQUENCING: sections build on each other with explicit forward-references. DELIBERATE ABSENCE: 'Notice the simplicity of this section -- complexity returns below.' META-ANNOTATION: aria-labels that name the design intent." |
| C-16 | >= 1 self-referential element | **GUARDRAIL** | "Self-reference recipe: content that describes its own visual form. 'The border to the left of this callout is 3px -- the same weight we use throughout to signal key insights.' Or the page structure itself demonstrates the principles it describes." |
| C-17 | >= 2 bridge transitions with cognitive-shift prose | **GUARDRAIL** | Duplicate of C-07 with quantity gate. Same missing playbook as C-07. |
| C-18 | Density arc: peak density NOT in first section | **GUARDRAIL** | "Density arc recipe: Section 1 = LOW density (orientation, 1-2 mechanisms). Sections 3-5 = PEAK density (3-4 mechanisms operating). Sections 7-8 = DECLINING density (1-2 mechanisms, resolution). The ARC is: low -> building -> peak -> relaxing -> closing. The reader should feel the page 'warming up' and 'cooling down'." |
| C-19 | Semantic density proportionality: most important block uses most mechanisms | **GUARDRAIL** | "Identify your single most important content block. Give it 4 mechanisms (e.g., border-left accent + background shift + typographic emphasis + extra spacing). Your least important content block gets 1 mechanism (just base typography + paragraph spacing). The VISUAL WEIGHT should track CONTENT WEIGHT." |
| C-20 | Fractal coherence: same direction at all active scales | **GUARDRAIL** | "If the page-level direction is 'crescendo' (building intensity), then WITHIN each section the content should ALSO build from simpler to more complex. And WITHIN each component (e.g., a callout), the visual weight should build (thin top-border -> heavier content -> weighted bottom-margin). Direction echoes at every zoom level." |
| C-21 | Planner produces COMPOSITIONAL CLUSTERS not mechanism lists | **PLAYBOOK** | Already prescriptive. MISSING: cluster template. "CLUSTER 1 'Density Arc': mechanisms = spacing-shift + zone-backgrounds + border-weight. Trajectory = crescendo. Zones = sections 1-5. Interaction = reinforcing (all three intensify together). CLUSTER 2 'Authority Signal': mechanisms = typographic-scale + callout-boxes. Trajectory = steady. Zones = all sections. Interaction = responding (heading size triggers callout placement)." |

**B3 Subtotal: 16G / 1H (C-13) / 4P (C-05, C-07, C-21, and C-13 reclassified). Let me recount: C-05 PLAYBOOK, C-07 PLAYBOOK, C-13 HYBRID, C-21 PLAYBOOK = 17G / 1H / 3P**

---

### B4. MULTI-COHERENCE (8 rules: MC-01 through MC-08)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| MC-01 | CCS >= 0.30 for Flagship | **GUARDRAIL** | "To achieve CCS >= 0.30: for each mechanism, at least 4 other mechanisms should CHANGE MEANING if it is removed. Recipe: build mechanisms in CLUSTERS (see C-21). Cluster members automatically have high CCS because they share trajectory. A 3-mechanism cluster where all members track the same arc = CCS ~0.40 automatically." |
| MC-02 | >= 3 reinforcing pairs | **GUARDRAIL** | "Reinforcing pair recipes: (1) Border-weight + zone-background (see C-08). (2) Spacing-shift + typographic-scale (larger type = more space above). (3) Density-variation + chromatic-shift (dense sections = cooler/neutral background; sparse = warmer). These three pairs are near-universal and work with almost any content." |
| MC-03 | >= 2 modulating chains | **GUARDRAIL** | "Modulating chain recipe: CHAIN 1: Content density MODULATES spacing. In dense sections, paragraph margin shrinks from 16px to 12px. In sparse sections, it expands to 20px. CHAIN 2: Zone importance MODULATES border weight. Primary zone borders = 3px. Secondary = 1px. The zone-level decision controls the element-level CSS value." |
| MC-04 | >= 2 responding sequences | **GUARDRAIL** | "Responding sequence recipe: SEQUENCE 1: A large heading (Instrument Serif 36px) creates visual weight at top of section. The RESPONSE: the first paragraph has extra padding-top (32px instead of 16px) to 'answer' the heading weight. SEQUENCE 2: A pull-quote creates a visual peak. The RESPONSE: the next paragraph has reduced font-weight (300 instead of 400) to create a valley." |
| MC-05 | >= 2 contrasting deployments | **GUARDRAIL** | "Contrasting deployment recipe: CONTRAST 1: Section 3 has a callout box with 3px border-left. Section 4 (silence zone) has ZERO borders. The presence in S3 makes the absence in S4 feel DELIBERATE. CONTRAST 2: Sections 1-3 use warm cream backgrounds. Section 5 uses near-white. The warmth BEFORE makes the coolness MEANINGFUL." |
| MC-06 | >= 1 cascading chain of 3+ mechanisms | **HYBRID** | Already has the CD-006 example (border-weight -> zone-backgrounds -> spacing-compression). But MISSING: "How to BUILD a cascade: pick your page-level trajectory (crescendo/diminuendo). Select 3 mechanisms that CAN co-vary. Define their values at 3 points: opening, peak, closing. All three must move in the SAME direction. Example: Act 1: 1px borders + cream bg + 64px padding. Act 3: 3px borders + white bg + 32px padding. All three say 'intensifying'." |
| MC-07 | Cross-dimension coherence: >= 10/15 dimension pairs coupled | **GUARDRAIL** | "6 dimensions: Spatial, Temporal, Chromatic, Typographic, Rhythmic, Semantic. 15 possible pairs. To achieve 10/15: ensure every mechanism operates across at least 2 dimensions. Example: a ZONE BACKGROUND is Chromatic + Spatial (it has a color AND a spatial extent). A TYPOGRAPHIC SCALE is Typographic + Rhythmic (it has font properties AND creates repetition pattern). Map each mechanism to its dimensions; count unique pairs." |
| MC-08 | Anti-metronome: >= 3 distinct padding/margin values across section boundaries | **GUARDRAIL** | Duplicate of C-11. Same missing playbook. |

**B4 Subtotal: 7G / 1H (MC-06) / 0P**

---

### B5. SCALE-CHANNEL (10 rules: SC-01 through SC-10)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| SC-01 | Maximum 5 scales, preferred 2-3 | **HYBRID** | Has named scale definitions (PAGE/SECTION/COMPONENT/ELEMENT/DETAIL). MISSING: "At Scale 1 (PAGE), control: overall zone count, header-footer rhythm, page-level density arc. At Scale 2 (SECTION), control: section spacing, transition types, within-section density. At Scale 3 (COMPONENT), control: callout styling, list formatting, code block treatment. DO NOT attempt Scale 4-5 unless Scales 1-3 are fully coherent." |
| SC-02 | >= 5 of 7 channels actively used | **HYBRID** | Has channel definitions. MISSING: "Channel activation recipes: Ch1 CHROMATIC: 3+ distinct background colors across zones. Ch2 TYPOGRAPHIC: 3 font families (per U-09) + 3 sizes + 2 weights. Ch3 SPATIAL: 3+ spacing values (per C-11). Ch4 STRUCTURAL: borders at 2+ weights + section dividers. Ch5 DENSITY: content-per-viewport varies by section. Ch6 RHYTHMIC: alternating zone backgrounds create ABAB or ABCBA pattern." |
| SC-03 | Richness matrix >= 30/35 cells for Flagship | **GUARDRAIL** | "Matrix filling recipe: for each of 5 scales, ask: 'What is this scale doing in each of 7 channels?' Most cells fill automatically. At Scale 1/Ch1: page-level color zones. At Scale 2/Ch4: section border-tops. At Scale 3/Ch2: callout typography. Empty cells = missed opportunities. Target: leave only 5 cells intentionally empty (deliberate absence)." |
| SC-04 | No single channel > 40% of total semantic load | **GUARDRAIL** | "If you find yourself relying on chromatic (background colors) for most of your variety, STOP. Add structural variety (borders, dividers). Add typographic variety (weight shifts, size changes). The rule of thumb: each of your top 3 channels should carry 20-30% of semantic load." |
| SC-05 | Channel Dominance Threshold: each channel at >= 2 scales | **GUARDRAIL** | "Check: does chromatic appear at Scale 1 (zone backgrounds) AND Scale 3 (callout backgrounds)? Does typographic appear at Scale 1 (page title) AND Scale 3 (callout headings)? If a channel only appears at 1 scale, extend it: add a smaller-scale instance." |
| SC-06 | Restraint Ratio per channel: reject >= 1.5:1 | **GUARDRAIL** | "For every 2 mechanism deployments in a channel, document at least 3 rejections. Example: in Ch4 Structural, you deploy 2 border treatments. Document 3 rejected borders: 'REJECTED: border-bottom on h3 (too busy), border-right on callouts (breaks rectilinear flow), double-border on section transitions (too heavy).'" |
| SC-07 | Scale Coherence Index: same principle at >= 3 scales | **GUARDRAIL** | "If your principle is 'warmth through constraint', verify: Scale 1: warm cream palette (warmth). Scale 2: consistent section rhythm (constraint). Scale 3: bordered callouts with warm backgrounds (warmth + constraint). Scale 4: Inter typeface with generous leading (warmth). The SAME WORDS should describe the design at every scale." |
| SC-08 | No scale has ALL 7 channels active simultaneously | **GUARDRAIL** | "At each scale, leave 1-2 channels deliberately silent. At Scale 1: skip Ch6 Rhythmic (page-level rhythm is implicit). At Scale 3: skip Ch5 Density (component-level density is uniform). Intentional gaps prevent visual overload." |
| SC-09 | >= 3 channels shift at every section transition | **PLAYBOOK** | Already somewhat prescriptive. MISSING: "At each section boundary, change at minimum: (1) background color (Ch1), (2) spacing value (Ch3), (3) border treatment (Ch4). Example: Section A -> Section B: cream -> warm-gray background, 48px -> 64px gap, 0 -> 1px border-top. Count channels changed: 3. PASS." |
| SC-10 | Chromatic-density alignment: warm=sparse, cool=dense | **PLAYBOOK** | Already prescriptive. MISSING: "Warm cream sections (#fefcf3): fewer content elements per viewport, 1-2 mechanisms, generous spacing. Neutral/cool sections (#fefefe or #f5f0e8): more content elements, 3-4 mechanisms, tighter spacing. This creates the subliminal signal: warm = rest, cool = work." |

**B5 Subtotal: 6G / 3H (SC-01, SC-02, MC-06 already counted) / 2P (SC-09, SC-10)**

Corrected: SC-01 HYBRID, SC-02 HYBRID = 6G / 2H / 2P

---

### B6. METAPHOR GATES (5 rules: MG-01 through MG-05)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| MG-01 | Metaphor quality >= 12/18 on 6-criterion rubric | **GUARDRAIL** | "Metaphor derivation recipe: (1) Read ALL content. (2) Ask: 'What is this content SHAPED LIKE?' Not what it is ABOUT. (3) Test 3 candidate metaphors against 6 criteria. (4) Score each. (5) Pick highest-scoring that passes >= 12/18. Example for research synthesis content: 'geological strata' (layers of evidence building up), 'river delta' (streams converging to single insight), 'architectural blueprint' (structure revealed through detail)." |
| MG-02 | Interpretive Distance >= 2 | **GUARDRAIL** | "Distance 1 = too literal ('a document about documents'). Distance 2 = productive ('geological strata for research layers' -- different domain, clear mapping). Distance 3 = too abstract ('quantum entanglement for typography choices' -- mapping unclear). Target Distance 2: different domain, clear structural parallel." |
| MG-03 | 6 rejection checks passed | **HYBRID** | Has the 6 checks AND the soul conflict table. MISSING: "After deriving a metaphor, run each check AS A SEPARATE STEP. Write 'R1: [metaphor] does/does not require border-radius. PASS/FAIL.' Do not batch-evaluate. Each check gets its own line in the deliverable." |
| MG-04 | Metaphor structural test: remove labels, does structure communicate? | **GUARDRAIL** | "To pass: the metaphor must be encoded in CSS STRUCTURE, not just in text labels. Example PASS: 'geological strata' encoded through layered zone backgrounds that literally stack. Remove the word 'strata' -- the layering is still visible. Example FAIL: 'geological strata' encoded only by section title 'Layer 1, Layer 2'. Remove titles -- nothing looks layered." |
| MG-05 | Metaphor spatial cost <= 15% of total page height | **GUARDRAIL** | "For a 15,000px page, metaphor-structural elements must total <= 2,250px. Metaphor structure = elements that exist ONLY because of the metaphor (not content-required). If the metaphor requires 'chapter intro cards', those count. Regular section headings do NOT count. Track: list all metaphor-only elements and their heights." |

**B6 Subtotal: 4G / 1H (MG-03) / 0P**

---

### B7. PROCESS (8 rules: P-01 through P-08)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| P-01 | Content inventory BEFORE metaphor derivation | **PLAYBOOK** | Already has estimation formulas and template. RELATIVELY prescriptive. Could add: "Template: Section 1 [Title]: 450 words, type=orientation, density=low, natural grouping=intro. Section 2 [Title]: 600 words, type=analysis, density=medium, grouping=evidence-1. ..." |
| P-02 | Phase 0E library prohibition | **GUARDRAIL** | "Before metaphor lock-in, work from CONTENT ONLY. Do not browse mechanism-catalog.md. The metaphor must emerge from content shape, not from available tools. After lock-in (Gate 0.5 passed), THEN read the catalog to find mechanisms that serve the metaphor." |
| P-03 | Two-instance pattern: separate agents per pass | **PLAYBOOK** | Already prescriptive -- specifies agent separation. |
| P-04 | Builder self-scroll before file write | **PLAYBOOK** | Already prescriptive. |
| P-05 | Zone boundary requires ALL THREE: content >= 800px, type change, intent change | **HYBRID** | Has the three criteria. MISSING: "Zone boundary evaluation template: Zone A->B boundary. Content mass: ___px (>= 800px? Y/N). Content type change: [prose->data / analysis->example / etc.] (Y/N). Reader intent change: [learning->evaluating / understanding->applying / etc.] (Y/N). All three YES = create zone boundary. Any NO = MERGE." |
| P-06 | Pattern overhead <= 20% of content height | **GUARDRAIL** | "For a 12,000px content page, metaphor/pattern elements must total <= 2,400px. Track: sum height of all non-content structural elements (metaphor cards, zone boundary markers, transition zones, decorative elements). If over 20%, simplify the metaphor structure." |
| P-07 | Every checkpoint MUST produce a deliverable artifact | **PLAYBOOK** | Already prescriptive. |
| P-08 | Spatial re-check after Pass 2 | **HYBRID** | Has specific rules to re-check. MISSING: "Re-check recipe: run S-01 (measure container width). Run S-02 (sum content heights / total height). Run S-10 (scan for 2160px voids). Run S-12 (30% viewport check). Compare to pre-Pass-2 values. If S-02 dropped > 10 percentage points: Pass 2 added too much whitespace. ROLLBACK and deploy fewer mechanisms with less spacing." |

**B7 Subtotal: 2G / 2H (P-05, P-08) / 4P (P-01, P-03, P-04, P-07)**

---

### B11. CONTENT TRANSFORMATION (8 rules: CT-01 through CT-08)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| CT-01 | Direct copying of source text is PROHIBITED | **GUARDRAIL** | "Rewriting recipe: for each source paragraph, (1) identify the core insight in 1 sentence, (2) rewrite using second person ('You will find that...'), (3) add a concrete example or analogy, (4) keep to 2-4 sentences. Source: 'R3 analysis revealed density patterns.' Rewrite: 'Density patterns emerge when content elements cluster and disperse across the scroll. Watch for three signals: paragraph count shifts, heading frequency changes, and visual texture transitions.'" |
| CT-02 | Tone: Warm. Authoritative. Unhurried. | **HYBRID** | Has warmth/authority/unhurried definitions. MISSING: "Tone verification per paragraph: check for second person (warm), declarative sentences (authoritative), short paragraphs (unhurried). Red flags: 'it should be noted' (hedging), 'one might argue' (passive), paragraphs > 5 sentences (hurried)." |
| CT-03 | Word count targets per section | **PLAYBOOK** | Already prescriptive with specific numbers. |
| CT-04 | Content selection: INCLUDE principles, EXCLUDE provenance | **HYBRID** | "Selection filter: read each source paragraph. Ask: 'Would a reader WHO HAS NEVER HEARD OF THIS PROJECT care about this?' If YES, include and rewrite. If NO (e.g., '11 agents analyzed...', 'R3 found...'), extract the INSIGHT and discard the machinery." |
| CT-05 | Headings must be reader-facing | **PLAYBOOK** | Already has wrong/right examples. |
| CT-06 | Self-contained test: zero prior context needed | **PLAYBOOK** | Already prescriptive. |
| CT-07 | Content Writer assigned to Pass 0 | **PLAYBOOK** | Already prescriptive. |
| CT-08 | Content quality gate fires after adapted-content | **PLAYBOOK** | Already prescriptive with binary checks. |

**B11 Subtotal: 1G / 2H (CT-02, CT-04) / 5P (CT-03, CT-05, CT-06, CT-07, CT-08)**

---

### B12. RECOVERY PROTOCOLS (4 rules: RP-01 through RP-04)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| RP-01 | Metaphor fails Gate 4: re-derive from TC Phase 2 | **PLAYBOOK** | Already prescriptive -- specifies what to do on failure. |
| RP-02 | Two consecutive gates fail: ABORT and diagnose | **PLAYBOOK** | Already prescriptive. |
| RP-03 | Agents disagree: use programmatic measurement | **PLAYBOOK** | Already prescriptive. |
| RP-04 | HTML corrupted: restore from checkpoint | **PLAYBOOK** | Already prescriptive. |

**B12 Subtotal: 0G / 0H / 4P**

---

### C2. COMMUNICATION PROTOCOL (6 rules: CP-A through CP-F)

| Rule ID | Text (abbreviated) | Classification | Missing Playbook Equivalent |
|---------|-------------------|----------------|---------------------------|
| CP-A | Post-plan read: Builder -> Planner with spatial measurements | **PLAYBOOK** | Already prescriptive with template. |
| CP-B | Post-build: Builder -> Team-Lead with measurements | **PLAYBOOK** | Already prescriptive with template. |
| CP-C | Spatial gate: Team-Lead -> All with pass/fail | **PLAYBOOK** | Already prescriptive. |
| CP-D | Post-elaboration: Builder -> Team-Lead with mechanism counts | **PLAYBOOK** | Already prescriptive with template. |
| CP-E | Pre-handoff: each pass -> next pass with confirmation | **PLAYBOOK** | Already prescriptive. |
| CP-F | Post-metaphor: Metaphor Agent -> Planner with channel map | **PLAYBOOK** | Already prescriptive with template. |

**C2 Subtotal (as rules): 0G / 0H / 6P**

Note: CP rules are COORDINATION playbooks, not BUILDING playbooks. They tell agents what to COMMUNICATE, not what to BUILD.

---

## FINAL TALLY

| Section | Rules | Guardrail | Hybrid | Playbook |
|---------|-------|-----------|--------|----------|
| B1 Spatial (S-01..S-17) | 17 | 13 | 3 | 1 |
| B2 Soul (U-01..U-10) | 10 | 8 | 1 | 1 |
| B3 Compositional (C-01..C-21) | 21 | 17 | 1 | 3 |
| B4 Multi-Coherence (MC-01..MC-08) | 8 | 7 | 1 | 0 |
| B5 Scale-Channel (SC-01..SC-10) | 10 | 6 | 2 | 2 |
| B6 Metaphor Gates (MG-01..MG-05) | 5 | 4 | 1 | 0 |
| B7 Process (P-01..P-08) | 8 | 2 | 2 | 4 |
| B11 Content Transformation (CT-01..CT-08) | 8 | 1 | 2 | 5 |
| B12 Recovery (RP-01..RP-04) | 4 | 0 | 0 | 4 |
| C2 Communication (CP-A..CP-F) | 6 | 0 | 0 | 6 |
| **TOTAL** | **97** | **58** | **13** | **26** |

### Adjusted Final Ratio

| Classification | Count | Percentage |
|---------------|-------|------------|
| **GUARDRAIL** | **58** | **59.8%** |
| **HYBRID** | **13** | **13.4%** |
| **PLAYBOOK** | **26** | **26.8%** |

**Guardrail-to-Playbook ratio: 2.2:1**

---

## CRITICAL ANALYSIS

### The Ratio Understates the Problem

The 2.2:1 ratio UNDERSTATES the guardrail dominance because of WHERE the playbooks appear:

**Playbook rules cluster in NON-BUILDING sections:**
- 6 of 26 playbooks are COMMUNICATION templates (CP-A through CP-F) -- they tell agents what to SAY, not what to BUILD
- 4 of 26 are RECOVERY protocols (RP-01 through RP-04) -- they fire on failure, not during building
- 5 of 26 are CONTENT TRANSFORMATION rules (CT-03, CT-05, CT-06, CT-07, CT-08) -- they govern PROSE, not CSS

**Stripping coordination/recovery/content playbooks, the BUILDING playbook count is:**

| Building Section | Guardrail | Playbook |
|-----------------|-----------|----------|
| B1 Spatial | 13 | 1 |
| B2 Soul | 8 | 1 |
| B3 Compositional | 17 | 3 |
| B4 Multi-Coherence | 7 | 0 |
| B5 Scale-Channel | 6 | 2 |
| B6 Metaphor | 4 | 0 |
| **Building Total** | **55** | **7** |
| **Ratio** | **7.9:1** | |

**For every 1 instruction telling a builder what CSS to write, there are 7.9 instructions telling them what NOT to write.**

### The Playbooks Are Thin

Even the 7 "building playbooks" are thin:
- **C-05** says "use SMOOTH/BRIDGE/BREATHING" but does NOT give CSS for each
- **C-07** says "include cognitive-reframe prose" but does NOT give templates
- **C-21** says "produce clusters" but does NOT give a cluster template
- **SC-09** says "shift 3 channels" but does NOT show what a 3-channel shift looks like in CSS
- **SC-10** says "warm=sparse, cool=dense" but does NOT show the CSS pattern
- **U-09** names 3 fonts but does NOT give the size scale, weight scale, or tracking values
- **S-17** says "3 visual textures" but does NOT specify which textures or their CSS

### What the Builder Actually Receives

Per C1, builders receive <= 75 lines (B1 + B2 + conviction opener + closer). This means a builder gets:
- 17 spatial GUARDRAILS (what not to exceed)
- 10 soul GUARDRAILS (what not to use)
- ~8 lines of conviction (atmosphere, not instruction)
- **ZERO mechanism recipes**
- **ZERO CSS examples for transitions**
- **ZERO border-weight hierarchy values**
- **ZERO spacing scale with rationale**
- **ZERO component templates**
- **ZERO typography scale**

The builder is told "container must be 940-1100px" but NOT "set max-width: 960px; margin: 0 auto; padding: 0 48px". They know the CEILING but not the FLOOR or the TARGET.

### The Catastrophic Gap: Ch4 Structural

The audit data shows **ZERO borders, ZERO dividers, ZERO containment elements** in the entire 15,711px page. Why?

Searching all 97 rules for "border" as a PLAYBOOK instruction:
- U-01: "border-radius: 0" -- GUARDRAIL (what NOT to do with borders)
- C-05: "BREATHING: 80px + 3px" -- mentions border weight but no CSS
- A7: CD-006 example shows `.transition--breathing { border-top: 3px solid var(--color-border) }` -- this is in the CONVICTION layer, not the EXECUTION spec

**There is NO RULE that says "USE borders."** There is no border-weight hierarchy. There is no minimum border count. There is no "every section MUST have a border-top." The builder is told borders must not be rounded (U-01) but never told to ADD any borders at all.

**This is the smoking gun.** The prompt's structural channel (Ch4) has ZERO playbook entries. The result: zero borders in the output.

### The Seven Missing Playbooks

Based on the audit data and classification analysis, these are the 7 playbooks that SHOULD exist but DON'T:

1. **BORDER-WEIGHT HIERARCHY PLAYBOOK:** "1px = standard divider. 2px = section emphasis. 3px = high-importance callout accent. 4px = page-level structural marker. Every section boundary gets at minimum a 1px border-top."

2. **TYPOGRAPHY SCALE PLAYBOOK:** "h1: Instrument Serif 42px/1.2 weight 400. h2: Instrument Serif 28px/1.3 weight 400. h3: Inter 20px/1.4 weight 600. Body: Inter 16px/1.7 weight 400. Small: Inter 14px/1.6 weight 400. Code: JetBrains Mono 14px/1.5 weight 400. Callout: Inter 15px/1.6 weight 500."

3. **COMPONENT TEMPLATE PLAYBOOK:** "CALLOUT: border-left 3px solid var(--color-accent); padding: 24px 24px 24px 28px; background: var(--color-warm-gray-1). PULL-QUOTE: border-top 1px + border-bottom 1px, Instrument Serif 24px, padding 32px 0, text-align center. DATA-DISPLAY: 2-3 column grid, each cell has border-top 1px, padding 16px, number in Instrument Serif 28px."

4. **SPACING SCALE PLAYBOOK:** "Section gap A (related topics): 48px. Section gap B (topic change): 64px + 1px border-top. Section gap C (major shift): 80px + 3px border-top. Within-section paragraph: 16px. Heading-to-content: 12px. Content-to-heading: 32px. List-item: 8px."

5. **ZONE BACKGROUND PLAYBOOK:** "Zone type 1 (warm/sparse): background #fefcf3, padding 64px 0. Zone type 2 (neutral/medium): background #f5f0e8, padding 48px 0. Zone type 3 (cool/dense): background #fefefe, padding 32px 0. Zone transitions: HARD edge (no gradient), marked by 1px border-top."

6. **DESIGNED MOMENT RECIPES:** "Type A (callout): border-left 3px + warm-gray background + 24px padding. Type B (pull-quote): Instrument Serif 24px + border-top/bottom 1px + 32px padding. Type C (data display): 2-3 metric cards in grid + border-top 1px each. Type D (code example): JetBrains Mono + warm-gray background + 16px padding. Deploy 1 per scroll quartile, varying type."

7. **SCALE-5 DETAIL PLAYBOOK:** "At the detail level, vary: letter-spacing (0 in body, 0.05em in headings, 0.1em in small-caps labels). Line-height (1.7 for body, 1.3 for headings, 1.5 for callouts). Font-weight (400 body, 600 subheadings, 700 emphasis). Color (body #3D3D3D, secondary #5c5248, tertiary #8a8078). Margin-bottom (16px paragraphs, 8px list items, 24px after code blocks)."

---

## DIAGNOSIS SUMMARY

The master execution prompt is **architecturally inverted.** It is a comprehensive manual of WHAT CAN GO WRONG with extensive detection mechanisms (gates, kill criteria, re-check protocols, PA auditors) but an almost empty manual of WHAT TO DO RIGHT.

**The metaphor:** Imagine giving a chef 97 food safety rules ("temperature must not exceed X", "never use ingredient Y", "plating must not be Z") and zero recipes. The chef produces a food-safe meal that tastes like nothing.

**The fix is not more rules.** The fix is 7 playbook additions (~150 lines total) that give builders SPECIFIC CSS patterns, component templates, and value hierarchies. The guardrails remain -- they are necessary. But they need FLOORS to stand on.

### Counts Summary

| | Count | Pct |
|---|---|---|
| GUARDRAIL (ceiling/prohibition/constraint) | 58 | 59.8% |
| HYBRID (has both guardrail + instruction) | 13 | 13.4% |
| PLAYBOOK (recipe/instruction/specific values) | 26 | 26.8% |
| **Building-only GUARDRAIL** | **55** | -- |
| **Building-only PLAYBOOK** | **7** | -- |
| **Building guardrail-to-playbook ratio** | **7.9:1** | -- |

The 7.9:1 building ratio is the number that explains the HTML output: zero borders, uniform margins, uniform fonts, massive whitespace voids. The builder had 55 things to avoid and 7 things to do -- so they avoided 55 things and produced almost nothing.

---

**END OF CLASSIFICATION**
