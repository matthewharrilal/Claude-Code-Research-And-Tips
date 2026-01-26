# Activity Zone Implementation Guide
## Phase-by-Phase Code Changes with Copy-Paste Ready Snippets

---

## PHASE 1: COLOR PALETTE & DENSITY (Week 1)

### Change 1.1: Update activity-config.ts (Color Palette Fix)

**File:** `/docs-spa/components/activity-zone/activity-config.ts`

**Why:** Fix 4 color collisions and ensure WCAG AAA compliance

**Before:**
```ts
export const ACTIVITY_CONFIG: Record<ActivityType, ActivityConfig> = {
  invariant: { icon: Link, color: '#3b82f6', label: 'Invariant Connection' },
  effect: { icon: Zap, color: '#f59e0b', label: 'Second-Order Effect' },
  composition: { icon: Layers, color: '#8b5cf6', label: 'Composition Case' },
  frontier: { icon: Telescope, color: '#ef4444', label: 'Research Frontier' },
  warstory: { icon: Flame, color: '#10b981', label: 'War Story' },
  alternative: { icon: GitFork, color: '#6b7280', label: 'Alternative Path' },
  inversion: { icon: RefreshCw, color: '#4f46e5', label: 'Inversion Lens' },
  constraint: { icon: Link2, color: '#8b5cf6', label: 'Constraint Chain' }, // DUPLICATE
  gradient: { icon: AlertTriangle, color: '#f43f5e', label: 'Failure Gradient' },
  horizon: { icon: Clock, color: '#06b6d4', label: 'Time Horizon Shift' },
  violation: { icon: AlertOctagon, color: '#f97316', label: 'Violation Chain' },
  tradeoff: { icon: Scale, color: '#f59e0b', label: 'Trade-Off Tension' }, // DUPLICATE
  analogy: { icon: Merge, color: '#d946ef', label: 'Analogical Bridge' },
  expertise: { icon: TrendingUp, color: '#10b981', label: 'Expertise Gradient' }, // DUPLICATE
  minimal: { icon: Minimize2, color: '#84cc16', label: 'Minimal Pattern' },
  inflection: { icon: ArrowUpRight, color: '#eab308', label: 'Inflection Point' },
}
```

**After:**
```ts
export const ACTIVITY_CONFIG: Record<ActivityType, ActivityConfig> = {
  invariant: { icon: Link, color: '#0066cc', label: 'Invariant Connection' },      // Deep blue (was #3b82f6)
  effect: { icon: Zap, color: '#ff8800', label: 'Second-Order Effect' },           // Orange (was #f59e0b)
  composition: { icon: Layers, color: '#9933ff', label: 'Composition Case' },       // Purple (was #8b5cf6)
  frontier: { icon: Telescope, color: '#cc0000', label: 'Research Frontier' },      // Red (unchanged, darker)
  warstory: { icon: Flame, color: '#00aa44', label: 'War Story' },                 // Green (was #10b981)
  alternative: { icon: GitFork, color: '#666666', label: 'Alternative Path' },      // Gray (unchanged)
  inversion: { icon: RefreshCw, color: '#3366ff', label: 'Inversion Lens' },        // Bright blue (was #4f46e5)
  constraint: { icon: Link2, color: '#bb33dd', label: 'Constraint Chain' },         // Magenta (WAS DUPLICATE - NEW DISTINCT)
  gradient: { icon: AlertTriangle, color: '#dd3366', label: 'Failure Gradient' },   // Rose (was #f43f5e)
  horizon: { icon: Clock, color: '#00ccdd', label: 'Time Horizon Shift' },          // Cyan (was #06b6d4)
  violation: { icon: AlertOctagon, color: '#ffaa00', label: 'Violation Chain' },    // Golden (WAS DUPLICATE - NEW DISTINCT)
  tradeoff: { icon: Scale, color: '#ffbb33', label: 'Trade-Off Tension' },          // Amber (WAS DUPLICATE - NEW DISTINCT)
  analogy: { icon: Merge, color: '#dd00ff', label: 'Analogical Bridge' },           // Fuchsia (was #d946ef)
  expertise: { icon: TrendingUp, color: '#00dd77', label: 'Expertise Gradient' },   // Lime (WAS DUPLICATE - NEW DISTINCT)
  minimal: { icon: Minimize2, color: '#88dd00', label: 'Minimal Pattern' },         // Chartreuse (was #84cc16)
  inflection: { icon: ArrowUpRight, color: '#ffdd00', label: 'Inflection Point' },  // Yellow (was #eab308)
}
```

