# B7: Gas Town Flagship Gap Analysis -- Concrete Remediation Roadmap

**Agent:** gap-analyst (Opus 4.6)
**Date:** 2026-02-22
**Task:** #38 -- For each of the 10 quality dimensions where Gas Town falls short of Flagship, identify specific CSS/HTML causing the deficit, provide actual CSS diffs for remediation, classify whether fixable by prompt alone or requiring architectural change, and define what 4/5 looks like concretely.

**Source Files Analyzed:**
- `ephemeral/handoff-research/52-adversarial-quality-gaps.md` (398 lines, primary diagnostic)
- `ephemeral/pages/gas-town-steve-yegge/output.html` (1,509 lines, the artifact)
- `ephemeral/handoff-research/55-flagship-crystallization.md` (720 lines, Flagship CSS target)
- `ephemeral/handoff-research/57-compositional-fluency-deep.md` (510 lines, fluency registers)
- `ephemeral/handoff-research/54-cd006-deficit-analysis.md` (518 lines, CD-006 comparison)

---

## EXECUTIVE SUMMARY

Gas Town averages 2.5/5 across 10 Flagship dimensions. The gap decomposes into:

- **3 dimensions fixable by CSS-only remediation** (no prompt/architecture change): Channel Shifts, Emotional Arc, Spatial Confidence
- **3 dimensions fixable by prompt enrichment** (adding missing playbooks): Typographic Craft, Material Authenticity, Detail Density
- **4 dimensions requiring architectural pipeline changes** (how the builder receives instructions): Pervading Metaphor, Multi-coherence, Compositional Intelligence, Scale Hierarchy

Total estimated CSS changes for all 10 dimensions: ~350-450 lines of CSS additions/modifications, ~60 lines of HTML restructuring. But CSS changes alone move the average from 2.5/5 to ~3.2/5. Reaching 4/5 on all dimensions requires pipeline architecture changes that alter HOW the builder thinks, not just WHAT CSS it writes.

---

## DIMENSION 1: PERVADING METAPHOR (2.5/5 -> target 4/5)

### 1.1 Specific CSS Properties Causing the Low Score

The metaphor "military dispatch / command post" is expressed ONLY through text labels and CSS comments, not through CSS structure.

**Current CSS (output.html lines 259-268):**
```css
/* ZONE 1: SITUATION BRIEF
   Metaphor: Open dispatch -- sparse, authoritative
   Direction: OPENING */
.zone-1 {
  background: var(--bg-z1);        /* #FEF9F5 -- generic warm cream */
  padding: var(--space-16) var(--space-20); /* 64px 80px -- generic editorial */
}
```

The values `#FEF9F5` and `64px 80px` are standard editorial values. They would be identical for ANY metaphor. The metaphor predicts NOTHING about the CSS.

**Smoking gun:** Zone backgrounds are organized by position (`--bg-z1`, `--bg-z2`, `--bg-z3`, `--bg-z4`) not by metaphor concept. A structural metaphor would produce variables named by the metaphor's semantic:

```css
/* CURRENT: position-labeled */
--bg-z1: #FEF9F5;
--bg-z2: #F0EBE3;
--bg-z3: #E8E0D4;
--bg-z4: #F5F0E8;

/* FLAGSHIP: metaphor-labeled, values derivable from metaphor logic */
--clearance-public: #FEF9F5;      /* Open briefing -- warmest, most accessible */
--clearance-restricted: #F0EBE3;   /* Tactical -- cooler, slightly guarded */
--clearance-classified: #E0D5C0;   /* Intel -- significantly darker, 25+ RGB delta */
--clearance-deployment: #F5F0E8;   /* Field -- return to open air */
```

### 1.2 CSS Changes That Would Improve the Score

**A. Rename custom properties by metaphor semantic (structural change):**
```css
/* Replace zone-positional naming with metaphor-derived naming */
:root {
  /* Military Dispatch Clearance Levels */
  --dispatch-open: #FEF9F5;
  --dispatch-tactical: #F0EBE3;
  --dispatch-classified: #DDD4C4;   /* DARKER -- delta 25 from tactical, not 15 */
  --dispatch-field: #F5F0E8;

  /* Urgency-encoding borders */
  --border-routine: 1px;            /* Situation brief -- no urgency */
  --border-alert: 3px;              /* Tactical -- moderate urgency */
  --border-critical: 4px;           /* Classified intel -- highest urgency */
  --border-deployment: 2px;         /* Field ops -- stepping down */
}
```

**B. Make zone borders DERIVE from metaphor logic:**
```css
/* CURRENT: Zone 2 has 3px border because it is a standard editorial section break */
.zone-2 {
  border-top: var(--border-medium) solid var(--color-primary);
}

/* FLAGSHIP: Zone 2 has 3px ALERT border because tactical briefings carry urgency */
.zone-2 {
  border-top: var(--border-alert) solid var(--color-primary);
}

/* CURRENT: Zone 3 has no top border -- just a background shift */
.zone-3 {
  /* no border-top */
}

/* FLAGSHIP: Zone 3 has a 4px CRITICAL border because classified intel = highest urgency */
.zone-3 {
  border-top: var(--border-critical) solid var(--color-text);
  /* Note: DIFFERENT color -- classified uses dark, not red. Red = command authority.
     Dark = restricted information. This is the metaphor speaking through border COLOR. */
}
```

**C. Add clearance-level visual encoding (new HTML + CSS):**
```css
/* NEW: Classification badges at zone headers */
.clearance-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 2px 8px;
  margin-left: 12px;
  vertical-align: middle;
}
.clearance-badge--public {
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
}
.clearance-badge--restricted {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}
.clearance-badge--classified {
  background: var(--color-text);
  color: var(--color-background);
  border: 2px solid var(--color-text);
}
```

**D. Font selection driven by metaphor (typography as clearance encoding):**
```css
/* CURRENT: All zones use the same body font-weight progression (400->500->600->400) */
/* FLAGSHIP: Typography shifts encode public vs classified register */

/* Zone 1 (public dispatch): Display serif for directives, body for analysis */
.zone-1 p { font-family: var(--font-body); font-weight: 400; }
.zone-1 blockquote { font-family: var(--font-display); }

/* Zone 3 (classified intel): Monospace intrusions for intel documents,
   body weight at 600 for urgency (already exists -- but now MOTIVATED) */
.zone-3 .callout__body { font-family: var(--font-mono); font-size: 0.9375rem; line-height: 1.6; }
/* ^^ Intelligence reports rendered in mono = "this came from a terminal, not a briefing room" */
```

### 1.3 Fixable by Prompt Alone?

**NO. Requires ARCHITECTURAL change.**

