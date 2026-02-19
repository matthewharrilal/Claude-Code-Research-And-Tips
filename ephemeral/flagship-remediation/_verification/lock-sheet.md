# PA Lock Sheet — Flagship Remediation Audit

**Purpose:** Quick reference for perceptual auditors. Binary pass/fail for every check.
**Date:** 2026-02-18
**Source files:** prohibitions.md, tokens.css, semantic-rules.md

---

## 1. Soul Constraints (Absolute — Zero Exceptions)

| Property | Required Value | FAIL if |
|----------|---------------|---------|
| border-radius | 0 everywhere | Any element has border-radius > 0 |
| box-shadow | none everywhere | Any element has any box-shadow |
| filter: drop-shadow() | FORBIDDEN | Any element has drop-shadow filter |
| opacity on containers | 1.0 on ALL visual elements | Any background/pseudo-element < 1.0 opacity |
| Gradients | NONE | Any linear-gradient or radial-gradient |
| Pure black | NOT #000000 | Any element uses pure #000000 |
| Pure white | NOT #FFFFFF | Any element uses pure #FFFFFF |
| Cool-toned grays | FORBIDDEN | Any #F5F5F5, #E0E0E0, or similar cool grays |
| Container width | 960px max-width | Container narrower than 940px or wider than 960px |
| h3 headings | MUST be italic | Any h3 with font-style: normal |

---

## 2. Typography (Identity Trinity — Locked)

| Role | Font | FAIL if |
|------|------|---------|
| Display / Headings (h1, h2) | Instrument Serif ONLY | Any heading uses Inter, system, or other serif |
| h3 subheadings | Instrument Serif, italic | h3 uses Inter OR is not italic |
| Body text (p, li) | Inter ONLY | Body text uses Instrument Serif (except Essence callout) |
| Code (pre, code) | JetBrains Mono ONLY | Code uses any other monospace |
| Essence callout body | Instrument Serif italic | Essence callout uses Inter for body text |

**Type scale:**
- Body base: 16px (--text-base, 1rem) — acceptable range 16-17px
- Line-height body: 1.65-1.85 — FAIL if below 1.65 or above 2.0
- h1: 2.5rem (40px)
- h2: 2rem (32px)
- h3: 1.5rem (24px)

---

## 3. Color Palette Bounds

### Primary / Background / Text (Immutable)
- `#E83025` — KortAI red (primary, gotcha callout borders)
- `#FEF9F5` — Warm cream (main background, LOCKED)
- `#1A1A1A` — Near-black (primary text, LOCKED)
- `#666666` — Muted secondary text
- `#E0D5C5` — Warm border (LOCKED)
- `#F0EBE3` — Subtle divider / border (LOCKED)

### Accent Colors (Allowed)
- `#4A90D9` — Info blue (info/note callouts)
- `#4A9D6B` — Green (tip callouts)
- `#C97065` — Coral (gotcha alternative)
- `#D97706` — Amber (essence callouts)
- `#7C3AED` — Purple (challenge callouts)

### Background Zones (Allowed)
- `#FAFAFA` — Page ground (bg-page)
- `#FFFFFF` — Elevated zones (bg-card) — allowed ONLY as zone bg, never as page bg
- `#FEF9F5` — Warm emphasis / Essence
- `#1E1E1E` — Dark code blocks (inverted)
- `#1A1A1A` — Dark inverted (CD-006 convention for code)
- `#F5F8FA` — Info semantic
- `#F5FAF5` — Tip semantic
- `#FEF6F5` — Gotcha semantic
- `#FEF9F0` — Summary/reasoning semantic
- `#FAF5ED` — Breathing/recovery zone

