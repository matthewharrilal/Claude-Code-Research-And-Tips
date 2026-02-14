# Gas Town Fix Report

## File 1: metaphor-1-industrial-refinery.html

### Fix 1A: Dead zone between comparison table and flow-pipe (MEDIUM)
- **Problem**: Large gap between the comparison table section and the flow-pipe annotation below it, where the page lost momentum.
- **Fix**: Added `margin: -32px auto 0` to the flow-pipe wrapper div to pull it up closer to the comparison table, reducing the dead zone from ~96px (64px processing-zone padding + 32px natural margin) to ~32px.
- **Verification**: The flow-pipe now follows the table with continuity rather than a momentum-killing gap.

### Fix 1B: Gauge strip wrapping at 768px (MEDIUM)
- **Problem**: Five metrics competing for space in a narrow band at 768px, cramped layout.
- **Fix**: Added responsive rules at 768px: `flex-wrap: wrap` with `flex: 1 1 calc(50% - var(--space-md))` and `min-width: 120px` on each gauge item, so they wrap into 2-3 rows with comfortable spacing instead of cramming into one line.
- **Verification**: At 768px, gauges wrap into rows of 2-3 items with adequate spacing.

---

## File 2: metaphor-2-military-command.html

### Fix 2A: Replace green accent on situation board (HIGH)
- **Problem**: Green (#6B9B7A) on status indicators read as "dashboard health" instead of military. Broke the warm brown/red palette.
- **Fix**: Changed `.status-indicator .value` color from `var(--accent-green)` to `var(--accent-amber)` (#C49052). Amber fits the military warm-tone palette and reads as "status active" rather than "all systems go."
- **Verification**: All non-alert status values now render in amber. Alert values remain red via `.value.alert`.

### Fix 2B: Situation board density at 768px (HIGH)
- **Problem**: Five status indicators cramped in a dark strip at narrow viewport.
- **Fix**: Added responsive rules: `gap: 16px 24px` (tighter rows, wider columns), increased bottom padding on board container, and reduced `.value` font-size to 0.8125rem for better fit in the 2-column grid layout.
- **Verification**: At 768px, the 2-column grid now has breathing room between items.

---

## File 3: metaphor-3-city-zoning.html

### Fix 3A: Remove connector text labels between sections (HIGH)
- **Problem**: "MAIN STREET -- CONNECTING DISTRICTS" and similar text labels between every district over-announced the metaphor. The metaphor should be structural, not textual.
- **Fix**: Replaced all 6 `.street` elements from `<div class="street"><p>Label Text</p></div>` to empty `<div class="street"></div>`. Restyled `.street` from a text container (padding 12px 32px, centered mono text) to a silent visual divider (height: 12px, with subtle 1px top/bottom borders). Removed the `.street p` styles entirely.
- **Verification**: Districts are now separated by narrow neutral bars that feel like streets/gaps between city blocks, without announcing it.

### Fix 3B: Quiet the map legend (HIGH)
- **Problem**: Color swatches with labels looked like a prominent UI component sidebar, competing with content.
- **Fix**: Reduced legend visual weight across multiple dimensions:
  - Container: reduced padding (16px to 8px), added opacity: 0.75, darkened border (#444 to #333)
  - Title: font-size 0.6875rem to 0.5625rem, color #888 to #666
  - Swatches: 16x16px to 10x10px, lighter border (#666 to #555)
  - Labels: font-size 0.75rem to 0.625rem, color #AAA to #777
  - Gap: 32px to 24px
- **Verification**: Legend is now a quiet reference element, not a visual competitor.

---

## File 4: metaphor-4-circuit-board.html

### Fix 4A: Add connecting trace elements between IC packages (MEDIUM)
- **Problem**: Dark gaps between schematic areas felt like dead circuitry -- sections were visually disconnected.
- **Fix**: Created a `.pcb-trace-connector` component: a 32px-high container with a 1px red vertical line (::before pseudo-element) and a 9x9px red pad (::after pseudo-element) that simulates a PCB trace between component blocks. Added 4 trace connectors between the 5 major sections (overview->architecture, architecture->ground-plane, ground-plane->revisions, revisions->design-rules).
- **Verification**: Sections now visually connect via thin red traces on the dark substrate, reinforcing the PCB metaphor while solving fragmentation.

### Fix 4B: Pin header stats at 768px (MEDIUM)
- **Problem**: Cramped red values on dark background at narrow viewport.
- **Fix**: At 768px: reduced `.pin-header-inner` gap (32px to 12px), reduced `.pin-spec .value` font-size (0.8125rem to 0.75rem), reduced `.pin-spec .label` font-size (0.5625rem to 0.5rem). Also adjusted trace connector positions for mobile layout.
- **Verification**: Pin header stats now fit comfortably at narrow viewports without cramping.

---

## File 5: metaphor-5-building-floorplan.html

### Fix 5A: Replace corridor labels with visual separators (MEDIUM)
- **Problem**: "EXECUTIVE CORRIDOR -- CONNECTING TO SUPPORT OFFICES" text labels announced the metaphor instead of showing it through spatial transition.
- **Fix**: Restyled `.corridor` from a text container (padding 12px, centered mono text) to a silent visual separator (height: 8px, 1px top/bottom borders, no text). Removed `.corridor p` styles. Updated both corridor HTML elements from `<div class="corridor"><p>...</p></div>` to empty `<div class="corridor"></div>`.
- **Verification**: Corridors now appear as narrow neutral bands between rooms, suggesting passage through spatial transition rather than text announcement.

### Fix 5B: Reduce spec block visual weight in header (MEDIUM)
- **Problem**: The spec block (Occupancy, Cost, Rooms, Memory) in the upper right competed with the title for attention.
- **Fix**: Applied multiple reductions to the `.title-info` container:
  - Container: added opacity: 0.6
  - Labels: font-size 0.625rem to 0.5625rem, color #888 to #666
  - Values: font-size 0.75rem to 0.625rem, color from red (--color-primary) to muted gray (#999), min-width 100px to 80px
  - Row spacing: margin-bottom 4px to 2px
- **Verification**: Title now clearly dominates the header, with specs as a secondary quiet reference.

---

## Soul Violation Check
- border-radius: 0 -- **CONFIRMED** (no border-radius added in any fix)
- box-shadow: none -- **CONFIRMED** (no box-shadow added)
- filter: drop-shadow() -- **CONFIRMED** (none used)
- Border widths: only 1px used in new elements -- **COMPLIANT**
- Palette: all new colors from approved palette (#E83025, #C49052, #E0D5C5, etc.) -- **COMPLIANT**
- Fonts: no new fonts introduced -- **COMPLIANT**

**Total fixes applied: 10 (across 5 files)**
**Soul violations introduced: 0**
