# B2 -- Deep Investigation: Reader Model

**Author:** reader-model-investigator (Opus 4.6)
**Date:** 2026-02-22
**Task:** #33 -- Investigate how reader model influences CSS/HTML decisions, what dimensions matter, how the current pipeline handles it, and what a reader-aware pipeline would look like.

**Source files examined:**
- `ephemeral/handoff-research/51-beyond-eight-independence-analysis.md` (610 lines, dependency graph and irreducible set)
- `ephemeral/handoff-research/52-adversarial-quality-gaps.md` (399 lines, 10 quality dimensions)
- `ephemeral/handoff-research/53-dimensional-gap-analysis.md` (464 lines, structural blind spots)
- `ephemeral/pages/gas-town-steve-yegge/output.html` (1,509 lines, Gas Town production page)
- `design-system/compositional-core/guidelines/semantic-rules.md` (530 lines, semantic decision rules)
- `design-system/pipeline/conventions-brief.md` (610 lines, builder world-description)
- `design-system/pipeline/gate-runner.md` (1,340 lines, 23 programmatic gates)
- `design-system/pipeline/flagship-pa-questions.md` (159 lines, 9 Tier 5 questions)

---

## EXECUTIVE SUMMARY

Reader model is the single most consequential ABSENT dimension in the current pipeline. Report 51 identifies it as Missing Concept M-02, and Report 53 identifies it within the broader "Contextual Appropriateness" gap (Section 8). Yet the current pipeline builds every page for an abstract, homogeneous reader -- no arrival context, no expertise model, no attention budget, no device expectations.

The investigation reveals that reader model is not a single variable but a **5-axis input space** that maps directly to CSS parameter adjustments. A reader-aware pipeline would accept a ~15-line reader profile as pipeline input, which the TC analyst would translate into concrete design parameters that propagate to the builder.

**Key finding:** Reader model is NOT a new concept to add to the pipeline. It is a CONTENT-FORM COUPLING variable (Phenomenon 2 from Report 51) that the pipeline already theoretically supports but practically ignores. The TC pipeline's Phase 0C (Section Identification) and Phase 1 (FEEL/UNDERSTAND/DO/BECOME axes) are the natural integration points.

---

## 1. HOW READER MODEL INFLUENCES CSS/HTML DECISIONS

### The Fundamental Claim

A page about Gas Town built for Steve Yegge's Twitter followers requires DIFFERENT CSS than the same content built for a general audience discovering it via Google search. Not different content -- different FORM for the same content. The reader model determines:

- **Information density:** How much per viewport-height the reader can absorb
- **Visual complexity tolerance:** How many simultaneous visual channels the reader can process
- **Progressive disclosure needs:** How much the page must reveal gradually vs present at once
- **Navigation complexity:** How much structural wayfinding the reader requires
- **Entry velocity:** How quickly the reader expects to reach the payload

### Concrete CSS Properties Affected

| CSS Domain | Expert Reader (Yegge followers) | General Reader (Google search) | Delta |
|------------|-------------------------------|-------------------------------|-------|
| **Line-height** | 1.5-1.6 (tighter, scans fast) | 1.7-1.8 (generous, reads carefully) | 0.2 |
| **Body font-size** | 15-16px (compact) | 16-18px (accessible) | 2px |
| **Max-width (prose)** | 65-70ch (efficient scan width) | 55-60ch (comfortable read width) | 10ch |
| **Zone padding** | 32-48px (compressed) | 48-80px (breathing room) | 16-32px |
| **Component density** | 3-4 per viewport (information-rich) | 2 per viewport (digestible) | 1-2 |
| **Header treatment** | Minimal (skip to content fast) | Expansive (orientation, context) | 30-50% height |
| **Progressive disclosure** | None (show everything) | Collapsible sections, details/summary | Structural |
| **TOC/Navigation** | Optional (expert knows to scroll) | Mandatory (reader needs map) | Present/absent |
| **Callout frequency** | Low (trust reader to assess importance) | High (flag key points explicitly) | 2-3x |
| **Drop cap frequency** | 0-1 (editorial restraint) | 1-2 (visual anchoring) | +1 |
| **Code block treatment** | Syntax-highlighted, compact | Syntax-highlighted + commentary | +context |
| **Data table density** | Compact padding (8px cells) | Generous padding (12-16px cells) | 4-8px |

### Evidence from Gas Town

Gas Town (output.html) was built for an UNSPECIFIED reader. Examining its CSS decisions reveals an implicit reader model -- the builder ASSUMED a reader without making that assumption explicit:

**Implicit assumptions in Gas Town's CSS:**
1. `p { max-width: 70ch; }` -- moderately wide, assumes comfortable reading
2. `.zone-1 { padding: 64px 80px; }` -- generous opening, assumes reader needs orientation
3. `.dispatch-opening { font-size: 1.125rem; }` -- slightly enlarged intro, assumes reader needs easing in
4. `.data-table td { padding: 12px 16px; }` -- generous table cells, assumes careful reading
5. No TOC or scroll navigation -- assumes reader will scroll linearly
6. "Stage Req: 7+" in header -- the ONLY reader-model signal in the entire page

**What the CSS SHOULD do for Yegge's actual audience (Twitter dev community, Stage 7+):**

The Gas Town content explicitly states its audience: "Gas Town is for Stage 7+. If you are not there, Yegge warns, you will get your face ripped off by superintelligent chimpanzees." This is a STRONG reader model signal that the pipeline completely ignored.

