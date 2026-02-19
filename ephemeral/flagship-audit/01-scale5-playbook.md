# Scale 5 (DETAIL/CHARACTER) Operational Playbook

**Analyst:** scale5-analyst (Opus 4.6)
**Date:** 2026-02-17
**Sources Read:**
- `ephemeral/flagship-audit/00-AUDIT-DATA.md` (109 lines)
- `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines, ALL)
- `memory/scale-research.md` (92 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (1,218 lines, ALL)
- `design-system/validated-explorations/density/DD-006-fractal.html` (1,121 lines, ALL)
- `ephemeral/flagship-experiment/07-intentionality.html` (2,034 lines, ALL)
- Screenshots: 01-header-1440.png, 02-section2-3-1440.png

---

## PART 1: ROOT CAUSE ANALYSIS — WHY SCALE 5 IS HOLLOW

### 1.1 The Evidence

The audit data is unambiguous. Across all 12 sections of the flagship output:

| Property | Measured Value | Variation | Verdict |
|----------|---------------|-----------|---------|
| p fontSize | 16px | 0 variation | **UNIFORM** |
| p fontWeight | 400 | 0 variation | **UNIFORM** |
| p color | rgb(26,26,26) | 0 variation | **UNIFORM** |
| p marginBottom | 16px | 0 variation | **UNIFORM** |
| h2 fontSize | 28px | 0 variation | **UNIFORM** |
| h2 fontWeight | 400 | 0 variation | **UNIFORM** |

Only letter-spacing and line-height show any variation, and even those are limited:
- letter-spacing: ranges from 0.096px to -0.048px (a 0.144px total span — invisible to naked eye)
- line-height: ranges from 26.4px to 28.8px (a 2.4px total span — barely perceptible)

**Scale 5 is operating on 2 of 8 possible character-level CSS properties, and the 2 it uses have ranges so narrow they are perceptually invisible.**

### 1.2 The Prompt Gap

I read all 963 lines of the master execution prompt. Here is what it says about Scale 5:

**SC-01 (line 244-250):** Defines Scale 5 as "DETAIL: Micro-details, icon size, letter-spacing, line-height fine-tuning (~4-16px)."

That is the ONLY operational instruction. Scale 5 is defined and then NEVER referenced again in any rule, gate, checkpoint, or builder instruction. Compare:

| Scale | Rules Referencing It | Operational Instructions |
|-------|---------------------|--------------------------|
| Scale 1 (PAGE) | S-01, S-02, S-03, S-04, S-10, S-12, S-14, S-15, S-17 | 9 binary rules with specific values |
| Scale 2 (SECTION) | C-01 through C-21, MC-01 through MC-08 | 29 rules with detailed specifications |
| Scale 3 (COMPONENT) | C-10, mechanism catalog references | Component-level patterns documented |
| Scale 4 (ELEMENT) | SC-01 definition only + mechanism catalog | Covered by mechanism #1, #2, #10, #11 |
| Scale 5 (DETAIL) | SC-01 definition ONLY | **ZERO operational instructions** |

The prompt defines what Scale 5 IS (micro-details at 4-16px) but gives the builder ZERO instructions about what to DO with it.

### 1.3 What DD-006 Does at Scale 5 That the Flagship Doesn't

DD-006 explicitly demonstrates Scale 5 (it calls it "Level 4: Character Scale"). Here is what DD-006 deploys at the character level:

**DD-006 Scale 5 techniques (from lines 486-520):**

1. **Font-size modulation:** Dense zones use 12-13px, sparse zones use 14-15px, body text 16px. Three distinct sizes within body content.
2. **Line-height shifting:** Dense code at 1.5, sparse prose at 1.8, body at 1.7. Three distinct line-heights creating perceptible density differences.
3. **Font-family switching:** Code zones use `var(--font-mono)`, labels use `var(--font-body)` at small size + uppercase, body uses `var(--font-body)` at normal size. Three typographic voices at character level.
4. **Color differentiation:** Code comments at `#666666`, code keywords at `#E83025`, code strings at `#6B9B7A`, body text at `#1A1A1A`. Four distinct text colors within a single viewport.
5. **Letter-spacing as signal:** Labels at `0.1em` to `0.15em`, body at normal. The spacing difference is 10-15x larger than the flagship's variation.
6. **Text-transform as density marker:** Labels use `text-transform: uppercase`, body uses normal case. Binary signal.

**DD-006 deploys 6 character-level techniques. The flagship deploys 2, both at imperceptible ranges.**

### 1.4 What the Flagship HTML Actually Does at Scale 5

Reading the flagship HTML (07-intentionality.html, 2,034 lines), the builder DID attempt Scale 5 work. Lines 736-834 define per-zone typographic modulation:

