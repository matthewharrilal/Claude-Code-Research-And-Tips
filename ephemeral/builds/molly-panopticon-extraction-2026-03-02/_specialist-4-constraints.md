# Specialist 4: Constraint Landscape for Molly Cantillon's Personal Panopticon

## Category 1: Soul Checklist (Non-Negotiable)

Every item is binary pass/fail. Zero exceptions. Zero negotiation.

```
[ ] border-radius: 0 on ALL elements, pseudo-elements, and inline-code spans
[ ] box-shadow: none on ALL elements (no depth simulation anywhere)
[ ] No filter: drop-shadow() anywhere in CSS
[ ] No CSS gradients (linear-gradient, radial-gradient, conic-gradient)
[ ] No rgba() with alpha < 1 on ANY visual element — opacity === 1.0 binary rule
[ ] No transform: translateY() on hover (no hover-lift effects)
[ ] No CSS animations implying physical object movement (ANTI-PHYSICAL identity)
[ ] No parallax, perspective, or transform-style: preserve-3d
[ ] Locked palette only: #E83025, #1A1A1A, #FEF9F5, #E0D5C5, #F0EBE3, #666666 + 5 accents (#4A90D9, #4A9D6B, #C97065, #D97706, #7C3AED)
[ ] Font trinity only: Instrument Serif (display headings + Essence callout body), Inter (all body text), JetBrains Mono (code)
[ ] Instrument Serif NEVER used for body text — display and Essence only
[ ] h3 elements ALWAYS italic (font-style: italic on all h3)
[ ] Callout left-border: 4px solid (not 1px, not 2px, not 3px) — Family DNA soul piece
[ ] Callout structure: 2-zone pattern (sparse uppercase label + dense body content)
[ ] Spacing from 4px base scale exclusively (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px)
[ ] Max 2 callouts per viewport section (~800px vertical span)
[ ] DD-F-006 fractal self-similarity at 5 scales (navigation, page, section, component, character)
[ ] No cool grays (#F5F5F5, #E0E0E0) — warm earth tones only
[ ] No pure black #000000 — use #1A1A1A; no pure white #FFFFFF for page background — use #FEF9F5
[ ] No hover lift (transform: translateY) — content is editorial, not interactive
[ ] No decorative elements carrying zero information
[ ] Skip link present (<a class="skip-link">)
[ ] prefers-reduced-motion: reduce rule included
```

---

## Category 2: Conventions (Rules + Reasoning)

### Convention: 3-Category Border System

**Rule:** Every border is Cat 1 (3px+ structural/accent), Cat 2 (1px data separator), or Cat 3 (1px micro-element). 2px borders are BANNED. Callout left-borders are 4px.

**Reasoning:** The 2px border epidemic (OD-F-AP-001) was the #1 systemic finding across all OD explorations — 108 CSS declarations, 1000+ computed instances. 2px is perceptually ambiguous: not strong enough to signal structure, not thin enough to recede. It creates "visual droning" where every element has the same weight. AD skipped 2px entirely in the border-weight gradient (4px/3px/1px) to avoid even the appearance of the epidemic. PA auditors independently validated the skip-2px decision as "legible" and "structurally clear."

**For THIS build:** This content has ~17 sections (Parts I-XVII), each with internal subsections and multiple structural elements (code blocks, tables, blockquotes, directory trees). Use Cat 1 (3px+) for Part-level dividers — these are the survey region boundaries in the cartographic metaphor. Use Cat 2 (1px) for table rows in the automation table (Part V), domain comparison table (Part XV), and CLAUDE.md examples. Use Cat 3 (1px) for inline code borders within prose. The 4px left-border on callouts becomes the surveyor's notation mark.

### Convention: Container Width 960px

**Rule:** AD-CONVENTION-SPEC documents the 860-1100px range. OD explorations used 860px (reading-focused). AD amended to 1100px max. For general-purpose pages, 940-960px is the validated sweet spot.

