# Builder Simulation Report: Fresh Opus Reading the Conventions Brief

**Agent:** builder-simulator
**Date:** 2026-02-19
**Task:** Simulate being a fresh Opus builder receiving these 6 files and building a page from RESEARCH-SYNTHESIS content.

---

## Simulation Setup

I read, in full:
1. `10-CONVENTIONS-BRIEF-DRAFT.md` (254 lines -- the brief)
2. `tokens.css` (183 lines -- the vocabulary)
3. `prohibitions.md` (420 lines -- the refusals)
4. `mechanism-catalog.md` (first 600 lines -- the tools)
5. `components.css` (first 300 lines -- the component library)
6. `RESEARCH-SYNTHESIS.md` (first 200 lines -- the content to build)

I am now simulating what I would actually do as a fresh Opus builder encountering these for the first time. I have no prior context about the KortAI design system, no memory of CD-006 or any previous experiments. I know only what these 6 files tell me.

---

## Question 1: After Reading All 6 Files, What Is My First Move?

**My honest first move: I would re-read the brief's PROCESS section (Section 10) carefully, then immediately start Phase A (Understand the content).**

Here is my reasoning chain after the first read-through:

1. The brief tells me "Read this brief once, fully. Then build." So after reading it once, I would NOT re-read the brief obsessively. I would move to content.

2. I would open RESEARCH-SYNTHESIS.md and read it carefully for content structure. The first 200 lines tell me:
   - 5 research streams synthesized into unified principles
   - A "Master Insight" quote about layout-as-content
   - Principle 1: Density as Rhythm (6 dimensions)
   - Principle 2: Layout as Choreography (axis patterns)
   - Principle 3: Components as Characters (velocity/temperature/weight)
   - Principle 4: Whitespace as Design Element (mentioned but cut off at 200 lines)

3. I would then write my Conviction Card BEFORE touching CSS. The brief is explicit about this: "Before writing your first line of CSS, write this in your build log."

**What I would NOT do:**
- Jump straight to CSS. The brief explicitly sequences planning before building.
- Read more reference files. The brief tells me to work with what I have.
- Spend 30 minutes planning every mechanism. The brief says "10% meta, 90% doing" (wait -- that is in the CLAUDE.md, not in the brief itself. As a fresh builder, I would not have that instruction).

**Critical observation:** The brief gives me a clear process (Phase A -> B -> C -> D) and I would follow it. This is the RECIPE quality the retrospective identified as the success factor. The brief IS a recipe, not a checklist.

---

## Question 2: What Metaphor Would I Choose for RESEARCH-SYNTHESIS?

**I would choose: "SYNTHESIS AS DISTILLATION" or "CONVERGENCE FUNNEL."**

Here is why:

The content structure of RESEARCH-SYNTHESIS is literally about 5 independent research streams being compressed into unified principles. The natural structural isomorphism is:

- 5 inputs (R1-R5) --> synthesis process --> unified principles --> master insight
- Wide-to-narrow: many findings --> few principles --> one insight
- The content IS about convergence/distillation/synthesis

**The metaphor would express as:**
- **Navigation scale:** Wide, sparse header establishing the 5 streams (breadth)
- **Page scale:** Progressive narrowing as streams merge into principles
- **Section scale:** Each principle section starts broad (what the inputs were) and tightens to the synthesis
- **Component scale:** Callouts with 2-zone DNA: broad label (stream attribution like "R-1 + R-3") -> tight synthesis body
- **Character scale:** Letter-spacing could loosen in the divergent sections and tighten in the convergent ones

**Why NOT other metaphors:**
- Geological strata: No natural layering. The content is convergent, not stratified.
- Building structure: No load-bearing hierarchy. The principles are parallel, not stacked.
- Journey/path: Too generic. Doesn't capture the multi-input-to-single-output structure.

**However -- this is important -- the brief tells me I am FREE to build without a metaphor:** "If a metaphor emerges from the content's structure, name it. If not, build without one -- a well-composed page without a metaphor beats a poorly-composed page with a forced one." I appreciate this permission. If the distillation metaphor felt forced, I would drop it and just build with good multi-coherence.

---

## Question 3: How Would I Decide on Zone Boundaries?

**I would identify zones by reading the CONTENT for natural topic/mode shifts, not by arbitrary section count.**

From the 200 lines of RESEARCH-SYNTHESIS I have, the natural zones would be:

- **Zone 1 (OPENING):** Executive Summary + Master Insight (lines 112-135). This is the orientation -- warm cream (#FEF9F5), generous spacing, serif heading. Mode: overview.

- **Zone 2 (SYNTHESIS CORE):** Unified Design Principles (lines 137+). This is where the real content lives. Each principle is a synthesis of 2+ research streams. Mode: analytical exposition. I would use a different background here (#F0EBE3 or similar), tighter spacing, more component density (tables, callout boxes for the principle summaries).

- **Zone 3 (would need to see more content):** I only have 200 lines. Presumably the remaining principles (4-7+?) and implementation guidance. Mode: probably shifts from analytical to prescriptive/practical.

**What triggers a new zone for me:**
1. The content shifts MODE (overview -> analysis, analysis -> prescription)
2. The density of information changes (sparse intro -> dense synthesis tables -> breathing conclusion)
3. There is a natural "pause" where the reader needs to reorient

**I would NOT create zones based on:**
- Arbitrary "every N sections = new zone" counting
- Wanting a specific number of zones (the brief says I choose 2-5)
- Mechanism deployment needs (zones serve content, not technique)

**The brief's guidance is clear:** "Identify the natural zones (where does the content shift topic, mode, or intensity?)." I would follow this exactly.

---

## Question 4: Achieving >= 3 Channel Shifts at a Zone Boundary (Detailed Walkthrough)

**Let me walk through the Zone 1 -> Zone 2 boundary (Executive Summary -> Unified Principles).**

My coherence direction for this page is "FOCUSING" (wide divergent inputs narrowing to focused synthesis).

**Zone 1 (Executive Summary) CSS state:**
```css
.zone-executive {
  background: #FEF9F5;           /* warm cream -- sparse, inviting */
  padding: 64px 0;               /* generous -- space-16 */
  border-left: none;             /* no structural border yet */
  /* Typography: */
  /* h1 at 2.5rem (40px) Instrument Serif */
  /* body at 1.125rem (18px) Inter */
  /* letter-spacing: 0.02em on body */
}
```

**Zone 2 (Unified Principles) CSS state:**
```css
.zone-principles {
  background: #F0EBE3;           /* CHROMATIC: 15+ RGB darker (shifted toward earthy) */
  padding: 48px 0;               /* SPATIAL: compressed from 64px to 48px */
  border-left: 4px solid #1A1A1A; /* STRUCTURAL: border appears */
  /* Typography: */
  /* h2 at 2rem (32px) Instrument Serif */
  /* body at 1rem (16px) Inter -- TYPOGRAPHIC: 18px -> 16px */
  /* letter-spacing: 0.01em -- tighter */
}
```

**Channel shift audit at this boundary:**

| Channel | Zone 1 | Zone 2 | Direction | Shift? |
|---------|--------|--------|-----------|--------|
| Chromatic | #FEF9F5 | #F0EBE3 | Darker (focusing) | YES (RGB delta: ~14-20 per channel) |
| Typographic | 18px body, 0.02em spacing | 16px body, 0.01em spacing | Tighter (focusing) | YES (2px size delta, 0.01em spacing delta) |
| Spatial | 64px padding | 48px padding | Compressed (focusing) | YES (16px delta) |
| Structural | no border | 4px border-left | More structure (focusing) | YES |
| Behavioral | standard hover | -- | -- | NO (not changing hover states here) |
| Material | sparse components | denser components (tables, callouts) | More material (focusing) | YES |

**Count: 5 channels shifting. All point "FOCUSING" direction. Passes the >= 3 requirement.**

**CSS comment I would write:**
```css
/* Boundary Z1->Z2: FOCUSING -- bg darkens, spacing compresses, border appears, type tightens, components densify. 5 channels. */
```

**This is the specific process the brief teaches me.** I would repeat this at every zone boundary. The brief's Section 6 (Compositional Memory Protocol) explicitly tells me to do this.

---

## Question 5: Achieving Fractal Echo at 5 Scales (Detailed Walkthrough)

**Organizing principle: CONVERGENCE (from divergent research to focused synthesis).**

**Let me walk through the COMPONENT SCALE (~40-100px).**

At the component scale, "convergence" means: each component's internal structure mirrors the wide-to-narrow pattern.

**Callout component (2-zone DNA):**
- Zone 1 (LABEL): Sparse, uppercase, 12px meta text, 0.1em letter-spacing. Wide, open, establishing the source ("R-1 + R-3"). This is the "divergent" part -- the attribution to multiple streams.
- Zone 2 (BODY): Dense, 16px body text, tighter line-height. The synthesized insight. This is the "convergent" part -- the unified conclusion.

**The label is divergent (naming multiple sources), the body is convergent (stating one synthesis). The component mirrors the page's convergence pattern.**

**Fractal Echo Table for this page:**

| Scale | How the pattern expresses here | Primary CSS |
|-------|-------------------------------|-------------|
| Navigation | Header spans full width, establishes 5 streams visually before narrowing to title | width, border, padding |
| Page | Zones progress from broad overview (Zone 1) to focused synthesis (Zone 2) to specific implementation (Zone 3+) | backgrounds, zone padding |
| Section | Within each principle: multi-stream attribution (broad) -> synthesis statement (narrow) -> implementation table (focused) | margin, internal padding |
| Component | Callout 2-zone: label names sources (broad) -> body states synthesis (narrow) | label/body spacing, font-size |
| Character | Letter-spacing loosens in stream-naming sections, tightens in synthesis conclusions | letter-spacing: 0.03em -> 0.01em |

**All 5 rows point "convergence/focusing." The fractal is consistent.**

---

## Question 6: Where Would I Get CONFUSED?

### Confusion 1: "merged-components.css" vs "components.css"

The brief's Section 9 says "Use at least 10 component families from merged-components.css." But the file I was given is `components.css`. Is this the same file? Different file? Am I missing a file? **This would cause a 2-3 minute confusion/search.**

### Confusion 2: Background Color Delta Calculation

The brief says ">= 15 RGB between adjacent zones." But what does "15 RGB" mean exactly? Is it:
- Sum of (R delta + G delta + B delta) >= 15?
- Each individual channel >= 15?
- The maximum of the three channels >= 15?

Example: #FEF9F5 to #F0EBE3.
- R: 254 -> 240 = delta 14
- G: 249 -> 235 = delta 14
- B: 245 -> 227 = delta 18

Is that 14+14+18 = 46? Or is it "14, which is below 15" (FAIL)? **The brief does not specify the calculation method. This is ambiguous.**

I would ASSUME it means each individual channel, and would be uncertain whether 14 is close enough. I would probably round up and choose backgrounds with clearer separation to be safe.

### Confusion 3: "10 component families" -- What Counts as a Family?

The brief says use >= 10 component families. From `components.css`, I can identify:
1. Callout family (6 variants)
2. Code block / code-snippet
3. Page header
4. Page footer
5. Tables

That is only 5 families in the first 300 lines. Where are the other 5+? I would need to read more of `components.css` to find them. **The brief references "merged-components.css" which I was not given the full file of. I would be uncertain whether I am meeting this threshold.**

### Confusion 4: Mechanism Categories S/H/C/D/N

The brief's Section 9 lists: Spatial (S), Hierarchy (H), Component (C), Depth/Emphasis (D), Navigation (N). The mechanism catalog header lists the same categories with their mechanism numbers. But when I am building, do I need to consciously track "I have deployed 1 Spatial, 1 Hierarchy, 1 Component..."? Or is it more organic? The brief says deploy "at least 4 of 5 categories" but does not give me a tracking template.

**I would create my own tracking table in my build log, but the brief does not explicitly instruct this.**

### Confusion 5: "Designed Moment" Definition

Q3 in the self-check says: "Does at least one designed moment (visual peak using 3+ mechanisms at high intensity with unique treatment) appear below the 50% scroll mark?"

What is "high intensity"? The mechanisms in the catalog have perceptual effectiveness ratings (HIGH/MEDIUM/LOW) but the brief does not define "high intensity" for mechanism deployment. Is it using 3 HIGH-effectiveness mechanisms together? Or any 3 mechanisms deployed boldly?

**Ambiguous. I would interpret it as "a section that looks noticeably different from surrounding sections and uses multiple CSS techniques simultaneously" and move on.**

---

## Question 7: Where Would I Get STUCK?

### Stuck Point 1: Content Truncation

I only have 200 lines of RESEARCH-SYNTHESIS.md. The actual file is presumably much longer. I cannot plan zones, section architecture, or density arcs for content I have not read. **This is the single biggest blocker.** If I were actually building, I would need the complete content file.

In simulation: I would read the rest of the file before planning.

### Stuck Point 2: Component Library Completeness

I have 300 lines of `components.css` (5 component families). The brief demands >= 10 families. I need to see the rest of the component library to know what is available. I cannot "use at least 10 component families" if I can only see 5.

**Action: I would read the full components.css before building.**

### Stuck Point 3: Font Loading

The brief specifies Instrument Serif, Inter, JetBrains Mono. But `tokens.css` only declares CSS custom properties for font-family. It does not include `@font-face` declarations or Google Fonts links. **How do I actually load these fonts in my HTML?**

I would Google "Instrument Serif font" and add the appropriate `<link>` tag, but this is not provided in any of the 6 files. A builder who does not know these are Google Fonts would be stuck.

### Stuck Point 4: The Skip Link and ARIA Landmarks

The brief says "Write HTML first (skeleton with landmarks, skip link, ARIA roles, component classes)." But it does not tell me WHAT landmarks to use. Is it `<main>`, `<nav>`, `<header>`, `<footer>`? What is the skip link target? What ARIA roles are expected?

I would use standard HTML5 semantic elements (`<header role="banner">`, `<main role="main">`, `<nav role="navigation">`, `<footer role="contentinfo">`) and a `<a href="#main-content" class="skip-link">Skip to content</a>` pattern. But this is my prior knowledge, not something the brief teaches me.

### Stuck Point 5: Responsive Breakpoint Details

The brief says "The page must function at 768px viewport width. Multi-column layouts collapse to single column." But it gives no CSS guidance for the media query. What is my spacing reduction ratio? Does the type scale change? Do zone backgrounds change?

I would write a basic `@media (max-width: 768px)` block that reduces padding and collapses columns, but I would be guessing at the specific values.

---

## Question 8: What Would I SKIP or Ignore?

### Skip 1: The Jazz Real Book Analogy (from compositional-core CLAUDE.md)

This is in the CLAUDE.md loaded with the compositional-core, not in the conventions brief. But if I had access to it, I would skim it quickly and move on. It is philosophical context, not operational instruction. As a builder under time pressure, I would extract "mechanisms are tools, metaphors are decisions" and skip the Charlie Parker paragraphs.

**The brief itself does NOT include this analogy, which is a good editorial decision.**

### Skip 2: Prohibitions.md Evidence Sections

Each of the 22 prohibitions has detailed "Evidence" citations with file paths like `geometry.md lines 31-32` and `anti-patterns/registry.md lines 59-72`. I would read the RULE and the WHY for each prohibition. I would SKIP the evidence citations entirely. They are provenance documentation, not building instructions.

**Risk of skipping:** Zero. The evidence does not change the rule.

### Skip 3: Mechanism Catalog "Application Modes" Details

The mechanism catalog includes detailed "Application Modes" for each mechanism (PROGRESSIVE MODE vs DISCRETE MODE with examples). For my first pass, I would skim these and come back only if I need to decide how to deploy a specific mechanism.

**Risk of skipping:** Low. I would return to these when needed.

### Skip 4: The Conditional Prohibitions Details

Prohibitions 9-22 have detailed exception documentation requirements. For a first build, I would internalize the 8 ABSOLUTE prohibitions (border-radius: 0, box-shadow: none, etc.) and skim the conditional ones. I would refer back only if I encounter a specific case where I think an exception applies.

**Risk of skipping:** Medium. Prohibition #17 (all h3 must be italic) is conditional but important and easy to miss.

### Skip 5: Token Mutability Classification

`tokens.css` has IMMUTABLE/MUTABLE/AVAILABLE comments on every token. I would internalize: "IMMUTABLE = do not override, MUTABLE/AVAILABLE = can override with justification." I would not memorize which specific tokens are which classification.

**Risk of skipping:** Low. The brief already tells me I can "override any non-soul value in tokens.css if you log the override."

---

## Question 9: What Would I MISUNDERSTAND?

### Misunderstanding 1: "The page container is 940-960px wide"

I might interpret this as the `<body>` or `.page-container` being 940px. But at a 1440px viewport, this means the container is ~65% of the viewport with ~270px margin on each side. Is the HEADER also 940px? Or does the header go full-bleed (like the dark header pattern in mechanism #13)?

The mechanism catalog shows:
```css
.header-inner {
  max-width: 1100px; /* NOT 960px */
}
```

So the header inner content is 1100px, but the main content is 940-960px? **This creates an inconsistency that I might not notice, leading to a header that is wider than the content area.** Or is the header meant to be wider? The brief does not clarify.

**Likely misunderstanding:** I would make the header and content the same 960px width, missing the intentional wider header pattern.

### Misunderstanding 2: "Fractal Echo" = Decoration, Not Structure

A less experienced builder might read Section 5 (Fractal Echo) and think "I need to add decorative elements at 5 scales." The brief's intention is that the ORGANIZING PRINCIPLE (convergence, density, etc.) should manifest structurally at all 5 scales. But a builder might think: "I need visible pattern repetition" and add decorative borders or motifs at each scale.

**I (as Opus) would probably understand this correctly** because the brief is well-written. But the risk is real for a builder who skims.

### Misunderstanding 3: "3 CSS channels shift" = 3 CSS Properties Change

The brief says 3 of 6 CHANNELS must shift. Channels are categories (Chromatic, Typographic, Spatial, Structural, Behavioral, Material). A builder might count individual CSS properties instead: "background-color changed, padding changed, font-size changed = 3 channels." But in the brief's taxonomy, font-size change alone is one TYPOGRAPHIC channel shift -- changing BOTH font-size AND letter-spacing still counts as ONE channel (Typographic), not two.

**Wait -- actually this IS ambiguous.** The brief says:
> 2. **Typographic** -- font-size, font-weight, letter-spacing, or line-height

The "or" suggests ANY ONE of those is a Typographic channel shift. So changing font-size AND letter-spacing is still just 1 Typographic shift. But some builders might count each property separately.

**This is a likely misunderstanding that could lead to FALSE CONFIDENCE** -- "I changed 6 properties, so I have 6 channel shifts!" when actually they changed 3 typographic properties (1 channel), 2 spacing properties (1 channel), and 1 border (1 channel) = only 3 channels. In this case it works out, but the builder is counting wrong.

### Misunderstanding 4: "Component Adoption >= 10 Families"

A builder might think they need to USE 10 different CSS CLASSES from `components.css`. But "component family" means a conceptual family (callouts, code blocks, tables, headers, etc.), not individual class selectors. Using `.callout--essence`, `.callout--tip`, and `.callout--info` is 1 family (callout), not 3.

**The brief does not define "component family." This is assumed knowledge.**

### Misunderstanding 5: Spacing Scale Rigidity

The brief says "Spacing follows a 4px base unit: 8, 16, 24, 32, 48, 64, 80, 96." I might interpret this as "ONLY use these exact values." But `tokens.css` has additional values (4px, 12px, 20px, 40px) that are not in the brief's list. Are those permitted?

The brief also says "No single margin or padding value exceeds 96px." But what about `line-height` or `gap`? Are those considered "spacing"?

**I would probably stay strict with the listed values** and miss that 12px and 20px are also in the token vocabulary. This would make my spacing grid slightly coarser than necessary.

---

## Question 10: What Does the Brief NOT Say That I Would Need for Flagship Level?

### Missing 1: CONCRETE CSS VALUES for Zone Backgrounds

The brief says ">= 15 RGB delta between adjacent zones." But it does not give me a RECOMMENDED palette of zone backgrounds. `tokens.css` provides 4 zone colors:
- `--color-zone-sparse: #FEF9F5`
- `--color-zone-dense: #FFFFFF`
- `--color-zone-breathing: #FAF5ED`
- `--color-zone-bedrock: #1A1A1A`

But #FEF9F5 to #FFFFFF has a problematic RGB delta:
- R: 254->255 = 1
- G: 249->255 = 6
- B: 245->255 = 10

**This FAILS the >= 15 RGB threshold on R and G channels.** The token vocabulary's own zone colors may not pass the brief's perception threshold rule. **This is a contradiction between the brief and tokens.css that would create real confusion.**

I would need to pick my OWN zone backgrounds (which the brief allows me to override with justification), but the brief does not provide a pre-validated palette of backgrounds that pass the 15 RGB threshold.

### Missing 2: HOW to Build the HTML Skeleton

The brief says "Write HTML first (skeleton with landmarks, skip link, ARIA roles, component classes)." But it provides NO HTML template or skeleton example. What does a compliant skeleton look like? Is there a standard `<head>` structure? Do I need specific meta tags? What about the `<link>` tags for fonts?

A Flagship builder needs to produce production-quality HTML. Without a skeleton template, every builder invents their own, creating inconsistency.

### Missing 3: Border-Weight Strategy for This Content

The mechanism catalog describes border-weight gradient encoding (4px/3px/2px/1px). The brief says borders are important (perception threshold: ">= 1 structural border-left per zone"). But HOW should I assign border weights to RESEARCH-SYNTHESIS content?

- Should principle sections get 4px? Sub-sections 3px? Data tables 1px?
- Should the border weight encode research stream importance? Synthesis confidence? Section depth?

**The brief correctly leaves this to my judgment ("You are the composer").** But for a Flagship result, I would need to make a deliberate, documented choice. The brief does not prompt me to articulate my border-weight strategy in the conviction statement.

### Missing 4: Second-Half Visual Peak Strategy

The brief's Q3 self-check says I need at least one "designed moment" below 50% scroll. But the brief does not help me PLAN where this goes. For RESEARCH-SYNTHESIS content (which is principle-heavy text throughout), where do I create a visual peak in the second half?

Possible strategies (from my own compositional instinct):
- A dark-background (#1A1A1A) "Master Insight" moment
- A full-width comparison table with custom styling
- A bento grid showing all 5 research streams converging
- A timeline/flow diagram

But the brief does not suggest these. It says "designed moment" without examples relevant to synthesis content. **A less confident builder might create a weak designed moment or skip this requirement.**

### Missing 5: INTER-SECTION TRANSITIONS Within a Zone

The brief describes zone-to-zone transitions (SMOOTH, BRIDGE, BREATHING). But what about section-to-section transitions WITHIN a zone? If Zone 2 has Principles 1-4, how do I transition between Principle 1 and Principle 2?

Is it:
- A simple horizontal rule?
- A small spacing change?
- A background-color micro-shift?
- Nothing (just stacked sections)?

The brief's transition grammar only covers ZONE boundaries, not intra-zone section boundaries. A Flagship page needs both levels of transition to avoid monotony.

### Missing 6: CSS Architecture / File Structure

The brief tells me the CSS BUILD ORDER (reset + soul + base typography -> zone backgrounds -> structural borders -> typography zones -> element-level richness -> responsive). But it does not tell me how to ORGANIZE the CSS. Should I use CSS custom properties per zone? Should I use BEM naming? Should I nest selectors?

For a 700-1200 line CSS file (the Flagship range), organization matters. Without guidance, different builders will structure their CSS differently, making it harder to maintain or audit.

### Missing 7: How to Handle Long Content Gracefully

RESEARCH-SYNTHESIS has 200+ lines just in the first section. The full content is probably 600+ lines. How do I prevent the page from becoming a scrolling wall of text? The brief warns against voids but does not address the opposite problem: walls of undifferentiated content.

Strategies I would need to invent:
- Pull quotes breaking up long text sections
- Sidebar callouts
- Visual diagrams/charts interspersed
- "Key takeaway" summary boxes after each principle
- Progressive disclosure (expandable sections)

These are compositional decisions the brief correctly leaves to me, but a less experienced builder might not think of them.

### Missing 8: Concrete Guidance on What "Composed" vs "Assembled" Actually Looks Like

The brief says: "This is what makes a page feel composed rather than assembled." It says: "Richness is semantic density multiplied by restraint multiplied by spatial confidence."

But it never shows me a BEFORE (assembled) and AFTER (composed) comparison of the same content. What does the delta look like? What specific CSS differences separate a 2/4 page from a 4/4 page?

**This is the hardest thing to teach in a brief.** The brief does an excellent job of describing the philosophy. But the gap between understanding the philosophy and executing it is where Flagship pages either succeed or fail. The brief cannot close this gap -- only builder skill and compositional instinct can.

---

## Summary: Will This Brief Produce Flagship Results?

### Strengths (What the Brief Gets Right)

1. **It IS a recipe, not a checklist.** The Phase A->B->C->D process is sequenced and actionable.
2. **The conviction statement is brilliant.** It forces intentional planning before CSS.
3. **Multi-coherence is concretely explained.** Section 4 with the example is the best explanation I have seen in any of the project's documents.
4. **Creative authority is explicit.** Section 8 gives me freedom without vagueness.
5. **The self-check protocol is practical.** 5 concrete yes/no questions I can actually answer.
6. **The compositional memory protocol prevents drift.** Forcing me to check at boundaries and midpoint.
7. **Perception thresholds are binary.** >= 15 RGB. >= 2px font-size. >= 3 channels. I know exactly when I pass.
8. **It is 230 lines.** Readable in one sitting. I will actually remember it.

### Weaknesses (What Might Cause Failure)

1. **Token/threshold contradiction:** Zone colors in tokens.css do not pass the 15 RGB threshold in the brief. Builder will be confused.
2. **Missing HTML skeleton:** No starting template for `<head>`, font loading, skip links, landmarks.
3. **"Component family" undefined:** 10 families required but families never defined.
4. **Background delta calculation ambiguous:** Per-channel or sum?
5. **No intra-zone transition guidance:** Only zone-to-zone transitions are described.
6. **No concrete second-half visual peak strategies:** The requirement exists but guidance is absent.
7. **"merged-components.css" reference mismatch:** Brief says merged-components.css but file is components.css.

### Prediction

**As a fresh Opus builder with these 6 files, I would produce a page scoring approximately 2.5-3.0/4 on PA-05 (COMPOSED to approaching DESIGNED).**

The brief gives me everything I need for:
- Multi-coherence at zone boundaries (the best-explained concept)
- Soul compliance (extremely clear prohibitions)
- Spatial confidence (perception thresholds are binary)
- Intentional planning (conviction statement + fractal echo table)

The brief does NOT give me enough for:
- Flagship-level component density (10 families underspecified, component library truncated)
- Guaranteed second-half visual interest (strategy missing)
- Resolution of token contradictions (zone colors vs 15 RGB)
- Full HTML production readiness (no skeleton, no font loading)

**The gap between 3.0 and 4.0 is compositional instinct that no brief can teach.** This brief gets me closer to 4.0 than any previous prompt in this project's history. But the last mile is builder skill.

---

## Addendum: The Single Most Important Improvement

**Add a 5-line HTML skeleton template to the brief.**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] -- KortAI Design System</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>/* Your CSS here */</style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <header role="banner">...</header>
  <main id="main-content" role="main">...</main>
  <footer role="contentinfo">...</footer>
</body>
</html>
```

This eliminates 3 stuck points (font loading, skip link, landmark structure) in 10 lines. The ROI is enormous.

**Second most important improvement:** Add a pre-validated zone background palette that passes the 15 RGB threshold:

```
Zone palette (all pass >= 15 RGB delta between adjacent):
  A: #FEF9F5 (warm cream)
  B: #F0EBE3 (earthy tan) -- delta from A: R14, G14, B18
  C: #E8DFD1 (deeper tan) -- delta from B: R8, G12, B18
  D: #1A1A1A (bedrock)    -- delta from C: massive
```

Wait -- A to B has R delta of 14, which is BELOW 15. **Even my own suggested palette fails the threshold.** This confirms the ambiguity in the "15 RGB" rule. It MUST be clarified: is it per-channel minimum, or is it sum, or is it any-channel-minimum?

If per-channel minimum of 15, the warm cream palette has very limited options because warm colors track closely in RGB space. If sum of all channels >= 15, then A to B passes (14+14+18 = 46).

**This needs resolution before the brief is finalized.**

---

## ADDENDUM 2: Recalibration Against 14-Dimension Flagship Definition

*Added after reading `ephemeral/flagship-44-recipe/01-DEFINITION.md` (633 lines).*

**CRITICAL CORRECTION:** My original report did not reference CD-006 as a target, which is correct. But the prediction and gap analysis need recalibration against the actual 14-dimension Flagship 4/4 definition. Flagship 4/4 has NEVER been achieved. It is a theoretical state where the full compositional intelligence stack operates simultaneously. CD-006 is Ceiling tier (~10-11/14 Flagship dimensions), not Flagship.

### The Brief's Coverage of the 14 Flagship Dimensions

| Dim | Name | Brief Covers? | How? | Gap? |
|-----|------|--------------|------|------|
| D-01 | Mechanisms >= 14, 2/cat | PARTIAL | Brief says "at least 4 of 5 categories" but threshold is 1/cat, not 2/cat. Brief says nothing about >= 14 total. | **YES: Brief's floor (4 of 5 categories, no total minimum) is MIDDLE threshold, not Flagship.** |
| D-02 | Zone transitions >= 8, 2 ch | PARTIAL | Brief covers transition grammar well (SMOOTH/BRIDGE/BREATHING) but does not say >= 8 transitions. | **YES: No transition COUNT target.** |
| D-03 | Channels >= 3/boundary, avg >= 4 | YES | Section 4 (Multi-Coherence Binding) covers this thoroughly. >= 3 of 6 channels. | No -- this is the brief's best-covered dimension. |
| D-04 | Multi-coherence >= 3 instances | PARTIAL | Section 4 EXPLAINS multi-coherence and gives one example. But it does not say "achieve >= 3 instances where 3+ channels encode the SAME semantic concept." | **YES: Brief explains the concept but does not set a COUNT target for instances.** |
| D-05 | Fractal 5/5 scales | YES | Section 5 (Fractal Echo) covers all 5 scales with a table template. | No -- well covered. |
| D-06 | Semantic density <= 96px gaps, >= 40% | PARTIAL | Self-check Q2 covers voids (> 108px). Brief says no value > 96px. But the 40% content-per-viewport threshold is not mentioned. | **YES: 40% content density per viewport is missing.** |
| D-07 | Perceptibility floor | YES | Section 2 covers all thresholds. | No -- well covered. |
| D-08 | Restraint indicators | PARTIAL | Brief says "Richness is semantic density x restraint x spatial confidence" but does not require deliberate mechanism EXCLUSION, or the 35% max single-component-type rule. | **YES: No explicit restraint gates (deliberate exclusion, component-type cap).** |
| D-09 | Axis variety >= 3 patterns | NO | Brief does not mention axis patterns (Z, F, Bento, Spiral, Choreography) at all. | **YES: MISSING ENTIRELY. This is a major gap for Flagship.** |
| D-10 | Designed moments >= 90% | PARTIAL | Self-check Q3 covers second-half presence. But 90% viewport coverage is not mentioned. | **YES: Coverage target (90%) missing. Only "at least one in second half" stated.** |
| D-11 | Component variety >= 8, <= 35% | PARTIAL | Brief says >= 10 component families. But max single-type percentage (35%) is not mentioned. | **PARTIAL: Family count mentioned but diversity cap missing.** |
| D-12 | CSS quantitative features | NO | Brief says "typically 700-1200 lines" as guideline but no selector count, custom property count, breakpoint count, etc. | **PARTIAL: CSS line range mentioned but detailed quantitative gates absent.** |
| D-13 | Metaphor presence | PARTIAL | Phase A says "If a metaphor emerges from the content's structure, name it." Fractal echo requires consistent pattern. But D-13's hard gates (3 distinct class name families, drives 2+ multi-coherence instances, 40% perceivable without labels) are NOT stated. | **YES: Metaphor is encouraged but not required or gated. Flagship REQUIRES it with structural manifestation.** |
| D-14 | Accessibility | PARTIAL | Brief mentions skip link, landmarks, ARIA, WCAG 2.1 AA. But does not mention reduced-motion media query or focus-visible specifically. | **PARTIAL: Most covered, 2 items missing.** |

### Summary: The Brief Fully Covers 3/14 Flagship Dimensions

- **FULLY COVERED (3):** D-03, D-05, D-07
- **PARTIALLY COVERED (8):** D-01, D-02, D-04, D-06, D-08, D-10, D-11, D-13
- **NOT COVERED (3):** D-09 (axis variety), D-12 (CSS quantitative gates), D-14 detail (reduced motion, focus-visible)

### What This Means for the Prediction

My original prediction of "2.5-3.0/4 PA-05" was based on the brief's own self-check protocol. Against the 14-dimension Flagship definition:

**A builder following ONLY this brief would likely pass:**
- D-03 (channels per boundary) -- the best-covered dimension
- D-05 (fractal echo) -- well-covered
- D-07 (perceptibility floor) -- well-covered
- D-14 (accessibility) -- mostly covered
- D-06 (semantic density) -- partially covered but builder instinct helps

**A builder following ONLY this brief would likely FAIL:**
- D-04 (multi-coherence COUNT) -- concept explained but no instance target
- D-09 (axis variety) -- not mentioned at all
- D-13 (metaphor structural manifestation) -- encouraged but not gated
- D-01 (mechanism count >= 14) -- no total count target given
- D-02 (transition count >= 8) -- no transition count target given

**Revised prediction against 14 dimensions: 5-7 of 14 Flagship dimensions would pass.** This maps to approximately **2.5/4** on the verdict matrix (< 8/14 = 2/4 STYLED, 8-9 = 2.5/4). The brief alone cannot produce Flagship 4/4.

### The 5 Dimensions the Brief Must Address to Reach Flagship

In priority order (by impact on the scoring verdict):

1. **D-09: Axis Variety.** The brief needs to teach the builder about Z-Pattern, F-Pattern, Bento Grid, Spiral, and Choreography as distinct layout patterns -- and require >= 3 with named transitions. This is ENTIRELY MISSING.

2. **D-04: Multi-Coherence Instances.** The brief explains the concept (Section 4) but needs a QUANTITATIVE TARGET: "Achieve >= 3 instances where 3+ channels encode the same semantic concept simultaneously." The brief currently says "make every boundary do this" -- which is aspirational but unmeasured.

3. **D-13: Metaphor as Structural Requirement.** The brief currently says "If a metaphor emerges... name it. If not, build without one." For Flagship, metaphor is NOT optional. The brief needs to require: (a) metaphor named, (b) >= 3 custom class families from metaphor, (c) metaphor drives >= 2 multi-coherence instances, (d) 40% of sections show metaphor influence without text labels.

4. **D-01: Mechanism Count.** The brief needs to state >= 14 total perceptible mechanisms, with >= 2 from each of the 5 categories. Current threshold ("at least 4 of 5 categories") is Middle-tier.

5. **D-10: Designed Moments Coverage.** The brief needs to state >= 90% viewport coverage, not just "at least one in the second half."

**If these 5 dimensions were added to the brief (approximately 30-40 lines of additions), the predicted pass rate rises from 5-7/14 to potentially 10-12/14 -- approaching the 12-13 range needed for 3.5/4 (near-Flagship).**

The remaining gap (12 to 14) depends on D-04's global multi-coherence and D-13's structural metaphor manifestation -- the two THEORETICAL dimensions (LOW-MEDIUM confidence) that have never been observed. No brief can guarantee these because they require compositional fluency that is fundamentally a builder skill, not a specification property.
