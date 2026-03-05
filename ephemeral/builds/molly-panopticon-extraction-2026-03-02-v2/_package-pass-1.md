# Research Package — Pass 1: FOUNDATIONS
## For Builder Pass 1 (STRUCTURE)

You are building the initial HTML skeleton for Molly Cantillon's Personal Panopticon.
This package establishes boundaries, creative direction, mechanisms, and compositional
questions. READ Section 9 (Consumption Protocol) to understand the optimal absorption
sequence before you begin.

---

## 0. SOUL CHECKLIST (VERIFY BEFORE AND AFTER BUILD)

```
[ ] border-radius: 0 on every element and pseudo-element (observatory instruments have machined edges)
[ ] box-shadow: none on every element (flat surfaces — honest about depth)
[ ] No filter: drop-shadow() anywhere
[ ] No CSS gradients (linear-gradient, radial-gradient) — solid zone backgrounds only
[ ] No rgba() with alpha < 1.0 on any visual element background — opacity === 1.0
[ ] No transform: translateY() on hover (editorial content, not interactive cards)
[ ] No CSS animations implying physical object movement (ANTI-PHYSICAL identity)
[ ] Locked palette only: #E83025 (primary red), #1A1A1A (text/dark zones), #FEF9F5 (warm cream bg), #FFFFFF (dense zones), #FAF5ED (breathing zones), #E0D5C5 (borders), #F0EBE3 (subtle borders), #666666 (secondary text)
[ ] Callout accent colors from locked set only: blue #4A90D9, green #4A9D6B, coral #C97065, amber #D97706, purple #7C3AED
[ ] Font trinity: Instrument Serif (display/headings/philosophical voice), Inter (body), JetBrains Mono (code/meta)
[ ] Spacing from 4px base scale: 4/8/12/16/20/24/32/40/48/64/80px only
[ ] Max 2 callouts per viewport section (~800px vertical span)
[ ] Container max-width: 960px
[ ] No cool grays (#F5F5F5, #E0E0E0) — warm earth tones only
[ ] No pure black #000000 as page background (components may use #FFFFFF for dense zones)
[ ] No hover lift effects — editorial, not interactive
[ ] No vertical table borders — horizontal rules only
[ ] 3-category borders ONLY: 1px (separator/data), 3px (structural), 4px (semantic/callout). ZERO 2px.
[ ] Footer present with 3px border-top — visual terminus (no trailing void)
[ ] Dark header: #1A1A1A background, cream text, Instrument Serif title, 3px red border-bottom
```

---

## 1. BUILD CONTEXT

**Metaphor:** The Self-Directed Observatory — eight survey instruments pointed at eight sectors of the observer's own life, the panopticon's watchtower inverted from confinement to sovereignty. The dome slit opens not to the cosmos but to the self.

**Emotional Arc:** The reader arrives at the observatory at dusk. The opening philosophy delivers vertigo — the "violent gap" of seeing yourself clearly for the first time. The content then drops into analytical calm as the reader enters the instrument floor (8-domain architecture, code blocks, isolation principles). At approximately 60-65% scroll depth, the philosophical turn arrives: Goodhart's warning, self-imprisonment, the Anthropic trade-off — maximum tension between the Panopticon's power and its dangers. Resolution is quiet, not triumphant. The reader steps outside at dawn and sees the sky with new eyes. The Panopticon is a tool. Tools are not prisons unless you forget you can leave.

**Content → Zone Map:**
1. Part I (Philosophy of Self-Legibility) → Zone 1: Threshold — vertigo, empowerment, the "violent gap" quote
2. Parts II-IV (Architecture, Isolation, Implementation) → Zone 2: Instrument Floor — 8-domain taxonomy, code blocks, structural precision
3. Part V (Production Results) → Zone 3: Observation Log — data displayed, evidence laid out
4. Parts VI-VII (Philosophy/Warnings, Technical Critique) → Zone 4: Observer's Journal — philosophical turn, Goodhart, the meta-level
5. Parts VIII-XII (CLAUDE.md examples, Build Guide, Extensions) → Zone 5: Survey Manual — dense reference, code-heavy, practical handbook
6. Parts XIII-XVII (Quotes, Synthesis, Connections) → Zone 6: Night Sky — closing constellation, bright points, quiet resolution