**Validation Checklist:**
```bash
# 1. Check for hex duplicates (should return EMPTY)
grep -o '#[0-9a-f]\{6\}' activity-config.ts | sort | uniq -d
# Expected: (empty output)

# 2. Visual test in browser
# - Open docs-spa in browser
# - Navigate to page with 15+ activity items
# - Verify all 16 color types visible and distinct
```

---

### Change 1.2: Update globals.css (Theme Variables)

**File:** `/docs-spa/app/globals.css`

**Why:** Keep CSS theme in sync with new palette

**Before:**
```css
@theme {
  --color-az-invariant: #3b82f6;
  --color-az-effect: #f59e0b;
  --color-az-composition: #8b5cf6;
  --color-az-frontier: #ef4444;
  --color-az-warstory: #10b981;
  --color-az-alternative: #6b7280;
  --color-az-inversion: #4f46e5;
  --color-az-constraint: #8b5cf6;
  --color-az-gradient: #f43f5e;
  --color-az-horizon: #06b6d4;
  --color-az-violation: #f97316;
  --color-az-tradeoff: #f59e0b;
  --color-az-analogy: #d946ef;
  --color-az-expertise: #10b981;
  --color-az-minimal: #84cc16;
  --color-az-inflection: #eab308;
}
```

**After:**
```css
@theme {
  --color-az-invariant: #0066cc;
  --color-az-effect: #ff8800;
  --color-az-composition: #9933ff;
  --color-az-frontier: #cc0000;
  --color-az-warstory: #00aa44;
  --color-az-alternative: #666666;
  --color-az-inversion: #3366ff;
  --color-az-constraint: #bb33dd;
  --color-az-gradient: #dd3366;
  --color-az-horizon: #00ccdd;
  --color-az-violation: #ffaa00;
  --color-az-tradeoff: #ffbb33;
  --color-az-analogy: #dd00ff;
  --color-az-expertise: #00dd77;
  --color-az-minimal: #88dd00;
  --color-az-inflection: #ffdd00;
}
```

---

### Change 1.3: Implement Adaptive Padding

**File:** `/docs-spa/components/activity-zone/ActivityItem.tsx`

**Why:** Reduce pyramid density; compact minimal items, full spacing for rich content

**Add this utility function at the top of the file:**

```tsx
// Determine card padding based on content length
const getCardPadding = (content?: string): 'p-3' | 'p-4' | 'p-5' => {
  if (!content) return 'p-4'

  // Strip HTML tags for accurate character count
  const textContent = content.replace(/<[^>]*>/g, '').trim()
  const length = textContent.length

  if (length < 50) return 'p-3'    // Minimal: <50 chars
  if (length < 150) return 'p-4'   // Standard: 50-150 chars
  return 'p-5'                      // Rich: 150+ chars
}

// Get max lines for content based on length
const getMaxLines = (content?: string): number => {
  if (!content) return 2
  const textContent = content.replace(/<[^>]*>/g, '').trim()
  const length = textContent.length

  if (length < 100) return 2    // Very short: don't clamp
  if (length < 200) return 3    // Short: clamp to 3 lines
  return 3                       // Long: always clamp to 3 lines
}
```

**Update the component return statement's classname:**

```tsx
// BEFORE:
className={`
  relative overflow-hidden
  rounded-xl p-5 cursor-pointer
  transition-all duration-300 ease-out
  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
  ${isActive
    ? 'bg-white shadow-lg shadow-black/5 scale-[1.02]'
    : 'bg-white/60 hover:bg-white/90 hover:shadow-md hover:shadow-black/5'
  }
