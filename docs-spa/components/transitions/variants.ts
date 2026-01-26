import { Variants } from 'framer-motion'

// Consistent easing curves used throughout
const EASE_OUT = [0.25, 0.1, 0.25, 1] as const
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const

export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: 'easeIn' }
  }
}

export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE_OUT }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: EASE_OUT }
  }
}

export const slideRightVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: EASE_OUT }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.2, ease: EASE_OUT }
  }
}

export const expandVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: EASE_IN_OUT },
      opacity: { duration: 0.25, delay: 0.05 }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: EASE_IN_OUT },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
}

export const staggerContainerVariants: Variants = {
  collapsed: { opacity: 0 },
  expanded: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

export const staggerItemVariants: Variants = {
  collapsed: { opacity: 0, x: -10 },
  expanded: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
}

export const scaleVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: EASE_OUT }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15, ease: 'easeIn' }
  }
}

// Reduced motion alternatives - instant transitions for accessibility
export const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0 }
  }
}
