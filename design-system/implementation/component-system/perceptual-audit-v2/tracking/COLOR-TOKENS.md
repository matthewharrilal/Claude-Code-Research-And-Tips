<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/tracking/COLOR-TOKENS.md
     Tier: B | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS

This file tracks all color tokens extracted during the perceptual audit,
organized by their STRUCTURAL role rather than mere aesthetic function.
It consolidates findings from all 11 component ZONE-COLOR-ANALYSIS.md
sub-agent analyses into three token categories: Text Colors (hierarchy
signaling), Background Colors (zone differentiation), and Accent Colors
(structural emphasis). Per-component color tables document exact hex
values and their structural purpose per zone. This tracking file was the
primary consolidation point that fed color data into the T1 synthesis
file DESIGN-TOKEN-SUMMARY.md. Note: known drift exists between some
values here and the showcase implementation for accent-amber,
accent-purple, bg-info, and bg-tip.

2. THE QUESTION THIS ANSWERS

"What exact color values does each KORTAI component use in each zone,
and what structural role does each color serve -- how does color create
zone differentiation, hierarchy signaling, and semantic meaning across
the system?"

3. STATUS

ACTIVE (locked data). All 11 components populated with zone-level color
data. Created 2026-02-04. Known drift: accent-amber (#C49052 here vs
possible variant in showcase), accent-purple (#7B68EE here vs #7C3AED
in component usage), bg-info (#F0F7FF here vs #F5F8FA in Info Callout
component section), bg-tip (#F0F7F0 here vs #F5FAF5 in Tip Callout
component section). The palette-level tokens are authoritative for T1;
component-level specifics may reflect actual measured values from audits.

5. BUILT ON

| Source | Role | Key Values | Path |
|--------|------|------------|------|
| Code Snippet ZONE-COLOR-ANALYSIS.md | Component color data | Dark slate #1E1E1E, syntax colors | components/code-snippet/sub-agent-analyses/ZONE-COLOR-ANALYSIS.md |
| Info Callout ZONE-COLOR-ANALYSIS.md | Component color data | Blue #4A90D9, bg #F5F8FA | components/info-callout/sub-agent-analyses/ZONE-COLOR-ANALYSIS.md |
| Tip Callout ZONE-COLOR-ANALYSIS.md | Component color data | Green #4A9D6B, bg #F5FAF5 | components/tip-callout/sub-agent-analyses/ZONE-COLOR-ANALYSIS.md |
| Gotcha Callout ZONE-COLOR-ANALYSIS.md | Component color data | Red #E83025, bg #FEF6F5 | components/gotcha-callout/sub-agent-analyses/ZONE-COLOR-ANALYSIS.md |
| Essence Callout ZONE-COLOR-ANALYSIS.md | Component color data | Amber #D97706, bg #FEF9F0 | components/essence-callout/sub-agent-analyses/ZONE-COLOR-ANALYSIS.md |
| Challenge Callout ZONE-COLOR-ANALYSIS.md | Component color data | Purple #7C3AED, bg #F5F0FF | components/challenge-callout/sub-agent-analyses/ZONE-COLOR-ANALYSIS.md |
| File Tree ZONE-COLOR-ANALYSIS.md | Component color data | Blue folders #4A90D9, cream #FEFCF3 | components/file-tree/sub-agent-analyses/ZONE-COLOR-ANALYSIS.md |
| Decision Matrix minimal audit | Color data | Red #E83025, cream #FEFCF3 | (minimal audit) |
| Core Abstraction minimal audit | Color data | Red labels, dark code #1E1E1E | (minimal audit) |
| Task Component minimal audit | Color data | Red #E83025 for status elements | (minimal audit) |
| Reasoning Component minimal audit | Color data | Amber #D97706 summary, red labels | (minimal audit) |

6. MUST HONOR

| # | Constraint | Rationale |
|---|-----------|-----------|
| 1 | Values in this file were consolidated into T1 synthesis (DESIGN-TOKEN-SUMMARY.md) | Do not modify without checking synthesis files for downstream impact |
| 2 | Palette-level tokens (Section: COLOR PALETTE) are the authoritative abstraction | Component-level tables show measured values; palette tokens are the canonical names |
| 3 | Known drift for accent-amber, accent-purple, bg-info, bg-tip must be resolved against DESIGN-TOKEN-SUMMARY.md | Palette section may differ from per-component measured values; T1 synthesis is the tiebreaker |
| 4 | Color Truth statements are perceptual observations, not CSS specifications | They describe what the color FEELS LIKE, not just what it IS -- treat as soul data |
| 5 | Structural role column is mandatory for every token | Color without structural justification violates the audit methodology |

8. CONSUMED BY

| Consumer | How It Uses This File |
|----------|----------------------|
| synthesis/DESIGN-TOKEN-SUMMARY.md (T1) | Consolidates palette-level tokens into the canonical :root CSS variable block |
| showcase/checkpoints/MASTER-STATE.md | References color token values for implementation verification |
| synthesis/PRODUCTION-RULES.md (T1) | Uses structural role data to enforce color usage constraints |
| Any downstream DD/OD/AD/CD work | Color token source data for implementation |