The pipeline currently provides a conventions brief that says "derive a metaphor and make it structural." But "structural" is undefined operationally. The builder derives the metaphor (correctly) but then writes standard editorial CSS and labels it with metaphor words.

**What the pipeline needs:** A worked example in the conventions brief showing: metaphor concept -> CSS parameter derivation -> every value traceable to metaphor logic. This is ~30-40 lines of addition to the conventions brief format, plus a new pipeline step: "metaphor-to-CSS mapping table" that the TC brief must include.

### 1.4 What 4/5 Looks Like

4/5 = Remove ALL text labels (section indicators, CSS comments, callout labels). A fresh-eyes viewer looking at only the visual design can describe the page as having "levels of access" or "zones of increasing restriction/urgency." The border-weight progression (1px -> 3px -> 4px -> 2px), background arc (warm open -> cool guarded -> dark restricted -> warm field), and typography shifts (body -> body+mono -> mono-heavy -> body) all encode the SAME clearance concept through different channels. The metaphor is perceivable from CSS alone.

### 1.5 Root Cause Classification

**KNOWLEDGE failure.** The builder knows how to derive a metaphor from content. The builder does NOT know how to make CSS parameters be DETERMINED BY the metaphor logic rather than coincidentally decorated with metaphor labels.

---

## DIMENSION 2: MULTI-COHERENCE (1.5/5 -> target 4/5)

### 2.1 Specific CSS Properties Causing the Low Score

Only 1 genuine multi-coherence instance exists (Z1->Z2 boundary). At other boundaries, channels shift but in DIFFERENT semantic directions -- they serve separate design functions, not one shared concept.

**Z2->Z3 boundary (output.html lines 546-553):**
```css
.zone-3 {
  background: var(--bg-z3);                         /* Chromatic: delta 15 -- shifts */
  padding: var(--space-8) var(--space-16) var(--space-5); /* Spatial: 40/80 -> 32/64 -- shifts */
  letter-spacing: 0.03em;                            /* Typographic: 0 -> 0.03em -- shifts */
}
```

Three channels shift. But what CONCEPT do they encode together? The CSS comment says "DEEPENING (densest zone)" but:
- Background gets DARKER (encoding: going deeper? more serious? older?)
- Spacing gets TIGHTER (encoding: more urgent? more dense? more cramped?)
- Letter-spacing gets WIDER (encoding: less certain? more spread? more technical?)

The letter-spacing opens while spacing compresses -- these are OPPOSITE directions. If "DEEPENING" means "going deeper," then ALL channels should compress/darken/tighten. But letter-spacing OPENS. This means the channels are not encoding ONE concept -- they are each solving a separate typographic problem.

**Z3->Z4 boundary (lines 680-707):**
```css
/* Checkpoint bar intervenes */
.checkpoint-bar {
  border-top: var(--border-medium) solid var(--color-border);
  background: var(--color-border-subtle);
}
.zone-4 {
  background: var(--bg-z4);     /* Chromatic: delta 20 from Z3 -- LIGHTER */
  padding: var(--space-8) var(--space-20) var(--space-12); /* Spatial: 32/80 -- WIDER horizontally */
  letter-spacing: 0;            /* Typographic: 0.03em -> 0 -- TIGHTER */
}
```

Zone 4 gets lighter (resolving), wider horizontally (breathing), but letter-spacing tightens. The "RESOLVING" direction is encoded by background lightness and horizontal padding, but letter-spacing goes the OTHER way (tightens from Z3's 0.03em to Z4's 0). Again, channels diverge.

### 2.2 CSS Changes That Would Improve the Score

**A. Establish NAMED DIRECTIONS as CSS comments with channel verification:**
```css
/* Z1->Z2 DIRECTION: ENGAGING -- the reader enters the briefing.
   Chromatic:    warmer -> cooler (FEF9F5 -> F0EBE3, delta 18) ✓ ENGAGING
   Structural:   no border -> 3px primary (presence = ENTERING) ✓ ENGAGING
   Spatial:      64/80 -> 40/80 (vertical compresses, reader sits down) ✓ ENGAGING
   Typographic:  wt 400->500 (reader's attention sharpens) ✓ ENGAGING
   4/4 channels aligned. VERIFIED. */

/* Z2->Z3 DIRECTION: RESTRICTING -- clearance escalates, intel territory.
   Chromatic:    F0EBE3 -> DDD4C4 (delta 25, not 15 -- DARKER) ✓ RESTRICTING
   Structural:   3px red -> 4px black (HEAVIER + COLOR SHIFT) ✓ RESTRICTING
   Spatial:      40/80 -> 24/64 (BOTH axes compress -- tighter security) ✓ RESTRICTING
   Typographic:  wt 500->600, LS 0->0.02em (heavier + tracked = classified) ✓ RESTRICTING
   4/4 channels aligned. VERIFIED. */

/* Z3->Z4 DIRECTION: DEPLOYING -- from restricted intel to open field.
   Chromatic:    DDD4C4 -> F5F0E8 (delta 22, LIGHTER -- back outside) ✓ DEPLOYING
   Structural:   4px black -> 2px border (LIGHTER -- field is less restricted) ✓ DEPLOYING
   Spatial:      24/64 -> 40/80 (BOTH axes expand -- open field) ✓ DEPLOYING
   Typographic:  wt 600->400, LS 0.02em->0 (lighter + normal = field report) ✓ DEPLOYING
   4/4 channels aligned. VERIFIED. */
```

**B. Fix the letter-spacing contradiction at Z2->Z3:**
```css
/* CURRENT: letter-spacing at Z3 is 0.03em -- opens while other channels compress */
.zone-3 {
  letter-spacing: 0.02em;  /* Reduced from 0.03em -- still adds density texture
                               but doesn't contradict the RESTRICTING direction */
}
/* The key: letter-spacing at 0.02em adds typographic tension (slightly tracked body text
   reads as "classified document formatting") which SUPPORTS the RESTRICTING concept.
   At 0.03em it was too wide and contradicted spatial compression. */
```

**C. Strengthen the Z3 background delta:**
```css
/* CURRENT: Z3 background is #E8E0D4 (delta 15 from Z2's #F0EBE3) -- barely perceptible */
:root {
  --bg-z3: #DDD4C4;  /* delta 25 from Z2 -- NOW genuinely perceptible as "classified" */
}
```

**D. Add component-level multi-coherence (callouts respond to zone):**
```css
/* CURRENT: callouts styled identically in all zones */
/* FLAGSHIP: callout internal styling varies by zone to encode shared direction */

.zone-1 .callout { padding: 16px 20px; }  /* Public: moderate */
.zone-2 .callout { padding: 14px 18px; }  /* Tactical: slightly compressed */
.zone-3 .callout { padding: 12px 16px; border-left-width: 5px; } /* Classified: compressed + heavier border */
.zone-4 .callout { padding: 16px 20px; }  /* Field: released back to moderate */
```

