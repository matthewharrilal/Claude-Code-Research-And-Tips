<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md
     Tier: A | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS

KORTAI-ESSENCE-FOUNDATION.md is the deep soul research document that produced the
KortAI design system's philosophical identity through perceptual deepening analysis of
the original Sanrok/KortAI reference screenshots. It was created during the perceptual
audit (Phase 4, foundation stage) by deploying 7 sub-agents (A through G) to analyze
typography, spacing, containers, hierarchy, composition, color, and layout infrastructure
at the zone level. This file is the ORIGIN of "The Unhurried Editor" named character,
the "editorial calm applied to digital interfaces" master perceptual truth, the
magazine-as-interface root metaphor, and the internal zone map (6 zones with proportions).
It also contains a complete SOUL TRANSLATION GUIDE section with design token tables for
typography, spacing, containers, color, and hierarchy that directly fed into
SOUL-TRANSLATION-GUIDE.md and MASTER-SOUL-SYNTHESIS.md.

2. THE QUESTION THIS ANSWERS

"What IS the KortAI soul at a perceptual and philosophical level — not as CSS rules,
but as a named character with personality, principles, anti-patterns, and a root metaphor
that any designer or agent can internalize before touching code?"

3. STATUS

ACTIVE — Foundation research (pre-synthesis). Lifecycle: COMPLETE (all 7 sub-agent zones
analyzed, master soul statement synthesized, zone map produced, design token tables
written). Authority: FOUNDATION — this feeds T1 synthesis (MASTER-SOUL-SYNTHESIS.md)
but is not itself T1. The philosophical identity defined here ("The Unhurried Editor")
is LOCKED and propagated through the entire T1 synthesis layer.

4. SOUL ALIGNMENT

This file is SOUL-ADJACENT — it defines the philosophical and perceptual underpinnings
that the soul rules formalize. Key soul outputs with CSS implications:

