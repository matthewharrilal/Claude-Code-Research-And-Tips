# Typography Tokens
## Locked KortAI Typography System

═══════════════════════════════════════════════════════════════════════════════

## Font Families (LOCKED)

```css
:root {
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
```

### Structural Roles

| Font | Zone Type | Meaning |
|------|-----------|---------|
| Instrument Serif | Title zones | "This is a title zone" (editorial) |
| Inter | Content zones | "This is a content zone" (functional) |
| JetBrains Mono | Technical zones | "This is a technical zone" (precise) |

═══════════════════════════════════════════════════════════════════════════════

## Type Scale (LOCKED)

```css
:root {
  --text-xs: 0.75rem;      /* 12px — Labels, captions */
  --text-sm: 0.875rem;     /* 14px — Small body, metadata */
  --text-base: 1rem;       /* 16px — Body text */
  --text-lg: 1.125rem;     /* 18px — Large body */
  --text-h4: 1.25rem;      /* 20px — Small headlines */
  --text-h3: 1.5rem;       /* 24px — Section headlines */
  --text-h2: 2rem;         /* 32px — Major headlines */
  --text-h1: 2.5rem;       /* 40px — Page titles */
  --text-display: 3rem;    /* 48px — Hero text */
}
```

═══════════════════════════════════════════════════════════════════════════════

## Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, code |
| Medium | 500 | Labels, metadata |
| Semibold | 600 | Headers, emphasis |
| Bold | 700 | Strong emphasis (rare) |

═══════════════════════════════════════════════════════════════════════════════

## Critical Rules

### 1. h3 Must Be Italic
```css
h3 {
  font-family: var(--font-display);
  font-style: italic;
}
```

### 2. Essence Callout Body Uses Serif
```css
.callout--essence .callout__body {
  font-family: var(--font-display);
  font-style: italic;
}
```

### 3. Callout Labels Are 10-11px Uppercase
```css
.callout__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### 4. Size Jump = Zone Boundary
- Jump of 4px+ = zone boundary
- Jump of 2px = within-zone variation

═══════════════════════════════════════════════════════════════════════════════

## Component-Specific Typography

| Component | Title Font | Body Font | Special |
|-----------|------------|-----------|---------|
| Code Snippet | Sans | Mono | — |
| Callouts (most) | — | Sans | 10px uppercase label |
| Essence Callout | — | **Serif Italic** | Quote treatment |
| File Tree | — | Mono | ASCII connectors |
| Decision Matrix | Sans | Sans | Open grid |
| Core Abstraction | Serif | Serif + Mono | Framed |
| Reasoning | Serif | Sans | Equal-weight columns |
