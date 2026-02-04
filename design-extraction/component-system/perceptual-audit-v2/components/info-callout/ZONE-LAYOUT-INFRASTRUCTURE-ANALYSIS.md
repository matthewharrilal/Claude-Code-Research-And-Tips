# Zone Layout Infrastructure Analysis: Info Callout

**Component:** Info Callout
**Screenshot:** `info-callout-L3-revised.png`
**Previous Score:** 3/5 (correct but generic)
**Date:** 2026-02-03

---

## Step 1: Zone Structure

The info callout contains **2 distinct zones**:

| Zone | Name | Content | Purpose |
|------|------|---------|---------|
| Zone 1 | **Label Zone** | Uppercase label (NOTE, IMPORTANT, INFO) | Classification/severity indicator |
| Zone 2 | **Content Zone** | Body text, can contain inline code, multiple paragraphs | The actual information being conveyed |

### ASCII Zone Map

```
┌─────────────────────────────────────────────────────────┐
│▐                                                        │
│▐  ┌─────────────────────────────────────────────────┐  │
│▐  │ ZONE 1: LABEL                                   │  │
│▐  │ "NOTE" / "IMPORTANT" / "INFO"                   │  │
│▐  │ (uppercase, small, muted)                       │  │
│▐  └─────────────────────────────────────────────────┘  │
│▐                                                        │
│▐  ┌─────────────────────────────────────────────────┐  │
│▐  │ ZONE 2: CONTENT                                 │  │
│▐  │ Body text with optional inline `code`           │  │
│▐  │ Can span multiple paragraphs                    │  │
│▐  │                                                 │  │
│▐  │ Second paragraph continues here...              │  │
│▐  └─────────────────────────────────────────────────┘  │
│▐                                                        │
└─────────────────────────────────────────────────────────┘
 ▲
 │
 LEFT BORDER (accent line - defines component edge)
```

**Variant Note:** The "Tinted Variant" adds a background fill to the entire component, but the zone structure remains identical.

---

## Step 2: Zone Separation

**Primary Separator:** WHITESPACE

| Separation Method | Used? | Details |
|-------------------|-------|---------|
| Whitespace | **YES** | ~8-12px vertical gap between label and content |
| Lines | NO | No horizontal rules between zones |
| Color | PARTIAL | Label is muted/gray, content is standard text color (subtle differentiation) |
| Border | NO | Zones share the same container |

**The Left Border Paradox:**
The prominent left border (3-4px accent line) does NOT separate zones from each other—it separates the ENTIRE CALLOUT from surrounding content. It acts as a **component boundary marker**, not an internal zone divider.

**Tinted Variant Modifier:**
The tinted variant (blue background) uses COLOR as an additional component-level separator from page content, but still relies on whitespace for internal zone separation.

---

## Step 3: Density

**Density Rating:** **LOW**

| Factor | Assessment |
|--------|------------|
| Content per pixel | Low - generous padding, breathing room |
| Visual weight | Light - muted colors, thin border |
| Cognitive load | Low - single message, clear hierarchy |
| Page interruption | Minimal - doesn't dominate, flows with content |

**Density Justification:**
- Generous internal padding (~16-24px)
- Single-purpose: one piece of auxiliary information
- Label is small/muted (doesn't compete with content)
- Background is subtle or transparent (default variant)
- Designed to be a "pause" in reading, not a "stop"

**Comparison to Other Components:**
- Lower density than: tables, code blocks, multi-item cards
- Similar density to: blockquotes, simple alerts
- Higher density than: horizontal rules, spacers

---

## Step 4: Score

**New Score: 4/5**

| Criterion | Score | Justification |
|-----------|-------|---------------|
| Zone clarity | 5/5 | Two zones are immediately distinguishable |
| Separation method | 4/5 | Whitespace works but is subtle; label styling does heavy lifting |
| Density appropriateness | 5/5 | Perfect for auxiliary information—present but not intrusive |
| Layout sophistication | 3/5 | Simple stacked layout; no complex grid or alignment tension |
| **Overall** | **4/5** | Clean, functional, appropriate density—could have more editorial tension |

**Why not 5/5?**
The layout is correct and well-executed, but it follows the conventional callout pattern seen across documentation sites. A 5/5 would require the editorial tension we see in the card system—perhaps asymmetric alignment, typographic contrast between zones, or unconventional zone arrangement.

---

## Step 5: Perceptual Truth

> **The info callout is a whisper in the margin—a left-edge anchor that politely interrupts the reading flow to offer auxiliary context without demanding attention.**

---

## Appendix: Variant Comparison

| Variant | Zone Structure | Separation | Density | Notes |
|---------|----------------|------------|---------|-------|
| Default | 2 zones | Whitespace | Low | Transparent background, minimal presence |
| Multi-paragraph | 2 zones | Whitespace | Low-Medium | Same structure, more content in Zone 2 |
| In Context | 2 zones | Whitespace | Low | Demonstrates page flow integration |
| Tinted | 2 zones | Whitespace + Color fill | Low | Blue tint adds visual weight without changing structure |

---

## Infrastructure Implications

**For the Component System:**

1. **Zone Template:** This is the simplest zone pattern—2-zone vertical stack with whitespace separation
2. **Density Category:** Establishes "Low" as the baseline for informational callouts
3. **Border as Boundary:** The left border pattern (component marker, not zone divider) should be documented as a reusable infrastructure element
4. **Tint Modifier:** The background tint is a density amplifier that can be applied to any low-density component

**Reusable Patterns Identified:**
- `zone-stack-2` - Two vertically stacked zones
- `separator-whitespace` - Whitespace as primary internal separator
- `boundary-left-accent` - Left border as component edge marker
- `density-low` - Generous padding, minimal visual weight
