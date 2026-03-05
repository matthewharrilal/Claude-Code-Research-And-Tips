# Score Drivers Analysis: What Prevents 5/5 and Path to DESIGNED (4/4)

**Analyst:** Opus 4.6
**Date:** 2026-02-23
**Page:** Gas Town VA Pipeline Build (`output.html`)
**Overall Score:** 175/200 (87.5%)
**PA-05:** 3/4 COMPOSED

---

## Dimension Scores Overview

| Dim | Auditor | Score | Gap to 25 |
|-----|---------|-------|-----------|
| A | Soul & Identity | 23/25 | -2 |
| B | Perception Thresholds | 22/25 | -3 |
| C | Multi-Coherence | 22/25 | -3 |
| D | Metaphor + Richness | 20/25 | -5 |
| E | Content-Form Fit | 24/25 | -1 |
| F | Responsive + A11y | 22/25 | -3 |
| G | Typography | 23/25 | -2 |
| H | Spatial Composition | 19/25 | -6 |
| I | Integrative (PA-05) | 3/4 | -1 |

**Total lost points: 25** (of 200). The 25 lost points distribute across 18 specific sub-question deductions. Below I analyze each one.

---

## AUDITOR A: Soul & Identity (23/25, -2)

### PA-03: Warm Palette — 3/5 (-2)

**Auditor's own words:**
> "Pure white background (#FFFFFF) used for Zone 3 (factory-floor)... Using pure white as a zone background breaks the warm palette."
> "#4A90D9 is a decidedly cold blue... #7C3AED appears as a principle block border color... these introduce cold tones into an otherwise warm system."

**Root cause:** Builder used `#FFFFFF` for the Factory Floor zone and `#4A90D9`/`#7C3AED` as accent colors. The pure white is a RECIPE GAP: the recipe talks about zone backgrounds extensively but never explicitly says "never use pure white." The cold accents are a BUILDER COMPETENCE issue: warmer alternatives exist (warm off-white `#FDFBF8` for Z3, warm blue `#5B8A9B` or teal `#2A7D7D` for info callouts).

**Concrete CSS fix:**
```css
/* Fix Z3 background - warm off-white instead of pure white */
--factory-floor: #FDFBF8;  /* was #FFFFFF */

/* Fix cold blue to warm teal */
--accent-blue: #5B8A9B;  /* was #4A90D9 */

/* Fix cold purple to warm plum */
--accent-purple: #7D5B8A;  /* was #7C3AED */
```

**Recipe enrichment needed:**
- Add to Phase 2 (Step 2.1): "CALIBRATION: Pure white (#FFFFFF) and cold blues (#0000FF-range, #4A90D9-range) violate warm palette. Even the densest zone should use warm off-white (#FDFBF8 or similar). For info/distinction accents, use warm-shifted alternatives: warm teal (#5B8A9B), warm plum (#7D5B8A)."

**Classification:** 50% recipe gap (no explicit warm-palette calibration values), 50% builder competence (builder knows the palette is warm but chose pure white for density signaling).

---

## AUDITOR B: Perception Thresholds (22/25, -3)

### PA-07: Zone Boundaries Perceptible — 4/5 (-1)

**Auditor's own words:**
> "Z4→Z5 boundary (17 RGB delta) is the weakest link... sits at the low end of 'effortlessly perceptible.'"

