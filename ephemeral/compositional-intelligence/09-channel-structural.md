# CHANNEL 4: STRUCTURAL — Where Borders, Dividers, Cards, and Layout Grids Lose Semantic Meaning in PV2

**Author:** Structural Channel Tracer (Opus 4.6)
**Date:** 2026-02-19
**Task:** #9 / #42
**Sources:** PV2-PIPELINE-DIAGRAM.md, TC SKILL.md (~1,878 lines), mechanism-catalog.md (1,219 lines), components.css, 14-MASTER-SYNTHESIS.md

---

## EXECUTIVE SUMMARY

The structural channel -- borders, dividers, cards, containers, layout grids, visual hierarchy through physical containment -- is PV2's most paradoxical channel. It is simultaneously the BEST-SPECIFIED channel (4 dedicated mechanisms, 2 recipe phases, 3 programmatic gates) and the channel with the WIDEST gap between specification and semantic meaning. PV2 ensures structural elements EXIST but does not ensure they COMMUNICATE.

**The flagship had ZERO borders.** PV2 fixes this: Phase 4 mandates borders, SC-02 enforces soul constraints, the recipe specifies "4px solid" values. But the remediation's borders were semantically shallow -- borders were PRESENT (pass SC-02) but did not ENCODE section-specific meaning (e.g., "this border is heavier because this section is foundational"). The structural channel went from ABSENT to PRESENT without passing through MEANINGFUL.

**Core finding:** PV2 treats structural elements as INFRASTRUCTURE (they exist to contain content) rather than as a COMMUNICATION CHANNEL (they encode meaning about what they contain). The recipe says "add borders" but never says "these borders must encode the section's semantic role relative to its neighbors."

---

## 1. STRUCTURAL CHANNEL INVENTORY

### What "Structural" Means

The structural channel encompasses every CSS property and HTML pattern that creates PHYSICAL containment, division, or visual hierarchy through spatial boundaries:

| Sub-Channel | CSS Properties | What It Communicates |
|------------|---------------|---------------------|
| **Borders** | border-left, border-top, border-bottom, border-width | Importance weight, category membership, containment depth |
| **Dividers** | hr, border-top (between sections) | Domain change, topic shift, content mode transition |
| **Cards/Containers** | padding, background + border combination, margin isolation | Grouping, semantic enclosure, content independence |
| **Layout Grids** | display: grid, grid-template-columns, gap | Spatial relationship between siblings, hierarchy through span |
| **Visual Hierarchy** | heading levels + border weight + background + spacing combined | What is primary, what is secondary, what is metadata |

### Mechanisms in the Catalog That ARE Structural

From the 18-mechanism catalog, 7 mechanisms directly participate in the structural channel:

| # | Mechanism | Category | Structural Role |
|---|-----------|----------|----------------|
| 1 | Border-Weight Gradient | HIERARCHY | Encodes importance/priority through border thickness (4px/3px/2px/1px) |
| 2 | 2-Zone Component DNA | COMPONENT | Creates internal structural hierarchy (sparse label + dense body) |
| 10 | Border-Left Semantic Signal | COMPONENT | Universal containment marker (4px left border = "this is emphasized") |
| 13 | Dark Header + 3px Border | STRUCTURE/NAV | Page-level structural landmark |
| 14 | Footer Mirror | STRUCTURE/NAV | Page-level structural bookend |
| 15 | Bento Grid | SPATIAL | Layout structure through grid spans |
| 18 | Data Table | STRUCTURE/NAV | Tabular structural hierarchy (3px th / 1px td) |

Additionally, the Transition Grammar (mechanism catalog addendum) directly governs structural transitions:
- Type 1 HARD CUT: 3px primary border between domain changes
- Type 2 SPACING SHIFT: structural change through spacing alone (no border)
- Type 3 CHECKPOINT: structural landmark with borders + background + label

**Total: 7 mechanisms + 3 transition types = 10 structural elements available.**

---

## 2. WAVE-BY-WAVE TRACE

### WAVE 0: TC Planner -- Does TC Plan Structural Hierarchy?

**What TC Plans:**

