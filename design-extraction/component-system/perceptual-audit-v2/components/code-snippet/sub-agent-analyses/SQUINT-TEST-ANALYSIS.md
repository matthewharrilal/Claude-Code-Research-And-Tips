# Code Snippet Component: Squint Test Analysis

## Step 1: Mass Identification

| Mass # | Location | Density | Color Weight | Size |
|--------|----------|---------|--------------|------|
| 1 | Header strip (top) | LOW | Dark gray with subtle text | ~8% |
| 2 | Code body (main area) | MEDIUM-HIGH | Dark with scattered color points | ~92% |

**Sub-masses within Mass 2:**
| Sub-mass | Location | Density | Color Weight |
|----------|----------|---------|--------------|
| 2a | Line numbers (left edge) | VERY LOW | Muted gray, nearly invisible |
| 2b | Green comment (line 1) | LOW | Single horizontal band |
| 2c | Purple keywords | LOW | Scattered points |
| 2d | Blue/cyan variables | LOW | Scattered points |
| 2e | Orange strings | LOW | Single instance |
| 2f | Yellow functions | LOW | Scattered points |

## Step 2: Persistence Under Blur

**When mentally blurred (simulating unfocused vision):**

### PERSISTS Clearly:
- **Dark rectangular shape** — overall container as single block
- **Header boundary** — subtle border creates faint horizontal line
- **Left-edge vertical band** — line numbers create lighter strip

### DISAPPEARS:
- All text content (code becomes texture)
- Individual syntax highlighting colors (merge into noise)
- "Copy" button text
- Line number specifics

### MERGES Together:
- Header and body → ONE dark mass (excellent)
- All syntax colors → "code texture" pattern
- Purple, blue, cyan → cool-toned scatter
- Orange, yellow → warm accent noise

## Step 3: Single Mass Test

- **Does this have ONE dominant mass?** **YES**
- **Or fragments into competing masses?** **NO**

The Code Snippet reads as a **single cohesive dark rectangle** under blur. Header does NOT separate visually because:
1. Same background color (#1E1E1E)
2. Border is subtle (10% opacity)
3. No competing background tone

## Step 4: Weight Distribution Map

```
┌─────────────────────────────────────┐
│  LIGHT: Header text barely visible  │  ← ~8%
│  (uniform dark, low visual weight)  │
├─────────────────────────────────────┤  ← Hairline
│  UNIFORM: Dark field dominates      │
│                                     │
│  Scattered color points create      │  ← 92%
│  "code texture" - NOT mass breaks   │
│                                     │
│  Weight slightly LEFT due to        │
│  line numbers creating subtle gutter│
└─────────────────────────────────────┘
```

**Weight Analysis:**
- Top: Light (sparse header text)
- Middle: Medium (syntax creates visual activity)
- Bottom: Light-Medium (code tapers, more whitespace)
- Left edge: Subtle vertical gutter
- Right edge: Ragged (line endings vary)

## Step 5: KortAI Comparison

**KortAI cards are TOP-HEAVY** with image mass dominating.

| Aspect | KortAI Cards | Code Snippet |
|--------|--------------|--------------|
| Primary mass | Image (top) | Uniform dark block |
| Weight | Top-heavy | Even distribution |
| Visual anchor | Image dominates | Container shape dominates |
| Content role | Secondary to image | IS the visual mass |

**Does it read as single "document" shape?** **YES**

The Code Snippet succeeds as an **inverted document archetype**:
- Dark blocks expected for code (convention aids recognition)
- Shape reads as "text container"
- Internal variation doesn't break mass
- Sharp corners reinforce "document" metaphor

## Step 6: Perceptual Truth

**"Code Snippet under blur reveals a single, cohesive dark rectangle with subtle internal texture. The header does not separate from the body. The left edge shows a faint vertical gutter. Syntax highlighting becomes abstract warmth-and-coolness, not competing masses. The component reads as ONE shape: a document block containing information."**

## Squint Test Score: 4.5/5

| Criterion | Score |
|-----------|-------|
| Single mass coherence | 5/5 |
| Weight distribution | 4/5 |
| Shape recognition | 5/5 |
| Internal noise | 4/5 |
| Edge definition | 5/5 |

**What works exceptionally:**
- No visual separation between header and body
- Dark-on-dark keeps mass unified
- Syntax colors are texture, not chaos
- Sharp corners define shape crisply

**Minor observation:** Line numbers create slight left asymmetry (intentional, acceptable).
