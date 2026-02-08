# OD Granular Adversarial Audit — Identity Brief

**Generated:** 2026-02-07
**Agent:** Traverser
**Method:** Full inline threading header traversal across 25+ source files
**Purpose:** Ground truth for all downstream audit agents — every constraint, every token, every finding

---

## 1. THE 5 SOUL PIECES — Perceptual Truths (Ways of SEEING)

These are not CSS rules. They are ways of perceiving that the CSS enforces. The perceptual truth is primary; the CSS is the mechanism.

| # | Soul Piece | Perceptual Truth | How to Test |
|---|-----------|-----------------|-------------|
| 1 | **Sharp Edges Command Authority** | Rounded corners say "friendly, safe, negotiable." Sharp edges say "this is exact, this is verified, this is the way." The words don't change — the authority does. | Does it feel like a specification sheet or a blog post? |
| 2 | **The Archivist Speaks in Serif** | Serif italic is the voice of accumulated wisdom. Sans-serif is the voice of the present. The Archivist doesn't give tips; they share truths that transcend the current moment. | Does an Essence quote feel like a tweet or a philosophy book? |
| 3 | **Callouts Share Family DNA** | Components in a family must share structural DNA. When a component tries to be "more helpful" by adding zones, it BREAKS FAMILY COHESION. Same structure, different personalities. | Put all callouts side by side. Do they feel like variations of one thing, or like different components? |
| 4 | **Shadows Lie About Depth** | Shadows create FALSE DEPTH. In documentation, nothing should float. Everything is GROUNDED on the same plane. Hierarchy comes from SIZE, COLOR, POSITION — not fake 3D effects. Flat design is HONEST design. | Squint at the page. Do some elements "pop forward"? |
| 5 | **Squares Signal System, Circles Signal Softness** | Squares suggest precision, exactness — like checkboxes in a compliance form. Circles suggest flexibility, approximation. For technical documentation, squares reinforce that this is EXACT procedure. | Do numbered steps feel like "follow exactly" or "roughly do this"? |

**The Soul Test:**
> "Could this component exist in a Bootstrap/Tailwind/Material project without modification?"
> If YES = **FAIL**. The soul is compromised.

---

## 2. THE 6 UNIVERSAL RULES — With Locked CSS Values

These are the implementation backbone of the soul. They are FINAL. Token modifications are soul modifications.

```css
/* Rule 1: Sharp Edges ALWAYS */
border-radius: 0; /* LOCKED — NO EXCEPTIONS */

/* Rule 2: Flat Design ALWAYS */
box-shadow: none; /* LOCKED — NO EXCEPTIONS */

/* Rule 3: Limited Palette */
--color-primary: #E83025;      /* Sanrok red — the ONLY accent */
--color-background: #FEF9F5;   /* Warm cream */
--color-text: #1A1A1A;         /* Near-black */
--color-text-secondary: #666666;
--color-border: #E0D5C5;       /* Warm tan */
--color-border-subtle: #F0EBE3;

/* Rule 4: Typography Hierarchy */
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;

/* Rule 5: Heavy Borders When Bordered */
border: 3px solid var(--color-primary); /* Commit to it */
border-left: 4px solid var(--color-primary); /* Or single-side accent */
/* 1px borders signal uncertainty — FORBIDDEN for accents */

/* Rule 6: Whitespace as Design Element */
padding: 24px 32px;
margin: 32px 0;
line-height: 1.6;
```

---

## 3. PER-OD CONSTRAINTS (from each inline header's MUST HONOR table)

### OD-001: Conversational Structure

| Constraint | Source | Consequence if Violated |
|-----------|--------|------------------------|
| DD-F-006 fractal at 4 scales | DD-006-fractal.html | Exploration INVALID — mandatory for all OD/AD/CD |
| PULSE rhythm (Q=sparse, A=dense) | R3-003 + DD-001-breathing.html | Core hypothesis fails |
| border-radius: 0 everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| box-shadow: none everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation (solid offset OK) |
| Max 2 callouts per section | R5-T4 | Callout cacophony anti-pattern |
| Width variation (TIDAL) | R3-034 + DD-005-rivers.html | Density signal lost |

### OD-002: Narrative Arc

| Constraint | Source | Consequence if Violated |
|-----------|--------|------------------------|
| DD-F-006 fractal at 4 scales | DD-006-fractal.html | Exploration INVALID — mandatory for all OD |
| CRESCENDO (sparse to dense) | R3-004 + DD-002-crescendo.html | Core hypothesis fails |
| border-radius: 0 everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| box-shadow: none everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| Max 2 callouts per section | R5-T4 | Callout cacophony anti-pattern |
| One narrative beat per viewport | R1-003 | Viewport principle violated |