TC Phases 0-3.5 produce `_build-plan.md` containing:
- Zone count (2-5) -- structural segmentation YES
- Section inventory (which sections in which zones) -- structural assignment YES
- Mechanism deployment per category (S:1+, H:1+, C:1+, D:1+, N:1+) -- structural mechanism selection PARTIALLY
- Background colors per zone -- chromatic, not structural
- Transition plan (>= 3 types: SMOOTH/BRIDGE/BREATHING) -- structural transition names YES, structural semantics NO
- Isomorphism table (metaphor element to CSS form) -- potential structural semantics YES

**What TC Does NOT Plan:**

1. **Per-section border weight rationale.** TC plans "deploy mechanism #1 (border-weight gradient)" but does NOT plan "Section A gets 4px because it is foundational, Section B gets 3px because it is supporting, Section C gets 1px because it is supplementary." The border-weight MECHANISM is selected; the border-weight SEMANTICS are left to the builder.

2. **Container depth hierarchy.** TC plans zones but does NOT plan which zones should have stronger containment (padding + border + background) vs weaker containment (background shift only). A zone with data tables needs different structural containment than a zone with flowing prose. TC treats all zones as equal structural containers.

3. **Grid layout rationale.** The handoff gate checks ">= 2 grid layouts" (binary). TC assigns grid layouts but does NOT plan WHY this section uses 2-column grid (e.g., "comparison demands side-by-side") vs 3-column grid (e.g., "three parallel options"). Grid layout is structural infrastructure, not structural communication.

4. **Divider semantic encoding.** TC's transition plan says "3 transition types" but does NOT say "the transition between Section 2 and Section 3 is a HARD CUT because we shift from conceptual overview to technical deep-dive, which requires strong structural separation." The TYPE is specified; the REASON is not.

