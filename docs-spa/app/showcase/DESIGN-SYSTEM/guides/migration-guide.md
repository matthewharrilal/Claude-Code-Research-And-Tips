# Migration Guide
## Converting Existing Documentation to KortAI

═══════════════════════════════════════════════════════════════════════════════

## Pre-Migration Checklist

Before migrating, verify you have:
- [ ] Loaded the KortAI CSS variables (see [QUICK-START.md](../QUICK-START.md))
- [ ] Loaded the required fonts (Instrument Serif, Inter, JetBrains Mono)
- [ ] Reset global styles (border-radius: 0, box-shadow: none)
- [ ] Read the [anti-patterns registry](../anti-patterns/registry.md)

═══════════════════════════════════════════════════════════════════════════════

## Step 1: Audit Existing Styles

### Remove These Immediately
```css
/* DELETE ALL OF THESE */
border-radius: [any value];
box-shadow: [any value];
background: #F5F5F5;  /* Cool grays */
background: white;     /* Unless semantic */
```

### Replace With
```css
/* REPLACE WITH */
border-radius: 0;
box-shadow: none;
background: #FEF9F5;  /* Warm cream */
```

═══════════════════════════════════════════════════════════════════════════════

## Step 2: Convert Callouts

### From Generic Alert
```html
<!-- BEFORE (generic) -->
<div class="alert alert-info">
  This is important information.
</div>
```

### To KortAI Info Callout
```html
<!-- AFTER (KortAI) -->
<aside class="callout callout--info">
  <span class="callout__label">INFO</span>
  <p class="callout__body">
    This is important information.
  </p>
</aside>
```

### Callout Type Mapping

| Original | KortAI Equivalent |
|----------|-------------------|
| `alert-info`, `note` | Info Callout |
| `alert-success`, `tip`, `hint` | Tip Callout |
| `alert-warning`, `caution` | Gotcha Callout |
| `alert-danger`, `error` | Gotcha Callout (with stronger language) |
| `blockquote` (important) | Essence Callout |
| `exercise`, `try-it` | Challenge Callout |

═══════════════════════════════════════════════════════════════════════════════

## Step 3: Convert Code Blocks

### From Generic
```html
<!-- BEFORE -->
<pre><code class="language-js">
const x = 1;
</code></pre>
```

### To KortAI
```html
<!-- AFTER -->
<div class="code-snippet">
  <div class="code-snippet__header">
    <span class="code-snippet__language">JavaScript</span>
    <button class="code-snippet__copy">Copy</button>
  </div>
  <pre class="code-snippet__body"><code class="language-js">
const x = 1;
  </code></pre>
</div>
```

### Key CSS
```css
.code-snippet {
  background: #1E1E1E;
  color: #F5F0EB;
  border-radius: 0;  /* Sharp! */
  box-shadow: none;  /* Flat! */
}
```

═══════════════════════════════════════════════════════════════════════════════

## Step 4: Apply Density Patterns

### Identify Content Type

| Content Type | Use Pattern |
|--------------|-------------|
| Tutorial | PULSE |
| Getting Started | CRESCENDO |
| Reference | Islands |
| Long-form | WAVE |

### Add Recovery Breathing
After any dense section, add 64-80px whitespace:

```css
.dense-section {
  margin-bottom: 64px;
}
```

═══════════════════════════════════════════════════════════════════════════════

## Step 5: Verify Implementation

Run through this checklist:

### Geometry
- [ ] All corners are sharp (0px radius)
- [ ] No shadows anywhere
- [ ] Callout borders are 4px

### Colors
- [ ] Background is warm cream (#FEF9F5), not white
- [ ] No traffic-light (green adjacent to red)
- [ ] Accents match semantic meaning

### Typography
- [ ] Display text uses Instrument Serif
- [ ] Body text uses Inter
- [ ] Code uses JetBrains Mono
- [ ] h3 elements are italic
- [ ] Callout labels are 10px uppercase

### Density
- [ ] Max 1-2 callouts per viewport
- [ ] Recovery breathing after dense sections
- [ ] No same-density throughout

═══════════════════════════════════════════════════════════════════════════════

## Common Migration Pitfalls

### Pitfall 1: Keeping Rounded Corners on "Special" Elements
**Wrong thinking:** "Just the buttons can have rounded corners"
**Reality:** NO exceptions. Sharp edges everywhere.

### Pitfall 2: Adding Shadows for "Depth"
**Wrong thinking:** "It needs visual hierarchy"
**Reality:** Use whitespace and typography for hierarchy, not shadows.

### Pitfall 3: Using Sans-Serif for Essence
**Wrong thinking:** "Keep it consistent with other callouts"
**Reality:** Essence Callout MUST use Instrument Serif italic.

### Pitfall 4: Thin Borders on Callouts
**Wrong thinking:** "2px looks cleaner"
**Reality:** 4px minimum or it doesn't register as an anchor.

═══════════════════════════════════════════════════════════════════════════════

## Migration Automation

### CSS Variables Injection
```javascript
// Add to build process
const kortaiTokens = `
  :root {
    --color-primary: #E83025;
    --color-background: #FEF9F5;
    --color-text: #1A1A1A;
    // ... all tokens
  }
`;
```

### Anti-Pattern Detection
```javascript
// Lint rule (pseudo-code)
if (css.includes('border-radius') && value !== '0') {
  warn('KortAI requires border-radius: 0');
}
if (css.includes('box-shadow') && value !== 'none') {
  warn('KortAI requires box-shadow: none');
}
```

═══════════════════════════════════════════════════════════════════════════════

## Post-Migration Audit

### The Bootstrap Test
> "Could this exist in a Bootstrap project?"
> If yes → Revise. KortAI should be distinctive.

### Visual Comparison
Compare your migrated page against:
1. Original design reference (Sanrok)
2. Anti-pattern examples (what to avoid)
3. Validated explorations (DD-002 is gold standard)
