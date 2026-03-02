# Fix Cycle 3 Feedback (Final)

## Investigation Results

The R2 auditors flagged a "catastrophic void" between Z1 and Z2 — investigation shows the actual gap is ~147px (Z1 padding-bottom 64px + Z2 padding-top 64px + margins). This is NOT multiple screen-heights. The perception was amplified by the 30,863px full-page screenshots being scaled to 2000px. At actual viewport size, the gap is reasonable.

However, two real issues emerged:

## Issue 1: Imperceptible Zone Transitions (Type A — CSS)
Both auditors independently noted that background colors between light zones (Z1/Z2/Z4/Z5) differ by only a few RGB values. The five-zone metaphor is invisible without text labels. The zone transitions need stronger visual differentiation — a subtle border, a background shift, or a textural change at the boundary.

**Direction:** Strengthen the visual boundary between light-background zones. Options:
- A thin horizontal rule or accent border at zone boundaries
- A slightly stronger background color shift between zones
- A zone transition element (a thin colored bar matching the zone's accent)

## Issue 2: Bottom-Third Design Fatigue (Type A — CSS)
The sections after the dark zone (Checkpoints, Troubleshooting, When to Use) have repetitive structure (heading/text/bullets/callout). The second dark zone for Quotes/Comparisons repeats a trick already played. The footer feels abandoned.

**Direction:** The bottom third needs slightly more compositional variety. Quick wins:
- Give the Quotes section a different treatment than the Comparisons (don't use dark for both)
- Add subtle visual variation to callout boxes in the bottom sections
- Strengthen the footer

## Scope
These are Type A (mechanical CSS) fixes. No HTML restructuring needed. Target the two specific issues above.