**Spatial Direction:** The page descends through density strata — from the wide philosophical surface through compressed technical bedrock, then resurfaces for philosophical reflection before descending again into reference density, finally releasing into sparse closing constellation. The spatial arc is vertical with a WAVE oscillation: sparse → dense → moderate → breathing → compressed → release.

**Zone Architecture Overview** (condensed from Section 4 — you NEED this to create zones correctly):
- Zone count: 6 zones
- Density progression: SPARSE → DENSE → MODERATE → BREATHING → COMPRESSED → RELEASE
- ASCII density diagram:
```
Zone 1 (Threshold):      ····              [SPARSE — 64-80px, philosophical invitation]
Zone 2 (Instruments):    ····########      [DENSE — 40-48px, 8-domain grid + code]
Zone 3 (Observation):    ····####          [MODERATE — 48px, evidence display]
Zone 4 (Journal):        ····              [BREATHING — 56-64px, philosophical turn]
Zone 5 (Manual):         ############      [COMPRESSED — 32-40px, reference density]
Zone 6 (Night Sky):      ····              [RELEASE — 64-80px, closing constellation]
```
- Background arc: #FEF9F5 (Z1) → #FFFFFF (Z2) → #FAF5ED (Z3) → #FEF9F5 (Z4) → #FFFFFF (Z5) → #FEF9F5 through #FAF5ED (Z6)
- Key spacing: Inter-zone transitions need 48px+ breathing gap with visual signal (background shift + spacing change)
- Type arc: Instrument Serif (Z1 display) → Inter + JetBrains Mono (Z2-Z3) → Instrument Serif returns (Z4 philosophical) → Inter + JetBrains Mono (Z5 reference) → Instrument Serif final word (Z6 quotes)

---

## 2. MECHANISM SELECTIONS

### 2.1 Fractal Self-Similarity at 5 Scales [NOVEL]

**Selected because:** The observatory metaphor demands the same structural principle — isolated instruments correlated into synthesis — echoing at every zoom level. The content has natural self-similarity: zone-level sparse/dense alternation mirrors section-level paragraph rhythm, which mirrors component-level label/body density, which mirrors character-level font-register switching. The TC brief explicitly calls for this: "the observation principle should echo at page level, section level, and component level."
**Finding basis:** R3-023 (HIGH), DD-F-006 → OD (all 6) → AD-F-027 → AD-F-028 (ELEVATED, 4-stage chain, highest confidence in system). Bounded at 5 scales — no 6th exists.
**CSS implementation:**
```css
/* PACKAGE S2-M01: Fractal self-similarity — 5-scale density rhythm */

/* Scale 1 — Navigation: zone landmarks echo page rhythm */
nav .zone-link--sparse { letter-spacing: 0.02em; }
nav .zone-link--dense { letter-spacing: -0.01em; }

/* Scale 2 — Page: zone padding alternates sparse/dense */
.zone--threshold { padding: 64px 0; }     /* sparse */
.zone--instruments { padding: 40px 0; }   /* dense */
.zone--observation { padding: 48px 0; }   /* moderate */
.zone--journal { padding: 56px 0; }       /* breathing */
.zone--manual { padding: 32px 0; }        /* compressed */
.zone--nightsky { padding: 64px 0; }      /* release */

/* Scale 3 — Section: within-zone intro/detail/summary rhythm */
.section__intro { margin-bottom: 32px; }  /* sparse opening */
.section__detail { margin-bottom: 16px; } /* dense middle */

/* Scale 4 — Component: code blocks tight, blockquotes breathing */
pre { padding: 16px; }          /* dense — instrument specifications */
blockquote { padding: 24px; }   /* sparse — eyepiece moments */

/* Scale 5 — Character: font registers as density */
/* Instrument Serif = sparse/philosophical, Inter = moderate/narrative, JetBrains Mono = dense/code */
```
**Expected visual evidence:** At 1440px, squint test reveals breathing rhythm at page scale AND section scale. Zoom to 150% — the same sparse/dense alternation appears within individual components.
**Zone deployment:** ALL zones — this is the page's structural backbone.

