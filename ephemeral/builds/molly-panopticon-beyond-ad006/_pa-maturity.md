# Visual Maturity Audit — _build-enriched-2.html

**Auditor:** PA-Maturity
**File:** `_build-enriched-2.html`
**Total CSS:** ~2,558 lines
**Total HTML+JS:** ~1,192 lines

---

## 1. Proportional Confidence — Score: 5/5

**Evidence:**
- The entire page is built on a "corridor" width progression system with non-trivial proportional relationships: `--corridor-narrow: 520px`, `--corridor-threshold: 680px`, `--corridor-open: 960px` (lines 65-67). These are not arbitrary — the ratios approximate 1:1.3:1.85.
- The asymmetry split uses a `7fr 3fr` grid (line 486) — a 70/30 split, deliberately asymmetric. The inverted asymmetry flips to `3fr 7fr` (line 573), creating a power-reversal that IS the content.
- Goodhart split uses `3fr 2fr` (line 1288) — 60/40, different from the asymmetry ratio.
- Mundane reveal uses `1fr 2fr` (line 684) — a 1/3-to-2/3 proportion.
- Build phases use progressive widening: 600px, 720px, 840px, 960px (lines 1537-1540) — linear progression encoding the conceptual "opening."
- Footer uses `1fr 1fr` — intentional symmetry for neutral metadata.
- No `1:1` splits are used for content with inherent asymmetry. Every proportion is content-reasoned.

**Issues:** None. This is exemplary proportional work.

---

## 2. Z-axis Mastery — Score: 5/5

**Evidence:**
- **Fixed elements:** Two persistent positioned elements — the corridor progress rail (fixed, left edge, z-index 200, lines 1774-1792) and the corridor witness nav (fixed, right edge, z-index 100, lines 1798-1837).
- **Pseudo-element overlays:** `.zone--window::before` creates a subtle side-border overlay with `z-index: 2` and `pointer-events: none` (lines 240-252).
- **Layered depth encoding:** The asymmetry component has a `position: relative` container with a `::after` pseudo-element positioned at `bottom: 12px; right: 12px` for the "THEY SEE YOU" whisper text (lines 503-513). This creates depth through overlapping planes.
- **Corridor rail fill** animates on scroll (either via CSS `scroll-timeline` or JS fallback), creating a temporal z-axis indicator (lines 2509-2520).
- **Self-observation module** (lines 1844-1922) is a distinct visual plane — dark background breaking the content flow, z-indexed with its own internal grid.
- **Self-referential block** (lines 2377-2403) sits at a different visual plane — dark background, centered, breaks the flow to create meta-awareness.

**Issues:** None. Multiple z-planes operating simultaneously without confusion.

---

## 3. Temporal Responsiveness — Score: 5/5

**Evidence:**
- **Scroll-driven progress rail:** Uses `animation-timeline: scroll()` with `@supports` fallback to JS (lines 2509-2520, 3640-3671). The left-edge rail fills as you scroll.
- **Self-observation module updates live:** JS tracks scroll depth, sections visited, corridor width, and current zone in real-time (lines 3662-3725). The page literally surveys you as you survey it.
- **Corridor witness pips** light up progressively as sections enter the viewport (lines 3674-3688).
- **Hover transitions throughout:** Every interactive element has `transition` properties — doors (line 747), asymmetry panels (line 497), isolation cells (line 965), antipatterns (line 1592), table rows (line 2540), sightlines (line 1378).
- **Tab switching for domain configs** (lines 3731-3745) — temporal interaction revealing different content states.
- **`<details>` elements** for anti-patterns (lines 3353+) — native browser progressive disclosure.
- **Hover enrichment on inverted asymmetry** (lines 2527-2533) — the "individual" side brightens while institutional dims, encoding the power shift.

**Issues:** None. Time is a first-class design dimension.

---

## 4. Spatial Invention — Score: 5/5

