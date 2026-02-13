<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/tracking/SPACING-TOKENS.md
     Tier: B | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
This file is the canonical tracking sheet for all spacing token values extracted
during the Phase 4 perceptual re-audit of 11 KORTAI components. It documents the
8-step spacing scale (4px to 48px) and records how each component uses spacing to
create organized density, zone boundaries, and breathing points. The "Spacing Truth"
prose summaries per component capture the perceptual intent behind raw pixel values,
making this the bridge between measured CSS and the editorial soul.

2. THE QUESTION THIS ANSWERS
"What are the exact spacing values used by each KORTAI component, and what
structural role does each value play in creating zone boundaries and density rhythm?"

3. STATUS
ACTIVE — Populated during Phase 4 re-audit (2026-02-04). Values consolidated into
T1 DESIGN-TOKEN-SUMMARY.md. This file remains the detailed source record; the
synthesis file is the locked authority for downstream consumers.

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| Code Snippet zone-spacing analysis | Spacing data for 1 of 11 components | padding 16px, header 12px, line-height 1.6 | components/code-snippet/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |
| Info Callout zone-spacing analysis | Spacing data | 24/28px asymmetric padding, 8px label-body | components/info-callout/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |
| File Tree zone-spacing analysis | Spacing data | 4-space indent, 1.4 line-height | components/file-tree/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |
| Decision Matrix zone-spacing analysis | Spacing data | 48px row height, 24px col gap | components/decision-matrix/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |
| Core Abstraction zone-spacing analysis | Spacing data | 1px frame, 16px code padding | components/core-abstraction/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |
| Task Component zone-spacing analysis | Spacing data | 12px checkbox gap, 0px task-task gap | components/task-component/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |
| Reasoning Component zone-spacing analysis | Spacing data | 16-20px column padding, 1px divider | components/reasoning-component/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |
| All 7 full zone files (+ callout variants) | Complete per-component spacing audits | Full spacing tables per component | components/*/sub-agent-analyses/ZONE-SPACING-ANALYSIS.md |

6. MUST HONOR
| Constraint | Detail |
|------------|--------|
| Values are consolidated into T1 | Any modification here must be checked against synthesis/DESIGN-TOKEN-SUMMARY.md |
| 8-step spacing scale is locked | space-xs(4) through space-3xl(48) — do not add or remove steps |
| Structural boundary semantics are authoritative | 4-8px = "one thing", 12-16px = "related", 24-32px = "sections", 48px+ = "regions" |
| Spacing Truths are editorial | Prose summaries capture soul intent; do not reduce to pure numbers |
| Asymmetric padding is intentional | Callout 24/28 top/bottom is a deliberate soul choice, not a bug |

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| synthesis/DESIGN-TOKEN-SUMMARY.md (T1) | Consolidated spacing scale values into locked :root block |
| MASTER-STATE.md / MASTER-INDEX.md | References this as authoritative spacing tracking document |
| Any future component implementation | Source data for spacing decisions and density rationale |
| CONSISTENCY-REGISTRY.md | Cross-references spacing values for consistency verification |

10. DIAGNOSTIC QUESTIONS
Q1: Does the 8-step spacing scale here (4/8/12/16/20/24/32/48) exactly match
    the --space-* tokens in synthesis/DESIGN-TOKEN-SUMMARY.md?
Q2: Are all 11 components represented with per-component spacing tables, or are
    any missing from the "USAGE BY COMPONENT" section?
Q3: Does the callout family still document asymmetric padding (24px top / 28px
    bottom), and is this reflected in the T1 synthesis?

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
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
