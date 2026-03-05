# Microscopic CSS Quality Analysis

**Subject:** `yegge-gas-town.html` (2,767 lines, ~1,705 lines CSS)
**Method:** Pixel-level extraction and distribution mapping of every CSS value
**Analyst:** CSS Microscopist (Opus)

---

## 1. TYPOGRAPHY MICRO-SIGNALS

### Complete Font-Size Inventory

| Value | Context | Resolved | Count |
|-------|---------|----------|-------|
| `10px` | section-indicator labels, stat labels, TOC label, callout labels, principle names, decision-split titles, source-group titles, recovery labels, pull-quote cite, inversion cite | 10px | **~18 uses** |
| `11px` | header meta, TOC numbers, table headers (all), role-card model, profile-table th | 11px | **~12 uses** |
| `12px` | principle name, comm-flow, memory-diagram, tmux-diagram | 12px | **~4 uses** |
| `13px` | ascii-diagram, code blocks (all zones), recovery-grid cmd, checklist td:first-child | 13px | **~8 uses** |
| `14px` | waves-table td, stages-table td, checklist td, comparison td, collapsible content, extensions-table td, skip-link | 14px | **~7 uses** |
| `0.875rem` (14px) | header subtitle, TOC links, role-card function/details, source-group li, decision-split li, inline code (relative) | 14px | **~8 uses** |
| `15px` | zone-tank p, zone-line p, collapsible summary, workflow-steps li, zone-tank td | 15px | **~5 uses** |
| `1rem` (16px) | body base, zone-control p, zone-dispatch p, callout body, zone-line h4 | 16px | **~6 uses** |
| `18px` | zone-intake p, principle quote, footer closing, callout--essence body | 18px | **~4 uses** |
| `1.125rem` (18px) | --text-lg token (defined but unused in code) | 18px | **0 direct** |
| `1.25rem` (20px) | zone-floor h3, zone-tank h3, zone-control h3, zone-line h3, zone-dispatch h3, role-card name | 20px | **~6 uses** |
| `22px` | pull-quote p | 22px | **1 use** |
| `28px` | zone-floor h2, zone-tank h2, zone-control h2, zone-line h2, zone-dispatch h2, responsive zone-intake h2 | 28px | **~6 uses** |
| `2rem` (32px) | --text-h2 (used by header title via responsive, zone-intake h2) | 32px | **~2 uses** |
| `2.5rem` (40px) | header title | 40px | **1 use** |
| `3rem` (48px) | --text-display (defined, unused) | 48px | **0 direct** |
| `32px` | inversion-block quote | 32px | **1 use** |
| `3.5em` | drop-cap first-letter | ~63px at 18px parent | **1 use** |

### Font-Size Distribution Analysis

**Distinct sizes used:** 16 (10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 28, 32, 40, 63)

**Verdict: PROFESSIONALLY SET.** This is NOT a default type system. Evidence:

1. **Controlled micro-scale separation.** The 10px/11px/12px/13px cluster serves infrastructure text (labels, captions, code). Each has a distinct role: 10px = uppercase labels with tracking, 11px = table headers with tracking, 12px = principle names, 13px = monospace code. The 1px differences ARE perceptible because the accompanying letter-spacing and font-weight changes amplify them.

2. **Clear hierarchy separation.** Body text lives at 15-18px (zone-dependent). Headings at 20/28/32/40px. The gap between body (18px max) and smallest heading (20px) is only 2px -- this is TIGHT but works because headings use Instrument Serif italic, creating font-family differentiation that compensates for the small size gap.

3. **Zone-adaptive body size.** This is the key typographic signal:
   - Z1 (intake): 18px body -- SPARSE, philosophical, generous reading
   - Z2 (factory): 16px body -- DENSE, technical, tighter reading
   - Z3 (tank): 15px body -- MODERATE, data-heavy
   - Z4 (control): 16px body -- returns to readable
   - Z5 (assembly): 15px body -- DENSE again, code-dominant
   - Z6 (dispatch): 16px body -- returns to readable

   This creates a **breathing rhythm** in font size. The reader physically feels zones tighten and relax. This is a QUALITY MULTIPLIER -- most pages use one body size everywhere.

4. **Type scale has intentional gaps.** The jump from 22px (pull-quote) to 28px (h2) to 32px (inversion) to 40px (h1) follows roughly a 1.27-1.33x ratio -- close to a Major Third scale. The sub-heading sizes (20px h3) create a readable hierarchy.

### Line-Height Inventory

| Value | Context |
|-------|---------|
| `1.15` | header title |
| `1.2` | all zone h2 headings |
| `1.3` | inversion-block quote |
| `1.4` | pull-quote p, principle quote, tmux-diagram |
| `1.5` | code blocks, ASCII diagrams, comm-flow, tables, comparison items, recovery steps, workflow steps, source-group li |
| `1.6` | header subtitle, profile-table td, zone-tank td, collapsible content, role-card details, zone-line p, workflow-steps, decision-split li |
| `1.7` | body default, zone-control p, zone-dispatch p, callout body, principle desc |
| `1.8` | zone-intake p, prereq-list li |
| `0.8` | drop-cap first-letter |

**Verdict: SYSTEMATICALLY VARIED.** 9 distinct line-heights. The pattern:

