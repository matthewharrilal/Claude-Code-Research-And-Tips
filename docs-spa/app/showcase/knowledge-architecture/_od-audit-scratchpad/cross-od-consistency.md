# Cross-OD Consistency & Soul Squint Test — Phase C Final

**Agent:** Consistency
**Date:** 2026-02-07
**Method:** Programmatic :root CSS extraction across all 6 ODs + 5px Gaussian blur squint test + integration of ALL Wave 1 + Wave 2 findings for cross-OD consistency verdict
**Scope:** Token diff (section 5) + Soul squint (section 6) + Cross-OD systemic findings integration + Contradiction resolution

---

## 1. Cross-OD Token Diff

### Locked Tokens (MUST be identical across all 6 ODs)

| Token | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 | Verdict |
|-------|--------|--------|--------|--------|--------|--------|---------|
| `--color-primary` | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 | PASS |
| `--color-background` | #FEF9F5 | #FEF9F5 | #FEF9F5 | #FEF9F5 | #FEF9F5 | #FEF9F5 | PASS |
| `--color-text` | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | PASS |
| `--color-text-secondary` | #666666 | #666666 | #666666 | #666666 | #666666 | #666666 | PASS |
| `--color-border` | #E0D5C5 | #E0D5C5 | #E0D5C5 | #E0D5C5 | #E0D5C5 | #E0D5C5 | PASS |
| `--color-border-subtle` | #F0EBE3 | #F0EBE3 | #F0EBE3 | #F0EBE3 | #F0EBE3 | #F0EBE3 | PASS |
| `--font-display` | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | PASS |
| `--font-body` | Inter | Inter | Inter | Inter | Inter | Inter | PASS |
| `--font-mono` | JetBrains Mono | JetBrains Mono | JetBrains Mono | JetBrains Mono | JetBrains Mono | JetBrains Mono | PASS |
| `--border-radius` | 0 | 0 | 0 | 0 | 0 | 0 | PASS |
| `--box-shadow` | none | none | none | none | none | none | PASS |
| `--border-left-width` | 4px | 4px | 4px | 4px | 4px | 4px | PASS |

**Locked token verdict: 12/12 PASS. Zero divergences. All 6 ODs share identical locked tokens.**

---

### Shared Non-Locked Tokens (should be consistent where present)

| Token | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 | Verdict |
|-------|--------|--------|--------|--------|--------|--------|---------|
| `--accent-blue` | #4A90D9 | #4A90D9 | MISSING | #4A90D9 | #4A90D9 | #4A90D9 | **NOTE** |
| `--accent-green` | #4A9D6B | #4A9D6B | #4A9D6B | #4A9D6B | #4A9D6B | #4A9D6B | PASS |
| `--accent-coral` | #C97065 | #C97065 | #C97065 | #C97065 | #C97065 | #C97065 | PASS |
| `--accent-amber` | #D97706 | #D97706 | #D97706 | #D97706 | #D97706 | #D97706 | PASS |
| `--accent-purple` | #7C3AED | #7C3AED | MISSING | #7C3AED | #7C3AED | #7C3AED | **NOTE** |
| `--type-page` | 2.5rem | (absent) | 2.5rem | 2.5rem | 2.5rem | **3rem** | **HIGH** |
| `--type-section` | 1.625rem | (absent) | 1.625rem | 1.625rem | 1.625rem | **2rem** | **HIGH** |
| `--type-body` | 1rem | (absent) | 1rem | 1rem | 1rem | 1rem | PASS |
| `--type-code` | 0.875rem | (absent) | 0.875rem | 0.875rem | 0.875rem | 0.875rem | PASS |
| `--type-meta` | 0.625rem | (absent) | 0.625rem | 0.625rem | 0.625rem | **0.75rem** | **HIGH** |
| `--space-within` | 8px | (absent) | (absent) | (absent) | 8px | 8px | NOTE |
| `--space-between` | 32px | (absent) | (absent) | (absent) | 32px | 32px | NOTE |
| `--space-chapter` | 64px | (absent) | (absent) | (absent) | 64px | 64px | NOTE |
| `--space-24` | 92px | 92px | **96px** | **96px** | 92px | (absent) | **HIGH** |

### Accent Token Gap in OD-003

OD-003 is missing `--accent-blue` and `--accent-purple` from its :root. It has a unique token instead:
- `--accent-tan: #B8A080` -- **This color is NOT in the locked palette.** This is a palette violation (confirmed by fresh-eyes F-E-005 cross-reference XR-5).

---

### Type Scale Divergences -- OD-006

OD-006 uses DIFFERENT type scale values than the other 5 ODs:

| Token | OD-001/003/004/005 | OD-006 | Delta |
|-------|---------------------|--------|-------|
| `--type-page` | 2.5rem (40px) | 3rem (48px) | +8px |
| `--type-section` | 1.625rem (26px) | 2rem (32px) | +6px |
| `--type-meta` | 0.625rem (10px) | 0.75rem (12px) | +2px |

This makes OD-006 headlines noticeably larger. The locked type scale from identity-brief.md section 7 specifies `--text-display: 3rem` and `--text-h2: 2rem`, so OD-006 may be using the LOCKED scale while OD-001/003/004/005 use a custom sub-scale. The locked scale says page titles = 2.5rem (40px) and display = 3rem (48px). OD-006 uses 3rem for page, exceeding the `--text-h1` specification of 2.5rem. **This is a deviation from the locked type scale.**

