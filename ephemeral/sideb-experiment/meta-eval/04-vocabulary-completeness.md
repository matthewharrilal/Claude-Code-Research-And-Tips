# Vocabulary Completeness Audit: 7-File Assessment

**Auditor:** Meta-cognitive evaluation agent (Opus 4.6)
**Date:** 2026-03-01
**Scope:** The 7 vocabulary files that constitute the builder's operational knowledge base
**Question:** Is 165,000+ lines compressed into 1,319 lines sufficient for quality output?

---

## Files Under Review

| # | File | Lines | Layer | Role |
|---|------|-------|-------|------|
| 1 | `identity/identity.md` | 87 | Identity | Character, soul, refusals |
| 2 | `identity/vocabulary.md` | 55 | Rationale | Design decision reasoning |
| 3 | `grammar/mechanisms.md` | 88 | Grammar | 20 mechanisms + transition grammar |
| 4 | `grammar/grammar.md` | 149 | Grammar | Compositional rules, sequencing, density |
| 5 | `components/components.md` | 37 | Inventory | Component catalog with velocity/weight |
| 6 | `vocabulary/tokens.css` | 124 | Tokens | 65 CSS custom properties |
| 7 | `components/components.css` | 779 | Implementation | CSS for all components |
| | **TOTAL** | **1,319** | | |

---

## 1. Builder Sufficiency

**Question:** If an Opus builder receives a conviction brief + these 7 files, can it write a rich, compositionally sophisticated HTML page?

### What IS sufficient

The 7 files provide a surprisingly complete operational vocabulary:

- **Soul constraints are crystal clear.** `identity.md` leaves zero ambiguity: `border-radius: 0` everywhere, `box-shadow: none`, no gradients, no `rgba()` opacity tricks, no pure black/white, no cool grays. A builder reading this file cannot accidentally violate soul. The refusals section (lines 48-70) is the single strongest part of the entire vocabulary -- binary, exhaustive, with documented exceptions.

- **Token values are immediately usable.** `tokens.css` is a complete `:root` block that a builder can copy directly into a `<style>` tag. 65 custom properties covering colors, fonts, spacing, borders, and syntax highlighting. Every `var(--...)` reference in `components.css` resolves to a value in `tokens.css`. The token system is self-contained.

- **Component CSS is production-ready.** `components.css` at 779 lines provides working implementations for every component in the inventory. A builder who reads this file can immediately write HTML using `.callout--essence`, `.bento-grid`, `.reasoning`, `.breathing-zone`, etc. The CSS includes responsive rules (`@media max-width: 768px`), reduced motion (`prefers-reduced-motion`), accessibility (`skip-link`, `focus-visible`), and selection styling. This is not documentation -- it is deployable code.

- **Component inventory provides decision-making metadata.** `components.md` assigns velocity (SLOW/MEDIUM/FAST) and weight (Light/Medium/Heavy) to each component. A builder choosing between components can use this to avoid same-velocity stacking or weight imbalance. 37 lines is minimal but sufficient for a lookup table.

### What is MISSING

**1. Font loading instructions.** Neither `tokens.css` nor any vocabulary file tells the builder HOW to load the three fonts. The token file declares `--font-display: 'Instrument Serif', Georgia, serif` but does not include the Google Fonts `<link>` tags. A builder must independently know to add:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
This is a concrete gap. CD-006 includes this (line 62-64), but the vocabulary files do not.

