# Scale-Character Analysis: The CI Stack at ~12-20px

**Agent:** scale-character
**Task:** #25
**Date:** 2026-02-20
**Sources:** conventions-brief.md (Section 5), mechanism-catalog.md (18 mechanisms), gate-runner.md (SC-14, SC-11)

---

## Executive Summary

Character scale (~12-20px) is the FINEST and MOST DANGEROUS scale in the system. It is the only scale with a dedicated anti-abuse gate (SC-14), the only scale marked "ONLY after Page scale verified" in the conventions brief, and the scale where the Flagship catastrophically failed -- spending 22% of its CSS budget (238 lines) on imperceptible micro-typography. This analysis finds that Character scale enrichment should primarily CONSTRAIN further, not ADD capabilities. Character is a LOW-LEVERAGE enrichment target where the dominant risk is CSS budget misallocation. The single productive Character-scale pattern is the 2-zone component DNA label register (0.75rem, uppercase, letter-spacing 0.1em) -- and that pattern is already fully documented.

---

## 1. Six Channels at Character Scale

### Which Channels Apply?

| Channel | Applicability at Character Scale | Evidence | Verdict |
|---------|----------------------------------|----------|---------|
| **Typographic** | PRIMARY -- this IS Character scale | letter-spacing, line-height, font-weight micro-shifts, text-transform | The only channel that naturally operates at 12-20px |
| **Chromatic** | SECONDARY -- text color variation | `--color-text` vs `--color-text-secondary` (#1A1A1A vs #666666) | Applies but constrained: accent colors reserved for callouts only (Restraint List item) |
| **Spatial** | MARGINAL -- word-spacing, inline padding | word-spacing is not documented in any mechanism; inline padding is Component scale | Barely applies; word-spacing is not in the vocabulary |
| **Structural** | DOES NOT APPLY | Borders operate at Component (40-100px) and Section (200-400px) scales | No structural channel at 12-20px |
| **Behavioral** | DOES NOT APPLY | Hover/transition states operate on interactive elements, not inline text | Link hover color is the sole exception, and it's Component-level |
| **Material** | DOES NOT APPLY | Surface treatment operates at Section/Page scale | No material channel at 12-20px |

### Is This Mostly a Single-Channel Scale?

**YES.** Character scale is overwhelmingly a Typographic-channel scale. Chromatic applies weakly through text color (2 values: primary text and secondary text). Spatial is theoretically present but has zero vocabulary support (no word-spacing tokens, no inline-padding patterns).

This matters because multi-coherence requires >= 3 channels shifting at zone boundaries. Character scale CANNOT contribute 3 channels independently. It can only contribute 1 channel (Typographic) to a boundary that is ALREADY multi-coherent at larger scales. This is the fundamental architectural constraint: Character scale is a RIDER on larger-scale multi-coherence, never a standalone contributor.

**Implication for enrichment:** Any enrichment that frames Character as a multi-channel event is architecturally confused. Character enrichment must be framed as a single-channel enhancement to existing multi-coherent boundaries.

---

## 2. Multi-Coherence at Character Scale

### Does Multi-Coherence Make Sense at ~12-20px?

**No, not as conventionally defined.** Multi-coherence requires >= 3 of 6 channels shifting at a boundary (Section 4 of conventions brief, SC-13 gate). Character scale has exactly 1.5 applicable channels (Typographic primary, Chromatic marginal). Multi-coherence at Character scale is architecturally impossible.

### What IS a Character-Level Boundary?

Character-level boundaries are transitions between typographic registers within a section:

| Boundary | From | To | CSS Change |
|----------|------|----|-----------|
| Prose to label | Body text (1rem, 400, normal case) | Component label (0.75rem, 600, uppercase, ls 0.1em) | font-size + font-weight + text-transform + letter-spacing |
| Prose to code | Body text (Inter, 1rem) | Inline code (JetBrains Mono, 0.875rem) | font-family + font-size |
| Body to heading | Paragraph text (1rem) | Section heading (1.625rem, Instrument Serif) | font-family + font-size |
| Prose to meta | Body text (1rem, #1A1A1A) | Meta text (0.75rem, #666666) | font-size + color |

**Key observation:** These are all TYPOGRAPHIC channel shifts only. None of them involve Chromatic (background), Spatial (padding), Structural (border), Behavioral (hover), or Material (texture) channels. They are single-channel events that occur WITHIN zones, not AT zone boundaries.

### The Right Frame for Character Scale

Character-level boundaries are NOT multi-coherence events. They are **typographic register shifts** -- the text's mode changes (prose/label/code/heading/meta) while the spatial and chromatic context holds steady. The reader processes them as inline grammar (like italics or bold), not as architectural transitions.

Multi-coherence enrichment at Character scale is a CATEGORY ERROR. The concept to enrich is **typographic register consistency** -- ensuring that every label uses the same register, every code snippet uses the same register, and the register vocabulary is documented and finite.

---

## 3. Anti-Scale at Character Scale

The anti-scale model: `Richness = semantic density x restraint x spatial confidence`.

### Density at Character Scale

Density = every CSS rule is perceptible at 100% zoom. At Character scale, this maps to: every typographic shift is visually distinguishable. The Flagship FAILED density -- 107 lines of letter-spacing between 0.001em and 0.01em produced zero visible difference. 238 lines of sub-perceptual CSS = zero density.

**Character-scale density is binary:** a typographic shift is either perceptible (>= 0.025em letter-spacing, >= 2px font-size delta, >= 100 font-weight delta) or it is not. There is no gradient. Sub-perceptual shifts have zero density regardless of how many there are.

### Restraint at Character Scale

Restraint = not deploying everything available. At Character scale, restraint means: the typography vocabulary is FINITE and SMALL. The proven registers are:

1. **Display:** Instrument Serif, 2.5rem (page title only)
2. **Section:** Inter, 1.625rem, 600-700 weight
3. **Body:** Inter, 1rem, 400 weight, line-height 1.7
4. **Label/Meta:** Inter/JetBrains Mono, 0.75rem, 600, uppercase, letter-spacing 0.1em
5. **Code:** JetBrains Mono, 0.875rem, 400
6. **Detail:** Inter, 0.75rem, 400, secondary color

**Six registers.** Restraint at Character scale means: do NOT invent a 7th, 8th, or 9th register. Do NOT add intermediate font-sizes (e.g., 0.9rem, 1.1rem, 1.2rem). Do NOT add intermediate letter-spacing values (0.03em, 0.05em, 0.08em). The Flagship's 107 letter-spacing lines were an anti-restraint explosion -- dozens of micro-registers that no reader could distinguish.

### Spatial Confidence at Character Scale

Spatial confidence = typography feels intentional, not random. At Character scale, this means: register usage is PREDICTABLE. Every label in the page uses the same label register. Every code snippet uses the same code register. The reader learns the register once and recognizes it everywhere. This is the "2-zone DNA" principle (Mechanism #2) -- the label register repeats identically across callouts, code blocks, data tables, and panels.

**Character-scale spatial confidence = register consistency.** If labels vary (some 0.7rem, some 0.75rem, some 0.8rem; some uppercase, some not; some with letter-spacing, some without), spatial confidence collapses. The reader cannot learn the register because it keeps shifting.

---

## 4. Fractal Self-Similarity at Character Scale

### The Flagship Failure Pattern

The conventions brief states: "Scale 5 (Character) without perceptible Scale 2 (Page) produces orphaned variation -- the reader has no context for why the text is changing. The Flagship had per-zone letter-spacing but imperceptible zone backgrounds. Result: variation read as random, not intentional."

This is the core fractal insight at Character scale: **Character-scale variation is only interpretable when larger scales are working.** Letter-spacing that shifts from zone to zone ONLY reads as "deepening" if the zones themselves are perceptibly different (>= 15 RGB background delta). Without that context, the micro-typography shifts are contextless -- the reader literally cannot tell that they crossed a zone boundary, so the letter-spacing change appears random.

### Is Character-Scale Fractal Just "Don't Do It Unless Larger Scales Work"?

**Almost entirely yes.** The conventions brief makes Character scale conditional: "ONLY after Page scale verified." The dependency chain is:

```
Navigation → Page → Section → Component → Character
     (mandatory)        (recommended)     (optional, LAST)
```

And from the priority statement: "Two strong scales beat five weak ones."

Character-scale fractal is a DEPENDENCY GATE, not a creative opportunity. The gate is:

1. **Are Page-scale backgrounds perceptibly different?** (SC-09: >= 15 RGB delta at every boundary)
2. **Is Section-scale component density working?** (>= 2 component types per viewport)
3. **Is Component-scale label/body DNA working?** (Mechanism #2 deployed)

If all three pass, THEN Character-scale variation (letter-spacing shifts across zones, font-weight micro-variations) MIGHT be perceptible and might read as intentional. If ANY of the three fail, Character-scale variation is orphaned.

### What Fractal Echo Looks Like at Character Scale

The ONLY well-validated Character-scale fractal pattern is parametric echo -- components in dense zones have tighter internal typography than components in sparse zones:

```css
/* Dense zone: tighter label register */
.zone--dense .component__label {
  letter-spacing: 0.08em;  /* slightly tighter than default 0.1em */
  font-size: 0.7rem;       /* slightly smaller than default 0.75rem */
}

/* Sparse zone: standard label register */
.zone--sparse .component__label {
  letter-spacing: 0.1em;
  font-size: 0.75rem;
}
```

**CRITICAL:** Both values must be ABOVE perception thresholds: 0.08em > 0.025em floor (SC-14 PASSES), 0.7rem vs 0.75rem = ~0.8px delta which is BELOW the 2px font-size minimum (SC-11 threshold). This means even the most validated Character-scale parametric echo BARELY stays above perception thresholds and can easily fail.

---

## 5. Perception Thresholds: Character Scale as Danger Zone

### SC-14: The Anti-Abuse Gate

SC-14 is the ONLY gate designed specifically to prevent Character-scale failure. Its three sub-checks:

1. **No letter-spacing between 0 and 0.025em (exclusive):** Values in this range are always sub-perceptual. Either use >= 0.03em or use 0.
2. **No letter-spacing micro-clustering:** Adjacent sorted values must differ by >= 0.5px. This prevents 0.03em / 0.035em / 0.04em proliferation that creates imperceptible gradients.
3. **No intra-zone background deltas between 1-14 RGB:** Prevents the zone-background half of the Flagship failure.

### SC-11: Typography Zone Hierarchy

SC-11 requires: display-body delta >= 10px, body-detail delta >= 2px, 3+ distinct font-size clusters. This gate operates at the BOUNDARY between Component and Character scales -- it ensures the typographic hierarchy is perceptible.

### The CSS Budget Trap

The Flagship spent 238 lines of CSS (22% of total budget) on Character-scale work that was 100% imperceptible. Those 238 lines could have funded:

- 6 grid layouts (~25 lines each = 150 lines)
- 4 callout variants (~20 lines each = 80 lines)
- 3 responsive breakpoints (~25 lines each = 75 lines)

The opportunity cost of Character-scale CSS is massive. Every line spent on letter-spacing 0.01em is a line NOT spent on a visible grid, a visible callout, or a visible responsive behavior.

### The Budget Allocation Rule

From the conventions brief Section 3 (Richness): "For any CSS rule, imagine commenting it out. If removing it causes no visible change at 100% zoom, delete it permanently."

**Character-scale CSS has the HIGHEST rate of failing this test.** Font-size changes of 0.5px, letter-spacing changes of 0.005em, line-height changes of 0.05 -- all fail the commenting-out test. The ONLY Character-scale CSS that passes:

| Property | Minimum Perceptible Delta | Example |
|----------|--------------------------|---------|
| font-size | >= 2px | 16px to 14px (body to detail) |
| font-weight | >= 200 (100 at minimum) | 400 to 600 (body to label) |
| letter-spacing | >= 0.025em (~0.4px at 16px) | 0 to 0.1em (body to label) |
| text-transform | binary | normal to uppercase |
| font-family | categorical | Inter to JetBrains Mono |
| color | >= 30 RGB points | #1A1A1A to #666666 |

**All other Character-scale CSS changes are sub-perceptual.** Line-height changes below ~0.3 (e.g., 1.6 to 1.7), font-weight changes of 100 (400 to 500), letter-spacing below 0.025em -- all imperceptible.

---

## 6. What Would Enrichment Look Like?

### Option A: ADD to Character Scale

Adding capabilities would mean: new Character-scale mechanisms, new micro-typography patterns, new register vocabulary.

**This is the WRONG direction.** The Flagship failure was not insufficient Character-scale capability -- it was EXCESSIVE Character-scale ambition. The builder had access to letter-spacing, font-weight, line-height, and word-spacing micro-variations. They used them all. None were perceptible. Adding MORE Character-scale tools would increase the risk of the same failure.

### Option B: CONSTRAIN Character Scale Further

Constraining would mean: tighter budget caps, stricter perception gates, explicit danger warnings.

**This is the RIGHT direction.** Specific enrichments:

#### E1: Character Scale Budget Cap (NEW RULE)

**Current state:** No limit on how many CSS lines can be devoted to Character-scale properties.
**Proposed enrichment:** "No more than 5% of total CSS lines should target Character-scale properties (letter-spacing, word-spacing, line-height micro-variations). At 800+ CSS lines minimum, this means <= 40 lines of Character-scale CSS."

**Rationale:** The Flagship spent 238/1,085 lines (22%) on Character. CD-006 spent approximately 20/700 lines (3%) on Character. The productive range is 2-5%.

#### E2: Character Scale Dependency Enforcement (STRENGTHEN EXISTING)

**Current state:** "ONLY after Page scale verified" (conventions brief Section 5, column "Min Threshold").
**Proposed enrichment:** Make this a GATE, not a note. Before any letter-spacing or line-height micro-variation is written, the builder must have passing SC-09 (background deltas) and SC-11 (typography hierarchy). Character-scale CSS written before these gates pass is AUTOMATICALLY flagged for deletion.

**Rationale:** The dependency exists in text but is not enforced programmatically. SC-14 prevents sub-perceptual values, but it does not enforce the dependency -- a builder can write perceptible Character-scale CSS (letter-spacing 0.05em) even when Page-scale backgrounds are imperceptible (5 RGB delta).

#### E3: Character Scale Register Inventory (NEW DOCUMENTATION)

**Current state:** The 6 typographic registers are described across multiple files (tokens.css, mechanism-catalog.md Mechanism #2, conventions brief Section 8) but never enumerated as a closed set.
**Proposed enrichment:** Add an explicit "Character Scale Register Vocabulary" to the conventions brief:

```
CHARACTER SCALE REGISTERS (CLOSED SET -- do not invent new ones)

Register 1 - DISPLAY:  Instrument Serif, 2.5rem, 400
Register 2 - SECTION:  Inter, 1.625rem, 600
Register 3 - BODY:     Inter, 1rem, 400, line-height 1.7
Register 4 - LABEL:    Inter/JetBrains Mono, 0.75rem, 600, uppercase, ls 0.1em
Register 5 - CODE:     JetBrains Mono, 0.875rem, 400, line-height 1.5
Register 6 - DETAIL:   Inter, 0.75rem, 400, color #666666

If you need a 7th register, document WHY in the build log and
verify it passes the commenting-out test.
```

**Rationale:** The register vocabulary is implicit. Making it explicit and CLOSED prevents the Flagship failure pattern of proliferating micro-registers.

#### E4: Letter-Spacing Simplification (STRENGTHEN SC-14)

**Current state:** SC-14 prevents values below 0.025em and prevents micro-clustering within 0.5px.
**Proposed enrichment:** Simplify to a WHITELIST approach: "Letter-spacing values are restricted to: 0 (default), 0.05em (moderate), 0.1em (label register). Any other value requires build-log justification with a perceptibility test."

**Rationale:** The current gate prevents BAD values but allows unlimited GOOD values. A builder could use 0.03em, 0.04em, 0.05em, 0.06em, 0.07em, 0.08em, 0.09em, 0.1em -- 8 distinct values, all above the floor, all technically passing SC-14, but creating an imperceptible gradient. The whitelist approach restricts the vocabulary to 3 values. This is sufficient for all validated patterns.

---

## 7. Visual Quality: HIGH-LEVERAGE or LOW-LEVERAGE?

### Verdict: LOW-LEVERAGE. Character Scale is a Trap.

**Evidence from the experimental record:**

| Experiment | Character-Scale Investment | Result |
|------------|--------------------------|--------|
| Flagship | 238 lines (22% of CSS), 107 letter-spacing rules | FAILED -- 0% of Character CSS was perceptible |
| CD-006 | ~20 lines (3% of CSS), label register only | SUCCEEDED -- 39/40 score, crown jewel |
| Middle-tier | ~15 lines (3% of CSS), label register only | SUCCEEDED -- PA-05 DESIGNED (4/4) |

**The pattern is clear:** Pages that invest MINIMALLY in Character scale (label register + code register = ~15-20 lines) succeed. Pages that invest HEAVILY in Character scale (micro-typography gradients = 200+ lines) fail.

### Why Character Scale is Low-Leverage

1. **Single-channel limitation:** Character can only contribute to the Typographic channel. Multi-coherence requires 3+ channels. Character-scale enrichment can never independently create a multi-coherent boundary.

2. **Dependency chain:** Character is at the END of a 5-scale chain. It requires Navigation, Page, Section, and Component scales to be working first. By the time you reach Character scale, the page's quality is already determined by the 4 higher-leverage scales.

3. **Diminishing returns:** The perceptible range of Character-scale variation is extremely narrow. Font-size: 12px to 20px (8px range, 4 distinct clusters maximum). Letter-spacing: 0 to 0.1em (only 3 whitelist values). Font-weight: 400 and 600 (binary). Text-transform: normal and uppercase (binary). The total design space is ~4 x 3 x 2 x 2 = 48 combinations, but only 6 validated registers.

4. **CSS budget opportunity cost:** Lines spent on Character scale cannot be spent on grids, components, responsive breakpoints, or zone backgrounds. Every line of Character CSS competes with higher-leverage investments.

5. **The Flagship proved Character is a trap.** The most sophisticated Character-scale work ever attempted in this system was 100% imperceptible. The builder was skilled, the CSS was technically correct, and the result was invisible.

### When Character Scale IS Worth Investment

There is exactly ONE high-value Character-scale pattern: **the 2-zone component DNA label register** (Mechanism #2). This register (0.75rem, 600 weight, uppercase, letter-spacing 0.1em) creates immediate visual differentiation between labels and body text. It is deployed ~15-20 times across a typical page (callout labels, section meta-labels, table headers, figure captions). Each deployment is ~3 CSS lines. Total: ~45-60 lines of highly perceptible Character-scale CSS.

This pattern already exists, is already documented, and is already in the mechanism catalog. No enrichment needed.

---

## 8. Enrichment Recommendation Summary

| ID | Enrichment | Type | Priority | Rationale |
|----|-----------|------|----------|-----------|
| E1 | Character Scale Budget Cap (5% of CSS) | NEW CONSTRAINT | HIGH | Prevents CSS budget misallocation (THE Flagship failure) |
| E2 | Character Scale Dependency Gate | STRENGTHEN EXISTING | HIGH | Makes "ONLY after Page scale verified" programmatically enforced |
| E3 | Character Scale Register Inventory (6 registers, closed set) | NEW DOCUMENTATION | MEDIUM | Makes implicit vocabulary explicit and finite |
| E4 | Letter-Spacing Whitelist (0 / 0.05em / 0.1em) | STRENGTHEN SC-14 | MEDIUM | Prevents micro-clustering above the current floor |

### Where Each Enrichment Would Live

- **E1 (Budget Cap):** conventions-brief.md Section 5 (Fractal Echo) -- add a budget row to the scale table
- **E2 (Dependency Gate):** gate-runner.md -- add dependency check to SC-14 or create new micro-gate MG-0
- **E3 (Register Inventory):** conventions-brief.md Section 8 (CSS Vocabulary) -- add as "Character Scale Registers" subsection
- **E4 (Letter-Spacing Whitelist):** gate-runner.md SC-14 -- replace sub-check 2 (micro-clustering) with whitelist check

### What NOT to Enrich

- DO NOT add new Character-scale mechanisms to the mechanism catalog
- DO NOT add Character-scale multi-coherence rules (architecturally impossible)
- DO NOT add Character-scale parametric echo guidelines (too subtle, too risky)
- DO NOT add word-spacing to the vocabulary (no validated use, no mechanism references it)
- DO NOT relax SC-14 thresholds (they are already calibrated to the failure)

---

## 9. Cross-Concept Integration at Character Scale

### Character Scale and the Other 6 Concepts

| Concept | Relationship to Character Scale |
|---------|-------------------------------|
| **6 Channels** | Character = Typographic channel only. Single-channel scale. |
| **Multi-Coherence** | Character CANNOT create multi-coherent boundaries independently (< 3 channels). Can only ENHANCE existing multi-coherent boundaries. |
| **Anti-Scale** | Density is binary (perceptible or not). Restraint = finite register set. Spatial confidence = register consistency. All three point to LESS Character variation, not MORE. |
| **Fractal Self-Similarity** | Character is the TERMINAL node of the fractal chain. Dependent on all 4 higher scales. Parametric echo (register tightening in dense zones) is the only fractal pattern. |
| **Perception Thresholds** | Character has the NARROWEST perceptible range of any scale. SC-14 exists specifically to prevent Character-scale budget waste. This is the primary regulatory mechanism. |
| **Enrichment Direction** | CONSTRAIN, not ADD. Every proposed enrichment reduces the Character-scale design space rather than expanding it. |

### The One Sentence Summary

**Character scale is where CSS goes to die if you don't have disciplined restraint -- the only productive enrichment is further constraining an already-narrow design space to prevent the Flagship's $238-line imperceptibility trap.**

---

## 10. Open Questions

1. **Should E1 (budget cap) be a gate or advisory?** Making it a gate requires counting Character-scale CSS lines programmatically, which requires classifying CSS properties by scale -- nontrivial. Making it advisory relies on builder discipline. Given that binary rules achieve 100% compliance, gate is preferred if technically feasible.

2. **Is 5% the right cap for E1?** CD-006 was ~3%, Middle-tier was ~3%, Flagship was 22%. The productive range appears to be 2-5%. A 5% cap prevents Flagship-level excess while allowing 40 lines at 800-line minimum (sufficient for 6 registers x 5-6 properties each).

3. **Should E4 (whitelist) allow 0.05em?** The validated examples use 0 and 0.1em. 0.05em appears in the conventions brief multi-coherence example (Section 4: "letter-spacing tightens from 0.05em to 0.03em"). If 0.03em is the tightest in the example, should the whitelist be {0, 0.03em, 0.05em, 0.1em}? Four values is still highly constrained.

4. **Is the label register (Mechanism #2) the ONLY productive Character-scale pattern?** Or is there a second pattern hiding in the data that we have not identified? Review of all 18 mechanisms suggests no -- Mechanisms #11 (Typographic Scale Jumping) and #16 (Drop Cap) both operate at Component scale (element-level), not Character scale (inline-level).

---

*END OF ANALYSIS*
