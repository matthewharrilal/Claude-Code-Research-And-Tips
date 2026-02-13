<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/tracking/CONTAINER-TOKENS.md
     Tier: B | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
This file is the canonical tracking sheet for all container token values extracted
during the Phase 4 perceptual re-audit of 11 KORTAI components. It documents border
radius (locked at 0px), shadow behavior (locked at none), border styles (left-accent
3px, outline 1px), and the container-to-zone relationship that defines how KORTAI
components achieve structural compartmentalization. Each component's "Container Truth"
captures the perceptual intent behind containment strategies — whitespace-first, not
border-first.

2. THE QUESTION THIS ANSWERS
"What container strategies (borders, radii, shadows, backgrounds) does each KORTAI
component use, and how do these create structural zones without falling into the
'digital bento box' anti-pattern?"

3. STATUS
ACTIVE — Populated during Phase 4 re-audit (2026-02-04). Values consolidated into
T1 DESIGN-TOKEN-SUMMARY.md. This file remains the detailed source record with
per-component container analysis; the synthesis file is the locked authority.

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| Code Snippet zone-containers analysis | Container data for dark-inverted block | #1E1E1E bg, 0px radius, no shadow | components/code-snippet/sub-agent-analyses/ZONE-CONTAINERS-ANALYSIS.md |
| Callout family zone-containers analysis | Container data for left-flagged asides | 4px left border, 0px radius, semantic bg | components/info-callout/sub-agent-analyses/ZONE-CONTAINERS-ANALYSIS.md |
| File Tree zone-containers analysis | Container data for typography-as-structure | #FEFCF3 bg, optional 1px border | components/file-tree/sub-agent-analyses/ZONE-CONTAINERS-ANALYSIS.md |
| Decision Matrix zone-containers analysis | Container data for open-grid pattern | 4px left #E83025, NO vertical lines | components/decision-matrix/sub-agent-analyses/ZONE-CONTAINERS-ANALYSIS.md |
| Core Abstraction zone-containers analysis | Container data for bounded teaching unit | 1px frame, embedded dark code sub-zone | components/core-abstraction/sub-agent-analyses/ZONE-CONTAINERS-ANALYSIS.md |
| Task Component zone-containers analysis | Container data for continuity stream | 1px borders, 0px task gap, 2px header underline | components/task-component/sub-agent-analyses/ZONE-CONTAINERS-ANALYSIS.md |
| Reasoning Component zone-containers analysis | Container data for debate-brief frame | 1px frame, subtle column divider, amber summary bg | components/reasoning-component/sub-agent-analyses/ZONE-CONTAINERS-ANALYSIS.md |

6. MUST HONOR
| Constraint | Detail |
|------------|--------|
| Values are consolidated into T1 | Any modification here must be checked against synthesis/DESIGN-TOKEN-SUMMARY.md |
| border-radius: 0px is soul-locked | Sharp edges are non-negotiable across all components — no exceptions |
| box-shadow: none is soul-locked | Flat design is non-negotiable — shadows violate print heritage |
| Compartmentalization hierarchy is authoritative | Whitespace > bg color > left border > full border > shadow (never) |
| Container Truths are editorial | Prose summaries capture soul intent; do not reduce to pure CSS |
| "No vertical lines" rule for matrices | Decision Matrix uses whitespace columns, never vertical cell borders |

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| synthesis/DESIGN-TOKEN-SUMMARY.md (T1) | Consolidated container tokens into locked :root block |
| synthesis/ANTI-PATTERNS-REGISTRY.md (T1) | Container anti-patterns (rounded corners, shadows) drawn from this data |
| MASTER-INDEX.md | References this as authoritative container tracking document |
| Any future component implementation | Source data for container decisions and zone-creation rationale |

10. DIAGNOSTIC QUESTIONS
Q1: Does every component in this file confirm border-radius: 0px and box-shadow:
    none, consistent with the soul-locked values in DESIGN-TOKEN-SUMMARY.md?
