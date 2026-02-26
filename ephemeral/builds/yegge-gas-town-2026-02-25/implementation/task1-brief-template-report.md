# Task 1: Brief Template Implementation Report

**File:** `ephemeral/va-extraction/artifact-tc-brief-template.md`

## Line Count

- **BEFORE:** 224 lines
- **AFTER:** 236 lines
- **Net change:** +12 lines
- **Under 250 limit:** YES (236 < 250)

## Items Implemented

### A-01: Hover Behavior Vocabulary (P0-BLOCKING) — DONE
- Added between D-07 and D-08 (lines 198-209, 12 lines)
- Includes: prose description of hover vocabulary, binary minimum ("Deploy >= 3 hover interactions"), 3 CSS snippet examples (card hover with translateY + border, link hover with underline reveal, expandable hover with background hint)
- Marked MANDATORY with "100% loss rate in prior builds" label
- All language is binary: ">= 3 hover interactions", concrete CSS values

### A-02: Signal Declarations (P1-HIGH) — DONE
- Added to Tier 2 after perception thresholds (lines 55-57, 3 lines)
- Specifies: placement (first 20 lines), format (`<!-- SIGNAL-NAME: true/false -->`), minimum declarations (SCROLL-REVEALS, HOVER-STATES, RESPONSIVE)
- Binary language throughout: "At minimum, declare..."

### A-04: Edge-Zone Minimum Channel Count (P1-HIGH) — DONE
- Reformatted multi-coherence section from paragraph to 5 numbered requirements (lines 104-112)
- Net line change: +2 (slightly more structured but same content)
- Explicit edge-zone requirement added: "At edge-zone boundaries (first and last zone transitions), deploy >= 3 channels."
- All minimums now numbered and binary: ">= 3 distinct channels", ">= 4 channels per boundary", ">= 3 channels at edge zones", ">= 3 distinct transition types"

### A-10: Compress Content Map Appendix (P2-MEDIUM) — DONE
- Replaced verbose 7-bullet appendix instruction + 3 assembly rules (lines 201-224 original, 24 lines) with compressed format (lines 219-235, 17 lines)
- Appendix instruction now specifies COMPRESSED format: zone table + metaphor + arc + reader only
- Removed "count-gates" assembly rule (redundant with reformatted multi-coherence)
- Removed "verbatim from Phase 0" rule (replaced with "COMPRESSED" instruction)
- Savings: ~7 lines net from this section

## Items NOT Implemented

None. All 4 items implemented.

## Soft Language Audit

Scanned all additions (lines 55-57, 104-112, 198-209, 219-235) for:
- "target": 0 occurrences in additions
- "aim for": 0 occurrences in additions
- "recommended": 0 occurrences in additions
- "consider": 0 occurrences in additions
- "should": 0 occurrences in additions
- "ideally": 0 occurrences in additions
- "strive": 0 occurrences in additions

**Total soft language in additions: 0**

Note: Pre-existing text contains "target" (5x), "should" (5x), "recommended" (2x), "Aim for" (1x). These were not part of my assigned changes and remain untouched per scope.

## Recipe Format Verification

All additions use recipe verbs:
- "Deploy >= 3 hover interactions" (imperative)
- "Place signal declarations" (imperative)
- "Deploy >= 3 distinct channels" (imperative)
- "Specify >= 3 distinct transition types" (imperative)
- "MAP each to a specific boundary" (imperative)
- "Append a COMPRESSED Content Map" (imperative)