### 2.3 Fixable by Prompt Alone?

**PARTIALLY.** The CSS value changes above can be specified in a value table (prompt change). But the CONCEPT of "named multi-coherence directions with per-channel verification" requires an architectural change to the conventions brief format -- it needs a section that shows the direction table and requires the builder to verify channel alignment.

### 2.4 What 4/5 Looks Like

4/5 = 3+ zone boundaries where 4+ CSS channels all shift in the SAME named semantic direction, AND component-level styling (callout padding, table cell padding, typography) varies by zone to echo the boundary direction. A fresh auditor can trace each boundary and verify: "yes, everything at this boundary says RESTRICTING."

### 2.5 Root Cause Classification

**PROMPT failure (primary) + ARCHITECTURAL failure (secondary).** The prompt describes multi-coherence abstractly but provides no worked example showing direction naming and per-channel verification. The pipeline produces channel shift instructions without semantic direction.

---

## DIMENSION 3: COMPOSITIONAL INTELLIGENCE (2/5 -> target 4/5)

### 3.1 Specific CSS Properties Causing the Low Score

Mechanisms are MODULAR -- removing any one changes nothing about how others are perceived. The CSS custom properties are organized by TYPE (colors, typography, spacing, borders), not by SEMANTIC CONCEPT.

**Current token organization (output.html lines 14-86):**
```css
:root {
  --color-primary: #E83025;      /* organized by: COLOR */
  --bg-z1: #FEF9F5;             /* organized by: ZONE POSITION */
  --space-8: 32px;               /* organized by: SCALE SIZE */
  --border-medium: 3px;          /* organized by: BORDER WEIGHT */
}
```

No CSS property REFERENCES another CSS property conceptually. `--border-medium: 3px` has no visible relationship to `--bg-z2: #F0EBE3` even though both encode "Zone 2 / tactical level" in the metaphor.

### 3.2 CSS Changes That Would Improve the Score

**A. Add concept-organized token clusters alongside type-organized tokens:**
```css
:root {
  /* === EXISTING TYPE-BASED TOKENS (keep for reuse) === */
  /* ... all current tokens ... */

  /* === CONCEPT-BASED CLUSTERS (NEW -- compositional coupling) === */

  /* OPENING (Zone 1: public dispatch) */
  --opening-bg: var(--bg-z1);
  --opening-padding-v: var(--space-16);
  --opening-padding-h: var(--space-20);
  --opening-weight: 400;
  --opening-border: var(--border-light);
  --opening-tracking: 0;

  /* ENGAGING (Zone 2: tactical briefing) */
  --engaging-bg: var(--bg-z2);
  --engaging-padding-v: var(--space-10);
  --engaging-padding-h: var(--space-20);
  --engaging-weight: 500;
  --engaging-border: var(--border-medium);
  --engaging-tracking: 0;

  /* RESTRICTING (Zone 3: classified intel) */
  --restricting-bg: #DDD4C4;
  --restricting-padding-v: var(--space-6);
  --restricting-padding-h: var(--space-16);
  --restricting-weight: 600;
  --restricting-border: var(--border-heavy);
  --restricting-tracking: 0.02em;

  /* DEPLOYING (Zone 4: field operations) */
  --deploying-bg: var(--bg-z4);
  --deploying-padding-v: var(--space-10);
  --deploying-padding-h: var(--space-20);
  --deploying-weight: 400;
  --deploying-border: 2px;
  --deploying-tracking: 0;
}
```

**B. Use concept tokens in zone rules (making coupling VISIBLE):**
```css
/* CURRENT: zone values chosen independently */
.zone-3 {
  background: var(--bg-z3);
  padding: var(--space-8) var(--space-16) var(--space-5);
}

/* FLAGSHIP: zone values drawn from one concept cluster */
.zone-3 {
  background: var(--restricting-bg);
  padding: var(--restricting-padding-v) var(--restricting-padding-h);
}
.zone-3 p {
  font-weight: var(--restricting-weight);
  letter-spacing: var(--restricting-tracking);
}
/* NOW all Zone 3 CSS is visibly connected to ONE concept.
   Changing --restricting-bg changes the zone, AND the builder can see
   that --restricting-weight and --restricting-tracking must co-vary. */
```

**C. Add inter-mechanism commentary documenting INTERACTIONS:**
```css
/* MECHANISM INTERACTION: Drop cap (#16) RESPONDS to header (#13).
   The drop cap's --color-primary echoes the header's border-bottom primary.
   The drop cap's 3.5em size ANSWERS the header's dark visual weight.
   Removing the header makes the drop cap decorative; with the header,
   the drop cap is a BRIDGE from monumental to conversational register.
   >> Coupling: STRONG (weight-response chain) */
```

### 3.3 Fixable by Prompt Alone?

**NO. Requires ARCHITECTURAL change.**

The pipeline produces a mechanism LIST ("deploy Mechanism #2, #3, #5, #7, #13, #14, #15, #16, #17, #18") which is enumerative. Compositional intelligence requires RELATIONAL instructions ("Mechanism #1's border progression should echo Mechanism #4's spacing progression to encode the same RESTRICTING concept"). The conventions brief format needs a "mechanism interaction map" section.

### 3.4 What 4/5 Looks Like

4/5 = Remove any one of the 3 core mechanisms (zone backgrounds, border-weight progression, spacing compression) and the page's atmosphere detectably degrades. The mechanisms form a "governing cluster" (CCS >= 0.50) where each is load-bearing. CSS custom properties are organized by concept, making the coupling visible and auditable.

### 3.5 Root Cause Classification

**ARCHITECTURAL failure.** The pipeline produces enumerative mechanism lists, not relational mechanism instructions. This is a structural limit of the conventions brief format.

---

## DIMENSION 4: MATERIAL AUTHENTICITY (1.5/5 -> target 4/5)

### 4.1 Specific CSS Properties Causing the Low Score

Every surface is a flat solid color. No texture, no surface differentiation, no edge detail variation.

**Current zone styling (output.html lines 265-267, 371-375, 549-553, 703-707):**
```css
.zone-1 { background: #FEF9F5; }  /* flat solid */
.zone-2 { background: #F0EBE3; }  /* flat solid */
.zone-3 { background: #E8E0D4; }  /* flat solid */
.zone-4 { background: #F5F0E8; }  /* flat solid */
```

All four zones have the same MATERIAL quality: flat, smooth, undifferentiated. The only material moment is the solid offset depth on the core quote (lines 315-324) -- a dark rectangle 4px behind the element. This is the page's single genuine material decision.

