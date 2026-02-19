# SKELETON BUILDER PROMPT (75-line cap)

## CONVICTION (you are building beauty)

You are building a warm, authoritative, unhurried page. Beauty = confident intention at every scale.
Personality: Warm. Authoritative. Unhurried.
The page explains how 337 research findings became 5 design principles.
Its form DEMONSTRATES the principles it describes.

## B1. SPATIAL RULES (17 rules -- all binary PASS/FAIL)

S-01. Container width: 940-1100px (960px default). Use max-width on .page-container.
S-02. Content-to-void ratio >= 60% (skeleton stage: 50%).
S-03. Header <= 20% of first viewport (288px at 1440px). Kill at 25% (360px).
S-04. Footer MUST exist with visible content. Gap <= 1 viewport from last content.
S-05. All planned sections present, each >= 200px rendered content height.
S-06. >= 5 content sections.
S-07. CPL (characters per line): 45-80. Formula: content-width-px / font-size-px / 0.6.
S-08. Heading spacing ratio >= 1.5:1 (margin-above / font-size).
S-09. Max spacing between any two elements: 96px per-property. Total visual gap <= 96px.
S-10. No contiguous void > 1620px (skeleton) / 2160px (final).
S-11. No single CSS margin or padding value > 96px (var(--space-max-zone)).
S-12. No viewport position with < 30% content. 2+ consecutive below 30% = FAIL.
S-13. >= 1 designed moment past 50% scroll depth (section with 3+ visual treatments).
S-14. Content-to-void: 50% at skeleton stage, 70% post-mechanism.
S-15. Zone count by words: <1500w=2, 1500-3000w=3, 3000-5000w=4, 5000+=5.
S-16. SCI (Scale Confidence Index) >= 0.60 for flagship.
S-17. First 1.5 viewports: >= 3 distinct visual textures (border, background, type, spacing, density).

## B2. SOUL RULES (10 rules -- NON-NEGOTIABLE identity)

U-01. border-radius: 0 on EVERY element.
U-02. box-shadow: none on EVERY element.
U-03. No filter: drop-shadow().
U-04. No rgba() or opacity < 1 on backgrounds (exception: progressive depth tinting per DD-006).
U-05. No linear-gradient, radial-gradient, conic-gradient.
U-06. No #000000 or #FFFFFF. Use --color-text (#1A1A1A) and --color-background (#FEF9F5).
U-07. Instrument Serif: display headings ONLY, never body text.
U-08. No cool-toned grays. All neutrals warm-shifted.
U-09. Typography: Instrument Serif / Inter / JetBrains Mono ONLY.
U-10. Soul enforcement: add * { border-radius: 0 } to CSS.

## KEY TOKENS (from tokens.css -- use var() for ALL values)

Colors: --color-primary #E83025, --color-background #FEF9F5, --color-text #1A1A1A
Fonts: --font-display (Instrument Serif), --font-body (Inter), --font-mono (JetBrains Mono)
Spacing: --space-4 (16px), --space-8 (32px), --space-12 (48px), --space-16 (64px), --space-24 (96px max)
Zones: --color-zone-sparse (#FEF9F5), --color-zone-dense (#FFFFFF), --color-zone-breathing (#FAF5ED)
Bedrock: --color-text (#1A1A1A) for dark sections.
Borders: 4px structural, 3px accent, 1px micro.

## SELF-CHECK (run before writing file)

[ ] Container 940-1100px (getBoundingClientRect at 1440px viewport)
[ ] CPL 45-80
[ ] Content-to-void >= 50% (skeleton stage)
[ ] No viewport < 30% content coverage
[ ] Soul 10/10 (all U-rules above)
[ ] Header < 288px + footer present
[ ] All sections present, each >= 200px content
[ ] No margin/padding > 96px, no visual gap > 96px
[ ] Visual scroll-through: scrolled full page, no dead zones

## CONVICTION CLOSING

The mission is beauty, not compliance. Rules are guardrails, not the destination.
The KortAI soul closes 55-65% of CSS. This is the ENGINE of richness.
Every surviving CSS decision carries 4-5x normal semantic weight.
Build with confidence. Content DEMANDED the structure. Zero forced components.
STOP ANALYZING. START BUILDING.