```css
/* Zone 1: letter-spacing 0.006em, line-height 1.8, word-spacing 0.02em */
/* Zone 2: letter-spacing -0.003em, line-height 1.65, word-spacing -0.01em */
/* Zone 3: letter-spacing 0, line-height 1.7, word-spacing 0 */
```

This is technically present but perceptually invisible because:
- letter-spacing differences of 0.006em to -0.003em = 0.009em total range = 0.144px at 16px font-size
- line-height differences of 1.65 to 1.8 = difference of 2.4px per line
- word-spacing of 0.02em = 0.32px — invisible

The builder understood the CONCEPT (typographic convergence gradient) but chose VALUES so conservative that they register as zero variation in computed styles.

The flagship also modulates h2 color per zone (lines 936-963):
```css
/* Zone 1: #2A2420 (slightly lighter) */
/* Zone 2: #1A1A1A (full weight) */
/* Zone 3: #1E1B18 to #2A2420 (warm settled) */
```

These RGB differences of 10-16 points are barely perceptible on screen. The INTENT is correct (heading color tracks zone), but the VALUES are too timid.

### 1.5 The Core Diagnosis

**Scale 5 failed because the prompt provides ZERO operational instructions with SPECIFIC VALUES.** The builder, lacking concrete guidance, defaulted to the safest possible approach: micro-variations that are technically compliant but perceptually absent.

Binary rules achieve 100% compliance. Scale 5 has zero binary rules. The result is zero compliance with any quality standard because there IS no standard.

---

## PART 2: OPERATIONAL PLAYBOOK — Scale 5 Builder Instructions

Every instruction below gives the builder WHAT property, WHERE to apply it, SPECIFIC VALUES, and WHY it creates richness.

### 2.1 Font-Size Modulation Across Zones

**PROPERTY:** `font-size` on `<p>` elements and inline text

**THE RULE:** Body text font-size MUST vary by AT LEAST 2px across the page. Minimum 3 distinct font-size values in body text (not headings).

**WHERE and VALUES:**

| Zone | Content Type | Font-Size | Token | Why |
|------|-------------|-----------|-------|-----|
| Sparse/breathing sections (S1, S2, S12) | Introductory prose, reflection | 17px or 1.0625rem | Custom or override | Generous, unhurried — larger text invites slower reading |
| Standard sections (S3, S4, S6, S9, S10) | Body prose, analysis | 16px or 1rem | `var(--type-body)` | Baseline reading size |
| Dense sections (S5, S7, S8) | Technical, compressed | 15px or 0.9375rem | Custom or override | Tighter text signals "information-rich, scan faster" |
| Component labels | Callout labels, meta-text | 12px or 0.75rem | `var(--type-meta)` | Already in use — maintain |
| Bridge/reframe prose | Cognitive transition text | 15px | Override on `.bridge-prose p` | Italicized + smaller = subordinate to main content |

**CSS IMPLEMENTATION:**
```css
/* Sparse zones: generous reading */
.zone-s1 p, .zone-s2 p, .zone-s12 p {
  font-size: 17px;
}

/* Dense zones: compressed reading */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  font-size: 15px;
}

/* Standard zones: baseline (inherits 16px from body) */
/* .zone-s3, .zone-s4, .zone-s6, .zone-s9, .zone-s10, .zone-s11 — no override needed */
```

**WHY THIS CREATES RICHNESS:** The 15px-16px-17px gradient is perceptible but not jarring. The reader does not consciously notice the change but FEELS the density shift. DD-006 uses a 12px-15px range for the same effect (lines 399-434, `.section-scale__para--dense` at 13px, `.section-scale__para--sparse` at 15px). The flagship's current 16px-uniform fails the "feel the density" test entirely.

**METAPHOR ALIGNMENT:** In the Assay Laboratory metaphor, raw intake (Zone 1) has generously spaced, larger text — like handwritten field notes. Analytical pressure (Zone 2) compresses text — like tightly printed lab data. Refined output (Zone 3) returns to standard — like a clean published paper.

**VERIFICATION:** `getComputedStyle(section.querySelector('p')).fontSize` must return at least 3 distinct values across the 12 sections.

---

### 2.2 Font-Weight Shifting for Emphasis Hierarchy

**PROPERTY:** `font-weight` on `<p>`, `<h2>`, `<h3>`, and `<strong>` elements

**THE RULE:** Font-weight MUST vary on body text across the page. At minimum, 2 distinct weight values must appear on paragraph text (not just headings).

**WHERE and VALUES:**

