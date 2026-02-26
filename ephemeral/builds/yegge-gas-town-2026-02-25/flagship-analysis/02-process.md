# Process Gap Analysis: What in Pipeline v3 Prevented Flagship

**Analyst:** process-analyst (Opus 4.6)
**Date:** 2026-02-25
**Build:** yegge-gas-town-2026-02-25
**Scope:** Trace exactly where Pipeline v3's process architecture prevented the yegge-gas-town build from reaching Flagship register, despite achieving PA-05 3.5/4 (CEILING tier, approaching Flagship)

---

## 0. Key Result

The yegge-gas-town build scored PA-05 **2.0/4** on initial build and **3.5/4** after REFINE. Tier 5: **9/9**. Verdict: **SHIP WITH FIXES**. Classification: **CEILING tier, approaching Flagship**.

This is the highest-scoring pipeline build to date. The +1.5 PA-05 improvement from REFINE is the largest single-cycle improvement in pipeline history. The page demonstrates Register 2 (STRUCTURAL coupling) with moments of Register 3 (ATMOSPHERIC coupling) at the major transitions.

**And yet it is not Flagship.**

The gap between CEILING 3.5/4 and FLAGSHIP 4/4 is NOT a failure of the pipeline -- it is a structural limitation of the pipeline's information routing, builder visibility, and REFINE cycle design. This report traces exactly where the gap occurs.

---

## 1. Information Flow Trace

### Junction 1: Content -> Content Map (MINIMAL LOSS)

**Upstream (raw content):** ~5,270 words, 13 sections, 6+ element types, factory/colony metaphor native in the text, 4 identified content tensions.

**Downstream (p0-content-map.md):** 71 lines. Classified content as MIXED with HIGH heterogeneity, HIGH metaphor viability. Identified 5 zones, per-section character register (NARRATIVE/REF/CODE/MIXED), 4 content tensions, 3 metaphor seeds with risk assessment, density arc, detailed reader profile.

