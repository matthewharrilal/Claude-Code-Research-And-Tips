# B6: Revision Quality -- Maintaining Compositional Integrity Across Edits

**Investigator:** revision-investigator (Opus 4.6)
**Date:** 2026-02-22
**Task:** #37 -- Deep investigation of revision quality
**Sources:** Report 59 (suppressor archaeology, 867 lines), Report 53 (dimensional gap analysis, 464 lines), Report 44 (lost knowledge, 365 lines), Report 57 (compositional fluency deep, 510 lines), builder-changelog.md (236 lines), FINAL-VERDICT.md (306 lines), 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines), 01-remediate-vs-rebuild.md (200+ lines), 08-recipe-remediation.md (150+ lines), 06-css-budget-reallocation.md (150+ lines)

---

## EXECUTIVE SUMMARY

Revision -- the act of editing an existing artifact to improve its quality -- is the pipeline's most significant structural weakness. The Flagship remediation is the primary evidence: a 1,025-line enhanced specification, executed by an Opus agent over 9 phases, produced a +1.0 PA-05 improvement (1.5 to 2.5) but hit a ceiling that three concrete blocking issues could only raise to an estimated 3.0-3.2. The theoretical target was 3.0-4.0. The gap between 3.2 (projected ceiling after fixes) and 4.0 (DESIGNED) is not a bug count -- it is a structural property of revision itself.

**The core finding:** Revision degrades compositional quality because it converts GENERATIVE processing (building relationships between mechanisms) into CORRECTIVE processing (fixing individual defects). A fix improves its target but does not consider -- and often damages -- the relational web that compositional quality depends on. This is not a failure of the reviser. It is a property of the revision medium: edits are LOCAL, composition is GLOBAL.

**Five structural properties break during revision:**
1. **Multi-channel encoding** -- coordinated CSS values across channels decouple when individual channels are edited independently
2. **Density arcs** -- progressive gradients across zones flatten when individual zone values are corrected to pass thresholds
3. **Bookending symmetry** -- header-footer echoes break when one end is modified without updating the other
4. **Component-context coupling** -- zone-aware component styling breaks when component CSS or zone CSS changes independently
5. **Restraint coherence** -- deliberate absences become accidental when surrounding mechanisms are added or modified

**The revision protocol proposed:** A 7-rule framework that preserves composition during edits, plus CSS architectural patterns that make pages revision-friendly from the start.

---

## PART 1: WHY REVISION DEGRADES QUALITY

### 1.1 The Generative-to-Corrective Shift

Report 59 identifies S-11 (Repair Mode) as a primary suppressor with ~0.5-1.0 quality points of impact. The mechanism:

```
GENERATIVE MODE (first build):
  Builder holds full composition in working memory
  Each CSS decision considers relationships to ALL other decisions
  Result: mechanism interdependence (CCS > 0.35)

CORRECTIVE MODE (revision):
  Builder reads fix instructions: "border selectors broken, typography not applying"
  Each fix addresses a SPECIFIC defect
  Builder does NOT re-hold the full composition -- it targets the defect
  Result: defect count decreases, interdependence does not increase
```

The Flagship remediation proves this. The builder-changelog shows 9 systematic phases:
- Phase 0: Delete 201 lines of sub-perceptual CSS (SUBTRACTION)
- Phase 1: Restructure HTML class names, add ARIA (STRUCTURAL)
- Phase 2: Replace zone background colors (CORRECTION)
- Phase 3: Add borders, callouts, grids (ADDITION)
- Phase 4: Add typography zone variation (ADDITION)
- Phase 5: Adjust spatial rhythm (CORRECTION)
- Phase 6: Add element-level richness (ADDITION)
- Phase 7: Add accessibility + responsive (ADDITION)

Every phase addresses a DIMENSION independently. No phase considers how its changes relate to changes from other phases. Phase 3 adds borders without considering how they interact with Phase 2's background colors. Phase 4 adds typography variation without considering how it pairs with Phase 3's structural borders at zone boundaries.

The result: the page has more mechanisms (good) but those mechanisms do not compose (bad). It has borders AND background deltas AND typography variation, but these three channels do not co-vary at boundaries. They were added in separate phases by a builder in corrective mode.

### 1.2 The Fix-as-Checklist Problem

Report 59's S-20 (Fix Cycle Regression) describes a deeper mechanism: the fix cycle itself reproduces the checklist failure that caused the original quality deficit.

```
FIRST BUILD:    Recipe instructions    -> Builder in composing mode  -> Compositional output
FIX CYCLE:      Gate results + PA quotes -> Builder in fixing mode    -> Locally improved output
```

The fix cycle's input format is diagnostic: "SC-10 FAILED: stacked gap 175px. PA auditor: 'typography uniform across 75% of page.'" This is structurally identical to the checklist format that suppressor S-01 identifies as the primary quality reducer. The builder receiving fix instructions shifts from "I am composing a page" to "I am solving a list of problems."

