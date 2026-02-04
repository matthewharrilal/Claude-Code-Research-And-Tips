# Design Token Consistency Registry
## Perceptual Audit v2 — Token Tracking

═══════════════════════════════════════════════════════════════════════════════
## PURPOSE
═══════════════════════════════════════════════════════════════════════════════

This registry tracks all design tokens used across components to ensure:
1. Consistent values across the component family
2. No token drift between components
3. Justification for any new tokens added
4. Usage counts to identify core vs. edge-case tokens

**RULE:** New tokens require justification. Existing tokens should be reused.

═══════════════════════════════════════════════════════════════════════════════
## TYPOGRAPHY TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Font Families
| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| font-serif | Instrument Serif, Georgia, serif | KortAI ref | 0 | Title emphasis |
| font-sans | Inter, system-ui, sans-serif | KortAI ref | 0 | Body text |
| font-mono | JetBrains Mono, monospace | validation-sprint | 0 | Code display |

### Font Weights
| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| weight-regular | 400 | KortAI ref | 0 | Default body |
| weight-medium | 500 | KortAI ref | 0 | Labels, buttons |

### Font Sizes
| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| size-xs | 11px | KortAI ref | 0 | Labels |
| size-sm | 12px | KortAI ref | 0 | Metadata |
| size-base | 14px | KortAI ref | 0 | Body text |
| size-md | 16px | KortAI ref | 0 | Body large |
| size-lg | 20px | KortAI ref | 0 | Titles small |
| size-xl | 24px | KortAI ref | 0 | Titles medium |
| size-2xl | 28px | KortAI ref | 0 | Titles large |

### Line Heights
| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| leading-tight | 1.3 | KortAI ref | 0 | Titles |
| leading-normal | 1.5 | KortAI ref | 0 | Labels |
| leading-relaxed | 1.7 | KortAI ref | 0 | Body text |

═══════════════════════════════════════════════════════════════════════════════
## COLOR TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Text Colors
| Token | Hex | First Used | Usage Count | Justification |
|-------|-----|------------|-------------|---------------|
| text-primary | #1A1A1A | KortAI ref | 0 | Titles |
| text-secondary | #444444 | KortAI ref | 0 | Body |
| text-tertiary | #888888 | KortAI ref | 0 | Metadata |
| text-muted | #AAAAAA | KortAI ref | 0 | Supporting |
| text-inverse | #FFFFFF | validation-sprint | 0 | On dark bg |

### Background Colors
| Token | Hex | First Used | Usage Count | Justification |
|-------|-----|------------|-------------|---------------|
| bg-page | #FAFAFA | KortAI ref | 0 | Page background |
| bg-card | #FFFFFF | KortAI ref | 0 | Card backgrounds |
| bg-warm | #FEF9F5 | validation-sprint | 0 | Warm components |
| bg-dark | #1A1A1A | validation-sprint | 0 | Code blocks |
| bg-info | #F0F7FF | validation-sprint | 0 | Info callout |
| bg-tip | #F0F7F0 | validation-sprint | 0 | Tip callout |
| bg-gotcha | #FEF6F5 | validation-sprint | 0 | Gotcha callout |
| bg-reasoning | #F8F6F0 | validation-sprint | 0 | Reasoning |

### Accent Colors
| Token | Hex | First Used | Usage Count | Justification |
|-------|-----|------------|-------------|---------------|
| accent-red | #E83025 | KortAI ref | 0 | Primary accent |
| accent-blue | #4A90D9 | validation-sprint | 0 | Info semantic |
| accent-green | #4A9D6B | validation-sprint | 0 | Tip semantic |
| accent-amber | #C49052 | validation-sprint | 0 | Reasoning |
| accent-purple | #7B68EE | validation-sprint | 0 | Challenge |

### Border Colors
| Token | Hex | First Used | Usage Count | Justification |
|-------|-----|------------|-------------|---------------|
| border-light | #DDDDDD | KortAI ref | 0 | Subtle borders |
| border-medium | #CCCCCC | validation-sprint | 0 | Visible borders |

═══════════════════════════════════════════════════════════════════════════════
## SPACING TOKENS
═══════════════════════════════════════════════════════════════════════════════

| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| space-xs | 4px | KortAI ref | 0 | Tight coupling |
| space-sm | 8px | KortAI ref | 0 | Related items |
| space-md | 12px | KortAI ref | 0 | Zone gaps |
| space-base | 16px | KortAI ref | 0 | Standard spacing |
| space-lg | 20px | KortAI ref | 0 | Generous padding |
| space-xl | 24px | KortAI ref | 0 | Component padding |
| space-2xl | 32px | KortAI ref | 0 | Section breaks |
| space-3xl | 48px | KortAI ref | 0 | Page margins |

═══════════════════════════════════════════════════════════════════════════════
## CONTAINER TOKENS
═══════════════════════════════════════════════════════════════════════════════

### Border Radius
| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| radius-none | 0px | validation-sprint | 0 | Sharp corners |
| radius-sm | 4px | KortAI ref | 0 | Slight rounding |
| radius-md | 6px | KortAI ref | 0 | Standard |

### Shadows
| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| shadow-subtle | 0 2px 8px rgba(0,0,0,0.08) | KortAI ref | 0 | Card lift |
| shadow-none | none | validation-sprint | 0 | Flat |

### Borders
| Token | Value | First Used | Usage Count | Justification |
|-------|-------|------------|-------------|---------------|
| border-left-accent | 3px solid [color] | validation-sprint | 0 | Callout accent |
| border-outline | 1px solid [color] | KortAI ref | 0 | Subtle outline |

═══════════════════════════════════════════════════════════════════════════════
## TOKEN USAGE BY COMPONENT
═══════════════════════════════════════════════════════════════════════════════

This section will be populated as each component is audited.

### Code Snippet
| Category | Tokens Used |
|----------|-------------|
| Typography | (pending audit) |
| Colors | (pending audit) |
| Spacing | (pending audit) |
| Container | (pending audit) |

### Info Callout
| Category | Tokens Used |
|----------|-------------|
| Typography | (pending audit) |
| Colors | (pending audit) |
| Spacing | (pending audit) |
| Container | (pending audit) |

[... remaining components pending audit ...]

═══════════════════════════════════════════════════════════════════════════════
## NEW TOKEN REQUESTS
═══════════════════════════════════════════════════════════════════════════════

When a component requires a token not in the registry:

1. Document the need in the sub-agent analysis
2. Propose the token with justification
3. Check if an existing token could serve the purpose
4. If truly new, add with clear rationale

**No new tokens added yet.**

═══════════════════════════════════════════════════════════════════════════════
## VIOLATION LOG
═══════════════════════════════════════════════════════════════════════════════

Document any token inconsistencies discovered during audits.

| Component | Violation | Severity | Resolution |
|-----------|-----------|----------|------------|
| (none yet) | | | |

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-03
**Last Updated:** 2026-02-03
**Components Audited:** 0/11
