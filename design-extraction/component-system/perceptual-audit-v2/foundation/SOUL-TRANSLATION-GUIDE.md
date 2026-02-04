# Soul Translation Guide
## How Non-Image Components Inherit KortAI's Soul

**Created:** 2026-02-03
**Purpose:** Specific rules for translating KortAI's image-centric soul to text/interactive components

---

## THE FUNDAMENTAL PRINCIPLE

**Halftone is ONLY for images. Soul transfers through RESTRAINT, not decoration.**

When a component has no image, it cannot inherit the halftone treatment. Instead, it inherits:
1. Typography confidence
2. Spacing generosity
3. Container materiality
4. Color discipline
5. Hierarchical clarity

---

## TYPOGRAPHY RULES

### Title Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Instrument Serif or similar editorial serif | Editorial heritage |
| Weight | Regular (400) or Medium (500) | Confidence without shouting |
| Case | Sentence case | Professional, not aggressive |
| Size | 18-24px | Clear hierarchy anchor |
| Color | Near-black (#1a1a1a to #2d2d2d) | Readable authority |

### Body Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Inter or similar clean sans-serif | Readability at length |
| Weight | Regular (400) | Calm, not emphasized |
| Size | 14-16px | Comfortable reading |
| Line-height | 1.5-1.7 | Generous for comprehension |
| Color | Dark gray (#3d3d3d to #4a4a4a) | Readable without stark |

### Label Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Inter or similar sans-serif | Clean, functional |
| Weight | SemiBold (600) | Distinguishes from body |
| Case | UPPERCASE | Category marker convention |
| Size | 11-12px | Small but legible |
| Letter-spacing | 0.5-1px | Aids uppercase readability |
| Color | Muted (#888 to #999) | Secondary information |

### Metadata Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Inter or similar sans-serif | Consistent with body |
| Weight | Regular (400) | No emphasis needed |
| Size | 12-13px | Smaller than body |
| Color | Muted (#777 to #888) | Tertiary importance |

### Code Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | JetBrains Mono or similar monospace | Technical clarity |
| Weight | Regular (400) | Neutral |
| Size | 13-14px | Readable in blocks |
| Background | Dark (#1a1a1a to #2d2d2d) | Technical specification feel |

---

## SPACING RULES

### Internal Padding
| Context | Value | Rationale |
|---------|-------|-----------|
| Card/component padding | 16-24px | Generous interior breathing |
| Callout padding | 16px | Comfortable reading |
| Code block padding | 16px | Clear code boundaries |
| Table cell padding | 8-12px | Dense but readable |

### Zone Gaps (Internal)
| Between | Value | Rationale |
|---------|-------|-----------|
| Label → Content | 8px | Tight coupling |
| Title → Body | 12px | Clear but connected |
| Zone → Zone | 16px | Distinct zones |
| Header → Body | 12-16px | Clear separation |

### External Spacing
| Context | Value | Rationale |
|---------|-------|-----------|
| Component margin | 16-24px | Breathing between components |
| Section gap | 32-48px | Clear section breaks |
| Grid gap | 24px | Consistent grid rhythm |

---

## CONTAINER RULES

### Standard Container (Cards, Callouts)
| Property | Value | Rationale |
|----------|-------|-----------|
| Background | #FEFCF3 (cream) or #FFFFFF | Paper quality |
| Border | None or 1px subtle (#e0d5c5) | Minimal container chrome |
| Shadow | 0 2px 4px rgba(0,0,0,0.05) | Soft lift, material presence |
| Radius | 0-4px | Sharp, die-cut precision |

### Tinted Container (Callouts by type)
| Type | Background | Border-left |
|------|------------|-------------|
| Info | #EBF5FF | 3px #3B82F6 |
| Tip | #ECFDF5 | 3px #10B981 |
| Gotcha | #FEF2F2 | 3px #EF4444 |
| Essence | #FEFCF3 | 1px #E83025 (full border) |

### Inverted Container (Code, Core Abstraction)
| Property | Value | Rationale |
|----------|-------|-----------|
| Background | #1a1a1a to #2d2d2d | Technical specification |
| Border | None | Clean inversion |
| Shadow | None | Flat, intentional |
| Radius | 0px | Sharp precision |

---

## COLOR RULES

### Primary Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Text Primary | Near-black | #1a1a1a | Titles, important text |
| Text Secondary | Dark gray | #3d3d3d | Body text |
| Text Tertiary | Medium gray | #666666 | Secondary info |
| Text Muted | Light gray | #999999 | Labels, metadata |

### Background Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Page | Warm off-white | #FEFCF3 | Overall background |
| Card | Cream or white | #FEFCF3 / #FFFFFF | Container backgrounds |
| Tint subtle | Very light tint | Opacity 5-10% | Callout backgrounds |

### Accent Palette (Functional Only)
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary accent | KortAI Red | #E83025 | Brand, emphasis, important |
| Info | Blue | #3B82F6 | Informational |
| Success/Tip | Green | #10B981 | Positive, helpful |
| Warning/Gotcha | Red | #EF4444 | Warnings, errors |
| Process/Reasoning | Amber | #F59E0B | Steps, logic |
| Challenge | Purple | #8B5CF6 | Interactive exercises |

### RULE: Color is Functional, Not Decorative
- Accent colors ONLY on borders, icons, checkboxes, small UI elements
- NEVER on large background areas (except subtle tints)
- NEVER on text for emphasis (use typography instead)
- NEVER multiple accent colors in one component

---

## HIERARCHY RULES

### Method Precedence
1. **SIZE** — Largest = most important
2. **POSITION** — Top/first = most important
3. **WEIGHT** — Bolder = more important
4. **COLOR** — Reserved for functional meaning only

### Hierarchy Levels
| Level | Typical Use | Size | Weight |
|-------|-------------|------|--------|
| H1 | Page titles | 24-32px | Medium |
| H2 | Section titles | 20-24px | Medium |
| H3 | Component titles | 18-20px | Medium |
| Body | Content text | 14-16px | Regular |
| Caption | Labels, metadata | 11-13px | Regular/SemiBold |

### RULE: Typography Does the Work
- If hierarchy is unclear, adjust size/position first
- Never add color to create hierarchy
- Never add decoration (borders, backgrounds) to create hierarchy
- Trust that position and size are enough

---

## COMPONENT-SPECIFIC TRANSLATIONS

### Callouts (Info, Tip, Gotcha)
- Inherit: Left border accent, tinted background, sharp corners
- Typography: Uppercase label → body content
- Spacing: 16px internal padding, 8px label-to-content gap
- Container: Subtle tint background, 3px left border

### Essence
- Inherit: Full red border (connects to card title color)
- Typography: Instrument Serif italic for quote
- Spacing: Generous padding, centered visual weight
- Container: Cream background, 1px red border all sides

### Core Abstraction
- Inherit: Inverted (dark) treatment (like technical specs)
- Typography: Instrument Serif for title, Inter for content
- Spacing: Standard padding, clear zones
- Container: Dark background, no border

### Code Snippet
- Inherit: Technical specification feel
- Typography: JetBrains Mono, no syntax color explosion
- Spacing: 16px padding, header-content separation
- Container: Dark background, sharp corners

### File Tree
- Inherit: Technical clarity, monospace
- Typography: JetBrains Mono for tree, Inter for header
- Spacing: Tight vertical rhythm (6-8px line gap)
- Container: Cream background, subtle border

### Decision Matrix
- Inherit: Editorial table treatment
- Typography: Inter, clear header/body distinction
- Spacing: Consistent cell padding, no cramping
- Container: White cells, dark header, minimal borders

### Task Component
- Inherit: Checklist clarity
- Typography: Inter, title + description
- Spacing: Checkbox-text gap (12px), item gap (8px)
- Container: Cream background, subtle border

### Reasoning
- Inherit: Process visibility
- Typography: Inter, numbered badges
- Spacing: Step separation (12-16px)
- Container: Warm beige background, subtle accent

### Challenge
- Inherit: Interactive invitation
- Typography: Instrument Serif for title
- Spacing: Standard padding
- Container: Cream background, purple accent

---

## PERCEPTUAL TESTS

### The Paper Test
"Can I imagine this printed on premium paper?"
- If yes: Container treatment is correct
- If no: Too digital, too floating

### The Magazine Test
"Would this element look at home in the Financial Times?"
- If yes: Editorial quality achieved
- If no: Too casual, too tech-y, or too aggressive

### The Volume Test
"Is the typography speaking at conversational volume?"
- If calm and measured: Correct
- If shouting or whispering: Adjust

### The Color Test
"If I remove all color, does the design still work?"
- If yes: Color is functional
- If no: Color is structural (wrong)

### The Hierarchy Test
"Can I blur my eyes and still understand what's important?"
- If yes: Hierarchy is clear
- If no: Needs size/position adjustment

---

## ANTI-PATTERN CHECKLIST

Before approving any component, verify NONE of these exist:

- [ ] Rounded corners > 4px
- [ ] Multiple accent colors in one component
- [ ] Color used for hierarchy (not function)
- [ ] ALL CAPS titles (labels OK)
- [ ] Bold + italic stacking
- [ ] Gradient backgrounds
- [ ] Heavy drop shadows
- [ ] Decorative borders
- [ ] Colored text for emphasis
- [ ] Inconsistent spacing within component
- [ ] Centered composition (should be left-aligned)
- [ ] Competing visual weights at same level

---

*This translation guide ensures non-image components inherit KortAI's soul without the halftone treatment. Every component audit must verify compliance with these rules.*