### Space-24 Inconsistency

`--space-24` is defined as `92px` in OD-001, OD-002, OD-005 but as `96px` in OD-003, OD-004. This is a 4px difference that could cause visible misalignment if these ODs were rendered side-by-side. Neither value appears in a locked specification, but the inconsistency across the series is a quality issue.

---

### Per-OD Unique Tokens

| OD | Unique Tokens | Purpose |
|----|---------------|---------|
| OD-001 | `--color-question-bg`, `--color-answer-bg`, `--color-chapter-bg`, `--question-width`, `--answer-width`, `--q-indent`, `--offset-x/y/color` | Q&A zone colors, TIDAL widths, solid offset |
| OD-002 | (none unique beyond shared set) | Minimal token surface |
| OD-003 | `--type-task`, `--accent-tan` | Task-specific type, **off-palette accent** |
| OD-004 | `--type-stratum`, `--stratum-established-padding`, `--stratum-probable-padding`, `--stratum-speculative-padding`, `--stratum-open-padding`, `--offset-x/y/color` | Geological strata spacing, solid offset |
| OD-005 | `--color-hub-bg`, `--color-spoke-bg`, `--color-transition-bg`, `--type-subsection`, `--offset-x/y/color` | Hub/spoke zone colors, solid offset |
| OD-006 | `--type-subsection`, `--question-width`, `--answer-width`, `--offset-x/y/color` | Mixed (reuses OD-001 Q&A tokens for Section 01), solid offset |

**Observation:** OD-001, OD-004, OD-005, OD-006 all declare `--offset-x: 4px`, `--offset-y: 4px`, `--offset-color: #1A1A1A` for solid offset pseudo-elements. OD-002 and OD-003 do NOT have these. This matches the fresh-eyes finding that OD-001/002 (Dialect A) are more polished while OD-003 lacks creative enrichments.

---

## 2. Token Divergences Summary

### CRITICAL (locked token differs): 0
No locked tokens differ across any OD. **This is the single most important finding: the soul is intact at the token level.**

### HIGH (shared token with different values): 4
1. **OD-006 type-page: 3rem vs 2.5rem** -- OD-006 uses a larger page title than the other 5 ODs, exceeding the locked `--text-h1: 2.5rem` specification.
2. **OD-006 type-section: 2rem vs 1.625rem** -- OD-006 section headings are 6px larger than all other ODs.
3. **OD-006 type-meta: 0.75rem vs 0.625rem** -- OD-006 meta text is 2px larger.
4. **space-24: 92px vs 96px** -- OD-001/002/005 use 92px; OD-003/004 use 96px. No locked spec exists for this value.

### NOTE (unique to one OD, may be intentional): 3
1. **OD-003 missing --accent-blue and --accent-purple** -- May not need them but reduces palette availability.
2. **OD-003 --accent-tan: #B8A080** -- Off-palette color. This IS a palette violation per the locked palette table.
3. **OD-002 has the fewest :root tokens** -- No type scale, no space-within/between/chapter, no offset variables. The most minimal token surface of all 6 ODs.

---

## 3. Soul Squint Test Results

### Technique 1: Programmatic 5px Gaussian Blur

Applied `filter: blur(5px)` to `document.body` on each OD and captured viewport screenshots.

### OD-001: Conversational Structure (BLUR)
| Question | Expected | Observed | Verdict |
|----------|----------|----------|---------|
| Do any elements pop forward? | NO | The dark density visualization panel creates a strong foreground/background contrast, but it is a dark *block*, not a floating element. The solid offset creates subtle depth but does not "pop" when blurred. | PASS |
| Spec sheet or blog? | Spec sheet | The structured Q&A alternation is clearly visible even blurred. The serif title, the red accents, the dark visualization block all read as deliberate specification. | PASS |
| Do callouts look like siblings? | YES | Callout borders are visible as consistent red left-edge markers. They appear as a family. | PASS |
| Code: terminal or toy? | Terminal | The dark code blocks with syntax highlighting read as real terminal output even when blurred. | PASS |
| Density rhythm visible? | YES | The alternation between light question areas and heavier answer areas is clearly visible. The PULSE rhythm survives the blur. | PASS |
| Header-to-body connected? | Connected | The header flows into the density visualization which flows into Chapter 1. No disconnection. | PASS |
| Could this be Bootstrap? | ABSOLUTELY NOT | The warm cream, red accents, serif title, dark visualization block, and Q&A structure are immediately distinctive. | PASS |
| Hurried or calm? | Calm | Generous whitespace, deliberate typography hierarchy, and rhythmic alternation create a calm reading experience. | PASS |

**OD-001 Squint Verdict: 8/8 PASS**

### OD-002: Narrative Arc Structure (BLUR)
| Question | Expected | Observed | Verdict |
|----------|----------|----------|---------|
| Do any elements pop forward? | NO | No elements pop. The crescendo visualization uses flat blocks. The red accent bars are flush, not elevated. | PASS |
| Spec sheet or blog? | Spec sheet | The structured act labels, tension meter, and code blocks create a specification feel even through blur. | PASS |
| Do callouts look like siblings? | YES | Red left-border callouts are visible and consistent. | PASS |
| Code: terminal or toy? | Terminal | Dark code blocks read as real code. | PASS |
| Density rhythm visible? | YES | The progressive build from sparse Act I to dense Act III is visible in the blurred view -- the bottom of the page is clearly heavier than the top. CRESCENDO confirmed. | PASS |
| Header-to-body connected? | Connected | Header flows into density arc visualization flows into Act I. | PASS |
| Could this be Bootstrap? | ABSOLUTELY NOT | The narrative act structure, warm cream background, and serif titles are distinctive. | PASS |
| Hurried or calm? | Calm | The narrative pacing creates natural calm. Generous spacing between acts. | PASS |