The Flagship remediation's FINAL-VERDICT confirms this pattern:
- 3 BLOCKING issues (border selectors, typography specificity, background deltas)
- 2 SIGNIFICANT issues (table class mismatch, S4-S5 gap)
- 4 MINOR issues (callout backgrounds, divider uniformity, h2 size, inline emphasis)

Each issue is LOCAL. No issue says "the relationship between borders and backgrounds at zone transitions lacks coherence." The diagnosis decomposed a GLOBAL quality deficit (PA-05 2.5 instead of 3.5) into LOCAL symptoms. Fixing every symptom reaches an estimated 3.0-3.2 -- still below the 3.5 target. The 0.3-0.5 point gap between "all local fixes applied" and "DESIGNED" IS the revision quality deficit.

### 1.3 The Information Loss Chain

Report 44 documents a 1.2% survival rate from research knowledge to execution prompt (45,083 lines to 542). But revision introduces a SECOND compression:

```
ORIGINAL COMPOSITION:
  Builder held: 542-line prompt + content analysis + metaphor derivation + density arc concept
  Working memory: full compositional intent

FIX CYCLE INPUT:
  Builder receives: "3 BLOCKING, 2 SIGNIFICANT, 4 MINOR issues. Fix in this order."
  Working memory: defect list + fix procedures

INFORMATION LOST IN FIX CYCLE:
  - Original compositional intent (metaphor embodiment, density arc direction)
  - Mechanism interdependencies (which CSS values were coupled by design)
  - Restraint reasons (why certain mechanisms were absent from certain zones)
  - Proportional calibration (why specific values were chosen, not just that they fail)
```

Report 44's Category 4 (Judgment Calibration) is destroyed entirely during revision. The original builder knew that 15 RGB was "barely perceptible" and 50 RGB was "dramatic." The revising builder only knows that 2 RGB "fails" and needs to be "increased." The reviser raises it to 15 (passes the gate) rather than to 30 (serves the composition) because the gate is the only feedback mechanism.

### 1.4 The Two-Instance Problem Applied to CSS

Report 53 identifies the fundamental limit: "continuation bias prevents self-revision." This applies directly to CSS revision:

**Continuation bias in CSS revision:**
- The reviser reads existing CSS and ANCHORS on it. The existing values become the reference frame.
- Adding a border to section S5 is evaluated relative to the existing CSS of S5 (its current background, padding, typography) rather than relative to the page's compositional intention.
- The reviser cannot "unsee" the existing implementation. Each fix is a patch ON the existing structure rather than a reimagining FROM the compositional intent.

This is why the 1,025-line Enhanced Remediation Spec (report 12) produced 2.5/4 while the 100-line Middle recipe produced 4/4. The Middle builder started from blank canvas with compositional intent. The Flagship reviser started from 2,034 lines of existing CSS with a defect list. The information asymmetry is enormous: the Middle builder had 100 lines of generative instruction; the reviser had 1,025 lines of corrective instruction but 2,034 lines of existing artifact anchoring every decision.

---

## PART 2: WHICH CSS STRUCTURES ARE FRAGILE TO REVISION

### 2.1 Tightly Coupled Multi-Channel Encodings

Report 57 identifies multi-channel encoding as the strongest form of compositional fluency. Gas Town's 4-zone density arc co-varies background, padding, font-weight, and letter-spacing at each boundary. This is the MOST FRAGILE structure under revision because editing ANY channel independently decouples it from the others.

**Example: Gas Town Zone 2 -> Zone 3 transition**
```css
/* COMPOSED STATE: 4 channels co-vary */
Zone 2: bg #F0EBE3, padding 40px, font-weight 500, letter-spacing 0
Zone 3: bg #E8E0D4, padding 32px, font-weight 600, letter-spacing 0.03em

/* AFTER "FIX: Zone 3 bg fails warm palette check" */
Zone 3: bg #F2E8DA, padding 32px, font-weight 600, letter-spacing 0.03em
  /* Background changed +10 toward warm. But now bg delta is 6 instead of 15.
     The density DIRECTION (darker = denser) is weakened.
     The other 3 channels still encode "denser" but the background now contradicts.
     One fix decoupled one channel from three. */
```

**Fragility pattern:** Any CSS value that participates in a multi-channel encoding becomes fragile because its value's MEANING depends on values in OTHER properties. Revising one property without revising its coupled properties produces incoherence.

**The Flagship remediation hit this exactly.** The builder-changelog shows Phase 2 replaced zone backgrounds independently of Phase 4 (typography) and Phase 5 (spatial rhythm). Each phase's values were correct IN ISOLATION but were not coordinated INTO a multi-channel encoding. The result: backgrounds, typography, and spacing all vary across zones but do not vary in the same direction at the same boundaries.

### 2.2 Gradient Progressions

Any CSS property that changes progressively across the page (backgrounds getting darker, padding getting tighter, font-weight getting heavier) is fragile because editing any individual value in the progression disrupts the gradient's continuity.

