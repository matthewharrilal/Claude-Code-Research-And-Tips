# Zone: Hierarchy — Revised Analysis
## Info Callout Component | Post-Revision Assessment

**Analysis Date:** 2026-02-03
**Previous Score:** 3/5 (only 2 levels, too similar weight)
**Screenshot:** `screenshots/info-callout-L3-revised.png`

---

## Step 1: Eye Tracking

When viewing the revised Info Callout, the eye follows this sequence:

1. **FIRST: The left accent bar** — The 3-4px vertical stripe creates an immediate entry point. Its warm olive/tan color and height command the leftmost position, anchoring attention.

2. **SECOND: The body content text** — The near-black body text at 14px/400 weight has the largest optical presence. "This feature requires Claude Code version 1.4..." pulls the eye immediately after the bar because it's the largest text block with the highest contrast against the cream background.

3. **THIRD: The label (NOTE/IMPORTANT/INFO)** — The small serif italic label at 10px sits above the content but reads AFTER the content due to its reduced size and muted color. It functions as a quiet category marker, not a headline.

**Observation:** The hierarchy now correctly subordinates the label. The eye flow is: anchor (bar) > primary content (body) > category marker (label). This is appropriate for an aside that should convey information first, category second.

---

## Step 2: Hierarchy Levels

The revised component now exhibits **4 distinct hierarchy levels**:

| Level | Element | Treatment |
|-------|---------|-----------|
| **L1: Anchor** | Left accent bar | Warm olive, 3-4px width, full height, creates entry point |
| **L2: Primary** | Body content | Inter 14px/400, near-black (#2a2a2a or similar), highest contrast |
| **L3: Secondary** | Inline code | Monospace, slightly lighter background pill, medium gray |
| **L4: Tertiary** | Label | Serif italic 10px/600, wide tracking (0.15em), muted darker color |

**Improvement:** The original had only 2 levels (label and body at similar weight). The revision creates clear separation:
- Label is now distinctly subordinate through size reduction (10px vs 14px)
- Font family contrast (serif italic vs sans serif) creates a different voice
- Letter-spacing (0.15em tracking) signals "category marker" not "content"
- The label's darker but smaller treatment makes it recede while remaining legible

---

## Step 3: Hierarchy Methods

The revised hierarchy is achieved through:

### Size Contrast
- **Strong contribution.** Label at 10px vs content at 14px creates a 1:1.4 ratio. This is sufficient to establish clear subordination without making the label illegible.

### Weight Contrast
- **Moderate contribution.** Label at 600 weight vs content at 400 weight creates an interesting inversion: the smaller element is bolder. This prevents the label from disappearing entirely while keeping it secondary through size.

### Color Contrast
- **Moderate contribution.** Label uses a darker but still muted color. Content uses near-black. The content's larger surface area combined with darker color gives it optical dominance despite the label being darker per-pixel.

### Font Family Contrast
- **Strong contribution.** The serif italic label vs sans-serif body creates immediate differentiation. The italic signals "editorial aside" or "annotation" — typographic tradition for marginalia. The sans-serif body signals "primary information content."

### Position
- **Strong contribution.** Label above content follows conventional reading order but its reduced size means the eye scans past it to the larger content block. Position establishes relationship (label introduces content) while other factors establish dominance (content is primary).

### Letter-Spacing
- **Moderate contribution.** The 0.15em tracking on the label signals "category" or "metadata" — a typographic convention for labels and section markers. Tracked small caps/uppercase historically indicates taxonomy, not content.

---

## Step 4: KortAI Alignment

**KortAI Principle:** "Hierarchy emerges from structure alone."

### Is hierarchy achieved without emphasis stacking?
**Yes, with nuance.** The revised component uses multiple differentiation methods (size, family, tracking, color) but none of them "stack" in a competing way:
- No bold + underline + color
- No icon + bold + shadow
- Each method reinforces a single message: "label is category, content is information"

The label's treatments (serif, italic, small, tracked) all point to the same semantic meaning: "editorial annotation." They compound without competing.

### Does the label clearly subordinate to content or appropriately introduce it?
**Both.** The label achieves dual function:
1. **Subordination:** At 10px vs 14px, serif vs sans, the label visually recedes. It doesn't compete for attention.
2. **Introduction:** Its position above content and its tracking (a label convention) establish it as a category marker. "NOTE" tells you what kind of information follows without demanding attention itself.

**KortAI Verdict:** The hierarchy is now structurally sound. The label doesn't need to shout because its position and typographic treatment establish its role. The content speaks for itself because it has the optical mass.

---

## Step 5: Score

### Previous Score: 3/5
- Only 2 hierarchy levels
- Label and body too similar in weight
- Flat, undifferentiated

### New Score: 4.5/5

**Reasoning:**
- **+1:** Now has 4 distinct hierarchy levels (bar, content, code, label)
- **+0.5:** Font family contrast (serif italic vs sans) creates editorial tension
- **+0.5:** Tracking on label signals "category marker" correctly
- **+0.5:** Size differential (10px vs 14px) creates clear subordination
- **-0.5:** Could push further — label might benefit from even more muted color to fully recede

The component has transformed from "flat utility" to "considered hierarchy." The label now reads as a quiet editorial annotation rather than a competing headline.

### Summary Score Change: 3/5 → 4.5/5 (+1.5 points)

---

## Step 6: Perceptual Truth (Revised)

### Original Hierarchy Perceptual Truth:
> "Info Callout hierarchy is flat and functional — the left accent bar and 'NOTE' label establish attention, but content and label have too similar visual weight."

### Revised Hierarchy Perceptual Truth:
**"Info Callout hierarchy flows from anchor to content to annotation — the left bar claims the eye, the body delivers information, and the serif italic label whispers its category like a margin note in a well-typeset book."**

---

## Visual Evidence from Screenshot

The screenshot confirms:

1. **DEFAULT variant:** "NOTE" label in small serif italic, tracked, above near-black body content. Clear hierarchy established.

2. **MULTI-PARAGRAPH variant:** "IMPORTANT" label maintains same treatment. Body text remains primary even across multiple paragraphs. Inline code (`CLAUDE.md`, `--reload`) creates tertiary hierarchy level.

3. **IN CONTEXT variant:** Shows the callout within body copy. The callout maintains its internal hierarchy while also fitting appropriately within document hierarchy. Body text outside the callout and body text inside share similar weight — the callout's accent bar differentiates container, not content.

4. **TINTED VARIANT:** Blue background tint introduces another hierarchy method (color zone) while preserving the label/content relationship.

---

## Conclusion

The hierarchy revision is **successful**. The component moves from a flat 2-level system with competing weights to a nuanced 4-level system where:
- The accent bar anchors attention
- Body content delivers information
- Inline code provides technical detail
- The label categorizes without demanding

The serif italic label treatment is the key improvement — it leverages typographic tradition (marginalia, annotations, editorial asides) to signal hierarchy through meaning, not just contrast.

**Recommendation:** Accept this hierarchy treatment. Consider documenting the "serif italic for annotations" pattern as a reusable principle for other callout variants (Tip, Warning, Success).

---

*Analysis performed on revised screenshot. Score improved from 3/5 to 4.5/5.*