### OD-003: Task-Based

| Constraint | Source | Consequence if Violated |
|-----------|--------|------------------------|
| DD-F-006 fractal at 4 scales | DD-006-fractal.html | Exploration INVALID — mandatory for all OD/AD/CD |
| ISLANDS density (task clusters) | R3-047 + DD-003-islands.html | Core hypothesis fails |
| BOOKENDS (dense-sparse-dense) | Secondary density pattern | Orientation/verification fails |
| border-radius: 0 everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| box-shadow: none everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation (solid offset OK) |
| Max 2 callouts per section | R5-T4 | Callout cacophony anti-pattern |
| 80px minimum between islands | ISLANDS sparse sea requirement | Islands merge, pattern collapses |

### OD-004: Confidence-Based

| Constraint | Source | Consequence if Violated |
|-----------|--------|------------------------|
| DD-F-006 fractal at 4 scales | DD-006-fractal.html | Exploration INVALID — mandatory for all OD/AD/CD |
| GEOLOGICAL strata (4 layers) | DD-F-004 + R1-001 | Core hypothesis fails |
| CRESCENDO density progression | DD-F-002 | Density rhythm absent |
| border-radius: 0 everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| box-shadow: none everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation (solid offset OK) |
| Max 2 callouts per viewport | DD-F-014 / R5-T4 | Callout cacophony anti-pattern |
| Inverse density-confidence | R1-001 | Defining rhythm of OD-004 destroyed |

### OD-005: Spatial/Hub-Spoke

| Constraint | Source | Consequence if Violated |
|-----------|--------|------------------------|
| DD-F-006 fractal at 4 scales | DD-006-fractal.html | Exploration INVALID |
| WAVE oscillation (hub/spoke) | R3-006 + DD-001-breathing.html | Core hypothesis fails |
| ISLANDS isolation | R3-047 + DD-003-islands.html | Spokes bleed into each other |
| border-radius: 0 everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| box-shadow: none everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| Max 2 callouts per section | R5-T4 | Callout cacophony anti-pattern |

### OD-006: Creative/Emergent Synthesis

| Constraint | Source | Consequence if Violated |
|-----------|--------|------------------------|
| DD-F-006 fractal at 4 scales | DD-006-fractal.html | Exploration INVALID — mandatory for all OD |
| MOST fractal of all ODs | OD-006 mandate | Fails as synthesis — cannot be less fractal than predecessors |
| Organization = Density thesis | Emergent discovery | Core thesis unproven — exploration loses purpose |
| border-radius: 0 everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation |
| box-shadow: none everywhere | DESIGN-TOKEN-SUMMARY.md | Soul violation (solid offset OK) |
| Max 2 callouts per section | R5-T4 + DD-F-014 | Callout cacophony anti-pattern |
| Each section = different OD | OD-006 structure mandate | Synthesis incomplete — must demonstrate all 5 |

---

## 4. PER-OD DENSITY PATTERN + DD SOURCE CHAIN + DD FILE PATHS

### OD-001: Conversational

| Attribute | Value |
|-----------|-------|
| **Organization Pattern** | Q&A Dialogue / Conversational |
| **Primary Density** | PULSE (Q=sparse, A=dense alternation) |
| **Secondary Density** | TIDAL/RIVERS (width variation: Q at 60%, A at 100%) |
| **DD Source** | DD-001-breathing.html (PULSE, 33/40), DD-005-rivers.html (TIDAL, 36/40) |
| **Mandatory** | DD-006-fractal.html (FRACTAL meta-pattern, 36/40) |
| **DD Source Paths** | `explorations/density/DD-001-breathing.html`, `explorations/density/DD-005-rivers.html`, `explorations/density/DD-006-fractal.html` |
| **Fractal Compliance** | PAGE: Q(sparse)->A(dense) rhythm; SECTION: intro->detail->summary; COMPONENT: label->body; CHARACTER: comments->code |
| **T1 Sources** | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md |

### OD-002: Narrative Arc

