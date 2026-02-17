# Crown Jewel & Design System Enrichment Audit

**Auditor:** crown-jewel-auditor (Opus 4.6)
**Date:** 2026-02-17
**Task:** #7 -- Audit crown jewels and design system enrichments
**Files Audited:**
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (2,085 lines, 39/40)
- `design-system/validated-explorations/density/DD-006-fractal.html` (1,120 lines, 36/40)
- `ephemeral/flagship-preparation/11-crown-jewel-forensics.md` (565 lines)
- `design-system/compositional-core/identity/prohibitions.md` (419 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (700+ lines read)
- `design-system/compositional-core/vocabulary/tokens.css` (184 lines)
- `design-system/compositional-core/guidelines/semantic-rules.md` (530 lines)
- `ephemeral/prompt-enrichment-audit/00-PROMPT-STRUCTURE-OUTLINE.md` (105 lines)

---

## 1. CROWN JEWEL TECHNIQUE INVENTORY (15 Must-Replicate Techniques)

The forensics report identifies 15 must-replicate techniques. Here is each with specific CSS from the crown jewels:

### Technique 1: Token-Referenced Sizing Throughout
**Source:** CD-006 lines 73-155, DD-006 lines 134-173
**Status:** VERIFIED in both files. CD-006 uses 54 `var()` references in :root. DD-006 uses 26.
```css
/* CD-006: ALL sizes via tokens -- zero hardcoded except micro-adjustments */
h1 { font-size: var(--type-page); }
h2 { font-size: var(--type-section); margin-bottom: var(--space-6); }
p { max-width: 70ch; margin-bottom: var(--space-4); }
```
**Gap vs DD-006:** DD-006 hardcodes ~15 px values (font-size: 11px, 13px, 20px, 32px). CD-006 nearly eliminates hardcoding. Flagship MUST follow CD-006 pattern.

### Technique 2: Semantic HTML with Full ARIA
**Source:** CD-006 lines 1124-1136, 1145, 1181-1186, 1214
**Status:** CD-006 has 27+ ARIA attributes. DD-006 has only 3 (skip link, focus-visible, selection).
```html
<!-- CD-006 pattern: every section has aria-label, every callout role="note" -->
<section id="s1" class="section" aria-label="Section 1: Why Build from Tokens">
<div class="callout callout--essence" role="note">
<div class="transition--breathing" role="separator" aria-hidden="true"></div>
<nav class="toc" aria-label="Table of Contents">
```
**Insertable rule:** Every `<section>` MUST have `id` + `aria-label`. Every callout MUST have `role="note"`. Every transition MUST have `role="separator"`.

### Technique 3: Header-Footer Bookend
**Source:** CD-006 lines 248-293 (header), 951-977 (footer)
**Status:** VERIFIED. Dark background (#1A1A1A), 3px primary border accent, mirrored structure.
```css
/* Header */
header { background: var(--color-text); color: var(--color-background); border-bottom: 3px solid var(--color-primary); }
/* Footer mirrors */
.page-footer { background: var(--color-text); border-top: 3px solid var(--color-primary); }
```
**DD-006 gap:** No footer. White header. Flagship MUST have bookend.

### Technique 4: 3-Category Border System
**Source:** CD-006 lines 131-134 (token def), throughout CSS
**Status:** VERIFIED. 4px structural accent, 3px structural frame, 1px data separator. Never 2px (prohibition #9).
```css
/* The three weights in action (CD-006): */
.callout { border-left: var(--border-left-width) solid; } /* 4px -- accent */
.toc { border: 3px solid var(--color-border); }           /* 3px -- structural frame */
.decision-matrix td { border-bottom: 1px solid var(--color-border); } /* 1px -- data separator */
```

### Technique 5: Soul Enforcement Selector
**Source:** CD-006 lines 167-169
**Status:** VERIFIED. Only in CD-006, absent from DD-006.
```css
/* Defensive CSS: :where() has ZERO specificity -- forms retain native styling */
*:where(:not(input, button, select)) { border-radius: 0; }
```
**Critical:** This is the ONLY defensive CSS approach that works without breaking form elements.

### Technique 6: TOC with Axis/Pattern Annotations
**Source:** CD-006 lines 1124-1136
**Status:** VERIFIED. Each TOC entry shows axis pattern name (SPIRAL, Z-PATTERN, BENTO, etc.).
```html
<li><a href="#s1">
  <span class="toc-number">01</span>
  <span class="toc-title">Why Build from Tokens?</span>
  <span class="toc-density">SPIRAL</span>
</a></li>
```
**CSS for density label:**
```css
.toc-density { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); margin-left: auto; }
```

### Technique 7: Transition Grammar (3 Types)
**Source:** CD-006 lines 772-791
**Status:** VERIFIED with specific CSS. This is THE technique that makes sections feel connected.
```css
/* SMOOTH: subtle separation (48px + 1px line) */
.transition--smooth { margin: var(--space-12) 0; border-top: 1px solid var(--color-border); padding-top: var(--space-12); }

/* BRIDGE: cognitive reframe (64px + background zone + prose) */
.transition--bridge { margin: var(--space-16) 0; background: var(--color-zone-breathing); padding: var(--space-8); }

/* BREATHING: maximum separation (80px + 3px structural border) */
.transition--breathing { margin: var(--space-20) 0; border-top: 3px solid var(--color-border); padding-top: var(--space-20); }
```

### Technique 8: Bridge Transitions with Semantic Prose
**Source:** CD-006 lines 1315-1317
**Status:** VERIFIED. Every bridge contains actual cognitive-reframe prose.
```html
<div class="transition--bridge" role="separator" aria-hidden="true">
  <p style="font-family: var(--font-body); font-size: var(--type-body); color: var(--color-text-secondary); text-align: center; max-width: 70ch; margin: 0 auto;">
    Now that you understand the why, let us set up the how. The following token reference cards can be configured in any order -- each category is independent.
  </p>
</div>
```
**Key insight:** Bridge prose is NOT decorative. It JUSTIFIES the pattern change that follows. Without it, axis shifts feel random.

### Technique 9: Callout 2-Zone Structure
**Source:** CD-006 lines 397-455
**Status:** VERIFIED in both files. Universal DNA pattern.
```css
.callout { border-left: var(--border-left-width) solid; padding: var(--space-6) var(--space-8); margin: var(--space-6) 0; }
.callout-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
.callout-body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
```

### Technique 10: Code Blocks with Syntax Highlighting Tokens
**Source:** CD-006 lines 138-147 (tokens), 467-501 (CSS), 1262-1272 (usage)
**Status:** VERIFIED. 7 named syntax tokens.
```css
/* Token definitions */
--syntax-keyword: #E83025; --syntax-string: #6B9B7A; --syntax-comment: #666666;
--syntax-function: #4A7C9B; --syntax-type: #C97065; --syntax-number: #D97706;
--syntax-punctuation: #E0D5C5;
/* Usage classes */
.kw { color: var(--syntax-keyword); } .str { color: var(--syntax-string); }
.cmt { color: var(--syntax-comment); } .fn { color: var(--syntax-function); }
```

### Technique 11: Print Media Query
**Source:** CD-006 lines 993-999
**Status:** VERIFIED. CD-006 only. Absent from DD-006.
```css
@media print {
  body { background: white; color: black; }
  .skip-link { display: none; }
  header, footer { background: white; color: black; border-color: black; }
  .code-block { background: #f5f5f5; color: black; border-color: #ccc; }
}
```

### Technique 12: prefers-reduced-motion
**Source:** CD-006 lines 982-988, DD-006 similar
**Status:** VERIFIED in both files.
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Technique 13: Drop Cap (Sparse Deployment)
**Source:** CD-006 lines 384-392
**Status:** VERIFIED. Used only 2x in 8 sections (S1 and S4). Sparse = impactful.
```css
.drop-cap::first-letter {
  font-family: var(--font-display); font-size: 3.5em; float: left;
  line-height: 0.8; margin-right: var(--space-2); margin-top: 4px;
  color: var(--color-primary);
}
```
**Micro-detail:** `margin-top: 4px` prevents the drop cap from sitting too high. `line-height: 0.8` prevents pushing content down.

### Technique 14: Section Meta Descriptor
**Source:** CD-006 lines 374-381 (CSS), 1147 (usage)
**Status:** VERIFIED. Self-documenting structure.
```css
.section-meta { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
```
```html
<div class="section-meta">Section 01 &middot; Spiral &middot; Geological Density</div>
```

### Technique 15: Progressive Responsive Degradation
**Source:** CD-006 lines 1004-1089
**Status:** VERIFIED. 3 breakpoints with specific behaviors.
```css
@media (max-width: 960px) { /* 4-col grids collapse to 1-col, spans reset */ }
@media (max-width: 768px) { /* General collapse: header/container padding reduction, z-hero→1col, reasoning→1col, footer→column */ }
@media (max-width: 480px) { /* Minimum: font sizes reduce, code block tightens */ }
```

---

## 2. QUALITY EXEMPLAR EXCERPTS (Conviction Layer)

### Excerpt A: Designed Transition Zone (CD-006, ~20 lines)

This excerpt shows a DESIGNED boundary between Spiral (S1) and Z-Pattern (S2). The transition is not just whitespace -- it is a CSS structure with meaning.

```css
/* BREATHING transition: maximum separation for isolated patterns */
.transition--breathing {
  margin: var(--space-20) 0;       /* 80px above and below */
  border-top: 3px solid var(--color-border); /* structural weight */
  padding-top: var(--space-20);    /* 80px breathing room below border */
}

/* BRIDGE transition: cognitive reframe with prose */
.transition--bridge {
  margin: var(--space-16) 0;       /* 64px above and below */
  background: var(--color-zone-breathing); /* #FAF5ED earthy warmth */
  padding: var(--space-8);         /* 32px internal padding */
}
```
```html
<!-- Between S1 (Spiral) and S2 (Z-Pattern): BREATHING -->
<div class="transition--breathing" role="separator" aria-hidden="true"></div>

<!-- Between S2 (Z-Pattern) and S3 (Bento): BRIDGE with cognitive prose -->
<div class="transition--bridge" role="separator" aria-hidden="true">
  <p style="...color: var(--color-text-secondary); text-align: center; max-width: 70ch; margin: 0 auto;">
    Now that you understand the why, let us set up the how.
  </p>
</div>
```

**Why this is DESIGNED:** Three transition types exist (Smooth/Bridge/Breathing). Each is earned:
- Spiral is the most isolated axis (AD-F-025) -- gets BREATHING (maximum separation)
- Z-to-Bento requires cognitive mode shift -- gets BRIDGE (prose reframe)
- Bridge prose is NOT filler: "understand the why → set up the how" tells the reader their cognitive task is changing

### Excerpt B: Fractal Coherence at 2 Scales (DD-006, ~20 lines)

DD-006 achieves self-similar rhythm via progressive rgba opacity nesting:

```css
/* Progressive opacity creates subliminal depth WITHOUT box-shadow */
.fractal-nested {
  padding: var(--space-4);
  border-left: 3px solid var(--color-primary);
  background: rgba(232, 48, 37, 0.03);  /* Level 1: barely visible */
}
.fractal-nested .fractal-nested {
  margin-top: var(--space-3);
  background: rgba(232, 48, 37, 0.06);  /* Level 2: slightly deeper */
}
.fractal-nested .fractal-nested .fractal-nested {
  background: rgba(232, 48, 37, 0.09);  /* Level 3: noticeably tinted */
}
```
```html
<!-- Physical nesting IS the concept -->
<div class="fractal-nested">
  <div class="fractal-nested__label">PAGE</div>
  <div class="fractal-nested">
    <div class="fractal-nested__label">SECTION</div>
    <div class="fractal-nested">
      <div class="fractal-nested__label">COMPONENT</div>
    </div>
  </div>
</div>
```

**Why this works:** The page DEMONSTRATES what it explains. Each nesting level gets deeper tinting (0.03 → 0.06 → 0.09) creating depth through color progression rather than shadow. The reader FEELS the recursion before reading the labels.

### Excerpt C: Compositional Fluency / Self-Reference (CD-006, ~20 lines)

CD-006 uses border-weight gradient to encode confidence, then BOOKENDS the Spiral axis (S1 and S8) so the same pattern appears at beginning and end:

```css
/* Border-weight gradient: 4px = Established, 3px = Probable, 1px = Speculative */
.stratum--established { border-left: 4px solid var(--color-text); }
.stratum--probable { border-left: 3px solid var(--color-text-secondary); }
.stratum--speculative { border-left: 1px solid var(--color-border); }
```
```html
<!-- S1 opens with Spiral + geological density -->
<section id="s1" aria-label="Section 1: Why Build from Tokens">
  <div class="section-meta">Section 01 · Spiral · Geological Density</div>
  <div class="spiral-strata">
    <div class="stratum stratum--established">
      <div class="stratum-label">Bedrock -- Established</div>
      <!-- Core Abstraction component here -->
    </div>
    <div class="stratum stratum--probable">...</div>
    <div class="stratum stratum--speculative">...</div>
  </div>
</section>

<!-- S8 closes with SAME Spiral axis -- bookend closure -->
<section id="s8" aria-label="Section 8: What Comes Next">
  <div class="section-meta">Section 08 · Spiral · Geological Density</div>
  <!-- Same Spiral strata structure, different knowledge state -->
</section>
```

**Why this is COMPOSITIONAL FLUENCY:** Three mechanisms interact simultaneously:
1. Border-weight gradient encodes confidence (4px/3px/1px)
2. Spiral axis creates geological depth feeling
3. Bookend architecture (S1 = S8) creates narrative closure
These are not independent tools -- they REINFORCE each other. The reader arrives home.

---

## 3. ENRICHMENT VERIFICATION

### B1: Max Whitespace Prohibition
**Location:** `prohibitions.md` lines 323-356 (Prohibition #21)
**Status:** PRESENT and CORRECTLY PLACED. Binary test with measurement protocol:
- "At no scroll position should a full viewport height have less than 30% content coverage"
- 0 consecutive positions below 30% = PASS
- 2+ consecutive positions below 30% = FAIL
- Exception: single breathing zone with visible text content
**Cross-reference to tokens.css:** References `--space-max-zone` (96px maximum per-property spacing value) -- CORRECTLY cross-referenced at line 295.
**Builder readability:** EXCELLENT. The step-by-step measurement protocol (Step 1-3, Pass/Fail) is unambiguous.

### B3: Front-Loaded Weight Prohibition
**Location:** `prohibitions.md` lines 359-386 (Prohibition #22)
**Status:** PRESENT and CORRECTLY PLACED. "NEVER Concentrate All Visual Interest in the First Third"
- Binary rule: at least ONE designed moment must appear below 50% scroll depth
- Measurement: identify designed moments, map scroll positions, check distribution
**Cross-reference:** References ceiling experiment findings (PA-32, PA-35, PA-36, PA-47)
**Builder readability:** EXCELLENT. Clear definition of "designed moment" (3+ mechanisms at high intensity + unique visual treatment).

### C3: Max Spacing Token 96px
**Location:** `tokens.css` lines 114-122
**Status:** PRESENT and CORRECTLY PLACED.
```css
--space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections */
--space-max-zone: var(--space-24);     /* 96px -- Maximum between zones */
/* RULE: No single margin or padding value should exceed --space-max-zone (96px). */
```
**Cross-reference:** Comment cites ceiling experiment evidence ("accumulated ~1,500-2,000px in zone transitions"). References mechanism-catalog transition grammar.
**Builder readability:** GOOD. The inline comment explains both the rule and the rationale. Could be slightly clearer about stacking behavior.

### A1: Transition Grammar
**Location:** `mechanism-catalog.md` -- scattered across mechanisms #13 (header), #14 (footer), and implicitly in transition discussion. Also documented in the forensics report.
**Status:** PARTIALLY PRESENT. The three transition types (Smooth/Bridge/Breathing) are documented in CD-006 CSS (lines 772-791) and the forensics report, but the mechanism-catalog does NOT have a dedicated "Transition Grammar" mechanism entry.
**Gap identified:** mechanism-catalog.md lacks a dedicated Mechanism #18 or equivalent for transition grammar. The three types are referenced in the forensics report but not as a standalone catalog entry.
**Impact:** A builder reading only mechanism-catalog.md would NOT learn the Smooth/Bridge/Breathing grammar. They would need to also read CD-006 or the forensics report.
**Recommendation:** Add Mechanism #18 "Transition Grammar" to mechanism-catalog.md with the three CSS patterns from CD-006 lines 772-791.

### A2: Restraint Principle
**Location:** `mechanism-catalog.md` lines 64-89 (CRITICAL DISTINCTION section)
**Status:** PRESENT but IMPLICIT. The catalog explains multi-channel coherence vs independent mechanism deployment (Middle vs Ceiling selection logic). The "restraint" concept is embedded in the anti-scale model documented elsewhere, not explicitly called "restraint principle" in mechanism-catalog.
**Cross-reference:** The anti-scale model `Richness = semantic density x restraint x spatial confidence` is in the prompt outline (Section 3, line 31) but NOT in mechanism-catalog.md itself.
**Impact:** MODERATE. The concept exists across multiple files but has no single anchor point in the catalog.
**Recommendation:** Add a "Restraint Principle" section to mechanism-catalog.md or ensure the conviction layer of the prompt carries this.

### A3: Content Density
**Location:** `semantic-rules.md` lines 252-318 (Gap 6: Content Density Floors Per Zone)
**Status:** PRESENT and CORRECTLY PLACED. Three rules:
1. Minimum content per zone (3+ paragraphs OR 2+ components for dedicated zone)
2. Maximum consecutive empty viewport height (same as B1, correctly cross-referenced)
3. Zone count ceiling by content volume (table with <1500 words = 2 zones, etc.)
**Cross-reference:** Cites ceiling experiment, OD-004, tokens.css `--space-max-zone`
**Builder readability:** EXCELLENT. Tables with clear minimums. Binary tests at each rule. Boundary rule: "Zones exist to SERVE content, not to DEMONSTRATE architecture."

### D3: Content-Form Fit
**Location:** `semantic-rules.md` lines 322-397 (Gap 7: Content-Form Fit)
**Status:** PRESENT and CORRECTLY PLACED. Two gates:
1. "Does this section have enough content to fill this form at minimum density?" -- binary gate
2. "Is this form the SIMPLEST form that serves this content?" -- inverse verification
**Cross-reference:** Cites ceiling experiment (Failure 5) and CD-006 (39/40, content matched form)
**Builder readability:** EXCELLENT. Form treatment table with specific minimums per component type. Clear "If Below Minimum" column with specific downgrade paths.

### Enrichment Summary Table

| Enrichment | File | Lines | Status | Cross-Refs OK? | Builder Readable? |
|------------|------|-------|--------|----------------|-------------------|
| B1 (Max whitespace) | prohibitions.md | 323-356 | PRESENT | YES (tokens.css) | EXCELLENT |
| B3 (Front-loaded weight) | prohibitions.md | 359-386 | PRESENT | YES (ceiling PA) | EXCELLENT |
| C3 (Max spacing 96px) | tokens.css | 114-122 | PRESENT | YES (ceiling exp) | GOOD |
| A1 (Transition grammar) | mechanism-catalog.md | N/A | PARTIAL GAP | NO dedicated entry | NEEDS WORK |
| A2 (Restraint principle) | mechanism-catalog.md | N/A | IMPLICIT | Scattered | NEEDS ANCHOR |
| A3 (Content density) | semantic-rules.md | 252-318 | PRESENT | YES (ceiling, tokens) | EXCELLENT |
| D3 (Content-form fit) | semantic-rules.md | 322-397 | PRESENT | YES (ceiling, CD-006) | EXCELLENT |

---

## 4. CONTAINER WIDTH FINDING

### What CD-006 Actually Uses

**CD-006 container: `max-width: 1100px`** (line 299)

```css
.page-container { max-width: 1100px; margin: 0 auto; padding: var(--space-16) var(--space-8); }
.header-inner { max-width: 1100px; margin: 0 auto; padding: var(--space-16) var(--space-8); }
.page-footer__inner { max-width: 1100px; margin: 0 auto; }
```

### What DD-006 Uses

**DD-006 container: `max-width: 1000px`** (line 224)

```css
.page-container { max-width: 1000px; margin: 0 auto; padding: 0 var(--space-6); }
```

### Implications for the 940-960px Rule

The crown jewels (39/40 and 36/40) both use containers WIDER than 960px:
- CD-006: 1100px (160px over the 940px minimum)
- DD-006: 1000px (60px over the 940px minimum)

**The 940-960px rule is a MINIMUM FLOOR, not a target width.** Both crown jewels are ABOVE this floor. The rule exists to prevent catastrophic narrowing (ceiling experiment collapsed content). Neither crown jewel violates it.

**With padding:** CD-006 uses `padding: var(--space-16) var(--space-8)` = 64px top/bottom + 32px left/right. Content area = 1100px - 64px = 1036px. At 1440px viewport, the page-container uses ~76% of viewport width.

**Recommendation for flagship prompt:** State the rule as "container MINIMUM 940px" and note that CD-006 (39/40) uses 1100px. The 940px number prevents the failure mode; the actual sweet spot for crown jewels is 1000-1100px.

**Known gap in prompt outline (item 6):** "CD-006 container was 1100px not 960px -- container width rule may need adjustment." This is CONFIRMED: CD-006 uses 1100px. The rule should state: "Container `max-width` MUST be between 940px and 1100px. CD-006 (39/40) uses 1100px."

---

## 5. SPECIFIC INSERTABLE TEXT FOR CONVICTION LAYER

### Insert 1: Transition Grammar Exemplar (~18 lines)

```
DESIGNED TRANSITIONS (from CD-006, 39/40):

Three transition types exist. Each is EARNED by the content relationship:

  SMOOTH:  48px + 1px border. Use when sections share cognitive mode.
  BRIDGE:  64px + background zone + 1-3 sentences of cognitive-reframe prose.
           Use when the reader's TASK changes (from understanding to doing).
  BREATHING: 80px + 3px border. Use when axes shift between isolated patterns
             (Spiral is always isolated -- AD-F-025).

The bridge prose is NOT filler. CD-006 line 1316:
  "Now that you understand the why, let us set up the how."
This sentence JUSTIFIES the axis change from Z-Pattern to Bento Grid.
Without it, the shift feels random. With it, the reader knows their
cognitive task is changing.

Every transition must be one of these three types. Arbitrary spacing between
sections (margin-bottom: 80px with no transition structure) is not a transition.
It is void.
```

### Insert 2: Container Width Exemplar (~8 lines)

```
CONTAINER WIDTH (verified from crown jewels):

CD-006 (39/40): max-width: 1100px
DD-006 (36/40): max-width: 1000px
Ceiling experiment (DO NOT SHIP): 2160px estimated (caused void)
Middle experiment (PA-05 4/4): 960px

Rule: max-width between 940px and 1100px. Content area with padding
should occupy 65-80% of a 1440px viewport. The 940px floor prevents
catastrophic narrowing; 1100px is the proven upper bound.
```

### Insert 3: Compositional Fluency Exemplar (~12 lines)

```
COMPOSITIONAL FLUENCY (from CD-006 S1):

Three mechanisms encoding the SAME semantic dimension (confidence):
  - Border-weight gradient: 4px (established) / 3px (probable) / 1px (speculative)
  - Spacing compression: sparse (established) → dense (speculative)
  - Background zone shift: warm cream → white → earthy tan

When the reader scrolls through the Spiral strata, ALL THREE channels
say "deepening uncertainty" simultaneously. This is not three independent
techniques. It is one experience produced through three CSS channels.

This multi-channel coherence separates Ceiling from Middle. Middle uses
the same mechanisms but independently. Ceiling uses them as reinforcing
dimensions of a single semantic domain.
```

### Insert 4: Self-Reference / Bookend Exemplar (~8 lines)

```
STRUCTURAL CLOSURE (from CD-006):

S1 (opening): Spiral axis, Geological density, confidence-based organization
S8 (closing):  Spiral axis, Geological density, confidence-based organization

Same structural form, different knowledge state. The reader ARRIVES HOME.
This is not repetition -- it is narrative closure through structural mirroring.
CD-006 uses the SAME Spiral strata CSS for both S1 and S8. The CSS echoes;
the CONTENT transforms.
```

### Insert 5: DD-006 Progressive Opacity (~6 lines)

```
FRACTAL DEPTH (from DD-006):

rgba(232, 48, 37, 0.03) → 0.06 → 0.09 for nested levels.
Creates subliminal depth WITHOUT violating box-shadow prohibition.
The reader perceives "going deeper" through progressive tinting.
This is the soul-compliant alternative to z-axis depth cues.
```

---

## 6. BUILDER READABILITY ASSESSMENT

### prohibitions.md -- EXCELLENT
- 22 prohibitions with clear ABSOLUTE vs CONDITIONAL categorization
- Each prohibition has: WHY it exists, WHAT it protects, EVIDENCE (2+ sources), EXCEPTION documentation
- Prohibitions #21 (max whitespace) and #22 (front-loaded weight) have step-by-step measurement protocols
- Binary tests throughout ("Pass/Fail" with specific thresholds)
- "How to Use This Document" section at the end
- **A builder reading ONLY this file would understand ALL identity constraints.**

### tokens.css -- GOOD
- 65 tokens in a single :root block with clear categorization
- Inline comments explain mutability (IMMUTABLE, MUTABLE, AVAILABLE)
- Spacing maximums (lines 114-122) have clear rules and evidence
- Gestalt semantic aliases (--space-within/between/chapter) aid comprehension
- **Minor gap:** Some tokens lack usage guidance. A builder may not know WHEN to use `--accent-coral` vs `--color-primary` for error states. This is covered in semantic-rules.md but not cross-referenced from tokens.css.

### mechanism-catalog.md -- GOOD with GAPS
- 18 mechanisms with CSS code, cross-file frequency, transfer test, application modes
- CRITICAL DISTINCTION section (lines 64-89) clearly explains Middle vs Ceiling selection logic
- Impact profiles help prioritize (HIGH/MEDIUM/LOW)
- **Gap 1:** No dedicated transition grammar entry (Smooth/Bridge/Breathing). This is the #7 must-replicate technique from forensics.
- **Gap 2:** Restraint principle is implicit, not explicit.
- **Gap 3:** Application modes were enriched (mechanisms #1, #7 have them) but not all 18 mechanisms have them yet.
- **A builder reading this file would understand WHAT mechanisms exist and HOW to use them, but would NOT learn the transition grammar without also reading CD-006.**

### semantic-rules.md -- EXCELLENT
- 7 gaps filled with 2+ HTML examples per rule
- Content density floors (Gap 6) have binary tests, tables, and zone count ceiling
- Content-form fit (Gap 7) has "Enough Content?" gate and "Form Matches Content" inverse test
- Semantic value framework (3-question test) with before/after CSS examples
- Tier-specific justification depth table (Floor/Middle/Ceiling/Flagship)
- **A builder reading this file would make CORRECT semantic decisions about callout types, code block formats, table styling, breathing zones, zone count, and form treatment.**

### Overall Builder Readability: 8/10

**Strengths:**
- Binary rules throughout (100% agent compliance per metacognition finding)
- Step-by-step measurement protocols for spatial rules
- Clear tables with minimums and "If Below Minimum" guidance
- Cross-references between files are MOSTLY correct

**Weaknesses:**
- Transition grammar is the biggest gap (documented in forensics but not in the operational catalog)
- Restraint principle needs an anchor point
- tokens.css could cross-reference semantic-rules.md for usage guidance

---

## 7. ADDITIONAL FINDINGS

### Finding 1: Signal-to-Silence Ratio in CD-006

CD-006 achieves its quality through signal-to-silence balance:
- 33 callout instances across 8 sections (~4 per section)
- 6 code blocks (every code block earns its existence through tutorial content)
- 7 transitions between 8 sections (every boundary has a transition)
- 2 drop caps in 8 sections (scarcity = impact)
- 0 decorative elements (every visual element carries information)

This ratio should be captured as a benchmark: ~4 components per section, 1 transition per boundary, drop caps at <25% frequency.

### Finding 2: DD-006 "Be the Argument" Principle

DD-006's magic is not in CSS but in CONCEPTUAL RECURSION. The page demonstrates fractal density by BEING fractal. The CSS is simple (~250 active declarations). The structure IS the argument. This cannot be replicated through CSS alone -- it requires content-structure alignment.

**Implication for flagship:** The prompt should include the principle "Be the argument: if the page explains X, the page should structurally BE X." This is not a CSS rule -- it is a compositional principle for the conviction layer.

### Finding 3: CD-006 Inline Styles

CD-006 uses inline styles in 7 places (lines 1103, 1237-1238, 1250-1251, 1316). These are exceptions for one-off treatments (Z-pattern hero zone styling, bridge prose centering). This is acceptable when the style applies to exactly ONE element and creating a CSS class would be over-engineering. The flagship prompt should not prohibit inline styles categorically.

### Finding 4: Crown Jewel Quality Gate (Insertable as Builder Checklist)

The forensics report condenses crown jewel quality into 8 binary checks (Section 6.4). This is DIRECTLY insertable into the execution spec:

```
CROWN JEWEL QUALITY GATE (8 checks):
1. TOKEN COVERAGE: Are zero CSS values hardcoded? (All via var())
2. FRAME: Is there a dark header + dark footer with primary accent?
3. TRANSITIONS: Are all section boundaries one of Smooth/Bridge/Breathing? Do bridges have prose?
4. META: Does each section show its structural strategy in a visible label?
5. VARIETY: Are 8+ distinct component types used, each demanded by content?
6. ARC: Does page density follow sparse-dense-sparse? Is climax in the middle, not end?
7. ACCESSIBILITY: Does every <section> have aria-label? Every callout role="note"? Skip link present?
8. SOUL: Is *:where(:not(input,button,select)){border-radius:0} present?
```

---

## 8. RECOMMENDATIONS FOR PROMPT ASSEMBLY

1. **CRITICAL:** Add Transition Grammar as a dedicated section in the execution spec. The three CSS patterns from CD-006 lines 772-791 should be insertable verbatim.

2. **IMPORTANT:** Container width rule should state "940px-1100px" not "940-960px". Both crown jewels exceed 960px. The range reflects empirical evidence.

3. **CONVICTION LAYER:** Include all 5 insertable text blocks from Section 5 above. Total: ~52 lines. These are the strongest quality exemplars with specific CSS.

4. **BUILDER CHECKLIST:** Include the 8-point Crown Jewel Quality Gate (Finding 4) in the builder self-check section (Section 2E of the prompt).

5. **GAP FIX:** mechanism-catalog.md should get a Transition Grammar mechanism entry. This is the highest-impact missing enrichment.

6. **"BE THE ARGUMENT" PRINCIPLE:** Add to conviction layer: "The page should demonstrate what it explains." This is DD-006's deepest lesson.

---

**END AUDIT REPORT**
**Total crown jewel source code examined:** 3,205 lines (CD-006: 2,085 + DD-006: 1,120)
**Enrichments verified:** 7 (5 PRESENT, 2 PARTIAL/IMPLICIT)
**Insertable text blocks produced:** 5 (52 lines total)
**Gaps identified:** 3 (transition grammar entry, restraint principle anchor, tokens.css cross-ref)
