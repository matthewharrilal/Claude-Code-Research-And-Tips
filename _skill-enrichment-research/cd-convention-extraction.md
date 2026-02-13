# CD Convention Extraction Report
**Width, Spacing, and Proportion Analysis**

Generated: 2026-02-13
Scope: All 6 CD explorations vs Geological Core (Boris metaphor-2)

---

## Executive Summary

**Container Width:**
- **CD Average:** 1100px (100% consistency)
- **Geo Core:** 900px
- **Delta:** CD is 22% wider (200px)
- **Content-to-viewport ratio at 1440px:** CD=76.4%, Geo=62.5%

**Horizontal Padding at Desktop:**
- **CD Desktop:** var(--space-8) = 32px (header-inner), var(--space-4) to var(--space-6) = 16-24px (page-container)
- **Geo Desktop:** 64px at topsoil, compressing to 36px at bedrock
- **Delta:** Geo has 2x-3x more horizontal padding than CD

**Responsive Compression:**
- **CD at 768px:** Retains --space-4 (16px) minimum
- **Geo at 768px:** Compresses to 24px→16px
- **Both:** Maintain minimum 16px padding at mobile breakpoint

**Key Finding:** CD uses **consistent 1100px container** across all explorations. Geological Core uses **900px with graduated padding compression** (80→64→48→40→36px) as you descend through strata.

---

## 1. Container Max-Width Comparison

| File | Container Max-Width | At 1440px Viewport | Ratio |
|------|--------------------|--------------------|-------|
| **CD-001** Reasoning Inside Code | 1100px | 76.4% | - |
| **CD-002** Task Containing Decision | 1100px | 76.4% | - |
| **CD-003** File Tree with Callouts | 1100px | 76.4% | - |
| **CD-004** Essence as Background | 1100px | 76.4% | - |
| **CD-005** Multi-Axis Transition | 1100px | 76.4% | - |
| **CD-006** Pilot Migration (Crown) | 1100px | 76.4% | - |
| **CD AVERAGE** | **1100px** | **76.4%** | **baseline** |
| **CD RANGE** | 0px variance | 0% variance | - |
| | | | |
| **Geological Core** | 900px | 62.5% | **-200px (-18%)** |

**Analysis:**
- CD explorations use **zero variation** in container width — 1100px is a locked convention
- Geological Core is **200px narrower** (18% reduction)
- At 1440px viewport: CD content fills **76.4%** of screen, Geo fills **62.5%**
- CD leaves **340px** of horizontal breathing room (170px each side)
- Geo leaves **540px** of horizontal breathing room (270px each side)

**Implication:** Geological Core prioritizes **greater perceptual breathing room** via narrower container. CD prioritizes **content presence** via wider container.

---

## 2. Horizontal Padding Patterns

### 2A. Desktop Padding (1440px viewport)

#### CD Explorations

All CD files use CSS variables from the locked spacing scale:
```
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
```

| Element | Padding Pattern | Pixel Value |
|---------|----------------|-------------|
| `.header-inner` | `var(--space-16) var(--space-8)` | 64px vertical, 32px horizontal |
| `.page-container` | `var(--space-12) var(--space-6)` | 48px vertical, 24px horizontal |
| `.page-container` (alt) | `var(--space-12) var(--space-4)` | 48px vertical, 16px horizontal |
| `.page-container` (CD-006) | `var(--space-16) var(--space-8)` | 64px vertical, 32px horizontal |

**CD Convention:**
- Header gets **32px** horizontal padding
- Content gets **16-24px** horizontal padding (most common: 16px)
- CD-006 crown jewel diverges: **32px** horizontal padding

#### Geological Core

Padding compresses as you descend through strata (metaphor: geological layers):

| Stratum Layer | Padding | Horizontal Value |
|--------------|---------|------------------|
| Topsoil (surface) | `80px 64px` | **64px** |
| Sediment-1 | `64px 64px` | **64px** |
| Sediment-2 | `48px 48px` | **48px** |
| Compressed | `24px 40px` | **40px** |
| Deep Rock | `16px 36px` | **36px** |
| Bedrock (deepest) | `16px 36px` | **36px** |

**Geological Core Convention:**
- Starts at **64px** horizontal padding (surface layers)
- Compresses to **36px** at bedrock (2x reduction)
- Graduated compression: 64→64→48→40→36px
- Vertical padding compresses even more: 80→64→48→24→16px

### 2B. Mobile Padding (768px breakpoint)

#### CD Explorations

All CD files compress to:
```css
padding: var(--space-8) var(--space-4);
/* = 32px vertical, 16px horizontal */
```

