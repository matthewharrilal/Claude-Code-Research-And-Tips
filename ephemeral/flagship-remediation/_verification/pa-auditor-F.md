# PA Auditor F -- Color + Material (PA-31 through PA-36)

**Auditor:** Fresh-eyes Opus agent (zero prior context)
**Date:** 2026-02-18
**Screenshots reviewed:** 28 total (15 at 1440px, 9 at 768px, 4 at 375px) + fullpage at all 3 viewports
**Reference data:** lock-sheet.md, computed-styles-data.md

---

## CRITICAL FINDING (Before Addressing Individual Questions)

**CATASTROPHIC RENDERING FAILURE:** Sections S5 through S12 are completely invisible at both 1440px and 768px viewports. Of 15 scroll-position screenshots at 1440px, only 3 show any content at all (viewport-top, scroll-01, scroll-02, scroll-03). Screenshots 04 through 15 are BLANK WARM CREAM with zero visible text, tables, callouts, grids, or any content whatsoever. The 768px viewport confirms this: only the first 2 scroll screenshots show content (s2-s3, s3-table-callout plus the section-05 header in scroll-02); s4 through s9 are entirely blank.

The programmatic data confirms the HTML elements exist (12 sections, 9 callouts, 9 tables, 3 grids, etc.) -- but they are PERCEPTUALLY INVISIBLE. This is either:
1. A CSS `display: none` or `visibility: hidden` on section containers from S5 onward
2. Text color matching the background color (text on near-identical warm cream)
3. A catastrophic CSS specificity conflict that collapses content

This is NOT a "whitespace void" between sections. This is THE MAJORITY OF THE PAGE being invisible. The fullpage screenshot confirms: content occupies roughly the top 20% of page height, then 70%+ is blank cream, then a dark footer at the bottom.

**This single finding overrides and dominates every color/material question below.**

---

## PA-31: Background Differentiation

**Rating: FAIL -- Perceptually indistinguishable for the majority of the page**

### What I Can See (S1-S3 only)

