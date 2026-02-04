# Code Snippet Component: Typography Analysis

## Step 1: Typography Inventory

| Element | Font | Weight | Size | Color | Case | Line Height |
|---------|------|--------|------|-------|------|-------------|
| Language label ("javascript") | JetBrains Mono | 400 | 11px | #AAAAAA | Lowercase | ~1.3 |
| Copy button text ("Copy") | Inter | 500 | 11px | #888888 | Sentence | ~1.3 |
| Line numbers (1-6) | JetBrains Mono | 400 | 13px | #AAAAAA @ 50% | N/A | 1.6 |
| Keywords (`const`, `while`, `await`) | JetBrains Mono | 400 | 13px | #C586C0 | Lowercase | 1.6 |
| Function names (`readFile`, `claudeCode`) | JetBrains Mono | 400 | 13px | #DCDCAA | Lowercase | 1.6 |
| Variables (`prompt`, `result`) | JetBrains Mono | 400 | 13px | #9CDCFE | Lowercase | 1.6 |
| Strings (`'PROMPT.md'`) | JetBrains Mono | 400 | 13px | #CE9178 | Mixed | 1.6 |
| Comments (`// Ralph Wiggum Loop...`) | JetBrains Mono | 400 (Italic) | 13px | #6A9955 | Sentence | 1.6 |
| Operators (`=`, `=>`) | JetBrains Mono | 400 | 13px | #E8E8E8 | N/A | 1.6 |
| Punctuation (`()`, `{}`, `;`) | JetBrains Mono | 400 | 13px | #888888 | N/A | 1.6 |

**Total unique text elements: 10 categories**

## Step 2: Hierarchy Analysis

### What Establishes Hierarchy?

**Primary mechanism: COLOR**
- Syntax highlighting creates semantic groupings through chromatic variation
- Keywords (purple), functions (yellow), variables (blue), strings (orange), comments (green)

**Secondary mechanism: OPACITY**
- Line numbers at 50% opacity recede completely
- Header elements use muted/tertiary colors to stay subordinate

**Tertiary mechanism: POSITION**
- Header sits above code (meta-information vs content)
- Line numbers in left margin, code flows right

**NOT used: SIZE or WEIGHT**
- All code is 13px, single weight (400)
- Minimal variation maintains restraint

### Distinct Typographic Treatments

1. **Header Meta** (11px, sans/mono, muted)
2. **Code Body** (13px, mono, varied colors)
3. **Line Numbers** (13px, mono, 50% opacity)

**Count: 3 treatments — RESTRAINED**

## Step 3: KortAI Comparison

### Alignment Assessment

**Aligned:**
- Single font weight throughout (400 regular)
- Only 2 font sizes (11px header, 13px code)
- Position and color establish hierarchy, not weight stacking
- Header typography is confident — doesn't shout

**Tension point:**
- 6 distinct semantic colors in code zone
- Exceeds KortAI's single-accent principle
- BUT: syntax colors are FUNCTIONAL, not decorative

### Are there too many color variations?

**No — but at the edge.** Each color serves comprehension:
- Keywords (control flow) = purple
- Functions (actions) = yellow
- Variables (data) = blue
- Strings (literals) = orange
- Comments (annotations) = green

## Step 4: Perceptual Truth

**"Code Snippet typography feels like a focused editor window at 2AM — quiet chrome, semantic colors that let you read the code's grammar without reading every word, line numbers ghosted so far back they become a ruler you don't consciously see."**

## Step 5: Test & Anti-Pattern

### Test
- Can you identify the language without scanning? (Left anchor, quiet label)
- Does the "Copy" button disappear until needed? (Tertiary color, no border)
- Is the header visually quieter than the code?

### Anti-Pattern
- Bold keywords — breaks single-weight restraint
- Bright/saturated syntax colors — feels like 1990s IDE
- Large language label — competes with code
- Decorative header — shifts from utility to design element

## Typography Alignment Score: 4.5/5

**Rationale:**
- Exceptional restraint (3 treatments, single weight)
- Strong hierarchy through position
- Earned color complexity (functional, not decorative)
- "Unhurried Editor" character present

**Deduction:** Syntax color count (6) creates visual activity that approaches "busy" in dense code blocks.
