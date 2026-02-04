# Code Snippet Component: Hierarchy Analysis

## Step 1: Eye Tracking Simulation

1. **FIRST: Code content (syntax-highlighted text)**
   - Why: Highest visual contrast; colored keywords form chromatic "beacons"

2. **SECOND: Line numbers (left column)**
   - Why: Position anchors eye to left edge; vertical pattern creates visual rail

3. **THIRD: "javascript" language label**
   - Why: Top-left position is natural start; but tiny size (11px), muted color deliberately suppress prominence

4. **FOURTH: "Copy" button**
   - Why: Top-right is weak position for LTR readers; deliberately de-emphasized (small, no background, muted)

## Step 2: Hierarchy Ranking

| Rank | Element | Prominence Method |
|------|---------|-------------------|
| 1 | Code content | **Color variation**, **Size** (13px largest), **Position** (center stage) |
| 2 | Line numbers | **Position** (left rail), **Repetition** — suppressed by 0.5 opacity |
| 3 | Language label | **Position** (top-left) — suppressed by size (11px) and color (muted) |
| 4 | Copy button | **Position** (top-right) — suppressed by size, color, no fill |

## Step 3: Hierarchy Methods Audit

- [x] **Size variation** — Header (11px) vs code (13px)
- [ ] **Weight variation** — All text uses regular weight (400)
- [x] **Color variation** — PRIMARY: syntax highlighting creates 6+ color levels
- [x] **Position** — Header zone separated from content; code is center stage
- [x] **Whitespace** — 16px padding creates breathing room
- [x] **Containment** — Dark container isolates; subtle border divides zones

**Primary Method:** COLOR VARIATION (syntax highlighting)
**Secondary Method:** POSITION (2-zone vertical stack)

## Step 4: KortAI Comparison

### Does hierarchy avoid decoration?

**PARTIAL COMPLIANCE**

The component uses syntax highlighting colors as primary hierarchy method. This is FUNCTIONAL color (semantic meaning) rather than decoration. However, KortAI prescribes SIZE and POSITION as primary/secondary methods.

**Deviation Assessment:**
- 6-color syntax palette creates hierarchy through chromatic variation, not size
- All code lines are same size (13px) — no size-based hierarchy within content
- Header uses size differentiation (11px vs 13px), which aligns with KortAI

**Verdict:** Color-based hierarchy layer is appropriate for code — syntax highlighting is industry convention that serves comprehension.

### Is the reading path clear?

**YES**
1. Eye enters at code content (highest contrast)
2. Line numbers provide vertical orientation
3. Header metadata discoverable but doesn't compete
4. Copy button invisible until needed

### Does header compete with code content?

**NO** — Header deliberately suppressed:
- 11px font size (vs 13px code)
- Muted color (#AAAAAA label, #888888 button)
- Thin separator border (1px, 10% opacity)
- No background differentiation

## Step 5: Perceptual Truth

**"Code Snippet hierarchy feels like a museum exhibit where the artifact (code) is spotlit in the center, while the wall placard (language label) and exit sign (copy button) are visible but don't compete for attention. The syntax highlighting is the exhibit's lighting design — it reveals structure without becoming the subject."**

## Hierarchy Alignment Score: 4.4/5

| Criterion | Score |
|-----------|-------|
| Size creates hierarchy | 3/5 |
| Position creates hierarchy | 5/5 |
| Avoids decorative hierarchy | 4/5 |
| Reading path clarity | 5/5 |
| Header/content separation | 5/5 |

**Note:** Color as primary hierarchy is a domain-appropriate exception for code display.
