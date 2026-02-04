# Anti-Patterns Registry
## What NOT to Do in KortAI

═══════════════════════════════════════════════════════════════════════════════

## Geometry Anti-Patterns

### ❌ Rounded Corners
**What:** `border-radius: 4px` or greater
**Why it fails:** Signals "safe/generic" — could be any UI kit
**Alternative:** `border-radius: 0` — sharp edges = decisive, confident

```css
/* WRONG */
.card { border-radius: 12px; }

/* RIGHT */
.card { border-radius: 0; }
```

---

### ❌ Drop Shadows
**What:** `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`
**Why it fails:** Fake 3D, dishonest, breaks flat design principle
**Alternative:** `box-shadow: none` — use whitespace for separation

```css
/* WRONG */
.card { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

/* RIGHT */
.card { box-shadow: none; }
```

═══════════════════════════════════════════════════════════════════════════════

## Color Anti-Patterns

### ❌ Traffic-Light Colors
**What:** Green (#4A9D6B) adjacent to red (#E83025)
**Why it fails:** Kindergarten-level visual language, diminishes both
**Alternative:** Separate with whitespace or neutral component

```html
<!-- WRONG -->
<aside class="callout--tip">...</aside>
<aside class="callout--gotcha">...</aside>

<!-- RIGHT -->
<aside class="callout--tip">...</aside>
<div style="height: 48px;"></div>
<aside class="callout--gotcha">...</aside>
```

---

### ❌ Gray Backgrounds
**What:** `background: #F5F5F5` or similar cool grays
**Why it fails:** Sterile, institutional, not editorial
**Alternative:** Warm cream (#FEF9F5) or semantic tints

```css
/* WRONG */
body { background: #F5F5F5; }

/* RIGHT */
body { background: #FEF9F5; }
```

═══════════════════════════════════════════════════════════════════════════════

## Layout Anti-Patterns

### ❌ Callout Cacophony
**What:** 3+ callouts in one viewport
**Why it fails:** Alarm fatigue — the signal is lost in noise
**Alternative:** Max 1-2 callouts per viewport

---

### ❌ Code Wall
**What:** Long code block with no breaks
**Why it fails:** Reader loses context, overwhelmed
**Alternative:** Buffer with callouts/explanation

```html
<!-- WRONG -->
<pre><code>
  // 50 lines of code with no breaks
</code></pre>

<!-- RIGHT -->
<pre><code>// 15 lines</code></pre>
<aside class="callout--tip">Key insight here...</aside>
<pre><code>// 15 more lines</code></pre>
```

---

### ❌ Same Density Throughout
**What:** Uniform spacing/density from top to bottom
**Why it fails:** Monotonous, no rhythm, no rest points
**Alternative:** Use PULSE, CRESCENDO, BOOKENDS, or WAVE patterns

---

### ❌ Decorative Grid Breaking
**What:** Breaking grid with decorative elements
**Why it fails:** Violates flat design — decoration competes with content
**Alternative:** Break with CONTENT, not decoration

═══════════════════════════════════════════════════════════════════════════════

## Typography Anti-Patterns

### ❌ Sans-Serif for Essence Body
**What:** Using Inter for Essence Callout body text
**Why it fails:** Loses reverent, archival quality
**Alternative:** Instrument Serif italic

```css
/* WRONG */
.callout--essence .callout__body {
  font-family: 'Inter', sans-serif;
}

/* RIGHT */
.callout--essence .callout__body {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
}
```

---

### ❌ Thin Callout Borders
**What:** `border-left: 1px` or `2px`
**Why it fails:** Too subtle, doesn't create visual anchor
**Alternative:** 4px minimum

```css
/* WRONG */
.callout { border-left: 2px solid #4A90D9; }

/* RIGHT */
.callout { border-left: 4px solid #4A90D9; }
```

---

### ❌ Non-Italic h3
**What:** h3 with normal font-style
**Why it fails:** Breaks editorial hierarchy convention
**Alternative:** All h3 should be italic

```css
/* WRONG */
h3 { font-style: normal; }

/* RIGHT */
h3 { font-style: italic; }
```

═══════════════════════════════════════════════════════════════════════════════

## Interaction Anti-Patterns

### ❌ Hover Reveals for Important Content
**What:** Hiding information behind hover states
**Why it fails:** Touch devices excluded, information hidden
**Alternative:** Click to expand, or show always

---

### ❌ Hover Lift Effects
**What:** `transform: translateY(-4px)` on hover
**Why it fails:** Treats content like buttons, fake 3D
**Alternative:** No transform — content, not interactive element

═══════════════════════════════════════════════════════════════════════════════

## Component Anti-Patterns

### ❌ Vertical Table Borders
**What:** Cell borders on left/right of table columns
**Why it fails:** Prison bars effect, claustrophobic
**Alternative:** Open grid — horizontal rules only, whitespace for columns

```css
/* WRONG */
.decision-matrix td { border: 1px solid #E5E5E5; }

/* RIGHT */
.decision-matrix td {
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  border-left: none;
  border-right: none;
}
```

---

### ❌ Same-Velocity Stacking
**What:** SLOW + SLOW or FAST + FAST components adjacent
**Why it fails:** Monotonous, no rhythm
**Alternative:** Vary velocity (SLOW → FAST → SLOW)

═══════════════════════════════════════════════════════════════════════════════

## The Bootstrap Test

> "Could this exist in a Bootstrap project? If yes, you've failed."

Every implementation decision should pass this test. KortAI is opinionated and memorable, not generic and universally acceptable.
