# PA Auditor B — Perception Thresholds
Date: 2026-02-23
Page: Steve Yegge and Gas Town (output.html)

---

## PA-07: Are zone boundaries PERCEPTIBLY different? — **4/5**

**Verdict: YES, clearly visible, with one soft spot.**

The page uses 6 distinct zones with named factory metaphor backgrounds:

| Boundary | From | To | Delta (gate report) | Perceptible? |
|----------|------|----|---------------------|-------------|
| Header → Z1 Intake | #1A1A1A (dark) → #FEF9F5 (cream) | ~220 RGB | **Unmistakable** — dark-to-light inversion |
| Z1 Intake → Z2 Workshop | #FEF9F5 → #F0EBE0 | 21 | **Yes** — visible warm shift, reinforced by 3px border-top |
| Z2 Workshop → Z3 Floor | #F0EBE0 → #FFFFFF | 31 | **Yes** — tan to clean white is clearly distinct, reinforced by 4px dark border |
| Z3 Floor → Z4 Archive | #FFFFFF → #EDE6DA | 37 | **Yes** — white to sand is the most visible light-zone boundary |
| Z4 Archive → Z5 Output | #EDE6DA → #F8F3EB | 17 | **Weakest boundary** — both warm tones, delta just above threshold. Perceptible but requires attention. The 1px border-top helps but is subtle. |
| Z5 Output → Z6 Dispatch | #F8F3EB → #E8E1D5 | 22 | **Yes** — light to deep warm is visible |

**Critical reinforcement mechanism:** Zone boundaries are NOT relying solely on background deltas. The builder deployed structural borders at every transition point: 3px borders at Z1→Z2 and Z3→Z4, a heavy 4px dark border at Z2→Z3 (the factory floor entrance), and lighter 1px borders elsewhere. This is correct perceptual design — the border signals the boundary before the background shift registers.

**The Z4→Z5 boundary (17 RGB delta)** is the weakest link. It passes the >=15 programmatic threshold but sits at the low end of "effortlessly perceptible." In practice, it works because the content shift (from Beads/Memory to Principles) provides semantic reinforcement.

**Deduction:** -1 for the Z4→Z5 boundary being near-threshold. All other boundaries are unambiguous.


## PA-08: Is there any whitespace void? — **5/5 (No voids)**

**Verdict: NO whitespace voids detected.**

Gate results report all inter-section gaps at 0px — zones are flush against each other with no dead space between them. Examining the full-page screenshots at all three viewport widths (1440, 1024, 768):

- **No blank cream expanses.** Every viewport scroll shows content: text, diagrams, tables, code blocks, callouts, or role cards.
- **Zone padding is moderate:** Z1 Intake uses 64px top / 48px bottom (`space-16` / `space-12`), Z3 Floor uses 32px/40px (`space-8`/`space-10`), other zones use 40px/40px (`space-10`). None of these create void sensations.
- **The bottom of the page** at 768px shows the footer area with warm cream below the last zone. This is normal page termination, not a void.
- **The dark code blocks and ASCII diagrams** break up text flow effectively, preventing any sense of monotonous scrolling through uniform cream.
- **No stacked margins.** The gate runner confirmed 0px stacked gaps. Individual section padding stays well within the 96px single-margin threshold.

This is a significant improvement over previous builds (e.g., the Flagship experiment which had 6 whitespace voids of 210-276px each). The factory metaphor naturally fills space — each zone has dense content machinery.

**Score: 5/5 — Clean. No perception of wasted scroll.**


## PA-09: Does spacing feel deliberate, not accidental? — **4/5**

**Verdict: YES, spacing is deliberate and zone-adapted.**

Evidence of intentional spacing hierarchy:

1. **Zone-internal consistency:** Each zone has its own padding and rhythm:
   - Z1 Intake: generous (`space-16` top, `space-8` heading margins) — appropriately sparse for manifesto
   - Z3 Factory Floor: compressed (`space-8` top, `space-4` heading margins) — correctly dense for architecture detail
   - Z6 Dispatch: moderate (`space-10`) — balanced for implementation content

2. **Spacing shifts at zone boundaries:** The CSS explicitly adapts callout padding per zone:
   - `.zone-intake .callout`: 20px/24px padding
   - `.zone-floor .callout`: 12px/16px padding (compressed)
   - `.zone-dispatch .callout`: 16px/20px padding (moderate)
   This is deliberate density modulation, not accident.

3. **Grid spacing in role cards:** The 2-column `role-grid` uses 16px gaps (`space-4`), which feels tight-but-readable for the factory floor's peak density zone. The human role card spans full width (`grid-column: 1 / -1`), creating a clear visual hierarchy.

4. **Code block spacing:** Consistent `space-5` (20px) margins throughout. The `code-snippet` component has deliberate internal structure (header bar at 8px padding, content at 16px).

5. **One minor concern:** The transition from the Z5 inversion block (dark surprise moment) back to light content uses `margin: space-8 calc(-1 * var(--space-6))` — a negative-margin breakout. Visually this works well (the block stretches edge-to-edge), but the spacing re-entry after it could feel slightly abrupt on some viewport widths.

