# Scale Analysis: Navigation (~1440px)

## Agent: scale-navigation
## Task: Compositional Intelligence Stack at Navigation Scale
## Sources: conventions-brief.md (Sections 4, 5, 8), mechanism-catalog.md (18 mechanisms), gate-runner.md (21 gates)

---

## What Is Navigation Scale?

Navigation scale is the widest architectural view: header, nav, page-level chrome, footer. At ~1440px viewport, it is what the reader sees BEFORE encountering content. It is the page's handshake -- the first 100-200px of vertical space that establishes identity, sets expectations, and creates the perceptual frame through which all subsequent content is interpreted.

In the conventions brief's fractal echo table (Section 5), Navigation is the FIRST scale listed, with these specifications:

| Scale | Size | What Expresses Here | Min Threshold |
|-------|------|---------------------|---------------|
| Navigation | ~1440px | Header/nav set tone and density | Header padding >= 48px, visible at 20% zoom |

The brief classifies Navigation as **mandatory strong** alongside Page and Component.

---

## 1. Six Channels at Navigation Scale

### Channel Assessment

**CHROMATIC (header background): STRONG -- the STRONGEST signal at this scale.**

At Navigation scale, chromatic IS the identity declaration. The conventions brief's "Dark Slab Inversion" (Section 8) specifies header background as `#1A1A1A` with text `#FEF9F5`, producing a 220+ RGB delta against the first content zone. This is the single largest chromatic event on the entire page. No other boundary anywhere on the page produces this magnitude of color shift.

What enrichment looks like: The header-to-first-zone boundary is already the most powerful chromatic moment available in the design system. Enrichment here is not about ADDING signal -- it is about ensuring the signal is CLEAN. The 3px primary red border-bottom (`#E83025`) at the header base creates a chromatic triplet: dark background -> red accent -> cream content zone. Three distinct color temperatures in ~10px of vertical space. This is already maximally enriched.

CSS reality:
```css
header { background: #1A1A1A; color: #FEF9F5; border-bottom: 3px solid #E83025; }
/* First content section */
.zone-1 { background: #FEF9F5; } /* Delta: 220+ RGB on all channels */
```

Verdict: **Already at ceiling. No enrichment needed. Protect, do not embellish.**

---

**TYPOGRAPHIC (heading sizes, nav font): STRONG -- identity-defining.**

Navigation scale establishes the typographic ceiling. The page title in Instrument Serif at `--type-page: 2.5rem` (40px) is the largest text on the page. Navigation items in Inter at body size or meta size create the first instance of the font trinity in action. The reader encounters all three register levels -- display (title), body (nav text), and mono (optional section labels) -- within the header zone.

What enrichment looks like: The typographic range at Navigation scale sets the RANGE for the entire page. If the header uses 40px for the title and 12px for meta labels, the page has declared a 3.3x typographic ratio. Every subsequent zone operates within that range. Enrichment means ensuring the FULL range is exercised here, not compressed. A header that uses only 24px and 16px wastes 40% of available typographic range before content begins.

CSS reality:
```css
.page-title { font-family: 'Instrument Serif'; font-size: 2.5rem; }
.page-meta { font-family: 'JetBrains Mono'; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; }
nav a { font-family: 'Inter'; font-size: 1rem; }
```

Verdict: **Strong and essential. Enrichment = ensure full range deployment (all 3 font families, >= 2 size tiers).**

---

**SPATIAL (header padding, nav spacing): STRONG -- sets the density baseline.**

Navigation scale spatial treatment defines what "generous" and "compressed" mean for the rest of the page. The fractal echo table specifies `header padding >= 48px`. If the header uses 64px padding, then 48px in content zones reads as "slightly tighter" and 32px reads as "compressed." The header padding IS the reference point.

What enrichment looks like: The header's internal spatial architecture -- padding around the title, gap between title and nav, breathing room at the edges -- establishes the page's spatial vocabulary. A header with 80px top/bottom padding and 24px between title and nav creates a wide spatial range (80px to 24px = 3.3x). A header with 48px padding and 40px gap has almost no spatial differentiation (1.2x).

