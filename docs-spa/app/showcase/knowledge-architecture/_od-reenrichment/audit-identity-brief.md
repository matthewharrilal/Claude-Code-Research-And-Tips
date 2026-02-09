<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-identity-brief.md
Tier: B | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: ACCUMULATED-IDENTITY v1.1, OD-CONVENTION-SPEC.md, OD-SYNTHESIS.md, SOUL-DISCOVERIES.md, registry.md
CONSUMED BY: visual-a/b/c, systematic-a/b/c, fresh-eyes (post-audit comparison), standards, consistency
END INLINE THREADING HEADER
-->

# Audit Identity Brief
## Reference Document for OD Re-Enrichment Visual and Systematic Auditors

**Generated:** 2026-02-09
**Purpose:** Single-source reference for all audit agents during Wave 5 verification.
Read this BEFORE opening any OD HTML file. Return to this when making pass/fail judgments.

---

## 1. Soul Compliance Checklist (10 Items -- Zero Exceptions)

Every element in every OD MUST pass all 10 checks. A single failure = SOUL VIOLATION.

```
 1. border-radius: 0 on ALL elements (no exceptions -- buttons, badges, cards, inputs, pseudo-elements)
 2. box-shadow: none on ALL elements (no exceptions -- no hover shadows, no glow, no elevation)
 3. filter: none (no drop-shadow, blur, brightness, or any filter effect)
 4. No transform-based hover effects creating z-depth illusion (translateY, scale, perspective, rotate3d)
 5. Colors from locked palette only (#E83025, #1A1A1A, #FEF9F5, #666666, #E0D5C5, #F0EBE3, #FFFFFF, #FAF5ED + 5 accents)
 6. Font trio only: Instrument Serif (display/essence), Inter (body), JetBrains Mono (code)
 7. Border 3-category system: Cat 1 (structural) >= 3px, Cat 2 (data separator) 1px, Cat 3 (micro-element) 1px
 8. No 2px borders anywhere (epidemic anti-pattern OD-F-AP-001 -- structurally ambiguous)
 9. Spacing via design tokens (--space-1 through --space-20, or Gestalt aliases --space-within/between/chapter)
10. Max 2 callout/aside elements per viewport height (DD-F-014 callout stacking alarm fatigue)
```

---

## 2. Convention Spec Summary

The OD-CONVENTION-SPEC.md (468 lines) unified 3 quality dialects (Polished, Functional, Editorial) into ONE baseline. All 6 ODs share these conventions:

### Dark Header (Universal)
- Full-bleed dark background (#1A1A1A)
- Title in Instrument Serif at --type-page (2.5rem for OD-001-005; 3rem for OD-006)
- Meta line in Inter 500 at --type-meta (0.75rem / 12px), letter-spacing: 0.15em
- Subtitle in Inter 400 at --type-body, max-width: 70ch
- Border-bottom: 3px solid var(--color-primary) (Cat 1 structural)
- Inner wrapper: max-width: 860px, margin: 0 auto

### Type Scale Tokens (Unified)
```
--type-page:       2.5rem  (40px) -- Instrument Serif  [OD-006: 3rem sanctioned]
--type-section:    1.625rem (26px) -- Instrument Serif
--type-subsection: 1.375rem (22px) -- Inter 600 or Instrument Serif
--type-body:       1rem    (16px) -- Inter 400
--type-code:       0.875rem (14px) -- JetBrains Mono
--type-meta:       0.75rem (12px) -- Inter 500
```

### Zone Token Naming
Zone backgrounds use density function names, NOT container names:
- `--color-zone-sparse: #FEF9F5` (questions, hubs, breathing areas)
- `--color-zone-dense: #FFFFFF` (answers, spokes, content areas)
- `--color-zone-breathing: #FAF5ED` (chapter dividers, mode transitions)

### Dark Code Blocks (All ODs except OD-006)
- Background: #1A1A1A, text: #FAFAF5
- Border: 3px solid var(--color-border)
- Syntax palette: red (keywords), green (strings), gray (comments), blue (functions), coral (types), amber (numbers), tan (punctuation)

### Reduced-Motion (Prophylactic)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Page Length Target
- OD-001 through OD-005: 10,000-14,000px body height
- OD-006: 12,000-15,000px (relaxed ceiling -- crown jewel)
- Minimum 15% whitespace (1,500-2,100px breathing zones)

---

## 3. ANTI-PHYSICAL Identity

### The Pattern: 20/20 SOUL FAILs Across 3 Waves

Three waves of re-enrichment tested 20 external research findings against the soul. Every single one was rejected. All 20 follow the ANTI-PHYSICAL pattern: they attempt to make flat screens simulate three-dimensional physical space.

### 6 Categories of SOUL FAIL

| # | Category | Examples Rejected | Count |
|---|----------|-------------------|-------|
| 1 | Decorative depth | Card shadows, rounded progress steppers, gradient connectors | 6 |
| 2 | Animated z-movement | Transform hover-lift, scale-up hover, CSS perspective/3D | 5 |
| 3 | Rounded shapes | Rounded badges, progress bars (physical objects have curves; flat docs don't) | 3 |
| 4 | Gradients suggesting material | Gradient transitions, blur animations (implies light/material interaction) | 3 |
| 5 | Traffic-light color semantics | Red/amber/green material signals (implies physical signal devices) | 2 |
| 6 | Parallax/z-space | Parallax scrolling, layered movement (implies spatial z-depth) | 1 |

### What This Means for Auditors

**The binary test:** Does this technique imply that the content exists in a physical, three-dimensional space? If yes = FAIL. The identity is ANTI-PHYSICAL.

**Specific binary rules:**
- Static solid offset = flat graphic (PASS). Animated offset that syncs with element movement = physics simulation (FAIL). **Does the offset move? Yes = FAIL. No = PASS.**
- `opacity === 1.0` on ALL visual elements. Semi-transparent offsets at ANY opacity < 1.0 create the same visual effect as box-shadow. **Is opacity 1.0? No = FAIL.**
- GEOLOGICAL metaphor uses border-weight gradient (4px/3px/2px/1px) = flat 2D encoding (PASS). Shadow-based depth encoding = physical simulation (FAIL).

---

## 4. Known Issues to SKIP (False Positives from Prior Audits)

These items have been investigated and confirmed as NOT violations. Do NOT flag them.

| Issue | Status | Why It's Not a Violation |
|-------|--------|--------------------------|
| Cat 2/Cat 3 thin borders (1px) | ACCEPTABLE | 1px borders are correct per the 3-category system for data separators and micro-elements. Only STRUCTURAL borders must be 3px+. |
| OD-006 `--type-page: 3rem` | SANCTIONED DIVERGENCE | OD-006 is the crown jewel / editorial synthesis page. Its 3rem page title is explicitly sanctioned in OD-CONVENTION-SPEC.md Section 4. All other ODs use 2.5rem. |
| OD-004 "dead zone" gap | SCROLL ANIMATION ARTIFACT | Investigated via Playwright. The apparent gap between sections is caused by scroll-animation timing, not structural CSS. When animations are disabled, the gap disappears. |
| OD-004 Essence font rendering | FONT-LOADING TIMING | Investigated via `document.fonts.ready`. The Essence callout renders correctly in Instrument Serif italic AFTER fonts load. Early checks before `document.fonts.ready` report fallback font (false positive). |
| OD-006 no code blocks | INTENTIONAL | OD-006 is meta-documentary content about the design system itself. It has no code examples by design. This is part of its Editorial dialect. |
| OD-006 editorial drop caps | INTENTIONAL | Drop caps at section openings are part of OD-006's crown jewel identity (EXT-CREATIVE-005). |

---

## 5. Per-OD Identity Notes

### OD-001: Conversational (Q&A) -- Score: 37/40
- **Pattern:** Q&A pairs generating natural PULSE density (question=sparse, answer=dense)
- **Density pairing:** PULSE (primary) + TIDAL (secondary via width variation)
- **Key features:** Scroll-witness sidebar, solid offset pseudo-elements (must be fully opaque), chapter dividers as breathing zones, follow-up questions creating fractal nesting
- **What to look for:** Q&A width asymmetry (questions ~60%, answers ~100%), zone token colors in sparse/dense areas, dark full-bleed header, dark code blocks
- **v3 enrichments:** Zone token naming, semi-transparent offset fixes, R1-020/R1-028 integration

### OD-002: Narrative Arc -- Score: 35/40
- **Pattern:** Story progression mirroring CRESCENDO (exposition sparse -> climax dense)
- **Density pairing:** CRESCENDO (primary)
- **Key features:** 5-beat Freytag structure (exposition, rising, climax, falling, denouement), progressive disclosure labels transforming passive readers to active participants
- **What to look for:** Increasing density toward climax section, falling action as cognitive decompression zone, narrative arc visible in page structure
- **v3 enrichments:** 11 EXT-NARR findings, Freytag 5-beat validation, micro/macro pacing markers

### OD-003: Task-Based -- Score: ~35/40
- **Pattern:** Procedural task blocks forming dense ISLANDS in sparse navigation
- **Density pairing:** ISLANDS (primary) + BOOKENDS (secondary) + CRESCENDO (sequence)
- **Key features:** Collapsible islands via `<details>` (ISLANDS dual mode: static + interactive), compound density (ISLANDS arrangement + CRESCENDO sequence simultaneously)
- **What to look for:** Island headers forming visual TOC when collapsed, dark header with archipelago map, beginner->advanced island progression
- **v3 enrichments:** Collapsible islands (EXT-TASK-018), off-palette accent-tan fully removed, dark code blocks

### OD-004: Confidence-Based -- Score: 34/40
- **Pattern:** Certainty stratification via GEOLOGICAL density layers
- **Density pairing:** GEOLOGICAL (primary) + CRESCENDO (secondary)
- **Key features:** Border-weight gradient encoding confidence (4px=Established, 3px=Probable, 2px=Speculative, 1px=Open), three flat encoding channels (border width + zone backgrounds + typography compression)
- **What to look for:** Left border widths varying by confidence level, zone backgrounds differentiating strata, NO physical depth cues for geological metaphor (all flat 2D)
- **SPECIAL NOTE on 2px borders:** OD-004 has a UNIQUE exception -- the 4px/3px/2px/1px border-weight gradient is a SEMANTIC encoding system (Cat 3), NOT a structural border violation. The 2px here is intentional confidence encoding on the Y-axis, orthogonal to Cat 1/Cat 2 structural borders on the X-axis.
- **v3 enrichments:** Border-weight confidence encoding, zone tokens, --type-meta fix, 6x 2px structural borders eliminated

### OD-005: Spatial/Map -- Score: 35/40
- **Pattern:** Hub-and-spoke creating WAVE oscillation (sparse hub <-> dense spokes)
- **Density pairing:** WAVE (primary) + ISLANDS (secondary)
- **Key features:** Territory grid with keyboard navigation, WAVE self-documentation sidebar indicator, 3-phase density cascade (dark header landmark -> light hub -> dense spokes)
- **What to look for:** Hub overview area (sparse), spoke content (dense), density oscillation pattern, NO hover-lift transforms on territory tiles (resolved -- must use flat 2D hover like border-color change)
- **v3 enrichments:** Hover transform spirit violation resolved, WAVE indicator, keyboard spatial navigation

### OD-006: Creative/Emergent (Crown Jewel) -- Score: 37/40
- **Pattern:** Meta-documentation cycling through ALL 5 organizational modes
- **Density pairing:** ALL patterns via FRACTAL (primary)
- **Key features:** 5th fractal scale (navigation), pattern echo grid (2x3), fractal annotation layer, editorial drop caps, all 5 prior org modes demonstrated in sequence
- **What to look for:** 5 fractal scales (navigation, page, section, component, character), zone tokens bookend-validated with OD-001, NO code blocks (intentional), --type-page at 3rem (sanctioned)
- **v3 enrichments:** 5th fractal scale emergence, pattern echo grid, fractal annotation layer, zone token quadruple validation

---

## 6. Anti-Patterns Checklist

### From registry.md (All Stages)

| # | Anti-Pattern | What to Check | Category |
|---|-------------|---------------|----------|
| 1 | Rounded Corners | `border-radius` > 0 anywhere | Geometry |
| 2 | Drop Shadows | `box-shadow` not `none` anywhere | Geometry |
| 3 | Traffic-Light Colors | Green callout adjacent to red callout without 48px+ spacing | Color |
| 4 | Gray Backgrounds | Cool gray (#F5F5F5) instead of warm cream (#FEF9F5) | Color |
| 5 | Callout Cacophony | 3+ callouts in one viewport | Layout |
| 6 | Code Wall | Code block >30 lines with no break | Layout |
| 7 | Same Density Throughout | Uniform spacing top to bottom, no rhythm | Layout |
| 8 | Decorative Grid Breaking | Grid broken by decoration, not content | Layout |
| 9 | Sans-Serif for Essence Body | Inter used in Essence callout body instead of Instrument Serif italic | Typography |
| 10 | Thin Callout Borders | Callout left-border < 4px | Typography |
| 11 | Non-Italic h3 | h3 with font-style: normal | Typography |
| 12 | Hover Reveals for Important Content | Information hidden behind hover states | Interaction |
| 13 | Hover Lift Effects | `transform: translateY` on hover | Interaction |
| 14 | Vertical Table Borders | Cell borders on left/right columns (prison bars) | Component |
| 15 | Same-Velocity Stacking | SLOW+SLOW or FAST+FAST components adjacent | Component |

### From OD Stage (OD-F-AP-001 through OD-AP-003)

| # | Anti-Pattern | What to Check | Severity |
|---|-------------|---------------|----------|
| 16 | **OD-F-AP-001: 2px Border Epidemic** | Any `border-width: 2px` used as a STRUCTURAL border. Search CSS for `2px solid`. Exception: OD-004's semantic confidence gradient (Cat 3 encoding). | HIGH -- was 108 CSS declarations |
| 17 | **OD-AP-002: Inconsistent Typography Scale** | --type-page, --type-section, --type-subsection values not matching convention spec. OD-006 at 3rem is sanctioned; all others must be 2.5rem. | MEDIUM |
| 18 | **OD-AP-003: Semi-Transparent Backgrounds** | ANY `rgba(` with alpha < 1.0 on backgrounds, pseudo-element backgrounds, or inline code backgrounds. ANY `opacity:` value < 1 on visual elements. Binary rule: opacity === 1.0 everywhere. | HIGH -- systemic, found in EVERY wave |

### Quick Sweep Commands (for systematic auditors)

When reviewing CSS in any OD file, search for these patterns:
- `border-radius` -- must be 0 or var(--border-radius) which resolves to 0
- `box-shadow` -- must be none or var(--box-shadow) which resolves to none
- `filter:` -- must not contain drop-shadow, blur, brightness
- `rgba(` -- any alpha < 1.0 is a violation (OD-AP-003)
- `opacity:` -- any value < 1 on visual elements is a violation
- `transform:` on `:hover` -- must not create z-depth illusion
- `border.*2px` -- structural 2px is a violation (except OD-004 Cat 3 semantic)
- `border-radius:` values that are not 0
- `Bebas Neue` or any font not in the trio -- wrong font

---

## COMPACTION-SAFE SUMMARY

- **File:** audit-identity-brief.md
- **Purpose:** Single reference for all audit agents during OD Wave 5 verification
- **Soul checklist:** 10 items, zero exceptions (border-radius:0, box-shadow:none, filter:none, no hover z-depth, locked palette, font trio, 3-cat borders, no 2px, token spacing, max 2 callouts)
- **Convention spec:** Dark header, unified type scale, zone tokens, dark code blocks, reduced-motion, page length targets
- **ANTI-PHYSICAL:** 20/20 SOUL FAILs across 3 waves, 6 rejection categories, binary rules for offset animation and opacity
- **False positives to skip:** 1px thin borders OK, OD-006 3rem OK, OD-004 dead zone = scroll artifact, OD-004 Essence font = loading timing, OD-006 no code blocks = intentional
- **Per-OD notes:** 6 ODs with pattern, density pairing, key features, audit targets
- **Anti-patterns:** 15 from registry + 3 OD-specific (2px epidemic, typography scale, semi-transparent backgrounds)
- **OD-004 special:** 2px borders in confidence gradient are Cat 3 semantic encoding, NOT structural violation