### 4.2 CSS Changes That Would Improve the Score

**A. Add subtle surface texture via pseudo-elements (within soul constraints):**

The soul constraints prohibit `box-shadow` and `background` gradients. But `::before`/`::after` pseudo-elements with `repeating-linear-gradient` for micro-patterns are permitted on OVERLAY elements (not on backgrounds).

```css
/* Zone 3 (Classified Intel): subtle crosshatch texture suggesting paper grain */
.zone-3::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.015) 2px,
    rgba(0, 0, 0, 0.015) 3px
  );
  pointer-events: none;
  z-index: 0;
}
.zone-3 {
  position: relative;
}
.zone-3 > * {
  position: relative;
  z-index: 1;
}
/* This gives Zone 3 a barely-visible diagonal grain that reads as
   "classified document paper" -- different MATERIAL from Zone 1's clean cream.
   The texture is sub-conscious: you don't see lines, you FEEL roughness. */
```

**B. Differentiate edge treatments at zone boundaries:**
```css
/* CURRENT: all zone boundaries use the same border treatment */
.zone-2 { border-top: 3px solid var(--color-primary); }
/* Zone 3: no border */
.checkpoint-bar { border-top: 3px solid var(--color-border); }

/* FLAGSHIP: each boundary has distinct edge quality */

/* Z1->Z2: Clean institutional edge -- crisp, authoritative */
.zone-2 {
  border-top: 3px solid var(--color-primary);
}

/* Z2->Z3: Heavy dark edge -- security barrier */
.zone-3 {
  border-top: 4px solid var(--color-text);
  /* Dark, thick -- feels like crossing into a restricted area */
}

/* Z3->Z4: Checkpoint has double-line edge -- security checkpoint feel */
.checkpoint-bar {
  border-top: 3px solid var(--color-text);
  border-bottom: 1px solid var(--color-border);
  /* Two borders of different weights = institutional checkpoint */
}
```

**C. Enlarge the solid offset on the core quote for material presence:**
```css
/* CURRENT: 4px offset */
.core-quote::after {
  top: 4px;
  left: 4px;
}

/* FLAGSHIP: 6px offset -- more material weight */
.core-quote::after {
  top: 6px;
  left: 6px;
}
```

**D. Add material contrast for component backgrounds by zone:**
```css
/* CURRENT: all callouts use the same background */
.callout { background: var(--bg-z1); }

/* FLAGSHIP: callout backgrounds vary by zone to match surface quality */
.zone-2 .callout { background: #FEF9F5; }  /* Same: clean paper */
.zone-3 .callout { background: #F5F0E8; }  /* Warmer: intelligence documents on aged paper */
.zone-4 .callout { background: #FEFCF8; }  /* Lightest: field reports on fresh paper */
```

### 4.3 Fixable by Prompt Alone?

**YES.** Material authenticity requires a ~20-line playbook addition to the conventions brief describing: surface texture vocabulary within soul constraints, edge treatment variation, and material contrast principles. This is a KNOWLEDGE gap -- the pipeline doesn't know material authenticity is specifiable.

### 4.4 What 4/5 Looks Like

4/5 = Each zone FEELS materially different, not just chromatically different. Zone 3 feels rougher, heavier, more industrial than Zone 1. Zone boundaries have distinct edge qualities (clean institutional vs heavy security vs checkpoint). Component backgrounds respond to their zone's material quality. A viewer with eyes half-closed perceives 3+ distinct surface textures.

### 4.5 Root Cause Classification

**KNOWLEDGE failure (primary) + ARCHITECTURAL failure (secondary).** The pipeline has zero representation of material vocabulary. Adding ~20 lines to the conventions brief format opens this dimension.

---

## DIMENSION 5: DETAIL DENSITY (2/5 -> target 4/5)

### 5.1 Specific CSS Properties Causing the Low Score

The page has functional accessibility (skip link, focus-visible, reduced-motion) but no TERMINAL CRAFT -- the micro-decisions that signal "a designer was here."

**Missing CSS features from output.html:**
- No `:hover` on table rows (lines 407-448)
- No `:first-child`/`:last-child` edge treatment on repeating sequences
- No `@media print` styles
- No `::marker` customization
- No `font-variant-numeric: tabular-nums` on data tables
- No `clamp()` fluid typography
- No transition timing variation (only `0.3s ease` on links)
- No `text-indent` on first paragraphs
- No `hyphens: auto` on narrow content

### 5.2 CSS Changes That Would Improve the Score

**A. Table row hover states:**
```css
.data-table tbody tr {
  transition: background-color 0.15s ease;
}
.data-table tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
```

**B. First/last child edge treatments:**
```css
/* First callout in a zone: extra top margin for separation */
.zone-3 .callout:first-of-type {
  margin-top: var(--space-6);
}

/* Last callout in a zone: bottom border instead of margin */
.zone-3 .callout:last-of-type {
  margin-bottom: 0;
  padding-bottom: var(--space-6);
  border-bottom: var(--border-light) solid var(--color-border);
}

/* First role card: stronger top border */
.role-card:first-child {
  border-top-width: var(--border-heavy);
}

/* Last extension card: no bottom margin, closing flourish */
.extension-card:last-child {
  margin-bottom: 0;
  border-bottom: var(--border-light) solid var(--color-border);
}
```

**C. Print styles:**
```css
@media print {
  header, footer { background: white; color: var(--color-text); border-color: var(--color-text); }
  .skip-link { display: none; }
  .zone-1, .zone-2, .zone-3, .zone-4 { padding: 24px 0; }
  a { text-decoration: underline; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; color: var(--color-text-secondary); }
  .roles-grid { grid-template-columns: 1fr 1fr; }
  pre { white-space: pre-wrap; word-wrap: break-word; }
}
```

**D. Tabular numbers on data tables:**
```css
.data-table td {
  font-variant-numeric: tabular-nums;
}
.stage-num {
  font-variant-numeric: tabular-nums;
}
```

**E. Transition timing variation by context:**
```css
:root {
  --transition-fast: 0.15s ease;      /* Interactive elements */
  --transition-standard: 0.3s ease;   /* Links, color changes */
  --transition-slow: 0.45s ease-out;  /* Atmospheric shifts */
}

a { transition: color var(--transition-standard); }
.data-table tbody tr { transition: background-color var(--transition-fast); }
.callout { transition: border-color var(--transition-slow); }
```

**F. Fluid typography with clamp():**
```css
.header-title {
  font-size: clamp(2rem, 5vw, 3rem);
}
h2 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}
h3 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
}
```