Q2: Is the 5-level compartmentalization hierarchy (whitespace > bg color > left
    border > full border > shadow) explicitly documented in the CONTAINER-ZONE
    RELATIONSHIP table?
Q3: Does the Decision Matrix section explicitly state "NO vertical lines" and
    "whitespace columns" — and does ANTI-PATTERNS-REGISTRY.md cross-reference
    this as a container anti-pattern?

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
# CONTAINER TOKENS — Structural Focus
## Phase 4 Re-Audit Tracking Sheet

═══════════════════════════════════════════════════════════════════════════════
## PURPOSE
═══════════════════════════════════════════════════════════════════════════════

Track container tokens with STRUCTURAL focus:
- How containers create STRUCTURAL ZONES
- How containers define BOUNDARIES
- How containers enable COMPARTMENTALIZATION

═══════════════════════════════════════════════════════════════════════════════
## CONTAINER ELEMENTS — STRUCTURAL ROLE
═══════════════════════════════════════════════════════════════════════════════

### Border Radius (Edge Treatment)
| Token | Value | STRUCTURAL Role | Zone Feel |
|-------|-------|-----------------|-----------|
| radius-none | 0px | Sharp edges = decisive | Editorial |
| radius-sm | 4px | Slight softening | Modern |
| radius-md | 6px | Standard web | Friendly |

### Shadows (Elevation)
| Token | Value | STRUCTURAL Role | Zone Feel |
|-------|-------|-----------------|-----------|
| shadow-subtle | 0 2px 8px rgba(0,0,0,0.08) | Gentle lift | Floating |
| shadow-none | none | Flat plane | Grounded |

### Borders (Boundary Definition)
| Token | Value | STRUCTURAL Role | Zone Feel |
|-------|-------|-----------------|-----------|
| border-left-accent | 3px solid [color] | Left flag marker | Categorized |
| border-outline | 1px solid [color] | Subtle container | Defined |
| border-none | none | Content-defined | Open |

═══════════════════════════════════════════════════════════════════════════════
## CONTAINER → ZONE RELATIONSHIP
═══════════════════════════════════════════════════════════════════════════════

| Container Style | Zone Type | Structural Meaning |
|-----------------|-----------|-------------------|
| No visible container | Content-defined zone | "Content speaks" |
| Subtle shadow only | Floating zone | "Elevated content" |
| Left accent border | Flagged zone | "Semantic category" |
| Full border | Enclosed zone | "Bounded content" |
| Dark background | Inverted zone | "Focus content" |

═══════════════════════════════════════════════════════════════════════════════
## COMPARTMENTALIZATION METHODS
═══════════════════════════════════════════════════════════════════════════════

| Method | KortAI Preferred? | When Used |
|--------|-------------------|-----------|
| Whitespace | YES | Primary method |
| Background color change | YES | Semantic zones |
| Left border accent | YES | Callouts |
| Full border | Sometimes | Tables, complex data |
| Horizontal rule | RARELY | Explicit breaks |
| Drop shadow | Minimal | Card lift only |

═══════════════════════════════════════════════════════════════════════════════
## USAGE BY COMPONENT (Re-Audit Phase)
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet — The Precise Transcriptionist
| Container Element | Value | Zone Created | Structural Purpose |
|-------------------|-------|--------------|-------------------|
| Background | #1E1E1E (dark slate) | INVERTED zone | Focus area, "pay attention" |
| Border radius | 0px (sharp) | Decisive edges | Editorial precision |
| Shadow | none | Flat on page | Grounded, not floating |
| Header separator | 1px rgba(255,255,255,0.1) | SUBTLE | Barely perceptible zone break |
| External boundary | Color mass contrast | EXPLICIT | Dark block on light page |

**Container Truth:** "Dark window on cream desk — color mass defines boundary, not borders."

---