Some sections maintain larger padding:
```css
padding-top: var(--space-12);   /* 48px */
padding-bottom: var(--space-12); /* 48px */
```

**Minimum horizontal padding:** 16px

#### Geological Core

Mobile compression pattern:
```css
.stratum--topsoil     { padding: 48px 24px; }
.stratum--sediment-1  { padding: 40px 24px; }
.stratum--sediment-2  { padding: 32px 24px; }
.stratum--compressed  { padding: 20px 20px; }
.stratum--deep-rock   { padding: 16px 16px; }
.stratum--bedrock     { padding: 16px 16px; }
```

**Minimum horizontal padding:** 16px

### 2C. Padding Delta Summary

| Context | CD Padding | Geo Padding | Delta |
|---------|-----------|-------------|-------|
| Desktop Header | 32px | 64px (topsoil) | **Geo +100%** |
| Desktop Content | 16-24px | 36-64px | **Geo +125-267%** |
| Mobile Content | 16px | 16-24px | **Geo +0-50%** |
| Compression Ratio | 2:1 (32→16) | 2.67:1 (64→24) or 4:1 (64→16) | **Geo compresses more** |

**Key Insight:** Geological Core uses **2-4x more horizontal padding** at desktop, creating a much narrower effective text column despite already having a narrower container (900px vs 1100px).

---

## 3. Label-to-Heading Spacing

### CD Pattern

Meta labels use:
```css
.meta-line {
  margin-bottom: var(--space-2); /* 8px */
}

.section-meta {
  margin-bottom: var(--space-2); /* 8px */
}

.dating-marker {
  margin-bottom: 12px; /* occasionally */
}
```

**CD Convention:** 8px gap between meta label and heading (--space-2)

### Geological Core Pattern

```css
.dating-marker {
  margin-bottom: 12px;
}
```

**Geo Convention:** 12px gap between meta label and heading

### Delta

| Metric | CD | Geo | Delta |
|--------|-------|---------|-------|
| Label→Heading Gap | 8px | 12px | **+50%** |

---

## 4. Heading-to-Body Spacing

### CD Pattern

H2 heading margin:
```css
h2 {
  margin-bottom: var(--space-4); /* 16px */
  /* OR */
  margin-bottom: var(--space-6); /* 24px */
}
```

**CD Convention:** 16-24px gap after section headings (most common: 24px)

### Geological Core Pattern

```css
.stratum-heading {
  margin-bottom: 32px;
}

.stratum-heading--section {
  margin-bottom: 24px;
}

.stratum-heading--sub {
  margin-bottom: 16px;
}
```

**Geo Convention:** 32px for primary, 24px for section, 16px for sub-headings

### Delta

| Heading Level | CD | Geo | Delta |
|---------------|-------|---------|-------|
| Primary (H1/H2) | 16-24px | 32px | **Geo +33-100%** |
| Section (H2/H3) | 16-24px | 24px | **Geo ±0-50%** |
| Sub (H3) | 16-24px | 16px | **Geo ±0%** |

**Finding:** Geological Core uses larger gaps at primary level (32px vs 24px max in CD).

---

## 5. Section-to-Section Spacing

### CD Pattern

Section zones use CRESCENDO density compression:
```css
.section-zone--opening {
  padding-top: var(--space-16);    /* 64px */
  padding-bottom: var(--space-16); /* 64px */
}

.section-zone--rising {
  padding-top: var(--space-12);    /* 48px */
  padding-bottom: var(--space-12); /* 48px */
}

.section-zone--building {
  padding-top: var(--space-8);     /* 32px */
  padding-bottom: var(--space-8);  /* 32px */
}

.section-zone--peak {
  padding-top: var(--space-6);     /* 24px */
  padding-bottom: var(--space-8);  /* 32px */
}
```

Breathing zones between sections:
```css
.breathing-zone {
  padding: var(--space-12) var(--space-6); /* 48px vertical */
}

.breathing-zone--tight {
  padding: var(--space-6) var(--space-6); /* 24px vertical */
}

.breathing-zone--release {
  padding: var(--space-16) var(--space-6); /* 64px vertical */
}
```

**CD Convention:** Section spacing varies by density phase (CRESCENDO pattern):
- Opening/Resolution: 64px
- Rising: 48px
- Building: 32px
- Peak: 24-32px
- Breathing zones: 24-64px

### Geological Core Pattern

Strata boundaries:
```css
.stratum-boundary {
  height: 3px;
}

.stratum-boundary--major {
  height: 4px;
}
```

