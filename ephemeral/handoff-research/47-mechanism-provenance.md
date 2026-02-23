# 47 -- Mechanism Provenance: Backward Trace of All 15 Gas Town Mechanisms

## The Question

The Gas Town page deploys 15 mechanisms across 5 categories (S:2, H:3, C:4, D:3, N:3). For EACH mechanism, where in the chain did it originate? Where was it selected? Where was it incarnated?

## The Provenance Chain

```
Research (R1-R5) → Mechanism Catalog (18 items) → Conventions Brief → TC Brief (15 selected) → Builder → Output CSS
```

---

## Mechanism-by-Mechanism Backward Trace

### Mechanism #1: Border-Weight Gradient [HIERARCHY]

**Output CSS (L6):**
```css
/* 4px: .core-quote, .file-tree, .callout, .extension-card, .role-card--mayor, .role-card--overseer, .actionability */
border-left: var(--border-heavy) solid ...;  /* 4px */
/* 3px: header border-bottom, .zone-2 border-top, .role-card, .checkpoint-bar border-top, footer border-top, pre, .mental-model */
border-*: var(--border-medium) solid ...;  /* 3px */
/* 1px: .section-indicator, .source-meta, .data-table td, .intel-divider, .upgrades-list li, etc */
border-*: var(--border-light) solid ...;  /* 1px */
```

**TC Brief (L4):** "Authority level: 4px critical, 3px operational, 1px separators" -- mapped to COMMAND POST metaphor where border weight = military rank/authority.

**Conventions Brief (L3):** Section 8: "Three border weights only: 4px for accent and emphasis, 3px for structural enclosure, 1px for data separators. The 2px weight does not exist in this world."

**Mechanism Catalog (L1):** Mechanism #1, HIERARCHY category. CSS: `.element--highest { border-left: 4px }`, `.element--high { border-left: 3px }`, `.element--low { border-left: 1px }`. Cross-file frequency: OD-004, Boris-2, CD-006. Transfer test: YES.

**Research (L0):** R4 axis innovations (192 findings). Extracted from OD-004 (confidence strata: 4px=established, 3px=probable, 1px=open). Also CD-006 (structural hierarchy). The 2px prohibition traces to OD-F-AP-001 ("2px Border Epidemic -- 108 CSS declarations, 1000+ computed instances").

**Provenance verdict:** RESEARCH-ORIGINATED. The 3-tier border system was discovered in OD-004 and validated in CD-006. The 2px prohibition came from OD remediation audit. The mechanism catalog codified it. The TC brief mapped it to command-post authority semantics.

---

### Mechanism #2: 2-Zone Component DNA [COMPONENT]

**Output CSS (L6):**
```css
.callout__label { font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
.callout__body { font-size: var(--type-body); line-height: 1.7; }
/* Same pattern: .file-tree__label/.file-tree__content, .role-card__rank/.role-card__name, .extension-card__author/.extension-card__name, .mental-model__label/blockquote */
```

**TC Brief (L4):** "#2: 2-Zone Component DNA. Cat C. Zone Z2-3. Metaphor Role: Intel briefs: mono label + body."

**Conventions Brief (L3):** Section 8: "Every component has a sparse LABEL zone and a dense BODY zone. The label zone: font-weight 600, font-size 0.75rem, uppercase, letter-spacing 0.1em. The body zone: body font, 1rem, normal case, 1.7 line-height."

**Mechanism Catalog (L1):** Mechanism #2, COMPONENT category. CSS recipe provided with exact `.component__label` and `.component__body` styles. Cross-file: DD-001, OD-004, CD-006, Boris-2, Gastown-5.

**Research (L0):** R1 documentation patterns (28 findings). The label/body split observed across Stripe, Vercel, Linear. R3 density dimensions: sparse/dense alternation at component scale. DD-001 first named it "callout 2-zone DNA."

**Provenance verdict:** RESEARCH-ORIGINATED, CATALOG-CODIFIED. The sparse-label/dense-body pattern was observed in premium docs (R1), tested in DD-001, and codified as mechanism #2. The conventions brief provides the EXACT CSS values (0.75rem, 600, uppercase, 0.1em). The builder reproduced these values almost verbatim.

