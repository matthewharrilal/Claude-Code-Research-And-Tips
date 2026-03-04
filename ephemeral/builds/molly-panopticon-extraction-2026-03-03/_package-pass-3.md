# Research Package -- Pass 3: HARDENING
## For Builder Pass 3 (HARDENING)

This is the FINAL pass before perceptual audit. Focus: defensive quality. Catch problems, integrate proven CSS, verify structural propositions. The page should be functionally complete from Passes 1-2. This pass is forensic, not creative.

**Soul reminder:** border-radius: 0, box-shadow: none, no gradients, no rgba alpha < 1.0. 3-category borders only (1px/3px/4px, ZERO 2px). Font trinity: Instrument Serif / Inter / JetBrains Mono. Locked palette. No dead space > 300px.

---

## 6. ANTI-PATTERNS -- RISK PROFILE FOR THIS BUILD

Scan the build for each anti-pattern below. Risk levels are profiled specifically for THIS content's 5-zone architecture and code-heavy structure.

| Anti-Pattern | Risk | WHY This Risk Level | CSS Mitigation |
|-------------|------|---------------------|----------------|
| **Callout Cacophony** | HIGH | This article has 8+ key insights, 5 philosophical warnings, 4 anti-pattern pairs, 3 critique-response dialogues, and multiple technical tips. Natural impulse: 15+ callouts. The Contour Map zone concentrates philosophy + warnings + critiques. At ~800px viewport, 3-4 callouts per screen is likely without intervention. | Select 6-8 highest-signal moments for full callout treatment (Essence: "meta-level outside" concept, "violent gap" quote. Warning: Goodhart's Law, self-imprisonment. Tip: tmux setup, cron pattern). Demote remaining to inline prose emphasis (`font-weight: 500`) or blockquotes. Cantillon's quotes are blockquotes NOT callouts -- they are terrain features, not alerts. Count callouts per 800px vertical slice; if > 2, demote lowest-priority. |
| **Code Wall** | HIGH | 10+ code blocks: bash launch scripts, tmux commands, cron jobs, 3 CLAUDE.md examples, correlation cron, directory trees. The Field Notes zone (Parts IV-V) concentrates most of them. Without intervention, dark code blocks stack back-to-back on warm tan background creating a wall. | Break code walls with explanatory prose between blocks. Maximum 2 consecutive code blocks without prose interruption. Buffer between code blocks: minimum 32px + prose paragraph. Group related code into single blocks with inline comments rather than separate blocks. `pre + pre { margin-top: 48px; }` |
| **Uniform Density** | HIGH | 17 parts of relatively uniform length. Without the 5-zone architecture, the builder applies uniform 48px spacing throughout, creating metronomic rhythm. The cartographic metaphor DEMANDS density variation: sparse datum, structured grid, dense notes, compressed contour, opening projection. | Deploy density variation per zone: Datum 64-80px, Grid 40-48px, Notes 32-40px, Contour 32-48px variable, Projection 48-64px. Measure section padding across zones -- if all values within 8px of each other, density is uniform. Apply the TC brief arc. |
| **Grid for Sequential Content** | HIGH | The 4-phase tutorial (Phase 1 Core Setup --> Phase 2 Automation --> Phase 3 Correlation --> Phase 4 Refinement) has ordering words "Day 1," "Week 1," "Week 2," "Ongoing." Grid would destroy the temporal progression. | Signal words test: "then," "next," "step," "first" = grid contraindicated. Use vertical layout with sequential markers for tutorial phases. Grid is ONLY appropriate for the 8-domain taxonomy (which IS parallel: "domains," "simultaneously," "independently"). |
| **Traffic-Light Color Adjacency** | MEDIUM | Warning content (Goodhart's Law, self-imprisonment) sits near empowerment content ($2,000 savings, capability expansion). Green tip callout directly next to coral warning callout creates Christmas-tree effect. Risk increases in Contour Map where warnings cluster. | Separate colored callouts with minimum 48px neutral spacing. `.callout + .callout { margin-top: 48px; }` Interpose prose between callouts of different accent colors. NEVER: green callout immediately followed by coral/red callout. |
| **Structural Overload** | MEDIUM | TC brief identifies several non-standard candidates: 8-domain grid, comparison table, bilateral gaze, anti-pattern cards, correlation diagram. If builder creates non-standard layout for each, 5+ different spatial logics destroy the reader's mental model. | Maximum 2 non-standard spatial sections per page. The 8-domain taxonomy IS the structural highlight (Proposition 1). One additional section may get non-standard treatment (Proposition 2: bilateral gaze, or anti-pattern cards). All other sections: standard vertical. Count `display: grid` sections (excluding simple 1-column responsive). If > 2, reduce. |
| **Semi-Transparent Backgrounds** | MEDIUM | Every builder in every prior wave found opacity < 1.0 violations. The 5-zone background arc (#FEF9F5 --> #FFFFFF --> #FAF5ED --> #1A1A1A --> #FEF9F5) creates many transitions where rgba() is tempting for subtle intermediate steps. The dark Contour Map zone is especially risky -- builders use rgba(0,0,0,0.04) for code block backgrounds. | Binary rule: opacity === 1.0 on ALL visual elements. NO rgba() with alpha < 1. Use fully opaque alternatives from the palette. `code:not(pre code) { background: var(--color-border-subtle); }` = #F0EBE3, not rgba(0,0,0,0.04). Search CSS for `rgba(` and `opacity:`. |
| **Whitespace Void** | MEDIUM | The Datum Point zone (sparse, 64-80px padding) and the BREATHING transition (Notes --> Contour Map, 64px + 48px) could create 300px+ dead space if adjacent padding values stack. | Measure TOTAL gap at every zone boundary: padding-bottom + margin-bottom + padding-top of next zone. Flag any sum > 200px. Maximum dead space between content: 300px (soul constraint). The Datum Point's generous spacing must be filled with CONTENT (provocation, pull quote), not empty cream. |

**CHECK PROCEDURE (execute in this order):**
1. **SCAN** for soul violations: grep CSS for `border-radius`, `box-shadow`, `rgba(`, `linear-gradient`, `2px`
2. **SCAN** for whitespace voids: measure total gap at every zone boundary. Flag any sum > 200px.
3. **SCAN** for callout density: count callout elements per 800px vertical slice. Flag if > 2.
4. **SCAN** for code walls: count consecutive `<pre>` elements. Flag if > 2 without intervening prose.
5. **SCAN** for velocity stacking: list all heavy components in order. Flag any two consecutive SLOW without FAST buffer.
6. **SCAN** for uniform density: compare section padding across zones. Flag if all values within 8px.
7. **VERIFY** footer present with 3px border-top -- page must NOT trail off into empty cream.
8. **VERIFY** each zone background produces >= 15 RGB max-channel delta at boundaries.

---

## 7. PROVEN CSS PATTERNS

These CSS patterns produced rich output in validated explorations. Integrate directly into this build, adapting property names to the cartographic survey station vocabulary.

### Pattern 1: Zone Transition via Border + Atmospheric Shift

From DD-004 (Layers) + CD-005 (Multi-Axis Transition), validated across 4+ case studies:
```css
/* Zone boundary -- BRIDGE transition (Datum --> Survey Grid, Contour Map --> Projection) */
.zone-transition--bridge {
  border-top: 4px solid var(--color-text);    /* Structural survey baseline */
  padding-top: 48px;
  margin-top: 0;                               /* Border absorbs visual gap */
}
/* Zone boundary -- SMOOTH transition (Survey Grid --> Field Notes) */
.zone-transition--smooth {
  border-top: 1px solid var(--color-border);   /* Thin contour line */
  padding-top: 40px;
}
/* Zone boundary -- BREATHING transition (Field Notes --> Contour Map) */
.zone-transition--breathing {
  border-top: none;                             /* No border -- the bg inversion IS the signal */
  padding-top: 48px;
  padding-bottom: 64px;                         /* Maximum breathing room */
}
```
**When to use:** At every zone boundary. Match transition type to the TC brief specification: Datum-->Grid = BRIDGE, Grid-->Notes = SMOOTH, Notes-->Contour = BREATHING, Contour-->Projection = BRIDGE.

### Pattern 2: Dense Zone Typography with CRESCENDO Compression

From AD-F-006, validated 3 stages:
```css
/* Sparse zone */ .zone--sparse { font-size: 16px; line-height: 1.8; letter-spacing: 0; }
.zone--sparse h2 { font-size: 32px; font-weight: 500; letter-spacing: -0.025em; }
/* Dense zone */ .zone--dense { font-size: 15px; line-height: 1.6; letter-spacing: -0.005em; }
.zone--dense h2 { font-size: 22px; font-weight: 500; letter-spacing: -0.015em; }
```
**When to use:** All zones. Typography compression IS the CRESCENDO -- compresses Datum to Contour Map, releases in Projection.

### Pattern 3: Dark-Zone Code Block (Cave Wall Inscription)

From COMP-F-009 + S4 dark code convention:
```css
/* Dark zone: dark-on-dark */
.zone--contour-map .code-block { background: #2A2A2A; border: 1px solid #3A3A3A; color: #E0E0E0; }
/* Light zones: standard dark-on-light */
.code-block { background: var(--color-text); color: #FAFAF5; border: 3px solid var(--color-text);
  padding: 16px; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5; }
.code-block__header { background: #27272A; padding: 8px 16px; font-size: 12px;
  color: var(--color-text-secondary); border-bottom: 1px solid #3A3A3A; }
```
**When to use:** ALL code blocks. 2-zone structure (header + body) is universal. Dark-on-dark in Contour Map. Dark-on-warm in Field Notes for maximum contrast.

### Pattern 4: Callout Family DNA with Semantic Color

From COMP-F-014 + DD-F-014 (max 2 per viewport):
```css
.callout { border-left: 4px solid; padding: 16px 20px; margin: 32px 0; }
.callout__label { font-size: 12px; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.05em; margin-bottom: 8px; }
.callout__body { font-size: 16px; line-height: 1.7; }
/* Color differentiates function -- structure is shared DNA */
.callout--essence  { border-color: var(--color-accent-purple); }
.callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }
.callout--warning  { border-color: var(--color-warning); }
.callout--tip      { border-color: var(--color-success); }
.callout--info     { border-color: var(--color-accent-blue); }
```
**When to use:** 6-8 highest-signal moments. Essence: "meta-level outside system." Warning: Goodhart, self-imprisonment. Tip: tmux, cron. Max 2 per 800px viewport.

### Pattern 5: Prose Line Length on Wide Container

From AD-PA-CONVENTIONS C-20 (prose constraint on wide container):
```css
/* 960px container accommodates grids; prose needs narrower reading corridor */
.page-container { max-width: 960px; margin: 0 auto; padding: 0 24px; }
p { max-width: 70ch; }                          /* Prose reading corridor */
pre, .survey-grid, table { max-width: 100%; }   /* Code, grids, tables use full width */
```
**When to use:** Global. The 960px container gives the Survey Grid's bento layout room for 4 columns while keeping philosophy prose in Datum Point and Contour Map readable at 70ch. Code blocks, tables (Panopticon vs Gas Town, production automations), and the domain grid use full container width.

### Pattern 6: Responsive Breakpoint Strategy

From AD-CONVENTION-SPEC S15 + DM-002:
```css
/* Tablet: 768px */
@media (max-width: 768px) {
  .page-container { padding: 0 16px; }
  .survey-grid { grid-template-columns: 1fr; }  /* Domain grid linearizes */
  .bilateral-provocation { grid-template-columns: 1fr; } /* Bilateral stacks */
  .zone--datum-point { padding: 48px 0; }        /* Reduce zone spacing */
  h2 { font-size: 24px; }
}
/* Mobile: 480px */
@media (max-width: 480px) {
  .page-container { padding: 0 12px; }
  .zone--datum-point { padding: 32px 0; }
  h2 { font-size: 20px; }
  .pull-quote { font-size: 1.1rem; }
}
```
**When to use:** After all desktop styling is complete. Test at 1440px (desktop), 768px (tablet), and 480px (mobile). The domain grid linearizes first. Bilateral structures stack. Zone spacing reduces proportionally.

---

## 8. STRUCTURAL PROPOSITIONS

These are hypotheses about how the cartographic survey station metaphor should manifest visually. Test each against your build. If the build does not embody a proposition, adjust CSS to move toward it.

**1. Zone boundaries should be FELT, not decorated:**
The transition between zones should create a perceptual shift (background color, typography weight, and spacing ALL change together) without heavy visual dividers. The atmospheric shift IS the boundary -- like crossing from one terrain type to another on a topographic map.
   - Evidence check: Cover the border at each zone boundary. Can you still feel the transition from background + typography change alone?
   - If absent: Add background color shift + typography weight change + spacing modulation at the boundary. The border is secondary; the atmosphere is primary.

**2. The Contour Map should feel like entering a cave:**
At the Notes-to-Contour transition, the reader should perceive a dramatic atmospheric shift -- dark ground, inverted text, compressed spacing. Cantillon's warm quotes should feel like lamps in this cave. The effect should be immersive, not jarring.
   - Evidence check: Scroll from Field Notes into Contour Map at normal reading speed. Does the transition feel like gradual descent (correct) or abrupt interruption (wrong)?
   - If jarring: Increase the BREATHING transition spacing (64px+ gap). Consider cooling the Field Notes background slightly in its final subsection. Reduce the number of warm elements in the dark zone to 2-3 maximum.

**3. Density should be perceptible at 3+ scales simultaneously:**
Zoom to 50% -- the page should show a clear sparse/dense rhythm across zones (page scale). Zoom to 100% -- the same rhythm should be visible within individual zones (section scale). Zoom to 150% -- the same rhythm should appear within components (component scale: callout label sparse, body dense; code header sparse, code body dense).
   - Evidence check: Screenshot at 50%, 100%, 150%. Density variation visible at all three.
   - If absent: Increase padding contrast between sparse zones (64px+) and dense zones (24-32px). Increase the callout label/body distinction (sparse label: 8px padding, dense body: 16px padding).

**4. The 8-domain grid should be the ONLY moment of spatial revelation:**
The grid should feel like a controlled departure from editorial vertical flow -- a moment where the reader steps back to see all survey quadrants simultaneously. Before and after the grid, vertical flow should resume immediately. No other section should break the editorial corridor.
   - Evidence check: Count sections with `display: grid` (excluding responsive single-column). Should be exactly 1 (the domain taxonomy). If 2, check whether the second is justified (bilateral gaze is optional). If 3+, reduce.
   - If the grid feels continuous with surrounding content: Add 48px breathing space above and below the grid. Add a hemisphere label ("Work Domains" / "Life Domains") above each row to signal structural intent.

**5. The page should end with cartographic closure -- the survey legend:**
The final section (Mental Model Summary, Panopticon vs Gas Town comparison) functions as the survey legend. It should feel compact, precise, and complete -- like the margin notes on a finished map. The footer's 3px border-top is the final survey baseline: "The map is drawn."
   - Evidence check: Scroll to the bottom. Does the page end with a definitive visual terminus (3px border, compact summary) or does it trail off into empty cream?
   - If trailing: Add footer with 3px border-top at container width. Place the comparison table and summary above the footer. The Mental Model Summary should be visually compact (smaller font, tighter spacing) -- a legend, not a final chapter.

---

## Agent Log: Synthesizer (Pass 3)
- Anti-patterns risk-profiled: 8 (4 HIGH: callout cacophony, code wall, uniform density, grid for sequential; 4 MEDIUM: traffic-light adjacency, structural overload, semi-transparent backgrounds, whitespace void)
- CSS patterns included: 6 (zone transitions, CRESCENDO typography, dark-zone code blocks, callout family DNA, prose line length, responsive breakpoints)
- Propositions defined: 5 testable hypotheses (zone boundaries felt not decorated, cave effect, 3-scale density, single spatial revelation, cartographic closure)
- Output size: ~180 lines
