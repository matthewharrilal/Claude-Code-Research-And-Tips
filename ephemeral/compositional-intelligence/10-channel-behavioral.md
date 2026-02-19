# CHANNEL 5: BEHAVIORAL — Trace Report

**Author:** Behavioral Channel Tracer (Opus 4.6)
**Date:** 2026-02-19
**Task:** Trace how hover states, focus rings, transitions, animations, scroll behavior, and interactive feedback operate through PV2 — and where the behavioral channel loses semantic meaning.

**Sources read:**
- `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (977 lines)
- `~/.claude/skills/tension-composition/SKILL.md` (Phases 0-4.8, behavioral property tables)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (18 mechanisms + transition grammar)
- `ephemeral/pv2-cross-reference/14-MASTER-SYNTHESIS.md` (500 lines, convergence/contradiction map)
- `ephemeral/flagship-remediation/builder-changelog.md` (behavioral additions)
- `ephemeral/flagship-remediation/_verification/` (9 PA auditor reports + soul compliance + programmatic verification)

---

## 1. WHAT THE BEHAVIORAL CHANNEL IS

The behavioral channel governs everything the page DOES in response to user action or passage of time:

| Behavioral Sub-Channel | CSS Properties | What It Communicates |
|------------------------|---------------|---------------------|
| **Hover states** | `:hover`, `opacity`, `background-color`, `color`, `border-width` | "This element responds to your attention" |
| **Focus indicators** | `:focus-visible`, `outline`, `outline-offset` | "You are here (keyboard navigation)" |
| **Transitions** | `transition-property`, `transition-duration`, `transition-timing-function` | "How things change speed/character" |
| **Animations** | `@keyframes`, `animation-*` | "This element has autonomous movement" |
| **Scroll behavior** | `position: sticky`, `scroll-behavior`, intersection observers | "The page adapts as you traverse it" |
| **Interactive feedback** | `::selection`, `cursor`, `pointer-events` | "The page acknowledges your actions" |
| **Reduced motion** | `@media (prefers-reduced-motion)` | "The page respects user preferences" |

The behavioral channel is UNIQUE among the 6 operational channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material) because it is the only one that is **temporal** — it unfolds over time, not in a single frame. A screenshot captures zero behavioral channel information. This has profound implications for how PV2 verifies it.

---

## 2. WAVE-BY-WAVE TRACE

### Wave 0 (TC Planner): MINIMAL BEHAVIORAL PLANNING

**What TC does with behavior:**

TC's Phase 0D isomorphism table (SKILL.md lines 1143-1168) includes a "D. Behavioral Properties" category:

```
| Property          | CSS Mechanism                                              |
|-------------------|-----------------------------------------------------------|
| Descent/drilling  | Vertical stacking with increasing visual weight downward   |
| Expansion/contraction | Responsive breakpoints, collapsing grids               |
| Oscillation/breathing | Breathing zone components between sections              |
| Flow direction    | Reading direction + scan patterns (F-pattern, Z-pattern)   |
```

And the completeness checklist asks: "4. **Behavioral**: What does it DO?"

**THE PROBLEM:** These behavioral properties describe SPATIAL RHYTHM, not INTERACTIVE BEHAVIOR. "Descent/drilling" = scroll depth. "Oscillation/breathing" = section padding alternation. "Flow direction" = reading patterns. NONE of these are interactive behaviors (hover, focus, transition speed, animation character).

TC's behavioral property list is actually a SPATIAL property list wearing a behavioral label. It answers "how does the page organize content" not "how does the page respond to user actions."

**What's missing from TC:**
- No hover speed guidance (should a geological metaphor have slow, heavy hovers or quick, light ones?)
- No transition character planning (should transitions feel fluid? Abrupt? Weighted?)
- No animation philosophy (should the page breathe? Shift? Be completely still?)
- No scroll behavior decisions (sticky elements? Parallax? Progressive reveal?)
- No focus ring aesthetic (warm focus rings for warm metaphors? Sharp focus for angular content?)

**Verdict for Wave 0:** TC treats behavioral as a synonym for spatial rhythm. Zero interactive behavior planning occurs. The behavioral channel enters Wave 1 as an UNPLANNED channel.

---

### Wave 0.5 (Metaphor Validation): NO BEHAVIORAL CHECK

The fresh-eyes agent evaluates whether the metaphor is STRUCTURAL or ANNOUNCED. The binary gate asks: "Does this tell me what CSS to write?"

No behavioral question is asked. The validation does not check whether the metaphor has behavioral implications. A "geological strata" metaphor suggests SLOW, HEAVY, WEIGHTED interactive behavior (things should shift like tectonic plates). A "water flow" metaphor suggests FLUID, QUICK, SMOOTH interactive behavior. A "mechanical clockwork" metaphor suggests PRECISE, SNAPPING, DISCRETE transitions.

**These distinctions are never captured.** The metaphor validation gate checks spatial/visual structurality only.

---

### Wave 0.9 (Handoff Gate): ZERO BEHAVIORAL CHECKS

The handoff gate checks 5 binary conditions:

1. Zone count 2-5?
2. BG colors >= 15 RGB delta?
3. >= 2 grid layouts?
4. Per-category mechanism minimums (S:1+, T:1+, M:1+, B:1+, R:1+)?
5. >= 3 transition types (SMOOTH/BRIDGE/BREATHING)?

**Check 5 is labeled "transition types" but measures SPATIAL transitions** (how zones hand off visually), not CSS `transition` properties. SMOOTH = background color gradient shift. BRIDGE = decorative `<hr>`. BREATHING = whitespace pause. These are spatial compositions, not interactive behaviors.

**The per-category minimum check (#4) mentions B:1+** — but what constitutes a "Behavioral" mechanism? Looking at the mechanism catalog's 5 categories:

| Category | ID | Mechanisms |
|----------|----|-----------|
| Spatial | S | #5, #6, #15 |
| Hierarchy | H | #1, #4, #11 |
| Component | C | #2, #9, #10, #17 |
| Depth/Emphasis | D | #3, #7, #16 |
| Structure/Navigation | N | #8, #12, #13, #14, #18 |

**There IS no Behavioral (B) category in the mechanism catalog.** The catalog has 5 categories: Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation. The handoff gate's "B:1+" references a category that DOES NOT EXIST in the catalog.

**This is a naming taxonomy collision (X-05 in the Master Synthesis):**
- The mechanism catalog uses: Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav
- The architecture diagram uses: Spatial, Temporal, Material, Behavioral, Relational
- The remediation's 6 channels: Chromatic, Typographic, Spatial, Structural, Behavioral, Material

Three naming schemes. "Behavioral" appears in the architecture and remediation but NOT in the mechanism catalog that the builder actually reads. The handoff gate's B:1+ check has no operationally-defined mechanisms to satisfy it.

**Verdict for Wave 0.9:** Behavioral is a phantom category — referenced in gates but undefined in the catalog the builder uses.

---

### Wave 1 (Build Execution): BEHAVIORAL IS AFTERTHOUGHT

The 9-phase recipe handles behavioral elements in **Phase 6: Element-Level Richness** and **Phase 7: Accessibility**.

**Phase 6 specifies:**
> - Hover states on interactive elements.
> - Selection styling (::selection).
> - Link underline treatments.
> - Table striping. List marker styling.
> - Code block backgrounds.
> - Pull-quote / blockquote visual distinction.

**Phase 7 specifies:**
> - Focus styles (2px solid outline, 2px offset).
> - Reduced motion: @media (prefers-reduced-motion).

**What the remediation builder actually produced (from builder-changelog.md):**

Phase 6 (~35 lines added):
- `a` links: warm teal underline, hover opacity
- `.data-table tbody tr:hover`: subtle warm hover background
- `inline-code`: warm background, border

Phase 7 (~165 lines added):
- `::selection` with warm highlight
- `*:focus-visible` with warm teal outline (2px offset)
- `.skip-link` positioned off-screen, visible on focus
- `@media (prefers-reduced-motion: reduce)`: disables transitions/animations
- Print stylesheet

**What the PA auditors found (from 9 PA reports):**

Soul compliance verification identified these hover effects:
- `a:hover { color: var(--color-text); }` — color change only
- `table tbody tr:hover { background-color: ... }` — background tint only
- `.callout { transition: border-left-width 0.15s ease; }` — subtle border thickening

Three transition speeds:
- Links: `transition: color 0.15s ease`
- Table rows: `transition: background-color 0.1s ease`
- Callouts: `transition: border-left-width 0.15s ease`

**PA auditor G scored these PASS** (PA-39 focus states 10/10, PA-41 reduced motion 10/10). But the auditor was evaluating PRESENCE, not SEMANTIC COHERENCE.

**THE CRITICAL QUESTION THE PA NEVER ASKED:**

> "Do the hover effects, transition speeds, and interactive behaviors REINFORCE the semantic direction established by the metaphor?"

The remediation page had no metaphor (it was brownfield remediation). But under PV2, pages WILL have metaphors. Should a "geological strata" page have:
- Hover transitions at 0.15s ease? Or 0.4s ease-in-out (heavy, geological weight)?
- Focus rings in warm teal? Or in earth tones matching the geological palette?
- Table row hovers as background tint? Or as border-left thickening (matching the border-weight gradient hierarchy)?
- `::selection` in warm cream? Or in a geological accent color?

**The recipe specifies WHAT to add (hover states, focus rings, selection styling) but not HOW to connect them to the metaphor.** Phase 6 is a CHECKLIST of behavioral features, not a RECIPE for behavioral coherence.

**Verdict for Wave 1:** Behavioral elements are present but semantically disconnected from the metaphor. They are generic accessibility/polish features, not compositional choices.

---

### Wave 2 (Verification): BEHAVIORAL CHANNEL IS UNVERIFIABLE

**Layer 1 (Programmatic Gates):**

The 12 binary gates (SC-01 through SC-12) check:
- Container width, soul properties, fonts, palette, extremes
- ARIA landmarks, skip link, component library
- Background delta, stacked gap, font-size zones, zone count

**ZERO gates check behavioral properties.** No gate verifies:
- Hover transition duration consistency
- Focus ring visibility
- `::selection` styling presence
- Reduced motion implementation
- Transition speed coherence (are all transitions the same speed? Different? Why?)
- Scroll behavior functionality

**Layer 2 (Perceptual Audit):**

The Mode 4 PA uses screenshots. Screenshots capture ZERO behavioral information. A hover state, a transition speed, a focus ring, a `::selection` highlight, a sticky element's behavior — none are visible in a static screenshot.

PA auditor G evaluated accessibility features (focus states, reduced motion) by reading the HTML/CSS source code, not by observing behavior. The auditor graded PASS based on code presence, not perceptual quality.

**This confirms the memory finding:** "Programmatic verification ≠ perceptual verification." But for the behavioral channel, the problem is worse: NEITHER programmatic gates NOR perceptual audit can verify behavioral coherence. Programmatic gates could check presence (does `:hover` exist?) but currently don't. Perceptual audit fundamentally cannot assess temporal behavior through screenshots.

**Verdict for Wave 2:** The behavioral channel is invisible to both verification layers. It ships unverified.

---

### Wave 3 (Fix Cycle): BEHAVIORAL ISSUES CANNOT SURFACE

Fix cycles address the PA weaver's top-3 blocking issues. Since behavioral issues cannot surface in screenshot-based PA, they can never be flagged as blocking issues, and therefore can never enter the fix cycle.

**Verdict for Wave 3:** Behavioral channel defects persist through all 3 fix cycles because the detection mechanism cannot see them.

---

## 3. THE BEHAVIORAL CHANNEL GAP MAP

### Gap B-01: No Behavioral Planning in TC (BLOCKING)

**Where:** Wave 0, TC Phases 0-3.5
**What's missing:** TC's "Behavioral Properties" table (SKILL.md line 1143) maps spatial rhythm, not interactive behavior. No hover speed, transition character, animation philosophy, or scroll behavior planning exists.
**Impact:** The metaphor's temporal character is never translated to CSS `transition` or `:hover` specifications. Every page gets identical 0.15s ease transitions regardless of metaphor.

### Gap B-02: No Behavioral Category in Mechanism Catalog (BLOCKING)

**Where:** Wave 0.9, handoff gate; Wave 1, mechanism selection
**What's missing:** The mechanism catalog has 5 categories (S/H/C/D/N). The handoff gate checks B:1+ but "B" has no mechanisms defined. The builder cannot select from a category that does not exist.
**Impact:** The B:1+ gate check is either silently skipped or satisfied by misclassified mechanisms (e.g., counting Scroll Witness #8 as "behavioral" when it's cataloged as Structure/Navigation).

### Gap B-03: Phase 6 Is a Checklist, Not a Recipe (SIGNIFICANT)

**Where:** Wave 1, recipe Phase 6
**What's missing:** Phase 6 lists behavioral features to ADD (hover, selection, links) without specifying HOW they connect to the metaphor. No "Can you SEE/FEEL?" self-check for behavioral coherence.
**Impact:** Behavioral elements are generic polish, not compositional choices. A geological page and a botanical page get identical 0.15s ease link transitions.

### Gap B-04: Zero Programmatic Gates for Behavioral Channel (SIGNIFICANT)

**Where:** Wave 2, Layer 1
**What's missing:** No gate checks hover presence, focus ring visibility, transition consistency, reduced motion implementation, or `::selection` styling.
**Impact:** Behavioral channel can ship entirely empty (or entirely inconsistent) without triggering any gate failure.

### Gap B-05: Screenshot-Based PA Cannot Verify Temporal Behavior (STRUCTURAL)

**Where:** Wave 2, Layer 2
**What's missing:** Screenshots are atemporal. Hover states, transitions, animations, focus rings are temporal phenomena invisible to static images.
**Impact:** The most compositionally-rich behavioral decisions (metaphor-aligned transition speeds, hover characters, scroll-linked reveals) are the exact decisions that can never be verified by the PA.

### Gap B-06: No Perception Thresholds for Behavioral Channel (SIGNIFICANT)

**Where:** `perception-thresholds.md` (planned), all verification
**What's missing:** The 6 operational channels include Behavioral, but `perception-thresholds.md` defines thresholds only for Chromatic (>=15 RGB), Typographic (>=2px font-size), Spatial (<=108px stacked gap), and implicitly Structural (borders present/absent). No behavioral threshold exists.
**Impact:** Even if a gate were added, there's no threshold to enforce. What IS a perceivable transition speed difference? What IS a sufficient hover effect?

---

## 4. THE DEEPER PROBLEM: BEHAVIORAL COHERENCE IS COMPOSITIONAL, NOT DECORATIVE

The current pipeline treats behavioral elements as DECORATION — things you add in Phase 6/7 after the real composition (Phases 0-5) is done. But in a truly designed page, behavioral elements are COMPOSITIONAL:

### Example: "Geological Strata" Metaphor

| Element | Generic Behavior (current) | Semantically Coherent Behavior (missing) |
|---------|---------------------------|----------------------------------------|
| Link hover | `color change, 0.15s ease` | `color change, 0.4s ease-in-out` (heavy, geological shift) |
| Table row hover | `background-color, 0.1s ease` | `background-color + border-left thicken, 0.35s ease-in` (sediment settling) |
| Focus ring | `2px teal outline` | `2px earth-tone outline matching zone's border color` |
| `::selection` | `warm cream highlight` | `zone-specific highlight (bedrock = dark, topsoil = light)` |
| Callout hover | `border-left widens 0.15s` | `border-left widens 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (pressure shift) |
| Section transitions | Instant on scroll | `scroll-margin-top: 2rem` (excavation clearance) |

### Example: "Water Flow" Metaphor

| Element | Generic Behavior (current) | Semantically Coherent Behavior (missing) |
|---------|---------------------------|----------------------------------------|
| Link hover | `color change, 0.15s ease` | `color change, 0.08s ease-out` (quick, fluid) |
| Table row hover | `background-color, 0.1s ease` | `background-color ripple, 0.12s ease-out` (surface disturbance) |
| Focus ring | `2px teal outline` | `2px blue outline matching water palette` |
| `::selection` | `warm cream highlight` | `cool blue-tint highlight` |
| Section transitions | Instant on scroll | Smooth scroll-behavior with gentle easing |

**The point:** Behavioral coherence means the page's interactive character matches its visual metaphor. A geological page should feel HEAVY to interact with. A water page should feel FLUID. Currently, both get identical 0.1-0.15s ease transitions because the behavioral channel is unplanned, uncataloged, and unverified.

---

## 5. WHAT CD-006 DID (FOR CONTRAST)

CD-006 scored 39/40 — the crown jewel. From the mechanism catalog cross-references:

- CD-006 had "table of contents with active tracking" (Mechanism #8 Scroll Witness)
- CD-006 had "all 11 components" with distinct visual treatments
- CD-006 had section rhythm throughout

Without access to CD-006's actual CSS, we can observe that its 39/40 score came from a page where behavioral elements were likely integrated during composition (by an Opus instance iterating with a human), not bolted on in Phase 6. The human-Opus iteration loop naturally produces behavioral coherence because the human EXPERIENCES the hover states and transitions while iterating, and provides feedback like "this feels too fast" or "this hover is jarring."

PV2's fire-and-forget model eliminates this iteration loop. The behavioral channel must therefore be planned (Wave 0), cataloged (mechanism catalog), specified (recipe), and verified (gates + PA) — none of which currently happens.

---

## 6. STRUCTURAL RECOMMENDATIONS

### R-B01: Add Behavioral Properties to TC's Isomorphism Table (BLOCKING)

Replace SKILL.md line 1143-1150's spatial-masquerading-as-behavioral with ACTUAL behavioral properties:

```
**D. Behavioral Properties** -- Interactive response, temporal character

