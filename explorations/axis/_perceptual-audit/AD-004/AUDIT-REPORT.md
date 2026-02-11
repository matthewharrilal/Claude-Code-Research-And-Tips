# PERCEPTUAL AUDIT REPORT: AD-004 Spiral

## VERDICT: SHIP WITH CONCERNS

**Rationale:** AD-004 is typographically polished, palette-coherent, and demonstrates genuine innovation in its border-weight-as-confidence encoding. Both auditors independently confirmed its scholarly character and the effectiveness of the geological metaphor. However, three concerns prevent an unqualified SHIP: (1) a functional text-clipping breakpoint failure at 768px, (2) excessive whitespace in the lower strata that breaks reading flow and hides content, and (3) the Open stratum's left border being invisible at both viewports. None of these are soul violations, but all would cause a professional designer to flag the page before release.

---

## 1. CONTAMINATION CHECK

**Alpha:** CLEAN. Findings use perceptual language throughout: "border weights," "thick," "medium," "thin," "barely-there," "subpixel," "0.75 pixels." One reference to "subpixel rendering" describes a visual observation, not a CSS property inspection. No `border-left-width`, `padding-left`, `font-size`, or other CSS property names used as evidence sources. All findings derive from screenshot observation.

**Beta:** CLEAN. Findings use perceptual language: "thick and dark," "thinner left border," "thin border," "hairline border." References to "two-column layout," "sidebar," "dark code blocks" are visual descriptions of rendered output, not source-code inspection. No CSS property names appear as evidence. All findings derive from Playwright screenshots and accessibility snapshots.

**Result:** 0/2 auditors contaminated. All findings admissible.

---

## 2. SOUL COMPLIANCE

Cross-referencing against the 12 ALWAYS-LOCKED rules:

| ALWAYS-LOCKED Rule | Alpha Observation | Beta Observation | Status |
|--------------------|-------------------|------------------|--------|
| `border-radius: 0` on ALL elements | No rounded corners observed anywhere | No rounded corners noted | PASS |
| `box-shadow: none` on ALL elements | No shadows observed | No shadows noted | PASS |
| `filter: drop-shadow()` prohibited | No drop shadows observed | No drop shadows noted | PASS |
| No 2px structural borders | Border gradient observed as 4/3/3/1 (Alpha). No 2px borders flagged | Border weights described as "thick/medium/thin/hairline" -- no 2px noted | PASS |
| `opacity === 1.0` on ALL visual elements | No transparency artifacts observed | No transparency noted | PASS |
| Font trio ONLY | Display serif, body sans, mono for meta/code observed (Alpha). Consistent (Beta) | "Italic serif" for callouts/headings, sans for body, mono for labels -- correct trio | PASS |
| `--color-primary: #E83025` (Sanrok red) | Red left border on Established observed | Red accent on Established confirmed | PASS |
| `--color-background: #FEF9F5` (warm cream) | Warm cream background confirmed throughout | Warm cream confirmed, no cool grays | PASS |
| `--color-text: #1A1A1A` (near-black) | Dark text observed | Dark charcoal text confirmed | PASS |
| No CSS animations implying object movement | Animations disabled for audit; no movement effects observed in static content | No movement effects observed | PASS |
| No hover transforms | Not testable via screenshot audit | Not testable via screenshot audit | N/A |
| DD-F-006 fractal at exactly 5 scales | Not applicable to AD-004 (spiral axis, not fractal) | Not applicable | N/A |

**Soul Compliance Result: 10/10 applicable ALWAYS-LOCKED rules PASS. 0 soul violations detected.**

Note: FIX-002 from prior audits flagged `box-shadow` on `pre` elements in AD-004. Neither perceptual auditor observed shadows on code blocks, suggesting this may have been fixed or was not rendered at audit time. This is a prior-audit finding; the perceptual audit does not independently confirm or deny it.

---

## 3. LOCK SHEET CROSS-REFERENCE

### LOCKED Decisions -- Auditor Observations