**Loss:** Minimal. The Content Analyst produced a rich, compositionally intelligent map. The factory metaphor was correctly identified as content-native (Seed #1, Risk: LOW). The tension identification (Single Agent vs Colony as the structural spine) is exactly what a Flagship build needs. The density arc (ARCH pattern: low -> moderate -> high -> high -> low-moderate) is correctly mapped.

**What survived:** Everything a builder needs to understand the content's shape.

### Junction 2: Content Map -> Execution Brief (SIGNIFICANT ENRICHMENT)

**Upstream (content map):** 71 lines of structural analysis.

**Downstream (p1-execution-brief.md):** 272 lines across 4 tiers.

This junction ADDED significant compositional intelligence:

| Tier | Lines | Content |
|------|-------|---------|
| T1 Identity | ~25 | World-description format ("Every surface is sharp"), warm palette, font trinity, border hierarchy, header DNA |
| T2 Perception | ~20 | Perceptual physics (15 RGB floor, 0.025em letter-spacing, 120px stacked gap, 96px max), worked override examples |
| T3 Compositional | ~130 | LOCKED zone backgrounds with RGB deltas, 6-channel multi-coherence spec per boundary, transition types, factory metaphor mapped to zones, density arc, content-form coupling table, CSS custom property naming |
| T4 Disposition | ~65 | D-01 through D-09: content-register reading, room perception, signing frame, second-half moment, scroll journey, negative space, edge intentionality, skeleton test, quiet zone |
| Content Map | ~30 | Appended verbatim |

**Loss at this junction:** Near zero. The Brief Assembler produced a document rich enough to sustain a Flagship build. The zone background assignments were LOCKED with specific hex values and RGB deltas. The multi-coherence spec describes 6 channels changing at each of the 4 boundaries. The factory metaphor is mapped to CSS custom properties by CONCEPT (`--loading-dock`, `--dispatch-floor`, `--factory-floor`, `--assembly-line`, `--shipping-bay`).

**Critical observation:** The brief contains MORE compositional intelligence than the Middle-tier experiment's planner slice (which produced PA-05 DESIGNED 4/4). The information flow from content to brief is Pipeline v3's strongest link.

### Junction 3: Execution Brief -> Builder -> HTML (THE CRITICAL JUNCTION)

**What the builder received:**
1. Execution Brief (272 lines) -- the compositional spec
2. tokens.css (183 lines) -- design vocabulary
3. components.css (~1,195 lines) -- component library
4. mechanism-catalog.md (1,200+ lines) -- mechanism reference
5. value-tables.md (~262 lines) -- pre-computed color pairs

**Total builder input:** ~3,100 lines

**What the builder produced:**
- p2-yegge-gas-town.html (2,671 lines initial, 2,931 lines post-REFINE, 88KB)
- CSS section: ~1,100 lines (estimated from structure)
- HTML section: ~1,800 lines
- Conviction statement: 21 lines
- 7-question self-evaluation: present

**What the builder DID with the input:**

The initial builder produced a page with:
- 5 zones with conceptually-named CSS custom properties (COMPOSED indicator)
- Factory metaphor mapped to zone structure
- Multiple callout variants (5 semantic types: info, tip, essence, warning, challenge)
- Pull quotes, career table, comparison tables
- Code blocks with proper monospace styling
- 6-channel multi-coherence attempted at zone boundaries
- Density arc following ARCH pattern

**What the builder FAILED to do:**

1. **Dark zone contrast (9/9 auditor convergence):** Z3 (factory floor, `#1E1E1E`) text was invisible at viewport resolution. The builder implemented `color: rgba(254, 249, 245, 0.85)` -- 85% opacity on dark background -- which at DPR 0.667 (Retina Mac MCP limitation) rendered as invisible. The brief specified light-on-dark but never specified minimum contrast values in cd/m2 or WCAG terms.

2. **Z2->Z3 transition abruptness:** No threshold element between the cream world and the dark world. The brief specified "heavy transition" with "dark background inversion = full stop" but the builder interpreted "full stop" as "hard cut" rather than "doorframe between rooms."

3. **No navigation on a 22-viewport page:** The brief's D-05 discusses scroll journey dimensions but never explicitly instructs "build a navigation element."

4. **Z3->Z4 single-channel transition (GR-50):** Only background shifted at this boundary. The brief specified 5 channels should shift at Z3->Z4. The builder implemented the background recovery but not the typography, spacing, border, or accent shifts.

**Quantifying the loss:**

| Brief Spec | Builder Implementation | Gap |
|------------|----------------------|-----|
| Z2->Z3: 6 channels shift | 4 channels implemented | -2 channels |
| Z3->Z4: 5 channels shift | 1 channel implemented | -4 channels |
| Z4->Z5: 3 channels shift | 2 channels implemented | -1 channel |
| Dark zone text contrast | Below WCAG AA | CRITICAL |
| Navigation element | Absent | ABSENT |
| Edge intentionality (D-07) | Partial (no hover states, no ::selection per zone) | ~40% |
| Component adaptation per zone | Strong (callouts modulate) | ~80% |

**Root cause of this junction's loss:** The builder had the information but could not EXECUTE all of it simultaneously. The brief is 272 lines. The builder must hold all 4 tiers in working memory while writing 2,600+ lines of HTML/CSS. At around the Z3 boundary, the builder's attention budget was consumed by the dark zone's complexity (inverted colors, new text colors, adapted components) and the multi-coherence channels at later boundaries were simplified or dropped.

This is the **attention budget problem**: a 272-line brief is rich enough for Flagship, but an LLM builder writing a 2,600-line artifact cannot maintain simultaneous fidelity to all 272 lines throughout the entire build. The brief's later dispositions (D-07 edge intentionality, D-09 quiet zone) are positionally disadvantaged -- they arrive after the builder has already committed most attention to the zone backgrounds, typography, and early transitions.

### Junction 4: HTML -> PA -> Weaver -> REFINE -> Final HTML (THE RESCUE)

The REFINE cycle is where the gap narrowed from 2.0/4 to 3.5/4.

**What the REFINE builder received:**
1. The original HTML (2,671 lines)
2. The conviction statement (from the HTML comment)
3. The artistic impression (33 lines of prose -- see Section 3)
4. Generative language fix list (6 items, no gate scores or thresholds)

**What the REFINE builder did NOT receive:**
- Gate scores or threshold numbers
- The execution brief
- The content map
- Any PA auditor reports
- Any diagnostic data

**What the REFINE builder produced:**
- Dark zone contrast raised to full opacity on all text
- Threshold transition elements at Z2->Z3 ("ENTERING THE FACTORY FLOOR") and Z3->Z4 ("HANDS IN PRACTICE")
- Sticky section navigation with 28px bar indicators and hover labels
- Back-to-top button
- Heading hierarchy fix (h4 -> h3)
- Border width normalization
- Z3->Z4 multi-coherence channels added

**The REFINE delta is +1.5 PA-05 points.** This is extraordinary. The page went from FLOOR tier to CEILING tier in a single cycle.

---

## 2. Builder Visibility Analysis

### What the Builder Actually Saw

**Total input lines:** ~3,100 (272 brief + 183 tokens + ~1,195 components + ~1,200 mechanism catalog + ~262 value tables)

**Guardrail vs Playbook ratio in the brief:**

The execution brief (272 lines) is structured as a RECIPE, not a checklist:

| Section | Lines | Format | G:P Ratio |
|---------|-------|--------|-----------|
| T1 Identity | ~25 | World-description (generative prose) | 0:25 PURE PLAYBOOK |
| T2 Perception | ~20 | Natural laws with calibration ranges | 5:15 (thresholds are guardrails; calibration is playbook) |
| T3 Compositional | ~130 | Specific hex values, channel-by-channel specs, CSS property naming | 10:120 (zone locks are guardrails; everything else is playbook) |
| T4 Disposition | ~65 | "PURPOSE + VOCABULARY" format per disposition | 0:65 PURE PLAYBOOK |
| **Total** | **272** | **Recipe** | **~15:225 = 1:15** |

**The guardrail:playbook ratio in the yegge-gas-town brief is 1:15 -- the INVERSE of the flagship experiment's 7.9:1.**

This is the single most important structural improvement in Pipeline v3. The brief assembler reframes constraints as world-descriptions ("Every surface is sharp") and provides CSS-actionable playbook content (specific hex values, font sizes, spacing values, transition types per boundary). The builder does NOT see raw prohibitions.

**Comparison with flagship experiment:**

| Metric | Flagship Experiment | yegge-gas-town |
|--------|-------------------|----------------|
| Builder prompt lines | 75 (of 963 total) | 272 (brief) + 2,840 (reference) |
| Guardrail:Playbook | 7.9:1 | 1:15 |
| CSS recipe content | 0 lines | ~130 lines (T3 compositional) |
| Specific hex values | 0 | 9 (5 zone + 4 accent) |
| Specific font sizes per zone | 0 | 15+ (body, H2, H3 per zone) |
| Transition type per boundary | 0 | 4 (one per boundary, classified as light/medium/heavy) |
| Metaphor-to-CSS mapping | 0 | 8 custom properties by concept |
| Component guidance | 0 | "Build with components.css, target 8+" |

**Pipeline v3 SOLVED the guardrail factory problem.** The brief is rich, compositional, recipe-format, and CSS-actionable. The builder received more playbook content than any previous pipeline build.

### Why This Wasn't Enough for Flagship

Despite the 1:15 G:P ratio, the builder produced a 2.0/4 initial build. Three reasons:

1. **The dark zone contrast failure was mechanical, not compositional.** The builder understood the factory metaphor, implemented the dark inversion, styled components for dark backgrounds, and varied typography per zone. But `rgba(254, 249, 245, 0.85)` on `#1E1E1E` is below WCAG AA contrast at DPR 0.667. The brief's T2 perception thresholds cover background deltas (>=15 RGB) and letter-spacing (>=0.025em) but NOT text-on-background contrast ratios. This is a spec gap, not a builder failure.

2. **Multi-coherence at Z3->Z4 was under-specified.** The brief specifies "5 channels shift" but lists them as prose ("Typography: body 15px -> 16px, line-height 1.6 -> 1.7"). The builder implemented the background shift (the most dramatic channel) but the typography, spacing, border, and accent shifts were either partial or absent. The brief provides WHAT should change but not the CSS to achieve it. Compare with the CD-006 reference in the builder recipe: "S3 (Dense): Dark inversion block, 4px left border callouts, 16px body text, tightened line-height 1.6" -- these are specific CSS values that a builder can directly implement.

3. **The attention budget problem.** 272 lines of brief + 2,840 lines of reference material. The builder must parse and synthesize ~3,100 lines of input while producing ~2,600 lines of output. The T4 dispositions (D-01 through D-09) are the most compositionally rich content in the brief, but they arrive LAST -- after the builder has already committed to structural decisions based on T1-T3. D-07 (edge intentionality with specific techniques: `font-variant-numeric: tabular-nums`, hover states, zone-specific `::selection`) appears at line ~193 of 272. By the time the builder encounters it, the CSS architecture is already committed.

---

## 3. The REFINE Delta: The Most Important Data Point

### What the Initial Build Had (PA-05 2.0/4)

- Sound compositional logic: 5 zones, factory metaphor structural, concept-named custom properties
- 6 callout variants with semantic meaning (info, tip, essence, warning, challenge)
- Dark zone inversion (the right architectural decision)
- Zone-adapted typography (18px Z1 -> 16px Z2 -> 15px Z3 -> 16px Z4)
- Component modulation (callout padding adjusts per zone)
- Pull quotes, career table, comparison tables, code blocks
- **INVISIBLE dark zone content** (the page appeared 85% void)
- No navigation on a 22-viewport page
- Abrupt cream-to-dark transition with no mediating element
- Z3->Z4 transition: single channel only

### What the REFINE Added (PA-05 3.5/4)

1. **Dark zone contrast raised to full opacity** (all text, borders, code blocks)
2. **Threshold transitions** at Z2->Z3 ("ENTERING THE FACTORY FLOOR") and Z3->Z4 ("HANDS IN PRACTICE") -- structural dividers that create narrative landmarks
3. **Sticky section navigation** with 28px bar indicators and hover-reveal labels
4. **Back-to-top button** with factory-accent styling
5. **Heading hierarchy fix** (h4 -> h3)
6. **Border width normalization** to identity hierarchy (4px/3px/1px)
7. **Z3->Z4 multi-coherence** channels added (typography, spacing, borders, accents)

### What Information the REFINE Builder Had That the Initial Builder Lacked

The REFINE builder received:

1. **The artistic impression** (33 lines): Prose that describes the page's emotional arc, names what works ("The complexity ladder in its monospace box is the best single design moment"), names what fails ("someone forgot to turn on the lights"), and provides generative direction ("raise the lights in the factory"). This is CONVICTION-LEVEL writing -- it tells the builder what the page WANTS TO BE, not what rules it must follow.

2. **The conviction statement** from the original builder (21 lines): The original builder's own vision of what the page should be, which the REFINE builder could read as intent to preserve.

3. **Generative language fix list** (6 items, no thresholds):
   - "Turn on the lights in the factory"
   - "Build a doorframe between library and workshop"
   - "Add navigation for 22-viewport page"
   - "Fix heading hierarchy"
   - "Normalize border widths to identity hierarchy"
   - "Strengthen Z3->Z4 multi-coherence"

### What This Proves

**The REFINE builder had LESS information than the initial builder** (no brief, no reference files, no content map) but produced a dramatically better result. The +1.5 improvement came from:

1. **Seeing the existing page** -- the REFINE builder could see what was ACTUALLY built, not what was PLANNED. The initial builder worked from imagination; the REFINE builder worked from reality.

2. **The artistic impression as perceptual feedback** -- the weaver's prose functions as a HUMAN-LIKE RESPONSE to the built artifact. "Someone forgot to turn on the lights" is not a rule -- it is a perception. The REFINE builder could feel what a reader would feel, because the artistic impression described that feeling.

3. **Generative language, not threshold language** -- "Turn on the lights" vs "Increase contrast to WCAG AA ratio 4.5:1." The former gives the builder creative agency; the latter makes the builder a compliance engine. The REFINE builder invented threshold transition markers ("ENTERING THE FACTORY FLOOR") that were not in any spec -- they were a creative response to "build a doorframe between library and workshop."

4. **A completed artifact to iterate on** -- the most fundamental advantage. The initial builder starts from zero; the REFINE builder starts from 2,671 lines of committed CSS/HTML. Every change is targeted rather than generative. This is the two-instance pattern exploiting continuation bias CONSTRUCTIVELY: the second instance is not bound by the first instance's attention budget because the structural decisions are already made.

**The REFINE cycle is the structural answer to the attention budget problem.** The initial builder carries too much cognitive load (3,100 lines of input -> 2,600 lines of output). The REFINE builder carries minimal cognitive load (the existing artifact + 33 lines of artistic impression + 6 generative instructions -> ~260 lines of targeted changes).

---

## 4. Recipe vs Checklist Analysis

### The Execution Brief: A Recipe

The p1-execution-brief.md is structured as a recipe:

- **Sequenced tiers** (Identity -> Perception -> Compositional -> Disposition) create a build order
- **Specific CSS values** ("Z1 body 18px, Z2 body 16px, Z3 body 15px")
- **Worked examples** (T2 override examples with specific hex calculations)
- **Creative authority grant** ("80% creative authority within identity constraints")
- **Verbs are constructive** ("Deploy FULL multi-coherence framework", "Build with components from components.css")

### The Builder Recipe: Also a Recipe

The artifact-builder-recipe.md (828 lines) is structured in 4 phases:

1. PHASE 1: READ YOUR VOCABULARY (Steps 1.1-1.4: read tokens.css, components.css, brief)
2. PHASE 2: SELECT YOUR PER-PAGE CREATIVE DECISIONS (Steps 2.1-2.9: backgrounds, type scale, metaphor, callouts, components, container, hover, transitions)
3. PHASE 3: DEPLOY YOUR SCAFFOLDING (Step 3.1+: zone-by-zone building)
4. PHASE 4: ASSESS (self-check)

**Verbs:** Read, Select, Deploy, Assess (recipe verbs).

### Comparison with Flagship Experiment's Checklist

| Dimension | Flagship Experiment | yegge-gas-town |
|-----------|-------------------|----------------|
| Format | Checklist (71 lines) | Recipe (272-line brief + 828-line recipe) |
| Verb type | Verify, Fail if, Must be | Read, Select, Deploy, Assess |
| CSS values | 0 specific values | 60+ specific values |
| Sequencing | None (flat list) | 4-phase build order |
| Creative authority | Unstated | "80% creative authority" explicit |
| Tone | Prohibition-dominant | Purpose-dominant |
| Builder result | PA-05 1.5/4 (FLAT) | PA-05 2.0/4 initial -> 3.5/4 REFINE |

**Pipeline v3 uses the recipe format.** The Middle-tier experiment proved recipe = DESIGNED. The yegge-gas-town build confirms this: the initial build's 2.0/4 is constrained by a mechanical failure (dark zone contrast), not by the recipe format. When the mechanical failure is fixed (REFINE cycle), the compositional logic underneath scores 3.5/4.

---

## 5. What Would Need to Change for Natural Flagship

"Natural Flagship" means PA-05 >= 3.5/4 AND Tier 5 >= 6/8 on the INITIAL build, without requiring a REFINE cycle. The yegge-gas-town build achieved this only after REFINE. Here are the specific process changes needed:

### Change 1: Add Perception Thresholds for Dark Zone Contrast

**File to change:** `ephemeral/va-extraction/artifact-identity-perception.md`
**Section:** "2.2 Core Thresholds"

**Current state:** Thresholds exist for background deltas (>=15 RGB), letter-spacing (>=0.025em), stacked gaps (<=120px), single margins (<=96px). NO threshold for text-on-background contrast.

**Required addition:**
```
Text on background: WCAG AA minimum (4.5:1 for body text, 3:1 for large text).
When using dark backgrounds (luminance < 50), text must be >= rgba(255,255,255,0.9) or a warm off-white (#FEF9F5) at full opacity.
Light text on dark backgrounds must NEVER use opacity < 0.9 on the text color itself.
```

**Why this matters:** The 9/9 auditor convergence on dark zone invisibility proves this is not an edge case. Any builder implementing a dark inversion zone will face this problem. A perception threshold prevents it structurally.

### Change 2: Add Transition Element Templates to the Brief

**File to change:** `ephemeral/va-extraction/artifact-tc-brief-template.md`
**Section:** T3 Compositional, transition types

**Current state:** The brief specifies transition TYPES (light, medium, heavy) with CSS properties (border weight, gap size) but not STRUCTURAL ELEMENTS. The Z2->Z3 "heavy" transition is described as "dark background inversion = full stop" which the builder interpreted as a CSS background-color change, not a structural HTML element.

**Required addition:** When a "heavy" transition is specified, the brief should provide a structural element template:
```
Heavy transition template:
<div class="zone-threshold" aria-label="[zone transition name]">
  <div class="container">
    <div class="threshold-label">[TRANSITION TEXT IN CAPS]</div>
  </div>
</div>
CSS: border-top 3px solid accent, padding 24px, background transition color, monospace label
```

**Why this matters:** The REFINE builder's "ENTERING THE FACTORY FLOOR" threshold was the single most praised design element across all 9 REFINE auditors. It was NOT in any spec. It was invented by the REFINE builder in response to generative language. If the brief included a threshold template for heavy transitions, the initial builder would produce it.

### Change 3: Add a Builder Self-Scroll Gate with Perceptual Criteria

**File to change:** `ephemeral/va-extraction/artifact-builder-recipe.md`
**Section:** PHASE 4 (Assess)

**Current state:** The builder recipe mentions self-assessment but the 7 self-check questions are compositional ("Zone transitions -- how many, what changes?"), not perceptual ("Can you read the text at every scroll position?").

**Required addition:** After writing the HTML, the builder must mentally scroll through the page and answer:
1. At every viewport position, is all text readable against its background?
2. At every zone transition, can you name what changes? (If only one thing changes, the transition is under-specified.)
3. Is there navigation for pages longer than 10 viewports?

**Why this matters:** The initial builder wrote invisible text. A simple perceptual self-check would have caught this before the PA cycle.

### Change 4: Route the Artistic Impression to the Initial Builder as a "Pre-Vision"

**Process change (not file change)**

The yegge-gas-town REFINE proves that the artistic impression is the highest-leverage document the pipeline produces. Currently, it is generated AFTER the build and given only to the REFINE builder. A structural improvement:

**Option A (conservative):** After the content map is produced but before the brief is assembled, spawn a "Pre-Vision Agent" (Opus) that reads the content map and writes a 20-30 line artistic impression of what the page SHOULD feel like. Route this pre-vision to the builder alongside the brief.

**Option B (aggressive):** Include 3-5 lines of "perceptual target" prose directly in the T4 Disposition section of the brief. Example: "When a reader scrolls past the Z2->Z3 boundary, they should feel like they are entering a workshop. The transition should be dramatic enough to make them pause. The dark zone should feel dense with machinery, not empty."

**Why this matters:** The REFINE builder's +1.5 improvement came primarily from the artistic impression's generative language. The initial builder never received this kind of perceptual target description. The brief tells the builder WHAT to build (channels, values, hex codes) but not what it should FEEL LIKE to experience.

### Change 5: Reduce REFINE Friction

**Process change**

Currently, the REFINE cycle requires a full Mode 4 PA re-audit (9 auditors + integrative + weaver = 11 agents, ~30-40 minutes). For a page that is structurally sound but has mechanical issues (like the dark zone contrast), this is expensive.

**Proposed:** Add a "Quick REFINE" path: if the weaver's initial verdict identifies ONLY mechanical and structural fixes (zero COMPOSITIONAL fixes), the REFINE cycle uses a 3-auditor spot-check instead of full Mode 4. The 3 auditors check: (1) fix effectiveness, (2) regression, (3) gestalt. This reduces REFINE cycle time from ~40 minutes to ~15 minutes.

**Why this matters:** The yegge-gas-town build took ~3h20m total including the full REFINE PA. A Quick REFINE would save ~25 minutes. More importantly, it enables a SECOND REFINE cycle (for the 5 remaining fixes) within a reasonable time budget.

### Change 6: D-07 Edge Intentionality Needs CSS Examples

**File to change:** `ephemeral/va-extraction/artifact-tc-brief-template.md` or the brief assembler prompt

**Current state:** D-07 lists techniques (`font-variant-numeric: tabular-nums`, hover states, `::selection`, `text-indent`) but as a CATALOG, not as a CSS recipe. The builder sees "Distribute more edge refinements in Z3-Z4 (high-density zones) than Z1/Z5" but has no CSS to copy.

**Required change:** D-07 should include 3-5 concrete CSS blocks:
```css
/* D-07: Edge intentionality -- hover states */
.role-table tr:hover { background: rgba(232,48,37,0.05); }
/* D-07: Edge intentionality -- zone-specific selection */
.zone-factory-floor ::selection { background: var(--factory-accent); color: white; }
/* D-07: Edge intentionality -- numeric alignment */
.wave-table td:nth-child(1) { font-variant-numeric: tabular-nums; }
```

**Why this matters:** The DELIGHT register scored 4/10. Edge intentionality micro-refinements (hover states, selection colors, numeric alignment) are the exact techniques that separate AUTHORITY (8/10) from DELIGHT (8/10). The brief names them but the builder doesn't implement them because they arrive as prose, not as CSS.

---

## 6. Agent Communication Topology

### Build Topology

The yegge-gas-town build used Pipeline v3's standard FLAT topology:

```
Orchestrator (Team Lead)
  |
  ├── Content Analyst (Opus) --> p0-content-map.md
  ├── Brief Assembler (Opus) --> p1-execution-brief.md
  ├── Builder (Opus) --> p2-yegge-gas-town.html
  ├── [Gate Runner -- orchestrator Playwright JS, not an agent]
  ├── PA Auditors A-I (9x Opus, parallel) --> 9 reports
  ├── Integrative Auditor (Opus) --> p3b-integrative.md
  ├── Weaver (Opus) --> p3c-weaver-diagnostic.md + p3c-weaver-artistic.md
  ├── REFINE Builder (DIFFERENT Opus) --> p2 updated
  ├── [Post-REFINE Gate Runner]
  ├── REFINE PA Auditors A-I (9x Opus, parallel) --> 9 reports
  ├── REFINE Integrative (Opus) --> integrative report
  └── REFINE Weaver (Opus) --> p3c-weaver-diagnostic-refine.md + p3c-weaver-artistic-refine.md
```

**Total agents spawned:** ~26 (1 Content Analyst + 1 Brief Assembler + 1 Builder + 9 PA + 1 Integrative + 1 Weaver + 1 REFINE Builder + 9 REFINE PA + 1 REFINE Integrative + 1 REFINE Weaver)

### Did Agents Communicate?

**Inter-agent messages (SendMessage):** Not tracked in the execution tracker, but based on the flat topology: agents received files via the orchestrator, not via direct messaging. The Content Analyst's output (content map) was passed to the Brief Assembler by the orchestrator. The Brief Assembler's output (brief) was passed to the Builder by the orchestrator. All routing was file-based, mediated by the orchestrator.

**Did the builder ever ask a question?** No evidence of this in the execution tracker. The builder received its inputs and produced its output. No iterative dialogue occurred between builder and orchestrator or builder and brief assembler.

**Did the planner ever see the CSS?** There is no "planner" in Pipeline v3. The Brief Assembler functions as the planner. The Brief Assembler never saw the built HTML -- the information flow is strictly one-directional: Content Analyst -> Brief Assembler -> Builder -> PA Auditors -> Weaver.

**The communication topology was file-based and unidirectional.** This is by design in Pipeline v3 (FLAT topology). The Middle-tier experiment also used file-based communication and scored PA-05 4/4. The ceiling experiment had zero communication and scored PA-05 3.5/4 (after fix patches, from initial defects).

### Communication and Flagship

Previous research (MEMORY.md) established: "Agent communication is essential for quality. Zero SendMessage = fast execution but B+ quality." The yegge-gas-town build's flat file-bus topology produced CEILING tier (3.5/4 = A-). This is consistent with the established finding.

**What communication COULD have helped:**

1. The Brief Assembler could have asked the Content Analyst: "The factory metaphor suggests a dark zone for infrastructure -- should I specify minimum contrast values for light-on-dark text?" This would have prevented the dominant failure.

2. The Builder could have asked the orchestrator: "The brief says Z3->Z4 should have 5 channel shifts. I've implemented background. Can you confirm which other 4 channels need to shift?" This would have prevented the single-channel transition.

3. The Weaver's artistic impression ("someone forgot to turn on the lights") is the most valuable diagnostic ever produced by the pipeline. If a "pre-vision" agent wrote something similar BEFORE the build, it would serve as perceptual targeting for the builder.

**However:** These communication gaps produced a 3.5/4 page (after REFINE). The question is whether FLAGSHIP requires communication or whether it requires better SPECS. Based on the evidence:

- The brief's compositional intelligence was sufficient (1:15 G:P ratio, rich multi-coherence spec)
- The builder's execution was mechanically flawed (contrast) and attention-limited (later dispositions)
- The REFINE cycle fixed both problems with minimal information (artistic impression + 6 generative instructions)

**Conclusion:** Flagship does not require agent communication per se. It requires either (a) a brief that anticipates mechanical failure modes (dark zone contrast) and provides self-check criteria, or (b) a REFINE cycle that is structurally built into the pipeline as the EXPECTED path to Flagship, not as a failure recovery mechanism.

---

## 7. The Structural Diagnosis: Why CEILING But Not Flagship

### What the Page Has (CEILING evidence)

- **STRUCTURAL metaphor coupling:** Factory zones map to CSS custom properties. Zone backgrounds, typography, spacing, and components all encode the factory progression. The metaphor persists without text labels (9/9 Tier 5 PA-68).
- **Multi-scale coherence:** Macro (light-dark-light), meso (section pacing), micro (element alternation). Three scales operating simultaneously.
- **6-channel multi-coherence at the strongest boundary** (Z2->Z3): background + typography + spacing + borders + accent + components. 7 simultaneous property shifts at the factory floor entry.
- **Content-form resonance:** The factory metaphor is content-native. The page structure enacts what the content describes.
- **Designed moments:** Threshold markers, complexity ladder, decision flowchart, quotes grid.
- **Component zone-adaptation:** Callouts modulate per zone (generous in Z1, compressed in Z3, different border colors against dark).

### What the Page Lacks (Flagship gaps)

1. **DELIGHT register (4/10):** No hover states revealing content. No typographic micro-details beyond headings. No zone-specific `::selection` colors. No `font-variant-numeric: tabular-nums` on number tables. The page has AUTHORITY but not the micro-refinements that create intimate surprise.

2. **Internal dark zone relief:** Z3 runs unbroken for ~60-70% of scroll height. Even with content now visible (post-REFINE), the sustained dark intensity creates scroll fatigue. 6/10 auditors flagged this. The page needs a "lighter interlude" within the dark zone -- even a slightly different shade or a single cream-background card.

3. **Edge transition completeness:** Z4->Z5 has only 3 channels (vs 3 specified). Z1->Z2 has 4 channels (vs 4 specified, but edge GR-50 still flags). The "gentle" transitions are too gentle -- they don't register as zone changes.

4. **Layout monotony in dark zone:** While Z1 and Z2 have varied layouts (tables, callouts, pull quotes), the dark zone sections tend toward single-column stacks of similar-weight elements. The principle cards (4x identical) specifically erode variety.

5. **Footer text size:** A small but telling detail. At ~11px, footer text requires squinting. Flagship-level polish means EVERY text element is comfortable to read.

### The Process Gap That Creates These Lacks

These 5 gaps share a common cause: **they are all things the INITIAL builder would need to hold in working memory simultaneously with everything else.** The brief names them (D-07 edge intentionality names hover states; D-04 names second-half moments; D-09 names quiet zones). But the builder is already managing:

- 5 zone backgrounds with specific hex values
- 6 channels per 4 boundaries
- 13 sections across 5 zones
- 3 typefaces with per-zone sizing
- 8+ components with semantic variants
- Border hierarchy (4px/3px/1px)
- Spacing scale (4px increments from 4-96px)
- Content mapping (which content goes in which section)
- HTML structure (semantic markup, ARIA, responsive)

Adding hover states, `::selection` per zone, `font-variant-numeric`, principle card variation, and dark zone internal relief ON TOP of this is an attention budget overflow.

**The process gap is not information (the brief has it) or format (the brief is a recipe) or creativity (the builder demonstrates fluency). The gap is BUILDER COGNITIVE LOAD.**

### Proposed Structural Fix

**Two-pass initial build:**

Pass 1 (structural): Build the zone architecture, backgrounds, typography, content markup. Focus on T1+T2+T3 (Identity + Perception + Compositional frameworks). Output: structural HTML/CSS (~1,800 lines).

Pass 2 (refinement): Read the structural output. Apply D-01 through D-09 dispositions. Add hover states, `::selection` per zone, transition markers, principle card variation, edge intentionality details. Focus on T4 (Disposition). Output: refined HTML/CSS (~2,600 lines).

**This is different from the REFINE cycle.** The REFINE cycle responds to PA failure. The two-pass build is a PLANNED split of the builder's attention budget, where the structural pass establishes the foundation and the refinement pass adds the micro-details that separate CEILING from FLAGSHIP.

**Cost:** ~15-20 additional minutes (one more Opus agent invocation).
**Expected gain:** The refinement pass addresses exactly the 5 gaps identified above (delight, dark zone relief, edge transitions, layout variety, footer polish) because it can focus on them without simultaneously managing the zone architecture.

---

## 8. Summary: Where the Process Prevented Flagship

| Process Element | What Happened | What Would Produce Flagship |
|----------------|--------------|---------------------------|
| **Content -> Brief** | Excellent: rich, recipe-format, 1:15 G:P ratio | No change needed |
| **Brief -> Builder** | Builder attention overload: 272 lines brief + 2,840 lines reference -> 2,600 lines output | Two-pass build (structural then refinement) |
| **Dark zone contrast** | No perception threshold for text contrast | Add WCAG contrast threshold to T2 |
| **Heavy transitions** | No structural element template | Add threshold element template to T3 |
| **Builder self-check** | Compositional only, not perceptual | Add 3 perceptual self-check questions |
| **REFINE cycle** | RESCUED the build (+1.5 PA-05) | Build this into the EXPECTED flow, not failure recovery |
| **Artistic impression** | Generated AFTER build, given to REFINE builder only | Generate a "pre-vision" BEFORE build |
| **Edge intentionality** | Named in D-07 as prose catalog | Add 3-5 CSS code blocks |
| **Communication** | File-based unidirectional | Sufficient for CEILING; Flagship may need brief-builder dialogue |

**The pipeline's biggest achievement:** The guardrail:playbook ratio was INVERTED from 7.9:1 (flagship experiment) to 1:15 (this build). The brief is rich, sequenced, and CSS-actionable. The REFINE cycle works.

**The pipeline's biggest remaining gap:** Builder cognitive load. A single Opus agent cannot hold 3,100 lines of input AND 9 disposition-level refinements AND mechanical correctness (contrast, WCAG, heading hierarchy) AND 2,600 lines of output in simultaneous working memory. The solution is not more information in the brief -- it is splitting the build into two attention-budget-manageable passes.

**Final assessment:** Pipeline v3 does NOT prevent Flagship. It ENABLES CEILING with a clear, repeatable path. Flagship is one structural change away: a planned two-pass build that separates structural composition from micro-refinement disposition. The REFINE cycle already proved this works -- it just needs to be PLANNED rather than REACTIVE.