**G. First paragraph text-indent:**
```css
.zone-1 p + p,
.zone-4 p + p {
  text-indent: 1.5em;
}
/* Note: only in zones with flowing prose. Not in zones with callouts/lists. */
```

### 5.3 Fixable by Prompt Alone?

**YES.** A ~20-line "terminal craft checklist" in the conventions brief would produce these details. The builder knows how to write hover states, print styles, and fluid typography -- it just isn't asked to.

### 5.4 What 4/5 Looks Like

4/5 = All data tables have hover states and tabular-nums. Print styles exist. Transition timings vary by context (fast for interactive, slow for atmospheric). Fluid typography via `clamp()`. First/last items in repeating sequences have distinct edge treatments. A developer inspecting the CSS encounters 10+ micro-decisions that signal terminal craft awareness.

### 5.5 Root Cause Classification

**MODEL failure (primary) + PROMPT failure (secondary).** Opus produces functional accessibility by default but not terminal craft refinement. The prompt says nothing about terminal craft. Adding a checklist produces the behavior.

---

## DIMENSION 6: TYPOGRAPHIC CRAFT (2/5 -> target 4/5)

### 6.1 Specific CSS Properties Causing the Low Score

Three fonts deployed (Instrument Serif, Inter, JetBrains Mono) but always playing the same notes. No typographic counterpoint, no micro-typography, no weight orchestration within zones.

**Current type system (output.html lines 145-175):**
```css
h1, h2 { font-family: var(--font-display); font-style: italic; }
h3 { font-family: var(--font-body); font-style: italic; }
p { margin-bottom: var(--space-4); max-width: 70ch; }
```

Every heading is Instrument Serif italic. Every paragraph is Inter. Every label is uppercase JetBrains Mono. The three voices never cross-pollinate.

**No weight variation within zones:** All Z2 paragraphs are weight 500 (line 402). All Z3 paragraphs are weight 600 (line 592). Weight is applied by ZONE RULE, not by SEMANTIC INTENT within the zone.

### 6.2 CSS Changes That Would Improve the Score

**A. Typographic counterpoint -- one cross-voice moment:**
```css
/* The mental model quote in Zone 4 (line 861-869) currently uses Instrument Serif.
   Keep it, but ADD a secondary text below in a DIFFERENT voice: */
.mental-model .model-annotation {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-top: var(--space-3);
  text-transform: uppercase;
}
/* The serif quote (philosophical voice) paired with a mono annotation
   (analytical voice) creates COUNTERPOINT -- two registers speaking
   about the same concept. This is the page's single typographic event. */
```

**B. Micro-typography additions:**
```css
/* Tabular numbers for structured data */
.header-stat__value { font-variant-numeric: tabular-nums; }
.stage-num { font-variant-numeric: tabular-nums; }
.upgrade-num { font-variant-numeric: tabular-nums; }

/* Hyphenation in narrow containers (responsive) */
@media (max-width: 768px) {
  p { hyphens: auto; -webkit-hyphens: auto; }
}

/* Optical margin alignment for drop cap */
.dispatch-opening::first-letter {
  margin-left: -0.05em;  /* Optical alignment -- serif capitals overshoot */
}
```

**C. Weight orchestration within zones (semantic, not zone-rule):**
```css
/* CURRENT: All Z3 paragraphs are weight 600 */
/* FLAGSHIP: Weight varies by semantic importance within zone */

.zone-3 p { font-weight: 500; }  /* Base zone weight (reduced from 600) */
.zone-3 .callout__body p { font-weight: 400; }  /* Callout body: supporting detail */
.zone-3 h3 + p { font-weight: 600; }  /* First paragraph after heading: lead-in emphasis */
.zone-3 .callout--threat .callout__body p { font-weight: 600; }  /* Threat: urgency weight */
```

**D. Tracking variation that creates texture:**
```css
/* CURRENT: letter-spacing is a zone-wide rule */
/* FLAGSHIP: tracking varies within zones */

.zone-3 p { letter-spacing: 0.015em; }  /* Base zone tracking */
.zone-3 h3 { letter-spacing: -0.01em; }  /* Headings slightly tighter -- urgency */
.zone-3 .callout__label { letter-spacing: 0.12em; }  /* Labels extra wide -- classification */
/* The CONTRAST between tight headings and wide labels creates typographic TEXTURE */
```

### 6.3 Fixable by Prompt Alone?

**MOSTLY YES.** A "typographic orchestration playbook" (~25 lines) in the conventions brief describing counterpoint, micro-typography features, and weight-within-zones principles would produce these details. The builder knows these CSS features but applies them only when instructed.

### 6.4 What 4/5 Looks Like

4/5 = Three font voices each appear in 2+ contexts (not just headings/body/labels). Weight varies within zones by semantic importance (not by zone rule). At least one typographic counterpoint moment (serif + mono speaking about the same concept). Micro-typography features present: tabular-nums, hyphens, optical margins. A typographer auditing the CSS recognizes "someone who thinks about type" rather than "someone who set up a type scale."

### 6.5 Root Cause Classification

**KNOWLEDGE failure (primary) + MODEL failure (secondary).** The prompt provides the type trinity but not typographic ORCHESTRATION. Opus knows macro typography but not micro typography details.

---

## DIMENSION 7: SCALE HIERARCHY (3/5 -> target 4/5)

### 7.1 Specific CSS Properties Causing the Low Score

Page scale (4/5) and Component scale (4/5) are strong. Section scale (1/5) and Character scale (1/5) are weak or absent.

**Section scale deficit:** Individual zones do NOT have their own intro/body/close structure. Example -- Zone 2 has 3 subsections (evolution stages table, architecture, worker roles) but they read as sequential items with flat h3 headings, not as an internal arc.

```css
/* CURRENT: Zone 2 subsections are flat -- identical h3 + content pattern */
.zone-2 h3 {
  font-size: var(--type-subsection);
  font-weight: 600;
  margin-bottom: var(--space-4);
  margin-top: var(--space-8);
}
/* Every h3 in Zone 2 looks the same. No intro/body/close within the zone. */
```

**Character scale deficit:** No inline styling variation that echoes the page-level pattern. Bold is used for emphasis, code spans use mono, but there is no zone-specific INLINE treatment.

### 7.2 CSS Changes That Would Improve the Score

**A. Section-scale internal arc (Zone 2 as example):**
```css
/* Zone 2 sub-section intro: first h3 after zone heading */
.zone-2 .section-indicator + h2 + p + h3:first-of-type {
  /* This is the OPENER of Zone 2's internal arc */
  padding-top: 0;
  margin-top: var(--space-6);
}

/* Zone 2 architecture subsection: BODY of internal arc */
.architecture-section {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: var(--border-light) solid var(--color-border);
  /* Border treatment signals "new subsection" within the zone */
}

/* Zone 2 roles subsection: CLOSE of internal arc -- denser treatment */
.zone-2 .roles-grid {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: var(--border-medium) solid var(--color-border);
  /* Heavier border than architecture's 1px -- signals culmination */
}
```