10. DIAGNOSTIC QUESTIONS

Q1: Do all 11 component sections contain a "Color Truth" summary statement and a complete zone-by-zone color table with Bg Color, Text Color, Accent, and Structural Purpose columns? (Expected: YES)

Q2: For the 4 known drift tokens (accent-amber, accent-purple, bg-info, bg-tip), do the palette-level values in the "COLOR PALETTE" section match the values in synthesis/DESIGN-TOKEN-SUMMARY.md? (Expected: Must be verified -- known drift area)

Q3: Does every accent color in the palette have a corresponding "Category flag" usage in at least one component's per-zone table? (Expected: YES -- accent-red in Gotcha, accent-blue in Info, accent-green in Tip, accent-amber in Essence/Reasoning, accent-purple in Challenge)

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
# COLOR TOKENS — Structural Focus
## Phase 4 Re-Audit Tracking Sheet

═══════════════════════════════════════════════════════════════════════════════
## PURPOSE
═══════════════════════════════════════════════════════════════════════════════

Track color tokens with STRUCTURAL focus:
- How color creates STRUCTURAL DIFFERENTIATION
- How color signals ZONE TYPE
- How color affects FINDABILITY

═══════════════════════════════════════════════════════════════════════════════
## COLOR PALETTE — STRUCTURAL ROLE
═══════════════════════════════════════════════════════════════════════════════

### Text Colors (Hierarchy Signaling)
| Token | Hex | STRUCTURAL Role | Zone Type |
|-------|-----|-----------------|-----------|
| text-primary | #1A1A1A | PRIMARY content zone | Title zones |
| text-secondary | #444444 | SUPPORTING content zone | Body zones |
| text-tertiary | #888888 | METADATA zone | Label zones |
| text-muted | #AAAAAA | CONTEXTUAL zone | Supporting zones |
| text-inverse | #FFFFFF | INVERTED zone | Dark bg zones |

### Background Colors (Zone Differentiation)
| Token | Hex | STRUCTURAL Role | Component Type |
|-------|-----|-----------------|----------------|
| bg-page | #FAFAFA | Page ground | Base |
| bg-card | #FFFFFF | Elevated zone | Cards |
| bg-warm | #FEF9F5 | Warm emphasis zone | Essence |
| bg-dark | #1A1A1A | Inverted focus zone | Code |
| bg-info | #F0F7FF | Info semantic zone | Info callout |
| bg-tip | #F0F7F0 | Tip semantic zone | Tip callout |
| bg-gotcha | #FEF6F5 | Warning semantic zone | Gotcha callout |
| bg-reasoning | #F8F6F0 | Process semantic zone | Reasoning |

### Accent Colors (Structural Emphasis)
| Token | Hex | STRUCTURAL Role | Usage |
|-------|-----|-----------------|-------|
| accent-red | #E83025 | Primary attention | Warnings, badges |
| accent-blue | #4A90D9 | Info attention | Info indicators |
| accent-green | #4A9D6B | Success attention | Tips, positive |
| accent-amber | #C49052 | Process attention | Reasoning |
| accent-purple | #7B68EE | Challenge attention | Exercises |

═══════════════════════════════════════════════════════════════════════════════
## COLOR → ZONE TYPE MAPPING
═══════════════════════════════════════════════════════════════════════════════

| Color Signal | Zone Type | Structural Meaning |
|--------------|-----------|-------------------|
| Near-black text | Title zone | "This is important" |
| Gray text | Supporting zone | "This explains" |
| Light bg | Elevated zone | "This is separate" |
| Tinted bg | Semantic zone | "This has a type" |
| Dark bg | Focus zone | "This requires attention" |
| Left border accent | Flagged zone | "This is categorized" |

═══════════════════════════════════════════════════════════════════════════════
## USAGE BY COMPONENT (Re-Audit Phase)
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet — The Precise Transcriptionist
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Container | #1E1E1E (dark slate) | — | — | INVERTED — focus zone, "this is different" |
| Header | rgba(255,255,255,0.05) | #888888 (muted) | — | Subtle chrome, quiet utility |
| Code content | #1E1E1E | Syntax colors | — | Technical workspace |
| Copy button | transparent | #666666 | hover: #888 | Discoverable but quiet |

**Color Truth:** "Dark window on cream page — color mass defines boundary, inverted space demands focus."

---

### Info Callout — The Senior Concierge
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #F5F8FA (light blue tint) | — | — | Gentle distinction from page |
| Left border | — | — | #4A90D9 (blue) | Category flag — "information" |
| Label | transparent | #4A90D9 (blue) | — | Type identification |
| Body | transparent | #3D3D3D (near-black) | — | Information delivery |

**Color Truth:** "Neutral footnote energy — blue signals 'context' without urgency."

---

