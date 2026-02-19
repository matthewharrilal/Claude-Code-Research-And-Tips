# SCALE 4: Component Scale Trace Report

**Agent:** Component Scale Tracer (Task #4)
**Date:** 2026-02-19
**Files Read:** PV2-PIPELINE-DIAGRAM.md, SKILL.md (Phases 0-4.7B), mechanism-catalog.md, components.css, component-inventory.md
**Assignment:** Trace where component-level pattern expression gets lost in PV2. Determine whether and how per-component metaphor expression is enforced.

---

## 1. THE CORE QUESTION

The recipe says "adopt >= 10/26 components." But does it say HOW each component expresses the pattern? A callout in "geological strata" should look different from a callout in "river delta." Where does component-level pattern expression get lost? What structured approach would enforce per-component metaphor expression?

---

## 2. WHAT CURRENTLY EXISTS AT COMPONENT SCALE

### 2.1 The Component Library (components.css)

34 components extracted from 27 HTML files during Phase C. The extraction was done with an Identity + Enablement hybrid lens, which means:

- Metaphor vocabulary was **stripped** ("Conflict resolution: metaphor vocabulary stripped, functional descriptions only" -- components.css header)
- Components are parameterized via CSS custom properties (e.g., `--callout-border-color`, `--callout-bg-color`, `--accent-color`)
- All components enforce soul constraints (border-radius: 0, box-shadow: none)

The 10 Universal components (present in 100% or near-100% of files):

1. Callout Family (27/27 files, 6 semantic color variants)
2. Code Blocks (25/27 files, dark theme + syntax highlighting)
3. Page Header (27/27 files, mono ID + serif title + sans hypothesis)
4. Page Footer (18/27 files, 3px top border + provenance)
5. Tables (19/27 files, 3px header border + 1px row borders)
6. Skip Link (27/27, accessibility)
7. Focus-Visible (27/27, accessibility)
8. Selection Styling (22/27, identity red)
9. Stats Bar / Metadata Grid (17/27, two layout patterns)
10. Blockquote (frequency not listed in first 200 lines but present in CSS)

### 2.2 The Mechanism Catalog (mechanism-catalog.md)

18 mechanisms organized into 5 property families (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). Four mechanisms explicitly operate AT the component scale:

- **#2 Two-Zone Component DNA** [COMPONENT]: sparse label + dense body + 4px left border
- **#9 Confidence/Priority Encoding via Color** [COMPONENT]: semantic differentiation via border-left color
- **#10 Border-Left Semantic Signaling** [COMPONENT]: 4px left border as universal callout marker
- **#17 Code Block** [COMPONENT]: dark background + syntax highlighting

### 2.3 The TC Skill's Component-Scale Instructions

The TC skill addresses components at two points:

**Phase 4.4 (Component Inventory)** introduces a Tier 2/Tier 3 classification:
- Tier 2 = extractable, metaphor-independent (callouts, code blocks, tables)
- Tier 3 = compositional, metaphor-dependent (layer indicators, depth transitions)

**Phase 4.5 (Adapt-vs-Invent)** gives three sequential checks:
1. Can an existing Tier 2 component be ADAPTED? If yes, don't invent.
2. Can the property be expressed through LAYOUT alone? If yes, don't invent.
3. Is the property NECESSARY for the reader to perceive the metaphor? If not, let it be implicit.

**Phase 4.7 (Fractal Consistency GATE)** requires pattern expression at the Component scale:

```
| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Component | [How content within component reflects pattern] | [Specific CSS] |
```

---

## 3. WHERE COMPONENT-LEVEL PATTERN EXPRESSION GETS LOST

### Loss Point 1: The Parameterization Gap

**The problem:** Components are parameterized for COLOR (--accent-color, --callout-border-color) but NOT for STRUCTURAL EXPRESSION. A callout's internal structure is fixed: sparse label zone (uppercase, 0.75rem, mono) + dense body zone (1rem, sans, 1.7 line-height) + 4px left border. There is no CSS custom property for:

- Internal padding rhythm (how tight/loose the label-to-body relationship is)
- Body typography treatment (always sans, always 1rem, always 1.7)
- Label presentation (always uppercase, always 0.1em letter-spacing)
- Border weight (always 4px, fixed by mechanism #10)

**What this means in practice:** A callout in "geological strata" and a callout in "river delta" will look IDENTICAL except for border color. The 2-zone DNA is frozen. The metaphor can only express through the one parameterized channel (color) out of six available channels (background, border, typography, spacing, layout, accent).

**Evidence from the mechanism catalog itself:** Mechanism #2 (2-Zone Component DNA) documents that the reusable boundary is "Zone 1 (label): sparse, meta-level, uppercase, 12px" and "Zone 2 (body): dense, content-level, normal case, 16px." But it then says "NOT reusable: Label text." This means only the TEXT changes, not the visual structure.

Yet the same catalog, under mechanism #1 (Border-Weight Gradient), shows TWO application modes:
- PROGRESSIVE MODE: 4px -> 3px -> 2px -> 1px encoding continuous levels
- DISCRETE MODE: 4px, 3px, 1px as distinct categories

This proves the catalog CAN encode multiple modes per mechanism. But this multi-mode thinking is NEVER applied to component-internal structure.

### Loss Point 2: The Recipe's Component Instructions

PV2's 9-phase recipe addresses components at Phase 1 (HTML Skeleton):

> "Semantic markup. Component library classes (>=10/26). Grid layouts (>=2). ARIA landmarks (>=3)."

And Phase 6 (Element-Level Richness):

> "Hover states on interactive elements. Selection styling. Link underline treatments. Table striping. List marker styling. Code block backgrounds. Pull-quote/blockquote visual distinction."

**What's missing:** Neither phase says "adapt component internals to express the metaphor/pattern." Phase 1 says USE library classes. Phase 6 says ADD element-level treatments. Neither says TRANSFORM the component's internal structure to echo the page-level composition.

The recipe treats components as fixed building blocks to be placed, not as vehicles for pattern propagation. A builder following the recipe perfectly will:

1. Apply `.callout--tip` class (Phase 1)
2. Add hover state to interactive callout elements (Phase 6)
3. Never modify the callout's internal padding, typography, or structural proportions

### Loss Point 3: The Fractal Gate's Component Row is Underspecified

Phase 4.7's fractal gate requires filling in a Component scale row:

```
| Component | [How content within component reflects pattern] | [Specific CSS] |
```

But the gate only checks that the row is FILLED, not that the pattern expression is STRUCTURAL vs COSMETIC. The middle-tier example given is:

> "Component scale: Callouts have sparse 12px label zone, dense 16px body zone."

This is the DEFAULT callout structure. It describes what ALL callouts look like, not how THIS callout echoes THIS pattern. A builder can fill the fractal table by describing the stock component and claiming it matches the pattern because labels are naturally sparse and bodies are naturally dense. This is true for EVERY callout on EVERY page -- it carries zero pattern-specific information.

**The concrete failure:** The fractal gate should detect the difference between:

- **COSMETIC fractal claim:** "Callouts have sparse labels and dense bodies" (true of ALL callouts by default)
- **STRUCTURAL fractal expression:** "Callouts in the CRESCENDO pattern have padding that INCREASES from first callout (16px) to last (32px), echoing the page-level sparse-to-dense progression"

The current gate cannot distinguish these.

### Loss Point 4: The Adapt-vs-Invent Decision Discourages Adaptation

Phase 4.5 asks: "Can an existing Tier 2 component be ADAPTED?" If YES, "DO NOT invent."

But it never specifies WHAT adaptation means or HOW MUCH adaptation is permitted. The instruction discourages invention (good -- prevents component sprawl) but provides no guidance on adaptation (bad -- components stay stock).

The three checks in Phase 4.5 are all reasons NOT to create new components. None are reasons TO adapt existing ones. The bias is conservative: use what exists, don't modify.

### Loss Point 5: The "adopt >= 10/26" Rule is Quantity Without Quality

The PV2 handoff gate (Wave 0.9) checks:

> "[ ] >= 2 grid layouts?"

And the recipe (Phase 1) says:

> "Component library classes (>=10/26)"

But there is no check for HOW those 10+ components are styled. The binary gate verifies adoption count, not adaptation depth. A builder who applies 15 stock component classes with zero modification passes the gate identically to a builder who adapts 10 components with metaphor-driven internal variation.

### Loss Point 6: The Builder Receives No Component-Adaptation Playbook

The builder's 6 input files in PV2 are:

1. operational-recipe.md (~650 lines) -- phases, not per-component
2. _build-plan.md -- zones, mechanisms, metaphor -- page-level
3. tokens.css -- raw values
4. prohibitions.md -- what NOT to do
5. components.css -- fixed component definitions
6. mechanism-catalog.md -- 18 mechanisms at page/section/element level

None of these files contain instructions like: "For each component type you adopt, document how its internal structure echoes the page-level pattern." The mechanism catalog has Component-category mechanisms (#2, #9, #10, #17), but their descriptions are about CHOOSING components, not ADAPTING them.

---

## 4. THE STRUCTURAL DIAGNOSIS

Component-scale pattern expression is lost because the pipeline treats components as **atomic** (indivisible units to be placed) rather than **molecular** (structures with internal composition that can be tuned).

This is the same error at a different scale as the "sample 2-4 mechanisms" problem. At page scale, "sample 2-4" compressed all mechanism intelligence. At component scale, "adopt >= 10/26" compresses all component-adaptation intelligence. Both reduce a rich decision to a count.

**The compression pathway:**

```
Research finding: CD-006 adapted callout internal padding per zone context (39/40 score)
         |
         | Phase C extraction: stripped metaphor vocabulary, kept "functional descriptions"
         v
Mechanism catalog: "2-Zone Component DNA" = sparse label + dense body + 4px border
         |
         | TC Skill: "Can existing component be ADAPTED? If yes, don't invent"
         v
Recipe Phase 1: "Component library classes (>=10/26)"
         |
         | Handoff gate: binary count check
         v
Builder action: Apply stock .callout--tip class, move on
```

At each compression step, the ADAPTATION intelligence is lost and only the ADOPTION count survives.

---

## 5. WHAT CD-006 ACTUALLY DID (THE MISSING REFERENCE)

CD-006 scored 39/40 and used 11 components. But it didn't just ADOPT them -- it ADAPTED them to the page context. Evidence from the mechanism catalog's cross-file references:

- CD-006 used "all 6 callout variants" (mechanism #9) -- but the VARIANTS were semantically differentiated for that specific content's needs
- CD-006 used "all 11 components, 5 grids, 3 breakpoints" -- component density was deployed at varying grid positions, not uniform placement
- CD-006 demonstrated "crown jewel divergence" with drop cap (#16) -- a component-level editorial signal that serves the specific composition

What CD-006 did that the recipe doesn't encode: it treated components as **expressions of a compositional intent** rather than **instances of a class**.

---

## 6. WHAT A STRUCTURED APPROACH WOULD LOOK LIKE

### 6.1 Per-Component Metaphor Expression Table (Proposed Gate)

For each component type adopted, the builder must fill in this table:

```
| Component | Stock CSS | Adapted CSS | Adaptation Rationale |
|-----------|-----------|-------------|---------------------|
| .callout | padding: 24px 20px | padding: 16px 20px (early page) / 32px 20px (late page) | CRESCENDO: callouts compress as content builds density |
| .callout__label | font-size: 10px | font-size: 10px (early) / 12px (late) | Label weight increases with page-level importance |
| table | 3px header border | 3px header (reference tables) / 1px header (inline tables) | Border-weight encodes table's semantic role, not all tables equal |
| pre | padding: 24px 32px | padding: 16px 24px (in dense zones) / 32px 40px (in sparse zones) | Code block breathing mirrors zone density |
```

**What this table enforces:**
- The builder must THINK about each component in relation to the pattern
- The adaptation must be RATIONALE-linked (not arbitrary)
- Stock CSS is documented alongside adapted CSS (making deviation explicit)
- Different instances of the SAME component type can have different adaptations based on page position

### 6.2 Component-Mode Taxonomy (Proposed Extension to Mechanism Catalog)

Just as mechanism #1 (Border-Weight Gradient) has PROGRESSIVE and DISCRETE modes, each component-scale mechanism should document application modes:

**Mechanism #2 (2-Zone Component DNA) -- Proposed Modes:**

| Mode | When To Use | Internal Proportions | Example |
|------|-------------|---------------------|---------|
| **STANDARD** | Default deployment, no metaphor-driven adaptation needed | 12px label / 16px body / 24px padding | Stock callout |
| **COMPRESSED** | Inside dense zones, geological bedrock, CRESCENDO peak | 10px label / 14px body / 16px padding | Tight callout in technical section |
| **EXPANDED** | Inside sparse zones, opening sections, breathing moments | 14px label / 18px body / 32px padding | Generous callout in introduction |
| **INVERTED** | Discovery content, progressive disclosure, question-before-answer | Body zone FIRST, label zone LAST (label becomes footer) | Callout where conclusion comes first |

**Mechanism #17 (Code Block) -- Proposed Modes:**

| Mode | When To Use | Internal Proportions | Example |
|------|-------------|---------------------|---------|
| **FEATURED** | Code IS the content (tutorial), focal point | 32px padding, 3px border, full syntax highlighting | Primary code example |
| **INLINE** | Code supports prose, secondary reference | 16px padding, 1px border, minimal highlighting | Supporting snippet |
| **SPECIMEN** | Code as exhibit, geological/archival metaphor | 24px padding, dark zone nesting, mono label above | Code treated as artifact |

### 6.3 Fractal Gate Enhancement (Component Row Validation)

The fractal gate's Component row currently accepts any description. Proposed binary validation:

**Current gate:** "Fill in the Component row."

**Proposed gate:** "Fill in the Component row. The description MUST reference a property that DIFFERS from the stock component definition. If the description matches the stock component (e.g., 'sparse label + dense body'), it FAILS -- describe what is DIFFERENT about YOUR component in THIS composition."

This is a single binary check that transforms the fractal gate from "describe what components look like" to "describe how YOU adapted the components."

### 6.4 Recipe Phase 1 Enhancement

**Current Phase 1:** "Semantic markup. Component library classes (>=10/26). Grid layouts (>=2). ARIA landmarks (>=3)."

**Proposed Phase 1:** "Semantic markup. Component library classes (>=10/26). For each adopted component class, document ONE adaptation from the Component-Mode table based on _build-plan.md zone context. Grid layouts (>=2). ARIA landmarks (>=3)."

This adds approximately 10 lines to the builder's Phase 1 work (one sentence per component) but creates the documentation that Phase 4.7's fractal gate can then validate.

### 6.5 Recipe Phase 6 Enhancement

**Current Phase 6:** "Hover states on interactive elements. Selection styling. Link underline treatments. Table striping. List marker styling. Code block backgrounds. Pull-quote/blockquote visual distinction."

**Proposed Phase 6:** "Element-level richness. For EACH component type present 3+ times on the page, verify at least 2 instances have DIFFERENT internal proportions (padding, label-size, body-size) based on zone context. Hover states on interactive elements. Selection styling. Link underline treatments. Table striping. List marker styling. Code block backgrounds."

This introduces a binary check: components appearing multiple times must show variation. It prevents the "identical callouts everywhere" failure without requiring every component to be unique.

---

## 7. THE META-PROBLEM: COMPONENTS AS FROZEN DNA

The deepest issue is philosophical, not procedural. The Phase C extraction deliberately stripped metaphor vocabulary to create transferable components. This was the RIGHT decision for creating a component library. But it created a side effect: components became FROZEN at the moment of extraction.

In the original explorations (CD-006, OD-004), components were ALIVE -- they were adapted per-instance based on compositional context. The extraction preserved the STRUCTURE of each component (2-zone DNA, 4px border, color parameterization) but lost the VARIATION across instances.

**The analogy:** Extracting a typeface from calligraphy. The extraction captures letterforms (a, b, c) but loses the calligrapher's contextual variation (how an 'a' changes when preceded by 't' vs 's'). The component library is the typeface. What's missing is the ligature table -- the rules for how components change based on their neighbors and position.

### 7.1 Proposed Solution: Component Context Sensitivity Rules

Add a "Context Sensitivity" section to each component in the mechanism catalog:

```
### Mechanism #2: 2-Zone Component DNA

**Context Sensitivity Rules:**
1. If component appears in a SPARSE zone (padding >= 48px): expand component internal padding by +8px
2. If component appears in a DENSE zone (padding <= 24px): compress component internal padding by -4px
3. If component appears after heading: increase label size by +2px (closer to heading weight)
4. If 3+ callouts appear in sequence: alternate background between zone-sparse and zone-breathing
5. If component is FIRST in section: add top-margin = section-padding (visual breathing)
6. If component is LAST in section: reduce bottom-margin by 50% (tighter closure)
```

These rules are:
- **Binary** (if X, then Y -- 100% compliance expected)
- **Structural** (based on position/context, not aesthetics)
- **Perceptible** (produce visible differences a PA auditor would notice)
- **Transferable** (work regardless of metaphor)

---

## 8. LOSS CHAIN SUMMARY

| Where | What Gets Lost | Why | Fix Complexity |
|-------|---------------|-----|---------------|
| Phase C extraction | Per-instance component variation | Extraction deliberately strips metaphor | N/A (correct decision, wrong to reverse) |
| Mechanism catalog | Component application modes | Catalog documents WHAT mechanisms are, not HOW to modulate them at component scale | LOW: add mode tables per component mechanism |
| TC Skill Phase 4.4-4.5 | Adaptation guidance | Adapt-vs-Invent is a gate against invention, not a playbook for adaptation | LOW: add adaptation examples |
| TC Skill Phase 4.7 | Component fractal validation | Gate accepts stock descriptions as valid | LOW: add "must differ from stock" validation |
| Recipe Phase 1 | Per-component adaptation documentation | Phase 1 says "use classes" not "adapt classes" | LOW: add one-sentence adaptation per component |
| Recipe Phase 6 | Multi-instance variation | Phase 6 lists element treatments, not component variation | LOW: add variation check for repeated components |
| Handoff Gate | Adoption quality | Binary count (>=10/26) checks quantity not adaptation | MEDIUM: add adaptation table as required deliverable |
| Builder's input files | Component adaptation playbook | No file tells the builder HOW to adapt components | MEDIUM: either extend mechanism catalog or add new section to operational-recipe |

**Overall fix effort:** LOW-MEDIUM. Most fixes are additive (new sections, enhanced gates) rather than structural (new files, architectural changes). The largest change is the proposed Component Context Sensitivity Rules, which could be added as a ~100-line section in the mechanism catalog.

---

## 9. RELATIONSHIP TO OTHER SCALES

Component scale is the BRIDGE between Section scale (Scale 3) and Character scale (Scale 5):

- **Section scale** determines the zone context (sparse/dense/breathing) that should DRIVE component adaptation
- **Component scale** translates zone context into internal proportions (the proposed adaptation modes)
- **Character scale** inherits component-internal typography (if the component uses compressed mode, inline text within it should also compress)

Without component-scale propagation, section-level composition and character-level detail are DECOUPLED. The page can have rich zone backgrounds (section scale) and careful inline typography (character scale), but the components between them are static islands of stock CSS.

**The visual symptom:** A page where section backgrounds shift beautifully, inline text is carefully tuned, but every callout/table/code-block looks identical regardless of position. This is EXACTLY the flagship experiment's failure at component scale -- 14 mechanisms in CSS, 1 perceptually visible. The mechanisms operated at section level and character level, but the components in between were stock.

---

## 10. RECOMMENDATIONS (PRIORITY-ORDERED)

### P1 (BLOCKING for PV2 codification)

1. **Add Component-Mode tables** to mechanism catalog for mechanisms #2, #9, #10, #17 (the 4 COMPONENT-category mechanisms). Each mode should specify concrete CSS values, not abstract guidance. ~60 lines added.

2. **Enhance fractal gate** (TC Skill Phase 4.7) Component row validation: "Description MUST reference a property that differs from stock component." Binary check, ~5 lines changed.

### P2 (SIGNIFICANT for recipe quality)

3. **Enhance Recipe Phase 1** to require one-sentence adaptation rationale per adopted component. ~2 lines changed in recipe, ~10 lines added to builder output.

4. **Enhance Recipe Phase 6** to require variation check for components appearing 3+ times. ~5 lines added to recipe.

5. **Add Component Context Sensitivity Rules** to mechanism catalog. 6 binary rules per component mechanism x 4 mechanisms = ~80 lines added. These rules are position-based (sparse zone = expand, dense zone = compress) and metaphor-independent.

### P3 (ENHANCEMENT for future iterations)

6. **Add per-component adaptation table** as a required builder deliverable (alongside cascade value table). This table documents stock vs adapted CSS per component instance.

7. **Extend handoff gate** (Wave 0.9) to include component adaptation check. Not just "how many components?" but "does the build plan specify per-zone component proportions?"

---

## 11. THE ONE-SENTENCE SUMMARY

Component-level pattern expression gets lost because the pipeline treats components as **adopt-or-reject atoms** (count: >=10/26) when they should be **adapt-per-context molecules** with internal proportions that echo the page-level composition, and fixing this requires adding Component-Mode tables to the mechanism catalog plus a binary fractal-gate enhancement -- approximately 150 lines of additions with zero architectural changes.
