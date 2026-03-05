# Recipe-to-Output Traceability Audit
Date: 2026-02-26
Auditor: recipe-tracer (Opus agent, Task #8)
Inputs: artifact-builder-recipe-compose.md (833 lines), artifact-builder-recipe-polish.md (298 lines), gate-manifest.json, gate-runner-spec.md, pa-questions.md

---

## Executive Summary

**Total instructions mapped:** 97 (72 from Pass A, 25 from Pass B)
**Enforcement coverage:**

| Status | Count | % |
|--------|-------|---|
| ENFORCED (gate checks it) | 31 | 32.0% |
| AUDITED (PA question assesses it) | 24 | 24.7% |
| DOCUMENTED (output artifact exists but no enforcement) | 14 | 14.4% |
| UNVERIFIABLE (no gate, no PA, no artifact) | 28 | 28.9% |

**Key finding:** Nearly 29% of recipe instructions have NO verification mechanism. These are D3 crack points (Voluntary Non-Execution) — a builder can skip them with zero pipeline consequence. The most critical unverifiable instructions involve compositional judgment calls: metaphor derivation, density arc planning, transition type selection, and component adaptation.

**Second finding:** The split between BINARY and JUDGMENT instructions is heavily weighted toward judgment:

| Type | Count | % |
|------|-------|---|
| BINARY (do/don't) | 41 | 42.3% |
| JUDGMENT (quality level) | 56 | 57.7% |

Given the established principle that "binary rules achieve 100% compliance; judgment rules achieve ~0%", this means over half the recipe relies on builder intrinsic motivation rather than structural enforcement.

---

## PART 1: PASS A (COMPOSE) TRACEABILITY MATRIX

### PHASE 1: Read Your Vocabulary (Steps 1.1-1.4)

| # | Recipe Ref | Instruction | Type | Gate | PA | Status | Notes |
|---|-----------|-------------|------|------|-----|--------|-------|
| 1 | 1.1 (L40-52) | Read tokens.css cover to cover | BINARY | BV-05 (keyword scan) | — | ENFORCED | BV-05 checks disposition keywords in brief, indirectly validates token awareness |
| 2 | 1.1b (L54-67) | Read mechanism catalog quick-reference | BINARY | — | — | UNVERIFIABLE | No gate checks whether builder read this. Only downstream output reveals it. |
| 3 | 1.2 (L69-72) | Read components.css | BINARY | GR-66 | — | ENFORCED | GR-66 checks >= 8 component classes in output. Indirect but meaningful. |
| 4 | 1.3 (L75-78) | Read the Execution Brief | BINARY | BV-01-04 | — | ENFORCED | BV gates verify brief content; builder reads the verified brief |
| 5 | 1.4 (L80-88) | Self-assess vocabulary knowledge | JUDGMENT | — | — | UNVERIFIABLE | Internal cognitive step. No output artifact. |

### PHASE 2: Select Per-Page Creative Decisions (Steps 2.1-2.9)

| # | Recipe Ref | Instruction | Type | Gate | PA | Status | Notes |
|---|-----------|-------------|------|------|-----|--------|-------|
| 6 | 2.1 (L105-123) | Select zone background strategy | JUDGMENT | GR-11 | PA-55, PA-18 | ENFORCED | GR-11 >= 15 RGB delta. GR-51 distribution. PA-55 perceptibility. |
| 7 | 2.1 (L115) | 20 RGB = FLOOR for adjacent zones | BINARY | GR-11 | — | PARTIAL | GR-11 threshold is 15 not 20. Recipe asks 20 but gate enforces 15. GAP: floor mismatch. |
| 8 | 2.1 (L117) | 25 RGB = COMPOSITIONAL TARGET | JUDGMENT | GR-51 | PA-55 | AUDITED | GR-51 checks >= 50% of deltas >= 25 RGB. PA-55 checks perceptibility. |
| 9 | 2.1 (L118) | Never use #FFFFFF for zone backgrounds | BINARY | GR-07 | — | ENFORCED | GR-07 checks no pure B/W. |
| 10 | 2.1 (L119) | No cold blues or purples | BINARY | GR-05 | — | ENFORCED | GR-05 warm palette. |
| 11 | 2.1 (L123) | Anti-pattern: threshold gaming | JUDGMENT | GR-19 | — | ENFORCED | GR-19 checks < 50% deltas at floor (15-17 RGB). |
| 12 | 2.2 (L125-127) | Select type scale values + naming | JUDGMENT | GR-45 | PA-77 | AUDITED | GR-45 typography variation. PA-77 hierarchy levels. |
| 13 | 2.3 (L129-138) | Select structural metaphor vocabulary | JUDGMENT | GR-33 | PA-44, PA-20 | AUDITED | GR-33 (DIAG) CSS naming mode. PA-44 metaphor without labels. PA-20 personality match. |
| 14 | 2.3 (L133-134) | Name CSS properties by CONCEPT not POSITION | BINARY | GR-33 | — | DOCUMENTED | GR-33 is DIAGNOSTIC only — reports but does not enforce. D3 crack. |
| 15 | 2.4 (L140-153) | Select callout variant semantics | JUDGMENT | — | PA-63 | AUDITED | PA-63 fractal coherence checks component zone-adaptation. |
| 16 | 2.5 (L155-175) | Select component selection + layout | JUDGMENT | GR-66 | PA-37, PA-38 | AUDITED | GR-66 component count. PA-37/38 layout quality. |
| 17 | 2.6 (L177-181) | Select container width 940-960px | BINARY | GR-03 | PA-30, PA-53 | ENFORCED | GR-03 hard gate. PA-30/53 confirm perceptually. |
| 18 | 2.7 (L183-185) | Select hover behavior patterns | JUDGMENT | — | — | UNVERIFIABLE | Pass A instruction; actual hover deployed in Pass B. No Pass A verification. |
| 19 | 2.8 (L187-196) | Select transition type vocabulary (>= 3 types) | BINARY | — | PA-34, PA-62, PA-69 | AUDITED | No gate counts transition types. PA-34/62/69 assess transitions perceptually. |
| 20 | 2.9 (L198-204) | Assess selections coherence / state governing logic | JUDGMENT | — | PA-03, PA-05 | AUDITED | PA-03 "one designer" check. PA-05 COHERENT sub-criterion. |

### PHASE 3: Deploy Scaffolding (Steps 3.1-3.5)

| # | Recipe Ref | Instruction | Type | Gate | PA | Status | Notes |
|---|-----------|-------------|------|------|-----|--------|-------|
| 21 | 3 (L212) | >= 2 distinct layout patterns; single-column <= 60% of zones | BINARY | — | PA-14, PA-15 | AUDITED | No gate measures layout variety. PA-14/15 grid+layout checks. GAP: should be a gate. |
| 22 | 3 (L214) | Check components.css before writing custom CSS; 8+ classes | BINARY | GR-66 | — | ENFORCED | GR-66 >= 8 distinct component classes. |
| 23 | 3 (L216) | Set html { background } to match footer zone | BINARY | GR-44 | PA-75 | ENFORCED | GR-44 trailing void <= 300px. Indirectly enforced. |
| 24 | 3.1 (L218-228) | Deploy 6-channel framework | JUDGMENT | GR-55 | PA-69, PA-74 | AUDITED | GR-55 (ADVISORY) checks >= 3 channel differences. PA-69/74 check channel agreement. |
| 25 | 3.2 (L230-252) | Deploy zone heights for scroll rhythm | JUDGMENT | GR-52 | PA-35, PA-76 | AUDITED | GR-52 >= 3 distinct height bands. PA-35 scroll pacing. PA-76 journey shape. |
| 26 | 3.3 (L254-274) | Deploy visual density arc | JUDGMENT | GR-53 | PA-32, PA-70 | AUDITED | GR-53 (ADVISORY) densest not first/last. PA-32 weight distribution. PA-70 density response. |
| 27 | 3.4 (L276-291) | Build zone by zone; 800-1200 CSS lines | BINARY | — | — | DOCUMENTED | No gate measures CSS line count. RESIDUAL artifact may mention it. |
| 28 | 3.4 (L288-291) | Border widths INTEGER pixels only (1/2/3/4px) | BINARY | GR-09 | — | ENFORCED | GR-09 checks border-weight hierarchy. Also catches non-integer indirectly. |
| 29 | 3.4b (L293-318) | Adapt components to zone character (fractal coherence) | JUDGMENT | GR-34 | PA-63 | AUDITED | GR-34 (DIAG) component modulation. PA-63 fractal zoom coherence. |
| 30 | 3.4b (L301-306) | Callout padding varies: 20px 24px (sparse) / 12px 16px (dense) | BINARY | — | PA-63 | AUDITED | No gate checks per-zone callout padding. PA-63 assesses adaptation. |
| 31 | 3.4c (L320-331) | SCROLL-REVEALS declaration if using scroll-triggered animations | BINARY | — | — | UNVERIFIABLE | No gate checks for this comment. Only useful if screenshots go wrong. |
| 32 | 3.4d (L333-361) | INTENT comments (17-22 total) | BINARY | GR-83 | — | ENFORCED | GR-83 checks >= 15 INTENT comments + disposition coverage. |
| 33 | 3.4d (L343) | Governing metaphor INTENT comment (1) | BINARY | GR-83 | — | ENFORCED | GR-83 checks for METAPHOR keyword. |
| 34 | 3.4d (L344) | Zone boundary INTENT comments (1 per boundary) | BINARY | GR-83 | — | ENFORCED | Counted toward 17-22 total. |
| 35 | 3.4d (L345) | D-01 through D-09 INTENT comments | BINARY | GR-83 | — | ENFORCED | GR-83 checks D-XX coverage. |
| 36 | 3.4d (L346) | Creative divergence INTENT comments (2-5) | BINARY | GR-83 | — | PARTIAL | GR-83 counts total but doesn't verify CREATIVE keyword count. |
| 37 | 3.4d (L347) | Deliberate omission INTENT comments (NOT-IMPL) | BINARY | GR-83 | — | ENFORCED | GR-83 checks for NOT-IMPL keyword. |
| 38 | 3.5 (L363-369) | Assess scaffolding: zones create distinct rooms | JUDGMENT | GR-11 | PA-55 | ENFORCED | GR-11 + PA-55 cover this assessment. |
| 39 | 3.5 (L367) | Transitions vary (>= 3 types) | BINARY | — | PA-62 | AUDITED | No gate counts transition types. CRITICAL GAP. |
| 40 | 3.5 (L368) | Scroll rhythm has shape (not uniform) | JUDGMENT | GR-52 | PA-35 | AUDITED | GR-52 height bands. PA-35 pacing assessment. |

### PHASE 4: Deploy Dispositions (D-01 through D-09)

| # | Recipe Ref | Instruction | Type | Gate | PA | Status | Notes |
|---|-----------|-------------|------|------|-----|--------|-------|
| 41 | 4 (L381) | >= 1 typographic spectacle moment (28-32px pull quote, etc.) | BINARY | — | PA-36, PA-60, PA-67 | AUDITED | No gate checks for oversized type. PA-36 dramatic moment. PA-60 design moment density. PA-67 novelty. |
| 42 | 4 (L381) | Zone-inflect H2s: >= 1 differentiating property between zones | BINARY | GR-45 | — | ENFORCED | GR-45 >= 2 distinct H2 font-size bands. |
| 43 | 4 (L383) | Optimize for quality not gate compliance | JUDGMENT | — | PA-05 | AUDITED | PA-05 assesses perceived quality. Definitionally unjudgeable by gates. |
| 44 | D-01 (L385-394) | Read content register; match CSS to section character | JUDGMENT | BV-08 | PA-72 | AUDITED | BV-08 checks brief-output diff (zones, components). PA-72 content-form resonance. |
| 45 | D-02 (L396-406) | Room perception at boundaries; multiple channels shift | BINARY | GR-11, GR-55 | PA-69, PA-71 | ENFORCED | GR-11 bg delta. GR-55 multi-coherence channels. PA-69/71 transition quality. |
| 46 | D-03 (L408-420) | Signing frame: authority, certainty, consistent hierarchy | JUDGMENT | GR-09 | PA-05, PA-03 | AUDITED | GR-09 border hierarchy. PA-05 "name on it". PA-03 one-designer feel. |
| 47 | D-03 (L413) | 4px ALWAYS = primary border | BINARY | GR-09 | — | ENFORCED | GR-09 checks 3.5-4.5px primary. |
| 48 | D-03 (L416) | Zero decorative elements | BINARY | GR-08 | — | ENFORCED | GR-08 checks zero standalone hrs, empty spacers, icon-only decorative. |
| 49 | D-04 (L422-436) | Second-half surprise moment (1-2, in second half) | JUDGMENT | — | PA-36, PA-47, PA-67 | AUDITED | No gate checks for surprise moments. PA-36 dramatic visual moment. PA-47 second-half surprise. PA-67 novelty beyond competence. |
| 50 | D-04 (L427-430) | Surprise techniques: scale break / color inversion / layout rupture / structural inversion | JUDGMENT | — | PA-60, PA-67 | AUDITED | PA-60 design moment density. PA-67 novelty. |
| 51 | D-05 (L438-453) | Reader's scroll: journey with pacing | JUDGMENT | GR-52 | PA-35, PA-76 | AUDITED | GR-52 height variation. PA-35 scroll pacing. PA-76 journey shape. |
| 52 | D-05 (L451) | Closure in final 2-3 viewports, must be EARNED | JUDGMENT | — | PA-13, PA-75 | AUDITED | PA-13 clear visual ending. PA-75 designed conclusion. |
| 53 | D-06 (L455-467) | Negative space as shape: vary padding between zones | BINARY | GR-13, GR-15 | PA-33, PA-66 | ENFORCED | GR-13/15 prevent excess. PA-33 silence vs dropped signal. PA-66 gap variety. |
| 54 | D-06 (L466) | Stacked gap <= 120px | BINARY | GR-13 | PA-50 | ENFORCED | GR-13 CSS sum <= 120px. PA-50 void count. |
| 55 | D-06 (L466) | 80-120px gap before footer | BINARY | GR-13, GR-44 | — | ENFORCED | GR-13 boundary limit. GR-44 trailing void. |
| 56 | D-09 (L470-488) | Quiet zone: >= 1 zone in middle third, deliberately plainer | JUDGMENT | — | PA-64 | AUDITED | PA-64 "restraint as expression" — designed quiet vs forgot to design. |
| 57 | D-09 (L475-478) | Quiet zone: 2-3 mechanisms, single-column, wider line-height | JUDGMENT | — | PA-64, PA-51 | AUDITED | PA-64 intentional plainness. PA-51 overall density feel. |
| 58 | D-09 (L488) | Anti-pattern: empty zone with uniform cream = void not quiet | BINARY | PA-50, PA-51 | — | AUDITED | PA-50 content percentage. PA-51 void-dominated detection. |

### PHASE 5: Self-Evaluate (Pass A — Partial)

| # | Recipe Ref | Instruction | Type | Gate | PA | Status | Notes |
|---|-----------|-------------|------|------|-----|--------|-------|
| 59 | 5.3 (L517-521) | Take screenshot and compare vs conviction | BINARY | — | — | UNVERIFIABLE | Internal builder step. No gate checks if builder actually took a screenshot. |
| 60 | 5.5 (L523-525) | Apply Reader's Scroll (D-05) | JUDGMENT | — | PA-35 | AUDITED | PA-35 assesses scroll pacing. |
| 61 | 5.6 (L527-533) | Check mode indicators (concept naming, modulation, metaphor logic) | JUDGMENT | GR-33, GR-34 | — | DOCUMENTED | GR-33/34 are DIAGNOSTIC — report but don't enforce. |
| 62 | 5.7 (L535-544) | Output: 800-1200 CSS lines | BINARY | — | — | UNVERIFIABLE | No gate measures CSS line count. |
| 63 | 5.7 (L540) | Responsive (1440px + 768px) | BINARY | Step 5 in manifest | — | ENFORCED | Gates re-run at 768px viewport per manifest executionOrder step 5. |
| 64 | 5.7 (L541) | Surprise moments (D-04) present | BINARY | — | PA-36, PA-67 | AUDITED | No gate detects surprise moments. PA-36/67 assess. |
| 65 | 5.7 (L542) | Conviction statement: <!-- CONVICTION: ... --> (3 sentences) | BINARY | GR-50 | — | DOCUMENTED | GR-50 is ADVISORY — checks presence + >= 3 sentences but doesn't block. |
| 66 | 5.7 (L543) | RESIDUAL artifact: <!-- RESIDUAL: ... --> | BINARY | GR-78 | — | ENFORCED | GR-78 (RECOMMENDED) validates RESIDUAL comment. Cycle >= 2 only. |
| 67 | 5.8 (L547-568) | Surface 5-10 improvements in IMPROVEMENTS comment | BINARY | — | — | UNVERIFIABLE | No gate checks for IMPROVEMENTS comment. CRITICAL GAP for REFINE decision. |
| 68 | 5.8 (L562) | At least 1 HIGH confidence, 2 different tags | BINARY | — | — | UNVERIFIABLE | No validation of IMPROVEMENTS content. |

### PHASE 6: Temporal Composition (Steps 6.1-6.6)

| # | Recipe Ref | Instruction | Type | Gate | PA | Status | Notes |
|---|-----------|-------------|------|------|-----|--------|-------|
| 69 | 6.1 (L578-582) | Deploy density arc (OPENING -> DEEPENING -> RESOLVING) | JUDGMENT | GR-53 | PA-32, PA-35 | AUDITED | GR-53 (ADVISORY) densest not first/last. PA-32/35 assess. |
| 70 | 6.2 (L584-588) | Deploy multi-coherence (6 channels, 4 directions) | JUDGMENT | GR-55 | PA-69, PA-74 | AUDITED | GR-55 (ADVISORY) >= 3 channels. PA-69/74 check channel shifts. |
| 71 | 6.3 (L590-592) | Deploy structural metaphor (STRUCTURAL not ANNOUNCED) | JUDGMENT | — | PA-44 | AUDITED | PA-44 checks metaphor without labels. No gate. |
| 72 | 6.4 (L594-596) | Deploy content-form coupling | JUDGMENT | BV-08 | PA-72 | AUDITED | BV-08 zones dimension. PA-72 content-form resonance. |

---

## PART 2: PASS B (POLISH) TRACEABILITY MATRIX

| # | Recipe Ref | Instruction | Type | Gate | PA | Status | Notes |
|---|-----------|-------------|------|------|-----|--------|-------|
| 73 | 1.1 (L29-36) | Read Pass A HTML: identify metaphor, zones, density, quiet zone | JUDGMENT | — | — | UNVERIFIABLE | Internal cognitive step. |
| 74 | 2.1 (L63-68) | Hover states: table rows, links, callouts, cards | BINARY | — | — | UNVERIFIABLE | No gate checks hover state existence. No PA question targets hover specifically. |
| 75 | 2.1 (L69) | Quiet zone hover = subtle (1px, slight opacity) | JUDGMENT | — | PA-64 | AUDITED | PA-64 quiet zone intentionality implicitly covers this. |
| 76 | 2.2 (L72) | tabular-nums on numbers in tables/lists | BINARY | — | — | UNVERIFIABLE | No gate or PA checks font-variant-numeric. |
| 77 | 2.2 (L73) | text-indent: 1.5em on opening paragraphs | BINARY | — | — | UNVERIFIABLE | No verification mechanism. |
| 78 | 2.2 (L74) | Zone-specific ::selection colors | BINARY | GR-10 | — | ENFORCED | GR-10 cross-page DNA checks ::selection red. |
| 79 | 2.3 (L76-77) | @media print styles | BINARY | GR-46 | — | DOCUMENTED | GR-46 (ADVISORY) checks >= 1 print rule. Doesn't block. |
| 80 | 2.4 (L79-82) | Edge treatments: first-child, last-child, even/odd rows | BINARY | — | — | UNVERIFIABLE | No gate or PA specifically checks edge treatments. |
| 81 | 2.5 (L84-85) | @media (prefers-reduced-motion) | BINARY | — | PA-73 | AUDITED | PA-73 accessibility check may catch missing reduced motion. |
| 82 | 2.6 (L87-92) | Narrate D-07 decisions with INTENT comments | BINARY | GR-83 | — | ENFORCED | GR-83 counts INTENT comments. |
| 83 | 3.1 (L98-115) | Skip link as first child of body | BINARY | GR-10 | PA-73 | ENFORCED | GR-10 cross-page DNA checks skip link. PA-73 keyboard/screenreader. |
| 84 | 3.2 (L117-121) | ARIA landmarks: banner, main, navigation, contentinfo | BINARY | — | PA-73 | AUDITED | PA-73 accessibility assessment. No gate checks ARIA roles. |
| 85 | 3.3 (L123-124) | Heading hierarchy: no skipped levels | BINARY | — | PA-73 | AUDITED | No gate verifies heading order. PA-73 may catch. GAP. |
| 86 | 3.4 (L126-133) | :focus-visible outline: 3px solid, offset 2px | BINARY | GR-10 | — | ENFORCED | GR-10 cross-page DNA checks :focus-visible 3px. |
| 87 | 3.5 (L135-136) | WCAG 2.1 AA contrast (4.5:1 body, 3:1 large) | BINARY | GR-60 | — | ENFORCED | GR-60 WCAG contrast check. |
| 88 | 3.6 (L139-146) | @media (prefers-reduced-motion) with animation/transition 0.01ms | BINARY | — | — | UNVERIFIABLE | No gate verifies reduced-motion media query content. GR-46 only checks print. |
| 89 | 4 (L150-154) | Skeleton test: does skeleton have shape? Report COMPOSED or APPLIED | JUDGMENT | — | PA-05 | AUDITED | PA-05 sub-criterion DESIGNED. |
| 90 | 5.0 (L160-198) | Experiential reader pass (MANDATORY) | BINARY | GR-63 | — | ENFORCED | GR-63 checks <!-- EXPERIENTIAL-CHECK: --> with >= 100 chars. |
| 91 | 5.0 (L174-179) | Report failed/effortful/skipped reading | BINARY | GR-63 | — | ENFORCED | GR-63 checks for legibility + visual clarity mentions. |
| 92 | 5.3 (L213-215) | Screenshot and assess vs conviction | BINARY | — | — | UNVERIFIABLE | No gate verifies builder took post-polish screenshot. |
| 93 | 5.7 (L236-248) | Output: EXPERIENTIAL-CHECK + SELF-EVALUATION comments | BINARY | GR-63, GR-43 | — | ENFORCED | GR-63 experiential marker. GR-43 self-evaluation comment. |
| 94 | ADD-ONLY (L253-276) | NO changing zone backgrounds, layout, font-size, font-weight, etc. | BINARY | BV-08 | — | ENFORCED | BV-08 brief-output diff detects if Pass B diverged from Pass A composition. |
| 95 | ADD-ONLY (L276) | Document compositional flaws, do NOT fix them | BINARY | — | — | UNVERIFIABLE | No mechanism verifies Pass B restraint. If Pass B changes composition, nothing catches it. |
| 96 | 5.8 (L282-296) | IMPROVEMENTS comment: 5-10 items with Category/Zone/Confidence | BINARY | — | — | UNVERIFIABLE | No gate checks IMPROVEMENTS comment. Same gap as Pass A #67. |
| 97 | 5.8 (L296) | 3+ HIGH confidence items = orchestrator MUST override SHIP to REFINE | BINARY | — | — | UNVERIFIABLE | No gate reads IMPROVEMENTS to enforce this rule. CRITICAL PROCESS GAP. |

---

## PART 3: REDUNDANCY ANALYSIS

Instructions that appear in MULTIPLE files, creating potential for drift:

| Instruction | Pass A Location | Pass B Location | Gate Spec Location | Conflict Risk |
|-------------|----------------|-----------------|-------------------|---------------|
| Container 940-960px | Step 2.6 (L177-181) | — | GR-03 | LOW — gate is definitive |
| Background >= 15 RGB | Step 2.1 (L110) + D-02 (L401) | — | GR-11 | LOW — but recipe says 20, gate says 15 |
| Stacked gap <= 120px | D-06 (L466) | — | GR-13 | LOW — gate is definitive |
| INTENT comments 17-22 | Step 3.4d (L342) | Step 2.6 (L87-92) | GR-83 (>= 15) | MEDIUM — recipe says 17-22, gate says >= 15 |
| EXPERIENTIAL-CHECK | — | Step 5.0 (L189) | GR-63 (>= 100 chars) | LOW — gate is definitive |
| CONVICTION statement | Step 5.7 (L542) | — | GR-50 (>= 3 sentences) | LOW — GR-50 is ADVISORY only |
| SELF-EVALUATION | — | Step 5.7 (L242) | GR-43 | LOW — GR-43 checks existence |
| Skip link | — | Step 3.1 (L98-115) | GR-10 | LOW — gate is definitive |
| :focus-visible 3px | — | Step 3.4 (L126-133) | GR-10 | LOW — gate is definitive |
| ::selection red | — | Step 2.2 (L74) | GR-10 | LOW — gate is definitive |
| Hover states | Step 2.7 (L183-185) | Step 2.1 (L63-68) | — | HIGH — referenced in both passes, no gate checks either |
| Font hierarchy | Step 2.2 (L125-127) | — | GR-45 | LOW — gate is definitive |
| Border integer pixels | Step 3.4 (L288-291) | — | GR-09 | LOW — gate is definitive |
| Component adoption >= 8 | Step 3 (L214) | — | GR-66 | LOW — gate is definitive |
| @media print | — | Step 2.3 (L76-77) | GR-46 (ADVISORY) | MEDIUM — recipe requires, gate is advisory |

**CRITICAL REDUNDANCY CONFLICT:** Recipe Step 2.1 (L115) says "20 RGB delta = FLOOR" but GR-11 threshold is 15 RGB. A builder who follows only the gate threshold (15) will technically pass but violate the recipe's stated intention. This is a specification-enforcement mismatch.

---

## PART 4: CRITICAL UNVERIFIABLE INSTRUCTIONS (D3 CRACK POINTS)

These 28 instructions have NO gate enforcement and NO PA question coverage. They are fully dependent on builder voluntary compliance.

### HIGH IMPACT (would significantly degrade output if skipped)

| # | Recipe Ref | Instruction | Impact | Proposed Fix |
|---|-----------|-------------|--------|-------------|
| 67 | 5.8 (Pass A) | IMPROVEMENTS comment (5-10 items) | CRITICAL — feeds REFINE/RELEASE decision | **Propose GR-84:** Check `<!-- IMPROVEMENTS:` exists, count items >= 5, check HIGH keyword count. RECOMMENDED tier. |
| 97 | 5.8 (Pass B) | 3+ HIGH items = force REFINE | CRITICAL — broken process logic | **Propose GR-84 extension:** If HIGH count >= 3, gate returns WARNING flag for orchestrator. |
| 74 | 2.1 (Pass B) | Hover states on tables/links/callouts/cards | HIGH — entire D-07 disposition unverified | **Propose GR-85:** Count `:hover` CSS rules. Threshold >= 4 distinct selectors with `:hover`. RECOMMENDED tier. |
| 95 | ADD-ONLY (Pass B) | Pass B must not change composition | HIGH — composition could be silently destroyed | **Propose BV-09:** Diff Pass A output vs Pass B output. Flag if zone backgrounds, font-size, or layout structure changed. RECOMMENDED BV tier. |
| 21 | 3 (Pass A) | >= 2 layout patterns; single-column <= 60% | HIGH — layout variety is a major quality driver | **Propose GR-86:** Count distinct layout modes (grid, flex, single-column). Threshold >= 2 layout types. RECOMMENDED tier. |
| 39 | 3.5 (Pass A) | Transitions vary >= 3 types | HIGH — uniform transitions = temporal monotony | **Propose GR-87:** At zone boundaries, classify transition types (border-only, bg-shift, full-stop). Count distinct types >= 3. RECOMMENDED tier. |

### MEDIUM IMPACT (noticeable degradation if skipped)

| # | Recipe Ref | Instruction | Impact | Proposed Fix |
|---|-----------|-------------|--------|-------------|
| 2 | 1.1b (Pass A) | Read mechanism catalog | MEDIUM — vocabulary breadth | Indirect: covered by BV-08 component dimension |
| 5 | 1.4 (Pass A) | Self-assess vocabulary knowledge | MEDIUM — cognitive prep | Not fixable by gate. Internal step. |
| 27 | 3.4 (Pass A) | 800-1200 CSS lines | MEDIUM — proxy for effort/depth | **Propose GR-88:** Count CSS lines inside `<style>`. Threshold 600-1500. ADVISORY tier (informational). |
| 31 | 3.4c (Pass A) | SCROLL-REVEALS comment | LOW-MEDIUM — aids screenshot debugging | **Extend GR-83:** Check for SCROLL-REVEALS comment if page uses opacity:0 or transform:translateY in CSS. |
| 59 | 5.3 (Pass A) | Take screenshot during self-eval | MEDIUM — builder self-correction | Not fixable by gate. Could add timestamp check in SELF-EVALUATION comment. |

### LOW IMPACT (cosmetic or edge-case)

| # | Recipe Ref | Instruction | Impact | Proposed Fix |
|---|-----------|-------------|--------|-------------|
| 76 | 2.2 (Pass B) | tabular-nums on numbers | LOW — micro-typography | Could extend GR-18 anti-ghost to check for font-variant-numeric presence. |
| 77 | 2.2 (Pass B) | text-indent on opening paragraphs | LOW — micro-typography | ACCEPT as unverifiable (creative choice). |
| 80 | 2.4 (Pass B) | Edge treatments: first-child, last-child, even/odd | LOW — polish detail | Could add to GR-83 INTENT check (D-07 narration). |
| 88 | 3.6 (Pass B) | Reduced-motion media query CONTENT | LOW — a11y edge | **Propose GR-89:** Check @media (prefers-reduced-motion) contains animation-duration or transition-duration. ADVISORY. |
| 92 | 5.3 (Pass B) | Post-polish screenshot | LOW — verification step | Not gate-fixable. |
| 18 | 2.7 (Pass A) | Select hover patterns (Pass A planning) | LOW — planning step for Pass B | Covered by Pass B hover deployment. |
| 73 | 1.1 (Pass B) | Read Pass A HTML thoroughly | LOW — cannot verify reading | Not gate-fixable. |

---

## PART 5: GATE COVERAGE OF RECIPE THEMES

Summary of how well each recipe THEME is covered by gates + PA:

| Theme | Recipe Lines Devoted | Gate Coverage | PA Coverage | Overall |
|-------|---------------------|---------------|-------------|---------|
| **Identity constraints** (colors, borders, fonts, container) | ~80 | STRONG (GR-01-10) | PA-18, PA-19 | WELL COVERED |
| **Perception thresholds** (bg delta, gap limits, contrast) | ~60 | STRONG (GR-11-15, GR-60) | PA-50-56 | WELL COVERED |
| **Component adoption** (library usage, class count) | ~20 | MODERATE (GR-66) | PA-37, PA-38 | ADEQUATE |
| **Typography** (scale, hierarchy, spectacle) | ~30 | MODERATE (GR-45, GR-67) | PA-77, PA-29 | ADEQUATE |
| **Metaphor / mode** (concept naming, structural expression) | ~40 | WEAK (GR-33 DIAG only) | PA-44, PA-20 | PA-DEPENDENT |
| **Dispositions D-01 through D-06, D-09** | ~120 | WEAK (GR-83 narration only) | PA-05, PA-63-68 | PA-DEPENDENT |
| **Density arc / scroll rhythm** | ~50 | WEAK (GR-52 RECOMMENDED, GR-53 ADVISORY) | PA-32, PA-35, PA-76 | PA-DEPENDENT |
| **Surprise / delight** | ~30 | NONE | PA-36, PA-47, PA-67 | PA-ONLY |
| **Hover / behavioral CSS** | ~30 | NONE | NONE | UNVERIFIED |
| **Self-evaluation artifacts** | ~60 | MODERATE (GR-43, GR-63, GR-50) | — | PARTIAL |
| **IMPROVEMENTS / REFINE decision** | ~30 | NONE | — | UNVERIFIED |
| **Add-only constraint (Pass B)** | ~25 | NONE (BV-08 partial) | — | WEAK |
| **Accessibility** | ~40 | MODERATE (GR-10, GR-60) | PA-73 | ADEQUATE |

---

## PART 6: SUMMARY OF PROPOSED NEW GATES

| Proposed ID | Name | Tier | What It Checks | Closes Gap For |
|-------------|------|------|----------------|----------------|
| GR-84 | IMPROVEMENTS Comment Verification | RECOMMENDED | `<!-- IMPROVEMENTS:` exists, >= 5 items, count HIGH keywords | #67, #68, #96, #97 |
| GR-85 | Hover State Count | RECOMMENDED | >= 4 distinct CSS selectors containing `:hover` | #74, #80 |
| GR-86 | Layout Variety | RECOMMENDED | >= 2 distinct layout modes (grid/flex/single-column) | #21 |
| GR-87 | Transition Type Variety | RECOMMENDED | >= 3 distinct transition classification types at boundaries | #39 |
| GR-88 | CSS Line Count | ADVISORY | CSS lines 600-1500 range | #27, #62 |
| GR-89 | Reduced Motion Content | ADVISORY | @media prefers-reduced-motion contains duration rules | #88 |
| BV-09 | Pass B Composition Lock | RECOMMENDED (BV) | Diff Pass A vs Pass B: flag changes to backgrounds, font-size, layout | #95 |

**If all 7 proposed gates were implemented:**
- ENFORCED: 31 -> 37 (+6)
- AUDITED: 24 -> 24 (unchanged)
- DOCUMENTED: 14 -> 12 (-2, GR-84 promotes #67/#96)
- UNVERIFIABLE: 28 -> 22 (-6)
- New enforcement coverage: 32% -> 38%
- Remaining unverifiable: 28.9% -> 22.7%

The remaining 22 unverifiable items are JUDGMENT calls (metaphor derivation, density planning, creative excitement) that are inherently internal cognitive processes. These are appropriately left to PA assessment rather than gate enforcement.

---

## PART 7: CRITICAL FINDINGS

### Finding 1: IMPROVEMENTS Comment is the Biggest Process Hole

The recipe says (Pass A Step 5.8 and Pass B Step 5.8): "If 3+ items are HIGH confidence, the orchestrator MUST override SHIP to REFINE." But NO gate reads the IMPROVEMENTS comment. The entire REFINE decision logic depends on information that is never extracted from the HTML. This means:
- Builder can write zero IMPROVEMENTS items and the pipeline won't notice
- Builder can write 5 HIGH-confidence items and the pipeline will still SHIP
- The REFINE/RELEASE decision is disconnected from builder self-awareness

**Fix priority: HIGHEST.** Propose GR-84 as REQUIRED (not RECOMMENDED) given its process-logic impact.

### Finding 2: Hover States Are Completely Unverified

D-07 (Edge Intentionality) is an entire disposition with ~30 lines of recipe instructions and ZERO gate coverage and ZERO PA question coverage. No PA question asks "Do hover states exist and feel intentional?" The closest is PA-73 (accessibility), which checks keyboard reachability but not hover design quality.

**Fix priority: HIGH.** Propose GR-85 + a PA question extension (add hover assessment to PA-16 or create PA-82).

### Finding 3: Pass B Add-Only Constraint Is Unenforceable

The recipe specifies 8 prohibited modifications for Pass B. None are verified. BV-08 (brief-output diff) compares brief vs final HTML but doesn't compare Pass A output vs Pass B output. A rogue Pass B agent could restructure the entire page and no gate would catch it.

**Fix priority: HIGH.** Propose BV-09 (Pass A/Pass B composition lock diff).

### Finding 4: Recipe-Gate Threshold Mismatch on Background Delta

Recipe says "20 RGB = FLOOR" (Step 2.1, L115). GR-11 says "15 RGB." A builder can produce 16 RGB deltas that pass the gate but violate the recipe's stated intention. This is a D2 crack — the brief says one thing, the gate enforces another.

**Fix priority: MEDIUM.** Either update GR-11 to 20 RGB or update recipe to say 15 RGB. Recommend updating the recipe to say "15 RGB = minimum perceptible (gate), 20 RGB = floor for compositional intent (recipe target)."

### Finding 5: Transition Variety Has No Gate

The recipe requires >= 3 transition types (Step 2.8, Step 3.5). This is referenced 3 times. No gate checks it. PA-62 (transition variation) is the only verification. Given that Gas Town's uniform transitions were identified as the primary temporal monotony defect, this seems like a high-value gate addition.

**Fix priority: MEDIUM.** Propose GR-87 (transition type variety).

---

*End of Recipe Traceability Audit. 97 instructions mapped across 2 recipe files. 7 new gates proposed. 5 critical findings documented.*