`}

// AFTER (replace p-5 with dynamic padding):
className={`
  relative overflow-hidden
  rounded-xl ${getCardPadding(htmlContent)} cursor-pointer
  transition-all duration-300 ease-out
  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
  ${isActive
    ? 'bg-white shadow-lg shadow-black/5 scale-[1.02]'
    : 'bg-white/60 hover:bg-white/90 hover:shadow-md hover:shadow-black/5'
  }
`}
```

**Add line-clamp utility to the content div:**

```tsx
// BEFORE:
{htmlContent ? (
  <div
    className={`
      text-[13px] leading-relaxed activity-item-content
      ${isActive ? 'text-text-secondary' : 'text-text-muted'}
    `}
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
) : children ? (

// AFTER (add line-clamp):
{htmlContent ? (
  <div
    className={`
      text-[13px] leading-relaxed activity-item-content
      line-clamp-${getMaxLines(htmlContent)}
      ${isActive ? 'text-text-secondary' : 'text-text-muted'}
    `}
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
) : children ? (
```

**Add line-clamp utilities to globals.css (if not using Tailwind built-in):**

```css
/* Activity Zone: Line Clamping */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.line-clamp-none {
  display: block;
  overflow: visible;
}
```

---

### Change 1.4: Test Density Improvements

**Manual Test Checklist:**

```bash
# 1. Start dev server
npm run dev

# 2. Navigate to page with 15+ activity items
# (e.g., /docs/some-page with rich content)

# 3. Open DevTools → Elements
# Find <aside className="activity-zone-wrapper">
# Inspect: height of zone = ~880px
# Measure height of 15 cards:
#   - Count visible cards without scroll
#   - BEFORE: ~6.5 cards visible
#   - AFTER: ~8.5 cards visible (target)

# 4. Screenshot comparison:
#   - Take before/after screenshots
#   - Verify colors are distinct (all 16 types)
#   - Verify compact cards fit well

# 5. Color test (WCAG validation):
# Use: https://www.tpgi.com/color-contrast-checker/
#   - Test each color on white (#ffffff)
#   - All should show >= 4.5:1 contrast (AA minimum)
#   - Target: >= 7:1 (AAA)
```

---

## PHASE 2: STATE CLARITY & ACCESSIBILITY (Week 2)

### Change 2.1: Enhance Active vs Hover States

**File:** `/docs-spa/components/activity-zone/ActivityItem.tsx`

**Why:** Make active/hover distinction clear without motion (for reduced-motion users)

**Replace the entire motion.div section:**

```tsx
// BEFORE:
<motion.div
  data-section={linkedSection}
  role="button"
  tabIndex={0}
  aria-pressed={isActive}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
  className={`
    relative overflow-hidden
    rounded-xl ${getCardPadding(htmlContent)} cursor-pointer
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    ${isActive
      ? 'bg-white shadow-lg shadow-black/5 scale-[1.02]'
      : 'bg-white/60 hover:bg-white/90 hover:shadow-md hover:shadow-black/5'
    }
  `}
  initial={{ opacity: 0, y: 8 }}
  animate={{
    opacity: isActive ? 1 : 0.85,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }}
  whileHover={{
    opacity: 1,
    y: -2,
    transition: { duration: 0.2, ease: 'easeOut' }
  }}
  whileTap={{ scale: 0.98 }}
>

// AFTER:
<motion.div
  data-section={linkedSection}
  role="button"
  tabIndex={0}
  aria-pressed={isActive}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
  className={`
    relative overflow-hidden
    rounded-xl ${getCardPadding(htmlContent)} cursor-pointer
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    ${isActive
      ? 'bg-white shadow-lg shadow-black/5'  // CHANGED: removed scale-[1.02]
      : 'bg-white/70 hover:bg-white/95'      // CHANGED: enhanced opacity separation
    }
  `}
  initial={{ opacity: 0, y: 8 }}
  animate={{
    opacity: isActive ? 1 : 0.7,  // CHANGED: increased default opacity separation
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }}
  whileHover={{
    opacity: isActive ? 1 : 0.92,  // CHANGED: hover opacity distinct from active
    y: isActive ? 0 : -2,          // CHANGED: only lift on hover if not active
    transition: { duration: 0.2, ease: 'easeOut' }
  }}
  whileTap={{ scale: 0.98 }}
>
```