**Deduction:** -1 for the Z4→Z5 transition feeling slightly loose compared to the tighter Z2→Z3→Z4 sequence. The spacing rationale weakens slightly in the bottom third.


## PA-10: Is typography varied enough to be readable? — **5/5**

**Verdict: YES, excellent typographic range with clear hierarchy.**

The page deploys all three fonts from the Font Trinity across distinct roles:

| Font | Role | Sizes Used |
|------|------|-----------|
| **Instrument Serif** (italic) | Display headings (H1, H2, H3), blockquotes, callout essence text, drop cap | 48px, 32px, 24px, 18px, 3.5em (drop cap) |
| **Inter** | Body text, role card names, stat values, callout content | 18px (Z1), 16px (zones 2/4/5), 15px (Z3 dense), 14px (small) |
| **JetBrains Mono** | Code blocks, section indicators, stat labels, meta text, table headers | 14px, 13px, 11px, 10px |

**Specific typographic mechanisms observed:**

- **Drop cap** in Z1 (Instrument Serif at 3.5em, red color) — strong entry signal
- **Zone-adapted body size:** Z1 uses 18px (`text-lg`) for manifesto breathing room; Z3 uses 15px for factory floor density. This is perceptually distinct.
- **Weight range:** 400 (body), 500 (mono labels), 600 (emphasis, stat values, callout labels), 700 (role card names). Four distinct weights.
- **Letter-spacing range:** 0.03em on display headings, 0.05em on table headers, 0.1em on section indicators and mono labels. Three distinct tracking levels.
- **Text-transform:** UPPERCASE on all section indicators, stat labels, callout labels, and table headers. This creates a clear "label" register distinct from body text.
- **Color differentiation:** Headers in #1A1A1A, body in #1A1A1A, secondary in #666666, accent labels in amber/blue/green/red/purple. Labels are always colored by their semantic role.

**Score: 5/5 — The typography is doing serious work. Three fonts, four weights, three tracking levels, zone-adapted sizing, and colored semantic labels. Highly readable.**


## PA-11: Do borders communicate hierarchy? — **4/5**

**Verdict: YES, with a clear 3-tier weight system and semantic coloring.**

The border system uses three explicit weights:

| Weight | Variable | Name | Usage |
|--------|----------|------|-------|
| **4px** | `--border-town` | Town-level | Zone 3 top border (factory floor entrance), role card "town" variants, human role card, inversion block top/bottom, memory layer diagram |
| **3px** (~2.67px) | `--border-rig` | Rig-level | Header bottom, zone 2 top border, code block borders, ASCII diagrams, comparison table header rows, role card "rig" variants |
| **1px** | `--border-worker` | Worker-level | List item separators, section indicator underlines, table cell borders, zone 5 top border, inline code borders, role card details |

**Hierarchy interpretation:**
- 4px = **structural boundaries** (zone entries, important containers, the factory floor gate)
- 3px = **content containers** (code blocks, diagrams, data tables)
- 1px = **internal dividers** (within zones, between list items, subtle separation)

This is correct: thicker borders mark more important structural divisions.

**Border color adds a second hierarchy channel:**
- Dark (#1A1A1A) borders for the heaviest zone boundary (Z2→Z3)
- Red (#E83025) for the header bottom and inversion block — identity/alarm
- Amber (#D97706) for memory layer diagram — archive zone identity
- Neutral tan (#E0D5C5) for most content borders — workhorse dividers
- Subtle (#F0EBE3) for the lightest internal borders

**One concern:** The Z4→Z5 boundary uses only a 1px (worker-level) border, while Z2→Z3 gets 4px. This makes Z4→Z5 feel like an internal boundary rather than a zone transition. Given that Z4→Z5 also has the weakest background delta (17 RGB), both signals are weak at this specific transition. This is consistent with what I flagged in PA-07.

**Deduction:** -1 because the Z4→Z5 transition is under-signaled relative to other zone boundaries. Every other major boundary correctly deploys either town-level (4px) or rig-level (3px) borders.


---

## Summary Table

| Question | Score | Verdict |
|----------|-------|---------|
| PA-07: Zone boundaries perceptible? | **4/5** | Yes, 5 of 6 boundaries unambiguous. Z4→Z5 is near-threshold (17 RGB, 1px border). |
| PA-08: Any whitespace voids? | **5/5** | None. Zones are flush. Content fills every scroll position. |
| PA-09: Spacing deliberate? | **4/5** | Yes. Zone-adapted callout padding, density modulation, grid spacing. Minor looseness in bottom third. |
| PA-10: Typography varied? | **5/5** | Excellent. 3 fonts, 4 weights, 3 tracking levels, zone-adapted body sizes, semantic color. |
| PA-11: Borders communicate hierarchy? | **4/5** | Yes. Clean 3-tier system (4/3/1px) with semantic coloring. Z4→Z5 under-signaled. |

**Perception Threshold Composite: 22/25**

**Overall Assessment:** The page passes perception thresholds convincingly. The factory metaphor provides a natural framework for zone differentiation — each zone feels like a different station in the production line. The single recurring weakness is the Z4→Z5 (Archive → Output) boundary, which is the softest zone transition on both background delta (17) and border weight (1px). This is a MINOR concern, not a blocking defect — the content shift provides adequate semantic reinforcement.
