# REMEDIATION EXECUTION PROMPT

You are fixing `07-intentionality.html` (2,034 lines, 86KB). The page has correct spatial structure (960px container, 12 sections, dark header/footer bookends) and correct soul (border-radius: 0, box-shadow: none, warm palette). What it lacks is PERCEPTIBLE richness: a human scrolling this page sees uniform cream, uniform text, zero borders, zero dividers, and no visual moments.

Your job is CSS-only remediation. Do NOT restructure the HTML sections. Do NOT change the content. ONLY modify and add CSS rules within the existing `<style>` block.

## PERCEPTION THRESHOLDS -- Your Minimum Amplitudes

Every CSS change you make MUST exceed these thresholds or it is invisible:

| Property | Minimum Perceptible Delta | Current Flagship | Required |
|----------|--------------------------|-----------------|----------|
| Background color | >= 8 RGB points between adjacent sections | 2-6 points | >= 10 points |
| Letter-spacing | >= 0.5px absolute difference | 0.1px (0.006em) | >= 0.03em at 16px |
| Line-height | >= 3px difference per line | 2px | >= 0.2 unit difference |
| Font-size | >= 2px between hierarchy levels | 0px (all 16px) | >= 2px |
| Font-weight | visible jump: 400 vs 500+ | all 400 | vary per zone |
| Border | always perceptible at 1px | 0 borders in body | add borders |
| Margin | >= 8px difference between zones | all 16px | vary 12-24px |

**THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS.**

---

## PHASE 1: STRUCTURAL BORDERS (Ch4 -- Currently ABSENT)

Ch4 (Structural) is completely missing from the page body. Tables have borders; nothing else does. Fix this.

### 1A. Add section-level left borders to 6 of 12 sections

Select sections S2, S5, S7, S9, S10, S12 (alternating presence = rhythm). Add:

```css
/* Section-level structural borders -- Ch4 activation */
.zone-s2 .page-container { border-left: 4px solid var(--color-border); }
.zone-s5 .page-container { border-left: 4px solid var(--color-primary); }
.zone-s7 .page-container { border-left: 3px solid var(--color-border); }
.zone-s9 .page-container { border-left: 3px solid var(--color-text); }
.zone-s10 .page-container { border-left: 3px solid var(--color-coral); }
.zone-s12 .page-container { border-left: 4px solid var(--color-text); }
```

### 1B. Amplify existing dividers

The `.divider-smooth`, `.divider-bridge`, `.divider-breathing` classes are nearly invisible. Amplify:

```css
/* Amplified dividers -- Ch4 structural rhythm */
.divider-smooth {
  height: 1px;
  background-color: var(--color-border);  /* was --color-border-subtle */
  margin: var(--space-12) 0;
}

.divider-bridge {
  height: 2px;                            /* was 1px */
  background-color: var(--color-text);    /* was --color-border */
  margin: var(--space-16) 0;
}

.divider-breathing {
  height: 4px;                            /* was 3px */
  background-color: var(--color-primary); /* was --color-border */
  margin: var(--space-16) 0;             /* was --space-20 (80px) -- reduced to prevent void */
}
```

### 1C. Add containment to component blocks

```css
.component-block {
  border-left: var(--border-structural) solid var(--color-primary);
  border-top: 1px solid var(--color-border);  /* NEW */
  background-color: var(--color-zone-breathing); /* NEW */
  margin: var(--space-8) 0;
}
```

---

## PHASE 2: TYPOGRAPHY ENRICHMENT (Ch2 -- Currently sub-perceptual)

All paragraphs are 16px/400/rgb(26,26,26). All h2s are 28px/400. This is uniform. Fix by varying font-size, font-weight, and color per zone.

### 2A. Paragraph font-size variation by zone

```css
/* Zone 1 (S1-S3): Generous reading -- slightly larger body */
.zone-s1 p, .zone-s2 p, .zone-s3 p {
  font-size: 17px;  /* was 16px -- +1px for generous intake feel */
  line-height: 1.85; /* was 1.75-1.8 */
}

/* Zone 2 (S4-S8): Analytical compression -- tighter body */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  font-size: 15px;  /* was 16px -- compressed for density */
  line-height: 1.6; /* was 1.65 */
}

/* Zone 3 (S9-S12): Refined output -- return to standard */
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p {
  font-size: 16px;
  line-height: 1.75;
}
```

### 2B. Heading weight and size variation