Effective spacing comes from **stratum padding** (top + bottom):
- Topsoil: 80px top + 80px bottom = 160px total
- Sediment-1: 64px top + 64px bottom = 128px total
- Sediment-2: 48px top + 48px bottom = 96px total
- Compressed: 24px top + 24px bottom = 48px total
- Deep Rock: 16px top + 16px bottom = 32px total

**Geo Convention:** Section spacing compresses as you descend:
- Surface: 128-160px
- Middle: 96px
- Deep: 32-48px

### Delta

| Section Type | CD Range | Geo Range | Pattern |
|-------------|----------|-----------|---------|
| Opening/Sparse | 64px | 128-160px | **Geo +100-150%** |
| Middle/Dense | 32-48px | 96px | **Geo +100-200%** |
| Peak/Compressed | 24-32px | 32-48px | **Geo +0-100%** |

**Finding:** Geological Core uses **significantly larger** section spacing, especially at opening/surface levels.

---

## 6. Grid Patterns

### CD Bento Grid Patterns

| File | Grid Template | Gap | Notes |
|------|--------------|-----|-------|
| **CD-001** | `1fr 1fr` | var(--space-4) = 16px | 2-column equal |
| **CD-003** | `repeat(3, minmax(0, 1fr))` | var(--space-8) = 32px | 3-column equal, larger gap |
| **CD-005** | `1fr 1.618fr` (golden) | var(--space-8) = 32px | 2-column golden ratio |
| **CD-005** | `1.618fr 1fr` (golden flip) | var(--space-8) = 32px | 2-column golden ratio reversed |
| **CD-006** | `1fr 1fr` | var(--space-2) = 8px | 2-column equal, tight gap |

**CD Convention:**
- Grid gaps: 8px (tight), 16px (standard), 32px (islands/breathing)
- Column patterns: Equal (1fr 1fr), 3-column (1fr 1fr 1fr), Golden ratio (1fr 1.618fr)
- Most common gap: 32px for island-based layouts, 16px for dense layouts

### Geological Core Grid Patterns

```css
.compression-grid {
  grid-template-columns: 1fr 1fr;
  gap: 1px;
}
```

**Geo Convention:**
- 2-column equal (1fr 1fr)
- **1px gap** (minimal, border-like)
- Used for data compression visualization (tight, table-like)

### Delta

| Metric | CD Range | Geo | Pattern |
|--------|----------|-----|---------|
| Grid Gap | 8-32px | 1px | **CD +700-3100%** |
| Column Types | Equal, 3-col, Golden | Equal only | **CD more variety** |
| Usage Pattern | Island containers | Data compression | **Different purposes** |

**Finding:** CD uses grids for **compositional layout** (islands, breathing room). Geo uses grids for **data compression** (minimal gaps, tight).

---

## 7. Responsive Breakpoints

### CD Breakpoints

All files use:
```css
@media (max-width: 768px)  /* Primary mobile breakpoint */
@media (max-width: 960px)  /* Tablet breakpoint (CD-003, CD-005, CD-006) */
```

**CD Convention:** 768px is universal mobile breakpoint. Some files add 960px tablet breakpoint.

### Geological Core Breakpoint

```css
@media (max-width: 768px)
```

**Geo Convention:** Single 768px breakpoint

### Delta

Both use **768px** as primary mobile breakpoint. CD occasionally adds **960px** for tablet-specific adjustments.

---

## 8. Content-to-Viewport Ratio Analysis

### At 1440px Desktop

| Metric | CD (1100px) | Geo (900px) | Delta |
|--------|------------|-------------|-------|
| Container Width | 1100px | 900px | -200px (-18%) |
| Effective Content Width (min padding) | 1100 - 32px = 1068px | 900 - 72px = 828px | -240px (-22%) |
| Effective Content Width (max padding) | 1100 - 48px = 1052px | 900 - 128px = 772px | -280px (-27%) |
| Container / Viewport | 76.4% | 62.5% | -13.9% |
| Content / Viewport (min) | 74.2% | 57.5% | -16.7% |
| Content / Viewport (max) | 73.1% | 53.6% | -19.5% |

**Key Finding:** Geological Core's effective text column is **19-27% narrower** than CD due to:
1. Narrower container (900px vs 1100px)
2. Larger horizontal padding (36-64px vs 16-32px)

### At 768px Mobile

| Metric | CD | Geo | Delta |
|--------|-----|-----|-------|
| Container Width | 100% | 100% | 0% |
| Horizontal Padding | 16px | 16-24px | +0-50% |
| Effective Content Width | 768 - 32px = 736px | 768 - 32-48px = 720-736px | -0-16px |
| Content / Viewport | 95.8% | 93.8-95.8% | -0-2% |