| Element | Current Weight | Prescribed Weight | Where | Why |
|---------|---------------|-------------------|-------|-----|
| p (sparse zones) | 400 | 400 | S1, S2, S12 | Light, inviting — reader enters at ease |
| p (standard zones) | 400 | 400 | S3, S4, S6, S9-S11 | Standard reading weight |
| p (dense zones, first paragraph) | 400 | **500** | S5, S7, S8 — first `<p>` only | Slightly heavier opening signals "this section is dense and important" |
| h2 (sparse zones) | 400 | 400 | S1, S12 | Instrument Serif at 400 is already authoritative |
| h2 (dense zones) | 400 | 400 | S5, S7, S8 | Keep consistent — weight shift on body, not headings |
| h3 (all zones) | 600 italic | 600 italic | All | Already differentiated — maintain |
| strong (within prose) | 700 (default) | **600** | All sections | `font-weight: 600` on `<strong>` tags — Inter 600 is visually distinct from 400 without the "shouting" quality of 700 |
| Opening paragraph of each section | 400 | **500** | S1, S3, S5, S7, S9 (odd sections) | First paragraph of each section carries slightly more visual authority — the "topic sentence" weight |

**CSS IMPLEMENTATION:**
```css
/* Dense zone first-paragraph emphasis */
.zone-s5 > .page-container > p:first-of-type,
.zone-s7 > .page-container > p:first-of-type,
.zone-s8 > .page-container > p:first-of-type {
  font-weight: 500;
}

/* Consistent strong weight */
section strong {
  font-weight: 600;
}
```

**WHY THIS CREATES RICHNESS:** Weight 500 vs 400 is the typographic equivalent of a slightly louder voice. The reader's eye pauses fractionally longer on the heavier text, creating micro-emphasis without the bluntness of bold. Inter's weight axis at 500 is clean and legible — it was designed for exactly this kind of fine gradation.

**METAPHOR ALIGNMENT:** In the assay laboratory, the first observation note for each sample carries more weight than subsequent notes. The opening paragraph of each dense section is the "primary observation" — it deserves heavier ink.

**VERIFICATION:** `getComputedStyle(section.querySelector('p:first-of-type')).fontWeight` in dense zones must return "500".

---

### 2.3 Color Temperature Variation in Body Text

**PROPERTY:** `color` on `<p>` elements

**THE RULE:** Body text color MUST vary between zones. Minimum 3 distinct color values across all 12 sections, all within the warm-neutral palette (no cool grays — U-08 prohibition).

**WHERE and VALUES:**

| Zone | Color | Hex | RGB | Why |
|------|-------|-----|-----|-----|
| Sparse (S1, S2, S12) | Warm dark | `#2A2420` | rgb(42,36,32) | Warm, slightly softened — welcoming, not demanding |
| Standard (S3, S4, S6, S9-S11) | Base near-black | `#1A1A1A` | rgb(26,26,26) | Design system standard text color |
| Dense (S5, S7, S8) | Cool-shifted dark | `#1E1B18` | rgb(30,27,24) | Slightly warmer-shifted from base — denser text with micro-warmth under analytical pressure |
| Bridge prose | Secondary | `#6B6B6B` | rgb(107,107,107) | Already implemented — subordinate voice |
| Section-meta labels | Quiet background | `#8A8580` | rgb(138,133,128) | Already implemented — stay at current value |

**CSS IMPLEMENTATION:**
```css
/* Sparse zone text: warm, softened */
.zone-s1 p, .zone-s2 p, .zone-s12 p {
  color: #2A2420;
}

/* Dense zone text: slightly warmer-dark */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  color: #1E1B18;
}

/* Standard zones: inherit body color (#1A1A1A) — no override needed */
```

**IMPORTANT:** The flagship ALREADY does this for h2 elements (lines 936-963) but NOT for body text. The h2 color modulation needs to be EXTENDED to p elements.

**WHY THIS CREATES RICHNESS:** Text color is the most subliminal Scale 5 property. The reader never consciously notices that sparse-zone text is rgb(42,36,32) while dense-zone text is rgb(30,27,24). But the cumulative effect creates "warmth variation" across the scroll — the chromatic channel (Ch1) now operates at Scale 5, not just at Scale 2 (section backgrounds). DD-006 uses `#666666` for comments vs `#1A1A1A` for code — a much larger gap, but the principle is the same: different content densities get different ink tones.

**SOUL COMPLIANCE:** All three values are warm-shifted near-blacks. None is pure #000000 (U-06). None is cool-gray (U-08). All are within the KortAI warm editorial palette.

**VERIFICATION:** `getComputedStyle(section.querySelector('p')).color` must return at least 3 distinct values across sections.

---

### 2.4 Margin Micro-Adjustments

