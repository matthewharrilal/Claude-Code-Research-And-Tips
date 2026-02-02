# Design System

A comprehensive design system extracted from three reference designs:
- **Sanrok** (Primary) - Creative agency aesthetic
- **Medieval** (Alternate) - Royal manuscript style
- **Nous Research** (Alternate) - Maximum contrast research aesthetic

## Quick Start

```tsx
// Import all styles
import 'design-system/src/styles/index.css';

// Import specific theme
import 'design-system/src/styles/themes/sanrok.css';

// Import components
import { HeroTypography, TeamMemberCard, CTAButton } from 'design-system/src/components/sanrok';
```

---

## Architecture

```
design-system/
├── docs/
│   └── README.md           # You are here
├── src/
│   ├── styles/
│   │   ├── tokens.css      # CSS custom properties (colors, spacing, typography)
│   │   ├── typography.css  # Type system with font imports
│   │   ├── index.css       # Main entry point
│   │   ├── themes/
│   │   │   ├── sanrok.css    # Sanrok-specific styles
│   │   │   ├── medieval.css  # Medieval-specific styles
│   │   │   └── nous.css      # Nous-specific styles
│   │   └── effects/
│   │       └── duotone.css   # Duotone image treatments
│   └── components/
│       ├── sanrok/         # Primary theme components (7)
│       ├── medieval/       # Medieval theme components (3)
│       ├── nous/           # Nous theme components (3)
│       └── index.ts        # Component exports
```

---

## Design Tokens

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | Instrument Serif | Hero text, display headings |
| `--font-body` | Inter | Body text, UI elements |
| `--font-mono` | JetBrains Mono | Code blocks |
| `--font-blackletter` | UnifrakturMaguntia | Medieval theme display |

### Type Scale (1.333 Perfect Fourth)

| Token | Size | Typical Use |
|-------|------|-------------|
| `--text-hero` | clamp(80px, 15vw, 220px) | Viewport-filling headlines |
| `--text-4xl` | 67px | H1 |
| `--text-3xl` | 50px | H2 |
| `--text-2xl` | 38px | H3 |
| `--text-xl` | 28px | H4 |
| `--text-lg` | 21px | Lead text |
| `--text-base` | 16px | Body |
| `--text-sm` | 14px | Small text |
| `--text-xs` | 10px | Metadata |

### Colors by Theme

#### Sanrok (Default)
| Token | Value | Preview |
|-------|-------|---------|
| `--sanrok-red` | `#FF0000` | Pure red |
| `--sanrok-cream` | `#FBF5EF` | Warm cream background |
| `--sanrok-white` | `#FFFFFF` | Card backgrounds |
| `--sanrok-black` | `#171717` | Text |
| `--sanrok-gray-muted` | `#B0B0B0` | Muted text |

#### Medieval
| Token | Value | Preview |
|-------|-------|---------|
| `--medieval-blue` | `#1A44B8` | Royal blue |
| `--medieval-white` | `#FFFFFF` | Background |

#### Nous
| Token | Value | Preview |
|-------|-------|---------|
| `--nous-black` | `#000000` | Maximum contrast black |
| `--nous-white` | `#FFFFFF` | Maximum contrast white |

---

## Components

### Sanrok Theme (Primary)

#### `PillNavigation`
Floating pill-shaped navigation bar with animated active state.

```tsx
import { PillNavigation } from 'design-system/src/components/sanrok';

<PillNavigation
  items={[
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]}
  activeItem="home"
  onChange={(id) => console.log(id)}
  variant="floating"
/>
```

#### `HeroTypography`
Viewport-filling display text with mixed italic/regular support.

```tsx
import { HeroTypography, HeroSpan } from 'design-system/src/components/sanrok';

<HeroTypography size="lg">
  <HeroSpan italic>Creative</HeroSpan>{' '}
  <HeroSpan>Agency</HeroSpan>
</HeroTypography>
```

#### `ChatBubble`
Message bubbles with avatar and status indicators.

```tsx
import { ChatBubble, ChatContainer } from 'design-system/src/components/sanrok';

<ChatContainer>
  <ChatBubble
    message="Hello!"
    sender="User"
    variant="user"
    status="delivered"
  />
  <ChatBubble
    message="Hi there! How can I help?"
    sender="Assistant"
    variant="assistant"
  />
</ChatContainer>
```

#### `TeamMemberCard`
Team member cards with duotone photo treatment.

```tsx
import { TeamMemberCard, TeamGrid } from 'design-system/src/components/sanrok';

<TeamGrid columns={4}>
  <TeamMemberCard
    name="Alex Chen"
    role="Lead Designer"
    avatar="/avatars/alex.jpg"
    rank={1}
    duotone={true}
  />
</TeamGrid>
```

