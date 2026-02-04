# Code Snippet Component: Spacing Analysis

## Step 1: External Spacing

| Measurement | Value | Notes |
|-------------|-------|-------|
| Component width | 720px | Full container width |
| Margin from content | 16px | Standard document flow |
| Border radius | 0px | Sharp corners per KortAI soul |

## Step 2: Internal Spacing

| Zone | Padding Top | Padding Side | Padding Bottom | Feel |
|------|-------------|--------------|----------------|------|
| Header | 12px | 16px | 12px | **Comfortable** |
| Code Content | 16px | 16px | 16px | **Generous** |

**Header Zone:** Vertically tighter (12px) than horizontal (16px) — creates "functionally slim" utility bar feel.

**Code Zone:** Uniform 16px creates "gallery frame" effect — code floats with equal breathing room.

## Step 3: Between-Element Spacing

| From → To | Gap | Feel |
|-----------|-----|------|
| Header → Code Zone | 1px border (seamless) | Integrated |
| Line number → Code text | 12px | Comfortable separation |
| Line → Line | ~21px (1.6 × 13px) | Relaxed rhythm |
| Icon → "Copy" text | 4px | Tight coupling |

**Key Observations:**
1. Header-to-code: continuous space, subtle 1px border at 10% opacity
2. Line number gutter: 32px width + 12px padding = comfortable 44px
3. Line height: 1.6 is MORE generous than typical IDEs (1.4-1.5)

## Step 4: Rhythm Assessment

### Base Unit Analysis

| Token | Value | Usage |
|-------|-------|-------|
| space-xs | 4px | Icon-text gap, button internal |
| space-sm | 8px | Button horizontal padding |
| space-md | 12px | Header vertical, line number gutter |
| space-base | 16px | Content padding, header horizontal |

**Rhythm:** 4px base unit with stops at 4, 8, 12, 16.

### Breathing Points
1. **Primary:** 16px uniform padding around code
2. **Secondary:** 1.6 line-height creating vertical rhythm
3. **Transition:** 1px border as visual pause

### Density: **COMFORTABLE**
- NOT sparse: Content present without excess whitespace
- NOT dense: No cramping or compressed feeling
- Feels like a well-set book page

## Step 5: Perceptual Truth

**"Code Snippet spacing feels like a well-curated museum label — generous enough to let the content breathe but restrained enough to feel purposeful, where every pixel of padding serves readability rather than decoration."**

## Step 6: Test & Anti-Pattern

### Test
- Line numbers feel like margin annotations, not isolated boxes
- Header visibly slimmer than code zone
- Equal padding on all code edges (centered float effect)
- Eyes track easily line-to-line

### Anti-Pattern
| Anti-Pattern | Soul Impact |
|--------------|-------------|
| 0px code padding | Code feels trapped, cramped |
| 8px line-height | IDE coldness, reduced readability |
| 24px+ header padding | Header competes with content |
| Different left/right padding | Off-center, unprofessional |
| Gap between header and code | Destroys single-container cohesion |

## Spacing Alignment Score: 4.6/5

**Strengths:**
- Perfect 4px scale consistency
- 16px uniform padding is exemplary
- Comfortable density achieved

**Minor tension:** Header-to-code transition relies solely on subtle border; 4-8px gap might create cleaner zone separation.