| Attribute | Value |
|-----------|-------|
| **Organization Pattern** | Three-Act Narrative Arc (Exposition -> Rising Action -> Climax -> Resolution) |
| **Primary Density** | CRESCENDO (sparse -> dense progressive build) |
| **Secondary Density** | PULSE (within-act breathing rhythm) |
| **DD Source** | DD-002-gradient.html (CRESCENDO, 35/40), DD-001-breathing.html (PULSE, 33/40) |
| **Mandatory** | DD-006-fractal.html (FRACTAL meta-pattern, 36/40) |
| **DD Source Paths** | `explorations/density/DD-002-gradient.html`, `explorations/density/DD-001-breathing.html`, `explorations/density/DD-006-fractal.html` |
| **Fractal Compliance** | PAGE: Act I(sparse)->Act II(medium)->Act III(dense); SECTION: intro->detail->transition; COMPONENT: label->body; CHARACTER: comments->code |
| **T1 Sources** | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md |
| **OD-001 Lesson Applied** | Org patterns naturally create density; Q&A=PULSE, therefore narrative arc=CRESCENDO |

### OD-003: Task-Based

| Attribute | Value |
|-----------|-------|
| **Organization Pattern** | Discrete Task Clusters / Goal Structure |
| **Primary Density** | ISLANDS (dense task clusters in sparse sea) |
| **Secondary Density** | BOOKENDS (dense orientation front, dense verification back) |
| **DD Source** | DD-003-islands.html (ISLANDS, 32/40) |
| **Mandatory** | DD-006-fractal.html (FRACTAL meta-pattern, 36/40) |
| **DD Source Paths** | `explorations/density/DD-003-islands.html`, `explorations/density/DD-006-fractal.html` |
| **Fractal Compliance** | PAGE: overview(dense)->islands in sea->verification(dense); SECTION: prereqs(dense)->steps(moderate)->checkpoint(dense); COMPONENT: label->body; CHARACTER: comments->code |
| **T1 Sources** | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md |
| **OD Predecessors** | OD-001 (solid offset, scroll animations, callout system), OD-002 (CRESCENDO, act headers, code block styling) |

### OD-004: Confidence-Based

| Attribute | Value |
|-----------|-------|
| **Organization Pattern** | Certainty Stratification (Established -> Probable -> Speculative -> Open) |
| **Primary Density** | GEOLOGICAL (layered strata, 4 layers) |
| **Secondary Density** | CRESCENDO (density increases as confidence decreases) |
| **DD Source** | DD-004-geological.html (GEOLOGICAL, 35/40), DD-002-gradient.html (CRESCENDO, 35/40) |
| **Mandatory** | DD-006-fractal.html (FRACTAL meta-pattern, 36/40) |
| **DD Source Paths** | `explorations/density/DD-004-geological.html`, `explorations/density/DD-002-gradient.html`, `explorations/density/DD-006-fractal.html` |
| **Fractal Compliance** | PAGE: ESTABLISHED(sparse)->PROBABLE(moderate)->SPECULATIVE(dense)->OPEN(densest); SECTION: intro->detail->evidence; COMPONENT: label->body; CHARACTER: confident assertions(sparse)->hedged language(dense) |
| **T1 Sources** | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md, ACCUMULATED-IDENTITY-v1.md |
| **External Research** | OD-004-EXTERNAL-RESEARCH.md (12 resources) |

### OD-005: Spatial/Hub-Spoke

| Attribute | Value |
|-----------|-------|
| **Organization Pattern** | Hub-and-Spoke Map / Spatial Navigation |
| **Primary Density** | WAVE (hub=sparse -> spoke=dense -> hub=sparse return oscillation) |
| **Secondary Density** | ISLANDS (each spoke is a self-contained content island) |
| **DD Source** | DD-003-islands.html (ISLANDS, 32/40), DD-001-breathing.html (WAVE reference, 33/40) |
| **Mandatory** | DD-006-fractal.html (FRACTAL meta-pattern, 36/40) |
| **DD Source Paths** | `explorations/density/DD-003-islands.html`, `explorations/density/DD-001-breathing.html`, `explorations/density/DD-006-fractal.html` |
| **Fractal Compliance** | PAGE: Hub(sparse)->Spoke(dense)->Hub return(sparse); SECTION: intro->content->exit; COMPONENT: territory card label->expanded content; CHARACTER: comments->code |
| **T1 Sources** | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md |
| **OD Predecessors** | OD-001 (callout system, header format), OD-002 (narrative beat layout, act headers) |

### OD-006: Creative/Emergent Synthesis

