# AD Family Preview Verification Report

**Date:** 2026-03-02
**Scope:** AD-001 through AD-006 -- all catalog cards vs preview entries

## Summary

| File | Catalog Cards | Preview Entries | Count Match | Key Match |
|------|--------------|-----------------|-------------|-----------|
| AD-001 | 24 | 24 | YES | **1 BROKEN** |
| AD-002 | 25 | 25 | YES | YES |
| AD-003 | 27 | 27 | YES | YES |
| AD-004 | 27 | 27 | YES | YES |
| AD-005 | 28 | 28 | YES | YES |
| AD-006 | 35 | 35 | YES | YES |
| **TOTAL** | **166** | **166** | **YES** | **1 bug** |

## Issues Found

### BUG: AD-001 -- Double-Escaped Unicode Arrow (BROKEN LOOKUP)

**Severity: FUNCTIONAL BUG -- this card will have NO preview at runtime**

- **Catalog card name (HTML):** `Typography Velocity Shift (Serif 600 → Sans 400)`
  - HTML source: `Serif 600 →` (literal UTF-8 arrow `→`, U+2192)
  - `textContent` at runtime: `Typography Velocity Shift (Serif 600 → Sans 400)`

- **Preview JS key:** `Typography Velocity Shift (Serif 600 \\u2192 Sans 400)`
  - The file contains literal bytes `\` `\` `u` `2` `1` `9` `2` (double-escaped unicode)
  - At JS parse time, the string becomes: `Serif 600 \u2192 Sans 400` (with literal backslash)
  - This does NOT equal the `→` character

- **Result:** `previews['Typography Velocity Shift (Serif 600 → Sans 400)']` returns `undefined` because the key contains `\u2192` (6 literal characters) instead of `→` (1 character).

- **Fix:** In `previews-ad-a.js`, change the key from:
  ```
  'Typography Velocity Shift (Serif 600 \\u2192 Sans 400)'
  ```
  to:
  ```
  'Typography Velocity Shift (Serif 600 \u2192 Sans 400)'
  ```
  (single backslash, so JS parses it as the actual `→` character)

  Or equivalently, use the literal arrow character:
  ```
  'Typography Velocity Shift (Serif 600 → Sans 400)'
  ```

### NOTE: AD-004 -- Key Ordering Differs (NOT a bug)

The preview keys in `previews-ad-b.js` for AD-004 are in a different order than the catalog cards in the HTML. Specifically, `Selection Styling` and `Callout Essence Serif Voice` appear at positions 15-16 in the JS (as gestures) but at positions 25-26 in the HTML (at the end of components). Since the lookup mechanism is key-based (`previews[name]`), ordering does not affect functionality. All 27 names match exactly between catalog and preview.

### HTML Entity Handling: Verified OK

Several card names contain HTML entities that could cause mismatches:
- `Z-Cycle (Q&amp;A Pair)` -- `textContent` yields `Q&A`, JS key is `Q&A` -- **MATCH**
- No other HTML entity issues found in the AD family.

## Per-File Element Lists

### AD-001 (24 elements)
Instruments (8): Meta Line, Running Header, Z-Hero Diagonal Metadata Panel, Z-Terminal CTA, Gutenberg Zone Properties Table, Responsive Signal Transfer Table, Fractal Scale Mapping Table, Implementation Checklist Table

Gestures (9): TIDAL Width Asymmetry (Q 60% / A 100%), Typography Velocity Shift (Serif 600 -> Sans 400) **[BROKEN]**, Zone Background Color Alternation, Border Category System (4px/3px/1px), Golden Ratio Grid Proportions, Responsive Z-Collapse at 768px, Callout Label Typography, Essence Callout Serif Voice, Selection Highlight

Components (7): Z-Hero Grid, Z-Cycle (Q&A Pair), Micro-Z Grid, Callout System (5 Variants), Chapter Divider, Section Title, Footer

### AD-002 (25 elements)
Instruments (9): Act Indicator, Tension Meter, Meta-Line (Header), Version Badge, Header (Dark Full-Bleed), Breathing Zone, Essence Pullquote, Decision Matrix Score Encoding, Page Footer

Gestures (9): CRESCENDO Spacing Compression, Line-Height Compression, Left-Spine Landmark Hierarchy, Code Density CRESCENDO, Background Zone Color Shift, Editorial Serif/Sans Register Shift, Structural Border Hierarchy, Callout Accent Color System, Responsive Collapse

Components (7): Act Zone, Content Block, Two-Column Layout, Callout, Decision Matrix, Code Block (Dark Theme), Term Definition (Inline)

### AD-003 (27 elements)
Instruments (10): Meta Line, Version Badge, Complexity Badge, Duration Badge, Category Label, Section Heading with Structural Border, Verification Checklist, Page End Marker, RAR Block, Breathing Zone

Gestures (8): Cell Size as Hierarchy, Grid Gap as Sparse Ocean, Progressive Complexity Positioning, Collapsible Island Toggle, Bookend Density Shift, Responsive Grid Collapse, Step Counter Rhythm, Typography Register Shift: Essence Callout

Components (9): Bento Cell, Bento Cell Header, Bento Cell Body, Collapsible Details Section, Step List, Split Layout, Front Bookend, Back Bookend, Cell Callout

### AD-004 (27 elements)
Instruments (8): Spiral Map, Confidence Badge, Stratum Transition Zone, Metadata Panel, Meta Line, Version Badge, Research Application Record (RAR), Page Footer

Gestures (7): Border-Weight Confidence Gradient, Confidence-Proportional Spacing (CRESCENDO Whitespace), Background Zone Shift, Typography Scale Degradation, Pull Quote Confidence Modulation, Open Question Mark Prefix, Responsive Spiral Collapse

Components (10) + Gestures at end (2): Stratum, Spiral Container, Comparison Grid, Pull Quote, Callout, Open Questions List, Header, Table, Code Block, Inline Code, Selection Styling, Callout Essence Serif Voice

### AD-005 (28 elements)
Instruments (8): Meta Line, Progress Bar, Breadcrumb Navigation, Axis Transition Marker, Axis Interstitial, Chapter Divider, Page Closing, Density Table

Gestures (10): Diagonal Clip-Path Direction Encoding, Hub-to-Spoke Background Zone Alternation, Featured Tile Typography Scale-Up, Spoke Section Typography Cascade, Territory Tile Hover Border Assertion, Scroll-Triggered Reveal, Responsive Axis Simplification, Essence Callout Register Shift, Callout Accent Variant System, Solid Offset Pseudo-Element

Components (10): Header, Territory Tile, Hub Grid, Spoke Content Container, Spoke Section, Callout, Breathing Zone, Code Block (pre), Table, Code-Explanation Pair

### AD-006 (35 elements)
Instruments (12): Scroll Witness, Axis Indicator, Meta Line, Pattern Echo Grid, Section Meta, Stratum Labels, Spoke Labels, Fractal Annotation Layer, Discovery Log, Bento Item Meta, Triple Column Headings, Research Application Record

Gestures (11): Drop Cap, Zone Background Alternation, Section Boundary Gesture, Spiral Border-Weight Confidence Encoding, F-Scanline Crescendo, Decision Matrix Cell Classification, Transition Grammar Color Coding, Solid Offset Depth, Collapsible Details State Shift, Crown Jewel Title Amplification, Typography Trinity Register Shifts

Components (12): Z-Layout, Triple Column, Bento Grid, Spiral Layout, Choreography Layout, F-Layout, Callout System, Section Header, Decision Matrix Table, Transition Grammar Matrix, Development Kitchen (Details/Collapsible), Header

## Verdict

**165 of 166 AD entries are correctly matched.** 1 entry (AD-001 "Typography Velocity Shift") has a double-escaped unicode arrow in the JS preview key that will prevent the preview from rendering at runtime. This requires a fix in `previews-ad-a.js`.
