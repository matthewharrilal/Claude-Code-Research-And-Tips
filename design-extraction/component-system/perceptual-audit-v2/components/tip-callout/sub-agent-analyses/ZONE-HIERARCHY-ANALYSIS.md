# Tip Callout - Hierarchy Analysis

## Step 1: Eye Tracking

**FIRST** → The colored left border (teal/green vertical bar) - the most visually dominant element, acts as a beacon

**SECOND** → The label text ("TIP" or "PRO TIP") in uppercase teal - color continuity with border draws eye here

**THIRD** → The body content, particularly inline code elements (`claude --continue`, `PROMPT.md`, `CLAUDE.md`) which have dark background contrast

## Step 2: Hierarchy Levels

**4 distinct levels identified:**

| Level | Element | Treatment |
|-------|---------|-----------|
| **L1 - Signifier** | Left border | 4px solid teal, full height, position-based prominence |
| **L2 - Label** | "TIP" / "PRO TIP" | Uppercase, teal color, small caps tracking, ~12px |
| **L3 - Inline emphasis** | Code snippets, bold text | Dark gray background for code (#2d3748-ish), **bold weight** for key terms |
| **L4 - Body text** | Main content | Regular weight, dark gray (~#374151), 16px, neutral |

## Step 3: Hierarchy Methods

| Method | Application | Strength |
|--------|-------------|----------|
| **Color** | Teal accent (#2a7d7d-ish) for border + label creates visual system | HIGH - unifies component identity |
| **Position** | Left border acts as entry point; label above body | MEDIUM - predictable reading flow |
| **Weight** | Bold for key terms ("Ralph Wiggum Loop", "expand on failure") | MEDIUM - selective emphasis |
| **Contrast** | Code blocks use dark background against cream/white | HIGH - instant recognition of code |
| **Size** | Label slightly smaller than body text | LOW - subtle differentiation |
| **Case** | Uppercase for label, sentence case for body | MEDIUM - typographic signal |
| **Background** | Cream/light teal background tint differentiates from page | MEDIUM - container definition |

**Primary hierarchy drivers:**
1. Color (border + label coordination)
2. Contrast (code backgrounds)
3. Position (left border entry point)

## Step 4: Score

**4 out of 5**

**Strengths:**
- Clear entry point via colored border
- Label-to-content hierarchy is unambiguous
- Code elements stand out appropriately
- Consistent color system (teal throughout)
- Multi-paragraph variant handles complexity well

**Weaknesses:**
- Label size differential is subtle (could be stronger)
- No visual differentiation between "TIP" and "PRO TIP" beyond text (both use same teal)
- Bold terms within body compete slightly with code blocks for attention

## Step 5: Perceptual Truth

**"Tip Callout hierarchy feels like a polite tap on the shoulder - the left border says 'hey, over here' while the content remains conversational and approachable, never demanding attention but confidently marking its territory."**

---

## Observations by Variant

| Variant | Hierarchy Notes |
|---------|-----------------|
| **Default** | Clean 3-level hierarchy: border → label → content |
| **Pro Tip** | Same structure, "PRO" adds mild emphasis but no visual upgrade |
| **Multi-paragraph** | Hierarchy holds across paragraphs; no degradation |
| **In Context** | Surrounding prose is L5 (lowest); callout clearly separates from flow |

## Component-Specific Hierarchy Patterns

1. **Border-as-beacon pattern**: Left border creates immediate visual anchor without requiring background color
2. **Label-body separation**: Clear gap between label and content prevents visual collision
3. **Code elevation**: Inline code inherits prominence through background contrast, not position
4. **Gentle containment**: Light background tint defines space without boxing in content

---

*Analysis completed: 2026-02-04*
*Component: Tip Callout (L3 variants)*
*Zone: Hierarchy Analysis*