**Evidence:**
- **The Corridor System** (lines 149-172) is the central spatial invention: content width itself IS the argument. Confined (520px) → Widening (680px) → Open (960px) → Dissolved (960px, wider padding). This is not decoration — the narrowing/widening IS the philosophical argument about institutional constraint vs. personal liberation.
- **Zone system** (lines 178-278) — 9+ distinct spatial zones with different background colors, padding scales, border treatments, and line-height/letter-spacing tuning. Each zone has its own typographic rhythm.
- **Asymmetry split** (lines 477-612) — a 7:3 grid that flips to 3:7, encoding the power reversal physically.
- **8-Doors domain grid** (lines 737-858) — 2x4 grid of domain "rooms," each with header/room sub-layout, color-coded by work/life taxonomy.
- **Isolation diagram** (lines 935-1007) — 4-column grid of cells + vertical list of principles below.
- **Handoff bridge** (lines 1018-1074) — 3-column source/connector/target layout encoding data flow.
- **Correlation diagram** (lines 1331-1398) — top box + 4-column sightline grid below, encoding hierarchical observation.
- **Skeptic flow** (lines 2305-2353) — 3-column primary/arrow/skeptic layout encoding adversarial reasoning.
- **Extension hub-spoke** (lines 2409-2466) — 3-column feed grids converging to a centered hub.
- **Build phases** (lines 1501-1561) — vertical timeline with progressive width expansion encoding the corridor metaphor one more time.
- **Breathing zone** (lines 1983-2031) — horizontal line with diamond marker, creating visual breathing space between content zones.

**Issues:** None. This page invents at least 10 distinct spatial layouts, each serving content meaning. No layout is repeated without reason.

---

## 5. Semantic Restraint — Score: 4/5

**Evidence:**
- Design tokens are well-organized: color, typography, spacing, borders all tokenized in `:root` (lines 25-91).
- Every CSS custom property earns its place — `--corridor-narrow/threshold/open` directly encode the metaphor. `--zone-*` colors differentiate content regions. `--border-structural/accent/micro` encode hierarchy.
- The 3-font stack (display/body/mono) maps to 3 voices, each with clear semantic purpose.
- Hover states are restrained — subtle background/border transitions, not flashy.
- No gradients, no shadows, no decorative imagery. The decoration IS the content structure.

**Deduction (-1):**
- A few places have slight over-declaration: `.asymmetry__institution:hover` changes to `#222` (line 500), and `.asymmetry--inverted .asymmetry__institution:hover` changes to `#111` (line 2528). These are hard-coded values that duplicate the intent rather than using a token. Similarly, border colors use raw `#333` in several dark-zone contexts (lines 355, 578, 962, 1122, 1854, 1913, 1975) rather than a `--color-dark-border` token.
- The door hover effect (`background: var(--bg-callout-danger)` on door header hover, line 766) seems slightly off-topic — using a "danger" semantic for a neutral hover.

---

## 6. Typographic Authority — Score: 5/5

**Evidence:**
- **Three-voice system explicitly declared:** `.voice-insight` (serif, italic), `.voice-analysis` (sans-serif), `.voice-machine` (monospace) — lines 283-294. This is a named, intentional typographic system.
- **Font stacks:** `Instrument Serif` for display/philosophical, `Inter` for analytical body, `JetBrains Mono` for code/machine elements — line 8.
- **Heading hierarchy:** h1 = 2.5rem serif italic, h2 = 2rem serif italic, h3 = 1.5rem serif italic, h4 = 1.125rem sans-serif 600 weight (lines 296-328). Clear size/family progression.
- **Section indicators:** Monospace, 0.75rem, uppercase, letter-spacing 0.1em (lines 341-361) — the machine voice for structural navigation.
- **Zone-specific typographic rhythm:** `--ls-philosophy: -0.025em`, `--ls-architecture: -0.01em`, `--ls-code: 0em`, `--ls-mono-label: 0.1em` (lines 80-83). `--lh-philosophy: 1.8`, `--lh-architecture: 1.6`, `--lh-code: 1.5` (lines 84-86). Different zones breathe differently.
- **Epigraph text:** 1.25rem, serif italic, line-height 1.6 — distinct from body and headings.
- **Violent-gap quote:** 1.75rem, serif italic, letter-spacing -0.025em (lines 653-662) — the largest pull-quote treatment.
- **Final wisdom:** 2.75rem, serif italic, letter-spacing -0.03em (lines 1478-1486) — the tightest tracking for maximum gravity.
- **Multiple distinct label treatments:** `.door__path` (mono, 0.8125rem, 500 weight, colored), `.door__name` (sans, 0.75rem, uppercase), `.door-category` (mono, 0.6875rem, 600 weight, uppercase, bordered pill), `.stats-bar__label` (mono, 0.625rem, uppercase), etc.