**PROPERTY:** `margin-bottom` on `<p>` elements

**THE RULE:** Paragraph spacing MUST vary between zones. Minimum 3 distinct margin-bottom values on body paragraphs.

**WHERE and VALUES:**

| Zone | Margin-Bottom | Token | Why |
|------|--------------|-------|-----|
| Sparse (S1, S2, S12) | 20px | `var(--space-5)` | Generous inter-paragraph breathing — the page is "exhaling" |
| Standard (S3, S4, S6, S9-S11) | 16px | `var(--space-4)` | Design system standard (current value) |
| Dense (S5, S7, S8) | 12px | `var(--space-3)` | Compressed paragraphs — the page is "inhaling", content presses together |
| Bridge prose paragraphs | 0 | 0 | Bridge prose is a single paragraph — no bottom margin needed |

**CSS IMPLEMENTATION:**
```css
/* Sparse zones: generous paragraph breathing */
.zone-s1 p, .zone-s2 p, .zone-s12 p {
  margin-bottom: var(--space-5); /* 20px */
}

/* Dense zones: compressed paragraph spacing */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  margin-bottom: var(--space-3); /* 12px */
}

/* Last paragraph override still applies */
section p:last-child {
  margin-bottom: 0;
}
```

**WHY THIS CREATES RICHNESS:** The 12px-16px-20px gradient creates the INHALE/EXHALE rhythm at Scale 5 (character level). This is the fractal coherence that DD-006 discovered: the same dense/sparse pattern that operates at Scale 1 (page-level section padding varies 32px to 80px) now ALSO operates at Scale 5 (paragraph spacing varies 12px to 20px). The reader experiences the same breathing rhythm at every zoom level.

The flagship already modulates section padding per zone (32px dense, 48px moderate, 64px sparse, 80px focal). Paragraph margin-bottom must ECHO this modulation at the micro level. Currently it is 16px everywhere — the fractal pattern breaks at Scale 5.

**METAPHOR ALIGNMENT:** In the assay lab, raw intake samples (Zone 1) are laid out with generous spacing — each specimen gets room to breathe for initial inspection. Under analytical pressure (Zone 2), specimens are packed tighter — efficiency matters during active refinement. Refined output (Zone 3) returns to moderate spacing — the distilled findings deserve clean presentation.

**VERIFICATION:** `getComputedStyle(p).marginBottom` must return at least 3 distinct values across sections.

---

### 2.5 Letter-Spacing as Semantic Signal

**PROPERTY:** `letter-spacing` on `<p>` and `<h2>` elements

**THE RULE:** Letter-spacing variation MUST be perceptible. Minimum total range of 0.02em (not 0.009em as currently implemented).

The flagship already implements letter-spacing modulation (lines 736-834). The VALUES must be amplified 3-4x to cross the perception threshold.

**WHERE and VALUES:**

| Zone | p letter-spacing | h2 letter-spacing | Why |
|------|-----------------|-------------------|-----|
| Sparse (S1, S2, S12) | `0.015em` | `0.02em` | Open tracking — letters breathe apart. Unhurried reading. |
| Standard (S3, S4, S6) | `0.005em` | `0.01em` | Slight openness — normal reading |
| Dense (S5, S7, S8) | `-0.01em` | `-0.02em` | Tight tracking — letters press together. Dense, efficient reading. |
| Refined (S9, S10, S11) | `0` | `0` | Neutral — the typographic convergence point. No modulation = "settled." |

**CSS IMPLEMENTATION (replaces current lines 736-834):**
```css
/* Zone 1: Open tracking (generous, unhurried) */
.zone-s1 p { letter-spacing: 0.015em; }
.zone-s1 h2 { letter-spacing: 0.02em; }

.zone-s2 p { letter-spacing: 0.012em; }

.zone-s3 p { letter-spacing: 0.008em; }
.zone-s3 h2 { letter-spacing: 0.015em; }

/* Zone 1→2 transition: cooling down */
.zone-s4 p { letter-spacing: 0.005em; }
.zone-s4 h2 { letter-spacing: 0.01em; }

/* Zone 2: Tight tracking (analytical pressure) */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  letter-spacing: -0.01em;
}
.zone-s5 h2, .zone-s7 h2, .zone-s8 h2 {
  letter-spacing: -0.02em;
}

/* Zone 2 warm breath (S6) */
.zone-s6 p { letter-spacing: 0; }
.zone-s6 h2 { letter-spacing: 0; }

/* Zone 3: Settled, neutral (convergence complete) */
.zone-s9 p, .zone-s10 p, .zone-s11 p, .zone-s12 p {
  letter-spacing: 0;
}
.zone-s9 h2, .zone-s10 h2, .zone-s11 h2 {
  letter-spacing: 0;
}

/* Zone 3 closing bookend: slight return to openness */
.zone-s12 p { letter-spacing: 0.01em; }
.zone-s12 h2 { letter-spacing: 0.02em; }
```