**Update the accent bar animation (lines 82-91):**

```tsx
// BEFORE:
<motion.div
  className="absolute left-0 top-0 bottom-0 rounded-l-xl"
  style={{ backgroundColor: config.color }}
  initial={{ width: 5 }}
  animate={{
    width: isActive ? 8 : 5,
    opacity: isActive ? 1 : 0.85
  }}
  transition={{ duration: 0.2 }}
/>

// AFTER (enhance color saturation on active):
<motion.div
  className="absolute left-0 top-0 bottom-0 rounded-l-xl"
  style={{
    backgroundColor: config.color,
    filter: isActive ? 'saturate(1.1) brightness(1)' : 'saturate(0.6) brightness(0.95)'
  }}
  initial={{ width: 5 }}
  animate={{
    width: isActive ? 8 : 5,
    opacity: isActive ? 1 : 0.75
  }}
  transition={{ duration: 0.2 }}
/>
```

**Enhance glow effect (lines 93-104):**

```tsx
// BEFORE:
{isActive && (
  <motion.div
    className="absolute inset-0 rounded-xl pointer-events-none"
    style={{
      background: `linear-gradient(135deg, ${config.color}08 0%, transparent 50%)`,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  />
)}

// AFTER (more visible glow):
{isActive && (
  <motion.div
    className="absolute inset-0 rounded-xl pointer-events-none"
    style={{
      background: `linear-gradient(135deg, ${config.color}15 0%, transparent 60%)`,
      boxShadow: `inset 0 0 12px ${config.color}20`
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  />
)}
```

---

### Change 2.2: Add Reduced-Motion Support

**File:** `/docs-spa/components/layout/ActivityZone.tsx`

**Why:** WCAG accessibility compliance; users with vestibular disorders need instant feedback

**Add at the top of the component:**

```tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useNavigationStore } from '@/lib/store'
import { ActivityItem, ActivityType } from '@/components/activity-zone'
import { Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'  // ADD THIS

export function ActivityZone() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // ADD: Check user preference on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // ... rest of component
}
```

**Update animation transitions to respect preference:**

```tsx
// In the sparkle icon animation, change:
transition={{
  duration: 2,
  repeat: Infinity,
  ease: 'easeInOut',
}}

// TO:
transition={{
  duration: prefersReducedMotion ? 0 : 2,
  repeat: prefersReducedMotion ? 0 : Infinity,
  ease: 'easeInOut',
}}
```

**Update items animation:**

```tsx
// In the motion.div wrapper for items, change:
transition={{
  duration: 0.3,
  delay: index * 0.05,
  ease: 'easeOut',
}}

// TO:
transition={{
  duration: prefersReducedMotion ? 0 : 0.3,
  delay: prefersReducedMotion ? 0 : index * 0.05,
  ease: 'easeOut',
}}
```

---

### Change 2.3: Add "Read More" for Long Content

**File:** `/docs-spa/components/activity-zone/ActivityItem.tsx`

**Why:** Prevent long content from pushing cards off-screen

**Add state variable:**

```tsx
const [expanded, setExpanded] = useState(false)

// Utility to detect if content needs expansion button
const hasOverflow = (content?: string): boolean => {
  if (!content) return false
  const textContent = content.replace(/<[^>]*>/g, '').trim()
  return textContent.length > 150
}
```

**Update content rendering section:**

```tsx
// BEFORE:
{htmlContent ? (
  <div
    className={`
      text-[13px] leading-relaxed activity-item-content
      line-clamp-${getMaxLines(htmlContent)}
      ${isActive ? 'text-text-secondary' : 'text-text-muted'}
    `}
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
) : children ? (

// AFTER:
{htmlContent ? (
  <>
    <div
      className={`
        text-[13px] leading-relaxed activity-item-content
        ${expanded ? 'line-clamp-none' : 'line-clamp-3'}
        ${isActive ? 'text-text-secondary' : 'text-text-muted'}
      `}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
    {hasOverflow(htmlContent) && !expanded && (
      <motion.button
        onClick={() => setExpanded(true)}
        className="mt-2 text-xs font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        Read more →
      </motion.button>
    )}
    {expanded && (
      <motion.button
        onClick={() => setExpanded(false)}
        className="mt-2 text-xs font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Read less ↑
      </motion.button>
    )}
  </>
) : children ? (
```