**FAIL if:** Any background uses a cool gray not in this list (e.g., #F5F5F5, #EBEBEB, #EAEAEA).

---

## 4. Perception Thresholds (Minimum Visible Differences)

Auditor measures COMPUTED values, not source values.

| Property | Minimum Delta | FAIL if |
|----------|--------------|---------|
| Background color (adjacent zones) | ≥10 RGB points on at least one channel | Two adjacent zones differ by <10 RGB points total |
| Letter-spacing | ≥0.025em between levels | Letter-spacing differences below 0.025em |
| Line-height | ≥0.2 difference | Two text levels have line-height within 0.2 of each other |
| Font-size | ≥2px difference | Adjacent hierarchy levels differ by <2px |
| Font-weight | Must use visible jump: 400 vs 600 (or 700) | Adjacent text uses 400 vs 500 (imperceptible) |
| Border-width | ≥1px difference per level | Hierarchy levels use same border-width |
| Margin/padding (between zones) | ≥8px difference | Spacing variants differ by <8px |

**S-09 stacking rule:** Measure TOTAL gap at section boundaries (margin-bottom of A + margin-top of B + any padding). FAIL if total exceeds 96px at any single boundary. FAIL if 2+ consecutive boundaries accumulate >192px combined.

---

## 5. Border System

| Width | Semantic Role | FAIL if |
|-------|-------------|---------|
| 4px | Callout left accent (standard) | Callout border is 1px, 2px, or 3px without documented exception |
| 3px | Secondary accent / section borders | Used as callout accent without 4px primary |
| 1px | Subtle dividers, table rules, frames | Used as callout accent |
| 2px | FORBIDDEN (epidemic pattern) | Any element uses 2px border unless OD-004 confidence encoding (must be documented) |

**Color for borders:** Use `#E0D5C5` (--color-border) or `#F0EBE3` (--color-border-subtle). FAIL if any cool-toned border color.

---

## 6. Spacing Scale (Allowed Values — 4px base unit)

```
4px   8px   12px   16px   20px   24px   32px   40px   48px   64px   80px   96px
```

**Spacing maximums:**
- Per section: ≤64px (--space-max-section)
- Per zone boundary: ≤96px per property (--space-max-zone)
- FAIL if any single margin/padding exceeds 96px

**Traffic-light adjacency:** Green (#4A9D6B) and red (#E83025) callouts must have ≥48px separation or neutral content between them.

---

## 7. Expected Structure (Binary Presence Checks)

| Element | Count | FAIL if |
|---------|-------|---------|
| Sections with aria-label | 12 | Fewer than 12 aria-labeled sections |
| Skip link | 1 | Missing skip navigation link |
| `<main>` element | 1 | No main element present |
| `role="banner"` (header) | 1 | Missing landmark |
| `role="contentinfo"` (footer) | 1 | Missing landmark |
| Callouts total | 9 | Fewer than 9 callout components |
| Dividers with `role="separator"` | 11 | Fewer than 11 dividers with role |
| Grid layouts | 3 | Missing tension-pair, sequence-grid, or hypothesis-grid |
| Section indicators | 12 | Fewer than 12 section indicator elements |
| Tables | 9 | Fewer than 9 table elements |

**Callout type distribution (9 total):** Must include info, gotcha, tip, and essence variants. FAIL if all 9 use same type.

---

## 8. Spatial / Void Checks

**Whitespace void gate (Prohibition #21):**

At 1440px viewport: scroll through in viewport-height (900px) increments.
At each position: estimate content coverage %.
- 0-1 positions below 30% content: PASS
- 2+ consecutive positions below 30%: FAIL (void pattern)

**Visual interest distribution (Prohibition #22):**

A "designed moment" = section using 3+ mechanisms at high intensity, unique treatment.
- At least 1 designed moment must appear below 50% scroll depth: PASS
- All designed moments above 50% scroll depth: FAIL

---

## 9. Prohibited Patterns (Instant Fail)

- Any element with `transform: translateY()` on hover (hover lift effect)
- Same-density stacking: two SLOW (sparse) sections adjacent without transition
- Decorative elements that carry no information
- Vertical borders inside any table
- Zebra-striping on any table (no validated instances in system)
- Gradients on any background
- Rgba transparency on any container or pseudo-element

---

## Audit Verdict Format

```
SOUL: PASS / FAIL — [specific violation or "clean"]
TYPOGRAPHY: PASS / FAIL — [specific violation or "clean"]
PALETTE: PASS / FAIL — [specific violation or "clean"]
PERCEPTION: PASS / FAIL — [specific threshold violation or "clean"]
BORDERS: PASS / FAIL — [specific violation or "clean"]
SPACING: PASS / FAIL — [specific violation or "clean"]
STRUCTURE: PASS / FAIL — [missing elements or "all present"]
VOID: PASS / FAIL — [void positions identified or "none"]
PROHIBITED: PASS / FAIL — [pattern violations or "none"]

OVERALL: SHIP / DO NOT SHIP
```