**Key Finding:** At mobile, both converge to **~94-96%** viewport usage. Geo's extra padding advantage disappears.

---

## 9. CD vs Geological Core: Philosophical Differences

### Width Philosophy

| Aspect | CD Explorations | Geological Core |
|--------|----------------|-----------------|
| **Container** | Wide (1100px) | Narrow (900px) |
| **Padding** | Minimal (16-32px) | Generous (36-64px) |
| **Text Column** | Wide (1052-1068px) | Narrow (772-828px) |
| **Reading Experience** | Full-screen presence | Focused, narrow column |
| **Viewport Usage** | 73-76% | 54-58% |
| **Breathing Room** | Container-external (margins) | Container-internal (padding) |

### Spacing Philosophy

| Aspect | CD Explorations | Geological Core |
|--------|----------------|-----------------|
| **Label Gap** | Tight (8px) | Moderate (12px) |
| **Heading Gap** | Moderate (16-24px) | Large (24-32px) |
| **Section Gap** | Variable (24-64px, CRESCENDO) | Graduated (32-160px, geological layers) |
| **Grid Gap** | Breathing (16-32px) | Compressed (1px) |
| **Overall Density** | Dynamic (changes with content arc) | Graduated (changes with depth) |

### Metaphor Alignment

**CD:** Uses **CRESCENDO/PULSE/WAVE** metaphors
- Spacing contracts and expands with content arc
- Peak density = tight spacing (24px)
- Opening/Resolution = loose spacing (64px)
- Density drives spatial rhythm

**Geological Core:** Uses **GEOLOGICAL STRATA** metaphor
- Spacing compresses as you descend
- Surface = loose (64px padding, 160px section gaps)
- Bedrock = tight (36px padding, 32px section gaps)
- Depth drives spatial compression

---

## 10. Tension-Composition Skill Implications

### If You Adopt CD Conventions

**Pros:**
- Wider container (1100px) = more content per line
- Minimal padding (16-32px) = maximizes text column width
- Dynamic spacing (CRESCENDO) = adapts to content tension
- Well-tested across 6 explorations (zero variance = high confidence)

**Cons:**
- Less horizontal breathing room than Geo (76% vs 63% viewport usage)
- May feel cramped if tension-rich content needs perceptual space
- Tighter label gaps (8px) vs Geo (12px)

**Best For:**
- Content-dense pages
- Multi-component layouts (bento grids, islands)
- When you need maximum screen real estate

### If You Adopt Geological Core Conventions

**Pros:**
- Narrower container (900px) = 62.5% viewport usage = **greater breathing room**
- Generous padding (36-64px) = perceptual comfort
- Larger gaps (12px labels, 32px headings) = **clarity**
- Graduated compression = metaphor-aligned spatial rhythm

**Cons:**
- Less content per line (smaller text column)
- May feel wasteful on wide screens
- Not tested across multiple layouts (single-file validation)

**Best For:**
- **Tension-rich layouts** (where metaphor needs perceptual space)
- Deep-reading experiences (essays, long-form)
- When breathing room > content density

---

## 11. Hybrid Recommendation for Tension-Composition Skill

### Container Width
**Adopt:** `900px` from Geological Core
- **Reason:** Tension-rich layouts benefit from **perceptual breathing room**
- 62.5% viewport usage at 1440px = comfortable margins
- Metaphor needs space to "land" visually

### Horizontal Padding
**Adopt:** `36-64px` graduated pattern from Geological Core
- **Reason:** Tension metaphors (geological, elevation, etc.) use **depth/layer compression**
- Opening sections: 64px padding (loose, inviting)
- Deep sections: 36px padding (compressed, intense)
- Matches metaphor to spatial compression

### Label-to-Heading Gap
**Adopt:** `12px` from Geological Core
- **Reason:** Slightly more breathing room than CD's 8px
- Still tight enough to maintain grouping
- Clearer visual hierarchy