- **Display text:** 1.15-1.3 (tight -- headlines don't need breathing room)
- **Structured data:** 1.5-1.6 (medium -- tables, code, lists)
- **Reading text:** 1.7-1.8 (generous -- prose paragraphs)

This is textbook professional typesetting. The zone-intake 1.8 line-height paired with 18px font creates a luxurious reading feel for the philosophical opening. Z5's 1.6 paired with 15px creates urgency for the implementation section.

### Letter-Spacing Inventory

| Value | Context |
|-------|---------|
| `0.1em` | header meta, section-indicators, TOC label, factory-comparison titles, callout labels, role-card levels, recovery labels, decision-split titles, source-group titles, inversion cite | **~16 uses** |
| `0.08em` | principle names, zone-line section-indicator, recovery labels | **~3 uses** |
| `0.05em` | pull-quote cite, table headers (all types), role-card levels | **~8 uses** |
| `0.03em` | footer meta | **1 use** |
| `0.12em` | zone-line section-indicator | **1 use** |

**Verdict: TIGHT SYSTEM, SINGLE ROLE.** Letter-spacing is ONLY applied to uppercase monospace labels. There is zero letter-spacing on body text, headings, or pull-quotes. This is correct -- letter-spacing on body text is almost always sub-perceptual waste. The 0.05em-0.12em range on uppercase mono is standard best practice (uppercase needs tracking for legibility).

The slight variation (0.05em for table headers vs 0.1em for section labels) creates a subtle hierarchy: section labels are MORE spread = more "institutional," table headers are tighter = more "data."

### Font-Weight Inventory

| Value | Context |
|-------|---------|
| `400` | Body default (Inter), most prose | implicit |
| `500` | section-indicators, header meta, collapsible summary | **~4 uses** |
| `600` | strong, table headers, callout labels, principle names, role-card levels, section indicators (some), stat values, TOC label, font-weight: 600 on various labels | **~20+ uses** |
| `700` | Not used directly (Inter 700 loaded but never explicitly set) |

**Verdict: DISCIPLINED.** Only 3 weights used: 400 (default), 500 (semi-bold for infrastructure), 600 (bold for labels/emphasis). The page loads `Inter:wght@400;500;600;700` but 700 is never used -- a minor waste of 1 font file weight. 600 does all the heavy lifting for emphasis. This creates consistent "boldness" across the page rather than competing bold weights.

### Font-Family Distribution

| Family | Role | Uses |
|--------|------|------|
| `Instrument Serif` (italic) | Display: all headings, pull-quotes, principle quotes, footer closing, callout--essence, role-card names, inversion quote | **~25 uses** |
| `Inter` | Body: all prose, callout body, lists, descriptions | **default everywhere** |
| `JetBrains Mono` | Infrastructure: labels, code blocks, stat labels, TOC numbers, table headers, diagrams | **~30+ uses** |

**Verdict: TRINITY IS STRUCTURAL.** Each family has ONE job:
- Serif = authority/voice (things the page SAYS)
- Sans = neutrality/content (things the page EXPLAINS)
- Mono = system/data (things the page MEASURES)

This is a QUALITY MULTIPLIER. The reader unconsciously categorizes information by font family before reading the words.

---

## 2. SPACING MICRO-SIGNALS

### Complete Padding/Margin Value Inventory

**Spacing token usage (from CSS custom properties):**

| Token | Value | Usage Count (approx) |
|-------|-------|---------------------|
| `--space-1` | 4px | 6 (TOC link padding, list margins, principle desc li) |
| `--space-2` | 8px | 18 (gaps, small paddings, section-indicator pb, role-card mb) |
| `--space-3` | 12px | 28 (header meta mb, TOC label mb, callout label mb, table cell padding, responsive stats gap, source-group mb, collapsible padding/margin, checklist margin, inversion sub mt) |
| `--space-4` | 16px | 30 (section-indicator mb, heading mb, paragraph mb, code block padding, table margin, checklist padding, recovery margin, collapsible padding, cost-block margin) |
| `--space-5` | 20px | 8 (callout padding, role-card padding, factory-comparison padding, principle padding, decision-split padding, cost-block padding) |
| `--space-6` | 24px | 35 (container side padding, TOC padding, heading mb, role-grid gap, pull-quote margin/padding, table margin, code block padding, diagram margin, comparison margin, sources-grid gap, header stats gap/mt, footer meta span mr) |
| `--space-8` | 32px | 12 (header-inner pb, TOC grid gap, pull-quote/diagram margin, zone-floor/tank/line pb, zone-control mb, zone-line mt, recovery margin, principle mb, ladder-block margin) |
| `--space-10` | 40px | 2 (zone-intake h3 mt) |
| `--space-12` | 48px | 8 (header-inner pt, zone-intake pb, zone-tank pt, zone-control pt/pb, zone-dispatch pt/pb, inversion-block padding) |
| `--space-16` | 64px | 1 (zone-floor pt) |
| `--space-20` | 80px | 1 (zone-intake pt) |
| `--space-24` | 96px | 0 (defined, never used) |

**Raw pixel values used outside tokens:**

| Value | Context |
|-------|---------|
| `2px` | header stat gap, inline code padding, focus-visible outline-offset |
| `4px` | drop-cap margin-top, featured-code offset |
| `6px` | inline code horizontal padding |
| `14px` | prereq-list bullet top position |

### Spacing Distribution Analysis

**Token adherence rate:** ~95%. Only 4 instances of non-token spacing (2px, 4px, 6px, 14px), all in micro-contexts (inline code padding, pseudo-element positioning). This is EXCELLENT discipline.

**Distribution shape:** The spacing follows a **logarithmic curve** -- heavy use of 12-24px (mid-range), moderate use of 32-48px (section-level), rare use of 64-80px (zone-level). This is the correct shape for a content-dense page.

**Spacing RHYTHM assessment:**

Zone padding top/bottom pattern:
- Z1: 80px top / 48px bottom (GENEROUS -- breathing room for philosophical opening)
- Z2: 64px top / 32px bottom (COMPRESSED -- dense factory floor)
- Z3: 48px top / 32px bottom (MODERATE -- data zone)
- Z4: 48px top / 48px bottom (EVEN -- contemplative control room)
- Z5: 32px top / 32px bottom (TIGHT -- implementation urgency)
- Z6: 48px top / 48px bottom (RETURNS to moderate -- decision space)

**This is a QUALITY MULTIPLIER.** The spacing tells a story: open breathing (Z1) -> compression (Z2) -> moderate (Z3) -> even (Z4) -> tight (Z5) -> release (Z6). The reader feels the "factory" tighten in the working zones and relax in the philosophical/decision zones. This is the refinery metaphor encoded in whitespace.

**Verdict: COHERENT RHYTHM.** The 4px base unit creates a mathematical relationship between all values. Every spacing value is divisible by 4. The one exception (14px for bullet positioning) is a geometric necessity, not a design value.

---

## 3. COLOR MICRO-SIGNALS

### Complete Color Inventory

**Background colors (zone-specific):**

| Variable | Hex | RGB | Zone |
|----------|-----|-----|------|
| `--refinery-intake` | `#FEF9F5` | 254, 249, 245 | Z1 |
| `--refinery-floor` | `#EDE6DA` | 237, 230, 218 | Z2 |
| `--refinery-tank` | `#FFF2E0` | 255, 242, 224 | Z3 |
| `--refinery-control` | `#F0EBE5` | 240, 235, 229 | Z4 |
| `--refinery-line` | `#E5DDD0` | 229, 221, 208 | Z5 |
| `--refinery-dispatch` | `#F0EBE0` | 240, 235, 224 | Z6 |

**RGB Delta analysis between adjacent zones:**

| Transition | R delta | G delta | B delta | Total delta | Perceptible? |
|------------|---------|---------|---------|-------------|-------------|
| Z1->Z2 | -17 | -19 | -27 | **63** | YES -- floor darkens noticeably |
| Z2->Z3 | +18 | +12 | +6 | **36** | YES -- tank warms/lightens |
| Z3->Z4 | -15 | -7 | +5 | **27** | MARGINAL -- subtle shift |
| Z4->Z5 | -11 | -14 | -21 | **46** | YES -- assembly darkens |
| Z5->Z6 | +11 | +14 | +16 | **41** | YES -- dispatch lightens |

**Verdict: 4/5 transitions PERCEPTIBLE.** The Z3->Z4 transition (delta 27) is marginal but aided by the 1px border-top transition marker. All others are clearly visible. The darkest zone (Z5: 229/221/208) and lightest (Z3: 255/242/224) create a range of 47 RGB points -- enough for clear differentiation.

**Temperature analysis:** All backgrounds are WARM (higher R than B values). The warmth ranges from +9 (Z1: 254-245) to +21 (Z5: 229-208). The warmer zones (Z3, Z5) feel "hotter" -- this maps to the refinery metaphor (processing zones run warmer). This is either intentional genius or happy accident, but either way it works.

**Accent palette:**

| Variable | Hex | Role | Uses |
|----------|-----|------|------|
| `--color-primary` | `#E83025` | Red -- attention, danger, material flow | borders, labels, drop-cap, highlights, selection |
| `--accent-blue` | `#A07D50` | Gold/brown -- NOT blue despite name | callout--info borders, rig-level markers |
| `--accent-green` | `#4A9D6B` | Green -- success, go, tip | callout--tip, decision-split yes, checkpoints |
| `--accent-coral` | `#C97065` | Coral -- warning, trouble | collapsible summary borders, recovery labels |
| `--accent-amber` | `#D97706` | Amber -- cost, attention | callout--essence, cost labels, flow labels |
| `--accent-purple` | `#7C3AED` | Purple -- challenge | callout--challenge only (1 use) |

**Color audit findings:**

1. **`--accent-blue: #A07D50` is NOT blue.** It is a warm gold/brown (R:160, G:125, B:80). The variable name is misleading. Perceptually it reads as "antique brass" or "aged copper" -- which actually fits the refinery metaphor better than blue would. The naming is wrong but the color choice is RIGHT.

2. **Accent distribution is uneven.** Red dominates (~30 uses), green gets ~8 uses, amber ~5, coral ~5, purple ~1. Purple is loaded but used once (callout--challenge). This is a minor waste.

3. **The alpha channel pattern.** Callout backgrounds use `rgba(color, 0.03-0.05)` -- these are 3-5% opacity tints. At 3% opacity on a warm cream background, the effective color difference is ~7-12 RGB points. This is SUB-PERCEPTUAL for most monitors but creates a subtle "warmth" when multiple callouts stack. This is debatable -- it's either sophisticated restraint or pointless complexity.

**Verdict: TIGHT PALETTE, WARM COHERENT.** 6 accents, all earning their presence. The red (#E83025) carries the page as the "pipeline connector" / material flow color. The warm backgrounds create a unified temperature. The "blue" naming is wrong but the color itself is correct for the aesthetic.

---

## 4. BORDER/LINE MICRO-SIGNALS

### Complete Border Inventory

| Width | Style | Color | Context | Count |
|-------|-------|-------|---------|-------|
| `4px` | solid | `--color-primary` (#E83025) | callout default, callout-left | ~5 |
| `4px` | solid | `--color-text` (#1A1A1A) | principle first-of-type (top + left) | 2 |
| `4px` | solid | various accents | role-card left borders, decision-split left | ~6 |
| `3px` | solid | `--color-primary` | header bottom, footer top, transition-heavy | 3 |
| `3px` | solid | `--color-border` (#E0D5C5) | transition-medium, table th bottom, code block borders (all zones), ASCII diagram borders, memory diagram, cost-block | ~18 |
| `3px` | solid | `--color-text-secondary` | principle--secondary left | 2 |
| `3px` | solid | `--accent-coral` | collapsible summary left | 2 |
| `3px` | solid | `--color-primary` | focus-visible outline | 1 |
| `1px` | solid | `--color-border` (#E0D5C5) | TOC bottom, table td bottom, transition-light, collapsible border, source-group border-bottom, factory-comparison item border | ~15 |
| `1px` | solid | `--color-border-subtle` (#F0EBE3) | section-indicator bottom, factory-comparison item last-border, role-card model top, zone-tank section-indicator, zone-dispatch section-indicator | ~8 |
| `1px` | solid | `--color-border` | inline code border, sources-group link bottom | ~3 |

### Border Hierarchy Analysis

**Three-tier system:**

| Tier | Width | Semantic Role | Perceptible Difference |
|------|-------|--------------|----------------------|
| **Structural** | 4px | Zone-defining, content-type marking | YES -- clearly heavier than 3px |
| **Accent** | 3px | Component framing, transitions, data headers | YES -- visible but lighter than 4px |
| **Micro** | 1px | Internal separators, subtle divisions | YES -- reads as "line" not "border" |

**Is 4px/3px/1px perceptible?** YES. The 4px-to-3px difference (1px delta, 25% reduction) is visible because:
1. 4px borders appear on LEFT edges (vertical context), 3px on BOTTOM/TOP edges (horizontal context)
2. The color changes between tiers amplify the width difference: 4px uses red/black (high contrast), 3px uses tan/gray (low contrast)
3. The 3px-to-1px jump (2px delta, 67% reduction) is always perceptible

**Border color system:** The color-weight pairing is CORRECT:
- Heavy borders (4px) use high-contrast colors (red, black)
- Medium borders (3px) use medium-contrast colors (tan #E0D5C5, gray #666)
- Light borders (1px) use low-contrast colors (subtle #F0EBE3, border #E0D5C5)

This is a QUALITY MULTIPLIER. The border system creates a visual hierarchy where the weight AND color reinforce the same message. A 4px red border screams "BOUNDARY." A 1px subtle border whispers "structure."

**Verdict: SYSTEMATIC, NOT NOISE.** Every border width maps to a semantic role. Zero decorative borders. The 4/3/1 hierarchy is both defined in tokens and consistently applied.

---

## 5. COMPONENT MICRO-SIGNALS

### Component-by-Component Audit

**1. Callouts (6 variants: default, info, tip, warning, essence, challenge)**

| Property | Value | Consistent? |
|----------|-------|-------------|
| Border-left | 4px solid [variant color] | YES across all 6 |
| Padding | 20px 24px | YES (except Z5 compressed: 12px 16px) |
| Background | rgba([color], 0.03-0.05) | YES -- opacity varies slightly (0.03 default, 0.05 warning) |
| Label font | body/mono 10px 600 uppercase 0.1em | YES |
| Label color | matches border color | YES |
| Body font-size | 16px (default) / 18px italic (essence) | 2 variants, both consistent |
| Margin-bottom | 24px | YES |

**Z5 callout compression:** In Zone 5 (assembly line), callouts get COMPRESSED: padding drops from 20px/24px to 12px/16px. This is the spacing-compression mechanism at work -- the assembly line zone is tighter. This is a QUALITY SIGNAL -- components adapt to their zone context.

**2. Tables (6 types: profile, waves, stages, checklist, comparison, extensions)**

| Property | All 6 Types | Consistent? |
|----------|-------------|-------------|
| Width | 100% | YES |
| Border-collapse | collapse | YES |
| th font-family | mono | YES |
| th font-size | 11px | YES |
| th font-weight | 600 | YES |
| th letter-spacing | 0.05em | YES |
| th text-transform | uppercase | YES |
| th border-bottom | 3px solid border | YES |
| th color | text-secondary | YES |
| td border-bottom | 1px solid border | YES |
| last-child td border | none | YES |

**td font-size varies:** 14px (waves, stages, checklist, comparison, extensions) vs 15px (zone-tank default tables) vs no explicit size (profile-table uses --text-sm = 14px). The 14/15px split is MARGINAL -- 1px difference is barely perceptible. This is minor noise.

**td padding varies:** Some use `space-3 space-4` (12px 16px), others `space-2 space-3` (8px 12px), others `space-3 space-3` (12px 12px). The variation is SMALL but inconsistent. This is NOISE -- the reader won't notice, but it's not systematized.

**3. Code Blocks (including ASCII diagrams, comm-flow, tmux-diagram, memory-diagram)**

| Property | Value | Consistent? |
|----------|-------|-------------|
| Background | --color-text (#1A1A1A) | YES -- all dark |
| Color | --color-background (#FEF9F5) | YES -- all light-on-dark |
| Border | 3px solid --color-border | YES |
| Font-family | mono | YES |
| Overflow-x | auto | YES |
| Padding | varies: space-4/space-6 or space-6/space-6 | MINOR NOISE |
| Font-size | 12-13px | MINOR NOISE (12px for diagrams, 13px for code) |

**The dark-on-light inversion is a QUALITY MULTIPLIER.** Every code/diagram block creates a dramatic contrast shift. The 3px tan border on a dark block creates a "frame" effect. This is the strongest visual component on the page.

**4. Role Cards (3 variants: town, rig, human)**

| Property | Town | Rig | Human |
|----------|------|-----|-------|
| Border | 3px solid border | 3px solid border | 3px solid border |
| Border-left | 4px solid red | 4px solid gold | 4px solid green |
| Background | --refinery-intake | --refinery-intake | --refinery-intake |
| Padding | space-5 | space-5 | space-5 |
| Grid span | 1 col | 1 col | full width (1/-1) |
| Hover | border-color: text-secondary | same | same |
| Level label color | red | gold | green |

**Verdict: CONSISTENT WITHIN VARIANT.** The 3-tier color coding (red/gold/green) creates instant role categorization. The human card spanning full width is a CORRECT design decision -- it signals "different kind of thing."

**5. Pull Quotes**

| Property | Value |
|----------|-------|
| Border-left | 4px solid red |
| Padding | 24px |
| Background | rgba(red, 0.03) |
| Font-family | Instrument Serif |
| Font-size | 22px |
| Font-style | italic |
| Line-height | 1.4 |
| Max-width | 50ch |

**Verdict: STRONG COMPONENT.** The serif italic at 22px with a 4px red border creates a distinctive "voice" component. The 50ch max-width prevents over-wide lines. This component earns its presence every time it appears.

**6. Inversion Block (the "second-half moment")**

| Property | Value |
|----------|-------|
| Background | --color-text (dark) |
| Color | --refinery-intake (light) |
| Padding | 48px 24px |
| Margin | 32px calc(-1 * 24px) -- BLEEDS past container |
| Text-align | center |
| Quote font | Instrument Serif, 32px, italic |
| Max-width | 20ch |

**Verdict: THE SINGLE STRONGEST QUALITY SIGNAL.** This component:
1. Breaks out of the container (negative margin bleeds full-width)
2. Inverts the entire color scheme (dark bg, light text)
3. Centers text (everything else is left-aligned)
4. Uses the largest non-header type (32px)
5. Constrains to 20ch (forces dramatic line breaks)

This is the "one dramatic inversion" that earns outsized quality. It creates a PHYSICAL interruption in the scroll experience. One component, 34 lines of CSS, maximum impact.

---

## 6. TRANSITION MICRO-SIGNALS

### Zone Boundary Property Shift Inventory

**Z1 -> Z2 (transition-heavy: 3px solid red)**

| Property | Z1 Value | Z2 Value | Delta | Perceptible? |
|----------|----------|----------|-------|-------------|
| Background | #FEF9F5 | #EDE6DA | R:-17 G:-19 B:-27 (63 total) | YES |
| Border-top | none | 3px solid #E83025 | red line appears | YES |
| Padding-top | 80px | 64px | -16px | MARGINAL (context-dependent) |
| Body font-size | 18px | 16px | -2px | YES (with line-height change) |
| Body line-height | 1.8 | 1.7 | -0.1 | MARGINAL alone, perceptible with font-size |
| Section indicator | 10px/mono | 10px/mono | 0 | NO CHANGE |
| h2 font-size | 32px | 28px | -4px | YES |

**Channels shifted: 5 perceptible.** This is a STRONG transition.

**Z2 -> Z3 (transition-medium: 3px solid tan)**

| Property | Z2 Value | Z3 Value | Delta | Perceptible? |
|----------|----------|----------|-------|-------------|
| Background | #EDE6DA | #FFF2E0 | R:+18 G:+12 B:+6 (36) | YES -- goes warmer/lighter |
| Border-top | 3px solid tan | 3px solid tan | same treatment | YES (line present) |
| Padding-top | 64px | 48px | -16px | MARGINAL |
| Body font-size | 16px | 15px | -1px | BARELY perceptible |
| h2 font-size | 28px | 28px | 0 | NO CHANGE |

**Channels shifted: 2-3 perceptible.** MODERATE transition.

**Z3 -> Z4 (transition-light: 1px solid tan)**

| Property | Z3 Value | Z4 Value | Delta | Perceptible? |
|----------|----------|----------|-------|-------------|
| Background | #FFF2E0 | #F0EBE5 | R:-15 G:-7 B:+5 (27) | MARGINAL |
| Border-top | 1px solid tan | 1px vs 3px prior | thinner line | YES -- noticeably lighter |
| Padding-top | 48px | 48px | 0 | NO CHANGE |
| Body font-size | 15px | 16px | +1px | BARELY |
| Content type | data/tables | stacked principles | structural shift | YES -- visual |

**Channels shifted: 1-2 perceptible.** LIGHT transition -- CORRECT for the Z3/Z4 pair which are both "moderate density."

**Z4 -> Z5 (transition-heavy: 3px solid red)**

| Property | Z4 Value | Z5 Value | Delta | Perceptible? |
|----------|----------|----------|-------|-------------|
| Background | #F0EBE5 | #E5DDD0 | R:-11 G:-14 B:-21 (46) | YES -- darkens |
| Border-top | 3px solid red | 3px solid red | red line | YES |
| Padding-top | 48px | 32px | -16px | YES (noticeable tightening) |
| Body font-size | 16px | 15px | -1px | MARGINAL |
| Section indicator | mono/secondary | mono/RED/600/0.12em | COLOR CHANGE | YES -- primary red |
| Content type | principles | code blocks | major structural shift | YES |

**Channels shifted: 4-5 perceptible.** STRONG transition -- correctly heavy for the shift from philosophical to procedural.

**Z5 -> Inversion Block**

This is the MOST dramatic transition on the page:
- Background: warm cream -> near-black (#1A1A1A)
- Text: dark -> light
- Alignment: left -> center
- Container: 960px -> full-bleed
- Typography: 15px Inter -> 32px Instrument Serif italic
- Spacing: tight -> generous (48px padding)

**ALL 6 channels shift simultaneously.** This is the maximum possible transition intensity.

**Z5 -> Z6 (transition-medium: 3px solid tan)**

| Property | Z5 Value | Z6 Value | Delta | Perceptible? |
|----------|----------|----------|-------|-------------|
| Background | #E5DDD0 | #F0EBE0 | R:+11 G:+14 B:+16 (41) | YES -- lightens |
| Border-top | 3px tan | 3px tan | present | YES |
| Padding-top | 32px | 48px | +16px | YES (opens up) |
| Body font-size | 15px | 16px | +1px | MARGINAL |

**Channels shifted: 2-3 perceptible.** MODERATE -- correctly signals the shift from dense implementation to evaluation/decisions.

**Transition pattern verdict:** The page uses 3 transition intensities (heavy/medium/light) mapped to 3 border treatments (3px red / 3px tan / 1px tan). The transition intensity MATCHES the semantic distance between zones. This is a QUALITY MULTIPLIER -- the reader's experience of zone changes is guided by the border weight.

---

## 7. THE "QUALITY TAX" -- Complexity Without Perceived Quality

### Tax Item 1: Alpha-channel backgrounds on callouts (8 instances)

```css
background: rgba(232, 48, 37, 0.03);
background: rgba(74, 157, 107, 0.03);
background: rgba(217, 119, 6, 0.03);
background: rgba(124, 58, 237, 0.03);
background: rgba(232, 48, 37, 0.05);
background: rgba(74, 157, 107, 0.05);
background: rgba(229, 221, 208, 0.5);
background: rgba(229, 221, 208, 0.8);
background: rgba(254, 249, 245, 0.5);
```

At 3% opacity on #FEF9F5, the effective background shifts ~7 RGB points. This is sub-perceptual on most monitors. The 5% variants are marginally better (~12 RGB points). Only the 50% and 80% variants (collapsible summary hover states) are clearly visible.

**Tax: 9 declarations, 6 sub-perceptual.** Cost: readability of CSS. Benefit: nearly zero visual impact on 6/9 uses.

### Tax Item 2: `--text-display: 3rem` and `--text-lg: 1.125rem` tokens

Defined in `:root` but never used anywhere in the CSS. Two dead tokens.

**Tax: 2 lines.** Minor.

### Tax Item 3: `font-weight: 700` loaded but unused

`Inter:wght@400;500;600;700` loads 700 weight that is never applied. Extra network bytes for zero visual impact.

**Tax: ~20-50KB font file.** Moderate for performance, zero for visual.

### Tax Item 4: `--space-24: 96px` defined but unused

Dead spacing token.

**Tax: 1 line.** Trivial.

### Tax Item 5: `--transition-standard: 0.3s ease` on hover states

Applied to link hovers, card hovers, TOC links. On desktop this creates smooth color transitions. On mobile (where most hovers don't apply), these declarations do nothing. Not truly "wasted" but the page has no complex transitions that benefit from easing.

**Tax: 5 declarations.** Minor -- standard practice, not excessive.

### Tax Item 6: Repeated section-indicator styles across 6 zones

Each zone re-declares the section-indicator styles (font-family, font-size, font-weight, letter-spacing, text-transform, color, margin-bottom, padding-bottom, border-bottom). These could be a single shared class. Instead, they're written 6 times with minor variations (Z5 uses `font-weight: 600` and `letter-spacing: 0.12em` and `color: primary` instead of secondary).

**Tax: ~60 lines of near-duplicate CSS.** The Z5 variation is CORRECT (assembly line indicators are different), but the other 5 are identical. A shared base class with one override would save ~48 lines.

### Total Quality Tax

**~80 lines of CSS** that add zero or near-zero perceived quality. On a 1,705-line stylesheet, that's 4.7% waste. This is EXCELLENT -- most production CSS carries 15-30% waste. The page is remarkably lean.

---

## 8. THE "QUALITY MULTIPLIER" -- Outsized Impact Per CSS Line

### Multiplier 1: Zone-Adaptive Body Font Size (6 declarations, MASSIVE impact)

```css
.zone-intake p { font-size: 18px; line-height: 1.8; }
.zone-floor p { font-size: 16px; line-height: 1.7; }  /* base */
.zone-tank p { font-size: 15px; line-height: 1.7; }
.zone-control p { font-size: 16px; line-height: 1.7; }
.zone-line p { font-size: 15px; line-height: 1.6; }
.zone-dispatch p { font-size: 16px; line-height: 1.7; }
```

6 declarations. Creates the entire "breathing" rhythm of the page. The reader unconsciously slows down in Z1 (18px/1.8) and speeds up in Z5 (15px/1.6). Cost: 6 lines. Impact: defines the reading experience.

**Quality-per-line ratio: 10/10.**

### Multiplier 2: Dark Inversion Block (34 lines, DRAMATIC impact)

The full-bleed dark centered quote. ~34 lines of CSS creates the single most memorable moment in the scroll experience. It physically interrupts the warm-cream reading flow with darkness, centers text in a left-aligned page, and uses the largest quote font.

**Quality-per-line ratio: 10/10.**

### Multiplier 3: Font-Family Trinity (3 declarations in :root, STRUCTURAL impact)

```css
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

3 lines that create the entire information-categorization system. Every element on the page is semantically typed by its font family alone.

**Quality-per-line ratio: 10/10.**

### Multiplier 4: Code Block Dark Inversion (8 lines per instance, repeated ~6 times)

```css
background: var(--color-text);
color: var(--color-background);
border: 3px solid var(--color-border);
padding: var(--space-6);
font-family: var(--font-mono);
```

Every code block, ASCII diagram, and data visualization is a dark rectangle in a warm page. The 3px tan border creates a "window frame" effect. These blocks are the STRUCTURAL PUNCTUATION of the page -- they break up prose, create rhythm, and encode the "refinery machinery" metaphor.

**Quality-per-line ratio: 9/10.**

### Multiplier 5: Role-Card Color Coding (9 lines, INSTANT categorization)

```css
.role-card--town { border-left: 4px solid var(--color-primary); }
.role-card--rig { border-left: 4px solid var(--accent-blue); }
.role-card--human { border-left: 4px solid var(--accent-green); grid-column: 1 / -1; }
```

3 color-coded left borders + 1 grid-span override create an INSTANT visual taxonomy of the 8-role system. The reader categorizes before reading.

**Quality-per-line ratio: 9/10.**

### Multiplier 6: Container Max-Width + Dark HTML Background (3 lines)

```css
html { background: var(--color-text); }
.container { max-width: 960px; margin: 0 auto; }
```

The dark HTML background means the page "floats" in a dark frame on wide screens. The inversion block's negative margins bleed to this dark edge, creating continuity with the header/footer. 3 lines create the entire page architecture.

**Quality-per-line ratio: 9/10.**

### Multiplier 7: `border-radius: 0` as Soul Constraint (1 line)

```css
--border-radius: 0;
```

One token, never overridden, applied to nothing explicitly -- but its ABSENCE defines the page. Zero border-radius creates the "industrial/refinery" character. Every component has sharp corners. If this were `8px`, the entire page would feel like a SaaS dashboard instead of a factory.

**Quality-per-line ratio: 10/10 (because it's 1 line with maximum character impact).**

---

## 9. CSS DECISION AUDIT

### 10 BEST CSS Decisions

**1. Zone-adaptive body font-size (lines 334-339, 592-596, 823-827, 1005-1009, 1119-1123, 1409-1413)**
WHY: Creates the only page-level rhythmic mechanism that readers FEEL without seeing. The 18->16->15->16->15->16 pattern encodes density meaning into typography. Most pages never vary body size. This single decision elevates the page from "template" to "designed."

**2. Inversion block with full-bleed negative margins (lines 1334-1367)**
WHY: One component that breaks every established pattern simultaneously (dark in light page, centered in left-aligned page, full-bleed in contained page, display-size in body-size page). This is the compositional equivalent of a key change in music. It marks the exact structural midpoint ("nature prefers colonies") and forces the reader to pause.

**3. Font-family trinity with strict role assignment (lines 57-59)**
WHY: Three families, three roles, zero crossover. Serif = voice/authority, Sans = content/explanation, Mono = data/system. This creates information architecture BEFORE the reader processes words. Every typeface "means" something.

**4. 4/3/1px border hierarchy with color-weight pairing (lines 87-89 + throughout)**
WHY: Three border weights with three semantic roles AND matched color intensities (heavy+red, medium+tan, light+subtle). The system is self-reinforcing -- weight and color convey the same message. This eliminates ambiguity in visual hierarchy.

**5. Dark code blocks as structural punctuation (throughout)**
WHY: Every code block, diagram, and data visualization creates a dark rectangle. On a warm cream page, these are the most visually dominant elements. They serve as page landmarks, scrolling anchors, and information density markers. The reader can navigate the page by dark blocks alone.

**6. Zone backgrounds following warm palette with meaningful temperature variation (lines 44-49)**
WHY: Six zone backgrounds that are ALL warm-toned but vary by 27-63 RGB points. The processing zones (Z2, Z5) are darker/warmer. The conceptual zones (Z1, Z4) are lighter/cooler. The backgrounds tell the refinery story without the reader noticing.

**7. `border-radius: 0` as global soul constraint (line 25)**
WHY: Defines the entire page character in one declaration. Sharp corners = industrial/precise/structured. This is a 1-line decision with page-wide impact. It would be trivial to add border-radius -- the restraint IS the design.

**8. Spacing scale on 4px base unit with logarithmic distribution (lines 73-84)**
WHY: 12 spacing tokens all divisible by 4, used with 95% adherence. The distribution favors 12-24px (content-level) over 64-96px (zone-level), creating information-dense zones with appropriate breathing room between them. The 4px base is small enough for fine-grained control without being arbitrary.

**9. Drop-cap with primary color (lines 342-350)**
WHY: 7 lines of CSS create the opening gesture of Zone 1. The 3.5em Instrument Serif drop-cap in pipeline-red signals "this is crafted editorial content, not generated documentation." It sets the tone for the entire page.

**10. Role-card bento grid with color-coded borders and span variation (lines 668-738)**
WHY: 2-column grid where cards share 90% of their CSS but differentiate on border-left color (red/gold/green for town/rig/human) and grid span (human card goes full-width). Maximum information with minimum CSS. The visual taxonomy is instant.

### 10 WORST CSS Decisions

**1. `--accent-blue: #A07D50` -- variable named "blue" is gold/brown (line 38)**
WHY: The name misleads any developer reading the CSS. #A07D50 has R:160, G:125, B:80 -- zero blue presence. This was likely renamed during development and the variable name wasn't updated. Costs: developer confusion, potential incorrect usage in future edits.

**2. `rgba(color, 0.03)` backgrounds on callouts -- sub-perceptual (lines 376, 432, 449, 465)**
WHY: 3% opacity on warm cream produces ~7 RGB point shifts. On most monitors, this is invisible. The CSS complexity (rgba calculations, multiple variants) adds maintenance cost for zero visual return. Either increase to 8-10% opacity or remove entirely.

**3. Six near-duplicate section-indicator declarations (lines 313-323, 565-575, 795-805, 978-988, 1083-1093, 1381-1391)**
WHY: Five of six section indicators are identical (10px mono 500 0.1em uppercase secondary). Only Z5 differs meaningfully (600 weight, 0.12em tracking, red color). A shared `.section-indicator` class with a `.zone-line .section-indicator` override would save ~48 lines and be easier to maintain.

**4. Loading `Inter:wght@700` but never using it (line 18)**
WHY: The Google Fonts URL loads weight 700, but the CSS never sets `font-weight: 700`. `strong { font-weight: 600; }` uses 600 instead. This is ~20-50KB of wasted font data.

**5. `--text-display: 3rem` and `--text-lg: 1.125rem` tokens defined but unused (lines 70, 64)**
WHY: Dead tokens in the design system create false expectations. A developer might assume `--text-display` is used somewhere and hesitate to modify it. Dead code in design tokens is worse than dead code in logic -- it implies design intent that doesn't exist.

**6. `--space-24: 96px` defined but never used (line 84)**
WHY: Same as above -- dead spacing token. The page's maximum actual spacing is 80px (zone-intake padding-top). 96px exists as a ghost.

**7. Inconsistent table td padding across table types (scattered)**
WHY: Profile-table uses `space-3 space-4` (12px 16px). Waves-table uses `space-3 space-3` (12px 12px). Stages-table uses `space-2 space-3` (8px 12px). Checklist-table uses `space-2 space-3`. The 12px vs 8px vertical padding IS perceptible and creates slight table-to-table inconsistency. A unified base table td padding with zone overrides would be cleaner.

**8. `scroll-behavior: smooth` on `html` without scroll-margin-top (line 113)**
WHY: The TOC has anchor links (#you-are-here, #roles, etc.) but no `scroll-margin-top` is set on target elements. On browsers that support smooth scrolling, clicking a TOC link will scroll the heading UNDER any potential sticky elements (none exist currently, but the pattern is incomplete). More importantly, smooth scrolling can feel sluggish on long pages.

**9. `::selection` override at body level AND zone-dispatch level (lines 152-155, 1523-1526)**
WHY: The zone-dispatch `::selection` override is identical to the body-level one (same red background, same cream text). It's redundant -- inherited selection styles don't reset at section boundaries. 3 wasted lines.

**10. `featured-code::after` pseudo-element shadow (lines 1260-1273)**
WHY: 13 lines create a 4px offset dark rectangle behind a code block. This is a CSS-painted drop shadow with sharp corners. The effect is subtle and ONLY works if the code block has `position: relative` set (which it does via the `.featured-code` class). But the HTML in Zone 5 doesn't actually apply this class to any element -- it's defined in CSS but appears unused in the markup. If it IS used, the effect is a nice layered-paper look. If it's NOT used, it's 13 dead lines.

---

## 10. SUMMARY VERDICT

### Quality Score Breakdown

| Dimension | Score | Evidence |
|-----------|-------|---------|
| Typography System | **9/10** | 16 distinct sizes, zone-adaptive body, trinity families, professional tracking |
| Spacing System | **9/10** | 4px base, 95% token adherence, rhythmic zone padding, logarithmic distribution |
| Color System | **8/10** | Warm coherent palette, meaningful zone temperatures, one naming error |
| Border System | **9/10** | 3-tier hierarchy with color-weight pairing, zero decorative borders |
| Component Consistency | **8/10** | Strong within-component consistency, minor table padding variance |
| Transition System | **9/10** | 3 intensity levels matched to semantic distance, 4-5 perceptible channels per major transition |
| Quality Tax | **9/10** | Only 4.7% waste -- exceptionally lean for a 1,700-line stylesheet |
| Quality Multipliers | **10/10** | Inversion block, zone-adaptive type, font trinity, dark code blocks -- each punches far above its weight |

### The "Feeling" Diagnosis

This page FEELS "set" (professionally typeset) because:

1. **Zone-adaptive typography.** The body size changes create physical reading pace changes. This is the single most "designed" decision in the CSS.
2. **Structural punctuation.** Dark code blocks, the inversion moment, and the red border transitions create a page with LANDMARKS. You always know where you are.
3. **Restraint.** Zero border-radius, zero box-shadow, zero gradient backgrounds, zero decorative elements. Everything present is structural. The absence of decoration IS the design vocabulary.
4. **Semantic consistency.** Font families mean things. Border weights mean things. Background colors mean things. Nothing is arbitrary.

The page does NOT feel "flashy" or "modern" -- it feels like a well-edited technical publication. The warmth of the palette prevents it from being cold/sterile. The refinery metaphor prevents it from being generic. The result is a page that reads like a document from someone who cares about craft.

### Critical Gap

The one dimension this analysis cannot measure from CSS alone: **content-form alignment.** The CSS encodes a "refinery" metaphor (zone naming, spacing compression in working zones, warming in processing zones). Whether the CONTENT actually delivers on this metaphor -- whether the words about "factories" and "pipelines" are placed in the zones with compressed spacing and warmer backgrounds -- requires reading the HTML content in context. The CSS provides the instrument; the content must play it.