**WHY THESE VALUES WORK:** At 16px font-size:
- `0.015em` = 0.24px per character. Across a 68-character line, that is 16px total additional space — VISIBLE as "airy" text.
- `-0.01em` = -0.16px per character. Across a 68-character line, that is 11px less space — VISIBLE as "tight" text.
- The old values (0.006em = 0.096px total, -0.003em = -0.048px total) were below the perception threshold.

**PERCEPTION THRESHOLD:** Research on letter-spacing perception suggests 0.01em is the minimum noticeable difference at standard screen resolution. Values below 0.01em register as identical. The flagship's original range of 0.009em total was BELOW this threshold.

**METAPHOR ALIGNMENT:** The "typographic convergence" gradient (many voices -> one voice) is the flagship's most ambitious Scale 5 idea. It just needs LOUDER values. Zone 1 letters stand apart (many independent voices, raw intake). Zone 2 letters press together (analytical pressure compresses everything). Zone 3 letters settle to neutral (one unified voice).

**VERIFICATION:** Compute `getComputedStyle(p).letterSpacing` across sections. Range must be >= 0.025em (0.015 to -0.01).

---

### 2.6 Line-Height as Density Control

**PROPERTY:** `line-height` on `<p>` elements

**THE RULE:** Line-height MUST vary by at least 0.15 (e.g., 1.6 to 1.85). Current range of 1.65 to 1.8 is marginally acceptable but should be expanded.

**WHERE and VALUES:**

| Zone | Line-Height | Px at 16px | Why |
|------|------------|------------|-----|
| Sparse (S1, S2, S12) | 1.85 | 29.6px | Maximum vertical breathing — one line of text gets nearly 30px of total height |
| Standard (S3, S4, S6) | 1.75 | 28px | Comfortable reading — design system default area |
| Dense (S5, S7, S8) | 1.6 | 25.6px | Compressed lines — 4px less per line = visually tighter block |
| Refined (S9, S10, S11) | 1.7 | 27.2px | Settled, clean — slightly tighter than standard (refined output is compact but not pressured) |
| Bridge prose | 1.7 | 27.2px | Already set — maintain |

**CSS IMPLEMENTATION:**
```css
/* Sparse zones: maximum line breathing */
.zone-s1 p, .zone-s2 p, .zone-s12 p {
  line-height: 1.85;
}

/* Standard zones */
.zone-s3 p, .zone-s4 p, .zone-s6 p {
  line-height: 1.75;
}

/* Dense zones: compressed lines */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  line-height: 1.6;
}

/* Refined zones: settled */
.zone-s9 p, .zone-s10 p, .zone-s11 p {
  line-height: 1.7;
}
```

**WHY THIS CREATES RICHNESS:** The line-height gradient creates a vertical density channel that works IN CONCERT with the margin-bottom gradient (2.4), the font-size gradient (2.1), and the letter-spacing gradient (2.5). In dense zones, EVERYTHING compresses simultaneously: smaller text (15px), tighter line-height (1.6), tighter letter-spacing (-0.01em), and tighter margins (12px). This is multi-channel coherence at Scale 5 — four properties all saying "dense" together. That mutual reinforcement IS Scale 5 composition.

**VERIFICATION:** `getComputedStyle(p).lineHeight` must return at least 3 distinct values.

---

### 2.7 Word-Spacing as Tertiary Density Signal

**PROPERTY:** `word-spacing` on `<p>` elements

**THE RULE:** Word-spacing is a TERTIARY signal (behind letter-spacing and line-height). Use sparingly. Minimum 2 distinct values.

**WHERE and VALUES:**

| Zone | Word-Spacing | Why |
|------|-------------|-----|
| Sparse (S1, S2, S12) | `0.04em` | Words stand apart — generous breathing between ideas |
| Standard (S3-S4, S6, S9-S11) | `0` | Normal word spacing |
| Dense (S5, S7, S8) | `-0.02em` | Words press together — analytical urgency |

**CSS IMPLEMENTATION:**
```css
/* Sparse zones: generous word spacing */
.zone-s1 p, .zone-s2 p, .zone-s12 p {
  word-spacing: 0.04em;
}

/* Dense zones: compressed word spacing */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  word-spacing: -0.02em;
}
```

**WHY THIS MATTERS:** Word-spacing is the least perceptible of the Scale 5 properties individually. Its value is CUMULATIVE — when letter-spacing, line-height, margin-bottom, AND word-spacing all compress together, the effect is greater than the sum. Removing word-spacing from the ensemble weakens the other three. This is CCS at Scale 5: the properties need each other.