**Issues:** None. This is a mature typographic system with genuine voice differentiation.

---

## 7. Border Architecture — Score: 5/5

**Evidence:**
- **Three-tier border system explicitly tokenized:** `--border-structural: 4px`, `--border-accent: 3px`, `--border-micro: 1px` (lines 75-77). Weight encodes importance.
- **Structural borders (4px):** Used for the highest-importance boundaries — corridor walls on the institutional zone (line 191-192), threshold zone top/bottom (line 201-202), violent-gap boundaries (line 642-643), asymmetry divider (line 494), build-phase left borders (line 1508). These are load-bearing walls.
- **Accent borders (3px):** Used for secondary divisions — page-header bottom (line 393), zone separators (lines 217, 226, 265, 272), epigraph left border (line 451), callout left borders (line 1157), code block borders (line 1083), stats-bar (line 1675), self-observation (line 1847), footer top (line 1931). These are doorframes.
- **Micro borders (1px):** Used for subtle separation — door card borders (line 745), door-header bottom (line 758), principles grid internal divisions (lines 875, 885), isolation-cell borders (line 962), handoff-bridge internal borders (lines 1053-1054), table row dividers (line 1235), self-observation internal grid (lines 1883). These are details.
- **Color encoding domains:** `--color-primary` (red) for power/danger/primary, `--accent-work` (blue) for work domains, `--accent-life` (green) for life domains, `--accent-warning` (amber) for warnings, `--accent-essence` (purple) for philosophical pullquotes. Door left-borders use domain-specific colors: `.door--work` gets blue border, `.door--life` gets green border (lines 819-833).

**Issues:** None. This is a rigorous, hierarchical border system that communicates meaning through weight and color.

---

## 8. Content-Semantic Naming — Score: 5/5

**Evidence:**
- Class names derive from content meaning, not position:
  - `.corridor--confined`, `.corridor--widening`, `.corridor--open`, `.corridor--dissolved` — spatial metaphor states
  - `.zone--institutional`, `.zone--threshold`, `.zone--lit`, `.zone--domain-wing`, `.zone--machine-room`, `.zone--window`, `.zone--open-sky` — content-derived zone names
  - `.asymmetry__institution`, `.asymmetry__individual` — the two sides of the power split
  - `.violent-gap` — named after the key content phrase
  - `.mundane-reveal` — named after the content event
  - `.door`, `.door__header`, `.door__room`, `.door__feeds` — the domain taxonomy metaphor
  - `.isolation-cell`, `.isolation-diagram`, `.isolation-principle` — isolation architecture
  - `.handoff-bridge` — the cross-domain handoff concept
  - `.goodhart-split` — named after the philosophical concept
  - `.correlation-sightlines` — named after the observation metaphor
  - `.self-observation`, `.self-referential`, `.corridor-witness` — meta-awareness components
  - `.voice-insight`, `.voice-analysis`, `.voice-machine` — typographic voices
  - `.epigraph`, `.essence-pullquote`, `.final-wisdom` — content-semantic roles
  - `.breathing-zone`, `.corridor-expand` — spatial transition concepts
  - `.critique__speaker`, `.critique__handle`, `.critique__role` — dialogue structure
  - `.skeptic-flow__primary`, `.skeptic-flow__skeptic` — adversarial reasoning roles