### 2.2 PULSE Density Rhythm [NOVEL]

**Selected because:** The Panopticon content naturally alternates between philosophical prose (sparse, slow) and technical implementation (dense, fast). Zone 1 philosophy (LOW) → Zone 2 architecture (HIGH) → Zone 3 results (MEDIUM) → Zone 4 philosophy (LOW) → Zone 5 code (HIGH) → Zone 6 quotes (LOW). The TC brief's 6-zone architecture IS a PULSE score. The Z-sweep cycle IS one PULSE beat (AD-F-002 equivalence).
**Finding basis:** R3-003 (HIGH), DD-F-001 → OD-F-003 → AD-F-002 (ELEVATED, 3-stage chain). Q&A structure in Zone 4 IS PULSE — questions sparse, answers dense.
**CSS implementation:**
```css
/* PACKAGE S2-M02: PULSE rhythm — alternating density zones */
.zone--threshold { --zone-pace: 80px; line-height: 1.8; }    /* LOW — philosopher breathes */
.zone--instruments { --zone-pace: 40px; line-height: 1.6; }  /* HIGH — instruments precise */
.zone--observation { --zone-pace: 48px; line-height: 1.7; }  /* MEDIUM — evidence moderate */
.zone--journal { --zone-pace: 64px; line-height: 1.8; }      /* LOW — philosopher returns */
.zone--manual { --zone-pace: 32px; line-height: 1.5; }       /* HIGH — reference tight */
.zone--nightsky { --zone-pace: 80px; line-height: 1.8; }     /* LOW — release */
```
**Expected visual evidence:** Scrolling the full page produces a felt rhythm — not monotonous, not erratic. Breathing zones visibly exhale before dense zones compress.
**Zone deployment:** All zones — PULSE is the macro-level density oscillation.

### 2.3 Border-Weight Gradient as Epistemic Encoding [NOVEL]

**Selected because:** The Panopticon content has a graduated epistemic landscape: established knowledge (Unix tools, directory isolation — decades of production use), demonstrated practices ($2000 subscriptions, autonomous support — proven but recent), and philosophical speculation (Goodhart, self-imprisonment — genuinely uncertain). Border weight encodes HOW CONFIDENT the reader should be without announcing it. Three independent case studies (DD-006, OD-004, DD-004) converge on this mechanism — strongest cross-case-study signal.
**Finding basis:** OD-004 confidence encoding (HIGH affinity case study), AD-F-014 (border-weight gradient = geological encoding), S4 border system (3-category: 4px/3px/1px, 2px BANNED).
**CSS implementation:**
```css
/* PACKAGE S2-M03: Border-weight gradient — epistemic confidence encoding */
/* Source: OD-004 confidence + AD-F-014 border-weight gradient */

.observation--established {
  border-left: 4px solid var(--color-text);
  /* Maximum weight = maximum epistemic weight.
     Unix tools, directory isolation, cron — decades of production use. */
}

.observation--demonstrated {
  border-left: 3px solid var(--color-text);
  /* 75% weight = proven but recent. The $2000 discovery,
     the autonomous support — verified, but one practitioner's experience. */
}

.observation--philosophical {
  border-left: 1px solid var(--color-border);
  /* Minimum weight = observer's journal. Goodhart's warning,
     self-imprisonment — important questions, genuinely unresolved. */
}
```
**Expected visual evidence:** Architecture sections (Zone 2) feel structurally heavy — 4px borders are load-bearing walls. Philosophical sections (Zone 4) feel lighter — 1px borders are delicate optical signals. The weight difference registers subconsciously.
**Zone deployment:** Zone 2 (4px for 8-domain panels), Zone 3 (3px for production data), Zone 4 (1px for philosophical warnings), Zone 6 (1px for closing quotes).