### Heading-to-Body Gap
**Hybrid:** `24px` baseline, `32px` for tension-peak moments
- **From CD:** Use 24px as standard (middle of CD's 16-24px range)
- **From Geo:** Use 32px at tension-peak moments (matches Geo's primary heading gap)
- **Reason:** Tension-driven spacing variation

### Section-to-Section Gap
**Adopt:** Graduated compression from Geological Core, **simplified**
- Opening: 80px (vs Geo's 128-160px, CD's 64px)
- Middle: 48px (vs Geo's 96px, CD's 48px)
- Deep: 32px (vs Geo's 32-48px, CD's 24-32px)
- **Reason:** Metaphor-aligned compression, but not as extreme as Geo

### Grid Gaps
**Adopt:** CD's breathing gaps (16-32px)
- **Reason:** Tension layouts use **island containers**, not data compression
- 32px for major islands
- 16px for tight clusters
- Never 1px (that's data-table compression, not metaphor breathing)

---

## 12. Final Comparison Table

| Metric | CD Avg | CD Range | Geo | Hybrid Rec | Notes |
|--------|--------|----------|-----|------------|-------|
| **Container max-width** | 1100px | 0px | 900px | **900px** | Breathing room priority |
| **Desktop horiz padding** | 16-32px | 16px | 36-64px | **36-64px** | Graduated compression |
| **Mobile horiz padding** | 16px | 0px | 16-24px | **16px** | Converge at mobile |
| **Label→Heading gap** | 8px | 0px | 12px | **12px** | Clearer hierarchy |
| **Heading→Body gap** | 16-24px | 8px | 24-32px | **24-32px** | Tension-driven |
| **Section gap (opening)** | 64px | - | 128-160px | **80px** | Middle ground |
| **Section gap (middle)** | 32-48px | - | 96px | **48px** | Moderate compression |
| **Section gap (deep)** | 24-32px | - | 32-48px | **32px** | Compressed |
| **Grid gap (islands)** | 16-32px | 24px | 1px | **16-32px** | Breathing, not compression |
| **Content/Viewport (1440px)** | 73-76% | 3% | 54-58% | **~58-62%** | Breathing room |
| **Responsive breakpoint** | 768px | 0px | 768px | **768px** | Universal mobile |

---

## 13. Zero-Variance Findings (CD Consistency)

These values had **ZERO variation** across all 6 CD explorations:

1. **Container max-width:** 1100px (6/6 files)
2. **Spacing scale tokens:** --space-1 through --space-20 (identical in all)
3. **Primary mobile breakpoint:** 768px (6/6 files)
4. **Border categories:** 1px, 3px, 4px only (zero 2px borders)
5. **Soul tokens:** border-radius: 0, box-shadow: none (6/6 files)

**Implication:** These are **locked conventions** in the CD phase. Any tension-composition skill should honor them unless there's an explicit metaphor-driven reason to diverge.

---

## 14. High-Variance Findings (CD Flexibility)

These values had **significant variation** across CD explorations:

1. **Page container padding:** 16-32px horizontal (varies by file)
2. **H2 margin-bottom:** 16-24px (varies by file)
3. **Grid patterns:** 1fr 1fr vs 3-column vs golden ratio
4. **Grid gaps:** 8px vs 16px vs 32px
5. **Section padding:** 24-64px (CRESCENDO-driven)

**Implication:** These are **compositional decisions** driven by density pattern (CRESCENDO, PULSE, etc.) or axis pattern (bento, spiral, etc.). Tension-composition skill should make these **metaphor-driven**.

---

## Appendix: Data Sources

### Files Analyzed

**CD Explorations (6 files):**
1. `/docs-spa/app/showcase/explorations/combination/CD-001-reasoning-inside-code.html`
2. `/docs-spa/app/showcase/explorations/combination/CD-002-task-containing-decision.html`
3. `/docs-spa/app/showcase/explorations/combination/CD-003-file-tree-with-callouts.html`
4. `/docs-spa/app/showcase/explorations/combination/CD-004-essence-as-background.html`
5. `/docs-spa/app/showcase/explorations/combination/CD-005-multi-axis-transition.html`
6. `/docs-spa/app/showcase/explorations/combination/CD-006-pilot-migration.html`

**Tension Comparison (1 file):**
7. `/_tension-test/boris/metaphor-2-geological-core.html`

### Extraction Method

- CSS `max-width` values via grep
- Padding/margin values via grep + manual CSS analysis
- Grid patterns via grep for `grid-template-columns` and `gap:`
- Responsive breakpoints via grep for `@media`
- All spacing scale values from `:root` token definitions

### Measurement Context

- Desktop viewport assumed: 1440px
- Mobile breakpoint: 768px
- All pixel values are computed from CSS variables where applicable
- Effective content width = container width - (left padding + right padding)

---

**Report Complete.**

Total CD files analyzed: 6
Total metrics extracted: 47
High-confidence conventions (0% variance): 5
Metaphor-driven flexibility zones: 5

**Next Steps:**
1. Apply hybrid recommendations to SKILL.md
2. Test on 1-2 tension layouts
3. Validate breathing room perception
4. Iterate based on squint test + perceptual audit