### Callout Family (Info, Tip, Gotcha, Essence, Challenge)
| Container Element | Value | Zone Created | Structural Purpose |
|-------------------|-------|--------------|-------------------|
| Left border | 4px solid [accent color] | FLAG zone | Category identification |
| Background | [tinted] or cream | Semantic zone | Type differentiation |
| Border radius | 0px (sharp) | Decisive edges | Editorial precision |
| Shadow | none | Flat | Grounded in page |
| Right/top/bottom border | none | Open | Content breathes out |

**Container Truth:** "Flag-like structure — left border anchors, other edges open. Not a box, a margin annotation."

---

### File Tree — The Methodical Surveyor
| Container Element | Value | Zone Created | Structural Purpose |
|-------------------|-------|--------------|-------------------|
| Background | #FEFCF3 (warm cream) | Matches page | Content-defined boundary |
| Border | Optional 1px light | Soft definition | Gentle containment |
| Border radius | 0px (sharp) | Decisive | Precise catalog feel |
| Shadow | none | Flat | Reference document |
| External boundary | Whitespace + padding | IMPLICIT | Tree defines own space |

**Container Truth:** "Card catalog feel — typography IS the structure, container just provides context."

---

### Decision Matrix — The Impartial Cartographer
| Container Element | Value | Zone Created | Structural Purpose |
|-------------------|-------|--------------|-------------------|
| Left border | 4px solid #E83025 | FLAG zone | Category anchor |
| Background | #FEFCF3 (warm cream) | Reference surface | Data display |
| Border radius | 0px (sharp) | Decisive | Index precision |
| Shadow | none | Flat | Reference feel |
| Horizontal rules | 1px #E5E5E5 | Section breaks | Title → Headers → Rows |
| Vertical lines | **NONE** | Whitespace columns | Open feel, not spreadsheet |

**Container Truth:** "Open grid — horizontal rules separate sections, whitespace separates columns. Never vertical prison bars."

---

### Core Abstraction — The Sagacious Mentor
| Container Element | Value | Zone Created | Structural Purpose |
|-------------------|-------|--------------|-------------------|
| Frame border | 1px #E5E5E5 | BOUNDED zone | "These belong together" |
| Border radius | 0px (sharp) | Decisive | Teaching precision |
| Shadow | none | Flat | Textbook page feel |
| Background | #FEFCF3 (cream) | Teaching surface | Unified unit |
| Embedded code | #1E1E1E bg | INVERTED sub-zone | Demonstration |

**Container Truth:** "Framed teaching unit — 1px border signals 'complete thought', embedded dark code provides proof."

---

### Task Component — The Diligent Scribe
| Container Element | Value | Zone Created | Structural Purpose |
|-------------------|-------|--------------|-------------------|
| Task border | 1px subtle #E5E5E5 | Task boundary | Individual item definition |
| List border | 1px subtle #E5E5E5 | List boundary | Group definition |
| Border radius | 0px (sharp) | Decisive | Checklist precision |
| Shadow | none | Flat | Legal pad feel |
| Header underline | 2px #E83025 | Section marker | Group identification |
| Task-to-task gap | **0px (touching!)** | Continuity stream | Workflow, not isolated items |

**Container Truth:** "Checklist stack — tasks touch to create workflow continuity, subtle borders define not decorate."

---

### Reasoning Component — The Deliberative Counselor
| Container Element | Value | Zone Created | Structural Purpose |
|-------------------|-------|--------------|-------------------|
| Frame border | 1px #E5E5E5 | BOUNDED zone | Analytical space |
| Border radius | 0px (sharp) | Decisive | Debate precision |
| Shadow | none | Flat | Brief format |
| Column divider | 1px subtle | BARELY VISIBLE | Separates without hostility |
| Summary bg | #FEF9F0 (amber tint) | SYNTHESIS zone | Different from comparison |

**Container Truth:** "Debate brief frame — bounded for analysis, subtle internal division, amber summary signals resolution."

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Status:** Template ready, awaiting re-audit data
**Update Frequency:** After each component re-audit