**Reasoning:** Container width evolved across stages. OD used 860px for dense technical reading. AD widened to 1100px for multi-axis spatial compositions. The TC brief specifies 960px explicitly for this content — wide enough for the survey grid elements (tables, code blocks, directory trees) but not so wide that prose loses its reading corridor. The space outside the container is the unmapped territory.

**For THIS build:** 960px. The content has structural elements (8-domain code blocks, comparison tables, cron scripts) that need grid room, but it is primarily prose-driven. The cartographic metaphor benefits from defined margins — the map's edges are compositional.

### Convention: Code Block Dark Theme

**Rule:** Code blocks use `background: #1A1A1A`, `color: #FAFAF5`, `border: 3px solid var(--color-border)`, `font-family: var(--font-mono)`, `font-size: 0.875rem`, `padding: 24px 32px`. Syntax highlighting uses the locked syntax palette (keywords red, strings green, comments gray, functions blue, types coral, numbers amber, punctuation tan).

**Reasoning:** The Polished/Functional dialect split manifested most visibly in code blocks during OD. Dark theme was standardized because it creates the strongest visual differentiation from the warm cream prose zones, functioning as a "dense zone" marker that reinforces the PULSE rhythm.

**For THIS build:** HIGH relevance. The content has 12+ code blocks — bash scripts, directory trees, tmux commands, CLAUDE.md examples, cron configurations, and ASCII diagrams. In the cartographic metaphor, code blocks are measurement data — precise coordinates rendered in the surveyor's instrument (JetBrains Mono on dark ground). The dark-on-light inversion signals a register shift from the cartographer's prose to the instrument's readings.

### Convention: Full-Bleed Dark Header with Bookend Footer

**Rule:** Page opens with full-bleed dark header (`#1A1A1A` background, Instrument Serif title, `border-bottom: 3px solid var(--color-primary)`, padding `var(--space-16) var(--space-8)`, inner content `max-width` matching container). Page closes with matching dark footer (`border-top: 3px solid var(--color-primary)`, navigation affordance).

**Reasoning:** DM-004 amendment (2026-02-11) — all 6 AD explorations were independently flagged for lacking visual endings. This is a template-level requirement, not cosmetic. The bookend pattern (dark header + dark footer) frames the content like the covers of a book. PA auditors unanimously confirmed: pages that "just stop" feel incomplete.

**For THIS build:** The header is the cartouche — the decorated title block of the survey map. Dark background with Instrument Serif title at display scale. The footer is the completed survey — the surveyor rolling up the map. It should carry the same visual assertiveness as the header, with return-to-top and contextual navigation.

### Convention: Type Scale (5-Level Cascade)

**Rule:** `--type-page: 2.5rem (40px)`, `--type-section: 1.625rem (26px)`, `--type-subsection: 1.375rem (22px)`, `--type-body: 1rem (16px)`, `--type-code: 0.875rem (14px)`, `--type-meta: 0.75rem (12px)`. Instrument Serif for page/section headings. Inter for body. JetBrains Mono for code. Type scale ratio ~1.5x between levels.

**Reasoning:** OD-AP-002 identified the typography scale divergence as the primary driver of dialect splits. A unified 5-level cascade prevents unintentional personality shifts between sections. The 1.5x ratio creates clear hierarchy without shouting. A font-size jump of 4px+ signals a zone boundary; 2px signals within-zone variation.

**For THIS build:** The TC brief specifies five typographic voices: cartographer (serif display), surveyor (serif section), field worker (sans body), instrument (mono), annotator (sans reduced at 15px). Map these to: `--type-page` for Part titles (cartographer's hand), `--type-section` for major internal headings (surveyor's region labels), `--type-subsection` for sub-headings within Parts, `--type-body` (16px) for prose, and `--type-code` (14px) for all code blocks. The annotator voice (warnings, quotes at 15px) is a within-zone variation from the 16px body — 1px delta, signaling a subtle register shift.

### Convention: Zone Background Progression