CSS reality:
```css
header { padding: 64px 0; }
.header-inner { max-width: 960px; margin: 0 auto; padding: 0 32px; }
.page-title { margin-bottom: 16px; }
nav { margin-top: 24px; }
```

Verdict: **Strong. Enrichment = ensure spatial hierarchy within header (title padding > nav padding > label padding).**

---

**STRUCTURAL (header borders, nav separators): MODERATE -- one dominant signal.**

At Navigation scale, structural treatment is concentrated in a single element: the `border-bottom: 3px solid #E83025` that separates header from content. This is the most prominent structural element on the page. Nav separators (1px between items, if present) and any nav underlines are secondary.

What enrichment looks like: The 3-tier border budget (4px / 3px / 1px) can express at Navigation scale, but minimally. The header border-bottom at 3px is the structural landmark. Adding a 1px separator within nav items or a subtle 1px top-border on a nav container creates a second tier. But deploying all three tiers in the header alone is overloading -- the header should establish ONE tier (3px structural landmark) and leave the others for content.

CSS reality:
```css
header { border-bottom: 3px solid #E83025; }
nav a + a { border-left: 1px solid rgba(254, 249, 245, 0.2); } /* Optional nav separator */
```

Verdict: **Moderate. One structural signal (3px bottom border) is sufficient. Do not overload.**

---

**BEHAVIORAL (nav hover, dropdowns): WEAK -- functional, not compositional.**

Hover states on nav items, active link indicators, and transition timing are functional interactions, not compositional architecture. At Navigation scale, behavioral channel is the LEAST compositional because it only manifests on interaction. A reader scrolling past the header at normal speed never triggers hover states.

What enrichment looks like: The primary behavioral signal at Navigation is the transition from "in header" to "scrolled past header" (if using a sticky nav). Secondary signals are hover color changes on nav links. These serve usability, not composition. Enrichment here adds functional polish but zero compositional richness.

CSS reality:
```css
nav a { transition: color 0.15s ease; }
nav a:hover { color: #E83025; }
```

Verdict: **Weak. Functional necessity, not compositional opportunity. Minimal enrichment value.**

---

**MATERIAL (header surface): WEAK at Navigation specifically.**

Material channel (surface treatment, component density) has almost no expression at Navigation scale because the header IS a surface, not a container OF surfaces. The header's dark slab is a single material treatment. There are no competing textures, no pattern overlays, no component density variation within the header zone.

What enrichment looks like: Material differentiation would mean having different surface treatments WITHIN the header -- but the header is too small (100-200px vertical) to contain meaningful material zones. A sticky TOC below the header could count as a material shift (different background tint + border treatment), but that is more accurately a Page scale element.

Verdict: **Weak at Navigation. Material channel activates at Section and Component scales, not here.**

---

### Channel Strength Summary at Navigation Scale

| Channel | Strength | Role |
|---------|----------|------|
| Chromatic | **STRONG** | Identity declaration (dark slab, 220+ RGB delta) |
| Typographic | **STRONG** | Range establishment (full font trinity, max type size) |
| Spatial | **STRONG** | Density baseline (header padding = spatial reference point) |
| Structural | **MODERATE** | Single landmark (3px border-bottom) |
| Behavioral | **WEAK** | Functional (hover states, no compositional weight) |
| Material | **WEAK** | Single surface (no internal differentiation) |

**3 strong channels, 1 moderate, 2 weak.** Navigation naturally supports the primary 4 channels (Chromatic, Typographic, Spatial, Structural) and does NOT naturally support the enhancement channels (Behavioral, Material). This aligns with the conventions brief's statement: "The 4 primary channels are Chromatic, Typographic, Spatial, and Structural... Behavioral and Material are enhancement channels."

---

## 2. Multi-Coherence at Navigation Scale

### The Boundary Question

Multi-coherence requires ">=3 channels shifting together at every zone boundary." At Navigation scale, there is exactly ONE major boundary: **header-to-first-content-zone.**