### Tip Callout — The Seasoned Colleague
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #F5FAF5 (light green tint) | — | — | Friendly, organic |
| Left border | — | — | #4A9D6B (green) | Category flag — "helpful" |
| Label | transparent | #4A9D6B (green) | — | Type identification |
| Body | transparent | #3D3D3D (near-black) | — | Advice delivery |

**Color Truth:** "Friendly colleague energy — green signals 'positive suggestion'."

---

### Gotcha Callout — The Vigilant Sentinel
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #FEF6F5 (pink tint) | — | — | Warning zone — stands out |
| Left border | — | — | #E83025 (red) or #C97065 (coral) | Category flag — "danger" |
| Label | transparent | #E83025 (red) | — | Urgency identification |
| Body | transparent | #3D3D3D (near-black) | — | Warning delivery |

**Color Truth:** "Vigilant sentinel energy — red/coral says 'stop and read this' without panic."

---

### Essence Callout — The Archivist of Axioms
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #FEF9F0 (warm amber tint) | — | — | Reverent, wisdom space |
| Left border | — | — | #D97706 (amber) or #E83025 (red) | Category flag — "wisdom" |
| Label | transparent | #D97706 (amber) | — | Type identification |
| Body | transparent | #3D3D3D (near-black) | — | Serif italic wisdom |

**Color Truth:** "Reflective wisdom energy — amber/warm creates reverent space for distilled truths."

---

### Challenge Callout — The Spirited Catalyst
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #F5F0FF (light purple tint) | — | — | Creative, exploratory |
| Left border | — | — | #7C3AED (purple) | Category flag — "action" |
| Label | transparent | #7C3AED (purple) | — | Type identification |
| Body | transparent | #3D3D3D (near-black) | — | Task delivery |

**Color Truth:** "Intellectual friction energy — purple invites exploration, provocation."

---

### File Tree — The Methodical Surveyor
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #FEFCF3 (warm cream) | — | — | Matches page, content-defined |
| Root/Folders | — | #4A90D9 (blue) | — | LANDMARKS — navigation points |
| Files | — | #3D3D3D (near-black) | — | Standard entries |
| Comments | — | #888888 (gray) | — | Annotations recede |
| ASCII characters | — | #666666 (muted) | — | Structure, not content |

**Color Truth:** "Librarian's catalog — blue folders are landmarks, gray annotations don't compete with structure."

---

### Decision Matrix — The Impartial Cartographer
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #FEFCF3 (warm cream) | — | — | Reference surface |
| Left border | — | — | #E83025 (red) | Category flag — 4px accent |
| Title | transparent | #E83025 (red) | — | Matrix identification |
| Headers | transparent | #666666 (muted) | — | Structure definition |
| Cells | transparent | #3D3D3D (near-black) | — | Data content |
| Row dividers | — | — | #E5E5E5 (light) | Subtle horizontal rules |

**Color Truth:** "Reference index — red marks chapter divisions, no color bias between options."

---

### Core Abstraction — The Sagacious Mentor
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Frame | 1px #E5E5E5 | — | — | Bounded teaching unit |
| Label zones | transparent | #E83025 (red) | — | Section markers |
| Wisdom quote | transparent | #3D3D3D | — | Serif italic philosophy |
| Code block | #1E1E1E (dark) | Syntax colors | — | Embedded demonstration |
| Commentary | transparent | #3D3D3D | — | Connection prose |

**Color Truth:** "Textbook page — red labels, dark code block embedded in cream frame."

---

### Task Component — The Diligent Scribe
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Component | #FEFCF3 (warm cream) | — | — | Work surface |
| Header underline | — | — | #E83025 (red) | Section break |
| Checkbox (empty) | transparent | — | 1px #666666 | Ready for action |
| Checkbox (checked) | #E83025 (red fill) | — | — | Completion signal |
| Title | transparent | #3D3D3D | — | What to do |
| Completed title | transparent | #888888 + strikethrough | — | Visually marked done |
| Priority badge | #E83025 (red bg) | #FFFFFF | — | Urgency signal |
| Overdue badge | #E83025 (red bg) | #FFFFFF | — | Deadline signal |

**Color Truth:** "Red exclusively for status — checkbox, priority, overdue. No gamification colors."

---

### Reasoning Component — The Deliberative Counselor
| Zone | Bg Color | Text Color | Accent | Structural Purpose |
|------|----------|------------|--------|-------------------|
| Frame | 1px #E5E5E5 | — | — | Bounded analytical space |
| Title | transparent | #1A1A1A | — | Serif italic question |
| Column labels | transparent | #E83025 (red) | — | Option identification |
| Column content | transparent | #3D3D3D | — | Prose arguments |
| Column divider | — | — | 1px #E5E5E5 (subtle) | Separates without hostility |
| Summary zone | #FEF9F0 (amber tint) | #3D3D3D | — | Synthesis space |
| Summary label | transparent | #D97706 (amber) | — | "Recommendation" marker |

**Color Truth:** "Debate brief — red labels for options (equal weight), amber for synthesis (wisdom offering)."

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Status:** Template ready, awaiting re-audit data
**Update Frequency:** After each component re-audit