**Example: Typography progression across 12 sections**
```css
/* COMPOSED GRADIENT: font-size decreases from opening to resolution */
S1-S3: 17px  (expansive, opening)
S4-S8: 16px  (standard, deepening)
S9-S12: 15px (tight, resolving)

/* AFTER "FIX: S9-S12 font-size 15px not applying due to specificity conflict" */
/* Builder adds !important to S9-S12 rule */
S9-S12: 15px !important
  /* The fix works, but now S9-S12 has !important while S1-S3 and S4-S8 do not.
     Future edits to S1-S3 typography will override normally.
     Future edits to S9-S12 will need their own !important, or will be blocked.
     The gradient's MAINTENANCE cost just increased permanently. */
```

The Flagship remediation's builder-changelog confirms this: Phase 5 spatial rhythm used `!important` on section padding to override inline styles. This solved the immediate problem but created a specificity trap -- any future revision to section padding must either use `!important` (escalation) or restructure the inline styles (which requires HTML change, not CSS change).

### 2.3 Bookending Symmetry

Report 57 identifies the header-footer bookending arch as CD-006's strongest compositional coupling. This is fragile under revision because header and footer are at opposite ends of a long file.

**Fragility pattern:** When revising the header, the footer is 1,900 lines away. The reviser's working memory does not hold the footer's values while editing the header. Changes to header border-color, background tint, or typography do not propagate to the footer. The symmetry degrades silently.

The Flagship remediation preserved bookending (both dark, both 3px primary border) but only because the spec explicitly said "do not change header or footer." If the spec had said "warm up the header background by 5 RGB points," the footer would likely not have been updated to match -- the 12-section 2,034-line distance between them is too large for working-memory coupling.

### 2.4 Specificity Hierarchies

CSS specificity (`.zone-s3 .callout--tip` overrides `.callout--tip` which overrides `.callout`) creates implicit hierarchies that are invisible during revision. The Flagship's structural border failure proves this: CSS rules for `.zone-sN .page-container` existed but did not render, likely because the selector did not match the actual DOM structure. The builder wrote correct CSS that targeted the wrong specificity level.

**Fragility pattern:** Any revision that adds CSS with different specificity from the existing rules risks creating invisible conflicts. The reviser sees that a rule exists and that it has the correct property:value, but does not see that another rule with higher specificity is overriding it. This requires computed-style verification, which the pipeline provides post-build but not during revision.

### 2.5 Inline Style Overrides

The Flagship HTML contained inline `style="padding:..."` attributes on every section element. The remediation's Phase 5 had to use `!important` to override them. This creates a permanently fragile structure: any future CSS that modifies section padding must either use `!important` (escalation trap) or modify the HTML (medium change).

**Fragility pattern:** Inline styles create revision-resistant anchors. They cannot be overridden by normal CSS specificity. Each `!important` used to override them creates a new anchor that future revisions must contend with. The result is specificity escalation -- a ratchet that makes each successive revision harder than the last.

---

## PART 3: WHICH CSS STRUCTURES ARE ROBUST TO REVISION

### 3.1 Self-Contained Components

Component definitions (`.callout`, `.callout--info`, `.callout--tip`) are the MOST revision-friendly CSS structures because they are independently defined, independently styled, and independently modifiable.

**Why they are robust:**
- Editing `.callout--tip { background: #F8F7F2; }` changes ALL tip callouts everywhere without affecting any other component or any zone-level styling.
- Component CSS has no implicit dependencies on page-level CSS (unless zone-context coupling is deliberately added).
- Component boundaries are clear: the `.callout` class scope is the callout element, nothing else.

The Flagship remediation's callout system succeeded precisely because callouts were added as independent components. The builder-changelog shows 9 callouts converted from `.component-block` to the design-system callout family. Each conversion was mechanical (class rename + background/border assignment). No conversion broke anything else.

### 3.2 CSS Custom Properties (Design Tokens)

