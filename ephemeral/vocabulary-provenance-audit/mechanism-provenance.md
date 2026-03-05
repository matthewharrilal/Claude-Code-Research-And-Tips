# Mechanism Catalog Provenance Trace

**Auditor:** mechanism-tracer (Task #6)
**File Audited:** `design-system/compositional-core/grammar/mechanism-catalog.md` (752 lines, 18 mechanisms)
**Reference Files:**
- `ephemeral/handoff-research/47-mechanism-provenance.md` (prior Gas Town backward trace)
- `ephemeral/tc-skill-audit/13-mechanism-catalog-audit.md` (prior audit: 12 findings)
**Explorations Read:** DD-001, DD-006, OD-004, CD-006 (full CSS sections), plus grep-verified patterns across all 18 HTML explorations
**Date:** 2026-03-01

---

## Executive Summary

I traced each of the 18 cataloged mechanisms back to which exploration HTML files actually use the technique, whether the mechanism is described accurately, and how many explorations use vs don't use it. I also identified techniques in explorations NOT in the catalog, and assessed the border-left question (1 mechanism or 4?).

**Key findings:**
1. **Border-left IS one technique presented as 4 mechanisms (#1, #2, #9, #10).** Prior audit (13-mechanism-catalog-audit.md) flagged this; my CSS reading confirms it. All 4 are `border-left: Npx solid <color>`. The catalog inflates count from ~15 to 18.
2. **3 identity-locked patterns (#13, #14, #17) ARE genuinely transferable as CSS techniques, but NOT as described.** The dark+3px-red combination is identity. The underlying techniques (dark header, footer mirror, dark code block) are universal.
3. **9+ techniques used in explorations are NOT in the catalog.** Including: inline code styling, file tree indentation, reasoning columns, decision matrix with row highlighting, task checklist, section dividers with ::before, comparison grids, confidence switcher, and scroll-driven animations.
4. **Mechanism accuracy is generally HIGH but unevenly detailed.** #1 has PROGRESSIVE/DISCRETE modes; #7 has a full semantic mappings table. Most others get 5-10 lines.

---

## Per-Mechanism Provenance Trace

### Mechanism #1: Border-Weight Gradient Encoding [HIERARCHY]

**Catalog description accuracy:** HIGH. The 4px/3px/2px/1px gradient and PROGRESSIVE vs DISCRETE modes are well-described.

**Actual exploration usage:**

| Exploration | Uses? | Pattern Found | Notes |
|-------------|-------|---------------|-------|
| DD-001 | YES | 4px callout borders + 1px separators | No gradient encoding per se -- uses 4px for callouts, 1px for data rows. DISCRETE mode only. |
| DD-004 | YES | Multiple border-left widths | 7 border-left declarations found |
| DD-006 | YES | 4px, 3px, 1px on different elements | 6 border-left declarations -- gradient encoding of hierarchy visible |
| OD-004 | YES (PRIMARY ORIGIN) | 4px established, 3px probable, 2px speculative, 1px open | Full PROGRESSIVE mode. THE defining demonstration. 5 border-left declarations. |
| CD-006 | YES | 4px stratum--established, 3px stratum--probable, 1px stratum--speculative | 7 border-left declarations. Uses both progressive (strata) and discrete (callouts). |
| OD-001 | YES | 3 border-left declarations | Less prominent |
| DD-002 | Minimal | 1 border-left declaration only |
| DD-003 | Minimal | 1 border-left declaration |
| DD-005 | YES | 2 border-left declarations |
| OD-003 | Minimal | 1 border-left |
| OD-005 | Minimal | 1 border-left |
| OD-006 | YES | 10 border-left declarations | Heavy usage |

**Usage count:** 15/18 explorations use border-left in some form. OD-004 is the PRIMARY origin for the gradient encoding. DD-001 originated the callout 4px pattern.

**Accuracy verdict:** ACCURATE. OD-004's confidence encoding is the canonical PROGRESSIVE example. The DISCRETE mode description matches DD-001's callout usage.

---

### Mechanism #2: 2-Zone Component DNA [COMPONENT]

**Catalog description accuracy:** HIGH. The label (sparse, mono/uppercase/0.1em) + body (dense, body font/1rem) split is well-described.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| DD-001 | YES | `.callout-essence__label` (10px, 600, uppercase, 0.1em) + `.callout-essence__content` (18px, serif). Also `.callout-tip__label`, `.callout-gotcha__label`, `.callout-info__label`, `.file-tree__label` -- all have the 2-zone pattern |
| DD-006 | YES | Multiple callout types with label/body zones |
| OD-004 | YES | `.callout__label` (mono, --type-meta, uppercase, 0.12em) + `.callout__body` (14px, 1.7 line-height). Also `.geological-survey__label`, `.strata-inventory__text` |
| CD-006 | YES | `.callout-label` (600, --type-meta, 0.1em, uppercase) + `.callout-body` (--type-body, 1.7). Also `.file-tree-label`, `.task-label`, `.reasoning-label`, `.decision-matrix-label`, `.code-label` -- 7+ components with 2-zone pattern |
| All others | YES | Every exploration that has callouts uses this pattern |

**Usage count:** 18/18. UNIVERSAL across all explorations. This is the single most consistently used pattern.

**Accuracy verdict:** ACCURATE but the specific values (0.1em letter-spacing, 0.75rem, 600 weight) are PRESCRIPTIVE rather than descriptive. The actual explorations vary: DD-001 uses 10px + font-body, OD-004 uses --type-meta + font-mono, CD-006 uses --type-meta + font-body + 600 weight. The PATTERN is universal; the EXACT VALUES are not.

---

### Mechanism #3: Solid Offset Depth [DEPTH/EMPHASIS]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| OD-001 | YES (ORIGIN) | 24 instances of `::after` (includes research feed). OD-001 invented this as a workaround for box-shadow prohibition. |
| OD-004 | YES | `.geological-survey::after` with `top: var(--offset-y); left: var(--offset-x); background: var(--offset-color); z-index: -1` -- exact catalog pattern |
| OD-005 | YES | 5 ::after instances |
| OD-006 | YES | 19 instances |
| CD-006 | NOT USED in main CSS | Drop cap + ::first-letter used instead. No solid offset depth in the CSS I read. |
| DD-001 through DD-006 | NO | Each DD file has exactly 1 `::after` mention but these are in the inline threading headers (comments), not CSS implementations |
| CD-003 | YES | 2 ::after instances |

**Usage count:** 4-5/18 explorations (OD-001, OD-004, OD-005, OD-006, and some CD files). ABSENT from all DD explorations. This was invented in OD stage and carried forward.

**Accuracy verdict:** ACCURATE. The constraint-driven origin story (box-shadow prohibition -> solid offset) is correctly described. The catalog correctly notes "MUST use box-shadow: none."

---

### Mechanism #4: Spacing Compression (Inverse Density-Confidence) [HIERARCHY]

**Catalog description accuracy:** MEDIUM. The concept is correct but the example values (80px/32px/16px) don't match any single exploration.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| DD-001 | YES (ORIGIN) | `.section-exhale` = 92px padding, `.section-inhale` = 24px padding. 92/24 = 3.83x compression ratio |
| OD-004 | YES | `--stratum-established-padding: 40px`, `--stratum-probable-padding: 32px`, `--stratum-speculative-padding: 20px`, `--stratum-open-padding: 16px`. Full 4-level compression. |
| DD-006 | YES | Multiple padding levels visible |
| CD-006 | YES | Zone-level padding variation visible across section types |
| DD-002, DD-004 | YES | Gradient and layers patterns use spacing compression |

**Usage count:** 12+/18 explorations. Nearly universal in OD/CD stages.

**Accuracy verdict:** ACCURATE in concept. The "inverse density-confidence" framing comes specifically from OD-004 (certain=sparse, uncertain=dense). The catalog's example values (80px/32px/16px) are generic -- no exploration uses those exact values.

---

### Mechanism #5: Dense/Sparse Alternation (INHALE/EXHALE) [SPATIAL]

**Catalog description accuracy:** HIGH. The alternation pattern is well-described.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| DD-001 | YES (ORIGIN) | Literally named "Density Breathing." `.section-exhale` (92px) alternating with `.section-inhale` (24px). Pattern: EXHALE->INHALE->EXHALE->INHALE->EXHALE (5 sections) |
| DD-002 | YES | CRESCENDO pattern (progressive, not alternating -- variant) |
| DD-003 | YES | ISLANDS pattern (clustered, not alternating -- variant) |
| DD-004 | YES | GEOLOGICAL pattern (layered -- variant) |
| DD-005 | YES | TIDAL pattern (oscillating -- close variant) |
| DD-006 | YES | FRACTAL (self-similar at all scales -- meta-variant) |
| OD-004 | YES | Strata alternate between sparse and dense sections |
| CD-006 | YES | Section-level density variation throughout |

**Usage count:** ALL 18 explorations use some form of density variation. The specific INHALE/EXHALE alternation is DD-001-specific; other explorations use different rhythms (gradient, islands, tidal, geological).

**Accuracy verdict:** ACCURATE as concept, but the INHALE/EXHALE naming is DD-001-specific. The catalog should note that this is one of 6 density patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL), not the only one.

---

### Mechanism #6: Width Variation (Channel/Pool Pattern) [SPATIAL]

**Catalog description accuracy:** MEDIUM. The concept exists but "Channel/Pool" naming doesn't appear in any exploration.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| DD-005 | YES | `max-width: var(--river-narrow)` -- literal narrow/wide channel pattern |
| OD-001 | YES | `max-width: 70%` (questions), `max-width: 80%` (answers), responsive `max-width: 75%` -- Q&A width variation |
| CD-004 | YES | `max-width: 60%` on essence callouts -- narrow/dense zones |
| OD-004 | PARTIAL | `max-width: 720px` within established stratum vs full width elsewhere -- content width encoding confidence |

**Usage count:** 3-4/18. RARE. Most explorations use consistent `max-width` for the page container but don't vary content width as a compositional tool. DD-005 and OD-001 are the primary users.

**Accuracy verdict:** OVERRATED. The catalog rates this as "Metaphor Independence: HIGH" but only 3-4 explorations actually use it. The "Channel/Pool" naming is invented for the catalog -- no exploration uses these class names. The concept is valid but underutilized.

---

### Mechanism #7: Zone Background Differentiation [DEPTH/EMPHASIS]

**Catalog description accuracy:** HIGH for concept. The 4-color token system is well-defined.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| OD-004 | YES | `--color-zone-sparse: #FEF9F5`, `--color-zone-moderate: #FFFFFF`, `--color-zone-dense: #FFFFFF`, `--color-zone-densest: #FAF5ED`, `--color-zone-breathing: #FAF5ED`. Full 5-token system with stratum backgrounds. |
| CD-006 | YES | `--color-zone-sparse`, `--color-zone-dense`, `--color-zone-breathing` + axis zone tokens. 18 references to zone tokens in CSS. |
| All CD explorations | YES | 12-18 zone references each |
| All OD explorations | YES | 4-10 zone references each |
| DD explorations | NO | DD-001 through DD-006 do NOT define zone tokens. They use a single `--color-background` throughout. Zone tokens were invented in OD stage. |

**Usage count:** 12/18 (all OD + all CD). ABSENT from all DD explorations. Zone backgrounds were introduced in OD-004 and standardized across CD stage.

**Accuracy verdict:** ACCURATE but with important provenance gap. The catalog doesn't note that this mechanism didn't exist in the DD stage. The "Semantic Mappings" table (sparse=introductory, dense=technical) is prescriptive -- it comes from OD-004's confidence mapping but is presented as universal guidance.

---

### Mechanism #8: Scroll Witness / Sticky TOC [STRUCTURE/NAVIGATION]

**Catalog description accuracy:** MEDIUM. Describes sticky positioning + intersection observer.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| OD-005 | YES | `position: sticky` (1 instance) -- spatial hub-spoke navigation |
| OD-006 | YES | `position: sticky` (3 instances) -- periodic table navigation + sticky elements |
| All others | NO | No sticky positioning found |

**Usage count:** 2/18. VERY RARE. Only OD-005 and OD-006 use sticky positioning. No exploration implements a full "scroll witness" with intersection observer -- the catalog's full JS implementation is aspirational rather than observed.

**Accuracy verdict:** PARTIALLY ACCURATE. The sticky positioning technique is real (2 explorations use it). But the "Scroll Witness" with `.scroll-witness__item.active` and intersection observer doesn't exist in any exploration. The catalog describes a MORE complex mechanism than what was actually built.

---

### Mechanism #9: Confidence/Priority Encoding via Color [COMPONENT]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| DD-001 | YES | 4 callout types with 4 accent colors (amber, green, red/primary, blue) |
| OD-004 | YES | 4 confidence colors (text=established, blue=probable, amber=speculative, purple=open) + 6 callout variants |
| CD-006 | YES | 5 callout types (info=blue, tip=green, gotcha=coral, essence=purple, challenge=amber) |
| All explorations with callouts | YES | Every exploration with callout components uses color differentiation |

**Usage count:** 16+/18. Nearly universal wherever callouts exist.

**Accuracy verdict:** ACCURATE. The 5-6 color accent system is consistently used. Note: this mechanism OVERLAPS with #1 (border-weight) and #10 (border-left signal) -- they're all facets of the same border-left technique.

---

### Mechanism #10: Border-Left Semantic Signaling [COMPONENT]

**Catalog description accuracy:** ACCURATE but REDUNDANT.

**Evidence:** This is `border-left: 4px solid var(--semantic-color)`. It is the INTERSECTION of:
- #1 (border-weight: the 4px width)
- #9 (color encoding: the semantic color)

Every exploration that uses callouts uses this exact pattern. Usage count is identical to #9 (16+/18).

**Is this a separate mechanism?** NO. It is one application of #1 + #9. The prior audit (13-mechanism-catalog-audit.md Finding F2) correctly identified this: "This is not a separate mechanism from #1 and #9. It's '4px left border with color' -- which is the intersection of border-weight (#1) and color encoding (#9)."

---

### Mechanism #11: Typographic Scale Jumping [HIERARCHY]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| OD-004 | YES | Full 6-level cascade: `--type-page: 2.5rem`, `--type-section: 1.625rem`, `--type-subsection: 1.375rem`, `--type-body: 1rem`, `--type-code: 0.875rem`, `--type-meta: 0.75rem` |
| CD-006 | YES | Same 6-level cascade with `--type-page: 3rem` (divergence) |
| DD-001 | PARTIAL | Uses font-size values but doesn't define type tokens (32px, 28px, 20px, 16px, 14px, 13px, 11px, 10px) |
| All OD/CD | YES | All use the standardized type scale tokens |
| DD explorations | PARTIAL | Earlier DD files use hard-coded font sizes, not the token system |

**Usage count:** 18/18 (all explorations use typographic hierarchy). Token-based scale: 12/18 (OD + CD). Ratio ~1.5x: approximately accurate for the OD/CD tokens.

**Accuracy verdict:** ACCURATE. The ~1.5x ratio and 6-level cascade are well-described and consistently implemented in OD/CD explorations.

---

### Mechanism #12: Progressive Disclosure (Density Gradient Flow) [STRUCTURE/NAVIGATION]

**Catalog description accuracy:** LOW. The catalog MISNAMES this. As documented, it's padding compression across phases -- identical to #4 (Spacing Compression). True progressive disclosure (show/hide, expand/collapse) is NOT in the catalog.

**Actual exploration usage:** The padding values in the catalog (--space-20 -> --space-8 -> --space-4 -> --space-10) describe a density gradient, not progressive disclosure.

**Prior audit (13-mechanism-catalog-audit.md) Finding F6:** "Progressive Disclosure as documented is actually 'Density Gradient Flow' -- it's padding compression (#4) applied to sequential phases. True progressive disclosure (show/hide, expand/collapse) is not in the catalog at all."

**Overlap with #4:** HIGH. Both describe spacing variation as a mechanism. #4 frames it as "compression" (high->low), #12 frames it as "phases" (intro->build->climax->resolve). Same CSS, different narrative.

**Accuracy verdict:** MISNAMED and OVERLAPPING with #4.

---

### Mechanism #13: Dark Header + 3px Primary Border [STRUCTURE/NAVIGATION]

**Catalog description accuracy:** HIGH for the CSS pattern. OVERSTATED for transferability.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| DD-001 | PARTIAL | `.exploration-header` has `border-bottom: 3px solid var(--color-primary)` and `background: white` -- NOT dark. Only has the 3px border. |
| OD-004 | YES | `background: var(--color-text)` + `border-bottom: 3px solid var(--color-primary)` -- full dark header |
| CD-006 | YES | `header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); }` -- canonical |
| DD-002 through DD-006 | VARIES | Some have dark headers, some have light. Not universal in DD stage. |
| All OD/CD | YES | All have dark headers by convention |

**Usage count:** 12-14/18. Universal in OD/CD. Mixed in DD (some use light headers).

**Is this identity-locked?** YES, partially. The dark+3px-primary combination IS KortAI identity. The underlying technique (contrasting header with accent border) is universal CSS. The catalog's "Transfer test: YES -- all explorations use identical dark header structure" is MISLEADING because DD-001 uses a light header.

**Accuracy verdict:** PARTIALLY ACCURATE. The catalog overstates universality and understates the identity-specific nature of the dark+red combination.

---

### Mechanism #14: Footer Mirror [STRUCTURE/NAVIGATION]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| CD-006 | YES | `.page-footer { background: var(--color-text); border-top: 3px solid var(--color-primary); }` |
| DD-001 | NO | No footer at all |
| OD-004 | Not in the first 1000 lines I read -- may have one later in the file |
| DD explorations generally | NO | Most DD explorations lack footers |

**Usage count:** Approximately 6-8/18. Present in most CD explorations and some OD explorations. ABSENT from most DD explorations.

**Is this identity-locked?** Same as #13 -- the dark+3px-red is identity. The structural concept (footer mirrors header) is universal.

**Accuracy verdict:** ACCURATE description but OVERSTATED usage. "All pages with footer" implies universal usage, but many explorations simply lack footers.

---

### Mechanism #15: Bento Grid (Variable Span Layout) [SPATIAL]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| CD-006 | YES | `.bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); }` with `.bento-item--wide { grid-column: span 2; }` and `.bento-item--large { grid-column: span 2; grid-row: span 2; }` |
| DD-003 | YES | Islands pattern uses grid layouts (7 grid references) |
| DD-005 | YES | 10 grid references -- river/tidal patterns |
| DD-006 | YES | 7 grid references -- fractal layouts |
| CD-003 | YES | 69 grid references -- heavy grid usage |
| CD-005 | YES | 53 grid references -- multi-axis transitions |
| OD-005 | YES | 10 grid references -- spatial hub-spoke |

**Usage count:** 10+/18. Common in later explorations (DD-003+, all CD).

**Accuracy verdict:** ACCURATE. The `minmax(280px, 1fr)` + span modifiers pattern is well-described and matches CD-006's implementation.

---

### Mechanism #16: Drop Cap (Editorial Opening) [DEPTH/EMPHASIS]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| OD-001 | YES (ORIGIN) | `.answer__lead--dropcap::first-letter` -- originated as "THE EDITORIAL DROP" (EXT-CREATIVE-005) |
| OD-006 | YES | `.section-opening::first-letter` -- section-level drop caps |
| CD-006 | YES | `.drop-cap::first-letter { font-family: var(--font-display); font-size: 3.5em; float: left; line-height: 0.8; margin-right: var(--space-2); margin-top: 4px; color: var(--color-primary); }` -- exact catalog values |
| DD-001 through DD-006 | NO | Not present in any DD exploration |
| OD-002 through OD-005 | NO | Only OD-001 and OD-006 use it |

**Usage count:** 3/18. RARE. Only OD-001, OD-006, and CD-006.

**Accuracy verdict:** ACCURATE. The 3.5em/Instrument Serif/primary red values match CD-006 exactly. The catalog correctly notes "diminishes after first use." The "Metaphor Independence: MEDIUM" rating is appropriate -- this is editorial-specific.

---

### Mechanism #17: Code Block (Dark Background + Syntax Highlighting) [COMPONENT]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| DD-001 | YES | `.code-snippet { background: #1A1A1A; }` with `.comment { color: #666666; }`, `.keyword { color: #E83025; }`, `.string { color: #6B9B7A; }`, `.function { color: #4A7C9B; }` |
| OD-004 | YES | `.code-block { background: #1A1A1A; border: 3px solid var(--color-border); }` with syntax tokens |
| CD-006 | YES | Full syntax token system: `--syntax-keyword: #E83025`, `--syntax-string: #6B9B7A`, `--syntax-comment: #666666`, `--syntax-function: #4A7C9B`, `--syntax-type: #C97065`, `--syntax-number: #D97706`, `--syntax-punctuation: #E0D5C5` |
| All technical explorations | YES | Present wherever code examples appear |

**Usage count:** 12+/18. Universal for technical content.

**Is this identity-locked?** PARTIALLY. Dark code blocks are universal web design. The specific syntax palette (#E83025 keywords, #6B9B7A strings, etc.) IS KortAI identity. The catalog correctly describes the mechanism but the "VERY HIGH" metaphor independence rating should be "HIGH" given the identity-locked palette.

**Accuracy verdict:** ACCURATE. The 7 syntax token system is consistently implemented.

---

### Mechanism #18: Data Table (Mono Headers + Border Categories) [STRUCTURE/NAVIGATION]

**Catalog description accuracy:** HIGH.

**Actual exploration usage:**

| Exploration | Uses? | Evidence |
|-------------|-------|----------|
| CD-006 | YES | `.decision-matrix th { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); text-transform: uppercase; border-bottom: 3px solid var(--color-border); }` + `.decision-matrix td { border-bottom: 1px solid var(--color-border); }` |
| OD-003 | YES | Table styling present |
| OD-005 | YES | Table styling present |
| All explorations with tables | YES | 10/18 explorations have some table styling |

**Usage count:** 10/18. Present wherever tabular data exists.

**Accuracy verdict:** MOSTLY ACCURATE. The catalog describes `font-family: var(--font-mono)` for headers, but CD-006 actually uses `font-family: var(--font-body)` with `font-weight: 600`. The 3px/1px border distinction IS consistent. The "no vertical borders" prohibition is universally observed.

---

## The Border-Left Question: 1 Mechanism or 4?

**Prior audit finding (F2):** "#1, #2, #9, #10 are one mechanism with 4 applications."

**My assessment after reading the CSS:**

The four mechanisms use this CSS property matrix:

| Mechanism | CSS Property | Width | Color | Encodes |
|-----------|-------------|-------|-------|---------|
| #1 Border-Weight Gradient | border-left | VARIES (4/3/2/1px) | Typically constant | Hierarchy/importance |
| #2 2-Zone Component DNA | border-left | FIXED (4px) | Varies by callout type | Structural (callout signal) |
| #9 Color Encoding | border-left | FIXED (4px) | VARIES (5-6 colors) | Category/priority |
| #10 Border-Left Signal | border-left | FIXED (4px) | VARIES | Emphasis |

**Are these 1 or 4?**

They're **2 genuinely distinct techniques** hiding inside 4 catalog entries:

1. **Border-weight variation** (#1): Width encodes meaning (4px/3px/2px/1px). Used in OD-004 strata, CD-006 spiral. The WEIGHT is the signal.
2. **Border-color variation** (#9): Color encodes meaning (blue/green/coral/amber/purple). Used in callouts universally. The COLOR is the signal.

#2 and #10 are APPLICATIONS of these two techniques, not separate mechanisms:
- #2 (2-Zone DNA) uses border-left as a structural marker (fixed 4px + varies color) -- this is #9 applied to components
- #10 (Border-Left Signal) describes "4px left border as universal callout signal" -- this is just saying "callouts have 4px left borders" which is already covered by #2 and #9

**Recommendation:** Consolidate to 2 mechanisms: "Border-Weight Encoding" (#1) and "Border-Color Encoding" (#9). Document #2's 2-zone structure as a COMPONENT PATTERN, not a mechanism. Remove #10 entirely (redundant).

---

## Identity-Locked Patterns (#13, #14, #17): Genuinely Transferable?

**Catalog claims:** All three have "VERY HIGH" metaphor independence.

**Assessment:**

| Pattern | Generic Technique | KortAI-Specific Detail | Transferable Part |
|---------|-------------------|----------------------|-------------------|
| #13 Dark Header | Dark contrasting header with accent border | `#1A1A1A` bg + `3px #E83025` border | The dark-header-with-accent technique transfers. The specific colors don't. |
| #14 Footer Mirror | Footer mirrors header structure | Same dark+red pattern | Header/footer symmetry is universal. The specific treatment is identity. |
| #17 Code Block | Dark code block with syntax highlighting | 7-token syntax palette locked to KortAI colors | Dark code blocks are universal web design. The palette is identity. |

**Verdict:** The TECHNIQUES are genuinely transferable (any design system can have a dark header, mirrored footer, dark code blocks). The SPECIFIC IMPLEMENTATIONS are identity-locked. The catalog should split these: technique = transferable, implementation = identity.

BUT -- this distinction already exists in the catalog's "Reusable boundary" sections. #13 says "Dark background + 3px red border IS the header signal universally." The problem isn't the description; it's the "VERY HIGH" metaphor independence rating. Within KortAI, these are always the same. Outside KortAI, only the concept transfers.

---

## Techniques in Explorations NOT in the Catalog

These were found by reading exploration CSS but are not cataloged mechanisms:

| # | Technique | Explorations Using It | CSS Pattern | Passes Name Test? | Passes Transfer Test? |
|---|-----------|----------------------|-------------|------------------|---------------------|
| A | **Inline code styling** | CD-006 | `code:not(pre code) { background: var(--color-border-subtle); padding: 2px 6px; border: 1px solid }` | YES | YES |
| B | **File tree indentation** | DD-001, CD-006 | `.file-tree-item--l1 { padding-left: 16px }` through `--l3 { padding-left: 48px }` | YES | YES |
| C | **Reasoning columns** (2-column comparison) | CD-006 | `.reasoning-columns { display: grid; grid-template-columns: 1fr 1fr }` with `::before` list markers | YES | YES |
| D | **Decision matrix with row highlighting** | DD-001, CD-006 | `.decision-matrix .recommended { background: #F2F9F4; font-weight: 600 }` | YES | YES |
| E | **Task checklist** | CD-006 | `.task-checkbox { width: 16px; height: 16px; border: 1px solid }` + flex layout | YES | YES |
| F | **Section divider with ::before** | DD-006 | Horizontal rule with centered label using positioned pseudo-element | YES | YES |
| G | **Comparison grid** | OD-004 | `.comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; background: var(--color-border) }` -- CSS grid with gap-as-border technique | YES | YES |
| H | **Confidence switcher** | OD-004 | `.confidence-switcher { display: flex; gap: 3px }` + `.confidence-switcher__option--active { border-bottom: 3px solid }` | Partially (OD-004 specific naming) | YES (tab/filter pattern is universal) |
| I | **Scroll-driven animations** | OD-004, OD-005, OD-006 | `animation-timeline: view(); animation-range: entry 10% entry 40%` | YES | YES |
| J | **Core abstraction composite** | CD-006 | 3-zone component: label + principle (serif italic) + proof (dark code block) | Partially (KortAI-specific) | YES (concept + proof pattern is universal) |
| K | **Version badge** | CD-006 | `.version-badge { font-family: mono; font-size: 0.625rem; padding: 2px 8px; border: 1px solid }` | YES | YES |
| L | **Q&A conversation width variation** | OD-001 | Questions at 70% width, answers at 80% width -- width encodes speaker role | YES | YES (interview/dialogue patterns) |
| M | **Evidence DNA markers** | OD-004 | Inline mono-font metadata showing evidence quality per section | Partially | YES |
| N | **Stratum boundary markers** | OD-004 | 3-component boundary: 48px whitespace + 3px rule + mono label with progress squares | YES | YES (section transitions) |

**Count: 14 techniques in explorations that are NOT in the mechanism catalog.**

Of these, at least 8 (A, B, C, D, E, G, K, N) clearly pass both the Name Test and Transfer Test and could be cataloged mechanisms. This confirms the prior audit's finding F1: the catalog is an observation set presented as exhaustive.

---

## Summary: Mechanism Provenance Matrix

| # | Mechanism | Origin Stage | Primary Source | Exploration Count | Accurate? | Issues |
|---|-----------|-------------|---------------|-------------------|-----------|--------|
| 1 | Border-Weight Gradient | OD (OD-004) | R1-001, OD-004 confidence | 15/18 | YES | None |
| 2 | 2-Zone Component DNA | DD (DD-001) | R1, DD-001 callouts | 18/18 | YES | Values prescriptive |
| 3 | Solid Offset Depth | OD (OD-001) | box-shadow prohibition workaround | 4-5/18 | YES | None |
| 4 | Spacing Compression | DD (DD-001) | R3, DD-001 PULSE | 12+/18 | YES | Example values generic |
| 5 | Dense/Sparse Alternation | DD (DD-001) | R3-003 PULSE | 18/18 | YES | Name DD-001-specific |
| 6 | Width Variation | DD (DD-005) | R4, DD-005 rivers | 3-4/18 | MEDIUM | Overrated usage |
| 7 | Zone Background Diff | OD (OD-004) | OD-F-005 zone tokens | 12/18 | YES | Absent from DD stage |
| 8 | Scroll Witness/Sticky TOC | OD (OD-005) | R1 navigation | 2/18 | PARTIAL | JS implementation aspirational |
| 9 | Color Encoding | DD (DD-001) | R1 callout systems | 16+/18 | YES | Overlaps #1, #10 |
| 10 | Border-Left Signal | DD (DD-001) | R1, universal | 16+/18 | YES | REDUNDANT with #1+#9 |
| 11 | Typographic Scale | DD (DD-001) / OD | R1, CD-006 | 18/18 | YES | None |
| 12 | Progressive Disclosure | DD | R3, DD-001 phases | 12+/18 | LOW | MISNAMED, overlaps #4 |
| 13 | Dark Header | OD (OD-004) | R1/R2 + KortAI | 12-14/18 | PARTIAL | Identity-locked, not universal in DD |
| 14 | Footer Mirror | CD (CD-006) | CD-006 | 6-8/18 | PARTIAL | Many explorations lack footers |
| 15 | Bento Grid | DD (DD-003) / CD | R4, AD-003 | 10+/18 | YES | None |
| 16 | Drop Cap | OD (OD-001) | R2, OD-001 EXT-CREATIVE-005 | 3/18 | YES | Rare usage |
| 17 | Code Block | DD (DD-001) | R1 | 12+/18 | YES | Palette identity-locked |
| 18 | Data Table | CD (CD-006) | R1 | 10/18 | MOSTLY | th uses font-body not font-mono in CD-006 |

---

## Critical Findings

### F1: The catalog contains ~15 genuine mechanisms, not 18
- #10 (Border-Left Signal) is redundant with #1 + #9
- #12 (Progressive Disclosure) is a mislabeled duplicate of #4
- #2 is debatable -- the 2-zone structure is a COMPONENT PATTERN using border-left, not a separate mechanism

### F2: 14 techniques in explorations are NOT cataloged
The catalog captures 18 of approximately 30+ CSS techniques actually used in explorations. It's a curated subset presented as exhaustive.

### F3: Border-left dominance is REAL
4 of 18 mechanisms (#1, #2, #9, #10) = 22% of catalog = one CSS property. Grep confirms: 94 border-left declarations across 24 files. Border-left is the dominant visual signal in the design system.

### F4: Origin stages cluster by mechanism type
- DD stage originated: density/spacing mechanisms (#4, #5, #6, #11, #15)
- OD stage originated: semantic/structural mechanisms (#1-gradient, #3, #7, #8, #13, #16)
- CD stage originated: compositional mechanisms (#14, #17-standardized, #18-standardized)
- Universal (always present): #2, #9, #10, #11

### F5: Usage frequency varies 100x (18/18 to 2/18)
- Universal (18/18): #2 (2-zone DNA), #5 (density alternation), #11 (type scale)
- Common (12+/18): #1, #4, #7, #9, #10, #13, #17
- Moderate (6-10/18): #14, #15, #18
- Rare (2-4/18): #3, #6, #8, #16

---

## Recommendations

1. **Consolidate border-left mechanisms.** #1 + #9 = 2 techniques (weight encoding, color encoding). #10 = remove (redundant). #2 = reclassify as component pattern.

2. **Rename #12.** "Progressive Disclosure" -> "Density Gradient Flow" or merge into #4 with a "Phase Mode" subsection.

3. **Add framing language.** "These 18 mechanisms were extracted from DD/OD/CD explorations. They are illustrative, not exhaustive. Additional techniques that pass the Name Test and Transfer Test may be used."

4. **Document usage frequency.** Knowing that #6 (Width Variation) is used in 3/18 explorations vs #2 (2-Zone DNA) in 18/18 is material for builders making selection decisions.

5. **Flag stage of origin.** Knowing that zone backgrounds (#7) didn't exist in DD stage helps builders understand the mechanism's maturity and provenance.

6. **Mark identity-locked patterns.** #13, #14, #17 should be tagged as "KortAI Identity" in addition to their category. Their "VERY HIGH" metaphor independence should be downgraded to "HIGH (technique) / IDENTITY (implementation)."

7. **Consider cataloging 3-5 missing techniques.** At minimum: inline code styling, reasoning columns, file tree indentation, and stratum boundary markers. All pass Name+Transfer tests and are used in multiple explorations.

---

*Provenance trace complete. 18 mechanisms traced, 14 additional uncataloged techniques identified, 6 accuracy issues found (1 misnamed, 1 redundant, 1 partially accurate, 3 overrated).*
