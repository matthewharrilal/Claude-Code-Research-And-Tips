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
