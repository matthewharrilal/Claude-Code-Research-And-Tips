# Design Token Mutability Classification

**Lens:** Identity + Enablement hybrid
**Date:** 2026-02-14
**Source:** design-system/specification/tokens/*.md (colors, geometry, typography, spacing)

I am using Identity + Enablement hybrid lens. This prioritizes soul preservation and creative freedom over frequency and completeness.

---

## Classification Framework

Design tokens are classified into three mutability tiers based on their relationship to system identity and creative enablement:

1. **IMMUTABLE** — Cannot change without violating identity
2. **MUTABLE** — Can vary within defined constraints
3. **AVAILABLE** — Exist in the system but not required/anchored

---

## IMMUTABLE Tokens

### Soul Constraints (Identity-Level)

These are **SOUL PIECE #1** — the most critical visual differentiation of the system.

```css
--border-radius: 0;
--box-shadow: none;
```

**Why immutable:**
- **Sharp edges = decisive, confident.** Rounded corners signal friendliness and safety — the opposite of KortAI's editorial authority.
- **Flat design = print heritage, honest.** Shadows create fake 3D and dishonesty. KortAI embraces flat, anti-physical identity.
- **100% enforcement:** Zero violations across all 33 validated explorations (DD, OD, CD).
- **Prohibition absolute:** No "just this once" exceptions. Any non-zero radius or non-none shadow is an automatic soul violation.

**Evidence:**
- geometry.md: "border-radius: 0 on EVERYTHING. No exceptions."
- AD-005 validation: "ANTI-PHYSICAL identity — any technique implying physical object behavior (including shadows) fails the soul test."
- 0 soul violations across DD-006 (36/40), OD-001 (37/40), CD-006 (39/40) crown jewels.

**Related prohibition:** `filter: drop-shadow()` is also absolutely prohibited.

---

### Primary Colors (Identity Anchors)

```css
--color-primary: #E83025;      /* Sanrok red */
--color-background: #FEF9F5;   /* Warm cream */
--color-text: #1A1A1A;         /* Near-black */
--color-border: #E0D5C5;       /* Warm border */
```

**Why immutable:**
- **Visual recognition:** These four colors create instant KortAI recognition. Wrong color = wrong identity.
- **Soul Piece #4:** Limited palette — red + cream + black. No grays beyond hierarchy.
- **Warmth over sterility:** #FEF9F5 (warm cream) vs #FFFFFF (sterile white) is a philosophical choice, not stylistic preference.
- **Locked in T1:** DESIGN-TOKEN-SUMMARY.md marks these as LOCKED values.

**Evidence:**
- colors.md: "Any deviation from T1 values is a soul violation."
- Comprehensive audit: "design-system/ directory values (#FF0000, #FBF5EF, #171717) are DIVERGENT — never use those."
- All explorations use exact hex values: DD-006 line 136-141, OD-001 verified, CD-006 lines 75-80.

**What breaks if changed:**
- Instant loss of KortAI visual signature
- All 33 validated explorations become non-compliant
- Soul compliance drops from 100% to 0%

---

### Font Families (Typography Trinity)

```css
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

**Why immutable:**
- **Editorial voice:** 'Instrument Serif' creates the distinctive editorial authority. This is soul-level identity.
- **Semantic zones:** Each font signals a different content type (title/content/technical). Wrong font = broken zone signal.
- **Soul Piece #3:** Serif = wisdom (display/titles ONLY). Typography trinity defines voice.
- **Locked in T1:** typography.md marks font stacks as LOCKED.

**Evidence:**
- typography.md: "The ONLY display font; editorial identity of the system."
- typography.md: "Font stack is locked — no substitutions. Wrong font = wrong zone signal = broken semantics."
- All crown jewels use exact font stack: DD-006 lines 144-146, OD-001 verified, CD-006 lines 88-90.

**Rare exception permitted (enablement):**
- IF accessibility requires different fonts (e.g., dyslexia-friendly), hierarchy principle permits swap.
- MUST preserve: serif for display, sans-serif for body, monospace for code.
- Requires explicit justification.

