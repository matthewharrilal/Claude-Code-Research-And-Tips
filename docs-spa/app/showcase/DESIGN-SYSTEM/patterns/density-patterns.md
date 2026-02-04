# Density Patterns
## Layout Rhythm for Documentation

═══════════════════════════════════════════════════════════════════════════════

## The 4 Density Patterns

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