| Attribute | Value |
|-----------|-------|
| **Organization Pattern** | Meta-Synthesis — all 5 prior OD patterns in one document |
| **Primary Density** | EMERGENT — all 6 DD patterns synthesized through FRACTAL |
| **Secondary Density** | N/A — each section inherits the density of its organizational mode |
| **DD Source** | ALL DD explorations (DD-001 through DD-006) |
| **OD Source** | ALL OD explorations (OD-001 through OD-005) |
| **Mandatory** | DD-006-fractal.html (must be MOST fractal of all ODs) |
| **DD Source Paths** | `explorations/density/DD-001-breathing.html`, `DD-002-gradient.html`, `DD-003-islands.html`, `DD-004-geological.html`, `DD-005-rivers.html`, `DD-006-fractal.html` |
| **Fractal Compliance** | PAGE: 6 sections alternate organizational modes, each generating own density; SECTION: intro->demonstration->reflection; COMPONENT: label->body, dual-lens header->content; CHARACTER: headings->body, comments->code |
| **T1 Sources** | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md, ACCUMULATED-IDENTITY-v1.md |
| **Creative Research** | OD-006-CREATIVE-RESEARCH-FEED.md (12 resources, 9 techniques across 3 tiers) |
| **Emergent Discovery** | OD-F-005: "Organization IS Density" |

---

## 5. ALL ANTI-PATTERNS TO AVOID

### Geometry Anti-Patterns
| Anti-Pattern | What | Why It Fails | Alternative |
|-------------|------|-------------|-------------|
| Rounded Corners | `border-radius: 4px` or greater | Signals "safe/generic" — could be any UI kit | `border-radius: 0` |
| Drop Shadows | `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` | Fake 3D, dishonest, breaks flat design | `box-shadow: none` — use whitespace for separation |
| `filter: drop-shadow(...)` | Any drop-shadow filter | Literally a shadow — fails spirit check | Remove entirely |

