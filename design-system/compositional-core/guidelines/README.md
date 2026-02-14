# Guidelines Layer — Semantic Decision Rules

**What this directory contains:** The rules for choosing BETWEEN extracted components, mechanisms, and patterns.

**Layer:** 6 (decision support — when to use what)

---

## Contents

**1. `semantic-rules.md` (when-to-use decisions)**
- When Info vs Context callout?
- When serif vs sans typography?
- When 4px vs 3px vs 1px border?
- When dense vs sparse background?

**2. `responsive-strategy.md` (viewport adaptation)**
- 768px primary breakpoint (grid → single-column)
- Spacing compression at mobile (64px → 32px)
- Typography scale reduction (40px → 32px headings)

**3. `usage-criteria.md` (confidence levels + stage markers)**
- HIGH/MEDIUM/LOW component confidence
- CD-ONLY component markers
- Parametric variation guidance

---

## What This Layer Provides

**Guidelines fill SEMANTIC GAPS between layers.**

**Example gap:**
- Layer 4 (Components): Callout component with 6 semantic variants
- **Gap:** When to use Info vs Context vs Essence?
- Layer 6 (Guidelines): "Info = new concept. Context = prerequisite. Essence = key insight."

**Without guidelines:**
- Agents guess (often wrong)
- Semantic variants used arbitrarily
- No consistency across layouts

**With guidelines:**
- Clear decision criteria
- Semantic meaning preserved
- Consistency across layouts

---

## The Semantic Rules

### Callout Variant Selection