**2. HTML boilerplate / document structure.** No file specifies the `<!DOCTYPE html>`, `<html lang="en">`, viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`), or recommended `<head>` structure. A builder can derive this from general knowledge, but the vocabulary should not depend on general knowledge -- it should be self-contained.

**3. Page-level CSS.** `components.css` styles individual components but does not include page-level CSS: `body` styles, `html` background color, base `h1`/`h2`/`h3` styles, `p` styles, `a` link styles. The builder must compose these from tokens. This is intentional (the builder should compose), but it means the builder needs to know:
- `body { font-family: var(--font-body); color: var(--color-text); background: var(--color-background); }`
- `h1 { font-family: var(--font-display); }`
- `h3 { font-family: var(--font-display); font-style: italic; }` (documented in `vocabulary.md` line 28 but not in CSS)

**4. The container width range is documented but not implemented.** `vocabulary.md` says 860-1100px, but `components.css` hardcodes `max-width: 1100px` in `.section-zone` (line 677). There is no CSS class for 860px or 960px container widths. The builder must create their own container wrapper and decide the width per content type.

**5. Animation/transition guidance is thin.** `tokens.css` defines `--transition-standard: 0.3s ease` but no vocabulary file explains WHAT should be transitioned or WHEN. The existing explorations use minimal transition (this is intentional -- KortAI is editorial, not interactive), but this philosophy is not explicitly stated in the 7 files.

### Verdict: Builder Sufficiency

**MOSTLY SUFFICIENT with 3 concrete gaps.** An experienced Opus builder receiving these 7 files + a conviction brief can produce quality output. The gaps (font loading, boilerplate, page-level CSS) are addressable with a small supplementary section (~30 lines) rather than a separate file. The bigger question is whether the builder can produce RICH output, which depends more on the conviction brief and mechanism guidance (see sections 3 and 4 below).

---

## 2. TC Sufficiency

**Question:** Can a TC agent running Phases 0-3 with only `identity.md` + `vocabulary.md` (142 lines) derive genuine tension?

### What TC gets

The TC agent sees:
- A character statement: "editorial purist with the temperament of a print architect" (identity.md line 5)
- Two soul principles: angular geometry, no shadows
- Three identity signatures: warm palette, typography trinity, 4px left-border
- Internal tensions: warmth vs severity, solid offset vs anti-shadow, vocabulary ceiling
- Palette rationale: warm cream, two-color text hierarchy, semantic accents, zone backgrounds
- Typography rationale: literary documentation feel, single type scale, h3 always italic
- Spacing rationale: 4px base, inside vs between ratio, gestalt aliases
- Border rationale: three weights not four

### Assessment

This is **significantly better than a 35-line static personality description.** The 142 lines do not just describe KortAI -- they explain its internal contradictions, acknowledge its limitations, and provide the WHY behind each decision. The "Internal Tensions" section (lines 36-44) is particularly valuable for TC work because it gives the agent productive contradictions to work with, not just a flat description.

However, there is one important limitation:

**The vocabulary ceiling acknowledgment (identity.md lines 79-87) tells the TC agent what the system CANNOT express.** This is valuable honesty, but a TC agent might interpret it as permission to not try. The system says it "struggles with playfulness, visual surprise, and emotional range beyond authoritative warmth." A TC agent reading this might constrain its tension derivation to only produce outputs within the acknowledged range, when the whole point of TC is to find metaphors that push beyond the vocabulary ceiling.

**The fix is framing, not content.** The TC agent should read identity.md as "here is the system's comfort zone" rather than "here are the boundaries." This is a prompt engineering concern for the orchestrator, not a vocabulary file concern.

### Verdict: TC Sufficiency

**SUFFICIENT.** The 142 lines provide more personality signal than most design system documentation. The TC agent gets character + contradictions + rationale -- the three ingredients for genuine tension derivation. The vocabulary ceiling acknowledgment is a mild risk (agent self-limiting) but manageable through orchestrator framing.

---

## 3. Mechanism Depth

**Question:** Is "Dense/Sparse Alternation: INHALE/EXHALE rhythm through padding changes between sections" enough for a builder to IMPLEMENT this?

### The problem

`mechanisms.md` lists 20 mechanisms in table format. Each gets one line of description. Let me evaluate whether these descriptions are implementable:

| Mechanism | Description | Can a builder implement from this alone? |
|-----------|-------------|------------------------------------------|
| Dense/Sparse Alternation | "INHALE/EXHALE rhythm through padding changes between sections" | **Partially.** Builder knows the concept but not the specific padding values (24px inhale vs 64-80px exhale). |
| Spacing Compression | "Inverse density-confidence: more certain = more space, less certain = compressed" | **No.** Concept is clear but implementation requires knowing the specific gradient (40px -> 32px -> 20px -> 16px or similar). |
| Border-Weight Gradient | "4px/3px/1px encodes hierarchy. PROGRESSIVE mode or DISCRETE mode" | **Yes.** The values are stated. Builder can implement directly. |
| Zone Background Differentiation | "4-color background token system signals content type shifts" | **Yes.** Token values are in `tokens.css`. Builder maps zones to backgrounds. |
| Bento Grid | "Variable-span grid where cell size encodes importance" | **Partially.** Concept clear, but implementation requires knowing grid-template specifics (2x2=anchor, etc). The CSS in `components.css` provides the base `.bento-grid` class. |
| Solid Offset Depth | "::after pseudo-element at 4px offset creates depth without box-shadow" | **Partially.** Technique named but no CSS snippet showing the pseudo-element implementation. Token values exist in `tokens.css` (--offset-x, --offset-y, --offset-color) but no component class implements it. |

### The critical insight

**Mechanisms.md is an INDEX, not an IMPLEMENTATION GUIDE.** It tells the builder WHAT tools exist and WHERE they come from. The actual implementation lives in two places:

1. **`components.css`** -- for mechanisms that are component-bound (callouts, code blocks, tables, bento grid). A builder reading components.css sees exactly how callout borders work, how zone backgrounds are applied, how bento grid spacing operates.

2. **The conviction brief / operational recipe** -- for mechanisms that are composition-level (dense/sparse alternation, spacing compression, width variation). These are not component CSS; they are layout decisions. The builder needs to know "this section gets 64px padding, the next gets 24px" -- which comes from the TC pipeline, not from the vocabulary files.

### The gap is real but not where expected

The gap is NOT "mechanisms.md is too abstract." The gap is that **composition-level mechanisms have no CSS reference implementation anywhere in the 7 files.** Component-level mechanisms (border weights, syntax highlighting, callout colors) are fully implemented in `components.css`. But the higher-order mechanisms -- the ones that make a page COMPOSITIONALLY RICH rather than just correctly styled -- exist only as concepts.

**Specifically missing:**
- No CSS example of INHALE/EXHALE padding patterns
- No CSS example of spacing compression gradients
- No CSS example of zone-to-zone transition handling
- No CSS example of density arc across a page (intro sparse -> middle dense -> conclusion sparse)

These are the mechanisms that distinguish RICH output from CORRECT output. And they are the ones most likely to be lost in the compression from 165,000 lines to 1,319.

### Verdict: Mechanism Depth

**INSUFFICIENT for composition-level mechanisms.** Component-level mechanisms are well-served by `components.css`. But the ~7 composition-level mechanisms (Dense/Sparse Alternation, Spacing Compression, Width Variation, Zone Background Differentiation applied compositionally, Transition Grammar applied at boundaries) need concrete CSS examples showing how they create page-level rhythm. One-line descriptions are not enough for a builder to produce INHALE/EXHALE rhythm -- they need to see what 64px exhale next to 24px inhale actually looks like in CSS.

---

## 4. Grammar Actionability

**Question:** Is `grammar.md` actionable for a builder, or abstract?

### Assessment by section

**Nesting (lines 8-13):** ACTIONABLE. "Maximum depth: 2 levels. Zone wrapper -> component. Never component inside component." Binary. A builder can test compliance immediately.

**Rhythm/INHALE-EXHALE (lines 16-22):** PARTIALLY ACTIONABLE. "Every 2-3 dense zones must be followed by breathing room (48px+ spacing or background shift)" gives a concrete threshold. But "Maximum consecutive dense: 3" is a rule, not a recipe. A builder knows the constraint but not the positive action.

**Zones (lines 26-31):** ACTIONABLE. "Maximum zone changes per viewport: 2-3" and the zone separation preference hierarchy (whitespace -> background color -> left border -> full border -> horizontal rule) are concrete decision guides.

**Density (lines 35-45):** MOSTLY ACTIONABLE. "Maximum 3-4 components per viewport-height" and "Maximum 2 callouts per viewport" are concrete ceilings. "Content density floor: Every zone must contain at least 2 content elements" is a binary gate. These are implementable.

**Component Sequencing (lines 49-62):** ACTIONABLE with excellent specificity. "Never stack same-velocity" + "Temperature flow: warm -> neutral -> cold" + the recommended sequences (Opening, Teaching, Decision, Closing) are concrete patterns a builder can follow. This is one of the strongest sections.

**Organizational Pattern Selection (lines 66-77):** ACTIONABLE. The content-type-to-pattern table is a lookup. "Q&A -> CONVERSATIONAL", "Tutorial -> TASK-BASED", etc.

**Density Patterns (lines 82-98):** ACTIONABLE. Canonical padding values are specified: "PULSE: Inhale 24px / Exhale 64-80px", "CRESCENDO: Progressive 80px -> 64px -> 48px -> 24px -> 16px", "BOOKENDS: Dense intro (24px) -> Sparse action (64px) -> Dense summary (24px)". This is the kind of concrete CSS guidance that mechanisms.md lacks.

**Fractal Self-Similarity (lines 110-118):** CONCEPTUAL but actionable at principle level. "Dense/sparse rhythm should repeat at page/section/component/character scale." A builder who understands the concept can check their work against it.

**Responsive (lines 122-128):** ACTIONABLE. "768px breakpoint", "Padding compression: Desktop 48-64px -> tablet 32-48px -> mobile 24-32px", "Bento grids collapse to single column."

**Anti-Patterns (lines 132-140):** HIGHLY ACTIONABLE. 7 specific anti-patterns with names and descriptions. "Callout stacking -- 3+ callouts visible simultaneously", "Code wall -- code block exceeding 30 lines."

### Verdict: Grammar Actionability

**MOSTLY ACTIONABLE.** `grammar.md` is one of the strongest files in the vocabulary. It strikes a good balance between principle and specificity. The density patterns section (lines 82-98) is particularly valuable because it provides the concrete padding values that `mechanisms.md` lacks. The anti-patterns section (lines 132-140) converts abstract quality concerns into binary tests. The main weakness is that some rules are stated as ceilings (maximum N) without paired guidance on the positive action (what SHOULD you do?).

---

## 5. Component Coverage

**Question:** Is `components.css` at 779 lines the right amount?

### What it covers

The CSS provides working implementations for:

**Universal components (lines 1-416):**
- Callout family (5 semantic variants + label + content) -- 82 lines
- Code blocks (pre, inline code, code-snippet with header) -- 82 lines
- Page header (with ID, title, subtitle) -- 33 lines
- Page footer -- 18 lines
- Tables -- 31 lines
- Skip link + focus-visible + selection -- 24 lines
- Stats bar / metadata grid -- 48 lines
- Section indicator / meta line -- 22 lines
- File tree -- 28 lines
- Decision matrix -- 30 lines
- Q&A pair (with drop cap) -- 42 lines

**CD-era components (lines 500-733):**
- Reasoning container -- 41 lines
- Core abstraction -- 38 lines
- Bento grid -- 28 lines
- Essence pullquote -- 25 lines
- Version badge -- 10 lines
- Section zones (5 density variants) -- 37 lines
- Breathing zones (3 variants) -- 18 lines

**Responsive (lines 739-766):** 27 lines covering 768px breakpoint

**Accessibility (lines 772-779):** 8 lines for reduced motion

### Assessment

**779 lines is the RIGHT amount for component-level CSS.** It is not so large that a builder drowns (the entire file fits in a single context window with room to spare). It is not so small that key components are missing. The CSS is well-organized with clear section comments, uses token references consistently, and includes both desktop and mobile variants.

**What is APPROPRIATELY absent:**
- Dark mode (explicitly hypothetical -- not validated)
- Print styles (no validated instances)
- Complex animations (KortAI is editorial, not interactive)
- Multiple grid layouts (one bento-grid is sufficient -- others are composed from section-zones)

**What could be improved:**
- No `.container` or `.page-wrapper` class at standard widths (860/960/1100px)
- No base typography styles (`h1`, `h2`, `h3`, `p`, `a`) -- these must be composed by the builder
- The solid-offset depth technique (Mechanism #3) has token values in `tokens.css` but no component class in `components.css`
- No section-divider component (mentioned in mechanisms.md as "Horizontal rule with centered label via ::before")

### Verdict: Component Coverage

**GOOD with minor gaps.** 779 lines covers the component vocabulary effectively. The 4 items above (container class, base typography, solid-offset, section-divider) are small additions (~40-60 lines total) that would make the CSS more complete without adding bloat. The absence of page-level CSS is the most significant gap for a builder who needs to assemble a complete HTML file.

---

## 6. Critical Gaps

**What does a builder NEED that is not in any of these 7 files?**

### Gap 1: Font Loading (SEVERITY: HIGH)

The three fonts (Instrument Serif, Inter, JetBrains Mono) are referenced in `tokens.css` but no vocabulary file provides the Google Fonts `<link>` tags or explains the font loading strategy (preconnect, display=swap). Every validated exploration includes these tags, but the vocabulary does not.

**Impact:** A builder who omits font preconnect gets a FOUT (flash of unstyled text). A builder who loads wrong font weights (e.g., Instrument Serif bold instead of regular+italic) gets incorrect rendering.

**Fix:** Add a 10-line "Font Loading" section to `vocabulary.md` or `tokens.css`.

### Gap 2: HTML Boilerplate (SEVERITY: MEDIUM)

No file specifies `<!DOCTYPE html>`, viewport meta tag, charset, or lang attribute. These are universal web knowledge, but the vocabulary should be self-contained.

**Impact:** Minimal for experienced builders. Higher risk for agents who might produce HTML fragments rather than complete documents.

**Fix:** Add a 15-line "Document Template" section showing the minimal `<head>` structure.

### Gap 3: Base Typography CSS (SEVERITY: MEDIUM-HIGH)

`vocabulary.md` documents that `h3` should always be italic serif (line 28), but `components.css` does not include `h3 { font-family: var(--font-display); font-style: italic; }`. Similarly, no base `h1`, `h2`, `p`, or `a` styles exist.

**Impact:** A builder using only `components.css` will produce unstyled headings and body text. They must manually compose base styles from tokens. This is the single most likely source of visual inconsistency between builds.

**Fix:** Add 30-40 lines of base typography CSS to `components.css`.

### Gap 4: Solid Offset Implementation (SEVERITY: LOW)

Mechanism #3 (Solid Offset Depth) is the ONLY permitted depth technique. `tokens.css` defines `--offset-x`, `--offset-y`, and `--offset-color`. But `components.css` has no class implementing it. A builder who wants to use this mechanism must write the `::after` pseudo-element CSS from scratch.

**Impact:** Low frequency (3-5/18 explorations use it), but when needed, the implementation is non-trivial (absolute positioning, pseudo-element, transform).

**Fix:** Add a 15-line `.solid-offset` utility class to `components.css`.

### Gap 5: Container Width Classes (SEVERITY: MEDIUM)

`vocabulary.md` documents three width ranges (narrow 860px, standard 900-1000px, wide 1100px). Only `section-zone` hardcodes 1100px. A builder building a narrow reading-focused page must create their own container.

**Impact:** Inconsistent container widths across builds.

**Fix:** Add 10 lines of container utility classes to `components.css`.

### Gap 6: Accessibility Beyond Skip-Link (SEVERITY: LOW)

`components.css` includes skip-link, focus-visible, and reduced-motion. Missing: ARIA landmark guidance (when to use `<nav>`, `<main>`, `<article>`, `<aside>`), heading hierarchy validation rules, color contrast verification guidance.

**Impact:** The pipeline's gate runner checks these (SC-06, SC-07), but the vocabulary files do not explain the requirements. A builder operating without the gate runner (e.g., the Step 6 side-B experiment) would not know to include 5+ ARIA landmarks.

**Fix:** Add 5 lines of accessibility notes to `components.md` or `grammar.md`.

---

## 7. Information Architecture

**Question:** Are the 7 files organized in the right way?

### Current split assessment

The 7-file split follows a logical progression:

```
WHO (identity.md) -> WHY (vocabulary.md) -> WHAT tools (mechanisms.md)
-> HOW to combine (grammar.md) -> WHAT exists (components.md)
-> EXACT VALUES (tokens.css) -> EXACT CSS (components.css)
```

This is a good architecture. It mirrors the cognitive sequence a builder follows:
1. Understand the character
2. Understand the rationale
3. Learn the compositional tools
4. Learn the compositional rules
5. Survey available components
6. Get exact token values
7. Get exact CSS implementations

### Would a different split be better?

**Merging `mechanisms.md` + `grammar.md`:** NOT recommended. Despite both being in the `grammar/` directory, they serve different functions. `mechanisms.md` is a tool catalog (WHAT is available). `grammar.md` is a rule book (HOW to combine). Merging them would obscure the distinction between vocabulary and syntax.

**Splitting `components.css` by category:** NOT recommended. 779 lines is within comfortable reading range. Splitting would create file management overhead without improving comprehension.

**Merging `identity.md` + `vocabulary.md`:** POSSIBLY beneficial. Both are short (87 + 55 = 142 lines), both are "always-load" files, and `vocabulary.md` is essentially the rationale layer for `identity.md`. A merge would reduce file count and ensure builders always read both. However, the current split allows TC agents (who only need identity) to avoid vocabulary details.

**Adding a `scaffolding.md` file:** RECOMMENDED. This would contain the missing gaps identified in Section 6: font loading, HTML boilerplate, base typography CSS, container classes, accessibility notes. Rather than bloating existing files, a dedicated scaffolding file (~60-80 lines) would provide the "how to start a page" guidance that is currently absent.

### Verdict: Information Architecture

**GOOD with one recommended addition.** The 7-file split is well-organized and follows a natural cognitive sequence. The main structural improvement would be a `scaffolding.md` or equivalent file containing the page-level setup guidance (font loading, boilerplate, base CSS) that currently falls between the cracks.

---

## 8. The Creative Example Gap

**Question:** Is the loss of creative examples -- the 18 HTML explorations showing actual working implementations -- a real problem?

### The gap is REAL and SEVERE at the compositional level

The 18 HTML explorations (DD-001 through CD-006) total roughly 30,000-40,000 lines of working CSS and HTML. They demonstrate not just individual components (which `components.css` covers well) but **how components compose into pages.** This is the critical distinction.

**What the explorations show that the vocabulary files do not:**

1. **Rhythm in action.** DD-006 demonstrates fractal INHALE/EXHALE at 4 scales simultaneously. Reading `mechanisms.md`'s one-line description ("INHALE/EXHALE rhythm through padding changes between sections") is categorically different from seeing 80px sparse padding followed by 32px dense padding followed by 16px component-level density -- and understanding WHY each value was chosen.

2. **Zone transitions as experienced.** The transition grammar in `mechanisms.md` (SMOOTH/BRIDGE/BREATHING) is correct but clinical. Seeing a BRIDGE transition in CD-006 -- where a 3px primary border separates two zones with a background color change, and the padding adjusts at the boundary -- teaches through demonstration what the rule teaches through description.

3. **Component sequencing in practice.** `grammar.md` lists recommended sequences (Hero -> Overview Callout -> Navigation). But seeing CD-006's actual sequence -- dark header with version badges, then sparse intro zone, then dense bento grid, then breathing zone pullquote, then peaked code-heavy zone, then resolution -- shows how sequencing creates NARRATIVE MOMENTUM.

4. **The metaphor-to-CSS mapping.** OD-004 shows how "geological strata" maps to specific CSS: bedrock gets 4px border + 40px padding, topsoil gets 1px border + 16px padding. This mapping from metaphor to visual treatment is the core creative act, and it cannot be learned from mechanism descriptions alone.

5. **Scale interaction.** The validated explorations show how font size, spacing, borders, and backgrounds interact AT SCALE -- not in isolation. A callout's 4px left border works differently when it sits inside a sparse zone (breathing room amplifies it) versus a dense zone (visual competition dampens it). This interaction is not documented anywhere in the vocabulary files.

### Quantifying the severity

The compression ratio for different types of information:

| Information Type | In Explorations | In Vocabulary | Ratio | Loss Assessment |
|-----------------|----------------|---------------|-------|-----------------|
| Token values | Inline CSS variables | `tokens.css` | ~1:1 | ZERO loss |
| Component styling | Per-component CSS | `components.css` | ~3:1 | MINIMAL loss (consolidated) |
| Soul constraints | HTML comments, inline | `identity.md` | ~5:1 | ZERO loss (distilled to essence) |
| Composition patterns | Full page CSS | `grammar.md` | ~50:1 | SIGNIFICANT loss |
| Metaphor->CSS mapping | Working examples | One-line descriptions | ~200:1 | SEVERE loss |
| Scale interaction | Emergent from full page | Not documented | Infinite | TOTAL loss |

The compression is lossless for atomic information (tokens, components, constraints) but catastrophically lossy for compositional information (how things work together).

### What would mitigate it

**Option A: Include 2-3 exploration HTML files as reference.** Not as templates (the anti-gravity rules rightly prohibit this), but as "worked examples" of composition. DD-006 + OD-004 + CD-006 would provide fractal, confidence-based, and compound composition examples. However, this adds 4,000-6,000 lines to the builder's context.

**Option B: Add a "Composition Examples" section to `grammar.md`.** 50-80 lines showing 2-3 annotated CSS snippets of page-level composition (not component-level). Example: "Here is a CRESCENDO density arc in CSS, showing how padding compresses from 64px to 16px across 4 sections, with zone background transitions at each boundary." This preserves the vocabulary file's compactness while bridging the composition gap.

**Option C: Rely on the conviction brief to provide composition guidance.** The TC pipeline's output (conviction brief + operational recipe) is supposed to specify the compositional decisions -- which zones, what padding, which transitions. If the conviction brief is rich enough, the builder does not need composition examples in the vocabulary. This is the current architecture's assumption.

**Assessment of Option C (current design):** This works IF the conviction brief includes specific CSS values (e.g., "Section 1: sparse zone, 64px padding, breathing background. Section 2: dense zone, 24px padding, white background. Transition: BRIDGE with 3px primary border."). If the conviction brief is abstract ("use CRESCENDO density pattern"), the builder is left to derive CSS values from `grammar.md`'s canonical padding table -- which is sufficient for experienced builders but thin for producing rich output.

### Verdict: Creative Example Gap

**REAL and the primary risk factor for the Step 6 experiment.** The vocabulary files are excellent for component-level building but insufficient for composition-level building. The gap is mitigated IF the conviction brief provides specific CSS values for the compositional decisions. If the experiment uses a thin conviction brief (metaphor + mechanisms only, no specific CSS), the builder will produce CORRECT but FLAT output -- components correctly styled but composed without the rhythmic intelligence that the explorations demonstrate.

---

## 9. Overall Verdict

### NEEDS SUPPLEMENTATION

The 7 vocabulary files are **sufficient for correctness but insufficient for richness.**

A builder reading only these 7 files will produce:
- Soul-compliant output (border-radius: 0, correct colors, correct fonts)
- Correctly styled components (callouts, code blocks, tables, headers)
- Valid HTML with proper semantic structure

A builder reading only these 7 files will NOT produce:
- Compositionally sophisticated rhythm (INHALE/EXHALE at multiple scales)
- Rich zone transitions (SMOOTH/BRIDGE/BREATHING with perceptible CSS differences)
- Metaphor-driven visual architecture (where CSS values encode metaphor logic)
- Multi-coherence at zone boundaries (where background, typography, spacing, AND borders all shift simultaneously)

### What Supplementation is Needed

**Priority 1 (BLOCKING): Base page scaffolding** (~40 lines)
- Font loading `<link>` tags
- HTML boilerplate template (`<!DOCTYPE>`, `<head>`, viewport meta)
- Base typography CSS (`body`, `h1-h3`, `p`, `a` styles including italic h3)
- Container width utility classes (860px, 960px, 1100px)

**Where:** Append to `tokens.css` or create `scaffolding.css` loaded alongside `tokens.css`

**Priority 2 (HIGH): Composition recipe examples** (~60-80 lines)
- 2-3 annotated CSS snippets showing page-level composition (not components)
- One CRESCENDO example: padding compression across 4 zones with specific values
- One PULSE example: alternating dense/sparse with specific padding + background values
- One zone boundary example: BRIDGE transition with all channels shifting simultaneously

**Where:** Append to `grammar.md` as a "Worked Examples" section, or provide as a separate `grammar/composition-examples.md`

**Priority 3 (MEDIUM): Solid offset and section divider CSS** (~25 lines)
- `.solid-offset` utility class implementing Mechanism #3
- `.section-divider` component implementing labeled horizontal rule
- ARIA landmark guidance (5+ landmarks, `<main>`, `<nav>`, `<article>`)

**Where:** Append to `components.css`

### Total supplementation: ~125-145 lines

This would bring the total vocabulary from 1,319 to ~1,460 lines -- an 11% increase that addresses the most significant gaps without fundamentally changing the architecture. The file count stays at 7 (or 8 if a scaffolding file is added).

### The conviction brief dependency

Even with supplementation, the vocabulary files operate on the assumption that the builder receives a rich conviction brief from the TC pipeline. If the Step 6 experiment bypasses or simplifies the conviction brief, the vocabulary files alone -- even supplemented -- are unlikely to produce Flagship-tier output. The vocabulary provides the ALPHABET and GRAMMAR; the conviction brief provides the STORY. Both are necessary. Neither is sufficient alone.

---

## Appendix: Compression Quality by Layer

| Layer | Source Lines | Vocabulary Lines | Ratio | Compression Quality |
|-------|-------------|-----------------|-------|-------------------|
| Soul/Identity | ~3,000 (across research + explorations) | 87 | 34:1 | EXCELLENT -- nothing lost, distilled to essence |
| Rationale | ~8,000 (specification/tokens/) | 55 | 145:1 | GOOD -- key decisions preserved, examples dropped |
| Tokens | ~617 (specification/tokens/) | 124 | 5:1 | EXCELLENT -- operational subset, nothing lost |
| Mechanisms | ~15,000 (research findings + exploration CSS) | 88 | 170:1 | POOR -- concepts preserved, implementation lost |
| Grammar | ~20,000 (patterns/ + anti-patterns/ + findings) | 149 | 134:1 | GOOD -- actionable rules preserved, process lost |
| Components | ~40,000 (18 exploration CSS) | 779 | 51:1 | GOOD -- canonical implementations preserved |
| Composition | ~80,000 (full exploration files, page-level CSS) | ~0 | Infinite | CRITICAL GAP -- composition-level patterns not documented |

The compression is healthy at the atomic level (tokens, identity, components) and problematic at the compositional level (mechanisms in action, page-level rhythm, zone interactions). This is precisely the gap that the conviction brief is designed to fill -- but only if it contains specific CSS values, not just metaphor descriptions.