**Root cause:** The Archive (#EDE6DA) to Output (#F8F3EB) boundary has only a 17 RGB delta, barely above the 15-point floor. The recipe says "15 is the floor, not the target" but doesn't provide per-boundary minimum recommendations.

**Concrete CSS fix:**
```css
/* Push Z5 lighter to increase delta from Z4 */
--factory-output: #FDF7ED;  /* was #F8F3EB — delta now ~25 from Z4 */
```
Or alternatively, push Z4 darker:
```css
--factory-archive: #E5DCCE;  /* was #EDE6DA — delta now ~25 from Z5 */
```

**Recipe enrichment needed:**
- Add to Step 2.1: "When choosing 6 zone backgrounds, map them on a gradient and ensure EVERY adjacent pair has >= 25 RGB delta (not just the minimum 15). The 15-point floor is for edge cases; the compositional target is 25-50 per boundary."

**Classification:** Recipe gap. The recipe says "15 is the floor, not the target" but doesn't say what the target IS. Builder hit the floor at one boundary.

---

### PA-09: Spacing Deliberate — 4/5 (-1)

**Auditor's own words:**
> "The Z4→Z5 transition feeling slightly loose compared to the tighter Z2→Z3→Z4 sequence. The spacing rationale weakens slightly in the bottom third."

**Root cause:** Zones 4 and 5 both use identical padding (40px/40px) and paragraph margins (20px). The density arc flattens. This is the same Z4→Z5 blending problem showing up in a different dimension.

**Concrete CSS fix:**
```css
/* Differentiate Z5 spacing from Z4 */
.zone-output {
  padding: var(--space-12) 0 var(--space-10);  /* was space-10 / space-10 */
}
.zone-output p {
  margin-bottom: var(--space-6);  /* was space-5, now 24px vs Z4's 20px */
}
```

**Recipe enrichment needed:**
- Add to Step 3.2 (Deploy zone heights): "No two adjacent zones should share BOTH the same padding values AND the same paragraph margins. If zone backgrounds are similar, spacing differentiation must be stronger."

**Classification:** Recipe gap (no anti-duplication rule for adjacent zone spacing).

---

### PA-11: Borders Communicate Hierarchy — 4/5 (-1)

**Auditor's own words:**
> "Z4→Z5 boundary uses only a 1px (worker-level) border, while Z2→Z3 gets 4px... Z4→Z5 feel like an internal boundary rather than a zone transition."

**Root cause:** The builder used `border-worker` (1px) at the Z4→Z5 boundary. Every other major zone boundary uses either `border-town` (4px) or `border-rig` (3px). Combined with the weak background delta, this boundary is doubly under-signaled.

**Concrete CSS fix:**
```css
.zone-output {
  border-top: var(--border-rig) solid var(--color-border);  /* was border-worker */
}
```

**Recipe enrichment needed:**
- Add to Step 2.8 (Select transition type vocabulary): "RULE: Every zone boundary must use border-rig (3px) or border-town (4px). border-worker (1px) is for INTERNAL zone dividers only, never zone transitions."

**Classification:** Recipe gap. The recipe defines the 3-tier border system but doesn't specify minimum weight for zone boundaries.

---

## AUDITOR C: Multi-Coherence (22/25, -3)

### PA-16: Distinct Zone Count — 4/5 (-1)

**Auditor's own words:**
> "Zones 4 and 5 are somewhat similar in visual weight when scrolling quickly at 1440px — the Zone 4→5 background shift (#EDE6DA → #F8F3EB) is the subtlest boundary on the page."

**Root cause:** Same Z4→Z5 blending problem. Background (17 delta), border (1px), spacing (identical) all converge to make this boundary blur.

**Concrete CSS fix:** Same as PA-07 + PA-09 + PA-11 fixes above (increase background delta, upgrade border weight, differentiate spacing).

**Recipe enrichment needed:** Already covered above. The Z4→Z5 boundary is the single recurring defect across 4 auditors.

**Classification:** Recipe gap (no minimum boundary strength specification).

---

### PA-18: Zone-Adapted Components — 4/5 (-1)

**Auditor's own words:**
> "While adaptation is present and intentional, the blockquote styling appears uniform across zones, and the base paragraph styling (max-width 62ch) is shared across most zones without variation."

**Root cause:** Callouts, tables, diagrams, and selection colors all adapt per zone. But blockquotes and base paragraphs do not. The builder adapted 4/6 reusable component types but missed 2.

**Concrete CSS fix:**
```css
/* Zone-adapt blockquotes */
.zone-intake blockquote {
  padding: var(--space-6) var(--space-8);
}
.zone-floor blockquote {
  padding: var(--space-3) var(--space-5);
  border-left-width: 5px;
}
.zone-dispatch blockquote {
  border-left-color: var(--accent-green);
  background: rgba(74, 157, 107, 0.03);
}

/* Zone-adapt paragraph max-width */
.zone-intake p { max-width: 55ch; }   /* narrower for manifesto reading */
.zone-floor p { max-width: 65ch; }    /* wider for reference content */
/* other zones keep 62ch default */
```

**Recipe enrichment needed:**
- Add to Step 2.4 (callout variant semantics): Expand scope to "COMPONENT VARIANT SEMANTICS" covering all reusable components: callouts, blockquotes, tables, lists. "RULE: If a component appears in 3+ zones, it must have at least 1 property that varies per zone (padding, border-width, border-color, or max-width)."

**Classification:** 70% recipe gap (recipe only specifies callout adaptation, not blockquote/paragraph adaptation), 30% builder competence (builder could have extrapolated from the callout adaptation pattern).

---

### PA-19: Crescendo Effect — 4/5 (-1)

**Auditor's own words:**
> "The sustain phase (Zones 4-5) could feel slightly flat if the inversion-block is missed or scrolled past quickly... At scanning speed, the page can feel like it peaks at Zone 3 and then gradually winds down rather than building to a second peak."

**Root cause:** The inversion block (D-04 surprise) is the only structural event in the second half. Before and after it, the page returns to the uniform cream-content-cream pattern. The surprise depends on the reader pausing at exactly the right moment.

**Concrete CSS fix:**
```css
/* Make the inversion block structurally unavoidable */
.inversion-block {
  margin: var(--space-12) calc(-1 * var(--space-6));  /* was space-8 — bigger vertical gap */
  padding: var(--space-16) var(--space-8);  /* was space-10 — taller, more commanding */
  min-height: 60vh;  /* ensures it dominates the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

**Recipe enrichment needed:**
- Add to D-04 (The Second-Half Moment): "The surprise moment must be STRUCTURALLY UNAVOIDABLE — it should dominate the viewport when scrolled to. Use min-height: 50-60vh, generous vertical padding, or viewport-relative sizing. A surprise that can be scrolled past at speed is not a surprise."

**Classification:** Recipe gap. D-04 says "create a moment that breaks the established pattern" but doesn't specify that it must be spatially dominant.

---

## AUDITOR D: Metaphor + Richness (20/25, -5)

### PA-20: Metaphor Identifiable — 4/5 (-1)

**Auditor's own words:**
> "The metaphor is PARTIALLY structural, partially announced. The zone labels do significant work — 'THE INTAKE', 'THE FACTORY FLOOR', 'THE DISPATCH' are textual, not purely visual. If you replaced those labels with generic section names, the factory feel would weaken."
> "The Instrument Serif italic headings are beautiful but more 'editorial' than 'industrial.'"

**Root cause:** The metaphor is carried ~60% by CSS structure and ~40% by text labels. A fully structural metaphor would be recognizable with labels removed.

**Concrete CSS fix:**
```css
/* Strengthen industrial character — heavier heading treatment */
.zone-floor h2 {
  font-family: var(--font-body);  /* Inter (sans-serif) for Z3 only */
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Add industrial border patterns at zone entries */
.zone-floor::before {
  content: '';
  display: block;
  height: 2px;
  background: repeating-linear-gradient(
    90deg, var(--color-text) 0, var(--color-text) 8px, transparent 8px, transparent 12px
  );
  margin-bottom: var(--space-4);
}
```

**Caution:** The serif italic IS part of the soul identity. Changing it zone-by-zone creates tension with PA-04 (Font Trinity). The better approach is to make the STRUCTURAL elements (borders, spacing, backgrounds) do more work so the labels become redundant rather than necessary. The dashed border pattern above is a non-decorative industrial signal.

**Recipe enrichment needed:**
- Add to Step 2.3 (structural metaphor vocabulary): "TEST: Can you describe the metaphor by looking at the page with text content replaced by gray boxes? If the answer is 'generic technical document,' the metaphor is announced, not structural. The metaphor must be carried by CSS properties (border patterns, color progressions, density contrasts, spatial rhythms), not by text labels."

**Classification:** Brief gap (the brief should specify content that naturally creates structural metaphor cues) + recipe gap (no structural-vs-announced test).

---

### PA-21: Extends Beyond Labels — 4/5 (-1)

**Auditor's own words:**
> "The blockquote styling (purple left border, italic serif) is more 'literary journal' than 'factory bulletin board.'"
> "The drop-cap in Zone 1 is an editorial/manuscript convention, not an industrial one."

**Root cause:** Two components (blockquotes and drop-cap) break the industrial idiom. They are beautiful but belong to a different visual language (editorial/literary rather than industrial).

**Concrete CSS fix:**
```css
/* Industrial blockquote — factory bulletin board style */
blockquote {
  border-left: var(--border-town) solid var(--factory-steel);  /* was accent-purple */
  padding: var(--space-4) var(--space-6);
  background: rgba(68, 68, 68, 0.04);  /* steel-tinted, not purple-tinted */
}

blockquote p {
  font-family: var(--font-body);  /* Inter, not Instrument Serif */
  font-size: var(--text-base);
  font-style: normal;  /* no italic */
  font-weight: 600;
}

/* Industrial drop-cap — stencil style */
.zone-intake .drop-cap::first-letter {
  font-family: var(--font-body);  /* Inter, not Instrument Serif */
  font-weight: 700;
  font-size: 4em;  /* bigger, bolder */
  color: var(--color-primary);
  background: var(--color-text);
  color: var(--color-primary);
  padding: 4px 8px;
  margin-right: 8px;
  line-height: 1;
}
```

**Caution:** This conflicts with the soul constraint of "Instrument Serif for display." The tension is real: soul says editorial serif; metaphor says industrial. The resolution should be in the BRIEF: if the metaphor is "factory," the brief should flag which soul elements to preserve and which to modulate. Blockquote and drop-cap are the lowest-stakes places to modulate.

**Recipe enrichment needed:**
- Add to Phase 4, D-03 (The Signing Frame): "Every component should be consistent with the structural metaphor. If the metaphor is industrial, blockquotes should read as factory bulletins, not literary journals. If the metaphor is editorial, drop-caps can be ornate. AUDIT: review each component type and ask 'does this belong in a [metaphor]?'"

**Classification:** Brief gap (brief should specify metaphor-component alignment) + recipe gap (no component-metaphor consistency audit step).

---

### PA-22: Mechanism Count — 4/5 (-1)

**Auditor's own words:**
> "17-18 mechanisms counted... solidly in the Middle-to-Ceiling range."
> Score: 4/5

**Root cause:** 17-18 mechanisms is strong but the auditor reserves 5/5 for 20+ or exceptionally varied mechanisms. The page hits the low end of Flagship count without reaching the variety that would make each one feel unique.

**Concrete CSS fix — add 2-3 more mechanisms:**
```css
/* Mechanism 19: Progress indicator at zone boundaries */
.zone-workshop::after,
.zone-floor::after,
.zone-archive::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: var(--color-primary);
  margin: var(--space-6) 0 0;
}

/* Mechanism 20: Numbered section headings via counter */
main { counter-reset: zone-count; }
.section-indicator { counter-increment: zone-count; }
.section-indicator::before {
  content: counter(zone-count, decimal-leading-zero) " — ";
  color: var(--color-primary);
  font-weight: 600;
}

/* Mechanism 21: Zone-specific list markers */
.zone-archive .prereq-list li::before {
  background: var(--accent-amber);  /* amber squares for archive zone */
}
.zone-dispatch .prereq-list li::before {
  background: var(--accent-green);  /* green squares for dispatch zone */
}
```

**Recipe enrichment needed:**
- Add to Step 3.1 (6-channel framework): "TARGET: 18-22 distinct mechanisms. Count them after deployment. If under 18, add mechanisms that REINFORCE the metaphor (zone-specific markers, boundary indicators, numbered sections, pull-quote treatments, list variants)."

**Classification:** Builder competence (builder deployed enough mechanisms for COMPOSED but stopped short of DESIGNED variety).

---

### PA-23: Rich or Flat — 4/5 (-1)

**Auditor's own words:**
> "The role card grid, while good, uses the same visual treatment for all 8 cards."
> "The zones all use the same structural template: zone indicator -> h2 -> content."
> "Some of the comparison tables are visually interchangeable."

**Root cause:** Within-zone structural variety is limited. Every zone follows the same indicator→heading→content pattern. Tables look alike across zones. Role cards are uniform.

**Concrete CSS fix:**
```css
/* Vary role cards by level tier */
.role-card--town {
  background: rgba(26, 26, 26, 0.03);  /* slightly darker, authority */
}
.role-card--rig {
  background: var(--factory-intake);  /* standard */
}
.role-card--human {
  background: rgba(232, 48, 37, 0.03);  /* already exists, good */
}

/* Vary zone entry patterns */
.zone-workshop .section-indicator {
  border-bottom: var(--border-rig) solid var(--color-border);  /* heavier indicator border */
}
.zone-floor .section-indicator {
  background: var(--color-text);
  color: var(--color-background);
  padding: var(--space-2) var(--space-4);
  border-bottom: none;
  display: inline-block;
}
```

**Recipe enrichment needed:**
- Add to Phase 5 (Self-Evaluate): "SKELETON VARIETY TEST: Does every zone open the same way (indicator → heading → prose → component)? If yes, vary at least 2 zones: one might open with a full-width diagram, another with a blockquote, another with a numbered list. The zone indicator pattern itself should vary — dark-on-light in some zones, inverted in others."

**Classification:** Recipe gap (no structural variety audit in self-evaluation phase).

---

### PA-24: Compositional Surprise — 4/5 (-1)

**Auditor's own words:**
> "The surprises are concentrated (drop-cap at start, inversion at ~70%, decision flow near end). The middle sections (Zones 2-4) are well-crafted but more predictable."
> "No color surprise."

**Root cause:** The middle of the page is surprise-free. Zones 2-4 are well-built but follow predictable rhythms. The inversion block is the only large-scale surprise.

**Concrete CSS fix:**
```css
/* Color surprise: amber inversion for Zone 4 heading area */
.zone-archive h2 {
  background: var(--accent-amber);
  color: var(--color-background);
  padding: var(--space-3) var(--space-5);
  display: inline-block;
  margin-left: calc(-1 * var(--space-5));
}

/* Layout rupture: Zone 2 uses a sidebar-content layout */
.workshop-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-6);
}
.workshop-sidebar {
  border-right: var(--border-rig) solid var(--color-border);
  padding-right: var(--space-4);
}
```

**Recipe enrichment needed:**
- Add to D-04: "DISTRIBUTION: Surprises should be distributed, not clustered. Place at least 1 micro-surprise in the FIRST HALF (before the midpoint) and 1 macro-surprise in the SECOND HALF. Macro-surprise: layout inversion, color reversal, viewport-height section. Micro-surprise: color accent on a heading, grid break, sidebar appearance, numbered display-type."

**Classification:** Recipe gap (D-04 says "second half" only; should specify distribution).

---

## AUDITOR E: Content-Form Fit (24/25, -1)

### PA-27: Density Matches Content — 4/5 (-1)

**Auditor's own words:**
> "Zone 2 (Workshop) feels slightly too airy for its content density... contains the core mental model, TWO comparison diagrams, a comparison table, two blockquotes, and a callout box. The zone's padding and spacing treat it like a 'reading' zone when it is actually a 'comprehension' zone."

**Root cause:** Zone 2 has moderate content but generous spacing. The recipe specifies a crescendo arc (sparse→moderate→dense) but the builder interpreted "moderate" too generously for a zone with heavy conceptual content.

**Concrete CSS fix:**
```css
.zone-workshop {
  padding: var(--space-10) 0 var(--space-8);  /* was space-12 / space-12 — slightly tighter */
}
.zone-workshop p {
  margin-bottom: var(--space-4);  /* was space-5 — compress paragraph rhythm */
}
```

**Recipe enrichment needed:**
- Add to D-01 (Content-Register Reading): "MODERATE zones with high CONCEPTUAL density (multiple diagrams, tables, arguments) should use the TIGHTER end of the moderate range (paragraph margins closer to 16px than 24px). Reserve the looser end for moderate zones with pure narrative content."

**Classification:** Recipe gap (D-01 doesn't distinguish conceptual vs narrative within the MODERATE register).

---

## AUDITOR F: Responsive + Accessibility (22/25, -3)

### PA-30: Works at 768px — 4/5 (-1)

**Auditor's own words:**
> "Only ONE breakpoint (768px). There is no intermediate breakpoint for tablet (e.g., 1024px)."
> "No explicit table adaptation for narrow screens."

**Root cause:** Single breakpoint strategy. At 1024px the page looks identical to 1440px. Tables rely on horizontal scroll rather than card-layout fallback.

**Concrete CSS fix:**
```css
@media (max-width: 1024px) {
  .role-grid {
    grid-template-columns: 1fr 1fr;  /* maintain 2-col at tablet */
  }
  .header-stats {
    gap: var(--space-4);  /* tighter stat spacing at tablet */
  }
}