| Property              | CSS Mechanism                                                   |
|-----------------------|-----------------------------------------------------------------|
| Hover character       | transition-duration, transition-timing-function on :hover       |
| Focus aesthetic       | outline color/width matching zone palette or metaphor accent    |
| Transition weight     | Slow (0.3-0.5s) = heavy/deliberate; Fast (0.08-0.15s) = light/fluid |
| Selection tone        | ::selection background matching zone or metaphor palette        |
| Scroll behavior       | scroll-behavior, scroll-margin-top, sticky positioning          |
| Animation philosophy  | Still (no animation) vs breathing (subtle) vs active (scroll-linked) |
```

TC should output a "Behavioral Character" specification in the build plan:

```
BEHAVIORAL CHARACTER:
- Transition speed: SLOW (0.3s+) [geological weight]
- Timing function: ease-in-out [deliberate, not snappy]
- Hover philosophy: REVEAL (show hidden depth) not HIGHLIGHT (draw attention)
- Focus palette: earth-tone matching zone borders
- Animation: NONE (geological strata are static; movement would break metaphor)
```

### R-B02: Define Behavioral Mechanisms in Catalog (BLOCKING)

Add at least 3 behavioral mechanisms to the mechanism catalog. Currently, ZERO of the 18 mechanisms are behavioral in the interactive sense. Candidates:

**Mechanism #19: Transition Weight Encoding [BEHAVIORAL]**
```css
/* Heavy metaphors (geological, architectural, institutional) */
.heavy-metaphor * { transition-duration: 0.3s; transition-timing-function: ease-in-out; }