**When Info vs Context?**
- **Info (blue):** New concept being introduced
- **Context (blue/gray):** Prerequisite knowledge required for understanding
- **Distinction:** Info = forward (what you're learning), Context = backward (what you need first)

**When Tip vs Gotcha?**
- **Tip (green):** Positive suggestion (what TO do)
- **Gotcha (red/coral):** Negative warning (what NOT to do)
- **Distinction:** Tip = best practice, Gotcha = common mistake

**When Essence vs Note?**
- **Essence (amber/purple):** Key insight (distilled wisdom)
- **Note (blue):** Supplementary detail (interesting but not critical)
- **Distinction:** Essence = editorial voice (serif italic), Note = informational (sans regular)

**When Challenge vs Caution?**
- **Challenge (purple):** Intellectual provocation (question assumptions)
- **Caution (amber):** Procedural warning (watch out for this)
- **Distinction:** Challenge = thought-provoking, Caution = safety/risk

**Full decision tree:** `semantic-rules.md` lines 15–87

---

### Typography Hierarchy

**When serif vs sans?**
- **Serif (Instrument Serif):** Display headings ONLY (editorial authority)
- **Sans (Inter):** Body text, labels, UI elements (functional clarity)
- **Mono (JetBrains Mono):** Code, IDs, technical metadata (technical precision)

**Why this split:**
- Serif = authority signal (literary, editorial)
- Sans = readability (long-form body text)
- Mono = precision (code, data)

**Prohibited:**
- ❌ Serif for body text (too heavy, reduces readability)
- ❌ Sans for display headings (loses editorial voice)
- ❌ Non-mono for code (reduces scannability)

**Full typography rules:** `semantic-rules.md` lines 89–142

---

### Border-Weight Encoding

**When 4px vs 3px vs 1px?**

**4px (structural / high confidence):**
- Callout left borders (primary accent)
- File tree containers
- Decision matrix borders
- Page header/footer borders (primary red)

**3px (accent / moderate confidence):**
- Table header borders
- Code block borders
- Reasoning component containers
- Section separators

**1px (micro / low confidence):**
- Table row borders
- Subtle dividers
- Version badges
- Grid gaps (as background)

**Decision criteria:**
- High hierarchy OR high confidence → 4px
- Medium hierarchy OR medium confidence → 3px
- Low hierarchy OR low confidence → 1px

**Special case: Geological confidence encoding**
- 4px = bedrock (certain)
- 3px = strata (moderate)
- 2px = topsoil (exploratory) ← ONLY exception to 2px prohibition
- 1px = atmosphere (speculative)

**Full border rules:** `semantic-rules.md` lines 144–203

---

### Dense vs Sparse Backgrounds

**When dense background?**
- High information density content
- Code blocks (dark dense)
- Answer sections (Q&A pairs)
- Peak density zones (CD section zones)

**When sparse background?**
- Low information density content
- Callout labels (breathing space)
- Opening sections (density arc)
- Recovery zones (breathing after peak)

**When breathing background?**
- Between-section decompression
- Breathing zones (CD-specific)
- Recovery after dense peaks

**Decision criteria:**
- Content complexity → background density
- More complex = denser background
- Simpler = sparser background

**Full zone rules:** `semantic-rules.md` lines 205–264

---

## Responsive Strategy

### 768px Primary Breakpoint

**What collapses:**
- Multi-column grids → 1–2 columns
- Bento grids → single column (or 2-col if cells compact)
- Decision matrices → single column
- File trees → maintain structure (monospace scales)

**What compresses:**
- Spacing: 64px → 32px (section breaks)
- Spacing: 48px → 24px (margins)
- Typography: 40px → 32px (h1 headings)
- Typography: 32px → 24px (h2 headings)

**What stays:**
- Border widths (4px/3px/1px maintained)
- Color palette (no mobile overrides)
- Soul constraints (sharp edges, flat surfaces)

**Full responsive strategy:** `responsive-strategy.md`

---

### Mobile-First vs Desktop-First

**Phase C extraction: DESKTOP-FIRST bias**
- 768px is PRIMARY breakpoint (validated in 90%+ files)
- Mobile (375px) and tablet (1024px) observed but NOT systematically validated

**Recommendation for Phase D builds:**
- Start desktop (1440px default)
- Add 768px breakpoint (grid collapse, spacing compression)
- Test mobile (375px) but don't mandate specific values

**Future:** Mobile-first extraction requires mobile-validated content (not yet built).

---

## Usage Criteria

### Component Confidence Levels

**HIGH confidence (use freely):**
- Callout family (27/27 files, 100%)
- Code blocks (25/27 files, 92%)
- Page header/footer (27/27 files, 100%)
- Tables (19/27 files, 70%)
- Skip-link, focus-visible, selection (100%)

**MEDIUM confidence (validated in stage):**
- CD-only components (reasoning, bento grid, density meter, etc.)
- DD/OD-primary components (file tree, decision matrix)
- Stats bar, section indicator (63–66% universal)

**LOW confidence (use with caution):**
- Tension-test components (layer boundaries, building floor, compression grid)
- Q&A pair (2/27 files, 7%)
- Density indicator (3/27 files, 11%)

**Promotion criteria:**
- LOW → MEDIUM: Appears in 4+ new files across metaphors
- MEDIUM → HIGH: Appears in 8+ total files OR validates across all stages

**Full confidence guide:** `usage-criteria.md` lines 12–89

---

### CD-ONLY Component Markers

**8 components marked CD-ONLY:**
1. Reasoning component (framed deliberation)
2. Core abstraction (essence + proof)
3. Bento grid (high-density containment)
4. Essence pullquote (purple-bordered quote)
5. Density meter (5-segment bar)
6. Version badge (inline metadata)
7. Section zones (density progression)
8. Breathing zones (decompression)

**What CD-ONLY means:**
- Validated in CD stage ONLY (6 files)
- NOT validated in DD/OD (0 files in those stages)
- Use for CD-style combination layouts
- Don't use for DD-style dense technical OR OD-style conversational

**When to use CD-ONLY:**
- Content requires density arc (opening → peak → resolution)
- Content combines multiple complexity levels
- Content benefits from progressive disclosure

**Full CD marker guide:** `usage-criteria.md` lines 91–154

---

### Parametric Variation Guidance

**Callout colors (mutable):**
- Change semantic type = change `--accent-color`
- Add NEW semantic type = define new color + add to vocabulary

**Section zones (mutable padding):**
- Change density arc = adjust padding values
- Example values (64px/48px/32px/24px) are AVAILABLE, not MANDATED
- Derive YOUR values from spacing scale (4px increments)

**Stats bar (two patterns):**
- Horizontal segments (DD/OD) OR vertical stacks (CD)
- Choose based on layout: bar visualization = horizontal, metadata display = vertical

**Full variation guide:** `usage-criteria.md` lines 156–219

---

## How to Use This Directory

### Before Building

**Step 1: Read `semantic-rules.md`**
- Scan callout variant rules
- Check typography hierarchy
- Review border-weight encoding

**Step 2: Check `usage-criteria.md`**
- Verify component confidence (HIGH/MEDIUM/LOW)
- Check stage markers (CD-ONLY, universal, DD/OD-primary)

**Step 3: Plan responsive**
- Read `responsive-strategy.md`
- Identify grid collapse points (768px)
- Plan spacing compression values

### During Building

**Semantic decisions:**
- Need callout: "Is this Info (forward) or Context (backward)?"
- Need border: "Is this high (4px), medium (3px), or low (1px) hierarchy?"
- Need background: "Is content dense or sparse?"

**Responsive checks:**
- Grid at 768px: collapses to 1–2 columns?
- Spacing at 768px: compresses 64px → 32px?
- Typography at 768px: scales 40px → 32px?

**Confidence checks:**
- Component confidence HIGH? → use freely
- Component confidence MEDIUM? → check stage marker
- Component confidence LOW? → review component inventory notes

---

## What NOT to Do

❌ **DO NOT ignore semantic distinctions**
- "Info and Context are both blue, so they're the same" ✗
- Info = forward, Context = backward (semantic difference matters) ✓

❌ **DO NOT use CD-ONLY in DD/OD contexts**
- Reasoning component is CD-specific (framed deliberation)
- Don't use in DD dense technical OR OD conversational ✗
- Check stage marker before using ✓

❌ **DO NOT skip responsive planning**
- "It works at 1440px, ship it" ✗
- Test at 768px (grid collapse) and 375px (mobile) ✓

❌ **DO NOT treat AVAILABLE values as MANDATED**
- "DD-006 uses 80px, so I must too" ✗
- Derive YOUR values from spacing scale (4px increments) ✓

---

## Relationship to Other Layers

**Layer 1 (Identity):**
- Guidelines enforce prohibitions ("No serif for body text")
- Semantic rules preserve soul (editorial voice = serif display ONLY)

**Layer 2 (Vocabulary):**
- Guidelines reference tokens ("Use `--accent-blue` for Info")
- Explain mutability ("Accent colors are MUTABLE")

**Layer 3 (Grammar):**
- Guidelines apply mechanisms ("Border-weight for hierarchy OR confidence")
- Explain compositional rules ("Dense/sparse alternation creates breathing")

**Layer 4 (Components):**
- Guidelines choose between components ("When callout vs pullquote?")
- Document confidence levels (HIGH/MEDIUM/LOW)

**Layer 5 (Case Studies):**
- Guidelines inform case study interpretation ("Geological = confidence encoding")
- Extract semantic patterns ("OD case studies → warmth-leaning")

---

## Why This Layer Exists

**Guidelines translate STRUCTURE into MEANING.**

**Example:**
- Layer 4: "Callout has 6 variants: Info, Tip, Essence, Gotcha, Challenge, Note"
- Layer 6: "Info = new concept (forward), Context = prerequisite (backward)"

**Without Layer 6:**
- Agents see 6 blue callouts with no semantic distinction
- Arbitrary usage ("I'll use Info because it's first in the list")

**With Layer 6:**
- Semantic meaning preserved
- Consistent usage across layouts
- Content communicates intent

**Guidelines are the BRIDGE between extraction and application.**

---

## Known Gaps

**Edge cases underspecified:**
- When to create NEW semantic callout type? (no clear criteria)
- When to break 3-category border system? (geological exception documented, others?)
- When to use dark backgrounds beyond code? (stats bar dark documented, others?)

**Content type gaps:**
- Guidelines assume prose-heavy content (no data-dashboard rules)
- Guidelines assume desktop-first (mobile-first rules missing)
- Guidelines assume technical documentation (marketing content underspecified)

**Mitigation:**
- Add edge case rules as Phase D builds encounter them
- Document NEW semantic types in `semantic-rules.md`
- Expand responsive strategy for mobile-first

---

## File Metadata

**Guideline layer files:** 3
**Total semantic rules:** 7+ decision trees (callout, typography, border, zone, responsive, confidence, stage)
**Responsive breakpoints:** 1 primary (768px), 2 documented (375px, 1024px)
**Component confidence:** 26 families classified (10 HIGH, 18 MEDIUM, 6 LOW)
**Stage markers:** 8 CD-ONLY, 5 DD/OD-primary, 10 universal
**Extraction lens:** Identity + Enablement (guidelines enable choice, don't constrain)
**Validation:** Convergence check (semantic gaps documented)
**Next review:** After Phase D-V builds (add edge case rules, expand coverage)

---

**CHOOSE WITH MEANING. NOT ARBITRARILY.**