@media (max-width: 768px) {
  /* Table card fallback for narrow screens */
  .comparison-table thead,
  .dispatch-comparison thead {
    display: none;
  }
  .comparison-table tr,
  .dispatch-comparison tr {
    display: block;
    margin-bottom: var(--space-4);
    border: var(--border-worker) solid var(--color-border);
    padding: var(--space-3);
  }
  .comparison-table td,
  .dispatch-comparison td {
    display: block;
    padding: var(--space-1) var(--space-2);
    border: none;
  }
  .comparison-table td::before,
  .dispatch-comparison td::before {
    content: attr(data-label);
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-secondary);
    display: block;
  }
}
```

**Recipe enrichment needed:**
- Add to Phase 5 (output targets): "RESPONSIVE: Minimum 2 breakpoints (768px AND 1024px). At 768px: grids collapse to 1-col, tables use card layout with data-label attributes, diagrams reduce font size. At 1024px: adjust grid column counts, tighten header spacing."

**Classification:** Recipe gap (recipe says "Responsive (1440px + 768px)" but doesn't specify minimum breakpoint count).

---

### PA-32: Code Blocks at Narrow — 4/5 (-1)

**Auditor's own words:**
> "The hierarchy diagram (Role Architecture with box-drawing characters) is particularly wide. At 768px with 11px font, this is near the legibility threshold."
> "No word-wrap: break-word or pre-wrap for code blocks at narrow viewports."

**Root cause:** ASCII art diagrams are inherently wide. No wrapping strategy at narrow widths.

**Concrete CSS fix:**
```css
@media (max-width: 768px) {
  .hierarchy-diagram,
  .comm-flow,
  .ascii-diagram {
    font-size: 10px;  /* was 11px */
    padding: var(--space-3);
    line-height: 1.3;
  }

  pre {
    white-space: pre-wrap;
    word-break: break-word;
  }
}
```

**Recipe enrichment needed:**
- Add to responsive section: "ASCII diagrams wider than 60 characters need `white-space: pre-wrap` at 768px. Alternative: provide a simplified narrow-width version using `<picture>` or media queries."

**Classification:** Builder competence (standard responsive practice to handle wide pre-formatted content).

---

### PA-33: Header Adaptation — 4/5 (-1)

**Auditor's own words:**
> "The stat items stack vertically at 768px but still use the same compact spacing... A more intentional responsive treatment might use a 2-column grid."
> "No responsive padding adjustment for the header specifically."

**Root cause:** Header stats stacking is functional but not elegant. No padding reduction at narrow widths.

**Concrete CSS fix:**
```css
@media (max-width: 768px) {
  .header-inner {
    padding: var(--space-8) var(--space-6) var(--space-6);  /* reduce vertical padding */
  }
  .header-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* 2-col grid instead of vertical stack */
    gap: var(--space-3);
  }
  .header-meta {
    font-size: 11px;  /* slightly larger for legibility */
  }
}
```

**Recipe enrichment needed:**
- Add to Step 3.4 (build order): "Header stats responsive: at 768px, use 2-col grid (not vertical stack). Reduce header vertical padding proportionally."

**Classification:** Builder competence (standard responsive refinement).

---

## AUDITOR G: Typography (23/25, -2)

### PA-36: Hierarchy Communication — 4/5 (-1)

**Auditor's own words:**
> "H2 repetition across Z2-Z6: Once you leave Z1, every zone's H2 is the same 32px italic serif. There is no zone-to-zone typographic differentiation at the H2 level."
> "H3 to H4 jump is small perceptually: 24px italic serif to 20px bold sans — the size difference is only 4px."

**Root cause:** Zone headings are undifferentiated. The H3→H4 size step is too small (4px).

**Concrete CSS fix:**
```css
/* Differentiate H2 across zones */
.zone-floor h2 {
  font-size: var(--text-h1);  /* 2.5rem instead of 2rem — Factory Floor gets authority */
  letter-spacing: 0.05em;  /* wider tracking for industrial weight */
}
.zone-dispatch h2 {
  letter-spacing: 0.04em;  /* slightly different from other zones */
  border-bottom: var(--border-worker) solid var(--color-border);
  padding-bottom: var(--space-2);
}