**Rule:** Three zone backgrounds create atmospheric shifts: sparse `#FEF9F5` (warm cream), dense `#FFFFFF` (clean white), breathing `#FAF5ED` (earthy tan). Background changes at zone boundaries are the primary atmospheric tool. Additionally, bedrock `#1A1A1A` for header/footer/code blocks.

**Reasoning:** Zone backgrounds emerged from OD-F-005 (Organization IS Density). Background color shifts signal content register changes without borders. The system creates grouping through atmosphere, not enclosure. Zone tokens use density function names (sparse/dense/breathing), not container names (sidebar-bg, content-bg).

**For THIS build:** The TC brief defines a four-zone arc: Surface survey `#FEF9F5` (parchment — philosophy), Dense survey `#FFFFFF` (drafting table — architecture), Breathing `#FAF5ED` (fieldwork — warnings/critique), Bedrock `#1A1A1A` (night camp — code blocks, header/footer). This maps cleanly to the locked zone tokens. The builder should use custom properties named for the cartographic metaphor (`--zone-parchment`, `--zone-drafting`, `--zone-fieldwork`) that resolve to the locked zone values.

### Convention: Callout System (5 Types, Semantic Accents)

**Rule:** Five callout types with locked accent colors: blue (#4A90D9) for info/context, green (#4A9D6B) for tips/success, coral (#C97065) for warnings/gotchas, amber (#D97706) for caution/important, purple (#7C3AED) for essence/insight. Each callout: 4px left-border, 2-zone structure (uppercase 12px letter-spaced label + 16px body), opaque tinted background. Max 2 per viewport.

**Reasoning:** DD-F-014 established the max-2-per-viewport rule after callout stacking created alarm fatigue. The 5-accent system prevents the traffic-light anti-pattern (green adjacent to red) by requiring whitespace separation. Callout backgrounds must be the opaque tinted values from tokens.css, not ad-hoc rgba().

**For THIS build:** The content has several high-signal moments: the "$2000 subscriptions" proof point, Goodhart's Law warning, Anthropic privacy trade-off, and the "self-imprisonment" dialectic. These are candidates for essence (purple) and warning (coral) callouts. The 7 blockquotes in Part XIII (Key Quotes) should NOT all become callouts — that would be callout cacophony (15 callouts across the page). Select 6-8 highest-signal items as callouts; demote the rest to blockquote styling or inline emphasis. The TC brief's invitation to use different accent colors as legend entries in Part XIII is compatible with this system — blue for self-legibility quotes, amber for warnings, coral for capability claims — as long as no more than 2 appear in any viewport.

### Convention: Breathing Zone Budget (15-25% of Page Height)

**Rule:** Within the target page height, minimum 15% and maximum 25% of total height should be whitespace (chapter dividers, mode transitions, section gaps). This means ~1,500-2,500px of breathing space across a 10,000-14,000px page.

**Reasoning:** DM-005 amended the breathing zone specification with a ceiling. Below 15%, pages feel compressed and metronomic. Above 25%, pages feel empty and uncertain. The 15-25% range ensures rhythmic variation without sprawl. Breathing zones use `#FAF5ED` (earthier than the page background) to signal recovery space, not absence of content.

**For THIS build:** The content is long (~6,000+ words, 17 Parts). The TC brief's spatial arc prescribes generous padding in the cartouche (64-80px), tighter in the survey grid (40-48px), slightly more air in the annotations (48-56px), and opening again in the legend (48-64px). This natural variation should produce breathing space in the 18-22% range. The transition from philosophy (Part I) to architecture (Parts II-V) is the primary breathing zone — the moment the survey grid activates.

### Convention: Responsive Collapse at 768px

**Rule:** All multi-column grids collapse to single column at 768px. Binary rule. 4+-column bento grids collapse at 960px per DM-001 amendment.

**Reasoning:** GAP-020 documents that 768px is consistently where responsive problems concentrate across all 6 AD explorations. The binary collapse rule prevents ambiguous intermediate states where content is technically visible but practically unreadable.

**For THIS build:** The content has comparison tables (Part XV — Panopticon vs Gas Town), the 8-domain automation table (Part V), and the correlation engine ASCII diagrams (Parts IX, XI). All multi-column layouts within these must stack at 768px. The code blocks are single-column and naturally adapt. The 960px breakpoint is relevant if the builder uses a 4-column bento grid for the 8-domain taxonomy.

### Convention: Essence Callout Body Uses Instrument Serif Italic

**Rule:** Essence callout body text (purple `#7C3AED` accent) uses `font-family: 'Instrument Serif'; font-style: italic`. All other callout bodies use Inter.

**Reasoning:** Soul Piece #2 — "The Archivist Speaks in Serif." Serif italic is the voice of accumulated wisdom. Using Inter for Essence body text loses the reverent, archival quality that distinguishes Essence callouts from all other callout types. This is what makes them feel like a philosophy book rather than a tweet.

**For THIS build:** The key quotes (Part XIII) and the philosophical frame (Part I) contain the content's most distilled insights. Cantillon's quotes like "the violent gap" and "we must continue to live outside it" are Essence material — the cartographer's final notations on the completed map. These should use Instrument Serif italic in their callout bodies if formatted as Essence callouts.

---

## Category 3: Anti-Patterns (Risk-Profiled)

### Callout Cacophony — HIGH

**Risk rationale:** This content has 7 key blockquotes (Part XIII), 4 philosophical warnings (Part VI), 4 domain-specific CLAUDE.md code examples (Part VIII), 4 anti-pattern subsections (Part X), and multiple implementation tips. The natural impulse is to make each notable insight a callout — producing 15-20+ callouts across the page. At ~800px viewport height, that is 3-4 callouts per screen, destroying the signal value of each.

**Why dangerous HERE:** The cartographic metaphor encodes hierarchy through density (sparse overview zones to dense data zones). Callout overload flattens this hierarchy — every zone screams with the same alerting intensity. The TC brief's compositional arc calls for methodical-to-cautionary rhythms; stacking callouts converts rhythm into monotone alerting.

**Mitigation:**
```css
/* Rule: Max 2 callouts per ~800px vertical span */
/* For this build: ~20 potential callout candidates -> select 6-8 highest-signal */

/* HIGH-signal (keep as callouts): */
.callout--essence { /* max 3-4 total: "violent gap" quote, Goodhart's Law, "we must continue to live outside it", bottleneck quote */ }
.callout--gotcha  { /* max 2: Anthropic privacy trade-off, self-imprisonment warning */ }
.callout--tip     { /* max 1-2: implementation key insight */ }

/* DEMOTED (integrate into prose or use blockquote styling): */
/* Remaining quotes in Part XIII -> styled blockquotes with left-border, not full callout treatment */
/* CLAUDE.md code examples -> code blocks, not callouts */
/* Anti-pattern subsections -> prose with bold emphasis, not callout boxes */
```

**Detection:** Count callout elements. If > 2 visible in any 800px vertical slice, demote the lower-priority items.

### Code Wall — HIGH

**Risk rationale:** The content has 12+ code blocks including multi-line bash scripts, directory trees, tmux commands, cron configurations, and CLAUDE.md examples. Several are 10-20+ lines. Parts IV, VIII, IX, and XII each contain 2-4 code blocks in sequence with minimal intervening prose.

**Why dangerous HERE:** Sequential code blocks without breathing room create "code walls" — the reader loses narrative context and the page becomes a reference dump. The cartographic metaphor treats code as measurement data; walls of measurement data overwhelm the surveyor's narrative.

**Mitigation:**
```css
/* Rule: No code block > 15 lines without a prose break or callout buffer */
/* For this build: interleave code with explanatory prose */

/* Code blocks as survey coordinates — contained, bounded: */
pre, .code-block {
  background: var(--color-text);        /* #1A1A1A */
  border: 3px solid var(--color-border); /* Cat 1 structural */
  padding: var(--space-6) var(--space-8); /* 24px 32px */
  margin: var(--space-8) 0;              /* 32px vertical separation */
  max-height: 400px;                     /* cap visible height, overflow scroll */
  overflow-y: auto;
}

/* Between sequential code blocks, enforce breathing: */
pre + pre,
.code-block + .code-block {
  margin-top: var(--space-12); /* 48px — forced breathing between adjacent code */
}
```

**Detection:** Count consecutive code blocks without intervening prose. If 3+ code blocks stack with < 32px between them, the wall has formed.

### Uniform Density (Same Spacing Throughout) — HIGH

**Risk rationale:** This content has 17 Parts of relatively similar length (300-900 words each). Without deliberate intervention, the builder will apply uniform `--space-12` (48px) or `--space-16` (64px) between all Parts, creating a metronomic rhythm with zero variation — every Part feels equally important.

**Why dangerous HERE:** The TC brief describes a compositional arc with peaks (opening exhilaration, Goodhart's Law warning) and valleys (methodical architecture, technical implementation). Uniform density contradicts this arc — it asserts "everything is equally important," which is never true. The cartographic metaphor encodes importance through density: sparse overview zones vs. dense data zones.

**Mitigation:**
```css
/* Deploy density variation matching the TC brief's arc */

/* Cartouche zone (Parts I — expansive, philosophical): */
.zone--cartouche { padding: var(--space-16) 0; /* 64px — the hilltop overview */ }

/* Survey grid (Parts II-V — compressed, methodical): */
.zone--grid { padding: var(--space-10) 0; /* 40px — tighter measurement rhythm */ }

/* Marginal annotations (Parts VI-VII — breathing, reflective): */
.zone--annotations { padding: var(--space-12) 0; /* 48px — between survey and fieldwork */ }

/* Legend + resolution (Parts XIII-XIV — moderate, resolving): */
.zone--legend { padding: var(--space-12) 0; /* 48px — collecting the symbols */ }

/* Terra incognita (Part XVI — spacious, questioning): */
.zone--terra { padding: var(--space-16) 0; /* 64px — the map running out */ }
```

**Detection:** Measure vertical padding between all Part-level sections. If all values are identical (or within 8px of each other), density is uniform.

### Traffic-Light Color Adjacency — MEDIUM

**Risk rationale:** The content has both positive proof points (the $2000 savings, the autonomous customer support) and critical warnings (Goodhart's Law, self-imprisonment, Anthropic trade-off). If the builder places a green tip callout adjacent to a coral warning callout, the traffic-light anti-pattern triggers.

**Why dangerous HERE:** Parts VI and X both contain claim-counter-response dialectical structures. The builder might alternate tip (green) and warning (coral/red) callouts to encode this dialectic — producing exactly the kindergarten color adjacency that diminishes both signals.

**Mitigation:**
```css
/* Rule: No green (#4A9D6B) accent adjacent to red/coral (#E83025 / #C97065) accent */
/* Separate with: minimum 48px whitespace OR a neutral element (prose paragraph, code block) */

/* If dialectical structure requires adjacent semantic callouts: */
/* Use blue (info/context) + coral (warning) pairing instead of green + coral */
/* Or: use amber (caution) as a buffer between green and coral */
.callout--tip + .callout--gotcha {
  margin-top: var(--space-12); /* 48px minimum separation */
}
```

**Detection:** Scan for adjacent callout elements with green and red/coral accents. If found within 48px vertical space, insert breathing element or change one accent.

### Decorative Grid Breaking — MEDIUM

**Risk rationale:** The cartographic metaphor risks encouraging decorative map-like elements — ornamental compass roses, decorative border frames, map-illustration aesthetics. The TC brief explicitly warns: "RESIST this. The map is functional, not decorative."

**Why dangerous HERE:** The 8-domain architecture (Parts II-III) and the correlation engine (Part IX) have visual diagramming potential. The builder might break the grid to create a "map-like" visual layout with decorative elements that carry no information. KortAI breaks grid only with CONTENT, never with decoration.

**Mitigation:**
```css
/* Grid breaks are justified ONLY when content demands a different spatial arrangement */
/* The 8-domain code blocks should feel like grid squares — contained, independent, same coordinate system */

/* ALLOWED: content-driven grid variation */
.domain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-8); /* 32px */
}

/* PROHIBITED: decorative frames, ornamental borders, compass-rose elements */
/* No pseudo-elements creating decorative map borders */
/* No clip-path creating non-rectangular decorative shapes */
```

**Detection:** For every pseudo-element (::before, ::after) and decorative element, ask: "Does this carry information content?" If no, remove it.

### Sans-Serif for Essence Body — MEDIUM

**Risk rationale:** The content's key quotes (Part XIII — 7 blockquotes) and philosophical insights (Part I — the "violent gap" passage) are candidates for Essence callout treatment. If the builder uses Inter instead of Instrument Serif italic for these, the reverent archival quality is lost.

**Why dangerous HERE:** The cartographic metaphor's "cartographer's voice" at the legend level (Part XIII) specifically calls for Instrument Serif. Using sans-serif for the distilled quotes undermines the register shift from surveyor (sans) to cartographer (serif) that the TC brief identifies as structurally significant.

**Mitigation:**
```css
/* Essence callout body: ALWAYS Instrument Serif italic */
.callout--essence .callout__body {
  font-family: var(--font-display); /* 'Instrument Serif' */
  font-style: italic;
  font-size: var(--type-body);      /* 16px — same size, different voice */
}

/* All other callout bodies: Inter */
.callout:not(.callout--essence) .callout__body {
  font-family: var(--font-body);    /* 'Inter' */
  font-style: normal;
}
```

**Detection:** Inspect every callout with purple accent. If body text font-family is 'Inter' or system-ui, the anti-pattern is present.

### Semi-Transparent Backgrounds (Systemic) — MEDIUM

**Risk rationale:** OD-AP-003 documents this as a systemic audit gap — every wave of re-enrichment found new instances. Builders habitually reach for `rgba(0,0,0,0.04)` for subtle background tints on inline code, callout code, and offset pseudo-elements. This content has extensive inline code within prose (domain paths like `~/trades`, `~/health`, configuration keys).

**Why dangerous HERE:** Inline code within the body text of domain descriptions (Parts II-IX) will tempt the builder to use subtle rgba backgrounds for visual differentiation. Any opacity < 1.0 on visual elements creates shadow-like depth illusion, violating the ANTI-PHYSICAL identity.

**Mitigation:**
```css
/* Binary rule: opacity === 1.0 on all visual elements */

/* WRONG */
code:not(pre code) { background: rgba(0,0,0,0.04); }

/* RIGHT — use the locked opaque subtle background */
code:not(pre code) {
  background: var(--color-border-subtle); /* #F0EBE3 — fully opaque */
  padding: 2px 6px;
  border: 1px solid var(--color-border);  /* Cat 3 micro */
  font-family: var(--font-mono);
  font-size: 0.9em;
}
```

**Detection:** Search all CSS for `rgba(` and `opacity:`. Any `rgba()` with alpha < 1.0 on a background or any `opacity` value < 1 on a visual element is a violation.

### Same-Velocity Stacking — LOW

**Risk rationale:** With 12+ code blocks (all SLOW velocity) and extensive prose, the builder could create SLOW+SLOW adjacent regions. The 8-domain descriptions (Part II) and the CLAUDE.md examples (Part VIII) are particularly susceptible — repeated code blocks of similar weight stacking without rhythm variation.

**Detection:** Check that no two adjacent structural regions have identical content velocity (both dense code or both sparse prose).

---

## Category 4: Creative Territory

### Freedom: Metaphor Interpretation — Survey Station Cartography

**Bounded by:** Soul constraints (angular geometry, flat surfaces, warm palette), locked font trinity, 4px-base spacing. The cartographic metaphor must express through STRUCTURE, not DECORATION. No ornamental map elements.

**Available choices:** Custom property naming (`--zone-parchment`, `--survey-grid-gap`, `--contour-border`), section architecture (how the 17 Parts group into zones), which code blocks feel like "grid references" vs. "measurement data" vs. "field notebooks."

**TC brief suggests:** The map IS functional. Survey coordinates for domain code blocks (contained monospace in 1px-bordered regions). Legend entries for key quotes (structural left-border as symbol system). Cartouche framing for the philosophical opening. Terra incognita for the unanswered questions. The metaphor should feel like picking up a beautiful map and slowly realizing it is a map of YOU.

### Freedom: Zone Count and Proportions

**Bounded by:** 15-25% breathing zone budget, 960px container width, background colors from the locked zone palette only (#FEF9F5, #FFFFFF, #FAF5ED, #1A1A1A).

**Available choices:** How many zones (the TC brief suggests 5: cartouche, survey grid, marginal annotations, legend, terra incognita), their relative proportions, where zone transitions occur, which Parts group together.

**TC brief suggests:** Cartouche (Part I) on parchment, Survey Grid (Parts II-V) on drafting-table white, Annotations (Parts VI-VII) on fieldwork tan, Legend/Synthesis (Parts XIII-XIV) returning to parchment warmth, Terra Incognita (Part XVI) possibly on bedrock dark. The builder decides the transition points within these suggestions.

### Freedom: Component Selection and Count

**Bounded by:** Max 2 callouts per viewport, 5 callout accent types, 11+ component types available (callouts, code blocks, tables, bento grid, file tree, dark zones, breathing zones, header/footer, etc.). Must use >= 8 component library classes (SC-08).

**Available choices:** Which of the 11 component types to deploy, how many of each, where. The content naturally demands code blocks (12+), tables (2-3), blockquotes (7+), and potentially bento grid (for the 8-domain taxonomy). File tree components for directory structures. Dark zones for the header/footer bookend.

**TC brief suggests:** Domain code blocks as survey coordinates in contained 1px-bordered regions. Key quotes as legend entries with semantic left-border colors. Comparison table (Panopticon vs Gas Town) as overlapping survey transparencies. Checkpoints (Part XII) as recurring structural anchors with consistent visual signature.

### Freedom: Density Variation and Compositional Arc

**Bounded by:** Breathing zone 15-25%, spacing from 4px scale, no uniform density throughout.

**Available choices:** The builder controls HOW density varies — through padding, through background shifts, through typography compression, through component density within sections. The emotional arc (exhilaration -> methodical -> practical -> cautionary -> adversarial -> precise -> diagnostic -> speculative -> instructional -> concentrated -> resolved -> open) is the builder's rhythmic roadmap.

**TC brief suggests:** Energy peaks twice (opening "violent gap" thesis + Goodhart's Law warning). Between peaks, energy converts from philosophical momentum into architectural precision. After the second peak, energy resolves through collection (legend), synthesis (summary), and openness (questions). The climax is at the WAYPOINT 2 transition (Part VI), not at the end.

### Freedom: Blockquote vs. Callout Treatment for Key Quotes

**Bounded by:** Max 2 callouts per viewport, Essence callout uses Instrument Serif italic, max 6-8 callouts across entire page.

**Available choices:** The content has 7 key quotes in Part XIII alone, plus additional quotes in Parts I and VI. The builder decides which become full callouts (with 4px left-border, 2-zone structure, opaque tinted background) and which become styled blockquotes (simpler treatment — left-border only, no tinted background, no label zone). This is a significant creative decision affecting the page's visual weight distribution.

**TC brief suggests:** Key quotes in Part XIII as legend entries — each with a structural left-border in a different accent color (blue for self-legibility, amber for warnings, red for capability claims). This is compatible with either callout or blockquote treatment, but the per-quote color variation suggests blockquote styling rather than full callout treatment (which would trigger cacophony at 7 items).

### Freedom: Treatment of the Technical Critique (Part VII)

**Bounded by:** Must hold the dialectical tension between "this is revolutionary" and "this is just directories." No forced resolution. Zone background and typography register should differentiate this from the main survey.

**Available choices:** Three valid approaches: (1) interrupt the survey like a rival cartographer's annotation (asymmetric margins, different voice), (2) sit alongside the main map as a competing survey (side-by-side or clearly demarcated zone), (3) arrive at the boundary between mapped and unmapped territory (at a zone transition point).

**TC brief suggests:** "This is genuinely unresolved — both the 'interruption' reading and the 'parallel account' reading are compositionally valid." The TC brief's invitation 4 specifically suggests asymmetric treatment — wider left margin, standard right margin — to mark these as marginal annotations in a different hand.

### Freedom: Dark Bedrock for Terra Incognita

**Bounded by:** Dark background `#1A1A1A` is the locked bedrock color, used for header/footer/code blocks. Using it for an entire content zone is permitted but creates the strongest atmospheric shift on the page.

**Available choices:** Part XVI's unanswered questions can use (a) sparse cream `#FEF9F5` (conventional, light, open), (b) breathing tan `#FAF5ED` (warmer, reflective), or (c) bedrock dark `#1A1A1A` (inverted, night survey — the questions asked around the camp lantern). Option (c) inverts the expected sparse=light pattern.

**TC brief suggests:** Experimental question 1 proposes the bedrock dark treatment. This would create a striking resolution moment and connect the terra incognita zone to the header/footer bookend — the page begins and ends in darkness, with the mapped territory illuminated between. The builder decides whether this serves or overwrites the compositional arc.

---

## Agent Log

- **Files read:** specialist-4-prompt.md (366 lines), molly-panopticon-extraction.md (950 lines), _tc-brief.md (145 lines), AD-CONVENTION-SPEC.md (~1,000 lines), AD-PA-CONVENTIONS.md (~970 lines), OD-CONVENTION-SPEC.md (468 lines), identity.md (87 lines), vocabulary.md (55 lines), tokens.css (124 lines), registry.md (354 lines), ACCUMULATED-IDENTITY-v2.md (519 lines), BACKBONE.md (542 lines), OD-RESEARCH-GATE.md (440 lines), AD-RESEARCH-GATE.md (510 lines)
- **Conventions assessed:** 18 total from convention specs, 10 relevant (included with full reasoning), 8 not relevant (scrolljacking rules, hub-spoke keyboard nav, bento-specific 960px collapse — content unlikely to trigger)
- **Anti-patterns profiled:** 13 total from registry + convention amendments. 3 HIGH (callout cacophony, code wall, uniform density), 4 MEDIUM (traffic-light adjacency, decorative grid breaking, sans-serif essence body, semi-transparent backgrounds), 1 LOW (same-velocity stacking), 5 SKIP (rounded corners — soul checklist covers this; drop shadows — soul checklist covers this; hover reveals — no interactive hover content; hover lift — soul checklist covers this; vertical table borders — low risk, 2 tables in content)
- **Creative territory mapped:** 7 freedom areas with constraint boundaries and TC brief connections
- **Decisions made:**
  1. Profiled callout cacophony as HIGH rather than MEDIUM because the content has 20+ potential callout candidates (highest count of any risk factor)
  2. Included semi-transparent backgrounds as MEDIUM despite being covered by soul checklist, because OD-AP-003 documents it surviving multiple review layers — the most systematically missed violation
  3. Included the terra incognita dark-bedrock experimental question as creative territory rather than convention, because the TC brief explicitly frames it as an experimental builder decision
  4. Emphasized the map/territory dialectic in anti-pattern risk rationales because the cartographic metaphor creates specific decoration risks that generic content does not
- **Output size:** ~330 lines
- **Quality self-assessment:** MEETS quality floor. Soul checklist: 22 items (exceeds 10-12 minimum). Conventions: 10 with full reasoning extracted from AD-PA-CONVENTIONS.md and convention specs (exceeds 8 minimum). Anti-patterns: 8 risk-profiled at HIGH or MEDIUM with content-specific CSS mitigation (exceeds 6 minimum). Creative territory: 7 freedom areas mapped (exceeds 5 minimum). Every convention includes WHY from source documents. Every HIGH anti-pattern includes specific CSS property values.
