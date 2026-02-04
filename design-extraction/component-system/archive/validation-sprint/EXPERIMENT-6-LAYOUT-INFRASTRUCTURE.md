# EXPERIMENT 6 RESULTS: LAYOUT INFRASTRUCTURE

**Date:** 2026-02-03
**Status:** COMPLETE — Browser-Verified
**Prototypes Built:** 4 layouts (Horizontal Scroll, Grid, Mixed Density, Vertical Stream)
**Screenshots Captured:** exp6-layout-horizontal.png, exp6-layout-grid.png, exp6-layout-mixed.png, exp6-layout-vertical.png

---

## LAYOUT OVERVIEW

| # | Layout | Pattern | Primary Use Case |
|---|--------|---------|------------------|
| 1 | Horizontal Scroll | Hero + H-scroll sections | Featured + Archive browsing |
| 2 | Grid | Filter bar + 3-column grid | Filterable project archive |
| 3 | Mixed Density | Hero + H-scroll + Grid | Portfolio homepage |
| 4 | Vertical Stream | Full-width stacked cards | Journal/blog format |

---

## SUB-AGENT G COMPLETE ANALYSIS

### LAYOUT 1: HORIZONTAL SCROLL

**Screenshot:** exp6-layout-horizontal.png

#### 1. Section Analysis

| Question | Answer |
|----------|--------|
| How many distinct sections? | 3 (Hero, Featured/Recent, Archive/Past) |
| What creates boundaries? | Section labels ("FEATURED WORK", "ARCHIVE") + horizontal rules |
| Are boundaries consistent? | YES — same treatment for all section dividers |
| Would user understand logic? | YES — chronological grouping (recent → past) |
| KortAI comparison? | SIMILAR — KortAI also uses section labels + horizontal divisions |

#### 2. Multi-Axis Movement

| Question | Answer |
|----------|--------|
| Which sections horizontal scroll? | Both card rows (Featured, Archive) |
| Which vertical scroll? | Page as whole |
| Which static? | Hero banner |
| Pattern? | V → H → V → H (alternating) |
| Intentional or accidental? | INTENTIONAL — creates browsing rhythm |
| Axis switching: natural or disorienting? | NATURAL — clear visual cues for scroll direction |

#### 3. Compartmentalization

| Question | Answer |
|----------|--------|
| How is content grouped? | By recency (Recent vs Archive) |
| What determines membership? | Year/date of project |
| Groups visually distinct? | YES — separated by section headers and spacing |
| Feels: RIGID / FLUID / ORGANIC? | FLUID — horizontal scroll suggests continuous browsing |
| Can user predict content location? | YES — recent work at top, older work below |

#### 4. Density Distribution

| Question | Answer |
|----------|--------|
| Where highest? | Card rows (multiple cards visible) |
| Where lowest? | Hero banner (text only) |
| Intentional? | YES — hero provides breathing room before density |
| Adequate breathing points? | YES — spacers between sections |
| Density FLOW or JUMP? | FLOW — gradual increase from hero to cards |

#### 5. Rhythm

| Question | Answer |
|----------|--------|
| Rhythm present? | YES |
| Created by: repetition / alternation / progression? | REPETITION (card units) + ALTERNATION (sections) |
| Feels: MUSICAL / MECHANICAL / CHAOTIC? | MUSICAL — consistent beat with variation |
| Supports or fights consumption? | SUPPORTS — easy to scan horizontally |

#### 6. Card-to-Page

| Question | Answer |
|----------|--------|
| Cards feel like PARTS or ISOLATED UNITS? | PARTS — cards form collection |
| Card size relates to section width? | YES — cards fit naturally in viewport |
| Card internal structure echoes page structure? | PARTIAL — both use top-down hierarchy |

#### 7. Squint Test

| Question | Answer |
|----------|--------|
| Masses when blur? | Red hero, blue card rows |
| Weight balanced or lopsided? | BALANCED — hero vs cards |
| Dominant shapes? | Horizontal bands (hero, card rows) |
| Intentionally composed? | YES |

#### 8. Named Character

**"This layout feels like: A CURATED GALLERY SCROLL"**

---

### LAYOUT 2: GRID

**Screenshot:** exp6-layout-grid.png

#### 1. Section Analysis

| Question | Answer |
|----------|--------|
| How many distinct sections? | 2 (Filter bar, Grid) |
| What creates boundaries? | Whitespace + filter bar as divider |
| Are boundaries consistent? | YES |
| Would user understand logic? | YES — filter → results pattern |
| KortAI comparison? | SIMILAR — KortAI uses filters above grid |

#### 2. Multi-Axis Movement

| Question | Answer |
|----------|--------|
| Which sections horizontal scroll? | None |
| Which vertical scroll? | Entire grid |
| Which static? | Filter bar (sticky) |
| Pattern? | Pure vertical (V only) |
| Intentional or accidental? | INTENTIONAL — archive browsing pattern |
| Axis switching: natural or disorienting? | N/A — single axis |

