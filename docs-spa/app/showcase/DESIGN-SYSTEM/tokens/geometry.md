# Geometry Tokens
## Locked KortAI Geometry Rules

═══════════════════════════════════════════════════════════════════════════════

## Border Radius (LOCKED)

```css
:root {
  --border-radius: 0;  /* ALWAYS sharp edges */
}
```

**Rule:** `border-radius: 0` on EVERYTHING. No exceptions.

**Why?** Sharp edges = decisive, confident. Rounded = friendly, safe, generic.

═══════════════════════════════════════════════════════════════════════════════

## Shadows (LOCKED)

```css
:root {
  --box-shadow: none;  /* ALWAYS flat design */
}
```

**Rule:** `box-shadow: none` on EVERYTHING. No exceptions.

**Why?** Shadows = fake 3D, dishonest. Flat = print heritage, honest.

═══════════════════════════════════════════════════════════════════════════════

## Border Styles

### Left Accent Border (Callouts)
```css
.callout {
  border-left: 4px solid [accent-color];
}
```
**Rule:** 4px minimum. Never 1-2px (too subtle).

### Outline Border (Frames)
```css
.frame {
  border: 1px solid var(--color-border);
}
```
Used for: Core Abstraction, Reasoning Component

### No Vertical Borders in Tables
```css
.decision-matrix td {
  border-left: none;
  border-right: none;
}
```
**Why?** Vertical lines = prison bars. Open grid = breathing room.

═══════════════════════════════════════════════════════════════════════════════

## Zone Separation Methods

| Method | KortAI Preferred? | When Used |
|--------|-------------------|-----------|
| Whitespace only | **YES** | Primary method |
| Background color change | **YES** | Semantic zones |
| Left border accent | **YES** | Callouts |
| Full border (1px) | Sometimes | Tables, frames |
| Horizontal rule | RARELY | Explicit breaks |
| Drop shadow | **NEVER** | — |
| Rounded corners | **NEVER** | — |

═══════════════════════════════════════════════════════════════════════════════

## Container Styles

| Style | Zone Type | Meaning |
|-------|-----------|---------|
| No visible container | Content-defined | "Content speaks" |
| Left accent border | Flagged zone | "Semantic category" |
| Full 1px border | Enclosed zone | "Bounded content" |
| Dark background | Inverted zone | "Focus content" |
| Tinted background | Semantic zone | "Type-specific" |