**OD-002 Squint Verdict: 8/8 PASS**

### OD-003: Task-Based Structure (BLUR)
| Question | Expected | Observed | Verdict |
|----------|----------|----------|---------|
| Do any elements pop forward? | NO | No elements float. The task map tiles are flat. The red left border on the overview section is a flat accent. | PASS |
| Spec sheet or blog? | Spec sheet | The numbered task structure, checkpoints, and code blocks create a procedural specification feel. | PASS |
| Do callouts look like siblings? | YES | The checkpoint and warning callouts share the same left-border structure. Visible as family through blur. | PASS |
| Code: terminal or toy? | Terminal | Light-background code blocks are less distinctly "terminal" than OD-001/002's dark blocks. They read as code but with less conviction. | **CONCERN** |
| Density rhythm visible? | YES | The ISLANDS pattern is visible -- dense task blocks separated by sparse horizontal rules. The task map at top (dense) and verification at bottom (dense) show BOOKENDS. | PASS |
| Header-to-body connected? | Connected | Header flows into the "You Are Here" overview which flows into the task map. | PASS |
| Could this be Bootstrap? | NO, but closer than others | The light code blocks and the 2-column task map grid feel more generic than OD-001/002. The serif title and red accents prevent full Bootstrap anonymity, but this is the closest of all 6 ODs. | **CONCERN** |
| Hurried or calm? | Calm but monotonous | The repeating island structure creates calm but also predictability. After 3 islands the pattern is fully known. Not hurried, but not engaging either. | PASS (borderline) |

**OD-003 Squint Verdict: 6/8 PASS, 2 CONCERN**
- Light code blocks reduce terminal conviction
- Task grid layout feels more generic than other ODs

### OD-004: Confidence-Based Structure (BLUR)
| Question | Expected | Observed | Verdict |
|----------|----------|----------|---------|
| Do any elements pop forward? | NO | The dark geological survey panel is a flat block, similar to OD-001's density viz. Colored dots (blue, amber, purple) within the dark block are visible but do not pop -- they serve as stratum markers. | PASS |
| Spec sheet or blog? | Spec sheet | The geological strata headers, tab controls, and progress indicators create a distinctive analytical spec feel. | PASS |
| Do callouts look like siblings? | YES | Callouts share red/green/amber left borders with consistent structure. | PASS |
| Code: terminal or toy? | Terminal | Code blocks (where present) use dark backgrounds. Less code in this OD overall. | PASS |
| Density rhythm visible? | YES | The GEOLOGICAL progression is visible -- the Established stratum (top) is compact, while Speculative and Open (bottom) expand with more prose and whitespace. Density inversely correlates with confidence as intended. | PASS |
| Header-to-body connected? | Connected | Header flows into geological survey visualization flows into tab bar flows into Stratum 1. | PASS |
| Could this be Bootstrap? | ABSOLUTELY NOT | The geological metaphor, progress bars between strata, and tab-based confidence filtering are highly distinctive. | PASS |
| Hurried or calm? | Calm | The strata create natural breathing points. Each transition marker provides a pause. | PASS |

**OD-004 Squint Verdict: 8/8 PASS**

### OD-005: Spatial Hub-Spoke Structure (BLUR)
| Question | Expected | Observed | Verdict |
|----------|----------|----------|---------|
| Do any elements pop forward? | NO | Territory tiles have solid offset pseudo-elements visible in blur as a subtle depth indicator, but they do not "pop forward" -- they create flat graphic weight. The first bar in the density visualization (red, hub) is prominent but flat. | PASS |
| Spec sheet or blog? | Spec sheet | The territory grid, density wave visualization, and structured spoke layout create a clear specification feel. The sidebar panel in spokes adds architectural rigor. | PASS |
| Do callouts look like siblings? | YES | Checkpoint, Tip, Gotcha callouts share left-border DNA. Visible through blur as consistent red/green/amber markers. | PASS |
| Code: terminal or toy? | Terminal | Dark code blocks with syntax highlighting (same quality as OD-001/002). Strong terminal presence. | PASS |
| Density rhythm visible? | YES | The WAVE oscillation is visible: sparse hub (territory map) -> dense spoke (State Management) -> sparse return link -> dense spoke (Component Patterns). The alternation is the most spatially visible of all 6 ODs. | PASS |
| Header-to-body connected? | Connected | Header flows into density map flows into territory grid. | PASS |
| Could this be Bootstrap? | ABSOLUTELY NOT | The territory card grid with solid offsets, density wave visualization, and two-column spoke layout are immediately distinctive. No Bootstrap template has this structure. | PASS |
| Hurried or calm? | Calm | The hub-spoke navigation creates a restful map-like experience. "Return to Map" buttons provide natural rest points. | PASS |

**OD-005 Squint Verdict: 8/8 PASS**