- No positional names like `.left-panel`, `.right-sidebar`, `.top-section`. No presentational names like `.big-text`, `.red-border`.

**Issues:** None. Every class name is derived from the content's conceptual vocabulary.

---

## 9. Responsive Intelligence — Score: 5/5

**Evidence:**
- **768px breakpoint** (lines 2078-2238) handles every layout:
  - All corridor widths → `max-width: 100%` with reduced padding
  - Title sizes scale down proportionally (2.5rem → 1.75rem, etc.)
  - Asymmetry grid → single column, border direction changes from `border-right` to `border-bottom` (lines 2101-2120)
  - Inverted asymmetry reorders with `order` property — individual side (now empowered) shows first on mobile (lines 2108-2120)
  - Door pairs → single column (line 2122)
  - Principles grid → single column, removes right borders (lines 2123-2124)
  - Isolation cells → 2x4 grid (line 2125)
  - Mundane reveal → stacked (line 2126)
  - Goodhart split → stacked with directional border change (lines 2133-2138)
  - Handoff bridge → stacked with connector border adjustments (lines 2140-2147)
  - Correlation sightlines → 2x2 (line 2149)
  - Stats bar → vertical stack (lines 2151-2158)
  - Footer → single column (lines 2160-2163)
  - Self-observation → 2x2 grid with appropriate border adjustments (lines 2197-2207)
  - Skeptic flow → stacked (lines 2209-2218)
  - Extension feeds → stacked (line 2220)
- **Corridor concept adapts for mobile:** Since width progression is lost, border intensity replaces it — build-phase left borders increase from 3px → 4px → 5px → 6px with color change (lines 2192-2195). The corridor metaphor survives the breakpoint.
- **Fixed elements hidden on mobile:** Corridor witness and rail disappear (lines 2170-2171) — correct, as they would obscure mobile content.
- **Zone padding reduces** for mobile (line 2175, 2177).
- **Container queries** on door-pair (lines 2477-2501) — doors adapt to their container width, not just viewport width. Uses `container-type: inline-size`.
- **Reduced motion** media query (lines 2244-2250) — respects user preferences.

**Issues:** None. Mobile gets an equivalent, thoughtfully adapted experience.

---

## 10. Compositional Layering — Score: 5/5

**Evidence:**
Multiple simultaneous visual systems operating together:
1. **The Corridor System** (width progression) — operates continuously from 520px to 960px
2. **The Zone System** (background color/padding) — 9+ zones creating spatial rhythm
3. **The Border Hierarchy** (4px/3px/1px) — structural weight encoding throughout
4. **The Three-Voice Typography** (serif/sans/mono) — operating in every section
5. **The Zone-Specific Rhythm** (letter-spacing + line-height per zone type) — philosophical zones breathe differently from architectural zones
6. **The Domain Color System** (red/blue/green/amber/purple) — semantic accents throughout
7. **The Progress/Witness System** (fixed rail + pip navigation) — persistent spatial awareness layer
8. **The Self-Observation System** (live scroll data) — recursive meta layer
9. **The Hover Interaction Layer** — consistent but differentiated hover behaviors across all components
10. **The Dark/Light Zone Alternation** — tonal rhythm creating pacing

These systems are independent but coordinated. The corridor width system operates regardless of which zone you're in. The border hierarchy applies in both dark and light zones. The typography voices appear in every spatial context. The hover layer is consistent but zone-aware.

**Issues:** None. This is genuine multi-system composition.

---

## 11. Micro-Perceptual Calibration — Score: 4/5