/* Light metaphors (water, wind, organic) */
.light-metaphor * { transition-duration: 0.1s; transition-timing-function: ease-out; }

/* Precise metaphors (mechanical, mathematical, systematic) */
.precise-metaphor * { transition-duration: 0.15s; transition-timing-function: steps(2); }
```

**Mechanism #20: Zone-Matched Focus Rings [BEHAVIORAL]**
```css
/* Focus ring color matches zone's border accent */
.zone--sparse *:focus-visible { outline-color: var(--zone-sparse-accent); }
.zone--dense *:focus-visible { outline-color: var(--zone-dense-accent); }
```

**Mechanism #21: Semantic Hover Progression [BEHAVIORAL]**
```css
/* Hover effect intensifies with content importance */
.element--primary:hover { border-left-width: 5px; transition: border-left-width 0.2s; }
.element--secondary:hover { background-color: var(--hover-bg); transition: background-color 0.15s; }
.element--tertiary:hover { opacity: 0.85; transition: opacity 0.1s; }
```

### R-B03: Add Recipe Phase 6 Sub-Recipe (SIGNIFICANT)

Replace Phase 6's checklist with a RECIPE:

```
PHASE 6: Behavioral Coherence

Step 6.1: Read build plan's BEHAVIORAL CHARACTER specification.
Step 6.2: SET base transition: `* { transition-duration: [plan value]; transition-timing-function: [plan value]; }`
Step 6.3: APPLY hover states to all interactive elements (links, buttons, table rows):
  - Links: color change to var(--color-text)
  - Table rows: background-color shift (use zone's breathing color)
  - Callouts: border-left widens by 1px
Step 6.4: APPLY ::selection styling matching the metaphor's warmest zone color.
Step 6.5: APPLY :focus-visible matching zone border colors (or metaphor accent).
Step 6.6: Self-check: "Do the hover effects FEEL like the metaphor?" (heavy? fluid? precise?)
Step 6.7: If using scroll-linked behavior, implement with IntersectionObserver (not scroll events).
```

### R-B04: Add Behavioral Gates to Gate Runner (SIGNIFICANT)

Add 3 behavioral gates to the programmatic verification:

| Gate | Check | Threshold |
|------|-------|-----------|
| SC-13 | Hover states present | All `<a>` and interactive elements have `:hover` rules |
| SC-14 | Focus visibility | `*:focus-visible` rule exists with visible outline |
| SC-15 | Reduced motion | `@media (prefers-reduced-motion)` rule exists |

These check PRESENCE, not coherence. Coherence requires temporal verification (see R-B05).

### R-B05: Add Behavioral Verification Protocol to PA (SIGNIFICANT)

Since screenshots cannot capture temporal behavior, add a BEHAVIORAL AUDIT STEP between Layer 1 (programmatic gates) and Layer 2 (screenshot PA):

```
LAYER 1.5: BEHAVIORAL AUDIT (automated, ~2 min)

Using Playwright:
1. Navigate to output.html
2. For each interactive element:
   a. Trigger hover via page.hover()
   b. Measure computed transition-duration
   c. Compare to build plan's BEHAVIORAL CHARACTER specification
3. Trigger Tab key presses, verify focus ring visibility
4. Verify ::selection by selecting text, checking computed background
5. Check prefers-reduced-motion by setting media feature, verifying transitions disabled

Output: behavioral-audit.json with per-element hover/focus/transition measurements
```

This is automatable via Playwright (unlike visual gestalt, which requires human perception). Behavioral coherence CAN be programmatically verified because transition speeds, hover states, and focus rings have measurable CSS values.

### R-B06: Define Behavioral Perception Thresholds (RECOMMENDED)

Add to `perception-thresholds.md`:

| Channel | Property | Minimum Perceptible Delta | Maximum Before Jarring |
|---------|----------|--------------------------|----------------------|
| Behavioral | transition-duration | 0.05s (50ms) between element types | 0.5s (anything longer feels broken) |
| Behavioral | hover color shift | >=10 RGB points from resting state | N/A |
| Behavioral | focus outline width | >=2px | 4px (thicker feels like a bug) |
| Behavioral | ::selection contrast | >=30 RGB points from text background | N/A |

---

## 7. SEVERITY ASSESSMENT

| Gap | Severity | Rationale |
|-----|----------|-----------|
| B-01 (No behavioral planning in TC) | BLOCKING | Without planning, behavioral coherence is impossible — it becomes random builder default |
| B-02 (No B category in catalog) | BLOCKING | Gate checks a phantom category; builder has no behavioral mechanisms to select from |
| B-03 (Phase 6 is checklist not recipe) | SIGNIFICANT | Builder adds features without semantic reasoning; fixable with recipe restructuring |
| B-04 (Zero behavioral gates) | SIGNIFICANT | Behavioral channel ships entirely unverified; fixable with 3 new Playwright gates |
| B-05 (PA can't verify temporal) | STRUCTURAL | Inherent limitation of screenshot-based audit; mitigated by Playwright behavioral audit |
| B-06 (No behavioral thresholds) | RECOMMENDED | Without thresholds, even new gates can't enforce meaningful quality |

**Overall behavioral channel status: UNPLANNED, UNCATALOGED, UNVERIFIED.**

The behavioral channel is the WEAKEST of the 6 operational channels. Chromatic has thresholds (>=15 RGB). Typographic has thresholds (>=2px). Spatial has thresholds (<=108px). Structural has binary checks (borders present). Material has implicit checks through background colors. Behavioral has NOTHING.

---

## 8. THE METAPHOR-BEHAVIOR COHERENCE THESIS

**Thesis:** A page where interactive behavior echoes the metaphor's character achieves a higher PA-05 score than a page with identical static appearance but generic 0.15s ease transitions.

**Why this matters:** The jump from 3/4 (COMPOSED) to 4/4 (DESIGNED) — the recipe ceiling that 8/24 cross-reference reports flag as the #1 risk — may partly depend on behavioral coherence. When every hover, every transition, every focus ring says the same thing the typography and spacing say, the page feels INTENTIONAL at a level that static composition alone cannot reach. The reader may not consciously notice that link hovers take 0.4s on a geological page, but they FEEL that something is different, that the page was made with care.

**Counter-argument:** PA-05 is evaluated from screenshots. If behavioral coherence is invisible to the evaluation mechanism, it cannot affect the score. This means behavioral coherence would only matter to ACTUAL USERS, not to the pipeline's quality metrics.

**Resolution:** This is actually an argument FOR behavioral coherence. The pipeline should optimize for user experience, not for PA-05 scores. If behavioral coherence improves user experience without affecting PA-05, that is a free quality improvement, not a wasted effort.

---

## 9. SUMMARY

The behavioral channel is PV2's blind spot. It traverses the entire pipeline without being planned (TC plans spatial rhythm not interactive behavior), cataloged (mechanism catalog has zero behavioral mechanisms), specified (recipe Phase 6 is a checklist not a recipe), verified (no gates, PA uses screenshots), or threshold-bounded (no perception thresholds defined).

The remediation added hover states and transitions that work as ACCESSIBILITY FEATURES but not as COMPOSITIONAL CHOICES. The 0.15s ease transitions are generic polish, not metaphor-aligned design decisions.

Fixing this requires work at 4 pipeline stages:
1. **TC** must plan behavioral character per-metaphor (R-B01)
2. **Catalog** must define behavioral mechanisms (R-B02)
3. **Recipe** must specify behavioral coherence steps (R-B03)
4. **Verification** must add Playwright-based behavioral gates (R-B04, R-B05)

The behavioral channel is the strongest candidate for where the 3/4-to-4/4 gap lives, precisely because it operates below conscious perception but above unconscious experience.
