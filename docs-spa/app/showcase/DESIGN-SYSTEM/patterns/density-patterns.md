---
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
provenance: Stage 2 (DD) density explorations
last_updated: 2026-02-05
---

# Density Patterns
## Layout Rhythm for Documentation

═══════════════════════════════════════════════════════════════════════════════

## PROVENANCE NOTICE

These patterns are NOT arbitrary. Each was validated through DD explorations
with perceptual deepening audit. See `provenance/stage-2-density-dd/` for full chain.

| Pattern | Exploration | Score | Finding ID |
|---------|-------------|-------|------------|
| PULSE | DD-001 Breathing | 33/40 | DD-F-001 |
| CRESCENDO | DD-002 Gradient | 35/40 | DD-F-002 |
| ISLANDS | DD-003 Islands | 32/40 | DD-F-003 |
| GEOLOGICAL | DD-004 Layers | 35/40 | DD-F-004 |
| TIDAL/RIVERS | DD-005 Rivers | 36/40 | DD-F-005 |
| FRACTAL | DD-006 Fractal | 36/40 | DD-F-006 ★ META |

**To understand WHY a pattern works:** Read its provenance in PATTERN-INDEX.md

═══════════════════════════════════════════════════════════════════════════════

## The 6 Density Patterns

### PULSE — Rhythmic High-Low Cycles
```
████░░░░████░░░░████░░░░
```

**Best For:** Tutorials, step-by-step guides

**Shape:** Alternating dense (INHALE) and sparse (EXHALE) sections

**Implementation:**
```css
.pulse-section {
  /* INHALE (dense) */
  padding: 24px;
  margin-bottom: 24px;
}

.pulse-section + .pulse-breather {
  /* EXHALE (sparse) */
  padding: 64px 0;
  margin-bottom: 80px;
}
```

**Spacing Pattern:**
- INHALE: 24px internal padding
- EXHALE: 64-80px whitespace
- Cycle: Dense → Sparse → Dense → Sparse

---

### CRESCENDO — Sparse to Dense Build
```
░░░░░░░████████████████
```

**Best For:** Onboarding, progressive learning

**Shape:** Starts sparse, gradually increases density

**Implementation:**
```css
/* Section 1: Very sparse (introduction) */
.section-1 { padding: 80px; }

/* Section 2: Sparse (context) */
.section-2 { padding: 64px; }

/* Section 3: Moderate (main content) */
.section-3 { padding: 48px; }

/* Section 4: Dense (details) */
.section-4 { padding: 24px; }

/* Section 5: Very dense (reference) */
.section-5 { padding: 16px; }
```

**Key Insight:** Remove density indicators after section 2. Users understand the pattern.

---

### BOOKENDS — Dense Ends, Sparse Middle
```
████░░░░░░░░░░░░░░████
```

**Best For:** Context-Action-Summary structures

**Shape:** Dense intro → Sparse action area → Dense summary

**Implementation:**
```css
/* Context (dense) */
.bookend-intro { padding: 24px; }

/* Action area (sparse) */
.bookend-main { padding: 64px; }

/* Summary (dense) */
.bookend-summary { padding: 24px; }
```

---

### WAVE — Irregular Rhythm
```
░░██████░░░░████░░██████░░
```

**Best For:** Long-form documentation

**Shape:** Variable peaks and valleys based on content needs

**Implementation:** No fixed pattern — respond to content.

═══════════════════════════════════════════════════════════════════════════════

## The 6 Density Dimensions

Beyond spatial density, consider:

| Dimension | Definition | How to Manipulate |
|-----------|------------|-------------------|
| **Temporal** | Information over scroll | Use PULSE/CRESCENDO patterns |
| **Depth** | Z-axis layering | Surface/Sediment/Bedrock model |
| **Semantic** | Meaning per area | Jargon vs expansion |
| **Cognitive** | Processing required | Novelty, decision points |
| **Interaction** | Clickables per viewport | Zones: exploration/action/reading |
| **Spatial** | Elements per area | Components per viewport |

═══════════════════════════════════════════════════════════════════════════════

## Key Rules

### 1. Density Debt
After dense sections, add recovery whitespace (64-80px).

### 2. Density Contrast
Sparse context makes dense feel denser. Use this intentionally.

### 3. Density Inheritance
Child elements inherit parent density. Don't fight this.

### 4. 10-Second Test
In 10 seconds, user should know: What IS this? What can I DO? How do I GO DEEPER?

### 5. Max 1-2 Callouts Per Viewport
More than 2 = alarm fatigue. The signal is lost.

═══════════════════════════════════════════════════════════════════════════════

## Pattern Selection Guide

| Content Type | Pattern | Rationale |
|--------------|---------|-----------|
| Tutorial/Learning | PULSE | Rhythmic reinforcement |
| Onboarding/Progressive | CRESCENDO | Builds confidence |
| Reference/Lookup | Islands (custom) | Dense clusters in sparse ocean |
| Long-form docs | WAVE | Responds to content needs |
| Context-Action-Summary | BOOKENDS | Clear structure |

═══════════════════════════════════════════════════════════════════════════════

## Validated Exploration Patterns (Phase 2.1 Audit)

The following patterns were validated through perceptual depth audit on 2026-02-04:

### CRESCENDO — Validated by DD-002 (Score: 34/40 INCLUDE ★)
```
░░░░░░░████████████████
```
**Exploration:** DD-002-gradient.html demonstrates sparse→dense onboarding flow.
**Key Finding:** Remove density indicators after section 2 — users learn the pattern.
**Audit Score:** 8.57/10 average across 7 zones.

### GEOLOGICAL LAYERS — Validated by DD-004 (Score: 33.5/40 INCLUDE ★)
```
Atmosphere (minimal) → Surface (low) → Topsoil (medium) → Subsoil (high) → Bedrock (max)
```
**Exploration:** DD-004-layers.html demonstrates 5-layer depth stratification.
**Key Finding:** 5-bar depth indicator system communicates layer position effectively.
**Audit Score:** 8.43/10 average across 7 zones.

### RIVER FLOW — Validated by DD-005 (Score: 34/40 INCLUDE ★)
```
Wide (sparse) ═══════════════
Medium (balanced) ═══════
Narrow (dense) ═══
```
**Exploration:** DD-005-rivers.html demonstrates width = inverse density.
**Key Finding:** Parallel rivers enable comparison; confluence points for decisions.
**Flow Patterns:** Wide→Narrow, Parallel, Delta (1→3 split), Confluence (merge).
**Audit Score:** 8.50/10 average across 7 zones.

### FRACTAL SELF-SIMILARITY — Validated by DD-006 (Score: 35/40 INCLUDE ★★ BEST)
```
Page:      █░░█░░█░░
Section:   █░░█░░█░░
Component: █░░█░░█░░
Character: █░░█░░█░░
```
**Exploration:** DD-006-fractal.html demonstrates same rhythm at all scales.
**Key Finding:** Self-similar patterns make documentation feel coherent and navigable.
**Audit Score:** 8.64/10 average across 7 zones — highest scoring exploration.

### Patterns Documented (Not Included)

**BREATHING (DD-001)** — Score: 30/40 DOCUMENT
- Inhale/Exhale rhythm works but has traffic-light anti-pattern (green+red adjacent)
- Foundation for PULSE; needs refinement before production use

**ISLANDS (DD-003)** — Score: 31/40 DOCUMENT
- Dense clusters in sparse ocean work conceptually
- Archipelago metaphor underutilized; callout borders too subtle