In the first 3 sections that are visible:
- **Header:** Dark near-black (#1A1A1A range) -- clearly distinct, strong
- **S1:** Warm cream, noticeably warmer/more saturated than S2
- **S2:** Slightly cooler/grayer warm tone -- I can detect the shift from S1 to S2
- **S3:** Returns warmer, similar to S1 but slightly different

The visible sections DO create a warm palette. The S1-to-S2 transition is perceptible. However, the computed data flags S3-to-S4 as borderline (only +3/+3/+11 RGB) and S4-to-S5 as IMPERCEPTIBLE (only +2/+2/+2 RGB).

### What I Cannot See (S4-S12)

The screenshots show only uniform warm cream. I cannot count distinct backgrounds because I cannot see distinct ANYTHING. The computed-styles-data lists 12 different background RGB values, but at MOST 3-4 of them produce visible differentiation in practice.

**Perceptibly distinct background colors I can count:** 3 (header dark, S1 warm, S2 cool-warm). The S2-to-S3 transition visible in scroll-02 adds a 4th. Everything from S4 onward is a single undifferentiated field of warm cream.

**Lock sheet check:** S4-to-S5 delta of 2 RGB points FAILS the >=10 threshold. S9-to-S10 delta of <=5 RGB points also FAILS.

---

## PA-32: Border Usage

**Rating: FAIL -- Zero structural borders visible; callout borders partially effective**

### Structural Borders

The computed-styles-data explicitly states: **"ZERO structural borders detected on any section or inner div."** The spec called for 6 zone-specific border-top rules. None are present. This is confirmed perceptually: I see no section-dividing borders, no zone-framing borders, no structural horizontal rules between content zones.

### Callout Borders

In the visible sections (S1-S3), callout left borders ARE visible and effective:
- **S2 blockquote:** Red (#E83025) left border, approximately 4px -- this is the MOST visible structural element on the entire page. It anchors the quotation and is immediately eye-catching. Feels intentional and strong.
- **"Density Rhythm" callout (bottom of scroll-02):** Light blue-gray left border, approximately 4px -- visible but subtle. Marks the callout as distinct from body text.

The callout borders that ARE present feel intentional -- they mark off callouts from body text with a clear left accent. But since S4-S12 are invisible, I cannot evaluate the remaining 7+ callouts.

### Table Borders

Tables are visible in S3 (scroll-02 at 768px shows the dimension table). The table uses horizontal rules only (no vertical borders -- correct per lock sheet). The header row has a subtle warm-toned separator. Table borders feel minimal and functional.

### Dividers

I can see horizontal divider lines between S1-S2 and S2-S3. They span the content width (approximately 960px container). They appear as thin warm-toned rules. The lock sheet requires 11 dividers with role="separator" -- I can only see 2 in the visible portion.

**Overall:** Borders are ABSENT as a structural system. Callout borders work where visible, but the page has no border-based zone differentiation. The spec called for borders as structural elements; they do not function that way.

---

## PA-33: Accent Color Deployment

**Rating: PARTIALLY EFFECTIVE in visible zones; UNASSESSABLE below S4**

### Primary Red (#E83025)

The KortAI red appears in exactly two visible locations:
1. **Header subtitle:** "RESEARCH SYNTHESIS -- FIVE PRINCIPLES FROM 337 FINDINGS" is rendered in red against the dark header. This is effective -- it draws the eye, establishes brand identity, provides a color anchor for the entire page.
2. **S2 blockquote left border:** The 4px red border on the quotation block. This is the only structural use of the accent color in the body. It works -- it makes the quote feel like a deliberate design moment.
3. **Drop cap in S1:** The large "F" that begins the first body paragraph appears to be rendered in red. A nice typographic detail.

The red does NOT feel overused in the visible portion -- 3 deployments in 3 sections is restrained and deliberate. But I have no way to assess whether the gotcha callouts (which use red borders) in later sections are effective, because those sections are invisible.

### Other Accent Colors

From the computed data:
- **Green (#4A9D6B):** Used on tip callout borders (3 callouts). I can see ONE possible hint of green in the 768px s3-table-callout screenshot where a callout with a slightly warm tint appears -- but I cannot confirm the green.
- **Amber (#D97706):** Used on the essence callout. Not visible in any screenshot I reviewed.
- **Blue (#4A90D9):** Used on info callout borders. The "Density Rhythm" callout in scroll-02 (768px) appears to have a subtle blue-gray left border, but the color is so desaturated it barely registers as blue.
- **Purple (#7C3AED):** Presumably on challenge callouts. Not visible.

**Verdict:** The red accent is well-deployed where visible. Other accent colors exist in the CSS but are either (a) in invisible sections or (b) too desaturated to register as distinct colors. The color system has the RIGHT colors in the code but fails to SHOW them to the viewer.

---

## PA-34: Warm/Cool Balance

**Rating: WARM PALETTE CONFIRMED -- but monotonously so**

### Overall Temperature

The entire visible page feels warm-toned. Confirmed:
- **Header:** Dark warm (not cool-black -- the text color reads as a warm near-black)
- **S1-S3 backgrounds:** All warm cream variations. No cool grays, no blues, no stark whites.
- **Text color:** Warm dark brown/charcoal, NOT pure black. Comfortable to read against the cream backgrounds.
- **Borders/dividers:** Warm tan tones (#E0D5C5 range)
- **Table header:** Warm gray, not cool

### Cool-Toned Elements

The computed-styles-data confirms that previously cool backgrounds (#FAFAFA, #F8F8F8, #F0F0F0) have been corrected to warm equivalents (#FAF8F5, #F8F6F3, #F2EFEA). I do NOT detect any cool-toned elements in the visible portion. Even the subtle callout backgrounds read as warm.

The one potential exception: the "Density Rhythm" callout background at the bottom of the 768px scroll-01 screenshot has a very slight blue-tinged warmth (possibly the #F5F8FA info semantic color). It is at the cool EDGE of warm but does not break the palette.

### Naturalness vs. Forced

**The warmth feels natural but monotonous.** It reads like a single piece of parchment paper rather than a designed warm palette with modulation. A good warm palette has temperature WITHIN the warm range -- warmer zones and cooler-warm zones creating rhythm. This page has that theoretically (computed data shows R values ranging from 242 to 254) but the deltas are too small to perceive.

**Result:** Warm palette confirmed, no cool breaks detected. But the warmth lacks internal contrast -- it is one-note warm rather than warm-with-variation.

---

## PA-35: Contrast Ratios

**Rating: PASS for visible text; CATASTROPHIC FAIL for invisible sections**

### Visible Sections (S1-S3)

- **Header text (light on dark):** White/cream text on near-black background. Excellent contrast. Highly readable.
- **Body text (S1):** Dark charcoal (#1A1A1A range) on warm cream (#FEF5EB range). Strong contrast, comfortable to read. Not harsh (because neither pure black nor pure white is used).
- **Section indicators** ("SECTION 01 / F-PATTERN / SPARSE DENSITY"): Lighter gray/muted text on cream. Adequate but intentionally reduced -- they read as metadata, not primary content. Appropriate.
- **Table text:** Dark on warm gray header, dark on cream body. Adequate.
- **Callout text:** Dark on warm-tinted callout backgrounds. Adequate.
- **Blockquote text (S2):** Serif text on a slightly different warm background. The italic styling may reduce readability slightly but contrast is adequate.

No low-contrast issues in the VISIBLE portion. The text-on-background combinations all meet basic readability requirements.

### Invisible Sections (S4-S12)

This is the DOMINANT contrast failure: text exists in these sections but cannot be seen AT ALL. This is not a "low contrast" issue -- it is a "zero perceptual rendering" issue. Whether caused by text color matching background, display:none, or collapsed containers, the practical result is that the majority of the page has effectively ZERO contrast because nothing is visible.

### Header/Footer Framing

The dark header at the top creates a strong frame. The dark footer at the bottom (visible in the fullpage screenshot) provides a bookend. The dark-to-light-to-dark sandwich structure is sound in principle. But the "light" middle section is supposed to contain rich, differentiated content -- instead it is a vast undifferentiated void.

---

## PA-36: Surface Variety

**Rating: FAIL -- Minimal surface variety; page is materially impoverished**

### Distinct Surface Treatments Identified

Across ALL screenshots at both viewports, I can identify:

1. **Dark header surface** -- near-black background with red accent text and cream body text. STRONG. This is the most "designed" surface on the page.

2. **Standard body text on cream** -- the default S1 surface. Warm cream background, dark text, generous line-height. FUNCTIONAL but not distinctive.

3. **Blockquote surface (S2)** -- slightly different warm background from S1, left red border, Instrument Serif italic text. This is the SECOND most designed surface. The combination of serif italic + red border + background shift creates a genuine moment.

4. **Table surface (S3)** -- warm-toned header row with uppercase small-caps labels, horizontal rules between rows, tabular data layout. FUNCTIONAL. The table reads as a distinct component but is not materially rich (no colored cells, no emphasis variations).

5. **Callout surface** -- visible in one instance (bottom of scroll-02/768px-scroll-01). Left border accent, slightly tinted background, label text. ADEQUATE as a distinct surface.

6. **Divider surface** -- thin horizontal rule spanning content width. MINIMAL.

7. **Section indicator metadata** -- small uppercase text above section headings ("SECTION 01 / F-PATTERN / SPARSE DENSITY"). With a left vertical border (red, visible at 768px scroll-02 for S5). FUNCTIONAL but tiny.

**Total distinct surfaces I can perceptually count: 7**

### What Is Missing

For a 12-section page with 9 callouts, 9 tables, 3 grid layouts, 11 dividers, and an essence callout, 7 perceptible surfaces is DRASTICALLY LOW. Expected for a "materially rich" page at this complexity: 12-15+ distinct surface treatments.

Missing from visual evidence:
- **Grid layouts** (tension-pair, sequence-grid, hypothesis-grid) -- not visible in any screenshot
- **Essence callout** (should be a unique amber-accented surface) -- not visible
- **Code blocks** (should have dark inverted backgrounds) -- not visible
- **Gotcha callouts** (should have red-accented backgrounds) -- may be visible in S4+ but S4+ is blank
- **Tip callouts** (should have green-accented backgrounds) -- not visible
- **Bordered sections** (spec called for 6 zone border-tops) -- zero structural borders detected

### Flat vs. Rich

**The page is materially FLAT.** The visible portion (S1-S3) shows a handful of distinct treatments, but the overwhelming visual experience is cream-on-cream-on-cream. There is no sense of material layering, no "this zone is elevated" vs "this zone is recessed" vs "this zone is highlighted." The background shifts are too subtle to create material differentiation, the structural borders are absent, and the vast majority of the page is invisible.

Compare to what the programmatic data says SHOULD exist: 4 callout types with distinct colors, 3 grid layouts, tables with styled headers, an essence callout, and zone-specific border treatments. The INFRASTRUCTURE for material richness is in the HTML. It does not translate to PERCEPTUAL richness.

---

## Summary Verdicts

| Question | Verdict | Severity |
|----------|---------|----------|
| PA-31: Background Differentiation | **FAIL** | CRITICAL -- 3-4 perceptible backgrounds out of 12 specified; S4-S5 and S9-S10 below threshold |
| PA-32: Border Usage | **FAIL** | CRITICAL -- Zero structural borders; callout borders adequate where visible |
| PA-33: Accent Color Deployment | **PARTIAL** | MODERATE -- Red accent effective in 3 visible uses; other accents unverifiable |
| PA-34: Warm/Cool Balance | **PASS** | MINOR concern -- warm confirmed, no cool breaks, but monotonous |
| PA-35: Contrast Ratios | **FAIL** | CRITICAL -- visible text OK, but S4-S12 content is entirely invisible |
| PA-36: Surface Variety | **FAIL** | CRITICAL -- 7 surfaces visible out of 15+ expected; page is materially flat |

---

## Overall Assessment from Color/Material Perspective

**DO NOT SHIP.**

The page has a sound warm palette in its CSS variables. The header is well-designed. The S2 blockquote is a genuine design moment. The red accent is deployed with restraint and intentionality in the visible portion.

But these positives are overwhelmed by a CATASTROPHIC failure: approximately 70-80% of the page renders as blank warm cream. The entire material system -- backgrounds, borders, callout colors, table treatments, grid layouts -- exists in the HTML and CSS but is INVISIBLE to the viewer. You cannot evaluate color and material on a page you cannot see.

The remediation MUST prioritize making all 12 sections visible before any color/material refinement is meaningful. Once the content is actually rendered, the background delta issue (S4-S5 at 2 RGB, S9-S10 at 5 RGB) and missing structural borders need immediate attention.

**PA-05 Score Contribution (from Color/Material lens): 0.5/4.** The infrastructure exists but the output is perceptually broken. A page where 80% of content is invisible cannot score above 1/4 on any richness dimension.