### 2.4 Bento Grid for 8-Domain Instrument Floor [STANDARD]

**Selected because:** The 8-domain architecture is the content's structural centerpiece. The TC brief's Creative Waypoint 2 explicitly calls for grid treatment: "These are not 8 bullet points in a list. They are 8 simultaneous survey stations." Opposition 3 (Parallel Simultaneity vs Linear Scroll) demands that 8 domains feel PRESENT AT ONCE. The bento grid solves this.
**Finding basis:** R2-004 (HIGH), R4-005 (HIGH — varied cell sizes signal importance), DD-003 Islands (HIGH affinity case study — self-contained units with isolation whitespace).
**CSS implementation:**
```css
/* PACKAGE S2-M04: Bento grid — 8 simultaneous survey instruments */
.instrument-floor {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px; /* explicit isolation — instruments don't share walls */
  max-width: 960px;
  margin: 0 auto;
}

.instrument-panel {
  border-left: 4px solid var(--color-text);
  padding: 20px;
  /* Each panel IS a self-contained instrument */
}

/* At 768px: collapse to single column — reader examines one at a time */
@media (max-width: 768px) {
  .instrument-floor { grid-template-columns: 1fr; }
}
```
**Expected visual evidence:** The 8 domains feel PRESENT AT ONCE even in a linear scroll. Each panel has distinct internal density. The grid reads as "8 simultaneous instruments" not "8 items in a list."
**Zone deployment:** Zone 2 exclusively.

### 2.5 Typography as Three Voices [NOVEL]

**Selected because:** The content has three distinct voices — philosopher (Cantillon as essayist), architect (8-domain taxonomy, isolation principles), practitioner (bash scripts, cron jobs). The observatory metaphor maps these to "three wavelengths of light captured by the same telescope." Typography IS the structural hierarchy — no shadows, no gradients, no decoration. Font-register switching signals WHO IS SPEAKING, not just what font is rendering.
**Finding basis:** R1-005 (HIGH — typography-first hierarchy), R5-H2 (HIGH — contrast creates harmony), COMP-F-002 (serif italic = wisdom voice). TC brief type arc specifies the progression.
**CSS implementation:**
```css
/* PACKAGE S2-M05: Typography as three observatory voices */

/* Philosopher's voice — the essayist, the observer */
.voice--philosopher {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  line-height: 1.8;
  /* Appears: Zone 1 thesis, Zone 4 key passages, Zone 6 closing quotes */
}

/* Architect's voice — the engineer, the builder */
.voice--architect {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  /* Appears: Zone 2 architecture, Zone 3 data, Zone 5 build guide */
}

/* Practitioner's voice — the machine, the instrument */
.voice--practitioner {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  /* Appears: code blocks in Zones 2, 5 — brass fittings on a telescope */
}
```
**Expected visual evidence:** When Instrument Serif appears in Zone 4, it feels like a different person entered the room. When JetBrains Mono appears, the room becomes a workshop. Remove all color — the voice changes are still perceptible.
**Zone deployment:** Zone 1 + 4 + 6 (philosopher), Zone 2 + 3 + 5 (architect), Zone 2 + 5 code blocks (practitioner).

### 2.6 Density Contrast at Key Emotional Moments [NOVEL]