/* Increase H3-H4 gap */
.zone-floor h4 {
  font-size: var(--text-h3);  /* bump to 1.5rem from 1.25rem */
  font-weight: 500;  /* lighter than 600 to differentiate from H3 by weight not just family */
}
```

Actually, the cleaner fix for H3→H4:
```css
:root {
  --text-h4: 1.375rem;  /* was 1.25rem — now 22px, giving 6px gap from H3's 24px instead of 4px */
}
```

**Recipe enrichment needed:**
- Add to Step 2.2 (type scale values): "RULE: Adjacent heading levels must differ by >= 6px or by family switch. H2 should vary by zone: at minimum, the peak-density zone's H2 should be 1 step larger than other zones' H2 (mirroring how Z1 already gets a bigger H2)."

**Classification:** Recipe gap (recipe doesn't specify per-zone H2 variation or minimum heading size deltas).

---

### PA-39: Drop Cap / Special Moments — 4/5 (-1)

**Auditor's own words:**
> "The 3.5em size is adequate but not dramatically oversized... The margin-right of 0.1em is tight — the body text crowds the drop cap slightly."
> "A 5/5 would have, for example: a pull quote with dramatically oversized type, a numbered list with display-size numerals, or a first-line small-caps treatment."

**Root cause:** The drop cap is functional but not spectacular. There is only ONE dedicated typographic moment (the drop cap); everything else is structural treatment.

**Concrete CSS fix:**
```css
/* Enlarge drop cap to spectacle level */
.zone-intake .drop-cap::first-letter {
  font-size: 5em;  /* was 3.5em */
  margin-right: 0.15em;  /* was 0.1em — more breathing room */
  margin-top: 6px;
}