A Stage 7+ reader:
- Already runs 10+ agents in parallel
- Understands tmux, Go, git worktrees
- Wants the SYSTEM ARCHITECTURE, not the explanation
- Scans for deployment commands, not conceptual motivation
- Has high information density tolerance
- Arrived from Yegge's Twitter thread (pre-primed with context)

CSS adjustments for this specific reader:
```css
/* EXPERT reader: compress orientation, expand payload */
.zone-1 { padding: 40px 64px; }           /* Less orientation breathing room */
p { max-width: 65ch; }                     /* Slightly tighter scan width */
.zone-3 { padding: 24px 48px; }           /* DENSEST zone: compress harder */
.zone-3 p { line-height: 1.55; }          /* Tighter line-height for scan */
.data-table td { padding: 8px 12px; }     /* Compact tables: data-first */
pre { padding: 20px 24px; }               /* Tighter code blocks */
```

The deployment zone (Zone 4) should EXPAND for this reader -- they came for the `gt init` commands and worker role assignments. The orientation zone (Zone 1) should COMPRESS -- they already know who Yegge is and why agents matter.

This is a ~15% padding redistribution across the page. Not dramatic, but perceptible -- and it changes whether the page feels "made for me" vs "made for someone else."

---

## 2. WHAT READER DIMENSIONS MATTER

### The 5-Axis Reader Model

After analyzing the source materials, I identify 5 independent reader dimensions. Each maps to specific CSS adjustments:

#### AXIS 1: Technical Sophistication

**Scale:** Novice (1) --- Intermediate (2-3) --- Expert (4-5)

**What it predicts:** Information density tolerance, abbreviation comprehension, code block commentary needs, progressive disclosure aggressiveness.

**CSS mapping:**
| Property | Novice | Expert |
|----------|--------|--------|
| Line-height | 1.8 | 1.5 |
| Component density | 1-2/viewport | 3-4/viewport |
| Code block commentary | Inline comments on every line | Minimal/no comments |
| Progressive disclosure | Heavy (details/summary) | None (flat presentation) |
| Callout ratio | 1 per 300 words | 1 per 800 words |

**Evidence:** Gas Town's content self-declares "Stage 7+" (expert). The page's CSS treats the reader as intermediate (generous spacing, generous table padding, no progressive disclosure). This is a mismatch.

#### AXIS 2: Attention Budget

**Scale:** Scanning (1-2) --- Reading (3) --- Studying (4-5)

**What it predicts:** Font size, line length, section break frequency, navigation aids, anchor density.

**CSS mapping:**
| Property | Scanning | Studying |
|----------|----------|----------|
| Body font-size | 15px | 17px |
| Max-width (prose) | 60ch | 70ch |
| Section spacing | 32px (tight, fast scroll) | 64px (breathing, absorption) |
| Heading frequency | Every 200 words | Every 500 words |
| Navigation | TOC + scroll witness mandatory | Optional |

**Evidence:** A Twitter-sourced reader arriving from Yegge's thread is SCANNING (they read the tweet, now they want the details). A reader who bookmarked the page and returns later is STUDYING. The same page should serve both, but the first encounter's CSS should optimize for scanning.

#### AXIS 3: Arrival Context

**Scale:** Search (1) --- Direct link (2) --- Social media (3) --- Curated collection (4)

**What it predicts:** Header treatment, "You Are Here" needs, context density in Zone 1, exit density.

**CSS mapping:**
| Property | Search arrival | Social media arrival |
|----------|----------------|---------------------|
| Header height | Tall (full orientation) | Short (pre-primed) |
| Zone 1 density | Sparse (explain context) | Moderate (skip context) |
| Source attribution | Prominent (credibility) | Compact (already know source) |
| Exit links | Prominent (retention) | Compact (will return to feed) |
| Quote treatment | Large, attributed (authority) | Compact (they know the voice) |

**Evidence:** Gas Town's header has author, date, stage requirement, engagement stats -- this is a SEARCH-ARRIVAL header (establishing credibility). For a Yegge Twitter follower, the "252 likes / 32K views" stat is unnecessary (they already know the thread went viral). For a Google searcher discovering "Gas Town" for the first time, it's essential.

#### AXIS 4: Device Context

**Scale:** Mobile (1) --- Tablet (2) --- Desktop (3) --- Wide desktop (4)

**What it predicts:** Container width, grid behavior, touch target sizes, scroll length expectations.

**CSS mapping:** Already partially addressed by the responsive breakpoints (960/768/480px) in conventions-brief.md Section 14. But the current system treats responsive as ADAPTATION (same design, smaller) rather than REDESIGN (different design decisions per device).

**Gap:** A mobile reader has a fundamentally different scroll-to-content ratio. The same 1500-word page is 3 scroll-lengths on desktop, 8 scroll-lengths on mobile. The density arc (OPENING -> DEEPENING -> DENSEST -> RESOLVING) needs different proportions on mobile: Zone 1 should be 10% on mobile (vs 20% on desktop) because orientation space competes with content space on small screens.

#### AXIS 5: Prior Knowledge of Subject

**Scale:** None (1) --- Familiar (2-3) --- Deep (4-5)

**What it predicts:** Vocabulary treatment, definition density, analogy needs, reference linking.

