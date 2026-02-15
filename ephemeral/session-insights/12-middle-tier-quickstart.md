# Middle-Tier Quick-Start Guide

**For:** Builder agents creating Middle-tier pages (8-10 mechanisms, no metaphor, 70-100 min)
**Last Updated:** 2026-02-15
**Purpose:** Self-contained guide to building a Middle-tier page with confidence

---

## ESSENTIAL TERMS (Read This First)

| Term | Meaning | Example |
|------|---------|---------|
| **Middle-tier** | Pages using 8-10 mechanisms, no metaphor derivation, 70-100 min build time | Tutorial pages, guides, how-to docs |
| **Mechanism** | Reusable CSS technique that works across content types | Border-weight gradient, 2-zone callouts, dark header |
| **Track 1** | Assembly approach: use existing mechanisms directly (NO metaphor) | What you're doing for Middle-tier |
| **Track 2** | Composition approach: derive metaphor first, then build | NOT what you're doing (that's Ceiling/Flagship) |
| **Prohibition** | Identity rule that defines KortAI through refusal | border-radius: 0, box-shadow: none |
| **Token** | Design value from tokens.css | var(--color-primary), var(--space-8) |
| **Always-load** | Mandatory reading before ANY work | prohibitions.md + tokens.css |

---

## ALWAYS-LOAD PROTOCOL (MANDATORY — READ BEFORE ANYTHING ELSE)

⚠️ **CRITICAL:** You MUST complete this protocol before building. No exceptions.

### Step 0A: Read Prohibitions (15 min)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/identity/prohibitions.md`

**What to read:** Focus on the 8 ABSOLUTE prohibitions (lines 19-128). These have ZERO exceptions.

**Memorize these NON-NEGOTIABLES:**
1. `border-radius: 0` — ALWAYS sharp edges, NEVER rounded
2. `box-shadow: none` — ALWAYS flat, NEVER shadows
3. `filter: drop-shadow()` — NEVER use
4. `opacity: 1` on all containers — NEVER transparent backgrounds
5. NO gradient backgrounds — solid colors only
6. NO pure black #000 or pure white #FFF — use palette values
7. Instrument Serif for DISPLAY ONLY — NEVER for body text
8. NO rounded corners for decoration

**Output:** Checklist in your mind of what NEVER to do.

---

### Step 0B: Scan Tokens (5 min)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/vocabulary/tokens.css`

**Don't memorize.** Just scan once so you know the structure. You'll reference this file AS YOU BUILD.

**Key sections to notice:**
- Lines 14-32: Color palette (8 values)
- Lines 67-70: Font families (3 fonts)
- Lines 95-107: Spacing scale (4px base unit)
- Lines 121-125: Border widths (4px/3px/1px)

**Output:** Awareness that token values exist. You'll look them up during building.

---

### Step 0C: Container Width NON-NEGOTIABLE

⚠️ **CRITICAL:** Your main content container MUST be 940-960px wide at 1440px viewport.

```css
.container {
  max-width: 960px; /* or 940px, never less */
  margin: 0 auto;
  padding: 0 var(--space-8); /* 32px */
}
```

**Why this matters:** Container width was THE primary failure mode in validation (4/5 pages violated this). No metaphor or design choice overrides this guardrail.

**Output:** First CSS you write is the container with correct width.

---

## BUILD PROCESS (6 Steps)

### Step 1: Assess Your Content (10 min)

Read through the content you're designing for. Answer these questions:

**Q1: Does content have distinct sections?**
- YES → Note section boundaries (you'll use section spacing mechanisms)
- NO → Single-flow content (simpler build)

**Q2: Does content contain code examples?**
- YES → You MUST use Code Block mechanism (#17)
- NO → Skip code mechanisms

**Q3: Does content contain tabular data?**
- YES → You MUST use Data Table mechanism (#18)
- NO → Skip table mechanisms

**Q4: Does content have callouts, tips, warnings, or asides?**
- YES → You MUST use 2-Zone Component DNA (#2)
- NO → Skip callout mechanisms

**Q5: Does content have hierarchical importance (some sections more critical than others)?**
- YES → You SHOULD use Border-Weight Gradient (#1) or Spacing Compression (#4)
- NO → Skip hierarchy mechanisms

**Q6: Does content have dense/sparse rhythm (some sections packed, others breathing)?**
- YES → You SHOULD use Dense/Sparse Alternation (#5) or Zone Background Differentiation (#7)
- NO → Skip rhythm mechanisms

**Output:** List of "MUST use" and "SHOULD use" mechanisms based on content structure.

---

### Step 2: Select Your 8-10 Mechanisms (15 min)

**RULE:** Pick 8-10 mechanisms where EACH mechanism serves a content need identified in Step 1.

Use this decision tree:

#### REQUIRED FOR ALL PAGES (Count: 2 mechanisms)

1. **Dark Header + 3px Border (#13)** — Every page needs a header
2. **Typographic Scale Jumping (#11)** — Every page needs hierarchy

**Running total: 2/8 selected**

---

#### BASED ON CONTENT TYPE

**If content has code examples:**
- **Code Block (#17)** — REQUIRED
- **Running total: 3/8**

**If content has tables:**
- **Data Table (#18)** — REQUIRED
- **Running total: 4/8**

**If content has callouts/tips/warnings:**
- **2-Zone Component DNA (#2)** — REQUIRED
- **Confidence Encoding via Color (#9)** — REQUIRED (goes with #2)
- **Border-Left Semantic Signal (#10)** — REQUIRED (goes with #2)
- **Running total: 7/8**

---

#### FILL TO 8-10 BASED ON CONTENT STRUCTURE

**If content has distinct sections with different importance:**
- **Border-Weight Gradient (#1)** — Encodes hierarchy through border thickness
- **Spacing Compression (#4)** — Important sections get more space

**If content has dense/sparse rhythm:**
- **Dense/Sparse Alternation (#5)** — Breathing rhythm between sections
- **Zone Background Differentiation (#7)** — Visual zones (cream vs white backgrounds)

**If content has parallel elements (comparisons, examples):**
- **Bento Grid (#15)** — Side-by-side layout
- **Width Variation (#6)** — Narrow vs wide columns

**If content has multiple sections needing navigation:**
- **Scroll Witness / Sticky TOC (#8)** — Position tracking (requires JavaScript)

**If content is long-form editorial:**
- **Drop Cap (#16)** — First letter emphasis
- **Progressive Disclosure (#12)** — Density gradient (sparse → dense → sparse)

**If content needs footer:**
- **Footer Mirror (#14)** — Matches header aesthetic

---

#### COMPATIBILITY CHECK

**DO NOT combine these (they conflict):**
- Border-Weight Gradient + uniform borders (contradicts purpose)
- Dense/Sparse Alternation + uniform padding (contradicts purpose)
- Solid Offset Depth + box-shadow (violates prohibition #2)

**DO combine these (they reinforce):**
- 2-Zone Component DNA + Confidence Encoding via Color + Border-Left Semantic Signal (all work together for callouts)
- Border-Weight Gradient + Zone Background Differentiation (both encode hierarchy)
- Dense/Sparse Alternation + Progressive Disclosure (both create rhythm)
- Spacing Compression + Typographic Scale Jumping (both reinforce hierarchy)

---

#### FINAL COUNT CHECK

**Target: 8-10 mechanisms**

If you have < 8: Add from "fill to 8-10" category based on content structure
If you have > 10: Remove lowest-value mechanisms (those with least content justification)

**Output:** List of exactly 8-10 mechanisms with brief justification for each.

Example:
```
1. Dark Header (#13) — required for all pages
2. Typographic Scale (#11) — required for all pages
3. 2-Zone Component DNA (#2) — content has 4 callouts
4. Confidence Encoding via Color (#9) — differentiates tip/warning/info callouts
5. Border-Left Semantic Signal (#10) — goes with #2
6. Code Block (#17) — content has 3 code examples
7. Dense/Sparse Alternation (#5) — intro sparse, middle dense, conclusion breathing
8. Zone Background Differentiation (#7) — reinforces #5 rhythm
9. Footer Mirror (#14) — page needs footer with contact info
Total: 9 mechanisms
```

---

### Step 3: Read Mechanism Implementations (20 min)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`

For EACH mechanism you selected in Step 2, read its section in the catalog:

**What to extract:**
1. The CSS pattern (copy the code example)
2. What token values it uses
3. Any compatibility notes

**Example for Mechanism #2 (2-Zone Component DNA):**
- Lines 88-127 in mechanism-catalog.md
- CSS pattern: `.component` wrapper with `.component__label` and `.component__body`
- Token values: `var(--font-body)`, `var(--type-meta)`, `var(--space-within)`, `var(--type-body)`
- Note: Label is sparse (uppercase, 12px), body is dense (normal, 16px)

**Do NOT read mechanisms you're NOT using.** Only read your selected 8-10.

**Output:** CSS snippets for each mechanism with token references.

---

### Step 4: Build HTML Structure (15 min)

Write the HTML structure using semantic tags.

**Standard page skeleton:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Content Title]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Mechanism #13: Dark Header -->
  <header class="site-header">
    <div class="header-inner">
      <h1>[Page Title]</h1>
      <p>[Optional subtitle]</p>
    </div>
  </header>

  <!-- Main container: 940-960px NON-NEGOTIABLE -->
  <main class="container">

    <!-- Your content sections here -->
    <!-- Use semantic tags: <section>, <article>, <aside> -->

  </main>

  <!-- Mechanism #14: Footer Mirror (if selected) -->
  <footer class="site-footer">
    <div class="footer-inner">
      <p>[Footer content]</p>
    </div>
  </footer>

</body>
</html>
```

**For each content section, apply appropriate mechanism classes:**

- Callouts → `.callout`, `.callout__label`, `.callout__body`
- Code → `<pre><code>` with syntax highlighting
- Tables → `.data-table` with `<thead>` and `<tbody>`
- Dense section → `.section--dense`
- Sparse section → `.section--sparse`

**Output:** Complete HTML structure with semantic tags and mechanism classes.

---

### Step 5: Write CSS (20 min)

**Start with this base template:**

```css
/* ============================================
   TOKENS
   ============================================ */
:root {
  /* Copy from tokens.css — lines 14-151 */
  /* Include: colors, fonts, spacing, borders */
}

/* ============================================
   SOUL CONSTRAINTS (NON-NEGOTIABLE)
   ============================================ */
* {
  border-radius: 0 !important; /* Prohibition #1 */
  box-shadow: none !important; /* Prohibition #2 */
}

/* ============================================
   BASE STYLES
   ============================================ */
body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
  color: var(--color-text);
  background: var(--color-background);
  margin: 0;
  padding: 0;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;
  margin: 0;
}

h3 {
  font-style: italic; /* Prohibition #17: all h3 must be italic */
}

/* ============================================
   CONTAINER (940-960px NON-NEGOTIABLE)
   ============================================ */
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8); /* 64px top/bottom, 32px left/right */
}

/* ============================================
   MECHANISMS (copy from catalog)
   ============================================ */

/* Mechanism #13: Dark Header */
.site-header {
  background: var(--color-text);
  color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-8);
}

/* Mechanism #2: 2-Zone Component DNA (if selected) */
.callout {
  border-left: 4px solid var(--accent-blue); /* Default, varies by type */
  padding: 20px 24px;
  margin: 24px 0;
  background: var(--bg-info);
}

.callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-2);
  display: block;
}

.callout__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}

/* Mechanism #9: Confidence Encoding via Color (if selected) */
.callout--tip {
  border-left-color: var(--accent-green);
  background: var(--bg-tip);
}

.callout--warning {
  border-left-color: var(--accent-coral);
  background: var(--bg-gotcha);
}

.callout--info {
  border-left-color: var(--accent-blue);
  background: var(--bg-info);
}

/* Add remaining mechanisms as needed */
```

**For each mechanism you selected:**
1. Copy the CSS from mechanism-catalog.md
2. Replace any hardcoded values with token variables
3. Adjust class names to match your HTML

**Output:** Complete CSS file with all mechanisms implemented using tokens.

---

### Step 6: Verify (10 min)

Run through this checklist:

#### Soul Constraints Check

- [ ] All elements have `border-radius: 0`
- [ ] No `box-shadow` anywhere
- [ ] No `filter: drop-shadow()`
- [ ] No gradients in backgrounds
- [ ] Container width is 940-960px
- [ ] All colors from palette (no #000 or #FFF)
- [ ] Instrument Serif only on headings (not body)
- [ ] All h3 are italic

#### Mechanism Count Check

- [ ] Used exactly 8-10 mechanisms
- [ ] Each mechanism serves a content need
- [ ] No conflicting mechanisms combined

#### Token Usage Check

- [ ] All colors use `var(--color-*)` or `var(--accent-*)`
- [ ] All spacing uses `var(--space-*)`
- [ ] All fonts use `var(--font-*)`
- [ ] All font sizes use `var(--type-*)` or `var(--text-*)`

#### Visual Coherence Check

- [ ] Page feels like one designer made it (not three)
- [ ] Text is comfortable to read (no cramped columns)
- [ ] Eye goes to the right place first (hierarchy works)

**Output:** Page that passes all checks.

---

## MECHANISM QUICK REFERENCE

**Use this table to map content needs to mechanisms:**

| Content Has... | Use Mechanism... | Catalog # |
|----------------|------------------|-----------|
| Callouts/tips/warnings | 2-Zone Component DNA + Confidence Encoding + Border-Left Signal | #2, #9, #10 |
| Code examples | Code Block | #17 |
| Tables | Data Table | #18 |
| Sections with varying importance | Border-Weight Gradient OR Spacing Compression | #1 or #4 |
| Dense/sparse rhythm | Dense/Sparse Alternation + Zone Background Differentiation | #5 + #7 |
| Parallel elements (comparisons) | Bento Grid OR Width Variation | #15 or #6 |
| Multiple sections needing nav | Scroll Witness / Sticky TOC | #8 |
| Long-form editorial | Drop Cap + Progressive Disclosure | #16 + #12 |
| Featured elements needing depth | Solid Offset Depth | #3 |

---

## COMMON MISTAKES TO AVOID

### Mistake #1: Picking mechanisms you like vs mechanisms content needs

**Wrong:** "I like drop caps, so I'll use mechanism #16"
**Right:** "Content has 5 narrative sections, so drop cap on first paragraph signals opening"

### Mistake #2: Skipping the always-load protocol

**Wrong:** Jumping straight to mechanism selection
**Right:** Read prohibitions.md first (especially 8 ABSOLUTE prohibitions)

### Mistake #3: Using custom CSS values instead of tokens

**Wrong:** `padding: 25px;`
**Right:** `padding: var(--space-6);` (24px from tokens)

### Mistake #4: Container width < 940px

**Wrong:** `max-width: 800px;` (too narrow, creates "centered in whitespace" feeling)
**Right:** `max-width: 960px;` (NON-NEGOTIABLE)

### Mistake #5: Reading all 18 mechanisms before selecting

**Wrong:** Read entire 869-line mechanism-catalog.md before deciding
**Right:** Select 8-10 based on content needs (Step 2), THEN read only those sections

### Mistake #6: Combining conflicting mechanisms

**Wrong:** Border-Weight Gradient + uniform 1px borders everywhere
**Right:** Check compatibility table (mechanism-catalog.md lines 707-717) before combining

### Mistake #7: Using mechanism without content justification

**Wrong:** "I have 7 mechanisms, need 1 more, I'll add Bento Grid"
**Right:** "Content has task-based reference (5 independent modules) → Bento Grid serves this need"

---

## FILE PATHS REFERENCE

**Mandatory reading (always-load):**
- Prohibitions: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/identity/prohibitions.md`
- Tokens: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/vocabulary/tokens.css`

**Mechanism reference (read selected mechanisms only):**
- Catalog: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`

**What NOT to read (these are for Track 2, not Middle-tier):**
- Case studies: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/`
- Tension-composition skill: `~/.claude/skills/tension-composition/SKILL.md`

---

## CONFIDENCE CHECKLIST

After completing Steps 0-6, you should be able to answer YES to all these:

- [ ] I know the 8 ABSOLUTE prohibitions by heart
- [ ] I selected 8-10 mechanisms based on content needs (not preferences)
- [ ] Each mechanism has a clear justification (serves a specific content need)
- [ ] My container is 940-960px wide
- [ ] All my CSS uses token values (not custom numbers)
- [ ] I checked for conflicting mechanism combinations
- [ ] My page passes all soul constraints
- [ ] I'm ready to build without asking the user for clarification

**If you answered NO to any:** Review that section of this guide.

**If you answered YES to all:** You have 8/10 confidence to start building. Proceed.

---

## NEXT STEPS AFTER BUILDING

1. **Audit with perceptual-auditing skill:**
   - Run the Mandatory Five (PA-01 through PA-05)
   - Check quantitative guardrails (940px container, 16px spacing, 32px padding, 40% compression)

2. **Fix any violations:**
   - Soul violations = rebuild (non-negotiable)
   - Perceptual issues = adjust values (use tokens)

3. **Mark complete:**
   - When page passes all checks, your Middle-tier build is done

---

## WHY THIS GUIDE EXISTS

This guide was created because a builder agent reading the full documentation (2,605 lines across 9 files) encountered 24 confusions and finished with only 3/10 confidence to start building.

This guide distills the 2,605 lines into the 8-10% that's CRITICAL for Middle-tier building, in the order a builder needs it.

**Comprehensive docs = for understanding the system**
**This guide = for building a page**

Use the right tool for the job.

---

**END QUICK-START GUIDE**

**Next:** Read prohibitions.md (8 ABSOLUTE prohibitions), then start Step 1.