### Color Anti-Patterns
| Anti-Pattern | What | Why It Fails | Alternative |
|-------------|------|-------------|-------------|
| Traffic-Light Colors (DD-F-015) | Green (#4A9D6B) adjacent to red (#E83025) | Kindergarten visual language, diminishes both | Separate with 48px+ whitespace or neutral component |
| Gray Backgrounds | `background: #F5F5F5` or similar cool grays | Sterile, institutional, not editorial | Warm cream (#FEF9F5) or semantic tints |
| Off-Palette Colors | Any color not in locked palette | Creates new effective color not in palette | Use only locked token values |
| `rgba(26,26,26,0.5)` text | Technically `--color-text` but with alpha | Creates new effective color not in palette | Use `--color-text-secondary` instead |

### Layout Anti-Patterns
| Anti-Pattern | What | Why It Fails | Alternative |
|-------------|------|-------------|-------------|
| Callout Cacophony (DD-F-014) | 3+ callouts in one viewport | Alarm fatigue — signal lost in noise | Max 1-2 callouts per viewport |
| Code Wall | Long code block with no breaks | Reader loses context, overwhelmed | Buffer with callouts/explanation; max 20 lines per block |
| Same Density Throughout (DD-F-017) | Uniform spacing/density top to bottom | Monotonous, no rhythm, no rest points | Use PULSE, CRESCENDO, BOOKENDS, or WAVE patterns |
| Fighting the Density Pattern (DD-F-018) | Sparse content in dense zone or vice versa | Cognitive dissonance | Let the pattern guide; dense zones stay dense |
| Inconsistent Border Widths (DD-F-016) | Some 2px, some 4px | Breaks family DNA, visual noise | Standardize ALL borders to 4px via CSS variable |

### Typography Anti-Patterns
| Anti-Pattern | What | Why It Fails | Alternative |
|-------------|------|-------------|-------------|
| Sans-Serif for Essence Body | Using Inter for Essence Callout body | Loses reverent, archival quality | Instrument Serif italic |
| Thin Callout Borders | `border-left: 1px` or `2px` | Too subtle, doesn't create visual anchor | 4px minimum |
| Non-Italic h3 | h3 with normal font-style | Breaks editorial hierarchy convention | All h3 should be italic |

### Interaction Anti-Patterns
| Anti-Pattern | What | Why It Fails | Alternative |
|-------------|------|-------------|-------------|
| Hover Reveals for Important Content | Hiding info behind hover | Touch devices excluded, info hidden | Click to expand, or show always |
| Hover Lift Effects | `transform: translateY(-4px)` | Treats content like buttons, fake 3D | No transform — content, not interactive element |

### Component Anti-Patterns
| Anti-Pattern | What | Why It Fails | Alternative |
|-------------|------|-------------|-------------|
| Vertical Table Borders | Cell borders on left/right of columns | Prison bars effect, claustrophobic | Open grid — horizontal rules only |
| Same-Velocity Stacking | SLOW + SLOW or FAST + FAST adjacent | Monotonous, no rhythm | Vary velocity (SLOW -> FAST -> SLOW) |
| Decorative Grid Breaking | Breaking grid with decorative elements | Decoration competes with content | Break with CONTENT, not decoration |

---

## 6. THE LOCKED COLOR PALETTE — Full Table with Hex AND RGB

| Token | Hex | RGB |
|-------|-----|-----|
| `--color-primary` | `#E83025` | `rgb(232, 48, 37)` |
| `--color-background` | `#FEF9F5` | `rgb(254, 249, 245)` |
| `--color-text` | `#1A1A1A` | `rgb(26, 26, 26)` |
| `--color-text-secondary` | `#666666` | `rgb(102, 102, 102)` |
| `--color-border` | `#E0D5C5` | `rgb(224, 213, 197)` |
| `--color-border-subtle` | `#F0EBE3` | `rgb(240, 235, 227)` |
| `--accent-blue` | `#4A90D9` | `rgb(74, 144, 217)` |
| `--accent-green` | `#4A9D6B` | `rgb(74, 157, 107)` |
| `--accent-coral` | `#C97065` | `rgb(201, 112, 101)` |
| `--accent-amber` | `#D97706` | `rgb(217, 119, 6)` |
| `--accent-purple` | `#7C3AED` | `rgb(124, 58, 237)` |
| white | `#FFFFFF` | `rgb(255, 255, 255)` |
| `--color-question-bg` | `#FEF9F5` | `rgb(254, 249, 245)` |
| `--color-answer-bg` | `#FFFFFF` | `rgb(255, 255, 255)` |
| `--color-chapter-bg` | `#FAF5ED` | `rgb(250, 245, 237)` |

**Any color not in this table is a palette violation.**

---

## 7. THE LOCKED TYPE SCALE

```css
:root {
  --text-xs: 0.75rem;      /* 12px — Labels, captions */
  --text-sm: 0.875rem;     /* 14px — Small body, metadata */
  --text-base: 1rem;       /* 16px — Body text */
  --text-lg: 1.125rem;     /* 18px — Large body */
  --text-h4: 1.25rem;      /* 20px — Small headlines */
  --text-h3: 1.5rem;       /* 24px — Section headlines */
  --text-h2: 2rem;         /* 32px — Major headlines */
  --text-h1: 2.5rem;       /* 40px — Page titles */
  --text-display: 3rem;    /* 48px — Hero text */
}
```

**Font Weights:**
| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, code |
| Medium | 500 | Labels, metadata |
| Semibold | 600 | Headers, emphasis |
| Bold | 700 | Strong emphasis (rare) |

**Critical Typography Rules:**
- h3 MUST be italic (Instrument Serif, italic)
- Essence Callout body MUST be Instrument Serif italic
- Callout labels MUST be 10-11px uppercase with 0.1em letter-spacing
- Size jump of 4px+ = zone boundary; 2px = within-zone variation

---

## 8. THE 10-LINE SOUL CHECKLIST

```
SOUL CHECKLIST (non-negotiable):
1. border-radius: 0 on EVERY element including pseudo-elements
2. box-shadow: none on EVERY element
3. No filter: drop-shadow() anywhere
4. No pseudo-element solid offsets creating fake depth (SPIRIT of Soul Piece 4)
5. Colors ONLY from locked palette (see palette table)
6. Typography: Instrument Serif (display/wisdom), Inter (body), JetBrains Mono (code/labels)
7. Borders: 4px left accent OR 3px full — never 1-2px ("signals uncertainty" per Rule 5)
8. Spacing: 8px within / 32px between / 64px chapters (three-level Gestalt)
9. Page container max-width: 860px
10. All callouts: 2-zone (label+body) + 4px left border + color-only differentiation
```

**IMPORTANT NOTE ON ITEM 4 — Solid Offsets:**
The OD explorations deliberately use solid offset pseudo-elements as a neobrutalist depth technique that passes `box-shadow: none` but creates perceptual depth. This is documented as EXT-CREATIVE-001 ("THE SOLID OFFSET") and was approved as a creative enrichment in OD-001 v2. When auditing, solid offsets should be assessed for:
- Do they create the ILLUSION of floating/3D? (If yes, Spirit FAILS even though letter passes)
- Or do they create flat, graphic blocks that add visual weight without depth illusion? (If so, may PASS)
The audit must judge SPIRIT, not just letter.

---

## 9. THE SPIRIT vs LETTER VIOLATIONS TABLE

| What It Is | CSS Check | Spirit Check |
|-----------|-----------|-------------|
| Solid offset pseudo-element | `box-shadow: none` PASSES | Creates perceptual depth — ASSESS case by case |
| `filter: drop-shadow(...)` | `box-shadow: none` PASSES | Literally a shadow — FAILS |
| `border-radius: 0` on element, child has radius | Parent check PASSES | Child has rounded corners — FAILS |
| `rgba(26,26,26,0.5)` text | Technically `--color-text` | Creates new effective color not in palette — FAILS |
| Gradient backgrounds | No explicit anti-gradient rule | Visual complexity where flatness expected — FAILS |
| `outline: 2px solid` with radius on focus | No `outline-radius` token | Creates rounded visual on interaction — ASSESS |
| 4px border-left + 1px border-top/right/bottom | Left accent correct | Other sides "signal uncertainty" — FAILS |
| `transform: translateY(-Npx)` on hover | No box-shadow | Creates fake lift/depth effect — FAILS |
| Instrument Serif in body text | Correct font family | Wrong zone — serif is for display/wisdom zones only — FAILS |
| `text-shadow` | No `box-shadow` | Creates depth on text plane — ASSESS |

---

## 10. PER-OD: ALL EXT-* RESEARCH CITATIONS

### OD-001: Conversational Structure
| Citation ID | Description |
|------------|-------------|
| EXT-CONV-001 | Socratic Progressive Narrowing — broadQ -> narrowQ -> specificQ -> answer |
| EXT-CONV-002 | Value Density Front-Loading — key insight in first sentence |
| EXT-CONV-003 | Three-Level Gestalt Spacing — 8px within / 32px between / 64px chapters |
| EXT-CONV-004 | Background Color Differentiation — Q/A zones visually distinct |
| EXT-CONV-005 | Responsive TIDAL Choreography — 60% desktop -> 100% mobile |
| EXT-CREATIVE-001 | THE SOLID OFFSET — neobrutalist depth, no box-shadow |
| EXT-CREATIVE-002 | THE TYPOGRAPHIC CASCADE — 5-level 1.5x ratio |
| EXT-CREATIVE-003 | THE SCROLL WITNESS — CSS section progress |
| EXT-CREATIVE-004 | THE ARRIVING WISDOM — scroll-triggered staggered reveal |
| EXT-CREATIVE-005 | THE EDITORIAL DROP — serif drop caps |
| EXT-DENSITY-001 | Gestalt Pure Distance Law — grouping fails >1.5x ratio |
| EXT-DENSITY-002 | NNGroup Progressive Disclosure — max 2 levels |
| EXT-DENSITY-003 | Twilio 20-line rule — initial code <20 lines |

### OD-002: Narrative Arc
| Citation ID | Description |
|------------|-------------|
| (none declared) | OD-002 was built without external research enrichment — only R1 findings and DD sources |

### OD-003: Task-Based
| Citation ID | Description |
|------------|-------------|
| EXT-TASK-001 | Task-Oriented Design — each task = discrete island with 4px red left border |
| EXT-TASK-002 | Progressive Disclosure — square markers: solid=complete, outline=current, gray=future |
| EXT-TASK-003 | Hierarchical Task Breakdown — subtasks via vertical connector lines (1px solid) |
| EXT-TASK-004 | Negative Space Typography — 3rem after titles, 6rem between islands |
| EXT-TASK-006 | Multi-Step Forms — completed steps collapse, current step expanded |
| EXT-TASK-009 | WCAG Accessibility — semantic HTML, ARIA landmarks, keyboard focus 3px red outline |
| EXT-TASK-011 | Verification Checkpoints — "You should see" prefix in green-bordered callout |
| EXT-TASK-012 | Error Recovery Islands — "If This Fails" in coral-bordered callout |

### OD-004: Confidence-Based
| Citation ID | Description |
|------------|-------------|
| EXT-CONF (NNG Progressive Disclosure) | Max 4 strata; strong info scent at boundaries |
| EXT-CONF (Confidence Visualization) | Inverse density-confidence relationship |
| EXT-CONF (Agentic Categorical Labels) | Words not percentages: Established/Probable/Speculative/Open |
| EXT-CONF (Gwern Kesselman Vocabulary) | Per-section confidence tags |
| EXT-CONF (Appleton Epistemic Disclosure) | "You Are Reading" orientation markers per stratum |
| EXT-CONF (Diataxis) | Confidence maps to documentation type |
| EXT-CONF (Layered Architecture) | Layer isolation, bounded interpretation zones |
| EXT-CONF (GitBook Adaptive) | Progressive stratum revelation, URL-addressable strata |
| EXT-CONF (AI Agents Progressive Disclosure) | Geological survey header always visible |
| EXT-CONF (NNG Information Scent) | Strong scent at every stratum boundary; progress indicators |
| EXT-CONF (EA Forum Epistemic) | Evidence DNA per stratum; crux transparency |
| EXT-CONF (Stripe Docs) | Confidence-level switcher control |

### OD-005: Spatial/Hub-Spoke
| Citation ID | Description |
|------------|-------------|
| EXT-SPAT-001 | Hub-and-Spoke ISLANDS — square tiles in CSS Grid |
| EXT-SPAT-002 | Breadcrumbs as WAVE Trigger — triangle separators |
| EXT-SPAT-003 | 7-Column Magazine Grid — content + sidebar layout |
| EXT-SPAT-004 | Named Grid Areas — semantic zones |
| EXT-SPAT-005 | Cartographic Hierarchy — figure-ground, type hierarchy |
| EXT-SPAT-008 | Screen Reader Accessibility — skip links, ARIA landmarks |
| EXT-SPAT-009 | Alternation for Rhythm — content block -> gap -> content block |
| EXT-SPAT-010 | Islands Architecture — 95% static, 5% interactive |
| EXT-SPAT-011 | Natural Reading Rhythms — 40-60 word paragraphs |
| EXT-SPAT-012 | ECS Modular Entities — each spoke = modular entity |

### OD-006: Creative/Emergent Synthesis
| Citation ID | Description |
|------------|-------------|
| EXT-CREATIVE-001 | THE SOLID OFFSET — neobrutalist depth via pseudo-elements |
| EXT-CREATIVE-002 | THE TYPOGRAPHIC HIERARCHY CASCADE — 5-level 1.5x system |
| EXT-CREATIVE-003 | THE SCROLL WITNESS — CSS-only section progress tracking |
| EXT-CREATIVE-004 | THE ARRIVING WISDOM — scroll-triggered staggered reveal |
| EXT-CREATIVE-005 | THE EDITORIAL DROP — serif drop caps at section openings |
| EXT-CREATIVE-006 | THE SEMANTIC BRIDGE — hover concept -> highlight code |
| EXT-CREATIVE-007 | THE DUAL LENS — Why/How toggle between serif/monospace |
| EXT-CREATIVE-008 | THE COLLAPSING HEADER — sticky headers that shrink on scroll |
| EXT-CREATIVE-009 | THE VISUAL INDEX — specimen-sheet grid overview |

**Total EXT-* citations across all ODs: 55**

---

## 11. PER-OD: DD SOURCE FILE PATHS (for Comparative Reference agent)

### Full DD Source Paths

| DD File | Full Path | Score | Pattern |
|---------|-----------|-------|---------|
| DD-001-breathing.html | `docs-spa/app/showcase/explorations/density/DD-001-breathing.html` | 33/40 | PULSE |
| DD-002-gradient.html | `docs-spa/app/showcase/explorations/density/DD-002-gradient.html` | 35/40 | CRESCENDO |
| DD-003-islands.html | `docs-spa/app/showcase/explorations/density/DD-003-islands.html` | 32/40 | ISLANDS |
| DD-004-layers.html | `docs-spa/app/showcase/explorations/density/DD-004-layers.html` | 35/40 | GEOLOGICAL |
| DD-005-rivers.html | `docs-spa/app/showcase/explorations/density/DD-005-rivers.html` | 36/40 | TIDAL |
| DD-006-fractal.html | `docs-spa/app/showcase/explorations/density/DD-006-fractal.html` | 36/40 | FRACTAL (META) |

### OD-to-DD Mapping

| OD | Primary DD Source | Secondary DD Source | Mandatory DD |
|----|-------------------|---------------------|-------------|
| OD-001 | DD-001 (PULSE), DD-005 (TIDAL) | — | DD-006 (FRACTAL) |
| OD-002 | DD-002 (CRESCENDO) | DD-001 (PULSE) | DD-006 (FRACTAL) |
| OD-003 | DD-003 (ISLANDS) | — | DD-006 (FRACTAL) |
| OD-004 | DD-004 (GEOLOGICAL) | DD-002 (CRESCENDO) | DD-006 (FRACTAL) |
| OD-005 | DD-003 (ISLANDS) | DD-001 (WAVE ref) | DD-006 (FRACTAL) |
| OD-006 | ALL DD-001 through DD-006 | — | DD-006 (FRACTAL, MOST fractal) |

### T1 Source Paths (upstream of all DD files)

| T1 File | Full Path |
|---------|-----------|
| DESIGN-TOKEN-SUMMARY.md | `design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` |
| MASTER-SOUL-SYNTHESIS.md | `design-extraction/component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md` |

### OD File Paths

| OD File | Full Path |
|---------|-----------|
| OD-001-conversational.html | `docs-spa/app/showcase/explorations/organizational/OD-001-conversational.html` |
| OD-002-narrative.html | `docs-spa/app/showcase/explorations/organizational/OD-002-narrative.html` |
| OD-003-task-based.html | `docs-spa/app/showcase/explorations/organizational/OD-003-task-based.html` |
| OD-004-confidence.html | `docs-spa/app/showcase/explorations/organizational/OD-004-confidence.html` |
| OD-005-spatial.html | `docs-spa/app/showcase/explorations/organizational/OD-005-spatial.html` |
| OD-006-creative.html | `docs-spa/app/showcase/explorations/organizational/OD-006-creative.html` |

---

## ABSORPTION PROTOCOL STEP 4 — Identity Statements

**OD-001** exists because it tests whether Q&A conversational structure naturally creates PULSE density rhythm. It was built on DD-005-rivers (TIDAL width variation, 36/40), DD-001-breathing (PULSE alternation, 33/40), and DD-006-fractal (mandatory fractal meta-pattern). These sources established that density can be created through width variation, that alternating dense/sparse breathing creates rhythm, and that self-similarity across 4 scales creates coherence. I must honor DD-F-006 fractal at 4 scales, PULSE rhythm, TIDAL width variation, border-radius: 0, box-shadow: none, and max 2 callouts per section because violating them would invalidate the exploration, break the soul, or create anti-pattern violations.

**OD-002** exists because it tests whether a three-act narrative arc creates natural CRESCENDO density. It was built on DD-002-gradient (CRESCENDO, 35/40) and DD-001-breathing (act-level PULSE breathing). These sources established that sparse-to-dense progressive build works for onboarding and that breathing rhythm can work within acts. I must honor CRESCENDO directionality, one narrative beat per viewport, and all soul constraints because violating them would destroy the sparse-to-dense hypothesis and break soul compliance.

**OD-003** exists because it tests whether discrete task clusters create natural ISLANDS density. It was built on DD-003-islands (ISLANDS, 32/40) which established that isolated high-density clusters in low-density ocean work for reference/task content, and that surrounding calm amplifies perceived density. I must honor ISLANDS isolation (80px minimum between islands), BOOKENDS secondary pattern, and all soul constraints because violating them would merge the islands and destroy the pattern.

**OD-004** exists because it tests whether confidence stratification creates natural GEOLOGICAL density where density inversely correlates with certainty. It was built on DD-004-geological (GEOLOGICAL, 35/40) and DD-002-gradient (CRESCENDO, 35/40) plus 12 external research sources. These established layered depth models with stratum boundaries, and that progressive density increase works for transitions between certainty levels. I must honor 4 geological strata, inverse density-confidence correlation, and all soul constraints because violating them would destroy the defining rhythm of the exploration.

**OD-005** exists because it tests whether hub-and-spoke spatial organization creates natural WAVE density oscillation. It was built on DD-003-islands (ISLANDS, 32/40) for spoke isolation and DD-001-breathing for oscillating rhythm. These established that self-contained content blocks create islands and that breathing creates wave-like oscillation. I must honor WAVE oscillation (hub/spoke), ISLANDS isolation between spokes, and all soul constraints because violating them would cause spokes to bleed into each other and destroy the spatial metaphor.

**OD-006** exists because it is the synthesis of the entire OD stage — it discovers that organization IS density (OD-F-005). It was built on ALL DD explorations (DD-001 through DD-006) and ALL OD explorations (OD-001 through OD-005). These established all 6 density patterns, all 5 organizational patterns, and the key insight that each organizational mode automatically generates its paired density pattern. I must honor being the MOST fractal of all ODs, demonstrating all 5 organizational patterns, and proving that organization and density are the same phenomenon observed from two perspectives. Violating this would leave the core thesis unproven and fail the synthesis role that parallels DD-006's fractal discovery.

---

## COMPACTION-SAFE SUMMARY (read this if full output was compressed)
- Agent: Traverser
- Files read: 25+ (ACCUMULATED-IDENTITY-v1.md, geometry.md, registry.md, density-patterns.md, typography.md, all 6 OD headers, all 6 DD headers, multiple CLAUDE.md navigation files)
- Identity sections produced: 11
- Per-OD constraint tables: 6
- EXT-* citations cataloged: 55
- DD source paths: 6 DD files + 2 T1 files + 6 OD files = 14
- Status: COMPLETE