**Selected because:** The content's most powerful moments — the "violent gap" quote and the Goodhart warning — achieve impact through what PRECEDES them. Sparse philosophy before the dense $2000 revelation makes the mundane detail punch through. Compressed technical sections before the expansive Goodhart reflection make the philosophical space feel like an exhale. The TC brief's Creative Waypoints 1 and 4 both require compositional investment at these moments.
**Finding basis:** R3-029 (HIGH — density contrast/relative perception), R4-012 (HIGH — breaking established rhythm for impact), cross-reference 3 (emotional impact through density contrast).
**CSS implementation:**
```css
/* PACKAGE S2-M06: Density contrast — emotional peaks through juxtaposition */

/* The "violent gap" quote — rhythm break in Zone 1 */
.waypoint--violent-gap {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 1.4rem;
  padding: 56px 0;
  text-align: center;
  max-width: 100%;
  /* The surrounding space is pressurized — the reader feels the gap */
}

/* Goodhart warning — inversion motif in Zone 4 */
.waypoint--inversion {
  background: #1A1A1A;
  color: #FEF9F5;
  padding: 64px 48px;
  /* Dark on light — the content looks at the READER.
     The observer has been looking AT the instruments;
     now the instruments look back. */
}
```
**Expected visual evidence:** Two moments in the page feel distinctly different from everything else. The "violent gap" quote stops the scroll. The Goodhart section feels like stepping into a different room.
**Zone deployment:** Zone 1 (violent gap waypoint), Zone 4 (inversion motif for Goodhart).

### 2.7 CRESCENDO Compression Across Zones [STANDARD]

**Selected because:** The page has a natural sparse-to-dense arc across its first 5 zones: Zone 1 (wide philosophical threshold, 64-80px) → Zone 2 (compressed instrument floor, 40-48px) → Zone 5 (tightest reference density, 32-40px). The dramatic break at Zone 4 (~60% scroll) momentarily opens the compression before the final tightening — tension leads density (AD-F-005).
**Finding basis:** DD-F-002 → OD-F-009/010 → AD-F-006 (ELEVATED, 3-stage chain). Typography compression mirrors density: Act I at 64px → Act III at 32px.
**CSS implementation:**
```css
/* PACKAGE S2-M07: CRESCENDO — progressive spacing compression */
/* Inter-zone spacing compresses while within-zone element spacing stays constant */
.zone--threshold h2 { margin-bottom: 32px; }       /* wide — establishing */
.zone--instruments h2 { margin-bottom: 24px; }     /* tightening */
.zone--observation h2 { margin-bottom: 24px; }     /* moderate */
.zone--journal h2 { margin-bottom: 32px; }         /* BREAK — breathing return */
.zone--manual h2 { margin-bottom: 16px; }          /* compressed — reference */
.zone--nightsky h2 { margin-bottom: 32px; }        /* release */
```
**Expected visual evidence:** Scrolling from Zone 1 to Zone 5, spacing progressively tightens. Zone 4 is the deliberate exception — a breathing break before the final compression.
**Zone deployment:** All zones — CRESCENDO operates as the macro-level spacing arc.

---

## 9. CONSUMPTION PROTOCOL

READ this package in this order. Each step builds on the previous:

1. **READ** Section 0 (Soul Checklist) — Establish hard boundaries. These are physics.
   The observatory has machined edges, flat surfaces, warm materials. Internalize what is IMPOSSIBLE.
2. **INTERNALIZE** Section 1 (Build Context) — Absorb the observatory metaphor. Let it shape
   perception BEFORE you see mechanisms. Compose FROM conviction, not FROM tools. Eight survey
   instruments, the dome slit opening to the self, three voices in the same telescope.
3. **STUDY** Section 2 (Mechanisms) — Each was selected FOR this content. Read the rationale
   column. Understand WHY fractal self-similarity serves THIS observatory, not just what it is.
4. **EXPLORE** Section 10 (Compositional Questions) — These are invitations that generate CSS
   decisions you would not make from mechanisms alone. Select 2-3 to explore during build.
5. **BUILD** the HTML skeleton: zones first (6-zone observatory arc from Section 1), then
   mechanisms, then responsive collapse at 768px.
6. As you build, let the questions from Section 10 INFORM your CSS decisions across multiple
   channels simultaneously (spacing, typography, color, borders, line-height).
7. After Pass 1, write `_pass-1-decisions.md`: what you built, which mechanisms deployed,
   which questions explored, which channels affected.