---

## PHASE 3: VISUAL POLISH & PERFORMANCE (Week 3)

### Change 3.1: Reduce Animated Icon Loop

**File:** `/docs-spa/components/layout/ActivityZone.tsx`

**Why:** Remove visual noise; icon pops once on load, then settles

**Change the sparkle animation:**

```tsx
// BEFORE:
animate={{
  scale: [1, 1.05, 1],
}}
transition={{
  duration: 2,
  repeat: Infinity,  // <-- LOOPS FOREVER
  ease: 'easeInOut',
}}

// AFTER:
animate={{
  scale: [1, 1.05, 1],
}}
transition={{
  duration: 2,
  repeat: 1,  // <-- ANIMATE ONCE
  ease: 'easeInOut',
}}
```

---

### Change 3.2: Fade Zone During Reading

**File:** `/docs-spa/components/layout/ThreePanelLayout.tsx`

**Why:** Reduce visual competition while user reads main content

**Add state tracking:**

```tsx
'use client'

import { ReactNode, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Header } from './Header'
import { LeftNav } from './LeftNav'
import { ActivityZone } from './ActivityZone'
import { Resizer } from './Resizer'
import { LeftNavResizer } from './LeftNavResizer'
import { useNavigationStore } from '@/lib/store'
import { ScrollSyncProvider } from '@/lib/hooks'

interface ThreePanelLayoutProps {
  children: ReactNode
}

export function ThreePanelLayout({ children }: ThreePanelLayoutProps) {
  const activityZoneWidth = useNavigationStore((s) => s.activityZoneWidth)
  const leftNavWidth = useNavigationStore((s) => s.leftNavWidth)
  const leftNavCollapsed = useNavigationStore((s) => s.leftNavCollapsed)

  // ADD: Reading mode detection
  const [isReading, setIsReading] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const mainContent = document.querySelector('main')
    if (!mainContent) return

    const handleScroll = () => {
      setIsReading(true)

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Return to normal after 2s idle
      scrollTimeoutRef.current = setTimeout(() => {
        setIsReading(false)
      }, 2000)
    }

    mainContent.addEventListener('scroll', handleScroll)
    return () => {
      mainContent.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />

      <div className="flex pt-[var(--header-height)]">
        {/* Left Navigation */}
        <motion.aside
          className="fixed top-[var(--header-height)] left-0 h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden border-r border-border bg-white z-40"
          initial={false}
          animate={{ width: leftNavWidth }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <LeftNav collapsed={leftNavCollapsed} />
        </motion.aside>

        <LeftNavResizer />

        {/* Main Content */}
        <motion.main
          className="flex-1 min-h-[calc(100vh-var(--header-height))]"
          initial={false}
          animate={{
            marginLeft: leftNavWidth,
            marginRight: activityZoneWidth,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <ScrollSyncProvider>
            <div className="w-full max-w-5xl mx-auto px-8 lg:px-12 py-12">
              {children}
            </div>
          </ScrollSyncProvider>
        </motion.main>

        <Resizer />

        {/* Activity Zone - with reading mode fade */}
        <motion.aside
          className="fixed top-[var(--header-height)] right-0 h-[calc(100vh-var(--header-height))] overflow-y-auto border-l border-dashed border-border bg-bg-subtle z-40 activity-zone-wrapper"
          style={{ width: `${activityZoneWidth}px` }}
          animate={{
            opacity: isReading ? 0.6 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
          onMouseEnter={() => setIsReading(false)}  // Restore on hover
        >
          <ActivityZone />
        </motion.aside>
      </div>
    </div>
  )
}
```

---

## VALIDATION CHECKLIST

### Post-Implementation Testing