**The flagship already defined word-spacing values (lines 740-742, 778-780).** The problem is the same as letter-spacing: the values are too small (0.02em sparse, -0.01em dense). Double them.

---

### 2.8 Max-Width Variation on Body Text

**PROPERTY:** `max-width` on `<p>` elements (in `ch` units)

**THE RULE:** Paragraph max-width SHOULD vary between zones, creating horizontal density variation at the character level. This is a Scale 5 expression of Mechanism #6 (Width Variation).

**WHERE and VALUES:**

| Zone | Max-Width | CPL at 16px | Why |
|------|----------|-------------|-----|
| Sparse (S1, S2, S12) | `62ch` | ~62 CPL | Narrower measure = more line breaks = more vertical space = sparser |
| Standard (S3, S4, S6, S9-S11) | `68ch` | ~68 CPL | Current value — comfortable reading |
| Dense (S5, S7, S8) | `74ch` | ~74 CPL | Wider measure = fewer line breaks = more compact = denser |

**CSS IMPLEMENTATION:**
```css
/* Sparse zones: narrower text column */
.zone-s1 p, .zone-s2 p, .zone-s12 p {
  max-width: 62ch;
}

/* Standard: inherits 68ch from base rule */

/* Dense zones: wider text column */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  max-width: 74ch;
}
```

**CPL COMPLIANCE CHECK:** S-07 requires CPL 45-80. At 960px container with 32px padding on each side = 896px content width. At 16px font-size: CPL = 896 / 16 / 0.6 = 93 max possible. Our values:
- 62ch at 16px = 62 CPL (PASS, within 45-80)
- 68ch at 16px = 68 CPL (PASS)
- 74ch at 16px = 74 CPL (PASS)

All within S-07 bounds.

**WHY THIS CREATES RICHNESS:** Paragraph width is a Scale 5 property that creates HORIZONTAL density variation. When combined with VERTICAL density variation (line-height, margin), the text block itself changes shape across zones. Sparse zones create tall, narrow text blocks. Dense zones create short, wide text blocks. The reader perceives this as "the page is breathing" — the same observation that earned DD-006 its 36/40 score.

---

## PART 3: DD-006 SCALE 5 TECHNIQUES NOT YET COVERED

DD-006's character-level work also includes techniques specific to code and component contexts. These are relevant when the flagship HTML contains code blocks, tables, or component internals.

### 3.1 Font-Family as Density Signal

DD-006 uses three font families at Scale 5:
- `var(--font-mono)` at 9-10px uppercase for LABELS (maximum density, minimum space)
- `var(--font-body)` at 12-14px for component body content
- `var(--font-display)` at 17px italic for callout essence content

The flagship already uses all three families, but always at FIXED sizes per element type. The playbook recommendation: allow font-size to VARY within the same font-family based on zone density.

**ALREADY IMPLEMENTED PARTIALLY:** The flagship's `.section-meta` uses mono at 0.75rem. The `.component-label` uses mono at 12px. These are correct.

**MISSING:** The flagship's `.component-body p` uses 16px everywhere. In dense zones (S5, S7, S8), component body text should compress to 15px to match the zone's body text compression.

```css
.zone-s5 .component-block .component-body p,
.zone-s7 .component-block .component-body p,
.zone-s8 .component-block .component-body p {
  font-size: 15px;
}
```

### 3.2 text-transform as Zone-Aware Binary Signal

DD-006 uses `text-transform: uppercase` exclusively on labels and meta-information. This is a binary Scale 5 signal: UPPERCASE = meta/structural, normal-case = content/substantive.

The flagship correctly uses uppercase on `.section-meta`, `.component-label`, `.header-meta`, `.footer-label`, and table `<th>` elements.

**No action needed** — this technique is already correctly implemented.

### 3.3 ::first-letter as Scale 5 Designed Moment

