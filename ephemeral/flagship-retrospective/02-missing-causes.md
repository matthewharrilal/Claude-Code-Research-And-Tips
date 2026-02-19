# 02: Missing Root Causes Analysis

**Analyst:** missing-causes-analyst (Opus 4.6)
**Date:** 2026-02-17
**Sources Read (ALL fully, line-by-line):**
1. `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines)
2. `00-AUDIT-DATA.md` (109 lines)
3. `07-intentionality.html` (2,034 lines)
4. `01-scale5-playbook.md` (705 lines)
5. `08-mc-channel-crossref.md` (512 lines)
6. `09-design-system-crossref.md` (416 lines)
7. `builder-prompt.md` (70 lines)
8. `03-build-plan.md` (349 lines)

---

## KNOWN 8 ROOT CAUSES (for reference)

1. No generative arrow in pipeline
2. 7.9:1 guardrail-to-playbook ratio
3. Builder saw 13.4% of prompt
4. Sub-perceptual variation satisfies rules
5. Zero agent communication
6. Validation checked coverage not causation
7. ABSENCE COHERENCE rule validated under-building
8. 2,400:1 compression of channel research

---

## MISSING CAUSE #9: COMPONENT LIBRARY INVISIBILITY -- Builder Built From Tokens, Not Components

### The Evidence

The design system has a 34-component library (components.css). The flagship HTML uses **ZERO standard callout components** -- not `.callout`, not `.callout--essence`, not `.callout--tip`, not `.callout--gotcha`, not `.code-snippet`, not `.essence-pullquote`, not `.breathing-zone`. Instead, the builder invented 15+ custom class patterns:

| Custom Component | DS Equivalent (Ignored) |
|-----------------|------------------------|
| `.component-block` | `.callout` family (100% frequency across all explorations) |
| `.sequence-block` | `.code-snippet` |
| `.section-meta` | `.section-indicator` |
| `.bridge-prose` | `.breathing-zone` |
| `.master-insight` | `.essence-pullquote` |
| `.zone-s1` through `.zone-s12` | `.section-zone--opening/rising/peak/resolution` |

Overall component utilization: **9%** (3 of 34 components used, all partially).

### Why This Is A Distinct Root Cause

This is NOT the same as cause #2 (guardrail-to-playbook ratio) or cause #3 (builder visibility). The component library is a PLAYBOOK -- it contains ready-to-use CSS classes with semantic meaning, tested interactions, and proven confidence scores. But the prompt never routes the builder TO it.

Look at the builder prompt (70 lines, `builder-prompt.md`). It contains:
- B1 spatial rules (17 rules)
- B2 soul rules (10 rules)
- Key tokens
- Self-check

It does NOT contain:
- Any mention of components.css
- Any mention of `.callout` or `.callout--essence`
- Any reference to the component library whatsoever

The Section E reference library (lines 741-782 of the master prompt) routes builders to read:
- `tokens.css` (vocabulary)
- `prohibitions.md` (identity)
- `00-components-extract.md` (component CSS patterns)
- `00-case-studies-extract.md`

The builder DOES have `00-components-extract.md` in their reading list. But the extract is a compressed reference, not operational instructions. And critically: **no rule in B1-B10 or any gate ever checks whether the builder used components.css classes.** There is no gate for "are you using standard component names?" No B10 self-check item says "verify `.callout` classes are used."

### The Consequence

The builder built 1,034 lines of CSS from first principles using only tokens.css as vocabulary. They created a bespoke component vocabulary (`.component-block.dense`, `.component-block.sparse`, `.component-block.warm`, `.component-block.resolution`) that is functionally similar to the callout family but lacks:
- Semantic color variants from the established palette
- Tested interaction patterns
- Proven confidence scores
- Consistent naming that downstream agents (PA auditors, mechanism builders) can recognize

22 custom hex colors were created outside the token vocabulary. The builder's creative energy went into REINVENTING components rather than COMPOSING with them.

### The Fix

Add a binary gate: "Builder MUST use component class names from components.css. Custom class names require justification." Add component library reference to builder self-check.

---

## MISSING CAUSE #10: BUILD PLAN PROMISING WITHOUT CSS VALUES

### The Evidence

The build plan (`03-build-plan.md`, 349+ lines) is architecturally brilliant. It maps 14 mechanisms to 12 sections, defines 4 compositional clusters, specifies interaction types (REINFORCING, MODULATING, CASCADING, RESPONDING, CONTRASTING), documents deployment ratios, and describes a coherent "Assay Laboratory" chromatic arc.

But look at what the build plan says about zone backgrounds (#7):

```
S1 Introduction | Warm cream | --color-zone-sparse (#FEF9F5) | Raw samples
S5 Components   | Near-white | --color-zone-dense (#FFFFFF)  | Testing stage
```

And what the HTML actually produces:

```
S1: rgb(254,249,245) = #FEF9F5
S5: rgb(254,254,254) = #FEFEFE
```

The RGB difference between these is **5,5,9 points** -- absolutely imperceptible. The build plan describes a "variety to uniformity gradient" using 3 tokens (`--color-zone-sparse`, `--color-zone-dense`, `--color-zone-breathing`) whose actual values differ by 1-8 RGB points.

The build plan CLAIMS:
- "Border-weight gradient: 4px -> 3px -> 1px" (but this only applies to TABLE borders, not sections)
- "Zone backgrounds: WARM -> COOL -> WARM" (but warm=#FEF9F5 and cool=#FEFEFE differ by 5 points)
- "#4 + #7: REINFORCING (tighter spacing = cooler backgrounds)" (but the "cooling" is 5 RGB points)

**The plan specifies TOKENS not VALUES.** It says "use `--color-zone-dense`" without asking "is #FFFFFF vs #FEF9F5 actually a perceptible difference?" The plan validates itself against TOKEN NAMES, not PERCEIVED DIFFERENCES.

### Why This Is A Distinct Root Cause

This is different from cause #4 (sub-perceptual variation satisfies rules). Cause #4 says the rules ALLOW sub-perceptual values. This cause says the BUILD PLAN ITSELF specifies tokens whose values are inherently sub-perceptual, and nobody checks.

The Planner agent (Opus) produced a plan that is architecturally sound but **physically impossible to perceive**. Three zone tokens with a 9-point RGB maximum spread cannot produce a "variety to uniformity gradient" visible to human eyes. The minimum perceptible background difference is approximately 20-30 RGB points (per the mc-channel crossref analysis that recommends #F5F0E8 instead of #FEFEFE).

There is no "perception gate" between the build plan and the skeleton. Gate 0 checks spatial budget (content-to-void >= 60:40) and zone count. It does NOT check: "Are the specified values perceptually distinguishable?" A planner can specify a 12-section chromatic gradient using tokens that are all within 8 RGB points of each other, and Gate 0 passes.

### The Consequence

The builder faithfully executed the plan. The plan said "use `--color-zone-dense`" and the builder used it. The plan said "reinforcing pair: tighter spacing = cooler backgrounds" and the builder made denser sections #FEFEFE instead of #FEF9F5. The COUPLING is present in the CSS. The coupling is INVISIBLE to humans.

The entire compositional architecture -- 4 clusters, 14 mechanisms, 5 interaction types -- collapsed into imperceptibility because the underlying token palette lacks the dynamic range to express the planned variations.

### The Fix

Add a "perception gate" to Gate 0.5: "For every claimed reinforcing pair, compute the difference in CSS values. If any channel's variation is below perception threshold (backgrounds: >= 20 RGB points; spacing: >= 8px; letter-spacing: >= 0.01em; line-height: >= 0.1), FAIL the plan."

---

## MISSING CAUSE #11: SECTION-LEVEL STRUCTURAL CHANNEL (Ch4) COMPLETELY ABSENT

### The Evidence

The audit data is unambiguous:

```
Ch4 Structural (Borders/Dividers/Containment) -- COMPLETELY ABSENT
| Section | borderElements | borders on section | asides/callouts |
| ALL 12  | 0              | 0px everywhere      | 0 asides        |
```

Zero borders on any section container. Zero horizontal dividers WITHIN sections. Zero containment frames. The only borders in the entire page are:
- Left borders on `.component-block` elements (internal to a few sections)
- Left borders on featured/moderate/warning tables
- Top/bottom borders on table headers
- The divider elements BETWEEN sections (`.divider-smooth`, `.divider-bridge`, `.divider-breathing`)

### Why This Is A Distinct Root Cause

This is related to but distinct from cause #2 (guardrail-to-playbook ratio). The guardrail issue says the prompt lacks playbook content. The Ch4 issue is more specific and structural: **the prompt's channel definitions explicitly define Ch4 as "borders/dividers/containment" (SC-02, line 253) but no rule REQUIRES section-level structural elements.**

Look at every B-section rule that could mandate Ch4 at the section level:
- S-rules: All about spacing, void, CPL, container width. ZERO about section borders.
- U-rules: About what NOT to use. ZERO about what structural elements to add.
- C-rules: About mechanisms, transitions, restraint, intentionality. C-05 requires transition types but these are BETWEEN sections, not AT sections.
- MC-rules: About coupling, reinforcing, modulating. But coupling requires CHANNELS to couple. If Ch4 is absent, it can't participate in any coupling.
- SC-09: Requires 3 channels shift per transition. But "structural" is just one of 6 channels. You can pass SC-09 with chromatic+spatial+density and never touch structural.

The prompt defines 7 channels, requires 5 of 7 active (SC-02), but never specifies WHICH 5. A builder can satisfy SC-02 with Ch1+Ch2+Ch3+Ch5+Ch7 and leave Ch4+Ch6 completely absent. This is exactly what happened.

### The Consequence

Without section-level borders or containment, zones are distinguished ONLY by background color (Ch1, at 1-8 RGB points) and spacing (Ch3). The structural channel -- which DD-006 and CD-006 use extensively for zone framing, containment hierarchy, and semantic signaling -- is entirely absent from the flagship.

The "Assay Laboratory" metaphor describes zone boundaries as transitions between stages. But the ONLY way zone boundaries are expressed is through sub-perceptual background color shifts. CD-006 used borders that physically mark where one zone ends and another begins. The flagship relies on the human eye to detect a 5-point RGB shift.

### The Fix

Add SC-11: "Ch4 (Structural) MUST include >= 2 section-level containment elements (border-left on zone containers, horizontal dividers within sections, or border-top/bottom on zone boundaries). Inter-section dividers (`.divider-*`) do not count toward this requirement."

---

## MISSING CAUSE #12: SINGLE-COLUMN MONOTONY -- No Layout Variation

### The Evidence

The entire 2,034-line HTML output is a single column. Every section follows the same pattern:

```html
<section class="zone-sN" style="padding-top: X; padding-bottom: Y;">
  <div class="page-container">
    <div class="section-meta">...</div>
    <h2>...</h2>
    <p>...</p>
    <p>...</p>
    [optional: table or component-block]
  </div>
</section>
```

There is no multi-column layout, no bento grid, no sidebar, no asymmetric arrangement, no float-based layout variation, no flex container with side-by-side elements. Every piece of content is stacked vertically within a 960px container.

The build plan (line 60) explicitly REJECTED bento grid (#15): "content doesn't support 4+ items of comparable weight." This is a legitimate rejection for bento grid specifically. But the plan also rejected ALL forms of horizontal layout variation. The page content includes:

1. **Tables with 2-4 columns** -- these provide some horizontal structure
2. **Tension/resolution pairs** (S7) -- these COULD have been side-by-side (tension left, resolution right) but are stacked vertically
3. **Component sequences** (S8) -- 4 dark blocks that COULD have been arranged in a 2x2 grid
4. **Hypothesis tables** (S11) -- 3 tables that COULD have shared horizontal space

### Why This Is A Distinct Root Cause

The prompt's reading pattern is entirely F-pattern. The build plan assigns "F-Pattern" as the axis pattern for 10 of 12 sections. Only S5 gets "Dense Grid" and S2 gets "Focal."

But look at what the research synthesis content itself describes:
- Z-pattern for hero sections
- F-pattern for text-heavy content
- Bento grid for visual catalogs
- Pulse rhythms for tutorials

The page TEACHES about layout variety while using exclusively single-column F-pattern layout. This is an irony the self-reference mechanism (D1) could have exploited -- but more importantly, it means the page has ZERO horizontal visual variety.

The prompt has no rule requiring horizontal layout variation. No rule says "at least one section must use multi-column layout." The mechanism catalog includes #15 (bento grid) but has no mechanism for simpler horizontal arrangements (side-by-side cards, 2-column comparison, floating elements).

### The Consequence

Visual monotony. Every viewport shows the same thing: a heading, some paragraphs, maybe a table, all stacked vertically in a single column. The sections differentiate through subtle vertical spacing differences and invisible background color shifts. But the SHAPE of every section is identical.

CD-006 achieves 39/40 partly through layout variety -- different sections have different internal structures. The flagship has uniform internal structure throughout.

### The Fix

Add C-22: "At least 1 section MUST use a non-F-pattern internal layout (side-by-side elements, 2-column arrangement, or asymmetric positioning). Single-column stacking for ALL sections = FAIL."

---

## MISSING CAUSE #13: CONTENT TRANSFORMATION PRODUCED UNIFORM PROSE REGISTER

### The Evidence

CT-01 through CT-08 in B11 focus on content TRANSFORMATION -- rewriting research prose into showcase prose. But they specify tone ("Warm. Authoritative. Unhurried.") and format (word counts, heading styles, no hedging) without specifying **content variety within the page.**

Read the adapted content across the 12 sections of `07-intentionality.html`:

- S1: 4 paragraphs of expository prose
- S3: 2 paragraphs + 1 table + 1 component-block
- S4: 3 paragraphs + 1 table + 1 paragraph
- S5: 3 paragraphs + 1 table + 1 component-block
- S6: 3 paragraphs
- S7: 3 tension/resolution pairs (structurally varied but same prose register)
- S8: 2 paragraphs + 1 table + 4 dark blocks + 1 paragraph
- S9: 1 paragraph + 1 table
- S10: 1 paragraph + 1 table
- S11: 1 paragraph + 3 tables (with intro text)
- S12: 4 paragraphs + 1 component-block

The PROSE REGISTER is uniform across all 12 sections: third-person declarative, medium-length sentences, moderate vocabulary, zero variation in rhetorical mode. There are no:
- Direct address shifts ("Consider this" vs "Research shows")
- Rhetorical questions
- Lists or enumerated items (outside tables)
- Short punchy statements interspersed with longer analysis
- Tone shifts (meditative vs analytical vs instructional)

### Why This Is A Distinct Root Cause

Visual variety requires CONTENT variety. A section with a list looks different from a section with paragraphs. A section with a short imperative statement looks different from a section with analytical prose. A section with a question-and-answer structure looks different from expository flow.

CT-02 specifies "Warm. Authoritative. Unhurried." as the tone. This is correct as an AVERAGE tone. But it becomes monotonous when applied uniformly to 2,850 words across 12 sections. CD-006 varies its rhetorical register: some sections are instructional, some are reflective, some are analytical. The flagship maintains a single register throughout.

The Content Architect (Opus) in Pass 0 adapted all content into the same prose mode. No rule asked them to vary the content FORM -- only the content SUBSTANCE.

### The Consequence

When every section contains the same type of content (expository paragraphs + optional table), every section demands the same CSS treatment. The builder has no CONTENT-DRIVEN reason to vary the layout. The density arc (sparse -> dense -> release) exists in the spacing, but the content itself doesn't demand different structural expressions.

If S9 had been a numbered list instead of a table, it would have looked fundamentally different. If S7 had used a side-by-side comparison layout, it would have broken the monotony. If S12 had been a short, punchy 3-sentence closing instead of 4 full paragraphs, the contrast with S11 would have been dramatic.

### The Fix

Add CT-09: "Adapted content MUST use >= 3 distinct rhetorical forms across all sections: expository paragraphs, lists/enumerations, questions, short declarative statements, dialogic address. Uniform prose register = FAIL."

---

## MISSING CAUSE #14: TRANSITION DIVIDERS CARRY NO SEMANTIC WEIGHT

### The Evidence

The prompt defines 3 transition types (C-05):
- SMOOTH: 48px + 1px border
- BRIDGE: 64px + background shift + cognitive reframe prose
- BREATHING: 80px + 3px border

The HTML implements these as simple `<div>` elements with a colored height and margin:

```css
.divider-smooth { height: 1px; background: var(--color-border-subtle); margin: 48px 0; }
.divider-bridge { height: 1px; background: var(--color-border); margin: 64px 0; }
.divider-breathing { height: 3px; background: var(--color-border); margin: 80px 0; }
```

These dividers are visually indistinguishable at normal reading speed. A 1px line with 48px margin vs a 1px line with 64px margin vs a 3px line with 80px margin -- the differences are subtle. The reader scrolling through the page perceives ALL transitions as "some space between sections."

### Why This Is A Distinct Root Cause

The prompt invests 6 rules in transitions (C-05, C-06, C-07, C-17, plus parts of SC-09 and MC-08). The transitions are a major compositional investment. But their CSS implementation reduces them to spacing variations:

- SMOOTH vs BRIDGE: 16px padding difference + imperceptible border color difference (border-subtle vs border). No structural distinction.
- BRIDGE vs BREATHING: 16px padding difference + 2px border height difference. BRIDGE has reframe prose, which IS perceptible. BREATHING has a thicker line.

The transition system is a TYPOGRAPHY/CONTENT system (bridge prose is the meaningful differentiator) implemented as a SPACING system (margins are the primary CSS signal). The result: the spacing contributes to void (6 gaps > 200px between sections, per audit data), and the transitions are not semantically distinct.

### The Consequence

The 243px-276px gaps between sections (audit data, lines 13-18) are TRANSITION ARTIFACTS. Each gap is composed of section bottom padding (32-80px) + transition margin (48-80px) + next section top padding (32-80px). These stack to produce the "completely blank cream" voids at scroll positions 4000px, 5000px, 6000px.

The prompt's S-09 rule says "max spacing between any two elements: 96px per-property." But transitions create COMPOUND gaps: section-bottom-padding + divider-margin-top + divider-height + divider-margin-bottom + section-top-padding. Each individual value is <= 96px, but the SUM exceeds 200px.

### The Fix

S-09 should be amended: "Total visual gap between adjacent content elements (sum of all intervening margins, paddings, and divider heights) <= 128px." Or: transitions should be INTEGRATED INTO sections rather than existing as standalone spacing elements between them. The bridge prose approach is correct (it fills the transition with content); the smooth/breathing approaches add void.

---

## MISSING CAUSE #15: NO PERCEPTUAL FIDELITY GATE BETWEEN PLAN AND BUILD

### The Evidence

The gate sequence (C3) includes:
- Gate 0: Spatial budget
- Gate 0.5: Content quality
- Gate 1: Spatial confidence (post-skeleton)
- Gate 2: Landmarks
- Gate 3: Composition (post-mechanisms)
- Gate 4: Metaphor coherence
- Gate 5: Ship-ready (Mode 4 PA)

None of these gates ask: **"Does the built artifact match the plan?"**

The build plan specifies:
- 14 mechanisms with specific deployment locations
- 4 compositional clusters with named trajectories
- Specific interaction types (REINFORCING, MODULATING, etc.)
- A chromatic arc (WARM -> COOL -> WARM)
- Table treatment progression (compact -> featured -> moderate -> warning -> light -> findings)

Gate 3 checks C-01 through C-04 (per-category minimums, target count, density ceiling, section coverage) and MC self-check (CCS >= 0.30, >= 3 reinforcing). But Gate 3 does NOT check: "Are the 14 mechanisms specified in the build plan actually deployed? Are the 4 clusters operating as described? Does the chromatic arc match the plan?"

The result: the build plan describes a sophisticated 6-channel metaphor system. The HTML implements a simpler version where most channels operate at sub-perceptual intensity. No gate catches the gap between PLANNED and BUILT.

### Why This Is A Distinct Root Cause

This is different from cause #6 (validation checked coverage not causation). Cause #6 is about PA audit methodology -- it checked whether mechanisms were DEPLOYED, not whether they CAUSED perceptual effects. This cause is about the process architecture: there is no plan-fidelity gate anywhere in the pipeline.

In construction, there are inspections at each stage that compare the built structure against the blueprints. The flagship pipeline has inspections (gates) but they check RULES, not PLANS. A gate can pass while the built artifact diverges significantly from the plan, because the gate checks binary thresholds, not plan fidelity.

### The Consequence

The Planner (Opus) produced a 349-line build plan with specific CSS values for each mechanism. The builder built something that satisfies the rules but doesn't match the plan's specificity. The CCS claim in the plan ("spacing co-varies with zone backgrounds and border-weight") is architecturally correct but physically imperceptible in the built HTML. No gate catches this.

### The Fix

Add Gate 2.5 (post-skeleton, pre-mechanism): "Team-lead compares skeleton against build plan. Every section in the plan must exist in the skeleton with approximately matching spatial budget. Every mechanism cluster's primary property must be present. Plan-to-build divergence > 20% on any spatial dimension = FIX CYCLE."

---

## SUMMARY TABLE: ALL 15 ROOT CAUSES

| # | Cause | Type | Status |
|---|-------|------|--------|
| 1 | No generative arrow in pipeline | Process | KNOWN |
| 2 | 7.9:1 guardrail-to-playbook ratio | Prompt architecture | KNOWN |
| 3 | Builder saw 13.4% of prompt | Information routing | KNOWN |
| 4 | Sub-perceptual variation satisfies rules | Rule design | KNOWN |
| 5 | Zero agent communication | Team topology | KNOWN |
| 6 | Validation checked coverage not causation | Audit methodology | KNOWN |
| 7 | ABSENCE COHERENCE validated under-building | Rule perversity | KNOWN |
| 8 | 2,400:1 compression of channel research | Information loss | KNOWN |
| **9** | **Component library invisible to builder** | **Resource routing** | **NEW** |
| **10** | **Build plan specifies tokens not perceptible values** | **Plan quality** | **NEW** |
| **11** | **Ch4 structural absent at section level, no rule requires it** | **Rule gap** | **NEW** |
| **12** | **Single-column monotony, no layout variation** | **Content-form gap** | **NEW** |
| **13** | **Uniform prose register across all sections** | **Content adaptation** | **NEW** |
| **14** | **Transition dividers compound into void** | **Spatial math** | **NEW** |
| **15** | **No plan-fidelity gate between plan and build** | **Process gap** | **NEW** |

### Cross-Cause Interactions

Several new causes INTERACT with known causes in non-obvious ways:

- **#10 x #4:** The plan specifies tokens whose values are sub-perceptual (#10), AND the rules allow sub-perceptual values (#4). Double failure: the plan doesn't catch the problem, and the gates don't either.
- **#9 x #3:** The builder doesn't see the component library (#9), AND the builder only sees 13.4% of the prompt (#3). Both are visibility problems but in different dimensions (resources vs rules).
- **#11 x #2:** Ch4 is absent because no guardrail requires it (#11), AND guardrails outnumber playbooks 7.9:1 (#2). Even if a guardrail existed, it would need a playbook showing HOW to add section-level structure.
- **#14 x #4:** Transitions produce compound void (#14) because each INDIVIDUAL value passes S-09 (#4). The rule checks per-property, not total visual gap.
- **#12 x #13:** Single-column monotony (#12) is reinforced by uniform prose register (#13). If the content had varied forms (lists, Q&A, comparisons), the builder would have been forced into different layouts.
- **#15 x #10:** No plan-fidelity gate (#15) means nobody catches that the plan's chromatic arc uses imperceptible token values (#10).

---

**END MISSING CAUSES ANALYSIS**

**New causes identified:** 7 (targets were >= 3)
**Total root causes identified:** 15
**Cross-cause interactions documented:** 6
