# Research Package — Pass 3: HARDENING
## For Builder Pass 3 (HARDENING)

This is the FINAL pass before perceptual audit. Focus: defensive quality.
Catch problems, integrate proven CSS, verify structural propositions.

**Soul reminder:** border-radius: 0, box-shadow: none, no gradients, no rgba alpha < 1.0.
3-category borders only (1px/3px/4px, ZERO 2px). Container 960px. Locked palette.

---

## 6. ANTI-PATTERNS — RISK PROFILE FOR THIS BUILD

| Anti-Pattern | Risk | WHY This Risk Level for THIS Build | CSS Mitigation |
|-------------|------|-----------------------------------|----------------|
| Code Wall (>50 lines unbroken) | HIGH | This content has 10+ code blocks across Parts IV, VIII, IX, XII. Parts IV and VIII have consecutive bash scripts, tmux commands, and CLAUDE.md configs. Without prose buffering, code stacks into impenetrable walls — destroying the "brass fittings" contrast the TC brief demands. | `pre + pre { margin-top: 48px; }` — interleave 1-2 sentence prose bridges between all consecutive code blocks. Each CLAUDE.md example in Part VIII gets its own domain heading + intro before code. |
| Callout Cacophony (>2 per viewport) | HIGH | 7+ blockquotes (Part XIII alone has 7), 4 philosophical warnings (Part VI), tips in build guide (Part XII), anti-patterns (Part X). Natural impulse to make each a callout = 15+ callouts across the page, flattening the emotional arc. Observatory needs precision instruments (few, calibrated), not alarm panels (many, undifferentiated). | Budget: 6-8 total callouts across entire page. Zone allocation: Z1 max 1, Z2-Z3 max 2, Z4 max 2 (Goodhart + self-imprisonment), Z5-Z6 max 2. Demote remaining to blockquote treatment (Instrument Serif italic, no left-border) or inline emphasis. |
| Uniform Density (same spacing throughout) | HIGH | 17 parts of varying length (100-800 words). Without intervention, builder applies uniform 48px between all parts, creating metronome rhythm. The TC brief prescribes a spatial arc that MUST vary: Z1 wide (64-80px) → Z2 compressed (40-48px) → Z4 open (56-64px) → Z5 tight (32-40px) → Z6 release (64-80px). Uniform density contradicts the observatory metaphor. | Deploy zone-specific padding from Section 4. Measure all section gaps — verify variation. If 3+ consecutive sections have identical padding, vary them. |
| Same-Velocity Stacking | MEDIUM | Parts II-IV are all REFERENCE register. Parts VIII-XII are all CODE/REFERENCE. Adjacent same-register sections create monotonous rhythm within zones. Part II (taxonomy) should feel more spacious than Part III (isolation details). | Vary velocity within same-register stretches. Part II (taxonomy): 48px padding, display elements. Part III (isolation): 40px, more code-heavy. Part IV (implementation): 32px, densest code. Create SLOW-FAST-SLOW micro-rhythm within each zone. |
| Traffic-Light Color Adjacency | MEDIUM | Build guide checkpoints (Part XII — "you should see" = green signal) adjacent to anti-patterns (Part X — warning = coral/red). Green next to red undermines both signals. | Use accent-blue (#4A90D9) for checkpoints instead of green. Reserve green for genuine success states. Separate any green from red/coral by 48px+ of neutral content. |
| Decorative Grid Breaking | MEDIUM | 8-domain panel grid (Zone 2) is the spatial centerpiece. Temptation to add fancy borders, connecting lines, or ornamental bridges between panels. The TC brief explicitly demands isolation: "explicit gaps, no shared borders." The ~/shared/ handoff must be visually subordinate. | Grid isolation via `gap: 32px`, not decoration. No connecting lines, arrows, or decorative pseudo-elements (::before, ::after) spanning across grid cells. ~/shared/ rendered as small text below grid, not within grid. |
| Semi-Transparent Backgrounds | MEDIUM | This build has heavy code block and callout usage. Most common vectors: `callout code { background: rgba(0,0,0,0.04); }` for inline code within callouts, and offset pseudo-elements with opacity < 1.0. Survives multiple review layers — every OD re-enrichment found new instances. | Binary rule: opacity === 1.0 on ALL visual elements. Replace `rgba(0,0,0,0.04)` with `#F0EBE3`. Search CSS for `rgba(` and `opacity:` — any alpha < 1.0 = FAIL. |
| Whitespace Void (>300px gap) | MEDIUM | Long page (~6,700 words, 17 parts). Risk of stacked breathing zones between small parts (XVI, XVII) creating cumulative dead space >300px. The TC brief prescribes generous Z1 and Z6 breathing — risk of overdoing it. | Measure TOTAL vertical gap at every section boundary (padding-bottom + margin-bottom + padding-top of next section). Flag any sum > 200px. No single breathing zone exceeds 300px. Budget: 15-25% of total page height is whitespace. |

**CHECK PROCEDURE (do this in order):**
1. SCAN for soul violations: search CSS for `border-radius`, `box-shadow`, `rgba`, `gradient`, `2px` border values
2. SCAN for whitespace voids: measure total gap at every zone boundary. Flag any sum > 200px
3. SCAN for callout density: count `.callout` elements in any 800px vertical slice. Must be ≤ 2
4. SCAN for velocity stacking: list all components in order. Flag any two consecutive SLOW code blocks without a FAST buffer (prose bridge or callout) between them
5. SCAN for code walls: count consecutive `<pre>` elements. Flag 2+ adjacent siblings with no intervening prose
6. SCAN for uniform density: measure padding on all zone containers. Verify at least 3 distinct values
7. SCAN for responsive: test 8-domain grid at 960px, 768px, and 480px. Grid must collapse to single column at 768px

---

## 7. PROVEN CSS PATTERNS

### Pattern 1: Zone Transition via Background Shift + Spacing

From OD-004, DD-003, DD-006 (4 case studies converging on zone background differentiation):
```css
/* CASE-STUDY OD-004 + DD-003: Zone boundary atmospheric shift */
.zone--threshold {
  background: #FEF9F5;    /* warm cream — dome interior */
  padding: 64px 0;
}
.zone--instruments {
  background: #FFFFFF;     /* clean white — working light */
  padding: 40px 0;
  border-top: 3px solid #E0D5C5; /* structural boundary — entering the instrument floor */
}
.zone--observation {
  background: #FAF5ED;    /* sepia — observation log */
  padding: 48px 0;
}
.zone--journal {
  background: #FEF9F5;    /* warm cream returns — philosopher breathes */
  padding: 56px 0;
}
```
**When to use:** At every zone boundary. The background shift IS the transition — no additional decorative dividers needed. The 3px structural border marks the sharpest transitions (entering/leaving the instrument floor). Rename properties to match your observatory concepts.

### Pattern 2: Code Block as Brass Fitting (Dark 2-Zone)

From COMP-F-009 (validated across all explorations) + TC brief Creative Waypoint 3:
```css
/* COMP-F-009 + TC-BRIEF: Code as brass instrument fitting */
.code-block {
  border: 1px solid #E0D5C5;
  overflow: hidden;
}

.code-block__header {
  background: #27272A;
  color: #FEF9F5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  /* Dense label zone — compressed, information-packed */
}

.code-block__body {
  background: #1A1A1A;
  color: #FEF9F5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 16px;
  /* Sparse body zone — readable, the specification itself */
  /* These are brass fittings on a telescope — old, solid, engineered */
}
```
**When to use:** ALL code blocks (bash scripts, tmux commands, cron jobs, CLAUDE.md configs, directory trees). The 2-zone DNA (dense label + sparse body) mirrors the fractal principle at component scale.

### Pattern 3: Blockquote as Eyepiece Moment

From S1 finding R2-001 + TC brief Creative Condition 3:
```css
/* FINDING R2-001 + TC-BRIEF: Blockquote as optical instrument */
blockquote {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.8;
  border-left: 3px solid #E0D5C5;
  padding: 16px 0 16px 24px;
  margin: 40px 0;
  max-width: 85%;
  color: var(--color-text);
  /* NOT the 4px callout border — thinner, implying optical precision.
     The reader looks through a lens — a shift in focus, narrowing attention. */
}

/* The "violent gap" quote — enhanced waypoint treatment */
.waypoint--violent-gap blockquote {
  font-size: 1.4rem;
  max-width: 100%;
  padding: 56px 0;
  text-align: center;
  border-left: none;
  /* Full container width — this IS the dome slit opening */
}

/* Zone 6 closing constellation — discrete astronomical observations */
.zone--nightsky blockquote {
  margin: 56px 0; /* distance between stars */
  /* Each quote floats on the page surface — no background, no box */
}
```
**When to use:** ALL 7 key Cantillon blockquotes. Standard treatment for most quotes. Enhanced treatment for "violent gap" (Zone 1). Constellation treatment for Zone 6 closing quotes. Blockquotes are NOT callouts — they are eyepiece moments, intimate and precise.

### Pattern 4: Instrument Panel with Domain-Specific Density

From S3 DD-003 (islands) + S1 R4-005 (varied cell sizes) + TC brief Compositional Question 1:
```css
/* CASE-STUDY DD-003 + QUESTION Q1: Instrument panels with atmospheric signatures */
.instrument-panel {
  border-left: 4px solid var(--color-text);
  padding: 20px;
  background: var(--color-bg);
}

/* Domain-specific internal density — spatial rhythm betrays character */
.panel--trades {
  padding: 16px;
  line-height: 1.4;
  /* Financial data is dense, fast — compressed like a ticker */
}

.panel--writing {
  padding: 24px;
  line-height: 1.7;
  /* Creative work needs air — wider, more contemplative */
}

.panel--health {
  padding: 20px;
  line-height: 1.6;
  /* Recovery is cyclical — moderate, rhythmic */
}

.panel--nox {
  padding: 20px;
  line-height: 1.5;
  /* Startup operations — efficient, structured */
}
```
**When to use:** Zone 2's 8-domain bento grid. Each panel shares the same border weight, same background, same font — but INTERNAL SPACING varies to encode domain character. Test: cover the domain names. Can you guess which panel is ~/trades vs ~/writing from spatial rhythm alone?

### Pattern 5: Inversion Motif (Dark Zone)

From TC brief Creative Condition 1 + S1 R4-012 (breaking rhythm):
```css
/* TC-BRIEF + FINDING R4-012: Inversion motif — the content looks at the reader */
.zone--inversion {
  background: #1A1A1A;
  color: #FEF9F5;
  padding: 64px 48px;
}

.zone--inversion h3 {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  color: #FEF9F5;
  margin-bottom: 32px;
}

.zone--inversion blockquote {
  border-left: 1px solid #FAF5ED;
  color: #FAF5ED;
  opacity: 0.9;
  /* The philosophical voice in the dark — the observer's warning whispered */
}
```
**When to use:** Zone 4's Goodhart warning subsection ONLY. This is the one moment where the visual hierarchy inverts. The reader has been looking AT the content; suddenly the content looks at THEM. Use sparingly — if deployed in more than one section, the inversion loses its power.

### Pattern 6: Footer as Observatory Door

From AD-PA-CONVENTIONS C-02 (footer required — #1 most consistently flagged finding):
```css
/* SOUL + AD-PA-CONVENTIONS C-02: Visual terminus — the dome door closes */
.page-footer {
  border-top: 3px solid #E83025;
  padding: 32px 0;
  background: #1A1A1A;
  color: #FEF9F5;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  /* The reader steps outside the observatory.
     No trailing void. The visit is complete. */
}
```
**When to use:** End of page, immediately after Zone 6's final quote ("We must continue to live outside it"). No trailing cream void between last content and footer.

---

## 8. STRUCTURAL PROPOSITIONS

These are hypotheses about how the observatory metaphor should manifest. Test each
against your build. If the build does not embody a proposition, adjust CSS to move toward it.

1. **Zone boundaries should be felt, not seen.**
   The transition between zones should create a perceptual shift (background, typography, and
   spacing all change together) without heavy visual dividers. The background arc (#FEF9F5 →
   #FFFFFF → #FAF5ED → #FEF9F5 → #FFFFFF → #FEF9F5) is the atmospheric shift. The typography
   arc (Instrument Serif → Inter → JetBrains Mono → Instrument Serif → Inter → Instrument Serif)
   is the voice shift. Together they create zone identity without shouting.
   - Evidence check: Cover the zone boundaries. Can you still feel the transition from the
     background/typography shifts alone?
   - If absent: Add background color shift + typography voice change at the boundary. Do NOT add
     heavy horizontal rules or ornamental dividers.

2. **The 8-domain grid should read as simultaneity, not sequence.**
   At 1440px, the grid should create the impression of 8 instruments running simultaneously,
   even though the reader scans them sequentially. The panels need to feel PRESENT AT ONCE —
   the edges of adjacent panels imply instruments just outside the frame. This is the page's
   hardest spatial problem (Opposition 3: Parallel Simultaneity vs Linear Scroll).
   - Evidence check: Scroll so one panel is partially visible. Does it feel like part of a larger
     active array, or like a list item that happens to be cut off?
   - If absent: Increase gap between panels (32px) to create explicit isolation. Add 4px border-left
     to each panel (load-bearing walls, not decorative frames). Remove any connecting elements.

3. **Density should be perceptible at 3+ scales.**
   Zoom to 50% — the sparse/dense WAVE rhythm between zones is visible. Zoom to 100% — within
   Zone 2, the dense 8-domain grid contrasts with sparser prose sections. Zoom to 150% — within
   individual panels, the dense label/path contrasts with the sparser description. The fractal
   rhythm must survive at every zoom level.
   - Evidence check: Screenshot at 50%, 100%, 150% — density variation visible at all three.
   - If absent: Increase padding contrast between sparse zones (64px+) and dense zones (32px).
     Increase component-level contrast between label (4px gap) and body (16px padding).

4. **The philosophical voice should feel like a different person entered the room.**
   When Instrument Serif appears in Zone 4 (Goodhart warning, self-imprisonment), the reader
   should perceive a register change — not just a font swap but a voice shift. The philosopher
   speaks differently from the architect. The margins widen. The line-height opens. The
   background warms. The reader is no longer in the workshop — they are in the study.
   - Evidence check: Read Zone 2 (technical) then Zone 4 (philosophical) aloud. Does the visual
     rhythm support two different reading speeds?
   - If absent: Widen Zone 4 margins by 1.5x relative to Zone 2. Open line-height to 1.8.
     Switch key passages to Instrument Serif italic. Add background warmth (#FEF9F5).

5. **The closing constellation should feel like a field of observations, not a list.**
   Zone 6's blockquotes are not takeaways to skim. Each is a discrete bright point — a
   concentrated statement worth pausing on. "Distance between stars" (56px inter-quote spacing)
   should prevent list-reading behavior. The ragged right edges (max-width varies per quote)
   prevent visual uniformity. Each quote should feel like it belongs to a FIELD, not a stack.
   - Evidence check: Remove all quotes except one. Does that single quote feel like it belongs
     to a larger field of observations, or does it feel orphaned?
   - If absent: Increase inter-quote spacing to 56px. Set max-width to 85% (ragged right edge).
     Remove any visual framing (no background, no box). Each quote floats on the page surface.

---

## Agent Log: Synthesizer (Pass 3)
- Anti-patterns risk-profiled: 8 (3 HIGH: code wall, callout cacophony, uniform density; 5 MEDIUM: same-velocity, traffic-light, decorative grid, semi-transparent, whitespace void)
- CSS patterns included: 6 (zone transitions, code blocks, blockquotes, instrument panels, inversion motif, footer)
- Propositions defined: 5 (zone boundaries, grid simultaneity, multi-scale density, philosophical voice, closing constellation)
- Output size: 178 lines