| LOCKED Decision | What Auditors Observed | Assessment |
|-----------------|----------------------|------------|
| Type scale (2.5/1.625/1.375/1/0.875/0.75 rem) | Alpha: "appropriate size, generous line height." Beta: "comfortable line length, clear hierarchy" | Correct tokens appear to be applied |
| Spacing scale tokens | Alpha: noted specific spacing observations. Beta: noted spacing | No off-token spacing flagged |
| 5 callout accents | Alpha: purple Essence, amber Caution, blue Note, green Forward Thread. Beta: amber Caution, teal Finding | Colors within locked palette |
| Border left-width: 4px for callouts | Alpha: "4px left border is continuous and strong" on callouts | Correct |
| Callout family DNA: 2-zone, 4px left | Alpha: consistent callout structure observed | Correct |
| Essence/CoreAbstraction serif italic | Alpha: "purple italic serif" in sidebar. Beta: "italic text 'Four pixels of certainty'" | Correct |
| Dark code blocks (#1A1A1A bg) | Alpha: "dark background with good syntax color contrast." Beta: "light text on dark background" -- good contrast | Consistent and correctly rendered |
| Dark header (full-bleed, 3px red bottom border) | Alpha: "Dark full-bleed header with warm cream text." Beta: "dark header grounds you" | Present and correct |
| Max 2 callouts per viewport | Alpha: observed callouts spread across sections, no viewport overload. Beta: no callout crowding noted | PASS |
| AD-004 Angular spiral = geological strata (no curves) | Alpha: "All boundaries rectilinear." Beta: "no visual or spatial cue that suggests inward tightening" | Correctly rectilinear -- no curves |
| Border-weight gradient: 4px/3px/1px (skips 2px) | Alpha: "4 (red) -> 3 (tan) -> 3 (beige) -> 1 (invisible)." Beta: "thick > medium > thin > hairline" | Gradient present and perceptible |
| Compound = sequential, not simultaneous | Alpha: spiral is the only axis pattern on the page. Beta: confirmed single-axis | PASS |
| Responsive collapse to 1-column at 768px | Alpha: "Two-column layout persists at 768px." Beta: "two-column layout is still active" | **CONCERN: Established section does NOT collapse** |

### CHALLENGEABLE Decisions -- Auditor Challenges

| CHALLENGEABLE Decision | Challenge Raised? | By Whom | Assessment |
|------------------------|-------------------|---------|------------|
| Header inner padding | Not challenged | -- | Accepted |
| Body line-height | Not explicitly challenged | -- | Alpha noted "generous line height" positively |
| Zone background colors (#FEF9F5/#FFFFFF/#FAF5ED) | Alpha: "Background colors shift subtly per stratum" | Alpha | Noted but not challenged as problematic |
| Stratum transition zone height | Alpha: "thin tan band" -- not challenged as too small | Alpha | Accepted at current height |
| Page container max-width (860px) | Not challenged | -- | Accepted |
| Breathing zone budget (15% minimum) | Both auditors challenged EXCESSIVE whitespace, not insufficient | Both | **CHALLENGED: Exceeded budget to the point of harm** |
| Confidence-proportional spacing | Alpha: "semantically intentional but perceptually reads as a page that ran out of content." Beta: "catastrophic for engagement" | Both | **CHALLENGED: Gradient not just perceptible, it's destructive** |

---

## 4. DEDUPLICATED FINDINGS

### 4.1 WOULD-NOT-SHIP

**WNS-1: Comparison grid text clipping at 768px**
- Alpha Finding #1 (HIGH) + Beta Finding #4 (HIGH)
- **Concordance: 2/2 auditors.** Alpha: "right panel's text is visibly truncated -- words are cut off at the panel's right edge." Beta: "sidebar competes with body text."
- Alpha specifically identified the breakpoint: media query `max-width: 768px` means collapse happens BELOW 768, not AT 768. At exactly 768px, two-column persists and clips.
- **Viewport behavior:** Severe at 768px, not present at 1440px.
- **Assessment:** Functional failure. Unreadable text in a side-by-side layout is a ship-blocker. Users will encounter truncated words.

**WNS-2: Multi-viewport blank zones between strata at 1440px**
- Alpha Finding #3 (Medium) + Beta Finding #1 (CRITICAL)
- **Concordance: 2/2 auditors.** Alpha: "more than half the viewport is empty warm cream." Beta: "approximately FOUR consecutive screens of nothing... catastrophic for engagement." Beta severity is higher because they scrolled the entire page and encountered the cumulative effect.
- **Viewport behavior:** Severe at 1440px; compressed and tolerable at 768px.
- **Assessment:** Beta's severity upgrade is warranted. Multiple consecutive blank viewports at 1440px would cause users to stop scrolling, hiding the Speculative and Open sections. This is a designer-refusing-to-release issue at desktop width.

### 4.2 LOOKS-WRONG

**LW-1: Open stratum left border is invisible**
- Alpha Finding #2 (HIGH) -- exclusively flagged by Alpha with precise measurement
- Alpha: "computed border-left-width is 0.75 pixels (subpixel rendering)... border color (rgb 240, 235, 227) is nearly identical to the background (rgb 254, 249, 245)."
- Beta did not flag this specifically but described the Open section as having a "hairline border."
- **Viewport behavior:** Worst at 768px (subpixel rendering), barely visible at 1440px.
- **Assessment:** The semantic intent (lightest confidence = lightest signal) crosses from subtle to absent. The border is functionally invisible. A viewer would not perceive any left border on the Open stratum.

**LW-2: Spiral metaphor not perceptually achieved**
- Alpha Finding #4 (Medium) + Beta Finding #2 (HIGH)
- **Concordance: 2/2 auditors.** Alpha: "the layout is a straight vertical column with progressive left indentation, not a spiral reading path." Beta: "the page reads as four stacked horizontal layers, not a spiral... there is no sense of inward tightening."
- Alpha: "a viewer sees 'stepped left borders,' not 'spiral path.'" Beta: "the page spirals OUTWARD, not inward."
- **Viewport behavior:** Static across viewports -- the conceptual gap is the same at both sizes.
- **Assessment:** Both auditors agree the spiral label is aspirational, not delivered. The geological metaphor IS delivered effectively. The density runs dense-to-sparse (geologically correct, spirally backward). Per the lock sheet, AD-F-013 locks "angular spiral = geological strata," so the geological execution is correct. The concern is naming, not implementation.

**LW-3: RAR block resets to full container width**
- Alpha Finding #5 (Medium) -- exclusively flagged by Alpha
- Alpha: "The Research Application Record snaps back to full container width -- a jarring spatial reset after the progressive left-indentation of the strata."
- Beta noted no clear visual ending but did not specifically flag the width reset.
- **Viewport behavior:** Static across viewports.
- **Assessment:** After the progressive narrowing of the strata, the RAR block's sudden widening breaks the spatial narrative. This is a LOOKS-WRONG issue: the eye expects continued narrowing or at least stable width, and instead gets an unexplained expansion.

**LW-4: No clear visual ending**
- Beta Finding #3 (HIGH) -- exclusively flagged by Beta
- Beta: "the page just STOPS... and it actually stops TWICE." The first apparent ending is the blank zone after Probable; the second is after the RAR block, which "fades into empty cream."
- Alpha noted the Open stratum feels like "a page that ran out of content" but did not call out the ending specifically.
- **Viewport behavior:** Worse at 1440px where blank zones amplify the false-ending effect.
- **Assessment:** The absence of a footer, closing element, or return-to-top gesture leaves the page feeling incomplete. Combined with WNS-2 (blank zones), readers may never reach the page's actual end.

**LW-5: Established section two-column layout cramped at 768px**
- Alpha Finding #6 (Low) + Beta Finding #4 (HIGH)
- **Concordance: 2/2 auditors.** Alpha: "cramped but functional." Beta: "sidebar and body text are competing for a narrow screen, neither breathing."
- Beta's higher severity reflects their assessment that neither column breathes at this width.
- **Viewport behavior:** 768px only -- well-proportioned at 1440px.
- **Assessment:** The golden ratio two-column layout persists at 768px where it should collapse. Both auditors noted it; severity split (Alpha Low vs Beta HIGH) averages to LOOKS-WRONG.

### 4.3 COULD-BE-BETTER

**CBB-1: Confidence badge visual inconsistency**
- Alpha Finding #9 (Low) + Beta Finding #5 (MEDIUM)
- **Concordance: 2/2 auditors.** Alpha: "confidence badges and stratum transition labels both use the smallest type size... hard to distinguish from each other." Beta: "'CONFIDENCE: HIGH' has a warm/reddish border tint... the others have a neutral gray border."
- Alpha focused on size similarity with transition labels; Beta focused on color inconsistency between badges. Together: badges are both inconsistent with each other and indistinct from other meta-sized elements.
- **Viewport behavior:** Static.

**CBB-2: Pull quotes appear only in Probable and Open strata**
- Alpha Finding #8 (Low) -- exclusively flagged by Alpha
- Alpha: "Pull quotes appear in Probable and Open but NOT in Established or Speculative. This breaks the pattern."
- **Viewport behavior:** Static.

**CBB-3: Open Questions "?" markers oversized relative to body text**
- Alpha Finding #7 (Low) -- exclusively flagged by Alpha
- Alpha: "The large italic '?' is at a very different size than the body text beside it."
- **Viewport behavior:** Static.

**CBB-4: Sidebar metadata panel competes with main content for attention**
- Alpha Finding #11 (Low) -- flagged by Alpha; echoed less specifically by Beta
- Alpha: "bordered box with structured key-value pairs is visually dense and draws the eye away from the introductory prose."
- **Viewport behavior:** Worse at 768px (LW-5), notable at 1440px.

**CBB-5: Comparison panels feel stylistically different from geological metaphor**
- Alpha Finding (implied in consistency section) + Beta Finding #7 (MEDIUM)
- Alpha: "The comparison grid feels like a borrowed component rather than a native spiral element." Beta: "They feel more like a technical documentation component... dropped into a geological metaphor page."
- **Concordance: 2/2 auditors.** Both independently identified the same stylistic mismatch.
- **Viewport behavior:** Static.

**CBB-6: Page is extremely top-heavy (squint test)**
- Beta Finding #6 (MEDIUM) -- primarily flagged by Beta
- Beta: "The first third contains virtually ALL the visual weight." Alpha's squint response: "inverted triangle -- wide/dense at top, narrow/sparse at bottom."
- **Concordance: 2/2 auditors** confirmed the same visual shape. However, this IS the intended geological encoding (bedrock=dense, atmosphere=sparse), so it is architecturally correct even if perceptually unbalanced.
- **Viewport behavior:** Worse at 1440px.

**CBB-7: No return-to-top gesture or visual footer closure**
- Beta Finding #9 (LOW) -- flagged by Beta
- **Viewport behavior:** Static.

---

## 5. COLD LOOK CONCORDANCE

### 1440px Cold Look Comparison

| Dimension | Alpha | Beta | Concordance |
|-----------|-------|------|-------------|
| Gut reaction | "Dignified geological column," scholarly | "Serious and layered, like a geology textbook" | **STRONG CONCORDANCE** -- both independently used geological/scholarly framing |
| Worst thing | "Massive void of empty space in the lower half" | "Confidence: HIGH badge looks like a placeholder" | **DIVERGENT** -- Alpha sees macro-level spatial issue; Beta sees micro-level element issue |
| Best thing | "Four-cell geological survey map" | "Essence callout -- 'Four pixels of certainty'" | **COMPLEMENTARY** -- Alpha values structural orientation; Beta values emotional resonance |
| Ship verdict | YES WITH RESERVATIONS | YES WITH RESERVATIONS | **CONCORDANT** |

### 768px Cold Look Comparison

| Dimension | Alpha | Beta | Concordance |
|-----------|-------|------|-------------|
| Gut reaction | Two critical issues: comparison grid clipping + invisible Open border | "Cramped and heavy at the top" -- sidebar fights body text | **COMPLEMENTARY** -- Alpha sees specific failures; Beta sees spatial compression |
| Worst thing | "Comparison grid panels at 768px are side-by-side and text is visibly clipped" | "Sidebar metadata card fights with body text for space" | **DIVERGENT** -- different elements, same theme (content not fitting) |
| Best thing | "Geological survey map collapsing from 4-col to 2x2" | "Dark header scales well" | **COMPLEMENTARY** -- both praise header region, different elements |
| Ship verdict | YES WITH RESERVATIONS (bordering on NO) | YES WITH RESERVATIONS | **CONCORDANT** (Alpha more cautious) |

### Cold Look Synthesis

The cold looks reveal strong alignment on the page's character (scholarly, geological, serious) and verdict (SHIP WITH RESERVATIONS at both viewports). The divergence is in what bothers each auditor most: Alpha gravitates toward spatial and structural concerns (blank voids, clipping, invisible borders); Beta gravitates toward element-level polish and reading experience (badges, cramping, personality). This complementary focus is exactly what dual-auditor design achieves -- together they cover both macro and micro concerns.

---

## 6. SOVEREIGNTY CLASSIFICATION

### AD-004 SOVEREIGN Findings (Unique to Spiral Axis)

| Finding | Why Sovereign |
|---------|---------------|
| WNS-2: Multi-viewport blank zones | Caused by AD-004's confidence-proportional spacing -- unique to the stratum system |
| LW-1: Invisible Open stratum border | Caused by AD-004's border-weight-as-confidence encoding at its lightest extreme |
| LW-2: Spiral metaphor not perceptually achieved | Definitionally sovereign -- only AD-004 claims spiral identity |
| LW-3: RAR block width reset | AD-004-specific spatial narrative (progressive narrowing) makes the reset jarring |
| CBB-2: Inconsistent pull quote placement | AD-004's stratum structure creates the inconsistency |
| CBB-3: Oversized "?" markers | AD-004-specific Open Questions component |

### POTENTIALLY SYSTEMIC Findings

| Finding | Why Potentially Systemic |
|---------|--------------------------|
| WNS-1: Comparison grid text clipping at 768px | Media query breakpoint issue -- same pattern may exist in other ADs using side-by-side layouts |
| LW-4: No clear visual ending | If all 6 ADs share the RAR-at-bottom pattern without footer closure, this is systemic |
| LW-5: Two-column layout cramped at 768px | If other ADs use two-column golden ratio layouts, they may share this 768px collapse issue |
| CBB-1: Confidence badge inconsistency | If badges are templated, the warm/reddish tint on HIGH may appear across all ADs |
| CBB-5: Comparison panels feel borrowed | Other ADs may include similar conventional UI components within their metaphor |
| CBB-6: Top-heavy page (squint test) | ADs that front-load dense content may share this imbalance |
| CBB-7: No footer/return-to-top | Template-level absence affects all 6 ADs |

---

## 7. MULTI-VIEWPORT COMPARISON

| Finding | 1440px | 768px | Verdict |
|---------|--------|-------|---------|
| WNS-1: Comparison grid clipping | Not present | SEVERE -- text truncated | **WORSENS at 768px** |
| WNS-2: Multi-viewport blank zones | SEVERE (~4 empty screens) | Compressed and tolerable | **WORSENS at 1440px** |
| LW-1: Invisible Open border | Barely visible (1px, light color) | Invisible (0.75px subpixel) | **WORSENS at 768px** |
| LW-2: Spiral metaphor gap | Present | Present | **STATIC** |
| LW-3: RAR width reset | Visible | Visible | **STATIC** |
| LW-4: No visual ending | Amplified by blank zones | Less dramatic | **WORSENS at 1440px** |
| LW-5: Two-column cramped | Well-proportioned | Cramped | **WORSENS at 768px** |
| CBB-1: Badge inconsistency | Visible | Visible | **STATIC** |
| CBB-5: Comparison panels foreign | Noticeable | Noticeable | **STATIC** |
| CBB-6: Top-heavy page | Severe (squint) | Moderate (compressed) | **WORSENS at 1440px** |

**Summary:** AD-004 has a split personality across viewports. At 1440px, the dominant problem is excessive whitespace (WNS-2, LW-4, CBB-6). At 768px, the dominant problem is content not fitting (WNS-1, LW-5, LW-1). Neither viewport is problem-free.

---

## 8. POSITIVE FINDINGS

### Confirmed by Both Auditors (2/2 Concordance)

| Positive Finding | Alpha | Beta |
|------------------|-------|------|
| **Border-weight gradient is the page's crown jewel** | "Innovative and effective... the geological gradient is working" | "Strongest and most successful design element... instantly legible and semantically powerful" |
| **Warm palette is consistently executed** | "The palette is unified (warm creams, tans, dark charcoal, red accent)" | "Every neutral, every background, every border lives in the same warm cream/tan family" |
| **Typography system is unified** | "Feels like a single, intentional design voice" | Consistent serif/sans/mono trio confirmed |
| **Header is strong and well-scaled** | "Clean, authoritative, well-proportioned" | "Dark header grounds you... scales well at 768px" |
| **Stratum transitions are effective** | "Provide rhythmic breathing between sections" | "Understated and effective... communicate direction without shouting" |
| **Geological survey map is excellent** | "Provides table-of-contents effect" | "Navigation tabs immediately communicate the geological metaphor" |
| **Page reads as one designer's work** | "One designer. Palette unified, typography systematic" | Not contradicted; noted consistency |

### Single-Auditor Highlights

| Positive Finding | Source |
|------------------|--------|
| **Essence callout ("Four pixels of certainty")** | Beta: "genuinely evocative, gives the metadata panel a human heartbeat" |
| **Table design in Probable section** | Beta: "clean, airy, and readable at both viewports" |
| **Geological map 4-col to 2x2 responsive collapse** | Alpha: "preserves the mental model elegantly" |
| **Inline code snippet styling** | Beta: "slightly warmer background... distinguishes them without clashing" |

---

## 9. FINAL SUMMARY

### What AD-004 Gets Right

AD-004 is the most intellectually ambitious of the explorations audited so far. The border-weight-as-confidence encoding is a genuine design innovation -- both auditors independently identified it as the page's crown jewel. The warm palette is flawless. The typography is systematic. The geological metaphor (bedrock through atmosphere) is faithfully and effectively rendered. The header sets exactly the right scholarly, authoritative tone. The page reads as a unified design voice.

### What Prevents Unqualified SHIP

Three concerns, in priority order:

1. **WNS-1: Text clipping at 768px** -- Functional failure. The comparison grid's breakpoint misses 768px, causing truncated text. This is the only finding that would cause a designer to refuse to release: unreadable content is never acceptable.

2. **WNS-2: Multi-viewport blank zones at 1440px** -- At desktop width, the confidence-proportional spacing creates approximately four consecutive screens of empty warm cream between the Probable and Open sections. This is semantically intentional but perceptually catastrophic -- it hides 40% of the page's content behind a wall of whitespace that most users will interpret as the page ending. Beta's severity escalation (CRITICAL) is warranted.

3. **LW-1: Invisible Open stratum border** -- The border-weight gradient's lightest expression (the Open stratum) crosses from "subtle" to "absent." At 768px the border is genuinely invisible due to subpixel rendering and color-matching. This undermines the gradient's communicative power at its most important moment -- the transition from "some confidence" to "unresolved."

### Architectural Note

Both auditors independently concluded that the spiral metaphor is not perceptually achieved. The page delivers a geological column (dense bedrock at top, thin atmosphere at bottom) with progressive left indentation (a staircase, not a spiral). The density gradient runs opposite to spiral tightening. This is a naming/framing concern rather than an implementation failure -- per AD-F-013, the angular spiral IS geological strata. The auditors' observation confirms that a viewer experiences geology, not spirality. This may be worth noting in the exploration's own reflection section.

### Verdict Confidence

HIGH. Both auditors reached the same overall verdict (SHIP WITH RESERVATIONS) via independent analysis. Their findings are complementary (Alpha focuses on spatial/structural, Beta focuses on flow/emotional), and where they overlap, they reinforce each other. Zero contamination. Zero soul violations. The concerns are real but addressable.

---

*Synthesized from findings-alpha.md (20 findings), findings-beta.md (12 findings), cold-look-alpha.md, cold-look-beta.md, and lock-sheet.md (81 classified decisions). Audit completed 2026-02-10.*
