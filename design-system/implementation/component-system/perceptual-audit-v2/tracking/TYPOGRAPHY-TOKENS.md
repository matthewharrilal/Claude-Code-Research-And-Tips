<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/tracking/TYPOGRAPHY-TOKENS.md
     Tier: B | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS

This file tracks all typography tokens extracted during the perceptual
audit, organized by their STRUCTURAL role in creating zone hierarchy,
information organization, and density. It consolidates findings from all
11 component ZONE-TYPOGRAPHY-ANALYSIS.md sub-agent analyses into three
token categories: Font Families (structural role differentiation), Font
Sizes (zone hierarchy), and per-component typography tables documenting
exact font, size, weight, and structural purpose per zone. The file
establishes the foundational three-family type system (Serif = title
zones, Sans = content zones, Mono = technical zones) and the size-based
zone separation rule (4px+ jump = zone boundary, 2px jump = within-zone
variation). This tracking file fed typography data into T1 synthesis.

2. THE QUESTION THIS ANSWERS

"What exact typography values (font family, size, weight, style) does
each KORTAI component use in each zone, and how does typography create
zone hierarchy, organize information, and control density across the
design system?"

3. STATUS

ACTIVE (locked data). All 11 components populated with zone-level
typography data. Created 2026-02-04. The three-family system
(Instrument Serif / Inter / JetBrains Mono) and 7-step size scale
(11px-28px) are locked. The Essence Callout serif italic body and
Reasoning Component serif italic title are the two documented
exceptions to the default sans-serif body typography. No further
population expected unless new components are added.

5. BUILT ON

| Source | Role | Key Values | Path |
|--------|------|------------|------|
| Code Snippet ZONE-TYPOGRAPHY-ANALYSIS.md | Component type data | Mono-dominant, 13px code, 11px labels | components/code-snippet/sub-agent-analyses/ZONE-TYPOGRAPHY-ANALYSIS.md |
| Info Callout ZONE-TYPOGRAPHY-ANALYSIS.md | Component type data | Sans only, 10-11px label, 14-16px body | components/info-callout/sub-agent-analyses/ZONE-TYPOGRAPHY-ANALYSIS.md |
| Tip Callout ZONE-TYPOGRAPHY-ANALYSIS.md | Component type data | Same as Info (family DNA) | components/tip-callout/sub-agent-analyses/ZONE-TYPOGRAPHY-ANALYSIS.md |
| Gotcha Callout ZONE-TYPOGRAPHY-ANALYSIS.md | Component type data | Same as Info (family DNA) | components/gotcha-callout/sub-agent-analyses/ZONE-TYPOGRAPHY-ANALYSIS.md |
| Essence Callout ZONE-TYPOGRAPHY-ANALYSIS.md | Component type data | UNIQUE serif italic body | components/essence-callout/sub-agent-analyses/ZONE-TYPOGRAPHY-ANALYSIS.md |
| Challenge Callout ZONE-TYPOGRAPHY-ANALYSIS.md | Component type data | Same as Info (family DNA) | components/challenge-callout/sub-agent-analyses/ZONE-TYPOGRAPHY-ANALYSIS.md |
| File Tree ZONE-TYPOGRAPHY-ANALYSIS.md | Component type data | Mono-dominant, typography IS architecture | components/file-tree/sub-agent-analyses/ZONE-TYPOGRAPHY-ANALYSIS.md |
| Decision Matrix minimal audit | Type data | Sans 4-tier hierarchy, 10-14px range | (minimal audit) |
| Core Abstraction minimal audit | Type data | Serif italic quote + mono code (composite) | (minimal audit) |
| Task Component minimal audit | Type data | Strikethrough for completion, weight descent | (minimal audit) |
| Reasoning Component minimal audit | Type data | Serif italic title, sans body, amber summary | (minimal audit) |
| typography-system/ CSS files | Font family decisions | Instrument Serif, Inter, JetBrains Mono | ../../typography-system/ |

6. MUST HONOR

| # | Constraint | Rationale |
|---|-----------|-----------|
| 1 | Values in this file were consolidated into T1 synthesis (DESIGN-TOKEN-SUMMARY.md) | Do not modify without checking synthesis files for downstream impact |
| 2 | Three-family system (serif/sans/mono) is soul-locked | Font family choices are perceptual decisions, not arbitrary -- serif = editorial, sans = functional, mono = technical |
| 3 | Essence Callout serif italic body is the ONLY callout with non-sans body | This is a documented soul exception that creates "editorial pull-quote prominence" -- it must not be normalized |
| 4 | Size jump rule: 4px+ = zone boundary, 2px = within-zone | This governs how font size creates visual hierarchy -- it is a design principle, not just a measurement |
| 5 | Typography Truth statements are perceptual observations | They describe what the typography FEELS LIKE, not just what it IS -- treat as soul data |