**B. Section-scale spacing arc within Zone 3:**
```css
/* Zone 3 subsections should compress through their arc */
.zone-3 h3:first-of-type { margin-top: var(--space-6); }  /* Z3 opener: moderate */
.zone-3 .intel-divider + h3 { margin-top: var(--space-4); }  /* After divider: tighter */
.zone-3 .intel-divider + h3 + p { margin-bottom: var(--space-2); }  /* Even tighter */
/* The internal zone arc echoes the page-level density arc:
   Z3's sub-sections themselves compress as you go deeper. Fractal. */
```

**C. Character-scale inline variation:**
```css
/* Zone-specific inline code styling */
.zone-1 code {
  background: var(--color-border-subtle);
  padding: 2px 6px;
  font-size: var(--type-code);
}
.zone-3 code {
  background: var(--color-border-subtle);
  padding: 1px 4px;              /* Tighter padding in classified zone */
  font-size: 0.8125rem;          /* Slightly smaller -- compressed */
  border: 1px solid var(--color-border);  /* Added border -- more institutional */
}
.zone-4 code {
  background: var(--color-border-subtle);
  padding: 2px 8px;              /* More generous -- field deployment */
  font-size: var(--type-code);
  color: var(--color-primary);   /* Red -- command/deployment color */
}
```

### 7.3 Fixable by Prompt Alone?

**PARTIALLY.** Section-scale arc can be prompted ("each zone should have its own intro/body/close spacing arc"). Character-scale inline variation requires understanding that inline elements should echo the zone's density. This is a MODEL capability question -- Opus understood Page and Component scales natively but needs explicit instruction for Section and Character scales.

### 7.4 What 4/5 Looks Like

4/5 = 4 of 5 scales active with coherent pattern. Page scale: strong 4-zone arc. Component scale: consistent 2-zone DNA. Section scale: each zone has discernible intro-body-close (spacing arc within the zone). Character scale: inline code and emphasis styling varies by zone context.

### 7.5 Root Cause Classification

**MODEL failure.** The prompt described fractal self-similarity. Opus executed it at Page and Component levels but not at Section or Character levels. This requires either more explicit instruction or Opus's native compositional judgment (which defaults to macro over micro).

---

## DIMENSION 8: CHANNEL SHIFTS (3/5 -> target 4/5)

### 8.1 Specific CSS Properties Causing the Low Score

Average 3.3 channels per boundary (needs 4+). Critically, shifts are INDEPENDENT, not COORDINATED.

**Z2->Z3 channel inventory:**
| Channel | Shift | Direction |
|---------|-------|-----------|
| Chromatic | F0EBE3 -> E8E0D4 (delta 15) | Darker |
| Spatial | 40/80 -> 32/64 | Tighter |
| Typographic weight | 500 -> 600 | Heavier |
| Typographic tracking | 0 -> 0.03em | WIDER (contradicts) |
| Structural border | 3px red -> no border | REMOVED (contradicts?) |

Only 3 channels move in the same direction. Tracking opens (wider) while spacing compresses (tighter). The structural border disappears entirely at Z2->Z3, which is a channel LOSS not a channel shift.

### 8.2 CSS Changes That Would Improve the Score

**A. Add structural border at Z2->Z3:**
```css
/* CURRENT: Zone 3 has no border-top */
/* FLAGSHIP: Zone 3 gets a HEAVIER border in a DIFFERENT color */
.zone-3 {
  border-top: var(--border-heavy) solid var(--color-text);
  /* 4px dark border = RESTRICTING. The color shift (red->dark) is itself
     a sub-channel shift: red = command authority, dark = restricted intel */
}
```

**B. Align letter-spacing direction with density direction:**
```css
/* CURRENT: letter-spacing INCREASES at Z2->Z3 (0 -> 0.03em) = opens */
/* FLAGSHIP: letter-spacing DECREASES slightly or stays neutral */
.zone-3 {
  letter-spacing: 0.02em;  /* Still tracked for classified texture,
                               but reduced from 0.03 to be less contradictory */
}
/* OR: remove zone-level tracking entirely and apply only to specific elements */
.zone-3 .callout__label { letter-spacing: 0.12em; }  /* Labels: wide = classified */
.zone-3 p { letter-spacing: normal; }                 /* Body: neutral */
```

**C. Add a 5th channel shift at key boundaries (component density):**
```css
/* CURRENT: callouts have identical spacing in all zones */
/* FLAGSHIP: callout gap varies by zone -- component density channel */

.zone-2 .callout { margin-bottom: var(--space-6); }  /* 24px -- moderate */
.zone-3 .callout { margin-bottom: var(--space-4); }  /* 16px -- compressed */
.zone-4 .callout,
.zone-4 .extension-card { margin-bottom: var(--space-4); }  /* 16px -- field compact */
/* Now component spacing is a 5th channel that shifts at boundaries */
```

**D. Add transition element variation as a channel:**
```css
/* CURRENT: only one checkpoint bar between Z3->Z4 */
/* FLAGSHIP: each boundary has a micro-transition element */

/* Z1->Z2: thin separator -- "entering briefing room" */
/* (the existing 3px primary border serves this role) */

/* Z2->Z3: heavier separator with classification label */
.zone-3::before {
  content: 'CLASSIFIED';
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-align: right;
  color: var(--color-text-secondary);
  padding: var(--space-1) var(--space-4);
  margin-bottom: var(--space-4);
}
```

### 8.3 Fixable by Prompt Alone?

**YES.** Channel shifts are CSS-level decisions. A value table showing all channels at all boundaries (like the one in Section 2.2 above) in the conventions brief would produce 4+ coordinated channels. This is the most directly prompt-addressable dimension.

### 8.4 What 4/5 Looks Like

4/5 = Average 4+ channels shifting at every boundary, ALL in the SAME named semantic direction. The 5 channels are: chromatic (background), structural (border weight + color), spatial (padding), typographic (weight + tracking), and component density (margin/gap between repeating elements).

### 8.5 Root Cause Classification

**KNOWLEDGE failure.** The builder knows how to change CSS properties at boundaries. The builder does not know the "direction-first" approach: name the direction, THEN verify all channels follow it. This is teachable via a worked example.

---

## DIMENSION 9: EMOTIONAL ARC (3.5/5 -> target 4/5)

### 9.1 Specific CSS Properties Causing the Low Score