CSS custom properties in `:root` are revision-friendly because they provide single-point-of-change semantics. Changing `--color-border: #E0D5C5` updates every element that references `var(--color-border)`. This is the CSS equivalent of DRY (Don't Repeat Yourself).

**Why they are robust:**
- One edit propagates to all consumers.
- The relationship between producer (`:root` variable) and consumer (`var()` reference) is explicit and searchable.
- Revising a token value preserves all the RELATIONSHIPS built on that token.

The Flagship remediation leveraged this: Phase 2 replaced 3 zone color variables (`--color-zone-s5`, `--color-zone-s7`, `--color-zone-s8`) and the changes propagated to all zone-background rules automatically. This is revision working as intended.

**However:** Tokens are only revision-friendly when the RELATIONSHIPS are token-mediated. If two elements have the same background color but one uses `var(--color-zone-s5)` and the other uses the literal hex `#FAF8F5`, revising the token will decouple them. The Flagship had exactly this problem: some callout backgrounds used literal hex values instead of token references.

### 3.3 Independent Layer Architecture

CSS organized into independent layers (reset -> tokens -> base typography -> components -> zones -> utilities) is revision-friendly because each layer can be modified without affecting others.

**Why it is robust:**
- Token layer changes propagate down; component layer changes do not propagate up.
- Adding a new component does not require modifying the zone layer.
- Revising zone backgrounds does not require revising component styling.

The Flagship's CSS was partially layered (reset, then tokens, then base, then components, then zones, then micro-modulations). The micro-modulation layer (201 lines of sub-perceptual CSS) was fully independent -- deleting it in Phase 0 required zero changes to any other layer. This is the gold standard for revision-friendly architecture.

### 3.4 Scoped Media Queries

`@media` blocks are revision-friendly because they are self-contained scope boundaries. Revising responsive behavior at 768px does not affect the default (1440px) styling. The Flagship remediation added responsive and print media queries in Phase 7 with zero interaction with other phases.

---

## PART 4: THE FLAGSHIP REMEDIATION -- WHAT WORKED, WHAT BROKE, WHY 2.5

### 4.1 What Worked

**Phase 0 (Deallocation):** Removing 201 lines of sub-perceptual CSS was pure improvement. It freed CSS budget for visible mechanisms and reduced file complexity. The checkpoint ("page should look IDENTICAL") confirmed that the removed CSS had zero perceptual impact.

**HTML restructuring:** Converting `.component-block` to `.callout` family (9 instances), adding grid wrappers (3 layouts), and adding ARIA labels (12 sections) were mechanical changes that reliably improved component diversity and accessibility. These changes are REVISION-FRIENDLY because they are additive and independently verifiable.

**Soul compliance:** The remediation maintained zero violations across 22 prohibitions. Identity constraints survived revision perfectly because they are BINARY checks (border-radius is either 0 or it is not) that do not interact with compositional quality.

**Whitespace voids:** From 210-276px catastrophic voids to 33-175px with bridge content. The specific intervention (reducing divider margins from 48-80px to 16-24px, adding `bridge-prose { margin-bottom: 16px !important }`) was targeted and effective.

### 4.2 What Broke

**Structural border selectors:** CSS rules existed at lines 784-812 targeting `.zone-sN .page-container`, but computed styles showed zero borders rendering. This is a revision-specific failure: the builder wrote CSS that was SYNTACTICALLY correct but did not match the actual DOM structure. During a first build, the builder creates HTML and CSS together and knows the structure. During revision, the builder writes CSS for a structure it did not create and may not fully understand.

**Typography specificity:** Phase 4 implemented 3-zone typography (17px/16px/15px), but computed styles showed S9-S12 at 16px, not 15px. The builder-changelog acknowledges that "individual zone-to-zone steps are subtle by design" -- but the 15px rules were overridden by a higher-specificity rule the builder did not identify. This is a CSS specificity conflict that only emerges when revising existing CSS with layers of accumulated rules.

**Multi-channel decoupling:** The three channels that were independently improved (backgrounds in Phase 2, borders in Phase 3, typography in Phase 4) do not co-vary at boundaries. The FINAL-VERDICT notes that "75% of the body is typographically uniform" while backgrounds do vary -- the channels moved independently, not together.

### 4.3 Why the Ceiling is 2.5 (or 3.0-3.2 After Fixes)

The 2.5/4 score reflects a page with:
- Strong individual mechanisms (callouts, dark header, drop cap, section indicators)
- Weak mechanism COUPLING (channels do not co-vary, components do not respond to zones)
- Improved perceptibility (backgrounds differ by 2-13 RGB, up from 1-8)
- Persistent uniformity (S4-S12 typographically identical despite Phase 4's intent)

The projected 3.0-3.2 after fixing the 3 BLOCKING issues would add:
- Visible structural borders at 6 zone boundaries (+0.2)
- S9-S12 typography at 15px creating a "resolved" voice (+0.2)
- Table selector matching enabling hover and variant styling (+0.1)

But even at 3.2, the page lacks:
- **Multi-channel encoding at boundaries:** No zone transition shifts 3+ channels together in one semantic direction. Each channel was added independently.
- **Component-zone coupling:** Callouts look the same in Zone 1 as in Zone 9. No per-zone component modulation.
- **Restraint as composition:** Every zone has approximately the same mechanism density. No "silence zones" where mechanisms are deliberately withheld.
- **Density arc:** No continuous gradient from expansive (opening) through compressed (deepening) to released (resolving). Typography was supposed to provide this but the specificity conflict prevented it.

These four missing properties are NOT individual defects. They are RELATIONAL properties that require generative composition, not corrective editing. The revision process produced a page where each mechanism is individually improved but the mechanisms do not COMPOSE. This is the fundamental revision quality ceiling: **you can fix the parts without healing the whole.**

---

## PART 5: CAN CSS BE WRITTEN TO BE REVISION-FRIENDLY?

### 5.1 Revision-Friendly CSS Patterns

Based on the fragility analysis (Part 2) and robustness analysis (Part 3), six architectural patterns make CSS revision-friendly:

**Pattern 1: Token-Mediated Relationships**
Instead of literal values, use CSS custom properties for ANY value that participates in a relationship.

```css
/* FRAGILE: literal values, no visible relationship */
.zone-3 { background: #E8E0D4; }
.zone-3 p { font-weight: 600; }

/* REVISION-FRIENDLY: token-mediated, relationship is explicit */
:root {
  --zone-3-density: dense;  /* semantic, not just numeric */
  --zone-3-bg: #E8E0D4;
  --zone-3-weight: 600;
  --zone-3-spacing: 32px;
}
.zone-3 { background: var(--zone-3-bg); }
.zone-3 p { font-weight: var(--zone-3-weight); }
.zone-3 section { padding: var(--zone-3-spacing) 0; }
```

When a reviser needs to adjust Zone 3, they go to the `:root` block and see ALL of Zone 3's values together. The relationship between background, weight, and spacing is visible in the token names. Changing one invites reconsidering the others.

**Pattern 2: Boundary Coupling Tables**

Declare multi-channel encodings as contiguous CSS blocks that make the coupling visible.

```css
/* FRAGILE: channels declared in separate blocks, coupling is implicit */
/* (100 lines between background and typography rules) */
.zone-3 { background: #E8E0D4; }
/* ... 100 lines later ... */
.zone-3 p { font-weight: 600; letter-spacing: 0.03em; }
/* ... 50 lines later ... */
.zone-3 .page-container { border-left: 4px solid var(--color-text); }

/* REVISION-FRIENDLY: boundary coupling table, all channels together */
/* === ZONE 3 BOUNDARY === density: DENSE, direction: DEEPENING === */
.zone-3 {
  background: #E8E0D4;                              /* Ch1: chromatic */
}
.zone-3 p {
  font-weight: 600;                                  /* Ch2: typographic */
  letter-spacing: 0.03em;                            /* Ch2: typographic */
}
.zone-3 section {
  padding: 32px 0;                                   /* Ch3: spatial */
}
.zone-3 .page-container {
  border-left: 4px solid var(--color-text);           /* Ch4: structural */
}
/* === END ZONE 3 === */
```

The `=== ZONE 3 BOUNDARY ===` comment creates a visual boundary around all coupled properties. A reviser editing Zone 3's background will see the typography, spacing, and borders right there. The coupling is visible, not implicit.

**Pattern 3: Zero Inline Styles**

Never use inline `style` attributes on HTML elements. All styling goes through CSS classes.

```html
<!-- FRAGILE: inline styles require !important to override -->
<section class="zone-s4" style="padding: 48px 0;">

<!-- REVISION-FRIENDLY: padding controlled by class -->
<section class="zone-s4">
```

This eliminates the specificity trap that forced the Flagship remediation to use `!important` in Phase 5.

**Pattern 4: Flat Specificity Architecture**

Use single-class selectors wherever possible. Avoid deep nesting that creates specificity conflicts.

```css
/* FRAGILE: deep nesting creates specificity traps */
.zone-s9 .page-container .callout .callout-body p { font-size: 15px; }

/* REVISION-FRIENDLY: flat specificity, easy to override or modify */
.zone-resolved p { font-size: 15px; }
.callout-body p { font-size: inherit; }
```

When specificity is flat, revisions do not create cascade conflicts. The Flagship's typography failure (15px not applying to S9-S12) was a specificity conflict that flat architecture would have prevented.

**Pattern 5: Semantic Zone Classes**

Instead of numbered zone classes (`.zone-s1` through `.zone-s12`), use semantic density classes that carry meaning.

```css
/* FRAGILE: numbered zones, meaning is implicit */
.zone-s1 { ... }  /* What does "s1" mean? */
.zone-s9 { ... }  /* Is s9 "resolving"? How does the reviser know? */

/* REVISION-FRIENDLY: semantic classes, meaning is explicit */
.zone-opening { ... }      /* First 3 sections: expansive, warm */
.zone-deepening { ... }    /* Middle sections: compressed, analytical */
.zone-resolving { ... }    /* Final sections: released, warm return */
```

Semantic classes carry their compositional intent in the class name. A reviser working on `.zone-resolving` knows it should feel "released" -- the name IS a recipe instruction.

**Pattern 6: Explicit Restraint Markers**

Mark deliberate absences in CSS comments so revisers do not fill them.

```css
/* === ZONE 5: DELIBERATELY SPARSE ===
   NO border (silence zone -- contrast to bordered S4 and S6)
   NO component modulation (flat treatment creates rest)
   Background: near-white, the lightest zone
   This restraint is COMPOSITIONAL, not accidental.
   DO NOT add borders or components here without reconsidering the density arc.
=== */
.zone-5 { background: var(--zone-5-bg); }
```

Without these markers, a reviser seeing "Zone 5 has no borders" would add borders to "fix the inconsistency." With the marker, the reviser knows the absence is designed and protected.

### 5.2 Revision Hooks

The pipeline could produce CSS with explicit "revision hooks" -- marked insertion points for future modification.

```css
/* REVISION HOOK: Zone boundary components
   Current: callouts styled uniformly across zones
   Future: per-zone component modulation (padding, background tint)
   When activating: add .zone-opening .callout { padding: 24px 32px; }
                         .zone-deepening .callout { padding: 16px 20px; }
   This creates fractal density encoding (components respond to zone density)
*/
.callout { padding: 20px 24px; }

/* REVISION HOOK: Grid density progression
   Current: all grids use same column count
   Future: sparse zones use 2-col, dense zones use 4-col
   When activating: add .zone-opening .grid { grid-template-columns: 1fr 1fr; }
                         .zone-deepening .grid { grid-template-columns: repeat(4, 1fr); }
*/
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
```

Revision hooks serve two purposes:
1. They tell the reviser WHAT compositional improvements are available
2. They provide CONCRETE CSS for the improvement, eliminating the need for creative invention during revision

This converts revision from "diagnose and fix" into "activate pre-designed improvements" -- much closer to generative composition than corrective editing.

---

## PART 6: FIX vs. REVISION -- THE CRITICAL DISTINCTION

### 6.1 Taxonomy

| | Fix | Revision |
|---|---|---|
| **Target** | A specific defect | Overall compositional quality |
| **Input** | Gate failure + PA quote | Compositional intent + current state assessment |
| **Mode** | Corrective (reduce defect count) | Generative (increase coherence) |
| **Scope** | One CSS property or small block | Multiple coupled properties across zones |
| **Risk** | Low (changes are small and targeted) | Medium (changes ripple through relationships) |
| **Quality ceiling** | Defect-free but not composed (~3.0/4) | Composed (~3.5-4.0/4) |

### 6.2 Why the Pipeline Only Does Fixes

The current pipeline's fix cycle (Step 7 in build-page SKILL.md) produces FIX instructions:
- "Gate 3 FAILED: CCS < 0.30" -> Fix: add more coupled mechanisms
- "PA auditor: zone backgrounds imperceptible" -> Fix: increase RGB deltas

These are diagnostic sentences that produce targeted corrections. The pipeline has no mechanism for producing REVISION instructions that address compositional relationships:
- "The density arc from Zone 1 to Zone 3 should compress background, padding, AND font-weight together at each boundary" -> This is a COMPOSITIONAL instruction
- "Zone 5 is a deliberate rest point -- its sparse treatment contrasts with the bordered density of Zone 4 and Zone 6" -> This is a RESTRAINT instruction

The pipeline cannot produce these because the gate system measures INDIVIDUAL properties (RGB delta, mechanism count, channel count), not RELATIONSHIPS between properties.

### 6.3 The Theoretical Revision

A true revision (as opposed to a fix) would require:

1. **Re-read the original compositional intent** (TC brief, conviction statement, density arc plan)
2. **Assess the current state holistically** (not "which gates fail?" but "where does the composition sag?")
3. **Identify compositional gaps** (multi-channel encoding missing at boundaries, restraint incoherent, density arc flat)
4. **Make COUPLED changes** (adjust background AND typography AND spacing at a boundary simultaneously)
5. **Verify the change ripples correctly** (the adjacent boundary still contrasts; the density direction still holds)

This is structurally different from fix cycles. It requires the builder to re-enter generative mode with the existing artifact as a CANVAS, not as a PATIENT.

---

## PART 7: THE REVISION PROTOCOL

### 7.1 Seven Rules for Editing Without Breaking Composition

**Rule 1: NEVER edit a single channel at a boundary in isolation.**
If you change a zone's background, you must also review and potentially adjust its typography, spacing, and border treatment at the same boundary. Use the boundary coupling table (Pattern 2) to find all coupled properties.

**Rule 2: READ the boundary coupling table before touching any zone CSS.**
The coupling table shows which properties participate in multi-channel encoding at each zone transition. Any edit to a coupled property requires checking all other properties in the same coupling group.

**Rule 3: PRESERVE gradient direction.**
If backgrounds get darker from Zone 1 to Zone 3, any revision to a Zone 2 background must maintain the gradient: Zone 1 bg < Zone 2 bg < Zone 3 bg on the relevant RGB channel. Check direction BEFORE and AFTER the edit.

**Rule 4: HONOR restraint markers.**
If a zone is marked as "deliberately sparse" or "silence zone," do not add mechanisms to it without explicitly reconsidering the density arc. Restraint has compositional value.

**Rule 5: USE tokens for any value that participates in a relationship.**
If you add a new CSS value that should co-vary with existing values (e.g., a new zone's background that should be "between Zone 2 and Zone 4"), create a token for it in `:root` and place it near the related tokens. This makes the relationship searchable and visible.

**Rule 6: NEVER use inline styles.**
All styling goes through classes. If existing inline styles exist, the first revision task is to extract them into CSS classes. `!important` is a sign that inline styles need extraction, not that CSS needs escalation.

**Rule 7: VERIFY bookending after any header or footer change.**
After editing any header CSS, scroll to the footer and verify the echo properties match. After editing any footer CSS, scroll to the header and verify. Maintain a checklist of echo properties (background, border-color, border-width, typography treatment).

### 7.2 The Revision Verification Sequence

After any revision, verify in this order:

1. **Boundary coherence:** At each zone transition, do 3+ channels shift in the same direction? Use the Squint Test from conventions brief.
2. **Gradient continuity:** Do progressive values (backgrounds, spacing, font-size) still progress monotonically in the intended direction? No reversals unless designed.
3. **Restraint preservation:** Are deliberately sparse zones still sparse? Did the revision accidentally add mechanisms to a rest zone?
4. **Bookending symmetry:** Do header and footer still echo on all coupled properties?
5. **Specificity health:** Does `!important` appear in the revised CSS? If so, investigate whether the underlying specificity architecture needs restructuring rather than escalation.
6. **Component independence:** Do self-contained components (callouts, tables, code blocks) still render correctly in all zone contexts?

---

## PART 8: THE DEEPER QUESTION -- COULD THE PIPELINE PRODUCE REVISION-PROOF CSS?

### 8.1 What "Revision-Proof" Means

Revision-proof CSS is CSS where LOCAL edits CANNOT decouple GLOBAL composition. This would mean:
- Editing Zone 3's background automatically adjusts its typography to maintain multi-channel encoding
- Adding a component to Zone 5 automatically applies Zone 5's density treatment
- Changing a token in `:root` automatically maintains gradient continuity

This is theoretically possible through CSS custom property chains:

```css
:root {
  --density-zone-3: 0.7;  /* 0 = sparse, 1 = dense */
}

.zone-3 {
  background: color-mix(in srgb, var(--warm-light) calc((1 - var(--density-zone-3)) * 100%), var(--warm-dark) calc(var(--density-zone-3) * 100%));
  padding: calc(64px - (var(--density-zone-3) * 32px));
}
.zone-3 p {
  font-weight: calc(400 + (var(--density-zone-3) * 200));
  letter-spacing: calc(var(--density-zone-3) * 0.03em);
}
```

In this architecture, revising Zone 3's density is a SINGLE EDIT to `--density-zone-3`. ALL channels adjust together automatically. Multi-channel encoding is GUARANTEED by the architecture, not dependent on the reviser's judgment.

### 8.2 Why It Does Not Exist Yet

This approach requires:
1. `color-mix()` support (available in all modern browsers since 2023)
2. `calc()` with custom properties for font-weight (supported but semantically awkward -- font-weight must be 100-900 in 100-step increments)
3. A well-defined density model that maps a 0-1 scalar to CSS values across all channels

The pipeline does not produce this architecture because:
- The TC brief specifies zone VALUES, not zone DENSITY SCALARS
- The conventions brief provides thresholds per-property, not per-zone-density
- The builder implements values, not parametric relationships

Implementing parametric CSS would require the TC brief to output a density scalar per zone and the builder to implement a parametric system. This is architecturally possible but requires a different builder recipe than "read values, write CSS."

### 8.3 Pragmatic Alternative: Revision-Friendly, Not Revision-Proof

Full parametric CSS is ambitious and may introduce its own fragilities (complex `calc()` chains are hard to debug). The pragmatic path is the six revision-friendly patterns from Part 5 plus the seven-rule revision protocol from Part 7. These do not prevent decoupling, but they make it VISIBLE and RECOVERABLE:

- Token-mediated relationships make couplings searchable
- Boundary coupling tables make couplings visible
- Restraint markers make absences intentional
- Revision hooks provide pre-designed improvements
- The seven rules provide a protocol that preserves composition during edits

---

## PART 9: IMPLICATIONS FOR PIPELINE V3

### 9.1 The Fix Cycle Must Become a Revision Cycle

The current fix cycle input is:
```
Gate failures + PA auditor quotes -> "Fix these specific issues"
```

A revision cycle input would be:
```
Compositional assessment + boundary coherence map -> "Strengthen these relationships"
```

Concretely:
- **Current:** "SC-10 FAILED: stacked gap 175px at S4-S5."
- **Revision:** "Boundary S4-S5: only 1 channel shifts (background). Strengthen by adding border transition and typography shift. Target: 3+ channels co-varying at this boundary."

The difference: the fix targets a MEASUREMENT. The revision targets a RELATIONSHIP.

### 9.2 The Builder Must Output Boundary Coupling Tables

If the first build produces boundary coupling tables (explicit documentation of which properties are coupled at each zone transition), the revision cycle can verify coupling PRESERVATION rather than just defect CORRECTION.

This is a new builder output that the current pipeline does not require:
```css
/* === BOUNDARY COUPLING TABLE ===
   S1->S2: bg +16 RGB, padding -24px, border-left added (3 channels)
   S2->S3: bg +18 RGB, padding 0, border-left removed (2 channels)
   S3->S4: bg -10 RGB (cooling), padding 0, font-weight +100 (3 channels)
   ...
=== */
```

### 9.3 The Conviction Statement Must Survive Into Revision

Report 44 identifies the conviction statement as the strongest bridge between compositional intent and execution. Currently, the conviction statement is written before the first build and never referenced again. During revision, the builder should:

1. Re-read the conviction statement before starting any revision
2. Evaluate each proposed fix against the conviction ("does this fix serve the compositional intent?")
3. If a fix contradicts the conviction, flag it as a compositional risk

### 9.4 First Builds Must Use Revision-Friendly Architecture

The six patterns from Part 5 should be requirements in the builder's first-pass instructions:
- All multi-channel encodings documented in boundary coupling tables
- All values that participate in relationships mediated through tokens
- Zero inline styles
- Flat specificity architecture
- Semantic zone classes
- Explicit restraint markers

This does not add compositional quality to the first build. It PRESERVES compositional quality across subsequent revisions.

---

## SYNTHESIS: THE REVISION QUALITY MAP

```
Quality
4.0 | ...............................................  DESIGNED
    |                                           /
    |                                          /   <-- REVISION can reach here
3.5 |                                         /       only if it re-enters generative mode
    |                            ____________/         with coupling preservation
    |                           /
3.0 | ........................./.....................  COMPOSED
    |                         |
    |          _______________| <-- FIX CEILING: all local defects corrected,
2.5 | ________|                    but no compositional coupling added
    |/
    |   <-- Flagship remediation landed here (2.5/4)
2.0 |
    |
1.5 |*  <-- Flagship original (all 14 suppressors active)
    |
    +--------------------------------------------------
    0    1    2    3    4    5    6    7    8    9   10
                    Number of fix/revision cycles
```

**The ceiling at ~3.0 for fix-only approaches is structural, not incidental.** Fixes reduce defect count (moving along the X axis) but do not increase compositional coupling (moving up the Y axis). To break through 3.0, the revision must re-enter generative mode -- treating the artifact as a CANVAS for composition, not as a PATIENT for treatment.

**Key numbers from the evidence:**
- Fix-only ceiling: ~3.0-3.2/4 (FINAL-VERDICT projected ceiling after 3 BLOCKING fixes)
- Middle recipe (first build, generative): 4/4
- Gas Town (first build, generative, larger prompt): CEILING-tier
- Flagship remediation (corrective, 1,025-line spec): 2.5/4

**The pattern is unambiguous:** First builds in generative mode outperform revisions with any amount of specification.

---

## CONCLUSIONS

1. **Revision degrades quality** because it converts generative processing (composing relationships) into corrective processing (fixing defects). This is a structural property of editing, not a failure of the reviser.

2. **Multi-channel encodings, gradient progressions, bookending symmetry, component-context coupling, and restraint coherence** are the five CSS structures most fragile to revision. All share one property: their value depends on RELATIONSHIPS, not individual correctness.

3. **Self-contained components, CSS custom properties, independent layer architecture, and scoped media queries** are the four CSS structures most robust to revision. All share one property: they are independently modifiable.

4. **The Flagship remediation hit a ceiling at 2.5/4** (projected 3.0-3.2 after fixes) because each phase improved a dimension independently without composing dimensions together. The builder was in corrective mode across all 9 phases.

5. **CSS can be written to be revision-friendly** through six architectural patterns: token-mediated relationships, boundary coupling tables, zero inline styles, flat specificity, semantic zone classes, and explicit restraint markers.

6. **A revision protocol** (seven rules + verification sequence) can preserve composition during edits, but requires the reviser to operate differently from a fixer.

7. **The pipeline's fix cycle must evolve into a revision cycle** that targets RELATIONSHIPS (boundary coherence, coupling preservation) rather than DEFECTS (gate failures, PA quotes).

8. **The fix ceiling at ~3.0/4 is structural.** To reach DESIGNED (3.5-4.0/4), revision must re-enter generative mode. The most effective strategy is: build generatively first with revision-friendly architecture, then revise with the coupling-preservation protocol. Never try to reach DESIGNED through fixes alone.

---

**END REPORT B6**

*The deepest finding: the quality difference between a first build (4/4) and a remediation (2.5/4) is not about specification volume (100 lines vs 1,025 lines) or model capability (Opus in both cases) or time invested (35 minutes vs 120 minutes). It is about COGNITIVE MODE. Generative mode produces composition. Corrective mode produces correctness. Composition > correctness, always. The pipeline must ensure that revision re-enters generative mode rather than sliding into corrective mode -- and must produce CSS architectures that make this re-entry possible.*