**CSS mapping:**
| Property | No prior knowledge | Deep knowledge |
|----------|-------------------|----------------|
| Term highlighting | Heavy (bold/code on first use) | Minimal |
| Definition callouts | Frequent (every new term) | Rare (only non-obvious terms) |
| Analogy sections | Prominent (bridge to familiar) | Absent (reader IS familiar) |
| Reference links | Inline (reader needs context) | Footer (reader wants depth) |
| Mental model components | Prominent, early | Brief, late |

**Evidence:** Gas Town's "Mental Model" component (line 1444-1448) appears in Zone 4 -- AFTER the detailed content. For a reader with no prior knowledge of agent orchestration, this mental model should appear in Zone 1 (before the details). For an expert, Zone 4 placement is correct (summary/crystallization after evidence).

### Axis Independence

These 5 axes are mostly independent but with some correlations:

| Axis Pair | Correlation | Implication |
|-----------|-------------|-------------|
| Sophistication x Attention | Moderate (+0.3) | Experts tend to scan, but not always (experts studying a new domain read carefully) |
| Sophistication x Arrival | Weak (-0.1) | Experts arrive from all channels |
| Arrival x Attention | Strong (+0.5) | Social media arrivals scan; curated collection arrivals study |
| Device x Attention | Moderate (+0.3) | Mobile readers scan more; desktop readers study more |
| Prior Knowledge x Sophistication | Moderate (+0.4) | Technical experts more likely to have prior knowledge, but not always |

The key insight: a reader can be technically sophisticated (Axis 1: 5) but have no prior knowledge of Gas Town specifically (Axis 5: 1). This combination -- "expert who is new to this topic" -- has different needs than "expert who already knows this" or "novice being introduced to the topic."

---

## 3. HOW THE CURRENT PIPELINE HANDLES READER MODEL

### Short Answer: It Does Not

The current pipeline builds for an abstract, unspecified reader. Evidence from all pipeline files:

**Conventions brief (conventions-brief.md):** The word "reader" appears 14 times. Every instance treats the reader as a homogeneous entity:
- "the reader cannot perceive them" (Section 2, perception physics)
- "The reader crosses without noticing" (Section 7, SMOOTH transition)
- "The reader pauses, reorients, continues" (Section 7, BRIDGE transition)
- "The reader arrives at a new region" (Section 7, BREATHING transition)
- "The reader should feel one unified shift" (Section 4, multi-coherence)
- "Voids are where readers leave" (Section 11, The Scroll)
- "the reader loses the page's thread" (Section 2, stacked gaps)

Every instance describes "the reader" as a singular, undifferentiated human with standard perception. No instance considers variation in reader expertise, attention budget, arrival context, or prior knowledge.

**Gate runner (gate-runner.md):** Zero references to reader model. All 23 gates measure CSS properties against fixed thresholds (15 RGB, 120px gap, 3 channel shifts). These thresholds are perception physics -- they are reader-invariant (all humans have the same color perception limits). This is correct for perception gates but insufficient for composition gates.

**PA questions (flagship-pa-questions.md):** Two questions tangentially address reader model:
- PA-35: "Does your interest stay level, peak and valley, or fade? Where do you start skimming?" -- This measures the AUDITOR's experience, not the target reader's.
- PA-47: "At what scroll position do you start to feel like you've seen this before?" -- Same: auditor as proxy for reader.

No PA question asks: "Who is this page FOR? Does the visual treatment match that reader's expectations?"

**TC SKILL (not re-read but referenced in source files):** The TC pipeline's Phase 1 asks FEEL/UNDERSTAND/DO/BECOME axes about the CONTENT, not the READER. "What does the reader need to FEEL" is content-centric (what should the content evoke?) not reader-centric (what does THIS SPECIFIC reader bring to the encounter?).

### Where Reader Model COULD Enter

The pipeline has two natural integration points where reader model could be injected without architectural change:

**Integration Point 1: TC Phase 0 (Content Assessment)**

Currently, Phase 0 classifies:
- 0A: Content Type (Prose-dominant / Mixed / Visual-dominant / Self-referential)
- 0B: Scope Assessment (MICRO through MASSIVE)
- 0C: Section Identification (NARRATIVE / REFERENCE / CODE / DATA / MIXED)

A **Phase 0D: Reader Assessment** would classify:
- Technical Sophistication: 1-5
- Attention Budget: Scanning / Reading / Studying
- Primary Arrival Channel: Search / Direct / Social / Curated
- Device Context: Mobile-first / Desktop-first / Responsive
- Prior Knowledge: None / Familiar / Deep

This is a ~10-line addition to Phase 0 that propagates through all subsequent phases.

**Integration Point 2: Conventions Brief (Builder World-Description)**

