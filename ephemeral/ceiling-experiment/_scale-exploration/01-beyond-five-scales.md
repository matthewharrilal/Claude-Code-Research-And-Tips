# Beyond Five Scales: Exploring Scales 6-10

**Agent:** scale-theorist
**Date:** 2026-02-16
**Context:** Current system uses 5 compositional scales (Navigation, Page, Section, Component, Character). This document explores what lies beyond.

---

## Framing: Why Investigate Beyond 5?

The current scale model achieves ~95-98% richness at 5 scales. The question is not "how do we get to 100%?" but rather: **Are there perceptual dimensions we are missing entirely because we defined "scale" as spatial zoom?**

The 5 existing scales are all **spatial zoom levels** on a single page:
- Navigation = widest spatial frame (bird's eye)
- Page = full-scroll spatial frame
- Section = one-screen spatial frame
- Component = one-element spatial frame
- Character = inline spatial frame

This means the entire model is confined to ONE axis: **spatial granularity within a static document**. There are at least three other axes worth exploring:

1. **Sub-character scales** (more granular than Character)
2. **Super-navigation scales** (more expansive than Navigation)
3. **Non-spatial scales** (orthogonal dimensions that are not about zoom level at all)

---

## Scale 6: GLYPH (Sub-Character Micro-Scale)

### Definition
**Zoom level:** You are looking at individual letterforms, punctuation marks, and the spaces between characters.

**What you see at this scale:** Kerning adjustments between specific letter pairs. The weight of individual punctuation marks relative to surrounding text. The vertical alignment of inline code snippets within a line of body text. The tracking (letter-spacing) variation between labels and body text. The exact pixel gap between a bullet marker and its text.

### Concrete Visual Example

On a documentation page about API authentication:

- Section headings use `letter-spacing: 0.02em` (tight, authoritative)
- Callout labels use `letter-spacing: 0.1em` (expanded, meta-level signaling)
- Body text uses `letter-spacing: normal` (neutral baseline)
- Code inline snippets have a 2px horizontal padding that maintains exact x-height alignment with surrounding prose
- The em-dash in "OAuth 2.0 --- the industry standard" uses a custom `margin: 0 0.15em` to avoid touching adjacent words
- Bullet characters (`--`) align to the cap-height of the first word, not the baseline

**Coherence at this scale means:** The letter-spacing progression (0.02em / normal / 0.1em) echoes the same hierarchy as border-weight (4px / 2px / 1px). Tight spacing = structural authority. Wide spacing = meta-level annotation. The same semantic encoding (authority gradient) is visible even at the glyph level.

### Richness Gain and Reproducibility Cost

**Richness gain:** ~0.5-1%. Glyph-level coherence creates an indefinable "polish" sensation. Readers cannot name it but feel the difference between a page with considered kerning/tracking and one with browser defaults.

**Reproducibility cost:** EXTREME. This requires:
- Manual kerning pair specification per typeface
- Awareness of font-specific rendering at sub-pixel level
- Testing across multiple rendering engines (Chrome/Safari handle sub-pixel differently)
- Approximately 40-60 additional CSS declarations for a single page

**Agent compliance:** Near-zero for automated builds. This is hand-finishing work.

### Perceptual Audit Verdict

**Would a PA auditor notice this in a cold-look screenshot?**

NO for individual adjustments. YES for the aggregate effect. An auditor doing a cold-look at 1440px would not think "the letter-spacing on those labels is 0.1em." They WOULD think "this feels polished" or "the labels feel distinct from the body in a way I can't quite name." The effect is subliminal. It would show up in PA-05 ("Would you put your name on this?") as a vague uplift in the DESIGNED dimension, but it would never be the primary observation in PA-01 ("What bothers you first?").

**Classification: REAL but SUBLIMINAL perceptual distinction.** Humans feel it; they cannot point to it.

---

## Scale 7: TEMPORAL (Non-Spatial — Time Dimension)

### Definition
**Zoom level:** This is NOT a spatial zoom. You are observing **how the page changes over time** -- scroll-triggered animations, hover state transitions, progressive reveal sequences, and the timing curves of interactive elements.

**What you see at this scale:** The easing curve of a scroll-triggered fade-in. The delay between hovering a TOC item and its underline appearing. The stagger pattern when multiple cards enter the viewport. The rhythm of how much content is revealed per scroll-unit (fast scroll = sparse landmarks; slow scroll = dense content).

### Concrete Visual Example

On a documentation page about deployment pipelines:

- Scroll-triggered section entrances use a `cubic-bezier(0.16, 1, 0.3, 1)` easing -- fast entry, slow settle, matching the CRESCENDO pattern's "build then breathe" rhythm
- Hover state on callout components: border-left transitions from 1px to 4px over 200ms, using the same easing curve -- the hierarchy mechanism (#1 border-weight gradient) animating in real time
- TOC items gain an active indicator with a 150ms transition that uses the same curve family
- Code block copy buttons: instant feedback (0ms delay on click), 2000ms fade-back -- encoding the same confidence hierarchy (immediate = certain, slow = ambient)
- The page does NOT use scroll-jacking. Content distance per scroll unit is uniform, but the DENSITY of what enters the viewport varies: sparse landmark sections slide in quickly, dense technical sections appear gradually

**Coherence at this scale means:** Every timing curve on the page belongs to the same easing family. Every duration encodes semantic meaning (fast = confident/structural, slow = ambient/decorative). The temporal rhythm mirrors the spatial rhythm -- sections that are spatially compressed also appear faster during scroll.

### Richness Gain and Reproducibility Cost

**Richness gain:** ~2-4%. Temporal coherence is significantly more perceptible than glyph-level coherence because humans are highly sensitive to motion timing. A page where all transitions use the same easing family feels unified. A page where hover uses `linear`, scroll uses `ease-in-out`, and focus uses `ease` feels assembled from parts.

**Reproducibility cost:** HIGH but tractable. Requires:
- A defined easing token system (3-5 curves in the design system)
- Duration tokens (100ms / 200ms / 500ms / 2000ms) with semantic mappings
- Careful interaction between animation and the existing soul constraint (currently no animation rules exist in prohibitions.md)
- Testing across devices (60fps on desktop, potentially janky on mobile)
- Approximately 20-30 additional CSS declarations + a JS intersection observer

**Soul compatibility concern:** The current design system has NO position on animation. `border-radius: 0` and `box-shadow: none` are visual identity constraints, but there is no equivalent temporal identity constraint. Introducing temporal scale would require answering: "What does KortAI motion feel like?" The sharp-edged, flat-surface identity suggests: snappy, no bounce, no elastic overshoot. Linear or ease-out only. No playful timing.

### Perceptual Audit Verdict

**Would a PA auditor notice this in a cold-look screenshot?**

NO, because screenshots are static. This is the fundamental limitation of the current audit methodology. A cold-look screenshot captures Scale 1-5 perfectly but captures Scale 7 (Temporal) at 0%. An auditor would need to interact with the live page to perceive temporal coherence.

**Would a PA auditor notice this in a live page walkthrough?**

YES, strongly. Mismatched easing curves are immediately noticeable in motion. A reviewer scrubbing through a live page would notice "the hover feels different from the scroll entrance" as a PA-03 issue (one designer or three?).

**Classification: REAL perceptual distinction, INVISIBLE to static audit.** This represents a genuine gap in the current audit methodology: temporal coherence cannot be evaluated from screenshots. An auditor visiting the live page would notice temporal incoherence as "feels janky" or "the interactions feel like they were added by someone else."

---

## Scale 8: CROSS-PAGE (Super-Navigation — Multi-Document Scale)

### Definition
**Zoom level:** You are looking at multiple pages simultaneously -- a site map view. Not the content within pages, but the structural patterns ACROSS pages.

**What you see at this scale:** Whether the "API Reference" page and the "Getting Started" page share the same section-level rhythm (or intentionally diverge). Whether dense reference pages use more mechanisms than sparse landing pages. Whether the CRESCENDO pattern on one page resolves into the next page's opening. Whether all pages in a category share the same zone-background progression, or each page has its own.

### Concrete Visual Example

A documentation site with 4 pages:

1. **Getting Started** (sparse, invitational): zone-sparse (#FEF9F5) dominant, 3 sections, generous 80px padding, 6 mechanisms deployed, Navigation + Page scales only
2. **Core Concepts** (moderate, educational): zone-breathing (#FAF5ED) dominant, 5 sections, 48px padding, 10 mechanisms deployed, Navigation + Page + Section scales
3. **API Reference** (dense, utilitarian): zone-dense (#FFFFFF) dominant, 12 sections, 32px padding, 14 mechanisms deployed, all 5 scales
4. **Troubleshooting** (compressed, urgent): zone-bedrock (#1A1A1A) appearing in callouts, 8 sections, mixed padding, 8 mechanisms deployed, Page + Component scales

**Cross-page coherence would mean:**
- The BACKGROUND COLOR TEMPERATURE decreases across the site journey (warm cream -> neutral white -> cool dark), encoding a progression from "welcome" to "deep expertise"
- The MECHANISM COUNT increases with content density, so the API reference page looks richer (more visual techniques) than the Getting Started page
- The SECTION PADDING compresses across pages, so Getting Started feels spacious and API Reference feels packed -- the same compression gradient that exists WITHIN a single page, now operating ACROSS pages
- Each page's header uses the same dark header (#13), but the header's INTERNAL density (amount of nav items, subtitle length) matches the page's density tier

**Coherence at this scale means:** The design system's vocabulary is deployed with consistent semantic reasoning across the entire site. A reader moving from page to page experiences a coherent world, not a collection of individually-designed pages.

### Richness Gain and Reproducibility Cost

**Richness gain:** ~3-5%. Cross-page coherence is highly noticeable to repeat visitors. The sensation is "this site feels like one thing" versus "each page was designed separately." This is particularly important for documentation sites where users navigate across 5-20 pages in a session.

**Reproducibility cost:** MODERATE for planning, HIGH for execution.
- Requires a "site-level composition plan" before individual pages are built
- Each page builder needs awareness of adjacent pages' density/rhythm choices
- Demands coordination that the current per-page pipeline does not support
- The tier model (Floor/Middle/Ceiling) already provides SOME cross-page coherence by standardizing mechanism counts, but it does not address inter-page semantic progression

**Pipeline implication:** The current pipeline builds pages in isolation. Cross-page coherence would require a Phase 0 "site composition plan" that maps density/rhythm intentions across all pages before any individual page is built. This is a significant process change.

### Perceptual Audit Verdict

**Would a PA auditor notice this in a cold-look screenshot?**

NOT from a single page screenshot. YES from side-by-side screenshots of multiple pages. An auditor shown "Getting Started" and "API Reference" next to each other would immediately notice whether they feel like siblings (cross-page coherence) or strangers (independent designs).

**Classification: REAL perceptual distinction, requires MULTI-PAGE audit methodology.** Current PA methodology evaluates single pages. Cross-page coherence is invisible to single-page audit but immediately visible to site-level comparison.

---

## Scale 9: STATE (Non-Spatial — Interactive State Dimension)

### Definition
**Zoom level:** You are observing the page in different interaction states -- not what the page looks like, but what it looks like AFTER user interaction has modified it.

**What you see at this scale:** The visual treatment of an expanded accordion versus a collapsed one. How a sticky TOC item looks in active state versus inactive. How a search filter modifies the page's visual density. What happens when a user has scrolled 80% -- does the visual weight shift? How error states in forms visually integrate with the page's mechanism vocabulary.

### Concrete Visual Example

On a documentation page with interactive elements:

- **Collapsed accordion:** 1px border-left (mechanism #1, low weight = unexplored)
- **Expanded accordion:** 4px border-left (mechanism #1, high weight = active/important) -- the border-weight gradient is now encoding INTERACTION STATE, not just content hierarchy
- **Active TOC item:** solid offset depth (#3, ::after pseudo-element) appears behind active item -- the same depth mechanism used for featured content now signals "you are here"
- **Search with no results:** The page's zone-sparse background darkens slightly to zone-breathing, encoding "reduced content" through the same zone vocabulary used for structural sections
- **Error state in form:** Uses the same callout 2-zone DNA (#2) as content callouts -- Zone 1 is "ERROR" label (uppercase, 12px, red accent), Zone 2 is error description (16px, body)
- **Hover state on code block:** Border transitions from 3px to 4px (mechanism #1 weight increase) + copy button appears with solid offset depth (#3)

**Coherence at this scale means:** Interaction states are encoded using the SAME mechanism vocabulary as static content. The accordion expanding uses border-weight gradient (#1) the same way content hierarchy does. Error states use 2-zone DNA (#2) the same way callouts do. The design system's vocabulary is not just a layout language but also a state language.

### Richness Gain and Reproducibility Cost

**Richness gain:** ~2-3%. State coherence creates the sensation that interactive elements are "native" to the page rather than bolted on. Most documentation sites have a visible seam between their "design system" (layout) and their "interaction patterns" (hover, focus, active states). State-scale coherence eliminates that seam.

**Reproducibility cost:** MODERATE. Requires:
- Mapping each mechanism to its state-variant (border-weight static -> border-weight on-hover)
- Defining a state-mechanism matrix (which mechanisms respond to which states)
- Approximately 30-50 additional CSS declarations (mostly :hover, :focus, :active, .is-expanded variants)
- Not conceptually difficult, but increases the mechanism catalog's surface area significantly

**Key insight:** This scale is surprisingly TRACTABLE because it reuses existing mechanisms. You are not inventing new CSS patterns -- you are extending existing mechanisms to cover interactive states. The vocabulary is the same; only the application context changes.

### Perceptual Audit Verdict

**Would a PA auditor notice this in a cold-look screenshot?**

PARTIALLY. An auditor seeing an expanded accordion would notice whether its visual treatment is consistent with the page's vocabulary (PA-03, one designer or three?). But they would not see the transition between states. Static screenshots capture the END state but not the BEFORE-AFTER comparison.

**Would a PA auditor notice this in a live walkthrough?**

YES. An auditor interacting with the page would immediately notice if hover states "feel different" from static elements. "The hover effect looks like it came from a different design system" is a common PA-03 observation.

**Classification: REAL perceptual distinction, PARTIALLY visible in static audit.** End-states are screenshottable; transitions require live interaction.

---

## Scale 10: SEMANTIC DENSITY (Non-Spatial -- Information Architecture Dimension)

### Definition
**Zoom level:** You are observing the relationship between CONTENT MEANING and VISUAL TREATMENT -- not how things look, but whether the visual weight assigned to content is proportional to the content's semantic importance.

**What you see at this scale:** Whether a "WARNING: This will delete all data" callout is visually heavier than a "Note: This is optional" callout. Whether the most important code example on the page has more visual emphasis than the least important one. Whether section headers that introduce critical concepts are visually distinguishable from section headers that introduce supplementary material.

### Concrete Visual Example

On a documentation page about database migration:

- **"CRITICAL: Back up your database first"** callout: 4px border-left (max weight), coral accent (#c97065), zone-bedrock background, solid-offset depth (#3). The callout uses 4 mechanisms simultaneously = maximum visual density for maximum semantic importance.
- **"Note: You can also use the CLI"** callout: 1px border-left (min weight), blue accent (#2563EB), no background change, no depth effect. The callout uses 1 mechanism = minimum visual density for supplementary information.
- **The "Core Migration Steps" section header:** Instrument Serif at 1.625rem, 3px bottom border, extra 16px top margin -- 3 visual signals for a critical section.
- **The "Advanced Options" section header:** Instrument Serif at 1.375rem, 1px bottom border, standard margin -- 1 visual signal for a secondary section.

**Coherence at this scale means:** The NUMBER of mechanisms deployed on any element is proportional to that element's semantic importance. Critical content gets multi-mechanism treatment (border-weight + color + background + depth). Supplementary content gets single-mechanism treatment (border only). The visual density of an element ENCODES its semantic density.

### Richness Gain and Reproducibility Cost

**Richness gain:** ~3-5%. This is arguably the highest-leverage scale beyond the original 5. When semantic density is coherent, readers can literally "scan by visual weight" -- the most visually heavy elements are the most important. This is faster than reading. It transforms the page from a document into a visual priority map.

**Reproducibility cost:** MODERATE to HIGH. Requires:
- A semantic importance classification for every element (critical / important / standard / supplementary)
- A mechanism-count-to-importance mapping (4 mechanisms for critical, 3 for important, 2 for standard, 1 for supplementary)
- Builder judgment about what is "critical" versus "supplementary" (inherently subjective)
- This is NOT automatable without content analysis -- it requires understanding what the content MEANS

**Key tension:** The current mechanism catalog treats all mechanisms as independently deployable. Semantic density scale would add a META-RULE: "The number of mechanisms applied to an element should be proportional to its semantic importance." This is a judgment rule, not a binary rule. Per the project's key finding ("binary rules achieve 100% agent compliance; judgment rules achieve ~0%"), this scale would be the hardest to reproduce.

### Perceptual Audit Verdict

**Would a PA auditor notice this in a cold-look screenshot?**

YES, strongly. This is one of the most visible scales to a cold-look auditor. An auditor looking at a page where a trivial "see also" callout has the same visual weight as a "WARNING: data loss" callout would immediately flag it as PA-04 (hierarchy failure) or PA-05 (PROPORTIONATE sub-criterion). Conversely, a page where visual weight tracks semantic importance feels "smart" -- the auditor's PA-05 DESIGNED score would be higher.

**Classification: REAL and VISIBLE perceptual distinction.** This is the strongest candidate for a "Scale 6" addition to the existing model.

---

## Summary Table: All 10 Scales

| Scale | Name | Axis | Zoom Level | Richness Gain | Repro Cost | PA Visible? | Real or Theoretical? |
|-------|------|------|------------|---------------|------------|-------------|---------------------|
| 1 | Navigation | Spatial | Bird's eye (header/TOC) | ~8% | LOW | YES | REAL |
| 2 | Page | Spatial | Full scroll | ~20% | LOW | YES | REAL |
| 3 | Section | Spatial | One screen | ~15% | MODERATE | YES | REAL |
| 4 | Component | Spatial | One element | ~15% | MODERATE | YES | REAL |
| 5 | Character | Spatial | Inline text | ~5% | HIGH | PARTIALLY | REAL |
| **6** | **Glyph** | **Spatial** | **Letterforms/kerning** | **~0.5-1%** | **EXTREME** | **NO (subliminal)** | **REAL but SUBLIMINAL** |
| **7** | **Temporal** | **Time** | **Transitions/animation** | **~2-4%** | **HIGH** | **NO (static audit)** | **REAL, INVISIBLE to screenshots** |
| **8** | **Cross-Page** | **Multi-document** | **Site-level patterns** | **~3-5%** | **HIGH** | **NO (single-page audit)** | **REAL, requires new audit method** |
| **9** | **State** | **Interaction** | **Hover/active/expanded** | **~2-3%** | **MODERATE** | **PARTIALLY** | **REAL** |
| **10** | **Semantic Density** | **Information** | **Importance-to-weight ratio** | **~3-5%** | **MODERATE-HIGH** | **YES** | **REAL and VISIBLE** |

---

## Analysis: What This Reveals

### Finding 1: The Spatial Axis Is Essentially Exhausted

Scale 6 (Glyph) is the only remaining spatial scale, and it yields ~0.5-1% richness at extreme cost. The five existing scales already cover 95-98% of what can be achieved through spatial zoom. Going more granular than Character enters the domain of typographic micro-optimization, which is real but subliminal.

**Implication:** Future richness gains are NOT on the spatial axis. They are on non-spatial axes.

### Finding 2: The Three Highest-Leverage Unexplored Scales Are Non-Spatial

Ranked by (richness gain / reproducibility cost):

1. **Scale 10: Semantic Density** -- ~3-5% gain at MODERATE cost, VISIBLE to PA. Highest ROI.
2. **Scale 9: State** -- ~2-3% gain at MODERATE cost, PARTIALLY visible. Reuses existing mechanisms.
3. **Scale 8: Cross-Page** -- ~3-5% gain at HIGH cost, requires process change. Highest absolute ceiling.

**Scale 7 (Temporal)** has high richness gain but is completely invisible to the current audit methodology.
**Scale 6 (Glyph)** has negligible richness gain and extreme cost.

### Finding 3: The Current Audit Methodology Has a Blind Spot

The PA methodology (48 questions evaluated against screenshots) captures Scales 1-5 well, partially captures Scale 9 (State), and completely misses Scales 7 (Temporal) and 8 (Cross-Page). This is not a criticism -- it is an inherent limitation of static single-page evaluation.

If the system ever pursues Scales 7 or 8, the audit methodology would need to evolve:
- Scale 7 would require VIDEO-BASED or LIVE-INTERACTION audit
- Scale 8 would require MULTI-PAGE COMPARATIVE audit

### Finding 4: Scale 10 Is Already Partially Present (Unnamed)

The existing mechanism catalog already implicitly supports Semantic Density through mechanism #1 (border-weight gradient) and #9 (confidence encoding via color). When a builder assigns 4px borders to critical content and 1px to supplementary content, they are practicing semantic density coherence.

What is MISSING is:
- **Explicit naming** of semantic density as a scale
- **Multi-mechanism density mapping** (the idea that critical elements should use MORE mechanisms, not just heavier ones)
- **A protocol** for classifying content importance BEFORE applying mechanisms

Making this explicit would likely improve PA-05 DESIGNED scores without requiring new mechanisms.

### Finding 5: The Reproducibility Cliff Is Real

Scales 1-5 follow a manageable cost curve. Beyond Scale 5:
- Scale 10 (Semantic Density) is achievable with judgment (MODERATE cost)
- Scale 9 (State) is achievable with mechanism extension (MODERATE cost)
- Scale 7 (Temporal) requires new design-system-level decisions about motion (HIGH cost)
- Scale 8 (Cross-Page) requires process architecture changes (HIGH cost)
- Scale 6 (Glyph) requires manual craft (EXTREME cost)

The reproducibility cost does not increase linearly -- it increases exponentially. Each additional scale beyond 5 requires qualitatively different capabilities (judgment, motion design, site architecture, typographic craft) rather than quantitatively more of the same capability.

---

## Recommendations

### Immediate Adoption (Scale 6 candidates)

**Scale 10: Semantic Density** should be promoted to the existing scale model. Rename the model from "5 scales" to "5 + 1 scales" where the +1 is orthogonal:

| Spatial Scales (1-5) | Non-Spatial Scale (10) |
|----------------------|----------------------|
| Navigation | Semantic Density |
| Page | |
| Section | |
| Component | |
| Character | |

Semantic Density operates AT EVERY spatial scale simultaneously. It is not a zoom level -- it is a LENS that evaluates whether visual weight tracks semantic importance at each existing scale.

**Protocol addition:** After mechanism deployment, add a "density check" -- for each element, count the mechanisms applied and verify the count is proportional to the element's content importance. This could be a binary gate: "Does the most important element on the page use the most mechanisms? YES/NO."

### Future Investigation

**Scale 9 (State):** Worth investigating when the design system adds interactive components. Currently the system produces static HTML, making state coherence premature. When interactivity arrives, the mechanism catalog should be extended with state variants of each mechanism.

**Scale 8 (Cross-Page):** Worth investigating when multiple pages are built in sequence. Currently each page is a standalone artifact. When site-level migration begins (Phases H/I), cross-page coherence should be designed into the site composition plan.

### Do Not Pursue

**Scale 7 (Temporal):** Not until the design system establishes a temporal identity ("What does KortAI motion feel like?"). Premature adoption of animation without identity constraints would produce incoherent motion.

**Scale 6 (Glyph):** The ROI does not justify the cost. The ~0.5-1% richness gain is subliminal and would not register in any PA evaluation. File under "nice to have in a flagship context" but do not operationalize.

---

## The Deep Question: Is "Scale" the Right Word?

The 5 existing scales are zoom levels on the spatial axis. The 5 proposed additions include only 1 additional zoom level (Glyph). The other 4 are entirely different DIMENSIONS:

- Temporal = time axis
- Cross-Page = document-scope axis
- State = interaction axis
- Semantic Density = information-importance axis

Calling all of these "scales" is a metaphorical stretch. A more accurate model:

```
COHERENCE DIMENSIONS
|
+-- Spatial Coherence (Scales 1-5 + 6/Glyph)
|   "The pattern repeats at every zoom level"
|
+-- Temporal Coherence (Scale 7)
|   "The pattern repeats in every animation"
|
+-- Scope Coherence (Scale 8)
|   "The pattern repeats across every page"
|
+-- State Coherence (Scale 9)
|   "The pattern repeats in every interaction state"
|
+-- Semantic Coherence (Scale 10)
    "Visual weight tracks content importance"
```

In this framing, "Scales 1-5" are really "Spatial Coherence at 5 granularities." The proposed Scales 7-10 are not additional spatial granularities but additional COHERENCE DIMENSIONS.

This reframing matters because it changes the question from "how many scales can we stack?" (diminishing returns on spatial zoom) to "how many coherence dimensions can we align?" (independent gains from orthogonal dimensions).

The current system achieves ~95-98% spatial coherence. The maximum potential from non-spatial coherence dimensions is approximately ~10-17% additional richness. But since spatial coherence is already near-maximum, these non-spatial dimensions represent THE remaining frontier for richness improvement.

---

## Appendix: Scale Interaction Matrix

How do scales reinforce or interfere with each other?

| Scale Pair | Interaction | Example |
|------------|-------------|---------|
| Page + Semantic Density | REINFORCING | Dense sections have more mechanisms AND more important content |
| Component + State | REINFORCING | Callout expands: more mechanisms appear, encoding "now active" |
| Section + Temporal | REINFORCING | Sparse sections fade in quickly; dense sections appear gradually |
| Character + Glyph | REDUNDANT | Both operate at text level; Glyph is a micro-version of Character |
| Cross-Page + Navigation | REINFORCING | Navigation structure echoes across pages; cross-page coherence extends it |
| Temporal + State | STRONGLY REINFORCING | Hover timing (temporal) encodes state change; both need same easing |
| Semantic Density + Page | REINFORCING | Page-level rhythm (sparse/dense) aligns with semantic importance flow |
| Cross-Page + Semantic Density | INDEPENDENT | Cross-page is about structural consistency; semantic density is about importance mapping |

**Key observation:** The non-spatial scales are mostly INDEPENDENT of each other, meaning their richness gains stack additively rather than suffering from diminishing returns. Adding Semantic Density does not reduce the benefit of adding State coherence later.

---

**END EXPLORATION**
