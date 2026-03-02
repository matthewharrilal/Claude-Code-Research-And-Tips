# Vocabulary — Design Decisions & Rationale

This document explains WHY the design system makes the choices it does. For exact values, see `tokens.css`. For what it refuses, see `identity.md`.

---

## Palette

**Warm, not clinical.** The cream background (`#FEF9F5`) and warm border tones (`#E0D5C5`, `#F0EBE3`) create editorial invitation. Cool grays (`#F5F5F5`) read as institutional. The warmth is a deliberate counterpoint to the sharp geometry — inviting you in, then demanding precision.

**Two-color text hierarchy.** Primary text (`#1A1A1A`) and secondary text (`#666666`). That's it. The system rejected the pipeline's constructed gray ramp (`#444444`/`#888888`/`#AAAAAA`) — explorations consistently use only two text levels.

**Semantic accent colors.** Five accents carry meaning, not decoration: blue (`#4A90D9`) for info, green (`#4A9D6B`) for tips, coral/red (`#E83025`/`#C97065`) for warnings, purple (`#7C3AED`) for essence, amber (`#D97706`) for challenges/reasoning. Each accent has a matching opaque tinted background for callout interiors. (Note: CD-006 used breathing zone background for essence callouts; the opaque tinted backgrounds are a post-CD normalization.)

**Zone backgrounds.** Four background values signal content type shifts: sparse (`#FEF9F5`, warm cream), dense (`#FFFFFF`, near-white), breathing (`#FAF5ED`, earthy tan), bedrock (`#1A1A1A`, dark). Background changes at zone boundaries are the system's primary atmospheric tool. (Note: specification references to `#FAFAFA` reflect an older neutral palette before warm refinement. `#FEF9F5` is canonical.)

---

## Typography

**Literary documentation feel.** The three typefaces create a specific voice:
- **Instrument Serif** (display) — literary authority, editorial confidence. H1/H2 headings, Essence callout body. NEVER body text.
- **Inter** (body) — functional clarity, neutral readability. All body text, callout labels, UI elements.
- **JetBrains Mono** (code) — technical precision. Code blocks, metadata labels, file trees.

**Single type scale.** 9 steps from 12px (labels) to 48px (hero text), based on the `--text-*` tokens. Ratios between levels average ~1.2x (range: 1.14-1.33), creating clear hierarchy without shouting. A font-size jump of 4px+ signals a zone boundary; a 2px jump signals within-zone variation.

**h3 is always italic.** `h3 { font-family: var(--font-display); font-style: italic; }` — this creates a visual "step down" from h2's upright serif to h3's italic serif, reinforcing hierarchy without changing weight. Non-italic h3 is an anti-pattern.

---

## Spacing

**4px base unit.** All spacing derives from multiples of 4: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px. This creates visual consistency without conscious effort.

**Inside vs between.** Components use tight internal spacing (8-12px). Gaps between components are generous (24-32px). Section breaks are spacious (48-64px). The ratio is approximately 1:3 — if elements are 12px apart inside, they're 36-48px apart outside. This creates grouping without borders.

**Gestalt aliases.** Three semantic spacing values: `within` (8px), `between` (32px), `chapter` (64px). These make intent explicit in CSS.

---

## Borders

**Three weights, not four.** 4px (structural accent — callout borders, featured elements), 3px (section framing — header/footer borders, structural divisions), 1px (subtle separators — table rows, component frames). The 2px weight is deliberately skipped — it's structurally ambiguous, neither bold enough for accent nor subtle enough for separator. (Exception: OD-004 confidence encoding.)

---

## Container Width

**Range, not mandate.** Explorations used 860-1100px across DD/OD/CD stages:
- **Narrow (860px):** Dense technical content, reading-focused layouts (all OD explorations)
- **Standard (900-1000px):** General-purpose, most DD explorations
- **Wide (1100px):** Multi-axis layouts, spatial compositions (DD-005, all CD explorations)

Consistent within a single page. Variable across pages based on content needs.