```css
/* Zone 1: Display-weight headings (editorial authority) */
.zone-s1 h2, .zone-s2 h2, .zone-s3 h2 {
  font-size: 30px;   /* was 28px */
  font-weight: 400;
  color: #3D3530;     /* warm dark brown instead of #1A1A1A */
}

/* Zone 2: Functional headings (analytical mode) */
.zone-s5 h2, .zone-s7 h2, .zone-s8 h2 {
  font-size: 26px;   /* was 28px -- compressed */
  font-weight: 600;  /* was 400 -- Inter weight signals analytical authority */
  letter-spacing: -0.02em;
  color: var(--color-text);
}

/* Zone 3: Refined headings (distilled, settled) */
.zone-s9 h2, .zone-s10 h2, .zone-s11 h2, .zone-s12 h2 {
  font-size: 28px;
  font-weight: 400;
  color: #2D2825;    /* slightly warmer than Zone 2 but darker than Zone 1 */
}
```

### 2C. Letter-spacing at perceptible amplitudes

Replace all current letter-spacing values (0.004em-0.01em range = 0.064-0.16px = invisible) with perceptible values:

```css
/* Zone 1: Generous tracking (open, exploratory) */
.zone-s1 p, .zone-s2 p, .zone-s3 p { letter-spacing: 0.02em; }  /* 0.32px at 16px */
.zone-s1 h2, .zone-s2 h2, .zone-s3 h2 { letter-spacing: 0.03em; }

/* Zone 2: Tight tracking (compressed, analytical) */
.zone-s5 p, .zone-s7 p, .zone-s8 p { letter-spacing: -0.01em; }
.zone-s5 h2, .zone-s7 h2, .zone-s8 h2 { letter-spacing: -0.02em; }

/* Zone 3: Neutral tracking (settled, clean) */
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p { letter-spacing: 0; }
.zone-s9 h2, .zone-s10 h2, .zone-s11 h2, .zone-s12 h2 { letter-spacing: 0; }
```

---

## PHASE 3: BACKGROUND AMPLIFICATION (Ch1 -- Currently imperceptible)

Zone backgrounds differ by 2-6 RGB points. Fix to >= 10 RGB points between adjacent sections.

### 3A. Replace zone background tokens

```css
:root {
  /* Zone 1: Warm variety (3 distinct warm tones) */
  --color-zone-s1: #FEF5EB;    /* warm peach cream -- was #FEF9F5 */
  --color-zone-s2: #F5EDE2;    /* warm tan -- was #FAF5ED */
  --color-zone-s3: #FBF3E8;    /* warm honey -- was #FDF8F2 */

  /* Zone 2: Cool analytical (converging toward clean) */
  --color-zone-s4: #F8F6F3;    /* cooling cream -- was #FDFBF8 */
  --color-zone-s5: #FFFFFF;    /* pure analytical white -- was #FEFEFE */
  --color-zone-s6: #F5F0E8;    /* brief warm breath -- was #FBF7F1 */
  --color-zone-s7: #FAFAFA;    /* cool neutral -- was #FEFEFE */
  --color-zone-s8: #F5F5F5;    /* cooler neutral -- was #FEFEFE */

  /* Zone 3: Unified warm (refined output) */
  --color-zone-s9: #FEF7F0;    /* refined cream -- was #FEFCFA */
  --color-zone-s10: #FEF5EB;   /* bookend echo of S1 -- was #FEF9F5 */
  --color-zone-s11: #F8F2EA;   /* gentle breathing -- was #FBF7F1 */
  --color-zone-s12: #FEF5EB;   /* clean cream, matches S1 -- was #FEF9F5 */
}
```

RGB deltas between adjacent sections are now 10-20 points (vs previous 2-6). The metaphor arc is preserved: Zone 1 warm variety -> Zone 2 cool convergence -> Zone 3 unified warmth.

**CRITICAL: Do NOT use #000000 or #FFFFFF for backgrounds.** Use #FAFAFA or #F5F5F5 as the coolest allowed values (soul constraint: no pure black/white). Exception: S5 may use #FFFFFF as the single peak analytical moment.

---

## PHASE 4: SPATIAL RHYTHM (Ch3 + Ch6 -- Partially working)

Spacing contour from skeleton is correct (32-80px section padding). But paragraph margins (16px everywhere) and max-widths (68ch everywhere) are uniform. Fix these.

### 4A. Paragraph margin variation