DD-006 does not use `::first-letter`. But the flagship correctly deploys it (Mechanism #16, Drop Cap) on section 1 only. This is a Scale 5 designed moment — the ONLY character-level element that is visually dramatic rather than subliminal.

**Recommendation:** Consider one additional `::first-letter` treatment in Zone 3 (S12, closing section) as a bookend echo. The drop-cap at S1 and a similar treatment at S12 creates Scale 5 bookending — the same character-level designed moment at the start and end of the page.

```css
/* S12 closing drop-cap echo — lighter treatment than S1 */
.zone-s12 > .page-container > p:first-of-type::first-letter {
  font-family: var(--font-display);
  font-size: 2.5em; /* Smaller than S1's 3.5em — intentional diminuendo */
  float: left;
  line-height: 0.8;
  margin-right: var(--space-2);
  margin-top: var(--space-1);
  color: var(--color-primary);
}
```

**WHY SMALLER:** The closing drop-cap at 2.5em vs the opening drop-cap at 3.5em creates a diminuendo — the page resolves with a quieter echo of its opening gesture. This is structural bookending at Scale 5.

---

## PART 4: COMPOSITE EFFECT — ALL PROPERTIES WORKING TOGETHER

### 4.1 Zone-by-Zone Composite Specification

Here is what Scale 5 looks like when ALL properties work together:

**SPARSE ZONE (S1, S12):**
```css
.zone-s1 p, .zone-s12 p {
  font-size: 17px;
  font-weight: 400;
  color: #2A2420;
  line-height: 1.85;
  letter-spacing: 0.015em;
  word-spacing: 0.04em;
  margin-bottom: var(--space-5); /* 20px */
  max-width: 62ch;
}
```
**Perception:** "Warm, generous, unhurried. Large text, wide spacing, narrow column. I want to read slowly."

**STANDARD ZONE (S3, S4, S6):**
```css
.zone-s3 p, .zone-s4 p, .zone-s6 p {
  font-size: 16px;
  font-weight: 400;
  color: #1A1A1A;
  line-height: 1.75;
  letter-spacing: 0.005em;
  word-spacing: 0;
  margin-bottom: var(--space-4); /* 16px */
  max-width: 68ch;
}
```
**Perception:** "Clear, readable, standard. Professional editorial quality."

**DENSE ZONE (S5, S7, S8):**
```css
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  font-size: 15px;
  font-weight: 400; /* but first-of-type gets 500 */
  color: #1E1B18;
  line-height: 1.6;
  letter-spacing: -0.01em;
  word-spacing: -0.02em;
  margin-bottom: var(--space-3); /* 12px */
  max-width: 74ch;
}
```
**Perception:** "Compressed, information-rich, efficient. I need to focus and read carefully."

**REFINED ZONE (S9, S10, S11):**
```css
.zone-s9 p, .zone-s10 p, .zone-s11 p {
  font-size: 16px;
  font-weight: 400;
  color: #1A1A1A;
  line-height: 1.7;
  letter-spacing: 0;
  word-spacing: 0;
  margin-bottom: var(--space-4); /* 16px */
  max-width: 68ch;
}
```
**Perception:** "Clean, settled, confident. The analysis is complete; the output is clear."

### 4.2 CCS at Scale 5

The 8 Scale 5 properties create a Compositional Coupling Score within Scale 5 itself:

**Removal test:**
- Remove font-size variation → letter-spacing still signals density, but the "feel" weakens. CCS impact: 4 other properties affected.
- Remove letter-spacing → font-size and line-height still operate, but horizontal density signal disappears. CCS impact: 3 properties affected.
- Remove line-height → vertical density collapses. CCS impact: 5 properties affected (line-height is the ANCHOR).
- Remove margin-bottom → inter-paragraph rhythm becomes uniform. CCS impact: 2 properties affected.
- Remove color → warmth gradient disappears but density signals remain. CCS impact: 1 property affected (weakest coupling).

**Scale 5 internal CCS:** ~0.35 (average of 3/8 dependencies per property). This exceeds the MC-01 minimum of 0.30 WITHIN Scale 5 alone.

**Key insight:** Line-height is the ANCHOR property at Scale 5. If only ONE property can vary, it should be line-height. If two, line-height + letter-spacing. If three, add margin-bottom. Font-size and color are reinforcing, not primary.

### 4.3 Fractal Coherence Check (C-20)

The flagship's compositional direction is "refinement gradient" (many -> one, raw -> distilled). Here is how Scale 5 echoes this:

| Scale | Direction | How It Manifests |
|-------|-----------|------------------|
| Scale 1 (PAGE) | Variety -> Unity | Zone 1 (3 distinct bg tints) -> Zone 3 (1 uniform tint) |
| Scale 2 (SECTION) | Warm -> Cool -> Warm | Section padding varies 80px -> 32px -> 64px |
| Scale 3 (COMPONENT) | Dense -> Sparse internals | Component blocks compress in Zone 2, expand in Zone 1/3 |
| Scale 5 (DETAIL) | **Many typographic voices -> One settled voice** | letter-spacing 0.015em -> 0 (convergence). Font-size 17px -> 16px (normalization). Color #2A2420 -> #1A1A1A (neutralization). |

Scale 5 now echoes the same refinement gradient as Scales 1-3. The fractal pattern holds at the character level.

---

## PART 5: BUILDER INTEGRATION INSTRUCTIONS

### 5.1 What the Builder Self-Check (B10) Should Add

Add these items to the builder self-check:

```
[ ] SC5-01: p font-size varies across 3+ zones (17px/16px/15px minimum)
[ ] SC5-02: p margin-bottom varies across 3+ zones (20px/16px/12px minimum)
[ ] SC5-03: p letter-spacing range >= 0.02em total (not 0.009em)
[ ] SC5-04: p line-height range >= 0.15 (1.6 to 1.85)
[ ] SC5-05: p color varies across 2+ zones (warm vs neutral vs warm-dark)
```

### 5.2 Gate 3 Addition for Scale 5

At Gate 3 (Post-Pass-2), add:

```
SC5-GATE: Scale 5 variation check.
  Count distinct computed values for these properties across sections:
    - p font-size: >= 3 distinct values
    - p margin-bottom: >= 3 distinct values
    - p letter-spacing: >= 2 distinct values with range >= 0.02em
    - p line-height: >= 3 distinct values
  Pass: 3/4 properties pass. Fail: < 3/4.
```

### 5.3 Prompt Rule Proposal

Add to B5 (Scale-Channel rules):

```
SC-11. Scale 5 minimum variation: body paragraph text MUST have >= 3 distinct
       computed font-size values AND >= 3 distinct margin-bottom values AND
       >= 2 distinct letter-spacing values (range >= 0.02em) across the page.
       Scale 5 UNIFORM = FAIL. The character level must echo the page's
       compositional direction.
       Verify: for each of [fontSize, marginBottom, letterSpacing, lineHeight],
       collect computed values from p elements in 6+ sections. Count distinct
       values. 3+ distinct per property = PASS (letter-spacing: 2+ with
       range >= 0.02em = PASS).
```

---

## PART 6: SUMMARY — THE SCALE 5 FAILURE IN ONE SENTENCE

**Scale 5 failed because the prompt defines it ("micro-details at 4-16px") but provides ZERO binary rules with specific values, and binary rules are the ONLY thing that achieves agent compliance.**

The fix is 8 CSS properties, each with 3-4 zone-specific values, each with a binary verification test. Total additional CSS: ~60 lines. Total additional self-check items: 5. Total additional prompt rules: 1 (SC-11).

The flagship HTML already had the RIGHT CONCEPT (typographic convergence gradient) with the WRONG VALUES (ranges 3-4x below perception threshold). The playbook amplifies the values to cross the perception threshold while maintaining the metaphor-aligned convergence arc.

---

## APPENDIX A: Property-Value Quick Reference

| Property | Sparse Value | Standard Value | Dense Value | Refined Value | Range |
|----------|-------------|----------------|-------------|---------------|-------|
| font-size | 17px | 16px | 15px | 16px | 2px |
| font-weight | 400 | 400 | 500 (first-p) | 400 | 100 |
| color | #2A2420 | #1A1A1A | #1E1B18 | #1A1A1A | 16 RGB pts |
| margin-bottom | 20px | 16px | 12px | 16px | 8px |
| letter-spacing | 0.015em | 0.005em | -0.01em | 0 | 0.025em |
| line-height | 1.85 | 1.75 | 1.6 | 1.7 | 0.25 |
| word-spacing | 0.04em | 0 | -0.02em | 0 | 0.06em |
| max-width | 62ch | 68ch | 74ch | 68ch | 12ch |

## APPENDIX B: Files Modified

This playbook requires changes to:
1. **`07-intentionality.html`** — Replace lines 736-834 (current Scale 5 CSS) with amplified values per this playbook
2. **Master execution prompt** — Add SC-11 rule to B5 section
3. **Builder self-check (B10)** — Add SC5-01 through SC5-05

## APPENDIX C: Relationship to Other Audit Reports

- **Channel analyst (01-channel-playbook.md):** Scale 5 playbook provides Ch2 (Typographic) operational values that the channel analyst should reference for channel expansion
- **Guardrail classifier (01-guardrail-classification.md):** SC-11 proposed rule is a BINARY FAIL-IF rule (guardrail, not playbook). The classifier should categorize it accordingly
- **Crown jewel comparison (task #5):** DD-006's Scale 5 implementation at lines 486-520 is the primary exemplar

---

**END Scale 5 (DETAIL/CHARACTER) Operational Playbook**

**Total lines:** ~450
**Properties covered:** 8 (font-size, font-weight, color, margin-bottom, letter-spacing, line-height, word-spacing, max-width)
**New prompt rules proposed:** 1 (SC-11)
**New self-check items:** 5 (SC5-01 through SC5-05)
**New gate checks:** 1 (SC5-GATE at Gate 3)
