# Code Snippet Component: Anti-Pattern Analysis

## Component Soul Statement

The Code Snippet embodies **dark, focused code display** with **restrained syntax highlighting** and **clear hierarchy**. It serves as a scholarly presentation layer — calm, authoritative, purposefully understated.

## Step 1: Typography Anti-Patterns

| Anti-Pattern | Why It Violates | Severity |
|--------------|-----------------|----------|
| Variable-width fonts | Destroys alignment, undermines readability | **HIGH** |
| Font size <12px or >16px | Eye strain or juvenile feel | **HIGH** |
| Bold syntax everywhere | Visual chaos, violates restraint | **HIGH** |
| Italicized code blocks | Code should be literal, not stylized | MEDIUM |
| Mixed font families in code | Breaks visual unity | **HIGH** |
| Line height <1.4 or >2.0 | Scanning fatigue or lost coherence | MEDIUM |
| Header font matching code | Eliminates hierarchy distinction | MEDIUM |
| Decorative fonts for header | Violates scholarly tone | **HIGH** |
| All-caps filenames | Aggressive, shouty energy | LOW |
| Justified alignment | Breaks token spacing | **HIGH** |

## Step 2: Spacing Anti-Patterns

| Anti-Pattern | Why It Violates | Severity |
|--------------|-----------------|----------|
| No padding inside container | Cramped, unprofessional | **HIGH** |
| Excessive padding (>32px) | Wastes space, suggests uncertainty | MEDIUM |
| Inconsistent line spacing | Visual rhythm disruption | **HIGH** |
| Header merged with code | Destroys hierarchy | **HIGH** |
| No margin between snippets | Sequential snippets blur | MEDIUM |
| Asymmetric horizontal padding | Visual imbalance | LOW |
| Cramped header (<8px) | Rushed, loses authority | MEDIUM |
| Gap between header and code | Destroys cohesion | MEDIUM |

## Step 3: Container Anti-Patterns

| Anti-Pattern | Why It Violates | Severity |
|--------------|-----------------|----------|
| White/light backgrounds | Code demands dark for focus | **HIGH** |
| Border radius >12px | Playful, undermines scholarly tone | MEDIUM |
| Drop shadows (especially colored) | Decorative embellishment | MEDIUM |
| Visible outlines/borders | Visual noise | LOW |
| Gradient backgrounds | Decorative, distracting | **HIGH** |
| Patterned/textured backgrounds | Competes with code | **HIGH** |
| Width exceeding 80ch | Forces horizontal scanning | MEDIUM |
| No max-width constraint | Unpredictable sprawl | MEDIUM |
| Animated container borders | Draws attention away | **HIGH** |
| Transparent containers | Code loses groundedness | MEDIUM |

## Step 4: Color Anti-Patterns

| Anti-Pattern | Why It Violates | Severity |
|--------------|-----------------|----------|
| Rainbow syntax highlighting | Carnival energy destroys calm | **HIGH** |
| High-saturation colors | Visual assault | **HIGH** |
| More than 4-5 syntax colors | Cognitive overload | **HIGH** |
| Pure white (#fff) text | Too harsh on dark | MEDIUM |
| Red for non-errors | Creates false urgency | MEDIUM |
| Neon/glowing effects | Tacky, gimmicky | **HIGH** |
| Color-coded line backgrounds | Introduces noise | MEDIUM |
| Bright header color | Competes with content | MEDIUM |
| Syntax matching brand colors | Readability over branding | MEDIUM |
| Black text on dark background | Invisible code | **HIGH** |

## Step 5: Hierarchy Anti-Patterns

| Anti-Pattern | Why It Violates | Severity |
|--------------|-----------------|----------|
| Code visually dominant over header | Inverts relationship | MEDIUM |
| Header larger than content | Header is metadata, not star | MEDIUM |
| Multiple competing headers | Creates confusion | **HIGH** |
| No language indicator | Code floats without context | MEDIUM |
| Action buttons more prominent than code | Utility should recede | **HIGH** |
| Line numbers overwhelming code | Numbers serve reference, should be subdued | MEDIUM |
| Copy button with flashy styling | Utility must be restrained | LOW |
| Inline comments same style as code | Comments are meta | LOW |
| Missing separation between header zones | Elements blur together | MEDIUM |
| Footer with excessive metadata | Clutters core purpose | MEDIUM |

## Step 6: Summary Statement

**"Code Snippet soul is violated when the component draws attention to itself rather than presenting code with quiet authority."**

This happens through:
- **Decorative embellishment** (gradients, shadows, animations)
- **Visual chaos** (rainbow highlighting, excessive colors, mixed fonts)
- **Hierarchy confusion** (headers competing with content, prominent buttons)
- **Environmental hostility** (light backgrounds, cramped spacing, poor contrast)

The component fails when it prioritizes personality over clarity, when it rushes the reader rather than inviting careful examination, or when it treats code as content to be styled rather than knowledge to be transmitted.

## The Litmus Test

1. **Would this feel at home in academic documentation?** (If playful: fail)
2. **Does the container disappear when reading code?** (If noticeable: fail)
3. **Could you read this at 2am debugging without eye strain?** (If harsh: fail)
4. **Is every color serving comprehension?** (If decorative: fail)
5. **Does the header inform without demanding attention?** (If prominent: fail)
