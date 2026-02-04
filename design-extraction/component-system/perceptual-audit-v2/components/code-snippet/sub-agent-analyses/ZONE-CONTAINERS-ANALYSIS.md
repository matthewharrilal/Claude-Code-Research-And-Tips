# Code Snippet Component: Container Analysis

## Step 1: Outer Container Properties

| Property | Value |
|----------|-------|
| Background | #1E1E1E (dark charcoal) |
| Border | None |
| Shadow | None |
| Corners | 0px (sharp) |

## Step 2: Container Feel Assessment

| Question | Assessment | Reasoning |
|----------|------------|-----------|
| BOX or ZONE? | **BOX** | Dark background creates hard visual boundary against light page |
| HEAVY or LIGHT? | **MODERATE-HEAVY** | Dark mass creates significant weight, but no borders/shadows prevent oppression |
| FLOATING or GROUNDED? | **GROUNDED** | No shadow means no lift; sits flat on page plane |

**Perceptual:** The container feels like a **slate/chalkboard** — a defined working surface that demarcates "code lives here" from "prose lives here."

## Step 3: Internal Containers

| Sub-Container | Border | Background | Corners | Purpose |
|---------------|--------|------------|---------|---------|
| Header | Bottom: 1px rgba(255,255,255,0.1) | Transparent | N/A | Language + Copy zone |
| Code area | None | Transparent | N/A | Primary content |

**Internal Zone Separation:** Single subtle divider (10% white opacity) — barely perceptible, more suggestion than statement.

## Step 4: KortAI Comparison

### The Inversion Question

| Aspect | KortAI Standard | Code Snippet | Appropriate? |
|--------|-----------------|--------------|--------------|
| Background | Light (#FFFFFF, #FEF9F5) | Dark (#1E1E1E) | **YES** — code blocks are legitimately inverted |
| Container definition | Shadow + whitespace | Color contrast | **ADAPTED** — dark mass defines boundary |
| Corners | 4-6px slight rounding | 0px sharp | **DEVIATION** — intentional for editorial precision |
| Internal borders | None (whitespace only) | 1 subtle divider | **MINOR DEVIATION** — functionally justified |

### Cohesion with Light Aesthetic

**YES, through purposeful contrast:**
1. **Functional differentiation** — Code is semantically different from prose
2. **Island, not invasion** — Dark mass is contained zone, not theme takeover
3. **Shared DNA** — Sharp corners, no shadows, flat print heritage maintained
4. **Color discipline preserved** — Even in dark mode, syntax palette is restrained

## Step 5: Perceptual Truth

**"The Code Snippet container feels like a slate writing surface placed on a cream desk — grounded and technical where KortAI cards float like paper, but sharing the same philosophy of defining space through material, not decoration."**

## Step 6: Test & Anti-Pattern

### Cohesion Test
Place Code Snippet next to KortAI card — do they feel like siblings or strangers?
**Result:** Professional siblings — one in dark suit, one in cream linen, both tailored by same editorial philosophy.

### Anti-Patterns

| Anti-Pattern | Why It Violates |
|--------------|-----------------|
| Drop shadow on dark container | "Floating dark hole" effect |
| Gradient background | Destroys flat print heritage |
| Visible border around entire component | "Digital bento box" feel |
| Rounded corners >6px | "Friendly app" aesthetic |
| Multiple internal dividers | "Spreadsheet" compartmentalization |
| Different backgrounds for header vs code | Fragments single material metaphor |

## Container Alignment Score: 4.5/5

**Well-executed with justified divergences:**
- Dark background appropriate for code inversion
- Sharp corners documented design decision
- No shadow maintains flat heritage
- Single subtle internal divider acceptable

**Minor deduction:** Corner radius (0px) differs from KortAI standard (4-6px), though this is intentional.