#### 3. Compartmentalization

| Question | Answer |
|----------|--------|
| How is content grouped? | By grid position (implied by filter) |
| What determines membership? | Category tags |
| Groups visually distinct? | NO — all cards treated equally |
| Feels: RIGID / FLUID / ORGANIC? | RIGID — strict grid enforces structure |
| Can user predict content location? | NO — depends on filter selection |

#### 4. Density Distribution

| Question | Answer |
|----------|--------|
| Where highest? | Grid area (6 cards visible) |
| Where lowest? | Filter bar |
| Intentional? | YES — dense archive for scanning |
| Adequate breathing points? | ADEQUATE — 32px gaps |
| Density FLOW or JUMP? | UNIFORM — consistent density throughout grid |

#### 5. Rhythm

| Question | Answer |
|----------|--------|
| Rhythm present? | YES |
| Created by: repetition / alternation / progression? | REPETITION only (3x2 grid) |
| Feels: MUSICAL / MECHANICAL / CHAOTIC? | MECHANICAL — perfect grid regularity |
| Supports or fights consumption? | SUPPORTS scanning, but feels less dynamic |

#### 6. Card-to-Page

| Question | Answer |
|----------|--------|
| Cards feel like PARTS or ISOLATED UNITS? | PARTS — grid creates collection |
| Card size relates to section width? | YES — 3 columns with consistent gutters |
| Card internal structure echoes page structure? | YES — both use columnar organization |

#### 7. Squint Test

| Question | Answer |
|----------|--------|
| Masses when blur? | Filter bar thin, grid mass below |
| Weight balanced or lopsided? | BOTTOM-HEAVY — grid dominates |
| Dominant shapes? | Grid of rectangles |
| Intentionally composed? | YES — archive feel |

#### 8. Named Character

**"This layout feels like: A FUNCTIONAL ARCHIVE"**

---

### LAYOUT 3: MIXED DENSITY

**Screenshot:** exp6-layout-mixed.png

#### 1. Section Analysis

| Question | Answer |
|----------|--------|
| How many distinct sections? | 4 (Featured hero, More Work h-scroll, Archive grid, Footer) |
| What creates boundaries? | Section titles + whitespace + layout change |
| Are boundaries consistent? | YES — all sections have title headers |
| Would user understand logic? | YES — decreasing prominence (featured → more → archive) |
| KortAI comparison? | MORE DYNAMIC than KortAI — mixed layout modes |

#### 2. Multi-Axis Movement

| Question | Answer |
|----------|--------|
| Which sections horizontal scroll? | "More Work" section |
| Which vertical scroll? | Page + Archive grid |
| Which static? | Featured hero |
| Pattern? | STATIC → H-SCROLL → V-GRID |
| Intentional or accidental? | INTENTIONAL — varied browsing modes |
| Axis switching: natural or disorienting? | NATURAL — clear visual differentiation |

#### 3. Compartmentalization

| Question | Answer |
|----------|--------|
| How is content grouped? | By prominence (featured > more > archive) |
| What determines membership? | Editorial curation |
| Groups visually distinct? | YES — different layouts for each |
| Feels: RIGID / FLUID / ORGANIC? | ORGANIC — natural hierarchy flow |
| Can user predict content location? | YES — importance decreases as you scroll |

#### 4. Density Distribution

| Question | Answer |
|----------|--------|
| Where highest? | Archive grid (2 large cards) |
| Where lowest? | Featured hero (image + text) |
| Intentional? | YES — breathing room for featured, density for archive |
| Adequate breathing points? | YES — spacers between all sections |
| Density FLOW or JUMP? | FLOW — gradual transition |

#### 5. Rhythm

| Question | Answer |
|----------|--------|
| Rhythm present? | YES — strong |
| Created by: repetition / alternation / progression? | PROGRESSION (featured → more → archive) |
| Feels: MUSICAL / MECHANICAL / CHAOTIC? | MUSICAL — dynamic composition |
| Supports or fights consumption? | SUPPORTS — guides attention naturally |

#### 6. Card-to-Page

| Question | Answer |
|----------|--------|
| Cards feel like PARTS or ISOLATED UNITS? | PARTS — different treatments for different contexts |
| Card size relates to section width? | YES — featured large, more medium, archive large |
| Card internal structure echoes page structure? | YES — hierarchy within mirrors hierarchy across |

#### 7. Squint Test

| Question | Answer |
|----------|--------|
| Masses when blur? | Large hero, medium h-scroll, large archive |
| Weight balanced or lopsided? | BALANCED — varied but composed |
| Dominant shapes? | Progressively denser horizontal bands |
| Intentionally composed? | YES — strongest compositional intent |