```css
/* Zone 1: Generous paragraph spacing (unhurried reading) */
.zone-s1 p, .zone-s2 p, .zone-s3 p { margin-bottom: 20px; max-width: 62ch; }

/* Zone 2: Compressed paragraph spacing (analytical density) */
.zone-s5 p, .zone-s7 p, .zone-s8 p { margin-bottom: 12px; max-width: 72ch; }

/* Transitional sections: standard */
.zone-s4 p, .zone-s6 p { margin-bottom: 16px; max-width: 68ch; }

/* Zone 3: Return to generous (refined output) */
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p { margin-bottom: 18px; max-width: 64ch; }
```

### 4B. Section padding enrichment

Add distinct padding-top values that differ from padding-bottom to create asymmetric vertical rhythm:

```css
/* Zone 1: More top padding (breathing entry) */
.zone-s1, .zone-s2, .zone-s3 { padding-top: var(--space-16); padding-bottom: var(--space-10); }

/* Zone 2: Tighter, symmetric (analytical compression) */
.zone-s5, .zone-s7, .zone-s8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }

/* Zone 3: Moderate, slightly asymmetric */
.zone-s9, .zone-s10, .zone-s11 { padding-top: var(--space-12); padding-bottom: var(--space-10); }

/* S12 (bookend): generous exit */
.zone-s12 { padding-top: var(--space-12); padding-bottom: var(--space-16); }
```

---

## PHASE 5: COMPONENT DIFFERENTIATION

All component blocks look identical (4px red left border, same padding, same background). Differentiate by section context.

### 5A. Callout type variation

```css
/* Insight callouts: amber accent (appears in Zone 1-2) */
.component-block.warm {
  border-left-color: var(--color-amber);
  background-color: #FEF9F0;  /* warm amber tint */
}

/* Resolution callouts: green accent (appears in Zone 3) */
.component-block.resolution {
  border-left-color: var(--color-green);
  background-color: #F5FAF5;  /* cool green tint */
}

/* Neutral callouts: border color accent */
.component-block.neutral {
  border-left-color: var(--color-border);
  background-color: var(--bg-info);  /* #F5F8FA cool info tint */
}

/* Default (no variant class): primary red */
.component-block {
  background-color: #FEF6F5;  /* warm pink tint */
}
```

### 5B. Self-reference callouts (intentionality D1) -- make visually distinct

The 3 self-reference moments where content describes its own form should be visually distinctive:

```css
/* Self-referential callouts get a double-border treatment */
.component-block[data-self-ref] {
  border-left: var(--border-structural) solid var(--color-primary);
  border-right: 1px solid var(--color-border);
  background-color: var(--bg-warm);
}
```

If the HTML does not have `data-self-ref` attributes, add them to the 3 self-referential component-blocks.

---

## PHASE 6: SELF-VERIFICATION

After all changes, verify these 10 checks. If ANY fails, fix before delivering.

1. **Backgrounds visible:** Screenshot S1 next to S5. Can you SEE color change without zooming?
2. **Font-size varies:** Computed p font-size in S1 vs S5 differs by >= 2px
3. **Font-weight varies:** Computed h2 font-weight in S1 vs S5: 400 vs 600
4. **Letter-spacing varies:** Computed letter-spacing S1 vs S5 differs by >= 0.4px
5. **Borders in body:** >= 6 elements with visible border in body (not header/footer)
6. **Dividers distinct:** .divider-smooth vs .divider-breathing clearly different weight/color
7. **Paragraph margins vary:** margin-bottom on p in S1 vs S5 differs by >= 8px
8. **Components differentiated:** .component-block in S3 vs S9 has different border color AND background
9. **Max-width varies:** p max-width in S1 vs S5 differs by >= 6ch
10. **Overall:** Full scroll at 1440px. Each screenful looks DIFFERENT from previous. YES/NO.

**Soul (must all pass):** border-radius: 0, box-shadow: none, fonts from trinity only, colors from palette, container 960px, no pure black/white backgrounds, no gradients, no opacity < 1.

**Channel target: 7/7 perceptibly active.** Currently 0/10 on binary richness checklist; target >= 7/10.

## CONSTRAINTS

Do NOT change: HTML structure, container width (960px), font families, spacing contour (section padding pattern). Do NOT add: border-radius, box-shadow, gradients, opacity < 1, fonts beyond trinity. Do NOT remove: mechanism CSS comments. Colors must be from tokens.css palette (exception: zone backgrounds documented above).

## GOAL

A reader scrolling at normal speed perceives VISUAL VARIETY: different backgrounds, different text weights, structural borders, distinct component identities, and a density arc from sparse to dense to resolved. Every difference serves the Assay Laboratory metaphor: raw variety -> analytical pressure -> refined unity. DESIGNED, not generated.
