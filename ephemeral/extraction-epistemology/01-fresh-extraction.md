# Fresh-Eyes Extraction: What Should Be Extracted Into a Reusable Design System

**Date:** 2026-02-14
**Method:** Visual rendering + source code reading, zero prior context
**Files Examined:** 9 HTML pages (5 visual, 4 source)

---

## Executive Summary

After examining HTML exploration files both visually (via Playwright) and through source code, I've identified extractable components through a **REUSE POTENTIAL** lens. This is NOT a comprehensive design system audit—it's a fresh perspective on what patterns appear repeatedly enough to justify extraction.

**Key Finding:** The system exhibits THREE TYPES of extractable components: **Material Components** (visible UI), **Structural Scaffolding** (layout patterns), and **Constraint Tokens** (locked values). Traditional extraction focuses on #1; this system's power comes from extracting #2 and #3.

---

## Part 1: My Extraction Inventory

I categorized extractables by **what they ARE**, not by existing taxonomy:

### Category A: Locked Values (Tokens)
*Things that NEVER change across all pages*

**Visual Evidence:** Every single page I viewed had:
- Completely sharp corners (zero rounded edges anywhere)
- Flat surfaces (no shadows, no depth illusion)
- The same cream background color
- The same red accent color
- The same typeface trio: serif for emphasis, sans for body, mono for code

**Source Evidence:** From reading DD-003, OD-004, AD-001:
```css
--border-radius: 0;
--box-shadow: none;
--color-background: #FEF9F5;
--color-primary: #E83025;
--font-display: 'Instrument Serif';
--font-body: 'Inter';
--font-mono: 'JetBrains Mono';
```

**Extractable:** All CSS custom properties that define visual identity. These aren't just "design tokens"—they're **invariants**. The comments in source code call them "LOCKED."

**Why Extract:** Because violating these breaks visual coherence instantly. I could FEEL when something had sharp vs rounded corners just from visual scans.

---

### Category B: Repeated Visual Components
*Things I saw on EVERY page*

#### B1: The Two-Zone Callout Box

**Visual:** Orange-bordered boxes with a small label at top ("Essence", "Info", "Tip", "Gotcha") and larger body text below.

**Source Evidence (DD-003):**
```html
<div class="callout callout--info">
  <div class="callout-label">Info</div>
  <div class="callout-body">
    <p>Your message here.</p>
  </div>
</div>
```

**CSS Pattern:**
- 4px left border (never 2px, never 3px)
- Label zone: small, uppercase, sparse
- Body zone: larger, normal case, dense prose

**Variants Seen:** Info (blue), Tip (green), Gotcha (red), Essence (orange), Challenge (purple), Note (gray)

**Extractable:** Component with variant system. The **two-zone structure** is the pattern; the **border color** is the variant.

---

#### B2: Code Blocks With Copy Button

**Visual:** Dark background code blocks with syntax highlighting, always with a "Copy" button in top-right.