### OD-006: Creative/Emergent Synthesis (BLUR)
| Question | Expected | Observed | Verdict |
|----------|----------|----------|---------|
| Do any elements pop forward? | NO | The section overview grid has solid offset tiles. The left sidebar navigation is a quiet structural element. Nothing pops forward -- everything sits on the same plane. | PASS |
| Spec sheet or blog? | Spec sheet | The section-numbered layout, formal typography hierarchy, and evidence tables create an analytical specification feel. The editorial tone is elevated but still reads as specification, not blog. | PASS |
| Do callouts look like siblings? | YES | Essence, Insight, Warning, Note callouts all share left-border + label + body structure. Visible as family. | PASS |
| Code: terminal or toy? | N/A | OD-006 has minimal code (one CSS snippet in Section 03). Not enough code to evaluate terminal quality. | N/A |
| Density rhythm visible? | YES | The most varied density of all 6 ODs. Sections alternate between different rhythms (PULSE in Section 01, CRESCENDO in 02, ISLANDS in 03, GEOLOGICAL in 04, WAVE in 05, FRACTAL in 06). This variation IS the density signal. | PASS |
| Header-to-body connected? | Connected | The title "Organization IS Density" flows into the thesis paragraph flows into the section overview grid. Strong connection. The left sidebar nav provides persistent orientation. | PASS |
| Could this be Bootstrap? | ABSOLUTELY NOT | The left sidebar navigation, section overview grid with mode labels, and editorial serif typography are immediately distinctive. This is the MOST visually unique of all 6 ODs. | PASS |
| Hurried or calm? | Calm and authoritative | The elevated typography, generous spacing, and editorial tone create a calm authoritativeness. This is the calmest OD in the series. | PASS |

**OD-006 Squint Verdict: 7/7 PASS (code question N/A)**

---

## 4. Cross-OD Visual Consistency Assessment

### What the Blur Reveals

When blurred, the 6 ODs resolve into recognizable visual patterns:

**Shared DNA visible through blur:**
- Warm cream (#FEF9F5) background -- identical across all 6
- Red (#E83025) accent lines and left borders -- consistent red DNA
- Serif display titles (Instrument Serif) -- visible in header area of every OD
- Sharp edges everywhere -- no rounded shapes resolve through the blur
- Flat design -- nothing floats or pops, everything sits on the same plane

**Distinguishing features through blur:**
- OD-001: Dark density visualization block + Q&A alternation pattern
- OD-002: Crescendo bar chart + act transition markers
- OD-003: 2-column task map grid + repeating island separators
- OD-004: Dark geological survey block + tab bar + progress markers between strata
- OD-005: Density wave bar chart + 3x2 territory card grid + two-column spoke layout
- OD-006: Left sidebar navigation + 3x2 section overview grid + editorial typography scale

### Three Dialect Assessment (Confirming Fresh-Eyes F-E-004)

The blur test confirms fresh-eyes' "3 dialect" finding:

**Dialect A (OD-001, OD-002):** Dark code blocks create high-contrast density anchors. V2 enrichments (scroll witness, solid offsets) add visual weight. These ODs feel the most polished through blur.

**Dialect B (OD-003, OD-004, OD-005):** Mixed code block treatment (OD-003 light, OD-004 mixed, OD-005 dark). Less consistent visual weight distribution. OD-005 is the strongest of this group due to its solid offsets and spatial structure.

**Dialect C (OD-006):** Unique editorial layout with sidebar navigation. The most visually distinctive. Heaviest typography. The "crown jewel" presentation is visible even through blur.

**Key finding:** The dialect gap is REAL but it is not a soul violation. The soul (sharp edges, flat design, warm cream, red accent, serif titles) is consistent across all three dialects. The dialects differ in CRAFT LEVEL, not in SOUL COMPLIANCE.

### Color Temperature Consistency

All 6 ODs share identical warm cream (#FEF9F5) backgrounds. The color temperature is perfectly consistent. No cool grays intrude. The warmth is a key soul signal that survives the blur test across all ODs.

### Weight Balance Assessment

- OD-001: Well-balanced. Dark viz block provides top anchor. Q&A alternation distributes weight evenly.
- OD-002: Progressive build works. Top is intentionally lighter than bottom (CRESCENDO).
- OD-003: Slightly top-heavy due to dense overview section. Islands below are more uniform.
- OD-004: Well-balanced within visible viewport. (Note: fresh-eyes reported mid-page void, not testable from top viewport.)
- OD-005: Well-balanced. Density wave at top, territory cards in middle, spokes below.
- OD-006: Slightly left-heavy due to sidebar navigation. Main content compensates with generous width.

---

## 5. Cross-OD Systemic Findings Integration (Wave 2 Synthesis)

This section integrates findings from ALL Wave 2 agents (Systematic A/B/C, Structural, Contrast, Content, Comparative, Research Refinement) into a cross-OD consistency assessment. Each finding is assessed for whether it is a SYSTEMIC issue (affects the series as a whole) or an ISOLATED issue (one or two ODs only).

### SYSTEMIC-1: 2px Border Epidemic (ALL 6 ODs) -- CONFIRMED BY 9+ SOURCES

**Source agents:** Fresh-eyes (F-E-001), Systematic-A (S4A for OD-001/002), Systematic-B (S4A for OD-003/004), Systematic-C (S4A for OD-005/006), Visual-first A/B/C, Weaver (XR-3)
**Severity: HIGH -- SYSTEMIC DESIGN DECISION NEEDED**

Rule 5 states borders must be 3px solid (full) or 4px left accent. Never 1-2px ("signals uncertainty"). The data across all agents:

| OD | CSS thin border declarations | Computed thin border instances | Worst category |
|----|---------------------------|------------------------------|----------------|
| OD-001 | 16 (5x1px + 11x2px) | 101 (34x1px + 67x2px) | enrichment-card: 8 elements x 2px all sides |
| OD-002 | 9 (4x1px + 5x2px) | 46 (36x1px + 10x2px) | act-header: 4 titles x 2px bottom |
| OD-003 | 25 (7x1px + 18x2px) | 661 (322x1px + 339x2px) | task-island: 6 articles x 2px top/right/bottom + 4px left |
| OD-004 | 19 (5x1px + 14x2px) | 221 (87x1px + 134x2px) | stratum frames: 2px structural borders |
| OD-005 | 17 (8x1px + 9x2px) | 386 (277x1px + 109x2px) | table cells, code blocks |
| OD-006 | 22 (8x1px + 14x2px) | 204 (107x1px + 97x2px) | sidebar border, section frames |
| **TOTAL** | **108 declarations** | **1,619 computed instances** | |

**Cross-OD pattern:** The 2px border is used in three distinct roles:
1. **Structural frames** (2px on non-left sides of callouts/articles) -- OD-003 worst offender
2. **Decorative borders** (2px bottom on section titles) -- present in all 6
3. **Table/separator lines** (1px) -- present in all 6

**This is a system-level decision.** The builders consistently chose 2px for structural borders that are NOT the 4px left accent. This suggests an implicit "secondary border" tier was created (4px=accent, 2px=structure, 1px=separator). The soul spec only defines two tiers (4px left or 3px full). The fix is either:
- A: Upgrade all 2px to 3px (minimal change, matches spec)
- B: Formally define a 3-tier border system (4px accent, 3px structure, 1px separator) -- requires spec amendment

### SYSTEMIC-2: Callout Label Contrast Failures (ALL 6 ODs)

**Source agents:** Contrast (CA-001), Systematic A/B/C (color checks)
**Severity: HIGH -- WCAG AA FAILURE**

Callout labels use accent colors as text on backgrounds too similar in luminance. Every accent color fails 4.5:1 at the label sizes used (10-12px):

| Accent Color | On White | On #FEF9F5 | On #F0EBE3 | Required |
|-------------|----------|-----------|-----------|---------|
| `--accent-blue` (#4A90D9) | 3.34:1 | 3.20:1 | 2.82:1 | 4.5:1 |
| `--accent-green` (#4A9D6B) | 3.32:1 | 3.17:1 | 2.80:1 | 4.5:1 |
| `--accent-coral` (#C97065) | 3.55:1 | 3.35:1 | 2.95:1 | 4.5:1 |
| `--accent-amber` (#D97706) | 3.22:1 | 3.05:1 | 2.68:1 | 4.5:1 |
| `--accent-purple` (#7C3AED) | 5.28:1 | 5.02:1 | 4.23:1 | 4.5:1 |
| `--color-primary` (#E83025) | 4.30:1 | 4.11:1 | 3.63:1 | 4.5:1 |

**Purple passes on white but fails on subtle backgrounds.** All others fail everywhere. Additionally, some ODs render labels with the accent color AS the label background (accent-on-accent = 1.00:1 ratio), making labels invisible.

**This is systemic:** The callout label design pattern itself is inaccessible at the current font sizes. Fix: Use `--color-text` (#1A1A1A) for all callout labels and rely on the 4px left border color for type differentiation, or increase label font size to 14px bold (qualifies as "large text" per WCAG, needs only 3:1).

### SYSTEMIC-3: Exploration Meta Values Below WCAG AA (ALL 6 ODs)

**Source agents:** Contrast (CA-002)
**Severity: MEDIUM**

`.exploration-meta__value` uses `--color-primary` (#E83025) at 10px bold on white. Ratio: 4.30:1 (misses 4.5:1 by 0.20). Present in every OD's header section. Fix: Increase to 14px bold or darken red slightly.

### SYSTEMIC-4: No Favicon (ALL 6 ODs)

**Source agents:** Content (CA-001)
**Severity: LOW**

All 6 ODs lack `<link rel="icon">`. Minor polish item for standalone HTML explorations.

### SYSTEMIC-5: No Print Styles, Selection Styling, or Custom Scrollbar (ALL 6 ODs)

**Source agents:** Structural (STR-008, STR-009, STR-010)
**Severity: LOW**

Consistent across all 6 -- these are polish items, not soul violations. Listed for completeness.

### SYSTEMIC-6: No Skip-to-Content Link (5/6 ODs)

**Source agents:** Structural (STR-006), Contrast (CA-005)
**Severity: MEDIUM**

Only OD-005 has a skip link, and its contrast fails (4.30:1 white on red). All other ODs lack skip links entirely. WCAG 2.4.1 Level A requirement.

---

## 6. Cross-OD Inconsistency Findings (Differences Between ODs)

### INCONSISTENCY-1: Semantic HTML Maturity Gap (OD-001/002 vs OD-003-006)

**Source agents:** Structural (STR-001, STR-002, STR-004, STR-005)
**Severity: CRITICAL for OD-001/OD-002**

| Check | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|-------|--------|--------|--------|--------|--------|--------|
| Has `<main>` | NO | NO | YES | YES | YES | YES |
| Heading hierarchy | FLAT (1 H1 only) | FLAT (1 H1 only) | GOOD (10 headings) | GOOD (18) | GOOD (26) | GOOD (12) |
| aria-label count | 1 | 0 | 1 | 15 | 20 | 2 |
| aria-labelledby | 0 | 0 | 8 | 0 | 0 | 6 |
| `<article>` elements | 0 | 0 | 6 | 11 | 0 | 0 |
| Skip navigation | 4 anchors | 0 | 0 | 0 | 26 | 7 |

**Pattern:** OD-001 and OD-002 were built first and lack basic semantic HTML. OD-003 through OD-006 progressively improved. This is a build-order artifact, not a design choice. OD-005 is the most structurally complete (main, nav, footer, aside, 26 headings, 20 aria-labels, 33 focusable elements).

### INCONSISTENCY-2: Code Block Theme (Dark vs Light)

**Source agents:** Visual-first A/B/C, Fresh-eyes (F-E-005), Weaver (XR-9)
**Severity: MEDIUM**

| OD | Code Block Theme | Background | Assessment |
|----|-----------------|------------|------------|
| OD-001 | Dark | #1E1E1E | Strong terminal conviction |
| OD-002 | Dark | #1E1E1E | Strong terminal conviction |
| OD-003 | Light | Cream-on-cream | Weak conviction -- "code in a document" not "code in a terminal" |
| OD-004 | Mixed | Varies | Some dark, some light |
| OD-005 | Dark | #1E1E1E | Strong terminal conviction |
| OD-006 | Light | Warm cream | Palette-compliant but less distinctive |

OD-003's light code blocks were flagged by the squint test as the weakest "terminal conviction" signal. Dark code blocks create a stronger visual anchor and more clearly communicate "this is real code." However, OD-006's light code blocks are intentionally editorial, matching its synthesis role.

**Decision needed:** Standardize on dark code blocks for implementation-focused ODs (001-005) and allow light for editorial ODs (006)?

### INCONSISTENCY-3: Header Meta Layout (3 Different Designs)

**Source agents:** Fresh-eyes (F-E-004)
**Severity: LOW-MEDIUM**

Three distinct header layouts exist:
- **Layout A** (OD-001, OD-002): Vertical stacked labels
- **Layout B** (OD-003, OD-005): Horizontal inline with dot separators
- **Layout C** (OD-004): Vertical stacked, different structure
- **Layout D** (OD-006): Minimal, no metadata bar

This is a craft consistency issue, not a soul violation. The headers serve the same function but look like three different designers made them.

### INCONSISTENCY-4: prefers-reduced-motion Coverage

**Source agents:** Contrast (CA-004)
**Severity: MEDIUM**

| OD | Has prefers-reduced-motion? |
|----|---------------------------|
| OD-001 | NO (415 animated elements!) |
| OD-002 | NO |
| OD-003 | Unclear |
| OD-004 | YES |
| OD-005 | YES |
| OD-006 | YES |

OD-001 is the most animated OD (scroll witness, section reveals, hover transitions) and the only one with zero reduced-motion support. This is the most significant accessibility inconsistency.

### INCONSISTENCY-5: focus-visible Styling

**Source agents:** Contrast (CA-003)
**Severity: MEDIUM**

| OD | Has :focus-visible? |
|----|-------------------|
| OD-001 | NO |
| OD-002 | NO |
| OD-003 | YES |
| OD-004 | YES |
| OD-005 | NO |
| OD-006 | NO |

Only OD-003 and OD-004 have custom focus styling. The others rely on browser defaults (blue auto outline), which is technically compliant but uses an off-palette color and may be insufficient against the warm cream background.

### INCONSISTENCY-6: Page Container Width

**Source agents:** Fresh-eyes (F-E-002), Visual-first-C
**Severity: MEDIUM**

| OD | max-width |
|----|----------|
| OD-001 | 860px |
| OD-002 | 860px |
| OD-003 | 860px |
| OD-004 | 860px |
| OD-005 | **960px** |
| OD-006 | 860px |

OD-005 uses 960px, 100px wider than all other ODs. The identity brief specifies 860px (Soul Checklist item 9). The spatial hub-spoke pattern may have motivated the wider canvas for the territory grid, but it is a spec deviation.

---

## 7. Contradiction Resolution (Weaver XR-18)

The weaver tracker identified two direct contradictions between Visual Auditors and Fresh-Eyes. Phase C must resolve these.

### CONTRADICTION 1: OD-003 (Visual=YES, Fresh-Eyes=CONDITIONAL NO)

**Visual-first-b** said OD-003's Nuclear Question answer was YES -- "The identity is clearly expressed through the task-based structure."

**Fresh-eyes** said CONDITIONAL NO -- "monotonous islands, 661 thin borders, light code blocks reduce conviction. I would not ship without fixing the thin borders and adding more visual variety between islands."

**Phase C Resolution:**

The squint test gives OD-003 2 CONCERNS out of 8 questions -- the weakest result of all 6 ODs. The "Could this be Bootstrap?" question received CONCERN because the light code blocks and 2-column task map feel more generic than other ODs. The systematic audit confirmed 661 computed thin-border instances -- the highest of any OD.

**Verdict: Fresh-Eyes is CORRECT.** OD-003 has the weakest identity expression of all 6 ODs. The soul is technically intact (locked tokens pass, no border-radius > 0, no box-shadows), but the CRAFT LEVEL is lower:
- No solid offset enrichments (OD-001/004/005/006 have them)
- Light code blocks instead of dark
- Off-palette `--accent-tan: #B8A080`
- 661 thin border instances (highest)
- Most "generic" squint test result

**OD-003 needs the most attention in any remediation pass.** The soul is present but whispering, not speaking.

### CONTRADICTION 2: OD-004 (Visual=YES strongly, Fresh-Eyes=NO)

**Visual-first-b** said OD-004's Nuclear Question answer was YES, strongly -- "The geological metaphor, confidence stratification, and tab interface are deeply distinctive."

**Fresh-eyes** said NO -- "OD-004 has a full-viewport dead zone at mid-scroll (~6881px). This is a page that forgot to have content. I would not ship this."

**Phase C Resolution:**

The systematic audit confirmed OD-004's strong identity expression (GEOLOGICAL pattern clearly visible, inverse density-confidence working correctly). The comparative reference audit rated OD-004 as "the most creative DD reinterpretation." The content authenticity audit verified all content is genuine with appropriate voice calibration per stratum.

However, the fresh-eyes dead zone finding (F-E-003) was NOT contradicted by any other agent. The visual-first-b agent may not have scrolled to the exact mid-page position where the void appears. The page is 13,762px tall; at scrollY ~6881px there is a gap between strata transitions that may appear as a full blank viewport.

**Verdict: BOTH are partially correct.**
- The Visual Auditor is RIGHT about OD-004's identity strength -- it is the most conceptually innovative OD.
- Fresh-Eyes is RIGHT about the dead zone -- a full-viewport gap is a craft defect regardless of identity strength.
- The Essence callout font FAIL (Inter instead of Instrument Serif italic) is CONFIRMED by both Wave 1 and Wave 2 as the only explicit FAIL verdict across all 6 ODs.

**OD-004 needs two specific fixes:** (1) Remove or shrink the mid-page dead zone, (2) Fix the Essence callout font to Instrument Serif italic. The identity is strong; the execution has two holes.

---

## 8. OD-004 Tab Interface ARIA Gap (Structural + Contrast Combined)

**Source agents:** Structural (STR-003), Contrast (CA-003)
**Severity: HIGH -- OD-004 SPECIFIC**

The confidence filter tabs have `role="tablist"` and `role="tab"` but are missing:
- `aria-controls` on all 3 tabs
- `role="tabpanel"` on content sections
- `aria-selected="false"` on inactive tabs
- `tabindex` for keyboard focusability

This is an isolated issue (only OD-004 has tabs) but it is the ONLY interactive component across all 6 ODs that has incomplete ARIA. Keyboard users cannot operate the confidence filter.

---

## 9. Research Refinement Cross-OD Findings

**Source agent:** Research-Ref
**Severity: MEDIUM**

The research refinement audit tested all 55 EXT-* citations against the 5-question soul test. Cross-OD findings:

1. **EXT-CREATIVE-001 (Solid Offset)** applied in OD-001, OD-004, OD-005, OD-006 but NOT in OD-002 and OD-003. The opaque version is disputed (creates flat graphic block vs perceptual depth). Semi-transparent versions (opacity:0.15-0.3) are confirmed violations per spirit check.

2. **EXT-CREATIVE-002 (Typographic Cascade)** applied differently: OD-001/003/004/005 use 2.5rem page, 1.625rem section. OD-006 uses 3rem/2rem. Neither matches DD's original cascade exactly. This is the same type scale divergence found in the token diff.

3. **EXT-TASK-003 (Hierarchical Task Breakdown)** in OD-003 uses 1px vertical connector lines. These 1px lines are a spirit-of-Rule-5 question: Are they "borders" or "connectors"? The research refinement agent classified them as ASSESS (not clearly a violation because they serve a structural/diagrammatic purpose distinct from component borders).

4. **7 research citations applied as raw directives** (not refined through identity): These are concentrated in OD-003 and OD-005, the two ODs that had the least builder refinement time.

---

## 10. Comparative Drift -- DD Ancestor Fidelity

**Source agent:** Comparative Reference
**Key cross-OD finding:** ZERO token drift across all 6 ODs relative to DD ancestors.

All 6 DD patterns are faithfully inherited:
| DD Pattern | OD Implementation | Fidelity Rating |
|-----------|-------------------|-----------------|
| DD-001 PULSE | OD-001 Q&A alternation | EVOLVED |
| DD-002 CRESCENDO | OD-002 narrative arc | FAITHFUL |
| DD-003 ISLANDS | OD-003 task clusters | EVOLVED |
| DD-004 GEOLOGICAL | OD-004 confidence strata | CREATIVE REINTERPRETATION |
| DD-005 TIDAL | OD-001 width + OD-005 hub-spoke | EVOLVED |
| DD-006 FRACTAL | OD-006 meta-synthesis | DEFINITIVE |

**No DD learning was lost.** Every DD lesson chain entry is traceable in OD outputs. The OD stage is a genuine evolution of the DD stage, not a regression.

---

## 11. Content Authenticity Cross-OD Verdict

**Source agent:** Content
**Cross-OD finding:** ALL 6 ODs PASS content authenticity.

- Zero placeholder content across all 6 ODs
- Zero lorem ipsum (one meta-instruction in OD-006 says "never lorem ipsum" -- self-aware)
- 5 example.com instances (OD-003: 2, OD-004: 3) -- all legitimate API documentation conventions
- No contradictory information between ODs
- Each OD uses genuinely different technical content appropriate to its organizational pattern
- The Unhurried Editor voice is maintained across all 6 ODs with appropriate calibration per context

---

## 12. Per-OD Consistency Scorecard

| Dimension | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|-----------|--------|--------|--------|--------|--------|--------|
| **Soul Token Compliance** | PASS | PASS | PASS | PASS | PASS | PASS |
| **Squint Test** | 8/8 | 8/8 | 6/8 | 8/8 | 8/8 | 7/7 |
| **Semantic HTML** | POOR | WORST | BEST | GOOD | EXCELLENT | GOOD |
| **WCAG Contrast** | 5 failures | 7 failures | 6 failures | 5 failures | 8 failures | 4 failures |
| **Content Authenticity** | PASS | PASS | PASS | PASS | PASS | PASS |
| **DD Fidelity** | EVOLVED | FAITHFUL | EVOLVED | CREATIVE | COMBINED | DEFINITIVE |
| **Craft Level** | HIGH | MEDIUM | LOW | HIGH | HIGH | HIGHEST |
| **Unique Defects** | None | Zero ARIA | Off-palette color | Essence font FAIL + dead zone | 960px width | Type scale divergence |
| **Overall** | STRONG | NEEDS WORK | NEEDS MOST WORK | STRONG (2 fixes) | STRONG (1 fix) | STRONGEST |

**Ranking by overall quality (soul + craft + accessibility):**
1. **OD-006** -- Strongest identity, best content, most distinctive, minor type scale issue
2. **OD-005** -- Excellent structure, best ARIA, strong identity, needs width fix
3. **OD-001** -- Strong visual identity, polished enrichments, needs semantic HTML
4. **OD-004** -- Most innovative concept, strong identity, needs dead zone fix + font fix + tab ARIA
5. **OD-002** -- Faithful CRESCENDO, but fewest tokens, zero ARIA, least enrichment
6. **OD-003** -- Best semantic HTML but weakest visual identity, most thin borders, off-palette color

---

## 13. Recommended Priority Fix Order

### CRITICAL (Must fix before any production use)
1. **OD-004 Essence callout font** -- Change from Inter to Instrument Serif italic (the ONLY explicit FAIL)
2. **OD-001 + OD-002: Add `<main>` landmark** -- Minimum viable accessibility
3. **OD-001 + OD-002: Add heading hierarchy** -- Convert styled divs to h2/h3

### HIGH (Should fix to meet quality bar)
4. **ALL 6: Callout label contrast** -- Use `--color-text` for labels OR increase to 14px bold
5. **ALL 6: Standardize thin borders** -- Upgrade 2px structural borders to 3px per Rule 5
6. **OD-004: Tab ARIA completion** -- Add aria-controls, tabpanel, tabindex, aria-selected
7. **OD-004: Remove dead zone** -- Reduce inter-strata spacing at ~6881px scroll position
8. **OD-003: Remove `--accent-tan: #B8A080`** -- Replace with palette-compliant color

### MEDIUM (Should fix for consistency)
9. **OD-005: Reduce max-width to 860px** -- Match spec and all other ODs
10. **OD-001 + OD-002: Add prefers-reduced-motion** -- OD-001 has 415 animated elements
11. **ALL except OD-003/004: Add :focus-visible** -- 3px solid red outline
12. **ALL 6: Add skip-to-content link** -- WCAG 2.4.1 Level A
13. **ALL 6: Add exploration-meta font-size to 14px bold** -- Fix 4.30:1 ratio

### LOW (Polish items)
14. **ALL 6: Add favicon**
15. **ALL 6: Add ::selection styling**
16. **ALL 6: Add @media print styles**
17. **Standardize header meta layout** -- Pick one format across all 6

---

## COMPACTION-SAFE SUMMARY

- **Agent:** Consistency (Phase C)
- **Files synthesized:** 15 scratchpad files from Wave 1 + Wave 2 + Parallel
- **Token divergences found:** 0 critical / 4 high / 3 note
- **Squint test results:** OD-001=8/8, OD-002=8/8, OD-003=6/8 (2 concerns), OD-004=8/8, OD-005=8/8, OD-006=7/7
- **Systemic issues:** 6 (thin borders, callout contrast, meta contrast, favicon, skip links, print/selection/scrollbar)
- **Cross-OD inconsistencies:** 6 (semantic HTML gap, code block theme, header layout, reduced-motion, focus-visible, container width)
- **Contradictions resolved:** 2 (OD-003: fresh-eyes correct; OD-004: both partially correct)
- **Only FAIL verdict:** OD-004 Essence callout font (Inter instead of Instrument Serif italic)
- **Best OD:** OD-006 (strongest identity + craft + content)
- **Worst OD:** OD-003 (weakest visual identity, most thin borders, off-palette color)
- **Cross-OD soul verdict:** INTACT. Zero locked token divergences. All density patterns visible through squint. The soul speaks in all 6 ODs, but at different volumes.
- **Recommended fixes:** 17 items across 4 priority tiers (3 critical, 5 high, 5 medium, 4 low)
- **Status:** COMPLETE
