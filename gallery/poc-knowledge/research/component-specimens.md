# Beautiful UI Component Specimens

Research compiled: 2026-01-25
Sources: shadcn/ui, Magic UI, Aceternity UI, HeroUI, hover.dev, Radix UI

---

## 1. CODE BLOCKS

### Code Block: Magic UI Dark Theme
**URL:** https://magicui.design/docs
**Library/Source:** Magic UI (Tailwind-based)

**Visual Details:**
- Background: `var(--color-code)` (dark, typically #1a1a1a or similar)
- Padding: 1rem internal, 1.5rem when title present
- Border: 1px solid `var(--border)` (subtle gray)
- Border radius: `var(--radius-lg)` (~12px)
- Font: Monospace, ~14px

**Interaction:**
- Copy button: Positioned absolute top-right
- Line highlight: Background color shift on hover/active lines
- Line numbers: Right-aligned, muted color

**What Elevates It:**
Clean dark aesthetic with subtle borders; copy button appears only when title bar exists, reducing visual noise.

**Copy-Paste Adaptation:**
```css
.code-block {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1rem;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  font-size: 14px;
  position: relative;
  overflow-x: auto;
}
```

---

### Code Block: HeroUI Config Style
**URL:** https://heroui.com
**Library/Source:** HeroUI (React/Tailwind)

**Visual Details:**
- Background: Dark with syntax highlighting
- Theme customization preview (shows nested color objects)
- Monospace typography with clear hierarchy
- Copy-to-clipboard as standard feature

**Interaction:**
- Hover: Subtle background lightening
- Copy: Built-in clipboard functionality

**What Elevates It:**
Shows real configuration code, making it contextual and immediately useful.

**Copy-Paste Adaptation:**
Use for showing configuration examples with nested objects; pair with language-specific syntax highlighting.

---

### Code Block: Aceternity Gradient Container
**URL:** https://ui.aceternity.com
**Library/Source:** Aceternity UI

**Visual Details:**
- Container: Gradient background (`from-purple-700 to-violet-900`)
- Corners: `rounded-2xl` (16px)
- Padding: `p-10` (40px)
- Text: Bold white, responsive (`text-xl md:text-4xl`)
- 3D perspective: `[perspective:1000px]`

**Interaction:**
- Tabs within code blocks animate on selection
- Content crossfade between states

**What Elevates It:**
Dramatic gradient backgrounds make code feel premium; 3D perspective adds depth.

**Copy-Paste Adaptation:**
```css
.code-container-dramatic {
  background: linear-gradient(to bottom right, #7c3aed, #5b21b6);
  border-radius: 16px;
  padding: 40px;
  perspective: 1000px;
}
```

---

## 2. TAB COMPONENTS

### Tabs: shadcn/ui Line Variant
**URL:** https://ui.shadcn.com/docs/components/tabs
**Library/Source:** shadcn/ui (Radix primitives)

**Visual Details:**
- Default width: `w-[400px]`
- Line variant: Underline indicator instead of background
- Vertical orientation option available
- Disabled states supported per-trigger

**Interaction:**
- Hover: Subtle opacity change on inactive tabs
- Active: Underline slides to selected tab
- Transition: 150ms ease-out

**What Elevates It:**
Clean, minimal; the line variant is perfect for content-heavy interfaces where tabs shouldn't dominate.

**Copy-Paste Adaptation:**
```css
.tabs-line .tab-trigger {
  border-bottom: 2px solid transparent;
  padding-bottom: 0.5rem;
  transition: border-color 150ms ease-out;
}
.tabs-line .tab-trigger[data-state="active"] {
  border-bottom-color: #2a7d7d;
}
```

---

### Tabs: Aceternity Animated Tabs
**URL:** https://ui.aceternity.com/components/tabs
**Library/Source:** Aceternity UI (Framer Motion)

**Visual Details:**
- Container: Overflow-hidden with rounded corners
- Height: Responsive (`h-[20rem]` mobile, `md:h-[40rem]` desktop)
- Background: Gradient (`from-purple-700 to-violet-900`)
- Text: Bold white, large scale

**Interaction:**
- Click triggers background animation
- Content panels crossfade smoothly
- 3D perspective applied to container

**What Elevates It:**
The background animation on tab switch creates a premium feel; great for landing pages.

**Copy-Paste Adaptation:**
Best for hero sections where tabs showcase features. Use Framer Motion for the background animation.

---

### Tabs: Radix UI Themed Tabs
**URL:** https://www.radix-ui.com/themes/docs/components/tabs
**Library/Source:** Radix Themes

**Visual Details:**
- Sizes: "1" (compact) and "2" (default)
- Colors: Multiple options (indigo, cyan, orange, crimson)
- Layout: `wrap`, `justify` props for flexible arrangement
- High contrast mode available

**Interaction:**
- Clean focus states
- Smooth color transitions

**What Elevates It:**
Built-in theming system with high-contrast accessibility option.

**Copy-Paste Adaptation:**
Use color prop system for Gallery theme switcher if implementing multiple color schemes.

---

### Tabs: hover.dev Slide Tabs
**URL:** https://www.hover.dev/components/tabs
**Library/Source:** hover.dev (React/Framer)

**Visual Details:**
- Navigation items: Home, Pricing, Features, Docs, Blog
- Sliding background indicator between tabs
- Chip-style variant also available

**Interaction:**
- Background slides smoothly to hovered/selected tab
- Spring physics animation

**What Elevates It:**
The sliding background indicator follows the cursor, creating fluid interaction.

**Copy-Paste Adaptation:**
Requires Framer Motion's layoutId for the sliding indicator animation.

---

## 3. CARDS

### Card: Aceternity Card Hover Effect
**URL:** https://ui.aceternity.com/components/card-hover-effect
**Library/Source:** Aceternity UI (Framer Motion)

**Visual Details:**
- Grid layout for multiple cards
- Each card: title + description
- Cards function as clickable links

**Interaction:**
- Hover: Effect "slides" to currently hovered card
- Transition: duration 0.2s
- Unified animation across entire card collection

**What Elevates It:**
The sliding visual effect moves BETWEEN cards rather than just appearing on hover - creates cohesive, flowing interaction.

**Copy-Paste Adaptation:**
Requires Framer Motion with shared layoutId across card group for the sliding spotlight effect.

---

### Card: Aceternity Bento Grid
**URL:** https://ui.aceternity.com/components/bento-grid
**Library/Source:** Aceternity UI

**Visual Details:**
- Corners: `rounded-xl` (12px)
- Borders: `border-neutral-100`, `dark:border-white/[0.2]`
- Backgrounds: Gradients (`from-neutral-200 to-neutral-100`)
- Dot pattern overlays: `bg-dot-white/[0.2]`
- Spans: `md:col-span-2` for wider items

**Interaction:**
- Hover: Motion variants with translations (`x: 10`) and rotations (`rotate: 5`)
- Transition: duration 0.2s

**What Elevates It:**
Skewed grid layout with subtle dot patterns; hover animations add playfulness without overwhelming.

**Copy-Paste Adaptation:**
```css
.bento-item {
  background: linear-gradient(to bottom right, #e5e5e5, #f5f5f5);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease-out;
}
.bento-item:hover {
  transform: translateX(10px) rotate(2deg);
}
```

---

### Card: hover.dev Hover Tilt Card
**URL:** https://www.hover.dev/components/cards
**Library/Source:** hover.dev (Framer Motion)

**Visual Details:**
- 3D tilt effect on mouse position
- "HOVER ME" interactive prompt
- Clean container styling

**Interaction:**
- Mouse tracking: Card tilts toward cursor
- 3D transform: perspective + rotateX/Y
- Smooth return to neutral on mouse leave

**What Elevates It:**
Creates tactile, physical feeling - card responds to your exact cursor position.

**Copy-Paste Adaptation:**
Requires JS mouse tracking + CSS 3D transforms. Set perspective on parent, rotateX/Y on card based on mouse position.

---

### Card: hover.dev Squishy Card
**URL:** https://www.hover.dev/components/cards
**Library/Source:** hover.dev (Framer Motion)

**Visual Details:**
- Deformable card with squish animation
- Click triggers squish effect

**Interaction:**
- Click/touch: Card "squishes" with scale transform
- Spring physics for bounce-back

**What Elevates It:**
Playful, tactile interaction perfect for less formal interfaces.

**Copy-Paste Adaptation:**
Use Framer Motion spring with stiffness ~200, damping ~10 for natural squish feel.

---

## 4. BADGES/TAGS

### Badge: shadcn/ui Variants
**URL:** https://ui.shadcn.com/docs/components/badge
**Library/Source:** shadcn/ui

**Visual Details:**
- Variants: default, secondary, destructive, outline, ghost
- Border radius: Rounded (typically 6-8px)
- Padding: Compact internal spacing
- Icon support: `data-icon="inline-start"` or `"inline-end"`

**Interaction:**
- Spinner integration for loading states
- asChild prop for link rendering

**What Elevates It:**
Five distinct variants cover most use cases; icon positioning via data attributes is clever.

**Copy-Paste Adaptation:**
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}
.badge-default { background: #2a7d7d; color: white; }
.badge-secondary { background: #f0ebe3; color: #5c4b3a; }
.badge-outline { border: 1px solid currentColor; background: transparent; }
.badge-ghost { background: transparent; }
```

---

### Badge: HeroUI Discount Badge
**URL:** https://heroui.com
**Library/Source:** HeroUI

**Visual Details:**
- Color: Orange/amber ("20% off")
- Pill shape
- Size tags: Neutral styling (XS, S, M, L, XL)
- Gradient text effects available (pink-to-orange, pink-to-purple)

**Interaction:**
- Static display (informational)

**What Elevates It:**
Context-appropriate coloring - orange for discounts creates urgency without being aggressive.

**Copy-Paste Adaptation:**
```css
.badge-discount {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}
```

---

### Badge: Magic UI Gradient Badges
**URL:** https://magicui.design
**Library/Source:** Magic UI

**Visual Details:**
- Color schemes: purple, orange, pink, blue gradients
- Monospace font support
- Solid colors or gradient backgrounds

**Interaction:**
- Static or with shimmer animation option

**What Elevates It:**
Gradient options add visual interest for maturity indicators or status badges.

**Copy-Paste Adaptation:**
```css
.badge-gradient-purple {
  background: linear-gradient(135deg, #a78bfa, #8b5cf6);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}
.badge-gradient-seedling {
  background: linear-gradient(135deg, #6ee7b7, #34d399);
  color: #064e3b;
}
```

---

## 5. COPY BUTTONS

### Copy Button: Magic UI Icon Morph
**URL:** https://magicui.design
**Library/Source:** Magic UI

**Visual Details:**
- Icon: Copy icon → Check icon on success
- Position: Absolute, top-right of code block
- Background: Semi-transparent or solid

**Interaction:**
- Click: Icon morphs from clipboard to checkmark
- Feedback: Green color shift on success
- Reset: Returns to copy icon after ~2 seconds

**What Elevates It:**
Icon morph provides clear visual feedback without tooltip clutter.

**Copy-Paste Adaptation:**
```css
.copy-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(42, 125, 125, 0.8);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 150ms ease-out;
}
.copy-btn:hover { background: rgba(42, 125, 125, 1); }
.copy-btn.copied { background: #6b9b7a; }
```

---

### Copy Button: hover.dev Spotlight Button Pattern
**URL:** https://www.hover.dev/components/buttons
**Library/Source:** hover.dev

**Visual Details:**
- Spotlight effect follows cursor on hover
- Subtle glow emanates from button

**Interaction:**
- Hover: Spotlight follows mouse position
- Click: Confirm animation

**What Elevates It:**
The spotlight effect makes the button feel alive and responsive to user attention.

**Copy-Paste Adaptation:**
Requires JS mouse tracking. Create radial gradient at cursor position within button bounds.

---

### Copy Button: Neumorphism Style
**URL:** https://www.hover.dev/components/buttons
**Library/Source:** hover.dev

**Visual Details:**
- Soft, embossed appearance
- Light shadows create depth
- Pressed state inverts shadow direction

**Interaction:**
- Hover: Subtle shadow intensification
- Click: Shadow inverts (pressed appearance)

**What Elevates It:**
Tactile, physical feel - buttons feel like real objects you can press.

**Copy-Paste Adaptation:**
```css
.btn-neu {
  background: #f0ebe3;
  border-radius: 12px;
  box-shadow:
    8px 8px 16px rgba(0,0,0,0.1),
    -8px -8px 16px rgba(255,255,255,0.8);
  transition: box-shadow 150ms ease-out;
}
.btn-neu:active {
  box-shadow:
    inset 4px 4px 8px rgba(0,0,0,0.1),
    inset -4px -4px 8px rgba(255,255,255,0.8);
}
```

---

## 6. SPECIAL ANIMATIONS (BONUS)

### Animation: Magic UI Shimmer Slide
**URL:** https://magicui.design
**Library/Source:** Magic UI

**Visual Details:**
- Animation: `shimmer-slide` with variable speed
- Timing: `ease-in-out infinite alternate`
- Creates sweeping light effect across surface

**Interaction:**
- Continuous animation (no user trigger)
- Alternating direction for natural feel

**What Elevates It:**
Subtle shimmer adds premium feel without being distracting.

**Copy-Paste Adaptation:**
```css
@keyframes shimmer-slide {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255,255,255,0.3) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer-slide 2s ease-in-out infinite;
}
```

---

### Animation: Magic UI Animated Gradient Text
**URL:** https://magicui.design/docs/components/animated-gradient-text
**Library/Source:** Magic UI

**Visual Details:**
- Duration: 8 seconds, infinite loop
- Gradient: `#A97CF8` (purple) → `#F38CB8` (pink) → `#FDCC92` (gold)
- Alternative: `#ff2975` (pink) → `#9c40ff` (purple) → `#00FFF1` (cyan)
- Direction: horizontal (`bg-gradient-to-r`)

**Interaction:**
- Continuous flowing animation
- No user trigger required

**What Elevates It:**
Premium hero text effect; the 8-second cycle is slow enough to not be distracting.

**Copy-Paste Adaptation:**
```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.gradient-text {
  background: linear-gradient(90deg, #A97CF8, #F38CB8, #FDCC92, #A97CF8);
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-shift 8s ease infinite;
}
```

---

### Animation: Aceternity Animated Tooltip
**URL:** https://ui.aceternity.com/components/animated-tooltip
**Library/Source:** Aceternity UI (Framer Motion)

**Visual Details:**
- Tooltip follows mouse pointer
- Shows name + designation on hover
- Avatar images in horizontal flex layout

**Interaction:**
- Hover: Tooltip reveals and tracks cursor
- Smooth entrance/exit animations

**What Elevates It:**
Mouse-following tooltip feels more responsive than static positioned tooltips.

**Copy-Paste Adaptation:**
Requires Framer Motion's `motion.div` with `animate` prop tracking mouse coordinates relative to element.

---

## BEST OF EACH TYPE - RECOMMENDATIONS

| Category | Best Pick | Why |
|----------|-----------|-----|
| **Code Block** | Magic UI Dark Theme | Clean, professional, non-intrusive copy button |
| **Tabs** | shadcn Line Variant | Minimal, content-first, works everywhere |
| **Card** | Aceternity Card Hover Effect | The sliding spotlight creates cohesive interaction |
| **Badge** | shadcn Variants | Five variants cover all use cases, icon support |
| **Copy Button** | Magic UI Icon Morph | Clear feedback without tooltip noise |
| **Hero Animation** | Animated Gradient Text | Premium feel, 8s cycle isn't distracting |

---

## GALLERY-SPECIFIC ADAPTATIONS

### Recommended Code Block for Gallery
```css
.gallery-code-block {
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1rem 1rem 1rem 3rem;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  font-size: 14px;
  line-height: 1.6;
  overflow-x: auto;
  position: relative;
}
.gallery-code-block .copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #2a7d7d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 150ms ease-out;
}
.gallery-code-block:hover .copy-btn {
  opacity: 1;
}
.gallery-code-block .copy-btn.copied {
  background: #6b9b7a;
}
```

### Recommended Badge System for Maturity Indicators
```css
.maturity-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
}
.maturity-seedling {
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  color: #065f46;
}
.maturity-growing {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #92400e;
}
.maturity-mature {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  color: #1e40af;
}
.maturity-proven {
  background: linear-gradient(135deg, #ede9fe, #ddd6fe);
  color: #5b21b6;
}
```

### Recommended Tab System for Gallery Navigation
```css
.gallery-tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #e0d5c5;
  padding-bottom: 0;
}
.gallery-tab {
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: #5c4b3a;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms ease-out;
  margin-bottom: -1px;
}
.gallery-tab:hover {
  color: #2a7d7d;
}
.gallery-tab[data-state="active"] {
  color: #2a7d7d;
  border-bottom-color: #2a7d7d;
}
```

---

## CSS TIMING REFERENCE

From Tailwind CSS documentation:

| Class | Cubic Bezier |
|-------|-------------|
| `ease-linear` | `linear` |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |

**Recommended for Gallery:** `ease-out` or `ease-in-out` with 150-200ms duration for most interactions.
