# Conventions Brief

## Container
- Width: 940-960px
- Self-contained HTML: all CSS embedded, no external dependencies

## Typography
- Display/headings: `'Instrument Serif', Georgia, serif`
- Body: `'Inter', system-ui, sans-serif`
- Code: `'JetBrains Mono', 'SF Mono', monospace`
- Scale: 48px display, 40px h1, 32px h2, 24px h3, 20px h4, 18px lg body, 16px body, 14px small, 12px caption
- Weights: 400 (regular), 500 (medium); 600+ is a rare event
- h3 headings: italic
- Characters per line: 45-80

## Color
- Background: #FEF9F5, Text: #1A1A1A, Text secondary: #666666, Border: #E0D5C5
- Primary accent: #E83025
- Semantic accents: #4A90D9 (info), #4A9D6B (tip), #C97065 (gotcha), #D97706 (synthesis), #7C3AED (challenge)
- Background constraint: R >= G >= B on every background hex
- No pure black (#000) or pure white (#FFF)
- Common warm backgrounds (all satisfy R >= G >= B): #FEF9F5 (cream), #F5F0EB (warm gray), #EDE5DB (parchment), #1A1A1A (near-black)

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Grid gap: 24px

## Borders
- Weights: 4px (primary accent), 3px (section), 1px (subtle). No 2px.
- No vertical borders in tables

## Perceptibility Thresholds
- Adjacent zone backgrounds: >= 15 RGB max-channel delta
- Letter-spacing: >= 0.025em (below is sub-perceptual)
- Stacked gap at any boundary: <= 120px total
- Single margin or padding: <= 96px

## Accessibility + Responsive
- WCAG 2.1 AA contrast: >= 4.5:1 body, >= 3:1 large text
- ARIA landmarks: header, main, footer (minimum)
- Responsive breakpoint: 768px minimum

## Prohibited CSS
- border-radius > 0, box-shadow, filter: drop-shadow()
- linear-gradient, radial-gradient, opacity < 1 on visual elements
- transform (translateY, scale, rotate, etc.), transition (except opacity fades)
