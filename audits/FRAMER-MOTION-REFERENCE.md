# Framer Motion Reference Guide

**Quick reference for animation configurations used in the documentation site**

---

## Spring Physics Configuration

Your codebase uses 3 primary spring profiles. Use this when adding new animations.

### Profile 1: SNAPPY (150ms equiv)
**Use for:** Copy button feedback, icon reactions, quick micro-interactions

```tsx
const SPRING_SNAPPY = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
}

// Approximately 150ms to settle
// Feels: Responsive, confident, minimal bounce
```

**Example:**
```tsx
<motion.button
  whileHover={{ scale: 1.05, transition: SPRING_SNAPPY }}
/>
```

---

### Profile 2: BOUNCY (280ms equiv)
**Use for:** Nav items, category expansion, list reveals, card hovers

```tsx
const SPRING_BOUNCY = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
}

// Approximately 280ms to settle
// Feels: Playful, energetic, slight bounce
```

**Example:**
```tsx
<motion.div
  animate={{ rotate: isExpanded ? 90 : 0 }}
  transition={SPRING_BOUNCY}
/>
```

---

### Profile 3: GENTLE (380ms equiv)
**Use for:** Large panels, slow reveals, delicate transitions

```tsx
const SPRING_GENTLE = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 25,
}

// Approximately 380ms to settle
// Feels: Smooth, luxurious, minimal bounce
```

**Example:**
```tsx
<motion.aside
  animate={{ width: newWidth }}
  transition={SPRING_GENTLE}
/>
```

---

## Duration-Based Transitions

Use these for pixel-perfect timing synchronization (height reveals, opacity fades).

### Fast Fade (150ms)
```tsx
{ duration: 0.15, ease: 'easeOut' }
// Use for: opacity changes, quick reveals
```

### Standard Ease (200-250ms)
```tsx
{ duration: 0.2, ease: 'easeOut' }  // or 0.25
// Use for: letter-spacing, scale changes
```

### Content Reveal (300-350ms)
```tsx
{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }
// Use for: height changes, container expands
// Easing curve: standard iOS easing
```

### Slow Reveal (400-500ms)
```tsx
{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }
// Use for: page transitions, large content entry
```

---

## Easing Curves

### presets (String-based)
```tsx
ease: 'easeIn'      // Slow start, fast end
ease: 'easeOut'     // Fast start, slow end ✅ USE THIS MOST
ease: 'easeInOut'   // Slow at both ends
ease: 'linear'      // Constant speed (rarely use)
```

### Custom Cubic Bezier (Advanced)
```tsx
// Format: [x1, y1, x2, y2] where (0,0) to (1,1) is animation range

// iOS Standard (recommended for reveals)
ease: [0.4, 0, 0.2, 1]

// Snappy (confident, minimal overshoot)
ease: [0.34, 1.56, 0.64, 1]

// Bounce-in
ease: [0.68, -0.55, 0.27, 1.55]

// Lazy (ease-out equivalent)
ease: [0.25, 0.46, 0.45, 0.94]
```

---

## Variant Patterns (Copy-Paste Ready)

### Pattern: Expandable Container
```tsx
const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25, delay: 0.1 },
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

// Usage:
<motion.div
  variants={contentVariants}
  initial="collapsed"
  animate={isExpanded ? "expanded" : "collapsed"}
/>
```

### Pattern: Staggered Item List
```tsx
const itemVariants = {
  collapsed: { opacity: 0, y: -8, scale: 0.95 },
  expanded: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
}

// Usage:
<motion.div variants={contentVariants} initial="collapsed" animate="expanded">
  {items.map((item, index) => (
    <motion.div key={item.id} variants={itemVariants} custom={index}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Pattern: Success Feedback
```tsx
const successVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  glow: {
    opacity: [1, 0],
    scale: [1, 1.4],
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Usage:
{copied && (
  <>
    <motion.div animate="pulse" variants={successVariants} />
    <motion.div animate="glow" variants={successVariants} />
  </>
)}
```

### Pattern: Icon Swap
```tsx
const iconVariants = {
  enter: { opacity: 0, scale: 0.8, rotate: -180 },
  center: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.8, rotate: 180 }
}