8. CONSUMED BY

| Consumer | How It Uses This File |
|----------|----------------------|
| synthesis/DESIGN-TOKEN-SUMMARY.md (T1) | Consolidates font families, size scale, and weight tokens into the canonical :root CSS variable block |
| showcase/checkpoints/MASTER-STATE.md | References typography token values for implementation verification |
| synthesis/PRODUCTION-RULES.md (T1) | Uses typography data to enforce font usage constraints (e.g., "serif only for titles and Essence body") |
| synthesis/CHARACTER-FAMILY-COMPLETE.md (T1) | References typography exceptions (Essence serif, Reasoning serif title) in character specifications |

10. DIAGNOSTIC QUESTIONS

Q1: Do all 11 component sections contain a "Typography Truth" summary statement and a complete zone-by-zone table with Font, Size, Weight, and Structural Purpose columns? (Expected: YES)

Q2: Are there exactly 2 components that use Serif (Instrument Serif) in their body/content zones -- Essence Callout (body) and Core Abstraction (wisdom quote) -- plus 1 that uses it for a title zone (Reasoning Component)? (Expected: YES -- these are the only serif exceptions)

Q3: Does the 7-step size scale (size-xs:11px through size-2xl:28px) in the "FONT SIZES" section match the values in synthesis/DESIGN-TOKEN-SUMMARY.md, and does every component's per-zone size fall within this scale? (Expected: YES -- no values outside the scale)

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
# TYPOGRAPHY TOKENS — Structural Focus
## Phase 4 Re-Audit Tracking Sheet

═══════════════════════════════════════════════════════════════════════════════
## PURPOSE
═══════════════════════════════════════════════════════════════════════════════

Track typography tokens with STRUCTURAL focus:
- How type creates ZONE HIERARCHY
- How type treatments ORGANIZE information
- How type scale affects DENSITY

═══════════════════════════════════════════════════════════════════════════════
## FONT FAMILIES — STRUCTURAL ROLE
═══════════════════════════════════════════════════════════════════════════════

| Token | Value | STRUCTURAL Role | Zone Usage |
|-------|-------|-----------------|------------|
| font-serif | Instrument Serif, Georgia, serif | Zone title differentiation | Title zones |
| font-sans | Inter, system-ui, sans-serif | Body/metadata zones | Content zones |
| font-mono | JetBrains Mono, monospace | Technical content zones | Code zones |

### Structural Hierarchy Created:
- **Serif** → "This is a title zone" (editorial)
- **Sans** → "This is a content zone" (functional)
- **Mono** → "This is a technical zone" (precise)

═══════════════════════════════════════════════════════════════════════════════
## FONT SIZES — ZONE HIERARCHY
═══════════════════════════════════════════════════════════════════════════════

| Token | Value | Zone Hierarchy Role | Density Impact |
|-------|-------|---------------------|----------------|
| size-xs | 11px | Tertiary (labels, metadata) | HIGH density |
| size-sm | 12px | Secondary supporting | MED-HIGH density |
| size-base | 14px | Primary body | MED density |
| size-md | 16px | Large body | MED-LOW density |
| size-lg | 20px | Small title | LOW density |
| size-xl | 24px | Medium title | LOW density |
| size-2xl | 28px | Large title | VERY LOW density |

### Size Creates Zone Separation:
- Jump of 4px+ = zone boundary
- Jump of 2px = within-zone variation

═══════════════════════════════════════════════════════════════════════════════
## USAGE BY COMPONENT (Re-Audit Phase)
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet — The Precise Transcriptionist
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Language Label | Sans (Inter) | 11px | Medium 600 | Identification — "what language is this?" |
| Copy Button | Sans (Inter) | 10px | Medium 500 | Utility — discoverable but quiet |
| Line Numbers | Mono (JetBrains) | 13px | Regular 400 | Reference — ghosted ruler, orientation |
| Code Content | Mono (JetBrains) | 13px | Regular 400 | Primary — syntax-highlighted, dominant |

**Typography Truth:** "Dark window typography — mono dominates as technical precision, sans labels are utility signage."

---

### Info Callout — The Senior Concierge
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Label | Sans (Inter) | 10-11px | Medium 600 | Type identification — uppercase, muted |
| Body | Sans (Inter) | 14-16px | Regular 400 | Information delivery — near-black |

**Typography Truth:** "Editorial annotation — small label identifies, body delivers, no decoration."

---

### Tip Callout — The Seasoned Colleague
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Label | Sans (Inter) | 10-11px | Medium 600 | Type identification — green accent |
| Body | Sans (Inter) | 14-16px | Regular 400 | Information delivery — near-black |

**Typography Truth:** "Same as Info — color is the only differentiator, structural DNA identical."