The 4-zone arc exists and is competent but CONSERVATIVE in amplitude. The padding varies 64->40->32->32px. The background deltas are 18, 15, 20 RGB. These are minimal variations -- barely above the perceptibility threshold.

**Critical gap: no climax.** Zone 3 is described as "DEEPENING DENSEST" but its CSS difference from Zone 2 is subtle (8px less padding, 15 RGB darker, font-weight +100). This does not FEEL like a climax.

**Critical gap: no surprise.** The arc is PREDICTABLE: overview -> details -> concerns -> action. Standard editorial progression.

### 9.2 CSS Changes That Would Improve the Score

**A. Push Zone 3 amplitude harder:**
```css
/* CURRENT: Zone 3 padding */
.zone-3 { padding: var(--space-8) var(--space-16) var(--space-5); }
/* = 32px 64px 20px -- barely tighter than Z2's 40px 80px */

/* FLAGSHIP: Zone 3 is dramatically compressed */
.zone-3 { padding: var(--space-6) var(--space-12); }
/* = 24px 48px -- FEELS tight. Reader notices the compression. */
```

**B. Push Zone 3 background darker:**
```css
/* CURRENT: Z3 = #E8E0D4 (delta 15 from Z2) */
:root {
  --bg-z3: #DDD4C4;  /* delta 25 from Z2 -- genuinely darker. */
}
```

**C. Make Zone 4 release MORE dramatic:**
```css
/* CURRENT: Z4 padding is 32px 80px -- barely different from Z3 */
/* FLAGSHIP: Z4 expands dramatically -- the pressure releases */
.zone-4 { padding: var(--space-12) var(--space-20) var(--space-12); }
/* = 48px 80px 48px -- generous. After Z3's 24px/48px, this is relief. */
```

**D. Add a surprise moment -- full-dark section within body:**
```css
/* The checkpoint bar is currently a thin labeled strip.
   Make it a DRAMATIC dark pause -- like passing through a security gate. */
.checkpoint-bar {
  background: var(--color-text);
  color: var(--color-background);
  padding: var(--space-6) var(--space-8);
  border-top: var(--border-heavy) solid var(--color-primary);
  border-bottom: var(--border-medium) solid var(--color-border);
  font-size: var(--type-code);
}
/* This creates a dark INTERRUPTION within the cream body.
   It is unexpected. It is the security gate between intel and deployment.
   It echoes the header/footer dark zones, creating a THIRD dark moment. */
```

### 9.3 Fixable by Prompt Alone?

**YES.** Amplitude is a CSS-level decision. A conventions brief instruction: "At the densest boundary, push amplitudes: background delta >= 25 RGB, padding <= 24px, border-weight 4px. At the release boundary, restore amplitudes dramatically: padding >= 48px, background delta >= 20 RGB lighter." This is ~5 lines.

### 9.4 What 4/5 Looks Like

4/5 = The scroll creates a FELT experience: opening calm -> structured engagement -> genuine compression (reader notices the tighter spacing and darker background) -> dark checkpoint (surprise -- the page does something unexpected) -> release and resolution (noticeably more spacious). The arc has a discernible climax (Zone 3) and a surprise (dark checkpoint). The reader's emotional state changes during the scroll.

### 9.5 Root Cause Classification

**MODEL failure.** Opus defaults to conservative, safe CSS values. The prompt could explicitly override this with amplitude minimums.

---

## DIMENSION 10: SPATIAL CONFIDENCE (3.5/5 -> target 4/5)

### 10.1 Specific CSS Properties Causing the Low Score

Spacing is intentional and well-proportioned but CONSERVATIVE and UNIFORM horizontally. Everything sits at 960px full width. No width variation, no grand spatial pause, no spatial surprise.

**Current horizontal treatment:** Every content element spans the full `page-container` width (960px). No pull-quotes at narrower width. No full-bleed moments.

**Current padding progression:** 64, 40, 32, 32. LINEAR. No non-linear moment.

### 10.2 CSS Changes That Would Improve the Score

**A. Add one width-variation moment (pull-quote at 80% width):**
```css
/* The mental model quote in Zone 4 (line 844-873) is a natural candidate */
.mental-model {
  max-width: 80%;   /* Narrower than container -- creates width CONTRAST */
  margin-left: auto;
  margin-right: auto;
  /* Centering a narrower element within the 960px container creates
     visible negative space on both sides. This is spatial confidence:
     "this page can afford empty margins." */
}
```

**B. Add one narrow-column moment in Zone 1:**
```css
/* The dispatch opening (line 298-303) could be narrower -- a dispatch
   reads like a field note, not a full-width editorial column */
.dispatch-opening {
  max-width: 55ch;  /* Narrower than the default 70ch -- dispatch column */
  /* The source-meta below it (line 345-363) is full-width.
     CONTRAST: narrow prose above, wide metadata below.
     This demonstrates horizontal rhythm within a single zone. */
}
```

**C. Add one grand spatial pause:**
```css
/* Between Zone 2 and Zone 3 -- the moment before entering classified territory */
.zone-2::after {
  content: '';
  display: block;
  height: var(--space-16);  /* 64px -- the largest explicit pause in the page */
  /* This is NOT a void. It is bounded by Zone 2's bottom content and Zone 3's
     4px dark border. It is confident silence: "take a breath before entering." */
}
/* With Zone 2 bottom padding (80px) + this pause (64px) + Zone 3 border (4px),
   the total gap is ~148px. Measure TOTAL to stay under S-09 limits. Adjust:
   reduce Zone 2 bottom padding to 48px so total = 48+64+4 = 116px < 120px */
.zone-2 { padding-bottom: var(--space-12); }  /* Reduced from 80px to 48px */
```

**D. Add one NON-LINEAR spacing moment:**
```css
/* CURRENT: padding is 64, 40, 32, 32 -- linear descent */
/* FLAGSHIP: insert a wider-than-expected value at the resolution */

.zone-4 { padding: var(--space-12) var(--space-20) var(--space-16); }
/* = 48px 80px 64px. The 64px bottom padding echoes Zone 1's 64px top.
   This is spatial bookending: the page ends with the same generous
   vertical padding it began with. The NON-LINEARITY is: 64->40->24->48/64.
   The dip to 24px (Zone 3) makes the return to 48-64px feel SPACIOUS. */
```

### 10.3 Fixable by Prompt Alone?

**YES.** Width variation and spatial pauses are CSS decisions that can be prompted: "Include at least 1 element at narrower width than container (e.g., pull-quote at max-width: 80%). Include at least 1 grand spatial pause of 60-100px between major zones."

### 10.4 What 4/5 Looks Like