| Soul Dimension | Perceptual Truth | Design Token Implications |
|---------------|-----------------|--------------------------|
| Typography | "Authority through position, not emphasis stacking" | Serif 400 weight titles (20-28px), sans 400 body (14-16px), 3-4 sizes max |
| Spacing | "Well-curated museum — each piece has room to be considered" | 20-24px component padding, graduated zone gaps (4-8px tight, 12-16px standard, 24-32px section) |
| Containers | "Paper notes resting on a desk — present through shadow and position, not walls" | No visible borders, subtle shadow lift, 4-6px corners (NOTE: this is pre-soul-lock; soul-locked value is 0px) |
| Hierarchy | "Confident speaker who knows important points don't need underlining" | SIZE primary, POSITION secondary; no emphasis stacking |
| Composition | "Gallery wall — dominant image, supporting text as placard" | 55-60% image zone, top-heavy intentional balance |
| Color | "Ink on quality paper — mostly black and white, red for margin notes" | Monochromatic base + single red accent (#E83025) |
| Layout | "Turning magazine pages — sections flow, not rigidly boxed" | Whitespace compartmentalization, no visible dividers |

NOTE FOR IMPLEMENTORS: Container corner values (4-6px) in this file's token tables
were observed pre-soul-lock. The authoritative soul-locked value is `border-radius: 0`
per SOUL-DEFINITION.md and DESIGN-TOKEN-SUMMARY.md. Always defer to T1 locked values.

5. BUILT ON

| Source | Role | Key Values | Path |
|--------|------|------------|------|
| card-system/SOUL-DEFINITION.md | Ancestor soul thinking (SUPERSEDED) | 10 soul principles, editorial vs Bootstrap philosophy | `design-extraction/card-system/SOUL-DEFINITION.md` |
| archive/perceptual-audit-phase-2.5/ (SOUL-DISCOVERIES.md, etc.) | Previous perceptual work | 7 soul pieces from earlier audit phase | `design-extraction/component-system/archive/perceptual-audit-phase-2.5/` |
| provided-kortai-card-detail.png | Visual reference (card close-up) | Zone proportions, typography measurements, spacing values | Screenshot in perceptual-audit-v2/screenshots/ |
| provided-kortai-page-layout.png | Visual reference (full page) | Page composition, hero/nav/card layout, breathing room | Screenshot in perceptual-audit-v2/screenshots/ |
| Sanrok reference screenshots | Design origin | Sanrok Studio editorial design language | `.playwright-mcp/sanrok-*.png` |

6. MUST HONOR

This file INHERITS constraints from card-system/SOUL-DEFINITION.md and ESTABLISHES
philosophical foundations that downstream files must honor:

| Constraint | Specification | Enforcement |
|-----------|--------------|-------------|
| "The Unhurried Editor" character | Named character: "A senior professional at a premium publication who has nothing to prove, makes confident decisions quickly, and trusts the reader's intelligence" | All component characters must be members of this character's "family" |
| Root metaphor | "KortAI treats DIGITAL INTERFACES as EDITORIAL PUBLICATIONS" | Every design decision must pass the magazine/print test |
| Master anti-pattern | "Anything that shouts, decorates without function, or uses emphasis stacking" | "The eager art school graduate" is the negative archetype |
| 7 zone-level perceptual truths | Each zone (typography, spacing, containers, hierarchy, composition, color, layout) has a locked named character and truth statement | Zone truths cannot be redefined; new components must align |
| SIZE as primary hierarchy method | "Position and proportion do the work" — not weight, not color, not decoration | Typography hierarchy: size first, position second, weight minimal, color functional only |
| Restraint principle | 10-12 typography variations total (vs 20+ in typical systems) | New components cannot introduce additional font weights, sizes, or color roles |

7. WHAT BREAKS IF THIS CHANGES

BLAST RADIUS: HIGH (8+ direct consumers, all T1 synthesis indirectly)

Direct breakage:
- MASTER-SOUL-SYNTHESIS.md (T1) — extracted "The Unhurried Editor" and master soul
  statement directly from this file's MASTER KORTAI SOUL section
- CHARACTER-FAMILY-COMPLETE.md (T1) — 11 named characters are "family members" of
  "The Unhurried Editor" defined here
- SOUL-TRANSLATION-GUIDE.md — typography, spacing, container, color, and hierarchy
  rules tables are derived from this file's sub-agent findings
- DESIGN-TOKEN-SUMMARY.md (T1) — token values trace back to measurements in this file
- All component soul-extractions (11 files) — per-component characters reference the
  master soul character established here
- tracking/PERCEPTUAL-TRUTHS.md — compiles perceptual truths that originate here
- tracking/NAMED-CHARACTERS.md — character registry built from sub-agent extractions here

Indirect breakage:
- docs-spa/app/showcase/knowledge-architecture/PIPELINE-BACKBONE.md — lists this as
  pipeline stage 1 ("Defines soul in 3 dimensions")
- docs-spa/app/showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md — lists as
  "Core philosophy extraction"

8. CONSUMED BY

| Consumer | How It Uses This File |
|----------|----------------------|
| MASTER-SOUL-SYNTHESIS.md (T1) | Extracts "The Unhurried Editor" character, master perceptual truth, root metaphor; synthesizes 5 soul pieces from 7 zone findings |
| SOUL-TRANSLATION-GUIDE.md | Uses typography rules, spacing rules, container rules, color rules, and hierarchy rules tables as source for non-image component translation |
| CHARACTER-FAMILY-COMPLETE.md (T1) | All 11 component characters derive their "family" membership from the master character defined here |
| DESIGN-TOKEN-SUMMARY.md (T1) | Token values (font sizes, spacing values, color hex codes) trace to measurements in sub-agent findings |
| tracking/PERCEPTUAL-TRUTHS.md | Compiles the 7 zone-level perceptual truths and master truth from this file |
| tracking/NAMED-CHARACTERS.md | Registers the 7 zone-level named characters (Unhurried Librarian, Gallery Curator, Minimalist Architect, Senior Executive, Exhibition Designer, Newspaper of Record, Editorial Director) |
| PIPELINE-BACKBONE.md | References as Stage 1 in the design pipeline ("Defines soul in 3 dimensions") |
| SOURCE-OF-TRUTH-REGISTRY.md | Lists as foundation-tier source of truth for "Core philosophy extraction" |

9. RESEARCH DEBT

- Container corner values in the SOUL TRANSLATION GUIDE section specify 4-6px for cards
  and code blocks, which CONFLICTS with the soul-locked value of `border-radius: 0` in
  SOUL-DEFINITION.md and DESIGN-TOKEN-SUMMARY.md. This is a known pre-lock observation
  that was later overridden, but the file itself has not been updated to note the
  discrepancy — creating a trap for agents that read this file without also consulting T1.
- Card shadow value (`0 2px 8px rgba(0,0,0,0.08)`) in the Container Rules table also
  conflicts with the soul-locked `box-shadow: none`. Same pre-lock observation issue.
- The file references source screenshots ("provided-kortai-card-detail.png",
  "provided-kortai-page-layout.png") but does not specify their exact filesystem path;
  agents may not be able to locate them for verification.
- Sub-agent findings (A through G) were conducted on a single card reference. The degree
  to which these findings generalize to all 11 component types was validated in
  perceptual-audit-v2 but not explicitly documented in this file.
- No formal reconciliation section explains which values from this file were overridden
  by the soul-locking process and which were preserved.

10. DIAGNOSTIC QUESTIONS

Q1: Does the "Master KortAI Soul" statement at the end of this file match the master
    soul statement in MASTER-SOUL-SYNTHESIS.md word-for-word? (Expected: YES or
    intentional paraphrase — any material divergence is a synthesis error)

Q2: Are the 7 zone-level named characters (Unhurried Librarian, Gallery Curator,
    Minimalist Architect, Senior Executive, Exhibition Designer, Newspaper of Record,
    Editorial Director) all registered in tracking/NAMED-CHARACTERS.md? (Expected: YES)

Q3: Do the container rules in the SOUL TRANSLATION GUIDE section (border-radius: 4-6px,
    box-shadow present) carry explicit warnings that they are PRE-LOCK observations
    overridden by SOUL-DEFINITION.md? (Expected: NO — this is known research debt)

Q4: Can an agent reading ONLY this file (without SOUL-DEFINITION.md or
    DESIGN-TOKEN-SUMMARY.md) correctly implement a soul-compliant component?
    (Expected: NO — the pre-lock token values would produce soul violations.
    This file must be consumed with T1 overrides.)

Q5: Does the root metaphor ("KortAI treats DIGITAL INTERFACES as EDITORIAL
    PUBLICATIONS") appear consistently in MASTER-SOUL-SYNTHESIS.md,
    CHARACTER-FAMILY-COMPLETE.md, and PRODUCTION-RULES.md?
    (Expected: YES — metaphor should propagate unchanged through the synthesis chain)

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
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