**Anti-orphaning:** Before writing any CSS rule, identify its source using the standardized citation format:
- `/* PACKAGE S2-M[NN]: ... */` → Mechanism from Section 2
- `/* FINDING [ID]: ... */` → Research finding from Section 3 (Pass 2)
- `/* CASE-STUDY [ID]: ... */` → Case study technique from Section 5 (Pass 2)
- `/* SOUL: ... */` → Soul constraint from Section 0 / tokens.css
- `/* TC-BRIEF: ... */` → Conviction brief direction from Section 1
- `/* QUESTION Q[N]: ... */` → Compositional question from Section 10
If a CSS rule has no identifiable source, question whether it belongs.

Replace all `--[metaphor-concept]-*` placeholders with names drawn from the observatory vocabulary: `--dome-interior`, `--instrument-panel`, `--observation-log`, `--eyepiece-focus`, `--survey-precision`, `--nightsky-release`.

---

## 10. COMPOSITIONAL QUESTIONS

These questions are INVITATIONS, not requirements. Each one, if explored,
can generate multi-channel CSS decisions you would not make from mechanisms alone.
EXPLORE 2-3 during your build. Do not attempt all.

### From Your Content's Metaphor (TC Brief — preserved verbatim)

1. **What if the 8-domain panels in Zone 2 each carried a faint atmospheric signature of their domain — not through color labels or icons, but through subtle differences in internal density?** ~/trades compresses its padding and tightens its line-height (financial data is dense, fast). ~/writing breathes wider (creative work needs air). ~/health has moderate, rhythmic spacing (recovery is cyclical). The panels share the same border weight, the same background, the same font — but their INTERNAL SPACING betrays their character. Test: cover the domain names. Can you guess which panel is ~/trades and which is ~/writing from spatial rhythm alone?
   → Invocation: when building the 8-domain bento grid (Mechanism 2.4), ask whether each panel's internal density can encode its domain's character
   → Implied channels: padding, line-height, letter-spacing, gap between internal elements, border-left accent width variation

2. **What if the page's typographic temperature shifted at the exact moment Cantillon's voice shifts from architect to philosopher?** In the technical sections (Parts II-V), Inter carries everything — clean, functional, the engineer's voice. When the philosophical sections arrive (Part VI), Instrument Serif returns — not as headings but as the body text of the key passages, the essayist reclaiming the page. The reader should feel the change as a shift in WHO IS SPEAKING, not just what font is rendering. When "Goodhart says optimize for a metric and you game your way to hollow victory" arrives in serif, it should feel like a different person entered the room.
   → Invocation: when transitioning from Zone 3 (data) into Zone 4 (philosophy), test whether the font-family shift is perceptible as a voice change
   → Implied channels: font-family, font-style (italic for philosophical voice), line-height (wider for contemplation), margin/padding (wider margins signal essay mode), background subtle temperature shift

3. **What if Zone 6 (the closing quotes and synthesis) treated each blockquote as a discrete astronomical observation — a captured signal displayed at its own coordinates rather than stacked in a list?** Each quote gets its own spatial allocation: breathing space above and below, consistent left alignment but varied right margins (some quotes are short, some are long — let the right edge be ragged like star positions in a survey chart). The quotes are not a bulleted list of takeaways. They are individual bright points in a dark-sky observation. Test: remove all quotes except one. Does that single quote still feel like it belongs to a FIELD of observations, or does it feel orphaned?
   → Invocation: when composing Zone 6's closing constellation, test whether each quote can stand alone as a discrete bright point
   → Implied channels: margin-top and margin-bottom per quote (generous, varied), max-width per quote (ragged right edge), font-family (Instrument Serif), font-size (slightly larger than body), border-left (thinner than 4px callout — delicate optical signal), background (transparent — quotes float on page surface)

### Adapted from Proven Question Families (Knowledge Base)

