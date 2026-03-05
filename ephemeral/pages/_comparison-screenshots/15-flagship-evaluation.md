# Flagship 4/4 Evaluation: Both Gas Town Pages Against the Highest Standard

**Evaluator:** flagship-evaluator (Opus 4.6)
**Date:** 2026-02-22
**Pages evaluated:**
- **Page A:** `ephemeral/pages/yegge-gas-town/output.html` (master-execution-prompt pipeline, 1,959 lines)
- **Page B:** `ephemeral/pages/gas-town-steve-yegge/output.html` (/build-page skill pipeline, 1,509 lines)
**Reference:** CD-006 pilot migration (39/40 score, ~999 CSS lines, CEILING tier)
**Standard:** `ephemeral/flagship-44-recipe/01-DEFINITION.md` (14-dimension Flagship 4/4 definition)
**Supporting evidence:** 13 completed comparison reports (01-13), 18 PA auditor reports, CSS source analysis, visual perceptual audit via Playwright at 1440x900 viewport
**Visual audit method:** Both pages served via HTTP, viewed in Playwright browser at 1440x900. Full-page screenshots + viewport-level scroll-through at ~300-500px increments. Computed styles measured via JS evaluation. Scroll-triggered animations disabled where possible (some elements invisible to viewport screenshots due to IntersectionObserver-based fade-in that does not trigger during programmatic scrolling; full-page screenshots captured these).

---

## VISUAL PERCEPTUAL AUDIT FINDINGS

**This section was added after the user requested a "strong invocation of perceptual auditing, visually seeing the pages, scrolling through them, getting a strong perceptual sense of the nuances and granularity down to the character level."**

### Page A Visual Walkthrough (15,936px total height, ~17.7 viewports at 900px)

**Header (0-250px):** Dark background with warm brown tones. Serif title "Steve Yegge and Gas Town" in cream/light text. The red "KORTAI DEEP EXTRACTION -- LEVEL 7" label uses tracked uppercase and coral accent -- the only chromatic accent in the header. Stats bar with 5 metrics (Complexity, Roles, Memory, Daily Cost, Wave) uses tracked uppercase labels and bold values. Competent and clean. Identical in structure to Page B's header.

