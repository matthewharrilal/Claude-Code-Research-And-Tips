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