4/5 = The horizontal axis has at least 2 width variations (one narrower, one full-width). At least 1 grand spatial pause exists between zones (bounded on both sides, not a void). The vertical spacing progression includes at least one non-linear moment (wider-than-predicted after a compression). A viewer at 25% zoom sees that the page has spatial rhythm, not just vertical scrolling at fixed width.

### 10.5 Root Cause Classification

**MODEL failure.** Opus's native spatial sense is conservative and regular. The prompt could explicitly instruct spatial asymmetry.

---

## CROSS-DIMENSIONAL REMEDIATION ROADMAP

### Priority 1: CSS-Only Changes (no pipeline change required)

These changes can be applied to the EXISTING output.html to improve scores.

| Dimension | Change | Lines Added | Score Impact |
|-----------|--------|-------------|-------------|
| 8. Channel Shifts | Add Z3 border-top, align tracking, add component density channel | ~20 | 3.0 -> 4.0 |
| 9. Emotional Arc | Push Z3 amplitude, darken checkpoint, widen Z4 release | ~25 | 3.5 -> 4.0 |
| 10. Spatial Confidence | Add width variation, grand pause, non-linear moment | ~20 | 3.5 -> 4.0 |
| **Subtotal** | | ~65 lines | 3 dimensions improved |

### Priority 2: Prompt Enrichment (new playbook sections in conventions brief)

These require adding ~60-80 lines to the conventions brief format.

| Dimension | Playbook Needed | Lines in Brief | Score Impact |
|-----------|----------------|----------------|-------------|
| 5. Detail Density | Terminal craft checklist | ~20 | 2.0 -> 3.5 |
| 6. Typographic Craft | Typographic orchestration guide | ~25 | 2.0 -> 3.5 |
| 4. Material Authenticity | Material vocabulary (textures, edges) | ~20 | 1.5 -> 3.0 |
| **Subtotal** | | ~65 lines in brief | 3 dimensions improved |

### Priority 3: Architectural Pipeline Changes (conventions brief format + builder instructions)

These require changing HOW the builder receives and processes instructions.

| Dimension | Pipeline Change Needed | Effort | Score Impact |
|-----------|----------------------|--------|-------------|
| 1. Pervading Metaphor | Metaphor-to-CSS mapping table in TC brief; worked example | Medium | 2.5 -> 4.0 |
| 2. Multi-coherence | Direction-naming protocol with per-channel verification | Medium | 1.5 -> 4.0 |
| 3. Compositional Intelligence | Mechanism interaction map; concept-based token clusters | High | 2.0 -> 3.5 |
| 7. Scale Hierarchy | Fractal echo instructions for Section + Character scales | Medium | 3.0 -> 4.0 |
| **Subtotal** | | 4 pipeline changes | 4 dimensions improved |

### Projected Score Improvement

| Phase | Avg Score | Dimensions at 4+ |
|-------|-----------|-------------------|
| Current | 2.5/5 | 0/10 |
| After Priority 1 (CSS-only) | 2.9/5 | 3/10 |
| After Priority 2 (prompt enrichment) | 3.2/5 | 3/10 (6 at 3.0+) |
| After Priority 3 (architecture) | 3.7/5 | 7-8/10 |

### The Residual Gap

Even after all 3 priority levels, estimated average is 3.7/5, not 4.0/5. The remaining gap comes from:

1. **Compositional Intelligence (3.5, not 4.0):** Concept-based token clusters are specifiable, but genuine mechanism INTERDEPENDENCE (where removing one changes how another is perceived) requires the builder to COMPOSE, not just IMPLEMENT. This is the dispositional vs procedural recipe boundary.

2. **Material Authenticity (3.0, not 4.0):** Texture via pseudo-elements and edge variation can be prompted, but genuine MATERIAL QUALITY (surfaces that feel different to the touch, not just look different) requires builder judgment about what "classified paper" feels like vs "open briefing room." This is aesthetic judgment, not CSS skill.

3. **Pervading Metaphor (4.0 achievable but fragile):** The metaphor-to-CSS mapping table can produce structural metaphor, but the metaphor must be DISCOVERED from the content, not assigned from a template. If the pipeline assigns "military dispatch" and provides the mapping table, the builder can implement it structurally. But the mapping must be INVENTED by someone who understands both the content and CSS materiality simultaneously. This is currently the TC brief creator's job -- and the quality depends entirely on that creator's compositional imagination.

---

## SUPPRESSOR / KNOWLEDGE GAP / STRUCTURAL LIMIT CLASSIFICATION

| Dimension | Deficit Source | Classification |
|-----------|---------------|----------------|
| 1. Pervading Metaphor | Builder doesn't know HOW to make metaphor structural in CSS | **Knowledge gap** |
| 2. Multi-coherence | Pipeline provides no direction-naming protocol | **Structural pipeline limit** |
| 3. Compositional Intelligence | Pipeline produces mechanism lists, not mechanism relationships | **Structural pipeline limit** |
| 4. Material Authenticity | Pipeline has zero material vocabulary representation | **Knowledge gap** |
| 5. Detail Density | Prompt says nothing about terminal craft | **Suppressor** (omission-type) |
| 6. Typographic Craft | Prompt provides trinity but not orchestration principles | **Knowledge gap** |
| 7. Scale Hierarchy | Model executes macro scales but not micro without instruction | **Suppressor** (model conservatism) |
| 8. Channel Shifts | Builder doesn't know "direction-first" approach | **Knowledge gap** |
| 9. Emotional Arc | Model defaults to conservative amplitudes | **Suppressor** (model conservatism) |
| 10. Spatial Confidence | Model defaults to regular, safe spacing patterns | **Suppressor** (model conservatism) |

**Summary:**
- 4 **Knowledge gaps** (metaphor structure, material vocabulary, typographic orchestration, direction-first channels)
- 4 **Suppressors** (3 model conservatism + 1 prompt omission)
- 2 **Structural pipeline limits** (mechanism list format, no direction protocol)

The highest-leverage interventions address knowledge gaps (adding playbooks) and suppressors (adding amplitude minimums). Structural limits are the hardest to fix but affect the two most critical Flagship dimensions (multi-coherence and compositional intelligence).

---

**END OF REPORT B7**

*10 dimensions analyzed. 3 fixable by CSS alone (channel shifts, emotional arc, spatial confidence). 3 fixable by prompt enrichment (detail density, typographic craft, material authenticity). 4 require pipeline architecture changes (pervading metaphor, multi-coherence, compositional intelligence, scale hierarchy). ~350-450 lines total CSS changes. Projected improvement: 2.5/5 -> 3.7/5. Residual gap (3.7 -> 4.0) requires dispositional recipe and builder compositional judgment that cannot be fully specified. Root causes: 4 knowledge gaps, 4 suppressors, 2 structural pipeline limits.*