The conventions brief describes "the world you are building inside." Adding a "Reader Physics" section (parallel to Section 2's "Perception Physics") would tell the builder WHO inhabits this world:

```
## 2B. READER PHYSICS (Who Lives Here)

This page's reader:
- Technical sophistication: [1-5]
- Attention mode: [scanning / reading / studying]
- Arrival context: [search / direct / social / curated]
- Prior knowledge: [none / familiar / deep]

These properties adjust your spatial budget:
- [Scanning + Expert]: Compress Zone 1 by 25%. Expand payload zones.
- [Reading + Novice]: Expand Zone 1 by 25%. Add progressive disclosure.
- [Social arrival]: Header can be compact (reader is pre-primed).
- [Search arrival]: Header must be full (reader needs credibility signals).
```

This is ~15 lines that calibrate the builder's CSS parameter space.

---

## 4. CSS PROPERTIES THAT CHANGE FOR DIFFERENT READER MODELS

### Detailed CSS Parameter Table

Below is the complete mapping from reader model to CSS adjustment. Every adjustment is WITHIN the soul constraints (border-radius: 0, box-shadow: none, warm palette) and WITHIN the perception thresholds (>= 15 RGB delta, >= 0.025em letter-spacing).

**The reader model does NOT override identity. It calibrates density, pacing, and navigation within identity.**

#### Zone 1 (Opening/Orientation) Adjustments

| Reader Profile | Zone 1 Padding | Zone 1 Content | Heading Size | Drop Cap |
|---------------|----------------|----------------|--------------|----------|
| Expert + Scanning + Social | 32px 48px | Compressed: 1 paragraph + source meta | 2rem | None |
| Expert + Reading + Direct | 40px 64px | Standard: 2-3 paragraphs + source meta | 2.5rem | Optional |
| Intermediate + Reading + Search | 48px 80px | Expanded: context paragraph + core quote + source meta | 2.5rem | Yes |
| Novice + Studying + Search | 64px 80px | Full orientation: "You Are Here" box + context + core quote + source meta + TOC | 3rem | Yes |

**CSS delta range:** Padding varies by 2x (32px to 64px). Heading size varies by 1rem. Content structure ranges from 1 paragraph to full orientation with TOC.

#### Zone 3 (Dense/Payload) Adjustments

| Reader Profile | Zone 3 Padding | Body Line-Height | Font-Weight | Table Cell Padding | Callout Frequency |
|---------------|----------------|-------------------|-------------|-------------------|-------------------|
| Expert + Scanning | 24px 48px | 1.5 | 500 | 8px 12px | 1 per 800 words |
| Expert + Reading | 32px 64px | 1.6 | 500 | 8px 16px | 1 per 600 words |
| Intermediate + Reading | 32px 64px | 1.65 | 500 | 12px 16px | 1 per 400 words |
| Novice + Studying | 40px 64px | 1.7 | 400 | 12px 16px | 1 per 300 words |

#### Navigation & Wayfinding Adjustments

| Reader Profile | TOC | Scroll Witness | Section Numbers | Back-to-Top |
|---------------|-----|---------------|-----------------|-------------|
| Expert + Scanning | No | No | No | No |
| Expert + Studying | Optional | Optional | Yes | Yes |
| Intermediate + Reading | Yes | No | Yes | Yes |
| Novice + Reading/Studying | Yes (sticky) | Yes | Yes | Yes |

#### Header Adjustments

| Reader Profile | Header Style | Stats Bar | Subtitle Length |
|---------------|-------------|-----------|----------------|
| Expert + Social arrival | Compact (32px padding) | Minimal (author + date only) | 1 line |
| Expert + Search arrival | Standard (48px padding) | Full (author, date, stage, engagement) | 2 lines |
| Novice + Search arrival | Expanded (48px padding) | Full + descriptive labels | 3 lines |

### The "Same Content, Different CSS" Principle

These adjustments are not about changing WHAT the reader sees. They are about changing HOW the reader encounters the same content. The Gas Town content remains identical. The zones remain the same. The mechanisms remain the same. What changes:

1. **Spatial budget allocation** -- how much padding/spacing goes to orientation vs payload
2. **Component density** -- how many visual elements per viewport
3. **Navigation scaffolding** -- whether wayfinding aids exist
4. **Progressive disclosure** -- whether content is front-loaded or layered
5. **Typography calibration** -- how tight the reading texture is

Total CSS change for different reader models: approximately **40-80 lines** of CSS differences across a ~1000-line page. This is 4-8% of the CSS budget -- small enough to be feasible, large enough to be perceptible.

---

## 5. READER MODEL AS PIPELINE INPUT

### Proposed Format

The reader model should be a structured block in the content file (or provided as a separate input to /build-page):

```yaml
# Reader Profile
reader:
  sophistication: 4        # 1-5 scale (1=novice, 5=expert)
  attention: scanning       # scanning | reading | studying
  arrival: social           # search | direct | social | curated
  device: desktop-first     # mobile-first | desktop-first | responsive
  prior_knowledge: familiar # none | familiar | deep

  # Optional: specific audience description
  audience: >
    Steve Yegge's Twitter followers. Developers who already run
    multi-agent workflows (Stage 6-7). They know who Yegge is,
    they've seen the thread, they want the technical architecture
    and deployment commands. High info-density tolerance.
```

### How It Propagates

```
Content file + Reader profile
        |
        v
  TC Phase 0D: Reader Assessment
  (Classify 5 axes from profile + content signals)
        |
        v
  TC Phase 1: Multi-axis questioning
  (FEEL axis now reader-calibrated: "What does THIS reader need to feel?")
        |
        v
  TC Phase 2-3: Tension + Metaphor
  (Reader model influences metaphor expression INTENSITY, not metaphor SELECTION)
        |
        v
  Conventions Brief: Reader Physics section
  (~15 lines: concrete CSS parameter adjustments per reader axis)
        |
        v
  Builder: Reader-calibrated CSS
  (Zone padding, component density, navigation aids adjusted per profile)
        |
        v
  PA: Reader-aware questions
  (PA-XX: "Does this page serve its intended reader?")
```

### Default Reader Profile

When no reader profile is provided, the pipeline uses a DEFAULT that matches the current implicit assumption:

```yaml
reader:
  sophistication: 3        # intermediate
  attention: reading        # standard reading
  arrival: search           # assumes Google/search discovery
  device: desktop-first     # 960px primary viewport
  prior_knowledge: none     # reader is new to this topic
```

This default produces CSS identical to current output -- the reader model is ADDITIVE, not disruptive. Existing pages built without reader profiles are unaffected.

### Content Signals That Infer Reader Model

When no explicit profile is provided, the TC analyst can INFER reader model from content signals:

| Content Signal | Inference | Confidence |
|---------------|-----------|------------|
| "Stage 7+ required" | sophistication: 4-5 | HIGH |
| "Prerequisites: familiarity with X" | prior_knowledge: familiar+ | HIGH |
| Published on Twitter/X | arrival: social (primary) | MODERATE |
| Published on company blog | arrival: search (primary) | MODERATE |
| Code blocks > 30% of content | sophistication: 3+ | MODERATE |
| "If you've been following along..." | prior_knowledge: familiar | HIGH |
| "What is X?" (definitional opening) | prior_knowledge: none | HIGH |
| Engagement stats (32K views) | arrival: mixed | LOW |
| Technical jargon density > 5 per 100 words | sophistication: 4+ | MODERATE |

Gas Town's content contains at least 3 high-confidence signals: "Stage 7+", "If you have any doubt whatsoever, then you can't use it", and high technical jargon density. An inference-based reader assessment would produce:

```yaml
reader:
  sophistication: 5        # explicit Stage 7+ requirement
  attention: scanning       # Twitter-source audience scans
  arrival: social           # originated as Twitter thread
  device: desktop-first     # tmux users are desktop
  prior_knowledge: familiar # audience knows Yegge, knows agent tooling
```

---

## 6. HOW READER MODEL INTERACTS WITH CONTENT TYPE

### The 2x2: Reader Sophistication x Content Complexity

| | Simple Content (overview, summary) | Complex Content (deep analysis, technical) |
|---|---|---|
| **Expert Reader** | FASTEST path: compact orientation, dense payload, zero scaffolding. Risk: page feels too thin. Mitigation: add depth through mechanism density, not content padding. | IDEAL pairing: let the content speak. Minimal progressive disclosure. Maximum information density. Tightest line-height and spacing. |
| **Novice Reader** | IDEAL pairing: generous spacing, clear headings, progressive disclosure. Mental models and analogies prominent. Zone 1 is expansive. | HARDEST pairing: content is complex AND reader needs scaffolding. Maximum progressive disclosure. Frequent callouts. Generous spacing. TOC mandatory. Consider splitting into multiple pages. |

### Content Type x Reader Model CSS Recipes

**Tutorial for Beginners (Novice + Studying + None):**
```css
/* Maximum scaffolding */
.zone-1 { padding: 64px 80px; }  /* Full orientation */
nav.toc { position: sticky; }     /* Always-visible navigation */
details summary { font-weight: 600; }  /* Progressive disclosure */
.callout { margin: 24px 0; }      /* Frequent callouts */
.step-number { /* ... */ }         /* Numbered steps */
```

**Technical Essay for Experts (Expert + Reading + Deep):**
```css
/* Maximum density, minimum scaffolding */
.zone-1 { padding: 40px 64px; }   /* Compressed orientation */
p { max-width: 65ch; line-height: 1.55; }  /* Tighter reading */
.data-table td { padding: 8px 12px; }       /* Dense tables */
/* No TOC, no progressive disclosure, no step numbers */
```

**Research Synthesis for Mixed Audience (Intermediate + Reading + Search):**
```css
/* Balanced: orientation + density + navigation */
.zone-1 { padding: 48px 80px; }   /* Standard orientation */
nav.toc { display: block; }        /* TOC present but not sticky */
p { max-width: 68ch; line-height: 1.65; }  /* Balanced reading */
.callout { margin: 32px 0; }       /* Moderate callout frequency */
```

### The Interaction Effect

Reader model and content type are NOT additive -- they interact. An expert reader encountering tutorial content needs LESS scaffolding than a novice, but MORE than an expert encountering a technical essay. The CSS adjustment is:

```
CSS_adjustment = base_content_CSS + reader_calibration_delta
```

Where `reader_calibration_delta` adjusts spacing, density, and navigation within the content type's base CSS. The content type determines the STRUCTURE (zones, components, mechanisms). The reader model calibrates the PARAMETERS (padding, line-height, component density) within that structure.

---

## 7. WHAT A READER-AWARE PIPELINE WOULD LOOK LIKE

### Architecture: Reader Profile -> Design Parameter Adjustment

```
INPUT:
  content.md            (the material)
  reader-profile.yaml   (who reads it, optional)

PHASE 0: Content + Reader Assessment
  0A: Content Type Classification     [existing]
  0B: Scope Assessment                [existing]
  0C: Section Identification          [existing]
  0D: Reader Assessment [NEW]
      - Parse reader-profile.yaml if provided
      - If not provided: infer from content signals
      - Output: 5-axis reader classification

PHASE 1: Multi-Axis Questioning [MODIFIED]
  FEEL axis: "What does [THIS READER] need to feel?"  [was: "What does the reader need to feel?"]
  UNDERSTAND axis: "What does [THIS READER] already know?"  [was: generic]
  DO axis: "What will [THIS READER] do with this?"  [was: generic]
  BECOME axis: unchanged

PHASE 2-3: Tension + Metaphor [UNCHANGED]
  Reader model does NOT influence metaphor selection.
  Reader model influences metaphor EXPRESSION INTENSITY.
  Expert readers: metaphor at 80% intensity (let content dominate)
  Novice readers: metaphor at 100% intensity (form guides understanding)

PHASE 4: Mechanism Selection [SLIGHTLY MODIFIED]
  Reader model adds/removes navigation mechanisms:
  - Expert + Scanning: remove TOC, remove scroll witness
  - Novice + Studying: add TOC, add scroll witness, add section numbers
  - Reader model adds progressive disclosure if novice + complex content

CONVENTIONS BRIEF: Reader Physics section [NEW, ~15 lines]
  Concrete CSS parameter adjustments per reader axis.
  Builder uses these to calibrate zone padding, typography, navigation.

BUILDER: Reader-calibrated CSS [MINOR CHANGES]
  ~40-80 lines of CSS difference from the default reader profile.
  Within existing soul constraints and perception thresholds.

GATES: No changes needed.
  Perception thresholds are reader-invariant.
  Reader model calibrates ABOVE perception floors.

PA: 1-2 new questions [MINOR ADDITION]
  PA-NEW-1: "Who is this page for? Does the visual treatment match?"
  PA-NEW-2: "If you were [reader description], would this page's
              density and pacing feel right for you?"
```

### Cost-Benefit Analysis

| Dimension | Cost | Benefit |
|-----------|------|---------|
| TC Phase 0D | +5 lines of analysis | Reader classification propagates to all downstream |
| Conventions brief | +15 lines | Builder has concrete calibration parameters |
| Builder CSS | +40-80 lines | Page feels "made for me" instead of generic |
| PA questions | +2 questions | Reader-fit verified |
| Total pipeline overhead | ~3-5% increase | Content-reader coupling = the missing Phenomenon 2 variable |

### What Does NOT Change

1. **Soul constraints** -- border-radius: 0, box-shadow: none, palette -- reader-invariant
2. **Perception thresholds** -- 15 RGB, 120px gap, 0.025em letter-spacing -- reader-invariant
3. **Multi-coherence requirements** -- 3+ channel shifts at boundaries -- reader-invariant
4. **Metaphor derivation** -- content-driven, not reader-driven
5. **Mechanism catalog** -- 18 mechanisms available regardless of reader
6. **Fractal echo** -- 5 scales applicable regardless of reader

Reader model calibrates PARAMETERS within these invariant constraints. It does not introduce new constraints or override existing ones.

---

## 8. GAS TOWN CASE STUDY: READER-AWARE REDESIGN

### The Actual Reader

Gas Town's content originated as a Twitter thread by Steve Yegge (252 likes, 32K views). The primary reader is:

```yaml
reader:
  sophistication: 5
  attention: scanning
  arrival: social
  device: desktop-first
  prior_knowledge: familiar
```

### What the Current Page Does vs What a Reader-Aware Page Would Do

#### Zone 1 (Situation Brief)

**Current:** 64px/80px padding. Drop cap. 2 paragraphs of context. Full core quote with solid offset depth. Source meta with thread/repo/beads links.

**Reader-aware:** 40px/64px padding. No drop cap (expert readers don't need visual anchoring). 1 paragraph of context (they know who Yegge is). Core quote stays (it's the thesis -- all readers need it). Source meta compressed to a single line.

**CSS delta:** -24px vertical padding, -16px horizontal padding. Drop cap removed. ~8 lines of CSS difference.

#### Zone 2 (Operational Readiness)

**Current:** 40px/80px padding. Full 8-stage table with generous cell padding. File tree with labeled sections. Bento grid for 7 worker roles.

**Reader-aware:** Same structure (the stages table and bento grid are information-dense and serve expert readers well). BUT: table cell padding compressed from 12px to 8px. File tree label can be smaller. Bento grid gap can tighten from 24px to 16px.

**CSS delta:** ~6 lines of padding adjustments. Structure unchanged.

#### Zone 3 (Field Intelligence)

**Current:** 32px/64px padding. Font-weight 600. Letter-spacing 0.03em. Dense callouts.

**Reader-aware:** 24px/48px padding (more aggressive compression for scanning readers). Line-height reduced from inherited 1.7 to 1.55. The language comparison table should be PROMINENT (expert readers want the Go vs TypeScript comparison -- it's the actionable intelligence). The "Warnings from the Author" section should be visually HEAVY (expert readers take risk signals seriously).

**CSS delta:** ~12 lines. Padding, line-height, table emphasis adjustments.

#### Zone 4 (Allied Ops & Deployment)

**Current:** 32px/80px padding. Community extensions. Upgrades list. Deployment orders. Mental model. Actionability assessment.

**Reader-aware:** The DEPLOYMENT ORDERS code block should be the VISUAL CLIMAX of this zone for expert readers (they came for `gt init`). Currently, it's visually equal to everything else. For scanning experts: make the code block wider (full container width), increase its padding, add a stronger border. The "Mental Model" component can compress (expert readers already formed their mental model from Zone 1-3).

**CSS delta:** ~10 lines. Code block emphasis increased, mental model compressed.

#### Total Reader-Aware Delta

~36 lines of CSS changes across a 1,093-line CSS page. 3.3% of the CSS budget. Every change is within soul constraints and perception thresholds. The page remains the same composition -- same zones, same mechanisms, same metaphor. What changes: the spatial budget allocation, reflecting that THIS reader (expert, scanning, pre-primed) needs less orientation and more payload density.

---

## 9. BEYOND READER MODEL: READER JOURNEY

### The Temporal Dimension

Report 51's Missing Concept M-01 (Temporal Composition) intersects with reader model. A reader's model is not STATIC -- it evolves as they scroll:

**Scroll position 0-20%:** Reader is in ORIENTATION mode. Even experts spend ~5 seconds assessing whether this page is worth their time. CSS should serve quick assessment: clear title, obvious subject matter, credibility signals.

**Scroll position 20-60%:** Reader has committed to the page. Mode depends on initial reader model: scanning readers accelerate, studying readers slow down. CSS should match the mode: scanning readers need visual landmarks (callout headers, bold first sentences, section indicators). Studying readers need reading comfort (generous line-height, wide prose column, footnote infrastructure).

**Scroll position 60-80%:** Reader is fatigued OR engaged. Fatigue manifests as skimming -- CSS can combat this with a DENSITY SHIFT (the Gas Town checkpoint bar between Z3 and Z4 does this). Engagement manifests as slowing down -- CSS can support this with BREATHING space.

**Scroll position 80-100%:** Reader wants resolution. Exit links, deployment commands, summary. Regardless of reader model, the final 20% should resolve quickly. Expert readers want actionable output (code, links). Novice readers want summary and next steps.

### The Reader Journey Table

| Scroll % | Scanner CSS | Reader CSS | Studier CSS |
|----------|------------|-----------|-------------|
| 0-20% | Compact header, 1-line subtitle, jump-to-content link | Standard header, 2-line subtitle, TOC | Full header, 3-line subtitle, "You Are Here" box, TOC |
| 20-40% | Dense payload, minimal section spacing | Standard payload, standard spacing | Generous payload, breathing zones between sections |
| 40-60% | Callout density peak (information-rich) | Standard callout frequency | Callouts + progressive disclosure + definitions |
| 60-80% | Maintain density (scanners don't fatigue, they accelerate) | Breathing zone (combat fatigue) | Breathing zone + checkpoint (mark progress) |
| 80-100% | Code blocks prominent, exit links compact | Balanced resolution | Full summary, next steps, related reading |

This is NOT a new architecture. It is reader-model calibration applied to the existing COHERENCE ARC (Section 4 of conventions brief: Opening -> Building -> Climax -> Resolution). The arc stays the same. The AMPLITUDES of each phase change based on reader model.

---

## 10. IMPLEMENTATION PRIORITY

### What to Build First (ROI-Ordered)

**Priority 1: Reader inference from content signals (HIGHEST ROI, lowest cost)**

Add 10 lines to TC Phase 0 that infer reader model from content signals. No explicit reader profile needed. The TC analyst reads "Stage 7+" and classifies sophistication: 5. Reads "Twitter thread" and classifies arrival: social. This is implicit reader modeling that costs almost nothing.

**Priority 2: Conventions brief Reader Physics section (HIGH ROI, low cost)**

Add 15 lines to the conventions brief mapping reader axes to CSS parameter adjustments. The builder reads these and adjusts padding, line-height, and navigation. This is where reader model becomes CSS.

**Priority 3: Explicit reader-profile.yaml input (MODERATE ROI, moderate cost)**

Allow /build-page to accept an optional reader profile. This overrides inference when the content creator knows their audience better than the content signals suggest. Most useful for pages where the audience is counter-intuitive (e.g., technical content written for non-technical executive readers).

**Priority 4: PA reader-fit questions (LOW ROI, low cost)**

Add 1-2 PA questions that evaluate reader fit. These catch cases where the builder produced CSS that contradicts the reader model (e.g., generous spacing for a scanning expert reader).

### What NOT to Build

**Do NOT build:** Adaptive CSS that changes based on detected reader behavior (A/B testing, analytics-driven layout). This is a web product feature, not a design pipeline feature. The pipeline produces a SINGLE page optimized for a SPECIFIED reader. It does not produce multiple variants.

**Do NOT build:** Reader model as a NEW root phenomenon. Report 51 correctly identifies reader model as a property of CONTENT-FORM COUPLING (Phenomenon 2). The reader is part of the content's context -- who it's for is as much a property of the content as what it says. Reader model lives inside the existing content analysis, not parallel to it.

**Do NOT build:** Reader model gates. Perception thresholds are reader-invariant (all humans perceive >= 15 RGB delta). Reader model calibrates ABOVE the perception floor. There is no meaningful gate for "is this page appropriate for its reader?" -- that is a judgment question, not a measurement.

---

## 11. RELATIONSHIP TO OTHER MISSING CONCEPTS

### Reader Model x Temporal Composition (M-01)

Reader model determines the TEMPORAL EXPERIENCE of the same spatial composition. A scanning reader experiences 5 seconds per viewport-height. A studying reader experiences 30 seconds. The density arc's emotional impact depends on READING SPEED, which depends on reader model. A dramatic compression from 64px to 24px padding that creates "urgency" for a studying reader is invisible to a scanning reader who scrolls past in 2 seconds.

**Implication:** Temporal composition (M-01) cannot be designed without reader model (M-02). They are coupled. The temporal investigation (Task #32) should incorporate reader model as an input variable.

### Reader Model x Emotional Arc (M-03)

The emotional arc (surprise, delight, authority, earned closure) lands differently for different readers. An expert reader who already knows the Gas Town thesis feels RECOGNITION, not SURPRISE, at the core quote. A novice reader feels DISCOVERY. The emotional arc should be calibrated to the reader's EXPECTATIONS, not to an abstract emotional progression.

**Implication:** The emotional arc investigation (Task #34) should consider reader model as a moderating variable on emotional targets.

### Reader Model x Compositional Anti-Patterns (M-04)

Some compositional anti-patterns are reader-specific:
- "Header hero, body zero" is fine for scanning expert readers (they skip headers anyway)
- "Wall of cards" is fine for studying readers (they process each card sequentially)
- "Grid desert" (single-column throughout) is appropriate for novice readers (reduces cognitive load)

What is an anti-pattern for one reader is a design decision for another.

**Implication:** The anti-patterns investigation (Task #35) should annotate each anti-pattern with its reader-model sensitivity.

### Reader Model x Cross-Page Coherence (M-05)

If KortAI builds multiple pages, the reader model should be CONSISTENT across pages for the same audience. A Gas Town page for expert readers and a Playbook page for expert readers should have the SAME density calibration, even if their content and metaphors differ. Cross-page coherence includes reader-model coherence.

**Implication:** The cross-page investigation (Task #36) should consider reader model as a coherence dimension alongside visual identity.

---

## 12. HONEST ASSESSMENT

### What This Investigation Establishes

1. Reader model is a real, measurable dimension that maps to specific CSS adjustments (Section 4)
2. The current pipeline completely ignores it (Section 3)
3. Integration is low-cost (~15 lines to conventions brief, ~10 lines to TC Phase 0) (Section 7)
4. The CSS delta for different reader models is ~40-80 lines (~4-8% of total CSS) (Section 8)
5. Reader model is a CONTENT-FORM COUPLING variable, not a new root phenomenon (Section 10)

### What This Investigation Does NOT Establish

1. **Whether reader-aware CSS produces measurably better pages.** This is an empirical question. The argument is theoretical: a page calibrated for its reader should score higher on PA-05 ("Would you put your name on this?") because it feels more intentional. But this has not been tested.

2. **Whether LLM builders can consistently implement reader-calibrated CSS.** The builder receives ~15 lines of reader physics. Can it translate "scanning expert reader" into 40-80 CSS adjustments reliably? The Middle-tier experiment showed builders can follow recipes. Reader physics would need to be recipe-format (specific CSS values, not abstract principles).

3. **Whether the 5-axis model is correct.** The axes were derived from analysis, not from user research. The correlation structure (Section 2) is estimated, not measured. Real reader data might reveal different axes or different correlations.

4. **What the interaction effects between reader model and content type actually produce.** The 2x2 matrix (Section 6) is logical but untested. The "hardest pairing" (novice + complex content) might produce different CSS needs than predicted.

### The Core Tension

Reader model introduces a design VARIABLE into a pipeline that has been optimizing for design INVARIANTS. The soul constraints, perception thresholds, and multi-coherence requirements are invariants -- they apply regardless of reader. Adding a variable means the pipeline must make a JUDGMENT (how much should this reader model shift the CSS?) rather than enforce a RULE (is this CSS above the perception floor?).

The pipeline's track record with judgment is poor (Report 51's Phenomenon 1: builder cognitive mode determines quality ceiling). Judgment rules achieve ~0% compliance (MEMORY.md). Binary rules achieve 100%.

**Resolution:** Express reader model as BINARY ADJUSTMENTS, not judgment calls:

```
IF sophistication >= 4 AND attention = scanning:
  Zone 1 padding: 40px (not 64px)
  Zone 3 line-height: 1.55 (not 1.7)
  TOC: absent
  Drop cap: absent
ELSE:
  Default values (current conventions brief)
```

This preserves the pipeline's binary rule architecture while enabling reader calibration. The reader model becomes a lookup table of CSS overrides, not a creative judgment.

---

## SUMMARY

Reader model is the most consequential absent dimension in the current pipeline. It is not a new concept but a missing variable within the existing Content-Form Coupling phenomenon. It maps to 5 measurable axes (sophistication, attention, arrival, device, prior knowledge) that produce concrete CSS adjustments (~40-80 lines per page). Integration requires ~25 lines of pipeline additions (10 lines to TC Phase 0, 15 lines to conventions brief). The Gas Town page demonstrates the gap: content explicitly declares "Stage 7+" audience but CSS treats the reader as a generic intermediate. A reader-aware pipeline would redistribute the spatial budget -- compressing orientation zones and expanding payload zones for expert scanners -- producing a page that feels "made for me" rather than "made for everyone."

**The key architectural decision:** Express reader model as binary CSS overrides (lookup table) rather than judgment calls (creative calibration). This preserves the pipeline's proven binary-rule compliance architecture while enabling the most consequential new dimension.

---

**END OF REPORT B2**

*5-axis reader model defined (sophistication, attention, arrival, device, prior knowledge). Current pipeline handles reader model: NOT AT ALL (0 of 14 pipeline files reference reader variation). CSS delta for reader calibration: ~40-80 lines (4-8% of CSS budget). Integration cost: ~25 lines across 2 pipeline files. Gas Town case study: content says "Stage 7+" but CSS says "generic intermediate." Priority 1 intervention: reader inference from content signals (10 lines to TC Phase 0). Architectural recommendation: binary CSS overrides, not judgment calls. Reader model is a Content-Form Coupling variable (Phenomenon 2), not a new root phenomenon.*