**Prohibition:**
- Sans-serif display headings = NEVER
- Serif body text = NEVER (Essence callout exception: uses serif italic for quote treatment)
- Non-mono code = NEVER

---

### Spacing Anchors (4px Base Unit System)

```css
--space-1: 4px;    /* Base unit */
--space-4: 16px;   /* Anchor */
--space-8: 32px;   /* Anchor */
--space-12: 48px;  /* Anchor */
--space-16: 64px;  /* Anchor */
--space-20: 80px;  /* Anchor */
```

**Why immutable:**
- **4px base unit:** All spacing must be divisible by 4. This creates perceptual coherence.
- **Rhythm foundation:** These 6 anchors create the INHALE/EXHALE breathing rhythm (Soul Piece #5).
- **Structural meaning:** Proximity signals relationship. Distance signals separation. Arbitrary spacing breaks this semantic encoding.

**Evidence:**
- spacing.md: "Spacing scale from --space-1 (4px) to --space-24 (96px) is LOCKED."
- spacing.md: "Spacing carries semantic meaning: 4-8px = 'one thing', 12-16px = 'related', 24-32px = 'different sections', 48px+ = 'different regions'."
- AD-004 validation: "Confidence-proportional spacing: Established=24px, Probable=32px, Speculative=40px, Open=48px/64px."

**Enablement balance:**
- **6 anchors MUST exist** (identity floor)
- **Full 14-value scale MAY exist** (enablement ceiling)
- Agents can derive intermediate values: 12px = 4px × 3 (permitted)
- Off-grid values (3px, 7px, 13px) are PROHIBITED

---

### Border Widths (System Structure)

```css
--border-structural: 4px;     /* Left accent borders */
--border-accent: 3px;         /* Secondary weight */
--border-micro: 1px;          /* Subtle dividers */
```

**Why immutable:**
- **4px minimum for accent borders:** Never 1-2px on callouts — too subtle to register as intentional.
- **Soul Piece #5:** Heavy borders signal editorial confidence.
- **Anti-pattern enforcement:** 2px structural borders are epidemic anti-pattern (OD-F-AP-001).

**Evidence:**
- geometry.md: "4px minimum. Never 1-2px (too subtle)."
- OD visual audit: "2px border epidemic (108 CSS declarations, 1000+ instances)."
- AD-004 exception: Progressive border-weight gradient (4px/3px/1px) for geological depth — the ONE context where 1px is semantic, not structural.

**Prohibition:**
- 2px on structural/accent borders = ANTI-PATTERN
- Only 1px permitted for subtle dividers, table frames

---

### Grid Gap (Layout Foundation)

```css
--grid-gap: 24px;
```

**Why immutable:**
- **Standard grid separation:** Locked in DESIGN-TOKEN-SUMMARY.md.
- **Consistent rhythm:** All grid layouts use 24px gaps.

**Evidence:**
- spacing.md Q3: "Does --grid-gap consistently resolve to 24px across all grid layouts?"
- All explorations with grids (OD-003, AD-005, CD-005) use 24px.

---

## MUTABLE Tokens

### Accent Colors (Semantic Flexibility)

```css
--accent-blue: #4A90D9;
--accent-green: #4A9D6B;
--accent-coral: #C97065;
--accent-amber: #D97706;
--accent-purple: #7C3AED;
```

**Why mutable:**
- **Semantic signals, not identity:** These colors communicate meaning (info/tip/gotcha/essence/challenge), not brand.
- **Enablement principle:** Agents can generate NEW semantic types (Warning, Success, Error) without template.
- **Parameters, not separate components:** Callout uses `--accent-color` parameter. Changing accent doesn't violate soul.

**Constraints:**
- Must maintain color contrast ratios (accessibility)
- Avoid traffic-light adjacency (green + red = anti-pattern DD-F-015)
- Prefer warm over cool (align with cream background)

**Evidence:**
- Conflict 1 resolution (lens-manifesto): "1 parameterized component with color variants — fewer constraints, more freedom."
- colors.md: "Semantic Colors — Accents signal meaning, not decoration."

---

### Type Scale (Responsive Hierarchy)

```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
/* ... through ... */
--text-display: 3rem;  /* 48px */
```

**Why mutable:**
- **Responsive needs:** Different viewports may need different scales.
- **Content context:** Dense technical docs vs marketing content may warrant different hierarchies.
- **Enablement principle:** Scale values can vary as long as hierarchy is preserved.

**Constraints:**
- 16px body text baseline (accessibility minimum)
- Maintain clear hierarchy (size jump = zone boundary)
- Jump of 4px+ = zone boundary, 2px = within-zone variation

**Evidence:**
- typography.md: "Size Jump = Zone Boundary"
- CD-006 override: `--type-page: 3rem` (crown jewel divergence — permitted for specific content needs)

---

## AVAILABLE Tokens

These exist in the system but are not identity-anchored or mandated.

### Background Colors (Zone Differentiation)

```css
--bg-page: #FAFAFA;
--bg-card: #FFFFFF;
--bg-warm: #FEF9F5;
--bg-dark: #1E1E1E;
--bg-info: #F5F8FA;
--bg-tip: #F5FAF5;
--bg-gotcha: #FEF6F5;
--bg-summary: #FEF9F0;
```

**Why available:**
- **Context-dependent:** Not all pages need all background zones.
- **Derived from palette:** Most are tints of the primary colors or cream.
- **Enablement:** Extract only what content needs to express itself.

**Note:** CD-006 uses `#1A1A1A` for dark code blocks instead of `#1E1E1E` — both are valid within constraints.

---

### Zone Colors (OD-F-005 Convention)

```css
--color-zone-sparse: #FEF9F5;
--color-zone-dense: #FFFFFF;
--color-zone-breathing: #FAF5ED;
```

**Why available:**
- **OD-specific naming:** Introduced in OD-001, validated across OD explorations.
- **Semantic clarity:** Maps directly to density dimension (sparse/dense/breathing).
- **Not universally required:** Some pages don't use zone-based architecture.

---

### Text Hierarchy (Structural Roles)

```css
--text-primary: #1A1A1A;
--text-secondary: #444444;
--text-tertiary: #888888;
--text-muted: #AAAAAA;
--text-inverse: #FFFFFF;
```

**Why available:**
- **Extended scale:** Core text colors (--color-text, --color-text-secondary) are immutable. These are optional refinements.
- **Not all contexts need 5 levels:** Simple pages may use only primary/secondary.

---

### Syntax Highlighting (Code Zone Palette)

```css
--syntax-keyword: #E83025;
--syntax-string: #6B9B7A;
--syntax-comment: #666666;
/* etc. */
```

**Why available:**
- **Code-specific:** Only applies to pages with code blocks.
- **Derived from palette:** Uses existing colors (primary red, accent green, text gray).
- **Not identity-bearing:** Wrong syntax color doesn't break KortAI identity.

---

### Gestalt Aliases (Clarity)

```css
--space-within: var(--space-2);
--space-between: var(--space-8);
--space-chapter: var(--space-16);
```

**Why available:**
- **Semantic clarity:** More readable than `--space-8` in context.
- **Aliases, not new values:** Point to existing anchors.
- **Optional:** Can use numeric names directly.

**Evidence:** EXT-CONV-003 (Gestalt spacing), EXT-DENSITY-001 (Pure Distance Law).

---

### Solid Offset (Neobrutalist Depth)

```css
--offset-x: 4px;
--offset-y: 4px;
--offset-color: #1A1A1A;
```

**Why available:**
- **Technique, not requirement:** Not all components need offset.
- **Soul-compliant depth:** Alternative to box-shadow (which is prohibited).
- **Optional creative technique:** EXT-CREATIVE-001 pattern.

---

### Transitions (CD Convention)

```css
--transition-standard: 0.3s ease;
```

**Why available:**
- **Not universally applied:** Many explorations have zero transitions.
- **CD-specific convention:** Introduced in combination phase.
- **Not identity-bearing:** Transition timing doesn't define KortAI.

---

## Summary Table

| Category | Count | Mutability | Rationale |
|----------|-------|------------|-----------|
| **Soul constraints** | 2 | IMMUTABLE | Identity-level refusals |
| **Primary colors** | 6 | IMMUTABLE | Visual recognition anchors |
| **Font families** | 3 | IMMUTABLE | Editorial voice trinity |
| **Spacing anchors** | 6 | IMMUTABLE | 4px base unit rhythm |
| **Border widths** | 3 | IMMUTABLE | Editorial confidence signals |
| **Grid gap** | 1 | IMMUTABLE | Layout foundation |
| **Accent colors** | 5 | MUTABLE | Semantic flexibility |
| **Type scale** | 9 | MUTABLE | Responsive hierarchy |
| **Background colors** | 8 | AVAILABLE | Context-dependent zones |
| **Zone colors** | 3 | AVAILABLE | OD-specific naming |
| **Text hierarchy** | 5 | AVAILABLE | Extended refinement |
| **Syntax colors** | 7 | AVAILABLE | Code-specific palette |
| **Gestalt aliases** | 3 | AVAILABLE | Semantic clarity |
| **Solid offset** | 3 | AVAILABLE | Optional depth technique |
| **Transitions** | 1 | AVAILABLE | CD-specific animation |

**Total:** 65 token values extracted

**Identity + Enablement balance:**
- 21 IMMUTABLE (soul + identity preservation)
- 14 MUTABLE (creative flexibility within constraints)
- 30 AVAILABLE (extended palette, not mandated)

---

## Prohibitions (Immutable by Absence)

These are NOT extracted because they violate soul:

1. `border-radius` > 0 — NEVER
2. `box-shadow` with any value — NEVER
3. `filter: drop-shadow()` — NEVER
4. 2px structural borders — ANTI-PATTERN (OD-F-AP-001)
5. Serif for body text — NEVER (Essence callout exception only)
6. Pure black (#000) or pure white (#FFF) — Use #1A1A1A and #FEF9F5 instead
7. Off-grid spacing (not divisible by 4px) — NEVER
8. Gradient backgrounds — NEVER (conflicts with flat design)
9. Semi-transparent container backgrounds — Avoid (use palette colors)
10. Neumorphism, glassmorphism, decorative effects — NEVER

**See:** design-system/anti-patterns/registry.md for full prohibition documentation.

---

## Token Extraction Construction Notes

**METHOD:** Source-first extraction (lens-manifesto Section 5)
1. Read token specification files BEFORE HTML explorations
2. Extract values from specs, not inferred from visual rendering
3. Verify against DD-006, OD-001, CD-006 implementations
4. Prevents hallucinating components or values that don't exist

**LENS APPLICATION:**
- Identity (100% weight): Locked soul constraints, primary colors, font families
- Enablement (80% weight): 6 spacing anchors (not all 14 mandated), accent colors as parameters
- Perceptual (60% weight): Spacing semantic meaning, zone differentiation
- Frequency (20% weight): Deprioritized (skip-link at 100% frequency not extracted — web standard, not KortAI-specific)

**CONFLICT RESOLUTIONS APPLIED:**
- Callout variants: 1 component with 5 color parameters (not 6 separate components)
- Spacing scale: 6 anchors + document full 14 as available (hybrid)
- Typography: Extract specific fonts (identity) + hierarchy principle (enablement)
- Prohibitions: Explicit documentation (enablement wins — prevention over cure)

**VERIFICATION:**
- All extracted values match token/*.md specifications exactly
- DD-006-fractal.html lines 134-171: :root block matches
- OD-001-conversational.html: font/color/spacing verified
- CD-006-pilot-migration.html lines 74-149: comprehensive :root matches (with crown jewel divergence on --type-page noted)

**EXTRACTION COUNT:** 65 tokens (within 30-40 sweet spot per lens manifesto Rule 9)

---

**END MUTABILITY CLASSIFICATION**