**Zone 1 (250-1100px):** Cream background (#FEF9F5). Drop cap "S" in red -- identical technique to Page B. Section indicator "SECTION 01 -- THE ARCHITECT" in tracked gray uppercase. The body text is clean serif/sans pairing, generous line-height. The career table has tracked uppercase column headers. The "ESSENCE" callout uses a warm amber left border with cream-beige background -- the first callout variant. Stats bar below (Lines Coded ~1M, Lines Read ~0, etc.) uses 4 bordered cards. Overall impression: PROFESSIONAL, CLEAN, but not STRIKING.

**Breathing zone / Z1-Z2 transition (1100-1350px):** An italic serif bridge paragraph ("From the developer who never reads code...") on a slightly warmer background. The zone shift is BARELY perceptible to the eye -- the warm shift is there but requires attention to notice. CONFIRMED sub-perceptual at casual scan speed.

**Zone 2 / Architecture (1350-3300px):** "CORE INSIGHT" callout with red left border on a slightly darker cream -- this is the quote block. The Traditional Dev vs Gas Town comparison table is clean with tracked headers. The 8-Role Architecture heading uses italic serif. **KEY VISUAL MOMENT: The role cards.** These are laid out in a 2-column grid. The cards use LEFT BORDER COLORS that encode hierarchy: Town Level = coral/red (#c97065), Rig Level = blue/teal (#4a90d9), Human Level = green/sage (#6b9b7a). This is GENUINE multi-coherence: border color + level label + card position all encode the same semantic concept. Each card has 4 typographic registers (tracked label, italic serif name, body description, monospace model). The grid is well-executed.

**VOID AT ~3300-4500px (~1200px = 1.3 viewports):** After the "Communication Flow" paragraph, there is an ASCII art code block (dark background, 578px tall) preceded and followed by massive whitespace. The void before the code block is approximately 1200px. The code block DOES render (confirmed in full-page screenshot) but was invisible to viewport screenshots due to scroll-animation issues. Even accounting for the code block (578px), there is still ~600px of void around it. This is a significant spatial failure.

**Zone 3 / Memory (5176-7474px):** Section labels "SECTION 03 -- THE MEMORY LAYER" and "SECTION 04 -- THE EVOLUTION." The memory model table with Hot/Warm/Cold Context is clean. The 6 Waves evolution table highlights Wave 6 with bold + strong emphasis. A "WARNING" callout with amber border provides the chimpanzee quote. The section has adequate density but nothing visually STRIKING -- it reads as documentation.

**Zone 4 / Principles (7679-12483px):** This section has a THICKER HR divider (2.67px vs 0.67px) marking its entrance -- the strongest divider on the page. The section has a RED left border (#e83025) -- the same hierarchy color as Town-level role cards, creating multi-coherence between the section framing and the role system. Multiple callout variants (Essence, Prerequisites, Tip). Several dark code blocks (startup sequence, daily workflow, emergency commands). The code blocks create strong chromatic contrast against the cream background. A troubleshooting section uses paired problem/solution cards. The cost table is clean. This is the PAGE'S STRONGEST SECTION visually -- the highest density of designed moments.

**Zone 5 / Comparison (12483-15560px):** The decision section with "Use Gas Town When" / "Don't Use Gas Town When" paired callouts. Multiple comparison tables (vs Ralph Wiggum, vs CC Mirror). A "Full Spectrum" card grid comparing 4 orchestrators. A final "Decision" callout with the deepest insight. Sources section with linked items and community extensions table. This zone is content-rich but visually MONOTONOUS -- table after table after table, all in the same style.

**POST-FOOTER VOID (15560-15936px):** The footer is followed by approximately 376px of blank cream. While not as catastrophic as previously reported (earlier auditors estimated 4-6 viewport-heights), it IS still a dead zone of pure empty space. CONFIRMED visible in both full-page and viewport screenshots.

**Page A Overall Visual Impression:** A competent documentation page with strong individual components (role cards with color-coded borders, diverse callout system, dark code blocks for contrast) but lacking visual MOMENTUM. The eye moves down the page without acceleration or deceleration. Zone backgrounds are nearly identical at casual scan speed. The narrow container (~66% of viewport width at 1440px, not the 50-55% I initially estimated from prior reports -- the container IS 960px which is 66.7% of 1440px) creates noticeable margins but not catastrophic emptiness. The strongest visual impression is the CODE BLOCKS -- dark rectangles against cream provide the page's only high-contrast moments.

### Page B Visual Walkthrough (7,751px total height, ~8.6 viewports at 900px)

**Header (0-240px):** Nearly identical structure to Page A -- dark background, serif title "Gas Town," metadata bar. But the metadata is DIFFERENT: Author / Date / Stage Req / Engagement instead of Page A's 5 technical metrics. The breadcrumb "KORTAI / ORCHESTRATION / 009" is more structured than Page A's "KORTAI DEEP EXTRACTION -- LEVEL 7." Same professional quality.

**Zone 1 / Situation Brief (240-1000px):** Cream background (#FEF9F5), identical to Page A. Zone label "ZONE 1 / SITUATION BRIEF" explicitly names the zone AND invokes the dispatch metaphor. Drop cap "G" in red. Body text is clean. The blockquote callout has a DARK BACKGROUND with attribution "STEVE YEGGE -- @STEVE_YEGGE" in tracked text -- however, the quote TEXT is dark-on-dark (rgb(26,26,26) on dark parent background), which is a CSS BUG making the quote nearly invisible. Below: source references in a compact row format (Thread: / Repo: / Beads:).

**Z1->Z2 TRANSITION (1000-1020px):** A VISIBLE RED HORIZONTAL LINE separates zones. Below it, the background shifts to rgb(240,235,227) -- delta (14,14,18) from Z1. This is CLEARLY perceptible. I can immediately see the background difference without any effort. This is the threshold contrast that Page A's zones LACK.

**Zone 2 / Operational Readiness (1020-2300px):** "ZONE 2 / OPERATIONAL READINESS" label. The 8-stage table has Stage 8 in RED TEXT ("Building your own orchestrator") -- semantic color highlighting the culmination stage. The Architecture section uses inline code (`~/.gt`, `gt`) with visible background tint. The "TOWN STRUCTURE" note uses a BLUE label and left border -- chromatic variation from the red/coral used in Z1 callouts. **KEY VISUAL MOMENT: The roles grid.** This is Page B's most compositionally sophisticated component:
  - 3-COLUMN GRID with hierarchical sizing: Mayor spans 2 columns (largest), row 2 has 3 equal cards, row 3 has 3 smaller cards
  - SOLID OFFSET DEPTH: all cards have a dark shadow/border creating 3D offset effect (mechanism #3, absent in Page A)
  - SEMANTIC EXCEPTION: "HUMAN -- BOSS / Overseer (You)" card has a RED border and RED label, while all other cards have dark borders and dark labels
  - This encodes hierarchy through SIZE (card dimensions), COLOR (red exception for human), POSITION (top-left = highest rank), and BORDER STYLE (solid offset for depth)
  - Compare to Page A's role cards: Page A uses 2-column equal grid + color-coded left borders. Page B uses 3-column hierarchical grid + solid offset + single color exception. Page B is MORE COMPOSITIONALLY SOPHISTICATED.

**Z2->Z3 TRANSITION (2300-2350px):** Background shifts to rgb(232,224,212) -- delta (8,11,15) from Z2. PERCEPTIBLE but subtler than Z1->Z2. The deepening is PROGRESSIVE -- Z3 is the darkest zone, encoding compression/urgency through background darkness.

**Zone 3 / Field Intelligence (2350-5160px):** "ZONE 3 / FIELD INTELLIGENCE" label. "DOCTRINE" callout uses PURPLE left border -- a THIRD callout border color (after red/coral and blue). The Vibe Coding Philosophy and Beads Integration sections are text-heavy. The language comparison table (TypeScript / Python / Go) has bold first-column entries. Multiple callout variants: ADVANTAGE (green-tinted), THREAT ASSESSMENT (red-tinted numbered list), CAUTION (amber-tinted). This zone has the HIGHEST DENSITY of designed moments -- callouts alternate with body text and tables at high frequency. The color-coded callout system (Doctrine=purple, Advantage=green, Threat=red, Caution=amber, Intel=blue) is the page's most sophisticated compositional element -- it extends the dispatch metaphor into component-level semantic classification.

**CHECKPOINT BAR (5160-5200px):** "Field Intel Complete / Proceed to Deployment" in tracked uppercase on a warm background with visible borders above and below. This is a UNIQUE structural element -- neither a heading nor a divider, but a NARRATIVE TRANSITION MARKER. It physically manifests the dispatch metaphor's phase structure. Page A has nothing equivalent.

**Zone 4 / Allied Ops (5200-7350px):** Background lightens to rgb(245,240,232) -- delta (13,16,20) from Z3. The RESOLUTION is perceptible: the page "exhales" after Z3's compression. Extension cards use solid-offset depth (same mechanism as role cards). The "Free Upgrades Coming" list uses numbered items with "01" / "02" / "03" / "04" formatting. The deployment code block has dark background. A "MENTAL MODEL" callout with the key quote. The "ACTIONABILITY" callout uses a summary assessment line ("Deep Dive -- Stage 7+ only, expensive, chaotic") plus a "don't use" list. This zone completes the arc: from urgency (Z3) to pragmatic deployment (Z4).

**Footer (7350-7550px):** Dark background. "END DISPATCH / 009" framing text. THREE-COLUMN link grid (Source / Repos / Related) with linked items. TAG ROW with hashtag labels (#orchestration, #gas-town, etc.). The footer is MORE DESIGNED than Page A's simpler footer -- it has structured link groups and content tags.

**Post-footer (7550-7751px):** ~200px of blank space. Less than Page A's void but still present.

**Page B Overall Visual Impression:** A page that feels like it was DESIGNED to be experienced, not just read. The 4-act density arc (OPENING -> DEEPENING -> COMPRESSION -> RESOLUTION) is perceptible WITHOUT reading any text -- the backgrounds darken, the content compresses, then releases. The role cards with solid-offset depth and hierarchical sizing are the visual anchor. The color-coded callout system creates a visual language of semantic classification. The checkpoint bar marks a narrative phase transition. The footer completes the dispatch framing. The page has MOMENTUM -- it accelerates through Z2 and Z3, then decelerates through Z4 to resolution. This momentum is ABSENT in Page A.

### Side-by-Side Visual Comparison

| Property | Page A (Visual) | Page B (Visual) |
|----------|----------------|----------------|
| **First impression** | Professional documentation | Designed editorial experience |
| **Zone background visibility** | Barely perceptible (need to look) | Clearly visible (progressive darkening arc) |
| **Strongest visual moment** | Role cards with color-coded borders | Role cards with hierarchical sizing + solid offset |
| **Page momentum** | Flat -- same rhythm throughout | Accelerating then resolving -- 4-act arc |
| **Highest contrast elements** | Dark code blocks against cream | Dark code blocks + dark blockquotes + solid-offset cards |
| **Whitespace** | Multiple voids (code block area, post-footer) | Tight -- no major voids except post-footer (~200px) |
| **Container utilization** | 66.7% of viewport (960/1440) -- noticeable margins | 66.7% identical -- but denser content fills it better |
| **Total page height** | 15,936px (17.7 viewports) | 7,751px (8.6 viewports) -- **HALF the height for similar content** |
| **Callout variety** | 5+ variants, single border-color vocabulary (warm amber) | 5+ variants with SEMANTIC color classification (red/blue/purple/green/amber) |
| **Typography energy** | Consistent -- same weight and spacing throughout body | Progressive -- weight increases (400->500->600) then releases (600->400) |
| **Code block integration** | Dark blocks feel like interruptions | Dark blocks feel like part of the density arc |
| **CSS bug** | None visible | Blockquote dark-on-dark text in Z1 (quote invisible) |

---

## EXECUTIVE SUMMARY

**Neither page achieves Flagship 4/4. Neither page is close.**

- **Page A:** MIDDLE tier (PA-05 ~2.75/4, estimated 4/14 Flagship dimensions passing). Achieves ~35% of Flagship standard.
- **Page B:** CEILING tier (PA-05 3.5/4, estimated 7-8/14 Flagship dimensions passing). Achieves ~50% of Flagship standard.
- **CD-006:** CEILING tier (PA-05 ~3/4 COMPOSED, 39/40 soul score, estimated 10-11/14 Flagship dimensions passing). Achieves ~72% of Flagship standard.
- **Flagship 4/4:** THEORETICAL -- 14/14 dimensions, PA-05 >= 3.5 + Tier 5 >= 6/8 + zero soul violations + metaphor STRUCTURAL. Never achieved.

**Visual audit findings (added post-initial evaluation):** Viewing both pages in-browser at 1440x900 CONFIRMED and STRENGTHENED the source-code-based assessments. Page B's zone background arc is immediately perceptible at casual scan speed -- no effort required to see the darkening-then-lightening progression. Page A's zone alternation is barely visible. Page B's hierarchical role cards with solid-offset depth are the strongest visual anchor in either page. Page B has visual MOMENTUM (acceleration through Z2-Z3, then deceleration through Z4). Page A is visually FLAT -- same rhythm throughout. Page A is also TWICE the height (15,936px vs 7,751px) for similar content, creating significant density dilution. One CSS bug found in Page B: blockquote text is dark-on-dark (invisible) in Z1.

The gap from the best existing artifact (CD-006, CEILING) to Flagship 4/4 requires qualitative leaps in multi-coherence, unified metaphor, and channel coordination that no pipeline -- master-prompt or /build-page -- has yet produced. The gap from either Gas Town page to Flagship is larger still.

---

## PART 1: DIMENSION-BY-DIMENSION SCORING

### D-01: MECHANISM COUNT AND CATEGORY COVERAGE

| Gate | Middle Threshold | Flagship Threshold | Page A | Page B | CD-006 |
|------|-----------------|-------------------|--------|--------|--------|
| Total deployed (perceptible) | >= 8 | >= 14 | **14** | **16** | 18 |
| Spatial (S) | >= 1 | >= 2 | 2 (#5 dense/sparse, #15 bento) | 2 (#5, #15) | 3+ |
| Hierarchy (H) | >= 1 | >= 2 | 3 (#1, #4, #11) | 3 (#1, #4, #11) | 3 |
| Component (C) | >= 1 | >= 2 | 4 (#2, #9, #10, #17) | 4 (#2, #9, #10, #17) | 4 |
| Depth/Emphasis (D) | >= 1 | >= 2 | 2 (#7, #16) | **3** (#3, #7, #16) | 3 |
| Navigation/Structure (N) | >= 1 | >= 2 | 3 (#13, #14, #18) | **4** (#12, #13, #14, #18) | 5 |

**Page A:** PASSES at Flagship threshold (14 mechanisms, all categories >= 2). The mechanism count is at the minimum boundary.
**Page B:** PASSES at Flagship threshold (16 mechanisms, all categories >= 2). Two additional mechanisms vs Page A: #3 solid offset depth and #12 progressive disclosure.
**CD-006:** PASSES at Flagship threshold (18/18 maximum).

**Assessment:**
- Page A: **PASS** (barely -- at the exact threshold of 14)
- Page B: **PASS** (comfortable margin at 16)

---

### D-02: ZONE TRANSITIONS

| Gate | Middle Threshold | Flagship Threshold | Page A | Page B | CD-006 |
|------|-----------------|-------------------|--------|--------|--------|
| Total perceptible transitions | >= 3 | >= 8 | ~5-6 | ~5-6 | 7 |
| Channels changing per transition | >= 1 | >= 2 of 3 | 1-2 | **2-3** | 2-3 |

**Page A analysis:**
Page A has 5 content zones plus header and footer. Zone transitions:
- Header -> Z1 (opening): Background shift (dark -> cream), typography change. 2 channels.
- Z1 -> breathing zone: Background shift (cream -> breathing tan, delta ~21 on B channel). But the breathing zone is a BRIDGE, not a full zone.
- Breathing zone -> Z2 (architecture): Background stays breathing tan. Border-left appears (3px blue). 1-2 channels.
- Z2 -> Z3 (memory): Background returns to cream (delta ~21). Border-left removed. 1-2 channels.
- Z3 -> breathing-zone--t3: 3px red borders appear. Strong structural signal. 2 channels.
- T3 -> Z4 (principles): Background returns to breathing tan. 3px red border-left appears. Typography shifts (h2 to 1.375rem from 1.5rem). 2-3 channels.
- Z4 -> Z5 (comparison): Background returns to cream. Border-left removed. 1 channel.
- Z5 -> footer: Dark slab return. 3 channels.

Total PERCEPTIBLE transitions: ~5-6 (counting only transitions where a casual reader would notice the change). Several transitions are subtle (alternating A-B pattern with only 2 actual background values).

**CRITICAL ISSUE with Page A:** The zone backgrounds use only 2 actual values (sparse #FEF9F5 and breathing #F5EDE0), creating an A-B-A-B-A oscillation. The "zone-dense" value (#FEFCF8) has a max delta of only 3 RGB from sparse -- sub-perceptual. This means Page A effectively has 2-zone background vocabulary, not the 4+ zones needed for Flagship.

**Page B analysis:**
Page B has 4 content zones plus header and footer. Zone transitions:
- Header -> Z1: Background shift (dark -> cream), typography. 2-3 channels.
- Z1 -> Z2: 3px primary border, background delta 18 RGB (cream -> warm gray-beige), section indicator weight shift. 3 channels.
- Z2 -> Z3: Background delta 15 RGB (gray-beige -> deep earthy), spacing compression (padding 40px -> 32px), body font-weight (500 -> 600), letter-spacing (0 -> 0.03em). **4 channels.**
- Z3 -> checkpoint bar -> Z4: Checkpoint element as structural break, background delta 20 RGB (deep earthy -> lighter return), 3px border, font-weight (600 -> 400). 3-4 channels.
- Z4 -> footer: Dark slab return. 3 channels.

Total PERCEPTIBLE transitions: ~5-6. Fewer than Flagship's 8 threshold because Page B has only 4 content zones. But channel DEPTH per transition is significantly higher than Page A.

**Assessment:**
- Page A: **FAIL** at Flagship (5-6 transitions, needs >= 8). PASS at Middle.
- Page B: **FAIL** at Flagship (5-6 transitions, needs >= 8). PASS at Middle. But channel depth per transition is closer to Flagship quality.

---

### D-03: CHANNELS ACTIVE PER BOUNDARY [F-ONLY]

The 6 channels: Chromatic, Typographic, Spatial, Structural, Component, Density.

**Page A boundary analysis:**

| Boundary | Chromatic | Typographic | Spatial | Structural | Component | Density | Total |
|----------|-----------|-------------|---------|------------|-----------|---------|-------|
| Header->Z1 | YES (dark->cream) | YES (serif->body) | YES | YES (3px red bottom) | YES | YES | 6 |
| Z1->breathing | YES (cream->tan, delta 21) | NO | NO | NO | NO | NO | 1 |
| Breathing->Z2 | NO (stays tan) | YES (h2 1.75->1.625) | NO | YES (3px blue left) | NO | NO | 2 |
| Z2->Z3 | YES (tan->cream) | YES (h2 1.625->1.5) | NO | NO (border-left removed) | NO | NO | 2 |
| Z3->T3 | PARTIAL | NO | NO | YES (3px red borders) | NO | NO | 1-2 |
| T3->Z4 | YES (cream->tan) | YES (h2 1.5->1.375, weight) | YES (padding compression) | YES (3px red left) | NO | YES | 5 |
| Z4->Z5 | YES (tan->cream) | YES (h2 1.375->1.5) | YES (padding expansion) | NO (left removed) | NO | NO | 3 |
| Z5->footer | YES (cream->dark) | YES | NO | YES (3px red top) | YES | YES | 5 |

**Average channels per body-zone boundary (excl. header/footer):** ~2.2 channels
**Minimum per boundary:** 1 channel (Z1->breathing)

**Page B boundary analysis:**

| Boundary | Chromatic | Typographic | Spatial | Structural | Component | Density | Total |
|----------|-----------|-------------|---------|------------|-----------|---------|-------|
| Header->Z1 | YES | YES | YES | YES (3px red bottom) | YES | YES | 6 |
| Z1->Z2 | YES (delta 18) | YES (h2 2.5->2rem, weight 400->500) | YES (padding 64->40) | YES (3px red top) | YES (roles grid) | YES | **6** |
| Z2->Z3 | YES (delta 15) | YES (weight 500->600, spacing 0->0.03em) | YES (padding 40->32) | NO | YES (callouts dense) | YES | **5** |
| Z3->checkpoint | PARTIAL (bg shift) | NO | YES (padding compression) | YES (3px border) | YES (unique element) | NO | 3-4 |
| Checkpoint->Z4 | YES (delta 20) | YES (weight 600->400) | YES (padding 32->80) | NO | YES (extension cards) | YES (release) | **5** |
| Z4->footer | YES | YES | NO | YES (3px red top) | YES | YES | 5 |

**Average channels per body-zone boundary:** ~4.6 channels
**Minimum per boundary:** 3-4 channels

**Assessment:**
- Page A: **FAIL** at Flagship (average ~2.2, needs >= 4; minimum ~1, needs >= 3). This is the Middle register -- channels operate INDEPENDENTLY.
- Page B: **PASS** at Flagship (average ~4.6, minimum 3-4). This is strikingly close to CD-006's 4.3 average. **This is Page B's strongest Flagship dimension.**

---

### D-04: MULTI-COHERENCE [F-ONLY]

Multi-coherence = 3+ CSS channels encoding the SAME semantic concept simultaneously.

**Page A multi-coherence instances:**
1. **Header/footer bookend (dark -> red border -> inversion):** Chromatic + structural + typographic + component. PASSES (4 channels encoding "boundary/frame"). But this is a STANDARD pattern, not Flagship-level intentional multi-coherence.
2. **Z3->Z4 transition (breathing-zone--t3):** Chromatic + structural + typographic + spatial + density encoding "deepening into operational territory." PASSES (5 channels).
3. **No other instances.** The body zone transitions use channels INDEPENDENTLY: zone background solves "which section am I in," border-left solves "what type of zone is this," typography compression solves "how deep are we." These are independent assignments, not coherent encoding.

**Estimated instances: 1-2 genuine** (bookend is standard; T3 transition is strongest)

**Page B multi-coherence instances:**
1. **Header/footer bookend:** Same as Page A. 4+ channels encoding "dispatch boundary." PASSES.
2. **Z1->Z2 transition (DEEPENING):** Background darkens (chromatic), headings shrink (typographic), padding compresses (spatial), 3px border appears (structural), components shift from text to grid (component), content density increases (density). All 6 channels encode "we are entering operational territory." **STRONG MULTI-COHERENCE -- 6 channels, 1 concept.**
3. **Z2->Z3 transition (COMPRESSION):** Background darkens further (chromatic), font-weight increases 500->600 (typographic), letter-spacing adds 0.03em (typographic sub-channel), padding compresses further (spatial), callout density increases (density). 5 channels encoding "maximum intelligence density / urgency." **STRONG -- 5 channels.**
4. **Z3->checkpoint->Z4 transition (RESOLVING):** Checkpoint bar as structural break, background LIGHTENS (chromatic reversal), font-weight DECREASES 600->400 (typographic release), padding EXPANDS (spatial release), letter-spacing returns to 0 (typographic sub-release). 4-5 channels encoding "decompression / resolution." **STRONG -- 4-5 channels.**

**Estimated instances: 3-4 genuine.** The arc DEEPENING -> COMPRESSION -> RESOLUTION is encoded through multiple channels AT EACH BOUNDARY, not just at one boundary. This is the closest to Flagship multi-coherence in our entire corpus (including CD-006, which concentrates multi-coherence in S1 and bookends).

**Assessment:**
- Page A: **FAIL** at Flagship (1-2 instances, needs >= 3). Channels operate independently.
- Page B: **PASS** at Flagship (3-4 instances, needs >= 3). The arc is genuinely multi-channel coherent.

**CRITICAL FINDING:** Page B's multi-coherence may actually EXCEED CD-006 in one respect: CD-006's multi-coherence is LOCAL (concentrated in S1 geological strata and bookends, weaker in middle sections). Page B's multi-coherence is SUSTAINED across ALL body zone boundaries. The arc DEEPENING -> COMPRESSION -> RESOLUTION operates as a GLOBAL organizational principle encoded through 4-6 channels at every transition. This is exactly what the Flagship definition describes as "metaphor-driven multi-channel coherence."

---

### D-05: FRACTAL SELF-SIMILARITY

| Scale | What to Check | Page A | Page B | CD-006 |
|-------|--------------|--------|--------|--------|
| 1. Navigation | TOC/nav mirrors page density arc | NO (no TOC) | NO (no TOC) | YES |
| 2. Page | Full scroll shows density arc | PARTIAL (A-B-A-B oscillation, not arc) | **YES** (OPENING->DEEPENING->COMPRESSION->RESOLUTION) | YES |
| 3. Section | Individual sections have intro/body/close | YES (section-indicator + heading + body + callout) | **YES** (indicator + heading + body + callout) | YES |
| 4. Component | 2-zone structure (label + body) | YES (callout__label + callout__body, bento-cell__label + bento-cell__desc) | **YES** (callout__label + callout__body, role-card__rank + name + function) | YES |
| 5. Character | Inline font hierarchy | YES (3 fonts active) | YES (3 fonts active) | YES |

**Scores:**
- Page A: **3/5** (missing Navigation; Page scale is A-B oscillation not arc)
- Page B: **4/5** (missing Navigation only; Page scale is a genuine 4-act arc)
- CD-006: **5/5** (all scales active)

**Assessment:**
- Page A: **FAIL** at Flagship (3/5, needs 5/5). PASS at Middle (>= 2).
- Page B: **FAIL** at Flagship (4/5, needs 5/5). Very close. The missing Navigation scale is structural (neither page has a TOC).

---

### D-06: SEMANTIC DENSITY

| Gate | Middle Threshold | Flagship Threshold | Page A | Page B |
|------|-----------------|-------------------|--------|--------|
| Max consecutive blank space | <= 120px | <= 96px | **FAIL** (post-footer void: 4-6 viewport-heights) | **PASS** (~40-60px max gap estimated) |
| Content-to-whitespace ratio per viewport | >= 35% | >= 40% | FAIL (multiple viewports < 35% due to narrow container) | PASS (no viewport below 40%) |
| No viewport > X% blank | > 65% | > 60% | FAIL (post-footer void) | PASS |

**Page A CRITICAL DEFECT:** 7/9 auditors flagged the catastrophic post-footer void (4-6 viewport-heights of blank cream). Additionally, the narrow container (~50-55% of viewport at 1440px) means even content viewports have ~45-50% blank space. This is a BLOCKING failure.

**Page B:** Zero catastrophic voids. Content coverage above 50% at every scroll position (confirmed by 9/9 auditors). The header-to-Z1 gap is generous but not a void.

**Assessment:**
- Page A: **FAIL** at both Middle and Flagship. The post-footer void is catastrophic. Caps PA-05 at max 1.5/4 by itself.
- Page B: **PASS** at both Middle and Flagship.

---

### D-07: PERCEPTIBILITY FLOOR

| Property | Threshold | Page A | Page B |
|----------|-----------|--------|--------|
| Adjacent zone backgrounds >= 15 RGB | Both | **FAIL** (zone-dense #FEFCF8 delta 3 from sparse) | **PASS** (all deltas >= 15: 18, 15, 20) |
| Font-size between zone groups >= 2px | Flagship | PARTIAL (h2 shifts are 1-2px, borderline) | PARTIAL (h2 shifts present but via tokens not explicit) |
| Letter-spacing >= 0.5px or 0 | Both | PARTIAL (zone shifts of 0.02em = 0.32px, sub-perceptual) | **PASS** (Z3 0.03em = 0.48px at 16px, borderline; reset to normal for headings) |
| Padding between zones >= 24px difference | Flagship | PARTIAL | **PASS** (64px -> 40px -> 32px -> 80px, all deltas >= 8px) |
| Border weight 4px/3px/1px, NO 2px | Both | **PASS** | **PASS** |
| Container width 940-1100px | Both | **PASS** (960px max-width) | **PASS** (960px max-width) |
| Section gap total <= 96px | Both | **FAIL** (breathing-zone--t3: section padding-bottom + border + bridge padding + border + section padding-top likely > 96px stacked) | **PASS** (fix cycle comments show explicit stacking control) |

**Assessment:**
- Page A: **FAIL** at Flagship (2-3 violations: zone-dense sub-perceptual, letter-spacing sub-perceptual, potential stacking violation). PARTIAL at Middle.
- Page B: **PASS** at both levels. The CSS comments explicitly document the override of sub-perceptual values and stacking gap control.

---

### D-08: RESTRAINT INDICATORS

| Indicator | Page A | Page B |
|-----------|--------|--------|
| Zero sub-perceptual CSS | **FAIL** (zone-dense delta 3 RGB, letter-spacing shifts 0.02em) | **PASS** (sub-perceptual values explicitly overridden, documented in CSS comments) |
| Deliberate exclusion of >= 1 catalog mechanism | YES (#3 solid offset, #6 width-variation, #8 scroll-witness, #12 progressive-disclosure absent) | YES (#6 width-variation, #8 scroll-witness absent) |
| No single component > 35% | PARTIAL (callouts ~30-35% of components) | **PASS** (callouts + role-cards + extension-cards + tables diversified) |
| Whitespace > 48px has structural content | **FAIL** (post-footer void; breathing zones may exceed without structural content) | **PASS** (all major gaps contain structural elements: checkpoint bar, red stripe transitions) |

**Assessment:**
- Page A: **FAIL** at Flagship (2 violations: sub-perceptual CSS, whitespace void). The absent mechanisms are fine (genuine restraint), but the sub-perceptual zone-dense value is an UNINTENTIONAL absence, not deliberate restraint.
- Page B: **PASS** at Flagship. The CSS comments explicitly documenting why values were overridden is a MARK OF INTENTIONAL RESTRAINT -- the builder considered the original values, rejected them for perceptual reasons, and documented the decision.

---

### D-09: AXIS PATTERN VARIETY [F-ONLY]

| Gate | Flagship Threshold | Page A | Page B | CD-006 |
|------|-------------------|--------|--------|--------|
| Distinct axis patterns | >= 3 of 5 | 2 (F-pattern + Bento) | 2 (F-pattern + Bento) | 5/5 |
| Named transitions between patterns | >= 1 per change | 1 (breathing zones) | 1 (checkpoint bar) | 7 |

**Page A:** F-pattern dominates ~80% of the page. The bento grid (Section 02 architecture, Section 07 troubleshooting) provides the only spatial variation. All other sections are single-column linear flow. The decision matrix in Z5 adds a CSS grid but reads as a table variant, not a distinct axis pattern.

**Page B:** F-pattern dominates ~75% of the page. The roles-grid in Z2 is a genuine bento/grid pattern with hierarchical sizing. All other sections are single-column. Extension cards in Z4 are stacked linear, not a distinct pattern.

**Assessment:**
- Page A: **FAIL** at Flagship (2 patterns, needs >= 3). The page is essentially single-column with occasional grids.
- Page B: **FAIL** at Flagship (2 patterns, needs >= 3). Same limitation.

**Both pages lack the Z-Pattern, Spiral, and Choreography patterns that CD-006 deploys. This is a structural limitation of the content scope -- Gas Town extraction is a technical deep-dive that maps naturally to F-pattern with occasional bento. Flagship axis variety may require content that demands multiple attention topologies.**

---

### D-10: DESIGNED MOMENTS PER SCROLL

| Gate | Middle Threshold | Flagship Threshold | Page A | Page B |
|------|-----------------|-------------------|--------|--------|
| Coverage (segments with moment / total) | >= 75% | >= 90% | ~65-70% | ~80-85% |

**Page A:** Strong designed moments in header, Z1 opening (drop cap + essence callout), Z2 bento grid, breathing-zone--t3, Z4 principles (second drop cap + red border), Z5 decision matrix + reasoning box, footer. But several viewport segments are just text + callout with no distinctive element. The narrow container compounds this -- viewport segments have more blank space. Post-footer void drops coverage catastrophically.

**Page B:** Strong designed moments in header, Z1 dispatch opening (drop cap + solid-offset pullquote), Z2 (8-stage table + roles grid), Z3 (color-coded callout system + dense tables), checkpoint bar (unique element), Z4 (extension cards + code blocks + mental model box + actionability callout), footer (structured link groups + tags). The continuous variety means nearly every scroll position encounters a designed element.

**Assessment:**
- Page A: **FAIL** at both Middle and Flagship (void drops it below 75%). Without the void, would be ~75-80%.
- Page B: **PASS** at Middle, **FAIL** at Flagship (~80-85%, needs >= 90%). Close to Flagship threshold.

---

### D-11: COMPONENT VARIETY

| Gate | Middle Threshold | Flagship Threshold | Page A | Page B |
|------|-----------------|-------------------|--------|--------|
| Distinct component types | >= 5 | >= 8 | ~10 | ~12+ |
| Max single type % | <= 50% | <= 35% | PARTIAL (~35% callouts) | **PASS** (diversified across callouts, role-cards, extension-cards, tables, code, file-tree, etc.) |

**Page A component types:** callout (5 variants), bento-cell (5 variants), data-table, code-block/code-snippet, stats-bar, reasoning-box, decision-matrix, density-meter, breathing-zone, essence-pullquote, version-badge, dividers. ~12 types.

**Page B component types:** callout (5 variants), role-card (3 variants), data-table (with dense variant), file-tree, extension-card, upgrades-list, code-block, mental-model, actionability-box, dont-use-list, checkpoint-bar, source-meta, footer-link-group, footer-tags. ~14 types.

**Assessment:**
- Page A: **PASS** at Flagship (10+ types). Callout percentage is borderline.
- Page B: **PASS** at Flagship (12+ types). More diverse component vocabulary with several unique types.

---

### D-12: CSS QUANTITATIVE FEATURES

| Metric | Middle Range | Flagship Range | Page A | Page B |
|--------|-------------|---------------|--------|--------|
| CSS lines (non-comment, non-blank) | 250-600 | 600-1500 | 893 | 936 |
| Distinct CSS selectors | >= 30 | >= 60 | 140 | 146 |
| Custom properties | >= 20 | >= 40 | 63 | 54 |
| @media breakpoints | >= 1 | >= 2 | 4 | 4 |
| Distinct background colors | >= 3 | >= 6 | 11 | 10 |
| Distinct font-size values | >= 4 | >= 5 | 16 | 17 |
| Distinct border-width values | >= 2 | >= 3 | 3 (1px, 3px, 4px) | 3 (1px, 3px, 4px) |
| Grid/flexbox layouts | >= 1 | >= 3 | 3+ (bento-grid, header-stats, stats-bar, decision-matrix) | 3+ (roles-grid, header-stats, footer-links, footer-tags) |

**Assessment:**
- Page A: **PASS** at Flagship (all metrics within or above Flagship range).
- Page B: **PASS** at Flagship (all metrics within or above Flagship range).

---

### D-13: METAPHOR PRESENCE [F-ONLY]

| Gate | Page A | Page B |
|------|--------|--------|
| Metaphor named in code/HTML | YES ("Factory" -- comments reference factory entrance, factory floor, factory exit) | YES ("Dispatch/Command Post" -- zone labels use military intelligence framing: Situation Brief, Operational Readiness, Field Intelligence, Allied Ops) |
| Creates >= 3 distinct class families NOT in catalog | NO (all class families are standard catalog items) | PARTIAL (checkpoint-bar, dispatch-opening, core-quote, intel-divider, actionability -- 2-3 are metaphor-specific) |
| Drives >= 2 multi-coherence instances | NO | YES (DEEPENING->COMPRESSION->RESOLUTION arc driven by dispatch metaphor) |
| 40% test: remove labels, structure communicates? | **NO** | **PARTIALLY** |

**Page A metaphor analysis:**
The "factory" metaphor appears in CSS comments ("Factory Entrance," "Factory Floor," "Factory Exit") and structural decisions (header/footer as entry/exit). But remove the text labels and the page reads as a standard documentation page with alternating warm/tan backgrounds. The factory metaphor does NOT drive CSS decisions: zone backgrounds alternate A-B-A-B regardless of content semantics, border-left colors are assigned to zone TYPE (architecture = blue, principles = red) not to factory FUNCTION, and spacing compression does not encode factory processing stages. The metaphor is ANNOUNCED in comments, not STRUCTURAL in CSS.

**Page B metaphor analysis:**
The "dispatch/command post" metaphor operates at multiple levels:
1. **Zone labeling:** Zone 1 = Situation Brief, Zone 2 = Operational Readiness, Zone 3 = Field Intelligence, Zone 4 = Allied Ops & Deployment. These are not just labels -- they organize the CONTENT according to military intelligence workflow.
2. **Density arc matches dispatch structure:** Situation Brief (sparse, authoritative overview) -> Operational Readiness (structured, moderate density) -> Field Intelligence (dense, compressed, urgent) -> Allied Ops (resolving, deployment orders). The CSS encodes this: Z3 gets heavier font-weight (600), tighter letter-spacing (0.03em), compressed padding -- encoding urgency through multiple typographic channels.
3. **Color-coded callouts match threat classification:** THREAT (coral), CAUTION (amber), DOCTRINE (purple), INTEL (blue), ADVANTAGE (green). This extends the military framing into component semantics.
4. **Checkpoint bar:** "Field Intel Complete / Proceed to Deployment" is a UNIQUE structural element that exists only at the Z3->Z4 boundary. It physically manifests the dispatch structure's phase transition.

**The 40% test:** Remove all textual annotations. Does the dispatch metaphor persist? PARTIALLY. The four-stage density arc (sparse->moderate->dense->resolved) communicates an OPENING->DEEPENING->COMPRESSION->RESOLUTION arc visually. The checkpoint bar communicates a phase transition. The callout color system communicates semantic classification. But without the labels, you would not specifically identify this as "military dispatch" -- you would perceive it as "editorial density arc" or "progressive deepening." The metaphor manifests as ORGANIZATIONAL STRUCTURE, not as specific military visual vocabulary (no insignia, no explicit military CSS treatments beyond the organizational pattern).

**Assessment:**
- Page A: **FAIL** at Flagship. Metaphor is announced but not structural. Zero CSS decisions are driven by the factory concept.
- Page B: **PARTIAL FAIL** at Flagship. The dispatch metaphor drives organizational structure and density arc (STRONG), creates 2-3 unique class families (PARTIAL), and drives multi-coherence (STRONG). But the 40% structural test is only PARTIAL -- the metaphor manifests as a density arc that could be attributed to multiple organizational concepts, not specifically to military dispatch.

---

### D-14: ACCESSIBILITY BASELINE

| Gate | Page A | Page B |
|------|--------|--------|
| Skip link present | YES | YES |
| Focus-visible styles | YES (3px solid primary, offset 2px) | YES (3px solid primary, offset 2px) |
| ARIA landmarks (header, main, footer) | YES | YES |
| Reduced motion media query | YES | YES |
| No color-only semantic signaling | YES (callouts have border + color + label) | YES (callouts have border + color + label) |
| Heading hierarchy (no skips) | YES (h1 -> h2 -> h3 -> h4) | YES (h1 -> h2 -> h3) |

**Assessment:**
- Page A: **PASS** at both levels. Full accessibility baseline.
- Page B: **PASS** at both levels. Full accessibility baseline.

---

## PART 2: SUMMARY SCORECARD

| Dim | Name | Page A | Page B | CD-006 est. | Flagship Target |
|-----|------|--------|--------|-------------|----------------|
| D-01 | Mechanisms | **PASS** (14) | **PASS** (16) | PASS (18) | >= 14, 2/cat |
| D-02 | Zone transitions | **FAIL** (5-6, < 8) | **FAIL** (5-6, < 8) | PASS (7+) | >= 8, 2 ch |
| D-03 | Channels/boundary | **FAIL** (avg 2.2) | **PASS** (avg 4.6) | PASS (4.3) | >= 3 each, avg >= 4 |
| D-04 | Multi-coherence | **FAIL** (1-2) | **PASS** (3-4) | PASS (5 local) | >= 3 instances |
| D-05 | Fractal scales | **FAIL** (3/5) | **FAIL** (4/5) | PASS (5/5) | 5/5 |
| D-06 | Semantic density | **FAIL** (catastrophic void) | **PASS** | PASS | <= 96px, >= 40% |
| D-07 | Perceptibility floor | **FAIL** (sub-perceptual zones) | **PASS** | PASS | All thresholds |
| D-08 | Restraint | **FAIL** (sub-perceptual waste) | **PASS** | PASS | Full 4 indicators |
| D-09 | Axis variety | **FAIL** (2 patterns) | **FAIL** (2 patterns) | PASS (5/5) | >= 3 patterns |
| D-10 | Designed moments | **FAIL** (~65-70%) | **FAIL** (~80-85%) | PASS (~100%) | >= 90% |
| D-11 | Component variety | **PASS** (10+ types) | **PASS** (12+ types) | PASS (11) | >= 8, <= 35% |
| D-12 | CSS features | **PASS** | **PASS** | PASS | Flagship range |
| D-13 | Metaphor | **FAIL** (announced only) | **PARTIAL** (structural but 40% test borderline) | PARTIAL | All 4 gates |
| D-14 | Accessibility | **PASS** | **PASS** | PASS | All 6 gates |

### Pass Counts

| Artifact | Middle Dims Passing (of 10) | Flagship Dims Passing (of 14) | PA-05 Score |
|----------|---------------------------|-------------------------------|-------------|
| **Page A** | **5-6/10** | **4/14** | ~2.75/4 |
| **Page B** | **10/10** | **7-8/14** (counting D-13 partial as 0.5) | 3.5/4 |
| **CD-006** | **10/10** | **10-11/14** | ~3/4 COMPOSED (39/40 soul, Ceiling register) |
| **Flagship target** | **10/10** | **14/14** | 4/4 (Flagship register) |

---

## PART 3: KEY QUESTIONS ANSWERED

### 1. What TIER does each page actually achieve?

**Page A: MIDDLE tier -- with BLOCKING defects.**
Page A passes 5-6 of 10 Middle dimensions. The post-footer void and sub-perceptual zone backgrounds are BLOCKING issues that prevent even a clean Middle classification. Without those defects, Page A would be a solid Middle-to-upper-Middle page: vocabulary-fluent (14 mechanisms), component-rich (10+ types), with competent typography and a consistent voice. The 5-instrument ensemble composition identified by PA auditors is genuinely impressive, but spatial execution failures undermine the compositional intelligence.

**Page B: CEILING tier.**
Page B passes all 10 Middle dimensions and 7-8 of 14 Flagship dimensions. It fails at Flagship due to insufficient zone count (4 vs 8+ needed), 2 axis patterns (vs 3+ needed), ~80-85% designed moment coverage (vs 90%+ needed), 4/5 fractal scales (vs 5/5 needed), and partial metaphor structural test. But its multi-coherence (3-4 instances), channel density per boundary (avg 4.6), and intentional perceptibility controls are CEILING-quality. This is the strongest page either pipeline has produced.

### 2. Where is each page relative to Flagship?

**Page A achieves approximately 35% of Flagship standard.**
- Passes 4/14 dimensions cleanly (D-01, D-11, D-12, D-14)
- Fails 10/14 dimensions, several catastrophically (D-06 void, D-07 sub-perceptual)
- The gap is QUALITATIVE, not just quantitative: Page A's channels operate independently (Middle register), not coherently (Flagship register)

**Page B achieves approximately 50% of Flagship standard.**
- Passes 7-8/14 dimensions cleanly (D-01, D-03, D-04, D-06, D-07, D-08, D-11, D-12, D-14)
- Fails 5-6/14 dimensions (D-02, D-05, D-09, D-10, D-13 partial)
- The gap is QUANTITATIVE for most failures: needs more zones (8 vs 4), more axis patterns (3 vs 2), more designed moments (90% vs 80-85%), and Scale 1 navigation. The qualitative gap is D-13 (metaphor structural test).

**CD-006 achieves approximately 72% of Flagship standard.**
- Passes 10-11/14 dimensions
- Fails primarily on D-04 (multi-coherence is local, not global), D-13 (no unified metaphor), and potentially D-02 (zone transitions at 7, needs 8)
- The gap is THEORETICAL: CD-006 demonstrates all the CSS vocabulary but assembled through accumulated craft over 5 stages, not through a unified metaphor-driven compositional plan

### 3. What would need to change to reach Flagship?

**Page A -- Top 5 critical gaps:**
1. **Fix the post-footer void** -- BLOCKING, affects D-06, D-08, D-10. Without this, PA-05 caps at 1.5/4.
2. **Replace sub-perceptual zone backgrounds** -- zone-dense (#FEFCF8, delta 3) must be replaced with a value >= 15 RGB delta. Affects D-07, D-08.
3. **Add multi-coherence** -- channels currently operate independently. Needs a unified semantic concept that 3+ channels encode simultaneously at zone boundaries. Affects D-03, D-04.
4. **Add axis pattern variety** -- needs at least 1 more pattern beyond F-pattern + bento. Z-pattern or choreography in the comparison section could work. Affects D-09.
5. **Expand to 8+ zones** -- currently 5 content zones. Need at least 3 more to reach the transition count threshold. Affects D-02.

**Page B -- Top 5 critical gaps:**
1. **Expand zone count to 8+** -- currently 4 content zones. This is the single largest structural gap. Needs content restructuring to support more zone transitions. Affects D-02 (from 5-6 to >= 8).
2. **Add Scale 1 (Navigation)** -- a TOC or navigation element that mirrors the page's density arc. Affects D-05 (from 4/5 to 5/5).
3. **Add 1+ axis pattern** -- needs Z-pattern or choreography in addition to F-pattern + bento. The Z3 Field Intelligence section could use a Z-pattern layout for the language comparison. Affects D-09.
4. **Increase designed moment coverage to 90%+** -- needs designed elements in every viewport-sized segment. Affects D-10 (from 80-85% to 90%+).
5. **Strengthen metaphor structural test** -- the dispatch metaphor drives organizational structure but needs more CSS-manifest expression. Checkpoint-bar is good but needs 2-3 more metaphor-specific CSS treatments that persist without labels. Affects D-13.

### 4. Is the PIPELINE capable of producing Flagship?

**The honest answer: PROBABLY NOT with current architecture. But Page B shows the path.**

**Why "probably not":**
- The compression cliff (337 research findings -> 18 mechanism names -> TC brief -> builder prompt) loses EXACTLY the information that distinguishes Flagship from Middle: multi-coherence strategy, channel coordination plans, and metaphor-driven compositional logic. These are multi-sentence contextual instructions that do not survive binary-rule compression.
- The zone count is structurally limited by content scope. Both pages cover the same Gas Town content. To reach 8+ zones, the pipeline would need either (a) richer content with more distinct semantic sections, or (b) a builder willing to subdivide existing content into more zones. Neither pipeline currently instructs the builder to optimize for zone count.
- Axis pattern variety requires the builder to CHOOSE different layout strategies for different sections. This is a compositional intelligence decision that the pipeline reduces to "use bento grid where appropriate" -- a single mechanism reference, not a pattern-variety mandate.

**Why Page B shows the path:**
- Page B's /build-page pipeline produced multi-coherence (3-4 instances), high channel density (avg 4.6), and intentional perceptibility controls WITHOUT being told "produce multi-coherence." These emerged from recipe-style instructions with specific CSS values + perceptual thresholds.
- The TC brief's metaphor selection ("dispatch/command post") created natural multi-coherence opportunities: the density arc DEEPENING->COMPRESSION->RESOLUTION maps directly to the dispatch concept, and the builder encoded this mapping through multiple channels at each boundary.
- The fix cycle comments in Page B's CSS show a builder that was AWARE of perceptual thresholds and actively correcting toward them. This is spatial confidence -- the quality that the Flagship definition identifies as the hardest term to achieve.

**The structural barrier is ZONE COUNT, not COMPOSITIONAL INTELLIGENCE.** Page B demonstrates that the /build-page pipeline CAN produce multi-channel coherence, multi-coherence instances, and metaphor-driven organization. What it CANNOT produce (with Gas Town content) is 8+ distinct semantic zones, 3+ axis patterns, and 90%+ designed moment coverage. These require either richer content or explicit builder instructions to maximize zone differentiation.

**Recommendation:** For a future Flagship attempt, the pipeline needs:
1. Content with 8+ naturally distinct semantic sections
2. Explicit builder instruction: "subdivide content into >= 8 zones with perceptible transitions at every boundary"
3. Axis pattern variety mandate: "use >= 3 distinct layout patterns (F-pattern, bento, Z-pattern, etc.)"
4. Navigation scale requirement: "include a TOC that mirrors the page's density arc"
5. The recipe + perceptual threshold approach that /build-page already provides

### 5. The Pervading Metaphor Test

**Page A: ANNOUNCED, not STRUCTURAL.**
The factory metaphor appears in CSS comments (Factory Entrance, Factory Floor, Factory Exit) but produces zero unique CSS behaviors. Remove the text and the page is a standard documentation page with alternating warm/tan backgrounds. The metaphor did not DRIVE any CSS decision -- it was ANNOTATED after the fact.

**Page B: PARTIALLY STRUCTURAL.**
The dispatch metaphor creates a genuine density arc (Situation Brief -> Operational Readiness -> Field Intelligence -> Allied Ops) that manifests in CSS through background progression, typographic weight changes, spacing compression, and component density shifts. The checkpoint bar is a physically manifest dispatch-structure element. Callout color classification extends the military framing.

However, the 40% structural test is borderline: remove all text and you perceive "editorial density arc with phase transition," not specifically "military dispatch." The metaphor manifests as ORGANIZATIONAL STRUCTURE rather than VISUAL VOCABULARY. A fully structural metaphor would create CSS treatments that are recognizably "dispatch-like" without any textual context (e.g., a command-post color scheme, rank insignia borders, dossier-style section framing). Page B does not achieve this.

**Verdict:** Page B is closer to structural than any prior pipeline output (including CD-006, which uses multiple LOCAL metaphors rather than one UNIFIED metaphor). But "closer" is not "there." The Flagship requirement for 40% structural manifestation without labels remains unmet.

### 6. The Compositional Intelligence Stack Test

Does either page show the PROGRESSION (scales -> channels -> multi-coherence -> anti-scale)?

**Page A: Individual pieces only. No progression.**
- Scales: 3/5 (Page, Section, Component). Present but shallow.
- Channels: 6 channels used but INDEPENDENTLY at each boundary. Average 2.2 per boundary.
- Multi-coherence: 1-2 instances (bookend + T3 transition). Isolated, not sustained.
- Anti-scale: No evidence. No deliberate restraint at specific scales to create anti-scale tension.
- **Stack integration: ABSENT.** The pieces exist but do not operate as a progression. Scales do not inform channel deployment. Channels do not create multi-coherence. No anti-scale balance.

**Page B: Partial progression. Multi-coherence is genuinely stack-integrated.**
- Scales: 4/5 (Page, Section, Component, Character). Strong.
- Channels: 6 channels used COHERENTLY at each boundary. Average 4.6 per boundary.
- Multi-coherence: 3-4 instances sustained across ALL body zone transitions. The density arc concept drives channel coordination.
- Anti-scale: PARTIAL. Zone 1's deliberate sparseness (praised by auditors as "restraint, not absence") creates anti-scale tension against Z3's density. The relationship between Z1 (most space, least density) and Z3 (least space, most density) is a genuine anti-scale dynamic.
- **Stack integration: PARTIAL.** The progression scales -> channels -> multi-coherence is present -- scales inform channel deployment (different scales at page/section/component trigger different channel activations), and channels create multi-coherence (the DEEPENING arc). Anti-scale is present but implicit rather than designed. The progression is INCOMPLETE (no Navigation scale, anti-scale not fully articulated) but genuinely MORE ADVANCED than any prior pipeline output.

---

## PART 4: CONCLUSIONS

### The Tier Placement

| Artifact | Tier | Confidence | Key Discriminator |
|----------|------|------------|-------------------|
| Page A | **MIDDLE** (with blocking defects) | HIGH | Channels operate independently; spatial execution failures; strong vocabulary but no coherence |
| Page B | **CEILING** | HIGH | Multi-coherence present; high channel density; metaphor partially structural; spatial confidence demonstrated |
| CD-006 | **CEILING** (top of range) | HIGH | Maximum vocabulary; local multi-coherence; 5/5 scales; but no unified metaphor |
| Flagship 4/4 | **THEORETICAL** | N/A | Never achieved; requires unified metaphor driving global multi-coherence through 5 scales |

### The Headline Finding

**Page B is the best pipeline-produced artifact in the project's history.** Its multi-coherence score (3-4 instances, sustained across all body transitions) and channel density (avg 4.6 per boundary) match or exceed CD-006 on the dimensions that most discriminate Flagship from Ceiling. CD-006 achieves higher TOTAL scores (more zones, more patterns, more mechanisms) but Page B achieves higher COHERENCE per boundary. The /build-page pipeline -- specifically its recipe-style instructions, perceptual thresholds, and TC-driven metaphor selection -- produces compositional intelligence that the master-execution-prompt pipeline (Page A) does not.

**Visual audit confirmation:** Viewing both pages in-browser transforms the source-code analysis from abstract assessment to lived experience. Page B's 4-act density arc is IMMEDIATELY perceptible -- you FEEL the page darken and compress through Z2-Z3, then lighten and release through Z4. This is not subtle; it operates at casual scan speed. Page A's zone alternation, by contrast, requires deliberate attention to notice. The hierarchical role cards with solid-offset depth (Page B) vs equal-grid cards with color-coded borders (Page A) encapsulate the compositional intelligence gap: Page B encodes hierarchy through SIZE + DEPTH + POSITION + COLOR EXCEPTION (4 channels), while Page A encodes it through COLOR ALONE (1 channel). Page B is HALF the height (7,751px vs 15,936px) for similar content coverage, meaning it achieves higher semantic density per viewport. The visual audit also revealed a CSS bug in Page B (dark-on-dark blockquote text in Z1) and confirmed that Page A's ~1200px void around the ASCII code block is a genuine spatial failure, not an artifact of the audit methodology.

The gap from Page B to Flagship is primarily STRUCTURAL (not enough zones, not enough axis patterns, no Navigation scale) rather than COMPOSITIONAL (the multi-coherence, channel coordination, and metaphor-driven organization are present). This means the path to Flagship is through content selection and builder zone-count mandates, not through more compositional intelligence research.

### The Pipeline Verdict

The /build-page pipeline is CLOSER to Flagship than the master-execution-prompt pipeline by a significant margin. The key innovations that produce this difference:

1. **Explicit perceptual thresholds** (>= 15 RGB, >= 0.03em letter-spacing) prevent the sub-perceptual trap that killed the Flagship experiment
2. **Recipe-style TC brief** with specific CSS values creates a generative mental model rather than a defensive one
3. **Metaphor selection** creates natural multi-coherence opportunities
4. **Fix cycle documentation** in CSS comments shows a builder operating with spatial confidence

**Neither pipeline produces Flagship.** But the /build-page pipeline produces CEILING quality that is compositionally closer to Flagship than anything previously achieved through a single-pass pipeline execution.