// Usage:
<AnimatePresence mode="wait">
  {copied ? (
    <motion.div
      key="check"
      variants={iconVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <CheckIcon />
    </motion.div>
  ) : (
    <motion.div
      key="copy"
      variants={iconVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <CopyIcon />
    </motion.div>
  )}
</AnimatePresence>
```

### Pattern: Ripple Effect
```tsx
const rippleVariants = {
  click: {
    scale: [0, 1],
    opacity: [1, 0],
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

// Usage:
{isClicking && (
  <motion.div
    className="absolute inset-0"
    initial={{ scale: 0, opacity: 1 }}
    animate={{ scale: 1, opacity: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    style={{ pointerEvents: 'none' }}
  />
)}
```

---

## useReducedMotion Hook

**Always use this pattern for accessibility:**

```tsx
import { useReducedMotion } from 'framer-motion'

export function MyComponent() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      // Option 1: Conditional transitions
      animate={{ scale: 1.05 }}
      transition={prefersReducedMotion ? { duration: 0 } : SPRING_SNAPPY}

      // Option 2: Conditional whileHover
      whileHover={prefersReducedMotion ? {} : {
        scale: 1.05,
        transition: SPRING_SNAPPY
      }}

      // Option 3: Conditional variants
      variants={prefersReducedMotion ? {} : {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
      }}
    />
  )
}
```

**Why three options?**
- Option 1: Simple, good for single properties
- Option 2: Recommended for hover/tap states
- Option 3: Use when variants are complex

---

## Common Animation Patterns

### Hover Scale (Button)
```tsx
<motion.button
  whileHover={prefersReducedMotion ? {} : {
    scale: 1.05,
    transition: SPRING_SNAPPY
  }}
  whileTap={prefersReducedMotion ? {} : {
    scale: 0.95,
    transition: SPRING_SNAPPY
  }}
/>
```

### Lift on Hover (Card)
```tsx
<motion.div
  whileHover={prefersReducedMotion ? {} : {
    y: -4,
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.2 }
  }}
/>
```

### Rotate (Icon)
```tsx
<motion.div
  animate={{ rotate: isExpanded ? 90 : 0 }}
  transition={SPRING_BOUNCY}
/>
```

### Fade In/Out
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.2 }}
/>
```

### Slide In
```tsx
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 100, opacity: 0 }}
  transition={SPRING_GENTLE}
/>
```

### Color Shift
```tsx
<motion.div
  animate={{
    backgroundColor: isActive ? '#accent' : 'transparent'
  }}
  transition={{ duration: 0.2 }}
/>
```

### Letter Spacing
```tsx
<motion.span
  animate={{
    letterSpacing: isActive ? '0.08em' : '0em'
  }}
  transition={SPRING_SNAPPY}
/>
```

---

## Advanced: Stagger Children

**For list animations with delay:**

```tsx
// Parent variant controls stagger
const parentVariants = {
  show: {
    transition: {
      staggerChildren: 0.05,      // 50ms between each child
      delayChildren: 0.1,         // 100ms before first child
    }
  }
}

// Child variant defines each item's animation
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
}

// Usage:
<motion.div variants={parentVariants} animate="show" initial="hidden">
  {items.map((item) => (
    <motion.div key={item.id} variants={childVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Advanced: Gesture Control

**For more interactive elements:**

```tsx
<motion.div
  // Hover
  whileHover={{ scale: 1.05 }}

  // Tap/Click
  whileTap={{ scale: 0.95 }}

  // Focus (React 19+)
  whileFocus={{ outline: '2px solid accent' }}

  // Drag (if needed)
  whileDrag={{ scale: 1.1 }}

  drag
  dragElastic={0.2}
  dragConstraints={{ left: 0, right: 100 }}
/>
```

---

## AnimatePresence (Mounting/Unmounting)

**Required for animations when elements are removed:**

```tsx
import { AnimatePresence } from 'framer-motion'

export function List() {
  const [items, setItems] = useState([...])

  return (
    <AnimatePresence mode="wait" initial={false}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={SPRING_SNAPPY}
        >
          {item.content}
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
```

**Mode options:**
- `'wait'` - Exit animation completes before next enter (use this usually)
- `'popLayout'` - No exit delay, instant removal
- `'sync'` - Both animate simultaneously (rare)

---

## Performance Tips

### 1. Use `initial={false}` When Appropriate
```tsx
// Prevents animation on mount (usually desired)
<motion.div initial={false} animate={...} />
```

### 2. Use `transform` Properties (GPU-accelerated)
```tsx
// ✅ GPU accelerated (fast)
animate={{ x: 10, y: 20, scale: 1.1, rotate: 45 }}

// ❌ CPU rendered (slow)
animate={{ width: 200, height: 200, left: 50 }}
```

### 3. Use `will-change` CSS for Heavy Animations
```tsx
<motion.div style={{ willChange: 'transform' }} />
```

### 4. Avoid Animating Complex Properties
```tsx
// ❌ Don't animate box-shadow
animate={{ boxShadow: '0 20px 40px rgba(...)' }}

// ✅ Use opacity + static shadow instead
<motion.div animate={{ opacity: 1 }} style={{ boxShadow: '...' }} />
```

### 5. LazyMotion for Bundle Size (Future)
```tsx
import { LazyMotion, domAnimation } from 'framer-motion'

export default function Layout() {
  return (
    <LazyMotion features={domAnimation}>
      <YourApp />
    </LazyMotion>
  )
}
// Saves ~8KB by deferring feature detection
```

---

## Debugging Tips

### Check if Animation is Running
```tsx
// Open DevTools > Performance tab
// Look for consistent 60fps or near-60fps
// Red bars = dropped frames = jank
```

### Test Reduced Motion
```
Mac: System Prefs > Accessibility > Display > Reduce motion
Windows: Settings > Ease of Access > Display > Show animations (off)
```

### Inspect Motion Values
```tsx
import { useMotionValue } from 'framer-motion'

const x = useMotionValue(0)

// In component:
<motion.div style={{ x }} />

// In console:
x.get()  // Get current value
x.set(50) // Set value directly
```

### Enable Debug Mode (Framer internal)
```tsx
<motion.div _debugName="MyComponent" />
// Shows motion values in DevTools
```

---

## Browser Support

**Framer Motion 11 supports:**
- ✅ All modern browsers (Chrome, Safari, Firefox, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ IE 11 (graceful degradation, animations won't work but content displays)

**Spring Physics:**
- Uses CSS transforms + requestAnimationFrame
- Hardware-accelerated on all devices
- No janky fallbacks

---

## Common Issues & Solutions

### Issue: Animation Doesn't Start
**Solution:** Make sure you have `AnimatePresence` wrapping if element is conditional:
```tsx
<AnimatePresence>
  {isVisible && <motion.div />}
</AnimatePresence>
```

### Issue: Initial Animation on Mount
**Solution:** Use `initial={false}`:
```tsx
<motion.div initial={false} animate={...} />
```

### Issue: Spring Animation Feels Sluggish
**Solution:** Increase stiffness:
```tsx
// Was:  { stiffness: 200, damping: 25 }
// Try:  { stiffness: 300, damping: 25 }
```

### Issue: Spring Animation Bounces Too Much
**Solution:** Increase damping:
```tsx
// Was:  { stiffness: 300, damping: 20 }
// Try:  { stiffness: 300, damping: 30 }
```

### Issue: Reduced Motion Hook Not Working
**Solution:** Ensure hook is at component level, not in conditional:
```tsx
// ❌ Wrong
if (someCondition) {
  const reduced = useReducedMotion()
}

// ✅ Right
const reduced = useReducedMotion()
if (someCondition) { ... }
```

---

## Quick Lookup: What Animation for What?

| Element | Interaction | Animation | Duration | Spring |
|---------|-------------|-----------|----------|--------|
| Button | Hover | Scale up | Fast | SNAPPY |
| Button | Click | Scale down | Fast | SNAPPY |
| Copy feedback | Success | Scale + pulse | Medium | SNAPPY |
| Nav item | Hover | Shift + scale | Medium | BOUNCY |
| Nav category | Expand | Chevron rotate | Medium | BOUNCY |
| Card | Hover | Lift up | Medium | BOUNCY |
| Card | Click | Ripple expand | Medium | - (easeOut) |
| Panel | Resize | Width change | Medium | GENTLE |
| Page | Transition | Fade + slide | Medium | GENTLE |
| Content | Reveal | Height expand | Fast/Medium | - (easeOut) |
| Icon | State change | Rotate | Fast | BOUNCY |
| Text | Emphasis | Letter spacing | Fast | SNAPPY |

---

## Reference: Spring Physics Math

Don't need to know this, but here's why springs feel good:

```
Spring creates oscillation:
position(t) = amplitude * e^(-damping*t) * cos(stiffness*t)

Higher stiffness → faster oscillation → snappier feel
Higher damping → less bounce → less overshoot

Optimal range for UI:
- stiffness: 150-500 (low = slow, high = snappy)
- damping: 15-35 (low = bouncy, high = smooth)
- mass: 0.5-2.0 (affects momentum)
```

---

## Final Checklist: Before Committing

- [ ] All animations have `useReducedMotion` check
- [ ] All `AnimatePresence` uses `mode="wait"`
- [ ] No animations on layout-affecting properties (width, height)
- [ ] All springs use one of 3 profiles (SNAPPY, BOUNCY, GENTLE)
- [ ] No `duration: 0` in normal code (should be via `useReducedMotion`)
- [ ] Tested with prefers-reduced-motion enabled
- [ ] No console errors or warnings
- [ ] DevTools Performance shows 60fps (or close)
- [ ] Touch devices tested (mobile/tablet)
- [ ] Keyboard navigation still works
- [ ] Focus rings visible

---

**That's everything you need! Bookmark this and reference when adding new animations.**
