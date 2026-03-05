# Audit: Evidence Gaps in Definitive Document

**Auditor:** audit-evidence agent
**Documents reviewed:**
- `00-INVENTION-GAP-DEFINITIVE.md` (847 lines)
- `01-exploration-invention-catalog.md` (264 lines)
- `02-pipeline-structural-flatness.md` (488 lines)

**Method:** Line-by-line comparison of every finding, example, CSS technique, nuance, and data point in both source documents against the definitive document.

---

## Critical Gaps (missing findings that significantly weaken the argument)

### CG-1: Molly Build Skeleton Inventory Detail Entirely Missing

**Source:** 02, lines 178-303 (125 lines of detailed Molly skeleton analysis)
**What's missing:** The definitive document (Part 2.2, lines 204-208) gives only 5 lines to the Molly build's skeleton analysis. The source document identifies **8 distinct skeleton types** (A through H) for the Molly build, each with detailed HTML structure examples:

- **Skeleton C: Corridor Separator** (5 instances between zones) -- the definitive mentions "corridor transitions" in passing but never describes the structural pattern
- **Skeleton D: Anti-Pattern Block** (4 blocks in Zone 5) -- completely absent from the definitive
- **Skeleton E: Checkpoint Block** (4 instances in Zone 5) -- completely absent
- **Skeleton F: Constellation Quotes** (odd/even indent alternation creating zigzag) -- mentioned once in passing ("zigzag constellation indentation") but the structural detail is lost
- **Skeleton G: Waypoint/Inversion** (negative margins bleeding outside container, full-bleed dark breaks) -- mentioned as "full-bleed dark inversions" but the key structural innovation (negative margins escaping the container) is lost
- **Skeleton H: Pulse Claim/Response** (720px claims vs 576px/80% responses with 40px left indent) -- mentioned numerically but the structural analysis of why this is a "visible width oscillation" is compressed away

**Impact:** The Molly build appears to get a cursory treatment compared to Yegge. The definitive's argument is that both builds are structurally flat, but the Molly analysis in the source is MORE NUANCED -- it finds more skeleton types (8 vs 5 for Yegge), more width modulation, and more transitional devices. The definitive loses this nuance, making the argument appear less rigorous.

**Insert at:** Lines 204-208 (expand the Molly section)

### CG-2: Yegge Build Skeleton Inventory Detail Missing

**Source:** 02, lines 10-98 (detailed skeleton A through E with HTML examples)
**What's missing:** The definitive (lines 198-202) summarizes Yegge in 4 bullet points but drops the following from the source:

- **Skeleton B: Card Grid** -- the key nuance: the grid only applies to Town-Level cards; Rig and Worker roles REVERT to vertical stacking. This is a crucial observation (the one grid moment is incomplete -- it doesn't even sustain through its own section)
- **Skeleton C: Tiered Border Cards** -- structurally vertical stacking with interleaved meta-indicators; the only spatial change is border-weight. Entirely missing from definitive.
- **Skeleton D: Memory Tiers** -- three vertically-stacked boxes with different left-border widths. The definitive doesn't mention this component at all.
- **Skeleton E: Quote List** -- 15 voice/context pairs with width differential (90%/60%). The width differential detail is lost.

**Impact:** The definitive's claim that "77% of sections use Skeleton A" is present but the evidence supporting it (the enumeration of which specific sections use which skeleton) is absent. The reader is asked to trust a percentage without seeing the breakdown.

**Insert at:** Lines 198-202 (expand the Yegge section)

### CG-3: Molly Build Reading Path Detail Missing

**Source:** 02, lines 307-325 (full reading path notation for all 6 zones + corridors)
**What's missing:** The definitive (lines 223-230) gives only the Yegge reading path in simplified form and omits the Molly reading path entirely. The source provides a detailed zone-by-zone notation showing:

- Zone 1 includes a `[CENTERED WAYPOINT]`
- Zone 2 includes `4-COLUMN GRID [AXIS CHANGE 1]` + handoff-channel + 2-zone code blocks
- Zone 4 includes `[DARK INVERSION BLEED]` + PULSE claim/response oscillation
- Zone 6 includes constellation-quotes `[zigzag]` + mental-model-summary

This is the primary EVIDENCE for the "1 axis change" claim for the Molly build. Without it, the claim is asserted rather than demonstrated.

**Insert at:** After line 230 (add Molly reading path)

### CG-4: "What question generated it?" Links -- Incomplete Coverage

**Source:** 01, lines 20-264 (every invention has a "What question generated it?" field)
**What's missing:** The definitive preserves the question-to-invention link for SOME inventions but drops it for many. Specifically missing:

- **1.1 Hub-Spoke (OD-005):** The definitive mentions the technique but drops the question: "What if documentation was organized spatially -- as a hub-and-spoke map where users navigate between territory zones -- rather than linearly?" This is a STRUCTURAL question that directly supports the Part 4 argument about Category 3.
- **1.2 Named Grid Areas (OD-005):** Question dropped: "Content within each spoke needed a magazine-layout (EXT-SPAT-003: 7-column magazine grid)"
- **1.4 Spiral Layout (AD-006):** Question dropped: "Golden-ratio nesting spirals inward toward core insight"
- **2.1 Scroll Witness (OD-006):** Question partially preserved but loses the key phrase: "Can CSS-only progress indicators track section reading progress? The page WITNESSES its own consumption."
- **2.2 Fractal Annotation (OD-006):** Question dropped: "Can FRACTAL be made visible?"
- **2.3 Geological Minimap (OD-004):** Question dropped: "The header should contain a miniature version of the page's confidence stratification"
- **2.4 Visual Index (OD-006):** Question dropped: "Can the page show miniature visual signatures of each section's pattern, like a specimen sheet?"
- **2.5 Recursive TOC (OD-006):** Question dropped: "Can a TOC be fractal -- its own 3-level structure mirroring the page's nested structure?"
- **2.6 Confidence Switcher (OD-004):** Question dropped: "Confidence-level switcher lets readers choose how deep they want to go"
- **2.7 Chapter Progress Dots (OD-001):** No question link preserved
- **3.1 Scroll-Driven Animations:** Question dropped: "Elements should fade+translate into viewport as the reader scrolls, creating a sense of content 'arriving' rather than being static"
- **3.3 Diagonal clip-path (AD-005):** Question partially present but loses the "dual-signal property" detail: "one CSS technique encoding two meanings"
- **3.4 Collapsing Headers (OD-006):** Question dropped: "Sticky headers carry the organizational mode indicator"
- **4.2 Q&A Pairs (OD-001):** Question partially present but loses: "Width encodes the speaker (narrow question = human asking, wide answer = system responding)"
- **4.3 Narrative Arc (OD-002):** Question dropped: "What if documentation followed a story arc -- setup, confrontation, resolution?"
- **4.4 Task Islands (OD-003):** Question dropped: "What if documentation was organized as discrete task islands?"
- **4.5 Evidence DNA (OD-004):** Question partially preserved
- **4.6 Bookend Structure (OD-003):** No question link at all
- **5.1 Dual-Lens (OD-006):** Question dropped: "Can the same content be viewed through two lenses?"
- **5.2 Semantic Bridge (OD-006):** Question dropped: "Can hovering over a concept in prose highlight the corresponding code?"
- **5.3 Core Abstraction (CD-005):** Question dropped
- **5.4 Reasoning Columns (CD-005):** Missing entirely -- see CG-5
- **5.5 Transition-as-Component (CD-005):** Question dropped: "At CD scale, transitions need to be more than spacing -- they need to reorient the reader"
- **5.6 Pattern Visualization (DD-006):** Question partially present

**Impact:** The question-to-invention links are THE key evidence for the Part 4 argument that the types of questions determine the types of answers. Every dropped question link weakens that argument. The source documents carefully preserve which exploration question generated which invention -- this is the causal chain from question to structure.

### CG-5: Two Inventions Dropped Entirely

**Source:** 01, lines 199-208 (Reasoning Columns 5.4 and Transition-as-Component 5.5)
**What's missing:**

- **5.4 Reasoning Columns** (CD-005): The definitive mentions "Reasoning Columns" nowhere. The source describes a 3-zone compound (header + columns + summary) that is richer than the catalog description (which only mentions "2-column grid with `::before` list markers"). The "PARTIALLY in catalog" status is important -- it shows the gap between cataloged description and actual implementation.

- **5.5 Transition-as-Component** (CD-005): Mentioned tangentially nowhere. The source describes transitions being promoted from spacing rules to full COMPONENTS with headers, content, and callouts. This is a key finding about the gap between catalog descriptions and exploration implementations.

**Impact:** The inventory count stays at 29 but two items within Category 5 are absent. Since Category 5 is the shortest section in the definitive (lines 180-192), losing 2 of 6 items means 33% of the compound component evidence is missing.

**Insert at:** Lines 189-192 (expand Category 5)

### CG-6: Producibility Assessment Per Invention Missing

**Source:** 01, lines 249-264 (producibility assessment + final analysis)
**What's missing:** The source document provides a "Pipeline builder producible?" assessment for EVERY SINGLE invention (29 total), with 4 possible ratings: YES, NO, PARTIALLY, UNLIKELY. The definitive gives only aggregate numbers (lines 107-108, 146, 192) but drops the per-invention reasoning. Key nuances lost:

- Some "PARTIALLY" inventions have the individual mechanism cataloged but the compound deployment is not instructed (e.g., Confidence Strata 4.1 uses border-weight + spacing compression + font + line-height + background all shifting simultaneously -- each individually known but the compound is not)
- Some "UNLIKELY" inventions are simple CSS but have no instruction generating them (e.g., Chapter Progress Dots 2.7, Bookend Structure 4.6)
- The distinction between "NO" (zero vocabulary) and "UNLIKELY" (technically possible, no instruction) is a nuance the definitive loses

**Impact:** The producibility assessment is the bridge between "explorations have these inventions" and "the pipeline cannot produce them." Without per-invention reasoning, it's an assertion rather than demonstrated evidence.

### CG-7: Source 02's "The Deepest Problem" Framing Partially Lost

**Source:** 02, lines 445-470 (detailed analysis of metaphor as label vs metaphor as structure)
**What's missing:** The definitive captures the "metaphor-as-decoration vs metaphor-as-architecture" distinction well (line 232), but drops three specific exploration-to-pipeline comparisons from the source:

1. DD-006's "fractal self-similarity" creates nested layouts that echo at every scale (present in definitive)
2. CD-001's "velocity interleaving" creates alternating fast/slow structural rhythms (present in definitive)
3. **The key missing insight:** "The pipeline produces metaphor-as-decoration. Explorations produce metaphor-as-architecture." -- while this phrase appears in the definitive, the detailed evidence of WHAT exploration metaphors generated structure is thin. The source explicitly contrasts how hub-spoke in "several explorations" creates a central grid that radiates to detail sections -- this structural detail is compressed.

**Impact:** Minor -- the definitive captures the essence. But the specific CD-001 example and the hub-spoke radiating pattern add concrete evidence.

---

## Nuance Gaps (present but insufficiently detailed)

### NG-1: Molly's Unique Structural Contributions Underdeveloped

**Source:** 02, lines 174-383 (the entire Molly section)
**What's weak:** The definitive treats Molly as "same as Yegge but with different numbers." The source document reveals Molly has ADDITIONAL structural devices not found in Yegge:

- **Corridor separators** (Skeleton C): 5 distinct transitional bands between zones. Yegge uses `<hr>` dividers. Molly has styled corridors with bridge text that name the transition. The definitive mentions these in passing but doesn't note they're a Molly-specific structural feature absent from Yegge.
- **Waypoint/Inversion bleeds** (Skeleton G): Negative margins bleeding outside the container. This is a genuine width-breaking technique not present in Yegge. The definitive mentions "full-bleed dark inversions" but doesn't note this is structurally distinct from anything in Yegge.
- **Pulse Claim/Response oscillation** (Skeleton H): A structural alternation pattern (720px/576px with 40px indent) used for ~6 instances in Zone 4. More sustained than Yegge's single-instance voice eruptions.
- **Constellation zigzag** (Skeleton F): Alternating left margins creating a gentle zigzag reading path. Trivial but structurally distinct from Yegge.

The Molly build is actually MORE structurally varied than Yegge (8 skeleton types vs 5), which makes the "still flat" conclusion stronger -- even with more structural variety, the reading path remains fundamentally vertical.

**Strengthen at:** Lines 204-208

### NG-2: The "9 Section Structures = 1 Structure Worn 9 Ways" Insight Underweighted

**Source:** 02, lines 401-411
**What's weak:** The definitive captures the skeleton comparison table (lines 210-219) but drops the killer paragraph from the source (lines 401-411):

> Both builds have ~8-9 `<section>` elements in the HTML. The CSS applies different backgrounds, font sizes, spacing, and border weights to each. In CODE, these look different. A CSS audit would say "9 distinct zone treatments with different typographic scales, spacing values, and background colors." But **structurally, without CSS**, every zone uses the same skeleton.

This is the clearest articulation of the "wallpaper" thesis -- that CSS variety creates the ILLUSION of structural variety. A developer looking at the code might think "9 distinct sections" when the reality is "1 skeleton with 9 skins." This point is present in spirit in the definitive but the explicit "CSS audit would say" vs "structural reality" contrast is lost.

**Strengthen at:** Around lines 196-197

### NG-3: Width Modulation as Pipeline's Sole Spatial Vocabulary Underweighted

**Source:** 02, lines 413-418
**What's weak:** The definitive mentions width variation (lines 221) but drops this precise formulation from the source:

> This is the pipeline's spatial vocabulary: **one column of varying width**. It never becomes two columns. It never creates facing content. It never nests. The width variation is real and perceptible, but it operates within a single axis.

The four "never" statements are more powerful than the definitive's current treatment. They establish what the pipeline CANNOT do, not just what it does.

**Strengthen at:** Line 221 area

### NG-4: "Labels vs Wayfinding" Distinction Compressed

**Source:** 02, lines 137-148
**What's weak:** The definitive states "section indicators are labels, not wayfinding" (line 146) but drops the critical distinction from the source:

> The section-indicators are LABELS, not WAYFINDING. They tell you where you are in a sequence, not how the page is organized spatially. Compare to exploration tension bars (which visualize the content's internal dynamics) or hub grids (which show the relationship between sections).

The label/wayfinding distinction is the bridge between "self-aware components = 0" and "why it matters." Without it, the reader might ask "but section indicators ARE a form of page awareness." The source pre-empts this objection.

**Strengthen at:** Line 146

### NG-5: The "Tower Descent Test" and "Observatory Test" Specific Questions Lost

**Source:** 02, lines 152-171 and 362-382
**What's weak:** The definitive captures the conclusions of both tests but drops the specific "What would structural X look like?" question format from the source. For Yegge:

> What would structural tower descent look like:
> - Visual field narrows as you descend (container width shrinks)
> - Sections get shorter/denser
> - Typography compresses
> - Possibly: the page literally gets narrower, or sections nest inside each other

And for Molly:

> What would structural observatory look like:
> - A central hub you return to (the tower center)
> - Different "instruments" or "lenses" that reframe the same content differently
> - The ability to look at content from different angles
> - A persistent sense of position/orientation

These hypothetical questions are powerful because they show what COULD have been. They make the gap concrete by envisioning what structural metaphor embodiment would produce. The definitive says "the metaphor doesn't generate structure" but doesn't show what it WOULD look like if it did.

**Strengthen at:** Lines 202-207

### NG-6: Collapsible `<details>` as Structural Pattern Absent from Technique Table

**Source:** 01, line 244
**What's weak:** The definitive's Advanced CSS table (lines 152-161) omits `<details>` as collapsible structural pattern, listed in the source's "Key CSS Techniques NOT in Pipeline Vocabulary" table. While `<details>` is technically HTML not CSS, the source explicitly includes it as a structural technique absent from the mechanism catalog.

**Strengthen at:** Lines 152-161

### NG-7: Exploration-to-Pipeline Comparison Numbers from Source 02 Partially Missing

**Source:** 02, lines 430-443 (comparison of specific explorations)
**What's weak:** The definitive includes the Gap Numbers table (lines 33-39) but drops the specific exploration-level comparisons from the source:

> - DD-006: Hub grid, nested layouts, scroll witness, tension bars = 4+ structural inventions
> - CD-006: Bento grid at climax, velocity interleaving, fractal nesting = 3+ structural inventions
> - CD-001: Hub-spoke, bento grid, dialogic facing = 3+ structural inventions

These three specific examples ground the "6+" axis changes claim. Without them, the "6+" number appears to come from nowhere.

**Strengthen at:** After line 230

### NG-8: Molly's "Absent Spatial Relationships" List Missing

**Source:** 02, lines 338-344
**What's weak:** The definitive includes Yegge's absent spatial relationships indirectly but drops Molly's specific absent list:

1. Hub-spoke (despite "observatory" metaphor)
2. Nested layouts
3. Side-by-side comparison (comparison table uses a table, not side-by-side panels)
4. Radial/concentric (despite "panopticon" metaphor)
5. Overlapping/layered
6. Self-referential structure

The parenthetical notes for #1 and #4 are especially powerful -- they show that the METAPHOR implies a spatial organization that the BUILD does not create. "Panopticon" implies radial/concentric but the structure is vertical.

**Strengthen at:** Lines 207-208

### NG-9: Source 01's Summary Statistics Table

**Source:** 01, lines 219-228
**What's weak:** The definitive gives the aggregate (29 total, 0 fully in catalog, 21 absent, 8 partially) at line 192 but drops the per-category breakdown table:

| Category | Count | In Catalog | NOT in Catalog | Partially |
|---|---|---|---|---|
| Spatial Organization | 5 | 0 | 5 | 0 |
| Self-Aware Components | 7 | 0 | 6 | 1 |
| Advanced CSS | 5 | 0 | 4 | 1 |
| Content-as-Form | 6 | 0 | 2 | 4 |
| Compound Components | 6 | 0 | 4 | 2 |

This table shows that Content-as-Form has the highest "PARTIALLY" count (4 of 6) while Spatial Organization has zero partial -- a nuance supporting the thesis that the gap is about spatial organization (completely absent), not about individual mechanisms (partially present).

**Strengthen at:** After line 192

### NG-10: Source 02's Conclusion Section Nuances

**Source:** 02, lines 474-488
**What's weak:** The source's conclusion is more nuanced than the definitive's treatment:

> 1. Both builds have exactly 1 grid moment each. This is not zero structural invention -- it's minimal structural invention.
> 2. Both builds have meaningful width modulation... This enriches the vertical flow but doesn't break it.
> 3. The 6-zone/6-zone structure creates genuine textural variety... This is real design work. It's not nothing.
> 4. But the HTML skeleton is the same room used 8-9 times with different CSS applied.

Point 3 is important: "This is real design work. It's not nothing." The definitive acknowledges pipeline achievements but less explicitly. The source is more generous in recognizing what the pipeline DOES accomplish before pivoting to what it doesn't.

The source also ends with this precise framing:

> The question for the pipeline is not "how do we add more CSS variety" -- it's "how do we get metaphors to generate HTML structure, not just CSS texture."

This reframe is not present in the definitive's conclusion section (Part 8). The definitive focuses on the question taxonomy as the bottleneck, which is correct but misses this specific architectural reframe from Source 02.

**Strengthen at:** Part 8, around lines 816-828

---

## User Answer Integration Gaps

### UAI-1: Root Cause = "All of the Above but Also External Factors" (Question Framework)

**How well integrated:** WELL INTEGRATED in Parts 1, 4, and 8. The definitive dedicates significant attention to this insight:
- Part 1 (lines 53-66): Explicitly states the question framework is the bottleneck
- Part 4 (lines 385-404): Full section on "The Question Framework Shapes the Possibility Space"
- Part 8 (lines 740-798): Unified model built around this insight

**Where it's weak:**
1. **Part 3 (Compression Chain):** The "Three Kill Points" analysis (lines 236-318) is presented as an INTERNAL pipeline failure without connecting back to the user's "also external factors" insight. Kill Point 1 (TC exemplars are 100% texture) could explicitly note: "This is not just a prompt design choice -- it reflects the THEORY OF DESIGN embedded in the pipeline. The types of exemplars encode what the pipeline designers understood 'good design' to mean. The question framework is an external factor shaping all downstream possibility." Currently, the kill points are presented as fixable prompt bugs rather than as manifestations of a deeper theoretical constraint.

2. **Part 5 (Content-Form Derivation):** Lines 446-452 describe the "causal reversal" but don't connect it to the external factor insight. The causal reversal (metaphor first vs content logic first) IS the external factor -- it's the theory of design that shapes what questions are asked. The definitive should explicitly bridge: "The pipeline's causal order (metaphor -> structure) vs explorations' order (content logic -> structure) is not a process bug -- it is the manifestation of the external factor the user identified. The theory of design embedded in the pipeline determines the causal order, which determines the question types, which determines the outputs."

3. **Part 2 (Evidence):** The evidence sections present findings as facts without connecting them to the question-framework thesis. For example, the "0 self-aware components" finding (lines 146) could note: "This absence is predictable from the question framework -- the pipeline asks no Category 6 questions, so Category 6 answers (self-aware components) cannot emerge."

### UAI-2: Metaphor + Content Logic = "Equal Partners with Emphasis on Content Logic"

**How well integrated:** MODERATELY WELL. Part 5 (lines 454-465) has a dedicated section. Part 8 (lines 774-783) revisits it.

**Where it's weak:**
1. **Occasional slippage toward "replace metaphor with content logic":** Line 783 says "the causal arrow must flow from content to structure to metaphor, not from metaphor to structure." This reads as "content logic first, metaphor second" rather than "equal partners." The user said "equal partners with emphasis on content logic" -- which implies metaphor ALSO generates structural ideas, just not at the expense of content logic. The current framing sometimes reads as "content logic drives, metaphor decorates" which is an overcorrection.

2. **The derivation chain (lines 460-464) is hierarchical, not partnership-based.** It lists: OBSERVE content -> DERIVE topology -> DERIVE metaphor -> INFLECT topology. This is a linear hierarchy with content logic at the top and metaphor at the bottom. An "equal partnership" model would be more like: "OBSERVE content structure AND DERIVE metaphor IN PARALLEL, then RECONCILE both into spatial form, with content logic taking priority when they conflict." The current chain makes metaphor a pure derivative of content logic, which contradicts "equal partners."

3. **Part 6 (Universal Structural Questions):** Lines 494-598 discuss structural invention for any content but metaphor is entirely absent from this section. The content archetypes and natural structures are derived purely from content logic. An "equal partner" treatment would note that metaphor can SUGGEST structural forms too -- "tower" suggests vertical compression, "observatory" suggests radial observation, "archipelago" suggests island clusters. The current treatment makes structural invention a purely content-logic-driven process.

4. **Part 7 (Pipeline Implications):** The TC Structural Observation addition (lines 624-633) is content-logic-only. There's no mention of how metaphor and structural observation interact. Could the TC agent derive structural propositions from metaphor too? ("Tower" metaphor -> consider vertical compression as a structural device, not just a textural one.) The "equal partner" model would have both content observation AND metaphor observation feeding structural derivation.

### UAI-3: Three Prescription Levels at Three Stages

**How well integrated:** WELL INTEGRATED. Part 7 (lines 694-721) has a full dedicated section. Part 8 (lines 832-840) summarizes as "Three Deliverables."

**Where it's weak:**
1. **Insufficient specific examples at each level.** The definitive provides one example thread (8 roles at 3 authority levels) that flows through all 3 levels. But only ONE example. A second example (e.g., tutorial content, comparison content, or the Molly observatory build) would demonstrate that the three-level model is general, not just applicable to the Yegge build.

2. **Level 2 (Synthesizer) conflates questions and blueprints.** The definitive describes the synthesizer producing both QUESTIONS and CSS BLUEPRINTS (lines 709-719). These are very different prescription levels -- a question is open-ended ("how should 8 items be arranged?") while a blueprint is specific CSS code. The user said "three prescription levels" but the definitive gives Level 2 two very different outputs without distinguishing them clearly. Should blueprints be Level 2.5 or part of Level 3?

3. **Level 3 (Builder) creative authority boundaries unclear.** The definitive says the builder "invents structure to answer the questions, using blueprints as starting points that can be adopted, modified, or replaced" (lines 718-719). But the definitive also says (line 671): "Grant explicit permission for STRUCTURAL invention... when derived from content's organizational logic, documented in decisions file, and working at all 3 breakpoints." These constraints may conflict -- can the builder truly "replace" a blueprint if they must derive from content logic and document? The tension between creative freedom and documentation requirements needs acknowledgment.

---

## Enrichment Patches

### EP-1: Expand Molly Skeleton Detail (for CG-1)

**Insert after line 208 (after "Width oscillation... do not change the reading path"):**

```
The Molly build actually presents MORE skeleton variety than Yegge (8 distinct skeleton types vs 5), which makes the structural flatness conclusion stronger, not weaker. Molly's additional skeletons include: corridor separators (5 transitional bands with bridge text between zones), anti-pattern blocks (title/symptoms/solutions triplets), checkpoint verification boxes, constellation quotes with odd/even indent alternation creating a zigzag, waypoint/inversion moments using negative margins to bleed outside the 960px container, and pulse claim/response oscillation (720px claims vs 576px responses with 40px left indent, ~6 instances in Zone 4). Despite this richer component vocabulary, the reading path remains fundamentally vertical -- none of these patterns change the eye's direction from top-to-bottom. Even with 8 skeleton types, only 1 (the bento grid) creates a genuine axis change.
```

### EP-2: Add "CSS Audit vs Structural Reality" Contrast (for NG-2)

**Insert after line 197 (after "The findings converge:"):**

```
A CSS audit of either build would report "8-9 distinct zone treatments with different typographic scales, spacing values, and background colors." In code, the sections look different. But strip the CSS and examine the DOM: every zone uses the same skeleton -- `section > container > section-indicator > h2 > [h3 > prose > component]* > hr`. The "9 section structures" are 1 structure worn 9 ways. CSS variety creates the illusion of structural variety.
```

### EP-3: Add Width Modulation "Four Nevers" (for NG-3)

**Insert after line 221 (after the "What the pipeline builds DO achieve structurally" paragraph):**

```
This is the pipeline's spatial vocabulary: one column of varying width. It never becomes two persistent columns. It never creates facing content. It never nests layouts within layouts. It never establishes a non-linear reading path. The width variation is real and perceptible, but it operates within a single axis. [Source: 02]
```

### EP-4: Add Specific Exploration Comparison Numbers (for NG-7)

**Insert after line 230 (after the "6+ axis changes" comparison):**

```
Specific exploration counts confirm the gap: DD-006 uses hub grids, nested layouts, scroll witness, and tension bars (4+ structural inventions); CD-006 uses bento grid at climax, velocity interleaving, and fractal nesting (3+); CD-001 uses hub-spoke, bento grid, and dialogic facing (3+). Each exploration's structural invention count exceeds the pipeline's total across both builds combined. [Source: 02]
```

### EP-5: Add Missing Compound Components (for CG-5)

**Insert after line 189 (after "Pattern Visualization Diagrams" entry):**

```
- **Reasoning Columns** (CD-005): 3-zone compound structure (header + 2-column grid + summary) richer than the catalog description ("2-column grid with `::before` list markers"). The full compound is partially cataloged but its actual implementation extends beyond what's described.

- **Transition-as-Component** (CD-005): Transitions promoted from spacing rules to full components with headers, content, and callouts. `.transition--smooth` = 48px padding + 1px separator + centered heading. `.transition--bridge` = breathing background + 3px borders + contained callout. The transition grammar describes SMOOTH/BRIDGE/BREATHING as spacing types; CD-005 makes them designed components that reorient the reader. [Source: 01]
```

### EP-6: Strengthen External Factor Integration in Kill Points (for UAI-1 weakness 1)

**Insert after line 255 (after "The TC agent produces texture questions."):**

```
This is not merely a prompt design oversight. It is the manifestation of the theory of design embedded in the pipeline: that design means applying texture to a standard structure. The exemplars encode this theory. The TC agent inherits it. The types of questions generated are not just constrained by the exemplars -- they are constrained by the conceptual framework that produced those exemplars. This is the "external factor" the user identified: the question framework itself, as a product of how design is understood, shapes what the pipeline can discover.
```

### EP-7: Add Metaphor as Equal Partner in Part 6 (for UAI-2 weakness 3)

**Insert after line 465 (after "steps 1 and 2 entirely"):**

```
Importantly, metaphor is not demoted to mere decoration in this model. Metaphor can SUGGEST structural forms: "tower" suggests vertical compression, "observatory" suggests radial observation, "archipelago" suggests island clusters. The difference is that in the corrected model, metaphor-suggested structures are validated against content logic rather than assumed as default. A "tower" metaphor for content with 8 parallel roles should trigger the question: "Does this content actually descend hierarchically, or are these parallel entities that happen to be described using a vertical metaphor?" Content logic and metaphor are equal partners, but content logic arbitrates when they conflict.
```

### EP-8: Add Per-Category Summary Statistics Table (for NG-9)

**Insert after line 192 (after "The gap is compound deployment driven by content logic."):**

```
The per-category breakdown reveals where the gap is sharpest:

| Category | Count | Fully Absent | Partially Present |
|---|---|---|---|
| Spatial Organization | 5 | 5 (100%) | 0 |
| Self-Aware Components | 7 | 6 (86%) | 1 |
| Advanced CSS | 5 | 4 (80%) | 1 |
| Content-as-Form | 6 | 2 (33%) | 4 |
| Compound Components | 6 | 4 (67%) | 2 |

Spatial Organization is 100% absent -- zero partial presence. Content-as-Form is 67% partially present -- the individual mechanisms exist but the compound deployment is not instructed. This distinction matters: the pipeline's vocabulary gap is steepest for spatial organization and self-aware components, while its compound deployment gap is steepest for content-as-form inventions. [Source: 01]
```

### EP-9: Add "What Structural Metaphor Would Look Like" for Molly (for NG-5)

**Insert after line 208 (as part of expanded Molly section):**

```
What would a structural observatory look like? A central hub the reader returns to (the tower center). Different "instruments" that reframe the same content differently. A persistent sense of orientation (always in the tower, looking outward). Non-linear navigation with a hub-spoke layout or view selector. The Molly build has none of these: despite the "panopticon" metaphor implying radial/concentric organization, the structure is vertical. The observatory has no tower center. [Source: 02]
```

### EP-10: Add Second Three-Level Example (for UAI-3 weakness 1)

**Insert after line 588 (after the Yegge three-level derivation example):**

```
**Applied to Molly Panopticon -- the 8-domain section:**

**TC Structural Observation (Level 1 -- OBSERVE):**
> **Content archetype:** REFERENCE/CATALOG (8 parallel domains, each independent, all observed from a central vantage)
> **Inherent spatial logic:** 8 simultaneous observation domains -- inherently parallel, not sequential. The reader should see all 8 at once before diving into any one.

**Synthesizer Structural Question (Level 2 -- QUESTION):**
> Can the 8 domains be presented so the reader sees them simultaneously -- as an observatory instrument panel -- rather than scrolling through them sequentially? Can the reader choose which domain to examine first?

**Builder Invention (Level 3 -- INVENT):**
> The builder receives the question and might implement a persistent 2x4 grid with progressive disclosure: each domain card shows a summary visible at all times, with `<details>` for drill-down. The grid persists as a navigational hub. Work domains on one row, life domains on another, encoding the work/life categorization spatially. The TC brief explicitly proposed this grid -- "perhaps 4+4 with work domains on one row and life domains on another" -- but it died in the synthesizer.

This second example shows the three-level model is general: it works for taxonomy content (Yegge roles) and catalog content (Molly domains) alike. The structural question changes based on the content's nature, but the observe-question-invent flow is constant.
```

### EP-11: Add Molly Reading Path Detail (for CG-3)

**Insert after line 228 (after the Yegge reading path):**

```
The Molly build reading path shows the same pattern:

```
Zone 1: ↓ section-indicator → ↓ h2 → ↓ prose → [CENTERED WAYPOINT] → ↓ prose
Zone 2: ↓ section-indicator → ↓ h2 → ↓ file-tree → 4-COLUMN GRID [AXIS CHANGE 1] → ↓ prose → ↓ code blocks
Zone 3: ↓ section-indicator → ↓ h2 → ↓ table → ↓ prose
Zone 4: ↓ section-indicator → [DARK INVERSION BLEED] → PULSE claim/response oscillation → ↓ prose
Zone 5: ↓ section-indicator → ↓ code blocks → ↓ anti-patterns → ↓ checkpoints
Zone 6: ↓ constellation-quotes [zigzag] → ↓ mental-model-summary → ↓ table
```

Total axis changes: 1 (the 4-column instrument grid in Zone 2). The constellation zigzag and pulse width oscillation are embellishments to the vertical flow, not true axis changes. [Source: 02]
```

---

## Summary

**Critical Gaps:** 7 found. Most significant are CG-1 (Molly skeleton detail missing), CG-3 (Molly reading path missing), CG-4 (question-to-invention links dropped for ~20 of 29 inventions), and CG-5 (two inventions entirely dropped).

**Nuance Gaps:** 10 found. Most significant are NG-1 (Molly's unique structural contributions), NG-2 (the "CSS audit vs structural reality" insight), and NG-5 (the "what would structural metaphor look like" hypotheticals).

**User Answer Integration:** Answer 1 (external factors/question framework) is well integrated in Parts 1/4/8 but weakly connected in Parts 2/3/5. Answer 2 (equal partners) occasionally slips toward "content logic drives, metaphor decorates" -- the derivation chain is hierarchical rather than partnership-based. Answer 3 (three levels at three stages) is well integrated but needs a second example and clearer boundary between Level 2 questions and Level 2 blueprints.

**Total enrichment patches:** 11 provided with specific insertion points and ready-to-insert text.