**Evidence:**
- **Zone backgrounds are perceptibly distinct:** `#1A1A1A` (institutional) vs `#2A2220` (threshold) = 16 RGB units warm shift — perceptible. `#FEF9F5` (lit) vs `#F5EFE6` (domain-wing) = 9-13 units — perceptible. `#EDE7DB` (machine-room/breathing) vs `#F5EFE6` (domain-wing) = 8-11 units — at the edge but perceptible due to warm tones.
- **Letter-spacing differences are perceptible:** `-0.025em` (philosophy) vs `-0.01em` (architecture) vs `0em` (code) = clear steps. `0.1em` for mono labels is distinctly different.
- **Line-height differences:** `1.8` (philosophy) vs `1.6` (architecture) vs `1.5` (code) — perceptible at body text sizes.
- **Border weights:** 4px vs 3px vs 1px — all clearly visible and distinguishable.
- **Font sizes have clear steps:** No sub-perceptual size differences. Smallest step is from 0.6875rem (11px) to 0.75rem (12px) — 1px, which is at the edge but these appear in different contexts.
- **Color text hierarchy:** `#1A1A1A` → `#666666` → `#999999` — clear 3-step hierarchy.

**Deduction (-1):**
- Several values approach sub-perceptual territory:
  - `letter-spacing: 0.05em` vs `0.08em` vs `0.1em` vs `0.12em` vs `0.15em` — that's 5 distinct letter-spacing values for monospace labels across the page. The difference between 0.05em and 0.08em at 11px font size is approximately 0.33px — sub-perceptual. These should likely be consolidated to 2-3 values.
  - Font sizes for labels use `0.625rem` (10px), `0.6875rem` (11px), `0.75rem` (12px) — the 10px vs 11px distinction is barely perceptible at monospace and serves no clear hierarchy purpose.
  - The corridor witness label at `8px` (line 1830) is extremely small, though this is an intentional "whisper" effect.

---

## Summary

| # | Component | Score |
|---|-----------|-------|
| 1 | Proportional confidence | 5/5 |
| 2 | Z-axis mastery | 5/5 |
| 3 | Temporal responsiveness | 5/5 |
| 4 | Spatial invention | 5/5 |
| 5 | Semantic restraint | 4/5 |
| 6 | Typographic authority | 5/5 |
| 7 | Border architecture | 5/5 |
| 8 | Content-semantic naming | 5/5 |
| 9 | Responsive intelligence | 5/5 |
| 10 | Compositional layering | 5/5 |
| 11 | Micro-perceptual calibration | 4/5 |
| **Total** | | **53/55** |

---

## Top 3 Weakest Components

### 1. Micro-Perceptual Calibration (4/5)
- **Issue:** Letter-spacing proliferation in monospace labels: 5 distinct values (0.05em, 0.08em, 0.1em, 0.12em, 0.15em) where the smallest steps are sub-perceptual at 10-12px sizes. Consolidate to 2-3 values (e.g., 0.05em / 0.1em / 0.15em).
- **Issue:** Font-size steps between 0.625rem (10px) and 0.6875rem (11px) are barely distinguishable. Consider consolidating micro-label sizes.
- **Fix effort:** Low — token consolidation, no structural change.

### 2. Semantic Restraint (4/5)
- **Issue:** Several hard-coded hex values (`#222`, `#111`, `#333`, `#332E2C`, `#FAF5EF`) used in hover states and dark-zone contexts instead of CSS custom properties. These bypass the token system.
- **Issue:** `.door:hover .door__header` uses `--bg-callout-danger` for a neutral hover state — a semantic mismatch.
- **Fix effort:** Low — extract remaining hard-coded values to tokens, rename the door hover background.

### 3. (Tie) All others at 5/5
No other component has notable weaknesses. The build demonstrates mature, consistent craft across all remaining dimensions.

---

## Overall Assessment

This is a **highly mature** build. 53/55 is near the ceiling of what a single-page build can achieve. The spatial invention (corridor width progression encoding the philosophical argument) is genuinely novel and the most architecturally ambitious feature. The 3-voice typography, 3-tier border hierarchy, content-semantic naming, responsive adaptations, and multi-system composition all operate at a high level. The two deducted points are in token hygiene (consolidating sub-perceptual micro-values and hard-coded hex values) — polish issues, not structural problems.
