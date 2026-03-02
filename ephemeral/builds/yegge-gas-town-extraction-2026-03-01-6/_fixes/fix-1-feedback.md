# Fix 1: Refinement Based on Perceptual Audit Synthesis

**Builder:** Refinement pass (second builder)
**Direction from:** Weaver synthesis of 5-auditor perceptual audit
**Verdict received:** REFINE

---

## Dominant Finding Addressed

**"The dark zone has no rooms inside it."** All 5 auditors identified that the middle two-thirds of the page -- Z3 (Tactical Map) and Z4 (Command Console) -- presented as an undifferentiated mass of dark rectangles. The content changed (architecture to roles to configuration to memory to principles to implementation to troubleshooting) but the visual treatment did not acknowledge those shifts. The page "descended into a well-built mine with an excellent guide who forgot to install the lanterns between chambers."

---

## Changes Made

### 1. RELEASE: Three Light Interludes Inserted (Type A + Type B)

Inserted three `.interlude` breathing moments that break the long dark corridor into navigable chambers:

**Interlude 1 -- Between 8 Roles and Beads Memory System:**
Split Z3 into two `<section>` elements with a warm-parchment interlude between them. The reader has just absorbed the 8 roles (the densest structural content on the page). The interlude reorients: "You now know who works in the factory... Next: the system that gives your agents a past." This turns a single unbroken earthy zone into two distinct stations with a visible doorway between them.

**Interlude 2 -- Between Z3 (6 Waves/Dev Evolution) and Z4 (Core Principles):**
This is the page's structural pivot point -- the shift from UNDERSTANDING to DOING. The conviction brief called this "the moment in a briefing when the commander says 'here are your orders.'" The interlude marks it: "The briefing is over. Here are your orders." The Weaver called for "signal that the content is changing." This is the largest such signal.

**Interlude 3 -- Between Implementation and Troubleshooting:**
After the installation guide and daily workflow (the most procedurally dense section), the reader needs a gear shift before the diagnostic content. The interlude reframes: "Your factory is running... What follows is the field manual for when the machinery jams." This separates the "happy path" from the "recovery path."

**CSS treatment:** The interludes use `--dispatch-interlude: #F5EDE0` -- a warm parchment that is visually distinct from both the earthy background (#FAF5ED, delta ~13 RGB) and the cream background (#FEF9F5, delta ~21 RGB). They use 1px borders (not 3px) to signal they are transitions, not structural zones. Centered serif italic text at 18px with maximum 680px width creates a quiet, intimate voice that contrasts with the dense technical content on either side.

### 2. AMPLIFY: Section-Owned Code Block Accents (Type A)

**Z3 code blocks:** ASCII diagrams in the tactical map now carry a 3px red left-border accent (`.z3-tactical .ascii-diagram { border-left: 3px solid var(--dispatch-red); }`). This picks up the builder's rejected Experimental Question 1 -- giving code blocks a section-ownership signal. In Z3, red = tactical urgency.

**Z4 code blocks:** All `<pre>` elements and `.code-snippet` containers within Z4 carry a 3px amber left-border accent. This makes the command console's code feel like a distinct station. In Z4, amber = operational/procedural.

This creates a perceptible difference between Z3 and Z4 code blocks that the previous builder's reflection identified wanting but held back from. The risk of incoherence is managed by using section accent colors that already exist in the page's vocabulary (red for Z3 tactical, amber for Z4 operational).

### 3. DEEPEN: Dense-Context Callout Variants (Type A)

Added `.callout--dense-context` modifier class for callouts that appear in zones dense with dark code blocks. These use stronger background tones (e.g., `--bg-warning-strong: #FDECE9`, `--bg-tip-strong: #E8F5EC`) that are ~15-20 RGB points more saturated than the standard callout backgrounds.

Applied to:
- The "Critical Warning" callout at the end of Z3 (near the dev evolution tables)
- The two "Checkpoint" callouts in Z4 (after installation and role startup code)

These callouts now hold their ground visually when surrounded by dark code blocks instead of appearing washed out.

### 4. FIX: Zone Label Proximity (Type A)

The Z1 section indicator ("Z1 -- BRIEFING ROOM") had `margin-bottom: 16px` and a bottom border, creating visual distance from the page title below it. Changed to: `margin-bottom: 8px`, `padding-bottom: 0`, `border-bottom: none`. The label now reads as a classification tag attached to the title, not a floating orphan. This was flagged by the Weaver as a mechanical note.

### 5. FIX: Header Bar Narrow Viewport (Type A)

At narrow viewports, the header now stacks vertically (flex-direction: column) and the meta text reduces to 10px. Added `white-space: nowrap` to the header-id to prevent the "KortAI / Deep Extraction" identifier from wrapping mid-word. This was flagged by the Weaver as a mechanical note about competing text at narrow viewport.

---

## What Was NOT Changed

### The Blackletter/Serif Title Face
Two auditors flagged the Instrument Serif italic title as incongruent with the modern technical voice. The Weaver classified this as Type C (judgment call). I chose to keep it because: (a) the conviction brief explicitly calls for "Instrument Serif at display sizes for the page title" as part of the briefing room's authority voice, (b) the builder's reflection shows this was an intentional choice grounded in the type arc, and (c) the Weaver noted "if it stays, commit to it harder" -- it already appears in h2 and h3 throughout the page, which IS commitment.

### The Breathing Zone Between Z2 and Z3
The original builder placed a breathing-zone quote ("You're not a programmer anymore...") between Z2 and Z3. The reflection noted this creates three background changes in rapid succession (white -> earthy -> earthy). I kept this unchanged because: (a) the Weaver's direction was about the dark zone's interior, not the light-to-earthy transition, and (b) removing it would collapse the Z2/Z3 boundary that all 5 auditors praised.

### Z5 Comparison Table Layout
The builder's reflection noted the three stacked comparison tables are dense and could benefit from a lateral layout. I did not change this because: (a) the Weaver did not flag it, (b) at 960px a side-by-side grid would crush cell content below readability (as the builder noted), and (c) Z5 is already the resolution zone with cream background -- it does not suffer from the dark-zone monotony problem.

---

## Structural Summary

| Section | Before | After |
|---------|--------|-------|
| Z3: Roles + Beads + Waves | One continuous earthy zone | Split into two earthy sections with warm-parchment interlude |
| Z3/Z4 boundary | 3px border, same background family | Warm-parchment interlude with reorientation text |
| Z4: Principles + Implementation + Troubleshooting | One continuous cream zone | Split into two cream sections with warm-parchment interlude |
| Z3 code blocks | Generic 3px border | Red left-border accent (section ownership) |
| Z4 code blocks | Generic 3px border | Amber left-border accent (section ownership) |
| Callouts in dense zones | Standard light backgrounds | Stronger saturated backgrounds |
| Z1 zone label | Distant from title | Tight proximity, no bottom border |
| Header at 768px | Competing text | Stacked layout, reduced meta font |

**Net effect:** The page now has 3 warm-parchment interludes acting as "lanterns between chambers." Each one reorients the reader with a brief sentence about what they have learned and what comes next. The dark code blocks in Z3 and Z4 are differentiated by section accent color. The page's macro arc (light -> dark -> light) is preserved, but the dark corridor now has internal landmarks.
