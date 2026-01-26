# Ralph Flagship POC - Mintlify Style Redesign

**Created:** 2026-01-25
**Status:** IN PROGRESS

---

## Design Direction: Clean Mintlify Theme

### Color Palette

```css
/* Mintlify-Inspired Light Theme */
--bg-base: #ffffff;           /* Main background */
--bg-subtle: #fafafa;         /* Sidebar backgrounds */
--bg-muted: #f4f4f5;          /* Code blocks, cards */
--bg-elevated: #ffffff;       /* Elevated surfaces */

--text-primary: #18181b;      /* Main text (zinc-900) */
--text-secondary: #3f3f46;    /* Secondary text (zinc-700) */
--text-muted: #71717a;        /* Muted text (zinc-500) */
--text-ghost: #a1a1aa;        /* Ghost/placeholder (zinc-400) */

--accent: #0D9373;            /* Mintlify green */
--accent-light: #10b981;      /* Lighter green for hover */
--accent-bg: #ecfdf5;         /* Green tinted background */

--border: #e4e4e7;            /* Default borders (zinc-200) */
--border-strong: #d4d4d8;     /* Stronger borders (zinc-300) */

--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
```

### Typography

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'Fira Code', 'SF Mono', monospace;

--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
```

---

## Three-Panel Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  HEADER: Logo | Search (Cmd+K) | Support | Dashboard | Theme Toggle  │
├─────────────┬────────────────────────────────────┬───────────────────┤
│             │                                    │                   │
│  LEFT NAV   │         MAIN CONTENT               │  ACTIVITY ZONE    │
│  "Where     │         "What is this?"            │  "What's          │
│   am I?"    │                                    │   happening?"     │
│             │                                    │                   │
│  ~240px     │         flex-grow                  │  ~480px           │
│  sticky     │         scrolls                    │  sticky           │
│  solid      │                                    │  dashed border    │
│  border     │                                    │  (living content) │
│             │                                    │                   │
├─────────────┴────────────────────────────────────┴───────────────────┤
│  FOOTER: Previous | Next                                             │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Panel Specifications

### LEFT PANEL: Navigation (~240px)

**Header:**
- Section indicator: "Getting started" (breadcrumb-style)

**Sections (collapsible):**
1. **Overview**
   - The One-Liner

2. **Philosophy**
   - Core Principles
   - Fresh Context
   - External Memory

3. **Getting Started** (expanded by default)
   - File Structure
   - Basic Implementation
   - Your First Loop

4. **Variants (10)**
   - Basic Ralph
   - PRD-Driven
   - Dr. Ralph
   - AFK/Overnight
   - HOTL
   - Parallel
   - Marathon
   - Compounding
   - Marketer
   - Rate-Limited

5. **Advanced**
   - 8 Success Factors
   - Pattern Combinations

6. **Troubleshooting**
   - Common Failures
   - When NOT to Use

7. **Reference**
   - Cost Estimates
   - Case Studies

**Visual:**
- White/light gray background
- Green left border on active item
- Green background tint on active item
- Chevron icons for collapsible sections
- Icons next to section headers

---

### CENTER PANEL: Main Content

**Components:**
1. **Breadcrumb**: Getting started > Introduction
2. **Page Title**: "The Ralph Pattern" + Copy page button
3. **Subtitle**: "The Infinite Loop of Fresh Context"

4. **You Are Here Box** (cyan left border)
   - Orientation context
   - Prerequisites
   - Complexity level

5. **Hero Code Block**
   - The one-liner with copy button
   - Terminal-style but light themed

6. **Core Insight Callout**
   - "Memory lives outside the model"
   - Green accent border

7. **Philosophy Cards** (3-column grid)
   - Fresh Context Beats Accumulated
   - Failure Is Data, Not Defeat
   - Small + Verifiable = Reliable

8. **File Structure** (code block)

9. **Implementation** (code block with copy)

10. **Checkpoint Box** (green left border)
    - Pre-flight checklist
    - Verification commands

11. **Success Factors** (2-column grid of cards)

12. **Common Failures** (collapsible accordions)
    - Amber/warning styling

13. **When NOT to Use** (grid with X icons)

14. **Cost Estimates** (table)

15. **Case Studies** (cards)

16. **Pattern Combinations** (pill links)

17. **Footer Navigation**
    - Previous: Philosophy
    - Next: Getting Started

---

### RIGHT PANEL: Activity Zone (~480px, resizable 280-900px)

**Header:** "Activity" or "Living Context"

**Content Types (with icons):**

1. **Quote** (message-square-quote)
   ```
   "The trick with hooks is you want to fire
   them BEFORE the loop restarts"
   — Matt Pocock
   ```

2. **Connection** (link-2)
   ```
   Ralph + Playwright
   Combines visual verification with the loop
   ```

3. **Case Study** (bar-chart-3)
   ```
   Ryan Carson's Feature
   14 iterations | ~$10-15 | 2 hours
   ```

4. **Open Question** (help-circle)
   ```
   How does Ralph interact with
   MCP notification servers?
   ```

5. **Core Insight** (lightbulb)
   ```
   We can achieve meaningful unattended
   software production in 2026.
   ```

**Visual:**
- Dashed left border (indicates living/fluid content)
- Light background cards
- Type-specific accent colors
- Source attribution below each item

**Behavior:**
- Items sync with scroll position in main content
- Hovering an activity item highlights related main content section
- Smooth transitions between activity states

---

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Desktop (1400px+) | All three panels visible, Activity Zone resizable |
| Tablet (901-1400px) | Hide Activity Zone, 2-panel layout |
| Tablet narrow (769-900px) | 2-panel, grids stack |
| Mobile (<768px) | Collapse nav to hamburger, full-width content |

---

## Implementation Approach

### File: `gallery/ralph-mintlify-poc.html`

**CDN Dependencies:**
- Google Fonts (Inter, Fira Code)
- Tailwind CSS
- Lucide Icons
- GSAP (for smooth animations)

**No build step required** - single self-contained HTML file.

---

## Activity Zone Content (Pre-written)

### Synced to: Overview Section
- **Quote**: "while :; do cat PROMPT.md | claude ; done — The one-liner. Everything else is scaffolding."
- **Insight**: "Memory lives outside the model."

### Synced to: Philosophy Section
- **Quote**: "Fresh context beats accumulated context every time." — Boris Cherny
- **Quote**: "Deterministically bad failures are predictable and informative."

### Synced to: Getting Started Section
- **Connection**: "Ralph + CLAUDE.md — Project context enhances each iteration"
- **Case Study**: "First-time setup: 30-60 minutes"

### Synced to: Variants Section
- **Quote**: "Dr. Ralph adds confidence scoring to prevent premature completion" — Ryan Carson
- **Connection**: "HOTL Ralph + Security Reviews — Human approval gates"

### Synced to: Success Factors Section
- **Insight**: "Without verification, Ralph produces garbage. Tests are non-negotiable."
- **Quote**: "Learnings compound. By story 10, Ralph knew our patterns."

### Synced to: Troubleshooting Section
- **Open Question**: "What's the optimal stuck detection threshold? 3 iterations? 5?"
- **Case Study**: "Stories too large = context overflow in 73% of failures"

### Synced to: Cost Estimates Section
- **Case Study**: "Ryan Carson: 14 iterations, ~$10-15, complete feature"
- **Case Study**: "Matt Pocock: Playwright verification for visual features"

---

## Brushing Interaction Spec

```javascript
// Each activity item has data-syncs-to attribute
<div class="activity-item" data-syncs-to="philosophy">

// ScrollTrigger detects which section is in view
ScrollTrigger.create({
  trigger: '#philosophy',
  start: 'top 30%',
  end: 'bottom 30%',
  onEnter: () => showActivityFor('philosophy'),
  onEnterBack: () => showActivityFor('philosophy')
});

// Activity items fade in/out based on current section
function showActivityFor(sectionId) {
  document.querySelectorAll('.activity-item').forEach(item => {
    if (item.dataset.syncsTo === sectionId) {
      gsap.to(item, { opacity: 1, y: 0, duration: 0.3 });
    } else {
      gsap.to(item, { opacity: 0.3, y: 10, duration: 0.3 });
    }
  });
}
```

---

## Verification Checklist

After implementation:
- [ ] Clean Mintlify-style theme (light background, dark text)
- [ ] Three panels render correctly at 1440px
- [ ] Left nav has collapsible sections with smooth animation
- [ ] Activity Zone shows relevant content based on scroll position
- [ ] Brushing interaction works (hover activity → highlight content)
- [ ] All copy buttons work
- [ ] Responsive at 1024px (activity hidden)
- [ ] Responsive at 768px (nav collapsed)
- [ ] No console errors
- [ ] WCAG AA contrast compliance