#### 8. Named Character

**"This layout feels like: A MAGAZINE HOMEPAGE"**

---

### LAYOUT 4: VERTICAL STREAM

**Screenshot:** exp6-layout-vertical.png

#### 1. Section Analysis

| Question | Answer |
|----------|--------|
| How many distinct sections? | 1 (continuous stream) |
| What creates boundaries? | Horizontal rules between entries |
| Are boundaries consistent? | YES — identical dividers |
| Would user understand logic? | YES — chronological feed |
| KortAI comparison? | DIFFERENT — KortAI doesn't use stream layout |

#### 2. Multi-Axis Movement

| Question | Answer |
|----------|--------|
| Which sections horizontal scroll? | None |
| Which vertical scroll? | Everything |
| Which static? | None |
| Pattern? | Pure vertical (V only) |
| Intentional or accidental? | INTENTIONAL — focused reading |
| Axis switching: natural or disorienting? | N/A — single axis |

#### 3. Compartmentalization

| Question | Answer |
|----------|--------|
| How is content grouped? | Individual entries |
| What determines membership? | N/A — no grouping |
| Groups visually distinct? | N/A |
| Feels: RIGID / FLUID / ORGANIC? | FLUID — continuous scroll |
| Can user predict content location? | YES — chronological order |

#### 4. Density Distribution

| Question | Answer |
|----------|--------|
| Where highest? | Image areas |
| Where lowest? | Between entries (dividers) |
| Intentional? | YES — focus on individual pieces |
| Adequate breathing points? | YES — generous spacing between entries |
| Density FLOW or JUMP? | PULSE — alternating dense (card) and sparse (divider) |

#### 5. Rhythm

| Question | Answer |
|----------|--------|
| Rhythm present? | YES |
| Created by: repetition / alternation / progression? | REPETITION (card-divider-card) |
| Feels: MUSICAL / MECHANICAL / CHAOTIC? | MUSICAL — steady reading rhythm |
| Supports or fights consumption? | SUPPORTS — focused, immersive reading |

#### 6. Card-to-Page

| Question | Answer |
|----------|--------|
| Cards feel like PARTS or ISOLATED UNITS? | ISOLATED UNITS — each is a complete entry |
| Card size relates to section width? | YES — full width of content column |
| Card internal structure echoes page structure? | YES — vertical stacking |

#### 7. Squint Test

| Question | Answer |
|----------|--------|
| Masses when blur? | Alternating image blocks and text |
| Weight balanced or lopsided? | CENTERED — single column |
| Dominant shapes? | Wide horizontal rectangles (16:9 images) |
| Intentionally composed? | YES — journal/blog aesthetic |

#### 8. Named Character

**"This layout feels like: A DESIGN JOURNAL"**

---

## DENSITY ORGANIZATION ANALYSIS

### Layout 1: Horizontal Scroll

**Vertical Pattern:**
- Top: LOW (hero text)
- Middle: HIGH (card rows)
- Bottom: HIGH (card rows)
- Pattern: INCREASING then UNIFORM

**Compartment Analysis:**
| # | Name | Boundary Type | Internal Density |
|---|------|---------------|------------------|
| 1 | Hero | Visual (color) | LOW |
| 2 | Featured | Spatial (whitespace) | MEDIUM-HIGH |
| 3 | Archive | Spatial (whitespace) | MEDIUM-HIGH |

**Organized Density Score:** 21/25

---

### Layout 2: Grid

**Vertical Pattern:**
- Top: LOW (filter bar)
- Middle: HIGH (grid)
- Bottom: HIGH (grid)
- Pattern: UNIFORM after filter

**Compartment Analysis:**
| # | Name | Boundary Type | Internal Density |
|---|------|---------------|------------------|
| 1 | Filters | Visual (background) | LOW |
| 2 | Grid | Spatial (gaps) | HIGH |

**Organized Density Score:** 19/25

---

### Layout 3: Mixed Density

**Vertical Pattern:**
- Top: MEDIUM (featured hero)
- Middle: MEDIUM (h-scroll)
- Bottom: MEDIUM-HIGH (archive grid)
- Pattern: PROGRESSIVE INCREASE

**Compartment Analysis:**
| # | Name | Boundary Type | Internal Density |
|---|------|---------------|------------------|
| 1 | Featured | Visual (size) | MEDIUM |
| 2 | More Work | Spatial + scroll | MEDIUM |
| 3 | Archive | Spatial (grid) | MEDIUM-HIGH |

**Organized Density Score:** 23/25 (HIGHEST)

---

### Layout 4: Vertical Stream

**Vertical Pattern:**
- Top: HIGH (card)
- Middle: HIGH (card)
- Bottom: HIGH (card)
- Pattern: PULSING (card-space-card)