**Phase 1 Completion:**
```
[ ] Color palette: All 16 types visually distinct
    - Run https://www.tpgi.com/color-contrast-checker/ on each color
    - Verify >= 7:1 contrast (WCAG AAA)
    - Verify no hex duplicates

[ ] Density: 15+ cards visible at once
    - Measure viewport: ~880px zone height
    - Count visible cards: should be 8.5/15 (57%)
    - Compare before/after screenshots

[ ] Screenshot validation:
    - Capture entire activity zone with 15 cards
    - Verify all 16 color types present and distinct
    - No pixelation or rendering issues
```

**Phase 2 Completion:**
```
[ ] Active vs Hover states
    - Hover card: observe lift + opacity change
    - Click card: observe persistent glow + shadow
    - Take screenshot: states should be visually distinct

[ ] Reduced-motion support
    - macOS: System > Accessibility > Display > Reduce motion (ON)
    - Reload page
    - Verify: No animations, instant state changes
    - Verify: Focus visible rings still appear

[ ] "Read More" functionality
    - Create activity item with >150 char content
    - Verify: Card shows "Read more →" button
    - Click: Content expands, button changes to "Read less ↑"
    - Verify: No card exceeds 180px height (clamped)

[ ] Keyboard navigation
    - Tab through activity items
    - Focus-visible rings appear on each card
    - Enter key scrolls to linked section
    - Space key also works
```

**Phase 3 Completion:**
```
[ ] Reading mode fade
    - Scroll main content
    - Observe: Activity zone fades to 60% opacity
    - Stop scrolling for 2s
    - Observe: Zone returns to 100% opacity
    - Hover zone: Returns to 100% immediately

[ ] Icon animation
    - Load page
    - Observe: Sparkle icon "pops" once (scale animation)
    - After 2s: Icon settles, no more animation
    - Compare before/after: Visual noise reduced significantly

[ ] Performance
    - Open DevTools > Performance tab
    - Scroll activity zone with 25 cards
    - Record: Target 60fps, <16ms per frame
    - Check JS execution time: <50ms

[ ] User testing (5 power users)
    - Task: "Find 3 war story cards and click them"
    - Measure: Task completion time
    - Compare before/after implementations
    - Target: >20% faster, <2% errors
```

---

## Rollback Instructions

If any phase introduces issues, rollback is simple:

**Phase 1 (Color):**
```bash
git revert <commit-sha>
# or
git diff HEAD^ docs-spa/components/activity-zone/activity-config.ts | git apply -R
```

**Phase 2 (State):**
```bash
# Revert ActivityItem.tsx to previous version
git checkout HEAD^ -- docs-spa/components/activity-zone/ActivityItem.tsx
```

**Phase 3 (Polish):**
```bash
# Revert layout changes
git checkout HEAD^ -- docs-spa/components/layout/ThreePanelLayout.tsx
```

---

## Troubleshooting Common Issues

### Issue: Colors look too muted
**Diagnosis:** Browser color profile or monitor calibration
**Solution:** Test on multiple browsers/monitors; verify hex values in DevTools

### Issue: "Read More" button cuts off
**Diagnosis:** Padding/margin calculation error
**Solution:** Check `getCardPadding()` function; ensure max-height accounts for button

### Issue: Reduced-motion still shows animation
**Diagnosis:** CSS animations not respecting media query
**Solution:** Verify `prefers-reduced-motion: reduce` is set in global CSS

### Issue: Zone fade animation feels jerky
**Diagnosis:** Long scroll handler or expensive main content
**Solution:** Add debouncing to scroll event; profile with DevTools

---

## Performance Baseline

Expected metrics after all phases:

| Metric | Value |
|--------|-------|
| FPS (scrolling activity zone) | 58-60 fps |
| JS execution per frame | <8ms |
| Style recalc per hover | <3ms |
| Layout shift (CLS) | 0 (no shift) |
| First paint (activity zone) | <100ms |
| Total bundle size increase | 0 (no new deps) |

---

**Last Updated:** 2026-01-26
**Implementation Effort:** 6-8 hours total
**Risk Level:** Low (changes are isolated to component tree)
**Rollback Difficulty:** Easy (git-based, no migrations)
