# Threading Data -- design-system/ (30 files)

**Generated:** 2026-02-05
**Source analysis:** design-system-analysis.md (Agent GAMMA)
**Cross-ref:** cross-pollination-investigation.md

---

## CRITICAL NOTE: PROVENANCE DISCONNECTION

The design-system/ directory is **completely disconnected** from the showcase provenance chain. Evidence:

1. **Zero structured finding IDs** (V1/V2 = 0)
2. **Zero provenance markers** (V4 = 0 in CSS/TSX files)
3. **Zero deprecation markers** (V8 = 0)
4. **Zero references to design-extraction/** within any file
5. **Zero references from showcase/** to design-system/
6. **Different token values** (#FF0000 vs #E83025, #FBF5EF vs #FEF9F5, #171717 vs #1A1A1A)
7. **8 different token sources of truth** (5 CSS namespaces + 3 JS inline objects)
8. **No CLAUDE.md** within the directory

As a result, all `source`, `built_on`, `cited`, and `mandatory_for` fields below reflect the INTERNAL dependency structure of design-system/ only. There is no threading connection to showcase/ or design-extraction/ at the token-value level.

The one implicit connection is the shared font choice (Instrument Serif), which traces to design-extraction/typography-system/ but is UNDOCUMENTED in design-system/.

---

## CSS FILES (10 files)

### tokens.css
- source: UNDOCUMENTED (no provenance markers; appears to be original authorship informed by "Sanrok, Medieval, Nous Research" per README.md but no specific file cited)
- built_on: UNDOCUMENTED (defines ~85 custom properties with no source annotations)
- cited: index.css (imports this), typography.css (uses custom properties), sanrok.css (overrides), medieval.css (overrides), nous.css (overrides), duotone.css (uses radius/transition tokens)
- mandatory_for: ALL CSS files in design-system/ that use base tokens; root source of truth for base theme
- threading_ready: NO
- threading_gaps: source and built_on undocumented; no provenance chain exists

### typography.css
- source: UNDOCUMENTED (Google Fonts imports for Inter, Instrument Serif, Playfair Display, JetBrains Mono; no design-extraction/ reference despite Instrument Serif being a design-extraction decision)
- built_on: tokens.css (custom properties used), UNDOCUMENTED external font research
- cited: index.css (imports this)
- mandatory_for: all typography styling; font imports; code block styling
- threading_ready: NO
- threading_gaps: source undocumented; Instrument Serif provenance missing

### index.css
- source: N/A (aggregation entry point)
- built_on: tokens.css, typography.css, themes/sanrok.css, themes/medieval.css, themes/nous.css, effects/duotone.css (imports all)
- cited: any application consuming the design system
- mandatory_for: main entry point for design system CSS
- threading_ready: NO
- threading_gaps: source N/A but overall provenance chain missing

### effects/duotone.css
- source: UNDOCUMENTED (duotone technique; design-extraction/card-system/css/halftone.css is a plausible predecessor but no reference exists)
- built_on: tokens.css (--radius-xl, --duration-normal, --ease-default)
- cited: index.css (imports this)
- mandatory_for: duotone image effects
- threading_ready: NO
- threading_gaps: source undocumented; hardcoded colors (#FF0000, #1A44B8) bypass token system

### themes/sanrok.css
- source: UNDOCUMENTED (Sanrok brand research; no specific file cited)
- built_on: tokens.css (overrides base custom properties)
- cited: index.css (imports this)
- mandatory_for: Sanrok theme activation ([data-theme="sanrok"])
- threading_ready: NO
- threading_gaps: source undocumented; hardcodes --color-primary-hover: #E00000

### themes/medieval.css
- source: UNDOCUMENTED (medieval design research)
- built_on: tokens.css (overrides base custom properties)
- cited: index.css (imports this)
- mandatory_for: Medieval theme activation ([data-theme="medieval"])
- threading_ready: NO
- threading_gaps: source undocumented

### themes/nous.css
- source: UNDOCUMENTED (Nous brand research)
- built_on: tokens.css (overrides base custom properties)
- cited: index.css (imports this)
- mandatory_for: Nous theme activation ([data-theme="nous"])
- threading_ready: NO
- threading_gaps: source undocumented

### themes/blend-nous-dominant.css
- source: UNDOCUMENTED; design spec is docs/BLENDED-THEME-NOUS-DOMINANT.md (companion document)
- built_on: STANDALONE (does NOT depend on tokens.css; redefines everything with ~90 custom properties)
- cited: none (not imported by index.css; loaded independently)
- mandatory_for: Blend-Nous theme activation ([data-theme="blend-nous"])
- threading_ready: NO
- threading_gaps: source undocumented; standalone token namespace creates parallel system

### themes/blended-sanrok-dominant.css
- source: UNDOCUMENTED; design spec is docs/BLENDED-THEME-SANROK-DOMINANT.md
- built_on: STANDALONE (does NOT depend on tokens.css; redefines everything with --blend-* prefix, ~65 custom properties)
- cited: none (not imported by index.css; loaded independently)
- mandatory_for: Blended theme activation ([data-theme="blended"])
- threading_ready: NO
- threading_gaps: source undocumented; --blend-* namespace diverges from base

### themes/medieval-blend.css
- source: UNDOCUMENTED; design spec is docs/MEDIEVAL-BLEND-SPECIFICATION.md
- built_on: STANDALONE (does NOT depend on tokens.css; redefines everything with --mb-* prefix, ~70 custom properties)
- cited: none (not imported by index.css; loaded independently)
- mandatory_for: Medieval-Blend theme activation ([data-theme="medieval-blend"])
- threading_ready: NO
- threading_gaps: source undocumented; CRITICAL: sets on :root which overrides base tokens globally when loaded; --mb-* namespace is third parallel system

---

## TSX COMPONENTS (16 files)

### Sanrok Components (7 files)

### sanrok/PillNavigation.tsx
- source: UNDOCUMENTED (mirrors sanrok.css .sanrok-pill-nav but no explicit reference)
- built_on: react (useState), framer-motion (motion); BYPASSES CSS tokens entirely (hardcoded Tailwind)
- cited: docs/README.md (documented)
- mandatory_for: animated pill navigation component
- threading_ready: NO
- threading_gaps: source undocumented; hardcodes bg-[#171717], rounded-full (soul-violating)

### sanrok/CTAButton.tsx
- source: UNDOCUMENTED
- built_on: react, framer-motion, lucide-react (5 icons); hardcoded Tailwind
- cited: docs/README.md
- mandatory_for: CTA button with icon support
- threading_ready: NO
- threading_gaps: source undocumented; hardcodes bg-[#FF0000], rounded-full (soul-violating)

### sanrok/HeroTypography.tsx
- source: UNDOCUMENTED (Instrument Serif usage traces to design-extraction but no reference)
- built_on: react; hardcoded font-['Instrument_Serif'], text-[#171717]
- cited: docs/README.md
- mandatory_for: hero typography with responsive sizing
- threading_ready: NO
- threading_gaps: source undocumented; hardcoded values

### sanrok/TeamMemberCard.tsx
- source: UNDOCUMENTED
- built_on: framer-motion; hardcoded bg-[#FF0000], rounded-2xl, inline shadow
- cited: docs/README.md
- mandatory_for: team member card with duotone overlay
- threading_ready: NO
- threading_gaps: source undocumented; hardcodes radius and shadow (soul-violating)

### sanrok/ChatBubble.tsx
- source: UNDOCUMENTED
- built_on: react, lucide-react; hardcoded bg-gray-100, border-[#FF0000], rounded-2xl
- cited: docs/README.md
- mandatory_for: chat bubble with status indicators
- threading_ready: NO
- threading_gaps: source undocumented; hardcodes radius (soul-violating)

### sanrok/InfoColumns.tsx
- source: UNDOCUMENTED
- built_on: react; hardcoded text-[#B0B0B0], text-[#171717]
- cited: docs/README.md
- mandatory_for: info column grid layout
- threading_ready: NO
- threading_gaps: source undocumented; hardcoded colors bypass tokens

### sanrok/BannerStrip.tsx
- source: UNDOCUMENTED
- built_on: react; styled-jsx for marquee keyframes; hardcoded bg-[#FF0000], bg-[#171717]
- cited: docs/README.md
- mandatory_for: scrolling banner strip
- threading_ready: NO
- threading_gaps: source undocumented; hardcoded colors

### Medieval Components (3 files)

### medieval/DecorativeInitialCap.tsx
- source: UNDOCUMENTED (mirrors medieval.css drop cap patterns)
- built_on: react; hardcoded font-['UnifrakturMaguntia'], text-[#1A44B8]
- cited: docs/README.md
- mandatory_for: decorative initial cap with 3 variants
- threading_ready: NO
- threading_gaps: source undocumented; hardcoded values

### medieval/OrnamentalDivider.tsx
- source: UNDOCUMENTED
- built_on: react (pure, no external deps); hardcoded text-[#1A44B8]
- cited: docs/README.md
- mandatory_for: ornamental dividers with 5 ornament variants
- threading_ready: NO
- threading_gaps: source undocumented (note: BEST soul compliance of any component)

### medieval/JustifiedTextBlock.tsx
- source: UNDOCUMENTED
- built_on: react; hardcoded font-['Georgia'], text-[#1A44B8], border-[#1A44B8]
- cited: docs/README.md
- mandatory_for: justified text with column layout
- threading_ready: NO
- threading_gaps: source undocumented; hardcoded values

### Nous Components (3 files)

### nous/RepetitionPattern.tsx
- source: UNDOCUMENTED
- built_on: react; hardcoded font-['Inter_Tight'], text-black
- cited: docs/README.md
- mandatory_for: text repetition pattern effects
- threading_ready: NO
- threading_gaps: source undocumented (note: good soul alignment)

### nous/LogoFrame.tsx
- source: UNDOCUMENTED
- built_on: react; hardcoded border-black, bg-white
- cited: docs/README.md
- mandatory_for: thick-border logo frames
- threading_ready: NO
- threading_gaps: source undocumented (note: mostly soul-compliant, rounded-none default)

### nous/HalftoneImage.tsx
- source: UNDOCUMENTED (design-extraction/card-system/css/halftone.css is plausible predecessor)
- built_on: react (pure); CSS radial-gradient halftone technique
- cited: docs/README.md
- mandatory_for: halftone and crosshatch image effects
- threading_ready: NO
- threading_gaps: source undocumented (note: BEST soul compliance)

### Blend/Showcase Components (3 files)

### blend/BlendedThemeShowcase.tsx
- source: UNDOCUMENTED; companion to docs/BLENDED-THEME-NOUS-DOMINANT.md (shared content)
- built_on: react; inline JS token object (bypasses all CSS token systems)
- cited: docs/README.md
- mandatory_for: Nous-dominant blend showcase page
- threading_ready: NO
- threading_gaps: source undocumented; self-contained token object creates 6th token source

### blended/index.tsx
- source: UNDOCUMENTED
- built_on: react, framer-motion; inline JS token object (primary: '#FF0000', bgPage: '#FBF5EF')
- cited: docs/README.md
- mandatory_for: Sanrok-dominant blend components (BlendedHero, BlendedDivider, BlendedTeamCard, etc.)
- threading_ready: NO
- threading_gaps: source undocumented; inline borderRadius: '1rem', boxShadow (soul-violating); 7th token source

### medieval-blend/MedievalBlendShowcase.tsx
- source: UNDOCUMENTED; companion to docs/MEDIEVAL-BLEND-SPECIFICATION.md
- built_on: framer-motion, react; exports medievalBlendTokens JS object with radius and shadow values
- cited: docs/README.md
- mandatory_for: Medieval-blend showcase page (LARGEST file at 19.8KB)
- threading_ready: NO
- threading_gaps: source undocumented; 8th token source; radius and shadow in JS object (soul-violating)

---

## DOCUMENTATION FILES (4 files)

### docs/README.md
- source: UNDOCUMENTED (authored as design system documentation)
- built_on: all 16 component files, all 10 CSS files
- cited: design-system/CLAUDE.md reference in repo-root CLAUDE.md
- mandatory_for: primary design system documentation
- threading_ready: NO
- threading_gaps: source undocumented; does not document blended themes; does not reference design-extraction

### docs/BLENDED-THEME-NOUS-DOMINANT.md
- source: UNDOCUMENTED
- built_on: Nous, Medieval, Sanrok blend research (70%/15%/15%)
- cited: blend-nous-dominant.css (companion), BlendedThemeShowcase.tsx (shared content)
- mandatory_for: Nous-dominant blend specification
- threading_ready: NO
- threading_gaps: source undocumented

### docs/BLENDED-THEME-SANROK-DOMINANT.md
- source: UNDOCUMENTED
- built_on: Sanrok, Medieval, Nous blend research (80%/12%/8%)
- cited: blended-sanrok-dominant.css (companion)
- mandatory_for: Sanrok-dominant blend specification
- threading_ready: NO
- threading_gaps: source undocumented

### docs/MEDIEVAL-BLEND-SPECIFICATION.md
- source: UNDOCUMENTED
- built_on: Medieval, Sanrok, Nous blend research (60%/25%/15%)
- cited: medieval-blend.css (companion), MedievalBlendShowcase.tsx (shared content)
- mandatory_for: Medieval blend specification (most detailed spec)
- threading_ready: NO
- threading_gaps: source undocumented

---

## Threading Readiness Summary (design-system/)

| Category | Total | Ready | Not Ready | % Ready |
|----------|-------|-------|-----------|---------|
| CSS files (core) | 3 | 0 | 3 | 0% |
| CSS files (themes, 3 base) | 3 | 0 | 3 | 0% |
| CSS files (themes, 3 blend) | 3 | 0 | 3 | 0% |
| CSS files (effects) | 1 | 0 | 1 | 0% |
| TSX components (sanrok) | 7 | 0 | 7 | 0% |
| TSX components (medieval) | 3 | 0 | 3 | 0% |
| TSX components (nous) | 3 | 0 | 3 | 0% |
| TSX components (blend) | 3 | 0 | 3 | 0% |
| Documentation | 4 | 0 | 4 | 0% |
| **TOTAL** | **30** | **0** | **30** | **0%** |

**Every file in design-system/ has threading_ready: NO.**

The primary blocker is the complete absence of provenance documentation. No file in this directory has:
- A `source` annotation pointing to the decision or research that produced it
- A `built_on` reference to specific finding IDs or upstream files
- Formal `cited` connections to downstream consumers (only README.md documentation references exist)
- Token values that align with the showcase/design-extraction soul-locked values

This directory represents a separate, earlier extraction effort that was never integrated into the provenance chain.

---

## Token Divergence Summary

| Token | design-system/ (tokens.css) | showcase/design-extraction (T1 locked) | Status |
|-------|----------------------------|---------------------------------------|--------|
| Primary red | #FF0000 | #E83025 | DIVERGENT |
| Background | #FBF5EF | #FEF9F5 | DIVERGENT |
| Text color | #171717 | #1A1A1A | DIVERGENT |
| Font display | 'Instrument Serif', 'Playfair Display', Georgia, serif | 'Instrument Serif', Georgia, serif | DIVERGENT (extra fallback) |
| text-xs | 0.625rem (10px) | 0.75rem (12px) | DIVERGENT |
| text-lg | 1.333rem (21px) | 1.125rem (18px) | DIVERGENT |
| border-radius | 0.25rem - 9999px (7 values) | 0 (locked) | CRITICAL DIVERGENCE |
| box-shadow | 6 non-none values | none (locked) | CRITICAL DIVERGENCE |
| border color | rgba(0,0,0,0.08) | #E0D5C5 (solid) | DIVERGENT |