**Compartment Analysis:**
| # | Name | Boundary Type | Internal Density |
|---|------|---------------|------------------|
| 1 | Entry 1 | Visual (divider) | HIGH |
| 2 | Entry 2 | Visual (divider) | HIGH |
| 3 | Entry N | Visual (divider) | HIGH |

**Organized Density Score:** 20/25

---

## RECOMMENDATION

**Primary Layout:** Layout 3 (Mixed Density)

**Why (perceptual):**
- Highest organized density score (23/25)
- Most compositionally dynamic
- Supports multiple browsing behaviors (admire featured, scan more, browse archive)
- Feels like "magazine homepage" — aligned with Paper Theme direction
- Best multi-axis movement pattern

**Secondary Layouts:**
- **Layout 1 (Horizontal Scroll)** — Good for curated collections
- **Layout 2 (Grid)** — Good for filterable archives
- **Layout 4 (Vertical Stream)** — Good for journal/blog content

**Card Design Validation:**
All 4 layouts work with the integrated card design. No layout-specific card modifications needed.

---

## KEY FINDINGS

### Finding 1: Mixed Density Creates Best Composition

**Perceptual Truth:** Combining hero, h-scroll, and grid in one page creates the most dynamic and organized composition. Variety in layout mode doesn't create chaos — it creates hierarchy.

**Test:** Does the page feel composed or random?
**Anti-pattern:** Using only one layout mode throughout

### Finding 2: Section Labels are Essential

**Perceptual Truth:** Clear section labels ("Featured", "More Work", "Archive") help users understand content organization. Without them, layout changes feel arbitrary.

**Test:** Would a user know what each section contains?
**Anti-pattern:** Changing layout modes without signaling

### Finding 3: Axis Switching Works When Signaled

**Perceptual Truth:** Switching from horizontal scroll to vertical grid is natural when visually signaled (different section treatment). Without signaling, it's disorienting.

**Test:** Does the axis switch feel intentional?
**Anti-pattern:** Hidden axis changes

### Finding 4: Card Design is Layout-Agnostic

**Perceptual Truth:** The integrated card (Image-Top + halftone + red italic) works in all 4 layouts without modification. This confirms the Layout Context Protocol findings.

**Test:** Does the card need layout-specific adjustments?
**Answer:** NO

---

## DECISION D-6-01: Layout Infrastructure Winner

**ID:** D-6-01.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Experiment 6 - Layout Infrastructure

**DECISION STATEMENT:** Layout 3 (Mixed Density) is the primary recommendation for portfolio pages. Layouts 1, 2, and 4 are valid alternatives for specific use cases.

**OPTIONS EVALUATED:**
| Option | Density Score | Character | Best For |
|--------|---------------|-----------|----------|
| 1: H-Scroll | 21/25 | Curated Gallery | Featured collections |
| 2: Grid | 19/25 | Functional Archive | Filterable archives |
| 3: Mixed | 23/25 | Magazine Homepage | Portfolio homepages |
| 4: Vertical | 20/25 | Design Journal | Blog/journal content |

**EVIDENCE CONSULTED:**
- Screenshots of all 4 layouts
- Sub-agent G complete analysis
- Density organization scoring

**REASONING CHAIN:**
1. Mixed Density scores highest on organized density (23/25)
2. Mixed Density creates dynamic composition through varied layout modes
3. Mixed Density supports multiple browsing behaviors
4. Mixed Density aligns with Paper Theme "magazine" direction
5. Card design works in all layouts — no constraints

**DECISION:** Layout 3 (Mixed Density) as primary, others as contextual alternatives
**CONFIDENCE:** HIGH
**LOCKED:** YES

---

## BLINDSPOT CHECK

### What I avoided examining:
1. **Mobile responsiveness** — All layouts were desktop only
2. **Loading performance** — Multiple layout modes may impact performance
3. **Content management** — How easy is it to populate these layouts?
4. **Edge cases** — What if there's only 1 project? Or 100?

### What I found when investigated:
The layouts assume reasonable content amounts (5-10 projects per section). Edge cases would need specific handling.

---

## JOURNAL ENTRY — EXPERIMENT 6

**What I expected to find:**
Expected one layout to clearly win, with others as fallbacks.

**What I actually found:**
Mixed Density is the best for portfolio homepages, but each layout has a valid use case. The layouts form a system, not alternatives.

**What surprised me:**
How well the card design works across all layouts. No modifications needed. The Layout Context Protocol results held true.

**How this changes my understanding:**
- Layout infrastructure is a SYSTEM of options, not one optimal choice
- Mixed density creates better composition than single-mode layouts
- Section labeling is essential for multi-mode pages
- Card design that works in all contexts is more valuable than optimized variants

---

*Document created: 2026-02-03*
*Browser verification: 2026-02-03*
*Status: COMPLETE — Findings documented, recommendation made*