/* Add a second typographic moment: pull quote in Zone 2 */
.zone-workshop blockquote.featured {
  font-size: var(--text-h1);  /* 2.5rem — dramatically oversized */
  line-height: 1.2;
  border-left: none;
  border-top: var(--border-town) solid var(--color-primary);
  border-bottom: var(--border-town) solid var(--color-primary);
  padding: var(--space-8) 0;
  margin: var(--space-10) 0;
  text-align: center;
  max-width: none;
}

/* Add first-line small-caps in closing section */
.closing-section p::first-line {
  font-variant: small-caps;
  letter-spacing: 0.05em;
}
```

**Recipe enrichment needed:**
- Add to D-07 (Edge Intentionality): "TYPOGRAPHIC MOMENTS: Deploy at least 2 special typographic events beyond standard hierarchy. Options: oversized drop cap (5em+), display-size pull quote, first-line small-caps, numbered headings with display-size numerals, dramatic letter-spacing on a key phrase. These moments should be distributed across the page, not clustered."

**Classification:** Recipe gap (D-07 lists delight techniques but doesn't specify typographic moment count or scale).

---

## AUDITOR H: Spatial Composition (19/25, -6)

This is the weakest dimension. 3 questions scored below 5.

### PA-40: Intra-Zone Consistency — 4/5 (-1)

**Auditor's own words:**
> "Zone 2 (Workshop) uses --space-5 (20px) for paragraph margins while Zone 4 (Archive) also uses --space-5 -- these zones have different density intentions but identical paragraph rhythm."

**Root cause:** Two zones with "moderate" density share identical spacing values, blurring their spatial identity.

**Concrete CSS fix:**
```css
/* Differentiate Z4 paragraph spacing from Z2 */
.zone-archive p {
  margin-bottom: var(--space-6);  /* 24px, was space-5 (20px) — archive breathes more */
}
```

**Recipe enrichment needed:**
- Add to Step 3.4: "ANTI-DUPLICATION: No two adjacent zones may share identical paragraph margins. Even zones with the same density label (both 'moderate') must differ by at least 1 step on the spacing scale."

**Classification:** Recipe gap (no adjacent-zone spacing deduplication rule).

---

### PA-42: Awkward Gaps / Crowding — 3/5 (-2)

**THE WEAKEST SINGLE SCORE.** Three distinct issues flagged:

**Issue 1: Post-footer void**

Auditor's own words:
> "There is a substantial empty cream area below the footer. This registers as an unintentional void — approximately 200-300px of blank background color trailing after the footer's dark block."

**Root cause:** The `body` background color (#FEF9F5 warm cream) extends below the footer. The footer has a fixed-height content area but doesn't extend to the page bottom.

**Concrete CSS fix:**
```css
/* Eliminate post-footer void */
html {
  background: var(--color-text);  /* match footer dark bg */
}
body {
  background: var(--color-background);
}
footer {
  /* Already dark — html bg now matches it, no trailing cream */
}
```

Or more explicitly:
```css
footer {
  margin-bottom: 0;
  /* ensure no trailing whitespace */
}
html, body {
  min-height: 100%;
}
html {
  background: var(--color-text);  /* dark — matches footer */
}
```

**Issue 2: Inversion block margins**

Auditor's own words:
> "The negative horizontal margin creates edge-to-edge dark while the vertical margin (32px) above and below is relatively modest for such a dramatic visual break. The transition feels abrupt rather than earned at the top."

**Concrete CSS fix:**
```css
.inversion-block {
  margin-top: var(--space-16);  /* was space-8 (32px) — now 64px, earned approach */
  margin-bottom: var(--space-10);  /* was space-8 (32px) — now 40px, measured exit */
}
```

**Issue 3: Zone 3 dark block crowding**

Auditor's own words:
> "The cumulative stacking of dark-background elements (hierarchy diagram + code blocks + comm-flow) creates visually heavy sequences where dark blocks are separated by only 16-20px of white."

**Concrete CSS fix:**
```css
.zone-floor .hierarchy-diagram,
.zone-floor .comm-flow,
.zone-floor pre,
.zone-floor .code-snippet {
  margin: var(--space-8) 0;  /* was space-5/space-6 — increase from 20-24px to 32px */
}
```

**Recipe enrichment needed:**
- Add to D-06 (Negative Space as Shape): "POST-FOOTER: Set html background to match footer color. No trailing whitespace after the footer. DARK BLOCK STACKING: When 2+ dark-background elements appear consecutively, increase spacing to >= 32px between them. SURPRISE BLOCK ENTRY: The inversion block or any dramatic visual event needs >= 64px of clear space above it to feel 'earned' rather than abrupt."

**Classification:** 50% recipe gap (no html-bg/footer-bg matching rule, no dark-block stacking rule), 50% builder competence (post-footer void is a common oversight).

---

### PA-43: Visual Rhythm — 4/5 (-1)

**Auditor's own words:**
> "The Archive-to-Output-to-Dispatch sequence (Zones 4-5-6) all feel relatively similar in density -- the rhythm flattens in the second half."

**Root cause:** Same Z4/Z5 blending problem, compounded by Z6 also being "moderate." The first half has strong contrast (sparse→moderate→dense); the second half flatlines (moderate→moderate→moderate).

**Concrete CSS fix:** Apply all Z4/Z5 differentiation fixes above, plus:
```css
/* Make Z6 dispatch feel distinct — tighter, more operational */
.zone-dispatch {
  padding: var(--space-6) 0 var(--space-12);  /* was space-8 — tighter entry, earned exit */
}
.zone-dispatch p {
  font-size: 15px;  /* match Z3 density — dispatch is also operational */
  line-height: 1.65;
}
```

**Recipe enrichment needed:**
- Add to Step 3.3 (visual density arc): "THE SECOND-HALF TRAP: After peak density (usually Zone 3), the page must NOT flatline into uniform moderate zones. Plan a SECONDARY contrast: either Z5 becomes sparse (earned breathing) while Z6 tightens for operational content, or Z4 stays moderate but Z5 has the inversion surprise that resets density expectations."

**Classification:** Recipe gap (density arc is specified for first half but lacks guidance for second-half contrast).

---

### PA-44: Intentional Negative Space — 4/5 (-1)

**Auditor's own words:**
> "Post-footer void... does not appear to serve a framing purpose."
> "Between Zones 4 and 5: the transition space feels undersignaled."

**Root cause:** Same issues as PA-42 (post-footer void) and PA-07/11 (Z4→Z5 undersignaled). These are the same recurring defects.

**Concrete CSS fix:** Already covered above.

**Classification:** Recipe gap (same as above).

---

## AUDITOR I: Integrative — PA-05 (3/4 COMPOSED, -1)

### PA-05: COMPOSED → DESIGNED

**Auditor's own words:**

1. > "Background deltas are technically passing but perceptually subtle... Zones 1, 4, and 5 all read as 'warm cream variants.'"

2. > "The density arc is correct but not dramatic enough."

3. > "No spatial surprise beyond the inversion block. The page reads as: header → 6 zones in stack → footer."

4. > "Typography variation is present but restrained... body text stays uniform."

5. > "Some inline styles in the HTML suggest the builder reached for quick customization rather than systematic component variants."

---

## PATH TO 4/4 DESIGNED

The gap between COMPOSED (3/4) and DESIGNED (4/4) can be characterized as: **the page is varied but not dramatic, adapted but not inevitable, competent but not surprising.**

### The 5 Specific Deltas

| # | Delta | Current State | DESIGNED Target |
|---|-------|---------------|-----------------|
| 1 | Background differentiation | Z1/Z4/Z5 blur (10-17 RGB) | Every adjacent pair >= 25 RGB, viscerally distinct |
| 2 | Density arc drama | Moderate→Dense→Moderate→Moderate→Moderate | Sparse→Moderate→DENSE→Breathing→SURPRISE→Dense→Earned-release |
| 3 | Spatial layout variety | 100% single-column stack (except role grid) | 2-3 layout variations: sidebar, asymmetric, full-bleed |
| 4 | Typographic spectacle | Functional drop cap, uniform H2s | 5em drop cap, zone-inflected H2s, display-size pull quote, small-caps |
| 5 | Second-half rhythm | Flatlines after Z3 until inversion | Each zone entry has distinct structural signal; inversion is 60vh |

### Minimum Changes for DESIGNED

If limited to 5 CSS changes, these would have maximum score impact:

1. **Fix Z4→Z5 boundary** (fixes PA-07, PA-09, PA-11, PA-16, PA-42, PA-44 — 6 deductions): Increase background delta to >=25, upgrade border to 3px, differentiate spacing.

2. **Eliminate post-footer void** (fixes PA-42, PA-44 — 2 deductions): Set `html { background: var(--color-text); }`

3. **Warm the palette** (fixes PA-03 — 2 deductions): Replace `#FFFFFF` with `#FDFBF8`, `#4A90D9` with `#5B8A9B`, `#7C3AED` with `#7D5B8A`.