---

### Gotcha Callout — The Vigilant Sentinel
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Label | Sans (Inter) | 10-11px | Medium 600 | Type identification — red/coral accent |
| Body | Sans (Inter) | 14-16px | Regular 400 | Warning delivery — near-black |

**Typography Truth:** "Same as Info — color creates urgency, typography remains calm."

---

### Essence Callout — The Archivist of Axioms ★
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Label | Sans (Inter) | 10-11px | Medium 600 | Type identification — amber accent |
| Body | **Serif (Instrument Serif)** | 14-16px | **Italic 400i** | WISDOM — pull-quote aesthetic |
| Attribution | Sans (Inter) | 12px | Regular 400 | Source — em-dash + name |

**Typography Truth:** "UNIQUE in family — serif italic body creates editorial pull-quote prominence. Typography IS the emphasis, not decoration."

---

### Challenge Callout — The Spirited Catalyst
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Label | Sans (Inter) | 10-11px | Medium 600 | Type identification — purple accent |
| Body | Sans (Inter) | 14-16px | Regular 400 | Task delivery — near-black |

**Typography Truth:** "Same as Info — color invites action, typography remains professional."

---

### File Tree — The Methodical Surveyor
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Label | Sans (Inter) | 10-11px | Medium 600 | Context title — optional |
| Tree Structure | Mono (JetBrains) | 13-14px | Regular 400 | ASCII characters create hierarchy |
| Folder Names | Mono (JetBrains) | 13-14px | Regular 400 | Blue color marks landmarks |
| File Names | Mono (JetBrains) | 13-14px | Regular 400 | Near-black |
| Comments | Mono (JetBrains) | 13-14px | Regular 400 | Gray — annotations recede |

**Typography Truth:** "Typography IS architecture — monospace alignment + ASCII connectors create visual hierarchy without CSS grid."

---

### Decision Matrix — The Impartial Cartographer
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Title | Sans (Inter) | 11px | Semibold 600 | Category — red accent, uppercase |
| Column Headers | Sans (Inter) | 10px | Medium 500 | Structure definition — uppercase, muted |
| Cell Content | Sans (Inter) | 14px | Regular 400 | Data — scannable rows |

**Typography Truth:** "Reference index typography — four-tier hierarchy (title > headers > cells), weight creates distinction."

---

### Core Abstraction — The Sagacious Mentor
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Principle Label | Sans (Inter) | 10-11px | Medium 600 | Category — red accent, uppercase |
| Wisdom Quote | **Serif (Instrument Serif)** | 14-16px | **Italic 400i** | Philosophy — editorial pull-quote |
| Attribution | Sans (Inter) | 12px | Regular 400 | Source — em-dash + name |
| Implementation Label | Sans (Inter) | 10-11px | Medium 600 | Section marker — muted |
| Code Content | Mono (JetBrains) | 13px | Regular 400 | Demonstration — dark block |
| Commentary | Sans (Inter) | 14px | Regular 400 | Connection — prose explanation |

**Typography Truth:** "Teaching unit typography — philosophy (serif italic) meets demonstration (mono) in one bounded frame."

---

### Task Component — The Diligent Scribe
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| List Header | Sans (Inter) | 12px | Semibold 600 | Group identification — red underline |
| Progress Counter | Mono (JetBrains) | 11px | Regular 400 | Status — "X of Y" |
| Task Title | Sans (Inter) | 14px | Medium 500 | Primary — what to do |
| Task Description | Sans (Inter) | 13px | Regular 400 | Secondary — how to do it |
| Metadata | Sans (Inter) | 11px | Medium 500 | Tertiary — badges (due, priority) |
| Completed Title | Sans (Inter) | 14px | ~~Strikethrough~~ | Visual completion signal |

**Typography Truth:** "Checklist typography — strikethrough for completion (editorial, not removal), weight descends through zones."

---

### Reasoning Component — The Deliberative Counselor
| Zone | Font | Size | Weight | Structural Purpose |
|------|------|------|--------|--------------------|
| Question/Title | **Serif (Instrument Serif)** | 16-18px | **Italic 400i** | Frame the decision — editorial |
| Column Labels | Sans (Inter) | 11px | Semibold 600 | Option identification — red, uppercase |
| Column Content | Sans (Inter) | 14px | Regular 400 | Prose paragraphs — equal weight |
| Summary Label | Sans (Inter) | 11px | Semibold 600 | Synthesis marker — amber, uppercase |
| Summary Content | Sans (Inter) | 14px | Regular 400 | Guidance — warm background |

**Typography Truth:** "Debate brief typography — serif italic frames question, sans presents options with equal weight, amber zone offers synthesis."

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Status:** Template ready, awaiting re-audit data
**Update Frequency:** After each component re-audit