**Consistent Elements:**
- Dark background (#2d2d2d range)
- Syntax-colored text
- Monospace font
- Copy button positioned absolutely top-right
- Language label in top-left

**Extractable:** Component with copy-to-clipboard functionality.

---

#### B3: The File Tree ASCII Visualization

**Visual (from Boris page):** Text-based file structure using special characters:
```
app/
├── layout.tsx
├── page.tsx
├── dashboard/
│   ├── page.tsx
│   └── chart.tsx
```

**Extractable:** CSS styling for pre-formatted file trees with proper indentation and line characters.

---

### Category C: Layout Scaffolding
*Invisible structure patterns I only caught by comparing multiple pages*

#### C1: The Dense/Sparse Rhythm Pattern

**Visual Discovery:** Scrolling through DD-001 and OD-001, I noticed sections **breathe**—alternating between packed content and empty space. Not random—rhythmic.

- Sparse section: Big heading, one paragraph, lots of whitespace
- Dense section: Heading + code + table + multiple callouts + minimal breathing room
- Sparse section again
- Dense section again

**This is NOT a component—it's a compositional pattern.**

**Extractable:** Guidelines/rules for density sequencing, probably with semantic class names like `.section--sparse` and `.section--dense`.

---

#### C2: The Width Asymmetry Pattern

**Visual Discovery:** Looking at OD-001 (the Q&A page), questions were NARROW and answers were FULL-WIDTH. This created visual rhythm through **width variation**, not just content density.

**Source Evidence (OD-001 source):**
```css
.question {
  margin-left: 5%;  /* Indented */
  max-width: 90%;
}

.answer {
  margin-left: 0;
  max-width: 100%;  /* Full width */
}
```

**Extractable:** Width variation pattern rules—not a component but a compositional principle.

---

#### C3: The Header-Content-Footer Sandwich

**Visual:** Every page had:
1. Dark header with white text
2. Light cream main content area
3. Dark footer mirroring header

**Consistent across all pages examined.**

**Extractable:** Page template with header/main/footer structure + dark/light zone CSS.

---

### Category D: Micro-Patterns I Only Saw From Visual Rendering

**D1: Drop Cap on First Paragraph**
Visually: First letter of some sections was HUGE (serif, 3x size). Didn't see this from source code alone—only from rendering OD-001.

**D2: Progress Indicators**
Visually: Small numbered circles at the side showing reading position (OD-001 "Ch 1, Ch 2, Ch 3"). Interactive scrolling revealed they update.

**D3: Table Header Styling**
Every table had the same header style: bold, bottom border, left-aligned. Saw this across Boris page, CD-006, DD-001.

---

## Part 2: My Extraction Methodology

### How I Decided What Gets Extracted

I operated from a **REUSE FREQUENCY + VISUAL IMPACT** worldview:

1. **If I saw it 3+ times → candidate for extraction**
2. **If removing it would break visual coherence → must extract**
3. **If it's a value (not structure) that never changes → extract as token**
4. **If it's a compositional rule (not a component) → extract as guideline**

### My Mental Model

Traditional component libraries extract **nouns** (buttons, cards, modals).

This system needs to extract:
- **Nouns** (callouts, code blocks) ← Traditional
- **Adjectives** (sparse, dense, sharp, flat) ← Tokens
- **Verbs** (alternate, breathe, flow) ← Compositional patterns

The adjectives and verbs are JUST AS extractable as the nouns. They're the **rules**, not the **things**.

---

## Part 3: What Surprised Me

### Surprise #1: The "Soul" is Extractable

I kept seeing comments in source code like "Soul Piece #1", "Soul compliance", "ANTI-PHYSICAL identity."

**What I observed:** These aren't branding guidelines—they're **perceptual constraints** that create immediate wrongness when violated.

Example: If one callout had `border-radius: 4px`, it would look BROKEN against everything else's sharp edges. The "soul" is the **consistency field** that makes violations visible.

**This is extractable**—not as CSS, but as **audit rules**. A design system can export "here's how to verify soul compliance."

---

### Surprise #2: Density is Content-Aware

From visual scrolling: Dense sections weren't just "more stuff crammed in." They were **structurally complex**: code + table + multiple callouts.

Sparse sections were **structurally simple**: one heading + one paragraph.

**Implication:** You can't extract "dense component" and "sparse component." Density emerges from **composition**, not from individual components.

**What's extractable:** Rules for when to use complexity vs simplicity.

---

### Surprise #3: The Width Games

Scrolling OD-001, the narrow questions created **visual lanes**—like the content was flowing through channels. Full-width answers felt like pools.

**I would NOT have caught this from source code alone.** It's a kinetic perception from scrolling.

**Extractable:** Width variation as a rhythm technique, with specific margin-left percentages.

---

### Surprise #4: Everything is HTML + CSS

NO JavaScript frameworks. No React. No build step. Just HTML files with inline `<style>` blocks.

**Implication:** The extractables need to work in vanilla CSS. No component props, no JavaScript state management.

**What this means for extraction:** The design system is a CSS library + HTML patterns, not a React component library.

---

## Part 4: Visual Observations That Source Code Missed

### What I Saw Rendered But Wouldn't Catch Reading Code:

1. **Font loading timing:** Text flickered briefly before the serif font loaded (saw this in Boris page). The fallback was visible for ~100ms.

2. **Scroll smoothness:** OD-001 had smooth scroll animations when clicking chapter links. Felt intentional, not browser default.

3. **Code block contrast:** Dark code blocks had STRONG contrast against cream background. Much more noticeable rendered than reading hex values.

4. **Whitespace compression on mobile:** Taking screenshots, I noticed padding adjusts at smaller widths (saw this testing at different browser sizes).

5. **The "islands" really look like islands:** DD-003 talks about "density islands" in comments. Visually, the content clusters ACTUALLY looked like islands in an ocean of whitespace—metaphor matches perception.

6. **Table zebra striping:** Tables had subtle alternating row backgrounds. Didn't see this in source (might be inherited from browser default or I missed it).

---

## Part 5: What Doesn't Fit Neatly

### Things I'm Unsure About:

**1. The Pattern Names**

Source code references "PULSE", "CRESCENDO", "GEOLOGICAL", "Z-Pattern", "F-Pattern". These seem to be density/layout patterns.

**Question:** Are these extractable, or are they just descriptive labels? Can you "extract CRESCENDO" into a reusable thing, or is it a conceptual framework?

**2. The Metaphor-Driven Design**

I saw files named "manuscript-codex.html", "city-zoning.html", "elevation-map.html". The Boris page literally looked like a manuscript with serif titles and dense text blocks.

**Question:** Is the **metaphor** extractable? Or just the visual result?

**3. The Research Citations**

Source code has comments like "R3-047", "DD-F-003", "EXT-CONF-013". These seem to be research finding IDs.

**Visual impact:** Zero. I couldn't see these from rendering.

**Question:** Are these part of the extractable system (provenance tracking) or just build artifacts?

**4. The Fractal Claim**

Comments say "fractal self-similarity at 5 scales." I saw rhythm at page level (scrolling) and component level (callout structure). But character level? Navigation level?

**Honest assessment:** I didn't verify all 5 scales visually. Would need more systematic audit.

---

## My Extraction Lens: The Worldview I Operated From

**Lens Name:** REUSE POTENTIAL

**Axiom:** Extract what appears repeatedly and what would cause pain if duplicated manually.

**Decision Tree:**
1. Does this appear in 3+ distinct contexts? → Extract it
2. Would copying this manually introduce errors? → Extract it
3. Is this a value that MUST stay consistent? → Extract as token
4. Is this a pattern that SHOULD stay consistent? → Extract as guideline
5. Is this a one-off creative expression? → DON'T extract

**What this lens catches:**
- Tokens (values that never change)
- Components (structures that repeat)
- Patterns (compositional rules that recur)

**What this lens misses:**
- Conceptual frameworks (metaphors, mental models)
- One-off creative flourishes (unique page designs)
- Metadata/provenance (research IDs, build artifacts)

---

## Appendix: The Files I Examined

### Visually Rendered (Playwright):
1. `DD-001-breathing.html` — Saw sparse/dense alternation, callouts, code blocks
2. `OD-001-conversational.html` — Saw Q&A structure, drop caps, width asymmetry, chapter navigation
3. `CD-006-pilot-migration.html` — Saw table of contents, bento grid sections, decision matrices
4. `boris/metaphor-1-manuscript-codex.html` — Saw manuscript aesthetic, dense typography
5. `OD-002-narrative.html` (accidentally loaded) — Saw story structure, progressive density

### Source Code Read:
6. `DD-003-islands.html` — Read tokens, component structure, threading headers
7. `OD-004-confidence.html` — Read geological stratification pattern, research citations
8. `AD-001-z-pattern.html` — Read axis geometry concepts, paired exploration system

### Screenshots Captured:
- 6 screenshots showing visual rhythm, component styling, layout patterns
- Key observations: sharp edges everywhere, strong color consistency, rhythmic density variation

---

## Final Count: What I'd Extract

### Tier 1 — MUST Extract (Breaking these = broken system):
- 8 locked tokens (border-radius, box-shadow, 3 colors, 3 fonts)
- 2-zone callout component (6 variants)
- Code block component with copy button
- Header/main/footer page template
- Dense/sparse rhythm guidelines

### Tier 2 — SHOULD Extract (High reuse, medium pain if duplicated):
- File tree ASCII styling
- Table header styling
- Width asymmetry pattern
- Drop cap styling
- Decision matrix component

### Tier 3 — COULD Extract (Moderate reuse, low pain if duplicated):
- Progress indicator nav
- Section divider styling
- Quote/pull-quote component
- "Essence" vs "Info" semantic differentiation

**Total Extractables:** ~20 items across tokens, components, and compositional patterns.

---

## Methodology Note

This extraction was performed **WITHOUT reading**:
- Any research documents
- Any synthesis files
- Any prior analysis
- Any design system documentation
- Any provenance chains

**Only examined:** Raw HTML files, both visually and via source code.

**Bias acknowledgment:** My lens (REUSE POTENTIAL) is ONE possible lens. Other lenses would extract different things. A "CREATIVE ENABLEMENT" lens might prioritize metaphor scaffolding. A "BRAND IDENTITY" lens might prioritize soul constraints. This is not THE extraction—it's AN extraction.