4. **Make inversion block structurally unavoidable** (fixes PA-19, PA-43 — 2 deductions): Add `min-height: 60vh`, increase top margin to 64px.

5. **Zone-inflect H2s** (fixes PA-36 — 1 deduction): Give Z3 a larger H2, give Z6 a border-bottom on H2.

**Projected score after these 5 fixes:** ~188-192/200 (currently 175/200), PA-05: 3.5-4/4.

### Recipe Enrichments Summary (Priority Order)

| Priority | Enrichment | Prevents |
|----------|-----------|----------|
| 1 | Adjacent zone >= 25 RGB delta target (not just 15 floor) | Z4/Z5 blending (6 deductions) |
| 2 | Zone boundaries must use border-rig (3px) minimum | Under-signaled transitions |
| 3 | html background matches footer to prevent trailing void | Post-footer void |
| 4 | Warm palette calibration values (no pure white, no cold blue) | Palette violations |
| 5 | Component adaptation rule: if appears in 3+ zones, must vary | Uniform blockquotes/paragraphs |
| 6 | No adjacent zones may share identical padding AND margins | Spatial deduplication |
| 7 | Second-half density guidance (no flatline after peak) | Rhythm flattening |
| 8 | Inversion block min-height 50-60vh | Scrollable surprise |
| 9 | Per-zone H2 variation rule | Heading uniformity |
| 10 | 2-breakpoint minimum (768px + 1024px) | Single-breakpoint limitation |
| 11 | Typographic moment count >= 2 | Under-specified spectacle |
| 12 | Dark block stacking spacing >= 32px | Floor zone crowding |

### Classification Summary

| Classification | Count | Deductions |
|----------------|-------|------------|
| Recipe gap | 14 | 18 (72%) |
| Builder competence | 5 | 5 (20%) |
| Brief gap | 3 | 2 (8%) |

**The dominant finding: 72% of lost points are RECIPE GAPS, not builder failures.** The builder competently executed the recipe it was given. The recipe is missing calibration targets (25 RGB delta), structural rules (zone boundary minimum border weight, no adjacent identical spacing), and distribution guidance (second-half density, surprise distribution, typographic moment count).

---

*End of Score Drivers Analysis. 18 deductions analyzed. 12 recipe enrichments identified. 5 priority CSS fixes for DESIGNED threshold. Classification: 72% recipe gap, 20% builder competence, 8% brief gap.*
