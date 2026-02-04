# SPACING TOKENS — Structural Focus
## Phase 4 Re-Audit Tracking Sheet

═══════════════════════════════════════════════════════════════════════════════
## PURPOSE
═══════════════════════════════════════════════════════════════════════════════

Track spacing tokens with STRUCTURAL focus:
- How spacing creates ORGANIZED DENSITY
- How spacing defines ZONE BOUNDARIES
- How spacing controls BREATHING POINTS

═══════════════════════════════════════════════════════════════════════════════
## SPACING SCALE — STRUCTURAL ROLE
═══════════════════════════════════════════════════════════════════════════════

| Token | Value | STRUCTURAL Role | Density Impact |
|-------|-------|-----------------|----------------|
| space-xs | 4px | Tight coupling (within element) | HIGH |
| space-sm | 8px | Related items (within zone) | MED-HIGH |
| space-md | 12px | Zone gaps (between zones) | MED |
| space-base | 16px | Standard separation | MED |
| space-lg | 20px | Generous padding | MED-LOW |
| space-xl | 24px | Component padding | LOW |
| space-2xl | 32px | Section breaks | VERY LOW |
| space-3xl | 48px | Page margins | SPARSE |

### Structural Boundaries:
- **4-8px** = "These items are ONE thing"
- **12-16px** = "These are related but separate"
- **24-32px** = "These are different sections"
- **48px+** = "These are different regions"

═══════════════════════════════════════════════════════════════════════════════
## ZONE SEPARATION METHODS
═══════════════════════════════════════════════════════════════════════════════

| Method | When Used | Components Using |
|--------|-----------|------------------|
| Whitespace only | Default (KortAI soul) | All internal zones, Task stacking |
| Whitespace + left border | Flagged emphasis | Callouts (4px left accent) |
| Whitespace + frame | Bounded unit | Core Abstraction, Reasoning (1px border) |
| Whitespace + bg color | Semantic differentiation | Essence (amber), Gotcha (pink), Code (dark) |
| Horizontal rule | Section breaks | Decision Matrix (title → headers → rows) |
| NO vertical lines | Column separation | Decision Matrix, Reasoning (whitespace columns) |

═══════════════════════════════════════════════════════════════════════════════
## USAGE BY COMPONENT (Re-Audit Phase)
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet — The Precise Transcriptionist
| Context | Value | Zone Effect | Density |
|---------|-------|-------------|---------|
| Content padding (all) | 16px | Breathing room around code | MED |
| Header padding | 12px vertical | Compact but not cramped | MED-HIGH |
| Line numbers → Code gap | 12px | Implicit gutter | HIGH |
| Line height | 1.6 | Generous vertical space | COMFORTABLE |

**Spacing Truth:** "Museum label spacing — generous enough to breathe, purposeful enough to feel curated."

---

### Callout Family (Info, Tip, Gotcha, Essence, Challenge)
| Context | Value | Zone Effect | Density |
|---------|-------|-------------|---------|
| Padding top | 24px | Breathing room entry | LOW |
| Padding bottom | 28px (asymmetric!) | Extra settling space | LOW |
| Padding left | 20px (after 4px border) | Comfortable after anchor | MED |
| Label → Body gap | 8px | Tight coupling | IMPLICIT |

**Spacing Truth:** "Asymmetric padding (24/28) says 'let this sink in' before moving on."

---

### File Tree — The Methodical Surveyor
| Context | Value | Zone Effect | Density |
|---------|-------|-------------|---------|
| Component padding | 16-20px | Breathing room around tree | MED |
| Line height | ~1.4 (tight) | Dense vertical packing | HIGH |
| Indentation per level | 4 spaces (fixed) | Hierarchy depth signal | HIGH |

**Spacing Truth:** "Indentation IS the spacing system — 4 spaces = one hierarchy level, precise alignment required."

---

### Decision Matrix — The Impartial Cartographer
| Context | Value | Zone Effect | Density |
|---------|-------|-------------|---------|
| Row height | ~48px | Generous per row | MED |
| Row padding | 16px vertical | Comfortable | MED |
| Column gap | ~24px | Clear separation (whitespace only!) | MED |

**Spacing Truth:** "No vertical borders — columns separated by whitespace only, creating open feel vs bento box."

---

### Core Abstraction — The Sagacious Mentor
| Context | Value | Zone Effect | Density |
|---------|-------|-------------|---------|
| Frame border | 1px | Bounded teaching unit | EXPLICIT |
| Label → Quote gap | Whitespace | Implicit | LOW |
| Quote → Code | Background change | Explicit transition | CONTRAST |
| Code internal padding | 16px | Breathing room | MED |

**Spacing Truth:** "Frame creates bounded space where philosophy meets demonstration — zones flow vertically."

---

### Task Component — The Diligent Scribe
| Context | Value | Zone Effect | Density |
|---------|-------|-------------|---------|
| Checkbox → Content gap | 12px | Tight coupling | MED |
| Title → Description gap | 4px | Very tight coupling | HIGH |
| Description → Metadata gap | 8px | Related items | MED |
| Task → Task gap | **0px (touching!)** | Workflow continuity | HIGH |

**Spacing Truth:** "Tasks TOUCH within lists — no gap creates continuity stream. Checkbox column forms registration line."

---

### Reasoning Component — The Deliberative Counselor
| Context | Value | Zone Effect | Density |
|---------|-------|-------------|---------|
| Frame border | 1px | Bounded analytical space | EXPLICIT |
| Title zone padding | 16px | Breathing room | LOW |
| Column divider | 1px subtle | Barely visible | IMPLICIT |
| Column internal padding | 16-20px | Per-column breathing | MED |
| Summary zone padding | 16px | Resolution space | MED |

**Spacing Truth:** "Equal column spacing creates visual neutrality — neither side favored. Summary zone differentiated by background."

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Status:** Template ready, awaiting re-audit data
**Update Frequency:** After each component re-audit