#### `CTAButton`
Call-to-action buttons with multiple variants.

```tsx
import { CTAButton } from 'design-system/src/components/sanrok';

<CTAButton icon="calendar" variant="filled" size="md">
  Book a Call
</CTAButton>
```

#### `BannerStrip`
Full-width announcement banners with optional marquee.

```tsx
import { BannerStrip } from 'design-system/src/components/sanrok';

<BannerStrip background="red" scrolling speed="normal">
  Now accepting new clients · Book your consultation today
</BannerStrip>
```

#### `InfoColumns`
Multi-column information layout with dividers.

```tsx
import { InfoColumns } from 'design-system/src/components/sanrok';

<InfoColumns
  columns={[
    { label: 'Founded', value: '2019' },
    { label: 'Team Size', value: '45+' },
    { label: 'Projects', value: '200+' },
  ]}
  dividers={true}
/>
```

### Medieval Theme (Alternate)

#### `DecorativeInitialCap`
Drop cap letters in Blackletter style.

```tsx
import { DecorativeInitialCap, InitialCapParagraph } from 'design-system/src/components/medieval';

<InitialCapParagraph variant="framed">
  In the beginning, there was the word...
</InitialCapParagraph>
```

#### `OrnamentalDivider`
Section dividers with medieval ornaments.

```tsx
import { OrnamentalDivider } from 'design-system/src/components/medieval';

<OrnamentalDivider variant="candelabra" />
<OrnamentalDivider variant="flourish" />
<OrnamentalDivider variant="cross" />
```

#### `JustifiedTextBlock`
Fully justified text blocks with hyphenation.

```tsx
import { JustifiedTextBlock, MedievalSection } from 'design-system/src/components/medieval';

<MedievalSection title="Chapter One">
  <JustifiedTextBlock columns={2} hyphenate>
    Long form text that flows across columns...
  </JustifiedTextBlock>
</MedievalSection>
```

### Nous Theme (Alternate)

#### `RepetitionPattern`
Text repeated as background texture.

```tsx
import { RepetitionPattern } from 'design-system/src/components/nous';

<RepetitionPattern text="RESEARCH" repetitions={8} opacity={0.08}>
  <h1>Your Content Here</h1>
</RepetitionPattern>
```

#### `LogoFrame`
Thick-bordered containers for key content.

```tsx
import { LogoFrame, InvertedFrame } from 'design-system/src/components/nous';

<LogoFrame borderWidth={8} variant="double">
  <span className="text-3xl font-black">NOUS</span>
</LogoFrame>
```

#### `HalftoneImage`
Retro halftone dot effect for images.

```tsx
import { HalftoneImage } from 'design-system/src/components/nous';

<HalftoneImage
  src="/photo.jpg"
  alt="Description"
  dotSize="md"
  contrast={1.5}
/>
```

---

## Effects

### Duotone Images

Apply color overlays to images for the Sanrok style.

```html
<!-- CSS Classes -->
<div class="duotone duotone--sanrok">
  <img src="photo.jpg" alt="..." />
</div>

<!-- Variants -->
<div class="duotone duotone--medieval">...</div>
<div class="duotone duotone--nous">...</div>
<div class="duotone duotone--hover-reveal">...</div>
```

---

## Theme Switching

Use `data-theme` attribute to switch between themes:

```html
<body data-theme="sanrok">
  <!-- Content uses Sanrok colors -->
</body>

<body data-theme="medieval">
  <!-- Content uses Medieval colors -->
</body>

<body data-theme="nous">
  <!-- Content uses Nous colors -->
</body>
```

Or use CSS classes:

```html
<section class="theme-sanrok">...</section>
<section class="theme-medieval">...</section>
<section class="theme-nous">...</section>
```

---

## Source Verification

Design tokens were verified using Playwright MCP inspection of live sites:

| Token | Source | Verification |
|-------|--------|--------------|
| Instrument Serif font | sanrok.com | DevTools computed styles |
| Hero 221px size | sanrok.com | Element inspection |
| `#FF0000` red | sanrok.com | Color picker |
| `#FBF5EF` cream | sanrok.com | Background inspection |
| `#1A44B8` blue | Reference image | Color sampling |
| Typography scale | sanrok.com | Multiple element measurements |

---

## POC Demo

View the live POC at:
```
http://localhost:3000/poc/design-system
```

Features:
- Theme switcher (Sanrok/Medieval/Nous)
- Hero sections for each theme
- Color palette display
- Typography scale
- Team cards with duotone
- Chat interface (Sanrok)
- Medieval elements (drop caps, dividers, columns)
- Nous elements (repetition, frames, grid)