---

### Mechanism #3: Solid Offset Depth [DEPTH/EMPHASIS]

**Output CSS (L6):**
```css
.core-quote::after { content: ''; position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--color-text); z-index: -1; }
```

**TC Brief (L4):** "#3: Solid Offset Depth. Cat D. Zone Z1. Metaphor Role: Singular emphasis on 'ant colony' quote." Also in Top 5 CSS: `.core-quote::after{content:'';position:absolute;top:4px;left:4px;width:100%;height:100%;background:#1A1A1A;z-index:-1}`

**Conventions Brief (L3):** Not explicitly mentioned (it's a mechanism, not a convention).

**Mechanism Catalog (L1):** Mechanism #3, DEPTH/EMPHASIS. CSS: `.featured-element::after { content: ''; position: absolute; top: 4px; left: 4px; ... }`. Cross-file: OD-001, OD-004, CD-006. "MUST use box-shadow: none (soul piece #2). Solid offset is the ONLY depth technique."

**Research (L0):** OD-001 (EXT-CREATIVE-001). Fresh extraction: "Creates depth WITHOUT violating soul." The mechanism was invented as a WORKAROUND for the box-shadow prohibition -- the research found that depth was needed but box-shadow was forbidden, so solid offset was derived.

**Provenance verdict:** CONSTRAINT-DRIVEN INVENTION. This mechanism exists BECAUSE of the soul constraint (no box-shadow). It was not a pre-existing technique applied to the design system -- it was invented to solve the contradiction between "need depth" and "no shadows." The TC brief provided the EXACT CSS as a ready-to-paste recipe.

---

### Mechanism #4: Spacing Compression [HIERARCHY]

**Output CSS (L6):**
```css
.zone-1 { padding: var(--space-16) var(--space-20); }  /* 64px 80px */
.zone-2 { padding: var(--space-10) var(--space-20); }  /* 40px 80px */
.zone-3 { padding: var(--space-8) var(--space-16) var(--space-5); }  /* 32px 64px 20px */
.zone-4 { padding: var(--space-8) var(--space-20) var(--space-12); }  /* 32px 80px 48px */
```

**TC Brief (L4):** "#4: Spacing Compression. Cat H. Zone Z1-3. Metaphor Role: Dispatch compression: 64->40->32px." Build recipe: Z1 padding 64px, Z2 40px, Z3 32px, Z4 48px.

**Conventions Brief (L3):** Section 2: "Stacked gaps above 120px create voids." Section 5: "Dense zone: padding: 48px 0. Sparse zone: padding: 64px 0." General principle of density-encoding through spacing.

**Mechanism Catalog (L1):** Mechanism #4, HIERARCHY. "Highest certainty/importance = most space." Values: sparse 80px, moderate 32px, dense 16px. Cross-file: OD-004, DD-001, Boris-2, CD-006.

**Research (L0):** R3 density dimensions (51 findings). Specifically R3-023: fractal self-similarity includes spacing progression. OD-004: confident=sparse 40px, uncertain=dense 16px. DD-001: EXHALE 92px, INHALE 24px.

**Provenance verdict:** RESEARCH-ORIGINATED, TC-SPECIALIZED. The spacing compression principle was discovered in density research (R3). The TC brief mapped it to a SPECIFIC content progression: "dispatch compression" from open briefing (64px) through dense intel (32px) to relaxed deployment (48px). The builder executed the TC brief's exact values.

---

### Mechanism #5: Dense/Sparse Alternation [SPATIAL]

**Output CSS (L6):** Zone-level density differences: Z1 sparse (64px, generous prose), Z2 moderate (40px, table+grid), Z3 dense (32px, compressed callouts), Z4 moderate (48px, code+relaxed).

**TC Brief (L4):** "#5: Dense/Sparse Alternation. Cat S. Zone: page. Metaphor Role: Z1 sparse, Z2-3 dense, Z4 moderate."

**Mechanism Catalog (L1):** Mechanism #5, SPATIAL. "Alternating packed/empty space, rhythmic not random." Cross-file: DD-001 (PULSE), OD-002 (narrative breathing), CD-006.

**Research (L0):** R3-023 and DD-001. PULSE pattern: exhale->inhale->exhale. R1 documentation patterns: premium sites use density rhythm (HIGH->LOW->HIGH cycles).

**Provenance verdict:** RESEARCH-ORIGINATED. The alternation principle is one of the oldest research findings (R1 + R3).

---

### Mechanism #7: Zone Background Differentiation [DEPTH/EMPHASIS]

**Output CSS (L6):**
```css
--bg-z1: #FEF9F5;  /* warm cream */
--bg-z2: #F0EBE3;  /* warm gray-beige, delta 18 from Z1 */
--bg-z3: #E8E0D4;  /* deep earthy, delta 15 from Z2 */
--bg-z4: #F5F0E8;  /* lighter return, delta 20 from Z3 */
```

**TC Brief (L4):** "#7: Zone Background Diff. Cat D. Zone: all. Metaphor Role: Clearance zones: #FEF9F5->#F5F0E8->#FAF5ED->#FEF9F5."

**CRITICAL:** The TC brief's values (#FEF9F5/#F5F0E8/#FAF5ED/#FEF9F5) had max channel deltas of 13, 5, 8 -- ALL below the 15 RGB threshold. The builder OVERRODE these to #FEF9F5/#F0EBE3/#E8E0D4/#F5F0E8 with deltas 18, 15, 20. This is documented in the output CSS comments.

**Conventions Brief (L3):** Section 2: "Adjacent zone backgrounds exist in different hues only when at least one RGB channel differs by 15 or more points." This is the perception physics that the builder used to CORRECT the TC brief's values.

**Mechanism Catalog (L1):** Mechanism #7, DEPTH/EMPHASIS. 4-color token system. Cross-file: OD-004, Boris-2, Gastown-5, CD-006.

**Research (L0):** Flagship failure (2026-02-17): backgrounds differing by 1-8 RGB points were imperceptible. 9/9 Mode 4 auditors flagged it. The 15 RGB threshold was derived from this failure.

**Provenance verdict:** FAILURE-ORIGINATED. The 15 RGB threshold did not exist in the original research. It was DISCOVERED through the Flagship experiment's catastrophic failure. The TC brief violated this threshold. The builder corrected it using the conventions brief's perception physics. This is the clearest example of the GATE-PATH survival mechanism: the aspiration ("visible zone differences") was incarnated as a threshold (>= 15 RGB) that the builder applied even when the TC brief got it wrong.

---

### Mechanism #9: Confidence/Priority Encoding via Color [COMPONENT]

**Output CSS (L6):**
```css
.callout--threat { --accent-color: var(--accent-coral); }
.callout--caution { --accent-color: var(--accent-amber); }
.callout--doctrine { --accent-color: var(--accent-purple); }
.callout--intel { --accent-color: var(--accent-blue); }
.callout--advantage { --accent-color: var(--accent-green); }
```

**TC Brief (L4):** "#9: Confidence Color. Cat C. Zone Z2-3. Metaphor Role: coral=THREAT, amber=CAUTION, purple=DOCTRINE."

**Conventions Brief (L3):** Section 1, Accent colors: "Info = blue (#4A90D9), Tip = green (#4A9D6B), Gotcha = coral (#C97065), Challenge = amber (#D97706), Essence = purple (#7C3AED)."

**Mechanism Catalog (L1):** Mechanism #9. 6-color accent palette for semantic differentiation.

**Research (L0):** DD-001 (callout variants). Palette locked in Stage 1 component foundations. The MAPPING (blue=info, green=tip, etc.) comes from R1 documentation patterns studying Stripe/Vercel callout systems.

**Provenance verdict:** RESEARCH-ORIGINATED, TC-REMAPPED. The 5-color accent system comes from R1 research on premium documentation. The TC brief remapped the generic semantics (info/tip/gotcha) to content-specific semantics (threat/caution/doctrine) for the command-post metaphor. The builder used CSS custom property (`--accent-color`) to implement the remapping cleanly.

---

### Mechanism #10: Border-Left Semantic Signaling [COMPONENT]

**Output CSS (L6):** `.callout { border-left: var(--border-heavy) solid var(--accent-color, var(--accent-blue)); }` -- 4px left border on all callouts.

**TC Brief (L4):** "#10: Border-Left Signal. Cat C. Zone Z2-3. Metaphor Role: 4px accent on all callouts."

**Conventions Brief (L3):** Section 8: "Five callout types, each with a reserved 4px left-border accent."

**Mechanism Catalog (L1):** Mechanism #10. "4px left border IS the universal callout signal." Cross-file: DD-001 through CD-006 -- ALL callouts use 4px left border.

**Research (L0):** R1 documentation patterns. Fresh extraction: "4px left border NEVER 2px, NEVER 3px for callouts."

**Provenance verdict:** RESEARCH-ORIGINATED, UNIVERSAL. This is the single most consistent mechanism across the entire chain. 4px left border on callouts appears in EVERY exploration (DD-001 through CD-006), in the mechanism catalog, in the conventions brief, in the TC brief, and in the output. It has NEVER varied. It is the quintessential code-path survival example.

---

### Mechanism #11: Typographic Scale Jumping [HIERARCHY]

**Output CSS (L6):**
```css
--type-display: 3rem;      /* 48px -- header title */
--type-page: 2.5rem;       /* 40px -- zone 1 h2 */
--type-section: 2rem;       /* 32px -- zone 2-4 h2 */
--type-subsection: 1.5rem;  /* 24px -- h3 */
--type-body: 1rem;          /* 16px -- body text */
--type-code: 0.875rem;      /* 14px -- code, links */
--type-meta: 0.75rem;       /* 12px -- labels, metadata */
```

**TC Brief (L4):** "#11: Typographic Scale. Cat H. Zone: all. Metaphor Role: serif display -> sans body -> mono commands."

**Conventions Brief (L3):** Section 1: "Typography is a trinity: Instrument Serif for display headings, Inter for body text, JetBrains Mono for code and labels."

**Mechanism Catalog (L1):** Mechanism #11. "~1.5x ratio between levels IS the mechanism." Values: page 2.5rem, section 1.625rem, subsection 1.375rem, body 1rem, code 0.875rem, meta 0.75rem.

**Research (L0):** R1 documentation patterns. Typography hierarchy observed in premium sites. CD-006 (5-level cascade ~1.5x ratio). All explorations use discrete scale.

**Provenance verdict:** RESEARCH-ORIGINATED, TOKEN-INCARNATED. The type scale comes from R1 research, codified in tokens.css. The builder used the token values directly. The TC brief specified the MAPPING (serif/sans/mono to display/body/commands) but not the VALUES -- those came from tokens.

---

### Mechanism #13: Dark Header + 3px Primary Border [NAVIGATION]

**Output CSS (L6):**
```css
header { background: var(--color-text); color: var(--color-background); border-bottom: var(--border-medium) solid var(--color-primary); }
```

**TC Brief (L4):** "#13: Dark Header. Cat N. Zone: nav. Metaphor Role: Command post designation + 3px red."

**Conventions Brief (L3):** Section 8: "Dark Slab Inversion. Use background #1A1A1A with color #FEF9F5 for: header and footer."

**Mechanism Catalog (L1):** Mechanism #13. "Dark background + 3px red border IS the header signal universally." Cross-file: OD-004, CD-006, Boris-2, Gastown-5.

**Research (L0):** R1 documentation patterns, R2 creative layouts. Dark header is a standard premium documentation pattern. The 3px red border is KortAI-specific (primary color as structural accent).

**Provenance verdict:** HYBRID. Dark header is INDUSTRY STANDARD (observed in R1/R2). The 3px primary-red border is DESIGN-SYSTEM-ORIGINATED (unique to KortAI). Together they form a mechanism that is partly inherited and partly invented.

---

### Mechanism #14: Footer Mirror [NAVIGATION]

**Output CSS (L6):**
```css
footer { background: var(--color-text); color: var(--color-background); border-top: var(--border-medium) solid var(--color-primary); }
```

**TC Brief (L4):** "#14: Footer Mirror. Cat N. Zone: nav. Metaphor Role: Deployment summary bookend."

**Conventions Brief (L3):** Section 6: "Footer: Metaphor echo at smallest scale -- resolution, return to origin. Mirror the header's density character but quieter (1px border-top where header had 3px border-bottom)."

**NOTE:** The conventions brief says 1px footer border-top. The output uses 3px (var(--border-medium)). This is a builder OVERRIDE -- the builder chose to make the footer an equal bookend rather than a quieter echo. The TC brief's "deployment summary bookend" metaphor suggested equal weight.

**Mechanism Catalog (L1):** Mechanism #14. "Header/footer symmetry IS the mechanism."

**Research (L0):** CD-006 footer mirrors header. Strategy Library lines 519-550.

**Provenance verdict:** RESEARCH-ORIGINATED, BUILDER-ADAPTED. The footer mirror principle comes from CD-006. The conventions brief prescribed lighter weight (1px). The builder overrode to 3px, matching the header -- a creative decision justified by the command-post metaphor (bookend symmetry).

---

### Mechanism #15: Bento Grid [SPATIAL]

**Output CSS (L6):**
```css
.roles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-6); }
.role-card--mayor { grid-column: span 2; }
```

**TC Brief (L4):** "#15: Bento Grid. Cat S. Zone Z2. Metaphor Role: 7 Roles as variable-span grid (Mayor=span-2)." Also in Top 5 CSS: `.roles-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}`

**Conventions Brief (L3):** Section 8: "Four-column bento: repeat(4, 1fr) -- for specimen display, feature grids."

**Mechanism Catalog (L1):** Mechanism #15, SPATIAL. "Grid + span modifiers IS the mechanism." `minmax(280px, 1fr)` auto-fit pattern. Cross-file: AD-003, CD-005, CD-006, Gastown-5.

**Research (L0):** R4 axis innovations. AD-003 originated bento grid pattern. R2 creative layouts: magazine-style grid layouts.

**Provenance verdict:** RESEARCH-ORIGINATED, TC-SPECIFIED. The bento grid pattern comes from R4/R2 research, originated in AD-003. The TC brief specified the exact content mapping (7 roles, Mayor=span-2). The TC brief even provided the exact CSS in Top 5 CSS.

---

### Mechanism #16: Drop Cap [DEPTH/EMPHASIS]

**Output CSS (L6):**
```css
.dispatch-opening::first-letter { font-family: var(--font-display); font-size: 3.5em; float: left; line-height: 0.8; margin-right: var(--space-2); margin-top: var(--space-1); color: var(--color-primary); }
```

**TC Brief (L4):** "#16: Drop Cap. Cat D. Zone Z1. Metaphor Role: Editorial dispatch opening." Top 5 CSS: `.dispatch-opening::first-letter{font:3.5em var(--font-display);float:left;color:#E83025}`

**Conventions Brief (L3):** Section 8: "Drop Cap. ::first-letter at 3.5em in Instrument Serif, primary red (#E83025). Deploy in at most 2 sections. Rarity creates impact."

**Mechanism Catalog (L1):** Mechanism #16. CSS: `font-size: 3.5em; float: left; line-height: 0.8; color: var(--color-primary)`. Cross-file: OD-006, CD-006.

**Research (L0):** R2 creative layouts. Magazine editorial opening technique. Fresh extraction: "First letter HUGE (serif, 3x size)."

**Provenance verdict:** INDUSTRY-INHERITED, DESIGN-SYSTEM-CALIBRATED. Drop caps are a centuries-old editorial technique (predating web). R2 observed it in creative layouts. The mechanism catalog codified the specific values (3.5em, Instrument Serif, primary red). The conventions brief added the restraint rule ("at most 2 sections"). The TC brief deployed it once, in Z1.

---

### Mechanism #17: Code Block [COMPONENT]

**Output CSS (L6):**
```css
pre { background: var(--color-text); color: var(--color-background); border: var(--border-medium) solid var(--color-border); padding: var(--space-6) var(--space-8); font-family: var(--font-mono); font-size: var(--type-code); }
.kw { color: var(--syntax-keyword); }  /* #E83025 */
.st { color: var(--syntax-string); }   /* #6B9B7A */
.cm { color: var(--syntax-comment); }  /* #666666 */
.fn { color: var(--syntax-function); } /* #4A7C9B */
.nu { color: var(--syntax-number); }   /* #D97706 */
```

**TC Brief (L4):** "#17: Code Block. Cat C. Zone Z4. Metaphor Role: Install commands as deployment orders."

**Conventions Brief (L3):** Section 8: "Syntax Highlighting. Code blocks use dark background (#1A1A1A) with 6 syntax colors: keyword = primary red, string = sage green, comment = secondary gray, function = muted blue, type = coral, number = amber."

**Mechanism Catalog (L1):** Mechanism #17. Dark background + 7 syntax tokens. Cross-file: DD-001, Boris-2, CD-006.

**Research (L0):** R1 documentation patterns. Code blocks as contrasting zones in premium documentation.

**Provenance verdict:** RESEARCH-ORIGINATED, CONVENTION-SPECIFIED. The dark code block with syntax highlighting is standard in premium documentation (R1). The specific syntax color palette is KortAI-originated (conventions brief Section 8). The builder used the exact syntax class names (.kw, .st, .cm, .fn, .nu) from the mechanism catalog.

---

### Mechanism #18: Data Table [NAVIGATION]

**Output CSS (L6):**
```css
.data-table th { font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; border-bottom: var(--border-medium) solid var(--color-border); }
.data-table td { border-bottom: var(--border-light) solid var(--color-border); }
```

**TC Brief (L4):** "#18: Data Table. Cat N. Zone Z2-3. Metaphor Role: 8 Stages + Why Go, mono headers, no vertical borders."

**Conventions Brief (L3):** Not explicitly detailed as a convention, but prohibitions.md #13: "NEVER Use Vertical Borders in Tables."

**Mechanism Catalog (L1):** Mechanism #18. "Mono headers + 3px/1px border distinction IS the mechanism." Cross-file: Boris-2, CD-006.

**Research (L0):** R1 documentation patterns. Tables as data presentation in premium docs. The "no vertical borders" prohibition traces to geometry.md and anti-patterns/registry lines 241-258: "Vertical lines = prison bars."

**Provenance verdict:** RESEARCH-ORIGINATED, PROHIBITION-CONSTRAINED. The data table pattern comes from R1 research. The mono header treatment comes from the 2-zone DNA pattern (mechanism #2). The absence of vertical borders is a PROHIBITION, not a style choice -- it traces to the anti-patterns registry.

---

## Summary: Where Did Each Mechanism Come From?

| # | Mechanism | Category | Origin Type | Primary Source | TC Role |
|---|-----------|----------|-------------|---------------|---------|
| 1 | Border-Weight Gradient | H | Research | OD-004 confidence strata | Authority encoding |
| 2 | 2-Zone Component DNA | C | Research | DD-001, R1 premium docs | Intel brief structure |
| 3 | Solid Offset Depth | D | Constraint-driven | box-shadow prohibition workaround | Singular emphasis |
| 4 | Spacing Compression | H | Research | R3 density, OD-004 | Dispatch compression |
| 5 | Dense/Sparse Alternation | S | Research | R3 + R1 density rhythm | Page-level rhythm |
| 7 | Zone Background Diff | D | Failure-derived | Flagship failure (1-8 RGB) | Clearance zones |
| 9 | Confidence Color | C | Research, remapped | R1 premium docs, DD-001 | Threat classification |
| 10 | Border-Left Signal | C | Research, universal | R1, all explorations | Callout accent |
| 11 | Typographic Scale | H | Research, tokenized | R1, CD-006 | Rank via typeface |
| 13 | Dark Header | N | Hybrid | R1/R2 + KortAI-specific | Command post designation |
| 14 | Footer Mirror | N | Research, adapted | CD-006 | Deployment bookend |
| 15 | Bento Grid | S | Research | R4/R2, AD-003 | Role hierarchy grid |
| 16 | Drop Cap | D | Industry, calibrated | R2 creative layouts | Dispatch opening |
| 17 | Code Block | C | Research, specified | R1 premium docs | Deployment orders |
| 18 | Data Table | N | Research, prohibited | R1, anti-patterns | Stage readiness data |

### Origin Type Distribution

| Origin Type | Count | Mechanisms |
|-------------|-------|-----------|
| **Research-originated** | 10 | #1, #2, #4, #5, #9, #10, #11, #14, #15, #18 |
| **Constraint-driven invention** | 1 | #3 (solid offset -- created because box-shadow is prohibited) |
| **Failure-derived** | 1 | #7 (zone backgrounds -- 15 RGB threshold from Flagship failure) |
| **Industry-inherited, calibrated** | 1 | #16 (drop cap -- centuries-old, calibrated to 3.5em/Instrument Serif/primary red) |
| **Hybrid** | 1 | #13 (dark header -- industry standard + KortAI 3px red) |
| **Research, remapped by TC** | 1 | #9 (color encoding -- generic semantics remapped to command-post semantics) |

### The Critical Finding: Where Mechanism SELECTION Happens

The TC brief does not invent mechanisms. It SELECTS from the catalog and MAPS them to content.

The selection logic in the TC brief:
1. Content has hierarchical roles (7 worker roles) -> #15 Bento Grid, #1 Border-Weight
2. Content has code examples (install commands) -> #17 Code Block
3. Content has warnings (5 author warnings) -> #9 Color Encoding, #2 2-Zone DNA, #10 Border-Left
4. Content has tabular data (8 stages, Why Go) -> #18 Data Table
5. Content has a core thesis ("ant colony" quote) -> #3 Solid Offset (singular emphasis)
6. Content has editorial character (Yegge's voice) -> #16 Drop Cap
7. Structure requires dark bookends -> #13 Header, #14 Footer
8. Page needs zone differentiation -> #7 Zone Background, #5 Dense/Sparse, #4 Spacing

Every selection is driven by CONTENT FEATURES mapped to MECHANISM CAPABILITIES. The TC brief is a content-to-catalog routing function.

### What Opus Added That Was NOT In The Chain

The builder added these elements that exist in NO prior level:
1. **Stats bar in header** (`.header-stats`) -- not in TC brief, not in any mechanism
2. **Checkpoint bar** (`.checkpoint-bar`) -- mentioned as transition type in mechanism catalog, but the specific visual treatment (mono label bar between zones) was builder-invented
3. **Mental model component** (`.mental-model`) -- not in TC brief's mechanism list; builder created it as a hybrid of callout + blockquote
4. **Actionability assessment** (`.actionability`) -- entirely builder-invented; content-specific component
5. **Responsive breakpoints** (960/768/480px) -- conventions brief specifies 3 breakpoints but the builder implemented the specific responsive behavior
6. **CSS custom property for callout accent** (`--accent-color`) -- builder's implementation of the color encoding mechanism via CSS inheritance

These additions account for roughly 20% of the output CSS. They represent Opus's native design intelligence -- the ability to create components that serve the content even when the pipeline didn't specify them.

### The Deepest Finding: The Pipeline Routes, The Builder Creates

The pipeline (research -> catalog -> brief -> TC brief) acts as a ROUTING function: it selects WHICH of the 18 mechanisms to deploy and WHERE. The builder acts as a CREATION function: it takes the selected mechanisms and INSTANTIATES them as CSS that serves the specific content, often adding components the pipeline never specified.

15 of 18 catalog mechanisms were selected (83%). 3 were rejected (Width Variation, Scroll Witness, Progressive Disclosure) with documented reasoning in the TC brief. The builder deployed all 15 selected mechanisms AND added 5 content-specific components.

The pipeline ensures VOCABULARY BREADTH (5 categories covered, 15 mechanisms). The builder provides VOCABULARY DEPTH (each mechanism adapted to the metaphor, plus content-specific inventions).