4. **What if the observatory's epistemic weight — the difference between established Unix truth and uncertain philosophical speculation — were encoded through a progressive visual gravity gradient across the page?** In Zone 2, where architecture is established bedrock, components sit heavy on the page: 4px borders, tight line-height 1.5, compressed padding. In Zone 4, where Goodhart and self-imprisonment are unresolved questions, components float lighter: 1px borders, line-height 1.8, generous padding. The reader FEELS certainty compressing and uncertainty expanding without being told which is which.
   → Invocation: when deploying Border-Weight Gradient (Mechanism 2.3), extend the encoding beyond borders into spacing, line-height, and padding simultaneously
   → Implied channels: border-width, padding, line-height, letter-spacing, font-size subtle variation

5. **What if the same structural rhythm — isolated instrument correlated into synthesis — repeated at three scales: the 6 zones as isolated readings that correlate at scroll-end, the 8 domain panels as isolated instruments correlating through ~/shared/, and each code block as an isolated specification whose meaning emerges in the surrounding prose?** The fractal is not decoration. It IS the content's argument: isolation enables correlation enables self-legibility.
   → Invocation: when implementing Fractal Self-Similarity (Mechanism 2.1), test whether the isolation→correlation→synthesis arc is perceptible at zone, panel, and code-block scales
   → Implied channels: padding ratios (consistent isolation gaps at each scale), border-weight ratios (4px zone / 3px panel / 1px code), background differentiation (color shift at zone scale, spacing shift at panel scale, comment/code density at character scale)

### Cross-Specialist Synthesis (Emergent)

6. **What if the mode-transition breathing between zones — the 48px+ gaps with background shifts — functioned not as passive whitespace but as the observatory's corridors: structural connecting spaces that the reader WALKS THROUGH, with their own atmospheric character?** S1's density contrast findings, S3's DD-003 "ocean between islands" technique, and S4's 15-25% breathing zone budget converge on this: the TRANSITIONS between zones are compositional elements, not empty gaps. The corridor from Zone 2 (instrument floor) to Zone 4 (observer's journal) could have its own subtle background (#FAF5ED), its own reduced font-size for a transitional element, its own emotional register — the feeling of walking from the workshop to the study.
   → Invocation: when building zone boundaries, ask whether each transition is merely a gap or a corridor with atmospheric presence
   → Implied channels: background-color (distinct transition background), padding (48-64px asymmetric), border-top/bottom (1px subtle vs 3px structural), font-size for transitional prose bridges, line-height shift

---

## Agent Log: Synthesizer (Pass 1)
- Specialist inputs consumed: S1 (255 lines), S2 (160 lines), S3 (345 lines), S4 (310 lines), S5 (131 lines), TC brief (208 lines), content (950 lines)
- Deduplication actions: Merged R3-023 (S1) with DD-F-006 chain (S2) into unified Mechanism 2.1 — S2's 4-stage provenance chain + S1's 4-scale CSS actions. Merged R3-003 PULSE (S1) with DD-F-001 chain (S2) into Mechanism 2.2. Merged R2-004 bento (S1) with DD-003 Islands (S3) into Mechanism 2.4. Merged R1-005 typography (S1) with COMP-F-002 (S2) into Mechanism 2.5.
- Conflict resolutions: S1 rated R4-005 (varied cell sizes) HIGH with asymmetric spanning; TC brief prefers internal density variation over size variation — resolved in favor of TC brief (uniform cell size, varied INTERNAL density). S3 DD-006 suggests 4-scale fractal; S2 AD-F-028 bounds at 5 scales — resolved with S2's BOUNDED finding (5 scales, no 6th).
- TC questions preserved: 3 verbatim (Q1 atmospheric signature, Q2 typographic temperature, Q3 closing constellation)
- KB questions adapted: 2 (Q4 from OD-004 certainty encoding family, Q5 from DD-006 fractal self-similarity family)
- Cross-specialist question: 1 (Q6 — from S1 density contrast + S3 DD-003 isolation + S4 breathing budget intersection)
- Output size: 280 lines
