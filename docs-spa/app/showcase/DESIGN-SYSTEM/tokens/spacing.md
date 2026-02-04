# Spacing Tokens
## Locked KortAI Spacing System

═══════════════════════════════════════════════════════════════════════════════

## Spacing Scale (LOCKED)

```css
:root {
  --space-1: 4px;    /* Within element */
  --space-2: 8px;    /* Related items (within zone) */
  --space-3: 12px;   /* Zone gaps */
  --space-4: 16px;   /* Standard separation */
  --space-5: 20px;   /* Generous padding */
  --space-6: 24px;   /* Component padding */
  --space-8: 32px;   /* Section breaks */
  --space-10: 40px;  /* Large section breaks */
  --space-12: 48px;  /* Page margins */
  --space-16: 64px;  /* Major sections (EXHALE) */
  --space-20: 80px;  /* Recovery breathing */
  --space-24: 96px;  /* Sparse ocean */
}
```

═══════════════════════════════════════════════════════════════════════════════

## Structural Meanings

| Range | Meaning | Usage |
|-------|---------|-------|
| 4-8px | "These items are ONE thing" | Within element |
| 12-16px | "These are related but separate" | Related items |
| 24-32px | "These are different sections" | Section breaks |
| 48px+ | "These are different regions" | Major divisions |

═══════════════════════════════════════════════════════════════════════════════

## Density Spacing

### INHALE (Dense) Sections
```css
.section--dense {
  padding: 24px;
  margin-bottom: 24px;
}
```

### EXHALE (Sparse) Sections
```css
.section--sparse {
  padding: 64px;
  margin-bottom: 80px;
}
```

### Recovery Breathing (After Dense)
**Rule:** After any dense section, add 64-80px whitespace.

```css
.dense-section + * {
  margin-top: 64px;
}
```

═══════════════════════════════════════════════════════════════════════════════

## Callout Padding (Asymmetric)

```css
.callout {
  padding-top: 24px;
  padding-right: 20px;
  padding-bottom: 28px;  /* Asymmetric! */
  padding-left: 20px;
}
```

**Why asymmetric?** Creates visual settling effect. Content "rests" at bottom.

═══════════════════════════════════════════════════════════════════════════════

## Semantic Proximity Rules

| Relationship | Spacing | Example |
|--------------|---------|---------|
| Tight coupling | 8-16px | Label to content |
| Related components | 24px | Explanation to code |
| Moderate separation | 32px | Section to section |
| Loose separation | 48-64px | Major theme changes |
| Recovery | 64-80px | After dense sections |
| Sparse ocean | 96px+ | Island separation |