This is not just ANY boundary -- it is the STRONGEST boundary on the page. The dark slab inversion (mechanism #13) produces:

- **Chromatic shift:** #1A1A1A -> #FEF9F5 (delta: 228 R, 223 G, 219 B)
- **Typographic shift:** Instrument Serif 2.5rem (display) -> Inter 1rem (body) -- both font family AND size shift
- **Spatial shift:** Header padding 64px -> first section padding 48px (compression)
- **Structural shift:** 3px red border-bottom appears at boundary

That is **4 channels shifting simultaneously** at the header-content boundary. Multi-coherence is INHERENTLY satisfied at Navigation scale's primary boundary without any enrichment.

### Is There Even a Second Boundary at Navigation?

A TOC or nav bar below the header creates a secondary boundary. If using a sticky TOC (mechanism #8), there is a toc-to-content boundary:

- Chromatic: TOC background (#F0EBE3) -> content background (#FEF9F5) = 14 RGB delta. **This is BELOW the 15 RGB threshold.** The TOC-content boundary may fail SC-09 unless intentionally designed.
- Typographic: TOC labels (mono, 0.75rem) -> content text (body, 1rem) = shift
- Structural: TOC border (3px solid) -> no border in first section = shift

If the TOC background is adjusted to meet the 15 RGB threshold (e.g., #EDE5D9, delta ~24), this secondary boundary achieves 3-channel multi-coherence.

### Navigation's Role in Multi-Coherence

Navigation scale does NOT create multi-coherence. It **INAUGURATES** it. The header-content boundary is the opening act -- the loudest, most dramatic transition on the page. Subsequent zone boundaries modulate at lower intensity (3-4 channels). The header transition at 4-5 channels sets the ceiling of what "a big shift" means on this page.

This is compositionally significant: if the header-content transition is weak (2 channels, low delta), then the reader's calibration of "what counts as a zone change" starts low, and subsequent transitions must compete with that low baseline. A strong Navigation-scale multi-coherence event calibrates the reader's perception upward.

**Enrichment verdict:** Multi-coherence at Navigation is already naturally strong. Enrichment should focus on ensuring the boundary is CLEAN (all channels shifting in the same OPENING direction: lighter bg + generous spacing + display typography + structural landmark appearing) rather than adding more channels.

---

## 3. Anti-Scale Model at Navigation Scale

The anti-scale model: **Richness = semantic density x restraint x spatial confidence.**

### Semantic Density at Navigation

Semantic density at Navigation means: how much MEANING is packed into the header zone? A header with just a page title has low density. A header with title + subtitle + navigation + section labels + page meta (date, status, version) has high density.

But density at Navigation has a ceiling: the header should communicate WHAT THIS PAGE IS and WHERE THINGS ARE, not deliver content. A header that tries to communicate too much becomes a content zone rather than a navigation zone.

Enrichment: Ensure headers contain at minimum: (1) page title in Instrument Serif, (2) subtitle or description in Inter, (3) structural meta in JetBrains Mono (e.g., "SECTION 03 / RESEARCH SYNTHESIS"). Three typographic registers = three semantic layers = adequate density.

### Restraint at Navigation

Restraint at Navigation means: what is ABSENT from the header? Specifically:

- No accent colors in header (reserved for callouts in content zones)
- No multiple border weights (just the 3px bottom border, not 4px + 3px + 1px)
- No component density (no callouts, no cards, no bento grids in the header)
- No drop caps, no code blocks, no tables

The header's job is to be a FRAME, not a gallery. Restraint here means the header is typographically rich but compositionally minimal. It DECLARES but does not DEMONSTRATE.

Enrichment: Document restraint explicitly. "The header deliberately omits: accent colors, multiple border tiers, component families, layout grids. These are reserved for content zones where they serve the content."

### Spatial Confidence at Navigation

Spatial confidence at Navigation means: does the header look intentional at arm's length? At 20% zoom (the fractal echo table's threshold), can you identify the header as a distinct architectural zone?

This requires:
- Sufficient vertical padding (>= 48px, per the fractal table threshold)
- Clear contrast against subsequent zones (dark slab achieves this)
- Internal hierarchy visible even when blurred (title visibly larger than nav text)

Enrichment: The "visible at 20% zoom" test is already specified. Enrichment would add: "At 20% zoom, the header should appear as a dark band at page top with discernible internal structure (not a uniform dark rectangle)." This distinguishes between "the header exists" (minimal) and "the header has internal architecture" (confident).

### Anti-Scale Summary at Navigation

| Factor | Navigation Expression | Enrichment Opportunity |
|--------|----------------------|----------------------|
| Density | 3 semantic layers (title, subtitle, meta) | Ensure all 3 typographic registers present |
| Restraint | No accent colors, no components, no grids | Document deliberate absences |
| Spatial Confidence | Dark slab visible at 20% zoom | Require internal structure visible at 20% zoom |

---

## 4. Fractal Self-Similarity at Navigation Scale

### What Fractal Echo Means at Navigation

Fractal self-similarity at Navigation means: the header ECHOES the page's organizing principle at the widest zoom level.

If the page's organizing principle is DEEPENING (progressive compression from sparse to dense), the header should express "the beginning of depth" -- generous spacing, the widest type, the most open treatment. The header IS the sparse end of the deepening gradient.

If the page's organizing principle is FOCUSING (narrowing from broad to specific), the header should express "the broadest view" -- full-width dark slab, panoramic title, overview-level description. The header IS the wide end of the focusing gradient.

### How in CSS

**DEEPENING metaphor at Navigation:**
```css
header {
  padding: 80px 0; /* Most generous spacing on the page */
  /* Content zones will progressively compress to 32px */
}
.page-title { font-size: 2.5rem; letter-spacing: 0.05em; } /* Widest tracking */
/* Content zones will progressively tighten */
```

**FOCUSING metaphor at Navigation:**
```css
header {
  /* Full bleed dark slab */
  background: #1A1A1A;
  padding: 64px 0;
}
.header-inner {
  max-width: 960px; /* Already narrower than viewport */
  /* Content zones will further constrain via column widths */
}
```

**RESOLVING metaphor at Navigation:**
```css
header {
  /* The header introduces tension that the page will resolve */
  background: #1A1A1A;
  border-bottom: 3px solid #E83025; /* Primary red = tension signal */
}
/* Footer will mirror with resolution: same dark bg, different border treatment */
```

### The Parametric Echo

The conventions brief specifies "parametric echo" -- components in dense zones have tighter padding than in sparse zones. At Navigation scale, this means: the header's INTERNAL spacing parameters should match the density level the header represents in the page's overall gradient.

If the header represents the SPARSEST point (deepening metaphor), its internal padding should be the MOST generous. If the header represents the MOST STRUCTURED point (organizing metaphor), its internal elements should be the most tightly arranged.

---

## 5. Perception Thresholds at Navigation Scale

### Which Thresholds Matter Here

**CONTAINER WIDTH (SC-01): CRITICAL -- the #1 failure mode.**

The 940-960px constraint applies to the `.header-inner` content container, not to the header's full-bleed background. The dark slab extends edge-to-edge; the CONTENT within is constrained. This distinction is frequently violated: builders set the header to 960px (content starts to look narrow) when they should set the inner container to 960px and let the header background bleed.

Enrichment: Explicitly state: "Header background: 100vw (full bleed). Header inner content: max-width 960px, centered. The dark slab extends to viewport edges. The text container does not."

**BG DELTA HEADER -> FIRST SECTION (SC-09): INHERENTLY SATISFIED.**

#1A1A1A (header) to #FEF9F5 (first zone) = 228/223/219 RGB delta. This is 15x the threshold. No enrichment needed -- the dark slab inversion makes this threshold trivially satisfied.

**BG DELTA TOC/NAV -> FIRST SECTION: POTENTIALLY FAILING.**

If a TOC or sub-nav sits between header and first content zone, its background must differ from the first content zone by >= 15 RGB on at least one channel. Default TOC background (#F0EBE3) vs default first zone (#FEF9F5) = 14/14/18 RGB delta. The B channel (227 vs 245 = 18) passes, but barely. This should be explicitly checked.

**FONT HIERARCHY (SC-11): NAVIGATION SETS THE CEILING.**

Display-body delta at Navigation: 2.5rem (40px) - 1rem (16px) = 24px. The 10px Flagship threshold is exceeded by 14px. Navigation scale inherently satisfies typography hierarchy.

**STACKED GAP (SC-10): RELEVANT AT HEADER-CONTENT BOUNDARY.**

Header bottom padding + header border + first section top padding + any margin between = total gap. If header has 64px bottom padding, 3px border, and first section has 48px top padding = 115px total. This is UNDER the 120px threshold but close. If a TOC/nav adds vertical space between header and content, this can exceed 120px.

Enrichment: "Measure total vertical gap from last header content element to first content zone element. Must be <= 120px. Header padding + border + section padding accumulates quickly."

### Threshold Summary at Navigation

| Threshold | Status | Risk | Enrichment |
|-----------|--------|------|------------|
| SC-01 Container Width | CRITICAL | High (common failure) | Distinguish header bleed vs inner container |
| SC-09 BG Delta (header->zone) | PASSES TRIVIALLY | None | 220+ RGB, no action needed |
| SC-09 BG Delta (TOC->zone) | BORDERLINE | Medium | Verify TOC bg delta >= 15 RGB on any channel |
| SC-11 Typography | PASSES TRIVIALLY | None | 24px delta vs 10px threshold |
| SC-10 Stacked Gap | BORDERLINE | Medium | Measure total accumulation at header-content boundary |
| SC-14 Sub-perceptual | N/A at Navigation | None | No fine typography in header zone |

---

## 6. What Would Enrichment Look Like?

### Telescope (Why-Level Guidance)

Navigation scale enrichment as a telescope directive:

> "The header is the page's handshake. It declares identity (dark slab, font trinity, primary accent), establishes spatial expectations (the widest padding, the largest type), and inaugurates the page's organizing principle at its broadest expression. The header-to-content boundary is the loudest multi-coherence event on the page -- 4+ channels shifting simultaneously. Everything that follows modulates within the range the header established."

This is a TELESCOPE -- it tells the builder WHY Navigation scale matters and what role it plays in the page's composition. It does not specify CSS values.

### Checklist (What-Level Verification)

Navigation scale enrichment as a checklist:

```
NAV-01: Header background is #1A1A1A (dark slab inversion)     [BINARY]
NAV-02: Header border-bottom is 3px solid #E83025              [BINARY]
NAV-03: Page title uses Instrument Serif at >= 2rem             [BINARY]
NAV-04: Header inner container is 940-960px, centered           [BINARY]
NAV-05: Header padding >= 48px top and bottom                   [BINARY]
NAV-06: All 3 font families appear in header zone               [BINARY]
NAV-07: Header-to-first-zone stacked gap <= 120px               [BINARY]
NAV-08: If TOC present, TOC-to-content bg delta >= 15 RGB       [BINARY]
NAV-09: Header visible as distinct zone at 20% zoom             [PERCEPTUAL]
NAV-10: Header internal structure visible at 20% zoom           [PERCEPTUAL]
```

### Recommendation: CHECKLIST with Telescope Preamble

Navigation scale is best served by a CHECKLIST because:

1. Navigation has the LEAST creative variance of any scale. The dark slab, the 3px red border, the font trinity deployment -- these are IDENTITY elements, not compositional choices. They are the same on every page.

2. Navigation failures are the most MEASURABLE (container width, padding values, bg delta). Programmatic gates already cover most of these (SC-01, SC-09, SC-10, SC-11).

3. The creative decision at Navigation scale is minimal: how does the header express the page's organizing principle? This is a single question, not a compositional exercise.

However, the checklist should be preceded by a 2-3 sentence telescope explaining WHY these items matter: the header calibrates the reader's perception. The strongest multi-coherence event on the page happens here. The spatial and typographic ranges established here bound all subsequent composition.

---

## 7. Visual Quality Assessment

### Would Full Stack at Navigation Scale Produce Richer Results?

**Yes, but with a caveat: Navigation scale is already NATURALLY enriched by the dark slab inversion.**

The full compositional intelligence stack at Navigation scale would mean:

1. **6 Channels:** 3 already strong (chromatic, typographic, spatial), 1 moderate (structural), 2 weak (behavioral, material). Trying to make all 6 strong at Navigation would over-engineer the header. The weak channels are weak HERE because they belong at other scales.

2. **Multi-Coherence:** Already 4+ channels at the header-content boundary. No enrichment needed.

3. **Anti-Scale Model:** Density, restraint, and spatial confidence are all naturally expressed at Navigation scale. Enrichment would mean DOCUMENTING what is already implied, which has value for builder awareness but zero value for visual quality.

4. **Fractal Self-Similarity:** This is the ONE concept that genuinely enriches Navigation. Connecting the header's CSS treatment to the page's organizing principle (deepening, focusing, resolving) makes the header feel intentional rather than templated. Current brief mentions this but does not provide CSS examples per metaphor type.

5. **Perception Thresholds:** Already covered by gates. Enrichment = ensuring builders know about stacked gap accumulation at the header-content boundary.

### Where Enrichment Has Highest ROI at Navigation

| Concept | Current State | Enrichment ROI |
|---------|--------------|----------------|
| 6 Channels | 3 strong, well-documented | LOW -- already at natural ceiling |
| Multi-Coherence | 4+ channels, inherently satisfied | LOW -- automatic from dark slab |
| Anti-Scale Model | Implied but not documented | MEDIUM -- documenting restraint has pedagogical value |
| Fractal Self-Similarity | Mentioned but no CSS examples | **HIGH** -- connecting header CSS to metaphor is underdeveloped |
| Perception Thresholds | Covered by gates but stacking risk | MEDIUM -- stacked gap warning is actionable |

### Net Assessment

**Navigation scale is the LEAST enrichment-needy scale** because identity constraints (dark slab, font trinity, 960px container, 3px red border) already determine 90% of what happens here. The remaining 10% -- how the header expresses the page's organizing principle -- is where enrichment would add genuine compositional value.

The highest-leverage single enrichment for Navigation scale is:

> **Add a "Navigation Echo" section to the conventions brief that provides 3-4 CSS examples showing how different metaphor types (DEEPENING, FOCUSING, RESOLVING, OPENING) express at the header level. This transforms the header from "identity template" to "compositional opening move."**

Without this, every header looks the same regardless of the page's content or metaphor. With it, the header's spatial and typographic parameters become the first expression of the page's compositional intent.

---

## Summary Findings

1. **3 of 6 channels are naturally strong at Navigation.** Chromatic, Typographic, and Spatial dominate. Structural is moderate. Behavioral and Material are weak and SHOULD stay weak at this scale.

2. **Multi-coherence is inherently satisfied** by the dark slab inversion. 4+ channels shift at the header-content boundary without effort.

3. **Navigation does not CREATE multi-coherence -- it INAUGURATES it.** The header-content transition calibrates the reader's perception of what "a zone change" looks like.

4. **Anti-scale model (density x restraint x spatial confidence)** is naturally expressed but undocumented. Documenting restraint has pedagogical value for builders.

5. **Fractal self-similarity is the HIGHEST-ROI enrichment target.** Current brief mentions it but provides no CSS examples of how different metaphors express at Navigation scale.

6. **Perception thresholds are mostly trivially satisfied** except for stacked gap accumulation (SC-10) and TOC-to-content bg delta (SC-09 at secondary boundaries).

7. **Enrichment format should be CHECKLIST with Telescope Preamble.** Navigation has minimal creative variance; most decisions are identity-driven. A checklist ensures mechanical correctness. A telescope preamble ensures the builder understands the header's compositional role.

8. **Full stack at Navigation would produce marginally richer results.** Most value comes from fractal echo (connecting header CSS to metaphor) and stacked-gap awareness (preventing threshold violation). The other concepts are naturally satisfied or not applicable at this scale.

---

END REPORT