**The Gap:** TC operates at the TELESCOPE level -- it sees the content holistically and derives metaphor/zones/mechanisms. But structural hierarchy is a MICROSCOPE concern: which specific border weight goes on which specific section, and WHY. TC plans the structural VOCABULARY (which mechanisms to deploy) but not the structural GRAMMAR (how those mechanisms encode the specific content's semantic hierarchy).

**Severity: HIGH.** The TC planner is the ONLY agent that reads the full content. If TC does not encode structural semantics into the build plan, the builder must independently derive them. But the builder is executing a RECIPE, not deriving a PLAN. Recipe-mode builders follow sequential steps; they do not independently derive why Section 3 deserves a 4px border while Section 7 deserves 1px.

### WAVE 0.5: Metaphor Validation -- Structural Relevance?

The fresh-eyes metaphor validator checks: "Does this metaphor suggest specific CSS forms?" (STRUCTURAL vs ANNOUNCED). This is relevant to the structural channel because a STRUCTURAL metaphor naturally suggests border weights, containment depths, and grid layouts.

Example: "Geological strata" suggests: deeper layers have heavier borders (4px bedrock, 1px topsoil), containers get more constrained with depth, grid spans narrow as you go deeper. The metaphor DRIVES structural decisions.

Example: "Journey through understanding" suggests: nothing about borders, nothing about grid layout, nothing about containment hierarchy. The metaphor is ANNOUNCED and provides zero structural intelligence.

**The Gap:** Wave 0.5 checks whether the metaphor is structural IN GENERAL but does not check whether the metaphor provides structural HIERARCHY specifically. A metaphor could be "structural" (it suggests CSS forms for backgrounds and typography) without being "structurally hierarchical" (it says nothing about which sections are primary vs secondary vs metadata).

**Severity: MODERATE.** Wave 0.5 is a coarse filter. It catches completely announced metaphors but does not distinguish between metaphors that are structurally rich on ALL channels vs metaphors that are structurally rich only on some channels.

### WAVE 0.9: Handoff Gate -- Structural Channel Coherence Check?

The handoff gate checks 5 conditions:

| Gate Check | Structural Relevance |
|-----------|---------------------|
| Zone count 2-5? | YES -- structural segmentation exists |
| BG colors >= 15 RGB delta? | NO -- chromatic, not structural |
| >= 2 grid layouts? | PARTIAL -- structural elements exist, but not that they encode meaning |
| Per-category mechs met (S/T/M/B/R:1+)? | PARTIAL -- structural mechanism SELECTED, not structurally COHERENT |
| >= 3 transition types? | PARTIAL -- transition TYPES specified, but not that they are semantically appropriate |

**What the Handoff Gate Does NOT Check:**

1. **Border weight gradient coherence.** If the build plan says "deploy #1 border-weight gradient," the gate does NOT check that the planned gradient aligns with the content's importance hierarchy. A plan that assigns 4px to the least important section and 1px to the most important would PASS.

2. **Container depth variation.** The gate does not check that different zones have different structural containment levels. A plan with 5 zones all using identical `padding: 32px, border-left: 4px, background: same` would PASS -- structurally monotonous but gate-compliant.

3. **Grid layout purpose.** The gate checks ">= 2 grid layouts" but not whether those grids serve different structural purposes. Two identical 2-column grids would PASS.

4. **Transition-to-content alignment.** The gate checks ">= 3 transition types" but not whether HARD CUT is used at domain changes, SPACING SHIFT at intensity changes, and CHECKPOINT at phase changes. The types could be arbitrarily assigned and still PASS.

**The Gap:** The handoff gate treats the structural channel as a PRESENCE check ("do structural elements appear in the plan?") rather than a COHERENCE check ("do structural elements encode the content's semantic hierarchy?"). This is consistent with how PV2 treats ALL channels at the handoff: it verifies ingredients, not composition.

**Severity: HIGH.** The handoff gate is the LAST opportunity to redirect before committing 90-150 minutes of builder time. If structural coherence is not checked here, it can only be caught post-build by PA auditors -- at a cost of 90+ minutes.

### WAVE 1: Build -- Does the Recipe Specify Structural Reinforcement?

The 9-phase recipe dedicates Phase 4 entirely to structural elements:

**Phase 4: Structural Borders + Dividers + Transitions**

From the PV2 pipeline diagram:
```
Phase 4:
- Border-left on callouts/blockquotes (4px solid)
- Horizontal rules between major sections
- 3+ transition types: SMOOTH (gradient-like bg shift),
  BRIDGE (decorative hr), BREATHING (whitespace pause)
- Callout variants (info, warning, success, neutral)
```

**What Phase 4 Specifies Well:**

1. **Border presence.** "Border-left on callouts/blockquotes (4px solid)" -- specific CSS value, action verb, clear target elements. This is recipe-format at its best: the builder knows EXACTLY what to write.

2. **Transition types.** "3+ transition types" with named categories (SMOOTH/BRIDGE/BREATHING). The builder has a structural taxonomy for transitions.

3. **Callout variants.** "info, warning, success, neutral" -- semantic differentiation through border color. This is structural meaning through a single property (border-left-color).

**What Phase 4 Does NOT Specify:**

1. **Semantic weight assignment.** Phase 4 says "4px solid" for callouts but does NOT say "use 4px for the most important section borders, 3px for secondary, 1px for tertiary." The border-weight gradient mechanism (#1) is available in the catalog but Phase 4 does not instruct the builder to DEPLOY it with semantic reasoning across sections.

2. **Container hierarchy.** Phase 4 adds borders to callouts and horizontal rules between sections. But it does not instruct the builder to create DIFFERENT structural containment for different section types. A data-heavy section needs tighter containment (border + background + padding) than a prose section (background shift alone). Phase 4 treats all sections' structural needs as identical.

3. **Grid as meaning.** Phase 1 (HTML Skeleton) specifies ">= 2 grid layouts" and component library classes. But neither Phase 1 nor Phase 4 instructs the builder to use grid span variation to encode meaning. A 2-column grid where the left column spans 2 rows says "this content is primary." A 3-column equal grid says "these items are peers." Phase 1 creates grids; no phase interprets them.

4. **Divider-as-transition semantic mapping.** Phase 4 says "3+ transition types." But the recipe does not say: "At the boundary between your conceptual overview zone and your technical deep-dive zone, use a HARD CUT (3px primary border) because the content domain changes. At the boundary between two sub-sections within the same zone, use a SPACING SHIFT because the intensity changes but the domain stays." The transition types are available; the mapping to content semantics is absent.

5. **Structural escalation through the page.** Does the page's structural containment change from beginning to end? Does it start open (minimal borders, generous space) and progressively tighten (more borders, tighter grids, more contained components)? Or does it maintain uniform structural containment throughout? Phase 4 does not address structural ARC.

**What the Builder Receives for Structural Intelligence:**

The builder reads 6 files. Tracing structural intelligence through each:

| File | Structural Intelligence Provided |
|------|--------------------------------|
| operational-recipe.md (~650 lines) | Phase 4 instructions: "add borders, add dividers, add transitions." HOW but not WHY. |
| _build-plan.md (from TC) | Zone count, mechanism list, transition types. WHAT but not WHY for this specific content. |
| tokens.css | Border weights (4px/3px/1px), spacing scale. VALUES but no semantic assignment. |
| prohibitions.md | No 2px borders (epidemic), no border-radius. CONSTRAINTS on structural elements. |
| components.css | Callout DNA (4px left border, label/body zones), code blocks (3px border), data tables (3px/1px). TEMPLATES for structural components. |
| mechanism-catalog.md (FULL) | All 7 structural mechanisms with application modes, transfer tests, cross-file frequency. TOOLS + GUIDANCE. |

**The mechanism catalog is the richest source of structural intelligence.** It contains:
- Border-weight gradient with PROGRESSIVE vs DISCRETE application modes
- 2-zone component DNA with label/body structural hierarchy
- Transition grammar with 3 types and selection rules
- Restraint protocol (max 4 mechanisms per viewport)
- Distribution requirement (every page third needs 2+ mechanisms)

**But the recipe does not reference the catalog's structural intelligence.** Phase 4 says "add borders." The catalog says "use border-weight gradient in PROGRESSIVE mode for content with natural stratification, DISCRETE mode for categorical differentiation." The recipe's action verbs do not invoke the catalog's application modes. The builder must independently bridge from "add borders" (recipe) to "assign semantic weight per section using progressive border-weight gradient" (catalog).

**Severity: CRITICAL.** Phase 4 is where structural elements get written into CSS. If the recipe's Phase 4 instructions are structurally generic ("add borders") rather than structurally semantic ("assign border weights that encode your content's importance hierarchy"), the builder will produce structurally present but semantically empty borders. This is exactly what the remediation did: borders were ADDED (pass gates) but did not ENCODE meaning (fail PA-05 at the 4/4 "DESIGNED" level).

### WAVE 2: Verification -- Structural Consistency Checking?

**Programmatic Gates (Layer 1):**

| Gate | Structural Relevance | What It Catches |
|------|---------------------|-----------------|
| SC-01 | Container width 940-960px | Structural containment at page level |
| SC-02 | Soul properties (border-radius: 0, box-shadow: none) | Structural elements comply with identity |
| SC-08 | Component library classes used | Structural components from library deployed |
| SC-10 | Stacked gap <= 108px | Structural spacing between sections not excessive |

**What Gates DO Check:**
- Structural elements EXIST (SC-02: borders with border-radius: 0)
- Structural components are FROM THE LIBRARY (SC-08: library classes used)
- Structural spacing is BOUNDED (SC-10: no structural voids over 108px)
- Page-level structural containment is CORRECT (SC-01: 940-960px)

**What Gates DO NOT Check:**
1. **Border weight VARIATION.** A page with all borders at 4px passes SC-02. A page with a 4px/3px/1px gradient also passes SC-02. Gates cannot distinguish structural monotony from structural hierarchy.

2. **Grid semantic appropriateness.** A page with two identical 2-column grids passes SC-08 (library classes used). Gates cannot distinguish purposeful grid variation from copy-paste grids.

3. **Transition type alignment.** Gates do not verify that HARD CUT transitions occur at domain boundaries and SPACING SHIFT transitions occur at intensity boundaries. Transition grammar compliance is unchecked.

4. **Structural coherence across sections.** Gates check properties PER-ELEMENT (this border is 0px radius, this gap is <= 108px). They do not check CROSS-ELEMENT patterns (border weight decreases from top to bottom, containment tightens in the middle third).

**Perceptual Audit (Layer 2):**

PA auditors see ONLY screenshots. They CAN perceive structural coherence:
- "The borders get heavier toward the bottom -- is that intentional?"
- "All sections have identical visual weight -- it feels monotonous."
- "The grid in Section 3 is different from Section 7 -- one is 2-column, one is 3-column."

But PA auditors are assigned QUESTIONS from the 48-question set, not structural-specific prompts. The PA questions most relevant to structural channel:

- PA-05: "Does this feel DESIGNED?" (structural coherence contributes but is not isolated)
- PA-03: "Is there visible hierarchy?" (requires structural differentiation)
- PA-41 (if assigned): "Are components varied or identical?"

**The Gap:** Programmatic gates verify structural PRESENCE and COMPLIANCE. PA auditors evaluate structural PERCEPTION but only through general questions, not structural-channel-specific questions. No verification layer asks: "Does the border weight gradient encode the content's importance hierarchy?" or "Do structural containers vary by section type?"

**Severity: HIGH.** Verification catches structural ABSENCE (the flagship failure -- zero borders) but cannot catch structural MONOTONY (all borders identical) or structural MISALIGNMENT (heavy borders on unimportant sections).

### WAVE 3: Fix Integration -- Can Fixes Address Structural Issues?

Fix cycles address "top-3 blocking issues" from the PA weaver. If PA auditors flag structural problems:
- "All sections look identical" (structural monotony)
- "The borders don't seem to relate to content importance" (structural misalignment)
- "The page feels like a list of same-weight sections" (structural flatness)

The builder CAN address these by varying border weights, adding/removing borders, changing grid layouts, adjusting container padding. Structural fixes are among the CHEAPEST CSS changes (adding `border-left: 4px` to one section = 1 line).

**The Gap:** Fix cycles assume the builder can DIAGNOSE what structural change is needed from the PA feedback. But the PA weaver says "sections look identical" -- the builder must independently determine that "Section 3 should get 4px because it is the core argument, while Section 7 should get 1px because it is supplementary." This requires content-level understanding that the builder may or may not have absorbed from the build plan.

**Severity: MODERATE.** Structural fixes are cheap to implement but require content understanding to direct correctly. The fix cycle's "top-3 issues" format works well for structural problems because structural changes are discrete (add this border, change that weight) rather than diffuse (change the overall feel).

---

## 3. THE CORE PROBLEM: INFRASTRUCTURE VS COMMUNICATION

The structural channel's journey through PV2 reveals a consistent pattern:

```
TC plans structural PRESENCE     -> "deploy border-weight gradient"
Handoff checks structural EXISTENCE -> ">= 2 grid layouts? YES"
Recipe specifies structural CREATION -> "add 4px borders to callouts"
Gates verify structural COMPLIANCE   -> "border-radius: 0? YES"
PA evaluates structural PERCEPTION   -> "does it feel designed?"
```

At every wave, the structural channel is treated as INFRASTRUCTURE to be DEPLOYED rather than as a LANGUAGE to be SPOKEN. The pipeline ensures you HAVE borders, dividers, cards, and grids. It does not ensure those borders MEAN something about the content they contain.

**The remediation proves this pattern:**

The flagship had ZERO borders (structural ABSENCE). The remediation added borders. The PA-05 score went from 1.5/4 to 2.5/4. But the borders were added AS INFRASTRUCTURE:
- All callouts got 4px left borders (uniform structural weight)
- Horizontal rules were added between major sections (uniform structural dividers)
- Grid layouts were added (structural variety)

What the borders did NOT do:
- Encode which sections were foundational vs supplementary (no weight gradient aligned to content)
- Vary containment depth by section type (data sections vs prose sections treated identically)
- Create structural ARC through the page (no progression from open to contained or vice versa)

**This is why PA-05 reached 2.5/4 (STYLED) but not 3/4 (COMPOSED):** the structural channel was PRESENT but not MEANINGFUL. STYLED means "visual variation exists." COMPOSED means "visual variation serves the content's purpose." The structural channel crossed from ABSENT to PRESENT but stopped before reaching PURPOSEFUL.

---

## 4. WHERE STRUCTURAL INTELLIGENCE BECOMES "MUST HAVE BORDERS"

The compression happens at three points:

### Compression Point 1: TC Skill -- Phase 3.5 Lock-In

The TC skill's mechanism selection (Phase 4 of TC, not Phase 4 of recipe) says:

> "Deploy AT LEAST ONE mechanism from each category to ensure vocabulary breadth."

For the Structure/Navigation category (N), this means: deploy at least one of #8 (scroll witness), #12 (progressive disclosure), #13 (dark header), #14 (footer mirror), or #18 (data table).

**The compression:** "Deploy at least one structural mechanism" becomes "I picked #13 dark header." The TC planner checks the box. The structural channel has ONE mechanism deployed. There is no requirement that the structural mechanism ENCODES something about the content. The per-category minimum ensures BREADTH but not DEPTH.

### Compression Point 2: Recipe Phase 4 -- Generic Instructions

The recipe's Phase 4 says: "Border-left on callouts/blockquotes (4px solid). Horizontal rules between major sections."

**The compression:** The mechanism catalog contains 167 lines on border-weight gradient ALONE, including:
- Progressive mode vs discrete mode
- Application mode table with when-to-use guidance
- Anti-pattern warning (uniform borders on all same-type elements)
- Middle-tier validation evidence

None of this reaches the builder through Phase 4's recipe instructions. The 167 lines compress to "4px solid." The builder might read the full catalog (it is in their 6-file input set), but the recipe does not DIRECT them to the catalog's structural intelligence. The recipe says DO THIS. The catalog says WHY AND HOW. Without explicit bridging, the recipe wins because builders in recipe-mode follow the recipe.

### Compression Point 3: Handoff Gate -- Binary Presence Checks

The handoff gate checks ">= 2 grid layouts" and "per-category minimums met."

**The compression:** The question "does the structural channel reinforce the content's semantic hierarchy?" compresses to "are there 2+ grid layouts? YES/NO." A structurally monotonous plan with 2 identical grids passes. A structurally rich plan with 1 grid that uses 4 different span patterns fails (only 1 grid layout!). The binary check optimizes for COUNTING structural elements, not EVALUATING structural meaning.

---

## 5. WHAT MADE CD-006's STRUCTURAL CHANNEL WORK?

CD-006 scored 39/40. Its structural channel:

**11 distinct components** (vs flagship's ~3). Each component had DIFFERENT structural containment:
- Pull quotes: heavy left border (4px) + background shift + generous padding = HIGH structural weight
- Data tables: 3px header border + 1px row separators = GRADUATED structural weight
- Code blocks: 3px border + dark background = INVERTED structural containment
- Callouts: 4px left border + semantic color = CATEGORICAL structural signaling
- Section dividers: 3px primary border = DOMAIN CHANGE structural signal

**The structural channel was VARIED across components.** Not every component got the same border treatment. Structural elements encoded what they contained: pull quotes (heavy weight = important insight), data tables (graduated weight = header > data), code blocks (inverted containment = different domain), callouts (categorical = semantic type matters).

**CD-006 did not follow a recipe for this.** The Opus builder made structural decisions per-component based on content understanding. This is the compositional fluency that recipes cannot encode -- the builder looked at each component and asked "what structural containment does THIS content need?" rather than "the recipe says add 4px borders."

---

## 6. PROPOSED STRUCTURAL INTELLIGENCE ENFORCEMENT

### A. TC Planner: Per-Section Structural Decision Table

Add to `_build-plan.md` output a STRUCTURAL DECISION TABLE:

```markdown
## Structural Hierarchy

| Section | Content Role | Structural Weight | Border | Container | Grid | Rationale |
|---------|-------------|-------------------|--------|-----------|------|-----------|
| S1: Introduction | Context-setting | LIGHT | none | bg-shift only | single-column | Opening section should feel open, inviting |
| S2: Core Argument | Foundational | HEAVY | 4px left primary | bg + border + padding | 2-col comparison | Central thesis deserves maximum containment |
| S3: Evidence | Supporting | MEDIUM | 3px left text | bg + padding | 3-col equal | Three evidence streams as structural peers |
| S4: Methodology | Technical | MEDIUM | 1px separator | bg only | single-column | Technical detail, contained but not prominent |
| S5: Conclusion | Synthesis | HEAVY | 4px top primary | bg + border | single-column | Hard cut from evidence, strong closure signal |
```

**Why this works:** The TC planner reads the FULL content. It is the only agent that knows WHY Section 2 is foundational and Section 4 is technical. By encoding structural decisions in the build plan, the structural intelligence reaches the builder through the plan, not through the builder's independent derivation.

**Cost:** ~20 additional lines in `_build-plan.md`. Cheap.

**Binary gate addition to Wave 0.9:** "Does the build plan contain a structural decision table with per-section border weight, container type, and rationale?" YES/NO.

### B. Recipe Phase 4: Structural Semantics Sub-Phase

Replace generic Phase 4 instructions with semantically-directed instructions:

```markdown
## Phase 4: Structural Borders + Dividers + Transitions

### Phase 4A: Read the Structural Decision Table
Read the structural hierarchy from _build-plan.md.
Each section has an assigned STRUCTURAL WEIGHT (HEAVY/MEDIUM/LIGHT/NONE).

### Phase 4B: Deploy Border-Weight Gradient
For HEAVY sections: border-left: 4px solid var(--color-text)
For MEDIUM sections: border-left: 3px solid var(--color-text) OR 1px solid var(--color-border)
For LIGHT sections: no border (bg-shift only carries the structural signal)
For NONE sections: no structural containment beyond page-level container

"Can you SEE the difference in structural weight between your heaviest
and lightest sections? If they look the same, the gradient is too subtle."

### Phase 4C: Deploy Transition Grammar
At every section boundary, assign exactly one transition type:
- HARD CUT (3px primary border): content changes DOMAIN
- SPACING SHIFT (padding change only): content changes INTENSITY
- CHECKPOINT (borders + bg + label): content changes PHASE

"Is every section boundary assigned a type? Is the type appropriate
for what changes at that boundary?"

### Phase 4D: Structural Variation Check
Count unique structural treatments across all sections.
- >= 3 distinct structural treatments: PASS (structural variety)
- 2 distinct treatments: WARNING (may feel binary)
- 1 treatment for all sections: FAIL (structural monotony)
```

**Why this works:** The recipe now DIRECTS the builder to read the TC planner's structural decisions, SPECIFIES how to translate structural weight into CSS, includes inline perception checks ("can you SEE the difference"), and adds a binary variation check. The builder is executing structural SEMANTICS, not just structural PRESENCE.

### C. Handoff Gate: Structural Coherence Check

Add to the 5 existing handoff gate checks:

```
[ ] Structural decision table present with per-section weight assignment?
[ ] >= 3 distinct structural weights assigned across sections?
[ ] Every section boundary has assigned transition type?
```

**Why this works:** The handoff gate currently checks structural PRESENCE (>= 2 grids). Adding structural COHERENCE checks (per-section weight, >= 3 weights, transition assignments) ensures the TC planner has done the structural thinking before the builder starts.

### D. Programmatic Gate: SC-13 Structural Variation

Add a new gate that checks structural variation via computed styles:

```
SC-13: Structural variation
  - Measure border-left-width at every <section> element
  - Count distinct values
  - >= 3 distinct border-left-width values across sections: PASS
  - < 3: FAIL (structural monotony)
```

**Why this works:** SC-13 catches the remediation's failure mode: all sections got identical 4px borders. By requiring >= 3 distinct border-left-width values, the gate forces the builder to create structural HIERARCHY, not just structural PRESENCE.

**Caveat:** This gate could be satisfied by arbitrary values (4px, 3px, 1px applied randomly). True semantic alignment requires PA evaluation. But the gate filters out the worst case (all-identical borders) cheaply.

### E. Cascade Value Table: Structural Column

The cascade value table (Phase 8 required deliverable) already records border-left at every section boundary. Adding a structural column:

```
| Boundary | Background | Font-Size | Border-Left | Structural Weight | Transition Type |
|----------|-----------|-----------|-------------|-------------------|-----------------|
| S1 -> S2 | #FEF9F5 -> #F0EBE3 | 18px -> 16px | none -> 4px | LIGHT -> HEAVY | HARD CUT |
| S2 -> S3 | #F0EBE3 -> #FAF5ED | 16px -> 14px | 4px -> 3px | HEAVY -> MEDIUM | SPACING SHIFT |
```

**Why this works:** The cascade value table makes structural decisions VISIBLE and VERIFIABLE. The builder must PROVE that structural weight varies across sections by recording the values. The PA weaver can check whether structural weight aligns with content importance.

---

## 7. STRUCTURAL CHANNEL AND MULTI-COHERENCE

The structural channel is most powerful when it REINFORCES other channels:

**Structural + Chromatic:** Heavier borders on darker backgrounds = maximum containment signal. The structural weight and chromatic depth say "important" in two channels simultaneously.

**Structural + Typographic:** Heavier borders next to larger headings = hierarchy through double encoding. The structural weight and typographic scale both say "primary."

**Structural + Spatial:** Tighter grids in denser sections = compression through structure and space. The structural containment and spatial compression both say "technical/dense."

**PV2's multi-coherence rule requires >= 3 channels shift at every transition.** The structural channel is one of those 3+. But PV2 does not specify WHICH structural property should shift or HOW it should align with the other shifting channels. A structural shift that CONTRADICTS a chromatic shift (lighter border on darker background) would pass the >= 3 channels rule but fail perceptual coherence.

**Recommendation:** The cascade value table should explicitly note whether structural shifts REINFORCE or CONTRADICT other channel shifts at each boundary.

---

## 8. RISK: STRUCTURAL OVER-SPECIFICATION

One risk of adding structural semantics to the pipeline is over-specification. If every section's border weight is pre-determined by the TC planner, the builder loses structural creative freedom. The middle-tier experiment achieved PA-05 4/4 with structural decisions made by the builder, not the planner.

**Mitigation:** The structural decision table should specify WEIGHT (HEAVY/MEDIUM/LIGHT/NONE) but NOT exact CSS values. The builder translates HEAVY into 4px or 3px based on context. This preserves the builder's structural judgment while ensuring the planner's content understanding reaches the builder.

**The principle:** TC specifies WHAT to communicate structurally. The recipe specifies HOW to express it in CSS. The builder executes the HOW guided by the WHAT.

---

## 9. SUMMARY: STRUCTURAL CHANNEL LOSS MAP

```
TC PLANNER
  Plans structural VOCABULARY (which mechanisms)     [YES]
  Plans structural SEMANTICS (why this section)      [NO -- missing]
  Plans structural ARC (progression through page)    [NO -- missing]

HANDOFF GATE
  Checks structural PRESENCE (>= 2 grids)           [YES]
  Checks structural COHERENCE (weight variation)     [NO -- missing]
  Checks structural ALIGNMENT (weight matches content)[NO -- missing]

RECIPE PHASE 4
  Specifies structural CREATION ("add borders")      [YES]
  Specifies structural MEANING ("this border encodes")[NO -- missing]
  Specifies structural VARIATION check               [NO -- missing]

PROGRAMMATIC GATES
  Verify structural COMPLIANCE (border-radius: 0)    [YES]
  Verify structural VARIATION (distinct weights)     [NO -- missing]
  Verify structural HIERARCHY (weight gradient)      [NO -- missing]

PA AUDIT
  Evaluates structural PERCEPTION (does it look designed?) [YES]
  Evaluates structural SEMANTICS (do borders mean things?) [PARTIALLY -- through general questions only]
```

**Total structural intelligence surviving PV2 pipeline: PRESENCE and COMPLIANCE.**
**Structural intelligence lost: SEMANTICS, COHERENCE, ARC, VARIATION, HIERARCHY.**

**The fix is not complex.** It requires:
1. A per-section structural decision table from TC (20 lines in build plan)
2. A semantically-directed Phase 4 in the recipe (30 lines replacing current Phase 4)
3. Two additional handoff gate checks (2 lines)
4. One new programmatic gate SC-13 (20 lines JavaScript)
5. A structural column in the cascade value table (0 new lines, structural weight column added)

**Total cost: ~72 lines of new specification across 4 artifacts.**
**Expected impact: Structural channel goes from PRESENT to MEANINGFUL, enabling the 2.5/4 -> 3.0/4 transition that requires structural elements to SERVE the content, not just EXIST alongside it.**

---

## 10. THEORY: WHY STRUCTURAL IS THE GATEWAY CHANNEL

Of the 6 PV2 channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material), the structural channel has a unique property: **it is the channel most visible to readers who are NOT design-literate.**

- Chromatic: Readers rarely consciously notice background color shifts of 15 RGB points.
- Typographic: Font-size changes of 2px are perceptible but not dramatic.
- Spatial: Spacing compression operates below conscious perception.
- **Structural:** A 4px left border is VISIBLE. A horizontal rule is VISIBLE. A grid layout change is VISIBLE. Borders and dividers are the structural elements that non-designers can point to and say "that section looks different."
- Behavioral: Hover states are only visible on interaction.
- Material: Texture/depth operates subconsciously.

**The structural channel is the highest-leverage channel for the STYLED-to-COMPOSED transition** (PA-05 2/4 to 3/4) because it is the channel that readers can most easily articulate. A page where borders encode meaning FEELS intentionally designed because the reader can SEE the hierarchy. A page where borders are uniform feels "professional but generic."

**This makes the structural channel's current gap in PV2 especially costly.** PV2 has invested heavily in chromatic thresholds (>= 15 RGB), typographic thresholds (>= 2px), and spatial thresholds (<= 108px stacking). But the structural channel -- the channel most visible to non-designers -- has no semantic threshold at all. Just "borders exist: YES/NO."

**Fixing the structural channel may be the single highest-leverage intervention for reaching PA-05 >= 3/4 consistently.**

---

**END OF STRUCTURAL CHANNEL TRACE**
