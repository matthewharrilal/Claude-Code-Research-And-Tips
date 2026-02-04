# KortAI Soul Extraction: Foundation for Component Library
## Non-Image Component Soul Translation Guide

═══════════════════════════════════════════════════════════════════════════════
## EXECUTIVE SUMMARY
═══════════════════════════════════════════════════════════════════════════════

**The KortAI soul in one sentence:**
"Editorial calm applied to digital interfaces—achieving authority through what it refuses to do."

**The Named Character:**
"The Unhurried Editor" — A senior professional at a premium publication who has nothing to prove, makes confident decisions quickly, and trusts the reader's intelligence.

**The Root Metaphor:**
KortAI treats DIGITAL INTERFACES as EDITORIAL PUBLICATIONS. Cards are feature stories. The interface is a magazine spread. Content is curated, not accumulated.

═══════════════════════════════════════════════════════════════════════════════
## SUB-AGENT A: ZONE-TYPOGRAPHY FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### Typography Inventory

**CARD TITLES ("Capital Metamorphosis" / "Sensitive Dependencies"):**
- Font family: Serif (appears to be a transitional serif like Georgia or custom)
- Weight: Regular (400) — NOT bold
- Size relative to card: Large (~24-28px), dominates text zone
- Case: Sentence case — natural, unhurried
- Color: Near-black (#1A1A1A) — confident, not harsh
- Position: Immediately below metadata, above description
- Emphasis method: SIZE and POSITION only — no color, no weight stacking
- Line height: Normal (~1.3)
- Letter spacing: Normal (not tracked)

**METADATA TEXT ("Dec 05", "11:00 AM"):**
- Typeface: Sans-serif (matches body text family)
- Size relative to title: Much smaller (~12px vs 24px)
- Weight: Regular (400)
- Color: Muted gray (#888 or similar)
- Icon pairing: Calendar icon, clock icon — minimal, monochrome, functional

**BODY TEXT ("Moving from static savings..."):**
- Typeface: Sans-serif (same family as metadata)
- Size: ~14-16px (readable but subordinate to title)
- Line height: Generous (~1.6-1.7)
- Color: Dark gray (#444 or similar) — not as dark as title

**LABELS ("MY CARD", "Today"):**
- Case: UPPERCASE
- Weight: Medium (500)
- Size: Small (~11-12px)
- Color: Muted gray for "MY CARD", black for "Today"
- Purpose: Category markers, not emphasis

**BUTTON TEXT ("Add Card", "Copy link", "Expand"):**
- Typeface: Sans-serif
- Weight: Medium (500)
- Case: Sentence case
- Size: Small (~12-13px)

**METRIC LABELS ("Efficiency Delta", "Variance Threshold"):**
- Position: Next to progress indicators
- Relationship to icon: Follows ring/progress indicator
- Typography treatment: Small, regular weight, muted

### Typography Restraint Analysis

| Treatment Type | Count |
|----------------|-------|
| Distinct sizes | 3-4 (title large, body medium, metadata/labels small) |
| Distinct weights | 2 (regular, medium) |
| Distinct colors | 3 (black, dark gray, muted gray) |
| Distinct cases | 2 (sentence, uppercase for labels only) |
| **TOTAL** | 10-12 variations |

**Restraint Assessment:** HIGHLY RESTRAINED — Most systems use 20+ variations
**Dominant Hierarchy Method:** SIZE creates hierarchy, not weight or color

### Typography Soul Extraction

**Perceptual Truth:**
"KortAI typography feels like a confident professional speaking at conversational volume—authority through position, not emphasis stacking."

**Named Character:**
"The Unhurried Librarian" — Knows where everything is, doesn't need to raise voice

**Test:**
When viewing the typography, I should feel CALM, not stimulated. No element should feel like it's competing for attention.

**Anti-pattern:**
BOLD + UPPERCASE + COLOR = "The Eager Intern trying to impress" — violates the unhurried soul

═══════════════════════════════════════════════════════════════════════════════
## SUB-AGENT B: ZONE-SPACING FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### External Spacing (Card to Card)
- Gap between cards: ~24-32px
- Gap feel: COMFORTABLE — neither tight nor wasteful
- Separation method: Whitespace only (no visible dividers)

### Internal Spacing (Within Card)

**Padding from card edge:**
| Edge | Measurement | Feel |
|------|-------------|------|
| Top | 0px (image bleeds) | Intentional |
| Sides | 20-24px | Generous |
| Bottom | 20-24px | Generous |

**Between zones:**
| Transition | Gap | Feel |
|------------|-----|------|
| Image → MY CARD | 16-20px | Breath between image and content |
| MY CARD → Metadata | 8-12px | Tight coupling (same row feel) |
| Metadata → Title | 12-16px | Clear separation |
| Title → Description | 8-12px | Tight coupling |
| Description → Widget | 16-20px | Section break |

**Pattern:** GRADUATED — tighter within logical groups, looser between sections

### Density Assessment
- Overall internal density: COMFORTABLE — not sparse, not cramped
- Highest density zone: Metadata row (date + time + icons)
- Most breathing room: Between image and content zones
- Creates rhythm: YES — alternating tight/loose creates reading flow

### Spacing Soul Extraction

**Perceptual Truth:**
"KortAI spacing feels like a well-curated museum—each piece has room to be considered without feeling isolated."

**Named Character:**
"The Gallery Curator" — Knows exactly how much wall space each piece needs

**Test:**
When viewing the card, I should feel like I have TIME to absorb each zone before moving to the next.

**Anti-pattern:**
Dense packing where elements touch or nearly touch — violates the considered, curated soul

═══════════════════════════════════════════════════════════════════════════════
## SUB-AGENT C: ZONE-CONTAINERS FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### Card Container
| Property | Value |
|----------|-------|
| Border | NO visible border |
| Background | White (#FFFFFF) or very light cream |
| Texture | None |
| Gradient | None |
| Shadow | YES — subtle lift (`0 2px 8px rgba(0,0,0,0.08)`) |
| Corners | Slightly rounded (~4-6px) |

**Container Feel:**
- BOX or ZONE: **ZONE** — defined by shadow and whitespace, not hard edges
- CONTAINED or FLOATING: **FLOATING** — shadow creates lift
- HEAVY or LIGHT: **LIGHT** — minimal visual weight from container itself

### Internal Containers
| Container | Border | Background | Corners | Purpose |
|-----------|--------|------------|---------|---------|
| Image zone | None | N/A (image IS zone) | 4-6px top | Visual anchor |
| Content zones | None | Transparent | N/A | No sub-containers |
| Button "Add Card" | 1px gray | Transparent | ~4px | Minimal affordance |
| Badge "Today" | None | Light tint | ~4px | Status indicator |

### Button Containers
| Button | Border | Background | Corners | Icon+Text |
|--------|--------|------------|---------|-----------|
| Add Card | 1px light gray | None | 4px | Icon left of text |
| Copy link | 1px light gray | None | 4px | Icon left of text |
| Expand | 1px light gray | None | 4px | Icon only |

### Container Soul Extraction

**Perceptual Truth:**
"KortAI containers feel like paper notes resting on a desk—present through shadow and position, not through walls."

**Named Character:**
"The Minimalist Architect" — Defines space through light, not walls

**Test:**
Containers should feel like they're SUGGESTING boundaries, not ENFORCING them.

**Anti-pattern:**
Heavy borders, visible outlines around every element — creates "digital bento box" feel that violates material honesty

═══════════════════════════════════════════════════════════════════════════════
## SUB-AGENT D: ZONE-HIERARCHY FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### Eye Tracking Analysis
1. FIRST: **Image** — Why: Dominant size (55-60%), top position, high contrast
2. SECOND: **Title** — Why: Largest text, serif distinction, sentence case draws eye
3. THIRD: **Today badge + percentage** — Why: Color accent (red), position near title
4. FOURTH: **Description** — Why: Reading flow from title
5. FIFTH: **Metadata/Label** — Why: Small, muted, clearly supporting

**Designed or Accidental:** DESIGNED — clear intentional flow from image → title → content

### Zone Hierarchy (Most to Least Prominent)
| Rank | Zone | Why This Rank |
|------|------|---------------|
| 1 | Image | Size, position, visual weight |
| 2 | Title | Typography size, serif distinction |
| 3 | Badge/Percentage | Color accent draws eye |
| 4 | Description | Readable body text |
| 5 | Widget | Functional, not focal |
| 6 | Metadata | Small, muted, supporting |

### Hierarchy Methods
- [x] Size variation (PRIMARY)
- [ ] Weight variation (minimal)
- [x] Color variation (sparingly — mostly grayscale range)
- [x] Position (top = most important)
- [ ] Contrast (within grayscale)
- [x] Whitespace (creates zones)
- [ ] Containment (avoided)

**PRIMARY method:** SIZE
**SECONDARY method:** POSITION

### Hierarchy Soul Extraction

**Perceptual Truth:**
"KortAI hierarchy feels like a confident speaker who knows the important points don't need underlining—position and proportion do the work."

**Named Character:**
"The Senior Executive" — States conclusions first, supports with details

**Test:**
Cover the title — does the eye still know where to go? (If yes, hierarchy failed)

**Anti-pattern:**
Bold + color + larger size + caps = "Emphasis stacking" — the mark of insecurity

═══════════════════════════════════════════════════════════════════════════════
## SUB-AGENT E: ZONE-COMPOSITION FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### Card Composition
| Area | Weight |
|------|--------|
| Top half | HEAVY (image dominates) |
| Bottom half | LIGHT (text, whitespace) |
| Balance | TOP-HEAVY (intentional anchor) |

**Tension:** YES — image mass vs text lightness creates productive pull
**Energy:** RESTFUL — calm, not static; there's flow but no urgency

### Page Composition (from page layout reference)
| Section | % of Page |
|---------|-----------|
| Hero (halftone pattern) | ~40% |
| Navigation | ~5% |
| Cards | ~55% |

**Horizontal Rhythm:** Cards evenly spaced with comfortable gaps
**Vertical Rhythm:** Hero → Navigation → Cards (clear sections)
**Breathing Room:** GENEROUS — page doesn't feel cramped

### Composition Soul Extraction

**Perceptual Truth:**
"KortAI composition feels like a gallery wall—each piece anchored by a dominant image, with supporting text as the placard."

**Named Character:**
"The Exhibition Designer" — Knows the art goes at eye level, labels go below

**Test:**
Squint at the card — one dominant mass should persist (the image)

**Anti-pattern:**
50/50 image/text splits, multiple competing visual centers — creates "grid of equal boxes" feel

═══════════════════════════════════════════════════════════════════════════════
## SUB-AGENT F: ZONE-COLOR FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### Color Inventory

**Backgrounds:**
| Element | Color | Hex |
|---------|-------|-----|
| Page | Light gray/cream | #FAFAFA or #F8F6F0 |
| Card | White | #FFFFFF |
| Hero | Halftone pattern | Purple/blue on cream |

**Text:**
| Level | Color | Hex |
|-------|-------|-----|
| Primary (titles) | Near-black | #1A1A1A |
| Secondary (body) | Dark gray | #444444 |
| Tertiary (metadata) | Medium gray | #888888 |
| Muted (labels) | Light gray | #AAAAAA |

**Accents:**
| Element | Color | Hex |
|---------|-------|-----|
| Today badge | Red | #E83025 |
| Progress ring | Gradient (red/green/blue) | Multi |
| Percentage indicator | Red | #E83025 |

**UI Elements:**
| Element | Color | Hex |
|---------|-------|-----|
| Button borders | Light gray | #DDDDDD |
| Icons | Gray | #888888 |
| Separators | None visible | N/A |

### Color Restraint Analysis
| Role | Count |
|------|-------|
| Text colors | 4 (black → light gray gradient) |
| Background colors | 2 (white, cream) |
| Accent colors | 1-2 (red primary, green/blue in data viz only) |
| **TOTAL** | 7-8 |

**Palette Constrained:** YES — essentially monochromatic with single red accent

### Color Soul Extraction

**Perceptual Truth:**
"KortAI color feels like ink on quality paper—mostly black and white, with red reserved for margin notes."

**Named Character:**
"The Newspaper of Record" — Black type, occasional red headline

**Test:**
Remove the red accent — the design should still work perfectly (red is emphasis, not structure)

**Anti-pattern:**
Color-coding everything (blue for X, green for Y, orange for Z) — creates "color carnival" that violates restraint

═══════════════════════════════════════════════════════════════════════════════
## SUB-AGENT G: ZONE-LAYOUT-INFRASTRUCTURE FINDINGS
═══════════════════════════════════════════════════════════════════════════════

### Section Analysis (Page Layout)

**Hero Section:**
- Content: Large halftone pattern (decorative/brand)
- Typography treatment: "Real Insights Financial Reports" — serif, large
- Supporting text treatment: Small, right-aligned, muted

**Navigation Row:**
- Items: Explore All Financial Features · Countries · Hot News · Graphs · Company Overview · Manage Investments
- Separator: Dots (·)
- Typography: Small, regular weight
- Active state: Underline indicates selection

**Card Section:**
- Arrangement: Horizontal scroll
- Card count visible: 3 (partial visibility of 4th)
- Scroll indication: Cards extend beyond viewport

### Multi-Axis Analysis
| Direction | Elements |
|-----------|----------|
| Horizontal | Card carousel, navigation items, card internal rows |
| Vertical | Hero → Nav → Cards, internal card zones |

**Pattern:** H-V-H — Horizontal at page level, vertical within cards

### Density Distribution
| Zone | Density |
|------|---------|
| Hero | LOW (mostly pattern) |
| Navigation | MEDIUM (text row) |
| Cards | MEDIUM (comfortable internal density) |

**Breathing Points:** Between hero and nav, between nav and cards, between cards

### Compartmentalization
- [x] Background color change (hero → card area)
- [x] Whitespace
- [ ] Horizontal rules (avoided)
- [x] Content type change
- [x] Visual weight change

**Compartmentalization Feel:** FLUID — sections blend into each other, not rigidly boxed

### Layout Soul Extraction

**Perceptual Truth:**
"KortAI layout feels like turning magazine pages—each section flows to the next, compartments defined by content rhythm, not hard dividers."

**Named Character:**
"The Editorial Director" — Paces the reader through content without jarring breaks

**Test:**
Remove all visible borders — layout should still make sense through whitespace and content grouping

**Anti-pattern:**
Grid lines, visible columns, bento-box layouts — creates "spreadsheet" feel

═══════════════════════════════════════════════════════════════════════════════
## INTERNAL CARD STRUCTURE — ZONE MAP
═══════════════════════════════════════════════════════════════════════════════

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ZONE 1: IMAGE ZONE (~55-60%)                                               │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                                                                         ││
│  │              [Halftone image — gravitational center]                    ││
│  │                                                                         ││
│  └─────────────────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────────────────┤
│  ZONE 2: CATEGORY + ACTION ZONE (~5%)                                       │
│  │ MY CARD                                          [📋 Add Card] │        │
├─────────────────────────────────────────────────────────────────────────────┤
│  ZONE 3: METADATA ZONE (~5%)                                                │
│  │ 📅 Dec 05          ⏰ 11:00 AM                                │         │
├─────────────────────────────────────────────────────────────────────────────┤
│  ZONE 4: TITLE ZONE (~10%)                                                  │
│  │ Capital                                          Today [↘ 6.2%] │       │
│  │ Metamorphosis                                                   │        │
├─────────────────────────────────────────────────────────────────────────────┤
│  ZONE 5: DESCRIPTION ZONE (~15%)                                            │
│  │ Moving from static savings to active yield. Your                │        │
│  │ cash flow is currently being re-indexed for                     │        │
│  │ maximum efficiency. Monitor the delta below.                    │        │
├─────────────────────────────────────────────────────────────────────────────┤
│  ZONE 6: WIDGET/NAVIGATION ZONE (~10%)                                      │
│  │ [◐ Progress Ring]   Efficiency Delta              [→]          │        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Zone Separation Methods
| Between | Method | Visibility |
|---------|--------|------------|
| 1 → 2 | Whitespace | Implicit |
| 2 → 3 | Minimal gap | Implicit (same row feel) |
| 3 → 4 | Whitespace | Implicit |
| 4 → 5 | Tight coupling | Implicit |
| 5 → 6 | Whitespace | Implicit |

**Pattern:** ALL IMPLICIT — no visible separators anywhere

### Zone Proportions
| Zone | % of Card | Content Type |
|------|-----------|--------------|
| 1 (Image) | ~55-60% | Visual anchor |
| 2 (Category) | ~5% | Label + Action |
| 3 (Metadata) | ~5% | Data |
| 4 (Title) | ~10% | Text (primary) |
| 5 (Description) | ~15% | Text (supporting) |
| 6 (Widget) | ~10% | Interactive |

═══════════════════════════════════════════════════════════════════════════════
## SOUL TRANSLATION GUIDE — DESIGN TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Typography Rules
| Element | Font | Weight | Size | Case | Color |
|---------|------|--------|------|------|-------|
| Card/Component Titles | Serif (Instrument Serif) | 400 | 20-28px | Sentence | #1A1A1A |
| Section Labels | Sans (Inter) | 500 | 11-12px | UPPERCASE | #888888 |
| Body Text | Sans (Inter) | 400 | 14-16px | Sentence | #444444 |
| Metadata | Sans (Inter) | 400 | 12px | Sentence | #888888 |
| Code | Mono (JetBrains) | 400 | 13-14px | As-is | Per syntax |
| Buttons | Sans (Inter) | 500 | 12-13px | Sentence | #444444 |

### Spacing Rules
| Context | Value |
|---------|-------|
| Component padding | 20-24px |
| Tight coupling (related items) | 4-8px |
| Standard gap (between zones) | 12-16px |
| Section break (between sections) | 24-32px |
| Page margin | 32-48px |

### Container Rules
| Element | Background | Border | Shadow | Corners |
|---------|------------|--------|--------|---------|
| Cards | #FFFFFF | None | 0 2px 8px rgba(0,0,0,0.08) | 4-6px |
| Callouts | Tinted (semantic) | Left 3px accent | None | 0px |
| Code blocks | #1A1A1A | None | None | 4-6px |
| Tables | #FFFFFF | 1px outline | None | 0px |
| Buttons | Transparent | 1px #DDDDDD | None | 4px |

### Color Rules
| Role | Hex | Usage |
|------|-----|-------|
| text-primary | #1A1A1A | Titles, important text |
| text-secondary | #444444 | Body text |
| text-tertiary | #888888 | Metadata, labels |
| text-muted | #AAAAAA | Supporting info |
| bg-page | #FAFAFA | Page background |
| bg-card | #FFFFFF | Card backgrounds |
| bg-warm | #FEF9F5 | Warm component backgrounds |
| accent-red | #E83025 | Primary accent (warnings, emphasis) |
| accent-blue | #4A90D9 | Info indicators |
| accent-green | #4A9D6B | Success, tips |
| accent-amber | #C49052 | Reasoning, process |
| accent-purple | #7B68EE | Challenges, exercises |

### Hierarchy Rules
1. **SIZE** creates primary hierarchy (titles large, metadata small)
2. **POSITION** reinforces hierarchy (important at top)
3. **COLOR** used sparingly for semantic meaning only
4. **WEIGHT** minimal variation (400 vs 500, no bold)

**AVOID:**
- Bold + Uppercase + Color (emphasis stacking)
- Multiple competing visual weights
- Color-coding for category differentiation
- Decorative elements that don't serve function

═══════════════════════════════════════════════════════════════════════════════
## MASTER KORTAI SOUL
═══════════════════════════════════════════════════════════════════════════════

**Overall KortAI Named Character:**
"The Unhurried Editor"

**Master Perceptual Truth:**
"KortAI feels like a premium financial publication designed by someone who has nothing to prove—every element earns its presence through restraint, hierarchy emerges from structure alone, and the overall impression is of confident, editorial calm."

**Master Test:**
Any component that belongs to this family should feel like it could appear in a premium print publication. If it feels like "web design," it doesn't belong.

**Master Anti-Pattern:**
Anything that shouts, decorates without function, or uses emphasis stacking (bold + caps + color) violates the soul. The eager art school graduate is the enemy; the unhurried senior professional is the model.

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-03
**Source Images:**
- provided-kortai-card-detail.png
- provided-kortai-page-layout.png
**Status:** FOUNDATION COMPLETE
**Next:** Component-by-component soul audits
